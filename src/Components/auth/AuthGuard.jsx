import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const AuthGuard = ({ children }) => {
  const location = useLocation()
  
  // Check if user is authenticated (you can replace this with your actual auth logic)
  const isAuthenticated = localStorage.getItem('authToken') || false

  if (!isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default AuthGuard 