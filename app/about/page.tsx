import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Vivero Girasoles
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              With over 25 years of experience, we're Tulsa's trusted partner 
              for professional lawn care and landscaping services.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced professionals are dedicated to delivering exceptional 
                lawn care services throughout Tulsa and surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl text-green-600">👨‍🌾</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Rodriguez</h3>
                <p className="text-primary-600 font-semibold mb-3">Founder & Lead Landscape Designer</p>
                <p className="text-gray-600 text-sm">
                  With 25+ years in lawn care, Maria brings unmatched expertise 
                  in landscape design and horticulture to every project.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl text-green-600">🧑‍💼</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Smith</h3>
                <p className="text-primary-600 font-semibold mb-3">Operations Manager</p>
                <p className="text-gray-600 text-sm">
                  John manages our field operations ensuring quality, efficiency, 
                  and customer satisfaction on every job.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl text-green-600">👩‍🔬</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-primary-600 font-semibold mb-3">Horticulture Specialist</p>
                <p className="text-gray-600 text-sm">
                  Sarah specializes in plant health, soil nutrition, and pest 
                  management, ensuring your lawn thrives year-round.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 1998, Maria Lawn Care began as a small family business 
                  with a passion for creating beautiful outdoor spaces. What started 
                  as weekend lawn mowing has grown into Tulsa's most trusted lawn care 
                  service provider.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we serve hundreds of satisfied customers throughout Tulsa, 
                  combining traditional techniques with modern technology to deliver 
                  exceptional results. Our commitment to quality, reliability, and 
                  environmental responsibility has made us a leader in the industry.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">500+</div>
                    <div className="text-sm text-gray-600">Satisfied Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">25+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Excellence</h4>
                      <p className="text-sm text-gray-600">We never compromise on the quality of our work</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Environmental Care</h4>
                      <p className="text-sm text-gray-600">Eco-friendly practices for sustainable landscaping</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Customer Satisfaction</h4>
                      <p className="text-sm text-gray-600">Your happiness is our top priority</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                    <div>


                      <h4 className="font-semibold text-gray-900">Reliable Service</h4>
                      <p className="text-sm text-gray-600">Consistent, dependable lawn care solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Insurance</h2>
              <p className="text-xl text-gray-600">
                Fully licensed, bonded, and insured for your peace of mind
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl">📋</div>
                </div>
                <h3 className="font-semibold text-gray-900">Licensed</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl">🛡️</div>
                </div>
                <h3 className="font-semibold text-gray-900">Bonded</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl">🔐</div>
                </div>
                <h3 className="font-semibold text-gray-900">Insured</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl">✅</div>
                </div>
                <h3 className="font-semibold text-gray-900">BBB Rated</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

