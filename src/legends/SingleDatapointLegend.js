import React from 'react';

class SingleDatapointLegend extends React.Component {
  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    containerComponent: React.PropTypes.element,
    selectedItem: React.PropTypes.number,
  }

  static get defaultProps() {
    return {
      containerComponent: () => null,
      labelComponent: <div />,
    }
  }

  render() {
    const { data } = this.props;
    return <containerComponent {...this.props}>{children}</containerComponent>;
  }
}

export default SingleDatapointLegend;
