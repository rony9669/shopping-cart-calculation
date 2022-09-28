import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { handleAddToCartClick } = props;
  const { name, img, seller, price, ratings, id } = props.product;

  //   console.log(props.product);

  return (
    <div className="product">
      <img
        src={img ? img : <img src="../../images/no image.jpg"></img>}
        alt=""
      />
      <div className="product-details">
        <h4>Product Name: {name}</h4>
        <h3 className="price">Price: ${price}</h3>
        <h5>Seller: {seller}</h5>
        <h5>Ratings: {ratings}</h5>
      </div>
      <button
        onClick={() => handleAddToCartClick(props.product)}
        className="btn-cart"
      >
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
