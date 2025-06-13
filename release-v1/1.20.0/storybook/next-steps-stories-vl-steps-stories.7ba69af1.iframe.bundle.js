(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2765],{"./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(e){!function(t,s){e.exports=s()}("undefined"!=typeof self&&self,function(){"use strict";function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var t="js-".concat(vl.ns,"accordion"),s="".concat(t,"--open"),a="".concat(t,"__toggle"),i=".".concat(a,"__text"),n="".concat(vl.ns,"step--disabled"),l="".concat(vl.ns,"vi-plus"),o="".concat(vl.ns,"vi-minus"),r="".concat(vl.ns,"accordion__content"),u="data-".concat(vl.ns),c="".concat(u,"accordion"),d="".concat(c,"-dressed"),p="".concat(c,"-toggle"),m=function(){function u(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,u)}return!function(t,s,a){s&&e(t.prototype,s),a&&e(t,a),Object.defineProperty(t,"prototype",{writable:!1})}(u,[{key:"_listenToHash",value:function(e){window.location.hash&&e.hasAttribute("id")&&"#".concat(e.getAttribute("id"))===window.location.hash&&this.open(e)}},{key:"open",value:function(e){var t=e.querySelector("[".concat(p,"]"));t&&!vl.util.hasClass(e,s)&&t.click()}},{key:"toggle",value:function(e){var t=e.querySelector("[".concat(p,"]"));t&&t.click()}},{key:"dress",value:function(e){var a,u,p,m,v=this,g=e.getAttribute("id")||vl.util.uniqueId(),b=!0;e.setAttribute(d,!0),a=e.querySelector(i),u=e.closest(".".concat(t,", [").concat(c,"]")).querySelector(".".concat(r)),vl.util.exists(u)&&u.setAttribute("aria-hidden",b),a?(p=a.dataset.vlAccordionCloseText,m=a.dataset.vlAccordionOpenText,vl.util.hasClass(e,s)?a.innerHTML=p:a.innerHTML=m,a.setAttribute("id",g)):e.setAttribute("aria-expanded",!1),e.addEventListener("click",function(i){var r=i.target.closest(".".concat(t,", [").concat(c,"]"));if(r&&!vl.util.hasClass(e,n)){i.preventDefault(),b=!b,vl.util.toggleClass(r,s),a||e.setAttribute("aria-expanded",!b);var d=new CustomEvent("vl.accordion.hook.onChange",{detail:!b,target:r}),p=e.querySelector(".vl-vi");r.dispatchEvent(d),p&&vl.util.hasClass(p,l)?(vl.util.removeClass(p,l),vl.util.addClass(p,o)):p&&vl.util.hasClass(p,o)&&(vl.util.removeClass(p,o),vl.util.addClass(p,l)),vl.util.exists(u)&&u.setAttribute("aria-hidden",b),a&&(vl.util.hasClass(r,s)?a.innerHTML=a.dataset.vlAccordionCloseText:a.innerHTML=a.dataset.vlAccordionOpenText)}},!1),this._listenToHash(e),window.addEventListener("hashchange",function(){v._listenToHash(e)})}},{key:"dressAll",value:function(){var e=this,s=document.querySelectorAll("\n      .".concat(t,':not([data-vl-js-dress="false"]) .').concat(a,":not([").concat(d,"]),\n      [").concat(c,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(p,"]:not([").concat(d,"])\n    "));vl.util.each(s,function(t){e.dress(t)})}}]),u}();return"accordion"in vl||(vl.accordion=new m,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),m})},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,s)=>{"use strict";s.d(t,{NF:()=>n,Zo:()=>r,ah:()=>l,pC:()=>i});var a=s("./node_modules/react/index.js");let i=a.createContext({});function n(e){return function(t){let s=l(t.components);return a.createElement(e,{...t,allComponents:s})}}function l(e){let t=a.useContext(i);return a.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let o={};function r({components:e,children:t,disableParentContext:s}){let n;return n=s?"function"==typeof e?e({}):e||o:l(e),a.createElement(i.Provider,{value:n},t)}},"./node_modules/lit-html/directive.js":(e,t,s)=>{"use strict";s.d(t,{XM:()=>i,Xe:()=>n,pX:()=>a});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>function(){for(var t=arguments.length,s=Array(t),a=0;a<t;a++)s[a]=arguments[a];return{_$litDirective$:e,values:s}};class n{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,s)=>{"use strict";var a;s.d(t,{Mo:()=>i,Cb:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{let{kind:s,elements:a}=t;return{kind:s,elements:a,finisher(t){customElements.define(e,t)}}})(e,t),n=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}}:{...t,finisher(s){s.createProperty(t.key,e)}},l=(e,t,s)=>{t.constructor.createProperty(s,e)};function o(e){return(t,s)=>void 0!==s?l(e,t,s):n(e,t)}null!=(null===(a=window.HTMLSlotElement)||void 0===a?void 0:a.prototype.assignedElements)||((e,t)=>e.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE))},"./node_modules/lit/directives/class-map.js":(e,t,s)=>{"use strict";s.d(t,{$:()=>n});var a=s("./node_modules/lit-html/lit-html.js"),i=s("./node_modules/lit-html/directive.js"),n=(0,i.XM)(class extends i.Xe{constructor(e){var t;if(super(e),e.type!==i.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var s,i,[n]=t;if(void 0===this.it){for(var l in this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),n)!n[l]||(null===(s=this.nt)||void 0===s?void 0:s.has(l))||this.it.add(l);return this.render(n)}var o=e.element.classList;for(var r in this.it.forEach(e=>{e in n||(o.remove(e),this.it.delete(e))}),n){var u=!!n[r];u===this.it.has(r)||(null===(i=this.nt)||void 0===i?void 0:i.has(r))||(u?(o.add(r),this.it.add(r)):(o.remove(r),this.it.delete(r)))}return a.Jb}})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,s)=>{"use strict";/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */s("./node_modules/object-assign/index.js");var a=s("./node_modules/react/index.js"),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;i=n("react.element"),t.Fragment=n("react.fragment")}var l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,r={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,s){var a,n={},u=null,c=null;for(a in void 0!==s&&(u=""+s),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,a)&&!r.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:i,type:e,key:u,ref:c,props:n,_owner:l.current}}t.jsx=u,t.jsxs=u},"./node_modules/react/jsx-runtime.js":(e,t,s)=>{"use strict";e.exports=s("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/accordion/vl-accordion.component.ts":(e,t,s)=>{"use strict";s.d(t,{b:()=>r});var a=s("./libs/common/utilities/src/index.ts"),i=s("./node_modules/@domg/govflanders-style/component/index.js"),n=s("./node_modules/@domg/govflanders-style/common/index.js"),l=s("./node_modules/lit/index.js");let o=(0,l.iv)`
    :host(.vl-accordion--bold) .vl-accordion__title,
    :host(.vl-accordion--bold) .vl-accordion__icon::before {
        font-weight: 700;
    }

    :host(.vl-accordion--disabled) .vl-toggle {
        cursor: not-allowed;
        text-decoration: none;
    }
    :host(.vl-accordion--disabled) .vl-accordion__title,
    :host(.vl-accordion--disabled) .vl-accordion__icon::before {
        color: #687483;
    }

    .vl-accordion:not(.js-vl-accordion--open) .vl-accordion__content {
        display: none;
    }

    .vl-accordion.vl-accordion--has-icon .vl-vi-arrow-right-fat {
        order: 2;
        margin-left: auto;
        padding-right: 0;
        padding-left: 0.4rem;
    }
`;s("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),s("./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),s("./node_modules/reflect-metadata/Reflect.js");let r=class extends(0,a.W$)(HTMLElement){static get _observedAttributes(){return["toggle-text","open-toggle-text","close-toggle-text","content-padding"]}static get _observedClassAttributes(){return["bold","disabled"]}get _classPrefix(){return"vl-accordion--"}constructor(){super(`
          <style>
           ${n.YN}
           ${i.jn}
           ${i.oQ}
           ${i.RP}
           ${i.ob}
           ${i.R1}
           ${o}
          </style>
          <div class="js">
            <div class="vl-accordion" data-vl-accordion>
              <button class="vl-toggle vl-link vl-link--bold" data-vl-accordion-toggle>
                <i class="vl-accordion__icon vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
                <slot name="title" class="vl-accordion__title"></slot>
              </button>
              <div class="vl-accordion__content js-vl-accordion__content">
                <div class="vl-accordion__panel">
                  <slot id="accordion-slot"></slot>
                </div>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.dress(),this._hasTitleSlot()&&this._propagateTitleSlotClickToAccordion(),this.hasAttribute("icon")&&(this._addIconElement(),this._accordionElement.classList.add("vl-accordion--has-icon")),this.hasAttribute("default-open")&&this.open(),this._buttonElement?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("vl-on-toggle",{detail:{open:this._isOpen}}))})}_propagateTitleSlotClickToAccordion(){this._titleElement.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement.click()})}_addIconElement(){let e=this.getAttribute("icon"),t=document.createElement("i");t.classList.add("vl-accordion__icon","vl-link__icon","vl-link__icon--before","vl-toggle__icon","vl-vi",`vl-vi-${e}`),t.setAttribute("aria-hidden","true"),this._buttonElement?.prepend(t)}_hasTitleSlot(){return this._titleElement.assignedElements().length>0}get _accordionElement(){return this._element.querySelector("[data-vl-accordion]")}get _buttonElement(){return this._element.querySelector("button")}get _titleElement(){return this._buttonElement.querySelector('slot[name="title"]')}get _openToggleTextAttribute(){return this.getAttribute("open-toggle-text")}get _closeToggleTextAttribute(){return this.getAttribute("close-toggle-text")}get _dressedAttribute(){return this.getAttribute("accordion-dressed")}get _isDressed(){return!!this._dressedAttribute}get _isOpen(){return this._accordionElement.classList.contains("js-vl-accordion--open")}dress(){this._isDressed||vl.accordion.dress(this._buttonElement)}open(){vl.accordion.open(this._accordionElement)}close(){this._isOpen&&this.toggle()}toggle(){vl.accordion.toggle(this._accordionElement)}_toggleTextChangedCallback(e,t){this._titleElement.textContent=t}_openToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-open-text",t)}_closeToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-close-text",t)}_contentPaddingChangedCallback(e,t){let s=a.RE[t],i=this._element.querySelector(".vl-accordion__panel");s?i.style.padding=s:i.style.removeProperty("padding")}_disabledChangedCallback(e,t){void 0!=t?this._buttonElement?.setAttribute("disabled",""):this._buttonElement?.removeAttribute("disabled")}};r=function(e,t,s,a){var i,n=arguments.length,l=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(l=(n<3?i(l):n>3?i(t,s,l):i(t,s))||l);return n>3&&l&&Object.defineProperty(t,s,l),l}([(0,a.a6)("vl-accordion")],r)},"./libs/components/src/next/steps/stories/vl-steps.stories.ts":(e,t,s)=>{"use strict";s.r(t),s.d(t,{StepsAccordions:()=>E,StepsDefault:()=>j,StepsIcons:()=>T,StepsLine:()=>P,StepsSideNavigation:()=>C,StepsSimpleTimeline:()=>A,StepsStates:()=>D,StepsTimeline:()=>w,default:()=>y});var a=s("./node_modules/lit-html/lit-html.js"),i=s("./libs/common/storybook/src/index.ts");let n={line:!1,timeline:!1,simpleTimeline:!1,lastStepNoLine:!1,toggleable:!1,type:null},l={line:{name:"data-vl-line",description:"Beeldt een verticale lijn af tussen de stappen.",table:{type:{summary:i.vK.BOOLEAN},category:i.aA.ATTRIBUTES,defaultValue:{summary:n.line}}},timeline:{name:"data-vl-timeline",description:"Beeldt een verticale tijdlijn af tussen de stappen.",table:{type:{summary:i.vK.BOOLEAN},category:i.aA.ATTRIBUTES,defaultValue:{summary:n.timeline}}},simpleTimeline:{name:"data-vl-simple-timeline",description:"Beeldt een simpele verticale tijdlijn af tussen de stappen.",table:{type:{summary:i.vK.BOOLEAN},category:i.aA.ATTRIBUTES,defaultValue:{summary:n.simpleTimeline}}},lastStepNoLine:{name:"data-vl-last-step-no-line",description:"Laat de verticale lijn na de laatste stap weg bij gebruik van de line, timeline of simple-timeline attributen.",table:{type:{summary:i.vK.BOOLEAN},category:i.aA.ATTRIBUTES,defaultValue:{summary:n.lastStepNoLine}}},toggleable:{name:"data-vl-toggleable",description:"Beeldt een stap af als een accordion.<br>Dit attribuut wordt geplaatst op een stap.",control:!1,table:{type:{summary:i.vK.BOOLEAN},category:i.aA.CHILD_ATTRIBUTES,defaultValue:{summary:n.toggleable}}},type:{name:"data-vl-type",description:"Beeldt een stap af in een bepaalde staat.<br>Dit attribuut wordt geplaatst op een stap.",control:!1,table:{type:{summary:["highlighted","disabled","success","warning","error"]},category:i.aA.CHILD_ATTRIBUTES,defaultValue:{summary:n.type}}}};s("./node_modules/react/index.js");var o=s("./node_modules/react/jsx-runtime.js"),r=s("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=s("./node_modules/@storybook/blocks/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"steps-next",children:"Steps Next"}),"\n",(0,o.jsxs)(t.p,{children:["Gebruik de ",(0,o.jsx)(t.code,{children:"steps-next"})," component om een verticale lijst van stappen af te beelden om de gebruiker door een procedure\nte begeleiden.",(0,o.jsx)("br",{}),"\nDeze component is de nieuwste versie van de ",(0,o.jsx)(t.a,{href:"?path=/docs/components-steps--steps-default",children:"vl-steps"})," component, we raden\naan deze versie te gebruiken.",(0,o.jsx)("br",{}),"\nDe oude ",(0,o.jsx)(t.a,{href:"?path=/docs/components-steps--steps-default",children:"vl-steps"})," versie blijft behouden voor backwards-compatibility,\nin v2.0.0 zal deze verdwijnen.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { VlStepsComponent } from '@domg-wc/components/next/steps';\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<vl-steps-next></vl-steps-next>\n"})}),"\n",(0,o.jsx)(u.Xz,{of:j}),"\n",(0,o.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,o.jsx)(u.Ed,{of:j}),"\n",(0,o.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,o.jsx)(t.h3,{id:"iconen",children:"Iconen"}),"\n",(0,o.jsx)(u.Xz,{of:T}),"\n",(0,o.jsx)(t.h3,{id:"toestanden",children:"Toestanden"}),"\n",(0,o.jsx)(t.p,{children:'Voeg altijd een tekst toe als een stap disabled is zodat de disabled toestand niet enkel met de grijze kleur\novergebracht wordt, bv. "geannuleerd".'}),"\n",(0,o.jsx)(u.Xz,{of:D}),"\n",(0,o.jsx)(t.h3,{id:"accordions",children:"Accordions"}),"\n",(0,o.jsx)(u.Xz,{of:E}),"\n",(0,o.jsx)(t.h3,{id:"lijn",children:"Lijn"}),"\n",(0,o.jsx)(u.Xz,{of:P}),"\n",(0,o.jsx)(t.h3,{id:"tijdlijn",children:"Tijdlijn"}),"\n",(0,o.jsx)(u.Xz,{of:w}),"\n",(0,o.jsx)(t.h3,{id:"simpele-tijdlijn",children:"Simpele tijdlijn"}),"\n",(0,o.jsxs)(t.p,{children:["Gebruik het ",(0,o.jsx)(t.code,{children:"icon slot"})," of ",(0,o.jsx)(t.code,{children:"sub-icon slot"})," niet in combinatie met de simpele tijdlijn."]}),"\n",(0,o.jsx)(u.Xz,{of:A}),"\n",(0,o.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,o.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-steps",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Steps"})}),"\n",(0,o.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-steps--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Steps"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSteps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Steps"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Steps"})})]})}var d=s("./libs/common/utilities/src/index.ts"),p=s("./node_modules/@domg/govflanders-style/common/index.js"),m=s("./libs/elements/src/index.ts"),v=s("./node_modules/lit/index.js"),g=s("./node_modules/lit/decorators.js"),b=s("./node_modules/lit/directives/class-map.js"),h=s("./node_modules/@domg/govflanders-style/component/index.js"),q=s("./libs/components/src/accordion/vl-accordion.component.ts");let x=(0,v.iv)`
    ::slotted(span.vl-icon) {
        vertical-align: inherit !important;
    }
`,f=class extends d.fS{static{(0,d.YV)([q.b])}static get styles(){return[p.YN,m.CX,h.vV,x]}static get properties(){return{type:{type:String,attribute:"data-vl-type",reflect:!0},toggleable:{type:Boolean,attribute:"data-vl-toggleable",reflect:!0},isTitleAnnotationSlotAssigned:{attribute:!1}}}connectedCallback(){super.connectedCallback(),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.customCSSStyleSheet])}firstUpdated(e){if(super.firstUpdated(e),this.toggleable){let e=this.shadowRoot?.querySelector(".js-vl-accordion__toggle"),t=e?.hasAttribute("data-vl-accordion-dressed");t||(vl.accordion.dress(e),this.shadowRoot?.querySelector('slot[name="title"]')?.addEventListener("click",e=>{e.stopPropagation(),this.shadowRoot?.querySelector("button.js-vl-accordion__toggle")?.click()}))}let t=this.shadowRoot?.querySelector('slot[name="title-annotation"]');this.isTitleAnnotationSlotAssigned=t&&t.assignedNodes().length>0||!1}render(){let e=this.type,t=this.toggleable?this.getAccordionStepHeaderTemplate():this.getStepHeaderTemplate(),s={"vl-step":!0,[`vl-step--${e}`]:!!e,"vl-step--accordion js-vl-accordion":this.toggleable};return(0,v.dy)`
            <li role="listitem" class=${(0,b.$)(s)}>
                <div class="vl-step__container">
                    <div class="vl-step__icon">
                        <slot name="icon"></slot>
                        <span class="vl-step__icon__sub">
                            <slot name="sub-icon"></slot>
                        </span>
                    </div>
                    <div class="vl-step__wrapper">
                        ${t}
                        <div class="vl-step__content-wrapper">
                            <div class="vl-step__content">
                                <slot name="content"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `}getStepHeaderTemplate(){let e=this.getStepHeaderTitleTemplate();return(0,v.dy)` <div class="vl-step__header">${e}</div>`}getAccordionStepHeaderTemplate(){let e=this.getStepHeaderTitleTemplate();return(0,v.dy)`
            <button class="vl-step__header js-vl-accordion__toggle">
                ${e}
                <div class="vl-step__header__info" aria-hidden="true">
                    <em class="vl-step__accordion-toggle"></em>
                </div>
            </button>
        `}getStepHeaderTitleTemplate(){return(0,v.dy)`
            <div class="vl-step__header__titles">
                <h3 class="vl-step__title">
                    <slot name="title"></slot>
                    ${this.isTitleAnnotationSlotAssigned?(0,v.dy)`
                              <span class="vl-step__title__annotation">
                                  <slot name="title-annotation"></slot>
                              </span>
                          `:""}
                </h3>
                <p class="vl-step__subtitle">
                    <slot name="subtitle"></slot>
                </p>
            </div>
        `}setCustomStyles(e){this.customCSSStyleSheet.replaceSync(e)}constructor(...e){super(...e),this.type=null,this.toggleable=!1,this.isTitleAnnotationSlotAssigned=!0,this.customCSSStyleSheet=new CSSStyleSheet}};f=function(e,t,s,a){var i,n=arguments.length,l=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(l=(n<3?i(l):n>3?i(t,s,l):i(t,s))||l);return n>3&&l&&Object.defineProperty(t,s,l),l}([(0,g.Mo)("vl-step-next")],f);let _=class extends d.fS{static get styles(){return[p.YN,m.CX,h.vV]}render(){return(0,v.dy)`
            <li role="listitem" class="vl-duration-step">
                <slot></slot>
            </li>
        `}};_=function(e,t,s,a){var i,n=arguments.length,l=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(l=(n<3?i(l):n>3?i(t,s,l):i(t,s))||l);return n>3&&l&&Object.defineProperty(t,s,l),l}([(0,g.Mo)("vl-duration-step-next")],_);let S=class extends d.fS{static{(0,d.YV)([f,_])}static get styles(){return[p.YN,m.CX,h.vV]}static get properties(){return{line:{type:Boolean,attribute:"data-vl-line",reflect:!0},timeline:{type:Boolean,attribute:"data-vl-timeline",reflect:!0},simpleTimeline:{type:Boolean,attribute:"data-vl-simple-timeline",reflect:!0},lastStepNoLine:{type:Boolean,attribute:"data-vl-last-step-no-line",reflect:!0}}}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(()=>{this.setStepStyles()}),this.observer.observe(this,{childList:!0})}updated(e){super.updated(e),this.setStepStyles()}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}render(){let e={"vl-steps":!0,"vl-steps--has-line":this.line,"vl-steps--timeline":this.timeline,"vl-steps--timeline-simple":this.simpleTimeline,"vl-steps--last-step-no-line":this.lastStepNoLine};return(0,v.dy)`
            <div class=${(0,b.$)(e)}>
                <ul role="list" class="vl-steps__list">
                    <slot></slot>
                </ul>
            </div>
        `}setStepStyles(){let e=[...Array.from(this.children)];e.forEach((e,t,s)=>{if(e instanceof f){let a=this.getStepStyles(t,s);e.setCustomStyles(a)}})}getStepStyles(e,t){let s=e===t.length-1,a=t[e-1]instanceof _,i="";return 0===e||a||(i+=`
                .vl-step {
                    margin-top: 5rem;
                }

                @media screen and (max-width: 767px) {
                    .vl-step {
                        margin-top: 2rem;
                    }
                }
            `),this.line&&(i+=`
            .vl-step::before {
                position: absolute;
                display: block;
                background-color: #cbd2da;
                content: '';
                width: 0.3rem;
                top: calc(4.2rem + 0.4rem);
                bottom: calc(-5rem + 0.4rem);
                left: -5rem;
            }
                
            @media screen and (max-width: 767px) {
                .vl-step::before {
                    top: 3.9rem;
                    bottom: -2rem;
                    left: -3.35rem;
                }
            }
            `),this.lastStepNoLine&&s&&(i+=`
                .vl-step::before {
                    display: none !important;
                }    
            `),this.timeline&&(i+=`
            .vl-step::before {
                position: absolute;
                display: block;
                background-color: #cbd2da;
                content: '';
                width: 0.3rem;
                top: 6rem;
                bottom: -4.6rem;
                left: -5rem;
            }
            @media screen and (max-width: 767px) {
                .vl-step::before {
                    top: 4.4rem;
                    bottom: -1.6rem;
                    left: -3.35rem;
                }
            }
            .vl-step > .vl-step__container > .vl-step__icon {
                font-size: 1.8rem;
                height: auto;
                line-height: 1.5rem;
                border-radius: 0;
                padding: 1.2rem 0;
                top: 0;
            }
            @media screen and (max-width: 767px) {
                .vl-step > .vl-step__container > .vl-step__icon {
                    font-size: 1.5rem;
                    padding: 0.5rem 0;
                }
            }
            .vl-step--success .vl-step__icon {
                background-color: #007a37;
                color: #fff;
            }
            .vl-step--warning .vl-step__icon {
                background-color: #ffa10a;
                color: #333332;
            }
            .vl-step--error .vl-step__icon {
                background-color: #d2373c;
                color: #fff;
            }
            `),this.simpleTimeline&&(i+=`
                .vl-step {
                    padding-top: 0;
                }
                .vl-step::before {
                    position: absolute;
                    display: block;
                    background-color: #cbd2da;
                    content: '';
                    width: 0.3rem;
                    top: 2.2rem;
                    bottom: -7.2rem;
                    left: -5rem;
                }
                @media screen and (max-width: 767px) {
                    .vl-step::before {
                        left: -3.35rem;
                    }
                }
                .vl-step > .vl-step__container > .vl-step__icon {
                    background-color: #687483;
                    height: 2.2rem;
                    width: 2.2rem;
                    transform: translateX(-6rem);
                    margin-top: 0.5rem;
                }
                .vl-step
                    > .vl-step__container
                    > .vl-step__icon
                    > .vl-step__icon__text,
                .vl-step
                    > .vl-step__container
                    > .vl-step__icon
                    > .vl-step__icon__sub {
                    display: none;
                }
                @media screen and (max-width: 767px) {
                    .vl-step > .vl-step__container > .vl-step__icon {
                        transform: translateX(-4.3rem);
                    }
                }
                .vl-step__header__titles {
                    margin-top: 0.1rem;
                }
            `),this.simpleTimeline&&s&&(i+=`
                .vl-step::before {
                    bottom: 0;
                }
            `),i}constructor(...e){super(...e),this.line=!1,this.timeline=!1,this.simpleTimeline=!1,this.lastStepNoLine=!1,this.observer=null}};S=function(e,t,s,a){var i,n=arguments.length,l=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(l=(n<3?i(l):n>3?i(t,s,l):i(t,s))||l);return n>3&&l&&Object.defineProperty(t,s,l),l}([(0,g.Mo)("vl-steps-next")],S);let y={title:"Components-next/steps-next",tags:["autodocs"],args:(0,i.T8)(n),argTypes:(0,i.xj)(l),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}},j=(0,i.yg)(n,({line:e,timeline:t,lastStepNoLine:s})=>(0,a.dy)`
        <vl-steps-next ?data-vl-line=${e} ?data-vl-timeline=${t} ?data-vl-last-step-no-line=${s}>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);j.storyName="vl-steps-next - default";let T=(0,i.yg)(n,({line:e,timeline:t,lastStepNoLine:s})=>(0,a.dy)`
        <vl-steps-next ?data-vl-line=${e} ?data-vl-timeline=${t} ?data-vl-last-step-no-line=${s}>
            <vl-step-next>
                <span slot="icon" is="vl-icon" data-vl-icon="search"></span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon" is="vl-icon" data-vl-icon="calendar"></span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon" is="vl-icon" data-vl-icon="clock"></span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);T.storyName="vl-steps-next - icons";let D=(0,i.yg)(n,({line:e,timeline:t,lastStepNoLine:s})=>(0,a.dy)`
        <vl-steps-next ?data-vl-line=${e} ?data-vl-timeline=${t} ?data-vl-last-step-no-line=${s}>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="highlighted">
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="disabled">
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Deze stap is geannuleerd.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="success">
                <span slot="icon">4</span>
                <span slot="title">Stap 4: vierde actie</span>
                <span slot="subtitle">Dit is de vierde subtitel.</span>
                <span slot="content">Dit is de vierde stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="warning">
                <span slot="icon">5</span>
                <span slot="title">Stap 5: vijfde actie</span>
                <span slot="subtitle">Dit is de vijfde subtitel.</span>
                <span slot="content">Dit is de vijfde stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-type="error">
                <span slot="icon">6</span>
                <span slot="title">Stap 6: zesde actie</span>
                <span slot="subtitle">Dit is de zesde subtitel.</span>
                <span slot="content">Dit is de zesde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);D.storyName="vl-steps-next - states";let E=(0,i.yg)(n,({line:e,timeline:t,lastStepNoLine:s})=>(0,a.dy)`
        <vl-steps-next ?data-vl-line=${e} ?data-vl-timeline=${t} ?data-vl-last-step-no-line=${s}>
            <vl-step-next data-vl-toggleable>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-toggleable>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next data-vl-toggleable>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);E.storyName="vl-steps-next - accordions";let P=(0,i.yg)(n,({line:e,lastStepNoLine:t})=>(0,a.dy)`
        <vl-steps-next ?data-vl-line=${e} ?data-vl-last-step-no-line=${t}>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon">2</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="icon">3</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);P.storyName="vl-steps-next - line",P.args={line:!0};let w=(0,i.yg)(n,({timeline:e,lastStepNoLine:t})=>(0,a.dy)`
        <vl-steps-next ?data-vl-timeline=${e} ?data-vl-last-step-no-line=${t}>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="title-annotation">12u00 - 14u00</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-duration-step-next>Vrije tijd: 1 uur</vl-duration-step-next>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="title-annotation">15u00 - 17u00</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-duration-step-next>Vrije tijd: 2 uur</vl-duration-step-next>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="sub-icon">maa</span>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="title-annotation">19u00 - 21u00</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);w.storyName="vl-steps-next - timeline",w.args={timeline:!0};let A=(0,i.yg)(n,({simpleTimeline:e,lastStepNoLine:t})=>(0,a.dy)`
        <vl-steps-next ?data-vl-simple-timeline=${e} ?data-vl-last-step-no-line=${t}>
            <vl-step-next>
                <span slot="title">Stap 1: eerste actie</span>
                <span slot="subtitle">Dit is de eerste subtitel.</span>
                <span slot="content">Dit is de eerste stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="title">Stap 2: tweede actie</span>
                <span slot="subtitle">Dit is de tweede subtitel.</span>
                <span slot="content">Dit is de tweede stap content.</span>
            </vl-step-next>
            <vl-step-next>
                <span slot="title">Stap 3: derde actie</span>
                <span slot="subtitle">Dit is de derde subtitel.</span>
                <span slot="content">Dit is de derde stap content.</span>
            </vl-step-next>
        </vl-steps-next>
    `);A.storyName="vl-steps-next - simple timeline",A.args={simpleTimeline:!0};let C=(0,i.yg)(n,()=>(0,a.dy)`
        <section is="vl-region">
            <div is="vl-layout">
                <div is="vl-grid" data-vl-is-stacked>
                    <div
                        is="vl-column"
                        data-vl-size="8"
                        data-vl-medium-size="8"
                        data-vl-small-size="8"
                        data-vl-extra-small-size="12"
                    >
                        <div is="vl-side-navigation-reference">
                            <vl-steps-next>
                                <vl-step-next>
                                    <span slot="icon">1</span>
                                    <span slot="title">
                                        <div id="vl-steps-vl-step-1">Stap 1: eerste actie</div>
                                    </span>
                                    <span slot="content">
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                        </div>
                                    </span>
                                </vl-step-next>
                                <vl-step-next>
                                    <span slot="icon">2</span>
                                    <span slot="title">
                                        <div id="vl-steps-vl-step-2">Stap 2: tweede actie</div>
                                    </span>
                                    <span slot="content">
                                        <div>
                                            <h4 is="vl-h4" id="vl-steps-vl-step-2-abstract">Abstract</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <h4 is="vl-h4" id="vl-steps-vl-step-2-volledig">Volledig</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                        </div>
                                    </span>
                                </vl-step-next>
                                <vl-step-next>
                                    <span slot="icon">3</span>
                                    <span slot="title">
                                        <div id="vl-steps-vl-step-3">Stap 3: derde actie</div>
                                    </span>
                                    <span slot="content">
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel
                                                pretium lectus quam id. Penatibus et magnis dis parturient montes
                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas
                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor
                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.
                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu
                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas
                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.
                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac
                                                felis donec. Elit pellentesque habitant morbi tristique senectus et
                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                                                Tortor consequat id porta nibh venenatis cras.
                                            </p>
                                        </div>
                                    </span>
                                </vl-step-next>
                            </vl-steps-next>
                        </div>
                    </div>
                    <div
                        is="vl-column"
                        data-vl-size="3"
                        data-vl-medium-size="3"
                        data-vl-small-size="3"
                        data-vl-extra-small-size="0"
                    >
                        <nav is="vl-side-navigation" aria-label="inhoudsopgave">
                            <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
                            <div is="vl-side-navigation-content">
                                <ul is="vl-side-navigation-group">
                                    <li is="vl-side-navigation-item">
                                        <a is="vl-side-navigation-toggle" href="#vl-steps-vl-step-1">
                                            step 1
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                    </li>
                                    <li is="vl-side-navigation-item" data-vl-parent="step-2">
                                        <a
                                            is="vl-side-navigation-toggle"
                                            href="#vl-steps-vl-step-2"
                                            data-vl-child="step-2"
                                        >
                                            step 2
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                        <ul>
                                            <li is="vl-side-navigation-item">
                                                <div>
                                                    <a href="#vl-steps-vl-step-2-abstract" data-vl-parent="step-2"
                                                        >Abstract</a
                                                    >
                                                </div>
                                            </li>
                                            <li is="vl-side-navigation-item">
                                                <div>
                                                    <a href="#vl-steps-vl-step-2-volledig" data-vl-parent="step-2"
                                                        >Volledig</a
                                                    >
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <a is="vl-side-navigation-toggle" href="#vl-steps-vl-step-3">
                                            step 3
                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    `);C.storyName="vl-steps-next - side navigation",j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...j.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon" is="vl-icon" data-vl-icon="search"></span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon" is="vl-icon" data-vl-icon="calendar"></span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon" is="vl-icon" data-vl-icon="clock"></span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="highlighted">\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="disabled">\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Deze stap is geannuleerd.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="success">\n                <span slot="icon">4</span>\n                <span slot="title">Stap 4: vierde actie</span>\n                <span slot="subtitle">Dit is de vierde subtitel.</span>\n                <span slot="content">Dit is de vierde stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="warning">\n                <span slot="icon">5</span>\n                <span slot="title">Stap 5: vijfde actie</span>\n                <span slot="subtitle">Dit is de vijfde subtitel.</span>\n                <span slot="content">Dit is de vijfde stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-type="error">\n                <span slot="icon">6</span>\n                <span slot="title">Stap 6: zesde actie</span>\n                <span slot="subtitle">Dit is de zesde subtitel.</span>\n                <span slot="content">Dit is de zesde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...D.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next data-vl-toggleable>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-toggleable>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next data-vl-toggleable>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...E.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  line,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-line=${line} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">2</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="icon">3</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...P.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  timeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-timeline=${timeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="title-annotation">12u00 - 14u00</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-duration-step-next>Vrije tijd: 1 uur</vl-duration-step-next>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="title-annotation">15u00 - 17u00</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-duration-step-next>Vrije tijd: 2 uur</vl-duration-step-next>\n            <vl-step-next>\n                <span slot="icon">1</span>\n                <span slot="sub-icon">maa</span>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="title-annotation">19u00 - 21u00</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...w.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:'story(stepsArgs, ({\n  simpleTimeline,\n  lastStepNoLine\n}) => html`\n        <vl-steps-next ?data-vl-simple-timeline=${simpleTimeline} ?data-vl-last-step-no-line=${lastStepNoLine}>\n            <vl-step-next>\n                <span slot="title">Stap 1: eerste actie</span>\n                <span slot="subtitle">Dit is de eerste subtitel.</span>\n                <span slot="content">Dit is de eerste stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="title">Stap 2: tweede actie</span>\n                <span slot="subtitle">Dit is de tweede subtitel.</span>\n                <span slot="content">Dit is de tweede stap content.</span>\n            </vl-step-next>\n            <vl-step-next>\n                <span slot="title">Stap 3: derde actie</span>\n                <span slot="subtitle">Dit is de derde subtitel.</span>\n                <span slot="content">Dit is de derde stap content.</span>\n            </vl-step-next>\n        </vl-steps-next>\n    `)',...A.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:'story(stepsArgs, () => html`\n        <section is="vl-region">\n            <div is="vl-layout">\n                <div is="vl-grid" data-vl-is-stacked>\n                    <div\n                        is="vl-column"\n                        data-vl-size="8"\n                        data-vl-medium-size="8"\n                        data-vl-small-size="8"\n                        data-vl-extra-small-size="12"\n                    >\n                        <div is="vl-side-navigation-reference">\n                            <vl-steps-next>\n                                <vl-step-next>\n                                    <span slot="icon">1</span>\n                                    <span slot="title">\n                                        <div id="vl-steps-vl-step-1">Stap 1: eerste actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step-next>\n                                <vl-step-next>\n                                    <span slot="icon">2</span>\n                                    <span slot="title">\n                                        <div id="vl-steps-vl-step-2">Stap 2: tweede actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <h4 is="vl-h4" id="vl-steps-vl-step-2-abstract">Abstract</h4>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <h4 is="vl-h4" id="vl-steps-vl-step-2-volledig">Volledig</h4>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step-next>\n                                <vl-step-next>\n                                    <span slot="icon">3</span>\n                                    <span slot="title">\n                                        <div id="vl-steps-vl-step-3">Stap 3: derde actie</div>\n                                    </span>\n                                    <span slot="content">\n                                        <div>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                            <p>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel\n                                                pretium lectus quam id. Penatibus et magnis dis parturient montes\n                                                nascetur ridiculus. Malesuada nunc vel risus commodo viverra maecenas\n                                                accumsan lacus. Pretium lectus quam id leo in vitae. Dictum at tempor\n                                                commodo ullamcorper a lacus. Facilisis gravida neque convallis a cras.\n                                                Ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu\n                                                bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas\n                                                pharetra convallis posuere morbi leo. Proin gravida hendrerit lectus a.\n                                                Sit amet mattis vulputate enim nulla aliquet porttitor. Eu consequat ac\n                                                felis donec. Elit pellentesque habitant morbi tristique senectus et\n                                                netus et. Tristique et egestas quis ipsum suspendisse ultrices gravida.\n                                                Tortor consequat id porta nibh venenatis cras.\n                                            </p>\n                                        </div>\n                                    </span>\n                                </vl-step-next>\n                            </vl-steps-next>\n                        </div>\n                    </div>\n                    <div\n                        is="vl-column"\n                        data-vl-size="3"\n                        data-vl-medium-size="3"\n                        data-vl-small-size="3"\n                        data-vl-extra-small-size="0"\n                    >\n                        <nav is="vl-side-navigation" aria-label="inhoudsopgave">\n                            <h5 is="vl-side-navigation-h5">Op deze pagina</h5>\n                            <div is="vl-side-navigation-content">\n                                <ul is="vl-side-navigation-group">\n                                    <li is="vl-side-navigation-item">\n                                        <a is="vl-side-navigation-toggle" href="#vl-steps-vl-step-1">\n                                            step 1\n                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                        </a>\n                                    </li>\n                                    <li is="vl-side-navigation-item" data-vl-parent="step-2">\n                                        <a\n                                            is="vl-side-navigation-toggle"\n                                            href="#vl-steps-vl-step-2"\n                                            data-vl-child="step-2"\n                                        >\n                                            step 2\n                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                        </a>\n                                        <ul>\n                                            <li is="vl-side-navigation-item">\n                                                <div>\n                                                    <a href="#vl-steps-vl-step-2-abstract" data-vl-parent="step-2"\n                                                        >Abstract</a\n                                                    >\n                                                </div>\n                                            </li>\n                                            <li is="vl-side-navigation-item">\n                                                <div>\n                                                    <a href="#vl-steps-vl-step-2-volledig" data-vl-parent="step-2"\n                                                        >Volledig</a\n                                                    >\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li is="vl-side-navigation-item">\n                                        <a is="vl-side-navigation-toggle" href="#vl-steps-vl-step-3">\n                                            step 3\n                                            <i class="vl-vi vl-vi-arrow-right-fat"></i>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </nav>\n                    </div>\n                </div>\n            </div>\n        </section>\n    `)',...C.parameters?.docs?.source}}}}}]);