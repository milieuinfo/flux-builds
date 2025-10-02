import{J as l,K as d,u as m,j as n,bd as p,s as g,x as f,r as h}from"./iframe-CflcmDUD.js";import{V as v}from"./vl-footer.component-Db5dgrCE.js";import"./preload-helper-D9Z9MdNV.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,i={development:!1,identifier:"",onReady:u("ready")},b={development:{name:"development",description:"Geeft aan dat de ontwikkel-servers van Digitaal Vlaanderen gebruikt moeten worden.",table:{type:{summary:d.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(i.development)}}},identifier:{name:"identifier",description:'De identifier die gebruikt wordt om bij Digitaal Vlaanderen de footer op te halen. Deze identifier kan aangevraagd worden bij Team Infra van Departement Omgeving of via dit <vl-link external href="https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer#stappenplan-koppeling-met-de-global-header-en-footer">stappenplan</vl-link> van Digitaal Vlaanderen.',table:{type:{summary:d.STRING},category:l.ATTRIBUTES,defaultValue:{summary:i.identifier}}},onReady:{name:"ready",description:"Afgevuurd nadat de widget toegevoegd is aan de DOM.",table:{type:{summary:"-"},category:l.EVENTS}}};function s(o){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...m(),...o.components},{FluxCanvasIframe:r,FluxMetaData:a}=e;return r||c("FluxCanvasIframe"),a||c("FluxMetaData"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"digitaal-vlaanderen-footer",children:"Digitaal Vlaanderen Footer"}),`
`,n.jsx(a,{id:"components-compliance-footer"}),`
`,n.jsxs(e.p,{children:[`Injecteert de footer widget van Digitaal Vlaanderen.
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { VlFooter } from '@domg-wc/components/compliance';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<vl-footer></vl-footer>
`})}),`
`,n.jsx(r,{height:"166"}),`
`,n.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,n.jsx(p,{of:t}),`
`,n.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,n.jsx(e.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/mijn-burgerprofiel/koppelen-met-mijn-burgerprofiel-als-dienstenleverancier/technische-toolkit-voor-aansluitingen-door-dienstenleveranciers",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Footer"})}),`
`,n.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-footer--default",rel:"nofollow",children:"Legacy Storybook - Footer"})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlFooter.html",rel:"nofollow",children:"Legacy Documentatie - Footer"})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-footer.html",rel:"nofollow",children:"Legacy Demo - Footer"})})]})}function j(o={}){const{wrapper:e}={...m(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}function c(o,e){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}h([v]);const D={id:"components-compliance-footer",title:"Components - Compliance/footer",tags:["autodocs"],args:i,argTypes:b,parameters:{docs:{page:j,inlineStories:!1},layout:"fullscreen"}},t=g(i,({identifier:o,development:e,onReady:r})=>f`
        <body>
            <vl-footer
                ?development=${e}
                identifier=${o}
                @ready=${a=>r(a)}
            ></vl-footer>
        </body>
    `);t.storyName="vl-footer - default";t.args={development:!0,identifier:"0337f8dc-3266-4e7a-8f4a-95fd65189e5b"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(footerArgs, ({
  identifier,
  development,
  onReady
}) => html\`
        <body>
            <vl-footer
                ?development=\${development}
                identifier=\${identifier}
                @ready=\${(event: CustomEvent) => onReady(event)}
            ></vl-footer>
        </body>
    \`)`,...t.parameters?.docs?.source}}};const k=["FooterDefault"];export{t as FooterDefault,k as __namedExportsOrder,D as default};
