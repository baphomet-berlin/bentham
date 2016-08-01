import React from 'react';
import { VictoryPie, VictoryContainer } from 'victory';

class DonutChart extends React.Component {
  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    labelComponent: React.PropTypes.element,
    standalone: React.PropTypes.bool,
  }
  static defaultProps = {
    labels: () => null,
    labelComponent: <div />,
  }
  render() {
    const {container, children, ...props} = this.props;
    return (
      <VictoryPie 
        { ...props }
        container={() => chartContainer} 
        innerRadius={140}>
      </VictoryPie>);

  }
}

export default DonutChart;
