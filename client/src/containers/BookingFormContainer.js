import React, {useState} from 'react';
import FetchTable from '../components/FetchTableFormComponent/FetchTable';

const BookingFormContainer = ({newBooking, restaurantTables}) => {
   
  return (
    <div><FetchTable  restaurantTables={restaurantTables} />
    </div>
  )
}

export default BookingFormContainer