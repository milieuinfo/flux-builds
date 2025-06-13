"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2783],{"./libs/elements/src/link/stories/vl-link.stories.ts":(a,e,l)=>{l.r(e),l.d(e,{__namedExportsOrder:()=>s,default:()=>r,linkDefault:()=>o,linkWithIcon:()=>i});var n=l("./node_modules/lit-html/lit-html.js"),t=l("./libs/elements/src/link/stories/vl-link.stories-arg.ts");l("./libs/elements/src/link/vl-link.element.ts"),l("./libs/elements/src/icon/vl-icon.element.ts");let r={title:"Elements/link/link",tags:["autodocs"],args:{...t.Fr,...t.mK},argTypes:{...t.QK,...t.D}},o=({block:a,error:e,href:l,content:t,inline:r,small:o,large:i,bold:s})=>(0,n.dy)`<a
        is="vl-link"
        href=${l}
        ?data-vl-block=${a}
        ?data-vl-error=${e}
        ?data-vl-inline=${r}
        ?data-vl-small=${o}
        ?data-vl-large=${i}
        ?data-vl-bold=${s}
        data-cy="link-default"
        >${t}</a
    >`;o.storyName="vl-link - default";let i=({block:a,error:e,type:l,href:t,content:r,icon:o,inline:i,small:s,large:d,bold:c})=>"before"===l?(0,n.dy)`<a
            is="vl-link"
            href=${t}
            ?data-vl-block=${a}
            ?data-vl-error=${e}
            ?data-vl-inline=${i}
            ?data-vl-small=${s}
            ?data-vl-large=${d}
            ?data-vl-bold=${c}
            data-cy="link-with-icon"
            ><span is="vl-icon" data-vl-icon=${o} data-vl-before data-vl-link></span> ${r}</a
        >`:(0,n.dy)`<a
        is="vl-link"
        href=${t}
        ?data-vl-block=${a}
        ?data-vl-error=${e}
        ?data-vl-inline=${i}
        ?data-vl-small=${s}
        ?data-vl-large=${d}
        ?data-vl-bold=${c}
    >
        ${r}<span is="vl-icon" data-vl-icon=${o} data-vl-after data-vl-link></span
    ></a>`;i.storyName="vl-link - with icon",i.args=t.ni,i.argTypes=t.AU,o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  href,\n  content,\n  inline,\n  small,\n  large,\n  bold\n}: typeof linkBaseArgs & typeof linkDefaultArgs) => html`<a\n        is="vl-link"\n        href=${href}\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-inline=${inline}\n        ?data-vl-small=${small}\n        ?data-vl-large=${large}\n        ?data-vl-bold=${bold}\n        data-cy="link-default"\n        >${content}</a\n    >`',...o.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  type,\n  href,\n  content,\n  icon,\n  inline,\n  small,\n  large,\n  bold\n}: typeof linkBaseArgs & typeof linkDefaultArgs & typeof linkIconArgs) => {\n  if (type === \'before\') {\n    return html`<a\n            is="vl-link"\n            href=${href}\n            ?data-vl-block=${block}\n            ?data-vl-error=${error}\n            ?data-vl-inline=${inline}\n            ?data-vl-small=${small}\n            ?data-vl-large=${large}\n            ?data-vl-bold=${bold}\n            data-cy="link-with-icon"\n            ><span is="vl-icon" data-vl-icon=${icon} data-vl-before data-vl-link></span> ${content}</a\n        >`;\n  }\n  return html`<a\n        is="vl-link"\n        href=${href}\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-inline=${inline}\n        ?data-vl-small=${small}\n        ?data-vl-large=${large}\n        ?data-vl-bold=${bold}\n    >\n        ${content}<span is="vl-icon" data-vl-icon=${icon} data-vl-after data-vl-link></span\n    ></a>`;\n}',...i.parameters?.docs?.source}}};let s=["linkDefault","linkWithIcon"]},"./libs/elements/src/link/stories/vl-link.stories-arg.ts":(a,e,l)=>{l.d(e,{AU:()=>d,D:()=>s,Fr:()=>t,QK:()=>i,mK:()=>r,ni:()=>o});var n=l("./libs/common/storybook/src/index.ts");let t={block:!1,error:!1,content:"Terug naar overzicht",inline:!1,small:!1,large:!1,bold:!1},r={href:"#"},o={type:"before",icon:"arrow-right-fat"},i={block:{name:"data-vl-block",type:{summary:"boolean"},description:"A link that is displayed as a block element, will take the width of the parent container.",table:{category:n.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},error:{name:"data-vl-error",type:{summary:"boolean"},description:"Use the error link to emphasize the importance or the consequence of an action.",table:{category:n.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},inline:{name:"data-vl-inline",type:{summary:"boolean"},description:"A link that is displayed as an inline element, will follow the original flow of content.",table:{category:n.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},small:{name:"data-vl-small",type:{summary:"boolean"},description:"The smaller variant of a link.",table:{category:n.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},large:{name:"data-vl-large",type:{summary:"boolean"},description:"The larger variant of a link.",table:{category:n.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},bold:{name:"data-vl-bold",type:{summary:"boolean"},description:"The bold variant of a link.",table:{category:n.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},content:{name:"content (for demo purposes)",table:{defaultValue:{summary:"false"},category:n.aA.PROPERTIES}}},s={href:{name:"href (for demo purposes)",table:{category:n.aA.PROPERTIES}}},d={type:{name:"type (for demo purposes)",control:{type:"select",options:["before","after"]},table:{category:n.aA.PROPERTIES}},icon:{name:"icon (for demo purposes)",type:"select",options:["arrow-right-fat","external"],table:{category:n.aA.PROPERTIES,type:{summary:"string"}}}}}}]);