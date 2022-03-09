import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const fireSwal = withReactContent(Swal);

const BookingForm = ({ newBooking, email, phoneNumber, name, customers, startTime, endTime, noOfCustomers, tables, customerId, loyaltyCard, completeFlag, customerFormComplete }) => {

  const [message, setMessage] = useState("");

  const handleMessageChange = (ev) => setMessage(ev.target.value);

  const getCountOfBookingsForACustomer = (customerId, customers) => {
    for (let customer of customers) {
      if (customer.id === customerId && customer.bookings.length % 2 === 0) {
        alert("Welcome again, give them a discount!");
      } 
    }
  }

  const handleSubmit = ev => {
    ev.preventDefault();

    completeFlag(true);

    getCountOfBookingsForACustomer(customerId, customers);
    
    const index = customers.length-1; 

    if(customerId === "") {
      newBooking({
        customer: {
        id: customers[index].id,
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        loyaltyCard: null
        },
        startTime: startTime,
        endTime: endTime,
        diners: noOfCustomers,
        message: message,
        receipt: null,
        tables: tables      
      });    
    } else {
      newBooking({
        customer: {
        id: customerId,
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        loyaltyCard: loyaltyCard,
        },
        startTime: startTime,
        endTime: endTime,
        diners: noOfCustomers,
        message: message,
        receipt: null,
        tables: tables      
      });
  }
}
  
  return (


    !customerFormComplete ? "" :
  
    <div className='form-container'>
      <div id = "detail">

    <form onSubmit={handleSubmit}>
      <h1>Add extra details</h1>

      <div className="group">
        <label htmlFor="message">Add message here:</label>
        <input
          type="message"
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
        />
      </div>

      <input className='style' type="submit" name="submit" value="Create Booking" autoFocus/>
    </form>
  </div>
  </div>
  );
}


export default BookingForm;
