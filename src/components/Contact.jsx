function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <p className="section-subtitle">GET IN TOUCH</p>

          <h2>
            Let's Find Your
            <span> Perfect Jewellery</span>
          </h2>

          <p className="contact-description">
            Have a question about our collection or looking for something
            special? Get in touch with us. We'd love to help you find the
            perfect piece.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">☎</div>
              <div>
                <span>Call Us</span>
                <a href="tel:+919999999999">+91 77387 98777</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div>
                <span>Email Us</span>
                <a href="mailto:info@shreejewellery.com">
                  info@shreejewellery.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⌖</div>
              <div>
                <span>Visit Us</span>
                <p>Plot No-27 Khumbha market near by zudio, Bhilwara Pin Code 311001,Rajasthan,India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">◉</div>
              <div>
                <span>WhatsApp</span>
                <a
                  href="https://wa.me/+917738798777"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat With Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <h3>Send Us a Message</h3>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what you're looking for..."
              ></textarea>
            </div>

            <button type="submit" className="primary-btn form-btn">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;