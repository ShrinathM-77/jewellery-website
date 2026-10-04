
import heroImage from "../assets/hero.png";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">925 SILVER & IMITATION JEWELLERY</p>

        <h1>
          Timeless
          <span> Sparkle </span>
          For Every You
        </h1>

        <p className="hero-description">
          Discover elegant jewellery designed to add a touch of beauty,
          confidence and sparkle to every special moment.
        </p>

        <div className="hero-buttons">
          <a href="#collection" className="primary-btn">
            Explore Collection
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span></span>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}

export default Hero;    