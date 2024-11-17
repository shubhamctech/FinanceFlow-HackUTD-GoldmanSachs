'use client';

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetchStockData = async () => {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY; // Replace with your API key
  const symbol = 'GS'; // Goldman Sachs stock symbol
  const interval = '1min'; // 1-minute intervals
  const url = `https://api.polygon.io/v2/aggs/ticker/GS/range/1/day/2023-01-09/2023-02-10?adjusted=true&sort=asc&apiKey=2Ms5Zth_VWRMBuFnxl2xl910xYMc5KEs`;//&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return data["results"];
};

//const stockData = fetchStockData();

const stockData = {
  "Meta Data": {
    "1. Information": "Intraday (1min) open, high, low, close prices and volume",
    "2. Symbol": "GS",
    "3. Last Refreshed": "2024-11-17 16:00:00",
    "4. Interval": "1min",
    "5. Output Size": "Compact",
    "6. Time Zone": "US/Eastern"
  },
  "Time Series (1min)": {
    "2024-11-17 16:00:00": {
      "1. open": "592.10",
      "2. high": "592.90",
      "3. low": "591.20",
      "4. close": "591.50",
      "5. volume": "3200"
    },
    "2024-11-17 15:59:00": {
      "1. open": "593.80",
      "2. high": "594.20",
      "3. low": "591.60",
      "4. close": "592.00",
      "5. volume": "4100"
    },
    "2024-11-17 15:58:00": {
      "1. open": "590.00",
      "2. high": "592.00",
      "3. low": "588.90",
      "4. close": "591.90",
      "5. volume": "4900"
    },
    "2024-11-17 15:57:00": {
      "1. open": "593.00",
      "2. high": "593.80",
      "3. low": "589.50",
      "4. close": "590.20",
      "5. volume": "5100"
    },
    "2024-11-17 15:56:00": {
      "1. open": "588.50",
      "2. high": "591.10",
      "3. low": "587.20",
      "4. close": "590.50",
      "5. volume": "6000"
    },
    "2024-11-17 15:55:00": {
      "1. open": "591.70",
      "2. high": "592.40",
      "3. low": "588.80",
      "4. close": "589.30",
      "5. volume": "5800"
    },
    "2024-11-17 15:54:00": {
      "1. open": "588.20",
      "2. high": "590.90",
      "3. low": "586.00",
      "4. close": "587.50",
      "5. volume": "6200"
    },
    "2024-11-17 15:53:00": {
      "1. open": "590.50",
      "2. high": "591.30",
      "3. low": "587.70",
      "4. close": "590.90",
      "5. volume": "5500"
    },
    "2024-11-17 15:52:00": {
      "1. open": "593.20",
      "2. high": "594.50",
      "3. low": "590.80",
      "4. close": "592.00",
      "5. volume": "5100"
    },
    "2024-11-17 15:51:00": {
      "1. open": "588.10",
      "2. high": "590.00",
      "3. low": "585.60",
      "4. close": "589.50",
      "5. volume": "6300"
    },
    "2024-11-17 15:50:00": {
      "1. open": "591.00",
      "2. high": "591.80",
      "3. low": "588.90",
      "4. close": "589.80",
      "5. volume": "4800"
    },
    "2024-11-17 15:49:00": {
      "1. open": "587.00",
      "2. high": "589.00",
      "3. low": "586.10",
      "4. close": "588.20",
      "5. volume": "6500"
    },
    "2024-11-17 15:48:00": {
      "1. open": "589.50",
      "2. high": "590.30",
      "3. low": "587.70",
      "4. close": "588.60",
      "5. volume": "5700"
    },
    "2024-11-17 15:47:00": {
      "1. open": "591.30",
      "2. high": "592.70",
      "3. low": "589.40",
      "4. close": "591.80",
      "5. volume": "4900"
    },
    "2024-11-17 15:46:00": {
      "1. open": "593.50",
      "2. high": "594.80",
      "3. low": "591.70",
      "4. close": "592.60",
      "5. volume": "5200"
    },
    "2024-11-17 15:45:00": {
      "1. open": "588.90",
      "2. high": "591.00",
      "3. low": "586.80",
      "4. close": "590.00",
      "5. volume": "6200"
    },
    "2024-11-17 15:44:00": {
      "1. open": "592.00",
      "2. high": "593.50",
      "3. low": "591.30",
      "4. close": "592.70",
      "5. volume": "4700"
    },
    "2024-11-17 15:43:00": {
      "1. open": "587.70",
      "2. high": "588.80",
      "3. low": "586.50",
      "4. close": "588.40",
      "5. volume": "5900"
    },
    "2024-11-17 15:42:00": {
      "1. open": "589.20",
      "2. high": "590.40",
      "3. low": "588.10",
      "4. close": "589.80",
      "5. volume": "5100"
    },
    "2024-11-17 15:41:00": {
      "1. open": "588.40",
      "2. high": "589.90",
      "3. low": "586.20",
      "4. close": "588.20",
      "5. volume": "6200"
    }
  }
};


// Hardcoded stock recommendations
const stockRecommendations = {
  trending: [
    { ticker: 'AAPL', change: '+2.5%', price: '$173.50' },
    { ticker: 'NVDA', change: '+1.8%', price: '$493.20' },
    { ticker: 'MSFT', change: '+1.2%', price: '$329.80' },
    { ticker: 'TSLA', change: '+3.1%', price: '$211.70' },
  ],
  gaining: [
    { ticker: 'TSLA', change: '+3.6%', price: '$214.30' },
    { ticker: 'GOOGL', change: '+2.8%', price: '$134.50' },
    { ticker: 'AMD', change: '+2.3%', price: '$111.20' },
    { ticker: 'NFLX', change: '+1.9%', price: '$420.00' },
  ],
  losing: [
    { ticker: 'AMZN', change: '-1.2%', price: '$113.40' },
    { ticker: 'META', change: '-0.9%', price: '$278.30' },
    { ticker: 'CRM', change: '-1.5%', price: '$190.10' },
    { ticker: 'BA', change: '-2.1%', price: '$221.40' },
  ],
};


const financialNews = {
  results: [
    {
      title: "NASDAQ: XRAY Investigation Reminder",
      description: "DENTSPLY SIRONA Inc. announced the voluntary suspension of sales...",
      published_utc: "2024-11-17T15:43:00Z",
      article_url: "https://www.globenewswire.com/news-release/xray-investigation",
      publisher: "GlobeNewswire Inc.",
    },
    {
      title: "Nurix Therapeutics Presents Preclinical Data",
      description: "Nurix Therapeutics presented preclinical data on two drug candidates...",
      published_utc: "2024-11-17T15:30:00Z",
      article_url: "https://www.globenewswire.com/news-release/nurix-preclinical-data",
      publisher: "GlobeNewswire Inc.",
    },
    {
      title: "Energy Stocks Have Soared This Year",
      description: "Chevron, MPLX, and Occidental Petroleum are highlighted as potential...",
      published_utc: "2024-11-17T15:10:00Z",
      article_url: "https://www.fool.com/investing/energy-stocks",
      publisher: "The Motley Fool",
    },
    {
      title: "ROSEN Encourages Hasbro Investors to Secure Counsel",
      description: "Rosen Law Firm has filed a class action lawsuit on behalf of Hasbro...",
      published_utc: "2024-11-17T14:54:00Z",
      article_url: "https://www.globenewswire.com/news-release/hasbro-investors",
      publisher: "GlobeNewswire Inc.",
    },
    {
      title: "Rocket Lab and Hut 8 Mining Among Mid-Cap Gainers",
      description: "Several mid-cap stocks, including Rocket Lab and Hut 8 Mining...",
      published_utc: "2024-11-17T14:44:25Z",
      article_url: "https://www.benzinga.com/news/rocket-lab-hut",
      publisher: "Benzinga",
    },
  ],
};

const StockGraph: React.FC = () => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [
      {
        label: 'Goldman Sachs Stock Price (USD)',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const processStockData = () => {
      const timeSeries = stockData["Time Series (1min)"];
      const labels: string[] = [];
      const prices: number[] = [];

      for (const [timestamp, values] of Object.entries(timeSeries)) {
        labels.push(timestamp); // Use the timestamp as the label
        prices.push(parseFloat((values as any)["1. open"])); // Use the open price
      }

      // Reverse the arrays to display the oldest data first
      labels.reverse();
      prices.reverse();

      setChartData({
        labels,
        datasets: [
          {
            label: 'Goldman Sachs Stock Price (USD)',
            data: prices,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
          },
        ],
      });
    };

    processStockData();
  }, []);

  return (
    <div className="container mx-auto py-8 flex flex-col">
      {/* Top Section: Stock Graph and Recommendations */}
      <div className="flex justify-between space-x-8">
        {/* Stock Graph */}
        <div className="w-2/3">
          <Line data={chartData} options={{ responsive: true }} />
        </div>
        {/* Recommendations */}
        <div className="w-1/3 space-y-4">
          {/* Trending Stocks */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-sm font-bold">Trending Stocks</CardTitle>
            </CardHeader>
            <CardContent>
              {stockRecommendations.trending.map((stock, index) => (
                <p key={index} className="text-xs">
                  <strong>{stock.ticker}</strong>: {stock.change} ({stock.price})
                </p>
              ))}
            </CardContent>
          </Card>

          {/* Gaining Stocks */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-sm font-bold">Gaining Stocks</CardTitle>
            </CardHeader>
            <CardContent>
              {stockRecommendations.gaining.map((stock, index) => (
                <p key={index} className="text-xs">
                  <strong>{stock.ticker}</strong>: {stock.change} ({stock.price})
                </p>
              ))}
            </CardContent>
          </Card>

          {/* Losing Stocks */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-sm font-bold">Losing Stocks</CardTitle>
            </CardHeader>
            <CardContent>
              {stockRecommendations.losing.map((stock, index) => (
                <p key={index} className="text-xs">
                  <strong>{stock.ticker}</strong>: {stock.change} ({stock.price})
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {financialNews.results.slice(0, 5).map((news, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-sm font-bold">{news.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">{news.description}</p>
              <p className="text-xs text-gray-400 mt-1">Published by: {news.publisher}</p>
              <p className="text-xs text-gray-400">Date: {new Date(news.published_utc).toLocaleString()}</p>
              <a href={news.article_url} target="_blank" className="text-blue-600 text-xs mt-2 inline-block">
                Read more
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StockGraph;
