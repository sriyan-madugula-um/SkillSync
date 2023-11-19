import React from "react";
import { Button, Image, FormLabel } from "react-bootstrap";
import { Form } from "react-router-dom";

export const ImageButton = (props) => {
    return (
        <div style={props.style}>
            <Button onClick={props.onClick} className={props.classname + ' btn-link'} style={props.style}>
                <Image src={props.src}  style={{objectFit:'cover', width:'100%', height:'100%', borderRadius:40}} />
            </Button>
        
        </div>
        
    )
}