import Title from '../Title/Title';
import './About.css';
import about from '../../assets/images/restaurant.png';
function About(){
  return(
    <section className="container">
      <div className="about">
        <div className="about-text">
          <Title 
            title="Our Story" 
            description="Chicago's Finest Dining"
          />
          <div className="about-content">
            <p>
              Welcome to Little Lemon, your neighborhood haven for authentic Chicago cuisine. 
            </p>
            <p>
              We're passionate about crafting dishes that celebrate the Windy City's rich culinary heritage, using only the freshest, locally-sourced ingredients. 
            </p>
            <p>
              From classic favorites to innovative creations, our menu offers a taste of Chicago you won't soon forget. 
            </p>
          </div>
        </div>
        <div className="about-image">
          <img src={about} alt="Little Lemon Restaurant" />
        </div>
      </div>
    </section>
  )
}

export default About;