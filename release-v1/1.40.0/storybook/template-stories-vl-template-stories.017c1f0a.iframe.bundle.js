"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4063],{"../../libs/components/src/template/stories/vl-template.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{__namedExportsOrder:()=>b,default:()=>f,templateDefault:()=>p});var o=a("../../libs/common/utilities/src/index.ts"),l=a("../../libs/elements/src/index.ts"),i=a("../../node_modules/lit-html/lit-html.js"),s=a("../../libs/components/src/content-header/vl-content-header.component.ts");a("../../libs/components/src/template/vl-template.component.ts");var r=a("../../libs/common/storybook/src/index.ts");let n={...r.D8,center:!1,stretch:!1},d={...(0,r.RN)(),center:{name:"data-vl-v-center",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content verticaal gecentreerd wordt.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},stretch:{name:"data-vl-v-stretch",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content 100% zal innemen.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}};(0,o.gy)([s.U,l.dI,l.mq,l.zY]);let f={id:"components-template",title:"components/template",tags:["autodocs"],args:n,argTypes:d},m=(0,i.qy)`
    <vl-content-header>
        <img
            is="vl-image"
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
        <a slot="context-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">uig-webcomponents</a>
        <a slot="title-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">${"1.2.3"}</a>
    </vl-content-header>
    <section data-cy="template-content" is="vl-region">
        <div is="vl-layout">
            <div id="grid" is="vl-grid" is-stacked slot="main">
                <h1 is="vl-h1">vl-template</h1>
            </div>
        </div>
    </section>
`,c=(t,e)=>(0,i.qy)` <div
    is="vl-body"
    class=${e?"vl-u-sticky-gf":""}
>
    ${t}
</div>`,p=({center:t,stretch:e})=>c((0,i.qy)`
            <vl-template ?data-vl-v-center=${t} ?data-vl-v-stretch=${e}>
                <vl-header
                    slot="header"
                    data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                    data-vl-development
                ></vl-header>
                <div slot="main">${m}</div>
                <vl-footer
                    slot="footer"
                    data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                    data-vl-development
                ></vl-footer>
            </vl-template>
        `,!0);p.storyName="vl-template - default",p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'({\n  center,\n  stretch\n}: typeof templateArgs) => bodySimulation(html`\n            <vl-template ?data-vl-v-center=${center} ?data-vl-v-stretch=${stretch}>\n                <vl-header\n                    slot="header"\n                    data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"\n                    data-vl-development\n                ></vl-header>\n                <div slot="main">${mainHtml}</div>\n                <vl-footer\n                    slot="footer"\n                    data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"\n                    data-vl-development\n                ></vl-footer>\n            </vl-template>\n        `, true)',...p.parameters?.docs?.source}}};let b=["templateDefault"]}}]);