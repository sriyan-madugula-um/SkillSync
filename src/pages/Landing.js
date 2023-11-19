import React, { Component } from "react";

import { Button } from "react-bootstrap";
import LandingNavBar from "../components/LandingNavBar";

import LargeText from "../components/LargeText";
import backgroundImage from "./Landing_3.png";

import { Login } from "../components/Login";

import {Link} from 'react-router-dom';


function Landing() {

        var btns = []
        let text = ["About Us", "Contact Us", "Login/Signup"]
        let url = ['/about', '/contact'];

        for(let i = 0; i < 2; ++i) {
            btns.push(
                <Link to={url[i]}>
                    <Button variant="transparent" className="mr-3 ml-3">
                        {text[i]}
                    </Button>
                </Link>
            )
        }

        btns.push(
            <Login />
        )

        const fullPage = {
            height: '100vh', // 100% of viewport height
            width: '100vw', // 100% of viewport width
            margin: 0,
            padding: 0,
        };

        return (
            <div className="" style={fullPage}>
                <div className="bg-img" style = {{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    height: '120vh', 
                }}> 
                <LandingNavBar style={{}} buttons={btns} />
                </div>
                <div className="" style={{position:'absolute', top:'40%', left:'5%'}}>
                    <LargeText text="SkillSync" />
                    <h1 style={{textAlign:'left', color:'ivory'}}>Transforming careers through shared learning ✨</h1>
                </div>
            </div>
        
        );
    }

export default Landing;