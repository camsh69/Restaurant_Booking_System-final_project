import React from 'react';
import EditBooking from '../components/EditBookingComponent/EditBooking';
import "../Styles/EditForm.css";

const EditBookingContainer = ({bookings, bookingUpdate}) => {
  return (
    <EditBooking bookings={bookings} bookingUpdate={bookingUpdate}/>
  )
}

export default EditBookingContainer