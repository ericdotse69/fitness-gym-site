import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function IronStrength() {
  return (
    <>
      <div className="pt-32 pb-20 px-8 max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-light mb-4 text-stone-900">Iron & Strength</h1>
          <p className="text-xl text-stone-600 font-light">
            Build absolute power, muscle mass, and structural armor through science-based strength training.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-4">What is Iron & Strength?</h2>
          <p className="text-stone-700 font-light mb-6 leading-relaxed">
            Iron & Strength is our cornerstone program designed for individuals who want to build real, functional strength. Using free weights, barbells, and advanced lifting techniques, we help you develop the kind of strength that translates to everyday life—lifting, carrying, and moving with confidence and power.
          </p>
          <p className="text-stone-700 font-light leading-relaxed">
            This program combines compound movements, progressive overload, and proper form coaching to ensure you build muscle safely and effectively. Whether you're a beginner or advanced lifter, you'll find programs tailored to your level.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">Increased Muscle Mass</h3>
              <p className="text-stone-700 font-light">
                Progressive resistance training stimulates muscle growth and development, building lean mass that boosts metabolism and body composition.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">Bone Density</h3>
              <p className="text-stone-700 font-light">
                Weight-bearing exercises strengthen bones, reducing risk of osteoporosis and improving overall skeletal health.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">Functional Strength</h3>
              <p className="text-stone-700 font-light">
                Build strength that matters in real life—carrying groceries, playing with kids, and maintaining independence as you age.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">Mental Toughness</h3>
              <p className="text-stone-700 font-light">
                Strength training builds confidence and mental resilience. Overcoming challenges in the gym translates to overcoming life challenges.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">Metabolic Boost</h3>
              <p className="text-stone-700 font-light">
                Muscle tissue is metabolically active, burning calories even at rest. Build muscle and watch your metabolism transform.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">Injury Prevention</h3>
              <p className="text-stone-700 font-light">
                Strong muscles, tendons, and ligaments protect joints and reduce injury risk in all activities.
              </p>
            </div>
          </div>
        </div>

        {/* Program Structure */}
        <div className="mb-16 bg-stone-50 rounded-2xl p-12">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">Program Structure</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Beginner (4-6 weeks)</h3>
              <p className="text-stone-700 font-light">
                Learn proper form and technique with fundamental compound movements. Focus on establishing strength foundation and building consistency.
              </p>
              <ul className="list-disc list-inside mt-3 text-stone-600 space-y-2">
                <li>Full-body workouts 3x per week</li>
                <li>Form coaching and technique mastery</li>
                <li>Progressive weight increases</li>
                <li>Core strengthening fundamentals</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Intermediate (8-12 weeks)</h3>
              <p className="text-stone-700 font-light">
                Split routines targeting specific muscle groups. Introduce advanced techniques and periodization for continuous progress.
              </p>
              <ul className="list-disc list-inside mt-3 text-stone-600 space-y-2">
                <li>Upper/Lower body splits</li>
                <li>Advanced compound movements</li>
                <li>Hypertrophy and strength focus</li>
                <li>Accessory work programming</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Advanced (Ongoing)</h3>
              <p className="text-stone-700 font-light">
                Periodized training cycles, peak performance training, and powerlifting-specific protocols for maximum strength development.
              </p>
              <ul className="list-disc list-inside mt-3 text-stone-600 space-y-2">
                <li>Periodized training cycles</li>
                <li>Powerlifting protocols</li>
                <li>Peak performance training</li>
                <li>Professional coaching and nutrition</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">What to Expect</h2>
          <div className="bg-white border border-amber-200 rounded-xl p-8 space-y-4">
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Week 1-2:</span> Form mastery and baseline establishment. You'll learn proper technique and discover your starting strength levels.
            </p>
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Week 3-4:</span> First strength gains. Noticeable improvements as your nervous system adapts to training stimuli.
            </p>
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Week 5-8:</span> Visible muscle development. Clothes fit differently, strength increases noticeably, energy improves.
            </p>
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Month 3+:</span> Significant transformation. Major strength gains, visible muscle development, improved posture, and sustained energy levels.
            </p>
          </div>
        </div>

        {/* Equipment */}
        <div className="mb-16 bg-linear-to-r from-amber-50 to-orange-50 rounded-2xl p-12 border border-amber-200">
          <h2 className="text-3xl font-semibold text-stone-900 mb-6">Our Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Squat Racks', 'Barbells & Plates', 'Dumbbells', 'Benches', 'Deadlift Platforms', 'Cable Machines', 'Leg Press', 'Olympic Rings'].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center font-medium text-stone-800">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Build Your Strength?</h2>
          <p className="text-amber-100 mb-8 font-light">
            Join our Iron & Strength program and transform your body and mind.
          </p>
          <Link to="/fitness-gym-site/join" className="inline-block bg-white text-amber-700 font-semibold px-8 py-4 rounded-full hover:bg-amber-50 transition-all">
            Start Your Transformation
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
