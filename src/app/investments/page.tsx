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
import { Separator } from '@/components/ui/separator';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetchStockData = async () => {
  const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY'; // Replace with your API key
  const symbol = 'GS'; // Goldman Sachs stock symbol
  const interval = '1min'; // 1-minute intervals
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return data['Time Series (1min)'];
};

// Hardcoded financial news data
const financialNews = [
  {
    title: "FNA 截止日期：全球投資者法律顧問 ROSEN 鼓勵損失超過十萬美元的 Paragon 28, Inc.",
    publisher: "GlobeNewswire Inc.",
    published_utc: "2024-11-16T23:17:00Z",
    description: "Rosen Law Firm reminds investors who purchased Paragon 28, Inc. securities...",
    article_url: "https://www.globenewswire.com/news-release/2024/11/16/2982369/673/zh-hant/FNA-%E6%88%AA%E6%AD%A2%E6%97%A5%E6%9C%9F.html",
  },
  {
    title: "Palantir Reported a Blowout Quarter, but Is the Stock Overvalued?",
    publisher: "The Motley Fool",
    published_utc: "2024-11-16T22:10:00Z",
    description: "Palantir Technologies has seen its stock price surge 247% year-to-date...",
    article_url: "https://www.fool.com/investing/2024/11/16/palantir-blowout-quarter-stock-overvalued",
  },
  // Add more articles here...
];

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
    const updateChartData = async () => {
      const stockData = await fetchStockData();
      if (stockData) {
        const labels: string[] = [];
        const prices: number[] = [];

        for (const [timestamp, values] of Object.entries(stockData)) {
          labels.push(timestamp as string);
          prices.push(parseFloat((values as any)['1. open']));
        }

        setChartData({
          labels: labels.reverse(),
          datasets: [
            {
              label: 'Goldman Sachs Stock Price (USD)',
              data: prices.reverse(),
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.4,
            },
          ],
        });
      }
    };

    updateChartData();
    const interval = setInterval(updateChartData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-8 flex">
      {/* Left: Stock graph */}
      <div className="w-2/3">
        <div className="relative">
          <Line data={chartData} options={{ responsive: true }} />
        </div>
      </div>

      <Separator orientation="vertical" className="mx-4" />

      {/* Right: Financial news */}
      <div className="w-1/3 space-y-4">
        {financialNews.map((news, index) => (
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