import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkAdmin, setCheckAdmin] = useState(false);

    console.log(loggedInUser)

    useEffect(() => {
        fetch('https://stark-caverns-88671.herokuapp.com/checkAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setCheckAdmin(data));
    }, [loggedInUser.email])
    console.log(checkAdmin)


    return (
        <div className="col-md-3 sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 m-1 rounded" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                <div style={{ display: checkAdmin ? 'block' : 'none' }}>
                    <li>
                        <Link to="/addBlog" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageBlog" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Blog</span>
                        </Link>
                    </li>
                </div>

                <div style={{ display: checkAdmin ? 'none' : 'block' }}>
                    <li>
                        <Link to="/feedback" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Feedback</span>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;
