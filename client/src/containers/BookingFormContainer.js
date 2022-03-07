import React from 'react';
import CustomerForm from '../components/BookingFormComponent/CustomerForm';
import FetchTable from '../components/BookingFormComponent/FetchTable';
import BookingForm from '../components/BookingFormComponent/BookingForm';
import Email from '../components/BookingFormComponent/Email';


const BookingFormContainer = ({newCustomer, newBooking, customers, restaurantTables}) => {
  return (
    <div>
      <FetchTable  restaurantTables={restaurantTables} />
    
      <CustomerForm newCustomer = {newCustomer} newBooking= {newBooking} customers ={customers}/>

      <BookingForm/>

      <Email/>

    </div>
  )
}
 
export default BookingFormContainer