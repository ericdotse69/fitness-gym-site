import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProgramsPage from './pages/ProgramsPage'
import ClassBooking from './pages/ClassBooking'
import BookingCheckout from './pages/BookingCheckout'
import PricingPage from './pages/PricingPage'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Trainers from './pages/Trainers'
import NotFound from './pages/NotFound'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

function App() {
  return (
    <Router basename="/fitness-gym-site/">
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50 font-sans selection:bg-emerald-400 selection:text-emerald-950 overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/classes" element={<ClassBooking />} />
            <Route path="/booking-checkout" element={<BookingCheckout />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App