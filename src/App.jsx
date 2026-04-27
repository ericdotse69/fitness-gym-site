import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProgramsPage from './pages/ProgramsPage'
import SchedulePage from './pages/SchedulePage'
import PricingPage from './pages/PricingPage'
import ClassBooking from './pages/ClassBooking'
import Blog from './pages/Blog'
import Join from './pages/Join'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Trainers from './pages/Trainers'
import NotFound from './pages/NotFound'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import IronStrength from './pages/IronStrength'
import ZenMobility from './pages/ZenMobility'
import EnduranceEarth from './pages/EnduranceEarth'

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
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/classes" element={<ClassBooking />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/program/iron-strength" element={<IronStrength />} />
            <Route path="/program/zen-mobility" element={<ZenMobility />} />
            <Route path="/program/endurance-earth" element={<EnduranceEarth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App