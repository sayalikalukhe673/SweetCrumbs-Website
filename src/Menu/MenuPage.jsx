
import { useNavigate, useParams } from "react-router-dom";
import { menuCategories, getProductImage } from "./MenuData";
import "./menu.css";

export default function MenuPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = menuCategories.find(
    (item) => item.id === categoryId
  );

  if (!category) {
    return <h2>Category not found</h2>;
  }

  return (
    <section className="menu-section">
      <button
        className="secondary-button"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <p className="menu-eyebrow">OUR COLLECTION</p>
      <h2>{category.title}</h2>
      <p className="menu-description">{category.description}</p>

      <div className="category-grid">
        {category.products.map((product) => (
          <div
            className="category-card"
            key={product.id}
            onClick={() =>
              navigate(`/product/${category.id}/${product.id}`)
            }
          >
            {getProductImage(product.image) && (
              <img
                src={getProductImage(product.image)}
                alt={product.name}
              />
            )}

            <div className="category-card-info">
              <h3>{product.name}</h3>
              <span className="category-link">
                View Designs ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
