function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img src="/images/logo.png" alt="Shree Jewellery" />
          </a>

          <p>
            Timeless jewellery designed to celebrate your style,
            your moments and your story.
          </p>

          <div className="footer-socials">
            <a
              href="#"
              aria-label="Instagram"
              className="https://www.instagram.com/shree.jwels?stkn=MWd3Nm1vd3VvcGFs"
            >
              Instagram
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="social-link"
            >
              Facebook
            </a>

            <a
              href="https://wa.me/+917738798777"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="social-link"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">About Us</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>+91 77387 98777</p>
          <p>info@shreejewellery.com</p>
          <p>Plot No-27 Khumbha market near by zudio, Bhilwara Pin Code 311001,Rajasthan,India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {2026} Shree Jewellery. All Rights Reserved.
        </p>

        <p>925 Silver & Imitation Jewellery</p>
      </div>
    </footer>
  );
}

export default Footer;