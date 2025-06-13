"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5255],{"../../libs/elements/src/action-group/stories/vl-action-group.stories.ts":(a,e,l)=>{l.r(e),l.d(e,{__namedExportsOrder:()=>r,actionGroupDefault:()=>o,actionGroupWithLinks:()=>i,default:()=>s});var t=l("../../node_modules/lit-html/lit-html.js");l("../../libs/elements/src/action-group/vl-action-group.element.ts"),l("../../libs/elements/src/button/vl-button.element.ts"),l("../../libs/elements/src/link/vl-link.element.ts"),l("../../libs/elements/src/icon/vl-icon.element.ts");var n=l("../../libs/common/storybook/src/index.ts");let s={id:"elements-action-group",title:"Elements/action-group",tags:["autodocs"],args:{align:"",spaceBetween:!1,bordered:!1,collapseL:!1,collapseM:!1,collapseS:!1,collapseXs:!1},argTypes:{align:{name:"data-vl-align",control:{type:n.VH.SELECT},options:["left","center","right"],table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:"left"}},description:"Sets the alignment of the action group"},spaceBetween:{name:"data-vl-space-between",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:"false"}},description:"Sets an equal space between its children."},bordered:{name:"data-vl-bordered",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:"false"}},control:{disable:!0},description:"Adds a line between each link in the action group."},collapseL:{name:"data-vl-collapse-l",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:"false"}},description:"Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other."},collapseM:{name:"data-vl-collapse-m",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:"false"}},description:"Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other."},collapseS:{name:"data-vl-collapse-s",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:"false"}},description:"Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other."},collapseXs:{name:"data-vl-collapse-xs",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:"false"}},description:"Makes the action group collapse on a certain breakpoint. This will put the actions underneath each other."}}},o=({align:a,spaceBetween:e,bordered:l,collapseL:n,collapseM:s,collapseS:o,collapseXs:i})=>(0,t.qy)` <div
    is="vl-action-group"
    data-vl-align=${a}
    ?data-vl-space-between=${e}
    ?data-vl-bordered=${l}
    ?data-vl-collapse-l=${n}
    ?data-vl-collapse-m=${s}
    ?data-vl-collapse-s=${o}
    ?data-vl-collapse-xs=${i}
    data-cy="action-group"
>
    <button is="vl-button">Aanvraag starten</button>
    <button is="vl-button" data-vl-secondary>Annuleren</button>
</div>`;o.storyName="vl-action-group - default";let i=({align:a,spaceBetween:e,bordered:l,collapseL:n,collapseM:s,collapseS:o,collapseXs:i})=>(0,t.qy)` <div
    is="vl-action-group"
    data-vl-align=${a}
    ?data-vl-space-between=${e}
    ?data-vl-bordered=${l}
    ?data-vl-collapse-l=${n}
    ?data-vl-collapse-m=${s}
    ?data-vl-collapse-s=${o}
    ?data-vl-collapse-xs=${i}
    data-cy="action-group-with-links"
>
    <a href="#" is="vl-link">
        <span is="vl-icon" data-vl-icon="bell" data-vl-before></span>
        Notificaties
    </a>
    <a href="#" is="vl-link">
        <span is="vl-icon" data-vl-icon="graduate" data-vl-before></span>
        Opleidingen
    </a>
    <a href="#" is="vl-link">
        <span is="vl-icon" data-vl-icon="pin" data-vl-before></span>
        Locaties
    </a>
</div>`;i.storyName="vl-action-group - with links",i.argTypes={bordered:{control:{disable:!1}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'({\n  align,\n  spaceBetween,\n  bordered,\n  collapseL,\n  collapseM,\n  collapseS,\n  collapseXs\n}: typeof actionGroupArgs) => html` <div\n    is="vl-action-group"\n    data-vl-align=${align}\n    ?data-vl-space-between=${spaceBetween}\n    ?data-vl-bordered=${bordered}\n    ?data-vl-collapse-l=${collapseL}\n    ?data-vl-collapse-m=${collapseM}\n    ?data-vl-collapse-s=${collapseS}\n    ?data-vl-collapse-xs=${collapseXs}\n    data-cy="action-group"\n>\n    <button is="vl-button">Aanvraag starten</button>\n    <button is="vl-button" data-vl-secondary>Annuleren</button>\n</div>`',...o.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  align,\n  spaceBetween,\n  bordered,\n  collapseL,\n  collapseM,\n  collapseS,\n  collapseXs\n}: typeof actionGroupArgs) => html` <div\n    is="vl-action-group"\n    data-vl-align=${align}\n    ?data-vl-space-between=${spaceBetween}\n    ?data-vl-bordered=${bordered}\n    ?data-vl-collapse-l=${collapseL}\n    ?data-vl-collapse-m=${collapseM}\n    ?data-vl-collapse-s=${collapseS}\n    ?data-vl-collapse-xs=${collapseXs}\n    data-cy="action-group-with-links"\n>\n    <a href="#" is="vl-link">\n        <span is="vl-icon" data-vl-icon="bell" data-vl-before></span>\n        Notificaties\n    </a>\n    <a href="#" is="vl-link">\n        <span is="vl-icon" data-vl-icon="graduate" data-vl-before></span>\n        Opleidingen\n    </a>\n    <a href="#" is="vl-link">\n        <span is="vl-icon" data-vl-icon="pin" data-vl-before></span>\n        Locaties\n    </a>\n</div>`',...i.parameters?.docs?.source}}};let r=["actionGroupDefault","actionGroupWithLinks"]}}]);