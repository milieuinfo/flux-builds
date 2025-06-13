"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7397],{"../../libs/elements/src/link-list/stories/vl-link-list.stories.ts":(l,i,e)=>{e.r(i),e.d(i,{__namedExportsOrder:()=>r,default:()=>t,linkListDefault:()=>n});var a=e("../../node_modules/lit-html/lit-html.js");e("../../libs/elements/src/link/vl-link.element.ts"),e("../../libs/elements/src/link-list/vl-link-list.element.ts");var s=e("../../libs/common/storybook/src/index.ts");let t={title:"Elements/link-list",tags:["autodocs"],args:{small:!1,inline:!1,bordered:!1},argTypes:{small:{name:"data-vl-small",description:"The smaller variant of a link-list.",table:{type:{summary:s.QE.BOOLEAN},defaultValue:{summary:"false"}}},inline:{name:"data-vl-inline",description:"A link-list that is displayed as an inline list, will follow the original flow of content.",table:{type:{summary:s.QE.BOOLEAN},defaultValue:{summary:"false"}}},bordered:{name:"data-vl-bordered",description:"A link-list that is displayed with a border.",table:{type:{summary:s.QE.BOOLEAN},defaultValue:{summary:"false"}}}}},n=({small:l,inline:i,bordered:e})=>(0,a.qy)`
    <ul
        is="vl-link-list"
        ?data-vl-small=${l}
        ?data-vl-inline=${i}
        ?data-vl-bordered=${e}
        data-cy="link-list"
    >
        <li is="vl-link-list-item">
            <a is="vl-link" href="#"> Ga naar index</a>
        </li>
        <li is="vl-link-list-item">
            <a is="vl-link" href="#"> Terug naar overzicht</a>
        </li>
    </ul>
`;n.storyName="vl-link-list - default",n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'({\n  small,\n  inline,\n  bordered\n}: typeof linkListArgs) => html`\n    <ul\n        is="vl-link-list"\n        ?data-vl-small=${small}\n        ?data-vl-inline=${inline}\n        ?data-vl-bordered=${bordered}\n        data-cy="link-list"\n    >\n        <li is="vl-link-list-item">\n            <a is="vl-link" href="#"> Ga naar index</a>\n        </li>\n        <li is="vl-link-list-item">\n            <a is="vl-link" href="#"> Terug naar overzicht</a>\n        </li>\n    </ul>\n`',...n.parameters?.docs?.source}}};let r=["linkListDefault"]}}]);