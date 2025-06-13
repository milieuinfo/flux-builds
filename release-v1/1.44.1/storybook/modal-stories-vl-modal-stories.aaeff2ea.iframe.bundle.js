"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3053],{"../../libs/components/src/modal/stories/vl-modal.stories.ts":(t,a,e)=>{e.r(a),e.d(a,{__namedExportsOrder:()=>b,default:()=>r,modalDefault:()=>c,modalWithOtherAction:()=>u});var o=e("../../libs/common/utilities/src/index.ts"),l=e("../../node_modules/lit-html/lit-html.js");e("../../libs/components/src/modal/vl-modal.component.ts");var n=e("../../libs/components/src/datepicker/vl-datepicker.component.ts"),d=e("../../libs/common/storybook/src/index.ts");let s={...d.D8,title:"Modal",open:!1,closable:!1,notCancellable:!1,notAutoClosable:!1,allowOverflow:!1},i={...(0,d.RN)(),title:{name:"data-vl-title",description:"Attribuut gebruikt om een `<h2>` titel toe te voegen. Indien leeg, wordt er geen titel element aangemaakt.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},open:{name:"data-vl-open",description:"Attribuut om de modal onmiddellijk te openen na de rendering.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},closable:{name:"data-vl-closable",description:'Attribuut om de modal sluitbaar te maken via het "Sluit"-icoon in de rechterbovenhoek of door de "Escape"-toets te gebruiken.',table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notCancellable:{name:"data-vl-not-cancellable",description:"Attribuut gebruikt om de modal niet annuleerbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notAutoClosable:{name:"data-vl-not-auto-closable",description:"Attribuut om het afsluiten van de modal uit te schakelen bij het klikken op de actie in het button-slot.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},allowOverflow:{name:"data-vl-allow-overflow",description:"Attribuut om de afgesneden inhoud van de modal zichtbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},contentSlot:{name:"content",description:"Dit slot bevat de HTML inhoud van de modal.",table:{type:{summary:d.QE.HTML},category:d.R6.SLOTS}},buttonSlot:{name:"button",description:"Gebruik dit slot om de primaire actie mee te geven.",table:{type:{summary:d.QE.HTML},category:d.R6.SLOTS}}};var m=e("../../libs/components/src/next/button/index.ts");(0,o.gy)([n.M,m.Y]);let r={id:"components-modal",title:"Components/modal",tags:["autodocs"],args:s,argTypes:i},c=({title:t,open:a,closable:e,notCancellable:o,notAutoClosable:n,allowOverflow:d})=>(0,l.qy)`
    <div>
        <button id="button-open-modal-vt" is="vl-button" data-vl-modal-open="modal-vt" data-cy="button-modal-toggle">
            Open
        </button>
        <vl-modal
            id="modal-vt"
            data-vl-title=${t}
            ?data-vl-open=${a}
            ?data-vl-closable=${e}
            ?data-vl-not-cancellable=${o}
            ?data-vl-not-auto-closable=${n}
            ?data-vl-allow-overflow=${d}
            data-cy="modal"
        >
            <span slot="content">
                <vl-datepicker></vl-datepicker>
                Lorem ipsum dolor sit amet.
            </span>
            <vl-button-next slot="button">Start aanvraag</vl-button-next>
        </vl-modal>
    </div>
`;c.storyName="vl-modal - default";let u=()=>(0,l.qy)`
    <div>
        <button
            id="button-open-modal-vt"
            is="vl-button"
            data-vl-modal-open="modal-cl-nc-li"
            data-cy="button-modal-toggle"
        >
            Open
        </button>
        <vl-modal id="modal-cl-nc-li" data-vl-title="Modal" data-vl-closable data-vl-not-cancellable data-cy="modal">
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <button is="vl-button-link" class="custom-action-button" slot="button">
                <span is="vl-icon" data-vl-icon="cross" before="" data-vl-modal-close=""></span>
                Andere actie
            </button>
        </vl-modal>
    </div>
`;u.storyName="vl-modal - with other action",u.parameters={controls:{hideNoControlsWarning:!0}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'({\n  title,\n  open,\n  closable,\n  notCancellable,\n  notAutoClosable,\n  allowOverflow\n}: typeof modalArgs) => html`\n    <div>\n        <button id="button-open-modal-vt" is="vl-button" data-vl-modal-open="modal-vt" data-cy="button-modal-toggle">\n            Open\n        </button>\n        <vl-modal\n            id="modal-vt"\n            data-vl-title=${title}\n            ?data-vl-open=${open}\n            ?data-vl-closable=${closable}\n            ?data-vl-not-cancellable=${notCancellable}\n            ?data-vl-not-auto-closable=${notAutoClosable}\n            ?data-vl-allow-overflow=${allowOverflow}\n            data-cy="modal"\n        >\n            <span slot="content">\n                <vl-datepicker></vl-datepicker>\n                Lorem ipsum dolor sit amet.\n            </span>\n            <vl-button-next slot="button">Start aanvraag</vl-button-next>\n        </vl-modal>\n    </div>\n`',...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'() => html`\n    <div>\n        <button\n            id="button-open-modal-vt"\n            is="vl-button"\n            data-vl-modal-open="modal-cl-nc-li"\n            data-cy="button-modal-toggle"\n        >\n            Open\n        </button>\n        <vl-modal id="modal-cl-nc-li" data-vl-title="Modal" data-vl-closable data-vl-not-cancellable data-cy="modal">\n            <span slot="content">Lorem ipsum dolor sit amet.</span>\n            <button is="vl-button-link" class="custom-action-button" slot="button">\n                <span is="vl-icon" data-vl-icon="cross" before="" data-vl-modal-close=""></span>\n                Andere actie\n            </button>\n        </vl-modal>\n    </div>\n`',...u.parameters?.docs?.source}}};let b=["modalDefault","modalWithOtherAction"]}}]);