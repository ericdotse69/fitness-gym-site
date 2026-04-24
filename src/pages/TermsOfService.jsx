import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <>
      <div className="pt-32 pb-20 px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-light mb-12 text-stone-900">Terms of Service</h1>
        
        <div className="space-y-8 text-stone-700 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">1. Agreement to Terms</h2>
            <p>
              By accessing and using X Avis Body's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">2. Use License</h2>
            <p className="mb-3">
              Permission is granted to temporarily download one copy of the materials (information or software) on X Avis Body's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">3. Membership Terms</h2>
            <p className="mb-3">
              X Avis Body Memberships are monthly recurring subscriptions. By enrolling, you authorize X Avis Body to charge your payment method on a monthly basis until cancellation. Cancellations must be submitted in writing at least 7 days before your renewal date.
            </p>
            <p>
              A 7-day trial period is offered for new members. Charges will begin on day 8 unless cancelled before the end of the trial period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">4. Disclaimer</h2>
            <p>
              The materials on X Avis Body's website are provided on an 'as is' basis. X Avis Body makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">5. Limitations</h2>
            <p>
              In no event shall X Avis Body or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on X Avis Body's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">6. Health & Safety</h2>
            <p className="mb-3">
              X Avis Body provides fitness services. Members acknowledge that fitness activities carry physical risks. We strongly recommend consulting with a healthcare provider before beginning any new fitness regimen.
            </p>
            <p>
              You assume all risks associated with your participation in our programs, classes, and use of our facilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Republic of Ghana, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
