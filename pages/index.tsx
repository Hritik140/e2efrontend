import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Alert from "../components/AlertButton";


import {ChartData} from "chart.js";

export default function Home() {
  type GraphDataType=ChartData<"line">;
  const [graphData, setGraphData] = useState<GraphDataType | null>(null);



  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <Alert/>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Graph Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {graphData ? (
            null
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
</div>
);
}
