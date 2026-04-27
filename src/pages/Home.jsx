import Hero from '../components/Hero'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import NewsletterSignup from '../components/NewsletterSignup'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Testimonials />
      <div className="bg-stone-50 px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <NewsletterSignup />
        </div>
      </div>
      <Footer />
    </>
  )
}
