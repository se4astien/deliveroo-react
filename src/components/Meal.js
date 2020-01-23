import React from "react";

export default function Meal(props) {
  return (
    <div className="meal-item">
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="flex">
          <span className="price">{props.price}€</span>
          {props.popular ? (
            <span className="popular">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ff8000"
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Popular
            </span>
          ) : null}
        </div>
      </div>
      <div className="picture">
        {props.picture != null ? (
          <img src={props.picture} alt={props.title} width="130" height="130" />
        ) : null}
      </div>
    </div>
  );
}
