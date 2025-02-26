import React, { useState } from "react";
import { assets } from "../assets/assets"; // Ensure the image path is correct

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Javed Alam",
    image: assets.profile_pic,
    email: "javed@gmail.com",
    phone: "+917267982505",
    address: "Lucknow, Bhithouli",
    gender: "Male",
    dob: "2004-12-12",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src={userData.image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-2 p-2 border rounded-md text-center w-full"
            />
          ) : (
            <h2 className="text-xl font-semibold mt-2">{userData.name}</h2>
          )}
          <p className="text-gray-500">{userData.email}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-gray-600">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="p-2 border rounded-md w-full"
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>

          <div>
            <p className="text-gray-600">Address:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.address}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, address: e.target.value }))
                }
                className="p-2 border rounded-md w-full"
              />
            ) : (
              <p>{userData.address}</p>
            )}
          </div>

          <div>
            <p className="text-gray-600">Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                className="p-2 border rounded-md w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

          <div>
            <p className="text-gray-600">Date of Birth:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="p-2 border rounded-md w-full"
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Edit/Save Button */}
        <div className="mt-4">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
