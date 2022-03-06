import { useState } from 'react';



  const CustomerForm = ({newCustomer}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [customerId, setCustomerId] = useState("");

  const handleNameChange = (ev) => setName(ev.target.value);
  const handlePhoneNumberChange = (ev) => setPhoneNumber(ev.target.value);
  const handleEmailChange = (ev) => setEmail(ev.target.value);




  const getCustomerFromLoyalty = function(loyalty_card){
      var loyalty_card = "036758";
      fetch("http://localhost:8080/api/customers?loyaltyCard=036758&", {
        "method": "GET",
 
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
}

  const handleLoyalty = ev => {
    getCustomerFromLoyalty("")
  }

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
      <div>
        {/* text box of laoyal with onChange event to hamdleLoyalty */}
        <input 
          type="text" 
          id="loyalty_card" 
          name="loyalty_card" 
          value=""
          onChange={handleLoyalty}
        />
    <form onSubmit={handleSubmit}>
      <h1>Add a Customer</h1>
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
    </div>

  );

  }


export default CustomerForm;