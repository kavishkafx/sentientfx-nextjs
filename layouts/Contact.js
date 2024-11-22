"use client"; // Indicate that this is a Client Component

const Contact = () => {
  return (
    <section className="section">
      <div className="container max-w-[700px]">
        <h2 className="mb-8 text-center">Contact Us</h2>

        <form name="contact" method="POST" data-netlify="true">
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

        {/* Optional: Add a success/error message display here if needed */}
      </div>
    </section>
  );
};

export default Contact;