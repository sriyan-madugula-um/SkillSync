import React from "react";
import { Row, Card, Button } from "react-bootstrap";
import {ImageButton} from "./ImageButton";
import pfp from '../logo512.png';


export const ProfilePanel = (props) => {


    return (
        <Card style={{height:'100vh'}}>
            <div className="overflow-hidden rounded-circle" style={{ maxWidth: '150px', maxHeight: '150px', margin: 'auto', position:'relative',  top:'25%'}}>
                {/* <img className="img-fluid rounded-circle" src={'https://static-production.npmjs.com/255a118f56f5346b97e56325a1217a16.svg'} alt={`john's Profile Picture`} style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> */}
                <ImageButton onClick={props.onClick} classname="img-fluid rounded-circle" src={props.img} style={{objectFit: 'cover', width: '100%', height:'100%'}} />
            </div>
            <Card.Body>
                <div className="position-relative" style={{top:'35%'}}>
                    <Card.Title>{props.displayname}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                    <Button variant="primary">View Profile</Button>
                </div>
            </Card.Body>
        </Card>
    )
}