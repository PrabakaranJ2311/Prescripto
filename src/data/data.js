export const patients = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Robert Johnson' },
  { id: 4, name: 'Emily Davis' },
  { id: 5, name: 'Michael Brown' }
];

export const doctors = [
  { id: 1, name: 'Dr. Sarah Williams', specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Michael Brown', specialty: 'Pediatrics' },
  { id: 3, name: 'Dr. Emily Davis', specialty: 'Dermatology' },
  { id: 4, name: 'Dr. James Wilson', specialty: 'Neurology' },
  { id: 5, name: 'Dr. Lisa Taylor', specialty: 'Orthopedics' }
];

// Initialize localStorage if empty
export const initializeAppointments = () => {
  if (!localStorage.getItem('appointments')) {
    localStorage.setItem('appointments', JSON.stringify({}));
  }
};