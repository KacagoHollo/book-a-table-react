import React, {useState} from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingPage';
import Menu from './components/Menu';



function App() {
  const [showBooking, setShowBooking] = useState(true)
  const toggleBooking = (text) => {
    setShowBooking(!showBooking)
    console.log(text);
  }
  
  return (
    <div className="App">
        {/* ;) */}
        {/* <h2>Che Cazzo Fare!</h2> */}
      <div>
        {showBooking ? 
          <div>
            <header className="App-header animated-title">
              <h1>Senior Stateless Pizzeria Compadre Casa Bonita Buffon Pizza Nut</h1>
              {/* <h2>Che Cazzo Fare!</h2> */}
            </header>
            <div className='content'>
              <section className='introduction'>
                <h2>About</h2>
                <Header />
              </section>
              <section className='menu'>
                <h2 id="menu">Menu</h2>
                <Menu />
              </section>
              <div className='btnDiv'> 
                <button className='new-booking' onClick={toggleBooking}><b>Book a table</b></button>
              </div>
            </div>
          </div>
          : 
          <div>
            <section className="pizza-triangle">
              <BookingForm toggleBooking={toggleBooking}/>
            </section>
          </div>}
      </div>
    </div>
  );
}

export default App
