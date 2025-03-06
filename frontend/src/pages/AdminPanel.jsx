import React, { useState } from "react";

import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom"; // Import from react-router-dom

const AdminPanel = () => {
    const navigate = useNavigate();




    return (

        <div>
            <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
                <img className="w-44 cursor-pointer" src={assets.logo} alt="Admin Logo" />
                <button className="">Logout</button>
            </div>

            <ul>
                <li>Dashboard</li>
                <li>Appointments</li>
                <li>Add Doctor</li>
                <li>Doctors List</li>
            </ul>
        </div>







    );
};

export default AdminPanel;
