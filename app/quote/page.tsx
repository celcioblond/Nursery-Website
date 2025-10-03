import Navigation from '@/components/Navigation'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function QuotePage() {
  return (
    <main>
      <Navigation />
      <div className="bg-gray-50 min-h-screen">
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Get Your Free Quote
              </h1>
              <p className="text-xl text-gray-600">
                Professional lawn care services tailored to your needs
              </p>
            </div>
            
            <QuoteForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

