import React from "react";
import { Col } from "react-bootstrap";

function VisionMission() {
  return (
    <div className="main-vismis">
      <div className="aboutus-header">
        <h2 className="aboutus-name">About Us</h2>
        <div className="rectangle4">.</div>
      </div>
      <div className="visionmission">
        <Col>
          <h3 className="vis-name">Vision</h3>
          <h5 className="vis-describe">
            We are commited in making digital art well-known in out society
            through the platform we offer.
          </h5>
        </Col>
        <Col>
          <h3 className="mis-name">Mission</h3>
          <h5 className="mis-describe">
            To provide a platform for digital artists to promote their rare
            creations and sell them to aesthetes.{" "}
          </h5>
        </Col>
      </div>
    </div>
  );
}

export default VisionMission;
