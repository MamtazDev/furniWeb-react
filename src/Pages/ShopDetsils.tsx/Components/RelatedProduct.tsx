import React from 'react';
import Slider from 'react-slick'; // Import Slider

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RelatedProduct = () => {
    // Slider settings
    const settings = {
   
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="related-section">
            <div className="container">
                <div className="related-area">
                    <h2 className="fs-50 related-title" style={{ textTransform: 'uppercase' }}>Related Products</h2>
                    <div className="underline-border">
                        {/* null only css */}
                    </div>
                    <Slider {...settings} className="related-product-slider" >
                        <div className="related-slider-content">
                            <div className="content" style={{marginRight:"20px"}}>
                                <img className="img-fluid" src="https://i.postimg.cc/63vPJzJK/related-products-1.png" alt="img" />
                                <p className="fs-24 related-content">Vegan Leather Chair</p>
                                <p className="fs-24-thin">$ 80.00</p>
                            </div>
                        </div>
                        <div className="related-slider-content" style={{marginRight:"20px"}}>
                            <div className="content">
                                <img className="img-fluid" src="https://i.postimg.cc/TPZk9my4/related-products-2.png" alt="img" />
                                <p className="fs-24 related-content">Dining Chair</p>
                                <p className="fs-24-thin">$ 79.00</p>
                            </div>
                        </div>
                        <div className="related-slider-content" style={{marginRight:"20px"}}>
                            <div className="content">
                                <img className="img-fluid" src="https://i.postimg.cc/5Nxsnf0b/related-products-3.png" alt="img" />
                                <p className="fs-24 related-content">Leather Deep-Seat Swivel Chair</p>
                                <p className="fs-24-thin">$ 69.00</p>
                            </div>
                        </div>
                        <div className="related-slider-content" style={{marginRight:"20px"}}>
                            <div className="content">
                                <img className="img-fluid" src="https://i.postimg.cc/63vPJzJK/related-products-1.png" alt="img" />
                                <p className="fs-24 related-content">Vegan Leather Chair</p>
                                <p className="fs-24-thin">$ 80.00</p>
                            </div>
                        </div>
                        <div className="related-slider-content" style={{marginRight:"20px"}}>
                            <div className="content">
                                <img className="img-fluid" src="https://i.postimg.cc/TPZk9my4/related-products-2.png" alt="img" />
                                <p className="fs-24 related-content">Dining Chair</p>
                                <p className="fs-24-thin">$ 79.00</p>
                            </div>
                        </div>
                        <div className="related-slider-content">
                            <div className="content">
                                <img className="img-fluid" src="https://i.postimg.cc/5Nxsnf0b/related-products-3.png" alt="img" />
                                <p className="fs-24 related-content">Leather Deep-Seat Swivel Chair</p>
                                <p className="fs-24-thin">$ 69.00</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default RelatedProduct;
