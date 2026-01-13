import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import DoctorsPage from './pages/DoctorsPage'
import EcommercePage from './pages/EcommercePage'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
