import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS


const Seller = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
       <div className="seller_section overflow-hidden"> 
  <div className="container">
    <div className="seller_area">
      {/* same css */}
      <div className="featured_area seller_area">
        <div className="feature-info">
          <h2 className="fs-50 seller-title" style={{textTransform: 'uppercase'}}>Best Seller</h2>
        </div>
        <div className="btn-area">
          <a href="#">
            <button className="button btn_light"> View
              more</button>
          </a>
        </div>
      </div>
      {/* same css */}
      <div className="row g-4">
        <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-offset={200} data-aos-delay={50} data-aos-duration={1200} data-aos-easing="ease-in-out" data-aos-once="false">
          <img className="img-fluid" src="https://i.postimg.cc/2847BTW1/seller-img-1.png" alt="img" />
          <p className="fs-24 seller-text">Vegan Leather Chair</p>
          <p className="fs-24-light">$ 79.00</p>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={200} data-aos-delay={50} data-aos-duration={1200} data-aos-easing="ease-in-out" data-aos-once="false">
          <img className="img-fluid" src="https://i.postimg.cc/wxNhSF0w/seller-img-2.png" alt="img" />
          <p className="fs-24 seller-text">Borrego Small Round
            Ottoman</p>
          <p className="fs-24-light">$ 79.00</p>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-offset={200} data-aos-delay={50} data-aos-duration={1200} data-aos-easing="ease-in-out" data-aos-once="false">
          <img className="img-fluid" src="https://i.postimg.cc/QddKxqJG/seller-img-3.png" alt="img" />
          <p className="fs-24 seller-text">Leather Deep-Seat
            Swivel Chair</p>
          <p className="fs-24-light">$ 79.00</p>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-offset={200} data-aos-delay={50} data-aos-duration={1200} data-aos-easing="ease-in-out" data-aos-once="false">
          <img className="img-fluid" src="https://i.postimg.cc/HLJJbsN6/seller-img-4.png" alt="img" />
          <p className="fs-24 seller-text">Grasscloth
            Nightstand</p>
          <p className="fs-24-light">$ 79.00</p>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={200} data-aos-delay={50} data-aos-duration={1200} data-aos-easing="ease-in-out" data-aos-once="false">
          <img className="img-fluid" src="https://i.postimg.cc/q79NwHV4/seller-img-5.png" alt="img" />
          <p className="fs-24 seller-text">2-Drawer Nightstand</p>
          <p className="fs-24-light">$ 79.00</p>
        </div>
        <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-offset={200} data-aos-delay={50} data-aos-duration={1200} data-aos-easing="ease-in-out" data-aos-once="false">
          <img className="img-fluid" src="https://i.postimg.cc/Vs9Jqh7P/seller-img-6.png" alt="img" />
          <p className="fs-24 seller-text">Dining Chair</p>
          <p className="fs-24-light">$ 79.00</p>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Seller;