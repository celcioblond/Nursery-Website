import { FaLeaf, FaSeedling, FaTree, FaSprayCan, FaSnowflake, FaHome } from 'react-icons/fa'
import Link from 'next/link'

const services = [
  {
    icon: <FaHome className="w-8 h-8" />,
    title: "Complete Landscaping",
    description: "Full landscape design and implementation services"
  },
  {
    icon: <FaLeaf className="w-8 h-8" />,
    title: "Mowing, Edging & Blowing",
    description: "Professional lawn maintenance and cleanup"
  },
  {
    icon: <FaSprayCan className="w-8 h-8" />,
    title: "Weed Control & Fertilizing",
    description: "Effective weed prevention and lawn nutrition"
  },
  {
    icon: <FaSeedling className="w-8 h-8" />,
    title: "Spring or Fall Planting",
    description: "Seasonal planting and garden preparation"
  },
  {
    icon: <FaTree className="w-8 h-8" />,
    title: "Tree or Shrub Care",
    description: "Expert tree and shrub maintenance"
  },
  {
    icon: <FaSnowflake className="w-8 h-8" />,
    title: "Snow Removal",
    description: "Reliable winter snow clearing services"
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-primary-600">25+</span>
            <span className="text-xl text-gray-600">Years of Quality Lawn Care Services in Tulsa</span>
          </div>
          
          <h3 className="text-3xl font-semibold text-gray-900 mb-12 mt-16">
            Complete Professional Lawn Care Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary text-lg px-8 py-4">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
