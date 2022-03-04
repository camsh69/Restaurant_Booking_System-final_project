import React, {useState} from 'react'
import Booking from './Booking'

const EditBooking = ({bookings, bookingUpdate}) => {

  const [selectedBooking, setSelectedBooking] = useState({})

  const bookingNode = bookings.map(booking => 
    {
      return <Booking passedDownFunc={(value) => setSelectedBooking(value)} booking={booking} key={booking.id}/>
    })

    const onSubmit = (e) =>{

      e.preventDefault();
      
      selectedBooking.startTime = e.target.elements.startTime.value
      selectedBooking.endTime = e.target.elements.endTime.value
      selectedBooking.diners = e.target.elements.diners.value
      selectedBooking.message = e.target.elements.message.value
      
      bookingUpdate(selectedBooking)

      e.target.elements.startTime.value = null
      e.target.elements.endTime.value = null
      e.target.elements.diners.value = null
      e.target.elements.message.value = null
      setSelectedBooking({})
    }

    


  

  return (<>
    <div>{bookingNode}</div>
    <form onSubmit={onSubmit} id="update-booking">
            <div>
                <label htmlFor="id">ID: </label>
                <input disabled name="id" type="number" defaultValue={selectedBooking ? selectedBooking.id : null} id="id"/>
            </div>
            <div>
                <label htmlFor="startTime">Start Time: </label>
                <input name="startTime" type="datetime-local" defaultValue={selectedBooking ? selectedBooking.startTime : null} id="startTime"/>
            </div>
            <div>
                <label htmlFor="endTime">End Time: </label>
                <input name="endTime" type="datetime-local" defaultValue={selectedBooking ? selectedBooking.endTime : null} id="endTime"/>
            </div>
            <div>
                <label htmlFor="diners">Diners: </label>
                <input name="diners" type="number" defaultValue={selectedBooking ? selectedBooking.diners : null} id="diners"/>
            </div>
            <div>
                <label htmlFor="message">Message: </label>
                <input name="message" type="text" defaultValue={selectedBooking ? selectedBooking.message : null} id="message"/>
            </div>
            
            <input type="submit" value="Update" id="save"/>
        </form>
        </>
  )

}

export default EditBooking