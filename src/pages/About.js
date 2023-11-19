import React, { Component, useState } from "react";
import { Row, Col } from "react-bootstrap";


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
            email: 'anishcha@umich.edu',
            avatar: 'https://media.licdn.com/dms/image/D5603AQHfs_0HYSceug/profile-displayphoto-shrink_800_800/0/1699142544635?e=1706140800&v=beta&t=vfh7DTcj-bbvPfBjBzuLDnAWyqPriJB_tDw6uqgXCGg',
            // Add more user information as needed
        };
        const user1 = {
            displayName: 'Soham Salunke',
            email: 'sohamsal@umich.edu',
            avatar: 'https://media.licdn.com/dms/image/D5603AQHYjwIFsrEpnw/profile-displayphoto-shrink_800_800/0/1690765018430?e=1706140800&v=beta&t=pFqbivlKdec0M-JM_2qZ9r9me75TfwRaCnzR_c9aZCA',
            // Add more user information as needed
        };
        const user2 = {
            displayName: 'Akul Gunukula',
            email: 'akulg@umich.edu',
            avatar: 'https://media.licdn.com/dms/image/D5603AQGOHyC1PUEkUA/profile-displayphoto-shrink_800_800/0/1694029301179?e=1706140800&v=beta&t=Wdv0ROUbGFdq0q-isd_Gp7MxCOFJNxuB4MEGA9PYE78',
            // Add more user information as needed
        };
        const user3 = {
            displayName: 'Sriyan Madugula',
            email: 'sriyan@umich.edu',
            avatar: 'https://media.licdn.com/dms/image/D4E03AQFTrP7N0qpa9Q/profile-displayphoto-shrink_800_800/0/1664580526929?e=1706140800&v=beta&t=kkwdkSFnNp2TKiKfKtDPQfp_H1x8krWC15_c-RbXUfw',
            // Add more user information as needed
        };


        return (
            <div className="app">
              <Row>
                <Col>
                  <AboutMe user={user} />
                </Col>
                <Col>
                  <AboutMe user={user1} />
                </Col>
                <Col>
                  <AboutMe user={user2} />
                </Col>
                <Col>
                  <AboutMe user={user3} />
                </Col>
              </Row>
            </div>
          );
    }
}

export default About;