"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5911],{"../../libs/elements/src/infotext/stories/vl-infotext.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{__namedExportsOrder:()=>o,default:()=>n,infotextDefault:()=>i,infotextWithComplexContent:()=>l,infotextWithLink:()=>d});var s=a("../../node_modules/lit-html/lit-html.js");a("../../libs/elements/src/infotext/vl-infotext.element.ts");let n={title:"Elements/infotext",tags:["autodocs"],args:{badge:!1},argTypes:{badge:{name:"data-vl-badge",type:{summary:"boolean"},description:"Attribute gets used to create a badge styling.",table:{defaultValue:{summary:"false"}}}},parameters:{controls:{hideNoControlsWarning:!0}}},i=({badge:e})=>(0,s.qy)`
    <div is="vl-infotext" ?data-vl-badge=${e} data-cy="infotext">
        <div>
            <div data-vl-value="">3200</div>
            <div data-vl-text="">Bezoekers per dag</div>
        </div>
    </div>
`;i.storyName="vl-infotext - default";let d=({badge:e})=>(0,s.qy)`
    <div is="vl-infotext" ?data-vl-badge=${e} data-cy="infotext-link">
        <a href="#">
            <div data-vl-value="">3200</div>
            <div data-vl-text="">Bezoekers per dag</div>
        </a>
    </div>
`;d.storyName="vl-infotext - with link";let l=()=>(0,s.qy)`
    <div is="vl-infotext" data-vl-badge data-cy="infotext-complex">
        <div>
            <div data-vl-value="">
                <span class="lengte-waarde" style="font-size: 1.25em;">150</span>
                <span class="eenheid-waarde" style="font-size: 1em;">cm</span>
            </div>
            <div data-vl-text="">
                <span class="lengte" style="font-size: 1.25em;">Lengte</span>
                <span class="eenheid" style="font-size: 1em;">(eenheid)</span>
            </div>
        </div>
    </div>
`;l.storyName="vl-infotext - with complex content",i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  badge\n}: InfotextArgs) => html`\n    <div is="vl-infotext" ?data-vl-badge=${badge} data-cy="infotext">\n        <div>\n            <div data-vl-value="">3200</div>\n            <div data-vl-text="">Bezoekers per dag</div>\n        </div>\n    </div>\n`',...i.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'({\n  badge\n}: InfotextArgs) => html`\n    <div is="vl-infotext" ?data-vl-badge=${badge} data-cy="infotext-link">\n        <a href="#">\n            <div data-vl-value="">3200</div>\n            <div data-vl-text="">Bezoekers per dag</div>\n        </a>\n    </div>\n`',...d.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'() => html`\n    <div is="vl-infotext" data-vl-badge data-cy="infotext-complex">\n        <div>\n            <div data-vl-value="">\n                <span class="lengte-waarde" style="font-size: 1.25em;">150</span>\n                <span class="eenheid-waarde" style="font-size: 1em;">cm</span>\n            </div>\n            <div data-vl-text="">\n                <span class="lengte" style="font-size: 1.25em;">Lengte</span>\n                <span class="eenheid" style="font-size: 1em;">(eenheid)</span>\n            </div>\n        </div>\n    </div>\n`',...l.parameters?.docs?.source}}};let o=["infotextDefault","infotextWithLink","infotextWithComplexContent"]}}]);