import './Footer.css';
import logo from '../../assets/images/little-lemon-logo.svg';

function Footer(){
  return(
    <footer>
      <div className="container">
        <div className="footer-section">
          <div className="footer-about">
            <img src={logo} alt="Little Lemon" />
            <p className="footer-about-description">
              Little Lemon is a charming restaurant that offers a unique dining experience with a focus on fresh, locally-sourced ingredients. 
            </p>
          </div>
          <div className="footer-menu">
            <h3 className="footer-menu-title">Pages</h3>
            <nav>
              <ul className="footer-menu-list">
                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">Home</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">Menu</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">About Us</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">Find Us</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">Licensing</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-infos">
            <div className="footer-info">
              <h3 className="footer-info-title">Address</h3>
              <p className="footer-infos-description">782 S Westwood Blvd, Brooklin, Chicago 90024</p>
            </div>
            <div className="footer-info">
              <h3 className="footer-info-title">Hours</h3>
              <p className="footer-infos-description">Monday - Saturday: 9:00 AM - 12:00PM</p>
              <p className="footer-infos-description">Sunday: 6:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <hr className="footer-copyright-separator" />
          <div className="footer-copyright-content">
            <p className="footer-copyright-description">Copyright © 2025 Little Lemon - André Marto</p>
            <div className="footer-copyright-links">
              <a href="#" className="footer-copyright-link">Terms</a>
              <a href="#" className="footer-copyright-link">Privacy Policy</a>
              <a href="#" className="footer-copyright-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;