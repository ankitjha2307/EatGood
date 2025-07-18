const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Got questions, feedback, or issues with your order? We’d love to hear
        from you!
      </p>

      <div className="contact-details">
        <p>
          <strong>Email:</strong> support@eatgoodapp.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9310207180
        </p>
        <p>
          <strong>Address:</strong> B391/2, New Delhi, India
        </p>
      </div>

      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message..." rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
