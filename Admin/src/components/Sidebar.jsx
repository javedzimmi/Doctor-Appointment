import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-4 md:px-9 md:min-w-72 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 rounded-r-full ${
      isActive ? 'bg-[#F2F3FF] border-l-4 border-blue-500 text-blue-600' : ''
    }`;

  return (
    <div className='min-h-screen bg-white border-r shadow-sm'>
      {aToken && (
        <ul className='mt-6 space-y-1'>
          <NavLink className={navLinkStyle} to="/admin-dashboard">
            <img src={assets.home_icon} alt="Dashboard" className="h-5 w-5" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink className={navLinkStyle} to="/all-appointments">
            <img src={assets.appointment_icon} alt="Appointments" className="h-5 w-5" />
            <p>Appointments</p>
          </NavLink>
         
          <NavLink className={navLinkStyle} to="/add-doctor">
            <img src={assets.add_icon} alt="Add Doctor" className="h-5 w-5" />
            <p>Add Doctor</p>
          </NavLink>
          <NavLink className={navLinkStyle} to="/doctor-list">
            <img src={assets.people_icon} alt="Doctors List" className="h-5 w-5" />
            <p>Doctors List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
