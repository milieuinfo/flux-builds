"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[5097],{"./libs/elements/src/grid/stories/vl-grid-region.stories.ts":(e,a,o)=>{o.r(a),o.d(a,{__namedExportsOrder:()=>d,default:()=>n,gridRegionDefault:()=>s,gridRegionOverlap:()=>r});var t=o("./node_modules/lit-html/lit-html.js");o("./libs/elements/src/grid/vl-grid.element.ts");var l=o("./libs/common/storybook/src/index.ts");let n={title:"Elements/grid/grid-region",tags:["autodocs"],args:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?",alt:!1,noSpace:!1,noSpaceBottom:!1,noSpaceTop:!1,small:!1,medium:!1,bordered:!1,overlap:!0},argTypes:{content:{name:"content (for demo purposes)",type:{summary:"string"}},alt:{name:"data-vl-alt",type:{summary:"boolean"},description:"Maakt de achtergrond lichtgrijs.",table:{defaultValue:{summary:"false"},category:l.aA.ATTRIBUTES}},noSpace:{name:"data-vl-no-space",type:{summary:"boolean"},description:"Gebruik geen marges.",table:{defaultValue:{summary:"false"},category:l.aA.ATTRIBUTES}},noSpaceBottom:{name:"data-vl-no-space-bottom",type:{summary:"boolean"},description:"Gebruik geen marges onderaan.",table:{defaultValue:{summary:"false"},category:l.aA.ATTRIBUTES}},noSpaceTop:{name:"data-vl-no-space-top",type:{summary:"boolean"},description:"Gebruik geen marges bovenaan.",table:{defaultValue:{summary:"false"},category:l.aA.ATTRIBUTES}},small:{name:"data-vl-small",type:{summary:"boolean"},description:"Gebruik kleinere marges.",table:{defaultValue:{summary:"false"},category:l.aA.ATTRIBUTES}},medium:{name:"data-vl-medium",type:{summary:"boolean"},description:"Gebruik middelgrote marges.",table:{defaultValue:{summary:"false"},category:l.aA.ATTRIBUTES}},bordered:{name:"data-vl-bordered (deprecated?)",type:{summary:"boolean"},description:"Teken een rand.",table:{defaultValue:{summary:"false"},category:l.aA.ATTRIBUTES}},overlap:{name:"data-vl-overlap",type:{summary:"boolean"},description:"Region overlap",control:{disable:!0},table:{defaultValue:{summary:"false"},category:l.aA.ATTRIBUTES}}}},s=({content:e,alt:a,noSpace:o,noSpaceBottom:l,noSpaceTop:n,small:s,medium:r,bordered:d})=>(0,t.dy)` <section
        is="vl-region"
        ?data-vl-alt=${a}
        ?data-vl-no-space=${o}
        ?data-vl-no-space-bottom=${l}
        ?data-vl-no-space-top=${n}
        ?data-vl-small=${s}
        ?data-vl-medium=${r}
        ?data-vl-bordered=${d}
    >
        <div is="vl-layout" class="vl-layout">
            <div is="vl-grid">
                <div is="vl-column">${e}</div>
            </div>
        </div>
    </section>`;s.storyName="vl-grid - region default";let r=({content:e,alt:a,noSpace:o,noSpaceBottom:l,noSpaceTop:n,small:s,medium:r,bordered:d,overlap:i})=>(0,t.dy)` <section
        is="vl-region"
        ?data-vl-alt=${a}
        ?data-vl-no-space=${o}
        ?data-vl-no-space-bottom=${l}
        ?data-vl-no-space-top=${n}
        ?data-vl-small=${s}
        ?data-vl-medium=${r}
        ?data-vl-bordered=${d}
        ?data-vl-overlap=${i}
    >
        <div is="vl-layout" class="vl-layout">
            <div is="vl-grid">
                <div is="vl-column">${e}</div>
            </div>
        </div>
    </section>`;r.storyName="vl-grid - region overlap",r.argTypes={overlap:{control:{disable:!1}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'({\n  content,\n  alt,\n  noSpace,\n  noSpaceBottom,\n  noSpaceTop,\n  small,\n  medium,\n  bordered\n}: typeof gridRegionArgs) => html` <section\n        is="vl-region"\n        ?data-vl-alt=${alt}\n        ?data-vl-no-space=${noSpace}\n        ?data-vl-no-space-bottom=${noSpaceBottom}\n        ?data-vl-no-space-top=${noSpaceTop}\n        ?data-vl-small=${small}\n        ?data-vl-medium=${medium}\n        ?data-vl-bordered=${bordered}\n    >\n        <div is="vl-layout" class="vl-layout">\n            <div is="vl-grid">\n                <div is="vl-column">${content}</div>\n            </div>\n        </div>\n    </section>`',...s.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'({\n  content,\n  alt,\n  noSpace,\n  noSpaceBottom,\n  noSpaceTop,\n  small,\n  medium,\n  bordered,\n  overlap\n}: typeof gridRegionArgs) => html` <section\n        is="vl-region"\n        ?data-vl-alt=${alt}\n        ?data-vl-no-space=${noSpace}\n        ?data-vl-no-space-bottom=${noSpaceBottom}\n        ?data-vl-no-space-top=${noSpaceTop}\n        ?data-vl-small=${small}\n        ?data-vl-medium=${medium}\n        ?data-vl-bordered=${bordered}\n        ?data-vl-overlap=${overlap}\n    >\n        <div is="vl-layout" class="vl-layout">\n            <div is="vl-grid">\n                <div is="vl-column">${content}</div>\n            </div>\n        </div>\n    </section>`',...r.parameters?.docs?.source}}};let d=["gridRegionDefault","gridRegionOverlap"]}}]);