import React, { createContext, useContext, useState, useEffect } from "react";

export const Context = createContext();

function Provider({ children }) {
  const [Count, setCount] = useState();

  const [Filter, setFilter] = useState(null);

  const [Items, setItems] = useState(null);
  const [Title, setTittle] = useState(null);
  const [Items2, setItems2] = useState(null);

  const [category, setcategory] = useState("");

  const [productShow, setproductShow] = useState({});

  const [CartProducts, setCartProducts] = useState([]);

  const [Order, setOrder] = useState([]);

  const [Eleven, setEleven] = useState(false);
  
  
  useEffect(() => {
    fetch("https://productsmysql-production.up.railway.app/api/products")
      .then((one) => {
        return one.json();
      })
      .then((one) => {
        setItems(one);
        setItems2(one);
      });
  }, []);

  useEffect(() => {
    fetch("https://productsmysql-production.up.railway.app/api/products")
      .then((one) => {
        return one.json();
      })
      .then((one) => {
        setItems(one);
        setItems2(one);
      });
  }, [Eleven]);


  useEffect(() => {
    // console.log(Items);
    // console.log(Title);
    if (Title) {
      setFilter(
        Items.filter((one) =>
          one.name.toLocaleLowerCase().includes(Title.toLocaleLowerCase())
        )
      );
    }
    console.log(Filter);
  }, [Title]);

  useEffect(() => {
    if (category) {
      setFilter(
        Items.filter((one) =>
          one.description
            .toLocaleLowerCase()
            .includes(category.toLocaleLowerCase())
        )
      );
    }
  }, [category]);

  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setisProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setisProductDetailOpen(false);
  };

  // Checkout

  const [isCheckoutSideMenuOpen, setisCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setisCheckoutSideMenuOpen(true);
  };
  const closeCheckoutSideMenu = () => {
    setisCheckoutSideMenuOpen(false);
  };

  return (
    <Context.Provider
      value={{
        Count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productShow,
        setproductShow,
        CartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        Order,
        setOrder,
        setItems,
        Items,
        Title,
        setTittle,
        Filter,
        setFilter,
        category,
        setcategory,
        Eleven,
        setEleven,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;
