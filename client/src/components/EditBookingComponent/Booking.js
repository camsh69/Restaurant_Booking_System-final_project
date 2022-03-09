import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const Booking = ({booking, passedDownSetBooking, passedDownSetCustomer, handleDeleteClick}) => {

  const handleClick = (booking) => {
    passedDownSetBooking(booking)
    passedDownSetCustomer(booking.customer.name)


  }
  return (
    <div className='input'>
      Booking Reference: &nbsp;   {booking.id} &nbsp; <span> <button className='style-id' onClick={() => handleClick(booking) } >Fill Form</button><button className='style-id2' onClick={() => handleDeleteClick(booking.id) } ><DeleteIcon/></button></span>
     </div>
    
  )
}

export default Booking