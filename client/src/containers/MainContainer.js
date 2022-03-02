import React, {useState, useEffect} from 'react';
import Request from '../helpers/request';


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
    <div>MainContainer</div>
  )
}

export default MainContainer