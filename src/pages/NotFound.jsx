import { Link } from 'react-router-dom'
import { Home, Search, ArrowRight } from 'lucide-react'

export default function NotFound() {
  const suggestions = [
    { path: '/', label: 'Home' },
    { path: '/programs', label: 'Programs' },
    { path: '/classes', label: 'Classes' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-8 pt-20">
      <div className="text-center">
        {/* 404 Display */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600 mb-4">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-3">
            Page Not <span className="font-bold">Found</span>
          </h1>
          <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
            We couldn't find the page you're looking for. Maybe it's out training! Let's get you back on track.
          </p>
        </div>

        {/* Search-like area */}
        <div className="mb-12 flex justify-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all active:scale-95"
          >
            <Home size={24} />
            Back to Home
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

        {/* Suggestions */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">Where would you like to go?</h2>
          <p className="text-stone-600 text-sm mb-8 font-light">Here are some popular pages:</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suggestions.map((suggestion) => (
              <Link
                key={suggestion.path}
                to={suggestion.path}
                className="group p-4 rounded-lg border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-center"
              >
                <span className="text-sm font-medium text-stone-700 group-hover:text-emerald-600 transition-colors">
                  {suggestion.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 mb-4">Still can't find what you're looking for?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            <Search size={18} />
            Contact our support team
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Footer message */}
        <div className="mt-16 text-stone-500 text-sm font-light">
          <p>Error code: 404 | Page not found</p>
          <p>Need help? Visit our <Link to="/faq" className="text-emerald-600 hover:underline">FAQ</Link> or <Link to="/contact" className="text-emerald-600 hover:underline">contact us</Link>.</p>
        </div>
      </div>
    </div>
  )
}
