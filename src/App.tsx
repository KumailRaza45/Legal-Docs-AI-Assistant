// App.tsx with React.lazy and Suspense for code splitting
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import Sidebar from './shared/components/Sidebar/sidebar'
import FallbackLoading from './shared/components/Fallback/fallback'
import ErrorBoundary from './shared/handlers/ErrorBoundary/ErrorBoundary'

// Lazy loaded pages
const ManageUsers = lazy(() => import('./pages/ManageUsers/manageusers'))
const Dashboard = lazy(() => import('./pages/Dashboard/dashboard'))
const SignIn = lazy(() => import('./pages/Auth/SignIn/signin'))
const SignUp = lazy(() => import('./pages/Auth/Signup/signup'))

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar />
          <Layout className='site-layout'>
            <Suspense fallback={<FallbackLoading />}>
              <Routes>
                <Route path='/manage-users' element={<ManageUsers />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/' element={<Dashboard />} />
              </Routes>
            </Suspense>
          </Layout>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App
