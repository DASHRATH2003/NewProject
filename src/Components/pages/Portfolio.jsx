import React, { useState } from 'react'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('holdings')
  const [timeframe, setTimeframe] = useState('1M')

  const portfolioData = {
    totalValue: 1250000,
    totalInvested: 1015433,
    totalProfit: 234567,
    totalProfitPercent: 23.12,
    dayChange: 45678,
    dayChangePercent: 3.78
  }

  const holdings = [
    {
      symbol: 'RELIANCE',
      quantity: 100,
      avgPrice: 2356.78,
      currentPrice: 2456.78,
      marketValue: 245678,
      profit: 10000,
      profitPercent: 4.24
    },
    {
      symbol: 'TCS',
      quantity: 50,
      avgPrice: 3356.90,
      currentPrice: 3456.90,
      marketValue: 172845,
      profit: 5000,
      profitPercent: 2.98
    },
    {
      symbol: 'INFY',
      quantity: 200,
      avgPrice: 1356.34,
      currentPrice: 1456.34,
      marketValue: 291268,
      profit: 20000,
      profitPercent: 7.37
    },
    {
      symbol: 'HDFC',
      quantity: 75,
      avgPrice: 1554.23,
      currentPrice: 1654.23,
      marketValue: 124067,
      profit: 7500,
      profitPercent: 6.44
    },
    {
      symbol: 'WIPRO',
      quantity: 300,
      avgPrice: 446.78,
      currentPrice: 456.78,
      marketValue: 137034,
      profit: 3000,
      profitPercent: 2.24
    }
  ]

  const sectorAllocation = [
    { sector: 'Oil & Gas', value: 245678, percentage: 19.65 },
    { sector: 'IT', value: 172845, percentage: 13.83 },
    { sector: 'Technology', value: 291268, percentage: 23.30 },
    { sector: 'Banking', value: 124067, percentage: 9.93 },
    { sector: 'Software', value: 137034, percentage: 10.96 },
    { sector: 'Others', value: 279108, percentage: 22.33 }
  ]

  const performanceData = {
    '1D': { value: 1204567, change: 45678, changePercent: 3.78 },
    '1W': { value: 1189234, change: 89234, changePercent: 8.12 },
    '1M': { value: 1156789, change: 56789, changePercent: 5.17 },
    '3M': { value: 1087654, change: 87654, changePercent: 8.76 },
    '1Y': { value: 1015433, change: 15433, changePercent: 1.54 }
  }

  const renderHoldings = () => (
    <div className="space-y-4">
      {holdings.map((holding, index) => (
        <div key={index} className="bg-slate-700/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h4 className="text-white font-semibold text-lg">{holding.symbol}</h4>
              <p className="text-gray-400 text-sm">{holding.quantity} shares</p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">₹{holding.marketValue.toLocaleString()}</p>
              <p className={`text-sm font-medium ${holding.profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {holding.profit >= 0 ? '+' : ''}₹{holding.profit.toLocaleString()} ({holding.profitPercent >= 0 ? '+' : ''}{holding.profitPercent.toFixed(2)}%)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Avg Price</p>
              <p className="text-white">₹{holding.avgPrice.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400">Current Price</p>
              <p className="text-white">₹{holding.currentPrice.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400">Weight</p>
              <p className="text-white">{((holding.marketValue / portfolioData.totalValue) * 100).toFixed(1)}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderAllocation = () => (
    <div className="space-y-4">
      {sectorAllocation.map((sector, index) => (
        <div key={index} className="bg-slate-700/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-semibold">{sector.sector}</h4>
            <span className="text-white font-semibold">{sector.percentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${sector.percentage}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-1">₹{sector.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  )

  const renderPerformance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(performanceData).map(([period, data]) => (
          <div key={period} className="bg-slate-700/30 rounded-lg p-4 text-center">
            <p className="text-gray-400 text-sm mb-1">{period}</p>
            <p className="text-white font-semibold">₹{(data.value / 100000).toFixed(1)}L</p>
            <p className={`text-sm font-medium ${data.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {data.change >= 0 ? '+' : ''}{data.changePercent.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
      
      <div className="bg-slate-700/30 rounded-lg p-6">
        <h4 className="text-white font-semibold mb-4">Performance Chart</h4>
        <div className="h-64 bg-slate-800/50 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Chart visualization would be implemented here</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
        <p className="text-gray-400">Track your investments and performance</p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/50 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Total Value</h3>
          <p className="text-2xl font-bold text-white">₹{(portfolioData.totalValue / 100000).toFixed(2)}L</p>
          <p className={`text-sm ${portfolioData.dayChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {portfolioData.dayChange >= 0 ? '+' : ''}₹{(portfolioData.dayChange / 1000).toFixed(1)}K ({portfolioData.dayChangePercent >= 0 ? '+' : ''}{portfolioData.dayChangePercent.toFixed(2)}%)
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/50 to-blue-900/50 border border-emerald-500/30 rounded-xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Total Invested</h3>
          <p className="text-2xl font-bold text-white">₹{(portfolioData.totalInvested / 100000).toFixed(2)}L</p>
          <p className="text-gray-400 text-sm">Initial investment</p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/50 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Total Profit</h3>
          <p className="text-2xl font-bold text-emerald-400">₹{(portfolioData.totalProfit / 1000).toFixed(1)}K</p>
          <p className="text-emerald-400 text-sm">{portfolioData.totalProfitPercent >= 0 ? '+' : ''}{portfolioData.totalProfitPercent.toFixed(2)}%</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/50 to-blue-900/50 border border-emerald-500/30 rounded-xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Holdings</h3>
          <p className="text-2xl font-bold text-white">{holdings.length}</p>
          <p className="text-gray-400 text-sm">Stocks</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-slate-800/50 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('holdings')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'holdings'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Holdings
          </button>
          <button
            onClick={() => setActiveTab('allocation')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'allocation'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Allocation
          </button>
          <button
            onClick={() => setActiveTab('performance')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'performance'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Performance
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
        {activeTab === 'holdings' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Holdings</h3>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-600 transition-all duration-300">
                  Export
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-all duration-300">
                  Add Stock
                </button>
              </div>
            </div>
            {renderHoldings()}
          </div>
        )}

        {activeTab === 'allocation' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Sector Allocation</h3>
            {renderAllocation()}
          </div>
        )}

        {activeTab === 'performance' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Performance</h3>
              <div className="flex space-x-1 bg-slate-700 rounded-lg p-1">
                {['1D', '1W', '1M', '3M', '1Y'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimeframe(period)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                      timeframe === period
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            {renderPerformance()}
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio
