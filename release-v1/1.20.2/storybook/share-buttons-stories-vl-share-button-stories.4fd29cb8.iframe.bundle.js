"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8714],{"./node_modules/lit-html/directive.js":(e,t,o)=>{o.d(t,{XM:()=>r,Xe:()=>n,pX:()=>s});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>function(){for(var t=arguments.length,o=Array(t),s=0;s<t;s++)o[s]=arguments[s];return{_$litDirective$:e,values:o}};class n{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,o)=>{var s;o.d(t,{Mo:()=>r,Cb:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{let{kind:o,elements:s}=t;return{kind:o,elements:s,finisher(t){customElements.define(e,t)}}})(e,t),n=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}}:{...t,finisher(o){o.createProperty(t.key,e)}},i=(e,t,o)=>{t.constructor.createProperty(o,e)};function l(e){return(t,o)=>void 0!==o?i(e,t,o):n(e,t)}null!=(null===(s=window.HTMLSlotElement)||void 0===s?void 0:s.prototype.assignedElements)||((e,t)=>e.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE))},"./node_modules/lit/directives/class-map.js":(e,t,o)=>{o.d(t,{$:()=>n});var s=o("./node_modules/lit-html/lit-html.js"),r=o("./node_modules/lit-html/directive.js"),n=(0,r.XM)(class extends r.Xe{constructor(e){var t;if(super(e),e.type!==r.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var o,r,[n]=t;if(void 0===this.it){for(var i in this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),n)!n[i]||(null===(o=this.nt)||void 0===o?void 0:o.has(i))||this.it.add(i);return this.render(n)}var l=e.element.classList;for(var a in this.it.forEach(e=>{e in n||(l.remove(e),this.it.delete(e))}),n){var u=!!n[a];u===this.it.has(a)||(null===(r=this.nt)||void 0===r?void 0:r.has(a))||(u?(l.add(a),this.it.add(a)):(l.remove(a),this.it.delete(a)))}return s.Jb}})},"./libs/components/src/share-buttons/vl-share-button.component.ts":(e,t,o)=>{var s=o("./node_modules/@domg/govflanders-style/component/index.js"),r=o("./node_modules/@domg/govflanders-style/common/index.js"),n=o("./node_modules/lit/index.js"),i=o("./node_modules/lit/decorators.js"),l=o("./libs/components/src/share-buttons/vl-share-button.model.ts");let a=(0,n.iv)`
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
`;var u=o("./libs/common/utilities/src/index.ts");let c=class extends u.fS{static get styles(){return[r.YN,r.Oh,a,s.oQ]}static get properties(){return{medium:{type:String,attribute:"data-vl-medium",reflect:!0},href:{type:String,attribute:"href",reflect:!0}}}render(){let e=l.x[this.medium];return(0,n.dy)`<a
            href=${this.href}
            class="vl-share-button vl-share-button--${this.medium}"
            title="Deel op ${e}"
        >
            <i class="vl-vi vl-vi-${this.medium}" aria-hidden="true"></i>
            ${e}
        </a>`}constructor(...e){super(...e),this.medium="",this.href=""}};c=function(e,t,o,s){var r,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(n<3?r(i):n>3?r(t,o,i):r(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i}([(0,i.Mo)("vl-share-button")],c)},"./libs/components/src/share-buttons/vl-share-button.model.ts":(e,t,o)=>{o.d(t,{i:()=>s,x:()=>r});let s={FACEBOOK:"facebook",TWITTER:"twitter",LINKED_IN:"linkedin",GOOGLE_PLUS:"googleplus",MAIL:"mail"},r={[s.FACEBOOK]:"Facebook",[s.TWITTER]:"Twitter",[s.LINKED_IN]:"LinkedIn",[s.GOOGLE_PLUS]:"Google Plus",[s.MAIL]:"mail"}},"./libs/components/src/share-buttons/vl-share-buttons.component.ts":(e,t,o)=>{var s=o("./libs/common/utilities/src/index.ts"),r=o("./node_modules/lit/index.js"),n=o("./node_modules/lit/decorators.js"),i=o("./node_modules/lit/directives/class-map.js");let l=(0,r.iv)`
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
`,a=class extends s.fS{static get styles(){return[l]}static get properties(){return{alt:{type:Boolean,attribute:"data-vl-alt",reflect:!0}}}render(){return(0,r.dy)` <div class=${(0,i.$)({"vl-share-buttons":!0,"vl-share-buttons--alt":this.alt})}>
            <div class="vl-share-buttons__label">Deel:</div>
            <slot></slot>
        </div>`}constructor(...e){super(...e),this.alt=""}};a=function(e,t,o,s){var r,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(n<3?r(i):n>3?r(t,o,i):r(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i}([(0,n.Mo)("vl-share-buttons")],a)},"./libs/components/src/share-buttons/stories/vl-share-button.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{default:()=>a,shareButtonDefault:()=>u});var s=o("./libs/common/storybook/src/index.ts"),r=o("./node_modules/lit-html/lit-html.js");o("./libs/components/src/share-buttons/vl-share-button.component.ts"),o("./libs/components/src/share-buttons/vl-share-buttons.component.ts");var n=o("./libs/components/src/share-buttons/vl-share-button.model.ts");let i={href:"#",medium:n.i.FACEBOOK},l={medium:{name:"data-vl-medium",options:[n.i.FACEBOOK,n.i.TWITTER,n.i.LINKED_IN,n.i.GOOGLE_PLUS,n.i.MAIL],description:"This attribute is used to pass the medium.",control:"select",table:{type:{summary:`${n.i.FACEBOOK} | ${n.i.TWITTER} | ${n.i.LINKED_IN} | ${n.i.GOOGLE_PLUS} | ${n.i.MAIL}`}}},href:{type:"string",description:"The href attribute specifies the link's destination."}},a={title:"Components/share-buttons/button",tags:["autodocs"],args:(0,s.T8)(i),argTypes:(0,s.xj)(l)},u=({href:e,medium:t})=>(0,r.dy)` <vl-share-buttons>
        <vl-share-button href=${e} data-vl-medium=${t}></vl-share-button>
    </vl-share-buttons>`;u.storyName="vl-share-button - default",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"({\n  href,\n  medium\n}: typeof shareButtonArgs) => html` <vl-share-buttons>\n        <vl-share-button href=${href} data-vl-medium=${medium}></vl-share-button>\n    </vl-share-buttons>`",...u.parameters?.docs?.source}}}}}]);