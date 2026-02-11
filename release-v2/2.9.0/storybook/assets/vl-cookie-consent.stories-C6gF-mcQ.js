import{K as i,L as a,u as l,j as o,C as k,bc as g,s as b,x as y}from"./iframe-CYuKbPIU.js";import"./vl-cookie-consent.component-RfngptTP.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-C49Iumfs.js";import"./vl-datepicker.component-BP40-iVe.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BT-o0TdA.js";import"./vl-input-field-masked.component-BveMZxzc.js";import"./vl-radio.component-hwfXcKxP.js";import"./vl-radio-group.component-C8gC7BmN.js";import"./vl-select.component-6g5kFKgt.js";import"./vl-select-rich.component-DtV_8s-w.js";import"./vl-textarea.component-DuSmPQH1.js";import"./vl-textarea-rich.component-JN7e0g4F.js";import"./vl-upload.component-Dwvrbdbs.js";import"./vl-upload-progress.component-DVCZ4MKQ.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,t={analytics:!1,autoOpenDisabled:!1,autoOptInFunctionalDisabled:!1,owner:"",link:"",matomoId:"",matomoUrl:"",onClose:h("vl-close")},f={analytics:{name:"analytics",description:"Attribuut wordt gebruikt om het verwerken van gebruikersstatistieken te activeren.",table:{type:{summary:a.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(t.analytics)}}},autoOpenDisabled:{name:"auto-open-disabled",description:"Attribuut wordt gebruikt om te voorkomen dat de cookie consent modal onmiddellijk geautomatiseerd geopend wordt.",table:{type:{summary:a.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(t.autoOpenDisabled)}}},autoOptInFunctionalDisabled:{name:"auto-opt-in-functional-disabled",description:"Attribuut wordt gebruikt om de niet wijzigbare functionele opt-in optie te deactiveren.",table:{type:{summary:a.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(t.autoOptInFunctionalDisabled)}}},owner:{name:"owner",description:"['Departement Omgeving'] - Attribuut wordt gebruikt om in de content tekst de eigenaar te specifiëren.",table:{type:{summary:a.STRING},category:i.ATTRIBUTES,defaultValue:{summary:t.owner}}},link:{name:"link",description:"['https://www.omgevingvlaanderen.be/privacy'] - Attribuut wordt gebruikt om in de content tekst de privacy link te specifiëren.",table:{type:{summary:a.STRING},category:i.ATTRIBUTES,defaultValue:{summary:t.link}}},matomoId:{name:"matomo-id",description:"Bepaald matomo id. Dit moet in combinatie met `matomo-url` gebruikt worden. Wanneer deze 2 properties ingesteld zijn, wordt niet meer `window.location.host` gekeken om de matomo id & url te bepalen.",table:{type:{summary:a.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:t.matomoId}}},matomoUrl:{name:"matomo-url",description:"Bepaald matomo url. Dit moet in combinatie met `matomo-id` gebruikt worden. Wanneer deze 2 properties ingesteld zijn, wordt niet meer `window.location.host` gekeken om de matomo id & url te bepalen.",table:{type:{summary:a.STRING},category:i.ATTRIBUTES,defaultValue:{summary:t.matomoUrl}}},onClose:{name:"vl-close",description:"Afgevuurd nadat het cookie-consent modal gesloten wordt.",table:{category:i.EVENTS}}};function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...n.components},{FluxComponentMetaData:s}=e;return s||w("FluxComponentMetaData"),o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"cookie-consent",children:"Cookie Consent"}),`
`,o.jsx(s,{id:"components-compliance-cookie-consent"}),`
`,o.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,o.jsx(e.p,{children:`De cookie consent kan gebruikt worden om de gebruiker te informeren over al de cookies die gebruikt worden.
Daarnaast kunnen er mits toestemming van de gebruiker analytics worden toegepast.`}),`
`,o.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-js",children:`import { VlCookieConsent } from '@domg-wc/components/compliance';
`})}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<vl-cookie-consent></vl-cookie-consent>
`})}),`
`,o.jsx(k,{of:r}),`
`,o.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,o.jsx(g,{of:r}),`
`,o.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,o.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,o.jsx(e.p,{children:o.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/story/legacy-vl-cookie-consent--default",rel:"nofollow",children:"Legacy Storybook - Cookie Consent"})}),`
`,o.jsx(e.p,{children:o.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlCookieConsent.html",rel:"nofollow",children:"Legacy Documentatie - Cookie Consent"})}),`
`,o.jsx(e.p,{children:o.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie-consent.html",rel:"nofollow",children:"Legacy Demo - Cookie Consent"})})]})}function v(n={}){const{wrapper:e}={...l(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(c,{...n})}):c(n)}function w(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const L={id:"components-compliance-cookie-consent",title:"Components - Compliance/cookie-consent",tags:["autodocs"],args:t,argTypes:f,parameters:{layout:"fullscreen",docs:{page:v}}},r=b(t,({analytics:n,autoOptInFunctionalDisabled:e,owner:s,link:m,matomoId:d,matomoUrl:u,onClose:p})=>y`
            <div>
                <vl-cookie-consent
                    id="cookie-consent"
                    analytics=${n}
                    matomo-id=${d}
                    matomo-url=${u}
                    auto-open-disabled=""
                    ?auto-opt-in-functional-disabled=${e}
                    owner=${s}
                    link=${m}
                    @vl-close=${p}
                ></vl-cookie-consent>
                <vl-button id="button-open-cookie-consent" @click=${()=>{document.querySelector("#cookie-consent")?.open()}}>
                    Open cookie-consent
                </vl-button>
            </div>
        `);r.storyName="vl-cookie-consent - default";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(cookieConsentArgs, ({
  analytics,
  autoOptInFunctionalDisabled,
  owner,
  link,
  matomoId,
  matomoUrl,
  onClose
}) => {
  const handleOpenClick = () => {
    document.querySelector<any>('#cookie-consent')?.open();
  };
  return html\`
            <div>
                <vl-cookie-consent
                    id="cookie-consent"
                    analytics=\${analytics}
                    matomo-id=\${matomoId}
                    matomo-url=\${matomoUrl}
                    auto-open-disabled=""
                    ?auto-opt-in-functional-disabled=\${autoOptInFunctionalDisabled}
                    owner=\${owner}
                    link=\${link}
                    @vl-close=\${onClose}
                ></vl-cookie-consent>
                <vl-button id="button-open-cookie-consent" @click=\${handleOpenClick}>
                    Open cookie-consent
                </vl-button>
            </div>
        \`;
})`,...r.parameters?.docs?.source}}};const M=["CookieConsentDefault"];export{r as CookieConsentDefault,M as __namedExportsOrder,L as default};
