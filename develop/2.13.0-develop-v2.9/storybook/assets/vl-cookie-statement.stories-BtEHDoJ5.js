import{Y as r,Z as l,u as m,j as e,C as s,bb as v,S as g,s as b,x as f}from"./iframe-aAtdr__L.js";import{o as S}from"./unsafe-html-Cn5duKT2.js";import"./vl-cookie-statement.component-BYENclRY.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-side-navigation.component-CWQWn3eg.js";import"./vl-side-navigation-layout.component-Dw0K0Gia.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,o={date:"3 maart 2021",disableBackLink:!1,hideBackLink:!1,version:"1.0.0",onClickBack:j("vl-click-back"),headerSlot:""},x={date:{name:"date",description:"De datum waarop de pagina werd uitgegeven.",table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:o.date}}},disableBackLink:{name:"disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(o.disableBackLink)}}},hideBackLink:{name:"hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(o.hideBackLink)}}},version:{name:"version",description:"De pagina versie.",table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:o.version}}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:r.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:l.HTML},category:r.SLOTS,defaultValue:{summary:o.headerSlot}}}},y=`import { html } from 'lit';
import { VlFunctionalHeaderComponent } from '../../../block/functional-header';

export const cookieStatementHeaderElements = () => [VlFunctionalHeaderComponent];

export const header = () => html\`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Cookieverklaring"
        link="https://omgeving.vlaanderen.be"
        skip-to-content-id="main-content"
    ></vl-functional-header>
\`;
`;function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...m(),...t.components},{FluxComponentMetaData:c}=n;return c||B("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"cookie-statement",children:"Cookie Statement"}),`
`,e.jsx(c,{id:"components-compliance-cookie-statement"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsx(n.p,{children:"Cookieverklaring pagina."}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlCookieStatement } from '@domg-wc/components/compliance';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-cookie-statement></vl-cookie-statement>
`})}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(v,{of:a}),`
`,e.jsx(n.h2,{id:"header-slot",children:"Header Slot"}),`
`,e.jsxs(n.p,{children:["Standaard wordt deze template gebruikt om de ",e.jsx(n.code,{children:"functional-header"})," te bepalen in dit component."]}),`
`,e.jsx(g,{code:y,language:"ts",dark:!0}),`
`,e.jsxs(n.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",e.jsx(n.code,{children:"vl-functional-header"}),` vervangen door een
ander, eventueel aangepaste header element.`]}),`
`,e.jsx(n.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["een ",e.jsx(n.a,{href:"/docs/components-block-content-header--content-header-default",children:"vl-content-header"})]}),`
`,e.jsxs(n.li,{children:["of een ",e.jsx(n.a,{href:"/docs/components-block-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de standaard ",e.jsx(n.code,{children:"functional-header"})," van dit component."]}),`
`]}),`
`,e.jsxs(n.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",e.jsx(n.code,{children:"vl-functional-header"})," bij de teruglink (",e.jsx(n.code,{children:"back"}),`) "Start"
als label kan geven in plaats van "Terug".`]}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(n.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-cookie-statement--default",rel:"nofollow",children:"Legacy Storybook - Cookie Statement"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlCookieStatement.html",rel:"nofollow",children:"Legacy Documentatie - Cookie Statement"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie-statement.html",rel:"nofollow",children:"Legacy Demo - Cookie Statement"})})]})}function C(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}function B(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const $={id:"components-compliance-cookie-statement",title:"Components - Compliance/cookie-statement",tags:["autodocs"],args:o,argTypes:x,parameters:{layout:"fullscreen",docs:{page:C}}},k=b(o,({date:t,disableBackLink:n,hideBackLink:c,version:h,onClickBack:p,headerSlot:u})=>f`
        <vl-cookie-statement
            date=${t}
            ?disable-back-link=${n}
            ?hide-back-link=${c}
            version=${h}
            @vl-click-back=${p}
        >
            <vl-cookie
                title="Captcha contactformulier"
                name="NID"
                purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."
                domain="google.com"
                processor="Google"
                validity="Permanente cookie met een geldigheid van 6 maanden"
            >
            </vl-cookie>
            <vl-cookie
                title="Bestellen publicaties Vlaamse overheid"
                name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"
                purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."
                domain="publicaties.vlaanderen.be"
                processor="Vlaamse overheid"
                validity="Permanente cookie met een geldigheid van 3 weken"
            >
            </vl-cookie>
            ${S(u)}
        </vl-cookie-statement>
    `),a=k.bind({});a.storyName="vl-cookie-statement - default";const i=k.bind({});i.storyName="vl-cookie-statement - header slot";i.args={headerSlot:`
    <vl-functional-header
        slot="header"
        title="Departement Omgeving"
        sub-title="Cookieverklaring"
        link="https://omgeving.vlaanderen.be"
        back="Start"
        skip-to-content-id="#main-content"
    ></vl-functional-header>
`};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(cookieStatementArgs, ({
  date,
  disableBackLink,
  hideBackLink,
  version,
  onClickBack,
  headerSlot
}) => html\`
        <vl-cookie-statement
            date=\${date}
            ?disable-back-link=\${disableBackLink}
            ?hide-back-link=\${hideBackLink}
            version=\${version}
            @vl-click-back=\${onClickBack}
        >
            <vl-cookie
                title="Captcha contactformulier"
                name="NID"
                purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."
                domain="google.com"
                processor="Google"
                validity="Permanente cookie met een geldigheid van 6 maanden"
            >
            </vl-cookie>
            <vl-cookie
                title="Bestellen publicaties Vlaamse overheid"
                name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"
                purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."
                domain="publicaties.vlaanderen.be"
                processor="Vlaamse overheid"
                validity="Permanente cookie met een geldigheid van 3 weken"
            >
            </vl-cookie>
            \${unsafeHTML(headerSlot)}
        </vl-cookie-statement>
    \`)`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(cookieStatementArgs, ({
  date,
  disableBackLink,
  hideBackLink,
  version,
  onClickBack,
  headerSlot
}) => html\`
        <vl-cookie-statement
            date=\${date}
            ?disable-back-link=\${disableBackLink}
            ?hide-back-link=\${hideBackLink}
            version=\${version}
            @vl-click-back=\${onClickBack}
        >
            <vl-cookie
                title="Captcha contactformulier"
                name="NID"
                purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."
                domain="google.com"
                processor="Google"
                validity="Permanente cookie met een geldigheid van 6 maanden"
            >
            </vl-cookie>
            <vl-cookie
                title="Bestellen publicaties Vlaamse overheid"
                name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"
                purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."
                domain="publicaties.vlaanderen.be"
                processor="Vlaamse overheid"
                validity="Permanente cookie met een geldigheid van 3 weken"
            >
            </vl-cookie>
            \${unsafeHTML(headerSlot)}
        </vl-cookie-statement>
    \`)`,...i.parameters?.docs?.source}}};const A=["CookieStatementDefault","CookieStatementHeaderSlot"];export{a as CookieStatementDefault,i as CookieStatementHeaderSlot,A as __namedExportsOrder,$ as default};
