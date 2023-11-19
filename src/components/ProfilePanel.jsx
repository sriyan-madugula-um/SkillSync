import React from "react";
import { Row, Card, Button } from "react-bootstrap";
import {ImageButton} from "./ImageButton";
import pfp from '../logo512.png';

import anish from '../anishc.jpeg';


export const ProfilePanel = (props) => {


    return (
        <Card style={{height:'100vh'}}>
            <div className="overflow-hidden rounded-circle" style={{ width: '150px', height: '150px', position: 'center' }}>
              <img className="img-fluid rounded-circle" src={anish} style={{position:'absolute',  marginTop:'50px', marginRight: '20px'}} />
          </div>
            <Card.Body>
                <div className="position-relative" style={{top:'35%'}}>
                    <Card.Title>{props.displayname}</Card.Title>
                    <Card.Text>{props.desc}
                        <br />
                        <br />
                        <br />
                        <div style={{textAlign:'left'}}>
                            <ul><h3><b>Share</b></h3>
                                <li>
                                    <h5>C++</h5>
                                </li>
                                <li>
                                    <h5>Python</h5>
                                </li>
                            </ul>
                            <br />
                            <br />
                            <ul><h3><b>Learn</b></h3>
                                <li>
                                    <h5>React</h5>
                                </li>
                            </ul>
                        </div>
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}