import React from "react";
import { Container, Carousel, Row } from "react-bootstrap";
import "./LandingPage.css";
import axios from "axios";

const News = () => {
  const [newsData, setNewsData] = React.useState([
    {
      news_image: "",
      news_title: "",
    },
  ]);

  React.useEffect(() => {
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then((res) => {
        let arrNews = [];
        res.data.Data.map((element, index) => {
          let objNews = {};
          if (element.tags.includes("NFT", "nft", "Eth", "Ethereum", "ETH")) {
            objNews["news_image"] = element.source_info.img;
            objNews["news_title"] = element.title;
            objNews["news_url"] = element.url;
            arrNews.push(objNews);
            // return arrNews;
          } else {
            return 0;
          }
          // element.tags.includes("NFT") ? console.log(res.data.Data.tags) : null;
        });

        setNewsData(arrNews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    console.log(newsData);
  }, [newsData]);

  return (
    <div className="news">
      <Row className="px-0">
        <h1 data-aos="fade-in" data-aos-once="true" className="h1News">
          What's in the news?
        </h1>
      </Row>
      <Row
        className="newsCarousel px-0"
        data-aos="fade-in"
        data-aos-once="true"
      >
        <Carousel>
          {newsData.map((element, index) => {
            return (
              <Carousel.Item>
                <a href={element["news_url"]} target="_blank" rel="noreferrer">
                  <img
                    key={index}
                    className="newsImage"
                    src={element["news_image"]}
                    alt="First slide"
                  />
                </a>
                <Carousel.Caption>
                  <h3>{element["news_title"]}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Row>
    </div>
  );
};

export default News;
