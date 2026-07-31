import{Z as a,_ as i,u as h,j as e,b8 as w,s as D,x as T,r as U}from"./iframe-BAEsER5t.js";import{h as P,V as A}from"./vl-header.component-gtXR8crH.js";import"./vl-footer.component-BCO6343-.js";import"./preload-helper-D9Z9MdNV.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,r={...P,onReady:I("ready")},S={authenticatedUserUrl:{name:"authenticated-user-url",description:"De url die wordt opgeroepen om te zien of een gebruiker is ingelogd.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.authenticatedUserUrl}}},development:{name:"development",description:"Geeft aan dat de ontwikkel-servers van Digitaal Vlaanderen gebruikt moeten worden.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(r.development)}}},identifier:{name:"identifier",description:'De identifier die gebruikt wordt om bij Digitaal Vlaanderen de header op te halen. Deze identifier kan aangevraagd worden bij Team Infra van Departement Omgeving of via het stappenplan van Digitaal Vlaanderen. <a href="https://www.vlaanderen.be/digitaal-vlaanderen/onze-diensten-en-platformen/mijn-burgerprofiel/global-header-en-footer#stappenplan-koppeling-met-de-global-header-en-footer" target="_blank" rel="noopener noreferrer" aria-label="Ga naar het stappenplan van Digitaal Vlaanderen (opent in een nieuw venster)">Ga naar het stappenplan van Digitaal Vlaanderen.</a>',table:{type:{summary:i.STRING},category:a.ATTRIBUTES,defaultValue:{summary:r.identifier}}},loginUrl:{name:"login-url",description:"De url die gebruikt wordt bij het aanmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de `window.globalHeaderClient.accessMenu.setProfile()` methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.loginUrl}}},logoutUrl:{name:"logout-url",description:"De url die wordt opgeroepen wanneer men zich wil afmelden.<br>Bij het aanpassen van dit attribuut wordt achterliggend de `window.globalHeaderClient.accessMenu.setProfile()` methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.logoutUrl}}},simple:{name:"simple",description:"Indien true wordt het configureren van de sessie overgeslagen.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(r.simple)}}},skeleton:{name:"skeleton",description:"Geeft aan of de header een skeleton moet tonen voordat het rendert.",table:{type:{summary:i.BOOLEAN},category:a.ATTRIBUTES,defaultValue:{summary:String(r.skeleton)}}},switchCapacityUrl:{name:"switch-capacity-url",description:"De url die wordt opgeroepen wanneer men van organisatie wil wisselen.<br>Bij het aanpassen van dit attribuut wordt achterliggend de `window.globalHeaderClient.accessMenu.setProfile()` methode van Digitaal Vlaanderen opnieuw aangeroepen.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.switchCapacityUrl}}},applicationLinks:{name:"applicationLinks",description:"De links die getoond worden in de header.<br/>Zie de documentatie pagina voor meer informatie.",table:{type:{summary:"ApplicationLink[]"},category:a.PROPERTIES,defaultValue:{summary:"[]"}}},profileTokenUrl:{name:"profile-token-url",description:"De url die opgeroepen wordt om het PAPI profile token op te halen. Het token wordt achterliggend doorgegeven aan `window.globalHeaderClient.accessMenu.setProfile()` als `idpProfileToken`. Standaard `/sso/papi_token` (endpoint van de Cumuli security lib); zet leeg om geen token op te halen. Het token wordt nooit in de DOM opgenomen (om die reden is er geen `idp-profile-token` attribuut).<br/>Zie de documentatie pagina voor de verwachte response.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.profileTokenUrl}}},idpDataUrl:{name:"idp-data-url",description:"De url die opgeroepen wordt om manueel IdpData op te halen (handig voor mock users via lokale Keycloak). De response wordt doorgegeven aan `window.globalHeaderClient.accessMenu.setProfile()` als `idpData`.",table:{type:{summary:i.URL},category:a.ATTRIBUTES,defaultValue:{summary:r.idpDataUrl}}},idpProfileToken:{name:"idpProfileToken",description:"Het PAPI profile token, te zetten via JavaScript (geen attribuut omdat het token niet in de DOM mag belanden). Heeft voorrang op `profile-token-url`. Wordt enkel meegestuurd wanneer de gebruiker is aangemeld.",table:{type:{summary:i.STRING},category:a.PROPERTIES,defaultValue:{summary:"undefined"}}},idpData:{name:"idpData",description:"Manuele override voor de IdpData. Heeft voorrang op `idp-data-url`. Handig voor mock users via lokale Keycloak.<br/>Zie de documentatie pagina voor het type.",table:{type:{summary:"IDPData"},category:a.PROPERTIES,defaultValue:{summary:"undefined"}}},onReady:{name:"ready",description:"Afgevuurd nadat de widget toegevoegd is aan de DOM.",table:{type:{summary:"-"},category:a.EVENTS}}};function p(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components},{FluxCanvasIframe:d,FluxComponentMetaData:s}=n;return d||c("FluxCanvasIframe"),s||c("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"digitaal-vlaanderen-header",children:"Digitaal Vlaanderen Header"}),`
`,e.jsx(s,{id:"components-compliance-next-header"}),`
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
`,e.jsx(d,{height:"63"}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(w,{of:o}),`
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
`,e.jsx(n.h3,{id:"papi-profile-token",children:"PAPI profile token"}),`
`,e.jsxs(n.p,{children:["Sinds global header v5 kan een PAPI profile token meegegeven worden aan de header. Hiermee toont de header automatisch de gegevens van de gebruiker (naam, hoedanigheden, ...). Zie ",e.jsx(n.a,{href:"https://docs.digitaal.vlaanderen.be/global-header/documents/Profile_API_Integration_Guide.html",rel:"nofollow",children:"Profile API Integration Guide"})," van Digitaal Vlaanderen voor de achtergrond."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vl-header-next"})," ondersteunt twee manieren om het token mee te geven:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"profile-token-url"})," attribuut"]})," (declaratief) — de component fetcht het token op deze endpoint van jouw backend wanneer de sessie geconfigureerd wordt. Standaard staat dit op ",e.jsx(n.code,{children:"/sso/papi_token"}),", de endpoint van de Cumuli security lib. Verwachte response is het token als plain text (",e.jsx(n.code,{children:"text/plain"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-header-next
    identifier="..."
    profile-token-url="/api/papi-token"
></vl-header-next>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"idpProfileToken"})," JavaScript-property"]})," (imperatief) — set het token direct vanuit je SPA. Heeft voorrang op ",e.jsx(n.code,{children:"profile-token-url"}),". Handig wanneer je het token al in je client-side state hebt."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`document.querySelector('vl-header-next').idpProfileToken = papiToken;
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Het token wordt enkel aan ",e.jsx(n.code,{children:"setProfile()"})," doorgegeven wanneer de gebruiker is aangemeld (",e.jsx(n.code,{children:"active: true"}),"), conform de ",e.jsx(n.a,{href:"https://docs.digitaal.vlaanderen.be/global-header/documents/Profile_API_Integration_Guide.html#3-frontend-passing-the-profile-token",rel:"nofollow",children:"vereiste van Digitaal Vlaanderen"})," dat ",e.jsx(n.code,{children:"idpProfileToken"})," en ",e.jsx(n.code,{children:"active: true"})," in dezelfde call moeten zitten."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Waarom geen ",e.jsx(n.code,{children:"idp-profile-token"})," HTML-attribuut?"]}),`
Het token is een bearer credential met korte levensduur. Een HTML-attribuut zou het token zichtbaar maken in View Source, server-side rendered HTML, MutationObservers van 3rd-party scripts en screenshots van de elementen-tab. Daarom wordt het token enkel via een URL-fetch of JS-property aanvaard — beide houden het token uit de DOM.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"idpdata",children:"IdpData"}),`
`,e.jsx(n.p,{children:"Wanneer er geen PAPI token beschikbaar is, kan IdpData manueel meegegeven worden (bijvoorbeeld bij mock users via een lokale Keycloak). Twee manieren, met dezelfde precedentie als bij het token:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"idp-data-url"})," attribuut"]})," — de component fetcht een JSON-response op deze endpoint."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-header-next
    identifier="..."
    idp-data-url="/api/idp-data"
></vl-header-next>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"idpData"})," JavaScript-property"]})," — set het IDPData-object direct."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`document.querySelector('vl-header-next').idpData = {
    user: { firstName: 'John', name: 'Doe' },
    loginHint: 'user-login-hint',
    identities: [/* ... */],
};
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Zie ",e.jsx(n.a,{href:"https://test.widgets.burgerprofiel.dev-vlaanderen.be/docs/global-header/interfaces/IDPData.html",rel:"nofollow",children:"IDPData interface"})," voor het volledige type."]}),`
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
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://test.widgets.burgerprofiel.dev-vlaanderen.be/docs/global-header/modules.html",rel:"nofollow",children:"Global Header - interfaces"})})]})}function V(t={}){const{wrapper:n}={...h(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(p,{...t})}):p(t)}function c(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}U([A]);const E={id:"components-compliance-next-header",title:"Components - Compliance/next/header",tags:["autodocs"],args:r,argTypes:S,parameters:{docs:{page:V,inlineStories:!1},layout:"fullscreen"}},o=D(r,({authenticatedUserUrl:t,development:n,identifier:d,loginUrl:s,logoutUrl:u,skeleton:g,simple:m,switchCapacityUrl:f,applicationLinks:v,profileTokenUrl:j,idpDataUrl:k,idpProfileToken:x,idpData:b,onReady:y})=>T`
        <body>
            <vl-header-next
                authenticated-user-url=${t}
                ?development=${n}
                identifier=${d}
                login-url=${s}
                logout-url=${u}
                ?simple=${m}
                ?skeleton=${g}
                switch-capacity-url=${f}
                profile-token-url=${j}
                idp-data-url=${k}
                .applicationLinks=${v}
                .idpProfileToken=${x}
                .idpData=${b}
                @ready=${y}
            ></vl-header-next>
        </body>
    `);o.storyName="vl-header-next - default";o.args={development:!0,identifier:"59188ff6-662b-45b9-b23a-964ad48c2bfb",simple:!0};const l=o.bind({});l.storyName="vl-header-next - application links";l.args={development:!0,identifier:"59188ff6-662b-45b9-b23a-964ad48c2bfb",simple:!0,applicationLinks:[{label:"Link 1",href:"https://example.com/link1"},{label:"Link 2",href:"https://example.com/link2"}]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(headerArgs, ({
  authenticatedUserUrl,
  development,
  identifier,
  loginUrl,
  logoutUrl,
  skeleton,
  simple,
  switchCapacityUrl,
  applicationLinks,
  profileTokenUrl,
  idpDataUrl,
  idpProfileToken,
  idpData,
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
                profile-token-url=\${profileTokenUrl}
                idp-data-url=\${idpDataUrl}
                .applicationLinks=\${applicationLinks}
                .idpProfileToken=\${idpProfileToken}
                .idpData=\${idpData}
                @ready=\${onReady}
            ></vl-header-next>
        </body>
    \`)`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(headerArgs, ({
  authenticatedUserUrl,
  development,
  identifier,
  loginUrl,
  logoutUrl,
  skeleton,
  simple,
  switchCapacityUrl,
  applicationLinks,
  profileTokenUrl,
  idpDataUrl,
  idpProfileToken,
  idpData,
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
                profile-token-url=\${profileTokenUrl}
                idp-data-url=\${idpDataUrl}
                .applicationLinks=\${applicationLinks}
                .idpProfileToken=\${idpProfileToken}
                .idpData=\${idpData}
                @ready=\${onReady}
            ></vl-header-next>
        </body>
    \`)`,...l.parameters?.docs?.source}}};const M=["HeaderDefault","HeaderWithApplicationLinks"];export{o as HeaderDefault,l as HeaderWithApplicationLinks,M as __namedExportsOrder,E as default};
