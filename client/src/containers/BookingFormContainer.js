import React from 'react';
import CustomerForm from '../components/BookingFormComponent/CustomerForm';

const BookingFormContainer = ({newCustomer, newBooking}) => {
  return (
    <div>
      <CustomerForm newCustomer = {newCustomer} newBooking= {newBooking}/>
    </div>
  )
}
 
export default BookingFormContainer