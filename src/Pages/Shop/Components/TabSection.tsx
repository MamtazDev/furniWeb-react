import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const products = {
  "category-1": [
    { id: 1, title: "Vegan Leather Chair", price: "$90.00", img: "https://i.postimg.cc/vmhXw9kT/product-1.png" },
    { id: 2, title: "Borrego Small Round Ottoman", price: "$50.00", img: "https://i.postimg.cc/XJD8pWV0/product-2.png" },
    { id: 3, title: "Leather Deep-Seat Swivel Chair", price: "$80.00", img: "https://i.postimg.cc/J7swK4HZ/product-3.png" },
    { id: 4, title: "Rivera Sofa", price: "$110.00", img: "https://i.postimg.cc/FzT79Fmj/product-7.png" },
    { id: 5, title: "Natural Oak Wood Storage", price: "$150.00", img: "https://i.postimg.cc/3JbdVwth/product-8.png" },
    { id: 6, title: "Leather Deep-Seat Sofa", price: "$120.00", img: "https://i.postimg.cc/bJTvTYZK/product-9.png" },
  ],
  "category-2": [
    { id: 7, title: "Living Room Product 1", price: "$100.00", img: "https://i.postimg.cc/vmhXw9kT/product-1.png" },
    { id: 8, title: "Living Room Product 2", price: "$200.00", img: "https://i.postimg.cc/XJD8pWV0/product-2.png" },
  ],
  "category-3": [
    { id: 9, title: "Dining Table", price: "$300.00", img: "https://i.postimg.cc/J7swK4HZ/product-3.png" },
    { id: 10, title: "Dining Chair", price: "$90.00", img: "https://i.postimg.cc/FzT79Fmj/product-7.png" },
  ],
  "category-4": [
    { id: 11, title: "Storage Shelf", price: "$150.00", img: "https://i.postimg.cc/3JbdVwth/product-8.png" },
    { id: 12, title: "Modular Storage", price: "$250.00", img: "https://i.postimg.cc/bJTvTYZK/product-9.png" },
  ],
  "category-5": [
    { id: 13, title: "Bed Frame", price: "$400.00", img: "https://i.postimg.cc/vmhXw9kT/product-1.png" },
    { id: 14, title: "Mattress", price: "$600.00", img: "https://i.postimg.cc/XJD8pWV0/product-2.png" },
  ],
  "category-6": [
    { id: 15, title: "Office Desk", price: "$200.00", img: "https://i.postimg.cc/J7swK4HZ/product-3.png" },
    { id: 16, title: "Office Chair", price: "$150.00", img: "https://i.postimg.cc/FzT79Fmj/product-7.png" },
  ],
  "category-7": [
    { id: 17, title: "Outdoor Table", price: "$250.00", img: "https://i.postimg.cc/3JbdVwth/product-8.png" },
    { id: 18, title: "Garden Chair", price: "$80.00", img: "https://i.postimg.cc/bJTvTYZK/product-9.png" },
  ],
};

const TabSection = () => {
  const [activeCategory, setActiveCategory] = useState("category-1");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = activeCategory === "all" ? 6 : 2; // 6 for "All Products", 2 for others

  // Get the products for the active category
  const displayedProducts = activeCategory === "all" 
    ? Object.values(products).flat() // Flatten all products for "All Products"
    : products[activeCategory];

  // Calculate the current products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = displayedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination logic
  const totalPages = Math.ceil(displayedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="tab-section overflow-x-hidden">
      <div className="container">
        <div className="tab-area">
          <div className="btn-parent" style={{ marginBottom: '60px' }}>
            <button onClick={() => { setActiveCategory("all"); setCurrentPage(1); }} className={`filter button btn_dark ${activeCategory === "all" ? 'active' : ''}`}>All Product</button>
            <button onClick={() => { setActiveCategory("category-1"); setCurrentPage(1); }} className={`filter button btn_light_gray ${activeCategory === "category-1" ? 'active' : ''}`}>Living Room</button>
            <button onClick={() => { setActiveCategory("category-2"); setCurrentPage(1); }} className={`filter button btn_light_gray ${activeCategory === "category-2" ? 'active' : ''}`}>Dining &amp; Kitchen</button>
            <button onClick={() => { setActiveCategory("category-3"); setCurrentPage(1); }} className={`filter button btn_light_gray ${activeCategory === "category-3" ? 'active' : ''}`}>Storage &amp; Modular</button>
            <button onClick={() => { setActiveCategory("category-4"); setCurrentPage(1); }} className={`filter button btn_light_gray ${activeCategory === "category-4" ? 'active' : ''}`}>Bed Room</button>
            <button onClick={() => { setActiveCategory("category-5"); setCurrentPage(1); }} className={`filter button btn_light_gray ${activeCategory === "category-5" ? 'active' : ''}`}>Home Office</button>
            <button onClick={() => { setActiveCategory("category-6"); setCurrentPage(1); }} className={`filter button btn_light_gray ${activeCategory === "category-6" ? 'active' : ''}`}>Outdoor</button>
          </div>
          <div className="grid">
            <div className="grid-item initial-filter">
              <div className="row g-4 product-content">
                {currentProducts.map(product => (
                  <ProductCard key={product.id} title={product.title} price={product.price} img={product.img} />
                ))}
              </div>
            </div>
          </div>
          {/* pagination start */}
          <div className="pagination-section">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Previous" onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}>
                    <span aria-hidden="true">«</span>
                  </Link>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li className="page-item" key={index}>
                    <Link className={`page-link ${currentPage === index + 1 ? 'active' : ''}`} to="#" onClick={() => handlePageChange(index + 1)} style={{backgroundColor:"#eff422" ,color:"black" ,border:"none" ,width:"60px" ,height:"60px" ,display:"flex"}}>
                      {index + 1}
                    </Link>
                  </li>
                ))}
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Next" onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} >
                    <span aria-hidden="true">»</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* pagination end */}
        </div>
      </div>
    </div>
  );
};

export default TabSection;
