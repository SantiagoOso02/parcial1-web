import React from 'react';
import { Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const RobotDetail = ({ robotData }) => {
  if (!robotData) return null;

  return (
    <Card style={{ width: "26rem", height: "26rem", backgroundColor: "#e2e6ea" }} className="mb-3">
      <Card.Body>
        <Card.Text>
          <div style={{ textAlign: "center" }}>
            <strong>
              <FormattedMessage id="nombreRobot" defaultMessage="Nombre:" />
            </strong> {robotData.nombre}
          </div>
          <br />
          <Card.Img
            className="d-block mx-auto"
            style={{ height: "10rem", width: "10rem" }}
            variant="top"
            src={robotData.imagen}
            alt={robotData.nombre}
          />
          <br />
          <strong>
            → <FormattedMessage id="modeloRobot" defaultMessage="Modelo:" />:
          </strong> {robotData.modelo}
          <br />
          <strong>
            → <FormattedMessage id="anioFabricacion" defaultMessage="Año de Fabricación:" />:
          </strong> {robotData.añoFabricacion}
          <br />
          <strong>
            → <FormattedMessage id="capacidadProcesamiento" defaultMessage="Capacidad de Procesamiento:" />:
          </strong> {robotData.capacidadProcesamiento}
          <br />
          <strong>
            → <FormattedMessage id="empresaFabricante" defaultMessage="Empresa Fabricante:" />:
          </strong> {robotData.empresaFabricante}
          <br />
          <strong>
            → <FormattedMessage id="estadoHumor" defaultMessage="Humor:" />:
          </strong> {robotData.humor}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RobotDetail;
