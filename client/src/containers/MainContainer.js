import React, {useState, useEffect} from 'react';
import Request from '../helpers/request';
import BookingFormContainer from './BookingFormContainer';
import ClientListContainer from './ClientListContainer';
import EditBookingContainer from './EditBookingContainer';
import SplashScreenContainer from './SplashScreenContainer';
import ViewBookingContainer from './ViewBookingsContainer';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";





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

    const findCustomerById = function(id){
    return customers.find((customer) => {
      return customer.id === parseInt(id);
    })
  }
  
  const handleCustomerPost = function(customer){
    const request = new Request();
    request.post("/api/customers", customer)
    .then(() => requestAll())
  }

  const findBookingById = function(id){
    return bookings.find((booking) => {
      return booking.id === parseInt(id);
    })
  }

  const handleBookingDelete = function(id){
    const request = new Request();
    const url = "/api/bookings/" + id
    request.delete(url)
    .then(() => requestAll())
  }

  const handleBookingPost = function(booking){
    const request = new Request();
    request.post("/api/bookings", booking)
    .then(() => requestAll())
  }

  const handleBookingUpdate = function(booking){
    const request = new Request();
    request.patch('/api/bookings/' + booking.id, booking)
    .then(() => requestAll())
  }





    useEffect(()=>{
      requestAll()
    }, [])

    


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<SplashScreenContainer />} />
        <Route path="/view" element={<ViewBookingContainer bookings={bookings} tables={restaurantTables}/>} />
        <Route path="/add" element={<BookingFormContainer restaurantTables={restaurantTables} newBooking={booking => handleBookingPost(booking)} newCustomer={customer => handleCustomerPost(customer)} customers = {customers}/>} />
        <Route path="/edit" element={<EditBookingContainer bookings={bookings} bookingUpdate={(booking) => (handleBookingUpdate(booking))}/>} />
        <Route path="/clients" element={<ClientListContainer customers={customers} />} />
      </Routes>
    </Router>
  )
}

export default MainContainer