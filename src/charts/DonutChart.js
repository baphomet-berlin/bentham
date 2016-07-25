import React from 'react';
import { VictoryPie } from 'victory';

class DonutChart extends React.Component {
  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    labelComponent: React.PropTypes.element,
    standalone: false,
  }
  render() {
    return <VictoryPie {...this.props} innerRadius={140} />;
  }
}

export default DonutChart;