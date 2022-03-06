import React from 'react';
import BookingForm from '../components/BookingFormComponent/BookingForm';

const BookingFormContainer = ({booking, newCustomer}) => {
  return (
    <div><BookingForm booking ={booking} newCustomer = {newCustomer}/></div>
  )
}

export default BookingFormContainer