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
            Your trust and privacy are our top priorities
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
                    <p className="text-gray-600">All sales are final</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Policy</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We highly value our clients and strive to offer them the best services possible. However, it is important to understand that we do not provide a 100% guarantee on our calls. Therefore, all sales are final and we do not accept any refunds or cancellations.
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Important Notice</h3>
                    <p className="text-gray-700 mb-4">We strongly recommend that before making a payment, our visitors, and potential clients, please:</p>
                    <ul className="space-y-2">
                      {[
                        'Read all information about our services and support given to our clients',
                        'Read our Terms and Conditions',
                        'Read our Privacy Policy and Refund Policy'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">No Refund Policy</h3>
                    <p className="text-gray-700 mb-2">There is no refund possible in any case whatsoever.</p>
                    <p className="text-gray-700">Kindly make the payment after reading all terms and conditions, disclaimers and refund policy.</p>
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
                    <p className="text-gray-600">Your trust and privacy are our top priorities</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
                    <ul className="space-y-2 text-gray-700">
                      {[
                        'Personal information (name, email, phone number)',
                        'Financial information (bank details, PAN, Aadhaar)',
                        'Trading preferences and investment goals',
                        'Usage data and platform interactions'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      {[
                        'Provide and improve our trading services',
                        'Process transactions and send notifications',
                        'Comply with legal and regulatory requirements',
                        'Communicate important updates and recommendations'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Information Security</h3>
                    <p className="text-gray-700">We implement industry-standard security measures to protect your personal and financial information. All data is encrypted and stored securely using advanced security protocols.</p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Data Sharing</h3>
                    <p className="text-gray-700">We do not sell, trade, or share your personal information with third parties except as required by law or with your explicit consent. We may share data with trusted service providers who assist in our operations.</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights</h3>
                    <ul className="space-y-2 text-gray-700">
                      {[
                        'Access and update your personal information',
                        'Request deletion of your data',
                        'Opt-out of marketing communications',
                        'File complaints with regulatory authorities'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Information</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="text-gray-900 font-medium">Support@tradesmartly.co.in</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="text-gray-900 font-medium">+91 9591408655</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-600">Address</p>
                          <p className="text-gray-900 font-medium">BANASWADI, BANGALORE  KARNATAKA 560043, INDIA</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Last Updated: January 2025</h4>
                    <p className="text-gray-700">This policy may be updated from time to time. We will notify you of any significant changes via email or platform notifications.</p>
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
