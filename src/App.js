import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Management from './pages/Management';
import Booking from './pages/Booking';
import Event from './pages/Event';

import Footer from './components//footer/Footer';
import Header from './components/header/Header';
import TermsAndConditions from './components/footer/TermsAndConditions';
import PrivacyPolicy from './components/footer/PrivacyPolicy';

import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Reservations from './admin/Reservations';
import SkyEvents from './admin/SkyEvents';
import SkyReservations from './admin/SkyReservations';
import AddEvent from './admin/AddEvent';

import PrivateRoute from './routes/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import BadRoute from './components/homepage/BadRoute';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/fleet' exact element={<Fleet />} />
          <Route path='/team' exact element={<Management />} />
          <Route path='/booking' exact element={<Booking />} />
          <Route path='/skyevents/:id' exact element={<Event />} />
          <Route path='/admin' exact element={<Login />} />
          <Route path='*' element={<BadRoute/>} />
          <Route path='/admin/dashboard' exact element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path='/admin/reservations' exact element={
            <PrivateRoute>
              <Reservations />
            </PrivateRoute>
          } />
          <Route path='/admin/sky-events' exact element={
            <PrivateRoute>
              <SkyEvents />
            </PrivateRoute>
          } />
          <Route path='/admin/sky-events/add' exact element={
            <PrivateRoute>
              <AddEvent />
            </PrivateRoute>
          } />
          <Route path='/admin/add-skyevent' exact element={
            <PrivateRoute>
              <AddEvent />
            </PrivateRoute>
          } />
          <Route path='admin/sky-reservations' exact element={
            <PrivateRoute>
              <SkyReservations />
            </PrivateRoute>
          } />

          <Route path='/terms-and-conditions' exact element={<TermsAndConditions />} />
          <Route path='/privacy-policy' exact element={<PrivacyPolicy />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
