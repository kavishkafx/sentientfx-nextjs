"use client"; // Indicate that this is a Client Component

import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        event.target.reset(); // Reset the form on success
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        <h2 className="mb-8 text-center">Contact Us</h2>
        
        {status && (
          <div className={`mb-4 p-4 rounded ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {status.message}
          </div>
        )}

        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <p>
            <label>Your Name: <input type="text" name="name" required /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Your Role:
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>Message: <textarea name="message" required></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;