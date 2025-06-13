"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5624],{"../../libs/elements/src/grid/stories/vl-grid-region.stories.ts":(e,a,t)=>{t.r(a),t.d(a,{__namedExportsOrder:()=>d,default:()=>n,gridRegionDefault:()=>s,gridRegionOverlap:()=>r});var o=t("../../node_modules/lit-html/lit-html.js");t("../../libs/elements/src/grid/vl-grid.element.ts");var l=t("../../libs/common/storybook/src/index.ts");let n={title:"Elements/grid/grid-region",tags:["autodocs"],args:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel voluptas voluptatibus?",alt:!1,noSpace:!1,noSpaceBottom:!1,noSpaceTop:!1,small:!1,medium:!1,bordered:!1,overlap:!0},argTypes:{content:{name:"content (for demo purposes)",table:{type:{summary:l.QE.STRING}}},alt:{name:"data-vl-alt",description:"Maakt de achtergrond lichtgrijs.",table:{type:{summary:l.QE.BOOLEAN},defaultValue:{summary:"false"},category:l.R6.ATTRIBUTES}},noSpace:{name:"data-vl-no-space",description:"Gebruik geen marges.",table:{type:{summary:l.QE.BOOLEAN},defaultValue:{summary:"false"},category:l.R6.ATTRIBUTES}},noSpaceBottom:{name:"data-vl-no-space-bottom",description:"Gebruik geen marges onderaan.",table:{type:{summary:l.QE.BOOLEAN},defaultValue:{summary:"false"},category:l.R6.ATTRIBUTES}},noSpaceTop:{name:"data-vl-no-space-top",description:"Gebruik geen marges bovenaan.",table:{type:{summary:l.QE.BOOLEAN},defaultValue:{summary:"false"},category:l.R6.ATTRIBUTES}},small:{name:"data-vl-small",description:"Gebruik kleinere marges.",table:{type:{summary:l.QE.BOOLEAN},defaultValue:{summary:"false"},category:l.R6.ATTRIBUTES}},medium:{name:"data-vl-medium",description:"Gebruik middelgrote marges.",table:{type:{summary:l.QE.BOOLEAN},defaultValue:{summary:"false"},category:l.R6.ATTRIBUTES}},bordered:{name:"data-vl-bordered (deprecated?)",description:"Teken een rand.",table:{type:{summary:l.QE.BOOLEAN},defaultValue:{summary:"false"},category:l.R6.ATTRIBUTES}},overlap:{name:"data-vl-overlap",description:"Region overlap",control:{disable:!0},table:{type:{summary:l.QE.BOOLEAN},defaultValue:{summary:"false"},category:l.R6.ATTRIBUTES}}}},s=({content:e,alt:a,noSpace:t,noSpaceBottom:l,noSpaceTop:n,small:s,medium:r,bordered:d})=>(0,o.qy)` <section
        is="vl-region"
        ?data-vl-alt=${a}
        ?data-vl-no-space=${t}
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
    </section>`;s.storyName="vl-grid - region default";let r=({content:e,alt:a,noSpace:t,noSpaceBottom:l,noSpaceTop:n,small:s,medium:r,bordered:d,overlap:i})=>(0,o.qy)` <section
        is="vl-region"
        ?data-vl-alt=${a}
        ?data-vl-no-space=${t}
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