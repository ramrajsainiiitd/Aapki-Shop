import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";

export default function Card(props) {
  const [ShowMoreTitle, setShowMoreTitle] = useState(false);
  const [ShowMoreDescription, setShowMoreSescription] = useState(false);
  const { ProductDetails, setProductDetails } = useContext(MyContext);
  const { CartItem, setCartItem } = useContext(MyContext);

  function ToggleTitle() {
    setShowMoreTitle(!ShowMoreTitle);
  }

  function ToggleDescription() {
    setShowMoreSescription(!ShowMoreDescription);
  }

  function handleAddToCart() {
    setCartItem([...CartItem, props]);
  }

  return (
    <div>
      <div
        className="card mt-2 pt-2"
        style={{ marginLeft: "0px", width: "18rem" }}
      >
        <img
          style={{
            objectFit: "contain",
            alignItems: "center",
            width: "200px",
            height: "200px",
          }}
          src={props.image}
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <h5
            style={{
              maxHeight: ShowMoreTitle ? "none" : "20px",
              overflow: "hidden",
            }}
          >
            {props.title}
          </h5>
          {!ShowMoreTitle && (
            <button className="btn-link btn" onClick={ToggleTitle}>
              Read More
            </button>
          )}
          {ShowMoreTitle && (
            <button className="btn-link btn" onClick={ToggleTitle}>
              Read Less
            </button>
          )}

          <p
            className="card-text"
            style={{
              objectFit: "contain",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              maxHeight: ShowMoreDescription ? "none" : "50px",
              overflow: "hidden",
            }}
          >
            {props.description}
          </p>

          {!ShowMoreDescription && (
            <button className="btn-link btn" onClick={ToggleDescription}>
              Read More
            </button>
          )}
          {ShowMoreDescription && (
            <button className="btn-link btn" onClick={ToggleDescription}>
              Read Less
            </button>
          )}

          <p
            className="card-text"
            style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
          >
            Category: {props.category}
          </p>
          <p> Price: ₹ {props.price}</p>
          <p>
            <b>Rating:</b> {props.rating} <b>Count:</b> {props.count}
          </p>
          <a className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
