export default function Schedule() {
  const classes = [
    { day: "Monday", time: "06:00 AM", name: "Iron Foundation", type: "Strength", style: "text-stone-700 bg-stone-200" },
    { day: "Tuesday", time: "07:00 AM", name: "Sunrise Mobility & Breath", type: "Zen", style: "text-emerald-800 bg-emerald-100" },
    { day: "Wednesday", time: "05:30 PM", name: "Trail Conditioning", type: "Outdoors", style: "text-stone-700 bg-stone-200" },
    { day: "Thursday", time: "06:00 AM", name: "Powerlifting Core", type: "Strength", style: "text-stone-700 bg-stone-200" },
    { day: "Friday", time: "06:00 PM", name: "Dusk Flow Yoga", type: "Zen", style: "text-emerald-800 bg-emerald-100" },
    { day: "Saturday", time: "08:00 AM", name: "The Hybrid Peak (Hike + Calisthenics)", type: "Endurance", style: "text-white bg-emerald-700" },
  ];

  return (
    <div className="bg-stone-50 py-24 px-8 text-stone-800 border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Weekly <span className="font-semibold text-emerald-700">Rhythm</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-700 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
          {classes.map((cls, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-4 md:mb-0">
                <div className="w-32 font-bold text-stone-800 text-lg">{cls.day}</div>
                <div className="text-stone-500">{cls.time}</div>
              </div>
              <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
                <div className="font-medium text-stone-700">{cls.name}</div>
                <span className={`text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full ${cls.style}`}>
                  {cls.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}