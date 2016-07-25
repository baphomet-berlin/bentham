import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie } from 'victory';
import Playground from 'component-playground';
import { Container, Row, Col } from 'reactstrap';

const componentExample = require("raw!./examples/DonutChart.example");

class Index extends React.Component {
  render() {
    return (          
      <Playground codeText={componentExample} scope={{React: React, Pie: VictoryPie}} />
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById("content"));
