import React from 'react'

const OfferBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-center text-center">
          <span className="inline-flex items-center text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide">
            <svg className="w-5 h-5 mr-2 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l.7 2.144a1 1 0 00.95.69h2.255c.969 0 1.371 1.24.588 1.81l-1.825 1.327a1 1 0 00-.364 1.118l.7 2.144c.3.921-.755 1.688-1.54 1.118l-1.825-1.327a1 1 0 00-1.176 0l-1.825 1.327c-.784.57-1.839-.197-1.54-1.118l.7-2.144a1 1 0 00-.364-1.118L6.256 7.571c-.783-.57-.38-1.81.588-1.81h2.255a1 1 0 00.95-.69l.7-2.144z" />
            </svg>
            Limited Time Offer: Get 30% OFF
          </span>
        </div>
      </div>
    </div>
  )
}

export default OfferBanner
