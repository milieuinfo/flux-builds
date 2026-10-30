import{Z as a,_ as h,W as M,X as S,u as x,j as e,C as t,b4 as L,s as T,b as j,r as E,f as D,bv as B}from"./iframe-ylVHDfb1.js";import{V as N}from"./vl-datepicker.component-bkPzXCz5.js";import"./vl-modal.component-GiDb0Bob.js";import"./preload-helper-PPVm8Dsz.js";import"./cleave-esm-DfUhcNrv.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,p={...S,titleLabel:"Modal",label:"",open:!1,closable:!1,notCancellable:!1,notAutoClosable:!1,allowOverflow:!1,contentSlot:"",buttonSlot:"",size:"default",position:"center",focusOnModal:!1,onVlOpen:g("vl-open"),onVlClose:g("vl-close")},_={...M,titleLabel:{name:"title-label",description:"Attribuut gebruikt om een `<h2>` titel toe te voegen. Indien leeg, wordt er geen titel element aangemaakt.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},label:{name:"label",description:"Attribuut gebruikt om een aria-label toe te voegen aan de modal. Dit is verplicht indien er geen title-label attribuut is opgegeven.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},open:{name:"open",description:"Reactief attribuut dat de open-staat van de modal stuurt: toevoegen opent de modal, verwijderen sluit hem. Het attribuut blijft in sync met de werkelijke staat (na sluiten via knop, escape of backdrop is het weg).",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},closable:{name:"closable",description:'Attribuut om de modal sluitbaar te maken via het "Sluit"-icoon in de rechterbovenhoek, de "Escape"-toets of een klik op de backdrop.',table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notCancellable:{name:"not-cancellable",description:"Attribuut gebruikt om de modal niet annuleerbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notAutoClosable:{name:"not-auto-closable",description:"Attribuut om het afsluiten van de modal uit te schakelen bij het klikken op de actie in het button-slot.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},allowOverflow:{name:"allow-overflow",description:"Attribuut om de afgesneden inhoud van de modal zichtbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},contentSlot:{name:"content",description:"Dit slot bevat de HTML inhoud van de modal.",table:{type:{summary:h.HTML},category:a.SLOTS}},buttonSlot:{name:"button",description:"Gebruik dit slot om de primaire actie mee te geven.",table:{type:{summary:h.HTML},category:a.SLOTS}},size:{name:"size",description:"Attribuut om de grootte van de modal te bepalen.",options:["default","medium","large","full-screen"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:p.size},category:a.ATTRIBUTES}},position:{name:"position",description:"Attribuut om de positie van de modal op het scherm te bepalen.",options:["center","left","right"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:p.position},category:a.ATTRIBUTES}},focusOnModal:{name:"focus-on-modal",description:"Attribuut om de focus op de modal zelf te zetten bij het openen.",table:{type:{summary:"Boolean"},defaultValue:{summary:String(p.focusOnModal)},category:a.ATTRIBUTES}},onVlOpen:{name:"vl-open",description:"Event dat afgevuurd wordt wanneer de modal opent, ongeacht of dat via het `open`-attribuut, de `open()`-methode of een trigger gebeurt.",table:{category:a.EVENTS}},onVlClose:{name:"vl-close",description:"Event dat afgevuurd wordt wanneer de modal sluit, ongeacht of dat via het `open`-attribuut, de `close()`-methode, de annuleer-/sluit-knop, escape of de backdrop gebeurt.",table:{category:a.EVENTS}}};function f(l){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...x(),...l.components},{FluxComponentMetaData:b}=n;return b||R("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"modal-next",children:"Modal Next"}),`
`,e.jsx(b,{id:"components-block-next-modal"}),`
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
`,e.jsx(t,{of:o}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(L,{of:o}),`
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
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h3,{id:"full-screen",children:"Full Screen"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.h3,{id:"left",children:"Left"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h3,{id:"right",children:"Right"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"focus-op-modal",children:"Focus op modal"}),`
`,e.jsx(t,{of:m}),`
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
`,e.jsxs(n.p,{children:[`De vl-modal-next zal standaard de focus leggen op het eerste focusbare element binnenin de modal wanneer deze geopend wordt.
Dit kan aangepast worden door het `,e.jsx(n.code,{children:"focus-on-modal"}),` attribuut toe te voegen aan de modal,
in dat geval zal de focus op de modal zelf gelegd worden bij het openen. Gebruik dit enkel indien
het automatisch focussen op het eerste focusbare element problemen veroorzaakt, bijvoorbeeld wanneer dit meteen een
popover triggert.`]}),`
`,e.jsx(n.p,{children:`Het is essentieel dat de modal goed gelabeld is voor gebruikers van schermlezers.
Dit kan op twee manieren bereikt worden:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Door het ",e.jsx(n.code,{children:"title-label"})," attribuut te gebruiken. Onderliggend wordt dit gekoppeld adhv ",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.li,{children:["Indien het design geen titel toelaat, moet het ",e.jsx(n.code,{children:"label"})," attribuut gebruikt worden zodat een beschrijvende ",e.jsx(n.code,{children:"aria-label"}),`
kan toegevoegd worden aan de modal.`]}),`
`]})]})}function H(l={}){const{wrapper:n}={...x(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(f,{...l})}):f(l)}function R(l,n){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}E([N,D,B]);const q={id:"components-block-next-modal",title:"Components - Block/next/modal",tags:["autodocs"],args:p,argTypes:_,parameters:{docs:{page:H}}},o=T({...p,id:""},({titleLabel:l,label:n,open:b,closable:$,notCancellable:k,notAutoClosable:w,allowOverflow:y,size:O,position:C,id:v,focusOnModal:z,onVlOpen:V,onVlClose:A})=>j`
        <div>
            <vl-button
                id="button-open-${v}"
                modal-open="${v}"
                data-cy="button-modal-toggle"
                aria-controls="${v}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal-next
                id="${v}"
                title-label=${l}
                label=${n}
                ?open=${b}
                ?closable=${$}
                ?not-cancellable=${k}
                ?not-auto-closable=${w}
                ?allow-overflow=${y}
                data-cy="modal"
                size="${O}"
                position="${C}"
                ?focus-on-modal=${z}
                @vl-open=${V}
                @vl-close=${A}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal-next>
        </div>
    `);o.storyName="vl-modal-next - default";o.args={allowOverflow:!0,id:"modal-default",titleLabel:"Modal default"};const d=({onVlOpen:l,onVlClose:n})=>j`
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
            @vl-open=${l}
            @vl-close=${n}
        >
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <vl-link slot="button" button-as-link icon="cross" icon-placement="before" modal-close>
                Andere actie
            </vl-link>
        </vl-modal-next>
    </div>
`;d.storyName="vl-modal-next - with other action";d.parameters={controls:{disable:!0}};const i=o.bind({});i.storyName="vl-modal-next - medium";i.args={id:"modal-medium",label:"Modal medium",size:"medium",closable:!0,allowOverflow:!0};const s=o.bind({});s.storyName="vl-modal-next - large";s.args={id:"modal-large",label:"Modal large",size:"large",closable:!0,allowOverflow:!0};const r=o.bind({});r.storyName="vl-modal-next - full screen";r.args={id:"modal-full-screen",label:"Modal full screen",size:"full-screen",closable:!0};const c=o.bind({});c.storyName="vl-modal-next - left";c.args={id:"modal-left",label:"Modal left",position:"left",closable:!0,allowOverflow:!0};const u=o.bind({});u.storyName="vl-modal-next - right";u.args={id:"modal-right",label:"Modal right",position:"right",closable:!0,allowOverflow:!0};const m=o.bind({});m.storyName="vl-modal-next - with focus on modal";m.args={id:"modal-focus-on-modal",focusOnModal:!0,closable:!0,label:"Modal met focus op modal",allowOverflow:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
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
    \`)`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
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
\``,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
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
    \`)`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
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
    \`)`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
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
    \`)`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
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
    \`)`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
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
    \`)`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
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
    \`)`,...m.parameters?.docs?.source}}};const U=["modalDefault","modalWithOtherAction","modalMedium","modalLarge","modalFullScreen","modalLeft","modalRight","modalWithFocusOnModal"];export{U as __namedExportsOrder,q as default,o as modalDefault,r as modalFullScreen,s as modalLarge,c as modalLeft,i as modalMedium,u as modalRight,m as modalWithFocusOnModal,d as modalWithOtherAction};
