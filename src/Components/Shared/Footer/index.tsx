import React from 'react';
import footerData from '../../../utils/data'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="container">
        <div className="footer__area">
          <div className="row g-md-4">
            <div className="col-md-6 pb-4 col-lg-3" style={{marginRight:"90px"}}>
              <div className="footer_logo">
                <Link to="/"><img className="img-fluid" src={footerData.logo} alt="img" /></Link>
                <p className="footer-logo-text">{footerData.copyright}</p>
                <div className="social-media">
                  {footerData.socialMedia.map((item, index) => (
                    <Link key={index} to={item.href} target="_blank" rel="noopener noreferrer">
                      <i className={item.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-md-none col-lg-1">
              {/* null div */}
            </div>
            <div className="col-md-6 pb-4 col-lg-2" >
              <div className="footer-menu">
                <p className="company-title">Company</p>
                {footerData.companyLinks.map((link, index) => (
                  <Link key={index} to={link.href}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-md-6 pb-4 col-lg-2" >
              <div className="footer-menu">
                <p className="company-title">Support</p>
                {footerData.supportLinks.map((link, index) => (
                  <Link key={index} to={link.href}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-md-6 pb-4 col-lg-4">
              <div className="footer-menu-2">
                <p className="company-title">Stay up to date</p>
                <form className="email_field">
                  <input required type="email" className="footer-form-control" placeholder="Your email address" />
                  <button className="button yellow" type="submit">Send</button>
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
