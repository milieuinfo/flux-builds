import{Z as m,_ as p,a1 as S,W as E,cw as h,X as A,u as T,j as e,C as c,bc as O,s as u,x as d,r as q,d as L,cx as C,cy as D}from"./iframe-nqJ0ju39.js";import{o as g}from"./unsafe-html-BpdtmJuL.js";import"./preload-helper-D9Z9MdNV.js";const _={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right"},i={...A,...h,defaultSlot:""},F={...E,fadeOut:{name:"fade-out",description:`Elke alert verdwijnt automatisch 5 seconden na openen. 

 Dit kan toegankelijkheidsproblemen veroorzaken. Meer info [hier](?path=/docs/components-block-toaster--documentatie#fade-out).`,table:{type:{summary:p.BOOLEAN},category:m.ATTRIBUTES,defaultValue:{summary:String(h.fadeOut)}}},placement:{name:"placement",description:"Positioneert de toaster.<br>Standaard worden die geplaatst in de rechterbovenhoek.",control:{type:S.SELECT},options:Object.values(_),table:{type:{summary:p.STRING},category:m.ATTRIBUTES,defaultValue:{summary:String(h.placement)}}},defaultSlot:{name:"[default]",description:"De inhoud van de toaster. Dit is typisch een vl-alert.",table:{type:{summary:p.HTML},category:m.SLOTS}}};function j(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...T(),...n.components},{FluxAlert:r,FluxComponentMetaData:f}=t;return r||b("FluxAlert"),f||b("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"toaster",children:"Toaster"}),`
`,e.jsx(f,{id:"components-block-toaster"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"toaster"})," component om meldingen af te beelden.",e.jsx("br",{})]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlToasterComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-toaster></vl-toaster>
`})}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(O,{of:o}),`
`,e.jsx(t.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(t.h3,{id:"declaratief",children:"Declaratief"}),`
`,e.jsxs(t.p,{children:["Je kan de meldingen declaratief toevoegen in het default slot van de ",e.jsx(t.code,{children:"vl-toaster"}),`, typisch gebruiken we
hiervoor de `,e.jsx(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"}),` component.
Het element verschijnt dan automatisch op de gekozen positie.`]}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(t.h3,{id:"dynamisch",children:"Dynamisch"}),`
`,e.jsxs(t.p,{children:["De ",e.jsx(t.code,{children:"showAlert()"}),`-methode, is de eenvoudigste manier om een melding te tonen.
Achterliggend maken we een `,e.jsx(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"}),` component aan met de
opgegeven parameters.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const toaster = document.querySelector('vl-toaster');
toaster.showAlert({
  type: 'warning',
  title: 'Technische storing',
  message: 'Uw aanvraag is niet verwerkt.\\nFout code: 36981',
  closable: true,
  multiline: true,
});
`})}),`
`,e.jsxs(t.p,{children:["Het meegegeven object ondersteunt alle attributen van de ",e.jsx(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"}),`
component, zoals `,e.jsx(t.code,{children:"multiline"})," om regeleinden (",e.jsx(t.code,{children:"\\n"}),") in de ",e.jsx(t.code,{children:"message"})," te bewaren."]}),`
`,e.jsx(c,{of:l}),`
`,e.jsxs(t.p,{children:["Als je meer controle wilt over de melding, kan je ook de ",e.jsx(t.code,{children:"show()"}),` methode gebruiken om een zelf samengesteld
HTML-element te tonen als melding.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const toaster = document.querySelector('vl-toaster');
// toont de melding gedeclareerd in het default slot van de toaster
toaster.show(document.querySelector('#warning-123')); // deze methode toont het meegegeven HTML element als toast
`})}),`
`,e.jsx(t.h3,{id:"layout",children:"Layout"}),`
`,e.jsxs(t.p,{children:["We volgen de stijl van Digitaal Vlaanderen, waarbij standaard de breedte op ",e.jsx(t.code,{children:"30rem"}),` wordt ingesteld.
Een alert heeft standaard geen breedte en neemt de volledige breedte over van zijn container (de `,e.jsx(t.code,{children:"vl-toaster"}),`),
namelijk `,e.jsx(t.code,{children:"30rem"}),"."]}),`
`,e.jsxs(t.p,{children:["Als er nood is hier van af te wijken, kan je de ",e.jsx(t.code,{children:"width"})," van de ",e.jsx(t.code,{children:"vl-toaster"}),` zelf aanpassen.
Vermijd hierbij het gebruik van inline styles.`]}),`
`,e.jsxs(t.p,{children:["Je kan hiervoor de ",e.jsx(t.code,{children:"--vl-toaster-width"})," custom variabele aanpassen, bv.:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.pagina {
       --vl-toaster-width: 50rem;
      }
`})}),`
`,e.jsx(t.h3,{id:"fade-out",children:"Fade out"}),`
`,e.jsxs(t.p,{children:[`We bieden de mogelijkheid aan om meldingen automatisch te laten verdwijnen na een bepaalde tijd met
de `,e.jsx(t.code,{children:"fade-out"})," property."]}),`
`,e.jsx(r,{type:"warning",children:`
 Echter raden we aan om dit te vermijden waar mogelijk gezien dit de toegankelijkheid van de
 toaster negatief kan beïnvloeden. Gebruikers kunnen de melding mogelijk niet op tijd lezen of begrijpen,
 vooral als ze gebruik maken van schermlezers of andere hulpmiddelen.
`}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(t.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(t.h3,{id:"fade-out-1",children:"fade-out"}),`
`,e.jsxs(t.p,{children:["De ",e.jsx(t.code,{children:"fade-out"})," property doet meldingen automatisch verdwijnen na 5 seconden."]}),`
`,e.jsx(t.p,{children:`Vermijd het gebruik waar mogelijk gezien dit de toegankelijkheid van de toaster negatief beïnvloedt. Gebruikers kunnen
de melding mogelijk niet op tijd lezen of begrijpen, dit is problematisch bij het gebruik van schermlezers.`}),`
`,e.jsx(t.h2,{id:"custom-css-properties",children:"Custom CSS Properties"}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Naam"}),e.jsx("td",{children:"Beschrijving"}),e.jsx("td",{children:"Default"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"--vl-toaster-width"})}),e.jsx("td",{children:"breedte van de toaster"}),e.jsx("td",{children:"30rem"})]})]}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/toaster",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Toaster"})})]})}function M(n={}){const{wrapper:t}={...T(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(j,{...n})}):j(n)}function b(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}var x=Object.freeze,z=Object.defineProperty,v=(n,t)=>x(z(n,"raw",{value:x(t||n.slice())})),w,y,k;q([L,C,D]);const R={id:"components-block-toaster",title:"Components - Block/toaster",tags:["autodocs"],args:i,argTypes:F,parameters:{contentPadding:"large",docs:{page:M,story:{inline:!0}},controls:{hideNoControlsWarning:!0}},decorators:[n=>d` <div style="height: 400px;">${n()}</div>`]},o=u(i,({placement:n,fadeOut:t,defaultSlot:r})=>d(w||(w=v([`
        <script>
            document.querySelector('#default-toaster-button')?.addEventListener('click', () => {
                const toaster = document.querySelector('vl-toaster');
                const template = document.querySelector('template#alert-success-template');

                if (template && toaster) {
                    // gerelateerde element ophalen uit de relevante template
                    const documentFragment = template.content.cloneNode(true);
                    const alert = documentFragment.querySelector('#alert-success');
                    // het element toevogen aan de toaster
                    toaster.appendChild(alert);
                }
            });
        <\/script>
        <template id="alert-success-template">
            <vl-alert id="alert-success" type="success" icon="check" title="Gelukt" closable>
                <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>
            </vl-alert>
        </template>
        <vl-toaster id="default-toaster" placement=`," ?fade-out=",`>
            `,`
        </vl-toaster>
        <vl-button id="default-toaster-button"> Toon succesmelding</vl-button>
    `])),n,t,g(r)));o.storyName="vl-toaster - default";const a=u(i,({placement:n,fadeOut:t,defaultSlot:r})=>d`
        <vl-toaster id="default-toaster" placement=${n} ?fade-out=${t}>
            ${g(r)}
        </vl-toaster>
    `);a.storyName="vl-toaster - default slot";a.args={placement:"bottom-right",defaultSlot:`<vl-alert
                    id="alert-default"
                    type="error"
                    icon="warning"
                    title="Foutmelding"
                    small
                >
                    <p>Voorwaarden niet voldaan.</p>
                </vl-alert>`};const l=u(i,({placement:n,fadeOut:t})=>d(y||(y=v([`
        <script>
            document.querySelector('#button-technical-error')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-show-alert');
                toaster.showAlert({
                    title: 'Technische storing',
                    icon: 'warning',
                    type: 'warning',
                    message: 'Uw aanvraag is niet verwerkt.\\nFout code: 36981',
                    closable: true,
                    multiline: true,
                });
            });
        <\/script>
        <vl-toaster id="toaster-show-alert" ?fade-out=`," placement=",`></vl-toaster>
        <vl-button id="button-technical-error"> Toon waarschuwing</vl-button>
    `],[`
        <script>
            document.querySelector('#button-technical-error')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-show-alert');
                toaster.showAlert({
                    title: 'Technische storing',
                    icon: 'warning',
                    type: 'warning',
                    message: 'Uw aanvraag is niet verwerkt.\\\\nFout code: 36981',
                    closable: true,
                    multiline: true,
                });
            });
        <\/script>
        <vl-toaster id="toaster-show-alert" ?fade-out=`," placement=",`></vl-toaster>
        <vl-button id="button-technical-error"> Toon waarschuwing</vl-button>
    `])),t,n));l.storyName="vl-toaster - show alert";l.parameters={controls:{exclude:["defaultSlot"]}};const s=u(i,({placement:n,fadeOut:t,defaultSlot:r})=>d(k||(k=v([`
        <script>
            document.querySelector('#button-error')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('vl-toaster#toaster-fade-out');
                // toon inhoud van de gerelateerde template
                toaster?.show('#alert-error-template');
            });
            document.querySelector('#button-loader')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('vl-toaster#toaster-fade-out');
                toaster?.show('#alert-loader-template');
            });
        <\/script>
        <template id="alert-error-template">
            <vl-alert type="error" icon="warning" title="Error">
                <p>Er is een fout opgetreden.</p>
            </vl-alert>
        </template>
        <template id="alert-loader-template">
            <vl-alert title="Melding">
                <vl-loader></vl-loader>
            </vl-alert>
        </template>
        <vl-toaster id="toaster-fade-out" placement=`," ?fade-out=",`>
            `,`
        </vl-toaster>
        <vl-button id="button-error"> Toon foutmelding</vl-button>
        <vl-button id="button-loader"> Toon melding met lader</vl-button>
    `])),n,t,g(r)));s.storyName="vl-toaster - fade out";s.args={fadeOut:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
  placement,
  fadeOut,
  defaultSlot
}) => {
  return html\`
        <script>
            document.querySelector('#default-toaster-button')?.addEventListener('click', () => {
                const toaster = document.querySelector('vl-toaster');
                const template = document.querySelector('template#alert-success-template');

                if (template && toaster) {
                    // gerelateerde element ophalen uit de relevante template
                    const documentFragment = template.content.cloneNode(true);
                    const alert = documentFragment.querySelector('#alert-success');
                    // het element toevogen aan de toaster
                    toaster.appendChild(alert);
                }
            });
        <\/script>
        <template id="alert-success-template">
            <vl-alert id="alert-success" type="success" icon="check" title="Gelukt" closable>
                <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>
            </vl-alert>
        </template>
        <vl-toaster id="default-toaster" placement=\${placement} ?fade-out=\${fadeOut}>
            \${unsafeHTML(defaultSlot)}
        </vl-toaster>
        <vl-button id="default-toaster-button"> Toon succesmelding</vl-button>
    \`;
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
  placement,
  fadeOut,
  defaultSlot
}) => {
  return html\`
        <vl-toaster id="default-toaster" placement=\${placement} ?fade-out=\${fadeOut}>
            \${unsafeHTML(defaultSlot)}
        </vl-toaster>
    \`;
})`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
  placement,
  fadeOut
}) => {
  return html\`
        <script>
            document.querySelector('#button-technical-error')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-show-alert');
                toaster.showAlert({
                    title: 'Technische storing',
                    icon: 'warning',
                    type: 'warning',
                    message: 'Uw aanvraag is niet verwerkt.\\\\nFout code: 36981',
                    closable: true,
                    multiline: true,
                });
            });
        <\/script>
        <vl-toaster id="toaster-show-alert" ?fade-out=\${fadeOut} placement=\${placement}></vl-toaster>
        <vl-button id="button-technical-error"> Toon waarschuwing</vl-button>
    \`;
})`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
  placement,
  fadeOut,
  defaultSlot
}) => {
  return html\`
        <script>
            document.querySelector('#button-error')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('vl-toaster#toaster-fade-out');
                // toon inhoud van de gerelateerde template
                toaster?.show('#alert-error-template');
            });
            document.querySelector('#button-loader')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('vl-toaster#toaster-fade-out');
                toaster?.show('#alert-loader-template');
            });
        <\/script>
        <template id="alert-error-template">
            <vl-alert type="error" icon="warning" title="Error">
                <p>Er is een fout opgetreden.</p>
            </vl-alert>
        </template>
        <template id="alert-loader-template">
            <vl-alert title="Melding">
                <vl-loader></vl-loader>
            </vl-alert>
        </template>
        <vl-toaster id="toaster-fade-out" placement=\${placement} ?fade-out=\${fadeOut}>
            \${unsafeHTML(defaultSlot)}
        </vl-toaster>
        <vl-button id="button-error"> Toon foutmelding</vl-button>
        <vl-button id="button-loader"> Toon melding met lader</vl-button>
    \`;
})`,...s.parameters?.docs?.source}}};const G=["ToasterDefault","ToasterDefaultSlot","ToasterShowAlert","ToasterFadeOut"];export{o as ToasterDefault,a as ToasterDefaultSlot,s as ToasterFadeOut,l as ToasterShowAlert,G as __namedExportsOrder,R as default};
