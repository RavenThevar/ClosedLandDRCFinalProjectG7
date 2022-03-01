import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
// import {Line} from 'react-chartjs-2';
import { Testcharts } from './testchart';


function Tab(){
    
    return (
    <div className='top-tab'>
        
        <Tabs id="uncontrolled-tab-example" className="main-bar">
             <Tab eventKey="hour" title="1H"/>
             <Tab eventKey="day" title="1D" />
             <Tab eventKey="week" title="1W" />
             <Tab eventKey="month" title="1M" />
            <Tab eventKey="year" title="1Y" />
            <Tab eventKey="all" title="ALL" />
            {/* <div className='title'>Date Range </div> */}
        </Tabs> 
        <Testcharts/>
    </div>
      );
}

export default Tab