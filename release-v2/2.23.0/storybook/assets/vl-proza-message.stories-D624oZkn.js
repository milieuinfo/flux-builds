import{C as i,T as l,d as g,a as u,s as m}from"./stories.helper-DYHi_5m6.js";import{u as v,j as e,C as d,b4 as b,O as p,b as h}from"./iframe-Cv28D2NX.js";import{p as k,b as z}from"./vl-proza-message.stories-msw-Dz7UtBxq.js";import"./preload-helper-PPVm8Dsz.js";const o={...u,baseUrl:"",block:!1,code:"",domain:"",parameters:""},j={...g,baseUrl:{name:"base-url",description:"Optionele baseUrl waarvan het Proza bericht opgehaald wordt.<br>Indien deze baseUrl niet meegegeven wordt, wordt het Proza bericht opgehaald relatief tov de huidige url op het pad 'proza/domein/{domain}/{code}'.<br>Dit attribuut is niet reactief.",control:!1,table:{type:{summary:l.URL},category:i.ATTRIBUTES,defaultValue:{summary:o.baseUrl}}},block:{name:"block",description:"Duidt aan dat de inhoud van het Proza bericht een block element is.",control:!1,table:{type:{summary:l.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(o.block)}}},code:{name:"code",description:"De code die het Proza bericht identificeert.",type:{name:l.STRING,required:!0},control:!1,table:{type:{summary:l.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.code}}},domain:{name:"domain",description:"Het Proza domein waarin het Proza bericht zit.",type:{name:l.STRING,required:!0},control:!1,table:{type:{summary:l.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.domain}}},parameters:{name:"parameters",description:"De key/value parameters die verwerkt en getoond zullen worden in het content element.",control:!1,table:{type:{summary:l.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.parameters}}}};function c(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...v(),...a.components},{FluxComponentMetaData:s}=n;return s||f("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"proza-message",children:"Proza Message"}),`
`,e.jsx(s,{id:"components-block-proza-message-proza-message"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"proza-message"}),` component om een Proza bericht af te beelden dat achterliggend beheerd kan worden door de
business.`,e.jsx("br",{}),`
Voor het ophalen van alle Proza berichten voor een domein zie de
`,e.jsx(n.a,{href:"/docs/components-block-proza-message-preloader--proza-message-preloader-default",children:"proza-message-preloader"})," component."]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlProzaMessage } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-proza-message></vl-proza-message>
`})}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(b,{of:t}),`
`,e.jsx(n.h2,{id:"base-url",children:"Base Url"}),`
`,e.jsxs(n.p,{children:["Je kan optioneel een ",e.jsx(n.code,{children:"baseUrl"})," meegeven aan de ",e.jsx(n.code,{children:"proza-message"})," component waarvan het Proza bericht opgehaald wordt.",e.jsx("br",{}),`
Het Proza bericht zal opgehaald worden vanaf `,e.jsx(n.code,{children:"{baseUrl}proza/domein/{domain}/{code}"}),".",e.jsx("br",{}),`
Indien er geen `,e.jsx(n.code,{children:"baseUrl"}),` meegegeven wordt, wordt het Proza bericht opgehaald relatief tov de huidige url op het pad
`,e.jsx(n.code,{children:"proza/domein/{domain}/{code}"}),".",e.jsx("br",{}),`
Dit attribuut is niet reactief, zorg ervoor dat als je dit attribuut gebruikt het meteen correct ingevuld staat.`]}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"editeerbaar",children:"Editeerbaar"}),`
`,e.jsxs(n.p,{children:[`Bij het ophalen van een Proza bericht voor een domein worden voor dat domein de toegelaten operaties opgehaald op basis
van de rechten van de huidige gebruiker. Indien er voor de huidige gebruiker ingesteld staat dat de Proza berichten voor
dit domein editeerbaar zijn, wordt er naast de Proza berichten een edit-knop en refresh-knop afgebeeld.`,e.jsx("br",{})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:["De edit-knop brengt de gebruiker naar het Proza portaal waar het bericht in kwestie aangepast kan worden.",e.jsx("br",{}),`
De refresh-knop kan gebruikt worden om na de aanpassing het Proza bericht opnieuw op te halen.`]}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h4,{id:"gekende-beperking-geneste-knoppen-in-een-knop-of-link",children:"Gekende beperking: geneste knoppen in een knop of link"}),`
`,e.jsxs(n.p,{children:["Staat een editeerbaar Proza bericht in een ",e.jsx(n.code,{children:"vl-button"})," of ",e.jsx(n.code,{children:"vl-link"}),`, dan komen de edit-knop en de refresh-knop binnen
die knop of link te staan. Interactieve elementen horen niet in elkaar te zitten (WCAG 1.3.1): een schermlezer leest de
namen van de twee knoppen mee voor als deel van de omringende knop, bijvoorbeeld "Action Bericht aanpassen in Proza
(opent in een nieuw venster) Bericht opnieuw ophalen", en kondigt de twee knoppen daarbinnen niet altijd als aparte
knoppen aan.`]}),`
`,e.jsx(n.p,{children:`Enkel gebruikers met update-rechten op het Proza domein krijgen dit te zien, in de praktijk beheerders, business en
analisten. Voor alle andere gebruikers bevat de knop of link alleen de tekst van het bericht.`}),`
`,e.jsxs(n.p,{children:["Wil je de nesting vermijden, haal de tekst van een knop of link dan op zonder ",e.jsx(n.code,{children:"vl-proza-message"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["in een Lit template met de ",e.jsx(n.a,{href:"/docs/components-block-proza-message-proza-directive--documentatie",children:"vlProza directive"}),`,
die het bericht als platte tekst invult;`]}),`
`,e.jsxs(n.li,{children:["daarbuiten met ",e.jsx(n.code,{children:"VlProzaMessage.getMessage()"}),", dat een ",e.jsx(n.code,{children:"Promise"})," met de HTML van het bericht teruggeeft."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:"<vl-button>${vlProza('actie.bewaren')}</vl-button>\n"})}),`
`,e.jsx(n.p,{children:`De edit-knop en de refresh-knop zijn er voor dat bericht dan niet: aanpassen gebeurt rechtstreeks in het Proza portaal
en de nieuwe tekst verschijnt pas na het herladen van de pagina.`}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(n.h3,{id:"zet-de-semantiek-in-het-proza-bericht-zelf",children:"Zet de semantiek in het Proza bericht zelf"}),`
`,e.jsxs(n.p,{children:["De component plaatst de HTML van het Proza bericht ongewijzigd in een ",e.jsx(n.code,{children:"vl-typography"}),` en voegt zelf geen semantiek toe.
De juiste elementen moeten dus in het bericht zelf staan: een `,e.jsx(n.code,{children:"<p>"})," voor een paragraaf, een ",e.jsx(n.code,{children:"<ul>"})," of ",e.jsx(n.code,{children:"<ol>"}),` voor een
lijst, een `,e.jsx(n.code,{children:"<h2>"})," tot ",e.jsx(n.code,{children:"<h6>"})," voor een tussentitel. Gebruik geen ",e.jsx(n.code,{children:"<div>"})," of ",e.jsx(n.code,{children:"<br/>"}),` om tekst op te delen: een
schermlezer herkent dan geen paragrafen of lijsten.`,e.jsx("br",{}),`
Een bericht dat inline in een zin, knop of link staat, bevat enkel tekst en inline elementen zoals `,e.jsx(n.code,{children:"<strong>"})," of ",e.jsx(n.code,{children:"<em>"}),"."]})]})}function x(a={}){const{wrapper:n}={...v(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(c,{...a})}):c(a)}function f(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const M={id:"components-block-proza-message-proza-message",title:"Components - Block/proza-message/proza-message",tags:["autodocs"],args:o,argTypes:j,parameters:{docs:{page:x},controls:{hideNoControlsWarning:!0},msw:{handlers:[...k,...z]}}},t=m(o,()=>(p.clearCache(),h`
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
    `));t.storyName="vl-proza-message - default";const r=m(o,()=>(p.clearCache(),h`
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
    `));r.storyName="vl-proza-message - editable";const A=["ProzaMessageDefault","ProzaMessageEditable"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(prozaMessageArgs, () => {
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
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(prozaMessageArgs, () => {
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
})`,...r.parameters?.docs?.source}}};export{t as ProzaMessageDefault,r as ProzaMessageEditable,A as __namedExportsOrder,M as default};
