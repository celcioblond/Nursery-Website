import Link from 'next/link'
import { FaQuoteLeft, FaPhone } from 'react-icons/fa'

export default function QuoteSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FaQuoteLeft className="text-6xl mx-auto mb-8 text-yellow-300" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience the Maria Lawn Care Difference?
          </h2>
          
          <p className="text-xl mb-12 text-primary-100 max-w-3xl mx-auto">
            Transform your outdoor space with our professional lawn care services. 
            Get your free quote today and see why Tulsa homeowners trust us 
            with their landscaping needs.
          </p>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Get Your Free Quote</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="text-primary-100">Request Quote</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-primary-100">We Visit & Plan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-primary-100">Enjoy Your Lawn</div>
              </div>
            </div>
            
            <Link href="/quote" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Get A Quote Now
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-yellow-300" />
              <span className="text-lg font-semibold">Call Us Today!</span>
            </div>
            <div className="text-2xl font-bold text-yellow-300">
              918-640-6405
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

