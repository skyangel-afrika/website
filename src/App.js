import './App.css';
import { Routes, Route } from 'react-router-dom';


import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Management from './pages/Management';
import ContactUs from './pages/ContactUs';
import Booking from './pages/Booking';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/fleet' exact element={<Fleet/>} />
        <Route path='/management' exact element={<Management/>} />
        <Route path='/contact' exact element={<ContactUs/>} />
        <Route path='/booking' exact element={<Booking/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;