export default function Programs() {
  const programs = [
    { 
      title: "Iron & Strength", 
      desc: "Hit the gym floor. We use free weights, barbells, and heavy lifting to build absolute power, muscle mass, and structural armor.", 
      icon: "🏋️‍♂️" 
    },
    { 
      title: "Zen & Mobility", 
      desc: "Sharpen the mind and heal the body. Deep stretching, controlled breathing, and mindfulness practices to create mental clarity and prevent injury.", 
      icon: "🧘" 
    },
    { 
      title: "Endurance & Earth", 
      desc: "Take the training outside. Calisthenics, functional pushups, and trail hikes to build a lean physique and relentless cardiovascular endurance.", 
      icon: "⛰️" 
    }
  ];

  return (
    <div className="bg-stone-50 py-24 px-8 text-stone-800 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            The X Avis <span className="font-semibold text-emerald-700">Method</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-700 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md border border-stone-100 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 opacity-80 group-hover:scale-110 transition-transform origin-left">
                {prog.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-stone-700">{prog.title}</h3>
              <p className="text-stone-500 leading-relaxed font-light">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}