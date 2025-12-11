import React, { useState } from 'react'

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq')
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const faqs = [
    {
      id: 1,
      question: 'How do I open a trading account?',
      answer: 'To open a trading account, click on "Get Started" in the header, fill out the registration form with your details, upload required documents (PAN, Aadhaar, bank statement), and complete the KYC process. Your account will be activated within 24-48 hours.'
    },
    {
      id: 2,
      question: 'What are the brokerage charges?',
      answer: 'Our brokerage charges are competitive and transparent. For equity delivery trades, we charge ₹20 per trade or 0.05% (whichever is lower). For intraday trades, the charge is ₹20 per trade or 0.05% (whichever is lower). There are no hidden charges.'
    },
    {
      id: 3,
      question: 'How do I place my first trade?',
      answer: 'After logging into your account, go to the Trading section. Select the stock you want to trade, choose between Market or Limit order, specify quantity, and click on Buy/Sell. Review the order details and confirm to place the trade.'
    },
    {
      id: 4,
      question: 'What documents are required for account opening?',
      answer: 'You need PAN card, Aadhaar card, bank statement (last 3 months), cancelled cheque, passport size photograph, and income proof (for derivatives trading). All documents should be self-attested and in good condition.'
    },
    {
      id: 5,
      question: 'How do I add funds to my trading account?',
      answer: 'You can add funds through NEFT/RTGS/IMPS transfer to your trading account. Go to Funds section, click on "Add Funds", and follow the instructions. Funds are typically credited within 30 minutes to 2 hours.'
    },
    {
      id: 6,
      question: 'What is the minimum amount required to start trading?',
      answer: 'There is no minimum amount required to open a trading account. However, for equity trading, you need sufficient funds to buy at least one share of the stock you want to trade. For derivatives, the minimum varies based on the contract.'
    },
    {
      id: 7,
      question: 'How do I track my portfolio performance?',
      answer: 'You can track your portfolio performance in the Portfolio section. It shows your total investment value, current market value, profit/loss, and performance over different time periods. You can also view individual stock performance.'
    },
    {
      id: 8,
      question: 'What are the trading hours?',
      answer: 'Equity trading hours are Monday to Friday, 9:15 AM to 3:30 PM IST. Pre-market session is from 9:00 AM to 9:08 AM, and post-market session is from 3:40 PM to 4:00 PM. Markets are closed on weekends and public holidays.'
    }
  ]

  const supportCategories = [
    {
      title: 'Market Analysis',
      description: 'Expert market insights, stock analysis, and trading recommendations',
      icon: '📊',
      contact: '+91 9591408655'
    },
    {
      title: 'Portfolio Advisory',
      description: 'Personalized portfolio guidance and investment strategy consultation',
      icon: '💼',
      contact: '+91 9591408655'
    }
  ]

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for contacting us! We will get back to you within 24 hours.')
    setContactForm({ name: '', email: '', subject: '', message: '' })
  }

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Support Center</h1>
        <p className="text-gray-400">Get help and support for all your trading needs</p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {supportCategories.map((category, index) => (
          <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{category.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{category.description}</p>
            <a 
              href={`tel:${category.contact}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-slate-800/50 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'faq'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'contact'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Contact Us
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'resources'
                ? 'bg-blue-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Resources
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
        {activeTab === 'faq' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-slate-700/30 rounded-lg">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-600/30 transition-all duration-300"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        expandedFaq === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone Support</h4>
                    <p className="text-gray-400">+91 9591408655</p>
                    <p className="text-gray-400 text-sm">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email Support</h4>
                    <p className="text-gray-400">support@tradesmartly.co.in</p>
                    <p className="text-gray-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Office Address</h4>
                    <p className="text-gray-400 font-semibold">BANASWADI, BANGALORE</p>
                    <p className="text-gray-400">KARNATAKA 560043</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Helpful Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">User Guide</h4>
                <p className="text-gray-400 text-sm mb-4">Complete guide to using our trading platform</p>
                <button 
                  onClick={() => {
                    // Create a sample PDF download
                    const link = document.createElement('a');
                    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKFRyYWRpbmcgUGxhdGZvcm0gVXNlciBHdWlkZSkKL0NyZWF0b3IgKFRyYWRlU21hcnQpCi9Qcm9kdWNlciAoVHJhZGVTbWFydCBQREYgR2VuZXJhdG9yKQovQ3JlYXRpb25EYXRlIChEOjIwMjQwMTAxMTIwMDAwKQo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMyAwIFIKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFs0IDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCAyNDQKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgo1MCA3NTAgVGQKKFRyYWRpbmcgUGxhdGZvcm0gVXNlciBHdWlkZSkgVGoKMCAtNTAgVGQKKFdlbGNvbWUgdG8gVHJhZGVTbWFydCEpIFRqCjAgLTMwIFRkCihUaGlzIGd1aWRlIHdpbGwgaGVscCB5b3UgZ2V0IHN0YXJ0ZWQgd2l0aCBvdXIgdHJhZGluZyBwbGF0Zm9ybS4pIFRqCjAgLTMwIFRkCihGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdmlzaXQgb3VyIHN1cHBvcnQgc2VjdGlvbi4pIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAxNzQgMDAwMDAgbiAKMDAwMDAwMDIyMSAwMDAwMCBuIAowMDAwMDAwMjc4IDAwMDAwIG4gCjAwMDAwMDAzNzggMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDIgMCBSCj4+CnN0YXJ0eHJlZgo2NzIKJSVFT0Y=';
                    link.download = 'TradeSmart-User-Guide.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    alert('User Guide PDF downloaded successfully!');
                  }}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium cursor-pointer"
                >
                  Download PDF →
                </button>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Market Reports</h4>
                <p className="text-gray-400 text-sm mb-4">Daily market analysis and research reports</p>
                <button 
                  onClick={() => {
                    // Create a modal or redirect to reports page
                    const reports = [
                      {
                        title: "Daily Market Analysis - " + new Date().toLocaleDateString(),
                        summary: "Today's market showed bullish trends with strong performance in IT and Banking sectors.",
                        author: "Market Research Team",
                        date: new Date().toLocaleDateString()
                      },
                      {
                        title: "Weekly Sector Report - Technology",
                        summary: "Technology sector continues to outperform with AI and cloud computing leading the growth.",
                        author: "Sector Analysis Team",
                        date: new Date(Date.now() - 2*24*60*60*1000).toLocaleDateString()
                      },
                      {
                        title: "MCX Commodity Outlook",
                        summary: "Gold and Silver showing strong support levels, crude oil facing resistance.",
                        author: "Commodity Research Team",
                        date: new Date(Date.now() - 1*24*60*60*1000).toLocaleDateString()
                      }
                    ];
                    
                    let reportContent = "📊 MARKET REPORTS\n\n";
                    reports.forEach((report, index) => {
                      reportContent += `${index + 1}. ${report.title}\n`;
                      reportContent += `   ${report.summary}\n`;
                      reportContent += `   By: ${report.author} | Date: ${report.date}\n\n`;
                    });
                    
                    alert(reportContent + "\nFor detailed reports, please contact our research team.");
                  }}
                  className="text-emerald-400 hover:text-emerald-300 text-sm font-medium cursor-pointer"
                >
                  View Reports →
                </button>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Trading Tips</h4>
                <p className="text-gray-400 text-sm mb-4">Expert tips and strategies for successful trading</p>
                <button 
                  onClick={() => {
                    // Create trading tips and articles content
                    const articles = [
                      {
                        title: "5 Essential Trading Rules for Beginners",
                        content: "1. Never invest more than you can afford to lose\n2. Always use stop-loss orders\n3. Diversify your portfolio\n4. Do your research before investing\n5. Keep emotions in check",
                        author: "Trading Expert Team",
                        readTime: "5 min read"
                      },
                      {
                        title: "Understanding Market Volatility",
                        content: "Market volatility is the degree of variation in trading prices. Learn how to:\n• Identify volatile periods\n• Use volatility to your advantage\n• Protect your investments during high volatility\n• Time your entries and exits",
                        author: "Market Analysis Team",
                        readTime: "7 min read"
                      },
                      {
                        title: "MCX Trading Strategies",
                        content: "Commodity trading tips:\n• Gold: Best trading hours 10 AM - 3 PM\n• Silver: Follow international trends\n• Crude Oil: Monitor global news\n• Base Metals: Check industrial demand",
                        author: "Commodity Specialist",
                        readTime: "6 min read"
                      }
                    ];
                    
                    let articleContent = "📚 TRADING TIPS & ARTICLES\n\n";
                    articles.forEach((article, index) => {
                      articleContent += `${index + 1}. ${article.title}\n`;
                      articleContent += `   ${article.readTime} | By: ${article.author}\n`;
                      articleContent += `   ${article.content}\n\n`;
                    });
                    
                    alert(articleContent + "\nFor more detailed articles, visit our Research section.");
                  }}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium cursor-pointer"
                >
                  Read Articles →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Support
