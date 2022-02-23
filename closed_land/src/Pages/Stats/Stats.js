import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
import "./Stats.css";
import BootstrapTable from "react-bootstrap-table-next";
import { FaEthereum, FaPlus } from "react-icons/fa";

const Stats = () => {
  let collectionsStats = [
    {
      image_url:
        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s120",
      name: "Doodles",
      stats: {
        floor_price: 12.7498,
        one_day_change: -0.06642826407543108,
        seven_day_change: -0.22917061264882083,
        num_owners: 6058,
        count: 10000,
        total_volume: 81902.37776033413,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120",
      name: "Bored Ape Yacht Club",
      stats: {
        floor_price: 91.8,
        one_day_change: 0.7902130730188586,
        seven_day_change: -0.15093345095012342,
        num_owners: 6300,
        count: 10000,
        total_volume: 400191.08569358353,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120",
      name: "Azuki",
      stats: {
        floor_price: 11.5,
        one_day_change: -0.2019592268996558,
        seven_day_change: 0.01030311973340186,
        num_owners: 5424,
        count: 10000,
        total_volume: 117597.23224187162,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/DIafQlRW63pQ8UJqmdQBBOHZcubAE9rAkbovVx_WU_-TmIg3hF7z0y60gUGvah85_uYVgBxmhNfWUXwajaUmYZsrCPp8ZdYE0Z-wrt0=s120",
      name: "NFT Worlds",
      stats: {
        floor_price: 15.35,
        one_day_change: 0.1607692233795617,
        seven_day_change: 2.263430986766646,
        num_owners: 4583,
        count: 10000,
        total_volume: 29697.929594975805,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/pFx2k4GbEd30FbIPOGagqG646QGUk-0Ns8n6kSgozxY4aJSI2AYm1a_Acvu0jngeIx7hSeZeZTHLKUiUEt9qXfE-DWRmJyZJQ_AnKA=s120",
      name: "Tasty Bones XYZ",
      stats: {
        floor_price: 1.36,
        one_day_change: 0.1996455178896861,
        seven_day_change: 0.6206373646305791,
        num_owners: 3478,
        count: 5049,
        total_volume: 9042.611033725618,
      },
    },
  ];

  // const headerSortingStyle = { backgroundColor: "#c8e6c9" };
  // const columns = [
  //   {
  //     dataField: "name",
  //     text: "Collection",
  //     sort: true,
  //     headerSortingStyle,
  //   },
  //   {
  //     dataField: "image_url",
  //     text: "Collection",
  //     sort: true,
  //     headerSortingStyle,
  //   },
  //   {
  //     dataField: "stats.total_volume",
  //     text: "Volume",
  //     sort: true,
  //     headerSortingStyle,
  //   },
  //   {
  //     dataField: "stats.one_day_change",
  //     text: "24h%",
  //     sort: true,
  //     headerSortingStyle,
  //   },
  //   {
  //     dataField: "stats.seven_day_change",
  //     text: "7d%",
  //     sort: true,
  //     headerSortingStyle,
  //   },
  //   {
  //     dataField: "stats.floor_price",
  //     text: "Floor Price",
  //     sort: true,
  //     headerSortingStyle,
  //   },
  //   {
  //     dataField: "stats.num_owners",
  //     text: "Owners",
  //     sort: true,
  //     headerSortingStyle,
  //   },
  //   {
  //     dataField: "stats.count",
  //     text: "Items",
  //     sort: true,
  //     headerSortingStyle,
  //   },
  // ];
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState("More");
  const [key, setKey] = useState(null);

  const showMore = () => {
    if (show === false) {
      setShow(true);
      setDisplay("Less");
    } else {
      setShow(false);
      setDisplay("More");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <Container className="statsPage">
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
            <Dropdown.Toggle id="dropdown-basic">24 Hour %</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">7 Day %</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Volume</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Floor Price</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Collection Name</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Owners</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Items</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>
        <Row>
          <Container className="statsPageTable">
            {collectionsStats.map((col, index) => {
              return (
                <Row key={index} className="statsTableRow">
                  <Col className="statsTableText" id="statsNumRow">
                    <Col id="sNum">
                      <h1>{index + 1}</h1>
                    </Col>
                    <Col className="statsRowImage">
                      <img
                        className="statsTableImage"
                        src={col.image_url}
                        alt=""
                      />
                    </Col>
                    <Col className="statsRowName">
                      <p id="statsName">{col.name}</p>
                      <Button
                        onClick={() =>
                          key === index ? setKey(null) : setKey(index)
                        }
                      >
                        + {display}
                      </Button>
                    </Col>
                  </Col>
                  <Col className="rowStatsPage">
                    <p>
                      {(col.stats.seven_day_change * 100).toFixed(2) + " %"}
                    </p>
                    <p id="total_volume">
                      <FaEthereum />
                      {col.stats.total_volume.toFixed(0)}
                    </p>
                  </Col>
                  {index === key ? (
                    <Row className="moreStatsRow">
                      {/* <Row className="statsRowLine"></Row> */}
                      <Row className="moreStats">
                        <Col>
                          <p className="moreStatsHeader">7d%</p>
                          <p className="moreStatsNum">
                            {(col.stats.seven_day_change * 100).toFixed(2) +
                              " %"}
                          </p>
                        </Col>
                        <Col>
                          <p className="moreStatsHeader">Floor Price</p>
                          <p className="moreStatsNum">
                            {col.stats.floor_price}
                          </p>
                        </Col>
                        <Col>
                          <p className="moreStatsHeader">Owners</p>
                          <p className="moreStatsNum">{col.stats.num_owners}</p>
                        </Col>
                        <Col>
                          <p className="moreStatsHeader">Items</p>
                          <p className="moreStatsNum">{col.stats.count}</p>
                        </Col>
                      </Row>
                    </Row>
                  ) : null}
                </Row>
              );
            })}
          </Container>
          {/* <BootstrapTable
            keyField="stats.one_day_change"
            data={collectionsStats}
            columns={columns}
          /> */}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Stats;
