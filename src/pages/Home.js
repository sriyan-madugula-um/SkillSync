import React, { Component } from "react";

import { Button } from "react-bootstrap";

import LandingNavBar from "../components/LandingNavBar";
import LargeText from "../components/LargeText";
import { ProfilePanel } from "../components/ProfilePanel";

class Home extends Component {

    render() {
        // only accessible if logged in

        const fullPage = {
            height: '100vh', // 100% of viewport height
            width: '100vw', // 100% of viewport width
            margin: 0,
            padding: 0,
            backgroundColor:'#141414',
        };

        return (
            <div className="border border-primary border-5" style={fullPage}>
                <div style={{width:'30vw', height:'100vh'}}>
                    <ProfilePanel />
                </div>
            </div>
        );
    }
}

export default Home;