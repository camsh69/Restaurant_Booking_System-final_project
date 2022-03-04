import React from 'react';
import EditBooking from '../components/EditBookingComponent/EditBooking';

const EditBookingContainer = ({bookings, bookingUpdate}) => {
  return (
    <EditBooking bookings={bookings} bookingUpdate={bookingUpdate}/>
  )
}

export default EditBookingContainer