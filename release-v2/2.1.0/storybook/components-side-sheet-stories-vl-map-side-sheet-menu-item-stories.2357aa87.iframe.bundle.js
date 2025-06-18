"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1127],{"../../libs/map/src/components/side-sheet/stories/vl-map-side-sheet-menu-item.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{MapSideSheetMenuItemDefault:()=>m,__namedExportsOrder:()=>c,default:()=>o});var r=s("../../resources/utils-storybook/index.ts"),l=s("../../node_modules/lit-html/lit-html.js"),i=s("../../node_modules/lit/directives/unsafe-html.js");s("../../libs/map/src/vl-map.ts"),s("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts");let a={...r.D8,href:"#",title:"Terug",defaultSlot:""},n={...r.RN,href:{name:"href",description:"De link van het menu item.",table:{type:{summary:r.QE.URL},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.href}}},title:{name:"title",description:"De titel van het menu item.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.title}}},defaultSlot:{name:"[default]",description:"De inhoud van het menu item.",table:{type:{summary:r.QE.HTML},category:r.R6.SLOTS}}},o={id:"map-side-sheet-side-sheet-menu-item",title:"map/side-sheet/side-sheet-menu-item",tags:["autodocs"],args:a,argTypes:n},m=(0,r._7)(a,({title:e,href:t,defaultSlot:s})=>(0,l.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>
                <vl-map-side-sheet-menu>
                    <vl-map-side-sheet-menu-item title=${e} href=${t}>
                        ${(0,i._)(s)}
                    </vl-map-side-sheet-menu-item>
                </vl-map-side-sheet-menu>
            </vl-map-side-sheet>
        </vl-map>
    `);m.storyName="vl-map-side-sheet-menu-item default",m.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story(mapSideSheetMenuItemArgs, ({\n  title,\n  href,\n  defaultSlot\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-side-sheet>\n                <vl-map-side-sheet-menu>\n                    <vl-map-side-sheet-menu-item title=${title} href=${href}>\n                        ${unsafeHTML(defaultSlot)}\n                    </vl-map-side-sheet-menu-item>\n                </vl-map-side-sheet-menu>\n            </vl-map-side-sheet>\n        </vl-map>\n    `)",...m.parameters?.docs?.source}}};let c=["MapSideSheetMenuItemDefault"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,s)=>{s.d(t,{_:()=>a});var r=s("../../node_modules/lit-html/lit-html.js"),l=s("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends l.WL{constructor(e){if(super(e),this.et=r.s6,e.type!==l.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===r.s6||null==e)return this.vt=void 0,this.et=e;if(e===r.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;var a=(0,l.u$)(i)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,s)=>{s.d(t,{_:()=>r._});var r=s("../../node_modules/lit-html/directives/unsafe-html.js")},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,s)=>{s.d(t,{L:()=>i});var r=s("../../libs/common/src/index.ts"),l=s("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class i extends l.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}i=function(e,t,s,r){var l,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(i<3?l(a):i>3?l(t,s,a):l(t,s))||a);return i>3&&a&&Object.defineProperty(t,s,a),a}([(0,r.M1)("vl-map-baselayer-grb-gray")],i)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts":(e,t,s)=>{var r=s("../../libs/common/src/index.ts"),l=s("../../libs/components/src/atom/index.ts");class i extends r.F9{static get _observedAttributes(){return["title","href"]}constructor(){super(`
      <style>
        ${l.ey}
        ${l.mU}
        ${(0,l.L3)(".vl-link")}


        .vl-map-side-sheet-menu-item {
          background: #e8ebee;
          padding: 2rem;
        }

        slot {
          padding: 1.5rem;
          display: block;
        }
      </style>
      <div>
        <div class="vl-map-side-sheet-menu-item">
          <a id="vl-map-side-sheet-menu-item-link" class="vl-link" href="#">
            <span class="vl-icon vl-icon--arrow-left-fat vl-link__icon vl-link__icon--before"></span><span id="title">Terug</span>
          </a>
        </div>
        <slot></slot>
      </div>
    `)}get _titleElement(){return this._shadow?.querySelector("#title")}get _hrefElement(){return this._shadow?.querySelector("#vl-map-side-sheet-menu-item-link")}_titleChangedCallback(e,t){t&&(this._titleElement.innerText=t)}_hrefChangedCallback(e,t){t&&this._hrefElement.setAttribute("href",t)}}i=function(e,t,s,r){var l,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(i<3?l(a):i>3?l(t,s,a):l(t,s))||a);return i>3&&a&&Object.defineProperty(t,s,a),a}([(0,r.M1)("vl-map-side-sheet-menu-item")],i)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts":(e,t,s)=>{var r=s("../../libs/common/src/index.ts"),l=s("../../libs/styles/src/index.ts");class i extends r.F9{constructor(){super(`
      <style>
        ${l.oi.join("")}
        :host {
          margin: -1.5rem;
          display: block;
        }
      </style>
      <slot></slot>
    `)}}i=function(e,t,s,r){var l,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(i<3?l(a):i>3?l(t,s,a):l(t,s))||a);return i>3&&a&&Object.defineProperty(t,s,a),a}([(0,r.M1)("vl-map-side-sheet-menu")],i)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts":(e,t,s)=>{var r=s("../../libs/common/src/index.ts"),l=s("../../libs/components/src/block/index.ts");class i extends l.VH{constructor(){super(`
      :host {
        width: 3.5rem;
        transition: width 0.1s;
      }

      :host([open]) {
        width: var(--vl-side-sheet-width,calc(100%/3));
      }

      .vl-side-sheet__toggle {
        margin: 10px;
      }

      :host([open]) .vl-side-sheet__toggle {
        margin-left: 0px;
      }

      ::slotted(*) {
        margin-bottom: 20px;
      }
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("absolute",""),this.hasAttribute("right")||this.setAttribute("left",""),this._openChangedCallback()}_rightChangedCallback(e,t){void 0!=t?this.removeAttribute("left"):this.setAttribute("left","")}}i=function(e,t,s,r){var l,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(i<3?l(a):i>3?l(t,s,a):l(t,s))||a);return i>3&&a&&Object.defineProperty(t,s,a),a}([(0,r.M1)("vl-map-side-sheet")],i)}}]);