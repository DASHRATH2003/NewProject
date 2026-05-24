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
import emailjs from '@emailjs/browser'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const totalImages = 5
  const [researchImageIndex, setResearchImageIndex] = useState(0)
  const totalResearchImages = 5
  const [carouselIndex, setCarouselIndex] = useState(0)
  const totalCarouselImages = 20
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

    const researchImageInterval = setInterval(() => {
      setResearchImageIndex((prevIndex) => 
        prevIndex === totalResearchImages - 1 ? 0 : prevIndex + 1
      )
    }, 3500)

    const carouselInterval = setInterval(() => {
      setCarouselIndex((prevIndex) => {
        if (prevIndex === totalCarouselImages - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2000)

    const tickerInterval = setInterval(() => {
      setTickerPosition((prev) => (prev + 1) % newsItems.length)
    }, 3000)

    return () => {
      clearInterval(imageInterval)
      clearInterval(researchImageInterval)
      clearInterval(carouselInterval)
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
    
    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    const serviceId = 'YOUR_SERVICE_ID'
    const templateId = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    const templateParams = {
      name: contactForm.name,
      email: contactForm.email,
      phone: contactForm.phone,
      subject: contactForm.subject,
      message: contactForm.message,
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      alert('Thank you! Our team will contact you shortly.')
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setShowContactModal(false)
    } catch (error) {
      console.error('FAILED...', error)
      alert('Failed to send message. Please try again.')
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
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-emerald-400 text-sm font-medium">Trusted by 50K+ Investors</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  ArthaVeda Research
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
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1F3B73] text-white font-semibold hover:bg-[#17305C] transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Start Trading Now
                <TrendingUp className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={openContactModal}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1F3B73] text-white font-semibold hover:bg-[#17305C] transition-all duration-300"
              >
                Try Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>
     <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
      {/* Content Column */}
      <div className="flex flex-col justify-center animate-fadeInLeft animate-fill-both">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Research-Backed Trading Guidance
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Get practical market ideas, disciplined risk levels, and timely support for intraday, BTST, and premium trading plans.
        </p>
        <div className="space-y-6">
          <div className="flex items-start animate-fadeInUp animate-fill-both delay-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 animate-bounce-slow">
              <LineChart className="w-6 h-6 text-[#087c4f]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Actionable Market Calls</h3>
              <p className="text-gray-600">Clear entry, target, and stop-loss levels for focused trading decisions.</p>
            </div>
          </div>
          <div className="flex items-start animate-fadeInUp animate-fill-both delay-400">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 animate-bounce-slow" style={{animationDelay: '0.5s'}}>
              <Zap className="w-6 h-6 text-[#c56a00]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Fast Trade Updates</h3>
              <p className="text-gray-600">Receive timely alerts and follow-up guidance so you can react with confidence.</p>
            </div>
          </div>
          <div className="flex items-start animate-fadeInUp animate-fill-both delay-600">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 animate-bounce-slow" style={{animationDelay: '1s'}}>
              <Shield className="w-6 h-6 text-[#087c4f]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Risk-First Approach</h3>
              <p className="text-gray-600">Every idea is built around capital protection, position discipline, and defined exits.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8 animate-fadeInUp animate-fill-both delay-800">
          <Link 
            to="/services/basic" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1F3B73] text-white font-semibold hover:bg-[#17305C] transition-all duration-300 animate-scale-in"
          >
            View Plans
          </Link>
          <Link 
            to="/services/basic" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1F3B73] text-white font-semibold hover:bg-[#17305C] transition-all duration-300"
          >
            Market Research
          </Link>
        </div>
      </div>

      {/* Image Column */}
      <div className="relative h-full min-h-[500px] overflow-hidden animate-fadeInRight animate-fill-both delay-300">
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
          {[
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80"
          ].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Trading dashboard ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === researchImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute right-2 bottom-2 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-emerald-100 animate-bounce-slow">
          <div className="text-3xl font-bold text-[#087c4f] mb-2">100%</div>
          <div className="text-gray-700">Risk-Managed Calls</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Trending Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-emerald-400 text-sm font-medium">Market Updates</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trending in Markets
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Stay updated with the latest market trends and investment opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trending Card 1 */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80" 
                  alt="Tech stocks rally"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Trending</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 font-semibold text-sm">+8.5%</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Tech Stocks Rally</h3>
                <p className="text-gray-400 text-sm mb-4">IT sector shows strong momentum with major index companies leading the rally</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>2 hours ago</span>
                </div>
              </div>
            </div>

            {/* Trending Card 2 */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80" 
                  alt="Gold prices surge"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Hot</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-blue-400 font-semibold text-sm">+1.2%</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Gold Prices Surge</h3>
                <p className="text-gray-400 text-sm mb-4">Precious metals gain as investors seek safe haven amid global uncertainties</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>4 hours ago</span>
                </div>
              </div>
            </div>

            {/* Trending Card 3 */}
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" 
                  alt="Bank sector recovery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Bullish</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 font-semibold text-sm">+3.8%</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Bank Sector Recovery</h3>
                <p className="text-gray-400 text-sm mb-4">Financial sector shows resilience with strong Q1 results and positive outlook</p>
                <div className="flex items-center text-gray-500 text-xs">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>6 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/services/basic" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1F3B73] text-white font-semibold hover:bg-[#17305C] transition-all duration-300 hover:shadow-2xl"
            >
              View All Market Analysis
              <BarChart3 className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>



      {/* Gallery Carousel Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-8 animate-fadeInUp animate-fill-both">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Trading Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Explore our trading insights and market analysis
            </p>
            
            {/* Trading Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg animate-fadeInUp animate-fill-both delay-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600 font-semibold">Active Traders</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg animate-fadeInUp animate-fill-both delay-200">
                <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                <div className="text-gray-600 font-semibold">Success Rate</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg animate-fadeInUp animate-fill-both delay-300">
                <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-gray-600 font-semibold">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg animate-fadeInUp animate-fill-both delay-400">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Expert Support</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${carouselIndex * (100/3)}%)` }}>
              {(() => {
                const carouselData = [
                  { image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80", title: "Stock Market Analysis", subtitle: "Daily market insights" },
                  { image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80", title: "Trading Dashboard", subtitle: "Real-time data" },
                  { image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80", title: "Financial Charts", subtitle: "Technical analysis" },
                  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", title: "Investment Strategy", subtitle: "Smart decisions" },
                  { image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80", title: "Gold Trading", subtitle: "Precious metals" },
                  { image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80", title: "Crypto Markets", subtitle: "Digital assets" },
                  { image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80", title: "Portfolio Growth", subtitle: "Wealth building" },
                  { image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80", title: "Risk Management", subtitle: "Capital protection" },
                  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", title: "Market Trends", subtitle: "Trend analysis" },
                  { image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80", title: "Trading Signals", subtitle: "Buy/Sell alerts" },
                  { image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80", title: "Forex Trading", subtitle: "Currency pairs" },
                  { image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80", title: "Options Trading", subtitle: "Derivatives" },
                  { image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80", title: "Commodities", subtitle: "Raw materials" },
                  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", title: "Indices", subtitle: "Market benchmarks" },
                  { image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80", title: "Bonds", subtitle: "Fixed income" },
                  { image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80", title: "Swing Trading", subtitle: "Position trading" },
                  { image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80", title: "Intraday Trading", subtitle: "Day trading" },
                  { image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80", title: "BTST Trading", subtitle: "Buy today sell tomorrow" },
                  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", title: "Positional Trading", subtitle: "Long term" },
                  { image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80", title: "Scalping", subtitle: "Quick profits" }
                ];
                const extendedData = [...carouselData, ...carouselData.slice(0, 3)];
                return extendedData.map((item, index) => (
                  <div key={index} className="min-w-[33.333%] px-3">
                    <div className="rounded-2xl overflow-hidden shadow-2xl group relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-200 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Platform Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="animate-fadeInLeft animate-fill-both">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ArthaVeda Pro for Traders
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Powerful trading in Equities, Futures, Options, Commodities and Currencies made simple
              </p>
              
              <div className="space-y-6">
                <div className="animate-fadeInUp animate-fill-both delay-100">
                  <h3 className="text-2xl font-bold text-gray-500 mb-2">Powerful Charting</h3>
                  <p className="text-gray-600">
                    Live market data | Real-time price updates |<br />
                    Intraday charts | Multiple time frames
                  </p>
                </div>
                
                
                
               
              </div>
              
              <div className="mt-8 animate-fadeInUp animate-fill-both delay-400">
                <Link 
                  to="/services/basic" 
                  className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#1F3B73] text-white font-semibold hover:bg-[#17305C] transition-all duration-300"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative animate-fadeInRight animate-fill-both delay-200">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
                  alt="Trading platform dashboard" 
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Trading Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative animate-fadeInLeft animate-fill-both order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80" 
                  alt="Seamless trading platform" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-emerald-600 font-bold">95% Success</p>
                      <p className="text-gray-500 text-sm">Trade accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 animate-fadeInRight animate-fill-both delay-200">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SEAMLESS TRADING
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience seamless trading with ArthaVeda Research. Access the industry's best tools and expert insights to achieve your trading goals.
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg animate-fadeInUp animate-fill-both delay-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Zero Commission on Premium Plans</h3>
                  <p className="text-gray-600">Enjoy the benefits of our premium trading services with transparent pricing and no hidden charges.</p>
                </div>
                
                <div className="animate-fadeInUp animate-fill-both delay-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Portfolio Advisory</h3>
                  <p className="text-gray-600">Access ready-to-invest, well-researched trading ideas built by experts, empowering you to make informed decisions.</p>
                </div>
                
                <div className="animate-fadeInUp animate-fill-both delay-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">24/7 Support</h3>
                  <p className="text-gray-600">Get instant support for all your trading queries at any time, round the clock, so you never miss an opportunity in the fast-paced world of trading.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
     

      {/* Testimonials */}


     

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with ArthaVeda Research in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Book Free Demo</h3>
                <p className="text-gray-600">Schedule a personalized consultation with our trading experts to understand your goals</p>
              </div>
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[60%] w-[40%] h-1 bg-gradient-to-r from-emerald-500 to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Plan</h3>
                <p className="text-gray-600">Select from our Basic, Premium, or HNI trading plans based on your investment goals</p>
              </div>
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[60%] w-[40%] h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Market Calls</h3>
                <p className="text-gray-600">Receive expert trading signals and actionable insights directly on your dashboard</p>
              </div>
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[60%] w-[40%] h-1 bg-gradient-to-r from-emerald-500 to-transparent"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start Trading</h3>
                <p className="text-gray-600">Execute trades with confidence using our intuitive platform with expert support</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">No Hidden Charges</h4>
                  <p className="text-gray-600 text-sm">Transparent pricing with no hidden fees or surprise costs</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Expert Support 24/7</h4>
                  <p className="text-gray-600 text-sm">Round-the-clock dedicated support for all your trading needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">30-Day Money Back</h4>
                  <p className="text-gray-600 text-sm">Full refund guarantee if you're not completely satisfied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2400&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Trading Experience?
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Join 50,000+ successful traders who trust ArthaVeda Research for their investment journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openContactModal}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#1F3B73] text-white font-bold hover:bg-[#17305C] hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <DollarSign className="mr-2 w-6 h-6" />
              Start your free Trading
            </button>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#1F3B73] border-2 border-[#1F3B73] text-white font-bold hover:bg-[#17305C] hover:border-[#17305C] transition-all duration-300"
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
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#1F3B73] text-white font-semibold hover:bg-[#17305C] transition-all duration-300 disabled:opacity-60"
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
