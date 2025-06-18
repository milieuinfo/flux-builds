"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4825],{"../../libs/components/src/radio/stories/vl-radio.stories.ts":(a,e,l)=>{l.r(e),l.d(e,{RadioDefault:()=>n,RadioImage:()=>i,__namedExportsOrder:()=>m,default:()=>s});var d=l("../../libs/common/storybook/src/index.ts"),r=l("../../node_modules/lit-html/lit-html.js");l("../../libs/components/src/radio/vl-radio.component.ts");let t={...d.D8,block:!1,checked:!1,disabled:!1,error:!1,label:"",name:"",single:!1,value:""},o={...(0,d.RN)(),block:{name:"data-vl-block",description:"Beeldt de checkbox af als een block element.",table:{type:{summary:d.QE.BOOLEAN},category:d.R6.ATTRIBUTES,defaultValue:{summary:t.block}}},checked:{name:"data-vl-checked",description:"Vinkt de radio standaard aan.",table:{type:{summary:d.QE.BOOLEAN},category:d.R6.ATTRIBUTES,defaultValue:{summary:t.checked}}},disabled:{name:"data-vl-disabled",description:"Schakelt de radio uit.",table:{type:{summary:d.QE.BOOLEAN},category:d.R6.ATTRIBUTES,defaultValue:{summary:t.disabled}}},error:{name:"data-vl-error",description:"Beeldt de radio af in een error state.",table:{type:{summary:d.QE.BOOLEAN},category:d.R6.ATTRIBUTES,defaultValue:{summary:t.error}}},label:{name:"data-vl-label",description:"Het label van de radio.",table:{type:{summary:d.QE.STRING},category:d.R6.ATTRIBUTES,defaultValue:{summary:t.label}}},name:{name:"data-vl-name",description:"De naam van de radio.",table:{type:{summary:d.QE.STRING},category:d.R6.ATTRIBUTES,defaultValue:{summary:t.name}}},single:{name:"data-vl-single",description:"Beeldt de radio af zonder label.",table:{type:{summary:d.QE.BOOLEAN},category:d.R6.ATTRIBUTES,defaultValue:{summary:t.single}}},value:{name:"data-vl-value",description:"Bepaalt waarde van de radio.",table:{type:{summary:d.QE.STRING},category:d.R6.ATTRIBUTES,defaultValue:{summary:t.value}}}},s={id:"components-radio",title:"Components/radio",tags:["autodocs"],args:t,argTypes:o,parameters:{controls:{hideNoControlsWarning:!0}}},n=(0,d._7)(t,({block:a,checked:e,disabled:l,error:d,label:t,name:o,single:s,value:n})=>(0,r.qy)`
        <vl-radio
            ?data-vl-block=${a}
            ?data-vl-disabled=${l}
            ?data-vl-error=${d}
            data-vl-label=${t}
            data-vl-name=${o}
            data-vl-value=${n}
            ?data-vl-single=${s}
            ?data-vl-checked=${e}
        ></vl-radio>
    `);n.storyName="vl-radio - default",n.args={label:"Ja",name:"options",value:"Ja"};let i=(0,d._7)(t,({block:a,checked:e,disabled:l,error:d,label:t,name:o,single:s,value:n})=>(0,r.qy)`
        <vl-radio
            ?data-vl-block=${a}
            ?data-vl-disabled=${l}
            ?data-vl-error=${d}
            data-vl-label=${t}
            data-vl-name=${o}
            data-vl-value=${n}
            ?data-vl-single=${s}
            ?data-vl-checked=${e}
        >
            <img is="vl-image" sizes="100vw" src="cat.jpeg" alt="Example image" />
        </vl-radio>
    `);i.storyName="vl-radio - image",n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"story(radioArgs, ({\n  block,\n  checked,\n  disabled,\n  error,\n  label,\n  name,\n  single,\n  value\n}) => html`\n        <vl-radio\n            ?data-vl-block=${block}\n            ?data-vl-disabled=${disabled}\n            ?data-vl-error=${error}\n            data-vl-label=${label}\n            data-vl-name=${name}\n            data-vl-value=${value}\n            ?data-vl-single=${single}\n            ?data-vl-checked=${checked}\n        ></vl-radio>\n    `)",...n.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'story(radioArgs, ({\n  block,\n  checked,\n  disabled,\n  error,\n  label,\n  name,\n  single,\n  value\n}) => html`\n        <vl-radio\n            ?data-vl-block=${block}\n            ?data-vl-disabled=${disabled}\n            ?data-vl-error=${error}\n            data-vl-label=${label}\n            data-vl-name=${name}\n            data-vl-value=${value}\n            ?data-vl-single=${single}\n            ?data-vl-checked=${checked}\n        >\n            <img is="vl-image" sizes="100vw" src="cat.jpeg" alt="Example image" />\n        </vl-radio>\n    `)',...i.parameters?.docs?.source}}};let m=["RadioDefault","RadioImage"]}}]);