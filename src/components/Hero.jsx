export default function Hero() {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000" 
        alt="Zen Fitness" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Premium Layered Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/50 to-emerald-950/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-950/40"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-stone-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl animate-fade-in-up">
        {/* Pre-headline */}
        <div className="mb-6 inline-block">
          <span className="text-emerald-400 font-semibold text-sm md:text-base uppercase tracking-[3px] animate-fade-in-down">
            ✦ Strength + Serenity
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-8xl font-light text-white tracking-tight mb-6 leading-tight drop-shadow-2xl">
          The Perfect <br/>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 animate-float">
            Balance
          </span>
          <br/>of Iron & Stillness
        </h1>

        {/* Subheading */}
        <p className="text-stone-100 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg">
          Welcome to <span className="text-emerald-300 font-semibold">X Avis Body</span>. We believe true fitness is a <span className="font-semibold text-white">50/50 split</span>. Build your armor with heavy strength training, and sharpen your mind with zen practices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white py-4 px-10 rounded-full text-lg font-semibold transition-all shadow-2xl hover:shadow-emerald-600/40 active:scale-95 flex items-center justify-center gap-2">
            <span>Start Your Journey</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="glass text-white py-4 px-10 rounded-full text-lg font-semibold hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all hover:border-white/40">
            Learn More
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="glass-dark rounded-xl p-4">
            <div className="text-3xl font-bold text-emerald-300 mb-1">500+</div>
            <div className="text-stone-200 text-sm">Active Members</div>
          </div>
          <div className="glass-dark rounded-xl p-4">
            <div className="text-3xl font-bold text-emerald-300 mb-1">24/7</div>
            <div className="text-stone-200 text-sm">Gym Access</div>
          </div>
          <div className="glass-dark rounded-xl p-4">
            <div className="text-3xl font-bold text-emerald-300 mb-1">50+</div>
            <div className="text-stone-200 text-sm">Classes/Month</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}