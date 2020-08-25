import React from 'react';
import Links from '../constants/links';
import Categories from '../components/Categories';
import { IoMdClose } from 'react-icons/io';
const Sidebar = ({ show, toggleShow }) => {
  return (
    <aside className={`sidebar ${show ? 'showSidebar' : ''}`}>
      <button className="close-btn" onClick={toggleShow}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links">
          <Categories />
        </Links>
      </div>
    </aside>
  );
};

export default Sidebar;
