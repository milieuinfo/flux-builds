"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3053],{"../../libs/components/src/modal/stories/vl-modal.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{__namedExportsOrder:()=>v,default:()=>c,modalDefault:()=>u,modalWithOtherAction:()=>b});var l=a("../../libs/common/utilities/src/index.ts"),o=a("../../libs/components/src/next/button/index.ts"),n=a("../../libs/components/src/next/link/index.ts"),d=a("../../node_modules/lit-html/lit-html.js");a("../../libs/components/src/modal/vl-modal.component.ts");var s=a("../../libs/components/src/datepicker/vl-datepicker.component.ts"),m=a("../../libs/common/storybook/src/index.ts");let i={...m.D8,title:"Modal",open:!1,closable:!1,notCancellable:!1,notAutoClosable:!1,allowOverflow:!1},r={...(0,m.RN)(),title:{name:"data-vl-title",description:"Attribuut gebruikt om een `<h2>` titel toe te voegen. Indien leeg, wordt er geen titel element aangemaakt.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},open:{name:"data-vl-open",description:"Attribuut om de modal onmiddellijk te openen na de rendering.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},closable:{name:"data-vl-closable",description:'Attribuut om de modal sluitbaar te maken via het "Sluit"-icoon in de rechterbovenhoek of door de "Escape"-toets te gebruiken.',table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notCancellable:{name:"data-vl-not-cancellable",description:"Attribuut gebruikt om de modal niet annuleerbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notAutoClosable:{name:"data-vl-not-auto-closable",description:"Attribuut om het afsluiten van de modal uit te schakelen bij het klikken op de actie in het button-slot.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},allowOverflow:{name:"data-vl-allow-overflow",description:"Attribuut om de afgesneden inhoud van de modal zichtbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},contentSlot:{name:"content",description:"Dit slot bevat de HTML inhoud van de modal.",table:{type:{summary:m.QE.HTML},category:m.R6.SLOTS}},buttonSlot:{name:"button",description:"Gebruik dit slot om de primaire actie mee te geven.",table:{type:{summary:m.QE.HTML},category:m.R6.SLOTS}}};(0,l.gy)([s.M,o.Y,n.m]);let c={id:"components-modal",title:"Components/modal",tags:["autodocs"],args:i,argTypes:r},u=({title:t,open:e,closable:a,notCancellable:l,notAutoClosable:o,allowOverflow:n})=>(0,d.qy)`
    <div>
        <vl-button-next id="button-open-modal-vt" data-vl-modal-open="modal-vt" data-cy="button-modal-toggle">
            Open
        </vl-button-next>
        <vl-modal
            id="modal-vt"
            data-vl-title=${t}
            ?data-vl-open=${e}
            ?data-vl-closable=${a}
            ?data-vl-not-cancellable=${l}
            ?data-vl-not-auto-closable=${o}
            ?data-vl-allow-overflow=${n}
            data-cy="modal"
        >
            <span slot="content">
                <vl-datepicker></vl-datepicker>
                Lorem ipsum dolor sit amet.
            </span>
            <vl-button-next slot="button">Start aanvraag</vl-button-next>
        </vl-modal>
    </div>
`;u.storyName="vl-modal - default";let b=()=>(0,d.qy)`
    <div>
        <vl-button-next id="button-open-modal-vt" data-vl-modal-open="modal-cl-nc-li" data-cy="button-modal-toggle">
            Open
        </vl-button-next>
        <vl-modal id="modal-cl-nc-li" data-vl-title="Modal" data-vl-closable data-vl-not-cancellable data-cy="modal">
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <vl-link-next slot="button" button-as-link icon="cross" icon-placement="before" data-vl-modal-close>
                Andere actie
            </vl-link-next>
        </vl-modal>
    </div>
`;b.storyName="vl-modal - with other action",b.parameters={controls:{hideNoControlsWarning:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({\n  title,\n  open,\n  closable,\n  notCancellable,\n  notAutoClosable,\n  allowOverflow\n}: typeof modalArgs) => html`\n    <div>\n        <vl-button-next id="button-open-modal-vt" data-vl-modal-open="modal-vt" data-cy="button-modal-toggle">\n            Open\n        </vl-button-next>\n        <vl-modal\n            id="modal-vt"\n            data-vl-title=${title}\n            ?data-vl-open=${open}\n            ?data-vl-closable=${closable}\n            ?data-vl-not-cancellable=${notCancellable}\n            ?data-vl-not-auto-closable=${notAutoClosable}\n            ?data-vl-allow-overflow=${allowOverflow}\n            data-cy="modal"\n        >\n            <span slot="content">\n                <vl-datepicker></vl-datepicker>\n                Lorem ipsum dolor sit amet.\n            </span>\n            <vl-button-next slot="button">Start aanvraag</vl-button-next>\n        </vl-modal>\n    </div>\n`',...u.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'() => html`\n    <div>\n        <vl-button-next id="button-open-modal-vt" data-vl-modal-open="modal-cl-nc-li" data-cy="button-modal-toggle">\n            Open\n        </vl-button-next>\n        <vl-modal id="modal-cl-nc-li" data-vl-title="Modal" data-vl-closable data-vl-not-cancellable data-cy="modal">\n            <span slot="content">Lorem ipsum dolor sit amet.</span>\n            <vl-link-next slot="button" button-as-link icon="cross" icon-placement="before" data-vl-modal-close>\n                Andere actie\n            </vl-link-next>\n        </vl-modal>\n    </div>\n`',...b.parameters?.docs?.source}}};let v=["modalDefault","modalWithOtherAction"]}}]);