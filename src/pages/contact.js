import React, { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setStatus({
        submitted: false,
        error: true,
        message: 'Please verify that you are not a robot.'
      });
      return;
    }

    try {
      // Prepare an object that contains all the details from the form.
      // Make sure your EmailJS template is set to expect these keys.
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_xtiivvp', 
        'template_rxyg7ek', 
        templateParams,
        'M0-fWrcu4EZ8AAoV4'
      );

      setStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! I will get back to you soon.'
      });

      // Reset form and reCAPTCHA
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setRecaptchaToken(null);
      recaptchaRef.current.reset();
    } catch (error) {
      setStatus({
        submitted: false,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <Layout title="Contact">
      <main className="container padding-vert--lg">
        <div className={styles.contactContainer}>
          <h1 className={styles.pageTitle}>Get in Touch</h1>
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className={styles.recaptchaContainer}>
                <ReCAPTCHA
                  sitekey="6LfTlMkqAAAAANR3OqKuDtl3QvwvwnG9OduTEGX3"
                  onChange={handleRecaptchaChange}
                  ref={recaptchaRef}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
            {status.message && (
              <div className={`${styles.statusMessage} ${status.error ? styles.errorMessage : styles.successMessage}`}>
                {status.message}
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
