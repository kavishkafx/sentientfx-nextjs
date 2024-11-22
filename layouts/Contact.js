"use client";

import { useState } from "react";
import { markdownify } from "@lib/utils/textConverter";

export default function Contact({ data }) {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": form.getAttribute("name"), // Dynamically fetch the form name
          ...Object.fromEntries(formData),
        }).toString(),
      });

      if (response.ok) {
        setStatus("Thanks for your submission!");
        form.reset();
      } else {
        setStatus("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("There was an error. Please try again.");
    }
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
            <label className="mb-2 block" htmlFor="name">
              Name
            </label>
            <input
              id="name"
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
              id="email"
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
              id="subject"
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
              id="message"
              className="form-textarea w-full"
              name="message"
              rows="7"
              required
            />
          </div>

          {status && <div className="mb-4 text-green-600">{status}</div>}

          <button type="submit" className="btn btn-outline-primary">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}