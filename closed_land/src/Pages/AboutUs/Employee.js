import React from "react";
import ameerul from "../../images/ameerul.png";
import suisin from "../../images/suisin.png";
import amira from "../../images/amira.png";
import raja from "../../images/raja.png";
import luqman from "../../images/luqman.png";
import raven from "../../images/raven.png";
import { Col, Row } from "react-bootstrap";

function Employee() {
  return (
    <div className="employee">
      <h2 className="employee-title">
        Standing strong with the most forward-thinking angels
      </h2>
      <div className="employee-icon">
        <Row id="emp-img">
          <Col>
            <img className="ameerul" src={ameerul} alt="ameerul" />
            <h5 id="emp-name">Ameerul</h5>
            <img className="raja" src={raja} alt="raja" />
            <h5 id="emp-name">Raja</h5>
          </Col>
          <Col>
            <img className="suisin" src={suisin} alt="suisin" />
            <h5 id="emp-name">Suisin</h5>
            <img className="luqman" src={luqman} alt="luqman" />
            <h5 id="emp-name">Luqman</h5>
          </Col>
          <Col>
            <img className="amira" src={amira} alt="amira" />
            <h5 id="emp-name">Amira</h5>
            <img className="raven" src={raven} alt="raven" />
            <h5 id="emp-name">Raven</h5>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Employee;
