import React, { useEffect, useState } from "react";
import GraphCard from "../components/GraphCard";

interface GraphData {
  title: string;
  value: string;
  percentageChange: string;
  chartData: { name: string; value: number }[];
}

const Dashboard: React.FC = () => {
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://example.com/api/graph-data");
        const data = await response.json();
        setGraphData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">Welcome Devanshu!</h1>
      <div className="flex flex-wrap gap-4">
        {graphData.map((card, index) => (
          <GraphCard
            key={index}
            title={card.title}
            value={card.value}
            percentageChange={card.percentageChange}
            chartData={card.chartData}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
