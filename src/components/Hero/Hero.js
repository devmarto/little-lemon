import Button from '../Button/Button';
import './Hero.css';
import hero from '../../assets/images/hero-image.png'
import { Link } from 'react-router-dom';

function Hero(){
  return(
    <section className="container">
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero-title">An unforgettable dinning experience awaits</h1>
          <p className="hero-subtitle">Enjoy local Chicago cuisine made with the finest ingredients and flavors  that will leave a lasting impression on you.</p>
          <Link to="/booking">
            <Button label="Reserve Your Table Now"/>
          </Link>
        </div>
        <div>
          <img src={hero} alt="Little Lemon Restaurant" />
        </div>
      </div>
    </section>
  )
}

export default Hero;