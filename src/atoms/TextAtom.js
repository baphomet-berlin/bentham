import React from 'react';
import classNames from 'classnames';


const TextAtom = ({label, children={textAtom}, className}) => (
  <div 
    className={classNames('legendItem', className)} 
    data-set={props.item}>
    {content}
  </div>
);

export default LegendItem;