import React from "react";

export default function Meal(props) {
  // console.log(props.data); // le plat
  return (
    <div
      className="meal-item"
      onClick={() => {
        props.addProduct({
          id: props.data.id,
          name: props.data.title,
          price: props.data.price
        });
      }}
    >
      <div className="text">
        <h3>{props.data.title}</h3>
        <p>{props.data.description}</p>
        <div className="flex">
          <span className="price">{props.data.price}€</span>
          {props.data.popular ? (
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
        {props.data.picture != null ? (
          <img
            src={props.data.picture}
            alt={props.data.title}
            width="130"
            height="130"
          />
        ) : null}
      </div>
    </div>
  );
}
