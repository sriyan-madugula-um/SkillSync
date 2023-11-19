import React, { Component, useState, useEffect } from "react";

import { Button, Card } from "react-bootstrap";

import LandingNavBar from "../components/LandingNavBar";
import LargeText from "../components/LargeText";
import { ProfilePanel } from "../components/ProfilePanel";

import { useLocation } from "react-router-dom";

import {doc, getDoc} from 'firebase/firestore';

import {database} from '../firebase';

import anish from '../anishc.jpeg'
import { onValue, ref } from "firebase/database";

import ProfileCard from "../components/ProfileCard";

import {useNavigation, Link} from 'react-router-dom';

import { Login } from "../components/Login";





let getDetails = async (uid) => {
    
}

function Home() {
    const loc = useLocation();

    const uid = loc.state.id;

    let details = {};

    //TODO FIX THIS

    onValue(
        ref(
            database, 'users'
        ),  
        (snapshot) => {
            details = snapshot.val();
        }
    )
    
    console.log(details);

    const fullPage = {
        height: '200vh', // 100% of viewport height
        width: '100vw', // 100% of viewport width
        margin: 0,
        padding: 0,
        backgroundColor:'#141414',
    };

    const user = {
        displayName: 'Anish Chandra',
        email: 'anishcha@umich.edu',
        avatar: 'https://media.licdn.com/dms/image/D5603AQHfs_0HYSceug/profile-displayphoto-shrink_800_800/0/1699142544635?e=1706140800&v=beta&t=vfh7DTcj-bbvPfBjBzuLDnAWyqPriJB_tDw6uqgXCGg',
        share1: "C++",
        share2: "Python", 
        share3: "JS", 
        learn: "React"// Add more user information as needed
    };
    const user1 = {
        displayName: 'Soham Salunke',
        email: 'sohamsal@umich.edu',
        avatar: 'https://media.licdn.com/dms/image/D5603AQHYjwIFsrEpnw/profile-displayphoto-shrink_800_800/0/1690765018430?e=1706140800&v=beta&t=pFqbivlKdec0M-JM_2qZ9r9me75TfwRaCnzR_c9aZCA',
        share1: "HTML",
        share2: "CSS", 
        share3: "JS", 
        learn: "C++"// Add more user information as needed
    };
    const user2 = {
        displayName: 'Akul Gunukula',
        email: 'akulg@umich.edu',
        avatar: 'https://media.licdn.com/dms/image/D5603AQGOHyC1PUEkUA/profile-displayphoto-shrink_800_800/0/1694029301179?e=1706140800&v=beta&t=Wdv0ROUbGFdq0q-isd_Gp7MxCOFJNxuB4MEGA9PYE78',
        // Add more user information as needed
        share1: "Rust",
        share2: "React", 
        share3: "", 
        learn: "Python", 
        dest: '/chat'
        
    };
    const user3 = {
        displayName: 'Sriyan Madugula',
        email: 'sriyan@umich.edu',
        avatar: 'https://media.licdn.com/dms/image/D4E03AQFTrP7N0qpa9Q/profile-displayphoto-shrink_800_800/0/1664580526929?e=1706140800&v=beta&t=kkwdkSFnNp2TKiKfKtDPQfp_H1x8krWC15_c-RbXUfw',
        share1: "Databases",
        share2: "Rust", 
        share3: "", 
        learn: "C++"// Add more user information as needed
    };

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
    return (
        <div className="" style={fullPage}>
            <LandingNavBar buttons={btns}/>
            <div style={{marginLeft:'45vw'}}>
                <ProfileCard user={user1}/>
                <ProfileCard user={user2}/>
                <ProfileCard user={user3}/>
            </div>
            
            <div style={{position:'absolute', top:'0%', width:'30vw', height:'100vh'}}>
                <ProfilePanel img={anish} displayname={'Anish Chandra'} desc={'An Aspiring Software Engineering Looking for Their First Professional Experience'}/>
            </div>

            
        </div>
    );
}


export default Home;