import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import { 
  CreditCard, 
  DollarSign, 
  Calendar, 
  Download, 
  Plus, 
  Edit, 
  Trash2,
  Check,
  X,
  AlertCircle,
  Clock,
  Zap
} from 'lucide-react';

interface Subscription {
  id: string;
  name: string;
  price: number;
  interval: 'monthly' | 'yearly';
  status: 'active' | 'cancelled' | 'past_due';
  nextBilling: string;
  features: string[];
}

interface Invoice {
  id: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  date: string;
  description: string;
}

const Billing: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const currentSubscription: Subscription = {
    id: '1',
    name: 'Pro Plan',
    price: 29,
    interval: 'monthly',
    status: 'active',
    nextBilling: '2024-02-15',
    features: [
      'Unlimited users',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access'
    ]
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 9,
      interval: 'monthly',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 29,
      interval: 'monthly',
      features: [
        'Unlimited users',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 99,
      interval: 'monthly',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom development',
        'SLA guarantee',
        'On-premise option'
      ],
      popular: false
    }
  ];

  const invoices: Invoice[] = [
    {
      id: 'INV-001',
      amount: 29,
      status: 'paid',
      date: '2024-01-15',
      description: 'Pro Plan - January 2024'
    },
    {
      id: 'INV-002',
      amount: 29,
      status: 'paid',
      date: '2023-12-15',
      description: 'Pro Plan - December 2023'
    },
    {
      id: 'INV-003',
      amount: 29,
      status: 'paid',
      date: '2023-11-15',
      description: 'Pro Plan - November 2023'
    },
    {
      id: 'INV-004',
      amount: 29,
      status: 'pending',
      date: '2024-02-15',
      description: 'Pro Plan - February 2024'
    }
  ];

  const paymentMethods = [
    {
      id: '1',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: '2',
      type: 'card',
      last4: '5555',
      brand: 'Mastercard',
      expiry: '08/26',
      isDefault: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'past_due': return 'bg-yellow-100 text-yellow-800';
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-900 ml-4 lg:ml-0">Billing</h1>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Plus className="w-4 h-4" />
              <span>Add Payment Method</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Current Subscription */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Current Subscription</h2>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(currentSubscription.status)}`}>
                {currentSubscription.status}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{currentSubscription.name}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  ${currentSubscription.price}
                  <span className="text-sm font-normal text-gray-500">/{currentSubscription.interval}</span>
                </p>
                <p className="text-sm text-gray-500">Next billing: {new Date(currentSubscription.nextBilling).toLocaleDateString()}</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Features included:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentSubscription.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-gray-200">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Edit className="w-4 h-4" />
                <span>Change Plan</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <X className="w-4 h-4" />
                <span>Cancel Subscription</span>
              </button>
            </div>
          </div>

          {/* Plans */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div key={plan.id} className={`relative bg-white rounded-xl shadow-sm border-2 p-6 ${
                  plan.popular ? 'border-blue-500' : 'border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-1">
                      ${plan.price}
                      <span className="text-sm font-normal text-gray-500">/{plan.interval}</span>
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {plan.id === selectedPlan ? 'Current Plan' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Methods</h2>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <CreditCard className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {method.brand} •••• {method.last4}
                      </p>
                      <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {method.isDefault && (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Default
                      </span>
                    )}
                    <button className="text-blue-600 hover:text-blue-700 p-1">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-700 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Invoices */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Invoices</h2>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Download className="w-4 h-4" />
                <span>Download All</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Invoice
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{invoice.id}</div>
                          <div className="text-sm text-gray-500">{invoice.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${invoice.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(invoice.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Download className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Billing;
