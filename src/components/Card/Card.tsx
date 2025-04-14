import type { CardProps } from "./Card.types";

function Card({ title, body, image, actions }: CardProps) {
  return (
    <div className="card bg-forest-green w-124 shadow-sm">
      <figure className="pt-2 px-2">
        <img src={image} alt="Shoes" className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions">{actions ?? actions}</div>
      </div>
    </div>
  );
}

export default Card;
