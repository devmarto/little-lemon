import './Header.css';
import logo from '../../assets/images/little-lemon-logo.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/images/icon/menu-burger.svg';
import closeIcon from '../../assets/images/icon/menu-close.svg';
import { useState, useEffect } from 'react';

function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showMenu = document.querySelector('.header-section-navigation');
  const menuMobile = document.querySelector('.header-section-navigation-mobile-icon');
  const closeMenu = document.querySelector('.header-section-navigation-mobile-close-icon');
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      showMenu.style.display = 'flex';
      showMenu.classList.add('active');
      menuMobile.style.display = 'none';
      closeMenu.style.display = 'block';
      document.body.classList.add('no-scroll');
    } 
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    showMenu.classList.add('closing');
    setTimeout(() => {
      showMenu.style.display = 'none';
      menuMobile.style.display = 'block';
      closeMenu.style.display = 'none';
      document.body.classList.remove('no-scroll');
      showMenu.classList.remove('active', 'closing');
    }, 300);
  }

  return(
    <header>
      <div className="container">
        <div className="header-section">
          <Link to="/">
            <img src={logo} alt="Logo Little Lemon Restaurant"/>
          </Link>
          <div className="header-section-navigation-mobile" onClick={toggleMenu}>
            <img className='header-section-navigation-mobile-icon' src={menuIcon} alt="Menu Icon"/>
            <img className='header-section-navigation-mobile-close-icon' src={closeIcon} alt="Close Icon" style={{display: isMenuOpen ? 'block' : 'none'}} onClick={handleCloseMenu}/>
          </div>
          <div className="header-section-navigation">
            <nav className="header-navigation">
              <ul className="header-wrapper-navigation">
                <li className="header-item-navigation">
                  <Link to="/" className="header-link-navigation">Home</Link>
                </li>
                <li className="header-item-navigation">
                  <Link to="" className="header-link-navigation">About</Link>
                </li>
                <li className="header-item-navigation">
                  <Link to="" className="header-link-navigation">Menu</Link>
                </li>
                <li className="header-item-navigation">
                  <Link to="" className="header-link-navigation">Order Online</Link>
                </li>
              </ul>
            </nav>
            <Link to="/booking">
              <Button label='Book a Reservation' onClick={handleCloseMenu}/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;