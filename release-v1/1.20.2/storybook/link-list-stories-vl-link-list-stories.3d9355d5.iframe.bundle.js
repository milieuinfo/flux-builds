"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8708],{"./libs/elements/src/link-list/stories/vl-link-list.stories.ts":(l,e,i)=>{i.r(e),i.d(e,{default:()=>s,linkListDefault:()=>n});var a=i("./node_modules/lit-html/lit-html.js");i("./libs/elements/src/link/vl-link.element.ts"),i("./libs/elements/src/link-list/vl-link-list.element.ts");let s={title:"Elements/link-list",tags:["autodocs"],args:{small:!1,inline:!1,bordered:!1},argTypes:{small:{name:"data-vl-small",type:{summary:"boolean"},description:"The smaller variant of a link-list.",table:{defaultValue:{summary:"false"}}},inline:{name:"data-vl-inline",type:{summary:"boolean"},description:"A link-list that is displayed as an inline list, will follow the original flow of content.",table:{defaultValue:{summary:"false"}}},bordered:{name:"data-vl-bordered",type:{summary:"boolean"},description:"A link-list that is displayed with a border.",table:{defaultValue:{summary:"false"}}}}},n=({small:l,inline:e,bordered:i})=>(0,a.dy)`
    <ul
        is="vl-link-list"
        ?data-vl-small=${l}
        ?data-vl-inline=${e}
        ?data-vl-bordered=${i}
        data-cy="link-list"
    >
        <li is="vl-link-list-item">
            <a is="vl-link" href="#"> Ga naar index</a>
        </li>
        <li is="vl-link-list-item">
            <a is="vl-link" href="#"> Terug naar overzicht</a>
        </li>
    </ul>
`;n.storyName="vl-link-list - default",n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'({\n  small,\n  inline,\n  bordered\n}: typeof linkListArgs) => html`\n    <ul\n        is="vl-link-list"\n        ?data-vl-small=${small}\n        ?data-vl-inline=${inline}\n        ?data-vl-bordered=${bordered}\n        data-cy="link-list"\n    >\n        <li is="vl-link-list-item">\n            <a is="vl-link" href="#"> Ga naar index</a>\n        </li>\n        <li is="vl-link-list-item">\n            <a is="vl-link" href="#"> Terug naar overzicht</a>\n        </li>\n    </ul>\n`',...n.parameters?.docs?.source}}}}}]);