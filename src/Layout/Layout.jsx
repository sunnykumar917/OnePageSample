import React from 'react';
import Navbar from '../Components/Navbar/navbar'; 
import Footer from '../Components/Footer/Footer';  

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />  
     {children}
      <Footer />  
    </>
  );
}

export default Layout;
