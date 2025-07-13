import React, { useState, useEffect } from 'react';

const AppointmentList = ({ date, onAddNew }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = () => {
      const allAppointments = JSON.parse(localStorage.getItem('appointments') || '{}');
      const dateKey = date.toISOString().split('T')[0];
      setAppointments(allAppointments[dateKey] || []);
    };

    loadAppointments();
    window.addEventListener('storage', loadAppointments);
    return () => window.removeEventListener('storage', loadAppointments);
  }, [date]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">
          Appointments for {date.toLocaleDateString()}
        </h3>
        <button
          onClick={onAddNew}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          + New Appointment
        </button>
      </div>

      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments scheduled</p>
      ) : (
        <div className="space-y-2">
          {appointments.map(appointment => (
            <div key={appointment.id} className="border p-3 rounded">
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Patient:</strong> {appointment.patientName}</p>
              <p><strong>Doctor:</strong> {appointment.doctorName} ({appointment.doctorSpecialty})</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;