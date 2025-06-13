"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[4493],{"./libs/elements/src/icon/stories/vl-icon.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{__namedExportsOrder:()=>s,default:()=>o,iconAfter:()=>i,iconBefore:()=>l,iconDefault:()=>r});var n=a("./node_modules/lit-html/lit-html.js");a("./libs/elements/src/icon/vl-icon.element.ts"),a("./libs/elements/src/icon/vl-icon-wrapper.element.ts");let o={title:"Elements/icon/icon",tags:["autodocs"],args:{icon:"calendar",size:"",light:!1,rotate:!1,fullRotate:!1,before:!1,after:!1,content:"Lorem ipsum dolor sit amet"},argTypes:{icon:{name:"data-vl-icon",control:{type:"select",options:["calendar","chat-help","key"]},description:"Attribuut wordt gebruikt om aan te geven welk icoon getoond moet worden.",table:{defaultValue:{summary:""}}},size:{name:"data-vl-size",control:{type:"select",options:["small","large"]},description:"Attribuut wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent.",table:{type:{summary:"string"},defaultValue:{summary:""}}},light:{name:"data-vl-light",type:{summary:"boolean"},description:"Attribuut wordt gebruikt om het icoon een lichte kleur te geven.",table:{defaultValue:{summary:"false"}}},rotate:{name:"data-vl-90deg",type:{summary:"boolean"},description:"Attribuut wordt gebruikt om het icoon 90 graden te roteren.",table:{defaultValue:{summary:"false"}}},fullRotate:{name:"data-vl-180deg",type:{summary:"boolean"},description:"Attribuut wordt gebruikt om het icoon 180 graden te roteren.",table:{defaultValue:{summary:"false"}}},before:{name:"data-vl-before",type:{summary:"boolean"},description:"Attribuut wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",control:{disable:!0},table:{defaultValue:{summary:"false"}}},after:{name:"data-vl-after",type:{summary:"boolean"},description:"Attribuut wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",control:{disable:!0},table:{defaultValue:{summary:"false"}}},link:{name:"data-vl-link",type:{summary:"boolean"},description:"Attribuut moet gebruikt worden wanneer het icoon binnen een a tag gebruikt wordt zodat de stijl goed is.",control:{disable:!0},table:{defaultValue:{summary:"false"}}},content:{name:"content (for demo purposes)",type:{summary:"string"}}}},r=({icon:e,size:t,light:a,rotate:o,fullRotate:r})=>(0,n.dy)`<span
    is="vl-icon"
    data-vl-icon=${e}
    data-vl-size=${t}
    ?data-vl-light=${a}
    ?data-vl-90deg=${o}
    ?data-vl-180deg=${r}
    data-cy="icon-default"
></span>`;r.storyName="vl-icon - default",r.argTypes={content:{control:!1}};let l=({icon:e,size:t,light:a,rotate:o,fullRotate:r,content:l,before:i})=>(0,n.dy)`<p
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
</p>`;l.storyName="vl-icon - before",l.args={before:!0};let i=({icon:e,size:t,light:a,rotate:o,fullRotate:r,content:l,after:i})=>(0,n.dy)`<p
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
</p>`;i.storyName="vl-icon - after",i.args={after:!0},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate\n}: typeof iconArgs) => html`<span\n    is="vl-icon"\n    data-vl-icon=${icon}\n    data-vl-size=${size}\n    ?data-vl-light=${light}\n    ?data-vl-90deg=${rotate}\n    ?data-vl-180deg=${fullRotate}\n    data-cy="icon-default"\n></span>`',...r.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate,\n  content,\n  before\n}: typeof iconArgs) => html`<p\n    is="vl-icon-wrapper"\n>\n    <span\n        is="vl-icon"\n        data-vl-icon=${icon}\n        data-vl-size=${size}\n        ?data-vl-light=${light}\n        ?data-vl-90deg=${rotate}\n        ?data-vl-180deg=${fullRotate}\n        ?data-vl-before=${before}\n        data-cy="icon-before-element"\n    ></span\n    ><span>${content}</span>\n</p>`',...l.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate,\n  content,\n  after\n}: typeof iconArgs) => html`<p\n    is="vl-icon-wrapper"\n>\n    <span>${content}</span\n    ><span\n        is="vl-icon"\n        data-vl-icon=${icon}\n        data-vl-size=${size}\n        ?data-vl-light=${light}\n        ?data-vl-90deg=${rotate}\n        ?data-vl-180deg=${fullRotate}\n        ?data-vl-after=${after}\n        data-cy="icon-after-element"\n    ></span>\n</p>`',...i.parameters?.docs?.source}}};let s=["iconDefault","iconBefore","iconAfter"]}}]);