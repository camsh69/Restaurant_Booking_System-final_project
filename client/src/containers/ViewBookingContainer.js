import React from 'react';
import ViewBookings from '../components/ViewBookingsComponent/ViewBookings';

const ViewBookingContainer = ({booking, tables}) => {
  return (
    <>
        <div>ViewBookingContainer</div>
        <ViewBookings booking={booking} tables={tables}/>
    </>  
  )
}

export default ViewBookingContainer