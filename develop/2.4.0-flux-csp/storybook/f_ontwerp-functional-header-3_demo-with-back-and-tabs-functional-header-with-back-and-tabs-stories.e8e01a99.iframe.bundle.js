"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4041],{"./docs/f_ontwerp/functional-header/3_demo-with-back-and-tabs/functional-header-with-back-and-tabs.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{FunctionalHeaderWithBackAndTabs:()=>m,__namedExportsOrder:()=>v,default:()=>b});var s=n("../../libs/common/src/index.ts"),o=n("../../libs/components/src/block/index.ts"),a=n("../../resources/utils-storybook/index.ts"),l=n("../../node_modules/lit-html/lit-html.js"),i=n("../../node_modules/lit-html/directives/unsafe-html.js"),r=n("./docs/f_ontwerp/functional-header/functional-header.helpers.ts");n("../../node_modules/react/index.js");var d=n("../../node_modules/react/jsx-runtime.js"),c=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=n("../../node_modules/@storybook/blocks/dist/index.mjs");function h(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,c.RP)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"functional-header---voorbeeld-met-back-en-tabs",children:"Functional Header - Voorbeeld Met Back En Tabs"}),"\n",(0,d.jsxs)(t.p,{children:["In dit voorbeeld tonen we hoe een ",(0,d.jsx)(t.a,{href:"/docs/components-block-tabs-tabs--documentatie",children:"vl-tabs"})," component kan toegevoegd worden aan de ",(0,d.jsx)(t.a,{href:"/docs/components-block-functional-header--documentatie",children:"vl-functional-header"})," in combinatie met de back button."]}),"\n",(0,d.jsx)(t.p,{children:"In dit geval wordt custom CSS meegegeven om deze layout mogelijk te maken."}),"\n",(0,d.jsx)(t.h2,{id:"componenten",children:"Componenten"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/components-block-functional-header--documentatie",children:"vl-functional-header"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/components-block-tabs-tabs--documentatie",children:"vl-tabs"})}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,d.jsx)(u.Hl,{of:m,sourceState:"none"}),"\n",(0,d.jsxs)("details",{open:!0,children:[(0,d.jsx)("summary",{children:"Code"}),(0,d.jsx)(u.kL,{code:r.pt,language:"ts",dark:!0})]})]})}(0,s.gy)([o.JG,o.UD,o.a7,o.gC]);let b={title:"Ontwerp/Functional Header/Voorbeeld Met Back En Tabs",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,c.RP)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(h,e)})):h(e)}}}},m=(0,a._7)({},()=>(0,l.qy)`${(0,i._)(r.H0)}`);m.storyName="vl-functional-header - met back en tabs",m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story({}, () => html`${unsafeHTML(functionalHeaderWithBackAndTabs)}`)",...m.parameters?.docs?.source}}};let v=["FunctionalHeaderWithBackAndTabs"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>l});var s=n("../../node_modules/lit-html/lit-html.js"),o=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends o.WL{constructor(e){if(super(e),this.et=s.s6,e.type!==o.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===s.s6||null==e)return this.vt=void 0,this.et=e;if(e===s.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;var l=(0,o.u$)(a)},"./docs/f_ontwerp/functional-header/functional-header.helpers.ts":(e,t,n)=>{n.d(t,{Gu:()=>i,H0:()=>d,W_:()=>o,pt:()=>c,wx:()=>l,y_:()=>a});let s=(e,t=!1)=>`
<vl-functional-header
    title="School- en studietoelagen"
    hide-back-link
    custom-css=".vl-functional-header__sub-actions, .vl-functional-header__sub__action { width: 100% } ::slotted(.vl-group) { width: 100% } ${t?"":":host .vl-content-block { min-width: 900px}"}"
>
    <div class="vl-group vl-group--space-between" slot="sub-title">
        <vl-breadcrumb slot="sub-title">
            <vl-breadcrumb-item href="#1">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#2">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item href="#3">Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item>Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
        ${e}
    </div>
</vl-functional-header>
`,o=s("<vl-button>Actie knop</vl-button>"),a=s('<vl-search id="search-inline" inline></vl-search>'),l=s("<vl-button>Actie knop</vl-button>",!0),i=s('<vl-search id="search-inline" inline></vl-search>',!0),r=(e=!1)=>` <vl-functional-header
        title="School- en studietoelagen"
        custom-css="
                #sub-title{ 
                    vertical-align: text-top;
                } 
                :host .vl-functional-header__sub-row { 
                    margin-bottom: 0; 
                }
                ${e?"":":host .vl-content-block { min-width: 900px}"}
            "
    >
        <vl-tabs
            slot="sub-title"
            disable-links
            within-functional-header
            active-tab="trein"
            custom-css="
                :host(.vl-tabs--within-functional-header) .vl-tab__link { 
                    padding-top: 0;
                }
            "
        >
            <vl-tabs-pane id="trein" title="Trein"></vl-tabs-pane>
            <vl-tabs-pane id="metro" title="Metro, tram en bus"></vl-tabs-pane>
            <vl-tabs-pane id="fiets" title="Fiets"></vl-tabs-pane>
        </vl-tabs>
    </vl-functional-header>`,d=r(),c=r(!0)}}]);