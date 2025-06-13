"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1127],{"../../libs/map/src/components/side-sheet/stories/vl-map-side-sheet-menu-item.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{MapSideSheetMenuItemDefault:()=>m,__namedExportsOrder:()=>d,default:()=>o});var a=s("../../libs/common/storybook/src/index.ts"),l=s("../../node_modules/lit-html/lit-html.js"),r=s("../../node_modules/lit/directives/unsafe-html.js");s("../../libs/map/src/vl-map.ts"),s("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts");let i={...a.D8,href:"#",title:"Terug",defaultSlot:""},n={...(0,a.RN)(),href:{name:"data-vl-href",description:"De link van het menu item.",table:{type:{summary:a.QE.URL},category:a.R6.ATTRIBUTES,defaultValue:{summary:i.href}}},title:{name:"data-vl-title",description:"De titel van het menu item.",table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:i.title}}},defaultSlot:{name:"[default]",description:"De inhoud van het menu item.",table:{type:{summary:a.QE.HTML},category:a.R6.SLOTS}}},o={id:"map-side-sheet-side-sheet-menu-item",title:"map/side-sheet/side-sheet-menu-item",tags:["autodocs"],args:i,argTypes:n},m=(0,a._7)(i,({title:e,href:t,defaultSlot:s})=>(0,l.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>
                <vl-map-side-sheet-menu>
                    <vl-map-side-sheet-menu-item data-vl-title=${e} data-vl-href=${t}>
                        ${(0,r._)(s)}
                    </vl-map-side-sheet-menu-item>
                </vl-map-side-sheet-menu>
            </vl-map-side-sheet>
        </vl-map>
    `);m.storyName="vl-map-side-sheet-menu-item default",m.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story(mapSideSheetMenuItemArgs, ({\n  title,\n  href,\n  defaultSlot\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-side-sheet>\n                <vl-map-side-sheet-menu>\n                    <vl-map-side-sheet-menu-item data-vl-title=${title} data-vl-href=${href}>\n                        ${unsafeHTML(defaultSlot)}\n                    </vl-map-side-sheet-menu-item>\n                </vl-map-side-sheet-menu>\n            </vl-map-side-sheet>\n        </vl-map>\n    `)",...m.parameters?.docs?.source}}};let d=["MapSideSheetMenuItemDefault"]},"../../node_modules/lit/directives/unsafe-html.js":(e,t,s)=>{s.d(t,{_:()=>i});var a=s("../../node_modules/lit-html/lit-html.js"),l=s("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r extends l.WL{constructor(e){if(super(e),this.et=a.s6,e.type!==l.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===a.s6||null==e)return this.vt=void 0,this.et=e;if(e===a.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;var i=(0,l.u$)(r)},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,s)=>{var a=s("../../libs/common/utilities/src/index.ts"),l=s("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class r extends l.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}r=function(e,t,s,a){var l,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(i=(r<3?l(i):r>3?l(t,s,i):l(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}([(0,a.M1)("vl-map-baselayer-grb-gray")],r)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts":(e,t,s)=>{var a=s("../../libs/common/utilities/src/index.ts"),l=s("../../libs/elements/src/index.ts");class r extends(0,a.H3)(HTMLElement){static{(0,a.gy)([l.yF,l.nJ])}static get _observedAttributes(){return["title","href"]}constructor(){super(`
      <style>
        ${l.hF}

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
          <a id="vl-map-side-sheet-menu-item-link" is="vl-link" href="#">
            <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span><span id="title">Terug</span>
          </a>
        </div>
        <slot></slot>
      </div>
    `)}get _titleElement(){return this._shadow.querySelector("#title")}get _hrefElement(){return this._shadow.querySelector("#vl-map-side-sheet-menu-item-link")}_titleChangedCallback(e,t){t&&(this._titleElement.innerText=t)}_hrefChangedCallback(e,t){t&&this._hrefElement.setAttribute("href",t)}}r=function(e,t,s,a){var l,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(i=(r<3?l(i):r>3?l(t,s,i):l(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}([(0,a.M1)("vl-map-side-sheet-menu-item")],r)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts":(e,t,s)=>{var a=s("../../libs/common/utilities/src/index.ts"),l=s("../../libs/elements/src/index.ts");class r extends(0,a.H3)(HTMLElement){constructor(){super(`
      <style>
        ${l.hF}
        :host {
          margin: -1.5rem;
          display: block;
        }
      </style>
      <slot></slot>
    `)}}r=function(e,t,s,a){var l,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(i=(r<3?l(i):r>3?l(t,s,i):l(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}([(0,a.M1)("vl-map-side-sheet-menu")],r)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts":(e,t,s)=>{var a=s("../../libs/common/utilities/src/index.ts"),l=s("../../libs/components/src/index.ts");class r extends l.VH{constructor(){super(`
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
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("data-vl-absolute",""),this.hasAttribute("data-vl-right")||this.setAttribute("data-vl-left",""),this._openChangedCallback()}_rightChangedCallback(e,t){void 0!=t?this.removeAttribute("data-vl-left"):this.setAttribute("data-vl-left","")}}r=function(e,t,s,a){var l,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(i=(r<3?l(i):r>3?l(t,s,i):l(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}([(0,a.M1)("vl-map-side-sheet")],r)}}]);