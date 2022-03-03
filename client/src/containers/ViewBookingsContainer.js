import React from 'react';
import ViewBookings from '../components/ViewBookingsComponent/ViewBookings';

const ViewBookingContainer = ({bookings}) => {
  return (
    <>
        <ViewBookings bookings={bookings} />
    </>  
  )
}

export default ViewBookingContainer