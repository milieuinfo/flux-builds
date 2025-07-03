"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6739],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,s)=>{s.d(n,{f:()=>v});var r=s("../../node_modules/react/index.js"),o=s("../../node_modules/react-dom/client.js"),t=new Map,a=({callback:e,children:n})=>{let s=(0,r.useRef)();return(0,r.useLayoutEffect)(()=>{s.current!==e&&(s.current=e,e())},[e]),n},i=async(e,n)=>{let s=await d(n);return new Promise(n=>{s.render(r.createElement(a,{callback:()=>n(null)},e))})},l=(e,n)=>{let s=t.get(e);s&&(s.unmount(),t.delete(e))},d=async e=>{let n=t.get(e);return n||(n=o.createRoot(e),t.set(e,n)),n},m=s("../../node_modules/@storybook/blocks/dist/index.mjs"),c={code:m.XA,a:m.zE,...m.Sw},g=class extends r.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:r.createElement(r.Fragment,null,n)}},v=class{constructor(){this.render=async(e,n,o)=>{let t={...c,...n?.components},a=m.kQ;return new Promise((l,d)=>{s.e(814).then(s.bind(s,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:s})=>i(r.createElement(g,{showException:d,key:Math.random()},r.createElement(s,{components:t},r.createElement(a,{context:e,docsParameter:n}))),o)).then(()=>l())})},this.unmount=e=>{l(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,s)=>{s.d(n,{Hl:()=>r.Hl,W8:()=>r.W8,kL:()=>r.kL,ov:()=>r.ov}),s("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var r=s("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/styles/src/layout/margin/stories/vl-margin.stories.ts":(e,n,s)=>{s.r(n),s.d(n,{MarginDefault:()=>u,MarginMedium:()=>h,MarginNo:()=>b,MarginNoBottom:()=>x,MarginNoTop:()=>y,MarginSmall:()=>p,__namedExportsOrder:()=>j,default:()=>g});var r=s("../../resources/utils-storybook/index.ts"),o=s("../../node_modules/lit/index.js"),t=s("../../node_modules/lit-html/lit-html.js");s("../../node_modules/react/index.js");var a=s("../../node_modules/react/jsx-runtime.js"),i=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),l=s("../../node_modules/@storybook/blocks/dist/index.mjs"),d=s("../../node_modules/@storybook/addon-docs/dist/index.mjs");let m=s.p+"static/media/margin-en-padding.197f9682.png";function c(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",code:"code"},(0,i.RP)(),e.components),{FluxMetaData:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.W8,{title:"Styles/Layout (afnemers)/margin"}),"\n",(0,a.jsx)(n.h1,{id:"margin",children:"Margin"}),"\n",(0,a.jsx)(s,{id:"styles-layout-afnemers-margin"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#doel",children:"Doel"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#gebruik",children:"Gebruik"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"doel",children:"Doel"}),"\n",(0,a.jsxs)(n.p,{children:["Met deze style-classes kan de margin beïnvloed worden. De implementatie en gebruik van margin en padding zijn\ngelijklopend. Op ",(0,a.jsx)(n.a,{href:"https://web.dev",target:"_blank",rel:"nofollow noopener noreferrer",children:"web.dev"})," vind je meer informatie\n",(0,a.jsx)(n.a,{href:"https://web.dev/learn/css/spacing#margin",target:"_blank",rel:"nofollow noopener noreferrer",children:"over margin"}),"."]}),"\n",(0,a.jsx)("img",{src:m,alt:"margin en padding",style:{maxWidth:"300px"}}),"\n",(0,a.jsx)(n.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,a.jsx)(n.p,{children:"De mogelijkheden zijn bewust beperkt gehouden. Afnemers moeten er naar streven zich te beperken tot de\nhieronder besproken (voorziene) style-classes. Echter, zoals steeds: het is niet verboden om eigen styling\n(en dus een afwijking) te voorzien als dat de layout en bladspiegel ten goede komt."}),"\n",(0,a.jsx)(n.p,{children:"In onderstaande voorbeelden wordt bij het 'default voorbeeld' de margin expliciet op 15px gezet, de overige voorbeelden\ntonen de impact op het 'default voorbeeld'."}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin---default",children:"vl-margin - default"}),"\n",(0,a.jsxs)(n.p,{children:["De default marge wordt beïnvloed door de container, typisch wat er voor die resolutie bepaald is door\n",(0,a.jsx)(n.a,{href:"/docs/styles-layout-afnemers-section--documentatie",children:"vl-section"}),"."]}),"\n",(0,a.jsx)(l.Hl,{of:u}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin--small",children:"vl-margin--small"}),"\n",(0,a.jsxs)(n.p,{children:["De margin onderaan en bovenaan wordt op de variabele ",(0,a.jsx)(n.code,{children:"--vl-spacing--small"})," (1.5rem) gezet, links en rechts is er geen\nmargin (0), voor kleine schermen (<767px) wordt de ",(0,a.jsx)(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),"\n",(0,a.jsx)(l.Hl,{of:p}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin--medium",children:"vl-margin--medium"}),"\n",(0,a.jsxs)(n.p,{children:["De margin onderaan en bovenaan wordt op de variabele ",(0,a.jsx)(n.code,{children:"--vl-spacing--medium"})," (3rem) gezet, links en rechts is er geen\nmargin (0), voor kleine schermen (<767px) wordt de ",(0,a.jsx)(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),"\n",(0,a.jsx)(l.Hl,{of:h}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin--no",children:"vl-margin--no"}),"\n",(0,a.jsx)(n.p,{children:"Nergens margin: alle margin rondom staat op 0."}),"\n",(0,a.jsx)(l.Hl,{of:b}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin--no-bottom",children:"vl-margin--no-bottom"}),"\n",(0,a.jsx)(n.p,{children:"Onderaan geen margin: deze wordt op 0 gezet."}),"\n",(0,a.jsx)(l.Hl,{of:x}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin--no-top",children:"vl-margin--no-top"}),"\n",(0,a.jsx)(n.p,{children:"Bovenaan geen margin: deze wordt op 0 gezet."}),"\n",(0,a.jsx)(l.Hl,{of:y})]})}let g={id:"styles-layout-afnemers-margin",title:"Styles/Layout (afnemers)/margin",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,i.RP)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}},v=(0,o.AH)`
    .sb-container {
        width: 300px;
        background-color: lightblue;
        border: black 1px dashed;
    }

    .sb-content {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        margin: 15px; /* normaal specifieert de container (bvb. de vl-section) dit */
        height: 50px;
        background-color: white;
        border: rgb(152, 191, 34) 5px solid;
    }
`,u=({})=>(0,t.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content">default</div>
    </div>
`;u.storyName="vl-margin - default",u.parameters=r.Dw;let p=({})=>(0,t.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--small">vl-margin--small</div>
    </div>
`;p.storyName="vl-margin - small",p.parameters=r.Dw;let h=({})=>(0,t.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--medium">vl-margin--medium</div>
    </div>
`;h.storyName="vl-margin - medium",h.parameters=r.Dw;let b=({})=>(0,t.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--no">vl-margin--no</div>
    </div>
`;b.storyName="vl-margin - no",b.parameters=r.Dw;let x=({})=>(0,t.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--no-bottom">vl-margin--no-bottom</div>
    </div>
`;x.storyName="vl-margin - no bottom",x.parameters=r.Dw;let y=({})=>(0,t.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin--no-top">vl-margin--no-top</div>
    </div>
`;y.storyName="vl-margin - no top",y.parameters=r.Dw,u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content">default</div>\n    </div>\n`',...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin--small">vl-margin--small</div>\n    </div>\n`',...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin--medium">vl-margin--medium</div>\n    </div>\n`',...h.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin--no">vl-margin--no</div>\n    </div>\n`',...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin--no-bottom">vl-margin--no-bottom</div>\n    </div>\n`',...x.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin--no-top">vl-margin--no-top</div>\n    </div>\n`',...y.parameters?.docs?.source}}};let j=["MarginDefault","MarginSmall","MarginMedium","MarginNo","MarginNoBottom","MarginNoTop"]},"../../node_modules/react-dom/client.js":(e,n,s)=>{var r=s("../../node_modules/react-dom/index.js");n.createRoot=r.createRoot,n.hydrateRoot=r.hydrateRoot}}]);