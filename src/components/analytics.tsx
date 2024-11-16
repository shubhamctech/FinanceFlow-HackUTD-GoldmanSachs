// Analytics.tsx
"use client";
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Bar, Line, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

interface Transaction {
  id: number;
  date: string; // ISO date string
  description: string;
  amount: number; // Positive for deposits, negative for withdrawals
  category: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    date: '2023-10-01',
    description: 'Grocery Store',
    amount: -50.25,
    category: 'Groceries',
  },
  {
    id: 2,
    date: '2023-10-03',
    description: 'Salary',
    amount: 2000.0,
    category: 'Income',
  },
  {
    id: 3,
    date: '2023-10-05',
    description: 'Electricity Bill',
    amount: -75.0,
    category: 'Utilities',
  },
  {
    id: 4,
    date: '2023-10-07',
    description: 'Dinner at Restaurant',
    amount: -40.0,
    category: 'Dining',
  },
  {
    id: 5,
    date: '2023-10-10',
    description: 'Online Shopping',
    amount: -120.0,
    category: 'Shopping',
  },
  {
    id: 6,
    date: '2023-10-12',
    description: 'Gym Membership',
    amount: -30.0,
    category: 'Fitness',
  },
  {
    id: 7,
    date: '2023-10-15',
    description: 'Coffee Shop',
    amount: -5.5,
    category: 'Dining',
  },
  {
    id: 8,
    date: '2023-10-18',
    description: 'Freelance Work',
    amount: 500.0,
    category: 'Income',
  },
  {
    id: 9,
    date: '2023-10-20',
    description: 'Movie Tickets',
    amount: -25.0,
    category: 'Entertainment',
  },
  {
    id: 10,
    date: '2023-10-22',
    description: 'Pet Supplies',
    amount: -60.0,
    category: 'Pets',
  },
];

const Analytics: React.FC = () => {
  // Prepare data for charts (similar to previous example)
  
  // Example data preparation for Chart.js
  const categories = [...new Set(transactions.map((t) => t.category))];
  const amounts = categories.map((category) =>
    transactions
      .filter((t) => t.category === category && t.amount < 0)
      .reduce((sum, t) => sum + -t.amount, 0)
  );
  //console.log(categories);
  // console.log(amounts);

  const barData = {
    labels: categories,
    datasets: [
      {
        label: 'Amount Spent',
        data: amounts,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  // Similarly, prepare data for Line and Pie charts

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <Bar data={barData} />
      {/* Include Line and Pie charts as needed */}
    </div>
  );
};

export default Analytics;
