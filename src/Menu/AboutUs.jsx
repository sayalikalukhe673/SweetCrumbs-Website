
import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-eyebrow">WELCOME TO SWEETCRUMBS</p>

        <h1>
          Every Celebration
          <br />
          Deserves Something <span>Sweet.</span>
        </h1>

        <p className="about-hero-text">
          More than cakes, we believe in creating sweet moments,
          celebrating special memories, and adding a little happiness
          to every occasion.
        </p>

        <Link to="/menu/cakes" className="about-primary-btn">
          Explore Our Cakes <span>→</span>
        </Link>

        <div className="about-hero-decoration" aria-hidden="true">
          <span>✦</span>
          <span>♡</span>
          <span>✧</span>
        </div>
      </section>

      <section className="about-story">
        <div className="about-section-label">OUR STORY</div>

        <h2>
          A Little Sweetness.
          <br />
          A Lot of <span>Love.</span>
        </h2>

        <p>
          Every memorable celebration has something special at its
          heart. Sometimes it is a birthday wish, sometimes an
          anniversary surprise, and sometimes simply a reason to
          make someone smile.
        </p>

        <p>
          At SweetCrumbs, our idea is simple: make these moments
          sweeter with cakes that look beautiful and make every
          occasion feel special. From elegant designs to delightful
          flavours, every cake is an opportunity to celebrate
          something meaningful.
        </p>

        <p>
          Whether you are celebrating a milestone or planning a
          little surprise for someone you love, we want SweetCrumbs
          to be part of your happiest memories.
        </p>
      </section>

      <section className="about-values">
        <div className="about-section-label">WHAT MAKES US SPECIAL</div>

        <h2>Made for Your Sweetest Moments</h2>

        <div className="about-value-grid">
          <article className="about-value-card">
            <span className="about-value-icon">♡</span>
            <h3>Made with Love</h3>
            <p>
              Every celebration deserves thoughtful details
              and a little extra sweetness.
            </p>
          </article>

          <article className="about-value-card">
            <span className="about-value-icon">✧</span>
            <h3>Beautiful Designs</h3>
            <p>
              Explore cake designs that make your special
              occasions even more memorable.
            </p>
          </article>

          <article className="about-value-card">
            <span className="about-value-icon">✦</span>
            <h3>Your Special Choice</h3>
            <p>
              Choose your preferred flavour, weight, and
              personal message for your celebration.
            </p>
          </article>
        </div>
      </section>

      <section className="about-closing">
        <p className="about-eyebrow">LET'S MAKE IT SWEET</p>

        <h2>Have a Celebration Coming Up?</h2>

        <p>
          Find a cake that matches your moment and make
          your next celebration extra special.
        </p>

        <Link to="/menu/cakes" className="about-primary-btn">
          Find Your Cake <span>→</span>
        </Link>
      </section>
    </main>
  );
}
