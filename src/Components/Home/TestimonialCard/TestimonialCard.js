import React from 'react';
import './testimonialCard.css';

const TestimonialCard = (props) => {

    const {name, email, description} = props.testimonial;

    return (
        <div className="col">
            <div className="container cardDesign testimonialCardInfo mt-5 p-3 btn">
                <div>
                    <h3 className="text-center mt-4">{name}</h3>
                    <h6 className="mt-4">{email}</h6>
                    <p className="mt-5">"{description}"</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
