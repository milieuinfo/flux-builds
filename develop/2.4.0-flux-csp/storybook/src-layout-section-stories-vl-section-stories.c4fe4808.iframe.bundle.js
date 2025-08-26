"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1061],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,s,o)=>{o.d(s,{f:()=>b});var t=o("../../node_modules/react/index.js"),n=o("../../node_modules/react-dom/client.js"),l=new Map,i=({callback:e,children:s})=>{let o=(0,t.useRef)();return(0,t.useLayoutEffect)(()=>{o.current!==e&&(o.current=e,e())},[e]),s},c=async(e,s)=>{let o=await d(s);return new Promise(s=>{o.render(t.createElement(i,{callback:()=>s(null)},e))})},r=(e,s)=>{let o=l.get(e);o&&(o.unmount(),l.delete(e))},d=async e=>{let s=l.get(e);return s||(s=n.createRoot(e),l.set(e,s)),s},a=o("../../node_modules/@storybook/blocks/dist/index.mjs"),v={code:a.XA,a:a.zE,...a.Sw},p=class extends t.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:s}=this.props;s(e)}render(){let{hasError:e}=this.state,{children:s}=this.props;return e?null:t.createElement(t.Fragment,null,s)}},b=class{constructor(){this.render=async(e,s,n)=>{let l={...v,...s?.components},i=a.kQ;return new Promise((r,d)=>{o.e(814).then(o.bind(o,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>c(t.createElement(p,{showException:d,key:Math.random()},t.createElement(o,{components:l},t.createElement(i,{context:e,docsParameter:s}))),n)).then(()=>r())})},this.unmount=e=>{r(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,s,o)=>{o.d(s,{Hl:()=>t.Hl,W8:()=>t.W8,kL:()=>t.kL,ov:()=>t.ov}),o("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var t=o("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/styles/src/layout/section/stories/vl-section.stories.ts":(e,s,o)=>{o.r(s),o.d(s,{SectionDefault:()=>u,SectionLightBlue:()=>m,SectionOverlap:()=>h,__namedExportsOrder:()=>j,default:()=>p});var t=o("../../resources/utils-storybook/index.ts"),n=o("../../node_modules/lit/index.js"),l=o("../../node_modules/lit-html/lit-html.js");o("../../node_modules/react/index.js");var i=o("../../node_modules/react/jsx-runtime.js"),c=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),r=o("../../node_modules/@storybook/blocks/dist/index.mjs"),d=o("../../node_modules/@storybook/addon-docs/dist/index.mjs");let a=o.p+"static/media/section-overlap.878e81da.png";function v(e){let s=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3"},(0,c.RP)(),e.components),{FluxMetaData:o}=s;return o||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.W8,{title:"Styles/Layout (afnemers)/section"}),"\n",(0,i.jsx)(s.h1,{id:"section",children:"Section"}),"\n",(0,i.jsx)(o,{id:"styles-layout-afnemers-section"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#doel",children:"Doel"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#gebruik",children:"Gebruik"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"doel",children:"Doel"}),"\n",(0,i.jsxs)(s.p,{children:["De ",(0,i.jsx)(s.code,{children:"vl-section"})," verdeeld de toepassing in delen en zorgt voor consistente witruimte."]}),"\n",(0,i.jsx)(s.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,i.jsx)(s.h3,{id:"default-secties",children:"Default Secties"}),"\n",(0,i.jsxs)(s.p,{children:["Er is de standaard ",(0,i.jsx)(s.code,{children:"vl-section"})," en de ",(0,i.jsx)(s.code,{children:"vl-section--alt"})," waarbij de laatste een lichtgrijze achtergrond\nkrijgt krijgt. Om minder (dan de standaard) witruimte te krijgen zijn er de optionele classes ",(0,i.jsx)(s.code,{children:"vl-section--small"}),"\nen ",(0,i.jsx)(s.code,{children:"vl-section--medium"}),". Scheidingslijnen worden verkregen door ",(0,i.jsx)(s.code,{children:"vl-section--bordered"})," te gebruiken."]}),"\n",(0,i.jsx)(s.p,{children:"In onderstaand voorbeeld wordt dit alles toegepast, als ook kleur variabelen overschreven (om de kleuren prominenter\nte maken)."}),"\n",(0,i.jsx)(r.Hl,{of:m}),"\n",(0,i.jsx)(s.h3,{id:"overlappende-sectie",children:"Overlappende Sectie"}),"\n",(0,i.jsx)(s.p,{children:"Voor specifieke gevallen kan er een overlappende sectie voorzien worden."}),"\n",(0,i.jsx)("img",{src:a,alt:"section overlap",style:{border:"lightgray 1px solid"}}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"section overlap - code"}),(0,i.jsx)(r.kL,{code:h.toString(),language:"html",dark:!0,format:!0})]})]})}let p={id:"styles-layout-afnemers-section",title:"Styles/Layout (afnemers)/section",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:s}=Object.assign({},(0,c.RP)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(v,e)})):v(e)}}}},b=(0,n.AH)`
    .vl-section {
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
        }
    }
`,u=({})=>(0,l.qy)`
    <style>
        ${b}
    </style>
    <section class="vl-section vl-section--alt">
        <p>vl-section vl-section--alt</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="vl-section vl-section--bordered vl-section--small">
        <p>vl-section vl-section--bordered vl-section--small</p>
    </section>
    <section class="vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
`;u.storyName="vl-section - default",u.parameters=t.Dw;let m=({})=>(0,l.qy)`
    <style>
        ${b} .sb-light-blue {
            &.vl-section {
                --vl-section--alt-bg: lightblue;
                --vl-section--border: lightblue;
            }
        }
    </style>
    <section class="sb-light-blue vl-section vl-section--alt">
        <p>vl-section vl-section--alt</p>
    </section>
    <section class="sb-light-blue vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="sb-light-blue vl-section vl-section--bordered vl-section--small">
        <p>vl-section vl-section--bordered vl-section--small</p>
    </section>
    <section class="sb-light-blue vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
`;m.storyName="vl-section - light blue",m.parameters=t.Dw;let h=({})=>(0,l.qy)`
    <style>
        ${b} .sb-overlap {
            &.vl-section {
                --vl-section--alt-bg: lightblue;
                --vl-section--border: lightblue;
            }
        }
    </style>
    <section class="sb-overlap vl-section vl-section--overlap">
        <p class="vl-content-block">vl-content-block</p>
        <p>vl-section vl-section--overlap</p>
    </section>
    <section class="sb-overlap vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="sb-overlap vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
    <section class="sb-overlap vl-section vl-section--bordered">
        <p>vl-section vl-section--bordered</p>
    </section>
`;h.storyName="vl-section - overlap",h.parameters=t.Dw,u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss}\n    </style>\n    <section class="vl-section vl-section--alt">\n        <p>vl-section vl-section--alt</p>\n    </section>\n    <section class="vl-section vl-section--bordered">\n        <p>vl-section vl-section--bordered</p>\n    </section>\n    <section class="vl-section vl-section--bordered vl-section--small">\n        <p>vl-section vl-section--bordered vl-section--small</p>\n    </section>\n    <section class="vl-section vl-section--bordered">\n        <p>vl-section vl-section--bordered</p>\n    </section>\n`',...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss} .sb-light-blue {\n            &.vl-section {\n                --vl-section--alt-bg: lightblue;\n                --vl-section--border: lightblue;\n            }\n        }\n    </style>\n    <section class="sb-light-blue vl-section vl-section--alt">\n        <p>vl-section vl-section--alt</p>\n    </section>\n    <section class="sb-light-blue vl-section vl-section--bordered">\n        <p>vl-section vl-section--bordered</p>\n    </section>\n    <section class="sb-light-blue vl-section vl-section--bordered vl-section--small">\n        <p>vl-section vl-section--bordered vl-section--small</p>\n    </section>\n    <section class="sb-light-blue vl-section vl-section--bordered">\n        <p>vl-section vl-section--bordered</p>\n    </section>\n`',...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss} .sb-overlap {\n            &.vl-section {\n                --vl-section--alt-bg: lightblue;\n                --vl-section--border: lightblue;\n            }\n        }\n    </style>\n    <section class="sb-overlap vl-section vl-section--overlap">\n        <p class="vl-content-block">vl-content-block</p>\n        <p>vl-section vl-section--overlap</p>\n    </section>\n    <section class="sb-overlap vl-section vl-section--bordered">\n        <p>vl-section vl-section--bordered</p>\n    </section>\n    <section class="sb-overlap vl-section vl-section--bordered">\n        <p>vl-section vl-section--bordered</p>\n    </section>\n    <section class="sb-overlap vl-section vl-section--bordered">\n        <p>vl-section vl-section--bordered</p>\n    </section>\n`',...h.parameters?.docs?.source}}};let j=["SectionDefault","SectionLightBlue","SectionOverlap"]},"../../node_modules/react-dom/client.js":(e,s,o)=>{var t=o("../../node_modules/react-dom/index.js");s.createRoot=t.createRoot,s.hydrateRoot=t.hydrateRoot}}]);