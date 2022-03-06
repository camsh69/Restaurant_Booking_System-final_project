import React from 'react';
import emailjs from 'emailjs-com';
import emailkey from '../../emailkey';
import './email.css'

const Email = () => {

    function sendEmail(e) {
        e.preventDefault();    
    
        emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, e.target, emailkey.USER_ID)
          .then((result) => {
              window.location.reload(); 
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <form id="emailForm" onSubmit={sendEmail}>
          <div className="field">
          <input type="text" name="from_name" />
          <label>Email</label>
          </div>
          <div className="field">
          <input type="text" name="subject" />
          <label>Message</label>
          </div>
          {/* <div className="field">
          <textarea name="html_message" />
          </div> */}
          <input type="submit" value="Send Email Confirmation" />
          
        </form>
      );
}

export default Email;
