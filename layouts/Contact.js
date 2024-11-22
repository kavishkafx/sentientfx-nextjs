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

          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">
              Your Name:
              <input
                type="text"
                name="name"
                required
                className="form-input w-full rounded-lg border-border text-text focus:border-primary focus:ring-transparent"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="email">
              Your Email:
              <input
                type="email"
                name="email"
                required
                className="form-input w-full rounded-lg border-border text-text focus:border-primary focus:ring-transparent"
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="message">
              Message:
              <textarea
                name="message"
                required
                rows="7"
                className="form-textarea w-full rounded-lg border-border text-text focus:border-primary focus:ring-transparent"
              ></textarea>
            </label>
          </div>

          <div>
            <button type="submit" className="btn btn-outline-primary">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;