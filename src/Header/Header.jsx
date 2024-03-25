import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div>
    <header className='navbar'>

      {/* <img src="" alt="" className='logo' /> */}
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;
