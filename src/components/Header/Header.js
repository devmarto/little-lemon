import './Header.css';
import logo from '../../assets/images/little-lemon-logo.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
function Header(){
  return(
    <header>
      <div className="container">
        <div className="header-section">
          <Link to="/">
            <img src={logo} alt="Logo Little Lemon Restaurant"/>
          </Link>
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
              <Button label='Book a Reservation' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;