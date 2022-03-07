import React from 'react';
import CustomerForm from '../components/BookingFormComponent/CustomerForm';
import FetchTable from '../components/FetchTableFormComponent/FetchTable';


const BookingFormContainer = ({newCustomer, newBooking, customers, restaurantTables}) => {
  return (
    <div>
      <FetchTable  restaurantTables={restaurantTables} />
    
      <CustomerForm newCustomer = {newCustomer} newBooking= {newBooking} customers ={customers}/>
    </div>
  )
}
 
export default BookingFormContainer