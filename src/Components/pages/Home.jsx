import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Clock, 
  Smartphone,
  Headphones,
  CheckCircle,
  Award,
  DollarSign,
  LineChart,
  X,
  Phone,
  Mail
} from 'lucide-react'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const totalImages = 5
  const [showContactModal, setShowContactModal] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)

  // Live market data state
  const [marketData, setMarketData] = useState({
    nifty: { price: 19425.35, change: 125.40, changePercent: 0.65 },
    sensex: { price: 65832.15, change: 298.20, changePercent: 0.45 },
    bankNifty: { price: 44125.80, change: -85.25, changePercent: -0.19 },
    goldPrice: { price: 62450, change: 180, changePercent: 0.29 }
  })

  const [tickerPosition, setTickerPosition] = useState(0)
  const newsItems = [
    "Nifty hits record high of 19,425.35",
    "Sensex gains 298 points in morning trade",
    "Gold prices surge to ₹62,450 per 10gm",
    "Bank Nifty shows volatility ahead of RBI policy",
    "Market cap crosses ₹300 lakh crore mark"
  ]

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    const tickerInterval = setInterval(() => {
      setTickerPosition((prev) => (prev + 1) % newsItems.length)
    }, 3000)

    return () => {
      clearInterval(imageInterval)
      clearInterval(tickerInterval)
    }
  }, [])

  // Simulate live market data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => ({
        nifty: {
          price: prev.nifty.price + (Math.random() - 0.5) * 10,
          change: prev.nifty.change + (Math.random() - 0.5) * 5,
          changePercent: prev.nifty.changePercent + (Math.random() - 0.5) * 0.1
        },
        sensex: {
          price: prev.sensex.price + (Math.random() - 0.5) * 50,
          change: prev.sensex.change + (Math.random() - 0.5) * 20,
          changePercent: prev.sensex.changePercent + (Math.random() - 0.5) * 0.1
        },
        bankNifty: {
          price: prev.bankNifty.price + (Math.random() - 0.5) * 20,
          change: prev.bankNifty.change + (Math.random() - 0.5) * 10,
          changePercent: prev.bankNifty.changePercent + (Math.random() - 0.5) * 0.1
        },
        goldPrice: {
          price: prev.goldPrice.price + (Math.random() - 0.5) * 100,
          change: prev.goldPrice.change + (Math.random() - 0.5) * 50,
          changePercent: prev.goldPrice.changePercent + (Math.random() - 0.5) * 0.1
        }
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const openContactModal = () => setShowContactModal(true)
  const closeContactModal = () => setShowContactModal(false)
  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({ ...prev, [name]: value }))
  }
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await new Promise(res => setTimeout(res, 800))
      alert('Thank you! Our team will contact you shortly.')
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setShowContactModal(false)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Live Market Data Ticker */}
      

      {/* Live Market Indices */}
     

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {[
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          ].map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-emerald-400 text-sm font-medium">Trusted by 50K+ Investors</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  TradeSmartly
                </span>
                <span className="block text-2xl md:text-3xl text-gray-300 mt-4 font-light">
                  Your Gateway to Smarter Financial Decisions
                </span>
              </h1>
              
              <div className="space-y-4 mb-8">
                <p className="text-xl text-gray-300">
                  'Something for someone and everyone shall witness an enhancement in their wealth'
                </p>
                <p className="text-gray-400">
                  Empowered by cutting-edge technology and 10+ years of market expertise
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openContactModal}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Start Trading Now
                  <TrendingUp className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={openContactModal}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Try Free Demo
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-emerald-300 font-semibold mb-1">Success Rate</div>
                <div className="text-gray-400 text-sm">Consistent profitable trades</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-300 font-semibold mb-1">Trading Support</div>
                <div className="text-gray-400 text-sm">Round-the-clock assistance</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-emerald-300 font-semibold mb-1">Years Experience</div>
                <div className="text-gray-400 text-sm">Market expertise</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">₹50Cr+</div>
                <div className="text-blue-300 font-semibold mb-1">Volume Traded</div>
                <div className="text-gray-400 text-sm">Monthly trading volume</div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-stretch"> {/* Changed to items-stretch */}
      {/* Content Column */}
      <div className="flex flex-col justify-center"> {/* Added flex container */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Trading Insights
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Harness real-time analytics and intelligent signals to make smarter trading decisions with confidence.
        </p>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <LineChart className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Signal-Driven Entries</h3>
              <p className="text-gray-600">Smart indicators help you spot high-probability setups across markets.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Real-Time Monitoring</h3>
              <p className="text-gray-600">Stay updated with live performance tracking and instant alerts.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Risk Controls</h3>
              <p className="text-gray-600">Position sizing and risk rules built-in for disciplined trading.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <Link 
            to="/register" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
          >
            Get Started
          </Link>
          <Link 
            to="/research" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold hover:bg-gray-50 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Image Column */}
      <div className="relative h-full min-h-[500px] overflow-hidden"> {/* Added min-height and overflow-hidden */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80" 
            alt="AI Trading Dashboard" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-2 bottom-2 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
          <div className="text-3xl font-bold text-emerald-600 mb-2">AI</div>
          <div className="text-gray-700">Insights Active</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-emerald-600">TradeSmartly</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of technology, expertise, and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
                <p className="text-gray-600">Bank-level security with 99.9% uptime guarantee</p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600">Execute trades in milliseconds with our advanced tech</p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
                <p className="text-gray-600">AI-powered insights and predictive analytics</p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Community</h3>
                <p className="text-gray-600">Learn from 10+ years of trading veterans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
     

      {/* Testimonials */}


     

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Trading Experience?
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Join 50,000+ successful traders who trust TradeSmart for their investment journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openContactModal}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-white text-emerald-600 font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <DollarSign className="mr-2 w-6 h-6" />
              Start your free Trading
            </button>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <Headphones className="mr-2 w-6 h-6" />
              Schedule a Demo
            </Link>
          </div>
          <p className="text-white/70 mt-6 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
     
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <div className="absolute inset-0 bg-black/60" onClick={closeContactModal} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto mx-4">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Contact Form</h3>
              <button onClick={closeContactModal} className="p-2 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <form onSubmit={handleContactSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. Request a free demo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to be contacted by our team regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
