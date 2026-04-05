import '../Styles/Register.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Register() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get('role');

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: role || 'buyer'
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className='register-container'>
      <h2>
        {form.role === 'seller' 
          ? 'Merchant Registration' 
          : 'Buyer Registration'}
      </h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          onChange={handleChange} 
          required 
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;