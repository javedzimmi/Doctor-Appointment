import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Calendar, Plus, Users } from "lucide-react"; // Icons
import Dashboard from "../pages/adminPages/Dashboard";
import Appointments from "../pages/adminPages/Appointments";
import AddDoctor from "../pages/adminPages/AddDoctor";
import DoctorsList from "../pages/adminPages/DoctorsList";
import { assets } from "../assets/assets";

const AdminPanel = () => {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState("Dashboard");

    const renderComponent = () => {
        switch (activePage) {
            case "Dashboard":
                return <Dashboard />;
            case "Appointments":
                return <Appointments />;
            case "Add Doctor":
                return <AddDoctor />;
            case "Doctors List":
                return <DoctorsList />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Top Navbar */}
            <div className="flex items-center justify-between p-4 bg-white shadow-md">
                <img className="w-40 cursor-pointer" src={assets.logo} alt="Admin Logo" />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => navigate("/login")}
                >
                    Logout
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">{renderComponent()}</div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
                <div className="flex justify-around p-3">
                    {[
                        { name: "Dashboard", icon: <Home size={22} />, path: "Dashboard" },
                        { name: "Appointments", icon: <Calendar size={22} />, path: "Appointments" },
                        { name: "Add Doctor", icon: <Plus size={22} />, path: "Add Doctor" },
                        { name: "Doctors List", icon: <Users size={22} />, path: "Doctors List" }
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`flex flex-col items-center p-2 ${
                                activePage === item.path ? "text-blue-600 font-semibold" : "text-gray-600"
                            }`}
                            onClick={() => setActivePage(item.path)}
                        >
                            {item.icon}
                            <span className="text-sm">{item.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
