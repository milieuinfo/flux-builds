import{R as t,U as l,O as c,P as m,u as d,j as e,C as p,bh as v,s as g,c4 as u,x as h}from"./iframe-iHJvAyUB.js";import{p as z}from"./vl-proza-message.stories-msw-BAg7ZuZM.js";import"./preload-helper-D9Z9MdNV.js";const r={...m,baseUrl:"",domain:""},b={...c,baseUrl:{name:"base-url",description:"Optionele baseUrl waarvan de Proza berichten opgehaald worden.<br>Indien deze baseUrl niet meegegeven wordt, worden de Proza berichten opgehaald relatief tov de huidige url op het pad 'proza/domein/{domain}'.<br>Dit attribuut is niet reactief.",control:!1,table:{type:{summary:l.URL},category:t.ATTRIBUTES,defaultValue:{summary:r.baseUrl}}},domain:{name:"domain",description:"Het Proza domein waarin de Proza berichten zit.",type:{name:l.STRING,required:!0},control:!1,table:{type:{summary:l.STRING},category:t.ATTRIBUTES,defaultValue:{summary:r.domain}}}};function i(a){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...a.components},{FluxComponentMetaData:s}=o;return s||j("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"proza-message-preloader",children:"Proza Message Preloader"}),`
`,e.jsx(s,{id:"components-block-proza-message-proza-message-preloader"}),`
`,e.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(o.p,{children:["Gebruik de ",e.jsx(o.code,{children:"proza-message-preloader"}),` component om alle Proza berichten van een domein in 1 keer op te halen en in
cache te stoppen.`,e.jsx("br",{}),`
De `,e.jsx(o.a,{href:"/docs/components-block-proza-message--proza-message-default",children:"proza-message"}),` component gaat eerst kijken of het bericht in
de cache zit vooraleer een request naar buiten te sturen.`,e.jsx("br",{}),`
Deze component voeg je 1 keer toe in je applicatie per domein, bij voorkeur op het hoogste niveau.`]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { VlProzaMessagePreloader } from '@domg-wc/components/block';
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<vl-proza-message-preloader></vl-proza-message-preloader>
`})}),`
`,e.jsx(p,{of:n}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(v,{of:n}),`
`,e.jsx(o.h2,{id:"base-url",children:"Base Url"}),`
`,e.jsxs(o.p,{children:["Je kan optioneel een ",e.jsx(o.code,{children:"baseUrl"})," meegeven aan de ",e.jsx(o.code,{children:"proza-message"}),` component waarvan de Proza berichten opgehaald
worden.`,e.jsx("br",{}),`
De Proza berichten zullen opgehaald worden vanaf `,e.jsx(o.code,{children:"{baseUrl}proza/domein/{domain}/{code}"}),".",e.jsx("br",{}),`
Indien er geen `,e.jsx(o.code,{children:"baseUrl"}),` meegegeven wordt, worden de Proza berichten opgehaald relatief tov de huidige url op het pad
`,e.jsx(o.code,{children:"proza/domein/{domain}/{code}"}),".",e.jsx("br",{}),`
Dit attribuut is niet reactief, zorg ervoor dat als je dit attribuut gebruikt het meteen correct ingevuld staat.`]}),`
`,e.jsx(o.h2,{id:"manuele-preloads",children:"Manuele preloads"}),`
`,e.jsxs(o.p,{children:["Je kan ",e.jsx(o.code,{children:"VlProzaMessagePreloader.preload('domein')"}),` gebruiken om manueel domeinen te preloaden indien je controle wilt
over de volgorde van de domeinen of het moment waarop de preload gebeurd.`]}),`
`,e.jsx(o.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(o.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlProzaMessagePreloader.html",rel:"nofollow",children:"Legacy Documentatie - Proza Message Preloader"})})]})}function x(a={}){const{wrapper:o}={...d(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(i,{...a})}):i(a)}function j(a,o){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const y={id:"components-block-proza-message-proza-message-preloader",title:"Components - Block/proza-message/proza-message-preloader",tags:["autodocs"],args:r,argTypes:b,parameters:{docs:{page:x},controls:{hideNoControlsWarning:!0},msw:{handlers:z}}},n=g(r,()=>(u.clearCache(),h`
        <div>
            <vl-proza-message-preloader domain="mockdomain"></vl-proza-message-preloader>
            <div class="vl-grid vl-stacked-small">
                <div class="vl-column vl-column--12">
                    <vl-title type="h6">Als een inline element:</vl-title>
                    <vl-proza-message domain="mockdomain" code="inline"></vl-proza-message>
                </div>
                <div class="vl-column vl-column--12">
                    <vl-title type="h6">Als een block element:</vl-title>
                    <vl-proza-message domain="mockdomain" code="block"></vl-proza-message>
                </div>
                <div class="vl-column vl-column--12">
                    <vl-title type="h6">In een knop:</vl-title>
                    <vl-button>
                        <vl-proza-message domain="mockdomain" code="action"></vl-proza-message>
                    </vl-button>
                </div>
                <div class="vl-column vl-column--12">
                    <vl-title type="h6">In een link:</vl-title>
                    <vl-link href="#" external>
                        <vl-proza-message domain="mockdomain" code="action"></vl-proza-message>
                    </vl-link>
                </div>
            </div>
        </div>
    `));n.storyName="vl-proza-message-preloader - default";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(prozaMessagePreloaderArgs, () => {
  VlProzaMessage.clearCache();
  return html\`
        <div>
            <vl-proza-message-preloader domain="mockdomain"></vl-proza-message-preloader>
            <div class="vl-grid vl-stacked-small">
                <div class="vl-column vl-column--12">
                    <vl-title type="h6">Als een inline element:</vl-title>
                    <vl-proza-message domain="mockdomain" code="inline"></vl-proza-message>
                </div>
                <div class="vl-column vl-column--12">
                    <vl-title type="h6">Als een block element:</vl-title>
                    <vl-proza-message domain="mockdomain" code="block"></vl-proza-message>
                </div>
                <div class="vl-column vl-column--12">
                    <vl-title type="h6">In een knop:</vl-title>
                    <vl-button>
                        <vl-proza-message domain="mockdomain" code="action"></vl-proza-message>
                    </vl-button>
                </div>
                <div class="vl-column vl-column--12">
                    <vl-title type="h6">In een link:</vl-title>
                    <vl-link href="#" external>
                        <vl-proza-message domain="mockdomain" code="action"></vl-proza-message>
                    </vl-link>
                </div>
            </div>
        </div>
    \`;
})`,...n.parameters?.docs?.source}}};const M=["ProzaMessagePreloaderDefault"];export{n as ProzaMessagePreloaderDefault,M as __namedExportsOrder,y as default};
