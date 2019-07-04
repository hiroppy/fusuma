(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
/* unused harmony export getValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return listenCanvasEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emitCanvasEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(475);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(385);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var _assets_style_canvas_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(399);
/* harmony import */ var _assets_style_canvas_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_style_canvas_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(424);
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var colors=['#444','#3498db','#ff874d','#67a2a0'];var beforeData=null;var timerId=null;var Canvas=Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function(_ref){var toolbar=_ref.toolbar,disabled=_ref.disabled,hideGrid=_ref.hideGrid;var canvasRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(colors[0]),_useState2=_slicedToArray(_useState,2),color=_useState2[0],changeCurrentColor=_useState2[1];var changeColor=function changeColor(){// rotate array
colors=colors.concat(colors.splice(0,1));changeCurrentColor(colors[0]);};var setData=function setData(){window.localStorage.setItem('fusumaCanvasCoordinate',canvasRef.current.getSaveData());};var getData=function getData(){var data=window.localStorage.getItem('fusumaCanvasCoordinate');if(beforeData!==data){canvasRef.current.loadSaveData(data,true);beforeData=data;}};var undo=function undo(){canvasRef.current.undo();};var clear=function clear(){canvasRef.current.clear();};Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){if(toolbar){timerId=setInterval(setData,1000);}else{timerId=setInterval(getData,1000);}return function(){if(timerId){clearInterval(timerId);}};},[]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,toolbar&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"fusuma-canvas-toolbar"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[/* MdDelete */ "b"],{onClick:clear,size:"32"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[/* FaUndo */ "m"],{onClick:undo}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{background:color},onClick:changeColor,className:"fusuma-canvas-toolbar-color"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{ref:canvasRef,className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:color,disabled:disabled,hideGrid:hideGrid,lazyRadius:0,brushRadius:8/* TODO: become an option */}));});function getValue(){return JSON.parse(window.localStorage.getItem('fusumaCanvasEvent'));}function listenCanvasEvent(cb){window.addEventListener('storage',function(e){if(e.key==='fusumaCanvasEvent'){cb(JSON.parse(e.newValue));}});}function emitCanvasEvent(event){window.localStorage.setItem('fusumaCanvasEvent',JSON.stringify(event));}

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(400);

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

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebRTC; });
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var WebRTC=/*#__PURE__*/function(){function WebRTC(){var _this=this;_classCallCheck(this,WebRTC);_defineProperty(this,"setupRecording",function(){navigator.mediaDevices.getUserMedia({audio:true,video:false}).then(_this.handlerRecording);});_defineProperty(this,"handlerRecording",function(stream){var recordedChunks=[];_this.stream=stream;_this.mediaRecorder=new MediaRecorder(stream,{});_this.mediaRecorder.addEventListener('dataavailable',function(e){if(e.data.size>0){recordedChunks.push(e.data);}});_this.mediaRecorder.addEventListener('stop',function(){_this.finishedProcess=true;_this.url=URL.createObjectURL(new Blob(recordedChunks,{type:'audio/webm'}));});});_defineProperty(this,"startRecording",function(){_this.mediaRecorder.start();_this.finishedProcess=false;_this.url=null;});_defineProperty(this,"stopRecording",function(){return new Promise(function(resolve){_this.mediaRecorder.stop();var interval=setInterval(function(){if(_this.finishedProcess){clearInterval(interval);resolve(_this.url);}},100);});});_defineProperty(this,"disposeRecording",function(){_this.mediaRecorder.stream.getTracks().forEach(function(track){return track.stop();});_this.finishedProcess=false;_this.url=null;});if(!navigator.mediaDevices.getUserMedia){throw new Error('Not supported');}this.url=null;this.finishedProcess=false;}_createClass(WebRTC,[{key:"startCapturing",value:function(){var _startCapturing=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(displayMediaOptions){var captureStream;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:captureStream=null;_context.prev=1;_context.next=4;return navigator.mediaDevices.getDisplayMedia(displayMediaOptions);case 4:captureStream=_context.sent;_context.next=10;break;case 7:_context.prev=7;_context.t0=_context["catch"](1);console.error(_context.t0);case 10:return _context.abrupt("return",captureStream);case 11:case"end":return _context.stop();}}},_callee,null,[[1,7]]);}));function startCapturing(_x){return _startCapturing.apply(this,arguments);}return startCapturing;}()},{key:"stopCapturing",value:function stopCapturing(elem){var tracks=elem.srcObject.getTracks();tracks.forEach(function(track){return track.stop();});elem.srcObject=null;}}]);return WebRTC;}();

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(635);

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

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/webpack/node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./packages/client/src/components/ContentView/Base.js + 1 modules
var Base = __webpack_require__(92);

// CONCATENATED MODULE: ./packages/client/src/presentationMode/Receiver.js
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var Receiver=/*#__PURE__*/function(){function Receiver(){_classCallCheck(this,Receiver);this.apiType=navigator.presentation&&navigator.presentation.receiver?'presentation':'localStorage';if(this.apiType==='presentation')this.setUp();}_createClass(Receiver,[{key:"registerEvent",value:function registerEvent(name,cb){navigator.presentation.receiver.connectionList.then(function(list){list.connections.forEach(function(connection){connection.addEventListener(name,cb);});list.addEventListener('connectionavailable',function(event){cb(event.connection);});});}},{key:"setUp",value:function setUp(){this.registerEvent('close',function(e){console.log(e);});}},{key:"onChangePage",value:function onChangePage(cb){if(this.apiType==='presentation'){this.registerEvent('message',function(e){var page=JSON.parse(e.data).page;cb(page);});}else{window.addEventListener('storage',function(e){if(e.key==='page'){var page=JSON.parse(e.newValue).page;cb(page);}});}}}]);return Receiver;}();
// EXTERNAL MODULE: ./packages/client/src/components/Canvas.js
var Canvas = __webpack_require__(398);

// EXTERNAL MODULE: ./packages/client/src/utils/webrtc.js
var webrtc = __webpack_require__(416);

// EXTERNAL MODULE: ./packages/client/assets/style/view.css
var view = __webpack_require__(634);

// CONCATENATED MODULE: ./packages/client/src/components/ContentView/View.js
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/*
 * View for Presentation mode
 */var presentationReceiver=null;var View_webrtc=null;var currentVideoTag=null;var currentLayer=null;var View=Object(react["memo"])(function(_ref){var slides=_ref.slides,hash=_ref.hash;// need to declare here
if(!presentationReceiver){presentationReceiver=new Receiver();presentationReceiver.onChangePage(function(pageNum){if(window.slide){window.slide.goToSlide(pageNum);// stop capturing
if(View_webrtc&&currentVideoTag){stopCapturing(currentVideoTag);}}});}var _useState=Object(react["useState"])(false),_useState2=_slicedToArray(_useState,2),usedCanvas=_useState2[0],changeCanvasState=_useState2[1];var startCapturing=/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(View_webrtc){_context.next=7;break;}View_webrtc=new webrtc["a" /* WebRTC */]();_context.next=4;return View_webrtc.startCapturing({video:{displaySurface:'monitor'}});case 4:return _context.abrupt("return",_context.sent);case 7:throw new Error('Capturing has already run.');case 8:case"end":return _context.stop();}}},_callee);}));return function startCapturing(){return _ref2.apply(this,arguments);};}();var stopCapturing=function stopCapturing(elem){if(View_webrtc&&elem){elem.pause();View_webrtc.stopCapturing(elem);currentLayer.style.opacity=1;View_webrtc=null;currentLayer=null;currentVideoTag=null;}};var listenVideoTags=/*#__PURE__*/function(){var _ref3=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(id){var videoContainers;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:videoContainers=document.querySelectorAll('#webslides .fusuma-screen');if(!(videoContainers===null)){_context3.next=3;break;}return _context3.abrupt("return");case 3:// need to active the view screen if want to capture the screen
videoContainers.forEach(function(container){var _container$children=_slicedToArray(container.children,2),overlay=_container$children[0],video=_container$children[1];video.addEventListener('click',/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){var stream;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(View_webrtc){_context2.next=10;break;}_context2.next=3;return startCapturing();case 3:stream=_context2.sent;video.srcObject=stream;video.play();currentVideoTag=video;currentLayer=overlay;currentLayer.style.opacity=0;// Click on browser UI stop sharing button
//https://stackoverflow.com/questions/25141080/how-to-listen-for-stop-sharing-click-in-chrome-desktopcapture-api
stream.getVideoTracks()[0].onended=function(){stopCapturing(video);};case 10:case"end":return _context2.stop();}}},_callee2);})));});case 4:case"end":return _context3.stop();}}},_callee3);}));return function listenVideoTags(_x){return _ref3.apply(this,arguments);};}();var listenCanvas=function listenCanvas(){Object(Canvas["c" /* listenCanvasEvent */])(function(e){changeCanvasState(e.status==='start');});};Object(react["useEffect"])(function(){listenVideoTags();// listenCanvas();
// changeCanvasState(getValue().status === 'start');
},[]);console.log('inininin2');return react_default.a.createElement("div",{className:"fusuma-presenter-view"},usedCanvas&&react_default.a.createElement(Canvas["a" /* Canvas */],{disabled:true,hideGrid:true}),react_default.a.createElement(Base["a" /* Base */],{slides:slides,hash:hash,showIndex:false}));});/* harmony default export */ var ContentView_View = __webpack_exports__["default"] = (View);

/***/ })

}]);