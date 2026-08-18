import{Z as d,_ as l,u as c,j as n,b8 as g,s as m,x as f,r as h}from"./iframe-COmpMQdF.js";import{V as v}from"./vl-footer.component-BtvPBftb.js";import"./preload-helper-D9Z9MdNV.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,i={development:!1,identifier:"",onReady:x("ready")},u={development:{name:"development",description:"Geeft aan dat de ontwikkel-servers van Digitaal Vlaanderen gebruikt moeten worden.",table:{type:{summary:l.BOOLEAN},category:d.ATTRIBUTES,defaultValue:{summary:String(i.development)}}},identifier:{name:"identifier",description:'De identifier die gebruikt wordt om bij Digitaal Vlaanderen de footer op te halen. Deze identifier kan aangevraagd worden bij Team Infra van Departement Omgeving of via het stappenplan van Digitaal Vlaanderen. <a href="https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer#stappenplan-koppeling-met-de-global-header-en-footer" target="_blank" rel="noopener noreferrer" aria-label="Ga naar het stappenplan van Digitaal Vlaanderen (opent in een nieuw venster)">Ga naar het stappenplan van Digitaal Vlaanderen.</a>',table:{type:{summary:l.STRING},category:d.ATTRIBUTES,defaultValue:{summary:i.identifier}}},onReady:{name:"ready",description:"Afgevuurd nadat de widget toegevoegd is aan de DOM.",table:{type:{summary:"-"},category:d.EVENTS}}};function s(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...r.components},{FluxCanvasIframe:t,FluxComponentMetaData:a}=e;return t||p("FluxCanvasIframe"),a||p("FluxComponentMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"digitaal-vlaanderen-footer",children:"Digitaal Vlaanderen Footer"}),`
`,n.jsx(a,{id:"components-compliance-next-footer"}),`
`,n.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,n.jsxs(e.p,{children:[`Injecteert de footer widget (v5) van Digitaal Vlaanderen.
Default wordt de footer geïnjecteerd in het native `,n.jsx(e.code,{children:"<body>"})," element."]}),`
`,n.jsx(e.p,{children:`Voor het consistent gebruik van de footer doorheen alle applicaties van Departement Omgeving, raden we aan om volgende
template aan te houden:`}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"[app-name] is een officiële website van de Vlaamse overheid"}),`
uitgegeven door Departement Omgeving`]}),`
`]}),`
`,n.jsx(e.p,{children:'"Departement Omgeving" is hierbij een externe link naar https://omgeving.vlaanderen.be/.'}),`
`,n.jsxs(e.p,{children:[`Deze gegevens worden beheerd door Digitaal Vlaanderen en kunnen ingesteld worden bij het verkrijgen van de unieke
identifier. Deze identifier kan aangevraagd worden bij Team Infra van Departement Omgeving of via dit
`,n.jsx(e.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer#stappenplan-koppeling-met-de-global-header-en-footer",rel:"nofollow",children:"stappenplan"})," van Digitaal Vlaanderen."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlFooter } from '@domg-wc/components/compliance/next';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-footer-next></vl-footer-next>
`})}),`
`,n.jsx(t,{height:"166"}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(g,{of:o}),`
`,n.jsx(e.h2,{id:"sticky-footer-bar",children:"Sticky footer bar"}),`
`,n.jsxs(e.p,{children:["In collapsible modus toont de widget een ",n.jsx(e.code,{children:"position: fixed"}),` bar onderaan de pagina. Zonder
gereserveerde ruimte bedekt die bar de onderste content. De component reserveert daarom
standaard `,n.jsx(e.code,{children:"48px"}),`: dat is de hoogte van de bar op een smal scherm, op een breed scherm is
de bar `,n.jsx(e.code,{children:"35px"}),"."]}),`
`,n.jsxs(e.p,{children:[`Afnemers kunnen die hoogte overschrijven of de reservering volledig uitzetten via de
CSS-variabele `,n.jsx(e.code,{children:"--vl-footer--bar-reserved-height"}),", gezet op ",n.jsx(e.code,{children:":root"}),", ",n.jsx(e.code,{children:"body"}),` of een ander
element boven de footer container:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Eigen hoogte reserveren */
:root {
    --vl-footer--bar-reserved-height: 60px;
}

/* Reservering uitzetten (bv. wanneer de pagina de ruimte zelf al voorziet) */
:root {
    --vl-footer--bar-reserved-height: 0px;
}
`})}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/mijn-burgerprofiel/koppelen-met-mijn-burgerprofiel-als-dienstenleverancier/technische-toolkit-voor-aansluitingen-door-dienstenleveranciers",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Footer"})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://test.widgets.burgerprofiel.dev-vlaanderen.be/docs/global-footer/modules.html",rel:"nofollow",children:"Global Footer - interfaces"})})]})}function b(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}function p(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}h([v]);const w={id:"components-compliance-next-footer",title:"Components - Compliance/next/footer",tags:["autodocs"],args:i,argTypes:u,parameters:{docs:{page:b,inlineStories:!1},layout:"fullscreen"}},o=m(i,({identifier:r,development:e,onReady:t})=>f`
        <body>
            <vl-footer-next
                ?development=${e}
                identifier=${r}
                @ready=${a=>t(a)}
            ></vl-footer-next>
        </body>
    `);o.storyName="vl-footer-next - default";o.args={development:!0,identifier:"0337f8dc-3266-4e7a-8f4a-95fd65189e5b"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(footerArgs, ({
  identifier,
  development,
  onReady
}) => html\`
        <body>
            <vl-footer-next
                ?development=\${development}
                identifier=\${identifier}
                @ready=\${(event: CustomEvent) => onReady(event)}
            ></vl-footer-next>
        </body>
    \`)`,...o.parameters?.docs?.source}}};const k=["FooterDefault"];export{o as FooterDefault,k as __namedExportsOrder,w as default};
