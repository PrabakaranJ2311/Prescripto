import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'staff@clinic.com' && password === '123456') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/calendarView');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <>

    <p className='font-semibold'>Defaults: <br /> MailId - staff@clinic.com <br /> Password - 123456 </p>
    <div className="flex items-center justify-center mt-20">
      <div className="w-full max-w-sm p-6 max-md-6 border border-primary/30 shadow-xl shadow-primar/15 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center"> <span className='text-primary'>Clinic Staff</span> Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2  border-b-2 outline-none border-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2  border-b-2 outline-none border-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg bg-primary mt-10 hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
