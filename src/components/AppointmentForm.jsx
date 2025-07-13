import React, { useState } from 'react';
import { patients, doctors } from '../data/data';

const AppointmentForm = ({ date, onCancel }) => {
  const [formData, setFormData] = useState({
    patientId: "",
    doctorId: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert IDs to numbers to match data.js
    const patientId = Number(formData.patientId);
    const doctorId = Number(formData.doctorId);
    
    // Find with strict type matching
    const selectedPatient = patients.find(p => p.id === patientId);
    const selectedDoctor = doctors.find(d => d.id === doctorId);
    
    if (!selectedPatient || !selectedDoctor) {
      console.error("Patient or Doctor not found!");
      return;
    }

    const allAppointments = JSON.parse(localStorage.getItem('appointments') || {})
    const dateKey = date.toISOString().split('T')[0];
    
    const newAppointment = {
      id: Date.now(),
      date: dateKey,
      time: formData.time,
      patientId: selectedPatient.id,
      patientName: selectedPatient.name,
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      doctorSpecialty: selectedDoctor.specialty
    };

    const dateAppointments = allAppointments[dateKey] || [];
    allAppointments[dateKey] = [...dateAppointments, newAppointment];
    
    localStorage.setItem('appointments', JSON.stringify(allAppointments));
    
    // Force update across all components
    window.dispatchEvent(new Event('appointments-updated'));
    onCancel();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Book Appointment</h3>
      <form onSubmit={handleSubmit}>
        {/* Patient Dropdown */}
        <div className="mb-4">
          <label className="block mb-2">Patient</label>
          <select
            value={formData.patientId}
            onChange={(e) => setFormData({...formData, patientId: e.target.value})}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Patient</option>
            {patients.map(patient => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor Dropdown */}
        <div className="mb-4">
          <label className="block mb-2">Doctor</label>
          <select
            value={formData.doctorId}
            onChange={(e) => setFormData({...formData, doctorId: e.target.value})}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} ({doctor.specialty})
              </option>
            ))}
          </select>
        </div>

        {/* Time Input */}
        <div className="mb-4">
          <label className="block mb-2">Time</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;