import BookingForm from "../BookingForm/BookingForm";
import './BookingPage.css';
import Title from "../Title/Title";
export default function BookingPage() {
    return (
        <section className="container">
            <div className="booking-page">
                <Title 
                    title="Make Your reservation" 
                    description="Fill out the form to guarantee your table in advance." 
                />
                <BookingForm />
            </div>
        </section>
    );
}