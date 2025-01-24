import React, { useState } from 'react';
import { Offcanvas, Navbar as BootstrapNavbar, Container, Button } from 'react-bootstrap';

const Navbar: React.FC = () => {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => setOffcanvasOpen(!isOffcanvasOpen);

  return (
    <>
      <BootstrapNavbar bg="dark" variant="dark" expand={false} className="mb-3">
        <Container fluid>
          <Button
            variant="outline-light"
            className="d-md-none"
            onClick={toggleOffcanvas}
            aria-controls="offcanvas-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30"
              height="30"
              className="bi bi-list"
            >
              <path
                fillRule="evenodd"
                d="M3.5 12.5a.5.5 0 0 1 0-1h23a.5.5 0 0 1 0 1h-23zm0 5a.5.5 0 0 1 0-1h23a.5.5 0 0 1 0 1h-23zm0 5a.5.5 0 0 1 0-1h23a.5.5 0 0 1 0 1h-23z"
              />
            </svg>
          </Button>

          <BootstrapNavbar.Brand href="#" className="text-danger">
            MyBrand
          </BootstrapNavbar.Brand>
        </Container>

        <Offcanvas
          show={isOffcanvasOpen}
          onHide={toggleOffcanvas}
          placement="start"
          id="offcanvas-menu"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;