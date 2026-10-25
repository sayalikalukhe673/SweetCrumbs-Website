
import { useNavigate, useParams } from "react-router-dom";
import { menuCategories, getProductImage } from "./MenuData";
import "./Menu.css";

export default function CakeDesigns() {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

  const category = menuCategories.find(
    (item) => item.id === categoryId
  );

  const product = category?.products.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const designs = product.designs?.length
    ? product.designs
    : [{ name: "Main Design", image: product.image }];

  return (
    <section className="menu-section">
      <button
        className="secondary-button"
        onClick={() => navigate(`/menu/${categoryId}`)}
      >
        ← Back to {category.title}
      </button>

      <p className="menu-eyebrow">OUR DESIGNS</p>
      <h2>{product.name}</h2>

      <p className="menu-description">
        {product.description || "Choose your favourite design."}
      </p>

      <div className="category-grid">
        {designs.map((design, index) => {
          const imageSrc = getProductImage(design.image);
          const price = design.price ?? product.price;

          return (
            <div className="category-card" key={index}>
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={design.name}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              ) : (
                <p>Image not found: {design.image}</p>
              )}

              <div className="category-card-info">
                <h3>{design.name}</h3>
                <p>{product.name}</p>

                {price != null ? (
                  <h3>₹{price}</h3>
                ) : (
                  <p>Price not added yet</p>
                )}

                <button
                  className="primary-button"
                  disabled={price == null}
                  onClick={() =>
                    navigate("/cake-order", {
                      state: {
                        categoryName: category.title,
                        productName: product.name,
                        designName: design.name,
                        image: design.image,
                        price,
                      },
                    })
                  }
                >
                  Order Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
