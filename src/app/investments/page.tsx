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
  const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY'; // Replace with your API key
  const symbol = 'GS'; // Goldman Sachs stock symbol
  const interval = '1min'; // 1-minute intervals
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return data['Time Series (1min)'];
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
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Goldman Sachs Stock Graph</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={chartData} options={{ responsive: true }} />
        </CardContent>
      </Card>
      <div className="flex justify-center mt-4">
        <Button onClick={() => window.location.reload()}>Refresh Data</Button>
      </div>
    </div>
  );
};

export default StockGraph;


//try again in a few hours.
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

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (!data['Time Series (1min)']) {
//       console.error('Invalid API response:', data);
//       return null;
//     }
//     return data['Time Series (1min)'];
//   } catch (error) {
//     console.error('Error fetching stock data:', error);
//     return null;
//   }
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
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadStockData = async () => {
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
//       } else {
//         setError('Failed to fetch stock data. Please try again later.');
//       }
//     };

//     loadStockData();
//   }, []);

//   return (
//     <div className="container mx-auto py-8">
//       <Card className="max-w-3xl mx-auto">
//         <CardHeader>
//           <CardTitle>Goldman Sachs Stock Graph</CardTitle>
//         </CardHeader>
//         <CardContent>
//           {error ? (
//             <div className="text-red-500 text-center">{error}</div>
//           ) : (
//             <Line data={chartData} options={{ responsive: true }} />
//           )}
//         </CardContent>
//       </Card>
//       <div className="flex justify-center mt-4">
//         <Button onClick={() => window.location.reload()}>Reload Page</Button>
//       </div>
//     </div>
//   );
// };

// export default StockGraph;
