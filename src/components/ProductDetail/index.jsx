import { Context } from "../../context";

import React, { createContext, useContext, useState } from "react";

import "./style.css";

function ProductDetail() {
  const context = useContext(Context);



  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col bg-white fixed right-0 border border-black rounded-xl`}
    >
      <div className="flex justify-between p-6 cursor-pointer">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          onClick={() => {
            context.closeProductDetail();
          }}
        >
          x
        </div>
      </div>

      <figure className="px-6">
        <img
          className="w-full rounded-lg"
          src={context.productShow.img}
          alt=""
        />
      </figure>

      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${context.productShow.price}</span>
        <span className="font-medium text-md">{context.productShow.name}</span>
        <span className="font-light text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          aspernatur officiis, tempora placeat quibusdam dicta nam dolore
          cupiditate laborum aperiam, culpa est adipisci doloremque maxime odit
          minima neque. Deserunt, adipisci.
        </span>
      </p>
    </aside>
  );
}

export default ProductDetail;
