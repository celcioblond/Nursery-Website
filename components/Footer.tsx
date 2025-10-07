import Link from 'next/link'
import { FaPhone, FaEnvelope, FaHome, FaLeaf } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaLeaf className="text-primary-400 text-2xl" />
              <span className="text-xl font-bold">Vivero Girasoles</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional lawn care services making Tulsa more beautiful 
              one lawn at a time. 25+ years of quality service.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <FaPhone className="text-sm" />
              <span>054-449 692</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <FaEnvelope className="text-sm" />
              <span>ventas@viverogirasoles.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-300 hover:text-white">
                  Get A Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Landscaping</li>
              <li>Mowing & Edging</li>
              <li>Weed Control</li>
              <li>Fertilizing</li>
              <li>Tree Care</li>
              <li>Snow Removal</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <FaHome className="text-sm" />
                <span>Av. Fernandini 145-B Sachaca - Arequipa - Perú</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-sm" />
                <span>918-640-6405</span>
              </div>
              <div className="text-sm">
                Mon - Fri: 8:00am - 5:00pm
              </div>
            </div>
            
            <Link href="/quote" className="btn-primary mt-6 block text-center">
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Vivero Girasoles, All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

