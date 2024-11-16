"use client";
// Analytics.tsx
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

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

export default function Analytics(){
  // Calculate total spending per category
  const spendingByCategory = transactions.reduce((acc, transaction) => {
    if (transaction.amount < 0) {
      const category = transaction.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += -transaction.amount; // Convert to positive value
    }
    return acc;
  }, {} as { [key: string]: number });

  const categoryLabels = Object.keys(spendingByCategory);
  const categoryAmounts = categoryLabels.map(
    (category) => spendingByCategory[category]
  );

  // Prepare data for balance over time
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  let balance = 1000; // Starting balance
  const balanceOverTime = sortedTransactions.map((transaction) => {
    balance += transaction.amount;
    return {
      date: transaction.date,
      balance: parseFloat(balance.toFixed(2)),
    };
  });

  const balanceLabels = balanceOverTime.map((entry) =>
    new Date(entry.date).toLocaleDateString()
  );
  const balanceData = balanceOverTime.map((entry) => entry.balance);

  // Colors for the charts
  const COLORS = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff8042',
    '#8dd1e1',
    '#d0ed57',
    '#a4de6c',
  ];

  // Bar Chart Data
  const barData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Amount Spent',
        data: categoryAmounts,
        backgroundColor: COLORS,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Spending by Category',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.parsed.y;
            return `$${value.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number) => `$${value}`,
        },
      },
    },
  };

  // Line Chart Data
  const lineData = {
    responsive:true, 
    labels: balanceLabels,
    datasets: [
      {
        label: 'Balance',
        data: balanceData,
        fill: false,
        borderColor: '#82ca9d',
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Balance Over Time',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.parsed.y;
            return `$${value.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number) => `$${value}`,
        },
      },
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
    },
  };

  // Pie Chart Data
  const pieData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Spending Distribution',
        data: categoryAmounts,
        backgroundColor: COLORS,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Spending Distribution',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: $${value.toFixed(2)}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Analytics Dashboard</h2>

      {/* Bar Chart: Spending by Category */}
      <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
        <Bar data={barData} options={barOptions} />
      </div>

      {/* Line Chart: Balance Over Time */}
      <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
        <Line data={lineData} options={lineOptions} />
      </div>

      {/* Pie Chart: Spending Distribution */}
      <div style={{ maxWidth: '500px', marginBottom: '40px' }}>
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};