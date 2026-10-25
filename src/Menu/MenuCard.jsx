
import { getProductImage } from "./MenuData";

export default function MenuCard({ title, image, description, onClick }) {
  const imageSrc = getProductImage(image);

  return (
    <div
      className="category-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
    >
      {imageSrc && (
        <img src={imageSrc} alt={title} />
      )}

      <div className="category-card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="category-link">
          Explore Collection ↗
        </span>
      </div>
    </div>
  );
}
