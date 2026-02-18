import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import DoctorsPage from './pages/DoctorsPage'
import HealthPlansPage from './pages/HealthPlansPage'
import PreventiveCarePage from './pages/PreventiveCarePage'
import TelemedicinePage from './pages/TelemedicinePage'
import AIAssessmentPage from './pages/AIAssessmentPage'
import JoinNetworkPage from './pages/JoinNetworkPage'
import RamadanWellnessPage from './pages/RamadanWellnessPage'
import HealthcareMarketingPage from './pages/HealthcareMarketingPage'
import EcommercePage from './pages/EcommercePage'
import CheckoutPage from './pages/CheckoutPage'
import CustomerInformationPage from './pages/CustomerInformationPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone Form Page - No Header/Footer */}
        <Route path="/customer-information" element={<CustomerInformationPage />} />
        
        {/* Portfolio Redirect to Home */}
        <Route path="/portfolio" element={<Navigate to="/" replace />} />
        
        {/* Main Website Pages - With Header/Footer */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><DoctorsPage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/health-plans" element={<Layout><HealthPlansPage /></Layout>} />
        <Route path="/preventive-care" element={<Layout><PreventiveCarePage /></Layout>} />
        <Route path="/telemedicine" element={<Layout><TelemedicinePage /></Layout>} />
        <Route path="/ai-assessment" element={<Layout><AIAssessmentPage /></Layout>} />
        <Route path="/join-network" element={<Layout><JoinNetworkPage /></Layout>} />
        <Route path="/ramadan-wellness" element={<Layout><RamadanWellnessPage /></Layout>} />
        <Route path="/healthcare-marketing" element={<Layout><HealthcareMarketingPage /></Layout>} />
        <Route path="/ecommerce" element={<Layout><EcommercePage /></Layout>} />
        <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
        
        {/* 404 Not Found - Catch all other routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
