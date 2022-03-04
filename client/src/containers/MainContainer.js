import React, {useState, useEffect} from 'react';
import Request from '../helpers/request';
import BookingFormContainer from './BookingFormContainer';
import ClientListContainer from './ClientListContainer';
import EditBookingContainer from './EditBookingContainer';
import SplashScreenContainer from './SplashScreenContainer';
import ViewBookingContainer from './ViewBookingsContainer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from '../components/NavBar';



const MainContainer = () => {

    const [customers, setCustomers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [restaurantTables, setRestaurantTables] = useState([]);
  
    const requestAll = function(){
      const request = new Request();
      const customerPromise = request.get('/api/customers')
      const bookingPromise = request.get('/api/bookings')
      const restaurantTablePromise = request.get('/api/tables')
  
      Promise.all([customerPromise, bookingPromise, restaurantTablePromise])
      .then((data) => {
        setCustomers(data[0]);
        setBookings(data[1]);
        setRestaurantTables(data[2])
      })
    }
  
    useEffect(()=>{
      requestAll()
    }, [])


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<SplashScreenContainer />} />
        <Route path="/view" element={<ViewBookingContainer bookings={bookings} />} />
        <Route path="/add" element={<BookingFormContainer customers = {customers}/>} />
        <Route path="/edit" element={<EditBookingContainer />} />
        <Route path="/clients" element={<ClientListContainer />} />
      </Routes>
    </Router>
  )
}

export default MainContainer