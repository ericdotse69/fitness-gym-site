import { Link } from 'react-router-dom'

export default function Programs() {
  const programs = [
    { 
      title: "Iron & Strength", 
      desc: "Hit the gym floor. We use free weights, barbells, and heavy lifting to build absolute power, muscle mass, and structural armor.",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50"
    },
    { 
      title: "Zen & Mobility", 
      desc: "Sharpen the mind and heal the body. Deep stretching, controlled breathing, and mindfulness practices to create mental clarity and prevent injury.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    { 
      title: "Endurance & Earth", 
      desc: "Take the training outside. Calisthenics, functional pushups, and trail hikes to build a lean physique and relentless cardiovascular endurance.",
      gradient: "from-slate-600 to-stone-700",
      bgGradient: "from-slate-50 to-stone-50"
    }
  ];

  return (
    <div className="bg-linear-to-b from-stone-50 via-white to-stone-50 py-32 px-8 text-stone-800 border-t border-stone-200/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-[2px]">Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 mt-3">
            The X Avis <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Method</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mt-6"></div>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto font-light">Three pillars of transformation—strength, serenity, and endurance combined into one balanced lifestyle.</p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-linear-to-br ${prog.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative bg-white border border-stone-200/60 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 hover:border-emerald-300/30 group-hover:border-emerald-200 h-full flex flex-col">
                {/* Accent Bar */}
                <div className={`absolute top-0 left-0 w-0 h-1 bg-linear-to-r ${prog.gradient} group-hover:w-full transition-all duration-500`}></div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3 text-stone-800 group-hover:text-emerald-700 transition-colors">
                  {prog.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 leading-relaxed font-light group-hover:text-stone-700 transition-colors flex-grow">
                  {prog.desc}
                </p>

                {/* CTA Button */}
                <div className="mt-6 pt-6 border-t border-stone-200 group-hover:border-emerald-200 transition-colors">
                  <Link
                    to="/classes"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    Book a Class
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/classes" className="group inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-600/30 transition-all active:scale-95">
            <span>Browse & Book Classes</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
