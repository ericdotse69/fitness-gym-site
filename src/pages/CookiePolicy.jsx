import Footer from '../components/Footer'

export default function CookiePolicy() {
  return (
    <>
      <div className="pt-32 pb-20 px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-light mb-12 text-stone-900">Cookie Policy</h1>
        
        <div className="space-y-8 text-stone-700 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences, understand how you use our site, and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">Why We Use Cookies</h2>
            <p className="mb-3">X Avis Body uses cookies for several important purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Authentication:</strong> To keep you logged into your account</li>
              <li><strong>Preferences:</strong> To remember your site settings and preferences</li>
              <li><strong>Analytics:</strong> To understand how visitors use our website</li>
              <li><strong>Security:</strong> To protect against fraud and enhance security</li>
              <li><strong>Marketing:</strong> To deliver personalized content and offers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">Types of Cookies We Use</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-stone-800 mb-2">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly. They enable core functionality such as security and network management. These cookies cannot be disabled.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-stone-800 mb-2">Performance Cookies</h3>
                <p>These cookies collect information about how you use our website, such as which pages you visit most often. This helps us improve site performance and user experience.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-stone-800 mb-2">Functional Cookies</h3>
                <p>These cookies allow us to remember your choices and provide enhanced features, such as language selection and volume control.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-stone-800 mb-2">Targeting/Advertising Cookies</h3>
                <p>These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertising on other sites.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">How to Control Cookies</h2>
            <p className="mb-3">
              You have the right to choose whether or not to accept cookies (except those that are essential to the operation of the site). Most web browsers allow you to control cookies through their settings. Here's how:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">Third-Party Cookies</h2>
            <p>
              Third parties may also use cookies on our website for analytics and advertising purposes. We do not control these cookies. Please review their privacy policies to understand how they use your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">Privacy and Data Protection</h2>
            <p>
              Any information collected through cookies is handled in accordance with our Privacy Policy. We are committed to protecting your personal data and complying with all applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="mt-4 text-emerald-600">
              <p>Email: <a href="mailto:taysecgardens@gmail.com" className="hover:text-emerald-700">taysecgardens@gmail.com</a></p>
              <p>Phone: <a href="tel:+233208921563" className="hover:text-emerald-700">+233 208 921 563</a></p>
              <p>Address: Taysec Gardens, Opposite MTN Headquarters, Accra, Ghana</p>
            </div>
          </section>

          <p className="text-stone-600 text-sm mt-12">
            Last Updated: April 2026
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
