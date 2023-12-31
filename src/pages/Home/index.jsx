import React, { useContext } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import { Context } from "../../context";

function Home() {
  const context = useContext(Context);

  const renderView = () => {
    if (context?.Title?.length > 0) {
      if (context.Filter?.length > 0) {
        if (context.category === "") {
          return context.Filter?.map((one) => {
            return <Card key={one.id} data={one}></Card>;
          });
        } else {
          if (
            context.Filter?.filter((one) =>
              one.description
                .toLocaleLowerCase()
                .includes(context.category.toLocaleLowerCase())
            ).length ===0
          ){
            return <div>We don´t have anything</div>;
          }
          else{
            return context.Filter?.filter((one) =>
              one.description
                .toLocaleLowerCase()
                .includes(context.category.toLocaleLowerCase())
            ).map((one) => {
              return <Card key={one.id} data={one}></Card>;
            });

          }

        }
      } else {
        return <div>We don´t have anything</div>;
      }
    } else {
      if (context.category === "") {
        return context.Items?.map((one) => {
          return <Card key={one.id} data={one}></Card>;
        });
      } else {
        return context.Items?.filter((one) =>
          one.description
            .toLocaleLowerCase()
            .includes(context.category.toLocaleLowerCase())
        ).map((one) => {
          return <Card key={one.id} data={one}></Card>;
        });
      }
    }
  };

  return (
    <>
      <Layout>
        <h1 className="font-bold text-lg"> MyOrder </h1>

        <input
          type="text"
          className="rounded-lg border w-80 p-3 border-black m-3"
          placeholder="Search a product"
          onChange={(event) => {
            context.setTittle(event.target.value);
          }}
        />

        <div className="grid gap-5 grid-cols-4 max-w-screen-lg">
          {renderView()}
        </div>

        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;
