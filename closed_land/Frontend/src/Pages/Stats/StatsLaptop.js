import { Container, Col, Row, Button } from "react-bootstrap";
import "./Stats.css";
import { FaEthereum } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const StatsLaptop = () => {
  // let array = Object.entries(props).sort((b, a) => {
  //   if (a.stats.one_day_change > b.stats.one_day_change) return 1;
  //   if (a.stats.one_day_change < b.stats.one_day_change) return -1;
  //   return 0;
  // });

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
  const [buttonText, setButtonText] = useState("Collection");

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
    axios.post(`http://10.5.0.9:4566/`).then((res) => {
      setData(res.data);
    }, []);
  }, []);

  useEffect(() => {
    switch (buttonText) {
      case "24h%":
        setButtonText(buttonText);
        axios.post(`http://10.5.0.11:4568/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "7d%":
        setButtonText(buttonText);
        axios.post(`http://10.5.0.12:4569/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Volume":
        setButtonText(buttonText);
        axios.post(`http://10.5.0.10:4567/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Floor Price":
        setButtonText(buttonText);
        axios.post(`http://10.5.0.13:4570/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Collection":
        setButtonText(buttonText);
        axios.post(`http://10.5.0.9:4566/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Owners":
        setButtonText(buttonText);
        axios.post(`http://10.5.0.14:4571/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      case "Items":
        setButtonText(buttonText);
        axios.post(`http://10.5.0.20:4572/`).then((res) => {
          setData(res.data);
          console.log("24");
          console.log(res.data);
        }, []);
        break;

      default:
        break;
    }
  }, [buttonText]);

  return (
    <div className="statsPageLaptop">
      <Container className="statsTitleLaptop animate__animated animate__fadeIn animate__delay-1s">
        <Row>
          <h1>STATS</h1>
        </Row>
        <Row>
          <h2>Top NFT Collections in ClosedLand</h2>
        </Row>
      </Container>
      <Row>
        <Container className="statsPageTableLaptop">
          <Row className="statsButtonGroup gx-0 animate__animated animate__fadeIn animate__delay-2s">
            <Col className="statsButtonColName" xs={4}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Collection
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={2}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Volume
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={1}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                24h%
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={1}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                7d%
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={2}>
              <Button
                className="statsButtonFloor"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Floor Price
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={1}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Owners
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={1}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Items
              </Button>
            </Col>
          </Row>
          {data.map((col, index) => {
            return (
              <Row
                key={index}
                className="statsTableRowLaptop gx-0 animate__animated animate__bounceIn animate__delay-2s"
              >
                <Col className="statsTableTextLaptop" id="statsNumRow" xs={4}>
                  <Col id="sNumLaptop" className="" xs={2}>
                    <h1>{index + 1}</h1>
                  </Col>
                  <Col className="statsRowImageLaptop" xs={2}>
                    <img
                      className="statsTableImageLaptop"
                      src={col.ImgUrl !== "NULL" ? col.ImgUrl : defCol.ImgUrl}
                      alt=""
                    />
                  </Col>
                  <Col className="statsRowNameLaptop" xs={8}>
                    <p id="statsNameLaptop">{col.Name}</p>
                  </Col>
                </Col>
                <Col className="rowStatsPageLaptop" xs={2}>
                  <p>
                    <FaEthereum className="eth" />
                    {parseFloat(col.StatsTotalVolume).toFixed(0)}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop" xs={1}>
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
                </Col>
                <Col className="rowStatsPageLaptop" xs={1}>
                  <p
                    style={{
                      color:
                        parseFloat(col.StatsSevenDayChg) > 0
                          ? "#A1FFB1"
                          : "#7A0229",
                    }}
                  >
                    {(parseFloat(col.StatsSevenDayChg) * 100).toFixed(2) + " %"}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop" xs={2}>
                  <p>
                    <FaEthereum className="eth" />
                    {parseFloat(col.StatsFloorPrice).toFixed(2)}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop" xs={1}>
                  <p>{col.StatsNumOwners}</p>
                </Col>
                <Col className="rowStatsPageLaptop" xs={1}>
                  <p>{col.StatsCount}</p>
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
