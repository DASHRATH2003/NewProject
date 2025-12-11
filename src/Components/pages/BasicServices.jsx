import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BasicServices = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const services = [
    {
      id: 'basic-trading',
      title: 'STOCK CASH',
      description: 'Start your trading journey with our basic trading package',
      monthly: 9999,
      quarterly: 14999,
      features: [
        'Basic market analysis',
        '1-2 stock recommendations daily',
        'Email alerts',
        'Basic support',
        'Market timing guidance',
        'Risk management tips'
      ]
    },
    {
      id: 'portfolio-management',
      title: 'STOCK FUTURES',
      description: 'Professional portfolio management for better returns',
      monthly: 12999,
      quarterly: 17999,
      features: [
        'Portfolio analysis',
        'Asset allocation guidance',
        'Monthly portfolio review',
        'Risk assessment',
        'Rebalancing suggestions',
        'Performance tracking'
      ]
    },
    {
      id: 'market-research',
      title: 'STOCK OPTIONS',
      description: 'Comprehensive market research and analysis',
      monthly: 14999,
      quarterly: 22999,
      features: [
        'Daily market reports',
        'Sector analysis',
        'Technical analysis',
        'Fundamental research',
        'Market trends',
        'Economic indicators'
      ]
    },
    {
      id: 'customer-support',
      title: 'INDEX FUTURES',
      description: 'Dedicated customer support for all your queries',
      monthly: 19999,
      quarterly: 25999,
      features: [
        '24/7 chat support',
        'Phone support',
        'Email support',
        'Query resolution',
        'Technical assistance',
        'Account management'
      ]
    },
    {
      id: 'sip-investment',
      title: 'INDEX OPTIONS',
      description: 'Systematic Investment Plan guidance and management',
      monthly: 12999,
      quarterly: 23999,
      features: [
        'SIP planning',
        'Mutual fund selection',
        'Goal-based investing',
        'Regular monitoring',
        'Performance review',
        'Tax optimization'
      ]
    },
    {
      id: 'mcx-bullions',
      title: 'MCX BULLIONS',
      description: 'Gold and silver trading with expert guidance',
      monthly: 14999,
      quarterly: 45999,
      features: [
        '2-3 recommendations daily',
        'Risk to reward ratio 1:2',
        'Bullion market analysis',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      id: 'mcx-basemetal',
      title: 'MCX BASEMETAL',
      description: 'Copper, zinc, and aluminum trading strategies',
      monthly: 14999,
      quarterly: 29999,
      features: [
        '2 recommendations daily',
        'Risk to reward ratio 1:2',
        'Base metal market insights',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      id: 'mcx-energy',
      title: 'MCX ENERGY',
      description: 'Crude oil and natural gas trading',
      monthly: 23999,
      quarterly: 30999,
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

  const handlePayment = (serviceId, plan, amountOverride) => {
    const service = services.find(s => s.id === serviceId)
    const amount = amountOverride ?? (plan === 'monthly' ? service?.monthly : service?.quarterly)
    window.location.href = `/payment?service=${serviceId}&plan=${plan}&amount=${amount}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mt-[-70px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Basic Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your trading journey with our comprehensive basic services designed for beginners and intermediate traders
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              </div>
              <div className="text-center mb-6">
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Monthly</div>
                  <div className="text-2xl font-bold text-gray-900">₹{service.monthly}/-</div>
                  <button onClick={() => handlePayment(service.id,'monthly')} className="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">Buy Now</button>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Quarterly</div>
                  <div className="text-2xl font-bold text-gray-900">₹{service.quarterly}/-</div>
                  <button onClick={() => handlePayment(service.id,'quarterly')} className="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Buy Now</button>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="text-sm text-gray-600 mb-2">Features Included:</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the service that best fits your needs and start building your wealth today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/support"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BasicServices
