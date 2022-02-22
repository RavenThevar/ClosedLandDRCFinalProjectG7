import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LandingPage.css";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  let assets = [];

  const options = {
    headers: {
      Accept: "application/json",
      "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=5000&limit=6",
        options
      )
      .then((res) => {
        assets.push(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <Container className="home">
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
      <Container className="squareAssets">
        {/* <Row>
          {assets.map((asset) => {
            return (
              <Col xs className="px-0">
                <span>{asset.name}</span>
                <img src={asset.image_url} alt="test" />
              </Col>
            );
          })}
        </Row> */}
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
  );
};

export default Home;
