"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6583],{"./docs/f_ontwerp/functional-header/1_demo-with-button/functional-header-with-button.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{FunctionalHeaderWithButton:()=>p,__namedExportsOrder:()=>f,default:()=>v});var o=n("../../resources/utils-storybook/index.ts"),s=n("../../libs/common/src/index.ts"),l=n("../../libs/styles/src/index.ts"),i=n("../../libs/components/src/block/index.ts"),r=n("../../libs/components/src/atom/index.ts"),a=n("../../node_modules/lit-html/lit-html.js"),d=n("../../node_modules/lit-html/directives/unsafe-html.js"),c=n("./docs/f_ontwerp/functional-header/functional-header.helpers.ts");n("../../node_modules/react/index.js");var u=n("../../node_modules/react/jsx-runtime.js"),h=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=n("../../node_modules/@storybook/blocks/dist/index.mjs");function b(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,h.RP)(),e.components);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.h1,{id:"functional-header---voorbeeld-met-button",children:"Functional Header - Voorbeeld Met Button"}),"\n",(0,u.jsxs)(t.p,{children:["In dit voorbeeld tonen we hoe een ",(0,u.jsx)(t.a,{href:"/docs/components-atom-button--documentatie",children:"vl-button"})," component kan toegevoegd worden aan de ",(0,u.jsx)(t.a,{href:"/docs/components-atom-functional-header--documentatie",children:"vl-functional-header"}),"."]}),"\n",(0,u.jsxs)(t.p,{children:["We gebruiken een ",(0,u.jsx)(t.a,{href:"/docs/components-atom-button--documentatie",children:"vl-button"})," component gecombineerd met de ",(0,u.jsx)(t.a,{href:"/docs/styles-layout-afnemers-group--documentatie",children:"vl-group"})," stijl om een actie knop rechts uit te lijnen naast een breadcrumb of andere variant."]}),"\n",(0,u.jsx)(t.p,{children:"In dit geval wordt custom CSS meegegeven om deze layout mogelijk te maken."}),"\n",(0,u.jsx)(t.h2,{id:"componenten",children:"Componenten"}),"\n",(0,u.jsxs)(t.ul,{children:["\n",(0,u.jsx)(t.li,{children:(0,u.jsx)(t.a,{href:"/docs/components-block-functional-header--documentatie",children:"vl-functional-header"})}),"\n",(0,u.jsx)(t.li,{children:(0,u.jsx)(t.a,{href:"/docs/components-atom-button--documentatie",children:"vl-button"})}),"\n"]}),"\n",(0,u.jsx)(t.h2,{id:"stijlen",children:"Stijlen"}),"\n",(0,u.jsxs)(t.ul,{children:["\n",(0,u.jsx)(t.li,{children:(0,u.jsx)(t.a,{href:"/docs/styles-layout-afnemers-group--documentatie",children:"vl-group"})}),"\n"]}),"\n",(0,u.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,u.jsx)(m.Hl,{of:p,sourceState:"none"}),"\n",(0,u.jsxs)("details",{open:!0,children:[(0,u.jsx)("summary",{children:"Code"}),(0,u.jsx)(m.kL,{code:c.wx,language:"ts",dark:!0})]})]})}(0,s.gy)([i.JG,i.UD,i.a7,r.Yk]);let v={title:"Ontwerp/Functional Header/Voorbeeld Met Button",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,h.RP)(),e.components);return t?(0,u.jsx)(t,Object.assign({},e,{children:(0,u.jsx)(b,e)})):b(e)}}}},p=(0,o._7)({},()=>(0,a.qy)` <style>
            ${l.yy}
        </style>
        ${(0,d._)(c.W_)}`);p.storyName="vl-functional-header - met button",p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"story({}, () => html` <style>\n            ${vlGroupStyles}\n        </style>\n        ${unsafeHTML(functionalHeaderWithButtonHtml)}`)",...p.parameters?.docs?.source}}};let f=["FunctionalHeaderWithButton"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,n)=>{n.d(t,{_:()=>i});var o=n("../../node_modules/lit-html/lit-html.js"),s=n("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends s.WL{constructor(e){if(super(e),this.et=o.s6,e.type!==s.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.s6||null==e)return this.vt=void 0,this.et=e;if(e===o.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var i=(0,s.u$)(l)},"./docs/f_ontwerp/functional-header/functional-header.helpers.ts":(e,t,n)=>{n.d(t,{Gu:()=>r,H0:()=>d,W_:()=>s,pt:()=>c,wx:()=>i,y_:()=>l});let o=(e,t=!1)=>`
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
`,s=o("<vl-button>Actie knop</vl-button>"),l=o('<vl-search id="search-inline" inline></vl-search>'),i=o("<vl-button>Actie knop</vl-button>",!0),r=o('<vl-search id="search-inline" inline></vl-search>',!0),a=(e=!1)=>` <vl-functional-header
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
    </vl-functional-header>`,d=a(),c=a(!0)}}]);