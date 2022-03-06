import React from 'react'

const Booking = ({booking, passedDownSetBooking, passedDownSetCustomer}) => {

  const handleClick = (booking) => {
    passedDownSetBooking(booking)
    passedDownSetCustomer(booking.customer.name)


  }
  return (
    <div >Booking Reference: &nbsp; {booking.id} <button onClick={() => handleClick(booking) } >Fill Form</button> </div>
  )
}

export default Booking