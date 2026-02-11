"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[977],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,n)=>{n.d(t,{f:()=>h});var o=n("../../node_modules/react/index.js"),r=n("../../node_modules/react-dom/client.js"),s=new Map,a=({callback:e,children:t})=>{let n=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{n.current!==e&&(n.current=e,e())},[e]),t},l=async(e,t)=>{let n=await d(t);return new Promise(t=>{n.render(o.createElement(a,{callback:()=>t(null)},e))})},i=(e,t)=>{let n=s.get(e);n&&(n.unmount(),s.delete(e))},d=async e=>{let t=s.get(e);return t||(t=r.createRoot(e),s.set(e,t)),t},u=n("../../node_modules/@storybook/blocks/dist/index.mjs"),c={code:u.XA,a:u.zE,...u.Sw},m=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},h=class{constructor(){this.render=async(e,t,r)=>{let s={...c,...t?.components},a=u.kQ;return new Promise((i,d)=>{n.e(814).then(n.bind(n,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:n})=>l(o.createElement(m,{showException:d,key:Math.random()},o.createElement(n,{components:s},o.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,n)=>{n.d(t,{Hl:()=>o.Hl,W8:()=>o.W8,kL:()=>o.kL,ov:()=>o.ov}),n("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=n("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/components/src/next/infotext/stories/vl-infotext.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{InfotextBadge:()=>S,InfotextDefault:()=>j,InfotextLink:()=>_,__namedExportsOrder:()=>k,default:()=>b});var o=n("../../libs/common/storybook/src/index.ts"),r=n("../../node_modules/lit-html/lit-html.js"),s=n("../../libs/common/utilities/src/index.ts"),a=n("../../node_modules/lit/index.js"),l=n("../../node_modules/lit/directives/class-map.js"),i=n("../../libs/common/utilities/src/css/index.ts");let d=(0,a.AH)`
    .vl-infotext {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: 500;
        color: var(--vl-color--text-alt);
        max-width: 14rem;

        @media screen and (max-width: ${i.gT}px) {
            .vl-infotext__text {
                font-size: 1.4rem;
            }
        }

        &.vl-infotext--badge {
            background-color: var(--vl-color--background-alt);
            border: 1px solid var(--vl-color--border-alt);
            border-radius: 50%;
            width: 14rem;
            height: 14rem;

            .vl-infotext__value {
                line-height: 1;
                margin-top: -1rem;
            }

            .vl-infotext__text {
                font-size: 1.3rem;
                font-weight: 400;
                padding: 1rem 1rem 0;
            }
        }
    }

    a.vl-infotext {
        color: var(--vl-color--action);
        text-decoration: none;

        &:hover,
        &:focus {
            color: var(--vl-color--action-hover);

            .vl-infotext__text {
                text-decoration: underline;
            }
        }
    }
`,u={badge:!1,href:"",external:!1};class c extends s.jW{static get styles(){return[d]}static get properties(){return{badge:{type:Boolean},href:{type:String},external:{type:Boolean},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback(),this.adjustValue(),this.valueObserver=new MutationObserver(()=>this.adjustValue()),this.getValueSlot()&&this.valueObserver.observe(this.getValueSlot(),{subtree:!0,childList:!0}),window.addEventListener("resize",this.throttledAdjustValue),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.customStyleSheet]}disconnectedCallback(){super.disconnectedCallback(),this.valueObserver?.disconnect(),window.removeEventListener("resize",this.throttledAdjustValue)}render(){let e={"vl-infotext":!0,"vl-infotext--badge":this.badge};if(this.href){let t=this.external?"_blank":a.s6;return(0,a.qy)`<a class=${(0,l.H)(e)} href=${this.href} target=${t}>${this.renderContent()}</a>`}return(0,a.qy)` <div class=${(0,l.H)(e)}>${this.renderContent()}</div>`}renderContent(){return(0,a.qy)`
            <div class="vl-infotext__value">${this.value}</div>
            <div class="vl-infotext__text">
                <slot name="text"></slot>
            </div>
            <slot name="value" hidden></slot>
        `}getValueSlot(){return this.querySelector('[slot="value"]')}adjustValue(){let e=this.getValueSlot(),t=this.getFormattedValue(e?.textContent),n=this.getCustomFontSize(t.length);this.value=t,this.customStyleSheet.replaceSync(`.vl-infotext__value { font-size: ${n}; }`)}getFormattedValue(e){return!e||isNaN(Number(e))?e||"":Intl.NumberFormat("nl-BE").format(Number(e))}constructor(...e){super(...e),this.badge=u.badge,this.href=u.href,this.external=u.external,this.value="",this.customStyleSheet=new CSSStyleSheet,this.valueObserver=null,this.throttledAdjustValue=(0,s.nF)(()=>this.adjustValue(),100),this.getCustomFontSize=(e=0)=>{let t=!this.badge&&window.innerWidth<=767?2.4:4.8,n=t-e/4;return!e||e<=4?`${t}rem`:n<1.6?"1.6rem":`${n}rem`}}}c=function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,s.M1)("vl-infotext-next")],c);let m={...o.D8,...u,valueSlot:"",textSlot:""},h={...(0,o.RN)(!0),badge:{name:"badge",description:"Beeldt de infotext af in een badge.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:m.badge}}},href:{name:"href",description:"De url waar de infotext naar verwijst.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:m.href}}},external:{name:"external",description:"Opent de link in een nieuw tabblad.<br/>Te gebruiken in combinatie met het href attribuut.",table:{type:{summary:o.QE.BOOLEAN},category:o.R6.ATTRIBUTES,defaultValue:{summary:m.external}}},valueSlot:{name:"value",description:"De waarde van de infotext.<br/>De font-size wordt automatisch aangepast naargelang de lengte van de value.<br/>Indien er een nummer meegegeven wordt zal de value automatisch geformatteerd worden.",table:{type:{summary:o.QE.HTML},category:o.R6.SLOTS,defaultValue:{summary:m.valueSlot}}},textSlot:{name:"text",description:"De tekst van de infotext.",table:{type:{summary:o.QE.HTML},category:o.R6.SLOTS,defaultValue:{summary:m.textSlot}}}};var x=n("../../node_modules/lit/directives/unsafe-html.js");n("../../node_modules/react/index.js");var f=n("../../node_modules/react/jsx-runtime.js"),v=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),p=n("../../node_modules/@storybook/addon-docs/dist/index.mjs");function g(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,v.RP)(),e.components),{VluxMetaData:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h1,{id:"infotext---next",children:"Infotext - next"}),"\n",(0,f.jsx)(n,{id:"components-next-infotext"}),"\n",(0,f.jsxs)(t.p,{children:["Gebruik de ",(0,f.jsx)(t.code,{children:"infotext-next"})," component om belangrijke nummers duidelijk weer te gevem.",(0,f.jsx)("br",{})]}),"\n",(0,f.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-js",children:"import { VlInfotextComponent } from '@domg-wc/components/next/infotext';\n"})}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-html",children:"<vl-infotext-next></vl-infotext-next>\n"})}),"\n",(0,f.jsx)(p.Hl,{of:j}),"\n",(0,f.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,f.jsx)(p.ov,{of:j}),"\n",(0,f.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,f.jsx)(t.h3,{id:"badge",children:"Badge"}),"\n",(0,f.jsx)(p.Hl,{of:S}),"\n",(0,f.jsx)(t.h3,{id:"link",children:"Link"}),"\n",(0,f.jsx)(p.Hl,{of:_}),"\n",(0,f.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,f.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-infotext",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Infotext"})})]})}(0,s.gy)([c]);let b={id:"components-next-infotext",title:"Components-next/infotext",tags:["autodocs"],args:m,argTypes:h,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,v.RP)(),e.components);return t?(0,f.jsx)(t,Object.assign({},e,{children:(0,f.jsx)(g,e)})):g(e)}}}},y=(0,o._7)(m,({badge:e,href:t,external:n,valueSlot:o,textSlot:s})=>(0,r.qy)`
            <vl-infotext-next ?badge=${e} href=${t} ?external=${n}>
                <span slot="value">${(0,x._)(o)}</span>
                <span slot="text">${(0,x._)(s)}</span>
            </vl-infotext-next>
        `),j=y.bind({});j.storyName="vl-infotext-next - default",j.args={valueSlot:"3200",textSlot:"Bezoekers per dag"};let S=y.bind({});S.storyName="vl-infotext-next - badge",S.args={valueSlot:"3200",textSlot:"Bezoekers per dag",badge:!0};let _=y.bind({});_.storyName="vl-infotext-next - link",_.args={valueSlot:"3200",textSlot:"Bezoekers per dag",href:"https://www.vlaanderen.be"},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'story(infotextArgs, ({\n  badge,\n  href,\n  external,\n  valueSlot,\n  textSlot\n}) => html`\n            <vl-infotext-next ?badge=${badge} href=${href} ?external=${external}>\n                <span slot="value">${unsafeHTML(valueSlot)}</span>\n                <span slot="text">${unsafeHTML(textSlot)}</span>\n            </vl-infotext-next>\n        `)',...j.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'story(infotextArgs, ({\n  badge,\n  href,\n  external,\n  valueSlot,\n  textSlot\n}) => html`\n            <vl-infotext-next ?badge=${badge} href=${href} ?external=${external}>\n                <span slot="value">${unsafeHTML(valueSlot)}</span>\n                <span slot="text">${unsafeHTML(textSlot)}</span>\n            </vl-infotext-next>\n        `)',...S.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'story(infotextArgs, ({\n  badge,\n  href,\n  external,\n  valueSlot,\n  textSlot\n}) => html`\n            <vl-infotext-next ?badge=${badge} href=${href} ?external=${external}>\n                <span slot="value">${unsafeHTML(valueSlot)}</span>\n                <span slot="text">${unsafeHTML(textSlot)}</span>\n            </vl-infotext-next>\n        `)',..._.parameters?.docs?.source}}};let k=["InfotextDefault","InfotextBadge","InfotextLink"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>a});var o=n("../../node_modules/lit-html/lit-html.js"),r=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends r.WL{constructor(e){if(super(e),this.et=o.s6,e.type!==r.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.s6||null==e)return this.vt=void 0,this.et=e;if(e===o.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}s.directiveName="unsafeHTML",s.resultType=1;var a=(0,r.u$)(s)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>o._});var o=n("../../node_modules/lit-html/directives/unsafe-html.js")},"../../node_modules/react-dom/client.js":(e,t,n)=>{var o=n("../../node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot}}]);