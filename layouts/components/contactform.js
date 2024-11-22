import React from 'react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you for your submission!"))
      .catch((error) => alert(error));
  };

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Your Name: <input type="text" name="name" required /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" required /></label>
      </p>
      <p>
        <label>Message: <textarea name="message" required></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;