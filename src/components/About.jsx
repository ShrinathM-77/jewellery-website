function About() {
  return (
    <section className="about section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/images/collection.jpeg"
            alt="Shree Jewellery Collection"
          />

          <div className="about-badge">
            <span>925</span>
            <small>SILVER</small>
          </div>
        </div>

        <div className="about-content">
          <p className="section-subtitle">ABOUT SHREE JEWELLERY</p>

          <h2>
            Jewellery That
            <span> Tells Your Story</span>
          </h2>

          <p>
            At Shree Jewellery, we believe that jewellery is more than just
            an accessory. It is a reflection of your personality, your
            memories and the moments that matter most.
          </p>

          <p>
            Our collection brings together elegant 925 silver jewellery and
            beautiful imitation designs, carefully selected for those who
            appreciate timeless style and exceptional detail.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <span>✦</span>
              <div>
                <h3>Elegant Designs</h3>
                <p>Styles made to complement every occasion.</p>
              </div>
            </div>

            <div className="about-feature">
              <span>✦</span>
              <div>
                <h3>925 Silver</h3>
                <p>Beautiful silver jewellery for everyday elegance.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="primary-btn">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;