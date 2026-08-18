import{u as t,j as e,M as l}from"./iframe-COmpMQdF.js";import"./preload-helper-D9Z9MdNV.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Recepten/Proza inline gebruik"}),`
`,e.jsxs(n.h1,{id:"proza-inline-gebruik-vlproza",children:["Proza inline gebruik (",e.jsx(n.code,{children:"vlProza"}),")"]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"vlProza"})," directive laat toe om Proza berichten te gebruiken als ",e.jsx(n.strong,{children:"attribuut waarden"}),` in Lit templates.
Dit is handig voor componenten die tekst verwachten via attributen, zoals het `,e.jsx(n.code,{children:"title"})," attribuut van ",e.jsx(n.code,{children:"vl-alert"}),"."]}),`
`,e.jsxs(n.p,{children:["Zie ook de ",e.jsx(n.a,{href:"/docs/components-block-proza-message-proza-directive--documentatie",children:"proza-directive documentatie"}),"."]}),`
`,e.jsx(n.h2,{id:"setup",children:"Setup"}),`
`,e.jsx(n.h3,{id:"1-default-domein-instellen",children:"1. Default domein instellen"}),`
`,e.jsxs(n.p,{children:["Stel het default Proza domein in via ",e.jsx(n.code,{children:"FluxConfig"}),` bij het opstarten van je applicatie. Dit domein wordt
gebruikt door zowel `,e.jsx(n.code,{children:"vl-proza-message"}),", ",e.jsx(n.code,{children:"vl-proza-message-preloader"})," als de ",e.jsx(n.code,{children:"vlProza"}),` directive wanneer er
geen expliciet domein is meegegeven:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { FluxConfig } from '@domg-wc/common';

FluxConfig.setPreferences({ prozaDomain: 'mijn-domein' });
`})}),`
`,e.jsxs(n.p,{children:["Dit doe je typisch eenmalig in je ",e.jsx(n.code,{children:"main.ts"}),", ",e.jsx(n.code,{children:"app.config.ts"}),`, of een gelijkaardig bootstrap-bestand,
`,e.jsx(n.strong,{children:"voordat"}),` het eerste component geregistreerd wordt.
Zie ook het `,e.jsx(n.a,{href:"/docs/recepten-configuratie--documentatie",children:"Configuratie"})," recept."]}),`
`,e.jsx(n.h3,{id:"2-import",children:"2. Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { vlProza } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"alert-met-proza-titel",children:"Alert met proza titel"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { html } from 'lit';
import { vlProza } from '@domg-wc/components/block';

const template = html\`
    <vl-alert
        icon="warning"
        title=\${vlProza('disclaimer.titel')}
        type="warning"
        closable
    ></vl-alert>
\`;
`})}),`
`,e.jsx(n.h3,{id:"alert-met-proza-titel-en-parameters",children:"Alert met proza titel en parameters"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const template = html\`
    <vl-alert
        icon="user"
        title=\${vlProza('welkom.titel', { parameters: { naam: gebruiker.naam } })}
        type="success"
    ></vl-alert>
\`;
`})}),`
`,e.jsx(n.h3,{id:"ander-domein-voor-een-specifieke-aanroep",children:"Ander domein voor een specifieke aanroep"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const template = html\`
    <vl-alert
        icon="info-circle"
        title=\${vlProza('melding.titel', { domain: 'ander-domein' })}
        type="info"
    ></vl-alert>
\`;
`})}),`
`,e.jsx(n.h3,{id:"fallback-tekst-tijdens-laden",children:"Fallback tekst tijdens laden"}),`
`,e.jsxs(n.p,{children:["Standaard wordt de ",e.jsx(n.code,{children:"code"})," getoond als fallback tijdens het laden. Je kan een eigen fallback opgeven:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const template = html\`
    <vl-alert
        icon="warning"
        title=\${vlProza('disclaimer.titel', { fallback: 'Even geduld...' })}
        type="warning"
    ></vl-alert>
\`;
`})}),`
`,e.jsx(n.h3,{id:"combinatie-met-preloader",children:"Combinatie met preloader"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"vlProza"})," directive werkt naadloos samen met ",e.jsx(n.code,{children:"vl-proza-message-preloader"}),`. Als het domein al gepreload is,
worden berichten direct uit de cache gehaald. Wanneer `,e.jsx(n.code,{children:"prozaDomain"})," is ingesteld via ",e.jsx(n.code,{children:"FluxConfig"}),`, hoef je
het domein ook niet meer op de preloader te zetten:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const template = html\`
    <vl-proza-message-preloader></vl-proza-message-preloader>

    <vl-alert
        icon="warning"
        title=\${vlProza('disclaimer.titel')}
        type="warning"
    ></vl-alert>
\`;
`})}),`
`,e.jsxs(n.h2,{id:"verschil-met-de-vl-proza-message-component",children:["Verschil met de ",e.jsx(n.code,{children:"vl-proza-message"})," component"]}),`
`,e.jsxs(n.p,{children:["Gebruik ",e.jsx(n.code,{children:"vl-proza-message"})," wanneer je het bericht als ",e.jsx(n.strong,{children:"HTML-inhoud"}),` wilt tonen (bv. in een slot of als child
element). Gebruik `,e.jsx(n.code,{children:"vlProza"})," wanneer je het bericht als ",e.jsx(n.strong,{children:"plain text"})," nodig hebt in een attribuut."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:e.jsx("code",{children:"vl-proza-message"})}),e.jsx("th",{children:e.jsx("code",{children:"vlProza"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Gebruik"})}),e.jsx("td",{children:"Als child element"}),e.jsx("td",{children:"Als attribuut waarde in Lit template"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Output"})}),e.jsx("td",{children:"HTML (in shadow DOM)"}),e.jsx("td",{children:"Plain text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Editeerbaar"})}),e.jsx("td",{children:"Ja (edit/refresh knoppen)"}),e.jsx("td",{children:"Nee"})]})]})]}),`
`,e.jsx(n.h2,{id:"migratie-van-eigen-implementatie",children:"Migratie van eigen implementatie"}),`
`,e.jsxs(n.p,{children:["Als je al een eigen ",e.jsx(n.code,{children:"proza()"})," utility hebt die ",e.jsx(n.code,{children:"until()"})," en ",e.jsx(n.code,{children:"VlProzaMessage.getMessage()"}),` combineert met
een eigen HTML-stripping functie, kan je deze volledig vervangen door `,e.jsx(n.code,{children:"vlProza"}),":"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Na migratie:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// eenmalig bij bootstrap (app.config.ts)
import { FluxConfig } from '@domg-wc/common';
FluxConfig.setPreferences({ prozaDomain: 'mijn-domein' });

// gebruik in templates
import { vlProza } from '@domg-wc/components/block';
html\`<vl-alert title=\${vlProza('disclaimer.titel')} type="warning"></vl-alert>\`

// vl-proza-message zonder expliciet domein
html\`<vl-proza-message code="mijn-code"></vl-proza-message>\`
`})}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"vlProza"})," directive en ",e.jsx(n.code,{children:"vl-proza-message"})," component halen het domein automatisch uit ",e.jsx(n.code,{children:"FluxConfig"}),"."]})]})}function s(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{s as default};
