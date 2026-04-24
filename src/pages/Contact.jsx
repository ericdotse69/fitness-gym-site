import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send to a backend
    window.location.href = `mailto:taysecgardens@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    setFormData({ name: '', email: '', subject: '', message: '' })
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
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
                    <a href="mailto:taysecgardens@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      taysecgardens@gmail.com
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
