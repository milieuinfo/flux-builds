import{u as k,j as e,C as l,b4 as S,b as f,r as L,e as T,b$ as E}from"./iframe-Cv28D2NX.js";import{C as a,T as g,d as D,a as B,s as N}from"./stories.helper-DYHi_5m6.js";import{V as W}from"./vl-datepicker.component-gIhsylI-.js";import"./vl-modal.component-Di4jiGh5.js";import"./preload-helper-PPVm8Dsz.js";import"./cleave-esm-DfUhcNrv.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,b={...B,id:"",titleLabel:"Modal",label:"",open:!1,closable:!1,notCancellable:!1,notAutoClosable:!1,allowOverflow:!1,contentSlot:"",buttonSlot:"",size:"default",position:"center",focusOnModal:!1,onVlOpen:j("vl-open"),onVlClose:j("vl-close")},R={...D,id:{name:"id",description:"De id van de modal. Een element met `modal-open` (of `data-modal-open`) met dezelfde waarde opent de modal bij een klik.",table:{type:{summary:g.STRING},category:a.ATTRIBUTES,defaultValue:{summary:b.id}}},titleLabel:{name:"title-label",description:"Attribuut gebruikt om een `<h2>` titel toe te voegen. Indien leeg, wordt er geen titel element aangemaakt.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},label:{name:"label",description:"Attribuut gebruikt om een aria-label toe te voegen aan de modal. Dit is verplicht indien er geen title-label attribuut is opgegeven.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},open:{name:"open",description:"Reactief attribuut dat de open-staat van de modal stuurt: toevoegen opent de modal, verwijderen sluit hem. Het attribuut blijft in sync met de werkelijke staat (na sluiten via knop, escape of backdrop is het weg).",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},closable:{name:"closable",description:'Attribuut om de modal sluitbaar te maken via het "Sluit"-icoon in de rechterbovenhoek, de "Escape"-toets of een klik op de backdrop.',table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notCancellable:{name:"not-cancellable",description:"Attribuut gebruikt om de modal niet annuleerbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notAutoClosable:{name:"not-auto-closable",description:"Attribuut om het afsluiten van de modal uit te schakelen bij het klikken op de actie in het button-slot.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},allowOverflow:{name:"allow-overflow",description:"Attribuut om de afgesneden inhoud van de modal zichtbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},contentSlot:{name:"content",description:"Dit slot bevat de HTML inhoud van de modal.",table:{type:{summary:g.HTML},category:a.SLOTS}},buttonSlot:{name:"button",description:"Gebruik dit slot om de primaire actie mee te geven.",table:{type:{summary:g.HTML},category:a.SLOTS}},size:{name:"size",description:"Attribuut om de grootte van de modal te bepalen.",options:["default","medium","large","full-screen"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:b.size},category:a.ATTRIBUTES}},position:{name:"position",description:"Attribuut om de positie van de modal op het scherm te bepalen.",options:["center","left","right"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:b.position},category:a.ATTRIBUTES}},focusOnModal:{name:"focus-on-modal",description:"Attribuut om de focus op de modal zelf te zetten bij het openen.",table:{type:{summary:"Boolean"},defaultValue:{summary:String(b.focusOnModal)},category:a.ATTRIBUTES}},onVlOpen:{name:"vl-open",description:"Event dat afgevuurd wordt wanneer de modal opent, ongeacht of dat via het `open`-attribuut, de `open()`-methode of een trigger gebeurt.",table:{category:a.EVENTS}},onVlClose:{name:"vl-close",description:"Event dat afgevuurd wordt wanneer de modal sluit, ongeacht of dat via het `open`-attribuut, de `close()`-methode, de annuleer-/sluit-knop, escape of de backdrop gebeurt.",table:{category:a.EVENTS}}};function x(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...o.components},{FluxComponentMetaData:v}=n;return v||I("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"modal-next",children:"Modal Next"}),`
`,e.jsx(v,{id:"components-block-next-modal"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"modal"})," component om een modal te tonen."]}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-een-modal",children:"Wanneer gebruik je een modal?"}),`
`,e.jsxs(n.p,{children:[`Twijfel je tussen een modal en een side-sheet? Een modal schermt de pagina af voor een geïsoleerde taak (en is
altijd de keuze bij verwijderen); een side-sheet laat de pagina-context bruikbaar. Zie
`,e.jsx(n.a,{href:"/docs/patronen-overlays-modal-vs-side-sheet--documentatie",children:"Patronen/Overlays/Modal vs Side sheet"}),` voor het
volledige keuzekader.`]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlModalComponent } from '@domg-wc/components/block/next';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-button modal-open="mijn-modal" aria-haspopup="dialog">Open</vl-button>
<vl-modal-next id="mijn-modal" title-label="Titel van de modal">
    <div slot="content">Inhoud van de modal.</div>
    <vl-button slot="button">Bevestigen</vl-button>
</vl-modal-next>
`})}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(S,{of:t}),`
`,e.jsx(n.h2,{id:"openen-via-een-trigger",children:"Openen via een trigger"}),`
`,e.jsxs(n.p,{children:["Geef een knop of link het ",e.jsx(n.code,{children:"modal-open"})," attribuut met als waarde de ",e.jsx(n.code,{children:"id"}),` van de modal. Een klik op die trigger opent de
modal, en bij het sluiten keert de focus terug naar de trigger.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-button modal-open="mijn-modal" aria-haspopup="dialog">Open</vl-button>
<vl-modal-next id="mijn-modal" title-label="Titel van de modal"></vl-modal-next>
`})}),`
`,e.jsxs(n.p,{children:[`De modal zoekt zijn triggers op wanneer hij aan de pagina toegevoegd wordt, in het document en in de shadow DOM's
waarin hij zelf zit. Een trigger die pas later toegevoegd wordt, of in een andere shadow DOM staat, opent de modal
niet; gebruik dan de `,e.jsx(n.code,{children:"open()"})," methode."]}),`
`,e.jsx(n.h2,{id:"reactief-open-attribuut",children:"Reactief open-attribuut"}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"open"}),` attribuut is reactief en weerspiegelt de werkelijke open-staat van de modal. Het attribuut toevoegen opent
de modal, het verwijderen sluit ze:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-modal-next open></vl-modal-next>
`})}),`
`,e.jsxs(n.p,{children:["Wanneer de modal sluit via de annuleer-knop, de sluit-knop, de escape-toets of de backdrop, wordt het ",e.jsx(n.code,{children:"open"}),` attribuut
automatisch van de host verwijderd.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Let op met toegankelijkheid:"})," openen via het ",e.jsx(n.code,{children:"open"})," attribuut (of via de ",e.jsx(n.code,{children:"open()"}),` methode) ontslaat de afnemer niet
van de regel dat een modal idealiter via een knop of link getriggerd wordt. Bij het sluiten zet de modal de focus
terug op het element dat de focus had vóór het openen. Had geen enkel element de focus, bijvoorbeeld bij een modal die
al open is bij het laden van de pagina, dan moet de afnemer zelf bepalen waar de focus na het sluiten heen gaat. Zie
`,e.jsx(n.a,{href:"#toegankelijkheid",children:"Toegankelijkheid"})," voor de aanbevolen werkwijze."]}),`
`]}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs("table",{children:[e.jsx("caption",{children:"Events van vl-modal-next"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Event"}),e.jsx("th",{scope:"col",children:"Beschrijving"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"vl-open"})}),e.jsxs("td",{children:["Wordt afgevuurd wanneer de modal opent, ongeacht of dat via het ",e.jsx("code",{children:"open"})," attribuut, de ",e.jsx("code",{children:"open()"})," methode of een trigger gebeurde."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"vl-close"})}),e.jsxs("td",{children:["Wordt afgevuurd wanneer de modal sluit, ongeacht of dat via het ",e.jsx("code",{children:"open"})," attribuut, de ",e.jsx("code",{children:"close()"})," methode, de annuleer-/sluit-knop, escape of de backdrop gebeurde."]})]})]})]}),`
`,e.jsxs(n.p,{children:["Beide events bubbelen en gaan door de shadow-DOM (",e.jsx(n.code,{children:"bubbles: true, composed: true"}),`), zodat ze ook buiten de component
opgevangen kunnen worden:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`document.querySelector('vl-modal-next').addEventListener('vl-close', () => {
    // reageer op het sluiten van de modal
});
`})}),`
`,e.jsx(n.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(n.h3,{id:"met-andere-actie",children:"Met andere actie"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.p,{children:`Op een smal scherm (tot 767px) zijn een medium en een large modal, net als de andere varianten, even breed als het
scherm.`}),`
`,e.jsx(n.h3,{id:"full-screen",children:"Full Screen"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h3,{id:"left",children:"Left"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h3,{id:"right",children:"Right"}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(n.h3,{id:"focus-op-modal",children:"Focus op modal"}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.h3,{id:"bevestiging-met-autofocus",children:"Bevestiging met autofocus"}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"autofocus"}),` attribuut op "Verder bewerken" zorgt ervoor dat die knop de focus krijgt bij het openen, en niet de
destructieve actie "Verwerpen". Zie `,e.jsx(n.a,{href:"#toegankelijkheid",children:"Toegankelijkheid"}),"."]}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(n.p,{children:[`Het triggeren van de modal moet altijd gebeuren via een knop of link. Voor screen readers is het belangrijk dat deze
knop of link de juiste aria-attributen bevat. Het gebruik van `,e.jsx(n.code,{children:'aria-haspopup="dialog"'}),` is in dit geval verplicht.
Optioneel kan je `,e.jsx(n.code,{children:"aria-controls"}),` toevoegen met als value de ID van de modal (dit is echter overbodig wanneer de knop
binnen een shadow DOM zit (bv vl-button), omdat de koppeling met de ID niet werkt doorheen de shadow DOM). `,e.jsx(n.strong,{children:`Deze
aria-attributen moet de afnemer zelf implementeren!`}),"."]}),`
`,e.jsxs(n.p,{children:[`Een belangrijke reden voor deze regel is het focusbeheer: wanneer de modal sluit, moet de focus terugkeren naar de
trigger (de knop of link die de modal opende). Bij een trigger zet de modal de focus daar zelf terug. Opent de modal via
het `,e.jsxs(n.a,{href:"#reactief-open-attribuut",children:["reactief ",e.jsx(n.code,{children:"open"})," attribuut"]})," of de ",e.jsx(n.code,{children:"open()"}),` methode, dan zet de modal de focus bij het
sluiten terug op het element dat de focus had vóór het openen. Had geen enkel element de focus, bijvoorbeeld bij een
modal die al open is bij het laden van de pagina, dan moet de afnemer zelf bepalen waar de focus na het sluiten heen
gaat. Het `,e.jsx(n.code,{children:"vl-close"})," event is hiervoor een geschikt aangrijpingspunt."]}),`
`,e.jsxs(n.p,{children:[`De vl-modal-next zal standaard de focus leggen op het eerste focusbare element binnenin de modal wanneer deze geopend
wordt, in elke browser en ook wanneer dat element in de inhoud van een slot staat. Een element met het `,e.jsx(n.code,{children:"autofocus"}),`
attribuut krijgt voorrang. Bevat de modal geen focusbaar element, of staat het eerste focusbare element pas na
scrollen in beeld, dan krijgt de modal zelf de focus, zodat het begin van de inhoud zichtbaar blijft.
Dit kan aangepast worden door het `,e.jsx(n.code,{children:"focus-on-modal"}),` attribuut toe te voegen aan de modal,
in dat geval zal de focus op de modal zelf gelegd worden bij het openen. Gebruik dit wanneer de modal begint met tekst
die de gebruiker eerst moet lezen: een schermlezer slaat die anders over en leest meteen het eerste focusbare element
voor. Gebruik het ook wanneer het automatisch focussen op het eerste focusbare element problemen veroorzaakt,
bijvoorbeeld wanneer dit meteen een popover triggert.`]}),`
`,e.jsxs(n.p,{children:["Wil je dat een ander element de focus krijgt bij het openen, zet dan het native ",e.jsx(n.code,{children:"autofocus"}),` attribuut op dat element in
het `,e.jsx(n.code,{children:"content"}),"- of ",e.jsx(n.code,{children:"button"}),`-slot. Gebruik dit voor de minst destructieve actie in een bevestiging, of voor het eerste
invoerveld in een formulier. Zo voert een onbedoelde Enter geen destructieve actie uit.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-modal-next id="bevestiging" title-label="Wijzigingen verwerpen?" not-cancellable>
    <span slot="content">Je niet-bewaarde wijzigingen gaan verloren.</span>
    <vl-button slot="button" error>Verwerpen</vl-button>
    <vl-button slot="button" secondary autofocus>Verder bewerken</vl-button>
</vl-modal-next>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Staan er meerdere elementen met ",e.jsx(n.code,{children:"autofocus"})," in de modal, dan krijgt het eerste de focus. Het ",e.jsx(n.code,{children:"content"}),`-slot gaat voor
op het `,e.jsx(n.code,{children:"button"}),"-slot."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"focus-on-modal"})," heeft voorrang: dan krijgt de modal zelf de focus. Bij lange inhoud blijft ",e.jsx(n.code,{children:"focus-on-modal"}),` de betere
keuze, anders scrolt de modal meteen weg van de titel.`]}),`
`,e.jsxs(n.li,{children:["Een element dat geen focus kan krijgen, wordt overgeslagen alsof het geen ",e.jsx(n.code,{children:"autofocus"}),` had: een element met
`,e.jsx(n.code,{children:"disabled"}),", een verborgen element of een element in een geneste modal."]}),`
`,e.jsx(n.li,{children:'De interne "Annuleren"-knop en het sluitkruis kan je niet aanduiden.'}),`
`,e.jsxs(n.li,{children:["Een native element met ",e.jsx(n.code,{children:"autofocus"}),", zoals een ",e.jsx(n.code,{children:"<input>"})," of ",e.jsx(n.code,{children:"<button>"}),`, kan bij het laden van de pagina al de focus
krijgen zolang de vl-modal-next component nog niet geladen is. Laad de component dus vóór de pagina getoond wordt.`]}),`
`,e.jsxs(n.li,{children:["In React schrijf je het attribuut in kleine letters (",e.jsx(n.code,{children:"autofocus"}),"). De prop ",e.jsx(n.code,{children:"autoFocus"}),` handelt React zelf af, en die
komt niet als attribuut op het element.`]}),`
`]}),`
`,e.jsx(n.p,{children:`Het is essentieel dat de modal goed gelabeld is voor gebruikers van schermlezers.
Dit kan op twee manieren bereikt worden:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Door het ",e.jsx(n.code,{children:"title-label"})," attribuut te gebruiken. Onderliggend wordt dit gekoppeld adhv ",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.li,{children:["Indien het design geen titel toelaat, moet het ",e.jsx(n.code,{children:"label"})," attribuut gebruikt worden zodat een beschrijvende ",e.jsx(n.code,{children:"aria-label"}),`
kan toegevoegd worden aan de modal.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Een woord in de titel (",e.jsx(n.code,{children:"title-label"}),`) dat niet op een regel past, zoals een code of een bestandsnaam zonder spaties,
breekt af zonder koppelteken, zodat de titel binnen de modal blijft (WCAG 1.4.10).`]})]})}function H(o={}){const{wrapper:n}={...k(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}function I(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}L([W,T,E]);const Z={id:"components-block-next-modal",title:"Components - Block/next/modal",tags:["autodocs"],args:b,argTypes:R,parameters:{docs:{page:H}}},t=N(b,({titleLabel:o,label:n,open:v,closable:w,notCancellable:$,notAutoClosable:y,allowOverflow:O,size:z,position:C,id:h,focusOnModal:V,onVlOpen:A,onVlClose:M})=>f`
        <div>
            <vl-button
                id="button-open-${h}"
                modal-open="${h}"
                data-cy="button-modal-toggle"
                aria-controls="${h}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal-next
                id="${h}"
                title-label=${o}
                label=${n}
                ?open=${v}
                ?closable=${w}
                ?not-cancellable=${$}
                ?not-auto-closable=${y}
                ?allow-overflow=${O}
                data-cy="modal"
                size="${z}"
                position="${C}"
                ?focus-on-modal=${V}
                @vl-open=${A}
                @vl-close=${M}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal-next>
        </div>
    `);t.storyName="vl-modal-next - default";t.args={allowOverflow:!0,id:"modal-default",titleLabel:"Modal default"};const d=({onVlOpen:o,onVlClose:n})=>f`
    <div>
        <vl-button
            id="button-open-modal-cl-nc-li"
            modal-open="modal-cl-nc-li"
            data-cy="button-modal-toggle"
            aria-controls="modal-cl-nc-li"
            aria-haspopup="dialog"
        >
            Open
        </vl-button>
        <vl-modal-next
            id="modal-cl-nc-li"
            title-label="Modal met andere actie"
            closable
            not-cancellable
            data-cy="modal"
            @vl-open=${o}
            @vl-close=${n}
        >
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <vl-link slot="button" button-as-link icon="cross" icon-placement="before" modal-close>
                Andere actie
            </vl-link>
        </vl-modal-next>
    </div>
`;d.storyName="vl-modal-next - with other action";d.parameters={controls:{disable:!0}};const i=t.bind({});i.storyName="vl-modal-next - medium";i.args={id:"modal-medium",label:"Modal medium",size:"medium",closable:!0,allowOverflow:!0};const s=t.bind({});s.storyName="vl-modal-next - large";s.args={id:"modal-large",label:"Modal large",size:"large",closable:!0,allowOverflow:!0};const r=t.bind({});r.storyName="vl-modal-next - full screen";r.args={id:"modal-full-screen",label:"Modal full screen",size:"full-screen",closable:!0};const c=t.bind({});c.storyName="vl-modal-next - left";c.args={id:"modal-left",label:"Modal left",position:"left",closable:!0,allowOverflow:!0};const u=t.bind({});u.storyName="vl-modal-next - right";u.args={id:"modal-right",label:"Modal right",position:"right",closable:!0,allowOverflow:!0};const m=t.bind({});m.storyName="vl-modal-next - with focus on modal";m.args={id:"modal-focus-on-modal",focusOnModal:!0,closable:!0,label:"Modal met focus op modal",allowOverflow:!0};const p=({onVlOpen:o,onVlClose:n})=>f`
    <div>
        <vl-button
            id="button-open-modal-autofocus"
            modal-open="modal-autofocus"
            data-cy="button-modal-toggle"
            aria-controls="modal-autofocus"
            aria-haspopup="dialog"
        >
            Wijzigingen verwerpen
        </vl-button>
        <vl-modal-next
            id="modal-autofocus"
            title-label="Wijzigingen verwerpen?"
            not-cancellable
            data-cy="modal"
            @vl-open=${o}
            @vl-close=${n}
        >
            <span slot="content">Je niet-bewaarde wijzigingen gaan verloren.</span>
            <vl-button slot="button" error>Verwerpen</vl-button>
            <vl-button slot="button" secondary autofocus>Verder bewerken</vl-button>
        </vl-modal-next>
    </div>
`;p.storyName="vl-modal-next - with autofocus";p.parameters={controls:{disable:!0}};const J=["modalDefault","modalWithOtherAction","modalMedium","modalLarge","modalFullScreen","modalLeft","modalRight","modalWithFocusOnModal","ModalWithAutofocus"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(modalArgs, ({
  titleLabel,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal,
  onVlOpen,
  onVlClose
}) => html\`
        <div>
            <vl-button
                id="button-open-\${id}"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal-next
                id="\${id}"
                title-label=\${titleLabel}
                label=\${label}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
                ?focus-on-modal=\${focusOnModal}
                @vl-open=\${onVlOpen}
                @vl-close=\${onVlClose}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal-next>
        </div>
    \`)`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  onVlOpen,
  onVlClose
}: typeof modalArgs) => html\`
    <div>
        <vl-button
            id="button-open-modal-cl-nc-li"
            modal-open="modal-cl-nc-li"
            data-cy="button-modal-toggle"
            aria-controls="modal-cl-nc-li"
            aria-haspopup="dialog"
        >
            Open
        </vl-button>
        <vl-modal-next
            id="modal-cl-nc-li"
            title-label="Modal met andere actie"
            closable
            not-cancellable
            data-cy="modal"
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <vl-link slot="button" button-as-link icon="cross" icon-placement="before" modal-close>
                Andere actie
            </vl-link>
        </vl-modal-next>
    </div>
\``,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(modalArgs, ({
  titleLabel,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal,
  onVlOpen,
  onVlClose
}) => html\`
        <div>
            <vl-button
                id="button-open-\${id}"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal-next
                id="\${id}"
                title-label=\${titleLabel}
                label=\${label}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
                ?focus-on-modal=\${focusOnModal}
                @vl-open=\${onVlOpen}
                @vl-close=\${onVlClose}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal-next>
        </div>
    \`)`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(modalArgs, ({
  titleLabel,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal,
  onVlOpen,
  onVlClose
}) => html\`
        <div>
            <vl-button
                id="button-open-\${id}"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal-next
                id="\${id}"
                title-label=\${titleLabel}
                label=\${label}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
                ?focus-on-modal=\${focusOnModal}
                @vl-open=\${onVlOpen}
                @vl-close=\${onVlClose}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal-next>
        </div>
    \`)`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(modalArgs, ({
  titleLabel,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal,
  onVlOpen,
  onVlClose
}) => html\`
        <div>
            <vl-button
                id="button-open-\${id}"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal-next
                id="\${id}"
                title-label=\${titleLabel}
                label=\${label}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
                ?focus-on-modal=\${focusOnModal}
                @vl-open=\${onVlOpen}
                @vl-close=\${onVlClose}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal-next>
        </div>
    \`)`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(modalArgs, ({
  titleLabel,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal,
  onVlOpen,
  onVlClose
}) => html\`
        <div>
            <vl-button
                id="button-open-\${id}"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal-next
                id="\${id}"
                title-label=\${titleLabel}
                label=\${label}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
                ?focus-on-modal=\${focusOnModal}
                @vl-open=\${onVlOpen}
                @vl-close=\${onVlClose}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal-next>
        </div>
    \`)`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story(modalArgs, ({
  titleLabel,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal,
  onVlOpen,
  onVlClose
}) => html\`
        <div>
            <vl-button
                id="button-open-\${id}"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal-next
                id="\${id}"
                title-label=\${titleLabel}
                label=\${label}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
                ?focus-on-modal=\${focusOnModal}
                @vl-open=\${onVlOpen}
                @vl-close=\${onVlClose}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal-next>
        </div>
    \`)`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(modalArgs, ({
  titleLabel,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal,
  onVlOpen,
  onVlClose
}) => html\`
        <div>
            <vl-button
                id="button-open-\${id}"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal-next
                id="\${id}"
                title-label=\${titleLabel}
                label=\${label}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
                ?focus-on-modal=\${focusOnModal}
                @vl-open=\${onVlOpen}
                @vl-close=\${onVlClose}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal-next>
        </div>
    \`)`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  onVlOpen,
  onVlClose
}: typeof modalArgs) => html\`
    <div>
        <vl-button
            id="button-open-modal-autofocus"
            modal-open="modal-autofocus"
            data-cy="button-modal-toggle"
            aria-controls="modal-autofocus"
            aria-haspopup="dialog"
        >
            Wijzigingen verwerpen
        </vl-button>
        <vl-modal-next
            id="modal-autofocus"
            title-label="Wijzigingen verwerpen?"
            not-cancellable
            data-cy="modal"
            @vl-open=\${onVlOpen}
            @vl-close=\${onVlClose}
        >
            <span slot="content">Je niet-bewaarde wijzigingen gaan verloren.</span>
            <vl-button slot="button" error>Verwerpen</vl-button>
            <vl-button slot="button" secondary autofocus>Verder bewerken</vl-button>
        </vl-modal-next>
    </div>
\``,...p.parameters?.docs?.source}}};export{p as ModalWithAutofocus,J as __namedExportsOrder,Z as default,t as modalDefault,r as modalFullScreen,s as modalLarge,c as modalLeft,i as modalMedium,u as modalRight,m as modalWithFocusOnModal,d as modalWithOtherAction};
