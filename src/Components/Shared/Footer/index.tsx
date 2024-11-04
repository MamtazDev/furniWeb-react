import React from 'react';

const Footer = () => {
    return (
       <div className="footer__section">
  <div className="container">
    <div className="footer__area">
      <div className="row g-md-4">
        <div className="col-md-6 pb-4  col-lg-3">
          <div className="footer_logo">
            <a href="./index.html"><img className="img-fluid" src="./images/footer-logo.png" alt="img" /></a>
            <p className="footer-logo-text">Copyright © 2021
              Landify UI Kit. <br className="d-none d-lg-block" />
              All rights reserved</p>
            <div className="social-media">
              <a href="#" target="_blank"><i className="fa-brands fa-instagram" /></a>
              <a href="#" target="_blank"><i className="fa-brands fa-dribbble" /></a>
              <a href="#" target="_blank"><i className="fa-brands fa-twitter" /></a>
              <a href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube" /></a>
            </div>
          </div>
        </div>
        <div className="d-md-none col-lg-1">
          {/* null div */}
        </div>
        <div className="col-md-6 pb-4 col-lg-2">
          <div className="footer-menu">
            <p className="company-title">Company</p>
            <a href="./index.html">Home</a>
            <a href="blog.html">Services</a>
            <a href="about.html">About Us</a>
            <a href="shop.html">Shop</a>
            <a href="contact.html">Contact Us</a>
          </div>
        </div>
        <div className="col-md-6 pb-4 col-lg-2">
          <div className="footer-menu">
            <p className="company-title">Support</p>
            <a href="#">Help center</a>
            <a href="#">Strategic
              Planning</a>
            <a href="#">Terms of service</a>
            <a href="#">Legal</a>
            <a href="#">Privacy policy</a>
            <a href="#">Status</a>
          </div>
        </div>
        <div className="col-md-6 pb-4 col-lg-4">
          <div className="footer-menu-2">
            <p className="company-title">Stay up to date</p>
            <form className="email_field">
              <input required type="email" className="form-control" placeholder="Your email address" />
              <a href="#"><button className="button yellow" type="submit">Send</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Footer;