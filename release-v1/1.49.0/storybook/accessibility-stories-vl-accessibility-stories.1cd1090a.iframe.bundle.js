"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[967],{"../../libs/sections/src/accessibility/stories/vl-accessibility.stories.ts":(e,t,i)=>{i.r(t),i.d(t,{AccessibilityDefault:()=>g,AccessibilityHeaderSlot:()=>y,__namedExportsOrder:()=>k,default:()=>h});var a=i("../../node_modules/lit-html/lit-html.js"),n=i("../../node_modules/lit/directives/unsafe-html.js");i("../../libs/sections/src/accessibility/vl-accessibility.section.ts"),i("../../node_modules/react/index.js");var l=i("../../node_modules/react/jsx-runtime.js"),s=i("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=i("../../node_modules/@storybook/blocks/dist/index.mjs");function r(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,s.RP)(),e.components),{VluxMetaData:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"accessibility",children:"Accessibility"}),"\n",(0,l.jsx)(i,{id:"sections-accessibility"}),"\n",(0,l.jsx)(t.p,{children:"Toegankelijkheidsverklaring pagina."}),"\n",(0,l.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"import { VlAccessibility } from '@domg-lib/sections';\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:"<vl-accessibility></vl-accessibility>\n"})}),"\n",(0,l.jsx)(o.Hl,{of:g}),"\n",(0,l.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(o.ov,{of:g}),"\n",(0,l.jsx)(t.h2,{id:"header-slot",children:"Header Slot"}),"\n",(0,l.jsxs)(t.p,{children:["Standaard wordt deze template gebruikt om de ",(0,l.jsx)(t.code,{children:"functional-header"})," te bepalen in deze component."]}),"\n",(0,l.jsx)(o.kL,{code:'import { html } from \'lit\';\nimport { VlFunctionalHeaderComponent } from \'@domg-wc/components\';\nexport const headerElements = ()=>[\n        VlFunctionalHeaderComponent\n    ];\nexport const header = ({ disableBackLink, hideBackLink })=>html`\n    <vl-functional-header\n        data-vl-title="Departement Omgeving"\n        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden"\n        data-vl-link="https://omgeving.vlaanderen.be"\n        ?data-vl-disable-back-link=${disableBackLink}\n        ?data-vl-hide-back-link=${hideBackLink}\n    ></vl-functional-header>\n`;\n',language:"ts",dark:!0}),"\n",(0,l.jsxs)(t.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",(0,l.jsx)(t.code,{children:"vl-functional-header"})," vervangen door een\nander, eventueel aangepaste header element."]}),"\n",(0,l.jsx)(t.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["een ",(0,l.jsx)(t.a,{href:"/docs/components-content-header--content-header-default",children:"vl-content-header"})]}),"\n",(0,l.jsxs)(t.li,{children:["of een ",(0,l.jsx)(t.a,{href:"/docs/components-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de\nstandaard ",(0,l.jsx)(t.code,{children:"functional-header"})," van dit component."]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",(0,l.jsx)(t.code,{children:"vl-functional-header"})," bij de teruglink (",(0,l.jsx)(t.code,{children:"data-vl-back"}),') "Start"\nals label kan geven in plaats van "Terug".']}),"\n",(0,l.jsx)(o.Hl,{of:y}),"\n",(0,l.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-accessibility--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Accessibility"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAccessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Accessibility"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Accessibility"})})]})}var d=i("../../libs/sections/src/accessibility/vl-accessibility.model.ts"),c=i("../../libs/common/storybook/src/index.ts"),m=i("../../node_modules/@storybook/addon-actions/dist/index.mjs");let p={application:"deze applicatie",compliance:`${d.$.PARTIALLY_COMPLIANT}`,date:"20 juli 2021",dateModified:"20 juli 2021",disableBackLink:!1,hideBackLink:!1,evaluation:`${d.o.NOT_EVALUATED}`,version:"1.0.0",limitations:null,onClickBack:(0,m.XI)("vl-click-back"),headerSlot:""},u={application:{name:"data-vl-application",description:"De applicatie waar de verklaring over gaat.",table:{type:{summary:c.QE.STRING},category:c.R6.ATTRIBUTES,defaultValue:{summary:p.application}}},compliance:{name:"data-vl-compliance",description:"De nalevingsstatus van de verklaring.",control:{type:c.VH.SELECT},options:Object.values(d.$),table:{type:(0,c.uf)(Object.values(d.$)),category:c.R6.ATTRIBUTES,defaultValue:{summary:p.compliance}}},date:{name:"data-vl-date",description:"De aanmaakdatum van de verklaring.",table:{type:{summary:c.QE.STRING},category:c.R6.ATTRIBUTES,defaultValue:{summary:p.date}}},dateModified:{name:"data-vl-date-modified",description:"De datum van de laatste wijziging van de verklaring.",table:{type:{summary:c.QE.STRING},category:c.R6.ATTRIBUTES,defaultValue:{summary:p.dateModified}}},disableBackLink:{name:"data-vl-disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:c.QE.BOOLEAN},category:c.R6.ATTRIBUTES,defaultValue:{summary:p.disableBackLink}}},hideBackLink:{name:"data-vl-hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:c.QE.BOOLEAN},category:c.R6.ATTRIBUTES,defaultValue:{summary:p.hideBackLink}}},evaluation:{name:"data-vl-evaluation",description:"De evaluatiestatus van de verklaring.",control:{type:c.VH.SELECT},options:Object.values(d.o),table:{type:{summary:(0,c.uf)(Object.values(d.o))},category:c.R6.ATTRIBUTES,defaultValue:{summary:p.evaluation}}},version:{name:"data-vl-version",description:"De huidige versie van de verklaring.",table:{type:{summary:c.QE.STRING},category:c.R6.ATTRIBUTES,defaultValue:{summary:p.version}}},limitations:{name:"limitations",description:"Property om limitaties mee te geven aan de verklaring. Het object bevat 3 optionele properties. De `withTiming` limitaties vallen onder 'Niet-naleving van het bestuursdecreet'. Dit zijn tijdelijke limitaties. `withoutTiming` limitaties vallen onder 'Onevenredige last'. Dit zijn permanente limitaties. De `outsideApplicableLaw` limitaties vallen onder 'De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving'. Dit zijn limitaties die buiten de werkingssfeer van de toepasselijke wetgeving vallen.",table:{type:{summary:"object"},category:c.R6.PROPERTIES}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:c.R6.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:c.QE.HTML},category:c.R6.SLOTS,defaultValue:p.headerSlot}}},h={id:"sections-accessibility",title:"sections/accessibility",tags:["autodocs"],args:p,argTypes:u,parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,s.RP)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(r,e)})):r(e)}}}},v=(0,c._7)(p,({application:e,compliance:t,date:i,dateModified:l,disableBackLink:s,hideBackLink:o,evaluation:r,version:d,limitations:c,onClickBack:m,headerSlot:p})=>(0,a.qy)`
        <vl-accessibility
            data-vl-application=${e}
            data-vl-compliance=${t}
            data-vl-date=${i}
            data-vl-date-modified=${l}
            ?data-vl-disable-back-link=${s}
            ?data-vl-hide-back-link=${o}
            data-vl-evaluation=${r}
            data-vl-version=${d}
            .limitations=${c}
            @vl-click-back=${m}
        >
            ${(0,n._)(p)}
        </vl-accessibility>
    `),b={withTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],withoutTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],outsideApplicableLaw:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},g=v.bind({});g.storyName="vl-accessibility - default",g.args={limitations:b};let y=v.bind({});y.storyName="vl-accessibility - header slot",y.args={limitations:b,headerSlot:`
    <vl-functional-header
        slot="header"
        data-vl-title="Departement Omgeving & Andere"
        data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden "
        data-vl-link="https://omgeving.vlaanderen.be"
        data-vl-back="Start"
    ></vl-functional-header>`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  hideBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            data-vl-application=${application}\n            data-vl-compliance=${compliance}\n            data-vl-date=${date}\n            data-vl-date-modified=${dateModified}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-evaluation=${evaluation}\n            data-vl-version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  hideBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            data-vl-application=${application}\n            data-vl-compliance=${compliance}\n            data-vl-date=${date}\n            data-vl-date-modified=${dateModified}\n            ?data-vl-disable-back-link=${disableBackLink}\n            ?data-vl-hide-back-link=${hideBackLink}\n            data-vl-evaluation=${evaluation}\n            data-vl-version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...y.parameters?.docs?.source}}};let k=["AccessibilityDefault","AccessibilityHeaderSlot"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,i)=>{i.d(t,{_:()=>s});var a=i("../../node_modules/lit-html/lit-html.js"),n=i("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends n.WL{constructor(e){if(super(e),this.et=a.s6,e.type!==n.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===a.s6||null==e)return this.vt=void 0,this.et=e;if(e===a.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var s=(0,n.u$)(l)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,i)=>{i.d(t,{_:()=>a._});var a=i("../../node_modules/lit-html/directives/unsafe-html.js")},"../../libs/components/src/next/properties/index.ts":(e,t,i)=>{i.d(t,{L:()=>a.L});var a=i("../../libs/components/src/next/properties/vl-properties.component.ts")},"../../libs/components/src/next/properties/vl-properties.component.ts":(e,t,i)=>{i.d(t,{L:()=>g});var a=i("../../libs/common/utilities/src/index.ts"),n=i("../../libs/elements/src/index.ts"),l=i("../../node_modules/lit/index.js");let s=e=>e.map(e=>e.cloneNode(!0)),o=e=>{let t=[],i=[],a=[];return e.forEach(e=>{switch(e.localName){case"label":i.length&&a.length&&(t.push({labels:i,data:a}),i=[],a=[]),i.push(e.children.length>0?s([...e.children]):e.innerHTML);break;case"data":a.push(e.children.length>0?s([...e.children]):e.innerHTML)}}),i.length&&t.push({labels:i,data:a}),t},r=e=>null==e||0==e.length?(console.warn("vl-properties - geen props opgegeven"),[]):e[0]?.localName==="div"?e.map(e=>({class:e.className,items:o([...e.children])})):[{items:o(e)}];var d=i("../../libs/common/utilities/src/css/index.ts");let c=e=>(0,l.AH)`
        width: calc(${e}% - 1rem);
    `,m=()=>(0,l.AH)`
        font-size: 1.6rem;
    `,p=()=>(0,l.AH)`
        grid-column: 1;
        font-size: 1.6rem;
    `,u=e=>(0,l.AH)`
        dl,
        dl .item {
            grid-template-columns: [labels] ${e}% [data] auto;
        }

        dl .column--full-width,
        dl .column--full-width .item {
            grid-template-columns: [labels] ${e/2}% [data] auto;
        }
    `,h=(0,l.AH)`
    @media screen and (max-width: ${d.gT}px) {
        dl,
        dl .item {
            grid-template-columns: 100%;
        }

        .column {
            ${c(100)};
        }

        dd {
            ${p()}
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
        ${p()}
    }

    .collapsed .item,
    dl:has(.collapsed) {
        grid-template-columns: 100%;
    }
`;var b=i("../../libs/components/src/next/properties/vl-properties.defaults.ts");class g extends a.jW{static get styles(){return[n.hF,v]}static get properties(){return{props:{type:Array},aggregatedProps:{type:Array,state:!0},labelWidth:{type:Number,attribute:"label-width"}}}set props(e){this.attributeProps=e,this.buildInternalProperties()}get props(){return this.attributeProps}connectedCallback(){super.connectedCallback(),this.buildInternalProperties(),this.observeLightPropertiesChange()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.labelWidthSheet,h.styleSheet])}updated(e){super.updated(e),e.has("labelWidth")&&this.labelWidth&&this.labelWidthSheet.replace(u(this.labelWidth).toString())}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMutationObservers()}render(){return(0,l.qy)` <dl>${this.aggregatedProps.map(e=>this.renderColumn(e))}</dl> `}renderColumn(e){return e.class?(0,l.qy)` <div class="${e.class}">${e.items.map(e=>this.renderItem(e))}</div>`:(0,l.qy)` ${e.items.map(e=>this.renderItem(e))}`}renderItem(e){return(0,l.qy)` <div class="item">${this.renderLabels(e.labels)} ${this.renderData(e.data)}</div>`}renderLabels(e){return e.map(e=>(0,l.qy)` <dt>${e}</dt>`)}renderData(e){return e.map(e=>(0,l.qy)` <dd>${e}</dd>`)}buildInternalProperties(){this.aggregatedProps=[...this.attributeProps,...r([...this.children])]}disconnectMutationObservers(){this.mutationObserverList.forEach(e=>e.disconnect()),this.mutationObserverList=[]}observeLightPropertiesChange(){this.disconnectMutationObservers(),this.mutationObserverList=[...this.mutationObserverList,(0,a.U_)(this,e=>{this.buildInternalProperties(),this.observeLightPropertiesChange()})],this.children.length>0&&"div"===this.children[0].localName&&[...this.children].forEach(e=>this.mutationObserverList=[...this.mutationObserverList,(0,a.U_)(e,e=>{this.buildInternalProperties()})])}constructor(...e){super(...e),this.attributeProps=b.g.props,this.aggregatedProps=b.g.props,this.mutationObserverList=[],this.labelWidth=b.g.labelWidth,this.labelWidthSheet=new CSSStyleSheet}}g=function(e,t,i,a){var n,l=arguments.length,s=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(l<3?n(s):l>3?n(t,i,s):n(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s}([(0,a.M1)("vl-properties-next")],g)},"../../libs/components/src/next/properties/vl-properties.defaults.ts":(e,t,i)=>{i.d(t,{g:()=>a});let a={labelWidth:25,props:[]}},"../../libs/components/src/next/title/index.ts":(e,t,i)=>{i.d(t,{I:()=>a.I});var a=i("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(e,t,i)=>{i.d(t,{I:()=>d});var a=i("../../libs/common/utilities/src/index.ts");i("../../node_modules/@lit/reactive-element/reactive-element.js");var n=i("../../node_modules/lit-html/lit-html.js");i("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l=(e,t,i)=>{for(var a of t)if(a[0]===e)return(0,a[1])();return null==i?void 0:i()},s=i("../../node_modules/lit/directives/class-map.js"),o=i("../../libs/components/src/next/title/vl-title.css.ts"),r=i("../../libs/components/src/next/title/vl-title.defaults.ts");class d extends a.jW{static get styles(){return[o.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let e={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,n.qy)`
            ${l(this.type,[["h1",()=>(0,n.qy)` <h1 class=${(0,s.H)(e)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,n.qy)` <h2 class=${(0,s.H)(e)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,n.qy)` <h3 class=${(0,s.H)(e)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,n.qy)` <h4 class=${(0,s.H)(e)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,n.qy)` <h5 class=${(0,s.H)(e)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,n.qy)` <h6 class=${(0,s.H)(e)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,n.qy)` <h1 class=${(0,s.H)(e)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...e){super(...e),this.type=r.D.type,this.underline=r.D.underline,this.noSpaceBottom=r.D.noSpaceBottom,this.alt=r.D.alt}}d=function(e,t,i,a){var n,l=arguments.length,s=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(l<3?n(s):l>3?n(t,i,s):n(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s}([(0,a.M1)("vl-title-next")],d)},"../../libs/components/src/next/title/vl-title.defaults.ts":(e,t,i)=>{i.d(t,{D:()=>a});let a={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}}}]);