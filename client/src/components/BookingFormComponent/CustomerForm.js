import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';



const CustomerForm = ({ newCustomer, customers }) => {

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

            const body = { "email": email, "name": name, "phoneNumber": phoneNumber }

            newCustomer(body);
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
                        <button onClick={() => checkLoyaltyCard(loyaltyCard)}>Check</button>
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
            </div>
        );
    }


    export default CustomerForm;