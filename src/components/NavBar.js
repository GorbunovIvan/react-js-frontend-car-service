import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
      <nav>
        <ul>
          <li><Link to="/cars">All Cars</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
