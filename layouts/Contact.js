"use client"; // Add this line to declare the component as a Client Component

import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    
    const response = await fetch(contact_form_action, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('There was a problem with your submission.');
    }
  };

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        <form className="contact-form" method="POST" action={contact_form_action} onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">Name</label>
            <input className="form-input w-full" name="name" type="text" required />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">Email</label>
            <input className="form-input w-full" name="email" type="email" required />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">Subject</label>
            <input className="form-input w-full" name="subject" type="text" required />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="message">Message</label>
            <textarea className="form-textarea w-full" name="message" rows="7" required />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit Now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;