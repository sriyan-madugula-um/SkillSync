import React from 'react';
import { Row, Card, Button,  } from "react-bootstrap";

import {Link} from 'react-router-dom';

export const ProfileCard = ({user}) => {
  return (
      <Card style={{ width: '70%', margin: '50px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <div className="overflow-hidden rounded-circle" style={{ width: '150px', height: '150px', margin: 'auto', position: 'center', top: '25%' }}>
              <img className="img-fluid rounded-circle" src={user.avatar} style={{ width: '100%', height: '100%', margin:'10px'}} />
          </div>
          <Card.Body>
              <div className="position-relative" style={{ top: '35%' }}>
                  <Card.Title>{user.displayName}</Card.Title>
                  <Card.Text>{user.email}</Card.Text>
                  <Link to={user.dest}>
                    <Button variant="primary">Contact</Button>
                  </Link>
              </div>
          </Card.Body>
      </Card>
  )
}


export default ProfileCard;