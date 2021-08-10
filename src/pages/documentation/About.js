import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, ListGroup, Container, Nav, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";
import { HashLink } from 'react-router-hash-link';

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
                    <h2 className="text-primary fw-bold align-top">About Us</h2>
                  </span>
                </Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush price-list">
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>Ger's Garage offers daily news and reviews about all sorts of vehicles, but focusing essentially on cars and motorcycles available for sale in the North American market.

Our mission is to inform our readers of the latest development in the industry, but more importantly to be neutral consumer advocates. Comparing vehicle features to competing products and putting them in perspective from an expert point of view.

We hope our articles are as engaging as educative, and that every reader will be able to learn and takeaway valuable pieces of information.

TopSpeed.com is entirely financed by advertising, but we do not maintain any direct relationship with the manufacturers other than for getting access to the products.

We maintain ethical editorial guidelines to keep all the information safe and financially conservative for our readers.</strong>
                    </ListGroup.Item>
                    <h2 className="text-primary fw-bold align-top">Who Are We</h2>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                    Ger's Garage first came online in 2015 and has been online ever since.

Ger's Garage leverage a team of 10 contributors with deep automotive knowledge and a passion for journalism. Our experts are hard at work to bring you the latest news and reviews without bias nor compromises.

Our staff is only composed of full-time writers with a passion and expertise in their respective domains, ranging from passenger cars, heavy-duty trucks or aftermarket accessories.

Ger's Garage is mainly focused on cars, but we also cover other vehicles like trucks and motorcycles. We also offer lighter topics like our famous car games.
                    </ListGroup.Item>
                    <h2 className="text-primary fw-bold align-top">Awards</h2>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                    Cision placed our site in the top 3 automotive websites for 2017
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

