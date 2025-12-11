import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BasicServices = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const services = [
    {
      id: 'basic-trading',
      title: 'STOCK CASH',
      description: 'Start your trading journey with our basic trading package',
      monthly: 999,
      quarterly: 2499,
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
      monthly: 2999,
      quarterly: 4999,
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
      monthly: 3599,
      quarterly: 6999,
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
      monthly: 1099,
      quarterly: 6999,
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
      monthly: 9999,
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
      monthly: 4999,
      quarterly: 12999,
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
      monthly: 3999,
      quarterly: 9999,
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
      monthly: 3499,
      quarterly: 8999,
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

  const handlePayment = (serviceId, plan) => {
    const service = services.find(s => s.id === serviceId)
    const amount = plan === 'monthly' ? service.monthly : service.quarterly
    
    // Redirect to payment page with service details
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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"><div class="text-center mb-6"><h3 class="text-lg font-bold text-gray-900 mb-2">STOCK CASH</h3><p class="text-sm text-gray-600 mb-4">Start your trading journey with our basic trading services designed</p></div><div class="text-center mb-6"><div class="mb-4"><div class="text-sm text-gray-600 mb-1">Monthly</div><div class="text-2xl font-bold text-gray-900">₹9999/-</div><button class="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">Buy Now</button></div><div><div class="text-sm text-gray-600 mb-1">Quarterly</div><div class="text-2xl font-bold text-gray-900">₹14999/-</div><button class="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Buy Now</button></div></div><div class="border-t border-gray-200 pt-4"><div class="text-sm text-gray-600 mb-2">Features Included:</div><ul class="space-y-2"><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Live market updates</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Basic technical analysis</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Email support</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Social alerts</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Basic support</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Risk management tips</li></ul></div></div><div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"><div class="text-center mb-6"><h3 class="text-lg font-bold text-gray-900 mb-2">STOCK FUTURES</h3><p class="text-sm text-gray-600 mb-4">Advanced futures trading for smart traders</p></div><div class="text-center mb-6"><div class="mb-4"><div class="text-sm text-gray-600 mb-1">Monthly</div><div class="text-2xl font-bold text-gray-900">₹12999/-</div><button class="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">Buy Now</button></div><div><div class="text-sm text-gray-600 mb-1">Quarterly</div><div class="text-2xl font-bold text-gray-900">₹17999/-</div><button class="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Buy Now</button></div></div><div class="border-t border-gray-200 pt-4"><div class="text-sm text-gray-600 mb-2">Features Included:</div><ul class="space-y-2"><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Portfolio analysis</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Basic allocation advice</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Market timing guidance</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Risk assessment</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Investment suggestions</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Additional tracking</li></ul></div></div><div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"><div class="text-center mb-6"><h3 class="text-lg font-bold text-gray-900 mb-2">STOCK OPTIONS</h3><p class="text-sm text-gray-600 mb-4">Professional options trading and analysis</p></div><div class="text-center mb-6"><div class="mb-4"><div class="text-sm text-gray-600 mb-1">Monthly</div><div class="text-2xl font-bold text-gray-900">₹14999/-</div><button class="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">Buy Now</button></div><div><div class="text-sm text-gray-600 mb-1">Quarterly</div><div class="text-2xl font-bold text-gray-900">₹22999/-</div><button class="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Buy Now</button></div></div><div class="border-t border-gray-200 pt-4"><div class="text-sm text-gray-600 mb-2">Features Included:</div><ul class="space-y-2"><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Daily market reports</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Investment recommendations</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Personalized research</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Advanced analytics</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Guidance consultants</li></ul></div></div><div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"><div class="text-center mb-6"><h3 class="text-lg font-bold text-gray-900 mb-2">INDEX FUTURES</h3><p class="text-sm text-gray-600 mb-4">Dedicated customer support for all your queries</p></div><div class="text-center mb-6"><div class="mb-4"><div class="text-sm text-gray-600 mb-1">Monthly</div><div class="text-2xl font-bold text-gray-900">₹19999/-</div><button class="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">Buy Now</button></div><div><div class="text-sm text-gray-600 mb-1">Quarterly</div><div class="text-2xl font-bold text-gray-900">₹25999/-</div><button class="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Buy Now</button></div></div><div class="border-t border-gray-200 pt-4"><div class="text-sm text-gray-600 mb-2">Features Included:</div><ul class="space-y-2"><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>24*7 live support</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Phone support</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Live support</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Technical assistance</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Account management</li></ul></div></div><div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"><div class="text-center mb-6"><h3 class="text-lg font-bold text-gray-900 mb-2">INDEX OPTIONS</h3><p class="text-sm text-gray-600 mb-4">Systematic investment plans and management</p></div><div class="text-center mb-6"><div class="mb-4"><div class="text-sm text-gray-600 mb-1">Monthly</div><div class="text-2xl font-bold text-gray-900">₹12,999/-</div><button class="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">Buy Now</button></div><div><div class="text-sm text-gray-600 mb-1">Quarterly</div><div class="text-2xl font-bold text-gray-900">₹23,999/-</div><button class="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Buy Now</button></div></div><div class="border-t border-gray-200 pt-4"><div class="text-sm text-gray-600 mb-2">Features Included:</div><ul class="space-y-2"><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Mutual fund selection</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Professional investing</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Systematic tracking</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Performance monitoring</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Guidance consultants</li></ul></div></div><div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"><div class="text-center mb-6"><h3 class="text-lg font-bold text-gray-900 mb-2">MCX BULLIONS</h3><p class="text-sm text-gray-600 mb-4">Gold and silver trading with expert guidance</p></div><div class="text-center mb-6"><div class="mb-4"><div class="text-sm text-gray-600 mb-1">Monthly</div><div class="text-2xl font-bold text-gray-900">₹14,999/-</div><button class="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">Buy Now</button></div><div><div class="text-sm text-gray-600 mb-1">Quarterly</div><div class="text-2xl font-bold text-gray-900">₹45,999/-</div><button class="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Buy Now</button></div></div><div class="border-t border-gray-200 pt-4"><div class="text-sm text-gray-600 mb-2">Features Included:</div><ul class="space-y-2"><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Recommendations only</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Risk to reward ratio 1:2</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Bullion market analysis</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Whatsapp alerts</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Market updates</li></ul></div></div><div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"><div class="text-center mb-6"><h3 class="text-lg font-bold text-gray-900 mb-2">MCX BASEMETAL</h3><p class="text-sm text-gray-600 mb-4">Copper and aluminum trading strategies</p></div><div class="text-center mb-6"><div class="mb-4"><div class="text-sm text-gray-600 mb-1">Monthly</div><div class="text-2xl font-bold text-gray-900">₹14,999/-</div><button class="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">Buy Now</button></div><div><div class="text-sm text-gray-600 mb-1">Quarterly</div><div class="text-2xl font-bold text-gray-900">₹29,999/-</div><button class="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Buy Now</button></div></div><div class="border-t border-gray-200 pt-4"><div class="text-sm text-gray-600 mb-2">Features Included:</div><ul class="space-y-2"><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>2 recommendations daily</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>2 recommendations daily</li></ul></div></div><div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"><div class="text-center mb-6"><h3 class="text-lg font-bold text-gray-900 mb-2">MCX ENERGY</h3><p class="text-sm text-gray-600 mb-4">Crude oil and natural gas trading With Expert Guidance</p></div><div class="text-center mb-6"><div class="mb-4"><div class="text-sm text-gray-600 mb-1">Monthly</div><div class="text-2xl font-bold text-gray-900">₹23999/-</div><button class="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">Buy Now</button></div><div><div class="text-sm text-gray-600 mb-1">Quarterly</div><div class="text-2xl font-bold text-gray-900">₹30999/-</div><button class="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">Buy Now</button></div></div><div class="border-t border-gray-200 pt-4"><div class="text-sm text-gray-600 mb-2">Features Included:</div><ul class="space-y-2"><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>2 recommendations daily</li><li class="flex items-start text-sm text-gray-700"><svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>2 recommendations daily</li></ul></div></div></div></div>

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
