"use client"

import * as React from "react"
import { useState } from "react";
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Bar, BarChart, CartesianGrid, XAxis, Line, LineChart } from "recharts"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface Transaction{
  id: number;
  date: string;
  description: string;
  amount: number;
  category: string;
}

const transactions: Transaction[] = [
    {
      "id": 1,
      "date": "2023-01-05",
      "description": "Salary",
      "amount": 3000.0,
      "category": "Income"
    },
    {
      "id": 2,
      "date": "2023-01-07",
      "description": "Rent Payment",
      "amount": -1200.0,
      "category": "Housing"
    },
    {
      "id": 3,
      "date": "2023-01-10",
      "description": "Grocery Store",
      "amount": -150.75,
      "category": "Groceries"
    },
    {
      "id": 4,
      "date": "2023-01-12",
      "description": "Electricity Bill",
      "amount": -90.0,
      "category": "Utilities"
    },
    {
      "id": 5,
      "date": "2023-01-15",
      "description": "Internet Bill",
      "amount": -60.0,
      "category": "Utilities"
    },
    {
      "id": 6,
      "date": "2023-01-18",
      "description": "Dinner at Restaurant",
      "amount": -85.5,
      "category": "Dining"
    },
    {
      "id": 7,
      "date": "2023-01-20",
      "description": "Gym Membership",
      "amount": -45.0,
      "category": "Fitness"
    },
    {
      "id": 8,
      "date": "2023-01-22",
      "description": "Car Payment",
      "amount": -350.0,
      "category": "Transportation"
    },
    {
      "id": 9,
      "date": "2023-01-25",
      "description": "Movie Tickets",
      "amount": -30.0,
      "category": "Entertainment"
    },
    {
      "id": 10,
      "date": "2023-01-28",
      "description": "Freelance Work",
      "amount": 800.0,
      "category": "Income"
    },
    {
      "id": 11,
      "date": "2023-02-03",
      "description": "Coffee Shop",
      "amount": -12.5,
      "category": "Dining"
    },
    {
      "id": 12,
      "date": "2023-02-05",
      "description": "Grocery Store",
      "amount": -160.0,
      "category": "Groceries"
    },
    {
      "id": 13,
      "date": "2023-02-07",
      "description": "Salary",
      "amount": 3000.0,
      "category": "Income"
    },
    {
      "id": 14,
      "date": "2023-02-09",
      "description": "Water Bill",
      "amount": -40.0,
      "category": "Utilities"
    },
    {
      "id": 15,
      "date": "2023-02-11",
      "description": "Gasoline",
      "amount": -50.0,
      "category": "Transportation"
    },
    {
      "id": 16,
      "date": "2023-02-14",
      "description": "Valentine's Day Gift",
      "amount": -200.0,
      "category": "Gifts"
    },
    {
      "id": 17,
      "date": "2023-02-17",
      "description": "Concert Tickets",
      "amount": -120.0,
      "category": "Entertainment"
    },
    {
      "id": 18,
      "date": "2023-02-20",
      "description": "Dinner at Restaurant",
      "amount": -75.0,
      "category": "Dining"
    },
    {
      "id": 19,
      "date": "2023-02-22",
      "description": "Pet Supplies",
      "amount": -65.0,
      "category": "Pets"
    },
    {
      "id": 20,
      "date": "2023-02-25",
      "description": "Bonus",
      "amount": 500.0,
      "category": "Income"
    },
    {
      "id": 21,
      "date": "2023-03-01",
      "description": "Grocery Store",
      "amount": -155.25,
      "category": "Groceries"
    },
    {
      "id": 22,
      "date": "2023-03-03",
      "description": "Salary",
      "amount": 3000.0,
      "category": "Income"
    },
    {
      "id": 23,
      "date": "2023-03-05",
      "description": "Rent Payment",
      "amount": -1200.0,
      "category": "Housing"
    },
    {
      "id": 24,
      "date": "2023-03-07",
      "description": "Electricity Bill",
      "amount": -95.0,
      "category": "Utilities"
    },
    {
      "id": 25,
      "date": "2023-03-09",
      "description": "New Laptop",
      "amount": -1500.0,
      "category": "Electronics"
    },
    {
      "id": 26,
      "date": "2023-03-12",
      "description": "Gym Membership",
      "amount": -45.0,
      "category": "Fitness"
    },
    {
      "id": 27,
      "date": "2023-03-14",
      "description": "Online Course",
      "amount": -200.0,
      "category": "Education"
    },
    {
      "id": 28,
      "date": "2023-03-16",
      "description": "Dinner at Restaurant",
      "amount": -65.0,
      "category": "Dining"
    },
    {
      "id": 29,
      "date": "2023-03-18",
      "description": "Gasoline",
      "amount": -55.0,
      "category": "Transportation"
    },
    {
      "id": 30,
      "date": "2023-03-20",
      "description": "Freelance Work",
      "amount": 1200.0,
      "category": "Income"
    },
    {
      "id": 31,
      "date": "2023-03-22",
      "description": "Coffee Shop",
      "amount": -10.0,
      "category": "Dining"
    },
    {
      "id": 32,
      "date": "2023-03-25",
      "description": "Movie Streaming Subscription",
      "amount": -15.0,
      "category": "Entertainment"
    },
    {
      "id": 33,
      "date": "2023-03-27",
      "description": "Grocery Store",
      "amount": -145.0,
      "category": "Groceries"
    },
    {
      "id": 34,
      "date": "2023-03-29",
      "description": "Water Bill",
      "amount": -42.0,
      "category": "Utilities"
    },
    {
      "id": 35,
      "date": "2023-03-31",
      "description": "Charity Donation",
      "amount": -100.0,
      "category": "Charity"
    },
    {
      "id": 36,
      "date": "2023-04-02",
      "description": "Salary",
      "amount": 3000.0,
      "category": "Income"
    },
    {
      "id": 37,
      "date": "2023-04-04",
      "description": "Rent Payment",
      "amount": -1200.0,
      "category": "Housing"
    },
    {
      "id": 38,
      "date": "2023-04-06",
      "description": "Grocery Store",
      "amount": -160.0,
      "category": "Groceries"
    },
    {
      "id": 39,
      "date": "2023-04-08",
      "description": "Electricity Bill",
      "amount": -88.0,
      "category": "Utilities"
    },
    {
      "id": 40,
      "date": "2023-04-10",
      "description": "Birthday Gift",
      "amount": -250.0,
      "category": "Gifts"
    },
    {
      "id": 41,
      "date": "2023-04-12",
      "description": "Gym Membership",
      "amount": -45.0,
      "category": "Fitness"
    },
    {
      "id": 42,
      "date": "2023-04-14",
      "description": "Car Repair",
      "amount": -600.0,
      "category": "Transportation"
    },
    {
      "id": 43,
      "date": "2023-04-16",
      "description": "Dinner at Restaurant",
      "amount": -70.0,
      "category": "Dining"
    },
    {
      "id": 44,
      "date": "2023-04-18",
      "description": "Coffee Shop",
      "amount": -8.0,
      "category": "Dining"
    },
    {
      "id": 45,
      "date": "2023-04-20",
      "description": "Freelance Work",
      "amount": 950.0,
      "category": "Income"
    },
    {
      "id": 46,
      "date": "2023-04-22",
      "description": "Gasoline",
      "amount": -58.0,
      "category": "Transportation"
    },
    {
      "id": 47,
      "date": "2023-04-24",
      "description": "Concert Tickets",
      "amount": -130.0,
      "category": "Entertainment"
    },
    {
      "id": 48,
      "date": "2023-04-26",
      "description": "Grocery Store",
      "amount": -150.0,
      "category": "Groceries"
    },
    {
      "id": 49,
      "date": "2023-04-28",
      "description": "Water Bill",
      "amount": -40.0,
      "category": "Utilities"
    },
    {
      "id": 50,
      "date": "2023-04-30",
      "description": "Online Shopping",
      "amount": -220.0,
      "category": "Shopping"
    },
    {
      "id": 51,
      "date": "2023-05-02",
      "description": "Salary",
      "amount": 3000.0,
      "category": "Income"
    },
    {
      "id": 52,
      "date": "2023-05-04",
      "description": "Rent Payment",
      "amount": -1200.0,
      "category": "Housing"
    },
    {
      "id": 53,
      "date": "2023-05-06",
      "description": "Grocery Store",
      "amount": -165.0,
      "category": "Groceries"
    },
    {
      "id": 54,
      "date": "2023-05-08",
      "description": "Electricity Bill",
      "amount": -92.0,
      "category": "Utilities"
    },
    {
      "id": 55,
      "date": "2023-05-10",
      "description": "Mother's Day Gift",
      "amount": -200.0,
      "category": "Gifts"
    },
    {
      "id": 56,
      "date": "2023-05-12",
      "description": "Gym Membership",
      "amount": -45.0,
      "category": "Fitness"
    },
    {
      "id": 57,
      "date": "2023-05-14",
      "description": "Dinner at Restaurant",
      "amount": -80.0,
      "category": "Dining"
    },
    {
      "id": 58,
      "date": "2023-05-16",
      "description": "Gasoline",
      "amount": -60.0,
      "category": "Transportation"
    },
    {
      "id": 59,
      "date": "2023-05-18",
      "description": "Coffee Shop",
      "amount": -9.0,
      "category": "Dining"
    },
    {
      "id": 60,
      "date": "2023-05-20",
      "description": "Freelance Work",
      "amount": 1100.0,
      "category": "Income"
    },
    {
      "id": 61,
      "date": "2023-05-22",
      "description": "Movie Tickets",
      "amount": -28.0,
      "category": "Entertainment"
    },
    {
      "id": 62,
      "date": "2023-05-24",
      "description": "Grocery Store",
      "amount": -155.0,
      "category": "Groceries"
    },
    {
      "id": 63,
      "date": "2023-05-26",
      "description": "Water Bill",
      "amount": -43.0,
      "category": "Utilities"
    },
    {
      "id": 64,
      "date": "2023-05-28",
      "description": "Pet Supplies",
      "amount": -70.0,
      "category": "Pets"
    },
    {
      "id": 65,
      "date": "2023-05-30",
      "description": "Online Course",
      "amount": -180.0,
      "category": "Education"
    },
    {
      "id": 66,
      "date": "2023-06-02",
      "description": "Salary",
      "amount": 3000.0,
      "category": "Income"
    },
    {
      "id": 67,
      "date": "2023-06-04",
      "description": "Rent Payment",
      "amount": -1200.0,
      "category": "Housing"
    },
    {
      "id": 68,
      "date": "2023-06-06",
      "description": "Grocery Store",
      "amount": -170.0,
      "category": "Groceries"
    },
    {
      "id": 69,
      "date": "2023-06-08",
      "description": "Electricity Bill",
      "amount": -90.0,
      "category": "Utilities"
    },
    {
      "id": 70,
      "date": "2023-06-10",
      "description": "Father's Day Gift",
      "amount": -200.0,
      "category": "Gifts"
    },
    {
      "id": 71,
      "date": "2023-06-12",
      "description": "Gym Membership",
      "amount": -45.0,
      "category": "Fitness"
    },
    {
      "id": 72,
      "date": "2023-06-14",
      "description": "Dinner at Restaurant",
      "amount": -85.0,
      "category": "Dining"
    },
    {
      "id": 73,
      "date": "2023-06-16",
      "description": "Gasoline",
      "amount": -62.0,
      "category": "Transportation"
    },
    {
      "id": 74,
      "date": "2023-06-18",
      "description": "Coffee Shop",
      "amount": -11.0,
      "category": "Dining"
    },
    {
      "id": 75,
      "date": "2023-06-20",
      "description": "Freelance Work",
      "amount": 1050.0,
      "category": "Income"
    },
    {
      "id": 76,
      "date": "2023-06-22",
      "description": "Concert Tickets",
      "amount": -140.0,
      "category": "Entertainment"
    },
    {
      "id": 77,
      "date": "2023-06-24",
      "description": "Grocery Store",
      "amount": -160.0,
      "category": "Groceries"
    },
    {
      "id": 78,
      "date": "2023-06-26",
      "description": "Water Bill",
      "amount": -41.0,
      "category": "Utilities"
    },
    {
      "id": 79,
      "date": "2023-06-28",
      "description": "Online Shopping",
      "amount": -250.0,
      "category": "Shopping"
    },
    {
      "id": 80,
      "date": "2023-06-30",
      "description": "Charity Donation",
      "amount": -120.0,
      "category": "Charity"
    },
    {
      "id": 81,
      "date": "2023-07-02",
      "description": "Salary",
      "amount": 3000.0,
      "category": "Income"
    },
    {
      "id": 82,
      "date": "2023-07-04",
      "description": "Rent Payment",
      "amount": -1200.0,
      "category": "Housing"
    },
    {
      "id": 83,
      "date": "2023-07-06",
      "description": "Grocery Store",
      "amount": -175.0,
      "category": "Groceries"
    },
    {
      "id": 84,
      "date": "2023-07-08",
      "description": "Electricity Bill",
      "amount": -93.0,
      "category": "Utilities"
    },
    {
      "id": 85,
      "date": "2023-07-10",
      "description": "Vacation Booking",
      "amount": -2000.0,
      "category": "Travel"
    },
    {
      "id": 86,
      "date": "2023-07-12",
      "description": "Gym Membership",
      "amount": -45.0,
      "category": "Fitness"
    },
    {
      "id": 87,
      "date": "2023-07-14",
      "description": "Dinner at Restaurant",
      "amount": -90.0,
      "category": "Dining"
    },
    {
      "id": 88,
      "date": "2023-07-16",
      "description": "Gasoline",
      "amount": -65.0,
      "category": "Transportation"
    },
    {
      "id": 89,
      "date": "2023-07-18",
      "description": "Coffee Shop",
      "amount": -10.0,
      "category": "Dining"
    },
    {
      "id": 90,
      "date": "2023-07-20",
      "description": "Freelance Work",
      "amount": 1300.0,
      "category": "Income"
    },
    {
      "id": 91,
      "date": "2023-07-22",
      "description": "Movie Tickets",
      "amount": -32.0,
      "category": "Entertainment"
    },
    {
      "id": 92,
      "date": "2023-07-24",
      "description": "Grocery Store",
      "amount": -165.0,
      "category": "Groceries"
    },
    {
      "id": 93,
      "date": "2023-07-26",
      "description": "Water Bill",
      "amount": -44.0,
      "category": "Utilities"
    },
    {
      "id": 94,
      "date": "2023-07-28",
      "description": "Pet Supplies",
      "amount": -75.0,
      "category": "Pets"
    },
    {
      "id": 95,
      "date": "2023-07-30",
      "description": "Online Course",
      "amount": -210.0,
      "category": "Education"
    },
    {
      "id": 96,
      "date": "2023-08-02",
      "description": "Salary",
      "amount": 3000.0,
      "category": "Income"
    },
    {
      "id": 97,
      "date": "2023-08-04",
      "description": "Rent Payment",
      "amount": -1200.0,
      "category": "Housing"
    },
    {
      "id": 98,
      "date": "2023-08-06",
      "description": "Grocery Store",
      "amount": -180.0,
      "category": "Groceries"
    },
    {
      "id": 99,
      "date": "2023-08-08",
      "description": "Electricity Bill",
      "amount": -96.0,
      "category": "Utilities"
    },
    {
      "id": 100,
      "date": "2023-08-10",
      "description": "New Phone",
      "amount": -800.0,
      "category": "Electronics"
    }
  ]; 


function CustomPieChart() {
  const [timeFrame, setTimeFrame] = useState('monthly');

  // Convert transaction dates to Date objects
  const transactionsWithDate = transactions.map((transaction) => ({
    ...transaction,
    dateObj: new Date(transaction.date),
  }));

  const spendingByCategory = transactions.reduce((acc, transaction) => {
    if (transaction.amount < 0) { // Only expenses
      const category = transaction.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += -transaction.amount; // Convert to positive value
    }
    return acc;
  }, {} as { [key: string]: number });
  // Group transactions based on the selected time frame

  // Define colors for categories
  const COLORS = [
    'rgba(var(--color-category1), 0.8)', // Semi-transparent Red
    'rgba(var(--color-category2), 0.8)', // Semi-transparent Blue
    'rgba(var(--color-category3), 0.8)', // Semi-transparent Yellow
    'rgba(var(--color-category4), 0.8)', // Semi-transparent Teal
    'rgba(var(--color-category5), 0.8)', // Semi-transparent Purple
    'rgba(var(--color-category6), 0.8)', // Semi-transparent Orange
    'rgba(var(--color-category7), 0.8)', // Semi-transparent Green
  ];
  

// Extract category labels and amounts
const categoryLabels = Object.keys(spendingByCategory);
const categoryAmounts = categoryLabels.map(category => spendingByCategory[category]);

// Create pieData array
const pieData = categoryLabels.map((category, index) => ({
  category,
  amount: spendingByCategory[category],
  fill: COLORS[index % COLORS.length],
}));
const totalSpending = React.useMemo(() => {
  return pieData.reduce((acc, curr) => acc + curr.amount, 0)
}, [])

  interface PieConfig {
    [key: string]: {
      label: string;
      color?: string;
    };
  }

  const pieConfig: PieConfig = {
    amount: {
      label: "Amount",
    },
    // Map each category to its label and color
    ...categoryLabels.reduce((config, category, index) => {
      config[category] = {
        label: category,
        color: COLORS[index % COLORS.length],
      };
      return config;
    }, {} as PieConfig),
  };
  

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>This Month's Spending</CardTitle>
        <CardDescription>January 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={pieConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >$
                          {totalSpending.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
};

const getMonthName = (date: string) => {
  const monthIndex = new Date(date).getMonth(); // 0-indexed month
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][monthIndex];
};

// Step 2: Aggregate income and spending by month
const barData = transactions.reduce((acc, transaction) => {
  const month = getMonthName(transaction.date);

  // Find the existing month in the accumulator
  let monthEntry = acc.find((entry) => entry.month === month);
  if (!monthEntry) {
    monthEntry = { month, income: 0, spending: 0 };
    acc.push(monthEntry);
  }

  // Add income or spending
  if (transaction.amount > 0) {
    monthEntry.income += transaction.amount;
  } else {
    monthEntry.spending += -transaction.amount; // Convert to positive
  }

  return acc;
}, [] as { month: string; income: number; spending: number }[]);

const barConfig = {
  income: {
    label: "Income",
    color: "hsl(120, 70%, 50%)", // Green
  },
  spending: {
    label: "Spending",
    color: "hsl(0, 70%, 50%)", // Red
  },
} satisfies ChartConfig;

export function CustomBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Income and Spending Month by Month</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={barConfig}>
          <BarChart accessibilityLayer data={barData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
              //worry abt this later
              // formatter={(value, name) => {
              //   // Add two whitespaces between the name and value
              //   return [`${name}  ${value}`, null];
              // }}
            />
            <Bar dataKey="income" fill="hsl(120, 70%, 50%)" radius={4} />
            <Bar dataKey="spending" fill="hsl(0, 70%, 50%)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
};

// Aggregate income and spending by month
const lineData = transactions.reduce((acc, transaction) => {
  const month = getMonthName(transaction.date);

  // Find existing month in the accumulator
  let monthEntry = acc.find((entry) => entry.month === month);
  if (!monthEntry) {
    monthEntry = { month, income: 0, spending: 0 };
    acc.push(monthEntry);
  }

  // Add income or spending
  if (transaction.amount > 0) {
    monthEntry.income += transaction.amount;
  } else {
    monthEntry.spending += -transaction.amount; // Convert to positive
  }

  return acc;
}, [] as { month: string; income: number; spending: number }[]);

const lineConfig = {
  income: {
    label: "Income",
    color: "hsl(120, 70%, 50%)", // Green
  },
  spending: {
    label: "Spending",
    color: "hsl(0, 70%, 50%)", // Red
  },
} satisfies ChartConfig;

export function CustomLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Income vs Spending</CardTitle>
        <CardDescription>January - June 2023</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={lineConfig}>
          <LineChart
            accessibilityLayer
            data={lineData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="income"
              type="monotone"
              stroke={lineConfig.income.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="spending"
              type="monotone"
              stroke={lineConfig.spending.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total income and spending for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}


export default function Analytics(){
  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <CustomPieChart/>
      <CustomBarChart/>
      <CustomLineChart/>
    </div>
  )
};