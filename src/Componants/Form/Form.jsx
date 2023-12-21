import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

const Form = () => {
  const form = useRef();
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7999562276964!2d74.00535843194533!3d18.583055336092617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3fe3196e309%3A0xabd5c95f58e16aca!2sIvy%20Estate%20Nia!5e0!3m2!1sen!2sin!4v1703137650071!5m2!1sen!2sin" ';
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ow9b818",
        "template_qjzk89v",
        form.current,
        "DaOUlfQK-sYmU-bdN"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src={map}
              title="Location Map"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>
              You can contact us any way that is convenient for you. We are
              available 24/7 via fax or email. You can also use a quick contact
              form below or visit our office personally.
            </p>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  Flat no 306, H3 Wing, Ivy Estate - Nia, Wagholi, Pune - 412207
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> contactus@itvidpra.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +91 9022405567</p>
              </div>
            </div>

            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="flexSB">
                <input type="text" placeholder="Name" name="user_name" />
                <input type="email" placeholder="Email" name="user_email" />
              </div>
              <input type="text" placeholder="Subject" name="user_subject" />
              <textarea cols="20" rows="5">
                Create a message here...
              </textarea>
              <button className="btn" value="Send">
                SEND MESSAGE
              </button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK LINKEDIN INSTAGRAM </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
