"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5811],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,t)=>{t.d(n,{f:()=>p});var s=t("../../node_modules/react/index.js"),o=t("../../node_modules/react-dom/client.js"),l=new Map,c=({callback:e,children:n})=>{let t=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{t.current!==e&&(t.current=e,e())},[e]),n},i=async(e,n)=>{let t=await d(n);return new Promise(n=>{t.render(s.createElement(c,{callback:()=>n(null)},e))})},r=(e,n)=>{let t=l.get(e);t&&(t.unmount(),l.delete(e))},d=async e=>{let n=l.get(e);return n||(n=o.createRoot(e),l.set(e,n)),n},a=t("../../node_modules/@storybook/blocks/dist/index.mjs"),x={code:a.XA,a:a.zE,...a.Sw},v=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:s.createElement(s.Fragment,null,n)}},p=class{constructor(){this.render=async(e,n,o)=>{let l={...x,...n?.components},c=a.kQ;return new Promise((r,d)=>{t.e(814).then(t.bind(t,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>i(s.createElement(v,{showException:d,key:Math.random()},s.createElement(t,{components:l},s.createElement(c,{context:e,docsParameter:n}))),o)).then(()=>r())})},this.unmount=e=>{r(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,t)=>{t.d(n,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),t("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=t("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/common/utilities/src/css/layout/section/stories/vl-section.stories.ts":(e,n,t)=>{t.r(n),t.d(n,{SectionCentered:()=>g,SectionDefault:()=>u,SectionLightBlue:()=>m,SectionOverlap:()=>h,__namedExportsOrder:()=>j,default:()=>p});var s=t("../../libs/common/storybook/src/index.ts"),o=t("../../node_modules/lit/index.js"),l=t("../../node_modules/lit-html/lit-html.js");t("../../node_modules/react/index.js");var c=t("../../node_modules/react/jsx-runtime.js"),i=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),r=t("../../node_modules/@storybook/blocks/dist/index.mjs"),d=t("../../node_modules/@storybook/addon-docs/dist/index.mjs");let a=t.p+"static/media/section-overlap.a53997aa.png",x=t.p+"static/media/section-centered.bcd4cfc7.png";function v(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3"},(0,i.RP)(),e.components),{VluxMetaData:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.W8,{title:"Styles-next/Layout (afnemers)/section"}),"\n",(0,c.jsx)(n.h1,{id:"section---next",children:"Section - next"}),"\n",(0,c.jsx)(t,{id:"styles-next-layout-afnemers-section"}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#doel",children:"Doel"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#gebruik",children:"Gebruik"})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"doel",children:"Doel"}),"\n",(0,c.jsxs)(n.p,{children:["De ",(0,c.jsx)(n.code,{children:"vl-section-next"})," verdeeld de toepassing in delen en zorgt voor consistente witruimte."]}),"\n",(0,c.jsx)(n.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,c.jsx)(n.h3,{id:"default-secties",children:"Default Secties"}),"\n",(0,c.jsxs)(n.p,{children:["Er is de standaard ",(0,c.jsx)(n.code,{children:"vl-section-next"})," en de ",(0,c.jsx)(n.code,{children:"vl-section-next--alt"})," waarbij de laatste een lichtgrijze achtergrond\nkrijgt krijgt. Om minder (dan de standaard) witruimte te krijgen zijn er de optionele classes ",(0,c.jsx)(n.code,{children:"vl-section-next--small"}),"\nen ",(0,c.jsx)(n.code,{children:"vl-section-next--medium"}),". Scheidingslijnen worden verkregen door ",(0,c.jsx)(n.code,{children:"vl-section-next--bordered"})," te gebruiken."]}),"\n",(0,c.jsx)(n.p,{children:"In onderstaand voorbeeld wordt dit alles toegepast, als ook kleur variabelen overschreven (om de kleuren prominenter\nte maken)."}),"\n",(0,c.jsx)(r.Hl,{of:m}),"\n",(0,c.jsx)(n.h3,{id:"overlappende-sectie",children:"Overlappende Sectie"}),"\n",(0,c.jsx)(n.p,{children:"Voor specifieke gevallen kan er een overlappende sectie voorzien worden."}),"\n",(0,c.jsx)("img",{src:a,alt:"section overlap",style:{border:"lightgray 1px solid"}}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"section overlap - code"}),(0,c.jsx)(r.kL,{code:h.toString(),language:"html",dark:!0,format:!0})]}),"\n",(0,c.jsx)(n.h3,{id:"sectie-met-gecentreerde-inhoud",children:"Sectie met Gecentreerde Inhoud"}),"\n",(0,c.jsxs)(n.p,{children:["Wat bij Digitaal Vlaanderen als ",(0,c.jsx)(n.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/grid",target:"_blank",rel:"nofollow noopener noreferrer",children:"Layout"})," styling\nvoorzien wordt, is bij ons - BEM gewijs - ",(0,c.jsx)(n.code,{children:"vl-section-next__centered"}),"."]}),"\n",(0,c.jsx)("img",{src:x,alt:"section centered",style:{border:"lightgray 1px solid"}}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"section centered - code"}),(0,c.jsx)(r.kL,{code:g.toString(),language:"html",dark:!0,format:!0})]})]})}let p={id:"styles-next-layout-afnemers-section",title:"Styles-next/Layout (afnemers)/section",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,i.RP)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(v,e)})):v(e)}}}},b=(0,o.AH)`
    .vl-section-next {
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
`;u.storyName="vl-section - default",u.parameters=s.Dw;let m=({})=>(0,l.qy)`
    <style>
        ${b}

        .sb-light-blue {
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
`;m.storyName="vl-section - light blue",m.parameters=s.Dw;let h=({})=>(0,l.qy)`
    <style>
        ${b}

        .sb-overlap {
            &.vl-section-next {
                --vl-section--alt-bg: lightblue;
                --vl-section--border: lightblue;
            }
        }
    </style>
    <section class="sb-overlap vl-section-next vl-section-next--overlap">
        <p class="vl-section-next__centered">vl-section-next__centered</p>
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
`;h.storyName="vl-section - overlap",h.parameters=s.Dw;let g=({})=>(0,l.qy)`
    <style>
        ${b}

        .sb-centered {
            &.vl-section-next {
                background-color: lightblue;
            }

            .vl-section-next__centered {
                background-color: lightseagreen;
                height: 100px;
            }
        }
    </style>
    <section class="sb-centered vl-section-next">
        <p class="vl-section-next__centered">vl-section-next__centered</p>
        <p>vl-section-next</p>
    </section>
`;g.storyName="vl-section - centered",g.parameters=s.Dw,u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss}\n    </style>\n    <section class="vl-section-next vl-section-next--alt">\n        <p>vl-section-next vl-section-next--alt</p>\n    </section>\n    <section class="vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n    <section class="vl-section-next vl-section-next--bordered vl-section-next--small">\n        <p>vl-section-next vl-section-next--bordered vl-section-next--small</p>\n    </section>\n    <section class="vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n`',...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss}\n\n        .sb-light-blue {\n            &.vl-section-next {\n                --vl-section--alt-bg: lightblue;\n                --vl-section--border: lightblue;\n            }\n        }\n    </style>\n    <section class="sb-light-blue vl-section-next vl-section-next--alt">\n        <p>vl-section-next vl-section-next--alt</p>\n    </section>\n    <section class="sb-light-blue vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n    <section class="sb-light-blue vl-section-next vl-section-next--bordered vl-section-next--small">\n        <p>vl-section-next vl-section-next--bordered vl-section-next--small</p>\n    </section>\n    <section class="sb-light-blue vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n`',...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss}\n\n        .sb-overlap {\n            &.vl-section-next {\n                --vl-section--alt-bg: lightblue;\n                --vl-section--border: lightblue;\n            }\n        }\n    </style>\n    <section class="sb-overlap vl-section-next vl-section-next--overlap">\n        <p class="vl-section-next__centered">vl-section-next__centered</p>\n        <p>vl-section-next vl-section-next--overlap</p>\n    </section>\n    <section class="sb-overlap vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n    <section class="sb-overlap vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n    <section class="sb-overlap vl-section-next vl-section-next--bordered">\n        <p>vl-section-next vl-section-next--bordered</p>\n    </section>\n`',...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${sectionCss}\n\n        .sb-centered {\n            &.vl-section-next {\n                background-color: lightblue;\n            }\n\n            .vl-section-next__centered {\n                background-color: lightseagreen;\n                height: 100px;\n            }\n        }\n    </style>\n    <section class="sb-centered vl-section-next">\n        <p class="vl-section-next__centered">vl-section-next__centered</p>\n        <p>vl-section-next</p>\n    </section>\n`',...g.parameters?.docs?.source}}};let j=["SectionDefault","SectionLightBlue","SectionOverlap","SectionCentered"]},"../../node_modules/react-dom/client.js":(e,n,t)=>{var s=t("../../node_modules/react-dom/index.js");n.createRoot=s.createRoot,n.hydrateRoot=s.hydrateRoot}}]);