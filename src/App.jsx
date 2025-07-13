import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments'
import CalendarView from './pages/CalendarView';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/calendarView' element={ <CalendarView/> }/>
          <Route path="/my-appointments" element={<MyAppointments />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;