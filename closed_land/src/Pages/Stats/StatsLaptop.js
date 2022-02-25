import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
import "./Stats.css";
import { FaEthereum } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const StatsLaptop = (props) => {
  let array = Object.entries(props).sort((b, a) => {
    if (a.stats.one_day_change > b.stats.one_day_change) return 1;
    if (a.stats.one_day_change < b.stats.one_day_change) return -1;
    return 0;
  });

  let collectionsStats = array[0][1];

  const [key, setKey] = useState(null);
  const [dropDownText, setDropDownText] = useState("24 Hour %");

  const [data, setData] = useState(collectionsStats);
  console.log(collectionsStats);

  useEffect(() => {}, [data]);

  function sortStats(text) {
    switch (text) {
      case "24 Hour %":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.one_day_change > b.stats.one_day_change) return 1;
          if (a.stats.one_day_change < b.stats.one_day_change) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "7 Day %":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.seven_day_change > b.stats.seven_day_change) return 1;
          if (a.stats.seven_day_change < b.stats.seven_day_change) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "Volume":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.total_volume > b.stats.total_volume) return 1;
          if (a.stats.total_volume < b.stats.total_volume) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "Floor Price":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.floor_price > b.stats.floor_price) return 1;
          if (a.stats.floor_price < b.stats.floor_price) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "Collection Name":
        setDropDownText(text);
        collectionsStats.sort((x, y) => {
          let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        });
        setData(collectionsStats);
        break;

      case "Owners":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.num_owners > b.stats.num_owners) return 1;
          if (a.stats.num_owners < b.stats.num_owners) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      case "Items":
        setDropDownText(text);
        collectionsStats.sort((b, a) => {
          if (a.stats.count > b.stats.count) return 1;
          if (a.stats.count < b.stats.count) return -1;
          return 0;
        });
        setData(collectionsStats);
        break;

      default:
        break;
    }
  }
  return (
    <div className="statsPageLaptop">
      <Container className="statsTitleLaptop">
        <Row>
          <h1>STATS</h1>
        </Row>
        <Row>
          <h2>Top NFT Collections in ClosedLand</h2>
        </Row>
      </Container>
      <Row>
        <Container className="statsPageTableLaptop">
          <Row className="statsButtonGroup">
            <Col className="px-0">
              <Button className="statsButton" disabled></Button>
            </Col>
            <Col className="statsButtonCol">
              <Button className="statsButton">Collection</Button>
            </Col>
            <Col className="statsButtonCol">
              <Button className="statsButton">Volume</Button>
            </Col>
            <Col className="statsButtonCol">
              <Button className="statsButton">24h%</Button>
            </Col>
            <Col className="statsButtonCol">
              <Button className="statsButton">7d%</Button>
            </Col>
            <Col className="statsButtonCol">
              <Button className="statsButton">Floor Price</Button>
            </Col>
            <Col className="statsButtonCol">
              <Button className="statsButton">Owners</Button>
            </Col>
            <Col className="statsButtonCol">
              <Button className="statsButton">Items</Button>
            </Col>
          </Row>
          {data.map((col, index) => {
            return (
              <Row key={index} className="statsTableRowLaptop gx-0">
                <Col className="statsTableTextLaptop" id="statsNumRow">
                  <Col id="sNumLaptop">
                    <h1>{index + 1}</h1>
                  </Col>
                  <Col className="statsRowImageLaptop">
                    <img
                      className="statsTableImageLaptop"
                      src={col.image_url}
                      alt=""
                    />
                  </Col>
                </Col>
                <Col className="statsRowNameLaptop">
                  <p id="statsNameLaptop">{col.name}</p>
                </Col>
                <Col className="rowStatsPageLaptop">
                  <p>
                    <FaEthereum className="eth" />
                    {col.stats.total_volume.toFixed(0)}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop">
                  <p
                    style={{
                      color:
                        col.stats.one_day_change > 0 ? "#A1FFB1" : "#7A0229",
                    }}
                  >
                    {(col.stats.one_day_change * 100).toFixed(2) + " %"}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop">
                  <p
                    style={{
                      color:
                        col.stats.seven_day_change > 0 ? "#A1FFB1" : "#7A0229",
                    }}
                  >
                    {(col.stats.seven_day_change * 100).toFixed(2) + " %"}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop">
                  <p>
                    <FaEthereum className="eth" />
                    {col.stats.floor_price.toFixed(2)}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop">
                  <p>{col.stats.num_owners}</p>
                </Col>
                <Col className="rowStatsPageLaptop">
                  <p>{col.stats.count}</p>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Row>
    </div>
  );
};

export default StatsLaptop;
