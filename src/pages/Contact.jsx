import Footer from '../components/Footer'
import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { trackingEvents } from '../utils/analytics'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'membership', label: 'Membership Question' },
    { value: 'classes', label: 'Class Information' },
    { value: 'billing', label: 'Billing Issue' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' }
  ]

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must not exceed 1000 characters'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real application, this would send to a backend
      window.location.href = `mailto:taysecgardens@gmail.com?subject=${encodeURIComponent(`[${formData.category.toUpperCase()}] ${formData.subject}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`)}`
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent. We\'ll get back to you soon.'
      })
      setFormData({ name: '', email: '', category: 'general', subject: '', message: '' })
      setErrors({})

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-stone-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light mb-4 text-stone-900">Get In Touch</h1>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Have questions about X Avis Body? We'd love to hear from you. Contact us using the form below or reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-stone-200 p-10 shadow-sm">
              <h2 className="text-2xl font-semibold mb-8 text-stone-800">Send us a Message</h2>

              {/* Status Messages */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-emerald-50 border border-emerald-200'
                    : 'bg-red-50 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  ) : (
                    <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  )}
                  <span className={submitStatus.type === 'success' ? 'text-emerald-700' : 'text-red-700'}>
                    {submitStatus.message}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                      errors.name
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                        : 'border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                      errors.email
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                        : 'border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Category Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white"
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                      errors.subject
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                        : 'border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                    }`}
                    placeholder="What is this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-stone-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs text-stone-500">
                      {formData.message.length}/1000
                    </span>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                        : 'border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-stone-400 text-white cursor-not-allowed'
                      : 'bg-linear-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg active:scale-95'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Disclaimer */}
                <p className="text-xs text-stone-500 text-center">
                  We typically respond within 24 business hours.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-stone-800">Contact Information</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Phone</h4>
                    <a href="tel:+233208921563" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      +233 208 921 563
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Email</h4>
                    <a href="mailto:pixelxcrip@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      pixelxcrip@gmail.com
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Address</h4>
                    <p className="text-stone-700">
                      Taysec Gardens<br/>
                      Opposite MTN Headquarters<br/>
                      Accra, Ghana
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Hours</h4>
                    <p className="text-stone-700">
                      Monday - Friday: 5:00 AM - 10:00 PM<br/>
                      Saturday: 6:00 AM - 6:00 PM<br/>
                      Sunday: 8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8">
                <h4 className="font-semibold text-stone-800 mb-3">Follow Us</h4>
                <p className="text-stone-700 text-sm mb-4">
                  Connect with us on social media for updates, fitness tips, and community highlights.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="inline-block w-10 h-10 rounded-full bg-white hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-emerald-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="inline-block w-10 h-10 rounded-full bg-white hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-emerald-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="inline-block w-10 h-10 rounded-full bg-white hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-emerald-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 11-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.66 10.66 0 01-1 5.63"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
