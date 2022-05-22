import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_4rd5dvj', 'template_a2zs04s', e.target, 'NPlL1R8kD9wjAUV7h')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form id="contact-form" className="container box" onSubmit={sendEmail}>
      <div className='row justify-content-center'>
          <input type="text" name="from_name" placeholder='Nombre' autoComplete='off' required/>
          <input type="email" name="email" placeholder='Correo electronico' autoComplete='off' required/>
          <input type="text" name="subject" id="subject" maxlength="30" placeholder='Asunto' autoComplete='off' required/>
          <textarea name="html_message" maxlength="180" rows="2" placeholder='Mensaje' autoComplete='off' required/>
          <input className='button' type="submit" value="Submit" />
      </div>
    </form>
  );
}