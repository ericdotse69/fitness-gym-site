import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Pricing from './components/Pricing'
import Schedule from './components/Schedule'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <Programs />
      <Pricing />
      <Schedule />
      <Footer />
    </div>
  )
}

export default App