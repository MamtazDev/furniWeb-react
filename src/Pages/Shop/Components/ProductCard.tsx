import React from 'react';

const ProductCard = ({ title, price, img }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="product-wrapper">
        <div className="zoom-img">
          <a href="/shop-details">
            <img className="img-fluid" src={img} alt={title} />
          </a>
        </div>
        <p className="fs-24 product-title">{title}</p>
        <span className="fs-24-thin">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
