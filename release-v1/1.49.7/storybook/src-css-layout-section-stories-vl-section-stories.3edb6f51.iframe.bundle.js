"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5811],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,n)=>{n.d(t,{f:()=>p});var s=n("../../node_modules/react/index.js"),o=n("../../node_modules/react-dom/client.js"),l=new Map,i=({callback:e,children:t})=>{let n=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{n.current!==e&&(n.current=e,e())},[e]),t},c=async(e,t)=>{let n=await d(t);return new Promise(t=>{n.render(s.createElement(i,{callback:()=>t(null)},e))})},r=(e,t)=>{let n=l.get(e);n&&(n.unmount(),l.delete(e))},d=async e=>{let t=l.get(e);return t||(t=o.createRoot(e),l.set(e,t)),t},a=n("../../node_modules/@storybook/blocks/dist/index.mjs"),x={code:a.XA,a:a.zE,...a.Sw},v=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:s.createElement(s.Fragment,null,t)}},p=class{constructor(){this.render=async(e,t,o)=>{let l={...x,...t?.components},i=a.kQ;return new Promise((r,d)=>{n.e(814).then(n.bind(n,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:n})=>c(s.createElement(v,{showException:d,key:Math.random()},s.createElement(n,{components:l},s.createElement(i,{context:e,docsParameter:t}))),o)).then(()=>r())})},this.unmount=e=>{r(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,n)=>{n.d(t,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),n("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=n("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/common/utilities/src/css/layout/section/stories/vl-section.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{SectionDefault:()=>b,SectionLightBlue:()=>u,SectionOverlap:()=>m,__namedExportsOrder:()=>h,default:()=>v});var s=n("../../libs/common/storybook/src/index.ts"),o=n("../../node_modules/lit/index.js"),l=n("../../node_modules/lit-html/lit-html.js");n("../../node_modules/react/index.js");var i=n("../../node_modules/react/jsx-runtime.js"),c=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),r=n("../../node_modules/@storybook/blocks/dist/index.mjs"),d=n("../../node_modules/@storybook/addon-docs/dist/index.mjs");let a=n.p+"static/media/section-overlap.f3eb1e43.png";function x(e){let t=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3"},(0,c.RP)(),e.components),{VluxMetaData:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.W8,{title:"Styles-next/Layout (afnemers)/section"}),"\n",(0,i.jsx)(t.h1,{id:"section---next",children:"Section - next"}),"\n",(0,i.jsx)(n,{id:"styles-next-layout-afnemers-section"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#doel",children:"Doel"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#gebruik",children:"Gebruik"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"doel",children:"Doel"}),"\n",(0,i.jsxs)(t.p,{children:["De ",(0,i.jsx)(t.code,{children:"vl-section-next"})," verdeeld de toepassing in delen en zorgt voor consistente witruimte."]}),"\n",(0,i.jsx)(t.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,i.jsx)(t.h3,{id:"default-secties",children:"Default Secties"}),"\n",(0,i.jsxs)(t.p,{children:["Er is de standaard ",(0,i.jsx)(t.code,{children:"vl-section-next"})," en de ",(0,i.jsx)(t.code,{children:"vl-section-next--alt"})," waarbij de laatste een lichtgrijze achtergrond\nkrijgt krijgt. Om minder (dan de standaard) witruimte te krijgen zijn er de optionele classes ",(0,i.jsx)(t.code,{children:"vl-section-next--small"}),"\nen ",(0,i.jsx)(t.code,{children:"vl-section-next--medium"}),". Scheidingslijnen worden verkregen door ",(0,i.jsx)(t.code,{children:"vl-section-next--bordered"})," te gebruiken."]}),"\n",(0,i.jsx)(t.p,{children:"In onderstaand voorbeeld wordt dit alles toegepast, als ook kleur variabelen overschreven (om de kleuren prominenter\nte maken)."}),"\n",(0,i.jsx)(r.Hl,{of:u}),"\n",(0,i.jsx)(t.h3,{id:"overlappende-sectie",children:"Overlappende Sectie"}),"\n",(0,i.jsx)(t.p,{children:"Voor specifieke gevallen kan er een overlappende sectie voorzien worden."}),"\n",(0,i.jsx)("img",{src:a,alt:"section overlap",style:{border:"lightgray 1px solid"}}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"section overlap - code"}),(0,i.jsx)(r.kL,{code:m.toString(),language:"html",dark:!0,format:!0})]})]})}let v={id:"styles-next-layout-afnemers-section",title:"Styles-next/Layout (afnemers)/section",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,c.RP)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(x,e)})):x(e)}}}},p=(0,o.AH)`
    .vl-section-next {
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
        }
    }
`,b=({})=>(0,l.qy)`
    <style>
        ${p}
    </style>
    <section class="vl-section-next vl-section-next--alt">
        <p>vl-section-next vl-section-next--alt</p>
    </section>
    <section class="vl-section-next vl-section-next--bordered">
        <p>vl-section-next vl-section-next--bordered</p>
    </section>
    <section class="vl-section-next vl-section-next--bordered vl-section-next--small">
        <p>vl-section-next vl-section-next--bordered vl-section-next--small</p>
    </section>
    <section class="vl-section-next vl-section-next--bordered">
        <p>vl-section-next vl-section-next--bordered</p>
    </section>
`;b.storyName="vl-section - default",b.parameters=s.Dw;let u=({})=>(0,l.qy)`
    <style>
        ${p} .sb-light-blue {
            &.vl-section-next {
                --vl-section--alt-bg: lightblue;
                --vl-section--border: lightblue;
            }
        }
    </style>
    <section class="sb-light-blue vl-section-next vl-section-next--alt">
        <p>vl-section-next vl-section-next--alt</p>
    </section>
    <section class="sb-light-blue vl-section-next vl-section-next--bordered">
        <p>vl-section-next vl-section-next--bordered</p>
    </section>
    <section class="sb-light-blue vl-section-next vl-section-next--bordered vl-section-next--small">
        <p>vl-section-next vl-section-next--bordered vl-section-next--small</p>
    </section>
    <section class="sb-light-blue vl-section-next vl-section-next--bordered">
        <p>vl-section-next vl-section-next--bordered</p>
    </section>
`;u.storyName="vl-section - light blue",u.parameters=s.Dw;let m=({})=>(0,l.qy)`
    <style>
        ${p} .sb-overlap {
            &.vl-section-next {
                --vl-section--alt-bg: lightblue;
                --vl-section--border: lightblue;
            }
        }
    </style>
    <section class="sb-overlap vl-section-next vl-section-next--overlap">
        <p class="vl-content-block-next">vl-content-block-next</p>
        <p>vl-section-next vl-section-next--overlap</p>
    </section>
    <section class="sb-overlap vl-section-next vl-section-next--bordered">
        <p>vl-section-next vl-section-next--bordered</p>
    </section>
    <section class="sb-overlap vl-section-next vl-section-next--bordered">
        <p>vl-section-next vl-section-next--bordered</p>
    </section>
    <section class="sb-overlap vl-section-next vl-section-next--bordered">
        <p>vl-section-next vl-section-next--bordered</p>
    </section>
`;m.storyName="vl-section - overlap",m.parameters=s.Dw,b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss}\n    </style>\n    <section class="vl-section-next vl-section-next--alt">\n        <p>vl-section-next vl-section-next--alt</p>\n    </section>\n    <section class="vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n    <section class="vl-section-next vl-section-next--bordered vl-section-next--small">\n        <p>vl-section-next vl-section-next--bordered vl-section-next--small</p>\n    </section>\n    <section class="vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n`',...b.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss} .sb-light-blue {\n            &.vl-section-next {\n                --vl-section--alt-bg: lightblue;\n                --vl-section--border: lightblue;\n            }\n        }\n    </style>\n    <section class="sb-light-blue vl-section-next vl-section-next--alt">\n        <p>vl-section-next vl-section-next--alt</p>\n    </section>\n    <section class="sb-light-blue vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n    <section class="sb-light-blue vl-section-next vl-section-next--bordered vl-section-next--small">\n        <p>vl-section-next vl-section-next--bordered vl-section-next--small</p>\n    </section>\n    <section class="sb-light-blue vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n`',...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss} .sb-overlap {\n            &.vl-section-next {\n                --vl-section--alt-bg: lightblue;\n                --vl-section--border: lightblue;\n            }\n        }\n    </style>\n    <section class="sb-overlap vl-section-next vl-section-next--overlap">\n        <p class="vl-content-block-next">vl-content-block-next</p>\n        <p>vl-section-next vl-section-next--overlap</p>\n    </section>\n    <section class="sb-overlap vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n    <section class="sb-overlap vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n    <section class="sb-overlap vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n`',...m.parameters?.docs?.source}}};let h=["SectionDefault","SectionLightBlue","SectionOverlap"]},"../../node_modules/react-dom/client.js":(e,t,n)=>{var s=n("../../node_modules/react-dom/index.js");t.createRoot=s.createRoot,t.hydrateRoot=s.hydrateRoot}}]);