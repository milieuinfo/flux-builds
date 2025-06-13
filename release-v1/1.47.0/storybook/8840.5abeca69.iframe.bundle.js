"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8840],{"../../node_modules/vidstack/node_modules/lit-html/async-directive.js":(e,t,s)=>{s.d(t,{Kq:()=>u,OA:()=>i.OA,u$:()=>i.u$});var l=s("../../node_modules/vidstack/node_modules/lit-html/directive-helpers.js"),i=s("../../node_modules/vidstack/node_modules/lit-html/directive.js"),n=(e,t)=>{var s,l=e._$AN;if(void 0===l)return!1;for(var i of l)null===(s=i._$AO)||void 0===s||s.call(i,t,!1),n(i,t);return!0},a=e=>{var t,s;do{if(void 0===(t=e._$AM))break;(s=t._$AN).delete(e),e=t}while(0===(null==s?void 0:s.size))},o=e=>{for(var t;t=e._$AM;e=t){var s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),c(t)}};function r(e){void 0!==this._$AN?(a(this),this._$AM=e,o(this)):this._$AM=e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size){if(t){if(Array.isArray(l))for(var o=s;o<l.length;o++)n(l[o],!1),a(l[o]);else null!=l&&(n(l,!1),a(l))}else n(this,e)}}var c=e=>{var t,s;e.type==i.OA.CHILD&&(null!==(t=e._$AP)&&void 0!==t||(e._$AP=d),null!==(s=e._$AQ)&&void 0!==s||(e._$AQ=r))};class u extends i.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),o(this),this.isConnected=e._$AU}_$AO(e){var t,s,l=!(arguments.length>1)||void 0===arguments[1]||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),l&&(n(this,e),a(this))}setValue(e){if((0,l.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{var t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},"../../node_modules/vidstack/node_modules/lit-html/directive-helpers.js":(e,t,s)=>{s.d(t,{Rt:()=>i,mY:()=>a});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{I:l}=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js").ge,i=e=>void 0===e.strings,n={},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return e._$AH=t}},"../../node_modules/vidstack/node_modules/lit-html/directive.js":(e,t,s)=>{s.d(t,{OA:()=>l,WL:()=>n,u$:()=>i});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>function(){for(var t=arguments.length,s=Array(t),l=0;l<t;l++)s[l]=arguments[l];return{_$litDirective$:e,values:s}};class n{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"../../node_modules/vidstack/node_modules/lit-html/directives/if-defined.js":(e,t,s)=>{s.d(t,{J:()=>i});var l=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js"),i=e=>null!=e?e:l.s6},"../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-html.js":(e,t,s)=>{s.d(t,{D:()=>n,_:()=>a});var l=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js"),i=s("../../node_modules/vidstack/node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends i.WL{constructor(e){if(super(e),this.et=l.s6,e.type!==i.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===l.s6||null==e)return this.ft=void 0,this.et=e;if(e===l.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;var t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}n.directiveName="unsafeHTML",n.resultType=1;var a=(0,i.u$)(n)},"../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-svg.js":(e,t,s)=>{s.d(t,{T:()=>a});var l=s("../../node_modules/vidstack/node_modules/lit-html/directive.js"),i=s("../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-html.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends i.D{}n.directiveName="unsafeSVG",n.resultType=2;var a=(0,l.u$)(n)},"../../node_modules/vidstack/prod/chunks/vidstack-7xep0lg7.js":(e,t,s)=>{s.d(t,{In:()=>y,UT:()=>h,kj:()=>m,xZ:()=>c});var l=s("../../node_modules/vidstack/prod/chunks/vidstack-CRlI3Mh7.js"),i=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js"),n=s("../../node_modules/vidstack/node_modules/lit-html/directives/if-defined.js"),a=s("../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-svg.js"),o=s("../../node_modules/vidstack/node_modules/lit-html/async-directive.js"),r=s("../../node_modules/vidstack/prod/chunks/vidstack-Cpte_fRf.js");class d extends o.Kq{#e=null;#t=!1;#s=null;constructor(e){super(e),this.#t=e.type===o.OA.ATTRIBUTE||e.type===o.OA.BOOLEAN_ATTRIBUTE}render(e){return e!==this.#e&&(this.disconnected(),this.#e=e,this.isConnected&&this.#l()),this.#e?this.#i((0,l.se)(this.#e)):i.s6}reconnected(){this.#l()}disconnected(){this.#s?.(),this.#s=null}#l(){this.#e&&(this.#s=(0,l.QZ)(this.#n.bind(this)))}#i(e){return this.#t?(0,n.J)(e):e}#a(e){this.setValue(this.#i(e))}#n(){this.#a(this.#e?.())}}function c(e){return(0,o.u$)(d)((0,l.EW)(e))}class u{#o;#r;elements=new Set;constructor(e,t){this.#o=e,this.#r=t}connect(){this.#d();let e=new MutationObserver(this.#c);for(let t of this.#o)e.observe(t,{childList:!0,subtree:!0});(0,l.zp)(()=>e.disconnect()),(0,l.zp)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(e,t){(0,l.vA)(e)?(t.textContent="",t.append(e)):((0,i.XX)(null,t),(0,i.XX)(e,t)),t.style.display||(t.style.display="contents");let s=t.firstElementChild;if(!s)return;let n=t.getAttribute("data-class");n&&s.classList.add(...n.split(" "))}#c=(0,l.s_)(this.#d.bind(this));#d(e){if(e&&!e.some(e=>e.addedNodes.length))return;let t=!1;for(let e of this.#o.flatMap(e=>[...e.querySelectorAll("slot")]))!e.hasAttribute("name")||this.elements.has(e)||(this.elements.add(e),t=!0);t&&this.#r(this.elements)}}let p=0,_="data-slot-id";class m{#o;slots;constructor(e){this.#o=e,this.slots=new u(e,this.#d.bind(this))}connect(){this.slots.connect(),this.#d();let e=new MutationObserver(this.#c);for(let t of this.#o)e.observe(t,{childList:!0});(0,l.zp)(()=>e.disconnect())}#c=(0,l.s_)(this.#d.bind(this));#d(){for(let e of this.#o)for(let t of e.children){if(1!==t.nodeType)continue;let e=t.getAttribute("slot");if(!e)continue;t.style.display="none";let s=t.getAttribute(_);for(let l of(s||t.setAttribute(_,s=++p+""),this.slots.elements)){if(l.getAttribute("name")!==e||l.getAttribute(_)===s)continue;let i=document.importNode(t,!0);e.includes("-icon")&&i.classList.add("vds-icon"),i.style.display="",i.removeAttribute("slot"),this.slots.assign(i,l),l.setAttribute(_,s)}}}}function y({name:e,class:t,state:s,paths:o,viewBox:r="0 0 32 32"}){return(0,i.qy)`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${r}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,n.J)(e??s)}
  >
    ${(0,l.Kg)(o)?(0,a.T)(o):c(o)}
  </svg>`}class v{#u={};#p=!1;slots;constructor(e){this.slots=new u(e,this.#_.bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(e=>{this.#u=e,this.#p=!0,this.#_()})}*#m(){for(let e of Object.keys(this.#u)){let t=`${e}-icon`;for(let s of this.slots.elements)s.name===t&&(yield{icon:this.#u[e],slot:s})}}#_(){if(this.#p)for(let{icon:e,slot:t}of this.#m())this.slots.assign(e,t)}}class h extends v{connect(){super.connect();let{player:e}=(0,r.$c)();if(!e.el)return;let t,s=new IntersectionObserver(e=>{e[0]?.isIntersecting&&(t?.(),t=void 0,this.load())});s.observe(e.el),t=(0,l.zp)(()=>s.disconnect())}}},"../../node_modules/vidstack/prod/define/plyr-layout.js":(e,t,s)=>{var l=s("../../node_modules/vidstack/prod/chunks/vidstack-CRlI3Mh7.js"),i=s("../../node_modules/vidstack/prod/chunks/vidstack-BOLMn4nu.js"),n=s("../../node_modules/vidstack/node_modules/lit-html/lit-html.js"),a=s("../../node_modules/vidstack/prod/chunks/vidstack-Cpte_fRf.js");let o=(0,l.q6)();function r(){return(0,l.NT)(o)}let d={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]};class c extends l.uA{static props=d;#y;onSetup(){this.#y=(0,a.$c)(),(0,l.Pp)(o,{...this.$props,previewTime:(0,l.O)(0)})}}var u=s("../../node_modules/vidstack/prod/chunks/vidstack-7xep0lg7.js"),p=s("../../node_modules/vidstack/prod/chunks/vidstack-CwTj4H1w.js"),_=s("../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-html.js"),m=s("../../node_modules/vidstack/prod/chunks/vidstack-vDnjyKV8.js");s("../../node_modules/vidstack/node_modules/lit-html/directives/if-defined.js"),s("../../node_modules/vidstack/node_modules/lit-html/directives/unsafe-svg.js"),s("../../node_modules/vidstack/node_modules/lit-html/async-directive.js");class y extends u.UT{async loadIcons(){let e=(await s.e(7465).then(s.bind(s,"../../node_modules/vidstack/prod/chunks/vidstack-DXxIKXmd.js"))).icons,t={};for(let s of Object.keys(e))t[s]=(0,u.In)({name:s,paths:e[s],viewBox:"0 0 18 18"});return t}}function v(e,t){return e()?.[t]??t}function h(){let e=(0,a.$c)(),{translations:t}=r(),{title:s}=e.$state,l=(0,u.xZ)(()=>`${v(t,"Play")}, ${s()}`);return(0,n.qy)`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${l}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function f(){let{poster:e}=(0,a.$c)().$state,t=(0,u.xZ)(()=>`background-image: url("${e()}");`);return(0,n.qy)`<div class="plyr__poster" style=${t}></div>`}function $(e){switch(e){case"airplay":return function(){let{translations:e}=r();return(0,n.qy)`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${g(e,"AirPlay")}</span>
    </media-airplay-button>
  `}();case"captions":return function(){let{translations:e}=r(),t=g(e,"Disable captions"),s=g(e,"Enable captions");return(0,n.qy)`
    <media-caption-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="captions"
    >
      <slot name="captions-on-icon" data-class="icon--pressed"></slot>
      <slot name="captions-off-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${t}</span>
      <span class="label--not-pressed plyr__tooltip">${s}</span>
    </media-caption-button>
  `}();case"current-time":return function(){let e=(0,a.$c)(),{translations:t,invertTime:s,toggleTime:i,displayDuration:o}=r(),d=(0,l.O)((0,l.se)(s));function c(e){!i()||o()||(0,l.kx)(e)&&!(0,l.SK)(e)||d.set(e=>!e)}return(0,u.xZ)(()=>{let{streamType:s}=e.$state,l=g(t,"LIVE"),i=g(t,"Current time"),a=(0,u.xZ)(()=>!o()&&d());return"live"===s()||"ll-live"===s()?(0,n.qy)`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${l}</span>
          </media-live-button>
        `:(0,n.qy)`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${i}
            ?remainder=${a}
            @pointerup=${c}
            @keydown=${c}
          ></media-time>
          ${(0,u.xZ)(()=>o()?b():null)}
        `})}();case"download":return(0,u.xZ)(()=>{let e=(0,a.$c)(),{translations:t,download:s}=r(),{title:l,source:i}=e.$state,o=i(),d=s(),c=(0,m.d_)({title:l(),src:o,download:d}),u=g(t,"Download");return c?(0,n.qy)`
          <a
            class="plyr__controls__item plyr__control"
            href=${c.url+`?download=${c.name}`}
            download=${c.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${u}</span>
          </a>
        `:null});case"duration":return b();case"fast-forward":return function(){let{translations:e,seekTime:t}=r(),s=(0,u.xZ)(()=>`${v(e,"Forward")} ${t()}s`),l=(0,u.xZ)(t);return(0,n.qy)`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${l}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"fullscreen":return function(){let{translations:e}=r(),t=g(e,"Enter Fullscreen"),s=g(e,"Exit Fullscreen");return(0,n.qy)`
    <media-fullscreen-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="fullscreen"
    >
      <slot name="enter-fullscreen-icon" data-class="icon--pressed"></slot>
      <slot name="exit-fullscreen-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-fullscreen-button>
  `}();case"mute":case"volume":case"mute+volume":var t;return t=e,(0,u.xZ)(()=>(0,n.qy)`
      <div class="plyr__controls__item plyr__volume">
        ${["mute"===e||"mute+volume"===e?function(){let{translations:e}=r(),t=g(e,"Mute"),s=g(e,"Unmute");return(0,n.qy)`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}():null,"volume"===e||"mute+volume"===e?function(){let{translations:e}=r(),t=g(e,"Volume");return(0,n.qy)`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}():null]}
      </div>
    `);case"pip":return function(){let{translations:e}=r(),t=g(e,"Enter PiP"),s=g(e,"Exit PiP");return(0,n.qy)`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}();case"play":return function(){let{translations:e}=r(),t=g(e,"Play"),s=g(e,"Pause");return(0,n.qy)`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}();case"progress":return function(){let{duration:e,viewType:t}=(0,a.$c)().$state,{translations:s,markers:i,thumbnails:o,seekTime:d,previewTime:c}=r(),p=g(s,"Seek"),m=(0,l.O)(null),y=(0,u.xZ)(()=>{let e=m();return e?(0,n.qy)`<span class="plyr__progress__marker-label">${(0,_._)(e.label)}<br /></span>`:null});function v(){m.set(this)}function h(){m.set(null)}return(0,n.qy)`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${(0,u.xZ)(d)}
          aria-label=${p}
          @media-seeking-request=${function(e){c.set(e.detail)}}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${(0,u.xZ)(function(){let e=o(),s=(0,u.xZ)(()=>"audio"===t());return e?(0,n.qy)`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${s}>
            <media-slider-thumbnail .src=${e} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${y}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:(0,n.qy)`
          <span class="plyr__tooltip">
            ${y}
            <media-slider-value></media-slider-value>
          </span>
        `})}${(0,u.xZ)(function(){let t=e();return Number.isFinite(t)?i()?.map(e=>n.qy`
        <span
          class="plyr__progress__marker"
          @mouseenter=${v.bind(e)}
          @mouseleave=${h}
          style=${`left: ${e.time/t*100}%;`}
        ></span>
      `):null})}
        </media-time-slider>
      </div>
    </div>
  `}();case"restart":return function(){let{translations:e}=r(),{remote:t}=(0,a.$c)(),s=g(e,"Restart");function i(e){(!(0,l.kx)(e)||(0,l.SK)(e))&&t.seek(0,e)}return(0,n.qy)`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${i}
      @keydown=${i}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </button>
  `}();case"rewind":return function(){let{translations:e,seekTime:t}=r(),s=(0,u.xZ)(()=>`${v(e,"Rewind")} ${t()}s`),l=(0,u.xZ)(()=>-1*t());return(0,n.qy)`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${l}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"settings":return function(){let{translations:e}=r(),t=g(e,"Settings");return(0,n.qy)`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[k({label:"Audio",children:function(){let{translations:e}=r();return(0,n.qy)`
    <media-audio-radio-group empty-label=${g(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}()}),k({label:"Captions",children:function(){let{translations:e}=r();return(0,n.qy)`
    <media-captions-radio-group off-label=${g(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}()}),k({label:"Quality",children:function(){let{translations:e}=r();return(0,n.qy)`
    <media-quality-radio-group auto-label=${g(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}()}),k({label:"Speed",children:function(){let{translations:e,speed:t}=r();return(0,n.qy)`
    <media-speed-radio-group .rates=${t} normal-label=${g(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}()})]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}();default:return null}}function b(){let{translations:e}=r(),t=g(e,"Duration");return(0,n.qy)`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function k({label:e,children:t}){let s=(0,l.O)(!1);return(0,n.qy)`
    <media-menu @open=${()=>s.set(!0)} @close=${()=>s.set(!1)}>
      ${function({open:e,label:t}){var s;let{translations:l}=r(),i=(0,u.xZ)(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);return(0,n.qy)`
    <media-menu-button class=${i} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${s=e,(0,u.xZ)(()=>e()?"true":"false")}>
        ${g(l,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${function(){let t=g(l,"Go back to previous menu");return(0,u.xZ)(()=>e()?(0,n.qy)`<span class="plyr__sr-only">${t}</span>`:null)}()}
    </media-menu-button>
  `}({label:e,open:s})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function g(e,t){return(0,u.xZ)(()=>v(e,t))}class q extends(0,l.xr)(p.W,c){static tagName="media-plyr-layout";#y;onSetup(){this.forwardKeepAlive=!1,this.#y=(0,a.$c)()}onConnect(){this.#y.player.el?.setAttribute("data-layout","plyr"),(0,l.zp)(()=>this.#y.player.el?.removeAttribute("data-layout")),function(e,t){let{canAirPlay:s,canFullscreen:i,canPictureInPicture:n,controlsHidden:a,currentTime:o,fullscreen:r,hasCaptions:d,isAirPlayConnected:c,paused:u,pictureInPicture:p,playing:_,pointer:m,poster:y,textTrack:v,viewType:h,waiting:f}=t.$state;e.classList.add("plyr"),e.classList.add("plyr--full-ui");let $={"plyr--airplay-active":c,"plyr--airplay-supported":s,"plyr--fullscreen-active":r,"plyr--fullscreen-enabled":i,"plyr--hide-controls":a,"plyr--is-touch":()=>"coarse"===m(),"plyr--loading":f,"plyr--paused":u,"plyr--pip-active":p,"plyr--pip-enabled":n,"plyr--playing":_,"plyr__poster-enabled":y,"plyr--stopped":()=>u()&&0===o(),"plyr--captions-active":v,"plyr--captions-enabled":d},b=(0,l.z2)();for(let t of Object.keys($))b.add((0,l.QZ)(()=>void e.classList.toggle(t,!!$[t]())));b.add((0,l.QZ)(()=>{let t=`plyr--${h()}`;return e.classList.add(t),()=>e.classList.remove(t)}),(0,l.QZ)(()=>{var s;let{$provider:l}=t,i=l()?.type,n=`plyr--${"audio"===(s=i)||"video"===i?"html5":i}`;return e.classList.toggle(n,!!i),()=>e.classList.remove(n)})),()=>b.empty()}(this,this.#y),(0,l.QZ)(()=>{this.$props.customIcons()?new u.kj([this]).connect():new y([this]).connect()})}render(){return(0,u.xZ)(this.#v.bind(this))}#v(){let{viewType:e}=this.#y.$state;return"audio"===e()?function(){let e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=r(),s=(0,u.xZ)(()=>t().filter(t=>!e.has(t)).map($));return(0,n.qy)`<div class="plyr__controls">${s}</div>`}():"video"===e()?function(){let e=(0,a.$c)(),{load:t}=e.$props,{canLoad:s}=e.$state;return(0,l.EW)(()=>"play"===t()&&!s())()?[h(),f()]:[function(){let{controls:e}=r();return(0,u.xZ)(()=>e().includes("play-large")?h():null)}(),function(){let{thumbnails:e,previewTime:t}=r();return(0,n.qy)`
    <media-thumbnail
      .src=${(0,u.xZ)(e)}
      class="plyr__preview-scrubbing"
      time=${(0,u.xZ)(()=>t())}
    ></media-thumbnail>
  `}(),f(),function(){let{controls:e}=r(),t=(0,u.xZ)(()=>e().map($));return(0,n.qy)`<div class="plyr__controls">${t}</div>`}(),(0,u.xZ)(()=>{let{clickToPlay:e,clickToFullscreen:t}=r();return[e()?(0,n.qy)`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?(0,n.qy)`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]}),function(){let e=(0,a.$c)(),t=(0,l.O)(void 0),s=(0,u.xZ)(()=>(0,_._)(t()?.text));return(0,l.QZ)(()=>{let s=e.$state.textTrack();if(s)return i(),(0,l.k6)(s,"cue-change",i);function i(){t.set(s?.activeCues[0])}}),(0,n.qy)`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${s}</span>
    </div>
  `}()]}():null}}var A=s("../../node_modules/vidstack/prod/chunks/vidstack-DiirHtXs.js");(0,l.Xq)(q),(0,l.Xq)(A.MediaPosterElement),(0,l.Xq)(i.tV),(0,l.Xq)(i.M0),(0,l.Xq)(i.Th),(0,l.Xq)(i.yA),(0,l.Xq)(i.Ov),(0,l.Xq)(i.Z4),(0,l.Xq)(i.py),(0,l.Xq)(i.L4),(0,l.Xq)(i.cZ),(0,l.Xq)(i.zR),(0,l.Xq)(i.MA),(0,l.Xq)(i.cw),(0,l.Xq)(i.xi),(0,l.Xq)(i.eq),(0,l.Xq)(i.SI),(0,l.Xq)(i.mo),(0,l.Xq)(i.T$),(0,l.Xq)(i.DW),(0,l.Xq)(i.ES),(0,l.Xq)(i.Yp),(0,l.Xq)(i.Q_),(0,l.Xq)(i.sE),(0,l.Xq)(i.pt)}}]);