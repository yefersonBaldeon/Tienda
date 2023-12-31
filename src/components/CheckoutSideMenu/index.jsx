import { Context } from "../../context";

import { totalPrice } from "../../utils";

import React, { createContext, useContext, useState } from "react";
import "./style.css";

import OrderCard from "../OrderCard";
import { Link } from "react-router-dom";

function CheckoutSideMenu() {
  const context = useContext(Context);

  function handleCheckout() {
    // const orderToAdd = {
    //   date: "01.02.23",
    //   products: context.CartProducts,
    //   totalProducts: context.CartProducts.length,
    //   totalPrice: totalPrice(context.CartProducts),
    // };

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    const orderToAdd = {
      date: `${formattedDate} ${formattedTime}`,
      products: context.CartProducts,
      totalProducts: context.CartProducts.length,
      totalPrice: totalPrice(context.CartProducts),
    };
    context.setOrder([...context.Order, orderToAdd]);
    context.setCartProducts([]);
    context.setTittle("");
  }

  function handleDelete(id) {
    context.setCartProducts(
      context.CartProducts.filter((one) => one.id !== id)
    );
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col bg-white fixed right-0 border border-black rounded-xl`}
    >
      <div className="flex justify-between p-6 cursor-pointer ">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          onClick={() => {
            context.closeCheckoutSideMenu();
          }}
        >
          x
        </div>
      </div>

      <div className="px-6 overflow-y-scroll flex-1">
        {context.CartProducts?.map((one) => {
          return (
            <OrderCard
              key={one.id}
              title={one.name}
              image={one.img}
              price={one.price}
              id={one.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>

      <div className="flex justify-between m-6">
        <span>Total:</span>
        <span className="font-bold text text-lg">
          ${totalPrice(context.CartProducts)}
        </span>
      </div>
      <div className="flex">
        <Link to="/my-orders/last" className="w-full m-3">
          <button
            className="w-full bg-black p-3  text-white rounded-lg"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
