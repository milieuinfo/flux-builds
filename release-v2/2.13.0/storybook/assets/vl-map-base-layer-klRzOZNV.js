import{f as Na,w as vh,i as Ih,v as lm}from"./iframe-69xRVzLO.js";class Gi{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const ts={PROPERTYCHANGE:"propertychange"};class bh{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}function hm(n,t,e){let i,s;e=e||bn;let r=0,o=n.length,a=!1;for(;r<o;)i=r+(o-r>>1),s=+e(n[i],t),s<0?r=i+1:(o=i,a=!s);return a?r:~r}function bn(n,t){return n>t?1:n<t?-1:0}function Aa(n,t,e){if(n[0]<=t)return 0;const i=n.length;if(t<=n[i-1])return i-1;if(typeof e=="function"){for(let s=1;s<i;++s){const r=n[s];if(r===t)return s;if(r<t)return e(t,n[s-1],r)>0?s-1:s}return i-1}if(e>0){for(let s=1;s<i;++s)if(n[s]<t)return s-1;return i-1}if(e<0){for(let s=1;s<i;++s)if(n[s]<=t)return s;return i-1}for(let s=1;s<i;++s){if(n[s]==t)return s;if(n[s]<t)return n[s-1]-t<t-n[s]?s-1:s}return i-1}function cm(n,t,e){for(;t<e;){const i=n[t];n[t]=n[e],n[e]=i,++t,--e}}function Li(n,t){const e=Array.isArray(t)?t:[t],i=e.length;for(let s=0;s<i;s++)n[n.length]=e[s]}function Dn(n,t){const e=n.length;if(e!==t.length)return!1;for(let i=0;i<e;i++)if(n[i]!==t[i])return!1;return!0}function um(n,t,e){const i=t||bn;return n.every(function(s,r){if(r===0)return!0;const o=i(n[r-1],s);return!(o>0||o===0)})}function Br(){return!0}function ho(){return!1}function Vs(){}function Rd(n){let t=!1,e,i,s;return function(){const r=Array.prototype.slice.call(arguments);return(!t||this!==s||!Dn(r,i))&&(t=!0,s=this,i=r,e=n.apply(this,arguments)),e}}function dm(n){function t(){let e;try{e=n()}catch(i){return Promise.reject(i)}return e instanceof Promise?e:Promise.resolve(e)}return t()}function co(n){for(const t in n)delete n[t]}function es(n){let t;for(t in n)return!1;return!t}class uo extends bh{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;const i=this.listeners_||(this.listeners_={}),s=i[t]||(i[t]=[]);s.includes(e)||s.push(e)}dispatchEvent(t){const e=typeof t=="string",i=e?t:t.type,s=this.listeners_&&this.listeners_[i];if(!s)return;const r=e?new Gi(t):t;r.target||(r.target=this.eventTarget_||this);const o=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});i in o||(o[i]=0,a[i]=0),++o[i];let l;for(let h=0,c=s.length;h<c;++h)if("handleEvent"in s[h]?l=s[h].handleEvent(r):l=s[h].call(this,r),l===!1||r.propagationStopped){l=!1;break}if(--o[i]===0){let h=a[i];for(delete a[i];h--;)this.removeEventListener(i,Vs);delete o[i]}return l}disposeInternal(){this.listeners_&&co(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return this.listeners_?t?t in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(t,e){if(!this.listeners_)return;const i=this.listeners_[t];if(!i)return;const s=i.indexOf(e);s!==-1&&(this.pendingRemovals_&&t in this.pendingRemovals_?(i[s]=Vs,++this.pendingRemovals_[t]):(i.splice(s,1),i.length===0&&delete this.listeners_[t]))}}const $={CHANGE:"change",ERROR:"error",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function ot(n,t,e,i,s){if(i&&i!==n&&(e=e.bind(i)),s){const o=e;e=function(){n.removeEventListener(t,e),o.apply(this,arguments)}}const r={target:n,type:t,listener:e};return n.addEventListener(t,e),r}function Hr(n,t,e,i){return ot(n,t,e,i,!0)}function St(n){n&&n.target&&(n.target.removeEventListener(n.type,n.listener),co(n))}class go extends uo{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent($.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){const i=t.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=ot(this,t[r],e);return s}return ot(this,t,e)}onceInternal(t,e){let i;if(Array.isArray(t)){const s=t.length;i=new Array(s);for(let r=0;r<s;++r)i[r]=Hr(this,t[r],e)}else i=Hr(this,t,e);return e.ol_key=i,i}unInternal(t,e){const i=e.ol_key;if(i)gm(i);else if(Array.isArray(t))for(let s=0,r=t.length;s<r;++s)this.removeEventListener(t[s],e);else this.removeEventListener(t,e)}}go.prototype.on;go.prototype.once;go.prototype.un;function gm(n){if(Array.isArray(n))for(let t=0,e=n.length;t<e;++t)St(n[t]);else St(n)}function q(){throw new Error("Unimplemented abstract method.")}let fm=0;function Tt(n){return n.ol_uid||(n.ol_uid=String(++fm))}class Zc extends Gi{constructor(t,e,i){super(t),this.key=e,this.oldValue=i}}class mi extends go{constructor(t){super(),this.on,this.once,this.un,Tt(this),this.values_=null,t!==void 0&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let i;i=`change:${t}`,this.hasListener(i)&&this.dispatchEvent(new Zc(i,t,e)),i=ts.PROPERTYCHANGE,this.hasListener(i)&&this.dispatchEvent(new Zc(i,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,i){const s=this.values_||(this.values_={});if(i)s[t]=e;else{const r=s[t];s[t]=e,r!==e&&this.notify(t,r)}}setProperties(t,e){for(const i in t)this.set(i,t[i],e)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){const i=this.values_[t];delete this.values_[t],es(this.values_)&&(this.values_=null),e||this.notify(t,i)}}}const Ti={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"},Ln=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",mm=Ln.includes("firefox"),wm=Ln.includes("safari")&&!Ln.includes("chrom");wm&&(Ln.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(Ln));const ym=Ln.includes("webkit")&&!Ln.includes("edge"),Ed=Ln.includes("macintosh"),vd=typeof devicePixelRatio<"u"?devicePixelRatio:1,Lh=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Sh=typeof Image<"u"&&Image.prototype.decode,_m=typeof createImageBitmap=="function",Id=(function(){let n=!1;try{const t=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("_",null,t),window.removeEventListener("_",null,t)}catch{}return n})();function pe(n,t,e,i){let s;return e&&e.length?s=e.shift():Lh?s=new OffscreenCanvas(n||300,t||300):s=document.createElement("canvas"),n&&(s.width=n),t&&(s.height=t),s.getContext("2d",i)}function Oa(n){const t=n.canvas;t.width=1,t.height=1,n.clearRect(0,0,1,1)}function pm(n){let t=n.offsetWidth;const e=getComputedStyle(n);return t+=parseInt(e.marginLeft,10)+parseInt(e.marginRight,10),t}function xm(n){let t=n.offsetHeight;const e=getComputedStyle(n);return t+=parseInt(e.marginTop,10)+parseInt(e.marginBottom,10),t}function js(n,t){const e=t.parentNode;e&&e.replaceChild(n,t)}function na(n){return n&&n.parentNode?n.parentNode.removeChild(n):null}function bd(n){for(;n.lastChild;)n.removeChild(n.lastChild)}function Tm(n,t){const e=n.childNodes;for(let i=0;;++i){const s=e[i],r=t[i];if(!s&&!r)break;if(s!==r){if(!s){n.appendChild(r);continue}if(!r){n.removeChild(s),--i;continue}n.insertBefore(r,s)}}}class cr extends mi{constructor(t){super();const e=t.element;e&&!t.target&&!e.style.pointerEvents&&(e.style.pointerEvents="auto"),this.element=e||null,this.target_=null,this.map_=null,this.listenerKeys=[],t.render&&(this.render=t.render),t.target&&this.setTarget(t.target)}disposeInternal(){na(this.element),super.disposeInternal()}getMap(){return this.map_}setMap(t){this.map_&&na(this.element);for(let e=0,i=this.listenerKeys.length;e<i;++e)St(this.listenerKeys[e]);this.listenerKeys.length=0,this.map_=t,t&&((this.target_?this.target_:t.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==Vs&&this.listenerKeys.push(ot(t,Ti.POSTRENDER,this.render,this)),t.render())}render(t){}setTarget(t){this.target_=typeof t=="string"?document.getElementById(t):t}}const Go="ol-hidden",Mm="ol-selectable",ls="ol-unselectable",$c="ol-unsupported",fo="ol-control",sa="ol-collapsed",Cm=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""),"i"),Jc=["style","variant","weight","size","lineHeight","family"],Ld=function(n){const t=n.match(Cm);if(!t)return null;const e={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"};for(let i=0,s=Jc.length;i<s;++i){const r=t[i+1];r!==void 0&&(e[Jc[i]]=r)}return e.families=e.family.split(/,\s?/),e};class Rm extends cr{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=t.collapsed!==void 0?t.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=t.collapsible!==void 0,this.collapsible_=t.collapsible!==void 0?t.collapsible:!0,this.collapsible_||(this.collapsed_=!1);const e=t.className!==void 0?t.className:"ol-attribution",i=t.tipLabel!==void 0?t.tipLabel:"Attributions",s=t.expandClassName!==void 0?t.expandClassName:e+"-expand",r=t.collapseLabel!==void 0?t.collapseLabel:"›",o=t.collapseClassName!==void 0?t.collapseClassName:e+"-collapse";typeof r=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=r,this.collapseLabel_.className=o):this.collapseLabel_=r;const a=t.label!==void 0?t.label:"i";typeof a=="string"?(this.label_=document.createElement("span"),this.label_.textContent=a,this.label_.className=s):this.label_=a;const l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=i,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener($.CLICK,this.handleClick_.bind(this),!1);const h=e+" "+ls+" "+fo+(this.collapsed_&&this.collapsible_?" "+sa:"")+(this.collapsible_?"":" ol-uncollapsible"),c=this.element;c.className=h,c.appendChild(this.toggleButton_),c.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(t){const e=Array.from(new Set(this.getMap().getAllLayers().flatMap(s=>s.getAttributions(t)))),i=!this.getMap().getAllLayers().some(s=>s.getSource()&&s.getSource().getAttributionsCollapsible()===!1);return this.overrideCollapsible_||this.setCollapsible(i),e}updateElement_(t){if(!t){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const e=this.collectSourceAttributions_(t),i=e.length>0;if(this.renderedVisible_!=i&&(this.element.style.display=i?"":"none",this.renderedVisible_=i),!Dn(e,this.renderedAttributions_)){bd(this.ulElement_);for(let s=0,r=e.length;s<r;++s){const o=document.createElement("li");o.innerHTML=e[s],this.ulElement_.appendChild(o)}this.renderedAttributions_=e}}handleClick_(t){t.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(sa),this.collapsed_?js(this.collapseLabel_,this.label_):js(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(t){this.collapsible_!==t&&(this.collapsible_=t,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(t){this.userCollapsed_=t,!(!this.collapsible_||this.collapsed_===t)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(t){this.updateElement_(t.frameState)}}const Wt={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},Qc=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],tu={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"};class Em extends cr{constructor(t){t=t||{},super({element:document.createElement("div"),target:t.target}),this.on,this.once,this.un,this.keys_=t.keys!==void 0?t.keys:!1,this.source_=t.source,this.isInFullscreen_=!1,this.boundHandleMapTargetChange_=this.handleMapTargetChange_.bind(this),this.cssClassName_=t.className!==void 0?t.className:"ol-full-screen",this.documentListeners_=[],this.activeClassName_=t.activeClassName!==void 0?t.activeClassName.split(" "):[this.cssClassName_+"-true"],this.inactiveClassName_=t.inactiveClassName!==void 0?t.inactiveClassName.split(" "):[this.cssClassName_+"-false"];const e=t.label!==void 0?t.label:"⤢";this.labelNode_=typeof e=="string"?document.createTextNode(e):e;const i=t.labelActive!==void 0?t.labelActive:"×";this.labelActiveNode_=typeof i=="string"?document.createTextNode(i):i;const s=t.tipLabel?t.tipLabel:"Toggle full-screen";this.button_=document.createElement("button"),this.button_.title=s,this.button_.setAttribute("type","button"),this.button_.appendChild(this.labelNode_),this.button_.addEventListener($.CLICK,this.handleClick_.bind(this),!1),this.setClassName_(this.button_,this.isInFullscreen_),this.element.className=`${this.cssClassName_} ${ls} ${fo}`,this.element.appendChild(this.button_)}handleClick_(t){t.preventDefault(),this.handleFullScreen_()}handleFullScreen_(){const t=this.getMap();if(!t)return;const e=t.getOwnerDocument();if(eu(e))if(iu(e))Im(e);else{let i;this.source_?i=typeof this.source_=="string"?e.getElementById(this.source_):this.source_:i=t.getTargetElement(),this.keys_?vm(i):Sd(i)}}handleFullScreenChange_(){const t=this.getMap();if(!t)return;const e=this.isInFullscreen_;this.isInFullscreen_=iu(t.getOwnerDocument()),e!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?(js(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(tu.ENTERFULLSCREEN)):(js(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(tu.LEAVEFULLSCREEN)),t.updateSize())}setClassName_(t,e){e?(t.classList.remove(...this.inactiveClassName_),t.classList.add(...this.activeClassName_)):(t.classList.remove(...this.activeClassName_),t.classList.add(...this.inactiveClassName_))}setMap(t){const e=this.getMap();e&&e.removeChangeListener(Wt.TARGET,this.boundHandleMapTargetChange_),super.setMap(t),this.handleMapTargetChange_(),t&&t.addChangeListener(Wt.TARGET,this.boundHandleMapTargetChange_)}handleMapTargetChange_(){const t=this.documentListeners_;for(let i=0,s=t.length;i<s;++i)St(t[i]);t.length=0;const e=this.getMap();if(e){const i=e.getOwnerDocument();eu(i)?this.element.classList.remove($c):this.element.classList.add($c);for(let s=0,r=Qc.length;s<r;++s)t.push(ot(i,Qc[s],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}}}function eu(n){const t=n.body;return!!(t.webkitRequestFullscreen||t.requestFullscreen&&n.fullscreenEnabled)}function iu(n){return!!(n.webkitIsFullScreen||n.fullscreenElement)}function Sd(n){n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}function vm(n){n.webkitRequestFullscreen?n.webkitRequestFullscreen():Sd(n)}function Im(n){n.exitFullscreen?n.exitFullscreen():n.webkitExitFullscreen&&n.webkitExitFullscreen()}const zl={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown"},qs={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};let Pa=class{constructor(t){this.code_=t.code,this.units_=t.units,this.extent_=t.extent!==void 0?t.extent:null,this.worldExtent_=t.worldExtent!==void 0?t.worldExtent:null,this.axisOrientation_=t.axisOrientation!==void 0?t.axisOrientation:"enu",this.global_=t.global!==void 0?t.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||qs[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(t){this.global_=t,this.canWrapX_=!!(t&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(t){this.defaultTileGrid_=t}setExtent(t){this.extent_=t,this.canWrapX_=!!(this.global_&&t)}setWorldExtent(t){this.worldExtent_=t}setGetPointResolution(t){this.getPointResolutionFunc_=t}getPointResolutionFunc(){return this.getPointResolutionFunc_}};const mo=6378137,Ls=Math.PI*mo,bm=[-Ls,-Ls,Ls,Ls],Lm=[-180,-85,180,85],Wo=mo*Math.log(Math.tan(Math.PI/2));class _s extends Pa{constructor(t){super({code:t,units:"m",extent:bm,global:!0,worldExtent:Lm,getPointResolution:function(e,i){return e/Math.cosh(i[1]/mo)}})}}const nu=[new _s("EPSG:3857"),new _s("EPSG:102100"),new _s("EPSG:102113"),new _s("EPSG:900913"),new _s("http://www.opengis.net/def/crs/EPSG/0/3857"),new _s("http://www.opengis.net/gml/srs/epsg.xml#3857")];function Sm(n,t,e){const i=n.length;e=e>1?e:2,t===void 0&&(e>2?t=n.slice():t=new Array(i));for(let s=0;s<i;s+=e){t[s]=Ls*n[s]/180;let r=mo*Math.log(Math.tan(Math.PI*(+n[s+1]+90)/360));r>Wo?r=Wo:r<-Wo&&(r=-Wo),t[s+1]=r}return t}function Nm(n,t,e){const i=n.length;e=e>1?e:2,t===void 0&&(e>2?t=n.slice():t=new Array(i));for(let s=0;s<i;s+=e)t[s]=180*n[s]/Ls,t[s+1]=360*Math.atan(Math.exp(n[s+1]/mo))/Math.PI-90;return t}const Am=6378137,su=[-180,-90,180,90],Om=Math.PI*Am/180;class zn extends Pa{constructor(t,e){super({code:t,units:"degrees",extent:su,axisOrientation:e,global:!0,metersPerUnit:Om,worldExtent:su})}}const ru=[new zn("CRS:84"),new zn("EPSG:4326","neu"),new zn("urn:ogc:def:crs:OGC:1.3:CRS84"),new zn("urn:ogc:def:crs:OGC:2:84"),new zn("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new zn("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new zn("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let Bl={};function Pm(n){return Bl[n]||Bl[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function Km(n,t){Bl[n]=t}let ks={};function Zs(n,t,e){const i=n.getCode(),s=t.getCode();i in ks||(ks[i]={}),ks[i][s]=e}function Nd(n,t){let e;return n in ks&&t in ks[n]&&(e=ks[n][t]),e}const qt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Hl(n){const t=Be();for(let e=0,i=n.length;e<i;++e)Wr(t,n[e]);return t}function Dm(n,t,e){const i=Math.min.apply(null,n),s=Math.min.apply(null,t),r=Math.max.apply(null,n),o=Math.max.apply(null,t);return en(i,s,r,o,e)}function Yr(n,t,e){return e?(e[0]=n[0]-t,e[1]=n[1]-t,e[2]=n[2]+t,e[3]=n[3]+t,e):[n[0]-t,n[1]-t,n[2]+t,n[3]+t]}function Ad(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n.slice()}function hs(n,t,e){let i,s;return t<n[0]?i=n[0]-t:n[2]<t?i=t-n[2]:i=0,e<n[1]?s=n[1]-e:n[3]<e?s=e-n[3]:s=0,i*i+s*s}function Ka(n,t){return Nh(n,t[0],t[1])}function hi(n,t){return n[0]<=t[0]&&t[2]<=n[2]&&n[1]<=t[1]&&t[3]<=n[3]}function Nh(n,t,e){return n[0]<=t&&t<=n[2]&&n[1]<=e&&e<=n[3]}function Yl(n,t){const e=n[0],i=n[1],s=n[2],r=n[3],o=t[0],a=t[1];let l=qt.UNKNOWN;return o<e?l=l|qt.LEFT:o>s&&(l=l|qt.RIGHT),a<i?l=l|qt.BELOW:a>r&&(l=l|qt.ABOVE),l===qt.UNKNOWN&&(l=qt.INTERSECTING),l}function Be(){return[1/0,1/0,-1/0,-1/0]}function en(n,t,e,i,s){return s?(s[0]=n,s[1]=t,s[2]=e,s[3]=i,s):[n,t,e,i]}function ur(n){return en(1/0,1/0,-1/0,-1/0,n)}function Od(n,t){const e=n[0],i=n[1];return en(e,i,e,i,t)}function Ah(n,t,e,i,s){const r=ur(s);return Kd(r,n,t,e,i)}function is(n,t){return n[0]==t[0]&&n[2]==t[2]&&n[1]==t[1]&&n[3]==t[3]}function Pd(n,t){return t[0]<n[0]&&(n[0]=t[0]),t[2]>n[2]&&(n[2]=t[2]),t[1]<n[1]&&(n[1]=t[1]),t[3]>n[3]&&(n[3]=t[3]),n}function Wr(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function Kd(n,t,e,i,s){for(;e<i;e+=s)Fm(n,t[e],t[e+1]);return n}function Fm(n,t,e){n[0]=Math.min(n[0],t),n[1]=Math.min(n[1],e),n[2]=Math.max(n[2],t),n[3]=Math.max(n[3],e)}function Dd(n,t){let e;return e=t(Da(n)),e||(e=t(wo(n)),e)||(e=t(Fa(n)),e)||(e=t(rn(n)),e)?e:!1}function Xl(n){let t=0;return dr(n)||(t=wt(n)*ae(n)),t}function Da(n){return[n[0],n[1]]}function wo(n){return[n[2],n[1]]}function fi(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function km(n,t){let e;if(t==="bottom-left")e=Da(n);else if(t==="bottom-right")e=wo(n);else if(t==="top-left")e=rn(n);else if(t==="top-right")e=Fa(n);else throw new Error("Invalid corner");return e}function Xr(n,t,e,i,s){const[r,o,a,l,h,c,u,d]=Ul(n,t,e,i);return en(Math.min(r,a,h,u),Math.min(o,l,c,d),Math.max(r,a,h,u),Math.max(o,l,c,d),s)}function Ul(n,t,e,i){const s=t*i[0]/2,r=t*i[1]/2,o=Math.cos(e),a=Math.sin(e),l=s*o,h=s*a,c=r*o,u=r*a,d=n[0],g=n[1];return[d-l+u,g-h-c,d-l-u,g-h+c,d+l-u,g+h+c,d+l+u,g+h-c,d-l+u,g-h-c]}function ae(n){return n[3]-n[1]}function Gs(n,t,e){const i=e||Be();return be(n,t)?(n[0]>t[0]?i[0]=n[0]:i[0]=t[0],n[1]>t[1]?i[1]=n[1]:i[1]=t[1],n[2]<t[2]?i[2]=n[2]:i[2]=t[2],n[3]<t[3]?i[3]=n[3]:i[3]=t[3]):ur(i),i}function rn(n){return[n[0],n[3]]}function Fa(n){return[n[2],n[3]]}function wt(n){return n[2]-n[0]}function be(n,t){return n[0]<=t[2]&&n[2]>=t[0]&&n[1]<=t[3]&&n[3]>=t[1]}function dr(n){return n[2]<n[0]||n[3]<n[1]}function Gm(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n}function Wm(n,t){const e=(n[2]-n[0])/2*(t-1),i=(n[3]-n[1])/2*(t-1);n[0]-=e,n[2]+=e,n[1]-=i,n[3]+=i}function zm(n,t,e){let i=!1;const s=Yl(n,t),r=Yl(n,e);if(s===qt.INTERSECTING||r===qt.INTERSECTING)i=!0;else{const o=n[0],a=n[1],l=n[2],h=n[3],c=t[0],u=t[1],d=e[0],g=e[1],f=(g-u)/(d-c);let m,w;r&qt.ABOVE&&!(s&qt.ABOVE)&&(m=d-(g-h)/f,i=m>=o&&m<=l),!i&&r&qt.RIGHT&&!(s&qt.RIGHT)&&(w=g-(d-l)*f,i=w>=a&&w<=h),!i&&r&qt.BELOW&&!(s&qt.BELOW)&&(m=d-(g-a)/f,i=m>=o&&m<=l),!i&&r&qt.LEFT&&!(s&qt.LEFT)&&(w=g-(d-o)*f,i=w>=a&&w<=h)}return i}function Bm(n,t,e,i){if(dr(n))return ur(e);let s=[];s=[n[0],n[1],n[2],n[1],n[2],n[3],n[0],n[3]],t(s,s,2);const r=[],o=[];for(let a=0,l=s.length;a<l;a+=2)r.push(s[a]),o.push(s[a+1]);return Dm(r,o,e)}function Fd(n,t){const e=t.getExtent(),i=fi(n);if(t.canWrapX()&&(i[0]<e[0]||i[0]>=e[2])){const s=wt(e),o=Math.floor((i[0]-e[0])/s)*s;n[0]-=o,n[2]-=o}return n}function Hm(n,t){if(t.canWrapX()){const e=t.getExtent();if(!isFinite(n[0])||!isFinite(n[2]))return[[e[0],n[1],e[2],n[3]]];Fd(n,t);const i=wt(e);if(wt(n)>i)return[[e[0],n[1],e[2],n[3]]];if(n[0]<e[0])return[[n[0]+i,n[1],e[2],n[3]],[e[0],n[1],n[2],n[3]]];if(n[2]>e[2])return[[n[0],n[1],e[2],n[3]],[e[0],n[1],n[2]-i,n[3]]]}return[n]}function kt(n,t,e){return Math.min(Math.max(n,t),e)}function Ym(n,t,e,i,s,r){const o=s-e,a=r-i;if(o!==0||a!==0){const l=((n-e)*o+(t-i)*a)/(o*o+a*a);l>1?(e=s,i=r):l>0&&(e+=o*l,i+=a*l)}return Zn(n,t,e,i)}function Zn(n,t,e,i){const s=e-n,r=i-t;return s*s+r*r}function Xm(n){const t=n.length;for(let i=0;i<t;i++){let s=i,r=Math.abs(n[i][i]);for(let a=i+1;a<t;a++){const l=Math.abs(n[a][i]);l>r&&(r=l,s=a)}if(r===0)return null;const o=n[s];n[s]=n[i],n[i]=o;for(let a=i+1;a<t;a++){const l=-n[a][i]/n[i][i];for(let h=i;h<t+1;h++)i==h?n[a][h]=0:n[a][h]+=l*n[i][h]}}const e=new Array(t);for(let i=t-1;i>=0;i--){e[i]=n[i][t]/n[i][i];for(let s=i-1;s>=0;s--)n[s][t]-=n[s][i]*e[i]}return e}function Qo(n){return n*Math.PI/180}function En(n,t){const e=n%t;return e*t<0?e+t:e}function ke(n,t,e){return n+e*(t-n)}function ka(n,t){const e=Math.pow(10,t);return Math.round(n*e)/e}function ou(n,t){return Math.round(ka(n,t))}function Ss(n,t){return Math.floor(ka(n,t))}function pn(n,t){return Math.ceil(ka(n,t))}function Oh(n,t){const e=(""+n).split("."),i=(""+t).split(".");for(let s=0;s<Math.max(e.length,i.length);s++){const r=parseInt(e[s]||"0",10),o=parseInt(i[s]||"0",10);if(r>o)return 1;if(o>r)return-1}return 0}function Um(n,t){return n[0]+=+t[0],n[1]+=+t[1],n}function P2(n,t){const e=t.getRadius(),i=t.getCenter(),s=i[0],r=i[1],o=n[0],a=n[1];let l=o-s;const h=a-r;l===0&&h===0&&(l=1);const c=Math.sqrt(l*l+h*h),u=s+e*l/c,d=r+e*h/c;return[u,d]}function Vm(n,t){const e=n[0],i=n[1],s=t[0],r=t[1],o=s[0],a=s[1],l=r[0],h=r[1],c=l-o,u=h-a,d=c===0&&u===0?0:(c*(e-o)+u*(i-a))/(c*c+u*u||0);let g,f;return d<=0?(g=o,f=a):d>=1?(g=l,f=h):(g=o+d*c,f=a+d*u),[g,f]}function ra(n,t){let e=!0;for(let i=n.length-1;i>=0;--i)if(n[i]!=t[i]){e=!1;break}return e}function Ph(n,t){const e=Math.cos(t),i=Math.sin(t),s=n[0]*e-n[1]*i,r=n[1]*e+n[0]*i;return n[0]=s,n[1]=r,n}function jm(n,t){return n[0]*=t,n[1]*=t,n}function kd(n,t){const e=n[0]-t[0],i=n[1]-t[1];return e*e+i*i}function K2(n,t){return Math.sqrt(kd(n,t))}function D2(n,t){return kd(n,Vm(n,t))}function Gd(n,t){if(t.canWrapX()){const e=wt(t.getExtent()),i=Wd(n,t,e);i&&(n[0]-=i*e)}return n}function Wd(n,t,e){const i=t.getExtent();let s=0;return t.canWrapX()&&(n[0]<i[0]||n[0]>i[2])&&(e=e||wt(i),s=Math.floor((n[0]-i[0])/e)),s}const qm=63710088e-1;function au(n,t,e){e=e||qm;const i=Qo(n[1]),s=Qo(t[1]),r=(s-i)/2,o=Qo(t[0]-n[0])/2,a=Math.sin(r)*Math.sin(r)+Math.sin(o)*Math.sin(o)*Math.cos(i)*Math.cos(s);return 2*e*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}function zd(...n){console.warn(...n)}let Vl=!0;function Zm(n){Vl=!1}function Kh(n,t){if(t!==void 0){for(let e=0,i=n.length;e<i;++e)t[e]=n[e];t=t}else t=n.slice();return t}function Bd(n,t){if(t!==void 0&&n!==t){for(let e=0,i=n.length;e<i;++e)t[e]=n[e];n=t}return n}function Hd(n){Km(n.getCode(),n),Zs(n,n,Kh)}function $m(n){n.forEach(Hd)}function at(n){return typeof n=="string"?Pm(n):n||null}function oa(n,t,e,i){n=at(n);let s;const r=n.getPointResolutionFunc();if(r){if(s=r(t,e),i&&i!==n.getUnits()){const o=n.getMetersPerUnit();o&&(s=s*o/qs[i])}}else{const o=n.getUnits();if(o=="degrees"&&!i||i=="degrees")s=t;else{const a=Fh(n,at("EPSG:4326"));if(a===Bd&&o!=="degrees")s=t*n.getMetersPerUnit();else{let h=[e[0]-t/2,e[1],e[0]+t/2,e[1],e[0],e[1]-t/2,e[0],e[1]+t/2];h=a(h,h,2);const c=au(h.slice(0,2),h.slice(2,4)),u=au(h.slice(4,6),h.slice(6,8));s=(c+u)/2}const l=i?qs[i]:n.getMetersPerUnit();l!==void 0&&(s/=l)}}return s}function jl(n){$m(n),n.forEach(function(t){n.forEach(function(e){t!==e&&Zs(t,e,Kh)})})}function Jm(n,t,e,i){n.forEach(function(s){t.forEach(function(r){Zs(s,r,e),Zs(r,s,i)})})}function Dh(n,t){return n?typeof n=="string"?at(n):n:at(t)}function lu(n){return(function(t,e,i){const s=t.length;i=i!==void 0?i:2,e=e!==void 0?e:new Array(s);for(let r=0;r<s;r+=i){const o=n(t.slice(r,r+i)),a=o.length;for(let l=0,h=i;l<h;++l)e[r+l]=l>=a?t[r+l]:o[l]}return e})}function Qm(n,t,e,i){const s=at(n),r=at(t);Zs(s,r,lu(e)),Zs(r,s,lu(i))}function qe(n,t){if(n===t)return!0;const e=n.getUnits()===t.getUnits();return(n.getCode()===t.getCode()||Fh(n,t)===Kh)&&e}function Fh(n,t){const e=n.getCode(),i=t.getCode();let s=Nd(e,i);return s||(s=Bd),s}function $s(n,t){const e=at(n),i=at(t);return Fh(e,i)}function Yd(n,t,e){return $s(t,e)(n,void 0,n.length)}function kh(n,t,e,i){const s=$s(t,e);return Bm(n,s,void 0)}function ql(n,t){return n}function qi(n,t){return Vl&&!ra(n,[0,0])&&n[0]>=-180&&n[0]<=180&&n[1]>=-90&&n[1]<=90&&(Vl=!1,zd("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),n}function Xd(n,t){return n}function Un(n,t){return n}function hu(n,t,e){return function(i){let s,r;if(n.canWrapX()){const o=n.getExtent(),a=wt(o);i=i.slice(0),r=Wd(i,n,a),r&&(i[0]=i[0]-r*a),i[0]=kt(i[0],o[0],o[2]),i[1]=kt(i[1],o[1],o[3]),s=e(i)}else s=e(i);return r&&t.canWrapX()&&(s[0]+=r*wt(t.getExtent())),s}}function t0(){jl(nu),jl(ru),Jm(ru,nu,Sm,Nm)}t0();const ve={ADD:"add",REMOVE:"remove"},cu={LENGTH:"length"};class zo extends Gi{constructor(t,e,i){super(t),this.element=e,this.index=i}}let Je=class extends mi{constructor(t,e){if(super(),this.on,this.once,this.un,e=e||{},this.unique_=!!e.unique,this.array_=t||[],this.unique_)for(let i=0,s=this.array_.length;i<s;++i)this.assertUnique_(this.array_[i],i);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(t){for(let e=0,i=t.length;e<i;++e)this.push(t[e]);return this}forEach(t){const e=this.array_;for(let i=0,s=e.length;i<s;++i)t(e[i],i,e)}getArray(){return this.array_}item(t){return this.array_[t]}getLength(){return this.get(cu.LENGTH)}insertAt(t,e){if(t<0||t>this.getLength())throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e),this.array_.splice(t,0,e),this.updateLength_(),this.dispatchEvent(new zo(ve.ADD,e,t))}pop(){return this.removeAt(this.getLength()-1)}push(t){this.unique_&&this.assertUnique_(t);const e=this.getLength();return this.insertAt(e,t),this.getLength()}remove(t){const e=this.array_;for(let i=0,s=e.length;i<s;++i)if(e[i]===t)return this.removeAt(i)}removeAt(t){if(t<0||t>=this.getLength())return;const e=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new zo(ve.REMOVE,e,t)),e}setAt(t,e){const i=this.getLength();if(t>=i){this.insertAt(t,e);return}if(t<0)throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e,t);const s=this.array_[t];this.array_[t]=e,this.dispatchEvent(new zo(ve.REMOVE,s,t)),this.dispatchEvent(new zo(ve.ADD,e,t))}updateLength_(){this.set(cu.LENGTH,this.array_.length)}assertUnique_(t,e){for(let i=0,s=this.array_.length;i<s;++i)if(this.array_[i]===t&&i!==e)throw new Error("Duplicate item added to a unique collection")}};function mt(n,t){if(!n)throw new Error(t)}new Array(6);function ui(){return[1,0,0,1,0,0]}function e0(n,t,e,i,s,r,o){return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n[4]=r,n[5]=o,n}function i0(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function Zt(n,t){const e=t[0],i=t[1];return t[0]=n[0]*e+n[2]*i+n[4],t[1]=n[1]*e+n[3]*i+n[5],t}function n0(n,t,e){return e0(n,t,0,0,e,0,0)}function nn(n,t,e,i,s,r,o,a){const l=Math.sin(r),h=Math.cos(r);return n[0]=i*h,n[1]=s*l,n[2]=-i*l,n[3]=s*h,n[4]=o*i*h-a*i*l+t,n[5]=o*s*l+a*s*h+e,n}function Gh(n,t){const e=s0(t);mt(e!==0,"Transformation matrix cannot be inverted");const i=t[0],s=t[1],r=t[2],o=t[3],a=t[4],l=t[5];return n[0]=o/e,n[1]=-s/e,n[2]=-r/e,n[3]=i/e,n[4]=(r*l-o*a)/e,n[5]=-(i*l-s*a)/e,n}function s0(n){return n[0]*n[3]-n[1]*n[2]}let uu;function Ud(n){const t="matrix("+n.join(", ")+")";if(Lh)return t;const e=uu||(uu=document.createElement("div"));return e.style.transform=t,e.style.transform}const Ur={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]};var te={name:"xyz",min:[0,0,0],channel:["X","Y","Z"],alias:["XYZ","ciexyz","cie1931"]};te.whitepoint={2:{A:[109.85,100,35.585],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.045592705167,100,108.9057750759878],D75:[94.972,100,122.638],F2:[99.187,100,67.395],F7:[95.044,100,108.755],F11:[100.966,100,64.37],E:[100,100,100]},10:{A:[111.144,100,35.2],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F2:[103.28,100,69.026],F7:[95.792,100,107.687],F11:[103.866,100,65.627],E:[100,100,100]}};te.max=te.whitepoint[2].D65;te.rgb=function(n,t){t=t||te.whitepoint[2].E;var e=n[0]/t[0],i=n[1]/t[1],s=n[2]/t[2],r,o,a;return r=e*3.240969941904521+i*-1.537383177570093+s*-.498610760293,o=e*-.96924363628087+i*1.87596750150772+s*.041555057407175,a=e*.055630079696993+i*-.20397695888897+s*1.056971514242878,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r=r*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,r=Math.min(Math.max(0,r),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[r*255,o*255,a*255]};Ur.xyz=function(n,t){var e=n[0]/255,i=n[1]/255,s=n[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92,s=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92;var r=e*.41239079926595+i*.35758433938387+s*.18048078840183,o=e*.21263900587151+i*.71516867876775+s*.072192315360733,a=e*.019330818715591+i*.11919477979462+s*.95053215224966;return t=t||te.whitepoint[2].E,[r*t[0],o*t[1],a*t[2]]};const Wh={name:"luv",min:[0,-134,-140],max:[100,224,122],channel:["lightness","u","v"],alias:["LUV","cieluv","cie1976"],xyz:function(n,t,e){var i,s,r,o,a,l,h,c,u,d,g,f,m;if(r=n[0],o=n[1],a=n[2],r===0)return[0,0,0];var w=.0011070564598794539;return t=t||"D65",e=e||2,u=te.whitepoint[e][t][0],d=te.whitepoint[e][t][1],g=te.whitepoint[e][t][2],f=4*u/(u+15*d+3*g),m=9*d/(u+15*d+3*g),i=o/(13*r)+f||0,s=a/(13*r)+m||0,h=r>8?d*Math.pow((r+16)/116,3):d*r*w,l=h*9*i/(4*s)||0,c=h*(12-3*i-20*s)/(4*s)||0,[l,h,c]}};te.luv=function(n,t,e){var i,s,r,o,a,l,h,c,u,d,g,f,m,w=.008856451679035631,_=903.2962962962961;t=t||"D65",e=e||2,u=te.whitepoint[e][t][0],d=te.whitepoint[e][t][1],g=te.whitepoint[e][t][2],f=4*u/(u+15*d+3*g),m=9*d/(u+15*d+3*g),l=n[0],h=n[1],c=n[2],i=4*l/(l+15*h+3*c)||0,s=9*h/(l+15*h+3*c)||0;var p=h/d;return r=p<=w?_*p:116*Math.pow(p,1/3)-16,o=13*r*(i-f),a=13*r*(s-m),[r,o,a]};var Vd={name:"lchuv",channel:["lightness","chroma","hue"],alias:["LCHuv","cielchuv"],min:[0,0,0],max:[100,100,360],luv:function(n){var t=n[0],e=n[1],i=n[2],s,r,o;return o=i/360*2*Math.PI,s=e*Math.cos(o),r=e*Math.sin(o),[t,s,r]},xyz:function(n){return Wh.xyz(Vd.luv(n))}};Wh.lchuv=function(n){var t=n[0],e=n[1],i=n[2],s=Math.sqrt(e*e+i*i),r=Math.atan2(i,e),o=r*360/2/Math.PI;return o<0&&(o+=360),[t,s,o]};te.lchuv=function(n){return Wh.lchuv(te.luv(n))};const du={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var gu={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function r0(n){var t,e=[],i=1,s;if(typeof n=="number")return{space:"rgb",values:[n>>>16,(n&65280)>>>8,n&255],alpha:1};if(typeof n=="number")return{space:"rgb",values:[n>>>16,(n&65280)>>>8,n&255],alpha:1};if(n=String(n).toLowerCase(),du[n])e=du[n].slice(),s="rgb";else if(n==="transparent")i=0,s="rgb",e=[0,0,0];else if(n[0]==="#"){var r=n.slice(1),o=r.length,a=o<=4;i=1,a?(e=[parseInt(r[0]+r[0],16),parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16)],o===4&&(i=parseInt(r[3]+r[3],16)/255)):(e=[parseInt(r[0]+r[1],16),parseInt(r[2]+r[3],16),parseInt(r[4]+r[5],16)],o===8&&(i=parseInt(r[6]+r[7],16)/255)),e[0]||(e[0]=0),e[1]||(e[1]=0),e[2]||(e[2]=0),s="rgb"}else if(t=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(n)){var l=t[1];s=l.replace(/a$/,"");var h=s==="cmyk"?4:s==="gray"?1:3;e=t[2].trim().split(/\s*[,\/]\s*|\s+/),s==="color"&&(s=e.shift()),e=e.map(function(c,u){if(c[c.length-1]==="%")return c=parseFloat(c)/100,u===3?c:s==="rgb"?c*255:s[0]==="h"||s[0]==="l"&&!u?c*100:s==="lab"?c*125:s==="lch"?u<2?c*150:c*360:s[0]==="o"&&!u?c:s==="oklab"?c*.4:s==="oklch"?u<2?c*.4:c*360:c;if(s[u]==="h"||u===2&&s[s.length-1]==="h"){if(gu[c]!==void 0)return gu[c];if(c.endsWith("deg"))return parseFloat(c);if(c.endsWith("turn"))return parseFloat(c)*360;if(c.endsWith("grad"))return parseFloat(c)*360/400;if(c.endsWith("rad"))return parseFloat(c)*180/Math.PI}return c==="none"?0:parseFloat(c)}),i=e.length>h?e.pop():1}else/[0-9](?:\s|\/|,)/.test(n)&&(e=n.match(/([0-9]+)/g).map(function(c){return parseFloat(c)}),s=n.match(/([a-z])/ig)?.join("")?.toLowerCase()||"rgb");return{space:s,values:e,alpha:i}}const wl={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(n){var t=n[0]/360,e=n[1]/100,i=n[2]/100,s,r,o,a,l,h=0;if(e===0)return l=i*255,[l,l,l];for(r=i<.5?i*(1+e):i+e-i*e,s=2*i-r,a=[0,0,0];h<3;)o=t+1/3*-(h-1),o<0?o++:o>1&&o--,l=6*o<1?s+(r-s)*6*o:2*o<1?r:3*o<2?s+(r-s)*(2/3-o)*6:s,a[h++]=l*255;return a}};Ur.hsl=function(n){var t=n[0]/255,e=n[1]/255,i=n[2]/255,s=Math.min(t,e,i),r=Math.max(t,e,i),o=r-s,a,l,h;return r===s?a=0:t===r?a=(e-i)/o:e===r?a=2+(i-t)/o:i===r&&(a=4+(t-e)/o),a=Math.min(a*60,360),a<0&&(a+=360),h=(s+r)/2,r===s?l=0:h<=.5?l=o/(r+s):l=o/(2-r-s),[a,l*100,h*100]};function o0(n){Array.isArray(n)&&n.raw&&(n=String.raw(...arguments)),n instanceof Number&&(n=+n);var t,e=r0(n);if(!e.space)return[];const i=e.space[0]==="h"?wl.min:Ur.min,s=e.space[0]==="h"?wl.max:Ur.max;return t=Array(3),t[0]=Math.min(Math.max(e.values[0],i[0]),s[0]),t[1]=Math.min(Math.max(e.values[1],i[1]),s[1]),t[2]=Math.min(Math.max(e.values[2],i[2]),s[2]),e.space[0]==="h"&&(t=wl.rgb(t)),t.push(Math.min(Math.max(e.alpha,0),1)),t}function jd(n){return typeof n=="string"?n:Zd(n)}const a0=1024,Ir={};let yl=0;function l0(n){if(n.length===4)return n;const t=n.slice();return t[3]=1,t}function fu(n){const t=te.lchuv(Ur.xyz(n));return t[3]=n[3],t}function h0(n){const t=te.rgb(Vd.xyz(n));return t[3]=n[3],t}function zh(n){if(Ir.hasOwnProperty(n))return Ir[n];if(yl>=a0){let e=0;for(const i in Ir)(e++&3)===0&&(delete Ir[i],--yl)}const t=o0(n);if(t.length!==4)throw new Error('Failed to parse "'+n+'" as color');for(const e of t)if(isNaN(e))throw new Error('Failed to parse "'+n+'" as color');return qd(t),Ir[n]=t,++yl,t}function aa(n){return Array.isArray(n)?n:zh(n)}function qd(n){return n[0]=kt(n[0]+.5|0,0,255),n[1]=kt(n[1]+.5|0,0,255),n[2]=kt(n[2]+.5|0,0,255),n[3]=kt(n[3],0,1),n}function Zd(n){let t=n[0];t!=(t|0)&&(t=t+.5|0);let e=n[1];e!=(e|0)&&(e=e+.5|0);let i=n[2];i!=(i|0)&&(i=i+.5|0);const s=n[3]===void 0?1:Math.round(n[3]*100)/100;return"rgba("+t+","+e+","+i+","+s+")"}function c0(n){try{return zh(n),!0}catch{return!1}}class u0{constructor(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}clear(){this.cache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let t=0;for(const e in this.cache_){const i=this.cache_[e];(t++&3)===0&&!i.hasListener()&&(delete this.cache_[e],--this.cacheSize_)}}}get(t,e,i){const s=mu(t,e,i);return s in this.cache_?this.cache_[s]:null}set(t,e,i,s){const r=mu(t,e,i);this.cache_[r]=s,++this.cacheSize_}setSize(t){this.maxCacheSize_=t,this.expire()}}function mu(n,t,e){const i=e?jd(e):"null";return t+":"+n+":"+i}const la=new u0,bt={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};class $d extends mi{constructor(t){super(),this.on,this.once,this.un,this.background_=t.background;const e=Object.assign({},t);typeof t.properties=="object"&&(delete e.properties,Object.assign(e,t.properties)),e[bt.OPACITY]=t.opacity!==void 0?t.opacity:1,mt(typeof e[bt.OPACITY]=="number","Layer opacity must be a number"),e[bt.VISIBLE]=t.visible!==void 0?t.visible:!0,e[bt.Z_INDEX]=t.zIndex,e[bt.MAX_RESOLUTION]=t.maxResolution!==void 0?t.maxResolution:1/0,e[bt.MIN_RESOLUTION]=t.minResolution!==void 0?t.minResolution:0,e[bt.MIN_ZOOM]=t.minZoom!==void 0?t.minZoom:-1/0,e[bt.MAX_ZOOM]=t.maxZoom!==void 0?t.maxZoom:1/0,this.className_=e.className!==void 0?e.className:"ol-layer",delete e.className,this.setProperties(e),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(t){const e=this.state_||{layer:this,managed:t===void 0?!0:t},i=this.getZIndex();return e.opacity=kt(Math.round(this.getOpacity()*100)/100,0,1),e.visible=this.getVisible(),e.extent=this.getExtent(),e.zIndex=i===void 0&&!e.managed?1/0:i,e.maxResolution=this.getMaxResolution(),e.minResolution=Math.max(this.getMinResolution(),0),e.minZoom=this.getMinZoom(),e.maxZoom=this.getMaxZoom(),this.state_=e,e}getLayersArray(t){return q()}getLayerStatesArray(t){return q()}getExtent(){return this.get(bt.EXTENT)}getMaxResolution(){return this.get(bt.MAX_RESOLUTION)}getMinResolution(){return this.get(bt.MIN_RESOLUTION)}getMinZoom(){return this.get(bt.MIN_ZOOM)}getMaxZoom(){return this.get(bt.MAX_ZOOM)}getOpacity(){return this.get(bt.OPACITY)}getSourceState(){return q()}getVisible(){return this.get(bt.VISIBLE)}getZIndex(){return this.get(bt.Z_INDEX)}setBackground(t){this.background_=t,this.changed()}setExtent(t){this.set(bt.EXTENT,t)}setMaxResolution(t){this.set(bt.MAX_RESOLUTION,t)}setMinResolution(t){this.set(bt.MIN_RESOLUTION,t)}setMaxZoom(t){this.set(bt.MAX_ZOOM,t)}setMinZoom(t){this.set(bt.MIN_ZOOM,t)}setOpacity(t){mt(typeof t=="number","Layer opacity must be a number"),this.set(bt.OPACITY,t)}setVisible(t){this.set(bt.VISIBLE,t)}setZIndex(t){this.set(bt.Z_INDEX,t)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const Si={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},se={ANIMATING:0,INTERACTING:1},Fe={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},d0=42,Bh=256;function wu(n,t,e){return(function(i,s,r,o,a){if(!i)return;if(!s&&!t)return i;const l=t?0:r[0]*s,h=t?0:r[1]*s,c=a?a[0]:0,u=a?a[1]:0;let d=n[0]+l/2+c,g=n[2]-l/2+c,f=n[1]+h/2+u,m=n[3]-h/2+u;d>g&&(d=(g+d)/2,g=d),f>m&&(f=(m+f)/2,m=f);let w=kt(i[0],d,g),_=kt(i[1],f,m);if(o&&e&&s){const p=30*s;w+=-p*Math.log(1+Math.max(0,d-i[0])/p)+p*Math.log(1+Math.max(0,i[0]-g)/p),_+=-p*Math.log(1+Math.max(0,f-i[1])/p)+p*Math.log(1+Math.max(0,i[1]-m)/p)}return[w,_]})}function g0(n){return n}function Hh(n,t,e,i){const s=wt(t)/e[0],r=ae(t)/e[1];return i?Math.min(n,Math.max(s,r)):Math.min(n,Math.min(s,r))}function Yh(n,t,e){let i=Math.min(n,t);const s=50;return i*=Math.log(1+s*Math.max(0,n/t-1))/s+1,e&&(i=Math.max(i,e),i/=Math.log(1+s*Math.max(0,e/n-1))/s+1),kt(i,e/2,t*2)}function f0(n,t,e,i){return t=t!==void 0?t:!0,(function(s,r,o,a){if(s!==void 0){const l=n[0],h=n[n.length-1],c=e?Hh(l,e,o,i):l;if(a)return t?Yh(s,c,h):kt(s,h,c);const u=Math.min(c,s),d=Math.floor(Aa(n,u,r));return n[d]>c&&d<n.length-1?n[d+1]:n[d]}})}function m0(n,t,e,i,s,r){return i=i!==void 0?i:!0,e=e!==void 0?e:0,(function(o,a,l,h){if(o!==void 0){const c=s?Hh(t,s,l,r):t;if(h)return i?Yh(o,c,e):kt(o,e,c);const u=1e-9,d=Math.ceil(Math.log(t/c)/Math.log(n)-u),g=-a*(.5-u)+.5,f=Math.min(c,o),m=Math.floor(Math.log(t/f)/Math.log(n)+g),w=Math.max(d,m),_=t/Math.pow(n,w);return kt(_,e,c)}})}function yu(n,t,e,i,s){return e=e!==void 0?e:!0,(function(r,o,a,l){if(r!==void 0){const h=i?Hh(n,i,a,s):n;return!e||!l?kt(r,t,h):Yh(r,h,t)}})}function Xh(n){if(n!==void 0)return 0}function _u(n){if(n!==void 0)return n}function w0(n){const t=2*Math.PI/n;return(function(e,i){if(i)return e;if(e!==void 0)return e=Math.floor(e/t+.5)*t,e})}function y0(n){const t=Qo(5);return(function(e,i){return i||e===void 0?e:Math.abs(e)<=t?0:e})}function Jd(n){return Math.pow(n,3)}function gr(n){return 1-Jd(1-n)}function _0(n){return 3*n*n-2*n*n*n}function p0(n){return n}function vn(n,t,e,i,s,r){r=r||[];let o=0;for(let a=t;a<e;a+=i){const l=n[a],h=n[a+1];r[o++]=s[0]*l+s[2]*h+s[4],r[o++]=s[1]*l+s[3]*h+s[5]}return r&&r.length!=o&&(r.length=o),r}function Qd(n,t,e,i,s,r,o){o=o||[];const a=Math.cos(s),l=Math.sin(s),h=r[0],c=r[1];let u=0;for(let d=t;d<e;d+=i){const g=n[d]-h,f=n[d+1]-c;o[u++]=h+g*a-f*l,o[u++]=c+g*l+f*a;for(let m=d+2;m<d+i;++m)o[u++]=n[m]}return o&&o.length!=u&&(o.length=u),o}function x0(n,t,e,i,s,r,o,a){a=a||[];const l=o[0],h=o[1];let c=0;for(let u=t;u<e;u+=i){const d=n[u]-l,g=n[u+1]-h;a[c++]=l+s*d,a[c++]=h+r*g;for(let f=u+2;f<u+i;++f)a[c++]=n[f]}return a&&a.length!=c&&(a.length=c),a}function T0(n,t,e,i,s,r,o){o=o||[];let a=0;for(let l=t;l<e;l+=i){o[a++]=n[l]+s,o[a++]=n[l+1]+r;for(let h=l+2;h<l+i;++h)o[a++]=n[h]}return o&&o.length!=a&&(o.length=a),o}const pu=ui();let tg=class extends mi{constructor(){super(),this.extent_=Be(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=Rd((t,e,i)=>{if(!i)return this.getSimplifiedGeometry(e);const s=this.clone();return s.applyTransform(i),s.getSimplifiedGeometry(e)})}simplifyTransformed(t,e){return this.simplifyTransformedInternal(this.getRevision(),t,e)}clone(){return q()}closestPointXY(t,e,i,s){return q()}containsXY(t,e){const i=this.getClosestPoint([t,e]);return i[0]===t&&i[1]===e}getClosestPoint(t,e){return e=e||[NaN,NaN],this.closestPointXY(t[0],t[1],e,1/0),e}intersectsCoordinate(t){return this.containsXY(t[0],t[1])}computeExtent(t){return q()}getExtent(t){if(this.extentRevision_!=this.getRevision()){const e=this.computeExtent(this.extent_);(isNaN(e[0])||isNaN(e[1]))&&ur(e),this.extentRevision_=this.getRevision()}return Gm(this.extent_,t)}rotate(t,e){q()}scale(t,e,i){q()}simplify(t){return this.getSimplifiedGeometry(t*t)}getSimplifiedGeometry(t){return q()}getType(){return q()}applyTransform(t){q()}intersectsExtent(t){return q()}translate(t,e){q()}transform(t,e){const i=at(t),s=i.getUnits()=="tile-pixels"?function(r,o,a){const l=i.getExtent(),h=i.getWorldExtent(),c=ae(h)/ae(l);return nn(pu,h[0],h[3],c,-c,0,0,0),vn(r,0,r.length,a,pu,o),$s(i,e)(r,o,a)}:$s(i,e);return this.applyTransform(s),this}};class cs extends tg{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(t){return Ah(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinates(){return q()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const e=this.getSimplifiedGeometryInternal(t);return e.getFlatCoordinates().length<this.flatCoordinates.length?e:(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getSimplifiedGeometryInternal(t){return this}getStride(){return this.stride}setFlatCoordinates(t,e){this.stride=xu(t),this.layout=t,this.flatCoordinates=e}setCoordinates(t,e){q()}setLayout(t,e,i){let s;if(t)s=xu(t);else{for(let r=0;r<i;++r){if(e.length===0){this.layout="XY",this.stride=2;return}e=e[0]}s=e.length,t=us(s)}this.layout=t,this.stride=s}applyTransform(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(t,e){const i=this.getFlatCoordinates();if(i){const s=this.getStride();Qd(i,0,i.length,s,t,e,i),this.changed()}}scale(t,e,i){e===void 0&&(e=t),i||(i=fi(this.getExtent()));const s=this.getFlatCoordinates();if(s){const r=this.getStride();x0(s,0,s.length,r,t,e,i,s),this.changed()}}translate(t,e){const i=this.getFlatCoordinates();if(i){const s=this.getStride();T0(i,0,i.length,s,t,e,i),this.changed()}}}function us(n){let t;return n==2?t="XY":n==3?t="XYZ":n==4&&(t="XYZM"),t}function xu(n){let t;return n=="XY"?t=2:n=="XYZ"||n=="XYM"?t=3:n=="XYZM"&&(t=4),t}function M0(n,t,e){const i=n.getFlatCoordinates();if(!i)return null;const s=n.getStride();return vn(i,0,i.length,s,t,e)}function Tu(n,t,e,i,s,r,o){const a=n[t],l=n[t+1],h=n[e]-a,c=n[e+1]-l;let u;if(h===0&&c===0)u=t;else{const d=((s-a)*h+(r-l)*c)/(h*h+c*c);if(d>1)u=e;else if(d>0){for(let g=0;g<i;++g)o[g]=ke(n[t+g],n[e+g],d);o.length=i;return}else u=t}for(let d=0;d<i;++d)o[d]=n[u+d];o.length=i}function Uh(n,t,e,i,s){let r=n[t],o=n[t+1];for(t+=i;t<e;t+=i){const a=n[t],l=n[t+1],h=Zn(r,o,a,l);h>s&&(s=h),r=a,o=l}return s}function Vh(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){const a=e[r];s=Uh(n,t,a,i,s),t=a}return s}function C0(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){const a=e[r];s=Vh(n,t,a,i,s),t=a[a.length-1]}return s}function jh(n,t,e,i,s,r,o,a,l,h,c){if(t==e)return h;let u,d;if(s===0){if(d=Zn(o,a,n[t],n[t+1]),d<h){for(u=0;u<i;++u)l[u]=n[t+u];return l.length=i,d}return h}c=c||[NaN,NaN];let g=t+i;for(;g<e;)if(Tu(n,g-i,g,i,o,a,c),d=Zn(o,a,c[0],c[1]),d<h){for(h=d,u=0;u<i;++u)l[u]=c[u];l.length=i,g+=i}else g+=i*Math.max((Math.sqrt(d)-Math.sqrt(h))/s|0,1);if(r&&(Tu(n,e-i,t,i,o,a,c),d=Zn(o,a,c[0],c[1]),d<h)){for(h=d,u=0;u<i;++u)l[u]=c[u];l.length=i}return h}function qh(n,t,e,i,s,r,o,a,l,h,c){c=c||[NaN,NaN];for(let u=0,d=e.length;u<d;++u){const g=e[u];h=jh(n,t,g,i,s,r,o,a,l,h,c),t=g}return h}function R0(n,t,e,i,s,r,o,a,l,h,c){c=c||[NaN,NaN];for(let u=0,d=e.length;u<d;++u){const g=e[u];h=qh(n,t,g,i,s,r,o,a,l,h,c),t=g[g.length-1]}return h}function E0(n,t,e,i){for(let s=0,r=e.length;s<r;++s)n[t++]=e[s];return t}function Ga(n,t,e,i){for(let s=0,r=e.length;s<r;++s){const o=e[s];for(let a=0;a<i;++a)n[t++]=o[a]}return t}function yo(n,t,e,i,s){s=s||[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=Ga(n,t,e[o],i);s[r++]=l,t=l}return s.length=r,s}function eg(n,t,e,i,s){s=s||[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=yo(n,t,e[o],i,s[r]);l.length===0&&(l[0]=t),s[r++]=l,t=l[l.length-1]}return s.length=r,s}function Wa(n,t,e,i,s,r,o){const a=(e-t)/i;if(a<3){for(;t<e;t+=i)r[o++]=n[t],r[o++]=n[t+1];return o}const l=new Array(a);l[0]=1,l[a-1]=1;const h=[t,e-i];let c=0;for(;h.length>0;){const u=h.pop(),d=h.pop();let g=0;const f=n[d],m=n[d+1],w=n[u],_=n[u+1];for(let p=d+i;p<u;p+=i){const x=n[p],T=n[p+1],M=Ym(x,T,f,m,w,_);M>g&&(c=p,g=M)}g>s&&(l[(c-t)/i]=1,d+i<c&&h.push(d,c),c+i<u&&h.push(c,u))}for(let u=0;u<a;++u)l[u]&&(r[o++]=n[t+u*i],r[o++]=n[t+u*i+1]);return o}function ig(n,t,e,i,s,r,o,a){for(let l=0,h=e.length;l<h;++l){const c=e[l];o=Wa(n,t,c,i,s,r,o),a.push(o),t=c}return o}function Yn(n,t){return t*Math.round(n/t)}function v0(n,t,e,i,s,r,o){if(t==e)return o;let a=Yn(n[t],s),l=Yn(n[t+1],s);t+=i,r[o++]=a,r[o++]=l;let h,c;do if(h=Yn(n[t],s),c=Yn(n[t+1],s),t+=i,t==e)return r[o++]=h,r[o++]=c,o;while(h==a&&c==l);for(;t<e;){const u=Yn(n[t],s),d=Yn(n[t+1],s);if(t+=i,u==h&&d==c)continue;const g=h-a,f=c-l,m=u-a,w=d-l;if(g*w==f*m&&(g<0&&m<g||g==m||g>0&&m>g)&&(f<0&&w<f||f==w||f>0&&w>f)){h=u,c=d;continue}r[o++]=h,r[o++]=c,a=h,l=c,h=u,c=d}return r[o++]=h,r[o++]=c,o}function Zh(n,t,e,i,s,r,o,a){for(let l=0,h=e.length;l<h;++l){const c=e[l];o=v0(n,t,c,i,s,r,o),a.push(o),t=c}return o}function I0(n,t,e,i,s,r,o,a){for(let l=0,h=e.length;l<h;++l){const c=e[l],u=[];o=Zh(n,t,c,i,s,r,o,u),a.push(u),t=c[c.length-1]}return o}function xn(n,t,e,i,s){s=s!==void 0?s:[];let r=0;for(let o=t;o<e;o+=i)s[r++]=n.slice(o,o+i);return s.length=r,s}function Vr(n,t,e,i,s){s=s!==void 0?s:[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=e[o];s[r++]=xn(n,t,l,i,s[r]),t=l}return s.length=r,s}function Zl(n,t,e,i,s){s=s!==void 0?s:[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=e[o];s[r++]=l.length===1&&l[0]===t?[]:Vr(n,t,l,i,s[r]),t=l[l.length-1]}return s.length=r,s}function ng(n,t,e,i){let s=0,r=n[e-i],o=n[e-i+1];for(;t<e;t+=i){const a=n[t],l=n[t+1];s+=o*a-r*l,r=a,o=l}return s/2}function sg(n,t,e,i){let s=0;for(let r=0,o=e.length;r<o;++r){const a=e[r];s+=ng(n,t,a,i),t=a}return s}function b0(n,t,e,i){let s=0;for(let r=0,o=e.length;r<o;++r){const a=e[r];s+=sg(n,t,a,i),t=a[a.length-1]}return s}let Mu=class $l extends cs{constructor(t,e){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,e!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}clone(){return new $l(this.flatCoordinates.slice(),this.layout)}closestPointXY(t,e,i,s){return s<hs(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Uh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),jh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,e,i,s))}getArea(){return ng(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return xn(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(t){const e=[];return e.length=Wa(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new $l(e,"XY")}getType(){return"LinearRing"}intersectsExtent(t){return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ga(this.flatCoordinates,0,t,this.stride),this.changed()}},ha=class rg extends cs{constructor(t,e){super(),this.setCoordinates(t,e)}clone(){const t=new rg(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){const r=this.flatCoordinates,o=Zn(t,e,r[0],r[1]);if(o<s){const a=this.stride;for(let l=0;l<a;++l)i[l]=r[l];return i.length=a,o}return s}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(t){return Od(this.flatCoordinates,t)}getType(){return"Point"}intersectsExtent(t){return Nh(t,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(t,e){this.setLayout(e,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=E0(this.flatCoordinates,0,t,this.stride),this.changed()}};function L0(n,t,e,i,s){return!Dd(s,function(o){return!Vn(n,t,e,i,o[0],o[1])})}function Vn(n,t,e,i,s,r){let o=0,a=n[e-i],l=n[e-i+1];for(;t<e;t+=i){const h=n[t],c=n[t+1];l<=r?c>r&&(h-a)*(r-l)-(s-a)*(c-l)>0&&o++:c<=r&&(h-a)*(r-l)-(s-a)*(c-l)<0&&o--,a=h,l=c}return o!==0}function $h(n,t,e,i,s,r){if(e.length===0||!Vn(n,t,e[0],i,s,r))return!1;for(let o=1,a=e.length;o<a;++o)if(Vn(n,e[o-1],e[o],i,s,r))return!1;return!0}function S0(n,t,e,i,s,r){if(e.length===0)return!1;for(let o=0,a=e.length;o<a;++o){const l=e[o];if($h(n,t,l,i,s,r))return!0;t=l[l.length-1]}return!1}function Jh(n,t,e,i,s,r,o){let a,l,h,c,u,d,g;const f=s[r+1],m=[];for(let p=0,x=e.length;p<x;++p){const T=e[p];for(c=n[T-i],d=n[T-i+1],a=t;a<T;a+=i)u=n[a],g=n[a+1],(f<=d&&g<=f||d<=f&&f<=g)&&(h=(f-d)/(g-d)*(u-c)+c,m.push(h)),c=u,d=g}let w=NaN,_=-1/0;for(m.sort(bn),c=m[0],a=1,l=m.length;a<l;++a){u=m[a];const p=Math.abs(u-c);p>_&&(h=(c+u)/2,$h(n,t,e,i,h,f)&&(w=h,_=p)),c=u}return isNaN(w)&&(w=s[r]),o?(o.push(w,f,_),o):[w,f,_]}function og(n,t,e,i,s){let r=[];for(let o=0,a=e.length;o<a;++o){const l=e[o];r=Jh(n,t,l,i,s,2*o,r),t=l[l.length-1]}return r}function ag(n,t,e,i,s){let r;for(t+=i;t<e;t+=i)if(r=s(n.slice(t-i,t),n.slice(t,t+i)),r)return r;return!1}function za(n,t,e,i,s){const r=Kd(Be(),n,t,e,i);return be(s,r)?hi(s,r)||r[0]>=s[0]&&r[2]<=s[2]||r[1]>=s[1]&&r[3]<=s[3]?!0:ag(n,t,e,i,function(o,a){return zm(s,o,a)}):!1}function N0(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){if(za(n,t,e[r],i,s))return!0;t=e[r]}return!1}function lg(n,t,e,i,s){return!!(za(n,t,e,i,s)||Vn(n,t,e,i,s[0],s[1])||Vn(n,t,e,i,s[0],s[3])||Vn(n,t,e,i,s[2],s[1])||Vn(n,t,e,i,s[2],s[3]))}function hg(n,t,e,i,s){if(!lg(n,t,e[0],i,s))return!1;if(e.length===1)return!0;for(let r=1,o=e.length;r<o;++r)if(L0(n,e[r-1],e[r],i,s)&&!za(n,e[r-1],e[r],i,s))return!1;return!0}function A0(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){const a=e[r];if(hg(n,t,a,i,s))return!0;t=a[a.length-1]}return!1}function O0(n,t,e,i){for(;t<e-i;){for(let s=0;s<i;++s){const r=n[t+s];n[t+s]=n[e-i+s],n[e-i+s]=r}t+=i,e-=i}}function Qh(n,t,e,i){let s=0,r=n[e-i],o=n[e-i+1];for(;t<e;t+=i){const a=n[t],l=n[t+1];s+=(a-r)*(l+o),r=a,o=l}return s===0?void 0:s>0}function tc(n,t,e,i,s){s=s!==void 0?s:!1;for(let r=0,o=e.length;r<o;++r){const a=e[r],l=Qh(n,t,a,i);if(r===0){if(s&&l||!s&&!l)return!1}else if(s&&!l||!s&&l)return!1;t=a}return!0}function cg(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){const a=e[r];if(!tc(n,t,a,i,s))return!1;a.length&&(t=a[a.length-1])}return!0}function ca(n,t,e,i,s){s=s!==void 0?s:!1;for(let r=0,o=e.length;r<o;++r){const a=e[r],l=Qh(n,t,a,i);(r===0?s&&l||!s&&!l:s&&!l||!s&&l)&&O0(n,t,a,i),t=a}return t}function Jl(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r)t=ca(n,t,e[r],i,s);return t}function P0(n,t){const e=[];let i=0,s=0,r;for(let o=0,a=t.length;o<a;++o){const l=t[o],h=Qh(n,i,l,2);if(r===void 0&&(r=h),h===r)e.push(t.slice(s,o+1));else{if(e.length===0)continue;e[e.length-1].push(t[s])}s=o+1,i=l}return e}let Js=class Ql extends cs{constructor(t,e,i){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,e!==void 0&&i?(this.setFlatCoordinates(e,t),this.ends_=i):this.setCoordinates(t,e)}appendLinearRing(t){this.flatCoordinates?Li(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new Ql(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<hs(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Vh(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),qh(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,e,i,s))}containsXY(t,e){return $h(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,e)}getArea(){return sg(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(t){let e;return t!==void 0?(e=this.getOrientedFlatCoordinates().slice(),ca(e,0,this.ends_,this.stride,t)):e=this.flatCoordinates,Vr(e,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const t=fi(this.getExtent());this.flatInteriorPoint_=Jh(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new ha(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(t){return t<0||this.ends_.length<=t?null:new Mu(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLinearRings(){const t=this.layout,e=this.flatCoordinates,i=this.ends_,s=[];let r=0;for(let o=0,a=i.length;o<a;++o){const l=i[o],h=new Mu(e.slice(r,l),t);s.push(h),r=l}return s}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;tc(t,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=ca(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=Zh(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),e,0,i),new Ql(e,"XY",i)}getType(){return"Polygon"}intersectsExtent(t){return hg(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const i=yo(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}};function th(n){if(dr(n))throw new Error("Cannot create polygon from empty extent");const t=n[0],e=n[1],i=n[2],s=n[3],r=[t,e,t,s,i,s,i,e,t,e];return new Js(r,"XY",[r.length])}function G2(n,t,e){t=t||32;const i=n.getStride(),s=n.getLayout(),r=n.getCenter(),o=i*(t+1),a=new Array(o);for(let c=0;c<o;c+=i){a[c]=0,a[c+1]=0;for(let u=2;u<i;u++)a[c+u]=r[u]}const l=[a.length],h=new Js(a,s,l);return K0(h,r,n.getRadius()),h}function K0(n,t,e,i){const s=n.getFlatCoordinates(),r=n.getStride(),o=s.length/r-1,a=0;for(let l=0;l<=o;++l){const h=l*r,c=a+En(l,o)*2*Math.PI/o;s[h]=t[0]+e*Math.cos(c),s[h+1]=t[1]+e*Math.sin(c)}n.changed()}const _l=0;class Ze extends mi{constructor(t){super(),this.on,this.once,this.un,t=Object.assign({},t),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=Dh(t.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,t.projection&&Zm(),t.center&&(t.center=qi(t.center,this.projection_)),t.extent&&(t.extent=Un(t.extent,this.projection_)),this.applyOptions_(t)}applyOptions_(t){const e=Object.assign({},t);for(const a in Fe)delete e[a];this.setProperties(e,!0);const i=F0(t);this.maxResolution_=i.maxResolution,this.minResolution_=i.minResolution,this.zoomFactor_=i.zoomFactor,this.resolutions_=t.resolutions,this.padding_=t.padding,this.minZoom_=i.minZoom;const s=D0(t),r=i.constraint,o=k0(t);this.constraints_={center:s,resolution:r,rotation:o},this.setRotation(t.rotation!==void 0?t.rotation:0),this.setCenterInternal(t.center!==void 0?t.center:null),t.resolution!==void 0?this.setResolution(t.resolution):t.zoom!==void 0&&this.setZoom(t.zoom)}get padding(){return this.padding_}set padding(t){let e=this.padding_;this.padding_=t;const i=this.getCenterInternal();if(i){const s=t||[0,0,0,0];e=e||[0,0,0,0];const r=this.getResolution(),o=r/2*(s[3]-e[3]+e[1]-s[1]),a=r/2*(s[0]-e[0]+e[2]-s[2]);this.setCenterInternal([i[0]+o,i[1]-a])}}getUpdatedOptions_(t){const e=this.getProperties();return e.resolution!==void 0?e.resolution=this.getResolution():e.zoom=this.getZoom(),e.center=this.getCenterInternal(),e.rotation=this.getRotation(),Object.assign({},e,t)}animate(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);const e=new Array(arguments.length);for(let i=0;i<e.length;++i){let s=arguments[i];s.center&&(s=Object.assign({},s),s.center=qi(s.center,this.getProjection())),s.anchor&&(s=Object.assign({},s),s.anchor=qi(s.anchor,this.getProjection())),e[i]=s}this.animateInternal.apply(this,e)}animateInternal(t){let e=arguments.length,i;e>1&&typeof arguments[e-1]=="function"&&(i=arguments[e-1],--e);let s=0;for(;s<e&&!this.isDef();++s){const c=arguments[s];c.center&&this.setCenterInternal(c.center),c.zoom!==void 0?this.setZoom(c.zoom):c.resolution&&this.setResolution(c.resolution),c.rotation!==void 0&&this.setRotation(c.rotation)}if(s===e){i&&Bo(i,!0);return}let r=Date.now(),o=this.targetCenter_.slice(),a=this.targetResolution_,l=this.targetRotation_;const h=[];for(;s<e;++s){const c=arguments[s],u={start:r,complete:!1,anchor:c.anchor,duration:c.duration!==void 0?c.duration:1e3,easing:c.easing||_0,callback:i};if(c.center&&(u.sourceCenter=o,u.targetCenter=c.center.slice(),o=u.targetCenter),c.zoom!==void 0?(u.sourceResolution=a,u.targetResolution=this.getResolutionForZoom(c.zoom),a=u.targetResolution):c.resolution&&(u.sourceResolution=a,u.targetResolution=c.resolution,a=u.targetResolution),c.rotation!==void 0){u.sourceRotation=l;const d=En(c.rotation-l+Math.PI,2*Math.PI)-Math.PI;u.targetRotation=l+d,l=u.targetRotation}G0(u)?u.complete=!0:r+=u.duration,h.push(u)}this.animations_.push(h),this.setHint(se.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[se.ANIMATING]>0}getInteracting(){return this.hints_[se.INTERACTING]>0}cancelAnimations(){this.setHint(se.ANIMATING,-this.hints_[se.ANIMATING]);let t;for(let e=0,i=this.animations_.length;e<i;++e){const s=this.animations_[e];if(s[0].callback&&Bo(s[0].callback,!1),!t)for(let r=0,o=s.length;r<o;++r){const a=s[r];if(!a.complete){t=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=t,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;const t=Date.now();let e=!1;for(let i=this.animations_.length-1;i>=0;--i){const s=this.animations_[i];let r=!0;for(let o=0,a=s.length;o<a;++o){const l=s[o];if(l.complete)continue;const h=t-l.start;let c=l.duration>0?h/l.duration:1;c>=1?(l.complete=!0,c=1):r=!1;const u=l.easing(c);if(l.sourceCenter){const d=l.sourceCenter[0],g=l.sourceCenter[1],f=l.targetCenter[0],m=l.targetCenter[1];this.nextCenter_=l.targetCenter;const w=d+u*(f-d),_=g+u*(m-g);this.targetCenter_=[w,_]}if(l.sourceResolution&&l.targetResolution){const d=u===1?l.targetResolution:l.sourceResolution+u*(l.targetResolution-l.sourceResolution);if(l.anchor){const g=this.getViewportSize_(this.getRotation()),f=this.constraints_.resolution(d,0,g,!0);this.targetCenter_=this.calculateCenterZoom(f,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=d,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){const d=u===1?En(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+u*(l.targetRotation-l.sourceRotation);if(l.anchor){const g=this.constraints_.rotation(d,!0);this.targetCenter_=this.calculateCenterRotate(g,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=d}if(this.applyTargetState_(!0),e=!0,!l.complete)break}if(r){this.animations_[i]=null,this.setHint(se.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;const o=s[0].callback;o&&Bo(o,!0)}}this.animations_=this.animations_.filter(Boolean),e&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(t,e){let i;const s=this.getCenterInternal();return s!==void 0&&(i=[s[0]-e[0],s[1]-e[1]],Ph(i,t-this.getRotation()),Um(i,e)),i}calculateCenterZoom(t,e){let i;const s=this.getCenterInternal(),r=this.getResolution();if(s!==void 0&&r!==void 0){const o=e[0]-t*(e[0]-s[0])/r,a=e[1]-t*(e[1]-s[1])/r;i=[o,a]}return i}getViewportSize_(t){const e=this.viewportSize_;if(t){const i=e[0],s=e[1];return[Math.abs(i*Math.cos(t))+Math.abs(s*Math.sin(t)),Math.abs(i*Math.sin(t))+Math.abs(s*Math.cos(t))]}return e}setViewportSize(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){const t=this.getCenterInternal();return t&&ql(t,this.getProjection())}getCenterInternal(){return this.get(Fe.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(t){return t!==void 0?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()}calculateExtent(t){const e=this.calculateExtentInternal(t);return Xd(e,this.getProjection())}calculateExtentInternal(t){t=t||this.getViewportSizeMinusPadding_();const e=this.getCenterInternal();mt(e,"The view center is not defined");const i=this.getResolution();mt(i!==void 0,"The view resolution is not defined");const s=this.getRotation();return mt(s!==void 0,"The view rotation is not defined"),Xr(e,i,s,t)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))}setConstrainResolution(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))}getProjection(){return this.projection_}getResolution(){return this.get(Fe.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(t,e){return this.getResolutionForExtentInternal(Un(t,this.getProjection()),e)}getResolutionForExtentInternal(t,e){e=e||this.getViewportSizeMinusPadding_();const i=wt(t)/e[0],s=ae(t)/e[1];return Math.max(i,s)}getResolutionForValueFunction(t){t=t||2;const e=this.getConstrainedResolution(this.maxResolution_),i=this.minResolution_,s=Math.log(e/i)/Math.log(t);return(function(r){return e/Math.pow(t,r*s)})}getRotation(){return this.get(Fe.ROTATION)}getValueForResolutionFunction(t){const e=Math.log(t||2),i=this.getConstrainedResolution(this.maxResolution_),s=this.minResolution_,r=Math.log(i/s)/e;return(function(o){return Math.log(i/o)/e/r})}getViewportSizeMinusPadding_(t){let e=this.getViewportSize_(t);const i=this.padding_;return i&&(e=[e[0]-i[1]-i[3],e[1]-i[0]-i[2]]),e}getState(){const t=this.getProjection(),e=this.getResolution(),i=this.getRotation();let s=this.getCenterInternal();const r=this.padding_;if(r){const o=this.getViewportSizeMinusPadding_();s=pl(s,this.getViewportSize_(),[o[0]/2+r[3],o[1]/2+r[0]],e,i)}return{center:s.slice(0),projection:t!==void 0?t:null,resolution:e,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:i,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let t;const e=this.getResolution();return e!==void 0&&(t=this.getZoomForResolution(e)),t}getZoomForResolution(t){let e=this.minZoom_||0,i,s;if(this.resolutions_){const r=Aa(this.resolutions_,t,1);e=r,i=this.resolutions_[r],r==this.resolutions_.length-1?s=2:s=i/this.resolutions_[r+1]}else i=this.maxResolution_,s=this.zoomFactor_;return e+Math.log(i/t)/Math.log(s)}getResolutionForZoom(t){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;const e=kt(Math.floor(t),0,this.resolutions_.length-2),i=this.resolutions_[e]/this.resolutions_[e+1];return this.resolutions_[e]/Math.pow(i,kt(t-e,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)}fit(t,e){let i;if(mt(Array.isArray(t)||typeof t.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(t)){mt(!dr(t),"Cannot fit empty extent provided as `geometry`");const s=Un(t,this.getProjection());i=th(s)}else if(t.getType()==="Circle"){const s=Un(t.getExtent(),this.getProjection());i=th(s),i.rotate(this.getRotation(),fi(s))}else i=t;this.fitInternal(i,e)}rotatedExtentForGeometry(t){const e=this.getRotation(),i=Math.cos(e),s=Math.sin(-e),r=t.getFlatCoordinates(),o=t.getStride();let a=1/0,l=1/0,h=-1/0,c=-1/0;for(let u=0,d=r.length;u<d;u+=o){const g=r[u]*i-r[u+1]*s,f=r[u]*s+r[u+1]*i;a=Math.min(a,g),l=Math.min(l,f),h=Math.max(h,g),c=Math.max(c,f)}return[a,l,h,c]}fitInternal(t,e){e=e||{};let i=e.size;i||(i=this.getViewportSizeMinusPadding_());const s=e.padding!==void 0?e.padding:[0,0,0,0],r=e.nearest!==void 0?e.nearest:!1;let o;e.minResolution!==void 0?o=e.minResolution:e.maxZoom!==void 0?o=this.getResolutionForZoom(e.maxZoom):o=0;const a=this.rotatedExtentForGeometry(t);let l=this.getResolutionForExtentInternal(a,[i[0]-s[1]-s[3],i[1]-s[0]-s[2]]);l=isNaN(l)?o:Math.max(l,o),l=this.getConstrainedResolution(l,r?0:1);const h=this.getRotation(),c=Math.sin(h),u=Math.cos(h),d=fi(a);d[0]+=(s[1]-s[3])/2*l,d[1]+=(s[0]-s[2])/2*l;const g=d[0]*u-d[1]*c,f=d[1]*u+d[0]*c,m=this.getConstrainedCenter([g,f],l),w=e.callback?e.callback:Vs;e.duration!==void 0?this.animateInternal({resolution:l,center:m,duration:e.duration,easing:e.easing},w):(this.targetResolution_=l,this.targetCenter_=m,this.applyTargetState_(!1,!0),Bo(w,!0))}centerOn(t,e,i){this.centerOnInternal(qi(t,this.getProjection()),e,i)}centerOnInternal(t,e,i){this.setCenterInternal(pl(t,e,i,this.getResolution(),this.getRotation()))}calculateCenterShift(t,e,i,s){let r;const o=this.padding_;if(o&&t){const a=this.getViewportSizeMinusPadding_(-i),l=pl(t,s,[a[0]/2+o[3],a[1]/2+o[0]],e,i);r=[t[0]-l[0],t[1]-l[1]]}return r}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(t){const e=ql(this.targetCenter_,this.getProjection());this.setCenter([e[0]+t[0],e[1]+t[1]])}adjustCenterInternal(t){const e=this.targetCenter_;this.setCenterInternal([e[0]+t[0],e[1]+t[1]])}adjustResolution(t,e){e=e&&qi(e,this.getProjection()),this.adjustResolutionInternal(t,e)}adjustResolutionInternal(t,e){const i=this.getAnimating()||this.getInteracting(),s=this.getViewportSize_(this.getRotation()),r=this.constraints_.resolution(this.targetResolution_*t,0,s,i);e&&(this.targetCenter_=this.calculateCenterZoom(r,e)),this.targetResolution_*=t,this.applyTargetState_()}adjustZoom(t,e){this.adjustResolution(Math.pow(this.zoomFactor_,-t),e)}adjustRotation(t,e){e&&(e=qi(e,this.getProjection())),this.adjustRotationInternal(t,e)}adjustRotationInternal(t,e){const i=this.getAnimating()||this.getInteracting(),s=this.constraints_.rotation(this.targetRotation_+t,i);e&&(this.targetCenter_=this.calculateCenterRotate(s,e)),this.targetRotation_+=t,this.applyTargetState_()}setCenter(t){this.setCenterInternal(t&&qi(t,this.getProjection()))}setCenterInternal(t){this.targetCenter_=t,this.applyTargetState_()}setHint(t,e){return this.hints_[t]+=e,this.changed(),this.hints_[t]}setResolution(t){this.targetResolution_=t,this.applyTargetState_()}setRotation(t){this.targetRotation_=t,this.applyTargetState_()}setZoom(t){this.setResolution(this.getResolutionForZoom(t))}applyTargetState_(t,e){const i=this.getAnimating()||this.getInteracting()||e,s=this.constraints_.rotation(this.targetRotation_,i),r=this.getViewportSize_(s),o=this.constraints_.resolution(this.targetResolution_,0,r,i),a=this.constraints_.center(this.targetCenter_,o,r,i,this.calculateCenterShift(this.targetCenter_,o,s,r));this.get(Fe.ROTATION)!==s&&this.set(Fe.ROTATION,s),this.get(Fe.RESOLUTION)!==o&&(this.set(Fe.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!a||!this.get(Fe.CENTER)||!ra(this.get(Fe.CENTER),a))&&this.set(Fe.CENTER,a),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(t,e,i){t=t!==void 0?t:200;const s=e||0,r=this.constraints_.rotation(this.targetRotation_),o=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,s,o),l=this.constraints_.center(this.targetCenter_,a,o,!1,this.calculateCenterShift(this.targetCenter_,a,r,o));if(t===0&&!this.cancelAnchor_){this.targetResolution_=a,this.targetRotation_=r,this.targetCenter_=l,this.applyTargetState_();return}i=i||(t===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==a||this.getRotation()!==r||!this.getCenterInternal()||!ra(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:r,center:l,resolution:a,duration:t,easing:gr,anchor:i}))}beginInteraction(){this.resolveConstraints(0),this.setHint(se.INTERACTING,1)}endInteraction(t,e,i){i=i&&qi(i,this.getProjection()),this.endInteractionInternal(t,e,i)}endInteractionInternal(t,e,i){this.getInteracting()&&(this.setHint(se.INTERACTING,-1),this.resolveConstraints(t,e,i))}getConstrainedCenter(t,e){const i=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,e||this.getResolution(),i)}getConstrainedZoom(t,e){const i=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(i,e))}getConstrainedResolution(t,e){e=e||0;const i=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,e,i)}}function Bo(n,t){setTimeout(function(){n(t)},0)}function D0(n){if(n.extent!==void 0){const e=n.smoothExtentConstraint!==void 0?n.smoothExtentConstraint:!0;return wu(n.extent,n.constrainOnlyCenter,e)}const t=Dh(n.projection,"EPSG:3857");if(n.multiWorld!==!0&&t.isGlobal()){const e=t.getExtent().slice();return e[0]=-1/0,e[2]=1/0,wu(e,!1,!1)}return g0}function F0(n){let t,e,i,o=n.minZoom!==void 0?n.minZoom:_l,a=n.maxZoom!==void 0?n.maxZoom:28;const l=n.zoomFactor!==void 0?n.zoomFactor:2,h=n.multiWorld!==void 0?n.multiWorld:!1,c=n.smoothResolutionConstraint!==void 0?n.smoothResolutionConstraint:!0,u=n.showFullExtent!==void 0?n.showFullExtent:!1,d=Dh(n.projection,"EPSG:3857"),g=d.getExtent();let f=n.constrainOnlyCenter,m=n.extent;if(!h&&!m&&d.isGlobal()&&(f=!1,m=g),n.resolutions!==void 0){const w=n.resolutions;e=w[o],i=w[a]!==void 0?w[a]:w[w.length-1],n.constrainResolution?t=f0(w,c,!f&&m,u):t=yu(e,i,c,!f&&m,u)}else{const _=(g?Math.max(wt(g),ae(g)):360*qs.degrees/d.getMetersPerUnit())/Bh/Math.pow(2,_l),p=_/Math.pow(2,28-_l);e=n.maxResolution,e!==void 0?o=0:e=_/Math.pow(l,o),i=n.minResolution,i===void 0&&(n.maxZoom!==void 0?n.maxResolution!==void 0?i=e/Math.pow(l,a):i=_/Math.pow(l,a):i=p),a=o+Math.floor(Math.log(e/i)/Math.log(l)),i=e/Math.pow(l,a-o),n.constrainResolution?t=m0(l,e,i,c,!f&&m,u):t=yu(e,i,c,!f&&m,u)}return{constraint:t,maxResolution:e,minResolution:i,minZoom:o,zoomFactor:l}}function k0(n){if(n.enableRotation!==void 0?n.enableRotation:!0){const e=n.constrainRotation;return e===void 0||e===!0?y0():e===!1?_u:typeof e=="number"?w0(e):_u}return Xh}function G0(n){return!(n.sourceCenter&&n.targetCenter&&!ra(n.sourceCenter,n.targetCenter)||n.sourceResolution!==n.targetResolution||n.sourceRotation!==n.targetRotation)}function pl(n,t,e,i,s){const r=Math.cos(-s);let o=Math.sin(-s),a=n[0]*r-n[1]*o,l=n[1]*r+n[0]*o;a+=(t[0]/2-e[0])*i,l+=(e[1]-t[1]/2)*i,o=-o;const h=a*r-l*o,c=l*r+a*o;return[h,c]}class Ba extends $d{constructor(t){const e=Object.assign({},t);delete e.source,super(e),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,t.render&&(this.render=t.render),t.map&&this.setMap(t.map),this.addChangeListener(bt.SOURCE,this.handleSourcePropertyChange_);const i=t.source?t.source:null;this.setSource(i)}getLayersArray(t){return t=t||[],t.push(this),t}getLayerStatesArray(t){return t=t||[],t.push(this.getLayerState()),t}getSource(){return this.get(bt.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){const t=this.getSource();return t?t.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(St(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;const t=this.getSource();t&&(this.sourceChangeKey_=ot(t,$.CHANGE,this.handleSourceChange_,this),t.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(t){return this.renderer_?this.renderer_.getFeatures(t):Promise.resolve([])}getData(t){return!this.renderer_||!this.rendered?null:this.renderer_.getData(t)}isVisible(t){let e;const i=this.getMapInternal();!t&&i&&(t=i.getView()),t instanceof Ze?e={viewState:t.getState(),extent:t.calculateExtent()}:e=t,!e.layerStatesArray&&i&&(e.layerStatesArray=i.getLayerGroup().getLayerStatesArray());let s;e.layerStatesArray?s=e.layerStatesArray.find(o=>o.layer===this):s=this.getLayerState();const r=this.getExtent();return ec(s,e.viewState)&&(!r||be(r,e.extent))}getAttributions(t){if(!this.isVisible(t))return[];let e;const i=this.getSource();if(i&&(e=i.getAttributions()),!e)return[];const s=t instanceof Ze?t.getViewStateAndExtent():t;let r=e(s);return Array.isArray(r)||(r=[r]),r}render(t,e){const i=this.getRenderer();return i.prepareFrame(t)?(this.rendered=!0,i.renderFrame(t,e)):null}unrender(){this.rendered=!1}setMapInternal(t){t||this.unrender(),this.set(bt.MAP,t)}getMapInternal(){return this.get(bt.MAP)}setMap(t){this.mapPrecomposeKey_&&(St(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),t||this.changed(),this.mapRenderKey_&&(St(this.mapRenderKey_),this.mapRenderKey_=null),t&&(this.mapPrecomposeKey_=ot(t,Si.PRECOMPOSE,function(e){const s=e.frameState.layerStatesArray,r=this.getLayerState(!1);mt(!s.some(function(o){return o.layer===r.layer}),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),s.push(r)},this),this.mapRenderKey_=ot(this,$.CHANGE,t.render,t),this.changed())}setSource(t){this.set(bt.SOURCE,t)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}disposeInternal(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),super.disposeInternal()}}function ec(n,t){if(!n.visible)return!1;const e=t.resolution;if(e<n.minResolution||e>=n.maxResolution)return!1;const i=t.zoom;return i>n.minZoom&&i<=n.maxZoom}class W0 extends bh{constructor(t){super(),this.map_=t}dispatchRenderEvent(t,e){q()}calculateMatrices2D(t){const e=t.viewState,i=t.coordinateToPixelTransform,s=t.pixelToCoordinateTransform;nn(i,t.size[0]/2,t.size[1]/2,1/e.resolution,-1/e.resolution,-e.rotation,-e.center[0],-e.center[1]),Gh(s,i)}forEachFeatureAtCoordinate(t,e,i,s,r,o,a,l){let h;const c=e.viewState;function u(T,M,C,I){return r.call(o,M,T?C:null,I)}const d=c.projection,g=Gd(t.slice(),d),f=[[0,0]];if(d.canWrapX()&&s){const T=d.getExtent(),M=wt(T);f.push([-M,0],[M,0])}const m=e.layerStatesArray,w=m.length,_=[],p=[];for(let T=0;T<f.length;T++)for(let M=w-1;M>=0;--M){const C=m[M],I=C.layer;if(I.hasRenderer()&&ec(C,c)&&a.call(l,I)){const v=I.getRenderer(),K=I.getSource();if(v&&K){const W=K.getWrapX()?g:t,X=u.bind(null,C.managed);p[0]=W[0]+f[T][0],p[1]=W[1]+f[T][1],h=v.forEachFeatureAtCoordinate(p,e,i,X,_)}if(h)return h}}if(_.length===0)return;const x=1/_.length;return _.forEach((T,M)=>T.distanceSq+=M*x),_.sort((T,M)=>T.distanceSq-M.distanceSq),_.some(T=>h=T.callback(T.feature,T.layer,T.geometry)),h}hasFeatureAtCoordinate(t,e,i,s,r,o){return this.forEachFeatureAtCoordinate(t,e,i,s,Br,this,r,o)!==void 0}getMap(){return this.map_}renderFrame(t){q()}flushDeclutterItems(t){}scheduleExpireIconCache(t){la.canExpireCache()&&t.postRenderFunctions.push(z0)}}function z0(n,t){la.expire()}class ug extends Gi{constructor(t,e,i,s){super(t),this.inversePixelTransform=e,this.frameState=i,this.context=s}}const dg="10px sans-serif",Ie="#000",Qs="round",Qi=[],tn=0,tr="round",jr=10,qr="#000",Zr="center",ua="middle",jn=[0,0,0,0],$r=1,Zi=new mi;let Rs=null,eh;const ih={},B0=(function(){const t="32px ",e=["monospace","serif"],i=e.length,s="wmytzilWMYTZIL@#/&?$%10";let r,o;function a(h,c,u){let d=!0;for(let g=0;g<i;++g){const f=e[g];if(o=da(h+" "+c+" "+t+f,s),u!=f){const m=da(h+" "+c+" "+t+u+","+f,s);d=d&&m!=o}}return!!d}function l(){let h=!0;const c=Zi.getKeys();for(let u=0,d=c.length;u<d;++u){const g=c[u];Zi.get(g)<100&&(a.apply(this,g.split(`
`))?(co(ih),Rs=null,eh=void 0,Zi.set(g,100)):(Zi.set(g,Zi.get(g)+1,!0),h=!1))}h&&(clearInterval(r),r=void 0)}return function(h){const c=Ld(h);if(!c)return;const u=c.families;for(let d=0,g=u.length;d<g;++d){const f=u[d],m=c.style+`
`+c.weight+`
`+f;Zi.get(m)===void 0&&(Zi.set(m,100,!0),a(c.style,c.weight,f)||(Zi.set(m,0,!0),r===void 0&&(r=setInterval(l,32))))}}})(),H0=(function(){let n;return function(t){let e=ih[t];if(e==null){if(Lh){const i=Ld(t),s=gg(t,"Žg");e=(isNaN(Number(i.lineHeight))?1.2:Number(i.lineHeight))*(s.actualBoundingBoxAscent+s.actualBoundingBoxDescent)}else n||(n=document.createElement("div"),n.innerHTML="M",n.style.minHeight="0",n.style.maxHeight="none",n.style.height="auto",n.style.padding="0",n.style.border="none",n.style.position="absolute",n.style.display="block",n.style.left="-99999px"),n.style.font=t,document.body.appendChild(n),e=n.offsetHeight,document.body.removeChild(n);ih[t]=e}return e}})();function gg(n,t){return Rs||(Rs=pe(1,1)),n!=eh&&(Rs.font=n,eh=Rs.font),Rs.measureText(t)}function da(n,t){return gg(n,t).width}function Cu(n,t,e){if(t in e)return e[t];const i=t.split(`
`).reduce((s,r)=>Math.max(s,da(n,r)),0);return e[t]=i,i}function Y0(n,t){const e=[],i=[],s=[];let r=0,o=0,a=0,l=0;for(let h=0,c=t.length;h<=c;h+=2){const u=t[h];if(u===`
`||h===c){r=Math.max(r,o),s.push(o),o=0,a+=l;continue}const d=t[h+1]||n.font,g=da(d,u);e.push(g),o+=g;const f=H0(d);i.push(f),l=Math.max(l,f)}return{width:r,height:a,widths:e,heights:i,lineWidths:s}}function X0(n,t,e,i,s,r,o,a,l,h,c){n.save(),e!==1&&(n.globalAlpha*=e),t&&n.transform.apply(n,t),i.contextInstructions?(n.translate(l,h),n.scale(c[0],c[1]),U0(i,n)):c[0]<0||c[1]<0?(n.translate(l,h),n.scale(c[0],c[1]),n.drawImage(i,s,r,o,a,0,0,o,a)):n.drawImage(i,s,r,o,a,l,h,o*c[0],a*c[1]),n.restore()}function U0(n,t){const e=n.contextInstructions;for(let i=0,s=e.length;i<s;i+=2)Array.isArray(e[i+1])?t[e[i]].apply(t,e[i+1]):t[e[i]]=e[i+1]}class V0 extends W0{constructor(t){super(t),this.fontChangeListenerKey_=ot(Zi,ts.PROPERTYCHANGE,t.redrawText.bind(t)),this.element_=document.createElement("div");const e=this.element_.style;e.position="absolute",e.width="100%",e.height="100%",e.zIndex="0",this.element_.className=ls+" ol-layers";const i=t.getViewport();i.insertBefore(this.element_,i.firstChild||null),this.children_=[],this.renderedVisible_=!0,this.declutterLayers_=[]}dispatchRenderEvent(t,e){const i=this.getMap();if(i.hasListener(t)){const s=new ug(t,void 0,e);i.dispatchEvent(s)}}disposeInternal(){St(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),super.disposeInternal()}renderFrame(t){if(!t){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(t),this.dispatchRenderEvent(Si.PRECOMPOSE,t);const e=t.layerStatesArray.sort(function(o,a){return o.zIndex-a.zIndex}),i=t.viewState;this.children_.length=0;const s=this.declutterLayers_;s.length=0;let r=null;for(let o=0,a=e.length;o<a;++o){const l=e[o];t.layerIndex=o;const h=l.layer,c=h.getSourceState();if(!ec(l,i)||c!="ready"&&c!="undefined"){h.unrender();continue}const u=h.render(t,r);u&&(u!==r&&(this.children_.push(u),r=u),"getDeclutter"in h&&s.push(h))}this.flushDeclutterItems(t),Tm(this.element_,this.children_),this.dispatchRenderEvent(Si.POSTCOMPOSE,t),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(t)}flushDeclutterItems(t){const e=this.declutterLayers_;for(let i=e.length-1;i>=0;--i)e[i].renderDeclutter(t);e.length=0}}class yn extends Gi{constructor(t,e){super(t),this.layer=e}}const xl={LAYERS:"layers"};class Fn extends $d{constructor(t){t=t||{};const e=Object.assign({},t);delete e.layers;let i=t.layers;super(e),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(xl.LAYERS,this.handleLayersChanged_),i?Array.isArray(i)?i=new Je(i.slice(),{unique:!0}):mt(typeof i.getArray=="function","Expected `layers` to be an array or a `Collection`"):i=new Je(void 0,{unique:!0}),this.setLayers(i)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(St),this.layersListenerKeys_.length=0;const t=this.getLayers();this.layersListenerKeys_.push(ot(t,ve.ADD,this.handleLayersAdd_,this),ot(t,ve.REMOVE,this.handleLayersRemove_,this));for(const i in this.listenerKeys_)this.listenerKeys_[i].forEach(St);co(this.listenerKeys_);const e=t.getArray();for(let i=0,s=e.length;i<s;i++){const r=e[i];this.registerLayerListeners_(r),this.dispatchEvent(new yn("addlayer",r))}this.changed()}registerLayerListeners_(t){const e=[ot(t,ts.PROPERTYCHANGE,this.handleLayerChange_,this),ot(t,$.CHANGE,this.handleLayerChange_,this)];t instanceof Fn&&e.push(ot(t,"addlayer",this.handleLayerGroupAdd_,this),ot(t,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[Tt(t)]=e}handleLayerGroupAdd_(t){this.dispatchEvent(new yn("addlayer",t.layer))}handleLayerGroupRemove_(t){this.dispatchEvent(new yn("removelayer",t.layer))}handleLayersAdd_(t){const e=t.element;this.registerLayerListeners_(e),this.dispatchEvent(new yn("addlayer",e)),this.changed()}handleLayersRemove_(t){const e=t.element,i=Tt(e);this.listenerKeys_[i].forEach(St),delete this.listenerKeys_[i],this.dispatchEvent(new yn("removelayer",e)),this.changed()}getLayers(){return this.get(xl.LAYERS)}setLayers(t){const e=this.getLayers();if(e){const i=e.getArray();for(let s=0,r=i.length;s<r;++s)this.dispatchEvent(new yn("removelayer",i[s]))}this.set(xl.LAYERS,t)}getLayersArray(t){return t=t!==void 0?t:[],this.getLayers().forEach(function(e){e.getLayersArray(t)}),t}getLayerStatesArray(t){const e=t!==void 0?t:[],i=e.length;this.getLayers().forEach(function(o){o.getLayerStatesArray(e)});const s=this.getLayerState();let r=s.zIndex;!t&&s.zIndex===void 0&&(r=0);for(let o=i,a=e.length;o<a;o++){const l=e[o];l.opacity*=s.opacity,l.visible=l.visible&&s.visible,l.maxResolution=Math.min(l.maxResolution,s.maxResolution),l.minResolution=Math.max(l.minResolution,s.minResolution),l.minZoom=Math.max(l.minZoom,s.minZoom),l.maxZoom=Math.min(l.maxZoom,s.maxZoom),s.extent!==void 0&&(l.extent!==void 0?l.extent=Gs(l.extent,s.extent):l.extent=s.extent),l.zIndex===void 0&&(l.zIndex=r)}return e}getSourceState(){return"ready"}}class Es extends Gi{constructor(t,e,i){super(t),this.map=e,this.frameState=i!==void 0?i:null}}class wn extends Es{constructor(t,e,i,s,r,o){super(t,e,r),this.originalEvent=i,this.pixel_=null,this.coordinate_=null,this.dragging=s!==void 0?s:!1,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(t){this.pixel_=t}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(t){this.coordinate_=t}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}}const Kt={SINGLECLICK:"singleclick",CLICK:$.CLICK,DBLCLICK:$.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};class j0 extends uo{constructor(t,e){super(t),this.map_=t,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=e===void 0?1:e,this.down_=null;const i=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=i,this.pointerdownListenerKey_=ot(i,zl.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=ot(i,zl.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener($.TOUCHMOVE,this.boundHandleTouchMove_,Id?{passive:!1}:!1)}emulateClick_(t){let e=new wn(Kt.CLICK,this.map_,t);this.dispatchEvent(e),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,e=new wn(Kt.DBLCLICK,this.map_,t),this.dispatchEvent(e)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;const i=new wn(Kt.SINGLECLICK,this.map_,t);this.dispatchEvent(i)},250)}updateActivePointers_(t){const e=t,i=e.pointerId;if(e.type==Kt.POINTERUP||e.type==Kt.POINTERCANCEL){delete this.trackedTouches_[i];for(const s in this.trackedTouches_)if(this.trackedTouches_[s].target!==e.target){delete this.trackedTouches_[s];break}}else(e.type==Kt.POINTERDOWN||e.type==Kt.POINTERMOVE)&&(this.trackedTouches_[i]=e);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(t){this.updateActivePointers_(t);const e=new wn(Kt.POINTERUP,this.map_,t,void 0,void 0,this.activePointers_);this.dispatchEvent(e),this.emulateClicks_&&!e.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(t)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(St),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(t){return t.button===0}handlePointerDown_(t){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(t);const e=new wn(Kt.POINTERDOWN,this.map_,t,void 0,void 0,this.activePointers_);if(this.dispatchEvent(e),this.down_=new PointerEvent(t.type,t),Object.defineProperty(this.down_,"target",{writable:!1,value:t.target}),this.dragListenerKeys_.length===0){const i=this.map_.getOwnerDocument();this.dragListenerKeys_.push(ot(i,Kt.POINTERMOVE,this.handlePointerMove_,this),ot(i,Kt.POINTERUP,this.handlePointerUp_,this),ot(this.element_,Kt.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==i&&this.dragListenerKeys_.push(ot(this.element_.getRootNode(),Kt.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(t){if(this.isMoving_(t)){this.updateActivePointers_(t),this.dragging_=!0;const e=new wn(Kt.POINTERDRAG,this.map_,t,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(e)}}relayMoveEvent_(t){this.originalPointerMoveEvent_=t;const e=!!(this.down_&&this.isMoving_(t));this.dispatchEvent(new wn(Kt.POINTERMOVE,this.map_,t,e))}handleTouchMove_(t){const e=this.originalPointerMoveEvent_;(!e||e.defaultPrevented)&&(typeof t.cancelable!="boolean"||t.cancelable===!0)&&t.preventDefault()}isMoving_(t){return this.dragging_||Math.abs(t.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(t.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(St(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener($.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(St(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(St),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}const ga=1/0;let q0=class{constructor(t,e){this.priorityFunction_=t,this.keyFunction_=e,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,co(this.queuedElements_)}dequeue(){const t=this.elements_,e=this.priorities_,i=t[0];t.length==1?(t.length=0,e.length=0):(t[0]=t.pop(),e[0]=e.pop(),this.siftUp_(0));const s=this.keyFunction_(i);return delete this.queuedElements_[s],i}enqueue(t){mt(!(this.keyFunction_(t)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");const e=this.priorityFunction_(t);return e!=ga?(this.elements_.push(t),this.priorities_.push(e),this.queuedElements_[this.keyFunction_(t)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(t){return t*2+1}getRightChildIndex_(t){return t*2+2}getParentIndex_(t){return t-1>>1}heapify_(){let t;for(t=(this.elements_.length>>1)-1;t>=0;t--)this.siftUp_(t)}isEmpty(){return this.elements_.length===0}isKeyQueued(t){return t in this.queuedElements_}isQueued(t){return this.isKeyQueued(this.keyFunction_(t))}siftUp_(t){const e=this.elements_,i=this.priorities_,s=e.length,r=e[t],o=i[t],a=t;for(;t<s>>1;){const l=this.getLeftChildIndex_(t),h=this.getRightChildIndex_(t),c=h<s&&i[h]<i[l]?h:l;e[t]=e[c],i[t]=i[c],t=c}e[t]=r,i[t]=o,this.siftDown_(a,t)}siftDown_(t,e){const i=this.elements_,s=this.priorities_,r=i[e],o=s[e];for(;e>t;){const a=this.getParentIndex_(e);if(s[a]>o)i[e]=i[a],s[e]=s[a],e=a;else break}i[e]=r,s[e]=o}reprioritize(){const t=this.priorityFunction_,e=this.elements_,i=this.priorities_;let s=0;const r=e.length;let o,a,l;for(a=0;a<r;++a)o=e[a],l=t(o),l==ga?delete this.queuedElements_[this.keyFunction_(o)]:(i[s]=l,e[s++]=o);e.length=s,i.length=s,this.heapify_()}};const j={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class Z0 extends q0{constructor(t,e){super(function(i){return t.apply(null,i)},function(i){return i[0].getKey()}),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=e,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(t){const e=super.enqueue(t);return e&&t[0].addEventListener($.CHANGE,this.boundHandleTileChange_),e}getTilesLoading(){return this.tilesLoading_}handleTileChange(t){const e=t.target,i=e.getState();if(i===j.LOADED||i===j.ERROR||i===j.EMPTY){i!==j.ERROR&&e.removeEventListener($.CHANGE,this.boundHandleTileChange_);const s=e.getKey();s in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[s],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(t,e){let i=0,s,r,o;for(;this.tilesLoading_<t&&i<e&&this.getCount()>0;)r=this.dequeue()[0],o=r.getKey(),s=r.getState(),s===j.IDLE&&!(o in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[o]=!0,++this.tilesLoading_,++i,r.load())}}function $0(n,t,e,i,s){if(!n||!(e in n.wantedTiles)||!n.wantedTiles[e][t.getKey()])return ga;const r=n.viewState.center,o=i[0]-r[0],a=i[1]-r[1];return 65536*Math.log(s)+Math.sqrt(o*o+a*a)/s}class fg extends cr{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target});const e=t.className!==void 0?t.className:"ol-rotate",i=t.label!==void 0?t.label:"⇧",s=t.compassClassName!==void 0?t.compassClassName:"ol-compass";this.label_=null,typeof i=="string"?(this.label_=document.createElement("span"),this.label_.className=s,this.label_.textContent=i):(this.label_=i,this.label_.classList.add(s));const r=t.tipLabel?t.tipLabel:"Reset rotation",o=document.createElement("button");o.className=e+"-reset",o.setAttribute("type","button"),o.title=r,o.appendChild(this.label_),o.addEventListener($.CLICK,this.handleClick_.bind(this),!1);const a=e+" "+ls+" "+fo,l=this.element;l.className=a,l.appendChild(o),this.callResetNorth_=t.resetNorth?t.resetNorth:void 0,this.duration_=t.duration!==void 0?t.duration:250,this.autoHide_=t.autoHide!==void 0?t.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(Go)}handleClick_(t){t.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){const e=this.getMap().getView();if(!e)return;const i=e.getRotation();i!==void 0&&(this.duration_>0&&i%(2*Math.PI)!==0?e.animate({rotation:0,duration:this.duration_,easing:gr}):e.setRotation(0))}render(t){const e=t.frameState;if(!e)return;const i=e.viewState.rotation;if(i!=this.rotation_){const s="rotate("+i+"rad)";if(this.autoHide_){const r=this.element.classList.contains(Go);!r&&i===0?this.element.classList.add(Go):r&&i!==0&&this.element.classList.remove(Go)}this.label_.style.transform=s}this.rotation_=i}}class ic extends cr{constructor(t){t=t||{},super({element:document.createElement("div"),target:t.target});const e=t.className!==void 0?t.className:"ol-zoom",i=t.delta!==void 0?t.delta:1,s=t.zoomInClassName!==void 0?t.zoomInClassName:e+"-in",r=t.zoomOutClassName!==void 0?t.zoomOutClassName:e+"-out",o=t.zoomInLabel!==void 0?t.zoomInLabel:"+",a=t.zoomOutLabel!==void 0?t.zoomOutLabel:"–",l=t.zoomInTipLabel!==void 0?t.zoomInTipLabel:"Zoom in",h=t.zoomOutTipLabel!==void 0?t.zoomOutTipLabel:"Zoom out",c=document.createElement("button");c.className=s,c.setAttribute("type","button"),c.title=l,c.appendChild(typeof o=="string"?document.createTextNode(o):o),c.addEventListener($.CLICK,this.handleClick_.bind(this,i),!1);const u=document.createElement("button");u.className=r,u.setAttribute("type","button"),u.title=h,u.appendChild(typeof a=="string"?document.createTextNode(a):a),u.addEventListener($.CLICK,this.handleClick_.bind(this,-i),!1);const d=e+" "+ls+" "+fo,g=this.element;g.className=d,g.appendChild(c),g.appendChild(u),this.duration_=t.duration!==void 0?t.duration:250}handleClick_(t,e){e.preventDefault(),this.zoomByDelta_(t)}zoomByDelta_(t){const i=this.getMap().getView();if(!i)return;const s=i.getZoom();if(s!==void 0){const r=i.getConstrainedZoom(s+t);this.duration_>0?(i.getAnimating()&&i.cancelAnimations(),i.animate({zoom:r,duration:this.duration_,easing:gr})):i.setZoom(r)}}}function J0(n){n=n||{};const t=new Je;return(n.zoom!==void 0?n.zoom:!0)&&t.push(new ic(n.zoomOptions)),(n.rotate!==void 0?n.rotate:!0)&&t.push(new fg(n.rotateOptions)),(n.attribution!==void 0?n.attribution:!0)&&t.push(new Rm(n.attributionOptions)),t}const Ru={ACTIVE:"active"};class _o extends mi{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(Ru.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(Ru.ACTIVE,t)}setMap(t){this.map_=t}}function Q0(n,t,e){const i=n.getCenterInternal();if(i){const s=[i[0]+t[0],i[1]+t[1]];n.animateInternal({duration:e!==void 0?e:250,easing:p0,center:n.getConstrainedCenter(s)})}}function nc(n,t,e,i){const s=n.getZoom();if(s===void 0)return;const r=n.getConstrainedZoom(s+t),o=n.getResolutionForZoom(r);n.getAnimating()&&n.cancelAnimations(),n.animate({resolution:o,anchor:e,duration:i!==void 0?i:250,easing:gr})}class tw extends _o{constructor(t){super(),t=t||{},this.delta_=t.delta?t.delta:1,this.duration_=t.duration!==void 0?t.duration:250}handleEvent(t){let e=!1;if(t.type==Kt.DBLCLICK){const i=t.originalEvent,s=t.map,r=t.coordinate,o=i.shiftKey?-this.delta_:this.delta_,a=s.getView();nc(a,o,r,this.duration_),i.preventDefault(),e=!0}return!e}}class po extends _o{constructor(t){t=t||{},super(t),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==Kt.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==Kt.POINTERUP){const i=this.handleUpEvent(t);this.handlingDownUpSequence=i&&this.targetPointers.length>0}}else if(t.type==Kt.POINTERDOWN){const i=this.handleDownEvent(t);this.handlingDownUpSequence=i,e=this.stopDown(i)}else t.type==Kt.POINTERMOVE&&this.handleMoveEvent(t);return!e}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}}function sc(n){const t=n.length;let e=0,i=0;for(let s=0;s<t;s++)e+=n[s].clientX,i+=n[s].clientY;return{clientX:e/t,clientY:i/t}}function nh(n){const t=arguments;return function(e){let i=!0;for(let s=0,r=t.length;s<r&&(i=i&&t[s](e),!!i);++s);return i}}const z2=function(n){const t=n.originalEvent;return t.altKey&&!(t.metaKey||t.ctrlKey)&&!t.shiftKey},ew=function(n){const t=n.originalEvent;return t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},iw=function(n){const t=n.map.getTargetElement(),e=n.map.getOwnerDocument().activeElement;return t.contains(e)},mg=function(n){return n.map.getTargetElement().hasAttribute("tabindex")?iw(n):!0},nw=Br,B2=function(n){return n.type==Kt.CLICK},wg=function(n){const t=n.originalEvent;return t.button==0&&!(ym&&Ed&&t.ctrlKey)},H2=ho,Y2=function(n){return n.type=="pointermove"},X2=function(n){return n.type==Kt.SINGLECLICK},yg=function(n){const t=n.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&!t.shiftKey},sw=function(n){const t=n.originalEvent;return Ed?t.metaKey:t.ctrlKey},rw=function(n){const t=n.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},_g=function(n){const t=n.originalEvent,e=t.target.tagName;return e!=="INPUT"&&e!=="SELECT"&&e!=="TEXTAREA"&&!t.target.isContentEditable},Tl=function(n){const t=n.originalEvent;return mt(t!==void 0,"mapBrowserEvent must originate from a pointer event"),t.pointerType=="mouse"},ow=function(n){const t=n.originalEvent;return mt(t!==void 0,"mapBrowserEvent must originate from a pointer event"),t.isPrimary&&t.button===0};class aw extends po{constructor(t){super({stopDown:ho}),t=t||{},this.kinetic_=t.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const e=t.condition?t.condition:nh(yg,ow);this.condition_=t.onFocusOnly?nh(mg,e):e,this.noKinetic_=!1}handleDragEvent(t){const e=t.map;this.panning_||(this.panning_=!0,e.getView().beginInteraction());const i=this.targetPointers,s=e.getEventPixel(sc(i));if(i.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(s[0],s[1]),this.lastCentroid){const r=[this.lastCentroid[0]-s[0],s[1]-this.lastCentroid[1]],a=t.map.getView();jm(r,a.getResolution()),Ph(r,a.getRotation()),a.adjustCenterInternal(r)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=s,this.lastPointersCount_=i.length,t.originalEvent.preventDefault()}handleUpEvent(t){const e=t.map,i=e.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){const s=this.kinetic_.getDistance(),r=this.kinetic_.getAngle(),o=i.getCenterInternal(),a=e.getPixelFromCoordinateInternal(o),l=e.getCoordinateFromPixelInternal([a[0]-s*Math.cos(r),a[1]-s*Math.sin(r)]);i.animateInternal({center:i.getConstrainedCenter(l),duration:500,easing:gr})}return this.panning_&&(this.panning_=!1,i.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(t){if(this.targetPointers.length>0&&this.condition_(t)){const i=t.map.getView();return this.lastCentroid=null,i.getAnimating()&&i.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}}class lw extends po{constructor(t){t=t||{},super({stopDown:ho}),this.condition_=t.condition?t.condition:ew,this.lastAngle_=void 0,this.duration_=t.duration!==void 0?t.duration:250}handleDragEvent(t){if(!Tl(t))return;const e=t.map,i=e.getView();if(i.getConstraints().rotation===Xh)return;const s=e.getSize(),r=t.pixel,o=Math.atan2(s[1]/2-r[1],r[0]-s[0]/2);if(this.lastAngle_!==void 0){const a=o-this.lastAngle_;i.adjustRotationInternal(-a)}this.lastAngle_=o}handleUpEvent(t){return Tl(t)?(t.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(t){return Tl(t)&&wg(t)&&this.condition_(t)?(t.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}}class hw extends bh{constructor(t){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+t,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){const t=this.startPixel_,e=this.endPixel_,i="px",s=this.element_.style;s.left=Math.min(t[0],e[0])+i,s.top=Math.min(t[1],e[1])+i,s.width=Math.abs(e[0]-t[0])+i,s.height=Math.abs(e[1]-t[1])+i}setMap(t){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);const e=this.element_.style;e.left="inherit",e.top="inherit",e.width="inherit",e.height="inherit"}this.map_=t,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(t,e){this.startPixel_=t,this.endPixel_=e,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){const t=this.startPixel_,e=this.endPixel_,s=[t,[t[0],e[1]],e,[e[0],t[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);s[4]=s[0].slice(),this.geometry_?this.geometry_.setCoordinates([s]):this.geometry_=new Js([s])}getGeometry(){return this.geometry_}}const Ho={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"};class Ml extends Gi{constructor(t,e,i){super(t),this.coordinate=e,this.mapBrowserEvent=i}}class cw extends po{constructor(t){super(),this.on,this.once,this.un,t=t||{},this.box_=new hw(t.className||"ol-dragbox"),this.minArea_=t.minArea!==void 0?t.minArea:64,t.onBoxEnd&&(this.onBoxEnd=t.onBoxEnd),this.startPixel_=null,this.condition_=t.condition?t.condition:wg,this.boxEndCondition_=t.boxEndCondition?t.boxEndCondition:this.defaultBoxEndCondition}defaultBoxEndCondition(t,e,i){const s=i[0]-e[0],r=i[1]-e[1];return s*s+r*r>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(t){this.box_.setPixels(this.startPixel_,t.pixel),this.dispatchEvent(new Ml(Ho.BOXDRAG,t.coordinate,t))}handleUpEvent(t){this.box_.setMap(null);const e=this.boxEndCondition_(t,this.startPixel_,t.pixel);return e&&this.onBoxEnd(t),this.dispatchEvent(new Ml(e?Ho.BOXEND:Ho.BOXCANCEL,t.coordinate,t)),!1}handleDownEvent(t){return this.condition_(t)?(this.startPixel_=t.pixel,this.box_.setMap(t.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new Ml(Ho.BOXSTART,t.coordinate,t)),!0):!1}onBoxEnd(t){}}class uw extends cw{constructor(t){t=t||{};const e=t.condition?t.condition:rw;super({condition:e,className:t.className||"ol-dragzoom",minArea:t.minArea}),this.duration_=t.duration!==void 0?t.duration:200,this.out_=t.out!==void 0?t.out:!1}onBoxEnd(t){const i=this.getMap().getView();let s=this.getGeometry();if(this.out_){const r=i.rotatedExtentForGeometry(s),o=i.getResolutionForExtentInternal(r),a=i.getResolution()/o;s=s.clone(),s.scale(a*a)}i.fitInternal(s,{duration:this.duration_,easing:gr})}}const Bn={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"};class dw extends _o{constructor(t){super(),t=t||{},this.defaultCondition_=function(e){return yg(e)&&_g(e)},this.condition_=t.condition!==void 0?t.condition:this.defaultCondition_,this.duration_=t.duration!==void 0?t.duration:100,this.pixelDelta_=t.pixelDelta!==void 0?t.pixelDelta:128}handleEvent(t){let e=!1;if(t.type==$.KEYDOWN){const i=t.originalEvent,s=i.key;if(this.condition_(t)&&(s==Bn.DOWN||s==Bn.LEFT||s==Bn.RIGHT||s==Bn.UP)){const o=t.map.getView(),a=o.getResolution()*this.pixelDelta_;let l=0,h=0;s==Bn.DOWN?h=-a:s==Bn.LEFT?l=-a:s==Bn.RIGHT?l=a:h=a;const c=[l,h];Ph(c,o.getRotation()),Q0(o,c,this.duration_),i.preventDefault(),e=!0}}return!e}}class gw extends _o{constructor(t){super(),t=t||{},this.condition_=t.condition?t.condition:function(e){return!sw(e)&&_g(e)},this.delta_=t.delta?t.delta:1,this.duration_=t.duration!==void 0?t.duration:100}handleEvent(t){let e=!1;if(t.type==$.KEYDOWN||t.type==$.KEYPRESS){const i=t.originalEvent,s=i.key;if(this.condition_(t)&&(s==="+"||s==="-")){const r=t.map,o=s==="+"?this.delta_:-this.delta_,a=r.getView();nc(a,o,void 0,this.duration_),i.preventDefault(),e=!0}}return!e}}class fw{constructor(t,e,i){this.decay_=t,this.minVelocity_=e,this.delay_=i,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(t,e){this.points_.push(t,e,Date.now())}end(){if(this.points_.length<6)return!1;const t=Date.now()-this.delay_,e=this.points_.length-3;if(this.points_[e+2]<t)return!1;let i=e-3;for(;i>0&&this.points_[i+2]>t;)i-=3;const s=this.points_[e+2]-this.points_[i+2];if(s<1e3/60)return!1;const r=this.points_[e]-this.points_[i],o=this.points_[e+1]-this.points_[i+1];return this.angle_=Math.atan2(o,r),this.initialVelocity_=Math.sqrt(r*r+o*o)/s,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}}class mw extends _o{constructor(t){t=t||{},super(t),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=t.maxDelta!==void 0?t.maxDelta:1,this.duration_=t.duration!==void 0?t.duration:250,this.timeout_=t.timeout!==void 0?t.timeout:80,this.useAnchor_=t.useAnchor!==void 0?t.useAnchor:!0,this.constrainResolution_=t.constrainResolution!==void 0?t.constrainResolution:!1;const e=t.condition?t.condition:nw;this.condition_=t.onFocusOnly?nh(mg,e):e,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300}endInteraction_(){this.trackpadTimeoutId_=void 0;const t=this.getMap();if(!t)return;t.getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)}handleEvent(t){if(!this.condition_(t)||t.type!==$.WHEEL)return!0;const i=t.map,s=t.originalEvent;s.preventDefault(),this.useAnchor_&&(this.lastAnchor_=t.coordinate);let r;if(t.type==$.WHEEL&&(r=s.deltaY,mm&&s.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(r/=vd),s.deltaMode===WheelEvent.DOM_DELTA_LINE&&(r*=40)),r===0)return!1;this.lastDelta_=r;const o=Date.now();this.startTime_===void 0&&(this.startTime_=o),(!this.mode_||o-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(r)<4?"trackpad":"wheel");const a=i.getView();if(this.mode_==="trackpad"&&!(a.getConstrainResolution()||this.constrainResolution_))return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(a.getAnimating()&&a.cancelAnimations(),a.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),a.adjustZoom(-r/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=o,!1;this.totalDelta_+=r;const l=Math.max(this.timeout_-(o-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,i),l),!1}handleWheelZoom_(t){const e=t.getView();e.getAnimating()&&e.cancelAnimations();let i=-kt(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(e.getConstrainResolution()||this.constrainResolution_)&&(i=i?i>0?1:-1:0),nc(e,i,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(t){this.useAnchor_=t,t||(this.lastAnchor_=null)}}class ww extends po{constructor(t){t=t||{};const e=t;e.stopDown||(e.stopDown=ho),super(e),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=t.threshold!==void 0?t.threshold:.3,this.duration_=t.duration!==void 0?t.duration:250}handleDragEvent(t){let e=0;const i=this.targetPointers[0],s=this.targetPointers[1],r=Math.atan2(s.clientY-i.clientY,s.clientX-i.clientX);if(this.lastAngle_!==void 0){const l=r-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),e=l}this.lastAngle_=r;const o=t.map,a=o.getView();a.getConstraints().rotation!==Xh&&(this.anchor_=o.getCoordinateFromPixelInternal(o.getEventPixel(sc(this.targetPointers))),this.rotating_&&(o.render(),a.adjustRotationInternal(e,this.anchor_)))}handleUpEvent(t){return this.targetPointers.length<2?(t.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(t){if(this.targetPointers.length>=2){const e=t.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}}class yw extends po{constructor(t){t=t||{};const e=t;e.stopDown||(e.stopDown=ho),super(e),this.anchor_=null,this.duration_=t.duration!==void 0?t.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(t){let e=1;const i=this.targetPointers[0],s=this.targetPointers[1],r=i.clientX-s.clientX,o=i.clientY-s.clientY,a=Math.sqrt(r*r+o*o);this.lastDistance_!==void 0&&(e=this.lastDistance_/a),this.lastDistance_=a;const l=t.map,h=l.getView();e!=1&&(this.lastScaleDelta_=e),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(sc(this.targetPointers))),l.render(),h.adjustResolutionInternal(e,this.anchor_)}handleUpEvent(t){if(this.targetPointers.length<2){const i=t.map.getView(),s=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,s),!1}return!0}handleDownEvent(t){if(this.targetPointers.length>=2){const e=t.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}}function pg(n){n=n||{};const t=new Je,e=new fw(-.005,.05,100);return(n.altShiftDragRotate!==void 0?n.altShiftDragRotate:!0)&&t.push(new lw),(n.doubleClickZoom!==void 0?n.doubleClickZoom:!0)&&t.push(new tw({delta:n.zoomDelta,duration:n.zoomDuration})),(n.dragPan!==void 0?n.dragPan:!0)&&t.push(new aw({onFocusOnly:n.onFocusOnly,kinetic:e})),(n.pinchRotate!==void 0?n.pinchRotate:!0)&&t.push(new ww),(n.pinchZoom!==void 0?n.pinchZoom:!0)&&t.push(new yw({duration:n.zoomDuration})),(n.keyboard!==void 0?n.keyboard:!0)&&(t.push(new dw),t.push(new gw({delta:n.zoomDelta,duration:n.zoomDuration}))),(n.mouseWheelZoom!==void 0?n.mouseWheelZoom:!0)&&t.push(new mw({onFocusOnly:n.onFocusOnly,duration:n.zoomDuration})),(n.shiftDragZoom!==void 0?n.shiftDragZoom:!0)&&t.push(new uw({duration:n.zoomDuration})),t}function Eu(n){return n[0]>0&&n[1]>0}function _w(n,t,e){return e===void 0&&(e=[0,0]),e[0]=n[0]*t+.5|0,e[1]=n[1]*t+.5|0,e}function ze(n,t){return Array.isArray(n)?n:(t===void 0?t=[n,n]:(t[0]=n,t[1]=n),t)}function xg(n){if(n instanceof Ba){n.setMapInternal(null);return}n instanceof Fn&&n.getLayers().forEach(xg)}function Tg(n,t){if(n instanceof Ba){n.setMapInternal(t);return}if(n instanceof Fn){const e=n.getLayers().getArray();for(let i=0,s=e.length;i<s;++i)Tg(e[i],t)}}let Mg=class extends mi{constructor(t){super(),t=t||{},this.on,this.once,this.un;const e=pw(t);this.renderComplete_,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=t.maxTilesLoading!==void 0?t.maxTilesLoading:16,this.pixelRatio_=t.pixelRatio!==void 0?t.pixelRatio:vd,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=ui(),this.pixelToCoordinateTransform_=ui(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_),this.mapBrowserEventHandler_=null,this.moveTolerance_=t.moveTolerance,this.keyboardEventTarget_=e.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,this.resizeObserver_=new ResizeObserver(()=>this.updateSize()),this.controls=e.controls||J0(),this.interactions=e.interactions||pg({onFocusOnly:!0}),this.overlays_=e.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Z0(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Wt.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Wt.VIEW,this.handleViewChanged_),this.addChangeListener(Wt.SIZE,this.handleSizeChanged_),this.addChangeListener(Wt.TARGET,this.handleTargetChanged_),this.setProperties(e.values);const i=this;t.view&&!(t.view instanceof Ze)&&t.view.then(function(s){i.setView(new Ze(s))}),this.controls.addEventListener(ve.ADD,s=>{s.element.setMap(this)}),this.controls.addEventListener(ve.REMOVE,s=>{s.element.setMap(null)}),this.interactions.addEventListener(ve.ADD,s=>{s.element.setMap(this)}),this.interactions.addEventListener(ve.REMOVE,s=>{s.element.setMap(null)}),this.overlays_.addEventListener(ve.ADD,s=>{this.addOverlayInternal_(s.element)}),this.overlays_.addEventListener(ve.REMOVE,s=>{const r=s.element.getId();r!==void 0&&delete this.overlayIdIndex_[r.toString()],s.element.setMap(null)}),this.controls.forEach(s=>{s.setMap(this)}),this.interactions.forEach(s=>{s.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(t){this.getControls().push(t)}addInteraction(t){this.getInteractions().push(t)}addLayer(t){this.getLayerGroup().getLayers().push(t)}handleLayerAdd_(t){Tg(t.layer,this)}addOverlay(t){this.getOverlays().push(t)}addOverlayInternal_(t){const e=t.getId();e!==void 0&&(this.overlayIdIndex_[e.toString()]=t),t.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(t,e,i){if(!this.frameState_||!this.renderer_)return;const s=this.getCoordinateFromPixelInternal(t);i=i!==void 0?i:{};const r=i.hitTolerance!==void 0?i.hitTolerance:0,o=i.layerFilter!==void 0?i.layerFilter:Br,a=i.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(s,this.frameState_,r,a,e,null,o,null)}getFeaturesAtPixel(t,e){const i=[];return this.forEachFeatureAtPixel(t,function(s){i.push(s)},e),i}getAllLayers(){const t=[];function e(i){i.forEach(function(s){s instanceof Fn?e(s.getLayers()):t.push(s)})}return e(this.getLayers()),t}hasFeatureAtPixel(t,e){if(!this.frameState_||!this.renderer_)return!1;const i=this.getCoordinateFromPixelInternal(t);e=e!==void 0?e:{};const s=e.layerFilter!==void 0?e.layerFilter:Br,r=e.hitTolerance!==void 0?e.hitTolerance:0,o=e.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(i,this.frameState_,r,o,s,null)}getEventCoordinate(t){return this.getCoordinateFromPixel(this.getEventPixel(t))}getEventCoordinateInternal(t){return this.getCoordinateFromPixelInternal(this.getEventPixel(t))}getEventPixel(t){const i=this.viewport_.getBoundingClientRect(),s=this.getSize(),r=i.width/s[0],o=i.height/s[1],a="changedTouches"in t?t.changedTouches[0]:t;return[(a.clientX-i.left)/r,(a.clientY-i.top)/o]}getTarget(){return this.get(Wt.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(t){return ql(this.getCoordinateFromPixelInternal(t),this.getView().getProjection())}getCoordinateFromPixelInternal(t){const e=this.frameState_;return e?Zt(e.pixelToCoordinateTransform,t.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(t){const e=this.overlayIdIndex_[t.toString()];return e!==void 0?e:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Wt.LAYERGROUP)}setLayers(t){const e=this.getLayerGroup();if(t instanceof Je){e.setLayers(t);return}const i=e.getLayers();i.clear(),i.extend(t)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){const t=this.getLayerGroup().getLayerStatesArray();for(let e=0,i=t.length;e<i;++e){const s=t[e];if(!s.visible)continue;const r=s.layer.getRenderer();if(r&&!r.ready)return!0;const o=s.layer.getSource();if(o&&o.loading)return!0}return!1}getPixelFromCoordinate(t){const e=qi(t,this.getView().getProjection());return this.getPixelFromCoordinateInternal(e)}getPixelFromCoordinateInternal(t){const e=this.frameState_;return e?Zt(e.coordinateToPixelTransform,t.slice(0,2)):null}getRenderer(){return this.renderer_}getSize(){return this.get(Wt.SIZE)}getView(){return this.get(Wt.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){const t=this.getTargetElement();return t?t.ownerDocument:document}getTilePriority(t,e,i,s){return $0(this.frameState_,t,e,i,s)}handleBrowserEvent(t,e){e=e||t.type;const i=new wn(e,this,t);this.handleMapBrowserEvent(i)}handleMapBrowserEvent(t){if(!this.frameState_)return;const e=t.originalEvent,i=e.type;if(i===zl.POINTERDOWN||i===$.WHEEL||i===$.KEYDOWN){const s=this.getOwnerDocument(),r=this.viewport_.getRootNode?this.viewport_.getRootNode():s,o=e.target;if(this.overlayContainerStopEvent_.contains(o)||!(r===s?s.documentElement:r).contains(o))return}if(t.frameState=this.frameState_,this.dispatchEvent(t)!==!1){const s=this.getInteractions().getArray().slice();for(let r=s.length-1;r>=0;r--){const o=s[r];if(o.getMap()!==this||!o.getActive()||!this.getTargetElement())continue;if(!o.handleEvent(t)||t.propagationStopped)break}}}handlePostRender(){const t=this.frameState_,e=this.tileQueue_;if(!e.isEmpty()){let s=this.maxTilesLoading_,r=s;if(t){const o=t.viewHints;if(o[se.ANIMATING]||o[se.INTERACTING]){const a=Date.now()-t.time>8;s=a?0:8,r=a?0:2}}e.getTilesLoading()<s&&(e.reprioritize(),e.loadMoreTiles(s,r))}t&&this.renderer_&&!t.animate&&(this.renderComplete_===!0?(this.hasListener(Si.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(Si.RENDERCOMPLETE,t),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Es(Ti.LOADEND,this,t)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Es(Ti.LOADSTART,this,t))));const i=this.postRenderFunctions_;for(let s=0,r=i.length;s<r;++s)i[s](this,t);i.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let i=0,s=this.targetChangeHandlerKeys_.length;i<s;++i)St(this.targetChangeHandlerKeys_[i]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener($.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener($.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,na(this.viewport_)}if(this.targetElement_){this.resizeObserver_.unobserve(this.targetElement_);const i=this.targetElement_.getRootNode();i instanceof ShadowRoot&&this.resizeObserver_.unobserve(i.host),this.setSize(void 0)}const t=this.getTarget(),e=typeof t=="string"?document.getElementById(t):t;if(this.targetElement_=e,!e)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{e.appendChild(this.viewport_),this.renderer_||(this.renderer_=new V0(this)),this.mapBrowserEventHandler_=new j0(this,this.moveTolerance_);for(const r in Kt)this.mapBrowserEventHandler_.addEventListener(Kt[r],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener($.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener($.WHEEL,this.boundHandleBrowserEvent_,Id?{passive:!1}:!1);const i=this.keyboardEventTarget_?this.keyboardEventTarget_:e;this.targetChangeHandlerKeys_=[ot(i,$.KEYDOWN,this.handleBrowserEvent,this),ot(i,$.KEYPRESS,this.handleBrowserEvent,this)];const s=e.getRootNode();s instanceof ShadowRoot&&this.resizeObserver_.observe(s.host),this.resizeObserver_.observe(e)}this.updateSize()}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(St(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(St(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);const t=this.getView();t&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=ot(t,ts.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=ot(t,$.CHANGE,this.handleViewPropertyChanged_,this),t.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(St),this.layerGroupPropertyListenerKeys_=null);const t=this.getLayerGroup();t&&(this.handleLayerAdd_(new yn("addlayer",t)),this.layerGroupPropertyListenerKeys_=[ot(t,ts.PROPERTYCHANGE,this.render,this),ot(t,$.CHANGE,this.render,this),ot(t,"addlayer",this.handleLayerAdd_,this),ot(t,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){const t=this.getLayerGroup().getLayerStatesArray();for(let e=0,i=t.length;e<i;++e){const s=t[e].layer;s.hasRenderer()&&s.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}flushDeclutterItems(){const t=this.frameState_;t&&this.renderer_.flushDeclutterItems(t)}removeControl(t){return this.getControls().remove(t)}removeInteraction(t){return this.getInteractions().remove(t)}removeLayer(t){return this.getLayerGroup().getLayers().remove(t)}handleLayerRemove_(t){xg(t.layer)}removeOverlay(t){return this.getOverlays().remove(t)}renderFrame_(t){const e=this.getSize(),i=this.getView(),s=this.frameState_;let r=null;if(e!==void 0&&Eu(e)&&i&&i.isDef()){const o=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=i.getState();if(r={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutterTree:null,extent:Xr(a.center,a.resolution,a.rotation,e),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:e,tileQueue:this.tileQueue_,time:t,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{},mapId:Tt(this),renderTargets:{}},a.nextCenter&&a.nextResolution){const l=isNaN(a.nextRotation)?a.rotation:a.nextRotation;r.nextExtent=Xr(a.nextCenter,a.nextResolution,l,e)}}this.frameState_=r,this.renderer_.renderFrame(r),r&&(r.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,r.postRenderFunctions),s&&(!this.previousExtent_||!dr(this.previousExtent_)&&!is(r.extent,this.previousExtent_))&&(this.dispatchEvent(new Es(Ti.MOVESTART,this,s)),this.previousExtent_=ur(this.previousExtent_)),this.previousExtent_&&!r.viewHints[se.ANIMATING]&&!r.viewHints[se.INTERACTING]&&!is(r.extent,this.previousExtent_)&&(this.dispatchEvent(new Es(Ti.MOVEEND,this,r)),Ad(r.extent,this.previousExtent_))),this.dispatchEvent(new Es(Ti.POSTRENDER,this,r)),this.renderComplete_=this.hasListener(Ti.LOADSTART)||this.hasListener(Ti.LOADEND)||this.hasListener(Si.RENDERCOMPLETE)?!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady():void 0,this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(t){const e=this.getLayerGroup();e&&this.handleLayerRemove_(new yn("removelayer",e)),this.set(Wt.LAYERGROUP,t)}setSize(t){this.set(Wt.SIZE,t)}setTarget(t){this.set(Wt.TARGET,t)}setView(t){if(!t||t instanceof Ze){this.set(Wt.VIEW,t);return}this.set(Wt.VIEW,new Ze);const e=this;t.then(function(i){e.setView(new Ze(i))})}updateSize(){const t=this.getTargetElement();let e;if(t){const s=getComputedStyle(t),r=t.offsetWidth-parseFloat(s.borderLeftWidth)-parseFloat(s.paddingLeft)-parseFloat(s.paddingRight)-parseFloat(s.borderRightWidth),o=t.offsetHeight-parseFloat(s.borderTopWidth)-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom)-parseFloat(s.borderBottomWidth);!isNaN(r)&&!isNaN(o)&&(e=[r,o],!Eu(e)&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)&&zd("No map visible because the map container's width or height are 0."))}const i=this.getSize();e&&(!i||!Dn(e,i))&&(this.setSize(e),this.updateViewportSize_(e))}updateViewportSize_(t){const e=this.getView();e&&e.setViewportSize(t)}};function pw(n){let t=null;n.keyboardEventTarget!==void 0&&(t=typeof n.keyboardEventTarget=="string"?document.getElementById(n.keyboardEventTarget):n.keyboardEventTarget);const e={},i=n.layers&&typeof n.layers.getLayers=="function"?n.layers:new Fn({layers:n.layers});e[Wt.LAYERGROUP]=i,e[Wt.TARGET]=n.target,e[Wt.VIEW]=n.view instanceof Ze?n.view:new Ze;let s;n.controls!==void 0&&(Array.isArray(n.controls)?s=new Je(n.controls.slice()):(mt(typeof n.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),s=n.controls));let r;n.interactions!==void 0&&(Array.isArray(n.interactions)?r=new Je(n.interactions.slice()):(mt(typeof n.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),r=n.interactions));let o;return n.overlays!==void 0?Array.isArray(n.overlays)?o=new Je(n.overlays.slice()):(mt(typeof n.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),o=n.overlays):o=new Je,{controls:s,interactions:r,keyboardEventTarget:t,overlays:o,values:e}}const ee={ELEMENT:"element",MAP:"map",OFFSET:"offset",POSITION:"position",POSITIONING:"positioning"};class Cg extends mi{constructor(t){super(),this.on,this.once,this.un,this.options=t,this.id=t.id,this.insertFirst=t.insertFirst!==void 0?t.insertFirst:!0,this.stopEvent=t.stopEvent!==void 0?t.stopEvent:!0,this.element=document.createElement("div"),this.element.className=t.className!==void 0?t.className:"ol-overlay-container "+Mm,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.autoPan=t.autoPan===!0?{}:t.autoPan||void 0,this.rendered={transform_:"",visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(ee.ELEMENT,this.handleElementChanged),this.addChangeListener(ee.MAP,this.handleMapChanged),this.addChangeListener(ee.OFFSET,this.handleOffsetChanged),this.addChangeListener(ee.POSITION,this.handlePositionChanged),this.addChangeListener(ee.POSITIONING,this.handlePositioningChanged),t.element!==void 0&&this.setElement(t.element),this.setOffset(t.offset!==void 0?t.offset:[0,0]),this.setPositioning(t.positioning||"top-left"),t.position!==void 0&&this.setPosition(t.position)}getElement(){return this.get(ee.ELEMENT)}getId(){return this.id}getMap(){return this.get(ee.MAP)||null}getOffset(){return this.get(ee.OFFSET)}getPosition(){return this.get(ee.POSITION)}getPositioning(){return this.get(ee.POSITIONING)}handleElementChanged(){bd(this.element);const t=this.getElement();t&&this.element.appendChild(t)}handleMapChanged(){this.mapPostrenderListenerKey&&(na(this.element),St(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);const t=this.getMap();if(t){this.mapPostrenderListenerKey=ot(t,Ti.POSTRENDER,this.render,this),this.updatePixelPosition();const e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(t){this.set(ee.ELEMENT,t)}setMap(t){this.set(ee.MAP,t)}setOffset(t){this.set(ee.OFFSET,t)}setPosition(t){this.set(ee.POSITION,t)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(t){const e=this.getMap();if(!e||!e.getTargetElement()||!this.get(ee.POSITION))return;const i=this.getRect(e.getTargetElement(),e.getSize()),s=this.getElement(),r=this.getRect(s,[pm(s),xm(s)]);t=t||{};const o=t.margin===void 0?20:t.margin;if(!hi(i,r)){const a=r[0]-i[0],l=i[2]-r[2],h=r[1]-i[1],c=i[3]-r[3],u=[0,0];if(a<0?u[0]=a-o:l<0&&(u[0]=Math.abs(l)+o),h<0?u[1]=h-o:c<0&&(u[1]=Math.abs(c)+o),u[0]!==0||u[1]!==0){const d=e.getView().getCenterInternal(),g=e.getPixelFromCoordinateInternal(d);if(!g)return;const f=[g[0]+u[0],g[1]+u[1]],m=t.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(f),duration:m.duration,easing:m.easing})}}}getRect(t,e){const i=t.getBoundingClientRect(),s=i.left+window.pageXOffset,r=i.top+window.pageYOffset;return[s,r,s+e[0],r+e[1]]}setPositioning(t){this.set(ee.POSITIONING,t)}setVisible(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)}updatePixelPosition(){const t=this.getMap(),e=this.getPosition();if(!t||!t.isRendered()||!e){this.setVisible(!1);return}const i=t.getPixelFromCoordinate(e),s=t.getSize();this.updateRenderedPosition(i,s)}updateRenderedPosition(t,e){const i=this.element.style,s=this.getOffset(),r=this.getPositioning();this.setVisible(!0);const o=Math.round(t[0]+s[0])+"px",a=Math.round(t[1]+s[1])+"px";let l="0%",h="0%";r=="bottom-right"||r=="center-right"||r=="top-right"?l="-100%":(r=="bottom-center"||r=="center-center"||r=="top-center")&&(l="-50%"),r=="bottom-left"||r=="bottom-center"||r=="bottom-right"?h="-100%":(r=="center-left"||r=="center-center"||r=="center-right")&&(h="-50%");const c=`translate(${l}, ${h}) translate(${o}, ${a})`;this.rendered.transform_!=c&&(this.rendered.transform_=c,i.transform=c)}getOptions(){return this.options}}const Cl=.75,Yo=.1;class xw extends cr{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target}),this.boundHandleRotationChanged_=this.handleRotationChanged_.bind(this),this.collapsed_=t.collapsed!==void 0?t.collapsed:!0,this.collapsible_=t.collapsible!==void 0?t.collapsible:!0,this.collapsible_||(this.collapsed_=!1),this.rotateWithView_=t.rotateWithView!==void 0?t.rotateWithView:!1,this.viewExtent_=void 0;const e=t.className!==void 0?t.className:"ol-overviewmap",i=t.tipLabel!==void 0?t.tipLabel:"Overview map",s=t.collapseLabel!==void 0?t.collapseLabel:"‹";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s):this.collapseLabel_=s;const r=t.label!==void 0?t.label:"›";typeof r=="string"?(this.label_=document.createElement("span"),this.label_.textContent=r):this.label_=r;const o=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_,a=document.createElement("button");a.setAttribute("type","button"),a.title=i,a.appendChild(o),a.addEventListener($.CLICK,this.handleClick_.bind(this),!1),this.ovmapDiv_=document.createElement("div"),this.ovmapDiv_.className="ol-overviewmap-map",this.view_=t.view;const l=new Mg({view:t.view,controls:new Je,interactions:new Je});this.ovmap_=l,t.layers&&t.layers.forEach(function(p){l.addLayer(p)});const h=document.createElement("div");h.className="ol-overviewmap-box",h.style.boxSizing="border-box",this.boxOverlay_=new Cg({position:[0,0],positioning:"center-center",element:h}),this.ovmap_.addOverlay(this.boxOverlay_);const c=e+" "+ls+" "+fo+(this.collapsed_&&this.collapsible_?" "+sa:"")+(this.collapsible_?"":" ol-uncollapsible"),u=this.element;u.className=c,u.appendChild(this.ovmapDiv_),u.appendChild(a);const d=this,g=this.boxOverlay_,f=this.boxOverlay_.getElement(),m=function(p){return{clientX:p.clientX,clientY:p.clientY}},w=function(p){const x=m(p),T=l.getEventCoordinateInternal(x);g.setPosition(T)},_=function(p){const x=l.getEventCoordinateInternal(p);d.getMap().getView().setCenterInternal(x),window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",_)};f.addEventListener("mousedown",function(){window.addEventListener("mousemove",w),window.addEventListener("mouseup",_)})}setMap(t){const e=this.getMap();if(t!==e){if(e){const i=e.getView();i&&this.unbindView_(i),this.ovmap_.setTarget(null)}if(super.setMap(t),t){this.ovmap_.setTarget(this.ovmapDiv_),this.listenerKeys.push(ot(t,ts.PROPERTYCHANGE,this.handleMapPropertyChange_,this));const i=t.getView();i&&(this.bindView_(i),i.isDef()&&(this.ovmap_.updateSize(),this.resetExtent_())),this.ovmap_.isRendered()||this.updateBoxAfterOvmapIsRendered_()}}}handleMapPropertyChange_(t){if(t.key===Wt.VIEW){const e=t.oldValue;e&&this.unbindView_(e);const i=this.getMap().getView();this.bindView_(i)}else!this.ovmap_.isRendered()&&(t.key===Wt.TARGET||t.key===Wt.SIZE)&&this.ovmap_.updateSize()}bindView_(t){if(!this.view_){const e=new Ze({projection:t.getProjection()});this.ovmap_.setView(e)}t.addChangeListener(Fe.ROTATION,this.boundHandleRotationChanged_),this.handleRotationChanged_()}unbindView_(t){t.removeChangeListener(Fe.ROTATION,this.boundHandleRotationChanged_)}handleRotationChanged_(){this.rotateWithView_&&this.ovmap_.getView().setRotation(this.getMap().getView().getRotation())}validateExtent_(){const t=this.getMap(),e=this.ovmap_;if(!t.isRendered()||!e.isRendered())return;const i=t.getSize(),r=t.getView().calculateExtentInternal(i);if(this.viewExtent_&&is(r,this.viewExtent_))return;this.viewExtent_=r;const o=e.getSize(),l=e.getView().calculateExtentInternal(o),h=e.getPixelFromCoordinateInternal(rn(r)),c=e.getPixelFromCoordinateInternal(wo(r)),u=Math.abs(h[0]-c[0]),d=Math.abs(h[1]-c[1]),g=o[0],f=o[1];u<g*Yo||d<f*Yo||u>g*Cl||d>f*Cl?this.resetExtent_():hi(l,r)||this.recenter_()}resetExtent_(){const t=this.getMap(),e=this.ovmap_,i=t.getSize(),r=t.getView().calculateExtentInternal(i),o=e.getView(),a=Math.log(Cl/Yo)/Math.LN2,l=1/(Math.pow(2,a/2)*Yo);Wm(r,l),o.fitInternal(th(r))}recenter_(){const t=this.getMap(),e=this.ovmap_,i=t.getView();e.getView().setCenterInternal(i.getCenterInternal())}updateBox_(){const t=this.getMap(),e=this.ovmap_;if(!t.isRendered()||!e.isRendered())return;const i=t.getSize(),s=t.getView(),r=e.getView(),o=this.rotateWithView_?0:-s.getRotation(),a=this.boxOverlay_,l=this.boxOverlay_.getElement(),h=s.getCenterInternal(),c=s.getResolution(),u=r.getResolution(),d=i[0]*c/u,g=i[1]*c/u;if(a.setPosition(h),l){l.style.width=d+"px",l.style.height=g+"px";const f="rotate("+o+"rad)";l.style.transform=f}}updateBoxAfterOvmapIsRendered_(){this.ovmapPostrenderKey_||(this.ovmapPostrenderKey_=Hr(this.ovmap_,Ti.POSTRENDER,function(t){delete this.ovmapPostrenderKey_,this.updateBox_()},this))}handleClick_(t){t.preventDefault(),this.handleToggle_()}handleToggle_(){this.element.classList.toggle(sa),this.collapsed_?js(this.collapseLabel_,this.label_):js(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_;const t=this.ovmap_;if(!this.collapsed_){if(t.isRendered()){this.viewExtent_=void 0,t.render();return}t.updateSize(),this.resetExtent_(),this.updateBoxAfterOvmapIsRendered_()}}getCollapsible(){return this.collapsible_}setCollapsible(t){this.collapsible_!==t&&(this.collapsible_=t,this.element.classList.toggle("ol-uncollapsible"),!t&&this.collapsed_&&this.handleToggle_())}setCollapsed(t){!this.collapsible_||this.collapsed_===t||this.handleToggle_()}getCollapsed(){return this.collapsed_}getRotateWithView(){return this.rotateWithView_}setRotateWithView(t){this.rotateWithView_!==t&&(this.rotateWithView_=t,this.getMap().getView().getRotation()!==0&&(this.rotateWithView_?this.handleRotationChanged_():this.ovmap_.getView().setRotation(0),this.viewExtent_=void 0,this.validateExtent_(),this.updateBox_()))}getOverviewMap(){return this.ovmap_}render(t){this.validateExtent_(),this.updateBox_()}}const Rl="units",Tw=[1,2,5],br=25.4/.28;class Mw extends cr{constructor(t){t=t||{};const e=document.createElement("div");e.style.pointerEvents="none",super({element:e,render:t.render,target:t.target}),this.on,this.once,this.un;const i=t.className!==void 0?t.className:t.bar?"ol-scale-bar":"ol-scale-line";this.innerElement_=document.createElement("div"),this.innerElement_.className=i+"-inner",this.element.className=i+" "+ls,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=t.minWidth!==void 0?t.minWidth:64,this.maxWidth_=t.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",this.addChangeListener(Rl,this.handleUnitsChanged_),this.setUnits(t.units||"metric"),this.scaleBar_=t.bar||!1,this.scaleBarSteps_=t.steps||4,this.scaleBarText_=t.text||!1,this.dpi_=t.dpi||void 0}getUnits(){return this.get(Rl)}handleUnitsChanged_(){this.updateElement_()}setUnits(t){this.set(Rl,t)}setDpi(t){this.dpi_=t}updateElement_(){const t=this.viewState_;if(!t){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const e=t.center,i=t.projection,s=this.getUnits(),r=s=="degrees"?"degrees":"m";let o=oa(i,t.resolution,e,r);const a=this.minWidth_*(this.dpi_||br)/br,l=this.maxWidth_!==void 0?this.maxWidth_*(this.dpi_||br)/br:void 0;let h=a*o,c="";if(s=="degrees"){const x=qs.degrees;h*=x,h<x/60?(c="″",o*=3600):h<x?(c="′",o*=60):c="°"}else if(s=="imperial")h<.9144?(c="in",o/=.0254):h<1609.344?(c="ft",o/=.3048):(c="mi",o/=1609.344);else if(s=="nautical")o/=1852,c="NM";else if(s=="metric")h<.001?(c="μm",o*=1e6):h<1?(c="mm",o*=1e3):h<1e3?c="m":(c="km",o/=1e3);else if(s=="us")h<.9144?(c="in",o*=39.37):h<1609.344?(c="ft",o/=.30480061):(c="mi",o/=1609.3472);else throw new Error("Invalid units");let u=3*Math.floor(Math.log(a*o)/Math.log(10)),d,g,f,m,w,_;for(;;){f=Math.floor(u/3);const x=Math.pow(10,f);if(d=Tw[(u%3+3)%3]*x,g=Math.round(d/o),isNaN(g)){this.element.style.display="none",this.renderedVisible_=!1;return}if(l!==void 0&&g>=l){d=m,g=w,f=_;break}else if(g>=a)break;m=d,w=g,_=f,++u}const p=this.scaleBar_?this.createScaleBar(g,d,c):d.toFixed(f<0?-f:0)+" "+c;this.renderedHTML_!=p&&(this.innerElement_.innerHTML=p,this.renderedHTML_=p),this.renderedWidth_!=g&&(this.innerElement_.style.width=g+"px",this.renderedWidth_=g),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}createScaleBar(t,e,i){const s=this.getScaleForResolution(),r=s<1?Math.round(1/s).toLocaleString()+" : 1":"1 : "+Math.round(s).toLocaleString(),o=this.scaleBarSteps_,a=t/o,l=[this.createMarker("absolute")];for(let c=0;c<o;++c){const u=c%2===0?"ol-scale-singlebar-odd":"ol-scale-singlebar-even";l.push(`<div><div class="ol-scale-singlebar ${u}" style="width: ${a}px;"></div>`+this.createMarker("relative")+(c%2===0||o===2?this.createStepText(c,t,!1,e,i):"")+"</div>")}return l.push(this.createStepText(o,t,!0,e,i)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${t}px;">`+r+"</div>":"")+l.join("")}createMarker(t){return`<div class="ol-scale-step-marker" style="position: ${t}; top: ${t==="absolute"?3:-10}px;"></div>`}createStepText(t,e,i,s,r){const a=(t===0?0:Math.round(s/this.scaleBarSteps_*t*100)/100)+(t===0?"":" "+r),l=t===0?-3:e/this.scaleBarSteps_*-1,h=t===0?0:e/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${l}px;text-align: ${t===0?"left":"center"};min-width: ${h}px;left: ${i?e+"px":"unset"};">`+a+"</div>"}getScaleForResolution(){const t=oa(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,"m"),e=this.dpi_||br,i=1e3/25.4;return t*i*e}render(t){const e=t.frameState;e?this.viewState_=e.viewState:this.viewState_=null,this.updateElement_()}}function Cw(n){const t=Object.keys(n.defs),e=t.length;let i,s;for(i=0;i<e;++i){const r=t[i];if(!at(r)){const o=n.defs(r);let a=o.units;!a&&o.projName==="longlat"&&(a="degrees"),Hd(new Pa({code:r,axisOrientation:o.axis,metersPerUnit:o.to_meter,units:a}))}}for(i=0;i<e;++i){const r=t[i],o=at(r);for(s=0;s<e;++s){const a=t[s],l=at(a);if(!Nd(r,a))if(n.defs[r]===n.defs[a])jl([o,l]);else{const h=n(r,a);Qm(o,l,hu(o,l,h.forward),hu(l,o,h.inverse))}}}}function Rw(n){n("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),n("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),n("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),n.WGS84=n["EPSG:4326"],n["EPSG:3785"]=n["EPSG:3857"],n.GOOGLE=n["EPSG:3857"],n["EPSG:900913"]=n["EPSG:3857"],n["EPSG:102113"]=n["EPSG:3857"]}var ns=1,ss=2,Ws=3,Ew=4,sh=5,vu=6378137,vw=6356752314e-3,Iu=.0066943799901413165,zr=484813681109536e-20,S=Math.PI/2,Iw=.16666666666666666,bw=.04722222222222222,Lw=.022156084656084655,O=1e-10,Jt=.017453292519943295,Ii=57.29577951308232,Ct=Math.PI/4,Jr=Math.PI*2,Bt=3.14159265359,Ae={};Ae.greenwich=0;Ae.lisbon=-9.131906111111;Ae.paris=2.337229166667;Ae.bogota=-74.080916666667;Ae.madrid=-3.687938888889;Ae.rome=12.452333333333;Ae.bern=7.439583333333;Ae.jakarta=106.807719444444;Ae.ferro=-17.666666666667;Ae.brussels=4.367975;Ae.stockholm=18.058277777778;Ae.athens=23.7163375;Ae.oslo=10.722916666667;const Sw={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var bu=/[\s_\-\/\(\)]/g;function Sn(n,t){if(n[t])return n[t];for(var e=Object.keys(n),i=t.toLowerCase().replace(bu,""),s=-1,r,o;++s<e.length;)if(r=e[s],o=r.toLowerCase().replace(bu,""),o===i)return n[r]}function rh(n){var t={},e=n.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,l){var h=l.split("=");return h.push(!0),a[h[0].toLowerCase()]=h[1],a},{}),i,s,r,o={proj:"projName",datum:"datumCode",rf:function(a){t.rf=parseFloat(a)},lat_0:function(a){t.lat0=a*Jt},lat_1:function(a){t.lat1=a*Jt},lat_2:function(a){t.lat2=a*Jt},lat_ts:function(a){t.lat_ts=a*Jt},lon_0:function(a){t.long0=a*Jt},lon_1:function(a){t.long1=a*Jt},lon_2:function(a){t.long2=a*Jt},alpha:function(a){t.alpha=parseFloat(a)*Jt},gamma:function(a){t.rectified_grid_angle=parseFloat(a)},lonc:function(a){t.longc=a*Jt},x_0:function(a){t.x0=parseFloat(a)},y_0:function(a){t.y0=parseFloat(a)},k_0:function(a){t.k0=parseFloat(a)},k:function(a){t.k0=parseFloat(a)},a:function(a){t.a=parseFloat(a)},b:function(a){t.b=parseFloat(a)},r_a:function(){t.R_A=!0},zone:function(a){t.zone=parseInt(a,10)},south:function(){t.utmSouth=!0},towgs84:function(a){t.datum_params=a.split(",").map(function(l){return parseFloat(l)})},to_meter:function(a){t.to_meter=parseFloat(a)},units:function(a){t.units=a;var l=Sn(Sw,a);l&&(t.to_meter=l.to_meter)},from_greenwich:function(a){t.from_greenwich=a*Jt},pm:function(a){var l=Sn(Ae,a);t.from_greenwich=(l||parseFloat(a))*Jt},nadgrids:function(a){a==="@null"?t.datumCode="none":t.nadgrids=a},axis:function(a){var l="ewnsud";a.length===3&&l.indexOf(a.substr(0,1))!==-1&&l.indexOf(a.substr(1,1))!==-1&&l.indexOf(a.substr(2,1))!==-1&&(t.axis=a)},approx:function(){t.approx=!0}};for(i in e)s=e[i],i in o?(r=o[i],typeof r=="function"?r(s):t[r]=s):t[i]=s;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}var Qr=1,Rg=2,Eg=3,fa=4,vg=5,rc=-1,Nw=/\s/,Aw=/[A-Za-z]/,Ow=/[A-Za-z84_]/,Ha=/[,\]]/,Ig=/[\d\.E\-\+]/;function on(n){if(typeof n!="string")throw new Error("not a string");this.text=n.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=Qr}on.prototype.readCharicter=function(){var n=this.text[this.place++];if(this.state!==fa)for(;Nw.test(n);){if(this.place>=this.text.length)return;n=this.text[this.place++]}switch(this.state){case Qr:return this.neutral(n);case Rg:return this.keyword(n);case fa:return this.quoted(n);case vg:return this.afterquote(n);case Eg:return this.number(n);case rc:return}};on.prototype.afterquote=function(n){if(n==='"'){this.word+='"',this.state=fa;return}if(Ha.test(n)){this.word=this.word.trim(),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in afterquote yet, index '+this.place)};on.prototype.afterItem=function(n){if(n===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=Qr;return}if(n==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=Qr,this.currentObject=this.stack.pop(),this.currentObject||(this.state=rc);return}};on.prototype.number=function(n){if(Ig.test(n)){this.word+=n;return}if(Ha.test(n)){this.word=parseFloat(this.word),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in number yet, index '+this.place)};on.prototype.quoted=function(n){if(n==='"'){this.state=vg;return}this.word+=n};on.prototype.keyword=function(n){if(Ow.test(n)){this.word+=n;return}if(n==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=Qr;return}if(Ha.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in keyword yet, index '+this.place)};on.prototype.neutral=function(n){if(Aw.test(n)){this.word=n,this.state=Rg;return}if(n==='"'){this.word="",this.state=fa;return}if(Ig.test(n)){this.word=n,this.state=Eg;return}if(Ha.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in neutral yet, index '+this.place)};on.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===rc)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Pw(n){var t=new on(n);return t.output()}function Lu(n,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var i=t?{}:n,s=e.reduce(function(r,o){return Ns(o,r),r},i);t&&(n[t]=s)}function Ns(n,t){if(!Array.isArray(n)){t[n]=!0;return}var e=n.shift();if(e==="PARAMETER"&&(e=n.shift()),n.length===1){if(Array.isArray(n[0])){t[e]={},Ns(n[0],t[e]);return}t[e]=n[0];return}if(!n.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=n;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(n);return}Array.isArray(e)||(t[e]={});var i;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:n[0].toLowerCase(),convert:n[1]},n.length===3&&Ns(n[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:n[0],a:n[1],rf:n[2]},n.length===4&&Ns(n[3],t[e]);return;case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":n[0]=["name",n[0]],Lu(t,e,n);return;default:for(i=-1;++i<n.length;)if(!Array.isArray(n[i]))return Ns(n,t[e]);return Lu(t,e,n)}}var Kw=.017453292519943295;function Dw(n,t){var e=t[0],i=t[1];!(e in n)&&i in n&&(n[e]=n[i],t.length===3&&(n[e]=t[2](n[e])))}function yi(n){return n*Kw}function Fw(n){if(n.type==="GEOGCS"?n.projName="longlat":n.type==="LOCAL_CS"?(n.projName="identity",n.local=!0):typeof n.PROJECTION=="object"?n.projName=Object.keys(n.PROJECTION)[0]:n.projName=n.PROJECTION,n.AXIS){for(var t="",e=0,i=n.AXIS.length;e<i;++e){var s=[n.AXIS[e][0].toLowerCase(),n.AXIS[e][1].toLowerCase()];s[0].indexOf("north")!==-1||(s[0]==="y"||s[0]==="lat")&&s[1]==="north"?t+="n":s[0].indexOf("south")!==-1||(s[0]==="y"||s[0]==="lat")&&s[1]==="south"?t+="s":s[0].indexOf("east")!==-1||(s[0]==="x"||s[0]==="lon")&&s[1]==="east"?t+="e":(s[0].indexOf("west")!==-1||(s[0]==="x"||s[0]==="lon")&&s[1]==="west")&&(t+="w")}t.length===2&&(t+="u"),t.length===3&&(n.axis=t)}n.UNIT&&(n.units=n.UNIT.name.toLowerCase(),n.units==="metre"&&(n.units="meter"),n.UNIT.convert&&(n.type==="GEOGCS"?n.DATUM&&n.DATUM.SPHEROID&&(n.to_meter=n.UNIT.convert*n.DATUM.SPHEROID.a):n.to_meter=n.UNIT.convert));var r=n.GEOGCS;n.type==="GEOGCS"&&(r=n),r&&(r.DATUM?n.datumCode=r.DATUM.name.toLowerCase():n.datumCode=r.name.toLowerCase(),n.datumCode.slice(0,2)==="d_"&&(n.datumCode=n.datumCode.slice(2)),(n.datumCode==="new_zealand_geodetic_datum_1949"||n.datumCode==="new_zealand_1949")&&(n.datumCode="nzgd49"),(n.datumCode==="wgs_1984"||n.datumCode==="world_geodetic_system_1984")&&(n.PROJECTION==="Mercator_Auxiliary_Sphere"&&(n.sphere=!0),n.datumCode="wgs84"),n.datumCode.slice(-6)==="_ferro"&&(n.datumCode=n.datumCode.slice(0,-6)),n.datumCode.slice(-8)==="_jakarta"&&(n.datumCode=n.datumCode.slice(0,-8)),~n.datumCode.indexOf("belge")&&(n.datumCode="rnb72"),r.DATUM&&r.DATUM.SPHEROID&&(n.ellps=r.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),n.ellps.toLowerCase().slice(0,13)==="international"&&(n.ellps="intl"),n.a=r.DATUM.SPHEROID.a,n.rf=parseFloat(r.DATUM.SPHEROID.rf,10)),r.DATUM&&r.DATUM.TOWGS84&&(n.datum_params=r.DATUM.TOWGS84),~n.datumCode.indexOf("osgb_1936")&&(n.datumCode="osgb36"),~n.datumCode.indexOf("osni_1952")&&(n.datumCode="osni52"),(~n.datumCode.indexOf("tm65")||~n.datumCode.indexOf("geodetic_datum_of_1965"))&&(n.datumCode="ire65"),n.datumCode==="ch1903+"&&(n.datumCode="ch1903"),~n.datumCode.indexOf("israel")&&(n.datumCode="isr93")),n.b&&!isFinite(n.b)&&(n.b=n.a);function o(h){var c=n.to_meter||1;return h*c}var a=function(h){return Dw(n,h)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",yi],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",yi],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",yi],["lat0","latitude_of_origin",yi],["lat0","standard_parallel_1",yi],["lat1","standard_parallel_1",yi],["lat2","standard_parallel_2",yi],["azimuth","Azimuth"],["alpha","azimuth",yi],["srsCode","name"]];l.forEach(a),!n.long0&&n.longc&&(n.projName==="Albers_Conic_Equal_Area"||n.projName==="Lambert_Azimuthal_Equal_Area")&&(n.long0=n.longc),!n.lat_ts&&n.lat1&&(n.projName==="Stereographic_South_Pole"||n.projName==="Polar Stereographic (variant B)")?(n.lat0=yi(n.lat1>0?90:-90),n.lat_ts=n.lat1):!n.lat_ts&&n.lat0&&n.projName==="Polar_Stereographic"&&(n.lat_ts=n.lat0,n.lat0=yi(n.lat0>0?90:-90))}function bg(n){var t=Pw(n),e=t.shift(),i=t.shift();t.unshift(["name",i]),t.unshift(["type",e]);var s={};return Ns(t,s),Fw(s),s}function fe(n){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?fe[n]=rh(arguments[1]):fe[n]=bg(arguments[1]):fe[n]=e}else if(arguments.length===1){if(Array.isArray(n))return n.map(function(i){Array.isArray(i)?fe.apply(t,i):fe(i)});if(typeof n=="string"){if(n in fe)return fe[n]}else"EPSG"in n?fe["EPSG:"+n.EPSG]=n:"ESRI"in n?fe["ESRI:"+n.ESRI]=n:"IAU2000"in n?fe["IAU2000:"+n.IAU2000]=n:console.log(n);return}}Rw(fe);function kw(n){return typeof n=="string"}function Gw(n){return n in fe}var Ww=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function zw(n){return Ww.some(function(t){return n.indexOf(t)>-1})}var Bw=["3857","900913","3785","102113"];function Hw(n){var t=Sn(n,"authority");if(t){var e=Sn(t,"epsg");return e&&Bw.indexOf(e)>-1}}function Yw(n){var t=Sn(n,"extension");if(t)return Sn(t,"proj4")}function Xw(n){return n[0]==="+"}function Uw(n){if(kw(n)){if(Gw(n))return fe[n];if(zw(n)){var t=bg(n);if(Hw(t))return fe["EPSG:3857"];var e=Yw(t);return e?rh(e):t}if(Xw(n))return rh(n)}else return n}function Su(n,t){n=n||{};var e,i;if(!t)return n;for(i in t)e=t[i],e!==void 0&&(n[i]=e);return n}function Fi(n,t,e){var i=n*t;return e/Math.sqrt(1-i*i)}function xo(n){return n<0?-1:1}function F(n){return Math.abs(n)<=Bt?n:n-xo(n)*Jr}function di(n,t,e){var i=n*e,s=.5*n;return i=Math.pow((1-i)/(1+i),s),Math.tan(.5*(S-t))/i}function to(n,t){for(var e=.5*n,i,s,r=S-2*Math.atan(t),o=0;o<=15;o++)if(i=n*Math.sin(r),s=S-2*Math.atan(t*Math.pow((1-i)/(1+i),e))-r,r+=s,Math.abs(s)<=1e-10)return r;return-9999}function Vw(){var n=this.b/this.a;this.es=1-n*n,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=Fi(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function jw(n){var t=n.x,e=n.y;if(e*Ii>90&&e*Ii<-90&&t*Ii>180&&t*Ii<-180)return null;var i,s;if(Math.abs(Math.abs(e)-S)<=O)return null;if(this.sphere)i=this.x0+this.a*this.k0*F(t-this.long0),s=this.y0+this.a*this.k0*Math.log(Math.tan(Ct+.5*e));else{var r=Math.sin(e),o=di(this.e,e,r);i=this.x0+this.a*this.k0*F(t-this.long0),s=this.y0-this.a*this.k0*Math.log(o)}return n.x=i,n.y=s,n}function qw(n){var t=n.x-this.x0,e=n.y-this.y0,i,s;if(this.sphere)s=S-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var r=Math.exp(-e/(this.a*this.k0));if(s=to(this.e,r),s===-9999)return null}return i=F(this.long0+t/(this.a*this.k0)),n.x=i,n.y=s,n}var Zw=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const $w={init:Vw,forward:jw,inverse:qw,names:Zw};function Jw(){}function Nu(n){return n}var Qw=["longlat","identity"];const ty={init:Jw,forward:Nu,inverse:Nu,names:Qw};var ey=[$w,ty],ta={},ma=[];function Lg(n,t){var e=ma.length;return n.names?(ma[e]=n,n.names.forEach(function(i){ta[i.toLowerCase()]=e}),this):(console.log(t),!0)}function iy(n){if(!n)return!1;var t=n.toLowerCase();if(typeof ta[t]<"u"&&ma[ta[t]])return ma[ta[t]]}function ny(){ey.forEach(Lg)}const sy={start:ny,add:Lg,get:iy};var J={};J.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};J.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};J.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};J.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};J.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};J.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};J.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};J.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};J.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};J.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};J.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};J.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};J.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};J.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};J.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};J.clrk80ign={a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"};J.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};J.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};J.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};J.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};J.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};J.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};J.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};J.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};J.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};J.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};J.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};J.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};J.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};J.hough={a:6378270,rf:297,ellipseName:"Hough"};J.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};J.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};J.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};J.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};J.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};J.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};J.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};J.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};J.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};J.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};J.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};J.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var ry=J.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};J.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function oy(n,t,e,i){var s=n*n,r=t*t,o=(s-r)/s,a=0;i?(n*=1-o*(Iw+o*(bw+o*Lw)),s=n*n,o=0):a=Math.sqrt(o);var l=(s-r)/r;return{es:o,e:a,ep2:l}}function ay(n,t,e,i,s){if(!n){var r=Sn(J,i);r||(r=ry),n=r.a,t=r.b,e=r.rf}return e&&!t&&(t=(1-1/e)*n),(e===0||Math.abs(n-t)<O)&&(s=!0,t=n),{a:n,b:t,rf:e,sphere:s}}var jt={};jt.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};jt.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};jt.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};jt.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};jt.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};jt.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};jt.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};jt.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};jt.militargeographische_institut={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"};jt.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};jt.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};jt.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};jt.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};jt.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};jt.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};jt.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};jt.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};jt.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function ly(n,t,e,i,s,r,o){var a={};return n===void 0||n==="none"?a.datum_type=sh:a.datum_type=Ew,t&&(a.datum_params=t.map(parseFloat),(a.datum_params[0]!==0||a.datum_params[1]!==0||a.datum_params[2]!==0)&&(a.datum_type=ns),a.datum_params.length>3&&(a.datum_params[3]!==0||a.datum_params[4]!==0||a.datum_params[5]!==0||a.datum_params[6]!==0)&&(a.datum_type=ss,a.datum_params[3]*=zr,a.datum_params[4]*=zr,a.datum_params[5]*=zr,a.datum_params[6]=a.datum_params[6]/1e6+1)),o&&(a.datum_type=Ws,a.grids=o),a.a=e,a.b=i,a.es=s,a.ep2=r,a}var Sg={};function hy(n,t){var e=new DataView(t),i=dy(e),s=gy(e,i),r=fy(e,s,i),o={header:s,subgrids:r};return Sg[n]=o,o}function cy(n){if(n===void 0)return null;var t=n.split(",");return t.map(uy)}function uy(n){if(n.length===0)return null;var t=n[0]==="@";return t&&(n=n.slice(1)),n==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:n,mandatory:!t,grid:Sg[n]||null,isNull:!1}}function As(n){return n/3600*Math.PI/180}function dy(n){var t=n.getInt32(8,!1);return t===11?!1:(t=n.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function gy(n,t){return{nFields:n.getInt32(8,t),nSubgridFields:n.getInt32(24,t),nSubgrids:n.getInt32(40,t),shiftType:oh(n,56,64).trim(),fromSemiMajorAxis:n.getFloat64(120,t),fromSemiMinorAxis:n.getFloat64(136,t),toSemiMajorAxis:n.getFloat64(152,t),toSemiMinorAxis:n.getFloat64(168,t)}}function oh(n,t,e){return String.fromCharCode.apply(null,new Uint8Array(n.buffer.slice(t,e)))}function fy(n,t,e){for(var i=176,s=[],r=0;r<t.nSubgrids;r++){var o=wy(n,i,e),a=yy(n,i,o,e),l=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),h=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);s.push({ll:[As(o.lowerLongitude),As(o.lowerLatitude)],del:[As(o.longitudeInterval),As(o.latitudeInterval)],lim:[l,h],count:o.gridNodeCount,cvs:my(a)}),i+=176+o.gridNodeCount*16}return s}function my(n){return n.map(function(t){return[As(t.longitudeShift),As(t.latitudeShift)]})}function wy(n,t,e){return{name:oh(n,t+8,t+16).trim(),parent:oh(n,t+24,t+24+8).trim(),lowerLatitude:n.getFloat64(t+72,e),upperLatitude:n.getFloat64(t+88,e),lowerLongitude:n.getFloat64(t+104,e),upperLongitude:n.getFloat64(t+120,e),latitudeInterval:n.getFloat64(t+136,e),longitudeInterval:n.getFloat64(t+152,e),gridNodeCount:n.getInt32(t+168,e)}}function yy(n,t,e,i){for(var s=t+176,r=16,o=[],a=0;a<e.gridNodeCount;a++){var l={latitudeShift:n.getFloat32(s+a*r,i),longitudeShift:n.getFloat32(s+a*r+4,i),latitudeAccuracy:n.getFloat32(s+a*r+8,i),longitudeAccuracy:n.getFloat32(s+a*r+12,i)};o.push(l)}return o}function Ni(n,t){if(!(this instanceof Ni))return new Ni(n);t=t||function(h){if(h)throw h};var e=Uw(n);if(typeof e!="object"){t(n);return}var i=Ni.projections.get(e.projName);if(!i){t(n);return}if(e.datumCode&&e.datumCode!=="none"){var s=Sn(jt,e.datumCode);s&&(e.datum_params=e.datum_params||(s.towgs84?s.towgs84.split(","):null),e.ellps=s.ellipse,e.datumName=s.datumName?s.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var r=ay(e.a,e.b,e.rf,e.ellps,e.sphere),o=oy(r.a,r.b,r.rf,e.R_A),a=cy(e.nadgrids),l=e.datum||ly(e.datumCode,e.datum_params,r.a,r.b,o.es,o.ep2,a);Su(this,e),Su(this,i),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=l,this.init(),t(null,this)}Ni.projections=sy;Ni.projections.start();function _y(n,t){return n.datum_type!==t.datum_type||n.a!==t.a||Math.abs(n.es-t.es)>5e-11?!1:n.datum_type===ns?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]:n.datum_type===ss?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]&&n.datum_params[3]===t.datum_params[3]&&n.datum_params[4]===t.datum_params[4]&&n.datum_params[5]===t.datum_params[5]&&n.datum_params[6]===t.datum_params[6]:!0}function Ng(n,t,e){var i=n.x,s=n.y,r=n.z?n.z:0,o,a,l,h;if(s<-S&&s>-1.001*S)s=-S;else if(s>S&&s<1.001*S)s=S;else{if(s<-S)return{x:-1/0,y:-1/0,z:n.z};if(s>S)return{x:1/0,y:1/0,z:n.z}}return i>Math.PI&&(i-=2*Math.PI),a=Math.sin(s),h=Math.cos(s),l=a*a,o=e/Math.sqrt(1-t*l),{x:(o+r)*h*Math.cos(i),y:(o+r)*h*Math.sin(i),z:(o*(1-t)+r)*a}}function Ag(n,t,e,i){var s=1e-12,r=s*s,o=30,a,l,h,c,u,d,g,f,m,w,_,p,x,T=n.x,M=n.y,C=n.z?n.z:0,I,v,K;if(a=Math.sqrt(T*T+M*M),l=Math.sqrt(T*T+M*M+C*C),a/e<s){if(I=0,l/e<s)return v=S,K=-i,{x:n.x,y:n.y,z:n.z}}else I=Math.atan2(M,T);h=C/l,c=a/l,u=1/Math.sqrt(1-t*(2-t)*c*c),f=c*(1-t)*u,m=h*u,x=0;do x++,g=e/Math.sqrt(1-t*m*m),K=a*f+C*m-g*(1-t*m*m),d=t*g/(g+K),u=1/Math.sqrt(1-d*(2-d)*c*c),w=c*(1-d)*u,_=h*u,p=_*f-w*m,f=w,m=_;while(p*p>r&&x<o);return v=Math.atan(_/Math.abs(w)),{x:I,y:v,z:K}}function py(n,t,e){if(t===ns)return{x:n.x+e[0],y:n.y+e[1],z:n.z+e[2]};if(t===ss){var i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],h=e[6];return{x:h*(n.x-l*n.y+a*n.z)+i,y:h*(l*n.x+n.y-o*n.z)+s,z:h*(-a*n.x+o*n.y+n.z)+r}}}function xy(n,t,e){if(t===ns)return{x:n.x-e[0],y:n.y-e[1],z:n.z-e[2]};if(t===ss){var i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],h=e[6],c=(n.x-i)/h,u=(n.y-s)/h,d=(n.z-r)/h;return{x:c+l*u-a*d,y:-l*c+u+o*d,z:a*c-o*u+d}}}function Xo(n){return n===ns||n===ss}function Ty(n,t,e){if(_y(n,t)||n.datum_type===sh||t.datum_type===sh)return e;var i=n.a,s=n.es;if(n.datum_type===Ws){var r=Au(n,!1,e);if(r!==0)return;i=vu,s=Iu}var o=t.a,a=t.b,l=t.es;if(t.datum_type===Ws&&(o=vu,a=vw,l=Iu),s===l&&i===o&&!Xo(n.datum_type)&&!Xo(t.datum_type))return e;if(e=Ng(e,s,i),Xo(n.datum_type)&&(e=py(e,n.datum_type,n.datum_params)),Xo(t.datum_type)&&(e=xy(e,t.datum_type,t.datum_params)),e=Ag(e,l,o,a),t.datum_type===Ws){var h=Au(t,!0,e);if(h!==0)return}return e}function Au(n,t,e){if(n.grids===null||n.grids.length===0)return console.log("Grid shift grids not found"),-1;var i={x:-e.x,y:e.y},s={x:Number.NaN,y:Number.NaN},r=[];t:for(var o=0;o<n.grids.length;o++){var a=n.grids[o];if(r.push(a.name),a.isNull){s=i;break}if(a.mandatory,a.grid===null){if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1;continue}for(var l=a.grid.subgrids,h=0,c=l.length;h<c;h++){var u=l[h],d=(Math.abs(u.del[1])+Math.abs(u.del[0]))/1e4,g=u.ll[0]-d,f=u.ll[1]-d,m=u.ll[0]+(u.lim[0]-1)*u.del[0]+d,w=u.ll[1]+(u.lim[1]-1)*u.del[1]+d;if(!(f>i.y||g>i.x||w<i.y||m<i.x)&&(s=My(i,t,u),!isNaN(s.x)))break t}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*Ii+" "+i.y*Ii+" tried: '"+r+"'"),-1):(e.x=-s.x,e.y=s.y,0)}function My(n,t,e){var i={x:Number.NaN,y:Number.NaN};if(isNaN(n.x))return i;var s={x:n.x,y:n.y};s.x-=e.ll[0],s.y-=e.ll[1],s.x=F(s.x-Math.PI)+Math.PI;var r=Ou(s,e);if(t){if(isNaN(r.x))return i;r.x=s.x-r.x,r.y=s.y-r.y;var o=9,a=1e-12,l,h;do{if(h=Ou(r,e),isNaN(h.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:s.x-(h.x+r.x),y:s.y-(h.y+r.y)},r.x+=l.x,r.y+=l.y}while(o--&&Math.abs(l.x)>a&&Math.abs(l.y)>a);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=F(r.x+e.ll[0]),i.y=r.y+e.ll[1]}else isNaN(r.x)||(i.x=n.x+r.x,i.y=n.y+r.y);return i}function Ou(n,t){var e={x:n.x/t.del[0],y:n.y/t.del[1]},i={x:Math.floor(e.x),y:Math.floor(e.y)},s={x:e.x-1*i.x,y:e.y-1*i.y},r={x:Number.NaN,y:Number.NaN},o;if(i.x<0||i.x>=t.lim[0]||i.y<0||i.y>=t.lim[1])return r;o=i.y*t.lim[0]+i.x;var a={x:t.cvs[o][0],y:t.cvs[o][1]};o++;var l={x:t.cvs[o][0],y:t.cvs[o][1]};o+=t.lim[0];var h={x:t.cvs[o][0],y:t.cvs[o][1]};o--;var c={x:t.cvs[o][0],y:t.cvs[o][1]},u=s.x*s.y,d=s.x*(1-s.y),g=(1-s.x)*(1-s.y),f=(1-s.x)*s.y;return r.x=g*a.x+d*l.x+f*c.x+u*h.x,r.y=g*a.y+d*l.y+f*c.y+u*h.y,r}function Pu(n,t,e){var i=e.x,s=e.y,r=e.z||0,o,a,l,h={};for(l=0;l<3;l++)if(!(t&&l===2&&e.z===void 0))switch(l===0?(o=i,"ew".indexOf(n.axis[l])!==-1?a="x":a="y"):l===1?(o=s,"ns".indexOf(n.axis[l])!==-1?a="y":a="x"):(o=r,a="z"),n.axis[l]){case"e":h[a]=o;break;case"w":h[a]=-o;break;case"n":h[a]=o;break;case"s":h[a]=-o;break;case"u":e[a]!==void 0&&(h.z=o);break;case"d":e[a]!==void 0&&(h.z=-o);break;default:return null}return h}function Og(n){var t={x:n[0],y:n[1]};return n.length>2&&(t.z=n[2]),n.length>3&&(t.m=n[3]),t}function Cy(n){Ku(n.x),Ku(n.y)}function Ku(n){if(typeof Number.isFinite=="function"){if(Number.isFinite(n))return;throw new TypeError("coordinates must be finite numbers")}if(typeof n!="number"||n!==n||!isFinite(n))throw new TypeError("coordinates must be finite numbers")}function Ry(n,t){return(n.datum.datum_type===ns||n.datum.datum_type===ss||n.datum.datum_type===Ws)&&t.datumCode!=="WGS84"||(t.datum.datum_type===ns||t.datum.datum_type===ss||t.datum.datum_type===Ws)&&n.datumCode!=="WGS84"}function wa(n,t,e,i){var s;Array.isArray(e)?e=Og(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var r=e.z!==void 0;if(Cy(e),n.datum&&t.datum&&Ry(n,t)&&(s=new Ni("WGS84"),e=wa(n,s,e,i),n=s),i&&n.axis!=="enu"&&(e=Pu(n,!1,e)),n.projName==="longlat")e={x:e.x*Jt,y:e.y*Jt,z:e.z||0};else if(n.to_meter&&(e={x:e.x*n.to_meter,y:e.y*n.to_meter,z:e.z||0}),e=n.inverse(e),!e)return;if(n.from_greenwich&&(e.x+=n.from_greenwich),e=Ty(n.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*Ii,y:e.y*Ii,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),i&&t.axis!=="enu"?Pu(t,!0,e):(e&&!r&&delete e.z,e)}var Du=Ni("WGS84");function El(n,t,e,i){var s,r,o;return Array.isArray(e)?(s=wa(n,t,e,i)||{x:NaN,y:NaN},e.length>2?typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(e.splice(3)):[s.x,s.y,e[2]].concat(e.splice(3)):[s.x,s.y].concat(e.splice(2)):[s.x,s.y]):(r=wa(n,t,e,i),o=Object.keys(e),o.length===2||o.forEach(function(a){if(typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(a==="x"||a==="y"||a==="z")return}else if(a==="x"||a==="y")return;r[a]=e[a]}),r)}function Fu(n){return n instanceof Ni?n:n.oProj?n.oProj:Ni(n)}function _e(n,t,e){n=Fu(n);var i=!1,s;return typeof t>"u"?(t=n,n=Du,i=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=n,n=Du,i=!0),t=Fu(t),e?El(n,t,e):(s={forward:function(r,o){return El(n,t,r,o)},inverse:function(r,o){return El(t,n,r,o)}},i&&(s.oProj=t),s)}var ku=6,Pg="AJSAJS",Kg="AFAFAF",Os=65,Me=73,Ue=79,Pr=86,Kr=90;const Ey={forward:Dg,inverse:vy,toPoint:Fg};function Dg(n,t){return t=t||5,Ly(Iy({lat:n[1],lon:n[0]}),t)}function vy(n){var t=oc(Gg(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function Fg(n){var t=oc(Gg(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function vl(n){return n*(Math.PI/180)}function Gu(n){return 180*(n/Math.PI)}function Iy(n){var t=n.lat,e=n.lon,i=6378137,s=.00669438,r=.9996,o,a,l,h,c,u,d,g=vl(t),f=vl(e),m,w;w=Math.floor((e+180)/6)+1,e===180&&(w=60),t>=56&&t<64&&e>=3&&e<12&&(w=32),t>=72&&t<84&&(e>=0&&e<9?w=31:e>=9&&e<21?w=33:e>=21&&e<33?w=35:e>=33&&e<42&&(w=37)),o=(w-1)*6-180+3,m=vl(o),a=s/(1-s),l=i/Math.sqrt(1-s*Math.sin(g)*Math.sin(g)),h=Math.tan(g)*Math.tan(g),c=a*Math.cos(g)*Math.cos(g),u=Math.cos(g)*(f-m),d=i*((1-s/4-3*s*s/64-5*s*s*s/256)*g-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*g)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*g)-35*s*s*s/3072*Math.sin(6*g));var _=r*l*(u+(1-h+c)*u*u*u/6+(5-18*h+h*h+72*c-58*a)*u*u*u*u*u/120)+5e5,p=r*(d+l*Math.tan(g)*(u*u/2+(5-h+9*c+4*c*c)*u*u*u*u/24+(61-58*h+h*h+600*c-330*a)*u*u*u*u*u*u/720));return t<0&&(p+=1e7),{northing:Math.round(p),easting:Math.round(_),zoneNumber:w,zoneLetter:by(t)}}function oc(n){var t=n.northing,e=n.easting,i=n.zoneLetter,s=n.zoneNumber;if(s<0||s>60)return null;var r=.9996,o=6378137,a=.00669438,l,h=(1-Math.sqrt(1-a))/(1+Math.sqrt(1-a)),c,u,d,g,f,m,w,_,p,x=e-5e5,T=t;i<"N"&&(T-=1e7),w=(s-1)*6-180+3,l=a/(1-a),m=T/r,_=m/(o*(1-a/4-3*a*a/64-5*a*a*a/256)),p=_+(3*h/2-27*h*h*h/32)*Math.sin(2*_)+(21*h*h/16-55*h*h*h*h/32)*Math.sin(4*_)+151*h*h*h/96*Math.sin(6*_),c=o/Math.sqrt(1-a*Math.sin(p)*Math.sin(p)),u=Math.tan(p)*Math.tan(p),d=l*Math.cos(p)*Math.cos(p),g=o*(1-a)/Math.pow(1-a*Math.sin(p)*Math.sin(p),1.5),f=x/(c*r);var M=p-c*Math.tan(p)/g*(f*f/2-(5+3*u+10*d-4*d*d-9*l)*f*f*f*f/24+(61+90*u+298*d+45*u*u-252*l-3*d*d)*f*f*f*f*f*f/720);M=Gu(M);var C=(f-(1+2*u+d)*f*f*f/6+(5-2*d+28*u-3*d*d+8*l+24*u*u)*f*f*f*f*f/120)/Math.cos(p);C=w+Gu(C);var I;if(n.accuracy){var v=oc({northing:n.northing+n.accuracy,easting:n.easting+n.accuracy,zoneLetter:n.zoneLetter,zoneNumber:n.zoneNumber});I={top:v.lat,right:v.lon,bottom:M,left:C}}else I={lat:M,lon:C};return I}function by(n){var t="Z";return 84>=n&&n>=72?t="X":72>n&&n>=64?t="W":64>n&&n>=56?t="V":56>n&&n>=48?t="U":48>n&&n>=40?t="T":40>n&&n>=32?t="S":32>n&&n>=24?t="R":24>n&&n>=16?t="Q":16>n&&n>=8?t="P":8>n&&n>=0?t="N":0>n&&n>=-8?t="M":-8>n&&n>=-16?t="L":-16>n&&n>=-24?t="K":-24>n&&n>=-32?t="J":-32>n&&n>=-40?t="H":-40>n&&n>=-48?t="G":-48>n&&n>=-56?t="F":-56>n&&n>=-64?t="E":-64>n&&n>=-72?t="D":-72>n&&n>=-80&&(t="C"),t}function Ly(n,t){var e="00000"+n.easting,i="00000"+n.northing;return n.zoneNumber+n.zoneLetter+Sy(n.easting,n.northing,n.zoneNumber)+e.substr(e.length-5,t)+i.substr(i.length-5,t)}function Sy(n,t,e){var i=kg(e),s=Math.floor(n/1e5),r=Math.floor(t/1e5)%20;return Ny(s,r,i)}function kg(n){var t=n%ku;return t===0&&(t=ku),t}function Ny(n,t,e){var i=e-1,s=Pg.charCodeAt(i),r=Kg.charCodeAt(i),o=s+n-1,a=r+t,l=!1;o>Kr&&(o=o-Kr+Os-1,l=!0),(o===Me||s<Me&&o>Me||(o>Me||s<Me)&&l)&&o++,(o===Ue||s<Ue&&o>Ue||(o>Ue||s<Ue)&&l)&&(o++,o===Me&&o++),o>Kr&&(o=o-Kr+Os-1),a>Pr?(a=a-Pr+Os-1,l=!0):l=!1,(a===Me||r<Me&&a>Me||(a>Me||r<Me)&&l)&&a++,(a===Ue||r<Ue&&a>Ue||(a>Ue||r<Ue)&&l)&&(a++,a===Me&&a++),a>Pr&&(a=a-Pr+Os-1);var h=String.fromCharCode(o)+String.fromCharCode(a);return h}function Gg(n){if(n&&n.length===0)throw"MGRSPoint coverting from nothing";for(var t=n.length,e=null,i="",s,r=0;!/[A-Z]/.test(s=n.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+n;i+=s,r++}var o=parseInt(i,10);if(r===0||r+3>t)throw"MGRSPoint bad conversion from: "+n;var a=n.charAt(r++);if(a<="A"||a==="B"||a==="Y"||a>="Z"||a==="I"||a==="O")throw"MGRSPoint zone letter "+a+" not handled: "+n;e=n.substring(r,r+=2);for(var l=kg(o),h=Ay(e.charAt(0),l),c=Oy(e.charAt(1),l);c<Py(a);)c+=2e6;var u=t-r;if(u%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+n;var d=u/2,g=0,f=0,m,w,_,p,x;return d>0&&(m=1e5/Math.pow(10,d),w=n.substring(r,r+d),g=parseFloat(w)*m,_=n.substring(r+d),f=parseFloat(_)*m),p=g+h,x=f+c,{easting:p,northing:x,zoneLetter:a,zoneNumber:o,accuracy:m}}function Ay(n,t){for(var e=Pg.charCodeAt(t-1),i=1e5,s=!1;e!==n.charCodeAt(0);){if(e++,e===Me&&e++,e===Ue&&e++,e>Kr){if(s)throw"Bad character: "+n;e=Os,s=!0}i+=1e5}return i}function Oy(n,t){if(n>"V")throw"MGRSPoint given invalid Northing "+n;for(var e=Kg.charCodeAt(t-1),i=0,s=!1;e!==n.charCodeAt(0);){if(e++,e===Me&&e++,e===Ue&&e++,e>Pr){if(s)throw"Bad character: "+n;e=Os,s=!0}i+=1e5}return i}function Py(n){var t;switch(n){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+n}function er(n,t,e){if(!(this instanceof er))return new er(n,t,e);if(Array.isArray(n))this.x=n[0],this.y=n[1],this.z=n[2]||0;else if(typeof n=="object")this.x=n.x,this.y=n.y,this.z=n.z||0;else if(typeof n=="string"&&typeof t>"u"){var i=n.split(",");this.x=parseFloat(i[0],10),this.y=parseFloat(i[1],10),this.z=parseFloat(i[2],10)||0}else this.x=n,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}er.fromMGRS=function(n){return new er(Fg(n))};er.prototype.toMGRS=function(n){return Dg([this.x,this.y],n)};var Ky=1,Dy=.25,Wu=.046875,zu=.01953125,Bu=.01068115234375,Fy=.75,ky=.46875,Gy=.013020833333333334,Wy=.007120768229166667,zy=.3645833333333333,By=.005696614583333333,Hy=.3076171875;function Wg(n){var t=[];t[0]=Ky-n*(Dy+n*(Wu+n*(zu+n*Bu))),t[1]=n*(Fy-n*(Wu+n*(zu+n*Bu)));var e=n*n;return t[2]=e*(ky-n*(Gy+n*Wy)),e*=n,t[3]=e*(zy-n*By),t[4]=e*n*Hy,t}function Ya(n,t,e,i){return e*=t,t*=t,i[0]*n-e*(i[1]+t*(i[2]+t*(i[3]+t*i[4])))}var Yy=20;function zg(n,t,e){for(var i=1/(1-t),s=n,r=Yy;r;--r){var o=Math.sin(s),a=1-t*o*o;if(a=(Ya(s,o,Math.cos(s),e)-n)*(a*Math.sqrt(a))*i,s-=a,Math.abs(a)<O)return s}return s}function Xy(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=Wg(this.es),this.ml0=Ya(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function Uy(n){var t=n.x,e=n.y,i=F(t-this.long0),s,r,o,a=Math.sin(e),l=Math.cos(e);if(this.es){var c=l*i,u=Math.pow(c,2),d=this.ep2*Math.pow(l,2),g=Math.pow(d,2),f=Math.abs(l)>O?Math.tan(e):0,m=Math.pow(f,2),w=Math.pow(m,2);s=1-this.es*Math.pow(a,2),c=c/Math.sqrt(s);var _=Ya(e,a,l,this.en);r=this.a*(this.k0*c*(1+u/6*(1-m+d+u/20*(5-18*m+w+14*d-58*m*d+u/42*(61+179*w-w*m-479*m)))))+this.x0,o=this.a*(this.k0*(_-this.ml0+a*i*c/2*(1+u/12*(5-m+9*d+4*g+u/30*(61+w-58*m+270*d-330*m*d+u/56*(1385+543*w-w*m-3111*m))))))+this.y0}else{var h=l*Math.sin(i);if(Math.abs(Math.abs(h)-1)<O)return 93;if(r=.5*this.a*this.k0*Math.log((1+h)/(1-h))+this.x0,o=l*Math.cos(i)/Math.sqrt(1-Math.pow(h,2)),h=Math.abs(o),h>=1){if(h-1>O)return 93;o=0}else o=Math.acos(o);e<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return n.x=r,n.y=o,n}function Vy(n){var t,e,i,s,r=(n.x-this.x0)*(1/this.a),o=(n.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+o/this.k0,e=zg(t,this.es,this.en),Math.abs(e)<S){var u=Math.sin(e),d=Math.cos(e),g=Math.abs(d)>O?Math.tan(e):0,f=this.ep2*Math.pow(d,2),m=Math.pow(f,2),w=Math.pow(g,2),_=Math.pow(w,2);t=1-this.es*Math.pow(u,2);var p=r*Math.sqrt(t)/this.k0,x=Math.pow(p,2);t=t*g,i=e-t*x/(1-this.es)*.5*(1-x/12*(5+3*w-9*f*w+f-4*m-x/30*(61+90*w-252*f*w+45*_+46*f-x/56*(1385+3633*w+4095*_+1574*_*w)))),s=F(this.long0+p*(1-x/6*(1+2*w+f-x/20*(5+28*w+24*_+8*f*w+6*f-x/42*(61+662*w+1320*_+720*_*w))))/d)}else i=S*xo(o),s=0;else{var a=Math.exp(r/this.k0),l=.5*(a-1/a),h=this.lat0+o/this.k0,c=Math.cos(h);t=Math.sqrt((1-Math.pow(c,2))/(1+Math.pow(l,2))),i=Math.asin(t),o<0&&(i=-i),l===0&&c===0?s=0:s=F(Math.atan2(l,c)+this.long0)}return n.x=s,n.y=i,n}var jy=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const ea={init:Xy,forward:Uy,inverse:Vy,names:jy};function Bg(n){var t=Math.exp(n);return t=(t-1/t)/2,t}function $e(n,t){n=Math.abs(n),t=Math.abs(t);var e=Math.max(n,t),i=Math.min(n,t)/(e||1);return e*Math.sqrt(1+Math.pow(i,2))}function qy(n){var t=1+n,e=t-1;return e===0?n:n*Math.log(t)/e}function Zy(n){var t=Math.abs(n);return t=qy(t*(1+t/($e(1,t)+1))),n<0?-t:t}function ac(n,t){for(var e=2*Math.cos(2*t),i=n.length-1,s=n[i],r=0,o;--i>=0;)o=-r+e*s+n[i],r=s,s=o;return t+o*Math.sin(2*t)}function $y(n,t){for(var e=2*Math.cos(t),i=n.length-1,s=n[i],r=0,o;--i>=0;)o=-r+e*s+n[i],r=s,s=o;return Math.sin(t)*o}function Jy(n){var t=Math.exp(n);return t=(t+1/t)/2,t}function Hg(n,t,e){for(var i=Math.sin(t),s=Math.cos(t),r=Bg(e),o=Jy(e),a=2*s*o,l=-2*i*r,h=n.length-1,c=n[h],u=0,d=0,g=0,f,m;--h>=0;)f=d,m=u,d=c,u=g,c=-f+a*d-l*u+n[h],g=-m+l*d+a*u;return a=i*o,l=s*r,[a*c-l*g,a*g+l*c]}function Qy(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(ea.init.apply(this),this.forward=ea.forward,this.inverse=ea.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var n=this.es/(1+Math.sqrt(1-this.es)),t=n/(2-n),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var i=ac(this.cbg,this.lat0);this.Zb=-this.Qn*(i+$y(this.gtu,2*i))}function t_(n){var t=F(n.x-this.long0),e=n.y;e=ac(this.cbg,e);var i=Math.sin(e),s=Math.cos(e),r=Math.sin(t),o=Math.cos(t);e=Math.atan2(i,o*s),t=Math.atan2(r*s,$e(i,s*o)),t=Zy(Math.tan(t));var a=Hg(this.gtu,2*e,2*t);e=e+a[0],t=t+a[1];var l,h;return Math.abs(t)<=2.623395162778?(l=this.a*(this.Qn*t)+this.x0,h=this.a*(this.Qn*e+this.Zb)+this.y0):(l=1/0,h=1/0),n.x=l,n.y=h,n}function e_(n){var t=(n.x-this.x0)*(1/this.a),e=(n.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var i,s;if(Math.abs(t)<=2.623395162778){var r=Hg(this.utg,2*e,2*t);e=e+r[0],t=t+r[1],t=Math.atan(Bg(t));var o=Math.sin(e),a=Math.cos(e),l=Math.sin(t),h=Math.cos(t);e=Math.atan2(o*h,$e(l,h*a)),t=Math.atan2(l,h*a),i=F(t+this.long0),s=ac(this.cgb,e)}else i=1/0,s=1/0;return n.x=i,n.y=s,n}var i_=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const ia={init:Qy,forward:t_,inverse:e_,names:i_};function n_(n,t){if(n===void 0){if(n=Math.floor((F(t)+Math.PI)*30/Math.PI)+1,n<0)return 0;if(n>60)return 60}return n}var s_="etmerc";function r_(){var n=n_(this.zone,this.long0);if(n===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(n)-183)*Jt,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,ia.init.apply(this),this.forward=ia.forward,this.inverse=ia.inverse}var o_=["Universal Transverse Mercator System","utm"];const a_={init:r_,names:o_,dependsOn:s_};function lc(n,t){return Math.pow((1-n)/(1+n),t)}var l_=20;function h_(){var n=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*n*n),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(n/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+Ct)/(Math.pow(Math.tan(.5*this.lat0+Ct),this.C)*lc(this.e*n,this.ratexp))}function c_(n){var t=n.x,e=n.y;return n.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+Ct),this.C)*lc(this.e*Math.sin(e),this.ratexp))-S,n.x=this.C*t,n}function u_(n){for(var t=1e-14,e=n.x/this.C,i=n.y,s=Math.pow(Math.tan(.5*i+Ct)/this.K,1/this.C),r=l_;r>0&&(i=2*Math.atan(s*lc(this.e*Math.sin(n.y),-.5*this.e))-S,!(Math.abs(i-n.y)<t));--r)n.y=i;return r?(n.x=e,n.y=i,n):null}const hc={init:h_,forward:c_,inverse:u_};function d_(){hc.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function g_(n){var t,e,i,s;return n.x=F(n.x-this.long0),hc.forward.apply(this,[n]),t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*i),n.x=s*e*Math.sin(n.x),n.y=s*(this.cosc0*t-this.sinc0*e*i),n.x=this.a*n.x+this.x0,n.y=this.a*n.y+this.y0,n}function f_(n){var t,e,i,s,r;if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,r=$e(n.x,n.y)){var o=2*Math.atan2(r,this.R2);t=Math.sin(o),e=Math.cos(o),s=Math.asin(e*this.sinc0+n.y*t*this.cosc0/r),i=Math.atan2(n.x*t,r*this.cosc0*e-n.y*this.sinc0*t)}else s=this.phic0,i=0;return n.x=i,n.y=s,hc.inverse.apply(this,[n]),n.x=F(n.x+this.long0),n}var m_=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const w_={init:d_,forward:g_,inverse:f_,names:m_};function y_(n,t,e){return t*=e,Math.tan(.5*(S+n))*Math.pow((1-t)/(1+t),.5*e)}function __(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=O&&(this.k0=.5*(1+xo(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=O&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=O&&Math.abs(Math.cos(this.lat_ts))>O&&(this.k0=.5*this.cons*Fi(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/di(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Fi(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-S,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function p_(n){var t=n.x,e=n.y,i=Math.sin(e),s=Math.cos(e),r,o,a,l,h,c,u=F(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=O&&Math.abs(e+this.lat0)<=O?(n.x=NaN,n.y=NaN,n):this.sphere?(r=2*this.k0/(1+this.sinlat0*i+this.coslat0*s*Math.cos(u)),n.x=this.a*r*s*Math.sin(u)+this.x0,n.y=this.a*r*(this.coslat0*i-this.sinlat0*s*Math.cos(u))+this.y0,n):(o=2*Math.atan(this.ssfn_(e,i,this.e))-S,l=Math.cos(o),a=Math.sin(o),Math.abs(this.coslat0)<=O?(h=di(this.e,e*this.con,this.con*i),c=2*this.a*this.k0*h/this.cons,n.x=this.x0+c*Math.sin(t-this.long0),n.y=this.y0-this.con*c*Math.cos(t-this.long0),n):(Math.abs(this.sinlat0)<O?(r=2*this.a*this.k0/(1+l*Math.cos(u)),n.y=r*a):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*l*Math.cos(u))),n.y=r*(this.cosX0*a-this.sinX0*l*Math.cos(u))+this.y0),n.x=r*l*Math.sin(u)+this.x0,n))}function x_(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,o=Math.sqrt(n.x*n.x+n.y*n.y);if(this.sphere){var a=2*Math.atan(o/(2*this.a*this.k0));return t=this.long0,e=this.lat0,o<=O?(n.x=t,n.y=e,n):(e=Math.asin(Math.cos(a)*this.sinlat0+n.y*Math.sin(a)*this.coslat0/o),Math.abs(this.coslat0)<O?this.lat0>0?t=F(this.long0+Math.atan2(n.x,-1*n.y)):t=F(this.long0+Math.atan2(n.x,n.y)):t=F(this.long0+Math.atan2(n.x*Math.sin(a),o*this.coslat0*Math.cos(a)-n.y*this.sinlat0*Math.sin(a))),n.x=t,n.y=e,n)}else if(Math.abs(this.coslat0)<=O){if(o<=O)return e=this.lat0,t=this.long0,n.x=t,n.y=e,n;n.x*=this.con,n.y*=this.con,i=o*this.cons/(2*this.a*this.k0),e=this.con*to(this.e,i),t=this.con*F(this.con*this.long0+Math.atan2(n.x,-1*n.y))}else s=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,o<=O?r=this.X0:(r=Math.asin(Math.cos(s)*this.sinX0+n.y*Math.sin(s)*this.cosX0/o),t=F(this.long0+Math.atan2(n.x*Math.sin(s),o*this.cosX0*Math.cos(s)-n.y*this.sinX0*Math.sin(s)))),e=-1*to(this.e,Math.tan(.5*(S+r)));return n.x=t,n.y=e,n}var T_=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)","Polar_Stereographic"];const M_={init:__,forward:p_,inverse:x_,names:T_,ssfn_:y_};function C_(){var n=this.lat0;this.lambda0=this.long0;var t=Math.sin(n),e=this.a,i=this.rf,s=1/i,r=2*s-Math.pow(s,2),o=this.e=Math.sqrt(r);this.R=this.k0*e*Math.sqrt(1-r)/(1-r*Math.pow(t,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(n),4)),this.b0=Math.asin(t/this.alpha);var a=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+n/2)),h=Math.log((1+o*t)/(1-o*t));this.K=a-this.alpha*l+this.alpha*o/2*h}function R_(n){var t=Math.log(Math.tan(Math.PI/4-n.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(n.y))/(1-this.e*Math.sin(n.y))),i=-this.alpha*(t+e)+this.K,s=2*(Math.atan(Math.exp(i))-Math.PI/4),r=this.alpha*(n.x-this.lambda0),o=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(r))),a=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(r));return n.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,n.x=this.R*o+this.x0,n}function E_(n){for(var t=n.x-this.x0,e=n.y-this.y0,i=t/this.R,s=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(i)),o=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(s))),a=this.lambda0+o/this.alpha,l=0,h=r,c=-1e3,u=0;Math.abs(h-c)>1e-7;){if(++u>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(h))/2)),c=h,h=2*Math.atan(Math.exp(l))-Math.PI/2}return n.x=a,n.y=h,n}var v_=["somerc"];const I_={init:C_,forward:R_,inverse:E_,names:v_};var vs=1e-7;function b_(n){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof n.PROJECTION=="object"?Object.keys(n.PROJECTION)[0]:n.PROJECTION;return"no_uoff"in n||"no_off"in n||t.indexOf(e)!==-1}function L_(){var n,t,e,i,s,r,o,a,l,h,c=0,u,d=0,g=0,f=0,m=0,w=0,_=0;this.no_off=b_(this),this.no_rot="no_rot"in this;var p=!1;"alpha"in this&&(p=!0);var x=!1;if("rectified_grid_angle"in this&&(x=!0),p&&(_=this.alpha),x&&(c=this.rectified_grid_angle*Jt),p||x)d=this.longc;else if(g=this.long1,m=this.lat1,f=this.long2,w=this.lat2,Math.abs(m-w)<=vs||(n=Math.abs(m))<=vs||Math.abs(n-S)<=vs||Math.abs(Math.abs(this.lat0)-S)<=vs||Math.abs(Math.abs(w)-S)<=vs)throw new Error;var T=1-this.es;t=Math.sqrt(T),Math.abs(this.lat0)>O?(a=Math.sin(this.lat0),e=Math.cos(this.lat0),n=1-this.es*a*a,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/T),this.A=this.B*this.k0*t/n,i=this.B*t/(e*Math.sqrt(n)),s=i*i-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=i,this.E*=Math.pow(di(this.e,this.lat0,a),this.B)):(this.B=1/t,this.A=this.k0,this.E=i=s=1),p||x?(p?(u=Math.asin(Math.sin(_)/i),x||(c=_)):(u=c,_=Math.asin(i*Math.sin(u))),this.lam0=d-Math.asin(.5*(s-1/s)*Math.tan(u))/this.B):(r=Math.pow(di(this.e,m,Math.sin(m)),this.B),o=Math.pow(di(this.e,w,Math.sin(w)),this.B),s=this.E/r,l=(o-r)/(o+r),h=this.E*this.E,h=(h-o*r)/(h+o*r),n=g-f,n<-Math.pi?f-=Jr:n>Math.pi&&(f+=Jr),this.lam0=F(.5*(g+f)-Math.atan(h*Math.tan(.5*this.B*(g-f))/l)/this.B),u=Math.atan(2*Math.sin(this.B*F(g-this.lam0))/(s-1/s)),c=_=Math.asin(i*Math.sin(u))),this.singam=Math.sin(u),this.cosgam=Math.cos(u),this.sinrot=Math.sin(c),this.cosrot=Math.cos(c),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(_))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*u,this.v_pole_n=this.ArB*Math.log(Math.tan(Ct-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(Ct+s))}function S_(n){var t={},e,i,s,r,o,a,l,h;if(n.x=n.x-this.lam0,Math.abs(Math.abs(n.y)-S)>O){if(o=this.E/Math.pow(di(this.e,n.y,Math.sin(n.y)),this.B),a=1/o,e=.5*(o-a),i=.5*(o+a),r=Math.sin(this.B*n.x),s=(e*this.singam-r*this.cosgam)/i,Math.abs(Math.abs(s)-1)<O)throw new Error;h=.5*this.ArB*Math.log((1-s)/(1+s)),a=Math.cos(this.B*n.x),Math.abs(a)<vs?l=this.A*n.x:l=this.ArB*Math.atan2(e*this.cosgam+r*this.singam,a)}else h=n.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*n.y;return this.no_rot?(t.x=l,t.y=h):(l-=this.u_0,t.x=h*this.cosrot+l*this.sinrot,t.y=l*this.cosrot-h*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function N_(n){var t,e,i,s,r,o,a,l={};if(n.x=(n.x-this.x0)*(1/this.a),n.y=(n.y-this.y0)*(1/this.a),this.no_rot?(e=n.y,t=n.x):(e=n.x*this.cosrot-n.y*this.sinrot,t=n.y*this.cosrot+n.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*e),s=.5*(i-1/i),r=.5*(i+1/i),o=Math.sin(this.BrA*t),a=(o*this.cosgam+s*this.singam)/r,Math.abs(Math.abs(a)-1)<O)l.x=0,l.y=a<0?-S:S;else{if(l.y=this.E/Math.sqrt((1+a)/(1-a)),l.y=to(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(s*this.cosgam-o*this.singam,Math.cos(this.BrA*t))}return l.x+=this.lam0,l}var A_=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const O_={init:L_,forward:S_,inverse:N_,names:A_};function P_(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<O)){var n=this.b/this.a;this.e=Math.sqrt(1-n*n);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),i=Fi(this.e,t,e),s=di(this.e,this.lat1,t),r=Math.sin(this.lat2),o=Math.cos(this.lat2),a=Fi(this.e,r,o),l=di(this.e,this.lat2,r),h=di(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>O?this.ns=Math.log(i/a)/Math.log(s/l):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=i/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(h,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function K_(n){var t=n.x,e=n.y;Math.abs(2*Math.abs(e)-Math.PI)<=O&&(e=xo(e)*(S-2*O));var i=Math.abs(Math.abs(e)-S),s,r;if(i>O)s=di(this.e,e,Math.sin(e)),r=this.a*this.f0*Math.pow(s,this.ns);else{if(i=e*this.ns,i<=0)return null;r=0}var o=this.ns*F(t-this.long0);return n.x=this.k0*(r*Math.sin(o))+this.x0,n.y=this.k0*(this.rh-r*Math.cos(o))+this.y0,n}function D_(n){var t,e,i,s,r,o=(n.x-this.x0)/this.k0,a=this.rh-(n.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+a*a),e=1):(t=-Math.sqrt(o*o+a*a),e=-1);var l=0;if(t!==0&&(l=Math.atan2(e*o,e*a)),t!==0||this.ns>0){if(e=1/this.ns,i=Math.pow(t/(this.a*this.f0),e),s=to(this.e,i),s===-9999)return null}else s=-S;return r=F(l/this.ns+this.long0),n.x=r,n.y=s,n}var F_=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const k_={init:P_,forward:K_,inverse:D_,names:F_};function G_(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function W_(n){var t,e,i,s,r,o,a,l=n.x,h=n.y,c=F(l-this.long0);return t=Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(h/2+this.s45),this.alfa)/t)-this.s45),i=-c*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(i)),r=Math.asin(Math.cos(e)*Math.sin(i)/Math.cos(s)),o=this.n*r,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),n.y=a*Math.cos(o)/1,n.x=a*Math.sin(o)/1,this.czech||(n.y*=-1,n.x*=-1),n}function z_(n){var t,e,i,s,r,o,a,l,h=n.x;n.x=n.y,n.y=h,this.czech||(n.y*=-1,n.x*=-1),o=Math.sqrt(n.x*n.x+n.y*n.y),r=Math.atan2(n.y,n.x),s=r/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(s)),e=Math.asin(Math.cos(i)*Math.sin(s)/Math.cos(t)),n.x=this.long0-e/this.alfa,a=t,l=0;var c=0;do n.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),Math.abs(a-n.y)<1e-10&&(l=1),a=n.y,c+=1;while(l===0&&c<15);return c>=15?null:n}var B_=["Krovak","krovak"];const H_={init:G_,forward:W_,inverse:z_,names:B_};function ye(n,t,e,i,s){return n*s-t*Math.sin(2*s)+e*Math.sin(4*s)-i*Math.sin(6*s)}function To(n){return 1-.25*n*(1+n/16*(3+1.25*n))}function Mo(n){return .375*n*(1+.25*n*(1+.46875*n))}function Co(n){return .05859375*n*n*(1+.75*n)}function Ro(n){return n*n*n*(35/3072)}function ir(n,t,e){var i=t*e;return n/Math.sqrt(1-i*i)}function fr(n){return Math.abs(n)<S?n:n-xo(n)*Math.PI}function ya(n,t,e,i,s){var r,o;r=n/t;for(var a=0;a<15;a++)if(o=(n-(t*r-e*Math.sin(2*r)+i*Math.sin(4*r)-s*Math.sin(6*r)))/(t-2*e*Math.cos(2*r)+4*i*Math.cos(4*r)-6*s*Math.cos(6*r)),r+=o,Math.abs(o)<=1e-10)return r;return NaN}function Y_(){this.sphere||(this.e0=To(this.es),this.e1=Mo(this.es),this.e2=Co(this.es),this.e3=Ro(this.es),this.ml0=this.a*ye(this.e0,this.e1,this.e2,this.e3,this.lat0))}function X_(n){var t,e,i=n.x,s=n.y;if(i=F(i-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(s)*Math.sin(i)),e=this.a*(Math.atan2(Math.tan(s),Math.cos(i))-this.lat0);else{var r=Math.sin(s),o=Math.cos(s),a=ir(this.a,this.e,r),l=Math.tan(s)*Math.tan(s),h=i*Math.cos(s),c=h*h,u=this.es*o*o/(1-this.es),d=this.a*ye(this.e0,this.e1,this.e2,this.e3,s);t=a*h*(1-c*l*(1/6-(8-l+8*u)*c/120)),e=d-this.ml0+a*r/o*c*(.5+(5-l+6*u)*c/24)}return n.x=t+this.x0,n.y=e+this.y0,n}function U_(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s;if(this.sphere){var r=e+this.lat0;i=Math.asin(Math.sin(r)*Math.cos(t)),s=Math.atan2(Math.tan(t),Math.cos(r))}else{var o=this.ml0/this.a+e,a=ya(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(a)-S)<=O)return n.x=this.long0,n.y=S,e<0&&(n.y*=-1),n;var l=ir(this.a,this.e,Math.sin(a)),h=l*l*l/this.a/this.a*(1-this.es),c=Math.pow(Math.tan(a),2),u=t*this.a/l,d=u*u;i=a-l*Math.tan(a)/h*u*u*(.5-(1+3*c)*u*u/24),s=u*(1-d*(c/3+(1+3*c)*c*d/15))/Math.cos(a)}return n.x=F(s+this.long0),n.y=fr(i),n}var V_=["Cassini","Cassini_Soldner","cass"];const j_={init:Y_,forward:X_,inverse:U_,names:V_};function In(n,t){var e;return n>1e-7?(e=n*t,(1-n*n)*(t/(1-e*e)-.5/n*Math.log((1-e)/(1+e)))):2*t}var q_=1,Z_=2,$_=3,J_=4;function Q_(){var n=Math.abs(this.lat0);if(Math.abs(n-S)<O?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(n)<O?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=In(this.e,1),this.mmf=.5/(1-this.es),this.apa=lp(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=In(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function tp(n){var t,e,i,s,r,o,a,l,h,c,u=n.x,d=n.y;if(u=F(u-this.long0),this.sphere){if(r=Math.sin(d),c=Math.cos(d),i=Math.cos(u),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+c*i:1+this.sinph0*r+this.cosph0*c*i,e<=O)return null;e=Math.sqrt(2/e),t=e*c*Math.sin(u),e*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*c*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(d+this.lat0)<O)return null;e=Ct-d*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(u),e*=i}}else{switch(a=0,l=0,h=0,i=Math.cos(u),s=Math.sin(u),r=Math.sin(d),o=In(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(a=o/this.qp,l=Math.sqrt(1-a*a)),this.mode){case this.OBLIQ:h=1+this.sinb1*a+this.cosb1*l*i;break;case this.EQUIT:h=1+l*i;break;case this.N_POLE:h=S+d,o=this.qp-o;break;case this.S_POLE:h=d-S,o=this.qp+o;break}if(Math.abs(h)<O)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:h=Math.sqrt(2/h),this.mode===this.OBLIQ?e=this.ymf*h*(this.cosb1*a-this.sinb1*l*i):e=(h=Math.sqrt(2/(1+l*i)))*a*this.ymf,t=this.xmf*h*l*s;break;case this.N_POLE:case this.S_POLE:o>=0?(t=(h=Math.sqrt(o))*s,e=i*(this.mode===this.S_POLE?h:-h)):t=e=0;break}}return n.x=this.a*t+this.x0,n.y=this.a*e+this.y0,n}function ep(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s,r,o,a,l,h;if(this.sphere){var c=0,u,d=0;if(u=Math.sqrt(t*t+e*e),s=u*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(d=Math.sin(s),c=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(u)<=O?0:Math.asin(e*d/u),t*=d,e=c*u;break;case this.OBLIQ:s=Math.abs(u)<=O?this.lat0:Math.asin(c*this.sinph0+e*d*this.cosph0/u),t*=d*this.cosph0,e=(c-Math.sin(s)*this.sinph0)*u;break;case this.N_POLE:e=-e,s=S-s;break;case this.S_POLE:s-=S;break}i=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(h=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,l=Math.sqrt(t*t+e*e),l<O)return n.x=this.long0,n.y=this.lat0,n;o=2*Math.asin(.5*l/this.rq),r=Math.cos(o),t*=o=Math.sin(o),this.mode===this.OBLIQ?(h=r*this.sinb1+e*o*this.cosb1/l,a=this.qp*h,e=l*this.cosb1*r-e*this.sinb1*o):(h=e*o/l,a=this.qp*h,e=l*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),a=t*t+e*e,!a)return n.x=this.long0,n.y=this.lat0,n;h=1-a/this.qp,this.mode===this.S_POLE&&(h=-h)}i=Math.atan2(t,e),s=hp(Math.asin(h),this.apa)}return n.x=F(this.long0+i),n.y=s,n}var ip=.3333333333333333,np=.17222222222222222,sp=.10257936507936508,rp=.06388888888888888,op=.0664021164021164,ap=.016415012942191543;function lp(n){var t,e=[];return e[0]=n*ip,t=n*n,e[0]+=t*np,e[1]=t*rp,t*=n,e[0]+=t*sp,e[1]+=t*op,e[2]=t*ap,e}function hp(n,t){var e=n+n;return n+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var cp=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const up={init:Q_,forward:tp,inverse:ep,names:cp,S_POLE:q_,N_POLE:Z_,EQUIT:$_,OBLIQ:J_};function Nn(n){return Math.abs(n)>1&&(n=n>1?1:-1),Math.asin(n)}function dp(){Math.abs(this.lat1+this.lat2)<O||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Fi(this.e3,this.sin_po,this.cos_po),this.qs1=In(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Fi(this.e3,this.sin_po,this.cos_po),this.qs2=In(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=In(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>O?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function gp(n){var t=n.x,e=n.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var i=In(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,r=this.ns0*F(t-this.long0),o=s*Math.sin(r)+this.x0,a=this.rh-s*Math.cos(r)+this.y0;return n.x=o,n.y=a,n}function fp(n){var t,e,i,s,r,o;return n.x-=this.x0,n.y=this.rh-n.y+this.y0,this.ns0>=0?(t=Math.sqrt(n.x*n.x+n.y*n.y),i=1):(t=-Math.sqrt(n.x*n.x+n.y*n.y),i=-1),s=0,t!==0&&(s=Math.atan2(i*n.x,i*n.y)),i=t*this.ns0/this.a,this.sphere?o=Math.asin((this.c-i*i)/(2*this.ns0)):(e=(this.c-i*i)/this.ns0,o=this.phi1z(this.e3,e)),r=F(s/this.ns0+this.long0),n.x=r,n.y=o,n}function mp(n,t){var e,i,s,r,o,a=Nn(.5*t);if(n<O)return a;for(var l=n*n,h=1;h<=25;h++)if(e=Math.sin(a),i=Math.cos(a),s=n*e,r=1-s*s,o=.5*r*r/i*(t/(1-l)-e/r+.5/n*Math.log((1-s)/(1+s))),a=a+o,Math.abs(o)<=1e-7)return a;return null}var wp=["Albers_Conic_Equal_Area","Albers","aea"];const yp={init:dp,forward:gp,inverse:fp,names:wp,phi1z:mp};function _p(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function pp(n){var t,e,i,s,r,o,a,l,h=n.x,c=n.y;return i=F(h-this.long0),t=Math.sin(c),e=Math.cos(c),s=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*s,r=1,o>0||Math.abs(o)<=O?(a=this.x0+this.a*r*e*Math.sin(i)/o,l=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)/o):(a=this.x0+this.infinity_dist*e*Math.sin(i),l=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*s)),n.x=a,n.y=l,n}function xp(n){var t,e,i,s,r,o;return n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,(t=Math.sqrt(n.x*n.x+n.y*n.y))?(s=Math.atan2(t,this.rc),e=Math.sin(s),i=Math.cos(s),o=Nn(i*this.sin_p14+n.y*e*this.cos_p14/t),r=Math.atan2(n.x*e,t*this.cos_p14*i-n.y*this.sin_p14*e),r=F(this.long0+r)):(o=this.phic0,r=0),n.x=r,n.y=o,n}var Tp=["gnom"];const Mp={init:_p,forward:pp,inverse:xp,names:Tp};function Cp(n,t){var e=1-(1-n*n)/(2*n)*Math.log((1-n)/(1+n));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*S:S;for(var i=Math.asin(.5*t),s,r,o,a,l=0;l<30;l++)if(r=Math.sin(i),o=Math.cos(i),a=n*r,s=Math.pow(1-a*a,2)/(2*o)*(t/(1-n*n)-r/(1-a*a)+.5/n*Math.log((1-a)/(1+a))),i+=s,Math.abs(s)<=1e-10)return i;return NaN}function Rp(){this.sphere||(this.k0=Fi(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function Ep(n){var t=n.x,e=n.y,i,s,r=F(t-this.long0);if(this.sphere)i=this.x0+this.a*r*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var o=In(this.e,Math.sin(e));i=this.x0+this.a*this.k0*r,s=this.y0+this.a*o*.5/this.k0}return n.x=i,n.y=s,n}function vp(n){n.x-=this.x0,n.y-=this.y0;var t,e;return this.sphere?(t=F(this.long0+n.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(n.y/this.a*Math.cos(this.lat_ts))):(e=Cp(this.e,2*n.y*this.k0/this.a),t=F(this.long0+n.x/(this.a*this.k0))),n.x=t,n.y=e,n}var Ip=["cea"];const bp={init:Rp,forward:Ep,inverse:vp,names:Ip};function Lp(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function Sp(n){var t=n.x,e=n.y,i=F(t-this.long0),s=fr(e-this.lat0);return n.x=this.x0+this.a*i*this.rc,n.y=this.y0+this.a*s,n}function Np(n){var t=n.x,e=n.y;return n.x=F(this.long0+(t-this.x0)/(this.a*this.rc)),n.y=fr(this.lat0+(e-this.y0)/this.a),n}var Ap=["Equirectangular","Equidistant_Cylindrical","eqc"];const Op={init:Lp,forward:Sp,inverse:Np,names:Ap};var Hu=20;function Pp(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=To(this.es),this.e1=Mo(this.es),this.e2=Co(this.es),this.e3=Ro(this.es),this.ml0=this.a*ye(this.e0,this.e1,this.e2,this.e3,this.lat0)}function Kp(n){var t=n.x,e=n.y,i,s,r,o=F(t-this.long0);if(r=o*Math.sin(e),this.sphere)Math.abs(e)<=O?(i=this.a*o,s=-1*this.a*this.lat0):(i=this.a*Math.sin(r)/Math.tan(e),s=this.a*(fr(e-this.lat0)+(1-Math.cos(r))/Math.tan(e)));else if(Math.abs(e)<=O)i=this.a*o,s=-1*this.ml0;else{var a=ir(this.a,this.e,Math.sin(e))/Math.tan(e);i=a*Math.sin(r),s=this.a*ye(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+a*(1-Math.cos(r))}return n.x=i+this.x0,n.y=s+this.y0,n}function Dp(n){var t,e,i,s,r,o,a,l,h;if(i=n.x-this.x0,s=n.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=O)t=F(i/this.a+this.long0),e=0;else{o=this.lat0+s/this.a,a=i*i/this.a/this.a+o*o,l=o;var c;for(r=Hu;r;--r)if(c=Math.tan(l),h=-1*(o*(l*c+1)-l-.5*(l*l+a)*c)/((l-o)/c-1),l+=h,Math.abs(h)<=O){e=l;break}t=F(this.long0+Math.asin(i*Math.tan(l)/this.a)/Math.sin(e))}else if(Math.abs(s+this.ml0)<=O)e=0,t=F(this.long0+i/this.a);else{o=(this.ml0+s)/this.a,a=i*i/this.a/this.a+o*o,l=o;var u,d,g,f,m;for(r=Hu;r;--r)if(m=this.e*Math.sin(l),u=Math.sqrt(1-m*m)*Math.tan(l),d=this.a*ye(this.e0,this.e1,this.e2,this.e3,l),g=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),f=d/this.a,h=(o*(u*f+1)-f-.5*u*(f*f+a))/(this.es*Math.sin(2*l)*(f*f+a-2*o*f)/(4*u)+(o-f)*(u*g-2/Math.sin(2*l))-g),l-=h,Math.abs(h)<=O){e=l;break}u=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=F(this.long0+Math.asin(i*u/this.a)/Math.sin(e))}return n.x=t,n.y=e,n}var Fp=["Polyconic","poly"];const kp={init:Pp,forward:Kp,inverse:Dp,names:Fp};function Gp(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function Wp(n){var t,e=n.x,i=n.y,s=i-this.lat0,r=e-this.long0,o=s/zr*1e-5,a=r,l=1,h=0;for(t=1;t<=10;t++)l=l*o,h=h+this.A[t]*l;var c=h,u=a,d=1,g=0,f,m,w=0,_=0;for(t=1;t<=6;t++)f=d*c-g*u,m=g*c+d*u,d=f,g=m,w=w+this.B_re[t]*d-this.B_im[t]*g,_=_+this.B_im[t]*d+this.B_re[t]*g;return n.x=_*this.a+this.x0,n.y=w*this.a+this.y0,n}function zp(n){var t,e=n.x,i=n.y,s=e-this.x0,r=i-this.y0,o=r/this.a,a=s/this.a,l=1,h=0,c,u,d=0,g=0;for(t=1;t<=6;t++)c=l*o-h*a,u=h*o+l*a,l=c,h=u,d=d+this.C_re[t]*l-this.C_im[t]*h,g=g+this.C_im[t]*l+this.C_re[t]*h;for(var f=0;f<this.iterations;f++){var m=d,w=g,_,p,x=o,T=a;for(t=2;t<=6;t++)_=m*d-w*g,p=w*d+m*g,m=_,w=p,x=x+(t-1)*(this.B_re[t]*m-this.B_im[t]*w),T=T+(t-1)*(this.B_im[t]*m+this.B_re[t]*w);m=1,w=0;var M=this.B_re[1],C=this.B_im[1];for(t=2;t<=6;t++)_=m*d-w*g,p=w*d+m*g,m=_,w=p,M=M+t*(this.B_re[t]*m-this.B_im[t]*w),C=C+t*(this.B_im[t]*m+this.B_re[t]*w);var I=M*M+C*C;d=(x*M+T*C)/I,g=(T*M-x*C)/I}var v=d,K=g,W=1,X=0;for(t=1;t<=9;t++)W=W*v,X=X+this.D[t]*W;var A=this.lat0+X*zr*1e5,B=this.long0+K;return n.x=B,n.y=A,n}var Bp=["New_Zealand_Map_Grid","nzmg"];const Hp={init:Gp,forward:Wp,inverse:zp,names:Bp};function Yp(){}function Xp(n){var t=n.x,e=n.y,i=F(t-this.long0),s=this.x0+this.a*i,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return n.x=s,n.y=r,n}function Up(n){n.x-=this.x0,n.y-=this.y0;var t=F(this.long0+n.x/this.a),e=2.5*(Math.atan(Math.exp(.8*n.y/this.a))-Math.PI/4);return n.x=t,n.y=e,n}var Vp=["Miller_Cylindrical","mill"];const jp={init:Yp,forward:Xp,inverse:Up,names:Vp};var qp=20;function Zp(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Wg(this.es)}function $p(n){var t,e,i=n.x,s=n.y;if(i=F(i-this.long0),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var r=this.n*Math.sin(s),o=qp;o;--o){var a=(this.m*s+Math.sin(s)-r)/(this.m+Math.cos(s));if(s-=a,Math.abs(a)<O)break}t=this.a*this.C_x*i*(this.m+Math.cos(s)),e=this.a*this.C_y*s}else{var l=Math.sin(s),h=Math.cos(s);e=this.a*Ya(s,l,h,this.en),t=this.a*i*h/Math.sqrt(1-this.es*l*l)}return n.x=t,n.y=e,n}function Jp(n){var t,e,i,s;return n.x-=this.x0,i=n.x/this.a,n.y-=this.y0,t=n.y/this.a,this.sphere?(t/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(t))),this.m?t=Nn((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=Nn(Math.sin(t)/this.n)),i=F(i+this.long0),t=fr(t)):(t=zg(n.y/this.a,this.es,this.en),s=Math.abs(t),s<S?(s=Math.sin(t),e=this.long0+n.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(t)),i=F(e)):s-O<S&&(i=this.long0)),n.x=i,n.y=t,n}var Qp=["Sinusoidal","sinu"];const tx={init:Zp,forward:$p,inverse:Jp,names:Qp};function ex(){}function ix(n){for(var t=n.x,e=n.y,i=F(t-this.long0),s=e,r=Math.PI*Math.sin(e);;){var o=-(s+Math.sin(s)-r)/(1+Math.cos(s));if(s+=o,Math.abs(o)<O)break}s/=2,Math.PI/2-Math.abs(e)<O&&(i=0);var a=.900316316158*this.a*i*Math.cos(s)+this.x0,l=1.4142135623731*this.a*Math.sin(s)+this.y0;return n.x=a,n.y=l,n}function nx(n){var t,e;n.x-=this.x0,n.y-=this.y0,e=n.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var i=F(this.long0+n.x/(.900316316158*this.a*Math.cos(t)));i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var s=Math.asin(e);return n.x=i,n.y=s,n}var sx=["Mollweide","moll"];const rx={init:ex,forward:ix,inverse:nx,names:sx};function ox(){Math.abs(this.lat1+this.lat2)<O||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=To(this.es),this.e1=Mo(this.es),this.e2=Co(this.es),this.e3=Ro(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=Fi(this.e,this.sinphi,this.cosphi),this.ml1=ye(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<O?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=Fi(this.e,this.sinphi,this.cosphi),this.ml2=ye(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=ye(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function ax(n){var t=n.x,e=n.y,i;if(this.sphere)i=this.a*(this.g-e);else{var s=ye(this.e0,this.e1,this.e2,this.e3,e);i=this.a*(this.g-s)}var r=this.ns*F(t-this.long0),o=this.x0+i*Math.sin(r),a=this.y0+this.rh-i*Math.cos(r);return n.x=o,n.y=a,n}function lx(n){n.x-=this.x0,n.y=this.rh-n.y+this.y0;var t,e,i,s;this.ns>=0?(e=Math.sqrt(n.x*n.x+n.y*n.y),t=1):(e=-Math.sqrt(n.x*n.x+n.y*n.y),t=-1);var r=0;if(e!==0&&(r=Math.atan2(t*n.x,t*n.y)),this.sphere)return s=F(this.long0+r/this.ns),i=fr(this.g-e/this.a),n.x=s,n.y=i,n;var o=this.g-e/this.a;return i=ya(o,this.e0,this.e1,this.e2,this.e3),s=F(this.long0+r/this.ns),n.x=s,n.y=i,n}var hx=["Equidistant_Conic","eqdc"];const cx={init:ox,forward:ax,inverse:lx,names:hx};function ux(){this.R=this.a}function dx(n){var t=n.x,e=n.y,i=F(t-this.long0),s,r;Math.abs(e)<=O&&(s=this.x0+this.R*i,r=this.y0);var o=Nn(2*Math.abs(e/Math.PI));(Math.abs(i)<=O||Math.abs(Math.abs(e)-S)<=O)&&(s=this.x0,e>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*o):r=this.y0+Math.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(Math.PI/i-i/Math.PI),l=a*a,h=Math.sin(o),c=Math.cos(o),u=c/(h+c-1),d=u*u,g=u*(2/h-1),f=g*g,m=Math.PI*this.R*(a*(u-f)+Math.sqrt(l*(u-f)*(u-f)-(f+l)*(d-f)))/(f+l);i<0&&(m=-m),s=this.x0+m;var w=l+u;return m=Math.PI*this.R*(g*w-a*Math.sqrt((f+l)*(l+1)-w*w))/(f+l),e>=0?r=this.y0+m:r=this.y0-m,n.x=s,n.y=r,n}function gx(n){var t,e,i,s,r,o,a,l,h,c,u,d,g;return n.x-=this.x0,n.y-=this.y0,u=Math.PI*this.R,i=n.x/u,s=n.y/u,r=i*i+s*s,o=-Math.abs(s)*(1+r),a=o-2*s*s+i*i,l=-2*o+1+2*s*s+r*r,g=s*s/l+(2*a*a*a/l/l/l-9*o*a/l/l)/27,h=(o-a*a/3/l)/l,c=2*Math.sqrt(-h/3),u=3*g/h/c,Math.abs(u)>1&&(u>=0?u=1:u=-1),d=Math.acos(u)/3,n.y>=0?e=(-c*Math.cos(d+Math.PI/3)-a/3/l)*Math.PI:e=-(-c*Math.cos(d+Math.PI/3)-a/3/l)*Math.PI,Math.abs(i)<O?t=this.long0:t=F(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(i*i-s*s)+r*r))/2/i),n.x=t,n.y=e,n}var fx=["Van_der_Grinten_I","VanDerGrinten","vandg"];const mx={init:ux,forward:dx,inverse:gx,names:fx};function wx(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function yx(n){var t=n.x,e=n.y,i=Math.sin(n.y),s=Math.cos(n.y),r=F(t-this.long0),o,a,l,h,c,u,d,g,f,m,w,_,p,x,T,M,C,I,v,K,W,X,A;return this.sphere?Math.abs(this.sin_p12-1)<=O?(n.x=this.x0+this.a*(S-e)*Math.sin(r),n.y=this.y0-this.a*(S-e)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=O?(n.x=this.x0+this.a*(S+e)*Math.sin(r),n.y=this.y0+this.a*(S+e)*Math.cos(r),n):(I=this.sin_p12*i+this.cos_p12*s*Math.cos(r),M=Math.acos(I),C=M?M/Math.sin(M):1,n.x=this.x0+this.a*C*s*Math.sin(r),n.y=this.y0+this.a*C*(this.cos_p12*i-this.sin_p12*s*Math.cos(r)),n):(o=To(this.es),a=Mo(this.es),l=Co(this.es),h=Ro(this.es),Math.abs(this.sin_p12-1)<=O?(c=this.a*ye(o,a,l,h,S),u=this.a*ye(o,a,l,h,e),n.x=this.x0+(c-u)*Math.sin(r),n.y=this.y0-(c-u)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=O?(c=this.a*ye(o,a,l,h,S),u=this.a*ye(o,a,l,h,e),n.x=this.x0+(c+u)*Math.sin(r),n.y=this.y0+(c+u)*Math.cos(r),n):(d=i/s,g=ir(this.a,this.e,this.sin_p12),f=ir(this.a,this.e,i),m=Math.atan((1-this.es)*d+this.es*g*this.sin_p12/(f*s)),w=Math.atan2(Math.sin(r),this.cos_p12*Math.tan(m)-this.sin_p12*Math.cos(r)),w===0?v=Math.asin(this.cos_p12*Math.sin(m)-this.sin_p12*Math.cos(m)):Math.abs(Math.abs(w)-Math.PI)<=O?v=-Math.asin(this.cos_p12*Math.sin(m)-this.sin_p12*Math.cos(m)):v=Math.asin(Math.sin(r)*Math.cos(m)/Math.sin(w)),_=this.e*this.sin_p12/Math.sqrt(1-this.es),p=this.e*this.cos_p12*Math.cos(w)/Math.sqrt(1-this.es),x=_*p,T=p*p,K=v*v,W=K*v,X=W*v,A=X*v,M=g*v*(1-K*T*(1-T)/6+W/8*x*(1-2*T)+X/120*(T*(4-7*T)-3*_*_*(1-7*T))-A/48*x),n.x=this.x0+M*Math.sin(w),n.y=this.y0+M*Math.cos(w),n))}function _x(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,o,a,l,h,c,u,d,g,f,m,w,_,p,x,T,M,C,I,v;return this.sphere?(t=Math.sqrt(n.x*n.x+n.y*n.y),t>2*S*this.a?void 0:(e=t/this.a,i=Math.sin(e),s=Math.cos(e),r=this.long0,Math.abs(t)<=O?o=this.lat0:(o=Nn(s*this.sin_p12+n.y*i*this.cos_p12/t),a=Math.abs(this.lat0)-S,Math.abs(a)<=O?this.lat0>=0?r=F(this.long0+Math.atan2(n.x,-n.y)):r=F(this.long0-Math.atan2(-n.x,n.y)):r=F(this.long0+Math.atan2(n.x*i,t*this.cos_p12*s-n.y*this.sin_p12*i))),n.x=r,n.y=o,n)):(l=To(this.es),h=Mo(this.es),c=Co(this.es),u=Ro(this.es),Math.abs(this.sin_p12-1)<=O?(d=this.a*ye(l,h,c,u,S),t=Math.sqrt(n.x*n.x+n.y*n.y),g=d-t,o=ya(g/this.a,l,h,c,u),r=F(this.long0+Math.atan2(n.x,-1*n.y)),n.x=r,n.y=o,n):Math.abs(this.sin_p12+1)<=O?(d=this.a*ye(l,h,c,u,S),t=Math.sqrt(n.x*n.x+n.y*n.y),g=t-d,o=ya(g/this.a,l,h,c,u),r=F(this.long0+Math.atan2(n.x,n.y)),n.x=r,n.y=o,n):(t=Math.sqrt(n.x*n.x+n.y*n.y),w=Math.atan2(n.x,n.y),f=ir(this.a,this.e,this.sin_p12),_=Math.cos(w),p=this.e*this.cos_p12*_,x=-p*p/(1-this.es),T=3*this.es*(1-x)*this.sin_p12*this.cos_p12*_/(1-this.es),M=t/f,C=M-x*(1+x)*Math.pow(M,3)/6-T*(1+3*x)*Math.pow(M,4)/24,I=1-x*C*C/2-M*C*C*C/6,m=Math.asin(this.sin_p12*Math.cos(C)+this.cos_p12*Math.sin(C)*_),r=F(this.long0+Math.asin(Math.sin(w)*Math.sin(C)/Math.cos(m))),v=Math.sin(m),o=Math.atan2((v-this.es*I*this.sin_p12)*Math.tan(m),v*(1-this.es)),n.x=r,n.y=o,n))}var px=["Azimuthal_Equidistant","aeqd"];const xx={init:wx,forward:yx,inverse:_x,names:px};function Tx(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function Mx(n){var t,e,i,s,r,o,a,l,h=n.x,c=n.y;return i=F(h-this.long0),t=Math.sin(c),e=Math.cos(c),s=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*s,r=1,(o>0||Math.abs(o)<=O)&&(a=this.a*r*e*Math.sin(i),l=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)),n.x=a,n.y=l,n}function Cx(n){var t,e,i,s,r,o,a;return n.x-=this.x0,n.y-=this.y0,t=Math.sqrt(n.x*n.x+n.y*n.y),e=Nn(t/this.a),i=Math.sin(e),s=Math.cos(e),o=this.long0,Math.abs(t)<=O?(a=this.lat0,n.x=o,n.y=a,n):(a=Nn(s*this.sin_p14+n.y*i*this.cos_p14/t),r=Math.abs(this.lat0)-S,Math.abs(r)<=O?(this.lat0>=0?o=F(this.long0+Math.atan2(n.x,-n.y)):o=F(this.long0-Math.atan2(-n.x,n.y)),n.x=o,n.y=a,n):(o=F(this.long0+Math.atan2(n.x*i,t*this.cos_p14*s-n.y*this.sin_p14*i)),n.x=o,n.y=a,n))}var Rx=["ortho"];const Ex={init:Tx,forward:Mx,inverse:Cx,names:Rx};var Ft={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},Rt={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function vx(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=S-Ct/2?this.face=Ft.TOP:this.lat0<=-(S-Ct/2)?this.face=Ft.BOTTOM:Math.abs(this.long0)<=Ct?this.face=Ft.FRONT:Math.abs(this.long0)<=S+Ct?this.face=this.long0>0?Ft.RIGHT:Ft.LEFT:this.face=Ft.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function Ix(n){var t={x:0,y:0},e,i,s,r,o,a,l={value:0};if(n.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(n.y)):e=n.y,i=n.x,this.face===Ft.TOP)r=S-e,i>=Ct&&i<=S+Ct?(l.value=Rt.AREA_0,s=i-S):i>S+Ct||i<=-(S+Ct)?(l.value=Rt.AREA_1,s=i>0?i-Bt:i+Bt):i>-(S+Ct)&&i<=-Ct?(l.value=Rt.AREA_2,s=i+S):(l.value=Rt.AREA_3,s=i);else if(this.face===Ft.BOTTOM)r=S+e,i>=Ct&&i<=S+Ct?(l.value=Rt.AREA_0,s=-i+S):i<Ct&&i>=-Ct?(l.value=Rt.AREA_1,s=-i):i<-Ct&&i>=-(S+Ct)?(l.value=Rt.AREA_2,s=-i-S):(l.value=Rt.AREA_3,s=i>0?-i+Bt:-i-Bt);else{var h,c,u,d,g,f,m;this.face===Ft.RIGHT?i=zs(i,+S):this.face===Ft.BACK?i=zs(i,+Bt):this.face===Ft.LEFT&&(i=zs(i,-S)),d=Math.sin(e),g=Math.cos(e),f=Math.sin(i),m=Math.cos(i),h=g*m,c=g*f,u=d,this.face===Ft.FRONT?(r=Math.acos(h),s=Uo(r,u,c,l)):this.face===Ft.RIGHT?(r=Math.acos(c),s=Uo(r,u,-h,l)):this.face===Ft.BACK?(r=Math.acos(-h),s=Uo(r,u,-c,l)):this.face===Ft.LEFT?(r=Math.acos(-c),s=Uo(r,u,h,l)):(r=s=0,l.value=Rt.AREA_0)}return a=Math.atan(12/Bt*(s+Math.acos(Math.sin(s)*Math.cos(Ct))-S)),o=Math.sqrt((1-Math.cos(r))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(s))))),l.value===Rt.AREA_1?a+=S:l.value===Rt.AREA_2?a+=Bt:l.value===Rt.AREA_3&&(a+=1.5*Bt),t.x=o*Math.cos(a),t.y=o*Math.sin(a),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,n.x=t.x,n.y=t.y,n}function bx(n){var t={lam:0,phi:0},e,i,s,r,o,a,l,h,c,u={value:0};if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,i=Math.atan(Math.sqrt(n.x*n.x+n.y*n.y)),e=Math.atan2(n.y,n.x),n.x>=0&&n.x>=Math.abs(n.y)?u.value=Rt.AREA_0:n.y>=0&&n.y>=Math.abs(n.x)?(u.value=Rt.AREA_1,e-=S):n.x<0&&-n.x>=Math.abs(n.y)?(u.value=Rt.AREA_2,e=e<0?e+Bt:e-Bt):(u.value=Rt.AREA_3,e+=S),c=Bt/12*Math.tan(e),o=Math.sin(c)/(Math.cos(c)-1/Math.sqrt(2)),a=Math.atan(o),s=Math.cos(e),r=Math.tan(i),l=1-s*s*r*r*(1-Math.cos(Math.atan(1/Math.cos(a)))),l<-1?l=-1:l>1&&(l=1),this.face===Ft.TOP)h=Math.acos(l),t.phi=S-h,u.value===Rt.AREA_0?t.lam=a+S:u.value===Rt.AREA_1?t.lam=a<0?a+Bt:a-Bt:u.value===Rt.AREA_2?t.lam=a-S:t.lam=a;else if(this.face===Ft.BOTTOM)h=Math.acos(l),t.phi=h-S,u.value===Rt.AREA_0?t.lam=-a+S:u.value===Rt.AREA_1?t.lam=-a:u.value===Rt.AREA_2?t.lam=-a-S:t.lam=a<0?-a-Bt:-a+Bt;else{var d,g,f;d=l,c=d*d,c>=1?f=0:f=Math.sqrt(1-c)*Math.sin(a),c+=f*f,c>=1?g=0:g=Math.sqrt(1-c),u.value===Rt.AREA_1?(c=g,g=-f,f=c):u.value===Rt.AREA_2?(g=-g,f=-f):u.value===Rt.AREA_3&&(c=g,g=f,f=-c),this.face===Ft.RIGHT?(c=d,d=-g,g=c):this.face===Ft.BACK?(d=-d,g=-g):this.face===Ft.LEFT&&(c=d,d=g,g=-c),t.phi=Math.acos(-f)-S,t.lam=Math.atan2(g,d),this.face===Ft.RIGHT?t.lam=zs(t.lam,-S):this.face===Ft.BACK?t.lam=zs(t.lam,-Bt):this.face===Ft.LEFT&&(t.lam=zs(t.lam,+S))}if(this.es!==0){var m,w,_;m=t.phi<0?1:0,w=Math.tan(t.phi),_=this.b/Math.sqrt(w*w+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-_*_)/(this.one_minus_f*_)),m&&(t.phi=-t.phi)}return t.lam+=this.long0,n.x=t.lam,n.y=t.phi,n}function Uo(n,t,e,i){var s;return n<O?(i.value=Rt.AREA_0,s=0):(s=Math.atan2(t,e),Math.abs(s)<=Ct?i.value=Rt.AREA_0:s>Ct&&s<=S+Ct?(i.value=Rt.AREA_1,s-=S):s>S+Ct||s<=-(S+Ct)?(i.value=Rt.AREA_2,s=s>=0?s-Bt:s+Bt):(i.value=Rt.AREA_3,s+=S)),s}function zs(n,t){var e=n+t;return e<-Bt?e+=Jr:e>+Bt&&(e-=Jr),e}var Lx=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const Sx={init:vx,forward:Ix,inverse:bx,names:Lx};var ah=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Dr=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],Yg=.8487,Xg=1.3523,Ug=Ii/5,Nx=1/Ug,Ps=18,_a=function(n,t){return n[0]+t*(n[1]+t*(n[2]+t*n[3]))},Ax=function(n,t){return n[1]+t*(2*n[2]+t*3*n[3])};function Ox(n,t,e,i){for(var s=t;i;--i){var r=n(s);if(s-=r,Math.abs(r)<e)break}return s}function Px(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function Kx(n){var t=F(n.x-this.long0),e=Math.abs(n.y),i=Math.floor(e*Ug);i<0?i=0:i>=Ps&&(i=Ps-1),e=Ii*(e-Nx*i);var s={x:_a(ah[i],e)*t,y:_a(Dr[i],e)};return n.y<0&&(s.y=-s.y),s.x=s.x*this.a*Yg+this.x0,s.y=s.y*this.a*Xg+this.y0,s}function Dx(n){var t={x:(n.x-this.x0)/(this.a*Yg),y:Math.abs(n.y-this.y0)/(this.a*Xg)};if(t.y>=1)t.x/=ah[Ps][0],t.y=n.y<0?-S:S;else{var e=Math.floor(t.y*Ps);for(e<0?e=0:e>=Ps&&(e=Ps-1);;)if(Dr[e][0]>t.y)--e;else if(Dr[e+1][0]<=t.y)++e;else break;var i=Dr[e],s=5*(t.y-i[0])/(Dr[e+1][0]-i[0]);s=Ox(function(r){return(_a(i,r)-t.y)/Ax(i,r)},s,O,100),t.x/=_a(ah[e],s),t.y=(5*e+s)*Jt,n.y<0&&(t.y=-t.y)}return t.x=F(t.x+this.long0),t}var Fx=["Robinson","robin"];const kx={init:Px,forward:Kx,inverse:Dx,names:Fx};function Gx(){this.name="geocent"}function Wx(n){var t=Ng(n,this.es,this.a);return t}function zx(n){var t=Ag(n,this.es,this.a,this.b);return t}var Bx=["Geocentric","geocentric","geocent","Geocent"];const Hx={init:Gx,forward:Wx,inverse:zx,names:Bx};var re={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Lr={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function Yx(){if(Object.keys(Lr).forEach((function(e){if(typeof this[e]>"u")this[e]=Lr[e].def;else{if(Lr[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);Lr[e].num&&(this[e]=parseFloat(this[e]))}Lr[e].degrees&&(this[e]=this[e]*Jt)}).bind(this)),Math.abs(Math.abs(this.lat0)-S)<O?this.mode=this.lat0<0?re.S_POLE:re.N_POLE:Math.abs(this.lat0)<O?this.mode=re.EQUIT:(this.mode=re.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var n=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(n),this.sw=Math.sin(n)}function Xx(n){n.x-=this.long0;var t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s,r;switch(this.mode){case re.OBLIQ:r=this.sinph0*t+this.cosph0*e*i;break;case re.EQUIT:r=e*i;break;case re.S_POLE:r=-t;break;case re.N_POLE:r=t;break}switch(r=this.pn1/(this.p-r),s=r*e*Math.sin(n.x),this.mode){case re.OBLIQ:r*=this.cosph0*t-this.sinph0*e*i;break;case re.EQUIT:r*=t;break;case re.N_POLE:r*=-(e*i);break;case re.S_POLE:r*=e*i;break}var o,a;return o=r*this.cg+s*this.sg,a=1/(o*this.sw*this.h1+this.cw),s=(s*this.cg-r*this.sg)*this.cw*a,r=o*a,n.x=s*this.a,n.y=r*this.a,n}function Ux(n){n.x/=this.a,n.y/=this.a;var t={x:n.x,y:n.y},e,i,s;s=1/(this.pn1-n.y*this.sw),e=this.pn1*n.x*s,i=this.pn1*n.y*this.cw*s,n.x=e*this.cg+i*this.sg,n.y=i*this.cg-e*this.sg;var r=$e(n.x,n.y);if(Math.abs(r)<O)t.x=0,t.y=n.y;else{var o,a;switch(a=1-r*r*this.pfact,a=(this.p-Math.sqrt(a))/(this.pn1/r+r/this.pn1),o=Math.sqrt(1-a*a),this.mode){case re.OBLIQ:t.y=Math.asin(o*this.sinph0+n.y*a*this.cosph0/r),n.y=(o-this.sinph0*Math.sin(t.y))*r,n.x*=a*this.cosph0;break;case re.EQUIT:t.y=Math.asin(n.y*a/r),n.y=o*r,n.x*=a;break;case re.N_POLE:t.y=Math.asin(o),n.y=-n.y;break;case re.S_POLE:t.y=-Math.asin(o);break}t.x=Math.atan2(n.x,n.y)}return n.x=t.x+this.long0,n.y=t.y,n}var Vx=["Tilted_Perspective","tpers"];const jx={init:Yx,forward:Xx,inverse:Ux,names:Vx};function qx(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var n=1-this.es,t=1/n;this.radius_p=Math.sqrt(n),this.radius_p2=n,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function Zx(n){var t=n.x,e=n.y,i,s,r,o;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var a=this.radius_p/$e(this.radius_p*Math.cos(e),Math.sin(e));if(s=a*Math.cos(t)*Math.cos(e),r=a*Math.sin(t)*Math.cos(e),o=a*Math.sin(e),(this.radius_g-s)*s-r*r-o*o*this.radius_p_inv2<0)return n.x=Number.NaN,n.y=Number.NaN,n;i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/$e(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(o/$e(r,i)))}else this.shape==="sphere"&&(i=Math.cos(e),s=Math.cos(t)*i,r=Math.sin(t)*i,o=Math.sin(e),i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/$e(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(o/$e(r,i))));return n.x=n.x*this.a,n.y=n.y*this.a,n}function $x(n){var t=-1,e=0,i=0,s,r,o,a;if(n.x=n.x/this.a,n.y=n.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*$e(1,i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*$e(1,e));var l=i/this.radius_p;if(s=e*e+l*l+t*t,r=2*this.radius_g*t,o=r*r-4*s*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-r-Math.sqrt(o))/(2*s),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t),n.y=Math.atan(this.radius_p_inv2*Math.tan(n.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*Math.sqrt(1+i*i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*Math.sqrt(1+e*e)),s=e*e+i*i+t*t,r=2*this.radius_g*t,o=r*r-4*s*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-r-Math.sqrt(o))/(2*s),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t)}return n.x=n.x+this.long0,n}var Jx=["Geostationary Satellite View","Geostationary_Satellite","geos"];const Qx={init:qx,forward:Zx,inverse:$x,names:Jx};function tT(n){n.Proj.projections.add(ea),n.Proj.projections.add(ia),n.Proj.projections.add(a_),n.Proj.projections.add(w_),n.Proj.projections.add(M_),n.Proj.projections.add(I_),n.Proj.projections.add(O_),n.Proj.projections.add(k_),n.Proj.projections.add(H_),n.Proj.projections.add(j_),n.Proj.projections.add(up),n.Proj.projections.add(yp),n.Proj.projections.add(Mp),n.Proj.projections.add(bp),n.Proj.projections.add(Op),n.Proj.projections.add(kp),n.Proj.projections.add(Hp),n.Proj.projections.add(jp),n.Proj.projections.add(tx),n.Proj.projections.add(rx),n.Proj.projections.add(cx),n.Proj.projections.add(mx),n.Proj.projections.add(xx),n.Proj.projections.add(Ex),n.Proj.projections.add(Sx),n.Proj.projections.add(kx),n.Proj.projections.add(Hx),n.Proj.projections.add(jx),n.Proj.projections.add(Qx)}_e.defaultDatum="WGS84";_e.Proj=Ni;_e.WGS84=new _e.Proj("WGS84");_e.Point=er;_e.toPoint=Og;_e.defs=fe;_e.nadgrid=hy;_e.transform=wa;_e.mgrs=Ey;_e.version="__VERSION__";tT(_e);class Eo extends mi{constructor(t){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),t)if(typeof t.getSimplifiedGeometry=="function"){const e=t;this.setGeometry(e)}else{const e=t;this.setProperties(e)}}clone(){const t=new Eo(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());const e=this.getGeometry();e&&t.setGeometry(e.clone());const i=this.getStyle();return i&&t.setStyle(i),t}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&(St(this.geometryChangeKey_),this.geometryChangeKey_=null);const t=this.getGeometry();t&&(this.geometryChangeKey_=ot(t,$.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(t){this.set(this.geometryName_,t)}setStyle(t){this.style_=t,this.styleFunction_=t?eT(t):void 0,this.changed()}setId(t){this.id_=t,this.changed()}setGeometryName(t){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=t,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}function eT(n){if(typeof n=="function")return n;let t;return Array.isArray(n)?t=n:(mt(typeof n.getZIndex=="function","Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),t=[n]),function(){return t}}let iT=class lh extends tg{constructor(t){super(),this.geometries_=t||null,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(St),this.changeEventsKeys_.length=0}listenGeometriesChange_(){if(this.geometries_)for(let t=0,e=this.geometries_.length;t<e;++t)this.changeEventsKeys_.push(ot(this.geometries_[t],$.CHANGE,this.changed,this))}clone(){const t=new lh(null);return t.setGeometries(this.geometries_),t.applyProperties(this),t}closestPointXY(t,e,i,s){if(s<hs(this.getExtent(),t,e))return s;const r=this.geometries_;for(let o=0,a=r.length;o<a;++o)s=r[o].closestPointXY(t,e,i,s);return s}containsXY(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)if(i[s].containsXY(t,e))return!0;return!1}computeExtent(t){ur(t);const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)Pd(t,e[i].getExtent());return t}getGeometries(){return Yu(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let t=[];const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)e[i].getType()===this.getType()?t=t.concat(e[i].getGeometriesArrayRecursive()):t.push(e[i]);return t}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const e=[],i=this.geometries_;let s=!1;for(let r=0,o=i.length;r<o;++r){const a=i[r],l=a.getSimplifiedGeometry(t);e.push(l),l!==a&&(s=!0)}if(s){const r=new lh(null);return r.setGeometriesArray(e),r}return this.simplifiedGeometryMaxMinSquaredTolerance=t,this}getType(){return"GeometryCollection"}intersectsExtent(t){const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)if(e[i].intersectsExtent(t))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].rotate(t,e);this.changed()}scale(t,e,i){i||(i=fi(this.getExtent()));const s=this.geometries_;for(let r=0,o=s.length;r<o;++r)s[r].scale(t,e,i);this.changed()}setGeometries(t){this.setGeometriesArray(Yu(t))}setGeometriesArray(t){this.unlistenGeometriesChange_(),this.geometries_=t,this.listenGeometriesChange_(),this.changed()}applyTransform(t){const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)e[i].applyTransform(t);this.changed()}translate(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].translate(t,e);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}};function Yu(n){const t=[];for(let e=0,i=n.length;e<i;++e)t.push(n[e].clone());return t}function pa(n,t,e,i,s,r,o){let a,l;const h=(e-t)/i;if(h===1)a=t;else if(h===2)a=t,l=s;else if(h!==0){let c=n[t],u=n[t+1],d=0;const g=[0];for(let w=t+i;w<e;w+=i){const _=n[w],p=n[w+1];d+=Math.sqrt((_-c)*(_-c)+(p-u)*(p-u)),g.push(d),c=_,u=p}const f=s*d,m=hm(g,f);m<0?(l=(f-g[-m-2])/(g[-m-1]-g[-m-2]),a=t+(-m-2)*i):a=t+m*i}o=o>1?o:2,r=r||new Array(o);for(let c=0;c<o;++c)r[c]=a===void 0?NaN:l===void 0?n[a+c]:ke(n[a+c],n[a+i+c],l);return r}function hh(n,t,e,i,s,r){if(e==t)return null;let o;if(s<n[t+i-1])return r?(o=n.slice(t,t+i),o[i-1]=s,o):null;if(n[e-1]<s)return r?(o=n.slice(e-i,e),o[i-1]=s,o):null;if(s==n[t+i-1])return n.slice(t,t+i);let a=t/i,l=e/i;for(;a<l;){const d=a+l>>1;s<n[(d+1)*i-1]?l=d:a=d+1}const h=n[a*i-1];if(s==h)return n.slice((a-1)*i,(a-1)*i+i);const c=n[(a+1)*i-1],u=(s-h)/(c-h);o=[];for(let d=0;d<i-1;++d)o.push(ke(n[(a-1)*i+d],n[a*i+d],u));return o.push(s),o}function nT(n,t,e,i,s,r,o){if(o)return hh(n,t,e[e.length-1],i,s,r);let a;if(s<n[i-1])return r?(a=n.slice(0,i),a[i-1]=s,a):null;if(n[n.length-1]<s)return r?(a=n.slice(n.length-i),a[i-1]=s,a):null;for(let l=0,h=e.length;l<h;++l){const c=e[l];if(t!=c){if(s<n[t+i-1])return null;if(s<=n[c-1])return hh(n,t,c,i,s,!1);t=c}}return null}function Vg(n,t,e,i){let s=n[t],r=n[t+1],o=0;for(let a=t+i;a<e;a+=i){const l=n[a],h=n[a+1];o+=Math.sqrt((l-s)*(l-s)+(h-r)*(h-r)),s=l,r=h}return o}let ch=class uh extends cs{constructor(t,e){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,e!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendCoordinate(t){Li(this.flatCoordinates,t),this.changed()}clone(){const t=new uh(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<hs(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Uh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),jh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,i,s))}forEachSegment(t){return ag(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,e){return this.layout!="XYM"&&this.layout!="XYZM"?null:(e=e!==void 0?e:!1,hh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e))}getCoordinates(){return xn(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,e){return pa(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,this.stride)}getLength(){return Vg(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){const e=[];return e.length=Wa(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new uh(e,"XY")}getType(){return"LineString"}intersectsExtent(t){return za(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ga(this.flatCoordinates,0,t,this.stride),this.changed()}},sT=class dh extends cs{constructor(t,e,i){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(t[0]))this.setCoordinates(t,e);else if(e!==void 0&&i)this.setFlatCoordinates(e,t),this.ends_=i;else{const s=t,r=[],o=[];for(let l=0,h=s.length;l<h;++l){const c=s[l];Li(r,c.getFlatCoordinates()),o.push(r.length)}const a=s.length===0?this.getLayout():s[0].getLayout();this.setFlatCoordinates(a,r),this.ends_=o}}appendLineString(t){Li(this.flatCoordinates,t.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new dh(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<hs(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Vh(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),qh(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,i,s))}getCoordinateAtM(t,e,i){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(e=e!==void 0?e:!1,i=i!==void 0?i:!1,nT(this.flatCoordinates,0,this.ends_,this.stride,t,e,i))}getCoordinates(){return Vr(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(t){return t<0||this.ends_.length<=t?null:new ch(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLineStrings(){const t=this.flatCoordinates,e=this.ends_,i=this.layout,s=[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=e[o],h=new ch(t.slice(r,l),i);s.push(h),r=l}return s}getFlatMidpoints(){const t=[],e=this.flatCoordinates;let i=0;const s=this.ends_,r=this.stride;for(let o=0,a=s.length;o<a;++o){const l=s[o],h=pa(e,i,l,r,.5);Li(t,h),i=l}return t}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=ig(this.flatCoordinates,0,this.ends_,this.stride,t,e,0,i),new dh(e,"XY",i)}getType(){return"MultiLineString"}intersectsExtent(t){return N0(this.flatCoordinates,0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const i=yo(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}},jg=class qg extends cs{constructor(t,e){super(),e&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendPoint(t){Li(this.flatCoordinates,t.getFlatCoordinates()),this.changed()}clone(){const t=new qg(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){if(s<hs(this.getExtent(),t,e))return s;const r=this.flatCoordinates,o=this.stride;for(let a=0,l=r.length;a<l;a+=o){const h=Zn(t,e,r[a],r[a+1]);if(h<s){s=h;for(let c=0;c<o;++c)i[c]=r[a+c];i.length=o}}return s}getCoordinates(){return xn(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(t){const e=this.flatCoordinates.length/this.stride;return t<0||e<=t?null:new ha(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)}getPoints(){const t=this.flatCoordinates,e=this.layout,i=this.stride,s=[];for(let r=0,o=t.length;r<o;r+=i){const a=new ha(t.slice(r,r+i),e);s.push(a)}return s}getType(){return"MultiPoint"}intersectsExtent(t){const e=this.flatCoordinates,i=this.stride;for(let s=0,r=e.length;s<r;s+=i){const o=e[s],a=e[s+1];if(Nh(t,o,a))return!0}return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ga(this.flatCoordinates,0,t,this.stride),this.changed()}};function Zg(n,t,e,i){const s=[];let r=Be();for(let o=0,a=e.length;o<a;++o){const l=e[o];r=Ah(n,t,l[0],i),s.push((r[0]+r[2])/2,(r[1]+r[3])/2),t=l[l.length-1]}return s}let rT=class gh extends cs{constructor(t,e,i){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(t[0])){const s=t,r=[],o=[];for(let a=0,l=s.length;a<l;++a){const h=s[a],c=r.length,u=h.getEnds();for(let d=0,g=u.length;d<g;++d)u[d]+=c;Li(r,h.getFlatCoordinates()),o.push(u)}e=s.length===0?this.getLayout():s[0].getLayout(),t=r,i=o}e!==void 0&&i?(this.setFlatCoordinates(e,t),this.endss_=i):this.setCoordinates(t,e)}appendPolygon(t){let e;if(!this.flatCoordinates)this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();else{const i=this.flatCoordinates.length;Li(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(let s=0,r=e.length;s<r;++s)e[s]+=i}this.endss_.push(e),this.changed()}clone(){const t=this.endss_.length,e=new Array(t);for(let s=0;s<t;++s)e[s]=this.endss_[s].slice();const i=new gh(this.flatCoordinates.slice(),this.layout,e);return i.applyProperties(this),i}closestPointXY(t,e,i,s){return s<hs(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(C0(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),R0(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,s))}containsXY(t,e){return S0(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)}getArea(){return b0(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let e;return t!==void 0?(e=this.getOrientedFlatCoordinates().slice(),Jl(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,Zl(e,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const t=Zg(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=og(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new jg(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;cg(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=Jl(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=I0(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,i),new gh(e,"XY",i)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let e;if(t===0)e=0;else{const r=this.endss_[t-1];e=r[r.length-1]}const i=this.endss_[t].slice(),s=i[i.length-1];if(e!==0)for(let r=0,o=i.length;r<o;++r)i[r]-=e;return new Js(this.flatCoordinates.slice(e,s),this.layout,i)}getPolygons(){const t=this.layout,e=this.flatCoordinates,i=this.endss_,s=[];let r=0;for(let o=0,a=i.length;o<a;++o){const l=i[o].slice(),h=l[l.length-1];if(r!==0)for(let u=0,d=l.length;u<d;++u)l[u]-=r;const c=new Js(e.slice(r,h),t,l);s.push(c),r=h}return s}getType(){return"MultiPolygon"}intersectsExtent(t){return A0(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);const i=eg(this.flatCoordinates,0,t,this.stride,this.endss_);if(i.length===0)this.flatCoordinates.length=0;else{const s=i[i.length-1];this.flatCoordinates.length=s.length===0?0:s[s.length-1]}this.changed()}};const Xu=ui();class Ee{constructor(t,e,i,s,r,o){this.styleFunction,this.extent_,this.id_=o,this.type_=t,this.flatCoordinates_=e,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=i,this.properties_=r,this.squaredTolerance_,this.stride_=s,this.simplifiedGeometry_}get(t){return this.properties_[t]}getExtent(){return this.extent_||(this.extent_=this.type_==="Point"?Od(this.flatCoordinates_):Ah(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){const t=fi(this.getExtent());this.flatInteriorPoints_=Jh(this.flatCoordinates_,0,this.ends_,2,t,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){const t=P0(this.flatCoordinates_,this.ends_),e=Zg(this.flatCoordinates_,0,t,2);this.flatInteriorPoints_=og(this.flatCoordinates_,0,t,2,e)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||(this.flatMidpoints_=pa(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];const t=this.flatCoordinates_;let e=0;const i=this.ends_;for(let s=0,r=i.length;s<r;++s){const o=i[s],a=pa(t,e,o,2,.5);Li(this.flatMidpoints_,a),e=o}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(t){return this}simplifyTransformed(t,e){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return this.stride_}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(t){t=at(t);const e=t.getExtent(),i=t.getWorldExtent();if(e&&i){const s=ae(i)/ae(e);nn(Xu,i[0],i[3],s,-s,0,0,0),vn(this.flatCoordinates_,0,this.flatCoordinates_.length,2,Xu,this.flatCoordinates_)}}applyTransform(t){t(this.flatCoordinates_,this.flatCoordinates_,this.stride_)}clone(){return new Ee(this.type_,this.flatCoordinates_.slice(),this.ends_.slice(),this.stride_,Object.assign({},this.properties_),this.id_)}getEnds(){return this.ends_}enableSimplifyTransformed(){return this.simplifyTransformed=Rd((t,e)=>{if(t===this.squaredTolerance_)return this.simplifiedGeometry_;this.simplifiedGeometry_=this.clone(),e&&this.simplifiedGeometry_.applyTransform(e);const i=this.simplifiedGeometry_.getFlatCoordinates();let s;switch(this.type_){case"LineString":i.length=Wa(i,0,this.simplifiedGeometry_.flatCoordinates_.length,this.simplifiedGeometry_.stride_,t,i,0),s=[i.length];break;case"MultiLineString":s=[],i.length=ig(i,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,t,i,0,s);break;case"Polygon":s=[],i.length=Zh(i,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,Math.sqrt(t),i,0,s);break}return s&&(this.simplifiedGeometry_=new Ee(this.type_,i,s,2,this.properties_,this.id_)),this.squaredTolerance_=t,this.simplifiedGeometry_}),this}}Ee.prototype.getFlatCoordinates=Ee.prototype.getOrientedFlatCoordinates;class oT{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=Eo,this.supportedMediaTypes=null}getReadOptions(t,e){if(e){let i=e.dataProjection?at(e.dataProjection):this.readProjection(t);e.extent&&i&&i.getUnits()==="tile-pixels"&&(i=at(i),i.setWorldExtent(e.extent)),e={dataProjection:i,featureProjection:e.featureProjection}}return this.adaptOptions(e)}adaptOptions(t){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},t)}getType(){return q()}readFeature(t,e){return q()}readFeatures(t,e){return q()}readGeometry(t,e){return q()}readProjection(t){return q()}writeFeature(t,e){return q()}writeFeatures(t,e){return q()}writeGeometry(t,e){return q()}}function cc(n,t,e){const i=e?at(e.featureProjection):null,s=e?at(e.dataProjection):null;let r=n;if(i&&s&&!qe(i,s)){t&&(r=n.clone());const o=t?i:s,a=t?s:i;o.getUnits()==="tile-pixels"?r.transform(o,a):r.applyTransform($s(o,a))}if(t&&e&&e.decimals!==void 0){const o=Math.pow(10,e.decimals),a=function(l){for(let h=0,c=l.length;h<c;++h)l[h]=Math.round(l[h]*o)/o;return l};r===n&&(r=n.clone()),r.applyTransform(a)}return r}function V2(n,t){const e=t?at(t.featureProjection):null,i=t?at(t.dataProjection):null;return e&&i&&!qe(e,i)?kh(n,i,e):n}const aT={Point:ha,LineString:ch,Polygon:Js,MultiPoint:jg,MultiLineString:sT,MultiPolygon:rT};function lT(n,t,e){return Array.isArray(t[0])?(cg(n,0,t,e)||(n=n.slice(),Jl(n,0,t,e)),n):(tc(n,0,t,e)||(n=n.slice(),ca(n,0,t,e)),n)}function $g(n,t){const e=n.geometry;if(!e)return[];if(Array.isArray(e))return e.map(r=>$g({...n,geometry:r})).flat();const i=e.type==="MultiPolygon"?"Polygon":e.type;if(i==="GeometryCollection"||i==="Circle")throw new Error("Unsupported geometry type: "+i);const s=e.layout.length;return cc(new Ee(i,i==="Polygon"?lT(e.flatCoordinates,e.ends,s):e.flatCoordinates,e.ends?.flat(),s,n.properties||{},n.id).enableSimplifyTransformed(),!1,t)}function uc(n,t){if(!n)return null;if(Array.isArray(n)){const i=n.map(s=>uc(s,t));return new iT(i)}const e=aT[n.type];return cc(new e(n.flatCoordinates,n.layout,n.ends),!1,t)}class hT extends oT{constructor(){super()}getType(){return"json"}readFeature(t,e){return this.readFeatureFromObject(Vo(t),this.getReadOptions(t,e))}readFeatures(t,e){return this.readFeaturesFromObject(Vo(t),this.getReadOptions(t,e))}readFeatureFromObject(t,e){return q()}readFeaturesFromObject(t,e){return q()}readGeometry(t,e){return this.readGeometryFromObject(Vo(t),this.getReadOptions(t,e))}readGeometryFromObject(t,e){return q()}readProjection(t){return this.readProjectionFromObject(Vo(t))}readProjectionFromObject(t){return q()}writeFeature(t,e){return JSON.stringify(this.writeFeatureObject(t,e))}writeFeatureObject(t,e){return q()}writeFeatures(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))}writeFeaturesObject(t,e){return q()}writeGeometry(t,e){return JSON.stringify(this.writeGeometryObject(t,e))}writeGeometryObject(t,e){return q()}}function Vo(n){if(typeof n=="string"){const t=JSON.parse(n);return t||null}return n!==null?n:null}class Xa extends hT{constructor(t){t=t||{},super(),this.dataProjection=at(t.dataProjection?t.dataProjection:"EPSG:4326"),t.featureProjection&&(this.defaultFeatureProjection=at(t.featureProjection)),t.featureClass&&(this.featureClass=t.featureClass),this.geometryName_=t.geometryName,this.extractGeometryName_=t.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(t,e){let i=null;t.type==="Feature"?i=t:i={type:"Feature",geometry:t,properties:null};const s=dc(i.geometry);if(this.featureClass===Ee)return $g({geometry:s,id:i.id,properties:i.properties},e);const r=new Eo;return this.geometryName_?r.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in i!==void 0&&r.setGeometryName(i.geometry_name),r.setGeometry(uc(s,e)),"id"in i&&r.setId(i.id),i.properties&&r.setProperties(i.properties,!0),r}readFeaturesFromObject(t,e){const i=t;let s=null;if(i.type==="FeatureCollection"){const r=t;s=[];const o=r.features;for(let a=0,l=o.length;a<l;++a){const h=this.readFeatureFromObject(o[a],e);h&&s.push(h)}}else s=[this.readFeatureFromObject(t,e)];return s.flat()}readGeometryFromObject(t,e){return cT(t,e)}readProjectionFromObject(t){const e=t.crs;let i;if(e)if(e.type=="name")i=at(e.properties.name);else if(e.type==="EPSG")i=at("EPSG:"+e.properties.code);else throw new Error("Unknown SRS type");else i=this.dataProjection;return i}writeFeatureObject(t,e){e=this.adaptOptions(e);const i={type:"Feature",geometry:null,properties:null},s=t.getId();if(s!==void 0&&(i.id=s),!t.hasProperties())return i;const r=t.getProperties(),o=t.getGeometry();return o&&(i.geometry=fh(o,e),delete r[t.getGeometryName()]),es(r)||(i.properties=r),i}writeFeaturesObject(t,e){e=this.adaptOptions(e);const i=[];for(let s=0,r=t.length;s<r;++s)i.push(this.writeFeatureObject(t[s],e));return{type:"FeatureCollection",features:i}}writeGeometryObject(t,e){return fh(t,this.adaptOptions(e))}}function dc(n,t){if(!n)return null;let e;switch(n.type){case"Point":{e=dT(n);break}case"LineString":{e=gT(n);break}case"Polygon":{e=yT(n);break}case"MultiPoint":{e=mT(n);break}case"MultiLineString":{e=fT(n);break}case"MultiPolygon":{e=wT(n);break}case"GeometryCollection":{e=uT(n);break}default:throw new Error("Unsupported GeoJSON type: "+n.type)}return e}function cT(n,t){const e=dc(n);return uc(e,t)}function uT(n,t){return n.geometries.map(function(i){return dc(i)})}function dT(n){const t=n.coordinates;return{type:"Point",flatCoordinates:t,layout:us(t.length)}}function gT(n){const t=n.coordinates,e=t.flat();return{type:"LineString",flatCoordinates:e,ends:[e.length],layout:us(t[0].length)}}function fT(n){const t=n.coordinates,e=t[0][0].length,i=[],s=yo(i,0,t,e);return{type:"MultiLineString",flatCoordinates:i,ends:s,layout:us(e)}}function mT(n){const t=n.coordinates;return{type:"MultiPoint",flatCoordinates:t.flat(),layout:us(t[0].length)}}function wT(n){const t=n.coordinates,e=[],i=t[0][0][0].length,s=eg(e,0,t,i);return{type:"MultiPolygon",flatCoordinates:e,ends:s,layout:us(i)}}function yT(n){const t=n.coordinates,e=[],i=t[0][0].length,s=yo(e,0,t,i);return{type:"Polygon",flatCoordinates:e,ends:s,layout:us(i)}}function fh(n,t){n=cc(n,!0,t);const e=n.getType();let i;switch(e){case"Point":{i=CT(n);break}case"LineString":{i=pT(n);break}case"Polygon":{i=RT(n,t);break}case"MultiPoint":{i=TT(n);break}case"MultiLineString":{i=xT(n);break}case"MultiPolygon":{i=MT(n,t);break}case"GeometryCollection":{i=_T(n,t);break}case"Circle":{i={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+e)}return i}function _T(n,t){return t=Object.assign({},t),delete t.featureProjection,{type:"GeometryCollection",geometries:n.getGeometriesArray().map(function(i){return fh(i,t)})}}function pT(n,t){return{type:"LineString",coordinates:n.getCoordinates()}}function xT(n,t){return{type:"MultiLineString",coordinates:n.getCoordinates()}}function TT(n,t){return{type:"MultiPoint",coordinates:n.getCoordinates()}}function MT(n,t){let e;return t&&(e=t.rightHanded),{type:"MultiPolygon",coordinates:n.getCoordinates(e)}}function CT(n,t){return{type:"Point",coordinates:n.getCoordinates()}}function RT(n,t){let e;return t&&(e=t.rightHanded),{type:"Polygon",coordinates:n.getCoordinates(e)}}function ET(n,t){return Qg().createElementNS(n,t)}function gc(n,t){return Jg(n,t,[]).join("")}function Jg(n,t,e){if(n.nodeType==Node.CDATA_SECTION_NODE||n.nodeType==Node.TEXT_NODE)e.push(n.nodeValue);else{let i;for(i=n.firstChild;i;i=i.nextSibling)Jg(i,t,e)}return e}function vT(n){return"documentElement"in n}function j2(n,t,e){return n.getAttributeNS(t,e)||""}function IT(n){return new DOMParser().parseFromString(n,"application/xml")}function mh(n,t){return(function(e,i){const s=n.call(t!==void 0?t:this,e,i);s!==void 0&&i[i.length-1].push(s)})}function q2(n,t){return(function(e,i){const s=n.call(t!==void 0?t:this,e,i);s!==void 0&&(i[i.length-1]=s)})}function We(n,t,e){return(function(i,s){const r=n.call(this,i,s);if(r!==void 0){const o=s[s.length-1],a=i.localName;let l;a in o?l=o[a]:(l=[],o[a]=l),l.push(r)}})}function U(n,t,e){return(function(i,s){const r=n.call(this,i,s);if(r!==void 0){const o=s[s.length-1],a=i.localName;o[a]=r}})}function Z2(n,t){return function(e,i,s){n.call(t!==void 0?t:this,e,i,s),s[s.length-1].node.appendChild(e)}}function bT(n,t){return(function(e,i,s){const o=i[i.length-1].node;let a=n;a===void 0&&(a=s);const l=t!==void 0?t:o.namespaceURI;return ET(l,a)})}const $2=bT();function It(n,t,e){e=e!==void 0?e:{};let i,s;for(i=0,s=n.length;i<s;++i)e[n[i]]=t;return e}function LT(n,t,e,i){let s;for(s=t.firstElementChild;s;s=s.nextElementSibling){const r=n[s.namespaceURI];if(r!==void 0){const o=r[s.localName];o!==void 0&&o.call(i,s,e)}}}function Pt(n,t,e,i,s){return i.push(n),LT(t,e,i,s),i.pop()}function ST(n,t,e,i,s,r){const o=(s!==void 0?s:e).length;let a,l;for(let h=0;h<o;++h)a=e[h],a!==void 0&&(l=t.call(r!==void 0?r:this,a,i,s!==void 0?s[h]:void 0),l!==void 0&&n[l.namespaceURI][l.localName].call(r,l,a,i))}function J2(n,t,e,i,s,r,o){return s.push(n),ST(t,e,i,s,r,o),s.pop()}let Il;function Q2(){return Il===void 0&&typeof XMLSerializer<"u"&&(Il=new XMLSerializer),Il}let bl;function Qg(){return bl===void 0&&typeof document<"u"&&(bl=document.implementation.createDocument("","",null)),bl}class tf{read(t){if(!t)return null;if(typeof t=="string"){const e=IT(t);return this.readFromDocument(e)}return vT(t)?this.readFromDocument(t):this.readFromNode(t)}readFromDocument(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readFromNode(e);return null}readFromNode(t){q()}}const NT="http://www.w3.org/1999/xlink";function fc(n){return n.getAttributeNS(NT,"href")}function AT(n){const t=gc(n,!1);return OT(t)}function OT(n){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(n);if(t)return parseFloat(t[1])}function Tn(n){const t=gc(n,!1);return PT(t)}function PT(n){const t=/^\s*(\d+)\s*$/.exec(n);if(t)return parseInt(t[1],10)}function ut(n){return gc(n,!1).trim()}function tR(n,t){n.appendChild(Qg().createTextNode(t))}const Oe=[null,"http://www.opengis.net/ows/1.1"],KT=It(Oe,{ServiceIdentification:U(oM),ServiceProvider:U(lM),OperationsMetadata:U(sM)});class DT extends tf{constructor(){super()}readFromNode(t){const e=Pt({},KT,t,[]);return e||null}}const FT=It(Oe,{DeliveryPoint:U(ut),City:U(ut),AdministrativeArea:U(ut),PostalCode:U(ut),Country:U(ut),ElectronicMailAddress:U(ut)}),kT=It(Oe,{Value:We(hM)}),GT=It(Oe,{AllowedValues:U($T)}),WT=It(Oe,{Phone:U(rM),Address:U(ZT)}),zT=It(Oe,{HTTP:U(iM)}),BT=It(Oe,{Get:We(eM),Post:void 0}),HT=It(Oe,{DCP:U(tM)}),YT=It(Oe,{Operation:nM}),XT=It(Oe,{Voice:U(ut),Facsimile:U(ut)}),UT=It(Oe,{Constraint:We(JT)}),VT=It(Oe,{IndividualName:U(ut),PositionName:U(ut),ContactInfo:U(QT)}),jT=It(Oe,{Abstract:U(ut),AccessConstraints:U(ut),Fees:U(ut),Title:U(ut),ServiceTypeVersion:U(ut),ServiceType:U(ut)}),qT=It(Oe,{ProviderName:U(ut),ProviderSite:U(fc),ServiceContact:U(aM)});function ZT(n,t){return Pt({},FT,n,t)}function $T(n,t){return Pt({},kT,n,t)}function JT(n,t){const e=n.getAttribute("name");if(e)return Pt({name:e},GT,n,t)}function QT(n,t){return Pt({},WT,n,t)}function tM(n,t){return Pt({},zT,n,t)}function eM(n,t){const e=fc(n);if(e)return Pt({href:e},UT,n,t)}function iM(n,t){return Pt({},BT,n,t)}function nM(n,t){const e=n.getAttribute("name"),i=Pt({},HT,n,t);if(!i)return;const s=t[t.length-1];s[e]=i}function sM(n,t){return Pt({},YT,n,t)}function rM(n,t){return Pt({},XT,n,t)}function oM(n,t){return Pt({},jT,n,t)}function aM(n,t){return Pt({},VT,n,t)}function lM(n,t){return Pt({},qT,n,t)}function hM(n,t){return ut(n)}const Wi=[null,"http://www.opengis.net/wmts/1.0"],mr=[null,"http://www.opengis.net/ows/1.1"],cM=It(Wi,{Contents:U(MM)});class uM extends tf{constructor(){super(),this.owsParser_=new DT}readFromNode(t){let e=t.getAttribute("version");e&&(e=e.trim());let i=this.owsParser_.readFromNode(t);return i?(i.version=e,i=Pt(i,cM,t,[]),i||null):null}}const dM=It(Wi,{Layer:We(CM),TileMatrixSet:We(RM)}),gM=It(Wi,{Style:We(EM),Format:We(ut),TileMatrixSetLink:We(vM),Dimension:We(IM),ResourceURL:We(bM)},It(mr,{Title:U(ut),Abstract:U(ut),WGS84BoundingBox:U(ef),Identifier:U(ut)})),fM=It(Wi,{LegendURL:We(LM)},It(mr,{Title:U(ut),Identifier:U(ut)})),mM=It(Wi,{TileMatrixSet:U(ut),TileMatrixSetLimits:U(NM)}),wM=It(Wi,{TileMatrixLimits:mh(AM)}),yM=It(Wi,{TileMatrix:U(ut),MinTileRow:U(Tn),MaxTileRow:U(Tn),MinTileCol:U(Tn),MaxTileCol:U(Tn)}),_M=It(Wi,{Default:U(ut),Value:We(ut)},It(mr,{Identifier:U(ut)})),pM=It(mr,{LowerCorner:mh(wh),UpperCorner:mh(wh)}),xM=It(Wi,{WellKnownScaleSet:U(ut),TileMatrix:We(SM)},It(mr,{SupportedCRS:U(ut),Identifier:U(ut),BoundingBox:U(ef)})),TM=It(Wi,{TopLeftCorner:U(wh),ScaleDenominator:U(AT),TileWidth:U(Tn),TileHeight:U(Tn),MatrixWidth:U(Tn),MatrixHeight:U(Tn)},It(mr,{Identifier:U(ut)}));function MM(n,t){return Pt({},dM,n,t)}function CM(n,t){return Pt({},gM,n,t)}function RM(n,t){return Pt({},xM,n,t)}function EM(n,t){const e=Pt({},fM,n,t);if(!e)return;const i=n.getAttribute("isDefault")==="true";return e.isDefault=i,e}function vM(n,t){return Pt({},mM,n,t)}function IM(n,t){return Pt({},_M,n,t)}function bM(n,t){const e=n.getAttribute("format"),i=n.getAttribute("template"),s=n.getAttribute("resourceType"),r={};return e&&(r.format=e),i&&(r.template=i),s&&(r.resourceType=s),r}function ef(n,t){const e=Pt([],pM,n,t);if(e.length==2)return Hl(e)}function LM(n,t){const e={};return e.format=n.getAttribute("format"),e.href=fc(n),e}function wh(n,t){const e=ut(n).split(/\s+/);if(!e||e.length!=2)return;const i=+e[0],s=+e[1];if(!(isNaN(i)||isNaN(s)))return[i,s]}function SM(n,t){return Pt({},TM,n,t)}function NM(n,t){return Pt([],wM,n,t)}function AM(n,t){return Pt({},yM,n,t)}const OM=`<?xml version="1.0" encoding="utf-8"?><Capabilities xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0/wmtsGetCapabilities_response.xsd http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0 http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0/inspire_vs_ows_11.xsd" version="1.0.0" xmlns="http://www.opengis.net/wmts/1.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gml="http://www.opengis.net/gml" xmlns:inspire_vs="http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0" xmlns:inspire_common="http://inspire.ec.europa.eu/schemas/common/1.0">
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
    `,PM=new uM,mc=PM.read(OM),KM="BPL2008VL",nf=()=>mc.Contents.TileMatrixSet.find(({Identifier:n})=>n===KM),DM=()=>nf()?.BoundingBox,sf=()=>nf()?.SupportedCRS||"EPSG:3812",FM="BPL72VL",rf=()=>mc.Contents.TileMatrixSet.find(({Identifier:n})=>n===FM),kM=()=>rf()?.BoundingBox,of=()=>rf()?.SupportedCRS||"EPSG:31370",GM=()=>mc.Contents.Layer.find(({Identifier:n})=>n==="grb_bsk"),WM=()=>GM().WGS84BoundingBox,zM=()=>"EPSG:4326";function BM(n,t,e,i,s){af(n,t,e||0,i||n.length-1,s||HM)}function af(n,t,e,i,s){for(;i>e;){if(i-e>600){var r=i-e+1,o=t-e+1,a=Math.log(r),l=.5*Math.exp(2*a/3),h=.5*Math.sqrt(a*l*(r-l)/r)*(o-r/2<0?-1:1),c=Math.max(e,Math.floor(t-o*l/r+h)),u=Math.min(i,Math.floor(t+(r-o)*l/r+h));af(n,t,c,u,s)}var d=n[t],g=e,f=i;for(Sr(n,e,t),s(n[i],d)>0&&Sr(n,e,i);g<f;){for(Sr(n,g,f),g++,f--;s(n[g],d)<0;)g++;for(;s(n[f],d)>0;)f--}s(n[e],d)===0?Sr(n,e,f):(f++,Sr(n,f,i)),f<=t&&(e=f+1),t<=f&&(i=f-1)}}function Sr(n,t,e){var i=n[t];n[t]=n[e],n[e]=i}function HM(n,t){return n<t?-1:n>t?1:0}let lf=class{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let e=this.data;const i=[];if(!qo(t,e))return i;const s=this.toBBox,r=[];for(;e;){for(let o=0;o<e.children.length;o++){const a=e.children[o],l=e.leaf?s(a):a;qo(t,l)&&(e.leaf?i.push(a):Sl(t,l)?this._all(a,i):r.push(a))}e=r.pop()}return i}collides(t){let e=this.data;if(!qo(t,e))return!1;const i=[];for(;e;){for(let s=0;s<e.children.length;s++){const r=e.children[s],o=e.leaf?this.toBBox(r):r;if(qo(t,o)){if(e.leaf||Sl(t,o))return!0;i.push(r)}}e=i.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let i=0;i<t.length;i++)this.insert(t[i]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=e;else if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const i=this.data;this.data=e,e=i}this._insert(e,this.data.height-e.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=Is([]),this}remove(t,e){if(!t)return this;let i=this.data;const s=this.toBBox(t),r=[],o=[];let a,l,h;for(;i||r.length;){if(i||(i=r.pop(),l=r[r.length-1],a=o.pop(),h=!0),i.leaf){const c=YM(t,i.children,e);if(c!==-1)return i.children.splice(c,1),r.push(i),this._condense(r),this}!h&&!i.leaf&&Sl(i,s)?(r.push(i),o.push(a),a=0,l=i,i=i.children[0]):l?(a++,i=l.children[a],h=!1):i=null}return this}toBBox(t){return t}compareMinX(t,e){return t.minX-e.minX}compareMinY(t,e){return t.minY-e.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){const i=[];for(;t;)t.leaf?e.push(...t.children):i.push(...t.children),t=i.pop();return e}_build(t,e,i,s){const r=i-e+1;let o=this._maxEntries,a;if(r<=o)return a=Is(t.slice(e,i+1)),ps(a,this.toBBox),a;s||(s=Math.ceil(Math.log(r)/Math.log(o)),o=Math.ceil(r/Math.pow(o,s-1))),a=Is([]),a.leaf=!1,a.height=s;const l=Math.ceil(r/o),h=l*Math.ceil(Math.sqrt(o));Uu(t,e,i,h,this.compareMinX);for(let c=e;c<=i;c+=h){const u=Math.min(c+h-1,i);Uu(t,c,u,l,this.compareMinY);for(let d=c;d<=u;d+=l){const g=Math.min(d+l-1,u);a.children.push(this._build(t,d,g,s-1))}}return ps(a,this.toBBox),a}_chooseSubtree(t,e,i,s){for(;s.push(e),!(e.leaf||s.length-1===i);){let r=1/0,o=1/0,a;for(let l=0;l<e.children.length;l++){const h=e.children[l],c=Ll(h),u=VM(t,h)-c;u<o?(o=u,r=c<r?c:r,a=h):u===o&&c<r&&(r=c,a=h)}e=a||e.children[0]}return e}_insert(t,e,i){const s=i?t:this.toBBox(t),r=[],o=this._chooseSubtree(s,this.data,e,r);for(o.children.push(t),kr(o,s);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(s,r,e)}_split(t,e){const i=t[e],s=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,s);const o=this._chooseSplitIndex(i,r,s),a=Is(i.children.splice(o,i.children.length-o));a.height=i.height,a.leaf=i.leaf,ps(i,this.toBBox),ps(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)}_splitRoot(t,e){this.data=Is([t,e]),this.data.height=t.height+1,this.data.leaf=!1,ps(this.data,this.toBBox)}_chooseSplitIndex(t,e,i){let s,r=1/0,o=1/0;for(let a=e;a<=i-e;a++){const l=Fr(t,0,a,this.toBBox),h=Fr(t,a,i,this.toBBox),c=jM(l,h),u=Ll(l)+Ll(h);c<r?(r=c,s=a,o=u<o?u:o):c===r&&u<o&&(o=u,s=a)}return s||i-e}_chooseSplitAxis(t,e,i){const s=t.leaf?this.compareMinX:XM,r=t.leaf?this.compareMinY:UM,o=this._allDistMargin(t,e,i,s),a=this._allDistMargin(t,e,i,r);o<a&&t.children.sort(s)}_allDistMargin(t,e,i,s){t.children.sort(s);const r=this.toBBox,o=Fr(t,0,e,r),a=Fr(t,i-e,i,r);let l=jo(o)+jo(a);for(let h=e;h<i-e;h++){const c=t.children[h];kr(o,t.leaf?r(c):c),l+=jo(o)}for(let h=i-e-1;h>=e;h--){const c=t.children[h];kr(a,t.leaf?r(c):c),l+=jo(a)}return l}_adjustParentBBoxes(t,e,i){for(let s=i;s>=0;s--)kr(e[s],t)}_condense(t){for(let e=t.length-1,i;e>=0;e--)t[e].children.length===0?e>0?(i=t[e-1].children,i.splice(i.indexOf(t[e]),1)):this.clear():ps(t[e],this.toBBox)}};function YM(n,t,e){if(!e)return t.indexOf(n);for(let i=0;i<t.length;i++)if(e(n,t[i]))return i;return-1}function ps(n,t){Fr(n,0,n.children.length,t,n)}function Fr(n,t,e,i,s){s||(s=Is(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r=t;r<e;r++){const o=n.children[r];kr(s,n.leaf?i(o):o)}return s}function kr(n,t){return n.minX=Math.min(n.minX,t.minX),n.minY=Math.min(n.minY,t.minY),n.maxX=Math.max(n.maxX,t.maxX),n.maxY=Math.max(n.maxY,t.maxY),n}function XM(n,t){return n.minX-t.minX}function UM(n,t){return n.minY-t.minY}function Ll(n){return(n.maxX-n.minX)*(n.maxY-n.minY)}function jo(n){return n.maxX-n.minX+(n.maxY-n.minY)}function VM(n,t){return(Math.max(t.maxX,n.maxX)-Math.min(t.minX,n.minX))*(Math.max(t.maxY,n.maxY)-Math.min(t.minY,n.minY))}function jM(n,t){const e=Math.max(n.minX,t.minX),i=Math.max(n.minY,t.minY),s=Math.min(n.maxX,t.maxX),r=Math.min(n.maxY,t.maxY);return Math.max(0,s-e)*Math.max(0,r-i)}function Sl(n,t){return n.minX<=t.minX&&n.minY<=t.minY&&t.maxX<=n.maxX&&t.maxY<=n.maxY}function qo(n,t){return t.minX<=n.maxX&&t.minY<=n.maxY&&t.maxX>=n.minX&&t.maxY>=n.minY}function Is(n){return{children:n,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Uu(n,t,e,i,s){const r=[t,e];for(;r.length;){if(e=r.pop(),t=r.pop(),e-t<=i)continue;const o=t+Math.ceil((e-t)/i/2)*i;BM(n,o,t,e,s),r.push(t,o,o,e)}}const Q={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class Ua{constructor(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=ze(t.scale),this.displacement_=t.displacement,this.declutterMode_=t.declutterMode}clone(){const t=this.getScale();return new Ua({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return q()}getImage(t){return q()}getHitDetectionImage(){return q()}getPixelRatio(t){return 1}getImageState(){return q()}getImageSize(){return q()}getOrigin(){return q()}getSize(){return q()}setDisplacement(t){this.displacement_=t}setOpacity(t){this.opacity_=t}setRotateWithView(t){this.rotateWithView_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=ze(t)}listenImageChange(t){q()}load(){q()}unlistenImageChange(t){q()}}function bi(n){return Array.isArray(n)?Zd(n):n}class Va extends Ua{constructor(t){const e=t.rotateWithView!==void 0?t.rotateWithView:!1;super({opacity:1,rotateWithView:e,rotation:t.rotation!==void 0?t.rotation:0,scale:t.scale!==void 0?t.scale:1,displacement:t.displacement!==void 0?t.displacement:[0,0],declutterMode:t.declutterMode}),this.canvases_,this.hitDetectionCanvas_=null,this.fill_=t.fill!==void 0?t.fill:null,this.origin_=[0,0],this.points_=t.points,this.radius_=t.radius!==void 0?t.radius:t.radius1,this.radius2_=t.radius2,this.angle_=t.angle!==void 0?t.angle:0,this.stroke_=t.stroke!==void 0?t.stroke:null,this.size_,this.renderOptions_,this.render()}clone(){const t=this.getScale(),e=new Va({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return e.setOpacity(this.getOpacity()),e}getAnchor(){const t=this.size_,e=this.getDisplacement(),i=this.getScaleArray();return[t[0]/2-e[0]/i[0],t[1]/2+e[1]/i[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(t){this.fill_=t,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(t){let e=this.canvases_[t];if(!e){const i=this.renderOptions_,s=pe(i.size*t,i.size*t);this.draw_(i,s,t),e=s.canvas,this.canvases_[t]=e}return e}getPixelRatio(t){return t}getImageSize(){return this.size_}getImageState(){return Q.LOADED}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius_}getRadius2(){return this.radius2_}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t,this.render()}listenImageChange(t){}load(){}unlistenImageChange(t){}calculateLineJoinSize_(t,e,i){if(e===0||this.points_===1/0||t!=="bevel"&&t!=="miter")return e;let s=this.radius_,r=this.radius2_===void 0?s:this.radius2_;if(s<r){const C=s;s=r,r=C}const o=this.radius2_===void 0?this.points_:this.points_*2,a=2*Math.PI/o,l=r*Math.sin(a),h=Math.sqrt(r*r-l*l),c=s-h,u=Math.sqrt(l*l+c*c),d=u/l;if(t==="miter"&&d<=i)return d*e;const g=e/2/d,f=e/2*(c/u),w=Math.sqrt((s+g)*(s+g)+f*f)-s;if(this.radius2_===void 0||t==="bevel")return w*2;const _=s*Math.sin(a),p=Math.sqrt(s*s-_*_),x=r-p,M=Math.sqrt(_*_+x*x)/_;if(M<=i){const C=M*e/2-r-s;return 2*Math.max(w,C)}return w*2}createRenderOptions(){let t=Qs,e=tr,i=0,s=null,r=0,o,a=0;this.stroke_&&(o=bi(this.stroke_.getColor()??qr),a=this.stroke_.getWidth()??$r,s=this.stroke_.getLineDash(),r=this.stroke_.getLineDashOffset()??0,e=this.stroke_.getLineJoin()??tr,t=this.stroke_.getLineCap()??Qs,i=this.stroke_.getMiterLimit()??jr);const l=this.calculateLineJoinSize_(e,a,i),h=Math.max(this.radius_,this.radius2_||0),c=Math.ceil(2*h+l);return{strokeStyle:o,strokeWidth:a,size:c,lineCap:t,lineDash:s,lineDashOffset:r,lineJoin:e,miterLimit:i}}render(){this.renderOptions_=this.createRenderOptions();const t=this.renderOptions_.size;this.canvases_={},this.hitDetectionCanvas_=null,this.size_=[t,t]}draw_(t,e,i){if(e.scale(i,i),e.translate(t.size/2,t.size/2),this.createPath_(e),this.fill_){let s=this.fill_.getColor();s===null&&(s=Ie),e.fillStyle=bi(s),e.fill()}t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}createHitDetectionCanvas_(t){let e;if(this.fill_){let i=this.fill_.getColor(),s=0;typeof i=="string"&&(i=aa(i)),i===null?s=1:Array.isArray(i)&&(s=i.length===4?i[3]:1),s===0&&(e=pe(t.size,t.size),this.drawHitDetectionCanvas_(t,e))}return e?e.canvas:this.getImage(1)}createPath_(t){let e=this.points_;const i=this.radius_;if(e===1/0)t.arc(0,0,i,0,2*Math.PI);else{const s=this.radius2_===void 0?i:this.radius2_;this.radius2_!==void 0&&(e*=2);const r=this.angle_-Math.PI/2,o=2*Math.PI/e;for(let a=0;a<e;a++){const l=r+a*o,h=a%2===0?i:s;t.lineTo(h*Math.cos(l),h*Math.sin(l))}t.closePath()}}drawHitDetectionCanvas_(t,e){e.translate(t.size/2,t.size/2),this.createPath_(e),e.fillStyle=Ie,e.fill(),t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}}class vo extends Va{constructor(t){t=t||{radius:5},super({points:1/0,fill:t.fill,radius:t.radius,stroke:t.stroke,scale:t.scale!==void 0?t.scale:1,rotation:t.rotation!==void 0?t.rotation:0,rotateWithView:t.rotateWithView!==void 0?t.rotateWithView:!1,displacement:t.displacement!==void 0?t.displacement:[0,0],declutterMode:t.declutterMode})}clone(){const t=this.getScale(),e=new vo({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return e.setOpacity(this.getOpacity()),e}setRadius(t){this.radius_=t,this.render()}}class Qe{constructor(t){t=t||{},this.color_=t.color!==void 0?t.color:null}clone(){const t=this.getColor();return new Qe({color:Array.isArray(t)?t.slice():t||void 0})}getColor(){return this.color_}setColor(t){this.color_=t}}class gi{constructor(t){t=t||{},this.color_=t.color!==void 0?t.color:null,this.lineCap_=t.lineCap,this.lineDash_=t.lineDash!==void 0?t.lineDash:null,this.lineDashOffset_=t.lineDashOffset,this.lineJoin_=t.lineJoin,this.miterLimit_=t.miterLimit,this.width_=t.width}clone(){const t=this.getColor();return new gi({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getWidth(){return this.width_}setColor(t){this.color_=t}setLineCap(t){this.lineCap_=t}setLineDash(t){this.lineDash_=t}setLineDashOffset(t){this.lineDashOffset_=t}setLineJoin(t){this.lineJoin_=t}setMiterLimit(t){this.miterLimit_=t}setWidth(t){this.width_=t}}class Se{constructor(t){t=t||{},this.geometry_=null,this.geometryFunction_=Vu,t.geometry!==void 0&&this.setGeometry(t.geometry),this.fill_=t.fill!==void 0?t.fill:null,this.image_=t.image!==void 0?t.image:null,this.renderer_=t.renderer!==void 0?t.renderer:null,this.hitDetectionRenderer_=t.hitDetectionRenderer!==void 0?t.hitDetectionRenderer:null,this.stroke_=t.stroke!==void 0?t.stroke:null,this.text_=t.text!==void 0?t.text:null,this.zIndex_=t.zIndex}clone(){let t=this.getGeometry();return t&&typeof t=="object"&&(t=t.clone()),new Se({geometry:t??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(t){this.renderer_=t}setHitDetectionRenderer(t){this.hitDetectionRenderer_=t}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(t){this.fill_=t}getImage(){return this.image_}setImage(t){this.image_=t}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t}getText(){return this.text_}setText(t){this.text_=t}getZIndex(){return this.zIndex_}setGeometry(t){typeof t=="function"?this.geometryFunction_=t:typeof t=="string"?this.geometryFunction_=function(e){return e.get(t)}:t?t!==void 0&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=Vu,this.geometry_=t}setZIndex(t){this.zIndex_=t}}function qM(n){let t;if(typeof n=="function")t=n;else{let e;Array.isArray(n)?e=n:(mt(typeof n.getZIndex=="function","Expected an `Style` or an array of `Style`"),e=[n]),t=function(){return e}}return t}let Nl=null;function ZM(n,t){if(!Nl){const e=new Qe({color:"rgba(255,255,255,0.4)"}),i=new gi({color:"#3399CC",width:1.25});Nl=[new Se({image:new vo({fill:e,stroke:i,radius:5}),fill:e,stroke:i})]}return Nl}function iR(){const n={},t=[255,255,255,1],e=[0,153,255,1],i=3;return n.Polygon=[new Se({fill:new Qe({color:[255,255,255,.5]})})],n.MultiPolygon=n.Polygon,n.LineString=[new Se({stroke:new gi({color:t,width:i+2})}),new Se({stroke:new gi({color:e,width:i})})],n.MultiLineString=n.LineString,n.Circle=n.Polygon.concat(n.LineString),n.Point=[new Se({image:new vo({radius:i*2,fill:new Qe({color:e}),stroke:new gi({color:t,width:i/2})}),zIndex:1/0})],n.MultiPoint=n.Point,n.GeometryCollection=n.Polygon.concat(n.LineString,n.Point),n}function Vu(n){return n.getGeometry()}class hf extends uo{constructor(t,e,i,s){super(),this.extent=t,this.pixelRatio_=i,this.resolution=e,this.state=typeof s=="function"?Q.IDLE:s,this.image_=null,this.loader=typeof s=="function"?s:null}changed(){this.dispatchEvent($.CHANGE)}getExtent(){return this.extent}getImage(){return this.image_}getPixelRatio(){return this.pixelRatio_}getResolution(){return this.resolution}getState(){return this.state}load(){if(this.state==Q.IDLE&&this.loader){this.state=Q.LOADING,this.changed();const t=this.getResolution(),e=Array.isArray(t)?t[0]:t;dm(()=>this.loader(this.getExtent(),e,this.getPixelRatio())).then(i=>{"image"in i&&(this.image_=i.image),"extent"in i&&(this.extent=i.extent),"resolution"in i&&(this.resolution=i.resolution),"pixelRatio"in i&&(this.pixelRatio_=i.pixelRatio),(i instanceof HTMLImageElement||i instanceof ImageBitmap||i instanceof HTMLCanvasElement||i instanceof HTMLVideoElement)&&(this.image_=i),this.state=Q.LOADED}).catch(i=>{this.state=Q.ERROR,console.error(i)}).finally(()=>this.changed())}}setImage(t){this.image_=t}setResolution(t){this.resolution=t}}function $M(n,t,e){const i=n;let s=!0,r=!1,o=!1;const a=[Hr(i,$.LOAD,function(){o=!0,r||t()})];return i.src&&Sh?(r=!0,i.decode().then(function(){s&&t()}).catch(function(l){s&&(o?t():e())})):a.push(Hr(i,$.ERROR,e)),function(){s=!1,a.forEach(St)}}function JM(n,t){return new Promise((e,i)=>{function s(){o(),e(n)}function r(){o(),i(new Error("Image load error"))}function o(){n.removeEventListener("load",s),n.removeEventListener("error",r)}n.addEventListener("load",s),n.addEventListener("error",r)})}function cf(n,t){return t&&(n.src=t),n.src&&Sh?new Promise((e,i)=>n.decode().then(()=>e(n)).catch(s=>n.complete&&n.width?e(n):i(s))):JM(n)}function QM(n,t){return t&&(n.src=t),n.src&&Sh&&_m?n.decode().then(()=>createImageBitmap(n)).catch(e=>{if(n.complete&&n.width)return n;throw e}):cf(n)}let Nr=null;class t1 extends uo{constructor(t,e,i,s,r){super(),this.hitDetectionImage_=null,this.image_=t,this.crossOrigin_=i,this.canvas_={},this.color_=r,this.imageState_=s===void 0?Q.IDLE:s,this.size_=t&&t.width&&t.height?[t.width,t.height]:null,this.src_=e,this.tainted_}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===Q.LOADED){Nr||(Nr=pe(1,1,void 0,{willReadFrequently:!0})),Nr.drawImage(this.image_,0,0);try{Nr.getImageData(0,0,1,1),this.tainted_=!1}catch{Nr=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent($.CHANGE)}handleImageError_(){this.imageState_=Q.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=Q.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(t){return this.image_||this.initializeImage_(),this.replaceColor_(t),this.canvas_[t]?this.canvas_[t]:this.image_}getPixelRatio(t){return this.replaceColor_(t),this.canvas_[t]?t:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){const t=this.size_[0],e=this.size_[1],i=pe(t,e);i.fillRect(0,0,t,e),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===Q.IDLE){this.image_||this.initializeImage_(),this.imageState_=Q.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&cf(this.image_,this.src_).then(t=>{this.image_=t,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(t){if(!this.color_||this.canvas_[t]||this.imageState_!==Q.LOADED)return;const e=this.image_,i=document.createElement("canvas");i.width=Math.ceil(e.width*t),i.height=Math.ceil(e.height*t);const s=i.getContext("2d");s.scale(t,t),s.drawImage(e,0,0),s.globalCompositeOperation="multiply",s.fillStyle=jd(this.color_),s.fillRect(0,0,i.width/t,i.height/t),s.globalCompositeOperation="destination-in",s.drawImage(e,0,0),this.canvas_[t]=i}}function e1(n,t,e,i,s){let r=t===void 0?void 0:la.get(t,e,s);return r||(r=new t1(n,n instanceof HTMLImageElement?n.src||void 0:t,e,i,s),la.set(t,e,s,r)),r}function ju(n,t,e,i){return e!==void 0&&i!==void 0?[e/n,i/t]:e!==void 0?e/n:i!==void 0?i/t:1}class ja extends Ua{constructor(t){t=t||{};const e=t.opacity!==void 0?t.opacity:1,i=t.rotation!==void 0?t.rotation:0,s=t.scale!==void 0?t.scale:1,r=t.rotateWithView!==void 0?t.rotateWithView:!1;super({opacity:e,rotation:i,scale:s,displacement:t.displacement!==void 0?t.displacement:[0,0],rotateWithView:r,declutterMode:t.declutterMode}),this.anchor_=t.anchor!==void 0?t.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=t.anchorOrigin!==void 0?t.anchorOrigin:"top-left",this.anchorXUnits_=t.anchorXUnits!==void 0?t.anchorXUnits:"fraction",this.anchorYUnits_=t.anchorYUnits!==void 0?t.anchorYUnits:"fraction",this.crossOrigin_=t.crossOrigin!==void 0?t.crossOrigin:null;const o=t.img!==void 0?t.img:null;let a=t.src;mt(!(a!==void 0&&o),"`image` and `src` cannot be provided at the same time"),(a===void 0||a.length===0)&&o&&(a=o.src||Tt(o)),mt(a!==void 0&&a.length>0,"A defined and non-empty `src` or `image` must be provided"),mt(!((t.width!==void 0||t.height!==void 0)&&t.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let l;if(t.src!==void 0?l=Q.IDLE:o!==void 0&&(o instanceof HTMLImageElement?o.complete?l=o.src?Q.LOADED:Q.IDLE:l=Q.LOADING:l=Q.LOADED),this.color_=t.color!==void 0?aa(t.color):null,this.iconImage_=e1(o,a,this.crossOrigin_,l,this.color_),this.offset_=t.offset!==void 0?t.offset:[0,0],this.offsetOrigin_=t.offsetOrigin!==void 0?t.offsetOrigin:"top-left",this.origin_=null,this.size_=t.size!==void 0?t.size:null,t.width!==void 0||t.height!==void 0){let h,c;if(t.size)[h,c]=t.size;else{const u=this.getImage(1);if(u.width&&u.height)h=u.width,c=u.height;else if(u instanceof HTMLImageElement){this.initialOptions_=t;const d=()=>{if(this.unlistenImageChange(d),!this.initialOptions_)return;const g=this.iconImage_.getSize();this.setScale(ju(g[0],g[1],t.width,t.height))};this.listenImageChange(d);return}}h!==void 0&&this.setScale(ju(h,c,t.width,t.height))}}clone(){let t,e,i;return this.initialOptions_?(e=this.initialOptions_.width,i=this.initialOptions_.height):(t=this.getScale(),t=Array.isArray(t)?t.slice():t),new ja({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:t,width:e,height:i,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let t=this.normalizedAnchor_;if(!t){t=this.anchor_;const s=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!s)return null;t=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(t[0]*=s[0]),this.anchorYUnits_=="fraction"&&(t[1]*=s[1])}if(this.anchorOrigin_!="top-left"){if(!s)return null;t===this.anchor_&&(t=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(t[0]=-t[0]+s[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(t[1]=-t[1]+s[1])}this.normalizedAnchor_=t}const e=this.getDisplacement(),i=this.getScaleArray();return[t[0]-e[0]/i[0],t[1]+e[1]/i[1]]}setAnchor(t){this.anchor_=t,this.normalizedAnchor_=null}getColor(){return this.color_}getImage(t){return this.iconImage_.getImage(t)}getPixelRatio(t){return this.iconImage_.getPixelRatio(t)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let t=this.offset_;if(this.offsetOrigin_!="top-left"){const e=this.getSize(),i=this.iconImage_.getSize();if(!e||!i)return null;t=t.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(t[0]=i[0]-e[0]-t[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(t[1]=i[1]-e[1]-t[1])}return this.origin_=t,this.origin_}getSrc(){return this.iconImage_.getSrc()}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){const t=this.getScaleArray();if(this.size_)return this.size_[0]*t[0];if(this.iconImage_.getImageState()==Q.LOADED)return this.iconImage_.getSize()[0]*t[0]}getHeight(){const t=this.getScaleArray();if(this.size_)return this.size_[1]*t[1];if(this.iconImage_.getImageState()==Q.LOADED)return this.iconImage_.getSize()[1]*t[1]}setScale(t){delete this.initialOptions_,super.setScale(t)}listenImageChange(t){this.iconImage_.addEventListener($.CHANGE,t)}load(){this.iconImage_.load()}unlistenImageChange(t){this.iconImage_.removeEventListener($.CHANGE,t)}}const i1="#333";class qa{constructor(t){t=t||{},this.font_=t.font,this.rotation_=t.rotation,this.rotateWithView_=t.rotateWithView,this.scale_=t.scale,this.scaleArray_=ze(t.scale!==void 0?t.scale:1),this.text_=t.text,this.textAlign_=t.textAlign,this.justify_=t.justify,this.repeat_=t.repeat,this.textBaseline_=t.textBaseline,this.fill_=t.fill!==void 0?t.fill:new Qe({color:i1}),this.maxAngle_=t.maxAngle!==void 0?t.maxAngle:Math.PI/4,this.placement_=t.placement!==void 0?t.placement:"point",this.overflow_=!!t.overflow,this.stroke_=t.stroke!==void 0?t.stroke:null,this.offsetX_=t.offsetX!==void 0?t.offsetX:0,this.offsetY_=t.offsetY!==void 0?t.offsetY:0,this.backgroundFill_=t.backgroundFill?t.backgroundFill:null,this.backgroundStroke_=t.backgroundStroke?t.backgroundStroke:null,this.padding_=t.padding===void 0?null:t.padding}clone(){const t=this.getScale();return new qa({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}setOverflow(t){this.overflow_=t}setFont(t){this.font_=t}setMaxAngle(t){this.maxAngle_=t}setOffsetX(t){this.offsetX_=t}setOffsetY(t){this.offsetY_=t}setPlacement(t){this.placement_=t}setRepeat(t){this.repeat_=t}setRotateWithView(t){this.rotateWithView_=t}setFill(t){this.fill_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=ze(t!==void 0?t:1)}setStroke(t){this.stroke_=t}setText(t){this.text_=t}setTextAlign(t){this.textAlign_=t}setJustify(t){this.justify_=t}setTextBaseline(t){this.textBaseline_=t}setBackgroundFill(t){this.backgroundFill_=t}setBackgroundStroke(t){this.backgroundStroke_=t}setPadding(t){this.padding_=t}}let wr=0;const yr=0,Gt=1<<wr++,Y=1<<wr++,ci=1<<wr++,oe=1<<wr++,An=1<<wr++,Ce=Math.pow(2,wr)-1,uf={[Gt]:"boolean",[Y]:"number",[ci]:"string",[oe]:"color",[An]:"number[]"},n1=Object.keys(uf).map(Number).sort(bn);function le(n){const t=[];for(const e of n1)s1(n,e)&&t.push(uf[e]);return t.length===0?"untyped":t.length<3?t.join(" or "):t.slice(0,-1).join(", ")+", or "+t[t.length-1]}function s1(n,t){return(n&t)===t}function Ai(n,t){return!!(n&t)}function Za(n,t){return n===t}class Mn{constructor(t,e){this.type=t,this.value=e}}class r1{constructor(t,e,...i){this.type=t,this.operator=e,this.args=i}}function df(){return{variables:new Set,properties:new Set,featureId:!1,style:{}}}function o1(n){switch(n){case"string":return ci;case"color":return oe;case"number":return Y;case"boolean":return Gt;case"number[]":return An;default:throw new Error(`Unrecognized type hint: ${n}`)}}function Et(n,t,e){switch(typeof n){case"boolean":return new Mn(Gt,n);case"number":return new Mn(Y,n);case"string":{let s=ci;return c0(n)&&(s|=oe),Za(s&e,yr)||(s&=e),new Mn(s,n)}}if(!Array.isArray(n))throw new Error("Expression must be an array or a primitive value");if(n.length===0)throw new Error("Empty expression");if(typeof n[0]=="string")return y1(n,t,e);for(const s of n)if(typeof s!="number")throw new Error("Expected an array of numbers");let i=An;return(n.length===3||n.length===4)&&(i|=oe),e&&(i&=e),new Mn(i,n)}const L={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette"},a1={[L.Get]:tt(([n,t])=>t!==void 0?o1(t.value):Ce,st(1,2),l1),[L.Var]:tt(([n])=>n.type,st(1,1),h1),[L.Id]:tt(Y|ci,Ar,c1),[L.Concat]:tt(ci,st(2,1/0),_t(Ce)),[L.GeometryType]:tt(ci,Ar),[L.Resolution]:tt(Y,Ar),[L.Zoom]:tt(Y,Ar),[L.Time]:tt(Y,Ar),[L.Any]:tt(Gt,st(2,1/0),_t(Gt)),[L.All]:tt(Gt,st(2,1/0),_t(Gt)),[L.Not]:tt(Gt,st(1,1),_t(Gt)),[L.Equal]:tt(Gt,st(2,2),_t(Ce),Hn),[L.NotEqual]:tt(Gt,st(2,2),_t(Ce),Hn),[L.GreaterThan]:tt(Gt,st(2,2),_t(Ce),Hn),[L.GreaterThanOrEqualTo]:tt(Gt,st(2,2),_t(Ce),Hn),[L.LessThan]:tt(Gt,st(2,2),_t(Ce),Hn),[L.LessThanOrEqualTo]:tt(Gt,st(2,2),_t(Ce),Hn),[L.Multiply]:tt(n=>{let t=Y|oe;for(let e=0;e<n.length;e++)t&=n[e].type;return t},st(2,1/0),_t(Y|oe),Hn),[L.Divide]:tt(Y,st(2,2),_t(Y)),[L.Add]:tt(Y,st(2,1/0),_t(Y)),[L.Subtract]:tt(Y,st(2,2),_t(Y)),[L.Clamp]:tt(Y,st(3,3),_t(Y)),[L.Mod]:tt(Y,st(2,2),_t(Y)),[L.Pow]:tt(Y,st(2,2),_t(Y)),[L.Abs]:tt(Y,st(1,1),_t(Y)),[L.Floor]:tt(Y,st(1,1),_t(Y)),[L.Ceil]:tt(Y,st(1,1),_t(Y)),[L.Round]:tt(Y,st(1,1),_t(Y)),[L.Sin]:tt(Y,st(1,1),_t(Y)),[L.Cos]:tt(Y,st(1,1),_t(Y)),[L.Atan]:tt(Y,st(1,2),_t(Y)),[L.Sqrt]:tt(Y,st(1,1),_t(Y)),[L.Match]:tt(n=>{let t=Ce;for(let e=2;e<n.length;e+=2)t&=n[e].type;return t&=n[n.length-1].type,t},st(4,1/0),qu,d1),[L.Between]:tt(Gt,st(3,3),_t(Y)),[L.Interpolate]:tt(n=>{let t=oe|Y;for(let e=3;e<n.length;e+=2)t&=n[e].type;return t},st(6,1/0),qu,g1),[L.Case]:tt(n=>{let t=Ce;for(let e=1;e<n.length;e+=2)t&=n[e].type;return t&=n[n.length-1].type,t},st(3,1/0),u1,f1),[L.In]:tt(Gt,st(2,2),m1),[L.Number]:tt(Y,st(1,1/0),_t(Ce)),[L.String]:tt(ci,st(1,1/0),_t(Ce)),[L.Array]:tt(n=>n.length===3||n.length===4?An|oe:An,st(1,1/0),_t(Y)),[L.Color]:tt(oe,st(3,4),_t(Y)),[L.Band]:tt(Y,st(1,3),_t(Y)),[L.Palette]:tt(oe,st(2,2),w1)};function l1(n,t){const e=Et(n[1],t);if(!(e instanceof Mn))throw new Error("Expected a literal argument for get operation");if(typeof e.value!="string")throw new Error("Expected a string argument for get operation");if(t.properties.add(e.value),n.length===3){const i=Et(n[2],t);return[e,i]}return[e]}function h1(n,t,e,i){const s=n[1];if(typeof s!="string")throw new Error("Expected a string argument for var operation");if(t.variables.add(s),!("variables"in t.style)||t.style.variables[s]===void 0)return[new Mn(Ce,s)];const r=t.style.variables[s],o=Et(r,t);if(o.value=s,i&&!Ai(i,o.type))throw new Error(`The variable ${s} has type ${le(o.type)} but the following type was expected: ${le(i)}`);return[o]}function c1(n,t){t.featureId=!0}function Ar(n,t){const e=n[0];if(n.length!==1)throw new Error(`Expected no arguments for ${e} operation`);return[]}function st(n,t){return function(e,i){const s=e[0],r=e.length-1;if(n===t){if(r!==n){const o=n===1?"":"s";throw new Error(`Expected ${n} argument${o} for ${s}, got ${r}`)}}else if(r<n||r>t){const o=t===1/0?`${n} or more`:`${n} to ${t}`;throw new Error(`Expected ${o} arguments for ${s}, got ${r}`)}}}function _t(n){return function(t,e){const i=t[0],s=t.length-1,r=new Array(s);for(let o=0;o<s;++o){const a=Et(t[o+1],e);if(!Ai(n,a.type)){const l=le(n),h=le(a.type);throw new Error(`Unexpected type for argument ${o} of ${i} operation, got ${l} but expected ${h}`)}a.type&=n,r[o]=a}return r}}function Hn(n,t,e){const i=n[0],s=n.length-1;let r=Ce;for(let a=0;a<e.length;++a)r&=e[a].type;if(r===yr)throw new Error(`No common type could be found for arguments of ${i} operation`);const o=new Array(s);for(let a=0;a<s;++a)o[a]=Et(n[a+1],t,r);return o}function u1(n,t){const e=n[0],i=n.length-1;if(i%2===0)throw new Error(`An odd amount of arguments was expected for operation ${e}, got ${JSON.stringify(i)} instead`)}function qu(n,t){const e=n[0],i=n.length-1;if(i%2===1)throw new Error(`An even amount of arguments was expected for operation ${e}, got ${JSON.stringify(i)} instead`)}function d1(n,t,e,i){const s=n.length-1;let o=Et(n[1],t).type;const a=Et(n[n.length-1],t);let l=i!==void 0?i&a.type:a.type;const h=new Array(s-2);for(let u=0;u<s-2;u+=2){const d=Et(n[u+2],t),g=Et(n[u+3],t);o&=d.type,l&=g.type,h[u]=d,h[u+1]=g}const c=ci|Y|Gt;if(!Ai(c,o))throw new Error(`Expected an input of type ${le(c)} for the interpolate operation, got ${le(o)} instead`);if(Za(l,yr))throw new Error("Could not find a common output type for the following match operation: "+JSON.stringify(n));for(let u=0;u<s-2;u+=2){const d=Et(n[u+2],t,o),g=Et(n[u+3],t,l);h[u]=d,h[u+1]=g}return[Et(n[1],t,o),...h,Et(n[n.length-1],t,l)]}function g1(n,t,e,i){const s=n[1];let r;switch(s[0]){case"linear":r=1;break;case"exponential":if(r=s[1],typeof r!="number")throw new Error(`Expected a number base for exponential interpolation, got ${JSON.stringify(r)} instead`);break;default:r=null}if(!r)throw new Error(`Invalid interpolation type: ${JSON.stringify(s)}`);r=Et(r,t);let o=Et(n[2],t);if(!Ai(Y,o.type))throw new Error(`Expected an input of type number for the interpolate operation, got ${le(o.type)} instead`);o=Et(n[2],t,Y);const a=new Array(n.length-3);for(let l=0;l<a.length;l+=2){let h=Et(n[l+3],t);if(!Ai(Y,h.type))throw new Error(`Expected all stop input values in the interpolate operation to be of type number, got ${le(h.type)} at position ${l+2} instead`);let c=Et(n[l+4],t);if(!Ai(Y|oe,c.type))throw new Error(`Expected all stop output values in the interpolate operation to be a number or color, got ${le(c.type)} at position ${l+3} instead`);h=Et(n[l+3],t,Y),c=Et(n[l+4],t,Y|oe),a[l]=h,a[l+1]=c}return[r,o,...a]}function f1(n,t,e,i){const s=Et(n[n.length-1],t);let r=i!==void 0?i&s.type:s.type;const o=new Array(n.length-1);for(let a=0;a<o.length-1;a+=2){const l=Et(n[a+1],t),h=Et(n[a+2],t);if(!Ai(Gt,l.type))throw new Error(`Expected all conditions in the case operation to be of type boolean, got ${le(l.type)} at position ${a} instead`);r&=h.type,o[a]=l,o[a+1]=h}if(Za(r,yr))throw new Error("Could not find a common output type for the following case operation: "+JSON.stringify(n));for(let a=0;a<o.length-1;a+=2)o[a+1]=Et(n[a+2],t,r);return o[o.length-1]=Et(n[n.length-1],t,r),o}function m1(n,t){let e=n[2];if(!Array.isArray(e))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');if(typeof e[0]=="string"){if(e[0]!=="literal")throw new Error('For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.');if(!Array.isArray(e[1]))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');e=e[1]}let i=ci|Y;const s=new Array(e.length);for(let o=0;o<s.length;o++){const a=Et(e[o],t);i&=a.type,s[o]=a}if(Za(i,yr))throw new Error("Could not find a common type for the following in operation: "+JSON.stringify(n));return[Et(n[1],t,i),...s]}function w1(n,t){const e=Et(n[1],t,Y);if(e.type!==Y)throw new Error(`The first argument of palette must be an number, got ${le(e.type)} instead`);const i=n[2];if(!Array.isArray(i))throw new Error("The second argument of palette must be an array");const s=new Array(i.length);for(let r=0;r<s.length;r++){const o=Et(i[r],t,oe);if(!(o instanceof Mn))throw new Error(`The palette color at index ${r} must be a literal value`);if(!Ai(o.type,oe))throw new Error(`The palette color at index ${r} should be of type color, got ${le(o.type)} instead`);s[r]=o}return[e,...s]}function tt(n,...t){return function(e,i,s){const r=e[0];let o=[];for(let l=0;l<t.length;l++)o=t[l](e,i,o,s)||o;let a=typeof n=="function"?n(o):n;if(s!==void 0){if(!Ai(a,s))throw new Error(`The following expression was expected to return ${le(s)}, but returns ${le(a)} instead: ${JSON.stringify(e)}`);a&=s}if(a===yr)throw new Error(`No matching type was found for the following expression: ${JSON.stringify(e)}`);return new r1(a,r,...o)}}function y1(n,t,e){const i=n[0],s=a1[i];if(!s)throw new Error(`Unknown operator: ${i}`);return s(n,t,e)}function gf(){return{variables:{},properties:{},resolution:NaN,featureId:null}}function kn(n,t,e){const i=Et(n,e);if(!Ai(t,i.type)){const s=le(t),r=le(i.type);throw new Error(`Expected expression to be of type ${s}, got ${r}`)}return sn(i)}function sn(n,t){if(n instanceof Mn){if(n.type===oe&&typeof n.value=="string"){const i=zh(n.value);return function(){return i}}return function(){return n.value}}const e=n.operator;switch(e){case L.Number:case L.String:return _1(n);case L.Get:case L.Var:return p1(n);case L.Id:return i=>i.featureId;case L.Concat:{const i=n.args.map(s=>sn(s));return s=>"".concat(...i.map(r=>r(s).toString()))}case L.Resolution:return i=>i.resolution;case L.Any:case L.All:case L.Not:return T1(n);case L.Equal:case L.NotEqual:case L.LessThan:case L.LessThanOrEqualTo:case L.GreaterThan:case L.GreaterThanOrEqualTo:return x1(n);case L.Multiply:case L.Divide:case L.Add:case L.Subtract:case L.Clamp:case L.Mod:case L.Pow:case L.Abs:case L.Floor:case L.Ceil:case L.Round:case L.Sin:case L.Cos:case L.Atan:case L.Sqrt:return M1(n);case L.Match:return C1(n);case L.Interpolate:return R1(n);default:throw new Error(`Unsupported operator ${e}`)}}function _1(n,t){const e=n.operator,i=n.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=sn(n.args[r]);switch(e){case L.Number:case L.String:return r=>{for(let o=0;o<i;++o){const a=s[o](r);if(typeof a===e)return a}throw new Error(`Expected one of the values to be a ${e}`)};default:throw new Error(`Unsupported assertion operator ${e}`)}}function p1(n,t){const i=n.args[0].value;switch(n.operator){case L.Get:return s=>s.properties[i];case L.Var:return s=>s.variables[i];default:throw new Error(`Unsupported accessor operator ${n.operator}`)}}function x1(n,t){const e=n.operator,i=sn(n.args[0]),s=sn(n.args[1]);switch(e){case L.Equal:return r=>i(r)===s(r);case L.NotEqual:return r=>i(r)!==s(r);case L.LessThan:return r=>i(r)<s(r);case L.LessThanOrEqualTo:return r=>i(r)<=s(r);case L.GreaterThan:return r=>i(r)>s(r);case L.GreaterThanOrEqualTo:return r=>i(r)>=s(r);default:throw new Error(`Unsupported comparison operator ${e}`)}}function T1(n,t){const e=n.operator,i=n.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=sn(n.args[r]);switch(e){case L.Any:return r=>{for(let o=0;o<i;++o)if(s[o](r))return!0;return!1};case L.All:return r=>{for(let o=0;o<i;++o)if(!s[o](r))return!1;return!0};case L.Not:return r=>!s[0](r);default:throw new Error(`Unsupported logical operator ${e}`)}}function M1(n,t){const e=n.operator,i=n.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=sn(n.args[r]);switch(e){case L.Multiply:return r=>{let o=1;for(let a=0;a<i;++a)o*=s[a](r);return o};case L.Divide:return r=>s[0](r)/s[1](r);case L.Add:return r=>{let o=0;for(let a=0;a<i;++a)o+=s[a](r);return o};case L.Subtract:return r=>s[0](r)-s[1](r);case L.Clamp:return r=>{const o=s[0](r),a=s[1](r);if(o<a)return a;const l=s[2](r);return o>l?l:o};case L.Mod:return r=>s[0](r)%s[1](r);case L.Pow:return r=>Math.pow(s[0](r),s[1](r));case L.Abs:return r=>Math.abs(s[0](r));case L.Floor:return r=>Math.floor(s[0](r));case L.Ceil:return r=>Math.ceil(s[0](r));case L.Round:return r=>Math.round(s[0](r));case L.Sin:return r=>Math.sin(s[0](r));case L.Cos:return r=>Math.cos(s[0](r));case L.Atan:return i===2?r=>Math.atan2(s[0](r),s[1](r)):r=>Math.atan(s[0](r));case L.Sqrt:return r=>Math.sqrt(s[0](r));default:throw new Error(`Unsupported numeric operator ${e}`)}}function C1(n,t){const e=n.args.length,i=new Array(e);for(let s=0;s<e;++s)i[s]=sn(n.args[s]);return s=>{const r=i[0](s);for(let o=1;o<e;o+=2)if(r===i[o](s))return i[o+1](s);return i[e-1](s)}}function R1(n,t){const e=n.args.length,i=new Array(e);for(let s=0;s<e;++s)i[s]=sn(n.args[s]);return s=>{const r=i[0](s),o=i[1](s);let a,l;for(let h=2;h<e;h+=2){const c=i[h](s);let u=i[h+1](s);const d=Array.isArray(u);if(d&&(u=l0(u)),c>=o)return h===2?u:d?E1(r,o,a,l,c,u):Gr(r,o,a,l,c,u);a=c,l=u}return l}}function Gr(n,t,e,i,s,r){const o=s-e;if(o===0)return i;const a=t-e,l=n===1?a/o:(Math.pow(n,a)-1)/(Math.pow(n,o)-1);return i+l*(r-i)}function E1(n,t,e,i,s,r){if(s-e===0)return i;const a=fu(i),l=fu(r);let h=l[2]-a[2];h>180?h-=360:h<-180&&(h+=360);const c=[Gr(n,t,e,a[0],s,l[0]),Gr(n,t,e,a[1],s,l[1]),a[2]+Gr(n,t,e,0,s,h),Gr(n,t,e,i[3],s,r[3])];return qd(h0(c))}function v1(n){return!0}function I1(n){const t=df(),e=b1(n,t),i=gf();return function(s,r){if(i.properties=s.getPropertiesInternal(),i.resolution=r,t.featureId){const o=s.getId();o!==void 0?i.featureId=o:i.featureId=null}return e(i)}}function Zu(n){const t=df(),e=n.length,i=new Array(e);for(let o=0;o<e;++o)i[o]=yh(n[o],t);const s=gf(),r=new Array(e);return function(o,a){if(s.properties=o.getPropertiesInternal(),s.resolution=a,t.featureId){const h=o.getId();h!==void 0?s.featureId=h:s.featureId=null}let l=0;for(let h=0;h<e;++h){const c=i[h](s);c&&(r[l]=c,l+=1)}return r.length=l,r}}function b1(n,t){const e=n.length,i=new Array(e);for(let s=0;s<e;++s){const r=n[s],o="filter"in r?kn(r.filter,Gt,t):v1;let a;if(Array.isArray(r.style)){const l=r.style.length;a=new Array(l);for(let h=0;h<l;++h)a[h]=yh(r.style[h],t)}else a=[yh(r.style,t)];i[s]={filter:o,styles:a}}return function(s){const r=[];let o=!1;for(let a=0;a<e;++a){const l=i[a].filter;if(l(s)&&!(n[a].else&&o)){o=!0;for(const h of i[a].styles){const c=h(s);c&&r.push(c)}}}return r}}function yh(n,t){const e=eo(n,"",t),i=io(n,"",t),s=L1(n,t),r=S1(n,t),o=Le(n,"z-index",t);if(!e&&!i&&!s&&!r&&!es(n))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(n));const a=new Se;return function(l){let h=!0;if(e){const c=e(l);c&&(h=!1),a.setFill(c)}if(i){const c=i(l);c&&(h=!1),a.setStroke(c)}if(s){const c=s(l);c&&(h=!1),a.setText(c)}if(r){const c=r(l);c&&(h=!1),a.setImage(c)}return o&&a.setZIndex(o(l)),h?null:a}}function eo(n,t,e){const i=ff(n,t+"fill-color",e);if(!i)return null;const s=new Qe;return function(r){const o=i(r);return o==="none"?null:(s.setColor(o),s)}}function io(n,t,e){const i=Le(n,t+"stroke-width",e),s=ff(n,t+"stroke-color",e);if(!i&&!s)return null;const r=_n(n,t+"stroke-line-cap",e),o=_n(n,t+"stroke-line-join",e),a=mf(n,t+"stroke-line-dash",e),l=Le(n,t+"stroke-line-dash-offset",e),h=Le(n,t+"stroke-miter-limit",e),c=new gi;return function(u){if(s){const d=s(u);if(d==="none")return null;c.setColor(d)}if(i&&c.setWidth(i(u)),r){const d=r(u);if(d!=="butt"&&d!=="round"&&d!=="square")throw new Error("Expected butt, round, or square line cap");c.setLineCap(d)}if(o){const d=o(u);if(d!=="bevel"&&d!=="round"&&d!=="miter")throw new Error("Expected bevel, round, or miter line join");c.setLineJoin(d)}return a&&c.setLineDash(a(u)),l&&c.setLineDashOffset(l(u)),h&&c.setMiterLimit(h(u)),c}}function L1(n,t){const e="text-",i=_n(n,e+"value",t);if(!i)return null;const s=eo(n,e,t),r=eo(n,e+"background-",t),o=io(n,e,t),a=io(n,e+"background-",t),l=_n(n,e+"font",t),h=Le(n,e+"max-angle",t),c=Le(n,e+"offset-x",t),u=Le(n,e+"offset-y",t),d=no(n,e+"overflow",t),g=_n(n,e+"placement",t),f=Le(n,e+"repeat",t),m=$a(n,e+"scale",t),w=no(n,e+"rotate-with-view",t),_=Le(n,e+"rotation",t),p=_n(n,e+"align",t),x=_n(n,e+"justify",t),T=_n(n,e+"baseline",t),M=mf(n,e+"padding",t),C=new qa({});return function(I){if(C.setText(i(I)),s&&C.setFill(s(I)),r&&C.setBackgroundFill(r(I)),o&&C.setStroke(o(I)),a&&C.setBackgroundStroke(a(I)),l&&C.setFont(l(I)),h&&C.setMaxAngle(h(I)),c&&C.setOffsetX(c(I)),u&&C.setOffsetY(u(I)),d&&C.setOverflow(d(I)),g){const v=g(I);if(v!=="point"&&v!=="line")throw new Error("Expected point or line for text-placement");C.setPlacement(v)}if(f&&C.setRepeat(f(I)),m&&C.setScale(m(I)),w&&C.setRotateWithView(w(I)),_&&C.setRotation(_(I)),p){const v=p(I);if(v!=="left"&&v!=="center"&&v!=="right"&&v!=="end"&&v!=="start")throw new Error("Expected left, right, center, start, or end for text-align");C.setTextAlign(v)}if(x){const v=x(I);if(v!=="left"&&v!=="right"&&v!=="center")throw new Error("Expected left, right, or center for text-justify");C.setJustify(v)}if(T){const v=T(I);if(v!=="bottom"&&v!=="top"&&v!=="middle"&&v!=="alphabetic"&&v!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");C.setTextBaseline(v)}return M&&C.setPadding(M(I)),C}}function S1(n,t){return"icon-src"in n?N1(n,t):"shape-points"in n?A1(n,t):"circle-radius"in n?O1(n,t):null}function N1(n,t){const e="icon-",i=e+"src",s=wf(n[i],i),r=xa(n,e+"anchor",t),o=$a(n,e+"scale",t),a=Le(n,e+"opacity",t),l=xa(n,e+"displacement",t),h=Le(n,e+"rotation",t),c=no(n,e+"rotate-with-view",t),u=$u(n,e+"anchor-origin"),d=Ju(n,e+"anchor-x-units"),g=Ju(n,e+"anchor-y-units"),f=F1(n,e+"color"),m=K1(n,e+"cross-origin"),w=D1(n,e+"offset"),_=$u(n,e+"offset-origin"),p=Ks(n,e+"width"),x=Ks(n,e+"height"),T=P1(n,e+"size"),M=wc(n,e+"declutter"),C=new ja({src:s,anchorOrigin:u,anchorXUnits:d,anchorYUnits:g,color:f,crossOrigin:m,offset:w,offsetOrigin:_,height:x,width:p,size:T,declutterMode:M});return function(I){return a&&C.setOpacity(a(I)),l&&C.setDisplacement(l(I)),h&&C.setRotation(h(I)),c&&C.setRotateWithView(c(I)),o&&C.setScale(o(I)),r&&C.setAnchor(r(I)),C}}function A1(n,t){const e="shape-",i=e+"points",s=yf(n[i],i),r=eo(n,e,t),o=io(n,e,t),a=$a(n,e+"scale",t),l=xa(n,e+"displacement",t),h=Le(n,e+"rotation",t),c=no(n,e+"rotate-with-view",t),u=Ks(n,e+"radius"),d=Ks(n,e+"radius1"),g=Ks(n,e+"radius2"),f=Ks(n,e+"angle"),m=wc(n,e+"declutter-mode"),w=new Va({points:s,radius:u,radius1:d,radius2:g,angle:f,declutterMode:m});return function(_){return r&&w.setFill(r(_)),o&&w.setStroke(o(_)),l&&w.setDisplacement(l(_)),h&&w.setRotation(h(_)),c&&w.setRotateWithView(c(_)),a&&w.setScale(a(_)),w}}function O1(n,t){const e="circle-",i=eo(n,e,t),s=io(n,e,t),r=Le(n,e+"radius",t),o=$a(n,e+"scale",t),a=xa(n,e+"displacement",t),l=Le(n,e+"rotation",t),h=no(n,e+"rotate-with-view",t),c=wc(n,e+"declutter-mode"),u=new vo({radius:5,declutterMode:c});return function(d){return r&&u.setRadius(r(d)),i&&u.setFill(i(d)),s&&u.setStroke(s(d)),a&&u.setDisplacement(a(d)),l&&u.setRotation(l(d)),h&&u.setRotateWithView(h(d)),o&&u.setScale(o(d)),u}}function Le(n,t,e){if(!(t in n))return;const i=kn(n[t],Y,e);return function(s){return yf(i(s),t)}}function _n(n,t,e){if(!(t in n))return null;const i=kn(n[t],ci,e);return function(s){return wf(i(s),t)}}function no(n,t,e){if(!(t in n))return null;const i=kn(n[t],Gt,e);return function(s){const r=i(s);if(typeof r!="boolean")throw new Error(`Expected a boolean for ${t}`);return r}}function ff(n,t,e){if(!(t in n))return null;const i=kn(n[t],oe|ci,e);return function(s){return _f(i(s),t)}}function mf(n,t,e){if(!(t in n))return null;const i=kn(n[t],An,e);return function(s){return Io(i(s),t)}}function xa(n,t,e){if(!(t in n))return null;const i=kn(n[t],An,e);return function(s){const r=Io(i(s),t);if(r.length!==2)throw new Error(`Expected two numbers for ${t}`);return r}}function $a(n,t,e){if(!(t in n))return null;const i=kn(n[t],An|Y,e);return function(s){return k1(i(s),t)}}function Ks(n,t){const e=n[t];if(e!==void 0){if(typeof e!="number")throw new Error(`Expected a number for ${t}`);return e}}function P1(n,t){const e=n[t];if(e!==void 0){if(typeof e=="number")return ze(e);if(!Array.isArray(e))throw new Error(`Expected a number or size array for ${t}`);if(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number")throw new Error(`Expected a number or size array for ${t}`);return e}}function K1(n,t){const e=n[t];if(e!==void 0){if(typeof e!="string")throw new Error(`Expected a string for ${t}`);return e}}function $u(n,t){const e=n[t];if(e!==void 0){if(e!=="bottom-left"&&e!=="bottom-right"&&e!=="top-left"&&e!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${t}`);return e}}function Ju(n,t){const e=n[t];if(e!==void 0){if(e!=="pixels"&&e!=="fraction")throw new Error(`Expected pixels or fraction for ${t}`);return e}}function D1(n,t){const e=n[t];if(e!==void 0)return Io(e,t)}function wc(n,t){const e=n[t];if(e!==void 0){if(typeof e!="string")throw new Error(`Expected a string for ${t}`);if(e!=="declutter"&&e!=="obstacle"&&e!=="none")throw new Error(`Expected declutter, obstacle, or none for ${t}`);return e}}function F1(n,t){const e=n[t];if(e!==void 0)return _f(e,t)}function Io(n,t){if(!Array.isArray(n))throw new Error(`Expected an array for ${t}`);const e=n.length;for(let i=0;i<e;++i)if(typeof n[i]!="number")throw new Error(`Expected an array of numbers for ${t}`);return n}function wf(n,t){if(typeof n!="string")throw new Error(`Expected a string for ${t}`);return n}function yf(n,t){if(typeof n!="number")throw new Error(`Expected a number for ${t}`);return n}function _f(n,t){if(typeof n=="string")return n;const e=Io(n,t),i=e.length;if(i<3||i>4)throw new Error(`Expected a color with 3 or 4 values for ${t}`);return e}function k1(n,t){if(typeof n=="number")return n;const e=Io(n,t);if(e.length!==2)throw new Error(`Expected an array of two numbers for ${t}`);return e}const Qu={RENDER_ORDER:"renderOrder"};class G1 extends Ba{constructor(t){t=t||{};const e=Object.assign({},t);delete e.style,delete e.renderBuffer,delete e.updateWhileAnimating,delete e.updateWhileInteracting,super(e),this.declutter_=t.declutter!==void 0?t.declutter:!1,this.renderBuffer_=t.renderBuffer!==void 0?t.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(t.style),this.updateWhileAnimating_=t.updateWhileAnimating!==void 0?t.updateWhileAnimating:!1,this.updateWhileInteracting_=t.updateWhileInteracting!==void 0?t.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(t){return super.getFeatures(t)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(Qu.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(t){t.declutterTree||(t.declutterTree=new lf(9)),this.getRenderer().renderDeclutter(t)}setRenderOrder(t){this.set(Qu.RENDER_ORDER,t)}setStyle(t){this.style_=W1(t),this.styleFunction_=t===null?void 0:qM(this.style_),this.changed()}}function W1(n){if(n===void 0)return ZM;if(!n)return null;if(typeof n=="function"||n instanceof Se)return n;if(!Array.isArray(n))return Zu([n]);if(n.length===0)return[];const t=n.length,e=n[0];if(e instanceof Se){const s=new Array(t);for(let r=0;r<t;++r){const o=n[r];if(!(o instanceof Se))throw new Error("Expected a list of style instances");s[r]=o}return s}if("style"in e){const s=new Array(t);for(let r=0;r<t;++r){const o=n[r];if(!("style"in o))throw new Error("Expected a list of rules with a style property");s[r]=o}return I1(s)}return Zu(n)}const V={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},Zo=[V.FILL],Cn=[V.STROKE],qn=[V.BEGIN_PATH],td=[V.CLOSE_PATH];class pf{drawCustom(t,e,i,s){}drawGeometry(t){}setStyle(t){}drawCircle(t,e){}drawFeature(t,e){}drawGeometryCollection(t,e){}drawLineString(t,e){}drawMultiLineString(t,e){}drawMultiPoint(t,e){}drawMultiPolygon(t,e){}drawPoint(t,e){}drawPolygon(t,e){}drawText(t,e){}setFillStrokeStyle(t,e){}setImageStyle(t,e){}setTextStyle(t,e){}}class bo extends pf{constructor(t,e,i,s){super(),this.tolerance=t,this.maxExtent=e,this.pixelRatio=s,this.maxLineWidth=0,this.resolution=i,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_=null,this.bufferedMaxExtent_=null,this.instructions=[],this.coordinates=[],this.tmpCoordinate_=[],this.hitDetectionInstructions=[],this.state={}}applyPixelRatio(t){const e=this.pixelRatio;return e==1?t:t.map(function(i){return i*e})}appendFlatPointCoordinates(t,e){const i=this.getBufferedMaxExtent(),s=this.tmpCoordinate_,r=this.coordinates;let o=r.length;for(let a=0,l=t.length;a<l;a+=e)s[0]=t[a],s[1]=t[a+1],Ka(i,s)&&(r[o++]=s[0],r[o++]=s[1]);return o}appendFlatLineCoordinates(t,e,i,s,r,o){const a=this.coordinates;let l=a.length;const h=this.getBufferedMaxExtent();o&&(e+=s);let c=t[e],u=t[e+1];const d=this.tmpCoordinate_;let g=!0,f,m,w;for(f=e+s;f<i;f+=s)d[0]=t[f],d[1]=t[f+1],w=Yl(h,d),w!==m?(g&&(a[l++]=c,a[l++]=u,g=!1),a[l++]=d[0],a[l++]=d[1]):w===qt.INTERSECTING?(a[l++]=d[0],a[l++]=d[1],g=!1):g=!0,c=d[0],u=d[1],m=w;return(r&&g||f===e+s)&&(a[l++]=c,a[l++]=u),l}drawCustomCoordinates_(t,e,i,s,r){for(let o=0,a=i.length;o<a;++o){const l=i[o],h=this.appendFlatLineCoordinates(t,e,l,s,!1,!1);r.push(h),e=l}return e}drawCustom(t,e,i,s){this.beginGeometry(t,e);const r=t.getType(),o=t.getStride(),a=this.coordinates.length;let l,h,c,u,d;switch(r){case"MultiPolygon":l=t.getOrientedFlatCoordinates(),u=[];const g=t.getEndss();d=0;for(let f=0,m=g.length;f<m;++f){const w=[];d=this.drawCustomCoordinates_(l,d,g[f],o,w),u.push(w)}this.instructions.push([V.CUSTOM,a,u,t,i,Zl]),this.hitDetectionInstructions.push([V.CUSTOM,a,u,t,s||i,Zl]);break;case"Polygon":case"MultiLineString":c=[],l=r=="Polygon"?t.getOrientedFlatCoordinates():t.getFlatCoordinates(),d=this.drawCustomCoordinates_(l,0,t.getEnds(),o,c),this.instructions.push([V.CUSTOM,a,c,t,i,Vr]),this.hitDetectionInstructions.push([V.CUSTOM,a,c,t,s||i,Vr]);break;case"LineString":case"Circle":l=t.getFlatCoordinates(),h=this.appendFlatLineCoordinates(l,0,l.length,o,!1,!1),this.instructions.push([V.CUSTOM,a,h,t,i,xn]),this.hitDetectionInstructions.push([V.CUSTOM,a,h,t,s||i,xn]);break;case"MultiPoint":l=t.getFlatCoordinates(),h=this.appendFlatPointCoordinates(l,o),h>a&&(this.instructions.push([V.CUSTOM,a,h,t,i,xn]),this.hitDetectionInstructions.push([V.CUSTOM,a,h,t,s||i,xn]));break;case"Point":l=t.getFlatCoordinates(),this.coordinates.push(l[0],l[1]),h=this.coordinates.length,this.instructions.push([V.CUSTOM,a,h,t,i]),this.hitDetectionInstructions.push([V.CUSTOM,a,h,t,s||i]);break}this.endGeometry(e)}beginGeometry(t,e){this.beginGeometryInstruction1_=[V.BEGIN_GEOMETRY,e,0,t],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[V.BEGIN_GEOMETRY,e,0,t],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)}finish(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}}reverseHitDetectionInstructions(){const t=this.hitDetectionInstructions;t.reverse();let e;const i=t.length;let s,r,o=-1;for(e=0;e<i;++e)s=t[e],r=s[0],r==V.END_GEOMETRY?o=e:r==V.BEGIN_GEOMETRY&&(s[2]=e,cm(this.hitDetectionInstructions,o,e),o=-1)}setFillStrokeStyle(t,e){const i=this.state;if(t){const s=t.getColor();i.fillStyle=bi(s||Ie)}else i.fillStyle=void 0;if(e){const s=e.getColor();i.strokeStyle=bi(s||qr);const r=e.getLineCap();i.lineCap=r!==void 0?r:Qs;const o=e.getLineDash();i.lineDash=o?o.slice():Qi;const a=e.getLineDashOffset();i.lineDashOffset=a||tn;const l=e.getLineJoin();i.lineJoin=l!==void 0?l:tr;const h=e.getWidth();i.lineWidth=h!==void 0?h:$r;const c=e.getMiterLimit();i.miterLimit=c!==void 0?c:jr,i.lineWidth>this.maxLineWidth&&(this.maxLineWidth=i.lineWidth,this.bufferedMaxExtent_=null)}else i.strokeStyle=void 0,i.lineCap=void 0,i.lineDash=null,i.lineDashOffset=void 0,i.lineJoin=void 0,i.lineWidth=void 0,i.miterLimit=void 0}createFill(t){const e=t.fillStyle,i=[V.SET_FILL_STYLE,e];return typeof e!="string"&&i.push(!0),i}applyStroke(t){this.instructions.push(this.createStroke(t))}createStroke(t){return[V.SET_STROKE_STYLE,t.strokeStyle,t.lineWidth*this.pixelRatio,t.lineCap,t.lineJoin,t.miterLimit,this.applyPixelRatio(t.lineDash),t.lineDashOffset*this.pixelRatio]}updateFillStyle(t,e){const i=t.fillStyle;(typeof i!="string"||t.currentFillStyle!=i)&&(i!==void 0&&this.instructions.push(e.call(this,t)),t.currentFillStyle=i)}updateStrokeStyle(t,e){const i=t.strokeStyle,s=t.lineCap,r=t.lineDash,o=t.lineDashOffset,a=t.lineJoin,l=t.lineWidth,h=t.miterLimit;(t.currentStrokeStyle!=i||t.currentLineCap!=s||r!=t.currentLineDash&&!Dn(t.currentLineDash,r)||t.currentLineDashOffset!=o||t.currentLineJoin!=a||t.currentLineWidth!=l||t.currentMiterLimit!=h)&&(i!==void 0&&e.call(this,t),t.currentStrokeStyle=i,t.currentLineCap=s,t.currentLineDash=r,t.currentLineDashOffset=o,t.currentLineJoin=a,t.currentLineWidth=l,t.currentMiterLimit=h)}endGeometry(t){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;const e=[V.END_GEOMETRY,t];this.instructions.push(e),this.hitDetectionInstructions.push(e)}getBufferedMaxExtent(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=Ad(this.maxExtent),this.maxLineWidth>0)){const t=this.resolution*(this.maxLineWidth+1)/2;Yr(this.bufferedMaxExtent_,t,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_}}class z1 extends bo{constructor(t,e,i,s){super(t,e,i,s),this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.anchorX_=void 0,this.anchorY_=void 0,this.height_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.scale_=void 0,this.width_=void 0,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}drawPoint(t,e){if(!this.image_)return;this.beginGeometry(t,e);const i=t.getFlatCoordinates(),s=t.getStride(),r=this.coordinates.length,o=this.appendFlatPointCoordinates(i,s);this.instructions.push([V.DRAW_IMAGE,r,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([V.DRAW_IMAGE,r,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(e)}drawMultiPoint(t,e){if(!this.image_)return;this.beginGeometry(t,e);const i=t.getFlatCoordinates(),s=t.getStride(),r=this.coordinates.length,o=this.appendFlatPointCoordinates(i,s);this.instructions.push([V.DRAW_IMAGE,r,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([V.DRAW_IMAGE,r,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(e)}finish(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,super.finish()}setImageStyle(t,e){const i=t.getAnchor(),s=t.getSize(),r=t.getOrigin();this.imagePixelRatio_=t.getPixelRatio(this.pixelRatio),this.anchorX_=i[0],this.anchorY_=i[1],this.hitDetectionImage_=t.getHitDetectionImage(),this.image_=t.getImage(this.pixelRatio),this.height_=s[1],this.opacity_=t.getOpacity(),this.originX_=r[0],this.originY_=r[1],this.rotateWithView_=t.getRotateWithView(),this.rotation_=t.getRotation(),this.scale_=t.getScaleArray(),this.width_=s[0],this.declutterMode_=t.getDeclutterMode(),this.declutterImageWithText_=e}}class B1 extends bo{constructor(t,e,i,s){super(t,e,i,s)}drawFlatCoordinates_(t,e,i,s){const r=this.coordinates.length,o=this.appendFlatLineCoordinates(t,e,i,s,!1,!1),a=[V.MOVE_TO_LINE_TO,r,o];return this.instructions.push(a),this.hitDetectionInstructions.push(a),i}drawLineString(t,e){const i=this.state,s=i.strokeStyle,r=i.lineWidth;if(s===void 0||r===void 0)return;this.updateStrokeStyle(i,this.applyStroke),this.beginGeometry(t,e),this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Qi,tn],qn);const o=t.getFlatCoordinates(),a=t.getStride();this.drawFlatCoordinates_(o,0,o.length,a),this.hitDetectionInstructions.push(Cn),this.endGeometry(e)}drawMultiLineString(t,e){const i=this.state,s=i.strokeStyle,r=i.lineWidth;if(s===void 0||r===void 0)return;this.updateStrokeStyle(i,this.applyStroke),this.beginGeometry(t,e),this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Qi,tn],qn);const o=t.getEnds(),a=t.getFlatCoordinates(),l=t.getStride();let h=0;for(let c=0,u=o.length;c<u;++c)h=this.drawFlatCoordinates_(a,h,o[c],l);this.hitDetectionInstructions.push(Cn),this.endGeometry(e)}finish(){const t=this.state;return t.lastStroke!=null&&t.lastStroke!=this.coordinates.length&&this.instructions.push(Cn),this.reverseHitDetectionInstructions(),this.state=null,super.finish()}applyStroke(t){t.lastStroke!=null&&t.lastStroke!=this.coordinates.length&&(this.instructions.push(Cn),t.lastStroke=this.coordinates.length),t.lastStroke=0,super.applyStroke(t),this.instructions.push(qn)}}class ed extends bo{constructor(t,e,i,s){super(t,e,i,s)}drawFlatCoordinatess_(t,e,i,s){const r=this.state,o=r.fillStyle!==void 0,a=r.strokeStyle!==void 0,l=i.length;this.instructions.push(qn),this.hitDetectionInstructions.push(qn);for(let h=0;h<l;++h){const c=i[h],u=this.coordinates.length,d=this.appendFlatLineCoordinates(t,e,c,s,!0,!a),g=[V.MOVE_TO_LINE_TO,u,d];this.instructions.push(g),this.hitDetectionInstructions.push(g),a&&(this.instructions.push(td),this.hitDetectionInstructions.push(td)),e=c}return o&&(this.instructions.push(Zo),this.hitDetectionInstructions.push(Zo)),a&&(this.instructions.push(Cn),this.hitDetectionInstructions.push(Cn)),e}drawCircle(t,e){const i=this.state,s=i.fillStyle,r=i.strokeStyle;if(s===void 0&&r===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(t,e),i.fillStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_FILL_STYLE,Ie]),i.strokeStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Qi,tn]);const o=t.getFlatCoordinates(),a=t.getStride(),l=this.coordinates.length;this.appendFlatLineCoordinates(o,0,o.length,a,!1,!1);const h=[V.CIRCLE,l];this.instructions.push(qn,h),this.hitDetectionInstructions.push(qn,h),i.fillStyle!==void 0&&(this.instructions.push(Zo),this.hitDetectionInstructions.push(Zo)),i.strokeStyle!==void 0&&(this.instructions.push(Cn),this.hitDetectionInstructions.push(Cn)),this.endGeometry(e)}drawPolygon(t,e){const i=this.state,s=i.fillStyle,r=i.strokeStyle;if(s===void 0&&r===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(t,e),i.fillStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_FILL_STYLE,Ie]),i.strokeStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Qi,tn]);const o=t.getEnds(),a=t.getOrientedFlatCoordinates(),l=t.getStride();this.drawFlatCoordinatess_(a,0,o,l),this.endGeometry(e)}drawMultiPolygon(t,e){const i=this.state,s=i.fillStyle,r=i.strokeStyle;if(s===void 0&&r===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(t,e),i.fillStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_FILL_STYLE,Ie]),i.strokeStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,Qi,tn]);const o=t.getEndss(),a=t.getOrientedFlatCoordinates(),l=t.getStride();let h=0;for(let c=0,u=o.length;c<u;++c)h=this.drawFlatCoordinatess_(a,h,o[c],l);this.endGeometry(e)}finish(){this.reverseHitDetectionInstructions(),this.state=null;const t=this.tolerance;if(t!==0){const e=this.coordinates;for(let i=0,s=e.length;i<s;++i)e[i]=Yn(e[i],t)}return super.finish()}setFillStrokeStyles_(){const t=this.state;t.fillStyle!==void 0&&this.updateFillStyle(t,this.createFill),t.strokeStyle!==void 0&&this.updateStrokeStyle(t,this.applyStroke)}}function H1(n,t,e,i,s){const r=[];let o=e,a=0,l=t.slice(e,2);for(;a<n&&o+s<i;){const[h,c]=l.slice(-2),u=t[o+s],d=t[o+s+1],g=Math.sqrt((u-h)*(u-h)+(d-c)*(d-c));if(a+=g,a>=n){const f=(n-a+g)/g,m=ke(h,u,f),w=ke(c,d,f);l.push(m,w),r.push(l),l=[m,w],a==n&&(o+=s),a=0}else if(a<n)l.push(t[o+s],t[o+s+1]),o+=s;else{const f=g-a,m=ke(h,u,f/g),w=ke(c,d,f/g);l.push(m,w),r.push(l),l=[m,w],a=0,o+=s}}return a>0&&r.push(l),r}function Y1(n,t,e,i,s){let r=e,o=e,a=0,l=0,h=e,c,u,d,g,f,m,w,_,p,x;for(u=e;u<i;u+=s){const T=t[u],M=t[u+1];f!==void 0&&(p=T-f,x=M-m,g=Math.sqrt(p*p+x*x),w!==void 0&&(l+=d,c=Math.acos((w*p+_*x)/(d*g)),c>n&&(l>a&&(a=l,r=h,o=u),l=0,h=u-s)),d=g,w=p,_=x),f=T,m=M}return l+=g,l>a?[h,u]:[r,o]}const Ta={left:0,center:.5,right:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1};class X1 extends bo{constructor(t,e,i,s){super(t,e,i,s),this.labels_=null,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=void 0,this.textRotation_=0,this.textFillState_=null,this.fillStates={},this.fillStates[Ie]={fillStyle:Ie},this.textStrokeState_=null,this.strokeStates={},this.textState_={},this.textStates={},this.textKey_="",this.fillKey_="",this.strokeKey_="",this.declutterImageWithText_=void 0}finish(){const t=super.finish();return t.textStates=this.textStates,t.fillStates=this.fillStates,t.strokeStates=this.strokeStates,t}drawText(t,e){const i=this.textFillState_,s=this.textStrokeState_,r=this.textState_;if(this.text_===""||!r||!i&&!s)return;const o=this.coordinates;let a=o.length;const l=t.getType();let h=null,c=t.getStride();if(r.placement==="line"&&(l=="LineString"||l=="MultiLineString"||l=="Polygon"||l=="MultiPolygon")){if(!be(this.getBufferedMaxExtent(),t.getExtent()))return;let u;if(h=t.getFlatCoordinates(),l=="LineString")u=[h.length];else if(l=="MultiLineString")u=t.getEnds();else if(l=="Polygon")u=t.getEnds().slice(0,1);else if(l=="MultiPolygon"){const m=t.getEndss();u=[];for(let w=0,_=m.length;w<_;++w)u.push(m[w][0])}this.beginGeometry(t,e);const d=r.repeat,g=d?void 0:r.textAlign;let f=0;for(let m=0,w=u.length;m<w;++m){let _;d?_=H1(d*this.resolution,h,f,u[m],c):_=[h.slice(f,u[m])];for(let p=0,x=_.length;p<x;++p){const T=_[p];let M=0,C=T.length;if(g==null){const v=Y1(r.maxAngle,T,0,T.length,2);M=v[0],C=v[1]}for(let v=M;v<C;v+=c)o.push(T[v],T[v+1]);const I=o.length;f=u[m],this.drawChars_(a,I),a=I}}this.endGeometry(e)}else{let u=r.overflow?null:[];switch(l){case"Point":case"MultiPoint":h=t.getFlatCoordinates();break;case"LineString":h=t.getFlatMidpoint();break;case"Circle":h=t.getCenter();break;case"MultiLineString":h=t.getFlatMidpoints(),c=2;break;case"Polygon":h=t.getFlatInteriorPoint(),r.overflow||u.push(h[2]/this.resolution),c=3;break;case"MultiPolygon":const _=t.getFlatInteriorPoints();h=[];for(let p=0,x=_.length;p<x;p+=3)r.overflow||u.push(_[p+2]/this.resolution),h.push(_[p],_[p+1]);if(h.length===0)return;c=2;break}const d=this.appendFlatPointCoordinates(h,c);if(d===a)return;if(u&&(d-a)/2!==h.length/c){let _=a/2;u=u.filter((p,x)=>{const T=o[(_+x)*2]===h[x*c]&&o[(_+x)*2+1]===h[x*c+1];return T||--_,T})}this.saveTextStates_(),(r.backgroundFill||r.backgroundStroke)&&(this.setFillStrokeStyle(r.backgroundFill,r.backgroundStroke),r.backgroundFill&&this.updateFillStyle(this.state,this.createFill),r.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(t,e);let g=r.padding;if(g!=jn&&(r.scale[0]<0||r.scale[1]<0)){let _=r.padding[0],p=r.padding[1],x=r.padding[2],T=r.padding[3];r.scale[0]<0&&(p=-p,T=-T),r.scale[1]<0&&(_=-_,x=-x),g=[_,p,x,T]}const f=this.pixelRatio;this.instructions.push([V.DRAW_IMAGE,a,d,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,void 0,this.declutterImageWithText_,g==jn?jn:g.map(function(_){return _*f}),!!r.backgroundFill,!!r.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,u]);const m=1/f,w=this.state.fillStyle;r.backgroundFill&&(this.state.fillStyle=Ie,this.hitDetectionInstructions.push(this.createFill(this.state))),this.hitDetectionInstructions.push([V.DRAW_IMAGE,a,d,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[m,m],NaN,void 0,this.declutterImageWithText_,g,!!r.backgroundFill,!!r.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_?Ie:this.fillKey_,this.textOffsetX_,this.textOffsetY_,u]),r.backgroundFill&&(this.state.fillStyle=w,this.hitDetectionInstructions.push(this.createFill(this.state))),this.endGeometry(e)}}saveTextStates_(){const t=this.textStrokeState_,e=this.textState_,i=this.textFillState_,s=this.strokeKey_;t&&(s in this.strokeStates||(this.strokeStates[s]={strokeStyle:t.strokeStyle,lineCap:t.lineCap,lineDashOffset:t.lineDashOffset,lineWidth:t.lineWidth,lineJoin:t.lineJoin,miterLimit:t.miterLimit,lineDash:t.lineDash}));const r=this.textKey_;r in this.textStates||(this.textStates[r]={font:e.font,textAlign:e.textAlign||Zr,justify:e.justify,textBaseline:e.textBaseline||ua,scale:e.scale});const o=this.fillKey_;i&&(o in this.fillStates||(this.fillStates[o]={fillStyle:i.fillStyle}))}drawChars_(t,e){const i=this.textStrokeState_,s=this.textState_,r=this.strokeKey_,o=this.textKey_,a=this.fillKey_;this.saveTextStates_();const l=this.pixelRatio,h=Ta[s.textBaseline],c=this.textOffsetY_*l,u=this.text_,d=i?i.lineWidth*Math.abs(s.scale[0])/2:0;this.instructions.push([V.DRAW_CHARS,t,e,h,s.overflow,a,s.maxAngle,l,c,r,d*l,u,o,1]),this.hitDetectionInstructions.push([V.DRAW_CHARS,t,e,h,s.overflow,a&&Ie,s.maxAngle,l,c,r,d*l,u,o,1/l])}setTextStyle(t,e){let i,s,r;if(!t)this.text_="";else{const o=t.getFill();o?(s=this.textFillState_,s||(s={},this.textFillState_=s),s.fillStyle=bi(o.getColor()||Ie)):(s=null,this.textFillState_=s);const a=t.getStroke();if(!a)r=null,this.textStrokeState_=r;else{r=this.textStrokeState_,r||(r={},this.textStrokeState_=r);const f=a.getLineDash(),m=a.getLineDashOffset(),w=a.getWidth(),_=a.getMiterLimit();r.lineCap=a.getLineCap()||Qs,r.lineDash=f?f.slice():Qi,r.lineDashOffset=m===void 0?tn:m,r.lineJoin=a.getLineJoin()||tr,r.lineWidth=w===void 0?$r:w,r.miterLimit=_===void 0?jr:_,r.strokeStyle=bi(a.getColor()||qr)}i=this.textState_;const l=t.getFont()||dg;B0(l);const h=t.getScaleArray();i.overflow=t.getOverflow(),i.font=l,i.maxAngle=t.getMaxAngle(),i.placement=t.getPlacement(),i.textAlign=t.getTextAlign(),i.repeat=t.getRepeat(),i.justify=t.getJustify(),i.textBaseline=t.getTextBaseline()||ua,i.backgroundFill=t.getBackgroundFill(),i.backgroundStroke=t.getBackgroundStroke(),i.padding=t.getPadding()||jn,i.scale=h===void 0?[1,1]:h;const c=t.getOffsetX(),u=t.getOffsetY(),d=t.getRotateWithView(),g=t.getRotation();this.text_=t.getText()||"",this.textOffsetX_=c===void 0?0:c,this.textOffsetY_=u===void 0?0:u,this.textRotateWithView_=d===void 0?!1:d,this.textRotation_=g===void 0?0:g,this.strokeKey_=r?(typeof r.strokeStyle=="string"?r.strokeStyle:Tt(r.strokeStyle))+r.lineCap+r.lineDashOffset+"|"+r.lineWidth+r.lineJoin+r.miterLimit+"["+r.lineDash.join()+"]":"",this.textKey_=i.font+i.scale+(i.textAlign||"?")+(i.repeat||"?")+(i.justify||"?")+(i.textBaseline||"?"),this.fillKey_=s?typeof s.fillStyle=="string"?s.fillStyle:"|"+Tt(s.fillStyle):""}this.declutterImageWithText_=e}}const U1={Circle:ed,Default:bo,Image:z1,LineString:B1,Polygon:ed,Text:X1};class id{constructor(t,e,i,s){this.tolerance_=t,this.maxExtent_=e,this.pixelRatio_=s,this.resolution_=i,this.buildersByZIndex_={}}finish(){const t={};for(const e in this.buildersByZIndex_){t[e]=t[e]||{};const i=this.buildersByZIndex_[e];for(const s in i){const r=i[s].finish();t[e][s]=r}}return t}getBuilder(t,e){const i=t!==void 0?t.toString():"0";let s=this.buildersByZIndex_[i];s===void 0&&(s={},this.buildersByZIndex_[i]=s);let r=s[e];if(r===void 0){const o=U1[e];r=new o(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),s[e]=r}return r}}class V1 extends go{constructor(t){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=t,this.declutterExecutorGroup=null}getFeatures(t){return q()}getData(t){return null}prepareFrame(t){return q()}renderFrame(t,e){return q()}loadedTileCallback(t,e,i){t[e]||(t[e]={}),t[e][i.tileCoord.toString()]=i}createLoadedTileFinder(t,e,i){return((s,r)=>{const o=this.loadedTileCallback.bind(this,i,s);return t.forEachLoadedTile(e,s,r,o)})}forEachFeatureAtCoordinate(t,e,i,s,r){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(t){const e=t.target;(e.getState()===Q.LOADED||e.getState()===Q.ERROR)&&this.renderIfReadyAndVisible()}loadImage(t){let e=t.getState();return e!=Q.LOADED&&e!=Q.ERROR&&t.addEventListener($.CHANGE,this.boundHandleImageChange_),e==Q.IDLE&&(t.load(),e=t.getState()),e==Q.LOADED}renderIfReadyAndVisible(){const t=this.getLayer();t&&t.getVisible()&&t.getSourceState()==="ready"&&t.changed()}disposeInternal(){delete this.layer_,super.disposeInternal()}}const nd=[];let bs=null;function j1(){bs=pe(1,1,void 0,{willReadFrequently:!0})}class xf extends V1{constructor(t){super(t),this.container=null,this.renderedResolution,this.tempTransform=ui(),this.pixelTransform=ui(),this.inversePixelTransform=ui(),this.context=null,this.containerReused=!1,this.pixelContext_=null,this.frameState=null}getImageData(t,e,i){bs||j1(),bs.clearRect(0,0,1,1);let s;try{bs.drawImage(t,e,i,1,1,0,0,1,1),s=bs.getImageData(0,0,1,1).data}catch{return bs=null,null}return s}getBackground(t){let i=this.getLayer().getBackground();return typeof i=="function"&&(i=i(t.viewState.resolution)),i||void 0}useContainer(t,e,i){const s=this.getLayer().getClassName();let r,o;if(t&&t.className===s&&(!i||t&&t.style.backgroundColor&&Dn(aa(t.style.backgroundColor),aa(i)))){const a=t.firstElementChild;a instanceof HTMLCanvasElement&&(o=a.getContext("2d"))}if(o&&o.canvas.style.transform===e?(this.container=t,this.context=o,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){r=document.createElement("div"),r.className=s;let a=r.style;a.position="absolute",a.width="100%",a.height="100%",o=pe();const l=o.canvas;r.appendChild(l),a=l.style,a.position="absolute",a.left="0",a.transformOrigin="top left",this.container=r,this.context=o}!this.containerReused&&i&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=i)}clipUnrotated(t,e,i){const s=rn(i),r=Fa(i),o=wo(i),a=Da(i);Zt(e.coordinateToPixelTransform,s),Zt(e.coordinateToPixelTransform,r),Zt(e.coordinateToPixelTransform,o),Zt(e.coordinateToPixelTransform,a);const l=this.inversePixelTransform;Zt(l,s),Zt(l,r),Zt(l,o),Zt(l,a),t.save(),t.beginPath(),t.moveTo(Math.round(s[0]),Math.round(s[1])),t.lineTo(Math.round(r[0]),Math.round(r[1])),t.lineTo(Math.round(o[0]),Math.round(o[1])),t.lineTo(Math.round(a[0]),Math.round(a[1])),t.clip()}dispatchRenderEvent_(t,e,i){const s=this.getLayer();if(s.hasListener(t)){const r=new ug(t,this.inversePixelTransform,i,e);s.dispatchEvent(r)}}preRender(t,e){this.frameState=e,this.dispatchRenderEvent_(Si.PRERENDER,t,e)}postRender(t,e){this.dispatchRenderEvent_(Si.POSTRENDER,t,e)}getRenderTransform(t,e,i,s,r,o,a){const l=r/2,h=o/2,c=s/e,u=-c,d=-t[0]+a,g=-t[1];return nn(this.tempTransform,l,h,c,u,-i,d,g)}disposeInternal(){delete this.frameState,super.disposeInternal()}}function q1(n,t,e,i,s,r,o,a,l,h,c,u){let d=n[t],g=n[t+1],f=0,m=0,w=0,_=0;function p(){f=d,m=g,t+=i,d=n[t],g=n[t+1],_+=w,w=Math.sqrt((d-f)*(d-f)+(g-m)*(g-m))}do p();while(t<e-i&&_+w<r);let x=w===0?0:(r-_)/w;const T=ke(f,d,x),M=ke(m,g,x),C=t-i,I=_,v=r+a*l(h,s,c);for(;t<e-i&&_+w<v;)p();x=w===0?0:(v-_)/w;const K=ke(f,d,x),W=ke(m,g,x);let X;if(u){const z=[T,M,K,W];Qd(z,0,4,2,u,z,z),X=z[0]>z[2]}else X=T>K;const A=Math.PI,B=[],gt=C+i===t;t=C,w=0,_=I,d=n[t],g=n[t+1];let k;if(gt){p(),k=Math.atan2(g-m,d-f),X&&(k+=k>0?-A:A);const z=(K+T)/2,P=(W+M)/2;return B[0]=[z,P,(v-r)/2,k,s],B}s=s.replace(/\n/g," ");for(let z=0,P=s.length;z<P;){p();let et=Math.atan2(g-m,d-f);if(X&&(et+=et>0?-A:A),k!==void 0){let lt=et-k;if(lt+=lt>A?-2*A:lt<-A?2*A:0,Math.abs(lt)>o)return null}k=et;const yt=z;let ft=0;for(;z<P;++z){const lt=X?P-z-1:z,At=a*l(h,s[lt],c);if(t+i<e&&_+w<r+ft+At/2)break;ft+=At}if(z===yt)continue;const Yt=X?s.substring(P-yt,P-z):s.substring(yt,z);x=w===0?0:(r+ft/2-_)/w;const N=ke(f,d,x),$t=ke(m,g,x);B.push([N,$t,ft/2,et,Yt]),r+=ft}return B}const xs=Be(),un=[],Vi=[],ji=[],dn=[];function sd(n){return n[3].declutterBox}const rd=new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");function Al(n,t){return t==="start"?t=rd.test(n)?"right":"left":t==="end"&&(t=rd.test(n)?"left":"right"),Ta[t]}function Z1(n,t,e){return e>0&&n.push(`
`,""),n.push(t,""),n}class $1{constructor(t,e,i,s){this.overlaps=i,this.pixelRatio=e,this.resolution=t,this.alignFill_,this.instructions=s.instructions,this.coordinates=s.coordinates,this.coordinateCache_={},this.renderedTransform_=ui(),this.hitDetectionInstructions=s.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=s.fillStates||{},this.strokeStates=s.strokeStates||{},this.textStates=s.textStates||{},this.widths_={},this.labels_={}}createLabel(t,e,i,s){const r=t+e+i+s;if(this.labels_[r])return this.labels_[r];const o=s?this.strokeStates[s]:null,a=i?this.fillStates[i]:null,l=this.textStates[e],h=this.pixelRatio,c=[l.scale[0]*h,l.scale[1]*h],u=Array.isArray(t),d=l.justify?Ta[l.justify]:Al(Array.isArray(t)?t[0]:t,l.textAlign||Zr),g=s&&o.lineWidth?o.lineWidth:0,f=u?t:t.split(`
`).reduce(Z1,[]),{width:m,height:w,widths:_,heights:p,lineWidths:x}=Y0(l,f),T=m+g,M=[],C=(T+2)*c[0],I=(w+g)*c[1],v={width:C<0?Math.floor(C):Math.ceil(C),height:I<0?Math.floor(I):Math.ceil(I),contextInstructions:M};(c[0]!=1||c[1]!=1)&&M.push("scale",c),s&&(M.push("strokeStyle",o.strokeStyle),M.push("lineWidth",g),M.push("lineCap",o.lineCap),M.push("lineJoin",o.lineJoin),M.push("miterLimit",o.miterLimit),M.push("setLineDash",[o.lineDash]),M.push("lineDashOffset",o.lineDashOffset)),i&&M.push("fillStyle",a.fillStyle),M.push("textBaseline","middle"),M.push("textAlign","center");const K=.5-d;let W=d*T+K*g;const X=[],A=[];let B=0,gt=0,k=0,z=0,P;for(let et=0,yt=f.length;et<yt;et+=2){const ft=f[et];if(ft===`
`){gt+=B,B=0,W=d*T+K*g,++z;continue}const Yt=f[et+1]||l.font;Yt!==P&&(s&&X.push("font",Yt),i&&A.push("font",Yt),P=Yt),B=Math.max(B,p[k]);const N=[ft,W+K*_[k]+d*(_[k]-x[z]),.5*(g+B)+gt];W+=_[k],s&&X.push("strokeText",N),i&&A.push("fillText",N),++k}return Array.prototype.push.apply(M,X),Array.prototype.push.apply(M,A),this.labels_[r]=v,v}replayTextBackground_(t,e,i,s,r,o,a){t.beginPath(),t.moveTo.apply(t,e),t.lineTo.apply(t,i),t.lineTo.apply(t,s),t.lineTo.apply(t,r),t.lineTo.apply(t,e),o&&(this.alignFill_=o[2],this.fill_(t)),a&&(this.setStrokeStyle_(t,a),t.stroke())}calculateImageOrLabelDimensions_(t,e,i,s,r,o,a,l,h,c,u,d,g,f,m,w){a*=d[0],l*=d[1];let _=i-a,p=s-l;const x=r+h>t?t-h:r,T=o+c>e?e-c:o,M=f[3]+x*d[0]+f[1],C=f[0]+T*d[1]+f[2],I=_-f[3],v=p-f[0];(m||u!==0)&&(un[0]=I,dn[0]=I,un[1]=v,Vi[1]=v,Vi[0]=I+M,ji[0]=Vi[0],ji[1]=v+C,dn[1]=ji[1]);let K;return u!==0?(K=nn(ui(),i,s,1,1,u,-i,-s),Zt(K,un),Zt(K,Vi),Zt(K,ji),Zt(K,dn),en(Math.min(un[0],Vi[0],ji[0],dn[0]),Math.min(un[1],Vi[1],ji[1],dn[1]),Math.max(un[0],Vi[0],ji[0],dn[0]),Math.max(un[1],Vi[1],ji[1],dn[1]),xs)):en(Math.min(I,I+M),Math.min(v,v+C),Math.max(I,I+M),Math.max(v,v+C),xs),g&&(_=Math.round(_),p=Math.round(p)),{drawImageX:_,drawImageY:p,drawImageW:x,drawImageH:T,originX:h,originY:c,declutterBox:{minX:xs[0],minY:xs[1],maxX:xs[2],maxY:xs[3],value:w},canvasTransform:K,scale:d}}replayImageOrLabel_(t,e,i,s,r,o,a){const l=!!(o||a),h=s.declutterBox,c=t.canvas,u=a?a[2]*s.scale[0]/2:0;return h.minX-u<=c.width/e&&h.maxX+u>=0&&h.minY-u<=c.height/e&&h.maxY+u>=0&&(l&&this.replayTextBackground_(t,un,Vi,ji,dn,o,a),X0(t,s.canvasTransform,r,i,s.originX,s.originY,s.drawImageW,s.drawImageH,s.drawImageX,s.drawImageY,s.scale)),!0}fill_(t){if(this.alignFill_){const e=Zt(this.renderedTransform_,[0,0]),i=512*this.pixelRatio;t.save(),t.translate(e[0]%i,e[1]%i),t.rotate(this.viewRotation_)}t.fill(),this.alignFill_&&t.restore()}setStrokeStyle_(t,e){t.strokeStyle=e[1],t.lineWidth=e[2],t.lineCap=e[3],t.lineJoin=e[4],t.miterLimit=e[5],t.lineDashOffset=e[7],t.setLineDash(e[6])}drawLabelWithPointPlacement_(t,e,i,s){const r=this.textStates[e],o=this.createLabel(t,e,s,i),a=this.strokeStates[i],l=this.pixelRatio,h=Al(Array.isArray(t)?t[0]:t,r.textAlign||Zr),c=Ta[r.textBaseline||ua],u=a&&a.lineWidth?a.lineWidth:0,d=o.width/l-2*r.scale[0],g=h*d+2*(.5-h)*u,f=c*o.height/l+2*(.5-c)*u;return{label:o,anchorX:g,anchorY:f}}execute_(t,e,i,s,r,o,a,l){let h;this.pixelCoordinates_&&Dn(i,this.renderedTransform_)?h=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),h=vn(this.coordinates,0,this.coordinates.length,2,i,this.pixelCoordinates_),i0(this.renderedTransform_,i));let c=0;const u=s.length;let d=0,g,f,m,w,_,p,x,T,M,C,I,v,K=0,W=0,X=null,A=null;const B=this.coordinateCache_,gt=this.viewRotation_,k=Math.round(Math.atan2(-i[1],i[0])*1e12)/1e12,z={context:t,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:gt},P=this.instructions!=s||this.overlaps?0:200;let et,yt,ft,Yt;for(;c<u;){const N=s[c];switch(N[0]){case V.BEGIN_GEOMETRY:et=N[1],Yt=N[3],et.getGeometry()?a!==void 0&&!be(a,Yt.getExtent())?c=N[2]+1:++c:c=N[2];break;case V.BEGIN_PATH:K>P&&(this.fill_(t),K=0),W>P&&(t.stroke(),W=0),!K&&!W&&(t.beginPath(),w=NaN,_=NaN),++c;break;case V.CIRCLE:d=N[1];const lt=h[d],At=h[d+1],an=h[d+2],ue=h[d+3],Bi=an-lt,Hi=ue-At,ds=Math.sqrt(Bi*Bi+Hi*Hi);t.moveTo(lt+ds,At),t.arc(lt,At,ds,0,2*Math.PI,!0),++c;break;case V.CLOSE_PATH:t.closePath(),++c;break;case V.CUSTOM:d=N[1],g=N[2];const No=N[3],gs=N[4],Ao=N.length==6?N[5]:void 0;z.geometry=No,z.feature=et,c in B||(B[c]=[]);const ln=B[c];Ao?Ao(h,d,g,2,ln):(ln[0]=h[d],ln[1]=h[d+1],ln.length=2),gs(ln,z),++c;break;case V.DRAW_IMAGE:d=N[1],g=N[2],T=N[3],f=N[4],m=N[5];let Cr=N[6];const hn=N[7],Oo=N[8],Po=N[9],Ko=N[10];let fs=N[11];const dl=N[12];let xe=N[13];const He=N[14],ni=N[15];if(!T&&N.length>=20){M=N[19],C=N[20],I=N[21],v=N[22];const Ke=this.drawLabelWithPointPlacement_(M,C,I,v);T=Ke.label,N[3]=T;const ys=N[23];f=(Ke.anchorX-ys)*this.pixelRatio,N[4]=f;const Ye=N[24];m=(Ke.anchorY-Ye)*this.pixelRatio,N[5]=m,Cr=T.height,N[6]=Cr,xe=T.width,N[13]=xe}let Yi;N.length>25&&(Yi=N[25]);let ms,Wn,cn;N.length>17?(ms=N[16],Wn=N[17],cn=N[18]):(ms=jn,Wn=!1,cn=!1),Ko&&k?fs+=gt:!Ko&&!k&&(fs-=gt);let ws=0;for(;d<g;d+=2){if(Yi&&Yi[ws++]<xe/this.pixelRatio)continue;const Ke=this.calculateImageOrLabelDimensions_(T.width,T.height,h[d],h[d+1],xe,Cr,f,m,Oo,Po,fs,dl,r,ms,Wn||cn,et),ys=[t,e,T,Ke,hn,Wn?X:null,cn?A:null];if(l){if(He==="none")continue;if(He==="obstacle"){l.insert(Ke.declutterBox);continue}else{let Ye,Xi;if(ni){const De=g-d;if(!ni[De]){ni[De]=ys;continue}if(Ye=ni[De],delete ni[De],Xi=sd(Ye),l.collides(Xi))continue}if(l.collides(Ke.declutterBox))continue;Ye&&(l.insert(Xi),this.replayImageOrLabel_.apply(this,Ye)),l.insert(Ke.declutterBox)}}this.replayImageOrLabel_.apply(this,ys)}++c;break;case V.DRAW_CHARS:const Do=N[1],de=N[2],gl=N[3],rm=N[4];v=N[5];const om=N[6],Xc=N[7],Uc=N[8];I=N[9];const fl=N[10];M=N[11],C=N[12];const Vc=[N[13],N[13]],ml=this.textStates[C],Rr=ml.font,Er=[ml.scale[0]*Xc,ml.scale[1]*Xc];let vr;Rr in this.widths_?vr=this.widths_[Rr]:(vr={},this.widths_[Rr]=vr);const jc=Vg(h,Do,de,2),qc=Math.abs(Er[0])*Cu(Rr,M,vr);if(rm||qc<=jc){const Ke=this.textStates[C].textAlign,ys=(jc-qc)*Al(M,Ke),Ye=q1(h,Do,de,2,M,ys,om,Math.abs(Er[0]),Cu,Rr,vr,k?0:this.viewRotation_);t:if(Ye){const Xi=[];let De,Fo,ko,Te,Xe;if(I)for(De=0,Fo=Ye.length;De<Fo;++De){Xe=Ye[De],ko=Xe[4],Te=this.createLabel(ko,C,"",I),f=Xe[2]+(Er[0]<0?-fl:fl),m=gl*Te.height+(.5-gl)*2*fl*Er[1]/Er[0]-Uc;const Ui=this.calculateImageOrLabelDimensions_(Te.width,Te.height,Xe[0],Xe[1],Te.width,Te.height,f,m,0,0,Xe[3],Vc,!1,jn,!1,et);if(l&&l.collides(Ui.declutterBox))break t;Xi.push([t,e,Te,Ui,1,null,null])}if(v)for(De=0,Fo=Ye.length;De<Fo;++De){Xe=Ye[De],ko=Xe[4],Te=this.createLabel(ko,C,v,""),f=Xe[2],m=gl*Te.height-Uc;const Ui=this.calculateImageOrLabelDimensions_(Te.width,Te.height,Xe[0],Xe[1],Te.width,Te.height,f,m,0,0,Xe[3],Vc,!1,jn,!1,et);if(l&&l.collides(Ui.declutterBox))break t;Xi.push([t,e,Te,Ui,1,null,null])}l&&l.load(Xi.map(sd));for(let Ui=0,am=Xi.length;Ui<am;++Ui)this.replayImageOrLabel_.apply(this,Xi[Ui])}}++c;break;case V.END_GEOMETRY:if(o!==void 0){et=N[1];const Ke=o(et,Yt);if(Ke)return Ke}++c;break;case V.FILL:P?K++:this.fill_(t),++c;break;case V.MOVE_TO_LINE_TO:for(d=N[1],g=N[2],yt=h[d],ft=h[d+1],p=yt+.5|0,x=ft+.5|0,(p!==w||x!==_)&&(t.moveTo(yt,ft),w=p,_=x),d+=2;d<g;d+=2)yt=h[d],ft=h[d+1],p=yt+.5|0,x=ft+.5|0,(d==g-2||p!==w||x!==_)&&(t.lineTo(yt,ft),w=p,_=x);++c;break;case V.SET_FILL_STYLE:X=N,this.alignFill_=N[2],K&&(this.fill_(t),K=0,W&&(t.stroke(),W=0)),t.fillStyle=N[1],++c;break;case V.SET_STROKE_STYLE:A=N,W&&(t.stroke(),W=0),this.setStrokeStyle_(t,N),++c;break;case V.STROKE:P?W++:t.stroke(),++c;break;default:++c;break}}K&&this.fill_(t),W&&t.stroke()}execute(t,e,i,s,r,o){this.viewRotation_=s,this.execute_(t,e,i,this.instructions,r,void 0,void 0,o)}executeHitDetection(t,e,i,s,r){return this.viewRotation_=i,this.execute_(t,1,e,this.hitDetectionInstructions,!0,s,r)}}const Ol=["Polygon","Circle","LineString","Image","Text","Default"];class od{constructor(t,e,i,s,r,o){this.maxExtent_=t,this.overlaps_=s,this.pixelRatio_=i,this.resolution_=e,this.renderBuffer_=o,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=ui(),this.createExecutors_(r)}clip(t,e){const i=this.getClipCoords(e);t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(i[2],i[3]),t.lineTo(i[4],i[5]),t.lineTo(i[6],i[7]),t.clip()}createExecutors_(t){for(const e in t){let i=this.executorsByZIndex_[e];i===void 0&&(i={},this.executorsByZIndex_[e]=i);const s=t[e];for(const r in s){const o=s[r];i[r]=new $1(this.resolution_,this.pixelRatio_,this.overlaps_,o)}}}hasExecutors(t){for(const e in this.executorsByZIndex_){const i=this.executorsByZIndex_[e];for(let s=0,r=t.length;s<r;++s)if(t[s]in i)return!0}return!1}forEachFeatureAtCoordinate(t,e,i,s,r,o){s=Math.round(s);const a=s*2+1,l=nn(this.hitDetectionTransform_,s+.5,s+.5,1/e,-1/e,-i,-t[0],-t[1]),h=!this.hitDetectionContext_;h&&(this.hitDetectionContext_=pe(a,a,void 0,{willReadFrequently:!0}));const c=this.hitDetectionContext_;c.canvas.width!==a||c.canvas.height!==a?(c.canvas.width=a,c.canvas.height=a):h||c.clearRect(0,0,a,a);let u;this.renderBuffer_!==void 0&&(u=Be(),Wr(u,t),Yr(u,e*(this.renderBuffer_+s),u));const d=J1(s);let g;function f(M,C){const I=c.getImageData(0,0,a,a).data;for(let v=0,K=d.length;v<K;v++)if(I[d[v]]>0){if(!o||g!=="Image"&&g!=="Text"||o.includes(M)){const W=(d[v]-3)/4,X=s-W%a,A=s-(W/a|0),B=r(M,C,X*X+A*A);if(B)return B}c.clearRect(0,0,a,a);break}}const m=Object.keys(this.executorsByZIndex_).map(Number);m.sort(bn);let w,_,p,x,T;for(w=m.length-1;w>=0;--w){const M=m[w].toString();for(p=this.executorsByZIndex_[M],_=Ol.length-1;_>=0;--_)if(g=Ol[_],x=p[g],x!==void 0&&(T=x.executeHitDetection(c,l,i,f,u),T))return T}}getClipCoords(t){const e=this.maxExtent_;if(!e)return null;const i=e[0],s=e[1],r=e[2],o=e[3],a=[i,s,i,o,r,o,r,s];return vn(a,0,8,2,t,a),a}isEmpty(){return es(this.executorsByZIndex_)}execute(t,e,i,s,r,o,a){const l=Object.keys(this.executorsByZIndex_).map(Number);l.sort(bn),this.maxExtent_&&(t.save(),this.clip(t,i)),o=o||Ol;let h,c,u,d,g,f;for(a&&l.reverse(),h=0,c=l.length;h<c;++h){const m=l[h].toString();for(g=this.executorsByZIndex_[m],u=0,d=o.length;u<d;++u){const w=o[u];f=g[w],f!==void 0&&f.execute(t,e,i,s,r,a)}}this.maxExtent_&&t.restore()}}const Pl={};function J1(n){if(Pl[n]!==void 0)return Pl[n];const t=n*2+1,e=n*n,i=new Array(e+1);for(let r=0;r<=n;++r)for(let o=0;o<=n;++o){const a=r*r+o*o;if(a>e)break;let l=i[a];l||(l=[],i[a]=l),l.push(((n+r)*t+(n+o))*4+3),r>0&&l.push(((n-r)*t+(n+o))*4+3),o>0&&(l.push(((n+r)*t+(n-o))*4+3),r>0&&l.push(((n-r)*t+(n-o))*4+3))}const s=[];for(let r=0,o=i.length;r<o;++r)i[r]&&s.push(...i[r]);return Pl[n]=s,s}class Q1 extends pf{constructor(t,e,i,s,r,o,a){super(),this.context_=t,this.pixelRatio_=e,this.extent_=i,this.transform_=s,this.transformRotation_=s?ka(Math.atan2(s[1],s[0]),10):0,this.viewRotation_=r,this.squaredTolerance_=o,this.userTransform_=a,this.contextFillState_=null,this.contextStrokeState_=null,this.contextTextState_=null,this.fillState_=null,this.strokeState_=null,this.image_=null,this.imageAnchorX_=0,this.imageAnchorY_=0,this.imageHeight_=0,this.imageOpacity_=0,this.imageOriginX_=0,this.imageOriginY_=0,this.imageRotateWithView_=!1,this.imageRotation_=0,this.imageScale_=[0,0],this.imageWidth_=0,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=!1,this.textRotation_=0,this.textScale_=[0,0],this.textFillState_=null,this.textStrokeState_=null,this.textState_=null,this.pixelCoordinates_=[],this.tmpLocalTransform_=ui()}drawImages_(t,e,i,s){if(!this.image_)return;const r=vn(t,e,i,s,this.transform_,this.pixelCoordinates_),o=this.context_,a=this.tmpLocalTransform_,l=o.globalAlpha;this.imageOpacity_!=1&&(o.globalAlpha=l*this.imageOpacity_);let h=this.imageRotation_;this.transformRotation_===0&&(h-=this.viewRotation_),this.imageRotateWithView_&&(h+=this.viewRotation_);for(let c=0,u=r.length;c<u;c+=2){const d=r[c]-this.imageAnchorX_,g=r[c+1]-this.imageAnchorY_;if(h!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){const f=d+this.imageAnchorX_,m=g+this.imageAnchorY_;nn(a,f,m,1,1,h,-f,-m),o.save(),o.transform.apply(o,a),o.translate(f,m),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.restore()}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,d,g,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(o.globalAlpha=l)}drawText_(t,e,i,s){if(!this.textState_||this.text_==="")return;this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);const r=vn(t,e,i,s,this.transform_,this.pixelCoordinates_),o=this.context_;let a=this.textRotation_;for(this.transformRotation_===0&&(a-=this.viewRotation_),this.textRotateWithView_&&(a+=this.viewRotation_);e<i;e+=s){const l=r[e]+this.textOffsetX_,h=r[e+1]+this.textOffsetY_;a!==0||this.textScale_[0]!=1||this.textScale_[1]!=1?(o.save(),o.translate(l-this.textOffsetX_,h-this.textOffsetY_),o.rotate(a),o.translate(this.textOffsetX_,this.textOffsetY_),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.restore()):(this.textStrokeState_&&o.strokeText(this.text_,l,h),this.textFillState_&&o.fillText(this.text_,l,h))}}moveToLineTo_(t,e,i,s,r){const o=this.context_,a=vn(t,e,i,s,this.transform_,this.pixelCoordinates_);o.moveTo(a[0],a[1]);let l=a.length;r&&(l-=2);for(let h=2;h<l;h+=2)o.lineTo(a[h],a[h+1]);return r&&o.closePath(),i}drawRings_(t,e,i,s){for(let r=0,o=i.length;r<o;++r)e=this.moveToLineTo_(t,e,i[r],s,!0);return e}drawCircle(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!be(this.extent_,t.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const e=M0(t,this.transform_,this.pixelCoordinates_),i=e[2]-e[0],s=e[3]-e[1],r=Math.sqrt(i*i+s*s),o=this.context_;o.beginPath(),o.arc(e[0],e[1],r,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}this.text_!==""&&this.drawText_(t.getCenter(),0,2,2)}}setStyle(t){this.setFillStrokeStyle(t.getFill(),t.getStroke()),this.setImageStyle(t.getImage()),this.setTextStyle(t.getText())}setTransform(t){this.transform_=t}drawGeometry(t){switch(t.getType()){case"Point":this.drawPoint(t);break;case"LineString":this.drawLineString(t);break;case"Polygon":this.drawPolygon(t);break;case"MultiPoint":this.drawMultiPoint(t);break;case"MultiLineString":this.drawMultiLineString(t);break;case"MultiPolygon":this.drawMultiPolygon(t);break;case"GeometryCollection":this.drawGeometryCollection(t);break;case"Circle":this.drawCircle(t);break}}drawFeature(t,e){const i=e.getGeometryFunction()(t);i&&(this.setStyle(e),this.drawGeometry(i))}drawGeometryCollection(t){const e=t.getGeometriesArray();for(let i=0,s=e.length;i<s;++i)this.drawGeometry(e[i])}drawPoint(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const e=t.getFlatCoordinates(),i=t.getStride();this.image_&&this.drawImages_(e,0,e.length,i),this.text_!==""&&this.drawText_(e,0,e.length,i)}drawMultiPoint(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const e=t.getFlatCoordinates(),i=t.getStride();this.image_&&this.drawImages_(e,0,e.length,i),this.text_!==""&&this.drawText_(e,0,e.length,i)}drawLineString(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!be(this.extent_,t.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const e=this.context_,i=t.getFlatCoordinates();e.beginPath(),this.moveToLineTo_(i,0,i.length,t.getStride(),!1),e.stroke()}if(this.text_!==""){const e=t.getFlatMidpoint();this.drawText_(e,0,2,2)}}}drawMultiLineString(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const e=t.getExtent();if(be(this.extent_,e)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const i=this.context_,s=t.getFlatCoordinates();let r=0;const o=t.getEnds(),a=t.getStride();i.beginPath();for(let l=0,h=o.length;l<h;++l)r=this.moveToLineTo_(s,r,o[l],a,!1);i.stroke()}if(this.text_!==""){const i=t.getFlatMidpoints();this.drawText_(i,0,i.length,2)}}}drawPolygon(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!be(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const e=this.context_;e.beginPath(),this.drawRings_(t.getOrientedFlatCoordinates(),0,t.getEnds(),t.getStride()),this.fillState_&&e.fill(),this.strokeState_&&e.stroke()}if(this.text_!==""){const e=t.getFlatInteriorPoint();this.drawText_(e,0,2,2)}}}drawMultiPolygon(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!be(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const e=this.context_,i=t.getOrientedFlatCoordinates();let s=0;const r=t.getEndss(),o=t.getStride();e.beginPath();for(let a=0,l=r.length;a<l;++a){const h=r[a];s=this.drawRings_(i,s,h,o)}this.fillState_&&e.fill(),this.strokeState_&&e.stroke()}if(this.text_!==""){const e=t.getFlatInteriorPoints();this.drawText_(e,0,e.length,2)}}}setContextFillState_(t){const e=this.context_,i=this.contextFillState_;i?i.fillStyle!=t.fillStyle&&(i.fillStyle=t.fillStyle,e.fillStyle=t.fillStyle):(e.fillStyle=t.fillStyle,this.contextFillState_={fillStyle:t.fillStyle})}setContextStrokeState_(t){const e=this.context_,i=this.contextStrokeState_;i?(i.lineCap!=t.lineCap&&(i.lineCap=t.lineCap,e.lineCap=t.lineCap),Dn(i.lineDash,t.lineDash)||e.setLineDash(i.lineDash=t.lineDash),i.lineDashOffset!=t.lineDashOffset&&(i.lineDashOffset=t.lineDashOffset,e.lineDashOffset=t.lineDashOffset),i.lineJoin!=t.lineJoin&&(i.lineJoin=t.lineJoin,e.lineJoin=t.lineJoin),i.lineWidth!=t.lineWidth&&(i.lineWidth=t.lineWidth,e.lineWidth=t.lineWidth),i.miterLimit!=t.miterLimit&&(i.miterLimit=t.miterLimit,e.miterLimit=t.miterLimit),i.strokeStyle!=t.strokeStyle&&(i.strokeStyle=t.strokeStyle,e.strokeStyle=t.strokeStyle)):(e.lineCap=t.lineCap,e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.strokeStyle=t.strokeStyle,this.contextStrokeState_={lineCap:t.lineCap,lineDash:t.lineDash,lineDashOffset:t.lineDashOffset,lineJoin:t.lineJoin,lineWidth:t.lineWidth,miterLimit:t.miterLimit,strokeStyle:t.strokeStyle})}setContextTextState_(t){const e=this.context_,i=this.contextTextState_,s=t.textAlign?t.textAlign:Zr;i?(i.font!=t.font&&(i.font=t.font,e.font=t.font),i.textAlign!=s&&(i.textAlign=s,e.textAlign=s),i.textBaseline!=t.textBaseline&&(i.textBaseline=t.textBaseline,e.textBaseline=t.textBaseline)):(e.font=t.font,e.textAlign=s,e.textBaseline=t.textBaseline,this.contextTextState_={font:t.font,textAlign:s,textBaseline:t.textBaseline})}setFillStrokeStyle(t,e){if(!t)this.fillState_=null;else{const i=t.getColor();this.fillState_={fillStyle:bi(i||Ie)}}if(!e)this.strokeState_=null;else{const i=e.getColor(),s=e.getLineCap(),r=e.getLineDash(),o=e.getLineDashOffset(),a=e.getLineJoin(),l=e.getWidth(),h=e.getMiterLimit(),c=r||Qi;this.strokeState_={lineCap:s!==void 0?s:Qs,lineDash:this.pixelRatio_===1?c:c.map(u=>u*this.pixelRatio_),lineDashOffset:(o||tn)*this.pixelRatio_,lineJoin:a!==void 0?a:tr,lineWidth:(l!==void 0?l:$r)*this.pixelRatio_,miterLimit:h!==void 0?h:jr,strokeStyle:bi(i||qr)}}}setImageStyle(t){let e;if(!t||!(e=t.getSize())){this.image_=null;return}const i=t.getPixelRatio(this.pixelRatio_),s=t.getAnchor(),r=t.getOrigin();this.image_=t.getImage(this.pixelRatio_),this.imageAnchorX_=s[0]*i,this.imageAnchorY_=s[1]*i,this.imageHeight_=e[1]*i,this.imageOpacity_=t.getOpacity(),this.imageOriginX_=r[0],this.imageOriginY_=r[1],this.imageRotateWithView_=t.getRotateWithView(),this.imageRotation_=t.getRotation();const o=t.getScaleArray();this.imageScale_=[o[0]*this.pixelRatio_/i,o[1]*this.pixelRatio_/i],this.imageWidth_=e[0]*i}setTextStyle(t){if(!t)this.text_="";else{const e=t.getFill();if(!e)this.textFillState_=null;else{const g=e.getColor();this.textFillState_={fillStyle:bi(g||Ie)}}const i=t.getStroke();if(!i)this.textStrokeState_=null;else{const g=i.getColor(),f=i.getLineCap(),m=i.getLineDash(),w=i.getLineDashOffset(),_=i.getLineJoin(),p=i.getWidth(),x=i.getMiterLimit();this.textStrokeState_={lineCap:f!==void 0?f:Qs,lineDash:m||Qi,lineDashOffset:w||tn,lineJoin:_!==void 0?_:tr,lineWidth:p!==void 0?p:$r,miterLimit:x!==void 0?x:jr,strokeStyle:bi(g||qr)}}const s=t.getFont(),r=t.getOffsetX(),o=t.getOffsetY(),a=t.getRotateWithView(),l=t.getRotation(),h=t.getScaleArray(),c=t.getText(),u=t.getTextAlign(),d=t.getTextBaseline();this.textState_={font:s!==void 0?s:dg,textAlign:u!==void 0?u:Zr,textBaseline:d!==void 0?d:ua},this.text_=c!==void 0?Array.isArray(c)?c.reduce((g,f,m)=>g+=m%2?" ":f,""):c:"",this.textOffsetX_=r!==void 0?this.pixelRatio_*r:0,this.textOffsetY_=o!==void 0?this.pixelRatio_*o:0,this.textRotateWithView_=a!==void 0?a:!1,this.textRotation_=l!==void 0?l:0,this.textScale_=[this.pixelRatio_*h[0],this.pixelRatio_*h[1]]}}}const Ri=.5;function tC(n,t,e,i,s,r,o){const a=n[0]*Ri,l=n[1]*Ri,h=pe(a,l);h.imageSmoothingEnabled=!1;const c=h.canvas,u=new Q1(h,Ri,s,null,o),d=e.length,g=Math.floor((256*256*256-1)/d),f={};for(let w=1;w<=d;++w){const _=e[w-1],p=_.getStyleFunction()||i;if(!p)continue;let x=p(_,r);if(!x)continue;Array.isArray(x)||(x=[x]);const M=(w*g).toString(16).padStart(7,"#00000");for(let C=0,I=x.length;C<I;++C){const v=x[C],K=v.getGeometryFunction()(_);if(!K||!be(s,K.getExtent()))continue;const W=v.clone(),X=W.getFill();X&&X.setColor(M);const A=W.getStroke();A&&(A.setColor(M),A.setLineDash(null)),W.setText(void 0);const B=v.getImage();if(B){const P=B.getImageSize();if(!P)continue;const et=pe(P[0],P[1],void 0,{alpha:!1}),yt=et.canvas;et.fillStyle=M,et.fillRect(0,0,yt.width,yt.height),W.setImage(new ja({img:yt,anchor:B.getAnchor(),anchorXUnits:"pixels",anchorYUnits:"pixels",offset:B.getOrigin(),opacity:1,size:B.getSize(),scale:B.getScale(),rotation:B.getRotation(),rotateWithView:B.getRotateWithView()}))}const gt=W.getZIndex()||0;let k=f[gt];k||(k={},f[gt]=k,k.Polygon=[],k.Circle=[],k.LineString=[],k.Point=[]);const z=K.getType();if(z==="GeometryCollection"){const P=K.getGeometriesArrayRecursive();for(let et=0,yt=P.length;et<yt;++et){const ft=P[et];k[ft.getType().replace("Multi","")].push(ft,W)}}else k[z.replace("Multi","")].push(K,W)}}const m=Object.keys(f).map(Number).sort(bn);for(let w=0,_=m.length;w<_;++w){const p=f[m[w]];for(const x in p){const T=p[x];for(let M=0,C=T.length;M<C;M+=2){u.setStyle(T[M+1]);for(let I=0,v=t.length;I<v;++I)u.setTransform(t[I]),u.drawGeometry(T[M])}}}return h.getImageData(0,0,c.width,c.height)}function eC(n,t,e){const i=[];if(e){const s=Math.floor(Math.round(n[0])*Ri),r=Math.floor(Math.round(n[1])*Ri),o=(kt(s,0,e.width-1)+kt(r,0,e.height-1)*e.width)*4,a=e.data[o],l=e.data[o+1],c=e.data[o+2]+256*(l+256*a),u=Math.floor((256*256*256-1)/t.length);c&&c%u===0&&i.push(t[c/u-1])}return i}const iC=.5,Tf={Point:uC,LineString:lC,Polygon:gC,MultiPoint:dC,MultiLineString:hC,MultiPolygon:cC,GeometryCollection:aC,Circle:rC};function nC(n,t){return parseInt(Tt(n),10)-parseInt(Tt(t),10)}function sC(n,t){const e=_h(n,t);return e*e}function _h(n,t){return iC*n/t}function rC(n,t,e,i,s){const r=e.getFill(),o=e.getStroke();if(r||o){const l=n.getBuilder(e.getZIndex(),"Circle");l.setFillStrokeStyle(r,o),l.drawCircle(t,i)}const a=e.getText();if(a&&a.getText()){const l=(s||n).getBuilder(e.getZIndex(),"Text");l.setTextStyle(a),l.drawText(t,i)}}function ad(n,t,e,i,s,r,o){let a=!1;const l=e.getImage();if(l){const h=l.getImageState();h==Q.LOADED||h==Q.ERROR?l.unlistenImageChange(s):(h==Q.IDLE&&l.load(),l.listenImageChange(s),a=!0)}return oC(n,t,e,i,r,o),a}function oC(n,t,e,i,s,r){const o=e.getGeometryFunction()(t);if(!o)return;const a=o.simplifyTransformed(i,s);if(e.getRenderer())Mf(n,a,e,t);else{const h=Tf[a.getType()];h(n,a,e,t,r)}}function Mf(n,t,e,i){if(t.getType()=="GeometryCollection"){const r=t.getGeometries();for(let o=0,a=r.length;o<a;++o)Mf(n,r[o],e,i);return}n.getBuilder(e.getZIndex(),"Default").drawCustom(t,i,e.getRenderer(),e.getHitDetectionRenderer())}function aC(n,t,e,i,s){const r=t.getGeometriesArray();let o,a;for(o=0,a=r.length;o<a;++o){const l=Tf[r[o].getType()];l(n,r[o],e,i,s)}}function lC(n,t,e,i,s){const r=e.getStroke();if(r){const a=n.getBuilder(e.getZIndex(),"LineString");a.setFillStrokeStyle(null,r),a.drawLineString(t,i)}const o=e.getText();if(o&&o.getText()){const a=(s||n).getBuilder(e.getZIndex(),"Text");a.setTextStyle(o),a.drawText(t,i)}}function hC(n,t,e,i,s){const r=e.getStroke();if(r){const a=n.getBuilder(e.getZIndex(),"LineString");a.setFillStrokeStyle(null,r),a.drawMultiLineString(t,i)}const o=e.getText();if(o&&o.getText()){const a=(s||n).getBuilder(e.getZIndex(),"Text");a.setTextStyle(o),a.drawText(t,i)}}function cC(n,t,e,i,s){const r=e.getFill(),o=e.getStroke();if(o||r){const l=n.getBuilder(e.getZIndex(),"Polygon");l.setFillStrokeStyle(r,o),l.drawMultiPolygon(t,i)}const a=e.getText();if(a&&a.getText()){const l=(s||n).getBuilder(e.getZIndex(),"Text");l.setTextStyle(a),l.drawText(t,i)}}function uC(n,t,e,i,s){const r=e.getImage(),o=e.getText();let a;if(r){if(r.getImageState()!=Q.LOADED)return;let l=n;if(s){const c=r.getDeclutterMode();if(c!=="none")if(l=s,c==="obstacle"){const u=n.getBuilder(e.getZIndex(),"Image");u.setImageStyle(r,a),u.drawPoint(t,i)}else o&&o.getText()&&(a={})}const h=l.getBuilder(e.getZIndex(),"Image");h.setImageStyle(r,a),h.drawPoint(t,i)}if(o&&o.getText()){let l=n;s&&(l=s);const h=l.getBuilder(e.getZIndex(),"Text");h.setTextStyle(o,a),h.drawText(t,i)}}function dC(n,t,e,i,s){const r=e.getImage(),o=e.getText();let a;if(r){if(r.getImageState()!=Q.LOADED)return;let l=n;if(s){const c=r.getDeclutterMode();if(c!=="none")if(l=s,c==="obstacle"){const u=n.getBuilder(e.getZIndex(),"Image");u.setImageStyle(r,a),u.drawMultiPoint(t,i)}else o&&o.getText()&&(a={})}const h=l.getBuilder(e.getZIndex(),"Image");h.setImageStyle(r,a),h.drawMultiPoint(t,i)}if(o&&o.getText()){let l=n;s&&(l=s);const h=l.getBuilder(e.getZIndex(),"Text");h.setTextStyle(o,a),h.drawText(t,i)}}function gC(n,t,e,i,s){const r=e.getFill(),o=e.getStroke();if(r||o){const l=n.getBuilder(e.getZIndex(),"Polygon");l.setFillStrokeStyle(r,o),l.drawPolygon(t,i)}const a=e.getText();if(a&&a.getText()){const l=(s||n).getBuilder(e.getZIndex(),"Text");l.setTextStyle(a),l.drawText(t,i)}}class fC extends xf{constructor(t){super(t),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=Be(),this.wrappedRenderedExtent_=Be(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedRenderOrder_=null,this.replayGroup_=null,this.replayGroupChanged=!0,this.declutterExecutorGroup=null,this.clipping=!0,this.compositionContext_=null,this.opacity_=1}renderWorlds(t,e,i){const s=e.extent,r=e.viewState,o=r.center,a=r.resolution,l=r.projection,h=r.rotation,c=l.getExtent(),u=this.getLayer().getSource(),d=e.pixelRatio,g=e.viewHints,f=!(g[se.ANIMATING]||g[se.INTERACTING]),m=this.compositionContext_,w=Math.round(e.size[0]*d),_=Math.round(e.size[1]*d),p=u.getWrapX()&&l.canWrapX(),x=p?wt(c):null,T=p?Math.ceil((s[2]-c[2])/x)+1:1;let M=p?Math.floor((s[0]-c[0])/x):0;do{const C=this.getRenderTransform(o,a,h,d,w,_,M*x);t.execute(m,1,C,h,f,void 0,i)}while(++M<T)}setupCompositionContext_(){if(this.opacity_!==1){const t=pe(this.context.canvas.width,this.context.canvas.height,nd);this.compositionContext_=t}else this.compositionContext_=this.context}releaseCompositionContext_(){if(this.opacity_!==1){const t=this.context.globalAlpha;this.context.globalAlpha=this.opacity_,this.context.drawImage(this.compositionContext_.canvas,0,0),this.context.globalAlpha=t,Oa(this.compositionContext_),nd.push(this.compositionContext_.canvas),this.compositionContext_=null}}renderDeclutter(t){this.declutterExecutorGroup&&(this.setupCompositionContext_(),this.renderWorlds(this.declutterExecutorGroup,t,t.declutterTree),this.releaseCompositionContext_())}renderFrame(t,e){const i=t.pixelRatio,s=t.layerStatesArray[t.layerIndex];n0(this.pixelTransform,1/i,1/i),Gh(this.inversePixelTransform,this.pixelTransform);const r=Ud(this.pixelTransform);this.useContainer(e,r,this.getBackground(t));const o=this.context,a=o.canvas,l=this.replayGroup_,h=this.declutterExecutorGroup;let c=l&&!l.isEmpty()||h&&!h.isEmpty();if(!c&&!(this.getLayer().hasListener(Si.PRERENDER)||this.getLayer().hasListener(Si.POSTRENDER)))return null;const u=Math.round(t.size[0]*i),d=Math.round(t.size[1]*i);a.width!=u||a.height!=d?(a.width=u,a.height=d,a.style.transform!==r&&(a.style.transform=r)):this.containerReused||o.clearRect(0,0,u,d),this.preRender(o,t);const g=t.viewState;g.projection,this.opacity_=s.opacity,this.setupCompositionContext_();let f=!1;if(c&&s.extent&&this.clipping){const m=Un(s.extent);c=be(m,t.extent),f=c&&!hi(m,t.extent),f&&this.clipUnrotated(this.compositionContext_,t,m)}return c&&this.renderWorlds(l,t),f&&this.compositionContext_.restore(),this.releaseCompositionContext_(),this.postRender(o,t),this.renderedRotation_!==g.rotation&&(this.renderedRotation_=g.rotation,this.hitDetectionImageData_=null),this.container}getFeatures(t){return new Promise(e=>{if(!this.hitDetectionImageData_&&!this.animatingOrInteracting_){const i=[this.context.canvas.width,this.context.canvas.height];Zt(this.pixelTransform,i);const s=this.renderedCenter_,r=this.renderedResolution_,o=this.renderedRotation_,a=this.renderedProjection_,l=this.wrappedRenderedExtent_,h=this.getLayer(),c=[],u=i[0]*Ri,d=i[1]*Ri;c.push(this.getRenderTransform(s,r,o,Ri,u,d,0).slice());const g=h.getSource(),f=a.getExtent();if(g.getWrapX()&&a.canWrapX()&&!hi(f,l)){let m=l[0];const w=wt(f);let _=0,p;for(;m<f[0];)--_,p=w*_,c.push(this.getRenderTransform(s,r,o,Ri,u,d,p).slice()),m+=w;for(_=0,m=l[2];m>f[2];)++_,p=w*_,c.push(this.getRenderTransform(s,r,o,Ri,u,d,p).slice()),m-=w}this.hitDetectionImageData_=tC(i,c,this.renderedFeatures_,h.getStyleFunction(),l,r,o)}e(eC(t,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(t,e,i,s,r){if(!this.replayGroup_)return;const o=e.viewState.resolution,a=e.viewState.rotation,l=this.getLayer(),h={},c=function(g,f,m){const w=Tt(g),_=h[w];if(_){if(_!==!0&&m<_.distanceSq){if(m===0)return h[w]=!0,r.splice(r.lastIndexOf(_),1),s(g,l,f);_.geometry=f,_.distanceSq=m}}else{if(m===0)return h[w]=!0,s(g,l,f);r.push(h[w]={feature:g,layer:l,geometry:f,distanceSq:m,callback:s})}};let u;const d=[this.replayGroup_];return this.declutterExecutorGroup&&d.push(this.declutterExecutorGroup),d.some(g=>u=g.forEachFeatureAtCoordinate(t,o,a,i,c,g===this.declutterExecutorGroup&&e.declutterTree?e.declutterTree.all().map(f=>f.value):null)),u}handleFontsChanged(){const t=this.getLayer();t.getVisible()&&this.replayGroup_&&t.changed()}handleStyleImageChange_(t){this.renderIfReadyAndVisible()}prepareFrame(t){const e=this.getLayer(),i=e.getSource();if(!i)return!1;const s=t.viewHints[se.ANIMATING],r=t.viewHints[se.INTERACTING],o=e.getUpdateWhileAnimating(),a=e.getUpdateWhileInteracting();if(this.ready&&!o&&s||!a&&r)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;const l=t.extent,h=t.viewState,c=h.projection,u=h.resolution,d=t.pixelRatio,g=e.getRevision(),f=e.getRenderBuffer();let m=e.getRenderOrder();m===void 0&&(m=nC);const w=h.center.slice(),_=Yr(l,f*u),p=_.slice(),x=[_.slice()],T=c.getExtent();if(i.getWrapX()&&c.canWrapX()&&!hi(T,t.extent)){const k=wt(T),z=Math.max(wt(_)/2,k);_[0]=T[0]-z,_[2]=T[2]+z,Gd(w,c);const P=Fd(x[0],c);P[0]<T[0]&&P[2]<T[2]?x.push([P[0]+k,P[1],P[2]+k,P[3]]):P[0]>T[0]&&P[2]>T[2]&&x.push([P[0]-k,P[1],P[2]-k,P[3]])}if(this.ready&&this.renderedResolution_==u&&this.renderedRevision_==g&&this.renderedRenderOrder_==m&&hi(this.wrappedRenderedExtent_,_))return Dn(this.renderedExtent_,p)||(this.hitDetectionImageData_=null,this.renderedExtent_=p),this.renderedCenter_=w,this.replayGroupChanged=!1,!0;this.replayGroup_=null;const M=new id(_h(u,d),_,u,d);let C;this.getLayer().getDeclutter()&&(C=new id(_h(u,d),_,u,d));let I;for(let k=0,z=x.length;k<z;++k)i.loadFeatures(x[k],u,c);const v=sC(u,d);let K=!0;const W=k=>{let z;const P=k.getStyleFunction()||e.getStyleFunction();if(P&&(z=P(k,u)),z){const et=this.renderFeature(k,v,z,M,I,C);K=K&&!et}},X=Xd(_),A=i.getFeaturesInExtent(X);m&&A.sort(m);for(let k=0,z=A.length;k<z;++k)W(A[k]);this.renderedFeatures_=A,this.ready=K;const B=M.finish(),gt=new od(_,u,d,i.getOverlaps(),B,e.getRenderBuffer());return C&&(this.declutterExecutorGroup=new od(_,u,d,i.getOverlaps(),C.finish(),e.getRenderBuffer())),this.renderedResolution_=u,this.renderedRevision_=g,this.renderedRenderOrder_=m,this.renderedExtent_=p,this.wrappedRenderedExtent_=_,this.renderedCenter_=w,this.renderedProjection_=c,this.replayGroup_=gt,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(t,e,i,s,r,o){if(!i)return!1;let a=!1;if(Array.isArray(i))for(let l=0,h=i.length;l<h;++l)a=ad(s,t,i[l],e,this.boundHandleStyleImageChange_,r,o)||a;else a=ad(s,t,i,e,this.boundHandleStyleImageChange_,r,o);return a}}class ld extends G1{constructor(t){super(t)}createRenderer(){return new fC(this)}}class hd{constructor(t){this.rbush_=new lf(t),this.items_={}}insert(t,e){const i={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(i),this.items_[Tt(e)]=i}load(t,e){const i=new Array(e.length);for(let s=0,r=e.length;s<r;s++){const o=t[s],a=e[s],l={minX:o[0],minY:o[1],maxX:o[2],maxY:o[3],value:a};i[s]=l,this.items_[Tt(a)]=l}this.rbush_.load(i)}remove(t){const e=Tt(t),i=this.items_[e];return delete this.items_[e],this.rbush_.remove(i)!==null}update(t,e){const i=this.items_[Tt(e)],s=[i.minX,i.minY,i.maxX,i.maxY];is(s,t)||(this.remove(e),this.insert(t,e))}getAll(){return this.rbush_.all().map(function(e){return e.value})}getInExtent(t){const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this.rbush_.search(e).map(function(s){return s.value})}forEach(t){return this.forEach_(this.getAll(),t)}forEachInExtent(t,e){return this.forEach_(this.getInExtent(t),e)}forEach_(t,e){let i;for(let s=0,r=t.length;s<r;s++)if(i=e(t[s]),i)return i;return i}isEmpty(){return es(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(t){const e=this.rbush_.toJSON();return en(e.minX,e.minY,e.maxX,e.maxY,t)}concat(t){this.rbush_.load(t.rbush_.all());for(const e in t.items_)this.items_[e]=t.items_[e]}}class yc extends mi{constructor(t){super(),this.projection=at(t.projection),this.attributions_=cd(t.attributions),this.attributionsCollapsible_=t.attributionsCollapsible!==void 0?t.attributionsCollapsible:!0,this.loading=!1,this.state_=t.state!==void 0?t.state:"ready",this.wrapX_=t.wrapX!==void 0?t.wrapX:!1,this.interpolate_=!!t.interpolate,this.viewResolver=null,this.viewRejector=null;const e=this;this.viewPromise_=new Promise(function(i,s){e.viewResolver=i,e.viewRejector=s})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(t){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(t){this.attributions_=cd(t),this.changed()}setState(t){this.state_=t,this.changed()}}function cd(n){return n?Array.isArray(n)?function(t){return n}:typeof n=="function"?n:function(t){return[n]}:null}const si={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function mC(n,t){return[[-1/0,-1/0,1/0,1/0]]}function wC(n,t){return[n]}let yC=!1;function _C(n,t,e,i,s,r,o){const a=new XMLHttpRequest;a.open("GET",typeof n=="function"?n(e,i,s):n,!0),t.getType()=="arraybuffer"&&(a.responseType="arraybuffer"),a.withCredentials=yC,a.onload=function(l){if(!a.status||a.status>=200&&a.status<300){const h=t.getType();let c;h=="json"?c=JSON.parse(a.responseText):h=="text"?c=a.responseText:h=="xml"?(c=a.responseXML,c||(c=new DOMParser().parseFromString(a.responseText,"application/xml"))):h=="arraybuffer"&&(c=a.response),c?r(t.readFeatures(c,{extent:e,featureProjection:s}),t.readProjection(c)):o()}else o()},a.onerror=o,a.send()}function ud(n,t){return function(e,i,s,r,o){const a=this;_C(n,t,e,i,s,function(l,h){a.addFeatures(l),r!==void 0&&r(l)},o||Vs)}}class gn extends Gi{constructor(t,e,i){super(t),this.feature=e,this.features=i}}class dd extends yc{constructor(t){t=t||{},super({attributions:t.attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:t.wrapX!==void 0?t.wrapX:!0}),this.on,this.once,this.un,this.loader_=Vs,this.format_=t.format,this.overlaps_=t.overlaps===void 0?!0:t.overlaps,this.url_=t.url,t.loader!==void 0?this.loader_=t.loader:this.url_!==void 0&&(mt(this.format_,"`format` must be set when `url` is set"),this.loader_=ud(this.url_,this.format_)),this.strategy_=t.strategy!==void 0?t.strategy:mC;const e=t.useSpatialIndex!==void 0?t.useSpatialIndex:!0;this.featuresRtree_=e?new hd:null,this.loadedExtentsRtree_=new hd,this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null;let i,s;Array.isArray(t.features)?s=t.features:t.features&&(i=t.features,s=i.getArray()),!e&&i===void 0&&(i=new Je(s)),s!==void 0&&this.addFeaturesInternal(s),i!==void 0&&this.bindFeaturesCollection_(i)}addFeature(t){this.addFeatureInternal(t),this.changed()}addFeatureInternal(t){const e=Tt(t);if(!this.addToIndex_(e,t)){this.featuresCollection_&&this.featuresCollection_.remove(t);return}this.setupChangeEvents_(e,t);const i=t.getGeometry();if(i){const s=i.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(s,t)}else this.nullGeometryFeatures_[e]=t;this.dispatchEvent(new gn(si.ADDFEATURE,t))}setupChangeEvents_(t,e){e instanceof Ee||(this.featureChangeKeys_[t]=[ot(e,$.CHANGE,this.handleFeatureChange_,this),ot(e,ts.PROPERTYCHANGE,this.handleFeatureChange_,this)])}addToIndex_(t,e){let i=!0;if(e.getId()!==void 0){const s=String(e.getId());if(!(s in this.idIndex_))this.idIndex_[s]=e;else if(e instanceof Ee){const r=this.idIndex_[s];r instanceof Ee?Array.isArray(r)?r.push(e):this.idIndex_[s]=[r,e]:i=!1}else i=!1}return i&&(mt(!(t in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[t]=e),i}addFeatures(t){this.addFeaturesInternal(t),this.changed()}addFeaturesInternal(t){const e=[],i=[],s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r],l=Tt(a);this.addToIndex_(l,a)&&i.push(a)}for(let r=0,o=i.length;r<o;r++){const a=i[r],l=Tt(a);this.setupChangeEvents_(l,a);const h=a.getGeometry();if(h){const c=h.getExtent();e.push(c),s.push(a)}else this.nullGeometryFeatures_[l]=a}if(this.featuresRtree_&&this.featuresRtree_.load(e,s),this.hasListener(si.ADDFEATURE))for(let r=0,o=i.length;r<o;r++)this.dispatchEvent(new gn(si.ADDFEATURE,i[r]))}bindFeaturesCollection_(t){let e=!1;this.addEventListener(si.ADDFEATURE,function(i){e||(e=!0,t.push(i.feature),e=!1)}),this.addEventListener(si.REMOVEFEATURE,function(i){e||(e=!0,t.remove(i.feature),e=!1)}),t.addEventListener(ve.ADD,i=>{e||(e=!0,this.addFeature(i.element),e=!1)}),t.addEventListener(ve.REMOVE,i=>{e||(e=!0,this.removeFeature(i.element),e=!1)}),this.featuresCollection_=t}clear(t){if(t){for(const i in this.featureChangeKeys_)this.featureChangeKeys_[i].forEach(St);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){const i=s=>{this.removeFeatureInternal(s)};this.featuresRtree_.forEach(i);for(const s in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[s])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};const e=new gn(si.CLEAR);this.dispatchEvent(e),this.changed()}forEachFeature(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureAtCoordinateDirect(t,e){const i=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(i,function(s){const r=s.getGeometry();if(r instanceof Ee||r.intersectsCoordinate(t))return e(s)})}forEachFeatureInExtent(t,e){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureIntersectingExtent(t,e){return this.forEachFeatureInExtent(t,function(i){const s=i.getGeometry();if(s instanceof Ee||s.intersectsExtent(t)){const r=e(i);if(r)return r}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let t;return this.featuresCollection_?t=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(t=this.featuresRtree_.getAll(),es(this.nullGeometryFeatures_)||Li(t,Object.values(this.nullGeometryFeatures_))),t}getFeaturesAtCoordinate(t){const e=[];return this.forEachFeatureAtCoordinateDirect(t,function(i){e.push(i)}),e}getFeaturesInExtent(t,e){if(this.featuresRtree_){if(!(e&&e.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(t);const s=Hm(t,e);return[].concat(...s.map(r=>this.featuresRtree_.getInExtent(r)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(t,e){const i=t[0],s=t[1];let r=null;const o=[NaN,NaN];let a=1/0;const l=[-1/0,-1/0,1/0,1/0];return e=e||Br,this.featuresRtree_.forEachInExtent(l,function(h){if(e(h)){const c=h.getGeometry(),u=a;if(a=c instanceof Ee?0:c.closestPointXY(i,s,o,a),a<u){r=h;const d=Math.sqrt(a);l[0]=i-d,l[1]=s-d,l[2]=i+d,l[3]=s+d}}}),r}getExtent(t){return this.featuresRtree_.getExtent(t)}getFeatureById(t){const e=this.idIndex_[t.toString()];return e!==void 0?e:null}getFeatureByUid(t){const e=this.uidIndex_[t];return e!==void 0?e:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(t){const e=t.target,i=Tt(e),s=e.getGeometry();if(!s)i in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(e),this.nullGeometryFeatures_[i]=e);else{const o=s.getExtent();i in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[i],this.featuresRtree_&&this.featuresRtree_.insert(o,e)):this.featuresRtree_&&this.featuresRtree_.update(o,e)}const r=e.getId();if(r!==void 0){const o=r.toString();this.idIndex_[o]!==e&&(this.removeFromIdIndex_(e),this.idIndex_[o]=e)}else this.removeFromIdIndex_(e),this.uidIndex_[i]=e;this.changed(),this.dispatchEvent(new gn(si.CHANGEFEATURE,e))}hasFeature(t){const e=t.getId();return e!==void 0?e in this.idIndex_:Tt(t)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&es(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0}loadFeatures(t,e,i){const s=this.loadedExtentsRtree_,r=this.strategy_(t,e,i);for(let o=0,a=r.length;o<a;++o){const l=r[o];s.forEachInExtent(l,function(c){return hi(c.extent,l)})||(++this.loadingExtentsCount_,this.dispatchEvent(new gn(si.FEATURESLOADSTART)),this.loader_.call(this,l,e,i,c=>{--this.loadingExtentsCount_,this.dispatchEvent(new gn(si.FEATURESLOADEND,void 0,c))},()=>{--this.loadingExtentsCount_,this.dispatchEvent(new gn(si.FEATURESLOADERROR))}),s.insert(l,{extent:l.slice()}))}this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(t){const e=this.loadedExtentsRtree_;let i;e.forEachInExtent(t,function(s){if(is(s.extent,t))return i=s,!0}),i&&e.remove(i)}removeFeature(t){if(!t)return;const e=Tt(t);e in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[e]:this.featuresRtree_&&this.featuresRtree_.remove(t),this.removeFeatureInternal(t)&&this.changed()}removeFeatureInternal(t){const e=Tt(t),i=this.featureChangeKeys_[e];if(!i)return;i.forEach(St),delete this.featureChangeKeys_[e];const s=t.getId();return s!==void 0&&delete this.idIndex_[s.toString()],delete this.uidIndex_[e],this.dispatchEvent(new gn(si.REMOVEFEATURE,t)),t}removeFromIdIndex_(t){let e=!1;for(const i in this.idIndex_){const s=this.idIndex_[i];if(t instanceof Ee&&Array.isArray(s)&&s.includes(t))s.splice(s.indexOf(t),1);else if(this.idIndex_[i]===t){delete this.idIndex_[i],e=!0;break}}return e}setLoader(t){this.loader_=t}setUrl(t){mt(this.format_,"`format` must be set when `url` is set"),this.url_=t,this.setLoader(ud(t,this.format_))}}const gd={ACTIVE_ACTION_CHANGED:"vl-active-action-changed",LAYER_VISIBLE_CHANGED:"vl-layer-visible-changed"},pC={ACTION:"action"},nR={MEASURE:"measure"};class _c extends Mg{static get CLICK_COUNT_TIMEOUT(){return 300}constructor(t={}){const{disableRotation:e,disableMouseWheelZoom:i,disableKeyboard:s}=t,r=!e,a=pg({altShiftDragRotate:r,pinchRotate:r,mouseWheelZoom:!i,keyboard:!s});if(t&&t.interactions&&t.interactions.forEach(l=>a.push(l)),t.interactions=a,super(t),this.actions=[],t.actions.forEach(l=>{this.addAction(l)}),setTimeout(()=>{this.activateDefaultAction()}),!t.disableEscapeKey){const l=h=>{if(h&&h.keyCode&&h.keyCode===27){const c=this.getCurrentActiveAction();c?c.stop&&c.stop():this.activateDefaultAction()}};document.body.removeEventListener("keydown",l),document.body.addEventListener("keydown",l)}}getDefaultActiveAction(){return this.actions&&this.actions.find(t=>t.element?._defaultActive)}getCurrentActiveAction(){return this.actions&&this.actions.find(t=>t.element._active)}getActionWithIdentifier(t){return this.actions&&this.actions.find(e=>e.element.identifier===t)}getControlsOfType(t){return this.getControls().getArray().filter(i=>i.get("element")&&i.get("element").type===t)}getActionControls(){return this.getControlsOfType(pC.ACTION)}getActionControlWithIdentifier(t){const e=this.getActionControls();return e&&e.find(i=>i.get("element")&&i.get("element").identifier===t)}getLayerActions(t){return this.actions&&this.actions.filter(e=>e.layer===t)}activateAction(t){this.timeout=setTimeout(()=>{t?.activate()},_c.CLICK_COUNT_TIMEOUT)}deactivateCurrentAction(){const t=this.getCurrentActiveAction();t&&(t.deactivate(),clearTimeout(this.timeout))}addAction(t){this.actions.push(t),t.map=this,t.interactions.forEach(e=>{this.addInteraction(e),e.map=t.map})}removeAction(t){this.getCurrentActiveAction()===t&&(t===this.getDefaultActiveAction()?t.element.deactivate():this.activateDefaultAction()),t.interactions.forEach(e=>{this.removeInteraction(e)}),t.element.reset(),this.actions.splice(this.actions.indexOf(t),1)}activateDefaultAction(){const t=this.getDefaultActiveAction();t&&t.element.activate()}}class xC extends _c{constructor(t={}){t.layers=[t.customLayers.baseLayerGroup,t.customLayers.overlayGroup],t.controls=[new fg,new Mw({minWidth:128})].concat(t.controls||[]),t.view=new Ze({extent:t.projection.getExtent(),projection:t.projection,maxZoom:16,minZoom:2,center:fi(t.projection.getExtent()),zoom:2,...t.view}),super(t),(t.defaultZoom===void 0||t.defaultZoom===!0)&&this.addControl(new ic),this.projection=t.projection,this.view=t.view,this.geoJSONFormat=new Xa({dataProjection:this.projection}),this.custom=t.custom||{},t.customLayers.overviewMapLayers&&t.customLayers.overviewMapLayers.length>0&&this.createOverviewMapControl(t),this.baseLayers=t.customLayers.baseLayerGroup.getLayers().getArray(),this.maxZoomViewToExtent=t.maxZoomViewToExtent||16}createOverviewMapControl(t){const e=this,i=s=>{const r=l=>{let h=0;return e.baseLayers.forEach((c,u)=>{c.getVisible()&&(h=u)}),l[h+1>=l.length?0:h+1]};s||(s=r(e.baseLayers)),e.baseLayers.forEach(l=>l.setVisible(l==s));const o=e.overviewMapControl.getOverviewMap().getLayers().getArray(),a=r(o);o.forEach(l=>l.setVisible(l==a)),e.render(),e.overviewMapControl.getOverviewMap().render()};this.overviewMapLayers=t.customLayers.overviewMapLayers,this.overviewMapControl=new xw({layers:this.overviewMapLayers,collapsed:!1,view:new Ze({projection:this.projection})}),this.overviewMapControl.element.addEventListener("click",()=>i(),!1),this.custom.toggleBaseLayer=i}addBaseLayerAndOverlayMapLayer(t,e){t.setVisible(this.baseLayers.length===0),this.baseLayers.push(t),this.overviewMapControl?this.overviewMapControl.getOverviewMap().getLayers().getArray().push(e):this.createOverviewMapControl({customLayers:{overviewMapLayers:[e]}}),e.setVisible(this.overviewMapControl.getOverviewMap().getLayers().getArray().length===2)}getBaseLayers(){return this.getLayerGroup().getLayers().getArray()[0].getLayers().getArray()}getOverlayLayers(){return this._getOverlayLayersCollection().getArray()}_getOverlayLayersCollection(){return this.getLayerGroup().getLayers().getArray()[1].getLayers()}addOverlayLayer(t){this._getOverlayLayersCollection().push(t)}removeOverlayLayer(t){this._getOverlayLayersCollection().remove(t)}initializeView(t,e){const i=kh(WM(),zM(),this.projection.getCode());this.getView().fit(i,{size:this.getSize()}),this.zoomViewToExtent(this.getView(),t,e)}zoomToExtent(t,e){this.zoomViewToExtent(this.getView(),t,e)}zoomViewToExtent(t,e,i){e&&t.fit(e,{size:this.getSize()}),(i||this.maxZoomViewToExtent)&&t.getZoom()>(i||this.maxZoomViewToExtent)&&t.setZoom(i||this.maxZoomViewToExtent)}zoomToGeometry(t,e){const i={type:"FeatureCollection",features:[{type:"Feature",geometry:t}]};this.zoomToExtent(this.geoJSONFormat.readFeatures(i)[0].getGeometry().getExtent(),e)}showInfo(t,e){const i=document.createElement("div");i.setAttribute("class","close"),i.onclick=()=>event.currentTarget.parentNode.remove();const s=document.createElement("div");s.innerHTML=`<span class='content'>${t}</span><div class='arrow'></div>`,s.setAttribute("class","info-tooltip"),s.appendChild(i);const r=new Cg({offset:[0,-5],positioning:"bottom-center",element:s});this.addOverlay(r),r.setPosition(e),s.parentNode.style.position="fixed"}}class Cf extends uo{constructor(t,e,i){super(),i=i||{},this.tileCoord=t,this.state=e,this.interimTile=null,this.key="",this.transition_=i.transition===void 0?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent($.CHANGE)}release(){this.state===j.ERROR&&this.setState(j.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){let t=this.interimTile;if(!t)return this;do{if(t.getState()==j.LOADED)return this.transition_=0,t;t=t.interimTile}while(t);return this}refreshInterimChain(){let t=this.interimTile;if(!t)return;let e=this;do{if(t.getState()==j.LOADED){t.interimTile=null;break}t.getState()==j.LOADING?e=t:t.getState()==j.IDLE?e.interimTile=t.interimTile:e=t,t=e.interimTile}while(t)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(t){if(this.state!==j.ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()}load(){q()}getAlpha(t,e){if(!this.transition_)return 1;let i=this.transitionStarts_[t];if(!i)i=e,this.transitionStarts_[t]=i;else if(i===-1)return 1;const s=e-i+1e3/60;return s>=this.transition_?1:Jd(s/this.transition_)}inTransition(t){return this.transition_?this.transitionStarts_[t]!==-1:!1}endTransition(t){this.transition_&&(this.transitionStarts_[t]=-1)}}class Rf extends Cf{constructor(t,e,i,s,r,o){super(t,e,o),this.crossOrigin_=s,this.src_=i,this.key=i,this.image_=new Image,s!==null&&(this.image_.crossOrigin=s),this.unlisten_=null,this.tileLoadFunction_=r}getImage(){return this.image_}setImage(t){this.image_=t,this.state=j.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=j.ERROR,this.unlistenImage_(),this.image_=TC(),this.changed()}handleImageLoad_(){const t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=j.LOADED:this.state=j.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==j.ERROR&&(this.state=j.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==j.IDLE&&(this.state=j.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=$M(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function TC(){const n=pe(1,1);return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,1,1),n.canvas}class MC{constructor(t){this.highWaterMark=t!==void 0?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(t){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(t){return this.entries_.hasOwnProperty(t)}forEach(t){let e=this.oldest_;for(;e;)t(e.value_,e.key_,this),e=e.newer}get(t,e){const i=this.entries_[t];return mt(i!==void 0,"Tried to get a value for a key that does not exist in the cache"),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(t){const e=this.entries_[t];return mt(e!==void 0,"Tried to get a value for a key that does not exist in the cache"),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_}getCount(){return this.count_}getKeys(){const t=new Array(this.count_);let e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.key_;return t}getValues(){const t=new Array(this.count_);let e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.value_;return t}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(t){return this.entries_[t]?.value_}pop(){const t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_}replace(t,e){this.get(t),this.entries_[t].value_=e}set(t,e){mt(!(t in this.entries_),"Tried to set a value for a key that is used already");const i={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[t]=i,++this.count_}setSize(t){this.highWaterMark=t}}function fd(n,t,e,i){return i!==void 0?(i[0]=n,i[1]=t,i[2]=e,i):[n,t,e]}function Ja(n,t,e){return n+"/"+t+"/"+e}function Ef(n){return Ja(n[0],n[1],n[2])}function CC(n){return n.split("/").map(Number)}function vf(n){return(n[1]<<n[0])+n[2]}function RC(n,t){const e=n[0],i=n[1],s=n[2];if(t.getMinZoom()>e||e>t.getMaxZoom())return!1;const r=t.getFullTileRange(e);return r?r.containsXY(i,s):!0}class If extends MC{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(t){for(;this.canExpireCache()&&!(this.peekLast().getKey()in t);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const t=this.peekFirstKey(),i=CC(t)[0];this.forEach(s=>{s.tileCoord[0]!==i&&(this.remove(Ef(s.tileCoord)),s.release())})}}class pc{constructor(t,e,i,s){this.minX=t,this.maxX=e,this.minY=i,this.maxY=s}contains(t){return this.containsXY(t[1],t[2])}containsTileRange(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY}containsXY(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY}equals(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY}extend(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY}}function Ts(n,t,e,i,s){return s!==void 0?(s.minX=n,s.maxX=t,s.minY=e,s.maxY=i,s):new pc(n,t,e,i)}function Z(n,t){return n.interfaces_&&n.interfaces_.indexOf(t)>-1}class Kl{static equalsWithTolerance(t,e,i){return Math.abs(t-e)<=i}}class Gn extends Error{constructor(t){super(t),this.name=Object.keys({Exception:Gn})[0]}toString(){return this.message}}class dt extends Gn{constructor(t){super(t),this.name=Object.keys({IllegalArgumentException:dt})[0]}}class Or{constructor(t,e){this.low=e||0,this.high=t||0}static toBinaryString(t){let e,i="";for(e=2147483648;e>0;e>>>=1)i+=(t.high&e)===e?"1":"0";for(e=2147483648;e>0;e>>>=1)i+=(t.low&e)===e?"1":"0";return i}}function H(){}H.NaN=NaN;H.isNaN=n=>Number.isNaN(n);H.isInfinite=n=>!Number.isFinite(n);H.MAX_VALUE=Number.MAX_VALUE;H.POSITIVE_INFINITY=Number.POSITIVE_INFINITY;H.NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY;typeof Float64Array=="function"&&typeof Int32Array=="function"?(function(){const e=new Float64Array(1),i=new Int32Array(e.buffer);H.doubleToLongBits=function(s){e[0]=s;let r=i[0]|0,o=i[1]|0;return(o&2146435072)===2146435072&&(o&1048575)!==0&&r!==0&&(r=0,o=2146959360),new Or(o,r)},H.longBitsToDouble=function(s){return i[0]=s.low,i[1]=s.high,e[0]}})():(function(){const t=Math.log2,e=Math.floor,i=Math.pow,s=(function(){for(let r=53;r>0;r--){const o=i(2,r)-1;if(e(t(o))+1===r)return o}return 0})();H.doubleToLongBits=function(r){let o,a,l,h,c,u,d,g,f;if(r<0||1/r===Number.NEGATIVE_INFINITY?(u=1<<31,r=-r):u=0,r===0)return f=0,g=u,new Or(g,f);if(r===1/0)return f=0,g=u|2146435072,new Or(g,f);if(r!==r)return f=0,g=2146959360,new Or(g,f);if(h=0,f=0,o=e(r),o>1)if(o<=s)h=e(t(o)),h<=20?(f=0,g=o<<20-h&1048575):(l=h-20,a=i(2,l),f=o%a<<32-l,g=o/a&1048575);else for(l=o,f=0;a=l/2,l=e(a),l!==0;)h++,f>>>=1,f|=(g&1)<<31,g>>>=1,a!==l&&(g|=524288);if(d=h+1023,c=o===0,o=r-o,h<52&&o!==0)for(l=0;;){if(a=o*2,a>=1?(o=a-1,c?(d--,c=!1):(l<<=1,l|=1,h++)):(o=a,c?--d===0&&(h++,c=!1):(l<<=1,h++)),h===20)g|=l,l=0;else if(h===52){f|=l;break}if(a===1){h<20?g|=l<<20-h:h<52&&(f|=l<<52-h);break}}return g|=d<<20,g|=u,new Or(g,f)},H.longBitsToDouble=function(r){let o,a,l,h;const c=r.high,u=r.low,d=c&1<<31?-1:1;for(l=((c&2146435072)>>20)-1023,h=0,a=1<<19,o=1;o<=20;o++)c&a&&(h+=i(2,-o)),a>>>=1;for(a=1<<31,o=21;o<=52;o++)u&a&&(h+=i(2,-o)),a>>>=1;if(l===-1023){if(h===0)return d*0;l=-1022}else{if(l===1024)return h===0?d/0:NaN;h+=1}return d*h*i(2,l)}})();function zi(){}function Pe(){}class Bs extends Gn{constructor(t){super(t),this.name=Object.keys({RuntimeException:Bs})[0]}}class Ds extends Bs{constructor(){super(),Ds.constructor_.apply(this,arguments)}static constructor_(){if(arguments.length===0)Bs.constructor_.call(this);else if(arguments.length===1){const t=arguments[0];Bs.constructor_.call(this,t)}}}class rt{static isTrue(){if(arguments.length===1){const t=arguments[0];rt.isTrue(t,null)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(!t)throw e===null?new Ds:new Ds(e)}}static shouldNeverReachHere(){if(arguments.length===0)rt.shouldNeverReachHere(null);else if(arguments.length===1){const t=arguments[0];throw new Ds("Should never reach here"+(t!==null?": "+t:""))}}static equals(){if(arguments.length===2){const t=arguments[0],e=arguments[1];rt.equals(t,e,null)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(!e.equals(t))throw new Ds("Expected "+t+" but encountered "+e+(i!==null?": "+i:""))}}}function Lo(){}function _r(){}const bf=new ArrayBuffer(8),EC=new Float64Array(bf),md=new Int32Array(bf);class R{constructor(){R.constructor_.apply(this,arguments)}static constructor_(){if(this.x=null,this.y=null,this.z=null,arguments.length===0)R.constructor_.call(this,0,0);else if(arguments.length===1){const t=arguments[0];R.constructor_.call(this,t.x,t.y,t.getZ())}else if(arguments.length===2){const t=arguments[0],e=arguments[1];R.constructor_.call(this,t,e,R.NULL_ORDINATE)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this.x=t,this.y=e,this.z=i}}static hashCode(t){return EC[0]=t,md[0]^md[1]}equals2D(){if(arguments.length===1){const t=arguments[0];return!(this.x!==t.x||this.y!==t.y)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return!(!Kl.equalsWithTolerance(this.x,t.x,e)||!Kl.equalsWithTolerance(this.y,t.y,e))}}setM(t){throw new dt("Invalid ordinate index: "+R.M)}equals3D(t){return this.x===t.x&&this.y===t.y&&(this.getZ()===t.getZ()||H.isNaN(this.getZ())&&H.isNaN(t.getZ()))}setX(t){this.x=t}compareTo(t){const e=t;return this.x<e.x?-1:this.x>e.x?1:this.y<e.y?-1:this.y>e.y?1:0}getX(){return this.x}copy(){return new R(this)}toString(){return"("+this.x+", "+this.y+", "+this.getZ()+")"}distance3D(t){const e=this.x-t.x,i=this.y-t.y,s=this.getZ()-t.getZ();return Math.sqrt(e*e+i*i+s*s)}getY(){return this.y}getM(){return H.NaN}setOrdinate(t,e){switch(t){case R.X:this.x=e;break;case R.Y:this.y=e;break;case R.Z:this.setZ(e);break;default:throw new dt("Invalid ordinate index: "+t)}}getZ(){return this.z}getOrdinate(t){switch(t){case R.X:return this.x;case R.Y:return this.y;case R.Z:return this.getZ()}throw new dt("Invalid ordinate index: "+t)}equals(t){return t instanceof R?this.equals2D(t):!1}equalInZ(t,e){return Kl.equalsWithTolerance(this.getZ(),t.getZ(),e)}setZ(t){this.z=t}clone(){try{return null}catch(t){if(t instanceof CloneNotSupportedException)return rt.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"),null;throw t}finally{}}setY(t){this.y=t}distance(t){const e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)}hashCode(){let t=17;return t=37*t+R.hashCode(this.x),t=37*t+R.hashCode(this.y),t}setCoordinate(t){this.x=t.x,this.y=t.y,this.z=t.getZ()}get interfaces_(){return[zi,Lo,Pe]}}class Xn{constructor(){Xn.constructor_.apply(this,arguments)}static constructor_(){if(this._dimensionsToTest=2,arguments.length===0)Xn.constructor_.call(this,2);else if(arguments.length===1){const t=arguments[0];if(t!==2&&t!==3)throw new dt("only 2 or 3 dimensions may be specified");this._dimensionsToTest=t}}static compare(t,e){return t<e?-1:t>e?1:H.isNaN(t)?H.isNaN(e)?0:-1:H.isNaN(e)?1:0}compare(t,e){const i=Xn.compare(t.x,e.x);if(i!==0)return i;const s=Xn.compare(t.y,e.y);return s!==0?s:this._dimensionsToTest<=2?0:Xn.compare(t.getZ(),e.getZ())}get interfaces_(){return[_r]}}R.DimensionalComparator=Xn;R.NULL_ORDINATE=H.NaN;R.X=0;R.Y=1;R.Z=2;R.M=3;class vC{static ofLine(t){const e=t.size();if(e<=1)return 0;let i=0;const s=new R;t.getCoordinate(0,s);let r=s.x,o=s.y;for(let a=1;a<e;a++){t.getCoordinate(a,s);const l=s.x,h=s.y,c=l-r,u=h-o;i+=Math.sqrt(c*c+u*u),r=l,o=h}return i}}class pr{filter(t){}}class wi extends Gn{constructor(t){super(t),this.name=Object.keys({UnsupportedOperationException:wi})[0]}}class Ge{add(){}addAll(){}isEmpty(){}iterator(){}size(){}toArray(){}remove(){}}class xc extends Gn{constructor(t){super(t),this.name=Object.keys({IndexOutOfBoundsException:xc})[0]}}class Hs extends Ge{get(){}set(){}isEmpty(){}}class xr extends Gn{constructor(t){super(t),this.name=Object.keys({NoSuchElementException:xr})[0]}}class it extends Hs{constructor(t){super(),this.array=[],t instanceof Ge&&this.addAll(t)}get interfaces_(){return[Hs,Ge]}ensureCapacity(){}add(t){return arguments.length===1?this.array.push(t):this.array.splice(arguments[0],0,arguments[1]),!0}clear(){this.array=[]}addAll(t){for(const e of t)this.array.push(e)}set(t,e){const i=this.array[t];return this.array[t]=e,i}iterator(){return new IC(this)}get(t){if(t<0||t>=this.size())throw new xc;return this.array[t]}isEmpty(){return this.array.length===0}sort(t){t?this.array.sort((e,i)=>t.compare(e,i)):this.array.sort()}size(){return this.array.length}toArray(){return this.array.slice()}remove(t){for(let e=0,i=this.array.length;e<i;e++)if(this.array[e]===t)return!!this.array.splice(e,1);return!1}[Symbol.iterator](){return this.array.values()}}let IC=class{constructor(t){this.arrayList=t,this.position=0}next(){if(this.position===this.arrayList.size())throw new xr;return this.arrayList.get(this.position++)}hasNext(){return this.position<this.arrayList.size()}set(t){return this.arrayList.set(this.position-1,t)}remove(){this.arrayList.remove(this.arrayList.get(this.position))}};class $n extends it{constructor(){super(),$n.constructor_.apply(this,arguments)}static constructor_(){if(arguments.length!==0){if(arguments.length===1){const t=arguments[0];this.ensureCapacity(t.length),this.add(t,!0)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.ensureCapacity(t.length),this.add(t,e)}}}getCoordinate(t){return this.get(t)}addAll(){if(arguments.length===2&&typeof arguments[1]=="boolean"&&Z(arguments[0],Ge)){const t=arguments[0],e=arguments[1];let i=!1;for(let s=t.iterator();s.hasNext();)this.add(s.next(),e),i=!0;return i}else return super.addAll.apply(this,arguments)}clone(){const t=super.clone.call(this);for(let e=0;e<this.size();e++)t.add(e,this.get(e).clone());return t}closeRing(){if(this.size()>0){const t=this.get(0).copy();this.add(t,!1)}}toCoordinateArray(){if(arguments.length===0)return this.toArray($n.coordArrayType);if(arguments.length===1){if(arguments[0])return this.toArray($n.coordArrayType);const e=this.size(),i=new Array(e).fill(null);for(let s=0;s<e;s++)i[s]=this.get(e-s-1);return i}}add(){if(arguments.length===1){const t=arguments[0];return super.add.call(this,t)}else if(arguments.length===2){if(arguments[0]instanceof Array&&typeof arguments[1]=="boolean"){const t=arguments[0],e=arguments[1];return this.add(t,e,!0),!0}else if(arguments[0]instanceof R&&typeof arguments[1]=="boolean"){const t=arguments[0];if(!arguments[1]&&this.size()>=1&&this.get(this.size()-1).equals2D(t))return null;super.add.call(this,t)}else if(arguments[0]instanceof Object&&typeof arguments[1]=="boolean"){const t=arguments[0],e=arguments[1];return this.add(t,e),!0}}else if(arguments.length===3){if(typeof arguments[2]=="boolean"&&arguments[0]instanceof Array&&typeof arguments[1]=="boolean"){const t=arguments[0],e=arguments[1];if(arguments[2])for(let s=0;s<t.length;s++)this.add(t[s],e);else for(let s=t.length-1;s>=0;s--)this.add(t[s],e);return!0}else if(typeof arguments[2]=="boolean"&&Number.isInteger(arguments[0])&&arguments[1]instanceof R){const t=arguments[0],e=arguments[1];if(!arguments[2]){const s=this.size();if(s>0&&(t>0&&this.get(t-1).equals2D(e)||t<s&&this.get(t).equals2D(e)))return null}super.add.call(this,t,e)}}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];let r=1;i>s&&(r=-1);for(let o=i;o!==s;o+=r)this.add(t[o],e);return!0}}}$n.coordArrayType=new Array(0).fill(null);class me extends R{constructor(){super(),me.constructor_.apply(this,arguments)}static constructor_(){if(arguments.length===0)R.constructor_.call(this);else if(arguments.length===1){if(arguments[0]instanceof me){const t=arguments[0];R.constructor_.call(this,t.x,t.y)}else if(arguments[0]instanceof R){const t=arguments[0];R.constructor_.call(this,t.x,t.y)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];R.constructor_.call(this,t,e,R.NULL_ORDINATE)}}setOrdinate(t,e){switch(t){case me.X:this.x=e;break;case me.Y:this.y=e;break;default:throw new dt("Invalid ordinate index: "+t)}}setZ(t){throw new dt("CoordinateXY dimension 2 does not support z-ordinate")}copy(){return new me(this)}toString(){return"("+this.x+", "+this.y+")"}setCoordinate(t){this.x=t.x,this.y=t.y,this.z=t.getZ()}getZ(){return R.NULL_ORDINATE}getOrdinate(t){switch(t){case me.X:return this.x;case me.Y:return this.y}throw new dt("Invalid ordinate index: "+t)}}me.X=0;me.Y=1;me.Z=-1;me.M=-1;class Qt extends R{constructor(){super(),Qt.constructor_.apply(this,arguments)}static constructor_(){if(this._m=null,arguments.length===0)R.constructor_.call(this),this._m=0;else if(arguments.length===1){if(arguments[0]instanceof Qt){const t=arguments[0];R.constructor_.call(this,t.x,t.y),this._m=t._m}else if(arguments[0]instanceof R){const t=arguments[0];R.constructor_.call(this,t.x,t.y),this._m=this.getM()}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];R.constructor_.call(this,t,e,R.NULL_ORDINATE),this._m=i}}setM(t){this._m=t}setZ(t){throw new dt("CoordinateXY dimension 2 does not support z-ordinate")}copy(){return new Qt(this)}toString(){return"("+this.x+", "+this.y+" m="+this.getM()+")"}setCoordinate(t){this.x=t.x,this.y=t.y,this.z=t.getZ(),this._m=t.getM()}getM(){return this._m}setOrdinate(t,e){switch(t){case Qt.X:this.x=e;break;case Qt.Y:this.y=e;break;case Qt.M:this._m=e;break;default:throw new dt("Invalid ordinate index: "+t)}}getZ(){return R.NULL_ORDINATE}getOrdinate(t){switch(t){case Qt.X:return this.x;case Qt.Y:return this.y;case Qt.M:return this._m}throw new dt("Invalid ordinate index: "+t)}}Qt.X=0;Qt.Y=1;Qt.Z=-1;Qt.M=2;class Jn extends R{constructor(){super(),Jn.constructor_.apply(this,arguments)}static constructor_(){if(this._m=null,arguments.length===0)R.constructor_.call(this),this._m=0;else if(arguments.length===1){if(arguments[0]instanceof Jn){const t=arguments[0];R.constructor_.call(this,t),this._m=t._m}else if(arguments[0]instanceof R){const t=arguments[0];R.constructor_.call(this,t),this._m=this.getM()}}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];R.constructor_.call(this,t,e,i),this._m=s}}setM(t){this._m=t}getOrdinate(t){switch(t){case R.X:return this.x;case R.Y:return this.y;case R.Z:return this.getZ();case R.M:return this.getM()}throw new dt("Invalid ordinate index: "+t)}copy(){return new Jn(this)}toString(){return"("+this.x+", "+this.y+", "+this.getZ()+" m="+this.getM()+")"}setCoordinate(t){this.x=t.x,this.y=t.y,this.z=t.getZ(),this._m=t.getM()}getM(){return this._m}setOrdinate(t,e){switch(t){case R.X:this.x=e;break;case R.Y:this.y=e;break;case R.Z:this.z=e;break;case R.M:this._m=e;break;default:throw new dt("Invalid ordinate index: "+t)}}}class nr{static measures(t){return t instanceof me?0:t instanceof Qt||t instanceof Jn?1:(t instanceof R,0)}static create(){if(arguments.length===1){const t=arguments[0];return nr.create(t,0)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return t===2?new me:t===3&&e===0?new R:t===3&&e===1?new Qt:t===4&&e===1?new Jn:new R}}static dimension(t){return t instanceof me?2:t instanceof Qt?3:t instanceof Jn?4:(t instanceof R,3)}}class sr{static log10(t){const e=Math.log(t);return H.isInfinite(e)||H.isNaN(e)?e:e/sr.LOG_10}static min(t,e,i,s){let r=t;return e<r&&(r=e),i<r&&(r=i),s<r&&(r=s),r}static clamp(){if(typeof arguments[2]=="number"&&typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1],i=arguments[2];return t<e?e:t>i?i:t}else if(Number.isInteger(arguments[2])&&Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1],i=arguments[2];return t<e?e:t>i?i:t}}static average(t,e){return(t+e)/2}static wrap(t,e){return t<0?e- -t%e:t%e}static max(){if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];let s=t;return e>s&&(s=e),i>s&&(s=i),s}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];let r=t;return e>r&&(r=e),i>r&&(r=i),s>r&&(r=s),r}}}sr.LOG_10=Math.log(10);class ti{static arraycopy(t,e,i,s,r){let o=0;for(let a=e;a<e+r;a++)i[s+o]=t[a],o++}static getProperty(t){return{"line.separator":`
`}[t]}}class ct{constructor(){ct.constructor_.apply(this,arguments)}static constructor_(){if(this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,arguments.length===0)this.init();else if(arguments.length===1){if(arguments[0]instanceof R){const t=arguments[0];this.init(t.x,t.x,t.y,t.y)}else if(arguments[0]instanceof ct){const t=arguments[0];this.init(t)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.init(t.x,e.x,t.y,e.y)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];this.init(t,e,i,s)}}static intersects(){if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];return i.x>=(t.x<e.x?t.x:e.x)&&i.x<=(t.x>e.x?t.x:e.x)&&i.y>=(t.y<e.y?t.y:e.y)&&i.y<=(t.y>e.y?t.y:e.y)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];let r=Math.min(i.x,s.x),o=Math.max(i.x,s.x),a=Math.min(t.x,e.x),l=Math.max(t.x,e.x);return!(a>o||l<r||(r=Math.min(i.y,s.y),o=Math.max(i.y,s.y),a=Math.min(t.y,e.y),l=Math.max(t.y,e.y),a>o)||l<r)}}getArea(){return this.getWidth()*this.getHeight()}getMinX(){return this._minx}expandToInclude(){if(arguments.length===1){if(arguments[0]instanceof R){const t=arguments[0];this.expandToInclude(t.x,t.y)}else if(arguments[0]instanceof ct){const t=arguments[0];if(t.isNull())return null;this.isNull()?(this._minx=t.getMinX(),this._maxx=t.getMaxX(),this._miny=t.getMinY(),this._maxy=t.getMaxY()):(t._minx<this._minx&&(this._minx=t._minx),t._maxx>this._maxx&&(this._maxx=t._maxx),t._miny<this._miny&&(this._miny=t._miny),t._maxy>this._maxy&&(this._maxy=t._maxy))}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.isNull()?(this._minx=t,this._maxx=t,this._miny=e,this._maxy=e):(t<this._minx&&(this._minx=t),t>this._maxx&&(this._maxx=t),e<this._miny&&(this._miny=e),e>this._maxy&&(this._maxy=e))}}compareTo(t){const e=t;return this.isNull()?e.isNull()?0:-1:e.isNull()?1:this._minx<e._minx?-1:this._minx>e._minx?1:this._miny<e._miny?-1:this._miny>e._miny?1:this._maxx<e._maxx?-1:this._maxx>e._maxx?1:this._maxy<e._maxy?-1:this._maxy>e._maxy?1:0}translate(t,e){if(this.isNull())return null;this.init(this.getMinX()+t,this.getMaxX()+t,this.getMinY()+e,this.getMaxY()+e)}copy(){return new ct(this)}expandBy(){if(arguments.length===1){const t=arguments[0];this.expandBy(t,t)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(this.isNull())return null;this._minx-=t,this._maxx+=t,this._miny-=e,this._maxy+=e,(this._minx>this._maxx||this._miny>this._maxy)&&this.setToNull()}}contains(){if(arguments.length===1){if(arguments[0]instanceof ct){const t=arguments[0];return this.covers(t)}else if(arguments[0]instanceof R){const t=arguments[0];return this.covers(t)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.covers(t,e)}}hashCode(){let t=17;return t=37*t+R.hashCode(this._minx),t=37*t+R.hashCode(this._maxx),t=37*t+R.hashCode(this._miny),t=37*t+R.hashCode(this._maxy),t}equals(t){if(!(t instanceof ct))return!1;const e=t;return this.isNull()?e.isNull():this._maxx===e.getMaxX()&&this._maxy===e.getMaxY()&&this._minx===e.getMinX()&&this._miny===e.getMinY()}intersection(t){if(this.isNull()||t.isNull()||!this.intersects(t))return new ct;const e=this._minx>t._minx?this._minx:t._minx,i=this._miny>t._miny?this._miny:t._miny,s=this._maxx<t._maxx?this._maxx:t._maxx,r=this._maxy<t._maxy?this._maxy:t._maxy;return new ct(e,s,i,r)}isNull(){return this._maxx<this._minx}getMaxX(){return this._maxx}covers(){if(arguments.length===1){if(arguments[0]instanceof R){const t=arguments[0];return this.covers(t.x,t.y)}else if(arguments[0]instanceof ct){const t=arguments[0];return this.isNull()||t.isNull()?!1:t.getMinX()>=this._minx&&t.getMaxX()<=this._maxx&&t.getMinY()>=this._miny&&t.getMaxY()<=this._maxy}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.isNull()?!1:t>=this._minx&&t<=this._maxx&&e>=this._miny&&e<=this._maxy}}intersects(){if(arguments.length===1){if(arguments[0]instanceof ct){const t=arguments[0];return this.isNull()||t.isNull()?!1:!(t._minx>this._maxx||t._maxx<this._minx||t._miny>this._maxy||t._maxy<this._miny)}else if(arguments[0]instanceof R){const t=arguments[0];return this.intersects(t.x,t.y)}}else if(arguments.length===2){if(arguments[0]instanceof R&&arguments[1]instanceof R){const t=arguments[0],e=arguments[1];return!(this.isNull()||(t.x<e.x?t.x:e.x)>this._maxx||(t.x>e.x?t.x:e.x)<this._minx||(t.y<e.y?t.y:e.y)>this._maxy||(t.y>e.y?t.y:e.y)<this._miny)}else if(typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1];return this.isNull()?!1:!(t>this._maxx||t<this._minx||e>this._maxy||e<this._miny)}}}getMinY(){return this._miny}getDiameter(){if(this.isNull())return 0;const t=this.getWidth(),e=this.getHeight();return Math.sqrt(t*t+e*e)}minExtent(){if(this.isNull())return 0;const t=this.getWidth(),e=this.getHeight();return t<e?t:e}getWidth(){return this.isNull()?0:this._maxx-this._minx}toString(){return"Env["+this._minx+" : "+this._maxx+", "+this._miny+" : "+this._maxy+"]"}setToNull(){this._minx=0,this._maxx=-1,this._miny=0,this._maxy=-1}disjoint(t){return this.isNull()||t.isNull()?!0:t._minx>this._maxx||t._maxx<this._minx||t._miny>this._maxy||t._maxy<this._miny}getHeight(){return this.isNull()?0:this._maxy-this._miny}maxExtent(){if(this.isNull())return 0;const t=this.getWidth(),e=this.getHeight();return t>e?t:e}centre(){return this.isNull()?null:new R((this.getMinX()+this.getMaxX())/2,(this.getMinY()+this.getMaxY())/2)}init(){if(arguments.length===0)this.setToNull();else if(arguments.length===1){if(arguments[0]instanceof R){const t=arguments[0];this.init(t.x,t.x,t.y,t.y)}else if(arguments[0]instanceof ct){const t=arguments[0];this._minx=t._minx,this._maxx=t._maxx,this._miny=t._miny,this._maxy=t._maxy}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.init(t.x,e.x,t.y,e.y)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];t<e?(this._minx=t,this._maxx=e):(this._minx=e,this._maxx=t),i<s?(this._miny=i,this._maxy=s):(this._miny=s,this._maxy=i)}}getMaxY(){return this._maxy}distance(t){if(this.intersects(t))return 0;let e=0;this._maxx<t._minx?e=t._minx-this._maxx:this._minx>t._maxx&&(e=this._minx-t._maxx);let i=0;return this._maxy<t._miny?i=t._miny-this._maxy:this._miny>t._maxy&&(i=this._miny-t._maxy),e===0?i:i===0?e:Math.sqrt(e*e+i*i)}get interfaces_(){return[zi,Pe]}}class Ut{static scroll(t,e){const i=Ut.indexOf(e,t);if(i<0)return null;const s=new Array(t.length).fill(null);ti.arraycopy(t,i,s,0,t.length-i),ti.arraycopy(t,0,s,t.length-i,i),ti.arraycopy(s,0,t,0,t.length)}static removeRepeatedPoints(t){return Ut.hasRepeatedPoints(t)?new $n(t,!1).toCoordinateArray():t}static reverse(t){const e=t.length-1,i=Math.trunc(e/2);for(let s=0;s<=i;s++){const r=t[s];t[s]=t[e-s],t[e-s]=r}}static removeNull(t){let e=0;for(let r=0;r<t.length;r++)t[r]!==null&&e++;const i=new Array(e).fill(null);if(e===0)return i;let s=0;for(let r=0;r<t.length;r++)t[r]!==null&&(i[s++]=t[r]);return i}static copyDeep(){if(arguments.length===1){const t=arguments[0],e=new Array(t.length).fill(null);for(let i=0;i<t.length;i++)e[i]=t[i].copy();return e}else if(arguments.length===5){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3],r=arguments[4];for(let o=0;o<r;o++)i[s+o]=t[e+o].copy()}}static isEqualReversed(t,e){for(let i=0;i<t.length;i++){const s=t[i],r=e[t.length-i-1];if(s.compareTo(r)!==0)return!1}return!0}static envelope(t){const e=new ct;for(let i=0;i<t.length;i++)e.expandToInclude(t[i]);return e}static extract(t,e,i){e=sr.clamp(e,0,t.length),i=sr.clamp(i,-1,t.length);let s=i-e+1;i<0&&(s=0),e>=t.length&&(s=0),i<e&&(s=0);const r=new Array(s).fill(null);if(s===0)return r;let o=0;for(let a=e;a<=i;a++)r[o++]=t[a];return r}static isRing(t){return!(t.length<4||!t[0].equals2D(t[t.length-1]))}static ptNotInList(t,e){for(let i=0;i<t.length;i++){const s=t[i];if(Ut.indexOf(s,e)<0)return s}return null}static equals(){if(arguments.length===2){const t=arguments[0],e=arguments[1];if(t===e)return!0;if(t===null||e===null||t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(!t[i].equals(e[i]))return!1;return!0}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(t===e)return!0;if(t===null||e===null||t.length!==e.length)return!1;for(let s=0;s<t.length;s++)if(i.compare(t[s],e[s])!==0)return!1;return!0}}static intersection(t,e){const i=new $n;for(let s=0;s<t.length;s++)e.intersects(t[s])&&i.add(t[s],!0);return i.toCoordinateArray()}static measures(t){if(t===null||t.length===0)return 0;let e=0;for(const i of t)e=Math.max(e,nr.measures(i));return e}static hasRepeatedPoints(t){for(let e=1;e<t.length;e++)if(t[e-1].equals(t[e]))return!0;return!1}static toCoordinateArray(t){return t.toArray(Ut.coordArrayType)}static dimension(t){if(t===null||t.length===0)return 3;let e=0;for(const i of t)e=Math.max(e,nr.dimension(i));return e}static atLeastNCoordinatesOrNothing(t,e){return e.length>=t?e:[]}static indexOf(t,e){for(let i=0;i<e.length;i++)if(t.equals(e[i]))return i;return-1}static increasingDirection(t){for(let e=0;e<Math.trunc(t.length/2);e++){const i=t.length-1-e,s=t[e].compareTo(t[i]);if(s!==0)return s}return 1}static compare(t,e){let i=0;for(;i<t.length&&i<e.length;){const s=t[i].compareTo(e[i]);if(s!==0)return s;i++}return i<e.length?-1:i<t.length?1:0}static minCoordinate(t){let e=null;for(let i=0;i<t.length;i++)(e===null||e.compareTo(t[i])>0)&&(e=t[i]);return e}}class bC{compare(t,e){const i=t,s=e;return Ut.compare(i,s)}get interfaces_(){return[_r]}}class LC{compare(t,e){const i=t,s=e;if(i.length<s.length)return-1;if(i.length>s.length)return 1;if(i.length===0)return 0;const r=Ut.compare(i,s);return Ut.isEqualReversed(i,s)?0:r}OLDcompare(t,e){const i=t,s=e;if(i.length<s.length)return-1;if(i.length>s.length)return 1;if(i.length===0)return 0;const r=Ut.increasingDirection(i),o=Ut.increasingDirection(s);let a=r>0?0:i.length-1,l=o>0?0:i.length-1;for(let h=0;h<i.length;h++){const c=i[a].compareTo(s[l]);if(c!==0)return c;a+=r,l+=o}return 0}get interfaces_(){return[_r]}}Ut.ForwardComparator=bC;Ut.BidirectionalComparator=LC;Ut.coordArrayType=new Array(0).fill(null);class ph{static isWhitespace(t){return t<=32&&t>=0||t===127}static toUpperCase(t){return t.toUpperCase()}}class b{static toDimensionSymbol(t){switch(t){case b.FALSE:return b.SYM_FALSE;case b.TRUE:return b.SYM_TRUE;case b.DONTCARE:return b.SYM_DONTCARE;case b.P:return b.SYM_P;case b.L:return b.SYM_L;case b.A:return b.SYM_A}throw new dt("Unknown dimension value: "+t)}static toDimensionValue(t){switch(ph.toUpperCase(t)){case b.SYM_FALSE:return b.FALSE;case b.SYM_TRUE:return b.TRUE;case b.SYM_DONTCARE:return b.DONTCARE;case b.SYM_P:return b.P;case b.SYM_L:return b.L;case b.SYM_A:return b.A}throw new dt("Unknown dimension symbol: "+t)}}b.P=0;b.L=1;b.A=2;b.FALSE=-1;b.TRUE=-2;b.DONTCARE=-3;b.SYM_FALSE="F";b.SYM_TRUE="T";b.SYM_DONTCARE="*";b.SYM_P="0";b.SYM_L="1";b.SYM_A="2";class G{constructor(){G.constructor_.apply(this,arguments)}isGeometryCollection(){return this.getTypeCode()===G.TYPECODE_GEOMETRYCOLLECTION}getFactory(){return this._factory}getGeometryN(t){return this}getArea(){return 0}isRectangle(){return!1}equalsExact(t){return this===t||this.equalsExact(t,0)}geometryChanged(){this.apply(G.geometryChangedFilter)}geometryChangedAction(){this._envelope=null}equalsNorm(t){return t===null?!1:this.norm().equalsExact(t.norm())}getLength(){return 0}getNumGeometries(){return 1}compareTo(){let t;if(arguments.length===1){const e=arguments[0];return t=e,this.getTypeCode()!==t.getTypeCode()?this.getTypeCode()-t.getTypeCode():this.isEmpty()&&t.isEmpty()?0:this.isEmpty()?-1:t.isEmpty()?1:this.compareToSameClass(e)}else if(arguments.length===2){const e=arguments[0],i=arguments[1];return t=e,this.getTypeCode()!==t.getTypeCode()?this.getTypeCode()-t.getTypeCode():this.isEmpty()&&t.isEmpty()?0:this.isEmpty()?-1:t.isEmpty()?1:this.compareToSameClass(e,i)}}getUserData(){return this._userData}getSRID(){return this._SRID}getEnvelope(){return this.getFactory().toGeometry(this.getEnvelopeInternal())}static checkNotGeometryCollection(t){if(t.getTypeCode()===G.TYPECODE_GEOMETRYCOLLECTION)throw new dt("This method does not support GeometryCollection arguments")}equal(t,e,i){return i===0?t.equals(e):t.distance(e)<=i}norm(){const t=this.copy();return t.normalize(),t}reverse(){const t=this.reverseInternal();return this.envelope!=null&&(t.envelope=this.envelope.copy()),t.setSRID(this.getSRID()),t}copy(){const t=this.copyInternal();return t.envelope=this._envelope==null?null:this._envelope.copy(),t._SRID=this._SRID,t._userData=this._userData,t}getPrecisionModel(){return this._factory.getPrecisionModel()}getEnvelopeInternal(){return this._envelope===null&&(this._envelope=this.computeEnvelopeInternal()),new ct(this._envelope)}setSRID(t){this._SRID=t}setUserData(t){this._userData=t}compare(t,e){const i=t.iterator(),s=e.iterator();for(;i.hasNext()&&s.hasNext();){const r=i.next(),o=s.next(),a=r.compareTo(o);if(a!==0)return a}return i.hasNext()?1:s.hasNext()?-1:0}hashCode(){return this.getEnvelopeInternal().hashCode()}isEquivalentClass(t){return this.getTypeCode()==t.getTypeCode()}get interfaces_(){return[Lo,zi,Pe]}getClass(){return G}static hasNonEmptyElements(t){for(let e=0;e<t.length;e++)if(!t[e].isEmpty())return!0;return!1}static hasNullElements(t){for(let e=0;e<t.length;e++)if(t[e]===null)return!0;return!1}}G.constructor_=function(n){n&&(this._envelope=null,this._userData=null,this._factory=n,this._SRID=n.getSRID())};G.TYPECODE_POINT=0;G.TYPECODE_MULTIPOINT=1;G.TYPECODE_LINESTRING=2;G.TYPECODE_LINEARRING=3;G.TYPECODE_MULTILINESTRING=4;G.TYPECODE_POLYGON=5;G.TYPECODE_MULTIPOLYGON=6;G.TYPECODE_GEOMETRYCOLLECTION=7;G.TYPENAME_POINT="Point";G.TYPENAME_MULTIPOINT="MultiPoint";G.TYPENAME_LINESTRING="LineString";G.TYPENAME_LINEARRING="LinearRing";G.TYPENAME_MULTILINESTRING="MultiLineString";G.TYPENAME_POLYGON="Polygon";G.TYPENAME_MULTIPOLYGON="MultiPolygon";G.TYPENAME_GEOMETRYCOLLECTION="GeometryCollection";G.geometryChangedFilter={get interfaces_(){return[pr]},filter(n){n.geometryChangedAction()}};class Qa{filter(t){}}class Lf{}class ht{getCoordinate(){}getCoordinateCopy(t){}createCoordinate(){}getDimension(){}hasM(){return this.getMeasures()>0}getX(t){}hasZ(){return this.getDimension()-this.getMeasures()>2}getMeasures(){return 0}expandEnvelope(t){}copy(){}getY(t){}toCoordinateArray(){}getM(t){if(this.hasM()){const e=this.getDimension()-this.getMeasures();return this.getOrdinate(t,e)}else return H.NaN}setOrdinate(t,e,i){}getZ(t){return this.hasZ()?this.getOrdinate(t,2):H.NaN}size(){}getOrdinate(t,e){}get interfaces_(){return[Lo]}}ht.X=0;ht.Y=1;ht.Z=2;ht.M=3;class zt{static scroll(){if(arguments.length===2){if(Z(arguments[0],ht)&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1];zt.scroll(t,e,zt.isRing(t))}else if(Z(arguments[0],ht)&&arguments[1]instanceof R){const t=arguments[0],e=arguments[1],i=zt.indexOf(e,t);if(i<=0)return null;zt.scroll(t,i)}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(e<=0)return null;const r=t.copy(),o=i?t.size()-1:t.size();for(let a=0;a<o;a++)for(let l=0;l<t.getDimension();l++)t.setOrdinate(a,l,r.getOrdinate((e+a)%o,l));if(i)for(let a=0;a<t.getDimension();a++)t.setOrdinate(o,a,t.getOrdinate(0,a))}}static isEqual(t,e){const i=t.size(),s=e.size();if(i!==s)return!1;const r=Math.min(t.getDimension(),e.getDimension());for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=t.getOrdinate(o,a),h=e.getOrdinate(o,a);if(t.getOrdinate(o,a)!==e.getOrdinate(o,a)&&!(H.isNaN(l)&&H.isNaN(h)))return!1}return!0}static minCoordinateIndex(){if(arguments.length===1){const t=arguments[0];return zt.minCoordinateIndex(t,0,t.size()-1)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];let s=-1,r=null;for(let o=e;o<=i;o++){const a=t.getCoordinate(o);(r===null||r.compareTo(a)>0)&&(r=a,s=o)}return s}}static extend(t,e,i){const s=t.create(i,e.getDimension()),r=e.size();if(zt.copy(e,0,s,0,r),r>0)for(let o=r;o<i;o++)zt.copy(e,r-1,s,o,1);return s}static reverse(t){const e=t.size()-1,i=Math.trunc(e/2);for(let s=0;s<=i;s++)zt.swap(t,s,e-s)}static ensureValidRing(t,e){const i=e.size();return i===0?e:i<=3?zt.createClosedRing(t,e,4):e.getOrdinate(0,ht.X)===e.getOrdinate(i-1,ht.X)&&e.getOrdinate(0,ht.Y)===e.getOrdinate(i-1,ht.Y)?e:zt.createClosedRing(t,e,i+1)}static minCoordinate(t){let e=null;for(let i=0;i<t.size();i++){const s=t.getCoordinate(i);(e===null||e.compareTo(s)>0)&&(e=s)}return e}static copyCoord(t,e,i,s){const r=Math.min(t.getDimension(),i.getDimension());for(let o=0;o<r;o++)i.setOrdinate(s,o,t.getOrdinate(e,o))}static isRing(t){const e=t.size();return e===0?!0:e<=3?!1:t.getOrdinate(0,ht.X)===t.getOrdinate(e-1,ht.X)&&t.getOrdinate(0,ht.Y)===t.getOrdinate(e-1,ht.Y)}static swap(t,e,i){if(e===i)return null;for(let s=0;s<t.getDimension();s++){const r=t.getOrdinate(e,s);t.setOrdinate(e,s,t.getOrdinate(i,s)),t.setOrdinate(i,s,r)}}static copy(t,e,i,s,r){for(let o=0;o<r;o++)zt.copyCoord(t,e+o,i,s+o)}static indexOf(t,e){for(let i=0;i<e.size();i++)if(t.x===e.getOrdinate(i,ht.X)&&t.y===e.getOrdinate(i,ht.Y))return i;return-1}static createClosedRing(t,e,i){const s=t.create(i,e.getDimension()),r=e.size();zt.copy(e,0,s,0,r);for(let o=r;o<i;o++)zt.copy(e,0,s,o,1);return s}}class tl{filter(t){}}class el{filter(t,e){}isGeometryChanged(){}isDone(){}}class he extends G{constructor(){super(),he.constructor_.apply(this,arguments)}static constructor_(){if(this._points=null,arguments.length!==0){if(arguments.length===2){const t=arguments[0],e=arguments[1];G.constructor_.call(this,e),this.init(t)}}}computeEnvelopeInternal(){return this.isEmpty()?new ct:this._points.expandEnvelope(new ct)}isRing(){return this.isClosed()&&Ut.isRing(this.getCoordinates())}getCoordinates(){return this._points.toCoordinateArray()}copyInternal(){return new he(this._points.copy(),this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof G){const t=arguments[0],e=arguments[1];if(!this.isEquivalentClass(t))return!1;const i=t;if(this._points.size()!==i._points.size())return!1;for(let s=0;s<this._points.size();s++)if(!this.equal(this._points.getCoordinate(s),i._points.getCoordinate(s),e))return!1;return!0}else return super.equalsExact.apply(this,arguments)}isClosed(){return this.isEmpty()?!1:this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints()-1))}reverseInternal(){const t=this._points.copy();return zt.reverse(t),this.getFactory().createLineString(t)}getEndPoint(){return this.isEmpty()?null:this.getPointN(this.getNumPoints()-1)}getTypeCode(){return G.TYPECODE_LINESTRING}getDimension(){return 1}getBoundary(){throw new wi}isEquivalentClass(t){return t instanceof he}getCoordinateSequence(){return this._points}getPointN(t){return this.getFactory().createPoint(this._points.getCoordinate(t))}normalize(){for(let t=0;t<Math.trunc(this._points.size()/2);t++){const e=this._points.size()-1-t;if(!this._points.getCoordinate(t).equals(this._points.getCoordinate(e))){if(this._points.getCoordinate(t).compareTo(this._points.getCoordinate(e))>0){const i=this._points.copy();zt.reverse(i),this._points=i}return null}}}getCoordinate(){return this.isEmpty()?null:this._points.getCoordinate(0)}getBoundaryDimension(){return this.isClosed()?b.FALSE:0}getLength(){return vC.ofLine(this._points)}getNumPoints(){return this._points.size()}compareToSameClass(){if(arguments.length===1){const e=arguments[0];let i=0,s=0;for(;i<this._points.size()&&s<e._points.size();){const r=this._points.getCoordinate(i).compareTo(e._points.getCoordinate(s));if(r!==0)return r;i++,s++}return i<this._points.size()?1:s<e._points.size()?-1:0}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t;return e.compare(this._points,i._points)}}apply(){if(Z(arguments[0],Qa)){const t=arguments[0];for(let e=0;e<this._points.size();e++)t.filter(this._points.getCoordinate(e))}else if(Z(arguments[0],el)){const t=arguments[0];if(this._points.size()===0)return null;for(let e=0;e<this._points.size()&&(t.filter(this._points,e),!t.isDone());e++);t.isGeometryChanged()&&this.geometryChanged()}else Z(arguments[0],tl)?arguments[0].filter(this):Z(arguments[0],pr)&&arguments[0].filter(this)}getCoordinateN(t){return this._points.getCoordinate(t)}getGeometryType(){return G.TYPENAME_LINESTRING}isEmpty(){return this._points.size()===0}init(t){if(t===null&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),t.size()===1)throw new dt("Invalid number of points in LineString (found "+t.size()+" - must be 0 or >= 2)");this._points=t}isCoordinate(t){for(let e=0;e<this._points.size();e++)if(this._points.getCoordinate(e).equals(t))return!0;return!1}getStartPoint(){return this.isEmpty()?null:this.getPointN(0)}get interfaces_(){return[Lf]}}class ei extends he{constructor(){super(),ei.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];he.constructor_.call(this,t,e),this.validateConstruction()}copyInternal(){return new ei(this._points.copy(),this._factory)}getBoundaryDimension(){return b.FALSE}isClosed(){return this.isEmpty()?!0:super.isClosed.call(this)}reverseInternal(){const t=this._points.copy();return zt.reverse(t),this.getFactory().createLinearRing(t)}getTypeCode(){return G.TYPECODE_LINEARRING}validateConstruction(){if(!this.isEmpty()&&!super.isClosed.call(this))throw new dt("Points of LinearRing do not form a closed linestring");if(this.getCoordinateSequence().size()>=1&&this.getCoordinateSequence().size()<ei.MINIMUM_VALID_SIZE)throw new dt("Invalid number of points in LinearRing (found "+this.getCoordinateSequence().size()+" - must be 0 or >= 4)")}getGeometryType(){return G.TYPENAME_LINEARRING}}ei.MINIMUM_VALID_SIZE=4;class Sf{create(){if(arguments.length===1)arguments[0]instanceof Array||Z(arguments[0],ht);else if(arguments.length!==2){if(arguments.length===3){const t=arguments[0],e=arguments[1];return this.create(t,e)}}}}class il{constructor(t){this.str=t}append(t){this.str+=t}setCharAt(t,e){this.str=this.str.substr(0,t)+e+this.str.substr(t+1)}toString(){return this.str}}class $i{constructor(){$i.constructor_.apply(this,arguments)}static constructor_(){if(this._dimension=3,this._measures=0,this._coordinates=null,arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];$i.constructor_.call(this,t,Ut.dimension(t),Ut.measures(t))}else if(Number.isInteger(arguments[0])){const t=arguments[0];this._coordinates=new Array(t).fill(null);for(let e=0;e<t;e++)this._coordinates[e]=new R}else if(Z(arguments[0],ht)){const t=arguments[0];if(t===null)return this._coordinates=new Array(0).fill(null),null;this._dimension=t.getDimension(),this._measures=t.getMeasures(),this._coordinates=new Array(t.size()).fill(null);for(let e=0;e<this._coordinates.length;e++)this._coordinates[e]=t.getCoordinateCopy(e)}}else if(arguments.length===2){if(arguments[0]instanceof Array&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1];$i.constructor_.call(this,t,e,Ut.measures(t))}else if(Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1];this._coordinates=new Array(t).fill(null),this._dimension=e;for(let i=0;i<t;i++)this._coordinates[i]=nr.create(e)}}else if(arguments.length===3){if(Number.isInteger(arguments[2])&&arguments[0]instanceof Array&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1],i=arguments[2];this._dimension=e,this._measures=i,t===null?this._coordinates=new Array(0).fill(null):this._coordinates=t}else if(Number.isInteger(arguments[2])&&Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1],i=arguments[2];this._coordinates=new Array(t).fill(null),this._dimension=e,this._measures=i;for(let s=0;s<t;s++)this._coordinates[s]=this.createCoordinate()}}}getCoordinate(){if(arguments.length===1){const t=arguments[0];return this._coordinates[t]}else if(arguments.length===2){const t=arguments[0];arguments[1].setCoordinate(this._coordinates[t])}}getCoordinateCopy(t){const e=this.createCoordinate();return e.setCoordinate(this._coordinates[t]),e}createCoordinate(){return nr.create(this.getDimension(),this.getMeasures())}getDimension(){return this._dimension}getX(t){return this._coordinates[t].x}getMeasures(){return this._measures}expandEnvelope(t){for(let e=0;e<this._coordinates.length;e++)t.expandToInclude(this._coordinates[e]);return t}copy(){const t=new Array(this.size()).fill(null);for(let e=0;e<this._coordinates.length;e++){const i=this.createCoordinate();i.setCoordinate(this._coordinates[e]),t[e]=i}return new $i(t,this._dimension,this._measures)}toString(){if(this._coordinates.length>0){const t=new il(17*this._coordinates.length);t.append("("),t.append(this._coordinates[0]);for(let e=1;e<this._coordinates.length;e++)t.append(", "),t.append(this._coordinates[e]);return t.append(")"),t.toString()}else return"()"}getY(t){return this._coordinates[t].y}toCoordinateArray(){return this._coordinates}getM(t){return this.hasM()?this._coordinates[t].getM():H.NaN}setOrdinate(t,e,i){switch(e){case ht.X:this._coordinates[t].x=i;break;case ht.Y:this._coordinates[t].y=i;break;default:this._coordinates[t].setOrdinate(e,i)}}getZ(t){return this.hasZ()?this._coordinates[t].getZ():H.NaN}size(){return this._coordinates.length}getOrdinate(t,e){switch(e){case ht.X:return this._coordinates[t].x;case ht.Y:return this._coordinates[t].y;default:return this._coordinates[t].getOrdinate(e)}}get interfaces_(){return[ht,Pe]}}class rr{static instance(){return rr.instanceObject}readResolve(){return rr.instance()}create(){if(arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];return new $i(t)}else if(Z(arguments[0],ht)){const t=arguments[0];return new $i(t)}}else if(arguments.length===2){let t=arguments[0],e=arguments[1];return e>3&&(e=3),e<2&&(e=2),new $i(t,e)}else if(arguments.length===3){let t=arguments[0],e=arguments[1],i=arguments[2],s=e-i;return i>1&&(i=1),s>3&&(s=3),s<2&&(s=2),new $i(t,s+i,i)}}get interfaces_(){return[Sf,Pe]}}rr.instanceObject=new rr;let Nf=class extends Ge{contains(){}};class SC extends Nf{}class xh extends SC{constructor(t){super(),this.array=[],t instanceof Ge&&this.addAll(t)}contains(t){for(const e of this.array)if(e.compareTo(t)===0)return!0;return!1}add(t){if(this.contains(t))return!1;for(let e=0,i=this.array.length;e<i;e++)if(this.array[e].compareTo(t)===1)return!!this.array.splice(e,0,t);return this.array.push(t),!0}addAll(t){for(const e of t)this.add(e);return!0}remove(){throw new wi}size(){return this.array.length}isEmpty(){return this.array.length===0}toArray(){return this.array.slice()}iterator(){return new NC(this.array)}}let NC=class{constructor(t){this.array=t,this.position=0}next(){if(this.position===this.array.length)throw new xr;return this.array[this.position++]}hasNext(){return this.position<this.array.length}remove(){throw new wi}};class Qn{static sort(){const t=arguments[0];if(arguments.length===1)t.sort((e,i)=>e.compareTo(i));else if(arguments.length===2)t.sort((e,i)=>arguments[1].compare(e,i));else if(arguments.length===3){const e=t.slice(arguments[1],arguments[2]);e.sort();const i=t.slice(0,arguments[1]).concat(e,t.slice(arguments[2],t.length));t.splice(0,t.length);for(const s of i)t.push(s)}else if(arguments.length===4){const e=t.slice(arguments[1],arguments[2]);e.sort((s,r)=>arguments[3].compare(s,r));const i=t.slice(0,arguments[1]).concat(e,t.slice(arguments[2],t.length));t.splice(0,t.length);for(const s of i)t.push(s)}}static asList(t){const e=new it;for(const i of t)e.add(i);return e}static copyOf(t,e){return t.slice(0,e)}}class Vt extends G{constructor(){super(),Vt.constructor_.apply(this,arguments)}static constructor_(){if(this._geometries=null,arguments.length!==0){if(arguments.length===2){let t=arguments[0],e=arguments[1];if(G.constructor_.call(this,e),t===null&&(t=[]),G.hasNullElements(t))throw new dt("geometries must not contain null elements");this._geometries=t}}}computeEnvelopeInternal(){const t=new ct;for(let e=0;e<this._geometries.length;e++)t.expandToInclude(this._geometries[e].getEnvelopeInternal());return t}getGeometryN(t){return this._geometries[t]}getCoordinates(){const t=new Array(this.getNumPoints()).fill(null);let e=-1;for(let i=0;i<this._geometries.length;i++){const s=this._geometries[i].getCoordinates();for(let r=0;r<s.length;r++)e++,t[e]=s[r]}return t}getArea(){let t=0;for(let e=0;e<this._geometries.length;e++)t+=this._geometries[e].getArea();return t}copyInternal(){const t=new Array(this._geometries.length).fill(null);for(let e=0;e<t.length;e++)t[e]=this._geometries[e].copy();return new Vt(t,this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof G){const t=arguments[0],e=arguments[1];if(!this.isEquivalentClass(t))return!1;const i=t;if(this._geometries.length!==i._geometries.length)return!1;for(let s=0;s<this._geometries.length;s++)if(!this._geometries[s].equalsExact(i._geometries[s],e))return!1;return!0}else return super.equalsExact.apply(this,arguments)}reverseInternal(){const t=this._geometries.length,e=new it(t);for(let i=0;i<t;i++)e.add(this._geometries[i].reverse());return this.getFactory().buildGeometry(e)}getTypeCode(){return G.TYPECODE_GEOMETRYCOLLECTION}getDimension(){let t=b.FALSE;for(let e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getDimension());return t}getNumGeometries(){return this._geometries.length}getBoundary(){return G.checkNotGeometryCollection(this),rt.shouldNeverReachHere(),null}getGeometryType(){return G.TYPENAME_GEOMETRYCOLLECTION}isEmpty(){for(let t=0;t<this._geometries.length;t++)if(!this._geometries[t].isEmpty())return!1;return!0}normalize(){for(let t=0;t<this._geometries.length;t++)this._geometries[t].normalize();Qn.sort(this._geometries)}getCoordinate(){return this.isEmpty()?null:this._geometries[0].getCoordinate()}getBoundaryDimension(){let t=b.FALSE;for(let e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getBoundaryDimension());return t}getLength(){let t=0;for(let e=0;e<this._geometries.length;e++)t+=this._geometries[e].getLength();return t}getNumPoints(){let t=0;for(let e=0;e<this._geometries.length;e++)t+=this._geometries[e].getNumPoints();return t}compareToSameClass(){if(arguments.length===1){const t=arguments[0],e=new xh(Qn.asList(this._geometries)),i=new xh(Qn.asList(t._geometries));return this.compare(e,i)}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t,s=this.getNumGeometries(),r=i.getNumGeometries();let o=0;for(;o<s&&o<r;){const a=this.getGeometryN(o),l=i.getGeometryN(o),h=a.compareToSameClass(l,e);if(h!==0)return h;o++}return o<s?1:o<r?-1:0}}apply(){if(Z(arguments[0],Qa)){const t=arguments[0];for(let e=0;e<this._geometries.length;e++)this._geometries[e].apply(t)}else if(Z(arguments[0],el)){const t=arguments[0];if(this._geometries.length===0)return null;for(let e=0;e<this._geometries.length&&(this._geometries[e].apply(t),!t.isDone());e++);t.isGeometryChanged()&&this.geometryChanged()}else if(Z(arguments[0],tl)){const t=arguments[0];t.filter(this);for(let e=0;e<this._geometries.length;e++)this._geometries[e].apply(t)}else if(Z(arguments[0],pr)){const t=arguments[0];t.filter(this);for(let e=0;e<this._geometries.length;e++)this._geometries[e].apply(t)}}}class nl{}class ii extends Vt{constructor(){super(),ii.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];Vt.constructor_.call(this,t,e)}copyInternal(){const t=new Array(this._geometries.length).fill(null);for(let e=0;e<t.length;e++)t[e]=this._geometries[e].copy();return new ii(t,this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof G){const t=arguments[0],e=arguments[1];return this.isEquivalentClass(t)?super.equalsExact.call(this,t,e):!1}else return super.equalsExact.apply(this,arguments)}getBoundaryDimension(){return 1}getTypeCode(){return G.TYPECODE_MULTIPOLYGON}getDimension(){return 2}getBoundary(){if(this.isEmpty())return this.getFactory().createMultiLineString();const t=new it;for(let i=0;i<this._geometries.length;i++){const r=this._geometries[i].getBoundary();for(let o=0;o<r.getNumGeometries();o++)t.add(r.getGeometryN(o))}const e=new Array(t.size()).fill(null);return this.getFactory().createMultiLineString(t.toArray(e))}getGeometryType(){return G.TYPENAME_MULTIPOLYGON}get interfaces_(){return[nl]}}let Af=class{get(){}put(){}size(){}values(){}entrySet(){}};class Of extends Nf{constructor(t){super(),this.map=new Map,t instanceof Ge&&this.addAll(t)}contains(t){const e=t.hashCode?t.hashCode():t;return!!this.map.has(e)}add(t){const e=t.hashCode?t.hashCode():t;return this.map.has(e)?!1:!!this.map.set(e,t)}addAll(t){for(const e of t)this.add(e);return!0}remove(){throw new wi}size(){return this.map.size}isEmpty(){return this.map.size===0}toArray(){return Array.from(this.map.values())}iterator(){return new AC(this.map)}[Symbol.iterator](){return this.map}}let AC=class{constructor(t){this.iterator=t.values();const{done:e,value:i}=this.iterator.next();this.done=e,this.value=i}next(){if(this.done)throw new xr;const t=this.value,{done:e,value:i}=this.iterator.next();return this.done=e,this.value=i,t}hasNext(){return!this.done}remove(){throw new wi}};class Pf extends Af{constructor(){super(),this.map=new Map}get(t){return this.map.get(t)||null}put(t,e){return this.map.set(t,e),e}values(){const t=new it,e=this.map.values();let i=e.next();for(;!i.done;)t.add(i.value),i=e.next();return t}entrySet(){const t=new Of;return this.map.entries().forEach(e=>t.add(e)),t}size(){return this.map.size()}}class sl{constructor(t){this.value=t}intValue(){return this.value}compareTo(t){return this.value<t?-1:this.value>t?1:0}static compare(t,e){return t<e?-1:t>e?1:0}static isNan(t){return Number.isNaN(t)}static valueOf(t){return new sl(t)}}class Ot{constructor(){Ot.constructor_.apply(this,arguments)}static constructor_(){if(this._modelType=null,this._scale=null,arguments.length===0)this._modelType=Ot.FLOATING;else if(arguments.length===1){if(arguments[0]instanceof Oi){const t=arguments[0];this._modelType=t,t===Ot.FIXED&&this.setScale(1)}else if(typeof arguments[0]=="number"){const t=arguments[0];this._modelType=Ot.FIXED,this.setScale(t)}else if(arguments[0]instanceof Ot){const t=arguments[0];this._modelType=t._modelType,this._scale=t._scale}}}static mostPrecise(t,e){return t.compareTo(e)>=0?t:e}equals(t){if(!(t instanceof Ot))return!1;const e=t;return this._modelType===e._modelType&&this._scale===e._scale}compareTo(t){const e=t,i=this.getMaximumSignificantDigits(),s=e.getMaximumSignificantDigits();return sl.compare(i,s)}getType(){return this._modelType}toString(){let t="UNKNOWN";return this._modelType===Ot.FLOATING?t="Floating":this._modelType===Ot.FLOATING_SINGLE?t="Floating-Single":this._modelType===Ot.FIXED&&(t="Fixed (Scale="+this.getScale()+")"),t}makePrecise(){if(typeof arguments[0]=="number"){const t=arguments[0];return H.isNaN(t)||this._modelType===Ot.FLOATING_SINGLE?t:this._modelType===Ot.FIXED?Math.round(t*this._scale)/this._scale:t}else if(arguments[0]instanceof R){const t=arguments[0];if(this._modelType===Ot.FLOATING)return null;t.x=this.makePrecise(t.x),t.y=this.makePrecise(t.y)}}getMaximumSignificantDigits(){let t=16;return this._modelType===Ot.FLOATING?t=16:this._modelType===Ot.FLOATING_SINGLE?t=6:this._modelType===Ot.FIXED&&(t=1+Math.trunc(Math.ceil(Math.log(this.getScale())/Math.log(10)))),t}setScale(t){this._scale=Math.abs(t)}getScale(){return this._scale}isFloating(){return this._modelType===Ot.FLOATING||this._modelType===Ot.FLOATING_SINGLE}get interfaces_(){return[Pe,zi]}}class Oi{constructor(){Oi.constructor_.apply(this,arguments)}static constructor_(){this._name=null;const t=arguments[0];this._name=t,Oi.nameToTypeMap.put(t,this)}readResolve(){return Oi.nameToTypeMap.get(this._name)}toString(){return this._name}get interfaces_(){return[Pe]}}Oi.nameToTypeMap=new Pf;Ot.Type=Oi;Ot.FIXED=new Oi("FIXED");Ot.FLOATING=new Oi("FLOATING");Ot.FLOATING_SINGLE=new Oi("FLOATING SINGLE");Ot.maximumPreciseValue=9007199254740992;class rs extends Vt{constructor(){super(),rs.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];Vt.constructor_.call(this,t,e)}copyInternal(){const t=new Array(this._geometries.length).fill(null);for(let e=0;e<t.length;e++)t[e]=this._geometries[e].copy();return new rs(t,this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof G){const t=arguments[0],e=arguments[1];return this.isEquivalentClass(t)?super.equalsExact.call(this,t,e):!1}else return super.equalsExact.apply(this,arguments)}getBoundaryDimension(){return this.isClosed()?b.FALSE:0}isClosed(){if(this.isEmpty())return!1;for(let t=0;t<this._geometries.length;t++)if(!this._geometries[t].isClosed())return!1;return!0}getTypeCode(){return G.TYPECODE_MULTILINESTRING}getDimension(){return 1}getBoundary(){throw new wi}getGeometryType(){return G.TYPENAME_MULTILINESTRING}get interfaces_(){return[Lf]}}class Kf{}class os extends Gn{constructor(t){super(t),this.name=Object.keys({IllegalStateException:os})[0]}}class ki extends G{constructor(){super(),ki.constructor_.apply(this,arguments)}static constructor_(){this._coordinates=null;const t=arguments[0],e=arguments[1];G.constructor_.call(this,e),this.init(t)}computeEnvelopeInternal(){if(this.isEmpty())return new ct;const t=new ct;return t.expandToInclude(this._coordinates.getX(0),this._coordinates.getY(0)),t}getCoordinates(){return this.isEmpty()?[]:[this.getCoordinate()]}copyInternal(){return new ki(this._coordinates.copy(),this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof G){const t=arguments[0],e=arguments[1];return this.isEquivalentClass(t)?this.isEmpty()&&t.isEmpty()?!0:this.isEmpty()!==t.isEmpty()?!1:this.equal(t.getCoordinate(),this.getCoordinate(),e):!1}else return super.equalsExact.apply(this,arguments)}reverseInternal(){return this.getFactory().createPoint(this._coordinates.copy())}getTypeCode(){return G.TYPECODE_POINT}getDimension(){return 0}getNumPoints(){return this.isEmpty()?0:1}getX(){if(this.getCoordinate()===null)throw new os("getX called on empty Point");return this.getCoordinate().x}getBoundary(){return this.getFactory().createGeometryCollection()}getGeometryType(){return G.TYPENAME_POINT}getCoordinateSequence(){return this._coordinates}getY(){if(this.getCoordinate()===null)throw new os("getY called on empty Point");return this.getCoordinate().y}isSimple(){return!0}normalize(){}getCoordinate(){return this._coordinates.size()!==0?this._coordinates.getCoordinate(0):null}getBoundaryDimension(){return b.FALSE}compareToSameClass(){if(arguments.length===1){const e=arguments[0];return this.getCoordinate().compareTo(e.getCoordinate())}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t;return e.compare(this._coordinates,i._coordinates)}}apply(){if(Z(arguments[0],Qa)){const t=arguments[0];if(this.isEmpty())return null;t.filter(this.getCoordinate())}else if(Z(arguments[0],el)){const t=arguments[0];if(this.isEmpty())return null;t.filter(this._coordinates,0),t.isGeometryChanged()&&this.geometryChanged()}else Z(arguments[0],tl)?arguments[0].filter(this):Z(arguments[0],pr)&&arguments[0].filter(this)}isEmpty(){return this._coordinates.size()===0}init(t){t===null&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),rt.isTrue(t.size()<=1),this._coordinates=t}get interfaces_(){return[Kf]}}class so{static ofRingSigned(){if(arguments[0]instanceof Array){const t=arguments[0];if(t.length<3)return 0;let e=0;const i=t[0].x;for(let s=1;s<t.length-1;s++){const r=t[s].x-i,o=t[s+1].y,a=t[s-1].y;e+=r*(a-o)}return e/2}else if(Z(arguments[0],ht)){const t=arguments[0],e=t.size();if(e<3)return 0;const i=new R,s=new R,r=new R;t.getCoordinate(0,s),t.getCoordinate(1,r);const o=s.x;r.x-=o;let a=0;for(let l=1;l<e-1;l++)i.y=s.y,s.x=r.x,s.y=r.y,t.getCoordinate(l+1,r),r.x-=o,a+=s.x*(i.y-r.y);return a/2}}static ofRing(){if(arguments[0]instanceof Array){const t=arguments[0];return Math.abs(so.ofRingSigned(t))}else if(Z(arguments[0],ht)){const t=arguments[0];return Math.abs(so.ofRingSigned(t))}}}class ro{constructor(t){this.str=t}append(t){this.str+=t}setCharAt(t,e){this.str=this.str.substr(0,t)+e+this.str.substr(t+1)}toString(){return this.str}}class E{constructor(){E.constructor_.apply(this,arguments)}static constructor_(){if(this._hi=0,this._lo=0,arguments.length===0)this.init(0);else if(arguments.length===1){if(typeof arguments[0]=="number"){const t=arguments[0];this.init(t)}else if(arguments[0]instanceof E){const t=arguments[0];this.init(t)}else if(typeof arguments[0]=="string"){const t=arguments[0];E.constructor_.call(this,E.parse(t))}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.init(t,e)}}static determinant(){if(typeof arguments[3]=="number"&&typeof arguments[2]=="number"&&typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];return E.determinant(E.valueOf(t),E.valueOf(e),E.valueOf(i),E.valueOf(s))}else if(arguments[3]instanceof E&&arguments[2]instanceof E&&arguments[0]instanceof E&&arguments[1]instanceof E){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];return t.multiply(s).selfSubtract(e.multiply(i))}}static sqr(t){return E.valueOf(t).selfMultiply(t)}static valueOf(){if(typeof arguments[0]=="string"){const t=arguments[0];return E.parse(t)}else if(typeof arguments[0]=="number"){const t=arguments[0];return new E(t)}}static sqrt(t){return E.valueOf(t).sqrt()}static parse(t){let e=0;const i=t.length;for(;ph.isWhitespace(t.charAt(e));)e++;let s=!1;if(e<i){const d=t.charAt(e);(d==="-"||d==="+")&&(e++,d==="-"&&(s=!0))}const r=new E;let o=0,a=0,l=0,h=!1;for(;!(e>=i);){const d=t.charAt(e);if(e++,ph.isDigit(d)){const g=d-"0";r.selfMultiply(E.TEN),r.selfAdd(g),o++;continue}if(d==="."){a=o,h=!0;continue}if(d==="e"||d==="E"){const g=t.substring(e);try{l=sl.parseInt(g)}catch(f){throw f instanceof NumberFormatException?new NumberFormatException("Invalid exponent "+g+" in string "+t):f}finally{}break}throw new NumberFormatException("Unexpected character '"+d+"' at position "+e+" in string "+t)}let c=r;h||(a=o);const u=o-a-l;if(u===0)c=r;else if(u>0){const d=E.TEN.pow(u);c=r.divide(d)}else if(u<0){const d=E.TEN.pow(-u);c=r.multiply(d)}return s?c.negate():c}static createNaN(){return new E(H.NaN,H.NaN)}static copy(t){return new E(t)}static magnitude(t){const e=Math.abs(t),i=Math.log(e)/Math.log(10);let s=Math.trunc(Math.floor(i));return Math.pow(10,s)*10<=e&&(s+=1),s}static stringOfChar(t,e){const i=new ro;for(let s=0;s<e;s++)i.append(t);return i.toString()}le(t){return this._hi<t._hi||this._hi===t._hi&&this._lo<=t._lo}extractSignificantDigits(t,e){let i=this.abs(),s=E.magnitude(i._hi);const r=E.TEN.pow(s);i=i.divide(r),i.gt(E.TEN)?(i=i.divide(E.TEN),s+=1):i.lt(E.ONE)&&(i=i.multiply(E.TEN),s-=1);const o=s+1,a=new ro,l=E.MAX_PRINT_DIGITS-1;for(let h=0;h<=l;h++){t&&h===o&&a.append(".");const c=Math.trunc(i._hi);if(c<0)break;let u=!1,d=0;c>9?(u=!0,d="9"):d="0"+c,a.append(d),i=i.subtract(E.valueOf(c)).multiply(E.TEN),u&&i.selfAdd(E.TEN);let g=!0;const f=E.magnitude(i._hi);if(f<0&&Math.abs(f)>=l-h&&(g=!1),!g)break}return e[0]=s,a.toString()}sqr(){return this.multiply(this)}getSpecialNumberString(){return this.isZero()?"0.0":this.isNaN()?"NaN ":null}setValue(){if(arguments[0]instanceof E){const t=arguments[0];return this.init(t),this}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.init(t),this}}multiply(){if(arguments[0]instanceof E){const t=arguments[0];return t.isNaN()?E.createNaN():E.copy(this).selfMultiply(t)}else if(typeof arguments[0]=="number"){const t=arguments[0];return H.isNaN(t)?E.createNaN():E.copy(this).selfMultiply(t,0)}}isNaN(){return H.isNaN(this._hi)}reciprocal(){let t=null,e=null,i=null,s=null,r=null,o=null,a=null,l=null;r=1/this._hi,o=E.SPLIT*r,t=o-r,l=E.SPLIT*this._hi,t=o-t,e=r-t,i=l-this._hi,a=r*this._hi,i=l-i,s=this._hi-i,l=t*i-a+t*s+e*i+e*s,o=(1-a-l-r*this._lo)/this._hi;const h=r+o,c=r-h+o;return new E(h,c)}doubleValue(){return this._hi+this._lo}subtract(){if(arguments[0]instanceof E){const t=arguments[0];return this.add(t.negate())}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.add(-t)}}equals(){if(arguments.length===1&&arguments[0]instanceof E){const t=arguments[0];return this._hi===t._hi&&this._lo===t._lo}}isZero(){return this._hi===0&&this._lo===0}selfSubtract(){if(arguments[0]instanceof E){const t=arguments[0];return this.isNaN()?this:this.selfAdd(-t._hi,-t._lo)}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.isNaN()?this:this.selfAdd(-t,0)}}min(t){return this.le(t)?this:t}selfDivide(){if(arguments.length===1){if(arguments[0]instanceof E){const t=arguments[0];return this.selfDivide(t._hi,t._lo)}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.selfDivide(t,0)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];let i=null,s=null,r=null,o=null,a=null,l=null,h=null,c=null;return a=this._hi/t,l=E.SPLIT*a,i=l-a,c=E.SPLIT*t,i=l-i,s=a-i,r=c-t,h=a*t,r=c-r,o=t-r,c=i*r-h+i*o+s*r+s*o,l=(this._hi-h-c+this._lo-a*e)/t,c=a+l,this._hi=c,this._lo=a-c+l,this}}dump(){return"DD<"+this._hi+", "+this._lo+">"}divide(){if(arguments[0]instanceof E){const t=arguments[0];let e=null,i=null,s=null,r=null,o=null,a=null,l=null,h=null;o=this._hi/t._hi,a=E.SPLIT*o,e=a-o,h=E.SPLIT*t._hi,e=a-e,i=o-e,s=h-t._hi,l=o*t._hi,s=h-s,r=t._hi-s,h=e*s-l+e*r+i*s+i*r,a=(this._hi-l-h+this._lo-o*t._lo)/t._hi,h=o+a;const c=h,u=o-h+a;return new E(c,u)}else if(typeof arguments[0]=="number"){const t=arguments[0];return H.isNaN(t)?E.createNaN():E.copy(this).selfDivide(t,0)}}ge(t){return this._hi>t._hi||this._hi===t._hi&&this._lo>=t._lo}pow(t){if(t===0)return E.valueOf(1);let e=new E(this),i=E.valueOf(1),s=Math.abs(t);if(s>1)for(;s>0;)s%2===1&&i.selfMultiply(e),s/=2,s>0&&(e=e.sqr());else i=e;return t<0?i.reciprocal():i}ceil(){if(this.isNaN())return E.NaN;const t=Math.ceil(this._hi);let e=0;return t===this._hi&&(e=Math.ceil(this._lo)),new E(t,e)}compareTo(t){const e=t;return this._hi<e._hi?-1:this._hi>e._hi?1:this._lo<e._lo?-1:this._lo>e._lo?1:0}rint(){return this.isNaN()?this:this.add(.5).floor()}max(t){return this.ge(t)?this:t}sqrt(){if(this.isZero())return E.valueOf(0);if(this.isNegative())return E.NaN;const t=1/Math.sqrt(this._hi),e=this._hi*t,i=E.valueOf(e),r=this.subtract(i.sqr())._hi*(t*.5);return i.add(r)}selfAdd(){if(arguments.length===1){if(arguments[0]instanceof E){const t=arguments[0];return this.selfAdd(t._hi,t._lo)}else if(typeof arguments[0]=="number"){const t=arguments[0];let e=null,i=null,s=null,r=null,o=null,a=null;return s=this._hi+t,o=s-this._hi,r=s-o,r=t-o+(this._hi-r),a=r+this._lo,e=s+a,i=a+(s-e),this._hi=e+i,this._lo=i+(e-this._hi),this}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];let i=null,s=null,r=null,o=null,a=null,l=null,h=null,c=null;a=this._hi+t,r=this._lo+e,h=a-this._hi,c=r-this._lo,l=a-h,o=r-c,l=t-h+(this._hi-l),o=e-c+(this._lo-o),h=l+r,i=a+h,s=h+(a-i),h=o+s;const u=i+h,d=h+(i-u);return this._hi=u,this._lo=d,this}}selfMultiply(){if(arguments.length===1){if(arguments[0]instanceof E){const t=arguments[0];return this.selfMultiply(t._hi,t._lo)}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.selfMultiply(t,0)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];let i=null,s=null,r=null,o=null,a=null,l=null;a=E.SPLIT*this._hi,i=a-this._hi,l=E.SPLIT*t,i=a-i,s=this._hi-i,r=l-t,a=this._hi*t,r=l-r,o=t-r,l=i*r-a+i*o+s*r+s*o+(this._hi*e+this._lo*t);const h=a+l;i=a-h;const c=l+i;return this._hi=h,this._lo=c,this}}selfSqr(){return this.selfMultiply(this)}floor(){if(this.isNaN())return E.NaN;const t=Math.floor(this._hi);let e=0;return t===this._hi&&(e=Math.floor(this._lo)),new E(t,e)}negate(){return this.isNaN()?this:new E(-this._hi,-this._lo)}clone(){try{return null}catch(t){if(t instanceof CloneNotSupportedException)return null;throw t}finally{}}intValue(){return Math.trunc(this._hi)}toString(){const t=E.magnitude(this._hi);return t>=-3&&t<=20?this.toStandardNotation():this.toSciNotation()}toStandardNotation(){const t=this.getSpecialNumberString();if(t!==null)return t;const e=new Array(1).fill(null),i=this.extractSignificantDigits(!0,e),s=e[0]+1;let r=i;if(i.charAt(0)===".")r="0"+i;else if(s<0)r="0."+E.stringOfChar("0",-s)+i;else if(i.indexOf(".")===-1){const o=s-i.length,a=E.stringOfChar("0",o);r=i+a+".0"}return this.isNegative()?"-"+r:r}toSciNotation(){if(this.isZero())return E.SCI_NOT_ZERO;const t=this.getSpecialNumberString();if(t!==null)return t;const e=new Array(1).fill(null),i=this.extractSignificantDigits(!1,e),s=E.SCI_NOT_EXPONENT_CHAR+e[0];if(i.charAt(0)==="0")throw new os("Found leading zero: "+i);let r="";i.length>1&&(r=i.substring(1));const o=i.charAt(0)+"."+r;return this.isNegative()?"-"+o+s:o+s}abs(){return this.isNaN()?E.NaN:this.isNegative()?this.negate():new E(this)}isPositive(){return this._hi>0||this._hi===0&&this._lo>0}lt(t){return this._hi<t._hi||this._hi===t._hi&&this._lo<t._lo}add(){if(arguments[0]instanceof E){const t=arguments[0];return E.copy(this).selfAdd(t)}else if(typeof arguments[0]=="number"){const t=arguments[0];return E.copy(this).selfAdd(t)}}init(){if(arguments.length===1){if(typeof arguments[0]=="number"){const t=arguments[0];this._hi=t,this._lo=0}else if(arguments[0]instanceof E){const t=arguments[0];this._hi=t._hi,this._lo=t._lo}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this._hi=t,this._lo=e}}gt(t){return this._hi>t._hi||this._hi===t._hi&&this._lo>t._lo}isNegative(){return this._hi<0||this._hi===0&&this._lo<0}trunc(){return this.isNaN()?E.NaN:this.isPositive()?this.floor():this.ceil()}signum(){return this._hi>0?1:this._hi<0?-1:this._lo>0?1:this._lo<0?-1:0}get interfaces_(){return[Pe,zi,Lo]}}E.PI=new E(3.141592653589793,12246467991473532e-32);E.TWO_PI=new E(6.283185307179586,24492935982947064e-32);E.PI_2=new E(1.5707963267948966,6123233995736766e-32);E.E=new E(2.718281828459045,14456468917292502e-32);E.NaN=new E(H.NaN,H.NaN);E.EPS=123259516440783e-46;E.SPLIT=134217729;E.MAX_PRINT_DIGITS=32;E.TEN=E.valueOf(10);E.ONE=E.valueOf(1);E.SCI_NOT_EXPONENT_CHAR="E";E.SCI_NOT_ZERO="0.0E0";class Ci{static orientationIndex(t,e,i){const s=Ci.orientationIndexFilter(t,e,i);if(s<=1)return s;const r=E.valueOf(e.x).selfAdd(-t.x),o=E.valueOf(e.y).selfAdd(-t.y),a=E.valueOf(i.x).selfAdd(-e.x),l=E.valueOf(i.y).selfAdd(-e.y);return r.selfMultiply(l).selfSubtract(o.selfMultiply(a)).signum()}static signOfDet2x2(){if(arguments[3]instanceof E&&arguments[2]instanceof E&&arguments[0]instanceof E&&arguments[1]instanceof E){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];return t.multiply(s).selfSubtract(e.multiply(i)).signum()}else if(typeof arguments[3]=="number"&&typeof arguments[2]=="number"&&typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3],r=E.valueOf(t),o=E.valueOf(e),a=E.valueOf(i),l=E.valueOf(s);return r.multiply(l).selfSubtract(o.multiply(a)).signum()}}static intersection(t,e,i,s){const r=new E(t.y).selfSubtract(e.y),o=new E(e.x).selfSubtract(t.x),a=new E(t.x).selfMultiply(e.y).selfSubtract(new E(e.x).selfMultiply(t.y)),l=new E(i.y).selfSubtract(s.y),h=new E(s.x).selfSubtract(i.x),c=new E(i.x).selfMultiply(s.y).selfSubtract(new E(s.x).selfMultiply(i.y)),u=o.multiply(c).selfSubtract(h.multiply(a)),d=l.multiply(a).selfSubtract(r.multiply(c)),g=r.multiply(h).selfSubtract(l.multiply(o)),f=u.selfDivide(g).doubleValue(),m=d.selfDivide(g).doubleValue();return H.isNaN(f)||H.isInfinite(f)||H.isNaN(m)||H.isInfinite(m)?null:new R(f,m)}static orientationIndexFilter(t,e,i){let s=null;const r=(t.x-i.x)*(e.y-i.y),o=(t.y-i.y)*(e.x-i.x),a=r-o;if(r>0){if(o<=0)return Ci.signum(a);s=r+o}else if(r<0){if(o>=0)return Ci.signum(a);s=-r-o}else return Ci.signum(a);const l=Ci.DP_SAFE_EPSILON*s;return a>=l||-a>=l?Ci.signum(a):2}static signum(t){return t>0?1:t<0?-1:0}}Ci.DP_SAFE_EPSILON=1e-15;class vt{static isCCW(){if(arguments[0]instanceof Array){const t=arguments[0],e=t.length-1;if(e<3)throw new dt("Ring has fewer than 4 points, so orientation cannot be determined");let i=t[0],s=0;for(let u=1;u<=e;u++){const d=t[u];d.y>i.y&&(i=d,s=u)}let r=s;do r=r-1,r<0&&(r=e);while(t[r].equals2D(i)&&r!==s);let o=s;do o=(o+1)%e;while(t[o].equals2D(i)&&o!==s);const a=t[r],l=t[o];if(a.equals2D(i)||l.equals2D(i)||a.equals2D(l))return!1;const h=vt.index(a,i,l);let c=null;return h===0?c=a.x>l.x:c=h>0,c}else if(Z(arguments[0],ht)){const t=arguments[0],e=t.size()-1;if(e<3)throw new dt("Ring has fewer than 4 points, so orientation cannot be determined");let i=t.getCoordinate(0),s=0;for(let u=1;u<=e;u++){const d=t.getCoordinate(u);d.y>i.y&&(i=d,s=u)}let r=null,o=s;do o=o-1,o<0&&(o=e),r=t.getCoordinate(o);while(r.equals2D(i)&&o!==s);let a=null,l=s;do l=(l+1)%e,a=t.getCoordinate(l);while(a.equals2D(i)&&l!==s);if(r.equals2D(i)||a.equals2D(i)||r.equals2D(a))return!1;const h=vt.index(r,i,a);let c=null;return h===0?c=r.x>a.x:c=h>0,c}}static index(t,e,i){return Ci.orientationIndex(t,e,i)}}vt.CLOCKWISE=-1;vt.RIGHT=vt.CLOCKWISE;vt.COUNTERCLOCKWISE=1;vt.LEFT=vt.COUNTERCLOCKWISE;vt.COLLINEAR=0;vt.STRAIGHT=vt.COLLINEAR;class Ne extends G{constructor(){super(),Ne.constructor_.apply(this,arguments)}static constructor_(){this._shell=null,this._holes=null;let t=arguments[0],e=arguments[1],i=arguments[2];if(G.constructor_.call(this,i),t===null&&(t=this.getFactory().createLinearRing()),e===null&&(e=[]),G.hasNullElements(e))throw new dt("holes must not contain null elements");if(t.isEmpty()&&G.hasNonEmptyElements(e))throw new dt("shell is empty but holes are not");this._shell=t,this._holes=e}computeEnvelopeInternal(){return this._shell.getEnvelopeInternal()}getCoordinates(){if(this.isEmpty())return[];const t=new Array(this.getNumPoints()).fill(null);let e=-1;const i=this._shell.getCoordinates();for(let s=0;s<i.length;s++)e++,t[e]=i[s];for(let s=0;s<this._holes.length;s++){const r=this._holes[s].getCoordinates();for(let o=0;o<r.length;o++)e++,t[e]=r[o]}return t}getArea(){let t=0;t+=so.ofRing(this._shell.getCoordinateSequence());for(let e=0;e<this._holes.length;e++)t-=so.ofRing(this._holes[e].getCoordinateSequence());return t}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof G){const t=arguments[0],e=arguments[1];if(!this.isEquivalentClass(t))return!1;const i=t,s=this._shell,r=i._shell;if(!s.equalsExact(r,e)||this._holes.length!==i._holes.length)return!1;for(let o=0;o<this._holes.length;o++)if(!this._holes[o].equalsExact(i._holes[o],e))return!1;return!0}else return super.equalsExact.apply(this,arguments)}reverseInternal(){const t=this.getExteriorRing().reverse(),e=new Array(this.getNumInteriorRing()).fill(null);for(let i=0;i<e.length;i++)e[i]=this.getInteriorRingN(i).reverse();return this.getFactory().createPolygon(t,e)}getTypeCode(){return G.TYPECODE_POLYGON}getDimension(){return 2}getBoundary(){if(this.isEmpty())return this.getFactory().createMultiLineString();const t=new Array(this._holes.length+1).fill(null);t[0]=this._shell;for(let e=0;e<this._holes.length;e++)t[e+1]=this._holes[e];return t.length<=1?this.getFactory().createLinearRing(t[0].getCoordinateSequence()):this.getFactory().createMultiLineString(t)}getGeometryType(){return G.TYPENAME_POLYGON}getExteriorRing(){return this._shell}copyInternal(){const t=this._shell.copy(),e=new Array(this._holes.length).fill(null);for(let i=0;i<this._holes.length;i++)e[i]=this._holes[i].copy();return new Ne(t,e,this._factory)}isRectangle(){if(this.getNumInteriorRing()!==0||this._shell===null||this._shell.getNumPoints()!==5)return!1;const t=this._shell.getCoordinateSequence(),e=this.getEnvelopeInternal();for(let r=0;r<5;r++){const o=t.getX(r);if(!(o===e.getMinX()||o===e.getMaxX()))return!1;const a=t.getY(r);if(!(a===e.getMinY()||a===e.getMaxY()))return!1}let i=t.getX(0),s=t.getY(0);for(let r=1;r<=4;r++){const o=t.getX(r),a=t.getY(r);if(o!==i===(a!==s))return!1;i=o,s=a}return!0}normalize(){if(arguments.length===0){this._shell=this.normalized(this._shell,!0);for(let t=0;t<this._holes.length;t++)this._holes[t]=this.normalized(this._holes[t],!1);Qn.sort(this._holes)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(t.isEmpty())return null;const i=t.getCoordinateSequence(),s=zt.minCoordinateIndex(i,0,i.size()-2);zt.scroll(i,s,!0),vt.isCCW(i)===e&&zt.reverse(i)}}getCoordinate(){return this._shell.getCoordinate()}getNumInteriorRing(){return this._holes.length}getBoundaryDimension(){return 1}getLength(){let t=0;t+=this._shell.getLength();for(let e=0;e<this._holes.length;e++)t+=this._holes[e].getLength();return t}getNumPoints(){let t=this._shell.getNumPoints();for(let e=0;e<this._holes.length;e++)t+=this._holes[e].getNumPoints();return t}convexHull(){return this.getExteriorRing().convexHull()}normalized(t,e){const i=t.copy();return this.normalize(i,e),i}compareToSameClass(){if(arguments.length===1){const t=arguments[0],e=this._shell,i=t._shell;return e.compareToSameClass(i)}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t,s=this._shell,r=i._shell,o=s.compareToSameClass(r,e);if(o!==0)return o;const a=this.getNumInteriorRing(),l=i.getNumInteriorRing();let h=0;for(;h<a&&h<l;){const c=this.getInteriorRingN(h),u=i.getInteriorRingN(h),d=c.compareToSameClass(u,e);if(d!==0)return d;h++}return h<a?1:h<l?-1:0}}apply(){if(Z(arguments[0],Qa)){const t=arguments[0];this._shell.apply(t);for(let e=0;e<this._holes.length;e++)this._holes[e].apply(t)}else if(Z(arguments[0],el)){const t=arguments[0];if(this._shell.apply(t),!t.isDone())for(let e=0;e<this._holes.length&&(this._holes[e].apply(t),!t.isDone());e++);t.isGeometryChanged()&&this.geometryChanged()}else if(Z(arguments[0],tl))arguments[0].filter(this);else if(Z(arguments[0],pr)){const t=arguments[0];t.filter(this),this._shell.apply(t);for(let e=0;e<this._holes.length;e++)this._holes[e].apply(t)}}isEmpty(){return this._shell.isEmpty()}getInteriorRingN(t){return this._holes[t]}get interfaces_(){return[nl]}}class On extends Vt{constructor(){super(),On.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];Vt.constructor_.call(this,t,e)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof G){const t=arguments[0],e=arguments[1];return this.isEquivalentClass(t)?super.equalsExact.call(this,t,e):!1}else return super.equalsExact.apply(this,arguments)}getTypeCode(){return G.TYPECODE_MULTIPOINT}getDimension(){return 0}getBoundary(){return this.getFactory().createGeometryCollection()}getGeometryType(){return G.TYPENAME_MULTIPOINT}copyInternal(){const t=new Array(this._geometries.length).fill(null);for(let e=0;e<t.length;e++)t[e]=this._geometries[e].copy();return new On(t,this._factory)}isValid(){return!0}getCoordinate(){if(arguments.length===1&&Number.isInteger(arguments[0])){const t=arguments[0];return this._geometries[t].getCoordinate()}else return super.getCoordinate.apply(this,arguments)}getBoundaryDimension(){return b.FALSE}get interfaces_(){return[Kf]}}class ie{constructor(){ie.constructor_.apply(this,arguments)}static constructor_(){if(this._precisionModel=null,this._coordinateSequenceFactory=null,this._SRID=null,arguments.length===0)ie.constructor_.call(this,new Ot,0);else if(arguments.length===1){if(Z(arguments[0],Sf)){const t=arguments[0];ie.constructor_.call(this,new Ot,0,t)}else if(arguments[0]instanceof Ot){const t=arguments[0];ie.constructor_.call(this,t,0,ie.getDefaultCoordinateSequenceFactory())}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];ie.constructor_.call(this,t,e,ie.getDefaultCoordinateSequenceFactory())}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._precisionModel=t,this._coordinateSequenceFactory=i,this._SRID=e}}static toMultiPolygonArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toGeometryArray(t){if(t===null)return null;const e=new Array(t.size()).fill(null);return t.toArray(e)}static getDefaultCoordinateSequenceFactory(){return rr.instance()}static toMultiLineStringArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toLineStringArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toMultiPointArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toLinearRingArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toPointArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toPolygonArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static createPointFromInternalCoord(t,e){return e.getPrecisionModel().makePrecise(t),e.getFactory().createPoint(t)}createEmpty(t){switch(t){case-1:return this.createGeometryCollection();case 0:return this.createPoint();case 1:return this.createLineString();case 2:return this.createPolygon();default:throw new dt("Invalid dimension: "+t)}}toGeometry(t){return t.isNull()?this.createPoint():t.getMinX()===t.getMaxX()&&t.getMinY()===t.getMaxY()?this.createPoint(new R(t.getMinX(),t.getMinY())):t.getMinX()===t.getMaxX()||t.getMinY()===t.getMaxY()?this.createLineString([new R(t.getMinX(),t.getMinY()),new R(t.getMaxX(),t.getMaxY())]):this.createPolygon(this.createLinearRing([new R(t.getMinX(),t.getMinY()),new R(t.getMinX(),t.getMaxY()),new R(t.getMaxX(),t.getMaxY()),new R(t.getMaxX(),t.getMinY()),new R(t.getMinX(),t.getMinY())]),null)}createLineString(){if(arguments.length===0)return this.createLineString(this.getCoordinateSequenceFactory().create([]));if(arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];return this.createLineString(t!==null?this.getCoordinateSequenceFactory().create(t):null)}else if(Z(arguments[0],ht)){const t=arguments[0];return new he(t,this)}}}createMultiLineString(){if(arguments.length===0)return new rs(null,this);if(arguments.length===1){const t=arguments[0];return new rs(t,this)}}createPolygon(){if(arguments.length===0)return this.createPolygon(null,null);if(arguments.length===1){if(Z(arguments[0],ht)){const t=arguments[0];return this.createPolygon(this.createLinearRing(t))}else if(arguments[0]instanceof Array){const t=arguments[0];return this.createPolygon(this.createLinearRing(t))}else if(arguments[0]instanceof ei){const t=arguments[0];return this.createPolygon(t,null)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return new Ne(t,e,this)}}getSRID(){return this._SRID}createGeometryCollection(){if(arguments.length===0)return new Vt(null,this);if(arguments.length===1){const t=arguments[0];return new Vt(t,this)}}getPrecisionModel(){return this._precisionModel}createLinearRing(){if(arguments.length===0)return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));if(arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];return this.createLinearRing(t!==null?this.getCoordinateSequenceFactory().create(t):null)}else if(Z(arguments[0],ht)){const t=arguments[0];return new ei(t,this)}}}createMultiPolygon(){if(arguments.length===0)return new ii(null,this);if(arguments.length===1){const t=arguments[0];return new ii(t,this)}}createMultiPoint(){if(arguments.length===0)return new On(null,this);if(arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];return new On(t,this)}else if(Z(arguments[0],ht)){const t=arguments[0];if(t===null)return this.createMultiPoint(new Array(0).fill(null));const e=new Array(t.size()).fill(null);for(let i=0;i<t.size();i++){const s=this.getCoordinateSequenceFactory().create(1,t.getDimension(),t.getMeasures());zt.copy(t,i,s,0,1),e[i]=this.createPoint(s)}return this.createMultiPoint(e)}}}buildGeometry(t){let e=null,i=!1,s=!1;for(let a=t.iterator();a.hasNext();){const l=a.next(),h=l.getTypeCode();e===null&&(e=h),h!==e&&(i=!0),l instanceof Vt&&(s=!0)}if(e===null)return this.createGeometryCollection();if(i||s)return this.createGeometryCollection(ie.toGeometryArray(t));const r=t.iterator().next();if(t.size()>1){if(r instanceof Ne)return this.createMultiPolygon(ie.toPolygonArray(t));if(r instanceof he)return this.createMultiLineString(ie.toLineStringArray(t));if(r instanceof ki)return this.createMultiPoint(ie.toPointArray(t));rt.shouldNeverReachHere("Unhandled geometry type: "+r.getGeometryType())}return r}createMultiPointFromCoords(t){return this.createMultiPoint(t!==null?this.getCoordinateSequenceFactory().create(t):null)}createPoint(){if(arguments.length===0)return this.createPoint(this.getCoordinateSequenceFactory().create([]));if(arguments.length===1){if(arguments[0]instanceof R){const t=arguments[0];return this.createPoint(t!==null?this.getCoordinateSequenceFactory().create([t]):null)}else if(Z(arguments[0],ht)){const t=arguments[0];return new ki(t,this)}}}getCoordinateSequenceFactory(){return this._coordinateSequenceFactory}get interfaces_(){return[Pe]}}const OC=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon"];class PC{constructor(t){this.geometryFactory=t||new ie}read(t){let e;typeof t=="string"?e=JSON.parse(t):e=t;const i=e.type;if(!je[i])throw new Error("Unknown GeoJSON type: "+e.type);return OC.indexOf(i)!==-1?je[i].call(this,e.coordinates):i==="GeometryCollection"?je[i].call(this,e.geometries):je[i].call(this,e)}write(t){const e=t.getGeometryType();if(!xi[e])throw new Error("Geometry is not supported");return xi[e].call(this,t)}}const je={Feature:function(n){const t={};for(const e in n)t[e]=n[e];if(n.geometry){const e=n.geometry.type;if(!je[e])throw new Error("Unknown GeoJSON type: "+n.type);t.geometry=this.read(n.geometry)}return n.bbox&&(t.bbox=je.bbox.call(this,n.bbox)),t},FeatureCollection:function(n){const t={};if(n.features){t.features=[];for(let e=0;e<n.features.length;++e)t.features.push(this.read(n.features[e]))}return n.bbox&&(t.bbox=this.parse.bbox.call(this,n.bbox)),t},coordinates:function(n){const t=[];for(let e=0;e<n.length;++e){const i=n[e];t.push(new R(...i))}return t},bbox:function(n){return this.geometryFactory.createLinearRing([new R(n[0],n[1]),new R(n[2],n[1]),new R(n[2],n[3]),new R(n[0],n[3]),new R(n[0],n[1])])},Point:function(n){const t=new R(...n);return this.geometryFactory.createPoint(t)},MultiPoint:function(n){const t=[];for(let e=0;e<n.length;++e)t.push(je.Point.call(this,n[e]));return this.geometryFactory.createMultiPoint(t)},LineString:function(n){const t=je.coordinates.call(this,n);return this.geometryFactory.createLineString(t)},MultiLineString:function(n){const t=[];for(let e=0;e<n.length;++e)t.push(je.LineString.call(this,n[e]));return this.geometryFactory.createMultiLineString(t)},Polygon:function(n){const t=je.coordinates.call(this,n[0]),e=this.geometryFactory.createLinearRing(t),i=[];for(let s=1;s<n.length;++s){const r=n[s],o=je.coordinates.call(this,r),a=this.geometryFactory.createLinearRing(o);i.push(a)}return this.geometryFactory.createPolygon(e,i)},MultiPolygon:function(n){const t=[];for(let e=0;e<n.length;++e){const i=n[e];t.push(je.Polygon.call(this,i))}return this.geometryFactory.createMultiPolygon(t)},GeometryCollection:function(n){const t=[];for(let e=0;e<n.length;++e){const i=n[e];t.push(this.read(i))}return this.geometryFactory.createGeometryCollection(t)}},xi={coordinate:function(n){const t=[n.x,n.y];return n.z&&t.push(n.z),n.m&&t.push(n.m),t},Point:function(n){return{type:"Point",coordinates:xi.coordinate.call(this,n.getCoordinate())}},MultiPoint:function(n){const t=[];for(let e=0;e<n._geometries.length;++e){const i=n._geometries[e],s=xi.Point.call(this,i);t.push(s.coordinates)}return{type:"MultiPoint",coordinates:t}},LineString:function(n){const t=[],e=n.getCoordinates();for(let i=0;i<e.length;++i){const s=e[i];t.push(xi.coordinate.call(this,s))}return{type:"LineString",coordinates:t}},MultiLineString:function(n){const t=[];for(let e=0;e<n._geometries.length;++e){const i=n._geometries[e],s=xi.LineString.call(this,i);t.push(s.coordinates)}return{type:"MultiLineString",coordinates:t}},Polygon:function(n){const t=[],e=xi.LineString.call(this,n._shell);t.push(e.coordinates);for(let i=0;i<n._holes.length;++i){const s=n._holes[i],r=xi.LineString.call(this,s);t.push(r.coordinates)}return{type:"Polygon",coordinates:t}},MultiPolygon:function(n){const t=[];for(let e=0;e<n._geometries.length;++e){const i=n._geometries[e],s=xi.Polygon.call(this,i);t.push(s.coordinates)}return{type:"MultiPolygon",coordinates:t}},GeometryCollection:function(n){const t=[];for(let e=0;e<n._geometries.length;++e){const i=n._geometries[e],s=i.getGeometryType();t.push(xi[s].call(this,i))}return{type:"GeometryCollection",geometries:t}}};class KC{constructor(t){this.parser=new PC(t||new ie)}read(t){return this.parser.read(t)}}const Ms={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"},wd={POINT:"Point",LINE_STRING:"LineString",LINEAR_RING:"LinearRing",POLYGON:"Polygon",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon",GEOMETRY_COLLECTION:"GeometryCollection",CIRCLE:"Circle"},Df="EMPTY",Ff="Z",kf="M",DC="ZM",Mt={TEXT:1,LEFT_PAREN:2,RIGHT_PAREN:3,NUMBER:4,COMMA:5,EOF:6};for(const n in wd)wd[n].toUpperCase();class FC{constructor(t){this.wkt=t,this.index_=-1}isAlpha_(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"}isNumeric_(t,e){const i=e!==void 0?e:!1;return t>="0"&&t<="9"||t=="."&&!i}isWhiteSpace_(t){return t==" "||t=="	"||t=="\r"||t==`
`}nextChar_(){return this.wkt.charAt(++this.index_)}nextToken(){const t=this.nextChar_(),e=this.index_;let i=t,s;if(t=="(")s=Mt.LEFT_PAREN;else if(t==",")s=Mt.COMMA;else if(t==")")s=Mt.RIGHT_PAREN;else if(this.isNumeric_(t)||t=="-")s=Mt.NUMBER,i=this.readNumber_();else if(this.isAlpha_(t))s=Mt.TEXT,i=this.readText_();else{if(this.isWhiteSpace_(t))return this.nextToken();if(t==="")s=Mt.EOF;else throw new Error("Unexpected character: "+t)}return{position:e,value:i,type:s}}readNumber_(){let t;const e=this.index_;let i=!1,s=!1;do t=="."?i=!0:(t=="e"||t=="E")&&(s=!0),t=this.nextChar_();while(this.isNumeric_(t,i)||!s&&(t=="e"||t=="E")||s&&(t=="-"||t=="+"));return parseFloat(this.wkt.substring(e,this.index_--))}readText_(){let t;const e=this.index_;do t=this.nextChar_();while(this.isAlpha_(t));return this.wkt.substring(e,this.index_--).toUpperCase()}}class kC{constructor(t,e){this.lexer_=t,this.token_,this.layout_=Ms.XY,this.factory=e}consume_(){this.token_=this.lexer_.nextToken()}isTokenType(t){return this.token_.type==t}match(t){const e=this.isTokenType(t);return e&&this.consume_(),e}parse(){return this.consume_(),this.parseGeometry_()}parseGeometryLayout_(){let t=Ms.XY;const e=this.token_;if(this.isTokenType(Mt.TEXT)){const i=e.value;i===Ff?t=Ms.XYZ:i===kf?t=Ms.XYM:i===DC&&(t=Ms.XYZM),t!==Ms.XY&&this.consume_()}return t}parseGeometryCollectionText_(){if(this.match(Mt.LEFT_PAREN)){const t=[];do t.push(this.parseGeometry_());while(this.match(Mt.COMMA));if(this.match(Mt.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parsePointText_(){if(this.match(Mt.LEFT_PAREN)){const t=this.parsePoint_();if(this.match(Mt.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return null;throw new Error(this.formatErrorMessage_())}parseLineStringText_(){if(this.match(Mt.LEFT_PAREN)){const t=this.parsePointList_();if(this.match(Mt.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parsePolygonText_(){if(this.match(Mt.LEFT_PAREN)){const t=this.parseLineStringTextList_();if(this.match(Mt.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parseMultiPointText_(){if(this.match(Mt.LEFT_PAREN)){let t;if(this.token_.type==Mt.LEFT_PAREN?t=this.parsePointTextList_():t=this.parsePointList_(),this.match(Mt.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parseMultiLineStringText_(){if(this.match(Mt.LEFT_PAREN)){const t=this.parseLineStringTextList_();if(this.match(Mt.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parseMultiPolygonText_(){if(this.match(Mt.LEFT_PAREN)){const t=this.parsePolygonTextList_();if(this.match(Mt.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parsePoint_(){const t=[],e=this.layout_.length;for(let i=0;i<e;++i){const s=this.token_;if(this.match(Mt.NUMBER))t.push(s.value);else break}if(t.length==e)return t;throw new Error(this.formatErrorMessage_())}parsePointList_(){const t=[this.parsePoint_()];for(;this.match(Mt.COMMA);)t.push(this.parsePoint_());return t}parsePointTextList_(){const t=[this.parsePointText_()];for(;this.match(Mt.COMMA);)t.push(this.parsePointText_());return t}parseLineStringTextList_(){const t=[this.parseLineStringText_()];for(;this.match(Mt.COMMA);)t.push(this.parseLineStringText_());return t}parsePolygonTextList_(){const t=[this.parsePolygonText_()];for(;this.match(Mt.COMMA);)t.push(this.parsePolygonText_());return t}isEmptyGeometry_(){const t=this.isTokenType(Mt.TEXT)&&this.token_.value==Df;return t&&this.consume_(),t}formatErrorMessage_(){return"Unexpected `"+this.token_.value+"` at position "+this.token_.position+" in `"+this.lexer_.wkt+"`"}parseGeometry_(){const t=this.factory,e=r=>r?new R(...r):new R,i=r=>{const o=r.map(a=>t.createLinearRing(a.map(e)));return o.length>1?t.createPolygon(o[0],o.slice(1)):o.length===1?t.createPolygon(o[0]):t.createPolygon()},s=this.token_;if(this.match(Mt.TEXT)){const r=s.value;if(this.layout_=this.parseGeometryLayout_(),r=="GEOMETRYCOLLECTION"){const o=this.parseGeometryCollectionText_();return t.createGeometryCollection(o)}else switch(r){case"POINT":{const o=this.parsePointText_();return o?t.createPoint(new R(...o)):t.createPoint()}case"LINESTRING":{const a=this.parseLineStringText_().map(e);return t.createLineString(a)}case"LINEARRING":{const a=this.parseLineStringText_().map(e);return t.createLinearRing(a)}case"POLYGON":{const o=this.parsePolygonText_();return!o||o.length===0?t.createPolygon():i(o)}case"MULTIPOINT":{const o=this.parseMultiPointText_();if(!o||o.length===0)return t.createMultiPoint();const a=o.map(e).map(l=>t.createPoint(l));return t.createMultiPoint(a)}case"MULTILINESTRING":{const a=this.parseMultiLineStringText_().map(l=>t.createLineString(l.map(e)));return t.createMultiLineString(a)}case"MULTIPOLYGON":{const o=this.parseMultiPolygonText_();if(!o||o.length===0)return t.createMultiPolygon();const a=o.map(i);return t.createMultiPolygon(a)}default:throw new Error("Invalid geometry type: "+r)}}throw new Error(this.formatErrorMessage_())}}function Gf(n){if(n.isEmpty())return"";const t=n.getCoordinate(),e=[t.x,t.y];return t.z!==void 0&&!Number.isNaN(t.z)&&e.push(t.z),t.m!==void 0&&!Number.isNaN(t.m)&&e.push(t.m),e.join(" ")}function GC(n){const t=[];for(let e=0,i=n.getNumGeometries();e<i;++e)t.push("("+Gf(n.getGeometryN(e))+")");return t.join(", ")}function WC(n){const t=[];for(let e=0,i=n.getNumGeometries();e<i;++e)t.push(zf(n.getGeometryN(e)));return t.join(", ")}function oo(n){const t=n.getCoordinates().map(i=>{const s=[i.x,i.y];return i.z!==void 0&&!Number.isNaN(i.z)&&s.push(i.z),i.m!==void 0&&!Number.isNaN(i.m)&&s.push(i.m),s}),e=[];for(let i=0,s=t.length;i<s;++i)e.push(t[i].join(" "));return e.join(", ")}function zC(n){const t=[];for(let e=0,i=n.getNumGeometries();e<i;++e)t.push("("+oo(n.getGeometryN(e))+")");return t.join(", ")}function Wf(n){const t=[];t.push("("+oo(n.getExteriorRing())+")");for(let e=0,i=n.getNumInteriorRing();e<i;++e)t.push("("+oo(n.getInteriorRingN(e))+")");return t.join(", ")}function BC(n){const t=[];for(let e=0,i=n.getNumGeometries();e<i;++e)t.push("("+Wf(n.getGeometryN(e))+")");return t.join(", ")}function HC(n){let t="";if(n.isEmpty())return t;const e=n.getCoordinate();return e.z!==void 0&&!Number.isNaN(e.z)&&(t+=Ff),e.m!==void 0&&!Number.isNaN(e.m)&&(t+=kf),t}const YC={Point:Gf,LineString:oo,LinearRing:oo,Polygon:Wf,MultiPoint:GC,MultiLineString:zC,MultiPolygon:BC,GeometryCollection:WC};function zf(n){let t=n.getGeometryType();const e=YC[t];t=t.toUpperCase();const i=HC(n);if(i.length>0&&(t+=" "+i),n.isEmpty())return t+" "+Df;const s=e(n);return t+" ("+s+")"}class XC{constructor(t){this.geometryFactory=t||new ie,this.precisionModel=this.geometryFactory.getPrecisionModel()}read(t){const e=new FC(t);return new kC(e,this.geometryFactory).parse()}write(t){return zf(t)}}class Ma{constructor(t){this.parser=new XC(t)}write(t){return this.parser.write(t)}static toLineString(t,e){if(arguments.length!==2)throw new Error("Not implemented");return"LINESTRING ( "+t.x+" "+t.y+", "+e.x+" "+e.y+" )"}}class y{static toLocationSymbol(t){switch(t){case y.EXTERIOR:return"e";case y.BOUNDARY:return"b";case y.INTERIOR:return"i";case y.NONE:return"-"}throw new dt("Unknown location value: "+t)}}y.INTERIOR=0;y.BOUNDARY=1;y.EXTERIOR=2;y.NONE=-1;class D{static opposite(t){return t===D.LEFT?D.RIGHT:t===D.RIGHT?D.LEFT:t}}D.ON=0;D.LEFT=1;D.RIGHT=2;class Bf{static intersection(t,e,i,s){const r=t.x<e.x?t.x:e.x,o=t.y<e.y?t.y:e.y,a=t.x>e.x?t.x:e.x,l=t.y>e.y?t.y:e.y,h=i.x<s.x?i.x:s.x,c=i.y<s.y?i.y:s.y,u=i.x>s.x?i.x:s.x,d=i.y>s.y?i.y:s.y,g=r>h?r:h,f=a<u?a:u,m=o>c?o:c,w=l<d?l:d,_=(g+f)/2,p=(m+w)/2,x=t.x-_,T=t.y-p,M=e.x-_,C=e.y-p,I=i.x-_,v=i.y-p,K=s.x-_,W=s.y-p,X=T-C,A=M-x,B=x*C-M*T,gt=v-W,k=K-I,z=I*W-K*v,P=A*z-k*B,et=gt*B-X*z,yt=X*k-gt*A,ft=P/yt,Yt=et/yt;return H.isNaN(ft)||H.isInfinite(ft)||H.isNaN(Yt)||H.isInfinite(Yt)?null:new R(ft+_,Yt+p)}}class we{static pointToSegmentString(t,e){if(e.length===0)throw new dt("Line array must contain at least one vertex");let i=t.distance(e[0]);for(let s=0;s<e.length-1;s++){const r=we.pointToSegment(t,e[s],e[s+1]);r<i&&(i=r)}return i}static segmentToSegment(t,e,i,s){if(t.equals(e))return we.pointToSegment(t,i,s);if(i.equals(s))return we.pointToSegment(s,t,e);let r=!1;if(!ct.intersects(t,e,i,s))r=!0;else{const o=(e.x-t.x)*(s.y-i.y)-(e.y-t.y)*(s.x-i.x);if(o===0)r=!0;else{const a=(t.y-i.y)*(s.x-i.x)-(t.x-i.x)*(s.y-i.y),h=((t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y))/o,c=a/o;(c<0||c>1||h<0||h>1)&&(r=!0)}}return r?sr.min(we.pointToSegment(t,i,s),we.pointToSegment(e,i,s),we.pointToSegment(i,t,e),we.pointToSegment(s,t,e)):0}static pointToLinePerpendicular(t,e,i){const s=(i.x-e.x)*(i.x-e.x)+(i.y-e.y)*(i.y-e.y),r=((e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y))/s;return Math.abs(r)*Math.sqrt(s)}static pointToSegment(t,e,i){if(e.x===i.x&&e.y===i.y)return t.distance(e);const s=(i.x-e.x)*(i.x-e.x)+(i.y-e.y)*(i.y-e.y),r=((t.x-e.x)*(i.x-e.x)+(t.y-e.y)*(i.y-e.y))/s;if(r<=0)return t.distance(e);if(r>=1)return t.distance(i);const o=((e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y))/s;return Math.abs(o)*Math.sqrt(s)}}class Lt{constructor(){Lt.constructor_.apply(this,arguments)}static constructor_(){this._result=null,this._inputLines=Array(2).fill().map(()=>Array(2)),this._intPt=new Array(2).fill(null),this._intLineIndex=null,this._isProper=null,this._pa=null,this._pb=null,this._precisionModel=null,this._intPt[0]=new R,this._intPt[1]=new R,this._pa=this._intPt[0],this._pb=this._intPt[1],this._result=0}static nonRobustComputeEdgeDistance(t,e,i){const s=t.x-e.x,r=t.y-e.y,o=Math.sqrt(s*s+r*r);return rt.isTrue(!(o===0&&!t.equals(e)),"Invalid distance calculation"),o}static computeEdgeDistance(t,e,i){const s=Math.abs(i.x-e.x),r=Math.abs(i.y-e.y);let o=-1;if(t.equals(e))o=0;else if(t.equals(i))s>r?o=s:o=r;else{const a=Math.abs(t.x-e.x),l=Math.abs(t.y-e.y);s>r?o=a:o=l,o===0&&!t.equals(e)&&(o=Math.max(a,l))}return rt.isTrue(!(o===0&&!t.equals(e)),"Bad distance calculation"),o}computeIntersection(t,e,i,s){this._inputLines[0][0]=t,this._inputLines[0][1]=e,this._inputLines[1][0]=i,this._inputLines[1][1]=s,this._result=this.computeIntersect(t,e,i,s)}getIntersectionNum(){return this._result}computeIntLineIndex(){if(arguments.length===0)this._intLineIndex===null&&(this._intLineIndex=Array(2).fill().map(()=>Array(2)),this.computeIntLineIndex(0),this.computeIntLineIndex(1));else if(arguments.length===1){const t=arguments[0],e=this.getEdgeDistance(t,0),i=this.getEdgeDistance(t,1);e>i?(this._intLineIndex[t][0]=0,this._intLineIndex[t][1]=1):(this._intLineIndex[t][0]=1,this._intLineIndex[t][1]=0)}}isInteriorIntersection(){if(arguments.length===0)return!!(this.isInteriorIntersection(0)||this.isInteriorIntersection(1));if(arguments.length===1){const t=arguments[0];for(let e=0;e<this._result;e++)if(!(this._intPt[e].equals2D(this._inputLines[t][0])||this._intPt[e].equals2D(this._inputLines[t][1])))return!0;return!1}}getIntersection(t){return this._intPt[t]}getEdgeDistance(t,e){return Lt.computeEdgeDistance(this._intPt[e],this._inputLines[t][0],this._inputLines[t][1])}isCollinear(){return this._result===Lt.COLLINEAR_INTERSECTION}toString(){return Ma.toLineString(this._inputLines[0][0],this._inputLines[0][1])+" - "+Ma.toLineString(this._inputLines[1][0],this._inputLines[1][1])+this.getTopologySummary()}getEndpoint(t,e){return this._inputLines[t][e]}getIndexAlongSegment(t,e){return this.computeIntLineIndex(),this._intLineIndex[t][e]}getTopologySummary(){const t=new il;return this.isEndPoint()&&t.append(" endpoint"),this._isProper&&t.append(" proper"),this.isCollinear()&&t.append(" collinear"),t.toString()}isProper(){return this.hasIntersection()&&this._isProper}setPrecisionModel(t){this._precisionModel=t}isEndPoint(){return this.hasIntersection()&&!this._isProper}hasIntersection(){return this._result!==Lt.NO_INTERSECTION}isIntersection(t){for(let e=0;e<this._result;e++)if(this._intPt[e].equals2D(t))return!0;return!1}getIntersectionAlongSegment(t,e){return this.computeIntLineIndex(),this._intPt[this._intLineIndex[t][e]]}}Lt.DONT_INTERSECT=0;Lt.DO_INTERSECT=1;Lt.COLLINEAR=2;Lt.NO_INTERSECTION=0;Lt.POINT_INTERSECTION=1;Lt.COLLINEAR_INTERSECTION=2;class Pn extends Lt{constructor(){super()}static nearestEndpoint(t,e,i,s){let r=t,o=we.pointToSegment(t,i,s),a=we.pointToSegment(e,i,s);return a<o&&(o=a,r=e),a=we.pointToSegment(i,t,e),a<o&&(o=a,r=i),a=we.pointToSegment(s,t,e),a<o&&(o=a,r=s),r}isInSegmentEnvelopes(t){const e=new ct(this._inputLines[0][0],this._inputLines[0][1]),i=new ct(this._inputLines[1][0],this._inputLines[1][1]);return e.contains(t)&&i.contains(t)}computeIntersection(){if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(this._isProper=!1,ct.intersects(e,i,t)&&vt.index(e,i,t)===0&&vt.index(i,e,t)===0)return this._isProper=!0,(t.equals(e)||t.equals(i))&&(this._isProper=!1),this._result=Lt.POINT_INTERSECTION,null;this._result=Lt.NO_INTERSECTION}else return super.computeIntersection.apply(this,arguments)}intersection(t,e,i,s){let r=this.intersectionSafe(t,e,i,s);return this.isInSegmentEnvelopes(r)||(r=new R(Pn.nearestEndpoint(t,e,i,s))),this._precisionModel!==null&&this._precisionModel.makePrecise(r),r}checkDD(t,e,i,s,r){const o=Ci.intersection(t,e,i,s),a=this.isInSegmentEnvelopes(o);ti.out.println("DD in env = "+a+"  --------------------- "+o),r.distance(o)>1e-4&&ti.out.println("Distance = "+r.distance(o))}intersectionSafe(t,e,i,s){let r=Bf.intersection(t,e,i,s);return r===null&&(r=Pn.nearestEndpoint(t,e,i,s)),r}computeCollinearIntersection(t,e,i,s){const r=ct.intersects(t,e,i),o=ct.intersects(t,e,s),a=ct.intersects(i,s,t),l=ct.intersects(i,s,e);return r&&o?(this._intPt[0]=i,this._intPt[1]=s,Lt.COLLINEAR_INTERSECTION):a&&l?(this._intPt[0]=t,this._intPt[1]=e,Lt.COLLINEAR_INTERSECTION):r&&a?(this._intPt[0]=i,this._intPt[1]=t,i.equals(t)&&!o&&!l?Lt.POINT_INTERSECTION:Lt.COLLINEAR_INTERSECTION):r&&l?(this._intPt[0]=i,this._intPt[1]=e,i.equals(e)&&!o&&!a?Lt.POINT_INTERSECTION:Lt.COLLINEAR_INTERSECTION):o&&a?(this._intPt[0]=s,this._intPt[1]=t,s.equals(t)&&!r&&!l?Lt.POINT_INTERSECTION:Lt.COLLINEAR_INTERSECTION):o&&l?(this._intPt[0]=s,this._intPt[1]=e,s.equals(e)&&!r&&!a?Lt.POINT_INTERSECTION:Lt.COLLINEAR_INTERSECTION):Lt.NO_INTERSECTION}computeIntersect(t,e,i,s){if(this._isProper=!1,!ct.intersects(t,e,i,s))return Lt.NO_INTERSECTION;const r=vt.index(t,e,i),o=vt.index(t,e,s);if(r>0&&o>0||r<0&&o<0)return Lt.NO_INTERSECTION;const a=vt.index(i,s,t),l=vt.index(i,s,e);return a>0&&l>0||a<0&&l<0?Lt.NO_INTERSECTION:r===0&&o===0&&a===0&&l===0?this.computeCollinearIntersection(t,e,i,s):(r===0||o===0||a===0||l===0?(this._isProper=!1,t.equals2D(i)||t.equals2D(s)?this._intPt[0]=t:e.equals2D(i)||e.equals2D(s)?this._intPt[0]=e:r===0?this._intPt[0]=new R(i):o===0?this._intPt[0]=new R(s):a===0?this._intPt[0]=new R(t):l===0&&(this._intPt[0]=new R(e))):(this._isProper=!0,this._intPt[0]=this.intersection(t,e,i,s)),Lt.POINT_INTERSECTION)}}class Ys{constructor(){Ys.constructor_.apply(this,arguments)}static constructor_(){this._p=null,this._crossingCount=0,this._isPointOnSegment=!1;const t=arguments[0];this._p=t}static locatePointInRing(){if(arguments[0]instanceof R&&Z(arguments[1],ht)){const t=arguments[0],e=arguments[1],i=new Ys(t),s=new R,r=new R;for(let o=1;o<e.size();o++)if(e.getCoordinate(o,s),e.getCoordinate(o-1,r),i.countSegment(s,r),i.isOnSegment())return i.getLocation();return i.getLocation()}else if(arguments[0]instanceof R&&arguments[1]instanceof Array){const t=arguments[0],e=arguments[1],i=new Ys(t);for(let s=1;s<e.length;s++){const r=e[s],o=e[s-1];if(i.countSegment(r,o),i.isOnSegment())return i.getLocation()}return i.getLocation()}}getLocation(){return this._isPointOnSegment?y.BOUNDARY:this._crossingCount%2===1?y.INTERIOR:y.EXTERIOR}isPointInPolygon(){return this.getLocation()!==y.EXTERIOR}isOnSegment(){return this._isPointOnSegment}countSegment(t,e){if(t.x<this._p.x&&e.x<this._p.x)return null;if(this._p.x===e.x&&this._p.y===e.y)return this._isPointOnSegment=!0,null;if(t.y===this._p.y&&e.y===this._p.y){let i=t.x,s=e.x;return i>s&&(i=e.x,s=t.x),this._p.x>=i&&this._p.x<=s&&(this._isPointOnSegment=!0),null}if(t.y>this._p.y&&e.y<=this._p.y||e.y>this._p.y&&t.y<=this._p.y){let i=vt.index(t,e,this._p);if(i===vt.COLLINEAR)return this._isPointOnSegment=!0,null;e.y<t.y&&(i=-i),i===vt.LEFT&&this._crossingCount++}}}class Pi{static isInRing(t,e){return Pi.locateInRing(t,e)!==y.EXTERIOR}static locateInRing(t,e){return Ys.locatePointInRing(t,e)}static isOnLine(){if(arguments[0]instanceof R&&Z(arguments[1],ht)){const t=arguments[0],e=arguments[1],i=new Pn,s=new R,r=new R,o=e.size();for(let a=1;a<o;a++)if(e.getCoordinate(a-1,s),e.getCoordinate(a,r),i.computeIntersection(t,s,r),i.hasIntersection())return!0;return!1}else if(arguments[0]instanceof R&&arguments[1]instanceof Array){const t=arguments[0],e=arguments[1],i=new Pn;for(let s=1;s<e.length;s++){const r=e[s-1],o=e[s];if(i.computeIntersection(t,r,o),i.hasIntersection())return!0}return!1}}}class Kn extends Bs{constructor(t,e){super(e?t+" [ "+e+" ]":t),this.pt=e?new R(e):void 0,this.name=Object.keys({TopologyException:Kn})[0]}getCoordinate(){return this.pt}}class ge{constructor(){ge.constructor_.apply(this,arguments)}static constructor_(){if(this.location=null,arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];this.init(t.length)}else if(Number.isInteger(arguments[0])){const t=arguments[0];this.init(1),this.location[D.ON]=t}else if(arguments[0]instanceof ge){const t=arguments[0];if(this.init(t.location.length),t!==null)for(let e=0;e<this.location.length;e++)this.location[e]=t.location[e]}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this.init(3),this.location[D.ON]=t,this.location[D.LEFT]=e,this.location[D.RIGHT]=i}}setAllLocations(t){for(let e=0;e<this.location.length;e++)this.location[e]=t}isNull(){for(let t=0;t<this.location.length;t++)if(this.location[t]!==y.NONE)return!1;return!0}setAllLocationsIfNull(t){for(let e=0;e<this.location.length;e++)this.location[e]===y.NONE&&(this.location[e]=t)}isLine(){return this.location.length===1}merge(t){if(t.location.length>this.location.length){const e=new Array(3).fill(null);e[D.ON]=this.location[D.ON],e[D.LEFT]=y.NONE,e[D.RIGHT]=y.NONE,this.location=e}for(let e=0;e<this.location.length;e++)this.location[e]===y.NONE&&e<t.location.length&&(this.location[e]=t.location[e])}getLocations(){return this.location}flip(){if(this.location.length<=1)return null;const t=this.location[D.LEFT];this.location[D.LEFT]=this.location[D.RIGHT],this.location[D.RIGHT]=t}get(t){return t<this.location.length?this.location[t]:y.NONE}isEqualOnSide(t,e){return this.location[e]===t.location[e]}allPositionsEqual(t){for(let e=0;e<this.location.length;e++)if(this.location[e]!==t)return!1;return!0}toString(){const t=new ro;return this.location.length>1&&t.append(y.toLocationSymbol(this.location[D.LEFT])),t.append(y.toLocationSymbol(this.location[D.ON])),this.location.length>1&&t.append(y.toLocationSymbol(this.location[D.RIGHT])),t.toString()}setLocations(t,e,i){this.location[D.ON]=t,this.location[D.LEFT]=e,this.location[D.RIGHT]=i}isArea(){return this.location.length>1}isAnyNull(){for(let t=0;t<this.location.length;t++)if(this.location[t]===y.NONE)return!0;return!1}setLocation(){if(arguments.length===1){const t=arguments[0];this.setLocation(D.ON,t)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.location[t]=e}}init(t){this.location=new Array(t).fill(null),this.setAllLocations(y.NONE)}}class Ht{constructor(){Ht.constructor_.apply(this,arguments)}static constructor_(){if(this.elt=new Array(2).fill(null),arguments.length===1){if(Number.isInteger(arguments[0])){const t=arguments[0];this.elt[0]=new ge(t),this.elt[1]=new ge(t)}else if(arguments[0]instanceof Ht){const t=arguments[0];this.elt[0]=new ge(t.elt[0]),this.elt[1]=new ge(t.elt[1])}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.elt[0]=new ge(y.NONE),this.elt[1]=new ge(y.NONE),this.elt[t].setLocation(e)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this.elt[0]=new ge(t,e,i),this.elt[1]=new ge(t,e,i)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];this.elt[0]=new ge(y.NONE,y.NONE,y.NONE),this.elt[1]=new ge(y.NONE,y.NONE,y.NONE),this.elt[t].setLocations(e,i,s)}}static toLineLabel(t){const e=new Ht(y.NONE);for(let i=0;i<2;i++)e.setLocation(i,t.getLocation(i));return e}getGeometryCount(){let t=0;return this.elt[0].isNull()||t++,this.elt[1].isNull()||t++,t}setAllLocations(t,e){this.elt[t].setAllLocations(e)}isNull(t){return this.elt[t].isNull()}setAllLocationsIfNull(){if(arguments.length===1){const t=arguments[0];this.setAllLocationsIfNull(0,t),this.setAllLocationsIfNull(1,t)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.elt[t].setAllLocationsIfNull(e)}}isLine(t){return this.elt[t].isLine()}merge(t){for(let e=0;e<2;e++)this.elt[e]===null&&t.elt[e]!==null?this.elt[e]=new ge(t.elt[e]):this.elt[e].merge(t.elt[e])}flip(){this.elt[0].flip(),this.elt[1].flip()}getLocation(){if(arguments.length===1){const t=arguments[0];return this.elt[t].get(D.ON)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.elt[t].get(e)}}toString(){const t=new ro;return this.elt[0]!==null&&(t.append("A:"),t.append(this.elt[0].toString())),this.elt[1]!==null&&(t.append(" B:"),t.append(this.elt[1].toString())),t.toString()}setLocation(){if(arguments.length===2){const t=arguments[0],e=arguments[1];this.elt[t].setLocation(D.ON,e)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this.elt[t].setLocation(e,i)}}isEqualOnSide(t,e){return this.elt[0].isEqualOnSide(t.elt[0],e)&&this.elt[1].isEqualOnSide(t.elt[1],e)}allPositionsEqual(t,e){return this.elt[t].allPositionsEqual(e)}toLine(t){this.elt[t].isArea()&&(this.elt[t]=new ge(this.elt[t].location[0]))}isArea(){if(arguments.length===0)return this.elt[0].isArea()||this.elt[1].isArea();if(arguments.length===1){const t=arguments[0];return this.elt[t].isArea()}}isAnyNull(t){return this.elt[t].isAnyNull()}}class or{constructor(){or.constructor_.apply(this,arguments)}static constructor_(){if(this._startDe=null,this._maxNodeDegree=-1,this._edges=new it,this._pts=new it,this._label=new Ht(y.NONE),this._ring=null,this._isHole=null,this._shell=null,this._holes=new it,this._geometryFactory=null,arguments.length!==0){if(arguments.length===2){const t=arguments[0],e=arguments[1];this._geometryFactory=e,this.computePoints(t),this.computeRing()}}}computeRing(){if(this._ring!==null)return null;const t=new Array(this._pts.size()).fill(null);for(let e=0;e<this._pts.size();e++)t[e]=this._pts.get(e);this._ring=this._geometryFactory.createLinearRing(t),this._isHole=vt.isCCW(this._ring.getCoordinates())}isIsolated(){return this._label.getGeometryCount()===1}computePoints(t){this._startDe=t;let e=t,i=!0;do{if(e===null)throw new Kn("Found null DirectedEdge");if(e.getEdgeRing()===this)throw new Kn("Directed Edge visited twice during ring-building at "+e.getCoordinate());this._edges.add(e);const s=e.getLabel();rt.isTrue(s.isArea()),this.mergeLabel(s),this.addPoints(e.getEdge(),e.isForward(),i),i=!1,this.setEdgeRing(e,this),e=this.getNext(e)}while(e!==this._startDe)}getLinearRing(){return this._ring}getCoordinate(t){return this._pts.get(t)}computeMaxNodeDegree(){this._maxNodeDegree=0;let t=this._startDe;do{const i=t.getNode().getEdges().getOutgoingDegree(this);i>this._maxNodeDegree&&(this._maxNodeDegree=i),t=this.getNext(t)}while(t!==this._startDe);this._maxNodeDegree*=2}addPoints(t,e,i){const s=t.getCoordinates();if(e){let r=1;i&&(r=0);for(let o=r;o<s.length;o++)this._pts.add(s[o])}else{let r=s.length-2;i&&(r=s.length-1);for(let o=r;o>=0;o--)this._pts.add(s[o])}}containsPoint(t){const e=this.getLinearRing();if(!e.getEnvelopeInternal().contains(t)||!Pi.isInRing(t,e.getCoordinates()))return!1;for(let s=this._holes.iterator();s.hasNext();)if(s.next().containsPoint(t))return!1;return!0}getMaxNodeDegree(){return this._maxNodeDegree<0&&this.computeMaxNodeDegree(),this._maxNodeDegree}setShell(t){this._shell=t,t!==null&&t.addHole(this)}toPolygon(t){const e=new Array(this._holes.size()).fill(null);for(let s=0;s<this._holes.size();s++)e[s]=this._holes.get(s).getLinearRing();return t.createPolygon(this.getLinearRing(),e)}isHole(){return this._isHole}setInResult(){let t=this._startDe;do t.getEdge().setInResult(!0),t=t.getNext();while(t!==this._startDe)}addHole(t){this._holes.add(t)}isShell(){return this._shell===null}getLabel(){return this._label}getEdges(){return this._edges}getShell(){return this._shell}mergeLabel(){if(arguments.length===1){const t=arguments[0];this.mergeLabel(t,0),this.mergeLabel(t,1)}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t.getLocation(e,D.RIGHT);if(i===y.NONE)return null;if(this._label.getLocation(e)===y.NONE)return this._label.setLocation(e,i),null}}}class Tc extends or{constructor(){super(),Tc.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];or.constructor_.call(this,t,e)}getNext(t){return t.getNextMin()}setEdgeRing(t,e){t.setMinEdgeRing(e)}}class Mc extends or{constructor(){super(),Mc.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];or.constructor_.call(this,t,e)}linkDirectedEdgesForMinimalEdgeRings(){let t=this._startDe;do t.getNode().getEdges().linkMinimalDirectedEdges(this),t=t.getNext();while(t!==this._startDe)}buildMinimalRings(){const t=new it;let e=this._startDe;do{if(e.getMinEdgeRing()===null){const i=new Tc(e,this._geometryFactory);t.add(i)}e=e.getNext()}while(e!==this._startDe);return t}getNext(t){return t.getNext()}setEdgeRing(t,e){t.setEdgeRing(e)}}class Hf{locate(t){}}class UC{hasNext(){}next(){}remove(){}}class Xs{constructor(){Xs.constructor_.apply(this,arguments)}static constructor_(){this._parent=null,this._atStart=null,this._max=null,this._index=null,this._subcollectionIterator=null;const t=arguments[0];this._parent=t,this._atStart=!0,this._index=0,this._max=t.getNumGeometries()}static isAtomic(t){return!(t instanceof Vt)}next(){if(this._atStart)return this._atStart=!1,Xs.isAtomic(this._parent)&&this._index++,this._parent;if(this._subcollectionIterator!==null){if(this._subcollectionIterator.hasNext())return this._subcollectionIterator.next();this._subcollectionIterator=null}if(this._index>=this._max)throw new xr;const t=this._parent.getGeometryN(this._index++);return t instanceof Vt?(this._subcollectionIterator=new Xs(t),this._subcollectionIterator.next()):t}hasNext(){if(this._atStart)return!0;if(this._subcollectionIterator!==null){if(this._subcollectionIterator.hasNext())return!0;this._subcollectionIterator=null}return!(this._index>=this._max)}remove(){throw new wi(this.getClass().getName())}get interfaces_(){return[UC]}}class ri{constructor(){ri.constructor_.apply(this,arguments)}static constructor_(){this._geom=null;const t=arguments[0];this._geom=t}static locatePointInPolygon(t,e){if(e.isEmpty())return y.EXTERIOR;const i=e.getExteriorRing(),s=ri.locatePointInRing(t,i);if(s!==y.INTERIOR)return s;for(let r=0;r<e.getNumInteriorRing();r++){const o=e.getInteriorRingN(r),a=ri.locatePointInRing(t,o);if(a===y.BOUNDARY)return y.BOUNDARY;if(a===y.INTERIOR)return y.EXTERIOR}return y.INTERIOR}static locatePointInRing(t,e){return e.getEnvelopeInternal().intersects(t)?Pi.locateInRing(t,e.getCoordinates()):y.EXTERIOR}static isContained(t,e){return y.EXTERIOR!==ri.locate(t,e)}static locate(t,e){return e.isEmpty()||!e.getEnvelopeInternal().intersects(t)?y.EXTERIOR:ri.locateInGeometry(t,e)}static containsPointInPolygon(t,e){return y.EXTERIOR!==ri.locatePointInPolygon(t,e)}static locateInGeometry(t,e){if(e instanceof Ne)return ri.locatePointInPolygon(t,e);if(e instanceof Vt){const i=new Xs(e);for(;i.hasNext();){const s=i.next();if(s!==e){const r=ri.locateInGeometry(t,s);if(r!==y.EXTERIOR)return r}}}return y.EXTERIOR}locate(t){return ri.locate(t,this._geom)}get interfaces_(){return[Hf]}}class VC extends Af{}const pi=0,fn=1;function yd(n){return n==null?pi:n.color}function pt(n){return n==null?null:n.parent}function _i(n,t){n!==null&&(n.color=t)}function Dl(n){return n==null?null:n.left}function _d(n){return n==null?null:n.right}class ar extends VC{constructor(){super(),this.root_=null,this.size_=0}get(t){let e=this.root_;for(;e!==null;){const i=t.compareTo(e.key);if(i<0)e=e.left;else if(i>0)e=e.right;else return e.value}return null}put(t,e){if(this.root_===null)return this.root_={key:t,value:e,left:null,right:null,parent:null,color:pi,getValue(){return this.value},getKey(){return this.key}},this.size_=1,null;let i=this.root_,s,r;do if(s=i,r=t.compareTo(i.key),r<0)i=i.left;else if(r>0)i=i.right;else{const a=i.value;return i.value=e,a}while(i!==null);const o={key:t,left:null,right:null,value:e,parent:s,color:pi,getValue(){return this.value},getKey(){return this.key}};return r<0?s.left=o:s.right=o,this.fixAfterInsertion(o),this.size_++,null}fixAfterInsertion(t){let e;for(t.color=fn;t!=null&&t!==this.root_&&t.parent.color===fn;)pt(t)===Dl(pt(pt(t)))?(e=_d(pt(pt(t))),yd(e)===fn?(_i(pt(t),pi),_i(e,pi),_i(pt(pt(t)),fn),t=pt(pt(t))):(t===_d(pt(t))&&(t=pt(t),this.rotateLeft(t)),_i(pt(t),pi),_i(pt(pt(t)),fn),this.rotateRight(pt(pt(t))))):(e=Dl(pt(pt(t))),yd(e)===fn?(_i(pt(t),pi),_i(e,pi),_i(pt(pt(t)),fn),t=pt(pt(t))):(t===Dl(pt(t))&&(t=pt(t),this.rotateRight(t)),_i(pt(t),pi),_i(pt(pt(t)),fn),this.rotateLeft(pt(pt(t)))));this.root_.color=pi}values(){const t=new it;let e=this.getFirstEntry();if(e!==null)for(t.add(e.value);(e=ar.successor(e))!==null;)t.add(e.value);return t}entrySet(){const t=new Of;let e=this.getFirstEntry();if(e!==null)for(t.add(e);(e=ar.successor(e))!==null;)t.add(e);return t}rotateLeft(t){if(t!=null){const e=t.right;t.right=e.left,e.left!=null&&(e.left.parent=t),e.parent=t.parent,t.parent==null?this.root_=e:t.parent.left===t?t.parent.left=e:t.parent.right=e,e.left=t,t.parent=e}}rotateRight(t){if(t!=null){const e=t.left;t.left=e.right,e.right!=null&&(e.right.parent=t),e.parent=t.parent,t.parent==null?this.root_=e:t.parent.right===t?t.parent.right=e:t.parent.left=e,e.right=t,t.parent=e}}getFirstEntry(){let t=this.root_;if(t!=null)for(;t.left!=null;)t=t.left;return t}static successor(t){let e;if(t===null)return null;if(t.right!==null){for(e=t.right;e.left!==null;)e=e.left;return e}else{e=t.parent;let i=t;for(;e!==null&&i===e.right;)i=e,e=e.parent;return e}}size(){return this.size_}containsKey(t){let e=this.root_;for(;e!==null;){const i=t.compareTo(e.key);if(i<0)e=e.left;else if(i>0)e=e.right;else return!0}return!1}}class rl{constructor(){rl.constructor_.apply(this,arguments)}static constructor_(){this._edgeMap=new ar,this._edgeList=null,this._ptInAreaLocation=[y.NONE,y.NONE]}getNextCW(t){this.getEdges();const e=this._edgeList.indexOf(t);let i=e-1;return e===0&&(i=this._edgeList.size()-1),this._edgeList.get(i)}propagateSideLabels(t){let e=y.NONE;for(let s=this.iterator();s.hasNext();){const o=s.next().getLabel();o.isArea(t)&&o.getLocation(t,D.LEFT)!==y.NONE&&(e=o.getLocation(t,D.LEFT))}if(e===y.NONE)return null;let i=e;for(let s=this.iterator();s.hasNext();){const r=s.next(),o=r.getLabel();if(o.getLocation(t,D.ON)===y.NONE&&o.setLocation(t,D.ON,i),o.isArea(t)){const a=o.getLocation(t,D.LEFT),l=o.getLocation(t,D.RIGHT);if(l!==y.NONE){if(l!==i)throw new Kn("side location conflict",r.getCoordinate());a===y.NONE&&rt.shouldNeverReachHere("found single null side (at "+r.getCoordinate()+")"),i=a}else rt.isTrue(o.getLocation(t,D.LEFT)===y.NONE,"found single null side"),o.setLocation(t,D.RIGHT,i),o.setLocation(t,D.LEFT,i)}}}getCoordinate(){const t=this.iterator();return t.hasNext()?t.next().getCoordinate():null}checkAreaLabelsConsistent(t){const e=this.getEdges();if(e.size()<=0)return!0;const i=e.size()-1,r=e.get(i).getLabel().getLocation(t,D.LEFT);rt.isTrue(r!==y.NONE,"Found unlabelled area edge");let o=r;for(let a=this.iterator();a.hasNext();){const h=a.next().getLabel();rt.isTrue(h.isArea(t),"Found non-area edge");const c=h.getLocation(t,D.LEFT),u=h.getLocation(t,D.RIGHT);if(c===u||u!==o)return!1;o=c}return!0}findIndex(t){this.iterator();for(let e=0;e<this._edgeList.size();e++)if(this._edgeList.get(e)===t)return e;return-1}iterator(){return this.getEdges().iterator()}getEdges(){return this._edgeList===null&&(this._edgeList=new it(this._edgeMap.values())),this._edgeList}getLocation(t,e,i){return this._ptInAreaLocation[t]===y.NONE&&(this._ptInAreaLocation[t]=ri.locate(e,i[t].getGeometry())),this._ptInAreaLocation[t]}toString(){const t=new ro;t.append("EdgeEndStar:   "+this.getCoordinate()),t.append(`
`);for(let e=this.iterator();e.hasNext();){const i=e.next();t.append(i),t.append(`
`)}return t.toString()}computeEdgeEndLabels(t){for(let e=this.iterator();e.hasNext();)e.next().computeLabel(t)}computeLabelling(t){this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()),this.propagateSideLabels(0),this.propagateSideLabels(1);const e=[!1,!1];for(let i=this.iterator();i.hasNext();){const r=i.next().getLabel();for(let o=0;o<2;o++)r.isLine(o)&&r.getLocation(o)===y.BOUNDARY&&(e[o]=!0)}for(let i=this.iterator();i.hasNext();){const s=i.next(),r=s.getLabel();for(let o=0;o<2;o++)if(r.isAnyNull(o)){let a=y.NONE;if(e[o])a=y.EXTERIOR;else{const l=s.getCoordinate();a=this.getLocation(o,l,t)}r.setAllLocationsIfNull(o,a)}}}getDegree(){return this._edgeMap.size()}insertEdgeEnd(t,e){this._edgeMap.put(t,e),this._edgeList=null}print(t){ti.out.println("EdgeEndStar:   "+this.getCoordinate());for(let e=this.iterator();e.hasNext();)e.next().print(t)}isAreaLabelsConsistent(t){return this.computeEdgeEndLabels(t.getBoundaryNodeRule()),this.checkAreaLabelsConsistent(0)}}class Nt{static isNorthern(t){return t===Nt.NE||t===Nt.NW}static isOpposite(t,e){return t===e?!1:(t-e+4)%4===2}static commonHalfPlane(t,e){if(t===e)return t;if((t-e+4)%4===2)return-1;const s=t<e?t:e,r=t>e?t:e;return s===0&&r===3?3:s}static isInHalfPlane(t,e){return e===Nt.SE?t===Nt.SE||t===Nt.SW:t===e||t===e+1}static quadrant(){if(typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1];if(t===0&&e===0)throw new dt("Cannot compute the quadrant for point ( "+t+", "+e+" )");return t>=0?e>=0?Nt.NE:Nt.SE:e>=0?Nt.NW:Nt.SW}else if(arguments[0]instanceof R&&arguments[1]instanceof R){const t=arguments[0],e=arguments[1];if(e.x===t.x&&e.y===t.y)throw new dt("Cannot compute the quadrant for two identical points "+t);return e.x>=t.x?e.y>=t.y?Nt.NE:Nt.SE:e.y>=t.y?Nt.NW:Nt.SW}}}Nt.NE=0;Nt.NW=1;Nt.SW=2;Nt.SE=3;class Cc extends rl{constructor(){super(),Cc.constructor_.apply(this,arguments)}static constructor_(){this._resultAreaEdgeList=null,this._label=null,this._SCANNING_FOR_INCOMING=1,this._LINKING_TO_OUTGOING=2}linkResultDirectedEdges(){this.getResultAreaEdges();let t=null,e=null,i=this._SCANNING_FOR_INCOMING;for(let s=0;s<this._resultAreaEdgeList.size();s++){const r=this._resultAreaEdgeList.get(s),o=r.getSym();if(r.getLabel().isArea())switch(t===null&&r.isInResult()&&(t=r),i){case this._SCANNING_FOR_INCOMING:if(!o.isInResult())continue;e=o,i=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(!r.isInResult())continue;e.setNext(r),i=this._SCANNING_FOR_INCOMING;break}}if(i===this._LINKING_TO_OUTGOING){if(t===null)throw new Kn("no outgoing dirEdge found",this.getCoordinate());rt.isTrue(t.isInResult(),"unable to link last incoming dirEdge"),e.setNext(t)}}insert(t){const e=t;this.insertEdgeEnd(e,e)}getRightmostEdge(){const t=this.getEdges(),e=t.size();if(e<1)return null;const i=t.get(0);if(e===1)return i;const s=t.get(e-1),r=i.getQuadrant(),o=s.getQuadrant();return Nt.isNorthern(r)&&Nt.isNorthern(o)?i:!Nt.isNorthern(r)&&!Nt.isNorthern(o)?s:i.getDy()!==0?i:s.getDy()!==0?s:(rt.shouldNeverReachHere("found two horizontal edges incident on node"),null)}updateLabelling(t){for(let e=this.iterator();e.hasNext();){const s=e.next().getLabel();s.setAllLocationsIfNull(0,t.getLocation(0)),s.setAllLocationsIfNull(1,t.getLocation(1))}}linkAllDirectedEdges(){this.getEdges();let t=null,e=null;for(let i=this._edgeList.size()-1;i>=0;i--){const s=this._edgeList.get(i),r=s.getSym();e===null&&(e=r),t!==null&&r.setNext(t),t=s}e.setNext(t)}computeDepths(){if(arguments.length===1){const t=arguments[0],e=this.findIndex(t),i=t.getDepth(D.LEFT),s=t.getDepth(D.RIGHT),r=this.computeDepths(e+1,this._edgeList.size(),i);if(this.computeDepths(0,e,r)!==s)throw new Kn("depth mismatch at "+t.getCoordinate())}else if(arguments.length===3){const t=arguments[0],e=arguments[1];let s=arguments[2];for(let r=t;r<e;r++){const o=this._edgeList.get(r);o.setEdgeDepths(D.RIGHT,s),s=o.getDepth(D.LEFT)}return s}}mergeSymLabels(){for(let t=this.iterator();t.hasNext();){const e=t.next();e.getLabel().merge(e.getSym().getLabel())}}linkMinimalDirectedEdges(t){let e=null,i=null,s=this._SCANNING_FOR_INCOMING;for(let r=this._resultAreaEdgeList.size()-1;r>=0;r--){const o=this._resultAreaEdgeList.get(r),a=o.getSym();switch(e===null&&o.getEdgeRing()===t&&(e=o),s){case this._SCANNING_FOR_INCOMING:if(a.getEdgeRing()!==t)continue;i=a,s=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(o.getEdgeRing()!==t)continue;i.setNextMin(o),s=this._SCANNING_FOR_INCOMING;break}}s===this._LINKING_TO_OUTGOING&&(rt.isTrue(e!==null,"found null for first outgoing dirEdge"),rt.isTrue(e.getEdgeRing()===t,"unable to link last incoming dirEdge"),i.setNextMin(e))}getOutgoingDegree(){if(arguments.length===0){let t=0;for(let e=this.iterator();e.hasNext();)e.next().isInResult()&&t++;return t}else if(arguments.length===1){const t=arguments[0];let e=0;for(let i=this.iterator();i.hasNext();)i.next().getEdgeRing()===t&&e++;return e}}getLabel(){return this._label}findCoveredLineEdges(){let t=y.NONE;for(let i=this.iterator();i.hasNext();){const s=i.next(),r=s.getSym();if(!s.isLineEdge()){if(s.isInResult()){t=y.INTERIOR;break}if(r.isInResult()){t=y.EXTERIOR;break}}}if(t===y.NONE)return null;let e=t;for(let i=this.iterator();i.hasNext();){const s=i.next(),r=s.getSym();s.isLineEdge()?s.getEdge().setCovered(e===y.INTERIOR):(s.isInResult()&&(e=y.EXTERIOR),r.isInResult()&&(e=y.INTERIOR))}}computeLabelling(t){super.computeLabelling.call(this,t),this._label=new Ht(y.NONE);for(let e=this.iterator();e.hasNext();){const r=e.next().getEdge().getLabel();for(let o=0;o<2;o++){const a=r.getLocation(o);(a===y.INTERIOR||a===y.BOUNDARY)&&this._label.setLocation(o,y.INTERIOR)}}}print(t){ti.out.println("DirectedEdgeStar: "+this.getCoordinate());for(let e=this.iterator();e.hasNext();){const i=e.next();t.print("out "),i.print(t),t.println(),t.print("in "),i.getSym().print(t),t.println()}}getResultAreaEdges(){if(this._resultAreaEdgeList!==null)return this._resultAreaEdgeList;this._resultAreaEdgeList=new it;for(let t=this.iterator();t.hasNext();){const e=t.next();(e.isInResult()||e.getSym().isInResult())&&this._resultAreaEdgeList.add(e)}return this._resultAreaEdgeList}}class ol{constructor(){ol.constructor_.apply(this,arguments)}static constructor_(){if(this._label=null,this._isInResult=!1,this._isCovered=!1,this._isCoveredSet=!1,this._isVisited=!1,arguments.length!==0){if(arguments.length===1){const t=arguments[0];this._label=t}}}setVisited(t){this._isVisited=t}setInResult(t){this._isInResult=t}setLabel(t){this._label=t}getLabel(){return this._label}setCovered(t){this._isCovered=t,this._isCoveredSet=!0}updateIM(t){rt.isTrue(this._label.getGeometryCount()>=2,"found partial label"),this.computeIM(t)}isCovered(){return this._isCovered}isCoveredSet(){return this._isCoveredSet}isInResult(){return this._isInResult}isVisited(){return this._isVisited}}let lr=class Th extends ol{constructor(){super(),Th.constructor_.apply(this,arguments)}static constructor_(){this._coord=null,this._edges=null;const t=arguments[0],e=arguments[1];this._coord=t,this._edges=e,this._label=new Ht(0,y.NONE)}isIncidentEdgeInResult(){for(let t=this.getEdges().getEdges().iterator();t.hasNext();)if(t.next().getEdge().isInResult())return!0;return!1}isIsolated(){return this._label.getGeometryCount()===1}getCoordinate(){return this._coord}computeMergedLocation(t,e){let i=y.NONE;if(i=this._label.getLocation(e),!t.isNull(e)){const s=t.getLocation(e);i!==y.BOUNDARY&&(i=s)}return i}setLabel(){if(arguments.length===2&&Number.isInteger(arguments[1])&&Number.isInteger(arguments[0])){const t=arguments[0],e=arguments[1];this._label===null?this._label=new Ht(t,e):this._label.setLocation(t,e)}else return super.setLabel.apply(this,arguments)}getEdges(){return this._edges}mergeLabel(){if(arguments[0]instanceof Th){const t=arguments[0];this.mergeLabel(t._label)}else if(arguments[0]instanceof Ht){const t=arguments[0];for(let e=0;e<2;e++){const i=this.computeMergedLocation(t,e);this._label.getLocation(e)===y.NONE&&this._label.setLocation(e,i)}}}add(t){this._edges.insert(t),t.setNode(this)}setLabelBoundary(t){if(this._label===null)return null;let e=y.NONE;this._label!==null&&(e=this._label.getLocation(t));let i=null;switch(e){case y.BOUNDARY:i=y.INTERIOR;break;case y.INTERIOR:i=y.BOUNDARY;break;default:i=y.BOUNDARY;break}this._label.setLocation(t,i)}print(t){t.println("node "+this._coord+" lbl: "+this._label)}computeIM(t){}};class Rc{createNode(t){return new lr(t,null)}}class jC extends Rc{constructor(){super()}createNode(t){return new lr(t,new Cc)}}class ao{constructor(){ao.constructor_.apply(this,arguments)}static constructor_(){this.nodeMap=new ar,this.nodeFact=null;const t=arguments[0];this.nodeFact=t}print(t){for(let e=this.iterator();e.hasNext();)e.next().print(t)}iterator(){return this.nodeMap.values().iterator()}values(){return this.nodeMap.values()}getBoundaryNodes(t){const e=new it;for(let i=this.iterator();i.hasNext();){const s=i.next();s.getLabel().getLocation(t)===y.BOUNDARY&&e.add(s)}return e}add(t){const e=t.getCoordinate();this.addNode(e).add(t)}find(t){return this.nodeMap.get(t)}addNode(){if(arguments[0]instanceof R){const t=arguments[0];let e=this.nodeMap.get(t);return e===null&&(e=this.nodeFact.createNode(t),this.nodeMap.put(t,e)),e}else if(arguments[0]instanceof lr){const t=arguments[0],e=this.nodeMap.get(t.getCoordinate());return e===null?(this.nodeMap.put(t.getCoordinate(),t),t):(e.mergeLabel(t),e)}}}class Ki{constructor(){Ki.constructor_.apply(this,arguments)}static constructor_(){if(this._edge=null,this._label=null,this._node=null,this._p0=null,this._p1=null,this._dx=null,this._dy=null,this._quadrant=null,arguments.length===1){const t=arguments[0];this._edge=t}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];Ki.constructor_.call(this,t,e,i,null)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];Ki.constructor_.call(this,t),this.init(e,i),this._label=s}}compareDirection(t){return this._dx===t._dx&&this._dy===t._dy?0:this._quadrant>t._quadrant?1:this._quadrant<t._quadrant?-1:vt.index(t._p0,t._p1,this._p1)}getDy(){return this._dy}print(t){const e=Math.atan2(this._dy,this._dx),i=this.getClass().getName(),s=i.lastIndexOf("."),r=i.substring(s+1);t.print("  "+r+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+e+"   "+this._label)}getLabel(){return this._label}getEdge(){return this._edge}toString(){const t=Math.atan2(this._dy,this._dx),e=this.getClass().getName(),i=e.lastIndexOf(".");return"  "+e.substring(i+1)+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+t+"   "+this._label}computeLabel(t){}init(t,e){this._p0=t,this._p1=e,this._dx=e.x-t.x,this._dy=e.y-t.y,this._quadrant=Nt.quadrant(this._dx,this._dy),rt.isTrue(!(this._dx===0&&this._dy===0),"EdgeEnd with identical endpoints found")}getCoordinate(){return this._p0}setNode(t){this._node=t}compareTo(t){const e=t;return this.compareDirection(e)}getDirectedCoordinate(){return this._p1}getDx(){return this._dx}getQuadrant(){return this._quadrant}getNode(){return this._node}get interfaces_(){return[zi]}}class Ca extends Ki{constructor(){super(),Ca.constructor_.apply(this,arguments)}static constructor_(){this._isForward=null,this._isInResult=!1,this._isVisited=!1,this._sym=null,this._next=null,this._nextMin=null,this._edgeRing=null,this._minEdgeRing=null,this._depth=[0,-999,-999];const t=arguments[0],e=arguments[1];if(Ki.constructor_.call(this,t),this._isForward=e,e)this.init(t.getCoordinate(0),t.getCoordinate(1));else{const i=t.getNumPoints()-1;this.init(t.getCoordinate(i),t.getCoordinate(i-1))}this.computeDirectedLabel()}static depthFactor(t,e){return t===y.EXTERIOR&&e===y.INTERIOR?1:t===y.INTERIOR&&e===y.EXTERIOR?-1:0}setVisited(t){this._isVisited=t}setDepth(t,e){if(this._depth[t]!==-999&&this._depth[t]!==e)throw new Kn("assigned depths do not match",this.getCoordinate());this._depth[t]=e}isInteriorAreaEdge(){let t=!0;for(let e=0;e<2;e++)this._label.isArea(e)&&this._label.getLocation(e,D.LEFT)===y.INTERIOR&&this._label.getLocation(e,D.RIGHT)===y.INTERIOR||(t=!1);return t}setNextMin(t){this._nextMin=t}print(t){super.print.call(this,t),t.print(" "+this._depth[D.LEFT]+"/"+this._depth[D.RIGHT]),t.print(" ("+this.getDepthDelta()+")"),this._isInResult&&t.print(" inResult")}setMinEdgeRing(t){this._minEdgeRing=t}getSym(){return this._sym}isForward(){return this._isForward}setSym(t){this._sym=t}setVisitedEdge(t){this.setVisited(t),this._sym.setVisited(t)}getNextMin(){return this._nextMin}getDepth(t){return this._depth[t]}computeDirectedLabel(){this._label=new Ht(this._edge.getLabel()),this._isForward||this._label.flip()}getNext(){return this._next}isLineEdge(){const t=this._label.isLine(0)||this._label.isLine(1),e=!this._label.isArea(0)||this._label.allPositionsEqual(0,y.EXTERIOR),i=!this._label.isArea(1)||this._label.allPositionsEqual(1,y.EXTERIOR);return t&&e&&i}setEdgeRing(t){this._edgeRing=t}getMinEdgeRing(){return this._minEdgeRing}getDepthDelta(){let t=this._edge.getDepthDelta();return this._isForward||(t=-t),t}setInResult(t){this._isInResult=t}getEdge(){return this._edge}printEdge(t){this.print(t),t.print(" "),this._isForward?this._edge.print(t):this._edge.printReverse(t)}setEdgeDepths(t,e){let i=this.getEdge().getDepthDelta();this._isForward||(i=-i);let s=1;t===D.LEFT&&(s=-1);const r=D.opposite(t),o=i*s,a=e+o;this.setDepth(t,e),this.setDepth(r,a)}getEdgeRing(){return this._edgeRing}isInResult(){return this._isInResult}setNext(t){this._next=t}isVisited(){return this._isVisited}}class al{constructor(){al.constructor_.apply(this,arguments)}static constructor_(){if(this._edges=new it,this._nodes=null,this._edgeEndList=new it,arguments.length===0)this._nodes=new ao(new Rc);else if(arguments.length===1){const t=arguments[0];this._nodes=new ao(t)}}static linkResultDirectedEdges(t){for(let e=t.iterator();e.hasNext();)e.next().getEdges().linkResultDirectedEdges()}printEdges(t){t.println("Edges:");for(let e=0;e<this._edges.size();e++){t.println("edge "+e+":");const i=this._edges.get(e);i.print(t),i.eiList.print(t)}}debugPrintln(t){ti.out.println(t)}isBoundaryNode(t,e){const i=this._nodes.find(e);if(i===null)return!1;const s=i.getLabel();return s!==null&&s.getLocation(t)===y.BOUNDARY}linkAllDirectedEdges(){for(let t=this._nodes.iterator();t.hasNext();)t.next().getEdges().linkAllDirectedEdges()}debugPrint(t){ti.out.print(t)}findEdgeEnd(t){for(let e=this.getEdgeEnds().iterator();e.hasNext();){const i=e.next();if(i.getEdge()===t)return i}return null}getNodes(){return this._nodes.values()}findEdge(t,e){for(let i=0;i<this._edges.size();i++){const s=this._edges.get(i),r=s.getCoordinates();if(t.equals(r[0])&&e.equals(r[1]))return s}return null}find(t){return this._nodes.find(t)}addNode(){if(arguments[0]instanceof lr){const t=arguments[0];return this._nodes.addNode(t)}else if(arguments[0]instanceof R){const t=arguments[0];return this._nodes.addNode(t)}}getNodeIterator(){return this._nodes.iterator()}linkResultDirectedEdges(){for(let t=this._nodes.iterator();t.hasNext();)t.next().getEdges().linkResultDirectedEdges()}matchInSameDirection(t,e,i,s){return t.equals(i)?vt.index(t,e,s)===vt.COLLINEAR&&Nt.quadrant(t,e)===Nt.quadrant(i,s):!1}getEdgeEnds(){return this._edgeEndList}getEdgeIterator(){return this._edges.iterator()}findEdgeInSameDirection(t,e){for(let i=0;i<this._edges.size();i++){const s=this._edges.get(i),r=s.getCoordinates();if(this.matchInSameDirection(t,e,r[0],r[1])||this.matchInSameDirection(t,e,r[r.length-1],r[r.length-2]))return s}return null}insertEdge(t){this._edges.add(t)}addEdges(t){for(let e=t.iterator();e.hasNext();){const i=e.next();this._edges.add(i);const s=new Ca(i,!0),r=new Ca(i,!1);s.setSym(r),r.setSym(s),this.add(s),this.add(r)}}add(t){this._nodes.add(t),this._edgeEndList.add(t)}}class Ra{constructor(){Ra.constructor_.apply(this,arguments)}static constructor_(){this._geometryFactory=new ie,this._geomGraph=null,this._disconnectedRingcoord=null;const t=arguments[0];this._geomGraph=t}static findDifferentPoint(t,e){for(let i=0;i<t.length;i++)if(!t[i].equals(e))return t[i];return null}visitInteriorRing(t,e){if(t.isEmpty())return null;const i=t.getCoordinates(),s=i[0],r=Ra.findDifferentPoint(i,s),o=e.findEdgeInSameDirection(s,r),a=e.findEdgeEnd(o);let l=null;a.getLabel().getLocation(0,D.RIGHT)===y.INTERIOR?l=a:a.getSym().getLabel().getLocation(0,D.RIGHT)===y.INTERIOR&&(l=a.getSym()),rt.isTrue(l!==null,"unable to find dirEdge with Interior on RHS"),this.visitLinkedDirectedEdges(l)}visitShellInteriors(t,e){if(t instanceof Ne){const i=t;this.visitInteriorRing(i.getExteriorRing(),e)}if(t instanceof ii){const i=t;for(let s=0;s<i.getNumGeometries();s++){const r=i.getGeometryN(s);this.visitInteriorRing(r.getExteriorRing(),e)}}}getCoordinate(){return this._disconnectedRingcoord}setInteriorEdgesInResult(t){for(let e=t.getEdgeEnds().iterator();e.hasNext();){const i=e.next();i.getLabel().getLocation(0,D.RIGHT)===y.INTERIOR&&i.setInResult(!0)}}visitLinkedDirectedEdges(t){const e=t;let i=t;do rt.isTrue(i!==null,"found null Directed Edge"),i.setVisited(!0),i=i.getNext();while(i!==e)}buildEdgeRings(t){const e=new it;for(let i=t.iterator();i.hasNext();){const s=i.next();if(s.isInResult()&&s.getEdgeRing()===null){const r=new Mc(s,this._geometryFactory);r.linkDirectedEdgesForMinimalEdgeRings();const o=r.buildMinimalRings();e.addAll(o)}}return e}hasUnvisitedShellEdge(t){for(let e=0;e<t.size();e++){const i=t.get(e);if(i.isHole())continue;const s=i.getEdges();let r=s.get(0);if(r.getLabel().getLocation(0,D.RIGHT)===y.INTERIOR){for(let o=0;o<s.size();o++)if(r=s.get(o),!r.isVisited())return this._disconnectedRingcoord=r.getCoordinate(),!0}}return!1}isInteriorsConnected(){const t=new it;this._geomGraph.computeSplitEdges(t);const e=new al(new jC);e.addEdges(t),this.setInteriorEdgesInResult(e),e.linkResultDirectedEdges();const i=this.buildEdgeRings(e.getEdgeEnds());return this.visitShellInteriors(this._geomGraph.getGeometry(),e),!this.hasUnvisitedShellEdge(i)}}class qC{computeEdgeEnds(){if(arguments.length===1){const t=arguments[0],e=new it;for(let i=t;i.hasNext();){const s=i.next();this.computeEdgeEnds(s,e)}return e}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t.getEdgeIntersectionList();i.addEndpoints();const s=i.iterator();let r=null,o=null;if(!s.hasNext())return null;let a=s.next();do r=o,o=a,a=null,s.hasNext()&&(a=s.next()),o!==null&&(this.createEdgeEndForPrev(t,e,o,r),this.createEdgeEndForNext(t,e,o,a));while(o!==null)}}createEdgeEndForNext(t,e,i,s){const r=i.segmentIndex+1;if(r>=t.getNumPoints()&&s===null)return null;let o=t.getCoordinate(r);s!==null&&s.segmentIndex===i.segmentIndex&&(o=s.coord);const a=new Ki(t,i.coord,o,new Ht(t.getLabel()));e.add(a)}createEdgeEndForPrev(t,e,i,s){let r=i.segmentIndex;if(i.dist===0){if(r===0)return null;r--}let o=t.getCoordinate(r);s!==null&&s.segmentIndex>=r&&(o=s.coord);const a=new Ht(t.getLabel());a.flip();const l=new Ki(t,i.coord,o,a);e.add(l)}}class ZC{}const So={reverseOrder:function(){return{compare(n,t){return t.compareTo(n)}}},min:function(n){return So.sort(n),n.get(0)},sort:function(n,t){const e=n.toArray();t?Qn.sort(e,t):Qn.sort(e);const i=n.iterator();for(let s=0,r=e.length;s<r;s++)i.next(),i.set(e[s])},singletonList:function(n){const t=new it;return t.add(n),t}};class as{constructor(){as.constructor_.apply(this,arguments)}static constructor_(){this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._properIntersectionPoint=null,this._li=null,this._includeProper=null,this._recordIsolated=null,this._isSelfIntersection=null,this._numIntersections=0,this.numTests=0,this._bdyNodes=null,this._isDone=!1,this._isDoneWhenProperInt=!1;const t=arguments[0],e=arguments[1],i=arguments[2];this._li=t,this._includeProper=e,this._recordIsolated=i}static isAdjacentSegments(t,e){return Math.abs(t-e)===1}isTrivialIntersection(t,e,i,s){if(t===i&&this._li.getIntersectionNum()===1){if(as.isAdjacentSegments(e,s))return!0;if(t.isClosed()){const r=t.getNumPoints()-1;if(e===0&&s===r||s===0&&e===r)return!0}}return!1}hasProperInteriorIntersection(){return this._hasProperInterior}isBoundaryPointInternal(t,e){for(let i=e.iterator();i.hasNext();){const r=i.next().getCoordinate();if(t.isIntersection(r))return!0}return!1}hasProperIntersection(){return this._hasProper}hasIntersection(){return this._hasIntersection}isDone(){return this._isDone}isBoundaryPoint(t,e){return e===null?!1:!!(this.isBoundaryPointInternal(t,e[0])||this.isBoundaryPointInternal(t,e[1]))}setBoundaryNodes(t,e){this._bdyNodes=new Array(2).fill(null),this._bdyNodes[0]=t,this._bdyNodes[1]=e}addIntersections(t,e,i,s){if(t===i&&e===s)return null;this.numTests++;const r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],a=i.getCoordinates()[s],l=i.getCoordinates()[s+1];this._li.computeIntersection(r,o,a,l),this._li.hasIntersection()&&(this._recordIsolated&&(t.setIsolated(!1),i.setIsolated(!1)),this._numIntersections++,this.isTrivialIntersection(t,e,i,s)||(this._hasIntersection=!0,(this._includeProper||!this._li.isProper())&&(t.addIntersections(this._li,e,0),i.addIntersections(this._li,s,1)),this._li.isProper()&&(this._properIntersectionPoint=this._li.getIntersection(0).copy(),this._hasProper=!0,this._isDoneWhenProperInt&&(this._isDone=!0),this.isBoundaryPoint(this._li,this._bdyNodes)||(this._hasProperInterior=!0))))}getProperIntersectionPoint(){return this._properIntersectionPoint}setIsDoneIfProperInt(t){this._isDoneWhenProperInt=t}}class Ec{constructor(){Ec.constructor_.apply(this,arguments)}static constructor_(){this.mce=null,this.chainIndex=null;const t=arguments[0],e=arguments[1];this.mce=t,this.chainIndex=e}computeIntersections(t,e){this.mce.computeIntersectsForChain(this.chainIndex,t.mce,t.chainIndex,e)}}class Ei{constructor(){Ei.constructor_.apply(this,arguments)}static constructor_(){if(this._label=null,this._xValue=null,this._eventType=null,this._insertEvent=null,this._deleteEventIndex=null,this._obj=null,arguments.length===2){const t=arguments[0],e=arguments[1];this._eventType=Ei.DELETE,this._xValue=t,this._insertEvent=e}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._eventType=Ei.INSERT,this._label=t,this._xValue=e,this._obj=i}}getObject(){return this._obj}getDeleteEventIndex(){return this._deleteEventIndex}isDelete(){return this._eventType===Ei.DELETE}setDeleteEventIndex(t){this._deleteEventIndex=t}compareTo(t){const e=t;return this._xValue<e._xValue?-1:this._xValue>e._xValue?1:this._eventType<e._eventType?-1:this._eventType>e._eventType?1:0}getInsertEvent(){return this._insertEvent}isInsert(){return this._eventType===Ei.INSERT}isSameLabel(t){return this._label===null?!1:this._label===t._label}get interfaces_(){return[zi]}}Ei.INSERT=1;Ei.DELETE=2;class vc extends ZC{constructor(){super(),vc.constructor_.apply(this,arguments)}static constructor_(){this.events=new it,this.nOverlaps=null}prepareEvents(){So.sort(this.events);for(let t=0;t<this.events.size();t++){const e=this.events.get(t);e.isDelete()&&e.getInsertEvent().setDeleteEventIndex(t)}}computeIntersections(){if(arguments.length===1){const t=arguments[0];this.nOverlaps=0,this.prepareEvents();for(let e=0;e<this.events.size();e++){const i=this.events.get(e);if(i.isInsert()&&this.processOverlaps(e,i.getDeleteEventIndex(),i,t),t.isDone())break}}else if(arguments.length===3){if(arguments[2]instanceof as&&Z(arguments[0],Hs)&&Z(arguments[1],Hs)){const t=arguments[0],e=arguments[1],i=arguments[2];this.addEdges(t,t),this.addEdges(e,e),this.computeIntersections(i)}else if(typeof arguments[2]=="boolean"&&Z(arguments[0],Hs)&&arguments[1]instanceof as){const t=arguments[0],e=arguments[1];arguments[2]?this.addEdges(t,null):this.addEdges(t),this.computeIntersections(e)}}}addEdge(t,e){const i=t.getMonotoneChainEdge(),s=i.getStartIndexes();for(let r=0;r<s.length-1;r++){const o=new Ec(i,r),a=new Ei(e,i.getMinX(r),o);this.events.add(a),this.events.add(new Ei(i.getMaxX(r),a))}}processOverlaps(t,e,i,s){const r=i.getObject();for(let o=t;o<e;o++){const a=this.events.get(o);if(a.isInsert()){const l=a.getObject();i.isSameLabel(a)||(r.computeIntersections(l,s),this.nOverlaps++)}}}addEdges(){if(arguments.length===1){const t=arguments[0];for(let e=t.iterator();e.hasNext();){const i=e.next();this.addEdge(i,i)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];for(let i=t.iterator();i.hasNext();){const s=i.next();this.addEdge(s,e)}}}}class ce{isInBoundary(t){}}class Yf{isInBoundary(t){return t%2===1}get interfaces_(){return[ce]}}class Xf{isInBoundary(t){return t>0}get interfaces_(){return[ce]}}class Uf{isInBoundary(t){return t>1}get interfaces_(){return[ce]}}class Vf{isInBoundary(t){return t===1}get interfaces_(){return[ce]}}ce.Mod2BoundaryNodeRule=Yf;ce.EndPointBoundaryNodeRule=Xf;ce.MultiValentEndPointBoundaryNodeRule=Uf;ce.MonoValentEndPointBoundaryNodeRule=Vf;ce.MOD2_BOUNDARY_RULE=new Yf;ce.ENDPOINT_BOUNDARY_RULE=new Xf;ce.MULTIVALENT_ENDPOINT_BOUNDARY_RULE=new Uf;ce.MONOVALENT_ENDPOINT_BOUNDARY_RULE=new Vf;ce.OGC_SFS_BOUNDARY_RULE=ce.MOD2_BOUNDARY_RULE;class Ic{constructor(){Ic.constructor_.apply(this,arguments)}static constructor_(){if(this._boundaryRule=ce.OGC_SFS_BOUNDARY_RULE,this._isIn=null,this._numBoundaries=null,arguments.length!==0){if(arguments.length===1){const t=arguments[0];if(t===null)throw new dt("Rule must be non-null");this._boundaryRule=t}}}locateInPolygonRing(t,e){return e.getEnvelopeInternal().intersects(t)?Pi.locateInRing(t,e.getCoordinates()):y.EXTERIOR}intersects(t,e){return this.locate(t,e)!==y.EXTERIOR}updateLocationInfo(t){t===y.INTERIOR&&(this._isIn=!0),t===y.BOUNDARY&&this._numBoundaries++}computeLocation(t,e){if(e instanceof ki&&this.updateLocationInfo(this.locateOnPoint(t,e)),e instanceof he)this.updateLocationInfo(this.locateOnLineString(t,e));else if(e instanceof Ne)this.updateLocationInfo(this.locateInPolygon(t,e));else if(e instanceof rs){const i=e;for(let s=0;s<i.getNumGeometries();s++){const r=i.getGeometryN(s);this.updateLocationInfo(this.locateOnLineString(t,r))}}else if(e instanceof ii){const i=e;for(let s=0;s<i.getNumGeometries();s++){const r=i.getGeometryN(s);this.updateLocationInfo(this.locateInPolygon(t,r))}}else if(e instanceof Vt){const i=new Xs(e);for(;i.hasNext();){const s=i.next();s!==e&&this.computeLocation(t,s)}}}locateOnPoint(t,e){return e.getCoordinate().equals2D(t)?y.INTERIOR:y.EXTERIOR}locateOnLineString(t,e){if(!e.getEnvelopeInternal().intersects(t))return y.EXTERIOR;const i=e.getCoordinateSequence();return!e.isClosed()&&(t.equals(i.getCoordinate(0))||t.equals(i.getCoordinate(i.size()-1)))?y.BOUNDARY:Pi.isOnLine(t,i)?y.INTERIOR:y.EXTERIOR}locateInPolygon(t,e){if(e.isEmpty())return y.EXTERIOR;const i=e.getExteriorRing(),s=this.locateInPolygonRing(t,i);if(s===y.EXTERIOR)return y.EXTERIOR;if(s===y.BOUNDARY)return y.BOUNDARY;for(let r=0;r<e.getNumInteriorRing();r++){const o=e.getInteriorRingN(r),a=this.locateInPolygonRing(t,o);if(a===y.INTERIOR)return y.EXTERIOR;if(a===y.BOUNDARY)return y.BOUNDARY}return y.INTERIOR}locate(t,e){return e.isEmpty()?y.EXTERIOR:e instanceof he?this.locateOnLineString(t,e):e instanceof Ne?this.locateInPolygon(t,e):(this._isIn=!1,this._numBoundaries=0,this.computeLocation(t,e),this._boundaryRule.isInBoundary(this._numBoundaries)?y.BOUNDARY:this._numBoundaries>0||this._isIn?y.INTERIOR:y.EXTERIOR)}}class bc{visitItem(t){}}class Tr{constructor(){Tr.constructor_.apply(this,arguments)}static constructor_(){this._min=H.POSITIVE_INFINITY,this._max=H.NEGATIVE_INFINITY}getMin(){return this._min}intersects(t,e){return!(this._min>e||this._max<t)}getMax(){return this._max}toString(){return Ma.toLineString(new R(this._min,0),new R(this._max,0))}}class $C{compare(t,e){const i=t,s=e,r=(i._min+i._max)/2,o=(s._min+s._max)/2;return r<o?-1:r>o?1:0}get interfaces_(){return[_r]}}Tr.NodeComparator=$C;class Lc extends Tr{constructor(){super(),Lc.constructor_.apply(this,arguments)}static constructor_(){this._item=null;const t=arguments[0],e=arguments[1],i=arguments[2];this._min=t,this._max=e,this._item=i}query(t,e,i){if(!this.intersects(t,e))return null;i.visitItem(this._item)}}class Sc extends Tr{constructor(){super(),Sc.constructor_.apply(this,arguments)}static constructor_(){this._node1=null,this._node2=null;const t=arguments[0],e=arguments[1];this._node1=t,this._node2=e,this.buildExtent(this._node1,this._node2)}buildExtent(t,e){this._min=Math.min(t._min,e._min),this._max=Math.max(t._max,e._max)}query(t,e,i){if(!this.intersects(t,e))return null;this._node1!==null&&this._node1.query(t,e,i),this._node2!==null&&this._node2.query(t,e,i)}}class Nc{constructor(){Nc.constructor_.apply(this,arguments)}static constructor_(){this._leaves=new it,this._root=null,this._level=0}buildTree(){So.sort(this._leaves,new Tr.NodeComparator);let t=this._leaves,e=null,i=new it;for(;;){if(this.buildLevel(t,i),i.size()===1)return i.get(0);e=t,t=i,i=e}}insert(t,e,i){if(this._root!==null)throw new os("Index cannot be added to once it has been queried");this._leaves.add(new Lc(t,e,i))}query(t,e,i){if(this.init(),this._root===null)return null;this._root.query(t,e,i)}buildRoot(){if(this._root!==null)return null;this._root=this.buildTree()}printNode(t){ti.out.println(Ma.toLineString(new R(t._min,this._level),new R(t._max,this._level)))}init(){if(this._root!==null||this._leaves.size()===0)return null;this.buildRoot()}buildLevel(t,e){this._level++,e.clear();for(let i=0;i<t.size();i+=2){const s=t.get(i);if((i+1<t.size()?t.get(i):null)===null)e.add(s);else{const o=new Sc(t.get(i),t.get(i+1));e.add(o)}}}}class Ve{constructor(){Ve.constructor_.apply(this,arguments)}static constructor_(){if(this.p0=null,this.p1=null,arguments.length===0)Ve.constructor_.call(this,new R,new R);else if(arguments.length===1){const t=arguments[0];Ve.constructor_.call(this,t.p0,t.p1)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.p0=t,this.p1=e}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];Ve.constructor_.call(this,new R(t,e),new R(i,s))}}static midPoint(t,e){return new R((t.x+e.x)/2,(t.y+e.y)/2)}minX(){return Math.min(this.p0.x,this.p1.x)}orientationIndex(){if(arguments[0]instanceof Ve){const t=arguments[0],e=vt.index(this.p0,this.p1,t.p0),i=vt.index(this.p0,this.p1,t.p1);return e>=0&&i>=0||e<=0&&i<=0?Math.max(e,i):0}else if(arguments[0]instanceof R){const t=arguments[0];return vt.index(this.p0,this.p1,t)}}toGeometry(t){return t.createLineString([this.p0,this.p1])}isVertical(){return this.p0.x===this.p1.x}minY(){return Math.min(this.p0.y,this.p1.y)}midPoint(){return Ve.midPoint(this.p0,this.p1)}maxY(){return Math.max(this.p0.y,this.p1.y)}pointAlongOffset(t,e){const i=this.p0.x+t*(this.p1.x-this.p0.x),s=this.p0.y+t*(this.p1.y-this.p0.y),r=this.p1.x-this.p0.x,o=this.p1.y-this.p0.y,a=Math.sqrt(r*r+o*o);let l=0,h=0;if(e!==0){if(a<=0)throw new os("Cannot compute offset from zero-length line segment");l=e*r/a,h=e*o/a}const c=i-h,u=s+l;return new R(c,u)}setCoordinates(){if(arguments.length===1){const t=arguments[0];this.setCoordinates(t.p0,t.p1)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.p0.x=t.x,this.p0.y=t.y,this.p1.x=e.x,this.p1.y=e.y}}segmentFraction(t){let e=this.projectionFactor(t);return e<0?e=0:(e>1||H.isNaN(e))&&(e=1),e}toString(){return"LINESTRING( "+this.p0.x+" "+this.p0.y+", "+this.p1.x+" "+this.p1.y+")"}distance(){if(arguments[0]instanceof Ve){const t=arguments[0];return we.segmentToSegment(this.p0,this.p1,t.p0,t.p1)}else if(arguments[0]instanceof R){const t=arguments[0];return we.pointToSegment(t,this.p0,this.p1)}}equals(t){if(!(t instanceof Ve))return!1;const e=t;return this.p0.equals(e.p0)&&this.p1.equals(e.p1)}intersection(t){const e=new Pn;return e.computeIntersection(this.p0,this.p1,t.p0,t.p1),e.hasIntersection()?e.getIntersection(0):null}project(){if(arguments[0]instanceof R){const t=arguments[0];if(t.equals(this.p0)||t.equals(this.p1))return new R(t);const e=this.projectionFactor(t),i=new R;return i.x=this.p0.x+e*(this.p1.x-this.p0.x),i.y=this.p0.y+e*(this.p1.y-this.p0.y),i}else if(arguments[0]instanceof Ve){const t=arguments[0],e=this.projectionFactor(t.p0),i=this.projectionFactor(t.p1);if(e>=1&&i>=1||e<=0&&i<=0)return null;let s=this.project(t.p0);e<0&&(s=this.p0),e>1&&(s=this.p1);let r=this.project(t.p1);return i<0&&(r=this.p0),i>1&&(r=this.p1),new Ve(s,r)}}normalize(){this.p1.compareTo(this.p0)<0&&this.reverse()}angle(){return Math.atan2(this.p1.y-this.p0.y,this.p1.x-this.p0.x)}getCoordinate(t){return t===0?this.p0:this.p1}distancePerpendicular(t){return we.pointToLinePerpendicular(t,this.p0,this.p1)}closestPoint(t){const e=this.projectionFactor(t);if(e>0&&e<1)return this.project(t);const i=this.p0.distance(t),s=this.p1.distance(t);return i<s?this.p0:this.p1}projectionFactor(t){if(t.equals(this.p0))return 0;if(t.equals(this.p1))return 1;const e=this.p1.x-this.p0.x,i=this.p1.y-this.p0.y,s=e*e+i*i;return s<=0?H.NaN:((t.x-this.p0.x)*e+(t.y-this.p0.y)*i)/s}closestPoints(t){const e=this.intersection(t);if(e!==null)return[e,e];const i=new Array(2).fill(null);let s=H.MAX_VALUE,r=null;const o=this.closestPoint(t.p0);s=o.distance(t.p0),i[0]=o,i[1]=t.p0;const a=this.closestPoint(t.p1);r=a.distance(t.p1),r<s&&(s=r,i[0]=a,i[1]=t.p1);const l=t.closestPoint(this.p0);r=l.distance(this.p0),r<s&&(s=r,i[0]=this.p0,i[1]=l);const h=t.closestPoint(this.p1);return r=h.distance(this.p1),r<s&&(s=r,i[0]=this.p1,i[1]=h),i}maxX(){return Math.max(this.p0.x,this.p1.x)}getLength(){return this.p0.distance(this.p1)}compareTo(t){const e=t,i=this.p0.compareTo(e.p0);return i!==0?i:this.p1.compareTo(e.p1)}reverse(){const t=this.p0;this.p0=this.p1,this.p1=t}equalsTopo(t){return this.p0.equals(t.p0)&&this.p1.equals(t.p1)||this.p0.equals(t.p1)&&this.p1.equals(t.p0)}lineIntersection(t){return Bf.intersection(this.p0,this.p1,t.p0,t.p1)}isHorizontal(){return this.p0.y===this.p1.y}reflect(t){const e=this.p1.getY()-this.p0.getY(),i=this.p0.getX()-this.p1.getX(),s=this.p0.getY()*(this.p1.getX()-this.p0.getX())-this.p0.getX()*(this.p1.getY()-this.p0.getY()),r=e*e+i*i,o=e*e-i*i,a=t.getX(),l=t.getY(),h=(-o*a-2*e*i*l-2*e*s)/r,c=(o*l-2*e*i*a-2*i*s)/r;return new R(h,c)}pointAlong(t){const e=new R;return e.x=this.p0.x+t*(this.p1.x-this.p0.x),e.y=this.p0.y+t*(this.p1.y-this.p0.y),e}hashCode(){let t=H.doubleToLongBits(this.p0.x);t^=H.doubleToLongBits(this.p0.y)*31;const e=Math.trunc(t)^Math.trunc(t>>32);let i=H.doubleToLongBits(this.p1.x);i^=H.doubleToLongBits(this.p1.y)*31;const s=Math.trunc(i)^Math.trunc(i>>32);return e^s}get interfaces_(){return[zi,Pe]}}class oi{constructor(){oi.constructor_.apply(this,arguments)}static constructor_(){if(this._lines=null,this._isForcedToLineString=!1,arguments.length===1){const t=arguments[0];this._lines=t}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this._lines=t,this._isForcedToLineString=e}}static getLines(){if(arguments.length===1){const t=arguments[0];return oi.getLines(t,!1)}else if(arguments.length===2){if(Z(arguments[0],Ge)&&Z(arguments[1],Ge)){const t=arguments[0],e=arguments[1];for(let i=t.iterator();i.hasNext();){const s=i.next();oi.getLines(s,e)}return e}else if(arguments[0]instanceof G&&typeof arguments[1]=="boolean"){const t=arguments[0],e=arguments[1],i=new it;return t.apply(new oi(i,e)),i}else if(arguments[0]instanceof G&&Z(arguments[1],Ge)){const t=arguments[0],e=arguments[1];return t instanceof he?e.add(t):t.apply(new oi(e)),e}}else if(arguments.length===3){if(typeof arguments[2]=="boolean"&&Z(arguments[0],Ge)&&Z(arguments[1],Ge)){const t=arguments[0],e=arguments[1],i=arguments[2];for(let s=t.iterator();s.hasNext();){const r=s.next();oi.getLines(r,e,i)}return e}else if(typeof arguments[2]=="boolean"&&arguments[0]instanceof G&&Z(arguments[1],Ge)){const t=arguments[0],e=arguments[1],i=arguments[2];return t.apply(new oi(e,i)),e}}}static getGeometry(){if(arguments.length===1){const t=arguments[0];return t.getFactory().buildGeometry(oi.getLines(t))}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return t.getFactory().buildGeometry(oi.getLines(t,e))}}filter(t){if(this._isForcedToLineString&&t instanceof ei){const e=t.getFactory().createLineString(t.getCoordinateSequence());return this._lines.add(e),null}t instanceof he&&this._lines.add(t)}setForceToLineString(t){this._isForcedToLineString=t}get interfaces_(){return[pr]}}class Ac{constructor(){Ac.constructor_.apply(this,arguments)}static constructor_(){this._items=new it}getItems(){return this._items}visitItem(t){this._items.add(t)}get interfaces_(){return[bc]}}class Mr{constructor(){Mr.constructor_.apply(this,arguments)}static constructor_(){this._geom=null,this._index=null;const t=arguments[0];if(!(Z(t,nl)||t instanceof ei))throw new dt("Argument must be Polygonal or LinearRing");this._geom=t}locate(t){this._index===null&&(this._index=new hl(this._geom),this._geom=null);const e=new Ys(t),i=new ll(e);return this._index.query(t.y,t.y,i),e.getLocation()}get interfaces_(){return[Hf]}}class ll{constructor(){ll.constructor_.apply(this,arguments)}static constructor_(){this._counter=null;const t=arguments[0];this._counter=t}visitItem(t){const e=t;this._counter.countSegment(e.getCoordinate(0),e.getCoordinate(1))}get interfaces_(){return[bc]}}class hl{constructor(){hl.constructor_.apply(this,arguments)}static constructor_(){this._isEmpty=!1,this._index=new Nc;const t=arguments[0];t.isEmpty()?this._isEmpty=!0:this.init(t)}init(t){const e=oi.getLines(t);for(let i=e.iterator();i.hasNext();){const r=i.next().getCoordinates();this.addLine(r)}}addLine(t){for(let e=1;e<t.length;e++){const i=new Ve(t[e-1],t[e]),s=Math.min(i.p0.y,i.p1.y),r=Math.max(i.p0.y,i.p1.y);this._index.insert(s,r,i)}}query(){if(arguments.length===2){const t=arguments[0],e=arguments[1];if(this._isEmpty)return new it;const i=new Ac;return this._index.query(t,e,i),i.getItems()}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(this._isEmpty)return null;this._index.query(t,e,i)}}}Mr.SegmentVisitor=ll;Mr.IntervalIndexedGeometry=hl;class Oc{constructor(){Oc.constructor_.apply(this,arguments)}static constructor_(){this.coord=null,this.segmentIndex=null,this.dist=null;const t=arguments[0],e=arguments[1],i=arguments[2];this.coord=new R(t),this.segmentIndex=e,this.dist=i}getSegmentIndex(){return this.segmentIndex}getCoordinate(){return this.coord}print(t){t.print(this.coord),t.print(" seg # = "+this.segmentIndex),t.println(" dist = "+this.dist)}compareTo(t){const e=t;return this.compare(e.segmentIndex,e.dist)}isEndPoint(t){return this.segmentIndex===0&&this.dist===0||this.segmentIndex===t}toString(){return this.coord+" seg # = "+this.segmentIndex+" dist = "+this.dist}getDistance(){return this.dist}compare(t,e){return this.segmentIndex<t?-1:this.segmentIndex>t?1:this.dist<e?-1:this.dist>e?1:0}get interfaces_(){return[zi]}}class Pc{constructor(){Pc.constructor_.apply(this,arguments)}static constructor_(){this._nodeMap=new ar,this.edge=null;const t=arguments[0];this.edge=t}print(t){t.println("Intersections:");for(let e=this.iterator();e.hasNext();)e.next().print(t)}addEndpoints(){const t=this.edge.pts.length-1;this.add(this.edge.pts[0],0,0),this.add(this.edge.pts[t],t,0)}createSplitEdge(t,e){let i=e.segmentIndex-t.segmentIndex+2;const s=this.edge.pts[e.segmentIndex],r=e.dist>0||!e.coord.equals2D(s);r||i--;const o=new Array(i).fill(null);let a=0;o[a++]=new R(t.coord);for(let l=t.segmentIndex+1;l<=e.segmentIndex;l++)o[a++]=this.edge.pts[l];return r&&(o[a]=e.coord),new vi(o,new Ht(this.edge._label))}add(t,e,i){const s=new Oc(t,e,i),r=this._nodeMap.get(s);return r!==null?r:(this._nodeMap.put(s,s),s)}isIntersection(t){for(let e=this.iterator();e.hasNext();)if(e.next().coord.equals(t))return!0;return!1}iterator(){return this._nodeMap.values().iterator()}addSplitEdges(t){this.addEndpoints();const e=this.iterator();let i=e.next();for(;e.hasNext();){const s=e.next(),r=this.createSplitEdge(i,s);t.add(r),i=s}}}class xt{constructor(){xt.constructor_.apply(this,arguments)}static constructor_(){if(this._matrix=null,arguments.length===0)this._matrix=Array(3).fill().map(()=>Array(3)),this.setAll(b.FALSE);else if(arguments.length===1){if(typeof arguments[0]=="string"){const t=arguments[0];xt.constructor_.call(this),this.set(t)}else if(arguments[0]instanceof xt){const t=arguments[0];xt.constructor_.call(this),this._matrix[y.INTERIOR][y.INTERIOR]=t._matrix[y.INTERIOR][y.INTERIOR],this._matrix[y.INTERIOR][y.BOUNDARY]=t._matrix[y.INTERIOR][y.BOUNDARY],this._matrix[y.INTERIOR][y.EXTERIOR]=t._matrix[y.INTERIOR][y.EXTERIOR],this._matrix[y.BOUNDARY][y.INTERIOR]=t._matrix[y.BOUNDARY][y.INTERIOR],this._matrix[y.BOUNDARY][y.BOUNDARY]=t._matrix[y.BOUNDARY][y.BOUNDARY],this._matrix[y.BOUNDARY][y.EXTERIOR]=t._matrix[y.BOUNDARY][y.EXTERIOR],this._matrix[y.EXTERIOR][y.INTERIOR]=t._matrix[y.EXTERIOR][y.INTERIOR],this._matrix[y.EXTERIOR][y.BOUNDARY]=t._matrix[y.EXTERIOR][y.BOUNDARY],this._matrix[y.EXTERIOR][y.EXTERIOR]=t._matrix[y.EXTERIOR][y.EXTERIOR]}}}static isTrue(t){return t>=0||t===b.TRUE}static matches(){if(Number.isInteger(arguments[0])&&typeof arguments[1]=="string"){const t=arguments[0],e=arguments[1];return e===b.SYM_DONTCARE||e===b.SYM_TRUE&&(t>=0||t===b.TRUE)||e===b.SYM_FALSE&&t===b.FALSE||e===b.SYM_P&&t===b.P||e===b.SYM_L&&t===b.L||e===b.SYM_A&&t===b.A}else if(typeof arguments[0]=="string"&&typeof arguments[1]=="string"){const t=arguments[0],e=arguments[1];return new xt(t).matches(e)}}isIntersects(){return!this.isDisjoint()}set(){if(arguments.length===1){const t=arguments[0];for(let e=0;e<t.length;e++){const i=Math.trunc(e/3),s=e%3;this._matrix[i][s]=b.toDimensionValue(t.charAt(e))}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._matrix[t][e]=i}}isContains(){return xt.isTrue(this._matrix[y.INTERIOR][y.INTERIOR])&&this._matrix[y.EXTERIOR][y.INTERIOR]===b.FALSE&&this._matrix[y.EXTERIOR][y.BOUNDARY]===b.FALSE}isWithin(){return xt.isTrue(this._matrix[y.INTERIOR][y.INTERIOR])&&this._matrix[y.INTERIOR][y.EXTERIOR]===b.FALSE&&this._matrix[y.BOUNDARY][y.EXTERIOR]===b.FALSE}isTouches(t,e){return t>e?this.isTouches(e,t):t===b.A&&e===b.A||t===b.L&&e===b.L||t===b.L&&e===b.A||t===b.P&&e===b.A||t===b.P&&e===b.L?this._matrix[y.INTERIOR][y.INTERIOR]===b.FALSE&&(xt.isTrue(this._matrix[y.INTERIOR][y.BOUNDARY])||xt.isTrue(this._matrix[y.BOUNDARY][y.INTERIOR])||xt.isTrue(this._matrix[y.BOUNDARY][y.BOUNDARY])):!1}isOverlaps(t,e){return t===b.P&&e===b.P||t===b.A&&e===b.A?xt.isTrue(this._matrix[y.INTERIOR][y.INTERIOR])&&xt.isTrue(this._matrix[y.INTERIOR][y.EXTERIOR])&&xt.isTrue(this._matrix[y.EXTERIOR][y.INTERIOR]):t===b.L&&e===b.L?this._matrix[y.INTERIOR][y.INTERIOR]===1&&xt.isTrue(this._matrix[y.INTERIOR][y.EXTERIOR])&&xt.isTrue(this._matrix[y.EXTERIOR][y.INTERIOR]):!1}isEquals(t,e){return t!==e?!1:xt.isTrue(this._matrix[y.INTERIOR][y.INTERIOR])&&this._matrix[y.INTERIOR][y.EXTERIOR]===b.FALSE&&this._matrix[y.BOUNDARY][y.EXTERIOR]===b.FALSE&&this._matrix[y.EXTERIOR][y.INTERIOR]===b.FALSE&&this._matrix[y.EXTERIOR][y.BOUNDARY]===b.FALSE}matches(t){if(t.length!==9)throw new dt("Should be length 9: "+t);for(let e=0;e<3;e++)for(let i=0;i<3;i++)if(!xt.matches(this._matrix[e][i],t.charAt(3*e+i)))return!1;return!0}add(t){for(let e=0;e<3;e++)for(let i=0;i<3;i++)this.setAtLeast(e,i,t.get(e,i))}isDisjoint(){return this._matrix[y.INTERIOR][y.INTERIOR]===b.FALSE&&this._matrix[y.INTERIOR][y.BOUNDARY]===b.FALSE&&this._matrix[y.BOUNDARY][y.INTERIOR]===b.FALSE&&this._matrix[y.BOUNDARY][y.BOUNDARY]===b.FALSE}isCrosses(t,e){return t===b.P&&e===b.L||t===b.P&&e===b.A||t===b.L&&e===b.A?xt.isTrue(this._matrix[y.INTERIOR][y.INTERIOR])&&xt.isTrue(this._matrix[y.INTERIOR][y.EXTERIOR]):t===b.L&&e===b.P||t===b.A&&e===b.P||t===b.A&&e===b.L?xt.isTrue(this._matrix[y.INTERIOR][y.INTERIOR])&&xt.isTrue(this._matrix[y.EXTERIOR][y.INTERIOR]):t===b.L&&e===b.L?this._matrix[y.INTERIOR][y.INTERIOR]===0:!1}isCovers(){return(xt.isTrue(this._matrix[y.INTERIOR][y.INTERIOR])||xt.isTrue(this._matrix[y.INTERIOR][y.BOUNDARY])||xt.isTrue(this._matrix[y.BOUNDARY][y.INTERIOR])||xt.isTrue(this._matrix[y.BOUNDARY][y.BOUNDARY]))&&this._matrix[y.EXTERIOR][y.INTERIOR]===b.FALSE&&this._matrix[y.EXTERIOR][y.BOUNDARY]===b.FALSE}isCoveredBy(){return(xt.isTrue(this._matrix[y.INTERIOR][y.INTERIOR])||xt.isTrue(this._matrix[y.INTERIOR][y.BOUNDARY])||xt.isTrue(this._matrix[y.BOUNDARY][y.INTERIOR])||xt.isTrue(this._matrix[y.BOUNDARY][y.BOUNDARY]))&&this._matrix[y.INTERIOR][y.EXTERIOR]===b.FALSE&&this._matrix[y.BOUNDARY][y.EXTERIOR]===b.FALSE}setAtLeast(){if(arguments.length===1){const t=arguments[0];for(let e=0;e<t.length;e++){const i=Math.trunc(e/3),s=e%3;this.setAtLeast(i,s,b.toDimensionValue(t.charAt(e)))}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._matrix[t][e]<i&&(this._matrix[t][e]=i)}}setAtLeastIfValid(t,e,i){t>=0&&e>=0&&this.setAtLeast(t,e,i)}toString(){const t=new il("123456789");for(let e=0;e<3;e++)for(let i=0;i<3;i++)t.setCharAt(3*e+i,b.toDimensionSymbol(this._matrix[e][i]));return t.toString()}setAll(t){for(let e=0;e<3;e++)for(let i=0;i<3;i++)this._matrix[e][i]=t}get(t,e){return this._matrix[t][e]}transpose(){let t=this._matrix[1][0];return this._matrix[1][0]=this._matrix[0][1],this._matrix[0][1]=t,t=this._matrix[2][0],this._matrix[2][0]=this._matrix[0][2],this._matrix[0][2]=t,t=this._matrix[2][1],this._matrix[2][1]=this._matrix[1][2],this._matrix[1][2]=t,this}get interfaces_(){return[Lo]}}class ai{constructor(){ai.constructor_.apply(this,arguments)}static constructor_(){this._depth=Array(2).fill().map(()=>Array(3));for(let t=0;t<2;t++)for(let e=0;e<3;e++)this._depth[t][e]=ai.NULL_VALUE}static depthAtLocation(t){return t===y.EXTERIOR?0:t===y.INTERIOR?1:ai.NULL_VALUE}getDepth(t,e){return this._depth[t][e]}setDepth(t,e,i){this._depth[t][e]=i}isNull(){if(arguments.length===0){for(let t=0;t<2;t++)for(let e=0;e<3;e++)if(this._depth[t][e]!==ai.NULL_VALUE)return!1;return!0}else if(arguments.length===1){const t=arguments[0];return this._depth[t][1]===ai.NULL_VALUE}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return this._depth[t][e]===ai.NULL_VALUE}}normalize(){for(let t=0;t<2;t++)if(!this.isNull(t)){let e=this._depth[t][1];this._depth[t][2]<e&&(e=this._depth[t][2]),e<0&&(e=0);for(let i=1;i<3;i++){let s=0;this._depth[t][i]>e&&(s=1),this._depth[t][i]=s}}}getDelta(t){return this._depth[t][D.RIGHT]-this._depth[t][D.LEFT]}getLocation(t,e){return this._depth[t][e]<=0?y.EXTERIOR:y.INTERIOR}toString(){return"A: "+this._depth[0][1]+","+this._depth[0][2]+" B: "+this._depth[1][1]+","+this._depth[1][2]}add(){if(arguments.length===1){const t=arguments[0];for(let e=0;e<2;e++)for(let i=1;i<3;i++){const s=t.getLocation(e,i);(s===y.EXTERIOR||s===y.INTERIOR)&&(this.isNull(e,i)?this._depth[e][i]=ai.depthAtLocation(s):this._depth[e][i]+=ai.depthAtLocation(s))}}else if(arguments.length===3){const t=arguments[0],e=arguments[1];arguments[2]===y.INTERIOR&&this._depth[t][e]++}}}ai.NULL_VALUE=-1;class Ea{constructor(){Ea.constructor_.apply(this,arguments)}static constructor_(){if(this._data=null,this._size=0,arguments.length===0)Ea.constructor_.call(this,10);else if(arguments.length===1){const t=arguments[0];this._data=new Array(t).fill(null)}}size(){return this._size}addAll(t){if(t===null||t.length===0)return null;this.ensureCapacity(this._size+t.length),ti.arraycopy(t,0,this._data,this._size,t.length),this._size+=t.length}ensureCapacity(t){if(t<=this._data.length)return null;const e=Math.max(t,this._data.length*2);this._data=Qn.copyOf(this._data,e)}toArray(){const t=new Array(this._size).fill(null);return ti.arraycopy(this._data,0,t,0,this._size),t}add(t){this.ensureCapacity(this._size+1),this._data[this._size]=t,++this._size}}class Kc{static toIntArray(t){const e=new Array(t.size()).fill(null);for(let i=0;i<e.length;i++)e[i]=t.get(i).intValue();return e}findChainEnd(t,e){const i=Nt.quadrant(t[e],t[e+1]);let s=e+1;for(;s<t.length&&Nt.quadrant(t[s-1],t[s])===i;)s++;return s-1}OLDgetChainStartIndices(t){let e=0;const i=new it;i.add(e);do{const r=this.findChainEnd(t,e);i.add(r),e=r}while(e<t.length-1);return Kc.toIntArray(i)}getChainStartIndices(t){let e=0;const i=new Ea(Math.trunc(t.length/2));i.add(e);do{const s=this.findChainEnd(t,e);i.add(s),e=s}while(e<t.length-1);return i.toArray()}}class Dc{constructor(){Dc.constructor_.apply(this,arguments)}static constructor_(){this.e=null,this.pts=null,this.startIndex=null;const t=arguments[0];this.e=t,this.pts=t.getCoordinates();const e=new Kc;this.startIndex=e.getChainStartIndices(this.pts)}getCoordinates(){return this.pts}getMaxX(t){const e=this.pts[this.startIndex[t]].x,i=this.pts[this.startIndex[t+1]].x;return e>i?e:i}getMinX(t){const e=this.pts[this.startIndex[t]].x,i=this.pts[this.startIndex[t+1]].x;return e<i?e:i}computeIntersectsForChain(){if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];this.computeIntersectsForChain(this.startIndex[t],this.startIndex[t+1],e,e.startIndex[i],e.startIndex[i+1],s)}else if(arguments.length===6){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3],r=arguments[4],o=arguments[5];if(e-t===1&&r-s===1)return o.addIntersections(this.e,t,i.e,s),null;if(!this.overlaps(t,e,i,s,r))return null;const a=Math.trunc((t+e)/2),l=Math.trunc((s+r)/2);t<a&&(s<l&&this.computeIntersectsForChain(t,a,i,s,l,o),l<r&&this.computeIntersectsForChain(t,a,i,l,r,o)),a<e&&(s<l&&this.computeIntersectsForChain(a,e,i,s,l,o),l<r&&this.computeIntersectsForChain(a,e,i,l,r,o))}}overlaps(t,e,i,s,r){return ct.intersects(this.pts[t],this.pts[e],i.pts[s],i.pts[r])}getStartIndexes(){return this.startIndex}computeIntersects(t,e){for(let i=0;i<this.startIndex.length-1;i++)for(let s=0;s<t.startIndex.length-1;s++)this.computeIntersectsForChain(i,t,s,e)}}class vi extends ol{constructor(){super(),vi.constructor_.apply(this,arguments)}static constructor_(){if(this.pts=null,this._env=null,this.eiList=new Pc(this),this._name=null,this._mce=null,this._isIsolated=!0,this._depth=new ai,this._depthDelta=0,arguments.length===1){const t=arguments[0];vi.constructor_.call(this,t,null)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.pts=t,this._label=e}}static updateIM(){if(arguments.length===2&&arguments[1]instanceof xt&&arguments[0]instanceof Ht){const t=arguments[0],e=arguments[1];e.setAtLeastIfValid(t.getLocation(0,D.ON),t.getLocation(1,D.ON),1),t.isArea()&&(e.setAtLeastIfValid(t.getLocation(0,D.LEFT),t.getLocation(1,D.LEFT),2),e.setAtLeastIfValid(t.getLocation(0,D.RIGHT),t.getLocation(1,D.RIGHT),2))}else return super.updateIM.apply(this,arguments)}getDepth(){return this._depth}getCollapsedEdge(){const t=new Array(2).fill(null);return t[0]=this.pts[0],t[1]=this.pts[1],new vi(t,Ht.toLineLabel(this._label))}setIsolated(t){this._isIsolated=t}setName(t){this._name=t}equals(t){if(!(t instanceof vi))return!1;const e=t;if(this.pts.length!==e.pts.length)return!1;let i=!0,s=!0,r=this.pts.length;for(let o=0;o<this.pts.length;o++)if(this.pts[o].equals2D(e.pts[o])||(i=!1),this.pts[o].equals2D(e.pts[--r])||(s=!1),!i&&!s)return!1;return!0}getCoordinate(){if(arguments.length===0)return this.pts.length>0?this.pts[0]:null;if(arguments.length===1){const t=arguments[0];return this.pts[t]}}isClosed(){return this.pts[0].equals(this.pts[this.pts.length-1])}getMaximumSegmentIndex(){return this.pts.length-1}setDepthDelta(t){this._depthDelta=t}getEdgeIntersectionList(){return this.eiList}addIntersections(t,e,i){for(let s=0;s<t.getIntersectionNum();s++)this.addIntersection(t,e,i,s)}isIsolated(){return this._isIsolated}getCoordinates(){return this.pts}print(t){t.print("edge "+this._name+": "),t.print("LINESTRING (");for(let e=0;e<this.pts.length;e++)e>0&&t.print(","),t.print(this.pts[e].x+" "+this.pts[e].y);t.print(")  "+this._label+" "+this._depthDelta)}computeIM(t){vi.updateIM(this._label,t)}isCollapsed(){return!this._label.isArea()||this.pts.length!==3?!1:!!this.pts[0].equals(this.pts[2])}getDepthDelta(){return this._depthDelta}getNumPoints(){return this.pts.length}printReverse(t){t.print("edge "+this._name+": ");for(let e=this.pts.length-1;e>=0;e--)t.print(this.pts[e]+" ");t.println("")}getMonotoneChainEdge(){return this._mce===null&&(this._mce=new Dc(this)),this._mce}getEnvelope(){if(this._env===null){this._env=new ct;for(let t=0;t<this.pts.length;t++)this._env.expandToInclude(this.pts[t])}return this._env}addIntersection(t,e,i,s){const r=new R(t.getIntersection(s));let o=e,a=t.getEdgeDistance(i,s);const l=o+1;if(l<this.pts.length){const h=this.pts[l];r.equals2D(h)&&(o=l,a=0)}this.eiList.add(r,o,a)}toString(){const t=new il;t.append("edge "+this._name+": "),t.append("LINESTRING (");for(let e=0;e<this.pts.length;e++)e>0&&t.append(","),t.append(this.pts[e].x+" "+this.pts[e].y);return t.append(")  "+this._label+" "+this._depthDelta),t.toString()}isPointwiseEqual(t){if(this.pts.length!==t.pts.length)return!1;for(let e=0;e<this.pts.length;e++)if(!this.pts[e].equals2D(t.pts[e]))return!1;return!0}}class Ji extends al{constructor(){super(),Ji.constructor_.apply(this,arguments)}static constructor_(){if(this._parentGeom=null,this._lineEdgeMap=new Pf,this._boundaryNodeRule=null,this._useBoundaryDeterminationRule=!0,this._argIndex=null,this._boundaryNodes=null,this._hasTooFewPoints=!1,this._invalidPoint=null,this._areaPtLocator=null,this._ptLocator=new Ic,arguments.length===2){const t=arguments[0],e=arguments[1];Ji.constructor_.call(this,t,e,ce.OGC_SFS_BOUNDARY_RULE)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._argIndex=t,this._parentGeom=e,this._boundaryNodeRule=i,e!==null&&this.add(e)}}static determineBoundary(t,e){return t.isInBoundary(e)?y.BOUNDARY:y.INTERIOR}insertBoundaryPoint(t,e){const s=this._nodes.addNode(e).getLabel();let r=1,o=y.NONE;o=s.getLocation(t,D.ON),o===y.BOUNDARY&&r++;const a=Ji.determineBoundary(this._boundaryNodeRule,r);s.setLocation(t,a)}computeSelfNodes(){if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.computeSelfNodes(t,e,!1)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2],s=new as(t,!0,!1);s.setIsDoneIfProperInt(i);const r=this.createEdgeSetIntersector(),o=this._parentGeom instanceof ei||this._parentGeom instanceof Ne||this._parentGeom instanceof ii,a=e||!o;return r.computeIntersections(this._edges,s,a),this.addSelfIntersectionNodes(this._argIndex),s}}addPolygon(t){this.addPolygonRing(t.getExteriorRing(),y.EXTERIOR,y.INTERIOR);for(let e=0;e<t.getNumInteriorRing();e++){const i=t.getInteriorRingN(e);this.addPolygonRing(i,y.INTERIOR,y.EXTERIOR)}}addEdge(t){this.insertEdge(t);const e=t.getCoordinates();this.insertPoint(this._argIndex,e[0],y.BOUNDARY),this.insertPoint(this._argIndex,e[e.length-1],y.BOUNDARY)}addLineString(t){const e=Ut.removeRepeatedPoints(t.getCoordinates());if(e.length<2)return this._hasTooFewPoints=!0,this._invalidPoint=e[0],null;const i=new vi(e,new Ht(this._argIndex,y.INTERIOR));this._lineEdgeMap.put(t,i),this.insertEdge(i),rt.isTrue(e.length>=2,"found LineString with single point"),this.insertBoundaryPoint(this._argIndex,e[0]),this.insertBoundaryPoint(this._argIndex,e[e.length-1])}getInvalidPoint(){return this._invalidPoint}getBoundaryPoints(){const t=this.getBoundaryNodes(),e=new Array(t.size()).fill(null);let i=0;for(let s=t.iterator();s.hasNext();){const r=s.next();e[i++]=r.getCoordinate().copy()}return e}addSelfIntersectionNodes(t){for(let e=this._edges.iterator();e.hasNext();){const i=e.next(),s=i.getLabel().getLocation(t);for(let r=i.eiList.iterator();r.hasNext();){const o=r.next();this.addSelfIntersectionNode(t,o.coord,s)}}}add(){if(arguments.length===1&&arguments[0]instanceof G){const t=arguments[0];if(t.isEmpty())return null;if(t instanceof ii&&(this._useBoundaryDeterminationRule=!1),t instanceof Ne)this.addPolygon(t);else if(t instanceof he)this.addLineString(t);else if(t instanceof ki)this.addPoint(t);else if(t instanceof On)this.addCollection(t);else if(t instanceof rs)this.addCollection(t);else if(t instanceof ii)this.addCollection(t);else if(t instanceof Vt)this.addCollection(t);else throw new wi(t.getGeometryType())}else return super.add.apply(this,arguments)}addCollection(t){for(let e=0;e<t.getNumGeometries();e++){const i=t.getGeometryN(e);this.add(i)}}locate(t){return Z(this._parentGeom,nl)&&this._parentGeom.getNumGeometries()>50?(this._areaPtLocator===null&&(this._areaPtLocator=new Mr(this._parentGeom)),this._areaPtLocator.locate(t)):this._ptLocator.locate(t,this._parentGeom)}findEdge(){if(arguments.length===1&&arguments[0]instanceof he){const t=arguments[0];return this._lineEdgeMap.get(t)}else return super.findEdge.apply(this,arguments)}computeSplitEdges(t){for(let e=this._edges.iterator();e.hasNext();)e.next().eiList.addSplitEdges(t)}computeEdgeIntersections(t,e,i){const s=new as(e,i,!0);return s.setBoundaryNodes(this.getBoundaryNodes(),t.getBoundaryNodes()),this.createEdgeSetIntersector().computeIntersections(this._edges,t._edges,s),s}getGeometry(){return this._parentGeom}getBoundaryNodeRule(){return this._boundaryNodeRule}hasTooFewPoints(){return this._hasTooFewPoints}addPoint(){if(arguments[0]instanceof ki){const e=arguments[0].getCoordinate();this.insertPoint(this._argIndex,e,y.INTERIOR)}else if(arguments[0]instanceof R){const t=arguments[0];this.insertPoint(this._argIndex,t,y.INTERIOR)}}getBoundaryNodes(){return this._boundaryNodes===null&&(this._boundaryNodes=this._nodes.getBoundaryNodes(this._argIndex)),this._boundaryNodes}addSelfIntersectionNode(t,e,i){if(this.isBoundaryNode(t,e))return null;i===y.BOUNDARY&&this._useBoundaryDeterminationRule?this.insertBoundaryPoint(t,e):this.insertPoint(t,e,i)}addPolygonRing(t,e,i){if(t.isEmpty())return null;const s=Ut.removeRepeatedPoints(t.getCoordinates());if(s.length<4)return this._hasTooFewPoints=!0,this._invalidPoint=s[0],null;let r=e,o=i;vt.isCCW(s)&&(r=i,o=e);const a=new vi(s,new Ht(this._argIndex,y.BOUNDARY,r,o));this._lineEdgeMap.put(t,a),this.insertEdge(a),this.insertPoint(this._argIndex,s[0],y.BOUNDARY)}insertPoint(t,e,i){const s=this._nodes.addNode(e),r=s.getLabel();r===null?s._label=new Ht(t,i):r.setLocation(t,i)}createEdgeSetIntersector(){return new vc}}class va extends Ki{constructor(){super(),va.constructor_.apply(this,arguments)}static constructor_(){if(this._edgeEnds=new it,arguments.length===1){const t=arguments[0];va.constructor_.call(this,null,t)}else if(arguments.length===2){const t=arguments[1];Ki.constructor_.call(this,t.getEdge(),t.getCoordinate(),t.getDirectedCoordinate(),new Ht(t.getLabel())),this.insert(t)}}insert(t){this._edgeEnds.add(t)}print(t){t.println("EdgeEndBundle--> Label: "+this._label);for(let e=this.iterator();e.hasNext();)e.next().print(t),t.println()}iterator(){return this._edgeEnds.iterator()}getEdgeEnds(){return this._edgeEnds}computeLabelOn(t,e){let i=0,s=!1;for(let o=this.iterator();o.hasNext();){const l=o.next().getLabel().getLocation(t);l===y.BOUNDARY&&i++,l===y.INTERIOR&&(s=!0)}let r=y.NONE;s&&(r=y.INTERIOR),i>0&&(r=Ji.determineBoundary(e,i)),this._label.setLocation(t,r)}computeLabelSide(t,e){for(let i=this.iterator();i.hasNext();){const s=i.next();if(s.getLabel().isArea()){const r=s.getLabel().getLocation(t,e);if(r===y.INTERIOR)return this._label.setLocation(t,e,y.INTERIOR),null;r===y.EXTERIOR&&this._label.setLocation(t,e,y.EXTERIOR)}}}getLabel(){return this._label}computeLabelSides(t){this.computeLabelSide(t,D.LEFT),this.computeLabelSide(t,D.RIGHT)}updateIM(t){vi.updateIM(this._label,t)}computeLabel(t){let e=!1;for(let i=this.iterator();i.hasNext();)i.next().getLabel().isArea()&&(e=!0);e?this._label=new Ht(y.NONE,y.NONE,y.NONE):this._label=new Ht(y.NONE);for(let i=0;i<2;i++)this.computeLabelOn(i,t),e&&this.computeLabelSides(i)}}class JC extends rl{constructor(){super()}updateIM(t){for(let e=this.iterator();e.hasNext();)e.next().updateIM(t)}insert(t){let e=this._edgeMap.get(t);e===null?(e=new va(t),this.insertEdgeEnd(t,e)):e.insert(t)}}class Fc extends lr{constructor(){super(),Fc.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];lr.constructor_.call(this,t,e)}computeIM(t){t.setAtLeastIfValid(this._label.getLocation(0),this._label.getLocation(1),0)}updateIMFromEdges(t){this._edges.updateIM(t)}}class QC extends Rc{constructor(){super()}createNode(t){return new Fc(t,new JC)}}class kc{constructor(){kc.constructor_.apply(this,arguments)}static constructor_(){this._nodes=new ao(new QC)}insertEdgeEnds(t){for(let e=t.iterator();e.hasNext();){const i=e.next();this._nodes.add(i)}}getNodeIterator(){return this._nodes.iterator()}copyNodesAndLabels(t,e){for(let i=t.getNodeIterator();i.hasNext();){const s=i.next();this._nodes.addNode(s.getCoordinate()).setLabel(e,s.getLabel().getLocation(e))}}build(t){this.computeIntersectionNodes(t,0),this.copyNodesAndLabels(t,0);const i=new qC().computeEdgeEnds(t.getEdgeIterator());this.insertEdgeEnds(i)}computeIntersectionNodes(t,e){for(let i=t.getEdgeIterator();i.hasNext();){const s=i.next(),r=s.getLabel().getLocation(e);for(let o=s.getEdgeIntersectionList().iterator();o.hasNext();){const a=o.next(),l=this._nodes.addNode(a.coord);r===y.BOUNDARY?l.setLabelBoundary(e):l.getLabel().isNull(e)&&l.setLabel(e,y.INTERIOR)}}}}class Gc{constructor(){Gc.constructor_.apply(this,arguments)}static constructor_(){this._li=new Pn,this._geomGraph=null,this._nodeGraph=new kc,this._invalidPoint=null;const t=arguments[0];this._geomGraph=t}isNodeEdgeAreaLabelsConsistent(){for(let t=this._nodeGraph.getNodeIterator();t.hasNext();){const e=t.next();if(!e.getEdges().isAreaLabelsConsistent(this._geomGraph))return this._invalidPoint=e.getCoordinate().copy(),!1}return!0}hasDuplicateRings(){for(let t=this._nodeGraph.getNodeIterator();t.hasNext();){const e=t.next();for(let i=e.getEdges().iterator();i.hasNext();){const s=i.next();if(s.getEdgeEnds().size()>1)return this._invalidPoint=s.getEdge().getCoordinate(0),!0}}return!1}isNodeConsistentArea(){const t=this._geomGraph.computeSelfNodes(this._li,!0,!0);return t.hasProperIntersection()?(this._invalidPoint=t.getProperIntersectionPoint(),!1):(this._nodeGraph.build(this._geomGraph),this.isNodeEdgeAreaLabelsConsistent())}getInvalidPoint(){return this._invalidPoint}}class jf{getBounds(){}}class li{constructor(){li.constructor_.apply(this,arguments)}static constructor_(){this._bounds=null,this._item=null;const t=arguments[0],e=arguments[1];this._bounds=t,this._item=e}getItem(){return this._item}getBounds(){return this._bounds}get interfaces_(){return[jf,Pe]}}class Fs{constructor(){Fs.constructor_.apply(this,arguments)}static constructor_(){this._size=null,this._items=null,this._size=0,this._items=new it,this._items.add(null)}poll(){if(this.isEmpty())return null;const t=this._items.get(1);return this._items.set(1,this._items.get(this._size)),this._size-=1,this.reorder(1),t}size(){return this._size}reorder(t){let e=null;const i=this._items.get(t);for(;t*2<=this._size&&(e=t*2,e!==this._size&&this._items.get(e+1).compareTo(this._items.get(e))<0&&e++,this._items.get(e).compareTo(i)<0);t=e)this._items.set(t,this._items.get(e));this._items.set(t,i)}clear(){this._size=0,this._items.clear()}peek(){return this.isEmpty()?null:this._items.get(1)}isEmpty(){return this._size===0}add(t){this._items.add(null),this._size+=1;let e=this._size;for(this._items.set(0,t);t.compareTo(this._items.get(Math.trunc(e/2)))<0;e/=2)this._items.set(e,this._items.get(Math.trunc(e/2)));this._items.set(e,t)}}class t2{query(){}insert(t,e){}remove(t,e){}}class Re{constructor(){Re.constructor_.apply(this,arguments)}static constructor_(){if(this._childBoundables=new it,this._bounds=null,this._level=null,arguments.length!==0){if(arguments.length===1){const t=arguments[0];this._level=t}}}getLevel(){return this._level}addChildBoundable(t){rt.isTrue(this._bounds===null),this._childBoundables.add(t)}isEmpty(){return this._childBoundables.isEmpty()}getBounds(){return this._bounds===null&&(this._bounds=this.computeBounds()),this._bounds}size(){return this._childBoundables.size()}getChildBoundables(){return this._childBoundables}get interfaces_(){return[jf,Pe]}}class Dt{static distance(t,e,i,s){const r=i-t,o=s-e;return Math.sqrt(r*r+o*o)}static maximumDistance(t,e){const i=Math.min(t.getMinX(),e.getMinX()),s=Math.min(t.getMinY(),e.getMinY()),r=Math.max(t.getMaxX(),e.getMaxX()),o=Math.max(t.getMaxY(),e.getMaxY());return Dt.distance(i,s,r,o)}static minMaxDistance(t,e){const i=t.getMinX(),s=t.getMinY(),r=t.getMaxX(),o=t.getMaxY(),a=e.getMinX(),l=e.getMinY(),h=e.getMaxX(),c=e.getMaxY();let u=Dt.maxDistance(i,s,i,o,a,l,a,c);return u=Math.min(u,Dt.maxDistance(i,s,i,o,a,l,h,l)),u=Math.min(u,Dt.maxDistance(i,s,i,o,h,c,a,c)),u=Math.min(u,Dt.maxDistance(i,s,i,o,h,c,h,l)),u=Math.min(u,Dt.maxDistance(i,s,r,s,a,l,a,c)),u=Math.min(u,Dt.maxDistance(i,s,r,s,a,l,h,l)),u=Math.min(u,Dt.maxDistance(i,s,r,s,h,c,a,c)),u=Math.min(u,Dt.maxDistance(i,s,r,s,h,c,h,l)),u=Math.min(u,Dt.maxDistance(r,o,i,o,a,l,a,c)),u=Math.min(u,Dt.maxDistance(r,o,i,o,a,l,h,l)),u=Math.min(u,Dt.maxDistance(r,o,i,o,h,c,a,c)),u=Math.min(u,Dt.maxDistance(r,o,i,o,h,c,h,l)),u=Math.min(u,Dt.maxDistance(r,o,r,s,a,l,a,c)),u=Math.min(u,Dt.maxDistance(r,o,r,s,a,l,h,l)),u=Math.min(u,Dt.maxDistance(r,o,r,s,h,c,a,c)),u=Math.min(u,Dt.maxDistance(r,o,r,s,h,c,h,l)),u}static maxDistance(t,e,i,s,r,o,a,l){let h=Dt.distance(t,e,r,o);return h=Math.max(h,Dt.distance(t,e,a,l)),h=Math.max(h,Dt.distance(i,s,r,o)),h=Math.max(h,Dt.distance(i,s,a,l)),h}}class ne{constructor(){ne.constructor_.apply(this,arguments)}static constructor_(){this._boundable1=null,this._boundable2=null,this._distance=null,this._itemDistance=null;const t=arguments[0],e=arguments[1],i=arguments[2];this._boundable1=t,this._boundable2=e,this._itemDistance=i,this._distance=this.distance()}static area(t){return t.getBounds().getArea()}static isComposite(t){return t instanceof Re}maximumDistance(){return Dt.maximumDistance(this._boundable1.getBounds(),this._boundable2.getBounds())}expandToQueue(t,e){const i=ne.isComposite(this._boundable1),s=ne.isComposite(this._boundable2);if(i&&s)return ne.area(this._boundable1)>ne.area(this._boundable2)?(this.expand(this._boundable1,this._boundable2,!1,t,e),null):(this.expand(this._boundable2,this._boundable1,!0,t,e),null);if(i)return this.expand(this._boundable1,this._boundable2,!1,t,e),null;if(s)return this.expand(this._boundable2,this._boundable1,!0,t,e),null;throw new dt("neither boundable is composite")}isLeaves(){return!(ne.isComposite(this._boundable1)||ne.isComposite(this._boundable2))}getBoundable(t){return t===0?this._boundable1:this._boundable2}getDistance(){return this._distance}distance(){return this.isLeaves()?this._itemDistance.distance(this._boundable1,this._boundable2):this._boundable1.getBounds().distance(this._boundable2.getBounds())}compareTo(t){const e=t;return this._distance<e._distance?-1:this._distance>e._distance?1:0}expand(t,e,i,s,r){const o=t.getChildBoundables();for(let a=o.iterator();a.hasNext();){const l=a.next();let h=null;i?h=new ne(e,l,this._itemDistance):h=new ne(l,e,this._itemDistance),h.getDistance()<r&&s.add(h)}}get interfaces_(){return[zi]}}class Di{constructor(){Di.constructor_.apply(this,arguments)}static constructor_(){if(this._root=null,this._built=!1,this._itemBoundables=new it,this._nodeCapacity=null,arguments.length===0)Di.constructor_.call(this,Di.DEFAULT_NODE_CAPACITY);else if(arguments.length===1){const t=arguments[0];rt.isTrue(t>1,"Node capacity must be greater than 1"),this._nodeCapacity=t}}static compareDoubles(t,e){return t>e?1:t<e?-1:0}queryInternal(){if(Z(arguments[2],bc)&&arguments[0]instanceof Object&&arguments[1]instanceof Re){const t=arguments[0],e=arguments[1],i=arguments[2],s=e.getChildBoundables();for(let r=0;r<s.size();r++){const o=s.get(r);this.getIntersectsOp().intersects(o.getBounds(),t)&&(o instanceof Re?this.queryInternal(t,o,i):o instanceof li?i.visitItem(o.getItem()):rt.shouldNeverReachHere())}}else if(Z(arguments[2],Hs)&&arguments[0]instanceof Object&&arguments[1]instanceof Re){const t=arguments[0],e=arguments[1],i=arguments[2],s=e.getChildBoundables();for(let r=0;r<s.size();r++){const o=s.get(r);this.getIntersectsOp().intersects(o.getBounds(),t)&&(o instanceof Re?this.queryInternal(t,o,i):o instanceof li?i.add(o.getItem()):rt.shouldNeverReachHere())}}}insert(t,e){rt.isTrue(!this._built,"Cannot insert items into an STR packed R-tree after it has been built."),this._itemBoundables.add(new li(t,e))}boundablesAtLevel(){if(arguments.length===1){const t=arguments[0],e=new it;return this.boundablesAtLevel(t,this._root,e),e}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(rt.isTrue(t>-2),e.getLevel()===t)return i.add(e),null;for(let s=e.getChildBoundables().iterator();s.hasNext();){const r=s.next();r instanceof Re?this.boundablesAtLevel(t,r,i):(rt.isTrue(r instanceof li),t===-1&&i.add(r))}return null}}getRoot(){return this.build(),this._root}remove(){if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.build(),this.getIntersectsOp().intersects(this._root.getBounds(),t)?this.remove(t,this._root,e):!1}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];let s=this.removeItem(e,i);if(s)return!0;let r=null;for(let o=e.getChildBoundables().iterator();o.hasNext();){const a=o.next();if(this.getIntersectsOp().intersects(a.getBounds(),t)&&a instanceof Re&&(s=this.remove(t,a,i),s)){r=a;break}}return r!==null&&r.getChildBoundables().isEmpty()&&e.getChildBoundables().remove(r),s}}createHigherLevels(t,e){rt.isTrue(!t.isEmpty());const i=this.createParentBoundables(t,e+1);return i.size()===1?i.get(0):this.createHigherLevels(i,e+1)}depth(){if(arguments.length===0)return this.isEmpty()?0:(this.build(),this.depth(this._root));if(arguments.length===1){const t=arguments[0];let e=0;for(let i=t.getChildBoundables().iterator();i.hasNext();){const s=i.next();if(s instanceof Re){const r=this.depth(s);r>e&&(e=r)}}return e+1}}createParentBoundables(t,e){rt.isTrue(!t.isEmpty());const i=new it;i.add(this.createNode(e));const s=new it(t);So.sort(s,this.getComparator());for(let r=s.iterator();r.hasNext();){const o=r.next();this.lastNode(i).getChildBoundables().size()===this.getNodeCapacity()&&i.add(this.createNode(e)),this.lastNode(i).addChildBoundable(o)}return i}isEmpty(){return this._built?this._root.isEmpty():this._itemBoundables.isEmpty()}getNodeCapacity(){return this._nodeCapacity}lastNode(t){return t.get(t.size()-1)}size(){if(arguments.length===0)return this.isEmpty()?0:(this.build(),this.size(this._root));if(arguments.length===1){const t=arguments[0];let e=0;for(let i=t.getChildBoundables().iterator();i.hasNext();){const s=i.next();s instanceof Re?e+=this.size(s):s instanceof li&&(e+=1)}return e}}removeItem(t,e){let i=null;for(let s=t.getChildBoundables().iterator();s.hasNext();){const r=s.next();r instanceof li&&r.getItem()===e&&(i=r)}return i!==null?(t.getChildBoundables().remove(i),!0):!1}itemsTree(){if(arguments.length===0){this.build();const t=this.itemsTree(this._root);return t===null?new it:t}else if(arguments.length===1){const t=arguments[0],e=new it;for(let i=t.getChildBoundables().iterator();i.hasNext();){const s=i.next();if(s instanceof Re){const r=this.itemsTree(s);r!==null&&e.add(r)}else s instanceof li?e.add(s.getItem()):rt.shouldNeverReachHere()}return e.size()<=0?null:e}}query(){if(arguments.length===1){const t=arguments[0];this.build();const e=new it;return this.isEmpty()||this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.queryInternal(t,this._root,e),e}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(this.build(),this.isEmpty())return null;this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.queryInternal(t,this._root,e)}}build(){if(this._built)return null;this._root=this._itemBoundables.isEmpty()?this.createNode(0):this.createHigherLevels(this._itemBoundables,-1),this._itemBoundables=null,this._built=!0}get interfaces_(){return[Pe]}}function e2(){}Di.IntersectsOp=e2;Di.DEFAULT_NODE_CAPACITY=10;class i2{distance(t,e){}}class Xt extends Di{constructor(){super(),Xt.constructor_.apply(this,arguments)}static constructor_(){if(arguments.length===0)Xt.constructor_.call(this,Xt.DEFAULT_NODE_CAPACITY);else if(arguments.length===1){const t=arguments[0];Di.constructor_.call(this,t)}}static getItems(t){const e=new Array(t.size()).fill(null);let i=0;for(;!t.isEmpty();){const s=t.poll();e[i]=s.getBoundable(0).getItem(),i++}return e}static avg(t,e){return(t+e)/2}static centreY(t){return Xt.avg(t.getMinY(),t.getMaxY())}static centreX(t){return Xt.avg(t.getMinX(),t.getMaxX())}size(){return arguments.length===0?super.size.call(this):super.size.apply(this,arguments)}insert(){if(arguments.length===2&&arguments[1]instanceof Object&&arguments[0]instanceof ct){const t=arguments[0],e=arguments[1];if(t.isNull())return null;super.insert.call(this,t,e)}else return super.insert.apply(this,arguments)}getIntersectsOp(){return Xt.intersectsOp}verticalSlices(t,e){const i=Math.trunc(Math.ceil(t.size()/e)),s=new Array(e).fill(null),r=t.iterator();for(let o=0;o<e;o++){s[o]=new it;let a=0;for(;r.hasNext()&&a<i;){const l=r.next();s[o].add(l),a++}}return s}query(){if(arguments.length===1){const t=arguments[0];return super.query.call(this,t)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];super.query.call(this,t,e)}}getComparator(){return Xt.yComparator}createParentBoundablesFromVerticalSlice(t,e){return super.createParentBoundables.call(this,t,e)}remove(){if(arguments.length===2&&arguments[1]instanceof Object&&arguments[0]instanceof ct){const t=arguments[0],e=arguments[1];return super.remove.call(this,t,e)}else return super.remove.apply(this,arguments)}depth(){return arguments.length===0?super.depth.call(this):super.depth.apply(this,arguments)}createParentBoundables(t,e){rt.isTrue(!t.isEmpty());const i=Math.trunc(Math.ceil(t.size()/this.getNodeCapacity())),s=new it(t);So.sort(s,Xt.xComparator);const r=this.verticalSlices(s,Math.trunc(Math.ceil(Math.sqrt(i))));return this.createParentBoundablesFromVerticalSlices(r,e)}nearestNeighbour(){if(arguments.length===1){if(Z(arguments[0],i2)){const t=arguments[0];if(this.isEmpty())return null;const e=new ne(this.getRoot(),this.getRoot(),t);return this.nearestNeighbour(e)}else if(arguments[0]instanceof ne){const t=arguments[0];let e=H.POSITIVE_INFINITY,i=null;const s=new Fs;for(s.add(t);!s.isEmpty()&&e>0;){const r=s.poll(),o=r.getDistance();if(o>=e)break;r.isLeaves()?(e=o,i=r):r.expandToQueue(s,e)}return i===null?null:[i.getBoundable(0).getItem(),i.getBoundable(1).getItem()]}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(this.isEmpty()||t.isEmpty())return null;const i=new ne(this.getRoot(),t.getRoot(),e);return this.nearestNeighbour(i)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2],s=new li(t,e),r=new ne(this.getRoot(),s,i);return this.nearestNeighbour(r)[0]}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3],r=new li(t,e),o=new ne(this.getRoot(),r,i);return this.nearestNeighbourK(o,s)}}isWithinDistance(){if(arguments.length===2){const t=arguments[0],e=arguments[1];let i=H.POSITIVE_INFINITY;const s=new Fs;for(s.add(t);!s.isEmpty();){const r=s.poll(),o=r.getDistance();if(o>e)return!1;if(r.maximumDistance()<=e)return!0;if(r.isLeaves()){if(i=o,i<=e)return!0}else r.expandToQueue(s,i)}return!1}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2],s=new ne(this.getRoot(),t.getRoot(),e);return this.isWithinDistance(s,i)}}createParentBoundablesFromVerticalSlices(t,e){rt.isTrue(t.length>0);const i=new it;for(let s=0;s<t.length;s++)i.addAll(this.createParentBoundablesFromVerticalSlice(t[s],e));return i}nearestNeighbourK(){if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.nearestNeighbourK(t,H.POSITIVE_INFINITY,e)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];let s=e;const r=new Fs;r.add(t);const o=new Fs;for(;!r.isEmpty()&&s>=0;){const a=r.poll(),l=a.getDistance();if(l>=s)break;a.isLeaves()?o.size()<i?o.add(a):(o.peek().getDistance()>l&&(o.poll(),o.add(a)),s=o.peek().getDistance()):a.expandToQueue(r,s)}return Xt.getItems(o)}}createNode(t){return new cl(t)}get interfaces_(){return[t2,Pe]}}class cl extends Re{constructor(){super(),cl.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0];Re.constructor_.call(this,t)}computeBounds(){let t=null;for(let e=this.getChildBoundables().iterator();e.hasNext();){const i=e.next();t===null?t=new ct(i.getBounds()):t.expandToInclude(i.getBounds())}return t}}Xt.STRtreeNode=cl;Xt.xComparator=new class{get interfaces_(){return[_r]}compare(n,t){return Di.compareDoubles(Xt.centreX(n.getBounds()),Xt.centreX(t.getBounds()))}};Xt.yComparator=new class{get interfaces_(){return[_r]}compare(n,t){return Di.compareDoubles(Xt.centreY(n.getBounds()),Xt.centreY(t.getBounds()))}};Xt.intersectsOp=new class{get interfaces_(){return[IntersectsOp]}intersects(n,t){return n.intersects(t)}};Xt.DEFAULT_NODE_CAPACITY=10;class Wc{constructor(){Wc.constructor_.apply(this,arguments)}static constructor_(){this._graph=null,this._rings=new it,this._totalEnv=new ct,this._index=null,this._nestedPt=null;const t=arguments[0];this._graph=t}add(t){this._rings.add(t),this._totalEnv.expandToInclude(t.getEnvelopeInternal())}getNestedPoint(){return this._nestedPt}buildIndex(){this._index=new Xt;for(let t=0;t<this._rings.size();t++){const e=this._rings.get(t),i=e.getEnvelopeInternal();this._index.insert(i,e)}}isNonNested(){this.buildIndex();for(let t=0;t<this._rings.size();t++){const e=this._rings.get(t),i=e.getCoordinates(),s=this._index.query(e.getEnvelopeInternal());for(let r=0;r<s.size();r++){const o=s.get(r),a=o.getCoordinates();if(e===o||!e.getEnvelopeInternal().intersects(o.getEnvelopeInternal()))continue;const l=Mi.findPtNotNode(i,o,this._graph);if(l===null)continue;if(Pi.isInRing(l,a))return this._nestedPt=l,!1}}return!0}}class nt{constructor(){nt.constructor_.apply(this,arguments)}static constructor_(){if(this._errorType=null,this._pt=null,arguments.length===1){const t=arguments[0];nt.constructor_.call(this,t,null)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this._errorType=t,e!==null&&(this._pt=e.copy())}}getCoordinate(){return this._pt}getMessage(){return nt.errMsg[this._errorType]}toString(){let t="";return this._pt!==null&&(t=" at or near point "+this._pt),this.getMessage()+t}getErrorType(){return this._errorType}}nt.ERROR=0;nt.REPEATED_POINT=1;nt.HOLE_OUTSIDE_SHELL=2;nt.NESTED_HOLES=3;nt.DISCONNECTED_INTERIOR=4;nt.SELF_INTERSECTION=5;nt.RING_SELF_INTERSECTION=6;nt.NESTED_SHELLS=7;nt.DUPLICATE_RINGS=8;nt.TOO_FEW_POINTS=9;nt.INVALID_COORDINATE=10;nt.RING_NOT_CLOSED=11;nt.errMsg=["Topology Validation Error","Repeated Point","Hole lies outside shell","Holes are nested","Interior is disconnected","Self-intersection","Ring Self-intersection","Nested shells","Duplicate Rings","Too few distinct points in geometry component","Invalid Coordinate","Ring is not closed"];class Mi{constructor(){Mi.constructor_.apply(this,arguments)}static constructor_(){this._parentGeometry=null,this._isSelfTouchingRingFormingHoleValid=!1,this._validErr=null;const t=arguments[0];this._parentGeometry=t}static findPtNotNode(t,e,i){const r=i.findEdge(e).getEdgeIntersectionList();for(let o=0;o<t.length;o++){const a=t[o];if(!r.isIntersection(a))return a}return null}static isValid(){if(arguments[0]instanceof G){const t=arguments[0];return new Mi(t).isValid()}else if(arguments[0]instanceof R){const t=arguments[0];return!(H.isNaN(t.x)||H.isInfinite(t.x)||H.isNaN(t.y)||H.isInfinite(t.y))}}checkInvalidCoordinates(){if(arguments[0]instanceof Array){const t=arguments[0];for(let e=0;e<t.length;e++)if(!Mi.isValid(t[e]))return this._validErr=new nt(nt.INVALID_COORDINATE,t[e]),null}else if(arguments[0]instanceof Ne){const t=arguments[0];if(this.checkInvalidCoordinates(t.getExteriorRing().getCoordinates()),this._validErr!==null)return null;for(let e=0;e<t.getNumInteriorRing();e++)if(this.checkInvalidCoordinates(t.getInteriorRingN(e).getCoordinates()),this._validErr!==null)return null}}checkHolesNotNested(t,e){if(t.getNumInteriorRing()<=0)return null;const i=new Wc(e);for(let r=0;r<t.getNumInteriorRing();r++){const o=t.getInteriorRingN(r);o.isEmpty()||i.add(o)}i.isNonNested()||(this._validErr=new nt(nt.NESTED_HOLES,i.getNestedPoint()))}checkConsistentArea(t){const e=new Gc(t);if(!e.isNodeConsistentArea())return this._validErr=new nt(nt.SELF_INTERSECTION,e.getInvalidPoint()),null;e.hasDuplicateRings()&&(this._validErr=new nt(nt.DUPLICATE_RINGS,e.getInvalidPoint()))}isValid(){return this.checkValid(this._parentGeometry),this._validErr===null}checkShellInsideHole(t,e,i){const s=t.getCoordinates(),r=e.getCoordinates(),o=Mi.findPtNotNode(s,e,i);if(o!==null&&!Pi.isInRing(o,r))return o;const a=Mi.findPtNotNode(r,t,i);return a!==null?Pi.isInRing(a,s)?a:null:(rt.shouldNeverReachHere("points in shell and hole appear to be equal"),null)}checkNoSelfIntersectingRings(t){for(let e=t.getEdgeIterator();e.hasNext();){const i=e.next();if(this.checkNoSelfIntersectingRing(i.getEdgeIntersectionList()),this._validErr!==null)return null}}checkHolesInShell(t,e){if(t.getNumInteriorRing()<=0)return null;const i=t.getExteriorRing(),s=i.isEmpty(),r=new Mr(i);for(let o=0;o<t.getNumInteriorRing();o++){const a=t.getInteriorRingN(o);let l=null;if(a.isEmpty())continue;if(l=Mi.findPtNotNode(a.getCoordinates(),i,e),l===null)return null;if(s||y.EXTERIOR===r.locate(l))return this._validErr=new nt(nt.HOLE_OUTSIDE_SHELL,l),null}}checkShellNotNested(t,e,i){const s=t.getCoordinates(),r=e.getExteriorRing();if(r.isEmpty())return null;const o=r.getCoordinates(),a=Mi.findPtNotNode(s,r,i);if(a===null||!Pi.isInRing(a,o))return null;if(e.getNumInteriorRing()<=0)return this._validErr=new nt(nt.NESTED_SHELLS,a),null;let h=null;for(let c=0;c<e.getNumInteriorRing();c++){const u=e.getInteriorRingN(c);if(h=this.checkShellInsideHole(t,u,i),h===null)return null}this._validErr=new nt(nt.NESTED_SHELLS,h)}checkClosedRings(t){if(this.checkClosedRing(t.getExteriorRing()),this._validErr!==null)return null;for(let e=0;e<t.getNumInteriorRing();e++)if(this.checkClosedRing(t.getInteriorRingN(e)),this._validErr!==null)return null}checkConnectedInteriors(t){const e=new Ra(t);e.isInteriorsConnected()||(this._validErr=new nt(nt.DISCONNECTED_INTERIOR,e.getCoordinate()))}checkNoSelfIntersectingRing(t){const e=new xh;let i=!0;for(let s=t.iterator();s.hasNext();){const r=s.next();if(i){i=!1;continue}if(e.contains(r.coord))return this._validErr=new nt(nt.RING_SELF_INTERSECTION,r.coord),null;e.add(r.coord)}}checkTooFewPoints(t){if(t.hasTooFewPoints())return this._validErr=new nt(nt.TOO_FEW_POINTS,t.getInvalidPoint()),null}getValidationError(){return this.checkValid(this._parentGeometry),this._validErr}checkValid(){if(arguments[0]instanceof ki){const t=arguments[0];this.checkInvalidCoordinates(t.getCoordinates())}else if(arguments[0]instanceof On){const t=arguments[0];this.checkInvalidCoordinates(t.getCoordinates())}else if(arguments[0]instanceof ei){const t=arguments[0];if(this.checkInvalidCoordinates(t.getCoordinates()),this._validErr!==null||(this.checkClosedRing(t),this._validErr!==null))return null;const e=new Ji(0,t);if(this.checkTooFewPoints(e),this._validErr!==null)return null;const i=new Pn;e.computeSelfNodes(i,!0,!0),this.checkNoSelfIntersectingRings(e)}else if(arguments[0]instanceof he){const t=arguments[0];if(this.checkInvalidCoordinates(t.getCoordinates()),this._validErr!==null)return null;const e=new Ji(0,t);this.checkTooFewPoints(e)}else if(arguments[0]instanceof Ne){const t=arguments[0];if(this.checkInvalidCoordinates(t),this._validErr!==null||(this.checkClosedRings(t),this._validErr!==null))return null;const e=new Ji(0,t);if(this.checkTooFewPoints(e),this._validErr!==null||(this.checkConsistentArea(e),this._validErr!==null)||!this._isSelfTouchingRingFormingHoleValid&&(this.checkNoSelfIntersectingRings(e),this._validErr!==null)||(this.checkHolesInShell(t,e),this._validErr!==null)||(this.checkHolesNotNested(t,e),this._validErr!==null))return null;this.checkConnectedInteriors(e)}else if(arguments[0]instanceof ii){const t=arguments[0];for(let i=0;i<t.getNumGeometries();i++){const s=t.getGeometryN(i);if(this.checkInvalidCoordinates(s),this._validErr!==null||(this.checkClosedRings(s),this._validErr!==null))return null}const e=new Ji(0,t);if(this.checkTooFewPoints(e),this._validErr!==null||(this.checkConsistentArea(e),this._validErr!==null)||!this._isSelfTouchingRingFormingHoleValid&&(this.checkNoSelfIntersectingRings(e),this._validErr!==null))return null;for(let i=0;i<t.getNumGeometries();i++){const s=t.getGeometryN(i);if(this.checkHolesInShell(s,e),this._validErr!==null)return null}for(let i=0;i<t.getNumGeometries();i++){const s=t.getGeometryN(i);if(this.checkHolesNotNested(s,e),this._validErr!==null)return null}if(this.checkShellsNotNested(t,e),this._validErr!==null)return null;this.checkConnectedInteriors(e)}else if(arguments[0]instanceof Vt){const t=arguments[0];for(let e=0;e<t.getNumGeometries();e++){const i=t.getGeometryN(e);if(this.checkValid(i),this._validErr!==null)return null}}else if(arguments[0]instanceof G){const t=arguments[0];if(this._validErr=null,t.isEmpty())return null;if(t instanceof ki)this.checkValid(t);else if(t instanceof On)this.checkValid(t);else if(t instanceof ei)this.checkValid(t);else if(t instanceof he)this.checkValid(t);else if(t instanceof Ne)this.checkValid(t);else if(t instanceof ii)this.checkValid(t);else if(t instanceof Vt)this.checkValid(t);else throw new wi(t.getGeometryType())}}setSelfTouchingRingFormingHoleValid(t){this._isSelfTouchingRingFormingHoleValid=t}checkClosedRing(t){if(t.isEmpty())return null;if(!t.isClosed()){let e=null;t.getNumPoints()>=1&&(e=t.getCoordinateN(0)),this._validErr=new nt(nt.RING_NOT_CLOSED,e)}}checkShellsNotNested(t,e){for(let i=0;i<t.getNumGeometries();i++){const r=t.getGeometryN(i).getExteriorRing();for(let o=0;o<t.getNumGeometries();o++){if(i===o)continue;const a=t.getGeometryN(o);if(this.checkShellNotNested(r,a,e),this._validErr!==null)return null}}}}new Xa;class ul{static createDummyLayer(t,e){return{id:t,addEventListener:()=>{},getSource:()=>e||ul.createDummySource()}}static createDummyLayerGroup(t){return{id:t,getLayers:()=>({getArray:()=>{}}),addEventListener:()=>{}}}static createDummySource(t){return{addEventListener:()=>{},getExtent:()=>{},getFeatures:()=>t,clear:()=>{},addFeatures:()=>{}}}static createClusterFeaturesObject(t){return{get:e=>{if(e=="features")return t}}}static geometryIsInvalid(t){if(!t)return!1;const e=new Xa,i=new KC,s=e.writeGeometryObject(t),r=i.read(s);return!Mi.isValid(r)}}var n2=Object.getOwnPropertyDescriptor,s2=(n,t,e,i)=>{for(var s=i>1?void 0:i?n2(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let Mh=class extends Na{constructor(){super(...arguments),this.mapElement=null,this.canvasPattern=null}connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map"),this._loadPattern(),this._setStyleOnParent()}get name(){return this.getAttribute("name")}get color(){return this.getAttribute("color")||"rgba(2, 85, 204, 0.8)"}get pattern(){return this.getAttribute("pattern")}get borderColor(){return this.getAttribute("border-color")||"rgba(2, 85, 204, 1)"}get borderSize(){return this.getAttribute("border-size")||1}get textColor(){return this.getAttribute("text-color")||"#FFF"}get textBackgroundColor(){return this.getAttribute("text-background-color")||"rgba(0, 0, 0, 0)"}get textBorderColor(){return this.getAttribute("text-border-color")||"rgba(255, 255, 255, 0)"}get textBorderSize(){return Number(this.getAttribute("text-border-size")||1)}get textSize(){return this.getAttribute("text-size")||"10px"}get textFeatureAttributeName(){return this.getAttribute("text-feature-attribute-name")||null}get textOffsetX(){return this.getAttribute("text-offset-x")||0}get textOffsetY(){return this.getAttribute("text-offset-y")||0}get invalid(){return this.hasAttribute("invalid")}get style(){return(n,t)=>this.appliesTo(n)?this._styleFunction(n):null}get _styleFunction(){return n=>{const t=n instanceof Eo&&n?.getGeometry();return this.invalid||!this.mapElement.invalidGeometryAllowed&&t&&ul.geometryIsInvalid(t)?new Se({fill:new Qe({color:"rgba(210, 55, 60, 0.3)"}),stroke:new gi({color:"#d2373c",width:2,lineDash:[4,4]}),text:this._getTextStyle(n)}):new Se({fill:new Qe({color:this.canvasPattern??this.color}),stroke:new gi({color:this.borderColor,width:this.borderSize}),text:this._getTextStyle(n)})}}_getTextStyle(n,t){return new qa({font:`${this.textSize} "Flanders Art Sans",sans-serif`,text:this.featureLabelFunction(n),fill:new Qe({color:t||this.textColor}),stroke:new gi({color:this.textBorderColor,width:this.textBorderSize}),backgroundFill:new Qe({color:this.textBackgroundColor}),offsetX:this.textOffsetX,offsetY:this.textOffsetY})}appliesTo(n){return!0}get featureLabelFunction(){return this.textFeatureAttributeName?n=>n.get(this.textFeatureAttributeName):()=>""}_featureZIndex(n){return n&&n.get?n.get("zIndex"):0}_hasUniqueStyles(n){const t=this._getStyles(n);return t&&this._containsObject(t)&&this._areIdentical(t)}_containsStyle(n){return this._containsObject(n.map(t=>t.getStyle()))}_getStyles(n){return n.map(t=>t.getStyle())}_containsObject(n){return n.some(t=>!!t)}_areIdentical(n){return n.every((t,e,i)=>t==i[0])}_loadPattern(){const n=this.pattern;if(!n)return;const t=new Image;t.onload=async()=>{const e=document.createElement("canvas");e.width=t.width||1,e.height=t.height||1;const i=e.getContext("2d");i.fillStyle=this.color,i.fillRect(0,0,e.width,e.height),i.drawImage(t,0,0),this.canvasPattern=i.createPattern(e,"repeat"),await this.mapElement?.ready,this.parentElement?._layer?.getSource()?.changed()},t.src=n}_setStyleOnParent(){this.parentElement&&customElements.whenDefined(this.parentElement.tagName.toLowerCase()).then(()=>{this.parentElement.style=this})}};Mh=s2([vh("vl-map-layer-style")],Mh);class Ia extends Na{static get _observedAttributes(){return["hidden","opacity","z-index"]}constructor(){super(),Ia._counter=0,this.__counter=++Ia._counter,this.__ready=!1}async connectedCallback(){super.connectedCallback(),this.__setIsLayerMarkerAttribute(),this.mapElement&&(await this.mapElement.ready,this.mapElement.addLayer(this._layer),this.getAttribute("z-index")!=null&&this._layer.setZIndex(this._zIndex)),this.__styleCount=this.getStyleCount(),this.__markAsReady()}getStyleCount(){const t=this.querySelectorAll(":scope > *");return Array.from(t)?.filter(e=>e instanceof Mh).length}disconnectedCallback(){this._layer?.dispose()}static get _counter(){return this.__counter}static set _counter(t){this.__counter=t}get layer(){return this._layer}get source(){return this._source}get visible(){return this._layer?.getVisible()}get title(){return this.get("title")}set visible(t){this._layer?.setVisible(t),this.rerender(),this.mapElement&&this.mapElement.handleLayerVisibilityChange(this)}get opacity(){return this._layer?.getOpacity()}set opacity(t){this._layer?.setOpacity(t)}get mapElement(){return this.parentNode&&this.parentNode instanceof hr?this.parentNode:null}get ready(){return this.__ready}get _name(){return this.getAttribute("name")||"kaartlaag"}get _minResolution(){return this.getAttribute("min-resolution")||0}get _maxResolution(){return this.getAttribute("max-resolution")||1/0}get _opacity(){return Number(this.getAttribute("opacity")||1)}get _zIndex(){return Number(this.getAttribute("z-index")||0)}get _visible(){return this.getAttribute("hidden")==null}get _styles(){return this.__styles.length>this.__styleCount&&(this.__styles=Array.from(new Set(this.__styles))),this.__styles}set _styles(t){this.__styles=t}get(t){return this._layer.get(t)}rerender(){this.mapElement&&this.mapElement.rerender()}isVisibleAtResolution(t){const e=parseFloat(this._layer.getMinResolution()),i=parseFloat(this._layer.getMaxResolution());return t>=e&&t<i}_hiddenChangedCallback(t,e){this._layer&&(this.visible=e==null)}_opacityChangedCallback(t,e){this.opacity=Number(e||1)}_zIndexChangedCallback(t,e){this._layer?.setZIndex(Number(e||0))}__setIsLayerMarkerAttribute(){this.setAttribute("is-layer","true")}__markAsReady(){this.__ready=!0}}const r2=Ih`
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
`,o2=Ih`
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
`,a2=Ih`
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
`,l2=[a2,...lm,o2,r2];var h2=Object.getOwnPropertyDescriptor,c2=(n,t,e,i)=>{for(var s=i>1?void 0:i?h2(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let hr=class extends Na{static get _observedAttributes(){return["lambert2008","allow-invalid-geometry"]}constructor(){const n=`
            <div id='map'>
                <slot></slot>
            </div>
        `,t=[...l2.map(e=>e.styleSheet)];super(n,t),this.__initializeCoordinateSystem(),this.__prepareReadyPromises()}static get _observedClassAttributes(){return["no-border","full-height"]}get _classPrefix(){return"vl-map--"}get ready(){return this.__ready}get map(){return this._map}get resolution(){return this.map.getView().getResolution()}get nonBaseLayers(){return[...this.querySelectorAll(":scope > [is-layer]")]}get disableEscapeKey(){return this.getAttribute("disable-escape-key")!=null}get disableRotation(){return this.getAttribute("disable-rotation")!=null}get disableMouseWheelZoom(){return this.getAttribute("disable-mouse-wheel-zoom")!=null}get disableKeyboard(){return this.getAttribute("disable-keyboard")!=null}get actions(){return this.map&&this.map.actions}get controls(){return this.map&&this.map.getControls().getArray()}get activeAction(){return this.map&&this.map.getCurrentActiveAction()}get defaultAction(){return this.map&&this.map.getDefaultActiveAction()}get _mapElement(){return this._shadow?.querySelector("#map")}get _controls(){return this.getAttribute("allow-fullscreen")!==null?[new Em]:[]}get _projection(){return new Pa({code:this._code,extent:this._extent})}get isLambert2008(){return this.hasAttribute("lambert2008")}get _code(){return this.isLambert2008?sf():of()}get _extent(){return this.isLambert2008?DM():kM()}get invalidGeometryAllowed(){return this.hasAttribute("allow-invalid-geometry")}hasInvalidGeometries(){return this.nonBaseLayers.some(n=>{const{layer:t}=n;return t?.getSource?t.getSource().getFeatures().some(e=>{const i=e.getGeometry();return i?ul.geometryIsInvalid(i):!1}):!1})}get zoomInTipLabel(){return this.getAttribute("zoomInTooltip")}get zoomOutTipLabel(){return this.getAttribute("zoomOutTooltip")}get featuresLayers(){return Array.from(this.querySelectorAll("vl-map-features-layer"))}get wfsLayers(){return Array.from(this.querySelectorAll("vl-map-wfs-layer"))}get wmsLayers(){return Array.from(this.querySelectorAll("vl-map-tiled-wms-layer, vl-map-image-wms-layer"))}static __callOnceOnLoad(n){document.readyState==="complete"?n():window.addEventListener("load",n,{once:!0})}__prepareReadyPromises(){this.__mapReady=new Promise(n=>this.__mapReadyResolver=n),this.__overviewMapReady=new Promise(n=>this.__overviewMapReadyResolver=n),this.__ready=Promise.all([this.__mapReady,this.__overviewMapReady])}connectedCallback(){super.connectedCallback(),this._initializeMap()}_initializeMap(){this._map=new xC({actions:[],disableEscapeKey:this.disableEscapeKey,disableRotation:this.disableRotation,disableMouseWheelZoom:this.disableMouseWheelZoom,disableKeyboard:this.disableKeyboard,customLayers:{baseLayerGroup:this.__createLayerGroup("Basis lagen",[]),overviewMapLayers:[],overlayGroup:this.__createLayerGroup("Lagen",[])},projection:this._projection,target:this._mapElement,controls:this._controls,defaultZoom:!1}),this._map.initializeView(),this.__updateMapSizeOnLoad(),this.__updateOverviewMapSizeOnLoad(),this._map.addControl(this.__createZoomControl()),this.observeRemovedMapLayers()}disconnectedCallback(){this.observer&&this.observer.disconnect(),this.map?.setTarget(null)}__createZoomControl(){const n={};return this.zoomInTipLabel&&(n.zoomInTipLabel=this.zoomInTipLabel),this.zoomOutTipLabel&&(n.zoomOutTipLabel=this.zoomOutTipLabel),new ic(n)}addLayer(n){this.map.addOverlayLayer(n)}addAction(n){this.map.addAction(n)}addControl(n){this.map.addControl(n)}removeAction(n){this.map.removeAction(n)}_dispatchLayerVisibleChangedEvent(n){this.dispatchEvent(new CustomEvent(gd.LAYER_VISIBLE_CHANGED,{detail:{layer:n,visible:n.visible}}))}handleLayerVisibilityChange(n){this._dispatchLayerVisibleChangedEvent(n);const t=this.map.getLayerActions(n.layer);t&&t.forEach(e=>{n.visible?!this.activeAction&&e===this.defaultAction&&e.element.activate():e.element._active&&e.element.deactivate(),e.handleLayerVisibilityChange&&e.handleLayerVisibilityChange();const i=e.getControl();i&&i.get("element").setDisabled(!n.visible)})}_dispatchActiveActionChangedEvent(n,t){this.dispatchEvent(new CustomEvent(gd.ACTIVE_ACTION_CHANGED,{detail:{previous:n&&n.element,current:t&&t.element}}))}changeActiveAction(n){const t=this.activeAction,e=n||void 0;t&&(this.map.deactivateCurrentAction(),t.element._active=!1,t.getControl()&&t.getControl().get("element").setActive(!1)),e&&(this.map.activateAction(e),e.element._active=!0,e.getControl()&&e.getControl().get("element").setActive(!0)),(e||t)&&this._dispatchActiveActionChangedEvent(t,e)}activateAction(n){n&&n.element.activate()}deactivateAction(n){n&&n.element.deactivate()}zoomTo(n,t){Array.isArray(n)?this.map.zoomToExtent(n,t):n instanceof Object&&this.map.zoomToGeometry(n,t)}on(n,t){return this.map.on(n,t)}un(n,t){return this.map.un(n,t)}rerender(){this.map.render()}__updateMapSize(){this.style.display="block",this.map&&this.map.updateSize(),this.__mapReadyResolver()}__updateOverviewMapSize(){this.map.overviewMapControl&&this.map.overviewMapControl.getOverviewMap().updateSize(),this.__overviewMapReadyResolver()}__updateOverviewMapSizeOnLoad(){hr.__callOnceOnLoad(this.__updateOverviewMapSize.bind(this))}__updateMapSizeOnLoad(){hr.__callOnceOnLoad(this.__updateMapSize.bind(this))}__createLayerGroup(n,t){return new Fn({title:n,layers:t})}__initializeCoordinateSystem(){_e.defs("EPSG:31370","+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs"),_e.defs("EPSG:3812","+proj=lcc +lat_0=50.797815 +lon_0=4.35921583333333 +lat_1=49.8333333333333 +lat_2=51.1666666666667 +x_0=649328 +y_0=665262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"),Cw(_e)}observeRemovedMapLayers(){const n=this;this.observer=new MutationObserver(t=>{t.filter(({target:e})=>e===n).flatMap(({removedNodes:e})=>Array.from(e).filter(i=>i instanceof Ia)).forEach(e=>{this.map.removeOverlayLayer(e._layer)})}),this.observer.observe(n,{subtree:!0,childList:!0})}};hr=c2([vh("vl-map")],hr);const qf=.5,u2=10,pd=.25;class Zf{constructor(t,e,i,s,r,o){this.sourceProj_=t,this.targetProj_=e;let a={};const l=$s(this.targetProj_,this.sourceProj_);this.transformInv_=function(p){const x=p[0]+"/"+p[1];return a[x]||(a[x]=l(p)),a[x]},this.maxSourceExtent_=s,this.errorThresholdSquared_=r*r,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!s&&!!this.sourceProj_.getExtent()&&wt(s)>=wt(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?wt(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?wt(this.targetProj_.getExtent()):null;const h=rn(i),c=Fa(i),u=wo(i),d=Da(i),g=this.transformInv_(h),f=this.transformInv_(c),m=this.transformInv_(u),w=this.transformInv_(d),_=u2+(o?Math.max(0,Math.ceil(Math.log2(Xl(i)/(o*o*256*256)))):0);if(this.addQuad_(h,c,u,d,g,f,m,w,_),this.wrapsXInSource_){let p=1/0;this.triangles_.forEach(function(x,T,M){p=Math.min(p,x.source[0][0],x.source[1][0],x.source[2][0])}),this.triangles_.forEach(x=>{if(Math.max(x.source[0][0],x.source[1][0],x.source[2][0])-p>this.sourceWorldWidth_/2){const T=[[x.source[0][0],x.source[0][1]],[x.source[1][0],x.source[1][1]],[x.source[2][0],x.source[2][1]]];T[0][0]-p>this.sourceWorldWidth_/2&&(T[0][0]-=this.sourceWorldWidth_),T[1][0]-p>this.sourceWorldWidth_/2&&(T[1][0]-=this.sourceWorldWidth_),T[2][0]-p>this.sourceWorldWidth_/2&&(T[2][0]-=this.sourceWorldWidth_);const M=Math.min(T[0][0],T[1][0],T[2][0]);Math.max(T[0][0],T[1][0],T[2][0])-M<this.sourceWorldWidth_/2&&(x.source=T)}})}a={}}addTriangle_(t,e,i,s,r,o){this.triangles_.push({source:[s,r,o],target:[t,e,i]})}addQuad_(t,e,i,s,r,o,a,l,h){const c=Hl([r,o,a,l]),u=this.sourceWorldWidth_?wt(c)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,g=this.sourceProj_.canWrapX()&&u>.5&&u<1;let f=!1;if(h>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const w=Hl([t,e,i,s]);f=wt(w)/this.targetWorldWidth_>pd||f}!g&&this.sourceProj_.isGlobal()&&u&&(f=u>pd||f)}if(!f&&this.maxSourceExtent_&&isFinite(c[0])&&isFinite(c[1])&&isFinite(c[2])&&isFinite(c[3])&&!be(c,this.maxSourceExtent_))return;let m=0;if(!f&&(!isFinite(r[0])||!isFinite(r[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(l[0])||!isFinite(l[1]))){if(h>0)f=!0;else if(m=(!isFinite(r[0])||!isFinite(r[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),m!=1&&m!=2&&m!=4&&m!=8)return}if(h>0){if(!f){const w=[(t[0]+i[0])/2,(t[1]+i[1])/2],_=this.transformInv_(w);let p;g?p=(En(r[0],d)+En(a[0],d))/2-En(_[0],d):p=(r[0]+a[0])/2-_[0];const x=(r[1]+a[1])/2-_[1];f=p*p+x*x>this.errorThresholdSquared_}if(f){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){const w=[(e[0]+i[0])/2,(e[1]+i[1])/2],_=this.transformInv_(w),p=[(s[0]+t[0])/2,(s[1]+t[1])/2],x=this.transformInv_(p);this.addQuad_(t,e,w,p,r,o,_,x,h-1),this.addQuad_(p,w,i,s,x,_,a,l,h-1)}else{const w=[(t[0]+e[0])/2,(t[1]+e[1])/2],_=this.transformInv_(w),p=[(i[0]+s[0])/2,(i[1]+s[1])/2],x=this.transformInv_(p);this.addQuad_(t,w,p,s,r,_,x,l,h-1),this.addQuad_(w,e,i,p,_,o,a,x,h-1)}return}}if(g){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(m&11)==0&&this.addTriangle_(t,i,s,r,a,l),(m&14)==0&&this.addTriangle_(t,i,e,r,a,o),m&&((m&13)==0&&this.addTriangle_(e,s,t,o,l,r),(m&7)==0&&this.addTriangle_(e,s,i,o,l,a))}calculateSourceExtent(){const t=Be();return this.triangles_.forEach(function(e,i,s){const r=e.source;Wr(t,r[0]),Wr(t,r[1]),Wr(t,r[2])}),t}getTriangles(){return this.triangles_}}let Fl;const Us=[];function xd(n,t,e,i,s){n.beginPath(),n.moveTo(0,0),n.lineTo(t,e),n.lineTo(i,s),n.closePath(),n.save(),n.clip(),n.fillRect(0,0,Math.max(t,i)+1,Math.max(e,s)),n.restore()}function kl(n,t){return Math.abs(n[t*4]-210)>2||Math.abs(n[t*4+3]-.75*255)>2}function d2(){if(Fl===void 0){const n=pe(6,6,Us);n.globalCompositeOperation="lighter",n.fillStyle="rgba(210, 0, 0, 0.75)",xd(n,4,5,4,0),xd(n,4,5,0,5);const t=n.getImageData(0,0,3,3).data;Fl=kl(t,0)||kl(t,4)||kl(t,8),Oa(n),Us.push(n.canvas)}return Fl}function ba(n,t,e,i){const s=Yd(e,t,n);let r=oa(t,i,e);const o=t.getMetersPerUnit();o!==void 0&&(r*=o);const a=n.getMetersPerUnit();a!==void 0&&(r/=a);const l=n.getExtent();if(!l||Ka(l,s)){const h=oa(n,r,s)/r;isFinite(h)&&h>0&&(r/=h)}return r}function g2(n,t,e,i){const s=fi(e);let r=ba(n,t,s,i);return(!isFinite(r)||r<=0)&&Dd(e,function(o){return r=ba(n,t,o,i),isFinite(r)&&r>0}),r}function $f(n,t,e,i,s,r,o,a,l,h,c,u,d){const g=pe(Math.round(e*n),Math.round(e*t),Us);if(u||(g.imageSmoothingEnabled=!1),l.length===0)return g.canvas;g.scale(e,e);function f(p){return Math.round(p*e)/e}g.globalCompositeOperation="lighter";const m=Be();l.forEach(function(p,x,T){Pd(m,p.extent)});let w;if(!d||l.length!==1||h!==0){const p=wt(m),x=ae(m);w=pe(Math.round(e*p/i),Math.round(e*x/i),Us),u||(w.imageSmoothingEnabled=!1);const T=e/i;l.forEach(function(M,C,I){const v=M.extent[0]-m[0],K=-(M.extent[3]-m[3]),W=wt(M.extent),X=ae(M.extent);M.image.width>0&&M.image.height>0&&w.drawImage(M.image,h,h,M.image.width-2*h,M.image.height-2*h,v*T,K*T,W*T,X*T)})}const _=rn(o);return a.getTriangles().forEach(function(p,x,T){const M=p.source,C=p.target;let I=M[0][0],v=M[0][1],K=M[1][0],W=M[1][1],X=M[2][0],A=M[2][1];const B=f((C[0][0]-_[0])/r),gt=f(-(C[0][1]-_[1])/r),k=f((C[1][0]-_[0])/r),z=f(-(C[1][1]-_[1])/r),P=f((C[2][0]-_[0])/r),et=f(-(C[2][1]-_[1])/r),yt=I,ft=v;I=0,v=0,K-=yt,W-=ft,X-=yt,A-=ft;const Yt=[[K,W,0,0,k-B],[X,A,0,0,P-B],[0,0,K,W,z-gt],[0,0,X,A,et-gt]],N=Xm(Yt);if(!N)return;if(g.save(),g.beginPath(),d2()||!u){g.moveTo(k,z);const lt=4,At=B-k,an=gt-z;for(let ue=0;ue<lt;ue++)g.lineTo(k+f((ue+1)*At/lt),z+f(ue*an/(lt-1))),ue!=lt-1&&g.lineTo(k+f((ue+1)*At/lt),z+f((ue+1)*an/(lt-1)));g.lineTo(P,et)}else g.moveTo(k,z),g.lineTo(B,gt),g.lineTo(P,et);g.clip(),g.transform(N[0],N[2],N[1],N[3],B,gt),g.translate(m[0]-yt,m[3]-ft);let $t;if(w)$t=w.canvas,g.scale(i/e,-i/e);else{const lt=l[0],At=lt.extent;$t=lt.image,g.scale(wt(At)/$t.width,-ae(At)/$t.height)}g.drawImage($t,0,0),g.restore()}),w&&(Oa(w),Us.push(w.canvas)),c&&(g.save(),g.globalCompositeOperation="source-over",g.strokeStyle="black",g.lineWidth=1,a.getTriangles().forEach(function(p,x,T){const M=p.target,C=(M[0][0]-_[0])/r,I=-(M[0][1]-_[1])/r,v=(M[1][0]-_[0])/r,K=-(M[1][1]-_[1])/r,W=(M[2][0]-_[0])/r,X=-(M[2][1]-_[1])/r;g.beginPath(),g.moveTo(v,K),g.lineTo(C,I),g.lineTo(W,X),g.closePath(),g.stroke()}),g.restore()),g.canvas}class Ch extends Cf{constructor(t,e,i,s,r,o,a,l,h,c,u,d){super(r,j.IDLE,d),this.renderEdges_=u!==void 0?u:!1,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=e,this.targetTileGrid_=s,this.wrappedTileCoord_=o||r,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0;const g=s.getTileCoordExtent(this.wrappedTileCoord_),f=this.targetTileGrid_.getExtent();let m=this.sourceTileGrid_.getExtent();const w=f?Gs(g,f):g;if(Xl(w)===0){this.state=j.EMPTY;return}const _=t.getExtent();_&&(m?m=Gs(m,_):m=_);const p=s.getResolution(this.wrappedTileCoord_[0]),x=g2(t,i,w,p);if(!isFinite(x)||x<=0){this.state=j.EMPTY;return}const T=c!==void 0?c:qf;if(this.triangulation_=new Zf(t,i,w,m,x*T,p),this.triangulation_.getTriangles().length===0){this.state=j.EMPTY;return}this.sourceZ_=e.getZForResolution(x);let M=this.triangulation_.calculateSourceExtent();if(m&&(t.canWrapX()?(M[1]=kt(M[1],m[1],m[3]),M[3]=kt(M[3],m[1],m[3])):M=Gs(M,m)),!Xl(M))this.state=j.EMPTY;else{const C=e.getTileRangeForExtentAndZ(M,this.sourceZ_);for(let I=C.minX;I<=C.maxX;I++)for(let v=C.minY;v<=C.maxY;v++){const K=h(this.sourceZ_,I,v,a);K&&this.sourceTiles_.push(K)}this.sourceTiles_.length===0&&(this.state=j.EMPTY)}}getImage(){return this.canvas_}reproject_(){const t=[];if(this.sourceTiles_.forEach(e=>{e&&e.getState()==j.LOADED&&t.push({extent:this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),image:e.getImage()})}),this.sourceTiles_.length=0,t.length===0)this.state=j.ERROR;else{const e=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(e),s=typeof i=="number"?i:i[0],r=typeof i=="number"?i:i[1],o=this.targetTileGrid_.getResolution(e),a=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=$f(s,r,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,t,this.gutter_,this.renderEdges_,this.interpolate),this.state=j.LOADED}this.changed()}load(){if(this.state==j.IDLE){this.state=j.LOADING,this.changed();let t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(e=>{const i=e.getState();if(i==j.IDLE||i==j.LOADING){t++;const s=ot(e,$.CHANGE,function(r){const o=e.getState();(o==j.LOADED||o==j.ERROR||o==j.EMPTY)&&(St(s),t--,t===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(s)}}),t===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(e,i,s){e.getState()==j.IDLE&&e.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(St),this.sourcesListenerKeys_=null}release(){this.canvas_&&(Oa(this.canvas_.getContext("2d")),Us.push(this.canvas_),this.canvas_=null),super.release()}}const $o={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};class f2 extends Ba{constructor(t){t=t||{};const e=Object.assign({},t);delete e.preload,delete e.useInterimTilesOnError,super(e),this.on,this.once,this.un,this.setPreload(t.preload!==void 0?t.preload:0),this.setUseInterimTilesOnError(t.useInterimTilesOnError!==void 0?t.useInterimTilesOnError:!0)}getPreload(){return this.get($o.PRELOAD)}setPreload(t){this.set($o.PRELOAD,t)}getUseInterimTilesOnError(){return this.get($o.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(t){this.set($o.USE_INTERIM_TILES_ON_ERROR,t)}getData(t){return super.getData(t)}}class m2 extends xf{constructor(t){super(t),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=Be(),this.tmpTileRange_=new pc(0,0,0,0)}isDrawableTile(t){const e=this.getLayer(),i=t.getState(),s=e.getUseInterimTilesOnError();return i==j.LOADED||i==j.EMPTY||i==j.ERROR&&!s}getTile(t,e,i,s){const r=s.pixelRatio,o=s.viewState.projection,a=this.getLayer();let h=a.getSource().getTile(t,e,i,r,o);return h.getState()==j.ERROR&&a.getUseInterimTilesOnError()&&a.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(h)||(h=h.getInterimTile()),h}getData(t){const e=this.frameState;if(!e)return null;const i=this.getLayer(),s=Zt(e.pixelToCoordinateTransform,t.slice()),r=i.getExtent();if(r&&!Ka(r,s))return null;const o=e.pixelRatio,a=e.viewState.projection,l=e.viewState,h=i.getRenderSource(),c=h.getTileGridForProjection(l.projection),u=h.getTilePixelRatio(e.pixelRatio);for(let d=c.getZForResolution(l.resolution);d>=c.getMinZoom();--d){const g=c.getTileCoordForCoordAndZ(s,d),f=h.getTile(d,g[1],g[2],o,a);if(!(f instanceof Rf||f instanceof Ch)||f instanceof Ch&&f.getState()===j.EMPTY)return null;if(f.getState()!==j.LOADED)continue;const m=c.getOrigin(d),w=ze(c.getTileSize(d)),_=c.getResolution(d),p=Math.floor(u*((s[0]-m[0])/_-g[1]*w[0])),x=Math.floor(u*((m[1]-s[1])/_-g[2]*w[1])),T=Math.round(u*h.getGutterForProjection(l.projection));return this.getImageData(f.getImage(),p+T,x+T)}return null}loadedTileCallback(t,e,i){return this.isDrawableTile(i)?super.loadedTileCallback(t,e,i):!1}prepareFrame(t){return!!this.getLayer().getSource()}renderFrame(t,e){const i=t.layerStatesArray[t.layerIndex],s=t.viewState,r=s.projection,o=s.resolution,a=s.center,l=s.rotation,h=t.pixelRatio,c=this.getLayer(),u=c.getSource(),d=u.getRevision(),g=u.getTileGridForProjection(r),f=g.getZForResolution(o,u.zDirection),m=g.getResolution(f);let w=t.extent;const _=t.viewState.resolution,p=u.getTilePixelRatio(h),x=Math.round(wt(w)/_*h),T=Math.round(ae(w)/_*h),M=i.extent&&Un(i.extent);M&&(w=Gs(w,Un(i.extent)));const C=m*x/2/p,I=m*T/2/p,v=[a[0]-C,a[1]-I,a[0]+C,a[1]+I],K=g.getTileRangeForExtentAndZ(w,f),W={};W[f]={};const X=this.createLoadedTileFinder(u,r,W),A=this.tmpExtent,B=this.tmpTileRange_;this.newTiles_=!1;const gt=l?Ul(s.center,_,l,t.size):void 0;for(let $t=K.minX;$t<=K.maxX;++$t)for(let lt=K.minY;lt<=K.maxY;++lt){if(l&&!g.tileCoordIntersectsViewport([f,$t,lt],gt))continue;const At=this.getTile(f,$t,lt,t);if(this.isDrawableTile(At)){const Bi=Tt(this);if(At.getState()==j.LOADED){W[f][At.tileCoord.toString()]=At;let Hi=At.inTransition(Bi);Hi&&i.opacity!==1&&(At.endTransition(Bi),Hi=!1),!this.newTiles_&&(Hi||!this.renderedTiles.includes(At))&&(this.newTiles_=!0)}if(At.getAlpha(Bi,t.time)===1)continue}const an=g.getTileCoordChildTileRange(At.tileCoord,B,A);let ue=!1;an&&(ue=X(f+1,an)),ue||g.forEachTileCoordParentTileRange(At.tileCoord,X,B,A)}const k=m/o*h/p;nn(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/h,1/h,l,-x/2,-T/2);const z=Ud(this.pixelTransform);this.useContainer(e,z,this.getBackground(t));const P=this.context,et=P.canvas;Gh(this.inversePixelTransform,this.pixelTransform),nn(this.tempTransform,x/2,T/2,k,k,0,-x/2,-T/2),et.width!=x||et.height!=T?(et.width=x,et.height=T):this.containerReused||P.clearRect(0,0,x,T),M&&this.clipUnrotated(P,t,M),u.getInterpolate()||(P.imageSmoothingEnabled=!1),this.preRender(P,t),this.renderedTiles.length=0;let yt=Object.keys(W).map(Number);yt.sort(bn);let ft,Yt,N;i.opacity===1&&(!this.containerReused||u.getOpaque(t.viewState.projection))?yt=yt.reverse():(ft=[],Yt=[]);for(let $t=yt.length-1;$t>=0;--$t){const lt=yt[$t],At=u.getTilePixelSize(lt,h,r),ue=g.getResolution(lt)/m,Bi=At[0]*ue*k,Hi=At[1]*ue*k,ds=g.getTileCoordForCoordAndZ(rn(v),lt),No=g.getTileCoordExtent(ds),gs=Zt(this.tempTransform,[p*(No[0]-v[0])/m,p*(v[3]-No[3])/m]),Ao=p*u.getGutterForProjection(r),ln=W[lt];for(const Cr in ln){const hn=ln[Cr],Oo=hn.tileCoord,Po=ds[1]-Oo[1],Ko=Math.round(gs[0]-(Po-1)*Bi),fs=ds[2]-Oo[2],dl=Math.round(gs[1]-(fs-1)*Hi),xe=Math.round(gs[0]-Po*Bi),He=Math.round(gs[1]-fs*Hi),ni=Ko-xe,Yi=dl-He,ms=f===lt,Wn=ms&&hn.getAlpha(Tt(this),t.time)!==1;let cn=!1;if(!Wn)if(ft){N=[xe,He,xe+ni,He,xe+ni,He+Yi,xe,He+Yi];for(let ws=0,Do=ft.length;ws<Do;++ws)if(f!==lt&&lt<Yt[ws]){const de=ft[ws];be([xe,He,xe+ni,He+Yi],[de[0],de[3],de[4],de[7]])&&(cn||(P.save(),cn=!0),P.beginPath(),P.moveTo(N[0],N[1]),P.lineTo(N[2],N[3]),P.lineTo(N[4],N[5]),P.lineTo(N[6],N[7]),P.moveTo(de[6],de[7]),P.lineTo(de[4],de[5]),P.lineTo(de[2],de[3]),P.lineTo(de[0],de[1]),P.clip())}ft.push(N),Yt.push(lt)}else P.clearRect(xe,He,ni,Yi);this.drawTileImage(hn,t,xe,He,ni,Yi,Ao,ms),ft&&!Wn?(cn&&P.restore(),this.renderedTiles.unshift(hn)):this.renderedTiles.push(hn),this.updateUsedTiles(t.usedTiles,u,hn)}}return this.renderedRevision=d,this.renderedResolution=m,this.extentChanged=!this.renderedExtent_||!is(this.renderedExtent_,v),this.renderedExtent_=v,this.renderedPixelRatio=h,this.renderedProjection=r,this.manageTilePyramid(t,u,g,h,r,w,f,c.getPreload()),this.scheduleExpireCache(t,u),this.postRender(P,t),i.extent&&P.restore(),P.imageSmoothingEnabled=!0,z!==et.style.transform&&(et.style.transform=z),this.container}drawTileImage(t,e,i,s,r,o,a,l){const h=this.getTileImage(t);if(!h)return;const c=Tt(this),u=e.layerStatesArray[e.layerIndex],d=u.opacity*(l?t.getAlpha(c,e.time):1),g=d!==this.context.globalAlpha;g&&(this.context.save(),this.context.globalAlpha=d),this.context.drawImage(h,a,a,h.width-2*a,h.height-2*a,i,s,r,o),g&&this.context.restore(),d!==u.opacity?e.animate=!0:l&&t.endTransition(c)}getImage(){const t=this.context;return t?t.canvas:null}getTileImage(t){return t.getImage()}scheduleExpireCache(t,e){if(e.canExpireCache()){const i=(function(s,r,o){const a=Tt(s);a in o.usedTiles&&s.expireCache(o.viewState.projection,o.usedTiles[a])}).bind(null,e);t.postRenderFunctions.push(i)}}updateUsedTiles(t,e,i){const s=Tt(e);s in t||(t[s]={}),t[s][i.getKey()]=!0}manageTilePyramid(t,e,i,s,r,o,a,l,h){const c=Tt(e);c in t.wantedTiles||(t.wantedTiles[c]={});const u=t.wantedTiles[c],d=t.tileQueue,g=i.getMinZoom(),f=t.viewState.rotation,m=f?Ul(t.viewState.center,t.viewState.resolution,f,t.size):void 0;let w=0,_,p,x,T,M,C;for(C=g;C<=a;++C)for(p=i.getTileRangeForExtentAndZ(o,C,p),x=i.getResolution(C),T=p.minX;T<=p.maxX;++T)for(M=p.minY;M<=p.maxY;++M)f&&!i.tileCoordIntersectsViewport([C,T,M],m)||(a-C<=l?(++w,_=e.getTile(C,T,M,s,r),_.getState()==j.IDLE&&(u[_.getKey()]=!0,d.isKeyQueued(_.getKey())||d.enqueue([_,c,i.getTileCoordCenter(_.tileCoord),x])),h!==void 0&&h(_)):e.useTile(C,T,M,r));e.updateCacheSize(w,r)}}class Jo extends f2{constructor(t){super(t)}createRenderer(){return new m2(this)}}function Rh(n){return Array.isArray(n)?Math.min(...n):n}const Gl={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"},Cs=[0,0,0],mn=5;class zc{constructor(t){this.minZoom=t.minZoom!==void 0?t.minZoom:0,this.resolutions_=t.resolutions,mt(um(this.resolutions_,(s,r)=>r-s),"`resolutions` must be sorted in descending order");let e;if(!t.origins){for(let s=0,r=this.resolutions_.length-1;s<r;++s)if(!e)e=this.resolutions_[s]/this.resolutions_[s+1];else if(this.resolutions_[s]/this.resolutions_[s+1]!==e){e=void 0;break}}this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=t.origin!==void 0?t.origin:null,this.origins_=null,t.origins!==void 0&&(this.origins_=t.origins,mt(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const i=t.extent;i!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=rn(i)),mt(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,t.tileSizes!==void 0&&(this.tileSizes_=t.tileSizes,mt(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=t.tileSize!==void 0?t.tileSize:this.tileSizes_?null:Bh,mt(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=i!==void 0?i:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],t.sizes!==void 0?this.fullTileRanges_=t.sizes.map((s,r)=>{const o=new pc(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(i){const a=this.getTileRangeForExtentAndZ(i,r);o.minX=Math.max(a.minX,o.minX),o.maxX=Math.min(a.maxX,o.maxX),o.minY=Math.max(a.minY,o.minY),o.maxY=Math.min(a.maxY,o.maxY)}return o}):i&&this.calculateTileRanges_(i)}forEachTileCoord(t,e,i){const s=this.getTileRangeForExtentAndZ(t,e);for(let r=s.minX,o=s.maxX;r<=o;++r)for(let a=s.minY,l=s.maxY;a<=l;++a)i([e,r,a])}forEachTileCoordParentTileRange(t,e,i,s){let r,o,a,l=null,h=t[0]-1;for(this.zoomFactor_===2?(o=t[1],a=t[2]):l=this.getTileCoordExtent(t,s);h>=this.minZoom;){if(o!==void 0&&a!==void 0?(o=Math.floor(o/2),a=Math.floor(a/2),r=Ts(o,o,a,a,i)):r=this.getTileRangeForExtentAndZ(l,h,i),e(h,r))return!0;--h}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(t){return this.origin_?this.origin_:this.origins_[t]}getResolution(t){return this.resolutions_[t]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(t,e,i){if(t[0]<this.maxZoom){if(this.zoomFactor_===2){const r=t[1]*2,o=t[2]*2;return Ts(r,r+1,o,o+1,e)}const s=this.getTileCoordExtent(t,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,t[0]+1,e)}return null}getTileRangeForTileCoordAndZ(t,e,i){if(e>this.maxZoom||e<this.minZoom)return null;const s=t[0],r=t[1],o=t[2];if(e===s)return Ts(r,o,r,o,i);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,e-s),h=Math.floor(r*l),c=Math.floor(o*l);if(e<s)return Ts(h,h,c,c,i);const u=Math.floor(l*(r+1))-1,d=Math.floor(l*(o+1))-1;return Ts(h,u,c,d,i)}const a=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,e,i)}getTileRangeForExtentAndZ(t,e,i){this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,Cs);const s=Cs[1],r=Cs[2];this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,Cs);const o=Cs[1],a=Cs[2];return Ts(s,o,r,a,i)}getTileCoordCenter(t){const e=this.getOrigin(t[0]),i=this.getResolution(t[0]),s=ze(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*s[0]*i,e[1]-(t[2]+.5)*s[1]*i]}getTileCoordExtent(t,e){const i=this.getOrigin(t[0]),s=this.getResolution(t[0]),r=ze(this.getTileSize(t[0]),this.tmpSize_),o=i[0]+t[1]*r[0]*s,a=i[1]-(t[2]+1)*r[1]*s,l=o+r[0]*s,h=a+r[1]*s;return en(o,a,l,h,e)}getTileCoordForCoordAndResolution(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)}getTileCoordForXYAndResolution_(t,e,i,s,r){const o=this.getZForResolution(i),a=i/this.getResolution(o),l=this.getOrigin(o),h=ze(this.getTileSize(o),this.tmpSize_);let c=a*(t-l[0])/i/h[0],u=a*(l[1]-e)/i/h[1];return s?(c=pn(c,mn)-1,u=pn(u,mn)-1):(c=Ss(c,mn),u=Ss(u,mn)),fd(o,c,u,r)}getTileCoordForXYAndZ_(t,e,i,s,r){const o=this.getOrigin(i),a=this.getResolution(i),l=ze(this.getTileSize(i),this.tmpSize_);let h=(t-o[0])/a/l[0],c=(o[1]-e)/a/l[1];return s?(h=pn(h,mn)-1,c=pn(c,mn)-1):(h=Ss(h,mn),c=Ss(c,mn)),fd(i,h,c,r)}getTileCoordForCoordAndZ(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)}getTileCoordResolution(t){return this.resolutions_[t[0]]}getTileSize(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]}getFullTileRange(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null}getZForResolution(t,e){const i=Aa(this.resolutions_,t,e||0);return kt(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(t,e){return lg(e,0,e.length,2,this.getTileCoordExtent(t))}calculateTileRanges_(t){const e=this.resolutions_.length,i=new Array(e);for(let s=this.minZoom;s<e;++s)i[s]=this.getTileRangeForExtentAndZ(t,s);this.fullTileRanges_=i}}class Jf extends zc{constructor(t){super({extent:t.extent,origin:t.origin,origins:t.origins,resolutions:t.resolutions,tileSize:t.tileSize,tileSizes:t.tileSizes,sizes:t.sizes}),this.matrixIds_=t.matrixIds}getMatrixId(t){return this.matrixIds_[t]}getMatrixIds(){return this.matrixIds_}}function w2(n,t,e){const i=[],s=[],r=[],o=[],a=[];e=e!==void 0?e:[];const l="SupportedCRS",h="TileMatrix",c="Identifier",u="ScaleDenominator",d="TopLeftCorner",g="TileWidth",f="TileHeight",m=n[l],w=at(m),_=w.getMetersPerUnit(),p=w.getAxisOrientation().substr(0,2)=="ne";return n[h].sort(function(x,T){return T[u]-x[u]}),n[h].forEach(function(x){let T;if(e.length>0?T=e.find(function(M){return x[c]==M[h]?!0:x[c].includes(":")?!1:n[c]+":"+x[c]===M[h]}):T=!0,T){s.push(x[c]);const M=x[u]*28e-5/_,C=x[g],I=x[f];p?r.push([x[d][1],x[d][0]]):r.push(x[d]),i.push(M),o.push(C==I?C:[C,I]),a.push([x.MatrixWidth,x.MatrixHeight])}}),new Jf({extent:t,origins:r,resolutions:i,matrixIds:s,tileSizes:o,sizes:a})}function Qf(n){let t=n.getDefaultTileGrid();return t||(t=x2(n),n.setDefaultTileGrid(t)),t}function y2(n,t,e){const i=t[0],s=n.getTileCoordCenter(t),r=Bc(e);if(!Ka(r,s)){const o=wt(r),a=Math.ceil((r[0]-s[0])/o);return s[0]+=o*a,n.getTileCoordForCoordAndZ(s,i)}return t}function _2(n,t,e,i){i=i!==void 0?i:"top-left";const s=tm(n,t,e);return new zc({extent:n,origin:km(n,i),resolutions:s,tileSize:e})}function p2(n){const t=n||{},e=t.extent||at("EPSG:3857").getExtent(),i={extent:e,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:tm(e,t.maxZoom,t.tileSize,t.maxResolution)};return new zc(i)}function tm(n,t,e,i){t=t!==void 0?t:d0,e=ze(e!==void 0?e:Bh);const s=ae(n),r=wt(n);i=i>0?i:Math.max(r/e[0],s/e[1]);const o=t+1,a=new Array(o);for(let l=0;l<o;++l)a[l]=i/Math.pow(2,l);return a}function x2(n,t,e,i){const s=Bc(n);return _2(s,t,e,i)}function Bc(n){n=at(n);let t=n.getExtent();if(!t){const e=180*qs.degrees/n.getMetersPerUnit();t=en(-e,-e,e,e)}return t}class T2 extends yc{constructor(t){super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate}),this.on,this.once,this.un,this.opaque_=t.opaque!==void 0?t.opaque:!1,this.tilePixelRatio_=t.tilePixelRatio!==void 0?t.tilePixelRatio:1,this.tileGrid=t.tileGrid!==void 0?t.tileGrid:null;const e=[256,256];this.tileGrid&&ze(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),e),this.tileCache=new If(t.cacheSize||0),this.tmpSize=[0,0],this.key_=t.key||"",this.tileOptions={transition:t.transition,interpolate:t.interpolate},this.zDirection=t.zDirection?t.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(t,e){const i=this.getTileCacheForProjection(t);i&&i.expireCache(e)}forEachLoadedTile(t,e,i,s){const r=this.getTileCacheForProjection(t);if(!r)return!1;let o=!0,a,l,h;for(let c=i.minX;c<=i.maxX;++c)for(let u=i.minY;u<=i.maxY;++u)l=Ja(e,c,u),h=!1,r.containsKey(l)&&(a=r.get(l),h=a.getState()===j.LOADED,h&&(h=s(a)!==!1)),h||(o=!1);return o}getGutterForProjection(t){return 0}getKey(){return this.key_}setKey(t){this.key_!==t&&(this.key_=t,this.changed())}getOpaque(t){return this.opaque_}getResolutions(t){const e=t?this.getTileGridForProjection(t):this.tileGrid;return e?e.getResolutions():null}getTile(t,e,i,s,r){return q()}getTileGrid(){return this.tileGrid}getTileGridForProjection(t){return this.tileGrid?this.tileGrid:Qf(t)}getTileCacheForProjection(t){const e=this.getProjection();return mt(e===null||qe(e,t),"A VectorTile source can only be rendered if it has a projection compatible with the view projection."),this.tileCache}getTilePixelRatio(t){return this.tilePixelRatio_}getTilePixelSize(t,e,i){const s=this.getTileGridForProjection(i),r=this.getTilePixelRatio(e),o=ze(s.getTileSize(t),this.tmpSize);return r==1?o:_w(o,r,this.tmpSize)}getTileCoordForTileUrlFunction(t,e){e=e!==void 0?e:this.getProjection();const i=this.getTileGridForProjection(e);return this.getWrapX()&&e.isGlobal()&&(t=y2(i,t,e)),RC(t,i)?t:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(t,e){const i=this.getTileCacheForProjection(e);t>i.highWaterMark&&(i.highWaterMark=t)}useTile(t,e,i,s){}}class M2 extends Gi{constructor(t,e){super(t),this.tile=e}}function C2(n,t){const e=/\{z\}/g,i=/\{x\}/g,s=/\{y\}/g,r=/\{-y\}/g;return(function(o,a,l){if(o)return n.replace(e,o[0].toString()).replace(i,o[1].toString()).replace(s,o[2].toString()).replace(r,function(){const h=o[0],c=t.getFullTileRange(h);if(!c)throw new Error("The {-y} placeholder requires a tile grid with extent");return(c.getHeight()-o[2]-1).toString()})})}function R2(n,t){const e=n.length,i=new Array(e);for(let s=0;s<e;++s)i[s]=C2(n[s],t);return Eh(i)}function Eh(n){return n.length===1?n[0]:(function(t,e,i){if(!t)return;const s=vf(t),r=En(s,n.length);return n[r](t,e,i)})}function em(n){const t=[];let e=/\{([a-z])-([a-z])\}/.exec(n);if(e){const i=e[1].charCodeAt(0),s=e[2].charCodeAt(0);let r;for(r=i;r<=s;++r)t.push(n.replace(e[0],String.fromCharCode(r)));return t}if(e=/\{(\d+)-(\d+)\}/.exec(n),e){const i=parseInt(e[2],10);for(let s=parseInt(e[1],10);s<=i;s++)t.push(n.replace(e[0],s.toString()));return t}return t.push(n),t}class Hc extends T2{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,opaque:t.opaque,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tilePixelRatio:t.tilePixelRatio,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===Hc.prototype.tileUrlFunction,this.tileLoadFunction=t.tileLoadFunction,t.tileUrlFunction&&(this.tileUrlFunction=t.tileUrlFunction),this.urls=null,t.urls?this.setUrls(t.urls):t.url&&this.setUrl(t.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(t){const e=t.target,i=Tt(e),s=e.getState();let r;s==j.LOADING?(this.tileLoadingKeys_[i]=!0,r=Gl.TILELOADSTART):i in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[i],r=s==j.ERROR?Gl.TILELOADERROR:s==j.LOADED?Gl.TILELOADEND:void 0),r!=null&&this.dispatchEvent(new M2(r,e))}setTileLoadFunction(t){this.tileCache.clear(),this.tileLoadFunction=t,this.changed()}setTileUrlFunction(t,e){this.tileUrlFunction=t,this.tileCache.pruneExceptNewestZ(),typeof e<"u"?this.setKey(e):this.changed()}setUrl(t){const e=em(t);this.urls=e,this.setUrls(e)}setUrls(t){this.urls=t;const e=t.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(R2(t,this.tileGrid),e):this.setKey(e)}tileUrlFunction(t,e,i){}useTile(t,e,i){const s=Ja(t,e,i);this.tileCache.containsKey(s)&&this.tileCache.get(s)}}class Yc extends Hc{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,opaque:t.opaque,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction?t.tileLoadFunction:E2,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate!==void 0?t.interpolate:!0,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.crossOrigin=t.crossOrigin!==void 0?t.crossOrigin:null,this.tileClass=t.tileClass!==void 0?t.tileClass:Rf,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=t.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const t in this.tileCacheForProjection)if(this.tileCacheForProjection[t].canExpireCache())return!0;return!1}expireCache(t,e){const i=this.getTileCacheForProjection(t);this.tileCache.expireCache(this.tileCache==i?e:{});for(const s in this.tileCacheForProjection){const r=this.tileCacheForProjection[s];r.expireCache(r==i?e:{})}}getGutterForProjection(t){return this.getProjection()&&t&&!qe(this.getProjection(),t)?0:this.getGutter()}getGutter(){return 0}getKey(){let t=super.getKey();return this.getInterpolate()||(t+=":disable-interpolation"),t}getOpaque(t){return this.getProjection()&&t&&!qe(this.getProjection(),t)?!1:super.getOpaque(t)}getTileGridForProjection(t){const e=this.getProjection();if(this.tileGrid&&(!e||qe(e,t)))return this.tileGrid;const i=Tt(t);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=Qf(t)),this.tileGridForProjection[i]}getTileCacheForProjection(t){const e=this.getProjection();if(!e||qe(e,t))return this.tileCache;const i=Tt(t);return i in this.tileCacheForProjection||(this.tileCacheForProjection[i]=new If(this.tileCache.highWaterMark)),this.tileCacheForProjection[i]}createTile_(t,e,i,s,r,o){const a=[t,e,i],l=this.getTileCoordForTileUrlFunction(a,r),h=l?this.tileUrlFunction(l,s,r):void 0,c=new this.tileClass(a,h!==void 0?j.IDLE:j.EMPTY,h!==void 0?h:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return c.key=o,c.addEventListener($.CHANGE,this.handleTileChange.bind(this)),c}getTile(t,e,i,s,r){const o=this.getProjection();if(!o||!r||qe(o,r))return this.getTileInternal(t,e,i,s,o||r);const a=this.getTileCacheForProjection(r),l=[t,e,i];let h;const c=Ef(l);a.containsKey(c)&&(h=a.get(c));const u=this.getKey();if(h&&h.key==u)return h;const d=this.getTileGridForProjection(o),g=this.getTileGridForProjection(r),f=this.getTileCoordForTileUrlFunction(l,r),m=new Ch(o,d,r,g,l,f,this.getTilePixelRatio(s),this.getGutter(),(w,_,p,x)=>this.getTileInternal(w,_,p,x,o),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return m.key=u,h?(m.interimTile=h,m.refreshInterimChain(),a.replace(c,m)):a.set(c,m),m}getTileInternal(t,e,i,s,r){let o=null;const a=Ja(t,e,i),l=this.getKey();if(!this.tileCache.containsKey(a))o=this.createTile_(t,e,i,s,r,l),this.tileCache.set(a,o);else if(o=this.tileCache.get(a),o.key!=l){const h=o;o=this.createTile_(t,e,i,s,r,l),h.getState()==j.IDLE?o.interimTile=h.interimTile:o.interimTile=h,o.refreshInterimChain(),this.tileCache.replace(a,o)}return o}setRenderReprojectionEdges(t){if(this.renderReprojectionEdges_!=t){this.renderReprojectionEdges_=t;for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear();this.changed()}}setTileGridForProjection(t,e){const i=at(t);if(i){const s=Tt(i);s in this.tileGridForProjection||(this.tileGridForProjection[s]=e)}}clear(){super.clear();for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear()}}function E2(n,t){n.getImage().src=t}class v2 extends Yc{constructor(t){t=t||{};const e=t.projection!==void 0?t.projection:"EPSG:3857",i=t.tileGrid!==void 0?t.tileGrid:p2({extent:Bc(e),maxResolution:t.maxResolution,maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});super({attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,opaque:t.opaque,projection:e,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX!==void 0?t.wrapX:!0,transition:t.transition,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.gutter_=t.gutter!==void 0?t.gutter:0}getGutter(){return this.gutter_}}class I2 extends hf{constructor(t,e,i,s,r,o,a){let l=t.getExtent();l&&t.canWrapX()&&(l=l.slice(),l[0]=-1/0,l[2]=1/0);let h=e.getExtent();h&&e.canWrapX()&&(h=h.slice(),h[0]=-1/0,h[2]=1/0);const c=h?Gs(i,h):i,u=fi(c),d=ba(t,e,u,s),g=qf,f=new Zf(t,e,c,l,d*g,s),m=f.calculateSourceExtent(),w=dr(m)?null:o(m,d,r),_=w?Q.IDLE:Q.EMPTY,p=w?w.getPixelRatio():1;super(i,s,p,_),this.targetProj_=e,this.maxSourceExtent_=l,this.triangulation_=f,this.targetResolution_=s,this.targetExtent_=i,this.sourceImage_=w,this.sourcePixelRatio_=p,this.interpolate_=a,this.canvas_=null,this.sourceListenerKey_=null}disposeInternal(){this.state==Q.LOADING&&this.unlistenSource_(),super.disposeInternal()}getImage(){return this.canvas_}getProjection(){return this.targetProj_}reproject_(){const t=this.sourceImage_.getState();if(t==Q.LOADED){const e=wt(this.targetExtent_)/this.targetResolution_,i=ae(this.targetExtent_)/this.targetResolution_;this.canvas_=$f(e,i,this.sourcePixelRatio_,Rh(this.sourceImage_.getResolution()),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_,!0)}this.state=t,this.changed()}load(){if(this.state==Q.IDLE){this.state=Q.LOADING,this.changed();const t=this.sourceImage_.getState();t==Q.LOADED||t==Q.ERROR?this.reproject_():(this.sourceListenerKey_=ot(this.sourceImage_,$.CHANGE,function(e){const i=this.sourceImage_.getState();(i==Q.LOADED||i==Q.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}}unlistenSource_(){St(this.sourceListenerKey_),this.sourceListenerKey_=null}}const Rn=4,Wl={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"};class b2 extends Gi{constructor(t,e){super(t),this.image=e}}class hR extends yc{constructor(t){super({attributions:t.attributions,projection:t.projection,state:t.state,interpolate:t.interpolate!==void 0?t.interpolate:!0}),this.on,this.once,this.un,this.loader=t.loader||null,this.resolutions_=t.resolutions!==void 0?t.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0,this.image=null,this.wantedExtent_,this.wantedResolution_,this.static_=t.loader?t.loader.length===0:!1,this.wantedProjection_=null}getResolutions(){return this.resolutions_}setResolutions(t){this.resolutions_=t}findNearestResolution(t){const e=this.getResolutions();if(e){const i=Aa(e,t,0);t=e[i]}return t}getImage(t,e,i,s){const r=this.getProjection();if(!r||!s||qe(r,s))return r&&(s=r),this.getImageInternal(t,e,i,s);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&qe(this.reprojectedImage_.getProjection(),s)&&this.reprojectedImage_.getResolution()==e&&is(this.reprojectedImage_.getExtent(),t))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new I2(r,s,t,e,i,(o,a,l)=>this.getImageInternal(o,a,l,r),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}getImageInternal(t,e,i,s){if(this.loader){const r=im(t,e,i,1),o=this.findNearestResolution(e);if(this.image&&(this.static_||this.wantedProjection_===s&&(this.wantedExtent_&&hi(this.wantedExtent_,r)||hi(this.image.getExtent(),r))&&(this.wantedResolution_&&Rh(this.wantedResolution_)===o||Rh(this.image.getResolution())===o)))return this.image;this.wantedProjection_=s,this.wantedExtent_=r,this.wantedResolution_=o,this.image=new hf(r,o,i,this.loader),this.image.addEventListener($.CHANGE,this.handleImageChange.bind(this))}return this.image}handleImageChange(t){const e=t.target;let i;switch(e.getState()){case Q.LOADING:this.loading=!0,i=Wl.IMAGELOADSTART;break;case Q.LOADED:this.loading=!1,i=Wl.IMAGELOADEND;break;case Q.ERROR:this.loading=!1,i=Wl.IMAGELOADERROR;break;default:return}this.hasListener(i)&&this.dispatchEvent(new b2(i,e))}}function cR(n,t){n.getImage().src=t}function im(n,t,e,i){const s=t/e,r=fi(n),o=pn(wt(n)/s,Rn),a=pn(ae(n)/s,Rn),l=pn((i-1)*o/2,Rn),h=o+2*l,c=pn((i-1)*a/2,Rn),u=a+2*c;return Xr(r,s,0,[h,u])}function lo(n,t){const e=[];Object.keys(t).forEach(function(s){t[s]!==null&&t[s]!==void 0&&e.push(s+"="+encodeURIComponent(t[s]))});const i=e.join("&");return n=n.replace(/[?&]$/,""),n+=n.includes("?")?"&":"?",n+i}const La="1.3.0",Td=[101,101];function nm(n,t,e,i,s){s.WIDTH=e[0],s.HEIGHT=e[1];const r=i.getAxisOrientation();let o;const a=Oh(s.VERSION,"1.3")>=0;return s[a?"CRS":"SRS"]=i.getCode(),a&&r.substr(0,2)=="ne"?o=[t[1],t[0],t[3],t[2]]:o=t,s.BBOX=o.join(","),lo(n,s)}function sm(n,t,e,i,s,r,o){r=Object.assign({REQUEST:"GetMap"},r);const a=t/e,l=[ou(wt(n)/a,Rn),ou(ae(n)/a,Rn)];if(e!=1)switch(o){case"geoserver":const c=90*e+.5|0;"FORMAT_OPTIONS"in r?r.FORMAT_OPTIONS+=";dpi:"+c:r.FORMAT_OPTIONS="dpi:"+c;break;case"mapserver":r.MAP_RESOLUTION=90*e;break;case"carmentaserver":case"qgis":r.DPI=90*e;break;default:throw new Error("Unknown `serverType` configured")}return nm(s,n,l,i,r)}function Sa(n,t){return Object.assign({REQUEST:t,SERVICE:"WMS",VERSION:La,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},n)}function uR(n){const t=n.hidpi===void 0?!0:n.hidpi,e=at(n.projection||"EPSG:3857"),i=n.ratio||1.5,s=n.load||QM;return(r,o,a)=>{r=im(r,o,a,i),a!=1&&(!t||n.serverType===void 0)&&(a=1);const l=sm(r,o,a,e,n.url,Sa(n.params,"GetMap"),n.serverType),h=new Image;return n.crossOrigin!==null&&(h.crossOrigin=n.crossOrigin),s(h,l).then(c=>({image:c,extent:r,pixelRatio:a}))}}function dR(n,t,e){if(n.url===void 0)return;const i=at(n.projection||"EPSG:3857"),s=Xr(t,e,0,Td),r={QUERY_LAYERS:n.params.LAYERS,INFO_FORMAT:"application/json"};Object.assign(r,Sa(n.params,"GetFeatureInfo"),n.params);const o=Ss((t[0]-s[0])/e,Rn),a=Ss((s[3]-t[1])/e,Rn),l=Oh(r.VERSION,"1.3")>=0;return r[l?"I":"X"]=o,r[l?"J":"Y"]=a,nm(n.url,s,Td,i,r)}function gR(n,t){if(n.url===void 0)return;const e={SERVICE:"WMS",VERSION:La,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(n.params===void 0||n.params.LAYER===void 0){const i=n.params.LAYERS;if(!(!Array.isArray(i)||i.length===1))return;e.LAYER=i}if(t!==void 0){const i=at(n.projection||"EPSG:3857").getMetersPerUnit()||1,s=28e-5;e.SCALE=t*i/s}return Object.assign(e,n.params),lo(n.url,e)}class L2 extends Yc{constructor(t){t=t||{};const e=Object.assign({},t.params),i="TRANSPARENT"in e?e.TRANSPARENT:!0;super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,opaque:!i,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileClass:t.tileClass,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction,url:t.url,urls:t.urls,wrapX:t.wrapX!==void 0?t.wrapX:!0,transition:t.transition,zDirection:t.zDirection}),this.gutter_=t.gutter!==void 0?t.gutter:0,this.params_=e,this.v13_=!0,this.serverType_=t.serverType,this.hidpi_=t.hidpi!==void 0?t.hidpi:!0,this.tmpExtent_=Be(),this.updateV13_(),this.setKey(this.getKeyForParams_())}getFeatureInfoUrl(t,e,i,s){const r=at(i),o=this.getProjection()||r;let a=this.getTileGrid();a||(a=this.getTileGridForProjection(o));const l=Yd(t,r,o),h=ba(o,r,t,e),c=a.getZForResolution(h,this.zDirection),u=a.getResolution(c),d=a.getTileCoordForCoordAndZ(l,c);if(a.getResolutions().length<=d[0])return;let g=a.getTileCoordExtent(d,this.tmpExtent_);const f=this.gutter_;f!==0&&(g=Yr(g,u*f,g));const m={QUERY_LAYERS:this.params_.LAYERS};Object.assign(m,Sa(this.params_,"GetFeatureInfo"),s);const w=Math.floor((l[0]-g[0])/u),_=Math.floor((g[3]-l[1])/u);return m[this.v13_?"I":"X"]=w,m[this.v13_?"J":"Y"]=_,this.getRequestUrl_(d,g,1,o||r,m)}getLegendUrl(t,e){if(this.urls[0]===void 0)return;const i={SERVICE:"WMS",VERSION:La,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(e===void 0||e.LAYER===void 0){const s=this.params_.LAYERS;if(!(!Array.isArray(s)||s.length===1))return;i.LAYER=s}if(t!==void 0){const s=this.getProjection()?this.getProjection().getMetersPerUnit():1,r=28e-5;i.SCALE=t*s/r}return Object.assign(i,e),lo(this.urls[0],i)}getGutter(){return this.gutter_}getParams(){return this.params_}getRequestUrl_(t,e,i,s,r){const o=this.urls;if(!o)return;let a;if(o.length==1)a=o[0];else{const l=En(vf(t),o.length);a=o[l]}return sm(e,(this.tileGrid||this.getTileGridForProjection(s)).getResolution(t[0]),i,s,a,r,this.serverType_)}getTilePixelRatio(t){return!this.hidpi_||this.serverType_===void 0?1:t}getKeyForParams_(){let t=0;const e=[];for(const i in this.params_)e[t++]=i+"-"+this.params_[i];return e.join("/")}updateParams(t){Object.assign(this.params_,t),this.updateV13_(),this.setKey(this.getKeyForParams_())}updateV13_(){const t=this.params_.VERSION||La;this.v13_=Oh(t,"1.3")>=0}tileUrlFunction(t,e,i){let s=this.getTileGrid();if(s||(s=this.getTileGridForProjection(i)),s.getResolutions().length<=t[0])return;e!=1&&(!this.hidpi_||this.serverType_===void 0)&&(e=1);const r=s.getResolution(t[0]);let o=s.getTileCoordExtent(t,this.tmpExtent_);const a=this.gutter_;a!==0&&(o=Yr(o,r*a,o));const l=Object.assign({},Sa(this.params_,"GetMap"));return this.getRequestUrl_(t,o,e,i,l)}}class Md extends Yc{constructor(t){const e=t.requestEncoding!==void 0?t.requestEncoding:"KVP",i=t.tileGrid;let s=t.urls;s===void 0&&t.url!==void 0&&(s=em(t.url)),super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileClass:t.tileClass,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,urls:s,wrapX:t.wrapX!==void 0?t.wrapX:!1,transition:t.transition,zDirection:t.zDirection}),this.version_=t.version!==void 0?t.version:"1.0.0",this.format_=t.format!==void 0?t.format:"image/jpeg",this.dimensions_=t.dimensions!==void 0?t.dimensions:{},this.layer_=t.layer,this.matrixSet_=t.matrixSet,this.style_=t.style,this.requestEncoding_=e,this.setKey(this.getKeyForDimensions_()),s&&s.length>0&&(this.tileUrlFunction=Eh(s.map(this.createFromWMTSTemplate.bind(this))))}setUrls(t){this.urls=t;const e=t.join(`
`);this.setTileUrlFunction(Eh(t.map(this.createFromWMTSTemplate.bind(this))),e)}getDimensions(){return this.dimensions_}getFormat(){return this.format_}getLayer(){return this.layer_}getMatrixSet(){return this.matrixSet_}getRequestEncoding(){return this.requestEncoding_}getStyle(){return this.style_}getVersion(){return this.version_}getKeyForDimensions_(){const t=this.urls?this.urls.slice(0):[];for(const e in this.dimensions_)t.push(e+"-"+this.dimensions_[e]);return t.join("/")}updateDimensions(t){Object.assign(this.dimensions_,t),this.setKey(this.getKeyForDimensions_())}createFromWMTSTemplate(t){const e=this.requestEncoding_,i={layer:this.layer_,style:this.style_,tilematrixset:this.matrixSet_};e=="KVP"&&Object.assign(i,{Service:"WMTS",Request:"GetTile",Version:this.version_,Format:this.format_}),t=e=="KVP"?lo(t,i):t.replace(/\{(\w+?)\}/g,function(o,a){return a.toLowerCase()in i?i[a.toLowerCase()]:o});const s=this.tileGrid,r=this.dimensions_;return(function(o,a,l){if(!o)return;const h={TileMatrix:s.getMatrixId(o[0]),TileCol:o[1],TileRow:o[2]};Object.assign(h,r);let c=t;return e=="KVP"?c=lo(c,h):c=c.replace(/\{(\w+?)\}/g,function(u,d){return h[d]}),c})}}function fR(n,t){const i=n.Contents.Layer.find(function(A){return A.Identifier==t.layer});if(!i)return null;const s=n.Contents.TileMatrixSet;let r;i.TileMatrixSetLink.length>1?"projection"in t?r=i.TileMatrixSetLink.findIndex(function(A){const gt=s.find(function(P){return P.Identifier==A.TileMatrixSet}).SupportedCRS,k=at(gt),z=at(t.projection);return k&&z?qe(k,z):gt==t.projection}):r=i.TileMatrixSetLink.findIndex(function(A){return A.TileMatrixSet==t.matrixSet}):r=0,r<0&&(r=0);const o=i.TileMatrixSetLink[r].TileMatrixSet,a=i.TileMatrixSetLink[r].TileMatrixSetLimits;let l=i.Format[0];"format"in t&&(l=t.format),r=i.Style.findIndex(function(A){return"style"in t?A.Title==t.style:A.isDefault}),r<0&&(r=0);const h=i.Style[r].Identifier,c={};"Dimension"in i&&i.Dimension.forEach(function(A,B,gt){const k=A.Identifier;let z=A.Default;z===void 0&&(z=A.Value[0]),c[k]=z});const d=n.Contents.TileMatrixSet.find(function(A){return A.Identifier==o});let g;const f=d.SupportedCRS;if(f&&(g=at(f)),"projection"in t){const A=at(t.projection);A&&(!g||qe(A,g))&&(g=A)}let m=!1;const w=g.getAxisOrientation().substr(0,2)=="ne";let _=d.TileMatrix[0],p={MinTileCol:0,MinTileRow:0,MaxTileCol:_.MatrixWidth-1,MaxTileRow:_.MatrixHeight-1};if(a){p=a[a.length-1];const A=d.TileMatrix.find(B=>B.Identifier===p.TileMatrix||d.Identifier+":"+B.Identifier===p.TileMatrix);A&&(_=A)}const x=_.ScaleDenominator*28e-5/g.getMetersPerUnit(),T=w?[_.TopLeftCorner[1],_.TopLeftCorner[0]]:_.TopLeftCorner,M=_.TileWidth*x,C=_.TileHeight*x;let I=d.BoundingBox;I&&w&&(I=[I[1],I[0],I[3],I[2]]);let v=[T[0]+M*p.MinTileCol,T[1]-C*(1+p.MaxTileRow),T[0]+M*(1+p.MaxTileCol),T[1]-C*p.MinTileRow];if(I!==void 0&&!hi(I,v)){const A=i.WGS84BoundingBox,B=at("EPSG:4326").getExtent();if(v=I,A)m=A[0]===B[0]&&A[2]===B[2];else{const gt=kh(I,d.SupportedCRS,"EPSG:4326");m=gt[0]-1e-10<=B[0]&&gt[2]+1e-10>=B[2]}}const K=w2(d,v,a),W=[];let X=t.requestEncoding;if(X=X!==void 0?X:"","OperationsMetadata"in n&&"GetTile"in n.OperationsMetadata){const A=n.OperationsMetadata.GetTile.DCP.HTTP.Get;for(let B=0,gt=A.length;B<gt;++B)if(A[B].Constraint){const z=A[B].Constraint.find(function(P){return P.name=="GetEncoding"}).AllowedValues.Value;if(X===""&&(X=z[0]),X==="KVP")z.includes("KVP")&&W.push(A[B].href);else break}else A[B].href&&(X="KVP",W.push(A[B].href))}return W.length===0&&(X="REST",i.ResourceURL.forEach(function(A){A.resourceType==="tile"&&(l=A.format,W.push(A.template))})),{urls:W,layer:t.layer,matrixSet:o,format:l,projection:g,requestEncoding:X,tileGrid:K,style:h,dimensions:c,wrapX:m,crossOrigin:t.crossOrigin}}var S2=Object.getOwnPropertyDescriptor,N2=(n,t,e,i)=>{for(var s=i>1?void 0:i?S2(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let Cd=class extends Na{connectedCallback(){super.connectedCallback(),this._configureMap()}get type(){return this.getAttribute("type")||"wmts"}get url(){return this.getAttribute("url")||this._url}set url(n){this._url=n}get layer(){return this.getAttribute("layer")||this._layer}set layer(n){this._layer=n}get title(){return this.getAttribute("title")||this._title}set title(n){this._title=n}get _map(){if(this.parentNode)return this.parentNode.map}get _projection(){if(this.parentNode&&this.parentNode instanceof hr)return this.parentNode._projection}get _WMTSSource(){return this._wmtsSource=this._wmtsSource||this._createWMTSSource(),this._wmtsSource}get _vectorSource(){return this._createdVectorSource=this._createdVectorSource||this._createVectorSource(),this._createdVectorSource}get _hasBackgroundLayer(){return this.hasAttribute("background-layer")}get _backgroundType(){return this.getAttribute("background-type")||void 0}get _backgroundOptions(){if(!this._hasBackgroundLayer)return;if(this._hasBackgroundLayer&&!this._backgroundType&&!this.hasAttribute("background-options"))return{url:"https://cartoweb.wms.ngi.be/service",params:{FORMAT:"image/png",LAYERS:"crossborder,topo"}};const n=this.getAttribute("background-options");try{return JSON.parse(n)}catch(t){console.warn("Invalid background-options JSON:",t);return}}get _extent(){return this._projection?.getExtent()}get _matrixSet(){switch(this._projection?.getCode()){case sf():return"BPL2008VL";case of():return"BPL72VL";default:return"WGS84VL"}}_configureMap(){this._map&&this._map.addBaseLayerAndOverlayMapLayer(this._createBaseLayer(),this._createBaseLayer())}_createWMTSSource(){const n=wt(this._extent)/256,t=new Array(16),e=new Array(16);for(let i=0;i<16;++i)t[i]=n/Math.pow(2,i),e[i]=i;return new Md({url:this.url,layer:this.layer,matrixSet:this._matrixSet,format:"image/png",projection:this._projection,tileGrid:new Jf({extent:this._extent,origin:rn(this._extent),resolutions:t,matrixIds:e}),style:""})}_createVectorSource(){const n=this;return new dd({format:new Xa({dataProjection:n._projection}),url(){return`${n.url}&typeName=${n.layer}`},strategy:wC})}_createBackgroundLayer(){const n=this._backgroundOptions,t=.3;switch(this._backgroundType){case"xyz":return new Jo({source:new v2(n),opacity:t});case"wmts":return new Jo({source:new Md(n),opacity:t});case"vector":return new ld({source:new dd(n),opacity:t});case"wms":default:return new Jo({source:new L2(n),opacity:t})}}_createBaseLayer(){const n=this.hasAttribute("background-layer"),t=[];switch(n&&t.push(this._createBackgroundLayer()),this.type){case"wmts":t.push(new Jo({title:this.title,type:"base",source:this._WMTSSource}));break;case"wfs":t.push(new ld({source:this._vectorSource,style:new Se({stroke:new gi({color:"rgba(0, 0, 0, 1.0)",width:1}),fill:new Qe({color:"rgba(255, 0, 0, 1.0)"})})}));break;default:return null}return new Fn({layers:t})}};Cd=N2([vh("vl-map-baselayer")],Cd);export{pC as $,dr as A,X2 as B,vo as C,H2 as D,$ as E,Qe as F,Xa as G,rw as H,_o as I,Br as J,Je as K,ve as L,co as M,iR as N,Cg as O,ha as P,Li as Q,Gi as R,Se as S,Jo as T,Y2 as U,Mh as V,uM as W,v2 as X,B2 as Y,Es as Z,nR as _,Cd as a,ka as a$,cw as a0,po as a1,ow as a2,z2 as a3,nw as a4,hd as a5,si as a6,Hl as a7,Kt as a8,K2 as a9,LT as aA,ch as aB,Mu as aC,Js as aD,at as aE,en as aF,ET as aG,Z2 as aH,J2 as aI,tR as aJ,bT as aK,$2 as aL,kh as aM,wC as aN,gd as aO,cs as aP,be as aQ,Dd as aR,E0 as aS,Qd as aT,ho as aU,yg as aV,Ru as aW,wn as aX,xu as aY,iT as aZ,Zn as a_,qi as aa,ra as ab,ql as ac,Un as ad,Xd as ae,kd as af,Dn as ag,Vm as ah,D2 as ai,_e as aj,oT as ak,Q2 as al,IT as am,vT as an,q as ao,q2 as ap,mh as aq,Pt as ar,V2 as as,cc as at,gc as au,tg as av,j2 as aw,jg as ax,sT as ay,rT as az,gi as b,kt as b0,Ba as b1,xf as b2,Gs as b3,se as b4,Q as b5,Zt as b6,Ka as b7,ae as b8,nn as b9,Gh as ba,Ud as bb,hi as bc,hR as bd,cR as be,ba as bf,Yd as bg,dR as bh,gR as bi,uR as bj,QM as bk,r2 as bl,ot as bm,St as bn,P2 as bo,G2 as bp,L2 as c,Ia as d,hr as e,Md as f,Jf as g,rn as h,of as i,sf as j,wt as k,DM as l,ld as m,cr as n,fR as o,dd as p,mt as q,Tt as r,Od as s,Be as t,gm as u,Yr as v,Um as w,jm as x,fi as y,Eo as z};
