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
          name="contact"
          method="POST"
          action={contact_form_action}
          data-netlify="true"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group mb-4">
            <label className="block text-lg font-semibold mb-2">
              Your Name:
              <input
                type="text"
                name="name"
                required
                className="form-input w-full"
              />
            </label>
          </div>

          <div className="form-group mb-4">
            <label className="block text-lg font-semibold mb-2">
              Your Email:
              <input
                type="email"
                name="email"
                required
                className="form-input w-full"
              />
            </label>
          </div>

          <div className="form-group mb-6">
            <label className="block text-lg font-semibold mb-2">
              Message:
              <textarea
                name="message"
                required
                rows="7"
                className="form-textarea w-full"
              />
            </label>
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