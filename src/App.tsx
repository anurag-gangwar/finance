import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import InvestmentAnalysis from './components/InvestmentAnalysis';
import ExpenseTracking from './components/ExpenseTracking';
import Budgeting from './components/Budgeting';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/investment-analysis" element={<InvestmentAnalysis />} />
            <Route path="/expense-tracking" element={<ExpenseTracking />} />
            <Route path="/budgeting" element={<Budgeting />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;