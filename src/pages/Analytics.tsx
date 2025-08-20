import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Chart from '../components/Dashboard/Chart';
import { 
  BarChart3, 
  TrendingUp, 
  Users as UsersIcon, 
  DollarSign, 
  Eye, 
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Calendar,
  Filter
} from 'lucide-react';

const Analytics: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('30d');

  const revenueData = [
    { name: 'Jan', value: 45000, users: 1200, sessions: 8500 },
    { name: 'Feb', value: 52000, users: 1800, sessions: 9200 },
    { name: 'Mar', value: 48000, users: 2400, sessions: 8800 },
    { name: 'Apr', value: 55000, users: 3000, sessions: 10500 },
    { name: 'May', value: 62000, users: 3600, sessions: 11800 },
    { name: 'Jun', value: 58000, users: 4200, sessions: 11200 },
    { name: 'Jul', value: 65000, users: 4800, sessions: 12500 },
  ];

  const userGrowthData = [
    { name: 'Jan', value: 1200, new: 200, returning: 1000 },
    { name: 'Feb', value: 1800, new: 300, returning: 1500 },
    { name: 'Mar', value: 2400, new: 400, returning: 2000 },
    { name: 'Apr', value: 3000, new: 500, returning: 2500 },
    { name: 'May', value: 3600, new: 600, returning: 3000 },
    { name: 'Jun', value: 4200, new: 700, returning: 3500 },
    { name: 'Jul', value: 4800, new: 800, returning: 4000 },
  ];

  const trafficData = [
    { name: 'Direct', value: 35, color: '#3b82f6' },
    { name: 'Organic Search', value: 40, color: '#10b981' },
    { name: 'Social Media', value: 15, color: '#f59e0b' },
    { name: 'Referral', value: 10, color: '#ef4444' },
  ];

  const deviceData = [
    { name: 'Desktop', value: 55, color: '#3b82f6' },
    { name: 'Mobile', value: 35, color: '#10b981' },
    { name: 'Tablet', value: 10, color: '#f59e0b' },
  ];

  const topPages = [
    { page: '/dashboard', views: 12500, unique: 8500, bounce: 25 },
    { page: '/users', views: 8900, unique: 6200, bounce: 32 },
    { page: '/analytics', views: 7200, unique: 4800, bounce: 28 },
    { page: '/settings', views: 5400, unique: 3600, bounce: 45 },
    { page: '/billing', views: 3800, unique: 2400, bounce: 38 },
  ];

  const metrics = [
    {
      title: 'Total Revenue',
      value: '$456,789',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Active Users',
      value: '12,458',
      change: '+8.2%',
      changeType: 'positive',
      icon: UsersIcon,
      color: 'blue'
    },
    {
      title: 'Page Views',
      value: '89,234',
      change: '+15.3%',
      changeType: 'positive',
      icon: Eye,
      color: 'purple'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'yellow'
    },
    {
      title: 'Avg. Session',
      value: '4m 32s',
      change: '+0.5m',
      changeType: 'positive',
      icon: Clock,
      color: 'indigo'
    },
    {
      title: 'Bounce Rate',
      value: '32.1%',
      change: '-2.3%',
      changeType: 'negative',
      icon: MousePointer,
      color: 'red'
    }
  ];

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
              <h1 className="text-2xl font-bold text-gray-900 ml-4 lg:ml-0">Analytics</h1>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Filter className="w-4 h-4" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</p>
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${
                        metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      } mr-1`}>
                        {metric.change}
                      </span>
                      <span className="text-sm text-gray-500">from last month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-${metric.color}-100`}>
                    <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Chart
              data={revenueData}
              title="Revenue Overview"
              color="#10b981"
              type="area"
            />
            <Chart
              data={userGrowthData}
              title="User Growth"
              color="#3b82f6"
              type="line"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Chart
              data={revenueData.map(item => ({ ...item, value: item.sessions }))}
              title="Session Duration"
              color="#8b5cf6"
              type="bar"
            />
            <Chart
              data={revenueData.map(item => ({ ...item, value: Math.random() * 100 }))}
              title="Conversion Rate"
              color="#f59e0b"
              type="line"
            />
          </div>

          {/* Traffic Sources & Device Usage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Traffic Sources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
              <div className="space-y-4">
                {trafficData.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: source.color }}
                      ></div>
                      <span className="text-sm font-medium text-gray-900">{source.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{source.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Usage */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Usage</h3>
              <div className="space-y-4">
                {deviceData.map((device, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: device.color }}
                      ></div>
                      <span className="text-sm font-medium text-gray-900">{device.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{device.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Page
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unique Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bounce Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topPages.map((page, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {page.page}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {page.views.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {page.unique.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {page.bounce}%
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

export default Analytics;
