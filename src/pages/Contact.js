import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import LandingNavBar from "../components/LandingNavBar";
import ContactForm from "../components/ContactForm";

class Contact extends Component {
  render() {
    const fullPage = {
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      backgroundColor: '#141414',
    };

    return (
      <div className="app">
        <LandingNavBar />
        <div style={fullPage}>
          <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
            <Col md={6} lg={0}>
              <h1 style={{fontSize: '100px', color: 'ivory'}}>Get in touch!</h1>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;