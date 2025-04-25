import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, selectedTime, guests, occasion);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="res-date">Choose date</label>
                <input 
                    type="date" 
                    id="res-date" 
                    name="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="res-time">Choose time</label>
                <select 
                    id="res-time" 
                    name="res-time" 
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)} 
                    required
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="guests">Number of guests</label>
                <input 
                    type="number" 
                    id="guests" 
                    name="guests"
                    placeholder="1" 
                    min="1" 
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select 
                    id="occasion" 
                    name="occasion" 
                    value={occasion} 
                    onChange={(e) => setOccasion(e.target.value)} 
                    required
                >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
            </div>

            <button type="submit" className="submit-button">
                Make Your Reservation
            </button>
        </form>
    );
}

export default BookingForm;