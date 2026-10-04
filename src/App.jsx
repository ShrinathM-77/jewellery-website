import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Collection />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;