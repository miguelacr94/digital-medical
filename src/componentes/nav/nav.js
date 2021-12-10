import React, { useState, useEffect } from 'react';
import { Button } from '../boton';
import { Link } from 'react-router-dom';
import './nav.css';
import nav from "./nav.json";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const goToSection = (id) => {
    const section = document.querySelector(id);
    const cors = section.getBoundingClientRect()
    window.scrollTo({
      top: cors.top,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (






    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div className='logo'></div>
          </Link>
          {/*------------------------------------- menu----------------- */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            {nav.map((nave =>

              <li className='nav-item'>
                <Link
                  className='nav-links'
                  onClick={() => goToSection(`#${nave.id}`)

                  }>
                  {nave.nombre}
                </Link>
              </li>

            ))}

            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {button && <Button buttonStyle='btn--outline'>Sacar Cita</Button>}
              </Link>
            </li>

          </ul>
          {/* ---------------------------------- End Menu --------------------- */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;