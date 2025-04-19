import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {

    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [degree, setDegree] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('General physician')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl, aToken } = useContext(AdminContext);


    const onSubmitHandler = async (event) => {


        event.preventDefault();
        try {
            if (!docImg) {
                return toast.error('Image not Selected');
            }

            const formData = new FormData();
            formData.append("image", docImg); // Append file
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("speciality", speciality);
            formData.append("degree", degree);
            formData.append("experience", experience);
            formData.append("about", about);
            formData.append("fees", Number(fees));
            formData.append("address", JSON.stringify({ line1: address1, line2: address2 })); // Ensure correct format

          

                const { data } = await axios.post(backendUrl + '/api/admin/add-doctor',formData,{headers:{aToken}})

                if (data.success) {

                    toast.success(data.message)

                    setDocImg(false)
                    setName('')
                    setEmail('')
                    setPassword('')
                    setDegree('')
                    setAbout('')
                    setFees('')
                    setAddress1('')
                    setAddress2('')


                    
                }else{
                    toast.error(data.message)
                }
            


        } catch (error) {
            toast.error(error.message )
            console.log(error)

        }

    }


    return (
        <form onSubmit={onSubmitHandler} className="m-5 w-full">
            <p className="mb-3 text-xl font-semibold text-gray-800">Add Doctor</p>

            <div className="bg-white px-8 py-8 rounded-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto shadow-md space-y-6">
                {/* Upload Section */}
                <div className="flex flex-col items-center">
                    <label htmlFor="doc-img" className="cursor-pointer">
                        <img src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="Upload" className="w-36 h-36 object-cover rounded-full border border-gray-300" />
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p className="text-center text-sm text-gray-500 mt-2">
                        Upload Doctor <br /> Picture
                    </p>
                </div>

                {/* Form Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Doctor Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Doctor Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Doctor Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Experience</label>
                        <select onChange={(e) => setExperience(e.target.value)} value={experience} required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                            {[...Array(10)].map((_, i) => (
                                <option key={i} value={`${i + 1} year`}>{i + 1} Year</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Fees</label>
                        <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Doctor fees" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Speciality</label>
                        <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="General physician">General physician</option>
                            <option value="Gynecologist">Gynecologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Pediatricians">Pediatricians</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Gastroenterologist">Gastroenterologist</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Education</label>
                        <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" placeholder="degree" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="Address 1" required className="w-full mb-2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="Address 2" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                </div>

                {/* About */}
                <div>
                    <label className="block text-sm font-medium mb-1">About Doctor</label>
                    <textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder="Write about doctor" rows={5} required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    Add Doctor
                </button>
            </div>
        </form>
    );
};

export default AddDoctor;
