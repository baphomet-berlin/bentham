'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAtom = function TextAtom(_ref) {
  var label = _ref.label;
  var _ref$children = _ref.children;
  var children = _ref$children === undefined ? { textAtom: textAtom } : _ref$children;
  var className = _ref.className;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)('legendItem', className),
      'data-set': props.item },
    content
  );
};

exports.default = LegendItem;