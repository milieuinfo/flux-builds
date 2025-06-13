"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6775],{"../../libs/elements/src/link/stories/vl-link.stories.ts":(a,l,e)=>{e.r(l),e.d(l,{__namedExportsOrder:()=>s,default:()=>r,linkDefault:()=>o,linkWithIcon:()=>i});var t=e("../../node_modules/lit-html/lit-html.js"),n=e("../../libs/elements/src/link/stories/vl-link.stories-arg.ts");e("../../libs/elements/src/link/vl-link.element.ts"),e("../../libs/elements/src/icon/vl-icon.element.ts");let r={title:"Elements/link/link",tags:["autodocs"],args:{...n.ly,...n.fY},argTypes:{...n.le,...n.nM}},o=({block:a,error:l,href:e,content:n,inline:r,small:o,large:i,bold:s})=>(0,t.qy)`<a
        is="vl-link"
        href=${e}
        ?data-vl-block=${a}
        ?data-vl-error=${l}
        ?data-vl-inline=${r}
        ?data-vl-small=${o}
        ?data-vl-large=${i}
        ?data-vl-bold=${s}
        data-cy="link-default"
        >${n}</a
    >`;o.storyName="vl-link - default";let i=({block:a,error:l,type:e,href:n,content:r,icon:o,inline:i,small:s,large:d,bold:c})=>"before"===e?(0,t.qy)`<a
            is="vl-link"
            href=${n}
            ?data-vl-block=${a}
            ?data-vl-error=${l}
            ?data-vl-inline=${i}
            ?data-vl-small=${s}
            ?data-vl-large=${d}
            ?data-vl-bold=${c}
            data-cy="link-with-icon"
            ><span is="vl-icon" data-vl-icon=${o} data-vl-before data-vl-link></span> ${r}</a
        >`:(0,t.qy)`<a
        is="vl-link"
        href=${n}
        ?data-vl-block=${a}
        ?data-vl-error=${l}
        ?data-vl-inline=${i}
        ?data-vl-small=${s}
        ?data-vl-large=${d}
        ?data-vl-bold=${c}
    >
        ${r}<span is="vl-icon" data-vl-icon=${o} data-vl-after data-vl-link></span
    ></a>`;i.storyName="vl-link - with icon",i.args=n.TT,i.argTypes=n.bR,o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  href,\n  content,\n  inline,\n  small,\n  large,\n  bold\n}: typeof linkBaseArgs & typeof linkDefaultArgs) => html`<a\n        is="vl-link"\n        href=${href}\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-inline=${inline}\n        ?data-vl-small=${small}\n        ?data-vl-large=${large}\n        ?data-vl-bold=${bold}\n        data-cy="link-default"\n        >${content}</a\n    >`',...o.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  type,\n  href,\n  content,\n  icon,\n  inline,\n  small,\n  large,\n  bold\n}: typeof linkBaseArgs & typeof linkDefaultArgs & typeof linkIconArgs) => {\n  if (type === \'before\') {\n    return html`<a\n            is="vl-link"\n            href=${href}\n            ?data-vl-block=${block}\n            ?data-vl-error=${error}\n            ?data-vl-inline=${inline}\n            ?data-vl-small=${small}\n            ?data-vl-large=${large}\n            ?data-vl-bold=${bold}\n            data-cy="link-with-icon"\n            ><span is="vl-icon" data-vl-icon=${icon} data-vl-before data-vl-link></span> ${content}</a\n        >`;\n  }\n  return html`<a\n        is="vl-link"\n        href=${href}\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-inline=${inline}\n        ?data-vl-small=${small}\n        ?data-vl-large=${large}\n        ?data-vl-bold=${bold}\n    >\n        ${content}<span is="vl-icon" data-vl-icon=${icon} data-vl-after data-vl-link></span\n    ></a>`;\n}',...i.parameters?.docs?.source}}};let s=["linkDefault","linkWithIcon"]},"../../libs/elements/src/link/stories/vl-link.stories-arg.ts":(a,l,e)=>{e.d(l,{TT:()=>o,bR:()=>d,fY:()=>r,le:()=>i,ly:()=>n,nM:()=>s});var t=e("../../libs/common/storybook/src/index.ts");let n={block:!1,error:!1,content:"Terug naar overzicht",inline:!1,small:!1,large:!1,bold:!1},r={href:"#"},o={type:"before",icon:"arrow-right-fat"},i={block:{name:"data-vl-block",description:"A link that is displayed as a block element, will take the width of the parent container.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:"false"}}},error:{name:"data-vl-error",description:"Use the error link to emphasize the importance or the consequence of an action.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:"false"}}},inline:{name:"data-vl-inline",description:"A link that is displayed as an inline element, will follow the original flow of content.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:"false"}}},small:{name:"data-vl-small",description:"The smaller variant of a link.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:"false"}}},large:{name:"data-vl-large",description:"The larger variant of a link.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:"false"}}},bold:{name:"data-vl-bold",description:"The bold variant of a link.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:"false"}}},content:{name:"content (for demo purposes)",table:{defaultValue:{summary:"false"},category:t.R6.PROPERTIES}}},s={href:{name:"href (for demo purposes)",table:{category:t.R6.PROPERTIES}}},d={type:{name:"type (for demo purposes)",control:{type:t.VH.SELECT},options:["before","after"],table:{category:t.R6.PROPERTIES,type:{summary:(0,t.uf)(["before","after"])}}},icon:{name:"icon (for demo purposes)",type:"select",control:{type:t.VH.SELECT},options:["arrow-right-fat","external"],table:{category:t.R6.PROPERTIES,type:{summary:(0,t.uf)(["arrow-right-fat","external"])}}}}}}]);