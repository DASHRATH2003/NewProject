import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// Providers and Context
import { AuthProvider } from './Components/hooks/useAuth.jsx'
import { AppProvider } from './Components/context/AppContext'

// Common Components
import Header from './Components/common/Header'
import Footer from './Components/common/Footer'
import Sidebar from './Components/common/Sidebar'
import Notification from './Components/utils/Notification'

// Page Components
import Home from './Components/pages/Home'
import Dashboard from './Components/pages/Dashboard'
import Trading from './Components/pages/Trading'
import Portfolio from './Components/pages/Portfolio'
import Research from './Components/pages/Research'
// import Login from './Components/pages/Login'
// import Register from './Components/pages/Register'
import Support from './Components/pages/Support'
import HNIServices from './Components/pages/HNIServices'
import WhyInvest from './Components/pages/WhyInvest'
import About from './Components/pages/About'
import RefundPrivacy from './Components/pages/RefundPrivacy'
import Terms from './Components/pages/Terms'
import BasicServices from './Components/pages/BasicServices'
import PremiumServices from './Components/pages/PremiumServices'
import Payment from './Components/pages/Payment'
import OfferBanner from './Components/common/OfferBanner'

// Auth Guard
import AuthGuard from './Components/auth/AuthGuard'

// Custom Hooks
import { useApp } from './Components/hooks/useAppContext'

const AppContent = () => {
  const { state, actions } = useApp()
  const location = useLocation()
  const mainRef = useRef(null)
  
  // Pages that should show sidebar
  const sidebarPages = ['/dashboard', '/trading', '/portfolio', '/research']
  const showSidebar = sidebarPages.includes(location.pathname)

  useEffect(() => {
    if (showSidebar && mainRef.current) {
      mainRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [location.pathname, showSidebar])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex">
      {/* Sidebar - only show on specific pages */}
      {showSidebar && (
        <Sidebar isOpen={state.sidebarOpen} onClose={() => actions.toggleSidebar()} />
      )}
      
      {/* Main Content */}
      <div className={showSidebar ? "flex-1" : "w-full flex flex-col min-h-screen"}>
        {!showSidebar && (
          <Header 
            onMenuClick={showSidebar ? () => actions.toggleSidebar() : null}
            showMenuButton={showSidebar}
          />
        )}
        {!showSidebar && (
          <OfferBanner />
        )}
        <main ref={mainRef} className={showSidebar ? "p-4 lg:p-6 h-screen overflow-y-auto" : "flex-1"}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/support" element={<Support />} />
            <Route path="/hni-services" element={<HNIServices />} />
            <Route path="/why-invest" element={<WhyInvest />} />
            <Route path="/about" element={<About />} />
            <Route path="/refund-privacy" element={<RefundPrivacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Support />} />
            <Route path="/services/basic" element={<BasicServices />} />
            <Route path="/services/premium" element={<PremiumServices />} />
            <Route path="/payment" element={<Payment />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trading" element={
              <AuthGuard>
                <Trading />
              </AuthGuard>
            } />
            <Route path="/portfolio" element={
              <AuthGuard>
                <Portfolio />
              </AuthGuard>
            } />
            <Route path="/research" element={
              <AuthGuard>
                <Research />
              </AuthGuard>
            } />
          </Routes>
        </main>
        
        {/* Footer for public pages only */}
        {!showSidebar && <Footer />}
      </div>

      {/* Notifications */}
      {state.notifications.map(notification => (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={() => actions.removeNotification(notification.id)}
        />
      ))}
    </div>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <AppContent />
        </Router>
      </AppProvider>
    </AuthProvider>
  )
}

export default App
