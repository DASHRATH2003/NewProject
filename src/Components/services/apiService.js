// API Service for handling HTTP requests

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL
  }

  // Get auth token from localStorage
  getAuthToken() {
    return localStorage.getItem('authToken')
  }

  // Set auth token in localStorage
  setAuthToken(token) {
    localStorage.setItem('authToken', token)
  }

  // Remove auth token from localStorage
  removeAuthToken() {
    localStorage.removeItem('authToken')
  }

  // Get headers for requests
  getHeaders() {
    const headers = {
      'Content-Type': 'application/json'
    }

    const token = this.getAuthToken()
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    return headers
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      headers: this.getHeaders(),
      ...options
    }

    try {
      const response = await fetch(url, config)
      
      // Handle 401 Unauthorized
      if (response.status === 401) {
        this.removeAuthToken()
        window.location.href = '/login'
        throw new Error('Unauthorized')
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      return data
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  // GET request
  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' })
  }

  // POST request
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  // PUT request
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  }

  // Authentication methods
  async login(credentials) {
    const response = await this.post('/auth/login', credentials)
    if (response.token) {
      this.setAuthToken(response.token)
    }
    return response
  }

  async register(userData) {
    const response = await this.post('/auth/register', userData)
    if (response.token) {
      this.setAuthToken(response.token)
    }
    return response
  }

  async logout() {
    try {
      await this.post('/auth/logout')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      this.removeAuthToken()
    }
  }

  async getCurrentUser() {
    return this.get('/auth/me')
  }

  // Trading methods
  async getMarketData() {
    return this.get('/trading/market-data')
  }

  async getFIIDIIHistory(days = 30) {
    return this.get(`/trading/fii-dii-history?days=${days}`)
  }

  async getDataStatus() {
    return this.get('/trading/data-status')
  }

  async forceUpdateMarketData() {
    return this.post('/trading/update-market-data')
  }

  async placeOrder(orderData) {
    return this.post('/trading/place-order', orderData)
  }

  // Portfolio methods
  async getPortfolioSummary() {
    return this.get('/portfolio/summary')
  }

  async getHoldings() {
    return this.get('/portfolio/holdings')
  }

  // Research methods
  async getMarketAnalysis() {
    return this.get('/research/market-analysis')
  }

  async getRecommendations() {
    return this.get('/research/recommendations')
  }
}

// Create and export a singleton instance
const apiService = new ApiService()
export default apiService