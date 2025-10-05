import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'company', 'email', 'country', 'product', 'quantity']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Log the submission (in production, you'd save to database)
    console.log('Contact form submission:', body)

    // Send notification using ZAI (optional)
    try {
      const zai = await ZAI.create()
      
      const notification = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a notification system for FastFun Remote contact form submissions.'
          },
          {
            role: 'user',
            content: `New contact form submission received:
            
Name: ${body.firstName} ${body.lastName}
Company: ${body.company}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
WhatsApp: ${body.whatsapp || 'Not provided'}
Country: ${body.country}
Product: ${body.product}
Quantity: ${body.quantity}
Annual Volume: ${body.annualVolume || 'Not provided'}
Timeline: ${body.timeline || 'Not provided'}
Application: ${body.application || 'Not provided'}
Message: ${body.message || 'No message provided'}
NDA Required: ${body.ndaRequired ? 'Yes' : 'No'}
Newsletter: ${body.subscribeNewsletter ? 'Yes' : 'No'}

Please acknowledge this submission and flag any urgent requests.`
          }
        ],
        max_tokens: 150,
        temperature: 0.3
      })

      console.log('AI notification response:', notification.choices[0]?.message?.content)
    } catch (aiError) {
      console.error('Failed to send AI notification:', aiError)
      // Continue even if AI notification fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...body
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}