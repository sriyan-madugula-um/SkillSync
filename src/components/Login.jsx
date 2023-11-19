import React from "react";

import { auth , googleProvider} from "../firebase";
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect} from "firebase/auth";
import { Button } from "react-bootstrap";
import { useNavigate, Link,  } from "react-router-dom";

export const Login = (props) => {
    const nav = useNavigate();
    let isResult = true;
    var user = '';
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth,googleProvider);
            user = result.user.uid;
            nav('/home', {
                state: {
                    id: user
                }
            });
        } catch (err) {
            console.error(err);
            isResult = false;
        }
    };

  return (
        <Button className="primary" onClick={signInWithGoogle}>
            Login
        </Button>
  );
};