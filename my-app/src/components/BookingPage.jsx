import React, { useState } from 'react';

const BookingForm = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredGuest, setEnteredGuest] = useState('');

    // let name = "";
    // let email = "";
    // let date = "";
    // let time = "";
    // let guests = "";

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

    // const actualDate = new Date();
    // const actualMilliseconds = actualDate.getTime();
    // const minimumArrival = actualMilliseconds + 7200000;
    // console.log(actualMilliseconds);
    // console.log(minimumArrival);

  return (
    <form>
      <div className='new-bookings'>
            <h1 className="booking">Book a Table</h1>
            <div className='new-booking'>
                <label>Name:</label>
                <input type='text' value={enteredName} onChange={nameChangeHandler}/>
            </div>
            <div className='new-booking'>
                <label>Email:</label>
                <input type='email' value={enteredEmail} onChange={emailChangeHandler}/>
            </div>
            <div className='new-booking'>
                <label>Date to book for:</label>
                <input type='date' value={enteredDate} min='' max='' onChange={dateChangeHandler} />
            </div>
            <div className='new-booking'>
                <label>Time of arrival:</label>
                <input type='time' value={enteredTime} min='0.01' step='0.01' onChange={timeChangeHandler} />
            </div>
            <div className='new-booking'>
                <label>No. of guests:</label>
                <input type='number' value={enteredGuest} min='1' step='1' onChange={guestChangeHandler}/>
            </div>
            <div className='new-booking'>
                <button type='submit' onClick={(event) => {
                  event.preventDefault();
                  console.log(enteredName);
                }}>BOOK</button>
            </div>
        </div>
    </form>
  );
};

export default BookingForm;