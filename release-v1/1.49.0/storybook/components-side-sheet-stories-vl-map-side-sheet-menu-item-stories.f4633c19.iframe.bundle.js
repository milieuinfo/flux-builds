"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1127],{"../../libs/map/src/components/side-sheet/stories/vl-map-side-sheet-menu-item.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{MapSideSheetMenuItemDefault:()=>m,__namedExportsOrder:()=>d,default:()=>o});var l=s("../../libs/common/storybook/src/index.ts"),i=s("../../node_modules/lit-html/lit-html.js"),a=s("../../node_modules/lit/directives/unsafe-html.js");s("../../libs/map/src/vl-map.ts"),s("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts");let r={...l.D8,href:"#",title:"Terug",defaultSlot:""},n={...(0,l.RN)(),href:{name:"data-vl-href",description:"De link van het menu item.",table:{type:{summary:l.QE.URL},category:l.R6.ATTRIBUTES,defaultValue:{summary:r.href}}},title:{name:"data-vl-title",description:"De titel van het menu item.",table:{type:{summary:l.QE.STRING},category:l.R6.ATTRIBUTES,defaultValue:{summary:r.title}}},defaultSlot:{name:"[default]",description:"De inhoud van het menu item.",table:{type:{summary:l.QE.HTML},category:l.R6.SLOTS}}},o={id:"map-side-sheet-side-sheet-menu-item",title:"map/side-sheet/side-sheet-menu-item",tags:["autodocs"],args:r,argTypes:n},m=(0,l._7)(r,({title:e,href:t,defaultSlot:s})=>(0,i.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>
                <vl-map-side-sheet-menu>
                    <vl-map-side-sheet-menu-item data-vl-title=${e} data-vl-href=${t}>
                        ${(0,a._)(s)}
                    </vl-map-side-sheet-menu-item>
                </vl-map-side-sheet-menu>
            </vl-map-side-sheet>
        </vl-map>
    `);m.storyName="vl-map-side-sheet-menu-item default",m.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story(mapSideSheetMenuItemArgs, ({\n  title,\n  href,\n  defaultSlot\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-side-sheet>\n                <vl-map-side-sheet-menu>\n                    <vl-map-side-sheet-menu-item data-vl-title=${title} data-vl-href=${href}>\n                        ${unsafeHTML(defaultSlot)}\n                    </vl-map-side-sheet-menu-item>\n                </vl-map-side-sheet-menu>\n            </vl-map-side-sheet>\n        </vl-map>\n    `)",...m.parameters?.docs?.source}}};let d=["MapSideSheetMenuItemDefault"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,s)=>{s.d(t,{_:()=>r});var l=s("../../node_modules/lit-html/lit-html.js"),i=s("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends i.WL{constructor(e){if(super(e),this.et=l.s6,e.type!==i.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===l.s6||null==e)return this.vt=void 0,this.et=e;if(e===l.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;var r=(0,i.u$)(a)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,s)=>{s.d(t,{_:()=>l._});var l=s("../../node_modules/lit-html/directives/unsafe-html.js")},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,s)=>{s.d(t,{L:()=>a});var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class a extends i.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}a=function(e,t,s,l){var i,a=arguments.length,r=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,l);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(r=(a<3?i(r):a>3?i(t,s,r):i(t,s))||r);return a>3&&r&&Object.defineProperty(t,s,r),r}([(0,l.M1)("vl-map-baselayer-grb-gray")],a)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts":(e,t,s)=>{var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../libs/common/utilities/src/css/index.ts");class a extends(0,l.H3)(HTMLElement){static get _observedAttributes(){return["title","href"]}constructor(){super(`
      <style>
        ${i.ey}
        ${i.mU}
        ${(0,i.L3)(".vl-link-next")}


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
          <a id="vl-map-side-sheet-menu-item-link" class="vl-link-next" href="#">
            <span class="vl-icon vl-icon--arrow-left-fat vl-link-next__icon vl-link-next__icon--before"></span><span id="title">Terug</span>
          </a>
        </div>
        <slot></slot>
      </div>
    `)}get _titleElement(){return this._shadow.querySelector("#title")}get _hrefElement(){return this._shadow.querySelector("#vl-map-side-sheet-menu-item-link")}_titleChangedCallback(e,t){t&&(this._titleElement.innerText=t)}_hrefChangedCallback(e,t){t&&this._hrefElement.setAttribute("href",t)}}a=function(e,t,s,l){var i,a=arguments.length,r=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,l);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(r=(a<3?i(r):a>3?i(t,s,r):i(t,s))||r);return a>3&&r&&Object.defineProperty(t,s,r),r}([(0,l.M1)("vl-map-side-sheet-menu-item")],a)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts":(e,t,s)=>{var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../libs/elements/src/index.ts");class a extends(0,l.H3)(HTMLElement){constructor(){super(`
      <style>
        ${i.hF.join("")}
        :host {
          margin: -1.5rem;
          display: block;
        }
      </style>
      <slot></slot>
    `)}}a=function(e,t,s,l){var i,a=arguments.length,r=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,l);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(r=(a<3?i(r):a>3?i(t,s,r):i(t,s))||r);return a>3&&r&&Object.defineProperty(t,s,r),r}([(0,l.M1)("vl-map-side-sheet-menu")],a)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts":(e,t,s)=>{var l=s("../../libs/common/utilities/src/index.ts"),i=s("../../libs/components/src/index.ts");class a extends i.VH{constructor(){super(`
      :host {
        width: 3.5rem;
        transition: width 0.1s;
      }

      :host([data-vl-open]) {
        width: var(--vl-side-sheet-width,calc(100%/3));
      }

      .vl-side-sheet__toggle {
        margin: 10px;
      }

      :host([data-vl-open]) .vl-side-sheet__toggle {
        margin-left: 0px;
      }

      ::slotted(*) {
        margin-bottom: 20px;
      }
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("data-vl-absolute",""),this.hasAttribute("data-vl-right")||this.setAttribute("data-vl-left",""),this._openChangedCallback()}_rightChangedCallback(e,t){void 0!=t?this.removeAttribute("data-vl-left"):this.setAttribute("data-vl-left","")}}a=function(e,t,s,l){var i,a=arguments.length,r=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,l);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(r=(a<3?i(r):a>3?i(t,s,r):i(t,s))||r);return a>3&&r&&Object.defineProperty(t,s,r),r}([(0,l.M1)("vl-map-side-sheet")],a)}}]);