export default function Schedule() {
  const classes = [
    { day: "Monday", time: "06:00 AM", name: "Iron Foundation", type: "Strength", style: "from-amber-500 to-orange-600", icon: "🏋️" },
    { day: "Tuesday", time: "07:00 AM", name: "Sunrise Mobility & Breath", type: "Zen", style: "from-emerald-500 to-teal-600", icon: "🧘" },
    { day: "Wednesday", time: "05:30 PM", name: "Trail Conditioning", type: "Outdoors", style: "from-slate-600 to-stone-700", icon: "🏃" },
    { day: "Thursday", time: "06:00 AM", name: "Powerlifting Core", type: "Strength", style: "from-amber-500 to-orange-600", icon: "💪" },
    { day: "Friday", time: "06:00 PM", name: "Dusk Flow Yoga", type: "Zen", style: "from-emerald-500 to-teal-600", icon: "🌙" },
    { day: "Saturday", time: "08:00 AM", name: "The Hybrid Peak (Hike + Calisthenics)", type: "Endurance", style: "from-purple-600 to-pink-600", icon: "⚡" },
  ];

  return (
    <div className="bg-gradient-to-b from-stone-50 via-white to-stone-50 py-32 px-8 text-stone-800 border-t border-stone-200/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-[2px]">✦ Your Week</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 mt-3">
            Weekly <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Rhythm</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mt-6"></div>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto font-light">A carefully balanced schedule designed to build strength, cultivate serenity, and challenge your endurance.</p>
        </div>

        {/* Schedule Cards */}
        <div className="space-y-4">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient Background Bar */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cls.style} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>

              {/* Card Content */}
              <div className="relative bg-white/80 backdrop-blur border border-stone-200/60 rounded-xl p-6 hover:border-emerald-300/50 transition-all duration-300 hover:shadow-lg hover:bg-white">
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  
                  {/* Left Section: Day & Time */}
                  <div className="flex items-center space-x-6 w-full md:w-auto">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${cls.style} flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                        {cls.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 text-lg md:text-xl group-hover:text-emerald-700 transition-colors">
                        {cls.day}
                      </div>
                      <div className="text-stone-500 text-sm font-medium group-hover:text-stone-700 transition-colors">
                        {cls.time}
                      </div>
                    </div>
                  </div>

                  {/* Right Section: Class Name & Badge */}
                  <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-6">
                    <div className="font-semibold text-stone-800 group-hover:text-emerald-700 transition-colors text-lg">
                      {cls.name}
                    </div>
                    <div className={`flex-shrink-0 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full bg-gradient-to-r ${cls.style} text-white shadow-md group-hover:shadow-lg transition-shadow transform group-hover:scale-105`}>
                      {cls.type}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${cls.style} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-2xl p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3">Ready to Join?</h3>
          <p className="text-stone-700 mb-8 max-w-xl mx-auto font-light">
            Choose your membership plan and get access to all our classes starting today.
          </p>
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-600/30 transition-all active:scale-95">
            View Pricing Plans
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}