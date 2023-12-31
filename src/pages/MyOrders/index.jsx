import Layout from "../../components/Layout";
import OrdersCard from "../../components/OrdersCard";
import React, { createContext, useContext, useState } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(Context);

  return (
    <Layout>
      {/* <h1 className="font-bold text-lg"> MyOrder </h1> */}

      {/* <input
        type="text"
        className="rounded-lg border w-80 p-3 border-black m-3"
        placeholder="Search a product"
    
      /> */}
      <div className="font-bold text-lg">My_Orders</div>
      {context.Order.map((one, index) => {
        return (
          <Link key={index} className="" to={`/my-orders/${index}`}>
            <OrdersCard
              TotalProducts={one.totalProducts}
              TotalPrice={one.totalPrice}
              date={one.date}
            />
          </Link>
        );
      })}
    </Layout>
  );
}

export default MyOrders;
