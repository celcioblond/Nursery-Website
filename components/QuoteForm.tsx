'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaCheck, FaDollarSign, FaPhone } from 'react-icons/fa'

interface QuoteFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  propertyType: string
  lawnSize: string
  services: string[]
  budget: string
  timeline: string
  additionalInfo: string
}

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<QuoteFormData>()

  const services = [
    'Mowing & Edging',
    'Weed Control',
    'Fertilizing',
    'Landscaping',
    'Tree & Shrub Care',
    'Irrigation',
    'Snow Removal',
    'Mosquito Control',
    'Pest Control',
    'Fall Cleanup'
  ]

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Quote request submitted:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Quote Information */}
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FaDollarSign className="text-primary-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Free Estimates</h4>
                <p className="text-sm text-gray-600">No obligation quotes</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaCheck className="text-primary-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">25+ Years Experience</h4>
                <p className="text-sm text-gray-600">Proven quality service</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaPhone className="text-primary-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Fast Response</h4>
                <p className="text-sm text-gray-600">Same day estimates</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Quick Response
          </h3>
          <p className="text-gray-600 mb-4">
            We typically respond to quote requests within 24 hours. 
            For urgent requests, call us directly.
          </p>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">918-640-6405</div>
            <div className="text-sm text-gray-600">Call anytime            </div>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="lg:col-span-2">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Request Your Free Quote
          </h2>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
              <h3 className="font-bold">Thank you for your quote request!</h3>
              <p>We'll contact you within 24 hours with a detailed estimate.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
              There was an error submitting your request. Please try again or call us directly.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Contact Information */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    {...register('firstName', { required: 'First name is required' })}
                    type="text"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    {...register('lastName', { required: 'Last name is required' })}
                    type="text"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
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
                    placeholder="john@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    type="tel"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(918) 555-0123"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Property Information */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <input
                    {...register('address', { required: 'Property address is required' })}
                    type="text"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="123 Main St, Tulsa, OK 74101"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      {...register('propertyType')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="hoa">HOA Community</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="lawnSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Lawn Size
                    </label>
                    <select
                      {...register('lawnSize')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select lawn size</option>
                      <option value="small">Small (under 5,000 sq ft)</option>
                      <option value="medium">Medium (5,000 - 15,000 sq ft)</option>
                      <option value="large">Large (15,000+ sq ft)</option>
                      <option value="unknown">I'm not sure</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Needed */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Services Needed</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {services.map((service) => (
                  <label key={service} className="flex items-center space-x-2">
                    <input
                      {...register('services')}
                      type="checkbox"
                      value={service}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget & Timeline</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="over-5000">Over $5,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    When do you need service?
                  </label>
                  <select
                    {...register('timeline')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="within-week">Within a week</option>
                    <option value="within-month">Within a month</option>
                    <option value="flexible">I'm flexible</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                {...register('additionalInfo')}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Tell us more about your specific needs, special requirements, or questions..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting Request...' : 'Get My Free Quote'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
