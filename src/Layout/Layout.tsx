import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import React from 'react';

const Layout = () => {
    return (
      <>
      <ScrollToTop/>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    );
};

export default Layout;