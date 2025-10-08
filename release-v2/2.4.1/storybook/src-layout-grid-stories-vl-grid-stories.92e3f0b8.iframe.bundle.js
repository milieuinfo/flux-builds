"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1647],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(l,n,e)=>{e.d(n,{f:()=>u});var s=e("../../node_modules/react/index.js"),o=e("../../node_modules/react-dom/client.js"),i=new Map,c=({callback:l,children:n})=>{let e=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{e.current!==l&&(e.current=l,l())},[l]),n},r=async(l,n)=>{let e=await d(n);return new Promise(n=>{e.render(s.createElement(c,{callback:()=>n(null)},l))})},m=(l,n)=>{let e=i.get(l);e&&(e.unmount(),i.delete(l))},d=async l=>{let n=i.get(l);return n||(n=o.createRoot(l),i.set(l,n)),n},t=e("../../node_modules/@storybook/blocks/dist/index.mjs"),a={code:t.XA,a:t.zE,...t.Sw},v=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(l){let{showException:n}=this.props;n(l)}render(){let{hasError:l}=this.state,{children:n}=this.props;return l?null:s.createElement(s.Fragment,null,n)}},u=class{constructor(){this.render=async(l,n,o)=>{let i={...a,...n?.components},c=t.kQ;return new Promise((m,d)=>{e.e(814).then(e.bind(e,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:e})=>r(s.createElement(v,{showException:d,key:Math.random()},s.createElement(e,{components:i},s.createElement(c,{context:l,docsParameter:n}))),o)).then(()=>m())})},this.unmount=l=>{m(l)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(l,n,e)=>{e.d(n,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),e("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=e("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/styles/src/layout/grid/stories/vl-grid.stories.ts":(l,n,e)=>{e.r(n),e.d(n,{GridColumnStart:()=>z,GridJustifyAlign:()=>$,GridResponsive:()=>_,GridWithForm:()=>E,__namedExportsOrder:()=>M,default:()=>S});var s=e("../../libs/components/src/atom/index.ts"),o=e("../../libs/components/src/form/index.ts"),i=e("../../libs/common/src/index.ts"),c=e("../../node_modules/lit-html/lit-html.js"),r=e("../../libs/styles/src/base/var/vl-media-screen.css.ts");e("../../node_modules/react/index.js");var m=e("../../node_modules/react/jsx-runtime.js"),d=e("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),t=e("../../node_modules/@storybook/blocks/dist/index.mjs"),a=e("../../node_modules/@storybook/addon-docs/dist/index.mjs");let v=e.p+"static/media/grid-large.2b733a79.png",u=e.p+"static/media/grid-medium.8b691752.png",g=e.p+"static/media/grid-small.9ef3aff4.png",p=e.p+"static/media/grid-extra-small.584190ed.png",x=e.p+"static/media/css-large.60e20a30.png",h=e.p+"static/media/css-medium.8969258f.png",f=e.p+"static/media/css-small.4c2d4cc9.png",b=e.p+"static/media/css-extra-small.dd47cd47.png";var j=e("../../node_modules/raw-loader/dist/cjs.js!../../libs/styles/src/layout/grid/vl-grid.raw.css");function y(l){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",code:"code",strong:"strong",h3:"h3",pre:"pre"},(0,d.RP)(),l.components),{FluxMetaData:e}=n;return e||function(l,n){throw Error("Expected "+(n?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.W8,{title:"Styles/Layout (afnemers)/grid"}),"\n",(0,m.jsx)(n.h1,{id:"grid",children:"Grid"}),"\n",(0,m.jsx)(e,{id:"styles-layout-afnemers-grid"}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,m.jsxs)(n.ul,{children:["\n",(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:"#doel",children:"Doel"})}),"\n",(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:"#grid-opzet",children:"Grid Opzet"})}),"\n",(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:"#column-opzet",children:"Column Opzet"})}),"\n",(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:"#responsief-voorbeeld",children:"Responsief Voorbeeld"})}),"\n"]}),"\n",(0,m.jsx)(n.h2,{id:"doel",children:"Doel"}),"\n",(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:"vl-grid"})," implementeert een ",(0,m.jsx)(n.a,{href:"https://www.w3schools.com/css/css_rwd_grid.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"12-kolom grid layout"}),". De CSS\nis een specifieke implementatie gebruikmakend van de ",(0,m.jsx)(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Grid Layout"}),",\ndie standaard door ",(0,m.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",target:"_blank",rel:"nofollow noopener noreferrer",children:"browsers"})," voorzien wordt."]}),"\n",(0,m.jsxs)(n.p,{children:["De opzet is responsief, er zijn style-classes voor 4 verschillende scherm groottes: ",(0,m.jsx)(n.strong,{children:"large"})," (>1023px),\n",(0,m.jsx)(n.strong,{children:"medium"})," (<1023px), ",(0,m.jsx)(n.strong,{children:"small"})," (<767px) en ",(0,m.jsx)(n.strong,{children:"extra-small"})," (<500px). De style-classes volgen de naamgeving\nvan CSS-grid, bestaande kennis of documentatie blijft dus representatief. Afwijkingen kunnen desgewenst in de afnemende\ncode voorzien worden door de naamgeving door te trekken: de CSS-grid naamgeving overnemen in\n",(0,m.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case",target:"_blank",rel:"nofollow noopener noreferrer",children:"kebab case"}),"."]}),"\n",(0,m.jsx)(n.h2,{id:"grid-opzet",children:"Grid Opzet"}),"\n",(0,m.jsx)(n.h3,{id:"vl-grid---opzet",children:(0,m.jsx)(n.strong,{children:"vl-grid - opzet"})}),"\n",(0,m.jsxs)(n.p,{children:["Op container niveau - ",(0,m.jsx)(n.code,{children:"vl-grid"})," - wordt m.b.v. de standaard CSS Grid Layout een 12-kolom grid opgezet waarbij de\nwaardes via variabelen worden gezet."]}),"\n",(0,m.jsx)(n.p,{children:"De responsieve kolom opzet zit in aparte bestanden, belangrijk hierbij is dat:"}),"\n",(0,m.jsxs)(n.ul,{children:["\n",(0,m.jsx)(n.li,{children:"de aanpak 'desktop first' is"}),"\n",(0,m.jsx)(n.li,{children:"de media query breedte wordt van groot naar klein gedefinieerd: >1023 (large) / <1023 (medium) /\n<767 (small) / <500 (extra-small)"}),"\n",(0,m.jsx)(n.li,{children:"de grotere hebben dus voorrang op de kleinere, als je enkel de default specifieert wordt dit ook toegepast voor\nde smallere"}),"\n",(0,m.jsx)(n.li,{children:"als je daarnaast bvb. voor 'small' kolom afwijkingen opgeeft dan gelden die ook voor 'extra-small'"}),"\n"]}),"\n",(0,m.jsx)(n.h3,{id:"vl-grid---variabelen",children:(0,m.jsx)(n.strong,{children:"vl-grid - variabelen"})}),"\n",(0,m.jsx)(n.p,{children:"Met onderstaande variabelen kan je grid settings overrulen."}),"\n",(0,m.jsx)(t.kL,{code:j.A,language:"css",dark:!0}),"\n",(0,m.jsx)(n.h3,{id:"vl-grid---code",children:(0,m.jsx)(n.strong,{children:"vl-grid - code"})}),"\n",(0,m.jsx)(t.kL,{code:"import gridRawCss from '!!raw-loader!./vl-grid.raw.css';\nimport { css, unsafeCSS } from 'lit';\nimport { vlMediaScreenExtraSmall, vlMediaScreenMedium, vlMediaScreenSmall } from '../../base/var/vl-media-screen.css';\nimport { columnLargeStyles } from './column/vl-column-l.css';\nimport { columnMediumStyles } from './column/vl-column-m.css';\nimport { columnSmallStyles } from './column/vl-column-s.css';\nimport { columnExtraSmallStyles } from './column/vl-column-xs.css';\nimport { gridLargeStyles } from './grid/vl-grid-l.css';\nimport { gridMediumStyles } from './grid/vl-grid-m.css';\nimport { gridSmallStyles } from './grid/vl-grid-s.css';\nimport { gridExtraSmallStyles } from './grid/vl-grid-xs.css';\n\nexport const vlGridStyles = css`\n    ${unsafeCSS(gridRawCss)}\n    .vl-grid {\n        display: grid;\n        grid-template-columns: repeat(12, 1fr);\n        grid-row-gap: var(--vl-grid-row-gap);\n        grid-column-gap: var(--vl-grid-col-gap);\n\n        .vl-column {\n            ${gridLargeStyles()};\n            ${columnLargeStyles()};\n\n            @media screen and (max-width: ${vlMediaScreenMedium}px) {\n                ${gridMediumStyles()}\n                ${columnMediumStyles()}\n            }\n\n            @media screen and (max-width: ${vlMediaScreenSmall}px) {\n                ${gridSmallStyles()}\n                ${columnSmallStyles()}\n            }\n\n            @media screen and (max-width: ${vlMediaScreenExtraSmall}px) {\n                ${columnExtraSmallStyles()};\n                ${gridExtraSmallStyles()};\n            }\n        }\n    }\n`;\n",language:"ts",dark:!0}),"\n",(0,m.jsx)(n.h3,{id:"vl-grid---justify-items--align-items",children:(0,m.jsx)(n.strong,{children:"vl-grid - justify-items / align-items"})}),"\n",(0,m.jsxs)(n.p,{children:["Op grid niveau worden css-classes voorzien voor uitlijning: ",(0,m.jsxs)(n.strong,{children:["horizontaal met ",(0,m.jsx)(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-items",target:"_blank",rel:"nofollow noopener noreferrer",children:"justify-items"})]}),"\nen ",(0,m.jsxs)(n.strong,{children:["verticaal met ",(0,m.jsx)(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-align-items",target:"_blank",rel:"nofollow noopener noreferrer",children:"align-items"})]}),".\nVolgende classes zijn hiervoor beschikbaar:"]}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{children:"vl-grid--justify-items-start\nvl-grid--justify-items-end\nvl-grid--justify-items-center\nvl-grid--justify-items-stretch\n\nvl-grid--align-items-start\nvl-grid--align-items-end\nvl-grid--align-items-center\nvl-grid--align-items-stretch\n"})}),"\n",(0,m.jsx)(n.h3,{id:"vl-grid---responsive",children:(0,m.jsx)(n.strong,{children:"vl-grid - responsive"})}),"\n",(0,m.jsxs)(n.p,{children:["Op grid niveau kan je voor de uitlijning responsieve afwijkingen gebruiken: ",(0,m.jsx)(n.code,{children:"vl-grid--X-justify-items-start"}),"\nwaarbij X ",(0,m.jsx)(n.code,{children:"[m, s, xs]"})," kan zijn. Als je dus ",(0,m.jsx)(n.code,{children:"vl-grid--s-align-items-center"})," gebruikt zal die kolom enkel\ngecentreerd zijn op smalle (s) en extra-smalle (xs) schermen."]}),"\n",(0,m.jsx)(n.h2,{id:"column-opzet",children:"Column Opzet"}),"\n",(0,m.jsx)(n.h3,{id:"vl-column---kolom",children:(0,m.jsx)(n.strong,{children:"vl-column - kolom"})}),"\n",(0,m.jsxs)(n.p,{children:["Voor het specifiëren van kolommen is er ",(0,m.jsx)(n.code,{children:"vl-column--1"})," t.e.m. ",(0,m.jsx)(n.code,{children:"vl-column--12"})," met de responsieve varianten\n",(0,m.jsx)(n.code,{children:"vl-column--X-N"})," waarbij X [m, s, xs] kan zijn.",(0,m.jsx)("br",{})]}),"\n",(0,m.jsxs)(n.p,{children:["Om de start van een kolom te verschuiven is er ",(0,m.jsx)(n.code,{children:"vl-column--start-1"})," t.e.m. ",(0,m.jsx)(n.code,{children:"vl-column--start-12"})," met de\nresponsieve varianten ",(0,m.jsx)(n.code,{children:"vl-column--X-start-N"})," waarbij X [m, s, xs] kan zijn. Een kolom met ",(0,m.jsx)(n.code,{children:"vl-column--start-2"})," zal starten in de tweede kolom en N kolommen breed zijn, zoals gedefinieerd met ",(0,m.jsx)(n.code,{children:"vl-column--N"}),"."]}),"\n",(0,m.jsx)(t.Hl,{of:z}),"\n",(0,m.jsx)(n.h3,{id:"vl-column---justify-self--align-self",children:(0,m.jsx)(n.strong,{children:"vl-column - justify-self / align-self"})}),"\n",(0,m.jsxs)(n.p,{children:["Conform het grid niveau worden er css-classes voorzien voor uitlijning in een cel: ",(0,m.jsxs)(n.strong,{children:["horizontaal met\n",(0,m.jsx)(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-justify-self",target:"_blank",rel:"nofollow noopener noreferrer",children:"justify-self"})]}),"\nen ",(0,m.jsxs)(n.strong,{children:["verticaal met ",(0,m.jsx)(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-align-items",target:"_blank",rel:"nofollow noopener noreferrer",children:"align-self"})]}),".\nVolgende classes zijn hiervoor beschikbaar:"]}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{children:"vl-column--justify-self-start\nvl-column--justify-self-end\nvl-column--justify-self-center\nvl-column--justify-self-stretch\n\nvl-column--align-self-start\nvl-column--align-self-end\nvl-column--align-self-center\nvl-column--align-self-stretch\n"})}),"\n",(0,m.jsx)(t.Hl,{of:$}),"\n",(0,m.jsx)(n.h3,{id:"vl-column---responsive",children:(0,m.jsx)(n.strong,{children:"vl-column - responsive"})}),"\n",(0,m.jsxs)(n.p,{children:["Ook de responsieve varianten zijn beschikbaar: bvb. ",(0,m.jsx)(n.code,{children:"vl-grid--X-justify-self-start"})," en\n",(0,m.jsx)(n.code,{children:"vl-column--X-align-self-start"}),"."]}),"\n",(0,m.jsx)(n.h2,{id:"responsief-voorbeeld",children:"Responsief Voorbeeld"}),"\n",(0,m.jsx)(n.h3,{id:"large---default-1023px",children:"Large - default (>1023px)"}),"\n",(0,m.jsx)("img",{src:v,alt:"grid large",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)("img",{src:x,alt:"css large",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)(n.h3,{id:"medium-1023",children:"Medium (<1023)"}),"\n",(0,m.jsx)("img",{src:u,alt:"grid medium",style:{maxWidth:"500px"}}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)("img",{src:h,alt:"css medium",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)(n.h3,{id:"small-767",children:"Small (<767)"}),"\n",(0,m.jsx)("img",{src:g,alt:"grid small",style:{maxWidth:"400px"}}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)("img",{src:f,alt:"css small",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)(n.h3,{id:"extra-small-500",children:"Extra-Small (<500)"}),"\n",(0,m.jsx)("img",{src:p,alt:"grid extra small",style:{maxWidth:"300px"}}),"\n",(0,m.jsx)("br",{}),"\n",(0,m.jsx)("img",{src:b,alt:"css extra small",style:{maxWidth:"600px"}}),"\n",(0,m.jsx)(n.h2,{id:"form-grid",children:"Form Grid"}),"\n",(0,m.jsxs)(n.p,{children:["Vorige implementaties van het grid zoals ",(0,m.jsx)(n.code,{children:'is="vl-form-grid'})," of ",(0,m.jsx)(n.code,{children:'class="vl-form-grid"'})," zijn deprecated en worden vervangen door ",(0,m.jsx)(n.code,{children:'class="vl-grid"'}),":"]}),"\n",(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{children:'<form>\n  <div class="vl-grid">...</div>\n</form>\n'})}),"\n",(0,m.jsx)(t.Hl,{of:E})]})}var k=e("../../node_modules/lit/index.js");let w=(0,k.AH)`
    .vl-grid {
        padding: 2.5vmax 1vmax 1vmax;
    }

    .vl-column {
        position: relative;
    }

    .vl-column::before {
        position: absolute;
        color: #555555;
        margin-left: 0.5rem;
        font-weight: bold;
    }

    .vl-column {
        &[class*='n--1']::before {
            content: '1';
        }

        &[class*='n--2']::before {
            content: '2';
        }

        &[class*='n--3']::before {
            content: '3';
        }

        &[class*='n--4']::before {
            content: '4';
        }

        &[class*='n--5']::before {
            content: '5';
        }

        &[class*='n--6']::before {
            content: '6';
        }

        &[class*='n--7']::before {
            content: '7';
        }

        &[class*='n--8']::before {
            content: '8';
        }

        &[class*='n--9']::before {
            content: '9';
        }

        &[class*='n--10']::before {
            content: '10';
        }

        &[class*='n--11']::before {
            content: '11';
        }

        &[class*='n--12']::before {
            content: '12';
        }

        @media screen and (max-width: ${r.Oh}px) {
            &[class*='m-1']::before {
                content: 'm-1';
            }

            &[class*='m-2']::before {
                content: 'm-2';
            }

            &[class*='m-3']::before {
                content: 'm-3';
            }

            &[class*='m-4']::before {
                content: 'm-4';
            }

            &[class*='m-5']::before {
                content: 'm-5';
            }

            &[class*='m-6']::before {
                content: 'm-6';
            }

            &[class*='m-7']::before {
                content: 'm-7';
            }

            &[class*='m-8']::before {
                content: 'm-8';
            }

            &[class*='m-9']::before {
                content: 'm-9';
            }

            &[class*='m-10']::before {
                content: 'm-10';
            }

            &[class*='m-11']::before {
                content: 'm-11';
            }

            &[class*='m-12']::before {
                content: 'm-12';
            }

            @media screen and (max-width: ${r.gT}px) {
                &[class*='s-1']::before {
                    content: 's-1';
                }

                &[class*='s-2']::before {
                    content: 's-2';
                }

                &[class*='s-3']::before {
                    content: 's-3';
                }

                &[class*='s-4']::before {
                    content: 's-4';
                }

                &[class*='s-5']::before {
                    content: 's-5';
                }

                &[class*='s-6']::before {
                    content: 's-6';
                }

                &[class*='s-7']::before {
                    content: 's-7';
                }

                &[class*='s-8']::before {
                    content: 's-8';
                }

                &[class*='s-9']::before {
                    content: 's-9';
                }

                &[class*='s-10']::before {
                    content: 's-10';
                }

                &[class*='s-11']::before {
                    content: 's-11';
                }

                &[class*='s-12']::before {
                    content: 's-12';
                }
            }

            @media screen and (max-width: ${r.eA}px) {
                &[class*='xs-1']::before {
                    content: 'xs-1';
                }

                &[class*='xs-2']::before {
                    content: 'xs-2';
                }

                &[class*='xs-3']::before {
                    content: 'xs-3';
                }

                &[class*='xs-4']::before {
                    content: 'xs-4';
                }

                &[class*='xs-5']::before {
                    content: 'xs-5';
                }

                &[class*='xs-6']::before {
                    content: 'xs-6';
                }

                &[class*='xs-7']::before {
                    content: 'xs-7';
                }

                &[class*='xs-8']::before {
                    content: 'xs-8';
                }

                &[class*='xs-9']::before {
                    content: 'xs-9';
                }

                &[class*='xs-10']::before {
                    content: 'xs-10';
                }

                &[class*='xs-11']::before {
                    content: 'xs-11';
                }

                &[class*='xs-12']::before {
                    content: 'xs-12';
                }
            }
        }
    }
`;(0,i.gy)([o.Ex,o.Ys,s.Yk]);let S={id:"styles-layout-afnemers-grid",title:"Styles/Layout (afnemers)/grid",tags:["autodocs"],parameters:{docs:{page:function(l={}){let{wrapper:n}=Object.assign({},(0,d.RP)(),l.components);return n?(0,m.jsx)(n,Object.assign({},l,{children:(0,m.jsx)(y,l)})):y(l)}}}},_=()=>(0,c.qy)`
    <style>
        .vl-grid.grid-responsive-story {
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

            .vl-column {
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

                .vl-column {
                    background-color: lightseagreen;
                }
            }

            .sb-main__sub {
                .vl-column {
                    background-color: mediumspringgreen;
                }
            }

            ${w}
        }
    </style>
    <div class="vl-grid grid-responsive-story">
        <div class="vl-column sb-header vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-9"></div>
        <div class="vl-column sb-header vl-column--11 vl-column--m-9 vl-column--s-6 vl-column--xs-3"></div>
        <div class="sb-main vl-column vl-column--8 vl-grid vl-column--m-12">
            <div class="vl-column vl-column--5"></div>
            <div class="vl-column vl-column--7"></div>
            <div class="vl-column vl-column--5"></div>
            <div class="vl-column vl-column--7"></div>
            <div class="sb-main__sub vl-column vl-column--9 vl-grid">
                <div class="vl-column vl-column--4"></div>
                <div class="vl-column vl-column--4"></div>
                <div class="vl-column vl-column--4"></div>
                <div class="vl-column vl-column--8"></div>
                <div class="vl-column vl-column--4"></div>
            </div>
            <div class="vl-column vl-column--3"></div>
        </div>
        <div class="vl-column vl-column--4 vl-column--m-12"></div>
        <div class="vl-column vl-column--2 vl-column--m-6 vl-column--xs-12"></div>
        <div class="vl-column vl-column--2 vl-column--m-6 vl-column--xs-12"></div>
        <div class="vl-column vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-12"></div>
        <div class="vl-column vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-12"></div>
        <div class="vl-column vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-12"></div>
        <div class="vl-column vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-12"></div>
        <div class="vl-column sb-footer vl-column--4"></div>
        <div class="vl-column sb-footer vl-column--2"></div>
        <div class="vl-column sb-footer vl-column--1"></div>
        <div class="vl-column sb-footer vl-column--2"></div>
        <div class="vl-column sb-footer vl-column--1"></div>
        <div class="vl-column sb-footer vl-column--2"></div>
    </div>
`;_.storyName="vl-grid - responsive";let z=()=>(0,c.qy)`
    <style>
        #story--styles-layout-afnemers-grid--grid-column-start-inner {
            .vl-grid {
                --vl-column-min-height: 20px;
                grid-template-rows: 20px;
                padding: 1vmax;
            }
        }

        .vl-grid {
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

            .vl-column {
                min-height: var(--vl-column-min-height);
                background-color: mediumspringgreen;
                border: lightseagreen 2px solid;
            }
        }
    </style>
    <div class="vl-grid">
        <div class="vl-column vl-column--1 vl-column--start-12 vl-column--m-4 vl-column--m-start-9"></div>
        <div class="vl-column vl-column--2 vl-column--start-11 vl-column--m-4 vl-column--m-start-9"></div>
        <div class="vl-column vl-column--3 vl-column--start-10 vl-column--m-4 vl-column--m-start-9"></div>
        <div class="vl-column vl-column--4 vl-column--start-9"></div>
        <div class="vl-column vl-column--5 vl-column--start-8 vl-column--m-8 vl-column--m-start-5"></div>
        <div class="vl-column vl-column--6 vl-column--start-7 vl-column--m-8 vl-column--m-start-5"></div>
        <div class="vl-column vl-column--7 vl-column--start-6 vl-column--m-8 vl-column--m-start-5"></div>
        <div class="vl-column vl-column--8 vl-column--start-5"></div>
        <div class="vl-column vl-column--9 vl-column--start-4 vl-column--m-start-1 vl-column--m-12"></div>
        <div class="vl-column vl-column--10 vl-column--start-3 vl-column--m-start-1 vl-column--m-12"></div>
        <div class="vl-column vl-column--11 vl-column--start-2 vl-column--m-start-1 vl-column--m-12"></div>
        <div class="vl-column vl-column--12 vl-column--start-1"></div>
    </div>
`;z.storyName="vl-grid - column start";let $=()=>(0,c.qy)`
    <style>
        .vl-grid {
            --vl-column-min-height: 1vmax;
            grid-template-rows: 30px 30px 30px 30px 60px 60px 60px 30px;

            .vl-column {
                background-color: mediumspringgreen;
                border: lightseagreen 2px solid;
            }
        }
    </style>
    <div class="vl-grid">
        <div class="vl-column vl-column--8 vl-column--start-5 vl-column--justify-self-start">
            &nbsp;justify-self-start&nbsp;
        </div>
        <div class="vl-column vl-column--8 vl-column--start-5 vl-column--justify-self-center">
            &nbsp;justify-self-center&nbsp;
        </div>
        <div class="vl-column vl-column--8 vl-column--start-5 vl-column--justify-self-end">
            &nbsp;justify-self-end&nbsp;
        </div>
        <div class="vl-column vl-column--8 vl-column--start-5 vl-column--justify-self-stretch">
            &nbsp;justify-self-stretch&nbsp;
        </div>
        <div class="vl-column vl-column--6 vl-column--align-self-start">&nbsp;align-items-start&nbsp;</div>
        <div class="vl-column vl-column--6"></div>
        <div class="vl-column vl-column--6 vl-column--align-self-center">&nbsp;align-items-center&nbsp;</div>
        <div class="vl-column vl-column--6"></div>
        <div class="vl-column vl-column--6 vl-column--align-self-end">&nbsp;align-items-end&nbsp;</div>
        <div class="vl-column vl-column--6"></div>
        <div class="vl-column vl-column--6 vl-column--align-self-stretch">&nbsp;align-items-stretch&nbsp;</div>
        <div class="vl-column vl-column--6"></div>
    </div>
`;$.storyName="vl-grid - justify / align";let E=()=>(0,c.qy)`
    <style>
        form .vl-grid .vl-column {
            background-color: initial;
            border: initial;
        }
    </style>
    <form>
        <div class="vl-grid">
            <div class="vl-column vl-column--2">
                <vl-form-label for="email" label="Email"></vl-form-label>
            </div>
            <div class="vl-column vl-column--10">
                <vl-input-field id="email" name="email" block placeholder="Bijv. naam@voorbeeld.be"></vl-input-field>
            </div>
            <div class="vl-column vl-column--2">
                <vl-form-label for="name" label="Voornaam"></vl-form-label>
            </div>
            <div class="vl-column vl-column--10">
                <vl-input-field id="name" name="name" block placeholder="John"></vl-input-field>
            </div>
            <div class="vl-column vl-column--2">
                <vl-form-label for="surname" label="Naam"></vl-form-label>
            </div>
            <div class="vl-column vl-column--10">
                <vl-input-field id="surname" name="surname" block placeholder="Doe"></vl-input-field>
            </div>
            <div class="vl-column vl-column--10 vl-column--start-3">
                <vl-button type="submit">Inschrijven</vl-button>
            </div>
        </div>
    </form>
`;E.storyName="vl-grid - in form",_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n        .vl-grid.grid-responsive-story {\n            --vl-column-min-height: 8vmax;\n            padding: 1vmax;\n\n            @media screen and (max-width: ${vlMediaScreenMedium}px) {\n                --vl-column-min-height: 5vmax;\n            }\n\n            @media screen and (max-width: ${vlMediaScreenSmall}px) {\n                --vl-column-min-height: 4vmax;\n            }\n\n            @media screen and (max-width: ${vlMediaScreenExtraSmall}px) {\n                --vl-column-min-height: 3vmax;\n            }\n\n            .vl-column {\n                min-height: var(--vl-column-min-height);\n                background-color: mediumspringgreen;\n                border: lightseagreen 2px solid;\n            }\n\n            .sb-header {\n                background-color: lightblue;\n            }\n\n            .sb-footer {\n                background-color: lightblue;\n            }\n\n            .sb-main {\n                grid-row: span 3;\n\n                .vl-column {\n                    background-color: lightseagreen;\n                }\n            }\n\n            .sb-main__sub {\n                .vl-column {\n                    background-color: mediumspringgreen;\n                }\n            }\n\n            ${gridStoriesResponsiveCss}\n        }\n    </style>\n    <div class="vl-grid grid-responsive-story">\n        <div class="vl-column sb-header vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-9"></div>\n        <div class="vl-column sb-header vl-column--11 vl-column--m-9 vl-column--s-6 vl-column--xs-3"></div>\n        <div class="sb-main vl-column vl-column--8 vl-grid vl-column--m-12">\n            <div class="vl-column vl-column--5"></div>\n            <div class="vl-column vl-column--7"></div>\n            <div class="vl-column vl-column--5"></div>\n            <div class="vl-column vl-column--7"></div>\n            <div class="sb-main__sub vl-column vl-column--9 vl-grid">\n                <div class="vl-column vl-column--4"></div>\n                <div class="vl-column vl-column--4"></div>\n                <div class="vl-column vl-column--4"></div>\n                <div class="vl-column vl-column--8"></div>\n                <div class="vl-column vl-column--4"></div>\n            </div>\n            <div class="vl-column vl-column--3"></div>\n        </div>\n        <div class="vl-column vl-column--4 vl-column--m-12"></div>\n        <div class="vl-column vl-column--2 vl-column--m-6 vl-column--xs-12"></div>\n        <div class="vl-column vl-column--2 vl-column--m-6 vl-column--xs-12"></div>\n        <div class="vl-column vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-12"></div>\n        <div class="vl-column vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-12"></div>\n        <div class="vl-column vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-12"></div>\n        <div class="vl-column vl-column--1 vl-column--m-3 vl-column--s-6 vl-column--xs-12"></div>\n        <div class="vl-column sb-footer vl-column--4"></div>\n        <div class="vl-column sb-footer vl-column--2"></div>\n        <div class="vl-column sb-footer vl-column--1"></div>\n        <div class="vl-column sb-footer vl-column--2"></div>\n        <div class="vl-column sb-footer vl-column--1"></div>\n        <div class="vl-column sb-footer vl-column--2"></div>\n    </div>\n`',..._.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n        #story--styles-layout-afnemers-grid--grid-column-start-inner {\n            .vl-grid {\n                --vl-column-min-height: 20px;\n                grid-template-rows: 20px;\n                padding: 1vmax;\n            }\n        }\n\n        .vl-grid {\n            --vl-column-min-height: 20px;\n            grid-template-rows: 20px;\n            padding: 1vmax;\n\n            @media screen and (max-width: ${vlMediaScreenMedium}px) {\n                --vl-column-min-height: 5vmax;\n            }\n\n            @media screen and (max-width: ${vlMediaScreenSmall}px) {\n                --vl-column-min-height: 4vmax;\n            }\n\n            @media screen and (max-width: ${vlMediaScreenExtraSmall}px) {\n                --vl-column-min-height: 3vmax;\n            }\n\n            .vl-column {\n                min-height: var(--vl-column-min-height);\n                background-color: mediumspringgreen;\n                border: lightseagreen 2px solid;\n            }\n        }\n    </style>\n    <div class="vl-grid">\n        <div class="vl-column vl-column--1 vl-column--start-12 vl-column--m-4 vl-column--m-start-9"></div>\n        <div class="vl-column vl-column--2 vl-column--start-11 vl-column--m-4 vl-column--m-start-9"></div>\n        <div class="vl-column vl-column--3 vl-column--start-10 vl-column--m-4 vl-column--m-start-9"></div>\n        <div class="vl-column vl-column--4 vl-column--start-9"></div>\n        <div class="vl-column vl-column--5 vl-column--start-8 vl-column--m-8 vl-column--m-start-5"></div>\n        <div class="vl-column vl-column--6 vl-column--start-7 vl-column--m-8 vl-column--m-start-5"></div>\n        <div class="vl-column vl-column--7 vl-column--start-6 vl-column--m-8 vl-column--m-start-5"></div>\n        <div class="vl-column vl-column--8 vl-column--start-5"></div>\n        <div class="vl-column vl-column--9 vl-column--start-4 vl-column--m-start-1 vl-column--m-12"></div>\n        <div class="vl-column vl-column--10 vl-column--start-3 vl-column--m-start-1 vl-column--m-12"></div>\n        <div class="vl-column vl-column--11 vl-column--start-2 vl-column--m-start-1 vl-column--m-12"></div>\n        <div class="vl-column vl-column--12 vl-column--start-1"></div>\n    </div>\n`',...z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n        .vl-grid {\n            --vl-column-min-height: 1vmax;\n            grid-template-rows: 30px 30px 30px 30px 60px 60px 60px 30px;\n\n            .vl-column {\n                background-color: mediumspringgreen;\n                border: lightseagreen 2px solid;\n            }\n        }\n    </style>\n    <div class="vl-grid">\n        <div class="vl-column vl-column--8 vl-column--start-5 vl-column--justify-self-start">\n            &nbsp;justify-self-start&nbsp;\n        </div>\n        <div class="vl-column vl-column--8 vl-column--start-5 vl-column--justify-self-center">\n            &nbsp;justify-self-center&nbsp;\n        </div>\n        <div class="vl-column vl-column--8 vl-column--start-5 vl-column--justify-self-end">\n            &nbsp;justify-self-end&nbsp;\n        </div>\n        <div class="vl-column vl-column--8 vl-column--start-5 vl-column--justify-self-stretch">\n            &nbsp;justify-self-stretch&nbsp;\n        </div>\n        <div class="vl-column vl-column--6 vl-column--align-self-start">&nbsp;align-items-start&nbsp;</div>\n        <div class="vl-column vl-column--6"></div>\n        <div class="vl-column vl-column--6 vl-column--align-self-center">&nbsp;align-items-center&nbsp;</div>\n        <div class="vl-column vl-column--6"></div>\n        <div class="vl-column vl-column--6 vl-column--align-self-end">&nbsp;align-items-end&nbsp;</div>\n        <div class="vl-column vl-column--6"></div>\n        <div class="vl-column vl-column--6 vl-column--align-self-stretch">&nbsp;align-items-stretch&nbsp;</div>\n        <div class="vl-column vl-column--6"></div>\n    </div>\n`',...$.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n        form .vl-grid .vl-column {\n            background-color: initial;\n            border: initial;\n        }\n    </style>\n    <form>\n        <div class="vl-grid">\n            <div class="vl-column vl-column--2">\n                <vl-form-label for="email" label="Email"></vl-form-label>\n            </div>\n            <div class="vl-column vl-column--10">\n                <vl-input-field id="email" name="email" block placeholder="Bijv. naam@voorbeeld.be"></vl-input-field>\n            </div>\n            <div class="vl-column vl-column--2">\n                <vl-form-label for="name" label="Voornaam"></vl-form-label>\n            </div>\n            <div class="vl-column vl-column--10">\n                <vl-input-field id="name" name="name" block placeholder="John"></vl-input-field>\n            </div>\n            <div class="vl-column vl-column--2">\n                <vl-form-label for="surname" label="Naam"></vl-form-label>\n            </div>\n            <div class="vl-column vl-column--10">\n                <vl-input-field id="surname" name="surname" block placeholder="Doe"></vl-input-field>\n            </div>\n            <div class="vl-column vl-column--10 vl-column--start-3">\n                <vl-button type="submit">Inschrijven</vl-button>\n            </div>\n        </div>\n    </form>\n`',...E.parameters?.docs?.source}}};let M=["GridResponsive","GridColumnStart","GridJustifyAlign","GridWithForm"]},"../../node_modules/react-dom/client.js":(l,n,e)=>{var s=e("../../node_modules/react-dom/index.js");n.createRoot=s.createRoot,n.hydrateRoot=s.hydrateRoot}}]);