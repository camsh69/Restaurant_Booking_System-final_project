import { useState } from 'react';

const BookingForm = ({ newBooking, email, phoneNumber, name, customers, startTime, endTime, noOfCustomers, tables, customerId, loyaltyCard }) => {

  const [message, setMessage] = useState("");

  const handleMessageChange = (ev) => setMessage(ev.target.value);

  const handleSubmit = ev => {
    ev.preventDefault();

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

      window.location.reload()
  }
}
  
  return (
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

      <input type="submit" name="submit" value="Create Booking" />
    </form>
  </div>
  </div>
  );
}


export default BookingForm;
