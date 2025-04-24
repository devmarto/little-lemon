import "./Highlight.css";
import Title from "../Title/Title";
import DishCard from "../DishCard/DishCard";
import GreekSalad from "../../assets/images/greek-salad.png";
import Bruschetta from "../../assets/images/bruschetta.png";
import LemonDessert from "../../assets/images/lemon-dessert.png";

function Highlight(){
  return(
    <section className="container">
      <div className="highlight">
        <div className="highlight-header">
          <Title 
            title="Special of the week" 
            description="Discover a perfect blend of local tradition and modern culinary art, made with the freshest ingredients."
          />
          <a href="#" className="highlight-button">
            Explore our full menu 
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3333 16.0002H6.66663" stroke="#F4CE14" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.6666 22.6667L25.3333 16" stroke="#F4CE14" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.6666 9.3335L25.3333 16.0002" stroke="#F4CE14" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="highlight-dishes">
          <DishCard
            title="Greek Salad"
            description="A bright and flavorful Greek Salad, bursting with fresh vegetables, salty feta, and a drizzle of olive oil."
            price="$ 9.99"
            image={GreekSalad}
          />
          <DishCard
            title="Bruchetta"
            description="A delightful harmony of toasted bread, ripe tomatoes, fragrant basil, and a drizzle of balsamic glaze."
            price="$ 9.99"
            image={Bruschetta}
          />
          <DishCard
            title="Lemon Dessert"
            description="A wonderfully refreshing Lemon Dessert, the perfect ending to any meal with its light and lively citrus notes that cleanse the palate."
            price="$ 9.99"
            image={LemonDessert}
          />
        </div>
      </div>
    </section>
  )
}

export default Highlight;