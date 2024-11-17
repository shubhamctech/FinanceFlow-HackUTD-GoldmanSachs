// pushed to the top right:

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const fetchStockData = async () => {
//   const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY'; // Replace with your API key
//   const symbol = 'GS'; // Goldman Sachs stock symbol
//   const interval = '1min'; // 1-minute intervals
//   const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   return data['Time Series (1min)'];
// };

// const StockGraph: React.FC = () => {
//   const [chartData, setChartData] = useState<any>({
//     labels: [],
//     datasets: [
//       {
//         label: 'Goldman Sachs Stock Price (USD)',
//         data: [],
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         tension: 0.4,
//       },
//     ],
//   });

//   useEffect(() => {
//     const updateChartData = async () => {
//       const stockData = await fetchStockData();
//       if (stockData) {
//         const labels: string[] = [];
//         const prices: number[] = [];

//         for (const [timestamp, values] of Object.entries(stockData)) {
//           labels.push(timestamp as string);
//           prices.push(parseFloat((values as any)['1. open']));
//         }

//         setChartData({
//           labels: labels.reverse(),
//           datasets: [
//             {
//               label: 'Goldman Sachs Stock Price (USD)',
//               data: prices.reverse(),
//               borderColor: 'rgba(75, 192, 192, 1)',
//               backgroundColor: 'rgba(75, 192, 192, 0.2)',
//               tension: 0.4,
//             },
//           ],
//         });
//       }
//     };

//     updateChartData();
//     const interval = setInterval(updateChartData, 60000); // Update every minute
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container mx-auto py-8">
//       {/* Graph container styled to occupy 1/4 of the screen, but 2 times bigger */}
//       <div
//         style={{
//           width: '50%', // 50% of the screen width (making it 2 times bigger)
//           height: '50vh', // 50% of the screen height (making it 2 times bigger)
//           position: 'absolute',
//           top: 0,
//           left: 0, // Position it at the top-left corner
//         }}
//       >
//         <Line data={chartData} options={{ responsive: true }} />
//       </div>

//       {/* Your original content */}
//       <Card className="max-w-3xl mx-auto">
//         <CardHeader>
//           <CardTitle>Goldman Sachs Stock Graph</CardTitle>
//         </CardHeader>
//         <CardContent>
//           {/* You can remove this part if the graph is already being displayed above */}
//         </CardContent>
//       </Card>
//       <div className="flex justify-center mt-4">
//         <Button onClick={() => window.location.reload()}>Refresh Data</Button>
//       </div>
//     </div>
//   );
// };

// export default StockGraph;


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
import Separator from '@/components/ui/separator';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetchStockData = async () => {
  const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY'; // Replace with your API key
  const symbol = 'GS'; // Goldman Sachs stock symbol
  const interval = '60min'; // 1-minute intervals
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;

  const response = await fetch(url);
  //const data = await response.json();

  const data = 
  {
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
  }
  
  
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

