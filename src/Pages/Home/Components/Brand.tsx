import React from 'react';

const Brand = () => {
    return (
      <div className="brand_section">
  <div className="container">
    <div className="brand_area">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 col-xl-6">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-xl-6">
              <div className="brand-img-1">
                <img className="img-fluid w-100" src="https://i.postimg.cc/mrSnNBFF/brand-img-1.png" alt="img" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-6 ">
              <div className="brand-img-2">
                <img className="img-fluid w-100" src="https://i.postimg.cc/x8Ng72q5/brand-img-2.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-6 brand-info" style={{paddingLeft:"100px"}}>
          <h2 className="fs-50 brand-title" style={{textTransform: 'uppercase'}}>We Are the Biggest
            Furniture
            Brand</h2>
          <p className="fs-16 brand-text">It is a long established
            fact that
            a reader will be distracted by <br className="d-none d-xl-block" />the readable
            content of a page when looking at its
            layout.</p>
          <div className="row counter-info">
            <div className="col-md-4 col-lg-4 right">
              <h4 className="fs-30 counter">4.5K</h4>
              <p className="fs-16 counter-text">Products<br className="d-none d-lg-block" />
                Available</p>
            </div>
            <div className="col-md-4 col-lg-4 right">
              <h4 className="fs-30 counter">25</h4>
              <p className="fs-16 counter-text">Years<br className="d-none d-lg-block" />
                Established</p>
            </div>
            <div className="col-md-4 col-lg-4">
              <h4 className="fs-30 counter">120</h4>
              <p className="fs-16 counter-text">Store Across
                <br className="d-none d-lg-block" />
                the World</p>
            </div>
            <a href="#">
              <button className="button btn_light">Learn More <i className="fa-solid fa-arrow-right-long" /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Brand;