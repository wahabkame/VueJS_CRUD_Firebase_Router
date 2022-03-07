"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _EmployeeList = _interopRequireDefault(require("@/components/EmployeeList"));

var _ShowEmployee = _interopRequireDefault(require("@/components/ShowEmployee"));

var _AddEmployee = _interopRequireDefault(require("@/components/AddEmployee"));

var _EditEmployee = _interopRequireDefault(require("@/components/EditEmployee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'EmployeeList',
    component: _EmployeeList["default"]
  }, {
    path: '/show-employee/:id',
    name: 'ShowEmployee',
    component: _ShowEmployee["default"]
  }, {
    path: '/add-employee',
    name: 'AddEmployee',
    component: _AddEmployee["default"]
  }, {
    path: '/edit-employee/:id',
    name: 'EditEmployee',
    component: _EditEmployee["default"]
  }]
});

exports["default"] = _default;