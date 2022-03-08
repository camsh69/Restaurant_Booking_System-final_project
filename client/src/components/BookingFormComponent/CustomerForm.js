import { useState, useEffect } from 'react';

const CustomerForm = ({ newCustomer, customers, sendName, sendPhoneNumber, sendEmail, sendCustomerID, sendLoyaltyCard, completeFlag, fetchTableComplete }) => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [loyaltyCard, setLoyaltyCard] = useState("")

    const handleNameChange = (ev) => setName(ev.target.value);
    const handlePhoneNumberChange = (ev) => setPhoneNumber(ev.target.value);
    const handleEmailChange = (ev) => setEmail(ev.target.value);
    const handleLoyaltyCard = (ev) => setLoyaltyCard(ev.target.value);

    function checkLoyaltyCard(loyaltyCard) {
        for (let customer of customers) {
            if (customer.loyaltyCard === loyaltyCard) {
                setName(customer.name);
                setPhoneNumber(customer.phoneNumber);
                setEmail(customer.email);
                setCustomerId(customer.id);
            }
        }
    }

    const handleSubmit = ev => {

        ev.preventDefault();

        if (customerId === "") {
            const body = { "email": email, "name": name, "phoneNumber": phoneNumber }
            newCustomer(body);
        } else {
            sendCustomerID(customerId);
            sendLoyaltyCard(loyaltyCard);
        }

        sendName(name);
        sendEmail(email);
        sendPhoneNumber(phoneNumber);
        completeFlag(true);            
    }

    return (
        !fetchTableComplete ? "" : 
        
        <div className='form-container'>
            <div id = "form">
                <div className='inputs'>
        
                {/* text box of laoyal with onChange event to hamdleLoyalty */}
                <label htmlFor='loyaltyCard'>Loyalty Card Number :</label>
                <input
                    type="text"
                    id="loyalty_card"
                    name="loyalty_card"
                    value={loyaltyCard}
                    onChange={handleLoyaltyCard}
                />
                <button onClick={() => checkLoyaltyCard(loyaltyCard)}>Check</button>
            

            <form onSubmit={handleSubmit}>
                <h1>Add a Customer</h1>
               
                    <label htmlFor="name">Guest Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        required
                        onChange={handleNameChange}
                    />
               

                   <label htmlFor="phoneNumber">Guest Phone number:</label>
                    <input
                        type="phoneNumber"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        required
                        onChange={handlePhoneNumberChange}
                    />

                    <label htmlFor="email">Guest Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        required
                        onChange={handleEmailChange}
                    />
               

                <input type="submit" name="submit" value="Confirm Customer Details" autoFocus/>
            </form>
            
        </div>
    </div>
    </div>
 
   
        
    );
}


    export default CustomerForm;