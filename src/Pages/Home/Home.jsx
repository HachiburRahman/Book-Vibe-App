/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../../Components/Banner/Banner";
import Books from "../../Components/Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
    const data=useLoaderData();
    // console.log(data)
  return (
    <div>
      <Banner></Banner>
      <Books data={data}></Books>
    </div>
  );
};

export default Home;
