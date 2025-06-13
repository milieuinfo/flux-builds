"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9418],{"../../libs/components/src/share-buttons/stories/vl-share-button.stories.ts":(t,e,r)=>{r.r(e),r.d(e,{__namedExportsOrder:()=>a,default:()=>l,shareButtonDefault:()=>i});var o=r("../../node_modules/lit-html/lit-html.js");r("../../libs/components/src/share-buttons/vl-share-button.component.ts"),r("../../libs/components/src/share-buttons/vl-share-buttons.component.ts");var s=r("../../libs/common/storybook/src/index.ts"),n=r("../../libs/components/src/share-buttons/vl-share-button.model.ts");let l={title:"Components/share-buttons/button",tags:["autodocs"],args:{...s.D8,href:"#",medium:n.R.FACEBOOK},argTypes:{...(0,s.RN)(),medium:{name:"data-vl-medium",control:{type:s.VH.SELECT},options:Object.values(n.R),description:"This attribute is used to pass the medium.",table:{type:{summary:(0,s.uf)(Object.values(n.R))}}},href:{type:"string",description:"The href attribute specifies the link's destination."}}},i=({href:t,medium:e})=>(0,o.qy)` <vl-share-buttons>
        <vl-share-button href=${t} data-vl-medium=${e}></vl-share-button>
    </vl-share-buttons>`;i.storyName="vl-share-button - default",i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"({\n  href,\n  medium\n}: typeof shareButtonArgs) => html` <vl-share-buttons>\n        <vl-share-button href=${href} data-vl-medium=${medium}></vl-share-button>\n    </vl-share-buttons>`",...i.parameters?.docs?.source}}};let a=["shareButtonDefault"]},"../../node_modules/lit-html/directive.js":(t,e,r)=>{r.d(e,{OA:()=>o,WL:()=>n,u$:()=>s});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return{_$litDirective$:t,values:r}};class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"../../node_modules/lit/decorators.js":(t,e,r)=>{r.d(e,{EM:()=>o,MZ:()=>i});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var s=r("../../node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={attribute:!0,type:String,converter:s.W3,reflect:!1,hasChanged:s.Ec},l=(t=n,e,r)=>{let{kind:o,metadata:s}=r,l=globalThis.litPropertyMetadata.get(s);if(void 0===l&&globalThis.litPropertyMetadata.set(s,l=new Map),l.set(r.name,t),"accessor"===o){let{name:o}=r;return{set(r){let s=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,s,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){let{name:o}=r;return function(r){let s=this[o];e.call(this,r),this.requestUpdate(o,s,t)}}throw Error("Unsupported decorator location: "+o)};function i(t){return(e,r)=>"object"==typeof r?l(t,e,r):((t,e,r)=>{let o=e.hasOwnProperty(r);return e.constructor.createProperty(r,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}},"../../node_modules/lit/directives/class-map.js":(t,e,r)=>{r.d(e,{H:()=>n});var o=r("../../node_modules/lit-html/lit-html.js"),s=r("../../node_modules/lit-html/directive.js"),n=(0,s.u$)(class extends s.WL{constructor(t){var e;if(super(t),t.type!==s.OA.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var[r]=e;if(void 0===this.it){for(var s in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),r)r[s]&&!(null!==(a=this.st)&&void 0!==a&&a.has(s))&&this.it.add(s);return this.render(r)}var n=t.element.classList;for(var l of this.it)l in r||(n.remove(l),this.it.delete(l));for(var i in r){var a,u,c=!!r[i];c===this.it.has(i)||(null===(u=this.st)||void 0===u?void 0:u.has(i))||(c?(n.add(i),this.it.add(i)):(n.remove(i),this.it.delete(i)))}return o.c0}})},"../../libs/components/src/share-buttons/vl-share-button.component.ts":(t,e,r)=>{var o=r("../../node_modules/@domg/govflanders-style/component/index.js"),s=r("../../node_modules/@domg/govflanders-style/common/index.js"),n=r("../../node_modules/lit/index.js"),l=r("../../node_modules/lit/decorators.js"),i=r("../../libs/components/src/share-buttons/vl-share-button.model.ts");let a=(0,n.AH)`
    .vl-share-button {
        margin: 1rem 0.6rem;
        position: relative;
        display: inline-block;
        background-color: #05c;
        color: #e6eefa !important;
        font-size: 0;
        width: 3.2rem;
        height: 3.2rem;
        transition: background-color 0.1s;
        line-height: 2.6rem;
        vertical-align: middle;
        text-decoration: none;
        overflow: hidden;
        padding: 0.3rem;
        appearance: none;
        border: 0;
    }
    .vl-share-button .vl-vi {
        position: absolute;
        font-size: 1.8rem;
        text-align: center;
        right: 0;
        left: 0;
    }
    .vl-share-button:active {
        background-color: #004099;
    }
    .vl-share-button:active::after {
        position: absolute;
        display: block;
        background-color: #000;
        height: 0.3rem;
        opacity: 0.3;
        content: '';
        top: 0;
        right: 0;
        left: 0;
    }
    .vl-share-button:hover,
    .vl-share-button:focus {
        background-color: #003bb0;
    }

    .vl-share-button--facebook {
        background-color: #36609f;
    }
    .vl-share-button--facebook:hover,
    .vl-share-button--facebook:focus {
        background-color: #4a70a9;
    }

    .vl-share-button--twitter {
        background-color: #2caae1;
    }
    .vl-share-button--twitter:hover,
    .vl-share-button--twitter:focus {
        background-color: #41b3e4;
    }

    .vl-share-button--linkedin {
        background-color: #0a6c9b;
    }
    .vl-share-button--linkedin:hover,
    .vl-share-button--linkedin:focus {
        background-color: #237ba5;
    }

    .vl-share-button--googleplus {
        background-color: #dc5442;
    }
    .vl-share-button--googleplus:hover,
    .vl-share-button--googleplus:focus {
        background-color: #e06555;
    }
`;var u=r("../../libs/common/utilities/src/index.ts");class c extends u.jW{static get styles(){return[s.h8,s.BI,a,o.py]}static get properties(){return{medium:{type:String,attribute:"data-vl-medium",reflect:!0},href:{type:String,attribute:"href",reflect:!0}}}render(){let t=i.g[this.medium];return(0,n.qy)`<a
            href=${this.href}
            class="vl-share-button vl-share-button--${this.medium}"
            title="Deel op ${t}"
        >
            <i class="vl-vi vl-vi-${this.medium}" aria-hidden="true"></i>
            ${t}
        </a>`}constructor(...t){super(...t),this.medium="",this.href=""}}c=function(t,e,r,o){var s,n=arguments.length,l=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(s=t[i])&&(l=(n<3?s(l):n>3?s(e,r,l):s(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l}([(0,l.EM)("vl-share-button")],c)},"../../libs/components/src/share-buttons/vl-share-button.model.ts":(t,e,r)=>{r.d(e,{R:()=>o,g:()=>s});let o={FACEBOOK:"facebook",TWITTER:"twitter",LINKED_IN:"linkedin",GOOGLE_PLUS:"googleplus",MAIL:"mail"},s={[o.FACEBOOK]:"Facebook",[o.TWITTER]:"Twitter",[o.LINKED_IN]:"LinkedIn",[o.GOOGLE_PLUS]:"Google Plus",[o.MAIL]:"mail"}},"../../libs/components/src/share-buttons/vl-share-buttons.component.ts":(t,e,r)=>{var o=r("../../libs/common/utilities/src/index.ts"),s=r("../../node_modules/lit/index.js"),n=r("../../node_modules/lit/decorators.js"),l=r("../../node_modules/lit/directives/class-map.js");let i=(0,s.AH)`
    .vl-share-buttons {
        display: flex;
        align-items: center;
    }

    .vl-share-buttons:not(.vl-share-buttons--alt) {
        border-top: 0.1rem solid #f7f9fc;
    }

    .vl-share-buttons__label {
        font-size: 1.6rem;
        font-weight: 500;
        color: #333332;
        text-transform: uppercase;
        margin: 0;
    }
`;class a extends o.jW{static get styles(){return[i]}static get properties(){return{alt:{type:Boolean,attribute:"data-vl-alt",reflect:!0}}}render(){return(0,s.qy)` <div class=${(0,l.H)({"vl-share-buttons":!0,"vl-share-buttons--alt":this.alt})}>
            <div class="vl-share-buttons__label">Deel:</div>
            <slot></slot>
        </div>`}constructor(...t){super(...t),this.alt=""}}a=function(t,e,r,o){var s,n=arguments.length,l=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(s=t[i])&&(l=(n<3?s(l):n>3?s(e,r,l):s(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l}([(0,n.EM)("vl-share-buttons")],a)}}]);