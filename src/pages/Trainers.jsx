import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { Award, Heart, Zap } from 'lucide-react'

export default function Trainers() {
  const trainers = [
    {
      name: "Kwaku Osei",
      role: "Head Strength Coach",
      specialty: "Iron & Strength",
      email: "kwaku@xavisbody.com",
      certifications: ["ISSA Certified Personal Trainer", "Powerlifting Coach", "Nutrition Specialist"],
      bio: "With 12 years of coaching experience, Kwaku specializes in building muscle mass and developing absolute strength. He's transformed over 300 members and is passionate about proper form and progressive overload.",
      achievements: [
        "National Powerlifting Champion 2019",
        "Trained 50+ members to personal records",
        "Certified in Olympic Lifting"
      ],
      focus: "Maximum Strength & Hypertrophy",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=KwakuOsei"
    },
    {
      name: "Ama Mensah",
      role: "Mobility & Flexibility Coach",
      specialty: "Zen & Mobility",
      email: "ama@xavisbody.com",
      certifications: ["Yoga Instructor (RYT-200)", "Corrective Exercise Specialist", "Breathwork Coach"],
      bio: "Ama brings 8 years of mindfulness and movement expertise. Her classes combine deep stretching with breathwork to unlock flexibility and mental clarity. Members love her calming presence and effective teaching.",
      achievements: [
        "Helped 100+ members recover from injuries",
        "Certified in Vinyasa & Hatha Yoga",
        "Daily Meditation Guide"
      ],
      focus: "Recovery, Flexibility & Mindfulness",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AmaMensah"
    },
    {
      name: "Kofi Ampadu",
      role: "Endurance & Outdoor Specialist",
      specialty: "Endurance & Earth",
      email: "kofi@xavisbody.com",
      certifications: ["NASM Certified Coach", "Trail Running Expert", "Functional Fitness Coach"],
      bio: "Kofi is an ultra-marathoner who brings infectious energy to every outdoor session. With 10 years of endurance training, he believes fitness should be fun, challenging, and connected to nature.",
      achievements: [
        "Completed 5 Ultra-Marathons",
        "Trail Running Champion 2021",
        "Led 200+ outdoor training sessions"
      ],
      focus: "Cardiovascular Endurance & Agility",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=KofiAmpadu"
    },
    {
      name: "Ekua Boateng",
      role: "General Fitness Coach",
      specialty: "All Programs",
      email: "ekua@xavisbody.com",
      certifications: ["ACE Personal Trainer", "Functional Movement Assessment", "Group Fitness Instructor"],
      bio: "Ekua is our renaissance trainer, with balanced expertise across all three programs. She's perfect for members just starting their fitness journey or those looking to integrate multiple training styles.",
      achievements: [
        "5+ years coaching experience",
        "Certified in Multiple Disciplines",
        "Member Success Rate: 98%"
      ],
      focus: "Balanced Training & Member Success",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=EkuaBoateng"
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-stone-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-[2px]">Our Team</span>
            <h1 className="text-5xl font-light mb-4 mt-3 text-stone-900">
              Meet Our Elite <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Trainers</span>
            </h1>
            <div className="h-1 w-20 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mt-6"></div>
            <p className="text-stone-600 mt-6 max-w-2xl mx-auto font-light">
              Our certified coaches bring decades of combined experience. Each trainer is dedicated to your success and brings unique expertise to their specialty.
            </p>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-3 gap-6 mb-16 md:mb-24">
            <div className="text-center p-6 bg-white rounded-2xl border border-stone-200/50 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">45+</div>
              <p className="text-stone-600 text-sm mt-2 font-light">Years Combined Experience</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-stone-200/50 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">20+</div>
              <p className="text-stone-600 text-sm mt-2 font-light">Certifications</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-stone-200/50 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">1000+</div>
              <p className="text-stone-600 text-sm mt-2 font-light">Members Trained</p>
            </div>
          </div>

          {/* Trainers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-stone-200/50 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                {/* Header Gradient */}
                <div className="h-24 bg-linear-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300"></div>
                </div>

                {/* Avatar */}
                <div className="relative px-8 pb-8">
                  <div className="absolute -top-12 left-8 w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
                    <img 
                      src={trainer.avatar} 
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-16">
                    <h3 className="text-2xl font-bold text-stone-800 mb-1">{trainer.name}</h3>
                    <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4">{trainer.role}</p>

                    {/* Focus Area */}
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <Zap size={16} className="text-amber-500" />
                      <span className="text-stone-700 font-medium">{trainer.focus}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">
                      {trainer.bio}
                    </p>

                    {/* Certifications */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-stone-800 mb-3 flex items-center gap-2">
                        <Award size={16} className="text-emerald-600" />
                        Certifications
                      </h4>
                      <ul className="space-y-2">
                        {trainer.certifications.map((cert, i) => (
                          <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                            <span className="text-emerald-600 mt-1 font-bold">•</span>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-stone-800 mb-3 flex items-center gap-2">
                        <Heart size={16} className="text-amber-500" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {trainer.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                            <span className="text-amber-600 mt-1 font-bold">+</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      to="/classes"
                      className="block w-full py-3 text-center bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all active:scale-95"
                    >
                      Book a Class
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8 text-center">
            <h3 className="text-2xl font-semibold text-stone-800 mb-3">Ready to transform with expert guidance?</h3>
            <p className="text-stone-600 mb-6 font-light max-w-2xl mx-auto">
              Our trainers offer personalized classes tailored to your goals. Book your first session today!
            </p>
            <Link
              to="/classes"
              className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Browse Classes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
