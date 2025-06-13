"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2741],{"./libs/elements/src/link/stories/vl-link.stories-arg.ts":(a,t,e)=>{e.d(t,{AU:()=>d,D:()=>i,Fr:()=>n,QK:()=>s,mK:()=>o,ni:()=>r});var l=e("./libs/common/storybook/src/index.ts");let n={block:!1,error:!1,content:"Terug naar overzicht",inline:!1,small:!1,large:!1,bold:!1},o={href:"#"},r={type:"before",icon:"arrow-right-fat"},s={block:{name:"data-vl-block",type:{summary:"boolean"},description:"A link that is displayed as a block element, will take the width of the parent container.",table:{category:l.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},error:{name:"data-vl-error",type:{summary:"boolean"},description:"Use the error link to emphasize the importance or the consequence of an action.",table:{category:l.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},inline:{name:"data-vl-inline",type:{summary:"boolean"},description:"A link that is displayed as an inline element, will follow the original flow of content.",table:{category:l.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},small:{name:"data-vl-small",type:{summary:"boolean"},description:"The smaller variant of a link.",table:{category:l.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},large:{name:"data-vl-large",type:{summary:"boolean"},description:"The larger variant of a link.",table:{category:l.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},bold:{name:"data-vl-bold",type:{summary:"boolean"},description:"The bold variant of a link.",table:{category:l.aA.ATTRIBUTES,defaultValue:{summary:"false"}}},content:{name:"content (for demo purposes)",table:{defaultValue:{summary:"false"},category:l.aA.PROPERTIES}}},i={href:{name:"href (for demo purposes)",table:{category:l.aA.PROPERTIES}}},d={type:{name:"type (for demo purposes)",control:{type:"select",options:["before","after"]},table:{category:l.aA.PROPERTIES}},icon:{name:"icon (for demo purposes)",type:"select",options:["arrow-right-fat","external"],table:{category:l.aA.PROPERTIES,type:{summary:"string"}}}}},"./libs/elements/src/link/stories/vl-button-link.stories.ts":(a,t,e)=>{e.r(t),e.d(t,{buttonLinkDefault:()=>r,buttonLinkWithIcon:()=>s,default:()=>o});var l=e("./node_modules/lit-html/lit-html.js"),n=e("./libs/elements/src/link/stories/vl-link.stories-arg.ts");e("./libs/elements/src/link/vl-button-link.element.ts"),e("./libs/elements/src/icon/vl-icon.element.ts");let o={title:"Elements/link/button-link",tags:["autodocs"],args:n.Fr,argTypes:n.QK},r=({block:a,error:t,content:e,inline:n,small:o,large:r,bold:s})=>(0,l.dy)` <button
        is="vl-button-link"
        ?data-vl-block=${a}
        ?data-vl-error=${t}
        ?data-vl-inline=${n}
        ?data-vl-small=${o}
        ?data-vl-large=${r}
        ?data-vl-bold=${s}
        data-cy="button-link-default"
    >
        ${e}
    </button>`;r.storyName="vl-button-link - default";let s=({block:a,error:t,content:e,type:n,icon:o,inline:r,small:s,large:i,bold:d})=>"before"===n?(0,l.dy)` <button
            is="vl-button-link"
            ?data-vl-block=${a}
            ?data-vl-error=${t}
            ?data-vl-inline=${r}
            ?data-vl-small=${s}
            ?data-vl-large=${i}
            ?data-vl-bold=${d}
            data-cy="button-link-with-icon"
        >
            <span is="vl-icon" data-vl-icon=${o} data-vl-before></span>${e}
        </button>`:(0,l.dy)` <button
        is="vl-button-link"
        ?data-vl-block=${a}
        ?data-vl-error=${t}
        ?data-vl-inline=${r}
        ?data-vl-small=${s}
        ?data-vl-large=${i}
        ?data-vl-bold=${d}
    >
        ${e}<span is="vl-icon" data-vl-icon=${o} data-vl-after></span>
    </button>`;s.storyName="vl-button-link - with icon",s.args=n.ni,s.argTypes=n.AU,r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  content,\n  inline,\n  small,\n  large,\n  bold\n}: typeof linkBaseArgs) => html` <button\n        is="vl-button-link"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-inline=${inline}\n        ?data-vl-small=${small}\n        ?data-vl-large=${large}\n        ?data-vl-bold=${bold}\n        data-cy="button-link-default"\n    >\n        ${content}\n    </button>`',...r.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'({\n  block,\n  error,\n  content,\n  type,\n  icon,\n  inline,\n  small,\n  large,\n  bold\n}: typeof linkBaseArgs & typeof linkIconArgs) => {\n  if (type === \'before\') {\n    return html` <button\n            is="vl-button-link"\n            ?data-vl-block=${block}\n            ?data-vl-error=${error}\n            ?data-vl-inline=${inline}\n            ?data-vl-small=${small}\n            ?data-vl-large=${large}\n            ?data-vl-bold=${bold}\n            data-cy="button-link-with-icon"\n        >\n            <span is="vl-icon" data-vl-icon=${icon} data-vl-before></span>${content}\n        </button>`;\n  }\n  return html` <button\n        is="vl-button-link"\n        ?data-vl-block=${block}\n        ?data-vl-error=${error}\n        ?data-vl-inline=${inline}\n        ?data-vl-small=${small}\n        ?data-vl-large=${large}\n        ?data-vl-bold=${bold}\n    >\n        ${content}<span is="vl-icon" data-vl-icon=${icon} data-vl-after></span>\n    </button>`;\n}',...s.parameters?.docs?.source}}}}}]);