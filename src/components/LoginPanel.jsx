import React from 'react';

import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const LoginPanel = () => {
    return(
        <Card className="login-panel shadow">
            <Card.Header as="h3">Login</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter your username" />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>
                    <Button className="mt-3" variant="success" type="submit" block>
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default LoginPanel;