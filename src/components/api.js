import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getRobots = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/robots`);
    return response.data;
  } catch (error) {
    console.error('Error fetching robots:', error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    
    // Asegúrate de que el status sea 200 y que tengamos éxito
    if (response.status === 200 && response.data.status === "success") {
      return response.data; // Login exitoso
    } else {
      throw new Error('Credenciales incorrectas.'); // Este caso no debería ocurrir
    }

  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Credenciales incorrectas.');
    } else {
      console.error('Error logging in:', error);
      throw new Error('Error en el servidor. Inténtelo más tarde.');
    }
  }
};
