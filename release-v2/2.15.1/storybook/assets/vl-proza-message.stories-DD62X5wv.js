import{Z as r,_ as l,W as u,X as h,u as m,j as e,C as d,bc as b,s as v,P as p,x as g}from"./iframe-nqJ0ju39.js";import{p as z,b as k}from"./vl-proza-message.stories-msw-CkYIg6pi.js";import"./preload-helper-D9Z9MdNV.js";const n={...h,baseUrl:"",block:!1,code:"",domain:"",parameters:""},y={...u,baseUrl:{name:"base-url",description:"Optionele baseUrl waarvan het Proza bericht opgehaald wordt.<br>Indien deze baseUrl niet meegegeven wordt, wordt het Proza bericht opgehaald relatief tov de huidige url op het pad 'proza/domein/{domain}/{code}'.<br>Dit attribuut is niet reactief.",control:!1,table:{type:{summary:l.URL},category:r.ATTRIBUTES,defaultValue:{summary:n.baseUrl}}},block:{name:"block",description:"Duidt aan dat de inhoud van het Proza bericht een block element is.",control:!1,table:{type:{summary:l.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(n.block)}}},code:{name:"code",description:"De code die het Proza bericht identificeert.",type:{name:l.STRING,required:!0},control:!1,table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:n.code}}},domain:{name:"domain",description:"Het Proza domein waarin het Proza bericht zit.",type:{name:l.STRING,required:!0},control:!1,table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:n.domain}}},parameters:{name:"parameters",description:"De key/value parameters die verwerkt en getoond zullen worden in het content element.",control:!1,table:{type:{summary:l.STRING},category:r.ATTRIBUTES,defaultValue:{summary:n.parameters}}}};function c(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...o.components},{FluxComponentMetaData:i}=a;return i||f("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"proza-message",children:"Proza Message"}),`
`,e.jsx(i,{id:"components-block-proza-message-proza-message"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"proza-message"}),` component om een Proza bericht af te beelden dat achterliggend beheerd kan worden door de
business.`,e.jsx("br",{}),`
Voor het ophalen van alle Proza berichten voor een domein zie de
`,e.jsx(a.a,{href:"/docs/components-block-proza-message-preloader--proza-message-preloader-default",children:"proza-message-preloader"})," component."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlProzaMessage } from '@domg-wc/components/block';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-proza-message></vl-proza-message>
`})}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(b,{of:t}),`
`,e.jsx(a.h2,{id:"base-url",children:"Base Url"}),`
`,e.jsxs(a.p,{children:["Je kan optioneel een ",e.jsx(a.code,{children:"baseUrl"})," meegeven aan de ",e.jsx(a.code,{children:"proza-message"})," component waarvan het Proza bericht opgehaald wordt.",e.jsx("br",{}),`
Het Proza bericht zal opgehaald worden vanaf `,e.jsx(a.code,{children:"{baseUrl}proza/domein/{domain}/{code}"}),".",e.jsx("br",{}),`
Indien er geen `,e.jsx(a.code,{children:"baseUrl"}),` meegegeven wordt, wordt het Proza bericht opgehaald relatief tov de huidige url op het pad
`,e.jsx(a.code,{children:"proza/domein/{domain}/{code}"}),".",e.jsx("br",{}),`
Dit attribuut is niet reactief, zorg ervoor dat als je dit attribuut gebruikt het meteen correct ingevuld staat.`]}),`
`,e.jsx(a.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(a.h3,{id:"editeerbaar",children:"Editeerbaar"}),`
`,e.jsxs(a.p,{children:[`Bij het ophalen van een Proza bericht voor een domein worden voor dat domein de toegelaten operaties opgehaald op basis
van de rechten van de huidige gebruiker. Indien er voor de huidige gebruiker ingesteld staat dat de Proza berichten voor
dit domein editeerbaar zijn, wordt er naast de Proza berichten een edit-knop en refresh-knop afgebeeld.`,e.jsx("br",{})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(a.p,{children:["De edit-knop brengt de gebruiker naar het Proza portaal waar het bericht in kwestie aangepast kan worden.",e.jsx("br",{}),`
De refresh-knop kan gebruikt worden om na de aanpassing het Proza bericht opnieuw op te halen.`]}),`
`,e.jsx(d,{of:s})]})}function x(o={}){const{wrapper:a}={...m(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(c,{...o})}):c(o)}function f(o,a){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const w={id:"components-block-proza-message-proza-message",title:"Components - Block/proza-message/proza-message",tags:["autodocs"],args:n,argTypes:y,parameters:{docs:{page:x},controls:{hideNoControlsWarning:!0},msw:{handlers:[...z,...k]}}},t=v(n,()=>(p.clearCache(),g`
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
    `));t.storyName="vl-proza-message - default";const s=v(n,()=>(p.clearCache(),g`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Als een inline element:</vl-title>
                <vl-proza-message domain="mockdomaineditable" code="inline"></vl-proza-message>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Als een block element:</vl-title>
                <vl-proza-message domain="mockdomaineditable" code="block"></vl-proza-message>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">In een knop:</vl-title>
                <vl-button>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-button>
                <vl-button secondary>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-button>
                <vl-button tertiary>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-button>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">In een link:</vl-title>
                <vl-link href="#" external>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-link>
            </div>
        </div>
    `));s.storyName="vl-proza-message - editable";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(prozaMessageArgs, () => {
  VlProzaMessage.clearCache();
  return html\`
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
    \`;
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(prozaMessageArgs, () => {
  VlProzaMessage.clearCache();
  return html\`
        <div class="vl-grid vl-stacked-small">
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Als een inline element:</vl-title>
                <vl-proza-message domain="mockdomaineditable" code="inline"></vl-proza-message>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">Als een block element:</vl-title>
                <vl-proza-message domain="mockdomaineditable" code="block"></vl-proza-message>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">In een knop:</vl-title>
                <vl-button>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-button>
                <vl-button secondary>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-button>
                <vl-button tertiary>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-button>
            </div>
            <div class="vl-column vl-column--12">
                <vl-title type="h6">In een link:</vl-title>
                <vl-link href="#" external>
                    <vl-proza-message domain="mockdomaineditable" code="action"></vl-proza-message>
                </vl-link>
            </div>
        </div>
    \`;
})`,...s.parameters?.docs?.source}}};const M=["ProzaMessageDefault","ProzaMessageEditable"];export{t as ProzaMessageDefault,s as ProzaMessageEditable,M as __namedExportsOrder,w as default};
