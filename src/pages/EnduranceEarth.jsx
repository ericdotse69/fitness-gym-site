import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function EnduranceEarth() {
  return (
    <>
      <div className="pt-32 pb-20 px-8 max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-light mb-4 text-stone-900">Endurance & Earth</h1>
          <p className="text-xl text-stone-600 font-light">
            Build relentless cardiovascular endurance through outdoor training, calisthenics, and functional movement.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-linear-to-r from-slate-50 to-stone-50 border border-stone-300 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-4">What is Endurance & Earth?</h2>
          <p className="text-stone-700 font-light mb-6 leading-relaxed">
            Endurance & Earth takes fitness beyond the gym walls. This program combines trail running, outdoor calisthenics, functional movement, and nature-based training. We believe the best training happens in the fresh air, surrounded by nature, where your body and mind are challenged in real-world conditions.
          </p>
          <p className="text-stone-700 font-light leading-relaxed">
            From building a lean, powerful physique to developing the cardiovascular endurance to run mountains, hike for hours, or perform advanced calisthenics—this program builds a body that works in any environment.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-700 mb-3">Cardiovascular Health</h3>
              <p className="text-stone-700 font-light">
                Sustained aerobic training strengthens your heart, improves blood circulation, and reduces risk of heart disease.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-700 mb-3">Lean Muscle Development</h3>
              <p className="text-stone-700 font-light">
                Calisthenics and functional training build lean, efficient muscle without excessive bulk. Perfect for athletic performance.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-700 mb-3">Mental Toughness</h3>
              <p className="text-stone-700 font-light">
                Outdoor training builds resilience, confidence, and mental strength. Learn to push through discomfort.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-700 mb-3">Connection to Nature</h3>
              <p className="text-stone-700 font-light">
                Training outdoors reduces stress, improves mood, and provides mental health benefits beyond indoor training.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-700 mb-3">Functional Strength</h3>
              <p className="text-stone-700 font-light">
                Calisthenics develop body weight mastery—pull-ups, muscle-ups, handstands. Practical strength for any situation.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-700 mb-3">Fat Burning & Agility</h3>
              <p className="text-stone-700 font-light">
                High-intensity endurance training burns calories efficiently and improves agility, coordination, and movement quality.
              </p>
            </div>
          </div>
        </div>

        {/* Program Structure */}
        <div className="mb-16 bg-stone-50 rounded-2xl p-12">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">Program Structure</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Foundation (Weeks 1-4)</h3>
              <p className="text-stone-700 font-light">
                Build aerobic base with trail running, hiking, and basic calisthenics. Learn proper outdoor training techniques and form.
              </p>
              <ul className="list-disc list-inside mt-3 text-stone-600 space-y-2">
                <li>3-5km trail runs and hikes</li>
                <li>Basic calisthenics (push-ups, pull-ups, squats)</li>
                <li>Cardio base building</li>
                <li>Outdoor movement fundamentals</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Development (Weeks 5-12)</h3>
              <p className="text-stone-700 font-light">
                Increase distances, introduce hill training, and progress calisthenics. Build significant endurance and strength.
              </p>
              <ul className="list-disc list-inside mt-3 text-stone-600 space-y-2">
                <li>5-10km hill runs and mountain hikes</li>
                <li>Advanced calisthenics progressions</li>
                <li>Circuit training combinations</li>
                <li>Interval and tempo training</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Performance (Week 13+)</h3>
              <p className="text-stone-700 font-light">
                Peak conditioning with long-distance trails, advanced calisthenics, and sport-specific endurance training.
              </p>
              <ul className="list-disc list-inside mt-3 text-stone-600 space-y-2">
                <li>10-20km trail runs and adventure hikes</li>
                <li>Advanced skills (muscle-ups, handstands)</li>
                <li>Ultra-endurance training</li>
                <li>Sport-specific conditioning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Training Modalities */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">Training Modalities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Trail Running</h3>
              <p className="text-stone-700 font-light">
                Build endurance on natural terrain with varying elevation. Improves agility and mental toughness.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Calisthenics</h3>
              <p className="text-stone-700 font-light">
                Master bodyweight exercises: pull-ups, dips, handstands, muscle-ups. Build functional strength.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Hiking & Nature Training</h3>
              <p className="text-stone-700 font-light">
                Guided hikes through scenic locations. Build endurance while connecting with nature and community.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Circuit Training</h3>
              <p className="text-stone-700 font-light">
                Combine cardio and calisthenics in outdoor circuits. High-intensity, full-body conditioning.
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Highlight */}
        <div className="mb-16 bg-linear-to-r from-slate-50 to-stone-50 rounded-2xl p-12 border border-stone-300">
          <h2 className="text-3xl font-semibold text-stone-900 mb-6">The Hybrid Peak</h2>
          <p className="text-stone-700 font-light mb-6 leading-relaxed">
            Our signature Saturday session combines the best of all programs. Members hike challenging trails, perform calisthenics at scenic locations, and finish with group exercises. It's strength, endurance, and community all combined.
          </p>
          <div className="bg-white rounded-lg p-6 text-center">
            <p className="text-stone-800 font-semibold">Every Saturday 8:00 AM</p>
            <p className="text-stone-600 font-light mt-2">Challenge yourself. Connect with nature. Build your tribe.</p>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-stone-900 mb-8">What to Expect</h2>
          <div className="bg-white border border-slate-300 rounded-xl p-8 space-y-4">
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Week 1-2:</span> Initial soreness is normal. Your body is adapting to outdoor training. Focus on consistency over intensity.
            </p>
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Week 3-4:</span> Energy improvements. Running feels easier. Sleep quality improves. First calisthenics breakthroughs (first pull-up, etc.).
            </p>
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Week 5-8:</span> Visible changes. Leaner physique. Significantly improved endurance. Advanced calisthenics skills developing. Mental resilience noticeably stronger.
            </p>
            <p className="text-stone-700 font-light">
              <span className="font-semibold text-stone-900">Month 3+:</span> Complete transformation. Run distances that seemed impossible. Master advanced calisthenics. Unshakeable confidence. Athletic performance peak.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-r from-slate-600 to-stone-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Outside. Get Strong. Get Free</h2>
          <p className="text-slate-100 mb-8 font-light">
            Join our Endurance & Earth program and experience fitness the way nature intended.
          </p>
          <Link to="/fitness-gym-site/join" className="inline-block bg-white text-slate-700 font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all">
            Join the Adventure
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
