import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import { Link } from 'react-router-dom';


const Register = () => {

    const [newUser, setNewUser] = useState(true);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    const handleBlur = (e) => {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    }

    const handleRegister = (e) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                var user = userCredential.user;
                setUser(user);
                setLoggedInUser(user);
                history.replace(from);
                updateUserName(user.name);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name

        })
            .then(function () {
                console.log('user name Updated SuccessFully');
            })
            .catch(function (error) {
            });
    }


    return (
        <div class="mt-5">
            <h3 class="text-center">Register</h3>
            <form className="container w-50" onSubmit={handleRegister}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" onBlur={handleBlur} name="name" placeholder="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" onBlur={handleBlur} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                    <div id="emailHelp" class="form-text"><small>We'll never share your email with anyone else.</small></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password (at least 6 digit)</label>
                    <input type="password" onBlur={handleBlur} name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" onBlur={handleBlur} name="Confirm Password" class="form-control" id="exampleInputPassword2" placeholder="Password" required />
                </div>
                <input class="btn btn-primary mb-2" type="submit" value={newUser ? 'Register' : 'Login'} />
            </form>
            <div>
                <p class="container text-center mb-3"><small>Already have an account? </small><Link to="/login">login</Link></p>
            </div>
        </div>
    );
};

export default Register;
