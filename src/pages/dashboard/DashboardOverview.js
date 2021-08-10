
import React from "react";
import { Col, Row, Image } from '@themesberg/react-bootstrap';
import MockupPresentation2 from "../../assets/img/mockup-presentation2.gif";


export default () => {
  return (
    <>

    <Row className="justify-content-center form-bg-image">
            <Col xs={0.1} className="d-flex align-items-center justify-content-center">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h2>Admin Access</h2>
                  <h3 className="mb-0">Ger's Garage</h3>
                  <Image src={MockupPresentation2} alt="Mockup presentation2" />

                </div>
              </Col>
              </Row>

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      </div>


  </>
)
  }