export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-stone-800 pb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl tracking-widest text-emerald-600 uppercase mb-4">
            <span className="font-bold">X Avis</span> <span className="font-light text-stone-300">Body</span>
          </div>
          <p className="text-sm max-w-sm leading-relaxed">
            Forging absolute strength and cultivating total mental clarity. Join the movement and find your perfect balance.
          </p>
        </div>
        
        <div>
          <h4 className="text-stone-200 font-semibold mb-4 uppercase tracking-wider text-sm">Location</h4>
          <p className="text-sm">124 Zen Peak Road<br/>Accra, Greater Accra<br/>Ghana</p>
        </div>

        <div>
          <h4 className="text-stone-200 font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
          <p className="text-sm">hello@xavisbody.com<br/>+233 55 123 4567</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2026 X Avis Body. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-emerald-500 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-emerald-500 cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}