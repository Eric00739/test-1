'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Radio, 
  Wifi, 
  Home, 
  Car, 
  Lightbulb, 
  Smartphone, 
  Cpu, 
  Settings,
  Download,
  ArrowRight,
  Star,
  CheckCircle,
  Shield,
  Zap,
  Globe,
  Package,
  Filter
} from 'lucide-react'

// Static generation configuration
export const dynamic = 'force-static'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProtocol, setSelectedProtocol] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const products = [
    {
      id: 'rf-transmitter',
      category: 'rf',
      protocol: '315/433/868/915',
      title: 'RF Transmitters',
      description: 'High-performance RF transmitters with rolling/fixed codes',
      image: '/products-showcase.jpg',
      specs: {
        frequency: '315/433/868/915 MHz',
        modulation: 'ASK/FSK',
        codes: 'Rolling/Fixed',
        range: '≥100m LOS',
        power: '10-20 dBm',
        voltage: '3-12V DC'
      },
      features: [
        'Rolling code security',
        'Low power consumption',
        'Customizable housing',
        'Multi-frequency support',
        'FCC/CE certified',
        'OEM branding available'
      ],
      applications: ['Garage doors', 'Gate controls', 'Smart home', 'Security systems'],
      moq: '100 pcs',
      leadTime: '2-3 weeks'
    },
    {
      id: 'rf-receiver',
      category: 'rf',
      protocol: '315/433/868/915',
      title: 'RF Receivers',
      description: 'High-sensitivity RF receivers with multiple output options',
      image: '/products-showcase.jpg',
      specs: {
        frequency: '315/433/868/915 MHz',
        sensitivity: '-110 dBm',
        output: 'Relay/SSR/Logic',
        voltage: '12-24V AC/DC',
        channels: '1-4 channels',
        range: '≥100m LOS'
      },
      features: [
        'High sensitivity design',
        'Multiple output options',
        'Interference resistant',
        'Easy installation',
        'Wide voltage range',
        'Compact design'
      ],
      applications: ['Lighting control', 'Access control', 'Industrial automation', 'Agriculture'],
      moq: '100 pcs',
      leadTime: '2-3 weeks'
    },
    {
      id: 'car-remote',
      category: 'automotive',
      protocol: '315/433/868/915',
      title: 'Car Remote (Key Fob)',
      description: 'Customizable rolling-code key fobs for automotive applications',
      image: '/products-showcase.jpg',
      specs: {
        frequency: '315/433/868/915 MHz',
        battery: 'CR2032/CR2016',
        batteryLife: '12-24 months',
        buttons: '2-5 buttons',
        range: '≥100m LOS',
        rating: 'IP65 optional'
      },
      features: [
        'Rolling code encryption',
        'Long battery life',
        'Custom button layouts',
        'OEM logo/branding',
        'Durable construction',
        'Water resistant options'
      ],
      applications: ['Car alarms', 'Keyless entry', 'Vehicle security', 'Fleet management'],
      moq: '500 pcs',
      leadTime: '3-4 weeks'
    },
    {
      id: 'wifi-switch',
      category: 'wifi',
      protocol: '2.4GHz',
      title: 'Wi-Fi Switch',
      description: 'Smart Wi-Fi wall switches with app control and OTA updates',
      image: '/products-showcase.jpg',
      specs: {
        protocol: '2.4 GHz Wi-Fi',
        voltage: '100-240V AC',
        current: '10A/16A',
        gangs: '1/2/3-gang',
        control: 'App/Voice/Manual',
        certification: 'CE/UKCA/ROHS'
      },
      features: [
        'App control',
        'Voice assistant compatible',
        'OTA firmware updates',
        'Timer/schedule functions',
        'Energy monitoring',
        'Neutral/no-neutral options'
      ],
      applications: ['Home lighting', 'Office automation', 'Smart buildings', 'Hospitality'],
      moq: '200 pcs',
      leadTime: '3-4 weeks'
    },
    {
      id: 'wifi-socket',
      category: 'wifi',
      protocol: '2.4GHz',
      title: 'Wi-Fi Socket (Smart Plug)',
      description: 'Region-ready smart plugs with energy monitoring and OEM branding',
      image: '/products-showcase.jpg',
      specs: {
        protocol: '2.4 GHz Wi-Fi',
        plugs: 'US/EU/UK/AU',
        voltage: '100-240V AC',
        current: '10A/16A',
        power: '2200W/3500W',
        monitoring: 'Energy monitoring optional'
      },
      features: [
        'Multi-region plug types',
        'Energy monitoring',
        'App control',
        'Timer functions',
        'Child lock',
        'Over-current protection'
      ],
      applications: ['Home appliances', 'Office equipment', 'Energy management', 'IoT integration'],
      moq: '200 pcs',
      leadTime: '3-4 weeks'
    },
    {
      id: 'gate-remote',
      category: 'rf',
      protocol: '315/433/868/915',
      title: 'Gate Remote Control Systems',
      description: 'Long-range RF systems robust against interference',
      image: '/products-showcase.jpg',
      specs: {
        frequency: '315/433/868/915 MHz',
        range: '≥200m LOS',
        codes: 'Rolling/Fixed',
        channels: 'Multi-channel',
        power: 'High power options',
        antenna: 'External antenna'
      },
      features: [
        'Extended range',
        'Interference resistant',
        'Multi-device control',
        'Durable housing',
        'Weather resistant',
        'Easy programming'
      ],
      applications: ['Gate controls', 'Garage doors', 'Industrial doors', 'Parking systems'],
      moq: '100 pcs',
      leadTime: '2-3 weeks'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesProtocol = selectedProtocol === 'all' || product.protocol.includes(selectedProtocol)
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesProtocol && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              RF & Wi-Fi Control Products
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Complete range of RF transmitters, receivers, and Wi-Fi smart devices with OEM customization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Download className="w-4 h-4 mr-2" />
                Download Catalog
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium">Filters:</span>
            </div>
            
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="rf">RF Products</SelectItem>
                  <SelectItem value="wifi">Wi-Fi Products</SelectItem>
                  <SelectItem value="automotive">Automotive</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedProtocol} onValueChange={setSelectedProtocol}>
                <SelectTrigger>
                  <SelectValue placeholder="Protocol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Protocols</SelectItem>
                  <SelectItem value="315">315 MHz</SelectItem>
                  <SelectItem value="433">433 MHz</SelectItem>
                  <SelectItem value="868">868 MHz</SelectItem>
                  <SelectItem value="915">915 MHz</SelectItem>
                  <SelectItem value="2.4GHz">2.4 GHz Wi-Fi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-4">
                  <div className="aspect-video bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <Badge variant="secondary">{product.category.toUpperCase()}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-2 rounded">
                        <span className="font-medium text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-gray-600 ml-1">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium text-gray-700">Key Features:</p>
                    <div className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium">MOQ:</span>
                      <span className="text-gray-600 ml-1">{product.moq}</span>
                    </div>
                    <div>
                      <span className="font-medium">Lead Time:</span>
                      <span className="text-gray-600 ml-1">{product.leadTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700">
                      Get Quote
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedProtocol('all')
                  setSearchTerm('')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our engineering team can develop custom RF and Wi-Fi solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              Discuss Custom Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Download className="w-4 h-4 mr-2" />
              Download Technical Specs
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Why Choose FastFun Remote
              </span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive support and expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold">Quality Assurance</h3>
              <p className="text-gray-600">
                99.6%+ production yield with comprehensive testing and certification support
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-gray-600">
                7-day prototyping and 98% on-time delivery for mass production
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold">Global Support</h3>
              <p className="text-gray-600">
                500+ customers across 32+ countries with 24-hour technical support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}