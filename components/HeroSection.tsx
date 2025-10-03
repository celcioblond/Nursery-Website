import Link from 'next/link'
import { FaPhone, FaArrowRight } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating vibrant, thriving outdoor spaces
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            for a greener, healthier Tulsa
          </p>
          <p className="text-lg mb-12 text-green-200 max-w-3xl mx-auto">
            Professional lawn care services including landscaping, mowing, weed control, 
            fertilizing, and comprehensive outdoor maintenance. Making Tulsa more beautiful 
            one lawn at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quote" className="btn-primary bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 flex items-center space-x-2">
              <span>Get A Quote</span>
              <FaArrowRight />
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
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

