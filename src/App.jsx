
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./Menu/menu.css";
import MenuCard from "./Menu/MenuCard";
import MenuPage from "./Menu/MenuPage";
import CakeDesigns from "./Menu/CakeDesigns";
import CakeOrder from "./Menu/CakeOrder";
import AboutUs from "./Menu/AboutUs";

function HomePage() {
  return (
    <div className="website">
      <nav className="navbar">
        <Link to="/" className="logo">
          Sweet<span>Crumbs.</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#menu">Our Menu</a>
          <Link to="/about">About Us</Link>
          <a href="#contact">Contact</a>
        </div>

        <button type="button" className="cart-button">
          🛒 Cart <span className="cart-count">0</span>
        </button>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            FRESHLY BAKED · MADE WITH LOVE
          </p>

          <h1>
            A Little Sweetness,
            <br />
            <span>In Every Bite.</span>
          </h1>

          <p className="hero-description">
            Discover handcrafted cakes, delicious pastries
            and irresistible cookies, freshly prepared just for you.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="primary-button">
              Explore Our Menu ↗
            </a>

            <Link to="/about" className="secondary-button">
              Our Story
            </Link>
          </div>

          <div className="hero-note">
            <span className="status-dot"></span>
            Freshly baked. Carefully crafted. Always delicious.
          </div>
        </div>

        <div className="hero-decoration">
          <div className="decoration-circle">
            <span>BAKED</span>
            <strong>with</strong>
            <span>LOVE ♡</span>
          </div>

          <div className="decoration-line"></div>
          <p>YOUR DAILY DOSE OF HAPPINESS</p>
        </div>
      </main>

      <section className="trust-bar">
        <div>
          <strong>Fresh Daily</strong>
          <span>Baked with care</span>
        </div>

        <div>
          <strong>Quality Ingredients</strong>
          <span>Only the good stuff</span>
        </div>

        <div>
          <strong>Made for You</strong>
          <span>Every order matters</span>
        </div>
      </section>

      <section id="menu" className="menu-section">
        <p className="menu-eyebrow">OUR COLLECTION</p>

        <h2>
          Explore Our <span>Menu</span>
        </h2>

        <p className="menu-description">
          Discover your favourite treats, freshly made with love.
        </p>

        <div className="category-grid">
          <MenuCard
            title="Cakes"
            image="chocolate-truffle.jpg"
            description="Delicious cakes for every celebration."
            onClick={() => (window.location.href = "/menu/cakes")}
          />

          <MenuCard
            title="Ice Cream Cakes"
            image="chocolate-ice-cream-cake.jpg"
            description="Frozen treats for your special moments."
            onClick={() =>
              (window.location.href = "/menu/ice-cream-cakes")
            }
          />

          <MenuCard
            title="Pastries"
            image="chocolate-pastry.jpg"
            description="Fresh, soft and creamy pastries."
            onClick={() => (window.location.href = "/menu/pastries")}
          />

          <MenuCard
            title="Cupcakes, Cookies & Brownies"
            image="chocolate-cupcake.jpg"
            description="Small treats, big happiness."
            onClick={() =>
              (window.location.href = "/menu/other-treats")
            }
          />
        </div>
      </section>

      
<section id="contact" className="placeholder-section">
  <h2>Contact Us for More Information</h2>
  <p>
    Have questions about our cakes or want to place a special order?
    We would love to hear from you!
  </p>
</section>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/menu/:categoryId"
          element={<MenuPage />}
        />

        <Route
          path="/product/:categoryId/:productId"
          element={<CakeDesigns />}
        />

        <Route
          path="/cake-order"
          element={<CakeOrder />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
