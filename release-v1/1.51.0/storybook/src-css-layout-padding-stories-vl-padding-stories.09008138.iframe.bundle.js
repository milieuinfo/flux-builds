"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[331],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,d)=>{d.d(n,{f:()=>g});var s=d("../../node_modules/react/index.js"),t=d("../../node_modules/react-dom/client.js"),o=new Map,a=({callback:e,children:n})=>{let d=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{d.current!==e&&(d.current=e,e())},[e]),n},r=async(e,n)=>{let d=await l(n);return new Promise(n=>{d.render(s.createElement(a,{callback:()=>n(null)},e))})},i=(e,n)=>{let d=o.get(e);d&&(d.unmount(),o.delete(e))},l=async e=>{let n=o.get(e);return n||(n=t.createRoot(e),o.set(e,n)),n},c=d("../../node_modules/@storybook/blocks/dist/index.mjs"),p={code:c.XA,a:c.zE,...c.Sw},m=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:s.createElement(s.Fragment,null,n)}},g=class{constructor(){this.render=async(e,n,t)=>{let o={...p,...n?.components},a=c.kQ;return new Promise((i,l)=>{d.e(814).then(d.bind(d,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:d})=>r(s.createElement(m,{showException:l,key:Math.random()},s.createElement(d,{components:o},s.createElement(a,{context:e,docsParameter:n}))),t)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,d)=>{d.d(n,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),d("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=d("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/common/utilities/src/css/layout/padding/stories/vl-padding.stories.ts":(e,n,d)=>{d.r(n),d.d(n,{PaddingDefault:()=>v,PaddingMedium:()=>x,PaddingNo:()=>h,PaddingNoBottom:()=>b,PaddingNoTop:()=>j,PaddingSmall:()=>u,__namedExportsOrder:()=>y,default:()=>m});var s=d("../../libs/common/storybook/src/index.ts"),t=d("../../node_modules/lit/index.js"),o=d("../../node_modules/lit-html/lit-html.js");d("../../node_modules/react/index.js");var a=d("../../node_modules/react/jsx-runtime.js"),r=d("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=d("../../node_modules/@storybook/blocks/dist/index.mjs"),l=d("../../node_modules/@storybook/addon-docs/dist/index.mjs");let c=d.p+"static/media/margin-en-padding.197f9682.png";function p(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",code:"code"},(0,r.RP)(),e.components),{VluxMetaData:d}=n;return d||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.W8,{title:"Styles-next/Layout (afnemers)/padding"}),"\n",(0,a.jsx)(n.h1,{id:"padding---next",children:"Padding - next"}),"\n",(0,a.jsx)(d,{id:"styles-next-layout-afnemers-padding"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#doel",children:"Doel"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#gebruik",children:"Gebruik"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"doel",children:"Doel"}),"\n",(0,a.jsxs)(n.p,{children:["Met deze style-classes kan de padding beïnvloed worden. De implementatie en gebruik van padding en margin zijn\ngelijklopend. Op ",(0,a.jsx)(n.a,{href:"https://web.dev",target:"_blank",rel:"nofollow noopener noreferrer",children:"web.dev"})," vind je meer informatie\n",(0,a.jsx)(n.a,{href:"https://web.dev/learn/css/spacing#padding",target:"_blank",rel:"nofollow noopener noreferrer",children:"over padding"}),"."]}),"\n",(0,a.jsx)("img",{src:c,alt:"margin en padding",style:{maxWidth:"300px"}}),"\n",(0,a.jsx)(n.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,a.jsx)(n.p,{children:"De mogelijkheden zijn bewust beperkt gehouden. Afnemers moeten er naar streven zich te beperken tot de\nhieronder besproken (voorziene) style-classes. Echter, zoals steeds: het is niet verboden om eigen styling\n(en dus een afwijking) te voorzien als dat de layout en bladspiegel ten goede komt."}),"\n",(0,a.jsx)(n.p,{children:"In onderstaande voorbeelden wordt bij het 'default voorbeeld' de margin expliciet op 15px gezet, de overige voorbeelden\ntonen de impact op het 'default voorbeeld'."}),"\n",(0,a.jsx)(n.h3,{id:"vl-padding-next---default",children:"vl-padding-next - default"}),"\n",(0,a.jsxs)(n.p,{children:["De default padding wordt beïnvloed door de container, typisch wat er voor die resolutie bepaald is door\n",(0,a.jsx)(n.a,{href:"/docs/styles-next-layout-afnemers-section--documentatie",children:"vl-section-next"}),"."]}),"\n",(0,a.jsx)(i.Hl,{of:v}),"\n",(0,a.jsx)(n.h3,{id:"vl-padding-next--small",children:"vl-padding-next--small"}),"\n",(0,a.jsxs)(n.p,{children:["De padding onderaan en bovenaan wordt op de variabele ",(0,a.jsx)(n.code,{children:"--vl-spacing--small"})," (1.5rem) gezet, links en rechts is er geen\npadding (0), voor kleine schermen (<767px) wordt de ",(0,a.jsx)(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),"\n",(0,a.jsx)(i.Hl,{of:u}),"\n",(0,a.jsx)(n.h3,{id:"vl-padding-next--medium",children:"vl-padding-next--medium"}),"\n",(0,a.jsxs)(n.p,{children:["De padding onderaan en bovenaan wordt op de variabele ",(0,a.jsx)(n.code,{children:"--vl-spacing--medium"})," (3rem) gezet, links en rechts is er geen\npadding (0), voor kleine schermen (<767px) wordt de ",(0,a.jsx)(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),"\n",(0,a.jsx)(i.Hl,{of:x}),"\n",(0,a.jsx)(n.h3,{id:"vl-padding-next--no",children:"vl-padding-next--no"}),"\n",(0,a.jsx)(n.p,{children:"Nergens padding: alle padding rondom staat op 0."}),"\n",(0,a.jsx)(i.Hl,{of:h}),"\n",(0,a.jsx)(n.h3,{id:"vl-padding-next--no-bottom",children:"vl-padding-next--no-bottom"}),"\n",(0,a.jsx)(n.p,{children:"Onderaan geen padding: deze wordt op 0 gezet."}),"\n",(0,a.jsx)(i.Hl,{of:b}),"\n",(0,a.jsx)(n.h3,{id:"vl-padding-next--no-top",children:"vl-padding-next--no-top"}),"\n",(0,a.jsx)(n.p,{children:"Bovenaan geen padding: deze wordt op 0 gezet."}),"\n",(0,a.jsx)(i.Hl,{of:j})]})}let m={id:"styles-next-layout-afnemers-padding",title:"Styles-next/Layout (afnemers)/padding",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,r.RP)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}}}},g=(0,t.AH)`
    .sb-container {
        width: 300px;
        height: 100px;
        background-color: lightblue;
        border: rgb(152, 191, 34) 5px solid;
        padding: 15px; /* normaal specifieert de container (bvb. de vl-section) dit */
    }

    .sb-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        background-color: white;
        border: black 1px dashed;
    }
`,v=({})=>(0,o.qy)`
    <style>
        ${g}
    </style>
    <div class="sb-container">
        <div class="sb-content">default</div>
    </div>
`;v.storyName="vl-padding - default",v.parameters=s.Dw;let u=({})=>(0,o.qy)`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding-next--small">
        <div class="sb-content">vl-padding-next--small</div>
    </div>
`;u.storyName="vl-padding - small",u.parameters=s.Dw;let x=({})=>(0,o.qy)`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding-next--medium">
        <div class="sb-content">vl-padding-next--medium</div>
    </div>
`;x.storyName="vl-padding - medium",x.parameters=s.Dw;let h=({})=>(0,o.qy)`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding-next--no">
        <div class="sb-content">vl-padding-next--no</div>
    </div>
`;h.storyName="vl-padding - no",h.parameters=s.Dw;let b=({})=>(0,o.qy)`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding-next--no-bottom">
        <div class="sb-content">vl-padding-next--no-bottom</div>
    </div>
`;b.storyName="vl-padding - no bottom",b.parameters=s.Dw;let j=({})=>(0,o.qy)`
    <style>
        ${g}
    </style>
    <div class="sb-container vl-padding-next--no-top">
        <div class="sb-content">vl-padding-next--no-top</div>
    </div>
`;j.storyName="vl-padding - no top",j.parameters=s.Dw,v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${paddingCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content">default</div>\n    </div>\n`',...v.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${paddingCss}\n    </style>\n    <div class="sb-container vl-padding-next--small">\n        <div class="sb-content">vl-padding-next--small</div>\n    </div>\n`',...u.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${paddingCss}\n    </style>\n    <div class="sb-container vl-padding-next--medium">\n        <div class="sb-content">vl-padding-next--medium</div>\n    </div>\n`',...x.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${paddingCss}\n    </style>\n    <div class="sb-container vl-padding-next--no">\n        <div class="sb-content">vl-padding-next--no</div>\n    </div>\n`',...h.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${paddingCss}\n    </style>\n    <div class="sb-container vl-padding-next--no-bottom">\n        <div class="sb-content">vl-padding-next--no-bottom</div>\n    </div>\n`',...b.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${paddingCss}\n    </style>\n    <div class="sb-container vl-padding-next--no-top">\n        <div class="sb-content">vl-padding-next--no-top</div>\n    </div>\n`',...j.parameters?.docs?.source}}};let y=["PaddingDefault","PaddingSmall","PaddingMedium","PaddingNo","PaddingNoBottom","PaddingNoTop"]},"../../node_modules/react-dom/client.js":(e,n,d)=>{var s=d("../../node_modules/react-dom/index.js");n.createRoot=s.createRoot,n.hydrateRoot=s.hydrateRoot}}]);