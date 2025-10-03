import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <div className="bg-gray-50 min-h-screen">
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                Get in touch for professional lawn care services in Tulsa
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

