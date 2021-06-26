import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../Login/Firebase.Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const AnotherLogin = () => {

    const [user, setUser] = useState({})

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    let googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleLoginIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setUser(user);
                setLoggedInUser(user);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div>
            <div class="d-flex border w-25 rounded mb-5 btn" onClick={handleGoogleLoginIn}>
                <img style={{width: '25px'}} src="https://img-authors.flaticon.com/google.jpg" class="mr-2" alt="" />
                <h6>Continue with Google</h6>
            </div>
        </div>
    );
};

export default AnotherLogin;
