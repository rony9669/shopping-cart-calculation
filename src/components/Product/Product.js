import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCartClick } = props;
  const { name, img, description, time, id } = props.product;

  //   console.log(props.product);

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <h3>Book Name: {name}</h3>
        <p>
          <small>{description}</small>
        </p>
        <h3 className="price">Time in minutes:{time}</h3>
      </div>
      <button
        onClick={() => handleAddToCartClick(props.product)}
        className="btn-cart"
      >
        <p>Add to List</p>
      </button>
    </div>
  );
};

export default Product;
