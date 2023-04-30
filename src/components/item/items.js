// import React, { useState } from "react";

const Items = (props) => {
  const { items, del, increaseQuantity, decreaseQuantity } = props;
  console.log(items);
  let length = items.length;
  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p className="quantity">
            <button
              className="btn increase"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
            <span className="count">{item.quantity}</span>
            <button
              className="btn decrease"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
          </p>
          <p>{item.price * item.quantity}</p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );

  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>quantity</p>
        <p>Price</p>
        <p>Edit</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
