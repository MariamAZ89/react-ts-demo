import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';
import image1 from '../assets/images/1a.png';
import image2 from '../assets/images/1b.png';
import image3 from '../assets/images/1c.png';

const Cards: React.FC = () => {
  return (
    <>
      <Container fluid className="bg-dark text-light py-4">
        <h2 className="fs-1 text-white">New</h2>
        <hr className="text-secondary" />
      </Container>

      <Container fluid className="bg-dark py-3">
        <Row xs={1} sm={2} lg={3} className="g-3">

          <Col>
            <CardComponent
              src={image1}
              description="Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill"
            />
          </Col>

          <Col>
            <CardComponent
              src={image2}
              description="Ecco la nuova casa della musica latina"
            />
          </Col>
          <Col className="d-none d-lg-block">
            <CardComponent
              src={image3}
              description="Le ultime novità in fatto di Club House"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;