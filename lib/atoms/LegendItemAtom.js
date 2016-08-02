'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LegendItemAtom = function LegendItemAtom(_ref) {
  var id = _ref.id;
  var className = _ref.className;
  var children = _ref.children;
  var item = _ref.item;


  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)('legendItem', className),
      'data-set': item },
    children
  );
};

exports.default = LegendItemAtom;