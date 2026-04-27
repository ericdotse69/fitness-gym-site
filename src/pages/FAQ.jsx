import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(null)

  const faqs = [
    {
      id: 1,
      category: "Membership",
      question: "What's included in my membership?",
      answer: "Your membership includes 24/7 gym access, access to all fitness classes, use of our facilities, locker room access, and membership to our community. Specific benefits depend on your chosen plan (Iron Pass, Zen Pass, or Hybrid Method)."
    },
    {
      id: 2,
      category: "Membership",
      question: "Can I cancel my membership anytime?",
      answer: "Yes, you can cancel your membership at any time. We require a 30-day notice in writing or via email. There are no hidden cancellation fees. Contact our team at taysecgardens@gmail.com for assistance."
    },
    {
      id: 3,
      category: "Membership",
      question: "Is there a contract or long-term commitment?",
      answer: "No long-term contracts required! We offer month-to-month memberships so you can pause or cancel whenever you need to. Try us out risk-free for your first month."
    },
    {
      id: 4,
      category: "Classes",
      question: "How do I book a class?",
      answer: "Members can book classes through our online booking system (coming soon). Classes are available for all fitness levels. We recommend booking 24 hours in advance to secure your spot, though walk-ins are welcome based on availability."
    },
    {
      id: 5,
      category: "Classes",
      question: "Are classes suitable for beginners?",
      answer: "Absolutely! We offer classes for all fitness levels—beginner, intermediate, and advanced. Our instructors provide modifications for different abilities. We recommend attending a free intro class to find the right fit for you."
    },
    {
      id: 6,
      category: "Classes",
      question: "How often should I attend classes?",
      answer: "Start with 2-3 classes per week and gradually increase based on your goals and recovery. Most members see results with consistent attendance. Our trainers can help create a personalized plan for you."
    },
    {
      id: 7,
      category: "Facilities",
      question: "What equipment is available?",
      answer: "We have a full range of free weights, dumbbells, barbells, resistance machines, cardio equipment, functional training rigs, and dedicated spaces for strength, mobility, and endurance training. Check out our Programs page for detailed information."
    },
    {
      id: 8,
      category: "Facilities",
      question: "Are there lockers available?",
      answer: "Yes! All members have access to secure lockers. We recommend bringing your own lock or renting a locker for the month. Lockers are monitored, but please don't leave valuables unattended."
    },
    {
      id: 9,
      category: "Getting Started",
      question: "How do I get started?",
      answer: "Simply visit our website, choose your preferred plan, and sign up online or contact us at taysecgardens@gmail.com to schedule a tour. First-time members get a free intro session with one of our trainers."
    },
    {
      id: 10,
      category: "Getting Started",
      question: "Do you offer personal training?",
      answer: "Yes! We offer personalized training sessions with our certified trainers. Personal training is available as an add-on to any membership package. Contact us for pricing and availability."
    },
    {
      id: 11,
      category: "Billing",
      question: "What payment methods do you accept?",
      answer: "We accept mobile money (MTN, Vodafone, AirtelTigo), bank transfers, and credit/debit cards. Membership is billed monthly on your subscription date."
    },
    {
      id: 12,
      category: "Billing",
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 7-day satisfaction guarantee for new members. If you're not happy with your first week, contact us for a full refund, no questions asked."
    }
  ]

  const categories = ["All", "Membership", "Classes", "Facilities", "Getting Started", "Billing"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFaqs = selectedCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-[2px]">Questions?</span>
          <h1 className="text-5xl font-light mb-4 mt-3 text-stone-900">
            Frequently Asked <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Questions</span>
          </h1>
          <div className="h-1 w-20 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mt-6"></div>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto font-light">
            Can't find the answer you're looking for? Reach out to our team at{' '}
            <a href="mailto:taysecgardens@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
              taysecgardens@gmail.com
            </a> or{' '}
            <a href="tel:+233208921563" className="text-emerald-600 hover:text-emerald-700 font-medium">
              +233 208 921 563
            </a>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white border border-stone-200 text-stone-700 hover:border-emerald-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-50 transition-colors"
              >
                <div className="text-left">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-semibold text-stone-800 mt-1">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  size={24}
                  className={`ml-4 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {expandedId === faq.id && (
                <div className="border-t border-stone-200 px-6 py-5 bg-stone-50 animate-fade-in">
                  <p className="text-stone-700 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-600 text-lg">No FAQs found in this category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8 text-center">
          <h3 className="text-2xl font-semibold text-stone-800 mb-3">Still have questions?</h3>
          <p className="text-stone-600 mb-6 font-light">
            Our team is ready to help! Get in touch with us and we'll answer any questions you have.
          </p>
          <a
            href="/fitness-gym-site/contact"
            className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
