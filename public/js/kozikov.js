!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e,t){var n,r,l;for(r=e.className.split(" "),l=t.split(" "),n=0;n<l.length;n++)-1==r.indexOf(l[n])&&(e.className+=" "+l[n])}function r(e,t){var n,r,l;for(r=e.className.split(" "),l=t.split(" "),n=0;n<l.length;n++)for(;r.indexOf(l[n])>-1;)r.splice(r.indexOf(l[n]),1);e.className=r.join(" ")}!function(e){var t,l;t=document.getElementsByClassName("card"),"all"==e&&(e="");for(l=0;l<t.length;l++)r(t[l],"card-active"),t[l].className.indexOf(e)>-1&&n(t[l],"card-active")}("all");for(var l=document.getElementById("selection-btn").getElementsByClassName("selection-btn__item"),a=0;a<l.length;a++)l[a].addEventListener("click",function(){var e=document.getElementsByClassName("selection-btn__item--active");e[0].className=e[0].className.replace(" selection-btn__item--active",""),this.className+=" selection-btn__item--active"})}]);