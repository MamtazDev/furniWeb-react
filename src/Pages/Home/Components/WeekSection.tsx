// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import React from "react";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const WeekSection = () => {
  return (
    <div className="week_section" style={{marginBottom:'100px'}}>
      <div className="container">
        <div className="week_area">
          {/* same css */}
          <div className="featured_area seller_area">
            <div className="feature-info">
              <h2
                className="fs-50 week-title"
                style={{ textTransform: "uppercase" }}
              >
                Featured this week
              </h2>
            </div>
            <div className="btn-area">
              <Link to="/shop">
                <button className="button btn_light"> View more</button>
              </Link>
            </div>
          </div>
          {/* same css */}
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
          
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="week-slider-content">
                <img
                  className="img-fluid"
                  src="https://i.postimg.cc/QMJDsfrc/week-img-1.png"
                  alt="img"
                />
                <h4 className="fs-20 week-slider-text">
                  Natural Oak Wood Storage
                </h4>
                <p className="fs-20-light">$ 89.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="week-slider-content">
                <img
                  className="seller-img img-fluid"
                  src="https://i.postimg.cc/d1QY0Gqp/week-img-2.png"
                  alt="img"
                />
                <h4 className="fs-20 week-slider-text">
                  Leather Deep-Seat Sofa
                </h4>
                <p className="fs-20-light">$ 110.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="week-slider-content">
                <img
                  className="seller-img img-fluid"
                  src="https://i.postimg.cc/7PWkxCjt/week-img-3.png"
                  alt="img"
                />
                <h4 className="fs-20 week-slider-text">Wood Dining Table</h4>
                <p className="fs-20-light">$ 60.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="week-slider-content">
                <img
                  className="seller-img img-fluid"
                  src="https://i.postimg.cc/7PWkxCjt/week-img-3.png"
                  alt="img"
                />
                <h4 className="fs-20 week-slider-text">
                  Lakin White Oak Sideboard
                </h4>
                <p className="fs-20-light">$ 70.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="week-slider-content">
                <img
                  className="seller-img img-fluid"
                  src="https://i.postimg.cc/QMJDsfrc/week-img-1.png"
                  alt="img"
                />
                <h4 className="fs-20 week-slider-text">
                  Natural Oak Wood Storage
                </h4>
                <p className="fs-20-light">$ 89.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="week-slider-content">
                <img
                  className="seller-img img-fluid"
                  src="https://i.postimg.cc/d1QY0Gqp/week-img-2.png"
                  alt="img"
                />
                <h4 className="fs-20 week-slider-text">
                  Leather Deep-Seat Sofa
                </h4>
                <p className="fs-20-light">$ 110.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="week-slider-content">
                <img
                  className="seller-img img-fluid"
                  src="https://i.postimg.cc/7PWkxCjt/week-img-3.png"
                  alt="img"
                />
                <h4 className="fs-20 week-slider-text">Wood Dining Table</h4>
                <p className="fs-20-light">$ 60.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="week-slider-content">
                <img
                  className="seller-img img-fluid"
                  src="https://i.postimg.cc/7PWkxCjt/week-img-3.png"
                  alt="img"
                />
                <h4 className="fs-20 week-slider-text">
                  Lakin White Oak Sideboard
                </h4>
                <p className="fs-20-light">$ 70.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="week-slider-content">
                <img
                  className="seller-img img-fluid"
                  src="https://i.postimg.cc/QMJDsfrc/week-img-1.png"
                  alt="img"
                />
                <h4 className="fs-20 week-slider-text">
                  Natural Oak Wood Storage
                </h4>
                <p className="fs-20-light">$ 89.00</p>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="week-slider">
            
            <div className="week-slider-content">
              <img
                className="seller-img"
                src="https://i.postimg.cc/d1QY0Gqp/week-img-2.png"
                alt="img"
              />
              <h4 className="fs-20 week-slider-text">Leather Deep-Seat Sofa</h4>
              <p className="fs-20-light">$ 110.00</p>
            </div>
            <div className="week-slider-content">
              <img
                className="img-fluid"
                src="https://i.postimg.cc/7PWkxCjt/week-img-3.png"
                alt="img"
              />
              <h4 className="fs-20 week-slider-text">Wood Dining Table</h4>
              <p className="fs-20-light">$ 60.00</p>
            </div>
            <div className="week-slider-content">
              <img
                className="img-fluid"
                src="https://i.postimg.cc/7PWkxCjt/week-img-3.png"
                alt="img"
              />
              <h4 className="fs-20 week-slider-text">
                Lakin White Oak Sideboard
              </h4>
              <p className="fs-20-light">$ 70.00</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WeekSection;
