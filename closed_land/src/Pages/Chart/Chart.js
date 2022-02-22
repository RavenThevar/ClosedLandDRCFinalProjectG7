import React from "react";
import { Line } from 'react-chartjs-2';
import { Container } from "react-bootstrap";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer/Footer";
import "./chart.css"

const Chart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
     <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="main-container">
        <div className="title"></div>
      </div>
      Chart
      <Footer />
    </div>
  );
};

export default Chart;
