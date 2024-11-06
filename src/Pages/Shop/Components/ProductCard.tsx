import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, price, img }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="product-wrapper">
        <div className="zoom-img">
          <Link to="/shop-details"><img className="img-fluid" src={img} alt={title} /></Link>
        </div>
        <p className="fs-24 product-title">{title}</p>
        <span className="fs-24-thin">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
