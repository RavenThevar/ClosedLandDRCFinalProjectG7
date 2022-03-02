import React from "react";
import "./WrongPage.css";
import LogoCube2 from "../../Components/Cube/Cube2";
import { Container } from "react-bootstrap";
import loadingImg from "../images/loading.svg";

const WrongPage = () => {
  return (
    <div className="wrongPage">
      <h1 className="fourOfour">Error 404!</h1>
      <h1>Page Doesn't Exist.</h1>
      <img src={loadingImg} />
      <div className="wrongPageCube">{/* <LogoCube2></LogoCube2> */}</div>
    </div>
  );
};

export default WrongPage;
