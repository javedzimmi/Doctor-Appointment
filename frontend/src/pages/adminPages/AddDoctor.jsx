import React, { useState } from "react";

const AddDoctor = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        experience: "1 Year",
        speciality: "General physician",
        degree: "",
        address1: "",
        address2: "",
        fees: "",
        profilePic: null,
        aboutDoctor: "",
    });

    const [preview, setPreview] = useState(null);

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle File Upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, profilePic: file });
            setPreview(URL.createObjectURL(file)); // Preview Image
        }
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.password || !formData.fees) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Doctor Data Submitted:", formData);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg overflow-auto max-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-center">Add Doctor</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                
                {/* Profile Picture Upload */}
                <div className="col-span-2 flex flex-col items-center">
                    {preview ? (
                        <img src={preview} alt="Profile" className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 mb-3" />
                    ) : (
                        <div className="w-24 h-24 bg-gray-200 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 mb-3">
                            No Image
                        </div>
                    )}
                    <input type="file" accept="image/*" className="hidden" id="profilePic" onChange={handleFileChange} />
                    <label htmlFor="profilePic" className="cursor-pointer bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 text-sm">
                        Upload Photo
                    </label>
                </div>

                {/* Left Column */}
                <div>
                    <label className="block font-medium">Your Name</label>
                    <input type="text" name="name" className="w-full border p-2 rounded mt-1" onChange={handleChange} />

                    <label className="block font-medium mt-3">Doctor Email</label>
                    <input type="email" name="email" className="w-full border p-2 rounded mt-1" onChange={handleChange} />

                    <label className="block font-medium mt-3">Set Password</label>
                    <input type="password" name="password" className="w-full border p-2 rounded mt-1" onChange={handleChange} />

                    <label className="block font-medium mt-3">Experience</label>
                    <select name="experience" className="w-full border p-2 rounded mt-1" onChange={handleChange}>
                        <option>1 Year</option>
                        <option>2 Years</option>
                        <option>5+ Years</option>
                    </select>

                    <label className="block font-medium mt-3">Fees</label>
                    <input type="number" name="fees" className="w-full border p-2 rounded mt-1" onChange={handleChange} />
                </div>

                {/* Right Column */}
                <div>
                    <label className="block font-medium">Speciality</label>
                    <select name="speciality" className="w-full border p-2 rounded mt-1" onChange={handleChange}>
                        <option>General physician</option>
                        <option>Cardiologist</option>
                        <option>Dermatologist</option>
                    </select>

                    <label className="block font-medium mt-3">Degree</label>
                    <input type="text" name="degree" className="w-full border p-2 rounded mt-1" onChange={handleChange} />

                    <label className="block font-medium mt-3">Address</label>
                    <input type="text" name="address1" placeholder="Address 1" className="w-full border p-2 rounded mt-1" onChange={handleChange} />
                    <input type="text" name="address2" placeholder="Address 2" className="w-full border p-2 rounded mt-2" onChange={handleChange} />
                </div>

                {/* About Doctor Section */}
                <div className="col-span-2">
                    <label className="block font-medium">About Doctor</label>
                    <textarea
                        name="aboutDoctor"
                        rows="3"
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Write a short description about the doctor..."
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Submit Button - Fixed Visibility */}
                <div className="col-span-2 flex justify-center mt-4 pb-4">
                    <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                        Add Doctor
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;
