import React, { useState } from 'react';
import CustomerForm from '../components/BookingFormComponent/CustomerForm';
import FetchTable from '../components/BookingFormComponent/FetchTable';
import BookingForm from '../components/BookingFormComponent/BookingForm';
import Email from '../components/BookingFormComponent/Email';


const BookingFormContainer = ({ newCustomer, newBooking, customers, restaurantTables }) => {

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] =useState("");
  const [noOfCustomers, setNoOfCustomer] = useState(1);
  const [tables, setTables] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [loyaltyCard, setLoyaltyCard] = useState("");


  return (
    <div>
      <FetchTable restaurantTables={restaurantTables} sendStartTime={startTime => setStartTime(startTime)} sendEndTime={endTime => setEndTime(endTime)} sendNoOfCustomers={noOfCustomers => setNoOfCustomer(noOfCustomers)} sendTables={tables => setTables(tables)}/>
    
      <CustomerForm newCustomer={newCustomer} newBooking= {newBooking} customers ={customers} sendName={name => setName(name)} sendEmail={email => setEmail(email)} sendPhoneNumber={phoneNo => setPhoneNumber(phoneNo)} sendCustomerID={customerID => setCustomerId(customerID)} sendLoyaltyCard={loyaltyCard => setLoyaltyCard(loyaltyCard)} />

      <BookingForm newBooking={newBooking} email={email} phoneNumber={phoneNumber} name={name} customerId={customerId} customers={customers} startTime={startTime} endTime={endTime} noOfCustomers={noOfCustomers} tables={tables} loyaltyCard={loyaltyCard} />

      <Email/>
    </div>
  )
}
 
export default BookingFormContainer;