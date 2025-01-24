import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>

        <Row className="mb-3">
          <Col className="d-flex">
            <p className="mb-0 text-white me-3">Italy</p>
            <p className="mb-0 text-secondary border-start ps-3">English (UK)</p>
          </Col>
        </Row>


        <Row className="mb-3">
          <Col>
            <p className="mb-0 text-secondary">
              Copyright &copy; 2024 <span className="text-white">Apple Inc.</span> Tutti i diritti riservati.
            </p>
          </Col>
        </Row>


        <Row>
          <Col className="d-flex flex-wrap">
            <a href="#" className="text-secondary text-decoration-none me-3 border-end pe-3">
              Condizione dei servizi internet
            </a>
            <a href="#" className="text-secondary text-decoration-none me-3 border-end pe-3">
              Apple Music & privacy
            </a>
            <a href="#" className="text-secondary text-decoration-none me-3 border-end pe-3">
              Avviso sui cookie
            </a>
            <a href="#" className="text-secondary text-decoration-none me-3 border-end pe-3">
              Supporto
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Feedback
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;