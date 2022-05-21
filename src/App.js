import './App.css';
import { Routes, Route } from 'react-router-dom';


import Footer from './components//footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Management from './pages/Management';
import ContactUs from './pages/ContactUs';
import Booking from './pages/Booking';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Reservations from './admin/Reservations';
import SkyEvents from './admin/SkyEvents';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/fleet' exact element={<Fleet/>} />
        <Route path='/team' exact element={<Management/>} />
        <Route path='/contact' exact element={<ContactUs/>} />
        <Route path='/booking' exact element={<Booking/>} />
        <Route path='/admin' exact element={<Login/>} />
        <Route path='/admin/dashboard' exact element={<Dashboard/>} />
        <Route path='/admin/reservations' exact element={<Reservations/>} />
        <Route path='/admin/sky-events' exact element={<SkyEvents/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
