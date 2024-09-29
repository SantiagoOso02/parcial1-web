import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { login } from './api'; 

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const resetFields = () => {
        setUser('');
        setPass('');
        setIsError(false);
        setMessage('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const credentials = { login: user, password: pass };
            const response = await login(credentials);
            if (response.status === "success") {
                setIsError(false);
                navigate('/robotslist');
            }
        } catch (error) {
            setIsError(true);
            if (error.message === 'Credenciales incorrectas.') {
                setMessage('Error de autenticación. Revise sus credenciales.');
            } else {
                setMessage(error.message);
            }
        }
    };

    return (
        <Container style={{ marginTop: '3vh' }}>
            <Col lg={4} className="mx-auto">
                <h1 className="text-center"><FormattedMessage id="inicioSesion" /></h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUser" style={{ marginBottom: '3vh' }}>
                        <Form.Label><strong><FormattedMessage id="nombreUsuario" /></strong></Form.Label>
                        <Form.Control
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            style={{
                                borderColor: isError ? 'red' : '',
                                backgroundColor: isError ? '#f8f9fa' : '',
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPass">
                        <Form.Label><strong><FormattedMessage id="clave" /></strong></Form.Label>
                        <Form.Control
                            type="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            style={{
                                borderColor: isError ? 'red' : '',
                                backgroundColor: isError ? '#f8f9fa' : '',
                            }}
                        />
                    </Form.Group>
                    <Row>
                        <Col className="d-flex justify-content-between">
                            <Button variant="primary" type="submit" style={{ width: '45%', borderRadius: '0' }}>
                                <strong><FormattedMessage id="botonIngresar" /></strong>
                            </Button>
                            <Button variant="danger" type="button" style={{ width: '45%', color: '#000000', borderRadius: '0' }} onClick={resetFields}>
                                <strong><FormattedMessage id="botonCancelar" /></strong>
                            </Button>
                        </Col>
                    </Row>
                    {isError && (
                        <Form.Group className="mb-3">
                            <br />
                            <Form.Label className="text-danger">
                                <strong>
                                    <FormattedMessage id="mensajeError" defaultMessage={message} />
                                </strong>
                            </Form.Label>
                        </Form.Group>
                    )}
                </Form>
            </Col>
        </Container>
    );
};

export default LoginForm;
