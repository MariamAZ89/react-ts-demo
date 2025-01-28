import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col className="p-0">
   
          <header className="sticky-top">
            <Navbar />
          </header>

  
          <main className="bg-dark text-light py-3">
            <Cards />
          </main>

          <footer className="bg-dark text-light">
            <Footer />
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export default App;