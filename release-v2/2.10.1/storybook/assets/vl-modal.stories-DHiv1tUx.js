import{R as u,U as g,O as M,P as C,u as h,j as e,C as a,bh as z,s as S,x as $,r as L,h as T,bJ as D}from"./iframe-iHJvAyUB.js";import{V}from"./vl-datepicker.component-D7ETKlXw.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";const p={...C,title:"Modal",label:"",open:!1,closable:!1,notCancellable:!1,notAutoClosable:!1,allowOverflow:!1,contentSlot:"",buttonSlot:"",size:"default",position:"center",focusOnModal:!1},B={...M,title:{name:"title",description:"Attribuut gebruikt om een `<h2>` titel toe te voegen. Indien leeg, wordt er geen titel element aangemaakt.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},label:{name:"label",description:"Attribuut gebruikt om een aria-label toe te voegen aan de modal. Dit is verplicht indien er geen title attribuut is opgegeven.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},open:{name:"open",description:"Attribuut om de modal onmiddellijk te openen na de rendering.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},closable:{name:"closable",description:'Attribuut om de modal sluitbaar te maken via het "Sluit"-icoon in de rechterbovenhoek of door de "Escape"-toets te gebruiken.',table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notCancellable:{name:"not-cancellable",description:"Attribuut gebruikt om de modal niet annuleerbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notAutoClosable:{name:"not-auto-closable",description:"Attribuut om het afsluiten van de modal uit te schakelen bij het klikken op de actie in het button-slot.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},allowOverflow:{name:"allow-overflow",description:"Attribuut om de afgesneden inhoud van de modal zichtbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},contentSlot:{name:"content",description:"Dit slot bevat de HTML inhoud van de modal.",table:{type:{summary:g.HTML},category:u.SLOTS}},buttonSlot:{name:"button",description:"Gebruik dit slot om de primaire actie mee te geven.",table:{type:{summary:g.HTML},category:u.SLOTS}},size:{name:"size",description:"Attribuut om de grootte van de modal te bepalen.",options:["default","medium","large","full-screen"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:p.size},category:u.ATTRIBUTES}},position:{name:"position",description:"Attribuut om de positie van de modal op het scherm te bepalen.",options:["center","left","right"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:p.position},category:u.ATTRIBUTES}},focusOnModal:{name:"focus-on-modal",description:"Attribuut om de focus op de modal zelf te zetten bij het openen.",table:{type:{summary:"Boolean"},defaultValue:{summary:String(p.focusOnModal)},category:u.ATTRIBUTES}}};function f(l){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...l.components},{FluxComponentMetaData:b}=o;return b||N("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"modal",children:"Modal"}),`
`,e.jsx(b,{id:"components-block-modal"}),`
`,e.jsx(o.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(o.p,{children:["Gebruik de ",e.jsx(o.code,{children:"modal"})," component om een modal te tonen.",e.jsx("br",{})]}),`
`,e.jsx(o.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { VlModalComponent } from '@domg-wc/components/block';
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<vl-modal></vl-modal>
`})}),`
`,e.jsx(a,{of:n}),`
`,e.jsx(o.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(z,{of:n}),`
`,e.jsx(o.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(o.h3,{id:"met-andere-actie",children:"Met andere actie"}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(o.h3,{id:"medium",children:"Medium"}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(o.h3,{id:"large",children:"Large"}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(o.h3,{id:"full-screen",children:"Full Screen"}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(o.h3,{id:"left",children:"Left"}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(o.h3,{id:"right",children:"Right"}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(o.h3,{id:"focus-op-modal",children:"Focus op modal"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(o.h2,{id:"toegankelijkheid",children:"Toegankelijkheid"}),`
`,e.jsxs(o.p,{children:["Het triggeren van de modal moet altijd gebeuren via een knop of link. Voor screen readers is het belangrijk dat deze knop of link de juiste aria-attributen bevat. Het gebruik van ",e.jsx(o.code,{children:'aria-haspopup="dialog"'})," is in dit geval verplicht. Optioneel kan je ",e.jsx(o.code,{children:"aria-controls"})," toevoegen met als value de ID van de modal (dit is echter overbodig wanneer de knop binnen een shadow DOM zit (bv vl-button), omdat de koppeling met de ID niet werkt doorheen de shadow DOM). ",e.jsx(o.strong,{children:"Deze aria-attributen moet de afnemer zelf implementeren!"}),"."]}),`
`,e.jsxs(o.p,{children:[`De vl-modal zal standaard de focus leggen op het eerste focusbare element binnenin de modal wanneer deze geopend wordt.
Dit kan aangepast worden door het `,e.jsx(o.code,{children:"focus-on-modal"}),` attribuut toe te voegen aan de modal,
in dat geval zal de focus op de modal zelf gelegd worden bij het openen. Gebruik dit enkel indien
het automatisch focussen op het eerste focusbare element problemen veroorzaakt, bijvoorbeeld wanneer dit meteen een popover triggert.`]}),`
`,e.jsx(o.p,{children:`Het is essentieel dat de modal goed gelabeld is voor gebruikers van schermlezers.
Dit kan op twee manieren bereikt worden:`}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Door het ",e.jsx(o.code,{children:"title"})," attribuut te gebruiken. Onderliggend wordt dit gekoppeld adhv ",e.jsx(o.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(o.li,{children:["Indien het design geen titel toelaat, moet het ",e.jsx(o.code,{children:"label"})," attribuut gebruikt worden zodat een beschrijvende ",e.jsx(o.code,{children:"aria-label"}),`
kan toegevoegd worden aan de modal.`]}),`
`]})]})}function E(l={}){const{wrapper:o}={...h(),...l.components};return o?e.jsx(o,{...l,children:e.jsx(f,{...l})}):f(l)}function N(l,o){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}L([V,T,D]);const H={id:"components-block-modal",title:"Components - Block/modal",tags:["autodocs"],args:p,argTypes:B,parameters:{docs:{page:E}}},n=S({...p,id:""},({title:l,label:o,open:b,closable:y,notCancellable:w,notAutoClosable:k,allowOverflow:O,size:j,position:x,id:v,focusOnModal:A})=>$`
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
                title=${l}
                label=${o}
                ?open=${b}
                ?closable=${y}
                ?not-cancellable=${w}
                ?not-auto-closable=${k}
                ?allow-overflow=${O}
                data-cy="modal"
                size="${j}"
                position="${x}"
                ?focus-on-modal=${A}
            >
                <span slot="content">
                    <vl-datepicker block label="Kies een datum"></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    `);n.storyName="vl-modal - default";n.args={allowOverflow:!0,id:"modal-default",title:"Modal default"};const t=()=>$`
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
`;t.storyName="vl-modal - with other action";t.parameters={controls:{hideNoControlsWarning:!0}};const i=n.bind({});i.storyName="vl-modal - medium";i.args={id:"modal-medium",label:"Modal medium",size:"medium",closable:!0,allowOverflow:!0};const s=n.bind({});s.storyName="vl-modal - large";s.args={id:"modal-large",label:"Modal large",size:"large",closable:!0,allowOverflow:!0};const d=n.bind({});d.storyName="vl-modal - full screen";d.args={id:"modal-full-screen",label:"Modal full screen",size:"full-screen",closable:!0};const r=n.bind({});r.storyName="vl-modal - left";r.args={id:"modal-left",label:"Modal left",position:"left",closable:!0,allowOverflow:!0};const c=n.bind({});c.storyName="vl-modal - right";c.args={id:"modal-right",label:"Modal right",position:"right",closable:!0,allowOverflow:!0};const m=n.bind({});m.storyName="vl-modal - with focus on modal";m.args={id:"modal-focus-on-modal",focusOnModal:!0,closable:!0,label:"Modal met focus op modal",allowOverflow:!0};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story({
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
    \`)`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story({
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
    \`)`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`story({
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
    \`)`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story({
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
    \`)`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story({
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
    \`)`,...m.parameters?.docs?.source}}};const W=["modalDefault","modalWithOtherAction","modalMedium","modalLarge","modalFullScreen","modalLeft","modalRight","modalWithFocusOnModal"];export{W as __namedExportsOrder,H as default,n as modalDefault,d as modalFullScreen,s as modalLarge,r as modalLeft,i as modalMedium,c as modalRight,m as modalWithFocusOnModal,t as modalWithOtherAction};
