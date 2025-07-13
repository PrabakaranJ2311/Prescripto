import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentList from '../components/AppointmentList';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Appointment Calendar</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Calendar */}
        <div className="hidden md:block">
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={() => setShowForm(true)}
          />
        </div>
        
        {/* Mobile Date Picker */}
        <div className="md:hidden">
          <input
            type="date"
            value={date.toISOString().split('T')[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        
        {/* Appointments Section */}
        <div className="flex-1">
          {showForm ? (
            <AppointmentForm 
              date={date}
              onCancel={() => setShowForm(false)}
            />
          ) : (
            <AppointmentList 
              date={date}
              onAddNew={() => setShowForm(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;