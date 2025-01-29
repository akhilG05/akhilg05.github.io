// src/pages/contact.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

export default function Contact() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setIsFormSubmitted(true);
  };

  const revealEmail = () => {
    if (captchaValue === '2024') { // Simple captcha
      setIsEmailVisible(true);
    }
  };

  return (
    <Layout title="Contact">
      <main className="container padding-vert--lg">
        <div className={styles.contactContainer}>
          <h1>Get in Touch</h1>
          
          <div className={styles.contactGrid}>
            <div className={styles.formSection}>
              <h2>Send me a message</h2>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="button button--primary">
                  Send Message
                </button>
              </form>
              
              {isFormSubmitted && (
                <div className={styles.successMessage}>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}