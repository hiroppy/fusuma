(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listenCanvasEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emitCanvasEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(442);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(352);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95);
/* harmony import */ var _assets_style_canvas_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(366);
/* harmony import */ var _assets_style_canvas_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_style_canvas_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(391);
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var colors=['#444','#3498db','#ff874d','#67a2a0'];var beforeData=null;var timerId=null;var Canvas=Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function(_ref){var toolbar=_ref.toolbar,disabled=_ref.disabled,hideGrid=_ref.hideGrid;var canvasRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(colors[0]),_useState2=_slicedToArray(_useState,2),color=_useState2[0],changeCurrentColor=_useState2[1];var changeColor=function changeColor(){// rotate array
colors=colors.concat(colors.splice(0,1));changeCurrentColor(colors[0]);};var setData=function setData(){window.localStorage.setItem('fusumaCanvasCoordinate',canvasRef.current.getSaveData());};var getData=function getData(){var data=window.localStorage.getItem('fusumaCanvasCoordinate');if(beforeData!==data){canvasRef.current.loadSaveData(data,true);beforeData=data;}};var undo=function undo(){canvasRef.current.undo();};var clear=function clear(){canvasRef.current.clear();};Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){if(toolbar){timerId=setInterval(setData,1000);}else{timerId=setInterval(getData,1000);}return function(){if(timerId){clearInterval(timerId);}};},[]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,toolbar&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"fusuma-canvas-toolbar"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[/* MdDelete */ "b"],{onClick:clear,size:"32"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[/* FaUndo */ "m"],{onClick:undo}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{background:color},onClick:changeColor,className:"fusuma-canvas-toolbar-color"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{ref:canvasRef,className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:color,disabled:disabled,hideGrid:hideGrid,lazyRadius:0,brushRadius:8/* TODO: become an option */}));});function getValue(){return JSON.parse(window.localStorage.getItem('fusumaCanvasEvent'));}function listenCanvasEvent(cb){window.addEventListener('storage',function(e){if(e.key==='fusumaCanvasEvent'){cb(JSON.parse(e.newValue));}});}function emitCanvasEvent(event){window.localStorage.setItem('fusumaCanvasEvent',JSON.stringify(event));}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(367);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(63)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebRTC; });
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var WebRTC=/*#__PURE__*/function(){function WebRTC(){var _this=this;_classCallCheck(this,WebRTC);_defineProperty(this,"setupRecording",function(){navigator.mediaDevices.getUserMedia({audio:true,video:false}).then(_this.handlerRecording);});_defineProperty(this,"handlerRecording",function(stream){var recordedChunks=[];_this.stream=stream;_this.mediaRecorder=new MediaRecorder(stream,{});_this.mediaRecorder.addEventListener('dataavailable',function(e){if(e.data.size>0){recordedChunks.push(e.data);}});_this.mediaRecorder.addEventListener('stop',function(){_this.finishedProcess=true;_this.url=URL.createObjectURL(new Blob(recordedChunks,{type:'audio/webm'}));});});_defineProperty(this,"startRecording",function(){_this.mediaRecorder.start();_this.finishedProcess=false;_this.url=null;});_defineProperty(this,"stopRecording",function(){return new Promise(function(resolve){_this.mediaRecorder.stop();var interval=setInterval(function(){if(_this.finishedProcess){clearInterval(interval);resolve(_this.url);}},100);});});_defineProperty(this,"disposeRecording",function(){_this.mediaRecorder.stream.getTracks().forEach(function(track){return track.stop();});_this.finishedProcess=false;_this.url=null;});if(!navigator.mediaDevices.getUserMedia){throw new Error('Not supported');}this.url=null;this.finishedProcess=false;}_createClass(WebRTC,[{key:"startCapturing",value:function(){var _startCapturing=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(displayMediaOptions){var captureStream;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:captureStream=null;_context.prev=1;_context.next=4;return navigator.mediaDevices.getDisplayMedia(displayMediaOptions);case 4:captureStream=_context.sent;_context.next=10;break;case 7:_context.prev=7;_context.t0=_context["catch"](1);console.error(_context.t0);case 10:return _context.abrupt("return",captureStream);case 11:case"end":return _context.stop();}}},_callee,null,[[1,7]]);}));function startCapturing(_x){return _startCapturing.apply(this,arguments);}return startCapturing;}()},{key:"stopCapturing",value:function stopCapturing(elem){var tracks=elem.srcObject.getTracks();tracks.forEach(function(track){return track.stop();});elem.srcObject=null;}}]);return WebRTC;}();

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(617);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(63)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/webpack/node_modules/react/index.js
var react = __webpack_require__(3);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./packages/client/node_modules/react-modal/lib/index.js
var lib = __webpack_require__(603);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./packages/client/node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(352);

// EXTERNAL MODULE: ./packages/client/node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(95);

// CONCATENATED MODULE: ./packages/client/src/presentationMode/Controller.js
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var Controller=/*#__PURE__*/function(){function Controller(){_classCallCheck(this,Controller);this.receiverQuery='?presenter=view';this.apiType=typeof window.PresentationRequest==='function'?'presentation':'localStorage';this.windowId=null;}_createClass(Controller,[{key:"openView",value:function openView(){var _this=this;return new Promise(function(resolve,reject){if(_this.apiType==='presentation'){_this.presentationRequest=new PresentationRequest([_this.receiverQuery]);navigator.presentation.defaultRequest=_this.presentationRequest;_this.presentationRequest.addEventListener('connectionavailable',function(e){_this.presentationConnection=e.connection;resolve(e.connection.id);});_this.presentationRequest.start().catch(function(err){return reject(err);});}else{_this.windowId=window.open(_this.receiverQuery,'_blank','width=800,height=600');resolve();}});}},{key:"changePage",value:function changePage(pageNum){var data=JSON.stringify({date:Date.now(),page:pageNum});if(this.apiType==='presentation'&&this.presentationConnection){this.presentationConnection.send(data);}if(this.apiType==='localStorage'){window.localStorage.setItem('page',data);}}},{key:"reconnect",value:function(){var _reconnect=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(id){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(this.apiType==='presentation')){_context.next=2;break;}return _context.abrupt("return",this.presentationRequest.reconnect(id));case 2:return _context.abrupt("return",Promise.resolve());case 3:case"end":return _context.stop();}}},_callee,this);}));function reconnect(_x){return _reconnect.apply(this,arguments);}return reconnect;}()},{key:"terminate",value:function terminate(){if(this.apiType==='presentation'&&this.presentationConnection){this.presentationConnection.terminate();this.presentationConnection.close();this.presentationConnection=null;}else if(this.windowId){this.windowId.close();this.windowId=null;}}}]);return Controller;}();
// EXTERNAL MODULE: ./packages/client/src/components/Canvas.js
var Canvas = __webpack_require__(365);

// CONCATENATED MODULE: ./packages/client/src/utils/formatTime.js
function formatTime(time){// https://stackoverflow.com/questions/19700283/how-to-convert-time-milliseconds-to-hours-min-sec-format-in-javascript
var milliseconds=parseInt(time%1000/100);var seconds=Math.floor(time/1000%60).toString().padStart(2,'0');var minutes=Math.floor(time/(1000*60)%60).toString().padStart(2,'0');var hours=Math.floor(time/(1000*60*60)%24).toString().padStart(2,'0');return"".concat(hours,":").concat(minutes,":").concat(seconds);}
// CONCATENATED MODULE: ./packages/client/src/components/Timer.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var current=0;var timerId=null;var Timer=Object(react["memo"])(function(_ref){var start=_ref.start,stop=_ref.stop,reset=_ref.reset,disabledStart=_ref.disabledStart,disabledStop=_ref.disabledStop,disabledReset=_ref.disabledReset;var _useState=Object(react["useState"])(true),_useState2=_slicedToArray(_useState,2),isStop=_useState2[0],changeTimerState=_useState2[1];var _useState3=Object(react["useState"])('00:00:00'),_useState4=_slicedToArray(_useState3,2),currentTimeStr=_useState4[0],updateCurrentTimerStr=_useState4[1];var _update=function _update(){current+=1000;updateCurrentTimerStr(formatTime(current));};var _start=function _start(){// it doesn't have to be accurate :)
timerId=setInterval(function(){return _update();},1000);changeTimerState(false);start();};var _stop=function _stop(){clearInterval(timerId);changeTimerState(true);timerId=null;stop();};var _reset=function _reset(){if(timerId){stop();}current=0;updateCurrentTimerStr('00:00:00');reset();};Object(react["useEffect"])(function(){return function(){if(timerId){clearInterval(timerId);}};},[]);return react_default.a.createElement("div",{className:"host-timer"},react_default.a.createElement(index_esm["i" /* FaRegHourglass */],{onClick:_reset,className:disabledReset?'disabled':undefined}),isStop?react_default.a.createElement(index_esm["h" /* FaPlay */],{onClick:_start,className:disabledStart?'disabled':undefined}):react_default.a.createElement(index_esm["j" /* FaStop */],{onClick:_stop,className:disabledStop?'disabled':undefined}),react_default.a.createElement("span",null,currentTimeStr));});
// EXTERNAL MODULE: ./packages/client/node_modules/react-event-timeline/dist/index.js
var dist = __webpack_require__(612);

// CONCATENATED MODULE: ./packages/client/src/components/Timeline.js
function Timeline_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function Timeline_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){Timeline_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){Timeline_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var Timeline_Timeline=function Timeline(_ref){var items=_ref.items,url=_ref.url;var audioRef=Object(react["useRef"])();var calcIndex=function calcIndex(baseTime){var index=0;for(var i=0;i<items.length;i++){var time=items[i].time;if(baseTime<=time){index=i;break;}}return index;};Object(react["useEffect"])(function(){if(audioRef.current){var audio=audioRef.current;// Chrome bug: https://bugs.chromium.org/p/chromium/issues/detail?id=642012
var getBlobDuration=/*#__PURE__*/function(){var _ref2=Timeline_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",new Promise(function(resolve){audio.addEventListener('loadedmetadata',function(){if(audio.duration===Infinity){audio.currentTime=Number.MAX_SAFE_INTEGER;var listener=function listener(){audio.currentTime=0;audio.removeEventListener('timeupdate',listener);resolve();};audio.addEventListener('timeupdate',listener);}});}));case 1:case"end":return _context.stop();}}},_callee);}));return function getBlobDuration(){return _ref2.apply(this,arguments);};}();// react-event-timeline doesn't have id name
var elems=document.querySelectorAll('.ReactModalPortal section > div');getBlobDuration();{// Audio will somehow jump to the end on the first run
// so, currentTime must be reset in the first playing.
// It doesn't seem good even if it initializes in getBlobDuration
var flag=false;audio.addEventListener('playing',function(){if(!flag){audio.currentTime=0;flag=true;}});}audio.addEventListener('timeupdate',function(){var index=calcIndex(audio.currentTime*1000);// first index is unnecessary
// firefox doesn't work
elems[index].scrollIntoView();});}},[]);return react_default.a.createElement("div",{className:"host-timeline-container"},url&&react_default.a.createElement("div",{className:"host-timeline-audio"},react_default.a.createElement("audio",{src:url,controls:true,ref:audioRef})),react_default.a.createElement("div",{className:"host-timeline-body"},react_default.a.createElement(dist["Timeline"],null,items.map(function(_ref3,i){var title=_ref3.title,time=_ref3.time,timeStr=_ref3.timeStr,Slide=_ref3.Slide,color=_ref3.color,Icon=_ref3.Icon;return react_default.a.createElement(dist["TimelineEvent"],{key:time,title:title,createdAt:timeStr,iconColor:color,icon:Icon},Slide&&react_default.a.createElement(Slide,null));}))));};
// EXTERNAL MODULE: ./packages/client/src/utils/webrtc.js
var webrtc = __webpack_require__(383);

// EXTERNAL MODULE: ./packages/client/assets/style/host.css
var host = __webpack_require__(616);

// CONCATENATED MODULE: ./packages/client/src/components/ContentView/Host.js
function Host_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function Host_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){Host_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){Host_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function Host_slicedToArray(arr,i){return Host_arrayWithHoles(arr)||Host_iterableToArrayLimit(arr,i)||Host_nonIterableRest();}function Host_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function Host_iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function Host_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/**
 * Host for Presentation mode
 */// common and host
lib_default.a.setAppElement('#root');var Host_Iframe=function Iframe(_ref){var slideUrl=_ref.slideUrl,slideIndex=_ref.slideIndex;return react_default.a.createElement("iframe",{src:"".concat(slideUrl.replace(/slide=(\d?)/,"slide=".concat(slideIndex))),width:"100%",height:"100%"});};var Host_webrtc=null;var Host_slideUrl=null;var presentationController=null;var presentationApiId=null;var recordedTimeline=[];var recordedStartedTime=0;var audioUrl=null;var Host=Object(react["memo"])(function(_ref2){var slides=_ref2.slides,currentIndex=_ref2.currentIndex,terminate=_ref2.terminate,onChangeSlideIndex=_ref2.onChangeSlideIndex;if(!presentationController){var _ref3=new URL(window.location),origin=_ref3.origin,pathname=_ref3.pathname;Host_slideUrl="".concat(origin,"/").concat(pathname,"?sidebar=false&isLive=false#slide=");presentationController=new Controller();}var _useState=Object(react["useState"])('prepare'),_useState2=Host_slicedToArray(_useState,2),status=_useState2[0],updateStatus=_useState2[1];// prepare, start, stop
var _useState3=Object(react["useState"])(false),_useState4=Host_slicedToArray(_useState3,2),usedAudio=_useState4[0],updateAudioStatus=_useState4[1];var _useState5=Object(react["useState"])(false),_useState6=Host_slicedToArray(_useState5,2),isOpenTimeline=_useState6[0],updateOpenTimelineStatus=_useState6[1];var _useState7=Object(react["useState"])(true),_useState8=Host_slicedToArray(_useState7,2),isEmptyRecordedTimeline=_useState8[0],updateEmptyRecordedTimelineStatus=_useState8[1];var _useState9=Object(react["useState"])(false),_useState10=Host_slicedToArray(_useState9,2),isOpenZoomSlide=_useState10[0],updateOpenZoomSlideStatus=_useState10[1];var _terminate=function _terminate(){try{terminate();if(presentationController){presentationController.terminate();presentationController=null;}}catch(e){console.error(e);}};var changeCurrentSlide=function changeCurrentSlide(num){if(status==='start'){var time=new Date().getTime()-recordedStartedTime;var prevItem=recordedTimeline.slice(-1)[0];recordedTimeline.push({slideNum:num+1,time:time,timeStr:"".concat(formatTime(time)," (+").concat(formatTime(time-prevItem.time),")"),event:'changed',title:"Moved to the ".concat(num+1," slide from the ").concat(num," slide."),Slide:slides[num].slide,color:'#3498db',Icon:react_default.a.createElement(index_esm["b" /* FaCaretRight */],{size:"22"})});}onChangeSlideIndex(num);presentationController.changePage(num);};var start=function start(){if(recordedTimeline.length===0){recordedStartedTime=new Date().getTime();}var time=recordedTimeline.length===0?0:new Date().getTime()-recordedStartedTime;recordedTimeline.push({slideNum:currentIndex+1,time:time,timeStr:formatTime(time),event:'started',title:"Started from the ".concat(currentIndex+1," slide."),Slide:slides[currentIndex].slide,color:'#6fba1c',Icon:react_default.a.createElement(index_esm["a" /* FaCaretDown */],null)});if(usedAudio){Host_webrtc.startRecording();audioUrl=null;}updateEmptyRecordedTimelineStatus(false);updateStatus('start');};var stop=/*#__PURE__*/function(){var _ref4=Host_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var time;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:time=new Date().getTime()-recordedStartedTime;recordedTimeline.push({slideNum:currentIndex+1,time:time,timeStr:formatTime(time),event:'stopped',title:"Stopped at the ".concat(currentIndex+1," slide."),color:'#e9546b',Icon:react_default.a.createElement(index_esm["c" /* FaCaretUp */],null)});if(!usedAudio){_context.next=6;break;}_context.next=5;return Host_webrtc.stopRecording();case 5:audioUrl=_context.sent;case 6:updateStatus('stop');case 7:case"end":return _context.stop();}}},_callee);}));return function stop(){return _ref4.apply(this,arguments);};}();var reset=function reset(){audioUrl=null;recordedTimeline=[];recordedStartedTime=0;updateStatus('prepare');updateEmptyRecordedTimelineStatus(true);};var openTimeline=function openTimeline(){updateOpenTimelineStatus(true);};var closeTimeline=function closeTimeline(){updateOpenTimelineStatus(false);};var setupRecording=function setupRecording(){if(!Host_webrtc){try{Host_webrtc=new webrtc["a" /* WebRTC */]();Host_webrtc.setupRecording();updateAudioStatus(true);}catch(e){alert(e);}}};var disposeRecording=function disposeRecording(){if(Host_webrtc){Host_webrtc.disposeRecording();Host_webrtc=null;}updateAudioStatus(false);};var openZoomSlide=function openZoomSlide(){updateOpenZoomSlideStatus(true);Object(Canvas["b" /* emitCanvasEvent */])({status:'start'});};var closeZoomSlide=function closeZoomSlide(){updateOpenZoomSlideStatus(false);Object(Canvas["b" /* emitCanvasEvent */])({status:'stop'});};Object(react["useEffect"])(function(){function openView(){return _openView.apply(this,arguments);}function _openView(){_openView=Host_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;if(presentationController){_context2.next=3;break;}throw new Error('Not found PresenterController.');case 3:_context2.next=5;return presentationController.openView();case 5:presentationApiId=_context2.sent;_context2.next=11;break;case 8:_context2.prev=8;_context2.t0=_context2["catch"](0);console.error(_context2.t0);case 11:case"end":return _context2.stop();}}},_callee2,null,[[0,8]]);}));return _openView.apply(this,arguments);}openView();return function(){document.onkeyup=null;if(presentationController){_terminate();}disposeRecording();};},[]);Object(react["useEffect"])(function(){document.onkeyup=function(e){if(e.key==='ArrowLeft'){changeCurrentSlide(Math.max(0,currentIndex-1));}else if(e.key==='ArrowRight'){changeCurrentSlide(Math.min(slides.length-1,currentIndex+1));}};});// prohibit below actions
//   usedAudio && status === 'start'
//     modal, reset
//   usedAudio && status === 'stop' && !isEmptyRecordedTimeline
//     stop or start
//   usedAudio && status === 'start'
//     mic
return react_default.a.createElement("div",{className:"host-container"},react_default.a.createElement(lib_default.a,{isOpen:isOpenTimeline,onRequestClose:closeTimeline},react_default.a.createElement(Timeline_Timeline,{items:recordedTimeline,url:audioUrl})),react_default.a.createElement("div",{className:"host-left-box"},react_default.a.createElement("div",{className:"host-note"},slides&&react_default.a.createElement("pre",{dangerouslySetInnerHTML:{__html:slides[currentIndex].fusumaProps.note}}))),react_default.a.createElement("div",{className:"host-right-box"},react_default.a.createElement("div",{className:"host-slide-layer"},react_default.a.createElement("h2",null,"Current"),react_default.a.createElement(md_index_esm["g" /* MdZoomOutMap */],{size:28,onClick:openZoomSlide}),react_default.a.createElement(Host_Iframe,{slideUrl:Host_slideUrl,slideIndex:currentIndex+1})),react_default.a.createElement(lib_default.a,{isOpen:isOpenZoomSlide,onRequestClose:closeZoomSlide},isOpenZoomSlide&&react_default.a.createElement("div",{className:"host-slide-canvas"},react_default.a.createElement(Canvas["a" /* Canvas */],{toolbar:true,hideGrid:true}),react_default.a.createElement(Host_Iframe,{slideUrl:Host_slideUrl,slideIndex:currentIndex+1}))),react_default.a.createElement("div",{className:"host-slide-layer"},react_default.a.createElement("h2",null,"Next"),react_default.a.createElement(Host_Iframe,{slideUrl:Host_slideUrl,slideIndex:currentIndex+2}))),react_default.a.createElement("div",{className:"host-bottom-box"},react_default.a.createElement(index_esm["k" /* FaTimes */],{onClick:_terminate,className:"terminate-button"}),react_default.a.createElement("div",{className:"host-bottom-box-info"},react_default.a.createElement(Timer,{start:start,stop:stop,reset:reset,disabledStart:status==='stop'&&usedAudio&&!start.isEmptyRecordedTimeline,disabledStop:status==='stop'&&usedAudio&&!start.isEmptyRecordedTimeline,disabledReset:status==='start'&&usedAudio}),react_default.a.createElement("span",{className:"current-slide-num"},"".concat(currentIndex+1).padStart(2,'0')," / ","".concat(slides.length).padStart(2,'0')),react_default.a.createElement(index_esm["e" /* FaHistory */],{onClick:openTimeline,size:18,className:status==='start'&&usedAudio||isEmptyRecordedTimeline?'disabled':undefined}),usedAudio?react_default.a.createElement(index_esm["f" /* FaMicrophoneAlt */],{onClick:disposeRecording,className:status==='start'||!isEmptyRecordedTimeline?'disabled':undefined,size:20,color:"#6fba1c"}):react_default.a.createElement(index_esm["g" /* FaMicrophoneAltSlash */],{onClick:setupRecording,className:status==='start'||!isEmptyRecordedTimeline?'disabled':undefined,size:20}))));});/* harmony default export */ var ContentView_Host = __webpack_exports__["default"] = (Host);

/***/ })

}]);