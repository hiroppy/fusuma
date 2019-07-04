(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTargetBlank", function() { return setTargetBlank; });
function setTargetBlank(){document.addEventListener('click',function(e){if(e.target.tagName==='A'){if(e.target.host===location.host||e.target.href==='')return;e.preventDefault();window.open(e.target.href,'_blank');}});}

/***/ })

}]);