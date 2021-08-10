
import React,  {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup, Nav, Navbar } from '@themesberg/react-bootstrap';
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Axios from "axios";
import { Routes } from "../../routes";
import { HashLink } from 'react-router-hash-link';
import BgImage from "../../assets/img/illustrations/signin.svg";


export default () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const history = useHistory();

  Axios.defaults.withCredentials = true;
 
const fetchAll = async () => {

  let one = "http://localhost:3001/login";
  let two = "http://localhost:3001/login";

  const reqOne = Axios.post(one, {

    email: email,
    password: password,
    role: role, })
    .then((response) => {
      if (response.data.error) {  
        alert(response.data.error)

      } else {
        sessionStorage.setItem("token", response.data)
      }
     
    });

  const reqTwo = await Axios.get(two)
  
  .then((response) => {
    if (response.data.loggedIn === true) {
      setRole(response.data.user[0].role)
    
     if (role === 'staff') {
      history.push(Routes.Transactions.path);
    } if (role === 'costumer') {
      history.push(Routes.Presentation.path);
    }
  }
  }
  )

  
  Axios.all([reqTwo, reqOne])
 .then(() => {
 })
}


  return (
    <main>
 
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
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p>
            <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup onChange={(e) =>{
                      setEmail(e.target.value);
                    }}>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" placeholder="example@gmail.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup onChange={(e) =>{
                      setPassword(e.target.value);
                    }}>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Password" />
                      </InputGroup>
                    </Form.Group>
                  </Form.Group>
                  <Button onClick = {fetchAll} variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={"/examples/sign-up"} className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
