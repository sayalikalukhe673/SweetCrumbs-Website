
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductImage } from "./MenuData";
import "./CakeOrder.css";

export default function CakeOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const cake = location.state;

  const [form, setForm] = useState({
    customerName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    quantity: 1,
    deliveryDate: "",
    deliveryTime: "",
    deliveryMethod: "delivery",
    flavour: "",
    weight: "1 kg",
    cakeMessage: "",
    instructions: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  const unitPrice =
    Number(String(cake?.price ?? 0).replace(/[^\d.]/g, "")) || 0;

  const quantity = Math.max(1, Number(form.quantity) || 1);
  const totalPrice = unitPrice * quantity;

  const imageSrc = cake?.image ? getProductImage(cake.image) : "";

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const deliveryMethod =
      form.deliveryMethod === "delivery"
        ? "Home Delivery"
        : "Bakery Pickup";

    const addressDetails =
      form.deliveryMethod === "delivery"
        ? `Address: ${form.address}, ${form.city} - ${form.pincode}`
        : "Collection: Please collect your cake from the bakery.";

    const message = `
🎂 SWEETCRUMBS - ORDER CONFIRMATION

Hello, ${form.customerName}!

Cake: ${cake.productName}
Design: ${cake.designName}
Flavour: ${form.flavour}
Weight: ${form.weight}
Quantity: ${quantity}

Price per cake: ₹${unitPrice.toLocaleString("en-IN")}
Total Price: ₹${totalPrice.toLocaleString("en-IN")}

Mobile: ${form.mobile}
${form.email ? `Email: ${form.email}` : ""}

Order Type: ${deliveryMethod}
${addressDetails}

Required Date: ${form.deliveryDate}
Preferred Time: ${form.deliveryTime}

Message on Cake: ${form.cakeMessage || "Not specified"}
Special Instructions: ${form.instructions || "None"}

Thank you for choosing SweetCrumbs!

NOTE: This is a demo confirmation only.
Your order has NOT been saved or confirmed by the bakery.
    `.trim();

    window.alert(message);

    setShowThankYou(true);
  }

  function handleOnlinePayment() {
    window.alert(
      "Online payment is coming soon! Real payments are not enabled yet."
    );
  }

  if (!cake) {
    return (
      <section className="cake-order-page">
        <h2>Cake details not found</h2>
        <p>Please select a cake design first.</p>

        <button
          type="button"
          className="order-primary-btn"
          onClick={() => navigate("/menu/cakes")}
        >
          Back to Menu
        </button>
      </section>
    );
  }

  if (showThankYou) {
    return (
      <div className="thank-you-page">
        <div className="fireworks" aria-hidden="true">
          {Array.from({ length: 18 }, (_, i) => (
            <span
              key={i}
              className="firework"
              style={{
                "--x": `${8 + ((i * 37) % 84)}%`,
                "--y": `${8 + ((i * 23) % 76)}%`,
                "--delay": `${(i % 6) * 0.35}s`,
                "--hue": `${(i * 47) % 360}`,
              }}
            />
          ))}
        </div>

        <div className="thank-you-content">
          <div className="thank-you-icon">🎂</div>

          <p className="thank-you-brand">SweetCrumbs Bakery</p>

          <h1>Thank You for Visiting!</h1>

          <p className="thank-you-message">
            Thank you, {form.customerName}, for choosing SweetCrumbs!
          </p>

          <p className="thank-you-subtitle">
            We hope your special moments become even sweeter. 💖
          </p>

          <p className="thank-you-demo-note">
            Your demo order summary has been displayed.
            The order has not been saved or confirmed.
          </p>

          <button
            type="button"
            className="thank-you-home"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="cake-order-page">
      <button
        type="button"
        className="order-back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back to Designs
      </button>

      <div className="order-heading">
        <p className="order-eyebrow">MAKE IT SPECIAL</p>
        <h1>Place Your Cake Order</h1>
        <p>
          Choose your preferences and tell us when you need your cake.
        </p>
      </div>

      <div className="order-layout">
        <div className="order-form-card">
          <form onSubmit={handleSubmit}>
            <h2>Customer Details</h2>

            <div className="order-field">
              <label htmlFor="customerName">Full Name *</label>
              <input
                id="customerName"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="order-form-row">
              <div className="order-field">
                <label htmlFor="mobile">Mobile Number *</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  title="Enter a 10-digit mobile number"
                  required
                />
              </div>

              <div className="order-field">
                <label htmlFor="email">Email (Optional)</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <hr className="order-divider" />

            <h2>Delivery Details</h2>

            <div className="order-field">
              <label>How would you like to receive your cake? *</label>

              <div className="order-choice-row">
                <label className="order-choice">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="delivery"
                    checked={form.deliveryMethod === "delivery"}
                    onChange={handleChange}
                  />
                  Home Delivery
                </label>

                <label className="order-choice">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickup"
                    checked={form.deliveryMethod === "pickup"}
                    onChange={handleChange}
                  />
                  Bakery Pickup
                </label>
              </div>
            </div>

            {form.deliveryMethod === "delivery" && (
              <>
                <div className="order-field">
                  <label htmlFor="address">Full Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    value={form.address}
                    onChange={handleChange}
                    placeholder="House number, street, area"
                    required
                  />
                </div>

                <div className="order-form-row">
                  <div className="order-field">
                    <label htmlFor="city">City / Village *</label>
                    <input
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Enter city or village"
                      required
                    />
                  </div>

                  <div className="order-field">
                    <label htmlFor="pincode">PIN Code *</label>
                    <input
                      id="pincode"
                      name="pincode"
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      maxLength={6}
                      value={form.pincode}
                      onChange={handleChange}
                      placeholder="6-digit PIN code"
                      title="Enter a 6-digit PIN code"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <hr className="order-divider" />

            <h2>Customize Your Cake</h2>

            <div className="order-form-row">
              <div className="order-field">
                <label htmlFor="flavour">Cake Flavour *</label>
                <select
                  id="flavour"
                  name="flavour"
                  value={form.flavour}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select flavour</option>
                  <option value="Chocolate">Chocolate</option>
                  <option value="Vanilla">Vanilla</option>
                  <option value="Strawberry">Strawberry</option>
                  <option value="Butterscotch">Butterscotch</option>
                  <option value="Red Velvet">Red Velvet</option>
                </select>
              </div>

              <div className="order-field">
                <label htmlFor="weight">Cake Weight *</label>
                <select
                  id="weight"
                  name="weight"
                  value={form.weight}
                  onChange={handleChange}
                  required
                >
                  <option value="500 g">500 g</option>
                  <option value="1 kg">1 kg</option>
                  <option value="1.5 kg">1.5 kg</option>
                  <option value="2 kg">2 kg</option>
                  <option value="3 kg">3 kg</option>
                </select>
              </div>
            </div>

            <div className="order-form-row">
              <div className="order-field">
                <label htmlFor="quantity">Quantity *</label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  max="20"
                  value={form.quantity}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="order-field">
                <label htmlFor="deliveryDate">Required Date *</label>
                <input
                  id="deliveryDate"
                  name="deliveryDate"
                  type="date"
                  min={today}
                  value={form.deliveryDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="order-field">
              <label htmlFor="deliveryTime">Preferred Time *</label>
              <select
                id="deliveryTime"
                name="deliveryTime"
                value={form.deliveryTime}
                onChange={handleChange}
                required
              >
                <option value="">Select time</option>
                <option value="10 AM - 12 PM">10 AM - 12 PM</option>
                <option value="12 PM - 2 PM">12 PM - 2 PM</option>
                <option value="2 PM - 4 PM">2 PM - 4 PM</option>
                <option value="4 PM - 6 PM">4 PM - 6 PM</option>
                <option value="6 PM - 8 PM">6 PM - 8 PM</option>
              </select>
            </div>

            <div className="order-field">
              <label htmlFor="cakeMessage">
                Message on Cake (Optional)
              </label>
              <input
                id="cakeMessage"
                name="cakeMessage"
                maxLength={60}
                value={form.cakeMessage}
                onChange={handleChange}
                placeholder="e.g. Happy Birthday"
              />
            </div>

            <div className="order-field">
              <label htmlFor="instructions">
                Special Instructions (Optional)
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows={3}
                value={form.instructions}
                onChange={handleChange}
                placeholder="Any special requests?"
              />
            </div>

            <div className="order-payment-note">
              <strong>Payment</strong>
              <p>
                Online payment is not connected yet. This is a demo.
              </p>

              <button
                type="button"
                className="order-secondary-btn"
                onClick={handleOnlinePayment}
              >
                Pay Online (Demo)
              </button>
            </div>

            <button type="submit" className="order-primary-btn">
              Submit Order Request
            </button>
          </form>
        </div>

        <aside className="order-summary-card">
          <h2>Your Cake</h2>

          {imageSrc && (
            <img
              className="order-cake-image"
              src={imageSrc}
              alt={cake.designName}
            />
          )}

          <p className="order-summary-label">Category</p>
          <h3>{cake.categoryName}</h3>

          <p className="order-summary-label">Cake</p>
          <p>{cake.productName}</p>

          <p className="order-summary-label">Selected Design</p>
          <p>{cake.designName}</p>

          <hr className="order-divider" />

          <div className="order-price-row">
            <span>Price per cake</span>
            <strong>₹{unitPrice.toLocaleString("en-IN")}</strong>
          </div>

          <div className="order-price-row">
            <span>Quantity</span>
            <strong>{quantity}</strong>
          </div>

          <div className="order-total-row">
            <span>Estimated Total</span>
            <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
          </div>

          {unitPrice === 0 && (
            <p className="order-price-warning">
              Price is not configured for this cake yet.
              Please add its price in MenuData.js.
            </p>
          )}

          <p className="order-summary-footnote">
            Final price and delivery availability may need confirmation
            from the bakery.
          </p>
        </aside>
      </div>
    </section>
  );
}
