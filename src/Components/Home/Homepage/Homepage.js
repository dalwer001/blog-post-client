import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <Blog></Blog>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
