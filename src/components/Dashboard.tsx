import React from 'react';
import { PieChart, DollarSign, TrendingUp, Target } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Financial Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Balance"
          value="$25,000"
          icon={<DollarSign className="text-green-500" size={24} />}
        />
        <DashboardCard
          title="Monthly Income"
          value="$5,000"
          icon={<TrendingUp className="text-blue-500" size={24} />}
        />
        <DashboardCard
          title="Monthly Expenses"
          value="$3,500"
          icon={<PieChart className="text-red-500" size={24} />}
        />
        <DashboardCard
          title="Savings Goal"
          value="$10,000"
          icon={<Target className="text-purple-500" size={24} />}
        />
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {icon}
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Dashboard;