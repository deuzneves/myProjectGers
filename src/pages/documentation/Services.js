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
              
                  <ListGroup className="list-group-flush price-list">
                  <Card.Header className="bg-white border-0 pb-0">
                  <span className="d-block">
                    <h2 className="text-primary fw-bold align-top">Annual Service</h2>
                    <h5>Price: €200</h5>
                  </span>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>Our aim is to make it hassle free to you while you have your car serviceds

Annual service is essential in keeping your vehicle reliable. Most breakdowns can be avoided by having your vehicle regularly serviced. At Ger's Garage we understand that your time is important, so we would like to take the hassle out of having repairs done on your vehicle by offering a collection and delivery service</strong>
                    </ListGroup.Item>
                    </Card.Header>
                    <Card.Header className="bg-white border-0 pb-0">
                    <h2 className="text-primary fw-bold align-top">Major Service</h2>
                    <h5>Price: €320</h5>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                    We are committed to keeping you safe  Our stores, garages and mobile experts remain open to keep you on the road

This 24 month complete service covers all areas of essential maintenance. In addition to all the items included in our Interim and Full Services, the Major Service covers items that are regularly recommended for replacement every two years, including your cabin filter and brake hydraulic fluid.
                    </ListGroup.Item>
                    </Card.Header>
                    <Card.Header className="bg-white border-0 pb-0">
                    <h2 className="text-primary fw-bold align-top">Repair / Faults</h2>
                    <h5>Price: €140</h5>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                    We are committed to keeping you safe.

This 24h service is just one phone call away from you. We can assist you at any time of the day. If anything happened, do not panic, give us a call and we will take care of it
                    </ListGroup.Item>        
                    </Card.Header>          
                    <Card.Header className="bg-white border-0 pb-0">
                    <h2 className="text-primary fw-bold align-top">Major Repair</h2>
                    <h5>Price: €410</h5>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                    Ger's Garage first came online in 2015 and has been online ever since.

Ger's Garage leverage a team of 10 contributors with deep automotive knowledge and a passion for journalism. Our experts are hard at work to bring you the latest news and reviews without bias nor compromises.

Our staff is only composed of full-time writers with a passion and expertise in their respective domains, ranging from passenger cars, heavy-duty trucks or aftermarket accessories.

Ger's Garage is mainly focused on cars, but we also cover other vehicles like trucks and motorcycles. We also offer lighter topics like our famous car games.
                    </ListGroup.Item>If you are having problems with your car, make sure to call us and book and appointment. We offer collection and delivery service for you better comfort

Major automobile repair means repair involving removal of heads, pans, transmissions; repairing, replacing, or overhauling of engines, motor transmissions; repairing or replacing driving mechanisms, steering mechanisms, differential assemblies; and repairing or replacing any other major automotive part or parts.
                    </Card.Header>
                    </ListGroup>
                   
              </Card>
            </Col>
            </div>
       </Row>
    </>
  );
};

