import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Container, Form, Button, ListGroup, Col, Row, Image } from 'react-bootstrap';

const socket = io('http://localhost:3001'); // Replace with your server URL

const Chat = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [copyState, setCopy] = useState("Sync Up ⚡️");

  useEffect(() => {
    // Listen for incoming messages
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Clean up the event listener when the component unmounts
      socket.off('chat message');
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = { username, text: newMessage };
      setMessages((prevMessages) => [...prevMessages, message]);
      socket.emit('chat message', message);
      setNewMessage('');
    }
  };

  return (
    <Container style={{ padding: '100px'}}>
        <Col stylexs={20} md={4}>
        <Row><img className="img-fluid rounded-circle" src={'https://media.licdn.com/dms/image/D5603AQGOHyC1PUEkUA/profile-displayphoto-shrink_800_800/0/1694029301179?e=1706140800&v=beta&t=Wdv0ROUbGFdq0q-isd_Gp7MxCOFJNxuB4MEGA9PYE78'} alt={`john's Profile Picture`} style={{ width: '50%', height: '50%', paddingBottom: '10px' }} /> <h2> Akul Gunukula</h2> </Row>         
        </Col>
        <div className="d-flex justify-content-start mb-1">
            <span class="badge badge-secondary m-1 p-2">Rust</span>
            <span class="badge badge-secondary m-1 p-2">Java</span>
        </div>
        <div className='d-flex justify-content-end ml-5'>
            <Button onClick={() => {setCopy("Copied!")}}>
                {copyState}
            </Button>
        </div>



      <ListGroup style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '15px', marginBottom: '10px',  }}>
        {messages.map((message, index) => (
          <ListGroup.Item key={index} style={{}}>
            <strong>{message.username || username || "You"}:</strong> {message.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSendMessage}>
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Chat;