import React from 'react';
import ProductsDetails from './Components/ProductsDetails';
import HappySection from './Components/HappySection';
import Testimonial from '../Home/Components/Testimonial';
import RelatedProduct from './Components/RelatedProduct';

const ShopDetails = () => {
    return (
     <>
     <ProductsDetails/>
     <HappySection/>
     <Testimonial/>
     <RelatedProduct/> 
     </>
    );
};

export default ShopDetails;