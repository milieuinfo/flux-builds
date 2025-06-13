"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[3014],{"./libs/elements/src/input-group/stories/vl-input-group.stories.ts":(t,n,i)=>{i.r(n),i.d(n,{default:()=>o,inputGroupDefault:()=>u,inputGroupWithButtonLeft:()=>l,inputGroupWithInputAddonRight:()=>p,inputGroupWithTextAddonLeft:()=>s,inputGroupWithTextAddonRight:()=>a});var e=i("./node_modules/lit-html/lit-html.js");i("./libs/elements/src/input-group/vl-input-group.element.ts"),i("./libs/elements/src/button/vl-button.element.ts"),i("./libs/elements/src/input-field/vl-input-field.element.ts"),i("./libs/elements/src/input-addon/vl-input-addon.element.ts"),i("./libs/elements/src/icon/vl-icon.element.ts"),i("./libs/elements/src/text/vl-text.element.ts");let o={title:"Elements/input-group",tags:["autodocs"],parameters:{controls:{hideNoControlsWarning:!0}}},u=()=>(0,e.dy)`
    <div is="vl-input-group" data-cy="input-group">
        <button is="vl-button-input-addon" type="button">
            <span is="vl-icon" data-vl-icon="location"></span>
            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
        </button>
        <input is="vl-input-field" type="text" />
    </div>
`;u.storyName="vl-input-group - default";let p=()=>(0,e.dy)`
    <div is="vl-input-group" data-cy="input-group">
        <input is="vl-input-field" type="text" />
        <button is="vl-button-input-addon" type="button">
            <span is="vl-icon" data-vl-icon="location"></span>
            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
        </button>
    </div>
`;p.storyName="vl-input-group - with input addon right";let s=()=>(0,e.dy)`
    <div is="vl-input-group" data-cy="input-group">
        <button is="vl-button" type="button">Locatie kiezen</button>
        <input is="vl-input-field" type="text" />
    </div>
`;s.storyName="vl-input-group - with text addon left";let a=()=>(0,e.dy)`
    <div is="vl-input-group" data-cy="input-group">
        <input is="vl-input-field" type="text" />
        <button is="vl-button" type="button">Locatie kiezen</button>
    </div>
`;a.storyName="vl-input-group - with text addon right";let l=()=>(0,e.dy)`
    <div is="vl-input-group" data-cy="input-group">
        <button is="vl-button" type="button">
            <span is="vl-icon" data-vl-icon="location"></span>
            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>
        </button>
        <input is="vl-input-field" type="text" />
    </div>
`;l.storyName="vl-input-group - with button left",u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'() => html`\n    <div is="vl-input-group" data-cy="input-group">\n        <button is="vl-button-input-addon" type="button">\n            <span is="vl-icon" data-vl-icon="location"></span>\n            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>\n        </button>\n        <input is="vl-input-field" type="text" />\n    </div>\n`',...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'() => html`\n    <div is="vl-input-group" data-cy="input-group">\n        <input is="vl-input-field" type="text" />\n        <button is="vl-button-input-addon" type="button">\n            <span is="vl-icon" data-vl-icon="location"></span>\n            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>\n        </button>\n    </div>\n`',...p.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'() => html`\n    <div is="vl-input-group" data-cy="input-group">\n        <button is="vl-button" type="button">Locatie kiezen</button>\n        <input is="vl-input-field" type="text" />\n    </div>\n`',...s.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'() => html`\n    <div is="vl-input-group" data-cy="input-group">\n        <input is="vl-input-field" type="text" />\n        <button is="vl-button" type="button">Locatie kiezen</button>\n    </div>\n`',...a.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'() => html`\n    <div is="vl-input-group" data-cy="input-group">\n        <button is="vl-button" type="button">\n            <span is="vl-icon" data-vl-icon="location"></span>\n            <span is="vl-text" data-vl-visually-hidden>Locatie kiezen</span>\n        </button>\n        <input is="vl-input-field" type="text" />\n    </div>\n`',...l.parameters?.docs?.source}}}}}]);