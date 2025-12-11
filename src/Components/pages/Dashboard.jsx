import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [marketData, setMarketData] = useState({
    nifty: { value: 19234.56, change: 234.67, changePercent: 1.23 },
    bankNifty: { value: 43256.78, change: -123.45, changePercent: -0.28 },
    sensex: { value: 64234.56, change: 456.78, changePercent: 0.72 }
  })

  const [portfolioData] = useState({
    totalValue: 1250000,
    dayChange: 45678,
    dayChangePercent: 3.78,
    totalProfit: 234567,
    totalProfitPercent: 23.12
  })

  const [recentTrades] = useState([
    { symbol: 'RELIANCE', type: 'BUY', quantity: 100, price: 2456.78, time: '09:15 AM' },
    { symbol: 'TCS', type: 'SELL', quantity: 50, price: 3456.90, time: '10:30 AM' },
    { symbol: 'INFY', type: 'BUY', quantity: 200, price: 1456.34, time: '11:45 AM' },
    { symbol: 'HDFC', type: 'SELL', quantity: 75, price: 1654.23, time: '02:15 PM' }
  ])

  const [watchlist] = useState([
    { symbol: 'RELIANCE', price: 2456.78, change: 23.45, changePercent: 0.96 },
    { symbol: 'TCS', price: 3456.90, change: -12.34, changePercent: -0.36 },
    { symbol: 'INFY', price: 1456.34, change: 45.67, changePercent: 3.24 },
    { symbol: 'HDFC', price: 1654.23, change: -8.90, changePercent: -0.54 },
    { symbol: 'WIPRO', price: 456.78, change: 12.34, changePercent: 2.78 }
  ])

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setMarketData(prev => ({
        nifty: {
          ...prev.nifty,
          value: prev.nifty.value + (Math.random() - 0.5) * 10,
          change: prev.nifty.change + (Math.random() - 0.5) * 5
        },
        bankNifty: {
          ...prev.bankNifty,
          value: prev.bankNifty.value + (Math.random() - 0.5) * 20,
          change: prev.bankNifty.change + (Math.random() - 0.5) * 10
        },
        sensex: {
          ...prev.sensex,
          value: prev.sensex.value + (Math.random() - 0.5) * 30,
          change: prev.sensex.change + (Math.random() - 0.5) * 15
        }
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8 pt-0">
        <h1 className="text-3xl font-bold text-white mb-2">Trading Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your market overview</p>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/50 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">NIFTY 50</h3>
            <span className="text-sm text-gray-400">NSE</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">
            {marketData.nifty.value.toFixed(2)}
          </div>
          <div className={`flex items-center text-sm ${marketData.nifty.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            <span>{marketData.nifty.change >= 0 ? '+' : ''}{marketData.nifty.change.toFixed(2)}</span>
            <span className="ml-2">({marketData.nifty.changePercent >= 0 ? '+' : ''}{marketData.nifty.changePercent.toFixed(2)}%)</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/50 to-blue-900/50 border border-emerald-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">BANK NIFTY</h3>
            <span className="text-sm text-gray-400">NSE</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">
            {marketData.bankNifty.value.toFixed(2)}
          </div>
          <div className={`flex items-center text-sm ${marketData.bankNifty.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            <span>{marketData.bankNifty.change >= 0 ? '+' : ''}{marketData.bankNifty.change.toFixed(2)}</span>
            <span className="ml-2">({marketData.bankNifty.changePercent >= 0 ? '+' : ''}{marketData.bankNifty.changePercent.toFixed(2)}%)</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/50 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">SENSEX</h3>
            <span className="text-sm text-gray-400">BSE</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">
            {marketData.sensex.value.toFixed(2)}
          </div>
          <div className={`flex items-center text-sm ${marketData.sensex.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            <span>{marketData.sensex.change >= 0 ? '+' : ''}{marketData.sensex.change.toFixed(2)}</span>
            <span className="ml-2">({marketData.sensex.changePercent >= 0 ? '+' : ''}{marketData.sensex.changePercent.toFixed(2)}%)</span>
          </div>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Portfolio Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-gray-400 text-sm">Total Value</p>
              <p className="text-xl font-bold text-white">₹{(portfolioData.totalValue / 100000).toFixed(2)}L</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Day Change</p>
              <p className={`text-xl font-bold ${portfolioData.dayChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {portfolioData.dayChange >= 0 ? '+' : ''}₹{(portfolioData.dayChange / 1000).toFixed(1)}K
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Day %</p>
              <p className={`text-xl font-bold ${portfolioData.dayChangePercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {portfolioData.dayChangePercent >= 0 ? '+' : ''}{portfolioData.dayChangePercent.toFixed(2)}%
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Profit</p>
              <p className="text-xl font-bold text-emerald-400">₹{(portfolioData.totalProfit / 1000).toFixed(1)}K</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <Link 
              to="/trading" 
              className="block w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-3 px-4 rounded-lg text-center font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
            >
              Place Order
            </Link>
            <Link 
              to="/portfolio" 
              className="block w-full bg-slate-700 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              View Portfolio
            </Link>
            <Link 
              to="/research" 
              className="block w-full bg-slate-700 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              Market Research
            </Link>
            <Link 
              to="/hni-services" 
              className="block w-full bg-slate-700 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              HNI Services
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Trades & Watchlist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Recent Trades</h3>
          <div className="space-y-4">
            {recentTrades.map((trade, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${trade.type === 'BUY' ? 'bg-emerald-400' : 'bg-red-400'}`}></div>
                  <div>
                    <p className="text-white font-semibold">{trade.symbol}</p>
                    <p className="text-gray-400 text-sm">{trade.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">{trade.type}</p>
                  <p className="text-gray-400 text-sm">{trade.quantity} @ ₹{trade.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Watchlist</h3>
          <div className="space-y-4">
            {watchlist.map((stock, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <p className="text-white font-semibold">{stock.symbol}</p>
                  <p className="text-gray-400 text-sm">₹{stock.price.toFixed(2)}</p>
                </div>
                <div className={`text-right ${stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  <p className="font-semibold">{stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}</p>
                  <p className="text-sm">({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
