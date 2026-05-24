import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Ardhiyalogo.jpeg'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <img 
                  src={logo} 
                  alt="ArthaVeda Research Logo" 
                  className="w-36 h-16 object-contain"
                />
                <div>
                  <div className="text-2xl font-bold text-white">ArthaVeda Research</div>
                  <div className="text-sm text-emerald-400 font-medium">Intelligent Trading Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Your trusted partner for intelligent trading solutions. We provide advanced analytics, 
                real-time market insights, and personalized investment strategies to help you achieve 
                maximum returns in today's dynamic financial markets.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/why-invest" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Why Invest?
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/basic" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Basic Trading
                </Link>
              </li>
              <li>
                <Link to="/services/premium" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Premium Trading
                </Link>
              </li>
              <li>
                <Link to="/hni-services" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  HNI Services
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Market Research
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-400 text-sm">+91  95914 08655</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400 text-sm">Renbeersaxena77@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Address</h4>
                <p className="text-gray-400 text-sm">BANASWADI, BANGALORE  KARNATAKA 560043

</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 <span className="text-emerald-400 font-semibold">ArthaVeda Research</span>. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/refund-privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy & Policy
              </Link>
              <Link to="/support" className="text-gray-400 hover:text-white transition-colors duration-300">
                Support
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-400 font-medium">24/7 Active</span>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
         
        </div>
      </div>
    </footer>
  )
}

export default Footer
