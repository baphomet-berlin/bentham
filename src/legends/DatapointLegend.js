import React from 'react';

class DatapointLegend extends React.Component {
  const propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    containerComponent: React.PropTypes.element,
  }
  render() {
    return <div>DatapointLegend</div>;
  }
}

export default DatapointLegend;
