import{D as kr,y as la,z as ha,E as Yd}from"./iframe-Ds54rb_7.js";class At{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const Di={PROPERTYCHANGE:"propertychange"};class ca{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}function qd(i,e,t){let n,s;t=t||mi;let r=0,o=i.length,a=!1;for(;r<o;)n=r+(o-r>>1),s=+t(i[n],e),s<0?r=n+1:(o=n,a=!s);return a?r:~r}function mi(i,e){return i>e?1:i<e?-1:0}function Fr(i,e,t){if(i[0]<=e)return 0;const n=i.length;if(e<=i[n-1])return n-1;if(typeof t=="function"){for(let s=1;s<n;++s){const r=i[s];if(r===e)return s;if(r<e)return t(e,i[s-1],r)>0?s-1:s}return n-1}if(t>0){for(let s=1;s<n;++s)if(i[s]<e)return s-1;return n-1}if(t<0){for(let s=1;s<n;++s)if(i[s]<=e)return s;return n-1}for(let s=1;s<n;++s){if(i[s]==e)return s;if(i[s]<e)return i[s-1]-e<e-i[s]?s-1:s}return n-1}function Zd(i,e,t){for(;e<t;){const n=i[e];i[e]=i[t],i[t]=n,++e,--t}}function bt(i,e){const t=Array.isArray(e)?e:[e],n=t.length;for(let s=0;s<n;s++)i[i.length]=t[s]}function pi(i,e){const t=i.length;if(t!==e.length)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0}function $d(i,e,t){const n=e||mi;return i.every(function(s,r){if(r===0)return!0;const o=n(i[r-1],s);return!(o>0||o===0)})}function is(){return!0}function xs(){return!1}function yn(){}function Ph(i){let e=!1,t,n,s;return function(){const r=Array.prototype.slice.call(arguments);return(!e||this!==s||!pi(r,n))&&(e=!0,s=this,n=r,t=i.apply(this,arguments)),t}}function Jd(i){function e(){let t;try{t=i()}catch(n){return Promise.reject(n)}return t instanceof Promise?t:Promise.resolve(t)}return e()}function _s(i){for(const e in i)delete i[e]}function ki(i){let e;for(e in i)return!1;return!e}class ps extends ca{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;const n=this.listeners_||(this.listeners_={}),s=n[e]||(n[e]=[]);s.includes(t)||s.push(t)}dispatchEvent(e){const t=typeof e=="string",n=t?e:e.type,s=this.listeners_&&this.listeners_[n];if(!s)return;const r=t?new At(e):e;r.target||(r.target=this.eventTarget_||this);const o=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});n in o||(o[n]=0,a[n]=0),++o[n];let l;for(let h=0,c=s.length;h<c;++h)if("handleEvent"in s[h]?l=s[h].handleEvent(r):l=s[h].call(this,r),l===!1||r.propagationStopped){l=!1;break}if(--o[n]===0){let h=a[n];for(delete a[n];h--;)this.removeEventListener(n,yn);delete o[n]}return l}disposeInternal(){this.listeners_&&_s(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(e,t){if(!this.listeners_)return;const n=this.listeners_[e];if(!n)return;const s=n.indexOf(t);s!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[s]=yn,++this.pendingRemovals_[e]):(n.splice(s,1),n.length===0&&delete this.listeners_[e]))}}const W={CHANGE:"change",ERROR:"error",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function q(i,e,t,n,s){if(n&&n!==i&&(t=t.bind(n)),s){const o=t;t=function(){i.removeEventListener(e,t),o.apply(this,arguments)}}const r={target:i,type:e,listener:t};return i.addEventListener(e,t),r}function ns(i,e,t,n){return q(i,e,t,n,!0)}function ce(i){i&&i.target&&(i.target.removeEventListener(i.type,i.listener),_s(i))}class Cs extends ps{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(W.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){const n=e.length,s=new Array(n);for(let r=0;r<n;++r)s[r]=q(this,e[r],t);return s}return q(this,e,t)}onceInternal(e,t){let n;if(Array.isArray(e)){const s=e.length;n=new Array(s);for(let r=0;r<s;++r)n[r]=ns(this,e[r],t)}else n=ns(this,e,t);return t.ol_key=n,n}unInternal(e,t){const n=t.ol_key;if(n)Qd(n);else if(Array.isArray(e))for(let s=0,r=e.length;s<r;++s)this.removeEventListener(e[s],t);else this.removeEventListener(e,t)}}Cs.prototype.on;Cs.prototype.once;Cs.prototype.un;function Qd(i){if(Array.isArray(i))for(let e=0,t=i.length;e<t;++e)ce(i[e]);else ce(i)}function G(){throw new Error("Unimplemented abstract method.")}let eu=0;function te(i){return i.ol_uid||(i.ol_uid=String(++eu))}class cl extends At{constructor(e,t,n){super(e),this.key=t,this.oldValue=n}}class Tt extends Cs{constructor(e){super(),this.on,this.once,this.un,te(this),this.values_=null,e!==void 0&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let n;n=`change:${e}`,this.hasListener(n)&&this.dispatchEvent(new cl(n,e,t)),n=Di.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new cl(n,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,n){const s=this.values_||(this.values_={});if(n)s[e]=t;else{const r=s[e];s[e]=t,r!==t&&this.notify(e,r)}}setProperties(e,t){for(const n in e)this.set(n,e[n],t)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){const n=this.values_[e];delete this.values_[e],ki(this.values_)&&(this.values_=null),t||this.notify(e,n)}}}const xt={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"},Ti=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",tu=Ti.includes("firefox"),iu=Ti.includes("safari")&&!Ti.includes("chrom");iu&&(Ti.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(Ti));const nu=Ti.includes("webkit")&&!Ti.includes("edge"),Oh=Ti.includes("macintosh"),Dh=typeof devicePixelRatio<"u"?devicePixelRatio:1,da=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,ua=typeof Image<"u"&&Image.prototype.decode,su=typeof createImageBitmap=="function",kh=(function(){let i=!1;try{const e=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return i})();function Ne(i,e,t,n){let s;return t&&t.length?s=t.shift():da?s=new OffscreenCanvas(i||300,e||300):s=document.createElement("canvas"),i&&(s.width=i),e&&(s.height=e),s.getContext("2d",n)}function Nr(i){const e=i.canvas;e.width=1,e.height=1,i.clearRect(0,0,1,1)}function ru(i){let e=i.offsetWidth;const t=getComputedStyle(i);return e+=parseInt(t.marginLeft,10)+parseInt(t.marginRight,10),e}function ou(i){let e=i.offsetHeight;const t=getComputedStyle(i);return e+=parseInt(t.marginTop,10)+parseInt(t.marginBottom,10),e}function xn(i,e){const t=e.parentNode;t&&t.replaceChild(i,e)}function cr(i){return i&&i.parentNode?i.parentNode.removeChild(i):null}function Fh(i){for(;i.lastChild;)i.removeChild(i.lastChild)}function au(i,e){const t=i.childNodes;for(let n=0;;++n){const s=t[n],r=e[n];if(!s&&!r)break;if(s!==r){if(!s){i.appendChild(r);continue}if(!r){i.removeChild(s),--n;continue}i.insertBefore(r,s)}}}class In extends Tt{constructor(e){super();const t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents="auto"),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){cr(this.element),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&cr(this.element);for(let t=0,n=this.listenerKeys.length;t<n;++t)ce(this.listenerKeys[t]);this.listenerKeys.length=0,this.map_=e,e&&((this.target_?this.target_:e.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==yn&&this.listenerKeys.push(q(e,xt.POSTRENDER,this.render,this)),e.render())}render(e){}setTarget(e){this.target_=typeof e=="string"?document.getElementById(e):e}}const Xs="ol-hidden",lu="ol-selectable",Wi="ol-unselectable",dl="ol-unsupported",vs="ol-control",dr="ol-collapsed",hu=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""),"i"),ul=["style","variant","weight","size","lineHeight","family"],Nh=function(i){const e=i.match(hu);if(!e)return null;const t={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"};for(let n=0,s=ul.length;n<s;++n){const r=e[n+1];r!==void 0&&(t[ul[n]]=r)}return t.families=t.family.split(/,\s?/),t};class cu extends In{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=e.collapsible!==void 0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1);const t=e.className!==void 0?e.className:"ol-attribution",n=e.tipLabel!==void 0?e.tipLabel:"Attributions",s=e.expandClassName!==void 0?e.expandClassName:t+"-expand",r=e.collapseLabel!==void 0?e.collapseLabel:"›",o=e.collapseClassName!==void 0?e.collapseClassName:t+"-collapse";typeof r=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=r,this.collapseLabel_.className=o):this.collapseLabel_=r;const a=e.label!==void 0?e.label:"i";typeof a=="string"?(this.label_=document.createElement("span"),this.label_.textContent=a,this.label_.className=s):this.label_=a;const l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=n,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener(W.CLICK,this.handleClick_.bind(this),!1);const h=t+" "+Wi+" "+vs+(this.collapsed_&&this.collapsible_?" "+dr:"")+(this.collapsible_?"":" ol-uncollapsible"),c=this.element;c.className=h,c.appendChild(this.toggleButton_),c.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(e){const t=Array.from(new Set(this.getMap().getAllLayers().flatMap(s=>s.getAttributions(e)))),n=!this.getMap().getAllLayers().some(s=>s.getSource()&&s.getSource().getAttributionsCollapsible()===!1);return this.overrideCollapsible_||this.setCollapsible(n),t}updateElement_(e){if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const t=this.collectSourceAttributions_(e),n=t.length>0;if(this.renderedVisible_!=n&&(this.element.style.display=n?"":"none",this.renderedVisible_=n),!pi(t,this.renderedAttributions_)){Fh(this.ulElement_);for(let s=0,r=t.length;s<r;++s){const o=document.createElement("li");o.innerHTML=t[s],this.ulElement_.appendChild(o)}this.renderedAttributions_=t}}handleClick_(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(dr),this.collapsed_?xn(this.collapseLabel_,this.label_):xn(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(e){this.userCollapsed_=e,!(!this.collapsible_||this.collapsed_===e)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(e){this.updateElement_(e.frameState)}}const Te={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},fl=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],gl={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"};class du extends In{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target}),this.on,this.once,this.un,this.keys_=e.keys!==void 0?e.keys:!1,this.source_=e.source,this.isInFullscreen_=!1,this.boundHandleMapTargetChange_=this.handleMapTargetChange_.bind(this),this.cssClassName_=e.className!==void 0?e.className:"ol-full-screen",this.documentListeners_=[],this.activeClassName_=e.activeClassName!==void 0?e.activeClassName.split(" "):[this.cssClassName_+"-true"],this.inactiveClassName_=e.inactiveClassName!==void 0?e.inactiveClassName.split(" "):[this.cssClassName_+"-false"];const t=e.label!==void 0?e.label:"⤢";this.labelNode_=typeof t=="string"?document.createTextNode(t):t;const n=e.labelActive!==void 0?e.labelActive:"×";this.labelActiveNode_=typeof n=="string"?document.createTextNode(n):n;const s=e.tipLabel?e.tipLabel:"Toggle full-screen";this.button_=document.createElement("button"),this.button_.title=s,this.button_.setAttribute("type","button"),this.button_.appendChild(this.labelNode_),this.button_.addEventListener(W.CLICK,this.handleClick_.bind(this),!1),this.setClassName_(this.button_,this.isInFullscreen_),this.element.className=`${this.cssClassName_} ${Wi} ${vs}`,this.element.appendChild(this.button_)}handleClick_(e){e.preventDefault(),this.handleFullScreen_()}handleFullScreen_(){const e=this.getMap();if(!e)return;const t=e.getOwnerDocument();if(wl(t))if(Ml(t))fu(t);else{let n;this.source_?n=typeof this.source_=="string"?t.getElementById(this.source_):this.source_:n=e.getTargetElement(),this.keys_?uu(n):Gh(n)}}handleFullScreenChange_(){const e=this.getMap();if(!e)return;const t=this.isInFullscreen_;this.isInFullscreen_=Ml(e.getOwnerDocument()),t!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?(xn(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(gl.ENTERFULLSCREEN)):(xn(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(gl.LEAVEFULLSCREEN)),e.updateSize())}setClassName_(e,t){t?(e.classList.remove(...this.inactiveClassName_),e.classList.add(...this.activeClassName_)):(e.classList.remove(...this.activeClassName_),e.classList.add(...this.inactiveClassName_))}setMap(e){const t=this.getMap();t&&t.removeChangeListener(Te.TARGET,this.boundHandleMapTargetChange_),super.setMap(e),this.handleMapTargetChange_(),e&&e.addChangeListener(Te.TARGET,this.boundHandleMapTargetChange_)}handleMapTargetChange_(){const e=this.documentListeners_;for(let n=0,s=e.length;n<s;++n)ce(e[n]);e.length=0;const t=this.getMap();if(t){const n=t.getOwnerDocument();wl(n)?this.element.classList.remove(dl):this.element.classList.add(dl);for(let s=0,r=fl.length;s<r;++s)e.push(q(n,fl[s],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}}}function wl(i){const e=i.body;return!!(e.webkitRequestFullscreen||e.requestFullscreen&&i.fullscreenEnabled)}function Ml(i){return!!(i.webkitIsFullScreen||i.fullscreenElement)}function Gh(i){i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen&&i.webkitRequestFullscreen()}function uu(i){i.webkitRequestFullscreen?i.webkitRequestFullscreen():Gh(i)}function fu(i){i.exitFullscreen?i.exitFullscreen():i.webkitExitFullscreen&&i.webkitExitFullscreen()}const Po={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown"},_n={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};let Gr=class{constructor(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||_n[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(e){this.defaultTileGrid_=e}setExtent(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)}setWorldExtent(e){this.worldExtent_=e}setGetPointResolution(e){this.getPointResolutionFunc_=e}getPointResolutionFunc(){return this.getPointResolutionFunc_}};const Rs=6378137,an=Math.PI*Rs,gu=[-an,-an,an,an],wu=[-180,-85,180,85],Us=Rs*Math.log(Math.tan(Math.PI/2));class Zi extends Gr{constructor(e){super({code:e,units:"m",extent:gu,global:!0,worldExtent:wu,getPointResolution:function(t,n){return t/Math.cosh(n[1]/Rs)}})}}const ml=[new Zi("EPSG:3857"),new Zi("EPSG:102100"),new Zi("EPSG:102113"),new Zi("EPSG:900913"),new Zi("http://www.opengis.net/def/crs/EPSG/0/3857"),new Zi("http://www.opengis.net/gml/srs/epsg.xml#3857")];function Mu(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let s=0;s<n;s+=t){e[s]=an*i[s]/180;let r=Rs*Math.log(Math.tan(Math.PI*(+i[s+1]+90)/360));r>Us?r=Us:r<-Us&&(r=-Us),e[s+1]=r}return e}function mu(i,e,t){const n=i.length;t=t>1?t:2,e===void 0&&(t>2?e=i.slice():e=new Array(n));for(let s=0;s<n;s+=t)e[s]=180*i[s]/an,e[s+1]=360*Math.atan(Math.exp(i[s+1]/Rs))/Math.PI-90;return e}const Tu=6378137,Tl=[-180,-90,180,90],yu=Math.PI*Tu/180;class bi extends Gr{constructor(e,t){super({code:e,units:"degrees",extent:Tl,axisOrientation:t,global:!0,metersPerUnit:yu,worldExtent:Tl})}}const yl=[new bi("CRS:84"),new bi("EPSG:4326","neu"),new bi("urn:ogc:def:crs:OGC:1.3:CRS84"),new bi("urn:ogc:def:crs:OGC:2:84"),new bi("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new bi("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new bi("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let Oo={};function xu(i){return Oo[i]||Oo[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function _u(i,e){Oo[i]=e}let gn={};function pn(i,e,t){const n=i.getCode(),s=e.getCode();n in gn||(gn[n]={}),gn[n][s]=t}function Wh(i,e){let t;return i in gn&&e in gn[i]&&(t=gn[i][e]),t}const _e={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Do(i){const e=nt();for(let t=0,n=i.length;t<n;++t)es(e,i[t]);return e}function pu(i,e,t){const n=Math.min.apply(null,i),s=Math.min.apply(null,e),r=Math.max.apply(null,i),o=Math.max.apply(null,e);return Vt(n,s,r,o,t)}function ss(i,e,t){return t?(t[0]=i[0]-e,t[1]=i[1]-e,t[2]=i[2]+e,t[3]=i[3]+e,t):[i[0]-e,i[1]-e,i[2]+e,i[3]+e]}function zh(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i.slice()}function zi(i,e,t){let n,s;return e<i[0]?n=i[0]-e:i[2]<e?n=e-i[2]:n=0,t<i[1]?s=i[1]-t:i[3]<t?s=t-i[3]:s=0,n*n+s*s}function Wr(i,e){return fa(i,e[0],e[1])}function Ct(i,e){return i[0]<=e[0]&&e[2]<=i[2]&&i[1]<=e[1]&&e[3]<=i[3]}function fa(i,e,t){return i[0]<=e&&e<=i[2]&&i[1]<=t&&t<=i[3]}function ko(i,e){const t=i[0],n=i[1],s=i[2],r=i[3],o=e[0],a=e[1];let l=_e.UNKNOWN;return o<t?l=l|_e.LEFT:o>s&&(l=l|_e.RIGHT),a<n?l=l|_e.BELOW:a>r&&(l=l|_e.ABOVE),l===_e.UNKNOWN&&(l=_e.INTERSECTING),l}function nt(){return[1/0,1/0,-1/0,-1/0]}function Vt(i,e,t,n,s){return s?(s[0]=i,s[1]=e,s[2]=t,s[3]=n,s):[i,e,t,n]}function Kn(i){return Vt(1/0,1/0,-1/0,-1/0,i)}function Hh(i,e){const t=i[0],n=i[1];return Vt(t,n,t,n,e)}function ga(i,e,t,n,s){const r=Kn(s);return jh(r,i,e,t,n)}function Fi(i,e){return i[0]==e[0]&&i[2]==e[2]&&i[1]==e[1]&&i[3]==e[3]}function Bh(i,e){return e[0]<i[0]&&(i[0]=e[0]),e[2]>i[2]&&(i[2]=e[2]),e[1]<i[1]&&(i[1]=e[1]),e[3]>i[3]&&(i[3]=e[3]),i}function es(i,e){e[0]<i[0]&&(i[0]=e[0]),e[0]>i[2]&&(i[2]=e[0]),e[1]<i[1]&&(i[1]=e[1]),e[1]>i[3]&&(i[3]=e[1])}function jh(i,e,t,n,s){for(;t<n;t+=s)Cu(i,e[t],e[t+1]);return i}function Cu(i,e,t){i[0]=Math.min(i[0],e),i[1]=Math.min(i[1],t),i[2]=Math.max(i[2],e),i[3]=Math.max(i[3],t)}function Vh(i,e){let t;return t=e(zr(i)),t||(t=e(bs(i)),t)||(t=e(Hr(i)),t)||(t=e(qt(i)),t)?t:!1}function Fo(i){let e=0;return An(i)||(e=Q(i)*Ke(i)),e}function zr(i){return[i[0],i[1]]}function bs(i){return[i[2],i[1]]}function mt(i){return[(i[0]+i[2])/2,(i[1]+i[3])/2]}function vu(i,e){let t;if(e==="bottom-left")t=zr(i);else if(e==="bottom-right")t=bs(i);else if(e==="top-left")t=qt(i);else if(e==="top-right")t=Hr(i);else throw new Error("Invalid corner");return t}function rs(i,e,t,n,s){const[r,o,a,l,h,c,d,u]=No(i,e,t,n);return Vt(Math.min(r,a,h,d),Math.min(o,l,c,u),Math.max(r,a,h,d),Math.max(o,l,c,u),s)}function No(i,e,t,n){const s=e*n[0]/2,r=e*n[1]/2,o=Math.cos(t),a=Math.sin(t),l=s*o,h=s*a,c=r*o,d=r*a,u=i[0],f=i[1];return[u-l+d,f-h-c,u-l-d,f-h+c,u+l-d,f+h+c,u+l+d,f+h-c,u-l+d,f-h-c]}function Ke(i){return i[3]-i[1]}function wn(i,e,t){const n=t||nt();return Xe(i,e)?(i[0]>e[0]?n[0]=i[0]:n[0]=e[0],i[1]>e[1]?n[1]=i[1]:n[1]=e[1],i[2]<e[2]?n[2]=i[2]:n[2]=e[2],i[3]<e[3]?n[3]=i[3]:n[3]=e[3]):Kn(n),n}function qt(i){return[i[0],i[3]]}function Hr(i){return[i[2],i[3]]}function Q(i){return i[2]-i[0]}function Xe(i,e){return i[0]<=e[2]&&i[2]>=e[0]&&i[1]<=e[3]&&i[3]>=e[1]}function An(i){return i[2]<i[0]||i[3]<i[1]}function Ru(i,e){return e?(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e):i}function bu(i,e){const t=(i[2]-i[0])/2*(e-1),n=(i[3]-i[1])/2*(e-1);i[0]-=t,i[2]+=t,i[1]-=n,i[3]+=n}function Eu(i,e,t){let n=!1;const s=ko(i,e),r=ko(i,t);if(s===_e.INTERSECTING||r===_e.INTERSECTING)n=!0;else{const o=i[0],a=i[1],l=i[2],h=i[3],c=e[0],d=e[1],u=t[0],f=t[1],g=(f-d)/(u-c);let w,M;r&_e.ABOVE&&!(s&_e.ABOVE)&&(w=u-(f-h)/g,n=w>=o&&w<=l),!n&&r&_e.RIGHT&&!(s&_e.RIGHT)&&(M=f-(u-l)*g,n=M>=a&&M<=h),!n&&r&_e.BELOW&&!(s&_e.BELOW)&&(w=u-(f-a)/g,n=w>=o&&w<=l),!n&&r&_e.LEFT&&!(s&_e.LEFT)&&(M=f-(u-o)*g,n=M>=a&&M<=h)}return n}function Lu(i,e,t,n){if(An(i))return Kn(t);let s=[];s=[i[0],i[1],i[2],i[1],i[2],i[3],i[0],i[3]],e(s,s,2);const r=[],o=[];for(let a=0,l=s.length;a<l;a+=2)r.push(s[a]),o.push(s[a+1]);return pu(r,o,t)}function Xh(i,e){const t=e.getExtent(),n=mt(i);if(e.canWrapX()&&(n[0]<t[0]||n[0]>=t[2])){const s=Q(t),o=Math.floor((n[0]-t[0])/s)*s;i[0]-=o,i[2]-=o}return i}function Su(i,e){if(e.canWrapX()){const t=e.getExtent();if(!isFinite(i[0])||!isFinite(i[2]))return[[t[0],i[1],t[2],i[3]]];Xh(i,e);const n=Q(t);if(Q(i)>n)return[[t[0],i[1],t[2],i[3]]];if(i[0]<t[0])return[[i[0]+n,i[1],t[2],i[3]],[t[0],i[1],i[2],i[3]]];if(i[2]>t[2])return[[i[0],i[1],t[2],i[3]],[t[0],i[1],i[2]-n,i[3]]]}return[i]}function we(i,e,t){return Math.min(Math.max(i,e),t)}function Iu(i,e,t,n,s,r){const o=s-t,a=r-n;if(o!==0||a!==0){const l=((i-t)*o+(e-n)*a)/(o*o+a*a);l>1?(t=s,n=r):l>0&&(t+=o*l,n+=a*l)}return Oi(i,e,t,n)}function Oi(i,e,t,n){const s=t-i,r=n-e;return s*s+r*r}function Ku(i){const e=i.length;for(let n=0;n<e;n++){let s=n,r=Math.abs(i[n][n]);for(let a=n+1;a<e;a++){const l=Math.abs(i[a][n]);l>r&&(r=l,s=a)}if(r===0)return null;const o=i[s];i[s]=i[n],i[n]=o;for(let a=n+1;a<e;a++){const l=-i[a][n]/i[n][n];for(let h=n;h<e+1;h++)n==h?i[a][h]=0:i[a][h]+=l*i[n][h]}}const t=new Array(e);for(let n=e-1;n>=0;n--){t[n]=i[n][e]/i[n][n];for(let s=n-1;s>=0;s--)i[s][e]-=i[s][n]*t[n]}return t}function or(i){return i*Math.PI/180}function gi(i,e){const t=i%e;return t*e<0?t+e:t}function Qe(i,e,t){return i+t*(e-i)}function Br(i,e){const t=Math.pow(10,e);return Math.round(i*t)/t}function xl(i,e){return Math.round(Br(i,e))}function ln(i,e){return Math.floor(Br(i,e))}function li(i,e){return Math.ceil(Br(i,e))}function wa(i,e){const t=(""+i).split("."),n=(""+e).split(".");for(let s=0;s<Math.max(t.length,n.length);s++){const r=parseInt(t[s]||"0",10),o=parseInt(n[s]||"0",10);if(r>o)return 1;if(o>r)return-1}return 0}function Au(i,e){return i[0]+=+e[0],i[1]+=+e[1],i}function W_(i,e){const t=e.getRadius(),n=e.getCenter(),s=n[0],r=n[1],o=i[0],a=i[1];let l=o-s;const h=a-r;l===0&&h===0&&(l=1);const c=Math.sqrt(l*l+h*h),d=s+t*l/c,u=r+t*h/c;return[d,u]}function Pu(i,e){const t=i[0],n=i[1],s=e[0],r=e[1],o=s[0],a=s[1],l=r[0],h=r[1],c=l-o,d=h-a,u=c===0&&d===0?0:(c*(t-o)+d*(n-a))/(c*c+d*d||0);let f,g;return u<=0?(f=o,g=a):u>=1?(f=l,g=h):(f=o+u*c,g=a+u*d),[f,g]}function ur(i,e){let t=!0;for(let n=i.length-1;n>=0;--n)if(i[n]!=e[n]){t=!1;break}return t}function Ma(i,e){const t=Math.cos(e),n=Math.sin(e),s=i[0]*t-i[1]*n,r=i[1]*t+i[0]*n;return i[0]=s,i[1]=r,i}function Ou(i,e){return i[0]*=e,i[1]*=e,i}function Uh(i,e){const t=i[0]-e[0],n=i[1]-e[1];return t*t+n*n}function z_(i,e){return Math.sqrt(Uh(i,e))}function H_(i,e){return Uh(i,Pu(i,e))}function Yh(i,e){if(e.canWrapX()){const t=Q(e.getExtent()),n=qh(i,e,t);n&&(i[0]-=n*t)}return i}function qh(i,e,t){const n=e.getExtent();let s=0;return e.canWrapX()&&(i[0]<n[0]||i[0]>n[2])&&(t=t||Q(n),s=Math.floor((i[0]-n[0])/t)),s}const Du=63710088e-1;function _l(i,e,t){t=t||Du;const n=or(i[1]),s=or(e[1]),r=(s-n)/2,o=or(e[0]-i[0])/2,a=Math.sin(r)*Math.sin(r)+Math.sin(o)*Math.sin(o)*Math.cos(n)*Math.cos(s);return 2*t*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}function Zh(...i){console.warn(...i)}let Go=!0;function ku(i){Go=!1}function ma(i,e){if(e!==void 0){for(let t=0,n=i.length;t<n;++t)e[t]=i[t];e=e}else e=i.slice();return e}function $h(i,e){if(e!==void 0&&i!==e){for(let t=0,n=i.length;t<n;++t)e[t]=i[t];i=e}return i}function Jh(i){_u(i.getCode(),i),pn(i,i,ma)}function Fu(i){i.forEach(Jh)}function ie(i){return typeof i=="string"?xu(i):i||null}function fr(i,e,t,n){i=ie(i);let s;const r=i.getPointResolutionFunc();if(r){if(s=r(e,t),n&&n!==i.getUnits()){const o=i.getMetersPerUnit();o&&(s=s*o/_n[n])}}else{const o=i.getUnits();if(o=="degrees"&&!n||n=="degrees")s=e;else{const a=ya(i,ie("EPSG:4326"));if(a===$h&&o!=="degrees")s=e*i.getMetersPerUnit();else{let h=[t[0]-e/2,t[1],t[0]+e/2,t[1],t[0],t[1]-e/2,t[0],t[1]+e/2];h=a(h,h,2);const c=_l(h.slice(0,2),h.slice(2,4)),d=_l(h.slice(4,6),h.slice(6,8));s=(c+d)/2}const l=n?_n[n]:i.getMetersPerUnit();l!==void 0&&(s/=l)}}return s}function Wo(i){Fu(i),i.forEach(function(e){i.forEach(function(t){e!==t&&pn(e,t,ma)})})}function Nu(i,e,t,n){i.forEach(function(s){e.forEach(function(r){pn(s,r,t),pn(r,s,n)})})}function Ta(i,e){return i?typeof i=="string"?ie(i):i:ie(e)}function pl(i){return(function(e,t,n){const s=e.length;n=n!==void 0?n:2,t=t!==void 0?t:new Array(s);for(let r=0;r<s;r+=n){const o=i(e.slice(r,r+n)),a=o.length;for(let l=0,h=n;l<h;++l)t[r+l]=l>=a?e[r+l]:o[l]}return t})}function Gu(i,e,t,n){const s=ie(i),r=ie(e);pn(s,r,pl(t)),pn(r,s,pl(n))}function _t(i,e){if(i===e)return!0;const t=i.getUnits()===e.getUnits();return(i.getCode()===e.getCode()||ya(i,e)===ma)&&t}function ya(i,e){const t=i.getCode(),n=e.getCode();let s=Wh(t,n);return s||(s=$h),s}function Cn(i,e){const t=ie(i),n=ie(e);return ya(t,n)}function Qh(i,e,t){return Cn(e,t)(i,void 0,i.length)}function ec(i,e,t,n){const s=Cn(e,t);return Lu(i,s,void 0)}function zo(i,e){return i}function zt(i,e){return Go&&!ur(i,[0,0])&&i[0]>=-180&&i[0]<=180&&i[1]>=-90&&i[1]<=90&&(Go=!1,Zh("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),i}function tc(i,e){return i}function Ii(i,e){return i}function Cl(i,e,t){return function(n){let s,r;if(i.canWrapX()){const o=i.getExtent(),a=Q(o);n=n.slice(0),r=qh(n,i,a),r&&(n[0]=n[0]-r*a),n[0]=we(n[0],o[0],o[2]),n[1]=we(n[1],o[1],o[3]),s=t(n)}else s=t(n);return r&&e.canWrapX()&&(s[0]+=r*Q(e.getExtent())),s}}function Wu(){Wo(ml),Wo(yl),Nu(yl,ml,Mu,mu)}Wu();const je={ADD:"add",REMOVE:"remove"},vl={LENGTH:"length"};class Ys extends At{constructor(e,t,n){super(e),this.element=t,this.index=n}}class ct extends Tt{constructor(e,t){if(super(),this.on,this.once,this.un,t=t||{},this.unique_=!!t.unique,this.array_=e||[],this.unique_)for(let n=0,s=this.array_.length;n<s;++n)this.assertUnique_(this.array_[n],n);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(e){for(let t=0,n=e.length;t<n;++t)this.push(e[t]);return this}forEach(e){const t=this.array_;for(let n=0,s=t.length;n<s;++n)e(t[n],n,t)}getArray(){return this.array_}item(e){return this.array_[e]}getLength(){return this.get(vl.LENGTH)}insertAt(e,t){if(e<0||e>this.getLength())throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t),this.array_.splice(e,0,t),this.updateLength_(),this.dispatchEvent(new Ys(je.ADD,t,e))}pop(){return this.removeAt(this.getLength()-1)}push(e){this.unique_&&this.assertUnique_(e);const t=this.getLength();return this.insertAt(t,e),this.getLength()}remove(e){const t=this.array_;for(let n=0,s=t.length;n<s;++n)if(t[n]===e)return this.removeAt(n)}removeAt(e){if(e<0||e>=this.getLength())return;const t=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new Ys(je.REMOVE,t,e)),t}setAt(e,t){const n=this.getLength();if(e>=n){this.insertAt(e,t);return}if(e<0)throw new Error("Index out of bounds: "+e);this.unique_&&this.assertUnique_(t,e);const s=this.array_[e];this.array_[e]=t,this.dispatchEvent(new Ys(je.REMOVE,s,e)),this.dispatchEvent(new Ys(je.ADD,t,e))}updateLength_(){this.set(vl.LENGTH,this.array_.length)}assertUnique_(e,t){for(let n=0,s=this.array_.length;n<s;++n)if(this.array_[n]===e&&n!==t)throw new Error("Duplicate item added to a unique collection")}}function J(i,e){if(!i)throw new Error(e)}new Array(6);function gt(){return[1,0,0,1,0,0]}function zu(i,e,t,n,s,r,o){return i[0]=e,i[1]=t,i[2]=n,i[3]=s,i[4]=r,i[5]=o,i}function Hu(i,e){return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i}function pe(i,e){const t=e[0],n=e[1];return e[0]=i[0]*t+i[2]*n+i[4],e[1]=i[1]*t+i[3]*n+i[5],e}function Bu(i,e,t){return zu(i,e,0,0,t,0,0)}function Xt(i,e,t,n,s,r,o,a){const l=Math.sin(r),h=Math.cos(r);return i[0]=n*h,i[1]=s*l,i[2]=-n*l,i[3]=s*h,i[4]=o*n*h-a*n*l+e,i[5]=o*s*l+a*s*h+t,i}function xa(i,e){const t=ju(e);J(t!==0,"Transformation matrix cannot be inverted");const n=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5];return i[0]=o/t,i[1]=-s/t,i[2]=-r/t,i[3]=n/t,i[4]=(r*l-o*a)/t,i[5]=-(n*l-s*a)/t,i}function ju(i){return i[0]*i[3]-i[1]*i[2]}let Rl;function ic(i){const e="matrix("+i.join(", ")+")";if(da)return e;const t=Rl||(Rl=document.createElement("div"));return t.style.transform=e,t.style.transform}const os={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]};var Re={name:"xyz",min:[0,0,0],channel:["X","Y","Z"],alias:["XYZ","ciexyz","cie1931"]};Re.whitepoint={2:{A:[109.85,100,35.585],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.045592705167,100,108.9057750759878],D75:[94.972,100,122.638],F2:[99.187,100,67.395],F7:[95.044,100,108.755],F11:[100.966,100,64.37],E:[100,100,100]},10:{A:[111.144,100,35.2],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F2:[103.28,100,69.026],F7:[95.792,100,107.687],F11:[103.866,100,65.627],E:[100,100,100]}};Re.max=Re.whitepoint[2].D65;Re.rgb=function(i,e){e=e||Re.whitepoint[2].E;var t=i[0]/e[0],n=i[1]/e[1],s=i[2]/e[2],r,o,a;return r=t*3.240969941904521+n*-1.537383177570093+s*-.498610760293,o=t*-.96924363628087+n*1.87596750150772+s*.041555057407175,a=t*.055630079696993+n*-.20397695888897+s*1.056971514242878,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r=r*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,r=Math.min(Math.max(0,r),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[r*255,o*255,a*255]};os.xyz=function(i,e){var t=i[0]/255,n=i[1]/255,s=i[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,s=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92;var r=t*.41239079926595+n*.35758433938387+s*.18048078840183,o=t*.21263900587151+n*.71516867876775+s*.072192315360733,a=t*.019330818715591+n*.11919477979462+s*.95053215224966;return e=e||Re.whitepoint[2].E,[r*e[0],o*e[1],a*e[2]]};const _a={name:"luv",min:[0,-134,-140],max:[100,224,122],channel:["lightness","u","v"],alias:["LUV","cieluv","cie1976"],xyz:function(i,e,t){var n,s,r,o,a,l,h,c,d,u,f,g,w;if(r=i[0],o=i[1],a=i[2],r===0)return[0,0,0];var M=.0011070564598794539;return e=e||"D65",t=t||2,d=Re.whitepoint[t][e][0],u=Re.whitepoint[t][e][1],f=Re.whitepoint[t][e][2],g=4*d/(d+15*u+3*f),w=9*u/(d+15*u+3*f),n=o/(13*r)+g||0,s=a/(13*r)+w||0,h=r>8?u*Math.pow((r+16)/116,3):u*r*M,l=h*9*n/(4*s)||0,c=h*(12-3*n-20*s)/(4*s)||0,[l,h,c]}};Re.luv=function(i,e,t){var n,s,r,o,a,l,h,c,d,u,f,g,w,M=.008856451679035631,m=903.2962962962961;e=e||"D65",t=t||2,d=Re.whitepoint[t][e][0],u=Re.whitepoint[t][e][1],f=Re.whitepoint[t][e][2],g=4*d/(d+15*u+3*f),w=9*u/(d+15*u+3*f),l=i[0],h=i[1],c=i[2],n=4*l/(l+15*h+3*c)||0,s=9*h/(l+15*h+3*c)||0;var T=h/u;return r=T<=M?m*T:116*Math.pow(T,1/3)-16,o=13*r*(n-g),a=13*r*(s-w),[r,o,a]};var nc={name:"lchuv",channel:["lightness","chroma","hue"],alias:["LCHuv","cielchuv"],min:[0,0,0],max:[100,100,360],luv:function(i){var e=i[0],t=i[1],n=i[2],s,r,o;return o=n/360*2*Math.PI,s=t*Math.cos(o),r=t*Math.sin(o),[e,s,r]},xyz:function(i){return _a.xyz(nc.luv(i))}};_a.lchuv=function(i){var e=i[0],t=i[1],n=i[2],s=Math.sqrt(t*t+n*n),r=Math.atan2(n,t),o=r*360/2/Math.PI;return o<0&&(o+=360),[e,s,o]};Re.lchuv=function(i){return _a.lchuv(Re.luv(i))};const bl={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var El={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function Vu(i){var e,t=[],n=1,s;if(typeof i=="number")return{space:"rgb",values:[i>>>16,(i&65280)>>>8,i&255],alpha:1};if(typeof i=="number")return{space:"rgb",values:[i>>>16,(i&65280)>>>8,i&255],alpha:1};if(i=String(i).toLowerCase(),bl[i])t=bl[i].slice(),s="rgb";else if(i==="transparent")n=0,s="rgb",t=[0,0,0];else if(i[0]==="#"){var r=i.slice(1),o=r.length,a=o<=4;n=1,a?(t=[parseInt(r[0]+r[0],16),parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16)],o===4&&(n=parseInt(r[3]+r[3],16)/255)):(t=[parseInt(r[0]+r[1],16),parseInt(r[2]+r[3],16),parseInt(r[4]+r[5],16)],o===8&&(n=parseInt(r[6]+r[7],16)/255)),t[0]||(t[0]=0),t[1]||(t[1]=0),t[2]||(t[2]=0),s="rgb"}else if(e=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(i)){var l=e[1];s=l.replace(/a$/,"");var h=s==="cmyk"?4:s==="gray"?1:3;t=e[2].trim().split(/\s*[,\/]\s*|\s+/),s==="color"&&(s=t.shift()),t=t.map(function(c,d){if(c[c.length-1]==="%")return c=parseFloat(c)/100,d===3?c:s==="rgb"?c*255:s[0]==="h"||s[0]==="l"&&!d?c*100:s==="lab"?c*125:s==="lch"?d<2?c*150:c*360:s[0]==="o"&&!d?c:s==="oklab"?c*.4:s==="oklch"?d<2?c*.4:c*360:c;if(s[d]==="h"||d===2&&s[s.length-1]==="h"){if(El[c]!==void 0)return El[c];if(c.endsWith("deg"))return parseFloat(c);if(c.endsWith("turn"))return parseFloat(c)*360;if(c.endsWith("grad"))return parseFloat(c)*360/400;if(c.endsWith("rad"))return parseFloat(c)*180/Math.PI}return c==="none"?0:parseFloat(c)}),n=t.length>h?t.pop():1}else/[0-9](?:\s|\/|,)/.test(i)&&(t=i.match(/([0-9]+)/g).map(function(c){return parseFloat(c)}),s=i.match(/([a-z])/ig)?.join("")?.toLowerCase()||"rgb");return{space:s,values:t,alpha:n}}const ho={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(i){var e=i[0]/360,t=i[1]/100,n=i[2]/100,s,r,o,a,l,h=0;if(t===0)return l=n*255,[l,l,l];for(r=n<.5?n*(1+t):n+t-n*t,s=2*n-r,a=[0,0,0];h<3;)o=e+1/3*-(h-1),o<0?o++:o>1&&o--,l=6*o<1?s+(r-s)*6*o:2*o<1?r:3*o<2?s+(r-s)*(2/3-o)*6:s,a[h++]=l*255;return a}};os.hsl=function(i){var e=i[0]/255,t=i[1]/255,n=i[2]/255,s=Math.min(e,t,n),r=Math.max(e,t,n),o=r-s,a,l,h;return r===s?a=0:e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:n===r&&(a=4+(e-t)/o),a=Math.min(a*60,360),a<0&&(a+=360),h=(s+r)/2,r===s?l=0:h<=.5?l=o/(r+s):l=o/(2-r-s),[a,l*100,h*100]};function Xu(i){Array.isArray(i)&&i.raw&&(i=String.raw(...arguments)),i instanceof Number&&(i=+i);var e,t=Vu(i);if(!t.space)return[];const n=t.space[0]==="h"?ho.min:os.min,s=t.space[0]==="h"?ho.max:os.max;return e=Array(3),e[0]=Math.min(Math.max(t.values[0],n[0]),s[0]),e[1]=Math.min(Math.max(t.values[1],n[1]),s[1]),e[2]=Math.min(Math.max(t.values[2],n[2]),s[2]),t.space[0]==="h"&&(e=ho.rgb(e)),e.push(Math.min(Math.max(t.alpha,0),1)),e}function sc(i){return typeof i=="string"?i:oc(i)}const Uu=1024,Hn={};let co=0;function Yu(i){if(i.length===4)return i;const e=i.slice();return e[3]=1,e}function Ll(i){const e=Re.lchuv(os.xyz(i));return e[3]=i[3],e}function qu(i){const e=Re.rgb(nc.xyz(i));return e[3]=i[3],e}function pa(i){if(Hn.hasOwnProperty(i))return Hn[i];if(co>=Uu){let t=0;for(const n in Hn)(t++&3)===0&&(delete Hn[n],--co)}const e=Xu(i);if(e.length!==4)throw new Error('Failed to parse "'+i+'" as color');for(const t of e)if(isNaN(t))throw new Error('Failed to parse "'+i+'" as color');return rc(e),Hn[i]=e,++co,e}function gr(i){return Array.isArray(i)?i:pa(i)}function rc(i){return i[0]=we(i[0]+.5|0,0,255),i[1]=we(i[1]+.5|0,0,255),i[2]=we(i[2]+.5|0,0,255),i[3]=we(i[3],0,1),i}function oc(i){let e=i[0];e!=(e|0)&&(e=e+.5|0);let t=i[1];t!=(t|0)&&(t=t+.5|0);let n=i[2];n!=(n|0)&&(n=n+.5|0);const s=i[3]===void 0?1:Math.round(i[3]*100)/100;return"rgba("+e+","+t+","+n+","+s+")"}function Zu(i){try{return pa(i),!0}catch{return!1}}class $u{constructor(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}clear(){this.cache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let e=0;for(const t in this.cache_){const n=this.cache_[t];(e++&3)===0&&!n.hasListener()&&(delete this.cache_[t],--this.cacheSize_)}}}get(e,t,n){const s=Sl(e,t,n);return s in this.cache_?this.cache_[s]:null}set(e,t,n,s){const r=Sl(e,t,n);this.cache_[r]=s,++this.cacheSize_}setSize(e){this.maxCacheSize_=e,this.expire()}}function Sl(i,e,t){const n=t?sc(t):"null";return e+":"+i+":"+n}const wr=new $u,le={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};class ac extends Tt{constructor(e){super(),this.on,this.once,this.un,this.background_=e.background;const t=Object.assign({},e);typeof e.properties=="object"&&(delete t.properties,Object.assign(t,e.properties)),t[le.OPACITY]=e.opacity!==void 0?e.opacity:1,J(typeof t[le.OPACITY]=="number","Layer opacity must be a number"),t[le.VISIBLE]=e.visible!==void 0?e.visible:!0,t[le.Z_INDEX]=e.zIndex,t[le.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,t[le.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,t[le.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,t[le.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,this.className_=t.className!==void 0?t.className:"ol-layer",delete t.className,this.setProperties(t),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(e){const t=this.state_||{layer:this,managed:e===void 0?!0:e},n=this.getZIndex();return t.opacity=we(Math.round(this.getOpacity()*100)/100,0,1),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=n===void 0&&!t.managed?1/0:n,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),t.minZoom=this.getMinZoom(),t.maxZoom=this.getMaxZoom(),this.state_=t,t}getLayersArray(e){return G()}getLayerStatesArray(e){return G()}getExtent(){return this.get(le.EXTENT)}getMaxResolution(){return this.get(le.MAX_RESOLUTION)}getMinResolution(){return this.get(le.MIN_RESOLUTION)}getMinZoom(){return this.get(le.MIN_ZOOM)}getMaxZoom(){return this.get(le.MAX_ZOOM)}getOpacity(){return this.get(le.OPACITY)}getSourceState(){return G()}getVisible(){return this.get(le.VISIBLE)}getZIndex(){return this.get(le.Z_INDEX)}setBackground(e){this.background_=e,this.changed()}setExtent(e){this.set(le.EXTENT,e)}setMaxResolution(e){this.set(le.MAX_RESOLUTION,e)}setMinResolution(e){this.set(le.MIN_RESOLUTION,e)}setMaxZoom(e){this.set(le.MAX_ZOOM,e)}setMinZoom(e){this.set(le.MIN_ZOOM,e)}setOpacity(e){J(typeof e=="number","Layer opacity must be a number"),this.set(le.OPACITY,e)}setVisible(e){this.set(le.VISIBLE,e)}setZIndex(e){this.set(le.Z_INDEX,e)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const Et={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},Le={ANIMATING:0,INTERACTING:1},Je={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},Ju=42,Ca=256;function Il(i,e,t){return(function(n,s,r,o,a){if(!n)return;if(!s&&!e)return n;const l=e?0:r[0]*s,h=e?0:r[1]*s,c=a?a[0]:0,d=a?a[1]:0;let u=i[0]+l/2+c,f=i[2]-l/2+c,g=i[1]+h/2+d,w=i[3]-h/2+d;u>f&&(u=(f+u)/2,f=u),g>w&&(g=(w+g)/2,w=g);let M=we(n[0],u,f),m=we(n[1],g,w);if(o&&t&&s){const T=30*s;M+=-T*Math.log(1+Math.max(0,u-n[0])/T)+T*Math.log(1+Math.max(0,n[0]-f)/T),m+=-T*Math.log(1+Math.max(0,g-n[1])/T)+T*Math.log(1+Math.max(0,n[1]-w)/T)}return[M,m]})}function Qu(i){return i}function va(i,e,t,n){const s=Q(e)/t[0],r=Ke(e)/t[1];return n?Math.min(i,Math.max(s,r)):Math.min(i,Math.min(s,r))}function Ra(i,e,t){let n=Math.min(i,e);const s=50;return n*=Math.log(1+s*Math.max(0,i/e-1))/s+1,t&&(n=Math.max(n,t),n/=Math.log(1+s*Math.max(0,t/i-1))/s+1),we(n,t/2,e*2)}function ef(i,e,t,n){return e=e!==void 0?e:!0,(function(s,r,o,a){if(s!==void 0){const l=i[0],h=i[i.length-1],c=t?va(l,t,o,n):l;if(a)return e?Ra(s,c,h):we(s,h,c);const d=Math.min(c,s),u=Math.floor(Fr(i,d,r));return i[u]>c&&u<i.length-1?i[u+1]:i[u]}})}function tf(i,e,t,n,s,r){return n=n!==void 0?n:!0,t=t!==void 0?t:0,(function(o,a,l,h){if(o!==void 0){const c=s?va(e,s,l,r):e;if(h)return n?Ra(o,c,t):we(o,t,c);const d=1e-9,u=Math.ceil(Math.log(e/c)/Math.log(i)-d),f=-a*(.5-d)+.5,g=Math.min(c,o),w=Math.floor(Math.log(e/g)/Math.log(i)+f),M=Math.max(u,w),m=e/Math.pow(i,M);return we(m,t,c)}})}function Kl(i,e,t,n,s){return t=t!==void 0?t:!0,(function(r,o,a,l){if(r!==void 0){const h=n?va(i,n,a,s):i;return!t||!l?we(r,e,h):Ra(r,h,e)}})}function ba(i){if(i!==void 0)return 0}function Al(i){if(i!==void 0)return i}function nf(i){const e=2*Math.PI/i;return(function(t,n){if(n)return t;if(t!==void 0)return t=Math.floor(t/e+.5)*e,t})}function sf(i){const e=or(5);return(function(t,n){return n||t===void 0?t:Math.abs(t)<=e?0:t})}function lc(i){return Math.pow(i,3)}function Pn(i){return 1-lc(1-i)}function rf(i){return 3*i*i-2*i*i*i}function of(i){return i}function wi(i,e,t,n,s,r){r=r||[];let o=0;for(let a=e;a<t;a+=n){const l=i[a],h=i[a+1];r[o++]=s[0]*l+s[2]*h+s[4],r[o++]=s[1]*l+s[3]*h+s[5]}return r&&r.length!=o&&(r.length=o),r}function hc(i,e,t,n,s,r,o){o=o||[];const a=Math.cos(s),l=Math.sin(s),h=r[0],c=r[1];let d=0;for(let u=e;u<t;u+=n){const f=i[u]-h,g=i[u+1]-c;o[d++]=h+f*a-g*l,o[d++]=c+f*l+g*a;for(let w=u+2;w<u+n;++w)o[d++]=i[w]}return o&&o.length!=d&&(o.length=d),o}function af(i,e,t,n,s,r,o,a){a=a||[];const l=o[0],h=o[1];let c=0;for(let d=e;d<t;d+=n){const u=i[d]-l,f=i[d+1]-h;a[c++]=l+s*u,a[c++]=h+r*f;for(let g=d+2;g<d+n;++g)a[c++]=i[g]}return a&&a.length!=c&&(a.length=c),a}function lf(i,e,t,n,s,r,o){o=o||[];let a=0;for(let l=e;l<t;l+=n){o[a++]=i[l]+s,o[a++]=i[l+1]+r;for(let h=l+2;h<l+n;++h)o[a++]=i[h]}return o&&o.length!=a&&(o.length=a),o}const Pl=gt();class cc extends Tt{constructor(){super(),this.extent_=nt(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=Ph((e,t,n)=>{if(!n)return this.getSimplifiedGeometry(t);const s=this.clone();return s.applyTransform(n),s.getSimplifiedGeometry(t)})}simplifyTransformed(e,t){return this.simplifyTransformedInternal(this.getRevision(),e,t)}clone(){return G()}closestPointXY(e,t,n,s){return G()}containsXY(e,t){const n=this.getClosestPoint([e,t]);return n[0]===e&&n[1]===t}getClosestPoint(e,t){return t=t||[NaN,NaN],this.closestPointXY(e[0],e[1],t,1/0),t}intersectsCoordinate(e){return this.containsXY(e[0],e[1])}computeExtent(e){return G()}getExtent(e){if(this.extentRevision_!=this.getRevision()){const t=this.computeExtent(this.extent_);(isNaN(t[0])||isNaN(t[1]))&&Kn(t),this.extentRevision_=this.getRevision()}return Ru(this.extent_,e)}rotate(e,t){G()}scale(e,t,n){G()}simplify(e){return this.getSimplifiedGeometry(e*e)}getSimplifiedGeometry(e){return G()}getType(){return G()}applyTransform(e){G()}intersectsExtent(e){return G()}translate(e,t){G()}transform(e,t){const n=ie(e),s=n.getUnits()=="tile-pixels"?function(r,o,a){const l=n.getExtent(),h=n.getWorldExtent(),c=Ke(h)/Ke(l);return Xt(Pl,h[0],h[3],c,-c,0,0,0),wi(r,0,r.length,a,Pl,o),Cn(n,t)(r,o,a)}:Cn(n,t);return this.applyTransform(s),this}}class Hi extends cc{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(e){return ga(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinates(){return G()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=this.getSimplifiedGeometryInternal(e);return t.getFlatCoordinates().length<this.flatCoordinates.length?t:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)}getSimplifiedGeometryInternal(e){return this}getStride(){return this.stride}setFlatCoordinates(e,t){this.stride=Ol(e),this.layout=e,this.flatCoordinates=t}setCoordinates(e,t){G()}setLayout(e,t,n){let s;if(e)s=Ol(e);else{for(let r=0;r<n;++r){if(t.length===0){this.layout="XY",this.stride=2;return}t=t[0]}s=t.length,e=Bi(s)}this.layout=e,this.stride=s}applyTransform(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(e,t){const n=this.getFlatCoordinates();if(n){const s=this.getStride();hc(n,0,n.length,s,e,t,n),this.changed()}}scale(e,t,n){t===void 0&&(t=e),n||(n=mt(this.getExtent()));const s=this.getFlatCoordinates();if(s){const r=this.getStride();af(s,0,s.length,r,e,t,n,s),this.changed()}}translate(e,t){const n=this.getFlatCoordinates();if(n){const s=this.getStride();lf(n,0,n.length,s,e,t,n),this.changed()}}}function Bi(i){let e;return i==2?e="XY":i==3?e="XYZ":i==4&&(e="XYZM"),e}function Ol(i){let e;return i=="XY"?e=2:i=="XYZ"||i=="XYM"?e=3:i=="XYZM"&&(e=4),e}function hf(i,e,t){const n=i.getFlatCoordinates();if(!n)return null;const s=i.getStride();return wi(n,0,n.length,s,e,t)}function Dl(i,e,t,n,s,r,o){const a=i[e],l=i[e+1],h=i[t]-a,c=i[t+1]-l;let d;if(h===0&&c===0)d=e;else{const u=((s-a)*h+(r-l)*c)/(h*h+c*c);if(u>1)d=t;else if(u>0){for(let f=0;f<n;++f)o[f]=Qe(i[e+f],i[t+f],u);o.length=n;return}else d=e}for(let u=0;u<n;++u)o[u]=i[d+u];o.length=n}function Ea(i,e,t,n,s){let r=i[e],o=i[e+1];for(e+=n;e<t;e+=n){const a=i[e],l=i[e+1],h=Oi(r,o,a,l);h>s&&(s=h),r=a,o=l}return s}function La(i,e,t,n,s){for(let r=0,o=t.length;r<o;++r){const a=t[r];s=Ea(i,e,a,n,s),e=a}return s}function cf(i,e,t,n,s){for(let r=0,o=t.length;r<o;++r){const a=t[r];s=La(i,e,a,n,s),e=a[a.length-1]}return s}function Sa(i,e,t,n,s,r,o,a,l,h,c){if(e==t)return h;let d,u;if(s===0){if(u=Oi(o,a,i[e],i[e+1]),u<h){for(d=0;d<n;++d)l[d]=i[e+d];return l.length=n,u}return h}c=c||[NaN,NaN];let f=e+n;for(;f<t;)if(Dl(i,f-n,f,n,o,a,c),u=Oi(o,a,c[0],c[1]),u<h){for(h=u,d=0;d<n;++d)l[d]=c[d];l.length=n,f+=n}else f+=n*Math.max((Math.sqrt(u)-Math.sqrt(h))/s|0,1);if(r&&(Dl(i,t-n,e,n,o,a,c),u=Oi(o,a,c[0],c[1]),u<h)){for(h=u,d=0;d<n;++d)l[d]=c[d];l.length=n}return h}function Ia(i,e,t,n,s,r,o,a,l,h,c){c=c||[NaN,NaN];for(let d=0,u=t.length;d<u;++d){const f=t[d];h=Sa(i,e,f,n,s,r,o,a,l,h,c),e=f}return h}function df(i,e,t,n,s,r,o,a,l,h,c){c=c||[NaN,NaN];for(let d=0,u=t.length;d<u;++d){const f=t[d];h=Ia(i,e,f,n,s,r,o,a,l,h,c),e=f[f.length-1]}return h}function uf(i,e,t,n){for(let s=0,r=t.length;s<r;++s)i[e++]=t[s];return e}function jr(i,e,t,n){for(let s=0,r=t.length;s<r;++s){const o=t[s];for(let a=0;a<n;++a)i[e++]=o[a]}return e}function Es(i,e,t,n,s){s=s||[];let r=0;for(let o=0,a=t.length;o<a;++o){const l=jr(i,e,t[o],n);s[r++]=l,e=l}return s.length=r,s}function dc(i,e,t,n,s){s=s||[];let r=0;for(let o=0,a=t.length;o<a;++o){const l=Es(i,e,t[o],n,s[r]);l.length===0&&(l[0]=e),s[r++]=l,e=l[l.length-1]}return s.length=r,s}function Vr(i,e,t,n,s,r,o){const a=(t-e)/n;if(a<3){for(;e<t;e+=n)r[o++]=i[e],r[o++]=i[e+1];return o}const l=new Array(a);l[0]=1,l[a-1]=1;const h=[e,t-n];let c=0;for(;h.length>0;){const d=h.pop(),u=h.pop();let f=0;const g=i[u],w=i[u+1],M=i[d],m=i[d+1];for(let T=u+n;T<d;T+=n){const y=i[T],x=i[T+1],_=Iu(y,x,g,w,M,m);_>f&&(c=T,f=_)}f>s&&(l[(c-e)/n]=1,u+n<c&&h.push(u,c),c+n<d&&h.push(c,d))}for(let d=0;d<a;++d)l[d]&&(r[o++]=i[e+d*n],r[o++]=i[e+d*n+1]);return o}function uc(i,e,t,n,s,r,o,a){for(let l=0,h=t.length;l<h;++l){const c=t[l];o=Vr(i,e,c,n,s,r,o),a.push(o),e=c}return o}function Si(i,e){return e*Math.round(i/e)}function ff(i,e,t,n,s,r,o){if(e==t)return o;let a=Si(i[e],s),l=Si(i[e+1],s);e+=n,r[o++]=a,r[o++]=l;let h,c;do if(h=Si(i[e],s),c=Si(i[e+1],s),e+=n,e==t)return r[o++]=h,r[o++]=c,o;while(h==a&&c==l);for(;e<t;){const d=Si(i[e],s),u=Si(i[e+1],s);if(e+=n,d==h&&u==c)continue;const f=h-a,g=c-l,w=d-a,M=u-l;if(f*M==g*w&&(f<0&&w<f||f==w||f>0&&w>f)&&(g<0&&M<g||g==M||g>0&&M>g)){h=d,c=u;continue}r[o++]=h,r[o++]=c,a=h,l=c,h=d,c=u}return r[o++]=h,r[o++]=c,o}function Ka(i,e,t,n,s,r,o,a){for(let l=0,h=t.length;l<h;++l){const c=t[l];o=ff(i,e,c,n,s,r,o),a.push(o),e=c}return o}function gf(i,e,t,n,s,r,o,a){for(let l=0,h=t.length;l<h;++l){const c=t[l],d=[];o=Ka(i,e,c,n,s,r,o,d),a.push(d),e=c[c.length-1]}return o}function hi(i,e,t,n,s){s=s!==void 0?s:[];let r=0;for(let o=e;o<t;o+=n)s[r++]=i.slice(o,o+n);return s.length=r,s}function as(i,e,t,n,s){s=s!==void 0?s:[];let r=0;for(let o=0,a=t.length;o<a;++o){const l=t[o];s[r++]=hi(i,e,l,n,s[r]),e=l}return s.length=r,s}function Ho(i,e,t,n,s){s=s!==void 0?s:[];let r=0;for(let o=0,a=t.length;o<a;++o){const l=t[o];s[r++]=l.length===1&&l[0]===e?[]:as(i,e,l,n,s[r]),e=l[l.length-1]}return s.length=r,s}function fc(i,e,t,n){let s=0,r=i[t-n],o=i[t-n+1];for(;e<t;e+=n){const a=i[e],l=i[e+1];s+=o*a-r*l,r=a,o=l}return s/2}function gc(i,e,t,n){let s=0;for(let r=0,o=t.length;r<o;++r){const a=t[r];s+=fc(i,e,a,n),e=a}return s}function wf(i,e,t,n){let s=0;for(let r=0,o=t.length;r<o;++r){const a=t[r];s+=gc(i,e,a,n),e=a[a.length-1]}return s}class ls extends Hi{constructor(e,t){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}clone(){return new ls(this.flatCoordinates.slice(),this.layout)}closestPointXY(e,t,n,s){return s<zi(this.getExtent(),e,t)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Ea(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Sa(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,t,n,s))}getArea(){return fc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return hi(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){const t=[];return t.length=Vr(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,0),new ls(t,"XY")}getType(){return"LinearRing"}intersectsExtent(e){return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=jr(this.flatCoordinates,0,e,this.stride),this.changed()}}let Mr=class wc extends Hi{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){const e=new wc(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,n,s){const r=this.flatCoordinates,o=Oi(e,t,r[0],r[1]);if(o<s){const a=this.stride;for(let l=0;l<a;++l)n[l]=r[l];return n.length=a,o}return s}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(e){return Hh(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return fa(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=uf(this.flatCoordinates,0,e,this.stride),this.changed()}};function Mf(i,e,t,n,s){return!Vh(s,function(o){return!Ki(i,e,t,n,o[0],o[1])})}function Ki(i,e,t,n,s,r){let o=0,a=i[t-n],l=i[t-n+1];for(;e<t;e+=n){const h=i[e],c=i[e+1];l<=r?c>r&&(h-a)*(r-l)-(s-a)*(c-l)>0&&o++:c<=r&&(h-a)*(r-l)-(s-a)*(c-l)<0&&o--,a=h,l=c}return o!==0}function Aa(i,e,t,n,s,r){if(t.length===0||!Ki(i,e,t[0],n,s,r))return!1;for(let o=1,a=t.length;o<a;++o)if(Ki(i,t[o-1],t[o],n,s,r))return!1;return!0}function mf(i,e,t,n,s,r){if(t.length===0)return!1;for(let o=0,a=t.length;o<a;++o){const l=t[o];if(Aa(i,e,l,n,s,r))return!0;e=l[l.length-1]}return!1}function Pa(i,e,t,n,s,r,o){let a,l,h,c,d,u,f;const g=s[r+1],w=[];for(let T=0,y=t.length;T<y;++T){const x=t[T];for(c=i[x-n],u=i[x-n+1],a=e;a<x;a+=n)d=i[a],f=i[a+1],(g<=u&&f<=g||u<=g&&g<=f)&&(h=(g-u)/(f-u)*(d-c)+c,w.push(h)),c=d,u=f}let M=NaN,m=-1/0;for(w.sort(mi),c=w[0],a=1,l=w.length;a<l;++a){d=w[a];const T=Math.abs(d-c);T>m&&(h=(c+d)/2,Aa(i,e,t,n,h,g)&&(M=h,m=T)),c=d}return isNaN(M)&&(M=s[r]),o?(o.push(M,g,m),o):[M,g,m]}function Mc(i,e,t,n,s){let r=[];for(let o=0,a=t.length;o<a;++o){const l=t[o];r=Pa(i,e,l,n,s,2*o,r),e=l[l.length-1]}return r}function mc(i,e,t,n,s){let r;for(e+=n;e<t;e+=n)if(r=s(i.slice(e-n,e),i.slice(e,e+n)),r)return r;return!1}function Xr(i,e,t,n,s){const r=jh(nt(),i,e,t,n);return Xe(s,r)?Ct(s,r)||r[0]>=s[0]&&r[2]<=s[2]||r[1]>=s[1]&&r[3]<=s[3]?!0:mc(i,e,t,n,function(o,a){return Eu(s,o,a)}):!1}function Tf(i,e,t,n,s){for(let r=0,o=t.length;r<o;++r){if(Xr(i,e,t[r],n,s))return!0;e=t[r]}return!1}function Tc(i,e,t,n,s){return!!(Xr(i,e,t,n,s)||Ki(i,e,t,n,s[0],s[1])||Ki(i,e,t,n,s[0],s[3])||Ki(i,e,t,n,s[2],s[1])||Ki(i,e,t,n,s[2],s[3]))}function yc(i,e,t,n,s){if(!Tc(i,e,t[0],n,s))return!1;if(t.length===1)return!0;for(let r=1,o=t.length;r<o;++r)if(Mf(i,t[r-1],t[r],n,s)&&!Xr(i,t[r-1],t[r],n,s))return!1;return!0}function yf(i,e,t,n,s){for(let r=0,o=t.length;r<o;++r){const a=t[r];if(yc(i,e,a,n,s))return!0;e=a[a.length-1]}return!1}function xf(i,e,t,n){for(;e<t-n;){for(let s=0;s<n;++s){const r=i[e+s];i[e+s]=i[t-n+s],i[t-n+s]=r}e+=n,t-=n}}function Oa(i,e,t,n){let s=0,r=i[t-n],o=i[t-n+1];for(;e<t;e+=n){const a=i[e],l=i[e+1];s+=(a-r)*(l+o),r=a,o=l}return s===0?void 0:s>0}function Da(i,e,t,n,s){s=s!==void 0?s:!1;for(let r=0,o=t.length;r<o;++r){const a=t[r],l=Oa(i,e,a,n);if(r===0){if(s&&l||!s&&!l)return!1}else if(s&&!l||!s&&l)return!1;e=a}return!0}function xc(i,e,t,n,s){for(let r=0,o=t.length;r<o;++r){const a=t[r];if(!Da(i,e,a,n,s))return!1;a.length&&(e=a[a.length-1])}return!0}function mr(i,e,t,n,s){s=s!==void 0?s:!1;for(let r=0,o=t.length;r<o;++r){const a=t[r],l=Oa(i,e,a,n);(r===0?s&&l||!s&&!l:s&&!l||!s&&l)&&xf(i,e,a,n),e=a}return e}function Bo(i,e,t,n,s){for(let r=0,o=t.length;r<o;++r)e=mr(i,e,t[r],n,s);return e}function _f(i,e){const t=[];let n=0,s=0,r;for(let o=0,a=e.length;o<a;++o){const l=e[o],h=Oa(i,n,l,2);if(r===void 0&&(r=h),h===r)t.push(e.slice(s,o+1));else{if(t.length===0)continue;t[t.length-1].push(e[s])}s=o+1,n=l}return t}class Ut extends Hi{constructor(e,t,n){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,t!==void 0&&n?(this.setFlatCoordinates(t,e),this.ends_=n):this.setCoordinates(e,t)}appendLinearRing(e){this.flatCoordinates?bt(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new Ut(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,t,n,s){return s<zi(this.getExtent(),e,t)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(La(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Ia(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,t,n,s))}containsXY(e,t){return Aa(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,t)}getArea(){return gc(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(e){let t;return e!==void 0?(t=this.getOrientedFlatCoordinates().slice(),mr(t,0,this.ends_,this.stride,e)):t=this.flatCoordinates,as(t,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const e=mt(this.getExtent());this.flatInteriorPoint_=Pa(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new Mr(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(e){return e<0||this.ends_.length<=e?null:new ls(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLinearRings(){const e=this.layout,t=this.flatCoordinates,n=this.ends_,s=[];let r=0;for(let o=0,a=n.length;o<a;++o){const l=n[o],h=new ls(t.slice(r,l),e);s.push(h),r=l}return s}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;Da(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=mr(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const t=[],n=[];return t.length=Ka(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),t,0,n),new Ut(t,"XY",n)}getType(){return"Polygon"}intersectsExtent(e){return yc(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const n=Es(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}}function jo(i){if(An(i))throw new Error("Cannot create polygon from empty extent");const e=i[0],t=i[1],n=i[2],s=i[3],r=[e,t,e,s,n,s,n,t,e,t];return new Ut(r,"XY",[r.length])}function B_(i,e,t){e=e||32;const n=i.getStride(),s=i.getLayout(),r=i.getCenter(),o=n*(e+1),a=new Array(o);for(let c=0;c<o;c+=n){a[c]=0,a[c+1]=0;for(let d=2;d<n;d++)a[c+d]=r[d]}const l=[a.length],h=new Ut(a,s,l);return pf(h,r,i.getRadius()),h}function pf(i,e,t,n){const s=i.getFlatCoordinates(),r=i.getStride(),o=s.length/r-1,a=0;for(let l=0;l<=o;++l){const h=l*r,c=a+gi(l,o)*2*Math.PI/o;s[h]=e[0]+t*Math.cos(c),s[h+1]=e[1]+t*Math.sin(c)}i.changed()}const uo=0;class lt extends Tt{constructor(e){super(),this.on,this.once,this.un,e=Object.assign({},e),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=Ta(e.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,e.projection&&ku(),e.center&&(e.center=zt(e.center,this.projection_)),e.extent&&(e.extent=Ii(e.extent,this.projection_)),this.applyOptions_(e)}applyOptions_(e){const t=Object.assign({},e);for(const a in Je)delete t[a];this.setProperties(t,!0);const n=vf(e);this.maxResolution_=n.maxResolution,this.minResolution_=n.minResolution,this.zoomFactor_=n.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=n.minZoom;const s=Cf(e),r=n.constraint,o=Rf(e);this.constraints_={center:s,resolution:r,rotation:o},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)}get padding(){return this.padding_}set padding(e){let t=this.padding_;this.padding_=e;const n=this.getCenterInternal();if(n){const s=e||[0,0,0,0];t=t||[0,0,0,0];const r=this.getResolution(),o=r/2*(s[3]-t[3]+t[1]-s[1]),a=r/2*(s[0]-t[0]+t[2]-s[2]);this.setCenterInternal([n[0]+o,n[1]-a])}}getUpdatedOptions_(e){const t=this.getProperties();return t.resolution!==void 0?t.resolution=this.getResolution():t.zoom=this.getZoom(),t.center=this.getCenterInternal(),t.rotation=this.getRotation(),Object.assign({},t,e)}animate(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);const t=new Array(arguments.length);for(let n=0;n<t.length;++n){let s=arguments[n];s.center&&(s=Object.assign({},s),s.center=zt(s.center,this.getProjection())),s.anchor&&(s=Object.assign({},s),s.anchor=zt(s.anchor,this.getProjection())),t[n]=s}this.animateInternal.apply(this,t)}animateInternal(e){let t=arguments.length,n;t>1&&typeof arguments[t-1]=="function"&&(n=arguments[t-1],--t);let s=0;for(;s<t&&!this.isDef();++s){const c=arguments[s];c.center&&this.setCenterInternal(c.center),c.zoom!==void 0?this.setZoom(c.zoom):c.resolution&&this.setResolution(c.resolution),c.rotation!==void 0&&this.setRotation(c.rotation)}if(s===t){n&&qs(n,!0);return}let r=Date.now(),o=this.targetCenter_.slice(),a=this.targetResolution_,l=this.targetRotation_;const h=[];for(;s<t;++s){const c=arguments[s],d={start:r,complete:!1,anchor:c.anchor,duration:c.duration!==void 0?c.duration:1e3,easing:c.easing||rf,callback:n};if(c.center&&(d.sourceCenter=o,d.targetCenter=c.center.slice(),o=d.targetCenter),c.zoom!==void 0?(d.sourceResolution=a,d.targetResolution=this.getResolutionForZoom(c.zoom),a=d.targetResolution):c.resolution&&(d.sourceResolution=a,d.targetResolution=c.resolution,a=d.targetResolution),c.rotation!==void 0){d.sourceRotation=l;const u=gi(c.rotation-l+Math.PI,2*Math.PI)-Math.PI;d.targetRotation=l+u,l=d.targetRotation}bf(d)?d.complete=!0:r+=d.duration,h.push(d)}this.animations_.push(h),this.setHint(Le.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[Le.ANIMATING]>0}getInteracting(){return this.hints_[Le.INTERACTING]>0}cancelAnimations(){this.setHint(Le.ANIMATING,-this.hints_[Le.ANIMATING]);let e;for(let t=0,n=this.animations_.length;t<n;++t){const s=this.animations_[t];if(s[0].callback&&qs(s[0].callback,!1),!e)for(let r=0,o=s.length;r<o;++r){const a=s[r];if(!a.complete){e=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;const e=Date.now();let t=!1;for(let n=this.animations_.length-1;n>=0;--n){const s=this.animations_[n];let r=!0;for(let o=0,a=s.length;o<a;++o){const l=s[o];if(l.complete)continue;const h=e-l.start;let c=l.duration>0?h/l.duration:1;c>=1?(l.complete=!0,c=1):r=!1;const d=l.easing(c);if(l.sourceCenter){const u=l.sourceCenter[0],f=l.sourceCenter[1],g=l.targetCenter[0],w=l.targetCenter[1];this.nextCenter_=l.targetCenter;const M=u+d*(g-u),m=f+d*(w-f);this.targetCenter_=[M,m]}if(l.sourceResolution&&l.targetResolution){const u=d===1?l.targetResolution:l.sourceResolution+d*(l.targetResolution-l.sourceResolution);if(l.anchor){const f=this.getViewportSize_(this.getRotation()),g=this.constraints_.resolution(u,0,f,!0);this.targetCenter_=this.calculateCenterZoom(g,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=u,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){const u=d===1?gi(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+d*(l.targetRotation-l.sourceRotation);if(l.anchor){const f=this.constraints_.rotation(u,!0);this.targetCenter_=this.calculateCenterRotate(f,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=u}if(this.applyTargetState_(!0),t=!0,!l.complete)break}if(r){this.animations_[n]=null,this.setHint(Le.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;const o=s[0].callback;o&&qs(o,!0)}}this.animations_=this.animations_.filter(Boolean),t&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(e,t){let n;const s=this.getCenterInternal();return s!==void 0&&(n=[s[0]-t[0],s[1]-t[1]],Ma(n,e-this.getRotation()),Au(n,t)),n}calculateCenterZoom(e,t){let n;const s=this.getCenterInternal(),r=this.getResolution();if(s!==void 0&&r!==void 0){const o=t[0]-e*(t[0]-s[0])/r,a=t[1]-e*(t[1]-s[1])/r;n=[o,a]}return n}getViewportSize_(e){const t=this.viewportSize_;if(e){const n=t[0],s=t[1];return[Math.abs(n*Math.cos(e))+Math.abs(s*Math.sin(e)),Math.abs(n*Math.sin(e))+Math.abs(s*Math.cos(e))]}return t}setViewportSize(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){const e=this.getCenterInternal();return e&&zo(e,this.getProjection())}getCenterInternal(){return this.get(Je.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()}calculateExtent(e){const t=this.calculateExtentInternal(e);return tc(t,this.getProjection())}calculateExtentInternal(e){e=e||this.getViewportSizeMinusPadding_();const t=this.getCenterInternal();J(t,"The view center is not defined");const n=this.getResolution();J(n!==void 0,"The view resolution is not defined");const s=this.getRotation();return J(s!==void 0,"The view rotation is not defined"),rs(t,n,s,e)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))}setConstrainResolution(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))}getProjection(){return this.projection_}getResolution(){return this.get(Je.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(e,t){return this.getResolutionForExtentInternal(Ii(e,this.getProjection()),t)}getResolutionForExtentInternal(e,t){t=t||this.getViewportSizeMinusPadding_();const n=Q(e)/t[0],s=Ke(e)/t[1];return Math.max(n,s)}getResolutionForValueFunction(e){e=e||2;const t=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,s=Math.log(t/n)/Math.log(e);return(function(r){return t/Math.pow(e,r*s)})}getRotation(){return this.get(Je.ROTATION)}getValueForResolutionFunction(e){const t=Math.log(e||2),n=this.getConstrainedResolution(this.maxResolution_),s=this.minResolution_,r=Math.log(n/s)/t;return(function(o){return Math.log(n/o)/t/r})}getViewportSizeMinusPadding_(e){let t=this.getViewportSize_(e);const n=this.padding_;return n&&(t=[t[0]-n[1]-n[3],t[1]-n[0]-n[2]]),t}getState(){const e=this.getProjection(),t=this.getResolution(),n=this.getRotation();let s=this.getCenterInternal();const r=this.padding_;if(r){const o=this.getViewportSizeMinusPadding_();s=fo(s,this.getViewportSize_(),[o[0]/2+r[3],o[1]/2+r[0]],t,n)}return{center:s.slice(0),projection:e!==void 0?e:null,resolution:t,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let e;const t=this.getResolution();return t!==void 0&&(e=this.getZoomForResolution(t)),e}getZoomForResolution(e){let t=this.minZoom_||0,n,s;if(this.resolutions_){const r=Fr(this.resolutions_,e,1);t=r,n=this.resolutions_[r],r==this.resolutions_.length-1?s=2:s=n/this.resolutions_[r+1]}else n=this.maxResolution_,s=this.zoomFactor_;return t+Math.log(n/e)/Math.log(s)}getResolutionForZoom(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;const t=we(Math.floor(e),0,this.resolutions_.length-2),n=this.resolutions_[t]/this.resolutions_[t+1];return this.resolutions_[t]/Math.pow(n,we(e-t,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)}fit(e,t){let n;if(J(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(e)){J(!An(e),"Cannot fit empty extent provided as `geometry`");const s=Ii(e,this.getProjection());n=jo(s)}else if(e.getType()==="Circle"){const s=Ii(e.getExtent(),this.getProjection());n=jo(s),n.rotate(this.getRotation(),mt(s))}else n=e;this.fitInternal(n,t)}rotatedExtentForGeometry(e){const t=this.getRotation(),n=Math.cos(t),s=Math.sin(-t),r=e.getFlatCoordinates(),o=e.getStride();let a=1/0,l=1/0,h=-1/0,c=-1/0;for(let d=0,u=r.length;d<u;d+=o){const f=r[d]*n-r[d+1]*s,g=r[d]*s+r[d+1]*n;a=Math.min(a,f),l=Math.min(l,g),h=Math.max(h,f),c=Math.max(c,g)}return[a,l,h,c]}fitInternal(e,t){t=t||{};let n=t.size;n||(n=this.getViewportSizeMinusPadding_());const s=t.padding!==void 0?t.padding:[0,0,0,0],r=t.nearest!==void 0?t.nearest:!1;let o;t.minResolution!==void 0?o=t.minResolution:t.maxZoom!==void 0?o=this.getResolutionForZoom(t.maxZoom):o=0;const a=this.rotatedExtentForGeometry(e);let l=this.getResolutionForExtentInternal(a,[n[0]-s[1]-s[3],n[1]-s[0]-s[2]]);l=isNaN(l)?o:Math.max(l,o),l=this.getConstrainedResolution(l,r?0:1);const h=this.getRotation(),c=Math.sin(h),d=Math.cos(h),u=mt(a);u[0]+=(s[1]-s[3])/2*l,u[1]+=(s[0]-s[2])/2*l;const f=u[0]*d-u[1]*c,g=u[1]*d+u[0]*c,w=this.getConstrainedCenter([f,g],l),M=t.callback?t.callback:yn;t.duration!==void 0?this.animateInternal({resolution:l,center:w,duration:t.duration,easing:t.easing},M):(this.targetResolution_=l,this.targetCenter_=w,this.applyTargetState_(!1,!0),qs(M,!0))}centerOn(e,t,n){this.centerOnInternal(zt(e,this.getProjection()),t,n)}centerOnInternal(e,t,n){this.setCenterInternal(fo(e,t,n,this.getResolution(),this.getRotation()))}calculateCenterShift(e,t,n,s){let r;const o=this.padding_;if(o&&e){const a=this.getViewportSizeMinusPadding_(-n),l=fo(e,s,[a[0]/2+o[3],a[1]/2+o[0]],t,n);r=[e[0]-l[0],e[1]-l[1]]}return r}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(e){const t=zo(this.targetCenter_,this.getProjection());this.setCenter([t[0]+e[0],t[1]+e[1]])}adjustCenterInternal(e){const t=this.targetCenter_;this.setCenterInternal([t[0]+e[0],t[1]+e[1]])}adjustResolution(e,t){t=t&&zt(t,this.getProjection()),this.adjustResolutionInternal(e,t)}adjustResolutionInternal(e,t){const n=this.getAnimating()||this.getInteracting(),s=this.getViewportSize_(this.getRotation()),r=this.constraints_.resolution(this.targetResolution_*e,0,s,n);t&&(this.targetCenter_=this.calculateCenterZoom(r,t)),this.targetResolution_*=e,this.applyTargetState_()}adjustZoom(e,t){this.adjustResolution(Math.pow(this.zoomFactor_,-e),t)}adjustRotation(e,t){t&&(t=zt(t,this.getProjection())),this.adjustRotationInternal(e,t)}adjustRotationInternal(e,t){const n=this.getAnimating()||this.getInteracting(),s=this.constraints_.rotation(this.targetRotation_+e,n);t&&(this.targetCenter_=this.calculateCenterRotate(s,t)),this.targetRotation_+=e,this.applyTargetState_()}setCenter(e){this.setCenterInternal(e&&zt(e,this.getProjection()))}setCenterInternal(e){this.targetCenter_=e,this.applyTargetState_()}setHint(e,t){return this.hints_[e]+=t,this.changed(),this.hints_[e]}setResolution(e){this.targetResolution_=e,this.applyTargetState_()}setRotation(e){this.targetRotation_=e,this.applyTargetState_()}setZoom(e){this.setResolution(this.getResolutionForZoom(e))}applyTargetState_(e,t){const n=this.getAnimating()||this.getInteracting()||t,s=this.constraints_.rotation(this.targetRotation_,n),r=this.getViewportSize_(s),o=this.constraints_.resolution(this.targetResolution_,0,r,n),a=this.constraints_.center(this.targetCenter_,o,r,n,this.calculateCenterShift(this.targetCenter_,o,s,r));this.get(Je.ROTATION)!==s&&this.set(Je.ROTATION,s),this.get(Je.RESOLUTION)!==o&&(this.set(Je.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!a||!this.get(Je.CENTER)||!ur(this.get(Je.CENTER),a))&&this.set(Je.CENTER,a),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(e,t,n){e=e!==void 0?e:200;const s=t||0,r=this.constraints_.rotation(this.targetRotation_),o=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,s,o),l=this.constraints_.center(this.targetCenter_,a,o,!1,this.calculateCenterShift(this.targetCenter_,a,r,o));if(e===0&&!this.cancelAnchor_){this.targetResolution_=a,this.targetRotation_=r,this.targetCenter_=l,this.applyTargetState_();return}n=n||(e===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==a||this.getRotation()!==r||!this.getCenterInternal()||!ur(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:r,center:l,resolution:a,duration:e,easing:Pn,anchor:n}))}beginInteraction(){this.resolveConstraints(0),this.setHint(Le.INTERACTING,1)}endInteraction(e,t,n){n=n&&zt(n,this.getProjection()),this.endInteractionInternal(e,t,n)}endInteractionInternal(e,t,n){this.getInteracting()&&(this.setHint(Le.INTERACTING,-1),this.resolveConstraints(e,t,n))}getConstrainedCenter(e,t){const n=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,t||this.getResolution(),n)}getConstrainedZoom(e,t){const n=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(n,t))}getConstrainedResolution(e,t){t=t||0;const n=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,t,n)}}function qs(i,e){setTimeout(function(){i(e)},0)}function Cf(i){if(i.extent!==void 0){const t=i.smoothExtentConstraint!==void 0?i.smoothExtentConstraint:!0;return Il(i.extent,i.constrainOnlyCenter,t)}const e=Ta(i.projection,"EPSG:3857");if(i.multiWorld!==!0&&e.isGlobal()){const t=e.getExtent().slice();return t[0]=-1/0,t[2]=1/0,Il(t,!1,!1)}return Qu}function vf(i){let e,t,n,o=i.minZoom!==void 0?i.minZoom:uo,a=i.maxZoom!==void 0?i.maxZoom:28;const l=i.zoomFactor!==void 0?i.zoomFactor:2,h=i.multiWorld!==void 0?i.multiWorld:!1,c=i.smoothResolutionConstraint!==void 0?i.smoothResolutionConstraint:!0,d=i.showFullExtent!==void 0?i.showFullExtent:!1,u=Ta(i.projection,"EPSG:3857"),f=u.getExtent();let g=i.constrainOnlyCenter,w=i.extent;if(!h&&!w&&u.isGlobal()&&(g=!1,w=f),i.resolutions!==void 0){const M=i.resolutions;t=M[o],n=M[a]!==void 0?M[a]:M[M.length-1],i.constrainResolution?e=ef(M,c,!g&&w,d):e=Kl(t,n,c,!g&&w,d)}else{const m=(f?Math.max(Q(f),Ke(f)):360*_n.degrees/u.getMetersPerUnit())/Ca/Math.pow(2,uo),T=m/Math.pow(2,28-uo);t=i.maxResolution,t!==void 0?o=0:t=m/Math.pow(l,o),n=i.minResolution,n===void 0&&(i.maxZoom!==void 0?i.maxResolution!==void 0?n=t/Math.pow(l,a):n=m/Math.pow(l,a):n=T),a=o+Math.floor(Math.log(t/n)/Math.log(l)),n=t/Math.pow(l,a-o),i.constrainResolution?e=tf(l,t,n,c,!g&&w,d):e=Kl(t,n,c,!g&&w,d)}return{constraint:e,maxResolution:t,minResolution:n,minZoom:o,zoomFactor:l}}function Rf(i){if(i.enableRotation!==void 0?i.enableRotation:!0){const t=i.constrainRotation;return t===void 0||t===!0?sf():t===!1?Al:typeof t=="number"?nf(t):Al}return ba}function bf(i){return!(i.sourceCenter&&i.targetCenter&&!ur(i.sourceCenter,i.targetCenter)||i.sourceResolution!==i.targetResolution||i.sourceRotation!==i.targetRotation)}function fo(i,e,t,n,s){const r=Math.cos(-s);let o=Math.sin(-s),a=i[0]*r-i[1]*o,l=i[1]*r+i[0]*o;a+=(e[0]/2-t[0])*n,l+=(t[1]-e[1]/2)*n,o=-o;const h=a*r-l*o,c=l*r+a*o;return[h,c]}class Ur extends ac{constructor(e){const t=Object.assign({},e);delete t.source,super(t),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,e.render&&(this.render=e.render),e.map&&this.setMap(e.map),this.addChangeListener(le.SOURCE,this.handleSourcePropertyChange_);const n=e.source?e.source:null;this.setSource(n)}getLayersArray(e){return e=e||[],e.push(this),e}getLayerStatesArray(e){return e=e||[],e.push(this.getLayerState()),e}getSource(){return this.get(le.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){const e=this.getSource();return e?e.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(ce(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;const e=this.getSource();e&&(this.sourceChangeKey_=q(e,W.CHANGE,this.handleSourceChange_,this),e.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(e){return this.renderer_?this.renderer_.getFeatures(e):Promise.resolve([])}getData(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)}isVisible(e){let t;const n=this.getMapInternal();!e&&n&&(e=n.getView()),e instanceof lt?t={viewState:e.getState(),extent:e.calculateExtent()}:t=e,!t.layerStatesArray&&n&&(t.layerStatesArray=n.getLayerGroup().getLayerStatesArray());let s;t.layerStatesArray?s=t.layerStatesArray.find(o=>o.layer===this):s=this.getLayerState();const r=this.getExtent();return ka(s,t.viewState)&&(!r||Xe(r,t.extent))}getAttributions(e){if(!this.isVisible(e))return[];let t;const n=this.getSource();if(n&&(t=n.getAttributions()),!t)return[];const s=e instanceof lt?e.getViewStateAndExtent():e;let r=t(s);return Array.isArray(r)||(r=[r]),r}render(e,t){const n=this.getRenderer();return n.prepareFrame(e)?(this.rendered=!0,n.renderFrame(e,t)):null}unrender(){this.rendered=!1}setMapInternal(e){e||this.unrender(),this.set(le.MAP,e)}getMapInternal(){return this.get(le.MAP)}setMap(e){this.mapPrecomposeKey_&&(ce(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(ce(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=q(e,Et.PRECOMPOSE,function(t){const s=t.frameState.layerStatesArray,r=this.getLayerState(!1);J(!s.some(function(o){return o.layer===r.layer}),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),s.push(r)},this),this.mapRenderKey_=q(this,W.CHANGE,e.render,e),this.changed())}setSource(e){this.set(le.SOURCE,e)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}disposeInternal(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),super.disposeInternal()}}function ka(i,e){if(!i.visible)return!1;const t=e.resolution;if(t<i.minResolution||t>=i.maxResolution)return!1;const n=e.zoom;return n>i.minZoom&&n<=i.maxZoom}class Ef extends ca{constructor(e){super(),this.map_=e}dispatchRenderEvent(e,t){G()}calculateMatrices2D(e){const t=e.viewState,n=e.coordinateToPixelTransform,s=e.pixelToCoordinateTransform;Xt(n,e.size[0]/2,e.size[1]/2,1/t.resolution,-1/t.resolution,-t.rotation,-t.center[0],-t.center[1]),xa(s,n)}forEachFeatureAtCoordinate(e,t,n,s,r,o,a,l){let h;const c=t.viewState;function d(x,_,p,R){return r.call(o,_,x?p:null,R)}const u=c.projection,f=Yh(e.slice(),u),g=[[0,0]];if(u.canWrapX()&&s){const x=u.getExtent(),_=Q(x);g.push([-_,0],[_,0])}const w=t.layerStatesArray,M=w.length,m=[],T=[];for(let x=0;x<g.length;x++)for(let _=M-1;_>=0;--_){const p=w[_],R=p.layer;if(R.hasRenderer()&&ka(p,c)&&a.call(l,R)){const C=R.getRenderer(),I=R.getSource();if(C&&I){const D=I.getWrapX()?f:e,j=d.bind(null,p.managed);T[0]=D[0]+g[x][0],T[1]=D[1]+g[x][1],h=C.forEachFeatureAtCoordinate(T,t,n,j,m)}if(h)return h}}if(m.length===0)return;const y=1/m.length;return m.forEach((x,_)=>x.distanceSq+=_*y),m.sort((x,_)=>x.distanceSq-_.distanceSq),m.some(x=>h=x.callback(x.feature,x.layer,x.geometry)),h}hasFeatureAtCoordinate(e,t,n,s,r,o){return this.forEachFeatureAtCoordinate(e,t,n,s,is,this,r,o)!==void 0}getMap(){return this.map_}renderFrame(e){G()}flushDeclutterItems(e){}scheduleExpireIconCache(e){wr.canExpireCache()&&e.postRenderFunctions.push(Lf)}}function Lf(i,e){wr.expire()}class _c extends At{constructor(e,t,n,s){super(e),this.inversePixelTransform=t,this.frameState=n,this.context=s}}const pc="10px sans-serif",Ve="#000",vn="round",Bt=[],jt=0,Rn="round",hs=10,cs="#000",ds="center",Tr="middle",Ai=[0,0,0,0],us=1,Ht=new Tt;let tn=null,Vo;const Xo={},Sf=(function(){const e="32px ",t=["monospace","serif"],n=t.length,s="wmytzilWMYTZIL@#/&?$%10";let r,o;function a(h,c,d){let u=!0;for(let f=0;f<n;++f){const g=t[f];if(o=yr(h+" "+c+" "+e+g,s),d!=g){const w=yr(h+" "+c+" "+e+d+","+g,s);u=u&&w!=o}}return!!u}function l(){let h=!0;const c=Ht.getKeys();for(let d=0,u=c.length;d<u;++d){const f=c[d];Ht.get(f)<100&&(a.apply(this,f.split(`
`))?(_s(Xo),tn=null,Vo=void 0,Ht.set(f,100)):(Ht.set(f,Ht.get(f)+1,!0),h=!1))}h&&(clearInterval(r),r=void 0)}return function(h){const c=Nh(h);if(!c)return;const d=c.families;for(let u=0,f=d.length;u<f;++u){const g=d[u],w=c.style+`
`+c.weight+`
`+g;Ht.get(w)===void 0&&(Ht.set(w,100,!0),a(c.style,c.weight,g)||(Ht.set(w,0,!0),r===void 0&&(r=setInterval(l,32))))}}})(),If=(function(){let i;return function(e){let t=Xo[e];if(t==null){if(da){const n=Nh(e),s=Cc(e,"Žg");t=(isNaN(Number(n.lineHeight))?1.2:Number(n.lineHeight))*(s.actualBoundingBoxAscent+s.actualBoundingBoxDescent)}else i||(i=document.createElement("div"),i.innerHTML="M",i.style.minHeight="0",i.style.maxHeight="none",i.style.height="auto",i.style.padding="0",i.style.border="none",i.style.position="absolute",i.style.display="block",i.style.left="-99999px"),i.style.font=e,document.body.appendChild(i),t=i.offsetHeight,document.body.removeChild(i);Xo[e]=t}return t}})();function Cc(i,e){return tn||(tn=Ne(1,1)),i!=Vo&&(tn.font=i,Vo=tn.font),tn.measureText(e)}function yr(i,e){return Cc(i,e).width}function kl(i,e,t){if(e in t)return t[e];const n=e.split(`
`).reduce((s,r)=>Math.max(s,yr(i,r)),0);return t[e]=n,n}function Kf(i,e){const t=[],n=[],s=[];let r=0,o=0,a=0,l=0;for(let h=0,c=e.length;h<=c;h+=2){const d=e[h];if(d===`
`||h===c){r=Math.max(r,o),s.push(o),o=0,a+=l;continue}const u=e[h+1]||i.font,f=yr(u,d);t.push(f),o+=f;const g=If(u);n.push(g),l=Math.max(l,g)}return{width:r,height:a,widths:t,heights:n,lineWidths:s}}function Af(i,e,t,n,s,r,o,a,l,h,c){i.save(),t!==1&&(i.globalAlpha*=t),e&&i.transform.apply(i,e),n.contextInstructions?(i.translate(l,h),i.scale(c[0],c[1]),Pf(n,i)):c[0]<0||c[1]<0?(i.translate(l,h),i.scale(c[0],c[1]),i.drawImage(n,s,r,o,a,0,0,o,a)):i.drawImage(n,s,r,o,a,l,h,o*c[0],a*c[1]),i.restore()}function Pf(i,e){const t=i.contextInstructions;for(let n=0,s=t.length;n<s;n+=2)Array.isArray(t[n+1])?e[t[n]].apply(e,t[n+1]):e[t[n]]=t[n+1]}class Of extends Ef{constructor(e){super(e),this.fontChangeListenerKey_=q(Ht,Di.PROPERTYCHANGE,e.redrawText.bind(e)),this.element_=document.createElement("div");const t=this.element_.style;t.position="absolute",t.width="100%",t.height="100%",t.zIndex="0",this.element_.className=Wi+" ol-layers";const n=e.getViewport();n.insertBefore(this.element_,n.firstChild||null),this.children_=[],this.renderedVisible_=!0,this.declutterLayers_=[]}dispatchRenderEvent(e,t){const n=this.getMap();if(n.hasListener(e)){const s=new _c(e,void 0,t);n.dispatchEvent(s)}}disposeInternal(){ce(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),super.disposeInternal()}renderFrame(e){if(!e){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(e),this.dispatchRenderEvent(Et.PRECOMPOSE,e);const t=e.layerStatesArray.sort(function(o,a){return o.zIndex-a.zIndex}),n=e.viewState;this.children_.length=0;const s=this.declutterLayers_;s.length=0;let r=null;for(let o=0,a=t.length;o<a;++o){const l=t[o];e.layerIndex=o;const h=l.layer,c=h.getSourceState();if(!ka(l,n)||c!="ready"&&c!="undefined"){h.unrender();continue}const d=h.render(e,r);d&&(d!==r&&(this.children_.push(d),r=d),"getDeclutter"in h&&s.push(h))}this.flushDeclutterItems(e),au(this.element_,this.children_),this.dispatchRenderEvent(Et.POSTCOMPOSE,e),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(e)}flushDeclutterItems(e){const t=this.declutterLayers_;for(let n=t.length-1;n>=0;--n)t[n].renderDeclutter(e);t.length=0}}class oi extends At{constructor(e,t){super(e),this.layer=t}}const go={LAYERS:"layers"};class Ci extends ac{constructor(e){e=e||{};const t=Object.assign({},e);delete t.layers;let n=e.layers;super(t),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(go.LAYERS,this.handleLayersChanged_),n?Array.isArray(n)?n=new ct(n.slice(),{unique:!0}):J(typeof n.getArray=="function","Expected `layers` to be an array or a `Collection`"):n=new ct(void 0,{unique:!0}),this.setLayers(n)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(ce),this.layersListenerKeys_.length=0;const e=this.getLayers();this.layersListenerKeys_.push(q(e,je.ADD,this.handleLayersAdd_,this),q(e,je.REMOVE,this.handleLayersRemove_,this));for(const n in this.listenerKeys_)this.listenerKeys_[n].forEach(ce);_s(this.listenerKeys_);const t=e.getArray();for(let n=0,s=t.length;n<s;n++){const r=t[n];this.registerLayerListeners_(r),this.dispatchEvent(new oi("addlayer",r))}this.changed()}registerLayerListeners_(e){const t=[q(e,Di.PROPERTYCHANGE,this.handleLayerChange_,this),q(e,W.CHANGE,this.handleLayerChange_,this)];e instanceof Ci&&t.push(q(e,"addlayer",this.handleLayerGroupAdd_,this),q(e,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[te(e)]=t}handleLayerGroupAdd_(e){this.dispatchEvent(new oi("addlayer",e.layer))}handleLayerGroupRemove_(e){this.dispatchEvent(new oi("removelayer",e.layer))}handleLayersAdd_(e){const t=e.element;this.registerLayerListeners_(t),this.dispatchEvent(new oi("addlayer",t)),this.changed()}handleLayersRemove_(e){const t=e.element,n=te(t);this.listenerKeys_[n].forEach(ce),delete this.listenerKeys_[n],this.dispatchEvent(new oi("removelayer",t)),this.changed()}getLayers(){return this.get(go.LAYERS)}setLayers(e){const t=this.getLayers();if(t){const n=t.getArray();for(let s=0,r=n.length;s<r;++s)this.dispatchEvent(new oi("removelayer",n[s]))}this.set(go.LAYERS,e)}getLayersArray(e){return e=e!==void 0?e:[],this.getLayers().forEach(function(t){t.getLayersArray(e)}),e}getLayerStatesArray(e){const t=e!==void 0?e:[],n=t.length;this.getLayers().forEach(function(o){o.getLayerStatesArray(t)});const s=this.getLayerState();let r=s.zIndex;!e&&s.zIndex===void 0&&(r=0);for(let o=n,a=t.length;o<a;o++){const l=t[o];l.opacity*=s.opacity,l.visible=l.visible&&s.visible,l.maxResolution=Math.min(l.maxResolution,s.maxResolution),l.minResolution=Math.max(l.minResolution,s.minResolution),l.minZoom=Math.max(l.minZoom,s.minZoom),l.maxZoom=Math.min(l.maxZoom,s.maxZoom),s.extent!==void 0&&(l.extent!==void 0?l.extent=wn(l.extent,s.extent):l.extent=s.extent),l.zIndex===void 0&&(l.zIndex=r)}return t}getSourceState(){return"ready"}}class nn extends At{constructor(e,t,n){super(e),this.map=t,this.frameState=n!==void 0?n:null}}class ri extends nn{constructor(e,t,n,s,r,o){super(e,t,r),this.originalEvent=n,this.pixel_=null,this.coordinate_=null,this.dragging=s!==void 0?s:!1,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(e){this.pixel_=e}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(e){this.coordinate_=e}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}}const fe={SINGLECLICK:"singleclick",CLICK:W.CLICK,DBLCLICK:W.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};class Df extends ps{constructor(e,t){super(e),this.map_=e,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=t===void 0?1:t,this.down_=null;const n=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=n,this.pointerdownListenerKey_=q(n,Po.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=q(n,Po.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(W.TOUCHMOVE,this.boundHandleTouchMove_,kh?{passive:!1}:!1)}emulateClick_(e){let t=new ri(fe.CLICK,this.map_,e);this.dispatchEvent(t),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,t=new ri(fe.DBLCLICK,this.map_,e),this.dispatchEvent(t)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;const n=new ri(fe.SINGLECLICK,this.map_,e);this.dispatchEvent(n)},250)}updateActivePointers_(e){const t=e,n=t.pointerId;if(t.type==fe.POINTERUP||t.type==fe.POINTERCANCEL){delete this.trackedTouches_[n];for(const s in this.trackedTouches_)if(this.trackedTouches_[s].target!==t.target){delete this.trackedTouches_[s];break}}else(t.type==fe.POINTERDOWN||t.type==fe.POINTERMOVE)&&(this.trackedTouches_[n]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(e){this.updateActivePointers_(e);const t=new ri(fe.POINTERUP,this.map_,e,void 0,void 0,this.activePointers_);this.dispatchEvent(t),this.emulateClicks_&&!t.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(e)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(ce),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(e){return e.button===0}handlePointerDown_(e){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(e);const t=new ri(fe.POINTERDOWN,this.map_,e,void 0,void 0,this.activePointers_);if(this.dispatchEvent(t),this.down_=new PointerEvent(e.type,e),Object.defineProperty(this.down_,"target",{writable:!1,value:e.target}),this.dragListenerKeys_.length===0){const n=this.map_.getOwnerDocument();this.dragListenerKeys_.push(q(n,fe.POINTERMOVE,this.handlePointerMove_,this),q(n,fe.POINTERUP,this.handlePointerUp_,this),q(this.element_,fe.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==n&&this.dragListenerKeys_.push(q(this.element_.getRootNode(),fe.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(e){if(this.isMoving_(e)){this.updateActivePointers_(e),this.dragging_=!0;const t=new ri(fe.POINTERDRAG,this.map_,e,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(t)}}relayMoveEvent_(e){this.originalPointerMoveEvent_=e;const t=!!(this.down_&&this.isMoving_(e));this.dispatchEvent(new ri(fe.POINTERMOVE,this.map_,e,t))}handleTouchMove_(e){const t=this.originalPointerMoveEvent_;(!t||t.defaultPrevented)&&(typeof e.cancelable!="boolean"||e.cancelable===!0)&&e.preventDefault()}isMoving_(e){return this.dragging_||Math.abs(e.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(e.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(ce(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(W.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(ce(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(ce),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}const xr=1/0;class kf{constructor(e,t){this.priorityFunction_=e,this.keyFunction_=t,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,_s(this.queuedElements_)}dequeue(){const e=this.elements_,t=this.priorities_,n=e[0];e.length==1?(e.length=0,t.length=0):(e[0]=e.pop(),t[0]=t.pop(),this.siftUp_(0));const s=this.keyFunction_(n);return delete this.queuedElements_[s],n}enqueue(e){J(!(this.keyFunction_(e)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");const t=this.priorityFunction_(e);return t!=xr?(this.elements_.push(e),this.priorities_.push(t),this.queuedElements_[this.keyFunction_(e)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(e){return e*2+1}getRightChildIndex_(e){return e*2+2}getParentIndex_(e){return e-1>>1}heapify_(){let e;for(e=(this.elements_.length>>1)-1;e>=0;e--)this.siftUp_(e)}isEmpty(){return this.elements_.length===0}isKeyQueued(e){return e in this.queuedElements_}isQueued(e){return this.isKeyQueued(this.keyFunction_(e))}siftUp_(e){const t=this.elements_,n=this.priorities_,s=t.length,r=t[e],o=n[e],a=e;for(;e<s>>1;){const l=this.getLeftChildIndex_(e),h=this.getRightChildIndex_(e),c=h<s&&n[h]<n[l]?h:l;t[e]=t[c],n[e]=n[c],e=c}t[e]=r,n[e]=o,this.siftDown_(a,e)}siftDown_(e,t){const n=this.elements_,s=this.priorities_,r=n[t],o=s[t];for(;t>e;){const a=this.getParentIndex_(t);if(s[a]>o)n[t]=n[a],s[t]=s[a],t=a;else break}n[t]=r,s[t]=o}reprioritize(){const e=this.priorityFunction_,t=this.elements_,n=this.priorities_;let s=0;const r=t.length;let o,a,l;for(a=0;a<r;++a)o=t[a],l=e(o),l==xr?delete this.queuedElements_[this.keyFunction_(o)]:(n[s]=l,t[s++]=o);t.length=s,n.length=s,this.heapify_()}}const F={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class Ff extends kf{constructor(e,t){super(function(n){return e.apply(null,n)},function(n){return n[0].getKey()}),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=t,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(e){const t=super.enqueue(e);return t&&e[0].addEventListener(W.CHANGE,this.boundHandleTileChange_),t}getTilesLoading(){return this.tilesLoading_}handleTileChange(e){const t=e.target,n=t.getState();if(n===F.LOADED||n===F.ERROR||n===F.EMPTY){n!==F.ERROR&&t.removeEventListener(W.CHANGE,this.boundHandleTileChange_);const s=t.getKey();s in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[s],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(e,t){let n=0,s,r,o;for(;this.tilesLoading_<e&&n<t&&this.getCount()>0;)r=this.dequeue()[0],o=r.getKey(),s=r.getState(),s===F.IDLE&&!(o in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[o]=!0,++this.tilesLoading_,++n,r.load())}}function Nf(i,e,t,n,s){if(!i||!(t in i.wantedTiles)||!i.wantedTiles[t][e.getKey()])return xr;const r=i.viewState.center,o=n[0]-r[0],a=n[1]-r[1];return 65536*Math.log(s)+Math.sqrt(o*o+a*a)/s}class vc extends In{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target});const t=e.className!==void 0?e.className:"ol-rotate",n=e.label!==void 0?e.label:"⇧",s=e.compassClassName!==void 0?e.compassClassName:"ol-compass";this.label_=null,typeof n=="string"?(this.label_=document.createElement("span"),this.label_.className=s,this.label_.textContent=n):(this.label_=n,this.label_.classList.add(s));const r=e.tipLabel?e.tipLabel:"Reset rotation",o=document.createElement("button");o.className=t+"-reset",o.setAttribute("type","button"),o.title=r,o.appendChild(this.label_),o.addEventListener(W.CLICK,this.handleClick_.bind(this),!1);const a=t+" "+Wi+" "+vs,l=this.element;l.className=a,l.appendChild(o),this.callResetNorth_=e.resetNorth?e.resetNorth:void 0,this.duration_=e.duration!==void 0?e.duration:250,this.autoHide_=e.autoHide!==void 0?e.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(Xs)}handleClick_(e){e.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){const t=this.getMap().getView();if(!t)return;const n=t.getRotation();n!==void 0&&(this.duration_>0&&n%(2*Math.PI)!==0?t.animate({rotation:0,duration:this.duration_,easing:Pn}):t.setRotation(0))}render(e){const t=e.frameState;if(!t)return;const n=t.viewState.rotation;if(n!=this.rotation_){const s="rotate("+n+"rad)";if(this.autoHide_){const r=this.element.classList.contains(Xs);!r&&n===0?this.element.classList.add(Xs):r&&n!==0&&this.element.classList.remove(Xs)}this.label_.style.transform=s}this.rotation_=n}}class Fa extends In{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target});const t=e.className!==void 0?e.className:"ol-zoom",n=e.delta!==void 0?e.delta:1,s=e.zoomInClassName!==void 0?e.zoomInClassName:t+"-in",r=e.zoomOutClassName!==void 0?e.zoomOutClassName:t+"-out",o=e.zoomInLabel!==void 0?e.zoomInLabel:"+",a=e.zoomOutLabel!==void 0?e.zoomOutLabel:"–",l=e.zoomInTipLabel!==void 0?e.zoomInTipLabel:"Zoom in",h=e.zoomOutTipLabel!==void 0?e.zoomOutTipLabel:"Zoom out",c=document.createElement("button");c.className=s,c.setAttribute("type","button"),c.title=l,c.appendChild(typeof o=="string"?document.createTextNode(o):o),c.addEventListener(W.CLICK,this.handleClick_.bind(this,n),!1);const d=document.createElement("button");d.className=r,d.setAttribute("type","button"),d.title=h,d.appendChild(typeof a=="string"?document.createTextNode(a):a),d.addEventListener(W.CLICK,this.handleClick_.bind(this,-n),!1);const u=t+" "+Wi+" "+vs,f=this.element;f.className=u,f.appendChild(c),f.appendChild(d),this.duration_=e.duration!==void 0?e.duration:250}handleClick_(e,t){t.preventDefault(),this.zoomByDelta_(e)}zoomByDelta_(e){const n=this.getMap().getView();if(!n)return;const s=n.getZoom();if(s!==void 0){const r=n.getConstrainedZoom(s+e);this.duration_>0?(n.getAnimating()&&n.cancelAnimations(),n.animate({zoom:r,duration:this.duration_,easing:Pn})):n.setZoom(r)}}}function Gf(i){i=i||{};const e=new ct;return(i.zoom!==void 0?i.zoom:!0)&&e.push(new Fa(i.zoomOptions)),(i.rotate!==void 0?i.rotate:!0)&&e.push(new vc(i.rotateOptions)),(i.attribution!==void 0?i.attribution:!0)&&e.push(new cu(i.attributionOptions)),e}const Fl={ACTIVE:"active"};class Ls extends Tt{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(Fl.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(Fl.ACTIVE,e)}setMap(e){this.map_=e}}function Wf(i,e,t){const n=i.getCenterInternal();if(n){const s=[n[0]+e[0],n[1]+e[1]];i.animateInternal({duration:t!==void 0?t:250,easing:of,center:i.getConstrainedCenter(s)})}}function Na(i,e,t,n){const s=i.getZoom();if(s===void 0)return;const r=i.getConstrainedZoom(s+e),o=i.getResolutionForZoom(r);i.getAnimating()&&i.cancelAnimations(),i.animate({resolution:o,anchor:t,duration:n!==void 0?n:250,easing:Pn})}class zf extends Ls{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:250}handleEvent(e){let t=!1;if(e.type==fe.DBLCLICK){const n=e.originalEvent,s=e.map,r=e.coordinate,o=n.shiftKey?-this.delta_:this.delta_,a=s.getView();Na(a,o,r,this.duration_),n.preventDefault(),t=!0}return!t}}class Ss extends Ls{constructor(e){e=e||{},super(e),e.handleDownEvent&&(this.handleDownEvent=e.handleDownEvent),e.handleDragEvent&&(this.handleDragEvent=e.handleDragEvent),e.handleMoveEvent&&(this.handleMoveEvent=e.handleMoveEvent),e.handleUpEvent&&(this.handleUpEvent=e.handleUpEvent),e.stopDown&&(this.stopDown=e.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(e){return!1}handleDragEvent(e){}handleEvent(e){if(!e.originalEvent)return!0;let t=!1;if(this.updateTrackedPointers_(e),this.handlingDownUpSequence){if(e.type==fe.POINTERDRAG)this.handleDragEvent(e),e.originalEvent.preventDefault();else if(e.type==fe.POINTERUP){const n=this.handleUpEvent(e);this.handlingDownUpSequence=n&&this.targetPointers.length>0}}else if(e.type==fe.POINTERDOWN){const n=this.handleDownEvent(e);this.handlingDownUpSequence=n,t=this.stopDown(n)}else e.type==fe.POINTERMOVE&&this.handleMoveEvent(e);return!t}handleMoveEvent(e){}handleUpEvent(e){return!1}stopDown(e){return e}updateTrackedPointers_(e){e.activePointers&&(this.targetPointers=e.activePointers)}}function Ga(i){const e=i.length;let t=0,n=0;for(let s=0;s<e;s++)t+=i[s].clientX,n+=i[s].clientY;return{clientX:t/e,clientY:n/e}}function Uo(i){const e=arguments;return function(t){let n=!0;for(let s=0,r=e.length;s<r&&(n=n&&e[s](t),!!n);++s);return n}}const j_=function(i){const e=i.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},Hf=function(i){const e=i.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Bf=function(i){const e=i.map.getTargetElement(),t=i.map.getOwnerDocument().activeElement;return e.contains(t)},Rc=function(i){return i.map.getTargetElement().hasAttribute("tabindex")?Bf(i):!0},jf=is,V_=function(i){return i.type==fe.CLICK},bc=function(i){const e=i.originalEvent;return e.button==0&&!(nu&&Oh&&e.ctrlKey)},X_=xs,U_=function(i){return i.type=="pointermove"},Y_=function(i){return i.type==fe.SINGLECLICK},Ec=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},Vf=function(i){const e=i.originalEvent;return Oh?e.metaKey:e.ctrlKey},Xf=function(i){const e=i.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Lc=function(i){const e=i.originalEvent,t=e.target.tagName;return t!=="INPUT"&&t!=="SELECT"&&t!=="TEXTAREA"&&!e.target.isContentEditable},wo=function(i){const e=i.originalEvent;return J(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.pointerType=="mouse"},Uf=function(i){const e=i.originalEvent;return J(e!==void 0,"mapBrowserEvent must originate from a pointer event"),e.isPrimary&&e.button===0};class Yf extends Ss{constructor(e){super({stopDown:xs}),e=e||{},this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const t=e.condition?e.condition:Uo(Ec,Uf);this.condition_=e.onFocusOnly?Uo(Rc,t):t,this.noKinetic_=!1}handleDragEvent(e){const t=e.map;this.panning_||(this.panning_=!0,t.getView().beginInteraction());const n=this.targetPointers,s=t.getEventPixel(Ga(n));if(n.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(s[0],s[1]),this.lastCentroid){const r=[this.lastCentroid[0]-s[0],s[1]-this.lastCentroid[1]],a=e.map.getView();Ou(r,a.getResolution()),Ma(r,a.getRotation()),a.adjustCenterInternal(r)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=s,this.lastPointersCount_=n.length,e.originalEvent.preventDefault()}handleUpEvent(e){const t=e.map,n=t.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){const s=this.kinetic_.getDistance(),r=this.kinetic_.getAngle(),o=n.getCenterInternal(),a=t.getPixelFromCoordinateInternal(o),l=t.getCoordinateFromPixelInternal([a[0]-s*Math.cos(r),a[1]-s*Math.sin(r)]);n.animateInternal({center:n.getConstrainedCenter(l),duration:500,easing:Pn})}return this.panning_&&(this.panning_=!1,n.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(e){if(this.targetPointers.length>0&&this.condition_(e)){const n=e.map.getView();return this.lastCentroid=null,n.getAnimating()&&n.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}}class qf extends Ss{constructor(e){e=e||{},super({stopDown:xs}),this.condition_=e.condition?e.condition:Hf,this.lastAngle_=void 0,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){if(!wo(e))return;const t=e.map,n=t.getView();if(n.getConstraints().rotation===ba)return;const s=t.getSize(),r=e.pixel,o=Math.atan2(s[1]/2-r[1],r[0]-s[0]/2);if(this.lastAngle_!==void 0){const a=o-this.lastAngle_;n.adjustRotationInternal(-a)}this.lastAngle_=o}handleUpEvent(e){return wo(e)?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){return wo(e)&&bc(e)&&this.condition_(e)?(e.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}}class Zf extends ca{constructor(e){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){const e=this.startPixel_,t=this.endPixel_,n="px",s=this.element_.style;s.left=Math.min(e[0],t[0])+n,s.top=Math.min(e[1],t[1])+n,s.width=Math.abs(t[0]-e[0])+n,s.height=Math.abs(t[1]-e[1])+n}setMap(e){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);const t=this.element_.style;t.left="inherit",t.top="inherit",t.width="inherit",t.height="inherit"}this.map_=e,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(e,t){this.startPixel_=e,this.endPixel_=t,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){const e=this.startPixel_,t=this.endPixel_,s=[e,[e[0],t[1]],t,[t[0],e[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);s[4]=s[0].slice(),this.geometry_?this.geometry_.setCoordinates([s]):this.geometry_=new Ut([s])}getGeometry(){return this.geometry_}}const Zs={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"};class Mo extends At{constructor(e,t,n){super(e),this.coordinate=t,this.mapBrowserEvent=n}}class $f extends Ss{constructor(e){super(),this.on,this.once,this.un,e=e||{},this.box_=new Zf(e.className||"ol-dragbox"),this.minArea_=e.minArea!==void 0?e.minArea:64,e.onBoxEnd&&(this.onBoxEnd=e.onBoxEnd),this.startPixel_=null,this.condition_=e.condition?e.condition:bc,this.boxEndCondition_=e.boxEndCondition?e.boxEndCondition:this.defaultBoxEndCondition}defaultBoxEndCondition(e,t,n){const s=n[0]-t[0],r=n[1]-t[1];return s*s+r*r>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(e){this.box_.setPixels(this.startPixel_,e.pixel),this.dispatchEvent(new Mo(Zs.BOXDRAG,e.coordinate,e))}handleUpEvent(e){this.box_.setMap(null);const t=this.boxEndCondition_(e,this.startPixel_,e.pixel);return t&&this.onBoxEnd(e),this.dispatchEvent(new Mo(t?Zs.BOXEND:Zs.BOXCANCEL,e.coordinate,e)),!1}handleDownEvent(e){return this.condition_(e)?(this.startPixel_=e.pixel,this.box_.setMap(e.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new Mo(Zs.BOXSTART,e.coordinate,e)),!0):!1}onBoxEnd(e){}}class Jf extends $f{constructor(e){e=e||{};const t=e.condition?e.condition:Xf;super({condition:t,className:e.className||"ol-dragzoom",minArea:e.minArea}),this.duration_=e.duration!==void 0?e.duration:200,this.out_=e.out!==void 0?e.out:!1}onBoxEnd(e){const n=this.getMap().getView();let s=this.getGeometry();if(this.out_){const r=n.rotatedExtentForGeometry(s),o=n.getResolutionForExtentInternal(r),a=n.getResolution()/o;s=s.clone(),s.scale(a*a)}n.fitInternal(s,{duration:this.duration_,easing:Pn})}}const Ei={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"};class Qf extends Ls{constructor(e){super(),e=e||{},this.defaultCondition_=function(t){return Ec(t)&&Lc(t)},this.condition_=e.condition!==void 0?e.condition:this.defaultCondition_,this.duration_=e.duration!==void 0?e.duration:100,this.pixelDelta_=e.pixelDelta!==void 0?e.pixelDelta:128}handleEvent(e){let t=!1;if(e.type==W.KEYDOWN){const n=e.originalEvent,s=n.key;if(this.condition_(e)&&(s==Ei.DOWN||s==Ei.LEFT||s==Ei.RIGHT||s==Ei.UP)){const o=e.map.getView(),a=o.getResolution()*this.pixelDelta_;let l=0,h=0;s==Ei.DOWN?h=-a:s==Ei.LEFT?l=-a:s==Ei.RIGHT?l=a:h=a;const c=[l,h];Ma(c,o.getRotation()),Wf(o,c,this.duration_),n.preventDefault(),t=!0}}return!t}}class eg extends Ls{constructor(e){super(),e=e||{},this.condition_=e.condition?e.condition:function(t){return!Vf(t)&&Lc(t)},this.delta_=e.delta?e.delta:1,this.duration_=e.duration!==void 0?e.duration:100}handleEvent(e){let t=!1;if(e.type==W.KEYDOWN||e.type==W.KEYPRESS){const n=e.originalEvent,s=n.key;if(this.condition_(e)&&(s==="+"||s==="-")){const r=e.map,o=s==="+"?this.delta_:-this.delta_,a=r.getView();Na(a,o,void 0,this.duration_),n.preventDefault(),t=!0}}return!t}}class tg{constructor(e,t,n){this.decay_=e,this.minVelocity_=t,this.delay_=n,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(e,t){this.points_.push(e,t,Date.now())}end(){if(this.points_.length<6)return!1;const e=Date.now()-this.delay_,t=this.points_.length-3;if(this.points_[t+2]<e)return!1;let n=t-3;for(;n>0&&this.points_[n+2]>e;)n-=3;const s=this.points_[t+2]-this.points_[n+2];if(s<1e3/60)return!1;const r=this.points_[t]-this.points_[n],o=this.points_[t+1]-this.points_[n+1];return this.angle_=Math.atan2(o,r),this.initialVelocity_=Math.sqrt(r*r+o*o)/s,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}}class ig extends Ls{constructor(e){e=e||{},super(e),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=e.maxDelta!==void 0?e.maxDelta:1,this.duration_=e.duration!==void 0?e.duration:250,this.timeout_=e.timeout!==void 0?e.timeout:80,this.useAnchor_=e.useAnchor!==void 0?e.useAnchor:!0,this.constrainResolution_=e.constrainResolution!==void 0?e.constrainResolution:!1;const t=e.condition?e.condition:jf;this.condition_=e.onFocusOnly?Uo(Rc,t):t,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300}endInteraction_(){this.trackpadTimeoutId_=void 0;const e=this.getMap();if(!e)return;e.getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)}handleEvent(e){if(!this.condition_(e)||e.type!==W.WHEEL)return!0;const n=e.map,s=e.originalEvent;s.preventDefault(),this.useAnchor_&&(this.lastAnchor_=e.coordinate);let r;if(e.type==W.WHEEL&&(r=s.deltaY,tu&&s.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(r/=Dh),s.deltaMode===WheelEvent.DOM_DELTA_LINE&&(r*=40)),r===0)return!1;this.lastDelta_=r;const o=Date.now();this.startTime_===void 0&&(this.startTime_=o),(!this.mode_||o-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(r)<4?"trackpad":"wheel");const a=n.getView();if(this.mode_==="trackpad"&&!(a.getConstrainResolution()||this.constrainResolution_))return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(a.getAnimating()&&a.cancelAnimations(),a.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),a.adjustZoom(-r/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=o,!1;this.totalDelta_+=r;const l=Math.max(this.timeout_-(o-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,n),l),!1}handleWheelZoom_(e){const t=e.getView();t.getAnimating()&&t.cancelAnimations();let n=-we(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(t.getConstrainResolution()||this.constrainResolution_)&&(n=n?n>0?1:-1:0),Na(t,n,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(e){this.useAnchor_=e,e||(this.lastAnchor_=null)}}class ng extends Ss{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=xs),super(t),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=e.threshold!==void 0?e.threshold:.3,this.duration_=e.duration!==void 0?e.duration:250}handleDragEvent(e){let t=0;const n=this.targetPointers[0],s=this.targetPointers[1],r=Math.atan2(s.clientY-n.clientY,s.clientX-n.clientX);if(this.lastAngle_!==void 0){const l=r-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),t=l}this.lastAngle_=r;const o=e.map,a=o.getView();a.getConstraints().rotation!==ba&&(this.anchor_=o.getCoordinateFromPixelInternal(o.getEventPixel(Ga(this.targetPointers))),this.rotating_&&(o.render(),a.adjustRotationInternal(t,this.anchor_)))}handleUpEvent(e){return this.targetPointers.length<2?(e.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}}class sg extends Ss{constructor(e){e=e||{};const t=e;t.stopDown||(t.stopDown=xs),super(t),this.anchor_=null,this.duration_=e.duration!==void 0?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(e){let t=1;const n=this.targetPointers[0],s=this.targetPointers[1],r=n.clientX-s.clientX,o=n.clientY-s.clientY,a=Math.sqrt(r*r+o*o);this.lastDistance_!==void 0&&(t=this.lastDistance_/a),this.lastDistance_=a;const l=e.map,h=l.getView();t!=1&&(this.lastScaleDelta_=t),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(Ga(this.targetPointers))),l.render(),h.adjustResolutionInternal(t,this.anchor_)}handleUpEvent(e){if(this.targetPointers.length<2){const n=e.map.getView(),s=this.lastScaleDelta_>1?1:-1;return n.endInteraction(this.duration_,s),!1}return!0}handleDownEvent(e){if(this.targetPointers.length>=2){const t=e.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||t.getView().beginInteraction(),!0}return!1}}function Sc(i){i=i||{};const e=new ct,t=new tg(-.005,.05,100);return(i.altShiftDragRotate!==void 0?i.altShiftDragRotate:!0)&&e.push(new qf),(i.doubleClickZoom!==void 0?i.doubleClickZoom:!0)&&e.push(new zf({delta:i.zoomDelta,duration:i.zoomDuration})),(i.dragPan!==void 0?i.dragPan:!0)&&e.push(new Yf({onFocusOnly:i.onFocusOnly,kinetic:t})),(i.pinchRotate!==void 0?i.pinchRotate:!0)&&e.push(new ng),(i.pinchZoom!==void 0?i.pinchZoom:!0)&&e.push(new sg({duration:i.zoomDuration})),(i.keyboard!==void 0?i.keyboard:!0)&&(e.push(new Qf),e.push(new eg({delta:i.zoomDelta,duration:i.zoomDuration}))),(i.mouseWheelZoom!==void 0?i.mouseWheelZoom:!0)&&e.push(new ig({onFocusOnly:i.onFocusOnly,duration:i.zoomDuration})),(i.shiftDragZoom!==void 0?i.shiftDragZoom:!0)&&e.push(new Jf({duration:i.zoomDuration})),e}function Nl(i){return i[0]>0&&i[1]>0}function rg(i,e,t){return t===void 0&&(t=[0,0]),t[0]=i[0]*e+.5|0,t[1]=i[1]*e+.5|0,t}function tt(i,e){return Array.isArray(i)?i:(e===void 0?e=[i,i]:(e[0]=i,e[1]=i),e)}function Ic(i){if(i instanceof Ur){i.setMapInternal(null);return}i instanceof Ci&&i.getLayers().forEach(Ic)}function Kc(i,e){if(i instanceof Ur){i.setMapInternal(e);return}if(i instanceof Ci){const t=i.getLayers().getArray();for(let n=0,s=t.length;n<s;++n)Kc(t[n],e)}}class Ac extends Tt{constructor(e){super(),e=e||{},this.on,this.once,this.un;const t=og(e);this.renderComplete_,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=e.maxTilesLoading!==void 0?e.maxTilesLoading:16,this.pixelRatio_=e.pixelRatio!==void 0?e.pixelRatio:Dh,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=gt(),this.pixelToCoordinateTransform_=gt(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_),this.mapBrowserEventHandler_=null,this.moveTolerance_=e.moveTolerance,this.keyboardEventTarget_=t.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,this.resizeObserver_=new ResizeObserver(()=>this.updateSize()),this.controls=t.controls||Gf(),this.interactions=t.interactions||Sc({onFocusOnly:!0}),this.overlays_=t.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Ff(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Te.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Te.VIEW,this.handleViewChanged_),this.addChangeListener(Te.SIZE,this.handleSizeChanged_),this.addChangeListener(Te.TARGET,this.handleTargetChanged_),this.setProperties(t.values);const n=this;e.view&&!(e.view instanceof lt)&&e.view.then(function(s){n.setView(new lt(s))}),this.controls.addEventListener(je.ADD,s=>{s.element.setMap(this)}),this.controls.addEventListener(je.REMOVE,s=>{s.element.setMap(null)}),this.interactions.addEventListener(je.ADD,s=>{s.element.setMap(this)}),this.interactions.addEventListener(je.REMOVE,s=>{s.element.setMap(null)}),this.overlays_.addEventListener(je.ADD,s=>{this.addOverlayInternal_(s.element)}),this.overlays_.addEventListener(je.REMOVE,s=>{const r=s.element.getId();r!==void 0&&delete this.overlayIdIndex_[r.toString()],s.element.setMap(null)}),this.controls.forEach(s=>{s.setMap(this)}),this.interactions.forEach(s=>{s.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(e){this.getControls().push(e)}addInteraction(e){this.getInteractions().push(e)}addLayer(e){this.getLayerGroup().getLayers().push(e)}handleLayerAdd_(e){Kc(e.layer,this)}addOverlay(e){this.getOverlays().push(e)}addOverlayInternal_(e){const t=e.getId();t!==void 0&&(this.overlayIdIndex_[t.toString()]=e),e.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(e,t,n){if(!this.frameState_||!this.renderer_)return;const s=this.getCoordinateFromPixelInternal(e);n=n!==void 0?n:{};const r=n.hitTolerance!==void 0?n.hitTolerance:0,o=n.layerFilter!==void 0?n.layerFilter:is,a=n.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(s,this.frameState_,r,a,t,null,o,null)}getFeaturesAtPixel(e,t){const n=[];return this.forEachFeatureAtPixel(e,function(s){n.push(s)},t),n}getAllLayers(){const e=[];function t(n){n.forEach(function(s){s instanceof Ci?t(s.getLayers()):e.push(s)})}return t(this.getLayers()),e}hasFeatureAtPixel(e,t){if(!this.frameState_||!this.renderer_)return!1;const n=this.getCoordinateFromPixelInternal(e);t=t!==void 0?t:{};const s=t.layerFilter!==void 0?t.layerFilter:is,r=t.hitTolerance!==void 0?t.hitTolerance:0,o=t.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(n,this.frameState_,r,o,s,null)}getEventCoordinate(e){return this.getCoordinateFromPixel(this.getEventPixel(e))}getEventCoordinateInternal(e){return this.getCoordinateFromPixelInternal(this.getEventPixel(e))}getEventPixel(e){const n=this.viewport_.getBoundingClientRect(),s=this.getSize(),r=n.width/s[0],o=n.height/s[1],a="changedTouches"in e?e.changedTouches[0]:e;return[(a.clientX-n.left)/r,(a.clientY-n.top)/o]}getTarget(){return this.get(Te.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(e){return zo(this.getCoordinateFromPixelInternal(e),this.getView().getProjection())}getCoordinateFromPixelInternal(e){const t=this.frameState_;return t?pe(t.pixelToCoordinateTransform,e.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(e){const t=this.overlayIdIndex_[e.toString()];return t!==void 0?t:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Te.LAYERGROUP)}setLayers(e){const t=this.getLayerGroup();if(e instanceof ct){t.setLayers(e);return}const n=t.getLayers();n.clear(),n.extend(e)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const s=e[t];if(!s.visible)continue;const r=s.layer.getRenderer();if(r&&!r.ready)return!0;const o=s.layer.getSource();if(o&&o.loading)return!0}return!1}getPixelFromCoordinate(e){const t=zt(e,this.getView().getProjection());return this.getPixelFromCoordinateInternal(t)}getPixelFromCoordinateInternal(e){const t=this.frameState_;return t?pe(t.coordinateToPixelTransform,e.slice(0,2)):null}getRenderer(){return this.renderer_}getSize(){return this.get(Te.SIZE)}getView(){return this.get(Te.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){const e=this.getTargetElement();return e?e.ownerDocument:document}getTilePriority(e,t,n,s){return Nf(this.frameState_,e,t,n,s)}handleBrowserEvent(e,t){t=t||e.type;const n=new ri(t,this,e);this.handleMapBrowserEvent(n)}handleMapBrowserEvent(e){if(!this.frameState_)return;const t=e.originalEvent,n=t.type;if(n===Po.POINTERDOWN||n===W.WHEEL||n===W.KEYDOWN){const s=this.getOwnerDocument(),r=this.viewport_.getRootNode?this.viewport_.getRootNode():s,o=t.target;if(this.overlayContainerStopEvent_.contains(o)||!(r===s?s.documentElement:r).contains(o))return}if(e.frameState=this.frameState_,this.dispatchEvent(e)!==!1){const s=this.getInteractions().getArray().slice();for(let r=s.length-1;r>=0;r--){const o=s[r];if(o.getMap()!==this||!o.getActive()||!this.getTargetElement())continue;if(!o.handleEvent(e)||e.propagationStopped)break}}}handlePostRender(){const e=this.frameState_,t=this.tileQueue_;if(!t.isEmpty()){let s=this.maxTilesLoading_,r=s;if(e){const o=e.viewHints;if(o[Le.ANIMATING]||o[Le.INTERACTING]){const a=Date.now()-e.time>8;s=a?0:8,r=a?0:2}}t.getTilesLoading()<s&&(t.reprioritize(),t.loadMoreTiles(s,r))}e&&this.renderer_&&!e.animate&&(this.renderComplete_===!0?(this.hasListener(Et.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(Et.RENDERCOMPLETE,e),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new nn(xt.LOADEND,this,e)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new nn(xt.LOADSTART,this,e))));const n=this.postRenderFunctions_;for(let s=0,r=n.length;s<r;++s)n[s](this,e);n.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let n=0,s=this.targetChangeHandlerKeys_.length;n<s;++n)ce(this.targetChangeHandlerKeys_[n]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(W.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(W.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,cr(this.viewport_)}if(this.targetElement_){this.resizeObserver_.unobserve(this.targetElement_);const n=this.targetElement_.getRootNode();n instanceof ShadowRoot&&this.resizeObserver_.unobserve(n.host),this.setSize(void 0)}const e=this.getTarget(),t=typeof e=="string"?document.getElementById(e):e;if(this.targetElement_=t,!t)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{t.appendChild(this.viewport_),this.renderer_||(this.renderer_=new Of(this)),this.mapBrowserEventHandler_=new Df(this,this.moveTolerance_);for(const r in fe)this.mapBrowserEventHandler_.addEventListener(fe[r],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(W.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(W.WHEEL,this.boundHandleBrowserEvent_,kh?{passive:!1}:!1);const n=this.keyboardEventTarget_?this.keyboardEventTarget_:t;this.targetChangeHandlerKeys_=[q(n,W.KEYDOWN,this.handleBrowserEvent,this),q(n,W.KEYPRESS,this.handleBrowserEvent,this)];const s=t.getRootNode();s instanceof ShadowRoot&&this.resizeObserver_.observe(s.host),this.resizeObserver_.observe(t)}this.updateSize()}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(ce(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(ce(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);const e=this.getView();e&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=q(e,Di.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=q(e,W.CHANGE,this.handleViewPropertyChanged_,this),e.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(ce),this.layerGroupPropertyListenerKeys_=null);const e=this.getLayerGroup();e&&(this.handleLayerAdd_(new oi("addlayer",e)),this.layerGroupPropertyListenerKeys_=[q(e,Di.PROPERTYCHANGE,this.render,this),q(e,W.CHANGE,this.render,this),q(e,"addlayer",this.handleLayerAdd_,this),q(e,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){const e=this.getLayerGroup().getLayerStatesArray();for(let t=0,n=e.length;t<n;++t){const s=e[t].layer;s.hasRenderer()&&s.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}flushDeclutterItems(){const e=this.frameState_;e&&this.renderer_.flushDeclutterItems(e)}removeControl(e){return this.getControls().remove(e)}removeInteraction(e){return this.getInteractions().remove(e)}removeLayer(e){return this.getLayerGroup().getLayers().remove(e)}handleLayerRemove_(e){Ic(e.layer)}removeOverlay(e){return this.getOverlays().remove(e)}renderFrame_(e){const t=this.getSize(),n=this.getView(),s=this.frameState_;let r=null;if(t!==void 0&&Nl(t)&&n&&n.isDef()){const o=n.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=n.getState();if(r={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutterTree:null,extent:rs(a.center,a.resolution,a.rotation,t),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:t,tileQueue:this.tileQueue_,time:e,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{},mapId:te(this),renderTargets:{}},a.nextCenter&&a.nextResolution){const l=isNaN(a.nextRotation)?a.rotation:a.nextRotation;r.nextExtent=rs(a.nextCenter,a.nextResolution,l,t)}}this.frameState_=r,this.renderer_.renderFrame(r),r&&(r.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,r.postRenderFunctions),s&&(!this.previousExtent_||!An(this.previousExtent_)&&!Fi(r.extent,this.previousExtent_))&&(this.dispatchEvent(new nn(xt.MOVESTART,this,s)),this.previousExtent_=Kn(this.previousExtent_)),this.previousExtent_&&!r.viewHints[Le.ANIMATING]&&!r.viewHints[Le.INTERACTING]&&!Fi(r.extent,this.previousExtent_)&&(this.dispatchEvent(new nn(xt.MOVEEND,this,r)),zh(r.extent,this.previousExtent_))),this.dispatchEvent(new nn(xt.POSTRENDER,this,r)),this.renderComplete_=this.hasListener(xt.LOADSTART)||this.hasListener(xt.LOADEND)||this.hasListener(Et.RENDERCOMPLETE)?!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady():void 0,this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(e){const t=this.getLayerGroup();t&&this.handleLayerRemove_(new oi("removelayer",t)),this.set(Te.LAYERGROUP,e)}setSize(e){this.set(Te.SIZE,e)}setTarget(e){this.set(Te.TARGET,e)}setView(e){if(!e||e instanceof lt){this.set(Te.VIEW,e);return}this.set(Te.VIEW,new lt);const t=this;e.then(function(n){t.setView(new lt(n))})}updateSize(){const e=this.getTargetElement();let t;if(e){const s=getComputedStyle(e),r=e.offsetWidth-parseFloat(s.borderLeftWidth)-parseFloat(s.paddingLeft)-parseFloat(s.paddingRight)-parseFloat(s.borderRightWidth),o=e.offsetHeight-parseFloat(s.borderTopWidth)-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom)-parseFloat(s.borderBottomWidth);!isNaN(r)&&!isNaN(o)&&(t=[r,o],!Nl(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&Zh("No map visible because the map container's width or height are 0."))}const n=this.getSize();t&&(!n||!pi(t,n))&&(this.setSize(t),this.updateViewportSize_(t))}updateViewportSize_(e){const t=this.getView();t&&t.setViewportSize(e)}}function og(i){let e=null;i.keyboardEventTarget!==void 0&&(e=typeof i.keyboardEventTarget=="string"?document.getElementById(i.keyboardEventTarget):i.keyboardEventTarget);const t={},n=i.layers&&typeof i.layers.getLayers=="function"?i.layers:new Ci({layers:i.layers});t[Te.LAYERGROUP]=n,t[Te.TARGET]=i.target,t[Te.VIEW]=i.view instanceof lt?i.view:new lt;let s;i.controls!==void 0&&(Array.isArray(i.controls)?s=new ct(i.controls.slice()):(J(typeof i.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),s=i.controls));let r;i.interactions!==void 0&&(Array.isArray(i.interactions)?r=new ct(i.interactions.slice()):(J(typeof i.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),r=i.interactions));let o;return i.overlays!==void 0?Array.isArray(i.overlays)?o=new ct(i.overlays.slice()):(J(typeof i.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),o=i.overlays):o=new ct,{controls:s,interactions:r,keyboardEventTarget:e,overlays:o,values:t}}const Ee={ELEMENT:"element",MAP:"map",OFFSET:"offset",POSITION:"position",POSITIONING:"positioning"};class Pc extends Tt{constructor(e){super(),this.on,this.once,this.un,this.options=e,this.id=e.id,this.insertFirst=e.insertFirst!==void 0?e.insertFirst:!0,this.stopEvent=e.stopEvent!==void 0?e.stopEvent:!0,this.element=document.createElement("div"),this.element.className=e.className!==void 0?e.className:"ol-overlay-container "+lu,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.autoPan=e.autoPan===!0?{}:e.autoPan||void 0,this.rendered={transform_:"",visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(Ee.ELEMENT,this.handleElementChanged),this.addChangeListener(Ee.MAP,this.handleMapChanged),this.addChangeListener(Ee.OFFSET,this.handleOffsetChanged),this.addChangeListener(Ee.POSITION,this.handlePositionChanged),this.addChangeListener(Ee.POSITIONING,this.handlePositioningChanged),e.element!==void 0&&this.setElement(e.element),this.setOffset(e.offset!==void 0?e.offset:[0,0]),this.setPositioning(e.positioning||"top-left"),e.position!==void 0&&this.setPosition(e.position)}getElement(){return this.get(Ee.ELEMENT)}getId(){return this.id}getMap(){return this.get(Ee.MAP)||null}getOffset(){return this.get(Ee.OFFSET)}getPosition(){return this.get(Ee.POSITION)}getPositioning(){return this.get(Ee.POSITIONING)}handleElementChanged(){Fh(this.element);const e=this.getElement();e&&this.element.appendChild(e)}handleMapChanged(){this.mapPostrenderListenerKey&&(cr(this.element),ce(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);const e=this.getMap();if(e){this.mapPostrenderListenerKey=q(e,xt.POSTRENDER,this.render,this),this.updatePixelPosition();const t=this.stopEvent?e.getOverlayContainerStopEvent():e.getOverlayContainer();this.insertFirst?t.insertBefore(this.element,t.childNodes[0]||null):t.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(e){this.set(Ee.ELEMENT,e)}setMap(e){this.set(Ee.MAP,e)}setOffset(e){this.set(Ee.OFFSET,e)}setPosition(e){this.set(Ee.POSITION,e)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(e){const t=this.getMap();if(!t||!t.getTargetElement()||!this.get(Ee.POSITION))return;const n=this.getRect(t.getTargetElement(),t.getSize()),s=this.getElement(),r=this.getRect(s,[ru(s),ou(s)]);e=e||{};const o=e.margin===void 0?20:e.margin;if(!Ct(n,r)){const a=r[0]-n[0],l=n[2]-r[2],h=r[1]-n[1],c=n[3]-r[3],d=[0,0];if(a<0?d[0]=a-o:l<0&&(d[0]=Math.abs(l)+o),h<0?d[1]=h-o:c<0&&(d[1]=Math.abs(c)+o),d[0]!==0||d[1]!==0){const u=t.getView().getCenterInternal(),f=t.getPixelFromCoordinateInternal(u);if(!f)return;const g=[f[0]+d[0],f[1]+d[1]],w=e.animation||{};t.getView().animateInternal({center:t.getCoordinateFromPixelInternal(g),duration:w.duration,easing:w.easing})}}}getRect(e,t){const n=e.getBoundingClientRect(),s=n.left+window.pageXOffset,r=n.top+window.pageYOffset;return[s,r,s+t[0],r+t[1]]}setPositioning(e){this.set(Ee.POSITIONING,e)}setVisible(e){this.rendered.visible!==e&&(this.element.style.display=e?"":"none",this.rendered.visible=e)}updatePixelPosition(){const e=this.getMap(),t=this.getPosition();if(!e||!e.isRendered()||!t){this.setVisible(!1);return}const n=e.getPixelFromCoordinate(t),s=e.getSize();this.updateRenderedPosition(n,s)}updateRenderedPosition(e,t){const n=this.element.style,s=this.getOffset(),r=this.getPositioning();this.setVisible(!0);const o=Math.round(e[0]+s[0])+"px",a=Math.round(e[1]+s[1])+"px";let l="0%",h="0%";r=="bottom-right"||r=="center-right"||r=="top-right"?l="-100%":(r=="bottom-center"||r=="center-center"||r=="top-center")&&(l="-50%"),r=="bottom-left"||r=="bottom-center"||r=="bottom-right"?h="-100%":(r=="center-left"||r=="center-center"||r=="center-right")&&(h="-50%");const c=`translate(${l}, ${h}) translate(${o}, ${a})`;this.rendered.transform_!=c&&(this.rendered.transform_=c,n.transform=c)}getOptions(){return this.options}}const mo=.75,$s=.1;class ag extends In{constructor(e){e=e||{},super({element:document.createElement("div"),render:e.render,target:e.target}),this.boundHandleRotationChanged_=this.handleRotationChanged_.bind(this),this.collapsed_=e.collapsed!==void 0?e.collapsed:!0,this.collapsible_=e.collapsible!==void 0?e.collapsible:!0,this.collapsible_||(this.collapsed_=!1),this.rotateWithView_=e.rotateWithView!==void 0?e.rotateWithView:!1,this.viewExtent_=void 0;const t=e.className!==void 0?e.className:"ol-overviewmap",n=e.tipLabel!==void 0?e.tipLabel:"Overview map",s=e.collapseLabel!==void 0?e.collapseLabel:"‹";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s):this.collapseLabel_=s;const r=e.label!==void 0?e.label:"›";typeof r=="string"?(this.label_=document.createElement("span"),this.label_.textContent=r):this.label_=r;const o=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_,a=document.createElement("button");a.setAttribute("type","button"),a.title=n,a.appendChild(o),a.addEventListener(W.CLICK,this.handleClick_.bind(this),!1),this.ovmapDiv_=document.createElement("div"),this.ovmapDiv_.className="ol-overviewmap-map",this.view_=e.view;const l=new Ac({view:e.view,controls:new ct,interactions:new ct});this.ovmap_=l,e.layers&&e.layers.forEach(function(T){l.addLayer(T)});const h=document.createElement("div");h.className="ol-overviewmap-box",h.style.boxSizing="border-box",this.boxOverlay_=new Pc({position:[0,0],positioning:"center-center",element:h}),this.ovmap_.addOverlay(this.boxOverlay_);const c=t+" "+Wi+" "+vs+(this.collapsed_&&this.collapsible_?" "+dr:"")+(this.collapsible_?"":" ol-uncollapsible"),d=this.element;d.className=c,d.appendChild(this.ovmapDiv_),d.appendChild(a);const u=this,f=this.boxOverlay_,g=this.boxOverlay_.getElement(),w=function(T){return{clientX:T.clientX,clientY:T.clientY}},M=function(T){const y=w(T),x=l.getEventCoordinateInternal(y);f.setPosition(x)},m=function(T){const y=l.getEventCoordinateInternal(T);u.getMap().getView().setCenterInternal(y),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",m)};g.addEventListener("mousedown",function(){window.addEventListener("mousemove",M),window.addEventListener("mouseup",m)})}setMap(e){const t=this.getMap();if(e!==t){if(t){const n=t.getView();n&&this.unbindView_(n),this.ovmap_.setTarget(null)}if(super.setMap(e),e){this.ovmap_.setTarget(this.ovmapDiv_),this.listenerKeys.push(q(e,Di.PROPERTYCHANGE,this.handleMapPropertyChange_,this));const n=e.getView();n&&(this.bindView_(n),n.isDef()&&(this.ovmap_.updateSize(),this.resetExtent_())),this.ovmap_.isRendered()||this.updateBoxAfterOvmapIsRendered_()}}}handleMapPropertyChange_(e){if(e.key===Te.VIEW){const t=e.oldValue;t&&this.unbindView_(t);const n=this.getMap().getView();this.bindView_(n)}else!this.ovmap_.isRendered()&&(e.key===Te.TARGET||e.key===Te.SIZE)&&this.ovmap_.updateSize()}bindView_(e){if(!this.view_){const t=new lt({projection:e.getProjection()});this.ovmap_.setView(t)}e.addChangeListener(Je.ROTATION,this.boundHandleRotationChanged_),this.handleRotationChanged_()}unbindView_(e){e.removeChangeListener(Je.ROTATION,this.boundHandleRotationChanged_)}handleRotationChanged_(){this.rotateWithView_&&this.ovmap_.getView().setRotation(this.getMap().getView().getRotation())}validateExtent_(){const e=this.getMap(),t=this.ovmap_;if(!e.isRendered()||!t.isRendered())return;const n=e.getSize(),r=e.getView().calculateExtentInternal(n);if(this.viewExtent_&&Fi(r,this.viewExtent_))return;this.viewExtent_=r;const o=t.getSize(),l=t.getView().calculateExtentInternal(o),h=t.getPixelFromCoordinateInternal(qt(r)),c=t.getPixelFromCoordinateInternal(bs(r)),d=Math.abs(h[0]-c[0]),u=Math.abs(h[1]-c[1]),f=o[0],g=o[1];d<f*$s||u<g*$s||d>f*mo||u>g*mo?this.resetExtent_():Ct(l,r)||this.recenter_()}resetExtent_(){const e=this.getMap(),t=this.ovmap_,n=e.getSize(),r=e.getView().calculateExtentInternal(n),o=t.getView(),a=Math.log(mo/$s)/Math.LN2,l=1/(Math.pow(2,a/2)*$s);bu(r,l),o.fitInternal(jo(r))}recenter_(){const e=this.getMap(),t=this.ovmap_,n=e.getView();t.getView().setCenterInternal(n.getCenterInternal())}updateBox_(){const e=this.getMap(),t=this.ovmap_;if(!e.isRendered()||!t.isRendered())return;const n=e.getSize(),s=e.getView(),r=t.getView(),o=this.rotateWithView_?0:-s.getRotation(),a=this.boxOverlay_,l=this.boxOverlay_.getElement(),h=s.getCenterInternal(),c=s.getResolution(),d=r.getResolution(),u=n[0]*c/d,f=n[1]*c/d;if(a.setPosition(h),l){l.style.width=u+"px",l.style.height=f+"px";const g="rotate("+o+"rad)";l.style.transform=g}}updateBoxAfterOvmapIsRendered_(){this.ovmapPostrenderKey_||(this.ovmapPostrenderKey_=ns(this.ovmap_,xt.POSTRENDER,function(e){delete this.ovmapPostrenderKey_,this.updateBox_()},this))}handleClick_(e){e.preventDefault(),this.handleToggle_()}handleToggle_(){this.element.classList.toggle(dr),this.collapsed_?xn(this.collapseLabel_,this.label_):xn(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_;const e=this.ovmap_;if(!this.collapsed_){if(e.isRendered()){this.viewExtent_=void 0,e.render();return}e.updateSize(),this.resetExtent_(),this.updateBoxAfterOvmapIsRendered_()}}getCollapsible(){return this.collapsible_}setCollapsible(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),!e&&this.collapsed_&&this.handleToggle_())}setCollapsed(e){!this.collapsible_||this.collapsed_===e||this.handleToggle_()}getCollapsed(){return this.collapsed_}getRotateWithView(){return this.rotateWithView_}setRotateWithView(e){this.rotateWithView_!==e&&(this.rotateWithView_=e,this.getMap().getView().getRotation()!==0&&(this.rotateWithView_?this.handleRotationChanged_():this.ovmap_.getView().setRotation(0),this.viewExtent_=void 0,this.validateExtent_(),this.updateBox_()))}getOverviewMap(){return this.ovmap_}render(e){this.validateExtent_(),this.updateBox_()}}const To="units",lg=[1,2,5],Bn=25.4/.28;class hg extends In{constructor(e){e=e||{};const t=document.createElement("div");t.style.pointerEvents="none",super({element:t,render:e.render,target:e.target}),this.on,this.once,this.un;const n=e.className!==void 0?e.className:e.bar?"ol-scale-bar":"ol-scale-line";this.innerElement_=document.createElement("div"),this.innerElement_.className=n+"-inner",this.element.className=n+" "+Wi,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=e.minWidth!==void 0?e.minWidth:64,this.maxWidth_=e.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",this.addChangeListener(To,this.handleUnitsChanged_),this.setUnits(e.units||"metric"),this.scaleBar_=e.bar||!1,this.scaleBarSteps_=e.steps||4,this.scaleBarText_=e.text||!1,this.dpi_=e.dpi||void 0}getUnits(){return this.get(To)}handleUnitsChanged_(){this.updateElement_()}setUnits(e){this.set(To,e)}setDpi(e){this.dpi_=e}updateElement_(){const e=this.viewState_;if(!e){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const t=e.center,n=e.projection,s=this.getUnits(),r=s=="degrees"?"degrees":"m";let o=fr(n,e.resolution,t,r);const a=this.minWidth_*(this.dpi_||Bn)/Bn,l=this.maxWidth_!==void 0?this.maxWidth_*(this.dpi_||Bn)/Bn:void 0;let h=a*o,c="";if(s=="degrees"){const y=_n.degrees;h*=y,h<y/60?(c="″",o*=3600):h<y?(c="′",o*=60):c="°"}else if(s=="imperial")h<.9144?(c="in",o/=.0254):h<1609.344?(c="ft",o/=.3048):(c="mi",o/=1609.344);else if(s=="nautical")o/=1852,c="NM";else if(s=="metric")h<.001?(c="μm",o*=1e6):h<1?(c="mm",o*=1e3):h<1e3?c="m":(c="km",o/=1e3);else if(s=="us")h<.9144?(c="in",o*=39.37):h<1609.344?(c="ft",o/=.30480061):(c="mi",o/=1609.3472);else throw new Error("Invalid units");let d=3*Math.floor(Math.log(a*o)/Math.log(10)),u,f,g,w,M,m;for(;;){g=Math.floor(d/3);const y=Math.pow(10,g);if(u=lg[(d%3+3)%3]*y,f=Math.round(u/o),isNaN(f)){this.element.style.display="none",this.renderedVisible_=!1;return}if(l!==void 0&&f>=l){u=w,f=M,g=m;break}else if(f>=a)break;w=u,M=f,m=g,++d}const T=this.scaleBar_?this.createScaleBar(f,u,c):u.toFixed(g<0?-g:0)+" "+c;this.renderedHTML_!=T&&(this.innerElement_.innerHTML=T,this.renderedHTML_=T),this.renderedWidth_!=f&&(this.innerElement_.style.width=f+"px",this.renderedWidth_=f),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}createScaleBar(e,t,n){const s=this.getScaleForResolution(),r=s<1?Math.round(1/s).toLocaleString()+" : 1":"1 : "+Math.round(s).toLocaleString(),o=this.scaleBarSteps_,a=e/o,l=[this.createMarker("absolute")];for(let c=0;c<o;++c){const d=c%2===0?"ol-scale-singlebar-odd":"ol-scale-singlebar-even";l.push(`<div><div class="ol-scale-singlebar ${d}" style="width: ${a}px;"></div>`+this.createMarker("relative")+(c%2===0||o===2?this.createStepText(c,e,!1,t,n):"")+"</div>")}return l.push(this.createStepText(o,e,!0,t,n)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${e}px;">`+r+"</div>":"")+l.join("")}createMarker(e){return`<div class="ol-scale-step-marker" style="position: ${e}; top: ${e==="absolute"?3:-10}px;"></div>`}createStepText(e,t,n,s,r){const a=(e===0?0:Math.round(s/this.scaleBarSteps_*e*100)/100)+(e===0?"":" "+r),l=e===0?-3:t/this.scaleBarSteps_*-1,h=e===0?0:t/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${l}px;text-align: ${e===0?"left":"center"};min-width: ${h}px;left: ${n?t+"px":"unset"};">`+a+"</div>"}getScaleForResolution(){const e=fr(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,"m"),t=this.dpi_||Bn,n=1e3/25.4;return e*n*t}render(e){const t=e.frameState;t?this.viewState_=t.viewState:this.viewState_=null,this.updateElement_()}}function cg(i){const e=Object.keys(i.defs),t=e.length;let n,s;for(n=0;n<t;++n){const r=e[n];if(!ie(r)){const o=i.defs(r);let a=o.units;!a&&o.projName==="longlat"&&(a="degrees"),Jh(new Gr({code:r,axisOrientation:o.axis,metersPerUnit:o.to_meter,units:a}))}}for(n=0;n<t;++n){const r=e[n],o=ie(r);for(s=0;s<t;++s){const a=e[s],l=ie(a);if(!Wh(r,a))if(i.defs[r]===i.defs[a])Wo([o,l]);else{const h=i(r,a);Gu(o,l,Cl(o,l,h.forward),Cl(l,o,h.inverse))}}}}function dg(i){i("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),i("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),i("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),i.WGS84=i["EPSG:4326"],i["EPSG:3785"]=i["EPSG:3857"],i.GOOGLE=i["EPSG:3857"],i["EPSG:900913"]=i["EPSG:3857"],i["EPSG:102113"]=i["EPSG:3857"]}var Ni=1,Gi=2,Mn=3,ug=4,Yo=5,Gl=6378137,fg=6356752314e-3,Wl=.0066943799901413165,ts=484813681109536e-20,b=Math.PI/2,gg=.16666666666666666,wg=.04722222222222222,Mg=.022156084656084655,L=1e-10,ve=.017453292519943295,vt=57.29577951308232,ne=Math.PI/4,fs=Math.PI*2,ye=3.14159265359,Ye={};Ye.greenwich=0;Ye.lisbon=-9.131906111111;Ye.paris=2.337229166667;Ye.bogota=-74.080916666667;Ye.madrid=-3.687938888889;Ye.rome=12.452333333333;Ye.bern=7.439583333333;Ye.jakarta=106.807719444444;Ye.ferro=-17.666666666667;Ye.brussels=4.367975;Ye.stockholm=18.058277777778;Ye.athens=23.7163375;Ye.oslo=10.722916666667;const mg={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var zl=/[\s_\-\/\(\)]/g;function yi(i,e){if(i[e])return i[e];for(var t=Object.keys(i),n=e.toLowerCase().replace(zl,""),s=-1,r,o;++s<t.length;)if(r=t[s],o=r.toLowerCase().replace(zl,""),o===n)return i[r]}function qo(i){var e={},t=i.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,l){var h=l.split("=");return h.push(!0),a[h[0].toLowerCase()]=h[1],a},{}),n,s,r,o={proj:"projName",datum:"datumCode",rf:function(a){e.rf=parseFloat(a)},lat_0:function(a){e.lat0=a*ve},lat_1:function(a){e.lat1=a*ve},lat_2:function(a){e.lat2=a*ve},lat_ts:function(a){e.lat_ts=a*ve},lon_0:function(a){e.long0=a*ve},lon_1:function(a){e.long1=a*ve},lon_2:function(a){e.long2=a*ve},alpha:function(a){e.alpha=parseFloat(a)*ve},gamma:function(a){e.rectified_grid_angle=parseFloat(a)},lonc:function(a){e.longc=a*ve},x_0:function(a){e.x0=parseFloat(a)},y_0:function(a){e.y0=parseFloat(a)},k_0:function(a){e.k0=parseFloat(a)},k:function(a){e.k0=parseFloat(a)},a:function(a){e.a=parseFloat(a)},b:function(a){e.b=parseFloat(a)},r_a:function(){e.R_A=!0},zone:function(a){e.zone=parseInt(a,10)},south:function(){e.utmSouth=!0},towgs84:function(a){e.datum_params=a.split(",").map(function(l){return parseFloat(l)})},to_meter:function(a){e.to_meter=parseFloat(a)},units:function(a){e.units=a;var l=yi(mg,a);l&&(e.to_meter=l.to_meter)},from_greenwich:function(a){e.from_greenwich=a*ve},pm:function(a){var l=yi(Ye,a);e.from_greenwich=(l||parseFloat(a))*ve},nadgrids:function(a){a==="@null"?e.datumCode="none":e.nadgrids=a},axis:function(a){var l="ewnsud";a.length===3&&l.indexOf(a.substr(0,1))!==-1&&l.indexOf(a.substr(1,1))!==-1&&l.indexOf(a.substr(2,1))!==-1&&(e.axis=a)},approx:function(){e.approx=!0}};for(n in t)s=t[n],n in o?(r=o[n],typeof r=="function"?r(s):e[r]=s):e[n]=s;return typeof e.datumCode=="string"&&e.datumCode!=="WGS84"&&(e.datumCode=e.datumCode.toLowerCase()),e}var gs=1,Oc=2,Dc=3,_r=4,kc=5,Wa=-1,Tg=/\s/,yg=/[A-Za-z]/,xg=/[A-Za-z84_]/,Yr=/[,\]]/,Fc=/[\d\.E\-\+]/;function Zt(i){if(typeof i!="string")throw new Error("not a string");this.text=i.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=gs}Zt.prototype.readCharicter=function(){var i=this.text[this.place++];if(this.state!==_r)for(;Tg.test(i);){if(this.place>=this.text.length)return;i=this.text[this.place++]}switch(this.state){case gs:return this.neutral(i);case Oc:return this.keyword(i);case _r:return this.quoted(i);case kc:return this.afterquote(i);case Dc:return this.number(i);case Wa:return}};Zt.prototype.afterquote=function(i){if(i==='"'){this.word+='"',this.state=_r;return}if(Yr.test(i)){this.word=this.word.trim(),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in afterquote yet, index '+this.place)};Zt.prototype.afterItem=function(i){if(i===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=gs;return}if(i==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=gs,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Wa);return}};Zt.prototype.number=function(i){if(Fc.test(i)){this.word+=i;return}if(Yr.test(i)){this.word=parseFloat(this.word),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in number yet, index '+this.place)};Zt.prototype.quoted=function(i){if(i==='"'){this.state=kc;return}this.word+=i};Zt.prototype.keyword=function(i){if(xg.test(i)){this.word+=i;return}if(i==="["){var e=[];e.push(this.word),this.level++,this.root===null?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,this.state=gs;return}if(Yr.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in keyword yet, index '+this.place)};Zt.prototype.neutral=function(i){if(yg.test(i)){this.word=i,this.state=Oc;return}if(i==='"'){this.word="",this.state=_r;return}if(Fc.test(i)){this.word=i,this.state=Dc;return}if(Yr.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in neutral yet, index '+this.place)};Zt.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Wa)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function _g(i){var e=new Zt(i);return e.output()}function Hl(i,e,t){Array.isArray(e)&&(t.unshift(e),e=null);var n=e?{}:i,s=t.reduce(function(r,o){return hn(o,r),r},n);e&&(i[e]=s)}function hn(i,e){if(!Array.isArray(i)){e[i]=!0;return}var t=i.shift();if(t==="PARAMETER"&&(t=i.shift()),i.length===1){if(Array.isArray(i[0])){e[t]={},hn(i[0],e[t]);return}e[t]=i[0];return}if(!i.length){e[t]=!0;return}if(t==="TOWGS84"){e[t]=i;return}if(t==="AXIS"){t in e||(e[t]=[]),e[t].push(i);return}Array.isArray(t)||(e[t]={});var n;switch(t){case"UNIT":case"PRIMEM":case"VERT_DATUM":e[t]={name:i[0].toLowerCase(),convert:i[1]},i.length===3&&hn(i[2],e[t]);return;case"SPHEROID":case"ELLIPSOID":e[t]={name:i[0],a:i[1],rf:i[2]},i.length===4&&hn(i[3],e[t]);return;case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":i[0]=["name",i[0]],Hl(e,t,i);return;default:for(n=-1;++n<i.length;)if(!Array.isArray(i[n]))return hn(i,e[t]);return Hl(e,t,i)}}var pg=.017453292519943295;function Cg(i,e){var t=e[0],n=e[1];!(t in i)&&n in i&&(i[t]=i[n],e.length===3&&(i[t]=e[2](i[t])))}function yt(i){return i*pg}function vg(i){if(i.type==="GEOGCS"?i.projName="longlat":i.type==="LOCAL_CS"?(i.projName="identity",i.local=!0):typeof i.PROJECTION=="object"?i.projName=Object.keys(i.PROJECTION)[0]:i.projName=i.PROJECTION,i.AXIS){for(var e="",t=0,n=i.AXIS.length;t<n;++t){var s=[i.AXIS[t][0].toLowerCase(),i.AXIS[t][1].toLowerCase()];s[0].indexOf("north")!==-1||(s[0]==="y"||s[0]==="lat")&&s[1]==="north"?e+="n":s[0].indexOf("south")!==-1||(s[0]==="y"||s[0]==="lat")&&s[1]==="south"?e+="s":s[0].indexOf("east")!==-1||(s[0]==="x"||s[0]==="lon")&&s[1]==="east"?e+="e":(s[0].indexOf("west")!==-1||(s[0]==="x"||s[0]==="lon")&&s[1]==="west")&&(e+="w")}e.length===2&&(e+="u"),e.length===3&&(i.axis=e)}i.UNIT&&(i.units=i.UNIT.name.toLowerCase(),i.units==="metre"&&(i.units="meter"),i.UNIT.convert&&(i.type==="GEOGCS"?i.DATUM&&i.DATUM.SPHEROID&&(i.to_meter=i.UNIT.convert*i.DATUM.SPHEROID.a):i.to_meter=i.UNIT.convert));var r=i.GEOGCS;i.type==="GEOGCS"&&(r=i),r&&(r.DATUM?i.datumCode=r.DATUM.name.toLowerCase():i.datumCode=r.name.toLowerCase(),i.datumCode.slice(0,2)==="d_"&&(i.datumCode=i.datumCode.slice(2)),(i.datumCode==="new_zealand_geodetic_datum_1949"||i.datumCode==="new_zealand_1949")&&(i.datumCode="nzgd49"),(i.datumCode==="wgs_1984"||i.datumCode==="world_geodetic_system_1984")&&(i.PROJECTION==="Mercator_Auxiliary_Sphere"&&(i.sphere=!0),i.datumCode="wgs84"),i.datumCode.slice(-6)==="_ferro"&&(i.datumCode=i.datumCode.slice(0,-6)),i.datumCode.slice(-8)==="_jakarta"&&(i.datumCode=i.datumCode.slice(0,-8)),~i.datumCode.indexOf("belge")&&(i.datumCode="rnb72"),r.DATUM&&r.DATUM.SPHEROID&&(i.ellps=r.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),i.ellps.toLowerCase().slice(0,13)==="international"&&(i.ellps="intl"),i.a=r.DATUM.SPHEROID.a,i.rf=parseFloat(r.DATUM.SPHEROID.rf,10)),r.DATUM&&r.DATUM.TOWGS84&&(i.datum_params=r.DATUM.TOWGS84),~i.datumCode.indexOf("osgb_1936")&&(i.datumCode="osgb36"),~i.datumCode.indexOf("osni_1952")&&(i.datumCode="osni52"),(~i.datumCode.indexOf("tm65")||~i.datumCode.indexOf("geodetic_datum_of_1965"))&&(i.datumCode="ire65"),i.datumCode==="ch1903+"&&(i.datumCode="ch1903"),~i.datumCode.indexOf("israel")&&(i.datumCode="isr93")),i.b&&!isFinite(i.b)&&(i.b=i.a);function o(h){var c=i.to_meter||1;return h*c}var a=function(h){return Cg(i,h)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",yt],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",yt],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",yt],["lat0","latitude_of_origin",yt],["lat0","standard_parallel_1",yt],["lat1","standard_parallel_1",yt],["lat2","standard_parallel_2",yt],["azimuth","Azimuth"],["alpha","azimuth",yt],["srsCode","name"]];l.forEach(a),!i.long0&&i.longc&&(i.projName==="Albers_Conic_Equal_Area"||i.projName==="Lambert_Azimuthal_Equal_Area")&&(i.long0=i.longc),!i.lat_ts&&i.lat1&&(i.projName==="Stereographic_South_Pole"||i.projName==="Polar Stereographic (variant B)")?(i.lat0=yt(i.lat1>0?90:-90),i.lat_ts=i.lat1):!i.lat_ts&&i.lat0&&i.projName==="Polar_Stereographic"&&(i.lat_ts=i.lat0,i.lat0=yt(i.lat0>0?90:-90))}function Nc(i){var e=_g(i),t=e.shift(),n=e.shift();e.unshift(["name",n]),e.unshift(["type",t]);var s={};return hn(e,s),vg(s),s}function De(i){var e=this;if(arguments.length===2){var t=arguments[1];typeof t=="string"?t.charAt(0)==="+"?De[i]=qo(arguments[1]):De[i]=Nc(arguments[1]):De[i]=t}else if(arguments.length===1){if(Array.isArray(i))return i.map(function(n){Array.isArray(n)?De.apply(e,n):De(n)});if(typeof i=="string"){if(i in De)return De[i]}else"EPSG"in i?De["EPSG:"+i.EPSG]=i:"ESRI"in i?De["ESRI:"+i.ESRI]=i:"IAU2000"in i?De["IAU2000:"+i.IAU2000]=i:console.log(i);return}}dg(De);function Rg(i){return typeof i=="string"}function bg(i){return i in De}var Eg=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function Lg(i){return Eg.some(function(e){return i.indexOf(e)>-1})}var Sg=["3857","900913","3785","102113"];function Ig(i){var e=yi(i,"authority");if(e){var t=yi(e,"epsg");return t&&Sg.indexOf(t)>-1}}function Kg(i){var e=yi(i,"extension");if(e)return yi(e,"proj4")}function Ag(i){return i[0]==="+"}function Pg(i){if(Rg(i)){if(bg(i))return De[i];if(Lg(i)){var e=Nc(i);if(Ig(e))return De["EPSG:3857"];var t=Kg(e);return t?qo(t):e}if(Ag(i))return qo(i)}else return i}function Bl(i,e){i=i||{};var t,n;if(!e)return i;for(n in e)t=e[n],t!==void 0&&(i[n]=t);return i}function Kt(i,e,t){var n=i*e;return t/Math.sqrt(1-n*n)}function Is(i){return i<0?-1:1}function S(i){return Math.abs(i)<=ye?i:i-Is(i)*fs}function wt(i,e,t){var n=i*t,s=.5*i;return n=Math.pow((1-n)/(1+n),s),Math.tan(.5*(b-e))/n}function ws(i,e){for(var t=.5*i,n,s,r=b-2*Math.atan(e),o=0;o<=15;o++)if(n=i*Math.sin(r),s=b-2*Math.atan(e*Math.pow((1-n)/(1+n),t))-r,r+=s,Math.abs(s)<=1e-10)return r;return-9999}function Og(){var i=this.b/this.a;this.es=1-i*i,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=Kt(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function Dg(i){var e=i.x,t=i.y;if(t*vt>90&&t*vt<-90&&e*vt>180&&e*vt<-180)return null;var n,s;if(Math.abs(Math.abs(t)-b)<=L)return null;if(this.sphere)n=this.x0+this.a*this.k0*S(e-this.long0),s=this.y0+this.a*this.k0*Math.log(Math.tan(ne+.5*t));else{var r=Math.sin(t),o=wt(this.e,t,r);n=this.x0+this.a*this.k0*S(e-this.long0),s=this.y0-this.a*this.k0*Math.log(o)}return i.x=n,i.y=s,i}function kg(i){var e=i.x-this.x0,t=i.y-this.y0,n,s;if(this.sphere)s=b-2*Math.atan(Math.exp(-t/(this.a*this.k0)));else{var r=Math.exp(-t/(this.a*this.k0));if(s=ws(this.e,r),s===-9999)return null}return n=S(this.long0+e/(this.a*this.k0)),i.x=n,i.y=s,i}var Fg=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const Ng={init:Og,forward:Dg,inverse:kg,names:Fg};function Gg(){}function jl(i){return i}var Wg=["longlat","identity"];const zg={init:Gg,forward:jl,inverse:jl,names:Wg};var Hg=[Ng,zg],ar={},pr=[];function Gc(i,e){var t=pr.length;return i.names?(pr[t]=i,i.names.forEach(function(n){ar[n.toLowerCase()]=t}),this):(console.log(e),!0)}function Bg(i){if(!i)return!1;var e=i.toLowerCase();if(typeof ar[e]<"u"&&pr[ar[e]])return pr[ar[e]]}function jg(){Hg.forEach(Gc)}const Vg={start:jg,add:Gc,get:Bg};var z={};z.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};z.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};z.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};z.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};z.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};z.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};z.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};z.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};z.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};z.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};z.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};z.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};z.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};z.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};z.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};z.clrk80ign={a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"};z.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};z.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};z.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};z.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};z.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};z.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};z.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};z.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};z.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};z.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};z.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};z.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};z.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};z.hough={a:6378270,rf:297,ellipseName:"Hough"};z.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};z.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};z.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};z.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};z.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};z.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};z.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};z.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};z.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};z.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};z.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};z.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var Xg=z.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};z.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function Ug(i,e,t,n){var s=i*i,r=e*e,o=(s-r)/s,a=0;n?(i*=1-o*(gg+o*(wg+o*Mg)),s=i*i,o=0):a=Math.sqrt(o);var l=(s-r)/r;return{es:o,e:a,ep2:l}}function Yg(i,e,t,n,s){if(!i){var r=yi(z,n);r||(r=Xg),i=r.a,e=r.b,t=r.rf}return t&&!e&&(e=(1-1/t)*i),(t===0||Math.abs(i-e)<L)&&(s=!0,e=i),{a:i,b:e,rf:t,sphere:s}}var xe={};xe.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};xe.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};xe.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};xe.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};xe.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};xe.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};xe.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};xe.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};xe.militargeographische_institut={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"};xe.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};xe.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};xe.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};xe.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};xe.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};xe.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};xe.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};xe.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};xe.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function qg(i,e,t,n,s,r,o){var a={};return i===void 0||i==="none"?a.datum_type=Yo:a.datum_type=ug,e&&(a.datum_params=e.map(parseFloat),(a.datum_params[0]!==0||a.datum_params[1]!==0||a.datum_params[2]!==0)&&(a.datum_type=Ni),a.datum_params.length>3&&(a.datum_params[3]!==0||a.datum_params[4]!==0||a.datum_params[5]!==0||a.datum_params[6]!==0)&&(a.datum_type=Gi,a.datum_params[3]*=ts,a.datum_params[4]*=ts,a.datum_params[5]*=ts,a.datum_params[6]=a.datum_params[6]/1e6+1)),o&&(a.datum_type=Mn,a.grids=o),a.a=t,a.b=n,a.es=s,a.ep2=r,a}var Wc={};function Zg(i,e){var t=new DataView(e),n=Qg(t),s=e0(t,n),r=t0(t,s,n),o={header:s,subgrids:r};return Wc[i]=o,o}function $g(i){if(i===void 0)return null;var e=i.split(",");return e.map(Jg)}function Jg(i){if(i.length===0)return null;var e=i[0]==="@";return e&&(i=i.slice(1)),i==="null"?{name:"null",mandatory:!e,grid:null,isNull:!0}:{name:i,mandatory:!e,grid:Wc[i]||null,isNull:!1}}function cn(i){return i/3600*Math.PI/180}function Qg(i){var e=i.getInt32(8,!1);return e===11?!1:(e=i.getInt32(8,!0),e!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function e0(i,e){return{nFields:i.getInt32(8,e),nSubgridFields:i.getInt32(24,e),nSubgrids:i.getInt32(40,e),shiftType:Zo(i,56,64).trim(),fromSemiMajorAxis:i.getFloat64(120,e),fromSemiMinorAxis:i.getFloat64(136,e),toSemiMajorAxis:i.getFloat64(152,e),toSemiMinorAxis:i.getFloat64(168,e)}}function Zo(i,e,t){return String.fromCharCode.apply(null,new Uint8Array(i.buffer.slice(e,t)))}function t0(i,e,t){for(var n=176,s=[],r=0;r<e.nSubgrids;r++){var o=n0(i,n,t),a=s0(i,n,o,t),l=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),h=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);s.push({ll:[cn(o.lowerLongitude),cn(o.lowerLatitude)],del:[cn(o.longitudeInterval),cn(o.latitudeInterval)],lim:[l,h],count:o.gridNodeCount,cvs:i0(a)}),n+=176+o.gridNodeCount*16}return s}function i0(i){return i.map(function(e){return[cn(e.longitudeShift),cn(e.latitudeShift)]})}function n0(i,e,t){return{name:Zo(i,e+8,e+16).trim(),parent:Zo(i,e+24,e+24+8).trim(),lowerLatitude:i.getFloat64(e+72,t),upperLatitude:i.getFloat64(e+88,t),lowerLongitude:i.getFloat64(e+104,t),upperLongitude:i.getFloat64(e+120,t),latitudeInterval:i.getFloat64(e+136,t),longitudeInterval:i.getFloat64(e+152,t),gridNodeCount:i.getInt32(e+168,t)}}function s0(i,e,t,n){for(var s=e+176,r=16,o=[],a=0;a<t.gridNodeCount;a++){var l={latitudeShift:i.getFloat32(s+a*r,n),longitudeShift:i.getFloat32(s+a*r+4,n),latitudeAccuracy:i.getFloat32(s+a*r+8,n),longitudeAccuracy:i.getFloat32(s+a*r+12,n)};o.push(l)}return o}function Lt(i,e){if(!(this instanceof Lt))return new Lt(i);e=e||function(h){if(h)throw h};var t=Pg(i);if(typeof t!="object"){e(i);return}var n=Lt.projections.get(t.projName);if(!n){e(i);return}if(t.datumCode&&t.datumCode!=="none"){var s=yi(xe,t.datumCode);s&&(t.datum_params=t.datum_params||(s.towgs84?s.towgs84.split(","):null),t.ellps=s.ellipse,t.datumName=s.datumName?s.datumName:t.datumCode)}t.k0=t.k0||1,t.axis=t.axis||"enu",t.ellps=t.ellps||"wgs84",t.lat1=t.lat1||t.lat0;var r=Yg(t.a,t.b,t.rf,t.ellps,t.sphere),o=Ug(r.a,r.b,r.rf,t.R_A),a=$g(t.nadgrids),l=t.datum||qg(t.datumCode,t.datum_params,r.a,r.b,o.es,o.ep2,a);Bl(this,t),Bl(this,n),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=l,this.init(),e(null,this)}Lt.projections=Vg;Lt.projections.start();function r0(i,e){return i.datum_type!==e.datum_type||i.a!==e.a||Math.abs(i.es-e.es)>5e-11?!1:i.datum_type===Ni?i.datum_params[0]===e.datum_params[0]&&i.datum_params[1]===e.datum_params[1]&&i.datum_params[2]===e.datum_params[2]:i.datum_type===Gi?i.datum_params[0]===e.datum_params[0]&&i.datum_params[1]===e.datum_params[1]&&i.datum_params[2]===e.datum_params[2]&&i.datum_params[3]===e.datum_params[3]&&i.datum_params[4]===e.datum_params[4]&&i.datum_params[5]===e.datum_params[5]&&i.datum_params[6]===e.datum_params[6]:!0}function zc(i,e,t){var n=i.x,s=i.y,r=i.z?i.z:0,o,a,l,h;if(s<-b&&s>-1.001*b)s=-b;else if(s>b&&s<1.001*b)s=b;else{if(s<-b)return{x:-1/0,y:-1/0,z:i.z};if(s>b)return{x:1/0,y:1/0,z:i.z}}return n>Math.PI&&(n-=2*Math.PI),a=Math.sin(s),h=Math.cos(s),l=a*a,o=t/Math.sqrt(1-e*l),{x:(o+r)*h*Math.cos(n),y:(o+r)*h*Math.sin(n),z:(o*(1-e)+r)*a}}function Hc(i,e,t,n){var s=1e-12,r=s*s,o=30,a,l,h,c,d,u,f,g,w,M,m,T,y,x=i.x,_=i.y,p=i.z?i.z:0,R,C,I;if(a=Math.sqrt(x*x+_*_),l=Math.sqrt(x*x+_*_+p*p),a/t<s){if(R=0,l/t<s)return C=b,I=-n,{x:i.x,y:i.y,z:i.z}}else R=Math.atan2(_,x);h=p/l,c=a/l,d=1/Math.sqrt(1-e*(2-e)*c*c),g=c*(1-e)*d,w=h*d,y=0;do y++,f=t/Math.sqrt(1-e*w*w),I=a*g+p*w-f*(1-e*w*w),u=e*f/(f+I),d=1/Math.sqrt(1-u*(2-u)*c*c),M=c*(1-u)*d,m=h*d,T=m*g-M*w,g=M,w=m;while(T*T>r&&y<o);return C=Math.atan(m/Math.abs(M)),{x:R,y:C,z:I}}function o0(i,e,t){if(e===Ni)return{x:i.x+t[0],y:i.y+t[1],z:i.z+t[2]};if(e===Gi){var n=t[0],s=t[1],r=t[2],o=t[3],a=t[4],l=t[5],h=t[6];return{x:h*(i.x-l*i.y+a*i.z)+n,y:h*(l*i.x+i.y-o*i.z)+s,z:h*(-a*i.x+o*i.y+i.z)+r}}}function a0(i,e,t){if(e===Ni)return{x:i.x-t[0],y:i.y-t[1],z:i.z-t[2]};if(e===Gi){var n=t[0],s=t[1],r=t[2],o=t[3],a=t[4],l=t[5],h=t[6],c=(i.x-n)/h,d=(i.y-s)/h,u=(i.z-r)/h;return{x:c+l*d-a*u,y:-l*c+d+o*u,z:a*c-o*d+u}}}function Js(i){return i===Ni||i===Gi}function l0(i,e,t){if(r0(i,e)||i.datum_type===Yo||e.datum_type===Yo)return t;var n=i.a,s=i.es;if(i.datum_type===Mn){var r=Vl(i,!1,t);if(r!==0)return;n=Gl,s=Wl}var o=e.a,a=e.b,l=e.es;if(e.datum_type===Mn&&(o=Gl,a=fg,l=Wl),s===l&&n===o&&!Js(i.datum_type)&&!Js(e.datum_type))return t;if(t=zc(t,s,n),Js(i.datum_type)&&(t=o0(t,i.datum_type,i.datum_params)),Js(e.datum_type)&&(t=a0(t,e.datum_type,e.datum_params)),t=Hc(t,l,o,a),e.datum_type===Mn){var h=Vl(e,!0,t);if(h!==0)return}return t}function Vl(i,e,t){if(i.grids===null||i.grids.length===0)return console.log("Grid shift grids not found"),-1;var n={x:-t.x,y:t.y},s={x:Number.NaN,y:Number.NaN},r=[];e:for(var o=0;o<i.grids.length;o++){var a=i.grids[o];if(r.push(a.name),a.isNull){s=n;break}if(a.mandatory,a.grid===null){if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1;continue}for(var l=a.grid.subgrids,h=0,c=l.length;h<c;h++){var d=l[h],u=(Math.abs(d.del[1])+Math.abs(d.del[0]))/1e4,f=d.ll[0]-u,g=d.ll[1]-u,w=d.ll[0]+(d.lim[0]-1)*d.del[0]+u,M=d.ll[1]+(d.lim[1]-1)*d.del[1]+u;if(!(g>n.y||f>n.x||M<n.y||w<n.x)&&(s=h0(n,e,d),!isNaN(s.x)))break e}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-n.x*vt+" "+n.y*vt+" tried: '"+r+"'"),-1):(t.x=-s.x,t.y=s.y,0)}function h0(i,e,t){var n={x:Number.NaN,y:Number.NaN};if(isNaN(i.x))return n;var s={x:i.x,y:i.y};s.x-=t.ll[0],s.y-=t.ll[1],s.x=S(s.x-Math.PI)+Math.PI;var r=Xl(s,t);if(e){if(isNaN(r.x))return n;r.x=s.x-r.x,r.y=s.y-r.y;var o=9,a=1e-12,l,h;do{if(h=Xl(r,t),isNaN(h.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:s.x-(h.x+r.x),y:s.y-(h.y+r.y)},r.x+=l.x,r.y+=l.y}while(o--&&Math.abs(l.x)>a&&Math.abs(l.y)>a);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),n;n.x=S(r.x+t.ll[0]),n.y=r.y+t.ll[1]}else isNaN(r.x)||(n.x=i.x+r.x,n.y=i.y+r.y);return n}function Xl(i,e){var t={x:i.x/e.del[0],y:i.y/e.del[1]},n={x:Math.floor(t.x),y:Math.floor(t.y)},s={x:t.x-1*n.x,y:t.y-1*n.y},r={x:Number.NaN,y:Number.NaN},o;if(n.x<0||n.x>=e.lim[0]||n.y<0||n.y>=e.lim[1])return r;o=n.y*e.lim[0]+n.x;var a={x:e.cvs[o][0],y:e.cvs[o][1]};o++;var l={x:e.cvs[o][0],y:e.cvs[o][1]};o+=e.lim[0];var h={x:e.cvs[o][0],y:e.cvs[o][1]};o--;var c={x:e.cvs[o][0],y:e.cvs[o][1]},d=s.x*s.y,u=s.x*(1-s.y),f=(1-s.x)*(1-s.y),g=(1-s.x)*s.y;return r.x=f*a.x+u*l.x+g*c.x+d*h.x,r.y=f*a.y+u*l.y+g*c.y+d*h.y,r}function Ul(i,e,t){var n=t.x,s=t.y,r=t.z||0,o,a,l,h={};for(l=0;l<3;l++)if(!(e&&l===2&&t.z===void 0))switch(l===0?(o=n,"ew".indexOf(i.axis[l])!==-1?a="x":a="y"):l===1?(o=s,"ns".indexOf(i.axis[l])!==-1?a="y":a="x"):(o=r,a="z"),i.axis[l]){case"e":h[a]=o;break;case"w":h[a]=-o;break;case"n":h[a]=o;break;case"s":h[a]=-o;break;case"u":t[a]!==void 0&&(h.z=o);break;case"d":t[a]!==void 0&&(h.z=-o);break;default:return null}return h}function Bc(i){var e={x:i[0],y:i[1]};return i.length>2&&(e.z=i[2]),i.length>3&&(e.m=i[3]),e}function c0(i){Yl(i.x),Yl(i.y)}function Yl(i){if(typeof Number.isFinite=="function"){if(Number.isFinite(i))return;throw new TypeError("coordinates must be finite numbers")}if(typeof i!="number"||i!==i||!isFinite(i))throw new TypeError("coordinates must be finite numbers")}function d0(i,e){return(i.datum.datum_type===Ni||i.datum.datum_type===Gi||i.datum.datum_type===Mn)&&e.datumCode!=="WGS84"||(e.datum.datum_type===Ni||e.datum.datum_type===Gi||e.datum.datum_type===Mn)&&i.datumCode!=="WGS84"}function Cr(i,e,t,n){var s;Array.isArray(t)?t=Bc(t):t={x:t.x,y:t.y,z:t.z,m:t.m};var r=t.z!==void 0;if(c0(t),i.datum&&e.datum&&d0(i,e)&&(s=new Lt("WGS84"),t=Cr(i,s,t,n),i=s),n&&i.axis!=="enu"&&(t=Ul(i,!1,t)),i.projName==="longlat")t={x:t.x*ve,y:t.y*ve,z:t.z||0};else if(i.to_meter&&(t={x:t.x*i.to_meter,y:t.y*i.to_meter,z:t.z||0}),t=i.inverse(t),!t)return;if(i.from_greenwich&&(t.x+=i.from_greenwich),t=l0(i.datum,e.datum,t),!!t)return e.from_greenwich&&(t={x:t.x-e.from_greenwich,y:t.y,z:t.z||0}),e.projName==="longlat"?t={x:t.x*vt,y:t.y*vt,z:t.z||0}:(t=e.forward(t),e.to_meter&&(t={x:t.x/e.to_meter,y:t.y/e.to_meter,z:t.z||0})),n&&e.axis!=="enu"?Ul(e,!0,t):(t&&!r&&delete t.z,t)}var ql=Lt("WGS84");function yo(i,e,t,n){var s,r,o;return Array.isArray(t)?(s=Cr(i,e,t,n)||{x:NaN,y:NaN},t.length>2?typeof i.name<"u"&&i.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(t.splice(3)):[s.x,s.y,t[2]].concat(t.splice(3)):[s.x,s.y].concat(t.splice(2)):[s.x,s.y]):(r=Cr(i,e,t,n),o=Object.keys(t),o.length===2||o.forEach(function(a){if(typeof i.name<"u"&&i.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"){if(a==="x"||a==="y"||a==="z")return}else if(a==="x"||a==="y")return;r[a]=t[a]}),r)}function Zl(i){return i instanceof Lt?i:i.oProj?i.oProj:Lt(i)}function Fe(i,e,t){i=Zl(i);var n=!1,s;return typeof e>"u"?(e=i,i=ql,n=!0):(typeof e.x<"u"||Array.isArray(e))&&(t=e,e=i,i=ql,n=!0),e=Zl(e),t?yo(i,e,t):(s={forward:function(r,o){return yo(i,e,r,o)},inverse:function(r,o){return yo(e,i,r,o)}},n&&(s.oProj=e),s)}var $l=6,jc="AJSAJS",Vc="AFAFAF",dn=65,ze=73,at=79,Yn=86,qn=90;const u0={forward:Xc,inverse:f0,toPoint:Uc};function Xc(i,e){return e=e||5,M0(g0({lat:i[1],lon:i[0]}),e)}function f0(i){var e=za(qc(i.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat,e.lon,e.lat]:[e.left,e.bottom,e.right,e.top]}function Uc(i){var e=za(qc(i.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat]:[(e.left+e.right)/2,(e.top+e.bottom)/2]}function xo(i){return i*(Math.PI/180)}function Jl(i){return 180*(i/Math.PI)}function g0(i){var e=i.lat,t=i.lon,n=6378137,s=.00669438,r=.9996,o,a,l,h,c,d,u,f=xo(e),g=xo(t),w,M;M=Math.floor((t+180)/6)+1,t===180&&(M=60),e>=56&&e<64&&t>=3&&t<12&&(M=32),e>=72&&e<84&&(t>=0&&t<9?M=31:t>=9&&t<21?M=33:t>=21&&t<33?M=35:t>=33&&t<42&&(M=37)),o=(M-1)*6-180+3,w=xo(o),a=s/(1-s),l=n/Math.sqrt(1-s*Math.sin(f)*Math.sin(f)),h=Math.tan(f)*Math.tan(f),c=a*Math.cos(f)*Math.cos(f),d=Math.cos(f)*(g-w),u=n*((1-s/4-3*s*s/64-5*s*s*s/256)*f-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*f)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*f)-35*s*s*s/3072*Math.sin(6*f));var m=r*l*(d+(1-h+c)*d*d*d/6+(5-18*h+h*h+72*c-58*a)*d*d*d*d*d/120)+5e5,T=r*(u+l*Math.tan(f)*(d*d/2+(5-h+9*c+4*c*c)*d*d*d*d/24+(61-58*h+h*h+600*c-330*a)*d*d*d*d*d*d/720));return e<0&&(T+=1e7),{northing:Math.round(T),easting:Math.round(m),zoneNumber:M,zoneLetter:w0(e)}}function za(i){var e=i.northing,t=i.easting,n=i.zoneLetter,s=i.zoneNumber;if(s<0||s>60)return null;var r=.9996,o=6378137,a=.00669438,l,h=(1-Math.sqrt(1-a))/(1+Math.sqrt(1-a)),c,d,u,f,g,w,M,m,T,y=t-5e5,x=e;n<"N"&&(x-=1e7),M=(s-1)*6-180+3,l=a/(1-a),w=x/r,m=w/(o*(1-a/4-3*a*a/64-5*a*a*a/256)),T=m+(3*h/2-27*h*h*h/32)*Math.sin(2*m)+(21*h*h/16-55*h*h*h*h/32)*Math.sin(4*m)+151*h*h*h/96*Math.sin(6*m),c=o/Math.sqrt(1-a*Math.sin(T)*Math.sin(T)),d=Math.tan(T)*Math.tan(T),u=l*Math.cos(T)*Math.cos(T),f=o*(1-a)/Math.pow(1-a*Math.sin(T)*Math.sin(T),1.5),g=y/(c*r);var _=T-c*Math.tan(T)/f*(g*g/2-(5+3*d+10*u-4*u*u-9*l)*g*g*g*g/24+(61+90*d+298*u+45*d*d-252*l-3*u*u)*g*g*g*g*g*g/720);_=Jl(_);var p=(g-(1+2*d+u)*g*g*g/6+(5-2*u+28*d-3*u*u+8*l+24*d*d)*g*g*g*g*g/120)/Math.cos(T);p=M+Jl(p);var R;if(i.accuracy){var C=za({northing:i.northing+i.accuracy,easting:i.easting+i.accuracy,zoneLetter:i.zoneLetter,zoneNumber:i.zoneNumber});R={top:C.lat,right:C.lon,bottom:_,left:p}}else R={lat:_,lon:p};return R}function w0(i){var e="Z";return 84>=i&&i>=72?e="X":72>i&&i>=64?e="W":64>i&&i>=56?e="V":56>i&&i>=48?e="U":48>i&&i>=40?e="T":40>i&&i>=32?e="S":32>i&&i>=24?e="R":24>i&&i>=16?e="Q":16>i&&i>=8?e="P":8>i&&i>=0?e="N":0>i&&i>=-8?e="M":-8>i&&i>=-16?e="L":-16>i&&i>=-24?e="K":-24>i&&i>=-32?e="J":-32>i&&i>=-40?e="H":-40>i&&i>=-48?e="G":-48>i&&i>=-56?e="F":-56>i&&i>=-64?e="E":-64>i&&i>=-72?e="D":-72>i&&i>=-80&&(e="C"),e}function M0(i,e){var t="00000"+i.easting,n="00000"+i.northing;return i.zoneNumber+i.zoneLetter+m0(i.easting,i.northing,i.zoneNumber)+t.substr(t.length-5,e)+n.substr(n.length-5,e)}function m0(i,e,t){var n=Yc(t),s=Math.floor(i/1e5),r=Math.floor(e/1e5)%20;return T0(s,r,n)}function Yc(i){var e=i%$l;return e===0&&(e=$l),e}function T0(i,e,t){var n=t-1,s=jc.charCodeAt(n),r=Vc.charCodeAt(n),o=s+i-1,a=r+e,l=!1;o>qn&&(o=o-qn+dn-1,l=!0),(o===ze||s<ze&&o>ze||(o>ze||s<ze)&&l)&&o++,(o===at||s<at&&o>at||(o>at||s<at)&&l)&&(o++,o===ze&&o++),o>qn&&(o=o-qn+dn-1),a>Yn?(a=a-Yn+dn-1,l=!0):l=!1,(a===ze||r<ze&&a>ze||(a>ze||r<ze)&&l)&&a++,(a===at||r<at&&a>at||(a>at||r<at)&&l)&&(a++,a===ze&&a++),a>Yn&&(a=a-Yn+dn-1);var h=String.fromCharCode(o)+String.fromCharCode(a);return h}function qc(i){if(i&&i.length===0)throw"MGRSPoint coverting from nothing";for(var e=i.length,t=null,n="",s,r=0;!/[A-Z]/.test(s=i.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+i;n+=s,r++}var o=parseInt(n,10);if(r===0||r+3>e)throw"MGRSPoint bad conversion from: "+i;var a=i.charAt(r++);if(a<="A"||a==="B"||a==="Y"||a>="Z"||a==="I"||a==="O")throw"MGRSPoint zone letter "+a+" not handled: "+i;t=i.substring(r,r+=2);for(var l=Yc(o),h=y0(t.charAt(0),l),c=x0(t.charAt(1),l);c<_0(a);)c+=2e6;var d=e-r;if(d%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+i;var u=d/2,f=0,g=0,w,M,m,T,y;return u>0&&(w=1e5/Math.pow(10,u),M=i.substring(r,r+u),f=parseFloat(M)*w,m=i.substring(r+u),g=parseFloat(m)*w),T=f+h,y=g+c,{easting:T,northing:y,zoneLetter:a,zoneNumber:o,accuracy:w}}function y0(i,e){for(var t=jc.charCodeAt(e-1),n=1e5,s=!1;t!==i.charCodeAt(0);){if(t++,t===ze&&t++,t===at&&t++,t>qn){if(s)throw"Bad character: "+i;t=dn,s=!0}n+=1e5}return n}function x0(i,e){if(i>"V")throw"MGRSPoint given invalid Northing "+i;for(var t=Vc.charCodeAt(e-1),n=0,s=!1;t!==i.charCodeAt(0);){if(t++,t===ze&&t++,t===at&&t++,t>Yn){if(s)throw"Bad character: "+i;t=dn,s=!0}n+=1e5}return n}function _0(i){var e;switch(i){case"C":e=11e5;break;case"D":e=2e6;break;case"E":e=28e5;break;case"F":e=37e5;break;case"G":e=46e5;break;case"H":e=55e5;break;case"J":e=64e5;break;case"K":e=73e5;break;case"L":e=82e5;break;case"M":e=91e5;break;case"N":e=0;break;case"P":e=8e5;break;case"Q":e=17e5;break;case"R":e=26e5;break;case"S":e=35e5;break;case"T":e=44e5;break;case"U":e=53e5;break;case"V":e=62e5;break;case"W":e=7e6;break;case"X":e=79e5;break;default:e=-1}if(e>=0)return e;throw"Invalid zone letter: "+i}function bn(i,e,t){if(!(this instanceof bn))return new bn(i,e,t);if(Array.isArray(i))this.x=i[0],this.y=i[1],this.z=i[2]||0;else if(typeof i=="object")this.x=i.x,this.y=i.y,this.z=i.z||0;else if(typeof i=="string"&&typeof e>"u"){var n=i.split(",");this.x=parseFloat(n[0],10),this.y=parseFloat(n[1],10),this.z=parseFloat(n[2],10)||0}else this.x=i,this.y=e,this.z=t||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}bn.fromMGRS=function(i){return new bn(Uc(i))};bn.prototype.toMGRS=function(i){return Xc([this.x,this.y],i)};var p0=1,C0=.25,Ql=.046875,eh=.01953125,th=.01068115234375,v0=.75,R0=.46875,b0=.013020833333333334,E0=.007120768229166667,L0=.3645833333333333,S0=.005696614583333333,I0=.3076171875;function Zc(i){var e=[];e[0]=p0-i*(C0+i*(Ql+i*(eh+i*th))),e[1]=i*(v0-i*(Ql+i*(eh+i*th)));var t=i*i;return e[2]=t*(R0-i*(b0+i*E0)),t*=i,e[3]=t*(L0-i*S0),e[4]=t*i*I0,e}function qr(i,e,t,n){return t*=e,e*=e,n[0]*i-t*(n[1]+e*(n[2]+e*(n[3]+e*n[4])))}var K0=20;function $c(i,e,t){for(var n=1/(1-e),s=i,r=K0;r;--r){var o=Math.sin(s),a=1-e*o*o;if(a=(qr(s,o,Math.cos(s),t)-i)*(a*Math.sqrt(a))*n,s-=a,Math.abs(a)<L)return s}return s}function A0(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=Zc(this.es),this.ml0=qr(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function P0(i){var e=i.x,t=i.y,n=S(e-this.long0),s,r,o,a=Math.sin(t),l=Math.cos(t);if(this.es){var c=l*n,d=Math.pow(c,2),u=this.ep2*Math.pow(l,2),f=Math.pow(u,2),g=Math.abs(l)>L?Math.tan(t):0,w=Math.pow(g,2),M=Math.pow(w,2);s=1-this.es*Math.pow(a,2),c=c/Math.sqrt(s);var m=qr(t,a,l,this.en);r=this.a*(this.k0*c*(1+d/6*(1-w+u+d/20*(5-18*w+M+14*u-58*w*u+d/42*(61+179*M-M*w-479*w)))))+this.x0,o=this.a*(this.k0*(m-this.ml0+a*n*c/2*(1+d/12*(5-w+9*u+4*f+d/30*(61+M-58*w+270*u-330*w*u+d/56*(1385+543*M-M*w-3111*w))))))+this.y0}else{var h=l*Math.sin(n);if(Math.abs(Math.abs(h)-1)<L)return 93;if(r=.5*this.a*this.k0*Math.log((1+h)/(1-h))+this.x0,o=l*Math.cos(n)/Math.sqrt(1-Math.pow(h,2)),h=Math.abs(o),h>=1){if(h-1>L)return 93;o=0}else o=Math.acos(o);t<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return i.x=r,i.y=o,i}function O0(i){var e,t,n,s,r=(i.x-this.x0)*(1/this.a),o=(i.y-this.y0)*(1/this.a);if(this.es)if(e=this.ml0+o/this.k0,t=$c(e,this.es,this.en),Math.abs(t)<b){var d=Math.sin(t),u=Math.cos(t),f=Math.abs(u)>L?Math.tan(t):0,g=this.ep2*Math.pow(u,2),w=Math.pow(g,2),M=Math.pow(f,2),m=Math.pow(M,2);e=1-this.es*Math.pow(d,2);var T=r*Math.sqrt(e)/this.k0,y=Math.pow(T,2);e=e*f,n=t-e*y/(1-this.es)*.5*(1-y/12*(5+3*M-9*g*M+g-4*w-y/30*(61+90*M-252*g*M+45*m+46*g-y/56*(1385+3633*M+4095*m+1574*m*M)))),s=S(this.long0+T*(1-y/6*(1+2*M+g-y/20*(5+28*M+24*m+8*g*M+6*g-y/42*(61+662*M+1320*m+720*m*M))))/u)}else n=b*Is(o),s=0;else{var a=Math.exp(r/this.k0),l=.5*(a-1/a),h=this.lat0+o/this.k0,c=Math.cos(h);e=Math.sqrt((1-Math.pow(c,2))/(1+Math.pow(l,2))),n=Math.asin(e),o<0&&(n=-n),l===0&&c===0?s=0:s=S(Math.atan2(l,c)+this.long0)}return i.x=s,i.y=n,i}var D0=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const lr={init:A0,forward:P0,inverse:O0,names:D0};function Jc(i){var e=Math.exp(i);return e=(e-1/e)/2,e}function ht(i,e){i=Math.abs(i),e=Math.abs(e);var t=Math.max(i,e),n=Math.min(i,e)/(t||1);return t*Math.sqrt(1+Math.pow(n,2))}function k0(i){var e=1+i,t=e-1;return t===0?i:i*Math.log(e)/t}function F0(i){var e=Math.abs(i);return e=k0(e*(1+e/(ht(1,e)+1))),i<0?-e:e}function Ha(i,e){for(var t=2*Math.cos(2*e),n=i.length-1,s=i[n],r=0,o;--n>=0;)o=-r+t*s+i[n],r=s,s=o;return e+o*Math.sin(2*e)}function N0(i,e){for(var t=2*Math.cos(e),n=i.length-1,s=i[n],r=0,o;--n>=0;)o=-r+t*s+i[n],r=s,s=o;return Math.sin(e)*o}function G0(i){var e=Math.exp(i);return e=(e+1/e)/2,e}function Qc(i,e,t){for(var n=Math.sin(e),s=Math.cos(e),r=Jc(t),o=G0(t),a=2*s*o,l=-2*n*r,h=i.length-1,c=i[h],d=0,u=0,f=0,g,w;--h>=0;)g=u,w=d,u=c,d=f,c=-g+a*u-l*d+i[h],f=-w+l*u+a*d;return a=n*o,l=s*r,[a*c-l*f,a*f+l*c]}function W0(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(lr.init.apply(this),this.forward=lr.forward,this.inverse=lr.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var i=this.es/(1+Math.sqrt(1-this.es)),e=i/(2-i),t=e;this.cgb[0]=e*(2+e*(-2/3+e*(-2+e*(116/45+e*(26/45+e*(-2854/675)))))),this.cbg[0]=e*(-2+e*(2/3+e*(4/3+e*(-82/45+e*(32/45+e*(4642/4725)))))),t=t*e,this.cgb[1]=t*(7/3+e*(-8/5+e*(-227/45+e*(2704/315+e*(2323/945))))),this.cbg[1]=t*(5/3+e*(-16/15+e*(-13/9+e*(904/315+e*(-1522/945))))),t=t*e,this.cgb[2]=t*(56/15+e*(-136/35+e*(-1262/105+e*(73814/2835)))),this.cbg[2]=t*(-26/15+e*(34/21+e*(8/5+e*(-12686/2835)))),t=t*e,this.cgb[3]=t*(4279/630+e*(-332/35+e*(-399572/14175))),this.cbg[3]=t*(1237/630+e*(-12/5+e*(-24832/14175))),t=t*e,this.cgb[4]=t*(4174/315+e*(-144838/6237)),this.cbg[4]=t*(-734/315+e*(109598/31185)),t=t*e,this.cgb[5]=t*(601676/22275),this.cbg[5]=t*(444337/155925),t=Math.pow(e,2),this.Qn=this.k0/(1+e)*(1+t*(1/4+t*(1/64+t/256))),this.utg[0]=e*(-.5+e*(2/3+e*(-37/96+e*(1/360+e*(81/512+e*(-96199/604800)))))),this.gtu[0]=e*(.5+e*(-2/3+e*(5/16+e*(41/180+e*(-127/288+e*(7891/37800)))))),this.utg[1]=t*(-1/48+e*(-1/15+e*(437/1440+e*(-46/105+e*(1118711/3870720))))),this.gtu[1]=t*(13/48+e*(-3/5+e*(557/1440+e*(281/630+e*(-1983433/1935360))))),t=t*e,this.utg[2]=t*(-17/480+e*(37/840+e*(209/4480+e*(-5569/90720)))),this.gtu[2]=t*(61/240+e*(-103/140+e*(15061/26880+e*(167603/181440)))),t=t*e,this.utg[3]=t*(-4397/161280+e*(11/504+e*(830251/7257600))),this.gtu[3]=t*(49561/161280+e*(-179/168+e*(6601661/7257600))),t=t*e,this.utg[4]=t*(-4583/161280+e*(108847/3991680)),this.gtu[4]=t*(34729/80640+e*(-3418889/1995840)),t=t*e,this.utg[5]=t*(-20648693/638668800),this.gtu[5]=t*(212378941/319334400);var n=Ha(this.cbg,this.lat0);this.Zb=-this.Qn*(n+N0(this.gtu,2*n))}function z0(i){var e=S(i.x-this.long0),t=i.y;t=Ha(this.cbg,t);var n=Math.sin(t),s=Math.cos(t),r=Math.sin(e),o=Math.cos(e);t=Math.atan2(n,o*s),e=Math.atan2(r*s,ht(n,s*o)),e=F0(Math.tan(e));var a=Qc(this.gtu,2*t,2*e);t=t+a[0],e=e+a[1];var l,h;return Math.abs(e)<=2.623395162778?(l=this.a*(this.Qn*e)+this.x0,h=this.a*(this.Qn*t+this.Zb)+this.y0):(l=1/0,h=1/0),i.x=l,i.y=h,i}function H0(i){var e=(i.x-this.x0)*(1/this.a),t=(i.y-this.y0)*(1/this.a);t=(t-this.Zb)/this.Qn,e=e/this.Qn;var n,s;if(Math.abs(e)<=2.623395162778){var r=Qc(this.utg,2*t,2*e);t=t+r[0],e=e+r[1],e=Math.atan(Jc(e));var o=Math.sin(t),a=Math.cos(t),l=Math.sin(e),h=Math.cos(e);t=Math.atan2(o*h,ht(l,h*a)),e=Math.atan2(l,h*a),n=S(e+this.long0),s=Ha(this.cgb,t)}else n=1/0,s=1/0;return i.x=n,i.y=s,i}var B0=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const hr={init:W0,forward:z0,inverse:H0,names:B0};function j0(i,e){if(i===void 0){if(i=Math.floor((S(e)+Math.PI)*30/Math.PI)+1,i<0)return 0;if(i>60)return 60}return i}var V0="etmerc";function X0(){var i=j0(this.zone,this.long0);if(i===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(i)-183)*ve,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,hr.init.apply(this),this.forward=hr.forward,this.inverse=hr.inverse}var U0=["Universal Transverse Mercator System","utm"];const Y0={init:X0,names:U0,dependsOn:V0};function Ba(i,e){return Math.pow((1-i)/(1+i),e)}var q0=20;function Z0(){var i=Math.sin(this.lat0),e=Math.cos(this.lat0);e*=e,this.rc=Math.sqrt(1-this.es)/(1-this.es*i*i),this.C=Math.sqrt(1+this.es*e*e/(1-this.es)),this.phic0=Math.asin(i/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+ne)/(Math.pow(Math.tan(.5*this.lat0+ne),this.C)*Ba(this.e*i,this.ratexp))}function $0(i){var e=i.x,t=i.y;return i.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*t+ne),this.C)*Ba(this.e*Math.sin(t),this.ratexp))-b,i.x=this.C*e,i}function J0(i){for(var e=1e-14,t=i.x/this.C,n=i.y,s=Math.pow(Math.tan(.5*n+ne)/this.K,1/this.C),r=q0;r>0&&(n=2*Math.atan(s*Ba(this.e*Math.sin(i.y),-.5*this.e))-b,!(Math.abs(n-i.y)<e));--r)i.y=n;return r?(i.x=t,i.y=n,i):null}const ja={init:Z0,forward:$0,inverse:J0};function Q0(){ja.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function ew(i){var e,t,n,s;return i.x=S(i.x-this.long0),ja.forward.apply(this,[i]),e=Math.sin(i.y),t=Math.cos(i.y),n=Math.cos(i.x),s=this.k0*this.R2/(1+this.sinc0*e+this.cosc0*t*n),i.x=s*t*Math.sin(i.x),i.y=s*(this.cosc0*e-this.sinc0*t*n),i.x=this.a*i.x+this.x0,i.y=this.a*i.y+this.y0,i}function tw(i){var e,t,n,s,r;if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,r=ht(i.x,i.y)){var o=2*Math.atan2(r,this.R2);e=Math.sin(o),t=Math.cos(o),s=Math.asin(t*this.sinc0+i.y*e*this.cosc0/r),n=Math.atan2(i.x*e,r*this.cosc0*t-i.y*this.sinc0*e)}else s=this.phic0,n=0;return i.x=n,i.y=s,ja.inverse.apply(this,[i]),i.x=S(i.x+this.long0),i}var iw=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const nw={init:Q0,forward:ew,inverse:tw,names:iw};function sw(i,e,t){return e*=t,Math.tan(.5*(b+i))*Math.pow((1-e)/(1+e),.5*t)}function rw(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=L&&(this.k0=.5*(1+Is(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=L&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=L&&Math.abs(Math.cos(this.lat_ts))>L&&(this.k0=.5*this.cons*Kt(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/wt(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Kt(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-b,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function ow(i){var e=i.x,t=i.y,n=Math.sin(t),s=Math.cos(t),r,o,a,l,h,c,d=S(e-this.long0);return Math.abs(Math.abs(e-this.long0)-Math.PI)<=L&&Math.abs(t+this.lat0)<=L?(i.x=NaN,i.y=NaN,i):this.sphere?(r=2*this.k0/(1+this.sinlat0*n+this.coslat0*s*Math.cos(d)),i.x=this.a*r*s*Math.sin(d)+this.x0,i.y=this.a*r*(this.coslat0*n-this.sinlat0*s*Math.cos(d))+this.y0,i):(o=2*Math.atan(this.ssfn_(t,n,this.e))-b,l=Math.cos(o),a=Math.sin(o),Math.abs(this.coslat0)<=L?(h=wt(this.e,t*this.con,this.con*n),c=2*this.a*this.k0*h/this.cons,i.x=this.x0+c*Math.sin(e-this.long0),i.y=this.y0-this.con*c*Math.cos(e-this.long0),i):(Math.abs(this.sinlat0)<L?(r=2*this.a*this.k0/(1+l*Math.cos(d)),i.y=r*a):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*l*Math.cos(d))),i.y=r*(this.cosX0*a-this.sinX0*l*Math.cos(d))+this.y0),i.x=r*l*Math.sin(d)+this.x0,i))}function aw(i){i.x-=this.x0,i.y-=this.y0;var e,t,n,s,r,o=Math.sqrt(i.x*i.x+i.y*i.y);if(this.sphere){var a=2*Math.atan(o/(2*this.a*this.k0));return e=this.long0,t=this.lat0,o<=L?(i.x=e,i.y=t,i):(t=Math.asin(Math.cos(a)*this.sinlat0+i.y*Math.sin(a)*this.coslat0/o),Math.abs(this.coslat0)<L?this.lat0>0?e=S(this.long0+Math.atan2(i.x,-1*i.y)):e=S(this.long0+Math.atan2(i.x,i.y)):e=S(this.long0+Math.atan2(i.x*Math.sin(a),o*this.coslat0*Math.cos(a)-i.y*this.sinlat0*Math.sin(a))),i.x=e,i.y=t,i)}else if(Math.abs(this.coslat0)<=L){if(o<=L)return t=this.lat0,e=this.long0,i.x=e,i.y=t,i;i.x*=this.con,i.y*=this.con,n=o*this.cons/(2*this.a*this.k0),t=this.con*ws(this.e,n),e=this.con*S(this.con*this.long0+Math.atan2(i.x,-1*i.y))}else s=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),e=this.long0,o<=L?r=this.X0:(r=Math.asin(Math.cos(s)*this.sinX0+i.y*Math.sin(s)*this.cosX0/o),e=S(this.long0+Math.atan2(i.x*Math.sin(s),o*this.cosX0*Math.cos(s)-i.y*this.sinX0*Math.sin(s)))),t=-1*ws(this.e,Math.tan(.5*(b+r)));return i.x=e,i.y=t,i}var lw=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)","Polar_Stereographic"];const hw={init:rw,forward:ow,inverse:aw,names:lw,ssfn_:sw};function cw(){var i=this.lat0;this.lambda0=this.long0;var e=Math.sin(i),t=this.a,n=this.rf,s=1/n,r=2*s-Math.pow(s,2),o=this.e=Math.sqrt(r);this.R=this.k0*t*Math.sqrt(1-r)/(1-r*Math.pow(e,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(i),4)),this.b0=Math.asin(e/this.alpha);var a=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+i/2)),h=Math.log((1+o*e)/(1-o*e));this.K=a-this.alpha*l+this.alpha*o/2*h}function dw(i){var e=Math.log(Math.tan(Math.PI/4-i.y/2)),t=this.e/2*Math.log((1+this.e*Math.sin(i.y))/(1-this.e*Math.sin(i.y))),n=-this.alpha*(e+t)+this.K,s=2*(Math.atan(Math.exp(n))-Math.PI/4),r=this.alpha*(i.x-this.lambda0),o=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(r))),a=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(r));return i.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,i.x=this.R*o+this.x0,i}function uw(i){for(var e=i.x-this.x0,t=i.y-this.y0,n=e/this.R,s=2*(Math.atan(Math.exp(t/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(n)),o=Math.atan(Math.sin(n)/(Math.cos(this.b0)*Math.cos(n)-Math.sin(this.b0)*Math.tan(s))),a=this.lambda0+o/this.alpha,l=0,h=r,c=-1e3,d=0;Math.abs(h-c)>1e-7;){if(++d>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(h))/2)),c=h,h=2*Math.atan(Math.exp(l))-Math.PI/2}return i.x=a,i.y=h,i}var fw=["somerc"];const gw={init:cw,forward:dw,inverse:uw,names:fw};var sn=1e-7;function ww(i){var e=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],t=typeof i.PROJECTION=="object"?Object.keys(i.PROJECTION)[0]:i.PROJECTION;return"no_uoff"in i||"no_off"in i||e.indexOf(t)!==-1}function Mw(){var i,e,t,n,s,r,o,a,l,h,c=0,d,u=0,f=0,g=0,w=0,M=0,m=0;this.no_off=ww(this),this.no_rot="no_rot"in this;var T=!1;"alpha"in this&&(T=!0);var y=!1;if("rectified_grid_angle"in this&&(y=!0),T&&(m=this.alpha),y&&(c=this.rectified_grid_angle*ve),T||y)u=this.longc;else if(f=this.long1,w=this.lat1,g=this.long2,M=this.lat2,Math.abs(w-M)<=sn||(i=Math.abs(w))<=sn||Math.abs(i-b)<=sn||Math.abs(Math.abs(this.lat0)-b)<=sn||Math.abs(Math.abs(M)-b)<=sn)throw new Error;var x=1-this.es;e=Math.sqrt(x),Math.abs(this.lat0)>L?(a=Math.sin(this.lat0),t=Math.cos(this.lat0),i=1-this.es*a*a,this.B=t*t,this.B=Math.sqrt(1+this.es*this.B*this.B/x),this.A=this.B*this.k0*e/i,n=this.B*e/(t*Math.sqrt(i)),s=n*n-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=n,this.E*=Math.pow(wt(this.e,this.lat0,a),this.B)):(this.B=1/e,this.A=this.k0,this.E=n=s=1),T||y?(T?(d=Math.asin(Math.sin(m)/n),y||(c=m)):(d=c,m=Math.asin(n*Math.sin(d))),this.lam0=u-Math.asin(.5*(s-1/s)*Math.tan(d))/this.B):(r=Math.pow(wt(this.e,w,Math.sin(w)),this.B),o=Math.pow(wt(this.e,M,Math.sin(M)),this.B),s=this.E/r,l=(o-r)/(o+r),h=this.E*this.E,h=(h-o*r)/(h+o*r),i=f-g,i<-Math.pi?g-=fs:i>Math.pi&&(g+=fs),this.lam0=S(.5*(f+g)-Math.atan(h*Math.tan(.5*this.B*(f-g))/l)/this.B),d=Math.atan(2*Math.sin(this.B*S(f-this.lam0))/(s-1/s)),c=m=Math.asin(n*Math.sin(d))),this.singam=Math.sin(d),this.cosgam=Math.cos(d),this.sinrot=Math.sin(c),this.cosrot=Math.cos(c),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(n*n-1)/Math.cos(m))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*d,this.v_pole_n=this.ArB*Math.log(Math.tan(ne-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(ne+s))}function mw(i){var e={},t,n,s,r,o,a,l,h;if(i.x=i.x-this.lam0,Math.abs(Math.abs(i.y)-b)>L){if(o=this.E/Math.pow(wt(this.e,i.y,Math.sin(i.y)),this.B),a=1/o,t=.5*(o-a),n=.5*(o+a),r=Math.sin(this.B*i.x),s=(t*this.singam-r*this.cosgam)/n,Math.abs(Math.abs(s)-1)<L)throw new Error;h=.5*this.ArB*Math.log((1-s)/(1+s)),a=Math.cos(this.B*i.x),Math.abs(a)<sn?l=this.A*i.x:l=this.ArB*Math.atan2(t*this.cosgam+r*this.singam,a)}else h=i.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*i.y;return this.no_rot?(e.x=l,e.y=h):(l-=this.u_0,e.x=h*this.cosrot+l*this.sinrot,e.y=l*this.cosrot-h*this.sinrot),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function Tw(i){var e,t,n,s,r,o,a,l={};if(i.x=(i.x-this.x0)*(1/this.a),i.y=(i.y-this.y0)*(1/this.a),this.no_rot?(t=i.y,e=i.x):(t=i.x*this.cosrot-i.y*this.sinrot,e=i.y*this.cosrot+i.x*this.sinrot+this.u_0),n=Math.exp(-this.BrA*t),s=.5*(n-1/n),r=.5*(n+1/n),o=Math.sin(this.BrA*e),a=(o*this.cosgam+s*this.singam)/r,Math.abs(Math.abs(a)-1)<L)l.x=0,l.y=a<0?-b:b;else{if(l.y=this.E/Math.sqrt((1+a)/(1-a)),l.y=ws(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(s*this.cosgam-o*this.singam,Math.cos(this.BrA*e))}return l.x+=this.lam0,l}var yw=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const xw={init:Mw,forward:mw,inverse:Tw,names:yw};function _w(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<L)){var i=this.b/this.a;this.e=Math.sqrt(1-i*i);var e=Math.sin(this.lat1),t=Math.cos(this.lat1),n=Kt(this.e,e,t),s=wt(this.e,this.lat1,e),r=Math.sin(this.lat2),o=Math.cos(this.lat2),a=Kt(this.e,r,o),l=wt(this.e,this.lat2,r),h=wt(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>L?this.ns=Math.log(n/a)/Math.log(s/l):this.ns=e,isNaN(this.ns)&&(this.ns=e),this.f0=n/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(h,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function pw(i){var e=i.x,t=i.y;Math.abs(2*Math.abs(t)-Math.PI)<=L&&(t=Is(t)*(b-2*L));var n=Math.abs(Math.abs(t)-b),s,r;if(n>L)s=wt(this.e,t,Math.sin(t)),r=this.a*this.f0*Math.pow(s,this.ns);else{if(n=t*this.ns,n<=0)return null;r=0}var o=this.ns*S(e-this.long0);return i.x=this.k0*(r*Math.sin(o))+this.x0,i.y=this.k0*(this.rh-r*Math.cos(o))+this.y0,i}function Cw(i){var e,t,n,s,r,o=(i.x-this.x0)/this.k0,a=this.rh-(i.y-this.y0)/this.k0;this.ns>0?(e=Math.sqrt(o*o+a*a),t=1):(e=-Math.sqrt(o*o+a*a),t=-1);var l=0;if(e!==0&&(l=Math.atan2(t*o,t*a)),e!==0||this.ns>0){if(t=1/this.ns,n=Math.pow(e/(this.a*this.f0),t),s=ws(this.e,n),s===-9999)return null}else s=-b;return r=S(l/this.ns+this.long0),i.x=r,i.y=s,i}var vw=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const Rw={init:_w,forward:pw,inverse:Cw,names:vw};function bw(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function Ew(i){var e,t,n,s,r,o,a,l=i.x,h=i.y,c=S(l-this.long0);return e=Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.alfa*this.e/2),t=2*(Math.atan(this.k*Math.pow(Math.tan(h/2+this.s45),this.alfa)/e)-this.s45),n=-c*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(t)+Math.sin(this.ad)*Math.cos(t)*Math.cos(n)),r=Math.asin(Math.cos(t)*Math.sin(n)/Math.cos(s)),o=this.n*r,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),i.y=a*Math.cos(o)/1,i.x=a*Math.sin(o)/1,this.czech||(i.y*=-1,i.x*=-1),i}function Lw(i){var e,t,n,s,r,o,a,l,h=i.x;i.x=i.y,i.y=h,this.czech||(i.y*=-1,i.x*=-1),o=Math.sqrt(i.x*i.x+i.y*i.y),r=Math.atan2(i.y,i.x),s=r/Math.sin(this.s0),n=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),e=Math.asin(Math.cos(this.ad)*Math.sin(n)-Math.sin(this.ad)*Math.cos(n)*Math.cos(s)),t=Math.asin(Math.cos(n)*Math.sin(s)/Math.cos(e)),i.x=this.long0-t/this.alfa,a=e,l=0;var c=0;do i.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(e/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),Math.abs(a-i.y)<1e-10&&(l=1),a=i.y,c+=1;while(l===0&&c<15);return c>=15?null:i}var Sw=["Krovak","krovak"];const Iw={init:bw,forward:Ew,inverse:Lw,names:Sw};function ke(i,e,t,n,s){return i*s-e*Math.sin(2*s)+t*Math.sin(4*s)-n*Math.sin(6*s)}function Ks(i){return 1-.25*i*(1+i/16*(3+1.25*i))}function As(i){return .375*i*(1+.25*i*(1+.46875*i))}function Ps(i){return .05859375*i*i*(1+.75*i)}function Os(i){return i*i*i*(35/3072)}function En(i,e,t){var n=e*t;return i/Math.sqrt(1-n*n)}function On(i){return Math.abs(i)<b?i:i-Is(i)*Math.PI}function vr(i,e,t,n,s){var r,o;r=i/e;for(var a=0;a<15;a++)if(o=(i-(e*r-t*Math.sin(2*r)+n*Math.sin(4*r)-s*Math.sin(6*r)))/(e-2*t*Math.cos(2*r)+4*n*Math.cos(4*r)-6*s*Math.cos(6*r)),r+=o,Math.abs(o)<=1e-10)return r;return NaN}function Kw(){this.sphere||(this.e0=Ks(this.es),this.e1=As(this.es),this.e2=Ps(this.es),this.e3=Os(this.es),this.ml0=this.a*ke(this.e0,this.e1,this.e2,this.e3,this.lat0))}function Aw(i){var e,t,n=i.x,s=i.y;if(n=S(n-this.long0),this.sphere)e=this.a*Math.asin(Math.cos(s)*Math.sin(n)),t=this.a*(Math.atan2(Math.tan(s),Math.cos(n))-this.lat0);else{var r=Math.sin(s),o=Math.cos(s),a=En(this.a,this.e,r),l=Math.tan(s)*Math.tan(s),h=n*Math.cos(s),c=h*h,d=this.es*o*o/(1-this.es),u=this.a*ke(this.e0,this.e1,this.e2,this.e3,s);e=a*h*(1-c*l*(1/6-(8-l+8*d)*c/120)),t=u-this.ml0+a*r/o*c*(.5+(5-l+6*d)*c/24)}return i.x=e+this.x0,i.y=t+this.y0,i}function Pw(i){i.x-=this.x0,i.y-=this.y0;var e=i.x/this.a,t=i.y/this.a,n,s;if(this.sphere){var r=t+this.lat0;n=Math.asin(Math.sin(r)*Math.cos(e)),s=Math.atan2(Math.tan(e),Math.cos(r))}else{var o=this.ml0/this.a+t,a=vr(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(a)-b)<=L)return i.x=this.long0,i.y=b,t<0&&(i.y*=-1),i;var l=En(this.a,this.e,Math.sin(a)),h=l*l*l/this.a/this.a*(1-this.es),c=Math.pow(Math.tan(a),2),d=e*this.a/l,u=d*d;n=a-l*Math.tan(a)/h*d*d*(.5-(1+3*c)*d*d/24),s=d*(1-u*(c/3+(1+3*c)*c*u/15))/Math.cos(a)}return i.x=S(s+this.long0),i.y=On(n),i}var Ow=["Cassini","Cassini_Soldner","cass"];const Dw={init:Kw,forward:Aw,inverse:Pw,names:Ow};function Mi(i,e){var t;return i>1e-7?(t=i*e,(1-i*i)*(e/(1-t*t)-.5/i*Math.log((1-t)/(1+t)))):2*e}var kw=1,Fw=2,Nw=3,Gw=4;function Ww(){var i=Math.abs(this.lat0);if(Math.abs(i-b)<L?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(i)<L?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var e;switch(this.qp=Mi(this.e,1),this.mmf=.5/(1-this.es),this.apa=qw(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),e=Math.sin(this.lat0),this.sinb1=Mi(this.e,e)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*e*e)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function zw(i){var e,t,n,s,r,o,a,l,h,c,d=i.x,u=i.y;if(d=S(d-this.long0),this.sphere){if(r=Math.sin(u),c=Math.cos(u),n=Math.cos(d),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t=this.mode===this.EQUIT?1+c*n:1+this.sinph0*r+this.cosph0*c*n,t<=L)return null;t=Math.sqrt(2/t),e=t*c*Math.sin(d),t*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*c*n}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),Math.abs(u+this.lat0)<L)return null;t=ne-u*.5,t=2*(this.mode===this.S_POLE?Math.cos(t):Math.sin(t)),e=t*Math.sin(d),t*=n}}else{switch(a=0,l=0,h=0,n=Math.cos(d),s=Math.sin(d),r=Math.sin(u),o=Mi(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(a=o/this.qp,l=Math.sqrt(1-a*a)),this.mode){case this.OBLIQ:h=1+this.sinb1*a+this.cosb1*l*n;break;case this.EQUIT:h=1+l*n;break;case this.N_POLE:h=b+u,o=this.qp-o;break;case this.S_POLE:h=u-b,o=this.qp+o;break}if(Math.abs(h)<L)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:h=Math.sqrt(2/h),this.mode===this.OBLIQ?t=this.ymf*h*(this.cosb1*a-this.sinb1*l*n):t=(h=Math.sqrt(2/(1+l*n)))*a*this.ymf,e=this.xmf*h*l*s;break;case this.N_POLE:case this.S_POLE:o>=0?(e=(h=Math.sqrt(o))*s,t=n*(this.mode===this.S_POLE?h:-h)):e=t=0;break}}return i.x=this.a*e+this.x0,i.y=this.a*t+this.y0,i}function Hw(i){i.x-=this.x0,i.y-=this.y0;var e=i.x/this.a,t=i.y/this.a,n,s,r,o,a,l,h;if(this.sphere){var c=0,d,u=0;if(d=Math.sqrt(e*e+t*t),s=d*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(u=Math.sin(s),c=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(d)<=L?0:Math.asin(t*u/d),e*=u,t=c*d;break;case this.OBLIQ:s=Math.abs(d)<=L?this.lat0:Math.asin(c*this.sinph0+t*u*this.cosph0/d),e*=u*this.cosph0,t=(c-Math.sin(s)*this.sinph0)*d;break;case this.N_POLE:t=-t,s=b-s;break;case this.S_POLE:s-=b;break}n=t===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(e,t)}else{if(h=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e/=this.dd,t*=this.dd,l=Math.sqrt(e*e+t*t),l<L)return i.x=this.long0,i.y=this.lat0,i;o=2*Math.asin(.5*l/this.rq),r=Math.cos(o),e*=o=Math.sin(o),this.mode===this.OBLIQ?(h=r*this.sinb1+t*o*this.cosb1/l,a=this.qp*h,t=l*this.cosb1*r-t*this.sinb1*o):(h=t*o/l,a=this.qp*h,t=l*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(t=-t),a=e*e+t*t,!a)return i.x=this.long0,i.y=this.lat0,i;h=1-a/this.qp,this.mode===this.S_POLE&&(h=-h)}n=Math.atan2(e,t),s=Zw(Math.asin(h),this.apa)}return i.x=S(this.long0+n),i.y=s,i}var Bw=.3333333333333333,jw=.17222222222222222,Vw=.10257936507936508,Xw=.06388888888888888,Uw=.0664021164021164,Yw=.016415012942191543;function qw(i){var e,t=[];return t[0]=i*Bw,e=i*i,t[0]+=e*jw,t[1]=e*Xw,e*=i,t[0]+=e*Vw,t[1]+=e*Uw,t[2]=e*Yw,t}function Zw(i,e){var t=i+i;return i+e[0]*Math.sin(t)+e[1]*Math.sin(t+t)+e[2]*Math.sin(t+t+t)}var $w=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const Jw={init:Ww,forward:zw,inverse:Hw,names:$w,S_POLE:kw,N_POLE:Fw,EQUIT:Nw,OBLIQ:Gw};function xi(i){return Math.abs(i)>1&&(i=i>1?1:-1),Math.asin(i)}function Qw(){Math.abs(this.lat1+this.lat2)<L||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Kt(this.e3,this.sin_po,this.cos_po),this.qs1=Mi(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Kt(this.e3,this.sin_po,this.cos_po),this.qs2=Mi(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Mi(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>L?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function eM(i){var e=i.x,t=i.y;this.sin_phi=Math.sin(t),this.cos_phi=Math.cos(t);var n=Mi(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*n)/this.ns0,r=this.ns0*S(e-this.long0),o=s*Math.sin(r)+this.x0,a=this.rh-s*Math.cos(r)+this.y0;return i.x=o,i.y=a,i}function tM(i){var e,t,n,s,r,o;return i.x-=this.x0,i.y=this.rh-i.y+this.y0,this.ns0>=0?(e=Math.sqrt(i.x*i.x+i.y*i.y),n=1):(e=-Math.sqrt(i.x*i.x+i.y*i.y),n=-1),s=0,e!==0&&(s=Math.atan2(n*i.x,n*i.y)),n=e*this.ns0/this.a,this.sphere?o=Math.asin((this.c-n*n)/(2*this.ns0)):(t=(this.c-n*n)/this.ns0,o=this.phi1z(this.e3,t)),r=S(s/this.ns0+this.long0),i.x=r,i.y=o,i}function iM(i,e){var t,n,s,r,o,a=xi(.5*e);if(i<L)return a;for(var l=i*i,h=1;h<=25;h++)if(t=Math.sin(a),n=Math.cos(a),s=i*t,r=1-s*s,o=.5*r*r/n*(e/(1-l)-t/r+.5/i*Math.log((1-s)/(1+s))),a=a+o,Math.abs(o)<=1e-7)return a;return null}var nM=["Albers_Conic_Equal_Area","Albers","aea"];const sM={init:Qw,forward:eM,inverse:tM,names:nM,phi1z:iM};function rM(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function oM(i){var e,t,n,s,r,o,a,l,h=i.x,c=i.y;return n=S(h-this.long0),e=Math.sin(c),t=Math.cos(c),s=Math.cos(n),o=this.sin_p14*e+this.cos_p14*t*s,r=1,o>0||Math.abs(o)<=L?(a=this.x0+this.a*r*t*Math.sin(n)/o,l=this.y0+this.a*r*(this.cos_p14*e-this.sin_p14*t*s)/o):(a=this.x0+this.infinity_dist*t*Math.sin(n),l=this.y0+this.infinity_dist*(this.cos_p14*e-this.sin_p14*t*s)),i.x=a,i.y=l,i}function aM(i){var e,t,n,s,r,o;return i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,(e=Math.sqrt(i.x*i.x+i.y*i.y))?(s=Math.atan2(e,this.rc),t=Math.sin(s),n=Math.cos(s),o=xi(n*this.sin_p14+i.y*t*this.cos_p14/e),r=Math.atan2(i.x*t,e*this.cos_p14*n-i.y*this.sin_p14*t),r=S(this.long0+r)):(o=this.phic0,r=0),i.x=r,i.y=o,i}var lM=["gnom"];const hM={init:rM,forward:oM,inverse:aM,names:lM};function cM(i,e){var t=1-(1-i*i)/(2*i)*Math.log((1-i)/(1+i));if(Math.abs(Math.abs(e)-t)<1e-6)return e<0?-1*b:b;for(var n=Math.asin(.5*e),s,r,o,a,l=0;l<30;l++)if(r=Math.sin(n),o=Math.cos(n),a=i*r,s=Math.pow(1-a*a,2)/(2*o)*(e/(1-i*i)-r/(1-a*a)+.5/i*Math.log((1-a)/(1+a))),n+=s,Math.abs(s)<=1e-10)return n;return NaN}function dM(){this.sphere||(this.k0=Kt(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function uM(i){var e=i.x,t=i.y,n,s,r=S(e-this.long0);if(this.sphere)n=this.x0+this.a*r*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(t)/Math.cos(this.lat_ts);else{var o=Mi(this.e,Math.sin(t));n=this.x0+this.a*this.k0*r,s=this.y0+this.a*o*.5/this.k0}return i.x=n,i.y=s,i}function fM(i){i.x-=this.x0,i.y-=this.y0;var e,t;return this.sphere?(e=S(this.long0+i.x/this.a/Math.cos(this.lat_ts)),t=Math.asin(i.y/this.a*Math.cos(this.lat_ts))):(t=cM(this.e,2*i.y*this.k0/this.a),e=S(this.long0+i.x/(this.a*this.k0))),i.x=e,i.y=t,i}var gM=["cea"];const wM={init:dM,forward:uM,inverse:fM,names:gM};function MM(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function mM(i){var e=i.x,t=i.y,n=S(e-this.long0),s=On(t-this.lat0);return i.x=this.x0+this.a*n*this.rc,i.y=this.y0+this.a*s,i}function TM(i){var e=i.x,t=i.y;return i.x=S(this.long0+(e-this.x0)/(this.a*this.rc)),i.y=On(this.lat0+(t-this.y0)/this.a),i}var yM=["Equirectangular","Equidistant_Cylindrical","eqc"];const xM={init:MM,forward:mM,inverse:TM,names:yM};var ih=20;function _M(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Ks(this.es),this.e1=As(this.es),this.e2=Ps(this.es),this.e3=Os(this.es),this.ml0=this.a*ke(this.e0,this.e1,this.e2,this.e3,this.lat0)}function pM(i){var e=i.x,t=i.y,n,s,r,o=S(e-this.long0);if(r=o*Math.sin(t),this.sphere)Math.abs(t)<=L?(n=this.a*o,s=-1*this.a*this.lat0):(n=this.a*Math.sin(r)/Math.tan(t),s=this.a*(On(t-this.lat0)+(1-Math.cos(r))/Math.tan(t)));else if(Math.abs(t)<=L)n=this.a*o,s=-1*this.ml0;else{var a=En(this.a,this.e,Math.sin(t))/Math.tan(t);n=a*Math.sin(r),s=this.a*ke(this.e0,this.e1,this.e2,this.e3,t)-this.ml0+a*(1-Math.cos(r))}return i.x=n+this.x0,i.y=s+this.y0,i}function CM(i){var e,t,n,s,r,o,a,l,h;if(n=i.x-this.x0,s=i.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=L)e=S(n/this.a+this.long0),t=0;else{o=this.lat0+s/this.a,a=n*n/this.a/this.a+o*o,l=o;var c;for(r=ih;r;--r)if(c=Math.tan(l),h=-1*(o*(l*c+1)-l-.5*(l*l+a)*c)/((l-o)/c-1),l+=h,Math.abs(h)<=L){t=l;break}e=S(this.long0+Math.asin(n*Math.tan(l)/this.a)/Math.sin(t))}else if(Math.abs(s+this.ml0)<=L)t=0,e=S(this.long0+n/this.a);else{o=(this.ml0+s)/this.a,a=n*n/this.a/this.a+o*o,l=o;var d,u,f,g,w;for(r=ih;r;--r)if(w=this.e*Math.sin(l),d=Math.sqrt(1-w*w)*Math.tan(l),u=this.a*ke(this.e0,this.e1,this.e2,this.e3,l),f=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),g=u/this.a,h=(o*(d*g+1)-g-.5*d*(g*g+a))/(this.es*Math.sin(2*l)*(g*g+a-2*o*g)/(4*d)+(o-g)*(d*f-2/Math.sin(2*l))-f),l-=h,Math.abs(h)<=L){t=l;break}d=Math.sqrt(1-this.es*Math.pow(Math.sin(t),2))*Math.tan(t),e=S(this.long0+Math.asin(n*d/this.a)/Math.sin(t))}return i.x=e,i.y=t,i}var vM=["Polyconic","poly"];const RM={init:_M,forward:pM,inverse:CM,names:vM};function bM(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function EM(i){var e,t=i.x,n=i.y,s=n-this.lat0,r=t-this.long0,o=s/ts*1e-5,a=r,l=1,h=0;for(e=1;e<=10;e++)l=l*o,h=h+this.A[e]*l;var c=h,d=a,u=1,f=0,g,w,M=0,m=0;for(e=1;e<=6;e++)g=u*c-f*d,w=f*c+u*d,u=g,f=w,M=M+this.B_re[e]*u-this.B_im[e]*f,m=m+this.B_im[e]*u+this.B_re[e]*f;return i.x=m*this.a+this.x0,i.y=M*this.a+this.y0,i}function LM(i){var e,t=i.x,n=i.y,s=t-this.x0,r=n-this.y0,o=r/this.a,a=s/this.a,l=1,h=0,c,d,u=0,f=0;for(e=1;e<=6;e++)c=l*o-h*a,d=h*o+l*a,l=c,h=d,u=u+this.C_re[e]*l-this.C_im[e]*h,f=f+this.C_im[e]*l+this.C_re[e]*h;for(var g=0;g<this.iterations;g++){var w=u,M=f,m,T,y=o,x=a;for(e=2;e<=6;e++)m=w*u-M*f,T=M*u+w*f,w=m,M=T,y=y+(e-1)*(this.B_re[e]*w-this.B_im[e]*M),x=x+(e-1)*(this.B_im[e]*w+this.B_re[e]*M);w=1,M=0;var _=this.B_re[1],p=this.B_im[1];for(e=2;e<=6;e++)m=w*u-M*f,T=M*u+w*f,w=m,M=T,_=_+e*(this.B_re[e]*w-this.B_im[e]*M),p=p+e*(this.B_im[e]*w+this.B_re[e]*M);var R=_*_+p*p;u=(y*_+x*p)/R,f=(x*_-y*p)/R}var C=u,I=f,D=1,j=0;for(e=1;e<=9;e++)D=D*C,j=j+this.D[e]*D;var X=this.lat0+j*ts*1e5,U=this.long0+I;return i.x=U,i.y=X,i}var SM=["New_Zealand_Map_Grid","nzmg"];const IM={init:bM,forward:EM,inverse:LM,names:SM};function KM(){}function AM(i){var e=i.x,t=i.y,n=S(e-this.long0),s=this.x0+this.a*n,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+t/2.5))*1.25;return i.x=s,i.y=r,i}function PM(i){i.x-=this.x0,i.y-=this.y0;var e=S(this.long0+i.x/this.a),t=2.5*(Math.atan(Math.exp(.8*i.y/this.a))-Math.PI/4);return i.x=e,i.y=t,i}var OM=["Miller_Cylindrical","mill"];const DM={init:KM,forward:AM,inverse:PM,names:OM};var kM=20;function FM(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Zc(this.es)}function NM(i){var e,t,n=i.x,s=i.y;if(n=S(n-this.long0),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var r=this.n*Math.sin(s),o=kM;o;--o){var a=(this.m*s+Math.sin(s)-r)/(this.m+Math.cos(s));if(s-=a,Math.abs(a)<L)break}e=this.a*this.C_x*n*(this.m+Math.cos(s)),t=this.a*this.C_y*s}else{var l=Math.sin(s),h=Math.cos(s);t=this.a*qr(s,l,h,this.en),e=this.a*n*h/Math.sqrt(1-this.es*l*l)}return i.x=e,i.y=t,i}function GM(i){var e,t,n,s;return i.x-=this.x0,n=i.x/this.a,i.y-=this.y0,e=i.y/this.a,this.sphere?(e/=this.C_y,n=n/(this.C_x*(this.m+Math.cos(e))),this.m?e=xi((this.m*e+Math.sin(e))/this.n):this.n!==1&&(e=xi(Math.sin(e)/this.n)),n=S(n+this.long0),e=On(e)):(e=$c(i.y/this.a,this.es,this.en),s=Math.abs(e),s<b?(s=Math.sin(e),t=this.long0+i.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(e)),n=S(t)):s-L<b&&(n=this.long0)),i.x=n,i.y=e,i}var WM=["Sinusoidal","sinu"];const zM={init:FM,forward:NM,inverse:GM,names:WM};function HM(){}function BM(i){for(var e=i.x,t=i.y,n=S(e-this.long0),s=t,r=Math.PI*Math.sin(t);;){var o=-(s+Math.sin(s)-r)/(1+Math.cos(s));if(s+=o,Math.abs(o)<L)break}s/=2,Math.PI/2-Math.abs(t)<L&&(n=0);var a=.900316316158*this.a*n*Math.cos(s)+this.x0,l=1.4142135623731*this.a*Math.sin(s)+this.y0;return i.x=a,i.y=l,i}function jM(i){var e,t;i.x-=this.x0,i.y-=this.y0,t=i.y/(1.4142135623731*this.a),Math.abs(t)>.999999999999&&(t=.999999999999),e=Math.asin(t);var n=S(this.long0+i.x/(.900316316158*this.a*Math.cos(e)));n<-Math.PI&&(n=-Math.PI),n>Math.PI&&(n=Math.PI),t=(2*e+Math.sin(2*e))/Math.PI,Math.abs(t)>1&&(t=1);var s=Math.asin(t);return i.x=n,i.y=s,i}var VM=["Mollweide","moll"];const XM={init:HM,forward:BM,inverse:jM,names:VM};function UM(){Math.abs(this.lat1+this.lat2)<L||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Ks(this.es),this.e1=As(this.es),this.e2=Ps(this.es),this.e3=Os(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=Kt(this.e,this.sinphi,this.cosphi),this.ml1=ke(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<L?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=Kt(this.e,this.sinphi,this.cosphi),this.ml2=ke(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=ke(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function YM(i){var e=i.x,t=i.y,n;if(this.sphere)n=this.a*(this.g-t);else{var s=ke(this.e0,this.e1,this.e2,this.e3,t);n=this.a*(this.g-s)}var r=this.ns*S(e-this.long0),o=this.x0+n*Math.sin(r),a=this.y0+this.rh-n*Math.cos(r);return i.x=o,i.y=a,i}function qM(i){i.x-=this.x0,i.y=this.rh-i.y+this.y0;var e,t,n,s;this.ns>=0?(t=Math.sqrt(i.x*i.x+i.y*i.y),e=1):(t=-Math.sqrt(i.x*i.x+i.y*i.y),e=-1);var r=0;if(t!==0&&(r=Math.atan2(e*i.x,e*i.y)),this.sphere)return s=S(this.long0+r/this.ns),n=On(this.g-t/this.a),i.x=s,i.y=n,i;var o=this.g-t/this.a;return n=vr(o,this.e0,this.e1,this.e2,this.e3),s=S(this.long0+r/this.ns),i.x=s,i.y=n,i}var ZM=["Equidistant_Conic","eqdc"];const $M={init:UM,forward:YM,inverse:qM,names:ZM};function JM(){this.R=this.a}function QM(i){var e=i.x,t=i.y,n=S(e-this.long0),s,r;Math.abs(t)<=L&&(s=this.x0+this.R*n,r=this.y0);var o=xi(2*Math.abs(t/Math.PI));(Math.abs(n)<=L||Math.abs(Math.abs(t)-b)<=L)&&(s=this.x0,t>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*o):r=this.y0+Math.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(Math.PI/n-n/Math.PI),l=a*a,h=Math.sin(o),c=Math.cos(o),d=c/(h+c-1),u=d*d,f=d*(2/h-1),g=f*f,w=Math.PI*this.R*(a*(d-g)+Math.sqrt(l*(d-g)*(d-g)-(g+l)*(u-g)))/(g+l);n<0&&(w=-w),s=this.x0+w;var M=l+d;return w=Math.PI*this.R*(f*M-a*Math.sqrt((g+l)*(l+1)-M*M))/(g+l),t>=0?r=this.y0+w:r=this.y0-w,i.x=s,i.y=r,i}function em(i){var e,t,n,s,r,o,a,l,h,c,d,u,f;return i.x-=this.x0,i.y-=this.y0,d=Math.PI*this.R,n=i.x/d,s=i.y/d,r=n*n+s*s,o=-Math.abs(s)*(1+r),a=o-2*s*s+n*n,l=-2*o+1+2*s*s+r*r,f=s*s/l+(2*a*a*a/l/l/l-9*o*a/l/l)/27,h=(o-a*a/3/l)/l,c=2*Math.sqrt(-h/3),d=3*f/h/c,Math.abs(d)>1&&(d>=0?d=1:d=-1),u=Math.acos(d)/3,i.y>=0?t=(-c*Math.cos(u+Math.PI/3)-a/3/l)*Math.PI:t=-(-c*Math.cos(u+Math.PI/3)-a/3/l)*Math.PI,Math.abs(n)<L?e=this.long0:e=S(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(n*n-s*s)+r*r))/2/n),i.x=e,i.y=t,i}var tm=["Van_der_Grinten_I","VanDerGrinten","vandg"];const im={init:JM,forward:QM,inverse:em,names:tm};function nm(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function sm(i){var e=i.x,t=i.y,n=Math.sin(i.y),s=Math.cos(i.y),r=S(e-this.long0),o,a,l,h,c,d,u,f,g,w,M,m,T,y,x,_,p,R,C,I,D,j,X;return this.sphere?Math.abs(this.sin_p12-1)<=L?(i.x=this.x0+this.a*(b-t)*Math.sin(r),i.y=this.y0-this.a*(b-t)*Math.cos(r),i):Math.abs(this.sin_p12+1)<=L?(i.x=this.x0+this.a*(b+t)*Math.sin(r),i.y=this.y0+this.a*(b+t)*Math.cos(r),i):(R=this.sin_p12*n+this.cos_p12*s*Math.cos(r),_=Math.acos(R),p=_?_/Math.sin(_):1,i.x=this.x0+this.a*p*s*Math.sin(r),i.y=this.y0+this.a*p*(this.cos_p12*n-this.sin_p12*s*Math.cos(r)),i):(o=Ks(this.es),a=As(this.es),l=Ps(this.es),h=Os(this.es),Math.abs(this.sin_p12-1)<=L?(c=this.a*ke(o,a,l,h,b),d=this.a*ke(o,a,l,h,t),i.x=this.x0+(c-d)*Math.sin(r),i.y=this.y0-(c-d)*Math.cos(r),i):Math.abs(this.sin_p12+1)<=L?(c=this.a*ke(o,a,l,h,b),d=this.a*ke(o,a,l,h,t),i.x=this.x0+(c+d)*Math.sin(r),i.y=this.y0+(c+d)*Math.cos(r),i):(u=n/s,f=En(this.a,this.e,this.sin_p12),g=En(this.a,this.e,n),w=Math.atan((1-this.es)*u+this.es*f*this.sin_p12/(g*s)),M=Math.atan2(Math.sin(r),this.cos_p12*Math.tan(w)-this.sin_p12*Math.cos(r)),M===0?C=Math.asin(this.cos_p12*Math.sin(w)-this.sin_p12*Math.cos(w)):Math.abs(Math.abs(M)-Math.PI)<=L?C=-Math.asin(this.cos_p12*Math.sin(w)-this.sin_p12*Math.cos(w)):C=Math.asin(Math.sin(r)*Math.cos(w)/Math.sin(M)),m=this.e*this.sin_p12/Math.sqrt(1-this.es),T=this.e*this.cos_p12*Math.cos(M)/Math.sqrt(1-this.es),y=m*T,x=T*T,I=C*C,D=I*C,j=D*C,X=j*C,_=f*C*(1-I*x*(1-x)/6+D/8*y*(1-2*x)+j/120*(x*(4-7*x)-3*m*m*(1-7*x))-X/48*y),i.x=this.x0+_*Math.sin(M),i.y=this.y0+_*Math.cos(M),i))}function rm(i){i.x-=this.x0,i.y-=this.y0;var e,t,n,s,r,o,a,l,h,c,d,u,f,g,w,M,m,T,y,x,_,p,R,C;return this.sphere?(e=Math.sqrt(i.x*i.x+i.y*i.y),e>2*b*this.a?void 0:(t=e/this.a,n=Math.sin(t),s=Math.cos(t),r=this.long0,Math.abs(e)<=L?o=this.lat0:(o=xi(s*this.sin_p12+i.y*n*this.cos_p12/e),a=Math.abs(this.lat0)-b,Math.abs(a)<=L?this.lat0>=0?r=S(this.long0+Math.atan2(i.x,-i.y)):r=S(this.long0-Math.atan2(-i.x,i.y)):r=S(this.long0+Math.atan2(i.x*n,e*this.cos_p12*s-i.y*this.sin_p12*n))),i.x=r,i.y=o,i)):(l=Ks(this.es),h=As(this.es),c=Ps(this.es),d=Os(this.es),Math.abs(this.sin_p12-1)<=L?(u=this.a*ke(l,h,c,d,b),e=Math.sqrt(i.x*i.x+i.y*i.y),f=u-e,o=vr(f/this.a,l,h,c,d),r=S(this.long0+Math.atan2(i.x,-1*i.y)),i.x=r,i.y=o,i):Math.abs(this.sin_p12+1)<=L?(u=this.a*ke(l,h,c,d,b),e=Math.sqrt(i.x*i.x+i.y*i.y),f=e-u,o=vr(f/this.a,l,h,c,d),r=S(this.long0+Math.atan2(i.x,i.y)),i.x=r,i.y=o,i):(e=Math.sqrt(i.x*i.x+i.y*i.y),M=Math.atan2(i.x,i.y),g=En(this.a,this.e,this.sin_p12),m=Math.cos(M),T=this.e*this.cos_p12*m,y=-T*T/(1-this.es),x=3*this.es*(1-y)*this.sin_p12*this.cos_p12*m/(1-this.es),_=e/g,p=_-y*(1+y)*Math.pow(_,3)/6-x*(1+3*y)*Math.pow(_,4)/24,R=1-y*p*p/2-_*p*p*p/6,w=Math.asin(this.sin_p12*Math.cos(p)+this.cos_p12*Math.sin(p)*m),r=S(this.long0+Math.asin(Math.sin(M)*Math.sin(p)/Math.cos(w))),C=Math.sin(w),o=Math.atan2((C-this.es*R*this.sin_p12)*Math.tan(w),C*(1-this.es)),i.x=r,i.y=o,i))}var om=["Azimuthal_Equidistant","aeqd"];const am={init:nm,forward:sm,inverse:rm,names:om};function lm(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function hm(i){var e,t,n,s,r,o,a,l,h=i.x,c=i.y;return n=S(h-this.long0),e=Math.sin(c),t=Math.cos(c),s=Math.cos(n),o=this.sin_p14*e+this.cos_p14*t*s,r=1,(o>0||Math.abs(o)<=L)&&(a=this.a*r*t*Math.sin(n),l=this.y0+this.a*r*(this.cos_p14*e-this.sin_p14*t*s)),i.x=a,i.y=l,i}function cm(i){var e,t,n,s,r,o,a;return i.x-=this.x0,i.y-=this.y0,e=Math.sqrt(i.x*i.x+i.y*i.y),t=xi(e/this.a),n=Math.sin(t),s=Math.cos(t),o=this.long0,Math.abs(e)<=L?(a=this.lat0,i.x=o,i.y=a,i):(a=xi(s*this.sin_p14+i.y*n*this.cos_p14/e),r=Math.abs(this.lat0)-b,Math.abs(r)<=L?(this.lat0>=0?o=S(this.long0+Math.atan2(i.x,-i.y)):o=S(this.long0-Math.atan2(-i.x,i.y)),i.x=o,i.y=a,i):(o=S(this.long0+Math.atan2(i.x*n,e*this.cos_p14*s-i.y*this.sin_p14*n)),i.x=o,i.y=a,i))}var dm=["ortho"];const um={init:lm,forward:hm,inverse:cm,names:dm};var ge={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},se={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function fm(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=b-ne/2?this.face=ge.TOP:this.lat0<=-(b-ne/2)?this.face=ge.BOTTOM:Math.abs(this.long0)<=ne?this.face=ge.FRONT:Math.abs(this.long0)<=b+ne?this.face=this.long0>0?ge.RIGHT:ge.LEFT:this.face=ge.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function gm(i){var e={x:0,y:0},t,n,s,r,o,a,l={value:0};if(i.x-=this.long0,this.es!==0?t=Math.atan(this.one_minus_f_squared*Math.tan(i.y)):t=i.y,n=i.x,this.face===ge.TOP)r=b-t,n>=ne&&n<=b+ne?(l.value=se.AREA_0,s=n-b):n>b+ne||n<=-(b+ne)?(l.value=se.AREA_1,s=n>0?n-ye:n+ye):n>-(b+ne)&&n<=-ne?(l.value=se.AREA_2,s=n+b):(l.value=se.AREA_3,s=n);else if(this.face===ge.BOTTOM)r=b+t,n>=ne&&n<=b+ne?(l.value=se.AREA_0,s=-n+b):n<ne&&n>=-ne?(l.value=se.AREA_1,s=-n):n<-ne&&n>=-(b+ne)?(l.value=se.AREA_2,s=-n-b):(l.value=se.AREA_3,s=n>0?-n+ye:-n-ye);else{var h,c,d,u,f,g,w;this.face===ge.RIGHT?n=mn(n,+b):this.face===ge.BACK?n=mn(n,+ye):this.face===ge.LEFT&&(n=mn(n,-b)),u=Math.sin(t),f=Math.cos(t),g=Math.sin(n),w=Math.cos(n),h=f*w,c=f*g,d=u,this.face===ge.FRONT?(r=Math.acos(h),s=Qs(r,d,c,l)):this.face===ge.RIGHT?(r=Math.acos(c),s=Qs(r,d,-h,l)):this.face===ge.BACK?(r=Math.acos(-h),s=Qs(r,d,-c,l)):this.face===ge.LEFT?(r=Math.acos(-c),s=Qs(r,d,h,l)):(r=s=0,l.value=se.AREA_0)}return a=Math.atan(12/ye*(s+Math.acos(Math.sin(s)*Math.cos(ne))-b)),o=Math.sqrt((1-Math.cos(r))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(s))))),l.value===se.AREA_1?a+=b:l.value===se.AREA_2?a+=ye:l.value===se.AREA_3&&(a+=1.5*ye),e.x=o*Math.cos(a),e.y=o*Math.sin(a),e.x=e.x*this.a+this.x0,e.y=e.y*this.a+this.y0,i.x=e.x,i.y=e.y,i}function wm(i){var e={lam:0,phi:0},t,n,s,r,o,a,l,h,c,d={value:0};if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,n=Math.atan(Math.sqrt(i.x*i.x+i.y*i.y)),t=Math.atan2(i.y,i.x),i.x>=0&&i.x>=Math.abs(i.y)?d.value=se.AREA_0:i.y>=0&&i.y>=Math.abs(i.x)?(d.value=se.AREA_1,t-=b):i.x<0&&-i.x>=Math.abs(i.y)?(d.value=se.AREA_2,t=t<0?t+ye:t-ye):(d.value=se.AREA_3,t+=b),c=ye/12*Math.tan(t),o=Math.sin(c)/(Math.cos(c)-1/Math.sqrt(2)),a=Math.atan(o),s=Math.cos(t),r=Math.tan(n),l=1-s*s*r*r*(1-Math.cos(Math.atan(1/Math.cos(a)))),l<-1?l=-1:l>1&&(l=1),this.face===ge.TOP)h=Math.acos(l),e.phi=b-h,d.value===se.AREA_0?e.lam=a+b:d.value===se.AREA_1?e.lam=a<0?a+ye:a-ye:d.value===se.AREA_2?e.lam=a-b:e.lam=a;else if(this.face===ge.BOTTOM)h=Math.acos(l),e.phi=h-b,d.value===se.AREA_0?e.lam=-a+b:d.value===se.AREA_1?e.lam=-a:d.value===se.AREA_2?e.lam=-a-b:e.lam=a<0?-a-ye:-a+ye;else{var u,f,g;u=l,c=u*u,c>=1?g=0:g=Math.sqrt(1-c)*Math.sin(a),c+=g*g,c>=1?f=0:f=Math.sqrt(1-c),d.value===se.AREA_1?(c=f,f=-g,g=c):d.value===se.AREA_2?(f=-f,g=-g):d.value===se.AREA_3&&(c=f,f=g,g=-c),this.face===ge.RIGHT?(c=u,u=-f,f=c):this.face===ge.BACK?(u=-u,f=-f):this.face===ge.LEFT&&(c=u,u=f,f=-c),e.phi=Math.acos(-g)-b,e.lam=Math.atan2(f,u),this.face===ge.RIGHT?e.lam=mn(e.lam,-b):this.face===ge.BACK?e.lam=mn(e.lam,-ye):this.face===ge.LEFT&&(e.lam=mn(e.lam,+b))}if(this.es!==0){var w,M,m;w=e.phi<0?1:0,M=Math.tan(e.phi),m=this.b/Math.sqrt(M*M+this.one_minus_f_squared),e.phi=Math.atan(Math.sqrt(this.a*this.a-m*m)/(this.one_minus_f*m)),w&&(e.phi=-e.phi)}return e.lam+=this.long0,i.x=e.lam,i.y=e.phi,i}function Qs(i,e,t,n){var s;return i<L?(n.value=se.AREA_0,s=0):(s=Math.atan2(e,t),Math.abs(s)<=ne?n.value=se.AREA_0:s>ne&&s<=b+ne?(n.value=se.AREA_1,s-=b):s>b+ne||s<=-(b+ne)?(n.value=se.AREA_2,s=s>=0?s-ye:s+ye):(n.value=se.AREA_3,s+=b)),s}function mn(i,e){var t=i+e;return t<-ye?t+=fs:t>+ye&&(t-=fs),t}var Mm=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const mm={init:fm,forward:gm,inverse:wm,names:Mm};var $o=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Zn=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],ed=.8487,td=1.3523,id=vt/5,Tm=1/id,un=18,Rr=function(i,e){return i[0]+e*(i[1]+e*(i[2]+e*i[3]))},ym=function(i,e){return i[1]+e*(2*i[2]+e*3*i[3])};function xm(i,e,t,n){for(var s=e;n;--n){var r=i(s);if(s-=r,Math.abs(r)<t)break}return s}function _m(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function pm(i){var e=S(i.x-this.long0),t=Math.abs(i.y),n=Math.floor(t*id);n<0?n=0:n>=un&&(n=un-1),t=vt*(t-Tm*n);var s={x:Rr($o[n],t)*e,y:Rr(Zn[n],t)};return i.y<0&&(s.y=-s.y),s.x=s.x*this.a*ed+this.x0,s.y=s.y*this.a*td+this.y0,s}function Cm(i){var e={x:(i.x-this.x0)/(this.a*ed),y:Math.abs(i.y-this.y0)/(this.a*td)};if(e.y>=1)e.x/=$o[un][0],e.y=i.y<0?-b:b;else{var t=Math.floor(e.y*un);for(t<0?t=0:t>=un&&(t=un-1);;)if(Zn[t][0]>e.y)--t;else if(Zn[t+1][0]<=e.y)++t;else break;var n=Zn[t],s=5*(e.y-n[0])/(Zn[t+1][0]-n[0]);s=xm(function(r){return(Rr(n,r)-e.y)/ym(n,r)},s,L,100),e.x/=Rr($o[t],s),e.y=(5*t+s)*ve,i.y<0&&(e.y=-e.y)}return e.x=S(e.x+this.long0),e}var vm=["Robinson","robin"];const Rm={init:_m,forward:pm,inverse:Cm,names:vm};function bm(){this.name="geocent"}function Em(i){var e=zc(i,this.es,this.a);return e}function Lm(i){var e=Hc(i,this.es,this.a,this.b);return e}var Sm=["Geocentric","geocentric","geocent","Geocent"];const Im={init:bm,forward:Em,inverse:Lm,names:Sm};var Se={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},jn={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function Km(){if(Object.keys(jn).forEach((function(t){if(typeof this[t]>"u")this[t]=jn[t].def;else{if(jn[t].num&&isNaN(this[t]))throw new Error("Invalid parameter value, must be numeric "+t+" = "+this[t]);jn[t].num&&(this[t]=parseFloat(this[t]))}jn[t].degrees&&(this[t]=this[t]*ve)}).bind(this)),Math.abs(Math.abs(this.lat0)-b)<L?this.mode=this.lat0<0?Se.S_POLE:Se.N_POLE:Math.abs(this.lat0)<L?this.mode=Se.EQUIT:(this.mode=Se.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var i=this.tilt,e=this.azi;this.cg=Math.cos(e),this.sg=Math.sin(e),this.cw=Math.cos(i),this.sw=Math.sin(i)}function Am(i){i.x-=this.long0;var e=Math.sin(i.y),t=Math.cos(i.y),n=Math.cos(i.x),s,r;switch(this.mode){case Se.OBLIQ:r=this.sinph0*e+this.cosph0*t*n;break;case Se.EQUIT:r=t*n;break;case Se.S_POLE:r=-e;break;case Se.N_POLE:r=e;break}switch(r=this.pn1/(this.p-r),s=r*t*Math.sin(i.x),this.mode){case Se.OBLIQ:r*=this.cosph0*e-this.sinph0*t*n;break;case Se.EQUIT:r*=e;break;case Se.N_POLE:r*=-(t*n);break;case Se.S_POLE:r*=t*n;break}var o,a;return o=r*this.cg+s*this.sg,a=1/(o*this.sw*this.h1+this.cw),s=(s*this.cg-r*this.sg)*this.cw*a,r=o*a,i.x=s*this.a,i.y=r*this.a,i}function Pm(i){i.x/=this.a,i.y/=this.a;var e={x:i.x,y:i.y},t,n,s;s=1/(this.pn1-i.y*this.sw),t=this.pn1*i.x*s,n=this.pn1*i.y*this.cw*s,i.x=t*this.cg+n*this.sg,i.y=n*this.cg-t*this.sg;var r=ht(i.x,i.y);if(Math.abs(r)<L)e.x=0,e.y=i.y;else{var o,a;switch(a=1-r*r*this.pfact,a=(this.p-Math.sqrt(a))/(this.pn1/r+r/this.pn1),o=Math.sqrt(1-a*a),this.mode){case Se.OBLIQ:e.y=Math.asin(o*this.sinph0+i.y*a*this.cosph0/r),i.y=(o-this.sinph0*Math.sin(e.y))*r,i.x*=a*this.cosph0;break;case Se.EQUIT:e.y=Math.asin(i.y*a/r),i.y=o*r,i.x*=a;break;case Se.N_POLE:e.y=Math.asin(o),i.y=-i.y;break;case Se.S_POLE:e.y=-Math.asin(o);break}e.x=Math.atan2(i.x,i.y)}return i.x=e.x+this.long0,i.y=e.y,i}var Om=["Tilted_Perspective","tpers"];const Dm={init:Km,forward:Am,inverse:Pm,names:Om};function km(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var i=1-this.es,e=1/i;this.radius_p=Math.sqrt(i),this.radius_p2=i,this.radius_p_inv2=e,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function Fm(i){var e=i.x,t=i.y,n,s,r,o;if(e=e-this.long0,this.shape==="ellipse"){t=Math.atan(this.radius_p2*Math.tan(t));var a=this.radius_p/ht(this.radius_p*Math.cos(t),Math.sin(t));if(s=a*Math.cos(e)*Math.cos(t),r=a*Math.sin(e)*Math.cos(t),o=a*Math.sin(t),(this.radius_g-s)*s-r*r-o*o*this.radius_p_inv2<0)return i.x=Number.NaN,i.y=Number.NaN,i;n=this.radius_g-s,this.flip_axis?(i.x=this.radius_g_1*Math.atan(r/ht(o,n)),i.y=this.radius_g_1*Math.atan(o/n)):(i.x=this.radius_g_1*Math.atan(r/n),i.y=this.radius_g_1*Math.atan(o/ht(r,n)))}else this.shape==="sphere"&&(n=Math.cos(t),s=Math.cos(e)*n,r=Math.sin(e)*n,o=Math.sin(t),n=this.radius_g-s,this.flip_axis?(i.x=this.radius_g_1*Math.atan(r/ht(o,n)),i.y=this.radius_g_1*Math.atan(o/n)):(i.x=this.radius_g_1*Math.atan(r/n),i.y=this.radius_g_1*Math.atan(o/ht(r,n))));return i.x=i.x*this.a,i.y=i.y*this.a,i}function Nm(i){var e=-1,t=0,n=0,s,r,o,a;if(i.x=i.x/this.a,i.y=i.y/this.a,this.shape==="ellipse"){this.flip_axis?(n=Math.tan(i.y/this.radius_g_1),t=Math.tan(i.x/this.radius_g_1)*ht(1,n)):(t=Math.tan(i.x/this.radius_g_1),n=Math.tan(i.y/this.radius_g_1)*ht(1,t));var l=n/this.radius_p;if(s=t*t+l*l+e*e,r=2*this.radius_g*e,o=r*r-4*s*this.C,o<0)return i.x=Number.NaN,i.y=Number.NaN,i;a=(-r-Math.sqrt(o))/(2*s),e=this.radius_g+a*e,t*=a,n*=a,i.x=Math.atan2(t,e),i.y=Math.atan(n*Math.cos(i.x)/e),i.y=Math.atan(this.radius_p_inv2*Math.tan(i.y))}else if(this.shape==="sphere"){if(this.flip_axis?(n=Math.tan(i.y/this.radius_g_1),t=Math.tan(i.x/this.radius_g_1)*Math.sqrt(1+n*n)):(t=Math.tan(i.x/this.radius_g_1),n=Math.tan(i.y/this.radius_g_1)*Math.sqrt(1+t*t)),s=t*t+n*n+e*e,r=2*this.radius_g*e,o=r*r-4*s*this.C,o<0)return i.x=Number.NaN,i.y=Number.NaN,i;a=(-r-Math.sqrt(o))/(2*s),e=this.radius_g+a*e,t*=a,n*=a,i.x=Math.atan2(t,e),i.y=Math.atan(n*Math.cos(i.x)/e)}return i.x=i.x+this.long0,i}var Gm=["Geostationary Satellite View","Geostationary_Satellite","geos"];const Wm={init:km,forward:Fm,inverse:Nm,names:Gm};function zm(i){i.Proj.projections.add(lr),i.Proj.projections.add(hr),i.Proj.projections.add(Y0),i.Proj.projections.add(nw),i.Proj.projections.add(hw),i.Proj.projections.add(gw),i.Proj.projections.add(xw),i.Proj.projections.add(Rw),i.Proj.projections.add(Iw),i.Proj.projections.add(Dw),i.Proj.projections.add(Jw),i.Proj.projections.add(sM),i.Proj.projections.add(hM),i.Proj.projections.add(wM),i.Proj.projections.add(xM),i.Proj.projections.add(RM),i.Proj.projections.add(IM),i.Proj.projections.add(DM),i.Proj.projections.add(zM),i.Proj.projections.add(XM),i.Proj.projections.add($M),i.Proj.projections.add(im),i.Proj.projections.add(am),i.Proj.projections.add(um),i.Proj.projections.add(mm),i.Proj.projections.add(Rm),i.Proj.projections.add(Im),i.Proj.projections.add(Dm),i.Proj.projections.add(Wm)}Fe.defaultDatum="WGS84";Fe.Proj=Lt;Fe.WGS84=new Fe.Proj("WGS84");Fe.Point=bn;Fe.toPoint=Bc;Fe.defs=De;Fe.nadgrid=Zg;Fe.transform=Cr;Fe.mgrs=u0;Fe.version="__VERSION__";zm(Fe);class Zr extends Tt{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e)if(typeof e.getSimplifiedGeometry=="function"){const t=e;this.setGeometry(t)}else{const t=e;this.setProperties(t)}}clone(){const e=new Zr(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());const t=this.getGeometry();t&&e.setGeometry(t.clone());const n=this.getStyle();return n&&e.setStyle(n),e}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&(ce(this.geometryChangeKey_),this.geometryChangeKey_=null);const e=this.getGeometry();e&&(this.geometryChangeKey_=q(e,W.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?Hm(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}function Hm(i){if(typeof i=="function")return i;let e;return Array.isArray(i)?e=i:(J(typeof i.getZIndex=="function","Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),e=[i]),function(){return e}}class br extends cc{constructor(e){super(),this.geometries_=e||null,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(ce),this.changeEventsKeys_.length=0}listenGeometriesChange_(){if(this.geometries_)for(let e=0,t=this.geometries_.length;e<t;++e)this.changeEventsKeys_.push(q(this.geometries_[e],W.CHANGE,this.changed,this))}clone(){const e=new br(null);return e.setGeometries(this.geometries_),e.applyProperties(this),e}closestPointXY(e,t,n,s){if(s<zi(this.getExtent(),e,t))return s;const r=this.geometries_;for(let o=0,a=r.length;o<a;++o)s=r[o].closestPointXY(e,t,n,s);return s}containsXY(e,t){const n=this.geometries_;for(let s=0,r=n.length;s<r;++s)if(n[s].containsXY(e,t))return!0;return!1}computeExtent(e){Kn(e);const t=this.geometries_;for(let n=0,s=t.length;n<s;++n)Bh(e,t[n].getExtent());return e}getGeometries(){return nh(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let e=[];const t=this.geometries_;for(let n=0,s=t.length;n<s;++n)t[n].getType()===this.getType()?e=e.concat(t[n].getGeometriesArrayRecursive()):e.push(t[n]);return e}getSimplifiedGeometry(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const t=[],n=this.geometries_;let s=!1;for(let r=0,o=n.length;r<o;++r){const a=n[r],l=a.getSimplifiedGeometry(e);t.push(l),l!==a&&(s=!0)}if(s){const r=new br(null);return r.setGeometriesArray(t),r}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this}getType(){return"GeometryCollection"}intersectsExtent(e){const t=this.geometries_;for(let n=0,s=t.length;n<s;++n)if(t[n].intersectsExtent(e))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(e,t){const n=this.geometries_;for(let s=0,r=n.length;s<r;++s)n[s].rotate(e,t);this.changed()}scale(e,t,n){n||(n=mt(this.getExtent()));const s=this.geometries_;for(let r=0,o=s.length;r<o;++r)s[r].scale(e,t,n);this.changed()}setGeometries(e){this.setGeometriesArray(nh(e))}setGeometriesArray(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()}applyTransform(e){const t=this.geometries_;for(let n=0,s=t.length;n<s;++n)t[n].applyTransform(e);this.changed()}translate(e,t){const n=this.geometries_;for(let s=0,r=n.length;s<r;++s)n[s].translate(e,t);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}}function nh(i){const e=[];for(let t=0,n=i.length;t<n;++t)e.push(i[t].clone());return e}function Er(i,e,t,n,s,r,o){let a,l;const h=(t-e)/n;if(h===1)a=e;else if(h===2)a=e,l=s;else if(h!==0){let c=i[e],d=i[e+1],u=0;const f=[0];for(let M=e+n;M<t;M+=n){const m=i[M],T=i[M+1];u+=Math.sqrt((m-c)*(m-c)+(T-d)*(T-d)),f.push(u),c=m,d=T}const g=s*u,w=qd(f,g);w<0?(l=(g-f[-w-2])/(f[-w-1]-f[-w-2]),a=e+(-w-2)*n):a=e+w*n}o=o>1?o:2,r=r||new Array(o);for(let c=0;c<o;++c)r[c]=a===void 0?NaN:l===void 0?i[a+c]:Qe(i[a+c],i[a+n+c],l);return r}function Jo(i,e,t,n,s,r){if(t==e)return null;let o;if(s<i[e+n-1])return r?(o=i.slice(e,e+n),o[n-1]=s,o):null;if(i[t-1]<s)return r?(o=i.slice(t-n,t),o[n-1]=s,o):null;if(s==i[e+n-1])return i.slice(e,e+n);let a=e/n,l=t/n;for(;a<l;){const u=a+l>>1;s<i[(u+1)*n-1]?l=u:a=u+1}const h=i[a*n-1];if(s==h)return i.slice((a-1)*n,(a-1)*n+n);const c=i[(a+1)*n-1],d=(s-h)/(c-h);o=[];for(let u=0;u<n-1;++u)o.push(Qe(i[(a-1)*n+u],i[a*n+u],d));return o.push(s),o}function Bm(i,e,t,n,s,r,o){if(o)return Jo(i,e,t[t.length-1],n,s,r);let a;if(s<i[n-1])return r?(a=i.slice(0,n),a[n-1]=s,a):null;if(i[i.length-1]<s)return r?(a=i.slice(i.length-n),a[n-1]=s,a):null;for(let l=0,h=t.length;l<h;++l){const c=t[l];if(e!=c){if(s<i[e+n-1])return null;if(s<=i[c-1])return Jo(i,e,c,n,s,!1);e=c}}return null}function nd(i,e,t,n){let s=i[e],r=i[e+1],o=0;for(let a=e+n;a<t;a+=n){const l=i[a],h=i[a+1];o+=Math.sqrt((l-s)*(l-s)+(h-r)*(h-r)),s=l,r=h}return o}class Ln extends Hi{constructor(e,t){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,t!==void 0&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}appendCoordinate(e){bt(this.flatCoordinates,e),this.changed()}clone(){const e=new Ln(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,n,s){return s<zi(this.getExtent(),e,t)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Ea(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Sa(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,e,t,n,s))}forEachSegment(e){return mc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}getCoordinateAtM(e,t){return this.layout!="XYM"&&this.layout!="XYZM"?null:(t=t!==void 0?t:!1,Jo(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t))}getCoordinates(){return hi(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(e,t){return Er(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,this.stride)}getLength(){return nd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(e){const t=[];return t.length=Vr(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,t,0),new Ln(t,"XY")}getType(){return"LineString"}intersectsExtent(e){return Xr(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=jr(this.flatCoordinates,0,e,this.stride),this.changed()}}class Lr extends Hi{constructor(e,t,n){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,t);else if(t!==void 0&&n)this.setFlatCoordinates(t,e),this.ends_=n;else{const s=e,r=[],o=[];for(let l=0,h=s.length;l<h;++l){const c=s[l];bt(r,c.getFlatCoordinates()),o.push(r.length)}const a=s.length===0?this.getLayout():s[0].getLayout();this.setFlatCoordinates(a,r),this.ends_=o}}appendLineString(e){bt(this.flatCoordinates,e.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const e=new Lr(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e}closestPointXY(e,t,n,s){return s<zi(this.getExtent(),e,t)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(La(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Ia(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,e,t,n,s))}getCoordinateAtM(e,t,n){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(t=t!==void 0?t:!1,n=n!==void 0?n:!1,Bm(this.flatCoordinates,0,this.ends_,this.stride,e,t,n))}getCoordinates(){return as(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(e){return e<0||this.ends_.length<=e?null:new Ln(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)}getLineStrings(){const e=this.flatCoordinates,t=this.ends_,n=this.layout,s=[];let r=0;for(let o=0,a=t.length;o<a;++o){const l=t[o],h=new Ln(e.slice(r,l),n);s.push(h),r=l}return s}getFlatMidpoints(){const e=[],t=this.flatCoordinates;let n=0;const s=this.ends_,r=this.stride;for(let o=0,a=s.length;o<a;++o){const l=s[o],h=Er(t,n,l,r,.5);bt(e,h),n=l}return e}getSimplifiedGeometryInternal(e){const t=[],n=[];return t.length=uc(this.flatCoordinates,0,this.ends_,this.stride,e,t,0,n),new Lr(t,"XY",n)}getType(){return"MultiLineString"}intersectsExtent(e){return Tf(this.flatCoordinates,0,this.ends_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,2),this.flatCoordinates||(this.flatCoordinates=[]);const n=Es(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()}}class $r extends Hi{constructor(e,t){super(),t&&!Array.isArray(e[0])?this.setFlatCoordinates(t,e):this.setCoordinates(e,t)}appendPoint(e){bt(this.flatCoordinates,e.getFlatCoordinates()),this.changed()}clone(){const e=new $r(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,n,s){if(s<zi(this.getExtent(),e,t))return s;const r=this.flatCoordinates,o=this.stride;for(let a=0,l=r.length;a<l;a+=o){const h=Oi(e,t,r[a],r[a+1]);if(h<s){s=h;for(let c=0;c<o;++c)n[c]=r[a+c];n.length=o}}return s}getCoordinates(){return hi(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(e){const t=this.flatCoordinates.length/this.stride;return e<0||t<=e?null:new Mr(this.flatCoordinates.slice(e*this.stride,(e+1)*this.stride),this.layout)}getPoints(){const e=this.flatCoordinates,t=this.layout,n=this.stride,s=[];for(let r=0,o=e.length;r<o;r+=n){const a=new Mr(e.slice(r,r+n),t);s.push(a)}return s}getType(){return"MultiPoint"}intersectsExtent(e){const t=this.flatCoordinates,n=this.stride;for(let s=0,r=t.length;s<r;s+=n){const o=t[s],a=t[s+1];if(fa(e,o,a))return!0}return!1}setCoordinates(e,t){this.setLayout(t,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=jr(this.flatCoordinates,0,e,this.stride),this.changed()}}function sd(i,e,t,n){const s=[];let r=nt();for(let o=0,a=t.length;o<a;++o){const l=t[o];r=ga(i,e,l[0],n),s.push((r[0]+r[2])/2,(r[1]+r[3])/2),e=l[l.length-1]}return s}class Sr extends Hi{constructor(e,t,n){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!n&&!Array.isArray(e[0])){const s=e,r=[],o=[];for(let a=0,l=s.length;a<l;++a){const h=s[a],c=r.length,d=h.getEnds();for(let u=0,f=d.length;u<f;++u)d[u]+=c;bt(r,h.getFlatCoordinates()),o.push(d)}t=s.length===0?this.getLayout():s[0].getLayout(),e=r,n=o}t!==void 0&&n?(this.setFlatCoordinates(t,e),this.endss_=n):this.setCoordinates(e,t)}appendPolygon(e){let t;if(!this.flatCoordinates)this.flatCoordinates=e.getFlatCoordinates().slice(),t=e.getEnds().slice(),this.endss_.push();else{const n=this.flatCoordinates.length;bt(this.flatCoordinates,e.getFlatCoordinates()),t=e.getEnds().slice();for(let s=0,r=t.length;s<r;++s)t[s]+=n}this.endss_.push(t),this.changed()}clone(){const e=this.endss_.length,t=new Array(e);for(let s=0;s<e;++s)t[s]=this.endss_[s].slice();const n=new Sr(this.flatCoordinates.slice(),this.layout,t);return n.applyProperties(this),n}closestPointXY(e,t,n,s){return s<zi(this.getExtent(),e,t)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(cf(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),df(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,e,t,n,s))}containsXY(e,t){return mf(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e,t)}getArea(){return wf(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(e){let t;return e!==void 0?(t=this.getOrientedFlatCoordinates().slice(),Bo(t,0,this.endss_,this.stride,e)):t=this.flatCoordinates,Ho(t,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const e=sd(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=Mc(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new $r(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const e=this.flatCoordinates;xc(e,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=Bo(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(e){const t=[],n=[];return t.length=gf(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(e),t,0,n),new Sr(t,"XY",n)}getPolygon(e){if(e<0||this.endss_.length<=e)return null;let t;if(e===0)t=0;else{const r=this.endss_[e-1];t=r[r.length-1]}const n=this.endss_[e].slice(),s=n[n.length-1];if(t!==0)for(let r=0,o=n.length;r<o;++r)n[r]-=t;return new Ut(this.flatCoordinates.slice(t,s),this.layout,n)}getPolygons(){const e=this.layout,t=this.flatCoordinates,n=this.endss_,s=[];let r=0;for(let o=0,a=n.length;o<a;++o){const l=n[o].slice(),h=l[l.length-1];if(r!==0)for(let d=0,u=l.length;d<u;++d)l[d]-=r;const c=new Ut(t.slice(r,h),e,l);s.push(c),r=h}return s}getType(){return"MultiPolygon"}intersectsExtent(e){return yf(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,e)}setCoordinates(e,t){this.setLayout(t,e,3),this.flatCoordinates||(this.flatCoordinates=[]);const n=dc(this.flatCoordinates,0,e,this.stride,this.endss_);if(n.length===0)this.flatCoordinates.length=0;else{const s=n[n.length-1];this.flatCoordinates.length=s.length===0?0:s[s.length-1]}this.changed()}}const sh=gt();class Be{constructor(e,t,n,s,r,o){this.styleFunction,this.extent_,this.id_=o,this.type_=e,this.flatCoordinates_=t,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=n,this.properties_=r,this.squaredTolerance_,this.stride_=s,this.simplifiedGeometry_}get(e){return this.properties_[e]}getExtent(){return this.extent_||(this.extent_=this.type_==="Point"?Hh(this.flatCoordinates_):ga(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){const e=mt(this.getExtent());this.flatInteriorPoints_=Pa(this.flatCoordinates_,0,this.ends_,2,e,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){const e=_f(this.flatCoordinates_,this.ends_),t=sd(this.flatCoordinates_,0,e,2);this.flatInteriorPoints_=Mc(this.flatCoordinates_,0,e,2,t)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||(this.flatMidpoints_=Er(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];const e=this.flatCoordinates_;let t=0;const n=this.ends_;for(let s=0,r=n.length;s<r;++s){const o=n[s],a=Er(e,t,o,2,.5);bt(this.flatMidpoints_,a),t=o}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(e){return this}simplifyTransformed(e,t){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return this.stride_}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(e){e=ie(e);const t=e.getExtent(),n=e.getWorldExtent();if(t&&n){const s=Ke(n)/Ke(t);Xt(sh,n[0],n[3],s,-s,0,0,0),wi(this.flatCoordinates_,0,this.flatCoordinates_.length,2,sh,this.flatCoordinates_)}}applyTransform(e){e(this.flatCoordinates_,this.flatCoordinates_,this.stride_)}clone(){return new Be(this.type_,this.flatCoordinates_.slice(),this.ends_.slice(),this.stride_,Object.assign({},this.properties_),this.id_)}getEnds(){return this.ends_}enableSimplifyTransformed(){return this.simplifyTransformed=Ph((e,t)=>{if(e===this.squaredTolerance_)return this.simplifiedGeometry_;this.simplifiedGeometry_=this.clone(),t&&this.simplifiedGeometry_.applyTransform(t);const n=this.simplifiedGeometry_.getFlatCoordinates();let s;switch(this.type_){case"LineString":n.length=Vr(n,0,this.simplifiedGeometry_.flatCoordinates_.length,this.simplifiedGeometry_.stride_,e,n,0),s=[n.length];break;case"MultiLineString":s=[],n.length=uc(n,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,e,n,0,s);break;case"Polygon":s=[],n.length=Ka(n,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,Math.sqrt(e),n,0,s);break}return s&&(this.simplifiedGeometry_=new Be(this.type_,n,s,2,this.properties_,this.id_)),this.squaredTolerance_=e,this.simplifiedGeometry_}),this}}Be.prototype.getFlatCoordinates=Be.prototype.getOrientedFlatCoordinates;class jm{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=Zr,this.supportedMediaTypes=null}getReadOptions(e,t){if(t){let n=t.dataProjection?ie(t.dataProjection):this.readProjection(e);t.extent&&n&&n.getUnits()==="tile-pixels"&&(n=ie(n),n.setWorldExtent(t.extent)),t={dataProjection:n,featureProjection:t.featureProjection}}return this.adaptOptions(t)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},e)}getType(){return G()}readFeature(e,t){return G()}readFeatures(e,t){return G()}readGeometry(e,t){return G()}readProjection(e){return G()}writeFeature(e,t){return G()}writeFeatures(e,t){return G()}writeGeometry(e,t){return G()}}function Va(i,e,t){const n=t?ie(t.featureProjection):null,s=t?ie(t.dataProjection):null;let r=i;if(n&&s&&!_t(n,s)){e&&(r=i.clone());const o=e?n:s,a=e?s:n;o.getUnits()==="tile-pixels"?r.transform(o,a):r.applyTransform(Cn(o,a))}if(e&&t&&t.decimals!==void 0){const o=Math.pow(10,t.decimals),a=function(l){for(let h=0,c=l.length;h<c;++h)l[h]=Math.round(l[h]*o)/o;return l};r===i&&(r=i.clone()),r.applyTransform(a)}return r}function q_(i,e){const t=e?ie(e.featureProjection):null,n=e?ie(e.dataProjection):null;return t&&n&&!_t(t,n)?ec(i,n,t):i}const Vm={Point:Mr,LineString:Ln,Polygon:Ut,MultiPoint:$r,MultiLineString:Lr,MultiPolygon:Sr};function Xm(i,e,t){return Array.isArray(e[0])?(xc(i,0,e,t)||(i=i.slice(),Bo(i,0,e,t)),i):(Da(i,0,e,t)||(i=i.slice(),mr(i,0,e,t)),i)}function rd(i,e){const t=i.geometry;if(!t)return[];if(Array.isArray(t))return t.map(r=>rd({...i,geometry:r})).flat();const n=t.type==="MultiPolygon"?"Polygon":t.type;if(n==="GeometryCollection"||n==="Circle")throw new Error("Unsupported geometry type: "+n);const s=t.layout.length;return Va(new Be(n,n==="Polygon"?Xm(t.flatCoordinates,t.ends,s):t.flatCoordinates,t.ends?.flat(),s,i.properties||{},i.id).enableSimplifyTransformed(),!1,e)}function Xa(i,e){if(!i)return null;if(Array.isArray(i)){const n=i.map(s=>Xa(s,e));return new br(n)}const t=Vm[i.type];return Va(new t(i.flatCoordinates,i.layout,i.ends),!1,e)}class Um extends jm{constructor(){super()}getType(){return"json"}readFeature(e,t){return this.readFeatureFromObject(er(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(er(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return G()}readFeaturesFromObject(e,t){return G()}readGeometry(e,t){return this.readGeometryFromObject(er(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return G()}readProjection(e){return this.readProjectionFromObject(er(e))}readProjectionFromObject(e){return G()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return G()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return G()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return G()}}function er(i){if(typeof i=="string"){const e=JSON.parse(i);return e||null}return i!==null?i:null}class od extends Um{constructor(e){e=e||{},super(),this.dataProjection=ie(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=ie(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,t){let n=null;e.type==="Feature"?n=e:n={type:"Feature",geometry:e,properties:null};const s=Ua(n.geometry);if(this.featureClass===Be)return rd({geometry:s,id:n.id,properties:n.properties},t);const r=new Zr;return this.geometryName_?r.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in n!==void 0&&r.setGeometryName(n.geometry_name),r.setGeometry(Xa(s,t)),"id"in n&&r.setId(n.id),n.properties&&r.setProperties(n.properties,!0),r}readFeaturesFromObject(e,t){const n=e;let s=null;if(n.type==="FeatureCollection"){const r=e;s=[];const o=r.features;for(let a=0,l=o.length;a<l;++a){const h=this.readFeatureFromObject(o[a],t);h&&s.push(h)}}else s=[this.readFeatureFromObject(e,t)];return s.flat()}readGeometryFromObject(e,t){return Ym(e,t)}readProjectionFromObject(e){const t=e.crs;let n;if(t)if(t.type=="name")n=ie(t.properties.name);else if(t.type==="EPSG")n=ie("EPSG:"+t.properties.code);else throw new Error("Unknown SRS type");else n=this.dataProjection;return n}writeFeatureObject(e,t){t=this.adaptOptions(t);const n={type:"Feature",geometry:null,properties:null},s=e.getId();if(s!==void 0&&(n.id=s),!e.hasProperties())return n;const r=e.getProperties(),o=e.getGeometry();return o&&(n.geometry=Qo(o,t),delete r[e.getGeometryName()]),ki(r)||(n.properties=r),n}writeFeaturesObject(e,t){t=this.adaptOptions(t);const n=[];for(let s=0,r=e.length;s<r;++s)n.push(this.writeFeatureObject(e[s],t));return{type:"FeatureCollection",features:n}}writeGeometryObject(e,t){return Qo(e,this.adaptOptions(t))}}function Ua(i,e){if(!i)return null;let t;switch(i.type){case"Point":{t=Zm(i);break}case"LineString":{t=$m(i);break}case"Polygon":{t=tT(i);break}case"MultiPoint":{t=Qm(i);break}case"MultiLineString":{t=Jm(i);break}case"MultiPolygon":{t=eT(i);break}case"GeometryCollection":{t=qm(i);break}default:throw new Error("Unsupported GeoJSON type: "+i.type)}return t}function Ym(i,e){const t=Ua(i);return Xa(t,e)}function qm(i,e){return i.geometries.map(function(n){return Ua(n)})}function Zm(i){const e=i.coordinates;return{type:"Point",flatCoordinates:e,layout:Bi(e.length)}}function $m(i){const e=i.coordinates,t=e.flat();return{type:"LineString",flatCoordinates:t,ends:[t.length],layout:Bi(e[0].length)}}function Jm(i){const e=i.coordinates,t=e[0][0].length,n=[],s=Es(n,0,e,t);return{type:"MultiLineString",flatCoordinates:n,ends:s,layout:Bi(t)}}function Qm(i){const e=i.coordinates;return{type:"MultiPoint",flatCoordinates:e.flat(),layout:Bi(e[0].length)}}function eT(i){const e=i.coordinates,t=[],n=e[0][0][0].length,s=dc(t,0,e,n);return{type:"MultiPolygon",flatCoordinates:t,ends:s,layout:Bi(n)}}function tT(i){const e=i.coordinates,t=[],n=e[0][0].length,s=Es(t,0,e,n);return{type:"Polygon",flatCoordinates:t,ends:s,layout:Bi(n)}}function Qo(i,e){i=Va(i,!0,e);const t=i.getType();let n;switch(t){case"Point":{n=aT(i);break}case"LineString":{n=nT(i);break}case"Polygon":{n=lT(i,e);break}case"MultiPoint":{n=rT(i);break}case"MultiLineString":{n=sT(i);break}case"MultiPolygon":{n=oT(i,e);break}case"GeometryCollection":{n=iT(i,e);break}case"Circle":{n={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+t)}return n}function iT(i,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:i.getGeometriesArray().map(function(n){return Qo(n,e)})}}function nT(i,e){return{type:"LineString",coordinates:i.getCoordinates()}}function sT(i,e){return{type:"MultiLineString",coordinates:i.getCoordinates()}}function rT(i,e){return{type:"MultiPoint",coordinates:i.getCoordinates()}}function oT(i,e){let t;return e&&(t=e.rightHanded),{type:"MultiPolygon",coordinates:i.getCoordinates(t)}}function aT(i,e){return{type:"Point",coordinates:i.getCoordinates()}}function lT(i,e){let t;return e&&(t=e.rightHanded),{type:"Polygon",coordinates:i.getCoordinates(t)}}function hT(i,e){return ld().createElementNS(i,e)}function Ya(i,e){return ad(i,e,[]).join("")}function ad(i,e,t){if(i.nodeType==Node.CDATA_SECTION_NODE||i.nodeType==Node.TEXT_NODE)t.push(i.nodeValue);else{let n;for(n=i.firstChild;n;n=n.nextSibling)ad(n,e,t)}return t}function cT(i){return"documentElement"in i}function Z_(i,e,t){return i.getAttributeNS(e,t)||""}function dT(i){return new DOMParser().parseFromString(i,"application/xml")}function ea(i,e){return(function(t,n){const s=i.call(e!==void 0?e:this,t,n);s!==void 0&&n[n.length-1].push(s)})}function $_(i,e){return(function(t,n){const s=i.call(e!==void 0?e:this,t,n);s!==void 0&&(n[n.length-1]=s)})}function et(i,e,t){return(function(n,s){const r=i.call(this,n,s);if(r!==void 0){const o=s[s.length-1],a=n.localName;let l;a in o?l=o[a]:(l=[],o[a]=l),l.push(r)}})}function O(i,e,t){return(function(n,s){const r=i.call(this,n,s);if(r!==void 0){const o=s[s.length-1],a=n.localName;o[a]=r}})}function J_(i,e){return function(t,n,s){i.call(e!==void 0?e:this,t,n,s),s[s.length-1].node.appendChild(t)}}function uT(i,e){return(function(t,n,s){const o=n[n.length-1].node;let a=i;a===void 0&&(a=s);const l=e!==void 0?e:o.namespaceURI;return hT(l,a)})}const Q_=uT();function oe(i,e,t){t=t!==void 0?t:{};let n,s;for(n=0,s=i.length;n<s;++n)t[i[n]]=e;return t}function fT(i,e,t,n){let s;for(s=e.firstElementChild;s;s=s.nextElementSibling){const r=i[s.namespaceURI];if(r!==void 0){const o=r[s.localName];o!==void 0&&o.call(n,s,t)}}}function ue(i,e,t,n,s){return n.push(i),fT(e,t,n,s),n.pop()}function gT(i,e,t,n,s,r){const o=(s!==void 0?s:t).length;let a,l;for(let h=0;h<o;++h)a=t[h],a!==void 0&&(l=e.call(r!==void 0?r:this,a,n,s!==void 0?s[h]:void 0),l!==void 0&&i[l.namespaceURI][l.localName].call(r,l,a,n))}function e1(i,e,t,n,s,r,o){return s.push(i),gT(e,t,n,s,r,o),s.pop()}let _o;function t1(){return _o===void 0&&typeof XMLSerializer<"u"&&(_o=new XMLSerializer),_o}let po;function ld(){return po===void 0&&typeof document<"u"&&(po=document.implementation.createDocument("","",null)),po}class hd{read(e){if(!e)return null;if(typeof e=="string"){const t=dT(e);return this.readFromDocument(t)}return cT(e)?this.readFromDocument(e):this.readFromNode(e)}readFromDocument(e){for(let t=e.firstChild;t;t=t.nextSibling)if(t.nodeType==Node.ELEMENT_NODE)return this.readFromNode(t);return null}readFromNode(e){G()}}const wT="http://www.w3.org/1999/xlink";function qa(i){return i.getAttributeNS(wT,"href")}function MT(i){const e=Ya(i,!1);return mT(e)}function mT(i){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(i);if(e)return parseFloat(e[1])}function ci(i){const e=Ya(i,!1);return TT(e)}function TT(i){const e=/^\s*(\d+)\s*$/.exec(i);if(e)return parseInt(e[1],10)}function $(i){return Ya(i,!1).trim()}function i1(i,e){i.appendChild(ld().createTextNode(e))}const qe=[null,"http://www.opengis.net/ows/1.1"],yT=oe(qe,{ServiceIdentification:O(jT),ServiceProvider:O(XT),OperationsMetadata:O(HT)});class xT extends hd{constructor(){super()}readFromNode(e){const t=ue({},yT,e,[]);return t||null}}const _T=oe(qe,{DeliveryPoint:O($),City:O($),AdministrativeArea:O($),PostalCode:O($),Country:O($),ElectronicMailAddress:O($)}),pT=oe(qe,{Value:et(UT)}),CT=oe(qe,{AllowedValues:O(DT)}),vT=oe(qe,{Phone:O(BT),Address:O(OT)}),RT=oe(qe,{HTTP:O(WT)}),bT=oe(qe,{Get:et(GT),Post:void 0}),ET=oe(qe,{DCP:O(NT)}),LT=oe(qe,{Operation:zT}),ST=oe(qe,{Voice:O($),Facsimile:O($)}),IT=oe(qe,{Constraint:et(kT)}),KT=oe(qe,{IndividualName:O($),PositionName:O($),ContactInfo:O(FT)}),AT=oe(qe,{Abstract:O($),AccessConstraints:O($),Fees:O($),Title:O($),ServiceTypeVersion:O($),ServiceType:O($)}),PT=oe(qe,{ProviderName:O($),ProviderSite:O(qa),ServiceContact:O(VT)});function OT(i,e){return ue({},_T,i,e)}function DT(i,e){return ue({},pT,i,e)}function kT(i,e){const t=i.getAttribute("name");if(t)return ue({name:t},CT,i,e)}function FT(i,e){return ue({},vT,i,e)}function NT(i,e){return ue({},RT,i,e)}function GT(i,e){const t=qa(i);if(t)return ue({href:t},IT,i,e)}function WT(i,e){return ue({},bT,i,e)}function zT(i,e){const t=i.getAttribute("name"),n=ue({},ET,i,e);if(!n)return;const s=e[e.length-1];s[t]=n}function HT(i,e){return ue({},LT,i,e)}function BT(i,e){return ue({},ST,i,e)}function jT(i,e){return ue({},AT,i,e)}function VT(i,e){return ue({},KT,i,e)}function XT(i,e){return ue({},PT,i,e)}function UT(i,e){return $(i)}const Pt=[null,"http://www.opengis.net/wmts/1.0"],Dn=[null,"http://www.opengis.net/ows/1.1"],YT=oe(Pt,{Contents:O(oy)});class qT extends hd{constructor(){super(),this.owsParser_=new xT}readFromNode(e){let t=e.getAttribute("version");t&&(t=t.trim());let n=this.owsParser_.readFromNode(e);return n?(n.version=t,n=ue(n,YT,e,[]),n||null):null}}const ZT=oe(Pt,{Layer:et(ay),TileMatrixSet:et(ly)}),$T=oe(Pt,{Style:et(hy),Format:et($),TileMatrixSetLink:et(cy),Dimension:et(dy),ResourceURL:et(uy)},oe(Dn,{Title:O($),Abstract:O($),WGS84BoundingBox:O(cd),Identifier:O($)})),JT=oe(Pt,{LegendURL:et(fy)},oe(Dn,{Title:O($),Identifier:O($)})),QT=oe(Pt,{TileMatrixSet:O($),TileMatrixSetLimits:O(wy)}),ey=oe(Pt,{TileMatrixLimits:ea(My)}),ty=oe(Pt,{TileMatrix:O($),MinTileRow:O(ci),MaxTileRow:O(ci),MinTileCol:O(ci),MaxTileCol:O(ci)}),iy=oe(Pt,{Default:O($),Value:et($)},oe(Dn,{Identifier:O($)})),ny=oe(Dn,{LowerCorner:ea(ta),UpperCorner:ea(ta)}),sy=oe(Pt,{WellKnownScaleSet:O($),TileMatrix:et(gy)},oe(Dn,{SupportedCRS:O($),Identifier:O($),BoundingBox:O(cd)})),ry=oe(Pt,{TopLeftCorner:O(ta),ScaleDenominator:O(MT),TileWidth:O(ci),TileHeight:O(ci),MatrixWidth:O(ci),MatrixHeight:O(ci)},oe(Dn,{Identifier:O($)}));function oy(i,e){return ue({},ZT,i,e)}function ay(i,e){return ue({},$T,i,e)}function ly(i,e){return ue({},sy,i,e)}function hy(i,e){const t=ue({},JT,i,e);if(!t)return;const n=i.getAttribute("isDefault")==="true";return t.isDefault=n,t}function cy(i,e){return ue({},QT,i,e)}function dy(i,e){return ue({},iy,i,e)}function uy(i,e){const t=i.getAttribute("format"),n=i.getAttribute("template"),s=i.getAttribute("resourceType"),r={};return t&&(r.format=t),n&&(r.template=n),s&&(r.resourceType=s),r}function cd(i,e){const t=ue([],ny,i,e);if(t.length==2)return Do(t)}function fy(i,e){const t={};return t.format=i.getAttribute("format"),t.href=qa(i),t}function ta(i,e){const t=$(i).split(/\s+/);if(!t||t.length!=2)return;const n=+t[0],s=+t[1];if(!(isNaN(n)||isNaN(s)))return[n,s]}function gy(i,e){return ue({},ry,i,e)}function wy(i,e){return ue([],ey,i,e)}function My(i,e){return ue({},ty,i,e)}const my=`<?xml version="1.0" encoding="utf-8"?><Capabilities xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0/wmtsGetCapabilities_response.xsd http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0 http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0/inspire_vs_ows_11.xsd" version="1.0.0" xmlns="http://www.opengis.net/wmts/1.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gml="http://www.opengis.net/gml" xmlns:inspire_vs="http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0" xmlns:inspire_common="http://inspire.ec.europa.eu/schemas/common/1.0">
  <ows:ServiceIdentification>
    <ows:Title>WMTS GRB</ows:Title>
    <ows:Abstract>Web Map Tile Service voor het Grootschalig Referentiebestand (GRB)</ows:Abstract>
    <ows:Keywords>
      <ows:Keyword>GRB</ows:Keyword>
      <ows:Keyword>Grootschalig ReferentieBestand</ows:Keyword>
      <ows:Keyword>Basiskaart Vlaanderen</ows:Keyword>
      <ows:Keyword>actualisatie</ows:Keyword>
        <ows:Keyword>administratieve grens</ows:Keyword>
        <ows:Keyword>adres</ows:Keyword>
        <ows:Keyword>afdak</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>anomalie</ows:Keyword>
        <ows:Keyword>as built</ows:Keyword>
        <ows:Keyword>atlas</ows:Keyword>
        <ows:Keyword>autosnelweg</ows:Keyword>
        <ows:Keyword>baangracht</ows:Keyword>
        <ows:Keyword>basiskaart</ows:Keyword>
        <ows:Keyword>beek</ows:Keyword>
        <ows:Keyword>bergplaats</ows:Keyword>
        <ows:Keyword>berm</ows:Keyword>
        <ows:Keyword>bevaarbaar</ows:Keyword>
        <ows:Keyword>boordsteen</ows:Keyword>
        <ows:Keyword>bouwsel</ows:Keyword>
        <ows:Keyword>brandkraan</ows:Keyword>
        <ows:Keyword>brug</ows:Keyword>
        <ows:Keyword>bushok</ows:Keyword>
        <ows:Keyword>cabine</ows:Keyword>
        <ows:Keyword>chemisch</ows:Keyword>
        <ows:Keyword>circulatiezone</ows:Keyword>
        <ows:Keyword>constructie</ows:Keyword>
        <ows:Keyword>corridor</ows:Keyword>
        <ows:Keyword>CRAB</ows:Keyword>
        <ows:Keyword>deksel</ows:Keyword>
        <ows:Keyword>dienstweg</ows:Keyword>
        <ows:Keyword>drempel</ows:Keyword>
        <ows:Keyword>elektriciteitspaal</ows:Keyword>
        <ows:Keyword>fietsstalling</ows:Keyword>
        <ows:Keyword>fietsweg</ows:Keyword>
        <ows:Keyword>FLEPOS</ows:Keyword>
        <ows:Keyword>flitspaal</ows:Keyword>
        <ows:Keyword>fontein</ows:Keyword>
        <ows:Keyword>fout</ows:Keyword>
        <ows:Keyword>garagetoegang</ows:Keyword>
        <ows:Keyword>GDF</ows:Keyword>
        <ows:Keyword>gebouw</ows:Keyword>
        <ows:Keyword>gemeentegrens</ows:Keyword>
        <ows:Keyword>gemeenteterritorium</ows:Keyword>
        <ows:Keyword>gevel</ows:Keyword>
        <ows:Keyword>gevellijn</ows:Keyword>
        <ows:Keyword>gevelpunt</ows:Keyword>
        <ows:Keyword>golfbreker</ows:Keyword>
        <ows:Keyword>gracht</ows:Keyword>
        <ows:Keyword>GRB gis</ows:Keyword>
        <ows:Keyword>GRB</ows:Keyword>
        <ows:Keyword>GRB-databank</ows:Keyword>
        <ows:Keyword>GRB-gis</ows:Keyword>
        <ows:Keyword>grenspaal</ows:Keyword>
        <ows:Keyword>grootschalig</ows:Keyword>
        <ows:Keyword>havendam</ows:Keyword>
        <ows:Keyword>huisnummer</ows:Keyword>
        <ows:Keyword>hydrografisch</ows:Keyword>
        <ows:Keyword>informatiesysteem</ows:Keyword>
        <ows:Keyword>inrit</ows:Keyword>
        <ows:Keyword>installatie</ows:Keyword>
        <ows:Keyword>kadaster</ows:Keyword>
        <ows:Keyword>kadastergrootschalig</ows:Keyword>
        <ows:Keyword>kadastraal</ows:Keyword>
        <ows:Keyword>kantsteen</ows:Keyword>
        <ows:Keyword>keermuur</ows:Keyword>
        <ows:Keyword>koeltoren</ows:Keyword>
        <ows:Keyword>kopmuur</ows:Keyword>
        <ows:Keyword>kunstwerk</ows:Keyword>
        <ows:Keyword>lokaal</ows:Keyword>
        <ows:Keyword>longitudinaal</ows:Keyword>
        <ows:Keyword>loopbrug</ows:Keyword>
        <ows:Keyword>luik</ows:Keyword>
        <ows:Keyword>mast</ows:Keyword>
        <ows:Keyword>meer</ows:Keyword>
        <ows:Keyword>meerpaal</ows:Keyword>
        <ows:Keyword>metro</ows:Keyword>
        <ows:Keyword>monument</ows:Keyword>
        <ows:Keyword>mutatie</ows:Keyword>
        <ows:Keyword>muur</ows:Keyword>
        <ows:Keyword>NIS</ows:Keyword>
        <ows:Keyword>nisocde</ows:Keyword>
        <ows:Keyword>nummer</ows:Keyword>
        <ows:Keyword>onbevaarbaar</ows:Keyword>
        <ows:Keyword>onderdak</ows:Keyword>
        <ows:Keyword>onderkeldering</ows:Keyword>
        <ows:Keyword>onverharde zone</ows:Keyword>
        <ows:Keyword>onvolledigheid</ows:Keyword>
        <ows:Keyword>oppervaktewater</ows:Keyword>
        <ows:Keyword>oprit</ows:Keyword>
        <ows:Keyword>opslagtank</ows:Keyword>
        <ows:Keyword>overbrugging</ows:Keyword>
        <ows:Keyword>paal bovenleiding telefoonpaal</ows:Keyword>
        <ows:Keyword>paal</ows:Keyword>
        <ows:Keyword>parallelweg</ows:Keyword>
        <ows:Keyword>perceel</ows:Keyword>
        <ows:Keyword>pijler</ows:Keyword>
        <ows:Keyword>planimetrisch</ows:Keyword>
        <ows:Keyword>praatpaal</ows:Keyword>
        <ows:Keyword>putdeksel</ows:Keyword>
        <ows:Keyword>rail</ows:Keyword>
        <ows:Keyword>referentiebestand</ows:Keyword>
        <ows:Keyword>rijbaan</ows:Keyword>
        <ows:Keyword>rijstrook</ows:Keyword>
        <ows:Keyword>rivier</ows:Keyword>
        <ows:Keyword>rooster</ows:Keyword>
        <ows:Keyword>rotonde</ows:Keyword>
        <ows:Keyword>schoorsteen</ows:Keyword>
        <ows:Keyword>silo</ows:Keyword>
        <ows:Keyword>sloot</ows:Keyword>
        <ows:Keyword>spoor</ows:Keyword>
        <ows:Keyword>spoorbaan</ows:Keyword>
        <ows:Keyword>spoorrail</ows:Keyword>
        <ows:Keyword>spoorstaaf</ows:Keyword>
        <ows:Keyword>staketsel</ows:Keyword>
        <ows:Keyword>standbeeld</ows:Keyword>
        <ows:Keyword>stootband</ows:Keyword>
        <ows:Keyword>straat</ows:Keyword>
        <ows:Keyword>straatnaam</ows:Keyword>
        <ows:Keyword>strandhoofd</ows:Keyword>
        <ows:Keyword>surplusgebied</ows:Keyword>
        <ows:Keyword>telefooncabine</ows:Keyword>
        <ows:Keyword>terrein</ows:Keyword>
        <ows:Keyword>territorium</ows:Keyword>
        <ows:Keyword>toegang</ows:Keyword>
        <ows:Keyword>tram</ows:Keyword>
        <ows:Keyword>tramrail</ows:Keyword>
        <ows:Keyword>tramweg</ows:Keyword>
        <ows:Keyword>transport</ows:Keyword>
        <ows:Keyword>trap</ows:Keyword>
        <ows:Keyword>trein</ows:Keyword>
        <ows:Keyword>tunnelmond</ows:Keyword>
        <ows:Keyword>uitrit</ows:Keyword>
        <ows:Keyword>vangrail</ows:Keyword>
        <ows:Keyword>ventweg</ows:Keyword>
        <ows:Keyword>verbinding</ows:Keyword>
        <ows:Keyword>verdieping</ows:Keyword>
        <ows:Keyword>verharding</ows:Keyword>
        <ows:Keyword>verhoging</ows:Keyword>
        <ows:Keyword>verkeer</ows:Keyword>
        <ows:Keyword>verkeersdrempel</ows:Keyword>
        <ows:Keyword>verkeerslicht</ows:Keyword>
        <ows:Keyword>verkeersplateau</ows:Keyword>
        <ows:Keyword>verkeersplein</ows:Keyword>
        <ows:Keyword>verlaging</ows:Keyword>
        <ows:Keyword>verlichtingspaal</ows:Keyword>
        <ows:Keyword>VHA</ows:Keyword>
        <ows:Keyword>vijver</ows:Keyword>
        <ows:Keyword>VMM</ows:Keyword>
        <ows:Keyword>voetpad</ows:Keyword>
        <ows:Keyword>wandelweg</ows:Keyword>
        <ows:Keyword>water</ows:Keyword>
        <ows:Keyword>watergang</ows:Keyword>
        <ows:Keyword>waterloop</ows:Keyword>
        <ows:Keyword>waterloopsegment</ows:Keyword>
        <ows:Keyword>wateroppervlak</ows:Keyword>
        <ows:Keyword>watertoren</ows:Keyword>
        <ows:Keyword>waterweg</ows:Keyword>
        <ows:Keyword>weg</ows:Keyword>
        <ows:Keyword>wegaanhorigheid</ows:Keyword>
        <ows:Keyword>wegbaan</ows:Keyword>
        <ows:Keyword>weggebruiker</ows:Keyword>
        <ows:Keyword>weginrichting</ows:Keyword>
        <ows:Keyword>wegknoop</ows:Keyword>
        <ows:Keyword>wegsegment</ows:Keyword>
    </ows:Keywords>
    <ows:ServiceType>OGC:WMTS</ows:ServiceType>
    <ows:ServiceTypeVersion>1.0.0</ows:ServiceTypeVersion>
    <ows:Fees>Het gebruik van de service is kosteloos.</ows:Fees>
    <ows:AccessConstraints>Het gebruiksrecht is te vinden op https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/geografische-webdiensten/gebruiksrecht-en-privacyverklaring-geografische-webdiensten.</ows:AccessConstraints>
  </ows:ServiceIdentification>
  <ows:ServiceProvider>
    <ows:ProviderName>agentschap Digitaal Vlaanderen</ows:ProviderName>
    <ows:ProviderSite xlink:href="https://www.vlaanderen.be/digitaal-vlaanderen" />
    <ows:ServiceContact>
      <ows:ContactInfo>
        <ows:Phone>
          <ows:Voice>+32 9 276 15 00</ows:Voice>
        </ows:Phone>
        <ows:Address>
          <ows:DeliveryPoint>Havenlaan 88</ows:DeliveryPoint>
          <ows:City>Brussel</ows:City>
          <ows:AdministrativeArea />
          <ows:PostalCode>1000</ows:PostalCode>
          <ows:Country>België</ows:Country>
          <ows:ElectronicMailAddress>digitaal.vlaanderen@vlaanderen.be</ows:ElectronicMailAddress>
        </ows:Address>
      </ows:ContactInfo>
    </ows:ServiceContact>
  </ows:ServiceProvider>
  <ows:OperationsMetadata>
    <ows:Operation name="GetCapabilities">
      <ows:DCP>
        <ows:HTTP>
          <ows:Get xlink:href="https://geo.api.vlaanderen.be/GRB/wmts?">
            <ows:Constraint name="GetEncoding">
              <ows:AllowedValues>
                <ows:Value>KVP</ows:Value>
              </ows:AllowedValues>
            </ows:Constraint>
          </ows:Get>
        </ows:HTTP>
      </ows:DCP>
      <ows:Parameter name="AcceptVersions">
        <ows:AllowedValues>
          <ows:Value>1.0.0</ows:Value>
        </ows:AllowedValues>
      </ows:Parameter>
      <ows:Parameter name="AcceptFormats">
        <ows:AllowedValues>
          <ows:Value>text/xml</ows:Value>
        </ows:AllowedValues>
      </ows:Parameter>
    </ows:Operation>
    <ows:Operation name="GetTile">
      <ows:DCP>
        <ows:HTTP>
          <ows:Get xlink:href="https://geo.api.vlaanderen.be/GRB/wmts?">
            <ows:Constraint name="GetEncoding">
              <ows:AllowedValues>
                <ows:Value>KVP</ows:Value>
              </ows:AllowedValues>
            </ows:Constraint>
          </ows:Get>
        </ows:HTTP>
      </ows:DCP>
    </ows:Operation>
    <inspire_vs:ExtendedCapabilities>
      <inspire_common:ResourceLocator>
        <inspire_common:URL>https://geo.api.vlaanderen.be/GRB/wmts?</inspire_common:URL>
        <inspire_common:MediaType>application/gml+xml</inspire_common:MediaType>
      </inspire_common:ResourceLocator>
      <inspire_common:ResourceType>service</inspire_common:ResourceType>
      <inspire_common:TemporalReference>
        <inspire_common:DateOfCreation>2022-08-11</inspire_common:DateOfCreation>
      </inspire_common:TemporalReference>
      <inspire_common:Conformity>
        <inspire_common:Specification xsi:type="inspire_common:citationInspireInteroperabilityRegulation_dut">
          <inspire_common:Title>VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens</inspire_common:Title>
          <inspire_common:DateOfPublication>2010-12-08</inspire_common:DateOfPublication>
          <inspire_common:URI>OJ:L:2010:323:0011:0102:NL:PDF</inspire_common:URI>
          <inspire_common:ResourceLocator>
            <inspire_common:URL>http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2010:323:0011:0102:NL:PDF</inspire_common:URL>
            <inspire_common:MediaType>application/pdf</inspire_common:MediaType>
          </inspire_common:ResourceLocator>
        </inspire_common:Specification>
        <inspire_common:Degree>notEvaluated</inspire_common:Degree>
      </inspire_common:Conformity>
      <inspire_common:MetadataPointOfContact>
        <inspire_common:OrganisationName>agentschap Digitaal Vlaanderen</inspire_common:OrganisationName>
        <inspire_common:EmailAddress>digitaal.vlaanderen@vlaanderen.be</inspire_common:EmailAddress>
      </inspire_common:MetadataPointOfContact>
      <inspire_common:MetadataDate>2023-06-27</inspire_common:MetadataDate>
      <inspire_common:SpatialDataServiceType>view</inspire_common:SpatialDataServiceType>
      <inspire_common:MandatoryKeyword xsi:type="inspire_common:classificationOfSpatialDataService">
        <inspire_common:KeywordValue>infoMapAccessService</inspire_common:KeywordValue>
      </inspire_common:MandatoryKeyword>
      <inspire_common:SupportedLanguages>
        <inspire_common:DefaultLanguage>
          <inspire_common:Language>dut</inspire_common:Language>
        </inspire_common:DefaultLanguage>
      </inspire_common:SupportedLanguages>
      <inspire_common:ResponseLanguage>
        <inspire_common:Language>dut</inspire_common:Language>
      </inspire_common:ResponseLanguage>
      <inspire_common:MetadataUrl>
        <inspire_common:URL>https://metadata.vlaanderen.be/srv/dut/csw?request=GetRecordById&amp;service=CSW&amp;constraintLanguage=CQL_TEXT&amp;version=2.0.2&amp;resultType=results&amp;ElementSetName=full&amp;typenames=csw:Record&amp;id=9c49e23f-8ad8-4899-848e-37b8cbe27f89&amp;OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd</inspire_common:URL>
        <inspire_common:MediaType>application/vnd.ogc.csw.GetRecordByIdResponse_xml</inspire_common:MediaType>
      </inspire_common:MetadataUrl>
    </inspire_vs:ExtendedCapabilities>
  </ows:OperationsMetadata>
  <Contents>
    <Layer>
      <ows:Title>GRB-basiskaart</ows:Title>
      <ows:Abstract>Deze laag toont alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart</ows:Abstract>
      <ows:Keywords>
        <ows:Keyword>actualisatie</ows:Keyword>
        <ows:Keyword>administratieve grens</ows:Keyword>
        <ows:Keyword>adres</ows:Keyword>
        <ows:Keyword>afdak</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>anomalie</ows:Keyword>
        <ows:Keyword>as built</ows:Keyword>
        <ows:Keyword>atlas</ows:Keyword>
        <ows:Keyword>autosnelweg</ows:Keyword>
        <ows:Keyword>baangracht</ows:Keyword>
        <ows:Keyword>basiskaart</ows:Keyword>
        <ows:Keyword>beek</ows:Keyword>
        <ows:Keyword>bergplaats</ows:Keyword>
        <ows:Keyword>berm</ows:Keyword>
        <ows:Keyword>bevaarbaar</ows:Keyword>
        <ows:Keyword>boordsteen</ows:Keyword>
        <ows:Keyword>bouwsel</ows:Keyword>
        <ows:Keyword>brandkraan</ows:Keyword>
        <ows:Keyword>brug</ows:Keyword>
        <ows:Keyword>bushok</ows:Keyword>
        <ows:Keyword>cabine</ows:Keyword>
        <ows:Keyword>chemisch</ows:Keyword>
        <ows:Keyword>circulatiezone</ows:Keyword>
        <ows:Keyword>constructie</ows:Keyword>
        <ows:Keyword>corridor</ows:Keyword>
        <ows:Keyword>CRAB</ows:Keyword>
        <ows:Keyword>deksel</ows:Keyword>
        <ows:Keyword>dienstweg</ows:Keyword>
        <ows:Keyword>drempel</ows:Keyword>
        <ows:Keyword>elektriciteitspaal</ows:Keyword>
        <ows:Keyword>fietsstalling</ows:Keyword>
        <ows:Keyword>fietsweg</ows:Keyword>
        <ows:Keyword>FLEPOS</ows:Keyword>
        <ows:Keyword>flitspaal</ows:Keyword>
        <ows:Keyword>fontein</ows:Keyword>
        <ows:Keyword>fout</ows:Keyword>
        <ows:Keyword>garagetoegang</ows:Keyword>
        <ows:Keyword>GDF</ows:Keyword>
        <ows:Keyword>gebouw</ows:Keyword>
        <ows:Keyword>gemeentegrens</ows:Keyword>
        <ows:Keyword>gemeenteterritorium</ows:Keyword>
        <ows:Keyword>gevel</ows:Keyword>
        <ows:Keyword>gevellijn</ows:Keyword>
        <ows:Keyword>gevelpunt</ows:Keyword>
        <ows:Keyword>golfbreker</ows:Keyword>
        <ows:Keyword>gracht</ows:Keyword>
        <ows:Keyword>GRB gis</ows:Keyword>
        <ows:Keyword>GRB</ows:Keyword>
        <ows:Keyword>GRB-databank</ows:Keyword>
        <ows:Keyword>GRB-gis</ows:Keyword>
        <ows:Keyword>grenspaal</ows:Keyword>
        <ows:Keyword>grootschalig</ows:Keyword>
        <ows:Keyword>havendam</ows:Keyword>
        <ows:Keyword>huisnummer</ows:Keyword>
        <ows:Keyword>hydrografisch</ows:Keyword>
        <ows:Keyword>informatiesysteem</ows:Keyword>
        <ows:Keyword>inrit</ows:Keyword>
        <ows:Keyword>installatie</ows:Keyword>
        <ows:Keyword>kadaster</ows:Keyword>
        <ows:Keyword>kadastergrootschalig</ows:Keyword>
        <ows:Keyword>kadastraal</ows:Keyword>
        <ows:Keyword>kantsteen</ows:Keyword>
        <ows:Keyword>keermuur</ows:Keyword>
        <ows:Keyword>koeltoren</ows:Keyword>
        <ows:Keyword>kopmuur</ows:Keyword>
        <ows:Keyword>kunstwerk</ows:Keyword>
        <ows:Keyword>lokaal</ows:Keyword>
        <ows:Keyword>longitudinaal</ows:Keyword>
        <ows:Keyword>loopbrug</ows:Keyword>
        <ows:Keyword>luik</ows:Keyword>
        <ows:Keyword>mast</ows:Keyword>
        <ows:Keyword>meer</ows:Keyword>
        <ows:Keyword>meerpaal</ows:Keyword>
        <ows:Keyword>metro</ows:Keyword>
        <ows:Keyword>monument</ows:Keyword>
        <ows:Keyword>mutatie</ows:Keyword>
        <ows:Keyword>muur</ows:Keyword>
        <ows:Keyword>NIS</ows:Keyword>
        <ows:Keyword>nisocde</ows:Keyword>
        <ows:Keyword>nummer</ows:Keyword>
        <ows:Keyword>onbevaarbaar</ows:Keyword>
        <ows:Keyword>onderdak</ows:Keyword>
        <ows:Keyword>onderkeldering</ows:Keyword>
        <ows:Keyword>onverharde zone</ows:Keyword>
        <ows:Keyword>onvolledigheid</ows:Keyword>
        <ows:Keyword>oppervaktewater</ows:Keyword>
        <ows:Keyword>oprit</ows:Keyword>
        <ows:Keyword>opslagtank</ows:Keyword>
        <ows:Keyword>overbrugging</ows:Keyword>
        <ows:Keyword>paal bovenleiding telefoonpaal</ows:Keyword>
        <ows:Keyword>paal</ows:Keyword>
        <ows:Keyword>parallelweg</ows:Keyword>
        <ows:Keyword>perceel</ows:Keyword>
        <ows:Keyword>pijler</ows:Keyword>
        <ows:Keyword>planimetrisch</ows:Keyword>
        <ows:Keyword>praatpaal</ows:Keyword>
        <ows:Keyword>putdeksel</ows:Keyword>
        <ows:Keyword>rail</ows:Keyword>
        <ows:Keyword>referentiebestand</ows:Keyword>
        <ows:Keyword>rijbaan</ows:Keyword>
        <ows:Keyword>rijstrook</ows:Keyword>
        <ows:Keyword>rivier</ows:Keyword>
        <ows:Keyword>rooster</ows:Keyword>
        <ows:Keyword>rotonde</ows:Keyword>
        <ows:Keyword>schoorsteen</ows:Keyword>
        <ows:Keyword>silo</ows:Keyword>
        <ows:Keyword>sloot</ows:Keyword>
        <ows:Keyword>spoor</ows:Keyword>
        <ows:Keyword>spoorbaan</ows:Keyword>
        <ows:Keyword>spoorrail</ows:Keyword>
        <ows:Keyword>spoorstaaf</ows:Keyword>
        <ows:Keyword>staketsel</ows:Keyword>
        <ows:Keyword>standbeeld</ows:Keyword>
        <ows:Keyword>stootband</ows:Keyword>
        <ows:Keyword>straat</ows:Keyword>
        <ows:Keyword>straatnaam</ows:Keyword>
        <ows:Keyword>strandhoofd</ows:Keyword>
        <ows:Keyword>surplusgebied</ows:Keyword>
        <ows:Keyword>telefooncabine</ows:Keyword>
        <ows:Keyword>terrein</ows:Keyword>
        <ows:Keyword>territorium</ows:Keyword>
        <ows:Keyword>toegang</ows:Keyword>
        <ows:Keyword>tram</ows:Keyword>
        <ows:Keyword>tramrail</ows:Keyword>
        <ows:Keyword>tramweg</ows:Keyword>
        <ows:Keyword>transport</ows:Keyword>
        <ows:Keyword>trap</ows:Keyword>
        <ows:Keyword>trein</ows:Keyword>
        <ows:Keyword>tunnelmond</ows:Keyword>
        <ows:Keyword>uitrit</ows:Keyword>
        <ows:Keyword>vangrail</ows:Keyword>
        <ows:Keyword>ventweg</ows:Keyword>
        <ows:Keyword>verbinding</ows:Keyword>
        <ows:Keyword>verdieping</ows:Keyword>
        <ows:Keyword>verharding</ows:Keyword>
        <ows:Keyword>verhoging</ows:Keyword>
        <ows:Keyword>verkeer</ows:Keyword>
        <ows:Keyword>verkeersdrempel</ows:Keyword>
        <ows:Keyword>verkeerslicht</ows:Keyword>
        <ows:Keyword>verkeersplateau</ows:Keyword>
        <ows:Keyword>verkeersplein</ows:Keyword>
        <ows:Keyword>verlaging</ows:Keyword>
        <ows:Keyword>verlichtingspaal</ows:Keyword>
        <ows:Keyword>VHA</ows:Keyword>
        <ows:Keyword>vijver</ows:Keyword>
        <ows:Keyword>VMM</ows:Keyword>
        <ows:Keyword>voetpad</ows:Keyword>
        <ows:Keyword>wandelweg</ows:Keyword>
        <ows:Keyword>water</ows:Keyword>
        <ows:Keyword>watergang</ows:Keyword>
        <ows:Keyword>waterloop</ows:Keyword>
        <ows:Keyword>waterloopsegment</ows:Keyword>
        <ows:Keyword>wateroppervlak</ows:Keyword>
        <ows:Keyword>watertoren</ows:Keyword>
        <ows:Keyword>waterweg</ows:Keyword>
        <ows:Keyword>weg</ows:Keyword>
        <ows:Keyword>wegaanhorigheid</ows:Keyword>
        <ows:Keyword>wegbaan</ows:Keyword>
        <ows:Keyword>weggebruiker</ows:Keyword>
        <ows:Keyword>weginrichting</ows:Keyword>
        <ows:Keyword>wegknoop</ows:Keyword>
        <ows:Keyword>wegsegment</ows:Keyword>
      </ows:Keywords>
      <ows:Identifier>grb_bsk</ows:Identifier>
      <ows:WGS84BoundingBox>
        <ows:LowerCorner>2.530000 50.685000</ows:LowerCorner>
        <ows:UpperCorner>5.920000 51.520000</ows:UpperCorner>
      </ows:WGS84BoundingBox>
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/csw?request=GetRecordById&amp;service=CSW&amp;constraintLanguage=CQL_TEXT&amp;version=2.0.2&amp;resultType=results&amp;ElementSetName=full&amp;typenames=csw:Record&amp;id=7C823055-7BBF-4D62-B55E-F85C30D53162&amp;OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd" />
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/catalog.search#/metadata/7C823055-7BBF-4D62-B55E-F85C30D53162" />
      <ows:DatasetDescriptionSummary>
        <ows:Identifier>E2707D13-B366-4D25-A286-E1B1330CADF7</ows:Identifier>
      </ows:DatasetDescriptionSummary>
      <Style isDefault="true">
        <ows:Title>GRB-Basiskaart</ows:Title>
        <ows:Identifier />
      </Style>
      <Format>image/png</Format>
      <TileMatrixSetLink>
        <TileMatrixSet>GoogleMapsVL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>10</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>21</MinTileRow>
            <MaxTileRow>21</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>42</MinTileRow>
            <MaxTileRow>43</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>85</MinTileRow>
            <MaxTileRow>86</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>170</MinTileRow>
            <MaxTileRow>172</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>340</MinTileRow>
            <MaxTileRow>344</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>680</MinTileRow>
            <MaxTileRow>688</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1361</MinTileRow>
            <MaxTileRow>1377</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2723</MinTileRow>
            <MaxTileRow>2755</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5447</MinTileRow>
            <MaxTileRow>5510</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10895</MinTileRow>
            <MaxTileRow>11020</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>21790</MinTileRow>
            <MaxTileRow>22041</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>43580</MinTileRow>
            <MaxTileRow>44083</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>87161</MinTileRow>
            <MaxTileRow>88167</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>174322</MinTileRow>
            <MaxTileRow>176334</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>348645</MinTileRow>
            <MaxTileRow>352669</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>697290</MinTileRow>
            <MaxTileRow>705338</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>WGS84VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>3</MinTileRow>
            <MaxTileRow>3</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>6</MinTileRow>
            <MaxTileRow>6</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>13</MinTileRow>
            <MaxTileRow>13</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>27</MinTileRow>
            <MaxTileRow>27</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>54</MinTileRow>
            <MaxTileRow>55</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>109</MinTileRow>
            <MaxTileRow>111</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>218</MinTileRow>
            <MaxTileRow>223</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>437</MinTileRow>
            <MaxTileRow>447</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>875</MinTileRow>
            <MaxTileRow>895</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>1751</MinTileRow>
            <MaxTileRow>1791</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>3503</MinTileRow>
            <MaxTileRow>3582</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>7006</MinTileRow>
            <MaxTileRow>7164</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>14012</MinTileRow>
            <MaxTileRow>14328</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>28024</MinTileRow>
            <MaxTileRow>28656</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>56048</MinTileRow>
            <MaxTileRow>57312</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>112097</MinTileRow>
            <MaxTileRow>114625</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>224194</MinTileRow>
            <MaxTileRow>229250</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>22</TileMatrix>
            <MinTileRow>448388</MinTileRow>
            <MaxTileRow>458500</MaxTileRow>
            <MinTileCol>2126575</MinTileCol>
            <MaxTileCol>2166341</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>BPL72VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>3</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>7</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>11</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>15</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>22</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>30</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>20</MinTileRow>
            <MaxTileRow>44</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>60</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>41</MinTileRow>
            <MaxTileRow>88</MaxTileRow>
            <MinTileCol>5</MinTileCol>
            <MaxTileCol>121</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>82</MinTileRow>
            <MaxTileRow>176</MaxTileRow>
            <MinTileCol>11</MinTileCol>
            <MaxTileCol>243</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>164</MinTileRow>
            <MaxTileRow>352</MaxTileRow>
            <MinTileCol>23</MinTileCol>
            <MaxTileCol>486</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>328</MinTileRow>
            <MaxTileRow>705</MaxTileRow>
            <MinTileCol>47</MinTileCol>
            <MaxTileCol>972</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>656</MinTileRow>
            <MaxTileRow>1411</MaxTileRow>
            <MinTileCol>94</MinTileCol>
            <MaxTileCol>1945</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1313</MinTileRow>
            <MaxTileRow>2822</MaxTileRow>
            <MinTileCol>188</MinTileCol>
            <MaxTileCol>3891</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2627</MinTileRow>
            <MaxTileRow>5644</MaxTileRow>
            <MinTileCol>377</MinTileCol>
            <MaxTileCol>7783</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5254</MinTileRow>
            <MaxTileRow>11289</MaxTileRow>
            <MinTileCol>754</MinTileCol>
            <MaxTileCol>15566</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10509</MinTileRow>
            <MaxTileRow>22578</MaxTileRow>
            <MinTileCol>1509</MinTileCol>
            <MaxTileCol>31133</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
    <TileMatrixSetLink><TileMatrixSet>BPL2008VL</TileMatrixSet><TileMatrixSetLimits><TileMatrixLimits><TileMatrix>0</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>0</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>0</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>1</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>1</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>1</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>2</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>2</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>3</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>3</TileMatrix><MinTileRow>1</MinTileRow><MaxTileRow>4</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>7</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>4</TileMatrix><MinTileRow>3</MinTileRow><MaxTileRow>9</MaxTileRow><MinTileCol>1</MinTileCol><MaxTileCol>15</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>5</TileMatrix><MinTileRow>6</MinTileRow><MaxTileRow>18</MaxTileRow><MinTileCol>2</MinTileCol><MaxTileCol>31</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>6</TileMatrix><MinTileRow>13</MinTileRow><MaxTileRow>36</MaxTileRow><MinTileCol>5</MinTileCol><MaxTileCol>63</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>7</TileMatrix><MinTileRow>26</MinTileRow><MaxTileRow>73</MaxTileRow><MinTileCol>10</MinTileCol><MaxTileCol>126</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>8</TileMatrix><MinTileRow>53</MinTileRow><MaxTileRow>146</MaxTileRow><MinTileCol>21</MinTileCol><MaxTileCol>252</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>9</TileMatrix><MinTileRow>107</MinTileRow><MaxTileRow>292</MaxTileRow><MinTileCol>42</MinTileCol><MaxTileCol>505</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>10</TileMatrix><MinTileRow>214</MinTileRow><MaxTileRow>585</MaxTileRow><MinTileCol>85</MinTileCol><MaxTileCol>1011</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>11</TileMatrix><MinTileRow>429</MinTileRow><MaxTileRow>1171</MaxTileRow><MinTileCol>171</MinTileCol><MaxTileCol>2023</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>12</TileMatrix><MinTileRow>859</MinTileRow><MaxTileRow>2343</MaxTileRow><MinTileCol>343</MinTileCol><MaxTileCol>4046</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>13</TileMatrix><MinTileRow>1718</MinTileRow><MaxTileRow>4687</MaxTileRow><MinTileCol>687</MinTileCol><MaxTileCol>8093</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>14</TileMatrix><MinTileRow>3436</MinTileRow><MaxTileRow>9375</MaxTileRow><MinTileCol>1374</MinTileCol><MaxTileCol>16187</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>15</TileMatrix><MinTileRow>6873</MinTileRow><MaxTileRow>18751</MaxTileRow><MinTileCol>2748</MinTileCol><MaxTileCol>32375</MaxTileCol></TileMatrixLimits></TileMatrixSetLimits></TileMatrixSetLink></Layer>
    <Layer>
      <ows:Title>GRB-basiskaart grijs</ows:Title>
      <ows:Abstract>Deze laag toont alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart, in grijstinten.</ows:Abstract>
      <ows:Keywords>
        <ows:Keyword>actualisatie</ows:Keyword>
        <ows:Keyword>administratieve grens</ows:Keyword>
        <ows:Keyword>adres</ows:Keyword>
        <ows:Keyword>afdak</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>anomalie</ows:Keyword>
        <ows:Keyword>as built</ows:Keyword>
        <ows:Keyword>atlas</ows:Keyword>
        <ows:Keyword>autosnelweg</ows:Keyword>
        <ows:Keyword>baangracht</ows:Keyword>
        <ows:Keyword>basiskaart</ows:Keyword>
        <ows:Keyword>beek</ows:Keyword>
        <ows:Keyword>bergplaats</ows:Keyword>
        <ows:Keyword>berm</ows:Keyword>
        <ows:Keyword>bevaarbaar</ows:Keyword>
        <ows:Keyword>boordsteen</ows:Keyword>
        <ows:Keyword>bouwsel</ows:Keyword>
        <ows:Keyword>brandkraan</ows:Keyword>
        <ows:Keyword>brug</ows:Keyword>
        <ows:Keyword>bushok</ows:Keyword>
        <ows:Keyword>cabine</ows:Keyword>
        <ows:Keyword>chemisch</ows:Keyword>
        <ows:Keyword>circulatiezone</ows:Keyword>
        <ows:Keyword>constructie</ows:Keyword>
        <ows:Keyword>corridor</ows:Keyword>
        <ows:Keyword>CRAB</ows:Keyword>
        <ows:Keyword>deksel</ows:Keyword>
        <ows:Keyword>dienstweg</ows:Keyword>
        <ows:Keyword>drempel</ows:Keyword>
        <ows:Keyword>elektriciteitspaal</ows:Keyword>
        <ows:Keyword>fietsstalling</ows:Keyword>
        <ows:Keyword>fietsweg</ows:Keyword>
        <ows:Keyword>FLEPOS</ows:Keyword>
        <ows:Keyword>flitspaal</ows:Keyword>
        <ows:Keyword>fontein</ows:Keyword>
        <ows:Keyword>fout</ows:Keyword>
        <ows:Keyword>garagetoegang</ows:Keyword>
        <ows:Keyword>GDF</ows:Keyword>
        <ows:Keyword>gebouw</ows:Keyword>
        <ows:Keyword>gemeentegrens</ows:Keyword>
        <ows:Keyword>gemeenteterritorium</ows:Keyword>
        <ows:Keyword>gevel</ows:Keyword>
        <ows:Keyword>gevellijn</ows:Keyword>
        <ows:Keyword>gevelpunt</ows:Keyword>
        <ows:Keyword>golfbreker</ows:Keyword>
        <ows:Keyword>gracht</ows:Keyword>
        <ows:Keyword>GRB gis</ows:Keyword>
        <ows:Keyword>GRB</ows:Keyword>
        <ows:Keyword>GRB-databank</ows:Keyword>
        <ows:Keyword>GRB-gis</ows:Keyword>
        <ows:Keyword>grenspaal</ows:Keyword>
        <ows:Keyword>grootschalig</ows:Keyword>
        <ows:Keyword>havendam</ows:Keyword>
        <ows:Keyword>huisnummer</ows:Keyword>
        <ows:Keyword>hydrografisch</ows:Keyword>
        <ows:Keyword>informatiesysteem</ows:Keyword>
        <ows:Keyword>inrit</ows:Keyword>
        <ows:Keyword>installatie</ows:Keyword>
        <ows:Keyword>kadaster</ows:Keyword>
        <ows:Keyword>kadastergrootschalig</ows:Keyword>
        <ows:Keyword>kadastraal</ows:Keyword>
        <ows:Keyword>kantsteen</ows:Keyword>
        <ows:Keyword>keermuur</ows:Keyword>
        <ows:Keyword>koeltoren</ows:Keyword>
        <ows:Keyword>kopmuur</ows:Keyword>
        <ows:Keyword>kunstwerk</ows:Keyword>
        <ows:Keyword>lokaal</ows:Keyword>
        <ows:Keyword>longitudinaal</ows:Keyword>
        <ows:Keyword>loopbrug</ows:Keyword>
        <ows:Keyword>luik</ows:Keyword>
        <ows:Keyword>mast</ows:Keyword>
        <ows:Keyword>meer</ows:Keyword>
        <ows:Keyword>meerpaal</ows:Keyword>
        <ows:Keyword>metro</ows:Keyword>
        <ows:Keyword>monument</ows:Keyword>
        <ows:Keyword>mutatie</ows:Keyword>
        <ows:Keyword>muur</ows:Keyword>
        <ows:Keyword>NIS</ows:Keyword>
        <ows:Keyword>nisocde</ows:Keyword>
        <ows:Keyword>nummer</ows:Keyword>
        <ows:Keyword>onbevaarbaar</ows:Keyword>
        <ows:Keyword>onderdak</ows:Keyword>
        <ows:Keyword>onderkeldering</ows:Keyword>
        <ows:Keyword>onverharde zone</ows:Keyword>
        <ows:Keyword>onvolledigheid</ows:Keyword>
        <ows:Keyword>oppervaktewater</ows:Keyword>
        <ows:Keyword>oprit</ows:Keyword>
        <ows:Keyword>opslagtank</ows:Keyword>
        <ows:Keyword>overbrugging</ows:Keyword>
        <ows:Keyword>paal bovenleiding telefoonpaal</ows:Keyword>
        <ows:Keyword>paal</ows:Keyword>
        <ows:Keyword>parallelweg</ows:Keyword>
        <ows:Keyword>perceel</ows:Keyword>
        <ows:Keyword>pijler</ows:Keyword>
        <ows:Keyword>planimetrisch</ows:Keyword>
        <ows:Keyword>praatpaal</ows:Keyword>
        <ows:Keyword>putdeksel</ows:Keyword>
        <ows:Keyword>rail</ows:Keyword>
        <ows:Keyword>referentiebestand</ows:Keyword>
        <ows:Keyword>rijbaan</ows:Keyword>
        <ows:Keyword>rijstrook</ows:Keyword>
        <ows:Keyword>rivier</ows:Keyword>
        <ows:Keyword>rooster</ows:Keyword>
        <ows:Keyword>rotonde</ows:Keyword>
        <ows:Keyword>schoorsteen</ows:Keyword>
        <ows:Keyword>silo</ows:Keyword>
        <ows:Keyword>sloot</ows:Keyword>
        <ows:Keyword>spoor</ows:Keyword>
        <ows:Keyword>spoorbaan</ows:Keyword>
        <ows:Keyword>spoorrail</ows:Keyword>
        <ows:Keyword>spoorstaaf</ows:Keyword>
        <ows:Keyword>staketsel</ows:Keyword>
        <ows:Keyword>standbeeld</ows:Keyword>
        <ows:Keyword>stootband</ows:Keyword>
        <ows:Keyword>straat</ows:Keyword>
        <ows:Keyword>straatnaam</ows:Keyword>
        <ows:Keyword>strandhoofd</ows:Keyword>
        <ows:Keyword>surplusgebied</ows:Keyword>
        <ows:Keyword>telefooncabine</ows:Keyword>
        <ows:Keyword>terrein</ows:Keyword>
        <ows:Keyword>territorium</ows:Keyword>
        <ows:Keyword>toegang</ows:Keyword>
        <ows:Keyword>tram</ows:Keyword>
        <ows:Keyword>tramrail</ows:Keyword>
        <ows:Keyword>tramweg</ows:Keyword>
        <ows:Keyword>transport</ows:Keyword>
        <ows:Keyword>trap</ows:Keyword>
        <ows:Keyword>trein</ows:Keyword>
        <ows:Keyword>tunnelmond</ows:Keyword>
        <ows:Keyword>uitrit</ows:Keyword>
        <ows:Keyword>vangrail</ows:Keyword>
        <ows:Keyword>ventweg</ows:Keyword>
        <ows:Keyword>verbinding</ows:Keyword>
        <ows:Keyword>verdieping</ows:Keyword>
        <ows:Keyword>verharding</ows:Keyword>
        <ows:Keyword>verhoging</ows:Keyword>
        <ows:Keyword>verkeer</ows:Keyword>
        <ows:Keyword>verkeersdrempel</ows:Keyword>
        <ows:Keyword>verkeerslicht</ows:Keyword>
        <ows:Keyword>verkeersplateau</ows:Keyword>
        <ows:Keyword>verkeersplein</ows:Keyword>
        <ows:Keyword>verlaging</ows:Keyword>
        <ows:Keyword>verlichtingspaal</ows:Keyword>
        <ows:Keyword>VHA</ows:Keyword>
        <ows:Keyword>vijver</ows:Keyword>
        <ows:Keyword>VMM</ows:Keyword>
        <ows:Keyword>voetpad</ows:Keyword>
        <ows:Keyword>wandelweg</ows:Keyword>
        <ows:Keyword>water</ows:Keyword>
        <ows:Keyword>watergang</ows:Keyword>
        <ows:Keyword>waterloop</ows:Keyword>
        <ows:Keyword>waterloopsegment</ows:Keyword>
        <ows:Keyword>wateroppervlak</ows:Keyword>
        <ows:Keyword>watertoren</ows:Keyword>
        <ows:Keyword>waterweg</ows:Keyword>
        <ows:Keyword>weg</ows:Keyword>
        <ows:Keyword>wegaanhorigheid</ows:Keyword>
        <ows:Keyword>wegbaan</ows:Keyword>
        <ows:Keyword>weggebruiker</ows:Keyword>
        <ows:Keyword>weginrichting</ows:Keyword>
        <ows:Keyword>wegknoop</ows:Keyword>
        <ows:Keyword>wegsegment</ows:Keyword>
      </ows:Keywords>
      <ows:Identifier>grb_bsk_grijs</ows:Identifier>
      <ows:WGS84BoundingBox>
        <ows:LowerCorner>2.530000 50.685000</ows:LowerCorner>
        <ows:UpperCorner>5.920000 51.520000</ows:UpperCorner>
      </ows:WGS84BoundingBox>
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/csw?request=GetRecordById&amp;service=CSW&amp;constraintLanguage=CQL_TEXT&amp;version=2.0.2&amp;resultType=results&amp;ElementSetName=full&amp;typenames=csw:Record&amp;id=7C823055-7BBF-4D62-B55E-F85C30D53162&amp;OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd" />
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/catalog.search#/metadata/7C823055-7BBF-4D62-B55E-F85C30D53162" />
      <ows:DatasetDescriptionSummary>
        <ows:Identifier>E2707D13-B366-4D25-A286-E1B1330CADF7</ows:Identifier>
      </ows:DatasetDescriptionSummary>
      <Style isDefault="true">
        <ows:Title>GRB-basiskaart-grijs</ows:Title>
        <ows:Identifier />
      </Style>
      <Format>image/png</Format>
      <TileMatrixSetLink>
        <TileMatrixSet>GoogleMapsVL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>10</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>21</MinTileRow>
            <MaxTileRow>21</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>42</MinTileRow>
            <MaxTileRow>43</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>85</MinTileRow>
            <MaxTileRow>86</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>170</MinTileRow>
            <MaxTileRow>172</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>340</MinTileRow>
            <MaxTileRow>344</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>680</MinTileRow>
            <MaxTileRow>688</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1361</MinTileRow>
            <MaxTileRow>1377</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2723</MinTileRow>
            <MaxTileRow>2755</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5447</MinTileRow>
            <MaxTileRow>5510</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10895</MinTileRow>
            <MaxTileRow>11020</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>21790</MinTileRow>
            <MaxTileRow>22041</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>43580</MinTileRow>
            <MaxTileRow>44083</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>87161</MinTileRow>
            <MaxTileRow>88167</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>174322</MinTileRow>
            <MaxTileRow>176334</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>348645</MinTileRow>
            <MaxTileRow>352669</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>697290</MinTileRow>
            <MaxTileRow>705338</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>WGS84VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>3</MinTileRow>
            <MaxTileRow>3</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>6</MinTileRow>
            <MaxTileRow>6</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>13</MinTileRow>
            <MaxTileRow>13</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>27</MinTileRow>
            <MaxTileRow>27</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>54</MinTileRow>
            <MaxTileRow>55</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>109</MinTileRow>
            <MaxTileRow>111</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>218</MinTileRow>
            <MaxTileRow>223</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>437</MinTileRow>
            <MaxTileRow>447</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>875</MinTileRow>
            <MaxTileRow>895</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>1751</MinTileRow>
            <MaxTileRow>1791</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>3503</MinTileRow>
            <MaxTileRow>3582</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>7006</MinTileRow>
            <MaxTileRow>7164</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>14012</MinTileRow>
            <MaxTileRow>14328</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>28024</MinTileRow>
            <MaxTileRow>28656</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>56048</MinTileRow>
            <MaxTileRow>57312</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>112097</MinTileRow>
            <MaxTileRow>114625</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>224194</MinTileRow>
            <MaxTileRow>229250</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>22</TileMatrix>
            <MinTileRow>448388</MinTileRow>
            <MaxTileRow>458500</MaxTileRow>
            <MinTileCol>2126575</MinTileCol>
            <MaxTileCol>2166341</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>BPL72VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>3</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>7</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>11</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>15</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>22</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>30</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>20</MinTileRow>
            <MaxTileRow>44</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>60</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>41</MinTileRow>
            <MaxTileRow>88</MaxTileRow>
            <MinTileCol>5</MinTileCol>
            <MaxTileCol>121</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>82</MinTileRow>
            <MaxTileRow>176</MaxTileRow>
            <MinTileCol>11</MinTileCol>
            <MaxTileCol>243</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>164</MinTileRow>
            <MaxTileRow>352</MaxTileRow>
            <MinTileCol>23</MinTileCol>
            <MaxTileCol>486</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>328</MinTileRow>
            <MaxTileRow>705</MaxTileRow>
            <MinTileCol>47</MinTileCol>
            <MaxTileCol>972</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>656</MinTileRow>
            <MaxTileRow>1411</MaxTileRow>
            <MinTileCol>94</MinTileCol>
            <MaxTileCol>1945</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1313</MinTileRow>
            <MaxTileRow>2822</MaxTileRow>
            <MinTileCol>188</MinTileCol>
            <MaxTileCol>3891</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2627</MinTileRow>
            <MaxTileRow>5644</MaxTileRow>
            <MinTileCol>377</MinTileCol>
            <MaxTileCol>7783</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5254</MinTileRow>
            <MaxTileRow>11289</MaxTileRow>
            <MinTileCol>754</MinTileCol>
            <MaxTileCol>15566</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10509</MinTileRow>
            <MaxTileRow>22578</MaxTileRow>
            <MinTileCol>1509</MinTileCol>
            <MaxTileCol>31133</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
    <TileMatrixSetLink><TileMatrixSet>BPL2008VL</TileMatrixSet><TileMatrixSetLimits><TileMatrixLimits><TileMatrix>0</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>0</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>0</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>1</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>1</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>1</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>2</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>2</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>3</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>3</TileMatrix><MinTileRow>1</MinTileRow><MaxTileRow>4</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>7</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>4</TileMatrix><MinTileRow>3</MinTileRow><MaxTileRow>9</MaxTileRow><MinTileCol>1</MinTileCol><MaxTileCol>15</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>5</TileMatrix><MinTileRow>6</MinTileRow><MaxTileRow>18</MaxTileRow><MinTileCol>2</MinTileCol><MaxTileCol>31</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>6</TileMatrix><MinTileRow>13</MinTileRow><MaxTileRow>36</MaxTileRow><MinTileCol>5</MinTileCol><MaxTileCol>63</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>7</TileMatrix><MinTileRow>26</MinTileRow><MaxTileRow>73</MaxTileRow><MinTileCol>10</MinTileCol><MaxTileCol>126</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>8</TileMatrix><MinTileRow>53</MinTileRow><MaxTileRow>146</MaxTileRow><MinTileCol>21</MinTileCol><MaxTileCol>252</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>9</TileMatrix><MinTileRow>107</MinTileRow><MaxTileRow>292</MaxTileRow><MinTileCol>42</MinTileCol><MaxTileCol>505</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>10</TileMatrix><MinTileRow>214</MinTileRow><MaxTileRow>585</MaxTileRow><MinTileCol>85</MinTileCol><MaxTileCol>1011</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>11</TileMatrix><MinTileRow>429</MinTileRow><MaxTileRow>1171</MaxTileRow><MinTileCol>171</MinTileCol><MaxTileCol>2023</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>12</TileMatrix><MinTileRow>859</MinTileRow><MaxTileRow>2343</MaxTileRow><MinTileCol>343</MinTileCol><MaxTileCol>4046</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>13</TileMatrix><MinTileRow>1718</MinTileRow><MaxTileRow>4687</MaxTileRow><MinTileCol>687</MinTileCol><MaxTileCol>8093</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>14</TileMatrix><MinTileRow>3436</MinTileRow><MaxTileRow>9375</MaxTileRow><MinTileCol>1374</MinTileCol><MaxTileCol>16187</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>15</TileMatrix><MinTileRow>6873</MinTileRow><MaxTileRow>18751</MaxTileRow><MinTileCol>2748</MinTileCol><MaxTileCol>32375</MaxTileCol></TileMatrixLimits></TileMatrixSetLimits></TileMatrixSetLink></Layer>
    <Layer>
      <ows:Title>GRB-basiskaart selectie</ows:Title>
      <ows:Abstract>Deze laag toont alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart, met uitzondering van gebouwen, gebouwaanhorigheden, percelen, perceelsgrenzen en terreinen.</ows:Abstract>
      <ows:Keywords>
        <ows:Keyword>actualisatie</ows:Keyword>
        <ows:Keyword>administratieve grens</ows:Keyword>
        <ows:Keyword>adres</ows:Keyword>
        <ows:Keyword>afdak</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>afrit</ows:Keyword>
        <ows:Keyword>anomalie</ows:Keyword>
        <ows:Keyword>as built</ows:Keyword>
        <ows:Keyword>atlas</ows:Keyword>
        <ows:Keyword>autosnelweg</ows:Keyword>
        <ows:Keyword>baangracht</ows:Keyword>
        <ows:Keyword>basiskaart</ows:Keyword>
        <ows:Keyword>beek</ows:Keyword>
        <ows:Keyword>bergplaats</ows:Keyword>
        <ows:Keyword>berm</ows:Keyword>
        <ows:Keyword>bevaarbaar</ows:Keyword>
        <ows:Keyword>boordsteen</ows:Keyword>
        <ows:Keyword>bouwsel</ows:Keyword>
        <ows:Keyword>brandkraan</ows:Keyword>
        <ows:Keyword>brug</ows:Keyword>
        <ows:Keyword>bushok</ows:Keyword>
        <ows:Keyword>cabine</ows:Keyword>
        <ows:Keyword>chemisch</ows:Keyword>
        <ows:Keyword>circulatiezone</ows:Keyword>
        <ows:Keyword>constructie</ows:Keyword>
        <ows:Keyword>corridor</ows:Keyword>
        <ows:Keyword>CRAB</ows:Keyword>
        <ows:Keyword>deksel</ows:Keyword>
        <ows:Keyword>dienstweg</ows:Keyword>
        <ows:Keyword>drempel</ows:Keyword>
        <ows:Keyword>elektriciteitspaal</ows:Keyword>
        <ows:Keyword>fietsstalling</ows:Keyword>
        <ows:Keyword>fietsweg</ows:Keyword>
        <ows:Keyword>FLEPOS</ows:Keyword>
        <ows:Keyword>flitspaal</ows:Keyword>
        <ows:Keyword>fontein</ows:Keyword>
        <ows:Keyword>fout</ows:Keyword>
        <ows:Keyword>garagetoegang</ows:Keyword>
        <ows:Keyword>GDF</ows:Keyword>
        <ows:Keyword>gebouw</ows:Keyword>
        <ows:Keyword>gemeentegrens</ows:Keyword>
        <ows:Keyword>gemeenteterritorium</ows:Keyword>
        <ows:Keyword>gevel</ows:Keyword>
        <ows:Keyword>gevellijn</ows:Keyword>
        <ows:Keyword>gevelpunt</ows:Keyword>
        <ows:Keyword>golfbreker</ows:Keyword>
        <ows:Keyword>gracht</ows:Keyword>
        <ows:Keyword>GRB gis</ows:Keyword>
        <ows:Keyword>GRB</ows:Keyword>
        <ows:Keyword>GRB-databank</ows:Keyword>
        <ows:Keyword>GRB-gis</ows:Keyword>
        <ows:Keyword>grenspaal</ows:Keyword>
        <ows:Keyword>grootschalig</ows:Keyword>
        <ows:Keyword>havendam</ows:Keyword>
        <ows:Keyword>huisnummer</ows:Keyword>
        <ows:Keyword>hydrografisch</ows:Keyword>
        <ows:Keyword>informatiesysteem</ows:Keyword>
        <ows:Keyword>inrit</ows:Keyword>
        <ows:Keyword>installatie</ows:Keyword>
        <ows:Keyword>kadaster</ows:Keyword>
        <ows:Keyword>kadastergrootschalig</ows:Keyword>
        <ows:Keyword>kadastraal</ows:Keyword>
        <ows:Keyword>kantsteen</ows:Keyword>
        <ows:Keyword>keermuur</ows:Keyword>
        <ows:Keyword>koeltoren</ows:Keyword>
        <ows:Keyword>kopmuur</ows:Keyword>
        <ows:Keyword>kunstwerk</ows:Keyword>
        <ows:Keyword>lokaal</ows:Keyword>
        <ows:Keyword>longitudinaal</ows:Keyword>
        <ows:Keyword>loopbrug</ows:Keyword>
        <ows:Keyword>luik</ows:Keyword>
        <ows:Keyword>mast</ows:Keyword>
        <ows:Keyword>meer</ows:Keyword>
        <ows:Keyword>meerpaal</ows:Keyword>
        <ows:Keyword>metro</ows:Keyword>
        <ows:Keyword>monument</ows:Keyword>
        <ows:Keyword>mutatie</ows:Keyword>
        <ows:Keyword>muur</ows:Keyword>
        <ows:Keyword>NIS</ows:Keyword>
        <ows:Keyword>nisocde</ows:Keyword>
        <ows:Keyword>nummer</ows:Keyword>
        <ows:Keyword>onbevaarbaar</ows:Keyword>
        <ows:Keyword>onderdak</ows:Keyword>
        <ows:Keyword>onderkeldering</ows:Keyword>
        <ows:Keyword>onverharde zone</ows:Keyword>
        <ows:Keyword>onvolledigheid</ows:Keyword>
        <ows:Keyword>oppervaktewater</ows:Keyword>
        <ows:Keyword>oprit</ows:Keyword>
        <ows:Keyword>opslagtank</ows:Keyword>
        <ows:Keyword>overbrugging</ows:Keyword>
        <ows:Keyword>paal bovenleiding telefoonpaal</ows:Keyword>
        <ows:Keyword>paal</ows:Keyword>
        <ows:Keyword>parallelweg</ows:Keyword>
        <ows:Keyword>perceel</ows:Keyword>
        <ows:Keyword>pijler</ows:Keyword>
        <ows:Keyword>planimetrisch</ows:Keyword>
        <ows:Keyword>praatpaal</ows:Keyword>
        <ows:Keyword>putdeksel</ows:Keyword>
        <ows:Keyword>rail</ows:Keyword>
        <ows:Keyword>referentiebestand</ows:Keyword>
        <ows:Keyword>rijbaan</ows:Keyword>
        <ows:Keyword>rijstrook</ows:Keyword>
        <ows:Keyword>rivier</ows:Keyword>
        <ows:Keyword>rooster</ows:Keyword>
        <ows:Keyword>rotonde</ows:Keyword>
        <ows:Keyword>schoorsteen</ows:Keyword>
        <ows:Keyword>silo</ows:Keyword>
        <ows:Keyword>sloot</ows:Keyword>
        <ows:Keyword>spoor</ows:Keyword>
        <ows:Keyword>spoorbaan</ows:Keyword>
        <ows:Keyword>spoorrail</ows:Keyword>
        <ows:Keyword>spoorstaaf</ows:Keyword>
        <ows:Keyword>staketsel</ows:Keyword>
        <ows:Keyword>standbeeld</ows:Keyword>
        <ows:Keyword>stootband</ows:Keyword>
        <ows:Keyword>straat</ows:Keyword>
        <ows:Keyword>straatnaam</ows:Keyword>
        <ows:Keyword>strandhoofd</ows:Keyword>
        <ows:Keyword>surplusgebied</ows:Keyword>
        <ows:Keyword>telefooncabine</ows:Keyword>
        <ows:Keyword>terrein</ows:Keyword>
        <ows:Keyword>territorium</ows:Keyword>
        <ows:Keyword>toegang</ows:Keyword>
        <ows:Keyword>tram</ows:Keyword>
        <ows:Keyword>tramrail</ows:Keyword>
        <ows:Keyword>tramweg</ows:Keyword>
        <ows:Keyword>transport</ows:Keyword>
        <ows:Keyword>trap</ows:Keyword>
        <ows:Keyword>trein</ows:Keyword>
        <ows:Keyword>tunnelmond</ows:Keyword>
        <ows:Keyword>uitrit</ows:Keyword>
        <ows:Keyword>vangrail</ows:Keyword>
        <ows:Keyword>ventweg</ows:Keyword>
        <ows:Keyword>verbinding</ows:Keyword>
        <ows:Keyword>verdieping</ows:Keyword>
        <ows:Keyword>verharding</ows:Keyword>
        <ows:Keyword>verhoging</ows:Keyword>
        <ows:Keyword>verkeer</ows:Keyword>
        <ows:Keyword>verkeersdrempel</ows:Keyword>
        <ows:Keyword>verkeerslicht</ows:Keyword>
        <ows:Keyword>verkeersplateau</ows:Keyword>
        <ows:Keyword>verkeersplein</ows:Keyword>
        <ows:Keyword>verlaging</ows:Keyword>
        <ows:Keyword>verlichtingspaal</ows:Keyword>
        <ows:Keyword>VHA</ows:Keyword>
        <ows:Keyword>vijver</ows:Keyword>
        <ows:Keyword>VMM</ows:Keyword>
        <ows:Keyword>voetpad</ows:Keyword>
        <ows:Keyword>wandelweg</ows:Keyword>
        <ows:Keyword>water</ows:Keyword>
        <ows:Keyword>watergang</ows:Keyword>
        <ows:Keyword>waterloop</ows:Keyword>
        <ows:Keyword>waterloopsegment</ows:Keyword>
        <ows:Keyword>wateroppervlak</ows:Keyword>
        <ows:Keyword>watertoren</ows:Keyword>
        <ows:Keyword>waterweg</ows:Keyword>
        <ows:Keyword>weg</ows:Keyword>
        <ows:Keyword>wegaanhorigheid</ows:Keyword>
        <ows:Keyword>wegbaan</ows:Keyword>
        <ows:Keyword>weggebruiker</ows:Keyword>
        <ows:Keyword>weginrichting</ows:Keyword>
        <ows:Keyword>wegknoop</ows:Keyword>
        <ows:Keyword>wegsegment</ows:Keyword>
      </ows:Keywords>
      <ows:Identifier>grb_sel</ows:Identifier>
      <ows:WGS84BoundingBox>
        <ows:LowerCorner>2.530000 50.685000</ows:LowerCorner>
        <ows:UpperCorner>5.920000 51.520000</ows:UpperCorner>
      </ows:WGS84BoundingBox>
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/csw?request=GetRecordById&amp;service=CSW&amp;constraintLanguage=CQL_TEXT&amp;version=2.0.2&amp;resultType=results&amp;ElementSetName=full&amp;typenames=csw:Record&amp;id=7C823055-7BBF-4D62-B55E-F85C30D53162&amp;OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd" />
      <ows:Metadata xlink:type="simple" xlink:href="https://metadata.vlaanderen.be/srv/dut/catalog.search#/metadata/7C823055-7BBF-4D62-B55E-F85C30D53162" />
      <ows:DatasetDescriptionSummary>
        <ows:Identifier>E2707D13-B366-4D25-A286-E1B1330CADF7</ows:Identifier>
      </ows:DatasetDescriptionSummary>
      <Style isDefault="true">
        <ows:Title>GRB-Selectie</ows:Title>
        <ows:Identifier />
      </Style>
      <Format>image/png</Format>
      <TileMatrixSetLink>
        <TileMatrixSet>GoogleMapsVL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>10</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>21</MinTileRow>
            <MaxTileRow>21</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>42</MinTileRow>
            <MaxTileRow>43</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>85</MinTileRow>
            <MaxTileRow>86</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>170</MinTileRow>
            <MaxTileRow>172</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>340</MinTileRow>
            <MaxTileRow>344</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>680</MinTileRow>
            <MaxTileRow>688</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1361</MinTileRow>
            <MaxTileRow>1377</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2723</MinTileRow>
            <MaxTileRow>2755</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5447</MinTileRow>
            <MaxTileRow>5510</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10895</MinTileRow>
            <MaxTileRow>11020</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>21790</MinTileRow>
            <MaxTileRow>22041</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>43580</MinTileRow>
            <MaxTileRow>44083</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>87161</MinTileRow>
            <MaxTileRow>88167</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>174322</MinTileRow>
            <MaxTileRow>176334</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>348645</MinTileRow>
            <MaxTileRow>352669</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>697290</MinTileRow>
            <MaxTileRow>705338</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>WGS84VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>2</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>4</MinTileCol>
            <MaxTileCol>4</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>8</MinTileCol>
            <MaxTileCol>8</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>3</MinTileRow>
            <MaxTileRow>3</MaxTileRow>
            <MinTileCol>16</MinTileCol>
            <MaxTileCol>16</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>6</MinTileRow>
            <MaxTileRow>6</MaxTileRow>
            <MinTileCol>32</MinTileCol>
            <MaxTileCol>33</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>13</MinTileRow>
            <MaxTileRow>13</MaxTileRow>
            <MinTileCol>64</MinTileCol>
            <MaxTileCol>66</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>27</MinTileRow>
            <MaxTileRow>27</MaxTileRow>
            <MinTileCol>129</MinTileCol>
            <MaxTileCol>132</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>54</MinTileRow>
            <MaxTileRow>55</MaxTileRow>
            <MinTileCol>259</MinTileCol>
            <MaxTileCol>264</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>109</MinTileRow>
            <MaxTileRow>111</MaxTileRow>
            <MinTileCol>519</MinTileCol>
            <MaxTileCol>528</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>218</MinTileRow>
            <MaxTileRow>223</MaxTileRow>
            <MinTileCol>1038</MinTileCol>
            <MaxTileCol>1057</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>437</MinTileRow>
            <MaxTileRow>447</MaxTileRow>
            <MinTileCol>2076</MinTileCol>
            <MaxTileCol>2115</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>875</MinTileRow>
            <MaxTileRow>895</MaxTileRow>
            <MinTileCol>4153</MinTileCol>
            <MaxTileCol>4231</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>1751</MinTileRow>
            <MaxTileRow>1791</MaxTileRow>
            <MinTileCol>8306</MinTileCol>
            <MaxTileCol>8462</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>3503</MinTileRow>
            <MaxTileRow>3582</MaxTileRow>
            <MinTileCol>16613</MinTileCol>
            <MaxTileCol>16924</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>16</TileMatrix>
            <MinTileRow>7006</MinTileRow>
            <MaxTileRow>7164</MaxTileRow>
            <MinTileCol>33227</MinTileCol>
            <MaxTileCol>33849</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>17</TileMatrix>
            <MinTileRow>14012</MinTileRow>
            <MaxTileRow>14328</MaxTileRow>
            <MinTileCol>66455</MinTileCol>
            <MaxTileCol>67698</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>18</TileMatrix>
            <MinTileRow>28024</MinTileRow>
            <MaxTileRow>28656</MaxTileRow>
            <MinTileCol>132910</MinTileCol>
            <MaxTileCol>135396</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>19</TileMatrix>
            <MinTileRow>56048</MinTileRow>
            <MaxTileRow>57312</MaxTileRow>
            <MinTileCol>265821</MinTileCol>
            <MaxTileCol>270792</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>20</TileMatrix>
            <MinTileRow>112097</MinTileRow>
            <MaxTileRow>114625</MaxTileRow>
            <MinTileCol>531643</MinTileCol>
            <MaxTileCol>541585</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>21</TileMatrix>
            <MinTileRow>224194</MinTileRow>
            <MaxTileRow>229250</MaxTileRow>
            <MinTileCol>1063287</MinTileCol>
            <MaxTileCol>1083170</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>22</TileMatrix>
            <MinTileRow>448388</MinTileRow>
            <MaxTileRow>458500</MaxTileRow>
            <MinTileCol>2126575</MinTileCol>
            <MaxTileCol>2166341</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
      <TileMatrixSetLink>
        <TileMatrixSet>BPL72VL</TileMatrixSet>
        <TileMatrixSetLimits>
          <TileMatrixLimits>
            <TileMatrix>0</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>0</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>0</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>1</TileMatrix>
            <MinTileRow>0</MinTileRow>
            <MaxTileRow>1</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>1</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>2</TileMatrix>
            <MinTileRow>1</MinTileRow>
            <MaxTileRow>2</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>3</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>3</TileMatrix>
            <MinTileRow>2</MinTileRow>
            <MaxTileRow>5</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>7</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>4</TileMatrix>
            <MinTileRow>5</MinTileRow>
            <MaxTileRow>11</MaxTileRow>
            <MinTileCol>0</MinTileCol>
            <MaxTileCol>15</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>5</TileMatrix>
            <MinTileRow>10</MinTileRow>
            <MaxTileRow>22</MaxTileRow>
            <MinTileCol>1</MinTileCol>
            <MaxTileCol>30</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>6</TileMatrix>
            <MinTileRow>20</MinTileRow>
            <MaxTileRow>44</MaxTileRow>
            <MinTileCol>2</MinTileCol>
            <MaxTileCol>60</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>7</TileMatrix>
            <MinTileRow>41</MinTileRow>
            <MaxTileRow>88</MaxTileRow>
            <MinTileCol>5</MinTileCol>
            <MaxTileCol>121</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>8</TileMatrix>
            <MinTileRow>82</MinTileRow>
            <MaxTileRow>176</MaxTileRow>
            <MinTileCol>11</MinTileCol>
            <MaxTileCol>243</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>9</TileMatrix>
            <MinTileRow>164</MinTileRow>
            <MaxTileRow>352</MaxTileRow>
            <MinTileCol>23</MinTileCol>
            <MaxTileCol>486</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>10</TileMatrix>
            <MinTileRow>328</MinTileRow>
            <MaxTileRow>705</MaxTileRow>
            <MinTileCol>47</MinTileCol>
            <MaxTileCol>972</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>11</TileMatrix>
            <MinTileRow>656</MinTileRow>
            <MaxTileRow>1411</MaxTileRow>
            <MinTileCol>94</MinTileCol>
            <MaxTileCol>1945</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>12</TileMatrix>
            <MinTileRow>1313</MinTileRow>
            <MaxTileRow>2822</MaxTileRow>
            <MinTileCol>188</MinTileCol>
            <MaxTileCol>3891</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>13</TileMatrix>
            <MinTileRow>2627</MinTileRow>
            <MaxTileRow>5644</MaxTileRow>
            <MinTileCol>377</MinTileCol>
            <MaxTileCol>7783</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>14</TileMatrix>
            <MinTileRow>5254</MinTileRow>
            <MaxTileRow>11289</MaxTileRow>
            <MinTileCol>754</MinTileCol>
            <MaxTileCol>15566</MaxTileCol>
          </TileMatrixLimits>
          <TileMatrixLimits>
            <TileMatrix>15</TileMatrix>
            <MinTileRow>10509</MinTileRow>
            <MaxTileRow>22578</MaxTileRow>
            <MinTileCol>1509</MinTileCol>
            <MaxTileCol>31133</MaxTileCol>
          </TileMatrixLimits>
        </TileMatrixSetLimits>
      </TileMatrixSetLink>
    <TileMatrixSetLink><TileMatrixSet>BPL2008VL</TileMatrixSet><TileMatrixSetLimits><TileMatrixLimits><TileMatrix>0</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>0</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>0</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>1</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>1</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>1</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>2</TileMatrix><MinTileRow>0</MinTileRow><MaxTileRow>2</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>3</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>3</TileMatrix><MinTileRow>1</MinTileRow><MaxTileRow>4</MaxTileRow><MinTileCol>0</MinTileCol><MaxTileCol>7</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>4</TileMatrix><MinTileRow>3</MinTileRow><MaxTileRow>9</MaxTileRow><MinTileCol>1</MinTileCol><MaxTileCol>15</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>5</TileMatrix><MinTileRow>6</MinTileRow><MaxTileRow>18</MaxTileRow><MinTileCol>2</MinTileCol><MaxTileCol>31</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>6</TileMatrix><MinTileRow>13</MinTileRow><MaxTileRow>36</MaxTileRow><MinTileCol>5</MinTileCol><MaxTileCol>63</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>7</TileMatrix><MinTileRow>26</MinTileRow><MaxTileRow>73</MaxTileRow><MinTileCol>10</MinTileCol><MaxTileCol>126</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>8</TileMatrix><MinTileRow>53</MinTileRow><MaxTileRow>146</MaxTileRow><MinTileCol>21</MinTileCol><MaxTileCol>252</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>9</TileMatrix><MinTileRow>107</MinTileRow><MaxTileRow>292</MaxTileRow><MinTileCol>42</MinTileCol><MaxTileCol>505</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>10</TileMatrix><MinTileRow>214</MinTileRow><MaxTileRow>585</MaxTileRow><MinTileCol>85</MinTileCol><MaxTileCol>1011</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>11</TileMatrix><MinTileRow>429</MinTileRow><MaxTileRow>1171</MaxTileRow><MinTileCol>171</MinTileCol><MaxTileCol>2023</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>12</TileMatrix><MinTileRow>859</MinTileRow><MaxTileRow>2343</MaxTileRow><MinTileCol>343</MinTileCol><MaxTileCol>4046</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>13</TileMatrix><MinTileRow>1718</MinTileRow><MaxTileRow>4687</MaxTileRow><MinTileCol>687</MinTileCol><MaxTileCol>8093</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>14</TileMatrix><MinTileRow>3436</MinTileRow><MaxTileRow>9375</MaxTileRow><MinTileCol>1374</MinTileCol><MaxTileCol>16187</MaxTileCol></TileMatrixLimits><TileMatrixLimits><TileMatrix>15</TileMatrix><MinTileRow>6873</MinTileRow><MaxTileRow>18751</MaxTileRow><MinTileCol>2748</MinTileCol><MaxTileCol>32375</MaxTileCol></TileMatrixLimits></TileMatrixSetLimits></TileMatrixSetLink></Layer>
    <TileMatrixSet>
      <ows:Identifier>GoogleMapsVL</ows:Identifier>
      <ows:BoundingBox crs="EPSG:3857">
        <ows:LowerCorner>-20037508.342789 -20037508.342789</ows:LowerCorner>
        <ows:UpperCorner>20037508.342789 20037508.342789</ows:UpperCorner>
      </ows:BoundingBox>
      <ows:SupportedCRS>EPSG:3857</ows:SupportedCRS>
      <WellKnownScaleSet>urn:ogc:def:wkss:OGC:1.0:GoogleMapsCompatible</WellKnownScaleSet>
      <TileMatrix>
        <ows:Identifier>0</ows:Identifier>
        <ScaleDenominator>559082264.02871787548065185547</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1</MatrixWidth>
        <MatrixHeight>1</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>1</ows:Identifier>
        <ScaleDenominator>279541132.01435887813568115234</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2</MatrixWidth>
        <MatrixHeight>2</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>2</ows:Identifier>
        <ScaleDenominator>139770566.00717940926551818848</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4</MatrixWidth>
        <MatrixHeight>4</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>3</ows:Identifier>
        <ScaleDenominator>69885283.00358971953392028809</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8</MatrixWidth>
        <MatrixHeight>8</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>4</ows:Identifier>
        <ScaleDenominator>34942641.50179485976696014404</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16</MatrixWidth>
        <MatrixHeight>16</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>5</ows:Identifier>
        <ScaleDenominator>17471320.75089742988348007202</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32</MatrixWidth>
        <MatrixHeight>32</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>6</ows:Identifier>
        <ScaleDenominator>8735660.37544871494174003601</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>64</MatrixWidth>
        <MatrixHeight>64</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>7</ows:Identifier>
        <ScaleDenominator>4367830.18772435747087001801</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>128</MatrixWidth>
        <MatrixHeight>128</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>8</ows:Identifier>
        <ScaleDenominator>2183915.09386217873543500900</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>256</MatrixWidth>
        <MatrixHeight>256</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>9</ows:Identifier>
        <ScaleDenominator>1091957.54693108866922557354</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>512</MatrixWidth>
        <MatrixHeight>512</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>10</ows:Identifier>
        <ScaleDenominator>545978.77346554468385875225</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1024</MatrixWidth>
        <MatrixHeight>1024</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>11</ows:Identifier>
        <ScaleDenominator>272989.38673277228372171521</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2048</MatrixWidth>
        <MatrixHeight>2048</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>12</ows:Identifier>
        <ScaleDenominator>136494.69336638617096468806</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4096</MatrixWidth>
        <MatrixHeight>4096</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>13</ows:Identifier>
        <ScaleDenominator>68247.34668319307093042880</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8192</MatrixWidth>
        <MatrixHeight>8192</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>14</ows:Identifier>
        <ScaleDenominator>34123.67334159654274117202</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16384</MatrixWidth>
        <MatrixHeight>16384</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>15</ows:Identifier>
        <ScaleDenominator>17061.83667079827137058601</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32768</MatrixWidth>
        <MatrixHeight>32768</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>16</ows:Identifier>
        <ScaleDenominator>8530.91833539913568529300</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>65536</MatrixWidth>
        <MatrixHeight>65536</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>17</ows:Identifier>
        <ScaleDenominator>4265.45916769956784264650</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>131072</MatrixWidth>
        <MatrixHeight>131072</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>18</ows:Identifier>
        <ScaleDenominator>2132.72958384978392132325</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>262144</MatrixWidth>
        <MatrixHeight>262144</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>19</ows:Identifier>
        <ScaleDenominator>1066.36479192489309753000</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>524288</MatrixWidth>
        <MatrixHeight>524288</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>20</ows:Identifier>
        <ScaleDenominator>533.18239596244654876500</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1048576</MatrixWidth>
        <MatrixHeight>1048576</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>21</ows:Identifier>
        <ScaleDenominator>266.59119798122287647857</ScaleDenominator>
        <TopLeftCorner>-20037508.342789 20037508.342789</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2097152</MatrixWidth>
        <MatrixHeight>2097152</MatrixHeight>
      </TileMatrix>
    </TileMatrixSet>
    <TileMatrixSet>
      <ows:Identifier>BPL72VL</ows:Identifier>
      <ows:BoundingBox crs="urn:ogc:def:crs:EPSG:6.3:31370">
        <ows:LowerCorner>9928.000000 66928.000000</ows:LowerCorner>
        <ows:UpperCorner>272072.000000 329072.000000</ows:UpperCorner>
      </ows:BoundingBox>
      <ows:SupportedCRS>EPSG:31370</ows:SupportedCRS>
      <TileMatrix>
        <ows:Identifier>0</ows:Identifier>
        <ScaleDenominator>3657142.85714285727590322495</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1</MatrixWidth>
        <MatrixHeight>1</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>1</ows:Identifier>
        <ScaleDenominator>1828571.42857142863795161247</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2</MatrixWidth>
        <MatrixHeight>2</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>2</ows:Identifier>
        <ScaleDenominator>914285.71428571431897580624</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4</MatrixWidth>
        <MatrixHeight>4</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>3</ows:Identifier>
        <ScaleDenominator>457142.85714285715948790312</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8</MatrixWidth>
        <MatrixHeight>8</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>4</ows:Identifier>
        <ScaleDenominator>228571.42857142857974395156</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16</MatrixWidth>
        <MatrixHeight>16</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>5</ows:Identifier>
        <ScaleDenominator>114285.71428571428987197578</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32</MatrixWidth>
        <MatrixHeight>32</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>6</ows:Identifier>
        <ScaleDenominator>57142.85714285714493598789</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>64</MatrixWidth>
        <MatrixHeight>64</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>7</ows:Identifier>
        <ScaleDenominator>28571.42857142857246799394</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>128</MatrixWidth>
        <MatrixHeight>128</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>8</ows:Identifier>
        <ScaleDenominator>14285.71428571428623399697</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>256</MatrixWidth>
        <MatrixHeight>256</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>9</ows:Identifier>
        <ScaleDenominator>7142.85714285714311699849</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>512</MatrixWidth>
        <MatrixHeight>512</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>10</ows:Identifier>
        <ScaleDenominator>3571.42857142857155849924</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1024</MatrixWidth>
        <MatrixHeight>1024</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>11</ows:Identifier>
        <ScaleDenominator>1785.71428571428577924962</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2048</MatrixWidth>
        <MatrixHeight>2048</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>12</ows:Identifier>
        <ScaleDenominator>892.85714285714288962481</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4096</MatrixWidth>
        <MatrixHeight>4096</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>13</ows:Identifier>
        <ScaleDenominator>446.42857142857144481241</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8192</MatrixWidth>
        <MatrixHeight>8192</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>14</ows:Identifier>
        <ScaleDenominator>223.21428571428572240620</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16384</MatrixWidth>
        <MatrixHeight>16384</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>15</ows:Identifier>
        <ScaleDenominator>111.60714285714286120310</ScaleDenominator>
        <TopLeftCorner>9928.000000 329072.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32768</MatrixWidth>
        <MatrixHeight>32768</MatrixHeight>
      </TileMatrix>
    </TileMatrixSet>
    <TileMatrixSet>
      <ows:Identifier>WGS84VL</ows:Identifier>
      <ows:BoundingBox crs="urn:ogc:def:crs:EPSG:6.3:4326">
        <ows:LowerCorner>-180.000000 -90.000000</ows:LowerCorner>
        <ows:UpperCorner>180.000000 90.000000</ows:UpperCorner>
      </ows:BoundingBox>
      <ows:SupportedCRS>urn:ogc:def:crs:EPSG:6.3:4326</ows:SupportedCRS>
      <TileMatrix>
        <ows:Identifier>0</ows:Identifier>
        <ScaleDenominator>559082264.02871775627136230469</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1</MatrixWidth>
        <MatrixHeight>1</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>1</ows:Identifier>
        <ScaleDenominator>279541132.01435887813568115234</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2</MatrixWidth>
        <MatrixHeight>1</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>2</ows:Identifier>
        <ScaleDenominator>139770566.00717943906784057617</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4</MatrixWidth>
        <MatrixHeight>2</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>3</ows:Identifier>
        <ScaleDenominator>69885283.00358971953392028809</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8</MatrixWidth>
        <MatrixHeight>4</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>4</ows:Identifier>
        <ScaleDenominator>34942641.50179485976696014404</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16</MatrixWidth>
        <MatrixHeight>8</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>5</ows:Identifier>
        <ScaleDenominator>17471320.75089742988348007202</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32</MatrixWidth>
        <MatrixHeight>16</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>6</ows:Identifier>
        <ScaleDenominator>8735660.37544871494174003601</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>64</MatrixWidth>
        <MatrixHeight>32</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>7</ows:Identifier>
        <ScaleDenominator>4367830.18772435747087001801</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>128</MatrixWidth>
        <MatrixHeight>64</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>8</ows:Identifier>
        <ScaleDenominator>2183915.09386217873543500900</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>256</MatrixWidth>
        <MatrixHeight>128</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>9</ows:Identifier>
        <ScaleDenominator>1091957.54693108936771750450</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>512</MatrixWidth>
        <MatrixHeight>256</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>10</ows:Identifier>
        <ScaleDenominator>545978.77346554468385875225</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1024</MatrixWidth>
        <MatrixHeight>512</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>11</ows:Identifier>
        <ScaleDenominator>272989.38673277234192937613</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2048</MatrixWidth>
        <MatrixHeight>1024</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>12</ows:Identifier>
        <ScaleDenominator>136494.69336638617096468806</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4096</MatrixWidth>
        <MatrixHeight>2048</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>13</ows:Identifier>
        <ScaleDenominator>68247.34668319308548234403</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>8192</MatrixWidth>
        <MatrixHeight>4096</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>14</ows:Identifier>
        <ScaleDenominator>34123.67334159654274117202</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>16384</MatrixWidth>
        <MatrixHeight>8192</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>15</ows:Identifier>
        <ScaleDenominator>17061.83667079825318069197</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>32768</MatrixWidth>
        <MatrixHeight>16384</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>16</ows:Identifier>
        <ScaleDenominator>8530.91833539912659034599</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>65536</MatrixWidth>
        <MatrixHeight>32768</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>17</ows:Identifier>
        <ScaleDenominator>4265.45916769956329517299</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>131072</MatrixWidth>
        <MatrixHeight>65536</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>18</ows:Identifier>
        <ScaleDenominator>2132.72958384978574031265</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>262144</MatrixWidth>
        <MatrixHeight>131072</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>19</ows:Identifier>
        <ScaleDenominator>1066.36479192489287015633</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>524288</MatrixWidth>
        <MatrixHeight>262144</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>20</ows:Identifier>
        <ScaleDenominator>533.18239596244643507816</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>1048576</MatrixWidth>
        <MatrixHeight>524288</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>21</ows:Identifier>
        <ScaleDenominator>266.59119798122321753908</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>2097152</MatrixWidth>
        <MatrixHeight>1048576</MatrixHeight>
      </TileMatrix>
      <TileMatrix>
        <ows:Identifier>22</ows:Identifier>
        <ScaleDenominator>133.29559899061140981757</ScaleDenominator>
        <TopLeftCorner>90.000000 -180.000000</TopLeftCorner>
        <TileWidth>256</TileWidth>
        <TileHeight>256</TileHeight>
        <MatrixWidth>4194304</MatrixWidth>
        <MatrixHeight>2097152</MatrixHeight>
      </TileMatrix>
    </TileMatrixSet>
  <TileMatrixSet><ows:Identifier>BPL2008VL</ows:Identifier><ows:BoundingBox crs="urn:ogc:def:crs:EPSG::3812"><ows:LowerCorner>500000.0 537856.0</ows:LowerCorner><ows:UpperCorner>762144.0 800000.0</ows:UpperCorner></ows:BoundingBox><ows:SupportedCRS>EPSG:3812</ows:SupportedCRS><TileMatrix><ows:Identifier>0</ows:Identifier><ScaleDenominator>3657142.8571428573</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>1</MatrixWidth><MatrixHeight>1</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>1</ows:Identifier><ScaleDenominator>1828571.4285714286</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>2</MatrixWidth><MatrixHeight>2</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>2</ows:Identifier><ScaleDenominator>914285.7142857143</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>4</MatrixWidth><MatrixHeight>4</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>3</ows:Identifier><ScaleDenominator>457142.85714285716</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>8</MatrixWidth><MatrixHeight>8</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>4</ows:Identifier><ScaleDenominator>228571.42857142858</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>16</MatrixWidth><MatrixHeight>16</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>5</ows:Identifier><ScaleDenominator>114285.71428571429</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>32</MatrixWidth><MatrixHeight>32</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>6</ows:Identifier><ScaleDenominator>57142.857142857145</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>64</MatrixWidth><MatrixHeight>64</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>7</ows:Identifier><ScaleDenominator>28571.428571428572</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>128</MatrixWidth><MatrixHeight>128</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>8</ows:Identifier><ScaleDenominator>14285.714285714286</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>256</MatrixWidth><MatrixHeight>256</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>9</ows:Identifier><ScaleDenominator>7142.857142857143</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>512</MatrixWidth><MatrixHeight>512</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>10</ows:Identifier><ScaleDenominator>3571.4285714285716</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>1024</MatrixWidth><MatrixHeight>1024</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>11</ows:Identifier><ScaleDenominator>1785.7142857142858</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>2048</MatrixWidth><MatrixHeight>2048</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>12</ows:Identifier><ScaleDenominator>892.8571428571429</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>4096</MatrixWidth><MatrixHeight>4096</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>13</ows:Identifier><ScaleDenominator>446.42857142857144</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>8192</MatrixWidth><MatrixHeight>8192</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>14</ows:Identifier><ScaleDenominator>223.21428571428572</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>16384</MatrixWidth><MatrixHeight>16384</MatrixHeight></TileMatrix><TileMatrix><ows:Identifier>15</ows:Identifier><ScaleDenominator>111.60714285714286</ScaleDenominator><TopLeftCorner>500000.0 800000.0</TopLeftCorner><TileWidth>256</TileWidth><TileHeight>256</TileHeight><MatrixWidth>32768</MatrixWidth><MatrixHeight>32768</MatrixHeight></TileMatrix></TileMatrixSet></Contents>
  <ServiceMetadataURL xlink:href="https://metadata.vlaanderen.be/srv/dut/catalog.search#/metadata/bb99337d-2146-413e-8c68-b9930061dc25" />
</Capabilities>
    `,Ty=new qT,Za=Ty.read(my),yy="BPL2008VL",dd=()=>Za.Contents.TileMatrixSet.find(({Identifier:i})=>i===yy),xy=()=>dd()?.BoundingBox,ud=()=>dd()?.SupportedCRS||"EPSG:3812",_y="BPL72VL",fd=()=>Za.Contents.TileMatrixSet.find(({Identifier:i})=>i===_y),py=()=>fd()?.BoundingBox,gd=()=>fd()?.SupportedCRS||"EPSG:31370",Cy=()=>Za.Contents.Layer.find(({Identifier:i})=>i==="grb_bsk"),vy=()=>Cy().WGS84BoundingBox,Ry=()=>"EPSG:4326";function by(i,e,t,n,s){wd(i,e,t||0,n||i.length-1,s||Ey)}function wd(i,e,t,n,s){for(;n>t;){if(n-t>600){var r=n-t+1,o=e-t+1,a=Math.log(r),l=.5*Math.exp(2*a/3),h=.5*Math.sqrt(a*l*(r-l)/r)*(o-r/2<0?-1:1),c=Math.max(t,Math.floor(e-o*l/r+h)),d=Math.min(n,Math.floor(e+(r-o)*l/r+h));wd(i,e,c,d,s)}var u=i[e],f=t,g=n;for(Vn(i,t,e),s(i[n],u)>0&&Vn(i,t,n);f<g;){for(Vn(i,f,g),f++,g--;s(i[f],u)<0;)f++;for(;s(i[g],u)>0;)g--}s(i[t],u)===0?Vn(i,t,g):(g++,Vn(i,g,n)),g<=e&&(t=g+1),e<=g&&(n=g-1)}}function Vn(i,e,t){var n=i[e];i[e]=i[t],i[t]=n}function Ey(i,e){return i<e?-1:i>e?1:0}let Md=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let t=this.data;const n=[];if(!ir(e,t))return n;const s=this.toBBox,r=[];for(;t;){for(let o=0;o<t.children.length;o++){const a=t.children[o],l=t.leaf?s(a):a;ir(e,l)&&(t.leaf?n.push(a):vo(e,l)?this._all(a,n):r.push(a))}t=r.pop()}return n}collides(e){let t=this.data;if(!ir(e,t))return!1;const n=[];for(;t;){for(let s=0;s<t.children.length;s++){const r=t.children[s],o=t.leaf?this.toBBox(r):r;if(ir(e,o)){if(t.leaf||vo(e,o))return!0;n.push(r)}}t=n.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let n=0;n<e.length;n++)this.insert(e[n]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=t;else if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const n=this.data;this.data=t,t=n}this._insert(t,this.data.height-t.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=rn([]),this}remove(e,t){if(!e)return this;let n=this.data;const s=this.toBBox(e),r=[],o=[];let a,l,h;for(;n||r.length;){if(n||(n=r.pop(),l=r[r.length-1],a=o.pop(),h=!0),n.leaf){const c=Ly(e,n.children,t);if(c!==-1)return n.children.splice(c,1),r.push(n),this._condense(r),this}!h&&!n.leaf&&vo(n,s)?(r.push(n),o.push(a),a=0,l=n,n=n.children[0]):l?(a++,n=l.children[a],h=!1):n=null}return this}toBBox(e){return e}compareMinX(e,t){return e.minX-t.minX}compareMinY(e,t){return e.minY-t.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){const n=[];for(;e;)e.leaf?t.push(...e.children):n.push(...e.children),e=n.pop();return t}_build(e,t,n,s){const r=n-t+1;let o=this._maxEntries,a;if(r<=o)return a=rn(e.slice(t,n+1)),$i(a,this.toBBox),a;s||(s=Math.ceil(Math.log(r)/Math.log(o)),o=Math.ceil(r/Math.pow(o,s-1))),a=rn([]),a.leaf=!1,a.height=s;const l=Math.ceil(r/o),h=l*Math.ceil(Math.sqrt(o));rh(e,t,n,h,this.compareMinX);for(let c=t;c<=n;c+=h){const d=Math.min(c+h-1,n);rh(e,c,d,l,this.compareMinY);for(let u=c;u<=d;u+=l){const f=Math.min(u+l-1,d);a.children.push(this._build(e,u,f,s-1))}}return $i(a,this.toBBox),a}_chooseSubtree(e,t,n,s){for(;s.push(t),!(t.leaf||s.length-1===n);){let r=1/0,o=1/0,a;for(let l=0;l<t.children.length;l++){const h=t.children[l],c=Co(h),d=Ky(e,h)-c;d<o?(o=d,r=c<r?c:r,a=h):d===o&&c<r&&(r=c,a=h)}t=a||t.children[0]}return t}_insert(e,t,n){const s=n?e:this.toBBox(e),r=[],o=this._chooseSubtree(s,this.data,t,r);for(o.children.push(e),Jn(o,s);t>=0&&r[t].children.length>this._maxEntries;)this._split(r,t),t--;this._adjustParentBBoxes(s,r,t)}_split(e,t){const n=e[t],s=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,s);const o=this._chooseSplitIndex(n,r,s),a=rn(n.children.splice(o,n.children.length-o));a.height=n.height,a.leaf=n.leaf,$i(n,this.toBBox),$i(a,this.toBBox),t?e[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this.data=rn([e,t]),this.data.height=e.height+1,this.data.leaf=!1,$i(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let s,r=1/0,o=1/0;for(let a=t;a<=n-t;a++){const l=$n(e,0,a,this.toBBox),h=$n(e,a,n,this.toBBox),c=Ay(l,h),d=Co(l)+Co(h);c<r?(r=c,s=a,o=d<o?d:o):c===r&&d<o&&(o=d,s=a)}return s||n-t}_chooseSplitAxis(e,t,n){const s=e.leaf?this.compareMinX:Sy,r=e.leaf?this.compareMinY:Iy,o=this._allDistMargin(e,t,n,s),a=this._allDistMargin(e,t,n,r);o<a&&e.children.sort(s)}_allDistMargin(e,t,n,s){e.children.sort(s);const r=this.toBBox,o=$n(e,0,t,r),a=$n(e,n-t,n,r);let l=tr(o)+tr(a);for(let h=t;h<n-t;h++){const c=e.children[h];Jn(o,e.leaf?r(c):c),l+=tr(o)}for(let h=n-t-1;h>=t;h--){const c=e.children[h];Jn(a,e.leaf?r(c):c),l+=tr(a)}return l}_adjustParentBBoxes(e,t,n){for(let s=n;s>=0;s--)Jn(t[s],e)}_condense(e){for(let t=e.length-1,n;t>=0;t--)e[t].children.length===0?t>0?(n=e[t-1].children,n.splice(n.indexOf(e[t]),1)):this.clear():$i(e[t],this.toBBox)}};function Ly(i,e,t){if(!t)return e.indexOf(i);for(let n=0;n<e.length;n++)if(t(i,e[n]))return n;return-1}function $i(i,e){$n(i,0,i.children.length,e,i)}function $n(i,e,t,n,s){s||(s=rn(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r=e;r<t;r++){const o=i.children[r];Jn(s,i.leaf?n(o):o)}return s}function Jn(i,e){return i.minX=Math.min(i.minX,e.minX),i.minY=Math.min(i.minY,e.minY),i.maxX=Math.max(i.maxX,e.maxX),i.maxY=Math.max(i.maxY,e.maxY),i}function Sy(i,e){return i.minX-e.minX}function Iy(i,e){return i.minY-e.minY}function Co(i){return(i.maxX-i.minX)*(i.maxY-i.minY)}function tr(i){return i.maxX-i.minX+(i.maxY-i.minY)}function Ky(i,e){return(Math.max(e.maxX,i.maxX)-Math.min(e.minX,i.minX))*(Math.max(e.maxY,i.maxY)-Math.min(e.minY,i.minY))}function Ay(i,e){const t=Math.max(i.minX,e.minX),n=Math.max(i.minY,e.minY),s=Math.min(i.maxX,e.maxX),r=Math.min(i.maxY,e.maxY);return Math.max(0,s-t)*Math.max(0,r-n)}function vo(i,e){return i.minX<=e.minX&&i.minY<=e.minY&&e.maxX<=i.maxX&&e.maxY<=i.maxY}function ir(i,e){return e.minX<=i.maxX&&e.minY<=i.maxY&&e.maxX>=i.minX&&e.maxY>=i.minY}function rn(i){return{children:i,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function rh(i,e,t,n,s){const r=[e,t];for(;r.length;){if(t=r.pop(),e=r.pop(),t-e<=n)continue;const o=e+Math.ceil((t-e)/n/2)*n;by(i,o,e,t,s),r.push(e,o,o,t)}}const H={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class Jr{constructor(e){this.opacity_=e.opacity,this.rotateWithView_=e.rotateWithView,this.rotation_=e.rotation,this.scale_=e.scale,this.scaleArray_=tt(e.scale),this.displacement_=e.displacement,this.declutterMode_=e.declutterMode}clone(){const e=this.getScale();return new Jr({opacity:this.getOpacity(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return G()}getImage(e){return G()}getHitDetectionImage(){return G()}getPixelRatio(e){return 1}getImageState(){return G()}getImageSize(){return G()}getOrigin(){return G()}getSize(){return G()}setDisplacement(e){this.displacement_=e}setOpacity(e){this.opacity_=e}setRotateWithView(e){this.rotateWithView_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=tt(e)}listenImageChange(e){G()}load(){G()}unlistenImageChange(e){G()}}function Rt(i){return Array.isArray(i)?oc(i):i}class Qr extends Jr{constructor(e){const t=e.rotateWithView!==void 0?e.rotateWithView:!1;super({opacity:1,rotateWithView:t,rotation:e.rotation!==void 0?e.rotation:0,scale:e.scale!==void 0?e.scale:1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode}),this.canvases_,this.hitDetectionCanvas_=null,this.fill_=e.fill!==void 0?e.fill:null,this.origin_=[0,0],this.points_=e.points,this.radius_=e.radius!==void 0?e.radius:e.radius1,this.radius2_=e.radius2,this.angle_=e.angle!==void 0?e.angle:0,this.stroke_=e.stroke!==void 0?e.stroke:null,this.size_,this.renderOptions_,this.render()}clone(){const e=this.getScale(),t=new Qr({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return t.setOpacity(this.getOpacity()),t}getAnchor(){const e=this.size_,t=this.getDisplacement(),n=this.getScaleArray();return[e[0]/2-t[0]/n[0],e[1]/2+t[1]/n[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(e){this.fill_=e,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(e){let t=this.canvases_[e];if(!t){const n=this.renderOptions_,s=Ne(n.size*e,n.size*e);this.draw_(n,s,e),t=s.canvas,this.canvases_[e]=t}return t}getPixelRatio(e){return e}getImageSize(){return this.size_}getImageState(){return H.LOADED}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius_}getRadius2(){return this.radius2_}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e,this.render()}listenImageChange(e){}load(){}unlistenImageChange(e){}calculateLineJoinSize_(e,t,n){if(t===0||this.points_===1/0||e!=="bevel"&&e!=="miter")return t;let s=this.radius_,r=this.radius2_===void 0?s:this.radius2_;if(s<r){const p=s;s=r,r=p}const o=this.radius2_===void 0?this.points_:this.points_*2,a=2*Math.PI/o,l=r*Math.sin(a),h=Math.sqrt(r*r-l*l),c=s-h,d=Math.sqrt(l*l+c*c),u=d/l;if(e==="miter"&&u<=n)return u*t;const f=t/2/u,g=t/2*(c/d),M=Math.sqrt((s+f)*(s+f)+g*g)-s;if(this.radius2_===void 0||e==="bevel")return M*2;const m=s*Math.sin(a),T=Math.sqrt(s*s-m*m),y=r-T,_=Math.sqrt(m*m+y*y)/m;if(_<=n){const p=_*t/2-r-s;return 2*Math.max(M,p)}return M*2}createRenderOptions(){let e=vn,t=Rn,n=0,s=null,r=0,o,a=0;this.stroke_&&(o=Rt(this.stroke_.getColor()??cs),a=this.stroke_.getWidth()??us,s=this.stroke_.getLineDash(),r=this.stroke_.getLineDashOffset()??0,t=this.stroke_.getLineJoin()??Rn,e=this.stroke_.getLineCap()??vn,n=this.stroke_.getMiterLimit()??hs);const l=this.calculateLineJoinSize_(t,a,n),h=Math.max(this.radius_,this.radius2_||0),c=Math.ceil(2*h+l);return{strokeStyle:o,strokeWidth:a,size:c,lineCap:e,lineDash:s,lineDashOffset:r,lineJoin:t,miterLimit:n}}render(){this.renderOptions_=this.createRenderOptions();const e=this.renderOptions_.size;this.canvases_={},this.hitDetectionCanvas_=null,this.size_=[e,e]}draw_(e,t,n){if(t.scale(n,n),t.translate(e.size/2,e.size/2),this.createPath_(t),this.fill_){let s=this.fill_.getColor();s===null&&(s=Ve),t.fillStyle=Rt(s),t.fill()}e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}createHitDetectionCanvas_(e){let t;if(this.fill_){let n=this.fill_.getColor(),s=0;typeof n=="string"&&(n=gr(n)),n===null?s=1:Array.isArray(n)&&(s=n.length===4?n[3]:1),s===0&&(t=Ne(e.size,e.size),this.drawHitDetectionCanvas_(e,t))}return t?t.canvas:this.getImage(1)}createPath_(e){let t=this.points_;const n=this.radius_;if(t===1/0)e.arc(0,0,n,0,2*Math.PI);else{const s=this.radius2_===void 0?n:this.radius2_;this.radius2_!==void 0&&(t*=2);const r=this.angle_-Math.PI/2,o=2*Math.PI/t;for(let a=0;a<t;a++){const l=r+a*o,h=a%2===0?n:s;e.lineTo(h*Math.cos(l),h*Math.sin(l))}e.closePath()}}drawHitDetectionCanvas_(e,t){t.translate(e.size/2,e.size/2),this.createPath_(t),t.fillStyle=Ve,t.fill(),e.strokeStyle&&(t.strokeStyle=e.strokeStyle,t.lineWidth=e.strokeWidth,e.lineDash&&(t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset),t.lineJoin=e.lineJoin,t.miterLimit=e.miterLimit,t.stroke())}}class Ds extends Qr{constructor(e){e=e||{radius:5},super({points:1/0,fill:e.fill,radius:e.radius,stroke:e.stroke,scale:e.scale!==void 0?e.scale:1,rotation:e.rotation!==void 0?e.rotation:0,rotateWithView:e.rotateWithView!==void 0?e.rotateWithView:!1,displacement:e.displacement!==void 0?e.displacement:[0,0],declutterMode:e.declutterMode})}clone(){const e=this.getScale(),t=new Ds({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return t.setOpacity(this.getOpacity()),t}setRadius(e){this.radius_=e,this.render()}}class Mt{constructor(e){e=e||{},this.color_=e.color!==void 0?e.color:null}clone(){const e=this.getColor();return new Mt({color:Array.isArray(e)?e.slice():e||void 0})}getColor(){return this.color_}setColor(e){this.color_=e}}class St{constructor(e){e=e||{},this.color_=e.color!==void 0?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash!==void 0?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.width_=e.width}clone(){const e=this.getColor();return new St({color:Array.isArray(e)?e.slice():e||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getWidth(){return this.width_}setColor(e){this.color_=e}setLineCap(e){this.lineCap_=e}setLineDash(e){this.lineDash_=e}setLineDashOffset(e){this.lineDashOffset_=e}setLineJoin(e){this.lineJoin_=e}setMiterLimit(e){this.miterLimit_=e}setWidth(e){this.width_=e}}class it{constructor(e){e=e||{},this.geometry_=null,this.geometryFunction_=oh,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill!==void 0?e.fill:null,this.image_=e.image!==void 0?e.image:null,this.renderer_=e.renderer!==void 0?e.renderer:null,this.hitDetectionRenderer_=e.hitDetectionRenderer!==void 0?e.hitDetectionRenderer:null,this.stroke_=e.stroke!==void 0?e.stroke:null,this.text_=e.text!==void 0?e.text:null,this.zIndex_=e.zIndex}clone(){let e=this.getGeometry();return e&&typeof e=="object"&&(e=e.clone()),new it({geometry:e??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(e){this.renderer_=e}setHitDetectionRenderer(e){this.hitDetectionRenderer_=e}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(e){this.fill_=e}getImage(){return this.image_}setImage(e){this.image_=e}getStroke(){return this.stroke_}setStroke(e){this.stroke_=e}getText(){return this.text_}setText(e){this.text_=e}getZIndex(){return this.zIndex_}setGeometry(e){typeof e=="function"?this.geometryFunction_=e:typeof e=="string"?this.geometryFunction_=function(t){return t.get(e)}:e?e!==void 0&&(this.geometryFunction_=function(){return e}):this.geometryFunction_=oh,this.geometry_=e}setZIndex(e){this.zIndex_=e}}function Py(i){let e;if(typeof i=="function")e=i;else{let t;Array.isArray(i)?t=i:(J(typeof i.getZIndex=="function","Expected an `Style` or an array of `Style`"),t=[i]),e=function(){return t}}return e}let Ro=null;function Oy(i,e){if(!Ro){const t=new Mt({color:"rgba(255,255,255,0.4)"}),n=new St({color:"#3399CC",width:1.25});Ro=[new it({image:new Ds({fill:t,stroke:n,radius:5}),fill:t,stroke:n})]}return Ro}function s1(){const i={},e=[255,255,255,1],t=[0,153,255,1],n=3;return i.Polygon=[new it({fill:new Mt({color:[255,255,255,.5]})})],i.MultiPolygon=i.Polygon,i.LineString=[new it({stroke:new St({color:e,width:n+2})}),new it({stroke:new St({color:t,width:n})})],i.MultiLineString=i.LineString,i.Circle=i.Polygon.concat(i.LineString),i.Point=[new it({image:new Ds({radius:n*2,fill:new Mt({color:t}),stroke:new St({color:e,width:n/2})}),zIndex:1/0})],i.MultiPoint=i.Point,i.GeometryCollection=i.Polygon.concat(i.LineString,i.Point),i}function oh(i){return i.getGeometry()}class md extends ps{constructor(e,t,n,s){super(),this.extent=e,this.pixelRatio_=n,this.resolution=t,this.state=typeof s=="function"?H.IDLE:s,this.image_=null,this.loader=typeof s=="function"?s:null}changed(){this.dispatchEvent(W.CHANGE)}getExtent(){return this.extent}getImage(){return this.image_}getPixelRatio(){return this.pixelRatio_}getResolution(){return this.resolution}getState(){return this.state}load(){if(this.state==H.IDLE&&this.loader){this.state=H.LOADING,this.changed();const e=this.getResolution(),t=Array.isArray(e)?e[0]:e;Jd(()=>this.loader(this.getExtent(),t,this.getPixelRatio())).then(n=>{"image"in n&&(this.image_=n.image),"extent"in n&&(this.extent=n.extent),"resolution"in n&&(this.resolution=n.resolution),"pixelRatio"in n&&(this.pixelRatio_=n.pixelRatio),(n instanceof HTMLImageElement||n instanceof ImageBitmap||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement)&&(this.image_=n),this.state=H.LOADED}).catch(n=>{this.state=H.ERROR,console.error(n)}).finally(()=>this.changed())}}setImage(e){this.image_=e}setResolution(e){this.resolution=e}}function Dy(i,e,t){const n=i;let s=!0,r=!1,o=!1;const a=[ns(n,W.LOAD,function(){o=!0,r||e()})];return n.src&&ua?(r=!0,n.decode().then(function(){s&&e()}).catch(function(l){s&&(o?e():t())})):a.push(ns(n,W.ERROR,t)),function(){s=!1,a.forEach(ce)}}function ky(i,e){return new Promise((t,n)=>{function s(){o(),t(i)}function r(){o(),n(new Error("Image load error"))}function o(){i.removeEventListener("load",s),i.removeEventListener("error",r)}i.addEventListener("load",s),i.addEventListener("error",r)})}function Td(i,e){return e&&(i.src=e),i.src&&ua?new Promise((t,n)=>i.decode().then(()=>t(i)).catch(s=>i.complete&&i.width?t(i):n(s))):ky(i)}function Fy(i,e){return e&&(i.src=e),i.src&&ua&&su?i.decode().then(()=>createImageBitmap(i)).catch(t=>{if(i.complete&&i.width)return i;throw t}):Td(i)}let Xn=null;class Ny extends ps{constructor(e,t,n,s,r){super(),this.hitDetectionImage_=null,this.image_=e,this.crossOrigin_=n,this.canvas_={},this.color_=r,this.imageState_=s===void 0?H.IDLE:s,this.size_=e&&e.width&&e.height?[e.width,e.height]:null,this.src_=t,this.tainted_}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===H.LOADED){Xn||(Xn=Ne(1,1,void 0,{willReadFrequently:!0})),Xn.drawImage(this.image_,0,0);try{Xn.getImageData(0,0,1,1),this.tainted_=!1}catch{Xn=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(W.CHANGE)}handleImageError_(){this.imageState_=H.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=H.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(e){return this.image_||this.initializeImage_(),this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_}getPixelRatio(e){return this.replaceColor_(e),this.canvas_[e]?e:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){const e=this.size_[0],t=this.size_[1],n=Ne(e,t);n.fillRect(0,0,e,t),this.hitDetectionImage_=n.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===H.IDLE){this.image_||this.initializeImage_(),this.imageState_=H.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&Td(this.image_,this.src_).then(e=>{this.image_=e,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(e){if(!this.color_||this.canvas_[e]||this.imageState_!==H.LOADED)return;const t=this.image_,n=document.createElement("canvas");n.width=Math.ceil(t.width*e),n.height=Math.ceil(t.height*e);const s=n.getContext("2d");s.scale(e,e),s.drawImage(t,0,0),s.globalCompositeOperation="multiply",s.fillStyle=sc(this.color_),s.fillRect(0,0,n.width/e,n.height/e),s.globalCompositeOperation="destination-in",s.drawImage(t,0,0),this.canvas_[e]=n}}function Gy(i,e,t,n,s){let r=e===void 0?void 0:wr.get(e,t,s);return r||(r=new Ny(i,i instanceof HTMLImageElement?i.src||void 0:e,t,n,s),wr.set(e,t,s,r)),r}function ah(i,e,t,n){return t!==void 0&&n!==void 0?[t/i,n/e]:t!==void 0?t/i:n!==void 0?n/e:1}class eo extends Jr{constructor(e){e=e||{};const t=e.opacity!==void 0?e.opacity:1,n=e.rotation!==void 0?e.rotation:0,s=e.scale!==void 0?e.scale:1,r=e.rotateWithView!==void 0?e.rotateWithView:!1;super({opacity:t,rotation:n,scale:s,displacement:e.displacement!==void 0?e.displacement:[0,0],rotateWithView:r,declutterMode:e.declutterMode}),this.anchor_=e.anchor!==void 0?e.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=e.anchorOrigin!==void 0?e.anchorOrigin:"top-left",this.anchorXUnits_=e.anchorXUnits!==void 0?e.anchorXUnits:"fraction",this.anchorYUnits_=e.anchorYUnits!==void 0?e.anchorYUnits:"fraction",this.crossOrigin_=e.crossOrigin!==void 0?e.crossOrigin:null;const o=e.img!==void 0?e.img:null;let a=e.src;J(!(a!==void 0&&o),"`image` and `src` cannot be provided at the same time"),(a===void 0||a.length===0)&&o&&(a=o.src||te(o)),J(a!==void 0&&a.length>0,"A defined and non-empty `src` or `image` must be provided"),J(!((e.width!==void 0||e.height!==void 0)&&e.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let l;if(e.src!==void 0?l=H.IDLE:o!==void 0&&(o instanceof HTMLImageElement?o.complete?l=o.src?H.LOADED:H.IDLE:l=H.LOADING:l=H.LOADED),this.color_=e.color!==void 0?gr(e.color):null,this.iconImage_=Gy(o,a,this.crossOrigin_,l,this.color_),this.offset_=e.offset!==void 0?e.offset:[0,0],this.offsetOrigin_=e.offsetOrigin!==void 0?e.offsetOrigin:"top-left",this.origin_=null,this.size_=e.size!==void 0?e.size:null,e.width!==void 0||e.height!==void 0){let h,c;if(e.size)[h,c]=e.size;else{const d=this.getImage(1);if(d.width&&d.height)h=d.width,c=d.height;else if(d instanceof HTMLImageElement){this.initialOptions_=e;const u=()=>{if(this.unlistenImageChange(u),!this.initialOptions_)return;const f=this.iconImage_.getSize();this.setScale(ah(f[0],f[1],e.width,e.height))};this.listenImageChange(u);return}}h!==void 0&&this.setScale(ah(h,c,e.width,e.height))}}clone(){let e,t,n;return this.initialOptions_?(t=this.initialOptions_.width,n=this.initialOptions_.height):(e=this.getScale(),e=Array.isArray(e)?e.slice():e),new eo({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:e,width:t,height:n,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let e=this.normalizedAnchor_;if(!e){e=this.anchor_;const s=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!s)return null;e=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(e[0]*=s[0]),this.anchorYUnits_=="fraction"&&(e[1]*=s[1])}if(this.anchorOrigin_!="top-left"){if(!s)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(e[0]=-e[0]+s[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(e[1]=-e[1]+s[1])}this.normalizedAnchor_=e}const t=this.getDisplacement(),n=this.getScaleArray();return[e[0]-t[0]/n[0],e[1]+t[1]/n[1]]}setAnchor(e){this.anchor_=e,this.normalizedAnchor_=null}getColor(){return this.color_}getImage(e){return this.iconImage_.getImage(e)}getPixelRatio(e){return this.iconImage_.getPixelRatio(e)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let e=this.offset_;if(this.offsetOrigin_!="top-left"){const t=this.getSize(),n=this.iconImage_.getSize();if(!t||!n)return null;e=e.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(e[0]=n[0]-t[0]-e[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(e[1]=n[1]-t[1]-e[1])}return this.origin_=e,this.origin_}getSrc(){return this.iconImage_.getSrc()}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){const e=this.getScaleArray();if(this.size_)return this.size_[0]*e[0];if(this.iconImage_.getImageState()==H.LOADED)return this.iconImage_.getSize()[0]*e[0]}getHeight(){const e=this.getScaleArray();if(this.size_)return this.size_[1]*e[1];if(this.iconImage_.getImageState()==H.LOADED)return this.iconImage_.getSize()[1]*e[1]}setScale(e){delete this.initialOptions_,super.setScale(e)}listenImageChange(e){this.iconImage_.addEventListener(W.CHANGE,e)}load(){this.iconImage_.load()}unlistenImageChange(e){this.iconImage_.removeEventListener(W.CHANGE,e)}}const Wy="#333";class to{constructor(e){e=e||{},this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=tt(e.scale!==void 0?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.justify_=e.justify,this.repeat_=e.repeat,this.textBaseline_=e.textBaseline,this.fill_=e.fill!==void 0?e.fill:new Mt({color:Wy}),this.maxAngle_=e.maxAngle!==void 0?e.maxAngle:Math.PI/4,this.placement_=e.placement!==void 0?e.placement:"point",this.overflow_=!!e.overflow,this.stroke_=e.stroke!==void 0?e.stroke:null,this.offsetX_=e.offsetX!==void 0?e.offsetX:0,this.offsetY_=e.offsetY!==void 0?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=e.padding===void 0?null:e.padding}clone(){const e=this.getScale();return new to({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}setOverflow(e){this.overflow_=e}setFont(e){this.font_=e}setMaxAngle(e){this.maxAngle_=e}setOffsetX(e){this.offsetX_=e}setOffsetY(e){this.offsetY_=e}setPlacement(e){this.placement_=e}setRepeat(e){this.repeat_=e}setRotateWithView(e){this.rotateWithView_=e}setFill(e){this.fill_=e}setRotation(e){this.rotation_=e}setScale(e){this.scale_=e,this.scaleArray_=tt(e!==void 0?e:1)}setStroke(e){this.stroke_=e}setText(e){this.text_=e}setTextAlign(e){this.textAlign_=e}setJustify(e){this.justify_=e}setTextBaseline(e){this.textBaseline_=e}setBackgroundFill(e){this.backgroundFill_=e}setBackgroundStroke(e){this.backgroundStroke_=e}setPadding(e){this.padding_=e}}let kn=0;const Fn=0,me=1<<kn++,P=1<<kn++,ft=1<<kn++,Ie=1<<kn++,_i=1<<kn++,He=Math.pow(2,kn)-1,yd={[me]:"boolean",[P]:"number",[ft]:"string",[Ie]:"color",[_i]:"number[]"},zy=Object.keys(yd).map(Number).sort(mi);function Ae(i){const e=[];for(const t of zy)Hy(i,t)&&e.push(yd[t]);return e.length===0?"untyped":e.length<3?e.join(" or "):e.slice(0,-1).join(", ")+", or "+e[e.length-1]}function Hy(i,e){return(i&e)===e}function It(i,e){return!!(i&e)}function io(i,e){return i===e}class di{constructor(e,t){this.type=e,this.value=t}}class By{constructor(e,t,...n){this.type=e,this.operator=t,this.args=n}}function xd(){return{variables:new Set,properties:new Set,featureId:!1,style:{}}}function jy(i){switch(i){case"string":return ft;case"color":return Ie;case"number":return P;case"boolean":return me;case"number[]":return _i;default:throw new Error(`Unrecognized type hint: ${i}`)}}function re(i,e,t){switch(typeof i){case"boolean":return new di(me,i);case"number":return new di(P,i);case"string":{let s=ft;return Zu(i)&&(s|=Ie),io(s&t,Fn)||(s&=t),new di(s,i)}}if(!Array.isArray(i))throw new Error("Expression must be an array or a primitive value");if(i.length===0)throw new Error("Empty expression");if(typeof i[0]=="string")return tx(i,e,t);for(const s of i)if(typeof s!="number")throw new Error("Expected an array of numbers");let n=_i;return(i.length===3||i.length===4)&&(n|=Ie),t&&(n&=t),new di(n,i)}const v={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette"},Vy={[v.Get]:B(([i,e])=>e!==void 0?jy(e.value):He,Y(1,2),Xy),[v.Var]:B(([i])=>i.type,Y(1,1),Uy),[v.Id]:B(P|ft,Un,Yy),[v.Concat]:B(ft,Y(2,1/0),ee(He)),[v.GeometryType]:B(ft,Un),[v.Resolution]:B(P,Un),[v.Zoom]:B(P,Un),[v.Time]:B(P,Un),[v.Any]:B(me,Y(2,1/0),ee(me)),[v.All]:B(me,Y(2,1/0),ee(me)),[v.Not]:B(me,Y(1,1),ee(me)),[v.Equal]:B(me,Y(2,2),ee(He),Li),[v.NotEqual]:B(me,Y(2,2),ee(He),Li),[v.GreaterThan]:B(me,Y(2,2),ee(He),Li),[v.GreaterThanOrEqualTo]:B(me,Y(2,2),ee(He),Li),[v.LessThan]:B(me,Y(2,2),ee(He),Li),[v.LessThanOrEqualTo]:B(me,Y(2,2),ee(He),Li),[v.Multiply]:B(i=>{let e=P|Ie;for(let t=0;t<i.length;t++)e&=i[t].type;return e},Y(2,1/0),ee(P|Ie),Li),[v.Divide]:B(P,Y(2,2),ee(P)),[v.Add]:B(P,Y(2,1/0),ee(P)),[v.Subtract]:B(P,Y(2,2),ee(P)),[v.Clamp]:B(P,Y(3,3),ee(P)),[v.Mod]:B(P,Y(2,2),ee(P)),[v.Pow]:B(P,Y(2,2),ee(P)),[v.Abs]:B(P,Y(1,1),ee(P)),[v.Floor]:B(P,Y(1,1),ee(P)),[v.Ceil]:B(P,Y(1,1),ee(P)),[v.Round]:B(P,Y(1,1),ee(P)),[v.Sin]:B(P,Y(1,1),ee(P)),[v.Cos]:B(P,Y(1,1),ee(P)),[v.Atan]:B(P,Y(1,2),ee(P)),[v.Sqrt]:B(P,Y(1,1),ee(P)),[v.Match]:B(i=>{let e=He;for(let t=2;t<i.length;t+=2)e&=i[t].type;return e&=i[i.length-1].type,e},Y(4,1/0),lh,Zy),[v.Between]:B(me,Y(3,3),ee(P)),[v.Interpolate]:B(i=>{let e=Ie|P;for(let t=3;t<i.length;t+=2)e&=i[t].type;return e},Y(6,1/0),lh,$y),[v.Case]:B(i=>{let e=He;for(let t=1;t<i.length;t+=2)e&=i[t].type;return e&=i[i.length-1].type,e},Y(3,1/0),qy,Jy),[v.In]:B(me,Y(2,2),Qy),[v.Number]:B(P,Y(1,1/0),ee(He)),[v.String]:B(ft,Y(1,1/0),ee(He)),[v.Array]:B(i=>i.length===3||i.length===4?_i|Ie:_i,Y(1,1/0),ee(P)),[v.Color]:B(Ie,Y(3,4),ee(P)),[v.Band]:B(P,Y(1,3),ee(P)),[v.Palette]:B(Ie,Y(2,2),ex)};function Xy(i,e){const t=re(i[1],e);if(!(t instanceof di))throw new Error("Expected a literal argument for get operation");if(typeof t.value!="string")throw new Error("Expected a string argument for get operation");if(e.properties.add(t.value),i.length===3){const n=re(i[2],e);return[t,n]}return[t]}function Uy(i,e,t,n){const s=i[1];if(typeof s!="string")throw new Error("Expected a string argument for var operation");if(e.variables.add(s),!("variables"in e.style)||e.style.variables[s]===void 0)return[new di(He,s)];const r=e.style.variables[s],o=re(r,e);if(o.value=s,n&&!It(n,o.type))throw new Error(`The variable ${s} has type ${Ae(o.type)} but the following type was expected: ${Ae(n)}`);return[o]}function Yy(i,e){e.featureId=!0}function Un(i,e){const t=i[0];if(i.length!==1)throw new Error(`Expected no arguments for ${t} operation`);return[]}function Y(i,e){return function(t,n){const s=t[0],r=t.length-1;if(i===e){if(r!==i){const o=i===1?"":"s";throw new Error(`Expected ${i} argument${o} for ${s}, got ${r}`)}}else if(r<i||r>e){const o=e===1/0?`${i} or more`:`${i} to ${e}`;throw new Error(`Expected ${o} arguments for ${s}, got ${r}`)}}}function ee(i){return function(e,t){const n=e[0],s=e.length-1,r=new Array(s);for(let o=0;o<s;++o){const a=re(e[o+1],t);if(!It(i,a.type)){const l=Ae(i),h=Ae(a.type);throw new Error(`Unexpected type for argument ${o} of ${n} operation, got ${l} but expected ${h}`)}a.type&=i,r[o]=a}return r}}function Li(i,e,t){const n=i[0],s=i.length-1;let r=He;for(let a=0;a<t.length;++a)r&=t[a].type;if(r===Fn)throw new Error(`No common type could be found for arguments of ${n} operation`);const o=new Array(s);for(let a=0;a<s;++a)o[a]=re(i[a+1],e,r);return o}function qy(i,e){const t=i[0],n=i.length-1;if(n%2===0)throw new Error(`An odd amount of arguments was expected for operation ${t}, got ${JSON.stringify(n)} instead`)}function lh(i,e){const t=i[0],n=i.length-1;if(n%2===1)throw new Error(`An even amount of arguments was expected for operation ${t}, got ${JSON.stringify(n)} instead`)}function Zy(i,e,t,n){const s=i.length-1;let o=re(i[1],e).type;const a=re(i[i.length-1],e);let l=n!==void 0?n&a.type:a.type;const h=new Array(s-2);for(let d=0;d<s-2;d+=2){const u=re(i[d+2],e),f=re(i[d+3],e);o&=u.type,l&=f.type,h[d]=u,h[d+1]=f}const c=ft|P|me;if(!It(c,o))throw new Error(`Expected an input of type ${Ae(c)} for the interpolate operation, got ${Ae(o)} instead`);if(io(l,Fn))throw new Error("Could not find a common output type for the following match operation: "+JSON.stringify(i));for(let d=0;d<s-2;d+=2){const u=re(i[d+2],e,o),f=re(i[d+3],e,l);h[d]=u,h[d+1]=f}return[re(i[1],e,o),...h,re(i[i.length-1],e,l)]}function $y(i,e,t,n){const s=i[1];let r;switch(s[0]){case"linear":r=1;break;case"exponential":if(r=s[1],typeof r!="number")throw new Error(`Expected a number base for exponential interpolation, got ${JSON.stringify(r)} instead`);break;default:r=null}if(!r)throw new Error(`Invalid interpolation type: ${JSON.stringify(s)}`);r=re(r,e);let o=re(i[2],e);if(!It(P,o.type))throw new Error(`Expected an input of type number for the interpolate operation, got ${Ae(o.type)} instead`);o=re(i[2],e,P);const a=new Array(i.length-3);for(let l=0;l<a.length;l+=2){let h=re(i[l+3],e);if(!It(P,h.type))throw new Error(`Expected all stop input values in the interpolate operation to be of type number, got ${Ae(h.type)} at position ${l+2} instead`);let c=re(i[l+4],e);if(!It(P|Ie,c.type))throw new Error(`Expected all stop output values in the interpolate operation to be a number or color, got ${Ae(c.type)} at position ${l+3} instead`);h=re(i[l+3],e,P),c=re(i[l+4],e,P|Ie),a[l]=h,a[l+1]=c}return[r,o,...a]}function Jy(i,e,t,n){const s=re(i[i.length-1],e);let r=n!==void 0?n&s.type:s.type;const o=new Array(i.length-1);for(let a=0;a<o.length-1;a+=2){const l=re(i[a+1],e),h=re(i[a+2],e);if(!It(me,l.type))throw new Error(`Expected all conditions in the case operation to be of type boolean, got ${Ae(l.type)} at position ${a} instead`);r&=h.type,o[a]=l,o[a+1]=h}if(io(r,Fn))throw new Error("Could not find a common output type for the following case operation: "+JSON.stringify(i));for(let a=0;a<o.length-1;a+=2)o[a+1]=re(i[a+2],e,r);return o[o.length-1]=re(i[i.length-1],e,r),o}function Qy(i,e){let t=i[2];if(!Array.isArray(t))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');if(typeof t[0]=="string"){if(t[0]!=="literal")throw new Error('For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.');if(!Array.isArray(t[1]))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');t=t[1]}let n=ft|P;const s=new Array(t.length);for(let o=0;o<s.length;o++){const a=re(t[o],e);n&=a.type,s[o]=a}if(io(n,Fn))throw new Error("Could not find a common type for the following in operation: "+JSON.stringify(i));return[re(i[1],e,n),...s]}function ex(i,e){const t=re(i[1],e,P);if(t.type!==P)throw new Error(`The first argument of palette must be an number, got ${Ae(t.type)} instead`);const n=i[2];if(!Array.isArray(n))throw new Error("The second argument of palette must be an array");const s=new Array(n.length);for(let r=0;r<s.length;r++){const o=re(n[r],e,Ie);if(!(o instanceof di))throw new Error(`The palette color at index ${r} must be a literal value`);if(!It(o.type,Ie))throw new Error(`The palette color at index ${r} should be of type color, got ${Ae(o.type)} instead`);s[r]=o}return[t,...s]}function B(i,...e){return function(t,n,s){const r=t[0];let o=[];for(let l=0;l<e.length;l++)o=e[l](t,n,o,s)||o;let a=typeof i=="function"?i(o):i;if(s!==void 0){if(!It(a,s))throw new Error(`The following expression was expected to return ${Ae(s)}, but returns ${Ae(a)} instead: ${JSON.stringify(t)}`);a&=s}if(a===Fn)throw new Error(`No matching type was found for the following expression: ${JSON.stringify(t)}`);return new By(a,r,...o)}}function tx(i,e,t){const n=i[0],s=Vy[n];if(!s)throw new Error(`Unknown operator: ${n}`);return s(i,e,t)}function _d(){return{variables:{},properties:{},resolution:NaN,featureId:null}}function vi(i,e,t){const n=re(i,t);if(!It(e,n.type)){const s=Ae(e),r=Ae(n.type);throw new Error(`Expected expression to be of type ${s}, got ${r}`)}return Yt(n)}function Yt(i,e){if(i instanceof di){if(i.type===Ie&&typeof i.value=="string"){const n=pa(i.value);return function(){return n}}return function(){return i.value}}const t=i.operator;switch(t){case v.Number:case v.String:return ix(i);case v.Get:case v.Var:return nx(i);case v.Id:return n=>n.featureId;case v.Concat:{const n=i.args.map(s=>Yt(s));return s=>"".concat(...n.map(r=>r(s).toString()))}case v.Resolution:return n=>n.resolution;case v.Any:case v.All:case v.Not:return rx(i);case v.Equal:case v.NotEqual:case v.LessThan:case v.LessThanOrEqualTo:case v.GreaterThan:case v.GreaterThanOrEqualTo:return sx(i);case v.Multiply:case v.Divide:case v.Add:case v.Subtract:case v.Clamp:case v.Mod:case v.Pow:case v.Abs:case v.Floor:case v.Ceil:case v.Round:case v.Sin:case v.Cos:case v.Atan:case v.Sqrt:return ox(i);case v.Match:return ax(i);case v.Interpolate:return lx(i);default:throw new Error(`Unsupported operator ${t}`)}}function ix(i,e){const t=i.operator,n=i.args.length,s=new Array(n);for(let r=0;r<n;++r)s[r]=Yt(i.args[r]);switch(t){case v.Number:case v.String:return r=>{for(let o=0;o<n;++o){const a=s[o](r);if(typeof a===t)return a}throw new Error(`Expected one of the values to be a ${t}`)};default:throw new Error(`Unsupported assertion operator ${t}`)}}function nx(i,e){const n=i.args[0].value;switch(i.operator){case v.Get:return s=>s.properties[n];case v.Var:return s=>s.variables[n];default:throw new Error(`Unsupported accessor operator ${i.operator}`)}}function sx(i,e){const t=i.operator,n=Yt(i.args[0]),s=Yt(i.args[1]);switch(t){case v.Equal:return r=>n(r)===s(r);case v.NotEqual:return r=>n(r)!==s(r);case v.LessThan:return r=>n(r)<s(r);case v.LessThanOrEqualTo:return r=>n(r)<=s(r);case v.GreaterThan:return r=>n(r)>s(r);case v.GreaterThanOrEqualTo:return r=>n(r)>=s(r);default:throw new Error(`Unsupported comparison operator ${t}`)}}function rx(i,e){const t=i.operator,n=i.args.length,s=new Array(n);for(let r=0;r<n;++r)s[r]=Yt(i.args[r]);switch(t){case v.Any:return r=>{for(let o=0;o<n;++o)if(s[o](r))return!0;return!1};case v.All:return r=>{for(let o=0;o<n;++o)if(!s[o](r))return!1;return!0};case v.Not:return r=>!s[0](r);default:throw new Error(`Unsupported logical operator ${t}`)}}function ox(i,e){const t=i.operator,n=i.args.length,s=new Array(n);for(let r=0;r<n;++r)s[r]=Yt(i.args[r]);switch(t){case v.Multiply:return r=>{let o=1;for(let a=0;a<n;++a)o*=s[a](r);return o};case v.Divide:return r=>s[0](r)/s[1](r);case v.Add:return r=>{let o=0;for(let a=0;a<n;++a)o+=s[a](r);return o};case v.Subtract:return r=>s[0](r)-s[1](r);case v.Clamp:return r=>{const o=s[0](r),a=s[1](r);if(o<a)return a;const l=s[2](r);return o>l?l:o};case v.Mod:return r=>s[0](r)%s[1](r);case v.Pow:return r=>Math.pow(s[0](r),s[1](r));case v.Abs:return r=>Math.abs(s[0](r));case v.Floor:return r=>Math.floor(s[0](r));case v.Ceil:return r=>Math.ceil(s[0](r));case v.Round:return r=>Math.round(s[0](r));case v.Sin:return r=>Math.sin(s[0](r));case v.Cos:return r=>Math.cos(s[0](r));case v.Atan:return n===2?r=>Math.atan2(s[0](r),s[1](r)):r=>Math.atan(s[0](r));case v.Sqrt:return r=>Math.sqrt(s[0](r));default:throw new Error(`Unsupported numeric operator ${t}`)}}function ax(i,e){const t=i.args.length,n=new Array(t);for(let s=0;s<t;++s)n[s]=Yt(i.args[s]);return s=>{const r=n[0](s);for(let o=1;o<t;o+=2)if(r===n[o](s))return n[o+1](s);return n[t-1](s)}}function lx(i,e){const t=i.args.length,n=new Array(t);for(let s=0;s<t;++s)n[s]=Yt(i.args[s]);return s=>{const r=n[0](s),o=n[1](s);let a,l;for(let h=2;h<t;h+=2){const c=n[h](s);let d=n[h+1](s);const u=Array.isArray(d);if(u&&(d=Yu(d)),c>=o)return h===2?d:u?hx(r,o,a,l,c,d):Qn(r,o,a,l,c,d);a=c,l=d}return l}}function Qn(i,e,t,n,s,r){const o=s-t;if(o===0)return n;const a=e-t,l=i===1?a/o:(Math.pow(i,a)-1)/(Math.pow(i,o)-1);return n+l*(r-n)}function hx(i,e,t,n,s,r){if(s-t===0)return n;const a=Ll(n),l=Ll(r);let h=l[2]-a[2];h>180?h-=360:h<-180&&(h+=360);const c=[Qn(i,e,t,a[0],s,l[0]),Qn(i,e,t,a[1],s,l[1]),a[2]+Qn(i,e,t,0,s,h),Qn(i,e,t,n[3],s,r[3])];return rc(qu(c))}function cx(i){return!0}function dx(i){const e=xd(),t=ux(i,e),n=_d();return function(s,r){if(n.properties=s.getPropertiesInternal(),n.resolution=r,e.featureId){const o=s.getId();o!==void 0?n.featureId=o:n.featureId=null}return t(n)}}function hh(i){const e=xd(),t=i.length,n=new Array(t);for(let o=0;o<t;++o)n[o]=ia(i[o],e);const s=_d(),r=new Array(t);return function(o,a){if(s.properties=o.getPropertiesInternal(),s.resolution=a,e.featureId){const h=o.getId();h!==void 0?s.featureId=h:s.featureId=null}let l=0;for(let h=0;h<t;++h){const c=n[h](s);c&&(r[l]=c,l+=1)}return r.length=l,r}}function ux(i,e){const t=i.length,n=new Array(t);for(let s=0;s<t;++s){const r=i[s],o="filter"in r?vi(r.filter,me,e):cx;let a;if(Array.isArray(r.style)){const l=r.style.length;a=new Array(l);for(let h=0;h<l;++h)a[h]=ia(r.style[h],e)}else a=[ia(r.style,e)];n[s]={filter:o,styles:a}}return function(s){const r=[];let o=!1;for(let a=0;a<t;++a){const l=n[a].filter;if(l(s)&&!(i[a].else&&o)){o=!0;for(const h of n[a].styles){const c=h(s);c&&r.push(c)}}}return r}}function ia(i,e){const t=Ms(i,"",e),n=ms(i,"",e),s=fx(i,e),r=gx(i,e),o=Ue(i,"z-index",e);if(!t&&!n&&!s&&!r&&!ki(i))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(i));const a=new it;return function(l){let h=!0;if(t){const c=t(l);c&&(h=!1),a.setFill(c)}if(n){const c=n(l);c&&(h=!1),a.setStroke(c)}if(s){const c=s(l);c&&(h=!1),a.setText(c)}if(r){const c=r(l);c&&(h=!1),a.setImage(c)}return o&&a.setZIndex(o(l)),h?null:a}}function Ms(i,e,t){const n=pd(i,e+"fill-color",t);if(!n)return null;const s=new Mt;return function(r){const o=n(r);return o==="none"?null:(s.setColor(o),s)}}function ms(i,e,t){const n=Ue(i,e+"stroke-width",t),s=pd(i,e+"stroke-color",t);if(!n&&!s)return null;const r=ai(i,e+"stroke-line-cap",t),o=ai(i,e+"stroke-line-join",t),a=Cd(i,e+"stroke-line-dash",t),l=Ue(i,e+"stroke-line-dash-offset",t),h=Ue(i,e+"stroke-miter-limit",t),c=new St;return function(d){if(s){const u=s(d);if(u==="none")return null;c.setColor(u)}if(n&&c.setWidth(n(d)),r){const u=r(d);if(u!=="butt"&&u!=="round"&&u!=="square")throw new Error("Expected butt, round, or square line cap");c.setLineCap(u)}if(o){const u=o(d);if(u!=="bevel"&&u!=="round"&&u!=="miter")throw new Error("Expected bevel, round, or miter line join");c.setLineJoin(u)}return a&&c.setLineDash(a(d)),l&&c.setLineDashOffset(l(d)),h&&c.setMiterLimit(h(d)),c}}function fx(i,e){const t="text-",n=ai(i,t+"value",e);if(!n)return null;const s=Ms(i,t,e),r=Ms(i,t+"background-",e),o=ms(i,t,e),a=ms(i,t+"background-",e),l=ai(i,t+"font",e),h=Ue(i,t+"max-angle",e),c=Ue(i,t+"offset-x",e),d=Ue(i,t+"offset-y",e),u=Ts(i,t+"overflow",e),f=ai(i,t+"placement",e),g=Ue(i,t+"repeat",e),w=no(i,t+"scale",e),M=Ts(i,t+"rotate-with-view",e),m=Ue(i,t+"rotation",e),T=ai(i,t+"align",e),y=ai(i,t+"justify",e),x=ai(i,t+"baseline",e),_=Cd(i,t+"padding",e),p=new to({});return function(R){if(p.setText(n(R)),s&&p.setFill(s(R)),r&&p.setBackgroundFill(r(R)),o&&p.setStroke(o(R)),a&&p.setBackgroundStroke(a(R)),l&&p.setFont(l(R)),h&&p.setMaxAngle(h(R)),c&&p.setOffsetX(c(R)),d&&p.setOffsetY(d(R)),u&&p.setOverflow(u(R)),f){const C=f(R);if(C!=="point"&&C!=="line")throw new Error("Expected point or line for text-placement");p.setPlacement(C)}if(g&&p.setRepeat(g(R)),w&&p.setScale(w(R)),M&&p.setRotateWithView(M(R)),m&&p.setRotation(m(R)),T){const C=T(R);if(C!=="left"&&C!=="center"&&C!=="right"&&C!=="end"&&C!=="start")throw new Error("Expected left, right, center, start, or end for text-align");p.setTextAlign(C)}if(y){const C=y(R);if(C!=="left"&&C!=="right"&&C!=="center")throw new Error("Expected left, right, or center for text-justify");p.setJustify(C)}if(x){const C=x(R);if(C!=="bottom"&&C!=="top"&&C!=="middle"&&C!=="alphabetic"&&C!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");p.setTextBaseline(C)}return _&&p.setPadding(_(R)),p}}function gx(i,e){return"icon-src"in i?wx(i,e):"shape-points"in i?Mx(i,e):"circle-radius"in i?mx(i,e):null}function wx(i,e){const t="icon-",n=t+"src",s=vd(i[n],n),r=Ir(i,t+"anchor",e),o=no(i,t+"scale",e),a=Ue(i,t+"opacity",e),l=Ir(i,t+"displacement",e),h=Ue(i,t+"rotation",e),c=Ts(i,t+"rotate-with-view",e),d=ch(i,t+"anchor-origin"),u=dh(i,t+"anchor-x-units"),f=dh(i,t+"anchor-y-units"),g=_x(i,t+"color"),w=yx(i,t+"cross-origin"),M=xx(i,t+"offset"),m=ch(i,t+"offset-origin"),T=fn(i,t+"width"),y=fn(i,t+"height"),x=Tx(i,t+"size"),_=$a(i,t+"declutter"),p=new eo({src:s,anchorOrigin:d,anchorXUnits:u,anchorYUnits:f,color:g,crossOrigin:w,offset:M,offsetOrigin:m,height:y,width:T,size:x,declutterMode:_});return function(R){return a&&p.setOpacity(a(R)),l&&p.setDisplacement(l(R)),h&&p.setRotation(h(R)),c&&p.setRotateWithView(c(R)),o&&p.setScale(o(R)),r&&p.setAnchor(r(R)),p}}function Mx(i,e){const t="shape-",n=t+"points",s=Rd(i[n],n),r=Ms(i,t,e),o=ms(i,t,e),a=no(i,t+"scale",e),l=Ir(i,t+"displacement",e),h=Ue(i,t+"rotation",e),c=Ts(i,t+"rotate-with-view",e),d=fn(i,t+"radius"),u=fn(i,t+"radius1"),f=fn(i,t+"radius2"),g=fn(i,t+"angle"),w=$a(i,t+"declutter-mode"),M=new Qr({points:s,radius:d,radius1:u,radius2:f,angle:g,declutterMode:w});return function(m){return r&&M.setFill(r(m)),o&&M.setStroke(o(m)),l&&M.setDisplacement(l(m)),h&&M.setRotation(h(m)),c&&M.setRotateWithView(c(m)),a&&M.setScale(a(m)),M}}function mx(i,e){const t="circle-",n=Ms(i,t,e),s=ms(i,t,e),r=Ue(i,t+"radius",e),o=no(i,t+"scale",e),a=Ir(i,t+"displacement",e),l=Ue(i,t+"rotation",e),h=Ts(i,t+"rotate-with-view",e),c=$a(i,t+"declutter-mode"),d=new Ds({radius:5,declutterMode:c});return function(u){return r&&d.setRadius(r(u)),n&&d.setFill(n(u)),s&&d.setStroke(s(u)),a&&d.setDisplacement(a(u)),l&&d.setRotation(l(u)),h&&d.setRotateWithView(h(u)),o&&d.setScale(o(u)),d}}function Ue(i,e,t){if(!(e in i))return;const n=vi(i[e],P,t);return function(s){return Rd(n(s),e)}}function ai(i,e,t){if(!(e in i))return null;const n=vi(i[e],ft,t);return function(s){return vd(n(s),e)}}function Ts(i,e,t){if(!(e in i))return null;const n=vi(i[e],me,t);return function(s){const r=n(s);if(typeof r!="boolean")throw new Error(`Expected a boolean for ${e}`);return r}}function pd(i,e,t){if(!(e in i))return null;const n=vi(i[e],Ie|ft,t);return function(s){return bd(n(s),e)}}function Cd(i,e,t){if(!(e in i))return null;const n=vi(i[e],_i,t);return function(s){return ks(n(s),e)}}function Ir(i,e,t){if(!(e in i))return null;const n=vi(i[e],_i,t);return function(s){const r=ks(n(s),e);if(r.length!==2)throw new Error(`Expected two numbers for ${e}`);return r}}function no(i,e,t){if(!(e in i))return null;const n=vi(i[e],_i|P,t);return function(s){return px(n(s),e)}}function fn(i,e){const t=i[e];if(t!==void 0){if(typeof t!="number")throw new Error(`Expected a number for ${e}`);return t}}function Tx(i,e){const t=i[e];if(t!==void 0){if(typeof t=="number")return tt(t);if(!Array.isArray(t))throw new Error(`Expected a number or size array for ${e}`);if(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number")throw new Error(`Expected a number or size array for ${e}`);return t}}function yx(i,e){const t=i[e];if(t!==void 0){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);return t}}function ch(i,e){const t=i[e];if(t!==void 0){if(t!=="bottom-left"&&t!=="bottom-right"&&t!=="top-left"&&t!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${e}`);return t}}function dh(i,e){const t=i[e];if(t!==void 0){if(t!=="pixels"&&t!=="fraction")throw new Error(`Expected pixels or fraction for ${e}`);return t}}function xx(i,e){const t=i[e];if(t!==void 0)return ks(t,e)}function $a(i,e){const t=i[e];if(t!==void 0){if(typeof t!="string")throw new Error(`Expected a string for ${e}`);if(t!=="declutter"&&t!=="obstacle"&&t!=="none")throw new Error(`Expected declutter, obstacle, or none for ${e}`);return t}}function _x(i,e){const t=i[e];if(t!==void 0)return bd(t,e)}function ks(i,e){if(!Array.isArray(i))throw new Error(`Expected an array for ${e}`);const t=i.length;for(let n=0;n<t;++n)if(typeof i[n]!="number")throw new Error(`Expected an array of numbers for ${e}`);return i}function vd(i,e){if(typeof i!="string")throw new Error(`Expected a string for ${e}`);return i}function Rd(i,e){if(typeof i!="number")throw new Error(`Expected a number for ${e}`);return i}function bd(i,e){if(typeof i=="string")return i;const t=ks(i,e),n=t.length;if(n<3||n>4)throw new Error(`Expected a color with 3 or 4 values for ${e}`);return t}function px(i,e){if(typeof i=="number")return i;const t=ks(i,e);if(t.length!==2)throw new Error(`Expected an array of two numbers for ${e}`);return t}const uh={RENDER_ORDER:"renderOrder"};class Cx extends Ur{constructor(e){e=e||{};const t=Object.assign({},e);delete t.style,delete t.renderBuffer,delete t.updateWhileAnimating,delete t.updateWhileInteracting,super(t),this.declutter_=e.declutter!==void 0?e.declutter:!1,this.renderBuffer_=e.renderBuffer!==void 0?e.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(e.style),this.updateWhileAnimating_=e.updateWhileAnimating!==void 0?e.updateWhileAnimating:!1,this.updateWhileInteracting_=e.updateWhileInteracting!==void 0?e.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(e){return super.getFeatures(e)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(uh.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(e){e.declutterTree||(e.declutterTree=new Md(9)),this.getRenderer().renderDeclutter(e)}setRenderOrder(e){this.set(uh.RENDER_ORDER,e)}setStyle(e){this.style_=vx(e),this.styleFunction_=e===null?void 0:Py(this.style_),this.changed()}}function vx(i){if(i===void 0)return Oy;if(!i)return null;if(typeof i=="function"||i instanceof it)return i;if(!Array.isArray(i))return hh([i]);if(i.length===0)return[];const e=i.length,t=i[0];if(t instanceof it){const s=new Array(e);for(let r=0;r<e;++r){const o=i[r];if(!(o instanceof it))throw new Error("Expected a list of style instances");s[r]=o}return s}if("style"in t){const s=new Array(e);for(let r=0;r<e;++r){const o=i[r];if(!("style"in o))throw new Error("Expected a list of rules with a style property");s[r]=o}return dx(s)}return hh(i)}const k={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},nr=[k.FILL],ui=[k.STROKE],Pi=[k.BEGIN_PATH],fh=[k.CLOSE_PATH];class Ed{drawCustom(e,t,n,s){}drawGeometry(e){}setStyle(e){}drawCircle(e,t){}drawFeature(e,t){}drawGeometryCollection(e,t){}drawLineString(e,t){}drawMultiLineString(e,t){}drawMultiPoint(e,t){}drawMultiPolygon(e,t){}drawPoint(e,t){}drawPolygon(e,t){}drawText(e,t){}setFillStrokeStyle(e,t){}setImageStyle(e,t){}setTextStyle(e,t){}}class Fs extends Ed{constructor(e,t,n,s){super(),this.tolerance=e,this.maxExtent=t,this.pixelRatio=s,this.maxLineWidth=0,this.resolution=n,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_=null,this.bufferedMaxExtent_=null,this.instructions=[],this.coordinates=[],this.tmpCoordinate_=[],this.hitDetectionInstructions=[],this.state={}}applyPixelRatio(e){const t=this.pixelRatio;return t==1?e:e.map(function(n){return n*t})}appendFlatPointCoordinates(e,t){const n=this.getBufferedMaxExtent(),s=this.tmpCoordinate_,r=this.coordinates;let o=r.length;for(let a=0,l=e.length;a<l;a+=t)s[0]=e[a],s[1]=e[a+1],Wr(n,s)&&(r[o++]=s[0],r[o++]=s[1]);return o}appendFlatLineCoordinates(e,t,n,s,r,o){const a=this.coordinates;let l=a.length;const h=this.getBufferedMaxExtent();o&&(t+=s);let c=e[t],d=e[t+1];const u=this.tmpCoordinate_;let f=!0,g,w,M;for(g=t+s;g<n;g+=s)u[0]=e[g],u[1]=e[g+1],M=ko(h,u),M!==w?(f&&(a[l++]=c,a[l++]=d,f=!1),a[l++]=u[0],a[l++]=u[1]):M===_e.INTERSECTING?(a[l++]=u[0],a[l++]=u[1],f=!1):f=!0,c=u[0],d=u[1],w=M;return(r&&f||g===t+s)&&(a[l++]=c,a[l++]=d),l}drawCustomCoordinates_(e,t,n,s,r){for(let o=0,a=n.length;o<a;++o){const l=n[o],h=this.appendFlatLineCoordinates(e,t,l,s,!1,!1);r.push(h),t=l}return t}drawCustom(e,t,n,s){this.beginGeometry(e,t);const r=e.getType(),o=e.getStride(),a=this.coordinates.length;let l,h,c,d,u;switch(r){case"MultiPolygon":l=e.getOrientedFlatCoordinates(),d=[];const f=e.getEndss();u=0;for(let g=0,w=f.length;g<w;++g){const M=[];u=this.drawCustomCoordinates_(l,u,f[g],o,M),d.push(M)}this.instructions.push([k.CUSTOM,a,d,e,n,Ho]),this.hitDetectionInstructions.push([k.CUSTOM,a,d,e,s||n,Ho]);break;case"Polygon":case"MultiLineString":c=[],l=r=="Polygon"?e.getOrientedFlatCoordinates():e.getFlatCoordinates(),u=this.drawCustomCoordinates_(l,0,e.getEnds(),o,c),this.instructions.push([k.CUSTOM,a,c,e,n,as]),this.hitDetectionInstructions.push([k.CUSTOM,a,c,e,s||n,as]);break;case"LineString":case"Circle":l=e.getFlatCoordinates(),h=this.appendFlatLineCoordinates(l,0,l.length,o,!1,!1),this.instructions.push([k.CUSTOM,a,h,e,n,hi]),this.hitDetectionInstructions.push([k.CUSTOM,a,h,e,s||n,hi]);break;case"MultiPoint":l=e.getFlatCoordinates(),h=this.appendFlatPointCoordinates(l,o),h>a&&(this.instructions.push([k.CUSTOM,a,h,e,n,hi]),this.hitDetectionInstructions.push([k.CUSTOM,a,h,e,s||n,hi]));break;case"Point":l=e.getFlatCoordinates(),this.coordinates.push(l[0],l[1]),h=this.coordinates.length,this.instructions.push([k.CUSTOM,a,h,e,n]),this.hitDetectionInstructions.push([k.CUSTOM,a,h,e,s||n]);break}this.endGeometry(t)}beginGeometry(e,t){this.beginGeometryInstruction1_=[k.BEGIN_GEOMETRY,t,0,e],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[k.BEGIN_GEOMETRY,t,0,e],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)}finish(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}}reverseHitDetectionInstructions(){const e=this.hitDetectionInstructions;e.reverse();let t;const n=e.length;let s,r,o=-1;for(t=0;t<n;++t)s=e[t],r=s[0],r==k.END_GEOMETRY?o=t:r==k.BEGIN_GEOMETRY&&(s[2]=t,Zd(this.hitDetectionInstructions,o,t),o=-1)}setFillStrokeStyle(e,t){const n=this.state;if(e){const s=e.getColor();n.fillStyle=Rt(s||Ve)}else n.fillStyle=void 0;if(t){const s=t.getColor();n.strokeStyle=Rt(s||cs);const r=t.getLineCap();n.lineCap=r!==void 0?r:vn;const o=t.getLineDash();n.lineDash=o?o.slice():Bt;const a=t.getLineDashOffset();n.lineDashOffset=a||jt;const l=t.getLineJoin();n.lineJoin=l!==void 0?l:Rn;const h=t.getWidth();n.lineWidth=h!==void 0?h:us;const c=t.getMiterLimit();n.miterLimit=c!==void 0?c:hs,n.lineWidth>this.maxLineWidth&&(this.maxLineWidth=n.lineWidth,this.bufferedMaxExtent_=null)}else n.strokeStyle=void 0,n.lineCap=void 0,n.lineDash=null,n.lineDashOffset=void 0,n.lineJoin=void 0,n.lineWidth=void 0,n.miterLimit=void 0}createFill(e){const t=e.fillStyle,n=[k.SET_FILL_STYLE,t];return typeof t!="string"&&n.push(!0),n}applyStroke(e){this.instructions.push(this.createStroke(e))}createStroke(e){return[k.SET_STROKE_STYLE,e.strokeStyle,e.lineWidth*this.pixelRatio,e.lineCap,e.lineJoin,e.miterLimit,this.applyPixelRatio(e.lineDash),e.lineDashOffset*this.pixelRatio]}updateFillStyle(e,t){const n=e.fillStyle;(typeof n!="string"||e.currentFillStyle!=n)&&(n!==void 0&&this.instructions.push(t.call(this,e)),e.currentFillStyle=n)}updateStrokeStyle(e,t){const n=e.strokeStyle,s=e.lineCap,r=e.lineDash,o=e.lineDashOffset,a=e.lineJoin,l=e.lineWidth,h=e.miterLimit;(e.currentStrokeStyle!=n||e.currentLineCap!=s||r!=e.currentLineDash&&!pi(e.currentLineDash,r)||e.currentLineDashOffset!=o||e.currentLineJoin!=a||e.currentLineWidth!=l||e.currentMiterLimit!=h)&&(n!==void 0&&t.call(this,e),e.currentStrokeStyle=n,e.currentLineCap=s,e.currentLineDash=r,e.currentLineDashOffset=o,e.currentLineJoin=a,e.currentLineWidth=l,e.currentMiterLimit=h)}endGeometry(e){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;const t=[k.END_GEOMETRY,e];this.instructions.push(t),this.hitDetectionInstructions.push(t)}getBufferedMaxExtent(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=zh(this.maxExtent),this.maxLineWidth>0)){const e=this.resolution*(this.maxLineWidth+1)/2;ss(this.bufferedMaxExtent_,e,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_}}class Rx extends Fs{constructor(e,t,n,s){super(e,t,n,s),this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.anchorX_=void 0,this.anchorY_=void 0,this.height_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.scale_=void 0,this.width_=void 0,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}drawPoint(e,t){if(!this.image_)return;this.beginGeometry(e,t);const n=e.getFlatCoordinates(),s=e.getStride(),r=this.coordinates.length,o=this.appendFlatPointCoordinates(n,s);this.instructions.push([k.DRAW_IMAGE,r,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([k.DRAW_IMAGE,r,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(t)}drawMultiPoint(e,t){if(!this.image_)return;this.beginGeometry(e,t);const n=e.getFlatCoordinates(),s=e.getStride(),r=this.coordinates.length,o=this.appendFlatPointCoordinates(n,s);this.instructions.push([k.DRAW_IMAGE,r,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([k.DRAW_IMAGE,r,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(t)}finish(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,super.finish()}setImageStyle(e,t){const n=e.getAnchor(),s=e.getSize(),r=e.getOrigin();this.imagePixelRatio_=e.getPixelRatio(this.pixelRatio),this.anchorX_=n[0],this.anchorY_=n[1],this.hitDetectionImage_=e.getHitDetectionImage(),this.image_=e.getImage(this.pixelRatio),this.height_=s[1],this.opacity_=e.getOpacity(),this.originX_=r[0],this.originY_=r[1],this.rotateWithView_=e.getRotateWithView(),this.rotation_=e.getRotation(),this.scale_=e.getScaleArray(),this.width_=s[0],this.declutterMode_=e.getDeclutterMode(),this.declutterImageWithText_=t}}class bx extends Fs{constructor(e,t,n,s){super(e,t,n,s)}drawFlatCoordinates_(e,t,n,s){const r=this.coordinates.length,o=this.appendFlatLineCoordinates(e,t,n,s,!1,!1),a=[k.MOVE_TO_LINE_TO,r,o];return this.instructions.push(a),this.hitDetectionInstructions.push(a),n}drawLineString(e,t){const n=this.state,s=n.strokeStyle,r=n.lineWidth;if(s===void 0||r===void 0)return;this.updateStrokeStyle(n,this.applyStroke),this.beginGeometry(e,t),this.hitDetectionInstructions.push([k.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,Bt,jt],Pi);const o=e.getFlatCoordinates(),a=e.getStride();this.drawFlatCoordinates_(o,0,o.length,a),this.hitDetectionInstructions.push(ui),this.endGeometry(t)}drawMultiLineString(e,t){const n=this.state,s=n.strokeStyle,r=n.lineWidth;if(s===void 0||r===void 0)return;this.updateStrokeStyle(n,this.applyStroke),this.beginGeometry(e,t),this.hitDetectionInstructions.push([k.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,Bt,jt],Pi);const o=e.getEnds(),a=e.getFlatCoordinates(),l=e.getStride();let h=0;for(let c=0,d=o.length;c<d;++c)h=this.drawFlatCoordinates_(a,h,o[c],l);this.hitDetectionInstructions.push(ui),this.endGeometry(t)}finish(){const e=this.state;return e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&this.instructions.push(ui),this.reverseHitDetectionInstructions(),this.state=null,super.finish()}applyStroke(e){e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&(this.instructions.push(ui),e.lastStroke=this.coordinates.length),e.lastStroke=0,super.applyStroke(e),this.instructions.push(Pi)}}class gh extends Fs{constructor(e,t,n,s){super(e,t,n,s)}drawFlatCoordinatess_(e,t,n,s){const r=this.state,o=r.fillStyle!==void 0,a=r.strokeStyle!==void 0,l=n.length;this.instructions.push(Pi),this.hitDetectionInstructions.push(Pi);for(let h=0;h<l;++h){const c=n[h],d=this.coordinates.length,u=this.appendFlatLineCoordinates(e,t,c,s,!0,!a),f=[k.MOVE_TO_LINE_TO,d,u];this.instructions.push(f),this.hitDetectionInstructions.push(f),a&&(this.instructions.push(fh),this.hitDetectionInstructions.push(fh)),t=c}return o&&(this.instructions.push(nr),this.hitDetectionInstructions.push(nr)),a&&(this.instructions.push(ui),this.hitDetectionInstructions.push(ui)),t}drawCircle(e,t){const n=this.state,s=n.fillStyle,r=n.strokeStyle;if(s===void 0&&r===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(e,t),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([k.SET_FILL_STYLE,Ve]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([k.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,Bt,jt]);const o=e.getFlatCoordinates(),a=e.getStride(),l=this.coordinates.length;this.appendFlatLineCoordinates(o,0,o.length,a,!1,!1);const h=[k.CIRCLE,l];this.instructions.push(Pi,h),this.hitDetectionInstructions.push(Pi,h),n.fillStyle!==void 0&&(this.instructions.push(nr),this.hitDetectionInstructions.push(nr)),n.strokeStyle!==void 0&&(this.instructions.push(ui),this.hitDetectionInstructions.push(ui)),this.endGeometry(t)}drawPolygon(e,t){const n=this.state,s=n.fillStyle,r=n.strokeStyle;if(s===void 0&&r===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(e,t),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([k.SET_FILL_STYLE,Ve]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([k.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,Bt,jt]);const o=e.getEnds(),a=e.getOrientedFlatCoordinates(),l=e.getStride();this.drawFlatCoordinatess_(a,0,o,l),this.endGeometry(t)}drawMultiPolygon(e,t){const n=this.state,s=n.fillStyle,r=n.strokeStyle;if(s===void 0&&r===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(e,t),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([k.SET_FILL_STYLE,Ve]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([k.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,Bt,jt]);const o=e.getEndss(),a=e.getOrientedFlatCoordinates(),l=e.getStride();let h=0;for(let c=0,d=o.length;c<d;++c)h=this.drawFlatCoordinatess_(a,h,o[c],l);this.endGeometry(t)}finish(){this.reverseHitDetectionInstructions(),this.state=null;const e=this.tolerance;if(e!==0){const t=this.coordinates;for(let n=0,s=t.length;n<s;++n)t[n]=Si(t[n],e)}return super.finish()}setFillStrokeStyles_(){const e=this.state;e.fillStyle!==void 0&&this.updateFillStyle(e,this.createFill),e.strokeStyle!==void 0&&this.updateStrokeStyle(e,this.applyStroke)}}function Ex(i,e,t,n,s){const r=[];let o=t,a=0,l=e.slice(t,2);for(;a<i&&o+s<n;){const[h,c]=l.slice(-2),d=e[o+s],u=e[o+s+1],f=Math.sqrt((d-h)*(d-h)+(u-c)*(u-c));if(a+=f,a>=i){const g=(i-a+f)/f,w=Qe(h,d,g),M=Qe(c,u,g);l.push(w,M),r.push(l),l=[w,M],a==i&&(o+=s),a=0}else if(a<i)l.push(e[o+s],e[o+s+1]),o+=s;else{const g=f-a,w=Qe(h,d,g/f),M=Qe(c,u,g/f);l.push(w,M),r.push(l),l=[w,M],a=0,o+=s}}return a>0&&r.push(l),r}function Lx(i,e,t,n,s){let r=t,o=t,a=0,l=0,h=t,c,d,u,f,g,w,M,m,T,y;for(d=t;d<n;d+=s){const x=e[d],_=e[d+1];g!==void 0&&(T=x-g,y=_-w,f=Math.sqrt(T*T+y*y),M!==void 0&&(l+=u,c=Math.acos((M*T+m*y)/(u*f)),c>i&&(l>a&&(a=l,r=h,o=d),l=0,h=d-s)),u=f,M=T,m=y),g=x,w=_}return l+=f,l>a?[h,d]:[r,o]}const Kr={left:0,center:.5,right:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1};class Sx extends Fs{constructor(e,t,n,s){super(e,t,n,s),this.labels_=null,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=void 0,this.textRotation_=0,this.textFillState_=null,this.fillStates={},this.fillStates[Ve]={fillStyle:Ve},this.textStrokeState_=null,this.strokeStates={},this.textState_={},this.textStates={},this.textKey_="",this.fillKey_="",this.strokeKey_="",this.declutterImageWithText_=void 0}finish(){const e=super.finish();return e.textStates=this.textStates,e.fillStates=this.fillStates,e.strokeStates=this.strokeStates,e}drawText(e,t){const n=this.textFillState_,s=this.textStrokeState_,r=this.textState_;if(this.text_===""||!r||!n&&!s)return;const o=this.coordinates;let a=o.length;const l=e.getType();let h=null,c=e.getStride();if(r.placement==="line"&&(l=="LineString"||l=="MultiLineString"||l=="Polygon"||l=="MultiPolygon")){if(!Xe(this.getBufferedMaxExtent(),e.getExtent()))return;let d;if(h=e.getFlatCoordinates(),l=="LineString")d=[h.length];else if(l=="MultiLineString")d=e.getEnds();else if(l=="Polygon")d=e.getEnds().slice(0,1);else if(l=="MultiPolygon"){const w=e.getEndss();d=[];for(let M=0,m=w.length;M<m;++M)d.push(w[M][0])}this.beginGeometry(e,t);const u=r.repeat,f=u?void 0:r.textAlign;let g=0;for(let w=0,M=d.length;w<M;++w){let m;u?m=Ex(u*this.resolution,h,g,d[w],c):m=[h.slice(g,d[w])];for(let T=0,y=m.length;T<y;++T){const x=m[T];let _=0,p=x.length;if(f==null){const C=Lx(r.maxAngle,x,0,x.length,2);_=C[0],p=C[1]}for(let C=_;C<p;C+=c)o.push(x[C],x[C+1]);const R=o.length;g=d[w],this.drawChars_(a,R),a=R}}this.endGeometry(t)}else{let d=r.overflow?null:[];switch(l){case"Point":case"MultiPoint":h=e.getFlatCoordinates();break;case"LineString":h=e.getFlatMidpoint();break;case"Circle":h=e.getCenter();break;case"MultiLineString":h=e.getFlatMidpoints(),c=2;break;case"Polygon":h=e.getFlatInteriorPoint(),r.overflow||d.push(h[2]/this.resolution),c=3;break;case"MultiPolygon":const m=e.getFlatInteriorPoints();h=[];for(let T=0,y=m.length;T<y;T+=3)r.overflow||d.push(m[T+2]/this.resolution),h.push(m[T],m[T+1]);if(h.length===0)return;c=2;break}const u=this.appendFlatPointCoordinates(h,c);if(u===a)return;if(d&&(u-a)/2!==h.length/c){let m=a/2;d=d.filter((T,y)=>{const x=o[(m+y)*2]===h[y*c]&&o[(m+y)*2+1]===h[y*c+1];return x||--m,x})}this.saveTextStates_(),(r.backgroundFill||r.backgroundStroke)&&(this.setFillStrokeStyle(r.backgroundFill,r.backgroundStroke),r.backgroundFill&&this.updateFillStyle(this.state,this.createFill),r.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(e,t);let f=r.padding;if(f!=Ai&&(r.scale[0]<0||r.scale[1]<0)){let m=r.padding[0],T=r.padding[1],y=r.padding[2],x=r.padding[3];r.scale[0]<0&&(T=-T,x=-x),r.scale[1]<0&&(m=-m,y=-y),f=[m,T,y,x]}const g=this.pixelRatio;this.instructions.push([k.DRAW_IMAGE,a,u,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,void 0,this.declutterImageWithText_,f==Ai?Ai:f.map(function(m){return m*g}),!!r.backgroundFill,!!r.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,d]);const w=1/g,M=this.state.fillStyle;r.backgroundFill&&(this.state.fillStyle=Ve,this.hitDetectionInstructions.push(this.createFill(this.state))),this.hitDetectionInstructions.push([k.DRAW_IMAGE,a,u,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[w,w],NaN,void 0,this.declutterImageWithText_,f,!!r.backgroundFill,!!r.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_?Ve:this.fillKey_,this.textOffsetX_,this.textOffsetY_,d]),r.backgroundFill&&(this.state.fillStyle=M,this.hitDetectionInstructions.push(this.createFill(this.state))),this.endGeometry(t)}}saveTextStates_(){const e=this.textStrokeState_,t=this.textState_,n=this.textFillState_,s=this.strokeKey_;e&&(s in this.strokeStates||(this.strokeStates[s]={strokeStyle:e.strokeStyle,lineCap:e.lineCap,lineDashOffset:e.lineDashOffset,lineWidth:e.lineWidth,lineJoin:e.lineJoin,miterLimit:e.miterLimit,lineDash:e.lineDash}));const r=this.textKey_;r in this.textStates||(this.textStates[r]={font:t.font,textAlign:t.textAlign||ds,justify:t.justify,textBaseline:t.textBaseline||Tr,scale:t.scale});const o=this.fillKey_;n&&(o in this.fillStates||(this.fillStates[o]={fillStyle:n.fillStyle}))}drawChars_(e,t){const n=this.textStrokeState_,s=this.textState_,r=this.strokeKey_,o=this.textKey_,a=this.fillKey_;this.saveTextStates_();const l=this.pixelRatio,h=Kr[s.textBaseline],c=this.textOffsetY_*l,d=this.text_,u=n?n.lineWidth*Math.abs(s.scale[0])/2:0;this.instructions.push([k.DRAW_CHARS,e,t,h,s.overflow,a,s.maxAngle,l,c,r,u*l,d,o,1]),this.hitDetectionInstructions.push([k.DRAW_CHARS,e,t,h,s.overflow,a&&Ve,s.maxAngle,l,c,r,u*l,d,o,1/l])}setTextStyle(e,t){let n,s,r;if(!e)this.text_="";else{const o=e.getFill();o?(s=this.textFillState_,s||(s={},this.textFillState_=s),s.fillStyle=Rt(o.getColor()||Ve)):(s=null,this.textFillState_=s);const a=e.getStroke();if(!a)r=null,this.textStrokeState_=r;else{r=this.textStrokeState_,r||(r={},this.textStrokeState_=r);const g=a.getLineDash(),w=a.getLineDashOffset(),M=a.getWidth(),m=a.getMiterLimit();r.lineCap=a.getLineCap()||vn,r.lineDash=g?g.slice():Bt,r.lineDashOffset=w===void 0?jt:w,r.lineJoin=a.getLineJoin()||Rn,r.lineWidth=M===void 0?us:M,r.miterLimit=m===void 0?hs:m,r.strokeStyle=Rt(a.getColor()||cs)}n=this.textState_;const l=e.getFont()||pc;Sf(l);const h=e.getScaleArray();n.overflow=e.getOverflow(),n.font=l,n.maxAngle=e.getMaxAngle(),n.placement=e.getPlacement(),n.textAlign=e.getTextAlign(),n.repeat=e.getRepeat(),n.justify=e.getJustify(),n.textBaseline=e.getTextBaseline()||Tr,n.backgroundFill=e.getBackgroundFill(),n.backgroundStroke=e.getBackgroundStroke(),n.padding=e.getPadding()||Ai,n.scale=h===void 0?[1,1]:h;const c=e.getOffsetX(),d=e.getOffsetY(),u=e.getRotateWithView(),f=e.getRotation();this.text_=e.getText()||"",this.textOffsetX_=c===void 0?0:c,this.textOffsetY_=d===void 0?0:d,this.textRotateWithView_=u===void 0?!1:u,this.textRotation_=f===void 0?0:f,this.strokeKey_=r?(typeof r.strokeStyle=="string"?r.strokeStyle:te(r.strokeStyle))+r.lineCap+r.lineDashOffset+"|"+r.lineWidth+r.lineJoin+r.miterLimit+"["+r.lineDash.join()+"]":"",this.textKey_=n.font+n.scale+(n.textAlign||"?")+(n.repeat||"?")+(n.justify||"?")+(n.textBaseline||"?"),this.fillKey_=s?typeof s.fillStyle=="string"?s.fillStyle:"|"+te(s.fillStyle):""}this.declutterImageWithText_=t}}const Ix={Circle:gh,Default:Fs,Image:Rx,LineString:bx,Polygon:gh,Text:Sx};class wh{constructor(e,t,n,s){this.tolerance_=e,this.maxExtent_=t,this.pixelRatio_=s,this.resolution_=n,this.buildersByZIndex_={}}finish(){const e={};for(const t in this.buildersByZIndex_){e[t]=e[t]||{};const n=this.buildersByZIndex_[t];for(const s in n){const r=n[s].finish();e[t][s]=r}}return e}getBuilder(e,t){const n=e!==void 0?e.toString():"0";let s=this.buildersByZIndex_[n];s===void 0&&(s={},this.buildersByZIndex_[n]=s);let r=s[t];if(r===void 0){const o=Ix[t];r=new o(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),s[t]=r}return r}}class Kx extends Cs{constructor(e){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=e,this.declutterExecutorGroup=null}getFeatures(e){return G()}getData(e){return null}prepareFrame(e){return G()}renderFrame(e,t){return G()}loadedTileCallback(e,t,n){e[t]||(e[t]={}),e[t][n.tileCoord.toString()]=n}createLoadedTileFinder(e,t,n){return((s,r)=>{const o=this.loadedTileCallback.bind(this,n,s);return e.forEachLoadedTile(t,s,r,o)})}forEachFeatureAtCoordinate(e,t,n,s,r){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(e){const t=e.target;(t.getState()===H.LOADED||t.getState()===H.ERROR)&&this.renderIfReadyAndVisible()}loadImage(e){let t=e.getState();return t!=H.LOADED&&t!=H.ERROR&&e.addEventListener(W.CHANGE,this.boundHandleImageChange_),t==H.IDLE&&(e.load(),t=e.getState()),t==H.LOADED}renderIfReadyAndVisible(){const e=this.getLayer();e&&e.getVisible()&&e.getSourceState()==="ready"&&e.changed()}disposeInternal(){delete this.layer_,super.disposeInternal()}}const Mh=[];let on=null;function Ax(){on=Ne(1,1,void 0,{willReadFrequently:!0})}class Ld extends Kx{constructor(e){super(e),this.container=null,this.renderedResolution,this.tempTransform=gt(),this.pixelTransform=gt(),this.inversePixelTransform=gt(),this.context=null,this.containerReused=!1,this.pixelContext_=null,this.frameState=null}getImageData(e,t,n){on||Ax(),on.clearRect(0,0,1,1);let s;try{on.drawImage(e,t,n,1,1,0,0,1,1),s=on.getImageData(0,0,1,1).data}catch{return on=null,null}return s}getBackground(e){let n=this.getLayer().getBackground();return typeof n=="function"&&(n=n(e.viewState.resolution)),n||void 0}useContainer(e,t,n){const s=this.getLayer().getClassName();let r,o;if(e&&e.className===s&&(!n||e&&e.style.backgroundColor&&pi(gr(e.style.backgroundColor),gr(n)))){const a=e.firstElementChild;a instanceof HTMLCanvasElement&&(o=a.getContext("2d"))}if(o&&o.canvas.style.transform===t?(this.container=e,this.context=o,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){r=document.createElement("div"),r.className=s;let a=r.style;a.position="absolute",a.width="100%",a.height="100%",o=Ne();const l=o.canvas;r.appendChild(l),a=l.style,a.position="absolute",a.left="0",a.transformOrigin="top left",this.container=r,this.context=o}!this.containerReused&&n&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=n)}clipUnrotated(e,t,n){const s=qt(n),r=Hr(n),o=bs(n),a=zr(n);pe(t.coordinateToPixelTransform,s),pe(t.coordinateToPixelTransform,r),pe(t.coordinateToPixelTransform,o),pe(t.coordinateToPixelTransform,a);const l=this.inversePixelTransform;pe(l,s),pe(l,r),pe(l,o),pe(l,a),e.save(),e.beginPath(),e.moveTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(r[0]),Math.round(r[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(a[0]),Math.round(a[1])),e.clip()}dispatchRenderEvent_(e,t,n){const s=this.getLayer();if(s.hasListener(e)){const r=new _c(e,this.inversePixelTransform,n,t);s.dispatchEvent(r)}}preRender(e,t){this.frameState=t,this.dispatchRenderEvent_(Et.PRERENDER,e,t)}postRender(e,t){this.dispatchRenderEvent_(Et.POSTRENDER,e,t)}getRenderTransform(e,t,n,s,r,o,a){const l=r/2,h=o/2,c=s/t,d=-c,u=-e[0]+a,f=-e[1];return Xt(this.tempTransform,l,h,c,d,-n,u,f)}disposeInternal(){delete this.frameState,super.disposeInternal()}}function Px(i,e,t,n,s,r,o,a,l,h,c,d){let u=i[e],f=i[e+1],g=0,w=0,M=0,m=0;function T(){g=u,w=f,e+=n,u=i[e],f=i[e+1],m+=M,M=Math.sqrt((u-g)*(u-g)+(f-w)*(f-w))}do T();while(e<t-n&&m+M<r);let y=M===0?0:(r-m)/M;const x=Qe(g,u,y),_=Qe(w,f,y),p=e-n,R=m,C=r+a*l(h,s,c);for(;e<t-n&&m+M<C;)T();y=M===0?0:(C-m)/M;const I=Qe(g,u,y),D=Qe(w,f,y);let j;if(d){const N=[x,_,I,D];hc(N,0,4,2,d,N,N),j=N[0]>N[2]}else j=x>I;const X=Math.PI,U=[],Me=p+n===e;e=p,M=0,m=R,u=i[e],f=i[e+1];let A;if(Me){T(),A=Math.atan2(f-w,u-g),j&&(A+=A>0?-X:X);const N=(I+x)/2,K=(D+_)/2;return U[0]=[N,K,(C-r)/2,A,s],U}s=s.replace(/\n/g," ");for(let N=0,K=s.length;N<K;){T();let V=Math.atan2(f-w,u-g);if(j&&(V+=V>0?-X:X),A!==void 0){let Z=V-A;if(Z+=Z>X?-2*X:Z<-X?2*X:0,Math.abs(Z)>o)return null}A=V;const he=N;let ae=0;for(;N<K;++N){const Z=j?K-N-1:N,de=a*l(h,s[Z],c);if(e+n<t&&m+M<r+ae+de/2)break;ae+=de}if(N===he)continue;const be=j?s.substring(K-he,K-N):s.substring(he,N);y=M===0?0:(r+ae/2-m)/M;const E=Qe(g,u,y),Ce=Qe(w,f,y);U.push([E,Ce,ae/2,V,be]),r+=ae}return U}const Ji=nt(),ti=[],Gt=[],Wt=[],ii=[];function mh(i){return i[3].declutterBox}const Th=new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");function bo(i,e){return e==="start"?e=Th.test(i)?"right":"left":e==="end"&&(e=Th.test(i)?"left":"right"),Kr[e]}function Ox(i,e,t){return t>0&&i.push(`
`,""),i.push(e,""),i}class Dx{constructor(e,t,n,s){this.overlaps=n,this.pixelRatio=t,this.resolution=e,this.alignFill_,this.instructions=s.instructions,this.coordinates=s.coordinates,this.coordinateCache_={},this.renderedTransform_=gt(),this.hitDetectionInstructions=s.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=s.fillStates||{},this.strokeStates=s.strokeStates||{},this.textStates=s.textStates||{},this.widths_={},this.labels_={}}createLabel(e,t,n,s){const r=e+t+n+s;if(this.labels_[r])return this.labels_[r];const o=s?this.strokeStates[s]:null,a=n?this.fillStates[n]:null,l=this.textStates[t],h=this.pixelRatio,c=[l.scale[0]*h,l.scale[1]*h],d=Array.isArray(e),u=l.justify?Kr[l.justify]:bo(Array.isArray(e)?e[0]:e,l.textAlign||ds),f=s&&o.lineWidth?o.lineWidth:0,g=d?e:e.split(`
`).reduce(Ox,[]),{width:w,height:M,widths:m,heights:T,lineWidths:y}=Kf(l,g),x=w+f,_=[],p=(x+2)*c[0],R=(M+f)*c[1],C={width:p<0?Math.floor(p):Math.ceil(p),height:R<0?Math.floor(R):Math.ceil(R),contextInstructions:_};(c[0]!=1||c[1]!=1)&&_.push("scale",c),s&&(_.push("strokeStyle",o.strokeStyle),_.push("lineWidth",f),_.push("lineCap",o.lineCap),_.push("lineJoin",o.lineJoin),_.push("miterLimit",o.miterLimit),_.push("setLineDash",[o.lineDash]),_.push("lineDashOffset",o.lineDashOffset)),n&&_.push("fillStyle",a.fillStyle),_.push("textBaseline","middle"),_.push("textAlign","center");const I=.5-u;let D=u*x+I*f;const j=[],X=[];let U=0,Me=0,A=0,N=0,K;for(let V=0,he=g.length;V<he;V+=2){const ae=g[V];if(ae===`
`){Me+=U,U=0,D=u*x+I*f,++N;continue}const be=g[V+1]||l.font;be!==K&&(s&&j.push("font",be),n&&X.push("font",be),K=be),U=Math.max(U,T[A]);const E=[ae,D+I*m[A]+u*(m[A]-y[N]),.5*(f+U)+Me];D+=m[A],s&&j.push("strokeText",E),n&&X.push("fillText",E),++A}return Array.prototype.push.apply(_,j),Array.prototype.push.apply(_,X),this.labels_[r]=C,C}replayTextBackground_(e,t,n,s,r,o,a){e.beginPath(),e.moveTo.apply(e,t),e.lineTo.apply(e,n),e.lineTo.apply(e,s),e.lineTo.apply(e,r),e.lineTo.apply(e,t),o&&(this.alignFill_=o[2],this.fill_(e)),a&&(this.setStrokeStyle_(e,a),e.stroke())}calculateImageOrLabelDimensions_(e,t,n,s,r,o,a,l,h,c,d,u,f,g,w,M){a*=u[0],l*=u[1];let m=n-a,T=s-l;const y=r+h>e?e-h:r,x=o+c>t?t-c:o,_=g[3]+y*u[0]+g[1],p=g[0]+x*u[1]+g[2],R=m-g[3],C=T-g[0];(w||d!==0)&&(ti[0]=R,ii[0]=R,ti[1]=C,Gt[1]=C,Gt[0]=R+_,Wt[0]=Gt[0],Wt[1]=C+p,ii[1]=Wt[1]);let I;return d!==0?(I=Xt(gt(),n,s,1,1,d,-n,-s),pe(I,ti),pe(I,Gt),pe(I,Wt),pe(I,ii),Vt(Math.min(ti[0],Gt[0],Wt[0],ii[0]),Math.min(ti[1],Gt[1],Wt[1],ii[1]),Math.max(ti[0],Gt[0],Wt[0],ii[0]),Math.max(ti[1],Gt[1],Wt[1],ii[1]),Ji)):Vt(Math.min(R,R+_),Math.min(C,C+p),Math.max(R,R+_),Math.max(C,C+p),Ji),f&&(m=Math.round(m),T=Math.round(T)),{drawImageX:m,drawImageY:T,drawImageW:y,drawImageH:x,originX:h,originY:c,declutterBox:{minX:Ji[0],minY:Ji[1],maxX:Ji[2],maxY:Ji[3],value:M},canvasTransform:I,scale:u}}replayImageOrLabel_(e,t,n,s,r,o,a){const l=!!(o||a),h=s.declutterBox,c=e.canvas,d=a?a[2]*s.scale[0]/2:0;return h.minX-d<=c.width/t&&h.maxX+d>=0&&h.minY-d<=c.height/t&&h.maxY+d>=0&&(l&&this.replayTextBackground_(e,ti,Gt,Wt,ii,o,a),Af(e,s.canvasTransform,r,n,s.originX,s.originY,s.drawImageW,s.drawImageH,s.drawImageX,s.drawImageY,s.scale)),!0}fill_(e){if(this.alignFill_){const t=pe(this.renderedTransform_,[0,0]),n=512*this.pixelRatio;e.save(),e.translate(t[0]%n,t[1]%n),e.rotate(this.viewRotation_)}e.fill(),this.alignFill_&&e.restore()}setStrokeStyle_(e,t){e.strokeStyle=t[1],e.lineWidth=t[2],e.lineCap=t[3],e.lineJoin=t[4],e.miterLimit=t[5],e.lineDashOffset=t[7],e.setLineDash(t[6])}drawLabelWithPointPlacement_(e,t,n,s){const r=this.textStates[t],o=this.createLabel(e,t,s,n),a=this.strokeStates[n],l=this.pixelRatio,h=bo(Array.isArray(e)?e[0]:e,r.textAlign||ds),c=Kr[r.textBaseline||Tr],d=a&&a.lineWidth?a.lineWidth:0,u=o.width/l-2*r.scale[0],f=h*u+2*(.5-h)*d,g=c*o.height/l+2*(.5-c)*d;return{label:o,anchorX:f,anchorY:g}}execute_(e,t,n,s,r,o,a,l){let h;this.pixelCoordinates_&&pi(n,this.renderedTransform_)?h=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),h=wi(this.coordinates,0,this.coordinates.length,2,n,this.pixelCoordinates_),Hu(this.renderedTransform_,n));let c=0;const d=s.length;let u=0,f,g,w,M,m,T,y,x,_,p,R,C,I=0,D=0,j=null,X=null;const U=this.coordinateCache_,Me=this.viewRotation_,A=Math.round(Math.atan2(-n[1],n[0])*1e12)/1e12,N={context:e,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:Me},K=this.instructions!=s||this.overlaps?0:200;let V,he,ae,be;for(;c<d;){const E=s[c];switch(E[0]){case k.BEGIN_GEOMETRY:V=E[1],be=E[3],V.getGeometry()?a!==void 0&&!Xe(a,be.getExtent())?c=E[2]+1:++c:c=E[2];break;case k.BEGIN_PATH:I>K&&(this.fill_(e),I=0),D>K&&(e.stroke(),D=0),!I&&!D&&(e.beginPath(),M=NaN,m=NaN),++c;break;case k.CIRCLE:u=E[1];const Z=h[u],de=h[u+1],$t=h[u+2],Pe=h[u+3],Ot=$t-Z,Dt=Pe-de,ji=Math.sqrt(Ot*Ot+Dt*Dt);e.moveTo(Z+ji,de),e.arc(Z,de,ji,0,2*Math.PI,!0),++c;break;case k.CLOSE_PATH:e.closePath(),++c;break;case k.CUSTOM:u=E[1],f=E[2];const Ns=E[3],Vi=E[4],Gs=E.length==6?E[5]:void 0;N.geometry=Ns,N.feature=V,c in U||(U[c]=[]);const Jt=U[c];Gs?Gs(h,u,f,2,Jt):(Jt[0]=h[u],Jt[1]=h[u+1],Jt.length=2),Vi(Jt,N),++c;break;case k.DRAW_IMAGE:u=E[1],f=E[2],x=E[3],g=E[4],w=E[5];let Nn=E[6];const Qt=E[7],Ws=E[8],zs=E[9],Hs=E[10];let Xi=E[11];const ro=E[12];let Ge=E[13];const st=E[14],dt=E[15];if(!x&&E.length>=20){_=E[19],p=E[20],R=E[21],C=E[22];const Ze=this.drawLabelWithPointPlacement_(_,p,R,C);x=Ze.label,E[3]=x;const qi=E[23];g=(Ze.anchorX-qi)*this.pixelRatio,E[4]=g;const rt=E[24];w=(Ze.anchorY-rt)*this.pixelRatio,E[5]=w,Nn=x.height,E[6]=Nn,Ge=x.width,E[13]=Ge}let kt;E.length>25&&(kt=E[25]);let Ui,Ri,ei;E.length>17?(Ui=E[16],Ri=E[17],ei=E[18]):(Ui=Ai,Ri=!1,ei=!1),Hs&&A?Xi+=Me:!Hs&&!A&&(Xi-=Me);let Yi=0;for(;u<f;u+=2){if(kt&&kt[Yi++]<Ge/this.pixelRatio)continue;const Ze=this.calculateImageOrLabelDimensions_(x.width,x.height,h[u],h[u+1],Ge,Nn,g,w,Ws,zs,Xi,ro,r,Ui,Ri||ei,V),qi=[e,t,x,Ze,Qt,Ri?j:null,ei?X:null];if(l){if(st==="none")continue;if(st==="obstacle"){l.insert(Ze.declutterBox);continue}else{let rt,Ft;if(dt){const $e=f-u;if(!dt[$e]){dt[$e]=qi;continue}if(rt=dt[$e],delete dt[$e],Ft=mh(rt),l.collides(Ft))continue}if(l.collides(Ze.declutterBox))continue;rt&&(l.insert(Ft),this.replayImageOrLabel_.apply(this,rt)),l.insert(Ze.declutterBox)}}this.replayImageOrLabel_.apply(this,qi)}++c;break;case k.DRAW_CHARS:const Bs=E[1],Oe=E[2],oo=E[3],Vd=E[4];C=E[5];const Xd=E[6],rl=E[7],ol=E[8];R=E[9];const ao=E[10];_=E[11],p=E[12];const al=[E[13],E[13]],lo=this.textStates[p],Gn=lo.font,Wn=[lo.scale[0]*rl,lo.scale[1]*rl];let zn;Gn in this.widths_?zn=this.widths_[Gn]:(zn={},this.widths_[Gn]=zn);const ll=nd(h,Bs,Oe,2),hl=Math.abs(Wn[0])*kl(Gn,_,zn);if(Vd||hl<=ll){const Ze=this.textStates[p].textAlign,qi=(ll-hl)*bo(_,Ze),rt=Px(h,Bs,Oe,2,_,qi,Xd,Math.abs(Wn[0]),kl,Gn,zn,A?0:this.viewRotation_);e:if(rt){const Ft=[];let $e,js,Vs,We,ot;if(R)for($e=0,js=rt.length;$e<js;++$e){ot=rt[$e],Vs=ot[4],We=this.createLabel(Vs,p,"",R),g=ot[2]+(Wn[0]<0?-ao:ao),w=oo*We.height+(.5-oo)*2*ao*Wn[1]/Wn[0]-ol;const Nt=this.calculateImageOrLabelDimensions_(We.width,We.height,ot[0],ot[1],We.width,We.height,g,w,0,0,ot[3],al,!1,Ai,!1,V);if(l&&l.collides(Nt.declutterBox))break e;Ft.push([e,t,We,Nt,1,null,null])}if(C)for($e=0,js=rt.length;$e<js;++$e){ot=rt[$e],Vs=ot[4],We=this.createLabel(Vs,p,C,""),g=ot[2],w=oo*We.height-ol;const Nt=this.calculateImageOrLabelDimensions_(We.width,We.height,ot[0],ot[1],We.width,We.height,g,w,0,0,ot[3],al,!1,Ai,!1,V);if(l&&l.collides(Nt.declutterBox))break e;Ft.push([e,t,We,Nt,1,null,null])}l&&l.load(Ft.map(mh));for(let Nt=0,Ud=Ft.length;Nt<Ud;++Nt)this.replayImageOrLabel_.apply(this,Ft[Nt])}}++c;break;case k.END_GEOMETRY:if(o!==void 0){V=E[1];const Ze=o(V,be);if(Ze)return Ze}++c;break;case k.FILL:K?I++:this.fill_(e),++c;break;case k.MOVE_TO_LINE_TO:for(u=E[1],f=E[2],he=h[u],ae=h[u+1],T=he+.5|0,y=ae+.5|0,(T!==M||y!==m)&&(e.moveTo(he,ae),M=T,m=y),u+=2;u<f;u+=2)he=h[u],ae=h[u+1],T=he+.5|0,y=ae+.5|0,(u==f-2||T!==M||y!==m)&&(e.lineTo(he,ae),M=T,m=y);++c;break;case k.SET_FILL_STYLE:j=E,this.alignFill_=E[2],I&&(this.fill_(e),I=0,D&&(e.stroke(),D=0)),e.fillStyle=E[1],++c;break;case k.SET_STROKE_STYLE:X=E,D&&(e.stroke(),D=0),this.setStrokeStyle_(e,E),++c;break;case k.STROKE:K?D++:e.stroke(),++c;break;default:++c;break}}I&&this.fill_(e),D&&e.stroke()}execute(e,t,n,s,r,o){this.viewRotation_=s,this.execute_(e,t,n,this.instructions,r,void 0,void 0,o)}executeHitDetection(e,t,n,s,r){return this.viewRotation_=n,this.execute_(e,1,t,this.hitDetectionInstructions,!0,s,r)}}const Eo=["Polygon","Circle","LineString","Image","Text","Default"];class yh{constructor(e,t,n,s,r,o){this.maxExtent_=e,this.overlaps_=s,this.pixelRatio_=n,this.resolution_=t,this.renderBuffer_=o,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=gt(),this.createExecutors_(r)}clip(e,t){const n=this.getClipCoords(t);e.beginPath(),e.moveTo(n[0],n[1]),e.lineTo(n[2],n[3]),e.lineTo(n[4],n[5]),e.lineTo(n[6],n[7]),e.clip()}createExecutors_(e){for(const t in e){let n=this.executorsByZIndex_[t];n===void 0&&(n={},this.executorsByZIndex_[t]=n);const s=e[t];for(const r in s){const o=s[r];n[r]=new Dx(this.resolution_,this.pixelRatio_,this.overlaps_,o)}}}hasExecutors(e){for(const t in this.executorsByZIndex_){const n=this.executorsByZIndex_[t];for(let s=0,r=e.length;s<r;++s)if(e[s]in n)return!0}return!1}forEachFeatureAtCoordinate(e,t,n,s,r,o){s=Math.round(s);const a=s*2+1,l=Xt(this.hitDetectionTransform_,s+.5,s+.5,1/t,-1/t,-n,-e[0],-e[1]),h=!this.hitDetectionContext_;h&&(this.hitDetectionContext_=Ne(a,a,void 0,{willReadFrequently:!0}));const c=this.hitDetectionContext_;c.canvas.width!==a||c.canvas.height!==a?(c.canvas.width=a,c.canvas.height=a):h||c.clearRect(0,0,a,a);let d;this.renderBuffer_!==void 0&&(d=nt(),es(d,e),ss(d,t*(this.renderBuffer_+s),d));const u=kx(s);let f;function g(_,p){const R=c.getImageData(0,0,a,a).data;for(let C=0,I=u.length;C<I;C++)if(R[u[C]]>0){if(!o||f!=="Image"&&f!=="Text"||o.includes(_)){const D=(u[C]-3)/4,j=s-D%a,X=s-(D/a|0),U=r(_,p,j*j+X*X);if(U)return U}c.clearRect(0,0,a,a);break}}const w=Object.keys(this.executorsByZIndex_).map(Number);w.sort(mi);let M,m,T,y,x;for(M=w.length-1;M>=0;--M){const _=w[M].toString();for(T=this.executorsByZIndex_[_],m=Eo.length-1;m>=0;--m)if(f=Eo[m],y=T[f],y!==void 0&&(x=y.executeHitDetection(c,l,n,g,d),x))return x}}getClipCoords(e){const t=this.maxExtent_;if(!t)return null;const n=t[0],s=t[1],r=t[2],o=t[3],a=[n,s,n,o,r,o,r,s];return wi(a,0,8,2,e,a),a}isEmpty(){return ki(this.executorsByZIndex_)}execute(e,t,n,s,r,o,a){const l=Object.keys(this.executorsByZIndex_).map(Number);l.sort(mi),this.maxExtent_&&(e.save(),this.clip(e,n)),o=o||Eo;let h,c,d,u,f,g;for(a&&l.reverse(),h=0,c=l.length;h<c;++h){const w=l[h].toString();for(f=this.executorsByZIndex_[w],d=0,u=o.length;d<u;++d){const M=o[d];g=f[M],g!==void 0&&g.execute(e,t,n,s,r,a)}}this.maxExtent_&&e.restore()}}const Lo={};function kx(i){if(Lo[i]!==void 0)return Lo[i];const e=i*2+1,t=i*i,n=new Array(t+1);for(let r=0;r<=i;++r)for(let o=0;o<=i;++o){const a=r*r+o*o;if(a>t)break;let l=n[a];l||(l=[],n[a]=l),l.push(((i+r)*e+(i+o))*4+3),r>0&&l.push(((i-r)*e+(i+o))*4+3),o>0&&(l.push(((i+r)*e+(i-o))*4+3),r>0&&l.push(((i-r)*e+(i-o))*4+3))}const s=[];for(let r=0,o=n.length;r<o;++r)n[r]&&s.push(...n[r]);return Lo[i]=s,s}class Fx extends Ed{constructor(e,t,n,s,r,o,a){super(),this.context_=e,this.pixelRatio_=t,this.extent_=n,this.transform_=s,this.transformRotation_=s?Br(Math.atan2(s[1],s[0]),10):0,this.viewRotation_=r,this.squaredTolerance_=o,this.userTransform_=a,this.contextFillState_=null,this.contextStrokeState_=null,this.contextTextState_=null,this.fillState_=null,this.strokeState_=null,this.image_=null,this.imageAnchorX_=0,this.imageAnchorY_=0,this.imageHeight_=0,this.imageOpacity_=0,this.imageOriginX_=0,this.imageOriginY_=0,this.imageRotateWithView_=!1,this.imageRotation_=0,this.imageScale_=[0,0],this.imageWidth_=0,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=!1,this.textRotation_=0,this.textScale_=[0,0],this.textFillState_=null,this.textStrokeState_=null,this.textState_=null,this.pixelCoordinates_=[],this.tmpLocalTransform_=gt()}drawImages_(e,t,n,s){if(!this.image_)return;const r=wi(e,t,n,s,this.transform_,this.pixelCoordinates_),o=this.context_,a=this.tmpLocalTransform_,l=o.globalAlpha;this.imageOpacity_!=1&&(o.globalAlpha=l*this.imageOpacity_);let h=this.imageRotation_;this.transformRotation_===0&&(h-=this.viewRotation_),this.imageRotateWithView_&&(h+=this.viewRotation_);for(let c=0,d=r.length;c<d;c+=2){const u=r[c]-this.imageAnchorX_,f=r[c+1]-this.imageAnchorY_;if(h!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){const g=u+this.imageAnchorX_,w=f+this.imageAnchorY_;Xt(a,g,w,1,1,h,-g,-w),o.save(),o.transform.apply(o,a),o.translate(g,w),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.restore()}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,u,f,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(o.globalAlpha=l)}drawText_(e,t,n,s){if(!this.textState_||this.text_==="")return;this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);const r=wi(e,t,n,s,this.transform_,this.pixelCoordinates_),o=this.context_;let a=this.textRotation_;for(this.transformRotation_===0&&(a-=this.viewRotation_),this.textRotateWithView_&&(a+=this.viewRotation_);t<n;t+=s){const l=r[t]+this.textOffsetX_,h=r[t+1]+this.textOffsetY_;a!==0||this.textScale_[0]!=1||this.textScale_[1]!=1?(o.save(),o.translate(l-this.textOffsetX_,h-this.textOffsetY_),o.rotate(a),o.translate(this.textOffsetX_,this.textOffsetY_),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.restore()):(this.textStrokeState_&&o.strokeText(this.text_,l,h),this.textFillState_&&o.fillText(this.text_,l,h))}}moveToLineTo_(e,t,n,s,r){const o=this.context_,a=wi(e,t,n,s,this.transform_,this.pixelCoordinates_);o.moveTo(a[0],a[1]);let l=a.length;r&&(l-=2);for(let h=2;h<l;h+=2)o.lineTo(a[h],a[h+1]);return r&&o.closePath(),n}drawRings_(e,t,n,s){for(let r=0,o=n.length;r<o;++r)t=this.moveToLineTo_(e,t,n[r],s,!0);return t}drawCircle(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Xe(this.extent_,e.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const t=hf(e,this.transform_,this.pixelCoordinates_),n=t[2]-t[0],s=t[3]-t[1],r=Math.sqrt(n*n+s*s),o=this.context_;o.beginPath(),o.arc(t[0],t[1],r,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}this.text_!==""&&this.drawText_(e.getCenter(),0,2,2)}}setStyle(e){this.setFillStrokeStyle(e.getFill(),e.getStroke()),this.setImageStyle(e.getImage()),this.setTextStyle(e.getText())}setTransform(e){this.transform_=e}drawGeometry(e){switch(e.getType()){case"Point":this.drawPoint(e);break;case"LineString":this.drawLineString(e);break;case"Polygon":this.drawPolygon(e);break;case"MultiPoint":this.drawMultiPoint(e);break;case"MultiLineString":this.drawMultiLineString(e);break;case"MultiPolygon":this.drawMultiPolygon(e);break;case"GeometryCollection":this.drawGeometryCollection(e);break;case"Circle":this.drawCircle(e);break}}drawFeature(e,t){const n=t.getGeometryFunction()(e);n&&(this.setStyle(t),this.drawGeometry(n))}drawGeometryCollection(e){const t=e.getGeometriesArray();for(let n=0,s=t.length;n<s;++n)this.drawGeometry(t[n])}drawPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const t=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(t,0,t.length,n),this.text_!==""&&this.drawText_(t,0,t.length,n)}drawMultiPoint(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const t=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(t,0,t.length,n),this.text_!==""&&this.drawText_(t,0,t.length,n)}drawLineString(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Xe(this.extent_,e.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const t=this.context_,n=e.getFlatCoordinates();t.beginPath(),this.moveToLineTo_(n,0,n.length,e.getStride(),!1),t.stroke()}if(this.text_!==""){const t=e.getFlatMidpoint();this.drawText_(t,0,2,2)}}}drawMultiLineString(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const t=e.getExtent();if(Xe(this.extent_,t)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const n=this.context_,s=e.getFlatCoordinates();let r=0;const o=e.getEnds(),a=e.getStride();n.beginPath();for(let l=0,h=o.length;l<h;++l)r=this.moveToLineTo_(s,r,o[l],a,!1);n.stroke()}if(this.text_!==""){const n=e.getFlatMidpoints();this.drawText_(n,0,n.length,2)}}}drawPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Xe(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const t=this.context_;t.beginPath(),this.drawRings_(e.getOrientedFlatCoordinates(),0,e.getEnds(),e.getStride()),this.fillState_&&t.fill(),this.strokeState_&&t.stroke()}if(this.text_!==""){const t=e.getFlatInteriorPoint();this.drawText_(t,0,2,2)}}}drawMultiPolygon(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Xe(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const t=this.context_,n=e.getOrientedFlatCoordinates();let s=0;const r=e.getEndss(),o=e.getStride();t.beginPath();for(let a=0,l=r.length;a<l;++a){const h=r[a];s=this.drawRings_(n,s,h,o)}this.fillState_&&t.fill(),this.strokeState_&&t.stroke()}if(this.text_!==""){const t=e.getFlatInteriorPoints();this.drawText_(t,0,t.length,2)}}}setContextFillState_(e){const t=this.context_,n=this.contextFillState_;n?n.fillStyle!=e.fillStyle&&(n.fillStyle=e.fillStyle,t.fillStyle=e.fillStyle):(t.fillStyle=e.fillStyle,this.contextFillState_={fillStyle:e.fillStyle})}setContextStrokeState_(e){const t=this.context_,n=this.contextStrokeState_;n?(n.lineCap!=e.lineCap&&(n.lineCap=e.lineCap,t.lineCap=e.lineCap),pi(n.lineDash,e.lineDash)||t.setLineDash(n.lineDash=e.lineDash),n.lineDashOffset!=e.lineDashOffset&&(n.lineDashOffset=e.lineDashOffset,t.lineDashOffset=e.lineDashOffset),n.lineJoin!=e.lineJoin&&(n.lineJoin=e.lineJoin,t.lineJoin=e.lineJoin),n.lineWidth!=e.lineWidth&&(n.lineWidth=e.lineWidth,t.lineWidth=e.lineWidth),n.miterLimit!=e.miterLimit&&(n.miterLimit=e.miterLimit,t.miterLimit=e.miterLimit),n.strokeStyle!=e.strokeStyle&&(n.strokeStyle=e.strokeStyle,t.strokeStyle=e.strokeStyle)):(t.lineCap=e.lineCap,t.setLineDash(e.lineDash),t.lineDashOffset=e.lineDashOffset,t.lineJoin=e.lineJoin,t.lineWidth=e.lineWidth,t.miterLimit=e.miterLimit,t.strokeStyle=e.strokeStyle,this.contextStrokeState_={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle})}setContextTextState_(e){const t=this.context_,n=this.contextTextState_,s=e.textAlign?e.textAlign:ds;n?(n.font!=e.font&&(n.font=e.font,t.font=e.font),n.textAlign!=s&&(n.textAlign=s,t.textAlign=s),n.textBaseline!=e.textBaseline&&(n.textBaseline=e.textBaseline,t.textBaseline=e.textBaseline)):(t.font=e.font,t.textAlign=s,t.textBaseline=e.textBaseline,this.contextTextState_={font:e.font,textAlign:s,textBaseline:e.textBaseline})}setFillStrokeStyle(e,t){if(!e)this.fillState_=null;else{const n=e.getColor();this.fillState_={fillStyle:Rt(n||Ve)}}if(!t)this.strokeState_=null;else{const n=t.getColor(),s=t.getLineCap(),r=t.getLineDash(),o=t.getLineDashOffset(),a=t.getLineJoin(),l=t.getWidth(),h=t.getMiterLimit(),c=r||Bt;this.strokeState_={lineCap:s!==void 0?s:vn,lineDash:this.pixelRatio_===1?c:c.map(d=>d*this.pixelRatio_),lineDashOffset:(o||jt)*this.pixelRatio_,lineJoin:a!==void 0?a:Rn,lineWidth:(l!==void 0?l:us)*this.pixelRatio_,miterLimit:h!==void 0?h:hs,strokeStyle:Rt(n||cs)}}}setImageStyle(e){let t;if(!e||!(t=e.getSize())){this.image_=null;return}const n=e.getPixelRatio(this.pixelRatio_),s=e.getAnchor(),r=e.getOrigin();this.image_=e.getImage(this.pixelRatio_),this.imageAnchorX_=s[0]*n,this.imageAnchorY_=s[1]*n,this.imageHeight_=t[1]*n,this.imageOpacity_=e.getOpacity(),this.imageOriginX_=r[0],this.imageOriginY_=r[1],this.imageRotateWithView_=e.getRotateWithView(),this.imageRotation_=e.getRotation();const o=e.getScaleArray();this.imageScale_=[o[0]*this.pixelRatio_/n,o[1]*this.pixelRatio_/n],this.imageWidth_=t[0]*n}setTextStyle(e){if(!e)this.text_="";else{const t=e.getFill();if(!t)this.textFillState_=null;else{const f=t.getColor();this.textFillState_={fillStyle:Rt(f||Ve)}}const n=e.getStroke();if(!n)this.textStrokeState_=null;else{const f=n.getColor(),g=n.getLineCap(),w=n.getLineDash(),M=n.getLineDashOffset(),m=n.getLineJoin(),T=n.getWidth(),y=n.getMiterLimit();this.textStrokeState_={lineCap:g!==void 0?g:vn,lineDash:w||Bt,lineDashOffset:M||jt,lineJoin:m!==void 0?m:Rn,lineWidth:T!==void 0?T:us,miterLimit:y!==void 0?y:hs,strokeStyle:Rt(f||cs)}}const s=e.getFont(),r=e.getOffsetX(),o=e.getOffsetY(),a=e.getRotateWithView(),l=e.getRotation(),h=e.getScaleArray(),c=e.getText(),d=e.getTextAlign(),u=e.getTextBaseline();this.textState_={font:s!==void 0?s:pc,textAlign:d!==void 0?d:ds,textBaseline:u!==void 0?u:Tr},this.text_=c!==void 0?Array.isArray(c)?c.reduce((f,g,w)=>f+=w%2?" ":g,""):c:"",this.textOffsetX_=r!==void 0?this.pixelRatio_*r:0,this.textOffsetY_=o!==void 0?this.pixelRatio_*o:0,this.textRotateWithView_=a!==void 0?a:!1,this.textRotation_=l!==void 0?l:0,this.textScale_=[this.pixelRatio_*h[0],this.pixelRatio_*h[1]]}}}const pt=.5;function Nx(i,e,t,n,s,r,o){const a=i[0]*pt,l=i[1]*pt,h=Ne(a,l);h.imageSmoothingEnabled=!1;const c=h.canvas,d=new Fx(h,pt,s,null,o),u=t.length,f=Math.floor((256*256*256-1)/u),g={};for(let M=1;M<=u;++M){const m=t[M-1],T=m.getStyleFunction()||n;if(!T)continue;let y=T(m,r);if(!y)continue;Array.isArray(y)||(y=[y]);const _=(M*f).toString(16).padStart(7,"#00000");for(let p=0,R=y.length;p<R;++p){const C=y[p],I=C.getGeometryFunction()(m);if(!I||!Xe(s,I.getExtent()))continue;const D=C.clone(),j=D.getFill();j&&j.setColor(_);const X=D.getStroke();X&&(X.setColor(_),X.setLineDash(null)),D.setText(void 0);const U=C.getImage();if(U){const K=U.getImageSize();if(!K)continue;const V=Ne(K[0],K[1],void 0,{alpha:!1}),he=V.canvas;V.fillStyle=_,V.fillRect(0,0,he.width,he.height),D.setImage(new eo({img:he,anchor:U.getAnchor(),anchorXUnits:"pixels",anchorYUnits:"pixels",offset:U.getOrigin(),opacity:1,size:U.getSize(),scale:U.getScale(),rotation:U.getRotation(),rotateWithView:U.getRotateWithView()}))}const Me=D.getZIndex()||0;let A=g[Me];A||(A={},g[Me]=A,A.Polygon=[],A.Circle=[],A.LineString=[],A.Point=[]);const N=I.getType();if(N==="GeometryCollection"){const K=I.getGeometriesArrayRecursive();for(let V=0,he=K.length;V<he;++V){const ae=K[V];A[ae.getType().replace("Multi","")].push(ae,D)}}else A[N.replace("Multi","")].push(I,D)}}const w=Object.keys(g).map(Number).sort(mi);for(let M=0,m=w.length;M<m;++M){const T=g[w[M]];for(const y in T){const x=T[y];for(let _=0,p=x.length;_<p;_+=2){d.setStyle(x[_+1]);for(let R=0,C=e.length;R<C;++R)d.setTransform(e[R]),d.drawGeometry(x[_])}}}return h.getImageData(0,0,c.width,c.height)}function Gx(i,e,t){const n=[];if(t){const s=Math.floor(Math.round(i[0])*pt),r=Math.floor(Math.round(i[1])*pt),o=(we(s,0,t.width-1)+we(r,0,t.height-1)*t.width)*4,a=t.data[o],l=t.data[o+1],c=t.data[o+2]+256*(l+256*a),d=Math.floor((256*256*256-1)/e.length);c&&c%d===0&&n.push(e[c/d-1])}return n}const Wx=.5,Sd={Point:qx,LineString:Xx,Polygon:$x,MultiPoint:Zx,MultiLineString:Ux,MultiPolygon:Yx,GeometryCollection:Vx,Circle:Bx};function zx(i,e){return parseInt(te(i),10)-parseInt(te(e),10)}function Hx(i,e){const t=na(i,e);return t*t}function na(i,e){return Wx*i/e}function Bx(i,e,t,n,s){const r=t.getFill(),o=t.getStroke();if(r||o){const l=i.getBuilder(t.getZIndex(),"Circle");l.setFillStrokeStyle(r,o),l.drawCircle(e,n)}const a=t.getText();if(a&&a.getText()){const l=(s||i).getBuilder(t.getZIndex(),"Text");l.setTextStyle(a),l.drawText(e,n)}}function xh(i,e,t,n,s,r,o){let a=!1;const l=t.getImage();if(l){const h=l.getImageState();h==H.LOADED||h==H.ERROR?l.unlistenImageChange(s):(h==H.IDLE&&l.load(),l.listenImageChange(s),a=!0)}return jx(i,e,t,n,r,o),a}function jx(i,e,t,n,s,r){const o=t.getGeometryFunction()(e);if(!o)return;const a=o.simplifyTransformed(n,s);if(t.getRenderer())Id(i,a,t,e);else{const h=Sd[a.getType()];h(i,a,t,e,r)}}function Id(i,e,t,n){if(e.getType()=="GeometryCollection"){const r=e.getGeometries();for(let o=0,a=r.length;o<a;++o)Id(i,r[o],t,n);return}i.getBuilder(t.getZIndex(),"Default").drawCustom(e,n,t.getRenderer(),t.getHitDetectionRenderer())}function Vx(i,e,t,n,s){const r=e.getGeometriesArray();let o,a;for(o=0,a=r.length;o<a;++o){const l=Sd[r[o].getType()];l(i,r[o],t,n,s)}}function Xx(i,e,t,n,s){const r=t.getStroke();if(r){const a=i.getBuilder(t.getZIndex(),"LineString");a.setFillStrokeStyle(null,r),a.drawLineString(e,n)}const o=t.getText();if(o&&o.getText()){const a=(s||i).getBuilder(t.getZIndex(),"Text");a.setTextStyle(o),a.drawText(e,n)}}function Ux(i,e,t,n,s){const r=t.getStroke();if(r){const a=i.getBuilder(t.getZIndex(),"LineString");a.setFillStrokeStyle(null,r),a.drawMultiLineString(e,n)}const o=t.getText();if(o&&o.getText()){const a=(s||i).getBuilder(t.getZIndex(),"Text");a.setTextStyle(o),a.drawText(e,n)}}function Yx(i,e,t,n,s){const r=t.getFill(),o=t.getStroke();if(o||r){const l=i.getBuilder(t.getZIndex(),"Polygon");l.setFillStrokeStyle(r,o),l.drawMultiPolygon(e,n)}const a=t.getText();if(a&&a.getText()){const l=(s||i).getBuilder(t.getZIndex(),"Text");l.setTextStyle(a),l.drawText(e,n)}}function qx(i,e,t,n,s){const r=t.getImage(),o=t.getText();let a;if(r){if(r.getImageState()!=H.LOADED)return;let l=i;if(s){const c=r.getDeclutterMode();if(c!=="none")if(l=s,c==="obstacle"){const d=i.getBuilder(t.getZIndex(),"Image");d.setImageStyle(r,a),d.drawPoint(e,n)}else o&&o.getText()&&(a={})}const h=l.getBuilder(t.getZIndex(),"Image");h.setImageStyle(r,a),h.drawPoint(e,n)}if(o&&o.getText()){let l=i;s&&(l=s);const h=l.getBuilder(t.getZIndex(),"Text");h.setTextStyle(o,a),h.drawText(e,n)}}function Zx(i,e,t,n,s){const r=t.getImage(),o=t.getText();let a;if(r){if(r.getImageState()!=H.LOADED)return;let l=i;if(s){const c=r.getDeclutterMode();if(c!=="none")if(l=s,c==="obstacle"){const d=i.getBuilder(t.getZIndex(),"Image");d.setImageStyle(r,a),d.drawMultiPoint(e,n)}else o&&o.getText()&&(a={})}const h=l.getBuilder(t.getZIndex(),"Image");h.setImageStyle(r,a),h.drawMultiPoint(e,n)}if(o&&o.getText()){let l=i;s&&(l=s);const h=l.getBuilder(t.getZIndex(),"Text");h.setTextStyle(o,a),h.drawText(e,n)}}function $x(i,e,t,n,s){const r=t.getFill(),o=t.getStroke();if(r||o){const l=i.getBuilder(t.getZIndex(),"Polygon");l.setFillStrokeStyle(r,o),l.drawPolygon(e,n)}const a=t.getText();if(a&&a.getText()){const l=(s||i).getBuilder(t.getZIndex(),"Text");l.setTextStyle(a),l.drawText(e,n)}}class Jx extends Ld{constructor(e){super(e),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=nt(),this.wrappedRenderedExtent_=nt(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedRenderOrder_=null,this.replayGroup_=null,this.replayGroupChanged=!0,this.declutterExecutorGroup=null,this.clipping=!0,this.compositionContext_=null,this.opacity_=1}renderWorlds(e,t,n){const s=t.extent,r=t.viewState,o=r.center,a=r.resolution,l=r.projection,h=r.rotation,c=l.getExtent(),d=this.getLayer().getSource(),u=t.pixelRatio,f=t.viewHints,g=!(f[Le.ANIMATING]||f[Le.INTERACTING]),w=this.compositionContext_,M=Math.round(t.size[0]*u),m=Math.round(t.size[1]*u),T=d.getWrapX()&&l.canWrapX(),y=T?Q(c):null,x=T?Math.ceil((s[2]-c[2])/y)+1:1;let _=T?Math.floor((s[0]-c[0])/y):0;do{const p=this.getRenderTransform(o,a,h,u,M,m,_*y);e.execute(w,1,p,h,g,void 0,n)}while(++_<x)}setupCompositionContext_(){if(this.opacity_!==1){const e=Ne(this.context.canvas.width,this.context.canvas.height,Mh);this.compositionContext_=e}else this.compositionContext_=this.context}releaseCompositionContext_(){if(this.opacity_!==1){const e=this.context.globalAlpha;this.context.globalAlpha=this.opacity_,this.context.drawImage(this.compositionContext_.canvas,0,0),this.context.globalAlpha=e,Nr(this.compositionContext_),Mh.push(this.compositionContext_.canvas),this.compositionContext_=null}}renderDeclutter(e){this.declutterExecutorGroup&&(this.setupCompositionContext_(),this.renderWorlds(this.declutterExecutorGroup,e,e.declutterTree),this.releaseCompositionContext_())}renderFrame(e,t){const n=e.pixelRatio,s=e.layerStatesArray[e.layerIndex];Bu(this.pixelTransform,1/n,1/n),xa(this.inversePixelTransform,this.pixelTransform);const r=ic(this.pixelTransform);this.useContainer(t,r,this.getBackground(e));const o=this.context,a=o.canvas,l=this.replayGroup_,h=this.declutterExecutorGroup;let c=l&&!l.isEmpty()||h&&!h.isEmpty();if(!c&&!(this.getLayer().hasListener(Et.PRERENDER)||this.getLayer().hasListener(Et.POSTRENDER)))return null;const d=Math.round(e.size[0]*n),u=Math.round(e.size[1]*n);a.width!=d||a.height!=u?(a.width=d,a.height=u,a.style.transform!==r&&(a.style.transform=r)):this.containerReused||o.clearRect(0,0,d,u),this.preRender(o,e);const f=e.viewState;f.projection,this.opacity_=s.opacity,this.setupCompositionContext_();let g=!1;if(c&&s.extent&&this.clipping){const w=Ii(s.extent);c=Xe(w,e.extent),g=c&&!Ct(w,e.extent),g&&this.clipUnrotated(this.compositionContext_,e,w)}return c&&this.renderWorlds(l,e),g&&this.compositionContext_.restore(),this.releaseCompositionContext_(),this.postRender(o,e),this.renderedRotation_!==f.rotation&&(this.renderedRotation_=f.rotation,this.hitDetectionImageData_=null),this.container}getFeatures(e){return new Promise(t=>{if(!this.hitDetectionImageData_&&!this.animatingOrInteracting_){const n=[this.context.canvas.width,this.context.canvas.height];pe(this.pixelTransform,n);const s=this.renderedCenter_,r=this.renderedResolution_,o=this.renderedRotation_,a=this.renderedProjection_,l=this.wrappedRenderedExtent_,h=this.getLayer(),c=[],d=n[0]*pt,u=n[1]*pt;c.push(this.getRenderTransform(s,r,o,pt,d,u,0).slice());const f=h.getSource(),g=a.getExtent();if(f.getWrapX()&&a.canWrapX()&&!Ct(g,l)){let w=l[0];const M=Q(g);let m=0,T;for(;w<g[0];)--m,T=M*m,c.push(this.getRenderTransform(s,r,o,pt,d,u,T).slice()),w+=M;for(m=0,w=l[2];w>g[2];)++m,T=M*m,c.push(this.getRenderTransform(s,r,o,pt,d,u,T).slice()),w-=M}this.hitDetectionImageData_=Nx(n,c,this.renderedFeatures_,h.getStyleFunction(),l,r,o)}t(Gx(e,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(e,t,n,s,r){if(!this.replayGroup_)return;const o=t.viewState.resolution,a=t.viewState.rotation,l=this.getLayer(),h={},c=function(f,g,w){const M=te(f),m=h[M];if(m){if(m!==!0&&w<m.distanceSq){if(w===0)return h[M]=!0,r.splice(r.lastIndexOf(m),1),s(f,l,g);m.geometry=g,m.distanceSq=w}}else{if(w===0)return h[M]=!0,s(f,l,g);r.push(h[M]={feature:f,layer:l,geometry:g,distanceSq:w,callback:s})}};let d;const u=[this.replayGroup_];return this.declutterExecutorGroup&&u.push(this.declutterExecutorGroup),u.some(f=>d=f.forEachFeatureAtCoordinate(e,o,a,n,c,f===this.declutterExecutorGroup&&t.declutterTree?t.declutterTree.all().map(g=>g.value):null)),d}handleFontsChanged(){const e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()}handleStyleImageChange_(e){this.renderIfReadyAndVisible()}prepareFrame(e){const t=this.getLayer(),n=t.getSource();if(!n)return!1;const s=e.viewHints[Le.ANIMATING],r=e.viewHints[Le.INTERACTING],o=t.getUpdateWhileAnimating(),a=t.getUpdateWhileInteracting();if(this.ready&&!o&&s||!a&&r)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;const l=e.extent,h=e.viewState,c=h.projection,d=h.resolution,u=e.pixelRatio,f=t.getRevision(),g=t.getRenderBuffer();let w=t.getRenderOrder();w===void 0&&(w=zx);const M=h.center.slice(),m=ss(l,g*d),T=m.slice(),y=[m.slice()],x=c.getExtent();if(n.getWrapX()&&c.canWrapX()&&!Ct(x,e.extent)){const A=Q(x),N=Math.max(Q(m)/2,A);m[0]=x[0]-N,m[2]=x[2]+N,Yh(M,c);const K=Xh(y[0],c);K[0]<x[0]&&K[2]<x[2]?y.push([K[0]+A,K[1],K[2]+A,K[3]]):K[0]>x[0]&&K[2]>x[2]&&y.push([K[0]-A,K[1],K[2]-A,K[3]])}if(this.ready&&this.renderedResolution_==d&&this.renderedRevision_==f&&this.renderedRenderOrder_==w&&Ct(this.wrappedRenderedExtent_,m))return pi(this.renderedExtent_,T)||(this.hitDetectionImageData_=null,this.renderedExtent_=T),this.renderedCenter_=M,this.replayGroupChanged=!1,!0;this.replayGroup_=null;const _=new wh(na(d,u),m,d,u);let p;this.getLayer().getDeclutter()&&(p=new wh(na(d,u),m,d,u));let R;for(let A=0,N=y.length;A<N;++A)n.loadFeatures(y[A],d,c);const C=Hx(d,u);let I=!0;const D=A=>{let N;const K=A.getStyleFunction()||t.getStyleFunction();if(K&&(N=K(A,d)),N){const V=this.renderFeature(A,C,N,_,R,p);I=I&&!V}},j=tc(m),X=n.getFeaturesInExtent(j);w&&X.sort(w);for(let A=0,N=X.length;A<N;++A)D(X[A]);this.renderedFeatures_=X,this.ready=I;const U=_.finish(),Me=new yh(m,d,u,n.getOverlaps(),U,t.getRenderBuffer());return p&&(this.declutterExecutorGroup=new yh(m,d,u,n.getOverlaps(),p.finish(),t.getRenderBuffer())),this.renderedResolution_=d,this.renderedRevision_=f,this.renderedRenderOrder_=w,this.renderedExtent_=T,this.wrappedRenderedExtent_=m,this.renderedCenter_=M,this.renderedProjection_=c,this.replayGroup_=Me,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(e,t,n,s,r,o){if(!n)return!1;let a=!1;if(Array.isArray(n))for(let l=0,h=n.length;l<h;++l)a=xh(s,e,n[l],t,this.boundHandleStyleImageChange_,r,o)||a;else a=xh(s,e,n,t,this.boundHandleStyleImageChange_,r,o);return a}}class _h extends Cx{constructor(e){super(e)}createRenderer(){return new Jx(this)}}class ph{constructor(e){this.rbush_=new Md(e),this.items_={}}insert(e,t){const n={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3],value:t};this.rbush_.insert(n),this.items_[te(t)]=n}load(e,t){const n=new Array(t.length);for(let s=0,r=t.length;s<r;s++){const o=e[s],a=t[s],l={minX:o[0],minY:o[1],maxX:o[2],maxY:o[3],value:a};n[s]=l,this.items_[te(a)]=l}this.rbush_.load(n)}remove(e){const t=te(e),n=this.items_[t];return delete this.items_[t],this.rbush_.remove(n)!==null}update(e,t){const n=this.items_[te(t)],s=[n.minX,n.minY,n.maxX,n.maxY];Fi(s,e)||(this.remove(t),this.insert(e,t))}getAll(){return this.rbush_.all().map(function(t){return t.value})}getInExtent(e){const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this.rbush_.search(t).map(function(s){return s.value})}forEach(e){return this.forEach_(this.getAll(),e)}forEachInExtent(e,t){return this.forEach_(this.getInExtent(e),t)}forEach_(e,t){let n;for(let s=0,r=e.length;s<r;s++)if(n=t(e[s]),n)return n;return n}isEmpty(){return ki(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(e){const t=this.rbush_.toJSON();return Vt(t.minX,t.minY,t.maxX,t.maxY,e)}concat(e){this.rbush_.load(e.rbush_.all());for(const t in e.items_)this.items_[t]=e.items_[t]}}class Ja extends Tt{constructor(e){super(),this.projection=ie(e.projection),this.attributions_=Ch(e.attributions),this.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,this.loading=!1,this.state_=e.state!==void 0?e.state:"ready",this.wrapX_=e.wrapX!==void 0?e.wrapX:!1,this.interpolate_=!!e.interpolate,this.viewResolver=null,this.viewRejector=null;const t=this;this.viewPromise_=new Promise(function(n,s){t.viewResolver=n,t.viewRejector=s})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(e){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(e){this.attributions_=Ch(e),this.changed()}setState(e){this.state_=e,this.changed()}}function Ch(i){return i?Array.isArray(i)?function(e){return i}:typeof i=="function"?i:function(e){return[i]}:null}const ut={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function Qx(i,e){return[[-1/0,-1/0,1/0,1/0]]}function e_(i,e){return[i]}let t_=!1;function i_(i,e,t,n,s,r,o){const a=new XMLHttpRequest;a.open("GET",typeof i=="function"?i(t,n,s):i,!0),e.getType()=="arraybuffer"&&(a.responseType="arraybuffer"),a.withCredentials=t_,a.onload=function(l){if(!a.status||a.status>=200&&a.status<300){const h=e.getType();let c;h=="json"?c=JSON.parse(a.responseText):h=="text"?c=a.responseText:h=="xml"?(c=a.responseXML,c||(c=new DOMParser().parseFromString(a.responseText,"application/xml"))):h=="arraybuffer"&&(c=a.response),c?r(e.readFeatures(c,{extent:t,featureProjection:s}),e.readProjection(c)):o()}else o()},a.onerror=o,a.send()}function vh(i,e){return function(t,n,s,r,o){const a=this;i_(i,e,t,n,s,function(l,h){a.addFeatures(l),r!==void 0&&r(l)},o||yn)}}class ni extends At{constructor(e,t,n){super(e),this.feature=t,this.features=n}}class Rh extends Ja{constructor(e){e=e||{},super({attributions:e.attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:e.wrapX!==void 0?e.wrapX:!0}),this.on,this.once,this.un,this.loader_=yn,this.format_=e.format,this.overlaps_=e.overlaps===void 0?!0:e.overlaps,this.url_=e.url,e.loader!==void 0?this.loader_=e.loader:this.url_!==void 0&&(J(this.format_,"`format` must be set when `url` is set"),this.loader_=vh(this.url_,this.format_)),this.strategy_=e.strategy!==void 0?e.strategy:Qx;const t=e.useSpatialIndex!==void 0?e.useSpatialIndex:!0;this.featuresRtree_=t?new ph:null,this.loadedExtentsRtree_=new ph,this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null;let n,s;Array.isArray(e.features)?s=e.features:e.features&&(n=e.features,s=n.getArray()),!t&&n===void 0&&(n=new ct(s)),s!==void 0&&this.addFeaturesInternal(s),n!==void 0&&this.bindFeaturesCollection_(n)}addFeature(e){this.addFeatureInternal(e),this.changed()}addFeatureInternal(e){const t=te(e);if(!this.addToIndex_(t,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(t,e);const n=e.getGeometry();if(n){const s=n.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(s,e)}else this.nullGeometryFeatures_[t]=e;this.dispatchEvent(new ni(ut.ADDFEATURE,e))}setupChangeEvents_(e,t){t instanceof Be||(this.featureChangeKeys_[e]=[q(t,W.CHANGE,this.handleFeatureChange_,this),q(t,Di.PROPERTYCHANGE,this.handleFeatureChange_,this)])}addToIndex_(e,t){let n=!0;if(t.getId()!==void 0){const s=String(t.getId());if(!(s in this.idIndex_))this.idIndex_[s]=t;else if(t instanceof Be){const r=this.idIndex_[s];r instanceof Be?Array.isArray(r)?r.push(t):this.idIndex_[s]=[r,t]:n=!1}else n=!1}return n&&(J(!(e in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[e]=t),n}addFeatures(e){this.addFeaturesInternal(e),this.changed()}addFeaturesInternal(e){const t=[],n=[],s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r],l=te(a);this.addToIndex_(l,a)&&n.push(a)}for(let r=0,o=n.length;r<o;r++){const a=n[r],l=te(a);this.setupChangeEvents_(l,a);const h=a.getGeometry();if(h){const c=h.getExtent();t.push(c),s.push(a)}else this.nullGeometryFeatures_[l]=a}if(this.featuresRtree_&&this.featuresRtree_.load(t,s),this.hasListener(ut.ADDFEATURE))for(let r=0,o=n.length;r<o;r++)this.dispatchEvent(new ni(ut.ADDFEATURE,n[r]))}bindFeaturesCollection_(e){let t=!1;this.addEventListener(ut.ADDFEATURE,function(n){t||(t=!0,e.push(n.feature),t=!1)}),this.addEventListener(ut.REMOVEFEATURE,function(n){t||(t=!0,e.remove(n.feature),t=!1)}),e.addEventListener(je.ADD,n=>{t||(t=!0,this.addFeature(n.element),t=!1)}),e.addEventListener(je.REMOVE,n=>{t||(t=!0,this.removeFeature(n.element),t=!1)}),this.featuresCollection_=e}clear(e){if(e){for(const n in this.featureChangeKeys_)this.featureChangeKeys_[n].forEach(ce);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){const n=s=>{this.removeFeatureInternal(s)};this.featuresRtree_.forEach(n);for(const s in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[s])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};const t=new ni(ut.CLEAR);this.dispatchEvent(t),this.changed()}forEachFeature(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureAtCoordinateDirect(e,t){const n=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(n,function(s){const r=s.getGeometry();if(r instanceof Be||r.intersectsCoordinate(e))return t(s)})}forEachFeatureInExtent(e,t){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureIntersectingExtent(e,t){return this.forEachFeatureInExtent(e,function(n){const s=n.getGeometry();if(s instanceof Be||s.intersectsExtent(e)){const r=t(n);if(r)return r}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),ki(this.nullGeometryFeatures_)||bt(e,Object.values(this.nullGeometryFeatures_))),e}getFeaturesAtCoordinate(e){const t=[];return this.forEachFeatureAtCoordinateDirect(e,function(n){t.push(n)}),t}getFeaturesInExtent(e,t){if(this.featuresRtree_){if(!(t&&t.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(e);const s=Su(e,t);return[].concat(...s.map(r=>this.featuresRtree_.getInExtent(r)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(e,t){const n=e[0],s=e[1];let r=null;const o=[NaN,NaN];let a=1/0;const l=[-1/0,-1/0,1/0,1/0];return t=t||is,this.featuresRtree_.forEachInExtent(l,function(h){if(t(h)){const c=h.getGeometry(),d=a;if(a=c instanceof Be?0:c.closestPointXY(n,s,o,a),a<d){r=h;const u=Math.sqrt(a);l[0]=n-u,l[1]=s-u,l[2]=n+u,l[3]=s+u}}}),r}getExtent(e){return this.featuresRtree_.getExtent(e)}getFeatureById(e){const t=this.idIndex_[e.toString()];return t!==void 0?t:null}getFeatureByUid(e){const t=this.uidIndex_[e];return t!==void 0?t:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(e){const t=e.target,n=te(t),s=t.getGeometry();if(!s)n in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(t),this.nullGeometryFeatures_[n]=t);else{const o=s.getExtent();n in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[n],this.featuresRtree_&&this.featuresRtree_.insert(o,t)):this.featuresRtree_&&this.featuresRtree_.update(o,t)}const r=t.getId();if(r!==void 0){const o=r.toString();this.idIndex_[o]!==t&&(this.removeFromIdIndex_(t),this.idIndex_[o]=t)}else this.removeFromIdIndex_(t),this.uidIndex_[n]=t;this.changed(),this.dispatchEvent(new ni(ut.CHANGEFEATURE,t))}hasFeature(e){const t=e.getId();return t!==void 0?t in this.idIndex_:te(e)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&ki(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0}loadFeatures(e,t,n){const s=this.loadedExtentsRtree_,r=this.strategy_(e,t,n);for(let o=0,a=r.length;o<a;++o){const l=r[o];s.forEachInExtent(l,function(c){return Ct(c.extent,l)})||(++this.loadingExtentsCount_,this.dispatchEvent(new ni(ut.FEATURESLOADSTART)),this.loader_.call(this,l,t,n,c=>{--this.loadingExtentsCount_,this.dispatchEvent(new ni(ut.FEATURESLOADEND,void 0,c))},()=>{--this.loadingExtentsCount_,this.dispatchEvent(new ni(ut.FEATURESLOADERROR))}),s.insert(l,{extent:l.slice()}))}this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(e){const t=this.loadedExtentsRtree_;let n;t.forEachInExtent(e,function(s){if(Fi(s.extent,e))return n=s,!0}),n&&t.remove(n)}removeFeature(e){if(!e)return;const t=te(e);t in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[t]:this.featuresRtree_&&this.featuresRtree_.remove(e),this.removeFeatureInternal(e)&&this.changed()}removeFeatureInternal(e){const t=te(e),n=this.featureChangeKeys_[t];if(!n)return;n.forEach(ce),delete this.featureChangeKeys_[t];const s=e.getId();return s!==void 0&&delete this.idIndex_[s.toString()],delete this.uidIndex_[t],this.dispatchEvent(new ni(ut.REMOVEFEATURE,e)),e}removeFromIdIndex_(e){let t=!1;for(const n in this.idIndex_){const s=this.idIndex_[n];if(e instanceof Be&&Array.isArray(s)&&s.includes(e))s.splice(s.indexOf(e),1);else if(this.idIndex_[n]===e){delete this.idIndex_[n],t=!0;break}}return t}setLoader(e){this.loader_=e}setUrl(e){J(this.format_,"`format` must be set when `url` is set"),this.url_=e,this.setLoader(vh(e,this.format_))}}const bh={ACTIVE_ACTION_CHANGED:"vl-active-action-changed",LAYER_VISIBLE_CHANGED:"vl-layer-visible-changed"},n_={ACTION:"action"},r1={MEASURE:"measure"};class Qa extends Ac{static get CLICK_COUNT_TIMEOUT(){return 300}constructor(e={}){const{disableRotation:t,disableMouseWheelZoom:n,disableKeyboard:s}=e,r=!t,a=Sc({altShiftDragRotate:r,pinchRotate:r,mouseWheelZoom:!n,keyboard:!s});if(e&&e.interactions&&e.interactions.forEach(l=>a.push(l)),e.interactions=a,super(e),this.actions=[],e.actions.forEach(l=>{this.addAction(l)}),setTimeout(()=>{this.activateDefaultAction()}),!e.disableEscapeKey){const l=h=>{if(h&&h.keyCode&&h.keyCode===27){const c=this.getCurrentActiveAction();c?c.stop&&c.stop():this.activateDefaultAction()}};document.body.removeEventListener("keydown",l),document.body.addEventListener("keydown",l)}}getDefaultActiveAction(){return this.actions&&this.actions.find(e=>e.element?._defaultActive)}getCurrentActiveAction(){return this.actions&&this.actions.find(e=>e.element._active)}getActionWithIdentifier(e){return this.actions&&this.actions.find(t=>t.element.identifier===e)}getControlsOfType(e){return this.getControls().getArray().filter(n=>n.get("element")&&n.get("element").type===e)}getActionControls(){return this.getControlsOfType(n_.ACTION)}getActionControlWithIdentifier(e){const t=this.getActionControls();return t&&t.find(n=>n.get("element")&&n.get("element").identifier===e)}getLayerActions(e){return this.actions&&this.actions.filter(t=>t.layer===e)}activateAction(e){this.timeout=setTimeout(()=>{e?.activate()},Qa.CLICK_COUNT_TIMEOUT)}deactivateCurrentAction(){const e=this.getCurrentActiveAction();e&&(e.deactivate(),clearTimeout(this.timeout))}addAction(e){this.actions.push(e),e.map=this,e.interactions.forEach(t=>{this.addInteraction(t),t.map=e.map})}removeAction(e){this.getCurrentActiveAction()===e&&(e===this.getDefaultActiveAction()?e.element.deactivate():this.activateDefaultAction()),e.interactions.forEach(t=>{this.removeInteraction(t)}),e.element.reset(),this.actions.splice(this.actions.indexOf(e),1)}activateDefaultAction(){const e=this.getDefaultActiveAction();e&&e.element.activate()}}class s_ extends Qa{constructor(e={}){e.layers=[e.customLayers.baseLayerGroup,e.customLayers.overlayGroup],e.controls=[new vc,new hg({minWidth:128})].concat(e.controls||[]),e.view=new lt({extent:e.projection.getExtent(),projection:e.projection,maxZoom:16,minZoom:2,center:mt(e.projection.getExtent()),zoom:2,...e.view}),super(e),(e.defaultZoom===void 0||e.defaultZoom===!0)&&this.addControl(new Fa),this.projection=e.projection,this.view=e.view,this.geoJSONFormat=new od({dataProjection:this.projection}),this.custom=e.custom||{},e.customLayers.overviewMapLayers&&e.customLayers.overviewMapLayers.length>0&&this.createOverviewMapControl(e),this.baseLayers=e.customLayers.baseLayerGroup.getLayers().getArray(),this.maxZoomViewToExtent=e.maxZoomViewToExtent||16}createOverviewMapControl(e){const t=this,n=s=>{const r=l=>{let h=0;return t.baseLayers.forEach((c,d)=>{c.getVisible()&&(h=d)}),l[h+1>=l.length?0:h+1]};s||(s=r(t.baseLayers)),t.baseLayers.forEach(l=>l.setVisible(l==s));const o=t.overviewMapControl.getOverviewMap().getLayers().getArray(),a=r(o);o.forEach(l=>l.setVisible(l==a)),t.render(),t.overviewMapControl.getOverviewMap().render()};this.overviewMapLayers=e.customLayers.overviewMapLayers,this.overviewMapControl=new ag({layers:this.overviewMapLayers,collapsed:!1,view:new lt({projection:this.projection})}),this.overviewMapControl.element.addEventListener("click",()=>n(),!1),this.custom.toggleBaseLayer=n}addBaseLayerAndOverlayMapLayer(e,t){e.setVisible(this.baseLayers.length===0),this.baseLayers.push(e),this.overviewMapControl?this.overviewMapControl.getOverviewMap().getLayers().getArray().push(t):this.createOverviewMapControl({customLayers:{overviewMapLayers:[t]}}),t.setVisible(this.overviewMapControl.getOverviewMap().getLayers().getArray().length===2)}getBaseLayers(){return this.getLayerGroup().getLayers().getArray()[0].getLayers().getArray()}getOverlayLayers(){return this._getOverlayLayersCollection().getArray()}_getOverlayLayersCollection(){return this.getLayerGroup().getLayers().getArray()[1].getLayers()}addOverlayLayer(e){this._getOverlayLayersCollection().push(e)}removeOverlayLayer(e){this._getOverlayLayersCollection().remove(e)}initializeView(e,t){const n=ec(vy(),Ry(),this.projection.getCode());this.getView().fit(n,{size:this.getSize()}),this.zoomViewToExtent(this.getView(),e,t)}zoomToExtent(e,t){this.zoomViewToExtent(this.getView(),e,t)}zoomViewToExtent(e,t,n){t&&e.fit(t,{size:this.getSize()}),(n||this.maxZoomViewToExtent)&&e.getZoom()>(n||this.maxZoomViewToExtent)&&e.setZoom(n||this.maxZoomViewToExtent)}zoomToGeometry(e,t){const n={type:"FeatureCollection",features:[{type:"Feature",geometry:e}]};this.zoomToExtent(this.geoJSONFormat.readFeatures(n)[0].getGeometry().getExtent(),t)}showInfo(e,t){const n=document.createElement("div");n.setAttribute("class","close"),n.onclick=()=>event.currentTarget.parentNode.remove();const s=document.createElement("div");s.innerHTML=`<span class='content'>${e}</span><div class='arrow'></div>`,s.setAttribute("class","info-tooltip"),s.appendChild(n);const r=new Pc({offset:[0,-5],positioning:"bottom-center",element:s});this.addOverlay(r),r.setPosition(t),s.parentNode.style.position="fixed"}}var r_=Object.getOwnPropertyDescriptor,o_=(i,e,t,n)=>{for(var s=n>1?void 0:n?r_(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=o(s)||s);return s};let sa=class extends kr{connectedCallback(){super.connectedCallback(),this._setStyleOnParent()}get name(){return this.getAttribute("name")}get color(){return this.getAttribute("color")||"rgba(2, 85, 204, 0.8)"}get borderColor(){return this.getAttribute("border-color")||"rgba(2, 85, 204, 1)"}get borderSize(){return this.getAttribute("border-size")||1}get textColor(){return this.getAttribute("text-color")||"#FFF"}get textBackgroundColor(){return this.getAttribute("text-background-color")||"rgba(0, 0, 0, 0)"}get textBorderColor(){return this.getAttribute("text-border-color")||"rgba(255, 255, 255, 0)"}get textBorderSize(){return Number(this.getAttribute("text-border-size")||1)}get textSize(){return this.getAttribute("text-size")||"10px"}get textFeatureAttributeName(){return this.getAttribute("text-feature-attribute-name")||null}get textOffsetX(){return this.getAttribute("text-offset-x")||0}get textOffsetY(){return this.getAttribute("text-offset-y")||0}get style(){return(i,e)=>this.appliesTo(i)?this._styleFunction(i,e):null}get _styleFunction(){return(i,e)=>{const t={fill:new Mt({color:this.color}),stroke:new St({color:this.borderColor,width:this.borderSize}),text:void 0};return t.text=this._getTextStyle(i),new it(t)}}_getTextStyle(i,e){return new to({font:`${this.textSize} "Flanders Art Sans",sans-serif`,text:this.featureLabelFunction(i),fill:new Mt({color:e||this.textColor}),stroke:new St({color:this.textBorderColor,width:this.textBorderSize}),backgroundFill:new Mt({color:this.textBackgroundColor}),offsetX:this.textOffsetX,offsetY:this.textOffsetY})}appliesTo(i){return!0}get featureLabelFunction(){return this.textFeatureAttributeName?i=>i.get(this.textFeatureAttributeName):()=>""}_featureZIndex(i){return i&&i.get?i.get("zIndex"):0}_hasUniqueStyles(i){const e=this._getStyles(i);return e&&this._containsObject(e)&&this._areIdentical(e)}_containsStyle(i){return this._containsObject(i.map(e=>e.getStyle()))}_getStyles(i){return i.map(e=>e.getStyle())}_containsObject(i){return i.some(e=>!!e)}_areIdentical(i){return i.every((e,t,n)=>e==n[0])}_setStyleOnParent(){this.parentElement&&customElements.whenDefined(this.parentElement.tagName.toLowerCase()).then(()=>{this.parentElement.style=this})}};sa=o_([la("vl-map-layer-style")],sa);class Ar extends kr{static get _observedAttributes(){return["hidden","opacity"]}constructor(){super(),Ar._counter=0,this.__counter=++Ar._counter,this.__ready=!1}async connectedCallback(){super.connectedCallback(),this.__setIsLayerMarkerAttribute(),this.mapElement&&(await this.mapElement.ready,this.mapElement.addLayer(this._layer)),this.__styleCount=this.getStyleCount(),this.__markAsReady()}getStyleCount(){const e=this.querySelectorAll(":scope > *");return Array.from(e)?.filter(t=>t instanceof sa).length}disconnectedCallback(){this._layer?.dispose()}static get _counter(){return this.__counter}static set _counter(e){this.__counter=e}get layer(){return this._layer}get source(){return this._source}get visible(){return this._layer?.getVisible()}get title(){return this.get("title")}set visible(e){this._layer?.setVisible(e),this.rerender(),this.mapElement&&this.mapElement.handleLayerVisibilityChange(this)}get opacity(){return this._layer?.getOpacity()}set opacity(e){this._layer?.setOpacity(e)}get mapElement(){return this.parentNode&&this.parentNode instanceof Sn?this.parentNode:null}get ready(){return this.__ready}get _name(){return this.getAttribute("name")||"kaartlaag"}get _minResolution(){return this.getAttribute("min-resolution")||0}get _maxResolution(){return this.getAttribute("max-resolution")||1/0}get _opacity(){return Number(this.getAttribute("opacity")||1)}get _visible(){return this.getAttribute("hidden")==null}get _styles(){return this.__styles.length>this.__styleCount&&(this.__styles=Array.from(new Set(this.__styles))),this.__styles}set _styles(e){this.__styles=e}get(e){return this._layer.get(e)}rerender(){this.mapElement&&this.mapElement.rerender()}isVisibleAtResolution(e){const t=parseFloat(this._layer.getMinResolution()),n=parseFloat(this._layer.getMaxResolution());return e>=t&&e<n}_hiddenChangedCallback(e,t){this._layer&&(this.visible=t==null)}_opacityChangedCallback(e,t){this.opacity=Number(t||1)}__setIsLayerMarkerAttribute(){this.setAttribute("is-layer","true")}__markAsReady(){this.__ready=!0}}const a_=ha`
    @charset "UTF-8";
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    @font-face {
        font-family: 'Glyphicons Halflings';
        src: url('../fonts/bootstrap/glyphicons-halflings-regular.eot');
        src: url('../fonts/bootstrap/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),
            url('../fonts/bootstrap/glyphicons-halflings-regular.woff2') format('woff2'),
            url('../fonts/bootstrap/glyphicons-halflings-regular.woff') format('woff'),
            url('../fonts/bootstrap/glyphicons-halflings-regular.ttf') format('truetype'),
            url('../fonts/bootstrap/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
    }
    .glyphicon,
    .info-tooltip .close,
    .info-tooltip .icon {
        position: relative;
        top: 1px;
        display: inline-block;
        font-family: 'Glyphicons Halflings';
        font-style: normal;
        font-weight: 400;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .glyphicon-asterisk:before {
        content: '*';
    }

    .glyphicon-plus:before {
        content: '+';
    }

    .glyphicon-euro:before,
    .glyphicon-eur:before {
        content: '€';
    }

    .glyphicon-minus:before {
        content: '−';
    }

    .glyphicon-cloud:before {
        content: '☁';
    }

    .glyphicon-envelope:before {
        content: '✉';
    }

    .glyphicon-pencil:before {
        content: '✏';
    }

    .glyphicon-glass:before {
        content: '\\e001';
    }

    .glyphicon-music:before {
        content: '\\e002';
    }

    .glyphicon-search:before {
        content: '\\e003';
    }

    .glyphicon-heart:before {
        content: '\\e005';
    }

    .glyphicon-star:before {
        content: '\\e006';
    }

    .glyphicon-star-empty:before {
        content: '\\e007';
    }

    .glyphicon-user:before {
        content: '\\e008';
    }

    .glyphicon-film:before {
        content: '\\e009';
    }

    .glyphicon-th-large:before {
        content: '\\e010';
    }

    .glyphicon-th:before {
        content: '\\e011';
    }

    .glyphicon-th-list:before {
        content: '\\e012';
    }

    .glyphicon-ok:before {
        content: '\\e013';
    }

    .glyphicon-remove:before,
    .info-tooltip .close:before {
        content: '\\e014';
    }

    .glyphicon-zoom-in:before {
        content: '\\e015';
    }

    .glyphicon-zoom-out:before {
        content: '\\e016';
    }

    .glyphicon-off:before {
        content: '\\e017';
    }

    .glyphicon-signal:before {
        content: '\\e018';
    }

    .glyphicon-cog:before {
        content: '\\e019';
    }

    .glyphicon-trash:before {
        content: '\\e020';
    }

    .glyphicon-home:before {
        content: '\\e021';
    }

    .glyphicon-file:before {
        content: '\\e022';
    }

    .glyphicon-time:before {
        content: '\\e023';
    }

    .glyphicon-road:before {
        content: '\\e024';
    }

    .glyphicon-download-alt:before {
        content: '\\e025';
    }

    .glyphicon-download:before {
        content: '\\e026';
    }

    .glyphicon-upload:before {
        content: '\\e027';
    }

    .glyphicon-inbox:before {
        content: '\\e028';
    }

    .glyphicon-play-circle:before {
        content: '\\e029';
    }

    .glyphicon-repeat:before {
        content: '\\e030';
    }

    .glyphicon-refresh:before,
    .info-tooltip .icon:before {
        content: '\\e031';
    }

    .glyphicon-list-alt:before {
        content: '\\e032';
    }

    .glyphicon-lock:before {
        content: '\\e033';
    }

    .glyphicon-flag:before {
        content: '\\e034';
    }

    .glyphicon-headphones:before {
        content: '\\e035';
    }

    .glyphicon-volume-off:before {
        content: '\\e036';
    }

    .glyphicon-volume-down:before {
        content: '\\e037';
    }

    .glyphicon-volume-up:before {
        content: '\\e038';
    }

    .glyphicon-qrcode:before {
        content: '\\e039';
    }

    .glyphicon-barcode:before {
        content: '\\e040';
    }

    .glyphicon-tag:before {
        content: '\\e041';
    }

    .glyphicon-tags:before {
        content: '\\e042';
    }

    .glyphicon-book:before {
        content: '\\e043';
    }

    .glyphicon-bookmark:before {
        content: '\\e044';
    }

    .glyphicon-print:before {
        content: '\\e045';
    }

    .glyphicon-camera:before {
        content: '\\e046';
    }

    .glyphicon-font:before {
        content: '\\e047';
    }

    .glyphicon-bold:before {
        content: '\\e048';
    }

    .glyphicon-italic:before {
        content: '\\e049';
    }

    .glyphicon-text-height:before {
        content: '\\e050';
    }

    .glyphicon-text-width:before {
        content: '\\e051';
    }

    .glyphicon-align-left:before {
        content: '\\e052';
    }

    .glyphicon-align-center:before {
        content: '\\e053';
    }

    .glyphicon-align-right:before {
        content: '\\e054';
    }

    .glyphicon-align-justify:before {
        content: '\\e055';
    }

    .glyphicon-list:before {
        content: '\\e056';
    }

    .glyphicon-indent-left:before {
        content: '\\e057';
    }

    .glyphicon-indent-right:before {
        content: '\\e058';
    }

    .glyphicon-facetime-video:before {
        content: '\\e059';
    }

    .glyphicon-picture:before {
        content: '\\e060';
    }

    .glyphicon-map-marker:before {
        content: '\\e062';
    }

    .glyphicon-adjust:before {
        content: '\\e063';
    }

    .glyphicon-tint:before {
        content: '\\e064';
    }

    .glyphicon-edit:before {
        content: '\\e065';
    }

    .glyphicon-share:before {
        content: '\\e066';
    }

    .glyphicon-check:before {
        content: '\\e067';
    }

    .glyphicon-move:before {
        content: '\\e068';
    }

    .glyphicon-step-backward:before {
        content: '\\e069';
    }

    .glyphicon-fast-backward:before {
        content: '\\e070';
    }

    .glyphicon-backward:before {
        content: '\\e071';
    }

    .glyphicon-play:before {
        content: '\\e072';
    }

    .glyphicon-pause:before {
        content: '\\e073';
    }

    .glyphicon-stop:before {
        content: '\\e074';
    }

    .glyphicon-forward:before {
        content: '\\e075';
    }

    .glyphicon-fast-forward:before {
        content: '\\e076';
    }

    .glyphicon-step-forward:before {
        content: '\\e077';
    }

    .glyphicon-eject:before {
        content: '\\e078';
    }

    .glyphicon-chevron-left:before {
        content: '\\e079';
    }

    .glyphicon-chevron-right:before {
        content: '\\e080';
    }

    .glyphicon-plus-sign:before {
        content: '\\e081';
    }

    .glyphicon-minus-sign:before {
        content: '\\e082';
    }

    .glyphicon-remove-sign:before {
        content: '\\e083';
    }

    .glyphicon-ok-sign:before {
        content: '\\e084';
    }

    .glyphicon-question-sign:before {
        content: '\\e085';
    }

    .glyphicon-info-sign:before {
        content: '\\e086';
    }

    .glyphicon-screenshot:before {
        content: '\\e087';
    }

    .glyphicon-remove-circle:before {
        content: '\\e088';
    }

    .glyphicon-ok-circle:before {
        content: '\\e089';
    }

    .glyphicon-ban-circle:before {
        content: '\\e090';
    }

    .glyphicon-arrow-left:before {
        content: '\\e091';
    }

    .glyphicon-arrow-right:before {
        content: '\\e092';
    }

    .glyphicon-arrow-up:before {
        content: '\\e093';
    }

    .glyphicon-arrow-down:before {
        content: '\\e094';
    }

    .glyphicon-share-alt:before {
        content: '\\e095';
    }

    .glyphicon-resize-full:before {
        content: '\\e096';
    }

    .glyphicon-resize-small:before {
        content: '\\e097';
    }

    .glyphicon-exclamation-sign:before {
        content: '\\e101';
    }

    .glyphicon-gift:before {
        content: '\\e102';
    }

    .glyphicon-leaf:before {
        content: '\\e103';
    }

    .glyphicon-fire:before {
        content: '\\e104';
    }

    .glyphicon-eye-open:before {
        content: '\\e105';
    }

    .glyphicon-eye-close:before {
        content: '\\e106';
    }

    .glyphicon-warning-sign:before {
        content: '\\e107';
    }

    .glyphicon-plane:before {
        content: '\\e108';
    }

    .glyphicon-calendar:before {
        content: '\\e109';
    }

    .glyphicon-random:before {
        content: '\\e110';
    }

    .glyphicon-comment:before {
        content: '\\e111';
    }

    .glyphicon-magnet:before {
        content: '\\e112';
    }

    .glyphicon-chevron-up:before {
        content: '\\e113';
    }

    .glyphicon-chevron-down:before {
        content: '\\e114';
    }

    .glyphicon-retweet:before {
        content: '\\e115';
    }

    .glyphicon-shopping-cart:before {
        content: '\\e116';
    }

    .glyphicon-folder-close:before {
        content: '\\e117';
    }

    .glyphicon-folder-open:before {
        content: '\\e118';
    }

    .glyphicon-resize-vertical:before {
        content: '\\e119';
    }

    .glyphicon-resize-horizontal:before {
        content: '\\e120';
    }

    .glyphicon-hdd:before {
        content: '\\e121';
    }

    .glyphicon-bullhorn:before {
        content: '\\e122';
    }

    .glyphicon-bell:before {
        content: '\\e123';
    }

    .glyphicon-certificate:before {
        content: '\\e124';
    }

    .glyphicon-thumbs-up:before {
        content: '\\e125';
    }

    .glyphicon-thumbs-down:before {
        content: '\\e126';
    }

    .glyphicon-hand-right:before {
        content: '\\e127';
    }

    .glyphicon-hand-left:before {
        content: '\\e128';
    }

    .glyphicon-hand-up:before {
        content: '\\e129';
    }

    .glyphicon-hand-down:before {
        content: '\\e130';
    }

    .glyphicon-circle-arrow-right:before {
        content: '\\e131';
    }

    .glyphicon-circle-arrow-left:before {
        content: '\\e132';
    }

    .glyphicon-circle-arrow-up:before {
        content: '\\e133';
    }

    .glyphicon-circle-arrow-down:before {
        content: '\\e134';
    }

    .glyphicon-globe:before {
        content: '\\e135';
    }

    .glyphicon-wrench:before {
        content: '\\e136';
    }

    .glyphicon-tasks:before {
        content: '\\e137';
    }

    .glyphicon-filter:before {
        content: '\\e138';
    }

    .glyphicon-briefcase:before {
        content: '\\e139';
    }

    .glyphicon-fullscreen:before {
        content: '\\e140';
    }

    .glyphicon-dashboard:before {
        content: '\\e141';
    }

    .glyphicon-paperclip:before {
        content: '\\e142';
    }

    .glyphicon-heart-empty:before {
        content: '\\e143';
    }

    .glyphicon-link:before {
        content: '\\e144';
    }

    .glyphicon-phone:before {
        content: '\\e145';
    }

    .glyphicon-pushpin:before {
        content: '\\e146';
    }

    .glyphicon-usd:before {
        content: '\\e148';
    }

    .glyphicon-gbp:before {
        content: '\\e149';
    }

    .glyphicon-sort:before {
        content: '\\e150';
    }

    .glyphicon-sort-by-alphabet:before {
        content: '\\e151';
    }

    .glyphicon-sort-by-alphabet-alt:before {
        content: '\\e152';
    }

    .glyphicon-sort-by-order:before {
        content: '\\e153';
    }

    .glyphicon-sort-by-order-alt:before {
        content: '\\e154';
    }

    .glyphicon-sort-by-attributes:before {
        content: '\\e155';
    }

    .glyphicon-sort-by-attributes-alt:before {
        content: '\\e156';
    }

    .glyphicon-unchecked:before {
        content: '\\e157';
    }

    .glyphicon-expand:before {
        content: '\\e158';
    }

    .glyphicon-collapse-down:before {
        content: '\\e159';
    }

    .glyphicon-collapse-up:before {
        content: '\\e160';
    }

    .glyphicon-log-in:before {
        content: '\\e161';
    }

    .glyphicon-flash:before {
        content: '\\e162';
    }

    .glyphicon-log-out:before {
        content: '\\e163';
    }

    .glyphicon-new-window:before {
        content: '\\e164';
    }

    .glyphicon-record:before {
        content: '\\e165';
    }

    .glyphicon-save:before {
        content: '\\e166';
    }

    .glyphicon-open:before {
        content: '\\e167';
    }

    .glyphicon-saved:before {
        content: '\\e168';
    }

    .glyphicon-import:before {
        content: '\\e169';
    }

    .glyphicon-export:before {
        content: '\\e170';
    }

    .glyphicon-send:before {
        content: '\\e171';
    }

    .glyphicon-floppy-disk:before {
        content: '\\e172';
    }

    .glyphicon-floppy-saved:before {
        content: '\\e173';
    }

    .glyphicon-floppy-remove:before {
        content: '\\e174';
    }

    .glyphicon-floppy-save:before {
        content: '\\e175';
    }

    .glyphicon-floppy-open:before {
        content: '\\e176';
    }

    .glyphicon-credit-card:before {
        content: '\\e177';
    }

    .glyphicon-transfer:before {
        content: '\\e178';
    }

    .glyphicon-cutlery:before {
        content: '\\e179';
    }

    .glyphicon-header:before {
        content: '\\e180';
    }

    .glyphicon-compressed:before {
        content: '\\e181';
    }

    .glyphicon-earphone:before {
        content: '\\e182';
    }

    .glyphicon-phone-alt:before {
        content: '\\e183';
    }

    .glyphicon-tower:before {
        content: '\\e184';
    }

    .glyphicon-stats:before {
        content: '\\e185';
    }

    .glyphicon-sd-video:before {
        content: '\\e186';
    }

    .glyphicon-hd-video:before {
        content: '\\e187';
    }

    .glyphicon-subtitles:before {
        content: '\\e188';
    }

    .glyphicon-sound-stereo:before {
        content: '\\e189';
    }

    .glyphicon-sound-dolby:before {
        content: '\\e190';
    }

    .glyphicon-sound-5-1:before {
        content: '\\e191';
    }

    .glyphicon-sound-6-1:before {
        content: '\\e192';
    }

    .glyphicon-sound-7-1:before {
        content: '\\e193';
    }

    .glyphicon-copyright-mark:before {
        content: '\\e194';
    }

    .glyphicon-registration-mark:before {
        content: '\\e195';
    }

    .glyphicon-cloud-download:before {
        content: '\\e197';
    }

    .glyphicon-cloud-upload:before {
        content: '\\e198';
    }

    .glyphicon-tree-conifer:before {
        content: '\\e199';
    }

    .glyphicon-tree-deciduous:before {
        content: '\\e200';
    }

    .glyphicon-cd:before {
        content: '\\e201';
    }

    .glyphicon-save-file:before {
        content: '\\e202';
    }

    .glyphicon-open-file:before {
        content: '\\e203';
    }

    .glyphicon-level-up:before {
        content: '\\e204';
    }

    .glyphicon-copy:before {
        content: '\\e205';
    }

    .glyphicon-paste:before {
        content: '\\e206';
    }

    .glyphicon-alert:before {
        content: '\\e209';
    }

    .glyphicon-equalizer:before {
        content: '\\e210';
    }

    .glyphicon-king:before {
        content: '\\e211';
    }

    .glyphicon-queen:before {
        content: '\\e212';
    }

    .glyphicon-pawn:before {
        content: '\\e213';
    }

    .glyphicon-bishop:before {
        content: '\\e214';
    }

    .glyphicon-knight:before {
        content: '\\e215';
    }

    .glyphicon-baby-formula:before {
        content: '\\e216';
    }

    .glyphicon-tent:before {
        content: '⛺';
    }

    .glyphicon-blackboard:before {
        content: '\\e218';
    }

    .glyphicon-bed:before {
        content: '\\e219';
    }

    .glyphicon-apple:before {
        content: '\\f8ff';
    }

    .glyphicon-erase:before {
        content: '\\e221';
    }

    .glyphicon-hourglass:before {
        content: '⌛';
    }

    .glyphicon-lamp:before {
        content: '\\e223';
    }

    .glyphicon-duplicate:before {
        content: '\\e224';
    }

    .glyphicon-piggy-bank:before {
        content: '\\e225';
    }

    .glyphicon-scissors:before {
        content: '\\e226';
    }

    .glyphicon-bitcoin:before {
        content: '\\e227';
    }

    .glyphicon-btc:before {
        content: '\\e227';
    }

    .glyphicon-xbt:before {
        content: '\\e227';
    }

    .glyphicon-yen:before {
        content: '¥';
    }

    .glyphicon-jpy:before {
        content: '¥';
    }

    .glyphicon-ruble:before {
        content: '₽';
    }

    .glyphicon-rub:before {
        content: '₽';
    }

    .glyphicon-scale:before {
        content: '\\e230';
    }

    .glyphicon-ice-lolly:before {
        content: '\\e231';
    }

    .glyphicon-ice-lolly-tasted:before {
        content: '\\e232';
    }

    .glyphicon-education:before {
        content: '\\e233';
    }

    .glyphicon-option-horizontal:before {
        content: '\\e234';
    }

    .glyphicon-option-vertical:before {
        content: '\\e235';
    }

    .glyphicon-menu-hamburger:before {
        content: '\\e236';
    }

    .glyphicon-modal-window:before {
        content: '\\e237';
    }

    .glyphicon-oil:before {
        content: '\\e238';
    }

    .glyphicon-grain:before {
        content: '\\e239';
    }

    .glyphicon-sunglasses:before {
        content: '\\e240';
    }

    .glyphicon-text-size:before {
        content: '\\e241';
    }

    .glyphicon-text-color:before {
        content: '\\e242';
    }

    .glyphicon-text-background:before {
        content: '\\e243';
    }

    .glyphicon-object-align-top:before {
        content: '\\e244';
    }

    .glyphicon-object-align-bottom:before {
        content: '\\e245';
    }

    .glyphicon-object-align-horizontal:before {
        content: '\\e246';
    }

    .glyphicon-object-align-left:before {
        content: '\\e247';
    }

    .glyphicon-object-align-vertical:before {
        content: '\\e248';
    }

    .glyphicon-object-align-right:before {
        content: '\\e249';
    }

    .glyphicon-triangle-right:before {
        content: '\\e250';
    }

    .glyphicon-triangle-left:before {
        content: '\\e251';
    }

    .glyphicon-triangle-bottom:before {
        content: '\\e252';
    }

    .glyphicon-triangle-top:before {
        content: '\\e253';
    }

    .glyphicon-console:before {
        content: '\\e254';
    }

    .glyphicon-superscript:before {
        content: '\\e255';
    }

    .glyphicon-subscript:before {
        content: '\\e256';
    }

    .glyphicon-menu-left:before {
        content: '\\e257';
    }

    .glyphicon-menu-right:before {
        content: '\\e258';
    }

    .glyphicon-menu-down:before {
        content: '\\e259';
    }

    .glyphicon-menu-up:before {
        content: '\\e260';
    }

    .ol-zoom {
        padding: 0;
        margin: 0;
        border: 1px #cbd2da solid;
        border-radius: 0;
        background: white;
        top: initial;
        left: initial;
        bottom: 10px;
        right: 10px;
    }
    .ol-zoom .ol-zoom-in,
    .ol-zoom .ol-zoom-out {
        color: #333332;
        background: white;
        width: 3.5rem;
        height: 3.5rem;
        margin: 0;
        border-radius: 0;
    }
    .ol-zoom .ol-zoom-in:hover,
    .ol-zoom .ol-zoom-out:hover {
        background-color: white;
        cursor: pointer;
    }
    .ol-zoom .ol-zoom-in:focus,
    .ol-zoom .ol-zoom-out:focus {
        outline: 0;
        border: 0.1rem solid #ffc515;
        box-shadow: inset 0 0 0 0.1rem #ffc515;
        background-color: white;
    }

    .ol-full-screen {
        padding: 0;
        margin: 0;
        border: 1px #cbd2da solid;
        border-radius: 0;
        background: white;
        top: initial;
        left: initial;
        right: 10px;
        bottom: 92px;
    }
    .ol-full-screen .ol-full-screen-false,
    .ol-full-screen .ol-full-screen-true {
        color: #333332;
        background: white;
        width: 3.5rem;
        height: 3.5rem;
        margin: 0;
        border-radius: 0;
    }
    .ol-full-screen .ol-full-screen-false:hover,
    .ol-full-screen .ol-full-screen-true:hover {
        background-color: white;
        cursor: pointer;
    }
    .ol-full-screen .ol-full-screen-false:focus,
    .ol-full-screen .ol-full-screen-true:focus {
        outline: 0;
        border: 0.1rem solid #ffc515;
        box-shadow: inset 0 0 0 0.1rem #ffc515;
        background-color: white;
    }

    .ol-scale-line {
        border: 1px solid #cbd2da;
        border-radius: 0;
        background-color: white;
    }
    .ol-scale-line .ol-scale-line-inner {
        border-color: #333332;
        color: #333332;
    }

    .ol-overviewmap {
        background: white;
        border: 1px solid #cbd2da;
        border-radius: 0;
        width: 7.2rem;
        height: 7.2rem;
        top: initial;
        left: initial;
        bottom: 10px;
        right: 55px;
    }
    .ol-overviewmap:not(.ol-collapsed) {
        background: white;
    }
    .ol-overviewmap .ol-overviewmap-map {
        border: none;
        cursor: pointer;
        box-sizing: border-box;
        margin: 0;
        width: 6.6rem;
        height: 6.6rem;
    }
    .ol-overviewmap .ol-overviewmap-map .ol-overviewmap-box {
        border: 1px dotted #333332;
    }
    .ol-overviewmap button {
        display: none;
    }

    .info-tooltip {
        position: relative;
        color: white;
        background-color: black;
        padding: 5px 10px;
        opacity: 0.8;
        border-radius: 5px;
        font-size: 0.8em;
    }
    .info-tooltip .icon {
        -animation: spin 0.7s infinite linear;
        -webkit-animation: spin2 0.7s infinite linear;
    }
    .info-tooltip .close {
        position: absolute;
        top: 5px;
        right: 5px;
        color: white;
        opacity: 0.6;
        font-size: 10px;
    }
    .info-tooltip .close:hover {
        opacity: 1;
    }
    @-webkit-keyframes spin2 {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        from {
            transform: scale(1) rotate(0deg);
        }
        to {
            transform: scale(1) rotate(360deg);
        }
    }
    .info-tooltip .arrow {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        left: 50%;
        margin-left: -6px;
        border-bottom-width: 0;
        border-top-color: black;
        bottom: -11px;
        border-width: 6px;
    }

    .measure-tooltip {
        position: absolute;
        color: white;
        background-color: black;
        padding: 5px 10px;
        opacity: 0.8;
        border-radius: 5px;
        font-size: 0.8em;
        bottom: 20px;
        white-space: nowrap;
        pointer-events: none;
    }

    .ol-dragbox {
        border-color: rgb(2, 85, 204);
    }
`,l_=ha`
    .ol-box {
        box-sizing: border-box;
        border-radius: 2px;
        border: 1.5px solid rgb(179, 197, 219);
        background-color: rgba(255, 255, 255, 0.4);
    }

    .ol-mouse-position {
        top: 8px;
        right: 8px;
        position: absolute;
    }

    .ol-scale-line {
        background: rgba(0, 60, 136, 0.3);
        border-radius: 4px;
        bottom: 8px;
        left: 8px;
        padding: 2px;
        position: absolute;
    }
    .ol-scale-line-inner {
        border: 1px solid #eee;
        border-top: none;
        color: #eee;
        font-size: 10px;
        text-align: center;
        margin: 1px;
        will-change: contents, width;
        transition: all 0.25s;
    }
    .ol-scale-bar {
        position: absolute;
        bottom: 8px;
        left: 8px;
    }
    .ol-scale-step-marker {
        width: 1px;
        height: 15px;
        background-color: #000000;
        float: right;
        z-index: 10;
    }
    .ol-scale-step-text {
        position: absolute;
        bottom: -5px;
        font-size: 12px;
        z-index: 11;
        color: #000000;
        text-shadow: -2px 0 #ffffff, 0 2px #ffffff, 2px 0 #ffffff, 0 -2px #ffffff;
    }
    .ol-scale-text {
        position: absolute;
        font-size: 14px;
        text-align: center;
        bottom: 25px;
        color: #000000;
        text-shadow: -2px 0 #ffffff, 0 2px #ffffff, 2px 0 #ffffff, 0 -2px #ffffff;
    }
    .ol-scale-singlebar {
        position: relative;
        height: 10px;
        z-index: 9;
        box-sizing: border-box;
        border: 1px solid black;
    }

    .ol-unsupported {
        display: none;
    }
    .ol-viewport,
    .ol-unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .ol-viewport canvas {
        all: unset;
    }
    .ol-selectable {
        -webkit-touch-callout: default;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    .ol-grabbing {
        cursor: -webkit-grabbing;
        cursor: -moz-grabbing;
        cursor: grabbing;
    }
    .ol-grab {
        cursor: move;
        cursor: -webkit-grab;
        cursor: -moz-grab;
        cursor: grab;
    }
    .ol-control {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 4px;
        padding: 2px;
    }
    .ol-control:hover {
        background-color: rgba(255, 255, 255, 0.6);
    }
    .ol-zoom {
        top: 0.5em;
        left: 0.5em;
    }
    .ol-rotate {
        top: 0.5em;
        right: 0.5em;
        transition: opacity 0.25s linear, visibility 0s linear;
    }
    .ol-rotate.ol-hidden {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s linear, visibility 0s linear 0.25s;
    }
    .ol-zoom-extent {
        top: 4.643em;
        left: 0.5em;
    }
    .ol-full-screen {
        right: 0.5em;
        top: 0.5em;
    }

    .ol-control button {
        display: block;
        margin: 1px;
        padding: 0;
        color: white;
        font-weight: bold;
        text-decoration: none;
        font-size: inherit;
        text-align: center;
        height: 1.375em;
        width: 1.375em;
        line-height: 0.4em;
        background-color: rgba(0, 60, 136, 0.5);
        border: none;
        border-radius: 2px;
    }
    .ol-control button::-moz-focus-inner {
        border: none;
        padding: 0;
    }
    .ol-zoom-extent button {
        line-height: 1.4em;
    }
    .ol-compass {
        display: block;
        font-weight: normal;
        font-size: 1.2em;
        will-change: transform;
    }
    .ol-touch .ol-control button {
        font-size: 1.5em;
    }
    .ol-touch .ol-zoom-extent {
        top: 5.5em;
    }
    .ol-control button:hover,
    .ol-control button:focus {
        text-decoration: none;
        background-color: rgba(0, 60, 136, 0.7);
    }
    .ol-zoom .ol-zoom-in {
        border-radius: 2px 2px 0 0;
    }
    .ol-zoom .ol-zoom-out {
        border-radius: 0 0 2px 2px;
    }

    .ol-attribution {
        text-align: right;
        bottom: 0.5em;
        right: 0.5em;
        max-width: calc(100% - 1.3em);
        display: flex;
        flex-flow: row-reverse;
        align-items: center;
    }
    .ol-attribution a {
        color: rgba(0, 60, 136, 0.7);
        text-decoration: none;
    }
    .ol-attribution ul {
        margin: 0;
        padding: 1px 0.5em;
        color: #000;
        text-shadow: 0 0 2px #fff;
        font-size: 12px;
    }
    .ol-attribution li {
        display: inline;
        list-style: none;
    }
    .ol-attribution li:not(:last-child):after {
        content: ' ';
    }
    .ol-attribution img {
        max-height: 2em;
        max-width: inherit;
        vertical-align: middle;
    }
    .ol-attribution button {
        flex-shrink: 0;
    }
    .ol-attribution.ol-collapsed ul {
        display: none;
    }
    .ol-attribution:not(.ol-collapsed) {
        background: rgba(255, 255, 255, 0.8);
    }
    .ol-attribution.ol-uncollapsible {
        bottom: 0;
        right: 0;
        border-radius: 4px 0 0;
    }
    .ol-attribution.ol-uncollapsible img {
        margin-top: -0.2em;
        max-height: 1.6em;
    }
    .ol-attribution.ol-uncollapsible button {
        display: none;
    }

    .ol-zoomslider {
        top: 4.5em;
        left: 0.5em;
        height: 200px;
    }
    .ol-zoomslider button {
        position: relative;
        height: 10px;
    }

    .ol-touch .ol-zoomslider {
        top: 5.5em;
    }

    .ol-overviewmap {
        left: 0.5em;
        bottom: 0.5em;
    }
    .ol-overviewmap.ol-uncollapsible {
        bottom: 0;
        left: 0;
        border-radius: 0 4px 0 0;
    }
    .ol-overviewmap .ol-overviewmap-map,
    .ol-overviewmap button {
        display: block;
    }
    .ol-overviewmap .ol-overviewmap-map {
        border: 1px solid #7b98bc;
        height: 150px;
        margin: 2px;
        width: 150px;
    }
    .ol-overviewmap:not(.ol-collapsed) button {
        bottom: 2px;
        left: 2px;
        position: absolute;
    }
    .ol-overviewmap.ol-collapsed .ol-overviewmap-map,
    .ol-overviewmap.ol-uncollapsible button {
        display: none;
    }
    .ol-overviewmap:not(.ol-collapsed) {
        background: rgba(255, 255, 255, 0.8);
    }
    .ol-overviewmap-box {
        border: 2px dotted rgba(0, 60, 136, 0.7);
    }

    .ol-overviewmap .ol-overviewmap-box:hover {
        cursor: move;
    }
`,h_=ha`
    :host {
        display: none;
        position: relative;
        --vl-map--margin-top: 0px;
        border: 1px solid #cbd2da;
        height: calc(var(--vl-map-height, 500px) - var(--vl-map--margin-top));
    }

    :host(.vl-map--no-border) {
        border: none;
    }

    :host(.vl-map--full-height) {
        height: calc(100% - var(--vl-map--margin-top));
    }

    #map {
        position: relative;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        background: white;
        z-index: 0;
    }
    #map .ol-zoom,
    #map .ol-rotate {
        margin-top: var(--vl-map--margin-top) !important;
    }
    #map .vl-map-search__overlaycontainer {
        display: initial !important;
        width: 100%;
    }
    #map .vl-map-search__overlaycontainer vl-map-search {
        --vl-search-width: 100%;
        position: absolute;
        margin: 10px;
        box-sizing: border-box;
    }
    @media screen and (max-width: 500px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 100%;
        }
    }
    @media screen and (min-width: 500px) and (max-width: 767px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 100%;
        }
    }
    @media screen and (min-width: 767px) and (max-width: 1023px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 50%;
        }
    }
    @media screen and (min-width: 1023px) and (max-width: 1600px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 50%;
        }
    }
    @media screen and (min-width: 1600px) {
        #map .vl-map-search__overlaycontainer vl-map-search {
            width: 50%;
        }
    }
    #map .vl-map-search__overlaycontainer vl-map-search.vl-map-search--with-offset {
        margin-left: 50px;
    }
`,c_=[h_,...Yd,l_,a_];var d_=Object.getOwnPropertyDescriptor,u_=(i,e,t,n)=>{for(var s=n>1?void 0:n?d_(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=o(s)||s);return s};let Sn=class extends kr{static get _observedAttributes(){return["lambert2008"]}constructor(){const i=`
            <div id='map'>
                <slot></slot>
            </div>
        `,e=[...c_.map(t=>t.styleSheet)];super(i,e),this.__initializeCoordinateSystem(),this.__prepareReadyPromises()}static get _observedClassAttributes(){return["no-border","full-height"]}get _classPrefix(){return"vl-map--"}get ready(){return this.__ready}get map(){return this._map}get resolution(){return this.map.getView().getResolution()}get nonBaseLayers(){return[...this.querySelectorAll(":scope > [is-layer]")]}get disableEscapeKey(){return this.getAttribute("disable-escape-key")!=null}get disableRotation(){return this.getAttribute("disable-rotation")!=null}get disableMouseWheelZoom(){return this.getAttribute("disable-mouse-wheel-zoom")!=null}get disableKeyboard(){return this.getAttribute("disable-keyboard")!=null}get actions(){return this.map&&this.map.actions}get controls(){return this.map&&this.map.getControls().getArray()}get activeAction(){return this.map&&this.map.getCurrentActiveAction()}get defaultAction(){return this.map&&this.map.getDefaultActiveAction()}get _mapElement(){return this._shadow?.querySelector("#map")}get _controls(){return this.getAttribute("allow-fullscreen")!==null?[new du]:[]}get _projection(){return new Gr({code:this._code,extent:this._extent})}get isLambert2008(){return this.hasAttribute("lambert2008")}get _code(){return this.isLambert2008?ud():gd()}get _extent(){return this.isLambert2008?xy():py()}get zoomInTipLabel(){return this.getAttribute("zoomInTooltip")}get zoomOutTipLabel(){return this.getAttribute("zoomOutTooltip")}get featuresLayers(){return Array.from(this.querySelectorAll("vl-map-features-layer"))}get wfsLayers(){return Array.from(this.querySelectorAll("vl-map-wfs-layer"))}get wmsLayers(){return Array.from(this.querySelectorAll("vl-map-tiled-wms-layer, vl-map-image-wms-layer"))}static __callOnceOnLoad(i){document.readyState==="complete"?i():window.addEventListener("load",i,{once:!0})}__prepareReadyPromises(){this.__mapReady=new Promise(i=>this.__mapReadyResolver=i),this.__overviewMapReady=new Promise(i=>this.__overviewMapReadyResolver=i),this.__ready=Promise.all([this.__mapReady,this.__overviewMapReady])}connectedCallback(){super.connectedCallback(),this._initializeMap()}_initializeMap(){this._map=new s_({actions:[],disableEscapeKey:this.disableEscapeKey,disableRotation:this.disableRotation,disableMouseWheelZoom:this.disableMouseWheelZoom,disableKeyboard:this.disableKeyboard,customLayers:{baseLayerGroup:this.__createLayerGroup("Basis lagen",[]),overviewMapLayers:[],overlayGroup:this.__createLayerGroup("Lagen",[])},projection:this._projection,target:this._mapElement,controls:this._controls,defaultZoom:!1}),this._map.initializeView(),this.__updateMapSizeOnLoad(),this.__updateOverviewMapSizeOnLoad(),this._map.addControl(this.__createZoomControl()),this.observeRemovedMapLayers()}disconnectedCallback(){this.observer&&this.observer.disconnect(),this.map?.setTarget(null)}__createZoomControl(){const i={};return this.zoomInTipLabel&&(i.zoomInTipLabel=this.zoomInTipLabel),this.zoomOutTipLabel&&(i.zoomOutTipLabel=this.zoomOutTipLabel),new Fa(i)}addLayer(i){this.map.addOverlayLayer(i)}addAction(i){this.map.addAction(i)}addControl(i){this.map.addControl(i)}removeAction(i){this.map.removeAction(i)}_dispatchLayerVisibleChangedEvent(i){this.dispatchEvent(new CustomEvent(bh.LAYER_VISIBLE_CHANGED,{detail:{layer:i,visible:i.visible}}))}handleLayerVisibilityChange(i){this._dispatchLayerVisibleChangedEvent(i);const e=this.map.getLayerActions(i.layer);e&&e.forEach(t=>{i.visible?!this.activeAction&&t===this.defaultAction&&t.element.activate():t.element._active&&t.element.deactivate(),t.handleLayerVisibilityChange&&t.handleLayerVisibilityChange();const n=t.getControl();n&&n.get("element").setDisabled(!i.visible)})}_dispatchActiveActionChangedEvent(i,e){this.dispatchEvent(new CustomEvent(bh.ACTIVE_ACTION_CHANGED,{detail:{previous:i&&i.element,current:e&&e.element}}))}changeActiveAction(i){const e=this.activeAction,t=i||void 0;e&&(this.map.deactivateCurrentAction(),e.element._active=!1,e.getControl()&&e.getControl().get("element").setActive(!1)),t&&(this.map.activateAction(t),t.element._active=!0,t.getControl()&&t.getControl().get("element").setActive(!0)),(t||e)&&this._dispatchActiveActionChangedEvent(e,t)}activateAction(i){i&&i.element.activate()}deactivateAction(i){i&&i.element.deactivate()}zoomTo(i,e){Array.isArray(i)?this.map.zoomToExtent(i,e):i instanceof Object&&this.map.zoomToGeometry(i,e)}on(i,e){return this.map.on(i,e)}un(i,e){return this.map.un(i,e)}rerender(){this.map.render()}__updateMapSize(){this.style.display="block",this.map&&this.map.updateSize(),this.__mapReadyResolver()}__updateOverviewMapSize(){this.map.overviewMapControl&&this.map.overviewMapControl.getOverviewMap().updateSize(),this.__overviewMapReadyResolver()}__updateOverviewMapSizeOnLoad(){Sn.__callOnceOnLoad(this.__updateOverviewMapSize.bind(this))}__updateMapSizeOnLoad(){Sn.__callOnceOnLoad(this.__updateMapSize.bind(this))}__createLayerGroup(i,e){return new Ci({title:i,layers:e})}__initializeCoordinateSystem(){Fe.defs("EPSG:31370","+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs"),Fe.defs("EPSG:3812","+proj=lcc +lat_0=50.797815 +lon_0=4.35921583333333 +lat_1=49.8333333333333 +lat_2=51.1666666666667 +x_0=649328 +y_0=665262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"),cg(Fe)}observeRemovedMapLayers(){const i=this;this.observer=new MutationObserver(e=>{e.filter(({target:t})=>t===i).flatMap(({removedNodes:t})=>Array.from(t).filter(n=>n instanceof Ar)).forEach(t=>{this.map.removeOverlayLayer(t._layer)})}),this.observer.observe(i,{subtree:!0,childList:!0})}};Sn=u_([la("vl-map")],Sn);class Kd extends ps{constructor(e,t,n){super(),n=n||{},this.tileCoord=e,this.state=t,this.interimTile=null,this.key="",this.transition_=n.transition===void 0?250:n.transition,this.transitionStarts_={},this.interpolate=!!n.interpolate}changed(){this.dispatchEvent(W.CHANGE)}release(){this.state===F.ERROR&&this.setState(F.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){let e=this.interimTile;if(!e)return this;do{if(e.getState()==F.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this}refreshInterimChain(){let e=this.interimTile;if(!e)return;let t=this;do{if(e.getState()==F.LOADED){e.interimTile=null;break}e.getState()==F.LOADING?t=e:e.getState()==F.IDLE?t.interimTile=e.interimTile:t=e,e=t.interimTile}while(e)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(e){if(this.state!==F.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()}load(){G()}getAlpha(e,t){if(!this.transition_)return 1;let n=this.transitionStarts_[e];if(!n)n=t,this.transitionStarts_[e]=n;else if(n===-1)return 1;const s=t-n+1e3/60;return s>=this.transition_?1:lc(s/this.transition_)}inTransition(e){return this.transition_?this.transitionStarts_[e]!==-1:!1}endTransition(e){this.transition_&&(this.transitionStarts_[e]=-1)}}class Ad extends Kd{constructor(e,t,n,s,r,o){super(e,t,o),this.crossOrigin_=s,this.src_=n,this.key=n,this.image_=new Image,s!==null&&(this.image_.crossOrigin=s),this.unlisten_=null,this.tileLoadFunction_=r}getImage(){return this.image_}setImage(e){this.image_=e,this.state=F.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=F.ERROR,this.unlistenImage_(),this.image_=f_(),this.changed()}handleImageLoad_(){const e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=F.LOADED:this.state=F.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==F.ERROR&&(this.state=F.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==F.IDLE&&(this.state=F.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Dy(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function f_(){const i=Ne(1,1);return i.fillStyle="rgba(0,0,0,0)",i.fillRect(0,0,1,1),i.canvas}class g_{constructor(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(e){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(e){return this.entries_.hasOwnProperty(e)}forEach(e){let t=this.oldest_;for(;t;)e(t.value_,t.key_,this),t=t.newer}get(e,t){const n=this.entries_[e];return J(n!==void 0,"Tried to get a value for a key that does not exist in the cache"),n===this.newest_||(n===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(n.newer.older=n.older,n.older.newer=n.newer),n.newer=null,n.older=this.newest_,this.newest_.newer=n,this.newest_=n),n.value_}remove(e){const t=this.entries_[e];return J(t!==void 0,"Tried to get a value for a key that does not exist in the cache"),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_}getCount(){return this.count_}getKeys(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.key_;return e}getValues(){const e=new Array(this.count_);let t=0,n;for(n=this.newest_;n;n=n.older)e[t++]=n.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(e){return this.entries_[e]?.value_}pop(){const e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_}replace(e,t){this.get(e),this.entries_[e].value_=t}set(e,t){J(!(e in this.entries_),"Tried to set a value for a key that is used already");const n={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=n:this.oldest_=n,this.newest_=n,this.entries_[e]=n,++this.count_}setSize(e){this.highWaterMark=e}}function Eh(i,e,t,n){return n!==void 0?(n[0]=i,n[1]=e,n[2]=t,n):[i,e,t]}function so(i,e,t){return i+"/"+e+"/"+t}function Pd(i){return so(i[0],i[1],i[2])}function w_(i){return i.split("/").map(Number)}function Od(i){return(i[1]<<i[0])+i[2]}function M_(i,e){const t=i[0],n=i[1],s=i[2];if(e.getMinZoom()>t||t>e.getMaxZoom())return!1;const r=e.getFullTileRange(t);return r?r.containsXY(n,s):!0}class Dd extends g_{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(e){for(;this.canExpireCache()&&!(this.peekLast().getKey()in e);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const e=this.peekFirstKey(),n=w_(e)[0];this.forEach(s=>{s.tileCoord[0]!==n&&(this.remove(Pd(s.tileCoord)),s.release())})}}class el{constructor(e,t,n,s){this.minX=e,this.maxX=t,this.minY=n,this.maxY=s}contains(e){return this.containsXY(e[1],e[2])}containsTileRange(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY}containsXY(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY}equals(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY}extend(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY}}function Qi(i,e,t,n,s){return s!==void 0?(s.minX=i,s.maxX=e,s.minY=t,s.maxY=n,s):new el(i,e,t,n)}const kd=.5,m_=10,Lh=.25;class Fd{constructor(e,t,n,s,r,o){this.sourceProj_=e,this.targetProj_=t;let a={};const l=Cn(this.targetProj_,this.sourceProj_);this.transformInv_=function(T){const y=T[0]+"/"+T[1];return a[y]||(a[y]=l(T)),a[y]},this.maxSourceExtent_=s,this.errorThresholdSquared_=r*r,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!s&&!!this.sourceProj_.getExtent()&&Q(s)>=Q(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?Q(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?Q(this.targetProj_.getExtent()):null;const h=qt(n),c=Hr(n),d=bs(n),u=zr(n),f=this.transformInv_(h),g=this.transformInv_(c),w=this.transformInv_(d),M=this.transformInv_(u),m=m_+(o?Math.max(0,Math.ceil(Math.log2(Fo(n)/(o*o*256*256)))):0);if(this.addQuad_(h,c,d,u,f,g,w,M,m),this.wrapsXInSource_){let T=1/0;this.triangles_.forEach(function(y,x,_){T=Math.min(T,y.source[0][0],y.source[1][0],y.source[2][0])}),this.triangles_.forEach(y=>{if(Math.max(y.source[0][0],y.source[1][0],y.source[2][0])-T>this.sourceWorldWidth_/2){const x=[[y.source[0][0],y.source[0][1]],[y.source[1][0],y.source[1][1]],[y.source[2][0],y.source[2][1]]];x[0][0]-T>this.sourceWorldWidth_/2&&(x[0][0]-=this.sourceWorldWidth_),x[1][0]-T>this.sourceWorldWidth_/2&&(x[1][0]-=this.sourceWorldWidth_),x[2][0]-T>this.sourceWorldWidth_/2&&(x[2][0]-=this.sourceWorldWidth_);const _=Math.min(x[0][0],x[1][0],x[2][0]);Math.max(x[0][0],x[1][0],x[2][0])-_<this.sourceWorldWidth_/2&&(y.source=x)}})}a={}}addTriangle_(e,t,n,s,r,o){this.triangles_.push({source:[s,r,o],target:[e,t,n]})}addQuad_(e,t,n,s,r,o,a,l,h){const c=Do([r,o,a,l]),d=this.sourceWorldWidth_?Q(c)/this.sourceWorldWidth_:null,u=this.sourceWorldWidth_,f=this.sourceProj_.canWrapX()&&d>.5&&d<1;let g=!1;if(h>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const M=Do([e,t,n,s]);g=Q(M)/this.targetWorldWidth_>Lh||g}!f&&this.sourceProj_.isGlobal()&&d&&(g=d>Lh||g)}if(!g&&this.maxSourceExtent_&&isFinite(c[0])&&isFinite(c[1])&&isFinite(c[2])&&isFinite(c[3])&&!Xe(c,this.maxSourceExtent_))return;let w=0;if(!g&&(!isFinite(r[0])||!isFinite(r[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(l[0])||!isFinite(l[1]))){if(h>0)g=!0;else if(w=(!isFinite(r[0])||!isFinite(r[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),w!=1&&w!=2&&w!=4&&w!=8)return}if(h>0){if(!g){const M=[(e[0]+n[0])/2,(e[1]+n[1])/2],m=this.transformInv_(M);let T;f?T=(gi(r[0],u)+gi(a[0],u))/2-gi(m[0],u):T=(r[0]+a[0])/2-m[0];const y=(r[1]+a[1])/2-m[1];g=T*T+y*y>this.errorThresholdSquared_}if(g){if(Math.abs(e[0]-n[0])<=Math.abs(e[1]-n[1])){const M=[(t[0]+n[0])/2,(t[1]+n[1])/2],m=this.transformInv_(M),T=[(s[0]+e[0])/2,(s[1]+e[1])/2],y=this.transformInv_(T);this.addQuad_(e,t,M,T,r,o,m,y,h-1),this.addQuad_(T,M,n,s,y,m,a,l,h-1)}else{const M=[(e[0]+t[0])/2,(e[1]+t[1])/2],m=this.transformInv_(M),T=[(n[0]+s[0])/2,(n[1]+s[1])/2],y=this.transformInv_(T);this.addQuad_(e,M,T,s,r,m,y,l,h-1),this.addQuad_(M,t,n,T,m,o,a,y,h-1)}return}}if(f){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(w&11)==0&&this.addTriangle_(e,n,s,r,a,l),(w&14)==0&&this.addTriangle_(e,n,t,r,a,o),w&&((w&13)==0&&this.addTriangle_(t,s,e,o,l,r),(w&7)==0&&this.addTriangle_(t,s,n,o,l,a))}calculateSourceExtent(){const e=nt();return this.triangles_.forEach(function(t,n,s){const r=t.source;es(e,r[0]),es(e,r[1]),es(e,r[2])}),e}getTriangles(){return this.triangles_}}let So;const Tn=[];function Sh(i,e,t,n,s){i.beginPath(),i.moveTo(0,0),i.lineTo(e,t),i.lineTo(n,s),i.closePath(),i.save(),i.clip(),i.fillRect(0,0,Math.max(e,n)+1,Math.max(t,s)),i.restore()}function Io(i,e){return Math.abs(i[e*4]-210)>2||Math.abs(i[e*4+3]-.75*255)>2}function T_(){if(So===void 0){const i=Ne(6,6,Tn);i.globalCompositeOperation="lighter",i.fillStyle="rgba(210, 0, 0, 0.75)",Sh(i,4,5,4,0),Sh(i,4,5,0,5);const e=i.getImageData(0,0,3,3).data;So=Io(e,0)||Io(e,4)||Io(e,8),Nr(i),Tn.push(i.canvas)}return So}function Pr(i,e,t,n){const s=Qh(t,e,i);let r=fr(e,n,t);const o=e.getMetersPerUnit();o!==void 0&&(r*=o);const a=i.getMetersPerUnit();a!==void 0&&(r/=a);const l=i.getExtent();if(!l||Wr(l,s)){const h=fr(i,r,s)/r;isFinite(h)&&h>0&&(r/=h)}return r}function y_(i,e,t,n){const s=mt(t);let r=Pr(i,e,s,n);return(!isFinite(r)||r<=0)&&Vh(t,function(o){return r=Pr(i,e,o,n),isFinite(r)&&r>0}),r}function Nd(i,e,t,n,s,r,o,a,l,h,c,d,u){const f=Ne(Math.round(t*i),Math.round(t*e),Tn);if(d||(f.imageSmoothingEnabled=!1),l.length===0)return f.canvas;f.scale(t,t);function g(T){return Math.round(T*t)/t}f.globalCompositeOperation="lighter";const w=nt();l.forEach(function(T,y,x){Bh(w,T.extent)});let M;if(!u||l.length!==1||h!==0){const T=Q(w),y=Ke(w);M=Ne(Math.round(t*T/n),Math.round(t*y/n),Tn),d||(M.imageSmoothingEnabled=!1);const x=t/n;l.forEach(function(_,p,R){const C=_.extent[0]-w[0],I=-(_.extent[3]-w[3]),D=Q(_.extent),j=Ke(_.extent);_.image.width>0&&_.image.height>0&&M.drawImage(_.image,h,h,_.image.width-2*h,_.image.height-2*h,C*x,I*x,D*x,j*x)})}const m=qt(o);return a.getTriangles().forEach(function(T,y,x){const _=T.source,p=T.target;let R=_[0][0],C=_[0][1],I=_[1][0],D=_[1][1],j=_[2][0],X=_[2][1];const U=g((p[0][0]-m[0])/r),Me=g(-(p[0][1]-m[1])/r),A=g((p[1][0]-m[0])/r),N=g(-(p[1][1]-m[1])/r),K=g((p[2][0]-m[0])/r),V=g(-(p[2][1]-m[1])/r),he=R,ae=C;R=0,C=0,I-=he,D-=ae,j-=he,X-=ae;const be=[[I,D,0,0,A-U],[j,X,0,0,K-U],[0,0,I,D,N-Me],[0,0,j,X,V-Me]],E=Ku(be);if(!E)return;if(f.save(),f.beginPath(),T_()||!d){f.moveTo(A,N);const Z=4,de=U-A,$t=Me-N;for(let Pe=0;Pe<Z;Pe++)f.lineTo(A+g((Pe+1)*de/Z),N+g(Pe*$t/(Z-1))),Pe!=Z-1&&f.lineTo(A+g((Pe+1)*de/Z),N+g((Pe+1)*$t/(Z-1)));f.lineTo(K,V)}else f.moveTo(A,N),f.lineTo(U,Me),f.lineTo(K,V);f.clip(),f.transform(E[0],E[2],E[1],E[3],U,Me),f.translate(w[0]-he,w[3]-ae);let Ce;if(M)Ce=M.canvas,f.scale(n/t,-n/t);else{const Z=l[0],de=Z.extent;Ce=Z.image,f.scale(Q(de)/Ce.width,-Ke(de)/Ce.height)}f.drawImage(Ce,0,0),f.restore()}),M&&(Nr(M),Tn.push(M.canvas)),c&&(f.save(),f.globalCompositeOperation="source-over",f.strokeStyle="black",f.lineWidth=1,a.getTriangles().forEach(function(T,y,x){const _=T.target,p=(_[0][0]-m[0])/r,R=-(_[0][1]-m[1])/r,C=(_[1][0]-m[0])/r,I=-(_[1][1]-m[1])/r,D=(_[2][0]-m[0])/r,j=-(_[2][1]-m[1])/r;f.beginPath(),f.moveTo(C,I),f.lineTo(p,R),f.lineTo(D,j),f.closePath(),f.stroke()}),f.restore()),f.canvas}class ra extends Kd{constructor(e,t,n,s,r,o,a,l,h,c,d,u){super(r,F.IDLE,u),this.renderEdges_=d!==void 0?d:!1,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=t,this.targetTileGrid_=s,this.wrappedTileCoord_=o||r,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0;const f=s.getTileCoordExtent(this.wrappedTileCoord_),g=this.targetTileGrid_.getExtent();let w=this.sourceTileGrid_.getExtent();const M=g?wn(f,g):f;if(Fo(M)===0){this.state=F.EMPTY;return}const m=e.getExtent();m&&(w?w=wn(w,m):w=m);const T=s.getResolution(this.wrappedTileCoord_[0]),y=y_(e,n,M,T);if(!isFinite(y)||y<=0){this.state=F.EMPTY;return}const x=c!==void 0?c:kd;if(this.triangulation_=new Fd(e,n,M,w,y*x,T),this.triangulation_.getTriangles().length===0){this.state=F.EMPTY;return}this.sourceZ_=t.getZForResolution(y);let _=this.triangulation_.calculateSourceExtent();if(w&&(e.canWrapX()?(_[1]=we(_[1],w[1],w[3]),_[3]=we(_[3],w[1],w[3])):_=wn(_,w)),!Fo(_))this.state=F.EMPTY;else{const p=t.getTileRangeForExtentAndZ(_,this.sourceZ_);for(let R=p.minX;R<=p.maxX;R++)for(let C=p.minY;C<=p.maxY;C++){const I=h(this.sourceZ_,R,C,a);I&&this.sourceTiles_.push(I)}this.sourceTiles_.length===0&&(this.state=F.EMPTY)}}getImage(){return this.canvas_}reproject_(){const e=[];if(this.sourceTiles_.forEach(t=>{t&&t.getState()==F.LOADED&&e.push({extent:this.sourceTileGrid_.getTileCoordExtent(t.tileCoord),image:t.getImage()})}),this.sourceTiles_.length=0,e.length===0)this.state=F.ERROR;else{const t=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(t),s=typeof n=="number"?n:n[0],r=typeof n=="number"?n:n[1],o=this.targetTileGrid_.getResolution(t),a=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=Nd(s,r,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=F.LOADED}this.changed()}load(){if(this.state==F.IDLE){this.state=F.LOADING,this.changed();let e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(t=>{const n=t.getState();if(n==F.IDLE||n==F.LOADING){e++;const s=q(t,W.CHANGE,function(r){const o=t.getState();(o==F.LOADED||o==F.ERROR||o==F.EMPTY)&&(ce(s),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(s)}}),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(t,n,s){t.getState()==F.IDLE&&t.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(ce),this.sourcesListenerKeys_=null}release(){this.canvas_&&(Nr(this.canvas_.getContext("2d")),Tn.push(this.canvas_),this.canvas_=null),super.release()}}const sr={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};class x_ extends Ur{constructor(e){e=e||{};const t=Object.assign({},e);delete t.preload,delete t.useInterimTilesOnError,super(t),this.on,this.once,this.un,this.setPreload(e.preload!==void 0?e.preload:0),this.setUseInterimTilesOnError(e.useInterimTilesOnError!==void 0?e.useInterimTilesOnError:!0)}getPreload(){return this.get(sr.PRELOAD)}setPreload(e){this.set(sr.PRELOAD,e)}getUseInterimTilesOnError(){return this.get(sr.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(e){this.set(sr.USE_INTERIM_TILES_ON_ERROR,e)}getData(e){return super.getData(e)}}class __ extends Ld{constructor(e){super(e),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=nt(),this.tmpTileRange_=new el(0,0,0,0)}isDrawableTile(e){const t=this.getLayer(),n=e.getState(),s=t.getUseInterimTilesOnError();return n==F.LOADED||n==F.EMPTY||n==F.ERROR&&!s}getTile(e,t,n,s){const r=s.pixelRatio,o=s.viewState.projection,a=this.getLayer();let h=a.getSource().getTile(e,t,n,r,o);return h.getState()==F.ERROR&&a.getUseInterimTilesOnError()&&a.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(h)||(h=h.getInterimTile()),h}getData(e){const t=this.frameState;if(!t)return null;const n=this.getLayer(),s=pe(t.pixelToCoordinateTransform,e.slice()),r=n.getExtent();if(r&&!Wr(r,s))return null;const o=t.pixelRatio,a=t.viewState.projection,l=t.viewState,h=n.getRenderSource(),c=h.getTileGridForProjection(l.projection),d=h.getTilePixelRatio(t.pixelRatio);for(let u=c.getZForResolution(l.resolution);u>=c.getMinZoom();--u){const f=c.getTileCoordForCoordAndZ(s,u),g=h.getTile(u,f[1],f[2],o,a);if(!(g instanceof Ad||g instanceof ra)||g instanceof ra&&g.getState()===F.EMPTY)return null;if(g.getState()!==F.LOADED)continue;const w=c.getOrigin(u),M=tt(c.getTileSize(u)),m=c.getResolution(u),T=Math.floor(d*((s[0]-w[0])/m-f[1]*M[0])),y=Math.floor(d*((w[1]-s[1])/m-f[2]*M[1])),x=Math.round(d*h.getGutterForProjection(l.projection));return this.getImageData(g.getImage(),T+x,y+x)}return null}loadedTileCallback(e,t,n){return this.isDrawableTile(n)?super.loadedTileCallback(e,t,n):!1}prepareFrame(e){return!!this.getLayer().getSource()}renderFrame(e,t){const n=e.layerStatesArray[e.layerIndex],s=e.viewState,r=s.projection,o=s.resolution,a=s.center,l=s.rotation,h=e.pixelRatio,c=this.getLayer(),d=c.getSource(),u=d.getRevision(),f=d.getTileGridForProjection(r),g=f.getZForResolution(o,d.zDirection),w=f.getResolution(g);let M=e.extent;const m=e.viewState.resolution,T=d.getTilePixelRatio(h),y=Math.round(Q(M)/m*h),x=Math.round(Ke(M)/m*h),_=n.extent&&Ii(n.extent);_&&(M=wn(M,Ii(n.extent)));const p=w*y/2/T,R=w*x/2/T,C=[a[0]-p,a[1]-R,a[0]+p,a[1]+R],I=f.getTileRangeForExtentAndZ(M,g),D={};D[g]={};const j=this.createLoadedTileFinder(d,r,D),X=this.tmpExtent,U=this.tmpTileRange_;this.newTiles_=!1;const Me=l?No(s.center,m,l,e.size):void 0;for(let Ce=I.minX;Ce<=I.maxX;++Ce)for(let Z=I.minY;Z<=I.maxY;++Z){if(l&&!f.tileCoordIntersectsViewport([g,Ce,Z],Me))continue;const de=this.getTile(g,Ce,Z,e);if(this.isDrawableTile(de)){const Ot=te(this);if(de.getState()==F.LOADED){D[g][de.tileCoord.toString()]=de;let Dt=de.inTransition(Ot);Dt&&n.opacity!==1&&(de.endTransition(Ot),Dt=!1),!this.newTiles_&&(Dt||!this.renderedTiles.includes(de))&&(this.newTiles_=!0)}if(de.getAlpha(Ot,e.time)===1)continue}const $t=f.getTileCoordChildTileRange(de.tileCoord,U,X);let Pe=!1;$t&&(Pe=j(g+1,$t)),Pe||f.forEachTileCoordParentTileRange(de.tileCoord,j,U,X)}const A=w/o*h/T;Xt(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/h,1/h,l,-y/2,-x/2);const N=ic(this.pixelTransform);this.useContainer(t,N,this.getBackground(e));const K=this.context,V=K.canvas;xa(this.inversePixelTransform,this.pixelTransform),Xt(this.tempTransform,y/2,x/2,A,A,0,-y/2,-x/2),V.width!=y||V.height!=x?(V.width=y,V.height=x):this.containerReused||K.clearRect(0,0,y,x),_&&this.clipUnrotated(K,e,_),d.getInterpolate()||(K.imageSmoothingEnabled=!1),this.preRender(K,e),this.renderedTiles.length=0;let he=Object.keys(D).map(Number);he.sort(mi);let ae,be,E;n.opacity===1&&(!this.containerReused||d.getOpaque(e.viewState.projection))?he=he.reverse():(ae=[],be=[]);for(let Ce=he.length-1;Ce>=0;--Ce){const Z=he[Ce],de=d.getTilePixelSize(Z,h,r),Pe=f.getResolution(Z)/w,Ot=de[0]*Pe*A,Dt=de[1]*Pe*A,ji=f.getTileCoordForCoordAndZ(qt(C),Z),Ns=f.getTileCoordExtent(ji),Vi=pe(this.tempTransform,[T*(Ns[0]-C[0])/w,T*(C[3]-Ns[3])/w]),Gs=T*d.getGutterForProjection(r),Jt=D[Z];for(const Nn in Jt){const Qt=Jt[Nn],Ws=Qt.tileCoord,zs=ji[1]-Ws[1],Hs=Math.round(Vi[0]-(zs-1)*Ot),Xi=ji[2]-Ws[2],ro=Math.round(Vi[1]-(Xi-1)*Dt),Ge=Math.round(Vi[0]-zs*Ot),st=Math.round(Vi[1]-Xi*Dt),dt=Hs-Ge,kt=ro-st,Ui=g===Z,Ri=Ui&&Qt.getAlpha(te(this),e.time)!==1;let ei=!1;if(!Ri)if(ae){E=[Ge,st,Ge+dt,st,Ge+dt,st+kt,Ge,st+kt];for(let Yi=0,Bs=ae.length;Yi<Bs;++Yi)if(g!==Z&&Z<be[Yi]){const Oe=ae[Yi];Xe([Ge,st,Ge+dt,st+kt],[Oe[0],Oe[3],Oe[4],Oe[7]])&&(ei||(K.save(),ei=!0),K.beginPath(),K.moveTo(E[0],E[1]),K.lineTo(E[2],E[3]),K.lineTo(E[4],E[5]),K.lineTo(E[6],E[7]),K.moveTo(Oe[6],Oe[7]),K.lineTo(Oe[4],Oe[5]),K.lineTo(Oe[2],Oe[3]),K.lineTo(Oe[0],Oe[1]),K.clip())}ae.push(E),be.push(Z)}else K.clearRect(Ge,st,dt,kt);this.drawTileImage(Qt,e,Ge,st,dt,kt,Gs,Ui),ae&&!Ri?(ei&&K.restore(),this.renderedTiles.unshift(Qt)):this.renderedTiles.push(Qt),this.updateUsedTiles(e.usedTiles,d,Qt)}}return this.renderedRevision=u,this.renderedResolution=w,this.extentChanged=!this.renderedExtent_||!Fi(this.renderedExtent_,C),this.renderedExtent_=C,this.renderedPixelRatio=h,this.renderedProjection=r,this.manageTilePyramid(e,d,f,h,r,M,g,c.getPreload()),this.scheduleExpireCache(e,d),this.postRender(K,e),n.extent&&K.restore(),K.imageSmoothingEnabled=!0,N!==V.style.transform&&(V.style.transform=N),this.container}drawTileImage(e,t,n,s,r,o,a,l){const h=this.getTileImage(e);if(!h)return;const c=te(this),d=t.layerStatesArray[t.layerIndex],u=d.opacity*(l?e.getAlpha(c,t.time):1),f=u!==this.context.globalAlpha;f&&(this.context.save(),this.context.globalAlpha=u),this.context.drawImage(h,a,a,h.width-2*a,h.height-2*a,n,s,r,o),f&&this.context.restore(),u!==d.opacity?t.animate=!0:l&&e.endTransition(c)}getImage(){const e=this.context;return e?e.canvas:null}getTileImage(e){return e.getImage()}scheduleExpireCache(e,t){if(t.canExpireCache()){const n=(function(s,r,o){const a=te(s);a in o.usedTiles&&s.expireCache(o.viewState.projection,o.usedTiles[a])}).bind(null,t);e.postRenderFunctions.push(n)}}updateUsedTiles(e,t,n){const s=te(t);s in e||(e[s]={}),e[s][n.getKey()]=!0}manageTilePyramid(e,t,n,s,r,o,a,l,h){const c=te(t);c in e.wantedTiles||(e.wantedTiles[c]={});const d=e.wantedTiles[c],u=e.tileQueue,f=n.getMinZoom(),g=e.viewState.rotation,w=g?No(e.viewState.center,e.viewState.resolution,g,e.size):void 0;let M=0,m,T,y,x,_,p;for(p=f;p<=a;++p)for(T=n.getTileRangeForExtentAndZ(o,p,T),y=n.getResolution(p),x=T.minX;x<=T.maxX;++x)for(_=T.minY;_<=T.maxY;++_)g&&!n.tileCoordIntersectsViewport([p,x,_],w)||(a-p<=l?(++M,m=t.getTile(p,x,_,s,r),m.getState()==F.IDLE&&(d[m.getKey()]=!0,u.isKeyQueued(m.getKey())||u.enqueue([m,c,n.getTileCoordCenter(m.tileCoord),y])),h!==void 0&&h(m)):t.useTile(p,x,_,r));t.updateCacheSize(M,r)}}class rr extends x_{constructor(e){super(e)}createRenderer(){return new __(this)}}function oa(i){return Array.isArray(i)?Math.min(...i):i}const Ko={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"},en=[0,0,0],si=5;class tl{constructor(e){this.minZoom=e.minZoom!==void 0?e.minZoom:0,this.resolutions_=e.resolutions,J($d(this.resolutions_,(s,r)=>r-s),"`resolutions` must be sorted in descending order");let t;if(!e.origins){for(let s=0,r=this.resolutions_.length-1;s<r;++s)if(!t)t=this.resolutions_[s]/this.resolutions_[s+1];else if(this.resolutions_[s]/this.resolutions_[s+1]!==t){t=void 0;break}}this.zoomFactor_=t,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,J(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const n=e.extent;n!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=qt(n)),J(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,J(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:Ca,J(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=n!==void 0?n:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.sizes!==void 0?this.fullTileRanges_=e.sizes.map((s,r)=>{const o=new el(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(n){const a=this.getTileRangeForExtentAndZ(n,r);o.minX=Math.max(a.minX,o.minX),o.maxX=Math.min(a.maxX,o.maxX),o.minY=Math.max(a.minY,o.minY),o.maxY=Math.min(a.maxY,o.maxY)}return o}):n&&this.calculateTileRanges_(n)}forEachTileCoord(e,t,n){const s=this.getTileRangeForExtentAndZ(e,t);for(let r=s.minX,o=s.maxX;r<=o;++r)for(let a=s.minY,l=s.maxY;a<=l;++a)n([t,r,a])}forEachTileCoordParentTileRange(e,t,n,s){let r,o,a,l=null,h=e[0]-1;for(this.zoomFactor_===2?(o=e[1],a=e[2]):l=this.getTileCoordExtent(e,s);h>=this.minZoom;){if(o!==void 0&&a!==void 0?(o=Math.floor(o/2),a=Math.floor(a/2),r=Qi(o,o,a,a,n)):r=this.getTileRangeForExtentAndZ(l,h,n),t(h,r))return!0;--h}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(e){return this.origin_?this.origin_:this.origins_[e]}getResolution(e){return this.resolutions_[e]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(e,t,n){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){const r=e[1]*2,o=e[2]*2;return Qi(r,r+1,o,o+1,t)}const s=this.getTileCoordExtent(e,n||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,e[0]+1,t)}return null}getTileRangeForTileCoordAndZ(e,t,n){if(t>this.maxZoom||t<this.minZoom)return null;const s=e[0],r=e[1],o=e[2];if(t===s)return Qi(r,o,r,o,n);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,t-s),h=Math.floor(r*l),c=Math.floor(o*l);if(t<s)return Qi(h,h,c,c,n);const d=Math.floor(l*(r+1))-1,u=Math.floor(l*(o+1))-1;return Qi(h,d,c,u,n)}const a=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,t,n)}getTileRangeForExtentAndZ(e,t,n){this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,en);const s=en[1],r=en[2];this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,en);const o=en[1],a=en[2];return Qi(s,o,r,a,n)}getTileCoordCenter(e){const t=this.getOrigin(e[0]),n=this.getResolution(e[0]),s=tt(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*s[0]*n,t[1]-(e[2]+.5)*s[1]*n]}getTileCoordExtent(e,t){const n=this.getOrigin(e[0]),s=this.getResolution(e[0]),r=tt(this.getTileSize(e[0]),this.tmpSize_),o=n[0]+e[1]*r[0]*s,a=n[1]-(e[2]+1)*r[1]*s,l=o+r[0]*s,h=a+r[1]*s;return Vt(o,a,l,h,t)}getTileCoordForCoordAndResolution(e,t,n){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,n)}getTileCoordForXYAndResolution_(e,t,n,s,r){const o=this.getZForResolution(n),a=n/this.getResolution(o),l=this.getOrigin(o),h=tt(this.getTileSize(o),this.tmpSize_);let c=a*(e-l[0])/n/h[0],d=a*(l[1]-t)/n/h[1];return s?(c=li(c,si)-1,d=li(d,si)-1):(c=ln(c,si),d=ln(d,si)),Eh(o,c,d,r)}getTileCoordForXYAndZ_(e,t,n,s,r){const o=this.getOrigin(n),a=this.getResolution(n),l=tt(this.getTileSize(n),this.tmpSize_);let h=(e-o[0])/a/l[0],c=(o[1]-t)/a/l[1];return s?(h=li(h,si)-1,c=li(c,si)-1):(h=ln(h,si),c=ln(c,si)),Eh(n,h,c,r)}getTileCoordForCoordAndZ(e,t,n){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,n)}getTileCoordResolution(e){return this.resolutions_[e[0]]}getTileSize(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]}getFullTileRange(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null}getZForResolution(e,t){const n=Fr(this.resolutions_,e,t||0);return we(n,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(e,t){return Tc(t,0,t.length,2,this.getTileCoordExtent(e))}calculateTileRanges_(e){const t=this.resolutions_.length,n=new Array(t);for(let s=this.minZoom;s<t;++s)n[s]=this.getTileRangeForExtentAndZ(e,s);this.fullTileRanges_=n}}class p_ extends tl{constructor(e){super({extent:e.extent,origin:e.origin,origins:e.origins,resolutions:e.resolutions,tileSize:e.tileSize,tileSizes:e.tileSizes,sizes:e.sizes}),this.matrixIds_=e.matrixIds}getMatrixId(e){return this.matrixIds_[e]}getMatrixIds(){return this.matrixIds_}}function Gd(i){let e=i.getDefaultTileGrid();return e||(e=b_(i),i.setDefaultTileGrid(e)),e}function C_(i,e,t){const n=e[0],s=i.getTileCoordCenter(e),r=il(t);if(!Wr(r,s)){const o=Q(r),a=Math.ceil((r[0]-s[0])/o);return s[0]+=o*a,i.getTileCoordForCoordAndZ(s,n)}return e}function v_(i,e,t,n){n=n!==void 0?n:"top-left";const s=Wd(i,e,t);return new tl({extent:i,origin:vu(i,n),resolutions:s,tileSize:t})}function R_(i){const e=i||{},t=e.extent||ie("EPSG:3857").getExtent(),n={extent:t,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:Wd(t,e.maxZoom,e.tileSize,e.maxResolution)};return new tl(n)}function Wd(i,e,t,n){e=e!==void 0?e:Ju,t=tt(t!==void 0?t:Ca);const s=Ke(i),r=Q(i);n=n>0?n:Math.max(r/t[0],s/t[1]);const o=e+1,a=new Array(o);for(let l=0;l<o;++l)a[l]=n/Math.pow(2,l);return a}function b_(i,e,t,n){const s=il(i);return v_(s,e,t,n)}function il(i){i=ie(i);let e=i.getExtent();if(!e){const t=180*_n.degrees/i.getMetersPerUnit();e=Vt(-t,-t,t,t)}return e}class E_ extends Ja{constructor(e){super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate}),this.on,this.once,this.un,this.opaque_=e.opaque!==void 0?e.opaque:!1,this.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,this.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;const t=[256,256];this.tileGrid&&tt(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),t),this.tileCache=new Dd(e.cacheSize||0),this.tmpSize=[0,0],this.key_=e.key||"",this.tileOptions={transition:e.transition,interpolate:e.interpolate},this.zDirection=e.zDirection?e.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(e,t){const n=this.getTileCacheForProjection(e);n&&n.expireCache(t)}forEachLoadedTile(e,t,n,s){const r=this.getTileCacheForProjection(e);if(!r)return!1;let o=!0,a,l,h;for(let c=n.minX;c<=n.maxX;++c)for(let d=n.minY;d<=n.maxY;++d)l=so(t,c,d),h=!1,r.containsKey(l)&&(a=r.get(l),h=a.getState()===F.LOADED,h&&(h=s(a)!==!1)),h||(o=!1);return o}getGutterForProjection(e){return 0}getKey(){return this.key_}setKey(e){this.key_!==e&&(this.key_=e,this.changed())}getOpaque(e){return this.opaque_}getResolutions(e){const t=e?this.getTileGridForProjection(e):this.tileGrid;return t?t.getResolutions():null}getTile(e,t,n,s,r){return G()}getTileGrid(){return this.tileGrid}getTileGridForProjection(e){return this.tileGrid?this.tileGrid:Gd(e)}getTileCacheForProjection(e){const t=this.getProjection();return J(t===null||_t(t,e),"A VectorTile source can only be rendered if it has a projection compatible with the view projection."),this.tileCache}getTilePixelRatio(e){return this.tilePixelRatio_}getTilePixelSize(e,t,n){const s=this.getTileGridForProjection(n),r=this.getTilePixelRatio(t),o=tt(s.getTileSize(e),this.tmpSize);return r==1?o:rg(o,r,this.tmpSize)}getTileCoordForTileUrlFunction(e,t){t=t!==void 0?t:this.getProjection();const n=this.getTileGridForProjection(t);return this.getWrapX()&&t.isGlobal()&&(e=C_(n,e,t)),M_(e,n)?e:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(e,t){const n=this.getTileCacheForProjection(t);e>n.highWaterMark&&(n.highWaterMark=e)}useTile(e,t,n,s){}}class L_ extends At{constructor(e,t){super(e),this.tile=t}}function S_(i,e){const t=/\{z\}/g,n=/\{x\}/g,s=/\{y\}/g,r=/\{-y\}/g;return(function(o,a,l){if(o)return i.replace(t,o[0].toString()).replace(n,o[1].toString()).replace(s,o[2].toString()).replace(r,function(){const h=o[0],c=e.getFullTileRange(h);if(!c)throw new Error("The {-y} placeholder requires a tile grid with extent");return(c.getHeight()-o[2]-1).toString()})})}function I_(i,e){const t=i.length,n=new Array(t);for(let s=0;s<t;++s)n[s]=S_(i[s],e);return aa(n)}function aa(i){return i.length===1?i[0]:(function(e,t,n){if(!e)return;const s=Od(e),r=gi(s,i.length);return i[r](e,t,n)})}function zd(i){const e=[];let t=/\{([a-z])-([a-z])\}/.exec(i);if(t){const n=t[1].charCodeAt(0),s=t[2].charCodeAt(0);let r;for(r=n;r<=s;++r)e.push(i.replace(t[0],String.fromCharCode(r)));return e}if(t=/\{(\d+)-(\d+)\}/.exec(i),t){const n=parseInt(t[2],10);for(let s=parseInt(t[1],10);s<=n;s++)e.push(i.replace(t[0],s.toString()));return e}return e.push(i),e}class nl extends E_{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===nl.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(e){const t=e.target,n=te(t),s=t.getState();let r;s==F.LOADING?(this.tileLoadingKeys_[n]=!0,r=Ko.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],r=s==F.ERROR?Ko.TILELOADERROR:s==F.LOADED?Ko.TILELOADEND:void 0),r!=null&&this.dispatchEvent(new L_(r,t))}setTileLoadFunction(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()}setTileUrlFunction(e,t){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof t<"u"?this.setKey(t):this.changed()}setUrl(e){const t=zd(e);this.urls=t,this.setUrls(t)}setUrls(e){this.urls=e;const t=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(I_(e,this.tileGrid),t):this.setKey(t)}tileUrlFunction(e,t,n){}useTile(e,t,n){const s=so(e,t,n);this.tileCache.containsKey(s)&&this.tileCache.get(s)}}class sl extends nl{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:K_,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate!==void 0?e.interpolate:!0,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,this.tileClass=e.tileClass!==void 0?e.tileClass:Ad,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1}expireCache(e,t){const n=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==n?t:{});for(const s in this.tileCacheForProjection){const r=this.tileCacheForProjection[s];r.expireCache(r==n?t:{})}}getGutterForProjection(e){return this.getProjection()&&e&&!_t(this.getProjection(),e)?0:this.getGutter()}getGutter(){return 0}getKey(){let e=super.getKey();return this.getInterpolate()||(e+=":disable-interpolation"),e}getOpaque(e){return this.getProjection()&&e&&!_t(this.getProjection(),e)?!1:super.getOpaque(e)}getTileGridForProjection(e){const t=this.getProjection();if(this.tileGrid&&(!t||_t(t,e)))return this.tileGrid;const n=te(e);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=Gd(e)),this.tileGridForProjection[n]}getTileCacheForProjection(e){const t=this.getProjection();if(!t||_t(t,e))return this.tileCache;const n=te(e);return n in this.tileCacheForProjection||(this.tileCacheForProjection[n]=new Dd(this.tileCache.highWaterMark)),this.tileCacheForProjection[n]}createTile_(e,t,n,s,r,o){const a=[e,t,n],l=this.getTileCoordForTileUrlFunction(a,r),h=l?this.tileUrlFunction(l,s,r):void 0,c=new this.tileClass(a,h!==void 0?F.IDLE:F.EMPTY,h!==void 0?h:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return c.key=o,c.addEventListener(W.CHANGE,this.handleTileChange.bind(this)),c}getTile(e,t,n,s,r){const o=this.getProjection();if(!o||!r||_t(o,r))return this.getTileInternal(e,t,n,s,o||r);const a=this.getTileCacheForProjection(r),l=[e,t,n];let h;const c=Pd(l);a.containsKey(c)&&(h=a.get(c));const d=this.getKey();if(h&&h.key==d)return h;const u=this.getTileGridForProjection(o),f=this.getTileGridForProjection(r),g=this.getTileCoordForTileUrlFunction(l,r),w=new ra(o,u,r,f,l,g,this.getTilePixelRatio(s),this.getGutter(),(M,m,T,y)=>this.getTileInternal(M,m,T,y,o),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return w.key=d,h?(w.interimTile=h,w.refreshInterimChain(),a.replace(c,w)):a.set(c,w),w}getTileInternal(e,t,n,s,r){let o=null;const a=so(e,t,n),l=this.getKey();if(!this.tileCache.containsKey(a))o=this.createTile_(e,t,n,s,r,l),this.tileCache.set(a,o);else if(o=this.tileCache.get(a),o.key!=l){const h=o;o=this.createTile_(e,t,n,s,r,l),h.getState()==F.IDLE?o.interimTile=h.interimTile:o.interimTile=h,o.refreshInterimChain(),this.tileCache.replace(a,o)}return o}setRenderReprojectionEdges(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear();this.changed()}}setTileGridForProjection(e,t){const n=ie(e);if(n){const s=te(n);s in this.tileGridForProjection||(this.tileGridForProjection[s]=t)}}clear(){super.clear();for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear()}}function K_(i,e){i.getImage().src=e}class A_ extends sl{constructor(e){e=e||{};const t=e.projection!==void 0?e.projection:"EPSG:3857",n=e.tileGrid!==void 0?e.tileGrid:R_({extent:il(t),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:n,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0}getGutter(){return this.gutter_}}class P_ extends md{constructor(e,t,n,s,r,o,a){let l=e.getExtent();l&&e.canWrapX()&&(l=l.slice(),l[0]=-1/0,l[2]=1/0);let h=t.getExtent();h&&t.canWrapX()&&(h=h.slice(),h[0]=-1/0,h[2]=1/0);const c=h?wn(n,h):n,d=mt(c),u=Pr(e,t,d,s),f=kd,g=new Fd(e,t,c,l,u*f,s),w=g.calculateSourceExtent(),M=An(w)?null:o(w,u,r),m=M?H.IDLE:H.EMPTY,T=M?M.getPixelRatio():1;super(n,s,T,m),this.targetProj_=t,this.maxSourceExtent_=l,this.triangulation_=g,this.targetResolution_=s,this.targetExtent_=n,this.sourceImage_=M,this.sourcePixelRatio_=T,this.interpolate_=a,this.canvas_=null,this.sourceListenerKey_=null}disposeInternal(){this.state==H.LOADING&&this.unlistenSource_(),super.disposeInternal()}getImage(){return this.canvas_}getProjection(){return this.targetProj_}reproject_(){const e=this.sourceImage_.getState();if(e==H.LOADED){const t=Q(this.targetExtent_)/this.targetResolution_,n=Ke(this.targetExtent_)/this.targetResolution_;this.canvas_=Nd(t,n,this.sourcePixelRatio_,oa(this.sourceImage_.getResolution()),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_,!0)}this.state=e,this.changed()}load(){if(this.state==H.IDLE){this.state=H.LOADING,this.changed();const e=this.sourceImage_.getState();e==H.LOADED||e==H.ERROR?this.reproject_():(this.sourceListenerKey_=q(this.sourceImage_,W.CHANGE,function(t){const n=this.sourceImage_.getState();(n==H.LOADED||n==H.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}}unlistenSource_(){ce(this.sourceListenerKey_),this.sourceListenerKey_=null}}const fi=4,Ao={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"};class O_ extends At{constructor(e,t){super(e),this.image=t}}class o1 extends Ja{constructor(e){super({attributions:e.attributions,projection:e.projection,state:e.state,interpolate:e.interpolate!==void 0?e.interpolate:!0}),this.on,this.once,this.un,this.loader=e.loader||null,this.resolutions_=e.resolutions!==void 0?e.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0,this.image=null,this.wantedExtent_,this.wantedResolution_,this.static_=e.loader?e.loader.length===0:!1,this.wantedProjection_=null}getResolutions(){return this.resolutions_}setResolutions(e){this.resolutions_=e}findNearestResolution(e){const t=this.getResolutions();if(t){const n=Fr(t,e,0);e=t[n]}return e}getImage(e,t,n,s){const r=this.getProjection();if(!r||!s||_t(r,s))return r&&(s=r),this.getImageInternal(e,t,n,s);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&_t(this.reprojectedImage_.getProjection(),s)&&this.reprojectedImage_.getResolution()==t&&Fi(this.reprojectedImage_.getExtent(),e))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new P_(r,s,e,t,n,(o,a,l)=>this.getImageInternal(o,a,l,r),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}getImageInternal(e,t,n,s){if(this.loader){const r=Hd(e,t,n,1),o=this.findNearestResolution(t);if(this.image&&(this.static_||this.wantedProjection_===s&&(this.wantedExtent_&&Ct(this.wantedExtent_,r)||Ct(this.image.getExtent(),r))&&(this.wantedResolution_&&oa(this.wantedResolution_)===o||oa(this.image.getResolution())===o)))return this.image;this.wantedProjection_=s,this.wantedExtent_=r,this.wantedResolution_=o,this.image=new md(r,o,n,this.loader),this.image.addEventListener(W.CHANGE,this.handleImageChange.bind(this))}return this.image}handleImageChange(e){const t=e.target;let n;switch(t.getState()){case H.LOADING:this.loading=!0,n=Ao.IMAGELOADSTART;break;case H.LOADED:this.loading=!1,n=Ao.IMAGELOADEND;break;case H.ERROR:this.loading=!1,n=Ao.IMAGELOADERROR;break;default:return}this.hasListener(n)&&this.dispatchEvent(new O_(n,t))}}function a1(i,e){i.getImage().src=e}function Hd(i,e,t,n){const s=e/t,r=mt(i),o=li(Q(i)/s,fi),a=li(Ke(i)/s,fi),l=li((n-1)*o/2,fi),h=o+2*l,c=li((n-1)*a/2,fi),d=a+2*c;return rs(r,s,0,[h,d])}function ys(i,e){const t=[];Object.keys(e).forEach(function(s){e[s]!==null&&e[s]!==void 0&&t.push(s+"="+encodeURIComponent(e[s]))});const n=t.join("&");return i=i.replace(/[?&]$/,""),i+=i.includes("?")?"&":"?",i+n}const Or="1.3.0",Ih=[101,101];function Bd(i,e,t,n,s){s.WIDTH=t[0],s.HEIGHT=t[1];const r=n.getAxisOrientation();let o;const a=wa(s.VERSION,"1.3")>=0;return s[a?"CRS":"SRS"]=n.getCode(),a&&r.substr(0,2)=="ne"?o=[e[1],e[0],e[3],e[2]]:o=e,s.BBOX=o.join(","),ys(i,s)}function jd(i,e,t,n,s,r,o){r=Object.assign({REQUEST:"GetMap"},r);const a=e/t,l=[xl(Q(i)/a,fi),xl(Ke(i)/a,fi)];if(t!=1)switch(o){case"geoserver":const c=90*t+.5|0;"FORMAT_OPTIONS"in r?r.FORMAT_OPTIONS+=";dpi:"+c:r.FORMAT_OPTIONS="dpi:"+c;break;case"mapserver":r.MAP_RESOLUTION=90*t;break;case"carmentaserver":case"qgis":r.DPI=90*t;break;default:throw new Error("Unknown `serverType` configured")}return Bd(s,i,l,n,r)}function Dr(i,e){return Object.assign({REQUEST:e,SERVICE:"WMS",VERSION:Or,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},i)}function l1(i){const e=i.hidpi===void 0?!0:i.hidpi,t=ie(i.projection||"EPSG:3857"),n=i.ratio||1.5,s=i.load||Fy;return(r,o,a)=>{r=Hd(r,o,a,n),a!=1&&(!e||i.serverType===void 0)&&(a=1);const l=jd(r,o,a,t,i.url,Dr(i.params,"GetMap"),i.serverType),h=new Image;return i.crossOrigin!==null&&(h.crossOrigin=i.crossOrigin),s(h,l).then(c=>({image:c,extent:r,pixelRatio:a}))}}function h1(i,e,t){if(i.url===void 0)return;const n=ie(i.projection||"EPSG:3857"),s=rs(e,t,0,Ih),r={QUERY_LAYERS:i.params.LAYERS,INFO_FORMAT:"application/json"};Object.assign(r,Dr(i.params,"GetFeatureInfo"),i.params);const o=ln((e[0]-s[0])/t,fi),a=ln((s[3]-e[1])/t,fi),l=wa(r.VERSION,"1.3")>=0;return r[l?"I":"X"]=o,r[l?"J":"Y"]=a,Bd(i.url,s,Ih,n,r)}function c1(i,e){if(i.url===void 0)return;const t={SERVICE:"WMS",VERSION:Or,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(i.params===void 0||i.params.LAYER===void 0){const n=i.params.LAYERS;if(!(!Array.isArray(n)||n.length===1))return;t.LAYER=n}if(e!==void 0){const n=ie(i.projection||"EPSG:3857").getMetersPerUnit()||1,s=28e-5;t.SCALE=e*n/s}return Object.assign(t,i.params),ys(i.url,t)}class D_ extends sl{constructor(e){e=e||{};const t=Object.assign({},e.params),n="TRANSPARENT"in t?t.TRANSPARENT:!0;super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:!n,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileClass:e.tileClass,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,url:e.url,urls:e.urls,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,zDirection:e.zDirection}),this.gutter_=e.gutter!==void 0?e.gutter:0,this.params_=t,this.v13_=!0,this.serverType_=e.serverType,this.hidpi_=e.hidpi!==void 0?e.hidpi:!0,this.tmpExtent_=nt(),this.updateV13_(),this.setKey(this.getKeyForParams_())}getFeatureInfoUrl(e,t,n,s){const r=ie(n),o=this.getProjection()||r;let a=this.getTileGrid();a||(a=this.getTileGridForProjection(o));const l=Qh(e,r,o),h=Pr(o,r,e,t),c=a.getZForResolution(h,this.zDirection),d=a.getResolution(c),u=a.getTileCoordForCoordAndZ(l,c);if(a.getResolutions().length<=u[0])return;let f=a.getTileCoordExtent(u,this.tmpExtent_);const g=this.gutter_;g!==0&&(f=ss(f,d*g,f));const w={QUERY_LAYERS:this.params_.LAYERS};Object.assign(w,Dr(this.params_,"GetFeatureInfo"),s);const M=Math.floor((l[0]-f[0])/d),m=Math.floor((f[3]-l[1])/d);return w[this.v13_?"I":"X"]=M,w[this.v13_?"J":"Y"]=m,this.getRequestUrl_(u,f,1,o||r,w)}getLegendUrl(e,t){if(this.urls[0]===void 0)return;const n={SERVICE:"WMS",VERSION:Or,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(t===void 0||t.LAYER===void 0){const s=this.params_.LAYERS;if(!(!Array.isArray(s)||s.length===1))return;n.LAYER=s}if(e!==void 0){const s=this.getProjection()?this.getProjection().getMetersPerUnit():1,r=28e-5;n.SCALE=e*s/r}return Object.assign(n,t),ys(this.urls[0],n)}getGutter(){return this.gutter_}getParams(){return this.params_}getRequestUrl_(e,t,n,s,r){const o=this.urls;if(!o)return;let a;if(o.length==1)a=o[0];else{const l=gi(Od(e),o.length);a=o[l]}return jd(t,(this.tileGrid||this.getTileGridForProjection(s)).getResolution(e[0]),n,s,a,r,this.serverType_)}getTilePixelRatio(e){return!this.hidpi_||this.serverType_===void 0?1:e}getKeyForParams_(){let e=0;const t=[];for(const n in this.params_)t[e++]=n+"-"+this.params_[n];return t.join("/")}updateParams(e){Object.assign(this.params_,e),this.updateV13_(),this.setKey(this.getKeyForParams_())}updateV13_(){const e=this.params_.VERSION||Or;this.v13_=wa(e,"1.3")>=0}tileUrlFunction(e,t,n){let s=this.getTileGrid();if(s||(s=this.getTileGridForProjection(n)),s.getResolutions().length<=e[0])return;t!=1&&(!this.hidpi_||this.serverType_===void 0)&&(t=1);const r=s.getResolution(e[0]);let o=s.getTileCoordExtent(e,this.tmpExtent_);const a=this.gutter_;a!==0&&(o=ss(o,r*a,o));const l=Object.assign({},Dr(this.params_,"GetMap"));return this.getRequestUrl_(e,o,t,n,l)}}class Kh extends sl{constructor(e){const t=e.requestEncoding!==void 0?e.requestEncoding:"KVP",n=e.tileGrid;let s=e.urls;s===void 0&&e.url!==void 0&&(s=zd(e.url)),super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileClass:e.tileClass,tileGrid:n,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,urls:s,wrapX:e.wrapX!==void 0?e.wrapX:!1,transition:e.transition,zDirection:e.zDirection}),this.version_=e.version!==void 0?e.version:"1.0.0",this.format_=e.format!==void 0?e.format:"image/jpeg",this.dimensions_=e.dimensions!==void 0?e.dimensions:{},this.layer_=e.layer,this.matrixSet_=e.matrixSet,this.style_=e.style,this.requestEncoding_=t,this.setKey(this.getKeyForDimensions_()),s&&s.length>0&&(this.tileUrlFunction=aa(s.map(this.createFromWMTSTemplate.bind(this))))}setUrls(e){this.urls=e;const t=e.join(`
`);this.setTileUrlFunction(aa(e.map(this.createFromWMTSTemplate.bind(this))),t)}getDimensions(){return this.dimensions_}getFormat(){return this.format_}getLayer(){return this.layer_}getMatrixSet(){return this.matrixSet_}getRequestEncoding(){return this.requestEncoding_}getStyle(){return this.style_}getVersion(){return this.version_}getKeyForDimensions_(){const e=this.urls?this.urls.slice(0):[];for(const t in this.dimensions_)e.push(t+"-"+this.dimensions_[t]);return e.join("/")}updateDimensions(e){Object.assign(this.dimensions_,e),this.setKey(this.getKeyForDimensions_())}createFromWMTSTemplate(e){const t=this.requestEncoding_,n={layer:this.layer_,style:this.style_,tilematrixset:this.matrixSet_};t=="KVP"&&Object.assign(n,{Service:"WMTS",Request:"GetTile",Version:this.version_,Format:this.format_}),e=t=="KVP"?ys(e,n):e.replace(/\{(\w+?)\}/g,function(o,a){return a.toLowerCase()in n?n[a.toLowerCase()]:o});const s=this.tileGrid,r=this.dimensions_;return(function(o,a,l){if(!o)return;const h={TileMatrix:s.getMatrixId(o[0]),TileCol:o[1],TileRow:o[2]};Object.assign(h,r);let c=e;return t=="KVP"?c=ys(c,h):c=c.replace(/\{(\w+?)\}/g,function(d,u){return h[u]}),c})}}var k_=Object.getOwnPropertyDescriptor,F_=(i,e,t,n)=>{for(var s=n>1?void 0:n?k_(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=o(s)||s);return s};let Ah=class extends kr{connectedCallback(){super.connectedCallback(),this._configureMap()}get type(){return this.getAttribute("type")||"wmts"}get url(){return this.getAttribute("url")||this._url}set url(i){this._url=i}get layer(){return this.getAttribute("layer")||this._layer}set layer(i){this._layer=i}get title(){return this.getAttribute("title")||this._title}set title(i){this._title=i}get _map(){if(this.parentNode)return this.parentNode.map}get _projection(){if(this.parentNode&&this.parentNode instanceof Sn)return this.parentNode._projection}get _WMTSSource(){return this._wmtsSource=this._wmtsSource||this._createWMTSSource(),this._wmtsSource}get _vectorSource(){return this._createdVectorSource=this._createdVectorSource||this._createVectorSource(),this._createdVectorSource}get _hasBackgroundLayer(){return this.hasAttribute("background-layer")}get _backgroundType(){return this.getAttribute("background-type")||void 0}get _backgroundOptions(){if(!this._hasBackgroundLayer)return;if(this._hasBackgroundLayer&&!this._backgroundType&&!this.hasAttribute("background-options"))return{url:"https://cartoweb.wms.ngi.be/service",params:{FORMAT:"image/png",LAYERS:"crossborder,topo"}};const i=this.getAttribute("background-options");try{return JSON.parse(i)}catch(e){console.warn("Invalid background-options JSON:",e);return}}get _extent(){return this._projection?.getExtent()}get _matrixSet(){switch(this._projection?.getCode()){case ud():return"BPL2008VL";case gd():return"BPL72VL";default:return"WGS84VL"}}_configureMap(){this._map&&this._map.addBaseLayerAndOverlayMapLayer(this._createBaseLayer(),this._createBaseLayer())}_createWMTSSource(){const i=Q(this._extent)/256,e=new Array(16),t=new Array(16);for(let n=0;n<16;++n)e[n]=i/Math.pow(2,n),t[n]=n;return new Kh({url:this.url,layer:this.layer,matrixSet:this._matrixSet,format:"image/png",projection:this._projection,tileGrid:new p_({extent:this._extent,origin:qt(this._extent),resolutions:e,matrixIds:t}),style:""})}_createVectorSource(){const i=this;return new Rh({format:new od({dataProjection:i._projection}),url(){return`${i.url}&typeName=${i.layer}`},strategy:e_})}_createBackgroundLayer(){const i=this._backgroundOptions,e=.3;switch(this._backgroundType){case"xyz":return new rr({source:new A_(i),opacity:e});case"wmts":return new rr({source:new Kh(i),opacity:e});case"vector":return new _h({source:new Rh(i),opacity:e});case"wms":default:return new rr({source:new D_(i),opacity:e})}}_createBaseLayer(){const i=this.hasAttribute("background-layer"),e=[];switch(i&&e.push(this._createBackgroundLayer()),this.type){case"wmts":e.push(new rr({title:this.title,type:"base",source:this._WMTSSource}));break;case"wfs":e.push(new _h({source:this._vectorSource,style:new it({stroke:new St({color:"rgba(0, 0, 0, 1.0)",width:1}),fill:new Mt({color:"rgba(255, 0, 0, 1.0)"})})}));break;default:return null}return new Ci({layers:e})}};Ah=F_([la("vl-map-baselayer")],Ah);export{Uf as $,Xf as A,is as B,Ds as C,ct as D,W as E,Mt as F,od as G,je as H,Ls as I,_s as J,s1 as K,bt as L,At as M,U_ as N,Pc as O,Mr as P,V_ as Q,nn as R,it as S,rr as T,r1 as U,sa as V,Kh as W,A_ as X,n_ as Y,$f as Z,Ss as _,Ah as a,Ld as a$,j_ as a0,jf as a1,ph as a2,ut as a3,Do as a4,fe as a5,z_ as a6,zt as a7,ur as a8,zo as a9,Ut as aA,ie as aB,Vt as aC,hT as aD,J_ as aE,e1 as aF,i1 as aG,uT as aH,Q_ as aI,ec as aJ,e_ as aK,bh as aL,Hi as aM,Xe as aN,Vh as aO,uf as aP,hc as aQ,xs as aR,Ec as aS,Fl as aT,ri as aU,Ol as aV,br as aW,Oi as aX,Br as aY,we as aZ,Ur as a_,Ii as aa,tc as ab,Uh as ac,pi as ad,Pu as ae,H_ as af,Fe as ag,jm as ah,t1 as ai,dT as aj,cT as ak,G as al,$_ as am,ea as an,ue as ao,q_ as ap,Va as aq,Ya as ar,cc as as,Z_ as at,$r as au,Lr as av,Sr as aw,fT as ax,Ln as ay,ls as az,St as b,wn as b0,Le as b1,An as b2,H as b3,pe as b4,Wr as b5,Ke as b6,Xt as b7,xa as b8,ic as b9,Ct as ba,o1 as bb,a1 as bc,Pr as bd,Qh as be,h1 as bf,c1 as bg,l1 as bh,Fy as bi,a_ as bj,q as bk,ce as bl,W_ as bm,B_ as bn,D_ as c,Ar as d,Sn as e,p_ as f,qt as g,gd as h,ud as i,Q as j,xy as k,_h as l,In as m,Rh as n,J as o,te as p,Hh as q,nt as r,ss as s,Au as t,Qd as u,Ou as v,mt as w,Zr as x,Y_ as y,X_ as z};
