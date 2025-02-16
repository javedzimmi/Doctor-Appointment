import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const getAvailableslots = async () => {

    setDocSlots([]);
    //getting current date 
    let today = new Date();
    for (let i = 0; i < 7; i++) {

      //getting date with index 
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i);
      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + 1)
      endTime.setHours(21, 0, 0, 0)
      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        

      }
    }


  }



  useEffect(() => {
    // Find doctor info from the context
    const selectedDoctor = doctors.find(doc => doc._id === docId);

    setDocInfo(selectedDoctor);


  }, [doctors, docId]);
  useEffect(() => {
    getAvailableslots();

  }, [docInfo])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      {/* Check if docInfo exists */}
      {docInfo ? (
        <div className="bg-white w-full max-w-5xl p-8 rounded-lg shadow-lg relative mt-8">
          {/* Top Badge */}
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-500 rounded-t-lg"></div>

          {/* Doctor Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left Side - Doctor Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <img
                src={docInfo.image}
                alt={docInfo.name}
                className="w-full h-full object-cover rounded-lg shadow-md border border-blue-300"
              />
            </div>

            {/* Right Side - Doctor Details */}
            <div className="flex-1 space-y-4">
              {/* Doctor Name and Verification */}
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-gray-800">{docInfo.name}</h2>
                <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
              </div>

              {/* Degree & Experience */}
              <div className="flex items-center gap-4">
                <p className="text-gray-700 text-sm">{docInfo.degree}</p>
                <button className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full shadow-sm">
                  {docInfo.experience}
                </button>
              </div>

              {/* About Section */}
              <div>
                <h3 className="text-md font-semibold text-gray-800 flex items-center gap-2">
                  About <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{docInfo.about}</p>
              </div>

              {/* Appointment Fee Section */}
              <div className="flex items-center gap-4 mt-4">
                <span className="text-gray-700 text-md font-medium">Appointment Fees:</span>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">
                  ${docInfo.fees}
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center w-full mt-12">Loading doctor details...</p>
      )}
    </div>
  );
}

export default Appointment;
