import { Link } from 'react-router-dom'

export default function Pricing() {
  const plans = [
    {
      name: "The Iron Pass",
      price: "₵299",
      period: "/month",
      desc: "Perfect for serious lifters focused on strength building.",
      features: ["24/7 Gym Access", "Powerlifting Platforms", "Locker Room Access", "Equipment Support"],
      highlight: false
    },
    {
      name: "The Hybrid Method",
      price: "₵599",
      period: "/month",
      desc: "The ultimate 50/50 balance. Everything you need.",
      features: ["24/7 Gym Access", "All Zen & Mobility Classes", "Guided Nature Hikes", "1-on-1 Monthly Assessment", "Priority Class Booking"],
      highlight: true
    },
    {
      name: "The Zen Pass",
      price: "₵375",
      period: "/month",
      desc: "Mindfulness and recovery focused.",
      features: ["All Zen & Mobility Classes", "Guided Nature Hikes", "Breathwork Workshops", "Meditation Sessions"],
      highlight: false
    }
  ];

  return (
    <div className="bg-linear-to-b from-stone-100 via-white to-stone-50 py-32 px-8 text-stone-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-[2px]">Investment</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 mt-3">
            Begin Your <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mt-6"></div>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto font-light">Choose a plan that aligns with your fitness philosophy. All memberships include access to our vibrant community.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                plan.highlight ? "md:scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect for Featured */}
              {plan.highlight && (
                <div className="absolute inset-0 bg-linear-to-r from-emerald-600/20 to-teal-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              )}

              {/* Card */}
              <div 
                className={`p-10 rounded-2xl backdrop-blur transition-all duration-500 relative overflow-hidden ${
                  plan.highlight 
                    ? "bg-linear-to-br from-emerald-900 to-teal-900 text-white shadow-2xl shadow-emerald-600/20 border border-emerald-700/50" 
                    : "bg-white/80 border border-stone-200 hover:border-emerald-300/50 hover:shadow-xl text-stone-800 hover:bg-white"
                }`}
              >
                {/* Top Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${plan.highlight ? 'from-emerald-400 to-teal-400' : 'from-stone-400 to-stone-300'}`}></div>

                {/* Badge */}
                {plan.highlight && (
                  <div className="mb-6 inline-block">
                    <span className="bg-linear-to-r from-emerald-400 to-teal-400 text-emerald-950 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-stone-800'}`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className={plan.highlight ? "text-emerald-100 mb-8 font-light" : "text-stone-600 mb-8 font-light"}>
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="mb-10">
                  <span className={`text-6xl font-light ${plan.highlight ? 'text-emerald-300' : 'text-emerald-600'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlight ? "text-emerald-200 text-lg" : "text-stone-500 text-lg"}>
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <svg 
                        className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-emerald-300" : "text-emerald-500"}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className={plan.highlight ? "text-emerald-50" : "text-stone-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to="/fitness-gym-site/join" className={`block w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 active:scale-95 text-center ${
                  plan.highlight 
                    ? "bg-white text-emerald-900 hover:bg-emerald-50 shadow-lg" 
                    : "bg-linear-to-r from-emerald-50 to-teal-50 text-emerald-700 hover:from-emerald-100 hover:to-teal-100 border border-emerald-200"
                }`}>
                  Get Started
                </Link>

                {/* Side accent */}
                <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-20 bg-linear-to-b ${plan.highlight ? 'from-emerald-400 to-transparent' : 'from-stone-300 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-stone-600 font-light">
            All memberships come with a <span className="font-semibold text-emerald-700">7-day free trial</span>. Cancel anytime. No hidden fees.
          </p>
        </div>
      </div>
    </div>
  )
}
