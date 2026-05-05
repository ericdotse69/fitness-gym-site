import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CheckCircle, AlertCircle } from 'lucide-react'
import Footer from '../components/Footer'

export default function BookingCheckout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    membershipPlan: 'basic'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [selectedClasses, setSelectedClasses] = useState([])

  // Load selected classes from localStorage
  useEffect(() => {
    const booked = JSON.parse(localStorage.getItem('bookedClasses') || '[]')
    const classesData = JSON.parse(localStorage.getItem('classesData') || '[]')
    const selected = classesData.filter(cls => booked.includes(cls.id))
    setSelectedClasses(selected)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.firstName.trim()) return 'First name is required'
    if (!formData.lastName.trim()) return 'Last name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.phone.trim()) return 'Phone number is required'
    if (selectedClasses.length === 0) return 'Please select at least one class'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setSubmitStatus({ type: 'error', message: validationError })
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      // Store booking confirmation
      const bookingConfirmation = {
        id: Date.now(),
        bookingDate: new Date().toISOString(),
        customerInfo: formData,
        classes: selectedClasses,
        membershipPlan: formData.membershipPlan
      }
      
      const confirmations = JSON.parse(localStorage.getItem('bookingConfirmations') || '[]')
      confirmations.push(bookingConfirmation)
      localStorage.setItem('bookingConfirmations', JSON.stringify(confirmations))
      
      // Clear bookings from localStorage
      localStorage.removeItem('bookedClasses')
      
      setSubmitStatus({
        type: 'success',
        message: 'Booking confirmed! Check your email for details.',
        bookingId: bookingConfirmation.id
      })
      
      setIsSubmitting(false)
      
      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }, 1500)
  }

  const calculateTotal = () => {
    const membershipCost = formData.membershipPlan === 'basic' ? 49.99 : formData.membershipPlan === 'pro' ? 79.99 : 119.99
    return membershipCost.toFixed(2)
  }

  return (
    <>
      <div className="min-h-screen bg-stone-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-[2px]">Complete Your Booking</span>
            <h1 className="text-5xl font-light mb-4 mt-3 text-stone-900">
              Booking <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Confirmation</span>
            </h1>
            <div className="h-1 w-20 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm">
                {/* Status Messages */}
                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg flex gap-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-emerald-50 border border-emerald-200'
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className={submitStatus.type === 'success' ? 'text-emerald-900' : 'text-red-900'}>
                        {submitStatus.message}
                      </p>
                      {submitStatus.bookingId && (
                        <p className="text-sm text-emerald-700 mt-1">Booking ID: #{submitStatus.bookingId}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-stone-800 mb-4">Your Information</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent mb-4"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                {/* Membership Plan */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-stone-800 mb-4">Select Membership Plan</h3>
                  <div className="space-y-3">
                    {[
                      { id: 'basic', name: 'Basic', price: 49.99, features: ['Unlimited classes', 'Basic support'] },
                      { id: 'pro', name: 'Pro', price: 79.99, features: ['Unlimited classes', 'Priority support', 'Personal trainer consultations'] },
                      { id: 'elite', name: 'Elite', price: 119.99, features: ['Unlimited classes', '24/7 support', 'Monthly trainer sessions'] }
                    ].map(plan => (
                      <label key={plan.id} className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all" style={{
                        borderColor: formData.membershipPlan === plan.id ? '#10b981' : '#e5e7eb',
                        backgroundColor: formData.membershipPlan === plan.id ? '#ecfdf5' : '#fff'
                      }}>
                        <input
                          type="radio"
                          name="membershipPlan"
                          value={plan.id}
                          checked={formData.membershipPlan === plan.id}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <div className="ml-4 flex-1">
                          <p className="font-semibold text-stone-800">{plan.name} - ${plan.price}/month</p>
                          <p className="text-sm text-stone-600">{plan.features.join(' • ')}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus?.type === 'success'}
                  className="w-full py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : submitStatus?.type === 'success' ? 'Redirecting...' : 'Confirm Booking'}
                </button>

                <p className="text-center text-stone-600 text-sm mt-4">
                  By confirming, you agree to our Terms of Service
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm sticky top-32">
                <h3 className="text-lg font-semibold text-stone-800 mb-4">Order Summary</h3>
                
                {/* Selected Classes */}
                <div className="mb-6 pb-6 border-b border-stone-200">
                  <h4 className="text-sm font-semibold text-stone-700 mb-3">Your Classes ({selectedClasses.length})</h4>
                  <div className="space-y-3">
                    {selectedClasses.length > 0 ? (
                      selectedClasses.map(cls => (
                        <div key={cls.id} className="text-sm">
                          <p className="font-medium text-stone-800">{cls.name}</p>
                          <p className="text-stone-600 text-xs">{cls.time} • {cls.trainer}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-stone-500 text-sm italic">No classes selected</p>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-3 mb-6 pb-6 border-b border-stone-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600">Membership Plan</span>
                    <span className="font-medium text-stone-800">${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600">Class Bookings</span>
                    <span className="font-medium text-stone-800">Included</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-stone-800">Total</span>
                  <span className="text-2xl font-bold text-emerald-600">${calculateTotal()}/mo</span>
                </div>

                <p className="text-xs text-stone-500 text-center">
                  Billed monthly. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
