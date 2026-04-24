import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-stone-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl tracking-widest text-emerald-400 uppercase font-bold flex items-center gap-2 hover:text-emerald-300 transition-colors">
            <span>X Avis</span> <span className="font-light text-stone-300">Body</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/programs" className="text-stone-300 hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest font-medium">Programs</Link>
            <Link to="/schedule" className="text-stone-300 hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest font-medium">Schedule</Link>
            <Link to="/pricing" className="text-stone-300 hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest font-medium">Pricing</Link>
            <Link to="/contact" className="text-stone-300 hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest font-medium">Contact</Link>
            <Link to="/join" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-300 hover:text-emerald-400 transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-stone-950/95 backdrop-blur-xl border-b border-white/10 absolute w-full animate-fade-in-down">
          <div className="px-6 py-6 space-y-4 flex flex-col">
            <Link to="/programs" onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest font-medium block">Programs</Link>
            <Link to="/schedule" onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest font-medium block">Schedule</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest font-medium block">Contact</Link>
            <Link to="/join" onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-emerald-400 transition-colors text-sm uppercase tracking-widest font-medium block">Pricing</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="bg-emerald-600 w-full block mt-4 hover:bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all text-center">
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}