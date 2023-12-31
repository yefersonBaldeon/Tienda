import { Context } from "../../context";

import React, { createContext, useContext, useState } from "react";

function Card({ data }) {
  const context = useContext(Context);

  function never(event) {
    event.stopPropagation();
  }

  function showProduct(a) {
    context.openProductDetail();
    context.setproductShow(a);
    context.closeCheckoutSideMenu();
  }

  function handleClick(event) {
    event.stopPropagation();

    context.setCartProducts([...context.CartProducts, data]);
    context.setCount(context.CartProducts.length + 1);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  }

  function renderIcon() {
    if (!context.CartProducts.find((one) => one.id === data.id)) {
      return (
        <div
          className="absolute top-0 right-0 bg-white rounded-full w-6 h-6 flex justify-center items-center m-2 font-bold "
          onClick={(event) => {
            handleClick(event);
          }}
        >
          +
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 bg-black text-white rounded-full w-6 h-6 flex justify-center items-center m-2 font-bold"
          onClick={(e) => {
            never(e);
          }}
        >
          ✓
        </div>
      );
    }
  }

  return (
    <div
      className="w-56 h-60 rounded-lg cursor-pointer"
      onClick={() => {
        showProduct(data);
      }}
    >
      <figure className="relative w-full h-4/5 border rounded-lg">
        <span className="absolute bottom-0 bg-green-500 rounded-lg m-2 px-3 py-0.5">
          {data.description}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg "
          src={data.img}
          alt=""
        />

        {/* <div
          className="absolute top-0 right-0 bg-white rounded-full w-6 h-6 flex justify-center items-center m-2 font-bold"
          onClick={(event) => {
            handleClick(event);
          }}
        >
          +
        </div> */}

        {renderIcon()}
      </figure>
      <p className="flex justify-between mt-1">
        <span className="text-sm font-light">{data.name}</span>
        <span className="text-lg font-bold">${data.price}</span>
      </p>
    </div>
  );
}

export default Card;
