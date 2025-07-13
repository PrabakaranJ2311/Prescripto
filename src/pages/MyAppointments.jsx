import React, { useState, useEffect } from 'react';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = () => {
      try {
        const allAppointments = JSON.parse(localStorage.getItem('appointments') || {});
        const flattened = Object.values(allAppointments).flat();
        console.log("Loaded appointments:", flattened); // Debug log
        setAppointments(flattened);
      } catch (error) {
        console.error("Error loading appointments:", error);
      }
    };

    loadAppointments();
    window.addEventListener('appointments-updated', loadAppointments);
    return () => window.removeEventListener('appointments-updated', loadAppointments);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      
      {appointments.length === 0 ? (
        <p className="text-gray-500">You have no upcoming appointments</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointments.map(appointment => (
            <div key={appointment.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    {new Date(appointment.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </h3>
                  <p className="text-primary">{appointment.time}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  <span className="font-medium">Patient:</span> {appointment.patientName}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Doctor:</span> {appointment.doctorName} ({appointment.doctorSpecialty})
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;