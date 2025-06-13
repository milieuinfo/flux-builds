"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7723],{"../../libs/components/src/annotation/stories/vl-annotation.stories.ts":(a,t,n)=>{n.r(t),n.d(t,{__namedExportsOrder:()=>c,annotationDefault:()=>l,annotationSmallStyle:()=>i,annotationWithIcon:()=>r,default:()=>s});var o=n("../../node_modules/lit-html/lit-html.js");n("../../libs/components/src/annotation/vl-annotation.component.ts");var e=n("../../libs/common/storybook/src/index.ts");let s={id:"components-annotation",title:"Components/annotation",tags:["autodocs"],args:{...e.D8,content:"Inhoud",small:!1},argTypes:{...(0,e.RN)(),content:{name:"content",description:"Inhoud van de annotation.",table:{type:{summary:e.QE.STRING,required:!1},defaultValue:{summary:""},category:e.R6.SLOTS}},small:{name:"data-vl-small",description:"Zorgt ervoor zat de annotation klein getoond wordt.",table:{type:{summary:e.QE.BOOLEAN,required:!1},defaultValue:{summary:!1},category:e.R6.ATTRIBUTES}}}},l=(({content:a,small:t})=>(0,o.qy)`
    <vl-annotation ?data-vl-small=${t}>${a}</vl-annotation>
`).bind({});l.storyName="vl-annotation - default";let r=(({small:a})=>(0,o.qy)`
        <p is="vl-icon-wrapper">
            <span is="vl-icon" class="vl-icon--before vl-icon--light vl-vi" data-vl-icon="calendar"></span>
            <vl-annotation ?data-vl-small=${a}>
                Bevoegde instantie Werk en Sociale Economie • juli 2018 • Deel van collectie
            </vl-annotation>
        </p>
    `).bind({});r.storyName="vl-annotation - with icon",r.argTypes={content:{control:!1}};let i=(({small:a})=>(0,o.qy)`
        <h2 is="vl-h2">
            Districtchef
            <vl-annotation ?data-vl-small=${a}>(6 vacatures)</vl-annotation>
        </h2>
    `).bind({});i.storyName="vl-annotation - small",i.argTypes={content:{control:!1}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"annotationTemplate.bind({}) as any",...l.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"annotationTemplateWithIcon.bind({}) as any",...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"annotationTemplateWithSmall.bind({}) as any",...i.parameters?.docs?.source}}};let c=["annotationDefault","annotationWithIcon","annotationSmallStyle"]}}]);