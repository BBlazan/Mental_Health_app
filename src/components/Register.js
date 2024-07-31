// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = () => {
  const [userData, setUserData] = useState({ username: '', password: '', email: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(userData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required />
      <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
