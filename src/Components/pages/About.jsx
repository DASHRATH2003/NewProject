import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Target, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Award,
  Globe,
  BarChart3,
  Lightbulb,
  Heart,
  ChevronRight,
  Star,
  CheckCircle,
  Building,
  Cpu,
  DollarSign,
  Clock
} from 'lucide-react'

const About = () => {
  const sectionRefs = useRef([])
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* Hero Banner */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-gray-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-emerald-400 text-sm font-medium">Since 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              About ArthaVeda Research
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your trusted partner in financial growth and intelligent trading solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 mt-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <div className="inline-flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mr-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-emerald-600">Journey</span>
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ArthaVeda Research is an end-to-end solution for all financial research services. 
                "Something for someone and everyone shall witness an enhancement in their wealth" 
                is the motto that drives our company and team.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Empowered by cutting-edge technology and state-of-the-art analytics
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Backed by 10+ years of market expertise and industry experience
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Streamlined solutions for beginners and expert investors alike
                  </p>
                </div>
              </div>
            </div>

            <div className="relative" ref={el => sectionRefs.current[0] = el}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="ArthaVeda Research Team"
                  className="w-full h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white font-bold text-lg">Serving 20,000+ Happy Clients</div>
                  <div className="text-emerald-300">Across India & Global Markets</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            <div 
              ref={el => sectionRefs.current[1] = el}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200 shadow-xl opacity-0"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To democratize financial markets and make intelligent trading accessible to everyone 
                through cutting-edge technology, expert guidance, and personalized investment solutions.
              </p>
            </div>

            <div 
              ref={el => sectionRefs.current[2] = el}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 shadow-xl opacity-0"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become India's most trusted financial technology platform, 
                empowering millions of investors to achieve their financial goals 
                through innovation, integrity, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every action we take
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Customer First",
                description: "We believe in putting our clients' interests above everything else",
                icon: Heart,
                color: "from-emerald-500 to-emerald-400",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Integrity",
                description: "Transparent and honest approach in all our dealings",
                icon: Shield,
                color: "from-blue-500 to-blue-400",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Innovation",
                description: "Continuously evolving with cutting-edge technology",
                icon: Zap,
                color: "from-emerald-500 to-emerald-400",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards in everything we do",
                icon: Award,
                color: "from-blue-500 to-blue-400",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((value, index) => (
              <div 
                key={index}
                ref={el => sectionRefs.current[index + 3] = el}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden opacity-0"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
     

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "20,000+", label: "Happy Clients", icon: Users },
              { value: "10+", label: "Years Experience", icon: Clock },
              { value: "₹20Cr+", label: "Assets Managed", icon: DollarSign },
              { value: "95%", label: "Success Rate", icon: TrendingUp }
            ].map((stat, index) => (
              <div 
                key={index}
                ref={el => sectionRefs.current[index + 10] = el}
                className="text-center opacity-0"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-200 font-medium">{stat.label}</div>
                <div className="mt-4 flex justify-center">
                  <stat.icon className="w-6 h-6 text-white/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Edge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-emerald-600">Technology Edge</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Powered by cutting-edge technology to deliver superior investment performance
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">AI-Powered Analytics</h3>
                    <p className="text-gray-600">Advanced algorithms for predictive market insights</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Real-time Data</h3>
                    <p className="text-gray-600">Live market data with millisecond precision</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Secure Platform</h3>
                    <p className="text-gray-600">Bank-grade security with multi-factor authentication</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" ref={el => sectionRefs.current[14] = el}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Technology Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-blue-500 p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-emerald-600">Success Story</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the difference with ArthaVeda Research's professional trading solutions and expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold text-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <Users className="mr-2 w-6 h-6" />
              Contact Our Team
            </Link>
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-white border-2 border-emerald-500 text-emerald-600 font-bold text-lg hover:bg-emerald-50 transition-all duration-300"
            >
              <Star className="mr-2 w-6 h-6" />
              Start Free Trial
            </Link>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            Get free portfolio analysis • Dedicated relationship manager • No minimum investment
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
