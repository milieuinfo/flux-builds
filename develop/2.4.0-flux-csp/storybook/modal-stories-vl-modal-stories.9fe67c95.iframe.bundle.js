"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3053],{"../../libs/components/src/block/modal/stories/vl-modal.stories.ts":(t,e,o)=>{o.r(e),o.d(e,{__namedExportsOrder:()=>p,default:()=>c,modalDefault:()=>u,modalWithOtherAction:()=>b});var l=o("../../libs/common/src/index.ts"),a=o("../../node_modules/lit-html/lit-html.js");o("../../libs/components/src/block/modal/vl-modal.component.ts");var n=o("../../libs/components/src/atom/button/index.ts"),s=o("../../libs/components/src/atom/link/index.ts"),r=o("../../resources/utils-storybook/index.ts");let d={...r.D8,title:"Modal",open:!1,closable:!1,notCancellable:!1,notAutoClosable:!1,allowOverflow:!1},m={...r.RN,title:{name:"title",description:"Attribuut gebruikt om een `<h2>` titel toe te voegen. Indien leeg, wordt er geen titel element aangemaakt.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},open:{name:"open",description:"Attribuut om de modal onmiddellijk te openen na de rendering.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},closable:{name:"closable",description:'Attribuut om de modal sluitbaar te maken via het "Sluit"-icoon in de rechterbovenhoek of door de "Escape"-toets te gebruiken.',table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notCancellable:{name:"not-cancellable",description:"Attribuut gebruikt om de modal niet annuleerbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notAutoClosable:{name:"not-auto-closable",description:"Attribuut om het afsluiten van de modal uit te schakelen bij het klikken op de actie in het button-slot.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},allowOverflow:{name:"allow-overflow",description:"Attribuut om de afgesneden inhoud van de modal zichtbaar te maken.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},contentSlot:{name:"content",description:"Dit slot bevat de HTML inhoud van de modal.",table:{type:{summary:r.QE.HTML},category:r.R6.SLOTS}},buttonSlot:{name:"button",description:"Gebruik dit slot om de primaire actie mee te geven.",table:{type:{summary:r.QE.HTML},category:r.R6.SLOTS}}};var i=o("../../libs/components/src/form/datepicker/index.ts");(0,l.gy)([i.M,n.Y,s.m]);let c={id:"components-block-modal",title:"Components - Block/modal",tags:["autodocs"],args:d,argTypes:m},u=({title:t,open:e,closable:o,notCancellable:l,notAutoClosable:n,allowOverflow:s})=>(0,a.qy)`
    <div>
        <vl-button id="button-open-modal-vt" modal-open="modal-vt" data-cy="button-modal-toggle"> Open </vl-button>
        <vl-modal
            id="modal-vt"
            title=${t}
            ?open=${e}
            ?closable=${o}
            ?not-cancellable=${l}
            ?not-auto-closable=${n}
            ?allow-overflow=${s}
            data-cy="modal"
        >
            <span slot="content">
                <vl-datepicker block></vl-datepicker>
                Lorem ipsum dolor sit amet.
            </span>
            <vl-button slot="button">Start aanvraag</vl-button>
        </vl-modal>
    </div>
`;u.storyName="vl-modal - default";let b=()=>(0,a.qy)`
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
`;b.storyName="vl-modal - with other action",b.parameters={controls:{hideNoControlsWarning:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({\n  title,\n  open,\n  closable,\n  notCancellable,\n  notAutoClosable,\n  allowOverflow\n}: typeof modalArgs) => html`\n    <div>\n        <vl-button id="button-open-modal-vt" modal-open="modal-vt" data-cy="button-modal-toggle"> Open </vl-button>\n        <vl-modal\n            id="modal-vt"\n            title=${title}\n            ?open=${open}\n            ?closable=${closable}\n            ?not-cancellable=${notCancellable}\n            ?not-auto-closable=${notAutoClosable}\n            ?allow-overflow=${allowOverflow}\n            data-cy="modal"\n        >\n            <span slot="content">\n                <vl-datepicker block></vl-datepicker>\n                Lorem ipsum dolor sit amet.\n            </span>\n            <vl-button slot="button">Start aanvraag</vl-button>\n        </vl-modal>\n    </div>\n`',...u.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'() => html`\n    <div>\n        <vl-button id="button-open-modal-vt" modal-open="modal-cl-nc-li" data-cy="button-modal-toggle">\n            Open\n        </vl-button>\n        <vl-modal id="modal-cl-nc-li" title="Modal" closable not-cancellable data-cy="modal">\n            <span slot="content">Lorem ipsum dolor sit amet.</span>\n            <vl-link slot="button" button-as-link icon="cross" icon-placement="before" modal-close>\n                Andere actie\n            </vl-link>\n        </vl-modal>\n    </div>\n`',...b.parameters?.docs?.source}}};let p=["modalDefault","modalWithOtherAction"]},"../../libs/components/src/form/datepicker/index.ts":(t,e,o)=>{o.d(e,{M:()=>l.M});var l=o("../../libs/components/src/form/datepicker/vl-datepicker.component.ts")}}]);