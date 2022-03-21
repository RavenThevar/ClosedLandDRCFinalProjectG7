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
          if (element.tags.includes("NFT", "nft")) {
            objNews["news_image"] = element.source_info.img;
            objNews["news_title"] = element.title;
            arrNews.push(objNews);
            // return arrNews;
          } else {
            return 0;
          }
          setNewsData(arrNews);
          // element.tags.includes("NFT") ? console.log(res.data.Data.tags) : null;
        });
        console.log(newsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    console.log(newsData);
  });
  return (
    <div className="news">
      <Row className="px-0">
        <h1 data-aos="fade-in" data-aos-once="true" className="h1News">
          What's the news?
        </h1>
      </Row>
      {/* <Row>
        <div className="line"></div>
      </Row> */}
      <Row
        className="newsCarousel px-0"
        data-aos="fade-in"
        data-aos-once="true"
      >
        <Carousel>
          {newsData.map((element, index) => {
            console.log(element);
            return (
              <Carousel.Item>
                <img
                  key={index}
                  style={{ height: "600px" }}
                  className="d-block w-100"
                  src={element.news_image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{element.news_title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=h600"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=h600"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=h600"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </Row>
    </div>
  );
};

export default News;
