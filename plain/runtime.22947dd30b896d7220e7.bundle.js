(()=>{"use strict";var e,t,r,n,o,a,i,l={},f={};function d(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return l[e].call(r.exports,r,r.exports,d),r.exports}d.m=l,e=[],d.O=(t,r,n,o)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,n,o]=e[f],i=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(d.O).every((e=>d.O[e](r[l])))?r.splice(l--,1):(i=!1,o<a&&(a=o));i&&(e.splice(f--,1),t=n())}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},d.F={},d.E=e=>{Object.keys(d.F).map((t=>{d.F[t](e)}))},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,d.d(o,a),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+"."+{4:"7fae1b1f7ba3feba32e6",326:"e2a07993bc22121e0156",362:"d6fd4b1e219a0ff4ce36",588:"3970288913079f4ef00b",601:"03dc42aac272121d7582",729:"f52dc5f2a37179bd5d7e",747:"2bbef579c2cfb3c807f4",844:"468c209ae0a83e04edf6"}[e]+".bundle.js",d.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"74522a444f0bd28ce130",588:"3970288913079f4ef00b",729:"f52dc5f2a37179bd5d7e",736:"8c052283e8c36e62621b",747:"2bbef579c2cfb3c807f4",844:"468c209ae0a83e04edf6"}[e]+".css"),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="plain:",d.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,l;if(void 0!==r)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var u=f[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var s=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/fusuma/plain/",a=e=>new Promise(((t,r)=>{var n=d.miniCssF(e),o=d.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=l,o.parentNode.removeChild(o),n(f)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),i={666:0},d.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{588:1,729:1,747:1,844:1}[e]&&t.push(i[e]=a(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={666:0};d.f.j=(t,r)=>{var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=o);var a=d.p+d.u(t),i=new Error;d.l(a,(r=>{if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},d.F.j=t=>{if(!d.o(e,t)||void 0===e[t]){e[t]=null;var r=document.createElement("link");d.nc&&r.setAttribute("nonce",d.nc),r.rel="prefetch",r.as="script",r.href=d.p+d.u(t),document.head.appendChild(r)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,l]=r,f=0;for(n in i)d.o(i,n)&&(d.m[n]=i[n]);for(l&&l(d),t&&t(r);f<a.length;f++)o=a[f],d.o(e,o)&&e[o]&&e[o][0](),e[a[f]]=0;d.O()},r=self.webpackChunkplain=self.webpackChunkplain||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d.O()})();