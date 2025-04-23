import './Header.css';
import logo from '../../assets/images/little-lemon-logo.svg';

function Header(){
  return(
    <header>
      <div className="container">
        <div className="header-section">
          <img src={logo} alt="Logo Little Lemon Restaurant"/>
          <div className="header-section-navigation">
            <nav className="header-navigation">
              <ul className="header-wrapper-navigation">
                <li className="header-item-navigation">
                  <a href="#" className="header-link-navigation">Home</a>
                </li>
                <li className="header-item-navigation">
                  <a href="#" className="header-link-navigation">About</a>
                </li>
                <li className="header-item-navigation">
                  <a href="#" className="header-link-navigation">Menu</a>
                </li>
                <li className="header-item-navigation">
                  <a href="#" className="header-link-navigation">Order Online</a>
                </li>
              </ul>
            </nav>
            <a href>Book a Reservation</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;