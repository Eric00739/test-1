'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Factory, 
  Users, 
  Award, 
  Shield, 
  Globe, 
  Clock,
  CheckCircle,
  TrendingUp,
  Target,
  Lightbulb,
  Cpu,
  TestTube,
  Package,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ArrowRight
} from 'lucide-react'

// Static generation configuration
export const dynamic = 'force-static'

export default function AboutPage() {
  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started as a small RF control design workshop in Dongguan'
    },
    {
      year: '2012',
      title: 'First OEM Partnership',
      description: 'Secured first major OEM contract with European access control company'
    },
    {
      year: '2015',
      title: 'ISO 9001 Certification',
      description: 'Achieved ISO 9001 quality management system certification'
    },
    {
      year: '2018',
      title: 'Wi-Fi Product Line',
      description: 'Launched comprehensive Wi-Fi smart home product series'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Reached 32+ countries with 500+ customers worldwide'
    },
    {
      year: '2024',
      title: 'Innovation Leader',
      description: 'Industry leader in RF & Wi-Fi control solutions with 15+ years experience'
    }
  ]

  const capabilities = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'State-of-the-art SMT production lines with 0201/0402 component placement capability',
      specs: ['Monthly capacity: 500K+ units', 'SMT lines: 8', 'AOI coverage: 100%', 'Yield rate: 99.6%+']
    },
    {
      icon: TestTube,
      title: 'R&D Laboratory',
      description: 'Comprehensive testing facility for RF, Wi-Fi, and reliability testing',
      specs: ['3m anechoic chamber', 'Environmental testing', 'HALT/HASS testing', 'Pre-compliance testing']
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Full range of international certifications for global market access',
      specs: ['ISO 9001:2015', 'FCC/CE/ROHS', 'UKCA/TELEC/SRRC', 'REACH compliance']
    },
    {
      icon: Users,
      title: 'Engineering Team',
      description: 'Experienced team of RF, firmware, and mechanical engineers',
      specs: ['20+ engineers', '15+ years avg experience', '24h response time', 'Direct engineer access']
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'We prioritize customer success through reliable products and responsive support'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuous R&D investment to stay ahead of technology trends'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Uncompromising quality standards with comprehensive testing and certification'
    },
    {
      icon: TrendingUp,
      title: 'Growth Partnership',
      description: 'We grow with our customers through long-term partnerships and mutual success'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
        <div className="absolute inset-0">
          <img 
            src="/factory-hero.jpg" 
            alt="FastFun Remote Factory"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4 hover:bg-white/30">
              <Factory className="w-3 h-3 mr-1" />
              Since 2009
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About FastFun Remote
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Your trusted partner in RF & Wi-Fi control solutions. 15+ years of innovation, 
              500+ customers across 32+ countries, and a commitment to excellence in every product we deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Factory className="w-4 h-4 mr-2" />
                Virtual Factory Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Download Company Profile
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Leading RF & Wi-Fi Control Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                FastFun Remote has been at the forefront of RF and Wi-Fi control technology for over 15 years. 
                From our headquarters in Dongguan, China, we design, manufacture, and deliver innovative control 
                solutions that power businesses worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive OEM/ODM services cover everything from concept development to mass production, 
                with a focus on quality, reliability, and customer success. We've helped over 500 companies across 
                32+ countries bring their products to market faster and more efficiently.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-cyan-600">500+</p>
                  <p className="text-gray-600">Global Customers</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">32+</p>
                  <p className="text-gray-600">Countries Served</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-cyan-600">99.6%+</p>
                  <p className="text-gray-600">Quality Rate</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="/engineering-team.jpg" 
                  alt="Engineering Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower businesses worldwide with reliable, innovative RF and Wi-Fi control solutions 
                  that drive success and enable the future of connected devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/50 to-cyan-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Our Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600">End-to-end manufacturing and testing excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 text-center">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600">15+ years of growth and innovation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <Badge className="mb-2 bg-emerald-100 text-emerald-800">{milestone.year}</Badge>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factory Tour */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/50 to-cyan-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Factory & Laboratory Tour
              </span>
            </h2>
            <p className="text-xl text-gray-600">State-of-the-art facilities for precision manufacturing</p>
          </div>

          <Tabs defaultValue="manufacturing" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              <TabsTrigger value="testing">Testing Laboratory</TabsTrigger>
              <TabsTrigger value="quality">Quality Control</TabsTrigger>
            </TabsList>
            
            <TabsContent value="manufacturing" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Advanced Manufacturing</h3>
                  <p className="text-gray-600">
                    Our manufacturing facility features the latest SMT production lines capable of handling 
                    components as small as 0201, with automated optical inspection and comprehensive quality control.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>8 SMT production lines</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>0201/0402 component placement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>100% AOI coverage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span>Monthly capacity 500K+ units</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src="/factory-hero.jpg" 
                    alt="Manufacturing Facility"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="testing" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Comprehensive Testing</h3>
                  <p className="text-gray-600">
                    Our testing laboratory is equipped with advanced equipment for RF testing, environmental testing, 
                    and reliability testing to ensure product performance and durability.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500" />
                      <span>3m anechoic chamber</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500" />
                      <span>Environmental testing chambers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500" />
                      <span>HALT/HASS testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500" />
                      <span>Pre-compliance testing</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src="/testing-lab.jpg" 
                    alt="Testing Laboratory"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="quality" className="space-y-6">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Quality Assurance Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold mb-2">IQC</h4>
                    <p className="text-sm text-gray-600">Incoming Quality Control</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h4 className="font-semibold mb-2">IPQC</h4>
                    <p className="text-sm text-gray-600">In-Process Quality Control</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TestTube className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold mb-2">FQC</h4>
                    <p className="text-sm text-gray-600">Final Quality Control</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h4 className="font-semibold mb-2">QA</h4>
                    <p className="text-sm text-gray-600">Quality Assurance</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 500+ companies worldwide that trust FastFun Remote for their RF and Wi-Fi control solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Mail className="w-4 h-4 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}