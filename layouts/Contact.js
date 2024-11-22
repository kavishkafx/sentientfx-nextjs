import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        <form
          className="contact-form"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: 
              <input name="bot-field" />
            </label>
          </p>
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
              name="message" 
              rows="7" 
              required 
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;