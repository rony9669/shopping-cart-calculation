import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + shipping + parseFloat(tax);

  return (
    <div className="cart">
      <h3>This is for order summary</h3>
      <p>Cart length : {cart.length}</p>
      <p>Total price: ${total}</p>
      <p>Total Shipping:${shipping}</p>
      <p>Tax:${tax}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
