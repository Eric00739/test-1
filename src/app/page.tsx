'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  CheckCircle, 
  Globe, 
  Users, 
  Clock, 
  Factory, 
  Award, 
  Shield, 
  Zap,
  Smartphone,
  Home as HomeIcon,
  Car,
  Lightbulb,
  Wifi,
  Radio,
  Download,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  TrendingUp,
  Package,
  TestTube,
  Cpu,
  Settings
} from 'lucide-react'

// Static generation configuration
export const dynamic = 'force-static'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    product: '',
    quantity: '',
    country: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                FastFun Remote
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-600 hover:text-orange-600 transition-colors">Products</a>
              <a href="#solutions" className="text-gray-600 hover:text-orange-600 transition-colors">Solutions</a>
              <a href="#industries" className="text-gray-600 hover:text-orange-600 transition-colors">Industries</a>
              <a href="#certificates" className="text-gray-600 hover:text-orange-600 transition-colors">Certificates</a>
              <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-amber-400/10 to-yellow-400/10" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  <Factory className="w-3 h-3 mr-1" />
                  China-Based OEM/ODM Manufacturer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Reliable RF & Wi-Fi Control
                  </span>
                  <br />
                  <span className="text-gray-900">Solutions for OEMs Worldwide</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  15+ years of delivery, 500+ customers across 32+ countries. 
                  <span className="font-semibold text-orange-600"> 7-day prototyping, 98% on-time delivery.</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Lower BOM and field failure rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Pass FCC/CE/RoHS with pre-compliance support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">One-stop customization: enclosure, firmware, app/cloud</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white">
                  Request Samples / Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Catalog
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                Trusted by global brands in access control, smart home, and appliances.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl overflow-hidden">
                <img 
                  src="/factory-hero.jpg" 
                  alt="FastFun Remote Factory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center space-y-4 bg-white/90 backdrop-blur-sm rounded-xl p-8">
                    <Factory className="w-16 h-16 text-orange-600 mx-auto" />
                    <p className="text-gray-800 font-semibold">Factory Tour Video</p>
                    <Button variant="outline" className="bg-white/80">Play Video</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Strip */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-100">
              <span className="font-semibold text-orange-600">15+ Years</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-100">
              <span className="font-semibold text-orange-600">500+ Customers</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-100">
              <span className="font-semibold text-orange-600">32+ Countries</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-100">
              <span className="font-semibold text-orange-600">7-Day Prototyping</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-100">
              <span className="font-semibold text-orange-600">98% On-Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Quick Navigation */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Product Quick Navigation
              </span>
            </h2>
            <p className="text-xl text-gray-600">Complete RF & Wi-Fi control solutions for every application</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Radio,
                title: "RF Transmitters",
                specs: "315/433/868/915 MHz; rolling/fixed codes",
                description: "Customizable housing"
              },
              {
                icon: Wifi,
                title: "RF Receivers",
                specs: "ASK/FSK; high-sensitivity designs",
                description: "Relay/SSR options"
              },
              {
                icon: HomeIcon,
                title: "Gate Remote Control",
                specs: "Long-range RF",
                description: "Robust against interference"
              },
              {
                icon: Car,
                title: "Car Remote (Key Fob)",
                specs: "315/433/868/915 MHz",
                description: "OEM housings/branding"
              },
              {
                icon: Lightbulb,
                title: "Wi-Fi Switch",
                specs: "2.4 GHz; 1/2/3-gang or inline",
                description: "App control, OTA; CE/UKCA"
              },
              {
                icon: Smartphone,
                title: "Wi-Fi Socket",
                specs: "US/EU/UK/AU; 10A/16A",
                description: "Energy monitoring option"
              },
              {
                icon: Cpu,
                title: "App & SDK",
                specs: "iOS/Android SDK",
                description: "Protocol docs, cloud API"
              },
              {
                icon: Settings,
                title: "Accessories",
                specs: "Antennas, enclosures",
                description: "Power modules"
              }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <product.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">{product.specs}</p>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 p-0">
                    View Specs →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OEM/ODM Solutions */}
      <section id="solutions" className="py-16 bg-gradient-to-br from-orange-50/50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                OEM/ODM Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600">Go from idea to mass production faster</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                time: "≤24h",
                description: "Engineer-led requirements summary"
              },
              {
                step: "02",
                title: "Solutioning",
                time: "2-3 days",
                description: "2–3 BOM options with trade-offs"
              },
              {
                step: "03",
                title: "Prototyping",
                time: "7 days",
                description: "Working samples, review checklist"
              },
              {
                step: "04",
                title: "Compliance",
                time: "2-3 weeks",
                description: "Pre-compliance lab; first-pass target >95%"
              },
              {
                step: "05",
                title: "Pilot & Mass Production",
                time: "4-6 weeks",
                description: "Small batches supported; weekly capacity plan"
              },
              {
                step: "06",
                title: "Launch & After-sales",
                time: "Ongoing",
                description: "Firmware updates; 12–24-month warranty"
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">{process.step}</span>
                    <Badge variant="secondary">{process.time}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
              Tell us about your project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Industries & Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-600">Pain → Fix → Outcome</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HomeIcon,
                industry: "Garage Doors & Access",
                pain: "Interference & distance",
                fix: "High-sensitivity RF + protocol compatibility",
                outcome: "Fewer truck rolls"
              },
              {
                icon: Settings,
                industry: "Shades / Gates",
                pain: "Mixed brands",
                fix: "Multi-protocol support",
                outcome: "Easier retrofits"
              },
              {
                icon: Lightbulb,
                industry: "Appliances",
                pain: "Cost & safety",
                fix: "Certified Wi-Fi modules",
                outcome: "Faster market entry"
              },
              {
                icon: Factory,
                industry: "Agriculture / Lighting",
                pain: "Outdoor reliability",
                fix: "IP options + surge protection",
                outcome: "Stable long-range control"
              }
            ].map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{industry.industry}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-red-600">Pain:</p>
                    <p className="text-sm text-gray-600">{industry.pain}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orange-600">Fix:</p>
                    <p className="text-sm text-gray-600">{industry.fix}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-amber-600">Outcome:</p>
                    <p className="text-sm text-gray-600">{industry.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              See Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities & Compliance */}
      <section id="certificates" className="py-16 bg-gradient-to-br from-orange-50/50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Capabilities & Compliance
              </span>
            </h2>
            <p className="text-xl text-gray-600">Quality and certification you can trust</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Certifications",
                description: "ISO 9001; FCC/CE/RoHS/REACH",
                action: "Download certificates"
              },
              {
                icon: Factory,
                title: "Manufacturing",
                description: "SMT lines; aging & environmental tests",
                action: "Barcode traceability"
              },
              {
                icon: Shield,
                title: "Quality",
                description: "AQL sampling; field failure target <0.3%",
                action: "Quality assurance"
              },
              {
                icon: Users,
                title: "Support",
                description: "Direct engineer access; 48h issue reviews",
                action: "Technical support"
              }
            ].map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-sm text-gray-600">{capability.description}</p>
                  <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                    {capability.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Factory & Laboratory Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Factory & Laboratory Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600">State-of-the-art manufacturing and testing facilities</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Manufacturing Excellence</h3>
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="/factory-hero.jpg" 
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-700">SMT Production</p>
                  <p className="text-sm text-gray-600">0201/0402 component placement</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-semibold text-amber-700">Quality Control</p>
                  <p className="text-sm text-gray-600">99.6%+ production yield</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Testing Laboratory</h3>
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="/testing-lab.jpg" 
                  alt="Testing Laboratory"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-700">Certification</p>
                  <p className="text-sm text-gray-600">FCC/CE/RoHS pre-testing</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-semibold text-amber-700">Reliability</p>
                  <p className="text-sm text-gray-600">HALT/HASS testing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-orange-600">99.6%+</p>
                <p className="text-gray-600">Production Yield</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-600">98.8%</p>
                <p className="text-gray-600">On-Time Delivery</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600">7 Days</p>
                <p className="text-gray-600">Prototyping</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-600">&lt;500</p>
                <p className="text-gray-600">DPPM Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-16 bg-gradient-to-br from-orange-50/50 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Engineering Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600">Expert team delivering innovative solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="/engineering-team.jpg" 
                  alt="Engineering Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Why Partner with Our Engineers?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Direct Engineer Access</p>
                    <p className="text-gray-600">Work directly with our engineering team from concept to production</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Rapid Prototyping</p>
                    <p className="text-gray-600">7-day prototype development with iterative feedback loops</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Protocol Expertise</p>
                    <p className="text-gray-600">Deep knowledge of RF protocols, Wi-Fi standards, and certification requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">24-Hour Response</p>
                    <p className="text-gray-600">Quick response times for technical inquiries and support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                What Our Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">Real results from real partners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Field failure dropped from 1.2% to 0.4% after switching to your RF design.",
                author: "Ahmed M.",
                title: "Technical Manager",
                company: "MENA access-control brand",
                rating: 5
              },
              {
                quote: "The 7-day prototype saved weeks on our launch window.",
                author: "Sarah C.",
                title: "Product Lead",
                company: "EU smart-home OEM",
                rating: 5
              },
              {
                quote: "Passed on first submission thanks to pre-compliance testing.",
                author: "Carlos R.",
                title: "QA Director",
                company: "LATAM appliances group",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-orange-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Samples & Pricing Now
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Dual response from engineering & sales within 24 hours. 
            7-day prototyping; small-batch friendly. 
            Basic test report included.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
            Request Free Samples / Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Request Your Quote
                </span>
              </h2>
              <p className="text-xl text-gray-600">Get samples and pricing in 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp (Optional)</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="product">Target Product *</Label>
                  <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rf-transmitter">RF Transmitter</SelectItem>
                      <SelectItem value="rf-receiver">RF Receiver</SelectItem>
                      <SelectItem value="gate-remote">Gate Remote Control</SelectItem>
                      <SelectItem value="car-remote">Car Remote (Key Fob)</SelectItem>
                      <SelectItem value="wifi-switch">Wi-Fi Switch</SelectItem>
                      <SelectItem value="wifi-socket">Wi-Fi Socket</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity *</Label>
                  <Input
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    placeholder="e.g., 1000 units/month"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <p className="text-sm text-gray-500">
                We'll only use your info to respond to your request.
              </p>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
                Submit Request
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <Radio className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">FastFun Remote</span>
              </div>
              <p className="text-gray-400">
                Reliable RF & Wi-Fi control solutions for OEMs worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">RF Transmitters</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RF Receivers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wi-Fi Switches</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wi-Fi Sockets</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">OEM/ODM</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certification Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@fastfunremote.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+86-xxx-xxxx</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dongguan, China</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FastFun Remote. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}