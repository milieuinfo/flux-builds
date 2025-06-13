"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2466],{"./libs/components/src/modal/stories/vl-modal.stories.ts":(t,a,o)=>{o.r(a),o.d(a,{__namedExportsOrder:()=>i,default:()=>n,modalDefault:()=>d,modalWithOtherAction:()=>s});var l=o("./node_modules/lit-html/lit-html.js");o("./libs/components/src/modal/vl-modal.component.ts");var e=o("./libs/common/storybook/src/index.ts");let n={title:"Components/modal",tags:["autodocs"],args:{...e._O,title:"Modal",open:!1,closable:!1,notCancellable:!1,notAutoClosable:!1,allowOverflow:!1},argTypes:{...(0,e.Wp)(),title:{name:"data-vl-title",description:"Attribute used to add an heading 2 (h2) title. When empty there is no heading element created.",table:{type:{summary:"String"},defaultValue:{summary:""},category:"Attributes"}},open:{name:"data-vl-open",description:"Attribute to immediately open up the modal after rendering.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},closable:{name:"data-vl-closable",description:"Attribute to make the modal closable through the close icon in the top right corner.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notCancellable:{name:"data-vl-not-cancellable",description:"Attribute used to make the modal non cancellable",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},notAutoClosable:{name:"data-vl-not-auto-closable",description:"Attribute to disable the closing of the modal when clicking the action in the button slot.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},allowOverflow:{name:"data-vl-allow-overflow",description:"Attribute to allow the content of the modal to overflow.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}}}},d=({title:t,open:a,closable:o,notCancellable:e,notAutoClosable:n,allowOverflow:d})=>(0,l.dy)`
    <div>
        <button id="button-open-modal-vt" is="vl-button" data-vl-modal-open="modal-vt" data-cy="button-modal-toggle">
            Open
        </button>
        <vl-modal
            id="modal-vt"
            data-vl-title=${t}
            ?data-vl-open=${a}
            ?data-vl-closable=${o}
            ?data-vl-not-cancellable=${e}
            ?data-vl-not-auto-closable=${n}
            ?data-vl-allow-overflow=${d}
            data-cy="modal"
        >
            <span slot="content">
                <vl-datepicker></vl-datepicker>
                Lorem ipsum dolor sit amet.
            </span>
            <button is="vl-button" slot="button">Start aanvraag</button>
        </vl-modal>
    </div>
`;d.storyName="vl-modal - default";let s=()=>(0,l.dy)`
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
`;s.storyName="vl-modal - with other action",s.parameters={controls:{hideNoControlsWarning:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'({\n  title,\n  open,\n  closable,\n  notCancellable,\n  notAutoClosable,\n  allowOverflow\n}: typeof modalArgs) => html`\n    <div>\n        <button id="button-open-modal-vt" is="vl-button" data-vl-modal-open="modal-vt" data-cy="button-modal-toggle">\n            Open\n        </button>\n        <vl-modal\n            id="modal-vt"\n            data-vl-title=${title}\n            ?data-vl-open=${open}\n            ?data-vl-closable=${closable}\n            ?data-vl-not-cancellable=${notCancellable}\n            ?data-vl-not-auto-closable=${notAutoClosable}\n            ?data-vl-allow-overflow=${allowOverflow}\n            data-cy="modal"\n        >\n            <span slot="content">\n                <vl-datepicker></vl-datepicker>\n                Lorem ipsum dolor sit amet.\n            </span>\n            <button is="vl-button" slot="button">Start aanvraag</button>\n        </vl-modal>\n    </div>\n`',...d.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'() => html`\n    <div>\n        <button\n            id="button-open-modal-vt"\n            is="vl-button"\n            data-vl-modal-open="modal-cl-nc-li"\n            data-cy="button-modal-toggle"\n        >\n            Open\n        </button>\n        <vl-modal id="modal-cl-nc-li" data-vl-title="Modal" data-vl-closable data-vl-not-cancellable data-cy="modal">\n            <span slot="content">Lorem ipsum dolor sit amet.</span>\n            <button is="vl-button-link" class="custom-action-button" slot="button">\n                <span is="vl-icon" data-vl-icon="cross" before="" data-vl-modal-close=""></span>\n                Andere actie\n            </button>\n        </vl-modal>\n    </div>\n`',...s.parameters?.docs?.source}}};let i=["modalDefault","modalWithOtherAction"]}}]);