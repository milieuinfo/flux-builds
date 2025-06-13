"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4474],{"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,s)=>{s.d(n,{Hl:()=>d.Hl,W8:()=>d.W8,kL:()=>d.kL,ov:()=>d.ov}),s("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var d=s("../../node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/common/utilities/src/css/base/heading/stories/vl-heading.stories.ts":(e,n,s)=>{s.r(n),s.d(n,{HeadingDefault:()=>h,__namedExportsOrder:()=>m,default:()=>g});var d=s("../../libs/common/storybook/src/index.ts"),i=s("../../node_modules/lit-html/lit-html.js"),o=s("../../libs/common/utilities/src/css/base/heading/vl-heading.css.ts");s("../../node_modules/react/index.js");var a=s("../../node_modules/react/jsx-runtime.js"),t=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),r=s("../../node_modules/@storybook/blocks/dist/index.mjs"),l=s("../../node_modules/@storybook/addon-docs/dist/index.mjs");function c(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",code:"code",pre:"pre"},(0,t.RP)(),e.components),{VluxMetaData:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.W8,{title:"Styles-next/Base (intern)/heading"}),"\n",(0,a.jsx)(n.h1,{id:"heading---next",children:"Heading - next"}),"\n",(0,a.jsx)(s,{id:"styles-next-base-intern-heading"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#doel",children:"Doel"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#implementatie",children:"Implementatie"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#voorbeelden",children:"Voorbeelden"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"doel",children:"Doel"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Heading"})," voorziet styling voor de 6 h-waardes. Deze wordt o.a. gebruikt in ",(0,a.jsx)(n.code,{children:"<vl-doormat>"})," en ",(0,a.jsx)(n.code,{children:"<vl-title>"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"implementatie",children:"Implementatie"}),"\n",(0,a.jsx)(n.p,{children:"Per h-waarde is er een constante voorzien met de desbetreffende styling. Het doel is deze implementatie te embedden\nin de css van concrete componenten. Het is een bouwblok, niet bedoeld voor rechtstreeks gebruik!"}),"\n",(0,a.jsxs)(n.p,{children:["Hieronder zie je (zonder details) hoe ",(0,a.jsx)(n.code,{children:"vlHeading2"})," geïmplementeerd is."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export const vlHeading2 = css`\n    ${headingBase};\n\n    font-size: 3.2rem;\n    margin-bottom: 2rem;\n    line-height: 1.24;\n\n    @media screen and (max-width: ${vlMediaScreenSmall}px) {\n        font-size: 2.6rem;\n        margin-bottom: 1.5rem;\n    }\n`;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),"\n",(0,a.jsx)(n.p,{children:"In dit voorbeeld zie je de verschillende headings, ze worden hier specifiek ge-wrapped in een custom style-class."}),"\n",(0,a.jsx)(r.Hl,{of:h})]})}let g={id:"styles-next-base-intern-heading",title:"Styles-next/Base (intern)/heading",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,t.RP)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}},h=({})=>(0,i.qy)`
    <style>
        .sb-heading-1 {
            ${o.Cv}
        }

        .sb-heading-2 {
            ${o.J9}
        }

        .sb-heading-3 {
            ${o.QL}
        }

        .sb-heading-4 {
            ${o.JU}
        }

        .sb-heading-5 {
            ${o.Qw}
        }

        .sb-heading-6 {
            ${o.Jd}
        }
    </style>
    <div class="sb-heading-1">Heading van grootte 1</div>
    <div class="sb-heading-2">Heading van grootte 2</div>
    <div class="sb-heading-3">Heading van grootte 3</div>
    <div class="sb-heading-4">Heading van grootte 4</div>
    <div class="sb-heading-5">Heading van grootte 5</div>
    <div class="sb-heading-6">Heading van grootte 6</div>
`;h.storyName="heading - default",h.parameters=d.Dw,h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        .sb-heading-1 {\n            ${vlHeading1}\n        }\n\n        .sb-heading-2 {\n            ${vlHeading2}\n        }\n\n        .sb-heading-3 {\n            ${vlHeading3}\n        }\n\n        .sb-heading-4 {\n            ${vlHeading4}\n        }\n\n        .sb-heading-5 {\n            ${vlHeading5}\n        }\n\n        .sb-heading-6 {\n            ${vlHeading6}\n        }\n    </style>\n    <div class="sb-heading-1">Heading van grootte 1</div>\n    <div class="sb-heading-2">Heading van grootte 2</div>\n    <div class="sb-heading-3">Heading van grootte 3</div>\n    <div class="sb-heading-4">Heading van grootte 4</div>\n    <div class="sb-heading-5">Heading van grootte 5</div>\n    <div class="sb-heading-6">Heading van grootte 6</div>\n`',...h.parameters?.docs?.source}}};let m=["HeadingDefault"]}}]);