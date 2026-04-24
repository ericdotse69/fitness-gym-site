import { Link } from 'react-router-dom'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Join() {
  return (
    <>
      <div className="pt-20 min-h-screen bg-stone-50">
        <div className="max-w-7xl mx-auto px-8 py-16 text-center">
          <h1 className="text-5xl font-light mb-4 text-stone-900">Join X Avis Body Today</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg mb-8">
            Start your transformation journey with the perfect balance of strength training and mindfulness practices. Choose a membership plan below and get started with your 7-day free trial.
          </p>
          <div className="bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 inline-block">
            <p className="text-emerald-900 font-medium">
              No credit card required for the trial. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
      <Pricing />
      <Footer />
    </>
  )
}
