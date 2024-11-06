import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite looping
        speed: 500, // Animation speed
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1 ,
        arrows: false 
    }
    return (
       <div className="about_section">
  <div className="container">
    <div className="about_area">
      <div className="row">
        <div className="col-md-12 col-lg-6 col-xl-7">
          <h2 className="fs-50 about-title">About Us</h2>
          <p className="fs-18-thin title-text">Living Edge is the
            foremost design destination for architects,
            interior <br className="d-none d-xl-block" />
            designers, design enthusiasts and those who share
            discerning taste. <br className="d-none d-xl-block" />
            We’re committed to authentic design
            and providing our clients with the <br className="d-none d-xl-block" />
            most distinguished and desirable products available. Those who share<br className="d-none d-xl-block" />
            discerning taste. We’re committed to authentic design</p>
          <div className="zoom-img res-img">
            <img className="img-fluid" src="https://i.postimg.cc/rF2BjzYK/about-img-1.png" alt="img" />    
          </div>
        </div>
        {/* <div class="d-md-none col-xl-1">
                  
              </div> */}
        <div className="d-none d-lg-block col-lg-6 col-xl-5">
          <div className="zoom-img res-img">
            <img className="img-fluid" src="https://i.postimg.cc/PfYcCTrh/about-img-2.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
    <div className="rating__section">
      <div className="row">
        <div className="col-lg-4">
          <div className="rating-parent">
            <div className="rating-content">
              <h2 className="fs-60 counter">4.5</h2>
              <div className="about-rating">
                <img className="img-fluid" src="https://i.postimg.cc/4ygW6HNG/star-rating.png" alt="img" />
              </div> <p className="fs-18-thin">937
                Rating</p>
              <p className="fs-18 rating-text">Brand
                Request</p>
            </div>
            <div className="rating-content">
              <h2 className="fs-60 counter">A+</h2>
              <div className="about-rating">
                <img className="img-fluid" src="https://i.postimg.cc/4ygW6HNG/star-rating.png" alt="img" />
              </div> <p className="fs-18-thin">1025
                Rating</p>
              <p className="fs-18 rating-text">Company
                Review</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
            <div className="about-hero-slider">
                <Slider {...settings}>
                    {/* Slide 1 */}
                    <div className="about-slider-content">
                        <h2 className="fs-50 rating_title">Trusted By Over 150,000 Customers Worldwide since 2010</h2>
                        <p className="fs-18-thin review-text">
                            "Your company is truly upstanding and is behind its product 100%. If you want real marketing that works and effective implementation - interior designer's. A set of architectural wall shelves really do the trick when it comes to organizing and displaying your stuff."
                        </p>
                        <div className="review-parent">
                            <div className="review-img">
                                <img className="img-fluid" src="https://i.postimg.cc/XYG9v74k/reviwe-client-img.png" alt="Client" />
                            </div>
                            <div className="review-content">
                                <p className="fs-18">Melinda H.</p>
                                <p className="fs-18-thin">Danish Modern LA</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Slide 2 */}
                    <div className="about-slider-content">
                        <h2 className="fs-50 rating_title">Trusted By Over 150,000 Customers Worldwide since 2010</h2>
                        <p className="fs-18-thin review-text">
                            "Your company is truly upstanding and is behind its product 100%. If you want real marketing that works and effective implementation - interior designer's. A set of architectural wall shelves really do the trick when it comes to organizing and displaying your stuff."
                        </p>
                        <div className="review-parent">
                            <div className="review-img">
                                <img className="img-fluid" src="https://i.postimg.cc/XYG9v74k/reviwe-client-img.png" alt="Client" />
                            </div>
                            <div className="review-content">
                                <p className="fs-18">Melinda H.</p>
                                <p className="fs-18-thin">Danish Modern LA</p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="about-slider-content">
                        <h2 className="fs-50 rating_title">Trusted By Over 150,000 Customers Worldwide since 2010</h2>
                        <p className="fs-18-thin review-text">
                            "Your company is truly upstanding and is behind its product 100%. If you want real marketing that works and effective implementation - interior designer's. A set of architectural wall shelves really do the trick when it comes to organizing and displaying your stuff."
                        </p>
                        <div className="review-parent">
                            <div className="review-img">
                                <img className="img-fluid" src="https://i.postimg.cc/XYG9v74k/reviwe-client-img.png" alt="Client" />
                            </div>
                            <div className="review-content">
                                <p className="fs-18">Melinda H.</p>
                                <p className="fs-18-thin">Danish Modern LA</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
      </div>
    </div> 
  </div>
</div>

    );
};

export default Banner;