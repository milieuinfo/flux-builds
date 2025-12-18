"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2269],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(n,e,l)=>{l.d(e,{f:()=>x});var t=l("../../node_modules/react/index.js"),s=l("../../node_modules/react-dom/client.js"),i=new Map,o=({callback:n,children:e})=>{let l=(0,t.useRef)();return(0,t.useLayoutEffect)(()=>{l.current!==n&&(l.current=n,n())},[n]),e},c=async(n,e)=>{let l=await m(e);return new Promise(e=>{l.render(t.createElement(o,{callback:()=>e(null)},n))})},r=(n,e)=>{let l=i.get(n);l&&(l.unmount(),i.delete(n))},m=async n=>{let e=i.get(n);return e||(e=s.createRoot(n),i.set(n,e)),e},d=l("../../node_modules/@storybook/blocks/dist/index.mjs"),v={code:d.XA,a:d.zE,...d.Sw},a=class extends t.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n){let{showException:e}=this.props;e(n)}render(){let{hasError:n}=this.state,{children:e}=this.props;return n?null:t.createElement(t.Fragment,null,e)}},x=class{constructor(){this.render=async(n,e,s)=>{let i={...v,...e?.components},o=d.kQ;return new Promise((r,m)=>{l.e(814).then(l.bind(l,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:l})=>c(t.createElement(a,{showException:m,key:Math.random()},t.createElement(l,{components:i},t.createElement(o,{context:n,docsParameter:e}))),s)).then(()=>r())})},this.unmount=n=>{r(n)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(n,e,l)=>{l.d(e,{Hl:()=>t.Hl,W8:()=>t.W8,kL:()=>t.kL,ov:()=>t.ov}),l("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var t=l("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/common/utilities/src/css/layout/grid/stories/vl-grid.stories.ts":(n,e,l)=>{l.r(e),l.d(e,{GridColumnStart:()=>_,GridJustifyAlign:()=>z,GridResponsive:()=>w,GridWithForm:()=>E,__namedExportsOrder:()=>M,default:()=>S});var t=l("../../libs/components/src/next/button/index.ts"),s=l("../../libs/form/src/next/form-label/index.ts"),i=l("../../libs/form/src/next/input-field/index.ts"),o=l("../../libs/common/utilities/src/util/utils.ts"),c=l("../../node_modules/lit-html/lit-html.js"),r=l("../../libs/common/utilities/src/css/base/var/vl-media-screen.css.ts");l("../../node_modules/react/index.js");var m=l("../../node_modules/react/jsx-runtime.js"),d=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),v=l("../../node_modules/@storybook/blocks/dist/index.mjs"),a=l("../../node_modules/@storybook/addon-docs/dist/index.mjs");let x=l.p+"static/media/grid-large.5f63436b.png",u=l.p+"static/media/grid-medium.4073bd92.png",g=l.p+"static/media/grid-small.8098306b.png",p=l.p+"static/media/grid-extra-small.b889cf49.png",h=l.p+"static/media/css-large.f1a7a786.png",f=l.p+"static/media/css-medium.9a869edb.png",b=l.p+"static/media/css-small.2cd4aa4f.png",j=l.p+"static/media/css-extra-small.67522919.png";var y=l("../../node_modules/raw-loader/dist/cjs.js!../../libs/common/utilities/src/css/layout/grid/vl-grid.raw.css");function k(n){let e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",code:"code",strong:"strong",h3:"h3",pre:"pre"},(0,d.RP)(),n.components),{VluxMetaData:l}=e;return l||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.W8,{title:"Styles-next/Layout (afnemers)/grid"}),"\n",(0,m.jsx)(e.h1,{id:"grid---next",children:"Grid - next"}),"\n",(0,m.jsx)(l,{id:"styles-next-layout-afnemers-grid"}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)(e.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,m.jsxs)(e.ul,{children:["\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.a,{href:"#doel",children:"Doel"})}),"\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.a,{href:"#grid-opzet",children:"Grid Opzet"})}),"\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.a,{href:"#column-opzet",children:"Column Opzet"})}),"\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.a,{href:"#responsief-voorbeeld",children:"Responsief Voorbeeld"})}),"\n"]}),"\n",(0,m.jsx)(e.h2,{id:"doel",children:"Doel"}),"\n",(0,m.jsxs)(e.p,{children:[(0,m.jsx)(e.code,{children:"vl-grid-next"})," implementeert een ",(0,m.jsx)(e.a,{href:"https://www.w3schools.com/css/css_rwd_grid.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"12-kolom grid layout"}),". De CSS\nis een specifieke implementatie gebruikmakend van de ",(0,m.jsx)(e.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Grid Layout"}),",\ndie standaard door ",(0,m.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",target:"_blank",rel:"nofollow noopener noreferrer",children:"browsers"})," voorzien wordt."]}),"\n",(0,m.jsxs)(e.p,{children:["De opzet is responsief, er zijn style-classes voor 4 verschillende scherm groottes: ",(0,m.jsx)(e.strong,{children:"large"})," (>1023px),\n",(0,m.jsx)(e.strong,{children:"medium"})," (<1023px), ",(0,m.jsx)(e.strong,{children:"small"})," (<767px) en ",(0,m.jsx)(e.strong,{children:"extra-small"})," (<500px). De style-classes volgen de naamgeving\nvan CSS-grid, bestaande kennis of documentatie blijft dus representatief. Afwijkingen kunnen desgewenst in de afnemende\ncode voorzien worden door de naamgeving door te trekken: de CSS-grid naamgeving overnemen in\n",(0,m.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case",target:"_blank",rel:"nofollow noopener noreferrer",children:"kebab case"}),"."]}),"\n",(0,m.jsx)(e.h2,{id:"grid-opzet",children:"Grid Opzet"}),"\n",(0,m.jsx)(e.h3,{id:"vl-grid-next---opzet",children:(0,m.jsx)(e.strong,{children:"vl-grid-next - opzet"})}),"\n",(0,m.jsxs)(e.p,{children:["Op container niveau - ",(0,m.jsx)(e.code,{children:"vl-grid-next"})," - wordt m.b.v. de standaard CSS Grid Layout een 12-kolom grid opgezet waarbij de\nwaardes via variabelen worden gezet."]}),"\n",(0,m.jsx)(e.p,{children:"De responsieve kolom opzet zit in aparte bestanden, belangrijk hierbij is dat:"}),"\n",(0,m.jsxs)(e.ul,{children:["\n",(0,m.jsx)(e.li,{children:"de aanpak 'desktop first' is"}),"\n",(0,m.jsx)(e.li,{children:"de media query breedte wordt van groot naar klein gedefinieerd: >1023 (large) / <1023 (medium) /\n<767 (small) / <500 (extra-small)"}),"\n",(0,m.jsx)(e.li,{children:"de grotere hebben dus voorrang op de kleinere, als je enkel de default specifieert wordt dit ook toegepast voor\nde smallere"}),"\n",(0,m.jsx)(e.li,{children:"als je daarnaast bvb. voor 'small' kolom afwijkingen opgeeft dan gelden die ook voor 'extra-small'"}),"\n"]}),"\n",(0,m.jsx)(e.h3,{id:"vl-grid-next---variabelen",children:(0,m.jsx)(e.strong,{children:"vl-grid-next - variabelen"})}),"\n",(0,m.jsx)(e.p,{children:"Met onderstaande variabelen kan je grid settings overrulen."}),"\n",(0,m.jsx)(v.kL,{code:y.A,language:"css",dark:!0}),"\n",(0,m.jsx)(e.h3,{id:"vl-grid-next---code",children:(0,m.jsx)(e.strong,{children:"vl-grid-next - code"})}),"\n",(0,m.jsx)(v.kL,{code:"import gridRawCss from '!!raw-loader!./vl-grid.raw.css';\nimport { css, unsafeCSS } from 'lit';\nimport { vlMediaScreenExtraSmall, vlMediaScreenMedium, vlMediaScreenSmall } from '../../base/var/vl-media-screen.css';\nimport { columnLargeStyles } from './column/vl-column-l.css';\nimport { columnMediumStyles } from './column/vl-column-m.css';\nimport { columnSmallStyles } from './column/vl-column-s.css';\nimport { columnExtraSmallStyles } from './column/vl-column-xs.css';\nimport { gridLargeStyles } from './grid/vl-grid-l.css';\nimport { gridMediumStyles } from './grid/vl-grid-m.css';\nimport { gridSmallStyles } from './grid/vl-grid-s.css';\nimport { gridExtraSmallStyles } from './grid/vl-grid-xs.css';\n\nexport const vlGridStyles = css`\n    ${unsafeCSS(gridRawCss)}\n    .vl-grid-next {\n        display: grid;\n        grid-template-columns: repeat(12, 1fr);\n        grid-row-gap: var(--vl-grid-row-gap);\n        grid-column-gap: var(--vl-grid-col-gap);\n\n        .vl-column-next {\n            ${gridLargeStyles()};\n            ${columnLargeStyles()};\n\n            @media screen and (max-width: ${vlMediaScreenMedium}px) {\n                ${gridMediumStyles()}\n                ${columnMediumStyles()}\n            }\n\n            @media screen and (max-width: ${vlMediaScreenSmall}px) {\n                ${gridSmallStyles()}\n                ${columnSmallStyles()}\n            }\n\n            @media screen and (max-width: ${vlMediaScreenExtraSmall}px) {\n                ${columnExtraSmallStyles()};\n                ${gridExtraSmallStyles()};\n            }\n        }\n    }\n`;\n",language:"ts",dark:!0}),"\n",(0,m.jsx)(e.h3,{id:"vl-grid-next---justify-items--align-items",children:(0,m.jsx)(e.strong,{children:"vl-grid-next - justify-items / align-items"})}),"\n",(0,m.jsxs)(e.p,{children:["Op grid niveau worden css-classes voorzien voor uitlijning: ",(0,m.jsxs)(e.strong,{children:["horizontaal met ",(0,m.jsx)(e.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-items",target:"_blank",rel:"nofollow noopener noreferrer",children:"justify-items"})]}),"\nen ",(0,m.jsxs)(e.strong,{children:["verticaal met ",(0,m.jsx)(e.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-align-items",target:"_blank",rel:"nofollow noopener noreferrer",children:"align-items"})]}),".\nVolgende classes zijn hiervoor beschikbaar:"]}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{children:"vl-grid-next--justify-items-start\nvl-grid-next--justify-items-end\nvl-grid-next--justify-items-center\nvl-grid-next--justify-items-stretch\n\nvl-grid-next--align-items-start\nvl-grid-next--align-items-end\nvl-grid-next--align-items-center\nvl-grid-next--align-items-stretch\n"})}),"\n",(0,m.jsx)(e.h3,{id:"vl-grid-next---responsive",children:(0,m.jsx)(e.strong,{children:"vl-grid-next - responsive"})}),"\n",(0,m.jsxs)(e.p,{children:["Op grid niveau kan je voor de uitlijning responsieve afwijkingen gebruiken: ",(0,m.jsx)(e.code,{children:"vl-grid-next--X-justify-items-start"}),"\nwaarbij X ",(0,m.jsx)(e.code,{children:"[m, s, xs]"})," kan zijn. Als je dus ",(0,m.jsx)(e.code,{children:"vl-grid-next--s-align-items-center"})," gebruikt zal die kolom enkel\ngecentreerd zijn op smalle (s) en extra-smalle (xs) schermen."]}),"\n",(0,m.jsx)(e.h2,{id:"column-opzet",children:"Column Opzet"}),"\n",(0,m.jsx)(e.h3,{id:"vl-column-next---kolom",children:(0,m.jsx)(e.strong,{children:"vl-column-next - kolom"})}),"\n",(0,m.jsxs)(e.p,{children:["Voor het specifiëren van kolommen is er ",(0,m.jsx)(e.code,{children:"vl-column-next--1"})," t.e.m. ",(0,m.jsx)(e.code,{children:"vl-column-next--12"})," met de responsieve varianten\n",(0,m.jsx)(e.code,{children:"vl-column-next--X-N"})," waarbij X [m, s, xs] kan zijn.",(0,m.jsx)("br",{})]}),"\n",(0,m.jsxs)(e.p,{children:["Om de start van een kolom te verschuiven is er ",(0,m.jsx)(e.code,{children:"vl-column-next--start-1"})," t.e.m. ",(0,m.jsx)(e.code,{children:"vl-column-next--start-12"})," met de\nresponsieve varianten ",(0,m.jsx)(e.code,{children:"vl-column-next--X-start-N"})," waarbij X [m, s, xs] kan zijn. Een kolom met ",(0,m.jsx)(e.code,{children:"vl-column-next--start-2"})," zal starten in de tweede kolom en N kolommen breed zijn, zoals gedefinieerd met ",(0,m.jsx)(e.code,{children:"vl-column-next--N"}),"."]}),"\n",(0,m.jsx)(v.Hl,{of:_}),"\n",(0,m.jsx)(e.h3,{id:"vl-column-next---justify-self--align-self",children:(0,m.jsx)(e.strong,{children:"vl-column-next - justify-self / align-self"})}),"\n",(0,m.jsxs)(e.p,{children:["Conform het grid niveau worden er css-classes voorzien voor uitlijning in een cel: ",(0,m.jsxs)(e.strong,{children:["horizontaal met\n",(0,m.jsx)(e.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-justify-self",target:"_blank",rel:"nofollow noopener noreferrer",children:"justify-self"})]}),"\nen ",(0,m.jsxs)(e.strong,{children:["verticaal met ",(0,m.jsx)(e.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-align-items",target:"_blank",rel:"nofollow noopener noreferrer",children:"align-self"})]}),".\nVolgende classes zijn hiervoor beschikbaar:"]}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{children:"vl-column-next--justify-self-start\nvl-column-next--justify-self-end\nvl-column-next--justify-self-center\nvl-column-next--justify-self-stretch\n\nvl-column-next--align-self-start\nvl-column-next--align-self-end\nvl-column-next--align-self-center\nvl-column-next--align-self-stretch\n"})}),"\n",(0,m.jsx)(v.Hl,{of:z}),"\n",(0,m.jsx)(e.h3,{id:"vl-column-next---responsive",children:(0,m.jsx)(e.strong,{children:"vl-column-next - responsive"})}),"\n",(0,m.jsxs)(e.p,{children:["Ook de responsieve varianten zijn beschikbaar: bvb. ",(0,m.jsx)(e.code,{children:"vl-grid-next--X-justify-self-start"})," en\n",(0,m.jsx)(e.code,{children:"vl-column-next--X-align-self-start"}),"."]}),"\n",(0,m.jsx)(e.h2,{id:"responsief-voorbeeld",children:"Responsief Voorbeeld"}),"\n",(0,m.jsx)(e.h3,{id:"large---default-1023px",children:"Large - default (>1023px)"}),"\n",(0,m.jsx)("img",{src:x,alt:"grid large",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)("img",{src:h,alt:"css large",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)(e.h3,{id:"medium-1023",children:"Medium (<1023)"}),"\n",(0,m.jsx)("img",{src:u,alt:"grid medium",style:{maxWidth:"500px"}}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)("img",{src:f,alt:"css medium",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)(e.h3,{id:"small-767",children:"Small (<767)"}),"\n",(0,m.jsx)("img",{src:g,alt:"grid small",style:{maxWidth:"400px"}}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)("img",{src:b,alt:"css small",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)(e.h3,{id:"extra-small-500",children:"Extra-Small (<500)"}),"\n",(0,m.jsx)("img",{src:p,alt:"grid extra small",style:{maxWidth:"300px"}}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)("img",{src:j,alt:"css extra small",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)(e.h2,{id:"form-grid",children:"Form Grid"}),"\n",(0,m.jsxs)(e.p,{children:["Vorige implementaties van het grid zoals ",(0,m.jsx)(e.code,{children:'is="vl-form-grid'})," of ",(0,m.jsx)(e.code,{children:'class="vl-form-grid"'})," zijn deprecated en worden vervangen door ",(0,m.jsx)(e.code,{children:'class="vl-grid-next"'}),":"]}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{children:'<form>\n  <div class="vl-grid-next">...</div>\n</form>\n'})}),"\n",(0,m.jsx)(v.Hl,{of:E})]})}(0,o.gy)([s.E,i.Y,t.Y]);let S={id:"styles-next-layout-afnemers-grid",title:"Styles-next/Layout (afnemers)/grid",tags:["autodocs"],parameters:{docs:{page:function(n={}){let{wrapper:e}=Object.assign({},(0,d.RP)(),n.components);return e?(0,m.jsx)(e,Object.assign({},n,{children:(0,m.jsx)(k,n)})):k(n)}}}},w=()=>(0,c.qy)`
    <style>
        .vl-grid-next {
            --vl-column-min-height: 8vmax;
            padding: 1vmax;

            @media screen and (max-width: ${r.Oh}px) {
                --vl-column-min-height: 5vmax;
            }

            @media screen and (max-width: ${r.gT}px) {
                --vl-column-min-height: 4vmax;
            }

            @media screen and (max-width: ${r.eA}px) {
                --vl-column-min-height: 3vmax;
            }

            .vl-column-next {
                min-height: var(--vl-column-min-height);
                background-color: mediumspringgreen;
                border: lightseagreen 2px solid;
            }

            .sb-header {
                background-color: lightblue;
            }

            .sb-footer {
                background-color: lightblue;
            }

            .sb-main {
                grid-row: span 3;

                .vl-column-next {
                    background-color: lightseagreen;
                }
            }

            .sb-main__sub {
                .vl-column-next {
                    background-color: mediumspringgreen;
                }
            }
        }
    </style>
    <div class="vl-grid-next">
        <div
            class="vl-column-next sb-header vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-9"
        ></div>
        <div
            class="vl-column-next sb-header vl-column-next--11 vl-column-next--m-9 vl-column-next--s-6 vl-column-next--xs-3"
        ></div>
        <div class="sb-main vl-column-next vl-column-next--8 vl-grid-next vl-column-next--m-12">
            <div class="vl-column-next vl-column-next--5"></div>
            <div class="vl-column-next vl-column-next--7"></div>
            <div class="vl-column-next vl-column-next--5"></div>
            <div class="vl-column-next vl-column-next--7"></div>
            <div class="sb-main__sub vl-column-next vl-column-next--9 vl-grid-next">
                <div class="vl-column-next vl-column-next--4"></div>
                <div class="vl-column-next vl-column-next--4"></div>
                <div class="vl-column-next vl-column-next--4"></div>
                <div class="vl-column-next vl-column-next--8"></div>
                <div class="vl-column-next vl-column-next--4"></div>
            </div>
            <div class="vl-column-next vl-column-next--3"></div>
        </div>
        <div class="vl-column-next vl-column-next--4 vl-column-next--m-12"></div>
        <div class="vl-column-next vl-column-next--2 vl-column-next--m-6 vl-column-next--xs-12"></div>
        <div class="vl-column-next vl-column-next--2 vl-column-next--m-6 vl-column-next--xs-12"></div>
        <div
            class="vl-column-next vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-12"
        ></div>
        <div
            class="vl-column-next vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-12"
        ></div>
        <div
            class="vl-column-next vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-12"
        ></div>
        <div
            class="vl-column-next vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-12"
        ></div>
        <div class="vl-column-next sb-footer vl-column-next--4"></div>
        <div class="vl-column-next sb-footer vl-column-next--2"></div>
        <div class="vl-column-next sb-footer vl-column-next--1"></div>
        <div class="vl-column-next sb-footer vl-column-next--2"></div>
        <div class="vl-column-next sb-footer vl-column-next--1"></div>
        <div class="vl-column-next sb-footer vl-column-next--2"></div>
    </div>
`;w.storyName="vl-grid - responsive";let _=()=>(0,c.qy)`
    <style>
        #story--styles-next-layout-afnemers-grid--grid-column-start-inner {
            .vl-grid-next {
                --vl-column-min-height: 20px;
                grid-template-rows: 20px;
                padding: 1vmax;
            }
        }
        .vl-grid-next {
            --vl-column-min-height: 20px;
            grid-template-rows: 20px;
            padding: 1vmax;

            @media screen and (max-width: ${r.Oh}px) {
                --vl-column-min-height: 5vmax;
            }

            @media screen and (max-width: ${r.gT}px) {
                --vl-column-min-height: 4vmax;
            }

            @media screen and (max-width: ${r.eA}px) {
                --vl-column-min-height: 3vmax;
            }

            .vl-column-next {
                min-height: var(--vl-column-min-height);
                background-color: mediumspringgreen;
                border: lightseagreen 2px solid;
            }
        }
    </style>
    <div class="vl-grid-next">
        <div
            class="vl-column-next vl-column-next--1 vl-column-next--start-12 vl-column-next--m-4 vl-column-next--m-start-9"
        ></div>
        <div
            class="vl-column-next vl-column-next--2 vl-column-next--start-11 vl-column-next--m-4 vl-column-next--m-start-9"
        ></div>
        <div
            class="vl-column-next vl-column-next--3 vl-column-next--start-10 vl-column-next--m-4 vl-column-next--m-start-9"
        ></div>
        <div class="vl-column-next vl-column-next--4 vl-column-next--start-9"></div>
        <div
            class="vl-column-next vl-column-next--5 vl-column-next--start-8 vl-column-next--m-8 vl-column-next--m-start-5"
        ></div>
        <div
            class="vl-column-next vl-column-next--6 vl-column-next--start-7 vl-column-next--m-8 vl-column-next--m-start-5"
        ></div>
        <div
            class="vl-column-next vl-column-next--7 vl-column-next--start-6 vl-column-next--m-8 vl-column-next--m-start-5"
        ></div>
        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5"></div>
        <div
            class="vl-column-next vl-column-next--9 vl-column-next--start-4 vl-column-next--m-start-1 vl-column-next--m-12"
        ></div>
        <div
            class="vl-column-next vl-column-next--10 vl-column-next--start-3 vl-column-next--m-start-1 vl-column-next--m-12"
        ></div>
        <div
            class="vl-column-next vl-column-next--11 vl-column-next--start-2 vl-column-next--m-start-1 vl-column-next--m-12"
        ></div>
        <div class="vl-column-next vl-column-next--12 vl-column-next--start-1"></div>
    </div>
`;_.storyName="vl-grid - column start";let z=()=>(0,c.qy)`
    <style>
        .vl-grid-next {
            --vl-column-min-height: 1vmax;
            grid-template-rows: 30px 30px 30px 30px 60px 60px 60px 30px;

            .vl-column-next {
                background-color: mediumspringgreen;
                border: lightseagreen 2px solid;
            }
        }
    </style>
    <div class="vl-grid-next">
        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5 vl-column-next--justify-self-start">
            &nbsp;justify-self-start&nbsp;
        </div>
        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5 vl-column-next--justify-self-center">
            &nbsp;justify-self-center&nbsp;
        </div>
        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5 vl-column-next--justify-self-end">
            &nbsp;justify-self-end&nbsp;
        </div>
        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5 vl-column-next--justify-self-stretch">
            &nbsp;justify-self-stretch&nbsp;
        </div>
        <div class="vl-column-next vl-column-next--6 vl-column-next--align-self-start">
            &nbsp;align-items-start&nbsp;
        </div>
        <div class="vl-column-next vl-column-next--6"></div>
        <div class="vl-column-next vl-column-next--6 vl-column-next--align-self-center">
            &nbsp;align-items-center&nbsp;
        </div>
        <div class="vl-column-next vl-column-next--6"></div>
        <div class="vl-column-next vl-column-next--6 vl-column-next--align-self-end">&nbsp;align-items-end&nbsp;</div>
        <div class="vl-column-next vl-column-next--6"></div>
        <div class="vl-column-next vl-column-next--6 vl-column-next--align-self-stretch">
            &nbsp;align-items-stretch&nbsp;
        </div>
        <div class="vl-column-next vl-column-next--6"></div>
    </div>
`;z.storyName="vl-grid - justify / align";let E=()=>(0,c.qy)`
    <style>
        form .vl-grid-next .vl-column-next {
            background-color: initial;
            border: initial;
        }
    </style>
    <form>
        <div class="vl-grid-next">
            <div class="vl-column-next vl-column-next--2">
                <vl-form-label-next for="email" label="Email"></vl-form-label-next>
            </div>
            <div class="vl-column-next vl-column-next--10">
                <vl-input-field-next
                    id="email"
                    name="email"
                    block
                    placeholder="Bijv. naam@voorbeeld.be"
                ></vl-input-field-next>
            </div>
            <div class="vl-column-next vl-column-next--2">
                <vl-form-label-next for="name" label="Voornaam"></vl-form-label-next>
            </div>
            <div class="vl-column-next vl-column-next--10">
                <vl-input-field-next id="name" name="name" block placeholder="John"></vl-input-field-next>
            </div>
            <div class="vl-column-next vl-column-next--2">
                <vl-form-label-next for="surname" label="Naam"></vl-form-label-next>
            </div>
            <div class="vl-column-next vl-column-next--10">
                <vl-input-field-next id="surname" name="surname" block placeholder="Doe"></vl-input-field-next>
            </div>
            <div class="vl-column-next vl-column-next--10 vl-column-next--start-3">
                <vl-button-next type="submit">Inschrijven</vl-button-next>
            </div>
        </div>
    </form>
`;E.storyName="vl-grid - in form",w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n        .vl-grid-next {\n            --vl-column-min-height: 8vmax;\n            padding: 1vmax;\n\n            @media screen and (max-width: ${vlMediaScreenMedium}px) {\n                --vl-column-min-height: 5vmax;\n            }\n\n            @media screen and (max-width: ${vlMediaScreenSmall}px) {\n                --vl-column-min-height: 4vmax;\n            }\n\n            @media screen and (max-width: ${vlMediaScreenExtraSmall}px) {\n                --vl-column-min-height: 3vmax;\n            }\n\n            .vl-column-next {\n                min-height: var(--vl-column-min-height);\n                background-color: mediumspringgreen;\n                border: lightseagreen 2px solid;\n            }\n\n            .sb-header {\n                background-color: lightblue;\n            }\n\n            .sb-footer {\n                background-color: lightblue;\n            }\n\n            .sb-main {\n                grid-row: span 3;\n\n                .vl-column-next {\n                    background-color: lightseagreen;\n                }\n            }\n\n            .sb-main__sub {\n                .vl-column-next {\n                    background-color: mediumspringgreen;\n                }\n            }\n        }\n    </style>\n    <div class="vl-grid-next">\n        <div\n            class="vl-column-next sb-header vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-9"\n        ></div>\n        <div\n            class="vl-column-next sb-header vl-column-next--11 vl-column-next--m-9 vl-column-next--s-6 vl-column-next--xs-3"\n        ></div>\n        <div class="sb-main vl-column-next vl-column-next--8 vl-grid-next vl-column-next--m-12">\n            <div class="vl-column-next vl-column-next--5"></div>\n            <div class="vl-column-next vl-column-next--7"></div>\n            <div class="vl-column-next vl-column-next--5"></div>\n            <div class="vl-column-next vl-column-next--7"></div>\n            <div class="sb-main__sub vl-column-next vl-column-next--9 vl-grid-next">\n                <div class="vl-column-next vl-column-next--4"></div>\n                <div class="vl-column-next vl-column-next--4"></div>\n                <div class="vl-column-next vl-column-next--4"></div>\n                <div class="vl-column-next vl-column-next--8"></div>\n                <div class="vl-column-next vl-column-next--4"></div>\n            </div>\n            <div class="vl-column-next vl-column-next--3"></div>\n        </div>\n        <div class="vl-column-next vl-column-next--4 vl-column-next--m-12"></div>\n        <div class="vl-column-next vl-column-next--2 vl-column-next--m-6 vl-column-next--xs-12"></div>\n        <div class="vl-column-next vl-column-next--2 vl-column-next--m-6 vl-column-next--xs-12"></div>\n        <div\n            class="vl-column-next vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-12"\n        ></div>\n        <div\n            class="vl-column-next vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-12"\n        ></div>\n        <div\n            class="vl-column-next vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-12"\n        ></div>\n        <div\n            class="vl-column-next vl-column-next--1 vl-column-next--m-3 vl-column-next--s-6 vl-column-next--xs-12"\n        ></div>\n        <div class="vl-column-next sb-footer vl-column-next--4"></div>\n        <div class="vl-column-next sb-footer vl-column-next--2"></div>\n        <div class="vl-column-next sb-footer vl-column-next--1"></div>\n        <div class="vl-column-next sb-footer vl-column-next--2"></div>\n        <div class="vl-column-next sb-footer vl-column-next--1"></div>\n        <div class="vl-column-next sb-footer vl-column-next--2"></div>\n    </div>\n`',...w.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n        #story--styles-next-layout-afnemers-grid--grid-column-start-inner {\n            .vl-grid-next {\n                --vl-column-min-height: 20px;\n                grid-template-rows: 20px;\n                padding: 1vmax;\n            }\n        }\n        .vl-grid-next {\n            --vl-column-min-height: 20px;\n            grid-template-rows: 20px;\n            padding: 1vmax;\n\n            @media screen and (max-width: ${vlMediaScreenMedium}px) {\n                --vl-column-min-height: 5vmax;\n            }\n\n            @media screen and (max-width: ${vlMediaScreenSmall}px) {\n                --vl-column-min-height: 4vmax;\n            }\n\n            @media screen and (max-width: ${vlMediaScreenExtraSmall}px) {\n                --vl-column-min-height: 3vmax;\n            }\n\n            .vl-column-next {\n                min-height: var(--vl-column-min-height);\n                background-color: mediumspringgreen;\n                border: lightseagreen 2px solid;\n            }\n        }\n    </style>\n    <div class="vl-grid-next">\n        <div\n            class="vl-column-next vl-column-next--1 vl-column-next--start-12 vl-column-next--m-4 vl-column-next--m-start-9"\n        ></div>\n        <div\n            class="vl-column-next vl-column-next--2 vl-column-next--start-11 vl-column-next--m-4 vl-column-next--m-start-9"\n        ></div>\n        <div\n            class="vl-column-next vl-column-next--3 vl-column-next--start-10 vl-column-next--m-4 vl-column-next--m-start-9"\n        ></div>\n        <div class="vl-column-next vl-column-next--4 vl-column-next--start-9"></div>\n        <div\n            class="vl-column-next vl-column-next--5 vl-column-next--start-8 vl-column-next--m-8 vl-column-next--m-start-5"\n        ></div>\n        <div\n            class="vl-column-next vl-column-next--6 vl-column-next--start-7 vl-column-next--m-8 vl-column-next--m-start-5"\n        ></div>\n        <div\n            class="vl-column-next vl-column-next--7 vl-column-next--start-6 vl-column-next--m-8 vl-column-next--m-start-5"\n        ></div>\n        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5"></div>\n        <div\n            class="vl-column-next vl-column-next--9 vl-column-next--start-4 vl-column-next--m-start-1 vl-column-next--m-12"\n        ></div>\n        <div\n            class="vl-column-next vl-column-next--10 vl-column-next--start-3 vl-column-next--m-start-1 vl-column-next--m-12"\n        ></div>\n        <div\n            class="vl-column-next vl-column-next--11 vl-column-next--start-2 vl-column-next--m-start-1 vl-column-next--m-12"\n        ></div>\n        <div class="vl-column-next vl-column-next--12 vl-column-next--start-1"></div>\n    </div>\n`',..._.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n        .vl-grid-next {\n            --vl-column-min-height: 1vmax;\n            grid-template-rows: 30px 30px 30px 30px 60px 60px 60px 30px;\n\n            .vl-column-next {\n                background-color: mediumspringgreen;\n                border: lightseagreen 2px solid;\n            }\n        }\n    </style>\n    <div class="vl-grid-next">\n        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5 vl-column-next--justify-self-start">\n            &nbsp;justify-self-start&nbsp;\n        </div>\n        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5 vl-column-next--justify-self-center">\n            &nbsp;justify-self-center&nbsp;\n        </div>\n        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5 vl-column-next--justify-self-end">\n            &nbsp;justify-self-end&nbsp;\n        </div>\n        <div class="vl-column-next vl-column-next--8 vl-column-next--start-5 vl-column-next--justify-self-stretch">\n            &nbsp;justify-self-stretch&nbsp;\n        </div>\n        <div class="vl-column-next vl-column-next--6 vl-column-next--align-self-start">\n            &nbsp;align-items-start&nbsp;\n        </div>\n        <div class="vl-column-next vl-column-next--6"></div>\n        <div class="vl-column-next vl-column-next--6 vl-column-next--align-self-center">\n            &nbsp;align-items-center&nbsp;\n        </div>\n        <div class="vl-column-next vl-column-next--6"></div>\n        <div class="vl-column-next vl-column-next--6 vl-column-next--align-self-end">&nbsp;align-items-end&nbsp;</div>\n        <div class="vl-column-next vl-column-next--6"></div>\n        <div class="vl-column-next vl-column-next--6 vl-column-next--align-self-stretch">\n            &nbsp;align-items-stretch&nbsp;\n        </div>\n        <div class="vl-column-next vl-column-next--6"></div>\n    </div>\n`',...z.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n        form .vl-grid-next .vl-column-next {\n            background-color: initial;\n            border: initial;\n        }\n    </style>\n    <form>\n        <div class="vl-grid-next">\n            <div class="vl-column-next vl-column-next--2">\n                <vl-form-label-next for="email" label="Email"></vl-form-label-next>\n            </div>\n            <div class="vl-column-next vl-column-next--10">\n                <vl-input-field-next\n                    id="email"\n                    name="email"\n                    block\n                    placeholder="Bijv. naam@voorbeeld.be"\n                ></vl-input-field-next>\n            </div>\n            <div class="vl-column-next vl-column-next--2">\n                <vl-form-label-next for="name" label="Voornaam"></vl-form-label-next>\n            </div>\n            <div class="vl-column-next vl-column-next--10">\n                <vl-input-field-next id="name" name="name" block placeholder="John"></vl-input-field-next>\n            </div>\n            <div class="vl-column-next vl-column-next--2">\n                <vl-form-label-next for="surname" label="Naam"></vl-form-label-next>\n            </div>\n            <div class="vl-column-next vl-column-next--10">\n                <vl-input-field-next id="surname" name="surname" block placeholder="Doe"></vl-input-field-next>\n            </div>\n            <div class="vl-column-next vl-column-next--10 vl-column-next--start-3">\n                <vl-button-next type="submit">Inschrijven</vl-button-next>\n            </div>\n        </div>\n    </form>\n`',...E.parameters?.docs?.source}}};let M=["GridResponsive","GridColumnStart","GridJustifyAlign","GridWithForm"]},"../../node_modules/react-dom/client.js":(n,e,l)=>{var t=l("../../node_modules/react-dom/index.js");e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot}}]);