import e,{useState as t,Fragment as n}from"react";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i.apply(this,arguments)}function a({src:a,width:l,height:c,className:s,zoomFactor:d,mgHeight:g,mgWidth:m,mgBorderWidth:p,contentView:h,...f}){const[u,x]=t(0);return e.createElement("div",{className:`magnifierAccordian ${s}`,style:{width:l,height:c}},e.createElement("img",i({alt:"Magnifier glass",className:"magnifier-image",src:a,width:"100%",height:"100%"},f)),h.filter(((e,t)=>t===u)).map((({content:t,imagePositionStyle:i,contentPositionStyle:a,image:l},c)=>e.createElement(n,{key:c},e.createElement("div",{className:"magnifying-glass circle ",style:{width:m,height:g,backgroundImage:`url("${l}")`,backgroundPosition:"10% 10%",backgroundSize:"100% 100%",borderWidth:p,zIndex:400,left:0,top:0,...i}}),e.createElement("div",{className:"magnifying-content  ",style:{width:"400px",height:"400px",zIndex:400,left:0,top:0,...a}},e.createElement("p",{onClick:()=>console.log("samw")}," ",t),e.createElement("div",{className:"magnifierButtonContainer"},0!==u&&e.createElement("div",{className:"navigation",onClick:()=>x(u-1)},e.createElement(r,null)),u!==h.length-1&&e.createElement("div",{className:"navigation",onClick:()=>x(u+1)},e.createElement(o,null))))))))}function r(){return e.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"20px",width:"20px",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),e.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}function o(){return e.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"20px",width:"20px",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),e.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"}))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".magnifierAccordian{display:inline-block;position:relative;z-index:1}.magnifying-glass{background:#e5e5e5 no-repeat;border:solid #ebebeb;border-radius:50%;box-shadow:2px 2px 3px rgba(0,0,0,.3);z-index:1}.magnifying-content,.magnifying-glass{opacity:1;position:absolute;transition:all .5s linear}.magnifying-content{z-index:100}.magnifierButtonContainer{display:flex;justify-content:space-between}.magnifying-content .magnifierButtonContainer div,.magnifying-content p{backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background:hsla(0,0%,100%,.16);border:1px solid hsla(0,0%,100%,.3);border-radius:16px;box-shadow:0 4px 30px rgba(0,0,0,.1);color:#fff;padding:20px}.magnifying-content .magnifierButtonContainer div{padding:10px}.navigation{cursor:pointer;z-index:0}");export{a as Magnifier};