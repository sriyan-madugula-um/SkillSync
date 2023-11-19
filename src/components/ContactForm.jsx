import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <Card className="contact-form-panel shadow">
      <Card.Header as="h3">Contact Form</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Type your message" />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;