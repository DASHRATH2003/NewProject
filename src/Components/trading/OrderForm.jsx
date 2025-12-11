import React, { useState } from 'react'

const OrderForm = ({ selectedStock, onPlaceOrder }) => {
  const [orderData, setOrderData] = useState({
    type: 'market',
    side: 'buy',
    quantity: '',
    price: '',
    stopLoss: '',
    target: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setOrderData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onPlaceOrder) {
      onPlaceOrder({
        ...orderData,
        symbol: selectedStock?.symbol,
        timestamp: new Date().toISOString()
      })
    }
    // Reset form
    setOrderData({
      type: 'market',
      side: 'buy',
      quantity: '',
      price: '',
      stopLoss: '',
      target: ''
    })
  }

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Place Order</h3>
      
      {selectedStock && (
        <div className="mb-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold">{selectedStock.symbol}</h4>
              <p className="text-gray-400 text-sm">{selectedStock.name}</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-white">₹{selectedStock.price}</div>
              <div className={`text-sm ${selectedStock.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {selectedStock.change >= 0 ? '+' : ''}{selectedStock.change} ({selectedStock.changePercent}%)
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Order Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Order Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setOrderData(prev => ({ ...prev, type: 'market' }))}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                orderData.type === 'market'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Market
            </button>
            <button
              type="button"
              onClick={() => setOrderData(prev => ({ ...prev, type: 'limit' }))}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                orderData.type === 'limit'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Limit
            </button>
          </div>
        </div>

        {/* Buy/Sell */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Side</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setOrderData(prev => ({ ...prev, side: 'buy' }))}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                orderData.side === 'buy'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => setOrderData(prev => ({ ...prev, side: 'sell' }))}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                orderData.side === 'sell'
                  ? 'bg-red-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Sell
            </button>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={orderData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Price (for limit orders) */}
        {orderData.type === 'limit' && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={orderData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter price"
              step="0.01"
              required
            />
          </div>
        )}

        {/* Stop Loss */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Stop Loss</label>
          <input
            type="number"
            name="stopLoss"
            value={orderData.stopLoss}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Stop loss price"
            step="0.01"
          />
        </div>

        {/* Target */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Target</label>
          <input
            type="number"
            name="target"
            value={orderData.target}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Target price"
            step="0.01"
          />
        </div>

        {/* Order Summary */}
        {orderData.quantity && (
          <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
            <h4 className="text-white font-semibold mb-2">Order Summary</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className="text-white capitalize">{orderData.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Side:</span>
                <span className={`capitalize ${orderData.side === 'buy' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {orderData.side}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Quantity:</span>
                <span className="text-white">{orderData.quantity}</span>
              </div>
              {orderData.price && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Price:</span>
                  <span className="text-white">₹{orderData.price}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-400">Total:</span>
                <span className="text-white">
                  ₹{((orderData.price || selectedStock?.price || 0) * orderData.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!orderData.quantity || !selectedStock}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
            orderData.side === 'buy'
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {orderData.side === 'buy' ? 'Buy' : 'Sell'} {selectedStock?.symbol || 'Stock'}
        </button>
      </form>
    </div>
  )
}

export default OrderForm
