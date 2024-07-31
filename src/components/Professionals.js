// src/components/Professionals.js
import React, { useEffect, useState } from 'react';
import { fetchProfessionals } from '../services/api';

const Professionals = () => {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const getProfessionals = async () => {
      try {
        const response = await fetchProfessionals();
        setProfessionals(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProfessionals();
  }, []);

  return (
    <div>
      <h2>Mental Health Professionals</h2>
      <ul>
        {professionals.map(professional => (
          <li key={professional.id}>
            <h3>{professional.user.username}</h3>
            <p>Specialization: {professional.specialization}</p>
            <p>Bio: {professional.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Professionals;
