import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <TrendingUp size={24} />
          <span className="text-xl font-bold">FinancePro</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Dashboard</Link></li>
            <li><Link to="/investment-analysis" className="hover:text-blue-200">Investment Analysis</Link></li>
            <li><Link to="/expense-tracking" className="hover:text-blue-200">Expense Tracking</Link></li>
            <li><Link to="/budgeting" className="hover:text-blue-200">Budgeting</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;