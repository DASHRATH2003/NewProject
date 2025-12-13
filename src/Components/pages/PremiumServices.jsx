import React, { useState } from "react";
import { Link } from "react-router-dom";

const PremiumServices = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const services = [
    {
      id: "premium-trading",
      title: "STOCK CASH",
      description: "Advanced trading strategies with premium market insights",
      monthly: 4999,
      quarterly: 12999,
      features: [
        "5-7 premium stock recommendations daily",
        "Advanced technical analysis",
        "Real-time WhatsApp alerts",
        "Priority customer support",
        "Risk to reward ratio 1:3",
        "Market timing precision",
        "Intraday & swing trading calls",
        "Stop loss & target guidance",
      ],
    },
    {
      id: "wealth-management",
      title: "STOCK OPTIONS",
      description:
        "Comprehensive wealth management for high net worth individuals",
      monthly: 9999,
      quarterly: 24999,
      features: [
        "Personalized investment strategy",
        "Portfolio diversification",
        "Tax optimization planning",
        "Estate planning guidance",
        "Regular portfolio review",
        "Dedicated relationship manager",
        "Alternative investment options",
        "Quarterly performance reports",
      ],
    },
    {
      id: "personal-advisory",
      title: "INDEX FUTURES",
      description: "One-on-one financial advisory services",
      monthly: 7999,
      quarterly: 19999,
      features: [
        "Personal financial advisor",
        "Customized investment plans",
        "Goal-based financial planning",
        "Regular consultation calls",
        "Investment tracking",
        "Market outlook discussions",
        "Risk profiling",
        "Financial health checkup",
      ],
    },
    {
      id: "tax-planning",
      title: "INDEX OPTIONS",
      description: "Strategic tax planning and optimization services",
      monthly: 2999,
      quarterly: 7999,
      features: [
        "Tax-saving investment advice",
        "Capital gains optimization",
        "Tax-efficient portfolio structuring",
        "Annual tax planning",
        "Documentation assistance",
        "Tax filing support",
        "LTCG & STCG planning",
        "Section 80C optimization",
      ],
    },
    {
      id: "mcx-bullions-premium",
      title: "MCX BULLIONS",
      description: "Premium gold and silver trading with advanced strategies",
      monthly: 7999,
      quarterly: 19999,
      features: [
        "3-4 premium recommendations daily",
        "Risk to reward ratio 1:3",
        "Advanced bullion market analysis",
        "Real-time WhatsApp alerts",
        "Priority support",
        "Market timing precision",
        "Intraday & swing trading calls",
        "Stop loss & target guidance",
      ],
    },
    {
      id: "mcx-basemetal-premium",
      title: "MCX BASEMETAL",
      description: "Premium base metal trading with expert analysis",
      monthly: 6999,
      quarterly: 17999,
      features: [
        "3 premium recommendations daily",
        "Risk to reward ratio 1:3",
        "Advanced base metal insights",
        "Real-time WhatsApp alerts",
        "Priority support",
        "Market timing precision",
        "Intraday & swing trading calls",
        "Stop loss & target guidance",
      ],
    },
    {
      id: "mcx-energy-premium",
      title: "MCX ENERGY",
      description: "Premium crude oil and natural gas trading strategies",
      monthly: 6499,
      quarterly: 16999,
      features: [
        "3 premium recommendations daily",
        "Risk to reward ratio 1:3",
        "Advanced energy market analysis",
        "Real-time WhatsApp alerts",
        "Priority support",
        "Market timing precision",
        "Intraday & swing trading calls",
        "Stop loss & target guidance",
      ],
    },
  ];

  const handlePayment = (serviceId, plan, amountOverride) => {
    const service = services.find((s) => s.id === serviceId);
    const amount = amountOverride ?? (plan === "monthly" ? service?.monthly : service?.quarterly);
    window.location.href = `/payment?service=${serviceId}&plan=${plan}&amount=${amount}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-[-70px] text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Premium Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We will be providing you with 100% intraday calls with proper stop loss and target using our technical & fundamental analysis. There will be 2 recommendations where a recommendation will have a risk to reward ratio around 1.5:2.
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full px-6 py-2">
            <svg
              className="w-5 h-5 text-emerald-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-emerald-400 font-semibold">
              Premium Quality Guaranteed
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div class="bg-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div class="absolute -top-2 -right-2">
                <span class="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Premium
                </span>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">STOCK CASH</h3>
                <p class="text-sm text-gray-600 mb-4">
                  Advanced trading strategies with premium market insights
                </p>
              </div>
              <div class="text-center mb-6">
                <div class="mb-4">
                  <div class="text-sm text-gray-600 mb-1">Monthly</div>
                  <div class="text-2xl font-bold text-gray-900">₹14,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors" onClick={() => handlePayment('premium-trading','monthly',14999)}>
                    Buy Premium
                  </button>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">Quarterly</div>
                  <div class="text-2xl font-bold text-gray-900">₹29,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors" onClick={() => handlePayment('premium-trading','quarterly',29999)}>
                    Buy Premium
                  </button>
                </div>
              </div>
              <div class="border-t border-teal-200 pt-4">
                <div class="text-sm text-gray-600 mb-2">Premium Features:</div>
                <ul class="space-y-2">
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Live premium recommendations daily
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Risk to reward ratio 1:3
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Real-time WhatsApp alerts
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Priority customer support
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Advanced technical analysis
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Market timing precision
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Stop loss &amp; target guidance
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div class="absolute -top-2 -right-2">
                <span class="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Premium
                </span>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">
                  STOCK OPTIONS
                </h3>
                <p class="text-sm text-gray-600 mb-4">
                  Comprehensive wealth management for high net worth individuals
                </p>
              </div>
              <div class="text-center mb-6">
                <div class="mb-4">
                  <div class="text-sm text-gray-600 mb-1">Monthly</div>
                  <div class="text-2xl font-bold text-gray-900">₹19,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors" onClick={() => handlePayment('wealth-management','monthly',19999)}>
                    Buy Premium
                  </button>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">Quarterly</div>
                  <div class="text-2xl font-bold text-gray-900">₹44,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors" onClick={() => handlePayment('wealth-management','quarterly',44999)}>
                    Buy Premium
                  </button>
                </div>
              </div>
              <div class="border-t border-teal-200 pt-4">
                <div class="text-sm text-gray-600 mb-2">Premium Features:</div>
                <ul class="space-y-2">
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Personalized investment advice
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Portfolio optimization
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Tax optimization planning
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Dedicated relationship manager
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Quarterly performance reviews
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Exclusive research reports
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Priority phone support
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div class="absolute -top-2 -right-2">
                <span class="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Premium
                </span>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">
                  STOCK FURURE
                </h3>
                <p class="text-sm text-gray-600 mb-4">
                  Unlock Profitable Trading with Expert Strategies &amp;
                  Exclusive.
                </p>
              </div>
              <div class="text-center mb-6">
                <div class="mb-4">
                  <div class="text-sm text-gray-600 mb-1">Monthly</div>
                  <div class="text-2xl font-bold text-gray-900">₹24,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors" onClick={() => handlePayment('personal-advisory','monthly',24999)}>
                    Buy Premium
                  </button>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">Quarterly</div>
                  <div class="text-2xl font-bold text-gray-900">₹59,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors" onClick={() => handlePayment('personal-advisory','quarterly',59999)}>
                    Buy Premium
                  </button>
                </div>
              </div>
              <div class="border-t border-teal-200 pt-4">
                <div class="text-sm text-gray-600 mb-2">Premium Features:</div>
                <ul class="space-y-2">
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Daily Premium Recommendations
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    High Reward Potential
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Real-time WhatsApp alerts
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Real-time updates directly on WhatsApp
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Priority assistance whenever you need it
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Market timing precision
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Stop loss &amp; target guidance
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div class="absolute -top-2 -right-2">
                <span class="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Premium
                </span>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">
                  INDEX FUTURES
                </h3>
                <p class="text-sm text-gray-600 mb-4">
                  Ultra-premium financial advisory services
                </p>
              </div>
              <div class="text-center mb-6">
                <div class="mb-4">
                  <div class="text-sm text-gray-600 mb-1">Monthly</div>
                  <div class="text-2xl font-bold text-gray-900">₹14,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors" onClick={() => handlePayment('tax-planning','monthly',14999)}>
                    Buy Premium
                  </button>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">Quarterly</div>
                  <div class="text-2xl font-bold text-gray-900">₹39,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors" onClick={() => handlePayment('tax-planning','quarterly',39999)}>
                    Buy Premium
                  </button>
                </div>
              </div>
              <div class="border-t border-teal-200 pt-4">
                <div class="text-sm text-gray-600 mb-2">Premium Features:</div>
                <ul class="space-y-2">
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Personal financial advisor
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Customized investment plans
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Risk assessment &amp; management
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Investment tracking
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Market trend analysis
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    VIP portfolio
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Personalized tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div class="absolute -top-2 -right-2">
                <span class="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Premium
                </span>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">
                  INDEX OPTIONS
                </h3>
                <p class="text-sm text-gray-600 mb-4">
                  Strategic tax planning and optimization services
                </p>
              </div>
              <div class="text-center mb-6">
                <div class="mb-4">
                  <div class="text-sm text-gray-600 mb-1">Monthly</div>
                  <div class="text-2xl font-bold text-gray-900">₹19,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors" onClick={() => handlePayment('mcx-bullions-premium','monthly',19999)}>
                    Buy Premium
                  </button>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">Quarterly</div>
                  <div class="text-2xl font-bold text-gray-900">₹49,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors" onClick={() => handlePayment('mcx-bullions-premium','quarterly',49999)}>
                    Buy Premium
                  </button>
                </div>
              </div>
              <div class="border-t border-teal-200 pt-4">
                <div class="text-sm text-gray-600 mb-2">Premium Features:</div>
                <ul class="space-y-2">
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Comprehensive tax advice
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Capital gains optimization
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Investment structure planning
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Tax-efficient strategies
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Filing support
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Long-term planning
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Professional guidance
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div class="absolute -top-2 -right-2">
                <span class="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Premium
                </span>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">
                  MCX BULLIONS
                </h3>
                <p class="text-sm text-gray-600 mb-4">
                  Premium gold and silver trading with advanced{" "}
                </p>
              </div>
              <div class="text-center mb-6">
                <div class="mb-4">
                  <div class="text-sm text-gray-600 mb-1">Monthly</div>
                  <div class="text-2xl font-bold text-gray-900">₹24,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors" onClick={() => handlePayment('mcx-basemetal-premium','monthly',14999)}>
                    Buy Premium
                  </button>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">Quarterly</div>
                  <div class="text-2xl font-bold text-gray-900">₹49,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors" onClick={() => handlePayment('mcx-basemetal-premium','quarterly',34999)}>
                    Buy Premium
                  </button>
                </div>
              </div>
              <div class="border-t border-teal-200 pt-4">
                <div class="text-sm text-gray-600 mb-2">Premium Features:</div>
                <ul class="space-y-2">
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    3-4 premium recommendations daily
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Risk to reward ratio 1:3
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Precious metals analysis
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Real-time WhatsApp alerts
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Market volatility insights
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Hedging &amp; swing trading calls
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Stop loss &amp; target guidance
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div class="absolute -top-2 -right-2">
                <span class="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Premium
                </span>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">
                  MCX BASEMETAL
                </h3>
                <p class="text-sm text-gray-600 mb-4">
                  Premium base metal trading with expert analysis
                </p>
              </div>
              <div class="text-center mb-6">
                <div class="mb-4">
                  <div class="text-sm text-gray-600 mb-1">Monthly</div>
                  <div class="text-2xl font-bold text-gray-900">₹14,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors" onClick={() => handlePayment('mcx-energy-premium','monthly',14999)}>
                    Buy Premium
                  </button>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">Quarterly</div>
                  <div class="text-2xl font-bold text-gray-900">₹34,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors" onClick={() => handlePayment('mcx-energy-premium','quarterly',34999)}>
                    Buy Premium
                  </button>
                </div>
              </div>
              <div class="border-t border-teal-200 pt-4">
                <div class="text-sm text-gray-600 mb-2">Premium Features:</div>
                <ul class="space-y-2">
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    3 premium recommendations daily
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Risk to reward ratio 1:3
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Base metal WhatsApp alerts
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Market analysis
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Technical indicators
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Hedging &amp; swing trading calls
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Stop loss &amp; target guidance
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div class="absolute -top-2 -right-2">
                <span class="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Premium
                </span>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">MCX ENERGY</h3>
                <p class="text-sm text-gray-600 mb-4">
                  Premium crude oil and natural gas trading strategies
                </p>
              </div>
              <div class="text-center mb-6">
                <div class="mb-4">
                  <div class="text-sm text-gray-600 mb-1">Monthly</div>
                  <div class="text-2xl font-bold text-gray-900">₹14,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors">
                    Buy Premium
                  </button>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">Quarterly</div>
                  <div class="text-2xl font-bold text-gray-900">₹34,999/-</div>
                  <button class="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors">
                    Buy Premium
                  </button>
                </div>
              </div>
              <div class="border-t border-teal-200 pt-4">
                <div class="text-sm text-gray-600 mb-2">Premium Features:</div>
                <ul class="space-y-2">
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    3 premium recommendations daily
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Risk to reward ratio 1:3
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Advanced energy market analysis
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Real-time WhatsApp alerts
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Crude oil volatility insights
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Trading timing precision
                  </li>
                  <li class="flex items-start text-sm text-gray-700">
                    <svg
                      class="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Stop loss &amp; target guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Premium Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Advanced Analytics
              </h3>
              <p className="text-gray-600">
                Get access to premium market analytics and insights
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Priority Support
              </h3>
              <p className="text-gray-600">
                24/7 priority customer support for premium members
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Guaranteed Results
              </h3>
              <p className="text-gray-600">
                Higher success rate with premium trading strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Go Premium?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful traders who have upgraded to our
            premium services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/support"
              className="border border-emerald-500 text-emerald-400 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300"
            >
              Contact Premium Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumServices;
