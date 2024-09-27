import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await axios.get('http://localhost:3001/robots');
        setRobots(response.data);
      } catch (error) {
        setError('Error al cargar la lista de robots');
      } finally {
        setLoading(false);
      }
    };

    fetchRobots();
  }, []);

  if (loading) return <p>Cargando robots...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center">Listado de Robots</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot, index) => (
            <tr key={index}>
              <td>{robot.name}</td>
              <td>{robot.model}</td>
              <td>{robot.manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RobotList;
