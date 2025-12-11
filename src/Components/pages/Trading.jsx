import React, { useState, useEffect } from 'react'

const Trading = () => {
  const [selectedStock, setSelectedStock] = useState('RELIANCE')
  const [orderType, setOrderType] = useState('MARKET')
  const [orderSide, setOrderSide] = useState('BUY')
  const [quantity, setQuantity] = useState(100)
  const [price, setPrice] = useState(2456.78)
  const [stockData, setStockData] = useState({
    RELIANCE: { price: 2456.78, change: 23.45, changePercent: 0.96, volume: 1234567 },
    TCS: { price: 3456.90, change: -12.34, changePercent: -0.36, volume: 987654 },
    INFY: { price: 1456.34, change: 45.67, changePercent: 3.24, volume: 2345678 },
    HDFC: { price: 1654.23, change: -8.90, changePercent: -0.54, volume: 876543 },
    WIPRO: { price: 456.78, change: 12.34, changePercent: 2.78, volume: 3456789 }
  })

  const [orderBook, setOrderBook] = useState({
    buy: [
      { price: 2456.75, quantity: 500 },
      { price: 2456.70, quantity: 1200 },
      { price: 2456.65, quantity: 800 },
      { price: 2456.60, quantity: 1500 },
      { price: 2456.55, quantity: 900 }
    ],
    sell: [
      { price: 2456.80, quantity: 600 },
      { price: 2456.85, quantity: 1100 },
      { price: 2456.90, quantity: 700 },
      { price: 2456.95, quantity: 1300 },
      { price: 2457.00, quantity: 1000 }
    ]
  })

  const [recentTrades, setRecentTrades] = useState([
    { time: '15:30:45', price: 2456.78, quantity: 100, type: 'BUY' },
    { time: '15:30:42', price: 2456.75, quantity: 50, type: 'SELL' },
    { time: '15:30:38', price: 2456.80, quantity: 200, type: 'BUY' },
    { time: '15:30:35', price: 2456.72, quantity: 75, type: 'SELL' },
    { time: '15:30:30', price: 2456.85, quantity: 150, type: 'BUY' }
  ])

  useEffect(() => {
    // Update price when stock changes
    setPrice(stockData[selectedStock]?.price || 0)
  }, [selectedStock, stockData])

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setStockData(prev => ({
        ...prev,
        [selectedStock]: {
          ...prev[selectedStock],
          price: prev[selectedStock].price + (Math.random() - 0.5) * 2,
          change: prev[selectedStock].change + (Math.random() - 0.5) * 1
        }
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [selectedStock])

  const handlePlaceOrder = () => {
    // Simulate order placement
    alert(`Order placed: ${orderSide} ${quantity} ${selectedStock} @ ${orderType === 'MARKET' ? 'Market Price' : `₹${price}`}`)
  }

  const calculateTotal = () => {
    return quantity * price
  }

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Trading Terminal</h1>
        <p className="text-gray-400">Place orders and monitor market activity</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Stock Selection & Order Form */}
        <div className="xl:col-span-1 space-y-6">
          {/* Stock Selection */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Select Stock</h3>
            <select
              value={selectedStock}
              onChange={(e) => setSelectedStock(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="RELIANCE">RELIANCE</option>
              <option value="TCS">TCS</option>
              <option value="INFY">INFY</option>
              <option value="HDFC">HDFC</option>
              <option value="WIPRO">WIPRO</option>
            </select>

            {/* Stock Info */}
            <div className="mt-4 p-4 bg-slate-700/30 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">{selectedStock}</span>
                <span className={`text-sm font-semibold ${stockData[selectedStock]?.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stockData[selectedStock]?.change >= 0 ? '+' : ''}{stockData[selectedStock]?.change.toFixed(2)}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                ₹{stockData[selectedStock]?.price.toFixed(2)}
              </div>
              <div className={`text-sm ${stockData[selectedStock]?.changePercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {stockData[selectedStock]?.changePercent >= 0 ? '+' : ''}{stockData[selectedStock]?.changePercent.toFixed(2)}%
              </div>
              <div className="text-gray-400 text-sm mt-2">
                Volume: {stockData[selectedStock]?.volume.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Place Order</h3>
            
            {/* Order Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Order Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setOrderType('MARKET')}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    orderType === 'MARKET'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  MARKET
                </button>
                <button
                  onClick={() => setOrderType('LIMIT')}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    orderType === 'LIMIT'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  LIMIT
                </button>
              </div>
            </div>

            {/* Buy/Sell Toggle */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Order Side</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setOrderSide('BUY')}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    orderSide === 'BUY'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  BUY
                </button>
                <button
                  onClick={() => setOrderSide('SELL')}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    orderSide === 'SELL'
                      ? 'bg-red-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  SELL
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter quantity"
              />
            </div>

            {/* Price (for LIMIT orders) */}
            {orderType === 'LIMIT' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter price"
                />
              </div>
            )}

            {/* Order Summary */}
            <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Total Value:</span>
                <span className="text-white font-semibold">₹{calculateTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Brokerage:</span>
                <span className="text-white font-semibold">₹20</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                orderSide === 'BUY'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
                  : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
              }`}
            >
              {orderSide} {selectedStock}
            </button>
          </div>
        </div>

        {/* Order Book & Recent Trades */}
        <div className="xl:col-span-3 space-y-6">
          {/* Order Book */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Order Book</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sell Orders */}
              <div>
                <h4 className="text-red-400 font-semibold mb-3">Sell Orders</h4>
                <div className="space-y-2">
                  {orderBook.sell.map((order, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                      <span className="text-red-400 font-medium">₹{order.price.toFixed(2)}</span>
                      <span className="text-gray-300">{order.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy Orders */}
              <div>
                <h4 className="text-emerald-400 font-semibold mb-3">Buy Orders</h4>
                <div className="space-y-2">
                  {orderBook.buy.map((order, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                      <span className="text-emerald-400 font-medium">₹{order.price.toFixed(2)}</span>
                      <span className="text-gray-300">{order.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Trades */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Trades</h3>
            <div className="space-y-2">
              {recentTrades.map((trade, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 text-sm">{trade.time}</span>
                    <span className={`font-semibold ${trade.type === 'BUY' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {trade.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">₹{trade.price.toFixed(2)}</div>
                    <div className="text-gray-400 text-sm">{trade.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trading
