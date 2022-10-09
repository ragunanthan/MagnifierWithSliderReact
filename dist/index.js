"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i.apply(this,arguments)}function a(){return n.default.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"20px",width:"20px",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}function r(){return n.default.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"20px",width:"20px",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"}))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".magnifierAccordian{display:inline-block;position:relative;z-index:1}.magnifying-glass{background:#e5e5e5 no-repeat;border:solid #ebebeb;border-radius:50%;box-shadow:2px 2px 3px rgba(0,0,0,.3);z-index:1}.magnifying-content,.magnifying-glass{opacity:1;position:absolute;transition:all .5s linear}.magnifying-content{z-index:100}.magnifierButtonContainer{display:flex;justify-content:space-between}.magnifying-content .magnifierButtonContainer div,.magnifying-content p{backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background:hsla(0,0%,100%,.16);border:1px solid hsla(0,0%,100%,.3);border-radius:16px;box-shadow:0 4px 30px rgba(0,0,0,.1);color:#fff;padding:20px}.magnifying-content .magnifierButtonContainer div{padding:10px}.navigation{cursor:pointer;z-index:0}"),exports.Magnifier=function({src:t,width:l,height:o,className:d,zoomFactor:c,mgHeight:s,mgWidth:g,mgBorderWidth:f,contentView:u,...m}){const[p,h]=e.useState(0);return n.default.createElement("div",{className:`magnifierAccordian ${d}`,style:{width:l,height:o}},n.default.createElement("img",i({alt:"Magnifier glass",className:"magnifier-image",src:t,width:"100%",height:"100%"},m)),u.filter(((e,t)=>t===p)).map((({content:t,imagePositionStyle:i,contentPositionStyle:l,image:o},d)=>n.default.createElement(e.Fragment,{key:d},n.default.createElement("div",{className:"magnifying-glass circle ",style:{width:g,height:s,backgroundImage:`url("${o}")`,backgroundPosition:"10% 10%",backgroundSize:"100% 100%",borderWidth:f,zIndex:400,left:0,top:0,...i}}),n.default.createElement("div",{className:"magnifying-content  ",style:{width:"400px",height:"400px",zIndex:400,left:0,top:0,...l}},n.default.createElement("p",{onClick:()=>console.log("samw")}," ",t),n.default.createElement("div",{className:"magnifierButtonContainer"},0!==p&&n.default.createElement("div",{className:"navigation",onClick:()=>h(p-1)},n.default.createElement(a,null)),p!==u.length-1&&n.default.createElement("div",{className:"navigation",onClick:()=>h(p+1)},n.default.createElement(r,null))))))))};