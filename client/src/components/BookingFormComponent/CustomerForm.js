import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';



const CustomerForm = ({ newCustomer, newBooking }) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [loyaltyCard, setLoyaltyCard] = useState("")

    const handleNameChange = (ev) => setName(ev.target.value);
    const handlePhoneNumberChange = (ev) => setPhoneNumber(ev.target.value);
    const handleEmailChange = (ev) => setEmail(ev.target.value);
    const handleLoyaltyCard = (ev) => setLoyaltyCard(ev.target.value);


    function sayHello(loyaltyCard) {
        fetch("http://localhost:8080/api/customers?loyaltyCard=" + loyaltyCard, {
            "method": "GET",
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                for (const object of data) {
                    console.log(object.name, object.phoneNumber, object.email)
                    setName(object.name)
                    setPhoneNumber(object.phoneNumber)
                    setEmail(object.email)
                    setCustomerId(object.id)
                }

            })
            .catch(err => {
                console.error(err);
            });
    }



    const handleSubmit = ev => {
        ev.preventDefault();
        newCustomer({
            name: name,
            phoneNumber: phoneNumber,
            email: email
        });
        setName("");
        setPhoneNumber("");
        setEmail("");
        setCustomerId("");

    }
    return (
        <div>
            <div>
                <div>
                    {/* text box of laoyal with onChange event to hamdleLoyalty */}
                    <input
                        type="text"
                        id="loyalty_card"
                        name="loyalty_card"
                        value={loyaltyCard}
                        onChange={handleLoyaltyCard}
                    />
                </div>
                <div>
                    <button onClick={() => sayHello(loyaltyCard)}>Greet</button>
                </div>

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
            <div>
                <BookingForm newBooking={newBooking} email={email} phoneNumber={phoneNumber} name={name} customerId={customerId} />
            </div>
        </div>

    );

}


export default CustomerForm;