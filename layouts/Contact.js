"use client";  // Add this line at the top

import React, { useState } from 'react';
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  
  // State to handle form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // If Netlify form submission is successful, show the thank you message
    setIsSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        
        {/* Netlify Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

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
            <textarea className="form-textarea w-full" rows="7" name="message" required />
          </div>

          <button className="btn btn-outline-primary" type="submit">
            Submit Now
          </button>
          
          {/* Display the thank you message after submission */}
          {isSubmitted && (
            <div className="mt-4 text-center text-green-500">
              <h4>Thank you! Your message has been sent.</h4>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;