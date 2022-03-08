import React from 'react';
import emailjs from 'emailjs-com';
import emailkey from '../../emailkey';
import './email.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const fireSwal = withReactContent(Swal);

const Email = () => {

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

    
      return (
        
        <div className='form-container'>
          <div id = "form">
          Email component
       
        <form id="emailForm" onSubmit={sendEmail}>
          <div className="field">
          <label>Booking Ref:</label>
          <input type="text" name="booking_ref" required />
          </div>
           <div className="field">
           <label>Name:</label>
          <input type="text" name="to_name" required />
          </div>
          <div className="field">
          <label>Email:</label>
          <input type="email" name="to_email" required />
          </div>
          <div className="field">
          <label>Message:</label>
          <textarea name="message" cols="50" rows="10" required/>
          </div>
          <input type="submit" value="Send Email Confirmation" />
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
