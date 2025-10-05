# 🚨 Static Export Notice

This project is configured for static export to GitHub Pages. When using static export:

## API Routes Limitations

API routes (`/api/*`) are not supported in static exports. The following API routes exist but will not work in GitHub Pages:

- `/api/health` - Health check endpoint
- `/api/contact` - Contact form submission

## Solutions

### 1. Contact Form Alternative
For the contact form, you have several options:

**Option A: Use a third-party service**
- Formspree
- Netlify Forms
- Getform
- Formsubmit.co

**Option B: Serverless functions**
- Vercel Functions
- Netlify Functions
- AWS Lambda

**Option C: Email service**
- EmailJS
- SMTP service integration

### 2. Health Check
The health check endpoint is not needed for static sites.

### 3. Development vs Production
- **Development**: API routes work normally with `npm run dev`
- **Production**: API routes are disabled when using static export

## Configuration

To disable static export and use API routes:

1. Remove or comment out the `output` configuration in `next.config.ts`
2. Deploy to a platform that supports serverless functions (Vercel, Netlify)

## Recommended Deployment

- **GitHub Pages**: Use static export + third-party form service
- **Vercel**: Use full Next.js with API routes
- **Netlify**: Use static export + Netlify Forms