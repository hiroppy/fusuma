(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{131:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(92),i=n.n(a),s=(n(325),n(326),n(132)),u=n.n(s);n(329);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return h});var h=function(e){function t(){var e,n,r,o,a,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=f(t).call(this),e=!r||"object"!==c(r)&&"function"!=typeof r?d(n):r,o=d(e),i=function(){e.mermaid&&e.mermaid.reload()},(a="reloadChart")in o?Object.defineProperty(o,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[a]=i,window.slide||setTimeout(function(){var t,n,r;window.slide=(t={showIndex:e.props.showIndex},n=t.showIndex,r=void 0!==n&&n,new window.WebSlides({loop:!0,showIndex:r,navigateOnScroll:!1})),window.slide.el.addEventListener("ws:slide-change",function(t){e.reloadChart(),e.props.onChangeSlideIndex&&e.props.onChangeSlideIndex(t.detail.currentSlide0)})},0),e}var r,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.a.Component),r=t,(a=[{key:"componentDidMount",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Promise.all([n.e(11),n.e(2)]).then(n.bind(null,642));case 3:t=e.sent,r=t.Mermaid,this.mermaid=new r,this.mermaid.init();case 7:i.a.highlightAll();case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){l(a,r,o,i,s,"next",e)}function s(e){l(a,r,o,i,s,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){i.a.highlightAll(),this.reloadChart()}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.hash!==e.hash||!window.slide}},{key:"render",value:function(){var e=this.props.slides;return o.a.createElement("article",{className:void 0,id:"webslides"},e.map(function(e,t){var n=e.slide,r=e.fusumaProps;return o.a.createElement("section",{key:t,className:u()("aligncenter",r.classes,r.sectionTitle?"section-title":void 0)},o.a.createElement(n,null))}))}}])&&p(r.prototype,a),s&&p(r,s),t}()},134:function(e,t,n){n(135),e.exports=n(337)},330:function(e,t,n){var r=n(331);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(63)(r,o);r.locals&&(e.exports=r.locals)},331:function(e,t,n){},332:function(e,t,n){var r=n(333);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(63)(r,o);r.locals&&(e.exports=r.locals)},333:function(e,t,n){},334:function(e,t,n){var r={"./0-title.md":335,"./01-chart.md":336};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=334},335:function(e,t,n){"use strict";n.r(t),n.d(t,"slides",function(){return u}),n.d(t,"fusumaProps",function(){return c}),n.d(t,"default",function(){return f});var r=n(2),o=n.n(r),a=n(3);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=[function(e){return Object(a.a)(o.a.Fragment,null,Object(a.a)("h2",null,"Advanced"))}],c=[{}],l={slides:u},p="wrapper";function f(e){var t=e.components,n=s(e,["components"]);return Object(a.a)(p,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h2",null,"Advanced"))}f.isMDXComponent=!0},336:function(e,t,n){"use strict";n.r(t),n.d(t,"slides",function(){return u}),n.d(t,"fusumaProps",function(){return c}),n.d(t,"default",function(){return f});var r=n(2),o=n.n(r),a=n(3);function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=[function(e){return Object(a.a)(o.a.Fragment,null,Object(a.a)("h2",null,"Chart"),Object(a.a)("br",null),Object(a.a)("div",{className:"mermaid",id:"mermaid-1","data-value":"graph TD;\nA--\x3eB;\nA--\x3eC;\nB--\x3eD;\nC--\x3eD;",style:{visibility:"hidden"}},"graph TD; A--\x3eB; A--\x3eC; B--\x3eD; C--\x3eD;"),Object(a.a)("p",null,Object(a.a)("a",s({parentName:"p"},{href:"https://github.com/knsv/mermaid"}),"https://github.com/knsv/mermaid")))},function(e){return Object(a.a)(o.a.Fragment,null,Object(a.a)("h3",null,"Markdown"),Object(a.a)("br",null),Object(a.a)("pre",null,Object(a.a)("code",s({parentName:"pre"},{className:"language-txt"}),"\\`\\`\\`chart\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n\\`\\`\\`\n")),Object(a.a)("br",null),Object(a.a)("h3",null,".fusumarc"),Object(a.a)("br",null),Object(a.a)("pre",null,Object(a.a)("code",s({parentName:"pre"},{className:"language-yml"}),"slide\n  chart: true  # the default is false\n")))}],c=[{},{}],l={slides:u},p="wrapper";function f(e){var t=e.components,n=i(e,["components"]);return Object(a.a)(p,s({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h2",null,"Chart"),Object(a.a)("br",null),Object(a.a)("pre",null,Object(a.a)("code",s({parentName:"pre"},{className:"language-chart"}),"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n")),Object(a.a)("p",null,Object(a.a)("a",s({parentName:"p"},{href:"https://github.com/knsv/mermaid"}),"https://github.com/knsv/mermaid")),Object(a.a)("hr",null),Object(a.a)("h3",null,"Markdown"),Object(a.a)("br",null),Object(a.a)("pre",null,Object(a.a)("code",s({parentName:"pre"},{className:"language-txt"}),"\\`\\`\\`chart\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n\\`\\`\\`\n")),Object(a.a)("br",null),Object(a.a)("h3",null,".fusumarc"),Object(a.a)("br",null),Object(a.a)("pre",null,Object(a.a)("code",s({parentName:"pre"},{className:"language-yml"}),"slide\n  chart: true  # the default is false\n")))}f.isMDXComponent=!0},337:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(96),i=n(95),s=n(131);function u(){return location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common"}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function f(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){f(a,r,o,i,s,"next",e)}function s(e){f(a,r,o,i,s,"throw",e)}i(void 0)})}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=h(t).call(this,e),n=!o||"object"!==c(o)&&"function"!=typeof o?b(r):o,y(b(n),"changeSidebarState",function(){var e="false"!==n.params.get("sidebar")&&"common"===n.mode;n.setState({isSidebar:e})}),y(b(n),"goTo",function(e){window.slide&&window.slide.goToSlide(e)}),y(b(n),"onSetSidebarOpen",function(e){var t=e.isOpen;n.state.isOpenSidebar!==t&&n.setState({isOpenSidebar:t})}),y(b(n),"onChangeSlideIndex",function(e){n.setState({currentIndex:e})}),y(b(n),"onRunPresentationMode",function(){window.slide=null,n.routeMode("host")}),y(b(n),"terminate",function(){window.slide=null,n.routeMode("common")});var a=new URL(window.location.href),i=a.hash.match(/^#slide=(.+?)$/);return i=null!==i?i[1]-1:0,n.state={isSidebar:!0,isOpenSidebar:!1,slides:[],contentsList:[],currentIndex:i,SidebarComponent:null,CommentsListComponent:null},n.params=a.searchParams,n.ContentComponent=null,n.isLive=n.params.get("isLive"),n.routeMode(),n}var r,a,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),r=t,a=[{key:"componentDidMount",value:function(){var e=d(regeneratorRuntime.mark(function e(){var r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.changeSidebarState(),r=t.createProps(this.props.slides),this.setState(p({},r)),!this.state.isSidebar){e.next=9;break}return e.next=6,Promise.all([n.e(0),n.e(12),n.e(3)]).then(n.bind(null,640));case 6:o=e.sent,a=o.SidebarComponent,this.setState({SidebarComponent:a});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setupLive",value:function(){var e=d(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(13),n.e(4)]).then(n.bind(null,641));case 2:t=e.sent,r=t.CommentsList,this.setState({CommentsListComponent:r});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"routeMode",value:function(){var e=d(regeneratorRuntime.mark(function e(t){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.mode?(this.mode=t||u(),this.changeSidebarState()):this.mode=t||u(),"common"!==this.mode){e.next=5;break}this.ContentComponent=s.a,e.next=17;break;case 5:if("view"!==this.mode){e.next=11;break}return e.next=8,Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,644));case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,Promise.all([n.e(0),n.e(1),n.e(14),n.e(6)]).then(n.bind(null,643));case 13:e.t0=e.sent;case 14:r=e.t0,o=r.default,this.ContentComponent=o;case 17:"host"===this.mode&&this.setState({isOpenSidebar:!1,CommentsListComponent:null});case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.state.isSidebar&&o.a.createElement(o.a.Fragment,null,this.state.SidebarComponent&&o.a.createElement(this.state.SidebarComponent,{goTo:this.goTo,isOpen:this.state.isOpenSidebar,terminate:this.terminate,contents:this.state.contentsList,onStateChange:this.onSetSidebarOpen,currentIndex:this.state.currentIndex,runPresentationMode:this.onRunPresentationMode}),o.a.createElement(i.f,{className:"btn-sidebar",onClick:function(){return e.onSetSidebarOpen({isOpen:!0})}})),this.ContentComponent&&o.a.createElement(this.ContentComponent,{hash:this.props.hash,slides:this.state.slides,terminate:this.terminate,currentIndex:this.state.currentIndex,onChangeSlideIndex:this.onChangeSlideIndex}),this.state.CommentsListComponent&&o.a.createElement(this.state.CommentsListComponent,null))}}],f=[{key:"getDerivedStateFromProps",value:function(e,t){}},{key:"createProps",value:function(e){var t=[],n=[],r={};return e.forEach(function(e){var r=e.slides,o=e.fusumaProps;t.push.apply(t,l(r)),n.push.apply(n,l(o))}),n.reduce(function(e,t,n){var r=t.sectionTitle;return r&&e.push({title:r,index:n+1}),e},r.contentsList=[]),r.slides=t.map(function(e,t){var a,i,s=n[t];return{slide:s.contents?(a={list:r.contentsList},i=a.list,function(){return o.a.createElement("div",{className:"toc size-70 aligncenter"},o.a.createElement("ol",null,i.map(function(e,t){var n=e.index,r=e.title;return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"#slide=".concat(n),title:r},o.a.createElement("span",{className:"chapter"},r),o.a.createElement("span",{className:"toc-page"},n)))})))}):e,fusumaProps:s}}),r}}],a&&m(r.prototype,a),f&&m(r,f),t}();function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(a.render)(o.a.createElement(O,{slides:e,hash:t}),document.getElementById("root"))}function w(e){return{id:(t=e).id,slides:t.keys().sort().map(function(e){return t(e)})};var t}var j;n(330),n(332);function x(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}(j=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g(w(n(334)).slides),e.next=6,n.e(9).then(n.bind(null,639));case 6:t=e.sent,(0,t.setTargetBlank)();case 9:case"end":return e.stop()}},e)}),function(){var e=this,t=arguments;return new Promise(function(n,r){var o=j.apply(e,t);function a(e){x(o,n,r,a,i,"next",e)}function i(e){x(o,n,r,a,i,"throw",e)}a(void 0)})})()}},[[134,8,10]],[0,12,3]]);