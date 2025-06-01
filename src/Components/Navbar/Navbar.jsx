import React, { useState, useRef } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-50px';
  };

  return (
    <div className='Navbar'>
      <h1
        style={{
          background: "linear-gradient(267deg, #DA7C25 10%, #B923E1 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "Helvetica, Arial, sans-serif",
          letterSpacing: "2px",
        }}
      >
        Akash
      </h1>

      <img src={menu_open} onClick={openMenu} alt="Open menu" className='nav-mob-open' />

      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="Close menu" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === 'services' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} alt='Underline' />}
        </li>
      </ul>

      <div className='Nav-connect'>
        <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
