import React, { useEffect, useState } from 'react';
import RobotDetail from './RobotDetail'; 
import { FormattedMessage } from 'react-intl';

const RobotsList = () => {
  const [robotList, setRobotList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [activeRobot, setActiveRobot] = useState(null);

  useEffect(() => {
    const loadRobots = async () => {
      try {
        const response = await fetch('http://localhost:3001/robots');
        if (!response.ok) {
          throw new Error('Error en la respuesta de la red');
        }
        const data = await response.json();
        setRobotList(data);
      } catch (err) {
        setFetchError('Error al cargar los datos: ' + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadRobots();
  }, []);

  const loadRobotDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/robots/${id}`);
      if (!response.ok) {
        throw new Error('Robot no encontrado');
      }
      const data = await response.json();
      data.imagen = data.imagen.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
      setActiveRobot(data);
    } catch (err) {
      setFetchError('Error al cargar los detalles: ' + err.message);
    }
  };

  if (isLoading) return <div>Cargando...</div>;
  if (fetchError) return <div>{fetchError}</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th><FormattedMessage id="nombreRobot" defaultMessage="Nombre" /></th>
                <th><FormattedMessage id="modeloRobot" defaultMessage="Modelo" /></th>
                <th><FormattedMessage id="empresaFabricante" defaultMessage="Empresa Fabricante" /></th>
              </tr>
            </thead>
            <tbody>
              {robotList.map((robot) => (
                <tr key={robot.id} onClick={() => loadRobotDetails(robot.id)} style={{ cursor: 'pointer' }}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <RobotDetail robotData={activeRobot} /> 
        </div>
      </div>
    </div>
  );
};

export default RobotsList;
