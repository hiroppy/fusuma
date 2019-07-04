(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(477);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(51)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsList", function() { return CommentsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(671);
/* harmony import */ var intl_relativeformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(672);
/* harmony import */ var _assets_style_commentsList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(476);
/* harmony import */ var _assets_style_commentsList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_style_commentsList_css__WEBPACK_IMPORTED_MODULE_3__);
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var Ul=react_pose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ul({});var Li=react_pose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].li({enter:{opacity:1},exit:{opacity:0}});var rf=new intl_relativeformat__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]();var ws;var CommentsList=Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),_useState2=_slicedToArray(_useState,2),comments=_useState2[0],updateComments=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){if(!ws){ws=new WebSocket("ws://".concat(window.location.hostname,":").concat(undefined));ws.onmessage=function(_ref){var data=_ref.data;var fetchedComments=JSON.parse(data);if(Array.isArray(fetchedComments)&&fetchedComments.length!==0){if(fetchedComments[0].message==='Rate limit exceeded'){// TODO: implement
}else if(fetchedComments[0].message==='hello:)'){// TODO: implement
}else{var convertedComments=fetchedComments.reverse().map(function(c){return _objectSpread({},c,{createdAt:rf.format(c.createdAt)});});// https://github.com/facebook/react/issues/15041#issuecomment-470309576
updateComments(function(comments){return comments.concat(convertedComments);});}}};}},[]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"comments-list"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"comments-list-title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,undefined?undefined:'Private Mode'),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"comments-list-total"},comments.length," comments")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ul,{className:"comments-list-ul"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,comments.map(function(_ref2){var id=_ref2.id,avatar=_ref2.avatar,text=_ref2.text,screenName=_ref2.screenName,createdAt=_ref2.createdAt;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Li,{key:id,className:"comments-list-li"},avatar&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:avatar,className:"comments-list-li-avatar"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"comments-list-li-body"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"comments-list-li-body-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"comments-list-li-screen-name"},"@",screenName),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"comments-list-li-time-ago"},createdAt)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"comments-list-li-comment"},text)));}))));});

/***/ })

}]);