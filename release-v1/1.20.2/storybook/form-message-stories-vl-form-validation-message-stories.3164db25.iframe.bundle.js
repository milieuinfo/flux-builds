"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6811],{"./libs/elements/src/form-message/stories/vl-form-validation-message.stories.ts":(e,s,a)=>{a.r(s),a.d(s,{default:()=>r,formValidationMessageDefault:()=>o});var t=a("./node_modules/lit-html/lit-html.js");a("./libs/elements/src/form-message/vl-form-validation-message.element.ts");let r={title:"Elements/form-message/form-validation-message",tags:["autodocs"],args:{error:!0,success:!1},argTypes:{error:{name:"data-vl-error",type:{summary:"Boolean"},description:"Attribute to create an error type form validation message",table:{defaultValue:{summary:!0},category:"Attributes"}},success:{name:"data-vl-success",type:{summary:"Boolean"},description:"Attribute to create an success type form validation message",table:{defaultValue:{summary:!1},category:"Attributes"}}}},o=({error:e,success:s})=>(0,t.dy)`
    <p
        is="vl-form-validation-message"
        ?data-vl-error=${e}
        ?data-vl-success=${s}
        data-cy="form-validation-message"
    >
        Het veld 'Naam evenement' is een verplicht veld.
    </p>
`;o.storyName="vl-form-validation-message - default",o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'({\n  error,\n  success\n}: typeof formValidationMessageArgs) => html`\n    <p\n        is="vl-form-validation-message"\n        ?data-vl-error=${error}\n        ?data-vl-success=${success}\n        data-cy="form-validation-message"\n    >\n        Het veld \'Naam evenement\' is een verplicht veld.\n    </p>\n`',...o.parameters?.docs?.source}}}}}]);