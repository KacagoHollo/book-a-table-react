import React, { useState } from 'react';
// import { useForm } from "react-hook-form";

const BookingForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredGuest, setEnteredGuest] = useState('');

    let name = "";
    // let email = "";
    // let date = "";
    // let time = "";
    // let guests = "";

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
        name=e.target.value;
        // console.log(name)
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

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    } 
        
    today = yyyy + '-' + mm + '-' + dd;

    let dt = new Date();
    // console.log(dt);
    let hrs = dt.getHours()+1;
    let mins = dt.getMinutes();
    // let secs = dt.getSeconds();
    let timo = dt.getTime();
    console.log(timo);
    console.log(dt);
    console.log(typeof(dt));
    console.log(dt.length)

    if (hrs < 10) {
        hrs = '0' + hrs;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    // if (secs < 10) {
    //     secs = '0' + secs;
    // }

    dt = hrs+":"+mins
    console.log(dt)

    // const actualDate = new Date();
    // const actualMilliseconds = actualDate.getTime();
    // const minimumArrival = actualMilliseconds + 7200000;
    // console.log(actualMilliseconds);
    // console.log(minimumArrival);
    
    props = {enteredName, enteredEmail, enteredDate, enteredTime, enteredGuest}

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
                <input talue={enteredEmail} onChange={emailChangeHandler} required/>
            </div>
            <div className='new-booking'>
                <label>Date to book for:</label>
                <input type='date' value={enteredDate} min={today} max='' onChange={dateChangeHandler} required />
            </div>
            <div className='new-booking'>
                <label>Time of arrival:</label>
                <input type='text' onChange={timeChangeHandler} pattern="/^(0?[1-9]|1[012]):[0-5][0-9]$/"/>
            </div>
            <div className='new-booking'>
                <label>No. of guests:</label>
                <input type='number' value={enteredGuest} min='1' step='1' onChange={guestChangeHandler} required/>
            </div>
            <div className='new-booking'>
                <button type='submit' onClick={(event) => {
                //   event.preventDefault();
                    event.stopPropagation();
                    console.log(props.enteredName);
                    console.log(props.enteredEmail);
                    console.log(props.enteredDate);
                    console.log(props.enteredTime);
                    console.log(props.enteredGuest);
                    console.log(name)
                }}>BOOK</button>
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