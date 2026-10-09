import{g as Ja,w as uc,i as dc,v as ym,F as wm}from"./iframe-CsVpDM3d.js";class Hi{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const cs={PROPERTYCHANGE:"propertychange"};class gc{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}function _m(n,t,e){let i,s;e=e||Pn;let r=0,o=n.length,a=!1;for(;r<o;)i=r+(o-r>>1),s=+e(n[i],t),s<0?r=i+1:(o=i,a=!s);return a?r:~r}function Pn(n,t){return n>t?1:n<t?-1:0}function Qa(n,t,e){if(n[0]<=t)return 0;const i=n.length;if(t<=n[i-1])return i-1;if(typeof e=="function"){for(let s=1;s<i;++s){const r=n[s];if(r===t)return s;if(r<t)return e(t,n[s-1],r)>0?s-1:s}return i-1}if(e>0){for(let s=1;s<i;++s)if(n[s]<t)return s-1;return i-1}if(e<0){for(let s=1;s<i;++s)if(n[s]<=t)return s;return i-1}for(let s=1;s<i;++s){if(n[s]==t)return s;if(n[s]<t)return n[s-1]-t<t-n[s]?s-1:s}return i-1}function pm(n,t,e){for(;t<e;){const i=n[t];n[t]=n[e],n[e]=i,++t,--e}}function Oi(n,t){const e=Array.isArray(t)?t:[t],i=e.length;for(let s=0;s<i;s++)n[n.length]=e[s]}function Bn(n,t){const e=n.length;if(e!==t.length)return!1;for(let i=0;i<e;i++)if(n[i]!==t[i])return!1;return!0}function xm(n,t,e){const i=t||Pn;return n.every(function(s,r){if(r===0)return!0;const o=i(n[r-1],s);return!(o>0||o===0)})}function so(){return!0}function Io(){return!1}function hr(){}function pg(n){let t=!1,e,i,s;return function(){const r=Array.prototype.slice.call(arguments);return(!t||this!==s||!Bn(r,i))&&(t=!0,s=this,i=r,e=n.apply(this,arguments)),e}}function Tm(n){function t(){let e;try{e=n()}catch(i){return Promise.reject(i)}return e instanceof Promise?e:Promise.resolve(e)}return t()}function Lo(n){for(const t in n)delete n[t]}function us(n){let t;for(t in n)return!1;return!t}class So extends gc{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;const i=this.listeners_||(this.listeners_={}),s=i[t]||(i[t]=[]);s.includes(e)||s.push(e)}dispatchEvent(t){const e=typeof t=="string",i=e?t:t.type,s=this.listeners_&&this.listeners_[i];if(!s)return;const r=e?new Hi(t):t;r.target||(r.target=this.eventTarget_||this);const o=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});i in o||(o[i]=0,a[i]=0),++o[i];let l;for(let h=0,c=s.length;h<c;++h)if("handleEvent"in s[h]?l=s[h].handleEvent(r):l=s[h].call(this,r),l===!1||r.propagationStopped){l=!1;break}if(--o[i]===0){let h=a[i];for(delete a[i];h--;)this.removeEventListener(i,hr);delete o[i]}return l}disposeInternal(){this.listeners_&&Lo(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return this.listeners_?t?t in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(t,e){if(!this.listeners_)return;const i=this.listeners_[t];if(!i)return;const s=i.indexOf(e);s!==-1&&(this.pendingRemovals_&&t in this.pendingRemovals_?(i[s]=hr,++this.pendingRemovals_[t]):(i.splice(s,1),i.length===0&&delete this.listeners_[t]))}}const $={CHANGE:"change",ERROR:"error",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function ot(n,t,e,i,s){if(i&&i!==n&&(e=e.bind(i)),s){const o=e;e=function(){n.removeEventListener(t,e),o.apply(this,arguments)}}const r={target:n,type:t,listener:e};return n.addEventListener(t,e),r}function ro(n,t,e,i){return ot(n,t,e,i,!0)}function Nt(n){n&&n.target&&(n.target.removeEventListener(n.type,n.listener),Lo(n))}class No extends So{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent($.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){const i=t.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=ot(this,t[r],e);return s}return ot(this,t,e)}onceInternal(t,e){let i;if(Array.isArray(t)){const s=t.length;i=new Array(s);for(let r=0;r<s;++r)i[r]=ro(this,t[r],e)}else i=ro(this,t,e);return e.ol_key=i,i}unInternal(t,e){const i=e.ol_key;if(i)xg(i);else if(Array.isArray(t))for(let s=0,r=t.length;s<r;++s)this.removeEventListener(t[s],e);else this.removeEventListener(t,e)}}No.prototype.on;No.prototype.once;No.prototype.un;function xg(n){if(Array.isArray(n))for(let t=0,e=n.length;t<e;++t)Nt(n[t]);else Nt(n)}function q(){throw new Error("Unimplemented abstract method.")}let Mm=0;function Mt(n){return n.ol_uid||(n.ol_uid=String(++Mm))}class Wu extends Hi{constructor(t,e,i){super(t),this.key=e,this.oldValue=i}}class xi extends No{constructor(t){super(),this.on,this.once,this.un,Mt(this),this.values_=null,t!==void 0&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let i;i=`change:${t}`,this.hasListener(i)&&this.dispatchEvent(new Wu(i,t,e)),i=cs.PROPERTYCHANGE,this.hasListener(i)&&this.dispatchEvent(new Wu(i,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,i){const s=this.values_||(this.values_={});if(i)s[t]=e;else{const r=s[t];s[t]=e,r!==e&&this.notify(t,r)}}setProperties(t,e){for(const i in t)this.set(i,t[i],e)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){const i=this.values_[t];delete this.values_[t],us(this.values_)&&(this.values_=null),e||this.notify(t,i)}}}const Ei={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"},Kn=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",Cm=Kn.includes("firefox"),Rm=Kn.includes("safari")&&!Kn.includes("chrom");Rm&&(Kn.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(Kn));const Em=Kn.includes("webkit")&&!Kn.includes("edge"),Tg=Kn.includes("macintosh"),Mg=typeof devicePixelRatio<"u"?devicePixelRatio:1,fc=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,mc=typeof Image<"u"&&Image.prototype.decode,vm=typeof createImageBitmap=="function",Cg=(function(){let n=!1;try{const t=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("_",null,t),window.removeEventListener("_",null,t)}catch{}return n})();function Te(n,t,e,i){let s;return e&&e.length?s=e.shift():fc?s=new OffscreenCanvas(n||300,t||300):s=document.createElement("canvas"),n&&(s.width=n),t&&(s.height=t),s.getContext("2d",i)}function tl(n){const t=n.canvas;t.width=1,t.height=1,n.clearRect(0,0,1,1)}function bm(n){let t=n.offsetWidth;const e=getComputedStyle(n);return t+=parseInt(e.marginLeft,10)+parseInt(e.marginRight,10),t}function Im(n){let t=n.offsetHeight;const e=getComputedStyle(n);return t+=parseInt(e.marginTop,10)+parseInt(e.marginBottom,10),t}function cr(n,t){const e=t.parentNode;e&&e.replaceChild(n,t)}function Ma(n){return n&&n.parentNode?n.parentNode.removeChild(n):null}function Rg(n){for(;n.lastChild;)n.removeChild(n.lastChild)}function Lm(n,t){const e=n.childNodes;for(let i=0;;++i){const s=e[i],r=t[i];if(!s&&!r)break;if(s!==r){if(!s){n.appendChild(r);continue}if(!r){n.removeChild(s),--i;continue}n.insertBefore(r,s)}}}class vr extends xi{constructor(t){super();const e=t.element;e&&!t.target&&!e.style.pointerEvents&&(e.style.pointerEvents="auto"),this.element=e||null,this.target_=null,this.map_=null,this.listenerKeys=[],t.render&&(this.render=t.render),t.target&&this.setTarget(t.target)}disposeInternal(){Ma(this.element),super.disposeInternal()}getMap(){return this.map_}setMap(t){this.map_&&Ma(this.element);for(let e=0,i=this.listenerKeys.length;e<i;++e)Nt(this.listenerKeys[e]);this.listenerKeys.length=0,this.map_=t,t&&((this.target_?this.target_:t.getOverlayContainerStopEvent()).appendChild(this.element),this.render!==hr&&this.listenerKeys.push(ot(t,Ei.POSTRENDER,this.render,this)),t.render())}render(t){}setTarget(t){this.target_=typeof t=="string"?document.getElementById(t):t}}const sa="ol-hidden",Sm="ol-selectable",xs="ol-unselectable",Bu="ol-unsupported",Ao="ol-control",Ca="ol-collapsed",Nm=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""),"i"),Hu=["style","variant","weight","size","lineHeight","family"],Eg=function(n){const t=n.match(Nm);if(!t)return null;const e={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"};for(let i=0,s=Hu.length;i<s;++i){const r=t[i+1];r!==void 0&&(e[Hu[i]]=r)}return e.families=e.family.split(/,\s?/),e};class Am extends vr{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=t.collapsed!==void 0?t.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=t.collapsible!==void 0,this.collapsible_=t.collapsible!==void 0?t.collapsible:!0,this.collapsible_||(this.collapsed_=!1);const e=t.className!==void 0?t.className:"ol-attribution",i=t.tipLabel!==void 0?t.tipLabel:"Attributions",s=t.expandClassName!==void 0?t.expandClassName:e+"-expand",r=t.collapseLabel!==void 0?t.collapseLabel:"›",o=t.collapseClassName!==void 0?t.collapseClassName:e+"-collapse";typeof r=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=r,this.collapseLabel_.className=o):this.collapseLabel_=r;const a=t.label!==void 0?t.label:"i";typeof a=="string"?(this.label_=document.createElement("span"),this.label_.textContent=a,this.label_.className=s):this.label_=a;const l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=i,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener($.CLICK,this.handleClick_.bind(this),!1);const h=e+" "+xs+" "+Ao+(this.collapsed_&&this.collapsible_?" "+Ca:"")+(this.collapsible_?"":" ol-uncollapsible"),c=this.element;c.className=h,c.appendChild(this.toggleButton_),c.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(t){const e=Array.from(new Set(this.getMap().getAllLayers().flatMap(s=>s.getAttributions(t)))),i=!this.getMap().getAllLayers().some(s=>s.getSource()&&s.getSource().getAttributionsCollapsible()===!1);return this.overrideCollapsible_||this.setCollapsible(i),e}updateElement_(t){if(!t){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const e=this.collectSourceAttributions_(t),i=e.length>0;if(this.renderedVisible_!=i&&(this.element.style.display=i?"":"none",this.renderedVisible_=i),!Bn(e,this.renderedAttributions_)){Rg(this.ulElement_);for(let s=0,r=e.length;s<r;++s){const o=document.createElement("li");o.innerHTML=e[s],this.ulElement_.appendChild(o)}this.renderedAttributions_=e}}handleClick_(t){t.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(Ca),this.collapsed_?cr(this.collapseLabel_,this.label_):cr(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(t){this.collapsible_!==t&&(this.collapsible_=t,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(t){this.userCollapsed_=t,!(!this.collapsible_||this.collapsed_===t)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(t){this.updateElement_(t.frameState)}}const Wt={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"},Xu=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],Uu={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"};class Om extends vr{constructor(t){t=t||{},super({element:document.createElement("div"),target:t.target}),this.on,this.once,this.un,this.keys_=t.keys!==void 0?t.keys:!1,this.source_=t.source,this.isInFullscreen_=!1,this.boundHandleMapTargetChange_=this.handleMapTargetChange_.bind(this),this.cssClassName_=t.className!==void 0?t.className:"ol-full-screen",this.documentListeners_=[],this.activeClassName_=t.activeClassName!==void 0?t.activeClassName.split(" "):[this.cssClassName_+"-true"],this.inactiveClassName_=t.inactiveClassName!==void 0?t.inactiveClassName.split(" "):[this.cssClassName_+"-false"];const e=t.label!==void 0?t.label:"⤢";this.labelNode_=typeof e=="string"?document.createTextNode(e):e;const i=t.labelActive!==void 0?t.labelActive:"×";this.labelActiveNode_=typeof i=="string"?document.createTextNode(i):i;const s=t.tipLabel?t.tipLabel:"Toggle full-screen";this.button_=document.createElement("button"),this.button_.title=s,this.button_.setAttribute("type","button"),this.button_.appendChild(this.labelNode_),this.button_.addEventListener($.CLICK,this.handleClick_.bind(this),!1),this.setClassName_(this.button_,this.isInFullscreen_),this.element.className=`${this.cssClassName_} ${xs} ${Ao}`,this.element.appendChild(this.button_)}handleClick_(t){t.preventDefault(),this.handleFullScreen_()}handleFullScreen_(){const t=this.getMap();if(!t)return;const e=t.getOwnerDocument();if(Yu(e))if(Vu(e))Km(e);else{let i;this.source_?i=typeof this.source_=="string"?e.getElementById(this.source_):this.source_:i=t.getTargetElement(),this.keys_?Pm(i):vg(i)}}handleFullScreenChange_(){const t=this.getMap();if(!t)return;const e=this.isInFullscreen_;this.isInFullscreen_=Vu(t.getOwnerDocument()),e!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?(cr(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(Uu.ENTERFULLSCREEN)):(cr(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(Uu.LEAVEFULLSCREEN)),t.updateSize())}setClassName_(t,e){e?(t.classList.remove(...this.inactiveClassName_),t.classList.add(...this.activeClassName_)):(t.classList.remove(...this.activeClassName_),t.classList.add(...this.inactiveClassName_))}setMap(t){const e=this.getMap();e&&e.removeChangeListener(Wt.TARGET,this.boundHandleMapTargetChange_),super.setMap(t),this.handleMapTargetChange_(),t&&t.addChangeListener(Wt.TARGET,this.boundHandleMapTargetChange_)}handleMapTargetChange_(){const t=this.documentListeners_;for(let i=0,s=t.length;i<s;++i)Nt(t[i]);t.length=0;const e=this.getMap();if(e){const i=e.getOwnerDocument();Yu(i)?this.element.classList.remove(Bu):this.element.classList.add(Bu);for(let s=0,r=Xu.length;s<r;++s)t.push(ot(i,Xu[s],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}}}function Yu(n){const t=n.body;return!!(t.webkitRequestFullscreen||t.requestFullscreen&&n.fullscreenEnabled)}function Vu(n){return!!(n.webkitIsFullScreen||n.fullscreenElement)}function vg(n){n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}function Pm(n){n.webkitRequestFullscreen?n.webkitRequestFullscreen():vg(n)}function Km(n){n.exitFullscreen?n.exitFullscreen():n.webkitExitFullscreen&&n.webkitExitFullscreen()}const mh={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown"},ur={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};let el=class{constructor(t){this.code_=t.code,this.units_=t.units,this.extent_=t.extent!==void 0?t.extent:null,this.worldExtent_=t.worldExtent!==void 0?t.worldExtent:null,this.axisOrientation_=t.axisOrientation!==void 0?t.axisOrientation:"enu",this.global_=t.global!==void 0?t.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||ur[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(t){this.global_=t,this.canWrapX_=!!(t&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(t){this.defaultTileGrid_=t}setExtent(t){this.extent_=t,this.canWrapX_=!!(this.global_&&t)}setWorldExtent(t){this.worldExtent_=t}setGetPointResolution(t){this.getPointResolutionFunc_=t}getPointResolutionFunc(){return this.getPointResolutionFunc_}};const Oo=6378137,Hs=Math.PI*Oo,Dm=[-Hs,-Hs,Hs,Hs],Fm=[-180,-85,180,85],ra=Oo*Math.log(Math.tan(Math.PI/2));class Ns extends el{constructor(t){super({code:t,units:"m",extent:Dm,global:!0,worldExtent:Fm,getPointResolution:function(e,i){return e/Math.cosh(i[1]/Oo)}})}}const ju=[new Ns("EPSG:3857"),new Ns("EPSG:102100"),new Ns("EPSG:102113"),new Ns("EPSG:900913"),new Ns("http://www.opengis.net/def/crs/EPSG/0/3857"),new Ns("http://www.opengis.net/gml/srs/epsg.xml#3857")];function km(n,t,e){const i=n.length;e=e>1?e:2,t===void 0&&(e>2?t=n.slice():t=new Array(i));for(let s=0;s<i;s+=e){t[s]=Hs*n[s]/180;let r=Oo*Math.log(Math.tan(Math.PI*(+n[s+1]+90)/360));r>ra?r=ra:r<-ra&&(r=-ra),t[s+1]=r}return t}function Gm(n,t,e){const i=n.length;e=e>1?e:2,t===void 0&&(e>2?t=n.slice():t=new Array(i));for(let s=0;s<i;s+=e)t[s]=180*n[s]/Hs,t[s+1]=360*Math.atan(Math.exp(n[s+1]/Oo))/Math.PI-90;return t}const zm=6378137,qu=[-180,-90,180,90],Wm=Math.PI*zm/180;class Vn extends el{constructor(t,e){super({code:t,units:"degrees",extent:qu,axisOrientation:e,global:!0,metersPerUnit:Wm,worldExtent:qu})}}const Zu=[new Vn("CRS:84"),new Vn("EPSG:4326","neu"),new Vn("urn:ogc:def:crs:OGC:1.3:CRS84"),new Vn("urn:ogc:def:crs:OGC:2:84"),new Vn("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new Vn("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Vn("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let yh={};function Bm(n){return yh[n]||yh[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function Hm(n,t){yh[n]=t}let Js={};function dr(n,t,e){const i=n.getCode(),s=t.getCode();i in Js||(Js[i]={}),Js[i][s]=e}function bg(n,t){let e;return n in Js&&t in Js[n]&&(e=Js[n][t]),e}const Zt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function wh(n){const t=Ue();for(let e=0,i=n.length;e<i;++e)io(t,n[e]);return t}function Xm(n,t,e){const i=Math.min.apply(null,n),s=Math.min.apply(null,t),r=Math.max.apply(null,n),o=Math.max.apply(null,t);return ln(i,s,r,o,e)}function oo(n,t,e){return e?(e[0]=n[0]-t,e[1]=n[1]-t,e[2]=n[2]+t,e[3]=n[3]+t,e):[n[0]-t,n[1]-t,n[2]+t,n[3]+t]}function Ig(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n.slice()}function Ts(n,t,e){let i,s;return t<n[0]?i=n[0]-t:n[2]<t?i=t-n[2]:i=0,e<n[1]?s=n[1]-e:n[3]<e?s=e-n[3]:s=0,i*i+s*s}function il(n,t){return yc(n,t[0],t[1])}function fi(n,t){return n[0]<=t[0]&&t[2]<=n[2]&&n[1]<=t[1]&&t[3]<=n[3]}function yc(n,t,e){return n[0]<=t&&t<=n[2]&&n[1]<=e&&e<=n[3]}function _h(n,t){const e=n[0],i=n[1],s=n[2],r=n[3],o=t[0],a=t[1];let l=Zt.UNKNOWN;return o<e?l=l|Zt.LEFT:o>s&&(l=l|Zt.RIGHT),a<i?l=l|Zt.BELOW:a>r&&(l=l|Zt.ABOVE),l===Zt.UNKNOWN&&(l=Zt.INTERSECTING),l}function Ue(){return[1/0,1/0,-1/0,-1/0]}function ln(n,t,e,i,s){return s?(s[0]=n,s[1]=t,s[2]=e,s[3]=i,s):[n,t,e,i]}function br(n){return ln(1/0,1/0,-1/0,-1/0,n)}function Lg(n,t){const e=n[0],i=n[1];return ln(e,i,e,i,t)}function wc(n,t,e,i,s){const r=br(s);return Ng(r,n,t,e,i)}function ds(n,t){return n[0]==t[0]&&n[2]==t[2]&&n[1]==t[1]&&n[3]==t[3]}function Sg(n,t){return t[0]<n[0]&&(n[0]=t[0]),t[2]>n[2]&&(n[2]=t[2]),t[1]<n[1]&&(n[1]=t[1]),t[3]>n[3]&&(n[3]=t[3]),n}function io(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function Ng(n,t,e,i,s){for(;e<i;e+=s)Um(n,t[e],t[e+1]);return n}function Um(n,t,e){n[0]=Math.min(n[0],t),n[1]=Math.min(n[1],e),n[2]=Math.max(n[2],t),n[3]=Math.max(n[3],e)}function Ag(n,t){let e;return e=t(nl(n)),e||(e=t(Po(n)),e)||(e=t(sl(n)),e)||(e=t(un(n)),e)?e:!1}function ph(n){let t=0;return Ir(n)||(t=wt(n)*he(n)),t}function nl(n){return[n[0],n[1]]}function Po(n){return[n[2],n[1]]}function pi(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function Ym(n,t){let e;if(t==="bottom-left")e=nl(n);else if(t==="bottom-right")e=Po(n);else if(t==="top-left")e=un(n);else if(t==="top-right")e=sl(n);else throw new Error("Invalid corner");return e}function ao(n,t,e,i,s){const[r,o,a,l,h,c,u,g]=xh(n,t,e,i);return ln(Math.min(r,a,h,u),Math.min(o,l,c,g),Math.max(r,a,h,u),Math.max(o,l,c,g),s)}function xh(n,t,e,i){const s=t*i[0]/2,r=t*i[1]/2,o=Math.cos(e),a=Math.sin(e),l=s*o,h=s*a,c=r*o,u=r*a,g=n[0],d=n[1];return[g-l+u,d-h-c,g-l-u,d-h+c,g+l-u,d+h+c,g+l+u,d+h-c,g-l+u,d-h-c]}function he(n){return n[3]-n[1]}function Qs(n,t,e){const i=e||Ue();return Ne(n,t)?(n[0]>t[0]?i[0]=n[0]:i[0]=t[0],n[1]>t[1]?i[1]=n[1]:i[1]=t[1],n[2]<t[2]?i[2]=n[2]:i[2]=t[2],n[3]<t[3]?i[3]=n[3]:i[3]=t[3]):br(i),i}function un(n){return[n[0],n[3]]}function sl(n){return[n[2],n[3]]}function wt(n){return n[2]-n[0]}function Ne(n,t){return n[0]<=t[2]&&n[2]>=t[0]&&n[1]<=t[3]&&n[3]>=t[1]}function Ir(n){return n[2]<n[0]||n[3]<n[1]}function Vm(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n}function jm(n,t){const e=(n[2]-n[0])/2*(t-1),i=(n[3]-n[1])/2*(t-1);n[0]-=e,n[2]+=e,n[1]-=i,n[3]+=i}function qm(n,t,e){let i=!1;const s=_h(n,t),r=_h(n,e);if(s===Zt.INTERSECTING||r===Zt.INTERSECTING)i=!0;else{const o=n[0],a=n[1],l=n[2],h=n[3],c=t[0],u=t[1],g=e[0],d=e[1],f=(d-u)/(g-c);let m,y;r&Zt.ABOVE&&!(s&Zt.ABOVE)&&(m=g-(d-h)/f,i=m>=o&&m<=l),!i&&r&Zt.RIGHT&&!(s&Zt.RIGHT)&&(y=d-(g-l)*f,i=y>=a&&y<=h),!i&&r&Zt.BELOW&&!(s&Zt.BELOW)&&(m=g-(d-a)/f,i=m>=o&&m<=l),!i&&r&Zt.LEFT&&!(s&Zt.LEFT)&&(y=d-(g-o)*f,i=y>=a&&y<=h)}return i}function Zm(n,t,e,i){if(Ir(n))return br(e);let s=[];s=[n[0],n[1],n[2],n[1],n[2],n[3],n[0],n[3]],t(s,s,2);const r=[],o=[];for(let a=0,l=s.length;a<l;a+=2)r.push(s[a]),o.push(s[a+1]);return Xm(r,o,e)}function Og(n,t){const e=t.getExtent(),i=pi(n);if(t.canWrapX()&&(i[0]<e[0]||i[0]>=e[2])){const s=wt(e),o=Math.floor((i[0]-e[0])/s)*s;n[0]-=o,n[2]-=o}return n}function $m(n,t){if(t.canWrapX()){const e=t.getExtent();if(!isFinite(n[0])||!isFinite(n[2]))return[[e[0],n[1],e[2],n[3]]];Og(n,t);const i=wt(e);if(wt(n)>i)return[[e[0],n[1],e[2],n[3]]];if(n[0]<e[0])return[[n[0]+i,n[1],e[2],n[3]],[e[0],n[1],n[2],n[3]]];if(n[2]>e[2])return[[n[0],n[1],e[2],n[3]],[e[0],n[1],n[2]-i,n[3]]]}return[n]}function Gt(n,t,e){return Math.min(Math.max(n,t),e)}function Jm(n,t,e,i,s,r){const o=s-e,a=r-i;if(o!==0||a!==0){const l=((n-e)*o+(t-i)*a)/(o*o+a*a);l>1?(e=s,i=r):l>0&&(e+=o*l,i+=a*l)}return ns(n,t,e,i)}function ns(n,t,e,i){const s=e-n,r=i-t;return s*s+r*r}function Qm(n){const t=n.length;for(let i=0;i<t;i++){let s=i,r=Math.abs(n[i][i]);for(let a=i+1;a<t;a++){const l=Math.abs(n[a][i]);l>r&&(r=l,s=a)}if(r===0)return null;const o=n[s];n[s]=n[i],n[i]=o;for(let a=i+1;a<t;a++){const l=-n[a][i]/n[i][i];for(let h=i;h<t+1;h++)i==h?n[a][h]=0:n[a][h]+=l*n[i][h]}}const e=new Array(t);for(let i=t-1;i>=0;i--){e[i]=n[i][t]/n[i][i];for(let s=i-1;s>=0;s--)n[s][t]-=n[s][i]*e[i]}return e}function _a(n){return n*Math.PI/180}function Nn(n,t){const e=n%t;return e*t<0?e+t:e}function We(n,t,e){return n+e*(t-n)}function rl(n,t){const e=Math.pow(10,t);return Math.round(n*e)/e}function $u(n,t){return Math.round(rl(n,t))}function Xs(n,t){return Math.floor(rl(n,t))}function En(n,t){return Math.ceil(rl(n,t))}function _c(n,t){const e=(""+n).split("."),i=(""+t).split(".");for(let s=0;s<Math.max(e.length,i.length);s++){const r=parseInt(e[s]||"0",10),o=parseInt(i[s]||"0",10);if(r>o)return 1;if(o>r)return-1}return 0}function ty(n,t){return n[0]+=+t[0],n[1]+=+t[1],n}function cE(n,t){const e=t.getRadius(),i=t.getCenter(),s=i[0],r=i[1],o=n[0],a=n[1];let l=o-s;const h=a-r;l===0&&h===0&&(l=1);const c=Math.sqrt(l*l+h*h),u=s+e*l/c,g=r+e*h/c;return[u,g]}function ey(n,t){const e=n[0],i=n[1],s=t[0],r=t[1],o=s[0],a=s[1],l=r[0],h=r[1],c=l-o,u=h-a,g=c===0&&u===0?0:(c*(e-o)+u*(i-a))/(c*c+u*u||0);let d,f;return g<=0?(d=o,f=a):g>=1?(d=l,f=h):(d=o+g*c,f=a+g*u),[d,f]}function Ra(n,t){let e=!0;for(let i=n.length-1;i>=0;--i)if(n[i]!=t[i]){e=!1;break}return e}function pc(n,t){const e=Math.cos(t),i=Math.sin(t),s=n[0]*e-n[1]*i,r=n[1]*e+n[0]*i;return n[0]=s,n[1]=r,n}function iy(n,t){return n[0]*=t,n[1]*=t,n}function Pg(n,t){const e=n[0]-t[0],i=n[1]-t[1];return e*e+i*i}function uE(n,t){return Math.sqrt(Pg(n,t))}function dE(n,t){return Pg(n,ey(n,t))}function Kg(n,t){if(t.canWrapX()){const e=wt(t.getExtent()),i=Dg(n,t,e);i&&(n[0]-=i*e)}return n}function Dg(n,t,e){const i=t.getExtent();let s=0;return t.canWrapX()&&(n[0]<i[0]||n[0]>i[2])&&(e=e||wt(i),s=Math.floor((n[0]-i[0])/e)),s}const ny=63710088e-1;function Ju(n,t,e){e=e||ny;const i=_a(n[1]),s=_a(t[1]),r=(s-i)/2,o=_a(t[0]-n[0])/2,a=Math.sin(r)*Math.sin(r)+Math.sin(o)*Math.sin(o)*Math.cos(i)*Math.cos(s);return 2*e*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}function Fg(...n){console.warn(...n)}let Th=!0;function sy(n){Th=!1}function xc(n,t){if(t!==void 0){for(let e=0,i=n.length;e<i;++e)t[e]=n[e];t=t}else t=n.slice();return t}function kg(n,t){if(t!==void 0&&n!==t){for(let e=0,i=n.length;e<i;++e)t[e]=n[e];n=t}return n}function Gg(n){Hm(n.getCode(),n),dr(n,n,xc)}function ry(n){n.forEach(Gg)}function at(n){return typeof n=="string"?Bm(n):n||null}function Ea(n,t,e,i){n=at(n);let s;const r=n.getPointResolutionFunc();if(r){if(s=r(t,e),i&&i!==n.getUnits()){const o=n.getMetersPerUnit();o&&(s=s*o/ur[i])}}else{const o=n.getUnits();if(o=="degrees"&&!i||i=="degrees")s=t;else{const a=Mc(n,at("EPSG:4326"));if(a===kg&&o!=="degrees")s=t*n.getMetersPerUnit();else{let h=[e[0]-t/2,e[1],e[0]+t/2,e[1],e[0],e[1]-t/2,e[0],e[1]+t/2];h=a(h,h,2);const c=Ju(h.slice(0,2),h.slice(2,4)),u=Ju(h.slice(4,6),h.slice(6,8));s=(c+u)/2}const l=i?ur[i]:n.getMetersPerUnit();l!==void 0&&(s/=l)}}return s}function Mh(n){ry(n),n.forEach(function(t){n.forEach(function(e){t!==e&&dr(t,e,xc)})})}function oy(n,t,e,i){n.forEach(function(s){t.forEach(function(r){dr(s,r,e),dr(r,s,i)})})}function Tc(n,t){return n?typeof n=="string"?at(n):n:at(t)}function Qu(n){return(function(t,e,i){const s=t.length;i=i!==void 0?i:2,e=e!==void 0?e:new Array(s);for(let r=0;r<s;r+=i){const o=n(t.slice(r,r+i)),a=o.length;for(let l=0,h=i;l<h;++l)e[r+l]=l>=a?t[r+l]:o[l]}return e})}function ay(n,t,e,i){const s=at(n),r=at(t);dr(s,r,Qu(e)),dr(r,s,Qu(i))}function Qe(n,t){if(n===t)return!0;const e=n.getUnits()===t.getUnits();return(n.getCode()===t.getCode()||Mc(n,t)===xc)&&e}function Mc(n,t){const e=n.getCode(),i=t.getCode();let s=bg(e,i);return s||(s=kg),s}function gr(n,t){const e=at(n),i=at(t);return Mc(e,i)}function zg(n,t,e){return gr(t,e)(n,void 0,n.length)}function Cc(n,t,e,i){const s=gr(t,e);return Zm(n,s,void 0)}function Ch(n,t){return n}function Qi(n,t){return Th&&!Ra(n,[0,0])&&n[0]>=-180&&n[0]<=180&&n[1]>=-90&&n[1]<=90&&(Th=!1,Fg("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),n}function Wg(n,t){return n}function Jn(n,t){return n}function td(n,t,e){return function(i){let s,r;if(n.canWrapX()){const o=n.getExtent(),a=wt(o);i=i.slice(0),r=Dg(i,n,a),r&&(i[0]=i[0]-r*a),i[0]=Gt(i[0],o[0],o[2]),i[1]=Gt(i[1],o[1],o[3]),s=e(i)}else s=e(i);return r&&t.canWrapX()&&(s[0]+=r*wt(t.getExtent())),s}}function ly(){Mh(ju),Mh(Zu),oy(Zu,ju,km,Gm)}ly();const Le={ADD:"add",REMOVE:"remove"},ed={LENGTH:"length"};class oa extends Hi{constructor(t,e,i){super(t),this.element=e,this.index=i}}let ii=class extends xi{constructor(t,e){if(super(),this.on,this.once,this.un,e=e||{},this.unique_=!!e.unique,this.array_=t||[],this.unique_)for(let i=0,s=this.array_.length;i<s;++i)this.assertUnique_(this.array_[i],i);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(t){for(let e=0,i=t.length;e<i;++e)this.push(t[e]);return this}forEach(t){const e=this.array_;for(let i=0,s=e.length;i<s;++i)t(e[i],i,e)}getArray(){return this.array_}item(t){return this.array_[t]}getLength(){return this.get(ed.LENGTH)}insertAt(t,e){if(t<0||t>this.getLength())throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e),this.array_.splice(t,0,e),this.updateLength_(),this.dispatchEvent(new oa(Le.ADD,e,t))}pop(){return this.removeAt(this.getLength()-1)}push(t){this.unique_&&this.assertUnique_(t);const e=this.getLength();return this.insertAt(e,t),this.getLength()}remove(t){const e=this.array_;for(let i=0,s=e.length;i<s;++i)if(e[i]===t)return this.removeAt(i)}removeAt(t){if(t<0||t>=this.getLength())return;const e=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new oa(Le.REMOVE,e,t)),e}setAt(t,e){const i=this.getLength();if(t>=i){this.insertAt(t,e);return}if(t<0)throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e,t);const s=this.array_[t];this.array_[t]=e,this.dispatchEvent(new oa(Le.REMOVE,s,t)),this.dispatchEvent(new oa(Le.ADD,e,t))}updateLength_(){this.set(ed.LENGTH,this.array_.length)}assertUnique_(t,e){for(let i=0,s=this.array_.length;i<s;++i)if(this.array_[i]===t&&i!==e)throw new Error("Duplicate item added to a unique collection")}};function yt(n,t){if(!n)throw new Error(t)}new Array(6);function yi(){return[1,0,0,1,0,0]}function hy(n,t,e,i,s,r,o){return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n[4]=r,n[5]=o,n}function cy(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function $t(n,t){const e=t[0],i=t[1];return t[0]=n[0]*e+n[2]*i+n[4],t[1]=n[1]*e+n[3]*i+n[5],t}function uy(n,t,e){return hy(n,t,0,0,e,0,0)}function hn(n,t,e,i,s,r,o,a){const l=Math.sin(r),h=Math.cos(r);return n[0]=i*h,n[1]=s*l,n[2]=-i*l,n[3]=s*h,n[4]=o*i*h-a*i*l+t,n[5]=o*s*l+a*s*h+e,n}function Rc(n,t){const e=dy(t);yt(e!==0,"Transformation matrix cannot be inverted");const i=t[0],s=t[1],r=t[2],o=t[3],a=t[4],l=t[5];return n[0]=o/e,n[1]=-s/e,n[2]=-r/e,n[3]=i/e,n[4]=(r*l-o*a)/e,n[5]=-(i*l-s*a)/e,n}function dy(n){return n[0]*n[3]-n[1]*n[2]}let id;function Bg(n){const t="matrix("+n.join(", ")+")";if(fc)return t;const e=id||(id=document.createElement("div"));return e.style.transform=t,e.style.transform}const Hg={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},le={name:"xyz",min:[0,0,0],channel:["X","Y","Z"],alias:["XYZ","ciexyz","cie1931"],whitepoint:{2:{A:[109.85,100,35.585],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.045592705167,100,108.9057750759878],D75:[94.972,100,122.638],F2:[99.187,100,67.395],F7:[95.044,100,108.755],F11:[100.966,100,64.37],E:[100,100,100]},10:{A:[111.144,100,35.2],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F2:[103.28,100,69.026],F7:[95.792,100,107.687],F11:[103.866,100,65.627],E:[100,100,100]}}};le.max=le.whitepoint[2].D65;le.rgb=function(n,t){t=t||le.whitepoint[2].E;var e=n[0]/t[0],i=n[1]/t[1],s=n[2]/t[2],r,o,a;return r=e*3.240969941904521+i*-1.537383177570093+s*-.498610760293,o=e*-.96924363628087+i*1.87596750150772+s*.041555057407175,a=e*.055630079696993+i*-.20397695888897+s*1.056971514242878,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r=r*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,r=Math.min(Math.max(0,r),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[r*255,o*255,a*255]};Hg.xyz=function(n,t){var e=n[0]/255,i=n[1]/255,s=n[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92,s=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92;var r=e*.41239079926595+i*.35758433938387+s*.18048078840183,o=e*.21263900587151+i*.71516867876775+s*.072192315360733,a=e*.019330818715591+i*.11919477979462+s*.95053215224966;return t=t||le.whitepoint[2].E,[r*t[0],o*t[1],a*t[2]]};var Ec={name:"luv",min:[0,-134,-140],max:[100,224,122],channel:["lightness","u","v"],alias:["LUV","cieluv","cie1976"],xyz:function(n,t,e){var i,s,r,o,a,l,h,c,u,g,d,f,m;if(r=n[0],o=n[1],a=n[2],r===0)return[0,0,0];var y=.0011070564598794539;return t=t||"D65",e=e||2,u=le.whitepoint[e][t][0],g=le.whitepoint[e][t][1],d=le.whitepoint[e][t][2],f=4*u/(u+15*g+3*d),m=9*g/(u+15*g+3*d),i=o/(13*r)+f||0,s=a/(13*r)+m||0,h=r>8?g*Math.pow((r+16)/116,3):g*r*y,l=h*9*i/(4*s)||0,c=h*(12-3*i-20*s)/(4*s)||0,[l,h,c]}};le.luv=function(n,t,e){var i,s,r,o,a,l,h,c,u,g,d,f,m,y=.008856451679035631,_=903.2962962962961;t=t||"D65",e=e||2,u=le.whitepoint[e][t][0],g=le.whitepoint[e][t][1],d=le.whitepoint[e][t][2],f=4*u/(u+15*g+3*d),m=9*g/(u+15*g+3*d),l=n[0],h=n[1],c=n[2],i=4*l/(l+15*h+3*c)||0,s=9*h/(l+15*h+3*c)||0;var p=h/g;return r=p<=y?_*p:116*Math.pow(p,1/3)-16,o=13*r*(i-f),a=13*r*(s-m),[r,o,a]};var Xg={name:"lchuv",channel:["lightness","chroma","hue"],alias:["LCHuv","cielchuv"],min:[0,0,0],max:[100,100,360],luv:function(n){var t=n[0],e=n[1],i=n[2],s,r,o;return o=i/360*2*Math.PI,s=e*Math.cos(o),r=e*Math.sin(o),[t,s,r]},xyz:function(n){return Ec.xyz(Xg.luv(n))}};Ec.lchuv=function(n){var t=n[0],e=n[1],i=n[2],s=Math.sqrt(e*e+i*i),r=Math.atan2(i,e),o=r*360/2/Math.PI;return o<0&&(o+=360),[t,s,o]};le.lchuv=function(n){return Ec.lchuv(le.luv(n))};const nd={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var sd={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function gy(n){var t,e=[],i=1,s;if(typeof n=="number")return{space:"rgb",values:[n>>>16,(n&65280)>>>8,n&255],alpha:1};if(n=String(n).toLowerCase(),nd[n])e=nd[n].slice(),s="rgb";else if(n==="transparent")i=0,s="rgb",e=[0,0,0];else if(n[0]==="#"){var r=n.slice(1),o=r.length;if(/^[0-9a-f]{3,8}$/.test(r)&&o!==5&&o!==7){var a=o<=4;i=1,a?(e=[parseInt(r[0]+r[0],16),parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16)],o===4&&(i=parseInt(r[3]+r[3],16)/255)):(e=[parseInt(r[0]+r[1],16),parseInt(r[2]+r[3],16),parseInt(r[4]+r[5],16)],o===8&&(i=parseInt(r[6]+r[7],16)/255)),s="rgb"}}else if(t=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(n)){var l=t[1];s=l.replace(/a$/,"");var h=s==="cmyk"?4:s==="gray"?1:3;e=t[2].trim().split(/\s*[,\/]\s*|\s+/),s==="color"&&(s=e.shift()),e=e.map(function(c,u){if(c[c.length-1]==="%")return c=parseFloat(c)/100,u===3?c:s==="rgb"?c*255:s[0]==="h"||s[0]==="l"&&!u?c*100:s==="lab"?c*125:s==="lch"?u<2?c*150:c*360:s[0]==="o"&&!u?c:s==="oklab"?c*.4:s==="oklch"?u<2?c*.4:c*360:c;if(s[u]==="h"||u===2&&s[s.length-1]==="h"){if(sd[c]!==void 0)return sd[c];if(c.endsWith("deg"))return parseFloat(c);if(c.endsWith("turn"))return parseFloat(c)*360;if(c.endsWith("grad"))return parseFloat(c)*360/400;if(c.endsWith("rad"))return parseFloat(c)*180/Math.PI}return c==="none"?0:parseFloat(c)}),i=e.length>h?e.pop():1}else!/^[a-z][a-z0-9-]*\s*\(/.test(n)&&/[0-9](?:\s|\/|,)/.test(n)&&(e=n.match(/-?[0-9]*\.?[0-9]+/g).map(Number),s=n.replace(/grad|deg|rad|turn/g,"").match(/([a-z])/ig)?.join("")?.toLowerCase()||"rgb",s.length>3&&s[s.length-1]==="a"&&s.length===e.length?(s=s.slice(0,-1),i=e.pop()):s==="rgb"&&e.length===4&&(i=e.pop()));return{space:s,values:e,alpha:i}}const Me={name:"rgb",range:[[0,255],[0,255],[0,255]]};var lo={name:"hsl",range:[[0,360],[0,100],[0,100]],rgb:function(n,t,e){n=n/360,t=t/100,e=e/100;var i,s,r,o,a,l=0;if(t===0)return a=e*255,[a,a,a];for(s=e<.5?e*(1+t):e+t-e*t,i=2*e-s,o=[0,0,0];l<3;)r=n+1/3*-(l-1),r<0?r++:r>1&&r--,a=6*r<1?i+(s-i)*6*r:2*r<1?s:3*r<2?i+(s-i)*(2/3-r)*6:i,o[l++]=a*255;return o}};Me.hsl=function(n,t,e){n=n/255,t=t/255,e=e/255;var i=Math.min(n,t,e),s=Math.max(n,t,e),r=s-i,o=0,a,l;return s===i?o=0:n===s?o=(t-e)/r:t===s?o=2+(e-n)/r:e===s&&(o=4+(n-t)/r),o=Math.min(o/6,1),o<0&&(o+=1),l=(i+s)/2,s===i?a=0:l<=.5?a=r/(s+i):a=r/(2-s-i),[o*360,a*100,l*100]};var Qn={name:"hsv",range:[[0,360],[0,100],[0,100]],rgb:function(n,t,e){n=n/360*6,t=t/100,e=e/100;var i=Math.floor(n)%6,s=n-Math.floor(n),r=e*(1-t),o=e*(1-t*s),a=e*(1-t*(1-s)),l;switch(i){case 0:l=[e,a,r];break;case 1:l=[o,e,r];break;case 2:l=[r,e,a];break;case 3:l=[r,o,e];break;case 4:l=[a,r,e];break;case 5:l=[e,r,o];break}return[l[0]*255,l[1]*255,l[2]*255]},hsl:function(n,t,e){t=t/100,e=e/100;var i,s;return s=(2-t)*e,i=t*e,i/=s<=1?s:2-s,i=i||0,s/=2,[n,i*100,s*100]}};Me.hsv=function(n,t,e){n=n/255,t=t/255,e=e/255;var i=Math.min(n,t,e),s=Math.max(n,t,e),r=s-i,o=0,a,l;return s===0?a=0:a=r/s,s===i?o=0:n===s?o=(t-e)/r:t===s?o=2+(e-n)/r:e===s&&(o=4+(n-t)/r),o=Math.min(o/6,1),o<0&&(o+=1),l=s,[o*360,a*100,l*100]};lo.hsv=function(n,t,e){t=t/100,e=e/100;var i=e*2,s=t*(i<=1?i:2-i),r=(i+s)/2,o=2*s/(i+s);return[n,o*100,r*100]};var Rh={name:"hwb",range:[[0,360],[0,100],[0,100]],rgb:function(n,t,e){n=n/360,t=t/100,e=e/100;var i=t+e,s,r,o,a,l,h,c;if(i>=1){var u=t/i*255;return[u,u,u]}switch(s=Math.floor(6*n),r=1-e,o=6*n-s,(s&1)!==0&&(o=1-o),a=t+o*(r-t),s){default:case 6:case 0:l=r,h=a,c=t;break;case 1:l=a,h=r,c=t;break;case 2:l=t,h=r,c=a;break;case 3:l=t,h=a,c=r;break;case 4:l=a,h=t,c=r;break;case 5:l=r,h=t,c=a;break}return[l*255,h*255,c*255]},hsv:function(n,t,e){t=t/100,e=e/100;var i,s;return t+e>=1?(i=0,s=t/(t+e)):(i=1-t/(1-e),s=1-e),[n,i*100,s*100]},hsl:function(n,t,e){return Qn.hsl(...Rh.hsv(n,t,e))}};Me.hwb=function(n,t,e){n=n/255,t=t/255,e=e/255;var i=Me.hsl(n*255,t*255,e*255)[0],s=Math.min(n,Math.min(t,e));return e=1-Math.max(n,Math.max(t,e)),[i,s*100,e*100]};Qn.hwb=function(n,t,e){return t=t/100,e=e/100,[n,(e===0?0:e*(1-t))*100,(1-e)*100]};lo.hwb=function(n,t,e){return Qn.hwb(...lo.hsv(n,t,e))};const Eh={name:"cmyk",range:[[0,100],[0,100],[0,100],[0,100]]};Eh.rgb=(n,t,e,i)=>(n=n/100,t=t/100,e=e/100,i=i/100,[(1-Math.min(1,n*(1-i)+i))*255,(1-Math.min(1,t*(1-i)+i))*255,(1-Math.min(1,e*(1-i)+i))*255]);Me.cmyk=(n,t,e)=>{n=n/255,t=t/255,e=e/255;let i,s,r,o;return o=Math.min(1-n,1-t,1-e),i=(1-n-o)/(1-o)||0,s=(1-t-o)/(1-o)||0,r=(1-e-o)/(1-o)||0,[i*100,s*100,r*100,o*100]};const ol=n=>n<0?-1:1,sn=n=>{const t=Math.abs(n);return ol(n)*(t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)},rn=n=>{const t=Math.abs(n);return ol(n)*(t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*12.92)},kl=n=>{const t=1.09929682680944,e=.018053968510807,i=Math.abs(n);return ol(n)*(i<e?4.5*i:t*Math.pow(i,.45)-(t-1))},Gl=n=>{const t=1.09929682680944,e=.018053968510807,i=Math.abs(n);return ol(n)*(i<e*4.5?i/4.5:Math.pow((i+(t-1))/t,1/.45))},gs={name:"lrgb",range:[[0,1],[0,1],[0,1]]};Me.lrgb=(n,t,e)=>[sn(n/255),sn(t/255),sn(e/255)];gs.rgb=(n,t,e)=>[255*rn(n),255*rn(t),255*rn(e)];const Jt=(n,t,e,i)=>[t*n[0]+e*n[1]+i*n[2],t*n[3]+e*n[4]+i*n[5],t*n[6]+e*n[7]+i*n[8]],fy=(n,t)=>[n[0]*t[0]+n[1]*t[3]+n[2]*t[6],n[0]*t[1]+n[1]*t[4]+n[2]*t[7],n[0]*t[2]+n[1]*t[5]+n[2]*t[8],n[3]*t[0]+n[4]*t[3]+n[5]*t[6],n[3]*t[1]+n[4]*t[4]+n[5]*t[7],n[3]*t[2]+n[4]*t[5]+n[5]*t[8],n[6]*t[0]+n[7]*t[3]+n[8]*t[6],n[6]*t[1]+n[7]*t[4]+n[8]*t[7],n[6]*t[2]+n[7]*t[5]+n[8]*t[8]],Ko=n=>{const[t,e,i,s,r,o,a,l,h]=n,c=r*h-o*l,u=o*a-s*h,g=s*l-r*a,d=t*c+e*u+i*g;return[c/d,(i*l-e*h)/d,(e*o-i*r)/d,u/d,(t*h-i*a)/d,(i*s-t*o)/d,g/d,(e*a-t*l)/d,(t*r-e*s)/d]},tr=(n,t)=>Math.sign(n)*Math.abs(n)**t,vc=(n,t,e,i=1e-8)=>{const s=Math.sqrt(t*t+e*e),r=s<i?0:Math.atan2(e,t)*180/Math.PI;return[n,s,r<0?r+360:r]},bc=(n,t,e)=>{const i=e*Math.PI/180;return[n,t*Math.cos(i),t*Math.sin(i)]},Ms={D50_D65:[.9554734527042182,-.023098536874261423,.0632593086610217,-.028369706963208136,1.0099954580058226,.021041398966943008,.012314001688319899,-.020507696433477912,1.3303659366080753],D65_D50:[1.0479298208405488,.022946793341019088,-.05019222954313557,.029627815688159344,.990434484573249,-.01707382502938514,-.009243058152591178,.015055144896577895,.7518742899580008]},ct={name:"xyz",range:[[0,95.05],[0,100],[0,108.91]]},Ug=[.41239079926595,.35758433938387,.18048078840183,.21263900587151,.71516867876775,.072192315360733,.019330818715591,.11919477979462,.95053215224966],Yg=Ko(Ug);ct.lrgb=(n,t,e)=>Jt(Yg,n/100,t/100,e/100);gs.xyz=(n,t,e)=>{const i=Jt(Ug,n,t,e);return i[0]*=100,i[1]*=100,i[2]*=100,i};Me.xyz=(n,t,e)=>{const i=Me.lrgb(n,t,e);return gs.xyz(i[0],i[1],i[2])};ct.rgb=(n,t,e)=>{const i=ct.lrgb(n,t,e);return gs.rgb(i[0],i[1],i[2])};const va={name:"xyz-d50",range:[[0,96.42],[0,100],[0,82.51]]};va.xyz=(n,t,e)=>Jt(Ms.D50_D65,n,t,e);ct[va.name]=(n,t,e)=>Jt(Ms.D65_D50,n,t,e);const ss={2:{A:[109.85,100,35.585],B:[99.0927,100,85.313],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.04559270516717,100,108.90577507598783],D75:[94.972,100,122.638],F1:[92.834,100,103.665],F2:[99.187,100,67.395],F3:[103.913,100,65.71],F4:[109.147,100,38.813],F5:[90.872,100,98.723],F6:[97.309,100,60.191],F7:[95.044,100,108.755],F8:[96.413,100,82.333],F9:[100.365,100,67.868],F10:[96.174,100,81.712],F11:[100.966,100,64.37],F12:[108.046,100,39.228],E:[100,100,100]},10:{A:[111.144,100,35.2],B:[99.178,100,84.349],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F1:[94.791,100,103.191],F2:[103.28,100,69.026],F3:[108.968,100,66.5],F4:[114.961,100,40.963],F5:[93.369,100,98.636],F6:[102.148,100,62.074],F7:[95.792,100,107.687],F8:[97.115,100,81.135],F9:[102.116,100,67.826],F10:[99.001,100,83.134],F11:[103.866,100,65.627],F12:[111.428,100,40.353],E:[100,100,100]}};var vh={name:"xyy",range:[[0,1],[0,1],[0,100]]};vh.xyz=function(n,t,e){var i,s;return t===0?[0,0,0]:(i=n*e/t,s=(1-n-t)*e/t,[i,e,s])};const[bh,Ih,Vg]=ss[2].D65,my=bh/(bh+Ih+Vg),yy=Ih/(bh+Ih+Vg);ct.xyy=function(n,t,e){var i;return i=n+t+e,i===0?[my,yy,t]:[n/i,t/i,t]};const wy=216/24389,_y=24/116,jg=24389/27,rs=n=>n>wy?Math.cbrt(n):(jg*n+16)/116,os=n=>n>_y?n**3:(116*n-16)/jg,er={name:"lab",range:[[0,100],[-125,125],[-125,125]]},si=[.9642956764295677,1,.8251046025104602];er.xyz=(n,t,e)=>{const i=(n+16)/116,s=t/500+i,r=i-e/200,o=Jt(Ms.D50_D65,os(s)*si[0],os(i)*si[1],os(r)*si[2]);return o[0]*=100,o[1]*=100,o[2]*=100,o};ct.lab=(n,t,e)=>{const i=Jt(Ms.D65_D50,n/100,t/100,e/100),s=rs(i[0]/si[0]),r=rs(i[1]/si[1]),o=rs(i[2]/si[2]);return[116*r-16,500*(s-r),200*(r-o)]};const qg=fy(Yg,Ms.D50_D65),py=Ko(qg);er.rgb=(n,t,e)=>{const i=(n+16)/116,s=t/500+i,r=i-e/200,o=Jt(qg,os(s)*si[0],os(i)*si[1],os(r)*si[2]);return[255*rn(o[0]),255*rn(o[1]),255*rn(o[2])]};Me.lab=(n,t,e)=>{const i=Jt(py,sn(n/255),sn(t/255),sn(e/255)),s=rs(i[0]/si[0]),r=rs(i[1]/si[1]),o=rs(i[2]/si[2]);return[116*r-16,500*(s-r),200*(r-o)]};var rd={name:"lchab",range:[[0,100],[0,150],[0,360]],lab:(n,t,e)=>bc(n,t,e)};er.lchab=(n,t,e)=>vc(n,t,e);var ho={name:"luv",range:[[0,100],[-215,215],[-215,215]],xyz:function(n,t,e,i,s){var r,o,a,l,h,c,u,g,d,f;return n===0?[0,0,0]:(i=i||"D65",s=s||2,c=ss[s][i][0],u=ss[s][i][1],g=ss[s][i][2],d=4*c/(c+15*u+3*g),f=9*u/(c+15*u+3*g),r=t/(13*n)+d||0,o=e/(13*n)+f||0,l=u*os((n+16)/116),a=l*9*r/(4*o)||0,h=l*(12-3*r-20*o)/(4*o)||0,[a,l,h])}};ct.luv=function(n,t,e,i,s){var r,o,a,l,h,c,u,g,d,f;return i=i||"D65",s=s||2,c=ss[s][i][0],u=ss[s][i][1],g=ss[s][i][2],d=4*c/(c+15*u+3*g),f=9*u/(c+15*u+3*g),r=4*n/(n+15*t+3*e)||0,o=9*t/(n+15*t+3*e)||0,a=116*rs(t/u)-16,l=13*a*(r-d),h=13*a*(o-f),[a,l,h]};var Lh={name:"lchuv",range:[[0,100],[0,220],[0,360]],luv:(n,t,e)=>bc(n,t,e),xyz:function(n,t,e){return ho.xyz(...Lh.luv(n,t,e))}};ho.lchuv=(n,t,e)=>vc(n,t,e);ct.lchuv=function(n,t,e){return ho.lchuv(...ct.luv(n,t,e))};const fs={name:"oklab",range:[[0,1],[-.4,.4],[-.4,.4]]};fs.rgb=(n,t,e)=>{const i=n+.3963377774*t+.2158037573*e,s=n-.1055613458*t-.0638541728*e,r=n-.0894841775*t-1.291485548*e,o=i**3,a=s**3,l=r**3;return gs.rgb(4.0767416621*o-3.307711591*a+.2309699292*l,-1.2684380046*o+2.6097574011*a-.3413193965*l,-.0041960863*o-.7034186147*a+1.707614701*l)};Me.oklab=(n,t,e)=>{const[i,s,r]=Me.lrgb(n,t,e),o=.4122214708*i+.5363325363*s+.0514459929*r,a=.2119034982*i+.6806995451*s+.1073969566*r,l=.0883024619*i+.2817188376*s+.6299787005*r,h=Math.cbrt(o),c=Math.cbrt(a),u=Math.cbrt(l);return[.2104542553*h+.793617785*c-.0040720468*u,1.9779984951*h-2.428592205*c+.4505937099*u,.0259040371*h+.7827717662*c-.808675766*u]};fs.xyz=(n,t,e)=>{const i=n+.3963377774*t+.2158037573*e,s=n-.1055613458*t-.0638541728*e,r=n-.0894841775*t-1.291485548*e,o=i*i*i,a=s*s*s,l=r*r*r;return[1.2270138511*o-.5577999807*a+.281256149*l,-.0405801784*o+1.1122568696*a-.0716766787*l,-.0763812845*o-.4214819784*a+1.5861632204*l].map(c=>c*100)};ct.oklab=(n,t,e)=>{n=n/100,t=t/100,e=e/100;const i=Math.cbrt(.8189330101*n+.3618667424*t-.1288597137*e),s=Math.cbrt(.0329845436*n+.9293118715*t+.0361456387*e),r=Math.cbrt(.0482003018*n+.2643662691*t+.633851707*e),o=.2104542553*i+.793617785*s-.0040720468*r,a=1.9779984951*i-2.428592205*s+.4505937099*r,l=.0259040371*i+.7827717662*s-.808675766*r;return[o,a,l]};var co={name:"oklch",range:[[0,1],[0,.4],[0,360]]};co.oklab=(n,t,e)=>bc(n,t,e);fs.oklch=(n,t,e)=>vc(n,t,e);co.rgb=(n,t,e)=>{const i=co.oklab(n,t,e);return fs.rgb(i[0],i[1],i[2])};Me.oklch=(n,t,e)=>{const i=Me.oklab(n,t,e);return fs.oklch(i[0],i[1],i[2])};const Ic={name:"p3-linear",range:[[0,1],[0,1],[0,1]]},Zg=[.4865709486482162,.26566769316909306,.1982172852343625,.2289745640697488,.6917385218365064,.079286914093745,0,.04511338185890264,1.043944368900976],xy=Ko(Zg);Ic.xyz=(n,t,e)=>{const[i,s,r]=Jt(Zg,n,t,e);return[i*100,s*100,r*100]};ct[Ic.name]=(n,t,e)=>Jt(xy,n/100,t/100,e/100);const Sh={name:"p3",range:[[0,1],[0,1],[0,1]]};Sh.xyz=(n,t,e)=>Ic.xyz(sn(n),sn(t),sn(e));ct.p3=(n,t,e)=>{const[i,s,r]=ct["p3-linear"](n,t,e);return[rn(i),rn(s),rn(r)]};const Lc={name:"a98rgb-linear",range:[[0,1],[0,1],[0,1]]},$g=[.5766690429101305,.1855582379065463,.1882286462349947,.29734497525053605,.6273635662554661,.07529145849399788,.02703136138641234,.07068885253582723,.9913375368376388],Ty=Ko($g);Lc.xyz=(n,t,e)=>{const[i,s,r]=Jt($g,n,t,e);return[i*100,s*100,r*100]};ct[Lc.name]=(n,t,e)=>Jt(Ty,n/100,t/100,e/100);const Nh={name:"a98rgb",range:[[0,1],[0,1],[0,1]]},zl=563/256,Wl=256/563;Nh.xyz=(n,t,e)=>Lc.xyz(tr(n,zl),tr(t,zl),tr(e,zl));ct.a98rgb=(n,t,e)=>{const[i,s,r]=ct["a98rgb-linear"](n,t,e);return[tr(i,Wl),tr(s,Wl),tr(r,Wl)]};const Sc={name:"prophoto-linear",range:[[0,1],[0,1],[0,1]]},My=[.7977666449006423,.13518129740053308,.0313477341283922,.2880748288194013,.711835234241873,8993693872564e-17,0,0,.8251046025104602],Cy=[1.3457868816471583,-.25557208737979464,-.05110186497554526,-.5446307051249019,1.5082477428451468,.02052744743642139,0,0,1.2119675456389452];Sc.xyz=(n,t,e)=>{const[i,s,r]=Jt(My,n,t,e);return Jt(Ms.D50_D65,i,s,r).map(o=>o*100)};ct[Sc.name]=(n,t,e)=>{const[i,s,r]=Jt(Ms.D65_D50,n/100,t/100,e/100);return Jt(Cy,i,s,r)};const Ah={name:"prophoto",range:[[0,1],[0,1],[0,1]]},Ry=1/512,Ey=16/512;function Bl(n){const t=n<0?-1:1,e=Math.abs(n);return e<Ey?n/16:t*Math.pow(e,1.8)}function Hl(n){const t=n<0?-1:1,e=Math.abs(n);return e>=Ry?t*Math.pow(e,1/1.8):16*n}Ah.xyz=(n,t,e)=>Sc.xyz(Bl(n),Bl(t),Bl(e));ct.prophoto=(n,t,e)=>{const[i,s,r]=ct["prophoto-linear"](n,t,e);return[Hl(i),Hl(s),Hl(r)]};const Nc={name:"rec2020-linear",range:[[0,1],[0,1],[0,1]]},Jg=[.6369580483012914,.14461690358620832,.1688809751641721,.2627002120112671,.6779980715188708,.05930171646986196,0,.028072693049087428,1.060985057710791],vy=Ko(Jg);Nc.xyz=(n,t,e)=>{const[i,s,r]=Jt(Jg,n,t,e);return[i*100,s*100,r*100]};ct[Nc.name]=(n,t,e)=>Jt(vy,n/100,t/100,e/100);const Oh={name:"rec2020",range:[[0,1],[0,1],[0,1]]};Oh.xyz=(n,t,e)=>Nc.xyz(Gl(n),Gl(t),Gl(e));ct.rec2020=(n,t,e)=>{const[i,s,r]=ct["rec2020-linear"](n,t,e);return[kl(i),kl(s),kl(r)]};const by={rgb:[Me.range,n=>n],hsl:[lo.range,n=>lo.rgb(...n)],hsv:[Qn.range,n=>Qn.rgb(...n)],hsb:[Qn.range,n=>Qn.rgb(...n)],hwb:[Rh.range,n=>Rh.rgb(...n)],cmyk:[Eh.range,n=>Eh.rgb(...n)],xyz:[ct.range,n=>ct.rgb(...n)],xyy:[vh.range,n=>ct.rgb(...vh.xyz(...n))],lab:[er.range,n=>er.rgb(...n)],lch:[rd.range,n=>er.rgb(...rd.lab(...n))],luv:[ho.range,n=>ct.rgb(...ho.xyz(...n))],lchuv:[Lh.range,n=>ct.rgb(...Lh.xyz(...n))],oklab:[fs.range,n=>fs.rgb(...n)],oklch:[co.range,n=>co.rgb(...n)],srgb:[Me.range,n=>n,255],"srgb-linear":[gs.range,n=>gs.rgb(...n)],"display-p3":[Sh.range,n=>ct.rgb(...Sh.xyz(...n))],"a98-rgb":[Nh.range,n=>ct.rgb(...Nh.xyz(...n))],"prophoto-rgb":[Ah.range,n=>ct.rgb(...Ah.xyz(...n))],rec2020:[Oh.range,n=>ct.rgb(...Oh.xyz(...n))],"xyz-d65":[ct.range,n=>ct.rgb(...n),100],"xyz-d50":[va.range,n=>ct.rgb(...va.xyz(...n)),100]},Iy=(n,[t,e])=>e===360?(n%360+360)%360:Math.min(Math.max(n,t),e);function Ly(n){Array.isArray(n)&&n.raw&&(n=String.raw(...arguments)),n instanceof Number&&(n=+n);const t=gy(n);if(!t.space)return[];const[e,i,s=1]=by[t.space]||[];if(!e||t.values.length<e.length)return[];let r=i(e.map((o,a)=>Iy(t.values[a]*s,o)));return r=[...r].map(o=>Math.min(Math.max(o,0),255)),r.push(Math.min(Math.max(t.alpha,0),1)),r}function Qg(n){return typeof n=="string"?n:ef(n)}const Sy=1024,Hr={};let Xl=0;function Ny(n){if(n.length===4)return n;const t=n.slice();return t[3]=1,t}function od(n){const t=le.lchuv(Hg.xyz(n));return t[3]=n[3],t}function Ay(n){const t=le.rgb(Xg.xyz(n));return t[3]=n[3],t}function Ac(n){if(Hr.hasOwnProperty(n))return Hr[n];if(Xl>=Sy){let e=0;for(const i in Hr)(e++&3)===0&&(delete Hr[i],--Xl)}const t=Ly(n);if(t.length!==4)throw new Error('Failed to parse "'+n+'" as color');for(const e of t)if(isNaN(e))throw new Error('Failed to parse "'+n+'" as color');return tf(t),Hr[n]=t,++Xl,t}function ba(n){return Array.isArray(n)?n:Ac(n)}function tf(n){return n[0]=Gt(n[0]+.5|0,0,255),n[1]=Gt(n[1]+.5|0,0,255),n[2]=Gt(n[2]+.5|0,0,255),n[3]=Gt(n[3],0,1),n}function ef(n){let t=n[0];t!=(t|0)&&(t=t+.5|0);let e=n[1];e!=(e|0)&&(e=e+.5|0);let i=n[2];i!=(i|0)&&(i=i+.5|0);const s=n[3]===void 0?1:Math.round(n[3]*100)/100;return"rgba("+t+","+e+","+i+","+s+")"}function Oy(n){try{return Ac(n),!0}catch{return!1}}class Py{constructor(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}clear(){this.cache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let t=0;for(const e in this.cache_){const i=this.cache_[e];(t++&3)===0&&!i.hasListener()&&(delete this.cache_[e],--this.cacheSize_)}}}get(t,e,i){const s=ad(t,e,i);return s in this.cache_?this.cache_[s]:null}set(t,e,i,s){const r=ad(t,e,i);this.cache_[r]=s,++this.cacheSize_}setSize(t){this.maxCacheSize_=t,this.expire()}}function ad(n,t,e){const i=e?Qg(e):"null";return t+":"+n+":"+i}const Ia=new Py,Lt={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};class nf extends xi{constructor(t){super(),this.on,this.once,this.un,this.background_=t.background;const e=Object.assign({},t);typeof t.properties=="object"&&(delete e.properties,Object.assign(e,t.properties)),e[Lt.OPACITY]=t.opacity!==void 0?t.opacity:1,yt(typeof e[Lt.OPACITY]=="number","Layer opacity must be a number"),e[Lt.VISIBLE]=t.visible!==void 0?t.visible:!0,e[Lt.Z_INDEX]=t.zIndex,e[Lt.MAX_RESOLUTION]=t.maxResolution!==void 0?t.maxResolution:1/0,e[Lt.MIN_RESOLUTION]=t.minResolution!==void 0?t.minResolution:0,e[Lt.MIN_ZOOM]=t.minZoom!==void 0?t.minZoom:-1/0,e[Lt.MAX_ZOOM]=t.maxZoom!==void 0?t.maxZoom:1/0,this.className_=e.className!==void 0?e.className:"ol-layer",delete e.className,this.setProperties(e),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(t){const e=this.state_||{layer:this,managed:t===void 0?!0:t},i=this.getZIndex();return e.opacity=Gt(Math.round(this.getOpacity()*100)/100,0,1),e.visible=this.getVisible(),e.extent=this.getExtent(),e.zIndex=i===void 0&&!e.managed?1/0:i,e.maxResolution=this.getMaxResolution(),e.minResolution=Math.max(this.getMinResolution(),0),e.minZoom=this.getMinZoom(),e.maxZoom=this.getMaxZoom(),this.state_=e,e}getLayersArray(t){return q()}getLayerStatesArray(t){return q()}getExtent(){return this.get(Lt.EXTENT)}getMaxResolution(){return this.get(Lt.MAX_RESOLUTION)}getMinResolution(){return this.get(Lt.MIN_RESOLUTION)}getMinZoom(){return this.get(Lt.MIN_ZOOM)}getMaxZoom(){return this.get(Lt.MAX_ZOOM)}getOpacity(){return this.get(Lt.OPACITY)}getSourceState(){return q()}getVisible(){return this.get(Lt.VISIBLE)}getZIndex(){return this.get(Lt.Z_INDEX)}setBackground(t){this.background_=t,this.changed()}setExtent(t){this.set(Lt.EXTENT,t)}setMaxResolution(t){this.set(Lt.MAX_RESOLUTION,t)}setMinResolution(t){this.set(Lt.MIN_RESOLUTION,t)}setMaxZoom(t){this.set(Lt.MAX_ZOOM,t)}setMinZoom(t){this.set(Lt.MIN_ZOOM,t)}setOpacity(t){yt(typeof t=="number","Layer opacity must be a number"),this.set(Lt.OPACITY,t)}setVisible(t){this.set(Lt.VISIBLE,t)}setZIndex(t){this.set(Lt.Z_INDEX,t)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const Pi={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},re={ANIMATING:0,INTERACTING:1},ze={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},Ky=42,Oc=256;function ld(n,t,e){return(function(i,s,r,o,a){if(!i)return;if(!s&&!t)return i;const l=t?0:r[0]*s,h=t?0:r[1]*s,c=a?a[0]:0,u=a?a[1]:0;let g=n[0]+l/2+c,d=n[2]-l/2+c,f=n[1]+h/2+u,m=n[3]-h/2+u;g>d&&(g=(d+g)/2,d=g),f>m&&(f=(m+f)/2,m=f);let y=Gt(i[0],g,d),_=Gt(i[1],f,m);if(o&&e&&s){const p=30*s;y+=-p*Math.log(1+Math.max(0,g-i[0])/p)+p*Math.log(1+Math.max(0,i[0]-d)/p),_+=-p*Math.log(1+Math.max(0,f-i[1])/p)+p*Math.log(1+Math.max(0,i[1]-m)/p)}return[y,_]})}function Dy(n){return n}function Pc(n,t,e,i){const s=wt(t)/e[0],r=he(t)/e[1];return i?Math.min(n,Math.max(s,r)):Math.min(n,Math.min(s,r))}function Kc(n,t,e){let i=Math.min(n,t);const s=50;return i*=Math.log(1+s*Math.max(0,n/t-1))/s+1,e&&(i=Math.max(i,e),i/=Math.log(1+s*Math.max(0,e/n-1))/s+1),Gt(i,e/2,t*2)}function Fy(n,t,e,i){return t=t!==void 0?t:!0,(function(s,r,o,a){if(s!==void 0){const l=n[0],h=n[n.length-1],c=e?Pc(l,e,o,i):l;if(a)return t?Kc(s,c,h):Gt(s,h,c);const u=Math.min(c,s),g=Math.floor(Qa(n,u,r));return n[g]>c&&g<n.length-1?n[g+1]:n[g]}})}function ky(n,t,e,i,s,r){return i=i!==void 0?i:!0,e=e!==void 0?e:0,(function(o,a,l,h){if(o!==void 0){const c=s?Pc(t,s,l,r):t;if(h)return i?Kc(o,c,e):Gt(o,e,c);const u=1e-9,g=Math.ceil(Math.log(t/c)/Math.log(n)-u),d=-a*(.5-u)+.5,f=Math.min(c,o),m=Math.floor(Math.log(t/f)/Math.log(n)+d),y=Math.max(g,m),_=t/Math.pow(n,y);return Gt(_,e,c)}})}function hd(n,t,e,i,s){return e=e!==void 0?e:!0,(function(r,o,a,l){if(r!==void 0){const h=i?Pc(n,i,a,s):n;return!e||!l?Gt(r,t,h):Kc(r,h,t)}})}function Dc(n){if(n!==void 0)return 0}function cd(n){if(n!==void 0)return n}function Gy(n){const t=2*Math.PI/n;return(function(e,i){if(i)return e;if(e!==void 0)return e=Math.floor(e/t+.5)*t,e})}function zy(n){const t=_a(5);return(function(e,i){return i||e===void 0?e:Math.abs(e)<=t?0:e})}function sf(n){return Math.pow(n,3)}function Lr(n){return 1-sf(1-n)}function Wy(n){return 3*n*n-2*n*n*n}function By(n){return n}function An(n,t,e,i,s,r){r=r||[];let o=0;for(let a=t;a<e;a+=i){const l=n[a],h=n[a+1];r[o++]=s[0]*l+s[2]*h+s[4],r[o++]=s[1]*l+s[3]*h+s[5]}return r&&r.length!=o&&(r.length=o),r}function rf(n,t,e,i,s,r,o){o=o||[];const a=Math.cos(s),l=Math.sin(s),h=r[0],c=r[1];let u=0;for(let g=t;g<e;g+=i){const d=n[g]-h,f=n[g+1]-c;o[u++]=h+d*a-f*l,o[u++]=c+d*l+f*a;for(let m=g+2;m<g+i;++m)o[u++]=n[m]}return o&&o.length!=u&&(o.length=u),o}function Hy(n,t,e,i,s,r,o,a){a=a||[];const l=o[0],h=o[1];let c=0;for(let u=t;u<e;u+=i){const g=n[u]-l,d=n[u+1]-h;a[c++]=l+s*g,a[c++]=h+r*d;for(let f=u+2;f<u+i;++f)a[c++]=n[f]}return a&&a.length!=c&&(a.length=c),a}function Xy(n,t,e,i,s,r,o){o=o||[];let a=0;for(let l=t;l<e;l+=i){o[a++]=n[l]+s,o[a++]=n[l+1]+r;for(let h=l+2;h<l+i;++h)o[a++]=n[h]}return o&&o.length!=a&&(o.length=a),o}const ud=yi();let of=class extends xi{constructor(){super(),this.extent_=Ue(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=pg((t,e,i)=>{if(!i)return this.getSimplifiedGeometry(e);const s=this.clone();return s.applyTransform(i),s.getSimplifiedGeometry(e)})}simplifyTransformed(t,e){return this.simplifyTransformedInternal(this.getRevision(),t,e)}clone(){return q()}closestPointXY(t,e,i,s){return q()}containsXY(t,e){const i=this.getClosestPoint([t,e]);return i[0]===t&&i[1]===e}getClosestPoint(t,e){return e=e||[NaN,NaN],this.closestPointXY(t[0],t[1],e,1/0),e}intersectsCoordinate(t){return this.containsXY(t[0],t[1])}computeExtent(t){return q()}getExtent(t){if(this.extentRevision_!=this.getRevision()){const e=this.computeExtent(this.extent_);(isNaN(e[0])||isNaN(e[1]))&&br(e),this.extentRevision_=this.getRevision()}return Vm(this.extent_,t)}rotate(t,e){q()}scale(t,e,i){q()}simplify(t){return this.getSimplifiedGeometry(t*t)}getSimplifiedGeometry(t){return q()}getType(){return q()}applyTransform(t){q()}intersectsExtent(t){return q()}translate(t,e){q()}transform(t,e){const i=at(t),s=i.getUnits()=="tile-pixels"?function(r,o,a){const l=i.getExtent(),h=i.getWorldExtent(),c=he(h)/he(l);return hn(ud,h[0],h[3],c,-c,0,0,0),An(r,0,r.length,a,ud,o),gr(i,e)(r,o,a)}:gr(i,e);return this.applyTransform(s),this}};class Cs extends of{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(t){return wc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinates(){return q()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const e=this.getSimplifiedGeometryInternal(t);return e.getFlatCoordinates().length<this.flatCoordinates.length?e:(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getSimplifiedGeometryInternal(t){return this}getStride(){return this.stride}setFlatCoordinates(t,e){this.stride=dd(t),this.layout=t,this.flatCoordinates=e}setCoordinates(t,e){q()}setLayout(t,e,i){let s;if(t)s=dd(t);else{for(let r=0;r<i;++r){if(e.length===0){this.layout="XY",this.stride=2;return}e=e[0]}s=e.length,t=Rs(s)}this.layout=t,this.stride=s}applyTransform(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(t,e){const i=this.getFlatCoordinates();if(i){const s=this.getStride();rf(i,0,i.length,s,t,e,i),this.changed()}}scale(t,e,i){e===void 0&&(e=t),i||(i=pi(this.getExtent()));const s=this.getFlatCoordinates();if(s){const r=this.getStride();Hy(s,0,s.length,r,t,e,i,s),this.changed()}}translate(t,e){const i=this.getFlatCoordinates();if(i){const s=this.getStride();Xy(i,0,i.length,s,t,e,i),this.changed()}}}function Rs(n){let t;return n==2?t="XY":n==3?t="XYZ":n==4&&(t="XYZM"),t}function dd(n){let t;return n=="XY"?t=2:n=="XYZ"||n=="XYM"?t=3:n=="XYZM"&&(t=4),t}function Uy(n,t,e){const i=n.getFlatCoordinates();if(!i)return null;const s=n.getStride();return An(i,0,i.length,s,t,e)}function gd(n,t,e,i,s,r,o){const a=n[t],l=n[t+1],h=n[e]-a,c=n[e+1]-l;let u;if(h===0&&c===0)u=t;else{const g=((s-a)*h+(r-l)*c)/(h*h+c*c);if(g>1)u=e;else if(g>0){for(let d=0;d<i;++d)o[d]=We(n[t+d],n[e+d],g);o.length=i;return}else u=t}for(let g=0;g<i;++g)o[g]=n[u+g];o.length=i}function Fc(n,t,e,i,s){let r=n[t],o=n[t+1];for(t+=i;t<e;t+=i){const a=n[t],l=n[t+1],h=ns(r,o,a,l);h>s&&(s=h),r=a,o=l}return s}function kc(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){const a=e[r];s=Fc(n,t,a,i,s),t=a}return s}function Yy(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){const a=e[r];s=kc(n,t,a,i,s),t=a[a.length-1]}return s}function Gc(n,t,e,i,s,r,o,a,l,h,c){if(t==e)return h;let u,g;if(s===0){if(g=ns(o,a,n[t],n[t+1]),g<h){for(u=0;u<i;++u)l[u]=n[t+u];return l.length=i,g}return h}c=c||[NaN,NaN];let d=t+i;for(;d<e;)if(gd(n,d-i,d,i,o,a,c),g=ns(o,a,c[0],c[1]),g<h){for(h=g,u=0;u<i;++u)l[u]=c[u];l.length=i,d+=i}else d+=i*Math.max((Math.sqrt(g)-Math.sqrt(h))/s|0,1);if(r&&(gd(n,e-i,t,i,o,a,c),g=ns(o,a,c[0],c[1]),g<h)){for(h=g,u=0;u<i;++u)l[u]=c[u];l.length=i}return h}function zc(n,t,e,i,s,r,o,a,l,h,c){c=c||[NaN,NaN];for(let u=0,g=e.length;u<g;++u){const d=e[u];h=Gc(n,t,d,i,s,r,o,a,l,h,c),t=d}return h}function Vy(n,t,e,i,s,r,o,a,l,h,c){c=c||[NaN,NaN];for(let u=0,g=e.length;u<g;++u){const d=e[u];h=zc(n,t,d,i,s,r,o,a,l,h,c),t=d[d.length-1]}return h}function jy(n,t,e,i){for(let s=0,r=e.length;s<r;++s)n[t++]=e[s];return t}function al(n,t,e,i){for(let s=0,r=e.length;s<r;++s){const o=e[s];for(let a=0;a<i;++a)n[t++]=o[a]}return t}function Do(n,t,e,i,s){s=s||[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=al(n,t,e[o],i);s[r++]=l,t=l}return s.length=r,s}function af(n,t,e,i,s){s=s||[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=Do(n,t,e[o],i,s[r]);l.length===0&&(l[0]=t),s[r++]=l,t=l[l.length-1]}return s.length=r,s}function ll(n,t,e,i,s,r,o){const a=(e-t)/i;if(a<3){for(;t<e;t+=i)r[o++]=n[t],r[o++]=n[t+1];return o}const l=new Array(a);l[0]=1,l[a-1]=1;const h=[t,e-i];let c=0;for(;h.length>0;){const u=h.pop(),g=h.pop();let d=0;const f=n[g],m=n[g+1],y=n[u],_=n[u+1];for(let p=g+i;p<u;p+=i){const x=n[p],M=n[p+1],C=Jm(x,M,f,m,y,_);C>d&&(c=p,d=C)}d>s&&(l[(c-t)/i]=1,g+i<c&&h.push(g,c),c+i<u&&h.push(c,u))}for(let u=0;u<a;++u)l[u]&&(r[o++]=n[t+u*i],r[o++]=n[t+u*i+1]);return o}function lf(n,t,e,i,s,r,o,a){for(let l=0,h=e.length;l<h;++l){const c=e[l];o=ll(n,t,c,i,s,r,o),a.push(o),t=c}return o}function Zn(n,t){return t*Math.round(n/t)}function qy(n,t,e,i,s,r,o){if(t==e)return o;let a=Zn(n[t],s),l=Zn(n[t+1],s);t+=i,r[o++]=a,r[o++]=l;let h,c;do if(h=Zn(n[t],s),c=Zn(n[t+1],s),t+=i,t==e)return r[o++]=h,r[o++]=c,o;while(h==a&&c==l);for(;t<e;){const u=Zn(n[t],s),g=Zn(n[t+1],s);if(t+=i,u==h&&g==c)continue;const d=h-a,f=c-l,m=u-a,y=g-l;if(d*y==f*m&&(d<0&&m<d||d==m||d>0&&m>d)&&(f<0&&y<f||f==y||f>0&&y>f)){h=u,c=g;continue}r[o++]=h,r[o++]=c,a=h,l=c,h=u,c=g}return r[o++]=h,r[o++]=c,o}function Wc(n,t,e,i,s,r,o,a){for(let l=0,h=e.length;l<h;++l){const c=e[l];o=qy(n,t,c,i,s,r,o),a.push(o),t=c}return o}function Zy(n,t,e,i,s,r,o,a){for(let l=0,h=e.length;l<h;++l){const c=e[l],u=[];o=Wc(n,t,c,i,s,r,o,u),a.push(u),t=c[c.length-1]}return o}function vn(n,t,e,i,s){s=s!==void 0?s:[];let r=0;for(let o=t;o<e;o+=i)s[r++]=n.slice(o,o+i);return s.length=r,s}function uo(n,t,e,i,s){s=s!==void 0?s:[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=e[o];s[r++]=vn(n,t,l,i,s[r]),t=l}return s.length=r,s}function Ph(n,t,e,i,s){s=s!==void 0?s:[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=e[o];s[r++]=l.length===1&&l[0]===t?[]:uo(n,t,l,i,s[r]),t=l[l.length-1]}return s.length=r,s}function hf(n,t,e,i){let s=0,r=n[e-i],o=n[e-i+1];for(;t<e;t+=i){const a=n[t],l=n[t+1];s+=o*a-r*l,r=a,o=l}return s/2}function cf(n,t,e,i){let s=0;for(let r=0,o=e.length;r<o;++r){const a=e[r];s+=hf(n,t,a,i),t=a}return s}function $y(n,t,e,i){let s=0;for(let r=0,o=e.length;r<o;++r){const a=e[r];s+=cf(n,t,a,i),t=a[a.length-1]}return s}let fd=class Kh extends Cs{constructor(t,e){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,e!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}clone(){return new Kh(this.flatCoordinates.slice(),this.layout)}closestPointXY(t,e,i,s){return s<Ts(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Fc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Gc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,e,i,s))}getArea(){return hf(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return vn(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(t){const e=[];return e.length=ll(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new Kh(e,"XY")}getType(){return"LinearRing"}intersectsExtent(t){return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=al(this.flatCoordinates,0,t,this.stride),this.changed()}},La=class uf extends Cs{constructor(t,e){super(),this.setCoordinates(t,e)}clone(){const t=new uf(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){const r=this.flatCoordinates,o=ns(t,e,r[0],r[1]);if(o<s){const a=this.stride;for(let l=0;l<a;++l)i[l]=r[l];return i.length=a,o}return s}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(t){return Lg(this.flatCoordinates,t)}getType(){return"Point"}intersectsExtent(t){return yc(t,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(t,e){this.setLayout(e,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=jy(this.flatCoordinates,0,t,this.stride),this.changed()}};function Jy(n,t,e,i,s){return!Ag(s,function(o){return!ts(n,t,e,i,o[0],o[1])})}function ts(n,t,e,i,s,r){let o=0,a=n[e-i],l=n[e-i+1];for(;t<e;t+=i){const h=n[t],c=n[t+1];l<=r?c>r&&(h-a)*(r-l)-(s-a)*(c-l)>0&&o++:c<=r&&(h-a)*(r-l)-(s-a)*(c-l)<0&&o--,a=h,l=c}return o!==0}function Bc(n,t,e,i,s,r){if(e.length===0||!ts(n,t,e[0],i,s,r))return!1;for(let o=1,a=e.length;o<a;++o)if(ts(n,e[o-1],e[o],i,s,r))return!1;return!0}function Qy(n,t,e,i,s,r){if(e.length===0)return!1;for(let o=0,a=e.length;o<a;++o){const l=e[o];if(Bc(n,t,l,i,s,r))return!0;t=l[l.length-1]}return!1}function Hc(n,t,e,i,s,r,o){let a,l,h,c,u,g,d;const f=s[r+1],m=[];for(let p=0,x=e.length;p<x;++p){const M=e[p];for(c=n[M-i],g=n[M-i+1],a=t;a<M;a+=i)u=n[a],d=n[a+1],(f<=g&&d<=f||g<=f&&f<=d)&&(h=(f-g)/(d-g)*(u-c)+c,m.push(h)),c=u,g=d}let y=NaN,_=-1/0;for(m.sort(Pn),c=m[0],a=1,l=m.length;a<l;++a){u=m[a];const p=Math.abs(u-c);p>_&&(h=(c+u)/2,Bc(n,t,e,i,h,f)&&(y=h,_=p)),c=u}return isNaN(y)&&(y=s[r]),o?(o.push(y,f,_),o):[y,f,_]}function df(n,t,e,i,s){let r=[];for(let o=0,a=e.length;o<a;++o){const l=e[o];r=Hc(n,t,l,i,s,2*o,r),t=l[l.length-1]}return r}function gf(n,t,e,i,s){let r;for(t+=i;t<e;t+=i)if(r=s(n.slice(t-i,t),n.slice(t,t+i)),r)return r;return!1}function hl(n,t,e,i,s){const r=Ng(Ue(),n,t,e,i);return Ne(s,r)?fi(s,r)||r[0]>=s[0]&&r[2]<=s[2]||r[1]>=s[1]&&r[3]<=s[3]?!0:gf(n,t,e,i,function(o,a){return qm(s,o,a)}):!1}function tw(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){if(hl(n,t,e[r],i,s))return!0;t=e[r]}return!1}function ff(n,t,e,i,s){return!!(hl(n,t,e,i,s)||ts(n,t,e,i,s[0],s[1])||ts(n,t,e,i,s[0],s[3])||ts(n,t,e,i,s[2],s[1])||ts(n,t,e,i,s[2],s[3]))}function mf(n,t,e,i,s){if(!ff(n,t,e[0],i,s))return!1;if(e.length===1)return!0;for(let r=1,o=e.length;r<o;++r)if(Jy(n,e[r-1],e[r],i,s)&&!hl(n,e[r-1],e[r],i,s))return!1;return!0}function ew(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){const a=e[r];if(mf(n,t,a,i,s))return!0;t=a[a.length-1]}return!1}function iw(n,t,e,i){for(;t<e-i;){for(let s=0;s<i;++s){const r=n[t+s];n[t+s]=n[e-i+s],n[e-i+s]=r}t+=i,e-=i}}function Xc(n,t,e,i){let s=0,r=n[e-i],o=n[e-i+1];for(;t<e;t+=i){const a=n[t],l=n[t+1];s+=(a-r)*(l+o),r=a,o=l}return s===0?void 0:s>0}function Uc(n,t,e,i,s){s=s!==void 0?s:!1;for(let r=0,o=e.length;r<o;++r){const a=e[r],l=Xc(n,t,a,i);if(r===0){if(s&&l||!s&&!l)return!1}else if(s&&!l||!s&&l)return!1;t=a}return!0}function yf(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r){const a=e[r];if(!Uc(n,t,a,i,s))return!1;a.length&&(t=a[a.length-1])}return!0}function Sa(n,t,e,i,s){s=s!==void 0?s:!1;for(let r=0,o=e.length;r<o;++r){const a=e[r],l=Xc(n,t,a,i);(r===0?s&&l||!s&&!l:s&&!l||!s&&l)&&iw(n,t,a,i),t=a}return t}function Dh(n,t,e,i,s){for(let r=0,o=e.length;r<o;++r)t=Sa(n,t,e[r],i,s);return t}function nw(n,t){const e=[];let i=0,s=0,r;for(let o=0,a=t.length;o<a;++o){const l=t[o],h=Xc(n,i,l,2);if(r===void 0&&(r=h),h===r)e.push(t.slice(s,o+1));else{if(e.length===0)continue;e[e.length-1].push(t[s])}s=o+1,i=l}return e}let fr=class Fh extends Cs{constructor(t,e,i){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,e!==void 0&&i?(this.setFlatCoordinates(e,t),this.ends_=i):this.setCoordinates(t,e)}appendLinearRing(t){this.flatCoordinates?Oi(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new Fh(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<Ts(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(kc(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),zc(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,e,i,s))}containsXY(t,e){return Bc(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,e)}getArea(){return cf(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(t){let e;return t!==void 0?(e=this.getOrientedFlatCoordinates().slice(),Sa(e,0,this.ends_,this.stride,t)):e=this.flatCoordinates,uo(e,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const t=pi(this.getExtent());this.flatInteriorPoint_=Hc(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new La(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(t){return t<0||this.ends_.length<=t?null:new fd(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLinearRings(){const t=this.layout,e=this.flatCoordinates,i=this.ends_,s=[];let r=0;for(let o=0,a=i.length;o<a;++o){const l=i[o],h=new fd(e.slice(r,l),t);s.push(h),r=l}return s}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;Uc(t,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=Sa(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=Wc(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),e,0,i),new Fh(e,"XY",i)}getType(){return"Polygon"}intersectsExtent(t){return mf(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const i=Do(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}};function kh(n){if(Ir(n))throw new Error("Cannot create polygon from empty extent");const t=n[0],e=n[1],i=n[2],s=n[3],r=[t,e,t,s,i,s,i,e,t,e];return new fr(r,"XY",[r.length])}function mE(n,t,e){t=t||32;const i=n.getStride(),s=n.getLayout(),r=n.getCenter(),o=i*(t+1),a=new Array(o);for(let c=0;c<o;c+=i){a[c]=0,a[c+1]=0;for(let u=2;u<i;u++)a[c+u]=r[u]}const l=[a.length],h=new fr(a,s,l);return sw(h,r,n.getRadius()),h}function sw(n,t,e,i){const s=n.getFlatCoordinates(),r=n.getStride(),o=s.length/r-1,a=0;for(let l=0;l<=o;++l){const h=l*r,c=a+Nn(l,o)*2*Math.PI/o;s[h]=t[0]+e*Math.cos(c),s[h+1]=t[1]+e*Math.sin(c)}n.changed()}const Ul=0;class ti extends xi{constructor(t){super(),this.on,this.once,this.un,t=Object.assign({},t),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=Tc(t.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,t.projection&&sy(),t.center&&(t.center=Qi(t.center,this.projection_)),t.extent&&(t.extent=Jn(t.extent,this.projection_)),this.applyOptions_(t)}applyOptions_(t){const e=Object.assign({},t);for(const a in ze)delete e[a];this.setProperties(e,!0);const i=ow(t);this.maxResolution_=i.maxResolution,this.minResolution_=i.minResolution,this.zoomFactor_=i.zoomFactor,this.resolutions_=t.resolutions,this.padding_=t.padding,this.minZoom_=i.minZoom;const s=rw(t),r=i.constraint,o=aw(t);this.constraints_={center:s,resolution:r,rotation:o},this.setRotation(t.rotation!==void 0?t.rotation:0),this.setCenterInternal(t.center!==void 0?t.center:null),t.resolution!==void 0?this.setResolution(t.resolution):t.zoom!==void 0&&this.setZoom(t.zoom)}get padding(){return this.padding_}set padding(t){let e=this.padding_;this.padding_=t;const i=this.getCenterInternal();if(i){const s=t||[0,0,0,0];e=e||[0,0,0,0];const r=this.getResolution(),o=r/2*(s[3]-e[3]+e[1]-s[1]),a=r/2*(s[0]-e[0]+e[2]-s[2]);this.setCenterInternal([i[0]+o,i[1]-a])}}getUpdatedOptions_(t){const e=this.getProperties();return e.resolution!==void 0?e.resolution=this.getResolution():e.zoom=this.getZoom(),e.center=this.getCenterInternal(),e.rotation=this.getRotation(),Object.assign({},e,t)}animate(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);const e=new Array(arguments.length);for(let i=0;i<e.length;++i){let s=arguments[i];s.center&&(s=Object.assign({},s),s.center=Qi(s.center,this.getProjection())),s.anchor&&(s=Object.assign({},s),s.anchor=Qi(s.anchor,this.getProjection())),e[i]=s}this.animateInternal.apply(this,e)}animateInternal(t){let e=arguments.length,i;e>1&&typeof arguments[e-1]=="function"&&(i=arguments[e-1],--e);let s=0;for(;s<e&&!this.isDef();++s){const c=arguments[s];c.center&&this.setCenterInternal(c.center),c.zoom!==void 0?this.setZoom(c.zoom):c.resolution&&this.setResolution(c.resolution),c.rotation!==void 0&&this.setRotation(c.rotation)}if(s===e){i&&aa(i,!0);return}let r=Date.now(),o=this.targetCenter_.slice(),a=this.targetResolution_,l=this.targetRotation_;const h=[];for(;s<e;++s){const c=arguments[s],u={start:r,complete:!1,anchor:c.anchor,duration:c.duration!==void 0?c.duration:1e3,easing:c.easing||Wy,callback:i};if(c.center&&(u.sourceCenter=o,u.targetCenter=c.center.slice(),o=u.targetCenter),c.zoom!==void 0?(u.sourceResolution=a,u.targetResolution=this.getResolutionForZoom(c.zoom),a=u.targetResolution):c.resolution&&(u.sourceResolution=a,u.targetResolution=c.resolution,a=u.targetResolution),c.rotation!==void 0){u.sourceRotation=l;const g=Nn(c.rotation-l+Math.PI,2*Math.PI)-Math.PI;u.targetRotation=l+g,l=u.targetRotation}lw(u)?u.complete=!0:r+=u.duration,h.push(u)}this.animations_.push(h),this.setHint(re.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[re.ANIMATING]>0}getInteracting(){return this.hints_[re.INTERACTING]>0}cancelAnimations(){this.setHint(re.ANIMATING,-this.hints_[re.ANIMATING]);let t;for(let e=0,i=this.animations_.length;e<i;++e){const s=this.animations_[e];if(s[0].callback&&aa(s[0].callback,!1),!t)for(let r=0,o=s.length;r<o;++r){const a=s[r];if(!a.complete){t=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=t,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;const t=Date.now();let e=!1;for(let i=this.animations_.length-1;i>=0;--i){const s=this.animations_[i];let r=!0;for(let o=0,a=s.length;o<a;++o){const l=s[o];if(l.complete)continue;const h=t-l.start;let c=l.duration>0?h/l.duration:1;c>=1?(l.complete=!0,c=1):r=!1;const u=l.easing(c);if(l.sourceCenter){const g=l.sourceCenter[0],d=l.sourceCenter[1],f=l.targetCenter[0],m=l.targetCenter[1];this.nextCenter_=l.targetCenter;const y=g+u*(f-g),_=d+u*(m-d);this.targetCenter_=[y,_]}if(l.sourceResolution&&l.targetResolution){const g=u===1?l.targetResolution:l.sourceResolution+u*(l.targetResolution-l.sourceResolution);if(l.anchor){const d=this.getViewportSize_(this.getRotation()),f=this.constraints_.resolution(g,0,d,!0);this.targetCenter_=this.calculateCenterZoom(f,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=g,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){const g=u===1?Nn(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+u*(l.targetRotation-l.sourceRotation);if(l.anchor){const d=this.constraints_.rotation(g,!0);this.targetCenter_=this.calculateCenterRotate(d,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=g}if(this.applyTargetState_(!0),e=!0,!l.complete)break}if(r){this.animations_[i]=null,this.setHint(re.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;const o=s[0].callback;o&&aa(o,!0)}}this.animations_=this.animations_.filter(Boolean),e&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(t,e){let i;const s=this.getCenterInternal();return s!==void 0&&(i=[s[0]-e[0],s[1]-e[1]],pc(i,t-this.getRotation()),ty(i,e)),i}calculateCenterZoom(t,e){let i;const s=this.getCenterInternal(),r=this.getResolution();if(s!==void 0&&r!==void 0){const o=e[0]-t*(e[0]-s[0])/r,a=e[1]-t*(e[1]-s[1])/r;i=[o,a]}return i}getViewportSize_(t){const e=this.viewportSize_;if(t){const i=e[0],s=e[1];return[Math.abs(i*Math.cos(t))+Math.abs(s*Math.sin(t)),Math.abs(i*Math.sin(t))+Math.abs(s*Math.cos(t))]}return e}setViewportSize(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){const t=this.getCenterInternal();return t&&Ch(t,this.getProjection())}getCenterInternal(){return this.get(ze.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(t){return t!==void 0?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()}calculateExtent(t){const e=this.calculateExtentInternal(t);return Wg(e,this.getProjection())}calculateExtentInternal(t){t=t||this.getViewportSizeMinusPadding_();const e=this.getCenterInternal();yt(e,"The view center is not defined");const i=this.getResolution();yt(i!==void 0,"The view resolution is not defined");const s=this.getRotation();return yt(s!==void 0,"The view rotation is not defined"),ao(e,i,s,t)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))}setConstrainResolution(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))}getProjection(){return this.projection_}getResolution(){return this.get(ze.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(t,e){return this.getResolutionForExtentInternal(Jn(t,this.getProjection()),e)}getResolutionForExtentInternal(t,e){e=e||this.getViewportSizeMinusPadding_();const i=wt(t)/e[0],s=he(t)/e[1];return Math.max(i,s)}getResolutionForValueFunction(t){t=t||2;const e=this.getConstrainedResolution(this.maxResolution_),i=this.minResolution_,s=Math.log(e/i)/Math.log(t);return(function(r){return e/Math.pow(t,r*s)})}getRotation(){return this.get(ze.ROTATION)}getValueForResolutionFunction(t){const e=Math.log(t||2),i=this.getConstrainedResolution(this.maxResolution_),s=this.minResolution_,r=Math.log(i/s)/e;return(function(o){return Math.log(i/o)/e/r})}getViewportSizeMinusPadding_(t){let e=this.getViewportSize_(t);const i=this.padding_;return i&&(e=[e[0]-i[1]-i[3],e[1]-i[0]-i[2]]),e}getState(){const t=this.getProjection(),e=this.getResolution(),i=this.getRotation();let s=this.getCenterInternal();const r=this.padding_;if(r){const o=this.getViewportSizeMinusPadding_();s=Yl(s,this.getViewportSize_(),[o[0]/2+r[3],o[1]/2+r[0]],e,i)}return{center:s.slice(0),projection:t!==void 0?t:null,resolution:e,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:i,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let t;const e=this.getResolution();return e!==void 0&&(t=this.getZoomForResolution(e)),t}getZoomForResolution(t){let e=this.minZoom_||0,i,s;if(this.resolutions_){const r=Qa(this.resolutions_,t,1);e=r,i=this.resolutions_[r],r==this.resolutions_.length-1?s=2:s=i/this.resolutions_[r+1]}else i=this.maxResolution_,s=this.zoomFactor_;return e+Math.log(i/t)/Math.log(s)}getResolutionForZoom(t){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;const e=Gt(Math.floor(t),0,this.resolutions_.length-2),i=this.resolutions_[e]/this.resolutions_[e+1];return this.resolutions_[e]/Math.pow(i,Gt(t-e,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)}fit(t,e){let i;if(yt(Array.isArray(t)||typeof t.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(t)){yt(!Ir(t),"Cannot fit empty extent provided as `geometry`");const s=Jn(t,this.getProjection());i=kh(s)}else if(t.getType()==="Circle"){const s=Jn(t.getExtent(),this.getProjection());i=kh(s),i.rotate(this.getRotation(),pi(s))}else i=t;this.fitInternal(i,e)}rotatedExtentForGeometry(t){const e=this.getRotation(),i=Math.cos(e),s=Math.sin(-e),r=t.getFlatCoordinates(),o=t.getStride();let a=1/0,l=1/0,h=-1/0,c=-1/0;for(let u=0,g=r.length;u<g;u+=o){const d=r[u]*i-r[u+1]*s,f=r[u]*s+r[u+1]*i;a=Math.min(a,d),l=Math.min(l,f),h=Math.max(h,d),c=Math.max(c,f)}return[a,l,h,c]}fitInternal(t,e){e=e||{};let i=e.size;i||(i=this.getViewportSizeMinusPadding_());const s=e.padding!==void 0?e.padding:[0,0,0,0],r=e.nearest!==void 0?e.nearest:!1;let o;e.minResolution!==void 0?o=e.minResolution:e.maxZoom!==void 0?o=this.getResolutionForZoom(e.maxZoom):o=0;const a=this.rotatedExtentForGeometry(t);let l=this.getResolutionForExtentInternal(a,[i[0]-s[1]-s[3],i[1]-s[0]-s[2]]);l=isNaN(l)?o:Math.max(l,o),l=this.getConstrainedResolution(l,r?0:1);const h=this.getRotation(),c=Math.sin(h),u=Math.cos(h),g=pi(a);g[0]+=(s[1]-s[3])/2*l,g[1]+=(s[0]-s[2])/2*l;const d=g[0]*u-g[1]*c,f=g[1]*u+g[0]*c,m=this.getConstrainedCenter([d,f],l),y=e.callback?e.callback:hr;e.duration!==void 0?this.animateInternal({resolution:l,center:m,duration:e.duration,easing:e.easing},y):(this.targetResolution_=l,this.targetCenter_=m,this.applyTargetState_(!1,!0),aa(y,!0))}centerOn(t,e,i){this.centerOnInternal(Qi(t,this.getProjection()),e,i)}centerOnInternal(t,e,i){this.setCenterInternal(Yl(t,e,i,this.getResolution(),this.getRotation()))}calculateCenterShift(t,e,i,s){let r;const o=this.padding_;if(o&&t){const a=this.getViewportSizeMinusPadding_(-i),l=Yl(t,s,[a[0]/2+o[3],a[1]/2+o[0]],e,i);r=[t[0]-l[0],t[1]-l[1]]}return r}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(t){const e=Ch(this.targetCenter_,this.getProjection());this.setCenter([e[0]+t[0],e[1]+t[1]])}adjustCenterInternal(t){const e=this.targetCenter_;this.setCenterInternal([e[0]+t[0],e[1]+t[1]])}adjustResolution(t,e){e=e&&Qi(e,this.getProjection()),this.adjustResolutionInternal(t,e)}adjustResolutionInternal(t,e){const i=this.getAnimating()||this.getInteracting(),s=this.getViewportSize_(this.getRotation()),r=this.constraints_.resolution(this.targetResolution_*t,0,s,i);e&&(this.targetCenter_=this.calculateCenterZoom(r,e)),this.targetResolution_*=t,this.applyTargetState_()}adjustZoom(t,e){this.adjustResolution(Math.pow(this.zoomFactor_,-t),e)}adjustRotation(t,e){e&&(e=Qi(e,this.getProjection())),this.adjustRotationInternal(t,e)}adjustRotationInternal(t,e){const i=this.getAnimating()||this.getInteracting(),s=this.constraints_.rotation(this.targetRotation_+t,i);e&&(this.targetCenter_=this.calculateCenterRotate(s,e)),this.targetRotation_+=t,this.applyTargetState_()}setCenter(t){this.setCenterInternal(t&&Qi(t,this.getProjection()))}setCenterInternal(t){this.targetCenter_=t,this.applyTargetState_()}setHint(t,e){return this.hints_[t]+=e,this.changed(),this.hints_[t]}setResolution(t){this.targetResolution_=t,this.applyTargetState_()}setRotation(t){this.targetRotation_=t,this.applyTargetState_()}setZoom(t){this.setResolution(this.getResolutionForZoom(t))}applyTargetState_(t,e){const i=this.getAnimating()||this.getInteracting()||e,s=this.constraints_.rotation(this.targetRotation_,i),r=this.getViewportSize_(s),o=this.constraints_.resolution(this.targetResolution_,0,r,i),a=this.constraints_.center(this.targetCenter_,o,r,i,this.calculateCenterShift(this.targetCenter_,o,s,r));this.get(ze.ROTATION)!==s&&this.set(ze.ROTATION,s),this.get(ze.RESOLUTION)!==o&&(this.set(ze.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!a||!this.get(ze.CENTER)||!Ra(this.get(ze.CENTER),a))&&this.set(ze.CENTER,a),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(t,e,i){t=t!==void 0?t:200;const s=e||0,r=this.constraints_.rotation(this.targetRotation_),o=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,s,o),l=this.constraints_.center(this.targetCenter_,a,o,!1,this.calculateCenterShift(this.targetCenter_,a,r,o));if(t===0&&!this.cancelAnchor_){this.targetResolution_=a,this.targetRotation_=r,this.targetCenter_=l,this.applyTargetState_();return}i=i||(t===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==a||this.getRotation()!==r||!this.getCenterInternal()||!Ra(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:r,center:l,resolution:a,duration:t,easing:Lr,anchor:i}))}beginInteraction(){this.resolveConstraints(0),this.setHint(re.INTERACTING,1)}endInteraction(t,e,i){i=i&&Qi(i,this.getProjection()),this.endInteractionInternal(t,e,i)}endInteractionInternal(t,e,i){this.getInteracting()&&(this.setHint(re.INTERACTING,-1),this.resolveConstraints(t,e,i))}getConstrainedCenter(t,e){const i=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,e||this.getResolution(),i)}getConstrainedZoom(t,e){const i=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(i,e))}getConstrainedResolution(t,e){e=e||0;const i=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,e,i)}}function aa(n,t){setTimeout(function(){n(t)},0)}function rw(n){if(n.extent!==void 0){const e=n.smoothExtentConstraint!==void 0?n.smoothExtentConstraint:!0;return ld(n.extent,n.constrainOnlyCenter,e)}const t=Tc(n.projection,"EPSG:3857");if(n.multiWorld!==!0&&t.isGlobal()){const e=t.getExtent().slice();return e[0]=-1/0,e[2]=1/0,ld(e,!1,!1)}return Dy}function ow(n){let t,e,i,o=n.minZoom!==void 0?n.minZoom:Ul,a=n.maxZoom!==void 0?n.maxZoom:28;const l=n.zoomFactor!==void 0?n.zoomFactor:2,h=n.multiWorld!==void 0?n.multiWorld:!1,c=n.smoothResolutionConstraint!==void 0?n.smoothResolutionConstraint:!0,u=n.showFullExtent!==void 0?n.showFullExtent:!1,g=Tc(n.projection,"EPSG:3857"),d=g.getExtent();let f=n.constrainOnlyCenter,m=n.extent;if(!h&&!m&&g.isGlobal()&&(f=!1,m=d),n.resolutions!==void 0){const y=n.resolutions;e=y[o],i=y[a]!==void 0?y[a]:y[y.length-1],n.constrainResolution?t=Fy(y,c,!f&&m,u):t=hd(e,i,c,!f&&m,u)}else{const _=(d?Math.max(wt(d),he(d)):360*ur.degrees/g.getMetersPerUnit())/Oc/Math.pow(2,Ul),p=_/Math.pow(2,28-Ul);e=n.maxResolution,e!==void 0?o=0:e=_/Math.pow(l,o),i=n.minResolution,i===void 0&&(n.maxZoom!==void 0?n.maxResolution!==void 0?i=e/Math.pow(l,a):i=_/Math.pow(l,a):i=p),a=o+Math.floor(Math.log(e/i)/Math.log(l)),i=e/Math.pow(l,a-o),n.constrainResolution?t=ky(l,e,i,c,!f&&m,u):t=hd(e,i,c,!f&&m,u)}return{constraint:t,maxResolution:e,minResolution:i,minZoom:o,zoomFactor:l}}function aw(n){if(n.enableRotation!==void 0?n.enableRotation:!0){const e=n.constrainRotation;return e===void 0||e===!0?zy():e===!1?cd:typeof e=="number"?Gy(e):cd}return Dc}function lw(n){return!(n.sourceCenter&&n.targetCenter&&!Ra(n.sourceCenter,n.targetCenter)||n.sourceResolution!==n.targetResolution||n.sourceRotation!==n.targetRotation)}function Yl(n,t,e,i,s){const r=Math.cos(-s);let o=Math.sin(-s),a=n[0]*r-n[1]*o,l=n[1]*r+n[0]*o;a+=(t[0]/2-e[0])*i,l+=(e[1]-t[1]/2)*i,o=-o;const h=a*r-l*o,c=l*r+a*o;return[h,c]}class cl extends nf{constructor(t){const e=Object.assign({},t);delete e.source,super(e),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,t.render&&(this.render=t.render),t.map&&this.setMap(t.map),this.addChangeListener(Lt.SOURCE,this.handleSourcePropertyChange_);const i=t.source?t.source:null;this.setSource(i)}getLayersArray(t){return t=t||[],t.push(this),t}getLayerStatesArray(t){return t=t||[],t.push(this.getLayerState()),t}getSource(){return this.get(Lt.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){const t=this.getSource();return t?t.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(Nt(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;const t=this.getSource();t&&(this.sourceChangeKey_=ot(t,$.CHANGE,this.handleSourceChange_,this),t.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(t){return this.renderer_?this.renderer_.getFeatures(t):Promise.resolve([])}getData(t){return!this.renderer_||!this.rendered?null:this.renderer_.getData(t)}isVisible(t){let e;const i=this.getMapInternal();!t&&i&&(t=i.getView()),t instanceof ti?e={viewState:t.getState(),extent:t.calculateExtent()}:e=t,!e.layerStatesArray&&i&&(e.layerStatesArray=i.getLayerGroup().getLayerStatesArray());let s;e.layerStatesArray?s=e.layerStatesArray.find(o=>o.layer===this):s=this.getLayerState();const r=this.getExtent();return Yc(s,e.viewState)&&(!r||Ne(r,e.extent))}getAttributions(t){if(!this.isVisible(t))return[];let e;const i=this.getSource();if(i&&(e=i.getAttributions()),!e)return[];const s=t instanceof ti?t.getViewStateAndExtent():t;let r=e(s);return Array.isArray(r)||(r=[r]),r}render(t,e){const i=this.getRenderer();return i.prepareFrame(t)?(this.rendered=!0,i.renderFrame(t,e)):null}unrender(){this.rendered=!1}setMapInternal(t){t||this.unrender(),this.set(Lt.MAP,t)}getMapInternal(){return this.get(Lt.MAP)}setMap(t){this.mapPrecomposeKey_&&(Nt(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),t||this.changed(),this.mapRenderKey_&&(Nt(this.mapRenderKey_),this.mapRenderKey_=null),t&&(this.mapPrecomposeKey_=ot(t,Pi.PRECOMPOSE,function(e){const s=e.frameState.layerStatesArray,r=this.getLayerState(!1);yt(!s.some(function(o){return o.layer===r.layer}),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),s.push(r)},this),this.mapRenderKey_=ot(this,$.CHANGE,t.render,t),this.changed())}setSource(t){this.set(Lt.SOURCE,t)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}disposeInternal(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),super.disposeInternal()}}function Yc(n,t){if(!n.visible)return!1;const e=t.resolution;if(e<n.minResolution||e>=n.maxResolution)return!1;const i=t.zoom;return i>n.minZoom&&i<=n.maxZoom}class hw extends gc{constructor(t){super(),this.map_=t}dispatchRenderEvent(t,e){q()}calculateMatrices2D(t){const e=t.viewState,i=t.coordinateToPixelTransform,s=t.pixelToCoordinateTransform;hn(i,t.size[0]/2,t.size[1]/2,1/e.resolution,-1/e.resolution,-e.rotation,-e.center[0],-e.center[1]),Rc(s,i)}forEachFeatureAtCoordinate(t,e,i,s,r,o,a,l){let h;const c=e.viewState;function u(M,C,T,R){return r.call(o,C,M?T:null,R)}const g=c.projection,d=Kg(t.slice(),g),f=[[0,0]];if(g.canWrapX()&&s){const M=g.getExtent(),C=wt(M);f.push([-C,0],[C,0])}const m=e.layerStatesArray,y=m.length,_=[],p=[];for(let M=0;M<f.length;M++)for(let C=y-1;C>=0;--C){const T=m[C],R=T.layer;if(R.hasRenderer()&&Yc(T,c)&&a.call(l,R)){const v=R.getRenderer(),P=R.getSource();if(v&&P){const S=P.getWrapX()?d:t,D=u.bind(null,T.managed);p[0]=S[0]+f[M][0],p[1]=S[1]+f[M][1],h=v.forEachFeatureAtCoordinate(p,e,i,D,_)}if(h)return h}}if(_.length===0)return;const x=1/_.length;return _.forEach((M,C)=>M.distanceSq+=C*x),_.sort((M,C)=>M.distanceSq-C.distanceSq),_.some(M=>h=M.callback(M.feature,M.layer,M.geometry)),h}hasFeatureAtCoordinate(t,e,i,s,r,o){return this.forEachFeatureAtCoordinate(t,e,i,s,so,this,r,o)!==void 0}getMap(){return this.map_}renderFrame(t){q()}flushDeclutterItems(t){}scheduleExpireIconCache(t){Ia.canExpireCache()&&t.postRenderFunctions.push(cw)}}function cw(n,t){Ia.expire()}class wf extends Hi{constructor(t,e,i,s){super(t),this.inversePixelTransform=e,this.frameState=i,this.context=s}}const _f="10px sans-serif",Se="#000",mr="round",on=[],an=0,yr="round",go=10,fo="#000",mo="center",Na="middle",es=[0,0,0,0],yo=1,tn=new xi;let ks=null,Gh;const zh={},uw=(function(){const t="32px ",e=["monospace","serif"],i=e.length,s="wmytzilWMYTZIL@#/&?$%10";let r,o;function a(h,c,u){let g=!0;for(let d=0;d<i;++d){const f=e[d];if(o=Aa(h+" "+c+" "+t+f,s),u!=f){const m=Aa(h+" "+c+" "+t+u+","+f,s);g=g&&m!=o}}return!!g}function l(){let h=!0;const c=tn.getKeys();for(let u=0,g=c.length;u<g;++u){const d=c[u];tn.get(d)<100&&(a.apply(this,d.split(`
`))?(Lo(zh),ks=null,Gh=void 0,tn.set(d,100)):(tn.set(d,tn.get(d)+1,!0),h=!1))}h&&(clearInterval(r),r=void 0)}return function(h){const c=Eg(h);if(!c)return;const u=c.families;for(let g=0,d=u.length;g<d;++g){const f=u[g],m=c.style+`
`+c.weight+`
`+f;tn.get(m)===void 0&&(tn.set(m,100,!0),a(c.style,c.weight,f)||(tn.set(m,0,!0),r===void 0&&(r=setInterval(l,32))))}}})(),dw=(function(){let n;return function(t){let e=zh[t];if(e==null){if(fc){const i=Eg(t),s=pf(t,"Žg");e=(isNaN(Number(i.lineHeight))?1.2:Number(i.lineHeight))*(s.actualBoundingBoxAscent+s.actualBoundingBoxDescent)}else n||(n=document.createElement("div"),n.innerHTML="M",n.style.minHeight="0",n.style.maxHeight="none",n.style.height="auto",n.style.padding="0",n.style.border="none",n.style.position="absolute",n.style.display="block",n.style.left="-99999px"),n.style.font=t,document.body.appendChild(n),e=n.offsetHeight,document.body.removeChild(n);zh[t]=e}return e}})();function pf(n,t){return ks||(ks=Te(1,1)),n!=Gh&&(ks.font=n,Gh=ks.font),ks.measureText(t)}function Aa(n,t){return pf(n,t).width}function md(n,t,e){if(t in e)return e[t];const i=t.split(`
`).reduce((s,r)=>Math.max(s,Aa(n,r)),0);return e[t]=i,i}function gw(n,t){const e=[],i=[],s=[];let r=0,o=0,a=0,l=0;for(let h=0,c=t.length;h<=c;h+=2){const u=t[h];if(u===`
`||h===c){r=Math.max(r,o),s.push(o),o=0,a+=l;continue}const g=t[h+1]||n.font,d=Aa(g,u);e.push(d),o+=d;const f=dw(g);i.push(f),l=Math.max(l,f)}return{width:r,height:a,widths:e,heights:i,lineWidths:s}}function fw(n,t,e,i,s,r,o,a,l,h,c){n.save(),e!==1&&(n.globalAlpha*=e),t&&n.transform.apply(n,t),i.contextInstructions?(n.translate(l,h),n.scale(c[0],c[1]),mw(i,n)):c[0]<0||c[1]<0?(n.translate(l,h),n.scale(c[0],c[1]),n.drawImage(i,s,r,o,a,0,0,o,a)):n.drawImage(i,s,r,o,a,l,h,o*c[0],a*c[1]),n.restore()}function mw(n,t){const e=n.contextInstructions;for(let i=0,s=e.length;i<s;i+=2)Array.isArray(e[i+1])?t[e[i]].apply(t,e[i+1]):t[e[i]]=e[i+1]}class yw extends hw{constructor(t){super(t),this.fontChangeListenerKey_=ot(tn,cs.PROPERTYCHANGE,t.redrawText.bind(t)),this.element_=document.createElement("div");const e=this.element_.style;e.position="absolute",e.width="100%",e.height="100%",e.zIndex="0",this.element_.className=xs+" ol-layers";const i=t.getViewport();i.insertBefore(this.element_,i.firstChild||null),this.children_=[],this.renderedVisible_=!0,this.declutterLayers_=[]}dispatchRenderEvent(t,e){const i=this.getMap();if(i.hasListener(t)){const s=new wf(t,void 0,e);i.dispatchEvent(s)}}disposeInternal(){Nt(this.fontChangeListenerKey_),this.element_.parentNode.removeChild(this.element_),super.disposeInternal()}renderFrame(t){if(!t){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(t),this.dispatchRenderEvent(Pi.PRECOMPOSE,t);const e=t.layerStatesArray.sort(function(o,a){return o.zIndex-a.zIndex}),i=t.viewState;this.children_.length=0;const s=this.declutterLayers_;s.length=0;let r=null;for(let o=0,a=e.length;o<a;++o){const l=e[o];t.layerIndex=o;const h=l.layer,c=h.getSourceState();if(!Yc(l,i)||c!="ready"&&c!="undefined"){h.unrender();continue}const u=h.render(t,r);u&&(u!==r&&(this.children_.push(u),r=u),"getDeclutter"in h&&s.push(h))}this.flushDeclutterItems(t),Lm(this.element_,this.children_),this.dispatchRenderEvent(Pi.POSTCOMPOSE,t),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(t)}flushDeclutterItems(t){const e=this.declutterLayers_;for(let i=e.length-1;i>=0;--i)e[i].renderDeclutter(t);e.length=0}}class Cn extends Hi{constructor(t,e){super(t),this.layer=e}}const Vl={LAYERS:"layers"};class Hn extends nf{constructor(t){t=t||{};const e=Object.assign({},t);delete e.layers;let i=t.layers;super(e),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(Vl.LAYERS,this.handleLayersChanged_),i?Array.isArray(i)?i=new ii(i.slice(),{unique:!0}):yt(typeof i.getArray=="function","Expected `layers` to be an array or a `Collection`"):i=new ii(void 0,{unique:!0}),this.setLayers(i)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(Nt),this.layersListenerKeys_.length=0;const t=this.getLayers();this.layersListenerKeys_.push(ot(t,Le.ADD,this.handleLayersAdd_,this),ot(t,Le.REMOVE,this.handleLayersRemove_,this));for(const i in this.listenerKeys_)this.listenerKeys_[i].forEach(Nt);Lo(this.listenerKeys_);const e=t.getArray();for(let i=0,s=e.length;i<s;i++){const r=e[i];this.registerLayerListeners_(r),this.dispatchEvent(new Cn("addlayer",r))}this.changed()}registerLayerListeners_(t){const e=[ot(t,cs.PROPERTYCHANGE,this.handleLayerChange_,this),ot(t,$.CHANGE,this.handleLayerChange_,this)];t instanceof Hn&&e.push(ot(t,"addlayer",this.handleLayerGroupAdd_,this),ot(t,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[Mt(t)]=e}handleLayerGroupAdd_(t){this.dispatchEvent(new Cn("addlayer",t.layer))}handleLayerGroupRemove_(t){this.dispatchEvent(new Cn("removelayer",t.layer))}handleLayersAdd_(t){const e=t.element;this.registerLayerListeners_(e),this.dispatchEvent(new Cn("addlayer",e)),this.changed()}handleLayersRemove_(t){const e=t.element,i=Mt(e);this.listenerKeys_[i].forEach(Nt),delete this.listenerKeys_[i],this.dispatchEvent(new Cn("removelayer",e)),this.changed()}getLayers(){return this.get(Vl.LAYERS)}setLayers(t){const e=this.getLayers();if(e){const i=e.getArray();for(let s=0,r=i.length;s<r;++s)this.dispatchEvent(new Cn("removelayer",i[s]))}this.set(Vl.LAYERS,t)}getLayersArray(t){return t=t!==void 0?t:[],this.getLayers().forEach(function(e){e.getLayersArray(t)}),t}getLayerStatesArray(t){const e=t!==void 0?t:[],i=e.length;this.getLayers().forEach(function(o){o.getLayerStatesArray(e)});const s=this.getLayerState();let r=s.zIndex;!t&&s.zIndex===void 0&&(r=0);for(let o=i,a=e.length;o<a;o++){const l=e[o];l.opacity*=s.opacity,l.visible=l.visible&&s.visible,l.maxResolution=Math.min(l.maxResolution,s.maxResolution),l.minResolution=Math.max(l.minResolution,s.minResolution),l.minZoom=Math.max(l.minZoom,s.minZoom),l.maxZoom=Math.min(l.maxZoom,s.maxZoom),s.extent!==void 0&&(l.extent!==void 0?l.extent=Qs(l.extent,s.extent):l.extent=s.extent),l.zIndex===void 0&&(l.zIndex=r)}return e}getSourceState(){return"ready"}}class Gs extends Hi{constructor(t,e,i){super(t),this.map=e,this.frameState=i!==void 0?i:null}}class Mn extends Gs{constructor(t,e,i,s,r,o){super(t,e,r),this.originalEvent=i,this.pixel_=null,this.coordinate_=null,this.dragging=s!==void 0?s:!1,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(t){this.pixel_=t}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(t){this.coordinate_=t}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}}const Dt={SINGLECLICK:"singleclick",CLICK:$.CLICK,DBLCLICK:$.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};class ww extends So{constructor(t,e){super(t),this.map_=t,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=e===void 0?1:e,this.down_=null;const i=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=i,this.pointerdownListenerKey_=ot(i,mh.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=ot(i,mh.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener($.TOUCHMOVE,this.boundHandleTouchMove_,Cg?{passive:!1}:!1)}emulateClick_(t){let e=new Mn(Dt.CLICK,this.map_,t);this.dispatchEvent(e),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,e=new Mn(Dt.DBLCLICK,this.map_,t),this.dispatchEvent(e)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;const i=new Mn(Dt.SINGLECLICK,this.map_,t);this.dispatchEvent(i)},250)}updateActivePointers_(t){const e=t,i=e.pointerId;if(e.type==Dt.POINTERUP||e.type==Dt.POINTERCANCEL){delete this.trackedTouches_[i];for(const s in this.trackedTouches_)if(this.trackedTouches_[s].target!==e.target){delete this.trackedTouches_[s];break}}else(e.type==Dt.POINTERDOWN||e.type==Dt.POINTERMOVE)&&(this.trackedTouches_[i]=e);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(t){this.updateActivePointers_(t);const e=new Mn(Dt.POINTERUP,this.map_,t,void 0,void 0,this.activePointers_);this.dispatchEvent(e),this.emulateClicks_&&!e.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(t)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(Nt),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(t){return t.button===0}handlePointerDown_(t){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(t);const e=new Mn(Dt.POINTERDOWN,this.map_,t,void 0,void 0,this.activePointers_);if(this.dispatchEvent(e),this.down_=new PointerEvent(t.type,t),Object.defineProperty(this.down_,"target",{writable:!1,value:t.target}),this.dragListenerKeys_.length===0){const i=this.map_.getOwnerDocument();this.dragListenerKeys_.push(ot(i,Dt.POINTERMOVE,this.handlePointerMove_,this),ot(i,Dt.POINTERUP,this.handlePointerUp_,this),ot(this.element_,Dt.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==i&&this.dragListenerKeys_.push(ot(this.element_.getRootNode(),Dt.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(t){if(this.isMoving_(t)){this.updateActivePointers_(t),this.dragging_=!0;const e=new Mn(Dt.POINTERDRAG,this.map_,t,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(e)}}relayMoveEvent_(t){this.originalPointerMoveEvent_=t;const e=!!(this.down_&&this.isMoving_(t));this.dispatchEvent(new Mn(Dt.POINTERMOVE,this.map_,t,e))}handleTouchMove_(t){const e=this.originalPointerMoveEvent_;(!e||e.defaultPrevented)&&(typeof t.cancelable!="boolean"||t.cancelable===!0)&&t.preventDefault()}isMoving_(t){return this.dragging_||Math.abs(t.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(t.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(Nt(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener($.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(Nt(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(Nt),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}const Oa=1/0;let _w=class{constructor(t,e){this.priorityFunction_=t,this.keyFunction_=e,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Lo(this.queuedElements_)}dequeue(){const t=this.elements_,e=this.priorities_,i=t[0];t.length==1?(t.length=0,e.length=0):(t[0]=t.pop(),e[0]=e.pop(),this.siftUp_(0));const s=this.keyFunction_(i);return delete this.queuedElements_[s],i}enqueue(t){yt(!(this.keyFunction_(t)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");const e=this.priorityFunction_(t);return e!=Oa?(this.elements_.push(t),this.priorities_.push(e),this.queuedElements_[this.keyFunction_(t)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(t){return t*2+1}getRightChildIndex_(t){return t*2+2}getParentIndex_(t){return t-1>>1}heapify_(){let t;for(t=(this.elements_.length>>1)-1;t>=0;t--)this.siftUp_(t)}isEmpty(){return this.elements_.length===0}isKeyQueued(t){return t in this.queuedElements_}isQueued(t){return this.isKeyQueued(this.keyFunction_(t))}siftUp_(t){const e=this.elements_,i=this.priorities_,s=e.length,r=e[t],o=i[t],a=t;for(;t<s>>1;){const l=this.getLeftChildIndex_(t),h=this.getRightChildIndex_(t),c=h<s&&i[h]<i[l]?h:l;e[t]=e[c],i[t]=i[c],t=c}e[t]=r,i[t]=o,this.siftDown_(a,t)}siftDown_(t,e){const i=this.elements_,s=this.priorities_,r=i[e],o=s[e];for(;e>t;){const a=this.getParentIndex_(e);if(s[a]>o)i[e]=i[a],s[e]=s[a],e=a;else break}i[e]=r,s[e]=o}reprioritize(){const t=this.priorityFunction_,e=this.elements_,i=this.priorities_;let s=0;const r=e.length;let o,a,l;for(a=0;a<r;++a)o=e[a],l=t(o),l==Oa?delete this.queuedElements_[this.keyFunction_(o)]:(i[s]=l,e[s++]=o);e.length=s,i.length=s,this.heapify_()}};const j={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class pw extends _w{constructor(t,e){super(function(i){return t.apply(null,i)},function(i){return i[0].getKey()}),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=e,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(t){const e=super.enqueue(t);return e&&t[0].addEventListener($.CHANGE,this.boundHandleTileChange_),e}getTilesLoading(){return this.tilesLoading_}handleTileChange(t){const e=t.target,i=e.getState();if(i===j.LOADED||i===j.ERROR||i===j.EMPTY){i!==j.ERROR&&e.removeEventListener($.CHANGE,this.boundHandleTileChange_);const s=e.getKey();s in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[s],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(t,e){let i=0,s,r,o;for(;this.tilesLoading_<t&&i<e&&this.getCount()>0;)r=this.dequeue()[0],o=r.getKey(),s=r.getState(),s===j.IDLE&&!(o in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[o]=!0,++this.tilesLoading_,++i,r.load())}}function xw(n,t,e,i,s){if(!n||!(e in n.wantedTiles)||!n.wantedTiles[e][t.getKey()])return Oa;const r=n.viewState.center,o=i[0]-r[0],a=i[1]-r[1];return 65536*Math.log(s)+Math.sqrt(o*o+a*a)/s}class xf extends vr{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target});const e=t.className!==void 0?t.className:"ol-rotate",i=t.label!==void 0?t.label:"⇧",s=t.compassClassName!==void 0?t.compassClassName:"ol-compass";this.label_=null,typeof i=="string"?(this.label_=document.createElement("span"),this.label_.className=s,this.label_.textContent=i):(this.label_=i,this.label_.classList.add(s));const r=t.tipLabel?t.tipLabel:"Reset rotation",o=document.createElement("button");o.className=e+"-reset",o.setAttribute("type","button"),o.title=r,o.appendChild(this.label_),o.addEventListener($.CLICK,this.handleClick_.bind(this),!1);const a=e+" "+xs+" "+Ao,l=this.element;l.className=a,l.appendChild(o),this.callResetNorth_=t.resetNorth?t.resetNorth:void 0,this.duration_=t.duration!==void 0?t.duration:250,this.autoHide_=t.autoHide!==void 0?t.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(sa)}handleClick_(t){t.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){const e=this.getMap().getView();if(!e)return;const i=e.getRotation();i!==void 0&&(this.duration_>0&&i%(2*Math.PI)!==0?e.animate({rotation:0,duration:this.duration_,easing:Lr}):e.setRotation(0))}render(t){const e=t.frameState;if(!e)return;const i=e.viewState.rotation;if(i!=this.rotation_){const s="rotate("+i+"rad)";if(this.autoHide_){const r=this.element.classList.contains(sa);!r&&i===0?this.element.classList.add(sa):r&&i!==0&&this.element.classList.remove(sa)}this.label_.style.transform=s}this.rotation_=i}}class Vc extends vr{constructor(t){t=t||{},super({element:document.createElement("div"),target:t.target});const e=t.className!==void 0?t.className:"ol-zoom",i=t.delta!==void 0?t.delta:1,s=t.zoomInClassName!==void 0?t.zoomInClassName:e+"-in",r=t.zoomOutClassName!==void 0?t.zoomOutClassName:e+"-out",o=t.zoomInLabel!==void 0?t.zoomInLabel:"+",a=t.zoomOutLabel!==void 0?t.zoomOutLabel:"–",l=t.zoomInTipLabel!==void 0?t.zoomInTipLabel:"Zoom in",h=t.zoomOutTipLabel!==void 0?t.zoomOutTipLabel:"Zoom out",c=document.createElement("button");c.className=s,c.setAttribute("type","button"),c.title=l,c.appendChild(typeof o=="string"?document.createTextNode(o):o),c.addEventListener($.CLICK,this.handleClick_.bind(this,i),!1);const u=document.createElement("button");u.className=r,u.setAttribute("type","button"),u.title=h,u.appendChild(typeof a=="string"?document.createTextNode(a):a),u.addEventListener($.CLICK,this.handleClick_.bind(this,-i),!1);const g=e+" "+xs+" "+Ao,d=this.element;d.className=g,d.appendChild(c),d.appendChild(u),this.duration_=t.duration!==void 0?t.duration:250}handleClick_(t,e){e.preventDefault(),this.zoomByDelta_(t)}zoomByDelta_(t){const i=this.getMap().getView();if(!i)return;const s=i.getZoom();if(s!==void 0){const r=i.getConstrainedZoom(s+t);this.duration_>0?(i.getAnimating()&&i.cancelAnimations(),i.animate({zoom:r,duration:this.duration_,easing:Lr})):i.setZoom(r)}}}function Tw(n){n=n||{};const t=new ii;return(n.zoom===void 0||n.zoom)&&t.push(new Vc(n.zoomOptions)),(n.rotate===void 0||n.rotate)&&t.push(new xf(n.rotateOptions)),(n.attribution===void 0||n.attribution)&&t.push(new Am(n.attributionOptions)),t}const yd={ACTIVE:"active"};class Fo extends xi{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(yd.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(yd.ACTIVE,t)}setMap(t){this.map_=t}}function Mw(n,t,e){const i=n.getCenterInternal();if(i){const s=[i[0]+t[0],i[1]+t[1]];n.animateInternal({duration:e!==void 0?e:250,easing:By,center:n.getConstrainedCenter(s)})}}function jc(n,t,e,i){const s=n.getZoom();if(s===void 0)return;const r=n.getConstrainedZoom(s+t),o=n.getResolutionForZoom(r);n.getAnimating()&&n.cancelAnimations(),n.animate({resolution:o,anchor:e,duration:i!==void 0?i:250,easing:Lr})}class Cw extends Fo{constructor(t){super(),t=t||{},this.delta_=t.delta?t.delta:1,this.duration_=t.duration!==void 0?t.duration:250}handleEvent(t){let e=!1;if(t.type==Dt.DBLCLICK){const i=t.originalEvent,s=t.map,r=t.coordinate,o=i.shiftKey?-this.delta_:this.delta_,a=s.getView();jc(a,o,r,this.duration_),i.preventDefault(),e=!0}return!e}}class ko extends Fo{constructor(t){t=t||{},super(t),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==Dt.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==Dt.POINTERUP){const i=this.handleUpEvent(t);this.handlingDownUpSequence=i&&this.targetPointers.length>0}}else if(t.type==Dt.POINTERDOWN){const i=this.handleDownEvent(t);this.handlingDownUpSequence=i,e=this.stopDown(i)}else t.type==Dt.POINTERMOVE&&this.handleMoveEvent(t);return!e}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}}function qc(n){const t=n.length;let e=0,i=0;for(let s=0;s<t;s++)e+=n[s].clientX,i+=n[s].clientY;return{clientX:e/t,clientY:i/t}}function Wh(n){const t=arguments;return function(e){let i=!0;for(let s=0,r=t.length;s<r&&(i=i&&t[s](e),!!i);++s);return i}}const wE=function(n){const t=n.originalEvent;return t.altKey&&!(t.metaKey||t.ctrlKey)&&!t.shiftKey},Rw=function(n){const t=n.originalEvent;return t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},Ew=function(n){const t=n.map.getTargetElement(),e=n.map.getOwnerDocument().activeElement;return t.contains(e)},Tf=function(n){return n.map.getTargetElement().hasAttribute("tabindex")?Ew(n):!0},vw=so,_E=function(n){return n.type==Dt.CLICK},Mf=function(n){const t=n.originalEvent;return t.button==0&&!(Em&&Tg&&t.ctrlKey)},pE=Io,xE=function(n){return n.type=="pointermove"},TE=function(n){return n.type==Dt.SINGLECLICK},Cf=function(n){const t=n.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&!t.shiftKey},bw=function(n){const t=n.originalEvent;return Tg?t.metaKey:t.ctrlKey},Iw=function(n){const t=n.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},Rf=function(n){const t=n.originalEvent,e=t.target.tagName;return e!=="INPUT"&&e!=="SELECT"&&e!=="TEXTAREA"&&!t.target.isContentEditable},jl=function(n){const t=n.originalEvent;return yt(t!==void 0,"mapBrowserEvent must originate from a pointer event"),t.pointerType=="mouse"},Lw=function(n){const t=n.originalEvent;return yt(t!==void 0,"mapBrowserEvent must originate from a pointer event"),t.isPrimary&&t.button===0};class Sw extends ko{constructor(t){super({stopDown:Io}),t=t||{},this.kinetic_=t.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const e=t.condition?t.condition:Wh(Cf,Lw);this.condition_=t.onFocusOnly?Wh(Tf,e):e,this.noKinetic_=!1}handleDragEvent(t){const e=t.map;this.panning_||(this.panning_=!0,e.getView().beginInteraction());const i=this.targetPointers,s=e.getEventPixel(qc(i));if(i.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(s[0],s[1]),this.lastCentroid){const r=[this.lastCentroid[0]-s[0],s[1]-this.lastCentroid[1]],a=t.map.getView();iy(r,a.getResolution()),pc(r,a.getRotation()),a.adjustCenterInternal(r)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=s,this.lastPointersCount_=i.length,t.originalEvent.preventDefault()}handleUpEvent(t){const e=t.map,i=e.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){const s=this.kinetic_.getDistance(),r=this.kinetic_.getAngle(),o=i.getCenterInternal(),a=e.getPixelFromCoordinateInternal(o),l=e.getCoordinateFromPixelInternal([a[0]-s*Math.cos(r),a[1]-s*Math.sin(r)]);i.animateInternal({center:i.getConstrainedCenter(l),duration:500,easing:Lr})}return this.panning_&&(this.panning_=!1,i.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(t){if(this.targetPointers.length>0&&this.condition_(t)){const i=t.map.getView();return this.lastCentroid=null,i.getAnimating()&&i.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}}class Nw extends ko{constructor(t){t=t||{},super({stopDown:Io}),this.condition_=t.condition?t.condition:Rw,this.lastAngle_=void 0,this.duration_=t.duration!==void 0?t.duration:250}handleDragEvent(t){if(!jl(t))return;const e=t.map,i=e.getView();if(i.getConstraints().rotation===Dc)return;const s=e.getSize(),r=t.pixel,o=Math.atan2(s[1]/2-r[1],r[0]-s[0]/2);if(this.lastAngle_!==void 0){const a=o-this.lastAngle_;i.adjustRotationInternal(-a)}this.lastAngle_=o}handleUpEvent(t){return jl(t)?(t.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(t){return jl(t)&&Mf(t)&&this.condition_(t)?(t.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}}class Aw extends gc{constructor(t){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+t,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){const t=this.startPixel_,e=this.endPixel_,i="px",s=this.element_.style;s.left=Math.min(t[0],e[0])+i,s.top=Math.min(t[1],e[1])+i,s.width=Math.abs(e[0]-t[0])+i,s.height=Math.abs(e[1]-t[1])+i}setMap(t){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);const e=this.element_.style;e.left="inherit",e.top="inherit",e.width="inherit",e.height="inherit"}this.map_=t,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(t,e){this.startPixel_=t,this.endPixel_=e,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){const t=this.startPixel_,e=this.endPixel_,s=[t,[t[0],e[1]],e,[e[0],t[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);s[4]=s[0].slice(),this.geometry_?this.geometry_.setCoordinates([s]):this.geometry_=new fr([s])}getGeometry(){return this.geometry_}}const la={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"};class ql extends Hi{constructor(t,e,i){super(t),this.coordinate=e,this.mapBrowserEvent=i}}class Ow extends ko{constructor(t){super(),this.on,this.once,this.un,t=t||{},this.box_=new Aw(t.className||"ol-dragbox"),this.minArea_=t.minArea!==void 0?t.minArea:64,t.onBoxEnd&&(this.onBoxEnd=t.onBoxEnd),this.startPixel_=null,this.condition_=t.condition?t.condition:Mf,this.boxEndCondition_=t.boxEndCondition?t.boxEndCondition:this.defaultBoxEndCondition}defaultBoxEndCondition(t,e,i){const s=i[0]-e[0],r=i[1]-e[1];return s*s+r*r>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(t){this.box_.setPixels(this.startPixel_,t.pixel),this.dispatchEvent(new ql(la.BOXDRAG,t.coordinate,t))}handleUpEvent(t){this.box_.setMap(null);const e=this.boxEndCondition_(t,this.startPixel_,t.pixel);return e&&this.onBoxEnd(t),this.dispatchEvent(new ql(e?la.BOXEND:la.BOXCANCEL,t.coordinate,t)),!1}handleDownEvent(t){return this.condition_(t)?(this.startPixel_=t.pixel,this.box_.setMap(t.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new ql(la.BOXSTART,t.coordinate,t)),!0):!1}onBoxEnd(t){}}class Pw extends Ow{constructor(t){t=t||{};const e=t.condition?t.condition:Iw;super({condition:e,className:t.className||"ol-dragzoom",minArea:t.minArea}),this.duration_=t.duration!==void 0?t.duration:200,this.out_=t.out!==void 0?t.out:!1}onBoxEnd(t){const i=this.getMap().getView();let s=this.getGeometry();if(this.out_){const r=i.rotatedExtentForGeometry(s),o=i.getResolutionForExtentInternal(r),a=i.getResolution()/o;s=s.clone(),s.scale(a*a)}i.fitInternal(s,{duration:this.duration_,easing:Lr})}}const jn={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"};class Kw extends Fo{constructor(t){super(),t=t||{},this.defaultCondition_=function(e){return Cf(e)&&Rf(e)},this.condition_=t.condition!==void 0?t.condition:this.defaultCondition_,this.duration_=t.duration!==void 0?t.duration:100,this.pixelDelta_=t.pixelDelta!==void 0?t.pixelDelta:128}handleEvent(t){let e=!1;if(t.type==$.KEYDOWN){const i=t.originalEvent,s=i.key;if(this.condition_(t)&&(s==jn.DOWN||s==jn.LEFT||s==jn.RIGHT||s==jn.UP)){const o=t.map.getView(),a=o.getResolution()*this.pixelDelta_;let l=0,h=0;s==jn.DOWN?h=-a:s==jn.LEFT?l=-a:s==jn.RIGHT?l=a:h=a;const c=[l,h];pc(c,o.getRotation()),Mw(o,c,this.duration_),i.preventDefault(),e=!0}}return!e}}class Dw extends Fo{constructor(t){super(),t=t||{},this.condition_=t.condition?t.condition:function(e){return!bw(e)&&Rf(e)},this.delta_=t.delta?t.delta:1,this.duration_=t.duration!==void 0?t.duration:100}handleEvent(t){let e=!1;if(t.type==$.KEYDOWN||t.type==$.KEYPRESS){const i=t.originalEvent,s=i.key;if(this.condition_(t)&&(s==="+"||s==="-")){const r=t.map,o=s==="+"?this.delta_:-this.delta_,a=r.getView();jc(a,o,void 0,this.duration_),i.preventDefault(),e=!0}}return!e}}class Fw{constructor(t,e,i){this.decay_=t,this.minVelocity_=e,this.delay_=i,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(t,e){this.points_.push(t,e,Date.now())}end(){if(this.points_.length<6)return!1;const t=Date.now()-this.delay_,e=this.points_.length-3;if(this.points_[e+2]<t)return!1;let i=e-3;for(;i>0&&this.points_[i+2]>t;)i-=3;const s=this.points_[e+2]-this.points_[i+2];if(s<1e3/60)return!1;const r=this.points_[e]-this.points_[i],o=this.points_[e+1]-this.points_[i+1];return this.angle_=Math.atan2(o,r),this.initialVelocity_=Math.sqrt(r*r+o*o)/s,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}}class kw extends Fo{constructor(t){t=t||{},super(t),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=t.maxDelta!==void 0?t.maxDelta:1,this.duration_=t.duration!==void 0?t.duration:250,this.timeout_=t.timeout!==void 0?t.timeout:80,this.useAnchor_=t.useAnchor!==void 0?t.useAnchor:!0,this.constrainResolution_=t.constrainResolution!==void 0?t.constrainResolution:!1;const e=t.condition?t.condition:vw;this.condition_=t.onFocusOnly?Wh(Tf,e):e,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300}endInteraction_(){this.trackpadTimeoutId_=void 0;const t=this.getMap();if(!t)return;t.getView().endInteraction(void 0,this.lastDelta_?this.lastDelta_>0?1:-1:0,this.lastAnchor_)}handleEvent(t){if(!this.condition_(t)||t.type!==$.WHEEL)return!0;const i=t.map,s=t.originalEvent;s.preventDefault(),this.useAnchor_&&(this.lastAnchor_=t.coordinate);let r;if(t.type==$.WHEEL&&(r=s.deltaY,Cm&&s.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(r/=Mg),s.deltaMode===WheelEvent.DOM_DELTA_LINE&&(r*=40)),r===0)return!1;this.lastDelta_=r;const o=Date.now();this.startTime_===void 0&&(this.startTime_=o),(!this.mode_||o-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(r)<4?"trackpad":"wheel");const a=i.getView();if(this.mode_==="trackpad"&&!(a.getConstrainResolution()||this.constrainResolution_))return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(a.getAnimating()&&a.cancelAnimations(),a.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),a.adjustZoom(-r/this.deltaPerZoom_,this.lastAnchor_),this.startTime_=o,!1;this.totalDelta_+=r;const l=Math.max(this.timeout_-(o-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,i),l),!1}handleWheelZoom_(t){const e=t.getView();e.getAnimating()&&e.cancelAnimations();let i=-Gt(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(e.getConstrainResolution()||this.constrainResolution_)&&(i=i?i>0?1:-1:0),jc(e,i,this.lastAnchor_,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(t){this.useAnchor_=t,t||(this.lastAnchor_=null)}}class Gw extends ko{constructor(t){t=t||{};const e=t;e.stopDown||(e.stopDown=Io),super(e),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=t.threshold!==void 0?t.threshold:.3,this.duration_=t.duration!==void 0?t.duration:250}handleDragEvent(t){let e=0;const i=this.targetPointers[0],s=this.targetPointers[1],r=Math.atan2(s.clientY-i.clientY,s.clientX-i.clientX);if(this.lastAngle_!==void 0){const l=r-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),e=l}this.lastAngle_=r;const o=t.map,a=o.getView();a.getConstraints().rotation!==Dc&&(this.anchor_=o.getCoordinateFromPixelInternal(o.getEventPixel(qc(this.targetPointers))),this.rotating_&&(o.render(),a.adjustRotationInternal(e,this.anchor_)))}handleUpEvent(t){return this.targetPointers.length<2?(t.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(t){if(this.targetPointers.length>=2){const e=t.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}}class zw extends ko{constructor(t){t=t||{};const e=t;e.stopDown||(e.stopDown=Io),super(e),this.anchor_=null,this.duration_=t.duration!==void 0?t.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(t){let e=1;const i=this.targetPointers[0],s=this.targetPointers[1],r=i.clientX-s.clientX,o=i.clientY-s.clientY,a=Math.sqrt(r*r+o*o);this.lastDistance_!==void 0&&(e=this.lastDistance_/a),this.lastDistance_=a;const l=t.map,h=l.getView();e!=1&&(this.lastScaleDelta_=e),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(qc(this.targetPointers))),l.render(),h.adjustResolutionInternal(e,this.anchor_)}handleUpEvent(t){if(this.targetPointers.length<2){const i=t.map.getView(),s=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,s),!1}return!0}handleDownEvent(t){if(this.targetPointers.length>=2){const e=t.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}}function Ef(n){n=n||{};const t=new ii,e=new Fw(-.005,.05,100);return(n.altShiftDragRotate===void 0||n.altShiftDragRotate)&&t.push(new Nw),(n.doubleClickZoom===void 0||n.doubleClickZoom)&&t.push(new Cw({delta:n.zoomDelta,duration:n.zoomDuration})),(n.dragPan===void 0||n.dragPan)&&t.push(new Sw({onFocusOnly:n.onFocusOnly,kinetic:e})),(n.pinchRotate===void 0||n.pinchRotate)&&t.push(new Gw),(n.pinchZoom===void 0||n.pinchZoom)&&t.push(new zw({duration:n.zoomDuration})),(n.keyboard===void 0||n.keyboard)&&(t.push(new Kw),t.push(new Dw({delta:n.zoomDelta,duration:n.zoomDuration}))),(n.mouseWheelZoom===void 0||n.mouseWheelZoom)&&t.push(new kw({onFocusOnly:n.onFocusOnly,duration:n.zoomDuration})),(n.shiftDragZoom===void 0||n.shiftDragZoom)&&t.push(new Pw({duration:n.zoomDuration})),t}function wd(n){return n[0]>0&&n[1]>0}function Ww(n,t,e){return e===void 0&&(e=[0,0]),e[0]=n[0]*t+.5|0,e[1]=n[1]*t+.5|0,e}function Xe(n,t){return Array.isArray(n)?n:(t===void 0?t=[n,n]:(t[0]=n,t[1]=n),t)}function vf(n){if(n instanceof cl){n.setMapInternal(null);return}n instanceof Hn&&n.getLayers().forEach(vf)}function bf(n,t){if(n instanceof cl){n.setMapInternal(t);return}if(n instanceof Hn){const e=n.getLayers().getArray();for(let i=0,s=e.length;i<s;++i)bf(e[i],t)}}let If=class extends xi{constructor(t){super(),t=t||{},this.on,this.once,this.un;const e=Bw(t);this.renderComplete_,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=t.maxTilesLoading!==void 0?t.maxTilesLoading:16,this.pixelRatio_=t.pixelRatio!==void 0?t.pixelRatio:Mg,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=yi(),this.pixelToCoordinateTransform_=yi(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_),this.mapBrowserEventHandler_=null,this.moveTolerance_=t.moveTolerance,this.keyboardEventTarget_=e.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,this.resizeObserver_=new ResizeObserver(()=>this.updateSize()),this.controls=e.controls||Tw(),this.interactions=e.interactions||Ef({onFocusOnly:!0}),this.overlays_=e.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new pw(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Wt.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Wt.VIEW,this.handleViewChanged_),this.addChangeListener(Wt.SIZE,this.handleSizeChanged_),this.addChangeListener(Wt.TARGET,this.handleTargetChanged_),this.setProperties(e.values);const i=this;t.view&&!(t.view instanceof ti)&&t.view.then(function(s){i.setView(new ti(s))}),this.controls.addEventListener(Le.ADD,s=>{s.element.setMap(this)}),this.controls.addEventListener(Le.REMOVE,s=>{s.element.setMap(null)}),this.interactions.addEventListener(Le.ADD,s=>{s.element.setMap(this)}),this.interactions.addEventListener(Le.REMOVE,s=>{s.element.setMap(null)}),this.overlays_.addEventListener(Le.ADD,s=>{this.addOverlayInternal_(s.element)}),this.overlays_.addEventListener(Le.REMOVE,s=>{const r=s.element.getId();r!==void 0&&delete this.overlayIdIndex_[r.toString()],s.element.setMap(null)}),this.controls.forEach(s=>{s.setMap(this)}),this.interactions.forEach(s=>{s.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(t){this.getControls().push(t)}addInteraction(t){this.getInteractions().push(t)}addLayer(t){this.getLayerGroup().getLayers().push(t)}handleLayerAdd_(t){bf(t.layer,this)}addOverlay(t){this.getOverlays().push(t)}addOverlayInternal_(t){const e=t.getId();e!==void 0&&(this.overlayIdIndex_[e.toString()]=t),t.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(t,e,i){if(!this.frameState_||!this.renderer_)return;const s=this.getCoordinateFromPixelInternal(t);i=i!==void 0?i:{};const r=i.hitTolerance!==void 0?i.hitTolerance:0,o=i.layerFilter!==void 0?i.layerFilter:so,a=i.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(s,this.frameState_,r,a,e,null,o,null)}getFeaturesAtPixel(t,e){const i=[];return this.forEachFeatureAtPixel(t,function(s){i.push(s)},e),i}getAllLayers(){const t=[];function e(i){i.forEach(function(s){s instanceof Hn?e(s.getLayers()):t.push(s)})}return e(this.getLayers()),t}hasFeatureAtPixel(t,e){if(!this.frameState_||!this.renderer_)return!1;const i=this.getCoordinateFromPixelInternal(t);e=e!==void 0?e:{};const s=e.layerFilter!==void 0?e.layerFilter:so,r=e.hitTolerance!==void 0?e.hitTolerance:0,o=e.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(i,this.frameState_,r,o,s,null)}getEventCoordinate(t){return this.getCoordinateFromPixel(this.getEventPixel(t))}getEventCoordinateInternal(t){return this.getCoordinateFromPixelInternal(this.getEventPixel(t))}getEventPixel(t){const i=this.viewport_.getBoundingClientRect(),s=this.getSize(),r=i.width/s[0],o=i.height/s[1],a="changedTouches"in t?t.changedTouches[0]:t;return[(a.clientX-i.left)/r,(a.clientY-i.top)/o]}getTarget(){return this.get(Wt.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(t){return Ch(this.getCoordinateFromPixelInternal(t),this.getView().getProjection())}getCoordinateFromPixelInternal(t){const e=this.frameState_;return e?$t(e.pixelToCoordinateTransform,t.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(t){const e=this.overlayIdIndex_[t.toString()];return e!==void 0?e:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Wt.LAYERGROUP)}setLayers(t){const e=this.getLayerGroup();if(t instanceof ii){e.setLayers(t);return}const i=e.getLayers();i.clear(),i.extend(t)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){const t=this.getLayerGroup().getLayerStatesArray();for(let e=0,i=t.length;e<i;++e){const s=t[e];if(!s.visible)continue;const r=s.layer.getRenderer();if(r&&!r.ready)return!0;const o=s.layer.getSource();if(o&&o.loading)return!0}return!1}getPixelFromCoordinate(t){const e=Qi(t,this.getView().getProjection());return this.getPixelFromCoordinateInternal(e)}getPixelFromCoordinateInternal(t){const e=this.frameState_;return e?$t(e.coordinateToPixelTransform,t.slice(0,2)):null}getRenderer(){return this.renderer_}getSize(){return this.get(Wt.SIZE)}getView(){return this.get(Wt.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){const t=this.getTargetElement();return t?t.ownerDocument:document}getTilePriority(t,e,i,s){return xw(this.frameState_,t,e,i,s)}handleBrowserEvent(t,e){e=e||t.type;const i=new Mn(e,this,t);this.handleMapBrowserEvent(i)}handleMapBrowserEvent(t){if(!this.frameState_)return;const e=t.originalEvent,i=e.type;if(i===mh.POINTERDOWN||i===$.WHEEL||i===$.KEYDOWN){const s=this.getOwnerDocument(),r=this.viewport_.getRootNode?this.viewport_.getRootNode():s,o=e.target;if(this.overlayContainerStopEvent_.contains(o)||!(r===s?s.documentElement:r).contains(o))return}if(t.frameState=this.frameState_,this.dispatchEvent(t)!==!1){const s=this.getInteractions().getArray().slice();for(let r=s.length-1;r>=0;r--){const o=s[r];if(o.getMap()!==this||!o.getActive()||!this.getTargetElement())continue;if(!o.handleEvent(t)||t.propagationStopped)break}}}handlePostRender(){const t=this.frameState_,e=this.tileQueue_;if(!e.isEmpty()){let s=this.maxTilesLoading_,r=s;if(t){const o=t.viewHints;if(o[re.ANIMATING]||o[re.INTERACTING]){const a=Date.now()-t.time>8;s=a?0:8,r=a?0:2}}e.getTilesLoading()<s&&(e.reprioritize(),e.loadMoreTiles(s,r))}t&&this.renderer_&&!t.animate&&(this.renderComplete_===!0?(this.hasListener(Pi.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(Pi.RENDERCOMPLETE,t),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Gs(Ei.LOADEND,this,t)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Gs(Ei.LOADSTART,this,t))));const i=this.postRenderFunctions_;for(let s=0,r=i.length;s<r;++s)i[s](this,t);i.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let i=0,s=this.targetChangeHandlerKeys_.length;i<s;++i)Nt(this.targetChangeHandlerKeys_[i]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener($.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener($.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,Ma(this.viewport_)}if(this.targetElement_){this.resizeObserver_.unobserve(this.targetElement_);const i=this.targetElement_.getRootNode();i instanceof ShadowRoot&&this.resizeObserver_.unobserve(i.host),this.setSize(void 0)}const t=this.getTarget(),e=typeof t=="string"?document.getElementById(t):t;if(this.targetElement_=e,!e)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{e.appendChild(this.viewport_),this.renderer_||(this.renderer_=new yw(this)),this.mapBrowserEventHandler_=new ww(this,this.moveTolerance_);for(const r in Dt)this.mapBrowserEventHandler_.addEventListener(Dt[r],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener($.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener($.WHEEL,this.boundHandleBrowserEvent_,Cg?{passive:!1}:!1);const i=this.keyboardEventTarget_?this.keyboardEventTarget_:e;this.targetChangeHandlerKeys_=[ot(i,$.KEYDOWN,this.handleBrowserEvent,this),ot(i,$.KEYPRESS,this.handleBrowserEvent,this)];const s=e.getRootNode();s instanceof ShadowRoot&&this.resizeObserver_.observe(s.host),this.resizeObserver_.observe(e)}this.updateSize()}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(Nt(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(Nt(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);const t=this.getView();t&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=ot(t,cs.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=ot(t,$.CHANGE,this.handleViewPropertyChanged_,this),t.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(Nt),this.layerGroupPropertyListenerKeys_=null);const t=this.getLayerGroup();t&&(this.handleLayerAdd_(new Cn("addlayer",t)),this.layerGroupPropertyListenerKeys_=[ot(t,cs.PROPERTYCHANGE,this.render,this),ot(t,$.CHANGE,this.render,this),ot(t,"addlayer",this.handleLayerAdd_,this),ot(t,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){const t=this.getLayerGroup().getLayerStatesArray();for(let e=0,i=t.length;e<i;++e){const s=t[e].layer;s.hasRenderer()&&s.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}flushDeclutterItems(){const t=this.frameState_;t&&this.renderer_.flushDeclutterItems(t)}removeControl(t){return this.getControls().remove(t)}removeInteraction(t){return this.getInteractions().remove(t)}removeLayer(t){return this.getLayerGroup().getLayers().remove(t)}handleLayerRemove_(t){vf(t.layer)}removeOverlay(t){return this.getOverlays().remove(t)}renderFrame_(t){const e=this.getSize(),i=this.getView(),s=this.frameState_;let r=null;if(e!==void 0&&wd(e)&&i&&i.isDef()){const o=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=i.getState();if(r={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutterTree:null,extent:ao(a.center,a.resolution,a.rotation,e),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:e,tileQueue:this.tileQueue_,time:t,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{},mapId:Mt(this),renderTargets:{}},a.nextCenter&&a.nextResolution){const l=isNaN(a.nextRotation)?a.rotation:a.nextRotation;r.nextExtent=ao(a.nextCenter,a.nextResolution,l,e)}}this.frameState_=r,this.renderer_.renderFrame(r),r&&(r.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,r.postRenderFunctions),s&&(!this.previousExtent_||!Ir(this.previousExtent_)&&!ds(r.extent,this.previousExtent_))&&(this.dispatchEvent(new Gs(Ei.MOVESTART,this,s)),this.previousExtent_=br(this.previousExtent_)),this.previousExtent_&&!r.viewHints[re.ANIMATING]&&!r.viewHints[re.INTERACTING]&&!ds(r.extent,this.previousExtent_)&&(this.dispatchEvent(new Gs(Ei.MOVEEND,this,r)),Ig(r.extent,this.previousExtent_))),this.dispatchEvent(new Gs(Ei.POSTRENDER,this,r)),this.renderComplete_=this.hasListener(Ei.LOADSTART)||this.hasListener(Ei.LOADEND)||this.hasListener(Pi.RENDERCOMPLETE)?!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady():void 0,this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(t){const e=this.getLayerGroup();e&&this.handleLayerRemove_(new Cn("removelayer",e)),this.set(Wt.LAYERGROUP,t)}setSize(t){this.set(Wt.SIZE,t)}setTarget(t){this.set(Wt.TARGET,t)}setView(t){if(!t||t instanceof ti){this.set(Wt.VIEW,t);return}this.set(Wt.VIEW,new ti);const e=this;t.then(function(i){e.setView(new ti(i))})}updateSize(){const t=this.getTargetElement();let e;if(t){const s=getComputedStyle(t),r=t.offsetWidth-parseFloat(s.borderLeftWidth)-parseFloat(s.paddingLeft)-parseFloat(s.paddingRight)-parseFloat(s.borderRightWidth),o=t.offsetHeight-parseFloat(s.borderTopWidth)-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom)-parseFloat(s.borderBottomWidth);!isNaN(r)&&!isNaN(o)&&(e=[r,o],!wd(e)&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)&&Fg("No map visible because the map container's width or height are 0."))}const i=this.getSize();e&&(!i||!Bn(e,i))&&(this.setSize(e),this.updateViewportSize_(e))}updateViewportSize_(t){const e=this.getView();e&&e.setViewportSize(t)}};function Bw(n){let t=null;n.keyboardEventTarget!==void 0&&(t=typeof n.keyboardEventTarget=="string"?document.getElementById(n.keyboardEventTarget):n.keyboardEventTarget);const e={},i=n.layers&&typeof n.layers.getLayers=="function"?n.layers:new Hn({layers:n.layers});e[Wt.LAYERGROUP]=i,e[Wt.TARGET]=n.target,e[Wt.VIEW]=n.view instanceof ti?n.view:new ti;let s;n.controls!==void 0&&(Array.isArray(n.controls)?s=new ii(n.controls.slice()):(yt(typeof n.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),s=n.controls));let r;n.interactions!==void 0&&(Array.isArray(n.interactions)?r=new ii(n.interactions.slice()):(yt(typeof n.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),r=n.interactions));let o;return n.overlays!==void 0?Array.isArray(n.overlays)?o=new ii(n.overlays.slice()):(yt(typeof n.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),o=n.overlays):o=new ii,{controls:s,interactions:r,keyboardEventTarget:t,overlays:o,values:e}}const ie={ELEMENT:"element",MAP:"map",OFFSET:"offset",POSITION:"position",POSITIONING:"positioning"};class Lf extends xi{constructor(t){super(),this.on,this.once,this.un,this.options=t,this.id=t.id,this.insertFirst=t.insertFirst!==void 0?t.insertFirst:!0,this.stopEvent=t.stopEvent!==void 0?t.stopEvent:!0,this.element=document.createElement("div"),this.element.className=t.className!==void 0?t.className:"ol-overlay-container "+Sm,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.autoPan=t.autoPan===!0?{}:t.autoPan||void 0,this.rendered={transform_:"",visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(ie.ELEMENT,this.handleElementChanged),this.addChangeListener(ie.MAP,this.handleMapChanged),this.addChangeListener(ie.OFFSET,this.handleOffsetChanged),this.addChangeListener(ie.POSITION,this.handlePositionChanged),this.addChangeListener(ie.POSITIONING,this.handlePositioningChanged),t.element!==void 0&&this.setElement(t.element),this.setOffset(t.offset!==void 0?t.offset:[0,0]),this.setPositioning(t.positioning||"top-left"),t.position!==void 0&&this.setPosition(t.position)}getElement(){return this.get(ie.ELEMENT)}getId(){return this.id}getMap(){return this.get(ie.MAP)||null}getOffset(){return this.get(ie.OFFSET)}getPosition(){return this.get(ie.POSITION)}getPositioning(){return this.get(ie.POSITIONING)}handleElementChanged(){Rg(this.element);const t=this.getElement();t&&this.element.appendChild(t)}handleMapChanged(){this.mapPostrenderListenerKey&&(Ma(this.element),Nt(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);const t=this.getMap();if(t){this.mapPostrenderListenerKey=ot(t,Ei.POSTRENDER,this.render,this),this.updatePixelPosition();const e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(t){this.set(ie.ELEMENT,t)}setMap(t){this.set(ie.MAP,t)}setOffset(t){this.set(ie.OFFSET,t)}setPosition(t){this.set(ie.POSITION,t)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(t){const e=this.getMap();if(!e||!e.getTargetElement()||!this.get(ie.POSITION))return;const i=this.getRect(e.getTargetElement(),e.getSize()),s=this.getElement(),r=this.getRect(s,[bm(s),Im(s)]);t=t||{};const o=t.margin===void 0?20:t.margin;if(!fi(i,r)){const a=r[0]-i[0],l=i[2]-r[2],h=r[1]-i[1],c=i[3]-r[3],u=[0,0];if(a<0?u[0]=a-o:l<0&&(u[0]=Math.abs(l)+o),h<0?u[1]=h-o:c<0&&(u[1]=Math.abs(c)+o),u[0]!==0||u[1]!==0){const g=e.getView().getCenterInternal(),d=e.getPixelFromCoordinateInternal(g);if(!d)return;const f=[d[0]+u[0],d[1]+u[1]],m=t.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(f),duration:m.duration,easing:m.easing})}}}getRect(t,e){const i=t.getBoundingClientRect(),s=i.left+window.pageXOffset,r=i.top+window.pageYOffset;return[s,r,s+e[0],r+e[1]]}setPositioning(t){this.set(ie.POSITIONING,t)}setVisible(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)}updatePixelPosition(){const t=this.getMap(),e=this.getPosition();if(!t||!t.isRendered()||!e){this.setVisible(!1);return}const i=t.getPixelFromCoordinate(e),s=t.getSize();this.updateRenderedPosition(i,s)}updateRenderedPosition(t,e){const i=this.element.style,s=this.getOffset(),r=this.getPositioning();this.setVisible(!0);const o=Math.round(t[0]+s[0])+"px",a=Math.round(t[1]+s[1])+"px";let l="0%",h="0%";r=="bottom-right"||r=="center-right"||r=="top-right"?l="-100%":(r=="bottom-center"||r=="center-center"||r=="top-center")&&(l="-50%"),r=="bottom-left"||r=="bottom-center"||r=="bottom-right"?h="-100%":(r=="center-left"||r=="center-center"||r=="center-right")&&(h="-50%");const c=`translate(${l}, ${h}) translate(${o}, ${a})`;this.rendered.transform_!=c&&(this.rendered.transform_=c,i.transform=c)}getOptions(){return this.options}}const Zl=.75,ha=.1;class Hw extends vr{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target}),this.boundHandleRotationChanged_=this.handleRotationChanged_.bind(this),this.collapsed_=t.collapsed!==void 0?t.collapsed:!0,this.collapsible_=t.collapsible!==void 0?t.collapsible:!0,this.collapsible_||(this.collapsed_=!1),this.rotateWithView_=t.rotateWithView!==void 0?t.rotateWithView:!1,this.viewExtent_=void 0;const e=t.className!==void 0?t.className:"ol-overviewmap",i=t.tipLabel!==void 0?t.tipLabel:"Overview map",s=t.collapseLabel!==void 0?t.collapseLabel:"‹";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s):this.collapseLabel_=s;const r=t.label!==void 0?t.label:"›";typeof r=="string"?(this.label_=document.createElement("span"),this.label_.textContent=r):this.label_=r;const o=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_,a=document.createElement("button");a.setAttribute("type","button"),a.title=i,a.appendChild(o),a.addEventListener($.CLICK,this.handleClick_.bind(this),!1),this.ovmapDiv_=document.createElement("div"),this.ovmapDiv_.className="ol-overviewmap-map",this.view_=t.view;const l=new If({view:t.view,controls:new ii,interactions:new ii});this.ovmap_=l,t.layers&&t.layers.forEach(function(p){l.addLayer(p)});const h=document.createElement("div");h.className="ol-overviewmap-box",h.style.boxSizing="border-box",this.boxOverlay_=new Lf({position:[0,0],positioning:"center-center",element:h}),this.ovmap_.addOverlay(this.boxOverlay_);const c=e+" "+xs+" "+Ao+(this.collapsed_&&this.collapsible_?" "+Ca:"")+(this.collapsible_?"":" ol-uncollapsible"),u=this.element;u.className=c,u.appendChild(this.ovmapDiv_),u.appendChild(a);const g=this,d=this.boxOverlay_,f=this.boxOverlay_.getElement(),m=function(p){return{clientX:p.clientX,clientY:p.clientY}},y=function(p){const x=m(p),M=l.getEventCoordinateInternal(x);d.setPosition(M)},_=function(p){const x=l.getEventCoordinateInternal(p);g.getMap().getView().setCenterInternal(x),window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",_)};f.addEventListener("mousedown",function(){window.addEventListener("mousemove",y),window.addEventListener("mouseup",_)})}setMap(t){const e=this.getMap();if(t!==e){if(e){const i=e.getView();i&&this.unbindView_(i),this.ovmap_.setTarget(null)}if(super.setMap(t),t){this.ovmap_.setTarget(this.ovmapDiv_),this.listenerKeys.push(ot(t,cs.PROPERTYCHANGE,this.handleMapPropertyChange_,this));const i=t.getView();i&&(this.bindView_(i),i.isDef()&&(this.ovmap_.updateSize(),this.resetExtent_())),this.ovmap_.isRendered()||this.updateBoxAfterOvmapIsRendered_()}}}handleMapPropertyChange_(t){if(t.key===Wt.VIEW){const e=t.oldValue;e&&this.unbindView_(e);const i=this.getMap().getView();this.bindView_(i)}else!this.ovmap_.isRendered()&&(t.key===Wt.TARGET||t.key===Wt.SIZE)&&this.ovmap_.updateSize()}bindView_(t){if(!this.view_){const e=new ti({projection:t.getProjection()});this.ovmap_.setView(e)}t.addChangeListener(ze.ROTATION,this.boundHandleRotationChanged_),this.handleRotationChanged_()}unbindView_(t){t.removeChangeListener(ze.ROTATION,this.boundHandleRotationChanged_)}handleRotationChanged_(){this.rotateWithView_&&this.ovmap_.getView().setRotation(this.getMap().getView().getRotation())}validateExtent_(){const t=this.getMap(),e=this.ovmap_;if(!t.isRendered()||!e.isRendered())return;const i=t.getSize(),r=t.getView().calculateExtentInternal(i);if(this.viewExtent_&&ds(r,this.viewExtent_))return;this.viewExtent_=r;const o=e.getSize(),l=e.getView().calculateExtentInternal(o),h=e.getPixelFromCoordinateInternal(un(r)),c=e.getPixelFromCoordinateInternal(Po(r)),u=Math.abs(h[0]-c[0]),g=Math.abs(h[1]-c[1]),d=o[0],f=o[1];u<d*ha||g<f*ha||u>d*Zl||g>f*Zl?this.resetExtent_():fi(l,r)||this.recenter_()}resetExtent_(){const t=this.getMap(),e=this.ovmap_,i=t.getSize(),r=t.getView().calculateExtentInternal(i),o=e.getView(),a=Math.log(Zl/ha)/Math.LN2,l=1/(Math.pow(2,a/2)*ha);jm(r,l),o.fitInternal(kh(r))}recenter_(){const t=this.getMap(),e=this.ovmap_,i=t.getView();e.getView().setCenterInternal(i.getCenterInternal())}updateBox_(){const t=this.getMap(),e=this.ovmap_;if(!t.isRendered()||!e.isRendered())return;const i=t.getSize(),s=t.getView(),r=e.getView(),o=this.rotateWithView_?0:-s.getRotation(),a=this.boxOverlay_,l=this.boxOverlay_.getElement(),h=s.getCenterInternal(),c=s.getResolution(),u=r.getResolution(),g=i[0]*c/u,d=i[1]*c/u;if(a.setPosition(h),l){l.style.width=g+"px",l.style.height=d+"px";const f="rotate("+o+"rad)";l.style.transform=f}}updateBoxAfterOvmapIsRendered_(){this.ovmapPostrenderKey_||(this.ovmapPostrenderKey_=ro(this.ovmap_,Ei.POSTRENDER,function(t){delete this.ovmapPostrenderKey_,this.updateBox_()},this))}handleClick_(t){t.preventDefault(),this.handleToggle_()}handleToggle_(){this.element.classList.toggle(Ca),this.collapsed_?cr(this.collapseLabel_,this.label_):cr(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_;const t=this.ovmap_;if(!this.collapsed_){if(t.isRendered()){this.viewExtent_=void 0,t.render();return}t.updateSize(),this.resetExtent_(),this.updateBoxAfterOvmapIsRendered_()}}getCollapsible(){return this.collapsible_}setCollapsible(t){this.collapsible_!==t&&(this.collapsible_=t,this.element.classList.toggle("ol-uncollapsible"),!t&&this.collapsed_&&this.handleToggle_())}setCollapsed(t){!this.collapsible_||this.collapsed_===t||this.handleToggle_()}getCollapsed(){return this.collapsed_}getRotateWithView(){return this.rotateWithView_}setRotateWithView(t){this.rotateWithView_!==t&&(this.rotateWithView_=t,this.getMap().getView().getRotation()!==0&&(this.rotateWithView_?this.handleRotationChanged_():this.ovmap_.getView().setRotation(0),this.viewExtent_=void 0,this.validateExtent_(),this.updateBox_()))}getOverviewMap(){return this.ovmap_}render(t){this.validateExtent_(),this.updateBox_()}}const $l="units",Xw=[1,2,5],Xr=25.4/.28;class Uw extends vr{constructor(t){t=t||{};const e=document.createElement("div");e.style.pointerEvents="none",super({element:e,render:t.render,target:t.target}),this.on,this.once,this.un;const i=t.className!==void 0?t.className:t.bar?"ol-scale-bar":"ol-scale-line";this.innerElement_=document.createElement("div"),this.innerElement_.className=i+"-inner",this.element.className=i+" "+xs,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=t.minWidth!==void 0?t.minWidth:64,this.maxWidth_=t.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",this.addChangeListener($l,this.handleUnitsChanged_),this.setUnits(t.units||"metric"),this.scaleBar_=t.bar||!1,this.scaleBarSteps_=t.steps||4,this.scaleBarText_=t.text||!1,this.dpi_=t.dpi||void 0}getUnits(){return this.get($l)}handleUnitsChanged_(){this.updateElement_()}setUnits(t){this.set($l,t)}setDpi(t){this.dpi_=t}updateElement_(){const t=this.viewState_;if(!t){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}const e=t.center,i=t.projection,s=this.getUnits(),r=s=="degrees"?"degrees":"m";let o=Ea(i,t.resolution,e,r);const a=this.minWidth_*(this.dpi_||Xr)/Xr,l=this.maxWidth_!==void 0?this.maxWidth_*(this.dpi_||Xr)/Xr:void 0;let h=a*o,c="";if(s=="degrees"){const x=ur.degrees;h*=x,h<x/60?(c="″",o*=3600):h<x?(c="′",o*=60):c="°"}else if(s=="imperial")h<.9144?(c="in",o/=.0254):h<1609.344?(c="ft",o/=.3048):(c="mi",o/=1609.344);else if(s=="nautical")o/=1852,c="NM";else if(s=="metric")h<.001?(c="μm",o*=1e6):h<1?(c="mm",o*=1e3):h<1e3?c="m":(c="km",o/=1e3);else if(s=="us")h<.9144?(c="in",o*=39.37):h<1609.344?(c="ft",o/=.30480061):(c="mi",o/=1609.3472);else throw new Error("Invalid units");let u=3*Math.floor(Math.log(a*o)/Math.log(10)),g,d,f,m,y,_;for(;;){f=Math.floor(u/3);const x=Math.pow(10,f);if(g=Xw[(u%3+3)%3]*x,d=Math.round(g/o),isNaN(d)){this.element.style.display="none",this.renderedVisible_=!1;return}if(l!==void 0&&d>=l){g=m,d=y,f=_;break}else if(d>=a)break;m=g,y=d,_=f,++u}const p=this.scaleBar_?this.createScaleBar(d,g,c):g.toFixed(f<0?-f:0)+" "+c;this.renderedHTML_!=p&&(this.innerElement_.innerHTML=p,this.renderedHTML_=p),this.renderedWidth_!=d&&(this.innerElement_.style.width=d+"px",this.renderedWidth_=d),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}createScaleBar(t,e,i){const s=this.getScaleForResolution(),r=s<1?Math.round(1/s).toLocaleString()+" : 1":"1 : "+Math.round(s).toLocaleString(),o=this.scaleBarSteps_,a=t/o,l=[this.createMarker("absolute")];for(let c=0;c<o;++c){const u=c%2===0?"ol-scale-singlebar-odd":"ol-scale-singlebar-even";l.push(`<div><div class="ol-scale-singlebar ${u}" style="width: ${a}px;"></div>`+this.createMarker("relative")+(c%2===0||o===2?this.createStepText(c,t,!1,e,i):"")+"</div>")}return l.push(this.createStepText(o,t,!0,e,i)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${t}px;">`+r+"</div>":"")+l.join("")}createMarker(t){return`<div class="ol-scale-step-marker" style="position: ${t}; top: ${t==="absolute"?3:-10}px;"></div>`}createStepText(t,e,i,s,r){const a=(t===0?0:Math.round(s/this.scaleBarSteps_*t*100)/100)+(t===0?"":" "+r),l=t===0?-3:e/this.scaleBarSteps_*-1,h=t===0?0:e/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${l}px;text-align: ${t===0?"left":"center"};min-width: ${h}px;left: ${i?e+"px":"unset"};">`+a+"</div>"}getScaleForResolution(){const t=Ea(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,"m"),e=this.dpi_||Xr,i=1e3/25.4;return t*i*e}render(t){const e=t.frameState;e?this.viewState_=e.viewState:this.viewState_=null,this.updateElement_()}}function Yw(n){const t=Object.keys(n.defs),e=t.length;let i,s;for(i=0;i<e;++i){const r=t[i];if(!at(r)){const o=n.defs(r);let a=o.units;!a&&o.projName==="longlat"&&(a="degrees"),Gg(new el({code:r,axisOrientation:o.axis,metersPerUnit:o.to_meter,units:a}))}}for(i=0;i<e;++i){const r=t[i],o=at(r);for(s=0;s<e;++s){const a=t[s],l=at(a);if(!bg(r,a))if(n.defs[r]===n.defs[a])Mh([o,l]);else{const h=n(r,a);ay(o,l,td(o,l,h.forward),td(l,o,h.inverse))}}}}function Vw(n){n("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),n("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),n("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),n.WGS84=n["EPSG:4326"],n["EPSG:3785"]=n["EPSG:3857"],n.GOOGLE=n["EPSG:3857"],n["EPSG:900913"]=n["EPSG:3857"],n["EPSG:102113"]=n["EPSG:3857"]}var ms=1,ys=2,ir=3,jw=4,Bh=5,_d=6378137,qw=6356752314e-3,pd=.0066943799901413165,no=484813681109536e-20,A=Math.PI/2,Zw=.16666666666666666,$w=.04722222222222222,Jw=.022156084656084655,K=1e-10,te=.017453292519943295,Ni=57.29577951308232,Rt=Math.PI/4,wo=Math.PI*2,Ht=3.14159265359,Ke={};Ke.greenwich=0;Ke.lisbon=-9.131906111111;Ke.paris=2.337229166667;Ke.bogota=-74.080916666667;Ke.madrid=-3.687938888889;Ke.rome=12.452333333333;Ke.bern=7.439583333333;Ke.jakarta=106.807719444444;Ke.ferro=-17.666666666667;Ke.brussels=4.367975;Ke.stockholm=18.058277777778;Ke.athens=23.7163375;Ke.oslo=10.722916666667;const Qw={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var xd=/[\s_\-\/\(\)]/g;function Dn(n,t){if(n[t])return n[t];for(var e=Object.keys(n),i=t.toLowerCase().replace(xd,""),s=-1,r,o;++s<e.length;)if(r=e[s],o=r.toLowerCase().replace(xd,""),o===i)return n[r]}function Hh(n){var t={},e=n.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,l){var h=l.split("=");return h.push(!0),a[h[0].toLowerCase()]=h[1],a},{}),i,s,r,o={proj:"projName",datum:"datumCode",rf:function(a){t.rf=parseFloat(a)},lat_0:function(a){t.lat0=a*te},lat_1:function(a){t.lat1=a*te},lat_2:function(a){t.lat2=a*te},lat_ts:function(a){t.lat_ts=a*te},lon_0:function(a){t.long0=a*te},lon_1:function(a){t.long1=a*te},lon_2:function(a){t.long2=a*te},alpha:function(a){t.alpha=parseFloat(a)*te},gamma:function(a){t.rectified_grid_angle=parseFloat(a)},lonc:function(a){t.longc=a*te},x_0:function(a){t.x0=parseFloat(a)},y_0:function(a){t.y0=parseFloat(a)},k_0:function(a){t.k0=parseFloat(a)},k:function(a){t.k0=parseFloat(a)},a:function(a){t.a=parseFloat(a)},b:function(a){t.b=parseFloat(a)},r_a:function(){t.R_A=!0},zone:function(a){t.zone=parseInt(a,10)},south:function(){t.utmSouth=!0},towgs84:function(a){t.datum_params=a.split(",").map(function(l){return parseFloat(l)})},to_meter:function(a){t.to_meter=parseFloat(a)},units:function(a){t.units=a;var l=Dn(Qw,a);l&&(t.to_meter=l.to_meter)},from_greenwich:function(a){t.from_greenwich=a*te},pm:function(a){var l=Dn(Ke,a);t.from_greenwich=(l||parseFloat(a))*te},nadgrids:function(a){a==="@null"?t.datumCode="none":t.nadgrids=a},axis:function(a){var l="ewnsud";a.length===3&&l.indexOf(a.substr(0,1))!==-1&&l.indexOf(a.substr(1,1))!==-1&&l.indexOf(a.substr(2,1))!==-1&&(t.axis=a)},approx:function(){t.approx=!0}};for(i in e)s=e[i],i in o?(r=o[i],typeof r=="function"?r(s):t[r]=s):t[i]=s;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}class t_{static getId(t){const e=t.find(i=>Array.isArray(i)&&i[0]==="ID");return e&&e.length>=3?{authority:e[1],code:parseInt(e[2],10)}:null}static convertUnit(t,e="unit"){if(!t||t.length<3)return{type:e,name:"unknown",conversion_factor:null};const i=t[1],s=parseFloat(t[2])||null,r=t.find(a=>Array.isArray(a)&&a[0]==="ID"),o=r?{authority:r[1],code:parseInt(r[2],10)}:null;return{type:e,name:i,conversion_factor:s,id:o}}static convertAxis(t){const e=t[1]||"Unknown";let i;const s=e.match(/^\((.)\)$/);if(s){const h=s[1].toUpperCase();if(h==="E")i="east";else if(h==="N")i="north";else if(h==="U")i="up";else if(t[2])i=t[2];else throw new Error(`Unknown axis abbreviation: ${h}`)}else i=t[2]||"unknown";const r=t.find(h=>Array.isArray(h)&&h[0]==="ORDER"),o=r?parseInt(r[1],10):null,a=t.find(h=>Array.isArray(h)&&(h[0]==="LENGTHUNIT"||h[0]==="ANGLEUNIT"||h[0]==="SCALEUNIT")),l=this.convertUnit(a);return{name:e,direction:i,unit:l,order:o}}static extractAxes(t){return t.filter(e=>Array.isArray(e)&&e[0]==="AXIS").map(e=>this.convertAxis(e)).sort((e,i)=>(e.order||0)-(i.order||0))}static convert(t,e={}){switch(t[0]){case"PROJCRS":e.type="ProjectedCRS",e.name=t[1],e.base_crs=t.find(d=>Array.isArray(d)&&d[0]==="BASEGEOGCRS")?this.convert(t.find(d=>Array.isArray(d)&&d[0]==="BASEGEOGCRS")):null,e.conversion=t.find(d=>Array.isArray(d)&&d[0]==="CONVERSION")?this.convert(t.find(d=>Array.isArray(d)&&d[0]==="CONVERSION")):null;const i=t.find(d=>Array.isArray(d)&&d[0]==="CS");i&&(e.coordinate_system={subtype:i[1],axis:this.extractAxes(t)});const s=t.find(d=>Array.isArray(d)&&d[0]==="LENGTHUNIT");if(s){const d=this.convertUnit(s);e.coordinate_system.unit=d}e.id=this.getId(t);break;case"BASEGEOGCRS":case"GEOGCRS":case"GEODCRS":e.type=t[0]==="GEODCRS"?"GeodeticCRS":"GeographicCRS",e.name=t[1];const r=t.find(d=>Array.isArray(d)&&(d[0]==="DATUM"||d[0]==="ENSEMBLE"));if(r){const d=this.convert(r);r[0]==="ENSEMBLE"?e.datum_ensemble=d:e.datum=d;const f=t.find(m=>Array.isArray(m)&&m[0]==="PRIMEM");f&&f[1]!=="Greenwich"&&(d.prime_meridian={name:f[1],longitude:parseFloat(f[2])})}const o=t.find(d=>Array.isArray(d)&&d[0]==="CS");e.coordinate_system={subtype:o?o[1]:"ellipsoidal",axis:this.extractAxes(t)},e.id=this.getId(t);break;case"DATUM":e.type="GeodeticReferenceFrame",e.name=t[1],e.ellipsoid=t.find(d=>Array.isArray(d)&&d[0]==="ELLIPSOID")?this.convert(t.find(d=>Array.isArray(d)&&d[0]==="ELLIPSOID")):null;break;case"ENSEMBLE":e.type="DatumEnsemble",e.name=t[1],e.members=t.filter(d=>Array.isArray(d)&&d[0]==="MEMBER").map(d=>({type:"DatumEnsembleMember",name:d[1],id:this.getId(d)}));const a=t.find(d=>Array.isArray(d)&&d[0]==="ENSEMBLEACCURACY");a&&(e.accuracy=parseFloat(a[1]));const l=t.find(d=>Array.isArray(d)&&d[0]==="ELLIPSOID");l&&(e.ellipsoid=this.convert(l)),e.id=this.getId(t);break;case"ELLIPSOID":e.type="Ellipsoid",e.name=t[1],e.semi_major_axis=parseFloat(t[2]),e.inverse_flattening=parseFloat(t[3]),t.find(d=>Array.isArray(d)&&d[0]==="LENGTHUNIT")&&this.convert(t.find(d=>Array.isArray(d)&&d[0]==="LENGTHUNIT"),e);break;case"CONVERSION":e.type="Conversion",e.name=t[1],e.method=t.find(d=>Array.isArray(d)&&d[0]==="METHOD")?this.convert(t.find(d=>Array.isArray(d)&&d[0]==="METHOD")):null,e.parameters=t.filter(d=>Array.isArray(d)&&d[0]==="PARAMETER").map(d=>this.convert(d));break;case"METHOD":e.type="Method",e.name=t[1],e.id=this.getId(t);break;case"PARAMETER":e.type="Parameter",e.name=t[1],e.value=parseFloat(t[2]),e.unit=this.convertUnit(t.find(d=>Array.isArray(d)&&(d[0]==="LENGTHUNIT"||d[0]==="ANGLEUNIT"||d[0]==="SCALEUNIT"))),e.id=this.getId(t);break;case"BOUNDCRS":e.type="BoundCRS";const h=t.find(d=>Array.isArray(d)&&d[0]==="SOURCECRS");if(h){const d=h.find(f=>Array.isArray(f));e.source_crs=d?this.convert(d):null}const c=t.find(d=>Array.isArray(d)&&d[0]==="TARGETCRS");if(c){const d=c.find(f=>Array.isArray(f));e.target_crs=d?this.convert(d):null}const u=t.find(d=>Array.isArray(d)&&d[0]==="ABRIDGEDTRANSFORMATION");u?e.transformation=this.convert(u):e.transformation=null;break;case"ABRIDGEDTRANSFORMATION":if(e.type="Transformation",e.name=t[1],e.method=t.find(d=>Array.isArray(d)&&d[0]==="METHOD")?this.convert(t.find(d=>Array.isArray(d)&&d[0]==="METHOD")):null,e.parameters=t.filter(d=>Array.isArray(d)&&(d[0]==="PARAMETER"||d[0]==="PARAMETERFILE")).map(d=>{if(d[0]==="PARAMETER")return this.convert(d);if(d[0]==="PARAMETERFILE")return{name:d[1],value:d[2],id:{authority:"EPSG",code:8656}}}),e.parameters.length===7){const d=e.parameters[6];d.name==="Scale difference"&&(d.value=Math.round((d.value-1)*1e12)/1e6)}e.id=this.getId(t);break;case"AXIS":e.coordinate_system||(e.coordinate_system={type:"unspecified",axis:[]}),e.coordinate_system.axis.push(this.convertAxis(t));break;case"LENGTHUNIT":const g=this.convertUnit(t,"LinearUnit");e.coordinate_system&&e.coordinate_system.axis&&e.coordinate_system.axis.forEach(d=>{d.unit||(d.unit=g)}),g.conversion_factor&&g.conversion_factor!==1&&e.semi_major_axis&&(e.semi_major_axis={value:e.semi_major_axis,unit:g});break;default:e.keyword=t[0];break}return e}}function e_(n){return t_.convert(n)}function i_(n){const t=n.toUpperCase();return t.includes("PROJCRS")||t.includes("GEOGCRS")||t.includes("BOUNDCRS")||t.includes("VERTCRS")||t.includes("LENGTHUNIT")||t.includes("ANGLEUNIT")||t.includes("SCALEUNIT")?"WKT2":(t.includes("PROJCS")||t.includes("GEOGCS")||t.includes("LOCAL_CS")||t.includes("VERT_CS")||t.includes("UNIT"),"WKT1")}var _o=1,Sf=2,Nf=3,Pa=4,Af=5,Zc=-1,n_=/\s/,s_=/[A-Za-z]/,r_=/[A-Za-z84_]/,ul=/[,\]]/,Of=/[\d\.E\-\+]/;function dn(n){if(typeof n!="string")throw new Error("not a string");this.text=n.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=_o}dn.prototype.readCharicter=function(){var n=this.text[this.place++];if(this.state!==Pa)for(;n_.test(n);){if(this.place>=this.text.length)return;n=this.text[this.place++]}switch(this.state){case _o:return this.neutral(n);case Sf:return this.keyword(n);case Pa:return this.quoted(n);case Af:return this.afterquote(n);case Nf:return this.number(n);case Zc:return}};dn.prototype.afterquote=function(n){if(n==='"'){this.word+='"',this.state=Pa;return}if(ul.test(n)){this.word=this.word.trim(),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in afterquote yet, index '+this.place)};dn.prototype.afterItem=function(n){if(n===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=_o;return}if(n==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=_o,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Zc);return}};dn.prototype.number=function(n){if(Of.test(n)){this.word+=n;return}if(ul.test(n)){this.word=parseFloat(this.word),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in number yet, index '+this.place)};dn.prototype.quoted=function(n){if(n==='"'){this.state=Af;return}this.word+=n};dn.prototype.keyword=function(n){if(r_.test(n)){this.word+=n;return}if(n==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=_o;return}if(ul.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in keyword yet, index '+this.place)};dn.prototype.neutral=function(n){if(s_.test(n)){this.word=n,this.state=Sf;return}if(n==='"'){this.word="",this.state=Pa;return}if(Of.test(n)){this.word=n,this.state=Nf;return}if(ul.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in neutral yet, index '+this.place)};dn.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Zc)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function o_(n){var t=new dn(n);return t.output()}function Jl(n,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var i=t?{}:n,s=e.reduce(function(r,o){return Us(o,r),r},i);t&&(n[t]=s)}function Us(n,t){if(!Array.isArray(n)){t[n]=!0;return}var e=n.shift();if(e==="PARAMETER"&&(e=n.shift()),n.length===1){if(Array.isArray(n[0])){t[e]={},Us(n[0],t[e]);return}t[e]=n[0];return}if(!n.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=n;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(n);return}Array.isArray(e)||(t[e]={});var i;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:n[0].toLowerCase(),convert:n[1]},n.length===3&&Us(n[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:n[0],a:n[1],rf:n[2]},n.length===4&&Us(n[3],t[e]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":n[0]=["name",n[0]],Jl(t,e,n);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":n[0]=["name",n[0]],Jl(t,e,n),t[e].type=e;return;default:for(i=-1;++i<n.length;)if(!Array.isArray(n[i]))return Us(n,t[e]);return Jl(t,e,n)}}var a_=.017453292519943295;function qe(n){return n*a_}function Pf(n){const t=(n.projName||"").toLowerCase().replace(/_/g," ");n.long0===void 0&&n.longc!==void 0&&(n.long0=n.longc),!n.lat_ts&&n.lat1&&(t==="stereographic south pole"||t==="polar stereographic (variant b)")?(n.lat0=qe(n.lat1>0?90:-90),n.lat_ts=n.lat1,delete n.lat1):!n.lat_ts&&n.lat0&&(t==="polar stereographic"||t==="polar stereographic (variant a)")&&(n.lat_ts=n.lat0,n.lat0=qe(n.lat0>0?90:-90),delete n.lat1)}function Td(n){let t={units:null,to_meter:void 0};return typeof n=="string"?(t.units=n.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.units==="meter"&&(t.to_meter=1)):n&&n.name&&(t.units=n.name.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.to_meter=n.conversion_factor),t}function Md(n){return typeof n=="object"?n.value*n.unit.conversion_factor:n}function Cd(n,t){n.ellipsoid.radius?(t.a=n.ellipsoid.radius,t.rf=0):(t.a=Md(n.ellipsoid.semi_major_axis),n.ellipsoid.inverse_flattening!==void 0?t.rf=n.ellipsoid.inverse_flattening:n.ellipsoid.semi_major_axis!==void 0&&n.ellipsoid.semi_minor_axis!==void 0&&(t.rf=t.a/(t.a-Md(n.ellipsoid.semi_minor_axis))))}function Ka(n,t={}){return!n||typeof n!="object"?n:n.type==="BoundCRS"?(Ka(n.source_crs,t),n.transformation&&(n.transformation.method&&n.transformation.method.name==="NTv2"?t.nadgrids=n.transformation.parameters[0].value:t.datum_params=n.transformation.parameters.map(e=>e.value)),t):(Object.keys(n).forEach(e=>{const i=n[e];if(i!==null)switch(e){case"name":if(t.srsCode)break;t.name=i,t.srsCode=i;break;case"type":i==="GeographicCRS"?t.projName="longlat":i==="GeodeticCRS"?n.coordinate_system&&n.coordinate_system.subtype==="Cartesian"?t.projName="geocent":t.projName="longlat":i==="ProjectedCRS"&&n.conversion&&n.conversion.method&&(t.projName=n.conversion.method.name);break;case"datum":case"datum_ensemble":i.ellipsoid&&(t.ellps=i.ellipsoid.name,Cd(i,t)),i.prime_meridian&&(t.from_greenwich=i.prime_meridian.longitude*Math.PI/180);break;case"ellipsoid":t.ellps=i.name,Cd(i,t);break;case"prime_meridian":t.long0=(i.longitude||0)*Math.PI/180;break;case"coordinate_system":if(i.axis){const s={east:"e",north:"n",west:"w",south:"s",up:"u",down:"d",geocentricx:"e",geocentricy:"n",geocentricz:"u"},r=i.axis.map(o=>s[o.direction.toLowerCase()]);if(r.every(Boolean)&&(t.axis=r.join(""),t.axis.length===2&&(t.axis+="u")),i.unit){const{units:o,to_meter:a}=Td(i.unit);t.units=o,t.to_meter=a}else if(i.axis[0]&&i.axis[0].unit){const{units:o,to_meter:a}=Td(i.axis[0].unit);t.units=o,t.to_meter=a}}break;case"id":i.authority&&i.code&&(t.title=i.authority+":"+i.code);break;case"conversion":i.method&&i.method.name&&(t.projName=i.method.name),i.parameters&&i.parameters.forEach(s=>{const r=s.name.toLowerCase().replace(/\s+/g,"_"),o=s.value;s.unit&&s.unit.conversion_factor?t[r]=o*s.unit.conversion_factor:s.unit==="degree"?t[r]=o*Math.PI/180:t[r]=o});break;case"unit":i.name&&(t.units=i.name.toLowerCase(),t.units==="metre"&&(t.units="meter")),i.conversion_factor&&(t.to_meter=i.conversion_factor);break;case"base_crs":Ka(i,t),t.datumCode=i.id?i.id.authority+"_"+i.id.code:i.name;break}}),t.latitude_of_false_origin!==void 0&&(t.lat0=t.latitude_of_false_origin),t.longitude_of_false_origin!==void 0&&(t.long0=t.longitude_of_false_origin),t.latitude_of_standard_parallel!==void 0&&(t.lat0=t.latitude_of_standard_parallel,t.lat1=t.latitude_of_standard_parallel),t.latitude_of_1st_standard_parallel!==void 0&&(t.lat1=t.latitude_of_1st_standard_parallel),t.latitude_of_2nd_standard_parallel!==void 0&&(t.lat2=t.latitude_of_2nd_standard_parallel),t.latitude_of_projection_centre!==void 0&&(t.lat0=t.latitude_of_projection_centre),t.longitude_of_projection_centre!==void 0&&(t.longc=t.longitude_of_projection_centre),t.easting_at_false_origin!==void 0&&(t.x0=t.easting_at_false_origin),t.northing_at_false_origin!==void 0&&(t.y0=t.northing_at_false_origin),t.latitude_of_natural_origin!==void 0&&(t.lat0=t.latitude_of_natural_origin),t.longitude_of_natural_origin!==void 0&&(t.long0=t.longitude_of_natural_origin),t.longitude_of_origin!==void 0&&(t.long0=t.longitude_of_origin),t.false_easting!==void 0&&(t.x0=t.false_easting),t.easting_at_projection_centre&&(t.x0=t.easting_at_projection_centre),t.false_northing!==void 0&&(t.y0=t.false_northing),t.northing_at_projection_centre&&(t.y0=t.northing_at_projection_centre),t.standard_parallel_1!==void 0&&(t.lat1=t.standard_parallel_1),t.standard_parallel_2!==void 0&&(t.lat2=t.standard_parallel_2),t.scale_factor_at_natural_origin!==void 0&&(t.k0=t.scale_factor_at_natural_origin),t.scale_factor_at_projection_centre!==void 0&&(t.k0=t.scale_factor_at_projection_centre),t.scale_factor_on_pseudo_standard_parallel!==void 0&&(t.k0=t.scale_factor_on_pseudo_standard_parallel),t.azimuth!==void 0&&(t.alpha=t.azimuth),t.azimuth_at_projection_centre!==void 0&&(t.alpha=t.azimuth_at_projection_centre),t.angle_from_rectified_to_skew_grid&&(t.rectified_grid_angle=t.angle_from_rectified_to_skew_grid),Pf(t),t)}var l_=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function h_(n,t){var e=t[0],i=t[1];!(e in n)&&i in n&&(n[e]=n[i],t.length===3&&(n[e]=t[2](n[e])))}function Kf(n){for(var t=Object.keys(n),e=0,i=t.length;e<i;++e){var s=t[e];l_.indexOf(s)!==-1&&c_(n[s]),typeof n[s]=="object"&&Kf(n[s])}}function c_(n){if(n.AUTHORITY){var t=Object.keys(n.AUTHORITY)[0];t&&t in n.AUTHORITY&&(n.title=t+":"+n.AUTHORITY[t])}if(n.type==="GEOGCS"?n.projName="longlat":n.type==="LOCAL_CS"?(n.projName="identity",n.local=!0):typeof n.PROJECTION=="object"?n.projName=Object.keys(n.PROJECTION)[0]:n.projName=n.PROJECTION,n.AXIS){for(var e="",i=0,s=n.AXIS.length;i<s;++i){var r=[n.AXIS[i][0].toLowerCase(),n.AXIS[i][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?e+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?e+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?e+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(e+="w")}e.length===2&&(e+="u"),e.length===3&&(n.axis=e)}n.UNIT&&(n.units=n.UNIT.name.toLowerCase(),n.units==="metre"&&(n.units="meter"),n.UNIT.convert&&(n.type==="GEOGCS"?n.DATUM&&n.DATUM.SPHEROID&&(n.to_meter=n.UNIT.convert*n.DATUM.SPHEROID.a):n.to_meter=n.UNIT.convert));var o=n.GEOGCS;n.type==="GEOGCS"&&(o=n),o&&(o.PRIMEM&&o.PRIMEM.convert&&(n.from_greenwich=qe(o.PRIMEM.convert)),o.DATUM?n.datumCode=o.DATUM.name.toLowerCase():n.datumCode=o.name.toLowerCase(),n.datumCode.slice(0,2)==="d_"&&(n.datumCode=n.datumCode.slice(2)),n.datumCode==="new_zealand_1949"&&(n.datumCode="nzgd49"),(n.datumCode==="wgs_1984"||n.datumCode==="world_geodetic_system_1984")&&(n.PROJECTION==="Mercator_Auxiliary_Sphere"&&(n.sphere=!0),n.datumCode="wgs84"),n.datumCode==="belge_1972"&&(n.datumCode="rnb72"),o.DATUM&&o.DATUM.SPHEROID&&(n.ellps=o.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),n.ellps.toLowerCase().slice(0,13)==="international"&&(n.ellps="intl"),n.a=o.DATUM.SPHEROID.a,n.rf=parseFloat(o.DATUM.SPHEROID.rf)),o.DATUM&&o.DATUM.TOWGS84&&(n.datum_params=o.DATUM.TOWGS84),~n.datumCode.indexOf("osgb_1936")&&(n.datumCode="osgb36"),~n.datumCode.indexOf("osni_1952")&&(n.datumCode="osni52"),(~n.datumCode.indexOf("tm65")||~n.datumCode.indexOf("geodetic_datum_of_1965"))&&(n.datumCode="ire65"),n.datumCode==="ch1903+"&&(n.datumCode="ch1903"),~n.datumCode.indexOf("israel")&&(n.datumCode="isr93")),n.b&&!isFinite(n.b)&&(n.b=n.a),n.rectified_grid_angle&&(n.rectified_grid_angle=qe(n.rectified_grid_angle));function a(c){var u=n.to_meter||1;return c*u}var l=function(c){return h_(n,c)},h=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",qe],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",qe],["x0","false_easting",a],["y0","false_northing",a],["long0","central_meridian",qe],["lat0","latitude_of_origin",qe],["lat0","standard_parallel_1",qe],["lat1","standard_parallel_1",qe],["lat2","standard_parallel_2",qe],["azimuth","Azimuth"],["alpha","azimuth",qe],["srsCode","name"]];h.forEach(l),Pf(n)}function Df(n){if(typeof n=="object")return Ka(n);const t=i_(n);var e=o_(n);if(t==="WKT2"){const r=e_(e);return Ka(r)}var i=e[0],s={};return Us(e,s),Kf(s),s[i]}function ye(n){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?ye[n]=Hh(arguments[1]):ye[n]=Df(arguments[1]):ye[n]=e}else if(arguments.length===1){if(Array.isArray(n))return n.map(function(i){Array.isArray(i)?ye.apply(t,i):ye(i)});if(typeof n=="string"){if(n in ye)return ye[n]}else"EPSG"in n?ye["EPSG:"+n.EPSG]=n:"ESRI"in n?ye["ESRI:"+n.ESRI]=n:"IAU2000"in n?ye["IAU2000:"+n.IAU2000]=n:console.log(n);return}}Vw(ye);function u_(n){return typeof n=="string"}function d_(n){return n in ye}var g_=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function f_(n){return g_.some(function(t){return n.indexOf(t)>-1})}var m_=["3857","900913","3785","102113"];function y_(n){var t=Dn(n,"authority");if(t){var e=Dn(t,"epsg");return e&&m_.indexOf(e)>-1}}function w_(n){var t=Dn(n,"extension");if(t)return Dn(t,"proj4")}function __(n){return n[0]==="+"}function p_(n){if(u_(n)){if(d_(n))return ye[n];if(f_(n)){var t=Df(n);if(y_(t))return ye["EPSG:3857"];var e=w_(t);return e?Hh(e):t}if(__(n))return Hh(n)}else return n}function Rd(n,t){n=n||{};var e,i;if(!t)return n;for(i in t)e=t[i],e!==void 0&&(n[i]=e);return n}function Wi(n,t,e){var i=n*t;return e/Math.sqrt(1-i*i)}function Go(n){return n<0?-1:1}function G(n){return Math.abs(n)<=Ht?n:n-Go(n)*wo}function wi(n,t,e){var i=n*e,s=.5*n;return i=Math.pow((1-i)/(1+i),s),Math.tan(.5*(A-t))/i}function po(n,t){for(var e=.5*n,i,s,r=A-2*Math.atan(t),o=0;o<=15;o++)if(i=n*Math.sin(r),s=A-2*Math.atan(t*Math.pow((1-i)/(1+i),e))-r,r+=s,Math.abs(s)<=1e-10)return r;return-9999}function x_(){var n=this.b/this.a;this.es=1-n*n,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=Wi(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function T_(n){var t=n.x,e=n.y;if(e*Ni>90&&e*Ni<-90&&t*Ni>180&&t*Ni<-180)return null;var i,s;if(Math.abs(Math.abs(e)-A)<=K)return null;if(this.sphere)i=this.x0+this.a*this.k0*G(t-this.long0),s=this.y0+this.a*this.k0*Math.log(Math.tan(Rt+.5*e));else{var r=Math.sin(e),o=wi(this.e,e,r);i=this.x0+this.a*this.k0*G(t-this.long0),s=this.y0-this.a*this.k0*Math.log(o)}return n.x=i,n.y=s,n}function M_(n){var t=n.x-this.x0,e=n.y-this.y0,i,s;if(this.sphere)s=A-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var r=Math.exp(-e/(this.a*this.k0));if(s=po(this.e,r),s===-9999)return null}return i=G(this.long0+t/(this.a*this.k0)),n.x=i,n.y=s,n}var C_=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const R_={init:x_,forward:T_,inverse:M_,names:C_};function E_(){}function Ed(n){return n}var v_=["longlat","identity"];const b_={init:E_,forward:Ed,inverse:Ed,names:v_};var I_=[R_,b_],pa={},Da=[];function Ff(n,t){var e=Da.length;return n.names?(Da[e]=n,n.names.forEach(function(i){pa[i.toLowerCase()]=e}),this):(console.log(t),!0)}function L_(n){if(!n)return!1;var t=n.toLowerCase();if(typeof pa[t]<"u"&&Da[pa[t]])return Da[pa[t]]}function S_(){I_.forEach(Ff)}const N_={start:S_,add:Ff,get:L_};var J={};J.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};J.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};J.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};J.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};J.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};J.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};J.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};J.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};J.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};J.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};J.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};J.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};J.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};J.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};J.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};J.clrk80ign={a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"};J.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};J.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};J.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};J.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};J.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};J.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};J.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};J.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};J.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};J.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};J.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};J.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};J.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};J.hough={a:6378270,rf:297,ellipseName:"Hough"};J.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};J.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};J.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};J.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};J.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};J.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};J.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};J.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};J.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};J.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};J.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};J.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var A_=J.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};J.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function O_(n,t,e,i){var s=n*n,r=t*t,o=(s-r)/s,a=0;i?(n*=1-o*(Zw+o*($w+o*Jw)),s=n*n,o=0):a=Math.sqrt(o);var l=(s-r)/r;return{es:o,e:a,ep2:l}}function P_(n,t,e,i,s){if(!n){var r=Dn(J,i);r||(r=A_),n=r.a,t=r.b,e=r.rf}return e&&!t&&(t=(1-1/e)*n),(e===0||Math.abs(n-t)<K)&&(s=!0,t=n),{a:n,b:t,rf:e,sphere:s}}var qt={};qt.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};qt.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};qt.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};qt.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};qt.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};qt.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};qt.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};qt.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};qt.militargeographische_institut={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"};qt.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};qt.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};qt.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};qt.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};qt.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};qt.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};qt.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};qt.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};qt.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function K_(n,t,e,i,s,r,o){var a={};return n===void 0||n==="none"?a.datum_type=Bh:a.datum_type=jw,t&&(a.datum_params=t.map(parseFloat),(a.datum_params[0]!==0||a.datum_params[1]!==0||a.datum_params[2]!==0)&&(a.datum_type=ms),a.datum_params.length>3&&(a.datum_params[3]!==0||a.datum_params[4]!==0||a.datum_params[5]!==0||a.datum_params[6]!==0)&&(a.datum_type=ys,a.datum_params[3]*=no,a.datum_params[4]*=no,a.datum_params[5]*=no,a.datum_params[6]=a.datum_params[6]/1e6+1)),o&&(a.datum_type=ir,a.grids=o),a.a=e,a.b=i,a.es=s,a.ep2=r,a}var kf={};function D_(n,t){var e=new DataView(t),i=G_(e),s=z_(e,i),r=W_(e,s,i),o={header:s,subgrids:r};return kf[n]=o,o}function F_(n){if(n===void 0)return null;var t=n.split(",");return t.map(k_)}function k_(n){if(n.length===0)return null;var t=n[0]==="@";return t&&(n=n.slice(1)),n==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:n,mandatory:!t,grid:kf[n]||null,isNull:!1}}function Ys(n){return n/3600*Math.PI/180}function G_(n){var t=n.getInt32(8,!1);return t===11?!1:(t=n.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function z_(n,t){return{nFields:n.getInt32(8,t),nSubgridFields:n.getInt32(24,t),nSubgrids:n.getInt32(40,t),shiftType:Xh(n,56,64).trim(),fromSemiMajorAxis:n.getFloat64(120,t),fromSemiMinorAxis:n.getFloat64(136,t),toSemiMajorAxis:n.getFloat64(152,t),toSemiMinorAxis:n.getFloat64(168,t)}}function Xh(n,t,e){return String.fromCharCode.apply(null,new Uint8Array(n.buffer.slice(t,e)))}function W_(n,t,e){for(var i=176,s=[],r=0;r<t.nSubgrids;r++){var o=H_(n,i,e),a=X_(n,i,o,e),l=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),h=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);s.push({ll:[Ys(o.lowerLongitude),Ys(o.lowerLatitude)],del:[Ys(o.longitudeInterval),Ys(o.latitudeInterval)],lim:[l,h],count:o.gridNodeCount,cvs:B_(a)}),i+=176+o.gridNodeCount*16}return s}function B_(n){return n.map(function(t){return[Ys(t.longitudeShift),Ys(t.latitudeShift)]})}function H_(n,t,e){return{name:Xh(n,t+8,t+16).trim(),parent:Xh(n,t+24,t+24+8).trim(),lowerLatitude:n.getFloat64(t+72,e),upperLatitude:n.getFloat64(t+88,e),lowerLongitude:n.getFloat64(t+104,e),upperLongitude:n.getFloat64(t+120,e),latitudeInterval:n.getFloat64(t+136,e),longitudeInterval:n.getFloat64(t+152,e),gridNodeCount:n.getInt32(t+168,e)}}function X_(n,t,e,i){for(var s=t+176,r=16,o=[],a=0;a<e.gridNodeCount;a++){var l={latitudeShift:n.getFloat32(s+a*r,i),longitudeShift:n.getFloat32(s+a*r+4,i),latitudeAccuracy:n.getFloat32(s+a*r+8,i),longitudeAccuracy:n.getFloat32(s+a*r+12,i)};o.push(l)}return o}function Ki(n,t){if(!(this instanceof Ki))return new Ki(n);t=t||function(h){if(h)throw h};var e=p_(n);if(typeof e!="object"){t(n);return}var i=Ki.projections.get(e.projName);if(!i){t(n);return}if(e.datumCode&&e.datumCode!=="none"){var s=Dn(qt,e.datumCode);s&&(e.datum_params=e.datum_params||(s.towgs84?s.towgs84.split(","):null),e.ellps=s.ellipse,e.datumName=s.datumName?s.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var r=P_(e.a,e.b,e.rf,e.ellps,e.sphere),o=O_(r.a,r.b,r.rf,e.R_A),a=F_(e.nadgrids),l=e.datum||K_(e.datumCode,e.datum_params,r.a,r.b,o.es,o.ep2,a);Rd(this,e),Rd(this,i),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=l,this.init(),t(null,this)}Ki.projections=N_;Ki.projections.start();function U_(n,t){return n.datum_type!==t.datum_type||n.a!==t.a||Math.abs(n.es-t.es)>5e-11?!1:n.datum_type===ms?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]:n.datum_type===ys?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]&&n.datum_params[3]===t.datum_params[3]&&n.datum_params[4]===t.datum_params[4]&&n.datum_params[5]===t.datum_params[5]&&n.datum_params[6]===t.datum_params[6]:!0}function Gf(n,t,e){var i=n.x,s=n.y,r=n.z?n.z:0,o,a,l,h;if(s<-A&&s>-1.001*A)s=-A;else if(s>A&&s<1.001*A)s=A;else{if(s<-A)return{x:-1/0,y:-1/0,z:n.z};if(s>A)return{x:1/0,y:1/0,z:n.z}}return i>Math.PI&&(i-=2*Math.PI),a=Math.sin(s),h=Math.cos(s),l=a*a,o=e/Math.sqrt(1-t*l),{x:(o+r)*h*Math.cos(i),y:(o+r)*h*Math.sin(i),z:(o*(1-t)+r)*a}}function zf(n,t,e,i){var s=1e-12,r=s*s,o=30,a,l,h,c,u,g,d,f,m,y,_,p,x,M=n.x,C=n.y,T=n.z?n.z:0,R,v,P;if(a=Math.sqrt(M*M+C*C),l=Math.sqrt(M*M+C*C+T*T),a/e<s){if(R=0,l/e<s)return v=A,P=-i,{x:n.x,y:n.y,z:n.z}}else R=Math.atan2(C,M);h=T/l,c=a/l,u=1/Math.sqrt(1-t*(2-t)*c*c),f=c*(1-t)*u,m=h*u,x=0;do x++,d=e/Math.sqrt(1-t*m*m),P=a*f+T*m-d*(1-t*m*m),g=t*d/(d+P),u=1/Math.sqrt(1-g*(2-g)*c*c),y=c*(1-g)*u,_=h*u,p=_*f-y*m,f=y,m=_;while(p*p>r&&x<o);return v=Math.atan(_/Math.abs(y)),{x:R,y:v,z:P}}function Y_(n,t,e){if(t===ms)return{x:n.x+e[0],y:n.y+e[1],z:n.z+e[2]};if(t===ys){var i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],h=e[6];return{x:h*(n.x-l*n.y+a*n.z)+i,y:h*(l*n.x+n.y-o*n.z)+s,z:h*(-a*n.x+o*n.y+n.z)+r}}}function V_(n,t,e){if(t===ms)return{x:n.x-e[0],y:n.y-e[1],z:n.z-e[2]};if(t===ys){var i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],h=e[6],c=(n.x-i)/h,u=(n.y-s)/h,g=(n.z-r)/h;return{x:c+l*u-a*g,y:-l*c+u+o*g,z:a*c-o*u+g}}}function ca(n){return n===ms||n===ys}function j_(n,t,e){if(U_(n,t)||n.datum_type===Bh||t.datum_type===Bh)return e;var i=n.a,s=n.es;if(n.datum_type===ir){var r=vd(n,!1,e);if(r!==0)return;i=_d,s=pd}var o=t.a,a=t.b,l=t.es;if(t.datum_type===ir&&(o=_d,a=qw,l=pd),s===l&&i===o&&!ca(n.datum_type)&&!ca(t.datum_type))return e;if(e=Gf(e,s,i),ca(n.datum_type)&&(e=Y_(e,n.datum_type,n.datum_params)),ca(t.datum_type)&&(e=V_(e,t.datum_type,t.datum_params)),e=zf(e,l,o,a),t.datum_type===ir){var h=vd(t,!0,e);if(h!==0)return}return e}function vd(n,t,e){if(n.grids===null||n.grids.length===0)return console.log("Grid shift grids not found"),-1;var i={x:-e.x,y:e.y},s={x:Number.NaN,y:Number.NaN},r=[];t:for(var o=0;o<n.grids.length;o++){var a=n.grids[o];if(r.push(a.name),a.isNull){s=i;break}if(a.mandatory,a.grid===null){if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1;continue}for(var l=a.grid.subgrids,h=0,c=l.length;h<c;h++){var u=l[h],g=(Math.abs(u.del[1])+Math.abs(u.del[0]))/1e4,d=u.ll[0]-g,f=u.ll[1]-g,m=u.ll[0]+(u.lim[0]-1)*u.del[0]+g,y=u.ll[1]+(u.lim[1]-1)*u.del[1]+g;if(!(f>i.y||d>i.x||y<i.y||m<i.x)&&(s=q_(i,t,u),!isNaN(s.x)))break t}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*Ni+" "+i.y*Ni+" tried: '"+r+"'"),-1):(e.x=-s.x,e.y=s.y,0)}function q_(n,t,e){var i={x:Number.NaN,y:Number.NaN};if(isNaN(n.x))return i;var s={x:n.x,y:n.y};s.x-=e.ll[0],s.y-=e.ll[1],s.x=G(s.x-Math.PI)+Math.PI;var r=bd(s,e);if(t){if(isNaN(r.x))return i;r.x=s.x-r.x,r.y=s.y-r.y;var o=9,a=1e-12,l,h;do{if(h=bd(r,e),isNaN(h.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:s.x-(h.x+r.x),y:s.y-(h.y+r.y)},r.x+=l.x,r.y+=l.y}while(o--&&Math.abs(l.x)>a&&Math.abs(l.y)>a);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=G(r.x+e.ll[0]),i.y=r.y+e.ll[1]}else isNaN(r.x)||(i.x=n.x+r.x,i.y=n.y+r.y);return i}function bd(n,t){var e={x:n.x/t.del[0],y:n.y/t.del[1]},i={x:Math.floor(e.x),y:Math.floor(e.y)},s={x:e.x-1*i.x,y:e.y-1*i.y},r={x:Number.NaN,y:Number.NaN},o;if(i.x<0||i.x>=t.lim[0]||i.y<0||i.y>=t.lim[1])return r;o=i.y*t.lim[0]+i.x;var a={x:t.cvs[o][0],y:t.cvs[o][1]};o++;var l={x:t.cvs[o][0],y:t.cvs[o][1]};o+=t.lim[0];var h={x:t.cvs[o][0],y:t.cvs[o][1]};o--;var c={x:t.cvs[o][0],y:t.cvs[o][1]},u=s.x*s.y,g=s.x*(1-s.y),d=(1-s.x)*(1-s.y),f=(1-s.x)*s.y;return r.x=d*a.x+g*l.x+f*c.x+u*h.x,r.y=d*a.y+g*l.y+f*c.y+u*h.y,r}function Id(n,t,e){var i=e.x,s=e.y,r=e.z||0,o,a,l,h={};for(l=0;l<3;l++)if(!(t&&l===2&&e.z===void 0))switch(l===0?(o=i,"ew".indexOf(n.axis[l])!==-1?a="x":a="y"):l===1?(o=s,"ns".indexOf(n.axis[l])!==-1?a="y":a="x"):(o=r,a="z"),n.axis[l]){case"e":h[a]=o;break;case"w":h[a]=-o;break;case"n":h[a]=o;break;case"s":h[a]=-o;break;case"u":e[a]!==void 0&&(h.z=o);break;case"d":e[a]!==void 0&&(h.z=-o);break;default:return null}return h}function Wf(n){var t={x:n[0],y:n[1]};return n.length>2&&(t.z=n[2]),n.length>3&&(t.m=n[3]),t}function Z_(n){Ld(n.x),Ld(n.y)}function Ld(n){if(typeof Number.isFinite=="function"){if(Number.isFinite(n))return;throw new TypeError("coordinates must be finite numbers")}if(typeof n!="number"||n!==n||!isFinite(n))throw new TypeError("coordinates must be finite numbers")}function $_(n,t){return(n.datum.datum_type===ms||n.datum.datum_type===ys||n.datum.datum_type===ir)&&t.datumCode!=="WGS84"||(t.datum.datum_type===ms||t.datum.datum_type===ys||t.datum.datum_type===ir)&&n.datumCode!=="WGS84"}function Fa(n,t,e,i){var s;Array.isArray(e)?e=Wf(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var r=e.z!==void 0;if(Z_(e),n.datum&&t.datum&&$_(n,t)&&(s=new Ki("WGS84"),e=Fa(n,s,e,i),n=s),i&&n.axis!=="enu"&&(e=Id(n,!1,e)),n.projName==="longlat")e={x:e.x*te,y:e.y*te,z:e.z||0};else if(n.to_meter&&(e={x:e.x*n.to_meter,y:e.y*n.to_meter,z:e.z||0}),e=n.inverse(e),!e)return;if(n.from_greenwich&&(e.x+=n.from_greenwich),e=j_(n.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*Ni,y:e.y*Ni,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),i&&t.axis!=="enu"?Id(t,!0,e):(e&&!r&&delete e.z,e)}var Sd=Ki("WGS84");function Ql(n,t,e,i){var s,r,o;return Array.isArray(e)?(s=Fa(n,t,e,i)||{x:NaN,y:NaN},e.length>2?typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(e.splice(3)):[s.x,s.y,e[2]].concat(e.splice(3)):[s.x,s.y].concat(e.splice(2)):[s.x,s.y]):(r=Fa(n,t,e,i),o=Object.keys(e),o.length===2||o.forEach(function(a){if(typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(a==="x"||a==="y"||a==="z")return}else if(a==="x"||a==="y")return;r[a]=e[a]}),r)}function Nd(n){return n instanceof Ki?n:n.oProj?n.oProj:Ki(n)}function xe(n,t,e){n=Nd(n);var i=!1,s;return typeof t>"u"?(t=n,n=Sd,i=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=n,n=Sd,i=!0),t=Nd(t),e?Ql(n,t,e):(s={forward:function(r,o){return Ql(n,t,r,o)},inverse:function(r,o){return Ql(t,n,r,o)}},i&&(s.oProj=t),s)}var Ad=6,Bf="AJSAJS",Hf="AFAFAF",Vs=65,Ee=73,Ze=79,Zr=86,$r=90;const J_={forward:Xf,inverse:Q_,toPoint:Uf};function Xf(n,t){return t=t||5,ip(tp({lat:n[1],lon:n[0]}),t)}function Q_(n){var t=$c(Vf(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function Uf(n){var t=$c(Vf(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function th(n){return n*(Math.PI/180)}function Od(n){return 180*(n/Math.PI)}function tp(n){var t=n.lat,e=n.lon,i=6378137,s=.00669438,r=.9996,o,a,l,h,c,u,g,d=th(t),f=th(e),m,y;y=Math.floor((e+180)/6)+1,e===180&&(y=60),t>=56&&t<64&&e>=3&&e<12&&(y=32),t>=72&&t<84&&(e>=0&&e<9?y=31:e>=9&&e<21?y=33:e>=21&&e<33?y=35:e>=33&&e<42&&(y=37)),o=(y-1)*6-180+3,m=th(o),a=s/(1-s),l=i/Math.sqrt(1-s*Math.sin(d)*Math.sin(d)),h=Math.tan(d)*Math.tan(d),c=a*Math.cos(d)*Math.cos(d),u=Math.cos(d)*(f-m),g=i*((1-s/4-3*s*s/64-5*s*s*s/256)*d-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*d)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*d)-35*s*s*s/3072*Math.sin(6*d));var _=r*l*(u+(1-h+c)*u*u*u/6+(5-18*h+h*h+72*c-58*a)*u*u*u*u*u/120)+5e5,p=r*(g+l*Math.tan(d)*(u*u/2+(5-h+9*c+4*c*c)*u*u*u*u/24+(61-58*h+h*h+600*c-330*a)*u*u*u*u*u*u/720));return t<0&&(p+=1e7),{northing:Math.round(p),easting:Math.round(_),zoneNumber:y,zoneLetter:ep(t)}}function $c(n){var t=n.northing,e=n.easting,i=n.zoneLetter,s=n.zoneNumber;if(s<0||s>60)return null;var r=.9996,o=6378137,a=.00669438,l,h=(1-Math.sqrt(1-a))/(1+Math.sqrt(1-a)),c,u,g,d,f,m,y,_,p,x=e-5e5,M=t;i<"N"&&(M-=1e7),y=(s-1)*6-180+3,l=a/(1-a),m=M/r,_=m/(o*(1-a/4-3*a*a/64-5*a*a*a/256)),p=_+(3*h/2-27*h*h*h/32)*Math.sin(2*_)+(21*h*h/16-55*h*h*h*h/32)*Math.sin(4*_)+151*h*h*h/96*Math.sin(6*_),c=o/Math.sqrt(1-a*Math.sin(p)*Math.sin(p)),u=Math.tan(p)*Math.tan(p),g=l*Math.cos(p)*Math.cos(p),d=o*(1-a)/Math.pow(1-a*Math.sin(p)*Math.sin(p),1.5),f=x/(c*r);var C=p-c*Math.tan(p)/d*(f*f/2-(5+3*u+10*g-4*g*g-9*l)*f*f*f*f/24+(61+90*u+298*g+45*u*u-252*l-3*g*g)*f*f*f*f*f*f/720);C=Od(C);var T=(f-(1+2*u+g)*f*f*f/6+(5-2*g+28*u-3*g*g+8*l+24*u*u)*f*f*f*f*f/120)/Math.cos(p);T=y+Od(T);var R;if(n.accuracy){var v=$c({northing:n.northing+n.accuracy,easting:n.easting+n.accuracy,zoneLetter:n.zoneLetter,zoneNumber:n.zoneNumber});R={top:v.lat,right:v.lon,bottom:C,left:T}}else R={lat:C,lon:T};return R}function ep(n){var t="Z";return 84>=n&&n>=72?t="X":72>n&&n>=64?t="W":64>n&&n>=56?t="V":56>n&&n>=48?t="U":48>n&&n>=40?t="T":40>n&&n>=32?t="S":32>n&&n>=24?t="R":24>n&&n>=16?t="Q":16>n&&n>=8?t="P":8>n&&n>=0?t="N":0>n&&n>=-8?t="M":-8>n&&n>=-16?t="L":-16>n&&n>=-24?t="K":-24>n&&n>=-32?t="J":-32>n&&n>=-40?t="H":-40>n&&n>=-48?t="G":-48>n&&n>=-56?t="F":-56>n&&n>=-64?t="E":-64>n&&n>=-72?t="D":-72>n&&n>=-80&&(t="C"),t}function ip(n,t){var e="00000"+n.easting,i="00000"+n.northing;return n.zoneNumber+n.zoneLetter+np(n.easting,n.northing,n.zoneNumber)+e.substr(e.length-5,t)+i.substr(i.length-5,t)}function np(n,t,e){var i=Yf(e),s=Math.floor(n/1e5),r=Math.floor(t/1e5)%20;return sp(s,r,i)}function Yf(n){var t=n%Ad;return t===0&&(t=Ad),t}function sp(n,t,e){var i=e-1,s=Bf.charCodeAt(i),r=Hf.charCodeAt(i),o=s+n-1,a=r+t,l=!1;o>$r&&(o=o-$r+Vs-1,l=!0),(o===Ee||s<Ee&&o>Ee||(o>Ee||s<Ee)&&l)&&o++,(o===Ze||s<Ze&&o>Ze||(o>Ze||s<Ze)&&l)&&(o++,o===Ee&&o++),o>$r&&(o=o-$r+Vs-1),a>Zr?(a=a-Zr+Vs-1,l=!0):l=!1,(a===Ee||r<Ee&&a>Ee||(a>Ee||r<Ee)&&l)&&a++,(a===Ze||r<Ze&&a>Ze||(a>Ze||r<Ze)&&l)&&(a++,a===Ee&&a++),a>Zr&&(a=a-Zr+Vs-1);var h=String.fromCharCode(o)+String.fromCharCode(a);return h}function Vf(n){if(n&&n.length===0)throw"MGRSPoint coverting from nothing";for(var t=n.length,e=null,i="",s,r=0;!/[A-Z]/.test(s=n.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+n;i+=s,r++}var o=parseInt(i,10);if(r===0||r+3>t)throw"MGRSPoint bad conversion from: "+n;var a=n.charAt(r++);if(a<="A"||a==="B"||a==="Y"||a>="Z"||a==="I"||a==="O")throw"MGRSPoint zone letter "+a+" not handled: "+n;e=n.substring(r,r+=2);for(var l=Yf(o),h=rp(e.charAt(0),l),c=op(e.charAt(1),l);c<ap(a);)c+=2e6;var u=t-r;if(u%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+n;var g=u/2,d=0,f=0,m,y,_,p,x;return g>0&&(m=1e5/Math.pow(10,g),y=n.substring(r,r+g),d=parseFloat(y)*m,_=n.substring(r+g),f=parseFloat(_)*m),p=d+h,x=f+c,{easting:p,northing:x,zoneLetter:a,zoneNumber:o,accuracy:m}}function rp(n,t){for(var e=Bf.charCodeAt(t-1),i=1e5,s=!1;e!==n.charCodeAt(0);){if(e++,e===Ee&&e++,e===Ze&&e++,e>$r){if(s)throw"Bad character: "+n;e=Vs,s=!0}i+=1e5}return i}function op(n,t){if(n>"V")throw"MGRSPoint given invalid Northing "+n;for(var e=Hf.charCodeAt(t-1),i=0,s=!1;e!==n.charCodeAt(0);){if(e++,e===Ee&&e++,e===Ze&&e++,e>Zr){if(s)throw"Bad character: "+n;e=Vs,s=!0}i+=1e5}return i}function ap(n){var t;switch(n){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+n}function wr(n,t,e){if(!(this instanceof wr))return new wr(n,t,e);if(Array.isArray(n))this.x=n[0],this.y=n[1],this.z=n[2]||0;else if(typeof n=="object")this.x=n.x,this.y=n.y,this.z=n.z||0;else if(typeof n=="string"&&typeof t>"u"){var i=n.split(",");this.x=parseFloat(i[0],10),this.y=parseFloat(i[1],10),this.z=parseFloat(i[2],10)||0}else this.x=n,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}wr.fromMGRS=function(n){return new wr(Uf(n))};wr.prototype.toMGRS=function(n){return Xf([this.x,this.y],n)};var lp=1,hp=.25,Pd=.046875,Kd=.01953125,Dd=.01068115234375,cp=.75,up=.46875,dp=.013020833333333334,gp=.007120768229166667,fp=.3645833333333333,mp=.005696614583333333,yp=.3076171875;function jf(n){var t=[];t[0]=lp-n*(hp+n*(Pd+n*(Kd+n*Dd))),t[1]=n*(cp-n*(Pd+n*(Kd+n*Dd)));var e=n*n;return t[2]=e*(up-n*(dp+n*gp)),e*=n,t[3]=e*(fp-n*mp),t[4]=e*n*yp,t}function dl(n,t,e,i){return e*=t,t*=t,i[0]*n-e*(i[1]+t*(i[2]+t*(i[3]+t*i[4])))}var wp=20;function qf(n,t,e){for(var i=1/(1-t),s=n,r=wp;r;--r){var o=Math.sin(s),a=1-t*o*o;if(a=(dl(s,o,Math.cos(s),e)-n)*(a*Math.sqrt(a))*i,s-=a,Math.abs(a)<K)return s}return s}function _p(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=jf(this.es),this.ml0=dl(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function pp(n){var t=n.x,e=n.y,i=G(t-this.long0),s,r,o,a=Math.sin(e),l=Math.cos(e);if(this.es){var c=l*i,u=Math.pow(c,2),g=this.ep2*Math.pow(l,2),d=Math.pow(g,2),f=Math.abs(l)>K?Math.tan(e):0,m=Math.pow(f,2),y=Math.pow(m,2);s=1-this.es*Math.pow(a,2),c=c/Math.sqrt(s);var _=dl(e,a,l,this.en);r=this.a*(this.k0*c*(1+u/6*(1-m+g+u/20*(5-18*m+y+14*g-58*m*g+u/42*(61+179*y-y*m-479*m)))))+this.x0,o=this.a*(this.k0*(_-this.ml0+a*i*c/2*(1+u/12*(5-m+9*g+4*d+u/30*(61+y-58*m+270*g-330*m*g+u/56*(1385+543*y-y*m-3111*m))))))+this.y0}else{var h=l*Math.sin(i);if(Math.abs(Math.abs(h)-1)<K)return 93;if(r=.5*this.a*this.k0*Math.log((1+h)/(1-h))+this.x0,o=l*Math.cos(i)/Math.sqrt(1-Math.pow(h,2)),h=Math.abs(o),h>=1){if(h-1>K)return 93;o=0}else o=Math.acos(o);e<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return n.x=r,n.y=o,n}function xp(n){var t,e,i,s,r=(n.x-this.x0)*(1/this.a),o=(n.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+o/this.k0,e=qf(t,this.es,this.en),Math.abs(e)<A){var u=Math.sin(e),g=Math.cos(e),d=Math.abs(g)>K?Math.tan(e):0,f=this.ep2*Math.pow(g,2),m=Math.pow(f,2),y=Math.pow(d,2),_=Math.pow(y,2);t=1-this.es*Math.pow(u,2);var p=r*Math.sqrt(t)/this.k0,x=Math.pow(p,2);t=t*d,i=e-t*x/(1-this.es)*.5*(1-x/12*(5+3*y-9*f*y+f-4*m-x/30*(61+90*y-252*f*y+45*_+46*f-x/56*(1385+3633*y+4095*_+1574*_*y)))),s=G(this.long0+p*(1-x/6*(1+2*y+f-x/20*(5+28*y+24*_+8*f*y+6*f-x/42*(61+662*y+1320*_+720*_*y))))/g)}else i=A*Go(o),s=0;else{var a=Math.exp(r/this.k0),l=.5*(a-1/a),h=this.lat0+o/this.k0,c=Math.cos(h);t=Math.sqrt((1-Math.pow(c,2))/(1+Math.pow(l,2))),i=Math.asin(t),o<0&&(i=-i),l===0&&c===0?s=0:s=G(Math.atan2(l,c)+this.long0)}return n.x=s,n.y=i,n}var Tp=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const xa={init:_p,forward:pp,inverse:xp,names:Tp};function Zf(n){var t=Math.exp(n);return t=(t-1/t)/2,t}function ei(n,t){n=Math.abs(n),t=Math.abs(t);var e=Math.max(n,t),i=Math.min(n,t)/(e||1);return e*Math.sqrt(1+Math.pow(i,2))}function Mp(n){var t=1+n,e=t-1;return e===0?n:n*Math.log(t)/e}function Cp(n){var t=Math.abs(n);return t=Mp(t*(1+t/(ei(1,t)+1))),n<0?-t:t}function Jc(n,t){for(var e=2*Math.cos(2*t),i=n.length-1,s=n[i],r=0,o;--i>=0;)o=-r+e*s+n[i],r=s,s=o;return t+o*Math.sin(2*t)}function Rp(n,t){for(var e=2*Math.cos(t),i=n.length-1,s=n[i],r=0,o;--i>=0;)o=-r+e*s+n[i],r=s,s=o;return Math.sin(t)*o}function Ep(n){var t=Math.exp(n);return t=(t+1/t)/2,t}function $f(n,t,e){for(var i=Math.sin(t),s=Math.cos(t),r=Zf(e),o=Ep(e),a=2*s*o,l=-2*i*r,h=n.length-1,c=n[h],u=0,g=0,d=0,f,m;--h>=0;)f=g,m=u,g=c,u=d,c=-f+a*g-l*u+n[h],d=-m+l*g+a*u;return a=i*o,l=s*r,[a*c-l*d,a*d+l*c]}function vp(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(xa.init.apply(this),this.forward=xa.forward,this.inverse=xa.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var n=this.es/(1+Math.sqrt(1-this.es)),t=n/(2-n),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var i=Jc(this.cbg,this.lat0);this.Zb=-this.Qn*(i+Rp(this.gtu,2*i))}function bp(n){var t=G(n.x-this.long0),e=n.y;e=Jc(this.cbg,e);var i=Math.sin(e),s=Math.cos(e),r=Math.sin(t),o=Math.cos(t);e=Math.atan2(i,o*s),t=Math.atan2(r*s,ei(i,s*o)),t=Cp(Math.tan(t));var a=$f(this.gtu,2*e,2*t);e=e+a[0],t=t+a[1];var l,h;return Math.abs(t)<=2.623395162778?(l=this.a*(this.Qn*t)+this.x0,h=this.a*(this.Qn*e+this.Zb)+this.y0):(l=1/0,h=1/0),n.x=l,n.y=h,n}function Ip(n){var t=(n.x-this.x0)*(1/this.a),e=(n.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var i,s;if(Math.abs(t)<=2.623395162778){var r=$f(this.utg,2*e,2*t);e=e+r[0],t=t+r[1],t=Math.atan(Zf(t));var o=Math.sin(e),a=Math.cos(e),l=Math.sin(t),h=Math.cos(t);e=Math.atan2(o*h,ei(l,h*a)),t=Math.atan2(l,h*a),i=G(t+this.long0),s=Jc(this.cgb,e)}else i=1/0,s=1/0;return n.x=i,n.y=s,n}var Lp=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const Ta={init:vp,forward:bp,inverse:Ip,names:Lp};function Sp(n,t){if(n===void 0){if(n=Math.floor((G(t)+Math.PI)*30/Math.PI)+1,n<0)return 0;if(n>60)return 60}return n}var Np="etmerc";function Ap(){var n=Sp(this.zone,this.long0);if(n===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(n)-183)*te,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Ta.init.apply(this),this.forward=Ta.forward,this.inverse=Ta.inverse}var Op=["Universal Transverse Mercator System","utm"];const Pp={init:Ap,names:Op,dependsOn:Np};function Qc(n,t){return Math.pow((1-n)/(1+n),t)}var Kp=20;function Dp(){var n=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*n*n),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(n/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+Rt)/(Math.pow(Math.tan(.5*this.lat0+Rt),this.C)*Qc(this.e*n,this.ratexp))}function Fp(n){var t=n.x,e=n.y;return n.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+Rt),this.C)*Qc(this.e*Math.sin(e),this.ratexp))-A,n.x=this.C*t,n}function kp(n){for(var t=1e-14,e=n.x/this.C,i=n.y,s=Math.pow(Math.tan(.5*i+Rt)/this.K,1/this.C),r=Kp;r>0&&(i=2*Math.atan(s*Qc(this.e*Math.sin(n.y),-.5*this.e))-A,!(Math.abs(i-n.y)<t));--r)n.y=i;return r?(n.x=e,n.y=i,n):null}const tu={init:Dp,forward:Fp,inverse:kp};function Gp(){tu.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function zp(n){var t,e,i,s;return n.x=G(n.x-this.long0),tu.forward.apply(this,[n]),t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*i),n.x=s*e*Math.sin(n.x),n.y=s*(this.cosc0*t-this.sinc0*e*i),n.x=this.a*n.x+this.x0,n.y=this.a*n.y+this.y0,n}function Wp(n){var t,e,i,s,r;if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,r=ei(n.x,n.y)){var o=2*Math.atan2(r,this.R2);t=Math.sin(o),e=Math.cos(o),s=Math.asin(e*this.sinc0+n.y*t*this.cosc0/r),i=Math.atan2(n.x*t,r*this.cosc0*e-n.y*this.sinc0*t)}else s=this.phic0,i=0;return n.x=i,n.y=s,tu.inverse.apply(this,[n]),n.x=G(n.x+this.long0),n}var Bp=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const Hp={init:Gp,forward:zp,inverse:Wp,names:Bp};function Xp(n,t,e){return t*=e,Math.tan(.5*(A+n))*Math.pow((1-t)/(1+t),.5*e)}function Up(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=K&&(this.k0=.5*(1+Go(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=K&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=K&&Math.abs(Math.cos(this.lat_ts))>K&&(this.k0=.5*this.cons*Wi(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/wi(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Wi(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-A,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function Yp(n){var t=n.x,e=n.y,i=Math.sin(e),s=Math.cos(e),r,o,a,l,h,c,u=G(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=K&&Math.abs(e+this.lat0)<=K?(n.x=NaN,n.y=NaN,n):this.sphere?(r=2*this.k0/(1+this.sinlat0*i+this.coslat0*s*Math.cos(u)),n.x=this.a*r*s*Math.sin(u)+this.x0,n.y=this.a*r*(this.coslat0*i-this.sinlat0*s*Math.cos(u))+this.y0,n):(o=2*Math.atan(this.ssfn_(e,i,this.e))-A,l=Math.cos(o),a=Math.sin(o),Math.abs(this.coslat0)<=K?(h=wi(this.e,e*this.con,this.con*i),c=2*this.a*this.k0*h/this.cons,n.x=this.x0+c*Math.sin(t-this.long0),n.y=this.y0-this.con*c*Math.cos(t-this.long0),n):(Math.abs(this.sinlat0)<K?(r=2*this.a*this.k0/(1+l*Math.cos(u)),n.y=r*a):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*l*Math.cos(u))),n.y=r*(this.cosX0*a-this.sinX0*l*Math.cos(u))+this.y0),n.x=r*l*Math.sin(u)+this.x0,n))}function Vp(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,o=Math.sqrt(n.x*n.x+n.y*n.y);if(this.sphere){var a=2*Math.atan(o/(2*this.a*this.k0));return t=this.long0,e=this.lat0,o<=K?(n.x=t,n.y=e,n):(e=Math.asin(Math.cos(a)*this.sinlat0+n.y*Math.sin(a)*this.coslat0/o),Math.abs(this.coslat0)<K?this.lat0>0?t=G(this.long0+Math.atan2(n.x,-1*n.y)):t=G(this.long0+Math.atan2(n.x,n.y)):t=G(this.long0+Math.atan2(n.x*Math.sin(a),o*this.coslat0*Math.cos(a)-n.y*this.sinlat0*Math.sin(a))),n.x=t,n.y=e,n)}else if(Math.abs(this.coslat0)<=K){if(o<=K)return e=this.lat0,t=this.long0,n.x=t,n.y=e,n;n.x*=this.con,n.y*=this.con,i=o*this.cons/(2*this.a*this.k0),e=this.con*po(this.e,i),t=this.con*G(this.con*this.long0+Math.atan2(n.x,-1*n.y))}else s=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,o<=K?r=this.X0:(r=Math.asin(Math.cos(s)*this.sinX0+n.y*Math.sin(s)*this.cosX0/o),t=G(this.long0+Math.atan2(n.x*Math.sin(s),o*this.cosX0*Math.cos(s)-n.y*this.sinX0*Math.sin(s)))),e=-1*po(this.e,Math.tan(.5*(A+r)));return n.x=t,n.y=e,n}var jp=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)","Polar_Stereographic"];const qp={init:Up,forward:Yp,inverse:Vp,names:jp,ssfn_:Xp};function Zp(){var n=this.lat0;this.lambda0=this.long0;var t=Math.sin(n),e=this.a,i=this.rf,s=1/i,r=2*s-Math.pow(s,2),o=this.e=Math.sqrt(r);this.R=this.k0*e*Math.sqrt(1-r)/(1-r*Math.pow(t,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(n),4)),this.b0=Math.asin(t/this.alpha);var a=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+n/2)),h=Math.log((1+o*t)/(1-o*t));this.K=a-this.alpha*l+this.alpha*o/2*h}function $p(n){var t=Math.log(Math.tan(Math.PI/4-n.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(n.y))/(1-this.e*Math.sin(n.y))),i=-this.alpha*(t+e)+this.K,s=2*(Math.atan(Math.exp(i))-Math.PI/4),r=this.alpha*(n.x-this.lambda0),o=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(r))),a=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(r));return n.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,n.x=this.R*o+this.x0,n}function Jp(n){for(var t=n.x-this.x0,e=n.y-this.y0,i=t/this.R,s=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(i)),o=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(s))),a=this.lambda0+o/this.alpha,l=0,h=r,c=-1e3,u=0;Math.abs(h-c)>1e-7;){if(++u>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(h))/2)),c=h,h=2*Math.atan(Math.exp(l))-Math.PI/2}return n.x=a,n.y=h,n}var Qp=["somerc"];const tx={init:Zp,forward:$p,inverse:Jp,names:Qp};var zs=1e-7;function ex(n){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof n.PROJECTION=="object"?Object.keys(n.PROJECTION)[0]:n.PROJECTION;return"no_uoff"in n||"no_off"in n||t.indexOf(e)!==-1}function ix(){var n,t,e,i,s,r,o,a,l,h,c=0,u,g=0,d=0,f=0,m=0,y=0,_=0;this.no_off=ex(this),this.no_rot="no_rot"in this;var p=!1;"alpha"in this&&(p=!0);var x=!1;if("rectified_grid_angle"in this&&(x=!0),p&&(_=this.alpha),x&&(c=this.rectified_grid_angle*te),p||x)g=this.longc;else if(d=this.long1,m=this.lat1,f=this.long2,y=this.lat2,Math.abs(m-y)<=zs||(n=Math.abs(m))<=zs||Math.abs(n-A)<=zs||Math.abs(Math.abs(this.lat0)-A)<=zs||Math.abs(Math.abs(y)-A)<=zs)throw new Error;var M=1-this.es;t=Math.sqrt(M),Math.abs(this.lat0)>K?(a=Math.sin(this.lat0),e=Math.cos(this.lat0),n=1-this.es*a*a,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/M),this.A=this.B*this.k0*t/n,i=this.B*t/(e*Math.sqrt(n)),s=i*i-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=i,this.E*=Math.pow(wi(this.e,this.lat0,a),this.B)):(this.B=1/t,this.A=this.k0,this.E=i=s=1),p||x?(p?(u=Math.asin(Math.sin(_)/i),x||(c=_)):(u=c,_=Math.asin(i*Math.sin(u))),this.lam0=g-Math.asin(.5*(s-1/s)*Math.tan(u))/this.B):(r=Math.pow(wi(this.e,m,Math.sin(m)),this.B),o=Math.pow(wi(this.e,y,Math.sin(y)),this.B),s=this.E/r,l=(o-r)/(o+r),h=this.E*this.E,h=(h-o*r)/(h+o*r),n=d-f,n<-Math.pi?f-=wo:n>Math.pi&&(f+=wo),this.lam0=G(.5*(d+f)-Math.atan(h*Math.tan(.5*this.B*(d-f))/l)/this.B),u=Math.atan(2*Math.sin(this.B*G(d-this.lam0))/(s-1/s)),c=_=Math.asin(i*Math.sin(u))),this.singam=Math.sin(u),this.cosgam=Math.cos(u),this.sinrot=Math.sin(c),this.cosrot=Math.cos(c),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(_))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*u,this.v_pole_n=this.ArB*Math.log(Math.tan(Rt-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(Rt+s))}function nx(n){var t={},e,i,s,r,o,a,l,h;if(n.x=n.x-this.lam0,Math.abs(Math.abs(n.y)-A)>K){if(o=this.E/Math.pow(wi(this.e,n.y,Math.sin(n.y)),this.B),a=1/o,e=.5*(o-a),i=.5*(o+a),r=Math.sin(this.B*n.x),s=(e*this.singam-r*this.cosgam)/i,Math.abs(Math.abs(s)-1)<K)throw new Error;h=.5*this.ArB*Math.log((1-s)/(1+s)),a=Math.cos(this.B*n.x),Math.abs(a)<zs?l=this.A*n.x:l=this.ArB*Math.atan2(e*this.cosgam+r*this.singam,a)}else h=n.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*n.y;return this.no_rot?(t.x=l,t.y=h):(l-=this.u_0,t.x=h*this.cosrot+l*this.sinrot,t.y=l*this.cosrot-h*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function sx(n){var t,e,i,s,r,o,a,l={};if(n.x=(n.x-this.x0)*(1/this.a),n.y=(n.y-this.y0)*(1/this.a),this.no_rot?(e=n.y,t=n.x):(e=n.x*this.cosrot-n.y*this.sinrot,t=n.y*this.cosrot+n.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*e),s=.5*(i-1/i),r=.5*(i+1/i),o=Math.sin(this.BrA*t),a=(o*this.cosgam+s*this.singam)/r,Math.abs(Math.abs(a)-1)<K)l.x=0,l.y=a<0?-A:A;else{if(l.y=this.E/Math.sqrt((1+a)/(1-a)),l.y=po(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(s*this.cosgam-o*this.singam,Math.cos(this.BrA*t))}return l.x+=this.lam0,l}var rx=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const ox={init:ix,forward:nx,inverse:sx,names:rx};function ax(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<K)){var n=this.b/this.a;this.e=Math.sqrt(1-n*n);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),i=Wi(this.e,t,e),s=wi(this.e,this.lat1,t),r=Math.sin(this.lat2),o=Math.cos(this.lat2),a=Wi(this.e,r,o),l=wi(this.e,this.lat2,r),h=wi(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>K?this.ns=Math.log(i/a)/Math.log(s/l):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=i/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(h,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function lx(n){var t=n.x,e=n.y;Math.abs(2*Math.abs(e)-Math.PI)<=K&&(e=Go(e)*(A-2*K));var i=Math.abs(Math.abs(e)-A),s,r;if(i>K)s=wi(this.e,e,Math.sin(e)),r=this.a*this.f0*Math.pow(s,this.ns);else{if(i=e*this.ns,i<=0)return null;r=0}var o=this.ns*G(t-this.long0);return n.x=this.k0*(r*Math.sin(o))+this.x0,n.y=this.k0*(this.rh-r*Math.cos(o))+this.y0,n}function hx(n){var t,e,i,s,r,o=(n.x-this.x0)/this.k0,a=this.rh-(n.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+a*a),e=1):(t=-Math.sqrt(o*o+a*a),e=-1);var l=0;if(t!==0&&(l=Math.atan2(e*o,e*a)),t!==0||this.ns>0){if(e=1/this.ns,i=Math.pow(t/(this.a*this.f0),e),s=po(this.e,i),s===-9999)return null}else s=-A;return r=G(l/this.ns+this.long0),n.x=r,n.y=s,n}var cx=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const ux={init:ax,forward:lx,inverse:hx,names:cx};function dx(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function gx(n){var t,e,i,s,r,o,a,l=n.x,h=n.y,c=G(l-this.long0);return t=Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(h/2+this.s45),this.alfa)/t)-this.s45),i=-c*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(i)),r=Math.asin(Math.cos(e)*Math.sin(i)/Math.cos(s)),o=this.n*r,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),n.y=a*Math.cos(o)/1,n.x=a*Math.sin(o)/1,this.czech||(n.y*=-1,n.x*=-1),n}function fx(n){var t,e,i,s,r,o,a,l,h=n.x;n.x=n.y,n.y=h,this.czech||(n.y*=-1,n.x*=-1),o=Math.sqrt(n.x*n.x+n.y*n.y),r=Math.atan2(n.y,n.x),s=r/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(s)),e=Math.asin(Math.cos(i)*Math.sin(s)/Math.cos(t)),n.x=this.long0-e/this.alfa,a=t,l=0;var c=0;do n.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),Math.abs(a-n.y)<1e-10&&(l=1),a=n.y,c+=1;while(l===0&&c<15);return c>=15?null:n}var mx=["Krovak","krovak"];const yx={init:dx,forward:gx,inverse:fx,names:mx};function pe(n,t,e,i,s){return n*s-t*Math.sin(2*s)+e*Math.sin(4*s)-i*Math.sin(6*s)}function zo(n){return 1-.25*n*(1+n/16*(3+1.25*n))}function Wo(n){return .375*n*(1+.25*n*(1+.46875*n))}function Bo(n){return .05859375*n*n*(1+.75*n)}function Ho(n){return n*n*n*(35/3072)}function _r(n,t,e){var i=t*e;return n/Math.sqrt(1-i*i)}function Sr(n){return Math.abs(n)<A?n:n-Go(n)*Math.PI}function ka(n,t,e,i,s){var r,o;r=n/t;for(var a=0;a<15;a++)if(o=(n-(t*r-e*Math.sin(2*r)+i*Math.sin(4*r)-s*Math.sin(6*r)))/(t-2*e*Math.cos(2*r)+4*i*Math.cos(4*r)-6*s*Math.cos(6*r)),r+=o,Math.abs(o)<=1e-10)return r;return NaN}function wx(){this.sphere||(this.e0=zo(this.es),this.e1=Wo(this.es),this.e2=Bo(this.es),this.e3=Ho(this.es),this.ml0=this.a*pe(this.e0,this.e1,this.e2,this.e3,this.lat0))}function _x(n){var t,e,i=n.x,s=n.y;if(i=G(i-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(s)*Math.sin(i)),e=this.a*(Math.atan2(Math.tan(s),Math.cos(i))-this.lat0);else{var r=Math.sin(s),o=Math.cos(s),a=_r(this.a,this.e,r),l=Math.tan(s)*Math.tan(s),h=i*Math.cos(s),c=h*h,u=this.es*o*o/(1-this.es),g=this.a*pe(this.e0,this.e1,this.e2,this.e3,s);t=a*h*(1-c*l*(1/6-(8-l+8*u)*c/120)),e=g-this.ml0+a*r/o*c*(.5+(5-l+6*u)*c/24)}return n.x=t+this.x0,n.y=e+this.y0,n}function px(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s;if(this.sphere){var r=e+this.lat0;i=Math.asin(Math.sin(r)*Math.cos(t)),s=Math.atan2(Math.tan(t),Math.cos(r))}else{var o=this.ml0/this.a+e,a=ka(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(a)-A)<=K)return n.x=this.long0,n.y=A,e<0&&(n.y*=-1),n;var l=_r(this.a,this.e,Math.sin(a)),h=l*l*l/this.a/this.a*(1-this.es),c=Math.pow(Math.tan(a),2),u=t*this.a/l,g=u*u;i=a-l*Math.tan(a)/h*u*u*(.5-(1+3*c)*u*u/24),s=u*(1-g*(c/3+(1+3*c)*c*g/15))/Math.cos(a)}return n.x=G(s+this.long0),n.y=Sr(i),n}var xx=["Cassini","Cassini_Soldner","cass"];const Tx={init:wx,forward:_x,inverse:px,names:xx};function On(n,t){var e;return n>1e-7?(e=n*t,(1-n*n)*(t/(1-e*e)-.5/n*Math.log((1-e)/(1+e)))):2*t}var Mx=1,Cx=2,Rx=3,Ex=4;function vx(){var n=Math.abs(this.lat0);if(Math.abs(n-A)<K?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(n)<K?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=On(this.e,1),this.mmf=.5/(1-this.es),this.apa=Kx(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=On(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function bx(n){var t,e,i,s,r,o,a,l,h,c,u=n.x,g=n.y;if(u=G(u-this.long0),this.sphere){if(r=Math.sin(g),c=Math.cos(g),i=Math.cos(u),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+c*i:1+this.sinph0*r+this.cosph0*c*i,e<=K)return null;e=Math.sqrt(2/e),t=e*c*Math.sin(u),e*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*c*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(g+this.lat0)<K)return null;e=Rt-g*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(u),e*=i}}else{switch(a=0,l=0,h=0,i=Math.cos(u),s=Math.sin(u),r=Math.sin(g),o=On(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(a=o/this.qp,l=Math.sqrt(1-a*a)),this.mode){case this.OBLIQ:h=1+this.sinb1*a+this.cosb1*l*i;break;case this.EQUIT:h=1+l*i;break;case this.N_POLE:h=A+g,o=this.qp-o;break;case this.S_POLE:h=g-A,o=this.qp+o;break}if(Math.abs(h)<K)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:h=Math.sqrt(2/h),this.mode===this.OBLIQ?e=this.ymf*h*(this.cosb1*a-this.sinb1*l*i):e=(h=Math.sqrt(2/(1+l*i)))*a*this.ymf,t=this.xmf*h*l*s;break;case this.N_POLE:case this.S_POLE:o>=0?(t=(h=Math.sqrt(o))*s,e=i*(this.mode===this.S_POLE?h:-h)):t=e=0;break}}return n.x=this.a*t+this.x0,n.y=this.a*e+this.y0,n}function Ix(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s,r,o,a,l,h;if(this.sphere){var c=0,u,g=0;if(u=Math.sqrt(t*t+e*e),s=u*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(g=Math.sin(s),c=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(u)<=K?0:Math.asin(e*g/u),t*=g,e=c*u;break;case this.OBLIQ:s=Math.abs(u)<=K?this.lat0:Math.asin(c*this.sinph0+e*g*this.cosph0/u),t*=g*this.cosph0,e=(c-Math.sin(s)*this.sinph0)*u;break;case this.N_POLE:e=-e,s=A-s;break;case this.S_POLE:s-=A;break}i=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(h=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,l=Math.sqrt(t*t+e*e),l<K)return n.x=this.long0,n.y=this.lat0,n;o=2*Math.asin(.5*l/this.rq),r=Math.cos(o),t*=o=Math.sin(o),this.mode===this.OBLIQ?(h=r*this.sinb1+e*o*this.cosb1/l,a=this.qp*h,e=l*this.cosb1*r-e*this.sinb1*o):(h=e*o/l,a=this.qp*h,e=l*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),a=t*t+e*e,!a)return n.x=this.long0,n.y=this.lat0,n;h=1-a/this.qp,this.mode===this.S_POLE&&(h=-h)}i=Math.atan2(t,e),s=Dx(Math.asin(h),this.apa)}return n.x=G(this.long0+i),n.y=s,n}var Lx=.3333333333333333,Sx=.17222222222222222,Nx=.10257936507936508,Ax=.06388888888888888,Ox=.0664021164021164,Px=.016415012942191543;function Kx(n){var t,e=[];return e[0]=n*Lx,t=n*n,e[0]+=t*Sx,e[1]=t*Ax,t*=n,e[0]+=t*Nx,e[1]+=t*Ox,e[2]=t*Px,e}function Dx(n,t){var e=n+n;return n+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var Fx=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const kx={init:vx,forward:bx,inverse:Ix,names:Fx,S_POLE:Mx,N_POLE:Cx,EQUIT:Rx,OBLIQ:Ex};function Fn(n){return Math.abs(n)>1&&(n=n>1?1:-1),Math.asin(n)}function Gx(){Math.abs(this.lat1+this.lat2)<K||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Wi(this.e3,this.sin_po,this.cos_po),this.qs1=On(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Wi(this.e3,this.sin_po,this.cos_po),this.qs2=On(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=On(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>K?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function zx(n){var t=n.x,e=n.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var i=On(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,r=this.ns0*G(t-this.long0),o=s*Math.sin(r)+this.x0,a=this.rh-s*Math.cos(r)+this.y0;return n.x=o,n.y=a,n}function Wx(n){var t,e,i,s,r,o;return n.x-=this.x0,n.y=this.rh-n.y+this.y0,this.ns0>=0?(t=Math.sqrt(n.x*n.x+n.y*n.y),i=1):(t=-Math.sqrt(n.x*n.x+n.y*n.y),i=-1),s=0,t!==0&&(s=Math.atan2(i*n.x,i*n.y)),i=t*this.ns0/this.a,this.sphere?o=Math.asin((this.c-i*i)/(2*this.ns0)):(e=(this.c-i*i)/this.ns0,o=this.phi1z(this.e3,e)),r=G(s/this.ns0+this.long0),n.x=r,n.y=o,n}function Bx(n,t){var e,i,s,r,o,a=Fn(.5*t);if(n<K)return a;for(var l=n*n,h=1;h<=25;h++)if(e=Math.sin(a),i=Math.cos(a),s=n*e,r=1-s*s,o=.5*r*r/i*(t/(1-l)-e/r+.5/n*Math.log((1-s)/(1+s))),a=a+o,Math.abs(o)<=1e-7)return a;return null}var Hx=["Albers_Conic_Equal_Area","Albers","aea"];const Xx={init:Gx,forward:zx,inverse:Wx,names:Hx,phi1z:Bx};function Ux(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function Yx(n){var t,e,i,s,r,o,a,l,h=n.x,c=n.y;return i=G(h-this.long0),t=Math.sin(c),e=Math.cos(c),s=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*s,r=1,o>0||Math.abs(o)<=K?(a=this.x0+this.a*r*e*Math.sin(i)/o,l=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)/o):(a=this.x0+this.infinity_dist*e*Math.sin(i),l=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*s)),n.x=a,n.y=l,n}function Vx(n){var t,e,i,s,r,o;return n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,(t=Math.sqrt(n.x*n.x+n.y*n.y))?(s=Math.atan2(t,this.rc),e=Math.sin(s),i=Math.cos(s),o=Fn(i*this.sin_p14+n.y*e*this.cos_p14/t),r=Math.atan2(n.x*e,t*this.cos_p14*i-n.y*this.sin_p14*e),r=G(this.long0+r)):(o=this.phic0,r=0),n.x=r,n.y=o,n}var jx=["gnom"];const qx={init:Ux,forward:Yx,inverse:Vx,names:jx};function Zx(n,t){var e=1-(1-n*n)/(2*n)*Math.log((1-n)/(1+n));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*A:A;for(var i=Math.asin(.5*t),s,r,o,a,l=0;l<30;l++)if(r=Math.sin(i),o=Math.cos(i),a=n*r,s=Math.pow(1-a*a,2)/(2*o)*(t/(1-n*n)-r/(1-a*a)+.5/n*Math.log((1-a)/(1+a))),i+=s,Math.abs(s)<=1e-10)return i;return NaN}function $x(){this.sphere||(this.k0=Wi(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function Jx(n){var t=n.x,e=n.y,i,s,r=G(t-this.long0);if(this.sphere)i=this.x0+this.a*r*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var o=On(this.e,Math.sin(e));i=this.x0+this.a*this.k0*r,s=this.y0+this.a*o*.5/this.k0}return n.x=i,n.y=s,n}function Qx(n){n.x-=this.x0,n.y-=this.y0;var t,e;return this.sphere?(t=G(this.long0+n.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(n.y/this.a*Math.cos(this.lat_ts))):(e=Zx(this.e,2*n.y*this.k0/this.a),t=G(this.long0+n.x/(this.a*this.k0))),n.x=t,n.y=e,n}var tT=["cea"];const eT={init:$x,forward:Jx,inverse:Qx,names:tT};function iT(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function nT(n){var t=n.x,e=n.y,i=G(t-this.long0),s=Sr(e-this.lat0);return n.x=this.x0+this.a*i*this.rc,n.y=this.y0+this.a*s,n}function sT(n){var t=n.x,e=n.y;return n.x=G(this.long0+(t-this.x0)/(this.a*this.rc)),n.y=Sr(this.lat0+(e-this.y0)/this.a),n}var rT=["Equirectangular","Equidistant_Cylindrical","eqc"];const oT={init:iT,forward:nT,inverse:sT,names:rT};var Fd=20;function aT(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=zo(this.es),this.e1=Wo(this.es),this.e2=Bo(this.es),this.e3=Ho(this.es),this.ml0=this.a*pe(this.e0,this.e1,this.e2,this.e3,this.lat0)}function lT(n){var t=n.x,e=n.y,i,s,r,o=G(t-this.long0);if(r=o*Math.sin(e),this.sphere)Math.abs(e)<=K?(i=this.a*o,s=-1*this.a*this.lat0):(i=this.a*Math.sin(r)/Math.tan(e),s=this.a*(Sr(e-this.lat0)+(1-Math.cos(r))/Math.tan(e)));else if(Math.abs(e)<=K)i=this.a*o,s=-1*this.ml0;else{var a=_r(this.a,this.e,Math.sin(e))/Math.tan(e);i=a*Math.sin(r),s=this.a*pe(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+a*(1-Math.cos(r))}return n.x=i+this.x0,n.y=s+this.y0,n}function hT(n){var t,e,i,s,r,o,a,l,h;if(i=n.x-this.x0,s=n.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=K)t=G(i/this.a+this.long0),e=0;else{o=this.lat0+s/this.a,a=i*i/this.a/this.a+o*o,l=o;var c;for(r=Fd;r;--r)if(c=Math.tan(l),h=-1*(o*(l*c+1)-l-.5*(l*l+a)*c)/((l-o)/c-1),l+=h,Math.abs(h)<=K){e=l;break}t=G(this.long0+Math.asin(i*Math.tan(l)/this.a)/Math.sin(e))}else if(Math.abs(s+this.ml0)<=K)e=0,t=G(this.long0+i/this.a);else{o=(this.ml0+s)/this.a,a=i*i/this.a/this.a+o*o,l=o;var u,g,d,f,m;for(r=Fd;r;--r)if(m=this.e*Math.sin(l),u=Math.sqrt(1-m*m)*Math.tan(l),g=this.a*pe(this.e0,this.e1,this.e2,this.e3,l),d=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),f=g/this.a,h=(o*(u*f+1)-f-.5*u*(f*f+a))/(this.es*Math.sin(2*l)*(f*f+a-2*o*f)/(4*u)+(o-f)*(u*d-2/Math.sin(2*l))-d),l-=h,Math.abs(h)<=K){e=l;break}u=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=G(this.long0+Math.asin(i*u/this.a)/Math.sin(e))}return n.x=t,n.y=e,n}var cT=["Polyconic","poly"];const uT={init:aT,forward:lT,inverse:hT,names:cT};function dT(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function gT(n){var t,e=n.x,i=n.y,s=i-this.lat0,r=e-this.long0,o=s/no*1e-5,a=r,l=1,h=0;for(t=1;t<=10;t++)l=l*o,h=h+this.A[t]*l;var c=h,u=a,g=1,d=0,f,m,y=0,_=0;for(t=1;t<=6;t++)f=g*c-d*u,m=d*c+g*u,g=f,d=m,y=y+this.B_re[t]*g-this.B_im[t]*d,_=_+this.B_im[t]*g+this.B_re[t]*d;return n.x=_*this.a+this.x0,n.y=y*this.a+this.y0,n}function fT(n){var t,e=n.x,i=n.y,s=e-this.x0,r=i-this.y0,o=r/this.a,a=s/this.a,l=1,h=0,c,u,g=0,d=0;for(t=1;t<=6;t++)c=l*o-h*a,u=h*o+l*a,l=c,h=u,g=g+this.C_re[t]*l-this.C_im[t]*h,d=d+this.C_im[t]*l+this.C_re[t]*h;for(var f=0;f<this.iterations;f++){var m=g,y=d,_,p,x=o,M=a;for(t=2;t<=6;t++)_=m*g-y*d,p=y*g+m*d,m=_,y=p,x=x+(t-1)*(this.B_re[t]*m-this.B_im[t]*y),M=M+(t-1)*(this.B_im[t]*m+this.B_re[t]*y);m=1,y=0;var C=this.B_re[1],T=this.B_im[1];for(t=2;t<=6;t++)_=m*g-y*d,p=y*g+m*d,m=_,y=p,C=C+t*(this.B_re[t]*m-this.B_im[t]*y),T=T+t*(this.B_im[t]*m+this.B_re[t]*y);var R=C*C+T*T;g=(x*C+M*T)/R,d=(M*C-x*T)/R}var v=g,P=d,S=1,D=0;for(t=1;t<=9;t++)S=S*v,D=D+this.D[t]*S;var N=this.lat0+D*no*1e5,B=this.long0+P;return n.x=B,n.y=N,n}var mT=["New_Zealand_Map_Grid","nzmg"];const yT={init:dT,forward:gT,inverse:fT,names:mT};function wT(){}function _T(n){var t=n.x,e=n.y,i=G(t-this.long0),s=this.x0+this.a*i,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return n.x=s,n.y=r,n}function pT(n){n.x-=this.x0,n.y-=this.y0;var t=G(this.long0+n.x/this.a),e=2.5*(Math.atan(Math.exp(.8*n.y/this.a))-Math.PI/4);return n.x=t,n.y=e,n}var xT=["Miller_Cylindrical","mill"];const TT={init:wT,forward:_T,inverse:pT,names:xT};var MT=20;function CT(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=jf(this.es)}function RT(n){var t,e,i=n.x,s=n.y;if(i=G(i-this.long0),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var r=this.n*Math.sin(s),o=MT;o;--o){var a=(this.m*s+Math.sin(s)-r)/(this.m+Math.cos(s));if(s-=a,Math.abs(a)<K)break}t=this.a*this.C_x*i*(this.m+Math.cos(s)),e=this.a*this.C_y*s}else{var l=Math.sin(s),h=Math.cos(s);e=this.a*dl(s,l,h,this.en),t=this.a*i*h/Math.sqrt(1-this.es*l*l)}return n.x=t,n.y=e,n}function ET(n){var t,e,i,s;return n.x-=this.x0,i=n.x/this.a,n.y-=this.y0,t=n.y/this.a,this.sphere?(t/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(t))),this.m?t=Fn((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=Fn(Math.sin(t)/this.n)),i=G(i+this.long0),t=Sr(t)):(t=qf(n.y/this.a,this.es,this.en),s=Math.abs(t),s<A?(s=Math.sin(t),e=this.long0+n.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(t)),i=G(e)):s-K<A&&(i=this.long0)),n.x=i,n.y=t,n}var vT=["Sinusoidal","sinu"];const bT={init:CT,forward:RT,inverse:ET,names:vT};function IT(){}function LT(n){for(var t=n.x,e=n.y,i=G(t-this.long0),s=e,r=Math.PI*Math.sin(e);;){var o=-(s+Math.sin(s)-r)/(1+Math.cos(s));if(s+=o,Math.abs(o)<K)break}s/=2,Math.PI/2-Math.abs(e)<K&&(i=0);var a=.900316316158*this.a*i*Math.cos(s)+this.x0,l=1.4142135623731*this.a*Math.sin(s)+this.y0;return n.x=a,n.y=l,n}function ST(n){var t,e;n.x-=this.x0,n.y-=this.y0,e=n.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var i=G(this.long0+n.x/(.900316316158*this.a*Math.cos(t)));i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var s=Math.asin(e);return n.x=i,n.y=s,n}var NT=["Mollweide","moll"];const AT={init:IT,forward:LT,inverse:ST,names:NT};function OT(){Math.abs(this.lat1+this.lat2)<K||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=zo(this.es),this.e1=Wo(this.es),this.e2=Bo(this.es),this.e3=Ho(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=Wi(this.e,this.sinphi,this.cosphi),this.ml1=pe(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<K?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=Wi(this.e,this.sinphi,this.cosphi),this.ml2=pe(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=pe(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function PT(n){var t=n.x,e=n.y,i;if(this.sphere)i=this.a*(this.g-e);else{var s=pe(this.e0,this.e1,this.e2,this.e3,e);i=this.a*(this.g-s)}var r=this.ns*G(t-this.long0),o=this.x0+i*Math.sin(r),a=this.y0+this.rh-i*Math.cos(r);return n.x=o,n.y=a,n}function KT(n){n.x-=this.x0,n.y=this.rh-n.y+this.y0;var t,e,i,s;this.ns>=0?(e=Math.sqrt(n.x*n.x+n.y*n.y),t=1):(e=-Math.sqrt(n.x*n.x+n.y*n.y),t=-1);var r=0;if(e!==0&&(r=Math.atan2(t*n.x,t*n.y)),this.sphere)return s=G(this.long0+r/this.ns),i=Sr(this.g-e/this.a),n.x=s,n.y=i,n;var o=this.g-e/this.a;return i=ka(o,this.e0,this.e1,this.e2,this.e3),s=G(this.long0+r/this.ns),n.x=s,n.y=i,n}var DT=["Equidistant_Conic","eqdc"];const FT={init:OT,forward:PT,inverse:KT,names:DT};function kT(){this.R=this.a}function GT(n){var t=n.x,e=n.y,i=G(t-this.long0),s,r;Math.abs(e)<=K&&(s=this.x0+this.R*i,r=this.y0);var o=Fn(2*Math.abs(e/Math.PI));(Math.abs(i)<=K||Math.abs(Math.abs(e)-A)<=K)&&(s=this.x0,e>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*o):r=this.y0+Math.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(Math.PI/i-i/Math.PI),l=a*a,h=Math.sin(o),c=Math.cos(o),u=c/(h+c-1),g=u*u,d=u*(2/h-1),f=d*d,m=Math.PI*this.R*(a*(u-f)+Math.sqrt(l*(u-f)*(u-f)-(f+l)*(g-f)))/(f+l);i<0&&(m=-m),s=this.x0+m;var y=l+u;return m=Math.PI*this.R*(d*y-a*Math.sqrt((f+l)*(l+1)-y*y))/(f+l),e>=0?r=this.y0+m:r=this.y0-m,n.x=s,n.y=r,n}function zT(n){var t,e,i,s,r,o,a,l,h,c,u,g,d;return n.x-=this.x0,n.y-=this.y0,u=Math.PI*this.R,i=n.x/u,s=n.y/u,r=i*i+s*s,o=-Math.abs(s)*(1+r),a=o-2*s*s+i*i,l=-2*o+1+2*s*s+r*r,d=s*s/l+(2*a*a*a/l/l/l-9*o*a/l/l)/27,h=(o-a*a/3/l)/l,c=2*Math.sqrt(-h/3),u=3*d/h/c,Math.abs(u)>1&&(u>=0?u=1:u=-1),g=Math.acos(u)/3,n.y>=0?e=(-c*Math.cos(g+Math.PI/3)-a/3/l)*Math.PI:e=-(-c*Math.cos(g+Math.PI/3)-a/3/l)*Math.PI,Math.abs(i)<K?t=this.long0:t=G(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(i*i-s*s)+r*r))/2/i),n.x=t,n.y=e,n}var WT=["Van_der_Grinten_I","VanDerGrinten","vandg"];const BT={init:kT,forward:GT,inverse:zT,names:WT};function HT(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function XT(n){var t=n.x,e=n.y,i=Math.sin(n.y),s=Math.cos(n.y),r=G(t-this.long0),o,a,l,h,c,u,g,d,f,m,y,_,p,x,M,C,T,R,v,P,S,D,N;return this.sphere?Math.abs(this.sin_p12-1)<=K?(n.x=this.x0+this.a*(A-e)*Math.sin(r),n.y=this.y0-this.a*(A-e)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=K?(n.x=this.x0+this.a*(A+e)*Math.sin(r),n.y=this.y0+this.a*(A+e)*Math.cos(r),n):(R=this.sin_p12*i+this.cos_p12*s*Math.cos(r),C=Math.acos(R),T=C?C/Math.sin(C):1,n.x=this.x0+this.a*T*s*Math.sin(r),n.y=this.y0+this.a*T*(this.cos_p12*i-this.sin_p12*s*Math.cos(r)),n):(o=zo(this.es),a=Wo(this.es),l=Bo(this.es),h=Ho(this.es),Math.abs(this.sin_p12-1)<=K?(c=this.a*pe(o,a,l,h,A),u=this.a*pe(o,a,l,h,e),n.x=this.x0+(c-u)*Math.sin(r),n.y=this.y0-(c-u)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=K?(c=this.a*pe(o,a,l,h,A),u=this.a*pe(o,a,l,h,e),n.x=this.x0+(c+u)*Math.sin(r),n.y=this.y0+(c+u)*Math.cos(r),n):(g=i/s,d=_r(this.a,this.e,this.sin_p12),f=_r(this.a,this.e,i),m=Math.atan((1-this.es)*g+this.es*d*this.sin_p12/(f*s)),y=Math.atan2(Math.sin(r),this.cos_p12*Math.tan(m)-this.sin_p12*Math.cos(r)),y===0?v=Math.asin(this.cos_p12*Math.sin(m)-this.sin_p12*Math.cos(m)):Math.abs(Math.abs(y)-Math.PI)<=K?v=-Math.asin(this.cos_p12*Math.sin(m)-this.sin_p12*Math.cos(m)):v=Math.asin(Math.sin(r)*Math.cos(m)/Math.sin(y)),_=this.e*this.sin_p12/Math.sqrt(1-this.es),p=this.e*this.cos_p12*Math.cos(y)/Math.sqrt(1-this.es),x=_*p,M=p*p,P=v*v,S=P*v,D=S*v,N=D*v,C=d*v*(1-P*M*(1-M)/6+S/8*x*(1-2*M)+D/120*(M*(4-7*M)-3*_*_*(1-7*M))-N/48*x),n.x=this.x0+C*Math.sin(y),n.y=this.y0+C*Math.cos(y),n))}function UT(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,o,a,l,h,c,u,g,d,f,m,y,_,p,x,M,C,T,R,v;return this.sphere?(t=Math.sqrt(n.x*n.x+n.y*n.y),t>2*A*this.a?void 0:(e=t/this.a,i=Math.sin(e),s=Math.cos(e),r=this.long0,Math.abs(t)<=K?o=this.lat0:(o=Fn(s*this.sin_p12+n.y*i*this.cos_p12/t),a=Math.abs(this.lat0)-A,Math.abs(a)<=K?this.lat0>=0?r=G(this.long0+Math.atan2(n.x,-n.y)):r=G(this.long0-Math.atan2(-n.x,n.y)):r=G(this.long0+Math.atan2(n.x*i,t*this.cos_p12*s-n.y*this.sin_p12*i))),n.x=r,n.y=o,n)):(l=zo(this.es),h=Wo(this.es),c=Bo(this.es),u=Ho(this.es),Math.abs(this.sin_p12-1)<=K?(g=this.a*pe(l,h,c,u,A),t=Math.sqrt(n.x*n.x+n.y*n.y),d=g-t,o=ka(d/this.a,l,h,c,u),r=G(this.long0+Math.atan2(n.x,-1*n.y)),n.x=r,n.y=o,n):Math.abs(this.sin_p12+1)<=K?(g=this.a*pe(l,h,c,u,A),t=Math.sqrt(n.x*n.x+n.y*n.y),d=t-g,o=ka(d/this.a,l,h,c,u),r=G(this.long0+Math.atan2(n.x,n.y)),n.x=r,n.y=o,n):(t=Math.sqrt(n.x*n.x+n.y*n.y),y=Math.atan2(n.x,n.y),f=_r(this.a,this.e,this.sin_p12),_=Math.cos(y),p=this.e*this.cos_p12*_,x=-p*p/(1-this.es),M=3*this.es*(1-x)*this.sin_p12*this.cos_p12*_/(1-this.es),C=t/f,T=C-x*(1+x)*Math.pow(C,3)/6-M*(1+3*x)*Math.pow(C,4)/24,R=1-x*T*T/2-C*T*T*T/6,m=Math.asin(this.sin_p12*Math.cos(T)+this.cos_p12*Math.sin(T)*_),r=G(this.long0+Math.asin(Math.sin(y)*Math.sin(T)/Math.cos(m))),v=Math.sin(m),o=Math.atan2((v-this.es*R*this.sin_p12)*Math.tan(m),v*(1-this.es)),n.x=r,n.y=o,n))}var YT=["Azimuthal_Equidistant","aeqd"];const VT={init:HT,forward:XT,inverse:UT,names:YT};function jT(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function qT(n){var t,e,i,s,r,o,a,l,h=n.x,c=n.y;return i=G(h-this.long0),t=Math.sin(c),e=Math.cos(c),s=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*s,r=1,(o>0||Math.abs(o)<=K)&&(a=this.a*r*e*Math.sin(i),l=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)),n.x=a,n.y=l,n}function ZT(n){var t,e,i,s,r,o,a;return n.x-=this.x0,n.y-=this.y0,t=Math.sqrt(n.x*n.x+n.y*n.y),e=Fn(t/this.a),i=Math.sin(e),s=Math.cos(e),o=this.long0,Math.abs(t)<=K?(a=this.lat0,n.x=o,n.y=a,n):(a=Fn(s*this.sin_p14+n.y*i*this.cos_p14/t),r=Math.abs(this.lat0)-A,Math.abs(r)<=K?(this.lat0>=0?o=G(this.long0+Math.atan2(n.x,-n.y)):o=G(this.long0-Math.atan2(-n.x,n.y)),n.x=o,n.y=a,n):(o=G(this.long0+Math.atan2(n.x*i,t*this.cos_p14*s-n.y*this.sin_p14*i)),n.x=o,n.y=a,n))}var $T=["ortho"];const JT={init:jT,forward:qT,inverse:ZT,names:$T};var kt={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},Et={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function QT(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=A-Rt/2?this.face=kt.TOP:this.lat0<=-(A-Rt/2)?this.face=kt.BOTTOM:Math.abs(this.long0)<=Rt?this.face=kt.FRONT:Math.abs(this.long0)<=A+Rt?this.face=this.long0>0?kt.RIGHT:kt.LEFT:this.face=kt.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function tM(n){var t={x:0,y:0},e,i,s,r,o,a,l={value:0};if(n.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(n.y)):e=n.y,i=n.x,this.face===kt.TOP)r=A-e,i>=Rt&&i<=A+Rt?(l.value=Et.AREA_0,s=i-A):i>A+Rt||i<=-(A+Rt)?(l.value=Et.AREA_1,s=i>0?i-Ht:i+Ht):i>-(A+Rt)&&i<=-Rt?(l.value=Et.AREA_2,s=i+A):(l.value=Et.AREA_3,s=i);else if(this.face===kt.BOTTOM)r=A+e,i>=Rt&&i<=A+Rt?(l.value=Et.AREA_0,s=-i+A):i<Rt&&i>=-Rt?(l.value=Et.AREA_1,s=-i):i<-Rt&&i>=-(A+Rt)?(l.value=Et.AREA_2,s=-i-A):(l.value=Et.AREA_3,s=i>0?-i+Ht:-i-Ht);else{var h,c,u,g,d,f,m;this.face===kt.RIGHT?i=nr(i,+A):this.face===kt.BACK?i=nr(i,+Ht):this.face===kt.LEFT&&(i=nr(i,-A)),g=Math.sin(e),d=Math.cos(e),f=Math.sin(i),m=Math.cos(i),h=d*m,c=d*f,u=g,this.face===kt.FRONT?(r=Math.acos(h),s=ua(r,u,c,l)):this.face===kt.RIGHT?(r=Math.acos(c),s=ua(r,u,-h,l)):this.face===kt.BACK?(r=Math.acos(-h),s=ua(r,u,-c,l)):this.face===kt.LEFT?(r=Math.acos(-c),s=ua(r,u,h,l)):(r=s=0,l.value=Et.AREA_0)}return a=Math.atan(12/Ht*(s+Math.acos(Math.sin(s)*Math.cos(Rt))-A)),o=Math.sqrt((1-Math.cos(r))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(s))))),l.value===Et.AREA_1?a+=A:l.value===Et.AREA_2?a+=Ht:l.value===Et.AREA_3&&(a+=1.5*Ht),t.x=o*Math.cos(a),t.y=o*Math.sin(a),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,n.x=t.x,n.y=t.y,n}function eM(n){var t={lam:0,phi:0},e,i,s,r,o,a,l,h,c,u={value:0};if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,i=Math.atan(Math.sqrt(n.x*n.x+n.y*n.y)),e=Math.atan2(n.y,n.x),n.x>=0&&n.x>=Math.abs(n.y)?u.value=Et.AREA_0:n.y>=0&&n.y>=Math.abs(n.x)?(u.value=Et.AREA_1,e-=A):n.x<0&&-n.x>=Math.abs(n.y)?(u.value=Et.AREA_2,e=e<0?e+Ht:e-Ht):(u.value=Et.AREA_3,e+=A),c=Ht/12*Math.tan(e),o=Math.sin(c)/(Math.cos(c)-1/Math.sqrt(2)),a=Math.atan(o),s=Math.cos(e),r=Math.tan(i),l=1-s*s*r*r*(1-Math.cos(Math.atan(1/Math.cos(a)))),l<-1?l=-1:l>1&&(l=1),this.face===kt.TOP)h=Math.acos(l),t.phi=A-h,u.value===Et.AREA_0?t.lam=a+A:u.value===Et.AREA_1?t.lam=a<0?a+Ht:a-Ht:u.value===Et.AREA_2?t.lam=a-A:t.lam=a;else if(this.face===kt.BOTTOM)h=Math.acos(l),t.phi=h-A,u.value===Et.AREA_0?t.lam=-a+A:u.value===Et.AREA_1?t.lam=-a:u.value===Et.AREA_2?t.lam=-a-A:t.lam=a<0?-a-Ht:-a+Ht;else{var g,d,f;g=l,c=g*g,c>=1?f=0:f=Math.sqrt(1-c)*Math.sin(a),c+=f*f,c>=1?d=0:d=Math.sqrt(1-c),u.value===Et.AREA_1?(c=d,d=-f,f=c):u.value===Et.AREA_2?(d=-d,f=-f):u.value===Et.AREA_3&&(c=d,d=f,f=-c),this.face===kt.RIGHT?(c=g,g=-d,d=c):this.face===kt.BACK?(g=-g,d=-d):this.face===kt.LEFT&&(c=g,g=d,d=-c),t.phi=Math.acos(-f)-A,t.lam=Math.atan2(d,g),this.face===kt.RIGHT?t.lam=nr(t.lam,-A):this.face===kt.BACK?t.lam=nr(t.lam,-Ht):this.face===kt.LEFT&&(t.lam=nr(t.lam,+A))}if(this.es!==0){var m,y,_;m=t.phi<0?1:0,y=Math.tan(t.phi),_=this.b/Math.sqrt(y*y+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-_*_)/(this.one_minus_f*_)),m&&(t.phi=-t.phi)}return t.lam+=this.long0,n.x=t.lam,n.y=t.phi,n}function ua(n,t,e,i){var s;return n<K?(i.value=Et.AREA_0,s=0):(s=Math.atan2(t,e),Math.abs(s)<=Rt?i.value=Et.AREA_0:s>Rt&&s<=A+Rt?(i.value=Et.AREA_1,s-=A):s>A+Rt||s<=-(A+Rt)?(i.value=Et.AREA_2,s=s>=0?s-Ht:s+Ht):(i.value=Et.AREA_3,s+=A)),s}function nr(n,t){var e=n+t;return e<-Ht?e+=wo:e>+Ht&&(e-=wo),e}var iM=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const nM={init:QT,forward:tM,inverse:eM,names:iM};var Uh=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Jr=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],Jf=.8487,Qf=1.3523,t0=Ni/5,sM=1/t0,js=18,Ga=function(n,t){return n[0]+t*(n[1]+t*(n[2]+t*n[3]))},rM=function(n,t){return n[1]+t*(2*n[2]+t*3*n[3])};function oM(n,t,e,i){for(var s=t;i;--i){var r=n(s);if(s-=r,Math.abs(r)<e)break}return s}function aM(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function lM(n){var t=G(n.x-this.long0),e=Math.abs(n.y),i=Math.floor(e*t0);i<0?i=0:i>=js&&(i=js-1),e=Ni*(e-sM*i);var s={x:Ga(Uh[i],e)*t,y:Ga(Jr[i],e)};return n.y<0&&(s.y=-s.y),s.x=s.x*this.a*Jf+this.x0,s.y=s.y*this.a*Qf+this.y0,s}function hM(n){var t={x:(n.x-this.x0)/(this.a*Jf),y:Math.abs(n.y-this.y0)/(this.a*Qf)};if(t.y>=1)t.x/=Uh[js][0],t.y=n.y<0?-A:A;else{var e=Math.floor(t.y*js);for(e<0?e=0:e>=js&&(e=js-1);;)if(Jr[e][0]>t.y)--e;else if(Jr[e+1][0]<=t.y)++e;else break;var i=Jr[e],s=5*(t.y-i[0])/(Jr[e+1][0]-i[0]);s=oM(function(r){return(Ga(i,r)-t.y)/rM(i,r)},s,K,100),t.x/=Ga(Uh[e],s),t.y=(5*e+s)*te,n.y<0&&(t.y=-t.y)}return t.x=G(t.x+this.long0),t}var cM=["Robinson","robin"];const uM={init:aM,forward:lM,inverse:hM,names:cM};function dM(){this.name="geocent"}function gM(n){var t=Gf(n,this.es,this.a);return t}function fM(n){var t=zf(n,this.es,this.a,this.b);return t}var mM=["Geocentric","geocentric","geocent","Geocent"];const yM={init:dM,forward:gM,inverse:fM,names:mM};var oe={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Ur={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function wM(){if(Object.keys(Ur).forEach((function(e){if(typeof this[e]>"u")this[e]=Ur[e].def;else{if(Ur[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);Ur[e].num&&(this[e]=parseFloat(this[e]))}Ur[e].degrees&&(this[e]=this[e]*te)}).bind(this)),Math.abs(Math.abs(this.lat0)-A)<K?this.mode=this.lat0<0?oe.S_POLE:oe.N_POLE:Math.abs(this.lat0)<K?this.mode=oe.EQUIT:(this.mode=oe.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var n=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(n),this.sw=Math.sin(n)}function _M(n){n.x-=this.long0;var t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s,r;switch(this.mode){case oe.OBLIQ:r=this.sinph0*t+this.cosph0*e*i;break;case oe.EQUIT:r=e*i;break;case oe.S_POLE:r=-t;break;case oe.N_POLE:r=t;break}switch(r=this.pn1/(this.p-r),s=r*e*Math.sin(n.x),this.mode){case oe.OBLIQ:r*=this.cosph0*t-this.sinph0*e*i;break;case oe.EQUIT:r*=t;break;case oe.N_POLE:r*=-(e*i);break;case oe.S_POLE:r*=e*i;break}var o,a;return o=r*this.cg+s*this.sg,a=1/(o*this.sw*this.h1+this.cw),s=(s*this.cg-r*this.sg)*this.cw*a,r=o*a,n.x=s*this.a,n.y=r*this.a,n}function pM(n){n.x/=this.a,n.y/=this.a;var t={x:n.x,y:n.y},e,i,s;s=1/(this.pn1-n.y*this.sw),e=this.pn1*n.x*s,i=this.pn1*n.y*this.cw*s,n.x=e*this.cg+i*this.sg,n.y=i*this.cg-e*this.sg;var r=ei(n.x,n.y);if(Math.abs(r)<K)t.x=0,t.y=n.y;else{var o,a;switch(a=1-r*r*this.pfact,a=(this.p-Math.sqrt(a))/(this.pn1/r+r/this.pn1),o=Math.sqrt(1-a*a),this.mode){case oe.OBLIQ:t.y=Math.asin(o*this.sinph0+n.y*a*this.cosph0/r),n.y=(o-this.sinph0*Math.sin(t.y))*r,n.x*=a*this.cosph0;break;case oe.EQUIT:t.y=Math.asin(n.y*a/r),n.y=o*r,n.x*=a;break;case oe.N_POLE:t.y=Math.asin(o),n.y=-n.y;break;case oe.S_POLE:t.y=-Math.asin(o);break}t.x=Math.atan2(n.x,n.y)}return n.x=t.x+this.long0,n.y=t.y,n}var xM=["Tilted_Perspective","tpers"];const TM={init:wM,forward:_M,inverse:pM,names:xM};function MM(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var n=1-this.es,t=1/n;this.radius_p=Math.sqrt(n),this.radius_p2=n,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function CM(n){var t=n.x,e=n.y,i,s,r,o;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var a=this.radius_p/ei(this.radius_p*Math.cos(e),Math.sin(e));if(s=a*Math.cos(t)*Math.cos(e),r=a*Math.sin(t)*Math.cos(e),o=a*Math.sin(e),(this.radius_g-s)*s-r*r-o*o*this.radius_p_inv2<0)return n.x=Number.NaN,n.y=Number.NaN,n;i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/ei(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(o/ei(r,i)))}else this.shape==="sphere"&&(i=Math.cos(e),s=Math.cos(t)*i,r=Math.sin(t)*i,o=Math.sin(e),i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/ei(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(o/ei(r,i))));return n.x=n.x*this.a,n.y=n.y*this.a,n}function RM(n){var t=-1,e=0,i=0,s,r,o,a;if(n.x=n.x/this.a,n.y=n.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*ei(1,i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*ei(1,e));var l=i/this.radius_p;if(s=e*e+l*l+t*t,r=2*this.radius_g*t,o=r*r-4*s*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-r-Math.sqrt(o))/(2*s),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t),n.y=Math.atan(this.radius_p_inv2*Math.tan(n.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*Math.sqrt(1+i*i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*Math.sqrt(1+e*e)),s=e*e+i*i+t*t,r=2*this.radius_g*t,o=r*r-4*s*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-r-Math.sqrt(o))/(2*s),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t)}return n.x=n.x+this.long0,n}var EM=["Geostationary Satellite View","Geostationary_Satellite","geos"];const vM={init:MM,forward:CM,inverse:RM,names:EM};function bM(n){n.Proj.projections.add(xa),n.Proj.projections.add(Ta),n.Proj.projections.add(Pp),n.Proj.projections.add(Hp),n.Proj.projections.add(qp),n.Proj.projections.add(tx),n.Proj.projections.add(ox),n.Proj.projections.add(ux),n.Proj.projections.add(yx),n.Proj.projections.add(Tx),n.Proj.projections.add(kx),n.Proj.projections.add(Xx),n.Proj.projections.add(qx),n.Proj.projections.add(eT),n.Proj.projections.add(oT),n.Proj.projections.add(uT),n.Proj.projections.add(yT),n.Proj.projections.add(TT),n.Proj.projections.add(bT),n.Proj.projections.add(AT),n.Proj.projections.add(FT),n.Proj.projections.add(BT),n.Proj.projections.add(VT),n.Proj.projections.add(JT),n.Proj.projections.add(nM),n.Proj.projections.add(uM),n.Proj.projections.add(yM),n.Proj.projections.add(TM),n.Proj.projections.add(vM)}xe.defaultDatum="WGS84";xe.Proj=Ki;xe.WGS84=new xe.Proj("WGS84");xe.Point=wr;xe.toPoint=Wf;xe.defs=ye;xe.nadgrid=D_;xe.transform=Fa;xe.mgrs=J_;xe.version="__VERSION__";bM(xe);class Xo extends xi{constructor(t){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),t)if(typeof t.getSimplifiedGeometry=="function"){const e=t;this.setGeometry(e)}else{const e=t;this.setProperties(e)}}clone(){const t=new Xo(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());const e=this.getGeometry();e&&t.setGeometry(e.clone());const i=this.getStyle();return i&&t.setStyle(i),t}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&(Nt(this.geometryChangeKey_),this.geometryChangeKey_=null);const t=this.getGeometry();t&&(this.geometryChangeKey_=ot(t,$.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(t){this.set(this.geometryName_,t)}setStyle(t){this.style_=t,this.styleFunction_=t?IM(t):void 0,this.changed()}setId(t){this.id_=t,this.changed()}setGeometryName(t){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=t,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}function IM(n){if(typeof n=="function")return n;let t;return Array.isArray(n)?t=n:(yt(typeof n.getZIndex=="function","Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),t=[n]),function(){return t}}let LM=class Yh extends of{constructor(t){super(),this.geometries_=t||null,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(Nt),this.changeEventsKeys_.length=0}listenGeometriesChange_(){if(this.geometries_)for(let t=0,e=this.geometries_.length;t<e;++t)this.changeEventsKeys_.push(ot(this.geometries_[t],$.CHANGE,this.changed,this))}clone(){const t=new Yh(null);return t.setGeometries(this.geometries_),t.applyProperties(this),t}closestPointXY(t,e,i,s){if(s<Ts(this.getExtent(),t,e))return s;const r=this.geometries_;for(let o=0,a=r.length;o<a;++o)s=r[o].closestPointXY(t,e,i,s);return s}containsXY(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)if(i[s].containsXY(t,e))return!0;return!1}computeExtent(t){br(t);const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)Sg(t,e[i].getExtent());return t}getGeometries(){return kd(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let t=[];const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)e[i].getType()===this.getType()?t=t.concat(e[i].getGeometriesArrayRecursive()):t.push(e[i]);return t}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;const e=[],i=this.geometries_;let s=!1;for(let r=0,o=i.length;r<o;++r){const a=i[r],l=a.getSimplifiedGeometry(t);e.push(l),l!==a&&(s=!0)}if(s){const r=new Yh(null);return r.setGeometriesArray(e),r}return this.simplifiedGeometryMaxMinSquaredTolerance=t,this}getType(){return"GeometryCollection"}intersectsExtent(t){const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)if(e[i].intersectsExtent(t))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].rotate(t,e);this.changed()}scale(t,e,i){i||(i=pi(this.getExtent()));const s=this.geometries_;for(let r=0,o=s.length;r<o;++r)s[r].scale(t,e,i);this.changed()}setGeometries(t){this.setGeometriesArray(kd(t))}setGeometriesArray(t){this.unlistenGeometriesChange_(),this.geometries_=t,this.listenGeometriesChange_(),this.changed()}applyTransform(t){const e=this.geometries_;for(let i=0,s=e.length;i<s;++i)e[i].applyTransform(t);this.changed()}translate(t,e){const i=this.geometries_;for(let s=0,r=i.length;s<r;++s)i[s].translate(t,e);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}};function kd(n){const t=[];for(let e=0,i=n.length;e<i;++e)t.push(n[e].clone());return t}function za(n,t,e,i,s,r,o){let a,l;const h=(e-t)/i;if(h===1)a=t;else if(h===2)a=t,l=s;else if(h!==0){let c=n[t],u=n[t+1],g=0;const d=[0];for(let y=t+i;y<e;y+=i){const _=n[y],p=n[y+1];g+=Math.sqrt((_-c)*(_-c)+(p-u)*(p-u)),d.push(g),c=_,u=p}const f=s*g,m=_m(d,f);m<0?(l=(f-d[-m-2])/(d[-m-1]-d[-m-2]),a=t+(-m-2)*i):a=t+m*i}o=o>1?o:2,r=r||new Array(o);for(let c=0;c<o;++c)r[c]=a===void 0?NaN:l===void 0?n[a+c]:We(n[a+c],n[a+i+c],l);return r}function Vh(n,t,e,i,s,r){if(e==t)return null;let o;if(s<n[t+i-1])return r?(o=n.slice(t,t+i),o[i-1]=s,o):null;if(n[e-1]<s)return r?(o=n.slice(e-i,e),o[i-1]=s,o):null;if(s==n[t+i-1])return n.slice(t,t+i);let a=t/i,l=e/i;for(;a<l;){const g=a+l>>1;s<n[(g+1)*i-1]?l=g:a=g+1}const h=n[a*i-1];if(s==h)return n.slice((a-1)*i,(a-1)*i+i);const c=n[(a+1)*i-1],u=(s-h)/(c-h);o=[];for(let g=0;g<i-1;++g)o.push(We(n[(a-1)*i+g],n[a*i+g],u));return o.push(s),o}function SM(n,t,e,i,s,r,o){if(o)return Vh(n,t,e[e.length-1],i,s,r);let a;if(s<n[i-1])return r?(a=n.slice(0,i),a[i-1]=s,a):null;if(n[n.length-1]<s)return r?(a=n.slice(n.length-i),a[i-1]=s,a):null;for(let l=0,h=e.length;l<h;++l){const c=e[l];if(t!=c){if(s<n[t+i-1])return null;if(s<=n[c-1])return Vh(n,t,c,i,s,!1);t=c}}return null}function e0(n,t,e,i){let s=n[t],r=n[t+1],o=0;for(let a=t+i;a<e;a+=i){const l=n[a],h=n[a+1];o+=Math.sqrt((l-s)*(l-s)+(h-r)*(h-r)),s=l,r=h}return o}let jh=class qh extends Cs{constructor(t,e){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,e!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendCoordinate(t){Oi(this.flatCoordinates,t),this.changed()}clone(){const t=new qh(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<Ts(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Fc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Gc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,i,s))}forEachSegment(t){return gf(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,e){return this.layout!="XYM"&&this.layout!="XYZM"?null:(e=e!==void 0?e:!1,Vh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e))}getCoordinates(){return vn(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,e){return za(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,this.stride)}getLength(){return e0(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){const e=[];return e.length=ll(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new qh(e,"XY")}getType(){return"LineString"}intersectsExtent(t){return hl(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=al(this.flatCoordinates,0,t,this.stride),this.changed()}},NM=class Zh extends Cs{constructor(t,e,i){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(t[0]))this.setCoordinates(t,e);else if(e!==void 0&&i)this.setFlatCoordinates(e,t),this.ends_=i;else{const s=t,r=[],o=[];for(let l=0,h=s.length;l<h;++l){const c=s[l];Oi(r,c.getFlatCoordinates()),o.push(r.length)}const a=s.length===0?this.getLayout():s[0].getLayout();this.setFlatCoordinates(a,r),this.ends_=o}}appendLineString(t){Oi(this.flatCoordinates,t.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new Zh(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,s){return s<Ts(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(kc(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),zc(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,i,s))}getCoordinateAtM(t,e,i){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(e=e!==void 0?e:!1,i=i!==void 0?i:!1,SM(this.flatCoordinates,0,this.ends_,this.stride,t,e,i))}getCoordinates(){return uo(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(t){return t<0||this.ends_.length<=t?null:new jh(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLineStrings(){const t=this.flatCoordinates,e=this.ends_,i=this.layout,s=[];let r=0;for(let o=0,a=e.length;o<a;++o){const l=e[o],h=new jh(t.slice(r,l),i);s.push(h),r=l}return s}getFlatMidpoints(){const t=[],e=this.flatCoordinates;let i=0;const s=this.ends_,r=this.stride;for(let o=0,a=s.length;o<a;++o){const l=s[o],h=za(e,i,l,r,.5);Oi(t,h),i=l}return t}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=lf(this.flatCoordinates,0,this.ends_,this.stride,t,e,0,i),new Zh(e,"XY",i)}getType(){return"MultiLineString"}intersectsExtent(t){return tw(this.flatCoordinates,0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const i=Do(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}},i0=class n0 extends Cs{constructor(t,e){super(),e&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendPoint(t){Oi(this.flatCoordinates,t.getFlatCoordinates()),this.changed()}clone(){const t=new n0(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,s){if(s<Ts(this.getExtent(),t,e))return s;const r=this.flatCoordinates,o=this.stride;for(let a=0,l=r.length;a<l;a+=o){const h=ns(t,e,r[a],r[a+1]);if(h<s){s=h;for(let c=0;c<o;++c)i[c]=r[a+c];i.length=o}}return s}getCoordinates(){return vn(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(t){const e=this.flatCoordinates.length/this.stride;return t<0||e<=t?null:new La(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)}getPoints(){const t=this.flatCoordinates,e=this.layout,i=this.stride,s=[];for(let r=0,o=t.length;r<o;r+=i){const a=new La(t.slice(r,r+i),e);s.push(a)}return s}getType(){return"MultiPoint"}intersectsExtent(t){const e=this.flatCoordinates,i=this.stride;for(let s=0,r=e.length;s<r;s+=i){const o=e[s],a=e[s+1];if(yc(t,o,a))return!0}return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=al(this.flatCoordinates,0,t,this.stride),this.changed()}};function s0(n,t,e,i){const s=[];let r=Ue();for(let o=0,a=e.length;o<a;++o){const l=e[o];r=wc(n,t,l[0],i),s.push((r[0]+r[2])/2,(r[1]+r[3])/2),t=l[l.length-1]}return s}let AM=class $h extends Cs{constructor(t,e,i){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(t[0])){const s=t,r=[],o=[];for(let a=0,l=s.length;a<l;++a){const h=s[a],c=r.length,u=h.getEnds();for(let g=0,d=u.length;g<d;++g)u[g]+=c;Oi(r,h.getFlatCoordinates()),o.push(u)}e=s.length===0?this.getLayout():s[0].getLayout(),t=r,i=o}e!==void 0&&i?(this.setFlatCoordinates(e,t),this.endss_=i):this.setCoordinates(t,e)}appendPolygon(t){let e;if(!this.flatCoordinates)this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();else{const i=this.flatCoordinates.length;Oi(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(let s=0,r=e.length;s<r;++s)e[s]+=i}this.endss_.push(e),this.changed()}clone(){const t=this.endss_.length,e=new Array(t);for(let s=0;s<t;++s)e[s]=this.endss_[s].slice();const i=new $h(this.flatCoordinates.slice(),this.layout,e);return i.applyProperties(this),i}closestPointXY(t,e,i,s){return s<Ts(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Yy(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Vy(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,s))}containsXY(t,e){return Qy(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)}getArea(){return $y(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let e;return t!==void 0?(e=this.getOrientedFlatCoordinates().slice(),Dh(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,Ph(e,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const t=s0(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=df(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new i0(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;yf(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=Dh(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=Zy(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,i),new $h(e,"XY",i)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let e;if(t===0)e=0;else{const r=this.endss_[t-1];e=r[r.length-1]}const i=this.endss_[t].slice(),s=i[i.length-1];if(e!==0)for(let r=0,o=i.length;r<o;++r)i[r]-=e;return new fr(this.flatCoordinates.slice(e,s),this.layout,i)}getPolygons(){const t=this.layout,e=this.flatCoordinates,i=this.endss_,s=[];let r=0;for(let o=0,a=i.length;o<a;++o){const l=i[o].slice(),h=l[l.length-1];if(r!==0)for(let u=0,g=l.length;u<g;++u)l[u]-=r;const c=new fr(e.slice(r,h),t,l);s.push(c),r=h}return s}getType(){return"MultiPolygon"}intersectsExtent(t){return ew(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);const i=af(this.flatCoordinates,0,t,this.stride,this.endss_);if(i.length===0)this.flatCoordinates.length=0;else{const s=i[i.length-1];this.flatCoordinates.length=s.length===0?0:s[s.length-1]}this.changed()}};const Gd=yi();class Ie{constructor(t,e,i,s,r,o){this.styleFunction,this.extent_,this.id_=o,this.type_=t,this.flatCoordinates_=e,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=i,this.properties_=r,this.squaredTolerance_,this.stride_=s,this.simplifiedGeometry_}get(t){return this.properties_[t]}getExtent(){return this.extent_||(this.extent_=this.type_==="Point"?Lg(this.flatCoordinates_):wc(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){const t=pi(this.getExtent());this.flatInteriorPoints_=Hc(this.flatCoordinates_,0,this.ends_,2,t,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){const t=nw(this.flatCoordinates_,this.ends_),e=s0(this.flatCoordinates_,0,t,2);this.flatInteriorPoints_=df(this.flatCoordinates_,0,t,2,e)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||(this.flatMidpoints_=za(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];const t=this.flatCoordinates_;let e=0;const i=this.ends_;for(let s=0,r=i.length;s<r;++s){const o=i[s],a=za(t,e,o,2,.5);Oi(this.flatMidpoints_,a),e=o}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(t){return this}simplifyTransformed(t,e){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return this.stride_}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(t){t=at(t);const e=t.getExtent(),i=t.getWorldExtent();if(e&&i){const s=he(i)/he(e);hn(Gd,i[0],i[3],s,-s,0,0,0),An(this.flatCoordinates_,0,this.flatCoordinates_.length,2,Gd,this.flatCoordinates_)}}applyTransform(t){t(this.flatCoordinates_,this.flatCoordinates_,this.stride_)}clone(){return new Ie(this.type_,this.flatCoordinates_.slice(),this.ends_.slice(),this.stride_,Object.assign({},this.properties_),this.id_)}getEnds(){return this.ends_}enableSimplifyTransformed(){return this.simplifyTransformed=pg((t,e)=>{if(t===this.squaredTolerance_)return this.simplifiedGeometry_;this.simplifiedGeometry_=this.clone(),e&&this.simplifiedGeometry_.applyTransform(e);const i=this.simplifiedGeometry_.getFlatCoordinates();let s;switch(this.type_){case"LineString":i.length=ll(i,0,this.simplifiedGeometry_.flatCoordinates_.length,this.simplifiedGeometry_.stride_,t,i,0),s=[i.length];break;case"MultiLineString":s=[],i.length=lf(i,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,t,i,0,s);break;case"Polygon":s=[],i.length=Wc(i,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,Math.sqrt(t),i,0,s);break}return s&&(this.simplifiedGeometry_=new Ie(this.type_,i,s,2,this.properties_,this.id_)),this.squaredTolerance_=t,this.simplifiedGeometry_}),this}}Ie.prototype.getFlatCoordinates=Ie.prototype.getOrientedFlatCoordinates;class OM{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=Xo,this.supportedMediaTypes=null}getReadOptions(t,e){if(e){let i=e.dataProjection?at(e.dataProjection):this.readProjection(t);e.extent&&i&&i.getUnits()==="tile-pixels"&&(i=at(i),i.setWorldExtent(e.extent)),e={dataProjection:i,featureProjection:e.featureProjection}}return this.adaptOptions(e)}adaptOptions(t){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},t)}getType(){return q()}readFeature(t,e){return q()}readFeatures(t,e){return q()}readGeometry(t,e){return q()}readProjection(t){return q()}writeFeature(t,e){return q()}writeFeatures(t,e){return q()}writeGeometry(t,e){return q()}}function eu(n,t,e){const i=e?at(e.featureProjection):null,s=e?at(e.dataProjection):null;let r=n;if(i&&s&&!Qe(i,s)){t&&(r=n.clone());const o=t?i:s,a=t?s:i;o.getUnits()==="tile-pixels"?r.transform(o,a):r.applyTransform(gr(o,a))}if(t&&e&&e.decimals!==void 0){const o=Math.pow(10,e.decimals),a=function(l){for(let h=0,c=l.length;h<c;++h)l[h]=Math.round(l[h]*o)/o;return l};r===n&&(r=n.clone()),r.applyTransform(a)}return r}function CE(n,t){const e=t?at(t.featureProjection):null,i=t?at(t.dataProjection):null;return e&&i&&!Qe(e,i)?Cc(n,i,e):n}const PM={Point:La,LineString:jh,Polygon:fr,MultiPoint:i0,MultiLineString:NM,MultiPolygon:AM};function KM(n,t,e){return Array.isArray(t[0])?(yf(n,0,t,e)||(n=n.slice(),Dh(n,0,t,e)),n):(Uc(n,0,t,e)||(n=n.slice(),Sa(n,0,t,e)),n)}function r0(n,t){const e=n.geometry;if(!e)return[];if(Array.isArray(e))return e.map(r=>r0({...n,geometry:r})).flat();const i=e.type==="MultiPolygon"?"Polygon":e.type;if(i==="GeometryCollection"||i==="Circle")throw new Error("Unsupported geometry type: "+i);const s=e.layout.length;return eu(new Ie(i,i==="Polygon"?KM(e.flatCoordinates,e.ends,s):e.flatCoordinates,e.ends?.flat(),s,n.properties||{},n.id).enableSimplifyTransformed(),!1,t)}function iu(n,t){if(!n)return null;if(Array.isArray(n)){const i=n.map(s=>iu(s,t));return new LM(i)}const e=PM[n.type];return eu(new e(n.flatCoordinates,n.layout,n.ends),!1,t)}class DM extends OM{constructor(){super()}getType(){return"json"}readFeature(t,e){return this.readFeatureFromObject(da(t),this.getReadOptions(t,e))}readFeatures(t,e){return this.readFeaturesFromObject(da(t),this.getReadOptions(t,e))}readFeatureFromObject(t,e){return q()}readFeaturesFromObject(t,e){return q()}readGeometry(t,e){return this.readGeometryFromObject(da(t),this.getReadOptions(t,e))}readGeometryFromObject(t,e){return q()}readProjection(t){return this.readProjectionFromObject(da(t))}readProjectionFromObject(t){return q()}writeFeature(t,e){return JSON.stringify(this.writeFeatureObject(t,e))}writeFeatureObject(t,e){return q()}writeFeatures(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))}writeFeaturesObject(t,e){return q()}writeGeometry(t,e){return JSON.stringify(this.writeGeometryObject(t,e))}writeGeometryObject(t,e){return q()}}function da(n){if(typeof n=="string"){const t=JSON.parse(n);return t||null}return n!==null?n:null}class gl extends DM{constructor(t){t=t||{},super(),this.dataProjection=at(t.dataProjection?t.dataProjection:"EPSG:4326"),t.featureProjection&&(this.defaultFeatureProjection=at(t.featureProjection)),t.featureClass&&(this.featureClass=t.featureClass),this.geometryName_=t.geometryName,this.extractGeometryName_=t.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(t,e){let i=null;t.type==="Feature"?i=t:i={type:"Feature",geometry:t,properties:null};const s=nu(i.geometry);if(this.featureClass===Ie)return r0({geometry:s,id:i.id,properties:i.properties},e);const r=new Xo;return this.geometryName_?r.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in i!==void 0&&r.setGeometryName(i.geometry_name),r.setGeometry(iu(s,e)),"id"in i&&r.setId(i.id),i.properties&&r.setProperties(i.properties,!0),r}readFeaturesFromObject(t,e){const i=t;let s=null;if(i.type==="FeatureCollection"){const r=t;s=[];const o=r.features;for(let a=0,l=o.length;a<l;++a){const h=this.readFeatureFromObject(o[a],e);h&&s.push(h)}}else s=[this.readFeatureFromObject(t,e)];return s.flat()}readGeometryFromObject(t,e){return FM(t,e)}readProjectionFromObject(t){const e=t.crs;let i;if(e)if(e.type=="name")i=at(e.properties.name);else if(e.type==="EPSG")i=at("EPSG:"+e.properties.code);else throw new Error("Unknown SRS type");else i=this.dataProjection;return i}writeFeatureObject(t,e){e=this.adaptOptions(e);const i={type:"Feature",geometry:null,properties:null},s=t.getId();if(s!==void 0&&(i.id=s),!t.hasProperties())return i;const r=t.getProperties(),o=t.getGeometry();return o&&(i.geometry=Jh(o,e),delete r[t.getGeometryName()]),us(r)||(i.properties=r),i}writeFeaturesObject(t,e){e=this.adaptOptions(e);const i=[];for(let s=0,r=t.length;s<r;++s)i.push(this.writeFeatureObject(t[s],e));return{type:"FeatureCollection",features:i}}writeGeometryObject(t,e){return Jh(t,this.adaptOptions(e))}}function nu(n,t){if(!n)return null;let e;switch(n.type){case"Point":{e=GM(n);break}case"LineString":{e=zM(n);break}case"Polygon":{e=XM(n);break}case"MultiPoint":{e=BM(n);break}case"MultiLineString":{e=WM(n);break}case"MultiPolygon":{e=HM(n);break}case"GeometryCollection":{e=kM(n);break}default:throw new Error("Unsupported GeoJSON type: "+n.type)}return e}function FM(n,t){const e=nu(n);return iu(e,t)}function kM(n,t){return n.geometries.map(function(i){return nu(i)})}function GM(n){const t=n.coordinates;return{type:"Point",flatCoordinates:t,layout:Rs(t.length)}}function zM(n){const t=n.coordinates,e=t.flat();return{type:"LineString",flatCoordinates:e,ends:[e.length],layout:Rs(t[0].length)}}function WM(n){const t=n.coordinates,e=t[0][0].length,i=[],s=Do(i,0,t,e);return{type:"MultiLineString",flatCoordinates:i,ends:s,layout:Rs(e)}}function BM(n){const t=n.coordinates;return{type:"MultiPoint",flatCoordinates:t.flat(),layout:Rs(t[0].length)}}function HM(n){const t=n.coordinates,e=[],i=t[0][0][0].length,s=af(e,0,t,i);return{type:"MultiPolygon",flatCoordinates:e,ends:s,layout:Rs(i)}}function XM(n){const t=n.coordinates,e=[],i=t[0][0].length,s=Do(e,0,t,i);return{type:"Polygon",flatCoordinates:e,ends:s,layout:Rs(i)}}function Jh(n,t){n=eu(n,!0,t);const e=n.getType();let i;switch(e){case"Point":{i=ZM(n);break}case"LineString":{i=YM(n);break}case"Polygon":{i=$M(n,t);break}case"MultiPoint":{i=jM(n);break}case"MultiLineString":{i=VM(n);break}case"MultiPolygon":{i=qM(n,t);break}case"GeometryCollection":{i=UM(n,t);break}case"Circle":{i={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+e)}return i}function UM(n,t){return t=Object.assign({},t),delete t.featureProjection,{type:"GeometryCollection",geometries:n.getGeometriesArray().map(function(i){return Jh(i,t)})}}function YM(n,t){return{type:"LineString",coordinates:n.getCoordinates()}}function VM(n,t){return{type:"MultiLineString",coordinates:n.getCoordinates()}}function jM(n,t){return{type:"MultiPoint",coordinates:n.getCoordinates()}}function qM(n,t){let e;return t&&(e=t.rightHanded),{type:"MultiPolygon",coordinates:n.getCoordinates(e)}}function ZM(n,t){return{type:"Point",coordinates:n.getCoordinates()}}function $M(n,t){let e;return t&&(e=t.rightHanded),{type:"Polygon",coordinates:n.getCoordinates(e)}}function JM(n,t){return a0().createElementNS(n,t)}function su(n,t){return o0(n,t,[]).join("")}function o0(n,t,e){if(n.nodeType==Node.CDATA_SECTION_NODE||n.nodeType==Node.TEXT_NODE)e.push(n.nodeValue);else{let i;for(i=n.firstChild;i;i=i.nextSibling)o0(i,t,e)}return e}function QM(n){return"documentElement"in n}function RE(n,t,e){return n.getAttributeNS(t,e)||""}function t1(n){return new DOMParser().parseFromString(n,"application/xml")}function Qh(n,t){return(function(e,i){const s=n.call(t!==void 0?t:this,e,i);s!==void 0&&i[i.length-1].push(s)})}function EE(n,t){return(function(e,i){const s=n.call(t!==void 0?t:this,e,i);s!==void 0&&(i[i.length-1]=s)})}function He(n,t,e){return(function(i,s){const r=n.call(this,i,s);if(r!==void 0){const o=s[s.length-1],a=i.localName;let l;a in o?l=o[a]:(l=[],o[a]=l),l.push(r)}})}function Y(n,t,e){return(function(i,s){const r=n.call(this,i,s);if(r!==void 0){const o=s[s.length-1],a=i.localName;o[a]=r}})}function vE(n,t){return function(e,i,s){n.call(t!==void 0?t:this,e,i,s),s[s.length-1].node.appendChild(e)}}function e1(n,t){return(function(e,i,s){const o=i[i.length-1].node;let a=n;a===void 0&&(a=s);const l=t!==void 0?t:o.namespaceURI;return JM(l,a)})}const bE=e1();function It(n,t,e){e=e!==void 0?e:{};let i,s;for(i=0,s=n.length;i<s;++i)e[n[i]]=t;return e}function i1(n,t,e,i){let s;for(s=t.firstElementChild;s;s=s.nextElementSibling){const r=n[s.namespaceURI];if(r!==void 0){const o=r[s.localName];o!==void 0&&o.call(i,s,e)}}}function Kt(n,t,e,i,s){return i.push(n),i1(t,e,i,s),i.pop()}function n1(n,t,e,i,s,r){const o=(s!==void 0?s:e).length;let a,l;for(let h=0;h<o;++h)a=e[h],a!==void 0&&(l=t.call(r!==void 0?r:this,a,i,s!==void 0?s[h]:void 0),l!==void 0&&n[l.namespaceURI][l.localName].call(r,l,a,i))}function IE(n,t,e,i,s,r,o){return s.push(n),n1(t,e,i,s,r,o),s.pop()}let eh;function LE(){return eh===void 0&&typeof XMLSerializer<"u"&&(eh=new XMLSerializer),eh}let ih;function a0(){return ih===void 0&&typeof document<"u"&&(ih=document.implementation.createDocument("","",null)),ih}class l0{read(t){if(!t)return null;if(typeof t=="string"){const e=t1(t);return this.readFromDocument(e)}return QM(t)?this.readFromDocument(t):this.readFromNode(t)}readFromDocument(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readFromNode(e);return null}readFromNode(t){q()}}const s1="http://www.w3.org/1999/xlink";function ru(n){return n.getAttributeNS(s1,"href")}function r1(n){const t=su(n,!1);return o1(t)}function o1(n){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(n);if(t)return parseFloat(t[1])}function bn(n){const t=su(n,!1);return a1(t)}function a1(n){const t=/^\s*(\d+)\s*$/.exec(n);if(t)return parseInt(t[1],10)}function gt(n){return su(n,!1).trim()}function SE(n,t){n.appendChild(a0().createTextNode(t))}const De=[null,"http://www.opengis.net/ows/1.1"],l1=It(De,{ServiceIdentification:Y(O1),ServiceProvider:Y(K1),OperationsMetadata:Y(N1)});class h1 extends l0{constructor(){super()}readFromNode(t){const e=Kt({},l1,t,[]);return e||null}}const c1=It(De,{DeliveryPoint:Y(gt),City:Y(gt),AdministrativeArea:Y(gt),PostalCode:Y(gt),Country:Y(gt),ElectronicMailAddress:Y(gt)}),u1=It(De,{Value:He(D1)}),d1=It(De,{AllowedValues:Y(R1)}),g1=It(De,{Phone:Y(A1),Address:Y(C1)}),f1=It(De,{HTTP:Y(L1)}),m1=It(De,{Get:He(I1),Post:void 0}),y1=It(De,{DCP:Y(b1)}),w1=It(De,{Operation:S1}),_1=It(De,{Voice:Y(gt),Facsimile:Y(gt)}),p1=It(De,{Constraint:He(E1)}),x1=It(De,{IndividualName:Y(gt),PositionName:Y(gt),ContactInfo:Y(v1)}),T1=It(De,{Abstract:Y(gt),AccessConstraints:Y(gt),Fees:Y(gt),Title:Y(gt),ServiceTypeVersion:Y(gt),ServiceType:Y(gt)}),M1=It(De,{ProviderName:Y(gt),ProviderSite:Y(ru),ServiceContact:Y(P1)});function C1(n,t){return Kt({},c1,n,t)}function R1(n,t){return Kt({},u1,n,t)}function E1(n,t){const e=n.getAttribute("name");if(e)return Kt({name:e},d1,n,t)}function v1(n,t){return Kt({},g1,n,t)}function b1(n,t){return Kt({},f1,n,t)}function I1(n,t){const e=ru(n);if(e)return Kt({href:e},p1,n,t)}function L1(n,t){return Kt({},m1,n,t)}function S1(n,t){const e=n.getAttribute("name"),i=Kt({},y1,n,t);if(!i)return;const s=t[t.length-1];s[e]=i}function N1(n,t){return Kt({},w1,n,t)}function A1(n,t){return Kt({},_1,n,t)}function O1(n,t){return Kt({},T1,n,t)}function P1(n,t){return Kt({},x1,n,t)}function K1(n,t){return Kt({},M1,n,t)}function D1(n,t){return gt(n)}const Xi=[null,"http://www.opengis.net/wmts/1.0"],Nr=[null,"http://www.opengis.net/ows/1.1"],F1=It(Xi,{Contents:Y(q1)});class k1 extends l0{constructor(){super(),this.owsParser_=new h1}readFromNode(t){let e=t.getAttribute("version");e&&(e=e.trim());let i=this.owsParser_.readFromNode(t);return i?(i.version=e,i=Kt(i,F1,t,[]),i||null):null}}const G1=It(Xi,{Layer:He(Z1),TileMatrixSet:He($1)}),z1=It(Xi,{Style:He(J1),Format:He(gt),TileMatrixSetLink:He(Q1),Dimension:He(t2),ResourceURL:He(e2)},It(Nr,{Title:Y(gt),Abstract:Y(gt),WGS84BoundingBox:Y(h0),Identifier:Y(gt)})),W1=It(Xi,{LegendURL:He(i2)},It(Nr,{Title:Y(gt),Identifier:Y(gt)})),B1=It(Xi,{TileMatrixSet:Y(gt),TileMatrixSetLimits:Y(s2)}),H1=It(Xi,{TileMatrixLimits:Qh(r2)}),X1=It(Xi,{TileMatrix:Y(gt),MinTileRow:Y(bn),MaxTileRow:Y(bn),MinTileCol:Y(bn),MaxTileCol:Y(bn)}),U1=It(Xi,{Default:Y(gt),Value:He(gt)},It(Nr,{Identifier:Y(gt)})),Y1=It(Nr,{LowerCorner:Qh(tc),UpperCorner:Qh(tc)}),V1=It(Xi,{WellKnownScaleSet:Y(gt),TileMatrix:He(n2)},It(Nr,{SupportedCRS:Y(gt),Identifier:Y(gt),BoundingBox:Y(h0)})),j1=It(Xi,{TopLeftCorner:Y(tc),ScaleDenominator:Y(r1),TileWidth:Y(bn),TileHeight:Y(bn),MatrixWidth:Y(bn),MatrixHeight:Y(bn)},It(Nr,{Identifier:Y(gt)}));function q1(n,t){return Kt({},G1,n,t)}function Z1(n,t){return Kt({},z1,n,t)}function $1(n,t){return Kt({},V1,n,t)}function J1(n,t){const e=Kt({},W1,n,t);if(!e)return;const i=n.getAttribute("isDefault")==="true";return e.isDefault=i,e}function Q1(n,t){return Kt({},B1,n,t)}function t2(n,t){return Kt({},U1,n,t)}function e2(n,t){const e=n.getAttribute("format"),i=n.getAttribute("template"),s=n.getAttribute("resourceType"),r={};return e&&(r.format=e),i&&(r.template=i),s&&(r.resourceType=s),r}function h0(n,t){const e=Kt([],Y1,n,t);if(e.length==2)return wh(e)}function i2(n,t){const e={};return e.format=n.getAttribute("format"),e.href=ru(n),e}function tc(n,t){const e=gt(n).split(/\s+/);if(!e||e.length!=2)return;const i=+e[0],s=+e[1];if(!(isNaN(i)||isNaN(s)))return[i,s]}function n2(n,t){return Kt({},j1,n,t)}function s2(n,t){return Kt([],H1,n,t)}function r2(n,t){return Kt({},X1,n,t)}const o2=`<?xml version="1.0" encoding="utf-8"?><Capabilities xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0/wmtsGetCapabilities_response.xsd http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0 http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0/inspire_vs_ows_11.xsd" version="1.0.0" xmlns="http://www.opengis.net/wmts/1.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gml="http://www.opengis.net/gml" xmlns:inspire_vs="http://inspire.ec.europa.eu/schemas/inspire_vs_ows11/1.0" xmlns:inspire_common="http://inspire.ec.europa.eu/schemas/common/1.0">
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
    `,a2=new k1,ou=a2.read(o2),l2="BPL2008VL",c0=()=>ou.Contents.TileMatrixSet.find(({Identifier:n})=>n===l2),h2=()=>c0()?.BoundingBox,u0=()=>c0()?.SupportedCRS||"EPSG:3812",c2="BPL72VL",d0=()=>ou.Contents.TileMatrixSet.find(({Identifier:n})=>n===c2),u2=()=>d0()?.BoundingBox,g0=()=>d0()?.SupportedCRS||"EPSG:31370",d2=()=>ou.Contents.Layer.find(({Identifier:n})=>n==="grb_bsk"),g2=()=>d2().WGS84BoundingBox,f2=()=>"EPSG:4326";function m2(n,t,e,i,s){f0(n,t,e||0,i||n.length-1,s||y2)}function f0(n,t,e,i,s){for(;i>e;){if(i-e>600){var r=i-e+1,o=t-e+1,a=Math.log(r),l=.5*Math.exp(2*a/3),h=.5*Math.sqrt(a*l*(r-l)/r)*(o-r/2<0?-1:1),c=Math.max(e,Math.floor(t-o*l/r+h)),u=Math.min(i,Math.floor(t+(r-o)*l/r+h));f0(n,t,c,u,s)}var g=n[t],d=e,f=i;for(Yr(n,e,t),s(n[i],g)>0&&Yr(n,e,i);d<f;){for(Yr(n,d,f),d++,f--;s(n[d],g)<0;)d++;for(;s(n[f],g)>0;)f--}s(n[e],g)===0?Yr(n,e,f):(f++,Yr(n,f,i)),f<=t&&(e=f+1),t<=f&&(i=f-1)}}function Yr(n,t,e){var i=n[t];n[t]=n[e],n[e]=i}function y2(n,t){return n<t?-1:n>t?1:0}let m0=class{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let e=this.data;const i=[];if(!fa(t,e))return i;const s=this.toBBox,r=[];for(;e;){for(let o=0;o<e.children.length;o++){const a=e.children[o],l=e.leaf?s(a):a;fa(t,l)&&(e.leaf?i.push(a):sh(t,l)?this._all(a,i):r.push(a))}e=r.pop()}return i}collides(t){let e=this.data;if(!fa(t,e))return!1;const i=[];for(;e;){for(let s=0;s<e.children.length;s++){const r=e.children[s],o=e.leaf?this.toBBox(r):r;if(fa(t,o)){if(e.leaf||sh(t,o))return!0;i.push(r)}}e=i.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let i=0;i<t.length;i++)this.insert(t[i]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=e;else if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const i=this.data;this.data=e,e=i}this._insert(e,this.data.height-e.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=Ws([]),this}remove(t,e){if(!t)return this;let i=this.data;const s=this.toBBox(t),r=[],o=[];let a,l,h;for(;i||r.length;){if(i||(i=r.pop(),l=r[r.length-1],a=o.pop(),h=!0),i.leaf){const c=w2(t,i.children,e);if(c!==-1)return i.children.splice(c,1),r.push(i),this._condense(r),this}!h&&!i.leaf&&sh(i,s)?(r.push(i),o.push(a),a=0,l=i,i=i.children[0]):l?(a++,i=l.children[a],h=!1):i=null}return this}toBBox(t){return t}compareMinX(t,e){return t.minX-e.minX}compareMinY(t,e){return t.minY-e.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){const i=[];for(;t;)t.leaf?e.push(...t.children):i.push(...t.children),t=i.pop();return e}_build(t,e,i,s){const r=i-e+1;let o=this._maxEntries,a;if(r<=o)return a=Ws(t.slice(e,i+1)),As(a,this.toBBox),a;s||(s=Math.ceil(Math.log(r)/Math.log(o)),o=Math.ceil(r/Math.pow(o,s-1))),a=Ws([]),a.leaf=!1,a.height=s;const l=Math.ceil(r/o),h=l*Math.ceil(Math.sqrt(o));zd(t,e,i,h,this.compareMinX);for(let c=e;c<=i;c+=h){const u=Math.min(c+h-1,i);zd(t,c,u,l,this.compareMinY);for(let g=c;g<=u;g+=l){const d=Math.min(g+l-1,u);a.children.push(this._build(t,g,d,s-1))}}return As(a,this.toBBox),a}_chooseSubtree(t,e,i,s){for(;s.push(e),!(e.leaf||s.length-1===i);){let r=1/0,o=1/0,a;for(let l=0;l<e.children.length;l++){const h=e.children[l],c=nh(h),u=x2(t,h)-c;u<o?(o=u,r=c<r?c:r,a=h):u===o&&c<r&&(r=c,a=h)}e=a||e.children[0]}return e}_insert(t,e,i){const s=i?t:this.toBBox(t),r=[],o=this._chooseSubtree(s,this.data,e,r);for(o.children.push(t),to(o,s);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(s,r,e)}_split(t,e){const i=t[e],s=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,s);const o=this._chooseSplitIndex(i,r,s),a=Ws(i.children.splice(o,i.children.length-o));a.height=i.height,a.leaf=i.leaf,As(i,this.toBBox),As(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)}_splitRoot(t,e){this.data=Ws([t,e]),this.data.height=t.height+1,this.data.leaf=!1,As(this.data,this.toBBox)}_chooseSplitIndex(t,e,i){let s,r=1/0,o=1/0;for(let a=e;a<=i-e;a++){const l=Qr(t,0,a,this.toBBox),h=Qr(t,a,i,this.toBBox),c=T2(l,h),u=nh(l)+nh(h);c<r?(r=c,s=a,o=u<o?u:o):c===r&&u<o&&(o=u,s=a)}return s||i-e}_chooseSplitAxis(t,e,i){const s=t.leaf?this.compareMinX:_2,r=t.leaf?this.compareMinY:p2,o=this._allDistMargin(t,e,i,s),a=this._allDistMargin(t,e,i,r);o<a&&t.children.sort(s)}_allDistMargin(t,e,i,s){t.children.sort(s);const r=this.toBBox,o=Qr(t,0,e,r),a=Qr(t,i-e,i,r);let l=ga(o)+ga(a);for(let h=e;h<i-e;h++){const c=t.children[h];to(o,t.leaf?r(c):c),l+=ga(o)}for(let h=i-e-1;h>=e;h--){const c=t.children[h];to(a,t.leaf?r(c):c),l+=ga(a)}return l}_adjustParentBBoxes(t,e,i){for(let s=i;s>=0;s--)to(e[s],t)}_condense(t){for(let e=t.length-1,i;e>=0;e--)t[e].children.length===0?e>0?(i=t[e-1].children,i.splice(i.indexOf(t[e]),1)):this.clear():As(t[e],this.toBBox)}};function w2(n,t,e){if(!e)return t.indexOf(n);for(let i=0;i<t.length;i++)if(e(n,t[i]))return i;return-1}function As(n,t){Qr(n,0,n.children.length,t,n)}function Qr(n,t,e,i,s){s||(s=Ws(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r=t;r<e;r++){const o=n.children[r];to(s,n.leaf?i(o):o)}return s}function to(n,t){return n.minX=Math.min(n.minX,t.minX),n.minY=Math.min(n.minY,t.minY),n.maxX=Math.max(n.maxX,t.maxX),n.maxY=Math.max(n.maxY,t.maxY),n}function _2(n,t){return n.minX-t.minX}function p2(n,t){return n.minY-t.minY}function nh(n){return(n.maxX-n.minX)*(n.maxY-n.minY)}function ga(n){return n.maxX-n.minX+(n.maxY-n.minY)}function x2(n,t){return(Math.max(t.maxX,n.maxX)-Math.min(t.minX,n.minX))*(Math.max(t.maxY,n.maxY)-Math.min(t.minY,n.minY))}function T2(n,t){const e=Math.max(n.minX,t.minX),i=Math.max(n.minY,t.minY),s=Math.min(n.maxX,t.maxX),r=Math.min(n.maxY,t.maxY);return Math.max(0,s-e)*Math.max(0,r-i)}function sh(n,t){return n.minX<=t.minX&&n.minY<=t.minY&&t.maxX<=n.maxX&&t.maxY<=n.maxY}function fa(n,t){return t.minX<=n.maxX&&t.minY<=n.maxY&&t.maxX>=n.minX&&t.maxY>=n.minY}function Ws(n){return{children:n,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function zd(n,t,e,i,s){const r=[t,e];for(;r.length;){if(e=r.pop(),t=r.pop(),e-t<=i)continue;const o=t+Math.ceil((e-t)/i/2)*i;m2(n,o,t,e,s),r.push(t,o,o,e)}}const Q={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};class fl{constructor(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=Xe(t.scale),this.displacement_=t.displacement,this.declutterMode_=t.declutterMode}clone(){const t=this.getScale();return new fl({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return q()}getImage(t){return q()}getHitDetectionImage(){return q()}getPixelRatio(t){return 1}getImageState(){return q()}getImageSize(){return q()}getOrigin(){return q()}getSize(){return q()}setDisplacement(t){this.displacement_=t}setOpacity(t){this.opacity_=t}setRotateWithView(t){this.rotateWithView_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=Xe(t)}listenImageChange(t){q()}load(){q()}unlistenImageChange(t){q()}}function Ai(n){return Array.isArray(n)?ef(n):n}class ml extends fl{constructor(t){const e=t.rotateWithView!==void 0?t.rotateWithView:!1;super({opacity:1,rotateWithView:e,rotation:t.rotation!==void 0?t.rotation:0,scale:t.scale!==void 0?t.scale:1,displacement:t.displacement!==void 0?t.displacement:[0,0],declutterMode:t.declutterMode}),this.canvases_,this.hitDetectionCanvas_=null,this.fill_=t.fill!==void 0?t.fill:null,this.origin_=[0,0],this.points_=t.points,this.radius_=t.radius!==void 0?t.radius:t.radius1,this.radius2_=t.radius2,this.angle_=t.angle!==void 0?t.angle:0,this.stroke_=t.stroke!==void 0?t.stroke:null,this.size_,this.renderOptions_,this.render()}clone(){const t=this.getScale(),e=new ml({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return e.setOpacity(this.getOpacity()),e}getAnchor(){const t=this.size_,e=this.getDisplacement(),i=this.getScaleArray();return[t[0]/2-e[0]/i[0],t[1]/2+e[1]/i[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(t){this.fill_=t,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(t){let e=this.canvases_[t];if(!e){const i=this.renderOptions_,s=Te(i.size*t,i.size*t);this.draw_(i,s,t),e=s.canvas,this.canvases_[t]=e}return e}getPixelRatio(t){return t}getImageSize(){return this.size_}getImageState(){return Q.LOADED}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius_}getRadius2(){return this.radius2_}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t,this.render()}listenImageChange(t){}load(){}unlistenImageChange(t){}calculateLineJoinSize_(t,e,i){if(e===0||this.points_===1/0||t!=="bevel"&&t!=="miter")return e;let s=this.radius_,r=this.radius2_===void 0?s:this.radius2_;if(s<r){const T=s;s=r,r=T}const o=this.radius2_===void 0?this.points_:this.points_*2,a=2*Math.PI/o,l=r*Math.sin(a),h=Math.sqrt(r*r-l*l),c=s-h,u=Math.sqrt(l*l+c*c),g=u/l;if(t==="miter"&&g<=i)return g*e;const d=e/2/g,f=e/2*(c/u),y=Math.sqrt((s+d)*(s+d)+f*f)-s;if(this.radius2_===void 0||t==="bevel")return y*2;const _=s*Math.sin(a),p=Math.sqrt(s*s-_*_),x=r-p,C=Math.sqrt(_*_+x*x)/_;if(C<=i){const T=C*e/2-r-s;return 2*Math.max(y,T)}return y*2}createRenderOptions(){let t=mr,e=yr,i=0,s=null,r=0,o,a=0;this.stroke_&&(o=Ai(this.stroke_.getColor()??fo),a=this.stroke_.getWidth()??yo,s=this.stroke_.getLineDash(),r=this.stroke_.getLineDashOffset()??0,e=this.stroke_.getLineJoin()??yr,t=this.stroke_.getLineCap()??mr,i=this.stroke_.getMiterLimit()??go);const l=this.calculateLineJoinSize_(e,a,i),h=Math.max(this.radius_,this.radius2_||0),c=Math.ceil(2*h+l);return{strokeStyle:o,strokeWidth:a,size:c,lineCap:t,lineDash:s,lineDashOffset:r,lineJoin:e,miterLimit:i}}render(){this.renderOptions_=this.createRenderOptions();const t=this.renderOptions_.size;this.canvases_={},this.hitDetectionCanvas_=null,this.size_=[t,t]}draw_(t,e,i){if(e.scale(i,i),e.translate(t.size/2,t.size/2),this.createPath_(e),this.fill_){let s=this.fill_.getColor();s===null&&(s=Se),e.fillStyle=Ai(s),e.fill()}t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}createHitDetectionCanvas_(t){let e;if(this.fill_){let i=this.fill_.getColor(),s=0;typeof i=="string"&&(i=ba(i)),i===null?s=1:Array.isArray(i)&&(s=i.length===4?i[3]:1),s===0&&(e=Te(t.size,t.size),this.drawHitDetectionCanvas_(t,e))}return e?e.canvas:this.getImage(1)}createPath_(t){let e=this.points_;const i=this.radius_;if(e===1/0)t.arc(0,0,i,0,2*Math.PI);else{const s=this.radius2_===void 0?i:this.radius2_;this.radius2_!==void 0&&(e*=2);const r=this.angle_-Math.PI/2,o=2*Math.PI/e;for(let a=0;a<e;a++){const l=r+a*o,h=a%2===0?i:s;t.lineTo(h*Math.cos(l),h*Math.sin(l))}t.closePath()}}drawHitDetectionCanvas_(t,e){e.translate(t.size/2,t.size/2),this.createPath_(e),e.fillStyle=Se,e.fill(),t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}}class Uo extends ml{constructor(t){t=t||{radius:5},super({points:1/0,fill:t.fill,radius:t.radius,stroke:t.stroke,scale:t.scale!==void 0?t.scale:1,rotation:t.rotation!==void 0?t.rotation:0,rotateWithView:t.rotateWithView!==void 0?t.rotateWithView:!1,displacement:t.displacement!==void 0?t.displacement:[0,0],declutterMode:t.declutterMode})}clone(){const t=this.getScale(),e=new Uo({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return e.setOpacity(this.getOpacity()),e}setRadius(t){this.radius_=t,this.render()}}class ni{constructor(t){t=t||{},this.color_=t.color!==void 0?t.color:null}clone(){const t=this.getColor();return new ni({color:Array.isArray(t)?t.slice():t||void 0})}getColor(){return this.color_}setColor(t){this.color_=t}}class _i{constructor(t){t=t||{},this.color_=t.color!==void 0?t.color:null,this.lineCap_=t.lineCap,this.lineDash_=t.lineDash!==void 0?t.lineDash:null,this.lineDashOffset_=t.lineDashOffset,this.lineJoin_=t.lineJoin,this.miterLimit_=t.miterLimit,this.width_=t.width}clone(){const t=this.getColor();return new _i({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getWidth(){return this.width_}setColor(t){this.color_=t}setLineCap(t){this.lineCap_=t}setLineDash(t){this.lineDash_=t}setLineDashOffset(t){this.lineDashOffset_=t}setLineJoin(t){this.lineJoin_=t}setMiterLimit(t){this.miterLimit_=t}setWidth(t){this.width_=t}}class Oe{constructor(t){t=t||{},this.geometry_=null,this.geometryFunction_=Wd,t.geometry!==void 0&&this.setGeometry(t.geometry),this.fill_=t.fill!==void 0?t.fill:null,this.image_=t.image!==void 0?t.image:null,this.renderer_=t.renderer!==void 0?t.renderer:null,this.hitDetectionRenderer_=t.hitDetectionRenderer!==void 0?t.hitDetectionRenderer:null,this.stroke_=t.stroke!==void 0?t.stroke:null,this.text_=t.text!==void 0?t.text:null,this.zIndex_=t.zIndex}clone(){let t=this.getGeometry();return t&&typeof t=="object"&&(t=t.clone()),new Oe({geometry:t??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(t){this.renderer_=t}setHitDetectionRenderer(t){this.hitDetectionRenderer_=t}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(t){this.fill_=t}getImage(){return this.image_}setImage(t){this.image_=t}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t}getText(){return this.text_}setText(t){this.text_=t}getZIndex(){return this.zIndex_}setGeometry(t){typeof t=="function"?this.geometryFunction_=t:typeof t=="string"?this.geometryFunction_=function(e){return e.get(t)}:t?t!==void 0&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=Wd,this.geometry_=t}setZIndex(t){this.zIndex_=t}}function M2(n){let t;if(typeof n=="function")t=n;else{let e;Array.isArray(n)?e=n:(yt(typeof n.getZIndex=="function","Expected an `Style` or an array of `Style`"),e=[n]),t=function(){return e}}return t}let rh=null;function C2(n,t){if(!rh){const e=new ni({color:"rgba(255,255,255,0.4)"}),i=new _i({color:"#3399CC",width:1.25});rh=[new Oe({image:new Uo({fill:e,stroke:i,radius:5}),fill:e,stroke:i})]}return rh}function AE(){const n={},t=[255,255,255,1],e=[0,153,255,1],i=3;return n.Polygon=[new Oe({fill:new ni({color:[255,255,255,.5]})})],n.MultiPolygon=n.Polygon,n.LineString=[new Oe({stroke:new _i({color:t,width:i+2})}),new Oe({stroke:new _i({color:e,width:i})})],n.MultiLineString=n.LineString,n.Circle=n.Polygon.concat(n.LineString),n.Point=[new Oe({image:new Uo({radius:i*2,fill:new ni({color:e}),stroke:new _i({color:t,width:i/2})}),zIndex:1/0})],n.MultiPoint=n.Point,n.GeometryCollection=n.Polygon.concat(n.LineString,n.Point),n}function Wd(n){return n.getGeometry()}class y0 extends So{constructor(t,e,i,s){super(),this.extent=t,this.pixelRatio_=i,this.resolution=e,this.state=typeof s=="function"?Q.IDLE:s,this.image_=null,this.loader=typeof s=="function"?s:null}changed(){this.dispatchEvent($.CHANGE)}getExtent(){return this.extent}getImage(){return this.image_}getPixelRatio(){return this.pixelRatio_}getResolution(){return this.resolution}getState(){return this.state}load(){if(this.state==Q.IDLE&&this.loader){this.state=Q.LOADING,this.changed();const t=this.getResolution(),e=Array.isArray(t)?t[0]:t;Tm(()=>this.loader(this.getExtent(),e,this.getPixelRatio())).then(i=>{"image"in i&&(this.image_=i.image),"extent"in i&&(this.extent=i.extent),"resolution"in i&&(this.resolution=i.resolution),"pixelRatio"in i&&(this.pixelRatio_=i.pixelRatio),(i instanceof HTMLImageElement||i instanceof ImageBitmap||i instanceof HTMLCanvasElement||i instanceof HTMLVideoElement)&&(this.image_=i),this.state=Q.LOADED}).catch(i=>{this.state=Q.ERROR,console.error(i)}).finally(()=>this.changed())}}setImage(t){this.image_=t}setResolution(t){this.resolution=t}}function R2(n,t,e){const i=n;let s=!0,r=!1,o=!1;const a=[ro(i,$.LOAD,function(){o=!0,r||t()})];return i.src&&mc?(r=!0,i.decode().then(function(){s&&t()}).catch(function(l){s&&(o?t():e())})):a.push(ro(i,$.ERROR,e)),function(){s=!1,a.forEach(Nt)}}function E2(n,t){return new Promise((e,i)=>{function s(){o(),e(n)}function r(){o(),i(new Error("Image load error"))}function o(){n.removeEventListener("load",s),n.removeEventListener("error",r)}n.addEventListener("load",s),n.addEventListener("error",r)})}function w0(n,t){return t&&(n.src=t),n.src&&mc?new Promise((e,i)=>n.decode().then(()=>e(n)).catch(s=>n.complete&&n.width?e(n):i(s))):E2(n)}function v2(n,t){return t&&(n.src=t),n.src&&mc&&vm?n.decode().then(()=>createImageBitmap(n)).catch(e=>{if(n.complete&&n.width)return n;throw e}):w0(n)}let Vr=null;class b2 extends So{constructor(t,e,i,s,r){super(),this.hitDetectionImage_=null,this.image_=t,this.crossOrigin_=i,this.canvas_={},this.color_=r,this.imageState_=s===void 0?Q.IDLE:s,this.size_=t&&t.width&&t.height?[t.width,t.height]:null,this.src_=e,this.tainted_}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===Q.LOADED){Vr||(Vr=Te(1,1,void 0,{willReadFrequently:!0})),Vr.drawImage(this.image_,0,0);try{Vr.getImageData(0,0,1,1),this.tainted_=!1}catch{Vr=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent($.CHANGE)}handleImageError_(){this.imageState_=Q.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=Q.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(t){return this.image_||this.initializeImage_(),this.replaceColor_(t),this.canvas_[t]?this.canvas_[t]:this.image_}getPixelRatio(t){return this.replaceColor_(t),this.canvas_[t]?t:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){const t=this.size_[0],e=this.size_[1],i=Te(t,e);i.fillRect(0,0,t,e),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===Q.IDLE){this.image_||this.initializeImage_(),this.imageState_=Q.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&w0(this.image_,this.src_).then(t=>{this.image_=t,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(t){if(!this.color_||this.canvas_[t]||this.imageState_!==Q.LOADED)return;const e=this.image_,i=document.createElement("canvas");i.width=Math.ceil(e.width*t),i.height=Math.ceil(e.height*t);const s=i.getContext("2d");s.scale(t,t),s.drawImage(e,0,0),s.globalCompositeOperation="multiply",s.fillStyle=Qg(this.color_),s.fillRect(0,0,i.width/t,i.height/t),s.globalCompositeOperation="destination-in",s.drawImage(e,0,0),this.canvas_[t]=i}}function I2(n,t,e,i,s){let r=t===void 0?void 0:Ia.get(t,e,s);return r||(r=new b2(n,n instanceof HTMLImageElement?n.src||void 0:t,e,i,s),Ia.set(t,e,s,r)),r}function Bd(n,t,e,i){return e!==void 0&&i!==void 0?[e/n,i/t]:e!==void 0?e/n:i!==void 0?i/t:1}class yl extends fl{constructor(t){t=t||{};const e=t.opacity!==void 0?t.opacity:1,i=t.rotation!==void 0?t.rotation:0,s=t.scale!==void 0?t.scale:1,r=t.rotateWithView!==void 0?t.rotateWithView:!1;super({opacity:e,rotation:i,scale:s,displacement:t.displacement!==void 0?t.displacement:[0,0],rotateWithView:r,declutterMode:t.declutterMode}),this.anchor_=t.anchor!==void 0?t.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=t.anchorOrigin!==void 0?t.anchorOrigin:"top-left",this.anchorXUnits_=t.anchorXUnits!==void 0?t.anchorXUnits:"fraction",this.anchorYUnits_=t.anchorYUnits!==void 0?t.anchorYUnits:"fraction",this.crossOrigin_=t.crossOrigin!==void 0?t.crossOrigin:null;const o=t.img!==void 0?t.img:null;let a=t.src;yt(!(a!==void 0&&o),"`image` and `src` cannot be provided at the same time"),(a===void 0||a.length===0)&&o&&(a=o.src||Mt(o)),yt(a!==void 0&&a.length>0,"A defined and non-empty `src` or `image` must be provided"),yt(!((t.width!==void 0||t.height!==void 0)&&t.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let l;if(t.src!==void 0?l=Q.IDLE:o!==void 0&&(o instanceof HTMLImageElement?o.complete?l=o.src?Q.LOADED:Q.IDLE:l=Q.LOADING:l=Q.LOADED),this.color_=t.color!==void 0?ba(t.color):null,this.iconImage_=I2(o,a,this.crossOrigin_,l,this.color_),this.offset_=t.offset!==void 0?t.offset:[0,0],this.offsetOrigin_=t.offsetOrigin!==void 0?t.offsetOrigin:"top-left",this.origin_=null,this.size_=t.size!==void 0?t.size:null,t.width!==void 0||t.height!==void 0){let h,c;if(t.size)[h,c]=t.size;else{const u=this.getImage(1);if(u.width&&u.height)h=u.width,c=u.height;else if(u instanceof HTMLImageElement){this.initialOptions_=t;const g=()=>{if(this.unlistenImageChange(g),!this.initialOptions_)return;const d=this.iconImage_.getSize();this.setScale(Bd(d[0],d[1],t.width,t.height))};this.listenImageChange(g);return}}h!==void 0&&this.setScale(Bd(h,c,t.width,t.height))}}clone(){let t,e,i;return this.initialOptions_?(e=this.initialOptions_.width,i=this.initialOptions_.height):(t=this.getScale(),t=Array.isArray(t)?t.slice():t),new yl({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:t,width:e,height:i,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let t=this.normalizedAnchor_;if(!t){t=this.anchor_;const s=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!s)return null;t=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(t[0]*=s[0]),this.anchorYUnits_=="fraction"&&(t[1]*=s[1])}if(this.anchorOrigin_!="top-left"){if(!s)return null;t===this.anchor_&&(t=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(t[0]=-t[0]+s[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(t[1]=-t[1]+s[1])}this.normalizedAnchor_=t}const e=this.getDisplacement(),i=this.getScaleArray();return[t[0]-e[0]/i[0],t[1]+e[1]/i[1]]}setAnchor(t){this.anchor_=t,this.normalizedAnchor_=null}getColor(){return this.color_}getImage(t){return this.iconImage_.getImage(t)}getPixelRatio(t){return this.iconImage_.getPixelRatio(t)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let t=this.offset_;if(this.offsetOrigin_!="top-left"){const e=this.getSize(),i=this.iconImage_.getSize();if(!e||!i)return null;t=t.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(t[0]=i[0]-e[0]-t[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(t[1]=i[1]-e[1]-t[1])}return this.origin_=t,this.origin_}getSrc(){return this.iconImage_.getSrc()}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){const t=this.getScaleArray();if(this.size_)return this.size_[0]*t[0];if(this.iconImage_.getImageState()==Q.LOADED)return this.iconImage_.getSize()[0]*t[0]}getHeight(){const t=this.getScaleArray();if(this.size_)return this.size_[1]*t[1];if(this.iconImage_.getImageState()==Q.LOADED)return this.iconImage_.getSize()[1]*t[1]}setScale(t){delete this.initialOptions_,super.setScale(t)}listenImageChange(t){this.iconImage_.addEventListener($.CHANGE,t)}load(){this.iconImage_.load()}unlistenImageChange(t){this.iconImage_.removeEventListener($.CHANGE,t)}}const L2="#333";class wl{constructor(t){t=t||{},this.font_=t.font,this.rotation_=t.rotation,this.rotateWithView_=t.rotateWithView,this.scale_=t.scale,this.scaleArray_=Xe(t.scale!==void 0?t.scale:1),this.text_=t.text,this.textAlign_=t.textAlign,this.justify_=t.justify,this.repeat_=t.repeat,this.textBaseline_=t.textBaseline,this.fill_=t.fill!==void 0?t.fill:new ni({color:L2}),this.maxAngle_=t.maxAngle!==void 0?t.maxAngle:Math.PI/4,this.placement_=t.placement!==void 0?t.placement:"point",this.overflow_=!!t.overflow,this.stroke_=t.stroke!==void 0?t.stroke:null,this.offsetX_=t.offsetX!==void 0?t.offsetX:0,this.offsetY_=t.offsetY!==void 0?t.offsetY:0,this.backgroundFill_=t.backgroundFill?t.backgroundFill:null,this.backgroundStroke_=t.backgroundStroke?t.backgroundStroke:null,this.padding_=t.padding===void 0?null:t.padding}clone(){const t=this.getScale();return new wl({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}setOverflow(t){this.overflow_=t}setFont(t){this.font_=t}setMaxAngle(t){this.maxAngle_=t}setOffsetX(t){this.offsetX_=t}setOffsetY(t){this.offsetY_=t}setPlacement(t){this.placement_=t}setRepeat(t){this.repeat_=t}setRotateWithView(t){this.rotateWithView_=t}setFill(t){this.fill_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=Xe(t!==void 0?t:1)}setStroke(t){this.stroke_=t}setText(t){this.text_=t}setTextAlign(t){this.textAlign_=t}setJustify(t){this.justify_=t}setTextBaseline(t){this.textBaseline_=t}setBackgroundFill(t){this.backgroundFill_=t}setBackgroundStroke(t){this.backgroundStroke_=t}setPadding(t){this.padding_=t}}let Ar=0;const Or=0,zt=1<<Ar++,U=1<<Ar++,mi=1<<Ar++,ae=1<<Ar++,kn=1<<Ar++,ve=Math.pow(2,Ar)-1,_0={[zt]:"boolean",[U]:"number",[mi]:"string",[ae]:"color",[kn]:"number[]"},S2=Object.keys(_0).map(Number).sort(Pn);function ce(n){const t=[];for(const e of S2)N2(n,e)&&t.push(_0[e]);return t.length===0?"untyped":t.length<3?t.join(" or "):t.slice(0,-1).join(", ")+", or "+t[t.length-1]}function N2(n,t){return(n&t)===t}function Di(n,t){return!!(n&t)}function _l(n,t){return n===t}class In{constructor(t,e){this.type=t,this.value=e}}class A2{constructor(t,e,...i){this.type=t,this.operator=e,this.args=i}}function p0(){return{variables:new Set,properties:new Set,featureId:!1,style:{}}}function O2(n){switch(n){case"string":return mi;case"color":return ae;case"number":return U;case"boolean":return zt;case"number[]":return kn;default:throw new Error(`Unrecognized type hint: ${n}`)}}function vt(n,t,e){switch(typeof n){case"boolean":return new In(zt,n);case"number":return new In(U,n);case"string":{let s=mi;return Oy(n)&&(s|=ae),_l(s&e,Or)||(s&=e),new In(s,n)}}if(!Array.isArray(n))throw new Error("Expression must be an array or a primitive value");if(n.length===0)throw new Error("Empty expression");if(typeof n[0]=="string")return X2(n,t,e);for(const s of n)if(typeof s!="number")throw new Error("Expected an array of numbers");let i=kn;return(n.length===3||n.length===4)&&(i|=ae),e&&(i&=e),new In(i,n)}const L={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette"},P2={[L.Get]:tt(([n,t])=>t!==void 0?O2(t.value):ve,st(1,2),K2),[L.Var]:tt(([n])=>n.type,st(1,1),D2),[L.Id]:tt(U|mi,jr,F2),[L.Concat]:tt(mi,st(2,1/0),pt(ve)),[L.GeometryType]:tt(mi,jr),[L.Resolution]:tt(U,jr),[L.Zoom]:tt(U,jr),[L.Time]:tt(U,jr),[L.Any]:tt(zt,st(2,1/0),pt(zt)),[L.All]:tt(zt,st(2,1/0),pt(zt)),[L.Not]:tt(zt,st(1,1),pt(zt)),[L.Equal]:tt(zt,st(2,2),pt(ve),qn),[L.NotEqual]:tt(zt,st(2,2),pt(ve),qn),[L.GreaterThan]:tt(zt,st(2,2),pt(ve),qn),[L.GreaterThanOrEqualTo]:tt(zt,st(2,2),pt(ve),qn),[L.LessThan]:tt(zt,st(2,2),pt(ve),qn),[L.LessThanOrEqualTo]:tt(zt,st(2,2),pt(ve),qn),[L.Multiply]:tt(n=>{let t=U|ae;for(let e=0;e<n.length;e++)t&=n[e].type;return t},st(2,1/0),pt(U|ae),qn),[L.Divide]:tt(U,st(2,2),pt(U)),[L.Add]:tt(U,st(2,1/0),pt(U)),[L.Subtract]:tt(U,st(2,2),pt(U)),[L.Clamp]:tt(U,st(3,3),pt(U)),[L.Mod]:tt(U,st(2,2),pt(U)),[L.Pow]:tt(U,st(2,2),pt(U)),[L.Abs]:tt(U,st(1,1),pt(U)),[L.Floor]:tt(U,st(1,1),pt(U)),[L.Ceil]:tt(U,st(1,1),pt(U)),[L.Round]:tt(U,st(1,1),pt(U)),[L.Sin]:tt(U,st(1,1),pt(U)),[L.Cos]:tt(U,st(1,1),pt(U)),[L.Atan]:tt(U,st(1,2),pt(U)),[L.Sqrt]:tt(U,st(1,1),pt(U)),[L.Match]:tt(n=>{let t=ve;for(let e=2;e<n.length;e+=2)t&=n[e].type;return t&=n[n.length-1].type,t},st(4,1/0),Hd,G2),[L.Between]:tt(zt,st(3,3),pt(U)),[L.Interpolate]:tt(n=>{let t=ae|U;for(let e=3;e<n.length;e+=2)t&=n[e].type;return t},st(6,1/0),Hd,z2),[L.Case]:tt(n=>{let t=ve;for(let e=1;e<n.length;e+=2)t&=n[e].type;return t&=n[n.length-1].type,t},st(3,1/0),k2,W2),[L.In]:tt(zt,st(2,2),B2),[L.Number]:tt(U,st(1,1/0),pt(ve)),[L.String]:tt(mi,st(1,1/0),pt(ve)),[L.Array]:tt(n=>n.length===3||n.length===4?kn|ae:kn,st(1,1/0),pt(U)),[L.Color]:tt(ae,st(3,4),pt(U)),[L.Band]:tt(U,st(1,3),pt(U)),[L.Palette]:tt(ae,st(2,2),H2)};function K2(n,t){const e=vt(n[1],t);if(!(e instanceof In))throw new Error("Expected a literal argument for get operation");if(typeof e.value!="string")throw new Error("Expected a string argument for get operation");if(t.properties.add(e.value),n.length===3){const i=vt(n[2],t);return[e,i]}return[e]}function D2(n,t,e,i){const s=n[1];if(typeof s!="string")throw new Error("Expected a string argument for var operation");if(t.variables.add(s),!("variables"in t.style)||t.style.variables[s]===void 0)return[new In(ve,s)];const r=t.style.variables[s],o=vt(r,t);if(o.value=s,i&&!Di(i,o.type))throw new Error(`The variable ${s} has type ${ce(o.type)} but the following type was expected: ${ce(i)}`);return[o]}function F2(n,t){t.featureId=!0}function jr(n,t){const e=n[0];if(n.length!==1)throw new Error(`Expected no arguments for ${e} operation`);return[]}function st(n,t){return function(e,i){const s=e[0],r=e.length-1;if(n===t){if(r!==n){const o=n===1?"":"s";throw new Error(`Expected ${n} argument${o} for ${s}, got ${r}`)}}else if(r<n||r>t){const o=t===1/0?`${n} or more`:`${n} to ${t}`;throw new Error(`Expected ${o} arguments for ${s}, got ${r}`)}}}function pt(n){return function(t,e){const i=t[0],s=t.length-1,r=new Array(s);for(let o=0;o<s;++o){const a=vt(t[o+1],e);if(!Di(n,a.type)){const l=ce(n),h=ce(a.type);throw new Error(`Unexpected type for argument ${o} of ${i} operation, got ${l} but expected ${h}`)}a.type&=n,r[o]=a}return r}}function qn(n,t,e){const i=n[0],s=n.length-1;let r=ve;for(let a=0;a<e.length;++a)r&=e[a].type;if(r===Or)throw new Error(`No common type could be found for arguments of ${i} operation`);const o=new Array(s);for(let a=0;a<s;++a)o[a]=vt(n[a+1],t,r);return o}function k2(n,t){const e=n[0],i=n.length-1;if(i%2===0)throw new Error(`An odd amount of arguments was expected for operation ${e}, got ${JSON.stringify(i)} instead`)}function Hd(n,t){const e=n[0],i=n.length-1;if(i%2===1)throw new Error(`An even amount of arguments was expected for operation ${e}, got ${JSON.stringify(i)} instead`)}function G2(n,t,e,i){const s=n.length-1;let o=vt(n[1],t).type;const a=vt(n[n.length-1],t);let l=i!==void 0?i&a.type:a.type;const h=new Array(s-2);for(let u=0;u<s-2;u+=2){const g=vt(n[u+2],t),d=vt(n[u+3],t);o&=g.type,l&=d.type,h[u]=g,h[u+1]=d}const c=mi|U|zt;if(!Di(c,o))throw new Error(`Expected an input of type ${ce(c)} for the interpolate operation, got ${ce(o)} instead`);if(_l(l,Or))throw new Error("Could not find a common output type for the following match operation: "+JSON.stringify(n));for(let u=0;u<s-2;u+=2){const g=vt(n[u+2],t,o),d=vt(n[u+3],t,l);h[u]=g,h[u+1]=d}return[vt(n[1],t,o),...h,vt(n[n.length-1],t,l)]}function z2(n,t,e,i){const s=n[1];let r;switch(s[0]){case"linear":r=1;break;case"exponential":if(r=s[1],typeof r!="number")throw new Error(`Expected a number base for exponential interpolation, got ${JSON.stringify(r)} instead`);break;default:r=null}if(!r)throw new Error(`Invalid interpolation type: ${JSON.stringify(s)}`);r=vt(r,t);let o=vt(n[2],t);if(!Di(U,o.type))throw new Error(`Expected an input of type number for the interpolate operation, got ${ce(o.type)} instead`);o=vt(n[2],t,U);const a=new Array(n.length-3);for(let l=0;l<a.length;l+=2){let h=vt(n[l+3],t);if(!Di(U,h.type))throw new Error(`Expected all stop input values in the interpolate operation to be of type number, got ${ce(h.type)} at position ${l+2} instead`);let c=vt(n[l+4],t);if(!Di(U|ae,c.type))throw new Error(`Expected all stop output values in the interpolate operation to be a number or color, got ${ce(c.type)} at position ${l+3} instead`);h=vt(n[l+3],t,U),c=vt(n[l+4],t,U|ae),a[l]=h,a[l+1]=c}return[r,o,...a]}function W2(n,t,e,i){const s=vt(n[n.length-1],t);let r=i!==void 0?i&s.type:s.type;const o=new Array(n.length-1);for(let a=0;a<o.length-1;a+=2){const l=vt(n[a+1],t),h=vt(n[a+2],t);if(!Di(zt,l.type))throw new Error(`Expected all conditions in the case operation to be of type boolean, got ${ce(l.type)} at position ${a} instead`);r&=h.type,o[a]=l,o[a+1]=h}if(_l(r,Or))throw new Error("Could not find a common output type for the following case operation: "+JSON.stringify(n));for(let a=0;a<o.length-1;a+=2)o[a+1]=vt(n[a+2],t,r);return o[o.length-1]=vt(n[n.length-1],t,r),o}function B2(n,t){let e=n[2];if(!Array.isArray(e))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');if(typeof e[0]=="string"){if(e[0]!=="literal")throw new Error('For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.');if(!Array.isArray(e[1]))throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');e=e[1]}let i=mi|U;const s=new Array(e.length);for(let o=0;o<s.length;o++){const a=vt(e[o],t);i&=a.type,s[o]=a}if(_l(i,Or))throw new Error("Could not find a common type for the following in operation: "+JSON.stringify(n));return[vt(n[1],t,i),...s]}function H2(n,t){const e=vt(n[1],t,U);if(e.type!==U)throw new Error(`The first argument of palette must be an number, got ${ce(e.type)} instead`);const i=n[2];if(!Array.isArray(i))throw new Error("The second argument of palette must be an array");const s=new Array(i.length);for(let r=0;r<s.length;r++){const o=vt(i[r],t,ae);if(!(o instanceof In))throw new Error(`The palette color at index ${r} must be a literal value`);if(!Di(o.type,ae))throw new Error(`The palette color at index ${r} should be of type color, got ${ce(o.type)} instead`);s[r]=o}return[e,...s]}function tt(n,...t){return function(e,i,s){const r=e[0];let o=[];for(let l=0;l<t.length;l++)o=t[l](e,i,o,s)||o;let a=typeof n=="function"?n(o):n;if(s!==void 0){if(!Di(a,s))throw new Error(`The following expression was expected to return ${ce(s)}, but returns ${ce(a)} instead: ${JSON.stringify(e)}`);a&=s}if(a===Or)throw new Error(`No matching type was found for the following expression: ${JSON.stringify(e)}`);return new A2(a,r,...o)}}function X2(n,t,e){const i=n[0],s=P2[i];if(!s)throw new Error(`Unknown operator: ${i}`);return s(n,t,e)}function x0(){return{variables:{},properties:{},resolution:NaN,featureId:null}}function Xn(n,t,e){const i=vt(n,e);if(!Di(t,i.type)){const s=ce(t),r=ce(i.type);throw new Error(`Expected expression to be of type ${s}, got ${r}`)}return cn(i)}function cn(n,t){if(n instanceof In){if(n.type===ae&&typeof n.value=="string"){const i=Ac(n.value);return function(){return i}}return function(){return n.value}}const e=n.operator;switch(e){case L.Number:case L.String:return U2(n);case L.Get:case L.Var:return Y2(n);case L.Id:return i=>i.featureId;case L.Concat:{const i=n.args.map(s=>cn(s));return s=>"".concat(...i.map(r=>r(s).toString()))}case L.Resolution:return i=>i.resolution;case L.Any:case L.All:case L.Not:return j2(n);case L.Equal:case L.NotEqual:case L.LessThan:case L.LessThanOrEqualTo:case L.GreaterThan:case L.GreaterThanOrEqualTo:return V2(n);case L.Multiply:case L.Divide:case L.Add:case L.Subtract:case L.Clamp:case L.Mod:case L.Pow:case L.Abs:case L.Floor:case L.Ceil:case L.Round:case L.Sin:case L.Cos:case L.Atan:case L.Sqrt:return q2(n);case L.Match:return Z2(n);case L.Interpolate:return $2(n);default:throw new Error(`Unsupported operator ${e}`)}}function U2(n,t){const e=n.operator,i=n.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=cn(n.args[r]);switch(e){case L.Number:case L.String:return r=>{for(let o=0;o<i;++o){const a=s[o](r);if(typeof a===e)return a}throw new Error(`Expected one of the values to be a ${e}`)};default:throw new Error(`Unsupported assertion operator ${e}`)}}function Y2(n,t){const i=n.args[0].value;switch(n.operator){case L.Get:return s=>s.properties[i];case L.Var:return s=>s.variables[i];default:throw new Error(`Unsupported accessor operator ${n.operator}`)}}function V2(n,t){const e=n.operator,i=cn(n.args[0]),s=cn(n.args[1]);switch(e){case L.Equal:return r=>i(r)===s(r);case L.NotEqual:return r=>i(r)!==s(r);case L.LessThan:return r=>i(r)<s(r);case L.LessThanOrEqualTo:return r=>i(r)<=s(r);case L.GreaterThan:return r=>i(r)>s(r);case L.GreaterThanOrEqualTo:return r=>i(r)>=s(r);default:throw new Error(`Unsupported comparison operator ${e}`)}}function j2(n,t){const e=n.operator,i=n.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=cn(n.args[r]);switch(e){case L.Any:return r=>{for(let o=0;o<i;++o)if(s[o](r))return!0;return!1};case L.All:return r=>{for(let o=0;o<i;++o)if(!s[o](r))return!1;return!0};case L.Not:return r=>!s[0](r);default:throw new Error(`Unsupported logical operator ${e}`)}}function q2(n,t){const e=n.operator,i=n.args.length,s=new Array(i);for(let r=0;r<i;++r)s[r]=cn(n.args[r]);switch(e){case L.Multiply:return r=>{let o=1;for(let a=0;a<i;++a)o*=s[a](r);return o};case L.Divide:return r=>s[0](r)/s[1](r);case L.Add:return r=>{let o=0;for(let a=0;a<i;++a)o+=s[a](r);return o};case L.Subtract:return r=>s[0](r)-s[1](r);case L.Clamp:return r=>{const o=s[0](r),a=s[1](r);if(o<a)return a;const l=s[2](r);return o>l?l:o};case L.Mod:return r=>s[0](r)%s[1](r);case L.Pow:return r=>Math.pow(s[0](r),s[1](r));case L.Abs:return r=>Math.abs(s[0](r));case L.Floor:return r=>Math.floor(s[0](r));case L.Ceil:return r=>Math.ceil(s[0](r));case L.Round:return r=>Math.round(s[0](r));case L.Sin:return r=>Math.sin(s[0](r));case L.Cos:return r=>Math.cos(s[0](r));case L.Atan:return i===2?r=>Math.atan2(s[0](r),s[1](r)):r=>Math.atan(s[0](r));case L.Sqrt:return r=>Math.sqrt(s[0](r));default:throw new Error(`Unsupported numeric operator ${e}`)}}function Z2(n,t){const e=n.args.length,i=new Array(e);for(let s=0;s<e;++s)i[s]=cn(n.args[s]);return s=>{const r=i[0](s);for(let o=1;o<e;o+=2)if(r===i[o](s))return i[o+1](s);return i[e-1](s)}}function $2(n,t){const e=n.args.length,i=new Array(e);for(let s=0;s<e;++s)i[s]=cn(n.args[s]);return s=>{const r=i[0](s),o=i[1](s);let a,l;for(let h=2;h<e;h+=2){const c=i[h](s);let u=i[h+1](s);const g=Array.isArray(u);if(g&&(u=Ny(u)),c>=o)return h===2?u:g?J2(r,o,a,l,c,u):eo(r,o,a,l,c,u);a=c,l=u}return l}}function eo(n,t,e,i,s,r){const o=s-e;if(o===0)return i;const a=t-e,l=n===1?a/o:(Math.pow(n,a)-1)/(Math.pow(n,o)-1);return i+l*(r-i)}function J2(n,t,e,i,s,r){if(s-e===0)return i;const a=od(i),l=od(r);let h=l[2]-a[2];h>180?h-=360:h<-180&&(h+=360);const c=[eo(n,t,e,a[0],s,l[0]),eo(n,t,e,a[1],s,l[1]),a[2]+eo(n,t,e,0,s,h),eo(n,t,e,i[3],s,r[3])];return tf(Ay(c))}function Q2(n){return!0}function tC(n){const t=p0(),e=eC(n,t),i=x0();return function(s,r){if(i.properties=s.getPropertiesInternal(),i.resolution=r,t.featureId){const o=s.getId();o!==void 0?i.featureId=o:i.featureId=null}return e(i)}}function Xd(n){const t=p0(),e=n.length,i=new Array(e);for(let o=0;o<e;++o)i[o]=ec(n[o],t);const s=x0(),r=new Array(e);return function(o,a){if(s.properties=o.getPropertiesInternal(),s.resolution=a,t.featureId){const h=o.getId();h!==void 0?s.featureId=h:s.featureId=null}let l=0;for(let h=0;h<e;++h){const c=i[h](s);c&&(r[l]=c,l+=1)}return r.length=l,r}}function eC(n,t){const e=n.length,i=new Array(e);for(let s=0;s<e;++s){const r=n[s],o="filter"in r?Xn(r.filter,zt,t):Q2;let a;if(Array.isArray(r.style)){const l=r.style.length;a=new Array(l);for(let h=0;h<l;++h)a[h]=ec(r.style[h],t)}else a=[ec(r.style,t)];i[s]={filter:o,styles:a}}return function(s){const r=[];let o=!1;for(let a=0;a<e;++a){const l=i[a].filter;if(l(s)&&!(n[a].else&&o)){o=!0;for(const h of i[a].styles){const c=h(s);c&&r.push(c)}}}return r}}function ec(n,t){const e=xo(n,"",t),i=To(n,"",t),s=iC(n,t),r=nC(n,t),o=Ae(n,"z-index",t);if(!e&&!i&&!s&&!r&&!us(n))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(n));const a=new Oe;return function(l){let h=!0;if(e){const c=e(l);c&&(h=!1),a.setFill(c)}if(i){const c=i(l);c&&(h=!1),a.setStroke(c)}if(s){const c=s(l);c&&(h=!1),a.setText(c)}if(r){const c=r(l);c&&(h=!1),a.setImage(c)}return o&&a.setZIndex(o(l)),h?null:a}}function xo(n,t,e){const i=T0(n,t+"fill-color",e);if(!i)return null;const s=new ni;return function(r){const o=i(r);return o==="none"?null:(s.setColor(o),s)}}function To(n,t,e){const i=Ae(n,t+"stroke-width",e),s=T0(n,t+"stroke-color",e);if(!i&&!s)return null;const r=Rn(n,t+"stroke-line-cap",e),o=Rn(n,t+"stroke-line-join",e),a=M0(n,t+"stroke-line-dash",e),l=Ae(n,t+"stroke-line-dash-offset",e),h=Ae(n,t+"stroke-miter-limit",e),c=new _i;return function(u){if(s){const g=s(u);if(g==="none")return null;c.setColor(g)}if(i&&c.setWidth(i(u)),r){const g=r(u);if(g!=="butt"&&g!=="round"&&g!=="square")throw new Error("Expected butt, round, or square line cap");c.setLineCap(g)}if(o){const g=o(u);if(g!=="bevel"&&g!=="round"&&g!=="miter")throw new Error("Expected bevel, round, or miter line join");c.setLineJoin(g)}return a&&c.setLineDash(a(u)),l&&c.setLineDashOffset(l(u)),h&&c.setMiterLimit(h(u)),c}}function iC(n,t){const e="text-",i=Rn(n,e+"value",t);if(!i)return null;const s=xo(n,e,t),r=xo(n,e+"background-",t),o=To(n,e,t),a=To(n,e+"background-",t),l=Rn(n,e+"font",t),h=Ae(n,e+"max-angle",t),c=Ae(n,e+"offset-x",t),u=Ae(n,e+"offset-y",t),g=Mo(n,e+"overflow",t),d=Rn(n,e+"placement",t),f=Ae(n,e+"repeat",t),m=pl(n,e+"scale",t),y=Mo(n,e+"rotate-with-view",t),_=Ae(n,e+"rotation",t),p=Rn(n,e+"align",t),x=Rn(n,e+"justify",t),M=Rn(n,e+"baseline",t),C=M0(n,e+"padding",t),T=new wl({});return function(R){if(T.setText(i(R)),s&&T.setFill(s(R)),r&&T.setBackgroundFill(r(R)),o&&T.setStroke(o(R)),a&&T.setBackgroundStroke(a(R)),l&&T.setFont(l(R)),h&&T.setMaxAngle(h(R)),c&&T.setOffsetX(c(R)),u&&T.setOffsetY(u(R)),g&&T.setOverflow(g(R)),d){const v=d(R);if(v!=="point"&&v!=="line")throw new Error("Expected point or line for text-placement");T.setPlacement(v)}if(f&&T.setRepeat(f(R)),m&&T.setScale(m(R)),y&&T.setRotateWithView(y(R)),_&&T.setRotation(_(R)),p){const v=p(R);if(v!=="left"&&v!=="center"&&v!=="right"&&v!=="end"&&v!=="start")throw new Error("Expected left, right, center, start, or end for text-align");T.setTextAlign(v)}if(x){const v=x(R);if(v!=="left"&&v!=="right"&&v!=="center")throw new Error("Expected left, right, or center for text-justify");T.setJustify(v)}if(M){const v=M(R);if(v!=="bottom"&&v!=="top"&&v!=="middle"&&v!=="alphabetic"&&v!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");T.setTextBaseline(v)}return C&&T.setPadding(C(R)),T}}function nC(n,t){return"icon-src"in n?sC(n,t):"shape-points"in n?rC(n,t):"circle-radius"in n?oC(n,t):null}function sC(n,t){const e="icon-",i=e+"src",s=C0(n[i],i),r=Wa(n,e+"anchor",t),o=pl(n,e+"scale",t),a=Ae(n,e+"opacity",t),l=Wa(n,e+"displacement",t),h=Ae(n,e+"rotation",t),c=Mo(n,e+"rotate-with-view",t),u=Ud(n,e+"anchor-origin"),g=Yd(n,e+"anchor-x-units"),d=Yd(n,e+"anchor-y-units"),f=cC(n,e+"color"),m=lC(n,e+"cross-origin"),y=hC(n,e+"offset"),_=Ud(n,e+"offset-origin"),p=qs(n,e+"width"),x=qs(n,e+"height"),M=aC(n,e+"size"),C=au(n,e+"declutter"),T=new yl({src:s,anchorOrigin:u,anchorXUnits:g,anchorYUnits:d,color:f,crossOrigin:m,offset:y,offsetOrigin:_,height:x,width:p,size:M,declutterMode:C});return function(R){return a&&T.setOpacity(a(R)),l&&T.setDisplacement(l(R)),h&&T.setRotation(h(R)),c&&T.setRotateWithView(c(R)),o&&T.setScale(o(R)),r&&T.setAnchor(r(R)),T}}function rC(n,t){const e="shape-",i=e+"points",s=R0(n[i],i),r=xo(n,e,t),o=To(n,e,t),a=pl(n,e+"scale",t),l=Wa(n,e+"displacement",t),h=Ae(n,e+"rotation",t),c=Mo(n,e+"rotate-with-view",t),u=qs(n,e+"radius"),g=qs(n,e+"radius1"),d=qs(n,e+"radius2"),f=qs(n,e+"angle"),m=au(n,e+"declutter-mode"),y=new ml({points:s,radius:u,radius1:g,radius2:d,angle:f,declutterMode:m});return function(_){return r&&y.setFill(r(_)),o&&y.setStroke(o(_)),l&&y.setDisplacement(l(_)),h&&y.setRotation(h(_)),c&&y.setRotateWithView(c(_)),a&&y.setScale(a(_)),y}}function oC(n,t){const e="circle-",i=xo(n,e,t),s=To(n,e,t),r=Ae(n,e+"radius",t),o=pl(n,e+"scale",t),a=Wa(n,e+"displacement",t),l=Ae(n,e+"rotation",t),h=Mo(n,e+"rotate-with-view",t),c=au(n,e+"declutter-mode"),u=new Uo({radius:5,declutterMode:c});return function(g){return r&&u.setRadius(r(g)),i&&u.setFill(i(g)),s&&u.setStroke(s(g)),a&&u.setDisplacement(a(g)),l&&u.setRotation(l(g)),h&&u.setRotateWithView(h(g)),o&&u.setScale(o(g)),u}}function Ae(n,t,e){if(!(t in n))return;const i=Xn(n[t],U,e);return function(s){return R0(i(s),t)}}function Rn(n,t,e){if(!(t in n))return null;const i=Xn(n[t],mi,e);return function(s){return C0(i(s),t)}}function Mo(n,t,e){if(!(t in n))return null;const i=Xn(n[t],zt,e);return function(s){const r=i(s);if(typeof r!="boolean")throw new Error(`Expected a boolean for ${t}`);return r}}function T0(n,t,e){if(!(t in n))return null;const i=Xn(n[t],ae|mi,e);return function(s){return E0(i(s),t)}}function M0(n,t,e){if(!(t in n))return null;const i=Xn(n[t],kn,e);return function(s){return Yo(i(s),t)}}function Wa(n,t,e){if(!(t in n))return null;const i=Xn(n[t],kn,e);return function(s){const r=Yo(i(s),t);if(r.length!==2)throw new Error(`Expected two numbers for ${t}`);return r}}function pl(n,t,e){if(!(t in n))return null;const i=Xn(n[t],kn|U,e);return function(s){return uC(i(s),t)}}function qs(n,t){const e=n[t];if(e!==void 0){if(typeof e!="number")throw new Error(`Expected a number for ${t}`);return e}}function aC(n,t){const e=n[t];if(e!==void 0){if(typeof e=="number")return Xe(e);if(!Array.isArray(e))throw new Error(`Expected a number or size array for ${t}`);if(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number")throw new Error(`Expected a number or size array for ${t}`);return e}}function lC(n,t){const e=n[t];if(e!==void 0){if(typeof e!="string")throw new Error(`Expected a string for ${t}`);return e}}function Ud(n,t){const e=n[t];if(e!==void 0){if(e!=="bottom-left"&&e!=="bottom-right"&&e!=="top-left"&&e!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${t}`);return e}}function Yd(n,t){const e=n[t];if(e!==void 0){if(e!=="pixels"&&e!=="fraction")throw new Error(`Expected pixels or fraction for ${t}`);return e}}function hC(n,t){const e=n[t];if(e!==void 0)return Yo(e,t)}function au(n,t){const e=n[t];if(e!==void 0){if(typeof e!="string")throw new Error(`Expected a string for ${t}`);if(e!=="declutter"&&e!=="obstacle"&&e!=="none")throw new Error(`Expected declutter, obstacle, or none for ${t}`);return e}}function cC(n,t){const e=n[t];if(e!==void 0)return E0(e,t)}function Yo(n,t){if(!Array.isArray(n))throw new Error(`Expected an array for ${t}`);const e=n.length;for(let i=0;i<e;++i)if(typeof n[i]!="number")throw new Error(`Expected an array of numbers for ${t}`);return n}function C0(n,t){if(typeof n!="string")throw new Error(`Expected a string for ${t}`);return n}function R0(n,t){if(typeof n!="number")throw new Error(`Expected a number for ${t}`);return n}function E0(n,t){if(typeof n=="string")return n;const e=Yo(n,t),i=e.length;if(i<3||i>4)throw new Error(`Expected a color with 3 or 4 values for ${t}`);return e}function uC(n,t){if(typeof n=="number")return n;const e=Yo(n,t);if(e.length!==2)throw new Error(`Expected an array of two numbers for ${t}`);return e}const Vd={RENDER_ORDER:"renderOrder"};class dC extends cl{constructor(t){t=t||{};const e=Object.assign({},t);delete e.style,delete e.renderBuffer,delete e.updateWhileAnimating,delete e.updateWhileInteracting,super(e),this.declutter_=t.declutter!==void 0?t.declutter:!1,this.renderBuffer_=t.renderBuffer!==void 0?t.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(t.style),this.updateWhileAnimating_=t.updateWhileAnimating!==void 0?t.updateWhileAnimating:!1,this.updateWhileInteracting_=t.updateWhileInteracting!==void 0?t.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(t){return super.getFeatures(t)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(Vd.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(t){t.declutterTree||(t.declutterTree=new m0(9)),this.getRenderer().renderDeclutter(t)}setRenderOrder(t){this.set(Vd.RENDER_ORDER,t)}setStyle(t){this.style_=gC(t),this.styleFunction_=t===null?void 0:M2(this.style_),this.changed()}}function gC(n){if(n===void 0)return C2;if(!n)return null;if(typeof n=="function"||n instanceof Oe)return n;if(!Array.isArray(n))return Xd([n]);if(n.length===0)return[];const t=n.length,e=n[0];if(e instanceof Oe){const s=new Array(t);for(let r=0;r<t;++r){const o=n[r];if(!(o instanceof Oe))throw new Error("Expected a list of style instances");s[r]=o}return s}if("style"in e){const s=new Array(t);for(let r=0;r<t;++r){const o=n[r];if(!("style"in o))throw new Error("Expected a list of rules with a style property");s[r]=o}return tC(s)}return Xd(n)}const V={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},ma=[V.FILL],Ln=[V.STROKE],is=[V.BEGIN_PATH],jd=[V.CLOSE_PATH];class v0{drawCustom(t,e,i,s){}drawGeometry(t){}setStyle(t){}drawCircle(t,e){}drawFeature(t,e){}drawGeometryCollection(t,e){}drawLineString(t,e){}drawMultiLineString(t,e){}drawMultiPoint(t,e){}drawMultiPolygon(t,e){}drawPoint(t,e){}drawPolygon(t,e){}drawText(t,e){}setFillStrokeStyle(t,e){}setImageStyle(t,e){}setTextStyle(t,e){}}class Vo extends v0{constructor(t,e,i,s){super(),this.tolerance=t,this.maxExtent=e,this.pixelRatio=s,this.maxLineWidth=0,this.resolution=i,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_=null,this.bufferedMaxExtent_=null,this.instructions=[],this.coordinates=[],this.tmpCoordinate_=[],this.hitDetectionInstructions=[],this.state={}}applyPixelRatio(t){const e=this.pixelRatio;return e==1?t:t.map(function(i){return i*e})}appendFlatPointCoordinates(t,e){const i=this.getBufferedMaxExtent(),s=this.tmpCoordinate_,r=this.coordinates;let o=r.length;for(let a=0,l=t.length;a<l;a+=e)s[0]=t[a],s[1]=t[a+1],il(i,s)&&(r[o++]=s[0],r[o++]=s[1]);return o}appendFlatLineCoordinates(t,e,i,s,r,o){const a=this.coordinates;let l=a.length;const h=this.getBufferedMaxExtent();o&&(e+=s);let c=t[e],u=t[e+1];const g=this.tmpCoordinate_;let d=!0,f,m,y;for(f=e+s;f<i;f+=s)g[0]=t[f],g[1]=t[f+1],y=_h(h,g),y!==m?(d&&(a[l++]=c,a[l++]=u,d=!1),a[l++]=g[0],a[l++]=g[1]):y===Zt.INTERSECTING?(a[l++]=g[0],a[l++]=g[1],d=!1):d=!0,c=g[0],u=g[1],m=y;return(r&&d||f===e+s)&&(a[l++]=c,a[l++]=u),l}drawCustomCoordinates_(t,e,i,s,r){for(let o=0,a=i.length;o<a;++o){const l=i[o],h=this.appendFlatLineCoordinates(t,e,l,s,!1,!1);r.push(h),e=l}return e}drawCustom(t,e,i,s){this.beginGeometry(t,e);const r=t.getType(),o=t.getStride(),a=this.coordinates.length;let l,h,c,u,g;switch(r){case"MultiPolygon":l=t.getOrientedFlatCoordinates(),u=[];const d=t.getEndss();g=0;for(let f=0,m=d.length;f<m;++f){const y=[];g=this.drawCustomCoordinates_(l,g,d[f],o,y),u.push(y)}this.instructions.push([V.CUSTOM,a,u,t,i,Ph]),this.hitDetectionInstructions.push([V.CUSTOM,a,u,t,s||i,Ph]);break;case"Polygon":case"MultiLineString":c=[],l=r=="Polygon"?t.getOrientedFlatCoordinates():t.getFlatCoordinates(),g=this.drawCustomCoordinates_(l,0,t.getEnds(),o,c),this.instructions.push([V.CUSTOM,a,c,t,i,uo]),this.hitDetectionInstructions.push([V.CUSTOM,a,c,t,s||i,uo]);break;case"LineString":case"Circle":l=t.getFlatCoordinates(),h=this.appendFlatLineCoordinates(l,0,l.length,o,!1,!1),this.instructions.push([V.CUSTOM,a,h,t,i,vn]),this.hitDetectionInstructions.push([V.CUSTOM,a,h,t,s||i,vn]);break;case"MultiPoint":l=t.getFlatCoordinates(),h=this.appendFlatPointCoordinates(l,o),h>a&&(this.instructions.push([V.CUSTOM,a,h,t,i,vn]),this.hitDetectionInstructions.push([V.CUSTOM,a,h,t,s||i,vn]));break;case"Point":l=t.getFlatCoordinates(),this.coordinates.push(l[0],l[1]),h=this.coordinates.length,this.instructions.push([V.CUSTOM,a,h,t,i]),this.hitDetectionInstructions.push([V.CUSTOM,a,h,t,s||i]);break}this.endGeometry(e)}beginGeometry(t,e){this.beginGeometryInstruction1_=[V.BEGIN_GEOMETRY,e,0,t],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[V.BEGIN_GEOMETRY,e,0,t],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)}finish(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}}reverseHitDetectionInstructions(){const t=this.hitDetectionInstructions;t.reverse();let e;const i=t.length;let s,r,o=-1;for(e=0;e<i;++e)s=t[e],r=s[0],r==V.END_GEOMETRY?o=e:r==V.BEGIN_GEOMETRY&&(s[2]=e,pm(this.hitDetectionInstructions,o,e),o=-1)}setFillStrokeStyle(t,e){const i=this.state;if(t){const s=t.getColor();i.fillStyle=Ai(s||Se)}else i.fillStyle=void 0;if(e){const s=e.getColor();i.strokeStyle=Ai(s||fo);const r=e.getLineCap();i.lineCap=r!==void 0?r:mr;const o=e.getLineDash();i.lineDash=o?o.slice():on;const a=e.getLineDashOffset();i.lineDashOffset=a||an;const l=e.getLineJoin();i.lineJoin=l!==void 0?l:yr;const h=e.getWidth();i.lineWidth=h!==void 0?h:yo;const c=e.getMiterLimit();i.miterLimit=c!==void 0?c:go,i.lineWidth>this.maxLineWidth&&(this.maxLineWidth=i.lineWidth,this.bufferedMaxExtent_=null)}else i.strokeStyle=void 0,i.lineCap=void 0,i.lineDash=null,i.lineDashOffset=void 0,i.lineJoin=void 0,i.lineWidth=void 0,i.miterLimit=void 0}createFill(t){const e=t.fillStyle,i=[V.SET_FILL_STYLE,e];return typeof e!="string"&&i.push(!0),i}applyStroke(t){this.instructions.push(this.createStroke(t))}createStroke(t){return[V.SET_STROKE_STYLE,t.strokeStyle,t.lineWidth*this.pixelRatio,t.lineCap,t.lineJoin,t.miterLimit,this.applyPixelRatio(t.lineDash),t.lineDashOffset*this.pixelRatio]}updateFillStyle(t,e){const i=t.fillStyle;(typeof i!="string"||t.currentFillStyle!=i)&&(i!==void 0&&this.instructions.push(e.call(this,t)),t.currentFillStyle=i)}updateStrokeStyle(t,e){const i=t.strokeStyle,s=t.lineCap,r=t.lineDash,o=t.lineDashOffset,a=t.lineJoin,l=t.lineWidth,h=t.miterLimit;(t.currentStrokeStyle!=i||t.currentLineCap!=s||r!=t.currentLineDash&&!Bn(t.currentLineDash,r)||t.currentLineDashOffset!=o||t.currentLineJoin!=a||t.currentLineWidth!=l||t.currentMiterLimit!=h)&&(i!==void 0&&e.call(this,t),t.currentStrokeStyle=i,t.currentLineCap=s,t.currentLineDash=r,t.currentLineDashOffset=o,t.currentLineJoin=a,t.currentLineWidth=l,t.currentMiterLimit=h)}endGeometry(t){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;const e=[V.END_GEOMETRY,t];this.instructions.push(e),this.hitDetectionInstructions.push(e)}getBufferedMaxExtent(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=Ig(this.maxExtent),this.maxLineWidth>0)){const t=this.resolution*(this.maxLineWidth+1)/2;oo(this.bufferedMaxExtent_,t,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_}}class fC extends Vo{constructor(t,e,i,s){super(t,e,i,s),this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.anchorX_=void 0,this.anchorY_=void 0,this.height_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.scale_=void 0,this.width_=void 0,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}drawPoint(t,e){if(!this.image_)return;this.beginGeometry(t,e);const i=t.getFlatCoordinates(),s=t.getStride(),r=this.coordinates.length,o=this.appendFlatPointCoordinates(i,s);this.instructions.push([V.DRAW_IMAGE,r,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([V.DRAW_IMAGE,r,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(e)}drawMultiPoint(t,e){if(!this.image_)return;this.beginGeometry(t,e);const i=t.getFlatCoordinates(),s=t.getStride(),r=this.coordinates.length,o=this.appendFlatPointCoordinates(i,s);this.instructions.push([V.DRAW_IMAGE,r,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([V.DRAW_IMAGE,r,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(e)}finish(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,super.finish()}setImageStyle(t,e){const i=t.getAnchor(),s=t.getSize(),r=t.getOrigin();this.imagePixelRatio_=t.getPixelRatio(this.pixelRatio),this.anchorX_=i[0],this.anchorY_=i[1],this.hitDetectionImage_=t.getHitDetectionImage(),this.image_=t.getImage(this.pixelRatio),this.height_=s[1],this.opacity_=t.getOpacity(),this.originX_=r[0],this.originY_=r[1],this.rotateWithView_=t.getRotateWithView(),this.rotation_=t.getRotation(),this.scale_=t.getScaleArray(),this.width_=s[0],this.declutterMode_=t.getDeclutterMode(),this.declutterImageWithText_=e}}class mC extends Vo{constructor(t,e,i,s){super(t,e,i,s)}drawFlatCoordinates_(t,e,i,s){const r=this.coordinates.length,o=this.appendFlatLineCoordinates(t,e,i,s,!1,!1),a=[V.MOVE_TO_LINE_TO,r,o];return this.instructions.push(a),this.hitDetectionInstructions.push(a),i}drawLineString(t,e){const i=this.state,s=i.strokeStyle,r=i.lineWidth;if(s===void 0||r===void 0)return;this.updateStrokeStyle(i,this.applyStroke),this.beginGeometry(t,e),this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,on,an],is);const o=t.getFlatCoordinates(),a=t.getStride();this.drawFlatCoordinates_(o,0,o.length,a),this.hitDetectionInstructions.push(Ln),this.endGeometry(e)}drawMultiLineString(t,e){const i=this.state,s=i.strokeStyle,r=i.lineWidth;if(s===void 0||r===void 0)return;this.updateStrokeStyle(i,this.applyStroke),this.beginGeometry(t,e),this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,on,an],is);const o=t.getEnds(),a=t.getFlatCoordinates(),l=t.getStride();let h=0;for(let c=0,u=o.length;c<u;++c)h=this.drawFlatCoordinates_(a,h,o[c],l);this.hitDetectionInstructions.push(Ln),this.endGeometry(e)}finish(){const t=this.state;return t.lastStroke!=null&&t.lastStroke!=this.coordinates.length&&this.instructions.push(Ln),this.reverseHitDetectionInstructions(),this.state=null,super.finish()}applyStroke(t){t.lastStroke!=null&&t.lastStroke!=this.coordinates.length&&(this.instructions.push(Ln),t.lastStroke=this.coordinates.length),t.lastStroke=0,super.applyStroke(t),this.instructions.push(is)}}class qd extends Vo{constructor(t,e,i,s){super(t,e,i,s)}drawFlatCoordinatess_(t,e,i,s){const r=this.state,o=r.fillStyle!==void 0,a=r.strokeStyle!==void 0,l=i.length;this.instructions.push(is),this.hitDetectionInstructions.push(is);for(let h=0;h<l;++h){const c=i[h],u=this.coordinates.length,g=this.appendFlatLineCoordinates(t,e,c,s,!0,!a),d=[V.MOVE_TO_LINE_TO,u,g];this.instructions.push(d),this.hitDetectionInstructions.push(d),a&&(this.instructions.push(jd),this.hitDetectionInstructions.push(jd)),e=c}return o&&(this.instructions.push(ma),this.hitDetectionInstructions.push(ma)),a&&(this.instructions.push(Ln),this.hitDetectionInstructions.push(Ln)),e}drawCircle(t,e){const i=this.state,s=i.fillStyle,r=i.strokeStyle;if(s===void 0&&r===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(t,e),i.fillStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_FILL_STYLE,Se]),i.strokeStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,on,an]);const o=t.getFlatCoordinates(),a=t.getStride(),l=this.coordinates.length;this.appendFlatLineCoordinates(o,0,o.length,a,!1,!1);const h=[V.CIRCLE,l];this.instructions.push(is,h),this.hitDetectionInstructions.push(is,h),i.fillStyle!==void 0&&(this.instructions.push(ma),this.hitDetectionInstructions.push(ma)),i.strokeStyle!==void 0&&(this.instructions.push(Ln),this.hitDetectionInstructions.push(Ln)),this.endGeometry(e)}drawPolygon(t,e){const i=this.state,s=i.fillStyle,r=i.strokeStyle;if(s===void 0&&r===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(t,e),i.fillStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_FILL_STYLE,Se]),i.strokeStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,on,an]);const o=t.getEnds(),a=t.getOrientedFlatCoordinates(),l=t.getStride();this.drawFlatCoordinatess_(a,0,o,l),this.endGeometry(e)}drawMultiPolygon(t,e){const i=this.state,s=i.fillStyle,r=i.strokeStyle;if(s===void 0&&r===void 0)return;this.setFillStrokeStyles_(),this.beginGeometry(t,e),i.fillStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_FILL_STYLE,Se]),i.strokeStyle!==void 0&&this.hitDetectionInstructions.push([V.SET_STROKE_STYLE,i.strokeStyle,i.lineWidth,i.lineCap,i.lineJoin,i.miterLimit,on,an]);const o=t.getEndss(),a=t.getOrientedFlatCoordinates(),l=t.getStride();let h=0;for(let c=0,u=o.length;c<u;++c)h=this.drawFlatCoordinatess_(a,h,o[c],l);this.endGeometry(e)}finish(){this.reverseHitDetectionInstructions(),this.state=null;const t=this.tolerance;if(t!==0){const e=this.coordinates;for(let i=0,s=e.length;i<s;++i)e[i]=Zn(e[i],t)}return super.finish()}setFillStrokeStyles_(){const t=this.state;t.fillStyle!==void 0&&this.updateFillStyle(t,this.createFill),t.strokeStyle!==void 0&&this.updateStrokeStyle(t,this.applyStroke)}}function yC(n,t,e,i,s){const r=[];let o=e,a=0,l=t.slice(e,2);for(;a<n&&o+s<i;){const[h,c]=l.slice(-2),u=t[o+s],g=t[o+s+1],d=Math.sqrt((u-h)*(u-h)+(g-c)*(g-c));if(a+=d,a>=n){const f=(n-a+d)/d,m=We(h,u,f),y=We(c,g,f);l.push(m,y),r.push(l),l=[m,y],a==n&&(o+=s),a=0}else if(a<n)l.push(t[o+s],t[o+s+1]),o+=s;else{const f=d-a,m=We(h,u,f/d),y=We(c,g,f/d);l.push(m,y),r.push(l),l=[m,y],a=0,o+=s}}return a>0&&r.push(l),r}function wC(n,t,e,i,s){let r=e,o=e,a=0,l=0,h=e,c,u,g,d,f,m,y,_,p,x;for(u=e;u<i;u+=s){const M=t[u],C=t[u+1];f!==void 0&&(p=M-f,x=C-m,d=Math.sqrt(p*p+x*x),y!==void 0&&(l+=g,c=Math.acos((y*p+_*x)/(g*d)),c>n&&(l>a&&(a=l,r=h,o=u),l=0,h=u-s)),g=d,y=p,_=x),f=M,m=C}return l+=d,l>a?[h,u]:[r,o]}const Ba={left:0,center:.5,right:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1};class _C extends Vo{constructor(t,e,i,s){super(t,e,i,s),this.labels_=null,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=void 0,this.textRotation_=0,this.textFillState_=null,this.fillStates={},this.fillStates[Se]={fillStyle:Se},this.textStrokeState_=null,this.strokeStates={},this.textState_={},this.textStates={},this.textKey_="",this.fillKey_="",this.strokeKey_="",this.declutterImageWithText_=void 0}finish(){const t=super.finish();return t.textStates=this.textStates,t.fillStates=this.fillStates,t.strokeStates=this.strokeStates,t}drawText(t,e){const i=this.textFillState_,s=this.textStrokeState_,r=this.textState_;if(this.text_===""||!r||!i&&!s)return;const o=this.coordinates;let a=o.length;const l=t.getType();let h=null,c=t.getStride();if(r.placement==="line"&&(l=="LineString"||l=="MultiLineString"||l=="Polygon"||l=="MultiPolygon")){if(!Ne(this.getBufferedMaxExtent(),t.getExtent()))return;let u;if(h=t.getFlatCoordinates(),l=="LineString")u=[h.length];else if(l=="MultiLineString")u=t.getEnds();else if(l=="Polygon")u=t.getEnds().slice(0,1);else if(l=="MultiPolygon"){const m=t.getEndss();u=[];for(let y=0,_=m.length;y<_;++y)u.push(m[y][0])}this.beginGeometry(t,e);const g=r.repeat,d=g?void 0:r.textAlign;let f=0;for(let m=0,y=u.length;m<y;++m){let _;g?_=yC(g*this.resolution,h,f,u[m],c):_=[h.slice(f,u[m])];for(let p=0,x=_.length;p<x;++p){const M=_[p];let C=0,T=M.length;if(d==null){const v=wC(r.maxAngle,M,0,M.length,2);C=v[0],T=v[1]}for(let v=C;v<T;v+=c)o.push(M[v],M[v+1]);const R=o.length;f=u[m],this.drawChars_(a,R),a=R}}this.endGeometry(e)}else{let u=r.overflow?null:[];switch(l){case"Point":case"MultiPoint":h=t.getFlatCoordinates();break;case"LineString":h=t.getFlatMidpoint();break;case"Circle":h=t.getCenter();break;case"MultiLineString":h=t.getFlatMidpoints(),c=2;break;case"Polygon":h=t.getFlatInteriorPoint(),r.overflow||u.push(h[2]/this.resolution),c=3;break;case"MultiPolygon":const _=t.getFlatInteriorPoints();h=[];for(let p=0,x=_.length;p<x;p+=3)r.overflow||u.push(_[p+2]/this.resolution),h.push(_[p],_[p+1]);if(h.length===0)return;c=2;break}const g=this.appendFlatPointCoordinates(h,c);if(g===a)return;if(u&&(g-a)/2!==h.length/c){let _=a/2;u=u.filter((p,x)=>{const M=o[(_+x)*2]===h[x*c]&&o[(_+x)*2+1]===h[x*c+1];return M||--_,M})}this.saveTextStates_(),(r.backgroundFill||r.backgroundStroke)&&(this.setFillStrokeStyle(r.backgroundFill,r.backgroundStroke),r.backgroundFill&&this.updateFillStyle(this.state,this.createFill),r.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(t,e);let d=r.padding;if(d!=es&&(r.scale[0]<0||r.scale[1]<0)){let _=r.padding[0],p=r.padding[1],x=r.padding[2],M=r.padding[3];r.scale[0]<0&&(p=-p,M=-M),r.scale[1]<0&&(_=-_,x=-x),d=[_,p,x,M]}const f=this.pixelRatio;this.instructions.push([V.DRAW_IMAGE,a,g,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,void 0,this.declutterImageWithText_,d==es?es:d.map(function(_){return _*f}),!!r.backgroundFill,!!r.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,u]);const m=1/f,y=this.state.fillStyle;r.backgroundFill&&(this.state.fillStyle=Se,this.hitDetectionInstructions.push(this.createFill(this.state))),this.hitDetectionInstructions.push([V.DRAW_IMAGE,a,g,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[m,m],NaN,void 0,this.declutterImageWithText_,d,!!r.backgroundFill,!!r.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_?Se:this.fillKey_,this.textOffsetX_,this.textOffsetY_,u]),r.backgroundFill&&(this.state.fillStyle=y,this.hitDetectionInstructions.push(this.createFill(this.state))),this.endGeometry(e)}}saveTextStates_(){const t=this.textStrokeState_,e=this.textState_,i=this.textFillState_,s=this.strokeKey_;t&&(s in this.strokeStates||(this.strokeStates[s]={strokeStyle:t.strokeStyle,lineCap:t.lineCap,lineDashOffset:t.lineDashOffset,lineWidth:t.lineWidth,lineJoin:t.lineJoin,miterLimit:t.miterLimit,lineDash:t.lineDash}));const r=this.textKey_;r in this.textStates||(this.textStates[r]={font:e.font,textAlign:e.textAlign||mo,justify:e.justify,textBaseline:e.textBaseline||Na,scale:e.scale});const o=this.fillKey_;i&&(o in this.fillStates||(this.fillStates[o]={fillStyle:i.fillStyle}))}drawChars_(t,e){const i=this.textStrokeState_,s=this.textState_,r=this.strokeKey_,o=this.textKey_,a=this.fillKey_;this.saveTextStates_();const l=this.pixelRatio,h=Ba[s.textBaseline],c=this.textOffsetY_*l,u=this.text_,g=i?i.lineWidth*Math.abs(s.scale[0])/2:0;this.instructions.push([V.DRAW_CHARS,t,e,h,s.overflow,a,s.maxAngle,l,c,r,g*l,u,o,1]),this.hitDetectionInstructions.push([V.DRAW_CHARS,t,e,h,s.overflow,a&&Se,s.maxAngle,l,c,r,g*l,u,o,1/l])}setTextStyle(t,e){let i,s,r;if(!t)this.text_="";else{const o=t.getFill();o?(s=this.textFillState_,s||(s={},this.textFillState_=s),s.fillStyle=Ai(o.getColor()||Se)):(s=null,this.textFillState_=s);const a=t.getStroke();if(!a)r=null,this.textStrokeState_=r;else{r=this.textStrokeState_,r||(r={},this.textStrokeState_=r);const f=a.getLineDash(),m=a.getLineDashOffset(),y=a.getWidth(),_=a.getMiterLimit();r.lineCap=a.getLineCap()||mr,r.lineDash=f?f.slice():on,r.lineDashOffset=m===void 0?an:m,r.lineJoin=a.getLineJoin()||yr,r.lineWidth=y===void 0?yo:y,r.miterLimit=_===void 0?go:_,r.strokeStyle=Ai(a.getColor()||fo)}i=this.textState_;const l=t.getFont()||_f;uw(l);const h=t.getScaleArray();i.overflow=t.getOverflow(),i.font=l,i.maxAngle=t.getMaxAngle(),i.placement=t.getPlacement(),i.textAlign=t.getTextAlign(),i.repeat=t.getRepeat(),i.justify=t.getJustify(),i.textBaseline=t.getTextBaseline()||Na,i.backgroundFill=t.getBackgroundFill(),i.backgroundStroke=t.getBackgroundStroke(),i.padding=t.getPadding()||es,i.scale=h===void 0?[1,1]:h;const c=t.getOffsetX(),u=t.getOffsetY(),g=t.getRotateWithView(),d=t.getRotation();this.text_=t.getText()||"",this.textOffsetX_=c===void 0?0:c,this.textOffsetY_=u===void 0?0:u,this.textRotateWithView_=g===void 0?!1:g,this.textRotation_=d===void 0?0:d,this.strokeKey_=r?(typeof r.strokeStyle=="string"?r.strokeStyle:Mt(r.strokeStyle))+r.lineCap+r.lineDashOffset+"|"+r.lineWidth+r.lineJoin+r.miterLimit+"["+r.lineDash.join()+"]":"",this.textKey_=i.font+i.scale+(i.textAlign||"?")+(i.repeat||"?")+(i.justify||"?")+(i.textBaseline||"?"),this.fillKey_=s?typeof s.fillStyle=="string"?s.fillStyle:"|"+Mt(s.fillStyle):""}this.declutterImageWithText_=e}}const pC={Circle:qd,Default:Vo,Image:fC,LineString:mC,Polygon:qd,Text:_C};class Zd{constructor(t,e,i,s){this.tolerance_=t,this.maxExtent_=e,this.pixelRatio_=s,this.resolution_=i,this.buildersByZIndex_={}}finish(){const t={};for(const e in this.buildersByZIndex_){t[e]=t[e]||{};const i=this.buildersByZIndex_[e];for(const s in i){const r=i[s].finish();t[e][s]=r}}return t}getBuilder(t,e){const i=t!==void 0?t.toString():"0";let s=this.buildersByZIndex_[i];s===void 0&&(s={},this.buildersByZIndex_[i]=s);let r=s[e];if(r===void 0){const o=pC[e];r=new o(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),s[e]=r}return r}}class xC extends No{constructor(t){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=t,this.declutterExecutorGroup=null}getFeatures(t){return q()}getData(t){return null}prepareFrame(t){return q()}renderFrame(t,e){return q()}loadedTileCallback(t,e,i){t[e]||(t[e]={}),t[e][i.tileCoord.toString()]=i}createLoadedTileFinder(t,e,i){return((s,r)=>{const o=this.loadedTileCallback.bind(this,i,s);return t.forEachLoadedTile(e,s,r,o)})}forEachFeatureAtCoordinate(t,e,i,s,r){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(t){const e=t.target;(e.getState()===Q.LOADED||e.getState()===Q.ERROR)&&this.renderIfReadyAndVisible()}loadImage(t){let e=t.getState();return e!=Q.LOADED&&e!=Q.ERROR&&t.addEventListener($.CHANGE,this.boundHandleImageChange_),e==Q.IDLE&&(t.load(),e=t.getState()),e==Q.LOADED}renderIfReadyAndVisible(){const t=this.getLayer();t&&t.getVisible()&&t.getSourceState()==="ready"&&t.changed()}disposeInternal(){delete this.layer_,super.disposeInternal()}}const $d=[];let Bs=null;function TC(){Bs=Te(1,1,void 0,{willReadFrequently:!0})}class b0 extends xC{constructor(t){super(t),this.container=null,this.renderedResolution,this.tempTransform=yi(),this.pixelTransform=yi(),this.inversePixelTransform=yi(),this.context=null,this.containerReused=!1,this.pixelContext_=null,this.frameState=null}getImageData(t,e,i){Bs||TC(),Bs.clearRect(0,0,1,1);let s;try{Bs.drawImage(t,e,i,1,1,0,0,1,1),s=Bs.getImageData(0,0,1,1).data}catch{return Bs=null,null}return s}getBackground(t){let i=this.getLayer().getBackground();return typeof i=="function"&&(i=i(t.viewState.resolution)),i||void 0}useContainer(t,e,i){const s=this.getLayer().getClassName();let r,o;if(t&&t.className===s&&(!i||t&&t.style.backgroundColor&&Bn(ba(t.style.backgroundColor),ba(i)))){const a=t.firstElementChild;a instanceof HTMLCanvasElement&&(o=a.getContext("2d"))}if(o&&o.canvas.style.transform===e?(this.container=t,this.context=o,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){r=document.createElement("div"),r.className=s;let a=r.style;a.position="absolute",a.width="100%",a.height="100%",o=Te();const l=o.canvas;r.appendChild(l),a=l.style,a.position="absolute",a.left="0",a.transformOrigin="top left",this.container=r,this.context=o}!this.containerReused&&i&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=i)}clipUnrotated(t,e,i){const s=un(i),r=sl(i),o=Po(i),a=nl(i);$t(e.coordinateToPixelTransform,s),$t(e.coordinateToPixelTransform,r),$t(e.coordinateToPixelTransform,o),$t(e.coordinateToPixelTransform,a);const l=this.inversePixelTransform;$t(l,s),$t(l,r),$t(l,o),$t(l,a),t.save(),t.beginPath(),t.moveTo(Math.round(s[0]),Math.round(s[1])),t.lineTo(Math.round(r[0]),Math.round(r[1])),t.lineTo(Math.round(o[0]),Math.round(o[1])),t.lineTo(Math.round(a[0]),Math.round(a[1])),t.clip()}dispatchRenderEvent_(t,e,i){const s=this.getLayer();if(s.hasListener(t)){const r=new wf(t,this.inversePixelTransform,i,e);s.dispatchEvent(r)}}preRender(t,e){this.frameState=e,this.dispatchRenderEvent_(Pi.PRERENDER,t,e)}postRender(t,e){this.dispatchRenderEvent_(Pi.POSTRENDER,t,e)}getRenderTransform(t,e,i,s,r,o,a){const l=r/2,h=o/2,c=s/e,u=-c,g=-t[0]+a,d=-t[1];return hn(this.tempTransform,l,h,c,u,-i,g,d)}disposeInternal(){delete this.frameState,super.disposeInternal()}}function MC(n,t,e,i,s,r,o,a,l,h,c,u){let g=n[t],d=n[t+1],f=0,m=0,y=0,_=0;function p(){f=g,m=d,t+=i,g=n[t],d=n[t+1],_+=y,y=Math.sqrt((g-f)*(g-f)+(d-m)*(d-m))}do p();while(t<e-i&&_+y<r);let x=y===0?0:(r-_)/y;const M=We(f,g,x),C=We(m,d,x),T=t-i,R=_,v=r+a*l(h,s,c);for(;t<e-i&&_+y<v;)p();x=y===0?0:(v-_)/y;const P=We(f,g,x),S=We(m,d,x);let D;if(u){const H=[M,C,P,S];rf(H,0,4,2,u,H,H),D=H[0]>H[2]}else D=M>P;const N=Math.PI,B=[],lt=T+i===t;t=T,y=0,_=R,g=n[t],d=n[t+1];let z;if(lt){p(),z=Math.atan2(d-m,g-f),D&&(z+=z>0?-N:N);const H=(P+M)/2,F=(S+C)/2;return B[0]=[H,F,(v-r)/2,z,s],B}s=s.replace(/\n/g," ");for(let H=0,F=s.length;H<F;){p();let et=Math.atan2(d-m,g-f);if(D&&(et+=et>0?-N:N),z!==void 0){let ht=et-z;if(ht+=ht>N?-2*N:ht<-N?2*N:0,Math.abs(ht)>o)return null}z=et;const _t=H;let mt=0;for(;H<F;++H){const ht=D?F-H-1:H,Ot=a*l(h,s[ht],c);if(t+i<e&&_+y<r+mt+Ot/2)break;mt+=Ot}if(H===_t)continue;const Ut=D?s.substring(F-_t,F-H):s.substring(_t,H);x=y===0?0:(r+mt/2-_)/y;const O=We(f,g,x),Qt=We(m,d,x);B.push([O,Qt,mt/2,et,Ut]),r+=mt}return B}const Os=Ue(),wn=[],$i=[],Ji=[],_n=[];function Jd(n){return n[3].declutterBox}const Qd=new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");function oh(n,t){return t==="start"?t=Qd.test(n)?"right":"left":t==="end"&&(t=Qd.test(n)?"left":"right"),Ba[t]}function CC(n,t,e){return e>0&&n.push(`
`,""),n.push(t,""),n}class RC{constructor(t,e,i,s){this.overlaps=i,this.pixelRatio=e,this.resolution=t,this.alignFill_,this.instructions=s.instructions,this.coordinates=s.coordinates,this.coordinateCache_={},this.renderedTransform_=yi(),this.hitDetectionInstructions=s.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=s.fillStates||{},this.strokeStates=s.strokeStates||{},this.textStates=s.textStates||{},this.widths_={},this.labels_={}}createLabel(t,e,i,s){const r=t+e+i+s;if(this.labels_[r])return this.labels_[r];const o=s?this.strokeStates[s]:null,a=i?this.fillStates[i]:null,l=this.textStates[e],h=this.pixelRatio,c=[l.scale[0]*h,l.scale[1]*h],u=Array.isArray(t),g=l.justify?Ba[l.justify]:oh(Array.isArray(t)?t[0]:t,l.textAlign||mo),d=s&&o.lineWidth?o.lineWidth:0,f=u?t:t.split(`
`).reduce(CC,[]),{width:m,height:y,widths:_,heights:p,lineWidths:x}=gw(l,f),M=m+d,C=[],T=(M+2)*c[0],R=(y+d)*c[1],v={width:T<0?Math.floor(T):Math.ceil(T),height:R<0?Math.floor(R):Math.ceil(R),contextInstructions:C};(c[0]!=1||c[1]!=1)&&C.push("scale",c),s&&(C.push("strokeStyle",o.strokeStyle),C.push("lineWidth",d),C.push("lineCap",o.lineCap),C.push("lineJoin",o.lineJoin),C.push("miterLimit",o.miterLimit),C.push("setLineDash",[o.lineDash]),C.push("lineDashOffset",o.lineDashOffset)),i&&C.push("fillStyle",a.fillStyle),C.push("textBaseline","middle"),C.push("textAlign","center");const P=.5-g;let S=g*M+P*d;const D=[],N=[];let B=0,lt=0,z=0,H=0,F;for(let et=0,_t=f.length;et<_t;et+=2){const mt=f[et];if(mt===`
`){lt+=B,B=0,S=g*M+P*d,++H;continue}const Ut=f[et+1]||l.font;Ut!==F&&(s&&D.push("font",Ut),i&&N.push("font",Ut),F=Ut),B=Math.max(B,p[z]);const O=[mt,S+P*_[z]+g*(_[z]-x[H]),.5*(d+B)+lt];S+=_[z],s&&D.push("strokeText",O),i&&N.push("fillText",O),++z}return Array.prototype.push.apply(C,D),Array.prototype.push.apply(C,N),this.labels_[r]=v,v}replayTextBackground_(t,e,i,s,r,o,a){t.beginPath(),t.moveTo.apply(t,e),t.lineTo.apply(t,i),t.lineTo.apply(t,s),t.lineTo.apply(t,r),t.lineTo.apply(t,e),o&&(this.alignFill_=o[2],this.fill_(t)),a&&(this.setStrokeStyle_(t,a),t.stroke())}calculateImageOrLabelDimensions_(t,e,i,s,r,o,a,l,h,c,u,g,d,f,m,y){a*=g[0],l*=g[1];let _=i-a,p=s-l;const x=r+h>t?t-h:r,M=o+c>e?e-c:o,C=f[3]+x*g[0]+f[1],T=f[0]+M*g[1]+f[2],R=_-f[3],v=p-f[0];(m||u!==0)&&(wn[0]=R,_n[0]=R,wn[1]=v,$i[1]=v,$i[0]=R+C,Ji[0]=$i[0],Ji[1]=v+T,_n[1]=Ji[1]);let P;return u!==0?(P=hn(yi(),i,s,1,1,u,-i,-s),$t(P,wn),$t(P,$i),$t(P,Ji),$t(P,_n),ln(Math.min(wn[0],$i[0],Ji[0],_n[0]),Math.min(wn[1],$i[1],Ji[1],_n[1]),Math.max(wn[0],$i[0],Ji[0],_n[0]),Math.max(wn[1],$i[1],Ji[1],_n[1]),Os)):ln(Math.min(R,R+C),Math.min(v,v+T),Math.max(R,R+C),Math.max(v,v+T),Os),d&&(_=Math.round(_),p=Math.round(p)),{drawImageX:_,drawImageY:p,drawImageW:x,drawImageH:M,originX:h,originY:c,declutterBox:{minX:Os[0],minY:Os[1],maxX:Os[2],maxY:Os[3],value:y},canvasTransform:P,scale:g}}replayImageOrLabel_(t,e,i,s,r,o,a){const l=!!(o||a),h=s.declutterBox,c=t.canvas,u=a?a[2]*s.scale[0]/2:0;return h.minX-u<=c.width/e&&h.maxX+u>=0&&h.minY-u<=c.height/e&&h.maxY+u>=0&&(l&&this.replayTextBackground_(t,wn,$i,Ji,_n,o,a),fw(t,s.canvasTransform,r,i,s.originX,s.originY,s.drawImageW,s.drawImageH,s.drawImageX,s.drawImageY,s.scale)),!0}fill_(t){if(this.alignFill_){const e=$t(this.renderedTransform_,[0,0]),i=512*this.pixelRatio;t.save(),t.translate(e[0]%i,e[1]%i),t.rotate(this.viewRotation_)}t.fill(),this.alignFill_&&t.restore()}setStrokeStyle_(t,e){t.strokeStyle=e[1],t.lineWidth=e[2],t.lineCap=e[3],t.lineJoin=e[4],t.miterLimit=e[5],t.lineDashOffset=e[7],t.setLineDash(e[6])}drawLabelWithPointPlacement_(t,e,i,s){const r=this.textStates[e],o=this.createLabel(t,e,s,i),a=this.strokeStates[i],l=this.pixelRatio,h=oh(Array.isArray(t)?t[0]:t,r.textAlign||mo),c=Ba[r.textBaseline||Na],u=a&&a.lineWidth?a.lineWidth:0,g=o.width/l-2*r.scale[0],d=h*g+2*(.5-h)*u,f=c*o.height/l+2*(.5-c)*u;return{label:o,anchorX:d,anchorY:f}}execute_(t,e,i,s,r,o,a,l){let h;this.pixelCoordinates_&&Bn(i,this.renderedTransform_)?h=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),h=An(this.coordinates,0,this.coordinates.length,2,i,this.pixelCoordinates_),cy(this.renderedTransform_,i));let c=0;const u=s.length;let g=0,d,f,m,y,_,p,x,M,C,T,R,v,P=0,S=0,D=null,N=null;const B=this.coordinateCache_,lt=this.viewRotation_,z=Math.round(Math.atan2(-i[1],i[0])*1e12)/1e12,H={context:t,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:lt},F=this.instructions!=s||this.overlaps?0:200;let et,_t,mt,Ut;for(;c<u;){const O=s[c];switch(O[0]){case V.BEGIN_GEOMETRY:et=O[1],Ut=O[3],et.getGeometry()?a!==void 0&&!Ne(a,Ut.getExtent())?c=O[2]+1:++c:c=O[2];break;case V.BEGIN_PATH:P>F&&(this.fill_(t),P=0),S>F&&(t.stroke(),S=0),!P&&!S&&(t.beginPath(),y=NaN,_=NaN),++c;break;case V.CIRCLE:g=O[1];const ht=h[g],Ot=h[g+1],gn=h[g+2],ge=h[g+3],Yi=gn-ht,Vi=ge-Ot,Es=Math.sqrt(Yi*Yi+Vi*Vi);t.moveTo(ht+Es,Ot),t.arc(ht,Ot,Es,0,2*Math.PI,!0),++c;break;case V.CLOSE_PATH:t.closePath(),++c;break;case V.CUSTOM:g=O[1],d=O[2];const Zo=O[3],vs=O[4],$o=O.length==6?O[5]:void 0;H.geometry=Zo,H.feature=et,c in B||(B[c]=[]);const fn=B[c];$o?$o(h,g,d,2,fn):(fn[0]=h[g],fn[1]=h[g+1],fn.length=2),vs(fn,H),++c;break;case V.DRAW_IMAGE:g=O[1],d=O[2],M=O[3],f=O[4],m=O[5];let Gr=O[6];const mn=O[7],Jo=O[8],Qo=O[9],ta=O[10];let bs=O[11];const Pl=O[12];let Ce=O[13];const Ye=O[14],li=O[15];if(!M&&O.length>=20){C=O[19],T=O[20],R=O[21],v=O[22];const ke=this.drawLabelWithPointPlacement_(C,T,R,v);M=ke.label,O[3]=M;const Ss=O[23];f=(ke.anchorX-Ss)*this.pixelRatio,O[4]=f;const Ve=O[24];m=(ke.anchorY-Ve)*this.pixelRatio,O[5]=m,Gr=M.height,O[6]=Gr,Ce=M.width,O[13]=Ce}let ji;O.length>25&&(ji=O[25]);let Is,Yn,yn;O.length>17?(Is=O[16],Yn=O[17],yn=O[18]):(Is=es,Yn=!1,yn=!1),ta&&z?bs+=lt:!ta&&!z&&(bs-=lt);let Ls=0;for(;g<d;g+=2){if(ji&&ji[Ls++]<Ce/this.pixelRatio)continue;const ke=this.calculateImageOrLabelDimensions_(M.width,M.height,h[g],h[g+1],Ce,Gr,f,m,Jo,Qo,bs,Pl,r,Is,Yn||yn,et),Ss=[t,e,M,ke,mn,Yn?D:null,yn?N:null];if(l){if(Ye==="none")continue;if(Ye==="obstacle"){l.insert(ke.declutterBox);continue}else{let Ve,qi;if(li){const Ge=d-g;if(!li[Ge]){li[Ge]=Ss;continue}if(Ve=li[Ge],delete li[Ge],qi=Jd(Ve),l.collides(qi))continue}if(l.collides(ke.declutterBox))continue;Ve&&(l.insert(qi),this.replayImageOrLabel_.apply(this,Ve)),l.insert(ke.declutterBox)}}this.replayImageOrLabel_.apply(this,Ss)}++c;break;case V.DRAW_CHARS:const ea=O[1],fe=O[2],Kl=O[3],gm=O[4];v=O[5];const fm=O[6],Du=O[7],Fu=O[8];R=O[9];const Dl=O[10];C=O[11],T=O[12];const ku=[O[13],O[13]],Fl=this.textStates[T],zr=Fl.font,Wr=[Fl.scale[0]*Du,Fl.scale[1]*Du];let Br;zr in this.widths_?Br=this.widths_[zr]:(Br={},this.widths_[zr]=Br);const Gu=e0(h,ea,fe,2),zu=Math.abs(Wr[0])*md(zr,C,Br);if(gm||zu<=Gu){const ke=this.textStates[T].textAlign,Ss=(Gu-zu)*oh(C,ke),Ve=MC(h,ea,fe,2,C,Ss,fm,Math.abs(Wr[0]),md,zr,Br,z?0:this.viewRotation_);t:if(Ve){const qi=[];let Ge,ia,na,Re,je;if(R)for(Ge=0,ia=Ve.length;Ge<ia;++Ge){je=Ve[Ge],na=je[4],Re=this.createLabel(na,T,"",R),f=je[2]+(Wr[0]<0?-Dl:Dl),m=Kl*Re.height+(.5-Kl)*2*Dl*Wr[1]/Wr[0]-Fu;const Zi=this.calculateImageOrLabelDimensions_(Re.width,Re.height,je[0],je[1],Re.width,Re.height,f,m,0,0,je[3],ku,!1,es,!1,et);if(l&&l.collides(Zi.declutterBox))break t;qi.push([t,e,Re,Zi,1,null,null])}if(v)for(Ge=0,ia=Ve.length;Ge<ia;++Ge){je=Ve[Ge],na=je[4],Re=this.createLabel(na,T,v,""),f=je[2],m=Kl*Re.height-Fu;const Zi=this.calculateImageOrLabelDimensions_(Re.width,Re.height,je[0],je[1],Re.width,Re.height,f,m,0,0,je[3],ku,!1,es,!1,et);if(l&&l.collides(Zi.declutterBox))break t;qi.push([t,e,Re,Zi,1,null,null])}l&&l.load(qi.map(Jd));for(let Zi=0,mm=qi.length;Zi<mm;++Zi)this.replayImageOrLabel_.apply(this,qi[Zi])}}++c;break;case V.END_GEOMETRY:if(o!==void 0){et=O[1];const ke=o(et,Ut);if(ke)return ke}++c;break;case V.FILL:F?P++:this.fill_(t),++c;break;case V.MOVE_TO_LINE_TO:for(g=O[1],d=O[2],_t=h[g],mt=h[g+1],p=_t+.5|0,x=mt+.5|0,(p!==y||x!==_)&&(t.moveTo(_t,mt),y=p,_=x),g+=2;g<d;g+=2)_t=h[g],mt=h[g+1],p=_t+.5|0,x=mt+.5|0,(g==d-2||p!==y||x!==_)&&(t.lineTo(_t,mt),y=p,_=x);++c;break;case V.SET_FILL_STYLE:D=O,this.alignFill_=O[2],P&&(this.fill_(t),P=0,S&&(t.stroke(),S=0)),t.fillStyle=O[1],++c;break;case V.SET_STROKE_STYLE:N=O,S&&(t.stroke(),S=0),this.setStrokeStyle_(t,O),++c;break;case V.STROKE:F?S++:t.stroke(),++c;break;default:++c;break}}P&&this.fill_(t),S&&t.stroke()}execute(t,e,i,s,r,o){this.viewRotation_=s,this.execute_(t,e,i,this.instructions,r,void 0,void 0,o)}executeHitDetection(t,e,i,s,r){return this.viewRotation_=i,this.execute_(t,1,e,this.hitDetectionInstructions,!0,s,r)}}const ah=["Polygon","Circle","LineString","Image","Text","Default"];class tg{constructor(t,e,i,s,r,o){this.maxExtent_=t,this.overlaps_=s,this.pixelRatio_=i,this.resolution_=e,this.renderBuffer_=o,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=yi(),this.createExecutors_(r)}clip(t,e){const i=this.getClipCoords(e);t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(i[2],i[3]),t.lineTo(i[4],i[5]),t.lineTo(i[6],i[7]),t.clip()}createExecutors_(t){for(const e in t){let i=this.executorsByZIndex_[e];i===void 0&&(i={},this.executorsByZIndex_[e]=i);const s=t[e];for(const r in s){const o=s[r];i[r]=new RC(this.resolution_,this.pixelRatio_,this.overlaps_,o)}}}hasExecutors(t){for(const e in this.executorsByZIndex_){const i=this.executorsByZIndex_[e];for(let s=0,r=t.length;s<r;++s)if(t[s]in i)return!0}return!1}forEachFeatureAtCoordinate(t,e,i,s,r,o){s=Math.round(s);const a=s*2+1,l=hn(this.hitDetectionTransform_,s+.5,s+.5,1/e,-1/e,-i,-t[0],-t[1]),h=!this.hitDetectionContext_;h&&(this.hitDetectionContext_=Te(a,a,void 0,{willReadFrequently:!0}));const c=this.hitDetectionContext_;c.canvas.width!==a||c.canvas.height!==a?(c.canvas.width=a,c.canvas.height=a):h||c.clearRect(0,0,a,a);let u;this.renderBuffer_!==void 0&&(u=Ue(),io(u,t),oo(u,e*(this.renderBuffer_+s),u));const g=EC(s);let d;function f(C,T){const R=c.getImageData(0,0,a,a).data;for(let v=0,P=g.length;v<P;v++)if(R[g[v]]>0){if(!o||d!=="Image"&&d!=="Text"||o.includes(C)){const S=(g[v]-3)/4,D=s-S%a,N=s-(S/a|0),B=r(C,T,D*D+N*N);if(B)return B}c.clearRect(0,0,a,a);break}}const m=Object.keys(this.executorsByZIndex_).map(Number);m.sort(Pn);let y,_,p,x,M;for(y=m.length-1;y>=0;--y){const C=m[y].toString();for(p=this.executorsByZIndex_[C],_=ah.length-1;_>=0;--_)if(d=ah[_],x=p[d],x!==void 0&&(M=x.executeHitDetection(c,l,i,f,u),M))return M}}getClipCoords(t){const e=this.maxExtent_;if(!e)return null;const i=e[0],s=e[1],r=e[2],o=e[3],a=[i,s,i,o,r,o,r,s];return An(a,0,8,2,t,a),a}isEmpty(){return us(this.executorsByZIndex_)}execute(t,e,i,s,r,o,a){const l=Object.keys(this.executorsByZIndex_).map(Number);l.sort(Pn),this.maxExtent_&&(t.save(),this.clip(t,i)),o=o||ah;let h,c,u,g,d,f;for(a&&l.reverse(),h=0,c=l.length;h<c;++h){const m=l[h].toString();for(d=this.executorsByZIndex_[m],u=0,g=o.length;u<g;++u){const y=o[u];f=d[y],f!==void 0&&f.execute(t,e,i,s,r,a)}}this.maxExtent_&&t.restore()}}const lh={};function EC(n){if(lh[n]!==void 0)return lh[n];const t=n*2+1,e=n*n,i=new Array(e+1);for(let r=0;r<=n;++r)for(let o=0;o<=n;++o){const a=r*r+o*o;if(a>e)break;let l=i[a];l||(l=[],i[a]=l),l.push(((n+r)*t+(n+o))*4+3),r>0&&l.push(((n-r)*t+(n+o))*4+3),o>0&&(l.push(((n+r)*t+(n-o))*4+3),r>0&&l.push(((n-r)*t+(n-o))*4+3))}const s=[];for(let r=0,o=i.length;r<o;++r)i[r]&&s.push(...i[r]);return lh[n]=s,s}class vC extends v0{constructor(t,e,i,s,r,o,a){super(),this.context_=t,this.pixelRatio_=e,this.extent_=i,this.transform_=s,this.transformRotation_=s?rl(Math.atan2(s[1],s[0]),10):0,this.viewRotation_=r,this.squaredTolerance_=o,this.userTransform_=a,this.contextFillState_=null,this.contextStrokeState_=null,this.contextTextState_=null,this.fillState_=null,this.strokeState_=null,this.image_=null,this.imageAnchorX_=0,this.imageAnchorY_=0,this.imageHeight_=0,this.imageOpacity_=0,this.imageOriginX_=0,this.imageOriginY_=0,this.imageRotateWithView_=!1,this.imageRotation_=0,this.imageScale_=[0,0],this.imageWidth_=0,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=!1,this.textRotation_=0,this.textScale_=[0,0],this.textFillState_=null,this.textStrokeState_=null,this.textState_=null,this.pixelCoordinates_=[],this.tmpLocalTransform_=yi()}drawImages_(t,e,i,s){if(!this.image_)return;const r=An(t,e,i,s,this.transform_,this.pixelCoordinates_),o=this.context_,a=this.tmpLocalTransform_,l=o.globalAlpha;this.imageOpacity_!=1&&(o.globalAlpha=l*this.imageOpacity_);let h=this.imageRotation_;this.transformRotation_===0&&(h-=this.viewRotation_),this.imageRotateWithView_&&(h+=this.viewRotation_);for(let c=0,u=r.length;c<u;c+=2){const g=r[c]-this.imageAnchorX_,d=r[c+1]-this.imageAnchorY_;if(h!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){const f=g+this.imageAnchorX_,m=d+this.imageAnchorY_;hn(a,f,m,1,1,h,-f,-m),o.save(),o.transform.apply(o,a),o.translate(f,m),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.restore()}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,g,d,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(o.globalAlpha=l)}drawText_(t,e,i,s){if(!this.textState_||this.text_==="")return;this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);const r=An(t,e,i,s,this.transform_,this.pixelCoordinates_),o=this.context_;let a=this.textRotation_;for(this.transformRotation_===0&&(a-=this.viewRotation_),this.textRotateWithView_&&(a+=this.viewRotation_);e<i;e+=s){const l=r[e]+this.textOffsetX_,h=r[e+1]+this.textOffsetY_;a!==0||this.textScale_[0]!=1||this.textScale_[1]!=1?(o.save(),o.translate(l-this.textOffsetX_,h-this.textOffsetY_),o.rotate(a),o.translate(this.textOffsetX_,this.textOffsetY_),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.restore()):(this.textStrokeState_&&o.strokeText(this.text_,l,h),this.textFillState_&&o.fillText(this.text_,l,h))}}moveToLineTo_(t,e,i,s,r){const o=this.context_,a=An(t,e,i,s,this.transform_,this.pixelCoordinates_);o.moveTo(a[0],a[1]);let l=a.length;r&&(l-=2);for(let h=2;h<l;h+=2)o.lineTo(a[h],a[h+1]);return r&&o.closePath(),i}drawRings_(t,e,i,s){for(let r=0,o=i.length;r<o;++r)e=this.moveToLineTo_(t,e,i[r],s,!0);return e}drawCircle(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Ne(this.extent_,t.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const e=Uy(t,this.transform_,this.pixelCoordinates_),i=e[2]-e[0],s=e[3]-e[1],r=Math.sqrt(i*i+s*s),o=this.context_;o.beginPath(),o.arc(e[0],e[1],r,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}this.text_!==""&&this.drawText_(t.getCenter(),0,2,2)}}setStyle(t){this.setFillStrokeStyle(t.getFill(),t.getStroke()),this.setImageStyle(t.getImage()),this.setTextStyle(t.getText())}setTransform(t){this.transform_=t}drawGeometry(t){switch(t.getType()){case"Point":this.drawPoint(t);break;case"LineString":this.drawLineString(t);break;case"Polygon":this.drawPolygon(t);break;case"MultiPoint":this.drawMultiPoint(t);break;case"MultiLineString":this.drawMultiLineString(t);break;case"MultiPolygon":this.drawMultiPolygon(t);break;case"GeometryCollection":this.drawGeometryCollection(t);break;case"Circle":this.drawCircle(t);break}}drawFeature(t,e){const i=e.getGeometryFunction()(t);i&&(this.setStyle(e),this.drawGeometry(i))}drawGeometryCollection(t){const e=t.getGeometriesArray();for(let i=0,s=e.length;i<s;++i)this.drawGeometry(e[i])}drawPoint(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const e=t.getFlatCoordinates(),i=t.getStride();this.image_&&this.drawImages_(e,0,e.length,i),this.text_!==""&&this.drawText_(e,0,e.length,i)}drawMultiPoint(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const e=t.getFlatCoordinates(),i=t.getStride();this.image_&&this.drawImages_(e,0,e.length,i),this.text_!==""&&this.drawText_(e,0,e.length,i)}drawLineString(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Ne(this.extent_,t.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const e=this.context_,i=t.getFlatCoordinates();e.beginPath(),this.moveToLineTo_(i,0,i.length,t.getStride(),!1),e.stroke()}if(this.text_!==""){const e=t.getFlatMidpoint();this.drawText_(e,0,2,2)}}}drawMultiLineString(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));const e=t.getExtent();if(Ne(this.extent_,e)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);const i=this.context_,s=t.getFlatCoordinates();let r=0;const o=t.getEnds(),a=t.getStride();i.beginPath();for(let l=0,h=o.length;l<h;++l)r=this.moveToLineTo_(s,r,o[l],a,!1);i.stroke()}if(this.text_!==""){const i=t.getFlatMidpoints();this.drawText_(i,0,i.length,2)}}}drawPolygon(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Ne(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const e=this.context_;e.beginPath(),this.drawRings_(t.getOrientedFlatCoordinates(),0,t.getEnds(),t.getStride()),this.fillState_&&e.fill(),this.strokeState_&&e.stroke()}if(this.text_!==""){const e=t.getFlatInteriorPoint();this.drawText_(e,0,2,2)}}}drawMultiPolygon(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Ne(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);const e=this.context_,i=t.getOrientedFlatCoordinates();let s=0;const r=t.getEndss(),o=t.getStride();e.beginPath();for(let a=0,l=r.length;a<l;++a){const h=r[a];s=this.drawRings_(i,s,h,o)}this.fillState_&&e.fill(),this.strokeState_&&e.stroke()}if(this.text_!==""){const e=t.getFlatInteriorPoints();this.drawText_(e,0,e.length,2)}}}setContextFillState_(t){const e=this.context_,i=this.contextFillState_;i?i.fillStyle!=t.fillStyle&&(i.fillStyle=t.fillStyle,e.fillStyle=t.fillStyle):(e.fillStyle=t.fillStyle,this.contextFillState_={fillStyle:t.fillStyle})}setContextStrokeState_(t){const e=this.context_,i=this.contextStrokeState_;i?(i.lineCap!=t.lineCap&&(i.lineCap=t.lineCap,e.lineCap=t.lineCap),Bn(i.lineDash,t.lineDash)||e.setLineDash(i.lineDash=t.lineDash),i.lineDashOffset!=t.lineDashOffset&&(i.lineDashOffset=t.lineDashOffset,e.lineDashOffset=t.lineDashOffset),i.lineJoin!=t.lineJoin&&(i.lineJoin=t.lineJoin,e.lineJoin=t.lineJoin),i.lineWidth!=t.lineWidth&&(i.lineWidth=t.lineWidth,e.lineWidth=t.lineWidth),i.miterLimit!=t.miterLimit&&(i.miterLimit=t.miterLimit,e.miterLimit=t.miterLimit),i.strokeStyle!=t.strokeStyle&&(i.strokeStyle=t.strokeStyle,e.strokeStyle=t.strokeStyle)):(e.lineCap=t.lineCap,e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.strokeStyle=t.strokeStyle,this.contextStrokeState_={lineCap:t.lineCap,lineDash:t.lineDash,lineDashOffset:t.lineDashOffset,lineJoin:t.lineJoin,lineWidth:t.lineWidth,miterLimit:t.miterLimit,strokeStyle:t.strokeStyle})}setContextTextState_(t){const e=this.context_,i=this.contextTextState_,s=t.textAlign?t.textAlign:mo;i?(i.font!=t.font&&(i.font=t.font,e.font=t.font),i.textAlign!=s&&(i.textAlign=s,e.textAlign=s),i.textBaseline!=t.textBaseline&&(i.textBaseline=t.textBaseline,e.textBaseline=t.textBaseline)):(e.font=t.font,e.textAlign=s,e.textBaseline=t.textBaseline,this.contextTextState_={font:t.font,textAlign:s,textBaseline:t.textBaseline})}setFillStrokeStyle(t,e){if(!t)this.fillState_=null;else{const i=t.getColor();this.fillState_={fillStyle:Ai(i||Se)}}if(!e)this.strokeState_=null;else{const i=e.getColor(),s=e.getLineCap(),r=e.getLineDash(),o=e.getLineDashOffset(),a=e.getLineJoin(),l=e.getWidth(),h=e.getMiterLimit(),c=r||on;this.strokeState_={lineCap:s!==void 0?s:mr,lineDash:this.pixelRatio_===1?c:c.map(u=>u*this.pixelRatio_),lineDashOffset:(o||an)*this.pixelRatio_,lineJoin:a!==void 0?a:yr,lineWidth:(l!==void 0?l:yo)*this.pixelRatio_,miterLimit:h!==void 0?h:go,strokeStyle:Ai(i||fo)}}}setImageStyle(t){let e;if(!t||!(e=t.getSize())){this.image_=null;return}const i=t.getPixelRatio(this.pixelRatio_),s=t.getAnchor(),r=t.getOrigin();this.image_=t.getImage(this.pixelRatio_),this.imageAnchorX_=s[0]*i,this.imageAnchorY_=s[1]*i,this.imageHeight_=e[1]*i,this.imageOpacity_=t.getOpacity(),this.imageOriginX_=r[0],this.imageOriginY_=r[1],this.imageRotateWithView_=t.getRotateWithView(),this.imageRotation_=t.getRotation();const o=t.getScaleArray();this.imageScale_=[o[0]*this.pixelRatio_/i,o[1]*this.pixelRatio_/i],this.imageWidth_=e[0]*i}setTextStyle(t){if(!t)this.text_="";else{const e=t.getFill();if(!e)this.textFillState_=null;else{const d=e.getColor();this.textFillState_={fillStyle:Ai(d||Se)}}const i=t.getStroke();if(!i)this.textStrokeState_=null;else{const d=i.getColor(),f=i.getLineCap(),m=i.getLineDash(),y=i.getLineDashOffset(),_=i.getLineJoin(),p=i.getWidth(),x=i.getMiterLimit();this.textStrokeState_={lineCap:f!==void 0?f:mr,lineDash:m||on,lineDashOffset:y||an,lineJoin:_!==void 0?_:yr,lineWidth:p!==void 0?p:yo,miterLimit:x!==void 0?x:go,strokeStyle:Ai(d||fo)}}const s=t.getFont(),r=t.getOffsetX(),o=t.getOffsetY(),a=t.getRotateWithView(),l=t.getRotation(),h=t.getScaleArray(),c=t.getText(),u=t.getTextAlign(),g=t.getTextBaseline();this.textState_={font:s!==void 0?s:_f,textAlign:u!==void 0?u:mo,textBaseline:g!==void 0?g:Na},this.text_=c!==void 0?Array.isArray(c)?c.reduce((d,f,m)=>d+=m%2?" ":f,""):c:"",this.textOffsetX_=r!==void 0?this.pixelRatio_*r:0,this.textOffsetY_=o!==void 0?this.pixelRatio_*o:0,this.textRotateWithView_=a!==void 0?a:!1,this.textRotation_=l!==void 0?l:0,this.textScale_=[this.pixelRatio_*h[0],this.pixelRatio_*h[1]]}}}const Ii=.5;function bC(n,t,e,i,s,r,o){const a=n[0]*Ii,l=n[1]*Ii,h=Te(a,l);h.imageSmoothingEnabled=!1;const c=h.canvas,u=new vC(h,Ii,s,null,o),g=e.length,d=Math.floor((256*256*256-1)/g),f={};for(let y=1;y<=g;++y){const _=e[y-1],p=_.getStyleFunction()||i;if(!p)continue;let x=p(_,r);if(!x)continue;Array.isArray(x)||(x=[x]);const C=(y*d).toString(16).padStart(7,"#00000");for(let T=0,R=x.length;T<R;++T){const v=x[T],P=v.getGeometryFunction()(_);if(!P||!Ne(s,P.getExtent()))continue;const S=v.clone(),D=S.getFill();D&&D.setColor(C);const N=S.getStroke();N&&(N.setColor(C),N.setLineDash(null)),S.setText(void 0);const B=v.getImage();if(B){const F=B.getImageSize();if(!F)continue;const et=Te(F[0],F[1],void 0,{alpha:!1}),_t=et.canvas;et.fillStyle=C,et.fillRect(0,0,_t.width,_t.height),S.setImage(new yl({img:_t,anchor:B.getAnchor(),anchorXUnits:"pixels",anchorYUnits:"pixels",offset:B.getOrigin(),opacity:1,size:B.getSize(),scale:B.getScale(),rotation:B.getRotation(),rotateWithView:B.getRotateWithView()}))}const lt=S.getZIndex()||0;let z=f[lt];z||(z={},f[lt]=z,z.Polygon=[],z.Circle=[],z.LineString=[],z.Point=[]);const H=P.getType();if(H==="GeometryCollection"){const F=P.getGeometriesArrayRecursive();for(let et=0,_t=F.length;et<_t;++et){const mt=F[et];z[mt.getType().replace("Multi","")].push(mt,S)}}else z[H.replace("Multi","")].push(P,S)}}const m=Object.keys(f).map(Number).sort(Pn);for(let y=0,_=m.length;y<_;++y){const p=f[m[y]];for(const x in p){const M=p[x];for(let C=0,T=M.length;C<T;C+=2){u.setStyle(M[C+1]);for(let R=0,v=t.length;R<v;++R)u.setTransform(t[R]),u.drawGeometry(M[C])}}}return h.getImageData(0,0,c.width,c.height)}function IC(n,t,e){const i=[];if(e){const s=Math.floor(Math.round(n[0])*Ii),r=Math.floor(Math.round(n[1])*Ii),o=(Gt(s,0,e.width-1)+Gt(r,0,e.height-1)*e.width)*4,a=e.data[o],l=e.data[o+1],c=e.data[o+2]+256*(l+256*a),u=Math.floor((256*256*256-1)/t.length);c&&c%u===0&&i.push(t[c/u-1])}return i}const LC=.5,I0={Point:kC,LineString:KC,Polygon:zC,MultiPoint:GC,MultiLineString:DC,MultiPolygon:FC,GeometryCollection:PC,Circle:AC};function SC(n,t){return parseInt(Mt(n),10)-parseInt(Mt(t),10)}function NC(n,t){const e=ic(n,t);return e*e}function ic(n,t){return LC*n/t}function AC(n,t,e,i,s){const r=e.getFill(),o=e.getStroke();if(r||o){const l=n.getBuilder(e.getZIndex(),"Circle");l.setFillStrokeStyle(r,o),l.drawCircle(t,i)}const a=e.getText();if(a&&a.getText()){const l=(s||n).getBuilder(e.getZIndex(),"Text");l.setTextStyle(a),l.drawText(t,i)}}function eg(n,t,e,i,s,r,o){let a=!1;const l=e.getImage();if(l){const h=l.getImageState();h==Q.LOADED||h==Q.ERROR?l.unlistenImageChange(s):(h==Q.IDLE&&l.load(),l.listenImageChange(s),a=!0)}return OC(n,t,e,i,r,o),a}function OC(n,t,e,i,s,r){const o=e.getGeometryFunction()(t);if(!o)return;const a=o.simplifyTransformed(i,s);if(e.getRenderer())L0(n,a,e,t);else{const h=I0[a.getType()];h(n,a,e,t,r)}}function L0(n,t,e,i){if(t.getType()=="GeometryCollection"){const r=t.getGeometries();for(let o=0,a=r.length;o<a;++o)L0(n,r[o],e,i);return}n.getBuilder(e.getZIndex(),"Default").drawCustom(t,i,e.getRenderer(),e.getHitDetectionRenderer())}function PC(n,t,e,i,s){const r=t.getGeometriesArray();let o,a;for(o=0,a=r.length;o<a;++o){const l=I0[r[o].getType()];l(n,r[o],e,i,s)}}function KC(n,t,e,i,s){const r=e.getStroke();if(r){const a=n.getBuilder(e.getZIndex(),"LineString");a.setFillStrokeStyle(null,r),a.drawLineString(t,i)}const o=e.getText();if(o&&o.getText()){const a=(s||n).getBuilder(e.getZIndex(),"Text");a.setTextStyle(o),a.drawText(t,i)}}function DC(n,t,e,i,s){const r=e.getStroke();if(r){const a=n.getBuilder(e.getZIndex(),"LineString");a.setFillStrokeStyle(null,r),a.drawMultiLineString(t,i)}const o=e.getText();if(o&&o.getText()){const a=(s||n).getBuilder(e.getZIndex(),"Text");a.setTextStyle(o),a.drawText(t,i)}}function FC(n,t,e,i,s){const r=e.getFill(),o=e.getStroke();if(o||r){const l=n.getBuilder(e.getZIndex(),"Polygon");l.setFillStrokeStyle(r,o),l.drawMultiPolygon(t,i)}const a=e.getText();if(a&&a.getText()){const l=(s||n).getBuilder(e.getZIndex(),"Text");l.setTextStyle(a),l.drawText(t,i)}}function kC(n,t,e,i,s){const r=e.getImage(),o=e.getText();let a;if(r){if(r.getImageState()!=Q.LOADED)return;let l=n;if(s){const c=r.getDeclutterMode();if(c!=="none")if(l=s,c==="obstacle"){const u=n.getBuilder(e.getZIndex(),"Image");u.setImageStyle(r,a),u.drawPoint(t,i)}else o&&o.getText()&&(a={})}const h=l.getBuilder(e.getZIndex(),"Image");h.setImageStyle(r,a),h.drawPoint(t,i)}if(o&&o.getText()){let l=n;s&&(l=s);const h=l.getBuilder(e.getZIndex(),"Text");h.setTextStyle(o,a),h.drawText(t,i)}}function GC(n,t,e,i,s){const r=e.getImage(),o=e.getText();let a;if(r){if(r.getImageState()!=Q.LOADED)return;let l=n;if(s){const c=r.getDeclutterMode();if(c!=="none")if(l=s,c==="obstacle"){const u=n.getBuilder(e.getZIndex(),"Image");u.setImageStyle(r,a),u.drawMultiPoint(t,i)}else o&&o.getText()&&(a={})}const h=l.getBuilder(e.getZIndex(),"Image");h.setImageStyle(r,a),h.drawMultiPoint(t,i)}if(o&&o.getText()){let l=n;s&&(l=s);const h=l.getBuilder(e.getZIndex(),"Text");h.setTextStyle(o,a),h.drawText(t,i)}}function zC(n,t,e,i,s){const r=e.getFill(),o=e.getStroke();if(r||o){const l=n.getBuilder(e.getZIndex(),"Polygon");l.setFillStrokeStyle(r,o),l.drawPolygon(t,i)}const a=e.getText();if(a&&a.getText()){const l=(s||n).getBuilder(e.getZIndex(),"Text");l.setTextStyle(a),l.drawText(t,i)}}class WC extends b0{constructor(t){super(t),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=Ue(),this.wrappedRenderedExtent_=Ue(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedRenderOrder_=null,this.replayGroup_=null,this.replayGroupChanged=!0,this.declutterExecutorGroup=null,this.clipping=!0,this.compositionContext_=null,this.opacity_=1}renderWorlds(t,e,i){const s=e.extent,r=e.viewState,o=r.center,a=r.resolution,l=r.projection,h=r.rotation,c=l.getExtent(),u=this.getLayer().getSource(),g=e.pixelRatio,d=e.viewHints,f=!(d[re.ANIMATING]||d[re.INTERACTING]),m=this.compositionContext_,y=Math.round(e.size[0]*g),_=Math.round(e.size[1]*g),p=u.getWrapX()&&l.canWrapX(),x=p?wt(c):null,M=p?Math.ceil((s[2]-c[2])/x)+1:1;let C=p?Math.floor((s[0]-c[0])/x):0;do{const T=this.getRenderTransform(o,a,h,g,y,_,C*x);t.execute(m,1,T,h,f,void 0,i)}while(++C<M)}setupCompositionContext_(){if(this.opacity_!==1){const t=Te(this.context.canvas.width,this.context.canvas.height,$d);this.compositionContext_=t}else this.compositionContext_=this.context}releaseCompositionContext_(){if(this.opacity_!==1){const t=this.context.globalAlpha;this.context.globalAlpha=this.opacity_,this.context.drawImage(this.compositionContext_.canvas,0,0),this.context.globalAlpha=t,tl(this.compositionContext_),$d.push(this.compositionContext_.canvas),this.compositionContext_=null}}renderDeclutter(t){this.declutterExecutorGroup&&(this.setupCompositionContext_(),this.renderWorlds(this.declutterExecutorGroup,t,t.declutterTree),this.releaseCompositionContext_())}renderFrame(t,e){const i=t.pixelRatio,s=t.layerStatesArray[t.layerIndex];uy(this.pixelTransform,1/i,1/i),Rc(this.inversePixelTransform,this.pixelTransform);const r=Bg(this.pixelTransform);this.useContainer(e,r,this.getBackground(t));const o=this.context,a=o.canvas,l=this.replayGroup_,h=this.declutterExecutorGroup;let c=l&&!l.isEmpty()||h&&!h.isEmpty();if(!c&&!(this.getLayer().hasListener(Pi.PRERENDER)||this.getLayer().hasListener(Pi.POSTRENDER)))return null;const u=Math.round(t.size[0]*i),g=Math.round(t.size[1]*i);a.width!=u||a.height!=g?(a.width=u,a.height=g,a.style.transform!==r&&(a.style.transform=r)):this.containerReused||o.clearRect(0,0,u,g),this.preRender(o,t);const d=t.viewState;d.projection,this.opacity_=s.opacity,this.setupCompositionContext_();let f=!1;if(c&&s.extent&&this.clipping){const m=Jn(s.extent);c=Ne(m,t.extent),f=c&&!fi(m,t.extent),f&&this.clipUnrotated(this.compositionContext_,t,m)}return c&&this.renderWorlds(l,t),f&&this.compositionContext_.restore(),this.releaseCompositionContext_(),this.postRender(o,t),this.renderedRotation_!==d.rotation&&(this.renderedRotation_=d.rotation,this.hitDetectionImageData_=null),this.container}getFeatures(t){return new Promise(e=>{if(!this.hitDetectionImageData_&&!this.animatingOrInteracting_){const i=[this.context.canvas.width,this.context.canvas.height];$t(this.pixelTransform,i);const s=this.renderedCenter_,r=this.renderedResolution_,o=this.renderedRotation_,a=this.renderedProjection_,l=this.wrappedRenderedExtent_,h=this.getLayer(),c=[],u=i[0]*Ii,g=i[1]*Ii;c.push(this.getRenderTransform(s,r,o,Ii,u,g,0).slice());const d=h.getSource(),f=a.getExtent();if(d.getWrapX()&&a.canWrapX()&&!fi(f,l)){let m=l[0];const y=wt(f);let _=0,p;for(;m<f[0];)--_,p=y*_,c.push(this.getRenderTransform(s,r,o,Ii,u,g,p).slice()),m+=y;for(_=0,m=l[2];m>f[2];)++_,p=y*_,c.push(this.getRenderTransform(s,r,o,Ii,u,g,p).slice()),m-=y}this.hitDetectionImageData_=bC(i,c,this.renderedFeatures_,h.getStyleFunction(),l,r,o)}e(IC(t,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(t,e,i,s,r){if(!this.replayGroup_)return;const o=e.viewState.resolution,a=e.viewState.rotation,l=this.getLayer(),h={},c=function(d,f,m){const y=Mt(d),_=h[y];if(_){if(_!==!0&&m<_.distanceSq){if(m===0)return h[y]=!0,r.splice(r.lastIndexOf(_),1),s(d,l,f);_.geometry=f,_.distanceSq=m}}else{if(m===0)return h[y]=!0,s(d,l,f);r.push(h[y]={feature:d,layer:l,geometry:f,distanceSq:m,callback:s})}};let u;const g=[this.replayGroup_];return this.declutterExecutorGroup&&g.push(this.declutterExecutorGroup),g.some(d=>u=d.forEachFeatureAtCoordinate(t,o,a,i,c,d===this.declutterExecutorGroup&&e.declutterTree?e.declutterTree.all().map(f=>f.value):null)),u}handleFontsChanged(){const t=this.getLayer();t.getVisible()&&this.replayGroup_&&t.changed()}handleStyleImageChange_(t){this.renderIfReadyAndVisible()}prepareFrame(t){const e=this.getLayer(),i=e.getSource();if(!i)return!1;const s=t.viewHints[re.ANIMATING],r=t.viewHints[re.INTERACTING],o=e.getUpdateWhileAnimating(),a=e.getUpdateWhileInteracting();if(this.ready&&!o&&s||!a&&r)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;const l=t.extent,h=t.viewState,c=h.projection,u=h.resolution,g=t.pixelRatio,d=e.getRevision(),f=e.getRenderBuffer();let m=e.getRenderOrder();m===void 0&&(m=SC);const y=h.center.slice(),_=oo(l,f*u),p=_.slice(),x=[_.slice()],M=c.getExtent();if(i.getWrapX()&&c.canWrapX()&&!fi(M,t.extent)){const z=wt(M),H=Math.max(wt(_)/2,z);_[0]=M[0]-H,_[2]=M[2]+H,Kg(y,c);const F=Og(x[0],c);F[0]<M[0]&&F[2]<M[2]?x.push([F[0]+z,F[1],F[2]+z,F[3]]):F[0]>M[0]&&F[2]>M[2]&&x.push([F[0]-z,F[1],F[2]-z,F[3]])}if(this.ready&&this.renderedResolution_==u&&this.renderedRevision_==d&&this.renderedRenderOrder_==m&&fi(this.wrappedRenderedExtent_,_))return Bn(this.renderedExtent_,p)||(this.hitDetectionImageData_=null,this.renderedExtent_=p),this.renderedCenter_=y,this.replayGroupChanged=!1,!0;this.replayGroup_=null;const C=new Zd(ic(u,g),_,u,g);let T;this.getLayer().getDeclutter()&&(T=new Zd(ic(u,g),_,u,g));let R;for(let z=0,H=x.length;z<H;++z)i.loadFeatures(x[z],u,c);const v=NC(u,g);let P=!0;const S=z=>{let H;const F=z.getStyleFunction()||e.getStyleFunction();if(F&&(H=F(z,u)),H){const et=this.renderFeature(z,v,H,C,R,T);P=P&&!et}},D=Wg(_),N=i.getFeaturesInExtent(D);m&&N.sort(m);for(let z=0,H=N.length;z<H;++z)S(N[z]);this.renderedFeatures_=N,this.ready=P;const B=C.finish(),lt=new tg(_,u,g,i.getOverlaps(),B,e.getRenderBuffer());return T&&(this.declutterExecutorGroup=new tg(_,u,g,i.getOverlaps(),T.finish(),e.getRenderBuffer())),this.renderedResolution_=u,this.renderedRevision_=d,this.renderedRenderOrder_=m,this.renderedExtent_=p,this.wrappedRenderedExtent_=_,this.renderedCenter_=y,this.renderedProjection_=c,this.replayGroup_=lt,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(t,e,i,s,r,o){if(!i)return!1;let a=!1;if(Array.isArray(i))for(let l=0,h=i.length;l<h;++l)a=eg(s,t,i[l],e,this.boundHandleStyleImageChange_,r,o)||a;else a=eg(s,t,i,e,this.boundHandleStyleImageChange_,r,o);return a}}class ig extends dC{constructor(t){super(t)}createRenderer(){return new WC(this)}}class ng{constructor(t){this.rbush_=new m0(t),this.items_={}}insert(t,e){const i={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(i),this.items_[Mt(e)]=i}load(t,e){const i=new Array(e.length);for(let s=0,r=e.length;s<r;s++){const o=t[s],a=e[s],l={minX:o[0],minY:o[1],maxX:o[2],maxY:o[3],value:a};i[s]=l,this.items_[Mt(a)]=l}this.rbush_.load(i)}remove(t){const e=Mt(t),i=this.items_[e];return delete this.items_[e],this.rbush_.remove(i)!==null}update(t,e){const i=this.items_[Mt(e)],s=[i.minX,i.minY,i.maxX,i.maxY];ds(s,t)||(this.remove(e),this.insert(t,e))}getAll(){return this.rbush_.all().map(function(e){return e.value})}getInExtent(t){const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this.rbush_.search(e).map(function(s){return s.value})}forEach(t){return this.forEach_(this.getAll(),t)}forEachInExtent(t,e){return this.forEach_(this.getInExtent(t),e)}forEach_(t,e){let i;for(let s=0,r=t.length;s<r;s++)if(i=e(t[s]),i)return i;return i}isEmpty(){return us(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(t){const e=this.rbush_.toJSON();return ln(e.minX,e.minY,e.maxX,e.maxY,t)}concat(t){this.rbush_.load(t.rbush_.all());for(const e in t.items_)this.items_[e]=t.items_[e]}}class lu extends xi{constructor(t){super(),this.projection=at(t.projection),this.attributions_=sg(t.attributions),this.attributionsCollapsible_=t.attributionsCollapsible!==void 0?t.attributionsCollapsible:!0,this.loading=!1,this.state_=t.state!==void 0?t.state:"ready",this.wrapX_=t.wrapX!==void 0?t.wrapX:!1,this.interpolate_=!!t.interpolate,this.viewResolver=null,this.viewRejector=null;const e=this;this.viewPromise_=new Promise(function(i,s){e.viewResolver=i,e.viewRejector=s})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(t){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(t){this.attributions_=sg(t),this.changed()}setState(t){this.state_=t,this.changed()}}function sg(n){return n?Array.isArray(n)?function(t){return n}:typeof n=="function"?n:function(t){return[n]}:null}const hi={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function BC(n,t){return[[-1/0,-1/0,1/0,1/0]]}function HC(n,t){return[n]}let XC=!1;function UC(n,t,e,i,s,r,o){const a=new XMLHttpRequest;a.open("GET",typeof n=="function"?n(e,i,s):n,!0),t.getType()=="arraybuffer"&&(a.responseType="arraybuffer"),a.withCredentials=XC,a.onload=function(l){if(!a.status||a.status>=200&&a.status<300){const h=t.getType();let c;h=="json"?c=JSON.parse(a.responseText):h=="text"?c=a.responseText:h=="xml"?(c=a.responseXML,c||(c=new DOMParser().parseFromString(a.responseText,"application/xml"))):h=="arraybuffer"&&(c=a.response),c?r(t.readFeatures(c,{extent:e,featureProjection:s}),t.readProjection(c)):o()}else o()},a.onerror=o,a.send()}function rg(n,t){return function(e,i,s,r,o){const a=this;UC(n,t,e,i,s,function(l,h){a.addFeatures(l),r!==void 0&&r(l)},o||hr)}}class pn extends Hi{constructor(t,e,i){super(t),this.feature=e,this.features=i}}class og extends lu{constructor(t){t=t||{},super({attributions:t.attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:t.wrapX!==void 0?t.wrapX:!0}),this.on,this.once,this.un,this.loader_=hr,this.format_=t.format,this.overlaps_=t.overlaps===void 0?!0:t.overlaps,this.url_=t.url,t.loader!==void 0?this.loader_=t.loader:this.url_!==void 0&&(yt(this.format_,"`format` must be set when `url` is set"),this.loader_=rg(this.url_,this.format_)),this.strategy_=t.strategy!==void 0?t.strategy:BC;const e=t.useSpatialIndex!==void 0?t.useSpatialIndex:!0;this.featuresRtree_=e?new ng:null,this.loadedExtentsRtree_=new ng,this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null;let i,s;Array.isArray(t.features)?s=t.features:t.features&&(i=t.features,s=i.getArray()),!e&&i===void 0&&(i=new ii(s)),s!==void 0&&this.addFeaturesInternal(s),i!==void 0&&this.bindFeaturesCollection_(i)}addFeature(t){this.addFeatureInternal(t),this.changed()}addFeatureInternal(t){const e=Mt(t);if(!this.addToIndex_(e,t)){this.featuresCollection_&&this.featuresCollection_.remove(t);return}this.setupChangeEvents_(e,t);const i=t.getGeometry();if(i){const s=i.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(s,t)}else this.nullGeometryFeatures_[e]=t;this.dispatchEvent(new pn(hi.ADDFEATURE,t))}setupChangeEvents_(t,e){e instanceof Ie||(this.featureChangeKeys_[t]=[ot(e,$.CHANGE,this.handleFeatureChange_,this),ot(e,cs.PROPERTYCHANGE,this.handleFeatureChange_,this)])}addToIndex_(t,e){let i=!0;if(e.getId()!==void 0){const s=String(e.getId());if(!(s in this.idIndex_))this.idIndex_[s]=e;else if(e instanceof Ie){const r=this.idIndex_[s];r instanceof Ie?Array.isArray(r)?r.push(e):this.idIndex_[s]=[r,e]:i=!1}else i=!1}return i&&(yt(!(t in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[t]=e),i}addFeatures(t){this.addFeaturesInternal(t),this.changed()}addFeaturesInternal(t){const e=[],i=[],s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r],l=Mt(a);this.addToIndex_(l,a)&&i.push(a)}for(let r=0,o=i.length;r<o;r++){const a=i[r],l=Mt(a);this.setupChangeEvents_(l,a);const h=a.getGeometry();if(h){const c=h.getExtent();e.push(c),s.push(a)}else this.nullGeometryFeatures_[l]=a}if(this.featuresRtree_&&this.featuresRtree_.load(e,s),this.hasListener(hi.ADDFEATURE))for(let r=0,o=i.length;r<o;r++)this.dispatchEvent(new pn(hi.ADDFEATURE,i[r]))}bindFeaturesCollection_(t){let e=!1;this.addEventListener(hi.ADDFEATURE,function(i){e||(e=!0,t.push(i.feature),e=!1)}),this.addEventListener(hi.REMOVEFEATURE,function(i){e||(e=!0,t.remove(i.feature),e=!1)}),t.addEventListener(Le.ADD,i=>{e||(e=!0,this.addFeature(i.element),e=!1)}),t.addEventListener(Le.REMOVE,i=>{e||(e=!0,this.removeFeature(i.element),e=!1)}),this.featuresCollection_=t}clear(t){if(t){for(const i in this.featureChangeKeys_)this.featureChangeKeys_[i].forEach(Nt);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){const i=s=>{this.removeFeatureInternal(s)};this.featuresRtree_.forEach(i);for(const s in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[s])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};const e=new pn(hi.CLEAR);this.dispatchEvent(e),this.changed()}forEachFeature(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureAtCoordinateDirect(t,e){const i=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(i,function(s){const r=s.getGeometry();if(r instanceof Ie||r.intersectsCoordinate(t))return e(s)})}forEachFeatureInExtent(t,e){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureIntersectingExtent(t,e){return this.forEachFeatureInExtent(t,function(i){const s=i.getGeometry();if(s instanceof Ie||s.intersectsExtent(t)){const r=e(i);if(r)return r}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let t;return this.featuresCollection_?t=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(t=this.featuresRtree_.getAll(),us(this.nullGeometryFeatures_)||Oi(t,Object.values(this.nullGeometryFeatures_))),t}getFeaturesAtCoordinate(t){const e=[];return this.forEachFeatureAtCoordinateDirect(t,function(i){e.push(i)}),e}getFeaturesInExtent(t,e){if(this.featuresRtree_){if(!(e&&e.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(t);const s=$m(t,e);return[].concat(...s.map(r=>this.featuresRtree_.getInExtent(r)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(t,e){const i=t[0],s=t[1];let r=null;const o=[NaN,NaN];let a=1/0;const l=[-1/0,-1/0,1/0,1/0];return e=e||so,this.featuresRtree_.forEachInExtent(l,function(h){if(e(h)){const c=h.getGeometry(),u=a;if(a=c instanceof Ie?0:c.closestPointXY(i,s,o,a),a<u){r=h;const g=Math.sqrt(a);l[0]=i-g,l[1]=s-g,l[2]=i+g,l[3]=s+g}}}),r}getExtent(t){return this.featuresRtree_.getExtent(t)}getFeatureById(t){const e=this.idIndex_[t.toString()];return e!==void 0?e:null}getFeatureByUid(t){const e=this.uidIndex_[t];return e!==void 0?e:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(t){const e=t.target,i=Mt(e),s=e.getGeometry();if(!s)i in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(e),this.nullGeometryFeatures_[i]=e);else{const o=s.getExtent();i in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[i],this.featuresRtree_&&this.featuresRtree_.insert(o,e)):this.featuresRtree_&&this.featuresRtree_.update(o,e)}const r=e.getId();if(r!==void 0){const o=r.toString();this.idIndex_[o]!==e&&(this.removeFromIdIndex_(e),this.idIndex_[o]=e)}else this.removeFromIdIndex_(e),this.uidIndex_[i]=e;this.changed(),this.dispatchEvent(new pn(hi.CHANGEFEATURE,e))}hasFeature(t){const e=t.getId();return e!==void 0?e in this.idIndex_:Mt(t)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&us(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0}loadFeatures(t,e,i){const s=this.loadedExtentsRtree_,r=this.strategy_(t,e,i);for(let o=0,a=r.length;o<a;++o){const l=r[o];s.forEachInExtent(l,function(c){return fi(c.extent,l)})||(++this.loadingExtentsCount_,this.dispatchEvent(new pn(hi.FEATURESLOADSTART)),this.loader_.call(this,l,e,i,c=>{--this.loadingExtentsCount_,this.dispatchEvent(new pn(hi.FEATURESLOADEND,void 0,c))},()=>{--this.loadingExtentsCount_,this.dispatchEvent(new pn(hi.FEATURESLOADERROR))}),s.insert(l,{extent:l.slice()}))}this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(t){const e=this.loadedExtentsRtree_;let i;e.forEachInExtent(t,function(s){if(ds(s.extent,t))return i=s,!0}),i&&e.remove(i)}removeFeature(t){if(!t)return;const e=Mt(t);e in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[e]:this.featuresRtree_&&this.featuresRtree_.remove(t),this.removeFeatureInternal(t)&&this.changed()}removeFeatureInternal(t){const e=Mt(t),i=this.featureChangeKeys_[e];if(!i)return;i.forEach(Nt),delete this.featureChangeKeys_[e];const s=t.getId();return s!==void 0&&delete this.idIndex_[s.toString()],delete this.uidIndex_[e],this.dispatchEvent(new pn(hi.REMOVEFEATURE,t)),t}removeFromIdIndex_(t){let e=!1;for(const i in this.idIndex_){const s=this.idIndex_[i];if(t instanceof Ie&&Array.isArray(s)&&s.includes(t))s.splice(s.indexOf(t),1);else if(this.idIndex_[i]===t){delete this.idIndex_[i],e=!0;break}}return e}setLoader(t){this.loader_=t}setUrl(t){yt(this.format_,"`format` must be set when `url` is set"),this.url_=t,this.setLoader(rg(t,this.format_))}}const ag={ACTIVE_ACTION_CHANGED:"vl-active-action-changed",LAYER_VISIBLE_CHANGED:"vl-layer-visible-changed"},YC={ACTION:"action"},OE={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"},PE={MEASURE:"measure"};class hu extends If{static get CLICK_COUNT_TIMEOUT(){return 300}constructor(t={}){const{disableRotation:e,disableMouseWheelZoom:i,disableKeyboard:s}=t,r=!e,a=Ef({altShiftDragRotate:r,pinchRotate:r,mouseWheelZoom:!i,keyboard:!s});if(t&&t.interactions&&t.interactions.forEach(l=>a.push(l)),t.interactions=a,super(t),this.actions=[],t.actions.forEach(l=>{this.addAction(l)}),setTimeout(()=>{this.activateDefaultAction()}),!t.disableEscapeKey){const l=h=>{if(h&&h.keyCode&&h.keyCode===27){const c=this.getCurrentActiveAction();c?c.stop&&c.stop():this.activateDefaultAction()}};document.body.removeEventListener("keydown",l),document.body.addEventListener("keydown",l)}}getDefaultActiveAction(){return this.actions&&this.actions.find(t=>t.element?._defaultActive)}getCurrentActiveAction(){return this.actions&&this.actions.find(t=>t.element._active)}getActionWithIdentifier(t){return this.actions&&this.actions.find(e=>e.element.identifier===t)}getControlsOfType(t){return this.getControls().getArray().filter(i=>i.get("element")&&i.get("element").type===t)}getActionControls(){return this.getControlsOfType(YC.ACTION)}getActionControlWithIdentifier(t){const e=this.getActionControls();return e&&e.find(i=>i.get("element")&&i.get("element").identifier===t)}getLayerActions(t){return this.actions&&this.actions.filter(e=>e.appliesToLayer(t))}activateAction(t){this.timeout=setTimeout(()=>{t?.activate()},hu.CLICK_COUNT_TIMEOUT)}deactivateCurrentAction(){const t=this.getCurrentActiveAction();t&&(t.deactivate(),clearTimeout(this.timeout))}addAction(t){this.actions.push(t),t.map=this,t.interactions.forEach(e=>{this.addInteraction(e),e.map=t.map})}removeAction(t){this.getCurrentActiveAction()===t&&(t===this.getDefaultActiveAction()?t.element.deactivate():this.activateDefaultAction()),t.interactions.forEach(e=>{this.removeInteraction(e)}),t.element.reset(),this.actions.splice(this.actions.indexOf(t),1)}activateDefaultAction(){const t=this.getDefaultActiveAction();t&&t.element.activate()}}class VC extends hu{constructor(t={}){t.layers=[t.customLayers.baseLayerGroup,t.customLayers.overlayGroup];const e=[new xf];t.hideScale||e.push(new Uw({minWidth:128})),t.controls=e.concat(t.controls||[]),t.view=new ti({extent:t.projection.getExtent(),projection:t.projection,maxZoom:16,minZoom:2,center:pi(t.projection.getExtent()),zoom:2,...t.view}),super(t),(t.defaultZoom===void 0||t.defaultZoom===!0)&&this.addControl(new Vc),this.projection=t.projection,this.view=t.view,this.geoJSONFormat=new gl({dataProjection:this.projection}),this.custom=t.custom||{},t.customLayers.overviewMapLayers&&t.customLayers.overviewMapLayers.length>0&&this.createOverviewMapControl(t),this.baseLayers=t.customLayers.baseLayerGroup.getLayers().getArray(),this.maxZoomViewToExtent=t.maxZoomViewToExtent||16}createOverviewMapControl(t){const e=this,i=s=>{const r=l=>{let h=0;return e.baseLayers.forEach((c,u)=>{c.getVisible()&&(h=u)}),l[h+1>=l.length?0:h+1]};s||(s=r(e.baseLayers)),e.baseLayers.forEach(l=>l.setVisible(l==s));const o=e.overviewMapControl.getOverviewMap().getLayers().getArray(),a=r(o);o.forEach(l=>l.setVisible(l==a)),e.render(),e.overviewMapControl.getOverviewMap().render()};this.overviewMapLayers=t.customLayers.overviewMapLayers,this.overviewMapControl=new Hw({layers:this.overviewMapLayers,collapsed:!1,view:new ti({projection:this.projection})}),this.overviewMapControl.element.addEventListener("click",()=>i(),!1),this.custom.toggleBaseLayer=i}addBaseLayerAndOverlayMapLayer(t,e){t.setVisible(this.baseLayers.length===0),this.baseLayers.push(t),this.overviewMapControl?this.overviewMapControl.getOverviewMap().getLayers().getArray().push(e):this.createOverviewMapControl({customLayers:{overviewMapLayers:[e]}}),e.setVisible(this.overviewMapControl.getOverviewMap().getLayers().getArray().length===2)}getBaseLayers(){return this.getLayerGroup().getLayers().getArray()[0].getLayers().getArray()}getOverlayLayers(){return this._getOverlayLayersCollection().getArray()}_getOverlayLayersCollection(){return this.getLayerGroup().getLayers().getArray()[1].getLayers()}addOverlayLayer(t){this._getOverlayLayersCollection().push(t)}removeOverlayLayer(t){this._getOverlayLayersCollection().remove(t)}initializeView(t,e){const i=Cc(g2(),f2(),this.projection.getCode());this.getView().fit(i,{size:this.getSize()}),this.zoomViewToExtent(this.getView(),t,e)}zoomToExtent(t,e){this.zoomViewToExtent(this.getView(),t,e)}zoomViewToExtent(t,e,i){e&&t.fit(e,{size:this.getSize()}),(i||this.maxZoomViewToExtent)&&t.getZoom()>(i||this.maxZoomViewToExtent)&&t.setZoom(i||this.maxZoomViewToExtent)}zoomToGeometry(t,e){const i={type:"FeatureCollection",features:[{type:"Feature",geometry:t}]};this.zoomToExtent(this.geoJSONFormat.readFeatures(i)[0].getGeometry().getExtent(),e)}showInfo(t,e){const i=document.createElement("div");i.setAttribute("class","close"),i.onclick=()=>event.currentTarget.parentNode.remove();const s=document.createElement("div");s.innerHTML=`<span class='content'>${t}</span><div class='arrow'></div>`,s.setAttribute("class","info-tooltip"),s.appendChild(i);const r=new Lf({offset:[0,-5],positioning:"bottom-center",element:s});this.addOverlay(r),r.setPosition(e),s.parentNode.style.position="fixed"}}class S0 extends So{constructor(t,e,i){super(),i=i||{},this.tileCoord=t,this.state=e,this.interimTile=null,this.key="",this.transition_=i.transition===void 0?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent($.CHANGE)}release(){this.state===j.ERROR&&this.setState(j.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getInterimTile(){let t=this.interimTile;if(!t)return this;do{if(t.getState()==j.LOADED)return this.transition_=0,t;t=t.interimTile}while(t);return this}refreshInterimChain(){let t=this.interimTile;if(!t)return;let e=this;do{if(t.getState()==j.LOADED){t.interimTile=null;break}t.getState()==j.LOADING?e=t:t.getState()==j.IDLE?e.interimTile=t.interimTile:e=t,t=e.interimTile}while(t)}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(t){if(this.state!==j.ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()}load(){q()}getAlpha(t,e){if(!this.transition_)return 1;let i=this.transitionStarts_[t];if(!i)i=e,this.transitionStarts_[t]=i;else if(i===-1)return 1;const s=e-i+1e3/60;return s>=this.transition_?1:sf(s/this.transition_)}inTransition(t){return this.transition_?this.transitionStarts_[t]!==-1:!1}endTransition(t){this.transition_&&(this.transitionStarts_[t]=-1)}}class N0 extends S0{constructor(t,e,i,s,r,o){super(t,e,o),this.crossOrigin_=s,this.src_=i,this.key=i,this.image_=new Image,s!==null&&(this.image_.crossOrigin=s),this.unlisten_=null,this.tileLoadFunction_=r}getImage(){return this.image_}setImage(t){this.image_=t,this.state=j.LOADED,this.unlistenImage_(),this.changed()}handleImageError_(){this.state=j.ERROR,this.unlistenImage_(),this.image_=jC(),this.changed()}handleImageLoad_(){const t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=j.LOADED:this.state=j.EMPTY,this.unlistenImage_(),this.changed()}load(){this.state==j.ERROR&&(this.state=j.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==j.IDLE&&(this.state=j.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=R2(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function jC(){const n=Te(1,1);return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,1,1),n.canvas}class qC{constructor(t){this.highWaterMark=t!==void 0?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(t){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(t){return this.entries_.hasOwnProperty(t)}forEach(t){let e=this.oldest_;for(;e;)t(e.value_,e.key_,this),e=e.newer}get(t,e){const i=this.entries_[t];return yt(i!==void 0,"Tried to get a value for a key that does not exist in the cache"),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(t){const e=this.entries_[t];return yt(e!==void 0,"Tried to get a value for a key that does not exist in the cache"),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_}getCount(){return this.count_}getKeys(){const t=new Array(this.count_);let e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.key_;return t}getValues(){const t=new Array(this.count_);let e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.value_;return t}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(t){return this.entries_[t]?.value_}pop(){const t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_}replace(t,e){this.get(t),this.entries_[t].value_=e}set(t,e){yt(!(t in this.entries_),"Tried to set a value for a key that is used already");const i={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[t]=i,++this.count_}setSize(t){this.highWaterMark=t}}function lg(n,t,e,i){return i!==void 0?(i[0]=n,i[1]=t,i[2]=e,i):[n,t,e]}function xl(n,t,e){return n+"/"+t+"/"+e}function A0(n){return xl(n[0],n[1],n[2])}function ZC(n){return n.split("/").map(Number)}function O0(n){return(n[1]<<n[0])+n[2]}function $C(n,t){const e=n[0],i=n[1],s=n[2];if(t.getMinZoom()>e||e>t.getMaxZoom())return!1;const r=t.getFullTileRange(e);return r?r.containsXY(i,s):!0}class P0 extends qC{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(t){for(;this.canExpireCache()&&!(this.peekLast().getKey()in t);)this.pop().release()}pruneExceptNewestZ(){if(this.getCount()===0)return;const t=this.peekFirstKey(),i=ZC(t)[0];this.forEach(s=>{s.tileCoord[0]!==i&&(this.remove(A0(s.tileCoord)),s.release())})}}class cu{constructor(t,e,i,s){this.minX=t,this.maxX=e,this.minY=i,this.maxY=s}contains(t){return this.containsXY(t[1],t[2])}containsTileRange(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY}containsXY(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY}equals(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY}extend(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY}}function Ps(n,t,e,i,s){return s!==void 0?(s.minX=n,s.maxX=t,s.minY=e,s.maxY=i,s):new cu(n,t,e,i)}function Z(n,t){return n.interfaces_&&n.interfaces_.indexOf(t)>-1}class hh{static equalsWithTolerance(t,e,i){return Math.abs(t-e)<=i}}class Un extends Error{constructor(t){super(t),this.name=Object.keys({Exception:Un})[0]}toString(){return this.message}}class ft extends Un{constructor(t){super(t),this.name=Object.keys({IllegalArgumentException:ft})[0]}}class qr{constructor(t,e){this.low=e||0,this.high=t||0}static toBinaryString(t){let e,i="";for(e=2147483648;e>0;e>>>=1)i+=(t.high&e)===e?"1":"0";for(e=2147483648;e>0;e>>>=1)i+=(t.low&e)===e?"1":"0";return i}}function X(){}X.NaN=NaN;X.isNaN=n=>Number.isNaN(n);X.isInfinite=n=>!Number.isFinite(n);X.MAX_VALUE=Number.MAX_VALUE;X.POSITIVE_INFINITY=Number.POSITIVE_INFINITY;X.NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY;typeof Float64Array=="function"&&typeof Int32Array=="function"?(function(){const e=new Float64Array(1),i=new Int32Array(e.buffer);X.doubleToLongBits=function(s){e[0]=s;let r=i[0]|0,o=i[1]|0;return(o&2146435072)===2146435072&&(o&1048575)!==0&&r!==0&&(r=0,o=2146959360),new qr(o,r)},X.longBitsToDouble=function(s){return i[0]=s.low,i[1]=s.high,e[0]}})():(function(){const t=Math.log2,e=Math.floor,i=Math.pow,s=(function(){for(let r=53;r>0;r--){const o=i(2,r)-1;if(e(t(o))+1===r)return o}return 0})();X.doubleToLongBits=function(r){let o,a,l,h,c,u,g,d,f;if(r<0||1/r===Number.NEGATIVE_INFINITY?(u=1<<31,r=-r):u=0,r===0)return f=0,d=u,new qr(d,f);if(r===1/0)return f=0,d=u|2146435072,new qr(d,f);if(r!==r)return f=0,d=2146959360,new qr(d,f);if(h=0,f=0,o=e(r),o>1)if(o<=s)h=e(t(o)),h<=20?(f=0,d=o<<20-h&1048575):(l=h-20,a=i(2,l),f=o%a<<32-l,d=o/a&1048575);else for(l=o,f=0;a=l/2,l=e(a),l!==0;)h++,f>>>=1,f|=(d&1)<<31,d>>>=1,a!==l&&(d|=524288);if(g=h+1023,c=o===0,o=r-o,h<52&&o!==0)for(l=0;;){if(a=o*2,a>=1?(o=a-1,c?(g--,c=!1):(l<<=1,l|=1,h++)):(o=a,c?--g===0&&(h++,c=!1):(l<<=1,h++)),h===20)d|=l,l=0;else if(h===52){f|=l;break}if(a===1){h<20?d|=l<<20-h:h<52&&(f|=l<<52-h);break}}return d|=g<<20,d|=u,new qr(d,f)},X.longBitsToDouble=function(r){let o,a,l,h;const c=r.high,u=r.low,g=c&1<<31?-1:1;for(l=((c&2146435072)>>20)-1023,h=0,a=1<<19,o=1;o<=20;o++)c&a&&(h+=i(2,-o)),a>>>=1;for(a=1<<31,o=21;o<=52;o++)u&a&&(h+=i(2,-o)),a>>>=1;if(l===-1023){if(h===0)return g*0;l=-1022}else{if(l===1024)return h===0?g/0:NaN;h+=1}return g*h*i(2,l)}})();function Ui(){}function Fe(){}class sr extends Un{constructor(t){super(t),this.name=Object.keys({RuntimeException:sr})[0]}}class Zs extends sr{constructor(){super(),Zs.constructor_.apply(this,arguments)}static constructor_(){if(arguments.length===0)sr.constructor_.call(this);else if(arguments.length===1){const t=arguments[0];sr.constructor_.call(this,t)}}}class rt{static isTrue(){if(arguments.length===1){const t=arguments[0];rt.isTrue(t,null)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(!t)throw e===null?new Zs:new Zs(e)}}static shouldNeverReachHere(){if(arguments.length===0)rt.shouldNeverReachHere(null);else if(arguments.length===1){const t=arguments[0];throw new Zs("Should never reach here"+(t!==null?": "+t:""))}}static equals(){if(arguments.length===2){const t=arguments[0],e=arguments[1];rt.equals(t,e,null)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(!e.equals(t))throw new Zs("Expected "+t+" but encountered "+e+(i!==null?": "+i:""))}}}function jo(){}function Pr(){}const K0=new ArrayBuffer(8),JC=new Float64Array(K0),hg=new Int32Array(K0);class E{constructor(){E.constructor_.apply(this,arguments)}static constructor_(){if(this.x=null,this.y=null,this.z=null,arguments.length===0)E.constructor_.call(this,0,0);else if(arguments.length===1){const t=arguments[0];E.constructor_.call(this,t.x,t.y,t.getZ())}else if(arguments.length===2){const t=arguments[0],e=arguments[1];E.constructor_.call(this,t,e,E.NULL_ORDINATE)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this.x=t,this.y=e,this.z=i}}static hashCode(t){return JC[0]=t,hg[0]^hg[1]}equals2D(){if(arguments.length===1){const t=arguments[0];return!(this.x!==t.x||this.y!==t.y)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return!(!hh.equalsWithTolerance(this.x,t.x,e)||!hh.equalsWithTolerance(this.y,t.y,e))}}setM(t){throw new ft("Invalid ordinate index: "+E.M)}equals3D(t){return this.x===t.x&&this.y===t.y&&(this.getZ()===t.getZ()||X.isNaN(this.getZ())&&X.isNaN(t.getZ()))}setX(t){this.x=t}compareTo(t){const e=t;return this.x<e.x?-1:this.x>e.x?1:this.y<e.y?-1:this.y>e.y?1:0}getX(){return this.x}copy(){return new E(this)}toString(){return"("+this.x+", "+this.y+", "+this.getZ()+")"}distance3D(t){const e=this.x-t.x,i=this.y-t.y,s=this.getZ()-t.getZ();return Math.sqrt(e*e+i*i+s*s)}getY(){return this.y}getM(){return X.NaN}setOrdinate(t,e){switch(t){case E.X:this.x=e;break;case E.Y:this.y=e;break;case E.Z:this.setZ(e);break;default:throw new ft("Invalid ordinate index: "+t)}}getZ(){return this.z}getOrdinate(t){switch(t){case E.X:return this.x;case E.Y:return this.y;case E.Z:return this.getZ()}throw new ft("Invalid ordinate index: "+t)}equals(t){return t instanceof E?this.equals2D(t):!1}equalInZ(t,e){return hh.equalsWithTolerance(this.getZ(),t.getZ(),e)}setZ(t){this.z=t}clone(){try{return null}catch(t){if(t instanceof CloneNotSupportedException)return rt.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"),null;throw t}}setY(t){this.y=t}distance(t){const e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)}hashCode(){let t=17;return t=37*t+E.hashCode(this.x),t=37*t+E.hashCode(this.y),t}setCoordinate(t){this.x=t.x,this.y=t.y,this.z=t.getZ()}get interfaces_(){return[Ui,jo,Fe]}}class $n{constructor(){$n.constructor_.apply(this,arguments)}static constructor_(){if(this._dimensionsToTest=2,arguments.length===0)$n.constructor_.call(this,2);else if(arguments.length===1){const t=arguments[0];if(t!==2&&t!==3)throw new ft("only 2 or 3 dimensions may be specified");this._dimensionsToTest=t}}static compare(t,e){return t<e?-1:t>e?1:X.isNaN(t)?X.isNaN(e)?0:-1:X.isNaN(e)?1:0}compare(t,e){const i=$n.compare(t.x,e.x);if(i!==0)return i;const s=$n.compare(t.y,e.y);return s!==0?s:this._dimensionsToTest<=2?0:$n.compare(t.getZ(),e.getZ())}get interfaces_(){return[Pr]}}E.DimensionalComparator=$n;E.NULL_ORDINATE=X.NaN;E.X=0;E.Y=1;E.Z=2;E.M=3;class QC{static ofLine(t){const e=t.size();if(e<=1)return 0;let i=0;const s=new E;t.getCoordinate(0,s);let r=s.x,o=s.y;for(let a=1;a<e;a++){t.getCoordinate(a,s);const l=s.x,h=s.y,c=l-r,u=h-o;i+=Math.sqrt(c*c+u*u),r=l,o=h}return i}}class Kr{filter(t){}}class Ti extends Un{constructor(t){super(t),this.name=Object.keys({UnsupportedOperationException:Ti})[0]}}class Be{add(){}addAll(){}isEmpty(){}iterator(){}size(){}toArray(){}remove(){}}class uu extends Un{constructor(t){super(t),this.name=Object.keys({IndexOutOfBoundsException:uu})[0]}}class rr extends Be{get(){}set(){}isEmpty(){}}class Dr extends Un{constructor(t){super(t),this.name=Object.keys({NoSuchElementException:Dr})[0]}}class it extends rr{constructor(t){super(),this.array=[],t instanceof Be&&this.addAll(t)}get interfaces_(){return[rr,Be]}ensureCapacity(){}add(t){return arguments.length===1?this.array.push(t):this.array.splice(arguments[0],0,arguments[1]),!0}clear(){this.array=[]}addAll(t){for(const e of t)this.array.push(e)}set(t,e){const i=this.array[t];return this.array[t]=e,i}iterator(){return new tR(this)}get(t){if(t<0||t>=this.size())throw new uu;return this.array[t]}isEmpty(){return this.array.length===0}sort(t){t?this.array.sort((e,i)=>t.compare(e,i)):this.array.sort()}size(){return this.array.length}toArray(){return this.array.slice()}remove(t){for(let e=0,i=this.array.length;e<i;e++)if(this.array[e]===t)return!!this.array.splice(e,1);return!1}[Symbol.iterator](){return this.array.values()}}let tR=class{constructor(t){this.arrayList=t,this.position=0}next(){if(this.position===this.arrayList.size())throw new Dr;return this.arrayList.get(this.position++)}hasNext(){return this.position<this.arrayList.size()}set(t){return this.arrayList.set(this.position-1,t)}remove(){this.arrayList.remove(this.arrayList.get(this.position))}};class as extends it{constructor(){super(),as.constructor_.apply(this,arguments)}static constructor_(){if(arguments.length!==0){if(arguments.length===1){const t=arguments[0];this.ensureCapacity(t.length),this.add(t,!0)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.ensureCapacity(t.length),this.add(t,e)}}}getCoordinate(t){return this.get(t)}addAll(){if(arguments.length===2&&typeof arguments[1]=="boolean"&&Z(arguments[0],Be)){const t=arguments[0],e=arguments[1];let i=!1;for(let s=t.iterator();s.hasNext();)this.add(s.next(),e),i=!0;return i}else return super.addAll.apply(this,arguments)}clone(){const t=super.clone.call(this);for(let e=0;e<this.size();e++)t.add(e,this.get(e).clone());return t}closeRing(){if(this.size()>0){const t=this.get(0).copy();this.add(t,!1)}}toCoordinateArray(){if(arguments.length===0)return this.toArray(as.coordArrayType);if(arguments.length===1){if(arguments[0])return this.toArray(as.coordArrayType);const e=this.size(),i=new Array(e).fill(null);for(let s=0;s<e;s++)i[s]=this.get(e-s-1);return i}}add(){if(arguments.length===1){const t=arguments[0];return super.add.call(this,t)}else if(arguments.length===2){if(arguments[0]instanceof Array&&typeof arguments[1]=="boolean"){const t=arguments[0],e=arguments[1];return this.add(t,e,!0),!0}else if(arguments[0]instanceof E&&typeof arguments[1]=="boolean"){const t=arguments[0];if(!arguments[1]&&this.size()>=1&&this.get(this.size()-1).equals2D(t))return null;super.add.call(this,t)}else if(arguments[0]instanceof Object&&typeof arguments[1]=="boolean"){const t=arguments[0],e=arguments[1];return this.add(t,e),!0}}else if(arguments.length===3){if(typeof arguments[2]=="boolean"&&arguments[0]instanceof Array&&typeof arguments[1]=="boolean"){const t=arguments[0],e=arguments[1];if(arguments[2])for(let s=0;s<t.length;s++)this.add(t[s],e);else for(let s=t.length-1;s>=0;s--)this.add(t[s],e);return!0}else if(typeof arguments[2]=="boolean"&&Number.isInteger(arguments[0])&&arguments[1]instanceof E){const t=arguments[0],e=arguments[1];if(!arguments[2]){const s=this.size();if(s>0&&(t>0&&this.get(t-1).equals2D(e)||t<s&&this.get(t).equals2D(e)))return null}super.add.call(this,t,e)}}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];let r=1;i>s&&(r=-1);for(let o=i;o!==s;o+=r)this.add(t[o],e);return!0}}}as.coordArrayType=new Array(0).fill(null);class we extends E{constructor(){super(),we.constructor_.apply(this,arguments)}static constructor_(){if(arguments.length===0)E.constructor_.call(this);else if(arguments.length===1){if(arguments[0]instanceof we){const t=arguments[0];E.constructor_.call(this,t.x,t.y)}else if(arguments[0]instanceof E){const t=arguments[0];E.constructor_.call(this,t.x,t.y)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];E.constructor_.call(this,t,e,E.NULL_ORDINATE)}}setOrdinate(t,e){switch(t){case we.X:this.x=e;break;case we.Y:this.y=e;break;default:throw new ft("Invalid ordinate index: "+t)}}setZ(t){throw new ft("CoordinateXY dimension 2 does not support z-ordinate")}copy(){return new we(this)}toString(){return"("+this.x+", "+this.y+")"}setCoordinate(t){this.x=t.x,this.y=t.y,this.z=t.getZ()}getZ(){return E.NULL_ORDINATE}getOrdinate(t){switch(t){case we.X:return this.x;case we.Y:return this.y}throw new ft("Invalid ordinate index: "+t)}}we.X=0;we.Y=1;we.Z=-1;we.M=-1;class ee extends E{constructor(){super(),ee.constructor_.apply(this,arguments)}static constructor_(){if(this._m=null,arguments.length===0)E.constructor_.call(this),this._m=0;else if(arguments.length===1){if(arguments[0]instanceof ee){const t=arguments[0];E.constructor_.call(this,t.x,t.y),this._m=t._m}else if(arguments[0]instanceof E){const t=arguments[0];E.constructor_.call(this,t.x,t.y),this._m=this.getM()}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];E.constructor_.call(this,t,e,E.NULL_ORDINATE),this._m=i}}setM(t){this._m=t}setZ(t){throw new ft("CoordinateXY dimension 2 does not support z-ordinate")}copy(){return new ee(this)}toString(){return"("+this.x+", "+this.y+" m="+this.getM()+")"}setCoordinate(t){this.x=t.x,this.y=t.y,this.z=t.getZ(),this._m=t.getM()}getM(){return this._m}setOrdinate(t,e){switch(t){case ee.X:this.x=e;break;case ee.Y:this.y=e;break;case ee.M:this._m=e;break;default:throw new ft("Invalid ordinate index: "+t)}}getZ(){return E.NULL_ORDINATE}getOrdinate(t){switch(t){case ee.X:return this.x;case ee.Y:return this.y;case ee.M:return this._m}throw new ft("Invalid ordinate index: "+t)}}ee.X=0;ee.Y=1;ee.Z=-1;ee.M=2;class ls extends E{constructor(){super(),ls.constructor_.apply(this,arguments)}static constructor_(){if(this._m=null,arguments.length===0)E.constructor_.call(this),this._m=0;else if(arguments.length===1){if(arguments[0]instanceof ls){const t=arguments[0];E.constructor_.call(this,t),this._m=t._m}else if(arguments[0]instanceof E){const t=arguments[0];E.constructor_.call(this,t),this._m=this.getM()}}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];E.constructor_.call(this,t,e,i),this._m=s}}setM(t){this._m=t}getOrdinate(t){switch(t){case E.X:return this.x;case E.Y:return this.y;case E.Z:return this.getZ();case E.M:return this.getM()}throw new ft("Invalid ordinate index: "+t)}copy(){return new ls(this)}toString(){return"("+this.x+", "+this.y+", "+this.getZ()+" m="+this.getM()+")"}setCoordinate(t){this.x=t.x,this.y=t.y,this.z=t.getZ(),this._m=t.getM()}getM(){return this._m}setOrdinate(t,e){switch(t){case E.X:this.x=e;break;case E.Y:this.y=e;break;case E.Z:this.z=e;break;case E.M:this._m=e;break;default:throw new ft("Invalid ordinate index: "+t)}}}class pr{static measures(t){return t instanceof we?0:t instanceof ee||t instanceof ls?1:(t instanceof E,0)}static create(){if(arguments.length===1){const t=arguments[0];return pr.create(t,0)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return t===2?new we:t===3&&e===0?new E:t===3&&e===1?new ee:t===4&&e===1?new ls:new E}}static dimension(t){return t instanceof we?2:t instanceof ee?3:t instanceof ls?4:(t instanceof E,3)}}class xr{static log10(t){const e=Math.log(t);return X.isInfinite(e)||X.isNaN(e)?e:e/xr.LOG_10}static min(t,e,i,s){let r=t;return e<r&&(r=e),i<r&&(r=i),s<r&&(r=s),r}static clamp(){if(typeof arguments[2]=="number"&&typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1],i=arguments[2];return t<e?e:t>i?i:t}else if(Number.isInteger(arguments[2])&&Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1],i=arguments[2];return t<e?e:t>i?i:t}}static average(t,e){return(t+e)/2}static wrap(t,e){return t<0?e- -t%e:t%e}static max(){if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];let s=t;return e>s&&(s=e),i>s&&(s=i),s}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];let r=t;return e>r&&(r=e),i>r&&(r=i),s>r&&(r=s),r}}}xr.LOG_10=Math.log(10);class ri{static arraycopy(t,e,i,s,r){let o=0;for(let a=e;a<e+r;a++)i[s+o]=t[a],o++}static getProperty(t){return{"line.separator":`
`}[t]}}class dt{constructor(){dt.constructor_.apply(this,arguments)}static constructor_(){if(this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,arguments.length===0)this.init();else if(arguments.length===1){if(arguments[0]instanceof E){const t=arguments[0];this.init(t.x,t.x,t.y,t.y)}else if(arguments[0]instanceof dt){const t=arguments[0];this.init(t)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.init(t.x,e.x,t.y,e.y)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];this.init(t,e,i,s)}}static intersects(){if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];return i.x>=(t.x<e.x?t.x:e.x)&&i.x<=(t.x>e.x?t.x:e.x)&&i.y>=(t.y<e.y?t.y:e.y)&&i.y<=(t.y>e.y?t.y:e.y)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];let r=Math.min(i.x,s.x),o=Math.max(i.x,s.x),a=Math.min(t.x,e.x),l=Math.max(t.x,e.x);return!(a>o||l<r||(r=Math.min(i.y,s.y),o=Math.max(i.y,s.y),a=Math.min(t.y,e.y),l=Math.max(t.y,e.y),a>o)||l<r)}}getArea(){return this.getWidth()*this.getHeight()}getMinX(){return this._minx}expandToInclude(){if(arguments.length===1){if(arguments[0]instanceof E){const t=arguments[0];this.expandToInclude(t.x,t.y)}else if(arguments[0]instanceof dt){const t=arguments[0];if(t.isNull())return null;this.isNull()?(this._minx=t.getMinX(),this._maxx=t.getMaxX(),this._miny=t.getMinY(),this._maxy=t.getMaxY()):(t._minx<this._minx&&(this._minx=t._minx),t._maxx>this._maxx&&(this._maxx=t._maxx),t._miny<this._miny&&(this._miny=t._miny),t._maxy>this._maxy&&(this._maxy=t._maxy))}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.isNull()?(this._minx=t,this._maxx=t,this._miny=e,this._maxy=e):(t<this._minx&&(this._minx=t),t>this._maxx&&(this._maxx=t),e<this._miny&&(this._miny=e),e>this._maxy&&(this._maxy=e))}}compareTo(t){const e=t;return this.isNull()?e.isNull()?0:-1:e.isNull()?1:this._minx<e._minx?-1:this._minx>e._minx?1:this._miny<e._miny?-1:this._miny>e._miny?1:this._maxx<e._maxx?-1:this._maxx>e._maxx?1:this._maxy<e._maxy?-1:this._maxy>e._maxy?1:0}translate(t,e){if(this.isNull())return null;this.init(this.getMinX()+t,this.getMaxX()+t,this.getMinY()+e,this.getMaxY()+e)}copy(){return new dt(this)}expandBy(){if(arguments.length===1){const t=arguments[0];this.expandBy(t,t)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(this.isNull())return null;this._minx-=t,this._maxx+=t,this._miny-=e,this._maxy+=e,(this._minx>this._maxx||this._miny>this._maxy)&&this.setToNull()}}contains(){if(arguments.length===1){if(arguments[0]instanceof dt){const t=arguments[0];return this.covers(t)}else if(arguments[0]instanceof E){const t=arguments[0];return this.covers(t)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.covers(t,e)}}hashCode(){let t=17;return t=37*t+E.hashCode(this._minx),t=37*t+E.hashCode(this._maxx),t=37*t+E.hashCode(this._miny),t=37*t+E.hashCode(this._maxy),t}equals(t){if(!(t instanceof dt))return!1;const e=t;return this.isNull()?e.isNull():this._maxx===e.getMaxX()&&this._maxy===e.getMaxY()&&this._minx===e.getMinX()&&this._miny===e.getMinY()}intersection(t){if(this.isNull()||t.isNull()||!this.intersects(t))return new dt;const e=this._minx>t._minx?this._minx:t._minx,i=this._miny>t._miny?this._miny:t._miny,s=this._maxx<t._maxx?this._maxx:t._maxx,r=this._maxy<t._maxy?this._maxy:t._maxy;return new dt(e,s,i,r)}isNull(){return this._maxx<this._minx}getMaxX(){return this._maxx}covers(){if(arguments.length===1){if(arguments[0]instanceof E){const t=arguments[0];return this.covers(t.x,t.y)}else if(arguments[0]instanceof dt){const t=arguments[0];return this.isNull()||t.isNull()?!1:t.getMinX()>=this._minx&&t.getMaxX()<=this._maxx&&t.getMinY()>=this._miny&&t.getMaxY()<=this._maxy}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.isNull()?!1:t>=this._minx&&t<=this._maxx&&e>=this._miny&&e<=this._maxy}}intersects(){if(arguments.length===1){if(arguments[0]instanceof dt){const t=arguments[0];return this.isNull()||t.isNull()?!1:!(t._minx>this._maxx||t._maxx<this._minx||t._miny>this._maxy||t._maxy<this._miny)}else if(arguments[0]instanceof E){const t=arguments[0];return this.intersects(t.x,t.y)}}else if(arguments.length===2){if(arguments[0]instanceof E&&arguments[1]instanceof E){const t=arguments[0],e=arguments[1];return!(this.isNull()||(t.x<e.x?t.x:e.x)>this._maxx||(t.x>e.x?t.x:e.x)<this._minx||(t.y<e.y?t.y:e.y)>this._maxy||(t.y>e.y?t.y:e.y)<this._miny)}else if(typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1];return this.isNull()?!1:!(t>this._maxx||t<this._minx||e>this._maxy||e<this._miny)}}}getMinY(){return this._miny}getDiameter(){if(this.isNull())return 0;const t=this.getWidth(),e=this.getHeight();return Math.sqrt(t*t+e*e)}minExtent(){if(this.isNull())return 0;const t=this.getWidth(),e=this.getHeight();return t<e?t:e}getWidth(){return this.isNull()?0:this._maxx-this._minx}toString(){return"Env["+this._minx+" : "+this._maxx+", "+this._miny+" : "+this._maxy+"]"}setToNull(){this._minx=0,this._maxx=-1,this._miny=0,this._maxy=-1}disjoint(t){return this.isNull()||t.isNull()?!0:t._minx>this._maxx||t._maxx<this._minx||t._miny>this._maxy||t._maxy<this._miny}getHeight(){return this.isNull()?0:this._maxy-this._miny}maxExtent(){if(this.isNull())return 0;const t=this.getWidth(),e=this.getHeight();return t>e?t:e}centre(){return this.isNull()?null:new E((this.getMinX()+this.getMaxX())/2,(this.getMinY()+this.getMaxY())/2)}init(){if(arguments.length===0)this.setToNull();else if(arguments.length===1){if(arguments[0]instanceof E){const t=arguments[0];this.init(t.x,t.x,t.y,t.y)}else if(arguments[0]instanceof dt){const t=arguments[0];this._minx=t._minx,this._maxx=t._maxx,this._miny=t._miny,this._maxy=t._maxy}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.init(t.x,e.x,t.y,e.y)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];t<e?(this._minx=t,this._maxx=e):(this._minx=e,this._maxx=t),i<s?(this._miny=i,this._maxy=s):(this._miny=s,this._maxy=i)}}getMaxY(){return this._maxy}distance(t){if(this.intersects(t))return 0;let e=0;this._maxx<t._minx?e=t._minx-this._maxx:this._minx>t._maxx&&(e=this._minx-t._maxx);let i=0;return this._maxy<t._miny?i=t._miny-this._maxy:this._miny>t._maxy&&(i=this._miny-t._maxy),e===0?i:i===0?e:Math.sqrt(e*e+i*i)}get interfaces_(){return[Ui,Fe]}}class Vt{static scroll(t,e){const i=Vt.indexOf(e,t);if(i<0)return null;const s=new Array(t.length).fill(null);ri.arraycopy(t,i,s,0,t.length-i),ri.arraycopy(t,0,s,t.length-i,i),ri.arraycopy(s,0,t,0,t.length)}static removeRepeatedPoints(t){return Vt.hasRepeatedPoints(t)?new as(t,!1).toCoordinateArray():t}static reverse(t){const e=t.length-1,i=Math.trunc(e/2);for(let s=0;s<=i;s++){const r=t[s];t[s]=t[e-s],t[e-s]=r}}static removeNull(t){let e=0;for(let r=0;r<t.length;r++)t[r]!==null&&e++;const i=new Array(e).fill(null);if(e===0)return i;let s=0;for(let r=0;r<t.length;r++)t[r]!==null&&(i[s++]=t[r]);return i}static copyDeep(){if(arguments.length===1){const t=arguments[0],e=new Array(t.length).fill(null);for(let i=0;i<t.length;i++)e[i]=t[i].copy();return e}else if(arguments.length===5){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3],r=arguments[4];for(let o=0;o<r;o++)i[s+o]=t[e+o].copy()}}static isEqualReversed(t,e){for(let i=0;i<t.length;i++){const s=t[i],r=e[t.length-i-1];if(s.compareTo(r)!==0)return!1}return!0}static envelope(t){const e=new dt;for(let i=0;i<t.length;i++)e.expandToInclude(t[i]);return e}static extract(t,e,i){e=xr.clamp(e,0,t.length),i=xr.clamp(i,-1,t.length);let s=i-e+1;i<0&&(s=0),e>=t.length&&(s=0),i<e&&(s=0);const r=new Array(s).fill(null);if(s===0)return r;let o=0;for(let a=e;a<=i;a++)r[o++]=t[a];return r}static isRing(t){return!(t.length<4||!t[0].equals2D(t[t.length-1]))}static ptNotInList(t,e){for(let i=0;i<t.length;i++){const s=t[i];if(Vt.indexOf(s,e)<0)return s}return null}static equals(){if(arguments.length===2){const t=arguments[0],e=arguments[1];if(t===e)return!0;if(t===null||e===null||t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(!t[i].equals(e[i]))return!1;return!0}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(t===e)return!0;if(t===null||e===null||t.length!==e.length)return!1;for(let s=0;s<t.length;s++)if(i.compare(t[s],e[s])!==0)return!1;return!0}}static intersection(t,e){const i=new as;for(let s=0;s<t.length;s++)e.intersects(t[s])&&i.add(t[s],!0);return i.toCoordinateArray()}static measures(t){if(t===null||t.length===0)return 0;let e=0;for(const i of t)e=Math.max(e,pr.measures(i));return e}static hasRepeatedPoints(t){for(let e=1;e<t.length;e++)if(t[e-1].equals(t[e]))return!0;return!1}static toCoordinateArray(t){return t.toArray(Vt.coordArrayType)}static dimension(t){if(t===null||t.length===0)return 3;let e=0;for(const i of t)e=Math.max(e,pr.dimension(i));return e}static atLeastNCoordinatesOrNothing(t,e){return e.length>=t?e:[]}static indexOf(t,e){for(let i=0;i<e.length;i++)if(t.equals(e[i]))return i;return-1}static increasingDirection(t){for(let e=0;e<Math.trunc(t.length/2);e++){const i=t.length-1-e,s=t[e].compareTo(t[i]);if(s!==0)return s}return 1}static compare(t,e){let i=0;for(;i<t.length&&i<e.length;){const s=t[i].compareTo(e[i]);if(s!==0)return s;i++}return i<e.length?-1:i<t.length?1:0}static minCoordinate(t){let e=null;for(let i=0;i<t.length;i++)(e===null||e.compareTo(t[i])>0)&&(e=t[i]);return e}}class eR{compare(t,e){const i=t,s=e;return Vt.compare(i,s)}get interfaces_(){return[Pr]}}class iR{compare(t,e){const i=t,s=e;if(i.length<s.length)return-1;if(i.length>s.length)return 1;if(i.length===0)return 0;const r=Vt.compare(i,s);return Vt.isEqualReversed(i,s)?0:r}OLDcompare(t,e){const i=t,s=e;if(i.length<s.length)return-1;if(i.length>s.length)return 1;if(i.length===0)return 0;const r=Vt.increasingDirection(i),o=Vt.increasingDirection(s);let a=r>0?0:i.length-1,l=o>0?0:i.length-1;for(let h=0;h<i.length;h++){const c=i[a].compareTo(s[l]);if(c!==0)return c;a+=r,l+=o}return 0}get interfaces_(){return[Pr]}}Vt.ForwardComparator=eR;Vt.BidirectionalComparator=iR;Vt.coordArrayType=new Array(0).fill(null);class nc{static isWhitespace(t){return t<=32&&t>=0||t===127}static toUpperCase(t){return t.toUpperCase()}}class I{static toDimensionSymbol(t){switch(t){case I.FALSE:return I.SYM_FALSE;case I.TRUE:return I.SYM_TRUE;case I.DONTCARE:return I.SYM_DONTCARE;case I.P:return I.SYM_P;case I.L:return I.SYM_L;case I.A:return I.SYM_A}throw new ft("Unknown dimension value: "+t)}static toDimensionValue(t){switch(nc.toUpperCase(t)){case I.SYM_FALSE:return I.FALSE;case I.SYM_TRUE:return I.TRUE;case I.SYM_DONTCARE:return I.DONTCARE;case I.SYM_P:return I.P;case I.SYM_L:return I.L;case I.SYM_A:return I.A}throw new ft("Unknown dimension symbol: "+t)}}I.P=0;I.L=1;I.A=2;I.FALSE=-1;I.TRUE=-2;I.DONTCARE=-3;I.SYM_FALSE="F";I.SYM_TRUE="T";I.SYM_DONTCARE="*";I.SYM_P="0";I.SYM_L="1";I.SYM_A="2";class W{constructor(){W.constructor_.apply(this,arguments)}isGeometryCollection(){return this.getTypeCode()===W.TYPECODE_GEOMETRYCOLLECTION}getFactory(){return this._factory}getGeometryN(t){return this}getArea(){return 0}isRectangle(){return!1}equalsExact(t){return this===t||this.equalsExact(t,0)}geometryChanged(){this.apply(W.geometryChangedFilter)}geometryChangedAction(){this._envelope=null}equalsNorm(t){return t===null?!1:this.norm().equalsExact(t.norm())}getLength(){return 0}getNumGeometries(){return 1}compareTo(){let t;if(arguments.length===1){const e=arguments[0];return t=e,this.getTypeCode()!==t.getTypeCode()?this.getTypeCode()-t.getTypeCode():this.isEmpty()&&t.isEmpty()?0:this.isEmpty()?-1:t.isEmpty()?1:this.compareToSameClass(e)}else if(arguments.length===2){const e=arguments[0],i=arguments[1];return t=e,this.getTypeCode()!==t.getTypeCode()?this.getTypeCode()-t.getTypeCode():this.isEmpty()&&t.isEmpty()?0:this.isEmpty()?-1:t.isEmpty()?1:this.compareToSameClass(e,i)}}getUserData(){return this._userData}getSRID(){return this._SRID}getEnvelope(){return this.getFactory().toGeometry(this.getEnvelopeInternal())}static checkNotGeometryCollection(t){if(t.getTypeCode()===W.TYPECODE_GEOMETRYCOLLECTION)throw new ft("This method does not support GeometryCollection arguments")}equal(t,e,i){return i===0?t.equals(e):t.distance(e)<=i}norm(){const t=this.copy();return t.normalize(),t}reverse(){const t=this.reverseInternal();return this.envelope!=null&&(t.envelope=this.envelope.copy()),t.setSRID(this.getSRID()),t}copy(){const t=this.copyInternal();return t.envelope=this._envelope==null?null:this._envelope.copy(),t._SRID=this._SRID,t._userData=this._userData,t}getPrecisionModel(){return this._factory.getPrecisionModel()}getEnvelopeInternal(){return this._envelope===null&&(this._envelope=this.computeEnvelopeInternal()),new dt(this._envelope)}setSRID(t){this._SRID=t}setUserData(t){this._userData=t}compare(t,e){const i=t.iterator(),s=e.iterator();for(;i.hasNext()&&s.hasNext();){const r=i.next(),o=s.next(),a=r.compareTo(o);if(a!==0)return a}return i.hasNext()?1:s.hasNext()?-1:0}hashCode(){return this.getEnvelopeInternal().hashCode()}isEquivalentClass(t){return this.getTypeCode()==t.getTypeCode()}get interfaces_(){return[jo,Ui,Fe]}getClass(){return W}static hasNonEmptyElements(t){for(let e=0;e<t.length;e++)if(!t[e].isEmpty())return!0;return!1}static hasNullElements(t){for(let e=0;e<t.length;e++)if(t[e]===null)return!0;return!1}}W.constructor_=function(n){n&&(this._envelope=null,this._userData=null,this._factory=n,this._SRID=n.getSRID())};W.TYPECODE_POINT=0;W.TYPECODE_MULTIPOINT=1;W.TYPECODE_LINESTRING=2;W.TYPECODE_LINEARRING=3;W.TYPECODE_MULTILINESTRING=4;W.TYPECODE_POLYGON=5;W.TYPECODE_MULTIPOLYGON=6;W.TYPECODE_GEOMETRYCOLLECTION=7;W.TYPENAME_POINT="Point";W.TYPENAME_MULTIPOINT="MultiPoint";W.TYPENAME_LINESTRING="LineString";W.TYPENAME_LINEARRING="LinearRing";W.TYPENAME_MULTILINESTRING="MultiLineString";W.TYPENAME_POLYGON="Polygon";W.TYPENAME_MULTIPOLYGON="MultiPolygon";W.TYPENAME_GEOMETRYCOLLECTION="GeometryCollection";W.geometryChangedFilter={get interfaces_(){return[Kr]},filter(n){n.geometryChangedAction()}};class Tl{filter(t){}}class D0{}class ut{getCoordinate(){}getCoordinateCopy(t){}createCoordinate(){}getDimension(){}hasM(){return this.getMeasures()>0}getX(t){}hasZ(){return this.getDimension()-this.getMeasures()>2}getMeasures(){return 0}expandEnvelope(t){}copy(){}getY(t){}toCoordinateArray(){}getM(t){if(this.hasM()){const e=this.getDimension()-this.getMeasures();return this.getOrdinate(t,e)}else return X.NaN}setOrdinate(t,e,i){}getZ(t){return this.hasZ()?this.getOrdinate(t,2):X.NaN}size(){}getOrdinate(t,e){}get interfaces_(){return[jo]}}ut.X=0;ut.Y=1;ut.Z=2;ut.M=3;class Bt{static scroll(){if(arguments.length===2){if(Z(arguments[0],ut)&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1];Bt.scroll(t,e,Bt.isRing(t))}else if(Z(arguments[0],ut)&&arguments[1]instanceof E){const t=arguments[0],e=arguments[1],i=Bt.indexOf(e,t);if(i<=0)return null;Bt.scroll(t,i)}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(e<=0)return null;const r=t.copy(),o=i?t.size()-1:t.size();for(let a=0;a<o;a++)for(let l=0;l<t.getDimension();l++)t.setOrdinate(a,l,r.getOrdinate((e+a)%o,l));if(i)for(let a=0;a<t.getDimension();a++)t.setOrdinate(o,a,t.getOrdinate(0,a))}}static isEqual(t,e){const i=t.size(),s=e.size();if(i!==s)return!1;const r=Math.min(t.getDimension(),e.getDimension());for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=t.getOrdinate(o,a),h=e.getOrdinate(o,a);if(t.getOrdinate(o,a)!==e.getOrdinate(o,a)&&!(X.isNaN(l)&&X.isNaN(h)))return!1}return!0}static minCoordinateIndex(){if(arguments.length===1){const t=arguments[0];return Bt.minCoordinateIndex(t,0,t.size()-1)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];let s=-1,r=null;for(let o=e;o<=i;o++){const a=t.getCoordinate(o);(r===null||r.compareTo(a)>0)&&(r=a,s=o)}return s}}static extend(t,e,i){const s=t.create(i,e.getDimension()),r=e.size();if(Bt.copy(e,0,s,0,r),r>0)for(let o=r;o<i;o++)Bt.copy(e,r-1,s,o,1);return s}static reverse(t){const e=t.size()-1,i=Math.trunc(e/2);for(let s=0;s<=i;s++)Bt.swap(t,s,e-s)}static ensureValidRing(t,e){const i=e.size();return i===0?e:i<=3?Bt.createClosedRing(t,e,4):e.getOrdinate(0,ut.X)===e.getOrdinate(i-1,ut.X)&&e.getOrdinate(0,ut.Y)===e.getOrdinate(i-1,ut.Y)?e:Bt.createClosedRing(t,e,i+1)}static minCoordinate(t){let e=null;for(let i=0;i<t.size();i++){const s=t.getCoordinate(i);(e===null||e.compareTo(s)>0)&&(e=s)}return e}static copyCoord(t,e,i,s){const r=Math.min(t.getDimension(),i.getDimension());for(let o=0;o<r;o++)i.setOrdinate(s,o,t.getOrdinate(e,o))}static isRing(t){const e=t.size();return e===0?!0:e<=3?!1:t.getOrdinate(0,ut.X)===t.getOrdinate(e-1,ut.X)&&t.getOrdinate(0,ut.Y)===t.getOrdinate(e-1,ut.Y)}static swap(t,e,i){if(e===i)return null;for(let s=0;s<t.getDimension();s++){const r=t.getOrdinate(e,s);t.setOrdinate(e,s,t.getOrdinate(i,s)),t.setOrdinate(i,s,r)}}static copy(t,e,i,s,r){for(let o=0;o<r;o++)Bt.copyCoord(t,e+o,i,s+o)}static indexOf(t,e){for(let i=0;i<e.size();i++)if(t.x===e.getOrdinate(i,ut.X)&&t.y===e.getOrdinate(i,ut.Y))return i;return-1}static createClosedRing(t,e,i){const s=t.create(i,e.getDimension()),r=e.size();Bt.copy(e,0,s,0,r);for(let o=r;o<i;o++)Bt.copy(e,0,s,o,1);return s}}class Ml{filter(t){}}class Cl{filter(t,e){}isGeometryChanged(){}isDone(){}}class ue extends W{constructor(){super(),ue.constructor_.apply(this,arguments)}static constructor_(){if(this._points=null,arguments.length!==0){if(arguments.length===2){const t=arguments[0],e=arguments[1];W.constructor_.call(this,e),this.init(t)}}}computeEnvelopeInternal(){return this.isEmpty()?new dt:this._points.expandEnvelope(new dt)}isRing(){return this.isClosed()&&Vt.isRing(this.getCoordinates())}getCoordinates(){return this._points.toCoordinateArray()}copyInternal(){return new ue(this._points.copy(),this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof W){const t=arguments[0],e=arguments[1];if(!this.isEquivalentClass(t))return!1;const i=t;if(this._points.size()!==i._points.size())return!1;for(let s=0;s<this._points.size();s++)if(!this.equal(this._points.getCoordinate(s),i._points.getCoordinate(s),e))return!1;return!0}else return super.equalsExact.apply(this,arguments)}isClosed(){return this.isEmpty()?!1:this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints()-1))}reverseInternal(){const t=this._points.copy();return Bt.reverse(t),this.getFactory().createLineString(t)}getEndPoint(){return this.isEmpty()?null:this.getPointN(this.getNumPoints()-1)}getTypeCode(){return W.TYPECODE_LINESTRING}getDimension(){return 1}getBoundary(){throw new Ti}isEquivalentClass(t){return t instanceof ue}getCoordinateSequence(){return this._points}getPointN(t){return this.getFactory().createPoint(this._points.getCoordinate(t))}normalize(){for(let t=0;t<Math.trunc(this._points.size()/2);t++){const e=this._points.size()-1-t;if(!this._points.getCoordinate(t).equals(this._points.getCoordinate(e))){if(this._points.getCoordinate(t).compareTo(this._points.getCoordinate(e))>0){const i=this._points.copy();Bt.reverse(i),this._points=i}return null}}}getCoordinate(){return this.isEmpty()?null:this._points.getCoordinate(0)}getBoundaryDimension(){return this.isClosed()?I.FALSE:0}getLength(){return QC.ofLine(this._points)}getNumPoints(){return this._points.size()}compareToSameClass(){if(arguments.length===1){const e=arguments[0];let i=0,s=0;for(;i<this._points.size()&&s<e._points.size();){const r=this._points.getCoordinate(i).compareTo(e._points.getCoordinate(s));if(r!==0)return r;i++,s++}return i<this._points.size()?1:s<e._points.size()?-1:0}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t;return e.compare(this._points,i._points)}}apply(){if(Z(arguments[0],Tl)){const t=arguments[0];for(let e=0;e<this._points.size();e++)t.filter(this._points.getCoordinate(e))}else if(Z(arguments[0],Cl)){const t=arguments[0];if(this._points.size()===0)return null;for(let e=0;e<this._points.size()&&(t.filter(this._points,e),!t.isDone());e++);t.isGeometryChanged()&&this.geometryChanged()}else Z(arguments[0],Ml)?arguments[0].filter(this):Z(arguments[0],Kr)&&arguments[0].filter(this)}getCoordinateN(t){return this._points.getCoordinate(t)}getGeometryType(){return W.TYPENAME_LINESTRING}isEmpty(){return this._points.size()===0}init(t){if(t===null&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),t.size()===1)throw new ft("Invalid number of points in LineString (found "+t.size()+" - must be 0 or >= 2)");this._points=t}isCoordinate(t){for(let e=0;e<this._points.size();e++)if(this._points.getCoordinate(e).equals(t))return!0;return!1}getStartPoint(){return this.isEmpty()?null:this.getPointN(0)}get interfaces_(){return[D0]}}class oi extends ue{constructor(){super(),oi.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];ue.constructor_.call(this,t,e),this.validateConstruction()}copyInternal(){return new oi(this._points.copy(),this._factory)}getBoundaryDimension(){return I.FALSE}isClosed(){return this.isEmpty()?!0:super.isClosed.call(this)}reverseInternal(){const t=this._points.copy();return Bt.reverse(t),this.getFactory().createLinearRing(t)}getTypeCode(){return W.TYPECODE_LINEARRING}validateConstruction(){if(!this.isEmpty()&&!super.isClosed.call(this))throw new ft("Points of LinearRing do not form a closed linestring");if(this.getCoordinateSequence().size()>=1&&this.getCoordinateSequence().size()<oi.MINIMUM_VALID_SIZE)throw new ft("Invalid number of points in LinearRing (found "+this.getCoordinateSequence().size()+" - must be 0 or >= 4)")}getGeometryType(){return W.TYPENAME_LINEARRING}}oi.MINIMUM_VALID_SIZE=4;class F0{create(){if(arguments.length===1)arguments[0]instanceof Array||Z(arguments[0],ut);else if(arguments.length!==2){if(arguments.length===3){const t=arguments[0],e=arguments[1];return this.create(t,e)}}}}class Rl{constructor(t){this.str=t}append(t){this.str+=t}setCharAt(t,e){this.str=this.str.substr(0,t)+e+this.str.substr(t+1)}toString(){return this.str}}class en{constructor(){en.constructor_.apply(this,arguments)}static constructor_(){if(this._dimension=3,this._measures=0,this._coordinates=null,arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];en.constructor_.call(this,t,Vt.dimension(t),Vt.measures(t))}else if(Number.isInteger(arguments[0])){const t=arguments[0];this._coordinates=new Array(t).fill(null);for(let e=0;e<t;e++)this._coordinates[e]=new E}else if(Z(arguments[0],ut)){const t=arguments[0];if(t===null)return this._coordinates=new Array(0).fill(null),null;this._dimension=t.getDimension(),this._measures=t.getMeasures(),this._coordinates=new Array(t.size()).fill(null);for(let e=0;e<this._coordinates.length;e++)this._coordinates[e]=t.getCoordinateCopy(e)}}else if(arguments.length===2){if(arguments[0]instanceof Array&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1];en.constructor_.call(this,t,e,Vt.measures(t))}else if(Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1];this._coordinates=new Array(t).fill(null),this._dimension=e;for(let i=0;i<t;i++)this._coordinates[i]=pr.create(e)}}else if(arguments.length===3){if(Number.isInteger(arguments[2])&&arguments[0]instanceof Array&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1],i=arguments[2];this._dimension=e,this._measures=i,t===null?this._coordinates=new Array(0).fill(null):this._coordinates=t}else if(Number.isInteger(arguments[2])&&Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){const t=arguments[0],e=arguments[1],i=arguments[2];this._coordinates=new Array(t).fill(null),this._dimension=e,this._measures=i;for(let s=0;s<t;s++)this._coordinates[s]=this.createCoordinate()}}}getCoordinate(){if(arguments.length===1){const t=arguments[0];return this._coordinates[t]}else if(arguments.length===2){const t=arguments[0];arguments[1].setCoordinate(this._coordinates[t])}}getCoordinateCopy(t){const e=this.createCoordinate();return e.setCoordinate(this._coordinates[t]),e}createCoordinate(){return pr.create(this.getDimension(),this.getMeasures())}getDimension(){return this._dimension}getX(t){return this._coordinates[t].x}getMeasures(){return this._measures}expandEnvelope(t){for(let e=0;e<this._coordinates.length;e++)t.expandToInclude(this._coordinates[e]);return t}copy(){const t=new Array(this.size()).fill(null);for(let e=0;e<this._coordinates.length;e++){const i=this.createCoordinate();i.setCoordinate(this._coordinates[e]),t[e]=i}return new en(t,this._dimension,this._measures)}toString(){if(this._coordinates.length>0){const t=new Rl(17*this._coordinates.length);t.append("("),t.append(this._coordinates[0]);for(let e=1;e<this._coordinates.length;e++)t.append(", "),t.append(this._coordinates[e]);return t.append(")"),t.toString()}else return"()"}getY(t){return this._coordinates[t].y}toCoordinateArray(){return this._coordinates}getM(t){return this.hasM()?this._coordinates[t].getM():X.NaN}setOrdinate(t,e,i){switch(e){case ut.X:this._coordinates[t].x=i;break;case ut.Y:this._coordinates[t].y=i;break;default:this._coordinates[t].setOrdinate(e,i)}}getZ(t){return this.hasZ()?this._coordinates[t].getZ():X.NaN}size(){return this._coordinates.length}getOrdinate(t,e){switch(e){case ut.X:return this._coordinates[t].x;case ut.Y:return this._coordinates[t].y;default:return this._coordinates[t].getOrdinate(e)}}get interfaces_(){return[ut,Fe]}}class Tr{static instance(){return Tr.instanceObject}readResolve(){return Tr.instance()}create(){if(arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];return new en(t)}else if(Z(arguments[0],ut)){const t=arguments[0];return new en(t)}}else if(arguments.length===2){let t=arguments[0],e=arguments[1];return e>3&&(e=3),e<2&&(e=2),new en(t,e)}else if(arguments.length===3){let t=arguments[0],e=arguments[1],i=arguments[2],s=e-i;return i>1&&(i=1),s>3&&(s=3),s<2&&(s=2),new en(t,s+i,i)}}get interfaces_(){return[F0,Fe]}}Tr.instanceObject=new Tr;let k0=class extends Be{contains(){}};class nR extends k0{}class sc extends nR{constructor(t){super(),this.array=[],t instanceof Be&&this.addAll(t)}contains(t){for(const e of this.array)if(e.compareTo(t)===0)return!0;return!1}add(t){if(this.contains(t))return!1;for(let e=0,i=this.array.length;e<i;e++)if(this.array[e].compareTo(t)===1)return!!this.array.splice(e,0,t);return this.array.push(t),!0}addAll(t){for(const e of t)this.add(e);return!0}remove(){throw new Ti}size(){return this.array.length}isEmpty(){return this.array.length===0}toArray(){return this.array.slice()}iterator(){return new sR(this.array)}}let sR=class{constructor(t){this.array=t,this.position=0}next(){if(this.position===this.array.length)throw new Dr;return this.array[this.position++]}hasNext(){return this.position<this.array.length}remove(){throw new Ti}};class hs{static sort(){const t=arguments[0];if(arguments.length===1)t.sort((e,i)=>e.compareTo(i));else if(arguments.length===2)t.sort((e,i)=>arguments[1].compare(e,i));else if(arguments.length===3){const e=t.slice(arguments[1],arguments[2]);e.sort();const i=t.slice(0,arguments[1]).concat(e,t.slice(arguments[2],t.length));t.splice(0,t.length);for(const s of i)t.push(s)}else if(arguments.length===4){const e=t.slice(arguments[1],arguments[2]);e.sort((s,r)=>arguments[3].compare(s,r));const i=t.slice(0,arguments[1]).concat(e,t.slice(arguments[2],t.length));t.splice(0,t.length);for(const s of i)t.push(s)}}static asList(t){const e=new it;for(const i of t)e.add(i);return e}static copyOf(t,e){return t.slice(0,e)}}class jt extends W{constructor(){super(),jt.constructor_.apply(this,arguments)}static constructor_(){if(this._geometries=null,arguments.length!==0){if(arguments.length===2){let t=arguments[0],e=arguments[1];if(W.constructor_.call(this,e),t===null&&(t=[]),W.hasNullElements(t))throw new ft("geometries must not contain null elements");this._geometries=t}}}computeEnvelopeInternal(){const t=new dt;for(let e=0;e<this._geometries.length;e++)t.expandToInclude(this._geometries[e].getEnvelopeInternal());return t}getGeometryN(t){return this._geometries[t]}getCoordinates(){const t=new Array(this.getNumPoints()).fill(null);let e=-1;for(let i=0;i<this._geometries.length;i++){const s=this._geometries[i].getCoordinates();for(let r=0;r<s.length;r++)e++,t[e]=s[r]}return t}getArea(){let t=0;for(let e=0;e<this._geometries.length;e++)t+=this._geometries[e].getArea();return t}copyInternal(){const t=new Array(this._geometries.length).fill(null);for(let e=0;e<t.length;e++)t[e]=this._geometries[e].copy();return new jt(t,this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof W){const t=arguments[0],e=arguments[1];if(!this.isEquivalentClass(t))return!1;const i=t;if(this._geometries.length!==i._geometries.length)return!1;for(let s=0;s<this._geometries.length;s++)if(!this._geometries[s].equalsExact(i._geometries[s],e))return!1;return!0}else return super.equalsExact.apply(this,arguments)}reverseInternal(){const t=this._geometries.length,e=new it(t);for(let i=0;i<t;i++)e.add(this._geometries[i].reverse());return this.getFactory().buildGeometry(e)}getTypeCode(){return W.TYPECODE_GEOMETRYCOLLECTION}getDimension(){let t=I.FALSE;for(let e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getDimension());return t}getNumGeometries(){return this._geometries.length}getBoundary(){return W.checkNotGeometryCollection(this),rt.shouldNeverReachHere(),null}getGeometryType(){return W.TYPENAME_GEOMETRYCOLLECTION}isEmpty(){for(let t=0;t<this._geometries.length;t++)if(!this._geometries[t].isEmpty())return!1;return!0}normalize(){for(let t=0;t<this._geometries.length;t++)this._geometries[t].normalize();hs.sort(this._geometries)}getCoordinate(){return this.isEmpty()?null:this._geometries[0].getCoordinate()}getBoundaryDimension(){let t=I.FALSE;for(let e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getBoundaryDimension());return t}getLength(){let t=0;for(let e=0;e<this._geometries.length;e++)t+=this._geometries[e].getLength();return t}getNumPoints(){let t=0;for(let e=0;e<this._geometries.length;e++)t+=this._geometries[e].getNumPoints();return t}compareToSameClass(){if(arguments.length===1){const t=arguments[0],e=new sc(hs.asList(this._geometries)),i=new sc(hs.asList(t._geometries));return this.compare(e,i)}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t,s=this.getNumGeometries(),r=i.getNumGeometries();let o=0;for(;o<s&&o<r;){const a=this.getGeometryN(o),l=i.getGeometryN(o),h=a.compareToSameClass(l,e);if(h!==0)return h;o++}return o<s?1:o<r?-1:0}}apply(){if(Z(arguments[0],Tl)){const t=arguments[0];for(let e=0;e<this._geometries.length;e++)this._geometries[e].apply(t)}else if(Z(arguments[0],Cl)){const t=arguments[0];if(this._geometries.length===0)return null;for(let e=0;e<this._geometries.length&&(this._geometries[e].apply(t),!t.isDone());e++);t.isGeometryChanged()&&this.geometryChanged()}else if(Z(arguments[0],Ml)){const t=arguments[0];t.filter(this);for(let e=0;e<this._geometries.length;e++)this._geometries[e].apply(t)}else if(Z(arguments[0],Kr)){const t=arguments[0];t.filter(this);for(let e=0;e<this._geometries.length;e++)this._geometries[e].apply(t)}}}class El{}class ai extends jt{constructor(){super(),ai.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];jt.constructor_.call(this,t,e)}copyInternal(){const t=new Array(this._geometries.length).fill(null);for(let e=0;e<t.length;e++)t[e]=this._geometries[e].copy();return new ai(t,this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof W){const t=arguments[0],e=arguments[1];return this.isEquivalentClass(t)?super.equalsExact.call(this,t,e):!1}else return super.equalsExact.apply(this,arguments)}getBoundaryDimension(){return 1}getTypeCode(){return W.TYPECODE_MULTIPOLYGON}getDimension(){return 2}getBoundary(){if(this.isEmpty())return this.getFactory().createMultiLineString();const t=new it;for(let i=0;i<this._geometries.length;i++){const r=this._geometries[i].getBoundary();for(let o=0;o<r.getNumGeometries();o++)t.add(r.getGeometryN(o))}const e=new Array(t.size()).fill(null);return this.getFactory().createMultiLineString(t.toArray(e))}getGeometryType(){return W.TYPENAME_MULTIPOLYGON}get interfaces_(){return[El]}}let G0=class{get(){}put(){}size(){}values(){}entrySet(){}};class z0 extends k0{constructor(t){super(),this.map=new Map,t instanceof Be&&this.addAll(t)}contains(t){const e=t.hashCode?t.hashCode():t;return!!this.map.has(e)}add(t){const e=t.hashCode?t.hashCode():t;return this.map.has(e)?!1:!!this.map.set(e,t)}addAll(t){for(const e of t)this.add(e);return!0}remove(){throw new Ti}size(){return this.map.size}isEmpty(){return this.map.size===0}toArray(){return Array.from(this.map.values())}iterator(){return new rR(this.map)}[Symbol.iterator](){return this.map}}let rR=class{constructor(t){this.iterator=t.values();const{done:e,value:i}=this.iterator.next();this.done=e,this.value=i}next(){if(this.done)throw new Dr;const t=this.value,{done:e,value:i}=this.iterator.next();return this.done=e,this.value=i,t}hasNext(){return!this.done}remove(){throw new Ti}};class W0 extends G0{constructor(){super(),this.map=new Map}get(t){return this.map.get(t)||null}put(t,e){return this.map.set(t,e),e}values(){const t=new it,e=this.map.values();let i=e.next();for(;!i.done;)t.add(i.value),i=e.next();return t}entrySet(){const t=new z0;return this.map.entries().forEach(e=>t.add(e)),t}size(){return this.map.size()}}class vl{constructor(t){this.value=t}intValue(){return this.value}compareTo(t){return this.value<t?-1:this.value>t?1:0}static compare(t,e){return t<e?-1:t>e?1:0}static isNan(t){return Number.isNaN(t)}static valueOf(t){return new vl(t)}}class Pt{constructor(){Pt.constructor_.apply(this,arguments)}static constructor_(){if(this._modelType=null,this._scale=null,arguments.length===0)this._modelType=Pt.FLOATING;else if(arguments.length===1){if(arguments[0]instanceof Fi){const t=arguments[0];this._modelType=t,t===Pt.FIXED&&this.setScale(1)}else if(typeof arguments[0]=="number"){const t=arguments[0];this._modelType=Pt.FIXED,this.setScale(t)}else if(arguments[0]instanceof Pt){const t=arguments[0];this._modelType=t._modelType,this._scale=t._scale}}}static mostPrecise(t,e){return t.compareTo(e)>=0?t:e}equals(t){if(!(t instanceof Pt))return!1;const e=t;return this._modelType===e._modelType&&this._scale===e._scale}compareTo(t){const e=t,i=this.getMaximumSignificantDigits(),s=e.getMaximumSignificantDigits();return vl.compare(i,s)}getType(){return this._modelType}toString(){let t="UNKNOWN";return this._modelType===Pt.FLOATING?t="Floating":this._modelType===Pt.FLOATING_SINGLE?t="Floating-Single":this._modelType===Pt.FIXED&&(t="Fixed (Scale="+this.getScale()+")"),t}makePrecise(){if(typeof arguments[0]=="number"){const t=arguments[0];return X.isNaN(t)||this._modelType===Pt.FLOATING_SINGLE?t:this._modelType===Pt.FIXED?Math.round(t*this._scale)/this._scale:t}else if(arguments[0]instanceof E){const t=arguments[0];if(this._modelType===Pt.FLOATING)return null;t.x=this.makePrecise(t.x),t.y=this.makePrecise(t.y)}}getMaximumSignificantDigits(){let t=16;return this._modelType===Pt.FLOATING?t=16:this._modelType===Pt.FLOATING_SINGLE?t=6:this._modelType===Pt.FIXED&&(t=1+Math.trunc(Math.ceil(Math.log(this.getScale())/Math.log(10)))),t}setScale(t){this._scale=Math.abs(t)}getScale(){return this._scale}isFloating(){return this._modelType===Pt.FLOATING||this._modelType===Pt.FLOATING_SINGLE}get interfaces_(){return[Fe,Ui]}}class Fi{constructor(){Fi.constructor_.apply(this,arguments)}static constructor_(){this._name=null;const t=arguments[0];this._name=t,Fi.nameToTypeMap.put(t,this)}readResolve(){return Fi.nameToTypeMap.get(this._name)}toString(){return this._name}get interfaces_(){return[Fe]}}Fi.nameToTypeMap=new W0;Pt.Type=Fi;Pt.FIXED=new Fi("FIXED");Pt.FLOATING=new Fi("FLOATING");Pt.FLOATING_SINGLE=new Fi("FLOATING SINGLE");Pt.maximumPreciseValue=9007199254740992;class ws extends jt{constructor(){super(),ws.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];jt.constructor_.call(this,t,e)}copyInternal(){const t=new Array(this._geometries.length).fill(null);for(let e=0;e<t.length;e++)t[e]=this._geometries[e].copy();return new ws(t,this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof W){const t=arguments[0],e=arguments[1];return this.isEquivalentClass(t)?super.equalsExact.call(this,t,e):!1}else return super.equalsExact.apply(this,arguments)}getBoundaryDimension(){return this.isClosed()?I.FALSE:0}isClosed(){if(this.isEmpty())return!1;for(let t=0;t<this._geometries.length;t++)if(!this._geometries[t].isClosed())return!1;return!0}getTypeCode(){return W.TYPECODE_MULTILINESTRING}getDimension(){return 1}getBoundary(){throw new Ti}getGeometryType(){return W.TYPENAME_MULTILINESTRING}get interfaces_(){return[D0]}}class B0{}class _s extends Un{constructor(t){super(t),this.name=Object.keys({IllegalStateException:_s})[0]}}class Bi extends W{constructor(){super(),Bi.constructor_.apply(this,arguments)}static constructor_(){this._coordinates=null;const t=arguments[0],e=arguments[1];W.constructor_.call(this,e),this.init(t)}computeEnvelopeInternal(){if(this.isEmpty())return new dt;const t=new dt;return t.expandToInclude(this._coordinates.getX(0),this._coordinates.getY(0)),t}getCoordinates(){return this.isEmpty()?[]:[this.getCoordinate()]}copyInternal(){return new Bi(this._coordinates.copy(),this._factory)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof W){const t=arguments[0],e=arguments[1];return this.isEquivalentClass(t)?this.isEmpty()&&t.isEmpty()?!0:this.isEmpty()!==t.isEmpty()?!1:this.equal(t.getCoordinate(),this.getCoordinate(),e):!1}else return super.equalsExact.apply(this,arguments)}reverseInternal(){return this.getFactory().createPoint(this._coordinates.copy())}getTypeCode(){return W.TYPECODE_POINT}getDimension(){return 0}getNumPoints(){return this.isEmpty()?0:1}getX(){if(this.getCoordinate()===null)throw new _s("getX called on empty Point");return this.getCoordinate().x}getBoundary(){return this.getFactory().createGeometryCollection()}getGeometryType(){return W.TYPENAME_POINT}getCoordinateSequence(){return this._coordinates}getY(){if(this.getCoordinate()===null)throw new _s("getY called on empty Point");return this.getCoordinate().y}isSimple(){return!0}normalize(){}getCoordinate(){return this._coordinates.size()!==0?this._coordinates.getCoordinate(0):null}getBoundaryDimension(){return I.FALSE}compareToSameClass(){if(arguments.length===1){const e=arguments[0];return this.getCoordinate().compareTo(e.getCoordinate())}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t;return e.compare(this._coordinates,i._coordinates)}}apply(){if(Z(arguments[0],Tl)){const t=arguments[0];if(this.isEmpty())return null;t.filter(this.getCoordinate())}else if(Z(arguments[0],Cl)){const t=arguments[0];if(this.isEmpty())return null;t.filter(this._coordinates,0),t.isGeometryChanged()&&this.geometryChanged()}else Z(arguments[0],Ml)?arguments[0].filter(this):Z(arguments[0],Kr)&&arguments[0].filter(this)}isEmpty(){return this._coordinates.size()===0}init(t){t===null&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),rt.isTrue(t.size()<=1),this._coordinates=t}get interfaces_(){return[B0]}}class Co{static ofRingSigned(){if(arguments[0]instanceof Array){const t=arguments[0];if(t.length<3)return 0;let e=0;const i=t[0].x;for(let s=1;s<t.length-1;s++){const r=t[s].x-i,o=t[s+1].y,a=t[s-1].y;e+=r*(a-o)}return e/2}else if(Z(arguments[0],ut)){const t=arguments[0],e=t.size();if(e<3)return 0;const i=new E,s=new E,r=new E;t.getCoordinate(0,s),t.getCoordinate(1,r);const o=s.x;r.x-=o;let a=0;for(let l=1;l<e-1;l++)i.y=s.y,s.x=r.x,s.y=r.y,t.getCoordinate(l+1,r),r.x-=o,a+=s.x*(i.y-r.y);return a/2}}static ofRing(){if(arguments[0]instanceof Array){const t=arguments[0];return Math.abs(Co.ofRingSigned(t))}else if(Z(arguments[0],ut)){const t=arguments[0];return Math.abs(Co.ofRingSigned(t))}}}class Ro{constructor(t){this.str=t}append(t){this.str+=t}setCharAt(t,e){this.str=this.str.substr(0,t)+e+this.str.substr(t+1)}toString(){return this.str}}class b{constructor(){b.constructor_.apply(this,arguments)}static constructor_(){if(this._hi=0,this._lo=0,arguments.length===0)this.init(0);else if(arguments.length===1){if(typeof arguments[0]=="number"){const t=arguments[0];this.init(t)}else if(arguments[0]instanceof b){const t=arguments[0];this.init(t)}else if(typeof arguments[0]=="string"){const t=arguments[0];b.constructor_.call(this,b.parse(t))}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.init(t,e)}}static determinant(){if(typeof arguments[3]=="number"&&typeof arguments[2]=="number"&&typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];return b.determinant(b.valueOf(t),b.valueOf(e),b.valueOf(i),b.valueOf(s))}else if(arguments[3]instanceof b&&arguments[2]instanceof b&&arguments[0]instanceof b&&arguments[1]instanceof b){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];return t.multiply(s).selfSubtract(e.multiply(i))}}static sqr(t){return b.valueOf(t).selfMultiply(t)}static valueOf(){if(typeof arguments[0]=="string"){const t=arguments[0];return b.parse(t)}else if(typeof arguments[0]=="number"){const t=arguments[0];return new b(t)}}static sqrt(t){return b.valueOf(t).sqrt()}static parse(t){let e=0;const i=t.length;for(;nc.isWhitespace(t.charAt(e));)e++;let s=!1;if(e<i){const g=t.charAt(e);(g==="-"||g==="+")&&(e++,g==="-"&&(s=!0))}const r=new b;let o=0,a=0,l=0,h=!1;for(;!(e>=i);){const g=t.charAt(e);if(e++,nc.isDigit(g)){const d=g-"0";r.selfMultiply(b.TEN),r.selfAdd(d),o++;continue}if(g==="."){a=o,h=!0;continue}if(g==="e"||g==="E"){const d=t.substring(e);try{l=vl.parseInt(d)}catch(f){throw f instanceof NumberFormatException?new NumberFormatException("Invalid exponent "+d+" in string "+t):f}break}throw new NumberFormatException("Unexpected character '"+g+"' at position "+e+" in string "+t)}let c=r;h||(a=o);const u=o-a-l;if(u===0)c=r;else if(u>0){const g=b.TEN.pow(u);c=r.divide(g)}else if(u<0){const g=b.TEN.pow(-u);c=r.multiply(g)}return s?c.negate():c}static createNaN(){return new b(X.NaN,X.NaN)}static copy(t){return new b(t)}static magnitude(t){const e=Math.abs(t),i=Math.log(e)/Math.log(10);let s=Math.trunc(Math.floor(i));return Math.pow(10,s)*10<=e&&(s+=1),s}static stringOfChar(t,e){const i=new Ro;for(let s=0;s<e;s++)i.append(t);return i.toString()}le(t){return this._hi<t._hi||this._hi===t._hi&&this._lo<=t._lo}extractSignificantDigits(t,e){let i=this.abs(),s=b.magnitude(i._hi);const r=b.TEN.pow(s);i=i.divide(r),i.gt(b.TEN)?(i=i.divide(b.TEN),s+=1):i.lt(b.ONE)&&(i=i.multiply(b.TEN),s-=1);const o=s+1,a=new Ro,l=b.MAX_PRINT_DIGITS-1;for(let h=0;h<=l;h++){t&&h===o&&a.append(".");const c=Math.trunc(i._hi);if(c<0)break;let u=!1,g=0;c>9?(u=!0,g="9"):g="0"+c,a.append(g),i=i.subtract(b.valueOf(c)).multiply(b.TEN),u&&i.selfAdd(b.TEN);let d=!0;const f=b.magnitude(i._hi);if(f<0&&Math.abs(f)>=l-h&&(d=!1),!d)break}return e[0]=s,a.toString()}sqr(){return this.multiply(this)}getSpecialNumberString(){return this.isZero()?"0.0":this.isNaN()?"NaN ":null}setValue(){if(arguments[0]instanceof b){const t=arguments[0];return this.init(t),this}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.init(t),this}}multiply(){if(arguments[0]instanceof b){const t=arguments[0];return t.isNaN()?b.createNaN():b.copy(this).selfMultiply(t)}else if(typeof arguments[0]=="number"){const t=arguments[0];return X.isNaN(t)?b.createNaN():b.copy(this).selfMultiply(t,0)}}isNaN(){return X.isNaN(this._hi)}reciprocal(){let t=null,e=null,i=null,s=null,r=null,o=null,a=null,l=null;r=1/this._hi,o=b.SPLIT*r,t=o-r,l=b.SPLIT*this._hi,t=o-t,e=r-t,i=l-this._hi,a=r*this._hi,i=l-i,s=this._hi-i,l=t*i-a+t*s+e*i+e*s,o=(1-a-l-r*this._lo)/this._hi;const h=r+o,c=r-h+o;return new b(h,c)}doubleValue(){return this._hi+this._lo}subtract(){if(arguments[0]instanceof b){const t=arguments[0];return this.add(t.negate())}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.add(-t)}}equals(){if(arguments.length===1&&arguments[0]instanceof b){const t=arguments[0];return this._hi===t._hi&&this._lo===t._lo}}isZero(){return this._hi===0&&this._lo===0}selfSubtract(){if(arguments[0]instanceof b){const t=arguments[0];return this.isNaN()?this:this.selfAdd(-t._hi,-t._lo)}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.isNaN()?this:this.selfAdd(-t,0)}}min(t){return this.le(t)?this:t}selfDivide(){if(arguments.length===1){if(arguments[0]instanceof b){const t=arguments[0];return this.selfDivide(t._hi,t._lo)}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.selfDivide(t,0)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];let i=null,s=null,r=null,o=null,a=null,l=null,h=null,c=null;return a=this._hi/t,l=b.SPLIT*a,i=l-a,c=b.SPLIT*t,i=l-i,s=a-i,r=c-t,h=a*t,r=c-r,o=t-r,c=i*r-h+i*o+s*r+s*o,l=(this._hi-h-c+this._lo-a*e)/t,c=a+l,this._hi=c,this._lo=a-c+l,this}}dump(){return"DD<"+this._hi+", "+this._lo+">"}divide(){if(arguments[0]instanceof b){const t=arguments[0];let e=null,i=null,s=null,r=null,o=null,a=null,l=null,h=null;o=this._hi/t._hi,a=b.SPLIT*o,e=a-o,h=b.SPLIT*t._hi,e=a-e,i=o-e,s=h-t._hi,l=o*t._hi,s=h-s,r=t._hi-s,h=e*s-l+e*r+i*s+i*r,a=(this._hi-l-h+this._lo-o*t._lo)/t._hi,h=o+a;const c=h,u=o-h+a;return new b(c,u)}else if(typeof arguments[0]=="number"){const t=arguments[0];return X.isNaN(t)?b.createNaN():b.copy(this).selfDivide(t,0)}}ge(t){return this._hi>t._hi||this._hi===t._hi&&this._lo>=t._lo}pow(t){if(t===0)return b.valueOf(1);let e=new b(this),i=b.valueOf(1),s=Math.abs(t);if(s>1)for(;s>0;)s%2===1&&i.selfMultiply(e),s/=2,s>0&&(e=e.sqr());else i=e;return t<0?i.reciprocal():i}ceil(){if(this.isNaN())return b.NaN;const t=Math.ceil(this._hi);let e=0;return t===this._hi&&(e=Math.ceil(this._lo)),new b(t,e)}compareTo(t){const e=t;return this._hi<e._hi?-1:this._hi>e._hi?1:this._lo<e._lo?-1:this._lo>e._lo?1:0}rint(){return this.isNaN()?this:this.add(.5).floor()}max(t){return this.ge(t)?this:t}sqrt(){if(this.isZero())return b.valueOf(0);if(this.isNegative())return b.NaN;const t=1/Math.sqrt(this._hi),e=this._hi*t,i=b.valueOf(e),r=this.subtract(i.sqr())._hi*(t*.5);return i.add(r)}selfAdd(){if(arguments.length===1){if(arguments[0]instanceof b){const t=arguments[0];return this.selfAdd(t._hi,t._lo)}else if(typeof arguments[0]=="number"){const t=arguments[0];let e=null,i=null,s=null,r=null,o=null,a=null;return s=this._hi+t,o=s-this._hi,r=s-o,r=t-o+(this._hi-r),a=r+this._lo,e=s+a,i=a+(s-e),this._hi=e+i,this._lo=i+(e-this._hi),this}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];let i=null,s=null,r=null,o=null,a=null,l=null,h=null,c=null;a=this._hi+t,r=this._lo+e,h=a-this._hi,c=r-this._lo,l=a-h,o=r-c,l=t-h+(this._hi-l),o=e-c+(this._lo-o),h=l+r,i=a+h,s=h+(a-i),h=o+s;const u=i+h,g=h+(i-u);return this._hi=u,this._lo=g,this}}selfMultiply(){if(arguments.length===1){if(arguments[0]instanceof b){const t=arguments[0];return this.selfMultiply(t._hi,t._lo)}else if(typeof arguments[0]=="number"){const t=arguments[0];return this.selfMultiply(t,0)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];let i=null,s=null,r=null,o=null,a=null,l=null;a=b.SPLIT*this._hi,i=a-this._hi,l=b.SPLIT*t,i=a-i,s=this._hi-i,r=l-t,a=this._hi*t,r=l-r,o=t-r,l=i*r-a+i*o+s*r+s*o+(this._hi*e+this._lo*t);const h=a+l;i=a-h;const c=l+i;return this._hi=h,this._lo=c,this}}selfSqr(){return this.selfMultiply(this)}floor(){if(this.isNaN())return b.NaN;const t=Math.floor(this._hi);let e=0;return t===this._hi&&(e=Math.floor(this._lo)),new b(t,e)}negate(){return this.isNaN()?this:new b(-this._hi,-this._lo)}clone(){try{return null}catch(t){if(t instanceof CloneNotSupportedException)return null;throw t}}intValue(){return Math.trunc(this._hi)}toString(){const t=b.magnitude(this._hi);return t>=-3&&t<=20?this.toStandardNotation():this.toSciNotation()}toStandardNotation(){const t=this.getSpecialNumberString();if(t!==null)return t;const e=new Array(1).fill(null),i=this.extractSignificantDigits(!0,e),s=e[0]+1;let r=i;if(i.charAt(0)===".")r="0"+i;else if(s<0)r="0."+b.stringOfChar("0",-s)+i;else if(i.indexOf(".")===-1){const o=s-i.length,a=b.stringOfChar("0",o);r=i+a+".0"}return this.isNegative()?"-"+r:r}toSciNotation(){if(this.isZero())return b.SCI_NOT_ZERO;const t=this.getSpecialNumberString();if(t!==null)return t;const e=new Array(1).fill(null),i=this.extractSignificantDigits(!1,e),s=b.SCI_NOT_EXPONENT_CHAR+e[0];if(i.charAt(0)==="0")throw new _s("Found leading zero: "+i);let r="";i.length>1&&(r=i.substring(1));const o=i.charAt(0)+"."+r;return this.isNegative()?"-"+o+s:o+s}abs(){return this.isNaN()?b.NaN:this.isNegative()?this.negate():new b(this)}isPositive(){return this._hi>0||this._hi===0&&this._lo>0}lt(t){return this._hi<t._hi||this._hi===t._hi&&this._lo<t._lo}add(){if(arguments[0]instanceof b){const t=arguments[0];return b.copy(this).selfAdd(t)}else if(typeof arguments[0]=="number"){const t=arguments[0];return b.copy(this).selfAdd(t)}}init(){if(arguments.length===1){if(typeof arguments[0]=="number"){const t=arguments[0];this._hi=t,this._lo=0}else if(arguments[0]instanceof b){const t=arguments[0];this._hi=t._hi,this._lo=t._lo}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this._hi=t,this._lo=e}}gt(t){return this._hi>t._hi||this._hi===t._hi&&this._lo>t._lo}isNegative(){return this._hi<0||this._hi===0&&this._lo<0}trunc(){return this.isNaN()?b.NaN:this.isPositive()?this.floor():this.ceil()}signum(){return this._hi>0?1:this._hi<0?-1:this._lo>0?1:this._lo<0?-1:0}get interfaces_(){return[Fe,Ui,jo]}}b.PI=new b(3.141592653589793,12246467991473532e-32);b.TWO_PI=new b(6.283185307179586,24492935982947064e-32);b.PI_2=new b(1.5707963267948966,6123233995736766e-32);b.E=new b(2.718281828459045,14456468917292502e-32);b.NaN=new b(X.NaN,X.NaN);b.EPS=123259516440783e-46;b.SPLIT=134217729;b.MAX_PRINT_DIGITS=32;b.TEN=b.valueOf(10);b.ONE=b.valueOf(1);b.SCI_NOT_EXPONENT_CHAR="E";b.SCI_NOT_ZERO="0.0E0";class bi{static orientationIndex(t,e,i){const s=bi.orientationIndexFilter(t,e,i);if(s<=1)return s;const r=b.valueOf(e.x).selfAdd(-t.x),o=b.valueOf(e.y).selfAdd(-t.y),a=b.valueOf(i.x).selfAdd(-e.x),l=b.valueOf(i.y).selfAdd(-e.y);return r.selfMultiply(l).selfSubtract(o.selfMultiply(a)).signum()}static signOfDet2x2(){if(arguments[3]instanceof b&&arguments[2]instanceof b&&arguments[0]instanceof b&&arguments[1]instanceof b){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];return t.multiply(s).selfSubtract(e.multiply(i)).signum()}else if(typeof arguments[3]=="number"&&typeof arguments[2]=="number"&&typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3],r=b.valueOf(t),o=b.valueOf(e),a=b.valueOf(i),l=b.valueOf(s);return r.multiply(l).selfSubtract(o.multiply(a)).signum()}}static intersection(t,e,i,s){const r=new b(t.y).selfSubtract(e.y),o=new b(e.x).selfSubtract(t.x),a=new b(t.x).selfMultiply(e.y).selfSubtract(new b(e.x).selfMultiply(t.y)),l=new b(i.y).selfSubtract(s.y),h=new b(s.x).selfSubtract(i.x),c=new b(i.x).selfMultiply(s.y).selfSubtract(new b(s.x).selfMultiply(i.y)),u=o.multiply(c).selfSubtract(h.multiply(a)),g=l.multiply(a).selfSubtract(r.multiply(c)),d=r.multiply(h).selfSubtract(l.multiply(o)),f=u.selfDivide(d).doubleValue(),m=g.selfDivide(d).doubleValue();return X.isNaN(f)||X.isInfinite(f)||X.isNaN(m)||X.isInfinite(m)?null:new E(f,m)}static orientationIndexFilter(t,e,i){let s=null;const r=(t.x-i.x)*(e.y-i.y),o=(t.y-i.y)*(e.x-i.x),a=r-o;if(r>0){if(o<=0)return bi.signum(a);s=r+o}else if(r<0){if(o>=0)return bi.signum(a);s=-r-o}else return bi.signum(a);const l=bi.DP_SAFE_EPSILON*s;return a>=l||-a>=l?bi.signum(a):2}static signum(t){return t>0?1:t<0?-1:0}}bi.DP_SAFE_EPSILON=1e-15;class bt{static isCCW(){if(arguments[0]instanceof Array){const t=arguments[0],e=t.length-1;if(e<3)throw new ft("Ring has fewer than 4 points, so orientation cannot be determined");let i=t[0],s=0;for(let u=1;u<=e;u++){const g=t[u];g.y>i.y&&(i=g,s=u)}let r=s;do r=r-1,r<0&&(r=e);while(t[r].equals2D(i)&&r!==s);let o=s;do o=(o+1)%e;while(t[o].equals2D(i)&&o!==s);const a=t[r],l=t[o];if(a.equals2D(i)||l.equals2D(i)||a.equals2D(l))return!1;const h=bt.index(a,i,l);let c=null;return h===0?c=a.x>l.x:c=h>0,c}else if(Z(arguments[0],ut)){const t=arguments[0],e=t.size()-1;if(e<3)throw new ft("Ring has fewer than 4 points, so orientation cannot be determined");let i=t.getCoordinate(0),s=0;for(let u=1;u<=e;u++){const g=t.getCoordinate(u);g.y>i.y&&(i=g,s=u)}let r=null,o=s;do o=o-1,o<0&&(o=e),r=t.getCoordinate(o);while(r.equals2D(i)&&o!==s);let a=null,l=s;do l=(l+1)%e,a=t.getCoordinate(l);while(a.equals2D(i)&&l!==s);if(r.equals2D(i)||a.equals2D(i)||r.equals2D(a))return!1;const h=bt.index(r,i,a);let c=null;return h===0?c=r.x>a.x:c=h>0,c}}static index(t,e,i){return bi.orientationIndex(t,e,i)}}bt.CLOCKWISE=-1;bt.RIGHT=bt.CLOCKWISE;bt.COUNTERCLOCKWISE=1;bt.LEFT=bt.COUNTERCLOCKWISE;bt.COLLINEAR=0;bt.STRAIGHT=bt.COLLINEAR;class Pe extends W{constructor(){super(),Pe.constructor_.apply(this,arguments)}static constructor_(){this._shell=null,this._holes=null;let t=arguments[0],e=arguments[1],i=arguments[2];if(W.constructor_.call(this,i),t===null&&(t=this.getFactory().createLinearRing()),e===null&&(e=[]),W.hasNullElements(e))throw new ft("holes must not contain null elements");if(t.isEmpty()&&W.hasNonEmptyElements(e))throw new ft("shell is empty but holes are not");this._shell=t,this._holes=e}computeEnvelopeInternal(){return this._shell.getEnvelopeInternal()}getCoordinates(){if(this.isEmpty())return[];const t=new Array(this.getNumPoints()).fill(null);let e=-1;const i=this._shell.getCoordinates();for(let s=0;s<i.length;s++)e++,t[e]=i[s];for(let s=0;s<this._holes.length;s++){const r=this._holes[s].getCoordinates();for(let o=0;o<r.length;o++)e++,t[e]=r[o]}return t}getArea(){let t=0;t+=Co.ofRing(this._shell.getCoordinateSequence());for(let e=0;e<this._holes.length;e++)t-=Co.ofRing(this._holes[e].getCoordinateSequence());return t}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof W){const t=arguments[0],e=arguments[1];if(!this.isEquivalentClass(t))return!1;const i=t,s=this._shell,r=i._shell;if(!s.equalsExact(r,e)||this._holes.length!==i._holes.length)return!1;for(let o=0;o<this._holes.length;o++)if(!this._holes[o].equalsExact(i._holes[o],e))return!1;return!0}else return super.equalsExact.apply(this,arguments)}reverseInternal(){const t=this.getExteriorRing().reverse(),e=new Array(this.getNumInteriorRing()).fill(null);for(let i=0;i<e.length;i++)e[i]=this.getInteriorRingN(i).reverse();return this.getFactory().createPolygon(t,e)}getTypeCode(){return W.TYPECODE_POLYGON}getDimension(){return 2}getBoundary(){if(this.isEmpty())return this.getFactory().createMultiLineString();const t=new Array(this._holes.length+1).fill(null);t[0]=this._shell;for(let e=0;e<this._holes.length;e++)t[e+1]=this._holes[e];return t.length<=1?this.getFactory().createLinearRing(t[0].getCoordinateSequence()):this.getFactory().createMultiLineString(t)}getGeometryType(){return W.TYPENAME_POLYGON}getExteriorRing(){return this._shell}copyInternal(){const t=this._shell.copy(),e=new Array(this._holes.length).fill(null);for(let i=0;i<this._holes.length;i++)e[i]=this._holes[i].copy();return new Pe(t,e,this._factory)}isRectangle(){if(this.getNumInteriorRing()!==0||this._shell===null||this._shell.getNumPoints()!==5)return!1;const t=this._shell.getCoordinateSequence(),e=this.getEnvelopeInternal();for(let r=0;r<5;r++){const o=t.getX(r);if(!(o===e.getMinX()||o===e.getMaxX()))return!1;const a=t.getY(r);if(!(a===e.getMinY()||a===e.getMaxY()))return!1}let i=t.getX(0),s=t.getY(0);for(let r=1;r<=4;r++){const o=t.getX(r),a=t.getY(r);if(o!==i===(a!==s))return!1;i=o,s=a}return!0}normalize(){if(arguments.length===0){this._shell=this.normalized(this._shell,!0);for(let t=0;t<this._holes.length;t++)this._holes[t]=this.normalized(this._holes[t],!1);hs.sort(this._holes)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(t.isEmpty())return null;const i=t.getCoordinateSequence(),s=Bt.minCoordinateIndex(i,0,i.size()-2);Bt.scroll(i,s,!0),bt.isCCW(i)===e&&Bt.reverse(i)}}getCoordinate(){return this._shell.getCoordinate()}getNumInteriorRing(){return this._holes.length}getBoundaryDimension(){return 1}getLength(){let t=0;t+=this._shell.getLength();for(let e=0;e<this._holes.length;e++)t+=this._holes[e].getLength();return t}getNumPoints(){let t=this._shell.getNumPoints();for(let e=0;e<this._holes.length;e++)t+=this._holes[e].getNumPoints();return t}convexHull(){return this.getExteriorRing().convexHull()}normalized(t,e){const i=t.copy();return this.normalize(i,e),i}compareToSameClass(){if(arguments.length===1){const t=arguments[0],e=this._shell,i=t._shell;return e.compareToSameClass(i)}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t,s=this._shell,r=i._shell,o=s.compareToSameClass(r,e);if(o!==0)return o;const a=this.getNumInteriorRing(),l=i.getNumInteriorRing();let h=0;for(;h<a&&h<l;){const c=this.getInteriorRingN(h),u=i.getInteriorRingN(h),g=c.compareToSameClass(u,e);if(g!==0)return g;h++}return h<a?1:h<l?-1:0}}apply(){if(Z(arguments[0],Tl)){const t=arguments[0];this._shell.apply(t);for(let e=0;e<this._holes.length;e++)this._holes[e].apply(t)}else if(Z(arguments[0],Cl)){const t=arguments[0];if(this._shell.apply(t),!t.isDone())for(let e=0;e<this._holes.length&&(this._holes[e].apply(t),!t.isDone());e++);t.isGeometryChanged()&&this.geometryChanged()}else if(Z(arguments[0],Ml))arguments[0].filter(this);else if(Z(arguments[0],Kr)){const t=arguments[0];t.filter(this),this._shell.apply(t);for(let e=0;e<this._holes.length;e++)this._holes[e].apply(t)}}isEmpty(){return this._shell.isEmpty()}getInteriorRingN(t){return this._holes[t]}get interfaces_(){return[El]}}class Gn extends jt{constructor(){super(),Gn.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];jt.constructor_.call(this,t,e)}equalsExact(){if(arguments.length===2&&typeof arguments[1]=="number"&&arguments[0]instanceof W){const t=arguments[0],e=arguments[1];return this.isEquivalentClass(t)?super.equalsExact.call(this,t,e):!1}else return super.equalsExact.apply(this,arguments)}getTypeCode(){return W.TYPECODE_MULTIPOINT}getDimension(){return 0}getBoundary(){return this.getFactory().createGeometryCollection()}getGeometryType(){return W.TYPENAME_MULTIPOINT}copyInternal(){const t=new Array(this._geometries.length).fill(null);for(let e=0;e<t.length;e++)t[e]=this._geometries[e].copy();return new Gn(t,this._factory)}isValid(){return!0}getCoordinate(){if(arguments.length===1&&Number.isInteger(arguments[0])){const t=arguments[0];return this._geometries[t].getCoordinate()}else return super.getCoordinate.apply(this,arguments)}getBoundaryDimension(){return I.FALSE}get interfaces_(){return[B0]}}class ne{constructor(){ne.constructor_.apply(this,arguments)}static constructor_(){if(this._precisionModel=null,this._coordinateSequenceFactory=null,this._SRID=null,arguments.length===0)ne.constructor_.call(this,new Pt,0);else if(arguments.length===1){if(Z(arguments[0],F0)){const t=arguments[0];ne.constructor_.call(this,new Pt,0,t)}else if(arguments[0]instanceof Pt){const t=arguments[0];ne.constructor_.call(this,t,0,ne.getDefaultCoordinateSequenceFactory())}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];ne.constructor_.call(this,t,e,ne.getDefaultCoordinateSequenceFactory())}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._precisionModel=t,this._coordinateSequenceFactory=i,this._SRID=e}}static toMultiPolygonArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toGeometryArray(t){if(t===null)return null;const e=new Array(t.size()).fill(null);return t.toArray(e)}static getDefaultCoordinateSequenceFactory(){return Tr.instance()}static toMultiLineStringArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toLineStringArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toMultiPointArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toLinearRingArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toPointArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static toPolygonArray(t){const e=new Array(t.size()).fill(null);return t.toArray(e)}static createPointFromInternalCoord(t,e){return e.getPrecisionModel().makePrecise(t),e.getFactory().createPoint(t)}createEmpty(t){switch(t){case-1:return this.createGeometryCollection();case 0:return this.createPoint();case 1:return this.createLineString();case 2:return this.createPolygon();default:throw new ft("Invalid dimension: "+t)}}toGeometry(t){return t.isNull()?this.createPoint():t.getMinX()===t.getMaxX()&&t.getMinY()===t.getMaxY()?this.createPoint(new E(t.getMinX(),t.getMinY())):t.getMinX()===t.getMaxX()||t.getMinY()===t.getMaxY()?this.createLineString([new E(t.getMinX(),t.getMinY()),new E(t.getMaxX(),t.getMaxY())]):this.createPolygon(this.createLinearRing([new E(t.getMinX(),t.getMinY()),new E(t.getMinX(),t.getMaxY()),new E(t.getMaxX(),t.getMaxY()),new E(t.getMaxX(),t.getMinY()),new E(t.getMinX(),t.getMinY())]),null)}createLineString(){if(arguments.length===0)return this.createLineString(this.getCoordinateSequenceFactory().create([]));if(arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];return this.createLineString(t!==null?this.getCoordinateSequenceFactory().create(t):null)}else if(Z(arguments[0],ut)){const t=arguments[0];return new ue(t,this)}}}createMultiLineString(){if(arguments.length===0)return new ws(null,this);if(arguments.length===1){const t=arguments[0];return new ws(t,this)}}createPolygon(){if(arguments.length===0)return this.createPolygon(null,null);if(arguments.length===1){if(Z(arguments[0],ut)){const t=arguments[0];return this.createPolygon(this.createLinearRing(t))}else if(arguments[0]instanceof Array){const t=arguments[0];return this.createPolygon(this.createLinearRing(t))}else if(arguments[0]instanceof oi){const t=arguments[0];return this.createPolygon(t,null)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return new Pe(t,e,this)}}getSRID(){return this._SRID}createGeometryCollection(){if(arguments.length===0)return new jt(null,this);if(arguments.length===1){const t=arguments[0];return new jt(t,this)}}getPrecisionModel(){return this._precisionModel}createLinearRing(){if(arguments.length===0)return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));if(arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];return this.createLinearRing(t!==null?this.getCoordinateSequenceFactory().create(t):null)}else if(Z(arguments[0],ut)){const t=arguments[0];return new oi(t,this)}}}createMultiPolygon(){if(arguments.length===0)return new ai(null,this);if(arguments.length===1){const t=arguments[0];return new ai(t,this)}}createMultiPoint(){if(arguments.length===0)return new Gn(null,this);if(arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];return new Gn(t,this)}else if(Z(arguments[0],ut)){const t=arguments[0];if(t===null)return this.createMultiPoint(new Array(0).fill(null));const e=new Array(t.size()).fill(null);for(let i=0;i<t.size();i++){const s=this.getCoordinateSequenceFactory().create(1,t.getDimension(),t.getMeasures());Bt.copy(t,i,s,0,1),e[i]=this.createPoint(s)}return this.createMultiPoint(e)}}}buildGeometry(t){let e=null,i=!1,s=!1;for(let a=t.iterator();a.hasNext();){const l=a.next(),h=l.getTypeCode();e===null&&(e=h),h!==e&&(i=!0),l instanceof jt&&(s=!0)}if(e===null)return this.createGeometryCollection();if(i||s)return this.createGeometryCollection(ne.toGeometryArray(t));const r=t.iterator().next();if(t.size()>1){if(r instanceof Pe)return this.createMultiPolygon(ne.toPolygonArray(t));if(r instanceof ue)return this.createMultiLineString(ne.toLineStringArray(t));if(r instanceof Bi)return this.createMultiPoint(ne.toPointArray(t));rt.shouldNeverReachHere("Unhandled geometry type: "+r.getGeometryType())}return r}createMultiPointFromCoords(t){return this.createMultiPoint(t!==null?this.getCoordinateSequenceFactory().create(t):null)}createPoint(){if(arguments.length===0)return this.createPoint(this.getCoordinateSequenceFactory().create([]));if(arguments.length===1){if(arguments[0]instanceof E){const t=arguments[0];return this.createPoint(t!==null?this.getCoordinateSequenceFactory().create([t]):null)}else if(Z(arguments[0],ut)){const t=arguments[0];return new Bi(t,this)}}}getCoordinateSequenceFactory(){return this._coordinateSequenceFactory}get interfaces_(){return[Fe]}}const oR=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon"];class aR{constructor(t){this.geometryFactory=t||new ne}read(t){let e;typeof t=="string"?e=JSON.parse(t):e=t;const i=e.type;if(!Je[i])throw new Error("Unknown GeoJSON type: "+e.type);return oR.indexOf(i)!==-1?Je[i].call(this,e.coordinates):i==="GeometryCollection"?Je[i].call(this,e.geometries):Je[i].call(this,e)}write(t){const e=t.getGeometryType();if(!Ri[e])throw new Error("Geometry is not supported");return Ri[e].call(this,t)}}const Je={Feature:function(n){const t={};for(const e in n)t[e]=n[e];if(n.geometry){const e=n.geometry.type;if(!Je[e])throw new Error("Unknown GeoJSON type: "+n.type);t.geometry=this.read(n.geometry)}return n.bbox&&(t.bbox=Je.bbox.call(this,n.bbox)),t},FeatureCollection:function(n){const t={};if(n.features){t.features=[];for(let e=0;e<n.features.length;++e)t.features.push(this.read(n.features[e]))}return n.bbox&&(t.bbox=this.parse.bbox.call(this,n.bbox)),t},coordinates:function(n){const t=[];for(let e=0;e<n.length;++e){const i=n[e];t.push(new E(...i))}return t},bbox:function(n){return this.geometryFactory.createLinearRing([new E(n[0],n[1]),new E(n[2],n[1]),new E(n[2],n[3]),new E(n[0],n[3]),new E(n[0],n[1])])},Point:function(n){const t=new E(...n);return this.geometryFactory.createPoint(t)},MultiPoint:function(n){const t=[];for(let e=0;e<n.length;++e)t.push(Je.Point.call(this,n[e]));return this.geometryFactory.createMultiPoint(t)},LineString:function(n){const t=Je.coordinates.call(this,n);return this.geometryFactory.createLineString(t)},MultiLineString:function(n){const t=[];for(let e=0;e<n.length;++e)t.push(Je.LineString.call(this,n[e]));return this.geometryFactory.createMultiLineString(t)},Polygon:function(n){const t=Je.coordinates.call(this,n[0]),e=this.geometryFactory.createLinearRing(t),i=[];for(let s=1;s<n.length;++s){const r=n[s],o=Je.coordinates.call(this,r),a=this.geometryFactory.createLinearRing(o);i.push(a)}return this.geometryFactory.createPolygon(e,i)},MultiPolygon:function(n){const t=[];for(let e=0;e<n.length;++e){const i=n[e];t.push(Je.Polygon.call(this,i))}return this.geometryFactory.createMultiPolygon(t)},GeometryCollection:function(n){const t=[];for(let e=0;e<n.length;++e){const i=n[e];t.push(this.read(i))}return this.geometryFactory.createGeometryCollection(t)}},Ri={coordinate:function(n){const t=[n.x,n.y];return n.z&&t.push(n.z),n.m&&t.push(n.m),t},Point:function(n){return{type:"Point",coordinates:Ri.coordinate.call(this,n.getCoordinate())}},MultiPoint:function(n){const t=[];for(let e=0;e<n._geometries.length;++e){const i=n._geometries[e],s=Ri.Point.call(this,i);t.push(s.coordinates)}return{type:"MultiPoint",coordinates:t}},LineString:function(n){const t=[],e=n.getCoordinates();for(let i=0;i<e.length;++i){const s=e[i];t.push(Ri.coordinate.call(this,s))}return{type:"LineString",coordinates:t}},MultiLineString:function(n){const t=[];for(let e=0;e<n._geometries.length;++e){const i=n._geometries[e],s=Ri.LineString.call(this,i);t.push(s.coordinates)}return{type:"MultiLineString",coordinates:t}},Polygon:function(n){const t=[],e=Ri.LineString.call(this,n._shell);t.push(e.coordinates);for(let i=0;i<n._holes.length;++i){const s=n._holes[i],r=Ri.LineString.call(this,s);t.push(r.coordinates)}return{type:"Polygon",coordinates:t}},MultiPolygon:function(n){const t=[];for(let e=0;e<n._geometries.length;++e){const i=n._geometries[e],s=Ri.Polygon.call(this,i);t.push(s.coordinates)}return{type:"MultiPolygon",coordinates:t}},GeometryCollection:function(n){const t=[];for(let e=0;e<n._geometries.length;++e){const i=n._geometries[e],s=i.getGeometryType();t.push(Ri[s].call(this,i))}return{type:"GeometryCollection",geometries:t}}};class lR{constructor(t){this.parser=new aR(t||new ne)}read(t){return this.parser.read(t)}}const Ks={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"},cg={POINT:"Point",LINE_STRING:"LineString",LINEAR_RING:"LinearRing",POLYGON:"Polygon",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon",GEOMETRY_COLLECTION:"GeometryCollection",CIRCLE:"Circle"},H0="EMPTY",X0="Z",U0="M",hR="ZM",Ct={TEXT:1,LEFT_PAREN:2,RIGHT_PAREN:3,NUMBER:4,COMMA:5,EOF:6};for(const n in cg)cg[n].toUpperCase();class cR{constructor(t){this.wkt=t,this.index_=-1}isAlpha_(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"}isNumeric_(t,e){const i=e!==void 0?e:!1;return t>="0"&&t<="9"||t=="."&&!i}isWhiteSpace_(t){return t==" "||t=="	"||t=="\r"||t==`
`}nextChar_(){return this.wkt.charAt(++this.index_)}nextToken(){const t=this.nextChar_(),e=this.index_;let i=t,s;if(t=="(")s=Ct.LEFT_PAREN;else if(t==",")s=Ct.COMMA;else if(t==")")s=Ct.RIGHT_PAREN;else if(this.isNumeric_(t)||t=="-")s=Ct.NUMBER,i=this.readNumber_();else if(this.isAlpha_(t))s=Ct.TEXT,i=this.readText_();else{if(this.isWhiteSpace_(t))return this.nextToken();if(t==="")s=Ct.EOF;else throw new Error("Unexpected character: "+t)}return{position:e,value:i,type:s}}readNumber_(){let t;const e=this.index_;let i=!1,s=!1;do t=="."?i=!0:(t=="e"||t=="E")&&(s=!0),t=this.nextChar_();while(this.isNumeric_(t,i)||!s&&(t=="e"||t=="E")||s&&(t=="-"||t=="+"));return parseFloat(this.wkt.substring(e,this.index_--))}readText_(){let t;const e=this.index_;do t=this.nextChar_();while(this.isAlpha_(t));return this.wkt.substring(e,this.index_--).toUpperCase()}}class uR{constructor(t,e){this.lexer_=t,this.token_,this.layout_=Ks.XY,this.factory=e}consume_(){this.token_=this.lexer_.nextToken()}isTokenType(t){return this.token_.type==t}match(t){const e=this.isTokenType(t);return e&&this.consume_(),e}parse(){return this.consume_(),this.parseGeometry_()}parseGeometryLayout_(){let t=Ks.XY;const e=this.token_;if(this.isTokenType(Ct.TEXT)){const i=e.value;i===X0?t=Ks.XYZ:i===U0?t=Ks.XYM:i===hR&&(t=Ks.XYZM),t!==Ks.XY&&this.consume_()}return t}parseGeometryCollectionText_(){if(this.match(Ct.LEFT_PAREN)){const t=[];do t.push(this.parseGeometry_());while(this.match(Ct.COMMA));if(this.match(Ct.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parsePointText_(){if(this.match(Ct.LEFT_PAREN)){const t=this.parsePoint_();if(this.match(Ct.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return null;throw new Error(this.formatErrorMessage_())}parseLineStringText_(){if(this.match(Ct.LEFT_PAREN)){const t=this.parsePointList_();if(this.match(Ct.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parsePolygonText_(){if(this.match(Ct.LEFT_PAREN)){const t=this.parseLineStringTextList_();if(this.match(Ct.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parseMultiPointText_(){if(this.match(Ct.LEFT_PAREN)){let t;if(this.token_.type==Ct.LEFT_PAREN?t=this.parsePointTextList_():t=this.parsePointList_(),this.match(Ct.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parseMultiLineStringText_(){if(this.match(Ct.LEFT_PAREN)){const t=this.parseLineStringTextList_();if(this.match(Ct.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parseMultiPolygonText_(){if(this.match(Ct.LEFT_PAREN)){const t=this.parsePolygonTextList_();if(this.match(Ct.RIGHT_PAREN))return t}else if(this.isEmptyGeometry_())return[];throw new Error(this.formatErrorMessage_())}parsePoint_(){const t=[],e=this.layout_.length;for(let i=0;i<e;++i){const s=this.token_;if(this.match(Ct.NUMBER))t.push(s.value);else break}if(t.length==e)return t;throw new Error(this.formatErrorMessage_())}parsePointList_(){const t=[this.parsePoint_()];for(;this.match(Ct.COMMA);)t.push(this.parsePoint_());return t}parsePointTextList_(){const t=[this.parsePointText_()];for(;this.match(Ct.COMMA);)t.push(this.parsePointText_());return t}parseLineStringTextList_(){const t=[this.parseLineStringText_()];for(;this.match(Ct.COMMA);)t.push(this.parseLineStringText_());return t}parsePolygonTextList_(){const t=[this.parsePolygonText_()];for(;this.match(Ct.COMMA);)t.push(this.parsePolygonText_());return t}isEmptyGeometry_(){const t=this.isTokenType(Ct.TEXT)&&this.token_.value==H0;return t&&this.consume_(),t}formatErrorMessage_(){return"Unexpected `"+this.token_.value+"` at position "+this.token_.position+" in `"+this.lexer_.wkt+"`"}parseGeometry_(){const t=this.factory,e=r=>r?new E(...r):new E,i=r=>{const o=r.map(a=>t.createLinearRing(a.map(e)));return o.length>1?t.createPolygon(o[0],o.slice(1)):o.length===1?t.createPolygon(o[0]):t.createPolygon()},s=this.token_;if(this.match(Ct.TEXT)){const r=s.value;if(this.layout_=this.parseGeometryLayout_(),r=="GEOMETRYCOLLECTION"){const o=this.parseGeometryCollectionText_();return t.createGeometryCollection(o)}else switch(r){case"POINT":{const o=this.parsePointText_();return o?t.createPoint(new E(...o)):t.createPoint()}case"LINESTRING":{const a=this.parseLineStringText_().map(e);return t.createLineString(a)}case"LINEARRING":{const a=this.parseLineStringText_().map(e);return t.createLinearRing(a)}case"POLYGON":{const o=this.parsePolygonText_();return!o||o.length===0?t.createPolygon():i(o)}case"MULTIPOINT":{const o=this.parseMultiPointText_();if(!o||o.length===0)return t.createMultiPoint();const a=o.map(e).map(l=>t.createPoint(l));return t.createMultiPoint(a)}case"MULTILINESTRING":{const a=this.parseMultiLineStringText_().map(l=>t.createLineString(l.map(e)));return t.createMultiLineString(a)}case"MULTIPOLYGON":{const o=this.parseMultiPolygonText_();if(!o||o.length===0)return t.createMultiPolygon();const a=o.map(i);return t.createMultiPolygon(a)}default:throw new Error("Invalid geometry type: "+r)}}throw new Error(this.formatErrorMessage_())}}function Y0(n){if(n.isEmpty())return"";const t=n.getCoordinate(),e=[t.x,t.y];return t.z!==void 0&&!Number.isNaN(t.z)&&e.push(t.z),t.m!==void 0&&!Number.isNaN(t.m)&&e.push(t.m),e.join(" ")}function dR(n){const t=[];for(let e=0,i=n.getNumGeometries();e<i;++e)t.push("("+Y0(n.getGeometryN(e))+")");return t.join(", ")}function gR(n){const t=[];for(let e=0,i=n.getNumGeometries();e<i;++e)t.push(j0(n.getGeometryN(e)));return t.join(", ")}function Eo(n){const t=n.getCoordinates().map(i=>{const s=[i.x,i.y];return i.z!==void 0&&!Number.isNaN(i.z)&&s.push(i.z),i.m!==void 0&&!Number.isNaN(i.m)&&s.push(i.m),s}),e=[];for(let i=0,s=t.length;i<s;++i)e.push(t[i].join(" "));return e.join(", ")}function fR(n){const t=[];for(let e=0,i=n.getNumGeometries();e<i;++e)t.push("("+Eo(n.getGeometryN(e))+")");return t.join(", ")}function V0(n){const t=[];t.push("("+Eo(n.getExteriorRing())+")");for(let e=0,i=n.getNumInteriorRing();e<i;++e)t.push("("+Eo(n.getInteriorRingN(e))+")");return t.join(", ")}function mR(n){const t=[];for(let e=0,i=n.getNumGeometries();e<i;++e)t.push("("+V0(n.getGeometryN(e))+")");return t.join(", ")}function yR(n){let t="";if(n.isEmpty())return t;const e=n.getCoordinate();return e.z!==void 0&&!Number.isNaN(e.z)&&(t+=X0),e.m!==void 0&&!Number.isNaN(e.m)&&(t+=U0),t}const wR={Point:Y0,LineString:Eo,LinearRing:Eo,Polygon:V0,MultiPoint:dR,MultiLineString:fR,MultiPolygon:mR,GeometryCollection:gR};function j0(n){let t=n.getGeometryType();const e=wR[t];t=t.toUpperCase();const i=yR(n);if(i.length>0&&(t+=" "+i),n.isEmpty())return t+" "+H0;const s=e(n);return t+" ("+s+")"}class _R{constructor(t){this.geometryFactory=t||new ne,this.precisionModel=this.geometryFactory.getPrecisionModel()}read(t){const e=new cR(t);return new uR(e,this.geometryFactory).parse()}write(t){return j0(t)}}class Ha{constructor(t){this.parser=new _R(t)}write(t){return this.parser.write(t)}static toLineString(t,e){if(arguments.length!==2)throw new Error("Not implemented");return"LINESTRING ( "+t.x+" "+t.y+", "+e.x+" "+e.y+" )"}}class w{static toLocationSymbol(t){switch(t){case w.EXTERIOR:return"e";case w.BOUNDARY:return"b";case w.INTERIOR:return"i";case w.NONE:return"-"}throw new ft("Unknown location value: "+t)}}w.INTERIOR=0;w.BOUNDARY=1;w.EXTERIOR=2;w.NONE=-1;class k{static opposite(t){return t===k.LEFT?k.RIGHT:t===k.RIGHT?k.LEFT:t}}k.ON=0;k.LEFT=1;k.RIGHT=2;class q0{static intersection(t,e,i,s){const r=t.x<e.x?t.x:e.x,o=t.y<e.y?t.y:e.y,a=t.x>e.x?t.x:e.x,l=t.y>e.y?t.y:e.y,h=i.x<s.x?i.x:s.x,c=i.y<s.y?i.y:s.y,u=i.x>s.x?i.x:s.x,g=i.y>s.y?i.y:s.y,d=r>h?r:h,f=a<u?a:u,m=o>c?o:c,y=l<g?l:g,_=(d+f)/2,p=(m+y)/2,x=t.x-_,M=t.y-p,C=e.x-_,T=e.y-p,R=i.x-_,v=i.y-p,P=s.x-_,S=s.y-p,D=M-T,N=C-x,B=x*T-C*M,lt=v-S,z=P-R,H=R*S-P*v,F=N*H-z*B,et=lt*B-D*H,_t=D*z-lt*N,mt=F/_t,Ut=et/_t;return X.isNaN(mt)||X.isInfinite(mt)||X.isNaN(Ut)||X.isInfinite(Ut)?null:new E(mt+_,Ut+p)}}class _e{static pointToSegmentString(t,e){if(e.length===0)throw new ft("Line array must contain at least one vertex");let i=t.distance(e[0]);for(let s=0;s<e.length-1;s++){const r=_e.pointToSegment(t,e[s],e[s+1]);r<i&&(i=r)}return i}static segmentToSegment(t,e,i,s){if(t.equals(e))return _e.pointToSegment(t,i,s);if(i.equals(s))return _e.pointToSegment(s,t,e);let r=!1;if(!dt.intersects(t,e,i,s))r=!0;else{const o=(e.x-t.x)*(s.y-i.y)-(e.y-t.y)*(s.x-i.x);if(o===0)r=!0;else{const a=(t.y-i.y)*(s.x-i.x)-(t.x-i.x)*(s.y-i.y),h=((t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y))/o,c=a/o;(c<0||c>1||h<0||h>1)&&(r=!0)}}return r?xr.min(_e.pointToSegment(t,i,s),_e.pointToSegment(e,i,s),_e.pointToSegment(i,t,e),_e.pointToSegment(s,t,e)):0}static pointToLinePerpendicular(t,e,i){const s=(i.x-e.x)*(i.x-e.x)+(i.y-e.y)*(i.y-e.y),r=((e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y))/s;return Math.abs(r)*Math.sqrt(s)}static pointToSegment(t,e,i){if(e.x===i.x&&e.y===i.y)return t.distance(e);const s=(i.x-e.x)*(i.x-e.x)+(i.y-e.y)*(i.y-e.y),r=((t.x-e.x)*(i.x-e.x)+(t.y-e.y)*(i.y-e.y))/s;if(r<=0)return t.distance(e);if(r>=1)return t.distance(i);const o=((e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y))/s;return Math.abs(o)*Math.sqrt(s)}}class St{constructor(){St.constructor_.apply(this,arguments)}static constructor_(){this._result=null,this._inputLines=Array(2).fill().map(()=>Array(2)),this._intPt=new Array(2).fill(null),this._intLineIndex=null,this._isProper=null,this._pa=null,this._pb=null,this._precisionModel=null,this._intPt[0]=new E,this._intPt[1]=new E,this._pa=this._intPt[0],this._pb=this._intPt[1],this._result=0}static nonRobustComputeEdgeDistance(t,e,i){const s=t.x-e.x,r=t.y-e.y,o=Math.sqrt(s*s+r*r);return rt.isTrue(!(o===0&&!t.equals(e)),"Invalid distance calculation"),o}static computeEdgeDistance(t,e,i){const s=Math.abs(i.x-e.x),r=Math.abs(i.y-e.y);let o=-1;if(t.equals(e))o=0;else if(t.equals(i))s>r?o=s:o=r;else{const a=Math.abs(t.x-e.x),l=Math.abs(t.y-e.y);s>r?o=a:o=l,o===0&&!t.equals(e)&&(o=Math.max(a,l))}return rt.isTrue(!(o===0&&!t.equals(e)),"Bad distance calculation"),o}computeIntersection(t,e,i,s){this._inputLines[0][0]=t,this._inputLines[0][1]=e,this._inputLines[1][0]=i,this._inputLines[1][1]=s,this._result=this.computeIntersect(t,e,i,s)}getIntersectionNum(){return this._result}computeIntLineIndex(){if(arguments.length===0)this._intLineIndex===null&&(this._intLineIndex=Array(2).fill().map(()=>Array(2)),this.computeIntLineIndex(0),this.computeIntLineIndex(1));else if(arguments.length===1){const t=arguments[0],e=this.getEdgeDistance(t,0),i=this.getEdgeDistance(t,1);e>i?(this._intLineIndex[t][0]=0,this._intLineIndex[t][1]=1):(this._intLineIndex[t][0]=1,this._intLineIndex[t][1]=0)}}isInteriorIntersection(){if(arguments.length===0)return!!(this.isInteriorIntersection(0)||this.isInteriorIntersection(1));if(arguments.length===1){const t=arguments[0];for(let e=0;e<this._result;e++)if(!(this._intPt[e].equals2D(this._inputLines[t][0])||this._intPt[e].equals2D(this._inputLines[t][1])))return!0;return!1}}getIntersection(t){return this._intPt[t]}getEdgeDistance(t,e){return St.computeEdgeDistance(this._intPt[e],this._inputLines[t][0],this._inputLines[t][1])}isCollinear(){return this._result===St.COLLINEAR_INTERSECTION}toString(){return Ha.toLineString(this._inputLines[0][0],this._inputLines[0][1])+" - "+Ha.toLineString(this._inputLines[1][0],this._inputLines[1][1])+this.getTopologySummary()}getEndpoint(t,e){return this._inputLines[t][e]}getIndexAlongSegment(t,e){return this.computeIntLineIndex(),this._intLineIndex[t][e]}getTopologySummary(){const t=new Rl;return this.isEndPoint()&&t.append(" endpoint"),this._isProper&&t.append(" proper"),this.isCollinear()&&t.append(" collinear"),t.toString()}isProper(){return this.hasIntersection()&&this._isProper}setPrecisionModel(t){this._precisionModel=t}isEndPoint(){return this.hasIntersection()&&!this._isProper}hasIntersection(){return this._result!==St.NO_INTERSECTION}isIntersection(t){for(let e=0;e<this._result;e++)if(this._intPt[e].equals2D(t))return!0;return!1}getIntersectionAlongSegment(t,e){return this.computeIntLineIndex(),this._intPt[this._intLineIndex[t][e]]}}St.DONT_INTERSECT=0;St.DO_INTERSECT=1;St.COLLINEAR=2;St.NO_INTERSECTION=0;St.POINT_INTERSECTION=1;St.COLLINEAR_INTERSECTION=2;class zn extends St{constructor(){super()}static nearestEndpoint(t,e,i,s){let r=t,o=_e.pointToSegment(t,i,s),a=_e.pointToSegment(e,i,s);return a<o&&(o=a,r=e),a=_e.pointToSegment(i,t,e),a<o&&(o=a,r=i),a=_e.pointToSegment(s,t,e),a<o&&(o=a,r=s),r}isInSegmentEnvelopes(t){const e=new dt(this._inputLines[0][0],this._inputLines[0][1]),i=new dt(this._inputLines[1][0],this._inputLines[1][1]);return e.contains(t)&&i.contains(t)}computeIntersection(){if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(this._isProper=!1,dt.intersects(e,i,t)&&bt.index(e,i,t)===0&&bt.index(i,e,t)===0)return this._isProper=!0,(t.equals(e)||t.equals(i))&&(this._isProper=!1),this._result=St.POINT_INTERSECTION,null;this._result=St.NO_INTERSECTION}else return super.computeIntersection.apply(this,arguments)}intersection(t,e,i,s){let r=this.intersectionSafe(t,e,i,s);return this.isInSegmentEnvelopes(r)||(r=new E(zn.nearestEndpoint(t,e,i,s))),this._precisionModel!==null&&this._precisionModel.makePrecise(r),r}checkDD(t,e,i,s,r){const o=bi.intersection(t,e,i,s),a=this.isInSegmentEnvelopes(o);ri.out.println("DD in env = "+a+"  --------------------- "+o),r.distance(o)>1e-4&&ri.out.println("Distance = "+r.distance(o))}intersectionSafe(t,e,i,s){let r=q0.intersection(t,e,i,s);return r===null&&(r=zn.nearestEndpoint(t,e,i,s)),r}computeCollinearIntersection(t,e,i,s){const r=dt.intersects(t,e,i),o=dt.intersects(t,e,s),a=dt.intersects(i,s,t),l=dt.intersects(i,s,e);return r&&o?(this._intPt[0]=i,this._intPt[1]=s,St.COLLINEAR_INTERSECTION):a&&l?(this._intPt[0]=t,this._intPt[1]=e,St.COLLINEAR_INTERSECTION):r&&a?(this._intPt[0]=i,this._intPt[1]=t,i.equals(t)&&!o&&!l?St.POINT_INTERSECTION:St.COLLINEAR_INTERSECTION):r&&l?(this._intPt[0]=i,this._intPt[1]=e,i.equals(e)&&!o&&!a?St.POINT_INTERSECTION:St.COLLINEAR_INTERSECTION):o&&a?(this._intPt[0]=s,this._intPt[1]=t,s.equals(t)&&!r&&!l?St.POINT_INTERSECTION:St.COLLINEAR_INTERSECTION):o&&l?(this._intPt[0]=s,this._intPt[1]=e,s.equals(e)&&!r&&!a?St.POINT_INTERSECTION:St.COLLINEAR_INTERSECTION):St.NO_INTERSECTION}computeIntersect(t,e,i,s){if(this._isProper=!1,!dt.intersects(t,e,i,s))return St.NO_INTERSECTION;const r=bt.index(t,e,i),o=bt.index(t,e,s);if(r>0&&o>0||r<0&&o<0)return St.NO_INTERSECTION;const a=bt.index(i,s,t),l=bt.index(i,s,e);return a>0&&l>0||a<0&&l<0?St.NO_INTERSECTION:r===0&&o===0&&a===0&&l===0?this.computeCollinearIntersection(t,e,i,s):(r===0||o===0||a===0||l===0?(this._isProper=!1,t.equals2D(i)||t.equals2D(s)?this._intPt[0]=t:e.equals2D(i)||e.equals2D(s)?this._intPt[0]=e:r===0?this._intPt[0]=new E(i):o===0?this._intPt[0]=new E(s):a===0?this._intPt[0]=new E(t):l===0&&(this._intPt[0]=new E(e))):(this._isProper=!0,this._intPt[0]=this.intersection(t,e,i,s)),St.POINT_INTERSECTION)}}class or{constructor(){or.constructor_.apply(this,arguments)}static constructor_(){this._p=null,this._crossingCount=0,this._isPointOnSegment=!1;const t=arguments[0];this._p=t}static locatePointInRing(){if(arguments[0]instanceof E&&Z(arguments[1],ut)){const t=arguments[0],e=arguments[1],i=new or(t),s=new E,r=new E;for(let o=1;o<e.size();o++)if(e.getCoordinate(o,s),e.getCoordinate(o-1,r),i.countSegment(s,r),i.isOnSegment())return i.getLocation();return i.getLocation()}else if(arguments[0]instanceof E&&arguments[1]instanceof Array){const t=arguments[0],e=arguments[1],i=new or(t);for(let s=1;s<e.length;s++){const r=e[s],o=e[s-1];if(i.countSegment(r,o),i.isOnSegment())return i.getLocation()}return i.getLocation()}}getLocation(){return this._isPointOnSegment?w.BOUNDARY:this._crossingCount%2===1?w.INTERIOR:w.EXTERIOR}isPointInPolygon(){return this.getLocation()!==w.EXTERIOR}isOnSegment(){return this._isPointOnSegment}countSegment(t,e){if(t.x<this._p.x&&e.x<this._p.x)return null;if(this._p.x===e.x&&this._p.y===e.y)return this._isPointOnSegment=!0,null;if(t.y===this._p.y&&e.y===this._p.y){let i=t.x,s=e.x;return i>s&&(i=e.x,s=t.x),this._p.x>=i&&this._p.x<=s&&(this._isPointOnSegment=!0),null}if(t.y>this._p.y&&e.y<=this._p.y||e.y>this._p.y&&t.y<=this._p.y){let i=bt.index(t,e,this._p);if(i===bt.COLLINEAR)return this._isPointOnSegment=!0,null;e.y<t.y&&(i=-i),i===bt.LEFT&&this._crossingCount++}}}class ki{static isInRing(t,e){return ki.locateInRing(t,e)!==w.EXTERIOR}static locateInRing(t,e){return or.locatePointInRing(t,e)}static isOnLine(){if(arguments[0]instanceof E&&Z(arguments[1],ut)){const t=arguments[0],e=arguments[1],i=new zn,s=new E,r=new E,o=e.size();for(let a=1;a<o;a++)if(e.getCoordinate(a-1,s),e.getCoordinate(a,r),i.computeIntersection(t,s,r),i.hasIntersection())return!0;return!1}else if(arguments[0]instanceof E&&arguments[1]instanceof Array){const t=arguments[0],e=arguments[1],i=new zn;for(let s=1;s<e.length;s++){const r=e[s-1],o=e[s];if(i.computeIntersection(t,r,o),i.hasIntersection())return!0}return!1}}}class Wn extends sr{constructor(t,e){super(e?t+" [ "+e+" ]":t),this.pt=e?new E(e):void 0,this.name=Object.keys({TopologyException:Wn})[0]}getCoordinate(){return this.pt}}class me{constructor(){me.constructor_.apply(this,arguments)}static constructor_(){if(this.location=null,arguments.length===1){if(arguments[0]instanceof Array){const t=arguments[0];this.init(t.length)}else if(Number.isInteger(arguments[0])){const t=arguments[0];this.init(1),this.location[k.ON]=t}else if(arguments[0]instanceof me){const t=arguments[0];if(this.init(t.location.length),t!==null)for(let e=0;e<this.location.length;e++)this.location[e]=t.location[e]}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this.init(3),this.location[k.ON]=t,this.location[k.LEFT]=e,this.location[k.RIGHT]=i}}setAllLocations(t){for(let e=0;e<this.location.length;e++)this.location[e]=t}isNull(){for(let t=0;t<this.location.length;t++)if(this.location[t]!==w.NONE)return!1;return!0}setAllLocationsIfNull(t){for(let e=0;e<this.location.length;e++)this.location[e]===w.NONE&&(this.location[e]=t)}isLine(){return this.location.length===1}merge(t){if(t.location.length>this.location.length){const e=new Array(3).fill(null);e[k.ON]=this.location[k.ON],e[k.LEFT]=w.NONE,e[k.RIGHT]=w.NONE,this.location=e}for(let e=0;e<this.location.length;e++)this.location[e]===w.NONE&&e<t.location.length&&(this.location[e]=t.location[e])}getLocations(){return this.location}flip(){if(this.location.length<=1)return null;const t=this.location[k.LEFT];this.location[k.LEFT]=this.location[k.RIGHT],this.location[k.RIGHT]=t}get(t){return t<this.location.length?this.location[t]:w.NONE}isEqualOnSide(t,e){return this.location[e]===t.location[e]}allPositionsEqual(t){for(let e=0;e<this.location.length;e++)if(this.location[e]!==t)return!1;return!0}toString(){const t=new Ro;return this.location.length>1&&t.append(w.toLocationSymbol(this.location[k.LEFT])),t.append(w.toLocationSymbol(this.location[k.ON])),this.location.length>1&&t.append(w.toLocationSymbol(this.location[k.RIGHT])),t.toString()}setLocations(t,e,i){this.location[k.ON]=t,this.location[k.LEFT]=e,this.location[k.RIGHT]=i}isArea(){return this.location.length>1}isAnyNull(){for(let t=0;t<this.location.length;t++)if(this.location[t]===w.NONE)return!0;return!1}setLocation(){if(arguments.length===1){const t=arguments[0];this.setLocation(k.ON,t)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.location[t]=e}}init(t){this.location=new Array(t).fill(null),this.setAllLocations(w.NONE)}}class Xt{constructor(){Xt.constructor_.apply(this,arguments)}static constructor_(){if(this.elt=new Array(2).fill(null),arguments.length===1){if(Number.isInteger(arguments[0])){const t=arguments[0];this.elt[0]=new me(t),this.elt[1]=new me(t)}else if(arguments[0]instanceof Xt){const t=arguments[0];this.elt[0]=new me(t.elt[0]),this.elt[1]=new me(t.elt[1])}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.elt[0]=new me(w.NONE),this.elt[1]=new me(w.NONE),this.elt[t].setLocation(e)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this.elt[0]=new me(t,e,i),this.elt[1]=new me(t,e,i)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];this.elt[0]=new me(w.NONE,w.NONE,w.NONE),this.elt[1]=new me(w.NONE,w.NONE,w.NONE),this.elt[t].setLocations(e,i,s)}}static toLineLabel(t){const e=new Xt(w.NONE);for(let i=0;i<2;i++)e.setLocation(i,t.getLocation(i));return e}getGeometryCount(){let t=0;return this.elt[0].isNull()||t++,this.elt[1].isNull()||t++,t}setAllLocations(t,e){this.elt[t].setAllLocations(e)}isNull(t){return this.elt[t].isNull()}setAllLocationsIfNull(){if(arguments.length===1){const t=arguments[0];this.setAllLocationsIfNull(0,t),this.setAllLocationsIfNull(1,t)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.elt[t].setAllLocationsIfNull(e)}}isLine(t){return this.elt[t].isLine()}merge(t){for(let e=0;e<2;e++)this.elt[e]===null&&t.elt[e]!==null?this.elt[e]=new me(t.elt[e]):this.elt[e].merge(t.elt[e])}flip(){this.elt[0].flip(),this.elt[1].flip()}getLocation(){if(arguments.length===1){const t=arguments[0];return this.elt[t].get(k.ON)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.elt[t].get(e)}}toString(){const t=new Ro;return this.elt[0]!==null&&(t.append("A:"),t.append(this.elt[0].toString())),this.elt[1]!==null&&(t.append(" B:"),t.append(this.elt[1].toString())),t.toString()}setLocation(){if(arguments.length===2){const t=arguments[0],e=arguments[1];this.elt[t].setLocation(k.ON,e)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this.elt[t].setLocation(e,i)}}isEqualOnSide(t,e){return this.elt[0].isEqualOnSide(t.elt[0],e)&&this.elt[1].isEqualOnSide(t.elt[1],e)}allPositionsEqual(t,e){return this.elt[t].allPositionsEqual(e)}toLine(t){this.elt[t].isArea()&&(this.elt[t]=new me(this.elt[t].location[0]))}isArea(){if(arguments.length===0)return this.elt[0].isArea()||this.elt[1].isArea();if(arguments.length===1){const t=arguments[0];return this.elt[t].isArea()}}isAnyNull(t){return this.elt[t].isAnyNull()}}class Mr{constructor(){Mr.constructor_.apply(this,arguments)}static constructor_(){if(this._startDe=null,this._maxNodeDegree=-1,this._edges=new it,this._pts=new it,this._label=new Xt(w.NONE),this._ring=null,this._isHole=null,this._shell=null,this._holes=new it,this._geometryFactory=null,arguments.length!==0){if(arguments.length===2){const t=arguments[0],e=arguments[1];this._geometryFactory=e,this.computePoints(t),this.computeRing()}}}computeRing(){if(this._ring!==null)return null;const t=new Array(this._pts.size()).fill(null);for(let e=0;e<this._pts.size();e++)t[e]=this._pts.get(e);this._ring=this._geometryFactory.createLinearRing(t),this._isHole=bt.isCCW(this._ring.getCoordinates())}isIsolated(){return this._label.getGeometryCount()===1}computePoints(t){this._startDe=t;let e=t,i=!0;do{if(e===null)throw new Wn("Found null DirectedEdge");if(e.getEdgeRing()===this)throw new Wn("Directed Edge visited twice during ring-building at "+e.getCoordinate());this._edges.add(e);const s=e.getLabel();rt.isTrue(s.isArea()),this.mergeLabel(s),this.addPoints(e.getEdge(),e.isForward(),i),i=!1,this.setEdgeRing(e,this),e=this.getNext(e)}while(e!==this._startDe)}getLinearRing(){return this._ring}getCoordinate(t){return this._pts.get(t)}computeMaxNodeDegree(){this._maxNodeDegree=0;let t=this._startDe;do{const i=t.getNode().getEdges().getOutgoingDegree(this);i>this._maxNodeDegree&&(this._maxNodeDegree=i),t=this.getNext(t)}while(t!==this._startDe);this._maxNodeDegree*=2}addPoints(t,e,i){const s=t.getCoordinates();if(e){let r=1;i&&(r=0);for(let o=r;o<s.length;o++)this._pts.add(s[o])}else{let r=s.length-2;i&&(r=s.length-1);for(let o=r;o>=0;o--)this._pts.add(s[o])}}containsPoint(t){const e=this.getLinearRing();if(!e.getEnvelopeInternal().contains(t)||!ki.isInRing(t,e.getCoordinates()))return!1;for(let s=this._holes.iterator();s.hasNext();)if(s.next().containsPoint(t))return!1;return!0}getMaxNodeDegree(){return this._maxNodeDegree<0&&this.computeMaxNodeDegree(),this._maxNodeDegree}setShell(t){this._shell=t,t!==null&&t.addHole(this)}toPolygon(t){const e=new Array(this._holes.size()).fill(null);for(let s=0;s<this._holes.size();s++)e[s]=this._holes.get(s).getLinearRing();return t.createPolygon(this.getLinearRing(),e)}isHole(){return this._isHole}setInResult(){let t=this._startDe;do t.getEdge().setInResult(!0),t=t.getNext();while(t!==this._startDe)}addHole(t){this._holes.add(t)}isShell(){return this._shell===null}getLabel(){return this._label}getEdges(){return this._edges}getShell(){return this._shell}mergeLabel(){if(arguments.length===1){const t=arguments[0];this.mergeLabel(t,0),this.mergeLabel(t,1)}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t.getLocation(e,k.RIGHT);if(i===w.NONE)return null;if(this._label.getLocation(e)===w.NONE)return this._label.setLocation(e,i),null}}}class du extends Mr{constructor(){super(),du.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];Mr.constructor_.call(this,t,e)}getNext(t){return t.getNextMin()}setEdgeRing(t,e){t.setMinEdgeRing(e)}}class gu extends Mr{constructor(){super(),gu.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];Mr.constructor_.call(this,t,e)}linkDirectedEdgesForMinimalEdgeRings(){let t=this._startDe;do t.getNode().getEdges().linkMinimalDirectedEdges(this),t=t.getNext();while(t!==this._startDe)}buildMinimalRings(){const t=new it;let e=this._startDe;do{if(e.getMinEdgeRing()===null){const i=new du(e,this._geometryFactory);t.add(i)}e=e.getNext()}while(e!==this._startDe);return t}getNext(t){return t.getNext()}setEdgeRing(t,e){t.setEdgeRing(e)}}class Z0{locate(t){}}class pR{hasNext(){}next(){}remove(){}}class ar{constructor(){ar.constructor_.apply(this,arguments)}static constructor_(){this._parent=null,this._atStart=null,this._max=null,this._index=null,this._subcollectionIterator=null;const t=arguments[0];this._parent=t,this._atStart=!0,this._index=0,this._max=t.getNumGeometries()}static isAtomic(t){return!(t instanceof jt)}next(){if(this._atStart)return this._atStart=!1,ar.isAtomic(this._parent)&&this._index++,this._parent;if(this._subcollectionIterator!==null){if(this._subcollectionIterator.hasNext())return this._subcollectionIterator.next();this._subcollectionIterator=null}if(this._index>=this._max)throw new Dr;const t=this._parent.getGeometryN(this._index++);return t instanceof jt?(this._subcollectionIterator=new ar(t),this._subcollectionIterator.next()):t}hasNext(){if(this._atStart)return!0;if(this._subcollectionIterator!==null){if(this._subcollectionIterator.hasNext())return!0;this._subcollectionIterator=null}return!(this._index>=this._max)}remove(){throw new Ti(this.getClass().getName())}get interfaces_(){return[pR]}}class ci{constructor(){ci.constructor_.apply(this,arguments)}static constructor_(){this._geom=null;const t=arguments[0];this._geom=t}static locatePointInPolygon(t,e){if(e.isEmpty())return w.EXTERIOR;const i=e.getExteriorRing(),s=ci.locatePointInRing(t,i);if(s!==w.INTERIOR)return s;for(let r=0;r<e.getNumInteriorRing();r++){const o=e.getInteriorRingN(r),a=ci.locatePointInRing(t,o);if(a===w.BOUNDARY)return w.BOUNDARY;if(a===w.INTERIOR)return w.EXTERIOR}return w.INTERIOR}static locatePointInRing(t,e){return e.getEnvelopeInternal().intersects(t)?ki.locateInRing(t,e.getCoordinates()):w.EXTERIOR}static isContained(t,e){return w.EXTERIOR!==ci.locate(t,e)}static locate(t,e){return e.isEmpty()||!e.getEnvelopeInternal().intersects(t)?w.EXTERIOR:ci.locateInGeometry(t,e)}static containsPointInPolygon(t,e){return w.EXTERIOR!==ci.locatePointInPolygon(t,e)}static locateInGeometry(t,e){if(e instanceof Pe)return ci.locatePointInPolygon(t,e);if(e instanceof jt){const i=new ar(e);for(;i.hasNext();){const s=i.next();if(s!==e){const r=ci.locateInGeometry(t,s);if(r!==w.EXTERIOR)return r}}}return w.EXTERIOR}locate(t){return ci.locate(t,this._geom)}get interfaces_(){return[Z0]}}class xR extends G0{}const Ci=0,xn=1;function ug(n){return n==null?Ci:n.color}function xt(n){return n==null?null:n.parent}function Mi(n,t){n!==null&&(n.color=t)}function ch(n){return n==null?null:n.left}function dg(n){return n==null?null:n.right}class Cr extends xR{constructor(){super(),this.root_=null,this.size_=0}get(t){let e=this.root_;for(;e!==null;){const i=t.compareTo(e.key);if(i<0)e=e.left;else if(i>0)e=e.right;else return e.value}return null}put(t,e){if(this.root_===null)return this.root_={key:t,value:e,left:null,right:null,parent:null,color:Ci,getValue(){return this.value},getKey(){return this.key}},this.size_=1,null;let i=this.root_,s,r;do if(s=i,r=t.compareTo(i.key),r<0)i=i.left;else if(r>0)i=i.right;else{const a=i.value;return i.value=e,a}while(i!==null);const o={key:t,left:null,right:null,value:e,parent:s,color:Ci,getValue(){return this.value},getKey(){return this.key}};return r<0?s.left=o:s.right=o,this.fixAfterInsertion(o),this.size_++,null}fixAfterInsertion(t){let e;for(t.color=xn;t!=null&&t!==this.root_&&t.parent.color===xn;)xt(t)===ch(xt(xt(t)))?(e=dg(xt(xt(t))),ug(e)===xn?(Mi(xt(t),Ci),Mi(e,Ci),Mi(xt(xt(t)),xn),t=xt(xt(t))):(t===dg(xt(t))&&(t=xt(t),this.rotateLeft(t)),Mi(xt(t),Ci),Mi(xt(xt(t)),xn),this.rotateRight(xt(xt(t))))):(e=ch(xt(xt(t))),ug(e)===xn?(Mi(xt(t),Ci),Mi(e,Ci),Mi(xt(xt(t)),xn),t=xt(xt(t))):(t===ch(xt(t))&&(t=xt(t),this.rotateRight(t)),Mi(xt(t),Ci),Mi(xt(xt(t)),xn),this.rotateLeft(xt(xt(t)))));this.root_.color=Ci}values(){const t=new it;let e=this.getFirstEntry();if(e!==null)for(t.add(e.value);(e=Cr.successor(e))!==null;)t.add(e.value);return t}entrySet(){const t=new z0;let e=this.getFirstEntry();if(e!==null)for(t.add(e);(e=Cr.successor(e))!==null;)t.add(e);return t}rotateLeft(t){if(t!=null){const e=t.right;t.right=e.left,e.left!=null&&(e.left.parent=t),e.parent=t.parent,t.parent==null?this.root_=e:t.parent.left===t?t.parent.left=e:t.parent.right=e,e.left=t,t.parent=e}}rotateRight(t){if(t!=null){const e=t.left;t.left=e.right,e.right!=null&&(e.right.parent=t),e.parent=t.parent,t.parent==null?this.root_=e:t.parent.right===t?t.parent.right=e:t.parent.left=e,e.right=t,t.parent=e}}getFirstEntry(){let t=this.root_;if(t!=null)for(;t.left!=null;)t=t.left;return t}static successor(t){let e;if(t===null)return null;if(t.right!==null){for(e=t.right;e.left!==null;)e=e.left;return e}else{e=t.parent;let i=t;for(;e!==null&&i===e.right;)i=e,e=e.parent;return e}}size(){return this.size_}containsKey(t){let e=this.root_;for(;e!==null;){const i=t.compareTo(e.key);if(i<0)e=e.left;else if(i>0)e=e.right;else return!0}return!1}}class bl{constructor(){bl.constructor_.apply(this,arguments)}static constructor_(){this._edgeMap=new Cr,this._edgeList=null,this._ptInAreaLocation=[w.NONE,w.NONE]}getNextCW(t){this.getEdges();const e=this._edgeList.indexOf(t);let i=e-1;return e===0&&(i=this._edgeList.size()-1),this._edgeList.get(i)}propagateSideLabels(t){let e=w.NONE;for(let s=this.iterator();s.hasNext();){const o=s.next().getLabel();o.isArea(t)&&o.getLocation(t,k.LEFT)!==w.NONE&&(e=o.getLocation(t,k.LEFT))}if(e===w.NONE)return null;let i=e;for(let s=this.iterator();s.hasNext();){const r=s.next(),o=r.getLabel();if(o.getLocation(t,k.ON)===w.NONE&&o.setLocation(t,k.ON,i),o.isArea(t)){const a=o.getLocation(t,k.LEFT),l=o.getLocation(t,k.RIGHT);if(l!==w.NONE){if(l!==i)throw new Wn("side location conflict",r.getCoordinate());a===w.NONE&&rt.shouldNeverReachHere("found single null side (at "+r.getCoordinate()+")"),i=a}else rt.isTrue(o.getLocation(t,k.LEFT)===w.NONE,"found single null side"),o.setLocation(t,k.RIGHT,i),o.setLocation(t,k.LEFT,i)}}}getCoordinate(){const t=this.iterator();return t.hasNext()?t.next().getCoordinate():null}checkAreaLabelsConsistent(t){const e=this.getEdges();if(e.size()<=0)return!0;const i=e.size()-1,r=e.get(i).getLabel().getLocation(t,k.LEFT);rt.isTrue(r!==w.NONE,"Found unlabelled area edge");let o=r;for(let a=this.iterator();a.hasNext();){const h=a.next().getLabel();rt.isTrue(h.isArea(t),"Found non-area edge");const c=h.getLocation(t,k.LEFT),u=h.getLocation(t,k.RIGHT);if(c===u||u!==o)return!1;o=c}return!0}findIndex(t){this.iterator();for(let e=0;e<this._edgeList.size();e++)if(this._edgeList.get(e)===t)return e;return-1}iterator(){return this.getEdges().iterator()}getEdges(){return this._edgeList===null&&(this._edgeList=new it(this._edgeMap.values())),this._edgeList}getLocation(t,e,i){return this._ptInAreaLocation[t]===w.NONE&&(this._ptInAreaLocation[t]=ci.locate(e,i[t].getGeometry())),this._ptInAreaLocation[t]}toString(){const t=new Ro;t.append("EdgeEndStar:   "+this.getCoordinate()),t.append(`
`);for(let e=this.iterator();e.hasNext();){const i=e.next();t.append(i),t.append(`
`)}return t.toString()}computeEdgeEndLabels(t){for(let e=this.iterator();e.hasNext();)e.next().computeLabel(t)}computeLabelling(t){this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()),this.propagateSideLabels(0),this.propagateSideLabels(1);const e=[!1,!1];for(let i=this.iterator();i.hasNext();){const r=i.next().getLabel();for(let o=0;o<2;o++)r.isLine(o)&&r.getLocation(o)===w.BOUNDARY&&(e[o]=!0)}for(let i=this.iterator();i.hasNext();){const s=i.next(),r=s.getLabel();for(let o=0;o<2;o++)if(r.isAnyNull(o)){let a=w.NONE;if(e[o])a=w.EXTERIOR;else{const l=s.getCoordinate();a=this.getLocation(o,l,t)}r.setAllLocationsIfNull(o,a)}}}getDegree(){return this._edgeMap.size()}insertEdgeEnd(t,e){this._edgeMap.put(t,e),this._edgeList=null}print(t){ri.out.println("EdgeEndStar:   "+this.getCoordinate());for(let e=this.iterator();e.hasNext();)e.next().print(t)}isAreaLabelsConsistent(t){return this.computeEdgeEndLabels(t.getBoundaryNodeRule()),this.checkAreaLabelsConsistent(0)}}class At{static isNorthern(t){return t===At.NE||t===At.NW}static isOpposite(t,e){return t===e?!1:(t-e+4)%4===2}static commonHalfPlane(t,e){if(t===e)return t;if((t-e+4)%4===2)return-1;const s=t<e?t:e,r=t>e?t:e;return s===0&&r===3?3:s}static isInHalfPlane(t,e){return e===At.SE?t===At.SE||t===At.SW:t===e||t===e+1}static quadrant(){if(typeof arguments[0]=="number"&&typeof arguments[1]=="number"){const t=arguments[0],e=arguments[1];if(t===0&&e===0)throw new ft("Cannot compute the quadrant for point ( "+t+", "+e+" )");return t>=0?e>=0?At.NE:At.SE:e>=0?At.NW:At.SW}else if(arguments[0]instanceof E&&arguments[1]instanceof E){const t=arguments[0],e=arguments[1];if(e.x===t.x&&e.y===t.y)throw new ft("Cannot compute the quadrant for two identical points "+t);return e.x>=t.x?e.y>=t.y?At.NE:At.SE:e.y>=t.y?At.NW:At.SW}}}At.NE=0;At.NW=1;At.SW=2;At.SE=3;class fu extends bl{constructor(){super(),fu.constructor_.apply(this,arguments)}static constructor_(){this._resultAreaEdgeList=null,this._label=null,this._SCANNING_FOR_INCOMING=1,this._LINKING_TO_OUTGOING=2}linkResultDirectedEdges(){this.getResultAreaEdges();let t=null,e=null,i=this._SCANNING_FOR_INCOMING;for(let s=0;s<this._resultAreaEdgeList.size();s++){const r=this._resultAreaEdgeList.get(s),o=r.getSym();if(r.getLabel().isArea())switch(t===null&&r.isInResult()&&(t=r),i){case this._SCANNING_FOR_INCOMING:if(!o.isInResult())continue;e=o,i=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(!r.isInResult())continue;e.setNext(r),i=this._SCANNING_FOR_INCOMING;break}}if(i===this._LINKING_TO_OUTGOING){if(t===null)throw new Wn("no outgoing dirEdge found",this.getCoordinate());rt.isTrue(t.isInResult(),"unable to link last incoming dirEdge"),e.setNext(t)}}insert(t){const e=t;this.insertEdgeEnd(e,e)}getRightmostEdge(){const t=this.getEdges(),e=t.size();if(e<1)return null;const i=t.get(0);if(e===1)return i;const s=t.get(e-1),r=i.getQuadrant(),o=s.getQuadrant();return At.isNorthern(r)&&At.isNorthern(o)?i:!At.isNorthern(r)&&!At.isNorthern(o)?s:i.getDy()!==0?i:s.getDy()!==0?s:(rt.shouldNeverReachHere("found two horizontal edges incident on node"),null)}updateLabelling(t){for(let e=this.iterator();e.hasNext();){const s=e.next().getLabel();s.setAllLocationsIfNull(0,t.getLocation(0)),s.setAllLocationsIfNull(1,t.getLocation(1))}}linkAllDirectedEdges(){this.getEdges();let t=null,e=null;for(let i=this._edgeList.size()-1;i>=0;i--){const s=this._edgeList.get(i),r=s.getSym();e===null&&(e=r),t!==null&&r.setNext(t),t=s}e.setNext(t)}computeDepths(){if(arguments.length===1){const t=arguments[0],e=this.findIndex(t),i=t.getDepth(k.LEFT),s=t.getDepth(k.RIGHT),r=this.computeDepths(e+1,this._edgeList.size(),i);if(this.computeDepths(0,e,r)!==s)throw new Wn("depth mismatch at "+t.getCoordinate())}else if(arguments.length===3){const t=arguments[0],e=arguments[1];let s=arguments[2];for(let r=t;r<e;r++){const o=this._edgeList.get(r);o.setEdgeDepths(k.RIGHT,s),s=o.getDepth(k.LEFT)}return s}}mergeSymLabels(){for(let t=this.iterator();t.hasNext();){const e=t.next();e.getLabel().merge(e.getSym().getLabel())}}linkMinimalDirectedEdges(t){let e=null,i=null,s=this._SCANNING_FOR_INCOMING;for(let r=this._resultAreaEdgeList.size()-1;r>=0;r--){const o=this._resultAreaEdgeList.get(r),a=o.getSym();switch(e===null&&o.getEdgeRing()===t&&(e=o),s){case this._SCANNING_FOR_INCOMING:if(a.getEdgeRing()!==t)continue;i=a,s=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(o.getEdgeRing()!==t)continue;i.setNextMin(o),s=this._SCANNING_FOR_INCOMING;break}}s===this._LINKING_TO_OUTGOING&&(rt.isTrue(e!==null,"found null for first outgoing dirEdge"),rt.isTrue(e.getEdgeRing()===t,"unable to link last incoming dirEdge"),i.setNextMin(e))}getOutgoingDegree(){if(arguments.length===0){let t=0;for(let e=this.iterator();e.hasNext();)e.next().isInResult()&&t++;return t}else if(arguments.length===1){const t=arguments[0];let e=0;for(let i=this.iterator();i.hasNext();)i.next().getEdgeRing()===t&&e++;return e}}getLabel(){return this._label}findCoveredLineEdges(){let t=w.NONE;for(let i=this.iterator();i.hasNext();){const s=i.next(),r=s.getSym();if(!s.isLineEdge()){if(s.isInResult()){t=w.INTERIOR;break}if(r.isInResult()){t=w.EXTERIOR;break}}}if(t===w.NONE)return null;let e=t;for(let i=this.iterator();i.hasNext();){const s=i.next(),r=s.getSym();s.isLineEdge()?s.getEdge().setCovered(e===w.INTERIOR):(s.isInResult()&&(e=w.EXTERIOR),r.isInResult()&&(e=w.INTERIOR))}}computeLabelling(t){super.computeLabelling.call(this,t),this._label=new Xt(w.NONE);for(let e=this.iterator();e.hasNext();){const r=e.next().getEdge().getLabel();for(let o=0;o<2;o++){const a=r.getLocation(o);(a===w.INTERIOR||a===w.BOUNDARY)&&this._label.setLocation(o,w.INTERIOR)}}}print(t){ri.out.println("DirectedEdgeStar: "+this.getCoordinate());for(let e=this.iterator();e.hasNext();){const i=e.next();t.print("out "),i.print(t),t.println(),t.print("in "),i.getSym().print(t),t.println()}}getResultAreaEdges(){if(this._resultAreaEdgeList!==null)return this._resultAreaEdgeList;this._resultAreaEdgeList=new it;for(let t=this.iterator();t.hasNext();){const e=t.next();(e.isInResult()||e.getSym().isInResult())&&this._resultAreaEdgeList.add(e)}return this._resultAreaEdgeList}}class Il{constructor(){Il.constructor_.apply(this,arguments)}static constructor_(){if(this._label=null,this._isInResult=!1,this._isCovered=!1,this._isCoveredSet=!1,this._isVisited=!1,arguments.length!==0){if(arguments.length===1){const t=arguments[0];this._label=t}}}setVisited(t){this._isVisited=t}setInResult(t){this._isInResult=t}setLabel(t){this._label=t}getLabel(){return this._label}setCovered(t){this._isCovered=t,this._isCoveredSet=!0}updateIM(t){rt.isTrue(this._label.getGeometryCount()>=2,"found partial label"),this.computeIM(t)}isCovered(){return this._isCovered}isCoveredSet(){return this._isCoveredSet}isInResult(){return this._isInResult}isVisited(){return this._isVisited}}let Rr=class rc extends Il{constructor(){super(),rc.constructor_.apply(this,arguments)}static constructor_(){this._coord=null,this._edges=null;const t=arguments[0],e=arguments[1];this._coord=t,this._edges=e,this._label=new Xt(0,w.NONE)}isIncidentEdgeInResult(){for(let t=this.getEdges().getEdges().iterator();t.hasNext();)if(t.next().getEdge().isInResult())return!0;return!1}isIsolated(){return this._label.getGeometryCount()===1}getCoordinate(){return this._coord}computeMergedLocation(t,e){let i=w.NONE;if(i=this._label.getLocation(e),!t.isNull(e)){const s=t.getLocation(e);i!==w.BOUNDARY&&(i=s)}return i}setLabel(){if(arguments.length===2&&Number.isInteger(arguments[1])&&Number.isInteger(arguments[0])){const t=arguments[0],e=arguments[1];this._label===null?this._label=new Xt(t,e):this._label.setLocation(t,e)}else return super.setLabel.apply(this,arguments)}getEdges(){return this._edges}mergeLabel(){if(arguments[0]instanceof rc){const t=arguments[0];this.mergeLabel(t._label)}else if(arguments[0]instanceof Xt){const t=arguments[0];for(let e=0;e<2;e++){const i=this.computeMergedLocation(t,e);this._label.getLocation(e)===w.NONE&&this._label.setLocation(e,i)}}}add(t){this._edges.insert(t),t.setNode(this)}setLabelBoundary(t){if(this._label===null)return null;let e=w.NONE;this._label!==null&&(e=this._label.getLocation(t));let i=null;switch(e){case w.BOUNDARY:i=w.INTERIOR;break;case w.INTERIOR:i=w.BOUNDARY;break;default:i=w.BOUNDARY;break}this._label.setLocation(t,i)}print(t){t.println("node "+this._coord+" lbl: "+this._label)}computeIM(t){}};class mu{createNode(t){return new Rr(t,null)}}class TR extends mu{constructor(){super()}createNode(t){return new Rr(t,new fu)}}class vo{constructor(){vo.constructor_.apply(this,arguments)}static constructor_(){this.nodeMap=new Cr,this.nodeFact=null;const t=arguments[0];this.nodeFact=t}print(t){for(let e=this.iterator();e.hasNext();)e.next().print(t)}iterator(){return this.nodeMap.values().iterator()}values(){return this.nodeMap.values()}getBoundaryNodes(t){const e=new it;for(let i=this.iterator();i.hasNext();){const s=i.next();s.getLabel().getLocation(t)===w.BOUNDARY&&e.add(s)}return e}add(t){const e=t.getCoordinate();this.addNode(e).add(t)}find(t){return this.nodeMap.get(t)}addNode(){if(arguments[0]instanceof E){const t=arguments[0];let e=this.nodeMap.get(t);return e===null&&(e=this.nodeFact.createNode(t),this.nodeMap.put(t,e)),e}else if(arguments[0]instanceof Rr){const t=arguments[0],e=this.nodeMap.get(t.getCoordinate());return e===null?(this.nodeMap.put(t.getCoordinate(),t),t):(e.mergeLabel(t),e)}}}class Gi{constructor(){Gi.constructor_.apply(this,arguments)}static constructor_(){if(this._edge=null,this._label=null,this._node=null,this._p0=null,this._p1=null,this._dx=null,this._dy=null,this._quadrant=null,arguments.length===1){const t=arguments[0];this._edge=t}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];Gi.constructor_.call(this,t,e,i,null)}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];Gi.constructor_.call(this,t),this.init(e,i),this._label=s}}compareDirection(t){return this._dx===t._dx&&this._dy===t._dy?0:this._quadrant>t._quadrant?1:this._quadrant<t._quadrant?-1:bt.index(t._p0,t._p1,this._p1)}getDy(){return this._dy}print(t){const e=Math.atan2(this._dy,this._dx),i=this.getClass().getName(),s=i.lastIndexOf("."),r=i.substring(s+1);t.print("  "+r+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+e+"   "+this._label)}getLabel(){return this._label}getEdge(){return this._edge}toString(){const t=Math.atan2(this._dy,this._dx),e=this.getClass().getName(),i=e.lastIndexOf(".");return"  "+e.substring(i+1)+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+t+"   "+this._label}computeLabel(t){}init(t,e){this._p0=t,this._p1=e,this._dx=e.x-t.x,this._dy=e.y-t.y,this._quadrant=At.quadrant(this._dx,this._dy),rt.isTrue(!(this._dx===0&&this._dy===0),"EdgeEnd with identical endpoints found")}getCoordinate(){return this._p0}setNode(t){this._node=t}compareTo(t){const e=t;return this.compareDirection(e)}getDirectedCoordinate(){return this._p1}getDx(){return this._dx}getQuadrant(){return this._quadrant}getNode(){return this._node}get interfaces_(){return[Ui]}}class Xa extends Gi{constructor(){super(),Xa.constructor_.apply(this,arguments)}static constructor_(){this._isForward=null,this._isInResult=!1,this._isVisited=!1,this._sym=null,this._next=null,this._nextMin=null,this._edgeRing=null,this._minEdgeRing=null,this._depth=[0,-999,-999];const t=arguments[0],e=arguments[1];if(Gi.constructor_.call(this,t),this._isForward=e,e)this.init(t.getCoordinate(0),t.getCoordinate(1));else{const i=t.getNumPoints()-1;this.init(t.getCoordinate(i),t.getCoordinate(i-1))}this.computeDirectedLabel()}static depthFactor(t,e){return t===w.EXTERIOR&&e===w.INTERIOR?1:t===w.INTERIOR&&e===w.EXTERIOR?-1:0}setVisited(t){this._isVisited=t}setDepth(t,e){if(this._depth[t]!==-999&&this._depth[t]!==e)throw new Wn("assigned depths do not match",this.getCoordinate());this._depth[t]=e}isInteriorAreaEdge(){let t=!0;for(let e=0;e<2;e++)this._label.isArea(e)&&this._label.getLocation(e,k.LEFT)===w.INTERIOR&&this._label.getLocation(e,k.RIGHT)===w.INTERIOR||(t=!1);return t}setNextMin(t){this._nextMin=t}print(t){super.print.call(this,t),t.print(" "+this._depth[k.LEFT]+"/"+this._depth[k.RIGHT]),t.print(" ("+this.getDepthDelta()+")"),this._isInResult&&t.print(" inResult")}setMinEdgeRing(t){this._minEdgeRing=t}getSym(){return this._sym}isForward(){return this._isForward}setSym(t){this._sym=t}setVisitedEdge(t){this.setVisited(t),this._sym.setVisited(t)}getNextMin(){return this._nextMin}getDepth(t){return this._depth[t]}computeDirectedLabel(){this._label=new Xt(this._edge.getLabel()),this._isForward||this._label.flip()}getNext(){return this._next}isLineEdge(){const t=this._label.isLine(0)||this._label.isLine(1),e=!this._label.isArea(0)||this._label.allPositionsEqual(0,w.EXTERIOR),i=!this._label.isArea(1)||this._label.allPositionsEqual(1,w.EXTERIOR);return t&&e&&i}setEdgeRing(t){this._edgeRing=t}getMinEdgeRing(){return this._minEdgeRing}getDepthDelta(){let t=this._edge.getDepthDelta();return this._isForward||(t=-t),t}setInResult(t){this._isInResult=t}getEdge(){return this._edge}printEdge(t){this.print(t),t.print(" "),this._isForward?this._edge.print(t):this._edge.printReverse(t)}setEdgeDepths(t,e){let i=this.getEdge().getDepthDelta();this._isForward||(i=-i);let s=1;t===k.LEFT&&(s=-1);const r=k.opposite(t),o=i*s,a=e+o;this.setDepth(t,e),this.setDepth(r,a)}getEdgeRing(){return this._edgeRing}isInResult(){return this._isInResult}setNext(t){this._next=t}isVisited(){return this._isVisited}}class Ll{constructor(){Ll.constructor_.apply(this,arguments)}static constructor_(){if(this._edges=new it,this._nodes=null,this._edgeEndList=new it,arguments.length===0)this._nodes=new vo(new mu);else if(arguments.length===1){const t=arguments[0];this._nodes=new vo(t)}}static linkResultDirectedEdges(t){for(let e=t.iterator();e.hasNext();)e.next().getEdges().linkResultDirectedEdges()}printEdges(t){t.println("Edges:");for(let e=0;e<this._edges.size();e++){t.println("edge "+e+":");const i=this._edges.get(e);i.print(t),i.eiList.print(t)}}debugPrintln(t){ri.out.println(t)}isBoundaryNode(t,e){const i=this._nodes.find(e);if(i===null)return!1;const s=i.getLabel();return s!==null&&s.getLocation(t)===w.BOUNDARY}linkAllDirectedEdges(){for(let t=this._nodes.iterator();t.hasNext();)t.next().getEdges().linkAllDirectedEdges()}debugPrint(t){ri.out.print(t)}findEdgeEnd(t){for(let e=this.getEdgeEnds().iterator();e.hasNext();){const i=e.next();if(i.getEdge()===t)return i}return null}getNodes(){return this._nodes.values()}findEdge(t,e){for(let i=0;i<this._edges.size();i++){const s=this._edges.get(i),r=s.getCoordinates();if(t.equals(r[0])&&e.equals(r[1]))return s}return null}find(t){return this._nodes.find(t)}addNode(){if(arguments[0]instanceof Rr){const t=arguments[0];return this._nodes.addNode(t)}else if(arguments[0]instanceof E){const t=arguments[0];return this._nodes.addNode(t)}}getNodeIterator(){return this._nodes.iterator()}linkResultDirectedEdges(){for(let t=this._nodes.iterator();t.hasNext();)t.next().getEdges().linkResultDirectedEdges()}matchInSameDirection(t,e,i,s){return t.equals(i)?bt.index(t,e,s)===bt.COLLINEAR&&At.quadrant(t,e)===At.quadrant(i,s):!1}getEdgeEnds(){return this._edgeEndList}getEdgeIterator(){return this._edges.iterator()}findEdgeInSameDirection(t,e){for(let i=0;i<this._edges.size();i++){const s=this._edges.get(i),r=s.getCoordinates();if(this.matchInSameDirection(t,e,r[0],r[1])||this.matchInSameDirection(t,e,r[r.length-1],r[r.length-2]))return s}return null}insertEdge(t){this._edges.add(t)}addEdges(t){for(let e=t.iterator();e.hasNext();){const i=e.next();this._edges.add(i);const s=new Xa(i,!0),r=new Xa(i,!1);s.setSym(r),r.setSym(s),this.add(s),this.add(r)}}add(t){this._nodes.add(t),this._edgeEndList.add(t)}}class Ua{constructor(){Ua.constructor_.apply(this,arguments)}static constructor_(){this._geometryFactory=new ne,this._geomGraph=null,this._disconnectedRingcoord=null;const t=arguments[0];this._geomGraph=t}static findDifferentPoint(t,e){for(let i=0;i<t.length;i++)if(!t[i].equals(e))return t[i];return null}visitInteriorRing(t,e){if(t.isEmpty())return null;const i=t.getCoordinates(),s=i[0],r=Ua.findDifferentPoint(i,s),o=e.findEdgeInSameDirection(s,r),a=e.findEdgeEnd(o);let l=null;a.getLabel().getLocation(0,k.RIGHT)===w.INTERIOR?l=a:a.getSym().getLabel().getLocation(0,k.RIGHT)===w.INTERIOR&&(l=a.getSym()),rt.isTrue(l!==null,"unable to find dirEdge with Interior on RHS"),this.visitLinkedDirectedEdges(l)}visitShellInteriors(t,e){if(t instanceof Pe){const i=t;this.visitInteriorRing(i.getExteriorRing(),e)}if(t instanceof ai){const i=t;for(let s=0;s<i.getNumGeometries();s++){const r=i.getGeometryN(s);this.visitInteriorRing(r.getExteriorRing(),e)}}}getCoordinate(){return this._disconnectedRingcoord}setInteriorEdgesInResult(t){for(let e=t.getEdgeEnds().iterator();e.hasNext();){const i=e.next();i.getLabel().getLocation(0,k.RIGHT)===w.INTERIOR&&i.setInResult(!0)}}visitLinkedDirectedEdges(t){const e=t;let i=t;do rt.isTrue(i!==null,"found null Directed Edge"),i.setVisited(!0),i=i.getNext();while(i!==e)}buildEdgeRings(t){const e=new it;for(let i=t.iterator();i.hasNext();){const s=i.next();if(s.isInResult()&&s.getEdgeRing()===null){const r=new gu(s,this._geometryFactory);r.linkDirectedEdgesForMinimalEdgeRings();const o=r.buildMinimalRings();e.addAll(o)}}return e}hasUnvisitedShellEdge(t){for(let e=0;e<t.size();e++){const i=t.get(e);if(i.isHole())continue;const s=i.getEdges();let r=s.get(0);if(r.getLabel().getLocation(0,k.RIGHT)===w.INTERIOR){for(let o=0;o<s.size();o++)if(r=s.get(o),!r.isVisited())return this._disconnectedRingcoord=r.getCoordinate(),!0}}return!1}isInteriorsConnected(){const t=new it;this._geomGraph.computeSplitEdges(t);const e=new Ll(new TR);e.addEdges(t),this.setInteriorEdgesInResult(e),e.linkResultDirectedEdges();const i=this.buildEdgeRings(e.getEdgeEnds());return this.visitShellInteriors(this._geomGraph.getGeometry(),e),!this.hasUnvisitedShellEdge(i)}}class MR{computeEdgeEnds(){if(arguments.length===1){const t=arguments[0],e=new it;for(let i=t;i.hasNext();){const s=i.next();this.computeEdgeEnds(s,e)}return e}else if(arguments.length===2){const t=arguments[0],e=arguments[1],i=t.getEdgeIntersectionList();i.addEndpoints();const s=i.iterator();let r=null,o=null;if(!s.hasNext())return null;let a=s.next();do r=o,o=a,a=null,s.hasNext()&&(a=s.next()),o!==null&&(this.createEdgeEndForPrev(t,e,o,r),this.createEdgeEndForNext(t,e,o,a));while(o!==null)}}createEdgeEndForNext(t,e,i,s){const r=i.segmentIndex+1;if(r>=t.getNumPoints()&&s===null)return null;let o=t.getCoordinate(r);s!==null&&s.segmentIndex===i.segmentIndex&&(o=s.coord);const a=new Gi(t,i.coord,o,new Xt(t.getLabel()));e.add(a)}createEdgeEndForPrev(t,e,i,s){let r=i.segmentIndex;if(i.dist===0){if(r===0)return null;r--}let o=t.getCoordinate(r);s!==null&&s.segmentIndex>=r&&(o=s.coord);const a=new Xt(t.getLabel());a.flip();const l=new Gi(t,i.coord,o,a);e.add(l)}}class CR{}const qo={reverseOrder:function(){return{compare(n,t){return t.compareTo(n)}}},min:function(n){return qo.sort(n),n.get(0)},sort:function(n,t){const e=n.toArray();t?hs.sort(e,t):hs.sort(e);const i=n.iterator();for(let s=0,r=e.length;s<r;s++)i.next(),i.set(e[s])},singletonList:function(n){const t=new it;return t.add(n),t}};class ps{constructor(){ps.constructor_.apply(this,arguments)}static constructor_(){this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._properIntersectionPoint=null,this._li=null,this._includeProper=null,this._recordIsolated=null,this._isSelfIntersection=null,this._numIntersections=0,this.numTests=0,this._bdyNodes=null,this._isDone=!1,this._isDoneWhenProperInt=!1;const t=arguments[0],e=arguments[1],i=arguments[2];this._li=t,this._includeProper=e,this._recordIsolated=i}static isAdjacentSegments(t,e){return Math.abs(t-e)===1}isTrivialIntersection(t,e,i,s){if(t===i&&this._li.getIntersectionNum()===1){if(ps.isAdjacentSegments(e,s))return!0;if(t.isClosed()){const r=t.getNumPoints()-1;if(e===0&&s===r||s===0&&e===r)return!0}}return!1}hasProperInteriorIntersection(){return this._hasProperInterior}isBoundaryPointInternal(t,e){for(let i=e.iterator();i.hasNext();){const r=i.next().getCoordinate();if(t.isIntersection(r))return!0}return!1}hasProperIntersection(){return this._hasProper}hasIntersection(){return this._hasIntersection}isDone(){return this._isDone}isBoundaryPoint(t,e){return e===null?!1:!!(this.isBoundaryPointInternal(t,e[0])||this.isBoundaryPointInternal(t,e[1]))}setBoundaryNodes(t,e){this._bdyNodes=new Array(2).fill(null),this._bdyNodes[0]=t,this._bdyNodes[1]=e}addIntersections(t,e,i,s){if(t===i&&e===s)return null;this.numTests++;const r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],a=i.getCoordinates()[s],l=i.getCoordinates()[s+1];this._li.computeIntersection(r,o,a,l),this._li.hasIntersection()&&(this._recordIsolated&&(t.setIsolated(!1),i.setIsolated(!1)),this._numIntersections++,this.isTrivialIntersection(t,e,i,s)||(this._hasIntersection=!0,(this._includeProper||!this._li.isProper())&&(t.addIntersections(this._li,e,0),i.addIntersections(this._li,s,1)),this._li.isProper()&&(this._properIntersectionPoint=this._li.getIntersection(0).copy(),this._hasProper=!0,this._isDoneWhenProperInt&&(this._isDone=!0),this.isBoundaryPoint(this._li,this._bdyNodes)||(this._hasProperInterior=!0))))}getProperIntersectionPoint(){return this._properIntersectionPoint}setIsDoneIfProperInt(t){this._isDoneWhenProperInt=t}}class yu{constructor(){yu.constructor_.apply(this,arguments)}static constructor_(){this.mce=null,this.chainIndex=null;const t=arguments[0],e=arguments[1];this.mce=t,this.chainIndex=e}computeIntersections(t,e){this.mce.computeIntersectsForChain(this.chainIndex,t.mce,t.chainIndex,e)}}class Li{constructor(){Li.constructor_.apply(this,arguments)}static constructor_(){if(this._label=null,this._xValue=null,this._eventType=null,this._insertEvent=null,this._deleteEventIndex=null,this._obj=null,arguments.length===2){const t=arguments[0],e=arguments[1];this._eventType=Li.DELETE,this._xValue=t,this._insertEvent=e}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._eventType=Li.INSERT,this._label=t,this._xValue=e,this._obj=i}}getObject(){return this._obj}getDeleteEventIndex(){return this._deleteEventIndex}isDelete(){return this._eventType===Li.DELETE}setDeleteEventIndex(t){this._deleteEventIndex=t}compareTo(t){const e=t;return this._xValue<e._xValue?-1:this._xValue>e._xValue?1:this._eventType<e._eventType?-1:this._eventType>e._eventType?1:0}getInsertEvent(){return this._insertEvent}isInsert(){return this._eventType===Li.INSERT}isSameLabel(t){return this._label===null?!1:this._label===t._label}get interfaces_(){return[Ui]}}Li.INSERT=1;Li.DELETE=2;class wu extends CR{constructor(){super(),wu.constructor_.apply(this,arguments)}static constructor_(){this.events=new it,this.nOverlaps=null}prepareEvents(){qo.sort(this.events);for(let t=0;t<this.events.size();t++){const e=this.events.get(t);e.isDelete()&&e.getInsertEvent().setDeleteEventIndex(t)}}computeIntersections(){if(arguments.length===1){const t=arguments[0];this.nOverlaps=0,this.prepareEvents();for(let e=0;e<this.events.size();e++){const i=this.events.get(e);if(i.isInsert()&&this.processOverlaps(e,i.getDeleteEventIndex(),i,t),t.isDone())break}}else if(arguments.length===3){if(arguments[2]instanceof ps&&Z(arguments[0],rr)&&Z(arguments[1],rr)){const t=arguments[0],e=arguments[1],i=arguments[2];this.addEdges(t,t),this.addEdges(e,e),this.computeIntersections(i)}else if(typeof arguments[2]=="boolean"&&Z(arguments[0],rr)&&arguments[1]instanceof ps){const t=arguments[0],e=arguments[1];arguments[2]?this.addEdges(t,null):this.addEdges(t),this.computeIntersections(e)}}}addEdge(t,e){const i=t.getMonotoneChainEdge(),s=i.getStartIndexes();for(let r=0;r<s.length-1;r++){const o=new yu(i,r),a=new Li(e,i.getMinX(r),o);this.events.add(a),this.events.add(new Li(i.getMaxX(r),a))}}processOverlaps(t,e,i,s){const r=i.getObject();for(let o=t;o<e;o++){const a=this.events.get(o);if(a.isInsert()){const l=a.getObject();i.isSameLabel(a)||(r.computeIntersections(l,s),this.nOverlaps++)}}}addEdges(){if(arguments.length===1){const t=arguments[0];for(let e=t.iterator();e.hasNext();){const i=e.next();this.addEdge(i,i)}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];for(let i=t.iterator();i.hasNext();){const s=i.next();this.addEdge(s,e)}}}}class de{isInBoundary(t){}}class $0{isInBoundary(t){return t%2===1}get interfaces_(){return[de]}}class J0{isInBoundary(t){return t>0}get interfaces_(){return[de]}}class Q0{isInBoundary(t){return t>1}get interfaces_(){return[de]}}class tm{isInBoundary(t){return t===1}get interfaces_(){return[de]}}de.Mod2BoundaryNodeRule=$0;de.EndPointBoundaryNodeRule=J0;de.MultiValentEndPointBoundaryNodeRule=Q0;de.MonoValentEndPointBoundaryNodeRule=tm;de.MOD2_BOUNDARY_RULE=new $0;de.ENDPOINT_BOUNDARY_RULE=new J0;de.MULTIVALENT_ENDPOINT_BOUNDARY_RULE=new Q0;de.MONOVALENT_ENDPOINT_BOUNDARY_RULE=new tm;de.OGC_SFS_BOUNDARY_RULE=de.MOD2_BOUNDARY_RULE;class _u{constructor(){_u.constructor_.apply(this,arguments)}static constructor_(){if(this._boundaryRule=de.OGC_SFS_BOUNDARY_RULE,this._isIn=null,this._numBoundaries=null,arguments.length!==0){if(arguments.length===1){const t=arguments[0];if(t===null)throw new ft("Rule must be non-null");this._boundaryRule=t}}}locateInPolygonRing(t,e){return e.getEnvelopeInternal().intersects(t)?ki.locateInRing(t,e.getCoordinates()):w.EXTERIOR}intersects(t,e){return this.locate(t,e)!==w.EXTERIOR}updateLocationInfo(t){t===w.INTERIOR&&(this._isIn=!0),t===w.BOUNDARY&&this._numBoundaries++}computeLocation(t,e){if(e instanceof Bi&&this.updateLocationInfo(this.locateOnPoint(t,e)),e instanceof ue)this.updateLocationInfo(this.locateOnLineString(t,e));else if(e instanceof Pe)this.updateLocationInfo(this.locateInPolygon(t,e));else if(e instanceof ws){const i=e;for(let s=0;s<i.getNumGeometries();s++){const r=i.getGeometryN(s);this.updateLocationInfo(this.locateOnLineString(t,r))}}else if(e instanceof ai){const i=e;for(let s=0;s<i.getNumGeometries();s++){const r=i.getGeometryN(s);this.updateLocationInfo(this.locateInPolygon(t,r))}}else if(e instanceof jt){const i=new ar(e);for(;i.hasNext();){const s=i.next();s!==e&&this.computeLocation(t,s)}}}locateOnPoint(t,e){return e.getCoordinate().equals2D(t)?w.INTERIOR:w.EXTERIOR}locateOnLineString(t,e){if(!e.getEnvelopeInternal().intersects(t))return w.EXTERIOR;const i=e.getCoordinateSequence();return!e.isClosed()&&(t.equals(i.getCoordinate(0))||t.equals(i.getCoordinate(i.size()-1)))?w.BOUNDARY:ki.isOnLine(t,i)?w.INTERIOR:w.EXTERIOR}locateInPolygon(t,e){if(e.isEmpty())return w.EXTERIOR;const i=e.getExteriorRing(),s=this.locateInPolygonRing(t,i);if(s===w.EXTERIOR)return w.EXTERIOR;if(s===w.BOUNDARY)return w.BOUNDARY;for(let r=0;r<e.getNumInteriorRing();r++){const o=e.getInteriorRingN(r),a=this.locateInPolygonRing(t,o);if(a===w.INTERIOR)return w.EXTERIOR;if(a===w.BOUNDARY)return w.BOUNDARY}return w.INTERIOR}locate(t,e){return e.isEmpty()?w.EXTERIOR:e instanceof ue?this.locateOnLineString(t,e):e instanceof Pe?this.locateInPolygon(t,e):(this._isIn=!1,this._numBoundaries=0,this.computeLocation(t,e),this._boundaryRule.isInBoundary(this._numBoundaries)?w.BOUNDARY:this._numBoundaries>0||this._isIn?w.INTERIOR:w.EXTERIOR)}}class pu{visitItem(t){}}class Fr{constructor(){Fr.constructor_.apply(this,arguments)}static constructor_(){this._min=X.POSITIVE_INFINITY,this._max=X.NEGATIVE_INFINITY}getMin(){return this._min}intersects(t,e){return!(this._min>e||this._max<t)}getMax(){return this._max}toString(){return Ha.toLineString(new E(this._min,0),new E(this._max,0))}}class RR{compare(t,e){const i=t,s=e,r=(i._min+i._max)/2,o=(s._min+s._max)/2;return r<o?-1:r>o?1:0}get interfaces_(){return[Pr]}}Fr.NodeComparator=RR;class xu extends Fr{constructor(){super(),xu.constructor_.apply(this,arguments)}static constructor_(){this._item=null;const t=arguments[0],e=arguments[1],i=arguments[2];this._min=t,this._max=e,this._item=i}query(t,e,i){if(!this.intersects(t,e))return null;i.visitItem(this._item)}}class Tu extends Fr{constructor(){super(),Tu.constructor_.apply(this,arguments)}static constructor_(){this._node1=null,this._node2=null;const t=arguments[0],e=arguments[1];this._node1=t,this._node2=e,this.buildExtent(this._node1,this._node2)}buildExtent(t,e){this._min=Math.min(t._min,e._min),this._max=Math.max(t._max,e._max)}query(t,e,i){if(!this.intersects(t,e))return null;this._node1!==null&&this._node1.query(t,e,i),this._node2!==null&&this._node2.query(t,e,i)}}class Mu{constructor(){Mu.constructor_.apply(this,arguments)}static constructor_(){this._leaves=new it,this._root=null,this._level=0}buildTree(){qo.sort(this._leaves,new Fr.NodeComparator);let t=this._leaves,e=null,i=new it;for(;;){if(this.buildLevel(t,i),i.size()===1)return i.get(0);e=t,t=i,i=e}}insert(t,e,i){if(this._root!==null)throw new _s("Index cannot be added to once it has been queried");this._leaves.add(new xu(t,e,i))}query(t,e,i){if(this.init(),this._root===null)return null;this._root.query(t,e,i)}buildRoot(){if(this._root!==null)return null;this._root=this.buildTree()}printNode(t){ri.out.println(Ha.toLineString(new E(t._min,this._level),new E(t._max,this._level)))}init(){if(this._root!==null||this._leaves.size()===0)return null;this.buildRoot()}buildLevel(t,e){this._level++,e.clear();for(let i=0;i<t.size();i+=2){const s=t.get(i);if((i+1<t.size()?t.get(i):null)===null)e.add(s);else{const o=new Tu(t.get(i),t.get(i+1));e.add(o)}}}}class $e{constructor(){$e.constructor_.apply(this,arguments)}static constructor_(){if(this.p0=null,this.p1=null,arguments.length===0)$e.constructor_.call(this,new E,new E);else if(arguments.length===1){const t=arguments[0];$e.constructor_.call(this,t.p0,t.p1)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.p0=t,this.p1=e}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];$e.constructor_.call(this,new E(t,e),new E(i,s))}}static midPoint(t,e){return new E((t.x+e.x)/2,(t.y+e.y)/2)}minX(){return Math.min(this.p0.x,this.p1.x)}orientationIndex(){if(arguments[0]instanceof $e){const t=arguments[0],e=bt.index(this.p0,this.p1,t.p0),i=bt.index(this.p0,this.p1,t.p1);return e>=0&&i>=0||e<=0&&i<=0?Math.max(e,i):0}else if(arguments[0]instanceof E){const t=arguments[0];return bt.index(this.p0,this.p1,t)}}toGeometry(t){return t.createLineString([this.p0,this.p1])}isVertical(){return this.p0.x===this.p1.x}minY(){return Math.min(this.p0.y,this.p1.y)}midPoint(){return $e.midPoint(this.p0,this.p1)}maxY(){return Math.max(this.p0.y,this.p1.y)}pointAlongOffset(t,e){const i=this.p0.x+t*(this.p1.x-this.p0.x),s=this.p0.y+t*(this.p1.y-this.p0.y),r=this.p1.x-this.p0.x,o=this.p1.y-this.p0.y,a=Math.sqrt(r*r+o*o);let l=0,h=0;if(e!==0){if(a<=0)throw new _s("Cannot compute offset from zero-length line segment");l=e*r/a,h=e*o/a}const c=i-h,u=s+l;return new E(c,u)}setCoordinates(){if(arguments.length===1){const t=arguments[0];this.setCoordinates(t.p0,t.p1)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.p0.x=t.x,this.p0.y=t.y,this.p1.x=e.x,this.p1.y=e.y}}segmentFraction(t){let e=this.projectionFactor(t);return e<0?e=0:(e>1||X.isNaN(e))&&(e=1),e}toString(){return"LINESTRING( "+this.p0.x+" "+this.p0.y+", "+this.p1.x+" "+this.p1.y+")"}distance(){if(arguments[0]instanceof $e){const t=arguments[0];return _e.segmentToSegment(this.p0,this.p1,t.p0,t.p1)}else if(arguments[0]instanceof E){const t=arguments[0];return _e.pointToSegment(t,this.p0,this.p1)}}equals(t){if(!(t instanceof $e))return!1;const e=t;return this.p0.equals(e.p0)&&this.p1.equals(e.p1)}intersection(t){const e=new zn;return e.computeIntersection(this.p0,this.p1,t.p0,t.p1),e.hasIntersection()?e.getIntersection(0):null}project(){if(arguments[0]instanceof E){const t=arguments[0];if(t.equals(this.p0)||t.equals(this.p1))return new E(t);const e=this.projectionFactor(t),i=new E;return i.x=this.p0.x+e*(this.p1.x-this.p0.x),i.y=this.p0.y+e*(this.p1.y-this.p0.y),i}else if(arguments[0]instanceof $e){const t=arguments[0],e=this.projectionFactor(t.p0),i=this.projectionFactor(t.p1);if(e>=1&&i>=1||e<=0&&i<=0)return null;let s=this.project(t.p0);e<0&&(s=this.p0),e>1&&(s=this.p1);let r=this.project(t.p1);return i<0&&(r=this.p0),i>1&&(r=this.p1),new $e(s,r)}}normalize(){this.p1.compareTo(this.p0)<0&&this.reverse()}angle(){return Math.atan2(this.p1.y-this.p0.y,this.p1.x-this.p0.x)}getCoordinate(t){return t===0?this.p0:this.p1}distancePerpendicular(t){return _e.pointToLinePerpendicular(t,this.p0,this.p1)}closestPoint(t){const e=this.projectionFactor(t);if(e>0&&e<1)return this.project(t);const i=this.p0.distance(t),s=this.p1.distance(t);return i<s?this.p0:this.p1}projectionFactor(t){if(t.equals(this.p0))return 0;if(t.equals(this.p1))return 1;const e=this.p1.x-this.p0.x,i=this.p1.y-this.p0.y,s=e*e+i*i;return s<=0?X.NaN:((t.x-this.p0.x)*e+(t.y-this.p0.y)*i)/s}closestPoints(t){const e=this.intersection(t);if(e!==null)return[e,e];const i=new Array(2).fill(null);let s=X.MAX_VALUE,r=null;const o=this.closestPoint(t.p0);s=o.distance(t.p0),i[0]=o,i[1]=t.p0;const a=this.closestPoint(t.p1);r=a.distance(t.p1),r<s&&(s=r,i[0]=a,i[1]=t.p1);const l=t.closestPoint(this.p0);r=l.distance(this.p0),r<s&&(s=r,i[0]=this.p0,i[1]=l);const h=t.closestPoint(this.p1);return r=h.distance(this.p1),r<s&&(s=r,i[0]=this.p1,i[1]=h),i}maxX(){return Math.max(this.p0.x,this.p1.x)}getLength(){return this.p0.distance(this.p1)}compareTo(t){const e=t,i=this.p0.compareTo(e.p0);return i!==0?i:this.p1.compareTo(e.p1)}reverse(){const t=this.p0;this.p0=this.p1,this.p1=t}equalsTopo(t){return this.p0.equals(t.p0)&&this.p1.equals(t.p1)||this.p0.equals(t.p1)&&this.p1.equals(t.p0)}lineIntersection(t){return q0.intersection(this.p0,this.p1,t.p0,t.p1)}isHorizontal(){return this.p0.y===this.p1.y}reflect(t){const e=this.p1.getY()-this.p0.getY(),i=this.p0.getX()-this.p1.getX(),s=this.p0.getY()*(this.p1.getX()-this.p0.getX())-this.p0.getX()*(this.p1.getY()-this.p0.getY()),r=e*e+i*i,o=e*e-i*i,a=t.getX(),l=t.getY(),h=(-o*a-2*e*i*l-2*e*s)/r,c=(o*l-2*e*i*a-2*i*s)/r;return new E(h,c)}pointAlong(t){const e=new E;return e.x=this.p0.x+t*(this.p1.x-this.p0.x),e.y=this.p0.y+t*(this.p1.y-this.p0.y),e}hashCode(){let t=X.doubleToLongBits(this.p0.x);t^=X.doubleToLongBits(this.p0.y)*31;const e=Math.trunc(t)^Math.trunc(t>>32);let i=X.doubleToLongBits(this.p1.x);i^=X.doubleToLongBits(this.p1.y)*31;const s=Math.trunc(i)^Math.trunc(i>>32);return e^s}get interfaces_(){return[Ui,Fe]}}class ui{constructor(){ui.constructor_.apply(this,arguments)}static constructor_(){if(this._lines=null,this._isForcedToLineString=!1,arguments.length===1){const t=arguments[0];this._lines=t}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this._lines=t,this._isForcedToLineString=e}}static getLines(){if(arguments.length===1){const t=arguments[0];return ui.getLines(t,!1)}else if(arguments.length===2){if(Z(arguments[0],Be)&&Z(arguments[1],Be)){const t=arguments[0],e=arguments[1];for(let i=t.iterator();i.hasNext();){const s=i.next();ui.getLines(s,e)}return e}else if(arguments[0]instanceof W&&typeof arguments[1]=="boolean"){const t=arguments[0],e=arguments[1],i=new it;return t.apply(new ui(i,e)),i}else if(arguments[0]instanceof W&&Z(arguments[1],Be)){const t=arguments[0],e=arguments[1];return t instanceof ue?e.add(t):t.apply(new ui(e)),e}}else if(arguments.length===3){if(typeof arguments[2]=="boolean"&&Z(arguments[0],Be)&&Z(arguments[1],Be)){const t=arguments[0],e=arguments[1],i=arguments[2];for(let s=t.iterator();s.hasNext();){const r=s.next();ui.getLines(r,e,i)}return e}else if(typeof arguments[2]=="boolean"&&arguments[0]instanceof W&&Z(arguments[1],Be)){const t=arguments[0],e=arguments[1],i=arguments[2];return t.apply(new ui(e,i)),e}}}static getGeometry(){if(arguments.length===1){const t=arguments[0];return t.getFactory().buildGeometry(ui.getLines(t))}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return t.getFactory().buildGeometry(ui.getLines(t,e))}}filter(t){if(this._isForcedToLineString&&t instanceof oi){const e=t.getFactory().createLineString(t.getCoordinateSequence());return this._lines.add(e),null}t instanceof ue&&this._lines.add(t)}setForceToLineString(t){this._isForcedToLineString=t}get interfaces_(){return[Kr]}}class Cu{constructor(){Cu.constructor_.apply(this,arguments)}static constructor_(){this._items=new it}getItems(){return this._items}visitItem(t){this._items.add(t)}get interfaces_(){return[pu]}}class kr{constructor(){kr.constructor_.apply(this,arguments)}static constructor_(){this._geom=null,this._index=null;const t=arguments[0];if(!(Z(t,El)||t instanceof oi))throw new ft("Argument must be Polygonal or LinearRing");this._geom=t}locate(t){this._index===null&&(this._index=new Nl(this._geom),this._geom=null);const e=new or(t),i=new Sl(e);return this._index.query(t.y,t.y,i),e.getLocation()}get interfaces_(){return[Z0]}}class Sl{constructor(){Sl.constructor_.apply(this,arguments)}static constructor_(){this._counter=null;const t=arguments[0];this._counter=t}visitItem(t){const e=t;this._counter.countSegment(e.getCoordinate(0),e.getCoordinate(1))}get interfaces_(){return[pu]}}class Nl{constructor(){Nl.constructor_.apply(this,arguments)}static constructor_(){this._isEmpty=!1,this._index=new Mu;const t=arguments[0];t.isEmpty()?this._isEmpty=!0:this.init(t)}init(t){const e=ui.getLines(t);for(let i=e.iterator();i.hasNext();){const r=i.next().getCoordinates();this.addLine(r)}}addLine(t){for(let e=1;e<t.length;e++){const i=new $e(t[e-1],t[e]),s=Math.min(i.p0.y,i.p1.y),r=Math.max(i.p0.y,i.p1.y);this._index.insert(s,r,i)}}query(){if(arguments.length===2){const t=arguments[0],e=arguments[1];if(this._isEmpty)return new it;const i=new Cu;return this._index.query(t,e,i),i.getItems()}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(this._isEmpty)return null;this._index.query(t,e,i)}}}kr.SegmentVisitor=Sl;kr.IntervalIndexedGeometry=Nl;class Ru{constructor(){Ru.constructor_.apply(this,arguments)}static constructor_(){this.coord=null,this.segmentIndex=null,this.dist=null;const t=arguments[0],e=arguments[1],i=arguments[2];this.coord=new E(t),this.segmentIndex=e,this.dist=i}getSegmentIndex(){return this.segmentIndex}getCoordinate(){return this.coord}print(t){t.print(this.coord),t.print(" seg # = "+this.segmentIndex),t.println(" dist = "+this.dist)}compareTo(t){const e=t;return this.compare(e.segmentIndex,e.dist)}isEndPoint(t){return this.segmentIndex===0&&this.dist===0||this.segmentIndex===t}toString(){return this.coord+" seg # = "+this.segmentIndex+" dist = "+this.dist}getDistance(){return this.dist}compare(t,e){return this.segmentIndex<t?-1:this.segmentIndex>t?1:this.dist<e?-1:this.dist>e?1:0}get interfaces_(){return[Ui]}}class Eu{constructor(){Eu.constructor_.apply(this,arguments)}static constructor_(){this._nodeMap=new Cr,this.edge=null;const t=arguments[0];this.edge=t}print(t){t.println("Intersections:");for(let e=this.iterator();e.hasNext();)e.next().print(t)}addEndpoints(){const t=this.edge.pts.length-1;this.add(this.edge.pts[0],0,0),this.add(this.edge.pts[t],t,0)}createSplitEdge(t,e){let i=e.segmentIndex-t.segmentIndex+2;const s=this.edge.pts[e.segmentIndex],r=e.dist>0||!e.coord.equals2D(s);r||i--;const o=new Array(i).fill(null);let a=0;o[a++]=new E(t.coord);for(let l=t.segmentIndex+1;l<=e.segmentIndex;l++)o[a++]=this.edge.pts[l];return r&&(o[a]=e.coord),new Si(o,new Xt(this.edge._label))}add(t,e,i){const s=new Ru(t,e,i),r=this._nodeMap.get(s);return r!==null?r:(this._nodeMap.put(s,s),s)}isIntersection(t){for(let e=this.iterator();e.hasNext();)if(e.next().coord.equals(t))return!0;return!1}iterator(){return this._nodeMap.values().iterator()}addSplitEdges(t){this.addEndpoints();const e=this.iterator();let i=e.next();for(;e.hasNext();){const s=e.next(),r=this.createSplitEdge(i,s);t.add(r),i=s}}}class Tt{constructor(){Tt.constructor_.apply(this,arguments)}static constructor_(){if(this._matrix=null,arguments.length===0)this._matrix=Array(3).fill().map(()=>Array(3)),this.setAll(I.FALSE);else if(arguments.length===1){if(typeof arguments[0]=="string"){const t=arguments[0];Tt.constructor_.call(this),this.set(t)}else if(arguments[0]instanceof Tt){const t=arguments[0];Tt.constructor_.call(this),this._matrix[w.INTERIOR][w.INTERIOR]=t._matrix[w.INTERIOR][w.INTERIOR],this._matrix[w.INTERIOR][w.BOUNDARY]=t._matrix[w.INTERIOR][w.BOUNDARY],this._matrix[w.INTERIOR][w.EXTERIOR]=t._matrix[w.INTERIOR][w.EXTERIOR],this._matrix[w.BOUNDARY][w.INTERIOR]=t._matrix[w.BOUNDARY][w.INTERIOR],this._matrix[w.BOUNDARY][w.BOUNDARY]=t._matrix[w.BOUNDARY][w.BOUNDARY],this._matrix[w.BOUNDARY][w.EXTERIOR]=t._matrix[w.BOUNDARY][w.EXTERIOR],this._matrix[w.EXTERIOR][w.INTERIOR]=t._matrix[w.EXTERIOR][w.INTERIOR],this._matrix[w.EXTERIOR][w.BOUNDARY]=t._matrix[w.EXTERIOR][w.BOUNDARY],this._matrix[w.EXTERIOR][w.EXTERIOR]=t._matrix[w.EXTERIOR][w.EXTERIOR]}}}static isTrue(t){return t>=0||t===I.TRUE}static matches(){if(Number.isInteger(arguments[0])&&typeof arguments[1]=="string"){const t=arguments[0],e=arguments[1];return e===I.SYM_DONTCARE||e===I.SYM_TRUE&&(t>=0||t===I.TRUE)||e===I.SYM_FALSE&&t===I.FALSE||e===I.SYM_P&&t===I.P||e===I.SYM_L&&t===I.L||e===I.SYM_A&&t===I.A}else if(typeof arguments[0]=="string"&&typeof arguments[1]=="string"){const t=arguments[0],e=arguments[1];return new Tt(t).matches(e)}}isIntersects(){return!this.isDisjoint()}set(){if(arguments.length===1){const t=arguments[0];for(let e=0;e<t.length;e++){const i=Math.trunc(e/3),s=e%3;this._matrix[i][s]=I.toDimensionValue(t.charAt(e))}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._matrix[t][e]=i}}isContains(){return Tt.isTrue(this._matrix[w.INTERIOR][w.INTERIOR])&&this._matrix[w.EXTERIOR][w.INTERIOR]===I.FALSE&&this._matrix[w.EXTERIOR][w.BOUNDARY]===I.FALSE}isWithin(){return Tt.isTrue(this._matrix[w.INTERIOR][w.INTERIOR])&&this._matrix[w.INTERIOR][w.EXTERIOR]===I.FALSE&&this._matrix[w.BOUNDARY][w.EXTERIOR]===I.FALSE}isTouches(t,e){return t>e?this.isTouches(e,t):t===I.A&&e===I.A||t===I.L&&e===I.L||t===I.L&&e===I.A||t===I.P&&e===I.A||t===I.P&&e===I.L?this._matrix[w.INTERIOR][w.INTERIOR]===I.FALSE&&(Tt.isTrue(this._matrix[w.INTERIOR][w.BOUNDARY])||Tt.isTrue(this._matrix[w.BOUNDARY][w.INTERIOR])||Tt.isTrue(this._matrix[w.BOUNDARY][w.BOUNDARY])):!1}isOverlaps(t,e){return t===I.P&&e===I.P||t===I.A&&e===I.A?Tt.isTrue(this._matrix[w.INTERIOR][w.INTERIOR])&&Tt.isTrue(this._matrix[w.INTERIOR][w.EXTERIOR])&&Tt.isTrue(this._matrix[w.EXTERIOR][w.INTERIOR]):t===I.L&&e===I.L?this._matrix[w.INTERIOR][w.INTERIOR]===1&&Tt.isTrue(this._matrix[w.INTERIOR][w.EXTERIOR])&&Tt.isTrue(this._matrix[w.EXTERIOR][w.INTERIOR]):!1}isEquals(t,e){return t!==e?!1:Tt.isTrue(this._matrix[w.INTERIOR][w.INTERIOR])&&this._matrix[w.INTERIOR][w.EXTERIOR]===I.FALSE&&this._matrix[w.BOUNDARY][w.EXTERIOR]===I.FALSE&&this._matrix[w.EXTERIOR][w.INTERIOR]===I.FALSE&&this._matrix[w.EXTERIOR][w.BOUNDARY]===I.FALSE}matches(t){if(t.length!==9)throw new ft("Should be length 9: "+t);for(let e=0;e<3;e++)for(let i=0;i<3;i++)if(!Tt.matches(this._matrix[e][i],t.charAt(3*e+i)))return!1;return!0}add(t){for(let e=0;e<3;e++)for(let i=0;i<3;i++)this.setAtLeast(e,i,t.get(e,i))}isDisjoint(){return this._matrix[w.INTERIOR][w.INTERIOR]===I.FALSE&&this._matrix[w.INTERIOR][w.BOUNDARY]===I.FALSE&&this._matrix[w.BOUNDARY][w.INTERIOR]===I.FALSE&&this._matrix[w.BOUNDARY][w.BOUNDARY]===I.FALSE}isCrosses(t,e){return t===I.P&&e===I.L||t===I.P&&e===I.A||t===I.L&&e===I.A?Tt.isTrue(this._matrix[w.INTERIOR][w.INTERIOR])&&Tt.isTrue(this._matrix[w.INTERIOR][w.EXTERIOR]):t===I.L&&e===I.P||t===I.A&&e===I.P||t===I.A&&e===I.L?Tt.isTrue(this._matrix[w.INTERIOR][w.INTERIOR])&&Tt.isTrue(this._matrix[w.EXTERIOR][w.INTERIOR]):t===I.L&&e===I.L?this._matrix[w.INTERIOR][w.INTERIOR]===0:!1}isCovers(){return(Tt.isTrue(this._matrix[w.INTERIOR][w.INTERIOR])||Tt.isTrue(this._matrix[w.INTERIOR][w.BOUNDARY])||Tt.isTrue(this._matrix[w.BOUNDARY][w.INTERIOR])||Tt.isTrue(this._matrix[w.BOUNDARY][w.BOUNDARY]))&&this._matrix[w.EXTERIOR][w.INTERIOR]===I.FALSE&&this._matrix[w.EXTERIOR][w.BOUNDARY]===I.FALSE}isCoveredBy(){return(Tt.isTrue(this._matrix[w.INTERIOR][w.INTERIOR])||Tt.isTrue(this._matrix[w.INTERIOR][w.BOUNDARY])||Tt.isTrue(this._matrix[w.BOUNDARY][w.INTERIOR])||Tt.isTrue(this._matrix[w.BOUNDARY][w.BOUNDARY]))&&this._matrix[w.INTERIOR][w.EXTERIOR]===I.FALSE&&this._matrix[w.BOUNDARY][w.EXTERIOR]===I.FALSE}setAtLeast(){if(arguments.length===1){const t=arguments[0];for(let e=0;e<t.length;e++){const i=Math.trunc(e/3),s=e%3;this.setAtLeast(i,s,I.toDimensionValue(t.charAt(e)))}}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._matrix[t][e]<i&&(this._matrix[t][e]=i)}}setAtLeastIfValid(t,e,i){t>=0&&e>=0&&this.setAtLeast(t,e,i)}toString(){const t=new Rl("123456789");for(let e=0;e<3;e++)for(let i=0;i<3;i++)t.setCharAt(3*e+i,I.toDimensionSymbol(this._matrix[e][i]));return t.toString()}setAll(t){for(let e=0;e<3;e++)for(let i=0;i<3;i++)this._matrix[e][i]=t}get(t,e){return this._matrix[t][e]}transpose(){let t=this._matrix[1][0];return this._matrix[1][0]=this._matrix[0][1],this._matrix[0][1]=t,t=this._matrix[2][0],this._matrix[2][0]=this._matrix[0][2],this._matrix[0][2]=t,t=this._matrix[2][1],this._matrix[2][1]=this._matrix[1][2],this._matrix[1][2]=t,this}get interfaces_(){return[jo]}}class di{constructor(){di.constructor_.apply(this,arguments)}static constructor_(){this._depth=Array(2).fill().map(()=>Array(3));for(let t=0;t<2;t++)for(let e=0;e<3;e++)this._depth[t][e]=di.NULL_VALUE}static depthAtLocation(t){return t===w.EXTERIOR?0:t===w.INTERIOR?1:di.NULL_VALUE}getDepth(t,e){return this._depth[t][e]}setDepth(t,e,i){this._depth[t][e]=i}isNull(){if(arguments.length===0){for(let t=0;t<2;t++)for(let e=0;e<3;e++)if(this._depth[t][e]!==di.NULL_VALUE)return!1;return!0}else if(arguments.length===1){const t=arguments[0];return this._depth[t][1]===di.NULL_VALUE}else if(arguments.length===2){const t=arguments[0],e=arguments[1];return this._depth[t][e]===di.NULL_VALUE}}normalize(){for(let t=0;t<2;t++)if(!this.isNull(t)){let e=this._depth[t][1];this._depth[t][2]<e&&(e=this._depth[t][2]),e<0&&(e=0);for(let i=1;i<3;i++){let s=0;this._depth[t][i]>e&&(s=1),this._depth[t][i]=s}}}getDelta(t){return this._depth[t][k.RIGHT]-this._depth[t][k.LEFT]}getLocation(t,e){return this._depth[t][e]<=0?w.EXTERIOR:w.INTERIOR}toString(){return"A: "+this._depth[0][1]+","+this._depth[0][2]+" B: "+this._depth[1][1]+","+this._depth[1][2]}add(){if(arguments.length===1){const t=arguments[0];for(let e=0;e<2;e++)for(let i=1;i<3;i++){const s=t.getLocation(e,i);(s===w.EXTERIOR||s===w.INTERIOR)&&(this.isNull(e,i)?this._depth[e][i]=di.depthAtLocation(s):this._depth[e][i]+=di.depthAtLocation(s))}}else if(arguments.length===3){const t=arguments[0],e=arguments[1];arguments[2]===w.INTERIOR&&this._depth[t][e]++}}}di.NULL_VALUE=-1;class Ya{constructor(){Ya.constructor_.apply(this,arguments)}static constructor_(){if(this._data=null,this._size=0,arguments.length===0)Ya.constructor_.call(this,10);else if(arguments.length===1){const t=arguments[0];this._data=new Array(t).fill(null)}}size(){return this._size}addAll(t){if(t===null||t.length===0)return null;this.ensureCapacity(this._size+t.length),ri.arraycopy(t,0,this._data,this._size,t.length),this._size+=t.length}ensureCapacity(t){if(t<=this._data.length)return null;const e=Math.max(t,this._data.length*2);this._data=hs.copyOf(this._data,e)}toArray(){const t=new Array(this._size).fill(null);return ri.arraycopy(this._data,0,t,0,this._size),t}add(t){this.ensureCapacity(this._size+1),this._data[this._size]=t,++this._size}}class vu{static toIntArray(t){const e=new Array(t.size()).fill(null);for(let i=0;i<e.length;i++)e[i]=t.get(i).intValue();return e}findChainEnd(t,e){const i=At.quadrant(t[e],t[e+1]);let s=e+1;for(;s<t.length&&At.quadrant(t[s-1],t[s])===i;)s++;return s-1}OLDgetChainStartIndices(t){let e=0;const i=new it;i.add(e);do{const r=this.findChainEnd(t,e);i.add(r),e=r}while(e<t.length-1);return vu.toIntArray(i)}getChainStartIndices(t){let e=0;const i=new Ya(Math.trunc(t.length/2));i.add(e);do{const s=this.findChainEnd(t,e);i.add(s),e=s}while(e<t.length-1);return i.toArray()}}class bu{constructor(){bu.constructor_.apply(this,arguments)}static constructor_(){this.e=null,this.pts=null,this.startIndex=null;const t=arguments[0];this.e=t,this.pts=t.getCoordinates();const e=new vu;this.startIndex=e.getChainStartIndices(this.pts)}getCoordinates(){return this.pts}getMaxX(t){const e=this.pts[this.startIndex[t]].x,i=this.pts[this.startIndex[t+1]].x;return e>i?e:i}getMinX(t){const e=this.pts[this.startIndex[t]].x,i=this.pts[this.startIndex[t+1]].x;return e<i?e:i}computeIntersectsForChain(){if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3];this.computeIntersectsForChain(this.startIndex[t],this.startIndex[t+1],e,e.startIndex[i],e.startIndex[i+1],s)}else if(arguments.length===6){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3],r=arguments[4],o=arguments[5];if(e-t===1&&r-s===1)return o.addIntersections(this.e,t,i.e,s),null;if(!this.overlaps(t,e,i,s,r))return null;const a=Math.trunc((t+e)/2),l=Math.trunc((s+r)/2);t<a&&(s<l&&this.computeIntersectsForChain(t,a,i,s,l,o),l<r&&this.computeIntersectsForChain(t,a,i,l,r,o)),a<e&&(s<l&&this.computeIntersectsForChain(a,e,i,s,l,o),l<r&&this.computeIntersectsForChain(a,e,i,l,r,o))}}overlaps(t,e,i,s,r){return dt.intersects(this.pts[t],this.pts[e],i.pts[s],i.pts[r])}getStartIndexes(){return this.startIndex}computeIntersects(t,e){for(let i=0;i<this.startIndex.length-1;i++)for(let s=0;s<t.startIndex.length-1;s++)this.computeIntersectsForChain(i,t,s,e)}}class Si extends Il{constructor(){super(),Si.constructor_.apply(this,arguments)}static constructor_(){if(this.pts=null,this._env=null,this.eiList=new Eu(this),this._name=null,this._mce=null,this._isIsolated=!0,this._depth=new di,this._depthDelta=0,arguments.length===1){const t=arguments[0];Si.constructor_.call(this,t,null)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this.pts=t,this._label=e}}static updateIM(){if(arguments.length===2&&arguments[1]instanceof Tt&&arguments[0]instanceof Xt){const t=arguments[0],e=arguments[1];e.setAtLeastIfValid(t.getLocation(0,k.ON),t.getLocation(1,k.ON),1),t.isArea()&&(e.setAtLeastIfValid(t.getLocation(0,k.LEFT),t.getLocation(1,k.LEFT),2),e.setAtLeastIfValid(t.getLocation(0,k.RIGHT),t.getLocation(1,k.RIGHT),2))}else return super.updateIM.apply(this,arguments)}getDepth(){return this._depth}getCollapsedEdge(){const t=new Array(2).fill(null);return t[0]=this.pts[0],t[1]=this.pts[1],new Si(t,Xt.toLineLabel(this._label))}setIsolated(t){this._isIsolated=t}setName(t){this._name=t}equals(t){if(!(t instanceof Si))return!1;const e=t;if(this.pts.length!==e.pts.length)return!1;let i=!0,s=!0,r=this.pts.length;for(let o=0;o<this.pts.length;o++)if(this.pts[o].equals2D(e.pts[o])||(i=!1),this.pts[o].equals2D(e.pts[--r])||(s=!1),!i&&!s)return!1;return!0}getCoordinate(){if(arguments.length===0)return this.pts.length>0?this.pts[0]:null;if(arguments.length===1){const t=arguments[0];return this.pts[t]}}isClosed(){return this.pts[0].equals(this.pts[this.pts.length-1])}getMaximumSegmentIndex(){return this.pts.length-1}setDepthDelta(t){this._depthDelta=t}getEdgeIntersectionList(){return this.eiList}addIntersections(t,e,i){for(let s=0;s<t.getIntersectionNum();s++)this.addIntersection(t,e,i,s)}isIsolated(){return this._isIsolated}getCoordinates(){return this.pts}print(t){t.print("edge "+this._name+": "),t.print("LINESTRING (");for(let e=0;e<this.pts.length;e++)e>0&&t.print(","),t.print(this.pts[e].x+" "+this.pts[e].y);t.print(")  "+this._label+" "+this._depthDelta)}computeIM(t){Si.updateIM(this._label,t)}isCollapsed(){return!this._label.isArea()||this.pts.length!==3?!1:!!this.pts[0].equals(this.pts[2])}getDepthDelta(){return this._depthDelta}getNumPoints(){return this.pts.length}printReverse(t){t.print("edge "+this._name+": ");for(let e=this.pts.length-1;e>=0;e--)t.print(this.pts[e]+" ");t.println("")}getMonotoneChainEdge(){return this._mce===null&&(this._mce=new bu(this)),this._mce}getEnvelope(){if(this._env===null){this._env=new dt;for(let t=0;t<this.pts.length;t++)this._env.expandToInclude(this.pts[t])}return this._env}addIntersection(t,e,i,s){const r=new E(t.getIntersection(s));let o=e,a=t.getEdgeDistance(i,s);const l=o+1;if(l<this.pts.length){const h=this.pts[l];r.equals2D(h)&&(o=l,a=0)}this.eiList.add(r,o,a)}toString(){const t=new Rl;t.append("edge "+this._name+": "),t.append("LINESTRING (");for(let e=0;e<this.pts.length;e++)e>0&&t.append(","),t.append(this.pts[e].x+" "+this.pts[e].y);return t.append(")  "+this._label+" "+this._depthDelta),t.toString()}isPointwiseEqual(t){if(this.pts.length!==t.pts.length)return!1;for(let e=0;e<this.pts.length;e++)if(!this.pts[e].equals2D(t.pts[e]))return!1;return!0}}class nn extends Ll{constructor(){super(),nn.constructor_.apply(this,arguments)}static constructor_(){if(this._parentGeom=null,this._lineEdgeMap=new W0,this._boundaryNodeRule=null,this._useBoundaryDeterminationRule=!0,this._argIndex=null,this._boundaryNodes=null,this._hasTooFewPoints=!1,this._invalidPoint=null,this._areaPtLocator=null,this._ptLocator=new _u,arguments.length===2){const t=arguments[0],e=arguments[1];nn.constructor_.call(this,t,e,de.OGC_SFS_BOUNDARY_RULE)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];this._argIndex=t,this._parentGeom=e,this._boundaryNodeRule=i,e!==null&&this.add(e)}}static determineBoundary(t,e){return t.isInBoundary(e)?w.BOUNDARY:w.INTERIOR}insertBoundaryPoint(t,e){const s=this._nodes.addNode(e).getLabel();let r=1,o=w.NONE;o=s.getLocation(t,k.ON),o===w.BOUNDARY&&r++;const a=nn.determineBoundary(this._boundaryNodeRule,r);s.setLocation(t,a)}computeSelfNodes(){if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.computeSelfNodes(t,e,!1)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2],s=new ps(t,!0,!1);s.setIsDoneIfProperInt(i);const r=this.createEdgeSetIntersector(),o=this._parentGeom instanceof oi||this._parentGeom instanceof Pe||this._parentGeom instanceof ai,a=e||!o;return r.computeIntersections(this._edges,s,a),this.addSelfIntersectionNodes(this._argIndex),s}}addPolygon(t){this.addPolygonRing(t.getExteriorRing(),w.EXTERIOR,w.INTERIOR);for(let e=0;e<t.getNumInteriorRing();e++){const i=t.getInteriorRingN(e);this.addPolygonRing(i,w.INTERIOR,w.EXTERIOR)}}addEdge(t){this.insertEdge(t);const e=t.getCoordinates();this.insertPoint(this._argIndex,e[0],w.BOUNDARY),this.insertPoint(this._argIndex,e[e.length-1],w.BOUNDARY)}addLineString(t){const e=Vt.removeRepeatedPoints(t.getCoordinates());if(e.length<2)return this._hasTooFewPoints=!0,this._invalidPoint=e[0],null;const i=new Si(e,new Xt(this._argIndex,w.INTERIOR));this._lineEdgeMap.put(t,i),this.insertEdge(i),rt.isTrue(e.length>=2,"found LineString with single point"),this.insertBoundaryPoint(this._argIndex,e[0]),this.insertBoundaryPoint(this._argIndex,e[e.length-1])}getInvalidPoint(){return this._invalidPoint}getBoundaryPoints(){const t=this.getBoundaryNodes(),e=new Array(t.size()).fill(null);let i=0;for(let s=t.iterator();s.hasNext();){const r=s.next();e[i++]=r.getCoordinate().copy()}return e}addSelfIntersectionNodes(t){for(let e=this._edges.iterator();e.hasNext();){const i=e.next(),s=i.getLabel().getLocation(t);for(let r=i.eiList.iterator();r.hasNext();){const o=r.next();this.addSelfIntersectionNode(t,o.coord,s)}}}add(){if(arguments.length===1&&arguments[0]instanceof W){const t=arguments[0];if(t.isEmpty())return null;if(t instanceof ai&&(this._useBoundaryDeterminationRule=!1),t instanceof Pe)this.addPolygon(t);else if(t instanceof ue)this.addLineString(t);else if(t instanceof Bi)this.addPoint(t);else if(t instanceof Gn)this.addCollection(t);else if(t instanceof ws)this.addCollection(t);else if(t instanceof ai)this.addCollection(t);else if(t instanceof jt)this.addCollection(t);else throw new Ti(t.getGeometryType())}else return super.add.apply(this,arguments)}addCollection(t){for(let e=0;e<t.getNumGeometries();e++){const i=t.getGeometryN(e);this.add(i)}}locate(t){return Z(this._parentGeom,El)&&this._parentGeom.getNumGeometries()>50?(this._areaPtLocator===null&&(this._areaPtLocator=new kr(this._parentGeom)),this._areaPtLocator.locate(t)):this._ptLocator.locate(t,this._parentGeom)}findEdge(){if(arguments.length===1&&arguments[0]instanceof ue){const t=arguments[0];return this._lineEdgeMap.get(t)}else return super.findEdge.apply(this,arguments)}computeSplitEdges(t){for(let e=this._edges.iterator();e.hasNext();)e.next().eiList.addSplitEdges(t)}computeEdgeIntersections(t,e,i){const s=new ps(e,i,!0);return s.setBoundaryNodes(this.getBoundaryNodes(),t.getBoundaryNodes()),this.createEdgeSetIntersector().computeIntersections(this._edges,t._edges,s),s}getGeometry(){return this._parentGeom}getBoundaryNodeRule(){return this._boundaryNodeRule}hasTooFewPoints(){return this._hasTooFewPoints}addPoint(){if(arguments[0]instanceof Bi){const e=arguments[0].getCoordinate();this.insertPoint(this._argIndex,e,w.INTERIOR)}else if(arguments[0]instanceof E){const t=arguments[0];this.insertPoint(this._argIndex,t,w.INTERIOR)}}getBoundaryNodes(){return this._boundaryNodes===null&&(this._boundaryNodes=this._nodes.getBoundaryNodes(this._argIndex)),this._boundaryNodes}addSelfIntersectionNode(t,e,i){if(this.isBoundaryNode(t,e))return null;i===w.BOUNDARY&&this._useBoundaryDeterminationRule?this.insertBoundaryPoint(t,e):this.insertPoint(t,e,i)}addPolygonRing(t,e,i){if(t.isEmpty())return null;const s=Vt.removeRepeatedPoints(t.getCoordinates());if(s.length<4)return this._hasTooFewPoints=!0,this._invalidPoint=s[0],null;let r=e,o=i;bt.isCCW(s)&&(r=i,o=e);const a=new Si(s,new Xt(this._argIndex,w.BOUNDARY,r,o));this._lineEdgeMap.put(t,a),this.insertEdge(a),this.insertPoint(this._argIndex,s[0],w.BOUNDARY)}insertPoint(t,e,i){const s=this._nodes.addNode(e),r=s.getLabel();r===null?s._label=new Xt(t,i):r.setLocation(t,i)}createEdgeSetIntersector(){return new wu}}class Va extends Gi{constructor(){super(),Va.constructor_.apply(this,arguments)}static constructor_(){if(this._edgeEnds=new it,arguments.length===1){const t=arguments[0];Va.constructor_.call(this,null,t)}else if(arguments.length===2){const t=arguments[1];Gi.constructor_.call(this,t.getEdge(),t.getCoordinate(),t.getDirectedCoordinate(),new Xt(t.getLabel())),this.insert(t)}}insert(t){this._edgeEnds.add(t)}print(t){t.println("EdgeEndBundle--> Label: "+this._label);for(let e=this.iterator();e.hasNext();)e.next().print(t),t.println()}iterator(){return this._edgeEnds.iterator()}getEdgeEnds(){return this._edgeEnds}computeLabelOn(t,e){let i=0,s=!1;for(let o=this.iterator();o.hasNext();){const l=o.next().getLabel().getLocation(t);l===w.BOUNDARY&&i++,l===w.INTERIOR&&(s=!0)}let r=w.NONE;s&&(r=w.INTERIOR),i>0&&(r=nn.determineBoundary(e,i)),this._label.setLocation(t,r)}computeLabelSide(t,e){for(let i=this.iterator();i.hasNext();){const s=i.next();if(s.getLabel().isArea()){const r=s.getLabel().getLocation(t,e);if(r===w.INTERIOR)return this._label.setLocation(t,e,w.INTERIOR),null;r===w.EXTERIOR&&this._label.setLocation(t,e,w.EXTERIOR)}}}getLabel(){return this._label}computeLabelSides(t){this.computeLabelSide(t,k.LEFT),this.computeLabelSide(t,k.RIGHT)}updateIM(t){Si.updateIM(this._label,t)}computeLabel(t){let e=!1;for(let i=this.iterator();i.hasNext();)i.next().getLabel().isArea()&&(e=!0);e?this._label=new Xt(w.NONE,w.NONE,w.NONE):this._label=new Xt(w.NONE);for(let i=0;i<2;i++)this.computeLabelOn(i,t),e&&this.computeLabelSides(i)}}class ER extends bl{constructor(){super()}updateIM(t){for(let e=this.iterator();e.hasNext();)e.next().updateIM(t)}insert(t){let e=this._edgeMap.get(t);e===null?(e=new Va(t),this.insertEdgeEnd(t,e)):e.insert(t)}}class Iu extends Rr{constructor(){super(),Iu.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0],e=arguments[1];Rr.constructor_.call(this,t,e)}computeIM(t){t.setAtLeastIfValid(this._label.getLocation(0),this._label.getLocation(1),0)}updateIMFromEdges(t){this._edges.updateIM(t)}}class vR extends mu{constructor(){super()}createNode(t){return new Iu(t,new ER)}}class Lu{constructor(){Lu.constructor_.apply(this,arguments)}static constructor_(){this._nodes=new vo(new vR)}insertEdgeEnds(t){for(let e=t.iterator();e.hasNext();){const i=e.next();this._nodes.add(i)}}getNodeIterator(){return this._nodes.iterator()}copyNodesAndLabels(t,e){for(let i=t.getNodeIterator();i.hasNext();){const s=i.next();this._nodes.addNode(s.getCoordinate()).setLabel(e,s.getLabel().getLocation(e))}}build(t){this.computeIntersectionNodes(t,0),this.copyNodesAndLabels(t,0);const i=new MR().computeEdgeEnds(t.getEdgeIterator());this.insertEdgeEnds(i)}computeIntersectionNodes(t,e){for(let i=t.getEdgeIterator();i.hasNext();){const s=i.next(),r=s.getLabel().getLocation(e);for(let o=s.getEdgeIntersectionList().iterator();o.hasNext();){const a=o.next(),l=this._nodes.addNode(a.coord);r===w.BOUNDARY?l.setLabelBoundary(e):l.getLabel().isNull(e)&&l.setLabel(e,w.INTERIOR)}}}}class Su{constructor(){Su.constructor_.apply(this,arguments)}static constructor_(){this._li=new zn,this._geomGraph=null,this._nodeGraph=new Lu,this._invalidPoint=null;const t=arguments[0];this._geomGraph=t}isNodeEdgeAreaLabelsConsistent(){for(let t=this._nodeGraph.getNodeIterator();t.hasNext();){const e=t.next();if(!e.getEdges().isAreaLabelsConsistent(this._geomGraph))return this._invalidPoint=e.getCoordinate().copy(),!1}return!0}hasDuplicateRings(){for(let t=this._nodeGraph.getNodeIterator();t.hasNext();){const e=t.next();for(let i=e.getEdges().iterator();i.hasNext();){const s=i.next();if(s.getEdgeEnds().size()>1)return this._invalidPoint=s.getEdge().getCoordinate(0),!0}}return!1}isNodeConsistentArea(){const t=this._geomGraph.computeSelfNodes(this._li,!0,!0);return t.hasProperIntersection()?(this._invalidPoint=t.getProperIntersectionPoint(),!1):(this._nodeGraph.build(this._geomGraph),this.isNodeEdgeAreaLabelsConsistent())}getInvalidPoint(){return this._invalidPoint}}class em{getBounds(){}}class gi{constructor(){gi.constructor_.apply(this,arguments)}static constructor_(){this._bounds=null,this._item=null;const t=arguments[0],e=arguments[1];this._bounds=t,this._item=e}getItem(){return this._item}getBounds(){return this._bounds}get interfaces_(){return[em,Fe]}}class $s{constructor(){$s.constructor_.apply(this,arguments)}static constructor_(){this._size=null,this._items=null,this._size=0,this._items=new it,this._items.add(null)}poll(){if(this.isEmpty())return null;const t=this._items.get(1);return this._items.set(1,this._items.get(this._size)),this._size-=1,this.reorder(1),t}size(){return this._size}reorder(t){let e=null;const i=this._items.get(t);for(;t*2<=this._size&&(e=t*2,e!==this._size&&this._items.get(e+1).compareTo(this._items.get(e))<0&&e++,this._items.get(e).compareTo(i)<0);t=e)this._items.set(t,this._items.get(e));this._items.set(t,i)}clear(){this._size=0,this._items.clear()}peek(){return this.isEmpty()?null:this._items.get(1)}isEmpty(){return this._size===0}add(t){this._items.add(null),this._size+=1;let e=this._size;for(this._items.set(0,t);t.compareTo(this._items.get(Math.trunc(e/2)))<0;e/=2)this._items.set(e,this._items.get(Math.trunc(e/2)));this._items.set(e,t)}}class bR{query(){}insert(t,e){}remove(t,e){}}class be{constructor(){be.constructor_.apply(this,arguments)}static constructor_(){if(this._childBoundables=new it,this._bounds=null,this._level=null,arguments.length!==0){if(arguments.length===1){const t=arguments[0];this._level=t}}}getLevel(){return this._level}addChildBoundable(t){rt.isTrue(this._bounds===null),this._childBoundables.add(t)}isEmpty(){return this._childBoundables.isEmpty()}getBounds(){return this._bounds===null&&(this._bounds=this.computeBounds()),this._bounds}size(){return this._childBoundables.size()}getChildBoundables(){return this._childBoundables}get interfaces_(){return[em,Fe]}}class Ft{static distance(t,e,i,s){const r=i-t,o=s-e;return Math.sqrt(r*r+o*o)}static maximumDistance(t,e){const i=Math.min(t.getMinX(),e.getMinX()),s=Math.min(t.getMinY(),e.getMinY()),r=Math.max(t.getMaxX(),e.getMaxX()),o=Math.max(t.getMaxY(),e.getMaxY());return Ft.distance(i,s,r,o)}static minMaxDistance(t,e){const i=t.getMinX(),s=t.getMinY(),r=t.getMaxX(),o=t.getMaxY(),a=e.getMinX(),l=e.getMinY(),h=e.getMaxX(),c=e.getMaxY();let u=Ft.maxDistance(i,s,i,o,a,l,a,c);return u=Math.min(u,Ft.maxDistance(i,s,i,o,a,l,h,l)),u=Math.min(u,Ft.maxDistance(i,s,i,o,h,c,a,c)),u=Math.min(u,Ft.maxDistance(i,s,i,o,h,c,h,l)),u=Math.min(u,Ft.maxDistance(i,s,r,s,a,l,a,c)),u=Math.min(u,Ft.maxDistance(i,s,r,s,a,l,h,l)),u=Math.min(u,Ft.maxDistance(i,s,r,s,h,c,a,c)),u=Math.min(u,Ft.maxDistance(i,s,r,s,h,c,h,l)),u=Math.min(u,Ft.maxDistance(r,o,i,o,a,l,a,c)),u=Math.min(u,Ft.maxDistance(r,o,i,o,a,l,h,l)),u=Math.min(u,Ft.maxDistance(r,o,i,o,h,c,a,c)),u=Math.min(u,Ft.maxDistance(r,o,i,o,h,c,h,l)),u=Math.min(u,Ft.maxDistance(r,o,r,s,a,l,a,c)),u=Math.min(u,Ft.maxDistance(r,o,r,s,a,l,h,l)),u=Math.min(u,Ft.maxDistance(r,o,r,s,h,c,a,c)),u=Math.min(u,Ft.maxDistance(r,o,r,s,h,c,h,l)),u}static maxDistance(t,e,i,s,r,o,a,l){let h=Ft.distance(t,e,r,o);return h=Math.max(h,Ft.distance(t,e,a,l)),h=Math.max(h,Ft.distance(i,s,r,o)),h=Math.max(h,Ft.distance(i,s,a,l)),h}}class se{constructor(){se.constructor_.apply(this,arguments)}static constructor_(){this._boundable1=null,this._boundable2=null,this._distance=null,this._itemDistance=null;const t=arguments[0],e=arguments[1],i=arguments[2];this._boundable1=t,this._boundable2=e,this._itemDistance=i,this._distance=this.distance()}static area(t){return t.getBounds().getArea()}static isComposite(t){return t instanceof be}maximumDistance(){return Ft.maximumDistance(this._boundable1.getBounds(),this._boundable2.getBounds())}expandToQueue(t,e){const i=se.isComposite(this._boundable1),s=se.isComposite(this._boundable2);if(i&&s)return se.area(this._boundable1)>se.area(this._boundable2)?(this.expand(this._boundable1,this._boundable2,!1,t,e),null):(this.expand(this._boundable2,this._boundable1,!0,t,e),null);if(i)return this.expand(this._boundable1,this._boundable2,!1,t,e),null;if(s)return this.expand(this._boundable2,this._boundable1,!0,t,e),null;throw new ft("neither boundable is composite")}isLeaves(){return!(se.isComposite(this._boundable1)||se.isComposite(this._boundable2))}getBoundable(t){return t===0?this._boundable1:this._boundable2}getDistance(){return this._distance}distance(){return this.isLeaves()?this._itemDistance.distance(this._boundable1,this._boundable2):this._boundable1.getBounds().distance(this._boundable2.getBounds())}compareTo(t){const e=t;return this._distance<e._distance?-1:this._distance>e._distance?1:0}expand(t,e,i,s,r){const o=t.getChildBoundables();for(let a=o.iterator();a.hasNext();){const l=a.next();let h=null;i?h=new se(e,l,this._itemDistance):h=new se(l,e,this._itemDistance),h.getDistance()<r&&s.add(h)}}get interfaces_(){return[Ui]}}class zi{constructor(){zi.constructor_.apply(this,arguments)}static constructor_(){if(this._root=null,this._built=!1,this._itemBoundables=new it,this._nodeCapacity=null,arguments.length===0)zi.constructor_.call(this,zi.DEFAULT_NODE_CAPACITY);else if(arguments.length===1){const t=arguments[0];rt.isTrue(t>1,"Node capacity must be greater than 1"),this._nodeCapacity=t}}static compareDoubles(t,e){return t>e?1:t<e?-1:0}queryInternal(){if(Z(arguments[2],pu)&&arguments[0]instanceof Object&&arguments[1]instanceof be){const t=arguments[0],e=arguments[1],i=arguments[2],s=e.getChildBoundables();for(let r=0;r<s.size();r++){const o=s.get(r);this.getIntersectsOp().intersects(o.getBounds(),t)&&(o instanceof be?this.queryInternal(t,o,i):o instanceof gi?i.visitItem(o.getItem()):rt.shouldNeverReachHere())}}else if(Z(arguments[2],rr)&&arguments[0]instanceof Object&&arguments[1]instanceof be){const t=arguments[0],e=arguments[1],i=arguments[2],s=e.getChildBoundables();for(let r=0;r<s.size();r++){const o=s.get(r);this.getIntersectsOp().intersects(o.getBounds(),t)&&(o instanceof be?this.queryInternal(t,o,i):o instanceof gi?i.add(o.getItem()):rt.shouldNeverReachHere())}}}insert(t,e){rt.isTrue(!this._built,"Cannot insert items into an STR packed R-tree after it has been built."),this._itemBoundables.add(new gi(t,e))}boundablesAtLevel(){if(arguments.length===1){const t=arguments[0],e=new it;return this.boundablesAtLevel(t,this._root,e),e}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];if(rt.isTrue(t>-2),e.getLevel()===t)return i.add(e),null;for(let s=e.getChildBoundables().iterator();s.hasNext();){const r=s.next();r instanceof be?this.boundablesAtLevel(t,r,i):(rt.isTrue(r instanceof gi),t===-1&&i.add(r))}return null}}getRoot(){return this.build(),this._root}remove(){if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.build(),this.getIntersectsOp().intersects(this._root.getBounds(),t)?this.remove(t,this._root,e):!1}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];let s=this.removeItem(e,i);if(s)return!0;let r=null;for(let o=e.getChildBoundables().iterator();o.hasNext();){const a=o.next();if(this.getIntersectsOp().intersects(a.getBounds(),t)&&a instanceof be&&(s=this.remove(t,a,i),s)){r=a;break}}return r!==null&&r.getChildBoundables().isEmpty()&&e.getChildBoundables().remove(r),s}}createHigherLevels(t,e){rt.isTrue(!t.isEmpty());const i=this.createParentBoundables(t,e+1);return i.size()===1?i.get(0):this.createHigherLevels(i,e+1)}depth(){if(arguments.length===0)return this.isEmpty()?0:(this.build(),this.depth(this._root));if(arguments.length===1){const t=arguments[0];let e=0;for(let i=t.getChildBoundables().iterator();i.hasNext();){const s=i.next();if(s instanceof be){const r=this.depth(s);r>e&&(e=r)}}return e+1}}createParentBoundables(t,e){rt.isTrue(!t.isEmpty());const i=new it;i.add(this.createNode(e));const s=new it(t);qo.sort(s,this.getComparator());for(let r=s.iterator();r.hasNext();){const o=r.next();this.lastNode(i).getChildBoundables().size()===this.getNodeCapacity()&&i.add(this.createNode(e)),this.lastNode(i).addChildBoundable(o)}return i}isEmpty(){return this._built?this._root.isEmpty():this._itemBoundables.isEmpty()}getNodeCapacity(){return this._nodeCapacity}lastNode(t){return t.get(t.size()-1)}size(){if(arguments.length===0)return this.isEmpty()?0:(this.build(),this.size(this._root));if(arguments.length===1){const t=arguments[0];let e=0;for(let i=t.getChildBoundables().iterator();i.hasNext();){const s=i.next();s instanceof be?e+=this.size(s):s instanceof gi&&(e+=1)}return e}}removeItem(t,e){let i=null;for(let s=t.getChildBoundables().iterator();s.hasNext();){const r=s.next();r instanceof gi&&r.getItem()===e&&(i=r)}return i!==null?(t.getChildBoundables().remove(i),!0):!1}itemsTree(){if(arguments.length===0){this.build();const t=this.itemsTree(this._root);return t===null?new it:t}else if(arguments.length===1){const t=arguments[0],e=new it;for(let i=t.getChildBoundables().iterator();i.hasNext();){const s=i.next();if(s instanceof be){const r=this.itemsTree(s);r!==null&&e.add(r)}else s instanceof gi?e.add(s.getItem()):rt.shouldNeverReachHere()}return e.size()<=0?null:e}}query(){if(arguments.length===1){const t=arguments[0];this.build();const e=new it;return this.isEmpty()||this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.queryInternal(t,this._root,e),e}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(this.build(),this.isEmpty())return null;this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.queryInternal(t,this._root,e)}}build(){if(this._built)return null;this._root=this._itemBoundables.isEmpty()?this.createNode(0):this.createHigherLevels(this._itemBoundables,-1),this._itemBoundables=null,this._built=!0}get interfaces_(){return[Fe]}}function IR(){}zi.IntersectsOp=IR;zi.DEFAULT_NODE_CAPACITY=10;class LR{distance(t,e){}}class Yt extends zi{constructor(){super(),Yt.constructor_.apply(this,arguments)}static constructor_(){if(arguments.length===0)Yt.constructor_.call(this,Yt.DEFAULT_NODE_CAPACITY);else if(arguments.length===1){const t=arguments[0];zi.constructor_.call(this,t)}}static getItems(t){const e=new Array(t.size()).fill(null);let i=0;for(;!t.isEmpty();){const s=t.poll();e[i]=s.getBoundable(0).getItem(),i++}return e}static avg(t,e){return(t+e)/2}static centreY(t){return Yt.avg(t.getMinY(),t.getMaxY())}static centreX(t){return Yt.avg(t.getMinX(),t.getMaxX())}size(){return arguments.length===0?super.size.call(this):super.size.apply(this,arguments)}insert(){if(arguments.length===2&&arguments[1]instanceof Object&&arguments[0]instanceof dt){const t=arguments[0],e=arguments[1];if(t.isNull())return null;super.insert.call(this,t,e)}else return super.insert.apply(this,arguments)}getIntersectsOp(){return Yt.intersectsOp}verticalSlices(t,e){const i=Math.trunc(Math.ceil(t.size()/e)),s=new Array(e).fill(null),r=t.iterator();for(let o=0;o<e;o++){s[o]=new it;let a=0;for(;r.hasNext()&&a<i;){const l=r.next();s[o].add(l),a++}}return s}query(){if(arguments.length===1){const t=arguments[0];return super.query.call(this,t)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];super.query.call(this,t,e)}}getComparator(){return Yt.yComparator}createParentBoundablesFromVerticalSlice(t,e){return super.createParentBoundables.call(this,t,e)}remove(){if(arguments.length===2&&arguments[1]instanceof Object&&arguments[0]instanceof dt){const t=arguments[0],e=arguments[1];return super.remove.call(this,t,e)}else return super.remove.apply(this,arguments)}depth(){return arguments.length===0?super.depth.call(this):super.depth.apply(this,arguments)}createParentBoundables(t,e){rt.isTrue(!t.isEmpty());const i=Math.trunc(Math.ceil(t.size()/this.getNodeCapacity())),s=new it(t);qo.sort(s,Yt.xComparator);const r=this.verticalSlices(s,Math.trunc(Math.ceil(Math.sqrt(i))));return this.createParentBoundablesFromVerticalSlices(r,e)}nearestNeighbour(){if(arguments.length===1){if(Z(arguments[0],LR)){const t=arguments[0];if(this.isEmpty())return null;const e=new se(this.getRoot(),this.getRoot(),t);return this.nearestNeighbour(e)}else if(arguments[0]instanceof se){const t=arguments[0];let e=X.POSITIVE_INFINITY,i=null;const s=new $s;for(s.add(t);!s.isEmpty()&&e>0;){const r=s.poll(),o=r.getDistance();if(o>=e)break;r.isLeaves()?(e=o,i=r):r.expandToQueue(s,e)}return i===null?null:[i.getBoundable(0).getItem(),i.getBoundable(1).getItem()]}}else if(arguments.length===2){const t=arguments[0],e=arguments[1];if(this.isEmpty()||t.isEmpty())return null;const i=new se(this.getRoot(),t.getRoot(),e);return this.nearestNeighbour(i)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2],s=new gi(t,e),r=new se(this.getRoot(),s,i);return this.nearestNeighbour(r)[0]}else if(arguments.length===4){const t=arguments[0],e=arguments[1],i=arguments[2],s=arguments[3],r=new gi(t,e),o=new se(this.getRoot(),r,i);return this.nearestNeighbourK(o,s)}}isWithinDistance(){if(arguments.length===2){const t=arguments[0],e=arguments[1];let i=X.POSITIVE_INFINITY;const s=new $s;for(s.add(t);!s.isEmpty();){const r=s.poll(),o=r.getDistance();if(o>e)return!1;if(r.maximumDistance()<=e)return!0;if(r.isLeaves()){if(i=o,i<=e)return!0}else r.expandToQueue(s,i)}return!1}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2],s=new se(this.getRoot(),t.getRoot(),e);return this.isWithinDistance(s,i)}}createParentBoundablesFromVerticalSlices(t,e){rt.isTrue(t.length>0);const i=new it;for(let s=0;s<t.length;s++)i.addAll(this.createParentBoundablesFromVerticalSlice(t[s],e));return i}nearestNeighbourK(){if(arguments.length===2){const t=arguments[0],e=arguments[1];return this.nearestNeighbourK(t,X.POSITIVE_INFINITY,e)}else if(arguments.length===3){const t=arguments[0],e=arguments[1],i=arguments[2];let s=e;const r=new $s;r.add(t);const o=new $s;for(;!r.isEmpty()&&s>=0;){const a=r.poll(),l=a.getDistance();if(l>=s)break;a.isLeaves()?o.size()<i?o.add(a):(o.peek().getDistance()>l&&(o.poll(),o.add(a)),s=o.peek().getDistance()):a.expandToQueue(r,s)}return Yt.getItems(o)}}createNode(t){return new Al(t)}get interfaces_(){return[bR,Fe]}}class Al extends be{constructor(){super(),Al.constructor_.apply(this,arguments)}static constructor_(){const t=arguments[0];be.constructor_.call(this,t)}computeBounds(){let t=null;for(let e=this.getChildBoundables().iterator();e.hasNext();){const i=e.next();t===null?t=new dt(i.getBounds()):t.expandToInclude(i.getBounds())}return t}}Yt.STRtreeNode=Al;Yt.xComparator=new class{get interfaces_(){return[Pr]}compare(n,t){return zi.compareDoubles(Yt.centreX(n.getBounds()),Yt.centreX(t.getBounds()))}};Yt.yComparator=new class{get interfaces_(){return[Pr]}compare(n,t){return zi.compareDoubles(Yt.centreY(n.getBounds()),Yt.centreY(t.getBounds()))}};Yt.intersectsOp=new class{get interfaces_(){return[IntersectsOp]}intersects(n,t){return n.intersects(t)}};Yt.DEFAULT_NODE_CAPACITY=10;class Nu{constructor(){Nu.constructor_.apply(this,arguments)}static constructor_(){this._graph=null,this._rings=new it,this._totalEnv=new dt,this._index=null,this._nestedPt=null;const t=arguments[0];this._graph=t}add(t){this._rings.add(t),this._totalEnv.expandToInclude(t.getEnvelopeInternal())}getNestedPoint(){return this._nestedPt}buildIndex(){this._index=new Yt;for(let t=0;t<this._rings.size();t++){const e=this._rings.get(t),i=e.getEnvelopeInternal();this._index.insert(i,e)}}isNonNested(){this.buildIndex();for(let t=0;t<this._rings.size();t++){const e=this._rings.get(t),i=e.getCoordinates(),s=this._index.query(e.getEnvelopeInternal());for(let r=0;r<s.size();r++){const o=s.get(r),a=o.getCoordinates();if(e===o||!e.getEnvelopeInternal().intersects(o.getEnvelopeInternal()))continue;const l=vi.findPtNotNode(i,o,this._graph);if(l===null)continue;if(ki.isInRing(l,a))return this._nestedPt=l,!1}}return!0}}class nt{constructor(){nt.constructor_.apply(this,arguments)}static constructor_(){if(this._errorType=null,this._pt=null,arguments.length===1){const t=arguments[0];nt.constructor_.call(this,t,null)}else if(arguments.length===2){const t=arguments[0],e=arguments[1];this._errorType=t,e!==null&&(this._pt=e.copy())}}getCoordinate(){return this._pt}getMessage(){return nt.errMsg[this._errorType]}toString(){let t="";return this._pt!==null&&(t=" at or near point "+this._pt),this.getMessage()+t}getErrorType(){return this._errorType}}nt.ERROR=0;nt.REPEATED_POINT=1;nt.HOLE_OUTSIDE_SHELL=2;nt.NESTED_HOLES=3;nt.DISCONNECTED_INTERIOR=4;nt.SELF_INTERSECTION=5;nt.RING_SELF_INTERSECTION=6;nt.NESTED_SHELLS=7;nt.DUPLICATE_RINGS=8;nt.TOO_FEW_POINTS=9;nt.INVALID_COORDINATE=10;nt.RING_NOT_CLOSED=11;nt.errMsg=["Topology Validation Error","Repeated Point","Hole lies outside shell","Holes are nested","Interior is disconnected","Self-intersection","Ring Self-intersection","Nested shells","Duplicate Rings","Too few distinct points in geometry component","Invalid Coordinate","Ring is not closed"];class vi{constructor(){vi.constructor_.apply(this,arguments)}static constructor_(){this._parentGeometry=null,this._isSelfTouchingRingFormingHoleValid=!1,this._validErr=null;const t=arguments[0];this._parentGeometry=t}static findPtNotNode(t,e,i){const r=i.findEdge(e).getEdgeIntersectionList();for(let o=0;o<t.length;o++){const a=t[o];if(!r.isIntersection(a))return a}return null}static isValid(){if(arguments[0]instanceof W){const t=arguments[0];return new vi(t).isValid()}else if(arguments[0]instanceof E){const t=arguments[0];return!(X.isNaN(t.x)||X.isInfinite(t.x)||X.isNaN(t.y)||X.isInfinite(t.y))}}checkInvalidCoordinates(){if(arguments[0]instanceof Array){const t=arguments[0];for(let e=0;e<t.length;e++)if(!vi.isValid(t[e]))return this._validErr=new nt(nt.INVALID_COORDINATE,t[e]),null}else if(arguments[0]instanceof Pe){const t=arguments[0];if(this.checkInvalidCoordinates(t.getExteriorRing().getCoordinates()),this._validErr!==null)return null;for(let e=0;e<t.getNumInteriorRing();e++)if(this.checkInvalidCoordinates(t.getInteriorRingN(e).getCoordinates()),this._validErr!==null)return null}}checkHolesNotNested(t,e){if(t.getNumInteriorRing()<=0)return null;const i=new Nu(e);for(let r=0;r<t.getNumInteriorRing();r++){const o=t.getInteriorRingN(r);o.isEmpty()||i.add(o)}i.isNonNested()||(this._validErr=new nt(nt.NESTED_HOLES,i.getNestedPoint()))}checkConsistentArea(t){const e=new Su(t);if(!e.isNodeConsistentArea())return this._validErr=new nt(nt.SELF_INTERSECTION,e.getInvalidPoint()),null;e.hasDuplicateRings()&&(this._validErr=new nt(nt.DUPLICATE_RINGS,e.getInvalidPoint()))}isValid(){return this.checkValid(this._parentGeometry),this._validErr===null}checkShellInsideHole(t,e,i){const s=t.getCoordinates(),r=e.getCoordinates(),o=vi.findPtNotNode(s,e,i);if(o!==null&&!ki.isInRing(o,r))return o;const a=vi.findPtNotNode(r,t,i);return a!==null?ki.isInRing(a,s)?a:null:(rt.shouldNeverReachHere("points in shell and hole appear to be equal"),null)}checkNoSelfIntersectingRings(t){for(let e=t.getEdgeIterator();e.hasNext();){const i=e.next();if(this.checkNoSelfIntersectingRing(i.getEdgeIntersectionList()),this._validErr!==null)return null}}checkHolesInShell(t,e){if(t.getNumInteriorRing()<=0)return null;const i=t.getExteriorRing(),s=i.isEmpty(),r=new kr(i);for(let o=0;o<t.getNumInteriorRing();o++){const a=t.getInteriorRingN(o);let l=null;if(a.isEmpty())continue;if(l=vi.findPtNotNode(a.getCoordinates(),i,e),l===null)return null;if(s||w.EXTERIOR===r.locate(l))return this._validErr=new nt(nt.HOLE_OUTSIDE_SHELL,l),null}}checkShellNotNested(t,e,i){const s=t.getCoordinates(),r=e.getExteriorRing();if(r.isEmpty())return null;const o=r.getCoordinates(),a=vi.findPtNotNode(s,r,i);if(a===null||!ki.isInRing(a,o))return null;if(e.getNumInteriorRing()<=0)return this._validErr=new nt(nt.NESTED_SHELLS,a),null;let h=null;for(let c=0;c<e.getNumInteriorRing();c++){const u=e.getInteriorRingN(c);if(h=this.checkShellInsideHole(t,u,i),h===null)return null}this._validErr=new nt(nt.NESTED_SHELLS,h)}checkClosedRings(t){if(this.checkClosedRing(t.getExteriorRing()),this._validErr!==null)return null;for(let e=0;e<t.getNumInteriorRing();e++)if(this.checkClosedRing(t.getInteriorRingN(e)),this._validErr!==null)return null}checkConnectedInteriors(t){const e=new Ua(t);e.isInteriorsConnected()||(this._validErr=new nt(nt.DISCONNECTED_INTERIOR,e.getCoordinate()))}checkNoSelfIntersectingRing(t){const e=new sc;let i=!0;for(let s=t.iterator();s.hasNext();){const r=s.next();if(i){i=!1;continue}if(e.contains(r.coord))return this._validErr=new nt(nt.RING_SELF_INTERSECTION,r.coord),null;e.add(r.coord)}}checkTooFewPoints(t){if(t.hasTooFewPoints())return this._validErr=new nt(nt.TOO_FEW_POINTS,t.getInvalidPoint()),null}getValidationError(){return this.checkValid(this._parentGeometry),this._validErr}checkValid(){if(arguments[0]instanceof Bi){const t=arguments[0];this.checkInvalidCoordinates(t.getCoordinates())}else if(arguments[0]instanceof Gn){const t=arguments[0];this.checkInvalidCoordinates(t.getCoordinates())}else if(arguments[0]instanceof oi){const t=arguments[0];if(this.checkInvalidCoordinates(t.getCoordinates()),this._validErr!==null||(this.checkClosedRing(t),this._validErr!==null))return null;const e=new nn(0,t);if(this.checkTooFewPoints(e),this._validErr!==null)return null;const i=new zn;e.computeSelfNodes(i,!0,!0),this.checkNoSelfIntersectingRings(e)}else if(arguments[0]instanceof ue){const t=arguments[0];if(this.checkInvalidCoordinates(t.getCoordinates()),this._validErr!==null)return null;const e=new nn(0,t);this.checkTooFewPoints(e)}else if(arguments[0]instanceof Pe){const t=arguments[0];if(this.checkInvalidCoordinates(t),this._validErr!==null||(this.checkClosedRings(t),this._validErr!==null))return null;const e=new nn(0,t);if(this.checkTooFewPoints(e),this._validErr!==null||(this.checkConsistentArea(e),this._validErr!==null)||!this._isSelfTouchingRingFormingHoleValid&&(this.checkNoSelfIntersectingRings(e),this._validErr!==null)||(this.checkHolesInShell(t,e),this._validErr!==null)||(this.checkHolesNotNested(t,e),this._validErr!==null))return null;this.checkConnectedInteriors(e)}else if(arguments[0]instanceof ai){const t=arguments[0];for(let i=0;i<t.getNumGeometries();i++){const s=t.getGeometryN(i);if(this.checkInvalidCoordinates(s),this._validErr!==null||(this.checkClosedRings(s),this._validErr!==null))return null}const e=new nn(0,t);if(this.checkTooFewPoints(e),this._validErr!==null||(this.checkConsistentArea(e),this._validErr!==null)||!this._isSelfTouchingRingFormingHoleValid&&(this.checkNoSelfIntersectingRings(e),this._validErr!==null))return null;for(let i=0;i<t.getNumGeometries();i++){const s=t.getGeometryN(i);if(this.checkHolesInShell(s,e),this._validErr!==null)return null}for(let i=0;i<t.getNumGeometries();i++){const s=t.getGeometryN(i);if(this.checkHolesNotNested(s,e),this._validErr!==null)return null}if(this.checkShellsNotNested(t,e),this._validErr!==null)return null;this.checkConnectedInteriors(e)}else if(arguments[0]instanceof jt){const t=arguments[0];for(let e=0;e<t.getNumGeometries();e++){const i=t.getGeometryN(e);if(this.checkValid(i),this._validErr!==null)return null}}else if(arguments[0]instanceof W){const t=arguments[0];if(this._validErr=null,t.isEmpty())return null;if(t instanceof Bi)this.checkValid(t);else if(t instanceof Gn)this.checkValid(t);else if(t instanceof oi)this.checkValid(t);else if(t instanceof ue)this.checkValid(t);else if(t instanceof Pe)this.checkValid(t);else if(t instanceof ai)this.checkValid(t);else if(t instanceof jt)this.checkValid(t);else throw new Ti(t.getGeometryType())}}setSelfTouchingRingFormingHoleValid(t){this._isSelfTouchingRingFormingHoleValid=t}checkClosedRing(t){if(t.isEmpty())return null;if(!t.isClosed()){let e=null;t.getNumPoints()>=1&&(e=t.getCoordinateN(0)),this._validErr=new nt(nt.RING_NOT_CLOSED,e)}}checkShellsNotNested(t,e){for(let i=0;i<t.getNumGeometries();i++){const r=t.getGeometryN(i).getExteriorRing();for(let o=0;o<t.getNumGeometries();o++){if(i===o)continue;const a=t.getGeometryN(o);if(this.checkShellNotNested(r,a,e),this._validErr!==null)return null}}}}new gl;class Ol{static createDummyLayer(t,e){return{id:t,addEventListener:()=>{},getSource:()=>e||Ol.createDummySource()}}static createDummyLayerGroup(t){return{id:t,getLayers:()=>({getArray:()=>{}}),addEventListener:()=>{}}}static createDummySource(t){return{addEventListener:()=>{},getExtent:()=>{},getFeatures:()=>t,clear:()=>{},addFeatures:()=>{}}}static createClusterFeaturesObject(t){return{get:e=>{if(e=="features")return t}}}static geometryIsInvalid(t){if(!t)return!1;const e=new gl,i=new lR,s=e.writeGeometryObject(t),r=i.read(s);return!vi.isValid(r)}}var SR=Object.getOwnPropertyDescriptor,NR=(n,t,e,i)=>{for(var s=i>1?void 0:i?SR(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let oc=class extends Ja{constructor(){super(...arguments),this.mapElement=null,this.canvasPattern=null}connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map"),this._loadPattern(),this._setStyleOnParent()}get name(){return this.getAttribute("name")}get color(){return this.getAttribute("color")||"rgba(2, 85, 204, 0.8)"}get pattern(){return this.getAttribute("pattern")}get borderColor(){return this.getAttribute("border-color")||"rgba(2, 85, 204, 1)"}get borderSize(){return this.getAttribute("border-size")||1}get textColor(){return this.getAttribute("text-color")||"#FFF"}get textBackgroundColor(){return this.getAttribute("text-background-color")||"rgba(0, 0, 0, 0)"}get textBorderColor(){return this.getAttribute("text-border-color")||"rgba(255, 255, 255, 0)"}get textBorderSize(){return Number(this.getAttribute("text-border-size")||1)}get textSize(){return this.getAttribute("text-size")||"10px"}get textFeatureAttributeName(){return this.getAttribute("text-feature-attribute-name")||null}get textOffsetX(){return this.getAttribute("text-offset-x")||0}get textOffsetY(){return this.getAttribute("text-offset-y")||0}get invalid(){return this.hasAttribute("invalid")}get style(){return(n,t)=>this.appliesTo(n)?this._styleFunction(n):null}get _styleFunction(){return n=>{const t=n instanceof Xo&&n?.getGeometry();return this.invalid||!this.mapElement.invalidGeometryAllowed&&t&&Ol.geometryIsInvalid(t)?new Oe({fill:new ni({color:"rgba(210, 55, 60, 0.3)"}),stroke:new _i({color:"#d2373c",width:2,lineDash:[4,4]}),text:this._getTextStyle(n)}):new Oe({fill:new ni({color:this.canvasPattern??this.color}),stroke:new _i({color:this.borderColor,width:this.borderSize}),text:this._getTextStyle(n)})}}_getTextStyle(n,t){return new wl({font:`${this.textSize} "Flanders Art Sans",sans-serif`,text:this.featureLabelFunction(n),fill:new ni({color:t||this.textColor}),stroke:new _i({color:this.textBorderColor,width:this.textBorderSize}),backgroundFill:new ni({color:this.textBackgroundColor}),offsetX:this.textOffsetX,offsetY:this.textOffsetY})}appliesTo(n){return!0}get featureLabelFunction(){return this.textFeatureAttributeName?n=>n.get(this.textFeatureAttributeName):()=>""}_featureZIndex(n){return n&&n.get?n.get("zIndex"):0}_hasUniqueStyles(n){const t=this._getStyles(n);return t&&this._containsObject(t)&&this._areIdentical(t)}_containsStyle(n){return this._containsObject(n.map(t=>t.getStyle()))}_getStyles(n){return n.map(t=>t.getStyle())}_containsObject(n){return n.some(t=>!!t)}_areIdentical(n){return n.every((t,e,i)=>t==i[0])}_loadPattern(){const n=this.pattern;if(!n)return;const t=new Image;t.onload=async()=>{const e=document.createElement("canvas");e.width=t.width||1,e.height=t.height||1;const i=e.getContext("2d");i.fillStyle=this.color,i.fillRect(0,0,e.width,e.height),i.drawImage(t,0,0),this.canvasPattern=i.createPattern(e,"repeat"),await this.mapElement?.ready,this.parentElement?._layer?.getSource()?.changed()},t.src=n}_setStyleOnParent(){this.parentElement&&customElements.whenDefined(this.parentElement.tagName.toLowerCase()).then(()=>{this.parentElement.style=this})}};oc=NR([uc("vl-map-layer-style")],oc);class ja extends Ja{static get _observedAttributes(){return["hidden","opacity","z-index"]}constructor(){super(),ja._counter=0,this.__counter=++ja._counter,this.__ready=!1}async connectedCallback(){super.connectedCallback(),this.__setIsLayerMarkerAttribute(),this.mapElement&&(await this.mapElement.ready,this.mapElement.addLayer(this._layer),this.getAttribute("z-index")!=null&&this._layer.setZIndex(this._zIndex)),this.__styleCount=this.getStyleCount(),this.__markAsReady()}getStyleCount(){const t=this.querySelectorAll(":scope > *");return Array.from(t)?.filter(e=>e instanceof oc).length}disconnectedCallback(){this._layer?.dispose()}static get _counter(){return this.__counter}static set _counter(t){this.__counter=t}get layer(){return this._layer}get source(){return this._source}get visible(){return this._layer?.getVisible()}get title(){return this.get("title")}set visible(t){this._layer?.setVisible(t),this.rerender(),this.mapElement&&this.mapElement.handleLayerVisibilityChange(this)}get opacity(){return this._layer?.getOpacity()}set opacity(t){this._layer?.setOpacity(t)}get mapElement(){return this.parentNode&&this.parentNode instanceof Er?this.parentNode:null}get ready(){return this.__ready}get _name(){return this.getAttribute("name")||"kaartlaag"}get _minResolution(){return this.getAttribute("min-resolution")||0}get _maxResolution(){return this.getAttribute("max-resolution")||1/0}get _opacity(){return Number(this.getAttribute("opacity")||1)}get _zIndex(){return Number(this.getAttribute("z-index")||0)}get _visible(){return this.getAttribute("hidden")==null}get _styles(){return this.__styles.length>this.__styleCount&&(this.__styles=Array.from(new Set(this.__styles))),this.__styles}set _styles(t){this.__styles=t}get(t){return this._layer.get(t)}rerender(){this.mapElement&&this.mapElement.rerender()}isVisibleAtResolution(t){const e=parseFloat(this._layer.getMinResolution()),i=parseFloat(this._layer.getMaxResolution());return t>=e&&t<i}_hiddenChangedCallback(t,e){this._layer&&(this.visible=e==null)}_opacityChangedCallback(t,e){this.opacity=Number(e||1)}_zIndexChangedCallback(t,e){this._layer?.setZIndex(Number(e||0))}__setIsLayerMarkerAttribute(){this.setAttribute("is-layer","true")}__markAsReady(){this.__ready=!0}}const AR=dc`
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
`,OR=dc`
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
    :host([scale-position='bottom-right']) .ol-scale-line {
        top: auto;
        bottom: 8px;
        left: auto;
        right: var(--vl-map--scale-offset-inline);
    }
    :host([scale-position='top-left']) .ol-scale-line {
        top: 8px;
        bottom: auto;
        left: 8px;
        right: auto;
    }
    :host([scale-position='top-right']) .ol-scale-line {
        top: 8px;
        bottom: auto;
        left: auto;
        right: var(--vl-map--scale-offset-inline);
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
`,PR=dc`
    :host {
        display: none;
        position: relative;
        --vl-map--margin-top: 0px;
        --vl-map--scale-offset-inline: calc(3.5rem + 20px);
        --vl-map--shift-scale-line: initial;
        --vl-map--shift-zoom: initial;
        --vl-map--shift-rotate: initial;
        --vl-map--shift-overviewmap: initial;
        --vl-map--shift-full-screen: initial;
        --vl-map--shift-zoom-extent: initial;
        --vl-map--shift-legend: initial;
        --vl-map--shift-current-location: initial;
        --vl-map--shift-action-controls: initial;
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
    #map .ol-scale-line {
        transform: translateX(var(--vl-map--shift-scale-line));
    }
    #map .ol-zoom {
        transform: translateX(var(--vl-map--shift-zoom));
    }
    #map .ol-rotate {
        transform: translateX(var(--vl-map--shift-rotate));
    }
    #map .ol-overviewmap {
        transform: translateX(var(--vl-map--shift-overviewmap));
    }
    #map .ol-full-screen {
        transform: translateX(var(--vl-map--shift-full-screen));
    }
    #map .ol-zoom-extent {
        transform: translateX(var(--vl-map--shift-zoom-extent));
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
`,KR=[PR,...ym,OR,AR];var DR=Object.getOwnPropertyDescriptor,FR=(n,t,e,i)=>{for(var s=i>1?void 0:i?DR(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};const Ds=8,im=[{selector:".ol-scale-line",property:"--vl-map--shift-scale-line"},{selector:".ol-zoom",property:"--vl-map--shift-zoom"},{selector:".ol-rotate",property:"--vl-map--shift-rotate"},{selector:".ol-overviewmap",property:"--vl-map--shift-overviewmap"},{selector:".ol-full-screen",property:"--vl-map--shift-full-screen"},{selector:".ol-zoom-extent",property:"--vl-map--shift-zoom-extent"}],ac=[{tag:"vl-map-legend",selector:".flux-map-legend",property:"--vl-map--shift-legend"},{tag:"vl-map-current-location",selector:".flux-map-current-location",property:"--vl-map--shift-current-location"},{tag:"vl-map-action-controls",selector:"div",property:"--vl-map--shift-action-controls",contentBox:!0}],kR=[...im,...ac].map(({property:n})=>n),GR="vl-map-search",zR="ol-hidden",gg="vl-map-side-sheet, vl-side-sheet";let Er=class extends Ja{constructor(){const n=`
            <div id='map'>
                <slot></slot>
            </div>
        `,t=[...KR.map(e=>e.styleSheet)];super(n,t),this.resizeObservedElements=new Set,this.classObservedElements=new Set,this.scrollTracking=!1,this.scrollListener=()=>this._scheduleControlShiftUpdate(),this.__initializeCoordinateSystem(),this.__prepareReadyPromises()}static get _observedAttributes(){return["lambert2008","allow-invalid-geometry","auto-shift-controls"]}static get _observedClassAttributes(){return["no-border","full-height"]}get _classPrefix(){return"vl-map--"}get ready(){return this.__ready}get map(){return this._map}get resolution(){return this.map.getView().getResolution()}get nonBaseLayers(){return[...this.querySelectorAll(":scope > [is-layer]")]}get disableEscapeKey(){return this.getAttribute("disable-escape-key")!=null}get disableRotation(){return this.getAttribute("disable-rotation")!=null}get disableMouseWheelZoom(){return this.getAttribute("disable-mouse-wheel-zoom")!=null}get disableKeyboard(){return this.getAttribute("disable-keyboard")!=null}get hideScale(){return this.getAttribute("hide-scale")!=null}get autoShiftControls(){return this.getAttribute("auto-shift-controls")!=null}get actions(){return this.map&&this.map.actions}get controls(){return this.map&&this.map.getControls().getArray()}get activeAction(){return this.map&&this.map.getCurrentActiveAction()}get defaultAction(){return this.map&&this.map.getDefaultActiveAction()}get _mapElement(){return this._shadow?.querySelector("#map")}get _controls(){return this.getAttribute("allow-fullscreen")!==null?[new Om]:[]}get _projection(){return new el({code:this._code,extent:this._extent})}get isLambert2008(){return this.hasAttribute("lambert2008")}get _code(){return this.isLambert2008?u0():g0()}get _extent(){return this.isLambert2008?h2():u2()}get invalidGeometryAllowed(){return this.hasAttribute("allow-invalid-geometry")}hasInvalidGeometries(){return this.nonBaseLayers.some(n=>{const{layer:t}=n;return t?.getSource?t.getSource().getFeatures().some(e=>{const i=e.getGeometry();return i?Ol.geometryIsInvalid(i):!1}):!1})}get zoomInTipLabel(){return this.getAttribute("zoomInTooltip")}get zoomOutTipLabel(){return this.getAttribute("zoomOutTooltip")}get featuresLayers(){return Array.from(this.querySelectorAll("vl-map-features-layer"))}get wfsLayers(){return Array.from(this.querySelectorAll("vl-map-wfs-layer"))}get wmsLayers(){return Array.from(this.querySelectorAll("vl-map-tiled-wms-layer, vl-map-image-wms-layer"))}static __callOnceOnLoad(n){document.readyState==="complete"?n():window.addEventListener("load",n,{once:!0})}__prepareReadyPromises(){this.__mapReady=new Promise(n=>this.__mapReadyResolver=n),this.__overviewMapReady=new Promise(n=>this.__overviewMapReadyResolver=n),this.__ready=Promise.all([this.__mapReady,this.__overviewMapReady])}connectedCallback(){super.connectedCallback(),this._initializeMap()}_initializeMap(){this._map=new VC({actions:[],disableEscapeKey:this.disableEscapeKey,disableRotation:this.disableRotation,disableMouseWheelZoom:this.disableMouseWheelZoom,disableKeyboard:this.disableKeyboard,hideScale:this.hideScale,customLayers:{baseLayerGroup:this.__createLayerGroup("Basis lagen",[]),overviewMapLayers:[],overlayGroup:this.__createLayerGroup("Lagen",[])},projection:this._projection,target:this._mapElement,controls:this._controls,defaultZoom:!1}),this._map.initializeView(),this.__updateMapSizeOnLoad(),this.__updateOverviewMapSizeOnLoad(),this._map.addControl(this.__createZoomControl()),this.observeRemovedMapLayers(),this.autoShiftControls&&this._startControlShiftTracking()}disconnectedCallback(){this.observer&&this.observer.disconnect(),this._stopControlShiftTracking(),this.map?.setTarget(null)}_autoShiftControlsChangedCallback(n,t){!this.isConnected||!this._map||(t!=null?this._startControlShiftTracking():this._stopControlShiftTracking())}__createZoomControl(){const n={};return this.zoomInTipLabel&&(n.zoomInTipLabel=this.zoomInTipLabel),this.zoomOutTipLabel&&(n.zoomOutTipLabel=this.zoomOutTipLabel),new Vc(n)}addLayer(n){this.map.addOverlayLayer(n)}addAction(n){this.map.addAction(n)}addControl(n){this.map.addControl(n)}removeAction(n){this.map.removeAction(n)}_dispatchLayerVisibleChangedEvent(n){this.dispatchEvent(new CustomEvent(ag.LAYER_VISIBLE_CHANGED,{detail:{layer:n,visible:n.visible}}))}handleLayerVisibilityChange(n){this._dispatchLayerVisibleChangedEvent(n);const t=this.map.getLayerActions(n.layer);t&&t.forEach(e=>{const i=e.hasVisibleLayer();i?!this.activeAction&&e===this.defaultAction&&e.element.activate():e.element._active&&e.element.deactivate(),e.handleLayerVisibilityChange&&e.handleLayerVisibilityChange();const s=e.getControl();s&&s.get("element").setDisabled(!i)})}_dispatchActiveActionChangedEvent(n,t){this.dispatchEvent(new CustomEvent(ag.ACTIVE_ACTION_CHANGED,{detail:{previous:n&&n.element,current:t&&t.element}}))}changeActiveAction(n){const t=this.activeAction,e=n||void 0;t&&(this.map.deactivateCurrentAction(),t.element._active=!1,t.getControl()&&t.getControl().get("element").setActive(!1)),e&&(this.map.activateAction(e),e.element._active=!0,e.getControl()&&e.getControl().get("element").setActive(!0)),(e||t)&&this._dispatchActiveActionChangedEvent(t,e)}activateAction(n){n&&n.element.activate()}deactivateAction(n){n&&n.element.deactivate()}zoomTo(n,t){Array.isArray(n)?this.map.zoomToExtent(n,t):n instanceof Object&&this.map.zoomToGeometry(n,t)}on(n,t){return this.map.on(n,t)}un(n,t){return this.map.un(n,t)}rerender(){this.map.render()}__updateMapSize(){this.style.display="block",this.map&&this.map.updateSize(),this.__mapReadyResolver()}__updateOverviewMapSize(){this.map.overviewMapControl&&this.map.overviewMapControl.getOverviewMap().updateSize(),this.__overviewMapReadyResolver()}__updateOverviewMapSizeOnLoad(){Er.__callOnceOnLoad(this.__updateOverviewMapSize.bind(this))}__updateMapSizeOnLoad(){Er.__callOnceOnLoad(this.__updateMapSize.bind(this))}__createLayerGroup(n,t){return new Hn({title:n,layers:t})}__initializeCoordinateSystem(){xe.defs("EPSG:31370","+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs"),xe.defs("EPSG:3812","+proj=lcc +lat_0=50.797815 +lon_0=4.35921583333333 +lat_1=49.8333333333333 +lat_2=51.1666666666667 +x_0=649328 +y_0=665262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"),Yw(xe)}observeRemovedMapLayers(){const n=this;this.observer=new MutationObserver(t=>{t.filter(({target:e})=>e===n).flatMap(({removedNodes:e})=>Array.from(e).filter(i=>i instanceof ja)).forEach(e=>{this.map.removeOverlayLayer(e._layer)})}),this.observer.observe(n,{subtree:!0,childList:!0})}_startControlShiftTracking(){this.sideSheetObserver||(this.sideSheetResizeObserver=new ResizeObserver(()=>this._scheduleControlShiftUpdate()),this.controlClassObserver=new MutationObserver(()=>this._scheduleControlShiftUpdate()),this.sideSheetObserver=new MutationObserver(()=>this._scheduleControlShiftUpdate()),this.sideSheetObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["open","left","right","hide-toggle-button","toggle-text","scale-position","placement"]}),this.controlsListenerKeys=this._map.getControls().on(["add","remove"],()=>this._scheduleControlShiftUpdate()),this._scheduleControlShiftUpdate())}_stopControlShiftTracking(){this.sideSheetObserver?.disconnect(),this.sideSheetResizeObserver?.disconnect(),this.controlClassObserver?.disconnect(),this.sideSheetObserver=void 0,this.sideSheetResizeObserver=void 0,this.controlClassObserver=void 0,this.resizeObservedElements.clear(),this.classObservedElements.clear(),this._setScrollTracking(!1),this.controlsListenerKeys&&(xg(this.controlsListenerKeys),this.controlsListenerKeys=void 0),this.shiftRafId!=null&&(cancelAnimationFrame(this.shiftRafId),this.shiftRafId=void 0),kR.forEach(n=>this.style.removeProperty(n)),ac.forEach(({tag:n,property:t})=>this._ownElements(n).forEach(e=>e.style.removeProperty(t)))}_observeResizes(n){const t=this.sideSheetResizeObserver;if(!t)return;const e=new Set(n);this.resizeObservedElements.forEach(i=>{e.has(i)||(t.unobserve(i),this.resizeObservedElements.delete(i))}),e.forEach(i=>{this.resizeObservedElements.has(i)||(t.observe(i),this.resizeObservedElements.add(i))})}_observeClassChanges(n){const t=this.controlClassObserver;!t||n.length===this.classObservedElements.size&&n.every(i=>this.classObservedElements.has(i))||(t.disconnect(),this.classObservedElements=new Set(n),n.forEach(i=>t.observe(i,{attributes:!0,attributeFilter:["class","style"]})))}_setScrollTracking(n){n!==this.scrollTracking&&(this.scrollTracking=n,n?window.addEventListener("scroll",this.scrollListener,{capture:!0,passive:!0}):window.removeEventListener("scroll",this.scrollListener,{capture:!0}))}_scheduleControlShiftUpdate(){this.shiftRafId==null&&(this.shiftRafId=requestAnimationFrame(()=>{this.shiftRafId=void 0,this._recalculateControlShifts()}))}_ownElements(n){return Array.from(this.querySelectorAll(n)).filter(t=>{if(t.closest("vl-map")!==this)return!1;const e=t.parentElement?.closest(gg);return!e||!this.contains(e)})}_collectShiftTargets(){const n=[],t=this._mapElement;return t&&im.forEach(({selector:e,property:i})=>{const s=t.querySelector(e);s&&n.push({element:s,host:this,property:i})}),ac.forEach(({tag:e,selector:i,property:s,contentBox:r})=>{this._ownElements(e).forEach(o=>{const a=o.shadowRoot?.querySelector(i);a&&n.push({element:a,host:o,property:s,contentBox:r})})}),n}_recalculateControlShifts(){const n=this._mapElement;if(!this.autoShiftControls||!n)return;const t=this._ownElements(gg),e=t.filter(T=>T.hasAttribute("open")),i=window.matchMedia(`screen and (max-width: ${wm}px)`).matches;this._setScrollTracking(!i&&e.some(T=>window.getComputedStyle(T).position==="fixed"));const s=this._collectShiftTargets();if(e.length===0||i){this._observeResizes([n,...t]),this._observeClassChanges([]),this._applyControlShifts(s,new Map);return}if(this._observeResizes([n,...t,...s.map(({element:T})=>T)]),this._observeClassChanges(s.map(({element:T})=>T)),s.length===0)return;const r=T=>!!T&&T.width>0&&T.height>0,o=(T,R)=>T.top<R.bottom&&R.top<T.bottom,a=(T,R)=>T.filter(v=>o(R,v)),l=[],h=[];e.forEach(T=>{const R=T.getBoundingClientRect();if(R.width===0)return;const v=[R,T.toggleButtonRect].filter(r);(T.hasAttribute("left")?l:h).push(...v)});const c=T=>Math.max(...a(l,T).map(({right:R})=>R)),u=T=>Math.min(...a(h,T).map(({left:R})=>R)),g=n.getBoundingClientRect(),d=g.left+g.width/2,f=({host:T,property:R})=>parseFloat(T.style.getPropertyValue(R))||0,m=({element:T,contentBox:R})=>{const v=T.getBoundingClientRect();if(!R)return v;const P=window.getComputedStyle(T),[S,D,N,B]=["top","right","bottom","left"].map(lt=>parseFloat(P.getPropertyValue(`padding-${lt}`))||0);return new DOMRect(v.x+B,v.y+S,v.width-B-D,v.height-S-N)},y=s.filter(({element:T})=>!T.classList.contains(zR)).map(T=>{const R=m(T),v=new DOMRect(R.x-f(T),R.y,R.width,R.height);return{...T,rect:v}}).filter(({rect:T})=>r(T)),_=Array.from(n.querySelectorAll(GR)).map(T=>T.getBoundingClientRect()).filter(r),p=y.filter(({rect:T})=>T.left+T.width/2<d),x=y.filter(({rect:T})=>T.left+T.width/2>=d),M=T=>{let R=[];return T.forEach(v=>{const P=R.filter(S=>S.some(D=>o(v.rect,D.rect)));R=[...R.filter(S=>!P.includes(S)),[v,...P.flat()]]}),R},C=new Map;M(p).forEach(T=>{const R=T.map(({rect:S})=>({rect:S,edge:c(S)})).filter(({rect:S,edge:D})=>S.left<D);if(R.length===0)return;const v=Math.max(...R.map(({rect:S,edge:D})=>D+Ds-S.left));Math.min(...T.map(({rect:S})=>{const D=[...x.map(N=>N.rect),..._.filter(N=>N.right>S.left)].filter(N=>o(S,N));return Math.min(g.right-Ds-S.right,...D.map(N=>N.left>=S.right?N.left-Ds-S.right:-1/0))}))>=v&&T.forEach(({element:S})=>C.set(S,Math.round(v)))}),M(x).forEach(T=>{const R=T.map(({rect:S})=>({rect:S,edge:u(S)})).filter(({rect:S,edge:D})=>S.right>D);if(R.length===0)return;const v=Math.max(...R.map(({rect:S,edge:D})=>S.right-(D-Ds)));Math.min(...T.map(({rect:S})=>{const D=[...p.map(N=>N.rect),..._.filter(N=>N.left<S.right)].filter(N=>o(S,N));return Math.min(S.left-(g.left+Ds),...D.map(N=>N.right<=S.left?S.left-(N.right+Ds):-1/0))}))>=v&&T.forEach(({element:S})=>C.set(S,Math.round(-v)))}),this._applyControlShifts(s,C)}_applyControlShifts(n,t){n.forEach(e=>{const i=t.get(e.element)??0,s=i===0?"":`${i}px`;e.host.style.getPropertyValue(e.property)!==s&&(s?e.host.style.setProperty(e.property,s):e.host.style.removeProperty(e.property))})}};Er=FR([uc("vl-map")],Er);const nm=.5,WR=10,fg=.25;class sm{constructor(t,e,i,s,r,o){this.sourceProj_=t,this.targetProj_=e;let a={};const l=gr(this.targetProj_,this.sourceProj_);this.transformInv_=function(p){const x=p[0]+"/"+p[1];return a[x]||(a[x]=l(p)),a[x]},this.maxSourceExtent_=s,this.errorThresholdSquared_=r*r,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!s&&!!this.sourceProj_.getExtent()&&wt(s)>=wt(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?wt(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?wt(this.targetProj_.getExtent()):null;const h=un(i),c=sl(i),u=Po(i),g=nl(i),d=this.transformInv_(h),f=this.transformInv_(c),m=this.transformInv_(u),y=this.transformInv_(g),_=WR+(o?Math.max(0,Math.ceil(Math.log2(ph(i)/(o*o*256*256)))):0);if(this.addQuad_(h,c,u,g,d,f,m,y,_),this.wrapsXInSource_){let p=1/0;this.triangles_.forEach(function(x,M,C){p=Math.min(p,x.source[0][0],x.source[1][0],x.source[2][0])}),this.triangles_.forEach(x=>{if(Math.max(x.source[0][0],x.source[1][0],x.source[2][0])-p>this.sourceWorldWidth_/2){const M=[[x.source[0][0],x.source[0][1]],[x.source[1][0],x.source[1][1]],[x.source[2][0],x.source[2][1]]];M[0][0]-p>this.sourceWorldWidth_/2&&(M[0][0]-=this.sourceWorldWidth_),M[1][0]-p>this.sourceWorldWidth_/2&&(M[1][0]-=this.sourceWorldWidth_),M[2][0]-p>this.sourceWorldWidth_/2&&(M[2][0]-=this.sourceWorldWidth_);const C=Math.min(M[0][0],M[1][0],M[2][0]);Math.max(M[0][0],M[1][0],M[2][0])-C<this.sourceWorldWidth_/2&&(x.source=M)}})}a={}}addTriangle_(t,e,i,s,r,o){this.triangles_.push({source:[s,r,o],target:[t,e,i]})}addQuad_(t,e,i,s,r,o,a,l,h){const c=wh([r,o,a,l]),u=this.sourceWorldWidth_?wt(c)/this.sourceWorldWidth_:null,g=this.sourceWorldWidth_,d=this.sourceProj_.canWrapX()&&u>.5&&u<1;let f=!1;if(h>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){const y=wh([t,e,i,s]);f=wt(y)/this.targetWorldWidth_>fg||f}!d&&this.sourceProj_.isGlobal()&&u&&(f=u>fg||f)}if(!f&&this.maxSourceExtent_&&isFinite(c[0])&&isFinite(c[1])&&isFinite(c[2])&&isFinite(c[3])&&!Ne(c,this.maxSourceExtent_))return;let m=0;if(!f&&(!isFinite(r[0])||!isFinite(r[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(l[0])||!isFinite(l[1]))){if(h>0)f=!0;else if(m=(!isFinite(r[0])||!isFinite(r[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),m!=1&&m!=2&&m!=4&&m!=8)return}if(h>0){if(!f){const y=[(t[0]+i[0])/2,(t[1]+i[1])/2],_=this.transformInv_(y);let p;d?p=(Nn(r[0],g)+Nn(a[0],g))/2-Nn(_[0],g):p=(r[0]+a[0])/2-_[0];const x=(r[1]+a[1])/2-_[1];f=p*p+x*x>this.errorThresholdSquared_}if(f){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){const y=[(e[0]+i[0])/2,(e[1]+i[1])/2],_=this.transformInv_(y),p=[(s[0]+t[0])/2,(s[1]+t[1])/2],x=this.transformInv_(p);this.addQuad_(t,e,y,p,r,o,_,x,h-1),this.addQuad_(p,y,i,s,x,_,a,l,h-1)}else{const y=[(t[0]+e[0])/2,(t[1]+e[1])/2],_=this.transformInv_(y),p=[(i[0]+s[0])/2,(i[1]+s[1])/2],x=this.transformInv_(p);this.addQuad_(t,y,p,s,r,_,x,l,h-1),this.addQuad_(y,e,i,p,_,o,a,x,h-1)}return}}if(d){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(m&11)==0&&this.addTriangle_(t,i,s,r,a,l),(m&14)==0&&this.addTriangle_(t,i,e,r,a,o),m&&((m&13)==0&&this.addTriangle_(e,s,t,o,l,r),(m&7)==0&&this.addTriangle_(e,s,i,o,l,a))}calculateSourceExtent(){const t=Ue();return this.triangles_.forEach(function(e,i,s){const r=e.source;io(t,r[0]),io(t,r[1]),io(t,r[2])}),t}getTriangles(){return this.triangles_}}let uh;const lr=[];function mg(n,t,e,i,s){n.beginPath(),n.moveTo(0,0),n.lineTo(t,e),n.lineTo(i,s),n.closePath(),n.save(),n.clip(),n.fillRect(0,0,Math.max(t,i)+1,Math.max(e,s)),n.restore()}function dh(n,t){return Math.abs(n[t*4]-210)>2||Math.abs(n[t*4+3]-.75*255)>2}function BR(){if(uh===void 0){const n=Te(6,6,lr);n.globalCompositeOperation="lighter",n.fillStyle="rgba(210, 0, 0, 0.75)",mg(n,4,5,4,0),mg(n,4,5,0,5);const t=n.getImageData(0,0,3,3).data;uh=dh(t,0)||dh(t,4)||dh(t,8),tl(n),lr.push(n.canvas)}return uh}function qa(n,t,e,i){const s=zg(e,t,n);let r=Ea(t,i,e);const o=t.getMetersPerUnit();o!==void 0&&(r*=o);const a=n.getMetersPerUnit();a!==void 0&&(r/=a);const l=n.getExtent();if(!l||il(l,s)){const h=Ea(n,r,s)/r;isFinite(h)&&h>0&&(r/=h)}return r}function HR(n,t,e,i){const s=pi(e);let r=qa(n,t,s,i);return(!isFinite(r)||r<=0)&&Ag(e,function(o){return r=qa(n,t,o,i),isFinite(r)&&r>0}),r}function rm(n,t,e,i,s,r,o,a,l,h,c,u,g){const d=Te(Math.round(e*n),Math.round(e*t),lr);if(u||(d.imageSmoothingEnabled=!1),l.length===0)return d.canvas;d.scale(e,e);function f(p){return Math.round(p*e)/e}d.globalCompositeOperation="lighter";const m=Ue();l.forEach(function(p,x,M){Sg(m,p.extent)});let y;if(!g||l.length!==1||h!==0){const p=wt(m),x=he(m);y=Te(Math.round(e*p/i),Math.round(e*x/i),lr),u||(y.imageSmoothingEnabled=!1);const M=e/i;l.forEach(function(C,T,R){const v=C.extent[0]-m[0],P=-(C.extent[3]-m[3]),S=wt(C.extent),D=he(C.extent);C.image.width>0&&C.image.height>0&&y.drawImage(C.image,h,h,C.image.width-2*h,C.image.height-2*h,v*M,P*M,S*M,D*M)})}const _=un(o);return a.getTriangles().forEach(function(p,x,M){const C=p.source,T=p.target;let R=C[0][0],v=C[0][1],P=C[1][0],S=C[1][1],D=C[2][0],N=C[2][1];const B=f((T[0][0]-_[0])/r),lt=f(-(T[0][1]-_[1])/r),z=f((T[1][0]-_[0])/r),H=f(-(T[1][1]-_[1])/r),F=f((T[2][0]-_[0])/r),et=f(-(T[2][1]-_[1])/r),_t=R,mt=v;R=0,v=0,P-=_t,S-=mt,D-=_t,N-=mt;const Ut=[[P,S,0,0,z-B],[D,N,0,0,F-B],[0,0,P,S,H-lt],[0,0,D,N,et-lt]],O=Qm(Ut);if(!O)return;if(d.save(),d.beginPath(),BR()||!u){d.moveTo(z,H);const ht=4,Ot=B-z,gn=lt-H;for(let ge=0;ge<ht;ge++)d.lineTo(z+f((ge+1)*Ot/ht),H+f(ge*gn/(ht-1))),ge!=ht-1&&d.lineTo(z+f((ge+1)*Ot/ht),H+f((ge+1)*gn/(ht-1)));d.lineTo(F,et)}else d.moveTo(z,H),d.lineTo(B,lt),d.lineTo(F,et);d.clip(),d.transform(O[0],O[2],O[1],O[3],B,lt),d.translate(m[0]-_t,m[3]-mt);let Qt;if(y)Qt=y.canvas,d.scale(i/e,-i/e);else{const ht=l[0],Ot=ht.extent;Qt=ht.image,d.scale(wt(Ot)/Qt.width,-he(Ot)/Qt.height)}d.drawImage(Qt,0,0),d.restore()}),y&&(tl(y),lr.push(y.canvas)),c&&(d.save(),d.globalCompositeOperation="source-over",d.strokeStyle="black",d.lineWidth=1,a.getTriangles().forEach(function(p,x,M){const C=p.target,T=(C[0][0]-_[0])/r,R=-(C[0][1]-_[1])/r,v=(C[1][0]-_[0])/r,P=-(C[1][1]-_[1])/r,S=(C[2][0]-_[0])/r,D=-(C[2][1]-_[1])/r;d.beginPath(),d.moveTo(v,P),d.lineTo(T,R),d.lineTo(S,D),d.closePath(),d.stroke()}),d.restore()),d.canvas}class lc extends S0{constructor(t,e,i,s,r,o,a,l,h,c,u,g){super(r,j.IDLE,g),this.renderEdges_=u!==void 0?u:!1,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=e,this.targetTileGrid_=s,this.wrappedTileCoord_=o||r,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0;const d=s.getTileCoordExtent(this.wrappedTileCoord_),f=this.targetTileGrid_.getExtent();let m=this.sourceTileGrid_.getExtent();const y=f?Qs(d,f):d;if(ph(y)===0){this.state=j.EMPTY;return}const _=t.getExtent();_&&(m?m=Qs(m,_):m=_);const p=s.getResolution(this.wrappedTileCoord_[0]),x=HR(t,i,y,p);if(!isFinite(x)||x<=0){this.state=j.EMPTY;return}const M=c!==void 0?c:nm;if(this.triangulation_=new sm(t,i,y,m,x*M,p),this.triangulation_.getTriangles().length===0){this.state=j.EMPTY;return}this.sourceZ_=e.getZForResolution(x);let C=this.triangulation_.calculateSourceExtent();if(m&&(t.canWrapX()?(C[1]=Gt(C[1],m[1],m[3]),C[3]=Gt(C[3],m[1],m[3])):C=Qs(C,m)),!ph(C))this.state=j.EMPTY;else{const T=e.getTileRangeForExtentAndZ(C,this.sourceZ_);for(let R=T.minX;R<=T.maxX;R++)for(let v=T.minY;v<=T.maxY;v++){const P=h(this.sourceZ_,R,v,a);P&&this.sourceTiles_.push(P)}this.sourceTiles_.length===0&&(this.state=j.EMPTY)}}getImage(){return this.canvas_}reproject_(){const t=[];if(this.sourceTiles_.forEach(e=>{e&&e.getState()==j.LOADED&&t.push({extent:this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),image:e.getImage()})}),this.sourceTiles_.length=0,t.length===0)this.state=j.ERROR;else{const e=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(e),s=typeof i=="number"?i:i[0],r=typeof i=="number"?i:i[1],o=this.targetTileGrid_.getResolution(e),a=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=rm(s,r,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,t,this.gutter_,this.renderEdges_,this.interpolate),this.state=j.LOADED}this.changed()}load(){if(this.state==j.IDLE){this.state=j.LOADING,this.changed();let t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(e=>{const i=e.getState();if(i==j.IDLE||i==j.LOADING){t++;const s=ot(e,$.CHANGE,function(r){const o=e.getState();(o==j.LOADED||o==j.ERROR||o==j.EMPTY)&&(Nt(s),t--,t===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(s)}}),t===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(e,i,s){e.getState()==j.IDLE&&e.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(Nt),this.sourcesListenerKeys_=null}release(){this.canvas_&&(tl(this.canvas_.getContext("2d")),lr.push(this.canvas_),this.canvas_=null),super.release()}}const ya={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};class XR extends cl{constructor(t){t=t||{};const e=Object.assign({},t);delete e.preload,delete e.useInterimTilesOnError,super(e),this.on,this.once,this.un,this.setPreload(t.preload!==void 0?t.preload:0),this.setUseInterimTilesOnError(t.useInterimTilesOnError!==void 0?t.useInterimTilesOnError:!0)}getPreload(){return this.get(ya.PRELOAD)}setPreload(t){this.set(ya.PRELOAD,t)}getUseInterimTilesOnError(){return this.get(ya.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(t){this.set(ya.USE_INTERIM_TILES_ON_ERROR,t)}getData(t){return super.getData(t)}}class UR extends b0{constructor(t){super(t),this.extentChanged=!0,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedRevision,this.renderedTiles=[],this.newTiles_=!1,this.tmpExtent=Ue(),this.tmpTileRange_=new cu(0,0,0,0)}isDrawableTile(t){const e=this.getLayer(),i=t.getState(),s=e.getUseInterimTilesOnError();return i==j.LOADED||i==j.EMPTY||i==j.ERROR&&!s}getTile(t,e,i,s){const r=s.pixelRatio,o=s.viewState.projection,a=this.getLayer();let h=a.getSource().getTile(t,e,i,r,o);return h.getState()==j.ERROR&&a.getUseInterimTilesOnError()&&a.getPreload()>0&&(this.newTiles_=!0),this.isDrawableTile(h)||(h=h.getInterimTile()),h}getData(t){const e=this.frameState;if(!e)return null;const i=this.getLayer(),s=$t(e.pixelToCoordinateTransform,t.slice()),r=i.getExtent();if(r&&!il(r,s))return null;const o=e.pixelRatio,a=e.viewState.projection,l=e.viewState,h=i.getRenderSource(),c=h.getTileGridForProjection(l.projection),u=h.getTilePixelRatio(e.pixelRatio);for(let g=c.getZForResolution(l.resolution);g>=c.getMinZoom();--g){const d=c.getTileCoordForCoordAndZ(s,g),f=h.getTile(g,d[1],d[2],o,a);if(!(f instanceof N0||f instanceof lc)||f instanceof lc&&f.getState()===j.EMPTY)return null;if(f.getState()!==j.LOADED)continue;const m=c.getOrigin(g),y=Xe(c.getTileSize(g)),_=c.getResolution(g),p=Math.floor(u*((s[0]-m[0])/_-d[1]*y[0])),x=Math.floor(u*((m[1]-s[1])/_-d[2]*y[1])),M=Math.round(u*h.getGutterForProjection(l.projection));return this.getImageData(f.getImage(),p+M,x+M)}return null}loadedTileCallback(t,e,i){return this.isDrawableTile(i)?super.loadedTileCallback(t,e,i):!1}prepareFrame(t){return!!this.getLayer().getSource()}renderFrame(t,e){const i=t.layerStatesArray[t.layerIndex],s=t.viewState,r=s.projection,o=s.resolution,a=s.center,l=s.rotation,h=t.pixelRatio,c=this.getLayer(),u=c.getSource(),g=u.getRevision(),d=u.getTileGridForProjection(r),f=d.getZForResolution(o,u.zDirection),m=d.getResolution(f);let y=t.extent;const _=t.viewState.resolution,p=u.getTilePixelRatio(h),x=Math.round(wt(y)/_*h),M=Math.round(he(y)/_*h),C=i.extent&&Jn(i.extent);C&&(y=Qs(y,Jn(i.extent)));const T=m*x/2/p,R=m*M/2/p,v=[a[0]-T,a[1]-R,a[0]+T,a[1]+R],P=d.getTileRangeForExtentAndZ(y,f),S={};S[f]={};const D=this.createLoadedTileFinder(u,r,S),N=this.tmpExtent,B=this.tmpTileRange_;this.newTiles_=!1;const lt=l?xh(s.center,_,l,t.size):void 0;for(let Qt=P.minX;Qt<=P.maxX;++Qt)for(let ht=P.minY;ht<=P.maxY;++ht){if(l&&!d.tileCoordIntersectsViewport([f,Qt,ht],lt))continue;const Ot=this.getTile(f,Qt,ht,t);if(this.isDrawableTile(Ot)){const Yi=Mt(this);if(Ot.getState()==j.LOADED){S[f][Ot.tileCoord.toString()]=Ot;let Vi=Ot.inTransition(Yi);Vi&&i.opacity!==1&&(Ot.endTransition(Yi),Vi=!1),!this.newTiles_&&(Vi||!this.renderedTiles.includes(Ot))&&(this.newTiles_=!0)}if(Ot.getAlpha(Yi,t.time)===1)continue}const gn=d.getTileCoordChildTileRange(Ot.tileCoord,B,N);let ge=!1;gn&&(ge=D(f+1,gn)),ge||d.forEachTileCoordParentTileRange(Ot.tileCoord,D,B,N)}const z=m/o*h/p;hn(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/h,1/h,l,-x/2,-M/2);const H=Bg(this.pixelTransform);this.useContainer(e,H,this.getBackground(t));const F=this.context,et=F.canvas;Rc(this.inversePixelTransform,this.pixelTransform),hn(this.tempTransform,x/2,M/2,z,z,0,-x/2,-M/2),et.width!=x||et.height!=M?(et.width=x,et.height=M):this.containerReused||F.clearRect(0,0,x,M),C&&this.clipUnrotated(F,t,C),u.getInterpolate()||(F.imageSmoothingEnabled=!1),this.preRender(F,t),this.renderedTiles.length=0;let _t=Object.keys(S).map(Number);_t.sort(Pn);let mt,Ut,O;i.opacity===1&&(!this.containerReused||u.getOpaque(t.viewState.projection))?_t=_t.reverse():(mt=[],Ut=[]);for(let Qt=_t.length-1;Qt>=0;--Qt){const ht=_t[Qt],Ot=u.getTilePixelSize(ht,h,r),ge=d.getResolution(ht)/m,Yi=Ot[0]*ge*z,Vi=Ot[1]*ge*z,Es=d.getTileCoordForCoordAndZ(un(v),ht),Zo=d.getTileCoordExtent(Es),vs=$t(this.tempTransform,[p*(Zo[0]-v[0])/m,p*(v[3]-Zo[3])/m]),$o=p*u.getGutterForProjection(r),fn=S[ht];for(const Gr in fn){const mn=fn[Gr],Jo=mn.tileCoord,Qo=Es[1]-Jo[1],ta=Math.round(vs[0]-(Qo-1)*Yi),bs=Es[2]-Jo[2],Pl=Math.round(vs[1]-(bs-1)*Vi),Ce=Math.round(vs[0]-Qo*Yi),Ye=Math.round(vs[1]-bs*Vi),li=ta-Ce,ji=Pl-Ye,Is=f===ht,Yn=Is&&mn.getAlpha(Mt(this),t.time)!==1;let yn=!1;if(!Yn)if(mt){O=[Ce,Ye,Ce+li,Ye,Ce+li,Ye+ji,Ce,Ye+ji];for(let Ls=0,ea=mt.length;Ls<ea;++Ls)if(f!==ht&&ht<Ut[Ls]){const fe=mt[Ls];Ne([Ce,Ye,Ce+li,Ye+ji],[fe[0],fe[3],fe[4],fe[7]])&&(yn||(F.save(),yn=!0),F.beginPath(),F.moveTo(O[0],O[1]),F.lineTo(O[2],O[3]),F.lineTo(O[4],O[5]),F.lineTo(O[6],O[7]),F.moveTo(fe[6],fe[7]),F.lineTo(fe[4],fe[5]),F.lineTo(fe[2],fe[3]),F.lineTo(fe[0],fe[1]),F.clip())}mt.push(O),Ut.push(ht)}else F.clearRect(Ce,Ye,li,ji);this.drawTileImage(mn,t,Ce,Ye,li,ji,$o,Is),mt&&!Yn?(yn&&F.restore(),this.renderedTiles.unshift(mn)):this.renderedTiles.push(mn),this.updateUsedTiles(t.usedTiles,u,mn)}}return this.renderedRevision=g,this.renderedResolution=m,this.extentChanged=!this.renderedExtent_||!ds(this.renderedExtent_,v),this.renderedExtent_=v,this.renderedPixelRatio=h,this.renderedProjection=r,this.manageTilePyramid(t,u,d,h,r,y,f,c.getPreload()),this.scheduleExpireCache(t,u),this.postRender(F,t),i.extent&&F.restore(),F.imageSmoothingEnabled=!0,H!==et.style.transform&&(et.style.transform=H),this.container}drawTileImage(t,e,i,s,r,o,a,l){const h=this.getTileImage(t);if(!h)return;const c=Mt(this),u=e.layerStatesArray[e.layerIndex],g=u.opacity*(l?t.getAlpha(c,e.time):1),d=g!==this.context.globalAlpha;d&&(this.context.save(),this.context.globalAlpha=g),this.context.drawImage(h,a,a,h.width-2*a,h.height-2*a,i,s,r,o),d&&this.context.restore(),g!==u.opacity?e.animate=!0:l&&t.endTransition(c)}getImage(){const t=this.context;return t?t.canvas:null}getTileImage(t){return t.getImage()}scheduleExpireCache(t,e){if(e.canExpireCache()){const i=(function(s,r,o){const a=Mt(s);a in o.usedTiles&&s.expireCache(o.viewState.projection,o.usedTiles[a])}).bind(null,e);t.postRenderFunctions.push(i)}}updateUsedTiles(t,e,i){const s=Mt(e);s in t||(t[s]={}),t[s][i.getKey()]=!0}manageTilePyramid(t,e,i,s,r,o,a,l,h){const c=Mt(e);c in t.wantedTiles||(t.wantedTiles[c]={});const u=t.wantedTiles[c],g=t.tileQueue,d=i.getMinZoom(),f=t.viewState.rotation,m=f?xh(t.viewState.center,t.viewState.resolution,f,t.size):void 0;let y=0,_,p,x,M,C,T;for(T=d;T<=a;++T)for(p=i.getTileRangeForExtentAndZ(o,T,p),x=i.getResolution(T),M=p.minX;M<=p.maxX;++M)for(C=p.minY;C<=p.maxY;++C)f&&!i.tileCoordIntersectsViewport([T,M,C],m)||(a-T<=l?(++y,_=e.getTile(T,M,C,s,r),_.getState()==j.IDLE&&(u[_.getKey()]=!0,g.isKeyQueued(_.getKey())||g.enqueue([_,c,i.getTileCoordCenter(_.tileCoord),x])),h!==void 0&&h(_)):e.useTile(T,M,C,r));e.updateCacheSize(y,r)}}class wa extends XR{constructor(t){super(t)}createRenderer(){return new UR(this)}}function hc(n){return Array.isArray(n)?Math.min(...n):n}const gh={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"},Fs=[0,0,0],Tn=5;class Au{constructor(t){this.minZoom=t.minZoom!==void 0?t.minZoom:0,this.resolutions_=t.resolutions,yt(xm(this.resolutions_,(s,r)=>r-s),"`resolutions` must be sorted in descending order");let e;if(!t.origins){for(let s=0,r=this.resolutions_.length-1;s<r;++s)if(!e)e=this.resolutions_[s]/this.resolutions_[s+1];else if(this.resolutions_[s]/this.resolutions_[s+1]!==e){e=void 0;break}}this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=t.origin!==void 0?t.origin:null,this.origins_=null,t.origins!==void 0&&(this.origins_=t.origins,yt(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const i=t.extent;i!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=un(i)),yt(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,t.tileSizes!==void 0&&(this.tileSizes_=t.tileSizes,yt(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=t.tileSize!==void 0?t.tileSize:this.tileSizes_?null:Oc,yt(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=i!==void 0?i:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],t.sizes!==void 0?this.fullTileRanges_=t.sizes.map((s,r)=>{const o=new cu(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(i){const a=this.getTileRangeForExtentAndZ(i,r);o.minX=Math.max(a.minX,o.minX),o.maxX=Math.min(a.maxX,o.maxX),o.minY=Math.max(a.minY,o.minY),o.maxY=Math.min(a.maxY,o.maxY)}return o}):i&&this.calculateTileRanges_(i)}forEachTileCoord(t,e,i){const s=this.getTileRangeForExtentAndZ(t,e);for(let r=s.minX,o=s.maxX;r<=o;++r)for(let a=s.minY,l=s.maxY;a<=l;++a)i([e,r,a])}forEachTileCoordParentTileRange(t,e,i,s){let r,o,a,l=null,h=t[0]-1;for(this.zoomFactor_===2?(o=t[1],a=t[2]):l=this.getTileCoordExtent(t,s);h>=this.minZoom;){if(o!==void 0&&a!==void 0?(o=Math.floor(o/2),a=Math.floor(a/2),r=Ps(o,o,a,a,i)):r=this.getTileRangeForExtentAndZ(l,h,i),e(h,r))return!0;--h}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(t){return this.origin_?this.origin_:this.origins_[t]}getResolution(t){return this.resolutions_[t]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(t,e,i){if(t[0]<this.maxZoom){if(this.zoomFactor_===2){const r=t[1]*2,o=t[2]*2;return Ps(r,r+1,o,o+1,e)}const s=this.getTileCoordExtent(t,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,t[0]+1,e)}return null}getTileRangeForTileCoordAndZ(t,e,i){if(e>this.maxZoom||e<this.minZoom)return null;const s=t[0],r=t[1],o=t[2];if(e===s)return Ps(r,o,r,o,i);if(this.zoomFactor_){const l=Math.pow(this.zoomFactor_,e-s),h=Math.floor(r*l),c=Math.floor(o*l);if(e<s)return Ps(h,h,c,c,i);const u=Math.floor(l*(r+1))-1,g=Math.floor(l*(o+1))-1;return Ps(h,u,c,g,i)}const a=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,e,i)}getTileRangeForExtentAndZ(t,e,i){this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,Fs);const s=Fs[1],r=Fs[2];this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,Fs);const o=Fs[1],a=Fs[2];return Ps(s,o,r,a,i)}getTileCoordCenter(t){const e=this.getOrigin(t[0]),i=this.getResolution(t[0]),s=Xe(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*s[0]*i,e[1]-(t[2]+.5)*s[1]*i]}getTileCoordExtent(t,e){const i=this.getOrigin(t[0]),s=this.getResolution(t[0]),r=Xe(this.getTileSize(t[0]),this.tmpSize_),o=i[0]+t[1]*r[0]*s,a=i[1]-(t[2]+1)*r[1]*s,l=o+r[0]*s,h=a+r[1]*s;return ln(o,a,l,h,e)}getTileCoordForCoordAndResolution(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)}getTileCoordForXYAndResolution_(t,e,i,s,r){const o=this.getZForResolution(i),a=i/this.getResolution(o),l=this.getOrigin(o),h=Xe(this.getTileSize(o),this.tmpSize_);let c=a*(t-l[0])/i/h[0],u=a*(l[1]-e)/i/h[1];return s?(c=En(c,Tn)-1,u=En(u,Tn)-1):(c=Xs(c,Tn),u=Xs(u,Tn)),lg(o,c,u,r)}getTileCoordForXYAndZ_(t,e,i,s,r){const o=this.getOrigin(i),a=this.getResolution(i),l=Xe(this.getTileSize(i),this.tmpSize_);let h=(t-o[0])/a/l[0],c=(o[1]-e)/a/l[1];return s?(h=En(h,Tn)-1,c=En(c,Tn)-1):(h=Xs(h,Tn),c=Xs(c,Tn)),lg(i,h,c,r)}getTileCoordForCoordAndZ(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)}getTileCoordResolution(t){return this.resolutions_[t[0]]}getTileSize(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]}getFullTileRange(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null}getZForResolution(t,e){const i=Qa(this.resolutions_,t,e||0);return Gt(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(t,e){return ff(e,0,e.length,2,this.getTileCoordExtent(t))}calculateTileRanges_(t){const e=this.resolutions_.length,i=new Array(e);for(let s=this.minZoom;s<e;++s)i[s]=this.getTileRangeForExtentAndZ(t,s);this.fullTileRanges_=i}}class om extends Au{constructor(t){super({extent:t.extent,origin:t.origin,origins:t.origins,resolutions:t.resolutions,tileSize:t.tileSize,tileSizes:t.tileSizes,sizes:t.sizes}),this.matrixIds_=t.matrixIds}getMatrixId(t){return this.matrixIds_[t]}getMatrixIds(){return this.matrixIds_}}function YR(n,t,e){const i=[],s=[],r=[],o=[],a=[];e=e!==void 0?e:[];const l="SupportedCRS",h="TileMatrix",c="Identifier",u="ScaleDenominator",g="TopLeftCorner",d="TileWidth",f="TileHeight",m=n[l],y=at(m),_=y.getMetersPerUnit(),p=y.getAxisOrientation().substr(0,2)=="ne";return n[h].sort(function(x,M){return M[u]-x[u]}),n[h].forEach(function(x){let M;if(e.length>0?M=e.find(function(C){return x[c]==C[h]?!0:x[c].includes(":")?!1:n[c]+":"+x[c]===C[h]}):M=!0,M){s.push(x[c]);const C=x[u]*28e-5/_,T=x[d],R=x[f];p?r.push([x[g][1],x[g][0]]):r.push(x[g]),i.push(C),o.push(T==R?T:[T,R]),a.push([x.MatrixWidth,x.MatrixHeight])}}),new om({extent:t,origins:r,resolutions:i,matrixIds:s,tileSizes:o,sizes:a})}function am(n){let t=n.getDefaultTileGrid();return t||(t=ZR(n),n.setDefaultTileGrid(t)),t}function VR(n,t,e){const i=t[0],s=n.getTileCoordCenter(t),r=Ou(e);if(!il(r,s)){const o=wt(r),a=Math.ceil((r[0]-s[0])/o);return s[0]+=o*a,n.getTileCoordForCoordAndZ(s,i)}return t}function jR(n,t,e,i){i=i!==void 0?i:"top-left";const s=lm(n,t,e);return new Au({extent:n,origin:Ym(n,i),resolutions:s,tileSize:e})}function qR(n){const t=n||{},e=t.extent||at("EPSG:3857").getExtent(),i={extent:e,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:lm(e,t.maxZoom,t.tileSize,t.maxResolution)};return new Au(i)}function lm(n,t,e,i){t=t!==void 0?t:Ky,e=Xe(e!==void 0?e:Oc);const s=he(n),r=wt(n);i=i>0?i:Math.max(r/e[0],s/e[1]);const o=t+1,a=new Array(o);for(let l=0;l<o;++l)a[l]=i/Math.pow(2,l);return a}function ZR(n,t,e,i){const s=Ou(n);return jR(s,t,e,i)}function Ou(n){n=at(n);let t=n.getExtent();if(!t){const e=180*ur.degrees/n.getMetersPerUnit();t=ln(-e,-e,e,e)}return t}class $R extends lu{constructor(t){super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate}),this.on,this.once,this.un,this.opaque_=t.opaque!==void 0?t.opaque:!1,this.tilePixelRatio_=t.tilePixelRatio!==void 0?t.tilePixelRatio:1,this.tileGrid=t.tileGrid!==void 0?t.tileGrid:null;const e=[256,256];this.tileGrid&&Xe(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),e),this.tileCache=new P0(t.cacheSize||0),this.tmpSize=[0,0],this.key_=t.key||"",this.tileOptions={transition:t.transition,interpolate:t.interpolate},this.zDirection=t.zDirection?t.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(t,e){const i=this.getTileCacheForProjection(t);i&&i.expireCache(e)}forEachLoadedTile(t,e,i,s){const r=this.getTileCacheForProjection(t);if(!r)return!1;let o=!0,a,l,h;for(let c=i.minX;c<=i.maxX;++c)for(let u=i.minY;u<=i.maxY;++u)l=xl(e,c,u),h=!1,r.containsKey(l)&&(a=r.get(l),h=a.getState()===j.LOADED,h&&(h=s(a)!==!1)),h||(o=!1);return o}getGutterForProjection(t){return 0}getKey(){return this.key_}setKey(t){this.key_!==t&&(this.key_=t,this.changed())}getOpaque(t){return this.opaque_}getResolutions(t){const e=t?this.getTileGridForProjection(t):this.tileGrid;return e?e.getResolutions():null}getTile(t,e,i,s,r){return q()}getTileGrid(){return this.tileGrid}getTileGridForProjection(t){return this.tileGrid?this.tileGrid:am(t)}getTileCacheForProjection(t){const e=this.getProjection();return yt(e===null||Qe(e,t),"A VectorTile source can only be rendered if it has a projection compatible with the view projection."),this.tileCache}getTilePixelRatio(t){return this.tilePixelRatio_}getTilePixelSize(t,e,i){const s=this.getTileGridForProjection(i),r=this.getTilePixelRatio(e),o=Xe(s.getTileSize(t),this.tmpSize);return r==1?o:Ww(o,r,this.tmpSize)}getTileCoordForTileUrlFunction(t,e){e=e!==void 0?e:this.getProjection();const i=this.getTileGridForProjection(e);return this.getWrapX()&&e.isGlobal()&&(t=VR(i,t,e)),$C(t,i)?t:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(t,e){const i=this.getTileCacheForProjection(e);t>i.highWaterMark&&(i.highWaterMark=t)}useTile(t,e,i,s){}}class JR extends Hi{constructor(t,e){super(t),this.tile=e}}function QR(n,t){const e=/\{z\}/g,i=/\{x\}/g,s=/\{y\}/g,r=/\{-y\}/g;return(function(o,a,l){if(o)return n.replace(e,o[0].toString()).replace(i,o[1].toString()).replace(s,o[2].toString()).replace(r,function(){const h=o[0],c=t.getFullTileRange(h);if(!c)throw new Error("The {-y} placeholder requires a tile grid with extent");return(c.getHeight()-o[2]-1).toString()})})}function tE(n,t){const e=n.length,i=new Array(e);for(let s=0;s<e;++s)i[s]=QR(n[s],t);return cc(i)}function cc(n){return n.length===1?n[0]:(function(t,e,i){if(!t)return;const s=O0(t),r=Nn(s,n.length);return n[r](t,e,i)})}function hm(n){const t=[];let e=/\{([a-z])-([a-z])\}/.exec(n);if(e){const i=e[1].charCodeAt(0),s=e[2].charCodeAt(0);let r;for(r=i;r<=s;++r)t.push(n.replace(e[0],String.fromCharCode(r)));return t}if(e=/\{(\d+)-(\d+)\}/.exec(n),e){const i=parseInt(e[2],10);for(let s=parseInt(e[1],10);s<=i;s++)t.push(n.replace(e[0],s.toString()));return t}return t.push(n),t}class Pu extends $R{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,opaque:t.opaque,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tilePixelRatio:t.tilePixelRatio,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===Pu.prototype.tileUrlFunction,this.tileLoadFunction=t.tileLoadFunction,t.tileUrlFunction&&(this.tileUrlFunction=t.tileUrlFunction),this.urls=null,t.urls?this.setUrls(t.urls):t.url&&this.setUrl(t.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(t){const e=t.target,i=Mt(e),s=e.getState();let r;s==j.LOADING?(this.tileLoadingKeys_[i]=!0,r=gh.TILELOADSTART):i in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[i],r=s==j.ERROR?gh.TILELOADERROR:s==j.LOADED?gh.TILELOADEND:void 0),r!=null&&this.dispatchEvent(new JR(r,e))}setTileLoadFunction(t){this.tileCache.clear(),this.tileLoadFunction=t,this.changed()}setTileUrlFunction(t,e){this.tileUrlFunction=t,this.tileCache.pruneExceptNewestZ(),typeof e<"u"?this.setKey(e):this.changed()}setUrl(t){const e=hm(t);this.urls=e,this.setUrls(e)}setUrls(t){this.urls=t;const e=t.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(tE(t,this.tileGrid),e):this.setKey(e)}tileUrlFunction(t,e,i){}useTile(t,e,i){const s=xl(t,e,i);this.tileCache.containsKey(s)&&this.tileCache.get(s)}}class Ku extends Pu{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,opaque:t.opaque,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction?t.tileLoadFunction:eE,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate!==void 0?t.interpolate:!0,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.crossOrigin=t.crossOrigin!==void 0?t.crossOrigin:null,this.tileClass=t.tileClass!==void 0?t.tileClass:N0,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=t.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const t in this.tileCacheForProjection)if(this.tileCacheForProjection[t].canExpireCache())return!0;return!1}expireCache(t,e){const i=this.getTileCacheForProjection(t);this.tileCache.expireCache(this.tileCache==i?e:{});for(const s in this.tileCacheForProjection){const r=this.tileCacheForProjection[s];r.expireCache(r==i?e:{})}}getGutterForProjection(t){return this.getProjection()&&t&&!Qe(this.getProjection(),t)?0:this.getGutter()}getGutter(){return 0}getKey(){let t=super.getKey();return this.getInterpolate()||(t+=":disable-interpolation"),t}getOpaque(t){return this.getProjection()&&t&&!Qe(this.getProjection(),t)?!1:super.getOpaque(t)}getTileGridForProjection(t){const e=this.getProjection();if(this.tileGrid&&(!e||Qe(e,t)))return this.tileGrid;const i=Mt(t);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=am(t)),this.tileGridForProjection[i]}getTileCacheForProjection(t){const e=this.getProjection();if(!e||Qe(e,t))return this.tileCache;const i=Mt(t);return i in this.tileCacheForProjection||(this.tileCacheForProjection[i]=new P0(this.tileCache.highWaterMark)),this.tileCacheForProjection[i]}createTile_(t,e,i,s,r,o){const a=[t,e,i],l=this.getTileCoordForTileUrlFunction(a,r),h=l?this.tileUrlFunction(l,s,r):void 0,c=new this.tileClass(a,h!==void 0?j.IDLE:j.EMPTY,h!==void 0?h:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return c.key=o,c.addEventListener($.CHANGE,this.handleTileChange.bind(this)),c}getTile(t,e,i,s,r){const o=this.getProjection();if(!o||!r||Qe(o,r))return this.getTileInternal(t,e,i,s,o||r);const a=this.getTileCacheForProjection(r),l=[t,e,i];let h;const c=A0(l);a.containsKey(c)&&(h=a.get(c));const u=this.getKey();if(h&&h.key==u)return h;const g=this.getTileGridForProjection(o),d=this.getTileGridForProjection(r),f=this.getTileCoordForTileUrlFunction(l,r),m=new lc(o,g,r,d,l,f,this.getTilePixelRatio(s),this.getGutter(),(y,_,p,x)=>this.getTileInternal(y,_,p,x,o),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return m.key=u,h?(m.interimTile=h,m.refreshInterimChain(),a.replace(c,m)):a.set(c,m),m}getTileInternal(t,e,i,s,r){let o=null;const a=xl(t,e,i),l=this.getKey();if(!this.tileCache.containsKey(a))o=this.createTile_(t,e,i,s,r,l),this.tileCache.set(a,o);else if(o=this.tileCache.get(a),o.key!=l){const h=o;o=this.createTile_(t,e,i,s,r,l),h.getState()==j.IDLE?o.interimTile=h.interimTile:o.interimTile=h,o.refreshInterimChain(),this.tileCache.replace(a,o)}return o}setRenderReprojectionEdges(t){if(this.renderReprojectionEdges_!=t){this.renderReprojectionEdges_=t;for(const e in this.tileCacheForProjection)this.tileCacheForProjection[e].clear();this.changed()}}setTileGridForProjection(t,e){const i=at(t);if(i){const s=Mt(i);s in this.tileGridForProjection||(this.tileGridForProjection[s]=e)}}clear(){super.clear();for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear()}}function eE(n,t){n.getImage().src=t}class iE extends Ku{constructor(t){t=t||{};const e=t.projection!==void 0?t.projection:"EPSG:3857",i=t.tileGrid!==void 0?t.tileGrid:qR({extent:Ou(e),maxResolution:t.maxResolution,maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});super({attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,opaque:t.opaque,projection:e,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX!==void 0?t.wrapX:!0,transition:t.transition,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.gutter_=t.gutter!==void 0?t.gutter:0}getGutter(){return this.gutter_}}class nE extends y0{constructor(t,e,i,s,r,o,a){let l=t.getExtent();l&&t.canWrapX()&&(l=l.slice(),l[0]=-1/0,l[2]=1/0);let h=e.getExtent();h&&e.canWrapX()&&(h=h.slice(),h[0]=-1/0,h[2]=1/0);const c=h?Qs(i,h):i,u=pi(c),g=qa(t,e,u,s),d=nm,f=new sm(t,e,c,l,g*d,s),m=f.calculateSourceExtent(),y=Ir(m)?null:o(m,g,r),_=y?Q.IDLE:Q.EMPTY,p=y?y.getPixelRatio():1;super(i,s,p,_),this.targetProj_=e,this.maxSourceExtent_=l,this.triangulation_=f,this.targetResolution_=s,this.targetExtent_=i,this.sourceImage_=y,this.sourcePixelRatio_=p,this.interpolate_=a,this.canvas_=null,this.sourceListenerKey_=null}disposeInternal(){this.state==Q.LOADING&&this.unlistenSource_(),super.disposeInternal()}getImage(){return this.canvas_}getProjection(){return this.targetProj_}reproject_(){const t=this.sourceImage_.getState();if(t==Q.LOADED){const e=wt(this.targetExtent_)/this.targetResolution_,i=he(this.targetExtent_)/this.targetResolution_;this.canvas_=rm(e,i,this.sourcePixelRatio_,hc(this.sourceImage_.getResolution()),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_,!0)}this.state=t,this.changed()}load(){if(this.state==Q.IDLE){this.state=Q.LOADING,this.changed();const t=this.sourceImage_.getState();t==Q.LOADED||t==Q.ERROR?this.reproject_():(this.sourceListenerKey_=ot(this.sourceImage_,$.CHANGE,function(e){const i=this.sourceImage_.getState();(i==Q.LOADED||i==Q.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}}unlistenSource_(){Nt(this.sourceListenerKey_),this.sourceListenerKey_=null}}const Sn=4,fh={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"};class sE extends Hi{constructor(t,e){super(t),this.image=e}}class zE extends lu{constructor(t){super({attributions:t.attributions,projection:t.projection,state:t.state,interpolate:t.interpolate!==void 0?t.interpolate:!0}),this.on,this.once,this.un,this.loader=t.loader||null,this.resolutions_=t.resolutions!==void 0?t.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0,this.image=null,this.wantedExtent_,this.wantedResolution_,this.static_=t.loader?t.loader.length===0:!1,this.wantedProjection_=null}getResolutions(){return this.resolutions_}setResolutions(t){this.resolutions_=t}findNearestResolution(t){const e=this.getResolutions();if(e){const i=Qa(e,t,0);t=e[i]}return t}getImage(t,e,i,s){const r=this.getProjection();if(!r||!s||Qe(r,s))return r&&(s=r),this.getImageInternal(t,e,i,s);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&Qe(this.reprojectedImage_.getProjection(),s)&&this.reprojectedImage_.getResolution()==e&&ds(this.reprojectedImage_.getExtent(),t))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new nE(r,s,t,e,i,(o,a,l)=>this.getImageInternal(o,a,l,r),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}getImageInternal(t,e,i,s){if(this.loader){const r=cm(t,e,i,1),o=this.findNearestResolution(e);if(this.image&&(this.static_||this.wantedProjection_===s&&(this.wantedExtent_&&fi(this.wantedExtent_,r)||fi(this.image.getExtent(),r))&&(this.wantedResolution_&&hc(this.wantedResolution_)===o||hc(this.image.getResolution())===o)))return this.image;this.wantedProjection_=s,this.wantedExtent_=r,this.wantedResolution_=o,this.image=new y0(r,o,i,this.loader),this.image.addEventListener($.CHANGE,this.handleImageChange.bind(this))}return this.image}handleImageChange(t){const e=t.target;let i;switch(e.getState()){case Q.LOADING:this.loading=!0,i=fh.IMAGELOADSTART;break;case Q.LOADED:this.loading=!1,i=fh.IMAGELOADEND;break;case Q.ERROR:this.loading=!1,i=fh.IMAGELOADERROR;break;default:return}this.hasListener(i)&&this.dispatchEvent(new sE(i,e))}}function WE(n,t){n.getImage().src=t}function cm(n,t,e,i){const s=t/e,r=pi(n),o=En(wt(n)/s,Sn),a=En(he(n)/s,Sn),l=En((i-1)*o/2,Sn),h=o+2*l,c=En((i-1)*a/2,Sn),u=a+2*c;return ao(r,s,0,[h,u])}function bo(n,t){const e=[];Object.keys(t).forEach(function(s){t[s]!==null&&t[s]!==void 0&&e.push(s+"="+encodeURIComponent(t[s]))});const i=e.join("&");return n=n.replace(/[?&]$/,""),n+=n.includes("?")?"&":"?",n+i}const Za="1.3.0",yg=[101,101];function um(n,t,e,i,s){s.WIDTH=e[0],s.HEIGHT=e[1];const r=i.getAxisOrientation();let o;const a=_c(s.VERSION,"1.3")>=0;return s[a?"CRS":"SRS"]=i.getCode(),a&&r.substr(0,2)=="ne"?o=[t[1],t[0],t[3],t[2]]:o=t,s.BBOX=o.join(","),bo(n,s)}function dm(n,t,e,i,s,r,o){r=Object.assign({REQUEST:"GetMap"},r);const a=t/e,l=[$u(wt(n)/a,Sn),$u(he(n)/a,Sn)];if(e!=1)switch(o){case"geoserver":const c=90*e+.5|0;"FORMAT_OPTIONS"in r?r.FORMAT_OPTIONS+=";dpi:"+c:r.FORMAT_OPTIONS="dpi:"+c;break;case"mapserver":r.MAP_RESOLUTION=90*e;break;case"carmentaserver":case"qgis":r.DPI=90*e;break;default:throw new Error("Unknown `serverType` configured")}return um(s,n,l,i,r)}function $a(n,t){return Object.assign({REQUEST:t,SERVICE:"WMS",VERSION:Za,FORMAT:"image/png",STYLES:"",TRANSPARENT:!0},n)}function BE(n){const t=n.hidpi===void 0?!0:n.hidpi,e=at(n.projection||"EPSG:3857"),i=n.ratio||1.5,s=n.load||v2;return(r,o,a)=>{r=cm(r,o,a,i),a!=1&&(!t||n.serverType===void 0)&&(a=1);const l=dm(r,o,a,e,n.url,$a(n.params,"GetMap"),n.serverType),h=new Image;return n.crossOrigin!==null&&(h.crossOrigin=n.crossOrigin),s(h,l).then(c=>({image:c,extent:r,pixelRatio:a}))}}function HE(n,t,e){if(n.url===void 0)return;const i=at(n.projection||"EPSG:3857"),s=ao(t,e,0,yg),r={QUERY_LAYERS:n.params.LAYERS,INFO_FORMAT:"application/json"};Object.assign(r,$a(n.params,"GetFeatureInfo"),n.params);const o=Xs((t[0]-s[0])/e,Sn),a=Xs((s[3]-t[1])/e,Sn),l=_c(r.VERSION,"1.3")>=0;return r[l?"I":"X"]=o,r[l?"J":"Y"]=a,um(n.url,s,yg,i,r)}function XE(n,t){if(n.url===void 0)return;const e={SERVICE:"WMS",VERSION:Za,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(n.params===void 0||n.params.LAYER===void 0){const i=n.params.LAYERS;if(!(!Array.isArray(i)||i.length===1))return;e.LAYER=i}if(t!==void 0){const i=at(n.projection||"EPSG:3857").getMetersPerUnit()||1,s=28e-5;e.SCALE=t*i/s}return Object.assign(e,n.params),bo(n.url,e)}class rE extends Ku{constructor(t){t=t||{};const e=Object.assign({},t.params),i="TRANSPARENT"in e?e.TRANSPARENT:!0;super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,opaque:!i,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileClass:t.tileClass,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction,url:t.url,urls:t.urls,wrapX:t.wrapX!==void 0?t.wrapX:!0,transition:t.transition,zDirection:t.zDirection}),this.gutter_=t.gutter!==void 0?t.gutter:0,this.params_=e,this.v13_=!0,this.serverType_=t.serverType,this.hidpi_=t.hidpi!==void 0?t.hidpi:!0,this.tmpExtent_=Ue(),this.updateV13_(),this.setKey(this.getKeyForParams_())}getFeatureInfoUrl(t,e,i,s){const r=at(i),o=this.getProjection()||r;let a=this.getTileGrid();a||(a=this.getTileGridForProjection(o));const l=zg(t,r,o),h=qa(o,r,t,e),c=a.getZForResolution(h,this.zDirection),u=a.getResolution(c),g=a.getTileCoordForCoordAndZ(l,c);if(a.getResolutions().length<=g[0])return;let d=a.getTileCoordExtent(g,this.tmpExtent_);const f=this.gutter_;f!==0&&(d=oo(d,u*f,d));const m={QUERY_LAYERS:this.params_.LAYERS};Object.assign(m,$a(this.params_,"GetFeatureInfo"),s);const y=Math.floor((l[0]-d[0])/u),_=Math.floor((d[3]-l[1])/u);return m[this.v13_?"I":"X"]=y,m[this.v13_?"J":"Y"]=_,this.getRequestUrl_(g,d,1,o||r,m)}getLegendUrl(t,e){if(this.urls[0]===void 0)return;const i={SERVICE:"WMS",VERSION:Za,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(e===void 0||e.LAYER===void 0){const s=this.params_.LAYERS;if(!(!Array.isArray(s)||s.length===1))return;i.LAYER=s}if(t!==void 0){const s=this.getProjection()?this.getProjection().getMetersPerUnit():1,r=28e-5;i.SCALE=t*s/r}return Object.assign(i,e),bo(this.urls[0],i)}getGutter(){return this.gutter_}getParams(){return this.params_}getRequestUrl_(t,e,i,s,r){const o=this.urls;if(!o)return;let a;if(o.length==1)a=o[0];else{const l=Nn(O0(t),o.length);a=o[l]}return dm(e,(this.tileGrid||this.getTileGridForProjection(s)).getResolution(t[0]),i,s,a,r,this.serverType_)}getTilePixelRatio(t){return!this.hidpi_||this.serverType_===void 0?1:t}getKeyForParams_(){let t=0;const e=[];for(const i in this.params_)e[t++]=i+"-"+this.params_[i];return e.join("/")}updateParams(t){Object.assign(this.params_,t),this.updateV13_(),this.setKey(this.getKeyForParams_())}updateV13_(){const t=this.params_.VERSION||Za;this.v13_=_c(t,"1.3")>=0}tileUrlFunction(t,e,i){let s=this.getTileGrid();if(s||(s=this.getTileGridForProjection(i)),s.getResolutions().length<=t[0])return;e!=1&&(!this.hidpi_||this.serverType_===void 0)&&(e=1);const r=s.getResolution(t[0]);let o=s.getTileCoordExtent(t,this.tmpExtent_);const a=this.gutter_;a!==0&&(o=oo(o,r*a,o));const l=Object.assign({},$a(this.params_,"GetMap"));return this.getRequestUrl_(t,o,e,i,l)}}class wg extends Ku{constructor(t){const e=t.requestEncoding!==void 0?t.requestEncoding:"KVP",i=t.tileGrid;let s=t.urls;s===void 0&&t.url!==void 0&&(s=hm(t.url)),super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileClass:t.tileClass,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,urls:s,wrapX:t.wrapX!==void 0?t.wrapX:!1,transition:t.transition,zDirection:t.zDirection}),this.version_=t.version!==void 0?t.version:"1.0.0",this.format_=t.format!==void 0?t.format:"image/jpeg",this.dimensions_=t.dimensions!==void 0?t.dimensions:{},this.layer_=t.layer,this.matrixSet_=t.matrixSet,this.style_=t.style,this.requestEncoding_=e,this.setKey(this.getKeyForDimensions_()),s&&s.length>0&&(this.tileUrlFunction=cc(s.map(this.createFromWMTSTemplate.bind(this))))}setUrls(t){this.urls=t;const e=t.join(`
`);this.setTileUrlFunction(cc(t.map(this.createFromWMTSTemplate.bind(this))),e)}getDimensions(){return this.dimensions_}getFormat(){return this.format_}getLayer(){return this.layer_}getMatrixSet(){return this.matrixSet_}getRequestEncoding(){return this.requestEncoding_}getStyle(){return this.style_}getVersion(){return this.version_}getKeyForDimensions_(){const t=this.urls?this.urls.slice(0):[];for(const e in this.dimensions_)t.push(e+"-"+this.dimensions_[e]);return t.join("/")}updateDimensions(t){Object.assign(this.dimensions_,t),this.setKey(this.getKeyForDimensions_())}createFromWMTSTemplate(t){const e=this.requestEncoding_,i={layer:this.layer_,style:this.style_,tilematrixset:this.matrixSet_};e=="KVP"&&Object.assign(i,{Service:"WMTS",Request:"GetTile",Version:this.version_,Format:this.format_}),t=e=="KVP"?bo(t,i):t.replace(/\{(\w+?)\}/g,function(o,a){return a.toLowerCase()in i?i[a.toLowerCase()]:o});const s=this.tileGrid,r=this.dimensions_;return(function(o,a,l){if(!o)return;const h={TileMatrix:s.getMatrixId(o[0]),TileCol:o[1],TileRow:o[2]};Object.assign(h,r);let c=t;return e=="KVP"?c=bo(c,h):c=c.replace(/\{(\w+?)\}/g,function(u,g){return h[g]}),c})}}function UE(n,t){const i=n.Contents.Layer.find(function(N){return N.Identifier==t.layer});if(!i)return null;const s=n.Contents.TileMatrixSet;let r;i.TileMatrixSetLink.length>1?"projection"in t?r=i.TileMatrixSetLink.findIndex(function(N){const lt=s.find(function(F){return F.Identifier==N.TileMatrixSet}).SupportedCRS,z=at(lt),H=at(t.projection);return z&&H?Qe(z,H):lt==t.projection}):r=i.TileMatrixSetLink.findIndex(function(N){return N.TileMatrixSet==t.matrixSet}):r=0,r<0&&(r=0);const o=i.TileMatrixSetLink[r].TileMatrixSet,a=i.TileMatrixSetLink[r].TileMatrixSetLimits;let l=i.Format[0];"format"in t&&(l=t.format),r=i.Style.findIndex(function(N){return"style"in t?N.Title==t.style:N.isDefault}),r<0&&(r=0);const h=i.Style[r].Identifier,c={};"Dimension"in i&&i.Dimension.forEach(function(N,B,lt){const z=N.Identifier;let H=N.Default;H===void 0&&(H=N.Value[0]),c[z]=H});const g=n.Contents.TileMatrixSet.find(function(N){return N.Identifier==o});let d;const f=g.SupportedCRS;if(f&&(d=at(f)),"projection"in t){const N=at(t.projection);N&&(!d||Qe(N,d))&&(d=N)}let m=!1;const y=d.getAxisOrientation().substr(0,2)=="ne";let _=g.TileMatrix[0],p={MinTileCol:0,MinTileRow:0,MaxTileCol:_.MatrixWidth-1,MaxTileRow:_.MatrixHeight-1};if(a){p=a[a.length-1];const N=g.TileMatrix.find(B=>B.Identifier===p.TileMatrix||g.Identifier+":"+B.Identifier===p.TileMatrix);N&&(_=N)}const x=_.ScaleDenominator*28e-5/d.getMetersPerUnit(),M=y?[_.TopLeftCorner[1],_.TopLeftCorner[0]]:_.TopLeftCorner,C=_.TileWidth*x,T=_.TileHeight*x;let R=g.BoundingBox;R&&y&&(R=[R[1],R[0],R[3],R[2]]);let v=[M[0]+C*p.MinTileCol,M[1]-T*(1+p.MaxTileRow),M[0]+C*(1+p.MaxTileCol),M[1]-T*p.MinTileRow];if(R!==void 0&&!fi(R,v)){const N=i.WGS84BoundingBox,B=at("EPSG:4326").getExtent();if(v=R,N)m=N[0]===B[0]&&N[2]===B[2];else{const lt=Cc(R,g.SupportedCRS,"EPSG:4326");m=lt[0]-1e-10<=B[0]&&lt[2]+1e-10>=B[2]}}const P=YR(g,v,a),S=[];let D=t.requestEncoding;if(D=D!==void 0?D:"","OperationsMetadata"in n&&"GetTile"in n.OperationsMetadata){const N=n.OperationsMetadata.GetTile.DCP.HTTP.Get;for(let B=0,lt=N.length;B<lt;++B)if(N[B].Constraint){const H=N[B].Constraint.find(function(F){return F.name=="GetEncoding"}).AllowedValues.Value;if(D===""&&(D=H[0]),D==="KVP")H.includes("KVP")&&S.push(N[B].href);else break}else N[B].href&&(D="KVP",S.push(N[B].href))}return S.length===0&&(D="REST",i.ResourceURL.forEach(function(N){N.resourceType==="tile"&&(l=N.format,S.push(N.template))})),{urls:S,layer:t.layer,matrixSet:o,format:l,projection:d,requestEncoding:D,tileGrid:P,style:h,dimensions:c,wrapX:m,crossOrigin:t.crossOrigin}}var oE=Object.getOwnPropertyDescriptor,aE=(n,t,e,i)=>{for(var s=i>1?void 0:i?oE(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let _g=class extends Ja{connectedCallback(){super.connectedCallback(),this._configureMap()}get type(){return this.getAttribute("type")||"wmts"}get url(){return this.getAttribute("url")||this._url}set url(n){this._url=n}get layer(){return this.getAttribute("layer")||this._layer}set layer(n){this._layer=n}get title(){return this.getAttribute("title")||this._title}set title(n){this._title=n}get _map(){if(this.parentNode)return this.parentNode.map}get _projection(){if(this.parentNode&&this.parentNode instanceof Er)return this.parentNode._projection}get _WMTSSource(){return this._wmtsSource=this._wmtsSource||this._createWMTSSource(),this._wmtsSource}get _vectorSource(){return this._createdVectorSource=this._createdVectorSource||this._createVectorSource(),this._createdVectorSource}get _hasBackgroundLayer(){return this.hasAttribute("background-layer")}get _backgroundType(){return this.getAttribute("background-type")||void 0}get _backgroundOptions(){if(!this._hasBackgroundLayer)return;if(this._hasBackgroundLayer&&!this._backgroundType&&!this.hasAttribute("background-options"))return{url:"https://cartoweb.wms.ngi.be/service",params:{FORMAT:"image/png",LAYERS:"crossborder,topo"}};const n=this.getAttribute("background-options");try{return JSON.parse(n)}catch(t){console.warn("Invalid background-options JSON:",t);return}}get _extent(){return this._projection?.getExtent()}get _matrixSet(){switch(this._projection?.getCode()){case u0():return"BPL2008VL";case g0():return"BPL72VL";default:return"WGS84VL"}}_configureMap(){this._map&&this._map.addBaseLayerAndOverlayMapLayer(this._createBaseLayer(),this._createBaseLayer())}_createWMTSSource(){const n=wt(this._extent)/256,t=new Array(16),e=new Array(16);for(let i=0;i<16;++i)t[i]=n/Math.pow(2,i),e[i]=i;return new wg({url:this.url,layer:this.layer,matrixSet:this._matrixSet,format:"image/png",projection:this._projection,tileGrid:new om({extent:this._extent,origin:un(this._extent),resolutions:t,matrixIds:e}),style:""})}_createVectorSource(){const n=this;return new og({format:new gl({dataProjection:n._projection}),url(){return`${n.url}&typeName=${n.layer}`},strategy:HC})}_createBackgroundLayer(){const n=this._backgroundOptions,t=.3;switch(this._backgroundType){case"xyz":return new wa({source:new iE(n),opacity:t});case"wmts":return new wa({source:new wg(n),opacity:t});case"vector":return new ig({source:new og(n),opacity:t});default:return new wa({source:new rE(n),opacity:t})}}_createBaseLayer(){const n=this.hasAttribute("background-layer"),t=[];switch(n&&t.push(this._createBackgroundLayer()),this.type){case"wmts":t.push(new wa({title:this.title,type:"base",source:this._WMTSSource}));break;case"wfs":t.push(new ig({source:this._vectorSource,style:new Oe({stroke:new _i({color:"rgba(0, 0, 0, 1.0)",width:1}),fill:new ni({color:"rgba(255, 0, 0, 1.0)"})})}));break;default:return null}return new Hn({layers:t})}};_g=aE([uc("vl-map-baselayer")],_g);export{YC as $,Ir as A,TE as B,Uo as C,pE as D,$ as E,ni as F,gl as G,Iw as H,Fo as I,so as J,ii as K,Le as L,Lo as M,AE as N,Lf as O,La as P,Oi as Q,Hi as R,Oe as S,wa as T,xE as U,oc as V,k1 as W,iE as X,_E as Y,Gs as Z,PE as _,_g as a,ns as a$,Ow as a0,ko as a1,Lw as a2,wE as a3,vw as a4,ng as a5,hi as a6,wh as a7,Dt as a8,uE as a9,i1 as aA,jh as aB,fd as aC,fr as aD,at as aE,ln as aF,JM as aG,vE as aH,IE as aI,SE as aJ,e1 as aK,bE as aL,Cc as aM,HC as aN,ag as aO,OE as aP,Cs as aQ,Ne as aR,Ag as aS,jy as aT,rf as aU,Io as aV,Cf as aW,yd as aX,Mn as aY,dd as aZ,LM as a_,Qi as aa,Ra as ab,Ch as ac,Jn as ad,Wg as ae,Pg as af,Bn as ag,ey as ah,dE as ai,xe as aj,OM as ak,LE as al,t1 as am,QM as an,q as ao,EE as ap,Qh as aq,Kt as ar,CE as as,eu as at,su as au,of as av,RE as aw,i0 as ax,NM as ay,AM as az,_i as b,rl as b0,Gt as b1,cl as b2,b0 as b3,Qs as b4,re as b5,Q as b6,$t as b7,il as b8,he as b9,hn as ba,Rc as bb,Bg as bc,fi as bd,zE as be,WE as bf,qa as bg,zg as bh,HE as bi,XE as bj,BE as bk,v2 as bl,AR as bm,ot as bn,Nt as bo,cE as bp,mE as bq,rE as c,ja as d,Er as e,wg as f,om as g,un as h,g0 as i,u0 as j,wt as k,h2 as l,ig as m,vr as n,UE as o,og as p,yt as q,Mt as r,Lg as s,oo as t,xg as u,ty as v,iy as w,pi as x,Xo as y,Ue as z};
