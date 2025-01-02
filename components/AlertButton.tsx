import React, { useState, useEffect } from "react";

const AlertButton: React.FC = () => {
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch alerts from an API or use dummy data
    const fetchAlerts = async () => {
      const response = await fetch("/api/alerts.json"); // Replace with your API endpoint
      const data = await response.json();
      setAlerts(data.alerts);
    };

    fetchAlerts();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2">
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 flex items-center justify-center relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
          />
        </svg>
        {alerts.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-2">
            {alerts.length}
          </span>
        )}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">Alerts</h3>
            <ul>
              {alerts.map((alert, index) => (
                <li key={index} className="p-2 border-b border-gray-700">
                  {alert}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertButton;
