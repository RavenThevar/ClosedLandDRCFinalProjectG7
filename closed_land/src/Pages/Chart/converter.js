import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ETH from "../images/eth.png";

function Convert(){
    return (
        <div classname="main-convert">
            <div className='convert-rec1'>RM 12,651.56</div>
            <div className='convert-text'> 1 ETH = RM 12,651.56</div>
            <Row className="details-convert">
                <Col className='convert-rec2'>1</Col>
                <Col className='convert-rec3'>ETH
                <img className='eth-pic' src={ETH} alt="png"/>
                </Col>
                <Col className='icon-rotate'></Col>
                <Col className='convert-rec4'>MYR</Col>
            </Row>
            
            </div>
    
      );
}

export default Convert;