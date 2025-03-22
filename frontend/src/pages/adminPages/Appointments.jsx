import React, { useEffect, useState } from "react";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    // Fetch Appointments (Replace with API call later)
    useEffect(() => {
        const dummyAppointments = [
            { id: 1, patient: "John Doe", age: 32, dateTime: "2025-03-10 10:30 AM", doctor: "Dr. Smith", fees: "$50" },
            { id: 2, patient: "Jane Roe", age: 45, dateTime: "2025-03-11 02:00 PM", doctor: "Dr. Alice", fees: "$70" }
        ];
        setAppointments(dummyAppointments);
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">All Appointments</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Patient</th>
                            <th className="px-4 py-2">Age</th>
                            <th className="px-4 py-2">Date & Time</th>
                            <th className="px-4 py-2">Doctor</th>
                            <th className="px-4 py-2">Fees</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length > 0 ? (
                            appointments.map((appt, index) => (
                                <tr key={appt.id} className="text-center border-t">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{appt.patient}</td>
                                    <td className="px-4 py-2">{appt.age}</td>
                                    <td className="px-4 py-2">{appt.dateTime}</td>
                                    <td className="px-4 py-2">{appt.doctor}</td>
                                    <td className="px-4 py-2">{appt.fees}</td>
                                    <td className="px-4 py-2">
                                        <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-4 text-gray-500">
                                    No Appointments Available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointments; 
