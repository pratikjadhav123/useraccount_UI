import React, { useState } from "react";
import axios from "axios";
import "./Form.css"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace 'YOUR_API_ENDPOINT' with your backend API endpoint
      await axios.post("YOUR_API_ENDPOINT", formData);
      console.log("Form submitted successfully!");
      // Handle success or any necessary actions after successful form submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, display error message, etc.
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="h5 text-center mb-4">Write to us</p>
        <div className="grey-text">
          <label>
            Your name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Your email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <label>
            Your message:
            <textarea
              rows="2"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className="text-center">
          <button type="submit">
            Send
            <span role="img" aria-label="paper-plane" className="ml-1">
              ✈️
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
