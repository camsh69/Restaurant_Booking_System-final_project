import React from 'react'

const Booking = ({booking, passedDownFunc}) => {
  return (
    <div >Booking ID: &nbsp; {booking.id} <button onClick={() => passedDownFunc(booking)} >Fill Form</button> </div>
  )
}

export default Booking