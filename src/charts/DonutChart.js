import React from 'react';
import { VictoryPie, VictoryContainer } from 'victory';

class DonutChart extends React.Component {
  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    labelComponent: React.PropTypes.element,
    standalone: React.PropTypes.bool,
    colorFunction: React.PropTypes.func,
  }

  static get defaultProps() {
    return {
      labels: () => null,
      labelComponent: <div />,
      colorFunction: el => el.color
    }
  }

  render() {
    const {container, children, colorFunction, ...props} = this.props;
    const colors = this.props.data.map((el, i) => colorFunction(el, i));

    return (
      <VictoryPie 
        { ...props }
        container={() => chartContainer} 
        innerRadius={140}
        colorScale={colors}
      >
      </VictoryPie>);

  }
}

export default DonutChart;
