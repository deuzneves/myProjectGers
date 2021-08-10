import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, ListGroup, Container, Nav, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Routes } from "../../routes";

export default () => {
  return (
    <>
          <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="/" className="me-lg-3 d-flex align-items-center">
            <span className="ms-2 brand-text d-none d-md-inline">Ger's Garage</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
              <Nav.Link as={HashLink} to="/documentation/Services">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/Bookings/Booking">Book a Service</Nav.Link>
                <Nav.Link as={HashLink} to="/documentation/About">About us</Nav.Link>
                <Nav.Link as={HashLink} to="/documentation/Contact" className="d-sm-none d-xl-inline">Contact us</Nav.Link>
                <Nav.Link as={HashLink} to="/examples/sign-in">Sign in</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Container>
    <p>
            <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          </Container>
      <Row>
      <div className="d-flex align-items-center justify-content-center">
            <Col xs={16} md={10} lg={6} className="mb-5 mb-lg-0">
              <Card border="light" className="p-4">
                <Card.Header className="bg-white border-0 pb-0">
                  <span className="d-block">
                    <h2 className="text-primary fw-bold align-top">Contact Information</h2>
                  </span>
                </Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush price-list">
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>Phone number: </strong> +353 (083)427-4000
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>Email:</strong> gers.garage@gmail.com
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                       <strong>Facebook:</strong> https://facebook.com/GersGarage
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>Twitter:</strong>  https://twitter.com/GersGarage
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            </div>
            </Row>
            <Row>
            <div className="d-flex align-items-center justify-content-center">
            <Col xs={16} md={10} lg={6} className="mb-5 mb-lg-0">
            <Card border="light" className="p-4">
            <Card.Body>
                  <ListGroup className="list-group-flush price-list">
                    <ListGroup.Item>
                    <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /><strong>If you have any queries, please contact us. We would love to hear from you </strong>
                    </ListGroup.Item>
                    </ListGroup>
            </Card.Body>
            </Card>
            </Col>
            </div>
      </Row>
    </>
  );
};

