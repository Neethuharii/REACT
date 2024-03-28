import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../cartContext';
const Header = () => {
  const { count } = useCart();
  return (

    <>
      <div className='container-fluid'>

        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item"><NavLink to="/" className="nav-link " >Home</NavLink></li>
            <li className="nav-item"><NavLink to="/products" className="nav-link">Products</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            
            <li className="nav-item">
              <NavLink to="/your-cart" className="nav-link">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="black" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
              </svg>
                <span className='cart-icon'>{count}</span>
              </NavLink>
            </li>
            

          </ul>
        </header>
      </div>
    </>

  );
};

export default Header;
