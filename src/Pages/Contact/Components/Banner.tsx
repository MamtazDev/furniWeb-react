import React from 'react';

const Banner = () => {
    return (
   <div className="contact-us-section">
  <div className="container" style={{maxWidth: 1200}}>
    <div className="contact-us-area">
      <h2 className="fs-50 contact-us-title">CONTACT US</h2>
      <div className="contact-info-row">
        <div className="contact-us-description">
          <h3 className="fs-40 contact-info-title">New York</h3>
          <p className="fs-20 contact-address">Address</p>
          <h4 className="fs-26 address-description">3517 W. Gray St. Utica, Pennsylvania 57867</h4>
          <p className="fs-20 contact-address">Phone Number</p>
          <h4 className="fs-26 address-description">(219) 555-0114</h4>
          <p className="fs-20 contact-address">Email Address</p>
          <h4 className="fs-26 address-description pb-0">debra.holt@example.com</h4>
        </div>
        <div className="contact-us-description">
          <h3 className="fs-40 contact-info-title">California</h3>
          <p className="fs-20 contact-address">Address</p>
          <h4 className="fs-26 address-description">8502 Preston Rd. Inglewood, Maine 98380</h4>
          <p className="fs-20 contact-address">Phone Number</p>
          <h4 className="fs-26 address-description">(239) 555-0108</h4>
          <p className="fs-20 contact-address">Email Address</p>
          <h4 className="fs-26 address-description pb-0">felicia.reid@example.com</h4>
        </div>
      </div>
    </div>
  </div>
</div>


    );
};

export default Banner;