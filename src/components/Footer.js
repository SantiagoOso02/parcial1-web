import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '10px 0', 
            zIndex: 1000 
        }}>
            <Container>
                <p className="text-center">{'Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers'}</p>
            </Container>
        </footer>
    );
}

export default Footer;
