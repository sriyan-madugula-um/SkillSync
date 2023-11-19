import React, { Component, useState } from "react";

import { Button } from "react-bootstrap";

import LandingNavBar from "../components/LandingNavBar";
import LargeText from "../components/LargeText";
import { ProfilePanel } from "../components/ProfilePanel";
import AboutMe from "../components/AboutMe";

class About extends Component {

    render() {
        // only accessible if logged in

        const fullPage = {
            height: '100vh', // 100% of viewport height
            width: '100vw', // 100% of viewport width
            margin: 0,
            padding: 0,
            backgroundColor:'#141414',
        };

        const user = {
            displayName: 'Anish Chandra',
            email: 'john.doe@example.com',
            avatar: '../anishc.jpg',
            // Add more user information as needed
        };
        const user1 = {
            displayName: 'Soham Salunke',
            email: 'john.doe@example.com',
            avatar: '../sohams.jpg',
            // Add more user information as needed
        };
        const user2 = {
            displayName: 'Akul Gunukula',
            email: 'john.doe@example.com',
            avatar: '../akulg.jpg',
            // Add more user information as needed
        };
        const user3 = {
            displayName: 'Sriyan Madugula',
            email: 'john.doe@example.com',
            avatar: '../sriyanm.jpg',
            // Add more user information as needed
        };


        return (
            <div className="app" >
                <AboutMe user={user} />
                <AboutMe user={user1} />
                <AboutMe user={user2} />
                <AboutMe user={user3} />
            </div>
        );
    }
}

export default About;