---
title: "Contact Us"
layout: "PostSingle"
draft: false
---

<form 
  name="contact" 
  method="POST" 
  data-netlify="true" 
  className="contact-form" 
  style={{ 
    maxWidth: '600px', 
    margin: '0 auto', 
    padding: '20px', 
    background: '#f9f9f9', 
    borderRadius: '8px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
  }}
>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label 
      htmlFor="name" 
      style={{ 
        display: 'block', 
        fontSize: '16px', 
        color: '#333', 
        marginBottom: '5px', 
        lineHeight: '2.5' 
      }}
    >
      Your Name:
    </label>
    <input 
      type="text" 
      name="name" 
      id="name" 
      required 
      className="form-input" 
      style={{ 
        width: '100%', 
        padding: '10px', 
        fontSize: '16px', 
        border: '1px solid #ddd', 
        borderRadius: '5px', 
        backgroundColor: '#fff', 
        color: '#333', 
        boxSizing: 'border-box', 
        transition: 'border-color 0.3s ease', 
        marginBottom: '20px', 
        lineHeight: '2.5' 
      }} 
    />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label 
      htmlFor="email" 
      style={{ 
        display: 'block', 
        fontSize: '16px', 
        color: '#333', 
        marginBottom: '5px', 
        lineHeight: '2.5' 
      }}
    >
      Your Email:
    </label>
    <input 
      type="email" 
      name="email" 
      id="email" 
      required 
      className="form-input" 
      style={{ 
        width: '100%', 
        padding: '10px', 
        fontSize: '16px', 
        border: '1px solid #ddd', 
        borderRadius: '5px', 
        backgroundColor: '#fff', 
        color: '#333', 
        boxSizing: 'border-box', 
        transition: 'border-color 0.3s ease', 
        marginBottom: '20px', 
        lineHeight: '2.5' 
      }} 
    />
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <label 
      htmlFor="message" 
      style={{ 
        display: 'block', 
        fontSize: '16px', 
        color: '#333', 
        marginBottom: '5px', 
        lineHeight: '2.5' 
      }}
    >
      Message:
    </label>
    <textarea 
      name="message" 
      id="message" 
      required 
      className="form-input" 
      style={{ 
        width: '100%', 
        padding: '10px', 
        fontSize: '16px', 
        border: '1px solid #ddd', 
        borderRadius: '5px', 
        backgroundColor: '#fff', 
        color: '#333', 
        boxSizing: 'border-box', 
        transition: 'border-color 0.3s ease', 
        marginBottom: '20px', 
        lineHeight: '2.5' 
      }}
    ></textarea>
  </div>
  <div className="form-group" style={{ marginBottom: '15px' }}>
    <button 
      type="submit" 
      className="btn btn-primary" 
      style={{ 
        display: 'inline-block', 
        borderRadius: '8px', 
        padding: '10px 20px', 
        fontWeight: '600', 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        border: 'none', 
        cursor: 'pointer', 
        transition: 'background-color 0.3s ease' 
      }}
    >
      Send
    </button>
  </div>
</form>