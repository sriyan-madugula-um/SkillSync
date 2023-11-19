import React, { Component, useState, useEffect } from "react";

import { Button } from "react-bootstrap";

import LandingNavBar from "../components/LandingNavBar";
import LargeText from "../components/LargeText";
import { ProfilePanel } from "../components/ProfilePanel";

import { useLocation } from "react-router-dom";

import {doc, getDoc} from 'firebase/firestore';

import {database} from '../firebase';

import anish from '../anishc.jpeg'
import { onValue, ref } from "firebase/database";

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
        height: '100vh', // 100% of viewport height
        width: '100vw', // 100% of viewport width
        margin: 0,
        padding: 0,
        backgroundColor:'#141414',
    };

    return (
        <div className="border border-primary border-5" style={fullPage}>
            <div style={{width:'30vw', height:'100vh'}}>
                <ProfilePanel img={anish} displayname={'Anish Chandra'} desc={'An Aspiring Software Engineering Looking for Their First Professional Experience'}/>
            </div>
        </div>
    );
}


export default Home;