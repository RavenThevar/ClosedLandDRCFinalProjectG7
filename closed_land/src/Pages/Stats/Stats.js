import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
import "./Stats.css";

const Stats = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container className="stats">
        <Container className="statsTitle">
          <Row>
            <h1>STATS</h1>
          </Row>
          <Row>
            <h2>Top NFT Collections in ClosedLand</h2>
          </Row>
        </Container>
        <Row className="toggleStats">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Stats;
