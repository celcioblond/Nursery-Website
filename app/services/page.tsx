import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const services = [
  {
    title: "Complete Landscaping",
    icon: "🌳",
    description: "Full landscape design and implementation including planting, hardscaping, and outdoor living spaces.",
    features: [
      "Custom landscape design",
      "Plant selection & installation",
      "Hardscaping & patios",
      "Irrigation systems",
      "Outdoor lighting",
      "Retaining walls"
    ]
  },
  {
    title: "Mowing, Edging & Blowing",
    icon: "✂️",
    description: "Regular lawn maintenance including precision mowing, clean edging, and thorough cleanup.",
    features: [
      "Weekly/bi-weekly mowing",
      "Trim & edge sidewalks",
      "Leaf blowing & cleanup",
      "Debris removal",
      "Litter pickup",
      "Professional equipment"
    ]
  },
  {
    title: "Weed Control & Fertilizing",
    icon: "💊",
    description: "Specialized lawn nutrition including pre-emergent treatments, fertilization, and organic options.",
    features: [
      "Pre-emergent weed control",
      "Post-emergent treatments",
      "Lawn fertilization",
      "Soil conditioning",
      "Grub prevention",
      "Organic treatment options"
    ]
  },
  {
    title: "Spring or Fall Planting",
    icon: "🌱",
    description: "Seasonal planting services including flower beds, shrubs, trees, and garden preparation.",
    features: [
      "Bed design & preparation",
      "Annual & perennial planting",
      "Tree & shrub installation",
      "Mulching services",
      "Bulb planting",
      "Garden cleanup"
    ]
  },
  {
    title: "Tree & Shrub Care",
    icon: "🌿",
    description: "Professional tree and shrub maintenance including pruning, disease treatment, and removal.",
    features: [
      "Professional pruning",
      "Tree removal",
      "Stump grinding",
      "Disease treatment",
      "Pest control",
      "Tree health assessments"
    ]
  },
  {
    title: "Irrigation Systems",
    icon: "💧",
    description: "Complete irrigation installation, maintenance, and repair for efficient lawn watering.",
    features: [
      "System design & installation",
      "Zone controller setup",
      "Sprinkler head repair",
      "Timer programming",
      "Seasonal startup/shutdown",
      "Water conservation features"
    ]
  },
  {
    title: "Mosquito Control",
    icon: "🦟",
    description: "Effective mosquito control treatments to protect your outdoor living spaces.",
    features: [
      "Barrier treatments",
      "Standing water elimination",
      "Plant-safe insecticides",
      "Schedule flexibility",
      "Effective repellents",
      "Seasonal programs"
    ]
  },
  {
    title: "Lawn Pest Control",
    icon: "🐛",
    description: "Comprehensive pest management for lawn-damaging insects and rodents.",
    features: [
      "Grub control",
      "Fire ant treatments",
      "Spider removal",
      "Nuisance wildlife",
      "Organic options",
      "Regular monitoring"
    ]
  },
  {
    title: "Snow Removal",
    icon: "❄️",
    description: "Reliable snow removal services for driveways, sidewalks, and parking areas.",
    features: [
      "Driveway clearing",
      "Sidewalk cleaning",
      "Ice prevention",
      "Emergency service",
      "Sand/salt application",
      "Commercial properties"
    ]
  },
  {
    title: "Holiday Lights",
    icon: "✨",
    description: "Professional holiday lighting installation and removal for festive outdoor displays.",
    features: [
      "Custom light design",
      "Installation & removal",
      "Timers & controls",
      "Energy-efficient LEDs",
      "Maintenance included",
      "Residential & commercial"
    ]
  }
]

export default function ServicesPage() {

  return (
    <main>
      <Navigation />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Comprehensive lawn care and landscaping services for residential 
              and commercial properties in Tulsa.
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Satisfaction Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Professional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From routine maintenance to complete landscape transformations, 
                we provide comprehensive lawn care solutions tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Service Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive service packages designed to meet 
                different needs and budgets. Custom packages available upon request.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Care</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">$150<sup className="text-sm">/month</sup></div>
                  <p className="text-gray-600">Essential lawn maintenance</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Bi-weekly mowing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Edging & blowing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Basic weed control</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Debris removal</span>
                  </li>
                </ul>
                <button className="w-full btn-secondary">Choose Basic</button>
              </div>

              {/* Premium Package */}
              <div className="bg-white p-8 rounded-lg border-2 border-primary-600 shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Care</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">$250<sup className="text-sm">/month</sup></div>
                  <p className="text-gray-600">Complete lawn care solution</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Weekly mowing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Professional edging</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Fertilizer program</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Weed prevention</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Seasonal cleanup</span>
                  </li>
                </ul>
                <button className="w-full btn-primary">Choose Premium</button>
              </div>

              {/* Ultimate Package */}
              <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ultimate Care</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">$400<sup className="text-sm">/month</sup></div>
                  <p className="text-gray-600">Complete landscape management</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Everything in Premium</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Tree & shrub care</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Pest control</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Irrigation monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                    <span className="text-gray-700">Landscape maintenance</span>
                  </li>
                </ul>
                <button className="w-full btn-secondary">Choose Ultimate</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

