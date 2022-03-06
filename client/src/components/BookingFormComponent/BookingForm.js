import { useState } from 'react';



const BookingForm = ({newBooking}) => {
 
  const [message, setMessage] = useState("");
 

  
  const handleMessageChange = (ev) => setMessage(ev.target.value);


  

  const handleSubmit = ev => {
    ev.preventDefault();
   newBooking({
      message: message
          });
    
    setMessage("");
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add extra details</h1>

      <div className="group">
        <label htmlFor="message">Add message here:</label>
        <input 
          type="message" 
          id="message" 
          name="message" 
          value={message} 
          required 
          onChange={handleMessageChange}
        />
      </div>
      
      <input type="submit" name="submit" value="Save" />
    </form>

  );

  }


export default BookingForm;