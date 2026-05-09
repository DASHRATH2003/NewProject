import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Shield, 
  Users, 
  DollarSign,
  LineChart,
  PieChart,
  Clock,
  Award,
  ChevronRight,
  Zap,
  Rocket,
  Cpu,
  Smartphone,
  ShieldCheck,
  PlayCircle,
  X,
  Phone,
  Mail
} from 'lucide-react'

const WhyInvest = () => {
  const sectionRefs = useRef([])
  const [showContactModal, setShowContactModal] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
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
  
  // Simple fade-in animation on scroll
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
      {/* Add CSS animations */}
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

      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Why Invest with
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mt-2">
              ArthaVeda Research?
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the potential of smart investing with cutting-edge research, disciplined risk management, and 10+ years of proven market expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openContactModal}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Book Free Demo
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={openContactModal}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "98%", label: "Success Rate", icon: Award, color: "from-emerald-500 to-emerald-400" },
              { value: "10K+", label: "Happy Clients", icon: Users, color: "from-blue-500 to-blue-400" },
              { value: "10+", label: "Years Experience", icon: Clock, color: "from-blue-500 to-blue-400" },
              { value: "20+Cr", label: "Value Trading", icon: Clock, color: "from-blue-500 to-blue-400" }
            ].map((stat, index) => (
              <div 
                key={index}
                ref={el => sectionRefs.current[index] = el}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 opacity-0"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mr-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your <span className="text-emerald-600">Investment Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why thousands of investors choose ArthaVeda Research to grow their wealth with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Superior Returns",
                description: "Achieve market-beating returns with our AI-powered investment strategies and expert analysis",
                icon: TrendingUp,
                image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-emerald-500 to-emerald-400"
              },
              {
                title: "Risk Management",
                description: "Advanced risk assessment tools and strategies to protect your capital while maximizing growth",
                icon: ShieldCheck,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-blue-500 to-blue-400"
              },
              {
                title: "Expert Guidance",
                description: "Personalized investment advice from our team of experienced financial experts and analysts",
                icon: Users,
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-emerald-500 to-emerald-400"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                ref={el => sectionRefs.current[index + 4] = el}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                ref={el => sectionRefs.current[7] = el}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 opacity-0"
              >
                Advanced <span className="text-emerald-600">Investment Strategies</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our expert team employs sophisticated investment strategies tailored to maximize your returns
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start opacity-0" ref={el => sectionRefs.current[8] = el}>
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <LineChart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Equity Investment</h3>
                    <p className="text-gray-600">
                      Strategic investments in fundamentally strong companies with high growth potential.
                      Our research team analyzes market trends and financials to identify opportunities.
                    </p>
                    <ul className="mt-3 space-y-2">
                      {["Large Cap Stocks for Stability", "Mid Cap Stocks for Growth", "Small Cap Stocks for High Returns"].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start opacity-0" ref={el => sectionRefs.current[9] = el}>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <PieChart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mutual Funds & SIP</h3>
                    <p className="text-gray-600">
                      Systematic Investment Plans in carefully selected mutual funds to build wealth over time.
                    </p>
                    <ul className="mt-3 space-y-2">
                      {["Diversified Portfolio", "Regular Monitoring", "Tax Efficient Planning"].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative opacity-0" ref={el => sectionRefs.current[10] = el}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Investment Strategy"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-emerald-600 mb-2">+42%</div>
                <div className="text-gray-700">Average Annual Returns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Indian Market */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-emerald-600">Indian Stock Market?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India presents unique opportunities for investors with its dynamic economy and growth potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fastest Growing Economy",
                description: "India is one of the fastest-growing major economies, providing excellent long-term wealth creation opportunities",
                icon: Rocket,
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
                stats: "7.2% GDP Growth"
              },
              {
                title: "Young Demographics",
                description: "With a young and growing population, India offers a large consumer base driving demand across sectors",
                icon: Users,
                image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
                stats: "1.4B Population"
              },
              {
                title: "Innovation Hub",
                description: "India is becoming a global hub for technology and innovation, creating new investment opportunities",
                icon: Cpu,
                image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
                stats: "100+ Unicorns"
              }
            ].map((item, index) => (
              <div 
                key={index}
                ref={el => sectionRefs.current[index + 11] = el}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 opacity-0"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.stats}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Edge */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-emerald-400">Trading Technology Edge</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Built for traders who need fast market signals, secure execution, and actionable insights.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "AI-Powered Trade Signals",
                    description: "Machine learning models identify high-conviction trades and timing signals for faster decisions."
                  },
                  {
                    icon: Shield,
                    title: "Secure Trade Execution",
                    description: "Fast, secure order routing with protective risk controls built for active markets."
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Trading Access",
                    description: "Monitor positions and execute trades instantly from our responsive mobile platform."
                  }
                ].map((tech, index) => (
                  <div 
                    key={index}
                    ref={el => sectionRefs.current[index + 14] = el}
                    className="flex items-start bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 opacity-0"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{tech.title}</h3>
                      <p className="text-gray-300">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative opacity-0" ref={el => sectionRefs.current[17] = el}>
              <img 
                src="https://t4.ftcdn.net/jpg/01/84/91/27/360_F_184912716_qwpfSzNyX8BGtsXHJTgpTmaPCOPEwhRd.jpg"
                alt="Trading Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-blue-500 p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold text-white mb-2">Real-time</div>
                <div className="text-white">Market Insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
    

      {/* Final CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Join thousands of successful investors who trust ArthaVeda Research for smarter long-term investing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openContactModal}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-white text-emerald-600 font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <DollarSign className="mr-2 w-6 h-6" />
              Start Investing Now
            </button>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <Users className="mr-2 w-6 h-6" />
              Book Free Consultation
            </Link>
          </div>
          <p className="text-white/70 mt-6 text-sm">
            No minimum investment • Free portfolio analysis • Dedicated relationship manager
          </p>
        </div>
      </section>
      
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

export default WhyInvest
