import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LandingPage.css";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import Table from "./Table";

const LandingPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  let assets = [];
  let collections = [];
  let collectionsTestName = [
    "cryptopunks",
    "azuki",
    "tastybonesxyz",
    "boredapeyachtclub",
    "mfers",
  ];

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
      <Container className="lp1">
        <Row>
          <Col>
            <h1>Getting to know NFTs</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Become an owner of digital arts</h2>
          </Col>
        </Row>
        <Row className="bGroup">
          <Col>
            <Button className="b1">Explore</Button>
            <Button className="b2">Sign up with Deriv</Button>
          </Col>
        </Row>
        {/* <Row>
          {assets.map((asset) => (
            <span>{asset.name}</span>
          ))}
        </Row> */}
        <Container className="squareAssets">
          <Row>
            <Col xs className="px-0">
              <img
                src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
                alt="test"
              />
            </Col>
            <Col xs className="px-0">
              <img
                src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
                alt="test"
              />
            </Col>
            <Col xs className="px-0">
              <img
                src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
                alt="test"
              />
            </Col>
          </Row>
          <Row>
            <Col xs className="px-0">
              <img
                src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
                alt="test"
              />
            </Col>
            <Col xs className="px-0">
              <img
                src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
                alt="test"
              />
            </Col>
            <Col xs className="px-0">
              <img
                src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
                alt="test"
              />
            </Col>
          </Row>

          <Row>
            <Col xs className="px-0">
              <img
                src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
                alt="test"
              />
            </Col>
            <Col xs className="px-0">
              <img
                src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
                alt="test"
              />
            </Col>
            <Col xs className="px-0">
              <img
                src="https://lh3.googleusercontent.com/G3YUcbYqAmFUja1H0zLxXxWmwDMe6fJy9vAPfzqwQ_CdY5oYRkD7XNIEY0HLS9ZQuug96vGEt0r2KoabuTicASmTKAEAg7evPJBr8g=w395"
                alt="test"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="lp2"></Container>
      <Container className="lp3">
        <Row className="stats">
          <h1>
            Top Collections Over <a href="">last 24 hours</a>
          </h1>
        </Row>
        <Row>
          <Table collections={collections} />
        </Row>
        <Row>
          <Button className="rankingsButton">See More Rankings</Button>
        </Row>
      </Container>
      <Container className="lp4">Hello</Container>
      <Footer />
    </div>
  );
};

export default LandingPage;
