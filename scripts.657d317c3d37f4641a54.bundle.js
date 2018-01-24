var Particles=function(t,e){"use strict";function i(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}var n,o={};return(n=function(){var t=this;t.defaults={responsive:null,selector:null,maxParticles:100,sizeVariations:3,showParticles:!0,speed:.5,color:"#000000",minDistance:120,connectParticles:!1},t.element=null,t.context=null,t.ratio=null,t.breakpoints=[],t.activeBreakpoint=null,t.breakpointSettings=[],t.originalSettings=null,t.storage=[],t.usingPolyfill=!1}).prototype.init=function(t){var e=this;return e.options=e._extend(e.defaults,t),e.options.color=e._hex2rgb(t.color?t.color:e.defaults.color),e.originalSettings=JSON.parse(JSON.stringify(e.options)),e._animate=e._animate.bind(e),e._initializeCanvas(),e._initializeEvents(),e._registerBreakpoints(),e._checkResponsive(),e._initializeStorage(),e._animate(),e},n.prototype._initializeCanvas=function(){var i=this;if(!i.options.selector)return console.warn("particles.js: No selector specified! Check https://github.com/marcbruederlin/particles.js#options"),!1;i.element=e.querySelector(i.options.selector),i.context=i.element.getContext("2d"),i.ratio=(t.devicePixelRatio||1)/(i.context.webkitBackingStorePixelRatio||i.context.mozBackingStorePixelRatio||i.context.msBackingStorePixelRatio||i.context.oBackingStorePixelRatio||i.context.backingStorePixelRatio||1),i.element.width=i.element.offsetParent.clientWidth*i.ratio,i.element.height="BODY"===i.element.offsetParent.nodeName?t.innerHeight*i.ratio:i.element.offsetParent.clientHeight*i.ratio,i.element.style.width="100%",i.element.style.height="100%",i.context.scale(i.ratio,i.ratio)},n.prototype._initializeEvents=function(){t.addEventListener("resize",this._resize.bind(this),!1)},n.prototype._initializeStorage=function(){var t=this;t.storage=[];for(var e=t.options.maxParticles;e--;)t.storage.push(new o(t.context,t.options))},n.prototype._registerBreakpoints=function(){var t,e,i,n=this,o=n.options.responsive||null;if("object"==typeof o&&null!==o&&o.length){for(t in o)if(i=n.breakpoints.length-1,e=o[t].breakpoint,o.hasOwnProperty(t)){for(o[t].options.color&&(o[t].options.color=n._hex2rgb(o[t].options.color));i>=0;)n.breakpoints[i]&&n.breakpoints[i]===e&&n.breakpoints.splice(i,1),i--;n.breakpoints.push(e),n.breakpointSettings[e]=o[t].options}n.breakpoints.sort(function(t,e){return e-t})}},n.prototype._checkResponsive=function(){var e,i=this,n=!1,o=t.innerWidth;if(i.options.responsive&&i.options.responsive.length&&null!==i.options.responsive){for(e in n=null,i.breakpoints)i.breakpoints.hasOwnProperty(e)&&o<=i.breakpoints[e]&&(n=i.breakpoints[e]);null!==n?(i.activeBreakpoint=n,i.options=i._extend(i.options,i.breakpointSettings[n])):null!==i.activeBreakpoint&&(i.activeBreakpoint=null,n=null,i.options=i._extend(i.options,i.originalSettings))}},n.prototype._refresh=function(){this._initializeStorage(),this._draw()},n.prototype._resize=function(){var e=this;e.element.width=e.element.offsetParent.clientWidth*e.ratio,e.element.height="BODY"===e.element.offsetParent.nodeName?t.innerHeight*e.ratio:e.element.offsetParent.clientHeight*e.ratio,e.context.scale(e.ratio,e.ratio),clearTimeout(e.windowDelay),e.windowDelay=t.setTimeout(function(){e._checkResponsive(),e._refresh()},50)},n.prototype._animate=function(){var e=this;e._draw(),e._animation=t.requestAnimFrame(e._animate)},n.prototype.resumeAnimation=function(){this._animation||this._animate()},n.prototype.pauseAnimation=function(){var e=this;e._animation&&(e.usingPolyfill?t.clearTimeout(e._animation):(t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame)(e._animation),e._animation=null)},n.prototype._draw=function(){var e=this,n=e.element,o=n.offsetParent.clientWidth,r=n.offsetParent.clientHeight,a=e.options.showParticles,s=e.storage;"BODY"===n.offsetParent.nodeName&&(r=t.innerHeight),e.context.clearRect(0,0,n.width,n.height),e.context.beginPath(),e.context.fillStyle="rgb("+e.options.color.r+", "+e.options.color.g+", "+e.options.color.b+")";for(var l=s.length;l--;){var c=s[l];a&&c._draw(),c._updateCoordinates(o,r)}e.context.fill(),e.options.connectParticles&&(s.sort(i),e._updateEdges())},n.prototype._updateEdges=function(){for(var t=this,e=t.options.minDistance,i=t.options.color,n=Math.sqrt,o=Math.abs,r=t.storage,a=r.length,s="rgba("+i.r+","+i.g+","+i.b+",",l=0;l<a;l++)for(var c=r[l],p=l+1;p<a;p++){var u,f=r[p],h=c.x-f.x,m=c.y-f.y;if(u=n(h*h+m*m),o(h)>e)break;u<=e&&t._drawEdge(c,f,s+(1.2-u/e)+")")}},n.prototype._drawEdge=function(t,e,i){var n=this.context;n.beginPath(),n.strokeStyle=i,n.moveTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke(),n.closePath()},n.prototype._extend=function(t,e){return Object.keys(e).forEach(function(i){t[i]=e[i]}),t},n.prototype._hex2rgb=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},(o=function(i,n){var o=this,r=Math.random,a=n.speed;o.context=i,o.options=n;var s=e.querySelector(n.selector);o.x=r()*s.offsetParent.clientWidth,o.y="BODY"===s.offsetParent.nodeName?r()*t.innerHeight:r()*s.offsetParent.clientHeight,o.vx=r()*a*2-a,o.vy=r()*a*2-a,o.radius=r()*r()*n.sizeVariations,o._draw()}).prototype._draw=function(){var t=this;t.context.save(),t.context.translate(t.x,t.y),t.context.moveTo(0,0),t.context.arc(0,0,t.radius,0,2*Math.PI,!1),t.context.restore()},o.prototype._updateCoordinates=function(t,e){var i=this,n=i.x+this.vx,o=i.y+this.vy,r=i.radius;n+r>t?n=r:n-r<0&&(n=t-r),o+r>e?o=r:o-r<0&&(o=e-r),i.x=n,i.y=o},t.requestAnimFrame=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||(this._usingPolyfill=!0,function(e){return t.setTimeout(e,1e3/60)})}(),new n}(window,document);!function(){"use strict";"function"==typeof define&&define.amd?define("Particles",function(){return Particles}):"undefined"!=typeof module&&module.exports?module.exports=Particles:window.Particles=Particles}();