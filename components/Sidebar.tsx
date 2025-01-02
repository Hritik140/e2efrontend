import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaHome, FaMapMarkerAlt, FaTruck, FaUser, FaBell } from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const menuItems = [
    { id: 1,  icon: <FaHome />, route: "/" },
    { id: 2,  icon: <FaMapMarkerAlt />, route: "/trips" },
    { id: 3,  icon: <FaTruck />, route: "/trucks" },
    { id: 4, icon: <FaUser />, route: "/users" },
    { id: 5, icon: <FaBell />, route: "/notifications" },
  ];

  return (
    <div
      className={`fixed top-32 right-12 bottom-322 left-12 h-918px bg-gray-900 text-white ${
        isExpanded ? "w-104px" : "w-110px"
      } transition-all duration-300`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Sidebar Header */}
      <div className="p-4 text-center">
        <span className="block text-lg font-bold">Logo</span>
      </div>

      {/* Navigation Menu */}
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 hover:bg-orange-500 cursor-pointer group"
            onClick={() => router.push(item.route)}
          >
            <span className="text-xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
            
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
