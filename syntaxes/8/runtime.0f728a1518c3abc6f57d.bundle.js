(()=>{"use strict";var e,t,r,n,a,o={},i={};function l(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return o[e].call(t.exports,t,t.exports,l),t.exports}l.m=o,l.x=e=>{},l.F={},l.E=e=>{Object.keys(l.F).map((t=>{l.F[t](e)}))},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);l.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,l.d(a,o),a},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+"."+{49:"5e8a670be5952da87148",116:"0712e7f563a7dcda994c",119:"f6c1073e35d12cf462dc",163:"9b1752b91b51f946c419",337:"bb8a72441735645ba5de",446:"c0019e085e1a730a33a8",519:"2d0dfc29c1c729f64512",597:"30d12f96d9e05d942cac",744:"72376dfef41fb7ad715a"}[e]+".bundle.js",l.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{49:"5e8a670be5952da87148",116:"0712e7f563a7dcda994c",163:"9b1752b91b51f946c419",179:"257698bc0e187bcf5ae5",446:"c0019e085e1a730a33a8",736:"b6d935eac0ca78e9260c"}[e]+".css"),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},l.l=(e,t,n,a)=>{if(r[e])r[e].push(t);else{var o,i;if(void 0!==n)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")=="6:"+n){o=c;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack","6:"+n),o.src=e),r[e]=[t];var f=(t,n)=>{o.onerror=o.onload=null,clearTimeout(s);var a=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),t)return t(n)},s=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),i&&document.head.appendChild(o)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/fusuma/syntaxes/8/",n=e=>new Promise(((t,r)=>{var n=l.miniCssF(e),a=l.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===t)return i}})(n,a))return t();((e,t,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,a.parentNode.removeChild(a),n(d)}},a.href=t,document.head.appendChild(a)})(e,a,t,r)})),a={666:0},l.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{49:1,116:1,163:1,446:1}[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={666:0},t=[];l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>{n=e[t]=[r,a]}));r.push(n[2]=a);var o=l.p+l.u(t),i=new Error;l.l(o,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}},l.F.j=t=>{if(!l.o(e,t)||void 0===e[t]){e[t]=null;var r=document.createElement("link");l.nc&&r.setAttribute("nonce",l.nc),r.rel="prefetch",r.as="script",r.href=l.p+l.u(t),document.head.appendChild(r)}};var r=e=>{},n=(n,a)=>{for(var o,i,[d,u,c,f]=a,s=0,p=[];s<d.length;s++)i=d[s],l.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(o in u)l.o(u,o)&&(l.m[o]=u[o]);for(c&&c(l),n&&n(a);p.length;)p.shift()();return f&&t.push.apply(t,f),r()},a=self.webpackChunk_6=self.webpackChunk_6||[];function o(){for(var r,n=0;n<t.length;n++){for(var a=t[n],o=!0,i=1;i<a.length;i++){var d=a[i];0!==e[d]&&(o=!1)}o&&(t.splice(n--,1),r=l(l.s=a[0]))}return 0===t.length&&(l.x(),l.x=e=>{}),r}a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a));var i=l.x;l.x=()=>(l.x=i||(e=>{}),(r=o)())})();l.x()})();