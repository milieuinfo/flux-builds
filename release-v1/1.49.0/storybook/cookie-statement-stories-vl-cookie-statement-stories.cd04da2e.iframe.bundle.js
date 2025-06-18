"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9815],{"../../libs/sections/src/cookie-statement/stories/vl-cookie-statement.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{CookieStatementDefault:()=>u,CookieStatementHeaderSlot:()=>v,__namedExportsOrder:()=>b,default:()=>h});var a=n("../../libs/common/storybook/src/index.ts"),o=n("../../node_modules/lit-html/lit-html.js");n("../../libs/sections/src/cookie-statement/vl-cookie-statement.section.ts");var l=n("../../node_modules/lit/directives/unsafe-html.js");let i={date:"3 maart 2021",disableBackLink:!1,hideBackLink:!1,version:"1.0.0",onClickBack:(0,n("../../node_modules/@storybook/addon-actions/dist/index.mjs").XI)("vl-click-back"),headerSlot:""},s={date:{name:"data-vl-date",description:"De datum waarop de pagina werd uitgegeven.",table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:i.date}}},disableBackLink:{name:"data-vl-disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:i.disableBackLink}}},hideBackLink:{name:"data-vl-hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:i.hideBackLink}}},version:{name:"data-vl-version",description:"De pagina versie.",table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:i.version}}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:a.R6.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:a.QE.HTML},category:a.R6.SLOTS,defaultValue:i.headerSlot}}};n("../../node_modules/react/index.js");var r=n("../../node_modules/react/jsx-runtime.js"),d=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=n("../../node_modules/@storybook/blocks/dist/index.mjs");function m(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,d.RP)(),e.components),{VluxMetaData:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"cookie-statement",children:"Cookie Statement"}),"\n",(0,r.jsx)(n,{id:"sections-cookie-statement"}),"\n",(0,r.jsx)(t.p,{children:"Cookieverklaring pagina."}),"\n",(0,r.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { VlCookieStatement } from '@domg-lib/sections';\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<vl-cookie-statement></vl-cookie-statement>\n"})}),"\n",(0,r.jsx)(c.Hl,{of:u}),"\n",(0,r.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,r.jsx)(c.ov,{of:u}),"\n",(0,r.jsx)(t.h2,{id:"header-slot",children:"Header Slot"}),"\n",(0,r.jsxs)(t.p,{children:["Standaard wordt deze template gebruikt om de ",(0,r.jsx)(t.code,{children:"functional-header"})," te bepalen in dit component."]}),"\n",(0,r.jsx)(c.kL,{code:'import { html } from \'lit\';\nimport { VlFunctionalHeaderComponent } from \'@domg-wc/components\';\nexport const cookieStatementHeaderElements = ()=>[\n        VlFunctionalHeaderComponent\n    ];\nexport const header = ()=>html`\n    <vl-functional-header\n        data-vl-title="Departement Omgeving"\n        data-vl-sub-title="Cookieverklaring"\n        data-vl-link="https://omgeving.vlaanderen.be"\n    ></vl-functional-header>\n`;\n',language:"ts",dark:!0}),"\n",(0,r.jsxs)(t.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",(0,r.jsx)(t.code,{children:"vl-functional-header"})," vervangen door een\nander, eventueel aangepaste header element."]}),"\n",(0,r.jsx)(t.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["een ",(0,r.jsx)(t.a,{href:"/docs/components-content-header--content-header-default",children:"vl-content-header"})]}),"\n",(0,r.jsxs)(t.li,{children:["of een ",(0,r.jsx)(t.a,{href:"/docs/components-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de standaard ",(0,r.jsx)(t.code,{children:"functional-header"})," van dit component."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",(0,r.jsx)(t.code,{children:"vl-functional-header"})," bij de teruglink (",(0,r.jsx)(t.code,{children:"data-vl-back"}),') "Start"\nals label kan geven in plaats van "Terug".']}),"\n",(0,r.jsx)(c.Hl,{of:v}),"\n",(0,r.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,r.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-cookie-statement--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Cookie Statement"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlCookieStatement.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Cookie Statement"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie-statement.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Cookie Statement"})})]})}let h={id:"sections-cookie-statement",title:"sections/cookie-statement",tags:["autodocs"],args:i,argTypes:s,parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.RP)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}}}},p=(0,a._7)(i,({date:e,disableBackLink:t,hideBackLink:n,version:a,onClickBack:i,headerSlot:s})=>(0,o.qy)`
        <vl-cookie-statement
            data-vl-date=${e}
            ?data-vl-disable-back-link=${t}
            ?data-vl-hide-back-link=${n}
            data-vl-version=${a}
            @vl-click-back=${i}
        >
            <vl-cookie
                data-vl-title="Captcha contactformulier"
                data-vl-name="NID"
                data-vl-purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."
                data-vl-domain="google.com"
                data-vl-processor="Google"
                data-vl-validity="Permanente cookie met een geldigheid van 6 maanden"
            >
            </vl-cookie>
            <vl-cookie
                data-vl-title="Bestellen publicaties Vlaamse overheid"
                data-vl-name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"
                data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."
                data-vl-domain="publicaties.vlaanderen.be"
                data-vl-processor="Vlaamse overheid"
                data-vl-validity="Permanente cookie met een geldigheid van 3 weken"
            >
            </vl-cookie>
            ${(0,l._)(s)}
        </vl-cookie-statement>
    `),u=p.bind({});u.storyName="vl-cookie-statement - default";let v=p.bind({});v.storyName="vl-cookieStatement - header slot",v.args={headerSlot:`
    <vl-functional-header
        slot="header"
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Cookieverklaring"
        data-vl-link="https://omgeving.vlaanderen.be"
        data-vl-back="Start"
    ></vl-functional-header>
`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'story(cookieStatementArgs, ({\n  date,\n  disableBackLink,\n  hideBackLink,\n  version,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-cookie-statement\n            data-vl-date=${date}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-version=${version}\n            @vl-click-back=${onClickBack}\n        >\n            <vl-cookie\n                data-vl-title="Captcha contactformulier"\n                data-vl-name="NID"\n                data-vl-purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."\n                data-vl-domain="google.com"\n                data-vl-processor="Google"\n                data-vl-validity="Permanente cookie met een geldigheid van 6 maanden"\n            >\n            </vl-cookie>\n            <vl-cookie\n                data-vl-title="Bestellen publicaties Vlaamse overheid"\n                data-vl-name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"\n                data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."\n                data-vl-domain="publicaties.vlaanderen.be"\n                data-vl-processor="Vlaamse overheid"\n                data-vl-validity="Permanente cookie met een geldigheid van 3 weken"\n            >\n            </vl-cookie>\n            ${unsafeHTML(headerSlot)}\n        </vl-cookie-statement>\n    `)',...u.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'story(cookieStatementArgs, ({\n  date,\n  disableBackLink,\n  hideBackLink,\n  version,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-cookie-statement\n            data-vl-date=${date}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-version=${version}\n            @vl-click-back=${onClickBack}\n        >\n            <vl-cookie\n                data-vl-title="Captcha contactformulier"\n                data-vl-name="NID"\n                data-vl-purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."\n                data-vl-domain="google.com"\n                data-vl-processor="Google"\n                data-vl-validity="Permanente cookie met een geldigheid van 6 maanden"\n            >\n            </vl-cookie>\n            <vl-cookie\n                data-vl-title="Bestellen publicaties Vlaamse overheid"\n                data-vl-name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"\n                data-vl-purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."\n                data-vl-domain="publicaties.vlaanderen.be"\n                data-vl-processor="Vlaamse overheid"\n                data-vl-validity="Permanente cookie met een geldigheid van 3 weken"\n            >\n            </vl-cookie>\n            ${unsafeHTML(headerSlot)}\n        </vl-cookie-statement>\n    `)',...v.parameters?.docs?.source}}};let b=["CookieStatementDefault","CookieStatementHeaderSlot"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>i});var a=n("../../node_modules/lit-html/lit-html.js"),o=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends o.WL{constructor(e){if(super(e),this.et=a.s6,e.type!==o.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===a.s6||null==e)return this.vt=void 0,this.et=e;if(e===a.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var i=(0,o.u$)(l)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>a._});var a=n("../../node_modules/lit-html/directives/unsafe-html.js")},"../../libs/components/src/next/paragraph/index.ts":(e,t,n)=>{n.d(t,{Q:()=>a.Q});var a=n("../../libs/components/src/next/paragraph/vl-paragraph.component.ts")},"../../libs/components/src/next/paragraph/vl-paragraph.component.ts":(e,t,n)=>{n.d(t,{Q:()=>r});var a=n("../../libs/common/utilities/src/index.ts"),o=n("../../libs/common/utilities/src/css/index.ts"),l=n("../../node_modules/lit/index.js"),i=n("../../node_modules/lit/directives/class-map.js"),s=n("../../libs/components/src/next/paragraph/vl-paragraph.defaults.ts");class r extends a.jW{static get styles(){return[o.N]}static get properties(){return{bold:{type:Boolean},introduction:{type:Boolean}}}render(){let e={bold:this.bold,introduction:this.introduction};return(0,l.qy)`
            <p class=${(0,i.H)(e)}>
                <slot></slot>
            </p>
        `}constructor(...e){super(...e),this.bold=s.J.bold,this.introduction=s.J.introduction}}r=function(e,t,n,a){var o,l=arguments.length,i=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(l<3?o(i):l>3?o(t,n,i):o(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i}([(0,a.M1)("vl-paragraph-next")],r)},"../../libs/components/src/next/paragraph/vl-paragraph.defaults.ts":(e,t,n)=>{n.d(t,{J:()=>a});let a={bold:!1,introduction:!1}},"../../libs/components/src/next/properties/index.ts":(e,t,n)=>{n.d(t,{L:()=>a.L});var a=n("../../libs/components/src/next/properties/vl-properties.component.ts")},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,n)=>{n.d(t,{L:()=>g});var a=n("../../libs/common/utilities/src/index.ts"),o=n("../../libs/elements/src/index.ts"),l=n("../../node_modules/lit/index.js");let i=e=>e.map(e=>e.cloneNode(!0)),s=e=>{let t=[],n=[],a=[];return e.forEach(e=>{switch(e.localName){case"label":n.length&&a.length&&(t.push({labels:n,data:a}),n=[],a=[]),n.push(e.children.length>0?i([...e.children]):e.innerHTML);break;case"data":a.push(e.children.length>0?i([...e.children]):e.innerHTML)}}),n.length&&t.push({labels:n,data:a}),t},r=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:s([...e.children])})):[{items:s(e)}];var d=n("../../libs/common/utilities/src/css/index.ts");let c=e=>(0,l.AH)`
        width: calc(${e}% - 1rem);
    `,m=()=>(0,l.AH)`
        font-size: 1.6rem;
    `,h=()=>(0,l.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,p=e=>(0,l.AH)`
        dl,
        dl .item {
            grid-template-columns: [labels] ${e}% [data] auto;
        }

        dl .column--full-width,
        dl .column--full-width .item {
            grid-template-columns: [labels] ${e/2}% [data] auto;
        }
    `,u=(0,l.AH)`
    @media screen and (max-width: ${d.gT}px) {
        dl,
        dl .item {
            grid-template-columns: 100%;
        }

        .column {
            ${c(100)};
        }

        dd {
            ${h()}
        }

        dt {
            ${m()}
        }
    }
`,v=(0,l.AH)`
    :host {
        display: block;
    }

    .column {
        ${c(50)};
        float: left;
    }

    .column--full-width {
        ${c(100)};
        float: left;
    }

    dl {
        display: grid;
        word-break: break-word;
    }

    dl:has(.item) {
        display: initial;
    }

    dl .item {
        display: grid;
        padding-bottom: 2rem;
    }

    dt {
        font-size: 1.8rem;
        color: var(--vl-color--label);
        padding-right: 1rem;
        grid-column: 1;
    }

    .collapsed dt {
        ${m()}
    }

    dd {
        font-size: 1.8rem;
        grid-column: 2;
    }

    .collapsed dd {
        ${h()}
    }

    .collapsed .item,
    dl:has(.collapsed) {
        grid-template-columns: 100%;
    }
`;var b=n("../../libs/components/src/next/properties/vl-properties.defaults.ts");class g extends a.jW{static get styles(){return[o.hF,v]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet,u.styleSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(p(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,l.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,l.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,l.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,l.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,l.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,l.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...r([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,a.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,a.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=b.g.props,this.aggregatedProps=b.g.props,this.mutationObserverList=[],this.labelWidth=b.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}g=function(e,t,n,a){var o,l=arguments.length,i=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(l<3?o(i):l>3?o(t,n,i):o(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i}([(0,a.M1)("vl-properties-next")],g)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,n)=>{n.d(t,{g:()=>a});let a={labelWidth:25,props:[]}},"../../libs/components/src/next/title/index.ts":(e,t,n)=>{n.d(t,{I:()=>a.I});var a=n("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,n)=>{n.d(t,{I:()=>d});var a=n("../../libs/common/utilities/src/index.ts");n("../../node_modules/@lit/reactive-element/reactive-element.js");var o=n("../../node_modules/lit-html/lit-html.js");n("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l=(e,t,n)=>{for(var a of t)if(a[0]===e)return(0,a[1])();return null==n?void 0:n()},i=n("../../node_modules/lit/directives/class-map.js"),s=n("../../libs/components/src/next/title/vl-title.css.ts"),r=n("../../libs/components/src/next/title/vl-title.defaults.ts");class d extends a.jW{static get styles(){return[s.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,o.qy)`
            ${l(this.type,[["h1",()=>(0,o.qy)` <h1 class=${(0,i.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,o.qy)` <h2 class=${(0,i.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,o.qy)` <h3 class=${(0,i.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,o.qy)` <h4 class=${(0,i.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,o.qy)` <h5 class=${(0,i.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,o.qy)` <h6 class=${(0,i.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,o.qy)` <h1 class=${(0,i.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=r.D.type,this.underline=r.D.underline,this.noSpaceBottom=r.D.noSpaceBottom,this.alt=r.D.alt}}d=function(e,t,n,a){var o,l=arguments.length,i=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(l<3?o(i):l>3?o(t,n,i):o(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i}([(0,a.M1)("vl-title-next")],d)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,n)=>{n.d(t,{D:()=>a});let a={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}}}]);