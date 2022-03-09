import React, {useState} from 'react'
import Booking from './Booking'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const EditBooking = ({bookings, bookingUpdate, handleDeleteClick}) => {


  const [selectedBooking, setSelectedBooking] = useState({})
  const [selectedCustomer, setSelectedCustomer] = useState("")

  const toTimestamp = (strDate) => {  
  const dt = Date.parse(strDate);  
  return dt;  
}
const fireSwal = withReactContent(Swal);

  const bookingNode = bookings.map(booking => 
    {
      if(toTimestamp(booking.startTime) >= Date.now()){
      
      return <Booking handleDeleteClick={handleDeleteClick} passedDownSetBooking={(value) => setSelectedBooking(value)}
      passedDownSetCustomer={(value) => setSelectedCustomer(value)}
        booking={booking} key={booking.id}/>}
      else 
      return null
    })

    const handleChange = (e) => {
      const value = e.target.value;
      setSelectedBooking({
      ...selectedBooking,
      [e.target.name]: value
      });

    }

    const onSubmit = (e) =>{

      e.preventDefault();
      const startTimeCompare = toTimestamp(selectedBooking.startTime);
      const endTimeCompare = toTimestamp(selectedBooking.endTime);
      if (startTimeCompare > endTimeCompare){
        return fireSwal.fire(
          'Cannot update booking',
          'The start time cannot be later than the end time',
          'error'
        )

      }
      
      bookingUpdate(selectedBooking)

      setSelectedCustomer("")
      setSelectedBooking({})
    }

    

    


  

  return (
    <div className='edit-container'>
      <div id = "edit">
      <div className='inputs'>
    <div>{bookingNode}</div>

    <form onSubmit={onSubmit} id="update-booking">
            <div>
                <label htmlFor="id">Booking Reference: </label>
                <input disabled name="id" type="number" value={selectedBooking.id ?? ""} id="id"/>
            </div>
            <div>
                <label htmlFor="customerName">Customer name: </label>
                <input disabled name="customerName" type="text" value={selectedCustomer ?? ""} id="customerName"/>
            </div>
            <div>
                <label htmlFor="startTime">Start Time: </label>
                <input onChange={handleChange} name="startTime" type="datetime-local" value={selectedBooking.startTime ?? ""} id="startTime"/>
            </div>
            <div>
                <label htmlFor="endTime">End Time: </label>
                <input onChange={handleChange} name="endTime" type="datetime-local" value={selectedBooking.endTime ?? ""} id="endTime"/>
            </div>
            <div>
                <label htmlFor="diners">Diners: </label>
                <input onChange={handleChange} name="diners" type="number" value={selectedBooking.diners ?? ""} id="diners"/>
            </div>
            <div>
                <label htmlFor="message">Message: </label>
                <input onChange={handleChange} name="message" type="text" value={selectedBooking.message ?? ""} id="message"/>
            </div>
            
            <input className='style' type="submit" value="Update" id="save"/>
        </form>
        </div>
    </div>
    </div>
  )

}

export default EditBooking