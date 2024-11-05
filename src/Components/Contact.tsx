import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact_section">
            <div className="container">
                <div className="contact_area">
                    <h2 className="fs-80 contact-title">{`Let’s`} 
                        <Link 
                            to="mailto:naharweb15@gmail.com" 
                            target="_blank" 
                            style={{ color: "black", textDecoration: "none" }} 
                        >
                            <span className="get-in-touch"> Get in Touch</span>
                        </Link>
                    </h2>
                    <Link to="/contact">
                        <button className="button btn_light contact-btn">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
