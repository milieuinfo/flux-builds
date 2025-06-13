(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7825],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,o)=>{"use strict";o.d(t,{f:()=>m});var n=o("../../node_modules/react/index.js"),i=o("../../node_modules/react-dom/client.js"),r=new Map,s=({callback:e,children:t})=>{let o=(0,n.useRef)();return(0,n.useLayoutEffect)(()=>{o.current!==e&&(o.current=e,e())},[e]),t},a=async(e,t)=>{let o=await c(t);return new Promise(t=>{o.render(n.createElement(s,{callback:()=>t(null)},e))})},l=(e,t)=>{let o=r.get(e);o&&(o.unmount(),r.delete(e))},c=async e=>{let t=r.get(e);return t||(t=i.createRoot(e),r.set(e,t)),t},d=o("../../node_modules/@storybook/blocks/dist/index.mjs"),p={code:d.XA,a:d.zE,...d.Sw},h=class extends n.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},m=class{constructor(){this.render=async(e,t,i)=>{let r={...p,...t?.components},s=d.kQ;return new Promise((l,c)=>{o.e(814).then(o.bind(o,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>a(n.createElement(h,{showException:c,key:Math.random()},n.createElement(o,{components:r},n.createElement(s,{context:e,docsParameter:t}))),i)).then(()=>l())})},this.unmount=e=>{l(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,o)=>{"use strict";o.d(t,{Hl:()=>n.Hl,W8:()=>n.W8,kL:()=>n.kL,ov:()=>n.ov}),o("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var n=o("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{BN:()=>i,RP:()=>s,gz:()=>r,xA:()=>l});var n=o("../../node_modules/react/index.js");let i=n.createContext({});function r(e){return function(t){let o=s(t.components);return n.createElement(e,{...t,allComponents:o})}}function s(e){let t=n.useContext(i);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function l({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||a:s(e),n.createElement(i.Provider,{value:r},t)}},"../../libs/components/src/popover/stories/vl-popover.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{PopoverActions:()=>k,PopoverDefault:()=>j,PopoverHover:()=>x,__namedExportsOrder:()=>E,default:()=>y});var n=o("../../libs/common/storybook/src/index.ts"),i=o("../../libs/common/utilities/src/index.ts"),r=o("../../node_modules/@storybook/addon-actions/dist/index.mjs"),s=o("../../node_modules/lit-html/lit-html.js"),a=o("../../libs/components/src/popover/vl-popover-action-list.component.ts"),l=o("../../libs/components/src/popover/vl-popover-action.component.ts"),c=o("../../libs/components/src/popover/vl-popover.component.ts"),d=o("../../libs/common/utilities/src/constants/index.ts");let p={...n.D8,contentPadding:"small",for:"",trigger:"click",hideArrow:!1,hideOnClick:!1,open:!1,placement:"bottom",distance:10},h={...(0,n.RN)(!0),for:{name:"for",description:"HTML id van het element die de popover zal triggeren en waar tegenover de popover zich zal oriënteren.",type:{name:n.QE.STRING,required:!0},table:{type:{summary:n.QE.STRING},category:n.R6.PROPERTIES,defaultValue:{summary:p.for}}},open:{name:"open",description:"Bepaalt of de popover open is.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.PROPERTIES,defaultValue:{summary:p.open}}},hideArrow:{name:"hide-arrow",description:"Verbergt de pijl die wijst naar het element die de popover triggert.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:p.hideArrow}}},hideOnClick:{name:"hide-on-click",description:"Verbergt popover wanneer op de content wordt geklikt. Niet reactief.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:p.hideOnClick}}},distance:{name:"distance",description:"Afstand van popover tegenover trigger element.",control:{type:n.VH.RANGE,min:0,max:100,step:1},table:{type:{summary:n.QE.NUMBER},category:n.R6.ATTRIBUTES,defaultValue:{summary:p.distance}}},contentPadding:{name:"content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:n.VH.SELECT},options:[...Object.keys(d.J3)],table:{type:{summary:(0,n.uf)(Object.keys(d.J3))},category:n.R6.ATTRIBUTES,defaultValue:{summary:p.contentPadding}}},placement:{name:"placement",description:"Voorkeursoriëntatie van de popover als de ruimte het toelaat. Je kan ook `-start` of `-end` suffix toevoegen zodat oriëntatie start of eindigt aan respectievelijk begin of einde van het trigger element.",table:{type:{summary:["top","right","bottom","left"]},category:n.R6.ATTRIBUTES,defaultValue:{summary:p.placement}}},trigger:{name:"trigger",description:"Gebruiker interacties die popover zal triggeren. Je kan verschillende combineren door ze met een spatie naast mekaar te zetten. Bv. met `focus hover` zal de popover zowel verschijnen bij focus als bij hover.",table:{type:{summary:["click","focus","hover"]},category:n.R6.ATTRIBUTES,defaultValue:{summary:p.trigger}}}};o("../../node_modules/react/index.js");var m=o("../../node_modules/react/jsx-runtime.js"),u=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),v=o("../../node_modules/@storybook/blocks/dist/index.mjs");function g(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a",ul:"ul",li:"li"},(0,u.RP)(),e.components);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.h1,{id:"popover",children:"Popover"}),"\n",(0,m.jsxs)(t.p,{children:["Een ",(0,m.jsx)(t.code,{children:"popover"})," is een nieuw, meestal kleiner venster / popup dat boven de andere inhoud op het scherm verschijnt.\nGebruik een popover om aanvullende informatie aan de gebruiker te geven of om gebruikersinteractie te vragen."]}),"\n",(0,m.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:"language-js",children:"import { VlPopoverComponent } from '@domg-wc/components';\n"})}),"\n",(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:"language-html",children:"<vl-popover></vl-popover>\n"})}),"\n",(0,m.jsx)(v.Hl,{of:j}),"\n",(0,m.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,m.jsx)(v.ov,{of:j}),"\n",(0,m.jsx)(t.h2,{id:"extra-informatie",children:"Extra informatie"}),"\n",(0,m.jsx)(t.h3,{id:"oriëntatie",children:"Oriëntatie"}),"\n",(0,m.jsxs)(t.p,{children:["Je kan de oriëntatie bepalen van de popover als daarvoor plaats is met ",(0,m.jsx)(t.code,{children:"placement"}),". Anders zal ",(0,m.jsx)(t.code,{children:"floating-ui"}),"\nachterliggend zoeken naar de volgende geschikt oriëntatie; standaard zal dit dan de tegenovergestelde oriëntatie\nzijn van de initieel ingestelde.\nMeer info kan je ",(0,m.jsx)(t.a,{href:"https://floating-ui.com/docs/tutorial#placements",target:"_blank",rel:"nofollow noopener noreferrer",children:"hier"})," vinden."]}),"\n",(0,m.jsxs)(t.p,{children:["Je kan een ",(0,m.jsx)(t.code,{children:"-start"})," of ",(0,m.jsx)(t.code,{children:"-end"})," suffix toevoegen zodat de oriëntatie start of eindigt aan respectievelijk het begin of\neinde van het referentie-element."]}),"\n",(0,m.jsx)(t.h3,{id:"standaard-pijl--afstand",children:"Standaard pijl & afstand"}),"\n",(0,m.jsx)(t.p,{children:"Standaard wordt:"}),"\n",(0,m.jsxs)(t.ul,{children:["\n",(0,m.jsx)(t.li,{children:"de pijl getoond"}),"\n",(0,m.jsxs)(t.li,{children:["wordt de ",(0,m.jsx)(t.code,{children:"distance"})," ingesteld op ",(0,m.jsx)(t.code,{children:"10px"})]}),"\n"]}),"\n",(0,m.jsx)(t.p,{children:"Dit is er zodat de stijl van DV gevolgd wordt."}),"\n",(0,m.jsxs)(t.p,{children:["Je kan de pijl verbergen door ",(0,m.jsx)(t.code,{children:"hide-arrow"})," in te stellen.\nDe afstand tot het referentie-element kan je volledig zelf bepalen."]}),"\n",(0,m.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,m.jsx)(t.h3,{id:"hover",children:"Hover"}),"\n",(0,m.jsxs)(t.p,{children:["Je kan de standaard ",(0,m.jsx)(t.code,{children:"click"})," waarde voor ",(0,m.jsx)(t.code,{children:"trigger"})," ook instellen op bv. de combinatie van ",(0,m.jsx)(t.code,{children:"hover"})," & ",(0,m.jsx)(t.code,{children:"focus"})," interacties."]}),"\n",(0,m.jsx)(v.Hl,{of:x}),"\n",(0,m.jsx)(t.h3,{id:"popover-actions",children:"Popover Actions"}),"\n",(0,m.jsxs)(t.p,{children:["Je kan een lijst van acties toevoegen aan de popover en die acties markeren als ",(0,m.jsx)(t.code,{children:"active"}),"."]}),"\n",(0,m.jsx)(v.Hl,{of:k}),"\n",(0,m.jsx)(t.p,{children:"Hieronder vind je een voorbeeld implementatie met LitElement"}),"\n",(0,m.jsxs)("details",{children:[(0,m.jsx)("summary",{children:"Toon HTML template voorbeeld"}),(0,m.jsx)(v.kL,{code:`
    <vl-popover-action-list @click=\${actionListClickHandler}>
        <vl-popover-action selected=\${selected} icon="search">Zoeken</vl-popover-action>
        <vl-popover-action icon="bell">Rapportenoverzicht</vl-popover-action>
        <vl-popover-action icon="pin">Vind locatie</vl-popover-action>
    </vl-popover-action-list>
    `,language:"html",dark:!0})]}),"\n",(0,m.jsxs)("details",{children:[(0,m.jsx)("summary",{children:"Toon TypeScript code voorbeeld"}),(0,m.jsx)(v.kL,{code:`
    const actionListClickHandler = (event: CustomEvent) => {
            const actionElement = event.target as VlPopoverActionComponent;
            const allActions = Array.from(actionElement.parentElement?.querySelectorAll('vl-popover-action') || []);
            allActions.forEach((action) => {
                if (action !== actionElement) {
                    action.removeAttribute('selected');
                }
            });
            actionElement.setAttribute('selected', '');
        };
    `,language:"ts",dark:!0})]}),"\n",(0,m.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,m.jsx)(t.h3,{id:"floating-ui",children:"floating-ui"}),"\n",(0,m.jsxs)(t.p,{children:["De popover-component gebruikt achterliggend ",(0,m.jsx)(t.a,{href:"https://floating-ui.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"floating-ui"}),", de opvolger van Popper"]}),"\n",(0,m.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-popover",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Popover"})})]})}o("../../node_modules/@storybook/addon-docs/dist/index.mjs");let f={...n.D8,selected:!1},b={...(0,n.RN)(!0),selected:{name:"selected",description:"Duidt aan dat de actie geselecteerd is.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.PROPERTIES,defaultValue:{summary:f.selected}}}};(0,i.gy)([c.n,l.B,a.H]);let y={title:"Components/popover",tags:["autodocs"],args:p,argTypes:h,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.RP)(),e.components);return t?(0,m.jsx)(t,Object.assign({},e,{children:(0,m.jsx)(g,e)})):g(e)}}}},j=(0,n._7)(p,({trigger:e,contentPadding:t,open:o,placement:n,hideArrow:i,hideOnClick:a,distance:l})=>(0,s.qy)`
            <a is="vl-link" id="btn-acties">Acties</a>
            <vl-popover
                for="btn-acties"
                open="${o}"
                placement=${n}
                trigger=${e}
                hide-arrow=${i}
                hide-on-click="${a}"
                distance=${l}
                content-padding=${t}
            >
                <vl-popover-action-list @click=${e=>{let t=e.target;(0,r.XI)("click")("vl-popover-action clicked > "+t.action),Array.from(t.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(e=>{e!==t&&e.removeAttribute("selected")}),t.setAttribute("selected","")}}>
                    <vl-popover-action icon="search" .action=${"search"}>Zoeken</vl-popover-action>
                    <vl-popover-action icon="bell" .action=${"report"}>Rapportenoverzicht</vl-popover-action>
                    <vl-popover-action icon="pin" .action=${"locate"}>Vind locatie</vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        `);j.storyName="vl-popover - default",j.args={placement:"bottom-start"};let x=(0,n._7)(p,({trigger:e,open:t,contentPadding:o,placement:n,hideArrow:i,hideOnClick:r,distance:a})=>(0,s.qy)`
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
        `);x.storyName="vl-popover - hover",x.args={trigger:"focus hover"},x.parameters={layout:"centered",contentPadding:"medium"};let k=(0,n._7)(f,({selected:e})=>(0,s.qy)`
        <vl-popover-action-list @click=${e=>{let t=e.target;(0,r.XI)("click")("vl-popover-action clicked > "+t.action),Array.from(t.parentElement?.querySelectorAll("vl-popover-action")||[]).forEach(e=>{e!==t&&e.removeAttribute("selected")}),t.setAttribute("selected","")}}>
            <vl-popover-action selected=${e} icon="search">Zoeken</vl-popover-action>
            <vl-popover-action icon="bell">Rapportenoverzicht</vl-popover-action>
            <vl-popover-action icon="pin">Vind locatie</vl-popover-action>
        </vl-popover-action-list>
    `);k.storyName="vl-popover - actions",k.args=f,k.argTypes=b,k.parameters={controls:{include:["selected"]}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(popoverDefaultArgs, ({\n  trigger,\n  contentPadding,\n  open,\n  placement,\n  hideArrow,\n  hideOnClick,\n  distance\n}) => {\n  const actionListClickHandler = (event: CustomEvent) => {\n    const actionElement = (event.target as VlPopoverActionComponent);\n    action('click')('vl-popover-action clicked > ' + actionElement.action);\n    const allActions = Array.from(actionElement.parentElement?.querySelectorAll('vl-popover-action') || []);\n    allActions.forEach(action => {\n      if (action !== actionElement) {\n        action.removeAttribute('selected');\n      }\n    });\n    actionElement.setAttribute('selected', '');\n  };\n  return html`\n            <a is=\"vl-link\" id=\"btn-acties\">Acties</a>\n            <vl-popover\n                for=\"btn-acties\"\n                open=\"${open}\"\n                placement=${placement}\n                trigger=${trigger}\n                hide-arrow=${hideArrow}\n                hide-on-click=\"${hideOnClick}\"\n                distance=${distance}\n                content-padding=${contentPadding}\n            >\n                <vl-popover-action-list @click=${actionListClickHandler}>\n                    <vl-popover-action icon=\"search\" .action=${'search'}>Zoeken</vl-popover-action>\n                    <vl-popover-action icon=\"bell\" .action=${'report'}>Rapportenoverzicht</vl-popover-action>\n                    <vl-popover-action icon=\"pin\" .action=${'locate'}>Vind locatie</vl-popover-action>\n                </vl-popover-action-list>\n            </vl-popover>\n        `;\n})",...j.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'story(popoverDefaultArgs, ({\n  trigger,\n  open,\n  contentPadding,\n  placement,\n  hideArrow,\n  hideOnClick,\n  distance\n}) => {\n  return html`\n            <button id="btn-close" aria-describedby="tooltip" is="vl-button">Hover over me</button>\n            <vl-popover\n                for="btn-close"\n                open=${open}\n                placement=${placement}\n                trigger=${trigger}\n                hide-arrow=${hideArrow}\n                hide-on-click=${hideOnClick}\n                distance=${distance}\n                content-padding=${contentPadding}\n            >\n                Een boodschap die context geeft.\n            </vl-popover>\n        `;\n})',...x.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(popoverActionArgs, ({\n  selected\n}) => {\n  const actionListClickHandler = (event: CustomEvent) => {\n    const actionElement = (event.target as VlPopoverActionComponent);\n    action('click')('vl-popover-action clicked > ' + actionElement.action);\n    const allActions = Array.from(actionElement.parentElement?.querySelectorAll('vl-popover-action') || []);\n    allActions.forEach(action => {\n      if (action !== actionElement) {\n        action.removeAttribute('selected');\n      }\n    });\n    actionElement.setAttribute('selected', '');\n  };\n  return html`\n        <vl-popover-action-list @click=${actionListClickHandler}>\n            <vl-popover-action selected=${selected} icon=\"search\">Zoeken</vl-popover-action>\n            <vl-popover-action icon=\"bell\">Rapportenoverzicht</vl-popover-action>\n            <vl-popover-action icon=\"pin\">Vind locatie</vl-popover-action>\n        </vl-popover-action-list>\n    `;\n})",...k.parameters?.docs?.source}}};let E=["PopoverDefault","PopoverHover","PopoverActions"]},"../../node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/memoizerific sync recursive",e.exports=t},"../../node_modules/react-dom/client.js":(e,t,o)=>{"use strict";var n=o("../../node_modules/react-dom/index.js");t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o("../../node_modules/react/index.js"),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,r={},c=null,d=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!l.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:a.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},"../../node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../libs/common/utilities/src/constants/index.ts":(e,t,o)=>{"use strict";o.d(t,{J3:()=>n.J3,aK:()=>n.aK,qm:()=>n.qm});var n=o("../../libs/common/utilities/src/constants/constants.ts")},"../../libs/components/src/popover/vl-popover-action-list.component.ts":(e,t,o)=>{"use strict";o.d(t,{H:()=>c});var n=o("../../node_modules/lit/index.js"),i=o("../../libs/common/utilities/src/index.ts"),r=o("../../node_modules/@domg/govflanders-style/common/index.js"),s=o("../../libs/elements/src/index.ts"),a=o("../../node_modules/lit/decorators.js");let l=(0,n.AH)`
    :host {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
    }
`;class c extends i.jW{static get styles(){return[r.h8,s.hF,l]}render(){return(0,n.qy)` <slot></slot> `}}c=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,a.EM)("vl-popover-action-list")],c)},"../../libs/components/src/popover/vl-popover-action.component.ts":(e,t,o)=>{"use strict";o.d(t,{B:()=>c});var n=o("../../node_modules/lit/index.js"),i=o("../../libs/common/utilities/src/index.ts"),r=o("../../node_modules/@domg/govflanders-style/common/index.js"),s=o("../../libs/elements/src/index.ts"),a=o("../../node_modules/lit/decorators.js");let l=(0,n.AH)`
    :host {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        color: #0055cc;
        font-weight: 500;
        font-size: 16px;
        padding-left: 0.7rem;
        padding-right: 0.7rem;
    }

    :host(:hover) {
        text-decoration: underline;
    }

    :host(:focus, :focus-within) {
        box-shadow: none;
        outline: 3px solid rgba(0, 85, 204, 0.65);
        outline-offset: 2px;
    }

    :host([selected]) {
        border-left: 0.3rem solid #0055cc;
        padding-left: 0.4rem;
    }
`;class c extends i.jW{static get styles(){return[r.h8,s.hF,l]}static get properties(){return{icon:{type:String,reflect:!0},action:{type:String},selected:{type:Boolean}}}render(){return(0,n.qy)`
            ${this.icon&&""!==this.icon?(0,n.qy)`<span is="vl-icon" data-vl-icon=${this.icon}></span>`:n.s6}
            <slot></slot>
        `}updated(e){e.has("selected")&&(this.selected?this.setAttribute("aria-selected","true"):this.removeAttribute("aria-selected"))}constructor(...e){super(...e),this.icon="",this.selected=!1}}c=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,a.EM)("vl-popover-action")],c)},"../../libs/components/src/popover/vl-popover.component.ts":(e,t,o)=>{"use strict";o.d(t,{n:()=>g});var n=o("../../libs/common/utilities/src/index.ts"),i=o("../../libs/elements/src/index.ts"),r=o("../../node_modules/@domg/govflanders-style/common/index.js"),s=o("../../node_modules/lit/index.js"),a=o("../../node_modules/lit/decorators.js"),l=o("../../node_modules/lit/directives/class-map.js"),c=o("../../node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs"),d=o("../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),p=o("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");class h{constructor(e,t){this.hoverTimeout=0,this.handleClick=()=>{this.host.toggle()},this.handleMouseOver=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.show(),this.options.showDelay)},this.handleMouseOut=()=>{clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.host.hide(),this.options.hideDelay)},this.handleFocusIn=()=>{this.host.show()},this.handleFocusOut=()=>{this.host.hide()},this.handleClickOutside=e=>{let t=e.target;this.host.contains(t)||this.getReferenceElement()?.contains(t)||0!==e.button||this.host.hide()},this.handleKeyDown=e=>{this.host.open&&"Escape"===e.key&&(e.stopPropagation(),this.host.hide())},this.handleResize=()=>{this.host.open&&this.host.hide()},this.setOptions(t),this.host=e,this.host.addController(this)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}getReferenceElement(){let e=`#${this.options.reference}`,t=this.host.getRootNode();return document.querySelector(e)||t.querySelector(e)||null}getArrowElement(){return this.host.shadowRoot.querySelector("i#popover-arrow")}buildMiddlewares(){return[(0,d.cY)(this.options.distance),(0,p.UU)(),(0,p.BN)(),(0,p.UE)({element:this.getArrowElement(),padding:8})]}async updatePosition(){if(!this.getReferenceElement){console.warn(this.host.tagName," could not find reference element with id: #",this.options?.reference);return}let{x:e,y:t,strategy:o,placement:n,middlewareData:i}=await (0,p.rD)(this.getReferenceElement(),this.host,{placement:this.options.placement,middleware:this.buildMiddlewares(),platform:{...p.iD,getOffsetParent:e=>p.iD.getOffsetParent(e,c.WX)}});Object.assign(this.host.style,{position:o,left:`${e}px`,top:`${t}px`});let r={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(i.arrow&&this.getArrowElement()){let{x:e,y:t}=i.arrow;Object.assign(this.getArrowElement().style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",[r]:`${-this.getArrowElement().offsetWidth/2}px`})}}setOptions(e){this.options=e}addEventListeners(){let e=this.getReferenceElement();e?.addEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e?.addEventListener("click",this.handleClick),document.addEventListener("click",this.handleClickOutside,!0),this.options.hideOnClick&&this.host.addEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e?.addEventListener("mouseover",this.handleMouseOver),e?.addEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e?.addEventListener("focusin",this.handleFocusIn,!0),e?.addEventListener("focusout",this.handleFocusOut,!0)),window.addEventListener("resize",this.handleResize)}removeEventListeners(){let e=this.getReferenceElement();if(!e){console.warn(this.host.tagName," could not find reference element with id: #",this.options?.reference);return}e.removeEventListener("keydown",this.handleKeyDown),this.hasTrigger("click")&&(e.removeEventListener("click",this.handleClick),document.removeEventListener("click",this.handleClickOutside,!0),this.host.removeEventListener("click",this.host.hide)),this.hasTrigger("hover")&&(e.removeEventListener("mouseover",this.handleMouseOver),e.removeEventListener("mouseout",this.handleMouseOut)),this.hasTrigger("focus")&&(e.removeEventListener("focusin",this.handleFocusIn,!0),e.removeEventListener("focusout",this.handleFocusOut,!0)),window.removeEventListener("resize",this.handleResize)}hasTrigger(e){return this.options.trigger.split(" ").includes(e)}}var m=o("../../libs/components/src/popover/vl-popover-action-list.component.ts"),u=o("../../libs/components/src/popover/vl-popover-action.component.ts");let v=(0,s.AH)`
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
        font-size: 1.6rem;
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
`;class g extends n.jW{static{(0,n.gy)([u.B,m.H])}static get styles(){return[r.h8,i.hF,v]}static get properties(){return{for:{type:String,attribute:"for"},contentPadding:{type:String,attribute:"content-padding"},open:{type:Boolean,attribute:"open",reflect:!0},trigger:{type:String,attribute:"trigger"},placement:{type:String,attribute:"placement",reflect:!0},distance:{type:Number,attribute:"distance"},hideArrow:{type:Boolean,attribute:"hide-arrow"},hideOnClick:{type:Boolean,attribute:"hide-on-click"}}}firstUpdated(){this.hidden=!this.open,this.popup=new h(this,this.popupOptions()),this.open&&this.popup.updatePosition()}render(){let e={"popover-content":!0,[`padding-${this.contentPadding}`]:!0};return(0,s.qy)`
            <div class=${(0,l.H)(e)}>
                <slot role="content"></slot>
                ${this.hideArrow?null:(0,s.qy)`<i id="popover-arrow" role="presentation"></i>`}
            </div>
        `}updated(e){e.has("open")?this.handleOpenChange():(this.popup.setOptions(this.popupOptions()),this.popup.updatePosition())}handleOpenChange(){this.open?(this.popup.updatePosition(),this.hidden=!1):this.hidden=!0,this.popup.getReferenceElement()?.setAttribute("aria-expanded",this.open?"true":"false")}toggle(){this.open?this.hide():this.show()}popupOptions(){return{reference:this.for,trigger:this.trigger,distance:this.distance,placement:this.placement,showDelay:0,hideDelay:0,hideOnClick:this.hideOnClick}}constructor(...e){super(...e),this.open=!1,this.for="",this.trigger="click",this.placement="bottom",this.distance=10,this.hideArrow=!1,this.contentPadding="small",this.hideOnClick=!1,this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}}g=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}([(0,a.EM)("vl-popover")],g)}}]);