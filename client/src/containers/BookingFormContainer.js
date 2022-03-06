import React from 'react';
import BookingForm from '../components/BookingFormComponent/BookingForm';
import CustomerForm from '../components/BookingFormComponent/CustomerForm';

const BookingFormContainer = ({newBooking, newCustomer}) => {
  return (
    <div>
      <CustomerForm newCustomer = {newCustomer}/>
      <BookingForm newBooking = {newBooking} />
    </div>
  )
}
 
export default BookingFormContainer