import './BookingConfirmation.css';
import check from '../../assets/images/icon/check.svg';
import { useLocation } from 'react-router-dom'; 

export default function BookingConfirmation() {
    const location = useLocation();
    const { reservationDetails } = location.state;
    return (
        <section className="container">
            <div className="booking-confirmation">
                <img src={check} alt="check" />
                <h1 className="booking-confirmation-title">Your reservation was successful!</h1>
                <p className="booking-confirmation-description">Please check your email for your reservation details.</p>
            </div>
            <div className="booking-confirmation-details">
                <h2 className="booking-confirmation-details-title">Your reservation details:</h2>
                <div className="booking-confirmation-details-item">  
                    <p className="booking-confirmation-details-item-label">Name: <span>{reservationDetails.firstName} {reservationDetails.lastName}</span></p>
                    <p className="booking-confirmation-details-item-label">Email: <span>{reservationDetails.email}</span></p>
                    <p className="booking-confirmation-details-item-label">No. of Guest: <span>{reservationDetails.numberOfGuests}</span></p>
                    <p className="booking-confirmation-details-item-label">Date: <span>{reservationDetails.bookingDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span></p>
                    <p className="booking-confirmation-details-item-label">Time: <span>{reservationDetails.timeSlot}</span></p>
                    <p className="booking-confirmation-details-item-label">Occasion: <span>{reservationDetails.occasion}</span></p>
                </div>
            </div>
        </section>
    )
}