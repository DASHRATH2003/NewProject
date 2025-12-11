// Action types
export const ActionTypes = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  SET_THEME: 'SET_THEME',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  UPDATE_MARKET_DATA: 'UPDATE_MARKET_DATA',
  SET_SELECTED_STOCK: 'SET_SELECTED_STOCK',
  ADD_TO_WATCHLIST: 'ADD_TO_WATCHLIST',
  REMOVE_FROM_WATCHLIST: 'REMOVE_FROM_WATCHLIST',
  ADD_RECENT_TRADE: 'ADD_RECENT_TRADE'
}

// Initial state
export const initialState = {
  theme: 'dark',
  sidebarOpen: false,
  notifications: [],
  marketData: {
    nifty: { value: 19234.56, change: 234.67, changePercent: 1.23 },
    bankNifty: { value: 43256.78, change: -123.45, changePercent: -0.28 },
    sensex: { value: 64234.56, change: 456.78, changePercent: 0.72 }
  },
  selectedStock: null,
  watchlist: [],
  recentTrades: []
}

// Reducer function
export const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen
      }

    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      }

    case ActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      }

    case ActionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        )
      }

    case ActionTypes.UPDATE_MARKET_DATA:
      return {
        ...state,
        marketData: { ...state.marketData, ...action.payload }
      }

    case ActionTypes.SET_SELECTED_STOCK:
      return {
        ...state,
        selectedStock: action.payload
      }

    case ActionTypes.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      }

    case ActionTypes.REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          stock => stock.symbol !== action.payload
        )
      }

    case ActionTypes.ADD_RECENT_TRADE:
      return {
        ...state,
        recentTrades: [action.payload, ...state.recentTrades.slice(0, 9)]
      }

    default:
      return state
  }
} 