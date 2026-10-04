function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "925 Silver",
      description:
        "Discover beautiful silver jewellery crafted to bring elegance and lasting style to your collection.",
    },
    {
      number: "02",
      title: "Elegant Designs",
      description:
        "From everyday essentials to statement pieces, find designs that match your unique personality.",
    },
    {
      number: "03",
      title: "Quality & Detail",
      description:
        "Every piece is selected with attention to design, finish and overall quality.",
    },
    {
      number: "04",
      title: "Personal Service",
      description:
        "We are here to help you find the perfect piece for yourself or someone special.",
    },
  ];

  return (
    <section className="why-us section" id="why-us">
      <div className="section-heading">
        <p className="section-subtitle">WHY CHOOSE SHREE</p>

        <h2>Made to Make You Shine</h2>

        <p className="section-description">
          We combine timeless designs, beautiful craftsmanship and personal
          service to make your jewellery experience truly special.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.number}>
            <span className="feature-number">{feature.number}</span>

            <div className="feature-icon">✦</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;