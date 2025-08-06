"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4063],{"../../libs/components/src/block/template/stories/vl-template.stories.ts":(t,e,o)=>{o.r(e),o.d(e,{__namedExportsOrder:()=>b,default:()=>d,templateDefault:()=>p});var a=o("../../libs/common/src/index.ts"),l=o("../../node_modules/lit-html/lit-html.js"),s=o("../../libs/components/src/block/content-header/vl-content-header.component.ts");o("../../libs/components/src/block/template/vl-template.component.ts");var i=o("../../libs/components/src/atom/title/index.ts"),r=o("../../resources/utils-storybook/index.ts");let n={...r.D8,center:!1,stretch:!1},f={...r.RN,center:{name:"v-center",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content verticaal gecentreerd wordt.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},stretch:{name:"v-stretch",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content 100% zal innemen.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}};(0,a.gy)([s.U,i.I]);let d={id:"components-block-template",title:"Components - Block/template",tags:["autodocs"],args:n,argTypes:f},m=(0,l.qy)`
    <vl-content-header>
        <img
            slot="image"
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            srcset="
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80   400w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80   700w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80   800w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 1000w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80 1300w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80 1400w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80 1900w,
                https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w
            "
        />
        <a slot="context-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">flux-webcomponents</a>
        <a slot="title-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">${"1.2.3"}</a>
    </vl-content-header>
    <section data-cy="template-content" class="vl-grid">
        <div class="vl-content-block">
            <div id="grid" class="vl-grid vl-stacked-medium" slot="main">
                <vl-title type="h1" class="vl-column vl-column--12">vl-template</vl-title>
            </div>
        </div>
    </section>
`,c=(t,e)=>(0,l.qy)` <div class=${e?"vl-u-sticky-gf":""}>
    ${t}
</div>`,p=({center:t,stretch:e})=>c((0,l.qy)`
            <vl-template ?v-center=${t} ?v-stretch=${e}>
                <vl-header slot="header" identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb" development></vl-header>
                <div slot="main">${m}</div>
                <vl-footer slot="footer" identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b" development></vl-footer>
            </vl-template>
        `,!0);p.storyName="vl-template - default",p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'({\n  center,\n  stretch\n}: typeof templateArgs) => bodySimulation(html`\n            <vl-template ?v-center=${center} ?v-stretch=${stretch}>\n                <vl-header slot="header" identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb" development></vl-header>\n                <div slot="main">${mainHtml}</div>\n                <vl-footer slot="footer" identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b" development></vl-footer>\n            </vl-template>\n        `, true)',...p.parameters?.docs?.source}}};let b=["templateDefault"]}}]);