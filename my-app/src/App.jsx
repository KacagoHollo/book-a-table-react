// import Pizzaphoto from './images/pizzaphoto.jpg';
import React, {useState} from 'react';
import Header from './components/Header';
/* import Booking from './components/Booking'; */
import BookingForm from './components/BookingPage';
import Menu from './components/Menu';

function App() {
  const [showBooking, setShowBooking] = useState(true)
  const toggleBooking = (text) => {
    setShowBooking(!showBooking)
    console.log(text);
  }
  
  // console.log(props.text)
  return (
    <div className="App">
        {/* <img src="https://i.pinimg.com/600x315/a1/21/3c/a1213c822eaaa56a285b7cab977b99da.jpg"/> */}
        {/* ;) */}
      {/* <header className="App-header">
        <h1>Senior Stateless Pizzeria Compadre Casa Bonita Buffon Pizza Nut</h1>
        <h2>Che Cazzo Fare!</h2>
      </header>
      <section className='introduction'>
        <Header />
      </section>
      <section className='menu'>
        <Menu />
      </section>
      <section className='book'>
        <Booking />
      </section>
      <section>
        <BookingPage />
      </section> */}
      
      <div>
        {showBooking ? 
          <div>
            <header className="App-header">
              <h1>Senior Stateless Pizzeria Compadre Casa Bonita Buffon Pizza Nut</h1>
              <h2>Che Cazzo Fare!</h2>
            </header>
            <section className='introduction'>
              <h2>About</h2>
              <Header />
            </section>
            <section className='menu'>
              <h2 id="menu">Menu</h2>
              <Menu />
            </section>
            <button className='new-booking' onClick={toggleBooking}>Book a table</button>
          </div>
          : 
          <div>
            <section>
            <BookingForm toggleBooking={toggleBooking}/>            </section>
          </div>}
      </div>
    </div>
  );
}

export default App
