---
title: "Contact Us"
layout: "PostSingle"
draft: false
---

  <main style="padding: 20px; max-width: 1200px; margin: 0 auto;">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out using the form below.</p>

        <!-- Contact Form -->
        <form name="contact" method="POST" data-netlify="true" style="max-width: 600px; margin: 20px auto; padding: 20px; background: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 15px;">
                <label for="name" style="display: block; font-size: 16px; color: #333; margin-bottom: 5px; line-height: 2.5;">Your Name:</label>
                <input type="text" name="name" id="name" required style="width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px; background-color: #fff; color: #333; box-sizing: border-box; transition: border-color 0.3s ease; margin-bottom: 20px; line-height: 2.5;" />
            </div>
            <div style="margin-bottom: 15px;">
                <label for="email" style="display: block; font-size: 16px; color: #333; margin-bottom: 5px; line-height: 2.5;">Your Email:</label>
                <input type="email" name="email" id="email" required style="width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px; background-color: #fff; color: #333; box-sizing: border-box; transition: border-color 0.3s ease; margin-bottom: 20px; line-height: 2.5;" />
            </div>
            <div style="margin-bottom: 15px;">
                <label for="message" style="display: block; font-size: 16px; color: #333; margin-bottom: 5px; line-height: 2.5;">Message:</label>
                <textarea name="message" id="message" required style="width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px; background-color: #fff; color: #333; box-sizing: border-box; transition: border-color 0.3s ease; margin-bottom: 20px; line-height: 2.5;"></textarea>
            </div>
            <div style="margin-bottom: 15px;">
                <button type="submit" style="display: inline-block; border-radius: 8px; padding: 10px 20px; font-weight: 600; background-color: #4CAF50; color: white; border: none; cursor: pointer; transition: background-color 0.3s ease;">Send</button>
            </div>
        </form>
  </main>