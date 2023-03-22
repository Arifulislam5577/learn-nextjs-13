import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Product from "../../components/shared/Product";

const Services = (props) => {
  console.log(props.products.length);

  return (
    <section className="py-10">
      <Head>
        <title>Services</title>
      </Head>
      <div className="container">
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between ">
          {props?.products?.map((pd) => (
            <Product key={pd.id} {...pd} />
          ))}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
  return {
    props: { products },
  };
}

export default Services;
