import React, { createContext, useContext, useState } from "react";

import Layout from "../../components/Layout";

import { Context } from "../../context";

import OrderCard from "../../components/OrderCard";

import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(Context);

  let aa = window.location.pathname;
  let b = aa.lastIndexOf("/") + 1;
  let index = aa.slice(b);

  if (index === "last") {
    index = context.Order?.length - 1;
  }


  return (
    <Layout>
      <div className="flex relative w-80 justify-center items-center m-10">
        <Link className="absolute left-0" to="/my-orders">
          <p className="text-xl">←</p>
        </Link>
        <h1 className="font-bold text-lg"> MyOrder </h1>
      </div>

      <div className="w-80">
        {context.Order?.[index].products.map((one) => {
          return (
            <OrderCard
              key={one.id}
              title={one.name}
              image={one.img}
              price={one.price}
              id={one.id}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default MyOrder;
