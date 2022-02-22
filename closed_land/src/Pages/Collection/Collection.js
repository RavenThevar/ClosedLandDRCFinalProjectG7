import React from "react";
import Cards from "../../Components/Card";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import "./Collection.js";

const Collection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="banner">hello</div>
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
      <Footer />
    </div>
  );
};

export default Collection;
