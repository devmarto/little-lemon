import "./TestimonialCard.css";
import Quote from "../../assets/images/icon/quote.svg";
import Star from "../../assets/images/icon/stars.svg";

export default function TestimonialCard({image, title, description, name, position, rating}){
  return (
    <article className="testimonial-card">
        <div className="testimonial-card-image">
            <img src={image} alt={name} />
        </div>
        <div className="testimonial-card-content">
            <div className="testimonial-card-content-quote">
                <img src={Quote} alt="Quote" />
            </div>
            <h3 className="testimonial-card-title">{title}</h3>
            <p className="testimonial-card-description">{description}</p>
            <div className="testimonial-card-rating">
                <img src={Star} alt="Star" />
            </div>
            <p className="testimonial-card-name">{name} - {position}</p>
        </div>
    </article>
  )
}