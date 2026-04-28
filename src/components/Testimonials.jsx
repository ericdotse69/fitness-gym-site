import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kwame Asare",
      role: "Iron Strength Member",
      rating: 5,
      text: "I came to X Avis Body overweight and unmotivated. After 6 months of consistent training, I've lost 25kg and gained real confidence. The trainers here genuinely care about your progress.",
      highlight: true
    },
    {
      name: "Ama Owusu",
      role: "Hybrid Method Member",
      rating: 5,
      text: "The perfect balance of intense workouts and mindful recovery. I'm stronger, more flexible, and mentally sharper than ever. Best investment I've made in myself.",
      highlight: false
    },
    {
      name: "Kofi Mensah",
      role: "Zen & Mobility Member",
      rating: 5,
      text: "As someone with chronic back pain, the mobility and breathwork classes have been life-changing. I feel lighter, more mobile, and pain-free for the first time in years.",
      highlight: false
    },
    {
      name: "Akosua Boateng",
      role: "Endurance Earth Member",
      rating: 5,
      text: "The outdoor training sessions are incredible. I've transformed my physique while falling in love with nature. The community here is unmatched—it feels like family.",
      highlight: false
    }
  ]

  return (
    <div className="bg-linear-to-b from-stone-50 via-stone-100 to-stone-50 py-32 px-8 text-stone-800 border-t border-stone-200/50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-[2px]">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 mt-3">
            Real <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Transformations</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mt-6"></div>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto font-light">Hear from our members about their journey and the changes they've experienced at X Avis Body.</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 mb-16 md:mb-24">
          <div className="text-center p-6 bg-white rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">500+</div>
            <p className="text-stone-600 text-sm mt-2 font-light">Active Members</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">95%</div>
            <p className="text-stone-600 text-sm mt-2 font-light">Retention Rate</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">4.9★</div>
            <p className="text-stone-600 text-sm mt-2 font-light">Member Rating</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl transition-all duration-500 hover:-translate-y-2 p-8 ${
                testimonial.highlight
                  ? 'bg-linear-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300/50 shadow-lg md:col-span-2 md:max-w-2xl'
                  : 'bg-white border border-stone-200/50 shadow-sm hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-linear-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-500 rounded-t-2xl"></div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-stone-700 leading-relaxed mb-6 font-light italic">
                "{testimonial.text}"
              </p>

              {/* Member Info */}
              <div className="flex items-center gap-4 border-t border-stone-200/50 pt-6">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.name.charAt(0)}
                </div>

                {/* Details */}
                <div>
                  <h4 className="font-semibold text-stone-800 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-stone-500 text-xs md:text-sm font-light">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-stone-600 mb-6 font-light">Ready to join our community and start your transformation?</p>
          <Link
            to="/pricing"
            className="group inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-600/30 transition-all active:scale-95"
          >
            <span>Start Your Journey</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
