import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import axios from "axios";
import "./LandingPage.css";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import Table from "./Table";
import Home from "./Home";
import News from "./News";
import Numbers from "./Numbers";

const LandingPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  let assets = [];
  let collections = [];

  // const options = {
  //   headers: {
  //     Accept: "application/json",
  //     "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
  //   },
  // };

  // useEffect(() => {
  //   collectionsTestName.forEach((element) => {
  //     axios
  //       .get(`https://api.opensea.io/api/v1/collection/${element}`, options)
  //       .then((res) => {
  //         setTimeout(() => {
  //           setLoading(false);
  //           // console.log(collections);
  //         }, 2000);
  //         collections.push(res.data);
  //       });
  //   });

  // axios
  //   .get(
  //     "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=5000&limit=6",
  //     options
  //   )
  //   .then((res) => {
  //     assets.push(res.data);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //   });
  // }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  // setTimeout(() => {
  //   console.log(assets);
  // }, 100);

  return (
    <div className="landpage">
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Home />
      <Numbers />
      <Table collections={collections} />
      <News />
    </div>
  );
};

export default LandingPage;
