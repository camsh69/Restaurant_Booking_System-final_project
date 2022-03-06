import { useState } from 'react';



  const BookingForm = ({newCustomer}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
 

  const handleNameChange = (ev) => setName(ev.target.value);
  const handlePhoneNumberChange = (ev) => setPhoneNumber(ev.target.value);
  const handleEmailChange = (ev) => setEmail(ev.target.value);


  

  const handleSubmit = ev => {
    ev.preventDefault();
   newCustomer({
      name: name,
      phoneNumber : phoneNumber,
      email: email
          });
    setName("");
    setPhoneNumber("");
    setEmail("");
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a booking</h1>
      <div className="group">
        <label htmlFor="name">Guest Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          required 
          onChange={handleNameChange}
        />
      </div>
     
      <div className="group">
        <label htmlFor="phoneNumber">Guest Phone number:</label>
        <input 
          type="phoneNumber" 
          id="phoneNumber" 
          name="phoneNumber" 
          value={phoneNumber} 
          required 
          onChange={handlePhoneNumberChange}
        />
      </div>

      <div className="group">
        <label htmlFor="email">Guest Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          required 
          onChange={handleEmailChange}
        />
      </div>
      
      <input type="submit" name="submit" value="Save" />
    </form>

  );

  }


export default BookingForm;