import React, { useState } from 'react';

const ProductsDetails = () => {
    const images = [
        "https://i.postimg.cc/ncY1DgYg/product-dtls-1.png",
        "https://i.postimg.cc/5tj5D0dW/product-dtls-2.png",
        "https://i.postimg.cc/VNT9w8mr/product-dtls-3.png",
        "https://i.postimg.cc/kGPxVvV7/product-dtls-4.png",
        "https://i.postimg.cc/HWbwqRKn/product-dtls-5.png"
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="product-details-section">
            <div className="container">
                <div className="product-details-area">
                    <div className="row product-res">
                        <div className="col-lg-6">
                            <div className="product-slider" style={{ position: 'relative' }}>
                                <div className="product-slider-content">
                                    <img
                                        className="img-fluid w-100 pb-2"
                                        id="MainImg"
                                        src={images[currentImageIndex]}
                                        alt="Product"
                                        style={{ borderRadius: '8px' }} // Optional styling for the main image
                                    />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    position: 'absolute',
                                    top: '50%',
                                    width: '100%',
                                    transform: 'translateY(-50%)'
                                }}>
                                    <button
                                        onClick={prevImage}
                                        className="slider-button"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            fontSize: '2rem',
                                            cursor: 'pointer',
                                            color: '#333',
                                            margin: '0 10px'
                                        }}
                                    >
                                        ❮
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="slider-button"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            fontSize: '2rem',
                                            cursor: 'pointer',
                                            color: '#333',
                                            margin: '0 10px'
                                        }}
                                    >
                                        ❯
                                    </button>
                                </div>
                            </div>
                            <div className="small-img-group" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                {images.map((img, index) => (
                                    <div key={index} className="small-img-col" onClick={() => setCurrentImageIndex(index)} style={{ cursor: 'pointer' }}>
                                        <img
                                            className="img-fluid w-100 small-img"
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            style={{ borderRadius: '4px', border: currentImageIndex === index ? '2px solid #333' : 'none' }} // Highlight selected thumbnail
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-description-section">
                                <h2 className="fs-50 description-title">Leather Deep-Seat Swivel Chair</h2>
                                <h4 className="fs-40 description-sub">$ 80.00</h4>
                                <p className="fs-18-thin description-text">
                                    The rich color and buttery softness of top-grain leather brings sleek sophistication to the breezy ease and modern attitude of our Oceanside swivel chair. 
                                    The wrap-around flow from arm to back gives it a neat,
                                    <span id="more" style={{display: 'none'}}>
                                        contemporary look. With its swivel feature, it offers flexibility and comfort, making it perfect for lounging or entertaining guests.
                                    </span>
                                    <a href="javascript:void(0);" id="read-more-link">Read More...</a>
                                </p>
                                <div className="color-parent">
                                    <span className="fs-20">Color :</span>
                                    <button id="color1" className="color-select color-selected-active" />
                                    <button id="color2" className="color-select" />
                                    <button id="color3" className="color-select" />
                                </div>
                                <div className="cart-parent">
                                    <div className="counter_btn">
                                        <button id="minus">-</button>
                                        <span id="count">0</span>
                                        <button id="plus">+</button>
                                    </div>
                                    <a href="# ">
                                        <button className="button btn_dark" type="submit">ADD TO CART</button>
                                    </a>
                                    <button id="loveButton" className="regularButton">
                                        <i id="heartIcon" className="far fa-heart" />
                                    </button>
                                </div>
                                <p className="fs-18-500 description-content">SKU REF: <span className="fs-18-500-gray">LA-1234</span></p>
                                <p className="fs-18-500 description-content">Categories: <span className="fs-18-500-gray">Table, Decoration, Living Room</span></p>
                                <p className="fs-18-500">Tags: <span className="fs-18-500-gray">Furniture, Modern, Table,...</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
