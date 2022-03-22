import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Col,
  Row,
  Button,
  Dropdown,
  DropdownButton,
  ToggleButton,
} from "react-bootstrap";
import "./LandingPage.css";
import { FaEthereum } from "react-icons/fa";

const Table = ({ props }) => {
  const [data, setData] = useState([
    {
      Name: "",
      ImgUrl: "",
      StatsFloorPrice: 0,
      StatsOneDayChg: 0,
      StatsSevenDayChg: 0,
      StatsThirtyDayChange: 0,
      StatsTotalVolume: 0,
    },
  ]);
  const [toggleText, setToggleText] = useState("Last 24 Hours");
  const [percentage, setPercentage] = useState("one_day_change");

  let defCol = {
    Name: "Azuki",
    ImgUrl:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
    StatsFloorPrice: 0,
    StatsOneDayChg: 0,
    StatsSevenDayChg: 0,
    StatsThirtyDayChange: 0,
    StatsTotalVolume: 0,
  };

  useEffect(() => {
    switch (toggleText) {
      case "Last 24 Hours":
        axios.post(`http://10.5.0.11:4568/`).then((res) => {
          setData(res.data);
        }, []);
        break;
      case "Last 7 Days":
        axios.post(`http://10.5.0.12:4569/`).then((res) => {
          setData(res.data);
        }, []);
        break;
      case "Last 30 Days":
        axios.post(`http://10.5.0.16:4574/`).then((res) => {
          console.log(res.data);
          setData(res.data);
        }, []);
        break;

      default:
        break;
    }
  }, [toggleText]);

  let navigate = useNavigate();
  function goToStats() {
    navigate("/stats");
  }

  const [cols, setCols] = useState([]);

  const options = {
    headers: {
      Accept: "application/json",
      "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
    },
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     slugs.forEach((element) => {
  //       axios
  //         .get(`https://api.opensea.io/api/v1/collection/${element}`, options)
  //         .then((res) => {
  //           assets.push(res.data);
  //         });
  //     });
  //     dataAssets = Object.entries(assets).sort((a, b) => {
  //       if (a > b) return 1;
  //       if (a < b) return -1;
  //       return 0;
  //     });
  //     setCols(dataAssets);
  //   }, 1000);
  //   console.log(cols);
  // }, []);

  // console.log(cols[0]);
  // console.log(testData);

  return (
    <div className="table" id="Table">
      <Col data-aos="fade-in" data-aos-once="true" className="stats gx-0">
        <h1 id="h1Stats">Top Collections Over</h1>
        <DropdownButton id="dropdown-stats" title={toggleText} align="end">
          <Dropdown.Item
            id="dropdownItem"
            onClick={(e) => setToggleText(e.target.textContent)}
          >
            Last 24 Hours
          </Dropdown.Item>
          <Dropdown.Item
            id="dropdownItem"
            onClick={(e) => setToggleText(e.target.textContent)}
          >
            Last 7 Days
          </Dropdown.Item>
          <Dropdown.Item
            id="dropdownItem"
            onClick={(e) => setToggleText(e.target.textContent)}
          >
            Last 30 Days
          </Dropdown.Item>
        </DropdownButton>
      </Col>
      <Container className="tableLP">
        {data.map((col, index) => {
          return (
            <Row
              key={index}
              className="tableRow"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <Col className="tableText" id="numRow">
                <Col id="pNum">
                  <p>{index + 1}</p>
                </Col>
                <Col className="rowImage" id="imageRow">
                  <img
                    className="tableImage"
                    src={col.ImgUrl !== "NULL" ? col.ImgUrl : defCol.ImgUrl}
                    alt=""
                  />
                </Col>
                <Col className="rowName">
                  <p id="nameRow">{col.Name}</p>
                  <p id="fp">
                    <FaEthereum className="eth" />
                    {parseFloat(col.StatsFloorPrice) === null
                      ? "Floor Price: null"
                      : "Floor Price: " + parseFloat(col.StatsFloorPrice)}
                  </p>
                </Col>
              </Col>
              <Col className="rowStats" id="statsRow">
                <p
                  style={
                    toggleText === "Last 24 Hours"
                      ? {
                          color:
                            parseFloat(col.StatsOneDayChg) > 0
                              ? "#A1FFB1"
                              : "#7A0229",
                        }
                      : toggleText === "Last 7 Days"
                      ? {
                          color:
                            parseFloat(col.StatsSevenDayChg) > 0
                              ? "#A1FFB1"
                              : "#7A0229",
                        }
                      : toggleText === "Last 30 Days"
                      ? {
                          color:
                            parseFloat(col.StatsThirtyDayChange) > 0
                              ? "#A1FFB1"
                              : "#7A0229",
                        }
                      : {}
                  }
                >
                  {toggleText === "Last 24 Hours"
                    ? (parseFloat(col.StatsOneDayChg) * 100).toFixed(2) + " %"
                    : toggleText === "Last 7 Days"
                    ? (parseFloat(col.StatsSevenDayChg) * 100).toFixed(2) + " %"
                    : toggleText === "Last 30 Days"
                    ? (parseFloat(col.StatsThirtyDayChange) * 100).toFixed(2) +
                      " %"
                    : ""}
                </p>

                <p>
                  <FaEthereum className="eth" />
                  {parseFloat(col.StatsTotalVolume).toFixed(4)}
                </p>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Row
        id="rankButton"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Button className="rankingsButton" onClick={goToStats}>
          See More Stats
        </Button>
      </Row>
    </div>
  );
};

export default Table;
