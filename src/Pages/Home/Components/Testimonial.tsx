import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true, // Enables centered slides
        centerPadding: "30px"
    };

    return (
        <div className="testimonial" style={{marginTop:"100px"}}>
            <div className="container">
                <div className="testimonial_area">
                    <h2 className="fs-50 testimonial-title" style={{ textTransform: 'uppercase' }}>Testimonial</h2>
                    <Slider {...settings} className="testimonial-slider">
                        {/* Slide 1 */}
                        <div className="testimonial-slider-content" style={{maxHeight:"537px"}}>
                            <div className="row">
                                <div className="col-6 pe-0">
                                    <div className="content-info">
                                        <img className="img-fluid quote" src="https://i.postimg.cc/Mp541zBf/quote.png" alt="img" />
                                        <p className="fs-24-thin quote-text">Good product,<br className="d-none d-lg-block" /> everything looks very<br className="d-none d-lg-block" /> good and I like it, next<br className="d-none d-lg-block" /> time I will order again<br className="d-none d-lg-block" /> here”</p>
                                        <img className="img-fluid client" src="https://i.postimg.cc/bvv5T40C/client-1.png" alt="img" />
                                        <div className="rating">
                                            <img className="img-fluid" src="https://i.postimg.cc/yYPnbv8w/star-rating.png" alt="img" />
                                        </div>
                                        <p className="fs-28 client-name">Juliana Silva</p>
                                    </div>
                                </div>
                                <div className="col-6 ps-0">
                                    <div className="content-img">
                                        <img className="img-fluid tst-img" src="https://i.postimg.cc/LXKzX1st/testimonial-img-1.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div className="testimonial-slider-content" style={{maxHeight:"537px"}}>
                            <div className="row">
                                <div className="col-6 pe-0">
                                    <div className="content-info">
                                        <img className="img-fluid quote" src="https://i.postimg.cc/Mp541zBf/quote.png" alt="img" />
                                        <p className="fs-24-thin quote-text-2">They have amazing <br className="d-none d-lg-block" /> furniture for great prizes,<br className="d-none d-lg-block" /> the quality is just great!! <br className="d-none d-lg-block" /> They showed me many <br className="d-none d-lg-block" /> different dinning tables.</p>
                                        <img className="img-fluid client" src="https://i.postimg.cc/yx63gXCZ/client-2.png" alt="img" />
                                        <div className="rating">
                                            <img className="img-fluid" src="https://i.postimg.cc/yYPnbv8w/star-rating.png" alt="img" />
                                        </div>
                                        <p className="fs-28 client-name">Jone Doe</p>
                                    </div>
                                </div>
                                <div className="col-6 ps-0">
                                    <div className="content-img">
                                        <img className="img-fluid tst-img" src="https://i.postimg.cc/L6nhcs92/testimonial-img-2.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Additional slides can be added similarly */}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
