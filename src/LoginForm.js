import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header'; // Importa el componente

const LoginForm = ({ onLoginSuccess }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        login,
        password
      });
      if (response.data.status === 'success') {
        onLoginSuccess(); // Redirige al listado de robots
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      setError('Ocurrió un error. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="login-container">
      <Header /> 
      <form onSubmit={handleLogin}>
        <h2>Inicio de sesión</h2>
        <div>
          <label htmlFor="login">Nombre de usuario</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div>
          <button type="submit">Ingresar</button>
          <button type="button" onClick={() => { setLogin(''); setPassword(''); }}>
            Cancelar
          </button>
        </div>
      </form>
      <footer>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default LoginForm;
