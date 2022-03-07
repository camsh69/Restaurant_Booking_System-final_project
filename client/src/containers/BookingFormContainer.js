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

      <BookingForm newBooking={newBooking} email={email} phoneNumber={phoneNumber} name={name} customerId={customerId} customers = {customers} />

      <Email/>
    </div>
  )
}
 
export default BookingFormContainer