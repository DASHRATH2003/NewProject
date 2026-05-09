import React from 'react'

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Understanding your rights and responsibilities when using ArthaVeda Research services
          </p>
          <div className="inline-flex items-center text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Last Updated: January 2025
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Sticky Navigation */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 hidden lg:block">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Quick Navigation</h3>
                <div className="flex space-x-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Print</button>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Save PDF</button>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
                    <nav className="space-y-2">
                      {[
                        { id: 'acceptance', label: '1. Acceptance of Terms' },
                        { id: 'service', label: '2. Service Description' },
                        { id: 'responsibilities', label: '3. User Responsibilities' },
                        { id: 'risks', label: '4. Investment Risks' },
                        { id: 'liability', label: '5. Limitation of Liability' },
                        { id: 'subscription', label: '6. Subscription Terms' },
                        { id: 'property', label: '7. Intellectual Property' },
                        { id: 'privacy', label: '8. Privacy & Data' },
                        { id: 'termination', label: '9. Termination' },
                        { id: 'compliance', label: '10. Regulatory Compliance' },
                        { id: 'law', label: '11. Governing Law' },
                        { id: 'contact', label: '12. Contact Information' },
                      ].map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="space-y-12">
                    {/* 1. Acceptance of Terms */}
                    <div id="acceptance" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-xl">1</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
                          <p className="text-gray-700 leading-relaxed">
                            By accessing and using ArthaVeda Research's services, you accept and agree to be bound by the terms 
                            and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 2. Service Description */}
                    <div id="service" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                          <span className="text-emerald-600 font-bold text-xl">2</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Service Description</h2>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            ArthaVeda Research provides comprehensive financial research, trading recommendations, and investment advisory services. Our offerings include:
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              { text: 'Stock market analysis and recommendations', icon: '📈' },
                              { text: 'Portfolio management guidance', icon: '💼' },
                              { text: 'Real-time market data and insights', icon: '⏱️' },
                              { text: 'Educational content and research reports', icon: '📚' },
                            ].map((item, index) => (
                              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                <span className="text-xl mr-3">{item.icon}</span>
                                <span className="text-gray-700">{item.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3. User Responsibilities */}
                    <div id="responsibilities" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                          <span className="text-amber-600 font-bold text-xl">3</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">User Responsibilities</h2>
                          <div className="space-y-3">
                            {[
                              'Provide accurate and complete information during registration',
                              'Maintain the confidentiality of your account credentials',
                              'Use our services only for lawful purposes',
                              'Not share your account access with unauthorized persons',
                              'Comply with all applicable laws and regulations',
                            ].map((item, index) => (
                              <div key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4. Investment Risks and Disclaimers */}
                    <div id="refund" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                          <span className="text-red-600 font-bold text-xl">4</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Investment Risks and Disclaimers</h2>
                          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                            <div className="flex">
                              <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              <div>
                                <p className="text-red-800 font-semibold">Important Risk Disclosure</p>
                                <p className="text-red-700 text-sm mt-1">
                                  Trading and investing in financial markets involves substantial risk and may not be suitable for all investors.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {[
                              'Past performance does not guarantee future results',
                              'All investments carry the risk of loss',
                              'You should only invest money you can afford to lose',
                              'Our recommendations are for educational purposes only',
                              'Always conduct your own research before making investment decisions',
                            ].map((item, index) => (
                              <div key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5. Limitation of Liability */}
                    <div id="returns" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-xl">5</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
                          <p className="text-gray-700 leading-relaxed">
                            ArthaVeda Research shall not be liable for any direct, indirect, incidental, special, or consequential damages 
                            resulting from the use or inability to use our services, including but not limited to trading losses, 
                            missed opportunities, or system downtime.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 6. Subscription and Payment Terms */}
                    <div id="subscription" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                          <span className="text-indigo-600 font-bold text-xl">6</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Subscription and Payment Terms</h2>
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                            <ul className="space-y-3">
                              {[
                                'Subscription fees are charged in advance and are non-refundable except as stated in our refund policy',
                                'Prices are subject to change with 30 days notice',
                                'Auto-renewal can be cancelled at any time before the next billing cycle',
                                'Failure to pay subscription fees may result in service suspension',
                              ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 7. Intellectual Property */}
                    <div id="property" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
                          <span className="text-pink-600 font-bold text-xl">7</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
                          <p className="text-gray-700 leading-relaxed">
                            All content, research, analysis, and recommendations provided by ArthaVeda Research are proprietary and 
                            protected by intellectual property laws. Users may not reproduce, distribute, or commercialize 
                            our content without written permission.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 8. Privacy and Data Protection */}
                    <div id="privacy" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                          <span className="text-teal-600 font-bold text-xl">8</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Privacy and Data Protection</h2>
                          <p className="text-gray-700 leading-relaxed">
                            We are committed to protecting your privacy and personal information. Please refer to our 
                            Privacy Policy for detailed information about how we collect, use, and protect your data.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 9. Termination */}
                    <div id="termination" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-xl">9</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Termination</h2>
                          <p className="text-gray-700 leading-relaxed">
                            Either party may terminate this agreement at any time. ArthaVeda Research reserves the right to 
                            suspend or terminate accounts that violate these terms or engage in fraudulent activities.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 10. Regulatory Compliance */}
                    <div id="compliance" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center">
                          <span className="text-cyan-600 font-bold text-xl">10</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Regulatory Compliance</h2>
                          <p className="text-gray-700 leading-relaxed">
                            ArthaVeda Research operates in compliance with applicable financial regulations. We are registered 
                            with relevant regulatory authorities and follow prescribed guidelines for investment advisory services.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 12. Governing Law */}
                    <div id="law" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                          <span className="text-gray-600 font-bold text-xl">12</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Governing Law</h2>
                          <p className="text-gray-700 leading-relaxed">
                            Above Terms &amp; Conditions shall be governed and construed in accordance with the Indian laws and any disputes arising under these Terms &amp; Conditions shall be subject to the Jurisdiction of Bangalore only.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 13. Contact Information */}
                    <div id="contact" className="scroll-mt-24">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center">
                          <span className="text-gray-700 font-bold text-xl">13</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Information</h2>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            For questions about these terms and conditions, please contact us:
                          </p>
                          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border border-gray-200">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="flex items-center">
                                <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <div>
                                  <p className="text-sm text-gray-600">Email</p>
                                  <p className="text-gray-900 font-medium">Support@arthaveda.co.in</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <div>
                                  <p className="text-sm text-gray-600">Phone</p>
                                  <p className="text-gray-900 font-medium">+91 9591408655</p>
                                </div>
                              </div>
                              <div className="md:col-span-2">
                                <div className="flex items-start">
                                  <svg className="w-5 h-5 text-gray-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                  <div>
                                    <p className="text-sm text-gray-600">Address</p>
                                    <p className="text-gray-900 font-medium">BANASWADI, BANGALORE  KARNATAKA 560043 INDIA</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Notes */}
                  <div className="mt-12 space-y-6">
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">Last Updated:</span> January 2025<br/>
                        These terms may be updated from time to time. Continued use of our services after 
                        changes constitutes acceptance of the new terms.
                      </p>
                    </div>

                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Terms;

