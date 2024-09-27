import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getRobots = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/robots`);
    return response.data;
  } catch (error) {
    console.error('Error fetching robots:', error);
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
