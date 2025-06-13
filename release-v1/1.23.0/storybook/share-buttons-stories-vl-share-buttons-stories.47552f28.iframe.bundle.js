"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[3143],{"./libs/components/src/share-buttons/stories/vl-share-buttons.stories.ts":(t,e,r)=>{r.r(e),r.d(e,{__namedExportsOrder:()=>l,default:()=>a,shareButtonsDefault:()=>n});var o=r("./node_modules/lit-html/lit-html.js");r("./libs/components/src/share-buttons/vl-share-button.component.ts"),r("./libs/components/src/share-buttons/vl-share-buttons.component.ts");var s=r("./libs/common/storybook/src/index.ts");let a={title:"Components/share-buttons/buttons",tags:["autodocs"],args:{...s._O,alt:!1},argTypes:{...(0,s.Wp)(),alt:{name:"data-vl-alt",description:"Removes the gray border top.",table:{category:"Attributes",type:{summary:"Boolean"},defaultValue:{summary:"false"}}}}},n=({alt:t})=>(0,o.dy)` <vl-share-buttons
    ?data-vl-alt=${t}
    data-cy="share-buttons"
>
    <vl-share-button href="#" data-vl-medium="facebook" data-cy="share-button-1"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="twitter" data-cy="share-button-2"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="linkedin" data-cy="share-button-3"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="googleplus" data-cy="share-button-4"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="mail" data-cy="share-button-5"></vl-share-button>
</vl-share-buttons>`;n.storyName="vl-share-buttons - default",n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'({\n  alt\n}: typeof shareButtonsArgs) => html` <vl-share-buttons\n    ?data-vl-alt=${alt}\n    data-cy="share-buttons"\n>\n    <vl-share-button href="#" data-vl-medium="facebook" data-cy="share-button-1"></vl-share-button>\n    <vl-share-button href="#" data-vl-medium="twitter" data-cy="share-button-2"></vl-share-button>\n    <vl-share-button href="#" data-vl-medium="linkedin" data-cy="share-button-3"></vl-share-button>\n    <vl-share-button href="#" data-vl-medium="googleplus" data-cy="share-button-4"></vl-share-button>\n    <vl-share-button href="#" data-vl-medium="mail" data-cy="share-button-5"></vl-share-button>\n</vl-share-buttons>`',...n.parameters?.docs?.source}}};let l=["shareButtonsDefault"]},"./node_modules/lit-html/directive.js":(t,e,r)=>{r.d(e,{XM:()=>s,Xe:()=>a,pX:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return{_$litDirective$:t,values:r}};class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(t,e,r)=>{r.d(e,{Mo:()=>o,Cb:()=>u});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o=t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},s=r("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach(function(e){!function(t,e,r){(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l={attribute:!0,type:String,converter:s.Ts,reflect:!1,hasChanged:s.Qu},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,{kind:o,metadata:s}=r,a=globalThis.litPropertyMetadata.get(s);if(void 0===a&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(r.name,t),"accessor"===o){var{name:n}=r;return{set(r){var o=e.get.call(this);e.set.call(this,r),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t),e}}}if("setter"===o){var{name:i}=r;return function(r){var o=this[i];e.call(this,r),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+o)};function u(t){return(e,r)=>"object"==typeof r?i(t,e,r):((t,e,r)=>{var o=e.hasOwnProperty(r);return e.constructor.createProperty(r,o?n(n({},t),{},{wrapped:!0}):t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}},"./node_modules/lit/directives/class-map.js":(t,e,r)=>{r.d(e,{$:()=>a});var o=r("./node_modules/lit-html/lit-html.js"),s=r("./node_modules/lit-html/directive.js"),a=(0,s.XM)(class extends s.Xe{constructor(t){var e;if(super(t),t.type!==s.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var[r]=e;if(void 0===this.it){for(var s in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),r)r[s]&&!(null!==(i=this.st)&&void 0!==i&&i.has(s))&&this.it.add(s);return this.render(r)}var a=t.element.classList;for(var n of this.it)n in r||(a.remove(n),this.it.delete(n));for(var l in r){var i,u,c=!!r[l];c===this.it.has(l)||(null===(u=this.st)||void 0===u?void 0:u.has(l))||(c?(a.add(l),this.it.add(l)):(a.remove(l),this.it.delete(l)))}return o.Jb}})},"./libs/components/src/share-buttons/vl-share-button.component.ts":(t,e,r)=>{var o=r("./node_modules/@domg/govflanders-style/component/index.js"),s=r("./node_modules/@domg/govflanders-style/common/index.js"),a=r("./node_modules/lit/index.js"),n=r("./node_modules/lit/decorators.js"),l=r("./libs/components/src/share-buttons/vl-share-button.model.ts");let i=(0,a.iv)`
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
`;var u=r("./libs/common/utilities/src/index.ts");class c extends u.fS{static get styles(){return[s.YN,s.Oh,i,o.oQ]}static get properties(){return{medium:{type:String,attribute:"data-vl-medium",reflect:!0},href:{type:String,attribute:"href",reflect:!0}}}render(){let t=l.x[this.medium];return(0,a.dy)`<a
            href=${this.href}
            class="vl-share-button vl-share-button--${this.medium}"
            title="Deel op ${t}"
        >
            <i class="vl-vi vl-vi-${this.medium}" aria-hidden="true"></i>
            ${t}
        </a>`}constructor(...t){super(...t),this.medium="",this.href=""}}c=function(t,e,r,o){var s,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(a<3?s(n):a>3?s(e,r,n):s(e,r))||n);return a>3&&n&&Object.defineProperty(e,r,n),n}([(0,n.Mo)("vl-share-button")],c)},"./libs/components/src/share-buttons/vl-share-button.model.ts":(t,e,r)=>{r.d(e,{i:()=>o,x:()=>s});let o={FACEBOOK:"facebook",TWITTER:"twitter",LINKED_IN:"linkedin",GOOGLE_PLUS:"googleplus",MAIL:"mail"},s={[o.FACEBOOK]:"Facebook",[o.TWITTER]:"Twitter",[o.LINKED_IN]:"LinkedIn",[o.GOOGLE_PLUS]:"Google Plus",[o.MAIL]:"mail"}},"./libs/components/src/share-buttons/vl-share-buttons.component.ts":(t,e,r)=>{var o=r("./libs/common/utilities/src/index.ts"),s=r("./node_modules/lit/index.js"),a=r("./node_modules/lit/decorators.js"),n=r("./node_modules/lit/directives/class-map.js");let l=(0,s.iv)`
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
`;class i extends o.fS{static get styles(){return[l]}static get properties(){return{alt:{type:Boolean,attribute:"data-vl-alt",reflect:!0}}}render(){return(0,s.dy)` <div class=${(0,n.$)({"vl-share-buttons":!0,"vl-share-buttons--alt":this.alt})}>
            <div class="vl-share-buttons__label">Deel:</div>
            <slot></slot>
        </div>`}constructor(...t){super(...t),this.alt=""}}i=function(t,e,r,o){var s,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(a<3?s(n):a>3?s(e,r,n):s(e,r))||n);return a>3&&n&&Object.defineProperty(e,r,n),n}([(0,a.Mo)("vl-share-buttons")],i)}}]);