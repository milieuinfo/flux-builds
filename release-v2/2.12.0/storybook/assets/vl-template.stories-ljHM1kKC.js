import{Y as l,U as s,W as r,x as o,r as i,ba as n,P as f}from"./iframe-BJy2lIHs.js";import"./preload-helper-D9Z9MdNV.js";const d={...r,center:!1,stretch:!1},m={...s,center:{name:"v-center",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content verticaal gecentreerd wordt.",table:{type:{summary:"boolean"},category:l.ATTRIBUTES,defaultValue:{summary:"false"}}},stretch:{name:"v-stretch",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content 100% zal innemen.",table:{type:{summary:"boolean"},category:l.ATTRIBUTES,defaultValue:{summary:"false"}}}};i([n,f]);const w={id:"components-block-template",title:"Components - Block/template",tags:["autodocs"],args:d,argTypes:m},c="1.2.3",p=o`
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
        <a slot="title-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">${c}</a>
    </vl-content-header>
    <section data-cy="template-content" class="vl-grid">
        <div class="vl-content-block">
            <div id="grid" class="vl-grid vl-stacked-medium" slot="main">
                <vl-title type="h1" class="vl-column vl-column--12">vl-template</vl-title>
            </div>
        </div>
    </section>
`,b=(e,a)=>o` <div class=${"vl-u-sticky-gf"}>
    ${e}
</div>`,t=({center:e,stretch:a})=>b(o`
            <vl-template ?v-center=${e} ?v-stretch=${a}>
                <vl-header slot="header" identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb" development></vl-header>
                <div slot="main">${p}</div>
                <vl-footer slot="footer" identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b" development></vl-footer>
            </vl-template>
        `);t.storyName="vl-template - default";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  center,
  stretch
}: typeof templateArgs) => bodySimulation(html\`
            <vl-template ?v-center=\${center} ?v-stretch=\${stretch}>
                <vl-header slot="header" identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb" development></vl-header>
                <div slot="main">\${mainHtml}</div>
                <vl-footer slot="footer" identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b" development></vl-footer>
            </vl-template>
        \`, true)`,...t.parameters?.docs?.source}}};const v=["templateDefault"];export{v as __namedExportsOrder,w as default,t as templateDefault};
