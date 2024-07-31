// src/components/ShareExperience.js
import React, { useState } from 'react';
import { shareExperience } from '../services/api';

const ShareExperience = () => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await shareExperience({ content });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Share Your Experience</h2>
      <textarea value={content} onChange={handleChange} placeholder="Write your experience here..." required />
      <button type="submit">Share</button>
    </form>
  );
};

export default ShareExperience;
