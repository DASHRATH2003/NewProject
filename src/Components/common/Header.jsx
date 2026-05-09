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
  const activeNavClass = 'bg-gradient-to-r from-[#e7f7ec] to-[#fff3df] text-[#087c4f] border border-[#91e4b5] shadow-md'
  const idleNavClass = 'text-gray-700 hover:text-[#087c4f] hover:bg-gradient-to-r hover:from-[#e7f7ec] hover:to-[#fff3df] hover:border hover:border-[#91e4b5] transition-all duration-300 hover:shadow-lg hover:scale-105'
  const mobileActiveNavClass = 'bg-gradient-to-r from-[#e7f7ec] to-[#fff3df] text-[#087c4f] border border-[#91e4b5]'
  const mobileIdleNavClass = 'text-gray-700 hover:text-[#087c4f] hover:bg-gradient-to-r hover:from-[#e7f7ec] hover:to-[#fff3df] hover:border hover:border-[#91e4b5] transition-all duration-300'

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
              <img src={logo} alt="ArthaVeda Research Logo" className="w-28 h-14 sm:w-32 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 flex-nowrap min-w-0">
              <Link 
                to="/" 
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
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
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
                  isActive('/why-invest') 
                    ? activeNavClass
                    : idleNavClass
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
                      ? activeNavClass
                      : idleNavClass
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
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-[#e7f7ec] transition-colors duration-200 group/item"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-[#d8f4e2] to-[#fff0d9] rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-[#087c4f]" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-[#087c4f]">Basic Service</div>
                        <div className="text-xs text-gray-500">Perfect for beginners</div>
                      </div>
                    </Link>
                    <Link 
                      to="/services/premium" 
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-[#fff3df] transition-colors duration-200 group/item"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-[#fff0d9] to-[#e7f7ec] rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-[#c56a00]" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-[#c56a00]">Premium Service</div>
                        <div className="text-xs text-gray-500">Advanced features</div>
                      </div>
                    </Link>
                    <Link 
                      to="/hni-services" 
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-[#e7f7ec] transition-colors duration-200 group/item"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-[#d8f4e2] to-[#fff0d9] rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-[#087c4f]" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-[#087c4f]">HNI Services</div>
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
                    ? activeNavClass
                    : idleNavClass
                }`}
              >
                <Users className="w-5 h-5" />
                <span>About</span>
              </Link>

              <Link 
                to="/refund-privacy" 
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
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
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-semibold whitespace-nowrap ${
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
            <div className="hidden lg:flex items-center space-x-4 min-w-0">
              <Link 
                to="/support" 
                className="flex items-center space-x-2 bg-gradient-to-r from-[#0a9f72] to-[#e78318] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#087c4f] hover:to-[#c56a00] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 whitespace-nowrap"
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
                    ? mobileActiveNavClass
                    : mobileIdleNavClass
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
                    ? mobileActiveNavClass
                    : mobileIdleNavClass
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
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-[#e7f7ec] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Award className="w-5 h-5 text-[#087c4f]" />
                    <div>
                      <div className="font-semibold text-gray-900">Basic Trading</div>
                      <div className="text-xs text-gray-500">Perfect for beginners</div>
                    </div>
                  </Link>
                  <Link 
                    to="/services/premium" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-[#fff3df] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BarChart3 className="w-5 h-5 text-[#c56a00]" />
                    <div>
                      <div className="font-semibold text-gray-900">Premium Trading</div>
                      <div className="text-xs text-gray-500">Advanced features</div>
                    </div>
                  </Link>
                  <Link 
                    to="/hni-services" 
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-[#e7f7ec] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <DollarSign className="w-5 h-5 text-[#087c4f]" />
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
                    ? mobileActiveNavClass
                    : mobileIdleNavClass
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
                    ? mobileActiveNavClass
                    : mobileIdleNavClass
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
                    ? mobileActiveNavClass
                    : mobileIdleNavClass
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="w-5 h-5" />
                <span className="font-semibold">Terms & Conditions</span>
              </Link>

              <div className="pt-8 px-4">
                <Link 
                  to="/support" 
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0a9f72] to-[#e78318] text-white px-6 py-4 rounded-xl font-semibold hover:from-[#087c4f] hover:to-[#c56a00] transition-all duration-300 shadow-md"
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
