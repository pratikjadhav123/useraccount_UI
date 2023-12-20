import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ow9b818', 'template_qjzk89v', form.current, 'DaOUlfQK-sYmU-bdN')
      .then((result) => {
        console.log(result.text);
        alert("message sent");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="background">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <h3>~ ~ ~ ~ CONTACT US ~ ~ ~ ~</h3>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="text" name="user_subject" />
        <label>Message</label>
        <textarea name="message" />
        <input className='btn' type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
