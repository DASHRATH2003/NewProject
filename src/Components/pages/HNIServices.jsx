import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HNIServices = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const services = [
    {
      id: 'stock-cash',
      title: 'STOCK CASH',
      description: 'Intraday and BTST calls with proper stop loss and target',
      monthly: 49999,
      quarterly: 84999,
      features: [
        '2 recommendations daily',
        'Risk to reward ratio 1:2',
        'Technical & fundamental analysis',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      id: 'stock-futures',
      title: 'STOCK FUTURES',
      description: 'Futures trading calls with leverage opportunities',
      monthly: 54999,
      quarterly: 94999,
      features: [
        '2 recommendations daily',
        'Risk to reward ratio 1:2',
        'Leverage trading strategies',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      id: 'stock-options',
      title: 'STOCK OPTIONS',
      description: 'Options trading with advanced strategies',
      monthly: 39999,
      quarterly: 74999,
      features: [
        '2 recommendations daily',
        'Risk to reward ratio 1:2',
        'Options strategies',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      id: 'index-futures',
      title: 'INDEX FUTURES',
      description: 'Nifty and Bank Nifty futures trading',
      monthly: 29999,
      quarterly: 64999,
      features: [
        '2 recommendations daily',
        'Risk to reward ratio 1:2',
        'Index trading strategies',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      id: 'index-options',
      title: 'INDEX OPTIONS',
      description: 'Nifty and Bank Nifty options trading',
      monthly: 49999,
      quarterly: 84999,
      features: [
        '2 recommendations daily',
        'Risk to reward ratio 1:2',
        'Index options strategies',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      id: 'mcx-bullions',
      title: 'MCX BULLIONS',
      description: 'Gold and Silver trading calls',
      monthly: 19999,
      quarterly: 54999,
      features: [
        '2 recommendations daily',
        'Risk to reward ratio 1:2',
        'Commodity trading strategies',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      id: 'mcx-basemetal',
      title: 'MCX BASEMETAL',
      description: 'Base metals trading calls',
      monthly: 14999,
      quarterly: 39999,
      features: [
        '2 recommendations daily',
        'Risk to reward ratio 1:2',
        'Base metals strategies',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      id: 'mcx-energy',
      title: 'MCX ENERGY',
      description: 'Crude oil and natural gas trading',
      monthly: 14999,
      quarterly: 39999,
      features: [
        '2 recommendations daily',
        'Risk to reward ratio 1:2',
        'Energy trading strategies',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    }
  ]

  const handlePlanSelect = (serviceId) => {
    setSelectedPlan(serviceId)
  }

  const handlePayment = (serviceId, duration) => {
    // Handle payment logic here
    const service = services.find(s => s.id === serviceId)
    const amount = duration === 'monthly' ? service.monthly : service.quarterly
    console.log(`Payment for ${serviceId} - ${duration} - Amount: ${amount}`)
    // Redirect to payment page with service details
    window.location.href = `/payment?service=${serviceId}&plan=${duration}&amount=${amount}&type=hni`
  }

  return (
    <div className="min-h-screen py-8">
      {/* Header Section */}
      <section className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            HNI SERVICES
          </span>
        </h1>
        <p className="text-xl text-white mb-4 max-w-4xl mx-auto">
          We will be providing you with intraday and Buy Today and Sell Tomorrow (BTST) calls with proper stop loss and target using our technical & fundamental analysis. There will be 2 recommendations where a recommendation will have a risk to reward ratio around 1:2.
        </p>
       
        <p className="text-gray-700 mt-2">
          Prices GST Inclusive
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-gradient-to-br from-gray-50 to-blue-50 border rounded-xl p-6 hover:border-blue-300 transition-all duration-300 ${
                selectedPlan === service.id ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-200'
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              </div>

              {/* Pricing Cards */}
              <div className="space-y-4 mb-6">
                {/* Monthly Plan */}
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 rounded-lg p-4">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Monthly</h4>
                    <div className="text-2xl font-bold text-emerald-600 mb-2">
                      ₹{service.monthly.toLocaleString()}/-
                    </div>
                    <button
                      onClick={() => handlePayment(service.id, 'monthly')}
                      className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
                    >
                      Pay
                    </button>
                  </div>
                </div>

                {/* Quarterly Plan */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-4">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Quarterly</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      ₹{service.quarterly.toLocaleString()}/-
                    </div>
                    <button
                      onClick={() => handlePayment(service.id, 'quarterly')}
                      className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Pay
                    </button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <h5 className="text-gray-900 font-semibold mb-3">What's Included:</h5>
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="max-w-4xl mx-auto mt-16 px-4">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Important Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Disclaimer</h3>
              <p className="text-sm">
                Trading in financial markets involves substantial risk of loss and is not suitable for all investors. 
                Past performance does not guarantee future results.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Terms</h3>
              <p className="text-sm">
                All recommendations are based on technical and fundamental analysis. 
                Clients are advised to do their own research before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-gray-700 mb-6">
            Choose your preferred service and start receiving professional trading calls today.
          </p>
          <Link 
            to="/support" 
            className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HNIServices