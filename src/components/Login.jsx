import React from "react";

import { auth , googleProvider} from "../firebase";
import {signInWithPopup} from "firebase/auth";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const nav = useNavigate();
    const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth,googleProvider);
        nav('/home')
        } catch (err){
        console.error(err);
        }
    };

  return (
    <Button className="primary" onClick={signInWithGoogle}>
        Login
    </Button>
  );
};