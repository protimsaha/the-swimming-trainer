import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Auth/Login/Login'
import Register from './Pages/Auth/Register/Register'
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceBooking from './Pages/Home/Services/ServiceBooking/ServiceBooking';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Booking from './Pages/Home/Services/Booking/Booking';
import RequireAuth from './Pages/Auth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:serviceId' element={
          <RequireAuth>
            <ServiceBooking></ServiceBooking>
          </RequireAuth>
        }></Route>
        <Route path='/booking' element={
          <RequireAuth>
            <Booking></Booking>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
