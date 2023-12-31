import React, { useState } from "react";

import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context";

import Swal from "sweetalert2";

// import "sweetalert2/src/sweetalert2.scss";

const Post = () => {
  const context = useContext(Context);

  const navigate = useNavigate();

  const [state, setstate] = useState({
    description: "Laptop",
  });

  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    console.log(state);

    let { name, description, img, price } = state;

    price = parseInt(price);

    if (!name || !img || !price) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Conplete the form",
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    const res = await fetch(
      "https://productsmysql-production.up.railway.app/api/products",
      {
        method: "POST",
        body: JSON.stringify({ name, description, img, price }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    navigate("/", { replace: true });
    context.setEleven(!context.Eleven);
  };

  return (
    <Layout>
      <h1 className="font-bold text-lg mb-4"> Create Product </h1>

      <input
        type="text"
        className="rounded-lg border w-80 p-3 border-black m-3"
        placeholder="Name product"
        onChange={handleChange}
        name="name"
      />

      <select
        className="rounded-lg border w-80 p-3 border-black m-3"
        name="description"
        onChange={handleChange}
      >
        <option value="Laptop">Laptop</option>
        <option value="Teclado">Teclado</option>
        <option value="Mouse">Mouse</option>
        <option value="Monitor">Monitor</option>
      </select>

      <input
        type="text"
        className="rounded-lg border w-80 p-3 border-black m-3"
        placeholder="Product image"
        onChange={handleChange}
        name="img"
      />

      <input
        type="number"
        className="rounded-lg border w-80 p-3 border-black m-3 mb-10"
        placeholder="Price of the product"
        name="price"
        onChange={handleChange}
      />
      {/* <Link to="/"> */}
      <button
        className="bg-blue-600 hover:bg-blue-800 px-10 py-2 rounded-xl"
        onClick={handleClick}
      >
        Guardar
      </button>

      {/* <button
        onClick={() => {
          Swal.fire("SweetAlert2 is working!");
        }}
      >
        click
      </button> */}
      {/* </Link> */}

      {/* <Link to="/">
        <button
          className="bg-blue-600 hover:bg-blue-800 px-10 py-2 rounded-xl"
          onClick={handleClick}
        >
          Guardar
        </button>
      </Link> */}
    </Layout>
  );
};

export default Post;
