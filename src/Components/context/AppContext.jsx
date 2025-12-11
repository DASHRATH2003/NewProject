import React, { useReducer } from 'react'
import { appReducer, initialState, ActionTypes } from './appReducer'
import { AppContext } from './context'

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Actions
  const actions = {
    toggleSidebar: () => dispatch({ type: ActionTypes.TOGGLE_SIDEBAR }),
    
    setTheme: (theme) => dispatch({ 
      type: ActionTypes.SET_THEME, 
      payload: theme 
    }),
    
    addNotification: (notification) => dispatch({
      type: ActionTypes.ADD_NOTIFICATION,
      payload: {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...notification
      }
    }),
    
    removeNotification: (id) => dispatch({
      type: ActionTypes.REMOVE_NOTIFICATION,
      payload: id
    }),
    
    updateMarketData: (data) => dispatch({
      type: ActionTypes.UPDATE_MARKET_DATA,
      payload: data
    }),
    
    setSelectedStock: (stock) => dispatch({
      type: ActionTypes.SET_SELECTED_STOCK,
      payload: stock
    }),
    
    addToWatchlist: (stock) => dispatch({
      type: ActionTypes.ADD_TO_WATCHLIST,
      payload: stock
    }),
    
    removeFromWatchlist: (symbol) => dispatch({
      type: ActionTypes.REMOVE_FROM_WATCHLIST,
      payload: symbol
    }),
    
    addRecentTrade: (trade) => dispatch({
      type: ActionTypes.ADD_RECENT_TRADE,
      payload: {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...trade
      }
    })
  }

  const value = {
    state,
    actions
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}


