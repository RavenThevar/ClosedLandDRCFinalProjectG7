import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
import "./Stats.css";
import { FaEthereum } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const StatsMobile = () => {
  // let array = Object.entries(props).sort((b, a) => {
  //   if (a.stats.one_day_change > b.stats.one_day_change) return 1;
  //   if (a.stats.one_day_change < b.stats.one_day_change) return -1;
  //   return 0;
  // });

  // console.log(props);
  // let collectionsStats = array[0][1];

  let defCol = {
    ImgUrl:
      "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s130",
    Name: "Doodles",
    StatsFloorPrice: 12.7498,
    StatsOneDayChg: -0.06642826407543108,
    StatsSevenDayChg: -0.22917061264882083,
    StatsNumOwners: 6058,
    StatsCount: 10000,
    StatsTotalVolume: 81902.37776033413,
  };

  const [key, setKey] = useState(null);
  const [dropDownText, setDropDownText] = useState("Collection");

  const [data, setData] = useState([
    {
      ImgUrl: "",
      Name: "",
      StatsFloorPrice: 0,
      StatsOneDayChg: 0,
      StatsSevenDayChg: 0,
      StatsNumOwners: 0,
      StatsCount: 0,
      StatsTotalVolume: 0,
    },
  ]);

  useEffect(() => {
    axios.post(`http://localhost:4566/`).then((res) => {
      setData(res.data);
    }, []);
  }, []);

  useEffect(() => {
    switch (dropDownText) {
      case "24 Hour %":
        axios.post(`http://localhost:4568/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "7 day %":
        axios.post(`http://localhost:4569/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Volume":
        axios.post(`http://localhost:4567/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Floor Price":
        axios.post(`http://localhost:4570/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Collection Name":
        axios.post(`http://localhost:4566/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Owners":
        axios.post(`http://localhost:4571/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Items":
        axios.post(`http://localhost:4572/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      default:
        break;
    }
  }, [dropDownText]);

  return (
    <div className="statsPage">
      <Container className="statsTitle animate__animated animate__fadeIn animate__delay-s">
        <Row>
          <h1>STATS</h1>
        </Row>
        <Row>
          <h2>Top NFT Collections in ClosedLand</h2>
        </Row>
      </Container>
      <Row className="toggleStats animate__animated animate__fadeIn animate__delay-2s">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">{dropDownText}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={(e) => setDropDownText(e.target.textContent)}
            >
              24 Hour %
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setDropDownText(e.target.textContent)}
            >
              7 Day %
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setDropDownText(e.target.textContent)}
            >
              Volume
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setDropDownText(e.target.textContent)}
            >
              Floor Price
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setDropDownText(e.target.textContent)}
            >
              Collection Name
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setDropDownText(e.target.textContent)}
            >
              Owners
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setDropDownText(e.target.textContent)}
            >
              Items
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
      <Row>
        <Container className="statsPageTable">
          {data.map((col, index) => {
            return (
              <Row
                key={index}
                className="statsTableRow gx-0 animate__animated animate__bounceIn animate__delay-2s"
              >
                <Col className="statsTableText " id="statsNumRow">
                  <Col id="sNum">
                    <h1>{index + 1}</h1>
                  </Col>
                  <Col className="statsRowImage">
                    <img
                      className="statsTableImage"
                      src={col.ImgUrl !== "NULL" ? col.ImgUrl : defCol.ImgUrl}
                      alt=""
                    />
                  </Col>
                  <Col className="statsRowName">
                    <p id="statsName">{col.Name}</p>
                    <Button
                      onClick={() =>
                        key === index ? setKey(null) : setKey(index)
                      }
                    >
                      + {key === index ? "Less" : "More"}
                    </Button>
                  </Col>
                </Col>
                <Col className="rowStatsPage">
                  <p
                    style={{
                      color:
                        parseFloat(col.StatsOneDayChg) > 0
                          ? "#A1FFB1"
                          : "#7A0229",
                    }}
                  >
                    {(parseFloat(col.StatsOneDayChg) * 100).toFixed(2) + " %"}
                  </p>
                  <p id="total_volume">
                    <FaEthereum className="eth" />
                    {parseFloat(col.StatsTotalVolume).toFixed(0)}
                  </p>
                </Col>
                {index === key ? (
                  <Row className="moreStatsRow gx-0">
                    <Row className="statsRowLine gx-0"></Row>
                    <Row className="moreStats">
                      <Col>
                        <p className="moreStatsHeader">7d%</p>
                        <p
                          className="moreStatsNum"
                          style={{
                            color:
                              parseFloat(col.StatsSevenDayChg) > 0
                                ? "#A1FFB1"
                                : "#7A0229",
                          }}
                        >
                          {(parseFloat(col.StatsSevenDayChg) * 100).toFixed(2) +
                            " %"}
                        </p>
                      </Col>
                      <Col>
                        <p className="moreStatsHeader">Floor Price</p>
                        <p className="moreStatsNum">
                          <FaEthereum className="eth" />
                          {parseFloat(col.StatsFloorPrice)}
                        </p>
                      </Col>
                      <Col>
                        <p className="moreStatsHeader">Owners</p>
                        <p className="moreStatsNum">
                          {parseFloat(col.StatsNumOwners)}
                        </p>
                      </Col>
                      <Col>
                        <p className="moreStatsHeader">Items</p>
                        <p className="moreStatsNum">
                          {parseFloat(col.StatsCount)}
                        </p>
                      </Col>
                    </Row>
                  </Row>
                ) : null}
              </Row>
            );
          })}
        </Container>
      </Row>
    </div>
  );
};

export default StatsMobile;
