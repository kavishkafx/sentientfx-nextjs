const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        <form 
          name="contact"
          action="/contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">Name</label>
            <input
              id="name"
              className="form-input w-full"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">Email</label>
            <input
              id="email"
              className="form-input w-full"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">Subject</label>
            <input
              id="subject"
              className="form-input w-full"
              name="subject"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="message">Message</label>
            <textarea 
              id="message"
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