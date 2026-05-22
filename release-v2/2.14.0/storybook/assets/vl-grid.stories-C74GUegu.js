import{u as p,j as l,M as h,S as u,cU as x,C as m,cV as t,E as a,cW as v,i as f,x as r,r as b,b as j,V as y,d as k}from"./iframe-D9dm7PbY.js";import"./vl-checkbox.component-CTssVSja.js";import"./vl-datepicker.component-BdyOMgdW.js";import"./vl-fieldset.component-BtuuUfav.js";import"./vl-input-field-masked.component-B41Wbgbh.js";import"./vl-radio.component-BJRVPCas.js";import"./vl-radio-group.component-BOLoNZwp.js";import"./vl-select.component-CVn7Sb7E.js";import"./vl-select-rich.component-BEDJuxRx.js";import"./vl-textarea.component-DoL2u81l.js";import"./vl-textarea-rich.component-CiD6zwd0.js";import"./vl-upload.component-anH3-fcY.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-upload-progress.component-BSxlhh7Y.js";const S=""+new URL("grid-large-uKz8Dn73.png",import.meta.url).href,w=""+new URL("grid-medium-DzNcUqr3.png",import.meta.url).href,z=""+new URL("grid-small-C8fouyyk.png",import.meta.url).href,M=""+new URL("grid-extra-small-CfB2bL1s.png",import.meta.url).href,C=""+new URL("css-large-BCbHcJ27.png",import.meta.url).href,$=""+new URL("css-medium-B1Gfoyhz.png",import.meta.url).href,L=""+new URL("css-small-DRqYjDPH.png",import.meta.url).href,E=""+new URL("css-extra-small-DJX17tHm.png",import.meta.url).href,R=`import gridRawCss from './vl-grid.raw.css?raw';
import { css, CSSResult, unsafeCSS } from 'lit';
import { vlMediaScreenExtraSmall, vlMediaScreenMedium, vlMediaScreenSmall } from '../../base/var/vl-media-screen.css';
import { columnLargeStyles } from './column/vl-column-l.css';
import { columnMediumStyles } from './column/vl-column-m.css';
import { columnSmallStyles } from './column/vl-column-s.css';
import { columnExtraSmallStyles } from './column/vl-column-xs.css';
import { gridLargeStyles } from './grid/vl-grid-l.css';
import { gridMediumStyles } from './grid/vl-grid-m.css';
import { gridSmallStyles } from './grid/vl-grid-s.css';
import { gridExtraSmallStyles } from './grid/vl-grid-xs.css';

export const vlGridStyles: CSSResult = css\`
    \${unsafeCSS(gridRawCss)}
    .vl-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-row-gap: var(--vl-grid-row-gap);
        grid-column-gap: var(--vl-grid-col-gap);

        .vl-column {
            \${gridLargeStyles()};
            \${columnLargeStyles()};

            @media screen and (max-width: \${vlMediaScreenMedium}px) {
                \${gridMediumStyles()}
                \${columnMediumStyles()}
            }

            @media screen and (max-width: \${vlMediaScreenSmall}px) {
                \${gridSmallStyles()}
                \${columnSmallStyles()}
            }

            @media screen and (max-width: \${vlMediaScreenExtraSmall}px) {
                \${columnExtraSmallStyles()};
                \${gridExtraSmallStyles()};
            }
        }
    }
\`;
`;function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...e.components},{FluxComponentMetaData:d}=n;return d||D("FluxComponentMetaData"),l.jsxs(l.Fragment,{children:[l.jsx(h,{title:"Styles/Layout (afnemers)/grid"}),`
`,l.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,l.jsx(d,{id:"styles-layout-grid"}),`
`,l.jsx(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),`
`,l.jsxs(n.ul,{children:[`
`,l.jsx(n.li,{children:l.jsx(n.a,{href:"#doel",children:"Doel"})}),`
`,l.jsx(n.li,{children:l.jsx(n.a,{href:"#niet-vl-grid-in-vl-grid",children:"Niet: vl-grid in vl-grid"})}),`
`,l.jsx(n.li,{children:l.jsx(n.a,{href:"#grid-opzet",children:"Grid Opzet"})}),`
`,l.jsx(n.li,{children:l.jsx(n.a,{href:"#column-opzet",children:"Column Opzet"})}),`
`,l.jsx(n.li,{children:l.jsx(n.a,{href:"#responsief-voorbeeld",children:"Responsief Voorbeeld"})}),`
`]}),`
`,l.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,l.jsxs(n.p,{children:[l.jsx(n.code,{children:"vl-grid"})," implementeert een ",l.jsx(n.a,{href:"https://www.w3schools.com/css/css_rwd_grid.asp",rel:"nofollow",children:"12-kolom grid layout"}),`. De CSS
is een specifieke implementatie gebruikmakend van de `,l.jsx(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",rel:"nofollow",children:"CSS Grid Layout"}),`,
die standaard door `,l.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"browsers"})," voorzien wordt."]}),`
`,l.jsxs(n.p,{children:["De opzet is responsief, er zijn style-classes voor 4 verschillende scherm groottes: ",l.jsx(n.strong,{children:"large"}),` (>1023px),
`,l.jsx(n.strong,{children:"medium"})," (<1023px), ",l.jsx(n.strong,{children:"small"})," (<767px) en ",l.jsx(n.strong,{children:"extra-small"}),` (<500px). De style-classes volgen de naamgeving
van CSS-grid, bestaande kennis of documentatie blijft dus representatief. Afwijkingen kunnen desgewenst in de afnemende
code voorzien worden door de naamgeving door te trekken: de CSS-grid naamgeving overnemen in
`,l.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case",rel:"nofollow",children:"kebab case"}),"."]}),`
`,l.jsx(n.h2,{id:"niet-vl-grid-in-vl-grid",children:"Niet: vl-grid in vl-grid"}),`
`,l.jsx(n.p,{children:`Een 12-kolom grid systeem is bedoeld als layout framework voor je pagina, vaak om responsiviteit te ondersteunen.
Als je binnen één grid-cel opnieuw een volledig 12-kolom grid nodig hebt, suggereert dat meestal één van deze zaken:`}),`
`,l.jsxs(n.ul,{children:[`
`,l.jsxs(n.li,{children:[l.jsx(n.strong,{children:"je cel is te complex"}),` - misschien moet die content een eigen component zijn met interne layout-logica die niet
via het grid-systeem werkt`]}),`
`,l.jsxs(n.li,{children:[l.jsx(n.strong,{children:"je design is inconsistent"}),` - als verschillende niveaus andere grid-opdeling nodig hebben, heb je misschien geen
echt grid-systeem maar ad-hoc layouts`]}),`
`,l.jsxs(n.li,{children:[l.jsx(n.strong,{children:"je hebt geen vl-grid nodig maar vl-group"}),` - binnen een kolom wil je vaak gewoon items naast elkaar, daarvoor is
een vol grid overkill`]}),`
`]}),`
`,l.jsxs(n.blockquote,{children:[`
`,l.jsx(n.p,{children:`Opmerking: Technisch is er niets mis met een (css) grid in een (css) grid te steken. Conceptueel is de vl-grid
component echter een concrete technische implementatie van een 12-kolom layout, door die te nesten krijg je een
144-kolom layout, dat is nooit de bedoeling!`}),`
`]}),`
`,l.jsx(n.h2,{id:"grid-opzet",children:"Grid Opzet"}),`
`,l.jsx(n.h3,{id:"vl-grid---opzet",children:l.jsx(n.strong,{children:"vl-grid - opzet"})}),`
`,l.jsxs(n.p,{children:["Op container niveau - ",l.jsx(n.code,{children:"vl-grid"}),` - wordt m.b.v. de standaard CSS Grid Layout een 12-kolom grid opgezet waarbij de
waardes via variabelen worden gezet.`]}),`
`,l.jsx(n.p,{children:"De responsieve kolom opzet zit in aparte bestanden, belangrijk hierbij is dat:"}),`
`,l.jsxs(n.ul,{children:[`
`,l.jsx(n.li,{children:"de aanpak 'desktop first' is"}),`
`,l.jsx(n.li,{children:`de media query breedte wordt van groot naar klein gedefinieerd: >1023 (large) / <1023 (medium) /
<767 (small) / <500 (extra-small)`}),`
`,l.jsx(n.li,{children:`de grotere hebben dus voorrang op de kleinere, als je enkel de default specifieert wordt dit ook toegepast voor
de smallere`}),`
`,l.jsx(n.li,{children:"als je daarnaast bvb. voor 'small' kolom afwijkingen opgeeft dan gelden die ook voor 'extra-small'"}),`
`]}),`
`,l.jsx(n.h3,{id:"vl-grid---variabelen",children:l.jsx(n.strong,{children:"vl-grid - variabelen"})}),`
`,l.jsx(n.p,{children:"Met onderstaande variabelen kan je grid settings overrulen."}),`
`,l.jsx(u,{code:x,language:"css",dark:!0}),`
`,l.jsx(n.h3,{id:"vl-grid---code",children:l.jsx(n.strong,{children:"vl-grid - code"})}),`
`,l.jsx(u,{code:R,language:"ts",dark:!0}),`
`,l.jsx(n.h3,{id:"vl-grid---justify-items--align-items",children:l.jsx(n.strong,{children:"vl-grid - justify-items / align-items"})}),`
`,l.jsxs(n.p,{children:["Op grid niveau worden css-classes voorzien voor uitlijning: ",l.jsxs(n.strong,{children:["horizontaal met ",l.jsx(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-items",rel:"nofollow",children:"justify-items"})]}),`
en `,l.jsxs(n.strong,{children:["verticaal met ",l.jsx(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-align-items",rel:"nofollow",children:"align-items"})]}),`.
Volgende classes zijn hiervoor beschikbaar:`]}),`
`,l.jsx(n.pre,{children:l.jsx(n.code,{children:`vl-grid--justify-items-start
vl-grid--justify-items-end
vl-grid--justify-items-center
vl-grid--justify-items-stretch

vl-grid--align-items-start
vl-grid--align-items-end
vl-grid--align-items-center
vl-grid--align-items-stretch
`})}),`
`,l.jsx(n.h3,{id:"vl-grid---responsive",children:l.jsx(n.strong,{children:"vl-grid - responsive"})}),`
`,l.jsxs(n.p,{children:["Op grid niveau kan je voor de uitlijning responsieve afwijkingen gebruiken: ",l.jsx(n.code,{children:"vl-grid--X-justify-items-start"}),`
waarbij X `,l.jsx(n.code,{children:"[m, s, xs]"})," kan zijn. Als je dus ",l.jsx(n.code,{children:"vl-grid--s-align-items-center"}),` gebruikt zal die kolom enkel
gecentreerd zijn op smalle (s) en extra-smalle (xs) schermen.`]}),`
`,l.jsx(n.h2,{id:"column-opzet",children:"Column Opzet"}),`
`,l.jsx(n.h3,{id:"vl-column---kolom",children:l.jsx(n.strong,{children:"vl-column - kolom"})}),`
`,l.jsxs(n.p,{children:["Voor het specifiëren van kolommen is er ",l.jsx(n.code,{children:"vl-column--1"})," t.e.m. ",l.jsx(n.code,{children:"vl-column--12"}),` met de responsieve varianten
`,l.jsx(n.code,{children:"vl-column--X-N"})," waarbij X [m, s, xs] kan zijn.",l.jsx("br",{})]}),`
`,l.jsxs(n.p,{children:["Om de start van een kolom te verschuiven is er ",l.jsx(n.code,{children:"vl-column--start-1"})," t.e.m. ",l.jsx(n.code,{children:"vl-column--start-12"}),` met de
responsieve varianten `,l.jsx(n.code,{children:"vl-column--X-start-N"})," waarbij X [m, s, xs] kan zijn. Een kolom met ",l.jsx(n.code,{children:"vl-column--start-2"})," zal starten in de tweede kolom en N kolommen breed zijn, zoals gedefinieerd met ",l.jsx(n.code,{children:"vl-column--N"}),"."]}),`
`,l.jsxs(n.p,{children:["Om een kolom start positie te resetten naar de automatische flow is er ",l.jsx(n.code,{children:"vl-column--start-auto"}),` met de
responsieve varianten `,l.jsx(n.code,{children:"vl-column--X-start-auto"}),` waarbij X [m, s, xs] kan zijn. Dit is nuttig wanneer je een
expliciete start positie hebt op grotere schermen maar wil terugkeren naar de natuurlijke flow op kleinere
schermen (zie laatste rij in onderstaand voorbeeld).`]}),`
`,l.jsx(m,{of:s}),`
`,l.jsx(n.h3,{id:"vl-column---justify-self--align-self",children:l.jsx(n.strong,{children:"vl-column - justify-self / align-self"})}),`
`,l.jsxs(n.p,{children:["Conform het grid niveau worden er css-classes voorzien voor uitlijning in een cel: ",l.jsxs(n.strong,{children:[`horizontaal met
`,l.jsx(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-justify-self",rel:"nofollow",children:"justify-self"})]}),`
en `,l.jsxs(n.strong,{children:["verticaal met ",l.jsx(n.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-align-items",rel:"nofollow",children:"align-self"})]}),`.
Volgende classes zijn hiervoor beschikbaar:`]}),`
`,l.jsx(n.pre,{children:l.jsx(n.code,{children:`vl-column--justify-self-start
vl-column--justify-self-end
vl-column--justify-self-center
vl-column--justify-self-stretch

vl-column--align-self-start
vl-column--align-self-end
vl-column--align-self-center
vl-column--align-self-stretch
`})}),`
`,l.jsx(m,{of:o}),`
`,l.jsx(n.h3,{id:"vl-column---responsive",children:l.jsx(n.strong,{children:"vl-column - responsive"})}),`
`,l.jsxs(n.p,{children:["Ook de responsieve varianten zijn beschikbaar: bvb. ",l.jsx(n.code,{children:"vl-grid--X-justify-self-start"}),` en
`,l.jsx(n.code,{children:"vl-column--X-align-self-start"}),"."]}),`
`,l.jsx(n.h2,{id:"responsief-voorbeeld",children:"Responsief Voorbeeld"}),`
`,l.jsx(n.h3,{id:"large---default-1023px",children:"Large - default (>1023px)"}),`
`,l.jsx("img",{src:S,alt:"grid large",style:{maxWidth:"600px"}}),`
`,l.jsx("br",{}),`
`,l.jsx("img",{src:C,alt:"css large",style:{maxWidth:"600px"}}),`
`,l.jsx(n.h3,{id:"medium-1023",children:"Medium (<1023)"}),`
`,l.jsx("img",{src:w,alt:"grid medium",style:{maxWidth:"500px"}}),`
`,l.jsx("br",{}),`
`,l.jsx("img",{src:$,alt:"css medium",style:{maxWidth:"600px"}}),`
`,l.jsx(n.h3,{id:"small-767",children:"Small (<767)"}),`
`,l.jsx("img",{src:z,alt:"grid small",style:{maxWidth:"400px"}}),`
`,l.jsx("br",{}),`
`,l.jsx("img",{src:L,alt:"css small",style:{maxWidth:"600px"}}),`
`,l.jsx(n.h3,{id:"extra-small-500",children:"Extra-Small (<500)"}),`
`,l.jsx("img",{src:M,alt:"grid extra small",style:{maxWidth:"300px"}}),`
`,l.jsx("br",{}),`
`,l.jsx("img",{src:E,alt:"css extra small",style:{maxWidth:"600px"}}),`
`,l.jsx(n.h2,{id:"form-grid",children:"Form Grid"}),`
`,l.jsxs(n.p,{children:["Vorige implementaties van het grid zoals ",l.jsx(n.code,{children:'is="vl-form-grid'})," of ",l.jsx(n.code,{children:'class="vl-form-grid"'})," zijn deprecated en worden vervangen door ",l.jsx(n.code,{children:'class="vl-grid"'}),":"]}),`
`,l.jsx(n.pre,{children:l.jsx(n.code,{children:`<form>
  <div class="vl-grid">...</div>
</form>
`})}),`
`,l.jsx(m,{of:i})]})}function G(e={}){const{wrapper:n}={...p(),...e.components};return n?l.jsx(n,{...e,children:l.jsx(g,{...e})}):g(e)}function D(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const _=f`
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

        @media screen and (max-width: ${t}px) {
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

            @media screen and (max-width: ${a}px) {
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

            @media screen and (max-width: ${v}px) {
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
`;b([j,y,k]);const T={id:"styles-layout-grid",title:"Styles/Layout (afnemers)/grid",tags:["autodocs"],parameters:{docs:{page:G}}},c=()=>r`
    <style>
        .vl-grid.grid-responsive-story {
            --vl-column-min-height: 8vmax;
            padding: 1vmax;

            @media screen and (max-width: ${t}px) {
                --vl-column-min-height: 5vmax;
            }

            @media screen and (max-width: ${a}px) {
                --vl-column-min-height: 4vmax;
            }

            @media screen and (max-width: ${v}px) {
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

            ${_}
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
`;c.storyName="vl-grid - responsive";const s=()=>r`
    <style>
        #story--styles-layout-grid--grid-column-start-inner {
            .vl-grid {
                --vl-column-min-height: 20px;
                grid-template-rows: 20px;
                padding: 1vmax;
            }
        }

        .vl-grid.grid-column-start-story {
            --vl-column-min-height: 20px;
            grid-template-rows: 20px;
            padding: 1vmax;

            @media screen and (max-width: ${t}px) {
                --vl-column-min-height: 5vmax;
            }

            @media screen and (max-width: ${a}px) {
                --vl-column-min-height: 4vmax;
            }

            @media screen and (max-width: ${v}px) {
                --vl-column-min-height: 3vmax;
            }

            .vl-column {
                min-height: var(--vl-column-min-height);
                background-color: mediumspringgreen;
                border: lightseagreen 2px solid;
            }

            .sb-reset-example {
                background-color: lightcoral;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                text-align: center;
            }
        }
    </style>
    <div class="vl-grid grid-column-start-story">
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
        <div class="vl-column sb-reset-example vl-column--4 vl-column--start-9 vl-column--m-6 vl-column--m-start-auto">
            start-9 → m-start-auto
        </div>
    </div>
`;s.storyName="vl-grid - column start";const o=()=>r`
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
`;o.storyName="vl-grid - justify / align";const i=()=>r`
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
`;i.storyName="vl-grid - in form";c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => html\`
    <style>
        .vl-grid.grid-responsive-story {
            --vl-column-min-height: 8vmax;
            padding: 1vmax;

            @media screen and (max-width: \${vlMediaScreenMedium}px) {
                --vl-column-min-height: 5vmax;
            }

            @media screen and (max-width: \${vlMediaScreenSmall}px) {
                --vl-column-min-height: 4vmax;
            }

            @media screen and (max-width: \${vlMediaScreenExtraSmall}px) {
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

            \${gridStoriesResponsiveCss}
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
\``,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => html\`
    <style>
        #story--styles-layout-grid--grid-column-start-inner {
            .vl-grid {
                --vl-column-min-height: 20px;
                grid-template-rows: 20px;
                padding: 1vmax;
            }
        }

        .vl-grid.grid-column-start-story {
            --vl-column-min-height: 20px;
            grid-template-rows: 20px;
            padding: 1vmax;

            @media screen and (max-width: \${vlMediaScreenMedium}px) {
                --vl-column-min-height: 5vmax;
            }

            @media screen and (max-width: \${vlMediaScreenSmall}px) {
                --vl-column-min-height: 4vmax;
            }

            @media screen and (max-width: \${vlMediaScreenExtraSmall}px) {
                --vl-column-min-height: 3vmax;
            }

            .vl-column {
                min-height: var(--vl-column-min-height);
                background-color: mediumspringgreen;
                border: lightseagreen 2px solid;
            }

            .sb-reset-example {
                background-color: lightcoral;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                text-align: center;
            }
        }
    </style>
    <div class="vl-grid grid-column-start-story">
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
        <div class="vl-column sb-reset-example vl-column--4 vl-column--start-9 vl-column--m-6 vl-column--m-start-auto">
            start-9 → m-start-auto
        </div>
    </div>
\``,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...i.parameters?.docs?.source}}};const Y=["GridResponsive","GridColumnStart","GridJustifyAlign","GridWithForm"];export{s as GridColumnStart,o as GridJustifyAlign,c as GridResponsive,i as GridWithForm,Y as __namedExportsOrder,T as default};
