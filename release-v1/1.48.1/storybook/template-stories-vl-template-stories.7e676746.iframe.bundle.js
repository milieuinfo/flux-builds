"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4063],{"../../libs/components/src/template/stories/vl-template.stories.ts":(t,e,o)=>{o.r(e),o.d(e,{__namedExportsOrder:()=>h,default:()=>d,templateDefault:()=>f});var l=o("../../libs/common/utilities/src/index.ts"),s=o("../../libs/components/src/next/title/index.ts"),a=o("../../node_modules/lit-html/lit-html.js"),n=o("../../libs/components/src/content-header/vl-content-header.component.ts");o("../../libs/components/src/template/vl-template.component.ts");var i=o("../../libs/common/storybook/src/index.ts");let r={...i.D8,center:!1,stretch:!1},c={...(0,i.RN)(),center:{name:"data-vl-v-center",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content verticaal gecentreerd wordt.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},stretch:{name:"data-vl-v-stretch",description:"Attribuut wordt gebruikt om ervoor te zorgen dat de content 100% zal innemen.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}};(0,l.gy)([n.U,s.I]);let d={id:"components-template",title:"components/template",tags:["autodocs"],args:r,argTypes:c},m=(0,a.qy)`
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
        <a slot="context-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">uig-webcomponents</a>
        <a slot="title-link" href="https://webcomponenten.omgeving.vlaanderen.be/storybook/">${"1.2.3"}</a>
    </vl-content-header>
    <section data-cy="template-content" class="vl-grid-next">
        <div class="vl-content-block-next">
            <div id="grid" class="vl-grid-next vl-stacked-next-medium" slot="main">
                <vl-title-next type="h1" class="vl-column-next vl-column-next--12">vl-template</vl-title-next>
            </div>
        </div>
    </section>
`,p=(t,e)=>(0,a.qy)` <div class=${e?"vl-u-sticky-gf":""}>
    ${t}
</div>`,f=({center:t,stretch:e})=>p((0,a.qy)`
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
        `,!0);f.storyName="vl-template - default",f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'({\n  center,\n  stretch\n}: typeof templateArgs) => bodySimulation(html`\n            <vl-template ?data-vl-v-center=${center} ?data-vl-v-stretch=${stretch}>\n                <vl-header\n                    slot="header"\n                    data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"\n                    data-vl-development\n                ></vl-header>\n                <div slot="main">${mainHtml}</div>\n                <vl-footer\n                    slot="footer"\n                    data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"\n                    data-vl-development\n                ></vl-footer>\n            </vl-template>\n        `, true)',...f.parameters?.docs?.source}}};let h=["templateDefault"]},"../../libs/components/src/next/title/index.ts":(t,e,o)=>{o.d(e,{I:()=>l.I});var l=o("../../libs/components/src/next/title/vl-title.component.ts")},"../../libs/components/src/next/title/vl-title.component.ts":(t,e,o)=>{o.d(e,{I:()=>c});var l=o("../../libs/common/utilities/src/index.ts");o("../../node_modules/@lit/reactive-element/reactive-element.js");var s=o("../../node_modules/lit-html/lit-html.js");o("../../node_modules/lit-element/lit-element.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a=(t,e,o)=>{for(var l of e)if(l[0]===t)return(0,l[1])();return null==o?void 0:o()},n=o("../../node_modules/lit/directives/class-map.js"),i=o("../../libs/components/src/next/title/vl-title.css.ts"),r=o("../../libs/components/src/next/title/vl-title.defaults.ts");class c extends l.jW{static get styles(){return[i.Z]}static get properties(){return{type:{type:String},underline:{type:Boolean},noSpaceBottom:{type:Boolean,attribute:"no-space-bottom"},alt:{type:Boolean}}}render(){let t={underline:this.underline,"no-space-bottom":this.noSpaceBottom,alt:this.alt};return(0,s.qy)`
            ${a(this.type,[["h1",()=>(0,s.qy)` <h1 class=${(0,n.H)(t)} part="h1">
                            <slot></slot>
                        </h1>`],["h2",()=>(0,s.qy)` <h2 class=${(0,n.H)(t)} part="h2">
                            <slot></slot>
                        </h2>`],["h3",()=>(0,s.qy)` <h3 class=${(0,n.H)(t)} part="h3">
                            <slot></slot>
                        </h3>`],["h4",()=>(0,s.qy)` <h4 class=${(0,n.H)(t)} part="h4">
                            <slot></slot>
                        </h4>`],["h5",()=>(0,s.qy)` <h5 class=${(0,n.H)(t)} part="h5">
                            <slot></slot>
                        </h5>`],["h6",()=>(0,s.qy)` <h6 class=${(0,n.H)(t)} part="h6">
                            <slot></slot>
                        </h6>`]],()=>(0,s.qy)` <h1 class=${(0,n.H)(t)} part="h1">
                    <slot></slot>
                </h1>`)}
        `}constructor(...t){super(...t),this.type=r.D.type,this.underline=r.D.underline,this.noSpaceBottom=r.D.noSpaceBottom,this.alt=r.D.alt}}c=function(t,e,o,l){var s,a=arguments.length,n=a<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,l);else for(var i=t.length-1;i>=0;i--)(s=t[i])&&(n=(a<3?s(n):a>3?s(e,o,n):s(e,o))||n);return a>3&&n&&Object.defineProperty(e,o,n),n}([(0,l.M1)("vl-title-next")],c)},"../../libs/components/src/next/title/vl-title.defaults.ts":(t,e,o)=>{o.d(e,{D:()=>l});let l={type:"h1",underline:!1,alt:!1,noSpaceBottom:!1}}}]);