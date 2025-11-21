import{K as l,L as d,u as m,j as n,bd as c,s as g,x as f,r as v}from"./iframe-BRJWU34U.js";import{V as h}from"./vl-footer.component-CELNyacN.js";import"./preload-helper-D9Z9MdNV.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,i={development:!1,identifier:"",onReady:u("ready")},x={development:{name:"development",description:"Geeft aan dat de ontwikkel-servers van Digitaal Vlaanderen gebruikt moeten worden.",table:{type:{summary:d.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(i.development)}}},identifier:{name:"identifier",description:'De identifier die gebruikt wordt om bij Digitaal Vlaanderen de footer op te halen. Deze identifier kan aangevraagd worden bij Team Infra van Departement Omgeving of via het stappenplan van Digitaal Vlaanderen. <a href="https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer#stappenplan-koppeling-met-de-global-header-en-footer" target="_blank" rel="noopener noreferrer" aria-label="Ga naar het stappenplan van Digitaal Vlaanderen (opent in een nieuw venster)">Ga naar het stappenplan van Digitaal Vlaanderen.</a>',table:{type:{summary:d.STRING},category:l.ATTRIBUTES,defaultValue:{summary:i.identifier}}},onReady:{name:"ready",description:"Afgevuurd nadat de widget toegevoegd is aan de DOM.",table:{type:{summary:"-"},category:l.EVENTS}}};function s(a){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...m(),...a.components},{FluxCanvasIframe:r,FluxMetaData:o}=e;return r||p("FluxCanvasIframe"),o||p("FluxMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"digitaal-vlaanderen-footer",children:"Digitaal Vlaanderen Footer"}),`
`,n.jsx(o,{id:"components-compliance-footer-next"}),`
`,n.jsxs(e.p,{children:[`Injecteert de footer widget (v5) van Digitaal Vlaanderen.
Default wordt de footer geïnjecteerd in het native `,n.jsx(e.code,{children:"<body>"})," element."]}),`
`,n.jsx(e.p,{children:`Voor het consistent gebruik van de footer doorheen alle applicaties van Departement Omgeving, raden we aan om volgende
template aan te houden:`}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"[app-name] is een officiële website van de Vlaamse overheid"}),n.jsx(e.br,{}),`
`,"uitgegeven door Departement Omgeving"]}),`
`]}),`
`,n.jsx(e.p,{children:'"Departement Omgeving" is hierbij een externe link naar https://omgeving.vlaanderen.be/.'}),`
`,n.jsxs(e.p,{children:[`Deze gegevens worden beheerd door Digitaal Vlaanderen en kunnen ingesteld worden bij het verkrijgen van de unieke
identifier. Deze identifier kan aangevraagd worden bij Team Infra van Departement Omgeving of via dit
`,n.jsx(e.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer#stappenplan-koppeling-met-de-global-header-en-footer",rel:"nofollow",children:"stappenplan"})," van Digitaal Vlaanderen."]}),`
`,n.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlFooterNext } from '@domg-wc/components/compliance';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-footer-next></vl-footer-next>
`})}),`
`,n.jsx(r,{height:"166"}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/mijn-burgerprofiel/koppelen-met-mijn-burgerprofiel-als-dienstenleverancier/technische-toolkit-voor-aansluitingen-door-dienstenleveranciers",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Footer"})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://test.widgets.burgerprofiel.dev-vlaanderen.be/docs/global-footer/modules.html",rel:"nofollow",children:"Global Footer - interfaces"})})]})}function b(a={}){const{wrapper:e}={...m(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(s,{...a})}):s(a)}function p(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}v([h]);const w={id:"components-compliance-footer-next",title:"Components - Compliance/next/footer",tags:["autodocs"],args:i,argTypes:x,parameters:{docs:{page:b,inlineStories:!1},layout:"fullscreen"}},t=g(i,({identifier:a,development:e,onReady:r})=>f`
        <body>
            <vl-footer-next
                ?development=${e}
                identifier=${a}
                @ready=${o=>r(o)}
            ></vl-footer-next>
        </body>
    `);t.storyName="vl-footer-next - default";t.args={development:!0,identifier:"0337f8dc-3266-4e7a-8f4a-95fd65189e5b"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(footerArgs, ({
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
    \`)`,...t.parameters?.docs?.source}}};const k=["FooterDefault"];export{t as FooterDefault,k as __namedExportsOrder,w as default};
