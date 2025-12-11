import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import ApiService from '../services/apiService'

const Payment = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [paymentData, setPaymentData] = useState({
    service: searchParams.get('service') || '',
    plan: searchParams.get('plan') || '',
    amount: parseInt(searchParams.get('amount')) || 0
  })
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const serviceNames = {
    'basic-trading': 'Basic Trading',
    'portfolio-management': 'Portfolio Management',
    'market-research': 'Market Research',
    'customer-support': 'Customer Support',
    'sip-investment': 'SIP Investment',
    'premium-trading': 'Premium Trading',
    'wealth-management': 'Wealth Management',
    'personal-advisory': 'Personal Advisory',
    'tax-planning': 'Tax Planning',
    'stock-cash': 'Stock Cash (HNI)',
    'stock-futures': 'Stock Futures (HNI)',
    'stock-options': 'Stock Options (HNI)',
    'index-futures': 'Index Futures (HNI)',
    'index-options': 'Index Options (HNI)',
    'mcx-bullions': 'MCX Bullions',
    'mcx-basemetal': 'MCX Base Metal',
    'mcx-energy': 'MCX Energy',
    'mcx-bullions-premium': 'MCX Bullions (Premium)',
    'mcx-basemetal-premium': 'MCX Base Metal (Premium)',
    'mcx-energy-premium': 'MCX Energy (Premium)'
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert('Please fill all required fields')
      return
    }

    setLoading(true)

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        alert('Razorpay SDK failed to load. Please check your internet connection.')
        setLoading(false)
        return
      }

      // Create order on backend
      const apiService = new ApiService()
      const orderData = await apiService.post('/payment/create-order', {
        amount: paymentData.amount,
        currency: 'INR',
        service: paymentData.service,
        plan: paymentData.plan,
        userDetails
      })

      // Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_your_key_here',
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'TradeSmart',
        description: `${serviceNames[paymentData.service]} - ${paymentData.plan} plan`,
        order_id: orderData.id,
        handler: async function (response) {
          try {
            // Verify payment on backend
            try {
              const apiService = new ApiService()
              const verifyData = await apiService.post('/payment/verify', {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
              
              alert('Payment successful! Your service has been activated.')
              navigate('/dashboard')
            } catch (error) {
              console.error('Payment verification error:', error)
              alert('Payment verification failed. Please contact support.')
            }
          } catch (error) {
            console.error('Payment verification error:', error)
            alert('Payment verification failed. Please contact support.')
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone
        },
        theme: {
          color: '#3B82F6'
        },
        modal: {
          ondismiss: function() {
            setLoading(false)
          }
        }
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()

    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDemoPayment = () => {
    // Demo payment for testing
    alert('Demo payment successful! In production, this would process real payment.')
    navigate('/dashboard')
  }

  if (!paymentData.service || !paymentData.amount) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Invalid Payment Request</h1>
          <p className="text-gray-400 mb-6">Please select a service to proceed with payment.</p>
          <button
            onClick={() => navigate('/services/basic')}
            className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
          >
            Browse Services
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Your Payment
            </h1>
            <p className="text-gray-400">
              You're just one step away from accessing premium trading services
            </p>
          </div>

          {/* Payment Card */}
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8">
            {/* Service Details */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Service Details</h2>
              <div className="bg-gradient-to-r from-blue-900/50 to-emerald-900/50 border border-blue-500/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Service:</span>
                  <span className="text-white font-semibold">{serviceNames[paymentData.service]}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Plan:</span>
                  <span className="text-white font-semibold capitalize">{paymentData.plan}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Amount:</span>
                  <span className="text-emerald-400 font-bold text-xl">₹{paymentData.amount.toLocaleString()}/-</span>
                </div>
              </div>
            </div>

            {/* User Details Form */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Billing Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Address</label>
                  <textarea
                    name="address"
                    value={userDetails.address}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your address (optional)"
                    rows="3"
                  />
                </div>
              </div>
            </div>

            {/* Payment Buttons */}
            <div className="space-y-4">
              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Pay ₹${paymentData.amount.toLocaleString()} with Razorpay`}
              </button>
              
              <button
                onClick={handleDemoPayment}
                className="w-full border border-emerald-500 text-emerald-400 py-4 px-6 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300"
              >
                Demo Payment (For Testing)
              </button>
            </div>

            {/* Security Info */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure payment powered by Razorpay
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment