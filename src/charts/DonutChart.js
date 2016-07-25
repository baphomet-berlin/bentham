import React from 'react';
import { VictoryPie } from 'victory';

export default class DonutChart extends React.Component {
  render() {
    return <VictoryPie innerRadius={140}/>;
  }
}
