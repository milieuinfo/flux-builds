import{Z as l,W as s,X as i,b as o,r,b7 as n,R as f}from"./iframe-ylVHDfb1.js";import{V as m}from"./vl-footer.component-DygZL_pE.js";import{V as d}from"./vl-header.component-BscuUqhg.js";import"./preload-helper-PPVm8Dsz.js";const p={...i,center:!1,stretch:!1},c={...s,center:{name:"v-center",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content verticaal gecentreerd wordt.",table:{type:{summary:"boolean"},category:l.ATTRIBUTES,defaultValue:{summary:"false"}}},stretch:{name:"v-stretch",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content 100% zal innemen.",table:{type:{summary:"boolean"},category:l.ATTRIBUTES,defaultValue:{summary:"false"}}}};r([n,f,d,m]);const H={id:"components-block-template",title:"Components - Block/template",tags:["autodocs"],args:p,argTypes:c,parameters:{docs:{story:{inline:!1,iframeHeight:600}},layout:"fullscreen"}},x="1.2.3",b=o`
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
        <a slot="context-link" href="https://flux.omgeving.vlaanderen.be/release/latest/storybook">flux-webcomponents</a>
        <a slot="title-link" href="https://flux.omgeving.vlaanderen.be/release/latest/storybook">${x}</a>
    </vl-content-header>
    <section data-cy="template-content" class="vl-grid">
        <div class="vl-content-block">
            <div id="grid" class="vl-grid vl-stacked-medium" slot="main">
                <vl-title type="h1" id="page-title" class="vl-column vl-column--12">vl-template</vl-title>
            </div>
        </div>
    </section>
`,u=(e,a)=>o` <div class=${"vl-u-sticky-gf"}>
    ${e}
</div>`,t=({center:e,stretch:a})=>u(o`
            <vl-template ?v-center=${e} ?v-stretch=${a}>
                <vl-header-next
                    slot="header"
                    identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                    skip-to-content-id="page-title"
                    development
                    simple
                ></vl-header-next>
                <div slot="main">${b}</div>
                <vl-footer-next
                    slot="footer"
                    identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                    development
                ></vl-footer-next>
            </vl-template>
        `);t.storyName="vl-template - default";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  center,
  stretch
}: typeof templateArgs) => bodySimulation(html\`
            <vl-template ?v-center=\${center} ?v-stretch=\${stretch}>
                <vl-header-next
                    slot="header"
                    identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                    skip-to-content-id="page-title"
                    development
                    simple
                ></vl-header-next>
                <div slot="main">\${mainHtml}</div>
                <vl-footer-next
                    slot="footer"
                    identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                    development
                ></vl-footer-next>
            </vl-template>
        \`, true)`,...t.parameters?.docs?.source}}};const y=["templateDefault"];export{y as __namedExportsOrder,H as default,t as templateDefault};
