import React, { useEffect, useRef } from "react";
import Chart from "@qognicafinance/react-lightweight-charts";
import useState from "react-usestateref";
import { Tabs, Tab } from "react-bootstrap";
import CarLoader from "../../Components/Animations/CarLoading/CarLoader";

const CandleStick = () => {
  const arr = [];
  let quoteprice = []; //x-axis
  // let quotepoch = [];
  let currTime = 0;
  let currohlc;

  const [history, setHistory, refRealHistory] = useState([]);
  const [chartData, setChartData, refChartData] = useState([]);
  const [timeFrame, setTimeFrame] = useState(60);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    alignLabels: true,
    timeScale: {
      // rightOffset: 12,
      // barSpacing: 3,
      fixLeftEdge: true,
      fixRightEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      // borderVisible: false,
      // borderColor: "#fff000",
      visible: true,
      timeVisible: true,
      secondsVisible: true,
    },
    layout: {
      textColor: "#F2EAD0",
      fontSize: 12,
      fontFamily: "monospace",
    },
    localization: {
      dateFormat: "dd/MM/yyyy",
    },
  };

  const webSocket = useRef(null);
  const [ws, setWs] = useState(false);
  const [Request, setRequest] = useState(
    JSON.stringify({
      ticks_history: "cryETHUSD",
      adjust_start_time: 1,
      count: 90000,
      end: "latest",
      start: 0,
      subscribe: 1,
      granularity: timeFrame,
      style: "candles",
    })
  );

  useEffect(() => {
    if (webSocket.current === null) {
      webSocket.current = new WebSocket(
        "wss://ws.binaryws.com/websockets/v3?app_id=1089"
      );
      webSocket.current.onopen = function (evt) {
        console.log("ws opened");
        setWs(true);
      };
    }
    webSocket.current.onclose = function (e) {
      alert("Connection Disconnected. Please Refresh The Page.");
      setIsLoading(true);
    };
    return () => webSocket.current.close();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setChartData([]);
    setHistory([]);
    setTimeFrame(timeFrame);
    if (webSocket.current.readyState === WebSocket.OPEN) {
      webSocket.current.send(
        JSON.stringify({
          forget_all: ["ticks", "candles"],
        })
      );
    }
    setRequest(
      JSON.stringify({
        ticks_history: "cryETHUSD",
        adjust_start_time: 1,
        count: 10000,
        end: "latest",
        start: 0,
        granularity: timeFrame,
        subscribe: 1,
        style: "candles",
      })
    );
  }, [timeFrame]);

  useEffect(() => {
    setIsLoading(true);
    if (webSocket.current.readyState === WebSocket.OPEN) {
      //Fired when a connection with WebSocket is opened.
      webSocket.current.send(Request);

      webSocket.current.onmessage = function (msg) {
        let data = JSON.parse(msg.data);
        // console.log(data);
        if (data.candles) {
          arr.push(data.candles.slice(0, -1));
          setHistory(
            arr[0].map((e) => {
              return {
                time: e.epoch,
                open: e.open,
                high: e.high,
                low: e.low,
                close: e.close,
              };
            })
          );
          // eslint-disable-next-line react-hooks/exhaustive-deps
          currTime = data.candles[data.candles.length - 1].epoch;
        } else {
          if (currTime === data.ohlc.open_time) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currohlc = {
              time: parseInt(data.ohlc.epoch),
              open: parseFloat(data.ohlc.open),
              high: parseFloat(data.ohlc.high),
              low: parseFloat(data.ohlc.low),
              close: parseFloat(data.ohlc.close),
            };

            let cArr = refRealHistory.current.concat(
              chartData.splice(-1, 1, currohlc)
            );

            setChartData(cArr);
          } else {
            refRealHistory.current.push(currohlc);
            currTime = data.ohlc.open_time;
          }
        }

        setIsLoading(false);
      };
    }
  }, [ws, Request]);

  //   console.log(timeFrame);

  // console.log(refChartData.current);

  return (
    <div className="candleStickChart">
      <Tabs
        id="uncontrolled-tab-example"
        activeKey={timeFrame}
        className="main-bar"
        onSelect={(k) => setTimeFrame(k)}
      >
        <Tab eventKey={60} title="1M" />
        <Tab eventKey={300} title="5M" />
        <Tab eventKey={900} title="15M" />
        <Tab eventKey={1800} title="30M" />
        <Tab eventKey={3600} title="1H" />
        <Tab eventKey={7200} title="2H" />
        <Tab eventKey={14400} title="4H" />
        {/* <Tab eventKey={28800} title="8H" /> */}
        {/* <Tab eventKey={60} title="24H" /> */}
        {/* <div className='title'>Date Range </div> */}
      </Tabs>

      <div className="innerCandle">
        {/* {console.log(chartData)} */}
        {chartData.length === 0 || isLoading === true ? <CarLoader /> : null}
        <Chart
          options={options}
          candlestickSeries={[
            {
              data: chartData,
              options: {
                borderVisible: false,
                wickVisible: true,
                borderColor: "#000000",
                // wickColor: "#000000",
                // upColor: "#14a098",
                downColor: "#A52A2A",
                wickDownColor: "#A52A2A",
              },
            },
          ]}
          autoWidth
          height={400}
          darkTheme
        ></Chart>
      </div>
    </div>
  );
};

export default CandleStick;
