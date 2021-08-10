import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faFolder, } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Container, Tooltip, OverlayTrigger, Navbar, Nav, } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import MockupPresentation2 from "../assets/img/mockup-presentation2.gif";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import Major from "../assets/img/Major.png";
import repair from "../assets/img/repair.png";
import majorRepair from "../assets/img/major-repair.png";


export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

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
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">Ger's Garage</h1>
              <p className="text-muted fw-light mb-5 h5">We offer the best service for the minimum price</p>
              <div className="d-flex align-items-center justify-content-center">
            
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                </div>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={10}>
              <Image src={MockupPresentation2} alt="Mockup presentation2" />
            </Col>
          </Row>
          </Container>
          </div>
 
      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
          <h1 className="fw-bolder text-secondary">Our Services</h1>
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">Annual Service </h2>
              <p className="mb-3 lead fw-bold">Our aim is to make it hassle free to you while you have your car serviceds</p>
              <p className="mb-4">Annual service is essential in keeping your vehicle reliable. Most breakdowns can be avoided by having your vehicle regularly serviced. At Ger's Garage we understand that your time is important, so we would like to take the hassle out of having repairs done on your vehicle by offering a collection and delivery service  </p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={MapboxImg} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
            </Row>

            <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">Major Service </h2>
              <p className="mb-3 lead fw-bold">We are committed to keeping you safe  Our stores, garages and mobile experts remain open to keep you on the road</p>
              <p className="mb-4">This 24 month complete service covers all areas of essential maintenance. In addition to all the items included in our Interim and Full Services, the Major Service covers items that are regularly recommended for replacement every two years, including your cabin filter and brake hydraulic fluid.  </p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={Major} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
          </Row>

          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
          <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">Repair / Fault </h2>
              <p className="mb-3 lead fw-bold">We are committed to keeping you safe.</p>
              <p className="mb-4">This 24h service is just one phone call away from you. We can assist you at any time of the day. If anything happened, do not panic, give us a call and we will take care of it  </p>       
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={repair} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
          </Row>

          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
          <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">Major Repair</h2>
              <p className="mb-3 lead fw-bold">If you are having problems with your car, make sure to call us and book and appointment. We offer collection and delivery service for you better comfort</p>
              <p className="mb-4">Major automobile repair means repair involving removal of heads, pans, transmissions; repairing, replacing, or overhauling of engines, motor transmissions; repairing or replacing driving mechanisms, steering mechanisms, differential assemblies; and repairing or replacing any other major automotive part or parts.  </p>       
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={majorRepair} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
          </Row>

          </Container>
          </section>

          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                <Image src={ThemesbergLogo} height={35} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Themesberg 2019-<span className="current-year">2021</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
    </>
  );
};
