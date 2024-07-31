// src/services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api/' });

export const loginUser = (credentials) => API.post('/login/', credentials);
export const registerUser = (userData) => API.post('/register/', userData);
export const shareExperience = (experience) => API.post('/experiences/', experience);
export const fetchSupportGroups = () => API.get('/groups/');
export const fetchProfessionals = () => API.get('/professionals/');
export const sendMessage = (message) => API.post('/messages/', message);
