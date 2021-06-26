import React, { useContext, useState } from 'react';
import './Login.css';
import AnotherLogin from '../AnotherLogin/AnotherLogin';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import { Link } from 'react-router-dom';


const Login = () => {

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

    const handleLogin = (e) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log(newUserInfo);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                console.log(newUserInfo.error);
            });
        e.preventDefault();
    }


return (
    <div class="container mt-5 d-flex justify-content-center ">

        
        <form onSubmit={handleLogin} className="bg-dark p-5" >
        <h3 class="text-center text-light">Login</h3>
            <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label text-light">Email address</label>
                <input type="email" name="email" onBlur={handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div class="mb-3 ">
                <label for="exampleInputPassword1" class="form-label text-light">Password</label>
                <input type="password" name="password" onBlur={handleBlur} class="form-control" id="exampleInputPassword1" required />
            </div>
            <input class="btn btn-primary mb-3" type="submit" value="Login" />
            <p style={{color: 'red'}}>{user.error}</p>
        </form>
        {/* <div>
            <p><small>Don't have an account?</small> <Link to="/register">Register</Link></p>
        </div>
        <AnotherLogin></AnotherLogin> */}
    </div>
);
};

export default Login;
