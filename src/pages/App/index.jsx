import React from "react";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Provider from "../../context";
import Post from "../Post";


function App() {
  function Route() {
    let element = useRoutes([
      { path: "", element: <Home /> },
      { path: "/laptop", element: <Home /> },
      { path: "/teclado", element: <Home /> },
      { path: "/mouse", element: <Home /> },
      { path: "/monitor", element: <Home /> },
      { path: "others", element: <Home /> },
      { path: "/my-account", element: <MyAccount /> },
      { path: "/my-order", element: <MyOrder /> },
      { path: "/my-orders", element: <MyOrders /> },
      { path: "/my-orders/last", element: <MyOrder /> },
      { path: "/my-orders/:id", element: <MyOrder /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "*", element: <NotFound /> },
      { path: "/post", element: <Post />}
    ]);

    return element;
  }

  return (
    <Provider>
      <div>
        <BrowserRouter>
          <Route />
          <Navbar />
          <CheckoutSideMenu />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
