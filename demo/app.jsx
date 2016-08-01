import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import { Container, Row, Col } from 'reactstrap';
import {
  DonutChart,
  LegendItemAtom,
} from "../src/index";

const componentExample = require("raw!./examples/DonutChart.example");

class Index extends React.Component {
  render() {
    return (          
      <Playground 
      	codeText={componentExample} 
      	scope={{ React, DonutChart, LegendItemAtom }} />
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById("content"));
