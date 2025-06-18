"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4089],{"../../libs/components/src/toggle-button/stories/vl-toggle-button.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{__namedExportsOrder:()=>y,default:()=>u,toggleButtonControlled:()=>$,toggleButtonDefault:()=>v,toggleButtonWithIcon:()=>b});var n=a("../../node_modules/lit-html/lit-html.js");a("../../libs/components/src/toggle-button/vl-toggle-button.component.ts");var o=a("../../libs/components/src/toggle-button/vl-toggle-button.model.ts"),l=a("../../libs/common/storybook/src/index.ts"),r=a("../../node_modules/@storybook/addon-actions/dist/index.mjs");let c={...l.D8,loading:!1,disabled:!1,error:!1,block:!1,large:!1,wide:!1,narrow:!1,content:null},i={...(0,l.RN)(),disabled:{description:"Used to indicate to the user that the functionality is not active.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},error:{name:"data-vl-error",description:"Used to emphasize the importance or consequences of an action.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},block:{name:"data-vl-block",description:"Used to ensure that the button is shown as a block element and will therefore take the width of the parent.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},large:{name:"data-vl-large",description:"Used to grab the user's attention by increasing the font size.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},wide:{name:"data-vl-wide",description:"Makes the button appear wider on the screen.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},narrow:{name:"data-vl-narrow",description:"Causes the button to appear narrower on the screen.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},loading:{name:"data-vl-loading",description:"Used to indicate to the user that their action is currently being processed.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"},category:"Attributes"}},content:{name:"content (for demo purposes)",table:{type:{summary:"String"}}}},d={...c,active:!1,icon:void 0,iconPlacement:void 0,content:"Toggle button",textHidden:!1,disabled:!1,click:(0,r.XI)("click"),change:(0,r.XI)("change")},s={...i,active:{name:"active",description:"Controls the active state of the toggle button.",table:{type:{summary:"Boolean"},category:"Properties"},control:{disabled:!0}},icon:{name:"data-vl-icon",type:{name:l.QE.STRING,required:!1},description:"Sets the icon of the toggle button.",table:{type:{summary:l.QE.STRING},category:"Attributes"}},iconPlacement:{name:"data-vl-icon-placement",description:"Determines where the icon should be rendered before or after the text.",table:{type:{summary:(0,l.uf)(Object.values(o.a))},category:"Attributes",defaultValue:{summary:o.a.AFTER}},control:{type:l.VH.SELECT},options:Object.values(o.a)},textHidden:{name:"data-vl-text-hidden",description:"Determines whether the toggle button text is shown.",table:{type:{summary:"Boolean"},category:"Attributes",defaultValue:{summary:"false"}}},change:{name:"change",description:"Custom event that is triggered when the active state of the toggle button changes.",table:{category:"Events"}},click:{name:"click",description:"Event fired on click of the toggle button.",table:{category:"Events"}}},g=t=>{let[e]=[...Array(document.querySelectorAll(t))].slice(-1);return e},u={id:"components-toggle-button",title:"Components/toggle-button",tags:["autodocs"],args:d,argTypes:s},v=({active:t,icon:e,iconPlacement:a,textHidden:o,error:l,block:r,large:c,wide:i,narrow:d,loading:s,disabled:g,change:u,click:v,content:b})=>(0,n.qy)` <vl-toggle-button
        .active=${t}
        data-vl-icon=${e}
        data-vl-icon-placement=${a}
        ?data-vl-text-hidden=${o}
        ?data-vl-error=${l}
        ?data-vl-block=${r}
        ?data-vl-large=${c}
        ?data-vl-wide=${i}
        ?data-vl-narrow=${d}
        ?data-vl-loading=${s}
        ?disabled=${g}
        @change=${t=>u(t.detail)}
        @click=${t=>{v(t)}}
        data-cy="toggle-button"
        >${b}
    </vl-toggle-button>`;v.storyName="vl-toggle-button - default";let b=({active:t,icon:e,iconPlacement:a,textHidden:o,error:l,block:r,large:c,wide:i,narrow:d,loading:s,disabled:g,change:u,click:v,content:b})=>(0,n.qy)` <vl-toggle-button
        .active=${t}
        data-vl-icon=${e}
        data-vl-icon-placement=${a}
        ?data-vl-text-hidden=${o}
        ?data-vl-error=${l}
        ?data-vl-block=${r}
        ?data-vl-large=${c}
        ?data-vl-wide=${i}
        ?data-vl-narrow=${d}
        ?data-vl-loading=${s}
        ?disabled=${g}
        @change=${t=>u(t.detail)}
        @click=${t=>{v(t)}}
        data-cy="toggle-button-with-icon"
        >${b}
    </vl-toggle-button>`;b.storyName="vl-toggle-button - with icon",b.args={icon:"pencil",iconPlacement:o.a.AFTER};let m=()=>g("vl-toggle-button"),$=({active:t,icon:e,iconPlacement:a,textHidden:o,error:l,block:r,large:c,wide:i,narrow:d,loading:s,disabled:g,change:u,click:v,content:b})=>(0,n.qy)` <vl-toggle-button
    .active=${t}
    data-vl-icon=${e}
    data-vl-icon-placement=${a}
    ?data-vl-text-hidden=${o}
    ?data-vl-error=${l}
    ?data-vl-block=${r}
    ?data-vl-large=${c}
    ?data-vl-wide=${i}
    ?data-vl-narrow=${d}
    ?data-vl-loading=${s}
    ?disabled=${g}
    @change=${t=>u(t.detail)}
    @click=${t=>{v(t);let e=m();e.active=!e.active}}
    data-cy="toggle-button-controlled"
    >${b}
</vl-toggle-button>`;$.storyName="vl-toggle-button - controlled",$.args={active:!1},$.argTypes={active:{control:{disabled:!1}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'({\n  active,\n  icon,\n  iconPlacement,\n  textHidden,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  loading,\n  disabled,\n  change,\n  click,\n  content\n}: typeof toggleButtonArgs) => html` <vl-toggle-button\n        .active=${active}\n        data-vl-icon=${icon}\n        data-vl-icon-placement=${iconPlacement}\n        ?data-vl-text-hidden=${textHidden}\n        ?data-vl-error=${error}\n        ?data-vl-block=${block}\n        ?data-vl-large=${large}\n        ?data-vl-wide=${wide}\n        ?data-vl-narrow=${narrow}\n        ?data-vl-loading=${loading}\n        ?disabled=${disabled}\n        @change=${(event: any) => change(event.detail)}\n        @click=${(event: any) => {\n  click(event);\n}}\n        data-cy="toggle-button"\n        >${content}\n    </vl-toggle-button>`',...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'({\n  active,\n  icon,\n  iconPlacement,\n  textHidden,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  loading,\n  disabled,\n  change,\n  click,\n  content\n}: typeof toggleButtonArgs) => html` <vl-toggle-button\n        .active=${active}\n        data-vl-icon=${icon}\n        data-vl-icon-placement=${iconPlacement}\n        ?data-vl-text-hidden=${textHidden}\n        ?data-vl-error=${error}\n        ?data-vl-block=${block}\n        ?data-vl-large=${large}\n        ?data-vl-wide=${wide}\n        ?data-vl-narrow=${narrow}\n        ?data-vl-loading=${loading}\n        ?disabled=${disabled}\n        @change=${(event: any) => change(event.detail)}\n        @click=${(event: any) => {\n  click(event);\n}}\n        data-cy="toggle-button-with-icon"\n        >${content}\n    </vl-toggle-button>`',...b.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:'({\n  active,\n  icon,\n  iconPlacement,\n  textHidden,\n  error,\n  block,\n  large,\n  wide,\n  narrow,\n  loading,\n  disabled,\n  change,\n  click,\n  content\n}: typeof toggleButtonArgs) => html` <vl-toggle-button\n    .active=${active}\n    data-vl-icon=${icon}\n    data-vl-icon-placement=${iconPlacement}\n    ?data-vl-text-hidden=${textHidden}\n    ?data-vl-error=${error}\n    ?data-vl-block=${block}\n    ?data-vl-large=${large}\n    ?data-vl-wide=${wide}\n    ?data-vl-narrow=${narrow}\n    ?data-vl-loading=${loading}\n    ?disabled=${disabled}\n    @change=${(event: any) => change(event.detail)}\n    @click=${(event: any) => {\n  click(event);\n  const toggleButton = getToggleButton();\n  toggleButton.active = !toggleButton.active;\n}}\n    data-cy="toggle-button-controlled"\n    >${content}\n</vl-toggle-button>`',...$.parameters?.docs?.source}}};let y=["toggleButtonDefault","toggleButtonWithIcon","toggleButtonControlled"]}}]);