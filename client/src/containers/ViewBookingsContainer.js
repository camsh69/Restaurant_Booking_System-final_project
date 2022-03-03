import React from 'react';
import ViewBookings from '../components/ViewBookingsComponent/ViewBookings';

const ViewBookingContainer = ({booking}) => {
  return (
    <>
        <ViewBookings booking={booking} />
    </>  
  )
}

export default ViewBookingContainer