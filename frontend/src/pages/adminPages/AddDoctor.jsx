import React, { useState } from 'react';
import axios from "axios";

const AddDoctor = () => {
    const [doctor, setDoctor] = useState({
        name: "",
        email: "",
        password: "",
        speciality: "",
        degree: "",
        experience: "",
        about: "",
        fees: "",
        address: "",
        image: null,  // New state for image
    });

    const handleChange = (e) => {
        if (e.target.name === "image") {
            setDoctor({ ...doctor, image: e.target.files[0] }); // Store file
        } else {
            setDoctor({ ...doctor, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Use FormData to send file + text fields
        const formData = new FormData();
    formData.append("name", doctor.name);
    formData.append("email", doctor.email);
    formData.append("password", doctor.password);
    formData.append("speciality", doctor.speciality);
    formData.append("degree", doctor.degree);
    formData.append("experience", doctor.experience);
    formData.append("about", doctor.about);
    formData.append("fees", doctor.fees);
    formData.append("address", JSON.stringify(doctor.address)); // Ensure correct format
    formData.append("image", doctor.image); // Append file

        try {
            const response = await axios.post("http://localhost:4000/api/admin/add-doctor", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Doctor added successfully");
            console.log("Response:", response.data);

            // Reset form
            setDoctor({
                name: "",
                email: "",
                password: "",
                speciality: "",
                degree: "",
                experience: "",
                about: "",
                fees: "",
                address: "",
                image: null,
            });
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("Failed to add doctor");
        }
    };

    return (
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" name="name" placeholder="Name" value={doctor.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={doctor.email} onChange={handleChange} required /><br /><br />
                <input type="password" name="password" placeholder="Password" value={doctor.password} onChange={handleChange} required /><br /><br />
                <input type="text" name="speciality" placeholder="Speciality" value={doctor.speciality} onChange={handleChange} required />
                <input type="text" name="degree" placeholder="Degree" value={doctor.degree} onChange={handleChange} required /><br /><br />
                <input type="text" name="about" placeholder="About" value={doctor.about} onChange={handleChange} required /><br /><br />
                <input type="number" name="fees" placeholder="Fees" value={doctor.fees} onChange={handleChange} required />

                <input type="text" name="experience" placeholder="experience" onChange={handleChange} required /><br /><br />


                <input type="text" name="address" placeholder="Address" value={doctor.address} onChange={handleChange} required /><br /><br />
                <input type="file" name="image" accept="image/*" onChange={handleChange} required /><br /><br />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddDoctor;
