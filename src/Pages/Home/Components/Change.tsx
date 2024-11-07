import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";



const Change = () => {
 
  const settings = {
    infinite: true,
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true, 
    autoplay: false, 
    autoplaySpeed: 3000,
    nextArrow: <button type="button" className="slick-next">Next</button>,
    prevArrow: <button type="button" className="slick-prev">Previous</button>
  };

  return (
    <div className="change_section">
      <div className="container">
        <div className="change_area">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="change-slide-content">
              <div className="row">
                <div className="col-lg-4 change-slide-img">
                  <img
                    className="img-fluid"
                    src="https://i.postimg.cc/B6Vqqxpp/side-bed.png"
                    alt="img"
                  />
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 change-slide-img-2">
                      <img
                        className="img-fluid"
                        src="https://i.postimg.cc/hhFcmcH7/women.png"
                        alt="img"
                      />
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img
                        className="img-fluid"
                        src="https://i.postimg.cc/kgvR7pby/sofa-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="description">
                      <h3 className="change-title">Choose the change</h3>
                      <p className="change-text">
                        Consider partnering with interior designers who can
                        provide input on how to optimize the virtual room
                        visualization experience and offer design tips to
                        customers.
                      </p>
                      <Link to="/shop">
                        <button className="button btn_light">
                          VIEW COLLECTION {" "}
                          <i className="fa-solid fa-arrow-right-long" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="change-slide-content">
              <div className="row">
                <div className="col-lg-4 change-slide-img">
                  <img
                    className="img-fluid"
                    src="https://i.postimg.cc/B6Vqqxpp/side-bed.png"
                    alt="img"
                  />
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 change-slide-img-2">
                      <img
                        className="img-fluid"
                        src="https://i.postimg.cc/hhFcmcH7/women.png"
                        alt="img"
                      />
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img
                        className="img-fluid"
                        src="https://i.postimg.cc/kgvR7pby/sofa-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="description">
                      <h3 className="change-title">Choose the change</h3>
                      <p className="change-text">
                        Consider partnering with interior designers who can
                        provide input on how to optimize the virtual room
                        visualization experience and offer design tips to
                        customers.
                      </p>
                      <Link to="/shop       ">
                        <button className="button btn_light">
                          VIEW COLLECTION{" "}
                          <i className="fa-solid fa-arrow-right-long" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="change-slide-content">
              <div className="row">
                <div className="col-lg-4 change-slide-img">
                  <img
                    className="img-fluid"
                    src="https://i.postimg.cc/B6Vqqxpp/side-bed.png"
                    alt="img"
                  />
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 change-slide-img-2">
                      <img
                        className="img-fluid"
                        src="https://i.postimg.cc/hhFcmcH7/women.png"
                        alt="img"
                      />
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img
                        className="img-fluid"
                        src="https://i.postimg.cc/kgvR7pby/sofa-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="description">
                      <h3 className="change-title">Choose the change</h3>
                      <p className="change-text">
                        Consider partnering with interior designers who can
                        provide input on how to optimize the virtual room
                        visualization experience and offer design tips to
                        customers.
                      </p>
                      <Link to="/shop">
                        <button className="button btn_light">
                          VIEW COLLECTION{" "}
                          <i className="fa-solid fa-arrow-right-long" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Change;
