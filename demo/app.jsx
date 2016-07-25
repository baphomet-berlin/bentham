import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import { Container, Row, Col } from 'reactstrap';

import {
  DonutChart,
} from "../src/index";

const componentExample = require("raw!./examples/DonutChart.example");

class Index extends React.Component {
  render() {
    return (          
      <Playground codeText={componentExample} scope={{React: React, DonutChart: DonutChart}} />
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById("content"));
