import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie } from 'victory';
import Playground from 'component-playground';

const componentExample = require("raw!./examples/DonutChart.example");

class Index extends React.Component {
  render() {
    return (
      <div className="component-documentation">
        <Playground codeText={componentExample} scope={{React: React, Pie: VictoryPie}}/>
      </div>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById("content"));
