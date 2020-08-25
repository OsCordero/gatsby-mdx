import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import SEO from './SEO';
const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <SEO />
      <Navbar toggle={() => setShowSidebar(!showSidebar)} />
      <Sidebar
        show={showSidebar}
        toggleShow={() => setShowSidebar(!showSidebar)}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
