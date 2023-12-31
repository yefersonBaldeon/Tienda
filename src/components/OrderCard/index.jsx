import { Context } from "../../context";

import React, { createContext, useContext, useState } from "react";

function OrderCard({ title, image, price, id, handleDelete }) {
  const context = useContext(Context);

  function handleClick() {
    context.setCartProducts(
      context.CartProducts.filter((one) => one.id !== id)
    );
    context.setCount(context.CartProducts.length - 1);
  }

  let a;

  if (handleDelete) {
    a = (
      <p
        className="cursor-pointer"
        onClick={() => {
          handleDelete(id);
        }}
      >
        x
      </p>
    );
  }

  return (
    <div className="flex justify-between mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt=""
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {a}
      </div>
    </div>
  );
}

export default OrderCard;
