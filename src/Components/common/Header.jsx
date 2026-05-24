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
import logo from '../../assets/Ardhiyalogo.jpeg'

const Header = ({ onMenuClick, showMenuButton = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const activeNavClass = 'bg-blue-100 text-blue-700 font-semibold'
  const idleNavClass = 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
  const mobileActiveNavClass = 'bg-blue-100 text-blue-700'
  const mobileIdleNavClass = 'text-gray-700 hover:text-blue-600'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="ArthaVeda Research Logo" className="w-24 h-12 sm:w-28 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                isActive('/') 
                  ? activeNavClass
                  : idleNavClass
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <Link 
              to="/why-invest" 
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                isActive('/why-invest') 
                  ? activeNavClass
                  : idleNavClass
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Why Invest?</span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                  location.pathname.includes('/services') || location.pathname.includes('/hni-services')
                    ? activeNavClass
                    : idleNavClass
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                <div className="p-3">
                  <div className="px-4 py-2 mb-1">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Investment Plans</div>
                  </div>
                  <Link 
                    to="/services/basic" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 group/item"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover/item:text-blue-700">Basic Service</div>
                      <div className="text-xs text-gray-500">Perfect for beginners</div>
                    </div>
                  </Link>
                  <Link 
                    to="/services/premium" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 group/item"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover/item:text-blue-700">Premium Service</div>
                      <div className="text-xs text-gray-500">Advanced features</div>
                    </div>
                  </Link>
                  <Link 
                    to="/hni-services" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 group/item"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover/item:text-blue-700">HNI Services</div>
                      <div className="text-xs text-gray-500">Exclusive for HNIs</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                isActive('/about') 
                  ? activeNavClass
                  : idleNavClass
              }`}
            >
              <Users className="w-5 h-5" />
              <span>About</span>
            </Link>

            <Link 
              to="/refund-privacy" 
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                isActive('/refund-privacy') 
                  ? activeNavClass
                  : idleNavClass
              }`}
            >
              <Shield className="w-5 h-5" />
              <span>Privacy</span>
            </Link>

            <Link 
              to="/terms" 
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                isActive('/terms') 
                  ? activeNavClass
                  : idleNavClass
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Terms</span>
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/support" 
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
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
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 overflow-y-auto border-t border-gray-100">
          <nav className="flex flex-col p-4 space-y-2">
            <Link 
              to="/" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                isActive('/') 
                  ? mobileActiveNavClass
                  : mobileIdleNavClass
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <Link 
              to="/why-invest" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                isActive('/why-invest') 
                  ? mobileActiveNavClass
                  : mobileIdleNavClass
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Why Invest?</span>
            </Link>

            {/* Services Section */}
            <div className="pt-2 pb-2">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-4">Services</div>
              <div className="space-y-2">
                <Link 
                  to="/services/basic" 
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Award className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Basic Trading</div>
                    <div className="text-xs text-gray-500">Perfect for beginners</div>
                  </div>
                </Link>
                <Link 
                  to="/services/premium" 
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Premium Trading</div>
                    <div className="text-xs text-gray-500">Advanced features</div>
                  </div>
                </Link>
                <Link 
                  to="/hni-services" 
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">HNI Services</div>
                    <div className="text-xs text-gray-500">Exclusive for HNIs</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link 
              to="/about" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                isActive('/about') 
                  ? mobileActiveNavClass
                  : mobileIdleNavClass
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="w-5 h-5" />
              <span>About</span>
            </Link>

            <Link 
              to="/refund-privacy" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                isActive('/refund-privacy') 
                  ? mobileActiveNavClass
                  : mobileIdleNavClass
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield className="w-5 h-5" />
              <span>Privacy & Policy</span>
            </Link>

            <Link 
              to="/terms" 
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                isActive('/terms') 
                  ? mobileActiveNavClass
                  : mobileIdleNavClass
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="w-5 h-5" />
              <span>Terms & Conditions</span>
            </Link>

            <div className="pt-6">
              <Link 
                to="/support" 
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
