import { useState } from 'react';

const BookingForm = ({ newBooking, email, phoneNumber, name, customers, startTime, endTime, noOfCustomers, tables, customerId, loyaltyCard, completeFlag, customerFormComplete, bookings }) => {

  const [message, setMessage] = useState("");

  const handleMessageChange = (ev) => setMessage(ev.target.value);

  function getCountOfBookingsForACustomer(customerId, bookings) {
    console.log("customer id", customerId, "bookings", bookings)
    let visitCount = 0
    for (let booking of bookings) {
      if (booking.customer.id === customerId) {
        visitCount += 1
      }
    }
    console.log("visit count", visitCount)
    if (visitCount > 0 && visitCount % 2 == 0) {
      alert("Welcome again, give them a discount!");
    }
  }

  const handleSubmit = ev => {
    ev.preventDefault();

    completeFlag(true);


    const index = customers.length-1;
    getCountOfBookingsForACustomer(customers[index].id, bookings)

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


      // window.location.reload()
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

      <input type="submit" name="submit" value="Create Booking" />
    </form>
  </div>
  </div>
  );
}


export default BookingForm;
