---
title: "Contact"
layout: "default"  # Assuming "default" is the main layout used across your site
draft: false
---

# Contact Us

<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />

  <div>
    <label>Your Name: <input type="text" name="name" required /></label>
  </div>
  <div>
    <label>Your Email: <input type="email" name="email" required /></label>
  </div>
  <div>
    <label>Your Role:
      <select name="role[]" multiple>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select>
    </label>
  </div>
  <div>
    <label>Message: <textarea name="message" required></textarea></label>
  </div>
  <div>
    <button type="submit">Send</button>
  </div>
</form>