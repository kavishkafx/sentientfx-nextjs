import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;

  // State for handling form submission status
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch(contact_form_action, {
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
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        
        {status && (
          <div className={`mb-4 p-4 rounded ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {status.message}
          </div>
        )}

        <form
          name="contact"
          method="POST"
          action={contact_form_action}
          data-netlify="true"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Your Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="form-input w-full"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Your Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="form-input w-full"
            />
          </div>

          <div className="form-group mb-6">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="7"
              className="form-textarea w-full"
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;