import React from 'react';
import EditBooking from '../components/EditBookingComponent/EditBooking';

const EditBookingContainer = ({bookings, bookingUpdate, handleDeleteClick}) => {
  return (
    <EditBooking handleDeleteClick={handleDeleteClick} bookings={bookings} bookingUpdate={bookingUpdate}/>
  )
}

export default EditBookingContainer