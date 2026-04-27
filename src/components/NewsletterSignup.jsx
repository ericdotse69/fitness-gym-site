import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null, loading, success, error
  const [message, setMessage] = useState('')

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // In a real app, you would send this to your backend
      console.log('Newsletter signup:', email)

      setStatus('success')
      setMessage('Thanks for subscribing! Check your email for fitness tips and updates.')
      setEmail('')

      // Clear message after 5 seconds
      setTimeout(() => {
        setStatus(null)
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again.')
    }
  }

  return (
    <div className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 shadow-lg">
      <div className="max-w-2xl">
        {/* Header */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Get Fitness Tips & Updates
        </h3>
        <p className="text-emerald-50 mb-6 font-light">
          Subscribe to our newsletter for exclusive workouts, nutrition tips, member success stories, and special offers.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status) setStatus(null)
              }}
              placeholder="Your email address"
              disabled={status === 'loading'}
              className="flex-1 px-5 py-3 rounded-lg bg-white/90 text-stone-900 placeholder-stone-500 outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                status === 'loading'
                  ? 'bg-white/50 text-stone-600 cursor-not-allowed'
                  : 'bg-white text-emerald-600 hover:shadow-lg active:scale-95'
              }`}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {/* Status Message */}
          {status === 'success' && (
            <div className="flex items-center gap-3 text-white bg-white/20 p-4 rounded-lg">
              <CheckCircle size={20} className="flex-shrink-0" />
              <span className="text-sm font-medium">{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 text-white bg-red-500/30 p-4 rounded-lg border border-white/20">
              <AlertCircle size={20} className="flex-shrink-0" />
              <span className="text-sm font-medium">{message}</span>
            </div>
          )}

          {/* Privacy Notice */}
          <p className="text-xs text-emerald-50 font-light">
            We respect your privacy. Unsubscribe at any time. See our{' '}
            <a href="/fitness-gym-site/cookies" className="underline hover:text-white transition-colors">
              privacy policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
