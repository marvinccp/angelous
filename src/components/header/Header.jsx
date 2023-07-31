// import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'


export const Header = () => {
  return (
    <section className="header_container">
      <nav className='nav_container'>
        <Link to={'/'}>
        <img className='nav_container_image' src="../../../src/assets/images/logo.png" alt="" />
        </Link>
        <h4>menu</h4>
      </nav>
    </section>
  );
}
