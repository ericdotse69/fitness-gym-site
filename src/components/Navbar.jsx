export default function Navbar() {
  return (
    <nav className="bg-stone-50 text-stone-800 py-6 px-8 flex justify-between items-center">
      {/* Updated Logo Section */}
      <div className="text-2xl tracking-widest text-emerald-800 uppercase">
        <span className="font-bold">X Avis</span> <span className="font-light">Body</span>
      </div>
      
      <ul className="hidden md:flex space-x-12 font-medium text-stone-500">
        <li className="hover:text-emerald-700 cursor-pointer transition-colors">Philosophy</li>
        <li className="hover:text-emerald-700 cursor-pointer transition-colors">Practices</li>
        <li className="hover:text-emerald-700 cursor-pointer transition-colors">Outdoors</li>
      </ul>
      <button className="border border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white py-2 px-6 rounded-full transition-colors duration-300">
        Begin Journey
      </button>
    </nav>
  )
}