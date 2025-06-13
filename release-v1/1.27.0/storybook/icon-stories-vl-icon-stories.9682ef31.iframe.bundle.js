"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[4493],{"./libs/elements/src/icon/stories/vl-icon.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{__namedExportsOrder:()=>d,default:()=>r,iconAfter:()=>s,iconBefore:()=>i,iconDefault:()=>l});var n=a("./node_modules/lit-html/lit-html.js");a("./libs/elements/src/icon/vl-icon.element.ts"),a("./libs/elements/src/icon/vl-icon-wrapper.element.ts");var o=a("./libs/common/storybook/src/index.ts");let r={title:"Elements/icon/icon",tags:["autodocs"],args:{icon:"calendar",size:"",light:!1,rotate:!1,fullRotate:!1,before:!1,after:!1,content:"Lorem ipsum dolor sit amet"},argTypes:{icon:{name:"data-vl-icon",control:{type:o.Hy.SELECT},options:["calendar","chat-help","key"],description:"Attribuut wordt gebruikt om aan te geven welk icoon getoond moet worden.",table:{defaultValue:{summary:""},type:{summary:(0,o.G_)(["calendar","chat-help","key",""])}}},size:{name:"data-vl-size",control:{type:o.Hy.SELECT},options:["small","large"],description:"Attribuut wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent.",table:{type:{summary:(0,o.G_)(["small","large",""])},defaultValue:{summary:""}}},light:{name:"data-vl-light",type:{summary:"boolean"},description:"Attribuut wordt gebruikt om het icoon een lichte kleur te geven.",table:{defaultValue:{summary:"false"}}},rotate:{name:"data-vl-90deg",type:{summary:"boolean"},description:"Attribuut wordt gebruikt om het icoon 90 graden te roteren.",table:{defaultValue:{summary:"false"}}},fullRotate:{name:"data-vl-180deg",type:{summary:"boolean"},description:"Attribuut wordt gebruikt om het icoon 180 graden te roteren.",table:{defaultValue:{summary:"false"}}},before:{name:"data-vl-before",type:{summary:"boolean"},description:"Attribuut wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",control:{disable:!0},table:{defaultValue:{summary:"false"}}},after:{name:"data-vl-after",type:{summary:"boolean"},description:"Attribuut wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",control:{disable:!0},table:{defaultValue:{summary:"false"}}},link:{name:"data-vl-link",type:{summary:"boolean"},description:"Attribuut moet gebruikt worden wanneer het icoon binnen een a tag gebruikt wordt zodat de stijl goed is.",control:{disable:!0},table:{defaultValue:{summary:"false"}}},content:{name:"content (for demo purposes)",type:{summary:"string"}}}},l=({icon:e,size:t,light:a,rotate:o,fullRotate:r})=>(0,n.dy)`<span
    is="vl-icon"
    data-vl-icon=${e}
    data-vl-size=${t}
    ?data-vl-light=${a}
    ?data-vl-90deg=${o}
    ?data-vl-180deg=${r}
    data-cy="icon-default"
></span>`;l.storyName="vl-icon - default",l.argTypes={content:{control:!1}};let i=({icon:e,size:t,light:a,rotate:o,fullRotate:r,content:l,before:i})=>(0,n.dy)`<p
    is="vl-icon-wrapper"
>
    <span
        is="vl-icon"
        data-vl-icon=${e}
        data-vl-size=${t}
        ?data-vl-light=${a}
        ?data-vl-90deg=${o}
        ?data-vl-180deg=${r}
        ?data-vl-before=${i}
        data-cy="icon-before-element"
    ></span
    ><span>${l}</span>
</p>`;i.storyName="vl-icon - before",i.args={before:!0};let s=({icon:e,size:t,light:a,rotate:o,fullRotate:r,content:l,after:i})=>(0,n.dy)`<p
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
        ?data-vl-after=${i}
        data-cy="icon-after-element"
    ></span>
</p>`;s.storyName="vl-icon - after",s.args={after:!0},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate\n}: typeof iconArgs) => html`<span\n    is="vl-icon"\n    data-vl-icon=${icon}\n    data-vl-size=${size}\n    ?data-vl-light=${light}\n    ?data-vl-90deg=${rotate}\n    ?data-vl-180deg=${fullRotate}\n    data-cy="icon-default"\n></span>`',...l.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate,\n  content,\n  before\n}: typeof iconArgs) => html`<p\n    is="vl-icon-wrapper"\n>\n    <span\n        is="vl-icon"\n        data-vl-icon=${icon}\n        data-vl-size=${size}\n        ?data-vl-light=${light}\n        ?data-vl-90deg=${rotate}\n        ?data-vl-180deg=${fullRotate}\n        ?data-vl-before=${before}\n        data-cy="icon-before-element"\n    ></span\n    ><span>${content}</span>\n</p>`',...i.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate,\n  content,\n  after\n}: typeof iconArgs) => html`<p\n    is="vl-icon-wrapper"\n>\n    <span>${content}</span\n    ><span\n        is="vl-icon"\n        data-vl-icon=${icon}\n        data-vl-size=${size}\n        ?data-vl-light=${light}\n        ?data-vl-90deg=${rotate}\n        ?data-vl-180deg=${fullRotate}\n        ?data-vl-after=${after}\n        data-cy="icon-after-element"\n    ></span>\n</p>`',...s.parameters?.docs?.source}}};let d=["iconDefault","iconBefore","iconAfter"]}}]);