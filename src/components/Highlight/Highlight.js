import "./Highlight.css";
import Title from "../Title/Title";
import DishCard from "../DishCard/DishCard";
import Arrow from "../../assets/images/icon/arrow.svg";
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
            <img src={Arrow} alt="Arrow" />
          </a>
        </div>
        <div className="highlight-dishes">
          <DishCard
            title="Greek Salad"
            description="A delicious and flavorful perfect Greek Salad, bursting with fresh vegetables, salty feta, and a drizzle of olive oil."
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
            description="Wonderfully refreshing Lemon Dessert, perfect ending to any meal with its light and lively citrus notes."
            price="$ 9.99"
            image={LemonDessert}
          />
        </div>
      </div>
    </section>
  )
}

export default Highlight;