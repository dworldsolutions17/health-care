import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import DoctorsPage from './pages/DoctorsPage'
import HealthPlansPage from './pages/HealthPlansPage'
import PreventiveCarePage from './pages/PreventiveCarePage'
import TelemedicinePage from './pages/TelemedicinePage'
import AIAssessmentPage from './pages/AIAssessmentPage'
import JoinNetworkPage from './pages/JoinNetworkPage'
import EcommercePage from './pages/EcommercePage'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<DoctorsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/health-plans" element={<HealthPlansPage />} />
          <Route path="/preventive-care" element={<PreventiveCarePage />} />
          <Route path="/telemedicine" element={<TelemedicinePage />} />
          <Route path="/ai-assessment" element={<AIAssessmentPage />} />
          <Route path="/join-network" element={<JoinNetworkPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
