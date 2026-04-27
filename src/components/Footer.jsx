import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-stone-900 to-stone-950 text-stone-300 relative overflow-hidden border-t border-stone-800/50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Newsletter */}
        <div className="mb-20">
          <NewsletterSignup />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-stone-800/50">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl tracking-widest text-emerald-500 uppercase mb-6 font-bold">
              <span>X Avis</span> <span className="font-light text-stone-400">Body</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-sm mb-6 font-light">
              Forging absolute strength and cultivating total mental clarity through the perfect balance of iron and stillness. Join 500+ members building a better version of themselves.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800/50 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20v-7.21H5.5V9.25h2.79V7.02c0-2.7 1.65-4.18 4.06-4.18 1.15 0 2.14.09 2.43.13v2.82h-1.67c-1.31 0-1.56.62-1.56 1.53v2v2.54h3.11l-4.04 3.54V20Z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800/50 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.66 10.66 0 01-1 5.63"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800/50 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16.5 7.5c0 1.933-1.567 3.5-3.5 3.5S9.5 9.433 9.5 7.5 11.067 4 12.5 4s3 1.567 3 3.5z" fill="#000"/><path d="M6 16.5c0-2.485 2.686-4.5 6-4.5s6 2.015 6 4.5V20H6v-3.5z" fill="#000"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-200 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/fitness-gym-site/" className="text-stone-400 hover:text-emerald-400 transition-colors font-light">Home</a></li>
              <li><a href="/fitness-gym-site/programs" className="text-stone-400 hover:text-emerald-400 transition-colors font-light">Programs</a></li>
              <li><a href="/fitness-gym-site/pricing" className="text-stone-400 hover:text-emerald-400 transition-colors font-light">Pricing</a></li>
              <li><a href="/fitness-gym-site/schedule" className="text-stone-400 hover:text-emerald-400 transition-colors font-light">Schedule</a></li>
              <li><a href="/fitness-gym-site/contact" className="text-stone-400 hover:text-emerald-400 transition-colors font-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-stone-200 font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-stone-400 font-light">Location</p>
                <p className="text-stone-300 mt-1">Taysec Gardens<br/>Opposite MTN Headquarters<br/>Accra, Ghana</p>
              </div>
              <div>
                <p className="text-stone-400 font-light">Email</p>
                <a href="mailto:taysecgardens@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">taysecgardens@gmail.com</a>
              </div>
              <div>
                <p className="text-stone-400 font-light">Phone</p>
                <a href="tel:+233208921563" className="text-emerald-400 hover:text-emerald-300 transition-colors">+233 208 921 563</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>&copy; 2026 X Avis Body. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/fitness-gym-site/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <span className="text-stone-700">•</span>
            <a href="/fitness-gym-site/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <span className="text-stone-700">•</span>
            <a href="/fitness-gym-site/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}