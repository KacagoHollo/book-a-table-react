import React, { useState } from 'react';

const BookingForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredGuest, setEnteredGuest] = useState('');

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

    // const actualMilliseconds = actualDate.getTime();
    // const minimumArrival = actualMilliseconds + 7200000;
    // console.log(actualMilliseconds);
    // console.log(minimumArrival);

    const bookingDetails = `
        Name: ${enteredName}
    `;

    const submitEvent = (e) => {
        e.preventDefault();
        props.toggleBooking(bookingDetails);
    }

  return (
    <form>
      <div className='new-bookings'>
            <h1 className="booking">Book a Table</h1>
            <div className='new-booking'>
                <label>Name:</label>
                <input type='text' value={enteredName} onChange={nameChangeHandler} required />
            </div>
            <div className='new-booking'>
                <label>Email:</label>
                <input type="email" value={enteredEmail} onChange={emailChangeHandler} required />
            </div>
            <div className='new-booking'>
                <label>Date to book for:</label>
                <input type='date' value={enteredDate} min={today} onChange={dateChangeHandler} required />
            </div>
            <div className='new-booking'>
                <label>Time of arrival:</label>
                <input type='time' value={enteredTime} onChange={timeChangeHandler} required/>
            </div>
            <div className='new-booking'>
                <label>No. of guests:</label>
                <input type='number' value={enteredGuest} min='1' step='1' onChange={guestChangeHandler} required/>
            </div>
            <div className='new-booking'>
                <button onClick={submitEvent}>BOOK</button>
            </div>
        </div>
    </form>
  );
};

export default BookingForm;


// const handleClickEvent = (event) => {
//    document.getElementById('text').innerHTML = 'You clicekd me'
// };

//function Button(props) {
//   const {text, text2} = props;
//   console.log(text)
//   console.log(text2)

//  return (
//      <div>
//          <button onClick={handleClickEvent}>{props.text}</button>
//      </div>
