import React from 'react';

const RobotDetail = ({ robot }) => {
  if (!robot) return null; // Si no hay robot, no se muestra nada

  return (
    <div className="robot-detail mt-5">
      <h3>Detalles del Robot: {robot.nombre}</h3>
      <img src={robot.imagen} alt={robot.nombre} className="img-fluid" />
      <p><strong>Modelo:</strong> {robot.modelo}</p>
      <p><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
      <p><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
      <p><strong>Humor:</strong> {robot.humor}</p>
    </div>
  );
};

export default RobotDetail;
