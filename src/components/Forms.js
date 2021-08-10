
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import Axios from "axios";

export const GeneralInfoForm = () => {

  //User details
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("")

  //Vehicle details
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [registration, setRegistration] = useState("");
  const [color, setColor] = useState("");
  const [engine_type, setEngine_type] = useState("");

  //booking details
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

   const fetchAll = () => {
     let one = "http://localhost:3001/api/insert2";
     let two = "http://localhost:3001/api/insert3";
     let three = "http://localhost:3001/api/insert4";

     const reqOne = Axios.post(one, {

      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
     } );

     const reqTwo = Axios.post(two, {

      brand: brand,
      model: model,
      year: year,
      registration: registration,
      color: color,
      engine_type: engine_type,

      
    });
     const reqThree = Axios.post(three, {

      service: service,
      date: date,
      time: time,
      comment: comment,
    
      
    });

     Axios.all([reqOne, reqTwo, reqThree])
    .then(() => {
      alert("Booked successfully")
    })
  }

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>First Name</Form.Label>
                <InputGroup onChange={(e) =>{
                      setFirst_name(e.target.value);
                    }}>
                <Form.Control required type="text" placeholder="Enter your first name" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <InputGroup onChange={(e) =>{
                      setLast_name(e.target.value);
                    }}>
                <Form.Control
                required type="text" placeholder="Also your last name" />
                </InputGroup>
              </Form.Group>
            </Col>
         
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <InputGroup onChange={(e) =>{
                      setEmail(e.target.value);
                    }}>
                <Form.Control required type="email" placeholder="name@company.com" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Phone</Form.Label>
                <InputGroup onChange={(e) =>{
                      setPhone_number(e.target.value);
                    }}>
                <Form.Control required type="text" placeholder="+353 (083)678-9100" />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          </Row>
          <h5 className="my-4">Car's Details</h5>
          <Row className="align-items-center">
           
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Brand</Form.Label>
                <InputGroup onChange={(e) =>{
                      setBrand(e.target.value);
                    }}>
                <Form.Select defaultValue="0">
                  <option value="0">Brand</option>
                  <option value="Audi">Audi</option>
                  <option value="Bently">Bently</option>
                  <option value="BMW">BMW</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Citroen">Citroen</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Fiat">Fiat</option>
                  <option value="Ford">Ford</option>
                  <option value="Honda">Honda</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Jaguar">Jaguar</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Kia">Kia</option>
                  <option value="Land Rover">Land Rover</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Mitsubishi">Mitsubishi</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Peugeot">Peugeot</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Renault">Renault</option>
                  <option value="Skoda">Skoda</option>
                  <option value="Subaru">Subaru</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Volkwasgen">Volkwasgen</option>
                  <option value="Volvo">Volvo</option>
                  <option value="Other">Other</option>
                </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group id="city">
                <Form.Label>Model</Form.Label>
                <InputGroup onChange={(e) =>{
                      setModel(e.target.value);
                    }}>
                <Form.Control required type="text" placeholder="Model" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Year</Form.Label>
                <InputGroup onChange={(e) =>{
                      setYear(e.target.value);
                    }}>           
                <Form.Select defaultValue="0">
                  <option value="0">Year</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group id="city">
                <Form.Label>Registration</Form.Label>
                <InputGroup onChange={(e) =>{
                      setRegistration(e.target.value);
                    }}>
                <Form.Control required type="text" placeholder="000-XX-0000" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Color</Form.Label>
                <InputGroup onChange={(e) =>{
                      setColor(e.target.value);
                    }}>
                <Form.Select defaultValue="0">
                  <option value="0">Color</option>
                  <option value="Black">Black</option>
                  <option value="Gray">Gray</option>
                  <option value="Silver">Silver</option>
                  <option value="White">White</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Other">Other</option>
                </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Engine type</Form.Label>
                <InputGroup onChange={(e) =>{
                      setEngine_type(e.target.value);
                    }}>
                <Form.Select defaultValue="0">
                  <option value="0">Engine type</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Eletric">Eletric</option>
                </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Service</Form.Label>
                <InputGroup onChange={(e) =>{
                      setService(e.target.value);
                    }}>
                <Form.Select defaultValue="0">
                  <option value="0">Service</option>
                  <option value="Annual Service">Annual Service</option>
                  <option value="Major Service">Major Service</option>
                  <option value="Repair / Fault">Repair / Fault</option>
                  <option value="Major Repair">Major Repair</option>
                </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="date">
                <Form.Label>Choose date</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setDate}
                  renderInput={(props, openCalendar) => (
                    <InputGroup >
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={date ? moment(date).format("DD/MM/YYYY") : ""}
                        placeholder="dd/mm/yyyy"
                        onFocus={openCalendar}
                       />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Time</Form.Label>
                <InputGroup onChange={(e) =>{
                      setTime(e.target.value);
                    }}>
                <Form.Select defaultValue="0">
                  <option value="0">Time</option>
                  <option value="9:00am">9:00am</option>
                  <option value="11:00am">11:00am</option>
                  <option value="13:00pm">13:00pm</option>
                  <option value="15:00pm">15:00pm</option>
                  <option value="17:00pm">17:00pm</option>
                </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
            </Row>
            <Col sm={10} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Comment</Form.Label>
                <InputGroup onChange={(e) =>{
                      setComment(e.target.value);
                    }}>
                <Form.Control required type="text" placeholder="Description of the problem" />
                </InputGroup>
              </Form.Group>
            </Col>
          <div className="mt-3">
            <Button onClick={fetchAll} variant="primary" type="submit">Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
