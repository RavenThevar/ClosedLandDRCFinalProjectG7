import React from "react";
import Cards from "../../Components/Card";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import "./Collection.css";
// import https from "https";
// import { Redis } from "ioredis";
// import IORedis from "ioredis";
//Redis Part Start
//Redis Part End

const Collection = () => {
  //Redis Part Start//
  // const https = require("https");
  // const IORedis = require("ioredis");
  // const redis = new IORedis();
  // const channel = "ioredis_channel";
  // let messageCount = redis.xlen(channel);
  // console.log(
  //   `current message count in channel ${channel} is ${messageCount} messages`
  // );
  // let messages = redis.xread(["STREAMS", channel, 0]); //await
  // messages = messages[0][1];
  //Redis Part End

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collectionPage">
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="banner"></div>
      <div className="collectionPicContainer">
        <img
          className="collectionPic"
          src="https://pbs.twimg.com/profile_images/1475936568321855490/-GpLhQY4_400x400.jpg"
          alt=""
        />
      </div>
      <div className="collectionNameContainer">
        <span className="collectionName">hi</span>
        <span className="collectionCreator">Creator: Hello World</span>
        <div className="socialMediaContainer">
          <img
            className="socialMedia"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt=""
          />
          <img
            className="socialMedia"
            src="
            https://cdn-icons-png.flaticon.com/512/124/124021.png"
            alt=""
          />
          <img
            className="socialMedia"
            src="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
            alt=""
          />
        </div>
      </div>
      <div className="itemInfoContainer">
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Items</span>
        </div>
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Owners</span>
        </div>
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Floor Price</span>
        </div>
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Highest Price</span>
        </div>
        <div className="eachItemContainer">
          <span className="itemNumbers">XXX</span>
          <span className="itemType">Volume Traded</span>
        </div>
      </div>
      <div className="assetsAndAttributeContainer">
        <div className="attributeContainer">
          <span className="attributes">Attributes</span>
        </div>
        <div className="assetsContainer">
          <input className="searchBar" placeholder="SEARCH" type="text" />
          <div className="cardAssets">
            <Cards
              // key={index}qw
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />
            <Cards
              // key={index}qw
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />
            <Cards
              // key={index}qw
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />
            <Cards
              // key={index}qw
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />
            <Cards
              // key={index}qw
              ID={1}
              collection={"Hello Word"}
              collectionName={"5"}
              imageSource={
                "https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png"
              }
              collectionPrice={"1 ETH"}
              scoreRating={5}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
