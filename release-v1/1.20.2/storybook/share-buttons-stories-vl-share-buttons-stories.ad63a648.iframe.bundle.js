"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[3143],{"./node_modules/lit-html/directive.js":(t,e,o)=>{o.d(e,{XM:()=>s,Xe:()=>n,pX:()=>r});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>function(){for(var e=arguments.length,o=Array(e),r=0;r<e;r++)o[r]=arguments[r];return{_$litDirective$:t,values:o}};class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(t,e,o)=>{var r;o.d(e,{Mo:()=>s,Cb:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{let{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}}:{...e,finisher(o){o.createProperty(e.key,t)}},a=(t,e,o)=>{e.constructor.createProperty(o,t)};function l(t){return(e,o)=>void 0!==o?a(t,e,o):n(t,e)}null!=(null===(r=window.HTMLSlotElement)||void 0===r?void 0:r.prototype.assignedElements)||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE))},"./node_modules/lit/directives/class-map.js":(t,e,o)=>{o.d(e,{$:()=>n});var r=o("./node_modules/lit-html/lit-html.js"),s=o("./node_modules/lit-html/directive.js"),n=(0,s.XM)(class extends s.Xe{constructor(t){var e;if(super(t),t.type!==s.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var o,s,[n]=e;if(void 0===this.it){for(var a in this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),n)!n[a]||(null===(o=this.nt)||void 0===o?void 0:o.has(a))||this.it.add(a);return this.render(n)}var l=t.element.classList;for(var i in this.it.forEach(t=>{t in n||(l.remove(t),this.it.delete(t))}),n){var u=!!n[i];u===this.it.has(i)||(null===(s=this.nt)||void 0===s?void 0:s.has(i))||(u?(l.add(i),this.it.add(i)):(l.remove(i),this.it.delete(i)))}return r.Jb}})},"./libs/components/src/share-buttons/vl-share-button.component.ts":(t,e,o)=>{var r=o("./node_modules/@domg/govflanders-style/component/index.js"),s=o("./node_modules/@domg/govflanders-style/common/index.js"),n=o("./node_modules/lit/index.js"),a=o("./node_modules/lit/decorators.js"),l=o("./libs/components/src/share-buttons/vl-share-button.model.ts");let i=(0,n.iv)`
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
`;var u=o("./libs/common/utilities/src/index.ts");let d=class extends u.fS{static get styles(){return[s.YN,s.Oh,i,r.oQ]}static get properties(){return{medium:{type:String,attribute:"data-vl-medium",reflect:!0},href:{type:String,attribute:"href",reflect:!0}}}render(){let t=l.x[this.medium];return(0,n.dy)`<a
            href=${this.href}
            class="vl-share-button vl-share-button--${this.medium}"
            title="Deel op ${t}"
        >
            <i class="vl-vi vl-vi-${this.medium}" aria-hidden="true"></i>
            ${t}
        </a>`}constructor(...t){super(...t),this.medium="",this.href=""}};d=function(t,e,o,r){var s,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(a=(n<3?s(a):n>3?s(e,o,a):s(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([(0,a.Mo)("vl-share-button")],d)},"./libs/components/src/share-buttons/vl-share-button.model.ts":(t,e,o)=>{o.d(e,{i:()=>r,x:()=>s});let r={FACEBOOK:"facebook",TWITTER:"twitter",LINKED_IN:"linkedin",GOOGLE_PLUS:"googleplus",MAIL:"mail"},s={[r.FACEBOOK]:"Facebook",[r.TWITTER]:"Twitter",[r.LINKED_IN]:"LinkedIn",[r.GOOGLE_PLUS]:"Google Plus",[r.MAIL]:"mail"}},"./libs/components/src/share-buttons/vl-share-buttons.component.ts":(t,e,o)=>{var r=o("./libs/common/utilities/src/index.ts"),s=o("./node_modules/lit/index.js"),n=o("./node_modules/lit/decorators.js"),a=o("./node_modules/lit/directives/class-map.js");let l=(0,s.iv)`
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
`,i=class extends r.fS{static get styles(){return[l]}static get properties(){return{alt:{type:Boolean,attribute:"data-vl-alt",reflect:!0}}}render(){return(0,s.dy)` <div class=${(0,a.$)({"vl-share-buttons":!0,"vl-share-buttons--alt":this.alt})}>
            <div class="vl-share-buttons__label">Deel:</div>
            <slot></slot>
        </div>`}constructor(...t){super(...t),this.alt=""}};i=function(t,e,o,r){var s,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(a=(n<3?s(a):n>3?s(e,o,a):s(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([(0,n.Mo)("vl-share-buttons")],i)},"./libs/components/src/share-buttons/stories/vl-share-buttons.stories.ts":(t,e,o)=>{o.r(e),o.d(e,{default:()=>n,shareButtonsDefault:()=>a});var r=o("./libs/common/storybook/src/index.ts"),s=o("./node_modules/lit-html/lit-html.js");o("./libs/components/src/share-buttons/vl-share-button.component.ts"),o("./libs/components/src/share-buttons/vl-share-buttons.component.ts");let n={title:"Components/share-buttons/buttons",tags:["autodocs"],args:(0,r.T8)({alt:!1}),argTypes:(0,r.xj)({alt:{name:"data-vl-alt",description:"Removes the gray border top.",table:{category:"Attributes",type:{summary:"Boolean"},defaultValue:{summary:"false"}}}})},a=({alt:t})=>(0,s.dy)` <vl-share-buttons
    ?data-vl-alt=${t}
    data-cy="share-buttons"
>
    <vl-share-button href="#" data-vl-medium="facebook" data-cy="share-button-1"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="twitter" data-cy="share-button-2"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="linkedin" data-cy="share-button-3"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="googleplus" data-cy="share-button-4"></vl-share-button>
    <vl-share-button href="#" data-vl-medium="mail" data-cy="share-button-5"></vl-share-button>
</vl-share-buttons>`;a.storyName="vl-share-buttons - default",a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'({\n  alt\n}: typeof shareButtonsArgs) => html` <vl-share-buttons\n    ?data-vl-alt=${alt}\n    data-cy="share-buttons"\n>\n    <vl-share-button href="#" data-vl-medium="facebook" data-cy="share-button-1"></vl-share-button>\n    <vl-share-button href="#" data-vl-medium="twitter" data-cy="share-button-2"></vl-share-button>\n    <vl-share-button href="#" data-vl-medium="linkedin" data-cy="share-button-3"></vl-share-button>\n    <vl-share-button href="#" data-vl-medium="googleplus" data-cy="share-button-4"></vl-share-button>\n    <vl-share-button href="#" data-vl-medium="mail" data-cy="share-button-5"></vl-share-button>\n</vl-share-buttons>`',...a.parameters?.docs?.source}}}}}]);