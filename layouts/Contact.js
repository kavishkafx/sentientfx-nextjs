import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}

        {/* Netlify form integration */}
        <form
          name="contact"  // This is the form name Netlify uses for submissions
          method="POST"   // POST method for form submission
          data-netlify="true"  // Enables form handling by Netlify
          action="/thank-you"  // Optional: Redirect after successful submission
        >
          <input type="hidden" name="form-name" value="contact" />  {/* Hidden field with form name */}

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">Name</label>
            <input
              className="form-input w-full"
              name="name"
              type="text"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">Email</label>
            <input
              className="form-input w-full"
              name="email"
              type="email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">Subject</label>
            <input
              className="form-input w-full"
              name="subject"
              type="text"
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block" htmlFor="message">Message</label>
            <textarea
              className="form-textarea w-full"
              rows="7"
              name="message"
              required
            />
          </div>

          <button className="btn btn-outline-primary" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
