import React from 'react';
import classNames from 'classnames';

const LegendItemAtom = ({id, className, children, item}) => {

  return (<div
    className={classNames('legendItem', className)} 
    data-set={item}>
      {children}
    </div>);
};

export default LegendItemAtom;