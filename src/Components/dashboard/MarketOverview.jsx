import React, { useState, useEffect } from 'react'
import apiService from '../services/apiService'

const MarketOverview = () => {
  const [marketData, setMarketData] = useState({
    nifty: { value: 19234.56, change: 234.67, changePercent: 1.23 },
    bankNifty: { value: 43256.78, change: -123.45, changePercent: -0.28 },
    sensex: { value: 64234.56, change: 456.78, changePercent: 0.72 },
    vix: { value: 12.34, change: -0.56, changePercent: -4.34 },
    fiiFlow: { value: 1234.56, change: 234.56, changePercent: 23.45, trend: 'up' },
    diiFlow: { value: -567.89, change: -123.45, changePercent: -27.89, trend: 'down' },
    volume: 45600,
    lastUpdated: new Date().toISOString()
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchMarketData = async () => {
    try {
      setError(null)
      const response = await apiService.getMarketData()
      if (response.success) {
        setMarketData(response.data)
      }
    } catch (err) {
      console.error('Error fetching market data:', err)
      setError('Failed to fetch market data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMarketData()
    
    // Fetch fresh data every 30 seconds
    const interval = setInterval(fetchMarketData, 30000)

    return () => clearInterval(interval)
  }, [])

  const indices = [
    {
      name: 'NIFTY 50',
      data: marketData.nifty,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'BANK NIFTY',
      data: marketData.bankNifty,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'SENSEX',
      data: marketData.sensex,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Market Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {indices.map((index, idx) => (
          <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold">{index.name}</h4>
              <span className="text-sm text-gray-400">NSE</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {index.data.value.toFixed(2)}
            </div>
            <div className={`flex items-center text-sm ${index.data.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              <span>{index.data.change >= 0 ? '+' : ''}{index.data.change.toFixed(2)}</span>
              <span className="ml-2">({index.data.changePercent >= 0 ? '+' : ''}{index.data.changePercent.toFixed(2)}%)</span>
            </div>
            <div className={`w-full h-1 bg-gradient-to-r ${index.color} rounded-full mt-2`}></div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className={`text-2xl font-bold ${marketData.fiiFlow?.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
            {marketData.fiiFlow?.value >= 0 ? '+' : ''}₹{Math.abs(marketData.fiiFlow?.value || 0).toFixed(0)}Cr
          </div>
          <div className="text-sm text-gray-400">FII Flow</div>
          <div className={`text-xs ${marketData.fiiFlow?.changePercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {marketData.fiiFlow?.changePercent >= 0 ? '+' : ''}{marketData.fiiFlow?.changePercent?.toFixed(2)}%
          </div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${marketData.diiFlow?.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
            {marketData.diiFlow?.value >= 0 ? '+' : ''}₹{Math.abs(marketData.diiFlow?.value || 0).toFixed(0)}Cr
          </div>
          <div className="text-sm text-gray-400">DII Flow</div>
          <div className={`text-xs ${marketData.diiFlow?.changePercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {marketData.diiFlow?.changePercent >= 0 ? '+' : ''}{marketData.diiFlow?.changePercent?.toFixed(2)}%
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{marketData.vix?.value?.toFixed(2) || '12.34'}</div>
          <div className="text-sm text-gray-400">VIX</div>
          <div className={`text-xs ${marketData.vix?.changePercent >= 0 ? 'text-red-400' : 'text-emerald-400'}`}>
            {marketData.vix?.changePercent >= 0 ? '+' : ''}{marketData.vix?.changePercent?.toFixed(2)}%
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">₹{((marketData.volume || 45600) / 1000).toFixed(1)}K</div>
          <div className="text-sm text-gray-400">Volume</div>
          <div className="text-xs text-gray-500">
            {new Date(marketData.lastUpdated).toLocaleTimeString()}
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
          <button 
            onClick={fetchMarketData}
            className="text-red-300 hover:text-red-200 text-xs underline mt-1"
          >
            Retry
          </button>
        </div>
      )}
      
      {loading && (
        <div className="mt-4 text-center">
          <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
          <p className="text-gray-400 text-sm mt-2">Loading market data...</p>
        </div>
      )}
    </div>
  )
}

export default MarketOverview
