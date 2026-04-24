import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function ZenMobility() {
  return (
    <>
      <div className="pt-32 pb-20 px-8 max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-light mb-4 text-stone-900">Zen & Mobility</h1>
          <p className="text-xl text-stone-600 font-light">
            Sharpen your mind and heal your body through mindfulness, flexibility, and movement practices.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-4">What is Zen & Mobility?</h2>
          <p className="text-stone-700 font-light mb-6 leading-relaxed">
            Zen & Mobility is our mindfulness and movement program that combines yoga, stretching, breathwork, and meditation. In today's fast-paced world, most people are tight, stressed, and disconnected from their bodies. This program reconnects you with yourself while improving flexibility, reducing pain, and enhancing overall well-being.
          </p>
          <p className="text-stone-700 font-light leading-relaxed">
            Whether you sit at a desk all day or train hard in the gym, this program is essential for recovery, injury prevention, and mental clarity. You don't need to be flexible to start—we'll meet you where you are.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">Stress Reduction</h3>
              <p className="text-stone-700 font-light">
                Breathwork and meditation activate your parasympathetic nervous system, reducing cortisol levels and promoting deep relaxation.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">Improved Flexibility</h3>
              <p className="text-stone-700 font-light">
                Regular stretching increases range of motion, reduces muscle tightness, and improves athletic performance.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">Pain Relief</h3>
              <p className="text-stone-700 font-light">
                Mobility work releases tension, improves circulation, and alleviates chronic pain in the back, neck, and shoulders.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">Mental Clarity</h3>
              <p className="text-stone-700 font-light">
                Meditation and mindfulness practices improve focus, reduce anxiety, and enhance emotional regulation.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">Better Sleep</h3>
              <p className="text-stone-700 font-light">
                Yoga and relaxation techniques improve sleep quality, helping you wake refreshed and energized.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">Injury Prevention</h3>
              <p className="text-stone-700 font-light">
                Improved mobility and recovery practices prevent overuse injuries and support long-term athletic longevity.
              </p>
            </div>
          </div>
        </div>

        {/* Program Structure */}
        <div className="mb-16 bg-stone-50 rounded-2xl p-12">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">Program Structure</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Yoga Fundamentals (Beginner)</h3>
              <p className="text-stone-700 font-light">
                Introduction to basic yoga poses, proper alignment, and breath awareness. Perfect for those new to yoga practice.
              </p>
              <ul className="list-disc list-inside mt-3 text-stone-600 space-y-2">
                <li>Hatha and Vinyasa basics</li>
                <li>Breathing techniques (Pranayama)</li>
                <li>Proper form and alignment</li>
                <li>Beginner pose progressions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Mobility & Recovery (All Levels)</h3>
              <p className="text-stone-700 font-light">
                Deep stretching, foam rolling, and targeted mobility work to release tension and improve movement quality.
              </p>
              <ul className="list-disc list-inside mt-3 text-stone-600 space-y-2">
                <li>Dynamic and static stretching</li>
                <li>Myofascial release techniques</li>
                <li>Joint mobility sequencing</li>
                <li>Recovery optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Meditation & Mindfulness (All Levels)</h3>
              <p className="text-stone-700 font-light">
                Guided meditation, breathwork workshops, and mindfulness practices for mental clarity and emotional well-being.
              </p>
              <ul className="list-disc list-inside mt-3 text-stone-600 space-y-2">
                <li>Guided meditation sessions</li>
                <li>Breathwork workshops</li>
                <li>Mindfulness training</li>
                <li>Stress management techniques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-16 bg-white border border-emerald-200 rounded-2xl p-12">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">Weekly Classes</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-semibold text-stone-800">Tuesday</span>
              <span className="text-emerald-700">7:00 AM - Sunrise Mobility & Breath</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-semibold text-stone-800">Friday</span>
              <span className="text-emerald-700">6:00 PM - Dusk Flow Yoga</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <span className="font-semibold text-stone-800">Sunday (Bonus)</span>
              <span className="text-emerald-700">8:00 AM - Guided Meditation & Mindfulness</span>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">What to Expect</h2>
          <div className="bg-white border border-emerald-200 rounded-xl p-8 space-y-4">
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Week 1:</span> Initial tightness is normal. You'll become aware of areas that need mobility work. Focus on enjoying the process.
            </p>
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Week 2-3:</span> Noticeable relief from daily tension. Better sleep and reduced stress. Slight flexibility improvements.
            </p>
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Week 4+:</span> Significant flexibility gains. Improved posture and reduced chronic pain. Mental clarity and emotional balance. Better energy throughout the day.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-16 bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl p-12 border border-emerald-200">
          <h2 className="text-3xl font-semibold text-stone-900 mb-6">Our Philosophy</h2>
          <p className="text-stone-700 font-light mb-4 leading-relaxed">
            We believe that true fitness isn't just about being strong—it's about being whole. Your body needs strength, but it also needs flexibility, balance, and peace. A tight, stressed, sleep-deprived body can't perform at its best, no matter how strong it is.
          </p>
          <p className="text-stone-700 font-light leading-relaxed">
            Zen & Mobility is the counterbalance to intense training. It's where recovery happens. It's where you reconnect with yourself. It's where the real transformation begins.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Find Your Inner Balance</h2>
          <p className="text-emerald-100 mb-8 font-light">
            Join our Zen & Mobility program and experience true wellness.
          </p>
          <Link to="/fitness-gym-site/join" className="inline-block bg-white text-emerald-700 font-semibold px-8 py-4 rounded-full hover:bg-emerald-50 transition-all">
            Start Your Journey
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
