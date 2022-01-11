// import Pizzaphoto from './images/pizzaphoto.jpg';
import Header from './components/Header';
import Booking from './components/Booking';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
        {/* <img src="https://i.pinimg.com/600x315/a1/21/3c/a1213c822eaaa56a285b7cab977b99da.jpg"/> */}
      <header className="App-header">
        <h1>Senior Stateless Pizzeria Compadre Casa Bonita Buffon Pizza Nut</h1>
        <h2>Che Cazzo Fare!</h2>
        {/* ;) */}
      </header>
      <section className='introduction'>
        <Header />
      </section>
      <section className='menu'>
        <Menu />
      </section>
    </div>
  );
}

export default App
