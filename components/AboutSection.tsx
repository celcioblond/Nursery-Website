import Link from 'next/link'
import { FaCheckCircle, FaLeaf } from 'react-icons/fa'

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 25 years of experience in lawn care and landscaping, 
              our dedicated team delivers exceptional results for residential 
              and commercial properties throughout Tulsa.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-primary-600 text-xl" />
                <span className="text-gray-700">Certified landscaping professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-primary-600 text-xl" />
                <span className="text-gray-700">Environmentally-friendly practices</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-primary-600 text-xl" />
                <span className="text-gray-700">Fully insured and licensed</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-primary-600 text-xl" />
                <span className="text-gray-700">Satisfaction guaranteed</span>
              </div>
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="text-center">
              <FaLeaf className="text-6xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Greenleaf Lawn
              </h3>
              <p className="text-gray-600 mb-6">
                Trusted by Tulsa residents for over two decades. We specialize 
                in creating beautiful, healthy outdoor spaces that enhance 
                your property value and quality of life.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

