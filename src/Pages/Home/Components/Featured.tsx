import React from 'react';

const Featured = () => {
    return (
    <div className="featured_section">
  <div className="container">
    <div className="featured_area">
      <div className="feature-info">
        <h2 className="fs-50" style={{textTransform: 'uppercase'}}>Featured Category</h2>
        <p className="feature-text">Ornare aenean euismod elementum
          nisi quis eleifend quam.<br className="d-none d-lg-block" />
          Congue nisi vitae suscipit tellus.</p>
      </div>
      <div className="btn-area">
        <a href="#">
          <button className="button btn_light"> View more</button>
        </a>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-md-6 col-lg-4">
        <div className="feature-card">
          <div className="feature-img">
            <img className="img-fluid" src="https://i.postimg.cc/hv23Fr04/feature-img-1.png" alt="img" />
          </div>
          <div className="feature-btn">
            <a href="# ">
              <button className="button btn_white" type="submit">Living Room</button>
            </a>
            <a href="#">
              <button className="button btn_arrow"><i className="fa-solid fa-arrow-right-long" /></button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="feature-card">
          <div className="feature-img">
            <img className="img-fluid" src="https://i.postimg.cc/ZYHQybhk/feature-img-2.png" alt="img" />
          </div>
          <div className="feature-btn">
            <a href="# ">
              <button className="button btn_white" type="submit">Dining &amp; Kitchen</button>
            </a>
            <a href="#">
              <button className="button btn_arrow"><i className="fa-solid fa-arrow-right-long" /></button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="feature-card">
          <div className="feature-img">
            <img className="img-fluid" src="https://i.postimg.cc/TYHHCtwC/feature-img-3.png" alt="img" />
          </div>
          <div className="feature-btn">
            <a href="# ">
              <button className="button btn_white" type="submit">Storage &amp; Modular</button>
            </a>
            <a href="#">
              <button className="button btn_arrow"><i className="fa-solid fa-arrow-right-long" /></button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="feature-card">
          <div className="feature-img">
            <img className="img-fluid" src="https://i.postimg.cc/1X3JKF1k/feature-img-4.png" alt="img" />
          </div>
          <div className="feature-btn">
            <a href="# ">
              <button className="button btn_white" type="submit">Bedroom</button>
            </a>
            <a href="#">
              <button className="button btn_arrow"><i className="fa-solid fa-arrow-right-long" /></button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="feature-card">
          <div className="feature-img">
            <img className="img-fluid" src="https://i.postimg.cc/tCf2h7Sc/feature-img-5.png" alt="img" />
          </div>
          <div className="feature-btn">
            <a href="# ">
              <button className="button btn_white" type="submit">Home Office</button>
            </a>
            <a href="#">
              <button className="button btn_arrow"><i className="fa-solid fa-arrow-right-long" /></button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="feature-card">
          <div className="feature-img">
            <img className="img-fluid" src="https://i.postimg.cc/TPcVHP0f/feature-img-6.png" alt="img" />
          </div>
          <div className="feature-btn">
            <a href="# ">
              <button className="button btn_white" type="submit">Out Door</button>
            </a>
            <a href="#">
              <button className="button btn_arrow"><i className="fa-solid fa-arrow-right-long" /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Featured;