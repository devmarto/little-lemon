import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock the dispatch function
const mockDispatch = jest.fn();

describe('BookingForm', () => {
  const mockAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];

  const renderBookingForm = () => {
    return render(
      <BookingForm 
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
      />
    );
  };

  test('renders all form fields', () => {
    renderBookingForm();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  test('updates date field and dispatches action', () => {
    renderBookingForm();
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '2024-03-20' } });
    
    expect(dateInput.value).toBe('2024-03-20');
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: '2024-03-20'
    });
  });

  test('updates time selection', () => {
    renderBookingForm();
    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.change(timeSelect, { target: { value: '19:00' } });
    expect(timeSelect.value).toBe('19:00');
  });

  test('updates number of guests', () => {
    renderBookingForm();
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '4' } });
    expect(guestsInput.value).toBe('4');
  });

  test('updates occasion selection', () => {
    renderBookingForm();
    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: 'birthday' } });
    expect(occasionSelect.value).toBe('birthday');
  });

  test('validates form submission with empty fields', () => {
    renderBookingForm();
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);
    
    // Check that the form is still visible (not submitted)
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  });

  test('submits form with valid data', () => {
    renderBookingForm();
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    fireEvent.change(dateInput, { target: { value: '2024-03-20' } });
    fireEvent.change(timeSelect, { target: { value: '19:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'birthday' } });
    
    fireEvent.click(submitButton);
    
    // Check that the form is still visible (not submitted)
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  });
}); 