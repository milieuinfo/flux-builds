import{Z as a,_ as g,W as M,X as C,u as j,j as e,C as l,b8 as S,s as T,x as k,r as L,d as D,bH as V}from"./iframe-DynOw9qF.js";import{V as E}from"./vl-datepicker.component-CDbT1ywF.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,p={...C,title:"Modal",label:"",open:!1,closable:!1,notCancellable:!1,notAutoClosable:!1,allowOverflow:!1,contentSlot:"",buttonSlot:"",size:"default",position:"center",focusOnModal:!1,onVlOpen:h("vl-open"),onVlClose:h("vl-close")},N={...M,title:{name:"title",description:"Attribuut gebruikt om een `<h2>` titel toe te voegen. Indien leeg, wordt er geen titel element aangemaakt.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},label:{name:"label",description:"Attribuut gebruikt om een aria-label toe te voegen aan de modal. Dit is verplicht indien er geen title attribuut is opgegeven.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},open:{name:"open",description:"Reactief attribuut dat de open-staat van de modal stuurt: toevoegen opent de modal, verwijderen sluit hem. Het attribuut blijft in sync met de werkelijke staat (na sluiten via knop, escape of backdrop is het weg).",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},closable:{name:"closable",description:'Attribuut om de modal sluitbaar te maken via het "Sluit"-icoon in de rechterbovenhoek of door de "Escape"-toets te gebruiken.',table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notCancellable:{name:"not-cancellable",description:"Attribuut gebruikt om de modal niet annuleerbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notAutoClosable:{name:"not-auto-closable",description:"Attribuut om het afsluiten van de modal uit te schakelen bij het klikken op de actie in het button-slot.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},allowOverflow:{name:"allow-overflow",description:"Attribuut om de afgesneden inhoud van de modal zichtbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},contentSlot:{name:"content",description:"Dit slot bevat de HTML inhoud van de modal.",table:{type:{summary:g.HTML},category:a.SLOTS}},buttonSlot:{name:"button",description:"Gebruik dit slot om de primaire actie mee te geven.",table:{type:{summary:g.HTML},category:a.SLOTS}},size:{name:"size",description:"Attribuut om de grootte van de modal te bepalen.",options:["default","medium","large","full-screen"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:p.size},category:a.ATTRIBUTES}},position:{name:"position",description:"Attribuut om de positie van de modal op het scherm te bepalen.",options:["center","left","right"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:p.position},category:a.ATTRIBUTES}},focusOnModal:{name:"focus-on-modal",description:"Attribuut om de focus op de modal zelf te zetten bij het openen.",table:{type:{summary:"Boolean"},defaultValue:{summary:String(p.focusOnModal)},category:a.ATTRIBUTES}},onVlOpen:{name:"vl-open",description:"Event dat afgevuurd wordt wanneer de modal opent, ongeacht of dat via het `open`-attribuut, de `open()`-methode, een knop of escape gebeurt.",table:{category:a.EVENTS}},onVlClose:{name:"vl-close",description:"Event dat afgevuurd wordt wanneer de modal sluit, ongeacht of dat via het `open`-attribuut, de `close()`-methode, een knop of escape gebeurt.",table:{category:a.EVENTS}}};function f(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...j(),...t.components},{FluxComponentMetaData:b}=n;return b||_("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsx(b,{id:"components-block-modal"}),`
`,e.jsx(n.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(n.p,{children:["Gebruik de ",e.jsx(n.code,{children:"modal"})," component om een modal te tonen.",e.jsx("br",{})]}),`
`,e.jsx(n.h2,{id:"wanneer-gebruik-je-een-modal",children:"Wanneer gebruik je een modal?"}),`
`,e.jsxs(n.p,{children:[`Twijfel je tussen een modal en een side-sheet? Een modal schermt de pagina af voor een geïsoleerde taak (en is
altijd de keuze bij verwijderen); een side-sheet laat de pagina-context bruikbaar. Zie
`,e.jsx(n.a,{href:"/docs/patronen-overlays-modal-vs-side-sheet--documentatie",children:"Patronen/Overlays/Modal vs Side sheet"}),` voor het
volledige keuzekader.`]}),`
`,e.jsx(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { VlModalComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-modal></vl-modal>
`})}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(S,{of:o}),`
`,e.jsx(n.h2,{id:"reactief-open-attribuut",children:"Reactief open-attribuut"}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"open"}),` attribuut is reactief en weerspiegelt de werkelijke open-staat van de modal. Het attribuut toevoegen opent
de modal, het verwijderen sluit ze:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<vl-modal open></vl-modal>
`})}),`
`,e.jsxs(n.p,{children:["Wanneer de modal sluit via de annuleer-knop, de sluit-knop, de escape-toets of de backdrop, wordt het ",e.jsx(n.code,{children:"open"}),` attribuut
automatisch van de host verwijderd.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Let op met toegankelijkheid:"})," openen via het ",e.jsx(n.code,{children:"open"})," attribuut (of via de ",e.jsx(n.code,{children:"open()"}),` methode) ontslaat de afnemer niet
van de regel dat een modal idealiter via een knop of link getriggerd wordt. Wie de modal opent zonder zo'n trigger
is zelf verantwoordelijk om de focus correct te beheren - in het bijzonder om de focus bij het sluiten terug te
plaatsen op een logisch element (typisch het element dat de modal opende). Doe je dat niet, dan blijft de focus achter
op een onvoorspelbare plaats, wat de toegankelijkheid voor toetsenbord- en schermlezer-gebruikers schaadt. Zie
`,e.jsx(n.a,{href:"#toegankelijkheid",children:"Toegankelijkheid"})," voor de aanbevolen werkwijze."]}),`
`]}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Event"}),e.jsx("td",{children:"Beschrijving"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"vl-open"})}),e.jsxs("td",{children:["Wordt afgevuurd wanneer de modal opent, ongeacht of dat via het ",e.jsx(n.code,{children:"open"})," attribuut, de ",e.jsx(n.code,{children:"open()"})," methode of een trigger gebeurde."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"vl-close"})}),e.jsxs("td",{children:["Wordt afgevuurd wanneer de modal sluit, ongeacht of dat via het ",e.jsx(n.code,{children:"open"})," attribuut, de ",e.jsx(n.code,{children:"close()"})," methode, de annuleer-/sluit-knop, escape of de backdrop gebeurde."]})]})]}),`
`,e.jsxs(n.p,{children:["Beide events bubbelen en gaan door de shadow-DOM (",e.jsx(n.code,{children:"bubbles: true, composed: true"}),`), zodat ze ook buiten de component
opgevangen kunnen worden:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`document.querySelector('vl-modal').addEventListener('vl-close', () => {
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
`,e.jsx(n.h3,{id:"full-screen",children:"Full Screen"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h3,{id:"left",children:"Left"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h3,{id:"right",children:"Right"}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(n.h3,{id:"focus-op-modal",children:"Focus op modal"}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(n.p,{children:[`Het triggeren van de modal moet altijd gebeuren via een knop of link. Voor screen readers is het belangrijk dat deze
knop of link de juiste aria-attributen bevat. Het gebruik van `,e.jsx(n.code,{children:'aria-haspopup="dialog"'}),` is in dit geval verplicht.
Optioneel kan je `,e.jsx(n.code,{children:"aria-controls"}),` toevoegen met als value de ID van de modal (dit is echter overbodig wanneer de knop
binnen een shadow DOM zit (bv vl-button), omdat de koppeling met de ID niet werkt doorheen de shadow DOM). `,e.jsx(n.strong,{children:`Deze
aria-attributen moet de afnemer zelf implementeren!`}),"."]}),`
`,e.jsxs(n.p,{children:[`Een belangrijke reden voor deze regel is het focusbeheer: wanneer de modal sluit, moet de focus terugkeren naar de
trigger (de knop of link die de modal opende). Door de modal via zo'n trigger te openen, gebeurt dit op een
natuurlijke en voorspelbare manier. Het `,e.jsxs(n.a,{href:"#reactief-open-attribuut",children:["reactief openen via het ",e.jsx(n.code,{children:"open"})," attribuut"]}),` of de
`,e.jsx(n.code,{children:"open()"}),` methode blijft mogelijk en is soms nodig (bv. om de open-staat declaratief te sturen), maar wie deze weg
kiest in plaats van een trigger, moet het terugplaatsen van de focus bij het sluiten zelf afhandelen. De
`,e.jsx(n.code,{children:"vl-close"}),"-event is hiervoor een geschikt aangrijpingspunt."]}),`
`,e.jsxs(n.p,{children:[`De vl-modal zal standaard de focus leggen op het eerste focusbare element binnenin de modal wanneer deze geopend wordt.
Dit kan aangepast worden door het `,e.jsx(n.code,{children:"focus-on-modal"}),` attribuut toe te voegen aan de modal,
in dat geval zal de focus op de modal zelf gelegd worden bij het openen. Gebruik dit enkel indien
het automatisch focussen op het eerste focusbare element problemen veroorzaakt, bijvoorbeeld wanneer dit meteen een
popover triggert.`]}),`
`,e.jsx(n.p,{children:`Het is essentieel dat de modal goed gelabeld is voor gebruikers van schermlezers.
Dit kan op twee manieren bereikt worden:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Door het ",e.jsx(n.code,{children:"title"})," attribuut te gebruiken. Onderliggend wordt dit gekoppeld adhv ",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.li,{children:["Indien het design geen titel toelaat, moet het ",e.jsx(n.code,{children:"label"})," attribuut gebruikt worden zodat een beschrijvende ",e.jsx(n.code,{children:"aria-label"}),`
kan toegevoegd worden aan de modal.`]}),`
`]})]})}function B(t={}){const{wrapper:n}={...j(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(f,{...t})}):f(t)}function _(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}L([E,D,V]);const I={id:"components-block-modal",title:"Components - Block/modal",tags:["autodocs"],args:p,argTypes:N,parameters:{docs:{page:B}}},o=T({...p,id:""},({title:t,label:n,open:b,closable:w,notCancellable:$,notAutoClosable:x,allowOverflow:y,size:O,position:z,id:v,focusOnModal:A})=>k`
        <div>
            <vl-button
                id="button-open-modal-vt"
                modal-open="${v}"
                data-cy="button-modal-toggle"
                aria-controls="${v}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal
                id="${v}"
                title=${t}
                label=${n}
                ?open=${b}
                ?closable=${w}
                ?not-cancellable=${$}
                ?not-auto-closable=${x}
                ?allow-overflow=${y}
                data-cy="modal"
                size="${O}"
                position="${z}"
                ?focus-on-modal=${A}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    `);o.storyName="vl-modal - default";o.args={allowOverflow:!0,id:"modal-default",title:"Modal default"};const d=()=>k`
    <div>
        <vl-button
            id="button-open-modal-vt"
            modal-open="modal-cl-nc-li"
            data-cy="button-modal-toggle"
            aria-controls="modal-cl-nc-li"
            aria-haspopup="dialog"
        >
            Open
        </vl-button>
        <vl-modal id="modal-cl-nc-li" title="Modal met andere actie" closable not-cancellable data-cy="modal">
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <vl-link slot="button" button-as-link icon="cross" icon-placement="before" modal-close>
                Andere actie
            </vl-link>
        </vl-modal>
    </div>
`;d.storyName="vl-modal - with other action";d.parameters={controls:{hideNoControlsWarning:!0}};const i=o.bind({});i.storyName="vl-modal - medium";i.args={id:"modal-medium",label:"Modal medium",size:"medium",closable:!0,allowOverflow:!0};const s=o.bind({});s.storyName="vl-modal - large";s.args={id:"modal-large",label:"Modal large",size:"large",closable:!0,allowOverflow:!0};const r=o.bind({});r.storyName="vl-modal - full screen";r.args={id:"modal-full-screen",label:"Modal full screen",size:"full-screen",closable:!0};const c=o.bind({});c.storyName="vl-modal - left";c.args={id:"modal-left",label:"Modal left",position:"left",closable:!0,allowOverflow:!0};const u=o.bind({});u.storyName="vl-modal - right";u.args={id:"modal-right",label:"Modal right",position:"right",closable:!0,allowOverflow:!0};const m=o.bind({});m.storyName="vl-modal - with focus on modal";m.args={id:"modal-focus-on-modal",focusOnModal:!0,closable:!0,label:"Modal met focus op modal",allowOverflow:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal
}) => html\`
        <div>
            <vl-button
                id="button-open-modal-vt"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
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
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => html\`
    <div>
        <vl-button
            id="button-open-modal-vt"
            modal-open="modal-cl-nc-li"
            data-cy="button-modal-toggle"
            aria-controls="modal-cl-nc-li"
            aria-haspopup="dialog"
        >
            Open
        </vl-button>
        <vl-modal id="modal-cl-nc-li" title="Modal met andere actie" closable not-cancellable data-cy="modal">
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <vl-link slot="button" button-as-link icon="cross" icon-placement="before" modal-close>
                Andere actie
            </vl-link>
        </vl-modal>
    </div>
\``,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal
}) => html\`
        <div>
            <vl-button
                id="button-open-modal-vt"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
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
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal
}) => html\`
        <div>
            <vl-button
                id="button-open-modal-vt"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
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
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal
}) => html\`
        <div>
            <vl-button
                id="button-open-modal-vt"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
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
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal
}) => html\`
        <div>
            <vl-button
                id="button-open-modal-vt"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
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
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal
}) => html\`
        <div>
            <vl-button
                id="button-open-modal-vt"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
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
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  label,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id,
  focusOnModal
}) => html\`
        <div>
            <vl-button
                id="button-open-modal-vt"
                modal-open="\${id}"
                data-cy="button-modal-toggle"
                aria-controls="\${id}"
                aria-haspopup="dialog"
            >
                Open
            </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
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
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...m.parameters?.docs?.source}}};const K=["modalDefault","modalWithOtherAction","modalMedium","modalLarge","modalFullScreen","modalLeft","modalRight","modalWithFocusOnModal"];export{K as __namedExportsOrder,I as default,o as modalDefault,r as modalFullScreen,s as modalLarge,c as modalLeft,i as modalMedium,u as modalRight,m as modalWithFocusOnModal,d as modalWithOtherAction};
