(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[790],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{NF:()=>r,Zo:()=>d,ah:()=>s,pC:()=>i});var n=o("./node_modules/react/index.js");let i=n.createContext({});function r(e){return function(t){let o=s(t.components);return n.createElement(e,{...t,allComponents:o})}}function s(e){let t=n.useContext(i);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function d({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||a:s(e),n.createElement(i.Provider,{value:r},t)}},"./libs/components/src/popover/stories/vl-popover.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{PopoverDefault:()=>f,PopoverHover:()=>b,__namedExportsOrder:()=>y,default:()=>g});var n=o("./libs/common/storybook/src/index.ts"),i=o("./libs/common/utilities/src/index.ts"),r=o("./node_modules/@storybook/addon-actions/dist/index.mjs"),s=o("./node_modules/lit-html/lit-html.js"),a=o("./libs/components/src/popover/vl-popover-action-list.component.ts"),d=o("./libs/components/src/popover/vl-popover-action.component.ts"),l=o("./libs/components/src/popover/vl-popover.component.ts");let c={...n._O,contentPadding:"small",for:"",trigger:"click",hideArrow:!1,hideOnClick:!1,open:!1,placement:"bottom",distance:10},p={...(0,n.Wp)(!0),for:{name:"for",description:"HTML id van het element die de popover zal triggeren en waar tegenover de popover zich zal oriënteren.",type:{name:n.vK.STRING,required:!0},table:{type:{summary:n.vK.STRING},category:n.aA.PROPERTIES,defaultValue:{summary:c.for}}},open:{name:"open",description:"Bepaalt of de popover open is.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.PROPERTIES,defaultValue:{summary:c.open}}},hideArrow:{name:"hide-arrow",description:"Verbergt de pijl die wijst naar het element die de popover triggert.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.hideArrow}}},hideOnClick:{name:"hide-on-click",description:"Verbergt popover wanneer op de content wordt geklikt. Niet reactief.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.hideOnClick}}},distance:{name:"distance",description:"Afstand van popover tegenover trigger element.",control:{type:"range",min:0,max:100,step:1},table:{type:{summary:n.vK.NUMBER},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.distance}}},contentPadding:{name:"content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:"select",options:[...Object.keys(i.RE)]},table:{type:{summary:Object.keys(i.RE)},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.contentPadding}}},placement:{name:"placement",description:"Voorkeursoriëntatie van de popover als de ruimte het toelaat. Je kan ook `-start` of `-end` suffix toevoegen zodat oriëntatie start of eindigt aan respectievelijk begin of einde van het trigger element.",table:{type:{summary:["top","right","bottom","left"]},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.placement}}},trigger:{name:"trigger",description:"Gebruiker interacties die popover zal triggeren. Je kan verschillende combineren door ze met een spatie naast mekaar te zetten. Bv. met `focus hover` zal de popover zowel verschijnen bij focus als bij hover.",table:{type:{summary:["click","focus","hover"]},category:n.aA.ATTRIBUTES,defaultValue:{summary:c.trigger}}}};o("./node_modules/react/index.js");var h=o("./node_modules/react/jsx-runtime.js"),u=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=o("./node_modules/@storybook/blocks/dist/index.mjs");function v(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a",ul:"ul",li:"li"},(0,u.ah)(),e.components);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.h1,{id:"popover",children:"Popover"}),"\n",(0,h.jsxs)(t.p,{children:["Een ",(0,h.jsx)(t.code,{children:"popover"})," is een nieuw, meestal kleiner venster / popup dat boven de andere inhoud op het scherm verschijnt.\nGebruik een popover om aanvullende informatie aan de gebruiker te geven of om gebruikersinteractie te vragen."]}),"\n",(0,h.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-js",children:"import { VlPopoverComponent } from '@domg-wc/components';\n"})}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-html",children:"<vl-popover></vl-popover>\n"})}),"\n",(0,h.jsx)(m.Xz,{of:f}),"\n",(0,h.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,h.jsx)(m.Ed,{of:f}),"\n",(0,h.jsx)(t.h2,{id:"extra-informatie",children:"Extra informatie"}),"\n",(0,h.jsx)(t.h3,{id:"oriëntatie",children:"Oriëntatie"}),"\n",(0,h.jsxs)(t.p,{children:["Je kan de oriëntatie bepalen van de popover als daarvoor plaats is met ",(0,h.jsx)(t.code,{children:"placement"}),". Anders zal ",(0,h.jsx)(t.code,{children:"floating-ui"}),"\nachterliggend zoeken naar de volgende geschikt oriëntatie; standaard zal dit dan de tegenovergestelde oriëntatie\nzijn van de initieel ingestelde.\nMeer info kan je ",(0,h.jsx)(t.a,{href:"https://floating-ui.com/docs/tutorial#placements",target:"_blank",rel:"nofollow noopener noreferrer",children:"hier"})," vinden."]}),"\n",(0,h.jsxs)(t.p,{children:["Je kan een ",(0,h.jsx)(t.code,{children:"-start"})," of ",(0,h.jsx)(t.code,{children:"-end"})," suffix toevoegen zodat de oriëntatie start of eindigt aan respectievelijk het begin of\neinde van het referentie-element."]}),"\n",(0,h.jsx)(t.h3,{id:"standaard-pijl--afstand",children:"Standaard pijl & afstand"}),"\n",(0,h.jsx)(t.p,{children:"Standaard wordt:"}),"\n",(0,h.jsxs)(t.ul,{children:["\n",(0,h.jsx)(t.li,{children:"de pijl getoond"}),"\n",(0,h.jsxs)(t.li,{children:["wordt de ",(0,h.jsx)(t.code,{children:"distance"})," ingesteld op ",(0,h.jsx)(t.code,{children:"10px"})]}),"\n"]}),"\n",(0,h.jsx)(t.p,{children:"Dit is er zodat de stijl van DV gevolgd wordt."}),"\n",(0,h.jsxs)(t.p,{children:["Je kan de pijl verbergen door ",(0,h.jsx)(t.code,{children:"hide-arrow"})," in te stellen.\nDe afstand tot het referentie-element kan je volledig zelf bepalen."]}),"\n",(0,h.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,h.jsx)(t.h3,{id:"hover",children:"Hover"}),"\n",(0,h.jsxs)(t.p,{children:["Je kan de standaard ",(0,h.jsx)(t.code,{children:"click"})," waarde voor ",(0,h.jsx)(t.code,{children:"trigger"})," ook instellen op bv. de combinatie van ",(0,h.jsx)(t.code,{children:"hover"})," & ",(0,h.jsx)(t.code,{children:"focus"})," interacties."]}),"\n",(0,h.jsx)(m.Xz,{of:b}),"\n",(0,h.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,h.jsx)(t.h3,{id:"floating-ui",children:"floating-ui"}),"\n",(0,h.jsxs)(t.p,{children:["De popover-component gebruikt achterliggend ",(0,h.jsx)(t.a,{href:"https://floating-ui.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"floating-ui"}),", de opvolger van Popper"]}),"\n",(0,h.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-popover",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Popover"})})]})}(0,i.YV)([l.m,d.z,a.P]);let g={title:"Components/popover",tags:["autodocs"],args:c,argTypes:p,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.ah)(),e.components);return t?(0,h.jsx)(t,Object.assign({},e,{children:(0,h.jsx)(v,e)})):v(e)}}}},f=(0,n.yg)(c,({trigger:e,contentPadding:t,open:o,placement:n,hideArrow:i,hideOnClick:a,distance:d})=>(0,s.dy)`
            <a is="vl-link" id="btn-acties">Acties</a>
            <vl-popover
                for="btn-acties"
                open="${o}"
                placement=${n}
                trigger=${e}
                hide-arrow=${i}
                hide-on-click="${a}"
                distance=${d}
                content-padding=${t}
            >
                <vl-popover-action-list
                    @click=${e=>{let t=e.target;(0,r.aD)("click")("vl-popover-action clicked > "+t.action)}}
                >
                    <vl-popover-action icon="search" .action=${"search"}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=${"report"}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=${"locate"}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        `);f.storyName="vl-popover - default",f.args={placement:"bottom-start"};let b=(0,n.yg)(c,({trigger:e,open:t,contentPadding:o,placement:n,hideArrow:i,hideOnClick:r,distance:a})=>(0,s.dy)`
            <button id="btn-close" aria-describedby="tooltip" is="vl-button">Hover over me</button>
            <vl-popover
                for="btn-close"
                open=${t}
                placement=${n}
                trigger=${e}
                hide-arrow=${i}
                hide-on-click=${r}
                distance=${a}
                content-padding=${o}
            >
                Een boodschap die context geeft.
            </vl-popover>
        `);b.storyName="vl-popover - hover",b.args={trigger:"focus hover"},b.parameters={layout:"centered",contentPadding:"medium"},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'story(popoverDefaultArgs, ({\n  trigger,\n  contentPadding,\n  open,\n  placement,\n  hideArrow,\n  hideOnClick,\n  distance\n}) => {\n  return html`\n            <a is="vl-link" id="btn-acties">Acties</a>\n            <vl-popover\n                for="btn-acties"\n                open="${open}"\n                placement=${placement}\n                trigger=${trigger}\n                hide-arrow=${hideArrow}\n                hide-on-click="${hideOnClick}"\n                distance=${distance}\n                content-padding=${contentPadding}\n            >\n                <vl-popover-action-list\n                    @click=${(event: CustomEvent) => {\n    const actionElement = (event.target as VlPopoverActionComponent);\n    action(\'click\')(\'vl-popover-action clicked > \' + actionElement.action);\n  }}\n                >\n                    <vl-popover-action icon="search" .action=${\'search\'}>Zoeken</vl-popover-action>\n                    <vl-popover-action icon="bell" .action=${\'report\'}>Rapportenoverzicht</vl-popover-action>\n                    <vl-popover-action icon="pin" .action=${\'locate\'}>Vind locatie</vl-popover-action>\n                </vl-popover-action-list>\n            </vl-popover>\n        `;\n})',...f.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'story(popoverDefaultArgs, ({\n  trigger,\n  open,\n  contentPadding,\n  placement,\n  hideArrow,\n  hideOnClick,\n  distance\n}) => {\n  return html`\n            <button id="btn-close" aria-describedby="tooltip" is="vl-button">Hover over me</button>\n            <vl-popover\n                for="btn-close"\n                open=${open}\n                placement=${placement}\n                trigger=${trigger}\n                hide-arrow=${hideArrow}\n                hide-on-click=${hideOnClick}\n                distance=${distance}\n                content-padding=${contentPadding}\n            >\n                Een boodschap die context geeft.\n            </vl-popover>\n        `;\n})',...b.parameters?.docs?.source}}};let y=["PopoverDefault","PopoverHover"]},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o("./node_modules/react/index.js"),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,o){var n,r={},l=null,c=null;for(n in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!d.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:c,props:r,_owner:a.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},"./node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/popover/vl-popover-action-list.component.ts":(e,t,o)=>{"use strict";o.d(t,{P:()=>l});var n=o("./node_modules/lit/index.js"),i=o("./libs/common/utilities/src/index.ts"),r=o("./node_modules/@domg/govflanders-style/common/index.js"),s=o("./libs/elements/src/index.ts"),a=o("./node_modules/lit/decorators.js");let d=(0,n.iv)`
    :host {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
    }
`;class l extends i.fS{static get styles(){return[r.YN,s.CX,d]}render(){return(0,n.dy)` <slot></slot> `}}l=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,a.Mo)("vl-popover-action-list")],l)},"./libs/components/src/popover/vl-popover-action.component.ts":(e,t,o)=>{"use strict";o.d(t,{z:()=>l});var n=o("./node_modules/lit/index.js"),i=o("./libs/common/utilities/src/index.ts"),r=o("./node_modules/@domg/govflanders-style/common/index.js"),s=o("./libs/elements/src/index.ts"),a=o("./node_modules/lit/decorators.js");let d=(0,n.iv)`
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
`;class l extends i.fS{static get styles(){return[r.YN,s.CX,d]}static get properties(){return{icon:{type:String,attribute:"icon",reflect:!0},action:{type:String,attribute:"action"}}}render(){return(0,n.dy)`
            ${this.icon&&""!==this.icon?(0,n.dy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>`:n.Ld}
            <slot></slot>
        `}constructor(...e){super(...e),this.icon=""}}l=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,a.Mo)("vl-popover-action")],l)},"./libs/components/src/popover/vl-popover.component.ts":(e,t,o)=>{"use strict";o.d(t,{m:()=>g});var n=o("./libs/common/utilities/src/index.ts"),i=o("./libs/elements/src/index.ts"),r=o("./node_modules/@domg/govflanders-style/common/index.js"),s=o("./node_modules/lit/index.js"),a=o("./node_modules/lit/decorators.js"),d=o("./node_modules/lit/directives/class-map.js"),l=o("./node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs"),c=o("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),p=o("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");class h{constructor(e,t){this.hoverTimeout=0,this.handleClick=()=>{this.host.toggle()},this.handleMouseOver=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.show(),this.options.showDelay)},this.handleMouseOut=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.hide(),this.options.hideDelay)},this.handleFocusIn=()=>{this.host.show()},this.handleFocusOut=()=>{this.host.hide()},this.handleClickOutside=e=>{let t=e.target;this.host.contains(t)||this.getReferenceElement()?.contains(t)||0!==e.button||this.host.hide()},this.handleKeyDown=e=>{this.host.open&&"Escape"===e.key&&(e.stopPropagation(),this.host.hide())},this.handleResize=()=>{this.host.open&&this.host.hide()},this.setOptions(t),this.host=e,this.host.addController(this)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}getReferenceElement(){let e=`#${this.options.reference}`,t=this.host.getRootNode();return document.querySelector(e)||t.querySelector(e)||(console.warn(this.host.tagName," could not find reference element with id: #",e),null)}getArrowElement(){return this.host.shadowRoot.querySelector("i#popover-arrow")}buildMiddlewares(){return[(0,c.cv)(this.options.distance),(0,p.RR)(),(0,p.uY)(),(0,p.x7)({element:this.getArrowElement(),padding:8})]}async updatePosition(){if(!this.getReferenceElement)return;let{x:e,y:t,strategy:o,placement:n,middlewareData:i}=await (0,p.oo)(this.getReferenceElement(),this.host,{placement:this.options.placement,middleware:this.buildMiddlewares(),platform:{...p.Jv,getOffsetParent:e=>p.Jv.getOffsetParent(e,l.y8)}});Object.assign(this.host.style,{position:o,left:`${e}px`,top:`${t}px`});let r={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(i.arrow&&this.getArrowElement()){let{x:e,y:t}=i.arrow;Object.assign(this.getArrowElement().style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",[r]:`${-this.getArrowElement().offsetWidth/2}px`})}}setOptions(e){this.options=e}addEventListeners(){let e=this.getReferenceElement();e?.addEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e?.addEventListener("click",this.handleClick),document.addEventListener("click",this.handleClickOutside,!0),this.options.hideOnClick&&this.host.addEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e?.addEventListener("mouseover",this.handleMouseOver),e?.addEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e?.addEventListener("focusin",this.handleFocusIn,!0),e?.addEventListener("focusout",this.handleFocusOut,!0)),window.addEventListener("resize",this.handleResize)}removeEventListeners(){let e=this.getReferenceElement();e?.removeEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e?.removeEventListener("click",this.handleClick),document.removeEventListener("click",this.handleClickOutside,!0),this.host.removeEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e?.removeEventListener("mouseover",this.handleMouseOver),e?.removeEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e?.removeEventListener("focusin",this.handleFocusIn,!0),e?.removeEventListener("focusout",this.handleFocusOut,!0)),window.removeEventListener("resize",this.handleResize)}hasTrigger(e){return this.options.trigger.split(" ").includes(e)}}var u=o("./libs/components/src/popover/vl-popover-action-list.component.ts"),m=o("./libs/components/src/popover/vl-popover-action.component.ts");let v=(0,s.iv)`
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
`;class g extends n.fS{static{(0,n.YV)([m.z,u.P])}static get styles(){return[r.YN,i.CX,v]}static get properties(){return{for:{type:String,attribute:"for",reflect:!0},contentPadding:{type:String,attribute:"content-padding",reflect:!0},open:{type:Boolean,attribute:"open",reflect:!0},trigger:{type:String,attribute:"trigger",reflect:!0},placement:{type:String,attribute:"placement",reflect:!0},distance:{type:Number,attribute:"distance",reflect:!0},hideArrow:{type:Boolean,attribute:"hide-arrow",reflect:!0},hideOnClick:{type:Boolean,attribute:"hide-on-click",reflect:!0}}}firstUpdated(){this.hidden=!this.open,this.popup=new h(this,this.popupOptions()),this.open&&this.popup.updatePosition()}render(){let e={"popover-content":!0,[`padding-${this.contentPadding}`]:!0};return(0,s.dy)`
            <div class=${(0,d.$)(e)}>
                <slot role="content"></slot>
                ${this.hideArrow?null:(0,s.dy)`<i id="popover-arrow" role="presentation"></i>`}
            </div>
        `}updated(e){e.has("open")?this.handleOpenChange():(this.popup.setOptions(this.popupOptions()),this.popup.updatePosition())}handleOpenChange(){this.open?(this.popup.updatePosition(),this.hidden=!1):this.hidden=!0,this.popup.getReferenceElement()?.setAttribute("aria-expanded",this.open?"true":"false")}toggle(){this.open?this.hide():this.show()}popupOptions(){return{reference:this.for,trigger:this.trigger,distance:this.distance,placement:this.placement,showDelay:0,hideDelay:0,hideOnClick:this.hideOnClick}}constructor(...e){super(...e),this.for="",this.trigger="click",this.placement="bottom",this.distance=10,this.open=!1,this.hideArrow=!1,this.contentPadding="small",this.hideOnClick=!1,this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}}g=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,a.Mo)("vl-popover")],g)}}]);