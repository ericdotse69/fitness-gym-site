export default function Pricing() {
  const plans = [
    {
      name: "The Iron Pass",
      price: "$60",
      period: "/month",
      desc: "Full access to the strength facility and free weights.",
      features: ["24/7 Gym Access", "Powerlifting Platforms", "Locker Room Access"],
      highlight: false
    },
    {
      name: "The Hybrid Method",
      price: "$120",
      period: "/month",
      desc: "The ultimate 50/50 balance. All facility access plus unlimited classes.",
      features: ["24/7 Gym Access", "All Zen & Mobility Classes", "Guided Nature Hikes", "1-on-1 Monthly Assessment"],
      highlight: true
    },
    {
      name: "The Zen Pass",
      price: "$75",
      period: "/month",
      desc: "Access to all mobility, yoga, and outdoor conditioning sessions.",
      features: ["All Zen & Mobility Classes", "Guided Nature Hikes", "Breathwork Workshops"],
      highlight: false
    }
  ];

  return (
    <div className="bg-stone-100 py-24 px-8 text-stone-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Begin Your <span className="font-semibold text-emerald-700">Journey</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-2xl transition-all duration-300 ${
                plan.highlight 
                ? "bg-emerald-800 text-white shadow-xl transform md:-translate-y-4" 
                : "bg-white border border-stone-200 hover:shadow-md text-stone-800"
              }`}
            >
              {plan.highlight && (
                <span className="bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className={plan.highlight ? "text-emerald-100 mb-6" : "text-stone-500 mb-6"}>
                {plan.desc}
              </p>
              <div className="mb-8">
                <span className="text-5xl font-light">{plan.price}</span>
                <span className={plan.highlight ? "text-emerald-200" : "text-stone-400"}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className={`w-5 h-5 ${plan.highlight ? "text-emerald-300" : "text-emerald-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className={plan.highlight ? "text-emerald-50" : "text-stone-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-medium transition-colors ${
                plan.highlight 
                ? "bg-white text-emerald-900 hover:bg-stone-100" 
                : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
              }`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}