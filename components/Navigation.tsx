'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-600">
              Vivero Girasoles
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                About Us
              </Link>
              <Link href="/services" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
              <Link href="/quote" className="btn-primary">
                Get A Quote
              </Link>
            </div>
          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden md:flex items-center space-x-2 text-primary-600">
            <FaPhone className="text-sm" />
            <span className="text-sm font-semibold">918-640-6405</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                href="/quote" 
                className="btn-primary block text-center mt-4"
                onClick={toggleMenu}
              >
                Get A Quote
              </Link>
              <div className="flex items-center justify-center space-x-2 text-primary-600 mt-4">
                <FaPhone className="text-sm" />
                <span className="text-sm font-semibold">054-449 692</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

