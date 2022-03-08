import React from 'react'

const Booking = ({booking, passedDownSetBooking, passedDownSetCustomer, handleDeleteClick}) => {

  const handleClick = (booking) => {
    passedDownSetBooking(booking)
    passedDownSetCustomer(booking.customer.name)


  }
  return (
    <div className='input'>
    Booking Reference: &nbsp; {booking.id} <button onClick={() => handleClick(booking) } >Fill Form</button><button onClick={() => handleDeleteClick(booking.id) } >Delete</button>
     </div>
    
  )
}

export default Booking