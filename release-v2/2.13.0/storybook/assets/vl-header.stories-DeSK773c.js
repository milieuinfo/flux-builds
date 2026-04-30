import{_ as i,$ as t,u as g,j as e,bd as b,s as x,x as k,r as w}from"./iframe-69xRVzLO.js";import{h as y,V as D}from"./vl-header.component-D7AU_p3-.js";import"./vl-footer.component-djt2wtB1.js";import"./preload-helper-D9Z9MdNV.js";const{action:U}=__STORYBOOK_MODULE_ACTIONS__,r={...y,onReady:U("ready")},A={authenticatedUserUrl:{name:"authenticated-user-url",description:"De url die wordt opgeroepen om te zien of een gebruiker is ingelogd.",table:{type:{summary:t.URL},category:i.ATTRIBUTES,defaultValue:{summary:r.authenticatedUserUrl}}},development:{name:"development",description:"Geeft aan dat de ontwikkel-servers van Digitaal Vlaanderen gebruikt moeten worden.",table:{type:{summary:t.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(r.development)}}},identifier:{name:"identifier",description:'De identifier die gebruikt wordt om bij Digitaal Vlaanderen de header op te halen. Deze identifier kan aangevraagd worden bij Team Infra van Departement Omgeving of via het stappenplan van Digitaal Vlaanderen. <a href="https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer#stappenplan-koppeling-met-de-global-header-en-footer" target="_blank" rel="noopener noreferrer" aria-label="Ga naar het stappenplan van Digitaal Vlaanderen (opent in een nieuw venster)">Ga naar het stappenplan van Digitaal Vlaanderen.</a>',table:{type:{summary:t.STRING},category:i.ATTRIBUTES,defaultValue:{summary:r.identifier}}},loginUrl:{name:"login-url",description:"De url die gebruikt wordt bij het aanmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de `window.globalHeaderClient.accessMenu.setProfile()` methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:t.URL},category:i.ATTRIBUTES,defaultValue:{summary:r.loginUrl}}},logoutUrl:{name:"logout-url",description:"De url die wordt opgeroepen wanneer men zich wil afmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de `window.globalHeaderClient.accessMenu.setProfile()` methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:t.URL},category:i.ATTRIBUTES,defaultValue:{summary:r.logoutUrl}}},simple:{name:"simple",description:"Indien true wordt het configureren van de sessie overgeslagen.",table:{type:{summary:t.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(r.simple)}}},skeleton:{name:"skeleton",description:"Geeft aan of de header een skeleton moet tonen voordat het rendert.",table:{type:{summary:t.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(r.skeleton)}}},switchCapacityUrl:{name:"switch-capacity-url",description:"De url die wordt opgeroepen wanneer men van organisatie wil wisselen.<br>Bij het aanpassen van dit attribuut wordt achterliggend de `window.globalHeaderClient.accessMenu.setProfile()` methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:t.URL},category:i.ATTRIBUTES,defaultValue:{summary:r.switchCapacityUrl}}},applicationLinks:{name:"applicationLinks",description:"De links die getoond worden in de header.<br/>Zie de documentatie pagina voor meer informatie.",table:{type:{summary:"ApplicationLink[]"},category:i.PROPERTIES,defaultValue:{summary:"[]"}}},onReady:{name:"ready",description:"Afgevuurd nadat de widget toegevoegd is aan de DOM.",table:{type:{summary:"-"},category:i.EVENTS}}};function c(a){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...g(),...a.components},{FluxCanvasIframe:s,FluxComponentMetaData:d}=n;return s||p("FluxCanvasIframe"),d||p("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"digitaal-vlaanderen-header",children:"Digitaal Vlaanderen Header"}),`
`,e.jsx(d,{id:"components-compliance-next-header"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:[`Injecteert de global header widget (v5) van Digitaal Vlaanderen.
Default wordt de header geïnjecteerd in het native `,e.jsx(n.code,{children:"<body>"})," element."]}),`
`,e.jsx(n.p,{children:`Voor het consistent gebruik van de header doorheen alle applicaties van Departement Omgeving, raden we aan om volgende
template aan te houden:`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"[Logo Vlaanderen]"})," | ",e.jsx(n.strong,{children:"[App-name]"})," | witruimte | ",e.jsx(n.strong,{children:"Aanmelden"})," | ",e.jsx(n.strong,{children:"Hulp nodig?"})]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'"Logo Vlaanderen"'})," is hierbij een link naar https://vlaanderen.be."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'"App-name"'})," blijft op alle pagina's de naam van de applicatie en krijgt als link de startpagina van de applicatie."]}),`
`,e.jsxs(n.li,{children:["Onder ",e.jsx(n.strong,{children:'"Aanmelden"'})," kan je app-links definiëren (zie ",e.jsx(n.a,{href:"#applicatieve-links",children:"Applicatieve links"}),")."]}),`
`,e.jsxs(n.li,{children:["Onder ",e.jsx(n.strong,{children:'"Hulp nodig?"'})," komt de tekst: ",e.jsx(n.strong,{children:'"Neem contact op met Departement Omgeving"'}),`, gevolgd door verschillende
contact opties (telefoonnummer, adres, e-mailadres).`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Deze gegevens worden beheerd door Digitaal Vlaanderen en kunnen ingesteld worden bij het verkrijgen van de unieke
identifier. Deze identifier kan aangevraagd worden bij Team Infra van Departement Omgeving of via dit
`,e.jsx(n.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer#stappenplan-koppeling-met-de-global-header-en-footer",rel:"nofollow",children:"stappenplan"})," van Digitaal Vlaanderen."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlHeader } from '@domg-wc/components/compliance/next';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-header-next></vl-header-next>
`})}),`
`,e.jsx(s,{height:"63"}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(b,{of:l}),`
`,e.jsx(n.h2,{id:"sessies",children:"Sessies"}),`
`,e.jsx(n.h3,{id:"configuratie-1",children:"Configuratie"}),`
`,e.jsxs(n.p,{children:["Bij het aanpassen van volgende attributen wordt achterliggend de ",e.jsx(n.code,{children:"window.globalHeaderClient.accessMenu.setProfile()"})," methode van DV opnieuw aangeroepen:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"login-url"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"logout-url"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"switch-capacity-url"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"https://test.widgets.burgerprofiel.dev-vlaanderen.be/docs/global-header/interfaces/AccessMenuMethods.html#setprofile",rel:"nofollow",children:"global header interfaces | setProfile"})," voor de technische informatie."]}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"https://vlaamseoverheid.atlassian.net/wiki/spaces/IKPubliek/pages/6336119448/Aanmelden+met+eenvoudig+of+gekoppeld+toegangsbeheer#De-endpoints-overschrijven",rel:"nofollow",children:"Digitaal Vlaanderen - De endpoints overschrijven"})," voor meer informatie (v4 documentatie)."]}),`
`,e.jsx(n.h2,{id:"applicatieve-links",children:"Applicatieve Links"}),`
`,e.jsxs(n.p,{children:["Je kan applicatieve links toevoegen aan de header door gebruik te maken van de ",e.jsx(n.code,{children:"applicationLinks"})," property.",e.jsx("br",{}),`
Deze property verwacht een array met objecten van het volgende type:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type ApplicationMenuLink = {
    label: string;
    href: string;
    icon?: string;
    target?: string;
};
`})}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"ApplicationMenuLink"})," TypeScript Type kan je zo importeren: ",e.jsx(n.code,{children:"import { ApplicationMenuLink } from '@govflanders/vl-widget-global-header-types';"})]}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"https://test.widgets.burgerprofiel.dev-vlaanderen.be/docs/global-header/interfaces/ApplicationMenuLink.html",rel:"nofollow",children:"global header interfaces | ApplicationMenuLink"})," voor de technische informatie."]}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"https://vlaamseoverheid.atlassian.net/wiki/spaces/IKPubliek/pages/6508874105/Aanmeldmenu#Applicatieve-links",rel:"nofollow",children:"Digitaal Vlaanderen - Header applicatieve links"})," voor meer informatie (v4 documentatie)."]}),`
`,e.jsx(n.h3,{id:"logout-request",children:"Logout request"}),`
`,e.jsx(n.p,{children:"Sinds global header v5 is het niet meer nodig om automatische logout requests te rejecten. Onderstaande informatie gaat over de v4 implementatie (voorlopig behouden in de documentatie als referentie)."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Bij het gebruik maken van sessies kan het logout request afgehandeld worden.",e.jsx("br",{}),`
Dit kan handig zijn als je wilt dat de gebruiker niet automatisch wordt uitgelogd bv. bij inactiviteit of als de sessie verlopen is.`]}),`
`,e.jsxs(n.p,{children:["Door gebruik te maken van het ",e.jsx(n.code,{children:"reject-logout"})," attribuut worden alle logout requests afgewezen, behalve een logout request door de gebruiker."]}),`
`,e.jsxs(n.p,{children:["Met de ",e.jsx(n.code,{children:"logoutCallback"})," property kan je een callback functie meegeven die wordt aangeroepen bij een logout request.",e.jsx("br",{}),`
De logout reason wordt meegegeven aan de callback, door een boolean promise terug te geven kan je de logout accepteren of afwijzen.`,e.jsx("br",{}),`
De mogelijke reasons zijn: `,e.jsx(n.code,{children:"inactivity"})," en ",e.jsx(n.code,{children:"expired"}),".",e.jsx("br",{}),`
Een logout request door de gebruiker wordt nooit afgewezen.`]}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"https://vlaamseoverheid.atlassian.net/wiki/spaces/IKPubliek/pages/6336119448/Aanmelden+met+eenvoudig+of+gekoppeld+toegangsbeheer#De-aanvragen-voor-applicatie-logout-afhandelen-via-JavaScript",rel:"nofollow",children:"De aanvragen voor applicatie logout afhandelen via JavaScript"})," voor meer informatie (v4 documentatie)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/mijn-burgerprofiel/koppelen-met-mijn-burgerprofiel-als-dienstenleverancier/technische-toolkit-voor-aansluitingen-door-dienstenleveranciers",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Header"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://test.widgets.burgerprofiel.dev-vlaanderen.be/docs/global-header/modules.html",rel:"nofollow",children:"Global Header - interfaces"})})]})}function T(a={}){const{wrapper:n}={...g(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(c,{...a})}):c(a)}function p(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}w([D]);const S={id:"components-compliance-next-header",title:"Components - Compliance/next/header",tags:["autodocs"],args:r,argTypes:A,parameters:{docs:{page:T,inlineStories:!1},layout:"fullscreen"}},l=x(r,({authenticatedUserUrl:a,development:n,identifier:s,loginUrl:d,logoutUrl:h,skeleton:u,simple:m,switchCapacityUrl:v,applicationLinks:f,onReady:j})=>k`
        <body>
            <vl-header-next
                authenticated-user-url=${a}
                ?development=${n}
                identifier=${s}
                login-url=${d}
                logout-url=${h}
                ?simple=${m}
                ?skeleton=${u}
                switch-capacity-url=${v}
                .applicationLinks=${f}
                @ready=${j}
            ></vl-header-next>
        </body>
    `);l.storyName="vl-header-next - default";l.args={development:!0,identifier:"59188ff6-662b-45b9-b23a-964ad48c2bfb",simple:!0};const o=l.bind({});o.storyName="vl-header-next - application links";o.args={development:!0,identifier:"59188ff6-662b-45b9-b23a-964ad48c2bfb",simple:!0,applicationLinks:[{label:"Link 1",href:"https://example.com/link1"},{label:"Link 2",href:"https://example.com/link2"}]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(headerArgs, ({
  authenticatedUserUrl,
  development,
  identifier,
  loginUrl,
  logoutUrl,
  skeleton,
  simple,
  switchCapacityUrl,
  applicationLinks,
  onReady
}) => html\`
        <body>
            <vl-header-next
                authenticated-user-url=\${authenticatedUserUrl}
                ?development=\${development}
                identifier=\${identifier}
                login-url=\${loginUrl}
                logout-url=\${logoutUrl}
                ?simple=\${simple}
                ?skeleton=\${skeleton}
                switch-capacity-url=\${switchCapacityUrl}
                .applicationLinks=\${applicationLinks}
                @ready=\${onReady}
            ></vl-header-next>
        </body>
    \`)`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(headerArgs, ({
  authenticatedUserUrl,
  development,
  identifier,
  loginUrl,
  logoutUrl,
  skeleton,
  simple,
  switchCapacityUrl,
  applicationLinks,
  onReady
}) => html\`
        <body>
            <vl-header-next
                authenticated-user-url=\${authenticatedUserUrl}
                ?development=\${development}
                identifier=\${identifier}
                login-url=\${loginUrl}
                logout-url=\${logoutUrl}
                ?simple=\${simple}
                ?skeleton=\${skeleton}
                switch-capacity-url=\${switchCapacityUrl}
                .applicationLinks=\${applicationLinks}
                @ready=\${onReady}
            ></vl-header-next>
        </body>
    \`)`,...o.parameters?.docs?.source}}};const C=["HeaderDefault","HeaderWithApplicationLinks"];export{l as HeaderDefault,o as HeaderWithApplicationLinks,C as __namedExportsOrder,S as default};
