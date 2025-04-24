import "./DishCard.css";

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
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0909 15.9196L12.1717 13.4519L21.3356 10.6641L14.6661 20.0013H11.9983H6.66278L10.0909 15.9196Z" stroke="#F4CE14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9983 20.0016C12.0044 22.511 10.265 24.6872 7.81597 25.2343C5.36693 25.7814 2.86683 24.5523 1.80442 22.2789C0.742015 20.0055 1.403 17.2991 3.39378 15.7714C5.38455 14.2437 8.16976 14.3054 10.0909 15.9199" stroke="#F4CE14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="25.3372" cy="20.0016" r="5.33556" stroke="#F4CE14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.3356 7.99649L24.0033 6.6626" stroke="#F4CE14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25.3372 20.0016L21.3356 7.99658" stroke="#F4CE14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.33055 9.33052H13.3322" stroke="#F4CE14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3356 10.6641L14.6661 20.0013H6.66278L12.1717 13.4479L21.3356 10.6641Z" stroke="#F4CE14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.6661 20.0017L10.6644 9.33057" stroke="#F4CE14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </article>
    )
}

export default DishCard;