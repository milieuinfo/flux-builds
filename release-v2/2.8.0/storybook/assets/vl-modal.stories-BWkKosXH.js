import{K as i,L as m,H as w,I as k,s as A,x as c,r as C,h,b8 as O}from"./iframe-BQb9mjVp.js";import{V as S}from"./vl-datepicker.component-CVLjVc3J.js";import"./preload-helper-D9Z9MdNV.js";import"./cleave-esm-DfUhcNrv.js";const r={...k,title:"Modal",open:!1,closable:!1,notCancellable:!1,notAutoClosable:!1,allowOverflow:!1,contentSlot:"",buttonSlot:"",size:"default",position:"center"},z={...w,title:{name:"title",description:"Attribuut gebruikt om een `<h2>` titel toe te voegen. Indien leeg, wordt er geen titel element aangemaakt.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},open:{name:"open",description:"Attribuut om de modal onmiddellijk te openen na de rendering.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},closable:{name:"closable",description:'Attribuut om de modal sluitbaar te maken via het "Sluit"-icoon in de rechterbovenhoek of door de "Escape"-toets te gebruiken.',table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notCancellable:{name:"not-cancellable",description:"Attribuut gebruikt om de modal niet annuleerbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notAutoClosable:{name:"not-auto-closable",description:"Attribuut om het afsluiten van de modal uit te schakelen bij het klikken op de actie in het button-slot.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},allowOverflow:{name:"allow-overflow",description:"Attribuut om de afgesneden inhoud van de modal zichtbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},contentSlot:{name:"content",description:"Dit slot bevat de HTML inhoud van de modal.",table:{type:{summary:m.HTML},category:i.SLOTS}},buttonSlot:{name:"button",description:"Gebruik dit slot om de primaire actie mee te geven.",table:{type:{summary:m.HTML},category:i.SLOTS}},size:{name:"size",description:"Attribuut om de grootte van de modal te bepalen.",options:["default","medium","large","full-screen"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:r.size},category:i.ATTRIBUTES}},position:{name:"position",description:"Attribuut om de positie van de modal op het scherm te bepalen.",options:["center","left","right"],control:{type:"select"},table:{type:{summary:"String"},defaultValue:{summary:r.position},category:i.ATTRIBUTES}}};C([S,h,O]);const M={id:"components-block-modal",title:"Components - Block/modal",tags:["autodocs"],args:r,argTypes:z},o=A({...r,id:""},({title:u,open:p,closable:b,notCancellable:v,notAutoClosable:g,allowOverflow:y,size:f,position:$,id:d})=>c`
        <div>
            <vl-button id="button-open-modal-vt" modal-open="${d}" data-cy="button-modal-toggle"> Open </vl-button>
            <vl-modal
                id="${d}"
                title=${u}
                ?open=${p}
                ?closable=${b}
                ?not-cancellable=${v}
                ?not-auto-closable=${g}
                ?allow-overflow=${y}
                data-cy="modal"
                size="${f}"
                position="${$}"
            >
                <span slot="content">
                    <vl-datepicker block></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    `);o.storyName="vl-modal - default";o.args={allowOverflow:!0};const t=()=>c`
    <div>
        <vl-button id="button-open-modal-vt" modal-open="modal-cl-nc-li" data-cy="button-modal-toggle">
            Open
        </vl-button>
        <vl-modal id="modal-cl-nc-li" title="Modal" closable not-cancellable data-cy="modal">
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <vl-link slot="button" button-as-link icon="cross" icon-placement="before" modal-close>
                Andere actie
            </vl-link>
        </vl-modal>
    </div>
`;t.storyName="vl-modal - with other action";t.parameters={controls:{hideNoControlsWarning:!0}};const e=o.bind({});e.storyName="vl-modal - medium";e.args={id:"modal-medium",size:"medium",closable:!0,allowOverflow:!0};const l=o.bind({});l.storyName="vl-modal - large";l.args={id:"modal-large",size:"large",closable:!0,allowOverflow:!0};const n=o.bind({});n.storyName="vl-modal - full screen";n.args={id:"modal-full-screen",size:"full-screen",closable:!0};const a=o.bind({});a.storyName="vl-modal - left";a.args={id:"modal-left",position:"left",closable:!0,allowOverflow:!0};const s=o.bind({});s.storyName="vl-modal - right";s.args={id:"modal-right",position:"right",closable:!0,allowOverflow:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id
}) => html\`
        <div>
            <vl-button id="button-open-modal-vt" modal-open="\${id}" data-cy="button-modal-toggle"> Open </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
            >
                <span slot="content">
                    <vl-datepicker block></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => html\`
    <div>
        <vl-button id="button-open-modal-vt" modal-open="modal-cl-nc-li" data-cy="button-modal-toggle">
            Open
        </vl-button>
        <vl-modal id="modal-cl-nc-li" title="Modal" closable not-cancellable data-cy="modal">
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <vl-link slot="button" button-as-link icon="cross" icon-placement="before" modal-close>
                Andere actie
            </vl-link>
        </vl-modal>
    </div>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id
}) => html\`
        <div>
            <vl-button id="button-open-modal-vt" modal-open="\${id}" data-cy="button-modal-toggle"> Open </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
            >
                <span slot="content">
                    <vl-datepicker block></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id
}) => html\`
        <div>
            <vl-button id="button-open-modal-vt" modal-open="\${id}" data-cy="button-modal-toggle"> Open </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
            >
                <span slot="content">
                    <vl-datepicker block></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id
}) => html\`
        <div>
            <vl-button id="button-open-modal-vt" modal-open="\${id}" data-cy="button-modal-toggle"> Open </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
            >
                <span slot="content">
                    <vl-datepicker block></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id
}) => html\`
        <div>
            <vl-button id="button-open-modal-vt" modal-open="\${id}" data-cy="button-modal-toggle"> Open </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
            >
                <span slot="content">
                    <vl-datepicker block></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story({
  ...modalArgs,
  id: ''
}, ({
  title,
  open,
  closable,
  notCancellable,
  notAutoClosable,
  allowOverflow,
  size,
  position,
  id
}) => html\`
        <div>
            <vl-button id="button-open-modal-vt" modal-open="\${id}" data-cy="button-modal-toggle"> Open </vl-button>
            <vl-modal
                id="\${id}"
                title=\${title}
                ?open=\${open}
                ?closable=\${closable}
                ?not-cancellable=\${notCancellable}
                ?not-auto-closable=\${notAutoClosable}
                ?allow-overflow=\${allowOverflow}
                data-cy="modal"
                size="\${size}"
                position="\${position}"
            >
                <span slot="content">
                    <vl-datepicker block></vl-datepicker>
                    Lorem ipsum dolor sit amet.
                </span>
                <vl-button slot="button">Start aanvraag</vl-button>
            </vl-modal>
        </div>
    \`)`,...s.parameters?.docs?.source}}};const N=["modalDefault","modalWithOtherAction","modalMedium","modalLarge","modalFullScreen","modalLeft","modalRight"];export{N as __namedExportsOrder,M as default,o as modalDefault,n as modalFullScreen,l as modalLarge,a as modalLeft,e as modalMedium,s as modalRight,t as modalWithOtherAction};
