"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[790],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{o.d(t,{NF:()=>r,Zo:()=>d,ah:()=>s,pC:()=>i});var n=o("./node_modules/react/index.js");let i=n.createContext({});function r(e){return function(t){let o=s(t.components);return n.createElement(e,{...t,allComponents:o})}}function s(e){let t=n.useContext(i);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function d({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||a:s(e),n.createElement(i.Provider,{value:r},t)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */o("./node_modules/object-assign/index.js");var n=o("./node_modules/react/index.js"),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;i=r("react.element"),t.Fragment=r("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,o){var n,r={},l=null,c=null;for(n in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!d.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:c,props:r,_owner:s.current}}t.jsx=l,t.jsxs=l},"./node_modules/react/jsx-runtime.js":(e,t,o)=>{e.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/popover/vl-popover-action-list.component.ts":(e,t,o)=>{o.d(t,{P:()=>l});var n=o("./node_modules/lit/index.js"),i=o("./libs/common/utilities/src/index.ts"),r=o("./node_modules/@domg/govflanders-style/common/index.js"),s=o("./libs/elements/src/index.ts"),a=o("./node_modules/lit/decorators.js");let d=(0,n.iv)`
    :host {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
    }
`,l=class extends i.fS{static get styles(){return[r.YN,s.CX,d]}render(){return(0,n.dy)` <slot></slot> `}};l=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,a.Mo)("vl-popover-action-list")],l)},"./libs/components/src/popover/vl-popover-action.component.ts":(e,t,o)=>{o.d(t,{z:()=>l});var n=o("./node_modules/lit/index.js"),i=o("./libs/common/utilities/src/index.ts"),r=o("./node_modules/@domg/govflanders-style/common/index.js"),s=o("./libs/elements/src/index.ts"),a=o("./node_modules/lit/decorators.js");let d=(0,n.iv)`
    :host {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        color: #0055cc;
        font-weight: 500;
        font-size: 16px;
    }

    :host(:hover) {
        text-decoration: underline;
    }

    :host(:focus, :focus-within) {
        box-shadow: none;
        outline: 3px solid rgba(0, 85, 204, 0.65);
        outline-offset: 2px;
    }
`,l=class extends i.fS{static get styles(){return[r.YN,s.CX,d]}static get properties(){return{icon:{type:String,attribute:"icon",reflect:!0},action:{type:String,attribute:"action"}}}render(){return(0,n.dy)`
            ${this.icon&&""!==this.icon?(0,n.dy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>`:n.Ld}
            <slot></slot>
        `}constructor(...e){super(...e),this.icon=""}};l=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,a.Mo)("vl-popover-action")],l)},"./libs/components/src/popover/vl-popover.component.ts":(e,t,o)=>{o.d(t,{m:()=>v});var n,i=o("./libs/common/utilities/src/index.ts"),r=o("./libs/elements/src/index.ts"),s=o("./node_modules/@domg/govflanders-style/common/index.js"),a=o("./node_modules/lit/index.js"),d=o("./node_modules/lit/decorators.js"),l=o("./node_modules/lit/directives/class-map.js"),c=o("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),p=o("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");n=class{constructor(e,t){this.hoverTimeout=0,this.handleClick=()=>{this.host.toggle()},this.handleMouseOver=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.show(),this.options.showDelay)},this.handleMouseOut=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.hide(),this.options.hideDelay)},this.handleFocusIn=()=>{this.host.show()},this.handleFocusOut=()=>{this.host.hide()},this.handleClickOutside=e=>{let t=e.target;this.host.contains(t)||this.getReferenceElement()?.contains(t)||0!==e.button||this.host.hide()},this.handleKeyDown=e=>{this.host.open&&"Escape"===e.key&&(e.stopPropagation(),this.host.hide())},this.handleResize=()=>{this.host.open&&this.host.hide()},this.setOptions(t),this.host=e,this.host.addController(this)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}getReferenceElement(){let e=`#${this.options.reference}`,t=this.host.getRootNode(),o=document.querySelector(e)||t.querySelector(e);return o||(console.warn(this.host.tagName," could not find reference element with id: #",e),null)}getArrowElement(){return this.host.shadowRoot.querySelector("i#popover-arrow")}buildMiddlewares(){return[(0,c.cv)(this.options.distance),(0,c.RR)(),(0,c.uY)(),(0,c.x7)({element:this.getArrowElement(),padding:8})]}async updatePosition(){if(!this.getReferenceElement)return;let{x:e,y:t,strategy:o,placement:n,middlewareData:i}=await (0,p.oo)(this.getReferenceElement(),this.host,{placement:this.options.placement,middleware:this.buildMiddlewares()});Object.assign(this.host.style,{position:o,left:`${e}px`,top:`${t}px`});let r={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(i.arrow&&this.getArrowElement()){let{x:e,y:t}=i.arrow;Object.assign(this.getArrowElement().style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",[r]:`${-this.getArrowElement().offsetWidth/2}px`})}}setOptions(e){this.options=e}addEventListeners(){let e=this.getReferenceElement();e?.addEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e?.addEventListener("click",this.handleClick),document.addEventListener("click",this.handleClickOutside,!0),this.options.hideOnClick&&this.host.addEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e?.addEventListener("mouseover",this.handleMouseOver),e?.addEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e?.addEventListener("focusin",this.handleFocusIn,!0),e?.addEventListener("focusout",this.handleFocusOut,!0)),window.addEventListener("resize",this.handleResize)}removeEventListeners(){let e=this.getReferenceElement();e?.removeEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e?.removeEventListener("click",this.handleClick),document.removeEventListener("click",this.handleClickOutside,!0),this.host.removeEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e?.removeEventListener("mouseover",this.handleMouseOver),e?.removeEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e?.removeEventListener("focusin",this.handleFocusIn,!0),e?.removeEventListener("focusout",this.handleFocusOut,!0)),window.removeEventListener("resize",this.handleResize)}hasTrigger(e){return this.options.trigger.split(" ").includes(e)}};var h=o("./libs/components/src/popover/vl-popover-action-list.component.ts"),u=o("./libs/components/src/popover/vl-popover-action.component.ts");let m=(0,a.iv)`
    :host {
        position: absolute;
        width: max-content;
        top: 0;
        left: 0;
        z-index: 10010;
    }

    i#popover-arrow {
        position: absolute;
        display: block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        z-index: -1;
        pointer-events: none;
        transform: rotate(45deg);
    }

    .popover-content {
        /* combinatie van 3 drop-shadows:
          - de eerste is de styling voor schaduw (deze weglaten als je geen schaduw wilt)
          - de 2e & 3e is de styling voor border (deze weglaten als je geen border wilt)
        */
        filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 0px 2.1rem) drop-shadow(rgb(207, 213, 221) -1px -1px 1px)
            drop-shadow(rgb(207, 213, 221) 1px 1px 1px);
        will-change: filter;
        background-color: #fff;
        padding: 1rem;
    }

    .padding-none {
        padding: 0;
    }
    .padding-small {
        padding: 1rem;
    }
    .padding-medium {
        padding: 1.5rem;
    }
    .padding-large {
        padding: 2rem;
    }
`,v=class extends i.fS{static{(0,i.YV)([u.z,h.P])}static get styles(){return[s.YN,r.CX,m]}static get properties(){return{for:{type:String,attribute:"for",reflect:!0},contentPadding:{type:String,attribute:"content-padding",reflect:!0},open:{type:Boolean,attribute:"open",reflect:!0},trigger:{type:String,attribute:"trigger",reflect:!0},placement:{type:String,attribute:"placement",reflect:!0},distance:{type:Number,attribute:"distance",reflect:!0},hideArrow:{type:Boolean,attribute:"hide-arrow",reflect:!0},hideOnClick:{type:Boolean,attribute:"hide-on-click",reflect:!0}}}firstUpdated(){this.hidden=!this.open,this.popup=new n(this,this.popupOptions()),this.open&&this.popup.updatePosition()}render(){let e={"popover-content":!0,[`padding-${this.contentPadding}`]:!0};return(0,a.dy)`
            <div class=${(0,l.$)(e)}>
                <slot role="content"></slot>
                ${this.hideArrow?null:(0,a.dy)`<i id="popover-arrow" role="presentation"></i>`}
            </div>
        `}updated(e){e.has("open")?this.handleOpenChange():(this.popup.setOptions(this.popupOptions()),this.popup.updatePosition())}handleOpenChange(){this.open?(this.popup.updatePosition(),this.hidden=!1):this.hidden=!0,this.popup.getReferenceElement()?.setAttribute("aria-expanded",this.open?"true":"false")}toggle(){this.open?this.hide():this.show()}popupOptions(){return{reference:this.for,trigger:this.trigger,distance:this.distance,placement:this.placement,showDelay:0,hideDelay:0,hideOnClick:this.hideOnClick}}constructor(...e){super(...e),this.for="",this.trigger="click",this.placement="bottom",this.distance=10,this.open=!1,this.hideArrow=!1,this.contentPadding="small",this.hideOnClick=!1,this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}};v=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,d.Mo)("vl-popover")],v)},"./libs/components/src/popover/stories/vl-popover.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{PopoverDefault:()=>f,PopoverHover:()=>b,default:()=>g});var n=o("./node_modules/lit-html/lit-html.js"),i=o("./libs/common/storybook/src/index.ts"),r=o("./libs/common/utilities/src/index.ts");let s={contentPadding:"small",for:"",trigger:"click",hideArrow:!1,hideOnClick:!1,open:!1,placement:"bottom",distance:10},a={for:{name:"for",description:"HTML id van het element die de popover zal triggeren en waar tegenover de popover zich zal ori\xebnteren.",type:{name:i.vK.STRING,required:!0},table:{type:{summary:i.vK.STRING},category:i.aA.PROPERTIES,defaultValue:{summary:s.for}}},open:{name:"open",description:"Bepaalt of de popover open is.",table:{type:{summary:i.vK.BOOLEAN},category:i.aA.PROPERTIES,defaultValue:{summary:s.open}}},hideArrow:{name:"hide-arrow",description:"Verbergt de pijl die wijst naar het element die de popover triggert.",table:{type:{summary:i.vK.BOOLEAN},category:i.aA.ATTRIBUTES,defaultValue:{summary:s.hideArrow}}},hideOnClick:{name:"hide-on-click",description:"Verbergt popover wanneer op de content wordt geklikt. Niet reactief.",table:{type:{summary:i.vK.BOOLEAN},category:i.aA.ATTRIBUTES,defaultValue:{summary:s.hideOnClick}}},distance:{name:"distance",description:"Afstand van popover tegenover trigger element.",control:{type:"range",min:0,max:100,step:1},table:{type:{summary:i.vK.NUMBER},category:i.aA.ATTRIBUTES,defaultValue:{summary:s.distance}}},contentPadding:{name:"content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:"select",options:[...Object.keys(r.RE)]},table:{type:{summary:Object.keys(r.RE)},category:i.aA.ATTRIBUTES,defaultValue:{summary:s.contentPadding}}},placement:{name:"placement",description:"Voorkeursori\xebntatie van de popover als de ruimte het toelaat. Je kan ook `-start` of `-end` suffix toevoegen zodat ori\xebntatie start of eindigt aan respectievelijk begin of einde van het trigger element.",table:{type:{summary:["top","right","bottom","left"]},category:i.aA.ATTRIBUTES,defaultValue:{summary:s.placement}}},trigger:{name:"trigger",description:"Gebruiker interacties die popover zal triggeren. Je kan verschillende combineren door ze met een spatie naast mekaar te zetten. Bv. met `focus hover` zal de popover zowel verschijnen bij focus als bij hover.",table:{type:{summary:["click","focus","hover"]},category:i.aA.ATTRIBUTES,defaultValue:{summary:s.trigger}}}};o("./node_modules/react/index.js");var d=o("./node_modules/react/jsx-runtime.js"),l=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=o("./node_modules/@storybook/blocks/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"popover",children:"Popover"}),"\n",(0,d.jsxs)(t.p,{children:["Een ",(0,d.jsx)(t.code,{children:"popover"})," is een nieuw, meestal kleiner venster / popup dat boven de andere inhoud op het scherm verschijnt.\nGebruik een popover om aanvullende informatie aan de gebruiker te geven of om gebruikersinteractie te vragen."]}),"\n",(0,d.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-js",children:"import { VlPopoverComponent } from '@domg-wc/components';\n"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-html",children:"<vl-popover></vl-popover>\n"})}),"\n",(0,d.jsx)(c.Xz,{of:f}),"\n",(0,d.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,d.jsx)(c.Ed,{of:f}),"\n",(0,d.jsx)(t.h2,{id:"extra-informatie",children:"Extra informatie"}),"\n",(0,d.jsx)(t.h3,{id:"ori\xebntatie",children:"Ori\xebntatie"}),"\n",(0,d.jsxs)(t.p,{children:["Je kan de ori\xebntatie bepalen van de popover als daarvoor plaats is met ",(0,d.jsx)(t.code,{children:"placement"}),". Anders zal ",(0,d.jsx)(t.code,{children:"floating-ui"}),"\nachterliggend zoeken naar de volgende geschikt ori\xebntatie; standaard zal dit dan de tegenovergestelde ori\xebntatie\nzijn van de initieel ingestelde.\nMeer info kan je ",(0,d.jsx)(t.a,{href:"https://floating-ui.com/docs/tutorial#placements",target:"_blank",rel:"nofollow noopener noreferrer",children:"hier"})," vinden."]}),"\n",(0,d.jsxs)(t.p,{children:["Je kan een ",(0,d.jsx)(t.code,{children:"-start"})," of ",(0,d.jsx)(t.code,{children:"-end"})," suffix toevoegen zodat de ori\xebntatie start of eindigt aan respectievelijk het begin of\neinde van het referentie-element."]}),"\n",(0,d.jsx)(t.h3,{id:"standaard-pijl--afstand",children:"Standaard pijl & afstand"}),"\n",(0,d.jsx)(t.p,{children:"Standaard wordt:"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"de pijl getoond"}),"\n",(0,d.jsxs)(t.li,{children:["wordt de ",(0,d.jsx)(t.code,{children:"distance"})," ingesteld op ",(0,d.jsx)(t.code,{children:"10px"})]}),"\n"]}),"\n",(0,d.jsx)(t.p,{children:"Dit is er zodat de stijl van DV gevolgd wordt."}),"\n",(0,d.jsxs)(t.p,{children:["Je kan de pijl verbergen door ",(0,d.jsx)(t.code,{children:"hide-arrow"})," in te stellen.\nDe afstand tot het referentie-element kan je volledig zelf bepalen."]}),"\n",(0,d.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,d.jsx)(t.h3,{id:"hover",children:"Hover"}),"\n",(0,d.jsxs)(t.p,{children:["Je kan de standaard ",(0,d.jsx)(t.code,{children:"click"})," waarde voor ",(0,d.jsx)(t.code,{children:"trigger"})," ook instellen op bv. de combinatie van ",(0,d.jsx)(t.code,{children:"hover"})," & ",(0,d.jsx)(t.code,{children:"focus"})," interacties."]}),"\n",(0,d.jsx)(c.Xz,{of:b}),"\n",(0,d.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,d.jsx)(t.h3,{id:"floating-ui",children:"floating-ui"}),"\n",(0,d.jsxs)(t.p,{children:["De popover-component gebruikt achterliggend ",(0,d.jsx)(t.a,{href:"https://floating-ui.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"floating-ui"}),", de opvolger van Popper"]}),"\n",(0,d.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-popover",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Popover"})})]})}var h=o("./node_modules/@storybook/addon-actions/dist/index.mjs"),u=o("./libs/components/src/popover/vl-popover.component.ts"),m=o("./libs/components/src/popover/vl-popover-action.component.ts"),v=o("./libs/components/src/popover/vl-popover-action-list.component.ts");(0,r.YV)([u.m,m.z,v.P]);let g={title:"Components/popover",tags:["autodocs"],args:(0,i.T8)(s),argTypes:(0,i.xj)(a,!0),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(p,e)})):p(e)}}}},f=(0,i.yg)(s,({trigger:e,contentPadding:t,open:o,placement:i,hideArrow:r,hideOnClick:s,distance:a})=>(0,n.dy)`
            <a is="vl-link" id="btn-acties">Acties</a>
            <vl-popover
                for="btn-acties"
                open="${o}"
                placement=${i}
                trigger=${e}
                hide-arrow=${r}
                hide-on-click="${s}"
                distance=${a}
                content-padding=${t}
            >
                <vl-popover-action-list
                    @click=${e=>{let t=e.target;(0,h.aD)("click")("vl-popover-action clicked > "+t.action)}}
                >
                    <vl-popover-action icon="search" .action=${"search"}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=${"report"}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=${"locate"}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        `);f.storyName="vl-popover - default",f.args={placement:"bottom-start"};let b=(0,i.yg)(s,({trigger:e,open:t,contentPadding:o,placement:i,hideArrow:r,hideOnClick:s,distance:a})=>(0,n.dy)`
            <button id="btn-close" aria-describedby="tooltip" is="vl-button">Hover over me</button>
            <vl-popover
                for="btn-close"
                open=${t}
                placement=${i}
                trigger=${e}
                hide-arrow=${r}
                hide-on-click=${s}
                distance=${a}
                content-padding=${o}
            >
                Een boodschap die context geeft.
            </vl-popover>
        `);b.storyName="vl-popover - hover",b.args={trigger:"focus hover"},b.parameters={layout:"centered",contentPadding:"medium"},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'story(popoverDefaultArgs, ({\n  trigger,\n  contentPadding,\n  open,\n  placement,\n  hideArrow,\n  hideOnClick,\n  distance\n}) => {\n  return html`\n            <a is="vl-link" id="btn-acties">Acties</a>\n            <vl-popover\n                for="btn-acties"\n                open="${open}"\n                placement=${placement}\n                trigger=${trigger}\n                hide-arrow=${hideArrow}\n                hide-on-click="${hideOnClick}"\n                distance=${distance}\n                content-padding=${contentPadding}\n            >\n                <vl-popover-action-list\n                    @click=${(event: CustomEvent) => {\n    const actionElement = (event.target as VlPopoverActionComponent);\n    action(\'click\')(\'vl-popover-action clicked > \' + actionElement.action);\n  }}\n                >\n                    <vl-popover-action icon="search" .action=${\'search\'}>Zoeken</vl-popover-action>\n                    <vl-popover-action icon="bell" .action=${\'report\'}>Rapportenoverzicht</vl-popover-action>\n                    <vl-popover-action icon="pin" .action=${\'locate\'}>Vind locatie</vl-popover-action>\n                </vl-popover-action-list>\n            </vl-popover>\n        `;\n})',...f.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'story(popoverDefaultArgs, ({\n  trigger,\n  open,\n  contentPadding,\n  placement,\n  hideArrow,\n  hideOnClick,\n  distance\n}) => {\n  return html`\n            <button id="btn-close" aria-describedby="tooltip" is="vl-button">Hover over me</button>\n            <vl-popover\n                for="btn-close"\n                open=${open}\n                placement=${placement}\n                trigger=${trigger}\n                hide-arrow=${hideArrow}\n                hide-on-click=${hideOnClick}\n                distance=${distance}\n                content-padding=${contentPadding}\n            >\n                Een boodschap die context geeft.\n            </vl-popover>\n        `;\n})',...b.parameters?.docs?.source}}}}}]);