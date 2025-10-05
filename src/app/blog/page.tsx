'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Search,
  Filter,
  Radio,
  Wifi,
  Shield,
  Lightbulb,
  Cpu,
  TrendingUp
} from 'lucide-react'

// Static generation configuration
export const dynamic = 'force-static'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding RF Rolling Code Technology",
      excerpt: "Deep dive into rolling code encryption technology and its importance in modern remote control systems for security applications.",
      author: "Engineering Team",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "RF Technology",
      image: "/products-showcase.jpg",
      tags: ["RF", "Security", "Rolling Code"],
      featured: true
    },
    {
      id: 2,
      title: "Wi-Fi vs RF: Choosing the Right Protocol for Your IoT Device",
      excerpt: "Comprehensive comparison between Wi-Fi and RF protocols to help you make the right choice for your smart home or industrial application.",
      author: "Technical Marketing",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Protocol Comparison",
      image: "/products-showcase.jpg",
      tags: ["Wi-Fi", "RF", "IoT", "Comparison"]
    },
    {
      id: 3,
      title: "FCC/CE Certification Guide for RF Products",
      excerpt: "Step-by-step guide to navigating FCC and CE certification processes for RF devices, including common pitfalls and best practices.",
      author: "Compliance Team",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Compliance",
      image: "/testing-lab.jpg",
      tags: ["FCC", "CE", "Certification", "Compliance"]
    },
    {
      id: 4,
      title: "Optimizing Battery Life in Remote Control Devices",
      excerpt: "Engineering insights on power management techniques to extend battery life in RF and Wi-Fi remote control applications.",
      author: "Hardware Engineering",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Engineering",
      image: "/products-showcase.jpg",
      tags: ["Battery", "Power Management", "Optimization"]
    },
    {
      id: 5,
      title: "The Future of Smart Home Control Systems",
      excerpt: "Exploring emerging trends and technologies shaping the future of home automation and smart control systems.",
      author: "Product Strategy",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Industry Trends",
      image: "/products-showcase.jpg",
      tags: ["Smart Home", "IoT", "Future Tech", "Trends"]
    },
    {
      id: 6,
      title: "OEM vs ODM: What's Right for Your Business?",
      excerpt: "Understanding the differences between OEM and ODM manufacturing models and how to choose the best approach for your product.",
      author: "Business Development",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Business",
      image: "/factory-hero.jpg",
      tags: ["OEM", "ODM", "Manufacturing", "Business"]
    }
  ]

  const categories = ["All", "RF Technology", "Protocol Comparison", "Compliance", "Engineering", "Industry Trends", "Business"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technical Blog
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Insights, tutorials, and industry trends from our engineering team. 
              Stay updated with the latest in RF and Wi-Fi control technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4">Featured Article</Badge>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-square">
                  <img 
                    src="/products-showcase.jpg" 
                    alt="Featured article"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">RF Technology</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      Jan 15, 2024
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      8 min read
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Understanding RF Rolling Code Technology
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Deep dive into rolling code encryption technology and its importance in modern remote control systems for security applications.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Engineering Team</span>
                    </div>
                    <Button className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Technology Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest technical articles, industry trends, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder-white/60"
              />
              <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Popular Topics
              </span>
            </h2>
            <p className="text-xl text-gray-600">Explore our most covered technical subjects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Radio className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle>RF Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Deep dives into RF protocols, modulation techniques, and antenna design
                </p>
                <Button variant="ghost" size="sm">
                  View Articles →
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle>Wi-Fi Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Wi-Fi protocol optimization, smart home integration, and IoT applications
                </p>
                <Button variant="ghost" size="sm">
                  View Articles →
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle>Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  FCC, CE, and other certification requirements and testing procedures
                </p>
                <Button variant="ghost" size="sm">
                  View Articles →
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle>Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Hardware design, firmware development, and power optimization
                </p>
                <Button variant="ghost" size="sm">
                  View Articles →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}