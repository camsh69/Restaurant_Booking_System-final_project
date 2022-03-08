import React from 'react';
import emailjs from 'emailjs-com';
import emailkey from '../../emailkey';
import './email.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const fireSwal = withReactContent(Swal);

const Email = ({ bookingFormComplete, bookings }) => {

    function sendEmail(e) {
        e.preventDefault();    
    
        emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, e.target, emailkey.USER_ID)
          .then((result) => {
              fireSwal.fire(
                'Success',
                'Email sent',
                'success'
              )
          }, (error) => {
              console.log(error.text);
          });

      }

      const handleClick = () => window.location.reload(); 

      const index = bookings.length -1;

      const start = new Date(bookings[index].startTime);

      return (
        !bookingFormComplete ? "" :
        
        <div className='form-container'>
          <div id = "form">
        
          Email Booking Confirmation:
       
        <form id="emailForm" onSubmit={sendEmail}>
          <div className="field">
          <label>Booking Ref:</label>
          <input type="text" name="booking_ref" value={bookings[index].id} readOnly required />
          </div>
           <div className="field">
           <label>Name:</label>
          <input type="text" name="to_name" value={bookings[index].customer.name} readOnly required />
          </div>
          <div className="field">
          <label>Email:</label>
          <input type="email" name="to_email" value={bookings[index].customer.email} readOnly required />
          </div>
          <div className="field">
          <label>Message:</label>
          <textarea name="message" cols="50" rows="10" value={`Booking on ${start.toLocaleString()} confirmed.`} required/>
          </div>
          <input type="submit" value="Send Email Confirmation" autofocus/>
        </form>

        <br/>
        <div>
          <button type='button' onClick={handleClick}>Clear Form</button>
        </div>
        </div>
        </div>
        
      );
}

export default Email;
