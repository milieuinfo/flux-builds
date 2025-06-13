"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[231],{"../../libs/elements/src/icon/stories/vl-icon.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{__namedExportsOrder:()=>d,default:()=>r,iconAfter:()=>i,iconBefore:()=>s,iconDefault:()=>l});var n=a("../../node_modules/lit-html/lit-html.js");a("../../libs/elements/src/icon/vl-icon.element.ts"),a("../../libs/elements/src/icon/vl-icon-wrapper.element.ts");var o=a("../../libs/common/storybook/src/index.ts");let r={title:"Elements/icon/icon",tags:["autodocs"],args:{icon:"calendar",size:"",light:!1,rotate:!1,fullRotate:!1,before:!1,after:!1,link:!1,content:"Lorem ipsum dolor sit amet"},argTypes:{icon:{name:"data-vl-icon",control:{type:o.VH.SELECT},options:["calendar","chat-help","key"],description:"Attribuut wordt gebruikt om aan te geven welk icoon getoond moet worden.",table:{defaultValue:{summary:""},type:{summary:(0,o.uf)(["calendar","chat-help","key",""])}}},size:{name:"data-vl-size",control:{type:o.VH.SELECT},options:["small","large"],description:"Attribuut wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent.",table:{type:{summary:(0,o.uf)(["small","large",""])},defaultValue:{summary:""}}},light:{name:"data-vl-light",description:"Attribuut wordt gebruikt om het icoon een lichte kleur te geven.",table:{type:{summary:o.QE.BOOLEAN},defaultValue:{summary:"false"}}},rotate:{name:"data-vl-90deg",description:"Attribuut wordt gebruikt om het icoon 90 graden te roteren.",table:{type:{summary:o.QE.BOOLEAN},defaultValue:{summary:"false"}}},fullRotate:{name:"data-vl-180deg",description:"Attribuut wordt gebruikt om het icoon 180 graden te roteren.",table:{type:{summary:o.QE.BOOLEAN},defaultValue:{summary:"false"}}},before:{name:"data-vl-before",description:"Attribuut wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",control:{disable:!0},table:{type:{summary:o.QE.BOOLEAN},defaultValue:{summary:"false"}}},after:{name:"data-vl-after",description:"Attribuut wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",control:{disable:!0},table:{type:{summary:o.QE.BOOLEAN},defaultValue:{summary:"false"}}},link:{name:"data-vl-link",description:"Attribuut moet gebruikt worden wanneer het icoon binnen een a tag gebruikt wordt zodat de stijl goed is.",control:{disable:!0},table:{type:{summary:o.QE.BOOLEAN},defaultValue:{summary:"false"}}},content:{name:"content (for demo purposes)",table:{type:{summary:o.QE.STRING}}}}},l=({icon:e,size:t,light:a,rotate:o,fullRotate:r})=>(0,n.qy)`<span
    is="vl-icon"
    data-vl-icon=${e}
    data-vl-size=${t}
    ?data-vl-light=${a}
    ?data-vl-90deg=${o}
    ?data-vl-180deg=${r}
    data-cy="icon-default"
></span>`;l.storyName="vl-icon - default",l.argTypes={content:{control:!1}};let s=({icon:e,size:t,light:a,rotate:o,fullRotate:r,content:l,before:s})=>(0,n.qy)`<p
    is="vl-icon-wrapper"
>
    <span
        is="vl-icon"
        data-vl-icon=${e}
        data-vl-size=${t}
        ?data-vl-light=${a}
        ?data-vl-90deg=${o}
        ?data-vl-180deg=${r}
        ?data-vl-before=${s}
        data-cy="icon-before-element"
    ></span
    ><span>${l}</span>
</p>`;s.storyName="vl-icon - before",s.args={before:!0};let i=({icon:e,size:t,light:a,rotate:o,fullRotate:r,content:l,after:s})=>(0,n.qy)`<p
    is="vl-icon-wrapper"
>
    <span>${l}</span
    ><span
        is="vl-icon"
        data-vl-icon=${e}
        data-vl-size=${t}
        ?data-vl-light=${a}
        ?data-vl-90deg=${o}
        ?data-vl-180deg=${r}
        ?data-vl-after=${s}
        data-cy="icon-after-element"
    ></span>
</p>`;i.storyName="vl-icon - after",i.args={after:!0},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate\n}: typeof iconArgs) => html`<span\n    is="vl-icon"\n    data-vl-icon=${icon}\n    data-vl-size=${size}\n    ?data-vl-light=${light}\n    ?data-vl-90deg=${rotate}\n    ?data-vl-180deg=${fullRotate}\n    data-cy="icon-default"\n></span>`',...l.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate,\n  content,\n  before\n}: typeof iconArgs) => html`<p\n    is="vl-icon-wrapper"\n>\n    <span\n        is="vl-icon"\n        data-vl-icon=${icon}\n        data-vl-size=${size}\n        ?data-vl-light=${light}\n        ?data-vl-90deg=${rotate}\n        ?data-vl-180deg=${fullRotate}\n        ?data-vl-before=${before}\n        data-cy="icon-before-element"\n    ></span\n    ><span>${content}</span>\n</p>`',...s.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate,\n  content,\n  after\n}: typeof iconArgs) => html`<p\n    is="vl-icon-wrapper"\n>\n    <span>${content}</span\n    ><span\n        is="vl-icon"\n        data-vl-icon=${icon}\n        data-vl-size=${size}\n        ?data-vl-light=${light}\n        ?data-vl-90deg=${rotate}\n        ?data-vl-180deg=${fullRotate}\n        ?data-vl-after=${after}\n        data-cy="icon-after-element"\n    ></span>\n</p>`',...i.parameters?.docs?.source}}};let d=["iconDefault","iconBefore","iconAfter"]}}]);