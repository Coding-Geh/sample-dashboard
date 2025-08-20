import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { fetchStatsStart, fetchStatsSuccess, fetchStatsFailure } from '../store/slices/dashboardSlice';
import Sidebar from '../components/Layout/Sidebar';
import StatsCard from '../components/Dashboard/StatsCard';
import Chart from '../components/Dashboard/Chart';
import { 
  Users, 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  Activity,
  Target,
  Bell,
  Search,
  Download
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { stats, isLoading } = useSelector((state: RootState) => state.dashboard);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    const fetchStats = async () => {
      dispatch(fetchStatsStart());
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockStats = {
          totalUsers: 12458,
          totalRevenue: 45678,
          activeSubscriptions: 8923,
          monthlyGrowth: 12.5,
          conversionRate: 3.2,
          churnRate: 1.8,
        };
        
        dispatch(fetchStatsSuccess(mockStats));
      } catch (error) {
        dispatch(fetchStatsFailure('Failed to fetch stats'));
      }
    };

    fetchStats();
  }, [dispatch]);

  const chartData = [
    { name: 'Jan', value: 4000, users: 1200, revenue: 45000 },
    { name: 'Feb', value: 3000, users: 1800, revenue: 52000 },
    { name: 'Mar', value: 2000, users: 2400, revenue: 48000 },
    { name: 'Apr', value: 2780, users: 3000, revenue: 55000 },
    { name: 'May', value: 1890, users: 3600, revenue: 62000 },
    { name: 'Jun', value: 2390, users: 4200, revenue: 58000 },
    { name: 'Jul', value: 3490, users: 4800, revenue: 65000 },
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'subscribed to Pro plan', time: '2 minutes ago', type: 'subscription' },
    { user: 'Jane Smith', action: 'cancelled subscription', time: '1 hour ago', type: 'cancellation' },
    { user: 'Mike Johnson', action: 'upgraded to Enterprise', time: '3 hours ago', type: 'upgrade' },
    { user: 'Sarah Wilson', action: 'completed payment', time: '5 hours ago', type: 'payment' },
    { user: 'Alex Brown', action: 'requested refund', time: '1 day ago', type: 'refund' },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 space-y-4 sm:space-y-0">
            <div className="flex items-center justify-between sm:justify-start">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 ml-4 lg:ml-0">Dashboard</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Time Range Filter */}
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
              
              {/* Export Button */}
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 sm:p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <StatsCard
              title="Total Users"
              value={stats.totalUsers.toLocaleString()}
              change={8.2}
              icon={Users}
              color="blue"
            />
            <StatsCard
              title="Total Revenue"
              value={`$${stats.totalRevenue.toLocaleString()}`}
              change={12.5}
              icon={DollarSign}
              color="green"
            />
            <StatsCard
              title="Active Subscriptions"
              value={stats.activeSubscriptions.toLocaleString()}
              change={-2.1}
              icon={CreditCard}
              color="yellow"
            />
            <StatsCard
              title="Monthly Growth"
              value={`${stats.monthlyGrowth}%`}
              change={15.3}
              icon={TrendingUp}
              color="purple"
            />
            <StatsCard
              title="Conversion Rate"
              value={`${stats.conversionRate}%`}
              change={5.7}
              icon={Target}
              color="indigo"
            />
            <StatsCard
              title="Churn Rate"
              value={`${stats.churnRate}%`}
              change={-0.8}
              icon={Activity}
              color="red"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Chart
              data={chartData}
              title="Revenue Overview"
              color="#10b981"
              type="area"
            />
            <Chart
              data={chartData.map(item => ({ ...item, value: item.users }))}
              title="User Growth"
              color="#3b82f6"
              type="line"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Chart
              data={chartData.map(item => ({ ...item, value: item.revenue }))}
              title="Monthly Revenue"
              color="#8b5cf6"
              type="bar"
            />
            <Chart
              data={chartData.map(item => ({ ...item, value: Math.random() * 100 }))}
              title="Conversion Rate"
              color="#f59e0b"
              type="line"
            />
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-0">Recent Activity</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View all
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'subscription' ? 'bg-green-100' :
                    activity.type === 'cancellation' ? 'bg-red-100' :
                    activity.type === 'upgrade' ? 'bg-blue-100' :
                    activity.type === 'payment' ? 'bg-yellow-100' :
                    'bg-gray-100'
                  }`}>
                    <span className={`text-xs font-medium ${
                      activity.type === 'subscription' ? 'text-green-600' :
                      activity.type === 'cancellation' ? 'text-red-600' :
                      activity.type === 'upgrade' ? 'text-blue-600' :
                      activity.type === 'payment' ? 'text-yellow-600' :
                      'text-gray-600'
                    }`}>
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    activity.type === 'subscription' ? 'bg-green-100 text-green-700' :
                    activity.type === 'cancellation' ? 'bg-red-100 text-red-700' :
                    activity.type === 'upgrade' ? 'bg-blue-100 text-blue-700' :
                    activity.type === 'payment' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {activity.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
