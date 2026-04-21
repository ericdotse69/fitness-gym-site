import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Pricing from './components/Pricing'
import Schedule from './components/Schedule'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-emerald-400 selection:text-emerald-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Pricing />
        <Schedule />
      </main>
      <Footer />
    </div>
  )
}

export default App