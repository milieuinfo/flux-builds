import{C as j,T as b,b as q,d as L,a as D,s as p}from"./stories.helper-DYHi_5m6.js";import{cX as f,u as O,j as e,C as l,b4 as C,b as a,r as M,e as $,cY as N,cZ as B}from"./iframe-Cv28D2NX.js";import{o as v}from"./unsafe-html-7Tp0Sqh9.js";import{V as P}from"./vl-modal.component-Di4jiGh5.js";import"./preload-helper-PPVm8Dsz.js";const F={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right"},r={...D,...f,defaultSlot:""},_={...L,fadeOut:{name:"fade-out",description:"Elke toast verdwijnt automatisch, ongeveer 5 seconden na het tonen. Een toast met het attribuut `persistent` blijft staan. Zolang de muis op de toaster staat of de focus erin zit, verdwijnt er geen enkele toast. \n\n Dit kan toegankelijkheidsproblemen veroorzaken. Meer info [hier](?path=/docs/components-block-toaster--documentatie#fade-out).",table:{type:{summary:b.BOOLEAN},category:j.ATTRIBUTES,defaultValue:{summary:String(f.fadeOut)}}},placement:{name:"placement",description:"Positioneert de toaster.<br>Standaard worden die geplaatst in de rechterbovenhoek.",control:{type:q.SELECT},options:Object.values(F),table:{type:{summary:b.STRING},category:j.ATTRIBUTES,defaultValue:{summary:String(f.placement)}}},defaultSlot:{name:"[default]",description:"De inhoud van de toaster. Dit is typisch een vl-alert.",table:{type:{summary:b.HTML},category:j.SLOTS}}};function x(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...O(),...n.components},{FluxAlert:o,FluxComponentMetaData:w}=t;return o||k("FluxAlert"),w||k("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"toaster",children:"Toaster"}),`
`,e.jsx(w,{id:"components-block-toaster"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"toaster"})," component om meldingen af te beelden.",e.jsx("br",{})]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlToasterComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-toaster></vl-toaster>
`})}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(C,{of:s}),`
`,e.jsx(t.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsx(t.h3,{id:"declaratief",children:"Declaratief"}),`
`,e.jsxs(t.p,{children:["Je kan de meldingen declaratief toevoegen in het default slot van de ",e.jsx(t.code,{children:"vl-toaster"}),`, typisch gebruiken we
hiervoor de `,e.jsx(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"}),` component.
Het element verschijnt dan automatisch op de gekozen positie.`]}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(t.h3,{id:"dynamisch",children:"Dynamisch"}),`
`,e.jsxs(t.p,{children:["De ",e.jsx(t.code,{children:"showAlert()"}),`-methode, is de eenvoudigste manier om een melding te tonen.
Achterliggend maken we een `,e.jsx(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"}),` component aan met de
opgegeven parameters.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const toaster = document.querySelector('vl-toaster');
toaster.showAlert({
  type: 'warning',
  titleLabel: 'Technische storing',
  message: 'Uw aanvraag is niet verwerkt.\\nFout code: 36981',
  closable: true,
  multiline: true,
});
`})}),`
`,e.jsxs(t.p,{children:["Het meegegeven object ondersteunt alle attributen van de ",e.jsx(t.a,{href:"/docs/components-block-alert--documentatie",children:"vl-alert"}),`
component in camelCase, zoals `,e.jsx(t.code,{children:"multiline"})," om regeleinden (",e.jsx(t.code,{children:"\\n"}),") in de ",e.jsx(t.code,{children:"message"})," te bewaren of ",e.jsx(t.code,{children:"alertRole"}),` om de rol
van de melding te kiezen. De attribuutnaam als key (`,e.jsx(t.code,{children:"'alert-role'"}),", ",e.jsx(t.code,{children:"'title-label'"}),") werkt ook. Een ",e.jsx(t.code,{children:"title"}),` zet de
titel ook, als `,e.jsx(t.code,{children:"title-label"})," op de melding; staan beide er, dan wint ",e.jsx(t.code,{children:"titleLabel"}),"."]}),`
`,e.jsx(l,{of:i}),`
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
`,e.jsxs(t.p,{children:["We bieden de mogelijkheid aan om meldingen automatisch te laten verdwijnen met het ",e.jsx(t.code,{children:"fade-out"}),` attribuut op de
`,e.jsx(t.code,{children:"vl-toaster"}),". Een melding verdwijnt dan ongeveer 5 seconden na het tonen."]}),`
`,e.jsx(o,{type:"warning",children:`
 Echter raden we aan om dit te vermijden waar mogelijk gezien dit de toegankelijkheid van de
 toaster negatief kan beïnvloeden. Gebruikers kunnen de melding mogelijk niet op tijd lezen of begrijpen,
 vooral als ze gebruik maken van schermlezers of andere hulpmiddelen.
`}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(t.h4,{id:"per-melding",children:"Per melding"}),`
`,e.jsxs(t.p,{children:["Je kan per melding kiezen of ze automatisch verdwijnt, met een attribuut op de melding zelf. De ",e.jsx(t.code,{children:"vl-toaster"}),` leest
die attributen, de `,e.jsx(t.code,{children:"vl-alert"})," doet er zelf niets mee."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"fade-out"}),": de melding verdwijnt automatisch, ook in een ",e.jsx(t.code,{children:"vl-toaster"})," zonder ",e.jsx(t.code,{children:"fade-out"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"persistent"}),": de melding blijft staan, ook in een ",e.jsx(t.code,{children:"vl-toaster"})," met ",e.jsx(t.code,{children:"fade-out"}),`. Heeft een melding beide attributen,
dan blijft ze staan.`]}),`
`]}),`
`,e.jsxs(t.p,{children:["Meldingen zonder een van deze attributen volgen het ",e.jsx(t.code,{children:"fade-out"})," attribuut van de ",e.jsx(t.code,{children:"vl-toaster"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<template id="alert-saved-template">
    <vl-alert fade-out type="success" icon="check" title-label="Bewaard">
        <p>Uw wijzigingen zijn bewaard.</p>
    </vl-alert>
</template>
`})}),`
`,e.jsxs(t.p,{children:["Bij ",e.jsx(t.code,{children:"show()"})," en ",e.jsx(t.code,{children:"showAlert()"})," regel je hetzelfde met de optionele tweede parameter ",e.jsx(t.code,{children:"{ fadeOut }"}),": ",e.jsx(t.code,{children:"true"}),` zet het
`,e.jsx(t.code,{children:"fade-out"})," attribuut op de melding, ",e.jsx(t.code,{children:"false"})," zet ",e.jsx(t.code,{children:"persistent"}),`. Die parameter heeft voorrang op de attributen die de
melding al heeft, bijvoorbeeld uit een `,e.jsx(t.code,{children:"<template>"}),". Zonder parameter blijven die attributen gelden."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const toaster = document.querySelector('vl-toaster');
toaster.show('#alert-saved-template');
toaster.showAlert(
  {
    type: 'error',
    titleLabel: 'Niet bewaard',
    message: 'Uw wijzigingen zijn niet bewaard. Probeer het later opnieuw.',
    closable: true,
  },
  { fadeOut: false },
);
`})}),`
`,e.jsxs(t.p,{children:["Meldingen in het default slot verdwijnen nooit automatisch, ook niet met ",e.jsx(t.code,{children:"fade-out"})," op de toaster of de melding."]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(t.h4,{id:"pauze-bij-hover-en-focus",children:"Pauze bij hover en focus"}),`
`,e.jsx(t.p,{children:`Zolang de muis op de toaster staat of de focus erin zit, verdwijnt er geen enkele melding. Alle meldingen in de
toaster wachten dan, zodat ze niet verschuiven terwijl de gebruiker ermee bezig is. Daarna loopt de resterende tijd
van elke melding verder.`}),`
`,e.jsx(t.h3,{id:"toaster-en-modal",children:"Toaster en modal"}),`
`,e.jsxs(t.p,{children:["Wil je een melding tonen terwijl een ",e.jsx(t.a,{href:"/docs/components-block-modal--documentatie",children:"vl-modal"}),` of
`,e.jsx(t.a,{href:"/docs/components-block-next-modal--documentatie",children:"vl-modal-next"})," open staat? Plaats dan een ",e.jsx(t.code,{children:"vl-toaster"}),` in het
`,e.jsx(t.code,{children:"content"}),` slot van de modal en toon de melding via die toaster. De gebruiker kan de melding dan sluiten en een
schermlezer kondigt ze aan.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-modal-next id="modal" title-label="Gegevens wijzigen" not-auto-closable>
    <div slot="content">
        ...
        <vl-toaster id="toaster-in-modal"></vl-toaster>
    </div>
    <vl-button slot="button">Bewaar</vl-button>
</vl-modal-next>
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`document.querySelector('#toaster-in-modal').showAlert({
    type: 'success',
    title: 'Bewaard',
    message: 'Uw wijzigingen zijn bewaard.',
    closable: true,
});
`})}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(t.h4,{id:"toaster-buiten-de-modal",children:"Toaster buiten de modal"}),`
`,e.jsxs(t.p,{children:["Ook een toaster op de pagina, buiten de modal, toont zijn meldingen boven een open ",e.jsx(t.code,{children:"vl-modal"}),", ",e.jsx(t.code,{children:"vl-modal-next"}),` of
eigen `,e.jsx(t.code,{children:"<dialog>"})," (geopend met ",e.jsx(t.code,{children:"showModal()"}),`) en haar achtergrond. Dat geldt ook voor meldingen die al zichtbaar waren
toen de modal openging. Sluit de laatste modal, dan staat de toaster weer op zijn gewone plaats in de pagina, met de
`,e.jsx(t.code,{children:"z-index"})," van ",e.jsx(t.code,{children:"--vl-z-layer--toaster"}),"."]}),`
`,e.jsx(o,{type:"warning",children:`
 Een melding van een toaster buiten de modal is zichtbaar, maar niet bedienbaar: de browser blokkeert alles buiten
 een open modal. Het sluitkruis van een closable melding werkt niet, schermlezers kondigen de melding niet aan en
 een klik op de melding komt terecht op wat eronder ligt. Boven de achtergrond van een closable modal sluit zo'n
 klik dus de modal. Ook de pauze bij hover en focus werkt niet: een melding die automatisch verdwijnt, verdwijnt
 ook terwijl de muis erop staat.
`}),`
`,e.jsx(l,{of:u,sourceState:"none"}),`
`,e.jsx(t.p,{children:"Hou rekening met het volgende:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Een ",e.jsx(t.code,{children:"<dialog>"})," in een shadow root, van een eigen component of van een andere library, herkent de toaster niet."]}),`
`,e.jsxs(t.li,{children:[`In Safari ouder dan versie 26, Chrome ouder dan 132 en Firefox ouder dan 133 komt de toaster pas boven een eigen
`,e.jsx(t.code,{children:"<dialog>"})," bij de eerstvolgende melding die je toont."]}),`
`,e.jsxs(t.li,{children:["Boven een modal staat de toaster los van zijn omgeving in de pagina: een voorouder met ",e.jsx(t.code,{children:"transform"})," of ",e.jsx(t.code,{children:"overflow"}),`
bepaalt de positie dan niet meer.`]}),`
`,e.jsxs(t.li,{children:["In een browser zonder ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",rel:"nofollow",children:"Popover API"}),` blijft een
melding van een toaster buiten de modal achter de modal staan.`]}),`
`]}),`
`,e.jsx(t.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsx(t.h3,{id:"meldingen-bij-een-open-modal",children:"Meldingen bij een open modal"}),`
`,e.jsxs(t.p,{children:[`Een melding van een toaster buiten een open modal is niet bedienbaar en wordt niet aangekondigd door schermlezers.
Plaats de toaster in de modal als de melding de gebruiker moet bereiken terwijl de modal open staat. Meer info
`,e.jsx(t.a,{href:"#toaster-en-modal",children:"hier"}),"."]}),`
`,e.jsx(t.h3,{id:"fade-out-1",children:"fade-out"}),`
`,e.jsxs(t.p,{children:["Het ",e.jsx(t.code,{children:"fade-out"}),` attribuut doet meldingen automatisch verdwijnen, ongeveer 5 seconden na het tonen. Dat is een
tijdslimiet in de zin van
`,e.jsx(t.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html",rel:"nofollow",children:"WCAG 2.2.1 Timing Adjustable"}),"."]}),`
`,e.jsx(t.p,{children:`Vermijd het gebruik waar mogelijk gezien dit de toegankelijkheid van de toaster negatief beïnvloedt. Gebruikers kunnen
de melding mogelijk niet op tijd lezen of begrijpen, dit is problematisch bij het gebruik van schermlezers.
De pauze bij hover en focus helpt, maar een toetsenbordgebruiker bereikt een melding zelden op tijd.`}),`
`,e.jsxs(t.p,{children:["Laat daarom foutmeldingen en meldingen met interactieve inhoud, zoals een sluitknop (",e.jsx(t.code,{children:"closable"}),") of het ",e.jsx(t.code,{children:"actions"}),` slot,
nooit automatisch verdwijnen. Geef ze het `,e.jsx(t.code,{children:"persistent"})," attribuut of toon ze met ",e.jsx(t.code,{children:"{ fadeOut: false }"}),"."]}),`
`,e.jsx(t.h3,{id:"testen-met-axe",children:"Testen met axe"}),`
`,e.jsxs(t.p,{children:["Een toast fadet in, en met ",e.jsx(t.code,{children:"fade-out"}),` ook weer uit. Scan je met axe terwijl die animatie loopt, dan meet de tool
half doorzichtige tekst en rapporteert ze een `,e.jsx(t.code,{children:"color-contrast"}),`-violation die bij volle dekking niet bestaat. Wacht
in je test tot de animatie uitgespeeld is in plaats van de regel uit te zetten, zie
`,e.jsx(t.a,{href:"/docs/richtlijnen-toegankelijkheid-praktijk-testen--documentatie#niet-scannen-tijdens-een-animatie",children:"Testen"}),"."]}),`
`,e.jsx(t.h2,{id:"custom-css-properties",children:"Custom CSS Properties"}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Naam"}),e.jsx("td",{children:"Beschrijving"}),e.jsx("td",{children:"Default"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"--vl-toaster-width"})}),e.jsx("td",{children:"breedte van de toaster"}),e.jsx("td",{children:"30rem"})]})]}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.vlaanderen.be/vlaanderen-design-system/componenten/toaster",rel:"nofollow",children:"Documentatie Digitaal Vlaanderen - Toaster"})})]})}function U(n={}){const{wrapper:t}={...O(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(x,{...n})}):x(n)}function k(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}var y=Object.freeze,G=Object.defineProperty,g=(n,t)=>y(G(n,"raw",{value:y(t||n.slice())})),z,S,T,A;M([$,N,B,P]);const X={id:"components-block-toaster",title:"Components - Block/toaster",tags:["autodocs"],args:r,argTypes:_,parameters:{contentPadding:"large",docs:{page:U,story:{inline:!0}},controls:{hideNoControlsWarning:!0}},decorators:[n=>a` <div style="height: 400px;">${n()}</div>`]},s=p(r,({placement:n,fadeOut:t,defaultSlot:o})=>a(z||(z=g([`
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
            <vl-alert id="alert-success" type="success" icon="check" title-label="Gelukt" closable>
                <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>
            </vl-alert>
        </template>
        <vl-toaster id="default-toaster" placement=`," ?fade-out=",`>
            `,`
        </vl-toaster>
        <vl-button id="default-toaster-button"> Toon succesmelding</vl-button>
    `])),n,t,v(o)));s.storyName="vl-toaster - default";const d=p(r,({placement:n,fadeOut:t,defaultSlot:o})=>a`
        <vl-toaster id="default-toaster" placement=${n} ?fade-out=${t}>
            ${v(o)}
        </vl-toaster>
    `);d.storyName="vl-toaster - default slot";d.args={placement:"bottom-right",defaultSlot:`<vl-alert
                    id="alert-default"
                    type="error"
                    icon="warning"
                    title-label="Foutmelding"
                    small
                >
                    <p>Voorwaarden niet voldaan.</p>
                </vl-alert>`};const i=p(r,({placement:n,fadeOut:t})=>a(S||(S=g([`
        <script>
            document.querySelector('#button-technical-error')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-show-alert');
                toaster.showAlert({
                    titleLabel: 'Technische storing',
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
                    titleLabel: 'Technische storing',
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
    `])),t,n));i.storyName="vl-toaster - show alert";i.parameters={controls:{exclude:["defaultSlot"]}};const c=p(r,({placement:n,fadeOut:t,defaultSlot:o})=>a(T||(T=g([`
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
            <vl-alert type="error" icon="warning" title-label="Error">
                <p>Er is een fout opgetreden.</p>
            </vl-alert>
        </template>
        <template id="alert-loader-template">
            <vl-alert title-label="Melding">
                <vl-loader></vl-loader>
            </vl-alert>
        </template>
        <vl-toaster id="toaster-fade-out" placement=`," ?fade-out=",`>
            `,`
        </vl-toaster>
        <vl-button id="button-error"> Toon foutmelding</vl-button>
        <vl-button id="button-loader"> Toon melding met lader</vl-button>
    `])),n,t,v(o)));c.storyName="vl-toaster - fade out";c.args={fadeOut:!0};const h=p(r,({placement:n,fadeOut:t,defaultSlot:o})=>a(A||(A=g([`
        <script>
            document.querySelector('#button-saved')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('vl-toaster#toaster-fade-out-per-toast');
                // de melding in de template heeft het fade-out attribuut
                toaster?.show('#alert-saved-template');
            });
            document.querySelector('#button-not-saved')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('vl-toaster#toaster-fade-out-per-toast');
                toaster?.showAlert(
                    {
                        titleLabel: 'Niet bewaard',
                        icon: 'warning',
                        type: 'error',
                        message: 'Uw wijzigingen zijn niet bewaard. Probeer het later opnieuw.',
                        closable: true,
                    },
                    { fadeOut: false },
                );
            });
        <\/script>
        <template id="alert-saved-template">
            <vl-alert fade-out type="success" icon="check" title-label="Bewaard">
                <p>Uw wijzigingen zijn bewaard.</p>
            </vl-alert>
        </template>
        <vl-toaster id="toaster-fade-out-per-toast" placement=`," ?fade-out=",`>
            `,`
        </vl-toaster>
        <vl-button id="button-saved"> Toon succesmelding</vl-button>
        <vl-button id="button-not-saved"> Toon foutmelding</vl-button>
    `])),n,t,v(o)));h.storyName="vl-toaster - fade out per toast";const E={controls:{exclude:["defaultSlot"]},docs:{story:{inline:!1,height:"400px"}}},u=p(r,({placement:n,fadeOut:t})=>a`
        <vl-toaster id="toaster-modal" ?fade-out=${t} placement=${n}></vl-toaster>
        <vl-button
            id="button-modal-open"
            modal-open="modal-toaster"
            aria-controls="modal-toaster"
            aria-haspopup="dialog"
        >
            Open modal
        </vl-button>
        <vl-modal-next id="modal-toaster" title-label="Gegevens wijzigen" not-auto-closable>
            <p slot="content">De melding van de toaster op de pagina verschijnt boven deze modal.</p>
            <vl-button id="button-modal-save" slot="button" @vl-click=${()=>{document.querySelector("#toaster-modal")?.showAlert({title:"Bewaard",icon:"check",type:"success",message:"Uw wijzigingen zijn bewaard."})}}>Bewaar</vl-button>
        </vl-modal-next>
    `);u.storyName="vl-toaster - modal";u.parameters=E;const m=p(r,({placement:n,fadeOut:t})=>a`
        <vl-button
            id="button-in-modal-open"
            modal-open="modal-with-toaster"
            aria-controls="modal-with-toaster"
            aria-haspopup="dialog"
        >
            Open modal
        </vl-button>
        <vl-modal-next id="modal-with-toaster" title-label="Gegevens wijzigen" not-auto-closable>
            <div slot="content">
                <p>De toaster staat in deze modal: je kan de melding sluiten.</p>
                <vl-toaster id="toaster-in-modal" ?fade-out=${t} placement=${n}></vl-toaster>
            </div>
            <vl-button id="button-in-modal-save" slot="button" @vl-click=${()=>{document.querySelector("#toaster-in-modal")?.showAlert({title:"Bewaard",icon:"check",type:"success",message:"Uw wijzigingen zijn bewaard.",closable:!0})}}>Bewaar</vl-button>
        </vl-modal-next>
    `);m.storyName="vl-toaster - in modal";m.parameters=E;const Z=["ToasterDefault","ToasterDefaultSlot","ToasterShowAlert","ToasterFadeOut","ToasterFadeOutPerToast","ToasterModal","ToasterInModal"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
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
            <vl-alert id="alert-success" type="success" icon="check" title-label="Gelukt" closable>
                <p>Wij hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.</p>
            </vl-alert>
        </template>
        <vl-toaster id="default-toaster" placement=\${placement} ?fade-out=\${fadeOut}>
            \${unsafeHTML(defaultSlot)}
        </vl-toaster>
        <vl-button id="default-toaster-button"> Toon succesmelding</vl-button>
    \`;
})`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
  placement,
  fadeOut,
  defaultSlot
}) => {
  return html\`
        <vl-toaster id="default-toaster" placement=\${placement} ?fade-out=\${fadeOut}>
            \${unsafeHTML(defaultSlot)}
        </vl-toaster>
    \`;
})`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
  placement,
  fadeOut
}) => {
  return html\`
        <script>
            document.querySelector('#button-technical-error')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('#toaster-show-alert');
                toaster.showAlert({
                    titleLabel: 'Technische storing',
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
})`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
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
            <vl-alert type="error" icon="warning" title-label="Error">
                <p>Er is een fout opgetreden.</p>
            </vl-alert>
        </template>
        <template id="alert-loader-template">
            <vl-alert title-label="Melding">
                <vl-loader></vl-loader>
            </vl-alert>
        </template>
        <vl-toaster id="toaster-fade-out" placement=\${placement} ?fade-out=\${fadeOut}>
            \${unsafeHTML(defaultSlot)}
        </vl-toaster>
        <vl-button id="button-error"> Toon foutmelding</vl-button>
        <vl-button id="button-loader"> Toon melding met lader</vl-button>
    \`;
})`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
  placement,
  fadeOut,
  defaultSlot
}) => {
  return html\`
        <script>
            document.querySelector('#button-saved')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('vl-toaster#toaster-fade-out-per-toast');
                // de melding in de template heeft het fade-out attribuut
                toaster?.show('#alert-saved-template');
            });
            document.querySelector('#button-not-saved')?.addEventListener('vl-click', () => {
                const toaster = document.querySelector('vl-toaster#toaster-fade-out-per-toast');
                toaster?.showAlert(
                    {
                        titleLabel: 'Niet bewaard',
                        icon: 'warning',
                        type: 'error',
                        message: 'Uw wijzigingen zijn niet bewaard. Probeer het later opnieuw.',
                        closable: true,
                    },
                    { fadeOut: false },
                );
            });
        <\/script>
        <template id="alert-saved-template">
            <vl-alert fade-out type="success" icon="check" title-label="Bewaard">
                <p>Uw wijzigingen zijn bewaard.</p>
            </vl-alert>
        </template>
        <vl-toaster id="toaster-fade-out-per-toast" placement=\${placement} ?fade-out=\${fadeOut}>
            \${unsafeHTML(defaultSlot)}
        </vl-toaster>
        <vl-button id="button-saved"> Toon succesmelding</vl-button>
        <vl-button id="button-not-saved"> Toon foutmelding</vl-button>
    \`;
})`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
  placement,
  fadeOut
}) => {
  const showSavedAlert = () => {
    document.querySelector<VlToasterComponent>('#toaster-modal')?.showAlert({
      title: 'Bewaard',
      icon: 'check',
      type: 'success',
      message: 'Uw wijzigingen zijn bewaard.'
    });
  };
  return html\`
        <vl-toaster id="toaster-modal" ?fade-out=\${fadeOut} placement=\${placement}></vl-toaster>
        <vl-button
            id="button-modal-open"
            modal-open="modal-toaster"
            aria-controls="modal-toaster"
            aria-haspopup="dialog"
        >
            Open modal
        </vl-button>
        <vl-modal-next id="modal-toaster" title-label="Gegevens wijzigen" not-auto-closable>
            <p slot="content">De melding van de toaster op de pagina verschijnt boven deze modal.</p>
            <vl-button id="button-modal-save" slot="button" @vl-click=\${showSavedAlert}>Bewaar</vl-button>
        </vl-modal-next>
    \`;
})`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story<ToasterArgs>(toasterArgs, ({
  placement,
  fadeOut
}) => {
  const showSavedAlert = () => {
    document.querySelector<VlToasterComponent>('#toaster-in-modal')?.showAlert({
      title: 'Bewaard',
      icon: 'check',
      type: 'success',
      message: 'Uw wijzigingen zijn bewaard.',
      closable: true
    });
  };
  return html\`
        <vl-button
            id="button-in-modal-open"
            modal-open="modal-with-toaster"
            aria-controls="modal-with-toaster"
            aria-haspopup="dialog"
        >
            Open modal
        </vl-button>
        <vl-modal-next id="modal-with-toaster" title-label="Gegevens wijzigen" not-auto-closable>
            <div slot="content">
                <p>De toaster staat in deze modal: je kan de melding sluiten.</p>
                <vl-toaster id="toaster-in-modal" ?fade-out=\${fadeOut} placement=\${placement}></vl-toaster>
            </div>
            <vl-button id="button-in-modal-save" slot="button" @vl-click=\${showSavedAlert}>Bewaar</vl-button>
        </vl-modal-next>
    \`;
})`,...m.parameters?.docs?.source}}};export{s as ToasterDefault,d as ToasterDefaultSlot,c as ToasterFadeOut,h as ToasterFadeOutPerToast,m as ToasterInModal,u as ToasterModal,i as ToasterShowAlert,Z as __namedExportsOrder,X as default};
