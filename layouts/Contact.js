"use client";

import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, description } = frontmatter;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      
      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        {description && (
          <div className="content text-center mb-8">
            {markdownify(description)}
          </div>
        )}
        
        {submitted ? (
          <div className="text-center p-6">
            <h3>Thank you for your message!</h3>
            <p>We'll get back to you soon.</p>
          </div>
        ) : (
          <form
            className="contact-form"
            method="POST"
            name="contact-form"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="mb-6">
              <label className="mb-2 block" htmlFor="name">
                Name
              </label>
              <input
                className="form-input w-full"
                name="name"
                type="text"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block" htmlFor="email">
                Email
              </label>
              <input
                className="form-input w-full"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block" htmlFor="subject">
                Subject
              </label>
              <input
                className="form-input w-full"
                name="subject"
                type="text"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block" htmlFor="message">
                Message
              </label>
              <textarea 
                className="form-textarea w-full" 
                rows="7" 
                name="message" 
                required 
              />
            </div>
            <button className="btn btn-outline-primary">Submit Now</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;