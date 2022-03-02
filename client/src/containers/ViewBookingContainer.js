import React from 'react';
import ViewBookings from '../components/ViewBookingsComponent/ViewBookings';

const ViewBookingContainer = ({booking}) => {
  return (
    <>
        <div>ViewBookingContainer</div>
        <ViewBookings booking={booking} />
    </>  
  )
}

export default ViewBookingContainer