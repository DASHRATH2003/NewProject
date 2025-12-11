import React, { useState, useEffect } from 'react'
import apiService from '../services/apiService'

const Research = () => {
  const [activeTab, setActiveTab] = useState('market-analysis')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const marketAnalysis = [
    {
      title: 'Nifty 50 Technical Analysis',
      summary: 'Nifty 50 shows strong support at 19,200 levels with resistance at 19,400. RSI indicates oversold conditions.',
      author: 'Technical Team',
      date: '2024-01-15',
      category: 'technical',
      readTime: '5 min read'
    },
    {
      title: 'Bank Nifty Outlook',
      summary: 'Bank Nifty expected to consolidate between 43,000-44,000 levels. Key support at 42,800.',
      author: 'Research Team',
      date: '2024-01-15',
      category: 'technical',
      readTime: '3 min read'
    },
    {
      title: 'Market Sentiment Analysis',
      summary: 'Overall market sentiment remains positive with FIIs showing renewed interest in Indian equities.',
      author: 'Market Research',
      date: '2024-01-14',
      category: 'fundamental',
      readTime: '7 min read'
    }
  ]

  const stockRecommendations = [
    {
      symbol: 'RELIANCE',
      recommendation: 'BUY',
      target: 2600,
      stopLoss: 2400,
      currentPrice: 2456.78,
      upside: 5.8,
      reason: 'Strong Q3 results and positive outlook for Jio and retail segments.',
      risk: 'Medium',
      timeframe: '3-6 months'
    },
    {
      symbol: 'TCS',
      recommendation: 'HOLD',
      target: 3500,
      stopLoss: 3400,
      currentPrice: 3456.90,
      upside: 1.2,
      reason: 'Stable performance but limited upside potential in current market conditions.',
      risk: 'Low',
      timeframe: '1-3 months'
    },
    {
      symbol: 'INFY',
      recommendation: 'BUY',
      target: 1600,
      stopLoss: 1400,
      currentPrice: 1456.34,
      upside: 9.9,
      reason: 'Attractive valuation and strong digital transformation pipeline.',
      risk: 'Medium',
      timeframe: '6-12 months'
    },
    {
      symbol: 'HDFC',
      recommendation: 'SELL',
      target: 1600,
      stopLoss: 1700,
      currentPrice: 1654.23,
      upside: -3.3,
      reason: 'Merger concerns and regulatory headwinds affecting growth prospects.',
      risk: 'High',
      timeframe: '1-3 months'
    }
  ]

  const researchReports = [
    {
      title: 'Q3 FY24 Earnings Preview',
      summary: 'Comprehensive analysis of expected Q3 earnings for Nifty 50 companies.',
      author: 'Equity Research',
      date: '2024-01-10',
      category: 'earnings',
      readTime: '15 min read',
      pdf: true
    },
    {
      title: 'Sector Outlook 2024',
      summary: 'Detailed sector-wise analysis and investment opportunities for 2024.',
      author: 'Research Team',
      date: '2024-01-08',
      category: 'sector',
      readTime: '20 min read',
      pdf: true
    },
    {
      title: 'IPO Analysis: New Listings',
      summary: 'Analysis of recent IPOs and upcoming listings with investment recommendations.',
      author: 'IPO Research',
      date: '2024-01-05',
      category: 'ipo',
      readTime: '12 min read',
      pdf: true
    }
  ]

  const [marketIndicators, setMarketIndicators] = useState({
    nifty: { value: 19234.56, change: 234.67, changePercent: 1.23, trend: 'up' },
    bankNifty: { value: 43256.78, change: -123.45, changePercent: -0.28, trend: 'down' },
    vix: { value: 12.34, change: -0.56, changePercent: -4.34, trend: 'down' },
    fiiFlow: { value: 1234.56, change: 234.56, changePercent: 23.45, trend: 'up' },
    diiFlow: { value: -567.89, change: -123.45, changePercent: -27.89, trend: 'down' }
  })
  const [marketDataLoading, setMarketDataLoading] = useState(true)

  const fetchMarketData = async () => {
    try {
      const response = await apiService.getMarketData()
      if (response.success) {
        setMarketIndicators({
          nifty: response.data.nifty,
          bankNifty: response.data.bankNifty,
          vix: response.data.vix,
          fiiFlow: response.data.fiiFlow,
          diiFlow: response.data.diiFlow
        })
      }
    } catch (error) {
      console.error('Error fetching market data:', error)
    } finally {
      setMarketDataLoading(false)
    }
  }

  useEffect(() => {
    fetchMarketData()
    // Refresh market data every 60 seconds
    const interval = setInterval(fetchMarketData, 60000)
    return () => clearInterval(interval)
  }, [])

  const renderMarketAnalysis = () => (
    <div className="space-y-6">
      {marketAnalysis.map((analysis, index) => (
        <div key={index} className="bg-slate-700/30 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">{analysis.title}</h3>
              <p className="text-gray-300 mb-3">{analysis.summary}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>By {analysis.author}</span>
                <span>{analysis.date}</span>
                <span>{analysis.readTime}</span>
                <span className={`px-2 py-1 rounded text-xs ${
                  analysis.category === 'technical' ? 'bg-blue-500/20 text-blue-400' : 'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {analysis.category.toUpperCase()}
                </span>
              </div>
            </div>
            <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  )

  const renderStockRecommendations = () => (
    <div className="space-y-6">
      {stockRecommendations.map((stock, index) => (
        <div key={index} className="bg-slate-700/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <h3 className="text-white font-semibold text-xl">{stock.symbol}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                stock.recommendation === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' :
                stock.recommendation === 'SELL' ? 'bg-red-500/20 text-red-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {stock.recommendation}
              </span>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">₹{stock.currentPrice.toFixed(2)}</p>
              <p className={`text-sm ${stock.upside >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {stock.upside >= 0 ? '+' : ''}{stock.upside.toFixed(1)}%
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-gray-400 text-sm">Target Price</p>
              <p className="text-white font-semibold">₹{stock.target.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Stop Loss</p>
              <p className="text-white font-semibold">₹{stock.stopLoss.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Risk Level</p>
              <p className={`font-semibold ${
                stock.risk === 'Low' ? 'text-emerald-400' :
                stock.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {stock.risk}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Timeframe</p>
              <p className="text-white font-semibold">{stock.timeframe}</p>
            </div>
          </div>
          
          <div>
            <p className="text-gray-300 text-sm mb-2"><strong>Reason:</strong> {stock.reason}</p>
          </div>
        </div>
      ))}
    </div>
  )

  const renderResearchReports = () => (
    <div className="space-y-6">
      {researchReports.map((report, index) => (
        <div key={index} className="bg-slate-700/30 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-white font-semibold text-lg">{report.title}</h3>
                {report.pdf && (
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">PDF</span>
                )}
              </div>
              <p className="text-gray-300 mb-3">{report.summary}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>By {report.author}</span>
                <span>{report.date}</span>
                <span>{report.readTime}</span>
                <span className="px-2 py-1 rounded text-xs bg-purple-500/20 text-purple-400">
                  {report.category.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="flex space-x-2 ml-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-all duration-300">
                Read
              </button>
              {report.pdf && (
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-all duration-300">
                  Download PDF
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Market Research</h1>
        <p className="text-gray-400">Stay informed with expert analysis and recommendations</p>
      </div>

      {/* Market Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/50 border border-blue-500/30 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">NIFTY 50</h3>
          <p className="text-white font-semibold">{marketIndicators.nifty.value.toFixed(2)}</p>
          <p className={`text-sm ${marketIndicators.nifty.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {marketIndicators.nifty.change >= 0 ? '+' : ''}{marketIndicators.nifty.change.toFixed(2)} ({marketIndicators.nifty.changePercent >= 0 ? '+' : ''}{marketIndicators.nifty.changePercent.toFixed(2)}%)
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/50 to-blue-900/50 border border-emerald-500/30 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">BANK NIFTY</h3>
          <p className="text-white font-semibold">{marketIndicators.bankNifty.value.toFixed(2)}</p>
          <p className={`text-sm ${marketIndicators.bankNifty.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {marketIndicators.bankNifty.change >= 0 ? '+' : ''}{marketIndicators.bankNifty.change.toFixed(2)} ({marketIndicators.bankNifty.changePercent >= 0 ? '+' : ''}{marketIndicators.bankNifty.changePercent.toFixed(2)}%)
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/50 border border-blue-500/30 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">VIX</h3>
          <p className="text-white font-semibold">{marketIndicators.vix.value.toFixed(2)}</p>
          <p className={`text-sm ${marketIndicators.vix.change >= 0 ? 'text-red-400' : 'text-emerald-400'}`}>
            {marketIndicators.vix.change >= 0 ? '+' : ''}{marketIndicators.vix.change.toFixed(2)} ({marketIndicators.vix.changePercent >= 0 ? '+' : ''}{marketIndicators.vix.changePercent.toFixed(2)}%)
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/50 to-blue-900/50 border border-emerald-500/30 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">FII Flow (Cr)</h3>
          <p className="text-white font-semibold">{marketIndicators.fiiFlow.value.toFixed(2)}</p>
          <p className={`text-sm ${marketIndicators.fiiFlow.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {marketIndicators.fiiFlow.change >= 0 ? '+' : ''}{marketIndicators.fiiFlow.change.toFixed(2)} ({marketIndicators.fiiFlow.changePercent >= 0 ? '+' : ''}{marketIndicators.fiiFlow.changePercent.toFixed(2)}%)
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/50 border border-blue-500/30 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">DII Flow (Cr)</h3>
          <p className="text-white font-semibold">{marketIndicators.diiFlow.value.toFixed(2)}</p>
          <p className={`text-sm ${marketIndicators.diiFlow.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {marketIndicators.diiFlow.change >= 0 ? '+' : ''}{marketIndicators.diiFlow.change.toFixed(2)} ({marketIndicators.diiFlow.changePercent >= 0 ? '+' : ''}{marketIndicators.diiFlow.changePercent.toFixed(2)}%)
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-slate-800/50 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('market-analysis')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'market-analysis'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Market Analysis
          </button>
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'recommendations'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Stock Recommendations
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'reports'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Research Reports
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
        {activeTab === 'market-analysis' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Market Analysis</h3>
              <div className="flex space-x-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  <option value="technical">Technical</option>
                  <option value="fundamental">Fundamental</option>
                </select>
              </div>
            </div>
            {renderMarketAnalysis()}
          </div>
        )}

        {activeTab === 'recommendations' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Stock Recommendations</h3>
            {renderStockRecommendations()}
          </div>
        )}

        {activeTab === 'reports' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Research Reports</h3>
            {renderResearchReports()}
          </div>
        )}
      </div>
    </div>
  )
}

export default Research
