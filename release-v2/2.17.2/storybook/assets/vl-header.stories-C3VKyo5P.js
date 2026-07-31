import{Z as a,_ as i,u as g,j as e,b8 as x,s as w,x as D,r as U}from"./iframe-BAEsER5t.js";import{h as T}from"./vl-header.component-BR3Tpzoq.js";import"./vl-footer.component-BCO6343-.js";import{V as $}from"./vl-header.component-gtXR8crH.js";import"./preload-helper-D9Z9MdNV.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,r={...T,onReady:L("ready")},V={authenticatedUserUrl:{name:"authenticated-user-url",description:"De url die wordt opgeroepen om te zien of een gebruiker is ingelogd.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.authenticatedUserUrl}}},development:{name:"development",description:"Geeft aan dat de ontwikkel-servers van Digitaal Vlaanderen gebruikt moeten worden.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(r.development)}}},identifier:{name:"identifier",description:'De identifier die gebruikt wordt om bij Digitaal Vlaanderen de header op te halen. Deze identifier kan aangevraagd worden bij Team Infra van Departement Omgeving of via het stappenplan van Digitaal Vlaanderen. <a href="https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer#stappenplan-koppeling-met-de-global-header-en-footer" target="_blank" rel="noopener noreferrer" aria-label="Ga naar het stappenplan van Digitaal Vlaanderen (opent in een nieuw venster)">Ga naar het stappenplan van Digitaal Vlaanderen.</a>',table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:r.identifier}}},loginRedirectUrl:{name:"login-redirect-url",description:"De redirect url die gebruikt wordt bij het aanmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de session.configure() methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.loginRedirectUrl}}},loginUrl:{name:"login-url",description:"De url die gebruikt wordt bij het aanmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de session.configure() methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.loginUrl}}},logoutUrl:{name:"logout-url",description:"De url die wordt opgeroepen wanneer men zich wil afmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de session.configure() methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.logoutUrl}}},simple:{name:"simple",description:"Indien true wordt het configureren van de sessie overgeslagen.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(r.simple)}}},skeleton:{name:"skeleton",description:"Geeft aan of de header een skeleton moet tonen voordat het rendert.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(r.skeleton)}}},switchCapacityUrl:{name:"switch-capacity-url",description:"De url die wordt opgeroepen wanneer men van organisatie wil wisselen.<br>Bij het aanpassen van dit attribuut wordt achterliggend de session.configure() methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.switchCapacityUrl}}},rejectLogout:{name:"reject-logout",description:"Geeft aan of het logout request moet worden afgewezen.<br/>Een logout request door de gebruiker wordt nooit afgewezen.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(r.rejectLogout)}}},logoutCallback:{name:"logoutCallback",description:"De callback die aangeroepen wordt bij een logout request.<br/>De logout reason wordt meegegeven aan de callback, door een boolean promise terug te geven kan je het logout request accepteren of afwijzen.<br/>De mogelijke reasons zijn: 'inactivity' en 'expired'.<br/>Een logout request door de gebruiker wordt nooit afgewezen.",control:!1,table:{type:{summary:"(reason: string) => Promise<boolean>"},category:a.PROPERTIES,defaultValue:{summary:String(r.logoutCallback)}}},applicationLinks:{name:"applicationLinks",description:"De links die getoond worden in de header.<br/>Zie de documentatie pagina voor meer informatie.",table:{type:{summary:"ApplicationLink[]"},category:a.PROPERTIES,defaultValue:{summary:"[]"}}},onReady:{name:"ready",description:"Afgevuurd nadat de widget toegevoegd is aan de DOM.",table:{type:{summary:"-"},category:a.EVENTS}}};function c(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...g(),...t.components},{FluxCanvasIframe:d,FluxComponentMetaData:s}=n;return d||p("FluxCanvasIframe"),s||p("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"digitaal-vlaanderen-header",children:"Digitaal Vlaanderen Header"}),`
`,e.jsx(s,{id:"components-compliance-header"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:[`Injecteert de global header widget van Digitaal Vlaanderen.
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlHeader } from '@domg-wc/components/compliance';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-header></vl-header>
`})}),`
`,e.jsx(d,{height:"63"}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(x,{of:o}),`
`,e.jsx(n.h2,{id:"sessies",children:"Sessies"}),`
`,e.jsx(n.h3,{id:"configuratie-1",children:"Configuratie"}),`
`,e.jsxs(n.p,{children:["Bij het aanpassen van volgende attributen wordt achterliggend de ",e.jsx(n.code,{children:"session.configure()"})," methode van DV opnieuw aangeroepen:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"login-url"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"login-redirect-url"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"logout-url"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"switch-capacity-url"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"https://vlaamseoverheid.atlassian.net/wiki/spaces/IKPubliek/pages/6336119448/Aanmelden+met+eenvoudig+of+gekoppeld+toegangsbeheer#De-endpoints-overschrijven",rel:"nofollow",children:"Digitaal Vlaanderen - De endpoints overschrijven"})," voor meer informatie."]}),`
`,e.jsx(n.h2,{id:"applicatieve-links",children:"Applicatieve Links"}),`
`,e.jsxs(n.p,{children:["Je kan applicatieve links toevoegen aan de header door gebruik te maken van de ",e.jsx(n.code,{children:"applicationLinks"})," property.",e.jsx("br",{}),`
Deze property verwacht een array met objecten van het volgende type:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`export type ApplicationLink = {
    label: string;
    href: string;
    icon?: string;
    target?: string;
};
`})}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"https://vlaamseoverheid.atlassian.net/wiki/spaces/IKPubliek/pages/6508874105/Aanmeldmenu#Applicatieve-links",rel:"nofollow",children:"Digitaal Vlaanderen - Header applicatieve links"})," voor meer informatie."]}),`
`,e.jsx(n.h3,{id:"logout-request",children:"Logout request"}),`
`,e.jsxs(n.p,{children:["Bij het gebruik maken van sessies kan het logout request afgehandeld worden.",e.jsx("br",{}),`
Dit kan handig zijn als je wilt dat de gebruiker niet automatisch wordt uitgelogd bv. bij inactiviteit of als de sessie verlopen is.`]}),`
`,e.jsxs(n.p,{children:["Door gebruik te maken van het ",e.jsx(n.code,{children:"reject-logout"})," attribuut worden alle logout requests afgewezen, behalve een logout request door de gebruiker."]}),`
`,e.jsxs(n.p,{children:["Met de ",e.jsx(n.code,{children:"logoutCallback"})," property kan je een callback functie meegeven die wordt aangeroepen bij een logout request.",e.jsx("br",{}),`
De logout reason wordt meegegeven aan de callback, door een boolean promise terug te geven kan je de logout accepteren of afwijzen.`,e.jsx("br",{}),`
De mogelijke reasons zijn: `,e.jsx(n.code,{children:"inactivity"})," en ",e.jsx(n.code,{children:"expired"}),".",e.jsx("br",{}),`
Een logout request door de gebruiker wordt nooit afgewezen.`]}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"https://vlaamseoverheid.atlassian.net/wiki/spaces/IKPubliek/pages/6336119448/Aanmelden+met+eenvoudig+of+gekoppeld+toegangsbeheer#De-aanvragen-voor-applicatie-logout-afhandelen-via-JavaScript",rel:"nofollow",children:"De aanvragen voor applicatie logout afhandelen via JavaScript"})," voor meer informatie."]}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/mijn-burgerprofiel/koppelen-met-mijn-burgerprofiel-als-dienstenleverancier/technische-toolkit-voor-aansluitingen-door-dienstenleveranciers",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Header"})})]})}function R(t={}){const{wrapper:n}={...g(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}function p(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}U([$]);const O={id:"components-compliance-header",title:"Components - Compliance/header",tags:["autodocs"],args:r,argTypes:V,parameters:{docs:{page:R,inlineStories:!1},layout:"fullscreen"}},o=w(r,({authenticatedUserUrl:t,development:n,identifier:d,loginRedirectUrl:s,loginUrl:u,logoutUrl:m,skeleton:h,simple:v,switchCapacityUrl:j,rejectLogout:f,logoutCallback:b,applicationLinks:k,onReady:y})=>D`
        <body>
            <vl-header
                authenticated-user-url=${t}
                ?development=${n}
                identifier=${d}
                login-redirect-url=${s}
                login-url=${u}
                logout-url=${m}
                ?simple=${v}
                ?skeleton=${h}
                switch-capacity-url=${j}
                ?reject-logout=${f}
                .logoutCallback=${b}
                .applicationLinks=${k}
                @ready=${y}
            ></vl-header>
        </body>
    `);o.storyName="vl-header - default";o.args={development:!0,identifier:"59188ff6-662b-45b9-b23a-964ad48c2bfb",simple:!0};const l=o.bind({});l.storyName="vl-header - application links";l.args={development:!0,identifier:"59188ff6-662b-45b9-b23a-964ad48c2bfb",simple:!0,applicationLinks:[{label:"Link 1",href:"https://example.com/link1"},{label:"Link 2",href:"https://example.com/link2"}]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(headerArgs, ({
  authenticatedUserUrl,
  development,
  identifier,
  loginRedirectUrl,
  loginUrl,
  logoutUrl,
  skeleton,
  simple,
  switchCapacityUrl,
  rejectLogout,
  logoutCallback,
  applicationLinks,
  onReady
}) => html\`
        <body>
            <vl-header
                authenticated-user-url=\${authenticatedUserUrl}
                ?development=\${development}
                identifier=\${identifier}
                login-redirect-url=\${loginRedirectUrl}
                login-url=\${loginUrl}
                logout-url=\${logoutUrl}
                ?simple=\${simple}
                ?skeleton=\${skeleton}
                switch-capacity-url=\${switchCapacityUrl}
                ?reject-logout=\${rejectLogout}
                .logoutCallback=\${logoutCallback}
                .applicationLinks=\${applicationLinks}
                @ready=\${onReady}
            ></vl-header>
        </body>
    \`)`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(headerArgs, ({
  authenticatedUserUrl,
  development,
  identifier,
  loginRedirectUrl,
  loginUrl,
  logoutUrl,
  skeleton,
  simple,
  switchCapacityUrl,
  rejectLogout,
  logoutCallback,
  applicationLinks,
  onReady
}) => html\`
        <body>
            <vl-header
                authenticated-user-url=\${authenticatedUserUrl}
                ?development=\${development}
                identifier=\${identifier}
                login-redirect-url=\${loginRedirectUrl}
                login-url=\${loginUrl}
                logout-url=\${logoutUrl}
                ?simple=\${simple}
                ?skeleton=\${skeleton}
                switch-capacity-url=\${switchCapacityUrl}
                ?reject-logout=\${rejectLogout}
                .logoutCallback=\${logoutCallback}
                .applicationLinks=\${applicationLinks}
                @ready=\${onReady}
            ></vl-header>
        </body>
    \`)`,...l.parameters?.docs?.source}}};const B=["HeaderDefault","HeaderWithApplicationLinks"];export{o as HeaderDefault,l as HeaderWithApplicationLinks,B as __namedExportsOrder,O as default};
