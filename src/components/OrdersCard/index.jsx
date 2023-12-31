import React from "react";

function OrdersCard(props) {
  const { TotalPrice, TotalProducts,date } = props;

  return (
    <div className=" w-80 items-center mb3 border border-black p-4 m-2 rounded-xl">
      <p className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-light">{date}</span>
          <span className="font-light">{TotalProducts} articles</span>
        </div>
        <span className="font-bold text-lg">$ {TotalPrice}</span>
      </p>
    </div>
  );
}

export default OrdersCard;
