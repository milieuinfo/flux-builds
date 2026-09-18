"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[437],{"../../libs/elements/src/form-message/stories/vl-form-validation-message.stories.ts":(e,s,a)=>{a.r(s),a.d(s,{__namedExportsOrder:()=>l,default:()=>o,formValidationMessageDefault:()=>m});var t=a("../../node_modules/lit-html/lit-html.js");a("../../libs/elements/src/form-message/vl-form-validation-message.element.ts");var r=a("../../libs/common/storybook/src/index.ts");let o={id:"elements-form-message-form-validation-message",title:"Elements/form-message/form-validation-message",tags:["autodocs"],args:{error:!0,success:!1},argTypes:{error:{name:"data-vl-error",description:"Attribute to create an error type form validation message",table:{type:{summary:r.QE.BOOLEAN},defaultValue:{summary:!0},category:"Attributes"}},success:{name:"data-vl-success",description:"Attribute to create an success type form validation message",table:{type:{summary:r.QE.BOOLEAN},defaultValue:{summary:!1},category:"Attributes"}}}},m=({error:e,success:s})=>(0,t.qy)`
    <p
        is="vl-form-validation-message"
        ?data-vl-error=${e}
        ?data-vl-success=${s}
        data-cy="form-validation-message"
    >
        Het veld 'Naam evenement' is een verplicht veld.
    </p>
`;m.storyName="vl-form-validation-message - default",m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({\n  error,\n  success\n}: typeof formValidationMessageArgs) => html`\n    <p\n        is="vl-form-validation-message"\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        data-cy="form-validation-message"\n    >\n        Het veld \'Naam evenement\' is een verplicht veld.\n    </p>\n`',...m.parameters?.docs?.source}}};let l=["formValidationMessageDefault"]}}]);