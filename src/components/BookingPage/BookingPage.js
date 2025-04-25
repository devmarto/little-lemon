import React, { useReducer } from 'react';
import BookingForm from '../BookingForm/BookingForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const UPDATE_TIMES = 'UPDATE_TIMES';

function timesReducer(state, action) {
  switch (action.type) {
    case UPDATE_TIMES:
      return updateTimes(action.payload);
    default:
      return state;
  }
}

function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
}

function updateTimes(selectedDate) {
  return initializeTimes();
}

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

    return (
        <>
            <Header />
            <BookingForm 
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
            <Footer />
        </>
    );
}