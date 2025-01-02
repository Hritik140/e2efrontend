import React, { useEffect, useState } from "react";

interface Trip {
  origin: string;
  destination: string;
  status: string;
  driver: string;
  vehicle: string;
}

const OngoingTrips: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch("/api/trips.json");
      const data = await response.json();
      setTrips(data.ongoingTrips);
    };

    fetchTrips();
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Ongoing Trips</h2>
      <div className="grid grid-cols-1 gap-4">
        {trips.slice(0, 2).map((trip, index) => (
          <div key={index} className="p-4 border rounded-lg bg-gray-800">
            <p>
              <strong>Origin:</strong> {trip.origin}
            </p>
            <p>
              <strong>Destination:</strong> {trip.destination}
            </p>
            <p>
              <strong>Status:</strong> {trip.status}
            </p>
            <p>
              <strong>Driver:</strong> {trip.driver}
            </p>
            <p>
              <strong>Vehicle:</strong> {trip.vehicle}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
      >
        View All
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-lg font-semibold mb-4">All Ongoing Trips</h3>
            <div className="grid grid-cols-1 gap-4">
              {trips.map((trip, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gray-800">
                  <p>
                    <strong>Origin:</strong> {trip.origin}
                  </p>
                  <p>
                    <strong>Destination:</strong> {trip.destination}
                  </p>
                  <p>
                    <strong>Status:</strong> {trip.status}
                  </p>
                  <p>
                    <strong>Driver:</strong> {trip.driver}
                  </p>
                  <p>
                    <strong>Vehicle:</strong> {trip.vehicle}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
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

export default OngoingTrips;
