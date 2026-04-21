export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-stone-50/80 border-b border-emerald-100/30 py-5 px-8 flex justify-between items-center shadow-sm">
      {/* Logo Section */}
      <div className="text-2xl tracking-widest text-emerald-700 uppercase font-bold hover:text-emerald-600 cursor-pointer transition-colors">
        <span>✦ X Avis</span> <span className="font-light text-stone-600">Body</span>
      </div>
      
      <ul className="hidden md:flex space-x-10 font-medium text-stone-600">
        <li className="relative group cursor-pointer">
          <span className="group-hover:text-emerald-700">Philosophy</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="group-hover:text-emerald-700">Practices</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span className="group-hover:text-emerald-700">Outdoors</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
        </li>
      </ul>
      <button className="group relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-2.5 px-8 rounded-full font-semibold overflow-hidden hover:shadow-lg hover:shadow-emerald-400/30 active:scale-95">
        <span className="relative z-10">Begin Journey</span>
        <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </nav>
  )
}