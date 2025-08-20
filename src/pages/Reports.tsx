import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Chart from '../components/Dashboard/Chart';
import { 
  FileText, 
  Download, 
  Plus, 
  Calendar, 
  Filter, 
  Eye, 
  Edit, 
  Trash2,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';

interface Report {
  id: string;
  name: string;
  type: 'revenue' | 'users' | 'analytics' | 'custom';
  status: 'completed' | 'processing' | 'failed';
  createdAt: string;
  updatedAt: string;
  size: string;
  format: 'pdf' | 'csv' | 'excel';
}

const Reports: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedReportType, setSelectedReportType] = useState('all');
  const [dateRange, setDateRange] = useState('30d');

  const reports: Report[] = [
    {
      id: '1',
      name: 'Monthly Revenue Report',
      type: 'revenue',
      status: 'completed',
      createdAt: '2024-01-20',
      updatedAt: '2024-01-20',
      size: '2.4 MB',
      format: 'pdf'
    },
    {
      id: '2',
      name: 'User Growth Analysis',
      type: 'users',
      status: 'completed',
      createdAt: '2024-01-19',
      updatedAt: '2024-01-19',
      size: '1.8 MB',
      format: 'csv'
    },
    {
      id: '3',
      name: 'Q4 Analytics Summary',
      type: 'analytics',
      status: 'processing',
      createdAt: '2024-01-20',
      updatedAt: '2024-01-20',
      size: '0 MB',
      format: 'excel'
    },
    {
      id: '4',
      name: 'Custom Marketing Report',
      type: 'custom',
      status: 'failed',
      createdAt: '2024-01-18',
      updatedAt: '2024-01-18',
      size: '0 MB',
      format: 'pdf'
    },
    {
      id: '5',
      name: 'Weekly Performance Report',
      type: 'analytics',
      status: 'completed',
      createdAt: '2024-01-17',
      updatedAt: '2024-01-17',
      size: '3.1 MB',
      format: 'pdf'
    }
  ];

  const reportTemplates = [
    {
      id: 'revenue',
      name: 'Revenue Report',
      description: 'Comprehensive revenue analysis with trends and projections',
      icon: DollarSign,
      color: 'green'
    },
    {
      id: 'users',
      name: 'User Report',
      description: 'User growth, engagement, and retention metrics',
      icon: Users,
      color: 'blue'
    },
    {
      id: 'analytics',
      name: 'Analytics Report',
      description: 'Website traffic, conversion rates, and performance metrics',
      icon: BarChart3,
      color: 'purple'
    },
    {
      id: 'custom',
      name: 'Custom Report',
      description: 'Create your own custom report with specific metrics',
      icon: FileText,
      color: 'gray'
    }
  ];

  const chartData = [
    { name: 'Jan', value: 45000, users: 1200, conversions: 85 },
    { name: 'Feb', value: 52000, users: 1800, conversions: 92 },
    { name: 'Mar', value: 48000, users: 2400, conversions: 88 },
    { name: 'Apr', value: 55000, users: 3000, conversions: 105 },
    { name: 'May', value: 62000, users: 3600, conversions: 118 },
    { name: 'Jun', value: 58000, users: 4200, conversions: 112 },
    { name: 'Jul', value: 65000, users: 4800, conversions: 125 },
  ];

  const filteredReports = reports.filter(report => {
    return selectedReportType === 'all' || report.type === selectedReportType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'processing': return Clock;
      case 'failed': return XCircle;
      default: return AlertCircle;
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'pdf': return 'bg-red-100 text-red-800';
      case 'csv': return 'bg-green-100 text-green-800';
      case 'excel': return 'bg-blue-100 text-blue-800';
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
              <h1 className="text-2xl font-bold text-gray-900 ml-4 lg:ml-0">Reports</h1>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Plus className="w-4 h-4" />
              <span>Generate Report</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Reports</p>
                  <p className="text-2xl font-bold text-gray-900">{reports.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {reports.filter(r => r.status === 'completed').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Processing</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {reports.filter(r => r.status === 'processing').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Failed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {reports.filter(r => r.status === 'failed').length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Report Templates */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Report Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reportTemplates.map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className={`w-12 h-12 bg-${template.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <template.icon className={`w-6 h-6 text-${template.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                  <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Generate
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Chart
              data={chartData}
              title="Revenue Trends"
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

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Report Type Filter */}
                <select
                  value={selectedReportType}
                  onChange={(e) => setSelectedReportType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  <option value="revenue">Revenue</option>
                  <option value="users">Users</option>
                  <option value="analytics">Analytics</option>
                  <option value="custom">Custom</option>
                </select>
                
                {/* Date Range Filter */}
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
              </div>
              
              <div className="text-sm text-gray-500">
                {filteredReports.length} of {reports.length} reports
              </div>
            </div>
          </div>

          {/* Reports Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Report
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Format
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredReports.map((report) => {
                    const StatusIcon = getStatusIcon(report.status);
                    return (
                      <tr key={report.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{report.name}</div>
                            <div className="text-sm text-gray-500">ID: {report.id}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                            {report.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <StatusIcon className="w-4 h-4 mr-2" />
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                              {report.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getFormatColor(report.format)}`}>
                            {report.format.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {report.size}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(report.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            {report.status === 'completed' && (
                              <button className="text-blue-600 hover:text-blue-900 p-1">
                                <Download className="w-4 h-4" />
                              </button>
                            )}
                            <button className="text-green-600 hover:text-green-900 p-1">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-blue-600 hover:text-blue-900 p-1">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900 p-1">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;
