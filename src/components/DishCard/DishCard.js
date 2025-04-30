import "./DishCard.css";
import Delivery from "../../assets/images/icon/delivery.svg";

function DishCard({title, description, price, image}) {
    return (
        <article className="dish-card">
            <img className="dish-card__image" src={image} alt={title} />
            <div className="dish-card__info">
                <h3 className="dish-card__title">{title}</h3>
                <p className="dish-card__price">{price}</p>
            </div>
            <p className="dish-card__description">{description}</p>
            <a href="#" className="dish-card__button">
                Order a delivery
                <img src={Delivery} alt="Delivery" width={24} height={24}/>
            </a>
        </article>
    )
}

export default DishCard;