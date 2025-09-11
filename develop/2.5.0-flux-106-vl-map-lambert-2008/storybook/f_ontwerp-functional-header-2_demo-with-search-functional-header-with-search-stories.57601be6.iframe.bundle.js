"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1366],{"./docs/f_ontwerp/functional-header/2_demo-with-search/functional-header-with-search.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{FunctionalHeaderWithSearch:()=>v,__namedExportsOrder:()=>p,default:()=>b});var s=n("../../resources/utils-storybook/index.ts"),r=n("../../libs/common/src/index.ts"),l=n("../../libs/styles/src/index.ts"),o=n("../../libs/components/src/block/index.ts"),i=n("../../node_modules/lit-html/lit-html.js"),a=n("../../node_modules/lit-html/directives/unsafe-html.js"),c=n("./docs/f_ontwerp/functional-header/functional-header.helpers.ts");n("../../node_modules/react/index.js");var d=n("../../node_modules/react/jsx-runtime.js"),h=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=n("../../node_modules/@storybook/blocks/dist/index.mjs");function m(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,h.RP)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"functional-header---voorbeeld-met-search",children:"Functional Header - Voorbeeld Met Search"}),"\n",(0,d.jsxs)(t.p,{children:["In dit voorbeeld tonen we hoe een ",(0,d.jsx)(t.a,{href:"/docs/components-block-search--documentatie",children:"vl-search"})," component kan toegevoegd worden aan de ",(0,d.jsx)(t.a,{href:"/docs/components-block-functional-header--documentatie",children:"vl-functional-header"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:["We gebruiken een ",(0,d.jsx)(t.a,{href:"/docs/components-block-search--documentatie",children:"vl-search"})," component gecombineerd met de ",(0,d.jsx)(t.a,{href:"/docs/styles-layout-afnemers-group--documentatie",children:"vl-group"})," stijl om een zoekveld rechts uit te lijnen naast een breadcrumb of andere variant."]}),"\n",(0,d.jsx)(t.p,{children:"In dit geval wordt custom CSS meegegeven om deze layout mogelijk te maken."}),"\n",(0,d.jsx)(t.h2,{id:"componenten",children:"Componenten"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/components-block-functional-header--documentatie",children:"vl-functional-header"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/components-block-search--documentatie",children:"vl-search"})}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"stijlen",children:"Stijlen"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/styles-layout-afnemers-group--documentatie",children:"vl-group"})}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,d.jsx)(u.Hl,{of:v,sourceState:"none"}),"\n",(0,d.jsxs)("details",{open:!0,children:[(0,d.jsx)("summary",{children:"Code"}),(0,d.jsx)(u.kL,{code:c.Gu,language:"ts",dark:!0})]})]})}(0,r.gy)([o.JG,o.UD,o.a7,o.gC]);let b={title:"Ontwerp/Functional Header/Voorbeeld Met Search",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,h.RP)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(m,e)})):m(e)}}}},v=(0,s._7)({},()=>(0,i.qy)` <style>
            ${l.yy}
        </style>
        ${(0,a._)(c.y_)}`);v.storyName="vl-functional-header - met search",v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"story({}, () => html` <style>\n            ${vlGroupStyles}\n        </style>\n        ${unsafeHTML(functionalHeaderWithSearchHtml)}`)",...v.parameters?.docs?.source}}};let p=["FunctionalHeaderWithSearch"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>o});var s=n("../../node_modules/lit-html/lit-html.js"),r=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends r.WL{constructor(e){if(super(e),this.et=s.s6,e.type!==r.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===s.s6||null==e)return this.vt=void 0,this.et=e;if(e===s.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var o=(0,r.u$)(l)},"./docs/f_ontwerp/functional-header/functional-header.helpers.ts":(e,t,n)=>{n.d(t,{Gu:()=>i,H0:()=>c,W_:()=>r,pt:()=>d,wx:()=>o,y_:()=>l});let s=(e,t=!1)=>`
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
`,r=s("<vl-button>Actie knop</vl-button>"),l=s('<vl-search id="search-inline" inline></vl-search>'),o=s("<vl-button>Actie knop</vl-button>",!0),i=s('<vl-search id="search-inline" inline></vl-search>',!0),a=(e=!1)=>` <vl-functional-header
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
    </vl-functional-header>`,c=a(),d=a(!0)}}]);