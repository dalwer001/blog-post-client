import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="row mt-2 headerContainer headerBg">
            <div className="col-md-6 headerLeft">
                <h1 style={{ fontSize: '65px' }} >Retro Tech</h1>
                <br/>
                <a href="#blog">
                    <button className="btn btn-lg btn-outline-warning mr-5">See Blogs</button>
                </a>
            </div>
        </div>
    );
};

export default Header;
