// import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'


export const Header = () => {
  return (
    <section className="header_container">
      <nav className='nav_container'>
        <Link to={'/'}>
        <img className='nav_container_image' src="../images/logo.png" alt="logo-angelous" />
        </Link>
        <h4>menu</h4>
      </nav>
    </section>
  );
}
