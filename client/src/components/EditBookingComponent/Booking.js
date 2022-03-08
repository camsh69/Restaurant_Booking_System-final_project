import React from 'react'

const Booking = ({booking, passedDownSetBooking, passedDownSetCustomer, handleDeleteClick}) => {

  const handleClick = (booking) => {
    passedDownSetBooking(booking)
    passedDownSetCustomer(booking.customer.name)


  }
  return (
    <div className='input'>
      Reference: &nbsp;   {booking.id} <button className='style-id' onClick={() => handleClick(booking) } >Fill Form</button><button className='style-id1' onClick={() => handleDeleteClick(booking.id) } >Delete</button>
     </div>
    
  )
}

export default Booking