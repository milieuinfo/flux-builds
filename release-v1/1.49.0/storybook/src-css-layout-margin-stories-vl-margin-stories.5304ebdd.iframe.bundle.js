"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8657],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,s)=>{s.d(n,{f:()=>v});var t=s("../../node_modules/react/index.js"),r=s("../../node_modules/react-dom/client.js"),o=new Map,a=({callback:e,children:n})=>{let s=(0,t.useRef)();return(0,t.useLayoutEffect)(()=>{s.current!==e&&(s.current=e,e())},[e]),n},i=async(e,n)=>{let s=await d(n);return new Promise(n=>{s.render(t.createElement(a,{callback:()=>n(null)},e))})},l=(e,n)=>{let s=o.get(e);s&&(s.unmount(),o.delete(e))},d=async e=>{let n=o.get(e);return n||(n=r.createRoot(e),o.set(e,n)),n},m=s("../../node_modules/@storybook/blocks/dist/index.mjs"),c={code:m.XA,a:m.zE,...m.Sw},g=class extends t.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:t.createElement(t.Fragment,null,n)}},v=class{constructor(){this.render=async(e,n,r)=>{let o={...c,...n?.components},a=m.kQ;return new Promise((l,d)=>{s.e(814).then(s.bind(s,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:s})=>i(t.createElement(g,{showException:d,key:Math.random()},t.createElement(s,{components:o},t.createElement(a,{context:e,docsParameter:n}))),r)).then(()=>l())})},this.unmount=e=>{l(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,s)=>{s.d(n,{Hl:()=>t.Hl,W8:()=>t.W8,kL:()=>t.kL,ov:()=>t.ov}),s("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var t=s("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/common/utilities/src/css/layout/margin/stories/vl-margin.stories.ts":(e,n,s)=>{s.r(n),s.d(n,{MarginDefault:()=>u,MarginMedium:()=>x,MarginNo:()=>h,MarginNoBottom:()=>b,MarginNoTop:()=>j,MarginSmall:()=>p,__namedExportsOrder:()=>y,default:()=>g});var t=s("../../libs/common/storybook/src/index.ts"),r=s("../../node_modules/lit/index.js"),o=s("../../node_modules/lit-html/lit-html.js");s("../../node_modules/react/index.js");var a=s("../../node_modules/react/jsx-runtime.js"),i=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),l=s("../../node_modules/@storybook/blocks/dist/index.mjs"),d=s("../../node_modules/@storybook/addon-docs/dist/index.mjs");let m=s.p+"static/media/margin-en-padding.197f9682.png";function c(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",code:"code"},(0,i.RP)(),e.components),{VluxMetaData:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.W8,{title:"Styles-next/Layout (afnemers)/margin"}),"\n",(0,a.jsx)(n.h1,{id:"margin---next",children:"Margin - next"}),"\n",(0,a.jsx)(s,{id:"styles-next-layout-afnemers-margin"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#doel",children:"Doel"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#gebruik",children:"Gebruik"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"doel",children:"Doel"}),"\n",(0,a.jsxs)(n.p,{children:["Met deze style-classes kan de margin beïnvloed worden. De implementatie en gebruik van margin en padding zijn\ngelijklopend. Op ",(0,a.jsx)(n.a,{href:"https://web.dev",target:"_blank",rel:"nofollow noopener noreferrer",children:"web.dev"})," vind je meer informatie\n",(0,a.jsx)(n.a,{href:"https://web.dev/learn/css/spacing#margin",target:"_blank",rel:"nofollow noopener noreferrer",children:"over margin"}),"."]}),"\n",(0,a.jsx)("img",{src:m,alt:"margin en padding",style:{maxWidth:"300px"}}),"\n",(0,a.jsx)(n.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,a.jsx)(n.p,{children:"De mogelijkheden zijn bewust beperkt gehouden. Afnemers moeten er naar streven zich te beperken tot de\nhieronder besproken (voorziene) style-classes. Echter, zoals steeds: het is niet verboden om eigen styling\n(en dus een afwijking) te voorzien als dat de layout en bladspiegel ten goede komt."}),"\n",(0,a.jsx)(n.p,{children:"In onderstaande voorbeelden wordt bij het 'default voorbeeld' de margin expliciet op 15px gezet, de overige voorbeelden\ntonen de impact op het 'default voorbeeld'."}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin-next---default",children:"vl-margin-next - default"}),"\n",(0,a.jsxs)(n.p,{children:["De default marge wordt beïnvloed door de container, typisch wat er voor die resolutie bepaald is door\n",(0,a.jsx)(n.a,{href:"/docs/styles-next-layout-afnemers-section--documentatie",children:"vl-section-next"}),"."]}),"\n",(0,a.jsx)(l.Hl,{of:u}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin-next--small",children:"vl-margin-next--small"}),"\n",(0,a.jsxs)(n.p,{children:["De margin onderaan en bovenaan wordt op de variabele ",(0,a.jsx)(n.code,{children:"--vl-spacing--small"})," (1.5rem) gezet, links en rechts is er geen\nmargin (0), voor kleine schermen (<767px) wordt de ",(0,a.jsx)(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),"\n",(0,a.jsx)(l.Hl,{of:p}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin-next--medium",children:"vl-margin-next--medium"}),"\n",(0,a.jsxs)(n.p,{children:["De margin onderaan en bovenaan wordt op de variabele ",(0,a.jsx)(n.code,{children:"--vl-spacing--medium"})," (3rem) gezet, links en rechts is er geen\nmargin (0), voor kleine schermen (<767px) wordt de ",(0,a.jsx)(n.code,{children:"--vl-spacing--normal"})," (2rem) gebruikt (boven- en onderaan)."]}),"\n",(0,a.jsx)(l.Hl,{of:x}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin-next--no",children:"vl-margin-next--no"}),"\n",(0,a.jsx)(n.p,{children:"Nergens margin: alle margin rondom staat op 0."}),"\n",(0,a.jsx)(l.Hl,{of:h}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin-next--no-bottom",children:"vl-margin-next--no-bottom"}),"\n",(0,a.jsx)(n.p,{children:"Onderaan geen margin: deze wordt op 0 gezet."}),"\n",(0,a.jsx)(l.Hl,{of:b}),"\n",(0,a.jsx)(n.h3,{id:"vl-margin-next--no-top",children:"vl-margin-next--no-top"}),"\n",(0,a.jsx)(n.p,{children:"Bovenaan geen margin: deze wordt op 0 gezet."}),"\n",(0,a.jsx)(l.Hl,{of:j})]})}let g={id:"styles-next-layout-afnemers-margin",title:"Styles-next/Layout (afnemers)/margin",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,i.RP)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}},v=(0,r.AH)`
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
`,u=({})=>(0,o.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content">default</div>
    </div>
`;u.storyName="vl-margin - default",u.parameters=t.Dw;let p=({})=>(0,o.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin-next--small">vl-margin-next--small</div>
    </div>
`;p.storyName="vl-margin - small",p.parameters=t.Dw;let x=({})=>(0,o.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin-next--medium">vl-margin-next--medium</div>
    </div>
`;x.storyName="vl-margin - medium",x.parameters=t.Dw;let h=({})=>(0,o.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin-next--no">vl-margin-next--no</div>
    </div>
`;h.storyName="vl-margin - no",h.parameters=t.Dw;let b=({})=>(0,o.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin-next--no-bottom">vl-margin-next--no-bottom</div>
    </div>
`;b.storyName="vl-margin - no bottom",b.parameters=t.Dw;let j=({})=>(0,o.qy)`
    <style>
        ${v}
    </style>
    <div class="sb-container">
        <div class="sb-content vl-margin-next--no-top">vl-margin-next--no-top</div>
    </div>
`;j.storyName="vl-margin - no top",j.parameters=t.Dw,u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content">default</div>\n    </div>\n`',...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin-next--small">vl-margin-next--small</div>\n    </div>\n`',...p.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin-next--medium">vl-margin-next--medium</div>\n    </div>\n`',...x.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin-next--no">vl-margin-next--no</div>\n    </div>\n`',...h.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin-next--no-bottom">vl-margin-next--no-bottom</div>\n    </div>\n`',...b.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:'({}) => html`\n    <style>\n        ${marginCss}\n    </style>\n    <div class="sb-container">\n        <div class="sb-content vl-margin-next--no-top">vl-margin-next--no-top</div>\n    </div>\n`',...j.parameters?.docs?.source}}};let y=["MarginDefault","MarginSmall","MarginMedium","MarginNo","MarginNoBottom","MarginNoTop"]},"../../node_modules/react-dom/client.js":(e,n,s)=>{var t=s("../../node_modules/react-dom/index.js");n.createRoot=t.createRoot,n.hydrateRoot=t.hydrateRoot}}]);