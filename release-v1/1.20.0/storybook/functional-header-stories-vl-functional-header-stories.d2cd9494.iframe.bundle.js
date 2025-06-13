"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9289],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{n.d(t,{NF:()=>i,Zo:()=>s,ah:()=>r,pC:()=>l});var a=n("./node_modules/react/index.js");let l=a.createContext({});function i(e){return function(t){let n=r(t.components);return a.createElement(e,{...t,allComponents:n})}}function r(e){let t=a.useContext(l);return a.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let o={};function s({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:i},t)}},"./node_modules/lit-html/directive.js":(e,t,n)=>{n.d(t,{XM:()=>l,Xe:()=>i,pX:()=>a});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return{_$litDirective$:e,values:n}};class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,n)=>{var a;n.d(t,{Mo:()=>l,Cb:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let l=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{let{kind:n,elements:a}=t;return{kind:n,elements:a,finisher(t){customElements.define(e,t)}}})(e,t),i=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:{...t,finisher(n){n.createProperty(t.key,e)}},r=(e,t,n)=>{t.constructor.createProperty(n,e)};function o(e){return(t,n)=>void 0!==n?r(e,t,n):i(e,t)}null!=(null===(a=window.HTMLSlotElement)||void 0===a?void 0:a.prototype.assignedElements)||((e,t)=>e.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE))},"./node_modules/lit/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{A:()=>r});var a=n("./node_modules/lit-html/lit-html.js"),l=n("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends l.Xe{constructor(e){if(super(e),this.et=a.Ld,e.type!==l.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===a.Ld||null==e)return this.ft=void 0,this.et=e;if(e===a.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;var t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;var r=(0,l.XM)(i)},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */n("./node_modules/object-assign/index.js");var a=n("./node_modules/react/index.js"),l=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;l=i("react.element"),t.Fragment=i("react.fragment")}var r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,i={},d=null,c=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,a)&&!s.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:l,type:e,key:d,ref:c,props:i,_owner:r.current}}t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts":(e,t,n)=>{n.d(t,{h:()=>d});var a=n("./node_modules/@domg/govflanders-style/component/index.js"),l=n("./node_modules/@domg/govflanders-style/common/index.js"),i=n("./node_modules/lit/index.js"),r=n("./node_modules/lit/decorators.js"),o=n("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts"),s=n("./libs/common/utilities/src/index.ts");let d=class extends s.fS{static get properties(){return{href:{type:String,attribute:"data-vl-href",reflect:!0}}}static get styles(){return[l.YN,a.nC,o.Z]}render(){return this.href?(0,i.dy)`
                <a href=${this.href} class="vl-breadcrumb__list__item__cta">
                    <slot></slot>
                </a>
            `:(0,i.dy)`
            <span class="vl-breadcrumb__list__item__cta">
                <slot></slot>
            </span>
        `}constructor(...e){super(...e),this.href=""}};d=function(e,t,n,a){var l,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(i<3?l(r):i>3?l(t,n,r):l(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r}([(0,r.Mo)("vl-breadcrumb-item")],d)},"./libs/components/src/breadcrumb/vl-breadcrumb.component.ts":(e,t,n)=>{n.d(t,{c:()=>d});var a=n("./node_modules/@domg/govflanders-style/component/index.js"),l=n("./node_modules/@domg/govflanders-style/common/index.js"),i=n("./node_modules/lit/index.js"),r=n("./node_modules/lit/decorators.js"),o=n("./libs/common/utilities/src/index.ts"),s=n("./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts");let d=class extends o.fS{static get styles(){return[l.YN,a.nC,s.Z]}firstUpdated(){let e=new MutationObserver(()=>{this.requestUpdate()});e.observe(this,{subtree:!0,childList:!0})}render(){return(0,i.dy)`
            <nav aria-label="U bent hier: " class="vl-breadcrumb">
                <ol class="vl-breadcrumb__list">
                    ${[...Array.from(this.children)].map((e,t)=>{let n=`item-${t}`;return e.setAttribute("slot",n),(0,i.dy)`
                            <li class="vl-breadcrumb__list__item">
                                <span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>
                                <slot name=${n}></slot>
                            </li>
                        `})}
                </ol>
            </nav>
        `}};d=function(e,t,n,a){var l,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(i<3?l(r):i>3?l(t,n,r):l(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r}([(0,r.Mo)("vl-breadcrumb")],d)},"./libs/components/src/breadcrumb/vl-breadcrumb.uig-css.ts":(e,t,n)=>{n.d(t,{Z:()=>i});var a=n("./node_modules/lit/index.js");let l=(0,a.iv)`
    .vl-breadcrumb__list__item__cta {
        display: flex;
        position: relative;
        top: -1px;
    }

    span.vl-breadcrumb__list__item__cta {
        color: unset;
        cursor: default;
        text-decoration: none;
    }

    span.vl-breadcrumb__list__item__cta:hover {
        text-decoration: none;
    }

    .vl-breadcrumb__list__item__separator {
        justify-content: center;
    }
`,i=l},"./libs/components/src/functional-header/vl-functional-header.component.ts":(e,t,n)=>{n.d(t,{D:()=>d});var a=n("./libs/common/utilities/src/index.ts"),l=n("./libs/elements/src/index.ts"),i=n("./node_modules/@domg/govflanders-style/common/index.js"),r=n("./node_modules/@domg/govflanders-style/component/index.js"),o=n("./node_modules/lit/index.js");let s=(0,o.iv)`
    .uig-functional-header__content {
        display: flex;
        flex-flow: column;
    }

    .uig-functional-header__row {
        display: flex;
        flex-direction: row;
    }

    #back-link {
        display: flex;
    }

    @media (max-width: 767px) {
        .uig-functional-header__row {
            flex-direction: column;
        }
        .uig-functional-header__top-right {
            padding: 0.5rem 1rem 0 1rem;
        }
    }
    :host(.vl-functional-header--full-width) .vl-layout {
        max-width: 100%;
    }
`,d=class extends(0,a.W$)(HTMLElement){static{(0,a.YV)([l.Gi,l.gG])}static get _observedAttributes(){return["back","back-link","disable-back-link","hide-back-link","link","margin-bottom","sub-title","title"]}static get _observedClassAttributes(){return["full-width"]}get _classPrefix(){return"vl-functional-header--"}constructor(){super(`
          <style>
            ${i.YN}
            ${i.Oh}
            ${i.LF}
            ${i.QT}
            ${r.kb}
            ${s}
          </style>
          <header class="vl-functional-header">
            <div class="vl-layout">
              <div class="vl-functional-header__row uig-functional-header__row">
                <div class="uig-functional-header__content">
                    <div class="vl-functional-header__content">
                        <slot name="top-left"></slot>
                    </div>
                    <div class="vl-functional-header__content">
                        <div class="vl-title">
                            <a id="title" class="vl-functional-header__title" tabindex="0">
                                <slot name="title"></slot>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="uig-functional-header__top-right">
                    <slot name="top-right"></slot>
                </div>
                <div id="actions" class="vl-functional-header__actions">
                    <ul></ul>
                </div>
              </div>
              <div class="vl-functional-header__sub" id="sub-header">
                <slot name="sub-header">
                  <ul class="vl-functional-header__sub__actions">
                      <li id="back-link-container" class="vl-functional-header__sub__action">
                          <slot name="back-link">
                              <a id="back-link" is="vl-link" tabindex="0" href="${document.referrer}">
                                  <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
                                  <slot id="back-link-text" name="back"><span>Terug</span></slot>
                              </a>
                          </slot>
                      </li>
                      <li id="sub-title" class="vl-functional-header__sub__action">
                          <slot name="sub-title"></slot>
                      </li>
                  </ul>
                </slot>
              </div>
            </div>
          </header>
        `)}connectedCallback(){super.connectedCallback(),this._observer=this.__observeSlotElements(()=>this.__processSlotElements()),this.__processSlotElements(),this._backLinkElement&&(this._backLinkElement.onclick=e=>this._handleClickBackLink(e))}disconnectedCallback(){this._observer.disconnect()}get _titleElement(){return this._shadow.querySelector("#title")}get _subTitleElement(){return this._shadow.querySelector("#sub-title")}get _backLinkContainer(){return this._shadow.querySelector("#back-link-container")}get _backLinkElement(){return this._shadow.querySelector("#back-link")}get _backLinkTextElement(){return this._backLinkElement.querySelector("#back-link-text")}get _actionsElement(){return this._shadow.querySelector("#actions")}get _subHeaderElement(){return this._shadow.querySelector("#sub-header")}get _defaultSubHeaderElement(){return this._shadow.querySelector("#default-sub-header")}get _actionsListElement(){return this._actionsElement.querySelector("ul")}get _subHeaderListElement(){return this._subHeaderElement.querySelector("ul")}get _subTitleListElements(){return this._subTitleListElement.querySelectorAll("li")}_getActionTemplate(e){return this._template(`
      <li class="vl-functional-header__action">
        <p>${e.outerHTML}</p>
      </li>
    `)}_getSubHeaderTemplate(e){return this._getSubHeaderTemplateWithValue(e.outerHTML)}_getSubHeaderTemplateWithValue(e){return this._template(`<li class="vl-functional-header__sub__action">${e}</li>`)}_titleChangedCallback(e,t){this._titleElement.innerText=t}_subTitleChangedCallback(e,t){this._subTitleElement.innerText=t}_linkChangedCallback(e,t){this._titleElement.href=t}_backChangedCallback(e,t){this._backLinkTextElement.innerText=t}_backLinkChangedCallback(e,t){this._backLinkElement.href=t||document.referrer}_marginBottomChangedCallback(e,t){let n=a.mt[t],l=this._shadow.querySelector(".vl-functional-header");n?l.style.marginBottom=n:l.style.removeProperty("margin-bottom")}_hideBackLinkChangedCallback(e,t){void 0!=t&&this._backLinkContainer?.remove()}_handleClickBackLink(e){this.hasAttribute("disable-back-link")&&e.preventDefault(),this.dispatchEvent(new CustomEvent("vl-click-back",{bubbles:!0,composed:!0}))}set backLinkEventListener(e){this._backLinkEventListener&&this._backLinkElement.removeEventListener("click",this._backLinkEventListener),this._backLinkEventListener=e,this._backLinkElement.addEventListener("click",this._backLinkEventListener)}__processSlotElements(){this.__processSlotActions()}__processSlotSubHeader(){this._subHeaderListElement.innerHTML="";let e=this.querySelector('[slot="sub-header"]');e?([...e.children].map(e=>this._getSubHeaderTemplate(e)).forEach(e=>this._subHeaderListElement.append(e)),this._defaultSubHeaderElement.hidden=!0):this._subHeaderElement.hidden=!0}__processSlotActions(){this._actionsListElement.innerHTML="";let e=this.querySelector('[slot="actions"]');e?[...e.children].map(e=>this._getActionTemplate(e)).forEach(e=>this._actionsListElement.append(e)):this._actionsElement.hidden=!0}__observeSlotElements(e){let t=new MutationObserver(e);return t.observe(this,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t}};d=function(e,t,n,a){var l,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(i<3?l(r):i>3?l(t,n,r):l(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r}([(0,a.a6)("vl-functional-header")],d)},"./libs/components/src/functional-header/stories/vl-functional-header.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{FunctionalHeaderActions:()=>y,FunctionalHeaderBreadcrumb:()=>T,FunctionalHeaderDefault:()=>_,FunctionalHeaderSlots:()=>S,FunctionalHeaderTabs:()=>L,default:()=>p});var a=n("./libs/common/storybook/src/index.ts"),l=n("./libs/common/utilities/src/index.ts"),i=n("./node_modules/@storybook/addon-actions/dist/index.mjs"),r=n("./node_modules/lit-html/lit-html.js"),o=n("./node_modules/lit/directives/unsafe-html.js"),s=n("./libs/components/src/breadcrumb/vl-breadcrumb-item.component.ts"),d=n("./libs/components/src/breadcrumb/vl-breadcrumb.component.ts"),c=n("./libs/components/src/tabs/vl-tabs.component.ts"),u=n("./libs/components/src/functional-header/vl-functional-header.component.ts");let b={back:"Terug",backLink:"document.referrer",disableBackLink:!1,fullWidth:!1,hideBackLink:!1,link:"",marginBottom:"large",subTitle:"",title:"",actionsSlot:"",backSlot:"",backLinkSlot:"",subHeaderSlot:"",subTitleSlot:"",titleSlot:"",topLeftSlot:"",topRightSlot:"",onClickBack:(0,i.aD)("vl-click-back")},m={back:{name:"data-vl-back",description:"Tekst van de terug-link.",table:{type:{summary:a.vK.STRING},category:a.aA.ATTRIBUTES,defaultValue:{summary:b.back}}},backLink:{name:"data-vl-back-link",description:"URL van de terug-link.",table:{type:{summary:a.vK.URL},category:a.aA.ATTRIBUTES,defaultValue:{summary:b.backLink}}},disableBackLink:{name:"data-vl-disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:a.vK.BOOLEAN},category:a.aA.ATTRIBUTES,defaultValue:{summary:b.disableBackLink}}},fullWidth:{name:"data-vl-full-width",description:"Gebruik de volledige breedte van het scherm.",table:{type:{summary:a.vK.BOOLEAN},category:a.aA.ATTRIBUTES,defaultValue:{summary:b.fullWidth}}},hideBackLink:{name:"data-vl-hide-back-link",description:"Verbergt de terug link.<br>Dit attribuut is niet reactief.",table:{type:{summary:a.vK.BOOLEAN},category:a.aA.ATTRIBUTES,defaultValue:{summary:b.hideBackLink}}},link:{name:"data-vl-link",description:"URL van de titel-link.",table:{type:{summary:a.vK.URL},category:a.aA.ATTRIBUTES,defaultValue:{summary:b.link}}},marginBottom:{name:"data-vl-margin-bottom",description:"De grootte van de margin onder de functional header.",control:{type:"select",options:[...Object.keys(l.mt)]},table:{type:{summary:Object.keys(l.mt)},category:a.aA.ATTRIBUTES,defaultValue:{summary:b.marginBottom}}},subTitle:{name:"data-vl-sub-title",description:"Tekst van de subtitel.",table:{type:{summary:a.vK.STRING},category:a.aA.ATTRIBUTES,defaultValue:{summary:b.subTitle}}},title:{name:"data-vl-title",description:"Tekst van de titel.",table:{type:{summary:a.vK.STRING},category:a.aA.ATTRIBUTES,defaultValue:{summary:b.title}}},actionsSlot:{name:"actions",description:"Acties die worden afgebeeld in de rechterbovenhoek.",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS}},backSlot:{name:"back",description:"Wordt afgebeeld ipv de tekst van de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-back attribuut<br>• back-link slot<br>• sub-header slot",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS}},backLinkSlot:{name:"back-link",description:"Wordt afgebeeld ipv de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-back attribuut<br>• data-vl-back-link attribuut<br>• data-vl-disable-back-link attribuutt<br>• back slot<br>• sub-header slot",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS}},subHeaderSlot:{name:"sub-header",description:"Wordt afgebeeld onder de horizontale lijn.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-back attribuut<br>• data-vl-back-link attribuut<br>• data-vl-disable-back-link attribuut<br>• data-vl-sub-title attribuut<br>• back slot<br>• back-link slot<br>• sub-title slot",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS}},subTitleSlot:{name:"sub-title",description:"Wordt afgebeeld ipv de tekst van de subtitel.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-sub-title<br>• sub-header slot",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS}},titleSlot:{name:"title",description:"Wordt afgebeeld ipv de tekst van de titel.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-title",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS}},topLeftSlot:{name:"top-left",description:"Wordt afgebeeld in de linkerbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS}},topRightSlot:{name:"top-right",description:"Wordt afgebeeld in de rechterbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot",table:{type:{summary:a.vK.HTML},category:a.aA.SLOTS}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:a.aA.EVENTS}}};n("./node_modules/react/index.js");var h=n("./node_modules/react/jsx-runtime.js"),v=n("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),k=n("./node_modules/@storybook/blocks/dist/index.mjs");function f(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,v.ah)(),e.components);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:"functional-header",children:"Functional Header"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.code,{children:"functional-header"})," component om bovenaan de pagina generieke informatie te tonen zoals bijvoorbeeld\neen titel en acties."]}),"\n",(0,h.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"import { VlFunctionalHeaderComponent } from '@domg-lib/components';\n"})}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:"<vl-functional-header></vl-functional-header>\n"})}),"\n",(0,h.jsx)(k.Xz,{of:_}),"\n",(0,h.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,h.jsx)(k.Ed,{of:_}),"\n",(0,h.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,h.jsx)(t.h3,{id:"met-acties",children:"Met acties"}),"\n",(0,h.jsx)(k.Xz,{of:y}),"\n",(0,h.jsx)(t.h3,{id:"met-slots",children:"Met slots"}),"\n",(0,h.jsx)(k.Xz,{of:S}),"\n",(0,h.jsx)(t.h3,{id:"met-tabs",children:"Met tabs"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.a,{href:"/docs/components-tabs--tabs-default",children:"vl-tabs"})," component in het ",(0,h.jsx)(t.code,{children:"sub-header"})," slot om tabs af te beelden binnen de ",(0,h.jsx)(t.code,{children:"functional-header"}),"."]}),"\n",(0,h.jsx)(k.Xz,{of:L}),"\n",(0,h.jsx)(t.h3,{id:"met-breadcrumb",children:"Met breadcrumb"}),"\n",(0,h.jsxs)(t.p,{children:["Gebruik de ",(0,h.jsx)(t.a,{href:"/docs/components-breadcrumb--breadcrumb-default",children:"vl-breadcrumb"})," component in het ",(0,h.jsx)(t.code,{children:"sub-title"})," slot om een breadcrumb af te beelden binnen de\n",(0,h.jsx)(t.code,{children:"functional-header"}),".",(0,h.jsx)("br",{})," Plaats het ",(0,h.jsx)(t.code,{children:"data-vl-hide-back-link"})," attribuut om de terug-link te verbergen."]}),"\n",(0,h.jsx)(k.Xz,{of:T}),"\n",(0,h.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,h.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-functional-header",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Functional Header"})}),"\n",(0,h.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-functional-header--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Functional Header"})}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlFunctionalHeader.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Functional Header"})}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-functional-header.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo  - Functional Header"})})]})}(0,l.YV)([d.c,s.h,u.D,c.z]);let p={title:"Components/functional-header",tags:["autodocs"],args:(0,a.T8)(b),argTypes:(0,a.xj)(m),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,v.ah)(),e.components);return t?(0,h.jsx)(t,Object.assign({},e,{children:(0,h.jsx)(f,e)})):f(e)}}}},g=(0,a.yg)(b,({back:e,backLink:t,disableBackLink:n,fullWidth:a,hideBackLink:l,link:i,marginBottom:s,subTitle:d,title:c,actionsSlot:u,backSlot:b,backLinkSlot:m,subHeaderSlot:h,subTitleSlot:v,titleSlot:k,topLeftSlot:f,topRightSlot:p,onClickBack:g})=>(0,r.dy)`
        <vl-functional-header
            data-vl-back=${e}
            data-vl-back-link=${t}
            ?data-vl-disable-back-link=${n}
            ?data-vl-full-width=${a}
            ?data-vl-hide-back-link=${l}
            data-vl-link=${i}
            data-vl-margin-bottom=${s}
            data-vl-sub-title=${d}
            data-vl-title=${c}
            @vl-click-back=${g}
        >
            ${(0,o.A)(u)}${(0,o.A)(b)}${(0,o.A)(m)}${(0,o.A)(h)}
            ${(0,o.A)(v)}${(0,o.A)(k)}${(0,o.A)(f)}${(0,o.A)(p)}
        </vl-functional-header>
    `),_=g.bind({});_.storyName="vl-functional-header - default",_.args={subTitle:"Voor lager, middelbaar en hoger onderwijs",title:"School- en studietoelagen"};let y=g.bind({});y.storyName="vl-functional-header - actions",y.args={subTitle:"Voor lager, middelbaar en hoger onderwijs",title:"School- en studietoelagen",actionsSlot:`<div slot="actions">
        <a href="#">Actie 1</a>
        <a href="#">Actie 2</a>
    </div>`};let S=g.bind({});S.storyName="vl-functional-header - slots",S.args={backSlot:'<span slot="back">Terug</span>',backLinkSlot:'<a slot="back-link" href="#">Terug</a>',subHeaderSlot:'<span slot="sub-header">Sub header content</span>',subTitleSlot:'<span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>',titleSlot:'<span slot="title">School- en studietoelagen</span>',topLeftSlot:'<span slot="top-left">Linkerbovenhoek content</span>',topRightSlot:'<span slot="top-right">Rechterbovenhoek content</span>'};let L=(0,a.yg)(b,({fullWidth:e,marginBottom:t,title:n,link:a})=>(0,r.dy)`
        <vl-functional-header
            ?data-vl-full-width=${e}
            data-vl-link=${a}
            data-vl-margin-bottom=${t}
            data-vl-title=${n}
        >
            <vl-tabs
                slot="sub-header"
                data-vl-disable-links
                data-vl-within-functional-header
                data-vl-active-tab="trein"
                @change=${e=>(0,i.aD)("change")(e.detail)}
            >
                <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>
                <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>
                <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>
            </vl-tabs>
        </vl-functional-header>
    `);L.storyName="vl-functional-header - tabs",L.args={title:"School- en studietoelagen"};let T=(0,a.yg)(b,({fullWidth:e,marginBottom:t,title:n,link:a})=>(0,r.dy)`
        <vl-functional-header
            ?data-vl-full-width=${e}
            data-vl-link=${a}
            data-vl-margin-bottom=${t}
            data-vl-title=${n}
            data-vl-hide-back-link
        >
            <vl-breadcrumb slot="sub-title">
                <vl-breadcrumb-item data-vl-href=${"1"}>Vlaanderen Intern</vl-breadcrumb-item>
                <vl-breadcrumb-item data-vl-href=${"2"}>Regelgeving</vl-breadcrumb-item>
                <vl-breadcrumb-item data-vl-href=${"3"}>Webuniversum</vl-breadcrumb-item>
                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
            </vl-breadcrumb>
        </vl-functional-header>
    `);T.storyName="vl-functional-header - breadcrumb",T.args={title:"School- en studietoelagen"},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"story(functionalHeaderArgs, ({\n  back,\n  backLink,\n  disableBackLink,\n  fullWidth,\n  hideBackLink,\n  link,\n  marginBottom,\n  subTitle,\n  title,\n  actionsSlot,\n  backSlot,\n  backLinkSlot,\n  subHeaderSlot,\n  subTitleSlot,\n  titleSlot,\n  topLeftSlot,\n  topRightSlot,\n  onClickBack\n}) => html`\n        <vl-functional-header\n            data-vl-back=${back}\n            data-vl-back-link=${backLink}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-full-width=${fullWidth}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-sub-title=${subTitle}\n            data-vl-title=${title}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(actionsSlot)}${unsafeHTML(backSlot)}${unsafeHTML(backLinkSlot)}${unsafeHTML(subHeaderSlot)}\n            ${unsafeHTML(subTitleSlot)}${unsafeHTML(titleSlot)}${unsafeHTML(topLeftSlot)}${unsafeHTML(topRightSlot)}\n        </vl-functional-header>\n    `)",..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(functionalHeaderArgs, ({\n  back,\n  backLink,\n  disableBackLink,\n  fullWidth,\n  hideBackLink,\n  link,\n  marginBottom,\n  subTitle,\n  title,\n  actionsSlot,\n  backSlot,\n  backLinkSlot,\n  subHeaderSlot,\n  subTitleSlot,\n  titleSlot,\n  topLeftSlot,\n  topRightSlot,\n  onClickBack\n}) => html`\n        <vl-functional-header\n            data-vl-back=${back}\n            data-vl-back-link=${backLink}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-full-width=${fullWidth}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-sub-title=${subTitle}\n            data-vl-title=${title}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(actionsSlot)}${unsafeHTML(backSlot)}${unsafeHTML(backLinkSlot)}${unsafeHTML(subHeaderSlot)}\n            ${unsafeHTML(subTitleSlot)}${unsafeHTML(titleSlot)}${unsafeHTML(topLeftSlot)}${unsafeHTML(topRightSlot)}\n        </vl-functional-header>\n    `)",...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(functionalHeaderArgs, ({\n  back,\n  backLink,\n  disableBackLink,\n  fullWidth,\n  hideBackLink,\n  link,\n  marginBottom,\n  subTitle,\n  title,\n  actionsSlot,\n  backSlot,\n  backLinkSlot,\n  subHeaderSlot,\n  subTitleSlot,\n  titleSlot,\n  topLeftSlot,\n  topRightSlot,\n  onClickBack\n}) => html`\n        <vl-functional-header\n            data-vl-back=${back}\n            data-vl-back-link=${backLink}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-full-width=${fullWidth}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-sub-title=${subTitle}\n            data-vl-title=${title}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(actionsSlot)}${unsafeHTML(backSlot)}${unsafeHTML(backLinkSlot)}${unsafeHTML(subHeaderSlot)}\n            ${unsafeHTML(subTitleSlot)}${unsafeHTML(titleSlot)}${unsafeHTML(topLeftSlot)}${unsafeHTML(topRightSlot)}\n        </vl-functional-header>\n    `)",...S.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:'story(functionalHeaderArgs, ({\n  fullWidth,\n  marginBottom,\n  title,\n  link\n}) => html`\n        <vl-functional-header\n            ?data-vl-full-width=${fullWidth}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-title=${title}\n        >\n            <vl-tabs\n                slot="sub-header"\n                data-vl-disable-links\n                data-vl-within-functional-header\n                data-vl-active-tab="trein"\n                @change=${(event: CustomEvent) => action(\'change\')(event.detail)}\n            >\n                <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein"></vl-tabs-pane>\n                <vl-tabs-pane data-vl-id="metro" data-vl-title="Metro, tram en bus"></vl-tabs-pane>\n                <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets"></vl-tabs-pane>\n            </vl-tabs>\n        </vl-functional-header>\n    `)',...L.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(functionalHeaderArgs, ({\n  fullWidth,\n  marginBottom,\n  title,\n  link\n}) => html`\n        <vl-functional-header\n            ?data-vl-full-width=${fullWidth}\n            data-vl-link=${link}\n            data-vl-margin-bottom=${marginBottom}\n            data-vl-title=${title}\n            data-vl-hide-back-link\n        >\n            <vl-breadcrumb slot=\"sub-title\">\n                <vl-breadcrumb-item data-vl-href=${'1'}>Vlaanderen Intern</vl-breadcrumb-item>\n                <vl-breadcrumb-item data-vl-href=${'2'}>Regelgeving</vl-breadcrumb-item>\n                <vl-breadcrumb-item data-vl-href=${'3'}>Webuniversum</vl-breadcrumb-item>\n                <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>\n            </vl-breadcrumb>\n        </vl-functional-header>\n    `)",...T.parameters?.docs?.source}}}}}]);