import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
     <div className="blog-details-section">
  <div className="container">
    <div className="blog-details-area">
      <div className="blog-details-button text-center">
        <Link to="/about"><button className="button btn_light">FURNITURE</button></Link>
       
      </div>
      <h2 className="fs-50 blog-details-title">Modern Studio Apartment Design Bedroom <br className="d-none d-lg-block" />
        and Living Space.</h2>
      <div className="zoom-img">
        <img className="img-fluid w-100" src="https://i.postimg.cc/8k9fyHw4/blog-dtls-img-1.png" alt="img" />
      </div>
      <p className="fs-29 blog-details-content">Cursus vitae congue mauris rhoncus. Amet est placerat in egestas erat.
        Pharetra magna ac placerat vestibulum lectus. Tortor posuere ac ut consequat. Adipiscing elit ut aliquam purus.
        Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Cursus metus aliquam eleifend mi in nulla posuere.
        Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Mollis nunc sed id semper risus in hendrerit.
        Risus nullam eget felis eget nunc lobortis mattis. Sed nisi lacus sed viverra. Eu augue ut lectus arcu bibendum at varius.</p>
      <div className="blog-details-content-two">
        <p className="fs-29">Lacus sed viverra tellus in hac. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Nunc scelerisque viverra mauris in aliquam sem.</p>
        <div className="side-border" />
      </div>
      <p className="fs-29 blog-details-content-three">Imperdiet dui accumsan sit amet. Nunc sed id semper risus in. Porta non pulvinar neque laoreet suspendisse interdum.
        Vulputate ut pharetra sit amet aliquam. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
        Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Lobortis scelerisque fermentum dui faucibus in.
        Cras fermentum odio eu feugiat pretium nibh.</p> 
      <div className="zoom-img">
        <img className="img-fluid w-100" src="https://i.postimg.cc/XvjrZD7j/blog-dtls-img-2.png" alt="img" />
      </div>
      <h2 className="fs-50 blog-details-title-two">Bedroom and Living Space. <br className="d-none d-lg-block" /></h2>
      <p className="fs-29">Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. 
        Elementum nibh tellus molestie nunc non blandit massa enim. A lacus vestibulum sed arcu non odio euismod lacinia at.
        Urna neque viverra justo nec ultrices dui. Quis blandit turpis cursus in hac habitasse. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. 
        Pellentesque nec nam aliquam sem et.</p>
      <div className="border-bottom">
        {/* null */}
      </div>
      <div className="prev-next-button-parent">
        <Link to="#">
          <button className="button btn_light_gray"><i className="fa-solid fa-arrow-left-long" />  Previous</button>
        </Link>
        <Link to="#">
          <button className="button btn_light_gray light_yellow">Next   <i className="fa-solid fa-arrow-right-long" /></button>
        </Link>
      </div> 
    </div>
  </div>
</div>

    );
};

export default Banner;