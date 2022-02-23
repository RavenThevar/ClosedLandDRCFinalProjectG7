import React from "react";
// import { Line } from 'react-chartjs-2';
import { Container } from "react-bootstrap";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer/Footer";
import "./chart.css";
import Convert from "./converter";

const Chart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Convert />
      <Footer />
    </div>
  );
};

export default Chart;
