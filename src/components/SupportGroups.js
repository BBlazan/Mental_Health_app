// src/components/SupportGroups.js
import React, { useEffect, useState } from 'react';
import { fetchSupportGroups } from '../services/api';

const SupportGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getGroups = async () => {
      try {
        const response = await fetchSupportGroups();
        setGroups(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getGroups();
  }, []);

  return (
    <div>
      <h2>Support Groups</h2>
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            <h3>{group.name}</h3>
            <p>{group.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportGroups;
