export default function Hero() {
  return (
    <div className="bg-stone-100 min-h-[80vh] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl md:text-7xl font-light text-stone-800 tracking-tight mb-6">
        The Perfect Balance of <br className="hidden md:block" />
        <span className="font-semibold text-emerald-700">Iron & Stillness</span>
      </h1>
      
      <p className="max-w-2xl text-stone-500 text-lg md:text-xl mb-10 leading-relaxed">
        Welcome to <strong className="text-stone-700 font-medium">X Avis Body</strong>. We believe true fitness is a 50/50 split. Build your armor with heavy strength training in the gym, and sharpen your mind with zen practices, natural endurance, and outdoor conditioning.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <button className="bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-8 rounded-full text-lg transition-all shadow-sm">
          Start Your Journey
        </button>
        <button className="bg-transparent border border-stone-300 text-stone-600 hover:border-emerald-700 hover:text-emerald-700 py-3 px-8 rounded-full text-lg transition-all">
          Explore the Philosophy
        </button>
      </div>
    </div>
  )
}