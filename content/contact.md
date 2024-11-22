---
title: "Contact"
layout: "postsingle"
draft: false
---

# Contact Us

<form name="contact" method="POST" data-netlify="true" class="contact-form">
  <input type="hidden" name="form-name" value="contact" />

  <div class="form-group mb-4">
    <label class="block text-lg font-semibold mb-2">Your Name: 
      <input type="text" name="name" required class="form-input" />
    </label>
  </div>
  
  <div class="form-group mb-4">
    <label class="block text-lg font-semibold mb-2">Your Email: 
      <input type="email" name="email" required class="form-input" />
    </label>
  </div>
  
  <div class="form-group mb-4">
    <label class="block text-lg font-semibold mb-2">Your Role:
      <select name="role[]" multiple class="form-select">
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select>
    </label>
  </div>
  
  <div class="form-group mb-6">
    <label class="block text-lg font-semibold mb-2">Message: 
      <textarea name="message" required class="form-textarea"></textarea>
    </label>
  </div>
  
  <div>
    <button type="submit" class="btn btn-primary">Send</button>
  </div>
</form>