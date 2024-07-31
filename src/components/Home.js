// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Mental Health Support Network</h1>
      <p>Share your experiences, join support groups, and connect with mental health professionals.</p>
      <Link to="/register">Get Started</Link>
    </div>
  );
};

export default Home;
