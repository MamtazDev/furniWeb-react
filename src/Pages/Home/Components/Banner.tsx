import React from "react";

const Banner = () => {
  return (
    <div className="hero_section">
      <div className="container">
        <div className="hero-area">
          <div className="color"></div>
          <div className="row">
            <div className="col-lg-6">
              <h2 className="hero-title">
                <img className="img-fluid" src="https://i.postimg.cc/FsGL06Tn/lamp.png" alt="img" />
                Discovering the Best
                <br className="d-none d-md-block d-lg-none" />
                Furniture for Your Home
                <img className="img-fluid" src="https://i.postimg.cc/FHBkBL5y/bed.png" alt="img" />
              </h2>
              <p className="hero-text">
                Embrace the beauty of minimalism in your home.
                <br className="d-none d-md-block d-lg-none" />
                Discover the power of less and how it can bring more to your
                life.
                <br className="d-md-block d-lg-none" />
                Elevate your home with our minimalist designs.
              </p>
              <div className="btn-group">
                <a href="# ">
                  <button className="button btn_dark" type="submit">
                    Shop Now
                  </button>
                </a>
                <a href="#">
                  <button className="button btn_light">
                    <i className="fa-regular fa-circle-play" />
                    Watch Video
                  </button>
                </a>
              </div>
              <div className="color-2"></div>
            </div>
            <div className="col-lg-6">
              <div className="hero-slider-section">
                <div className="content">
                  <img
                    className="img-fluid"
                    src="https://i.postimg.cc/rFhDDrpB/hero-sofa.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <img
                    className="img-fluid"
                    src="https://i.postimg.cc/rFhDDrpB/hero-sofa.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <img
                    className="img-fluid"
                    src="https://i.postimg.cc/rFhDDrpB/hero-sofa.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <img
                    className="img-fluid"
                    src="https://i.postimg.cc/rFhDDrpB/hero-sofa.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
