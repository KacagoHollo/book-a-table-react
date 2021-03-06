import React, { useState } from 'react';

const BookingForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredGuest, setEnteredGuest] = useState('');
    const [emailError, setEmailError] = useState('');

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const timeChangeHandler = (e) => {
        setEnteredTime(e.target.value);
    };

    const guestChangeHandler = (e) => {
        setEnteredGuest(e.target.value);
    };

    const actualDate = new Date();
    const today = actualDate.toISOString().split('T')[0];
    const actualHourPlusOne = actualDate.getHours() + 1;
    const actualMinute = actualDate.getMinutes();
    let minimumTime;

    const availableTimeForTheDay = () => {
        if (enteredDate === today) {
            minimumTime = actualHourPlusOne < 10 ? ("0" + actualHourPlusOne + ":" + actualMinute) : (actualHourPlusOne + ":" + actualMinute);
        } else {
            minimumTime = "";
        }
        return minimumTime;
    };

    const bookingDetails = `
        Booking details
        Name: ${enteredName}
        Email: ${enteredEmail}
        Date: ${enteredDate}
        Time: ${enteredTime}
        No. of guests: ${enteredGuest}
    `;

    const validateEmail = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!enteredEmail || regex.test(enteredEmail) === false ) {
            setEmailError("Wrong email format");
            return false;
        }
        return true;
    };

    const submitEvent = (e) => {
        e.preventDefault();
        if (validateEmail()) {
            props.toggleBooking(bookingDetails);
        };
    }

  return (
    <form onSubmit={submitEvent}>
      <div className='new-bookings'>
            <h1 className="booking">Book a Table</h1>
            <div className='new-booking'>
                <label>Name:</label>
                <input type='text' value={enteredName} onChange={nameChangeHandler} required />
            </div>
            <div className='new-booking'>
                <label>Email:</label>
                <input type='text' value={enteredEmail} onChange={emailChangeHandler} required />
                <p>{emailError}</p>
            </div>
            <div className='new-booking'>
                <label>Date to book for:</label>
                <input type='date' value={enteredDate} min={today} onChange={dateChangeHandler} required />
            </div>
            <div className='new-booking'>
                <label>Time of arrival:</label>
                <input type='time' value={enteredTime} min={availableTimeForTheDay()} onChange={timeChangeHandler} required/>
            </div>
            <div className='new-booking'>
                <label>No. of guests:</label>
                <input type='number' value={enteredGuest} min='1' step='1' onChange={guestChangeHandler} required/>
            </div>
            <div className='new-booking'>
                <button type="submit">BOOK</button>
            </div>
        </div>
    </form>
  );
};

export default BookingForm;
