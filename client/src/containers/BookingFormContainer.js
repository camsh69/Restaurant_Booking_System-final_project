import React from 'react';
import CustomerForm from '../components/BookingFormComponent/CustomerForm';

const BookingFormContainer = ({newCustomer, newBooking, customers}) => {
  return (
    <div>
      <CustomerForm newCustomer = {newCustomer} newBooking= {newBooking} customers ={customers}/>
    </div>
  )
}
 
export default BookingFormContainer