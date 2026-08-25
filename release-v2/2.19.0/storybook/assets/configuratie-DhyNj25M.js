import{u as o,j as e,M as t}from"./iframe-CY-ZM549.js";import"./preload-helper-D9Z9MdNV.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Recepten/Configuratie"}),`
`,e.jsx(n.h1,{id:"configuratie",children:"Configuratie"}),`
`,e.jsxs(n.p,{children:["M.b.v. de statische klasse ",e.jsx(n.code,{children:"FluxConfig"})," kunnen voorkeuren gewijzigd worden."]}),`
`,e.jsx(n.p,{children:"De defaults zijn:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"autoRegisterStyles: true"}),`
`,e.jsx(n.li,{children:"logWebComponentRegistration: false"}),`
`,e.jsx(n.li,{children:"logTreeshakeRegistration: false"}),`
`,e.jsx(n.li,{children:"prozaDomain: undefined"}),`
`]}),`
`,e.jsx(n.h2,{id:"proza-domein",children:"Proza domein"}),`
`,e.jsxs(n.p,{children:["Door ",e.jsx(n.code,{children:"prozaDomain"})," in te stellen hoef je het domein niet meer op elke ",e.jsx(n.code,{children:"vl-proza-message"}),`,
`,e.jsx(n.code,{children:"vl-proza-message-preloader"})," of ",e.jsx(n.code,{children:"vlProza"}),` directive aanroep mee te geven.
Indien er geen expliciet domein wordt meegegeven, wordt het `,e.jsx(n.code,{children:"prozaDomain"})," uit de ",e.jsx(n.code,{children:"FluxConfig"})," gebruikt."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`FluxConfig.setPreferences({ prozaDomain: 'mijn-domein' });
`})}),`
`,e.jsx(n.h2,{id:"afname-via-de-npm-packages",children:"Afname via de npm-packages"}),`
`,e.jsx(n.p,{children:"Wijzig de defaults als volgt; voordat het eerste element geïmporteerd wordt."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { FluxConfig } from '@domg-wc/common';

FluxConfig.setPreferences({ logWebComponentRegistration: true });
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opmerking"}),`: ervoor zorgen dat deze code als eerste uitgevoerd wordt (alvorens de eerste component geregistreerd
wordt) is specifiek aan de opzet en bundeling van de toepassing. Wat altijd zou moeten werken is:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["een bestand aanmaken met bovenstaande code in (de import en het setPreferences statement) bvb. in ",e.jsx(n.code,{children:"app.config.ts"})]}),`
`,e.jsxs(n.li,{children:["en dan dit bestand via een neven-effect import ",e.jsx(n.code,{children:"import './app/app.config';"})," als allereerste importeren"]}),`
`]}),`
`,e.jsx(n.h2,{id:"afname-via-fat-lib",children:"Afname via 'fat-lib'"}),`
`,e.jsx(n.p,{children:"Wijzig de defaults m.b.v. het desbetreffende attribuut."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<script type="module"
    auto-register-styles="false"
    log-web-component-registration="true"
    log-treeshake-registration="true"
    src="https://cdn.omgeving.vlaanderen.be/domg/domg-wc/2.0.0/domg-wc-compliance-2.0.0.min.js">
<\/script>
`})})]})}function a(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{a as default};
