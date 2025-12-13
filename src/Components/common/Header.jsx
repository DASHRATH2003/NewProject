import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home,
  TrendingUp,
  Briefcase,
  Users,
  Shield,
  FileText,
  Phone,
  ChevronDown,
  Menu,
  X,
  Award,
  BarChart3,
  DollarSign
} from 'lucide-react'
import logo from '../../assets/Trade.png'

const Header = ({ onMenuClick, showMenuButton = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 w-full overflow-visible ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group min-w-0">
              <img src={logo} alt="TradeSmart Logo" className="w-28 h-14 sm:w-32 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 flex-nowrap min-w-0">
              <Link 
                to="/" 
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>

              <Link 
                to="/why-invest" 
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
                  isActive('/why-invest') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span>Why Invest?</span>
              </Link>

              {/* Services Dropdown - Z-INDEX FIXED */}
              <div className="relative group">
                <button 
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
                    location.pathname.includes('/services') || location.pathname.includes('/hni-services')
                      ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="py-3">
                    <div className="px-4 py-2">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Investment Plans</div>
                    </div>
                    <Link 
                      to="/services/basic" 
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-emerald-50 transition-colors duration-200 group/item"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-emerald-600">Basic Service</div>
                        <div className="text-xs text-gray-500">Perfect for beginners</div>
                      </div>
                    </Link>
                    <Link 
                      to="/services/premium" 
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200 group/item"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-blue-600">Premium Service</div>
                        <div className="text-xs text-gray-500">Advanced features</div>
                      </div>
                    </Link>
                    <Link 
                      to="/hni-services" 
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-emerald-50 transition-colors duration-200 group/item"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-emerald-600">HNI Services</div>
                        <div className="text-xs text-gray-500">Exclusive for HNIs</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/about" 
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
                  isActive('/about') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>About</span>
              </Link>

              <Link 
                to="/refund-privacy" 
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
                  isActive('/refund-privacy') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                <Shield className="w-5 h-5" />
                <span>Privacy</span>
              </Link>

              <Link 
                to="/terms" 
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
                  isActive('/terms') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>Terms</span>
              </Link>
            </nav>

            {/* Contact Button */}
            <div className="hidden lg:flex items-center space-x-4 min-w-0">
              <Link 
                to="/support" 
                className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              onClick={showMenuButton && onMenuClick ? onMenuClick : (() => setIsMenuOpen(!isMenuOpen))}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full">
            <nav className="flex flex-col space-y-1 p-4">
              <Link 
                to="/" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span className="font-semibold">Home</span>
              </Link>

              <Link 
                to="/why-invest" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/why-invest') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Why Invest?</span>
              </Link>

              {/* Services Mobile Dropdown */}
              <div className="px-4 py-3">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Services</div>
                <div className="space-y-2 pl-4">
                  <Link 
                    to="/services/basic" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Award className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Basic Trading</div>
                      <div className="text-xs text-gray-500">Perfect for beginners</div>
                    </div>
                  </Link>
                  <Link 
                    to="/services/premium" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Premium Trading</div>
                      <div className="text-xs text-gray-500">Advanced features</div>
                    </div>
                  </Link>
                  <Link 
                    to="/hni-services" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">HNI Services</div>
                      <div className="text-xs text-gray-500">Exclusive for HNIs</div>
                    </div>
                  </Link>
                </div>
              </div>

              <Link 
                to="/about" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-5 h-5" />
                <span className="font-semibold">About</span>
              </Link>

              <Link 
                to="/refund-privacy" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/refund-privacy') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Privacy & Policy</span>
              </Link>

              <Link 
                to="/terms" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/terms') 
                    ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border border-emerald-200' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="w-5 h-5" />
                <span className="font-semibold">Terms & Conditions</span>
              </Link>

              <div className="pt-8 px-4">
                <Link 
                  to="/support" 
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
