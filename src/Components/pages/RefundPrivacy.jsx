import React, { useState } from 'react'

const RefundPrivacy = () => {
  const [activeTab, setActiveTab] = useState('refund');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Refund & Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trust, security, and satisfaction are our highest priorities
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('refund')}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'refund'
                ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <svg className={`w-5 h-5 mr-2 ${activeTab === 'refund' ? 'text-white' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Refund Policy
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <svg className={`w-5 h-5 mr-2 ${activeTab === 'privacy' ? 'text-white' : 'text-emerald-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Privacy Policy
          </button>
        </div>
      </div>

      {/* Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Refund Policy */}
          {activeTab === 'refund' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Refund Policy</h2>
                    <p className="text-gray-600">Clear guidelines for subscription refunds</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">7-Day Money-Back Guarantee</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        We offer a full refund within 7 days of subscription if you're not satisfied with our services.
                        Your satisfaction is our guarantee.
                      </p>
                    </div>

                    <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                          <span className="text-emerald-600 font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Refund Process</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        To request a refund, contact support with:
                      </p>
                      <ul className="space-y-2">
                        {['Your account details', 'Reason for refund request', 'Transaction ID'].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                          <span className="text-indigo-600 font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Processing Time</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Approved refunds are processed within 5-7 business days and credited back to your original payment method.
                      </p>
                      <div className="mt-4 p-3 bg-white rounded-lg border border-indigo-100">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Fast processing guaranteed</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                          <span className="text-amber-600 font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Non-Refundable Services</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Trading recommendations that have been provided and acted upon are non-refundable. 
                        Partial refunds considered case-by-case.
                      </p>
                      <div className="mt-4 p-3 bg-white rounded-lg border border-amber-100">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.928-.833-2.698 0L6.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span className="text-sm text-gray-600">Important exception</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
                  <div className="flex">
                    <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Important Notice</h4>
                      <p className="text-gray-700">
                        For any refund inquiries, please contact our support team at support@tradesmart.com 
                        within 7 days of subscription. We're committed to resolving your concerns promptly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
                    <p className="text-gray-600">How we protect and use your information</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Information Collection */}
                  <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border border-gray-200">
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h3>
                        <p className="text-gray-700 mb-4">We collect information to provide better services:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { text: 'Personal Information', icon: '👤', desc: 'Name, email, phone number' },
                            { text: 'Financial Details', icon: '💰', desc: 'Bank details, PAN, Aadhaar' },
                            { text: 'Trading Preferences', icon: '📊', desc: 'Investment goals and strategies' },
                            { text: 'Usage Data', icon: '📱', desc: 'Platform interactions and activity' },
                          ].map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                              <div className="flex items-center mb-2">
                                <span className="text-xl mr-2">{item.icon}</span>
                                <span className="font-medium text-gray-900">{item.text}</span>
                              </div>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* How We Use Information */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4">
                        <span className="text-emerald-600 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[
                            { title: 'Service Delivery', points: ['Provide trading services', 'Send notifications'] },
                            { title: 'Legal Compliance', points: ['Meet regulatory requirements', 'Prevent fraud'] },
                            { title: 'Communication', points: ['Send important updates', 'Share recommendations'] },
                            { title: 'Improvement', points: ['Enhance user experience', 'Develop new features'] },
                          ].map((category, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                              <h4 className="font-semibold text-gray-900 mb-3">{category.title}</h4>
                              <ul className="space-y-2">
                                {category.points.map((point, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-gray-700">
                                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Information Security */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Security</h3>
                        <p className="text-gray-700 mb-4">
                          We implement industry-standard security measures including:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[
                            { text: 'End-to-End Encryption', icon: '🔒' },
                            { text: 'Secure Servers', icon: '🛡️' },
                            { text: 'Regular Audits', icon: '📋' },
                            { text: 'Access Controls', icon: '🔐' },
                          ].map((item, index) => (
                            <div key={index} className="bg-white p-3 rounded-lg border border-gray-100 text-center">
                              <div className="text-2xl mb-1">{item.icon}</div>
                              <span className="text-sm font-medium text-gray-900">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Sharing & Rights */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                          <span className="text-red-600 font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Data Sharing</h3>
                      </div>
                      <p className="text-gray-700">
                        We do not sell or trade your personal information. Data is only shared with 
                        trusted service providers as required by law or with your explicit consent.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 font-bold">5</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Your Rights</h3>
                      </div>
                      <ul className="space-y-2">
                        {[
                          'Access and update information',
                          'Request data deletion',
                          'Opt-out of marketing',
                          'File regulatory complaints',
                        ].map((right, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{right}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact & Update */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4">
                          <span className="text-gray-700 font-bold">6</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact & Updates</h3>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex items-center">
                              <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                              <div>
                                <p className="text-sm text-gray-600">Email</p>
                                <p className="text-gray-900 font-medium">support@tradesmart.com</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <svg className="w-6 h-6 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                              </svg>
                              <div>
                                <p className="text-sm text-gray-600">Phone</p>
                                <p className="text-gray-900 font-medium">+91-1800-123-4567</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              <div>
                                <p className="text-sm text-gray-600">Address</p>
                                <p className="text-gray-900 font-medium">Bangalore, India</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <div className="flex">
                        <svg className="w-6 h-6 text-amber-600 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Last Updated: January 2025</h4>
                          <p className="text-gray-700">
                            We may update this policy periodically. Significant changes will be communicated via 
                            email or platform notifications. Continued use constitutes acceptance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default RefundPrivacy