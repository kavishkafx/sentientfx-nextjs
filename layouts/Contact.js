import { useState } from 'react';
import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData
      })
    })
    .then(() => {
      alert("Form submitted successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(error => alert(error));
  };

  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">Name</label>
            <input
              id="name"
              className="form-input w-full"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.subject}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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