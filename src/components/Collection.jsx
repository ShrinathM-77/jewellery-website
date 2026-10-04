function Collection() {
  const products = [
    {
      name: "925 Silver Ring",
      category: "Rings",
      image: "images/ring.jpeg",
    },
    {
      name: "Elegant Silver Earrings",
      category: "Earrings",
      image: "/images/earrings.jpg.jpeg",
    },
    {
      name: "Silver Bracelet",
      category: "Bracelets",
      image: "images/ring.jpg.jpeg",
    },
  ];

  return (
    <section className="collection section" id="collection">
      <div className="section-heading">
        <p className="section-subtitle">OUR COLLECTION</p>

        <h2>Elegance in Every Detail</h2>

        <p className="section-description">
          Explore our carefully selected collection of jewellery,
          crafted to complement your style and make every occasion special.
        </p>
      </div>

      <div className="collection-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />

              <div className="product-overlay">
                <a href="#contact">Enquire Now</a>
              </div>
            </div>

            <div className="product-info">
              <p>{product.category}</p>
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="collection-button">
        <a href="#contact" className="outline-btn">
          View Our Collection
        </a>
      </div>
    </section>
  );
}

export default Collection;