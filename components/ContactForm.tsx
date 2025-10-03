'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  service: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-8">
          Ready to transform your outdoor space? Contact us today for professional 
          lawn care services in Tulsa. We're here to help make your lawn beautiful 
          and healthy.
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaPhone className="text-primary-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">918-640-6405</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-primary-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">info@marialawncare.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-primary-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Service Area</h3>
              <p className="text-gray-600">Tulsa, OK and surrounding areas</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaClock className="text-primary-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8:00am - 5:00pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Send Us a Message
        </h2>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
            Thank you for your message! We'll get back to you within 24 hours.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
            There was an error sending your message. Please try again or call us directly.
          </div>
        )}

        <form {...register} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                {...register('phone')}
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="(918) 555-0123"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Interested In
              </label>
              <select
                {...register('service')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select a service</option>
                <option value="landscaping">Landscaping</option>
                <option value="mowing">Mowing & Edging</option>
                <option value="weed-control">Weed Control</option>
                <option value="fertilizing">Fertilizing</option>
                <option value="tree-care">Tree Care</option>
                <option value="snow-removal">Snow Removal</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Property Address
            </label>
            <input
              {...register('address')}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="123 Main St, Tulsa, OK 74101"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              rows={4}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tell us about your lawn care needs..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full btn-primary ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}

