"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7519],{"../../libs/components/src/block/description-data/stories/vl-description-data.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{__namedExportsOrder:()=>o,default:()=>n,descriptionDataDefault:()=>m});var i=a("../../node_modules/lit-html/lit-html.js");a("../../libs/components/src/block/description-data/vl-description-data-item.component.ts"),a("../../libs/components/src/block/description-data/vl-description-data.component.ts");var d=a("../../resources/utils-storybook/index.ts");let s={...d.D8,bordered:!1,size:void 0,mediumSize:void 0,smallSize:void 0,extraSmallSize:void 0},r={...d.RN,bordered:{name:"bordered",description:"Adds a border.",table:{type:{summary:d.QE.BOOLEAN},category:d.R6.ATTRIBUTES,defaultValue:{summary:s.bordered}}},size:{name:"items-size",type:{name:d.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on large screens, typically desktop.",table:{type:{summary:d.QE.NUMBER},category:d.R6.ATTRIBUTES,defaultValue:{summary:"12 / number of data items"}}},mediumSize:{name:"items-medium-size",type:{name:d.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet.",table:{type:{summary:d.QE.NUMBER},category:d.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},smallSize:{name:"items-small-size",type:{name:d.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.",table:{type:{summary:d.QE.NUMBER},category:d.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},extraSmallSize:{name:"items-extra-small-size",type:{name:d.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.",table:{type:{summary:d.QE.NUMBER},category:d.R6.ATTRIBUTES,defaultValue:{summary:void 0}}}},n={id:"components-block-description-data-description-data",title:"Components - Block/description-data/description-data",tags:["autodocs"],args:s,argTypes:r},m=({bordered:e,size:t,mediumSize:a,smallSize:d,extraSmallSize:s})=>(0,i.qy)`
        <vl-description-data
            ?bordered=${e}
            items-size=${t}
            items-medium-size=${a}
            items-small-size=${d}
            items-extra-small-size=${s}
            data-cy="description-data"
        >
            <vl-description-data-item
                label="Uitgever"
                value="Kind en Gezin"
                data-cy="description-data-item-1"
            ></vl-description-data-item>
            <vl-description-data-item
                label="Publicatiedatum"
                value="Augustus 2018"
                data-cy="description-data-item-2"
            ></vl-description-data-item>
            <vl-description-data-item
                label="Publicatietype"
                value="Brochure"
                data-cy="description-data-item-3"
            ></vl-description-data-item>
            <vl-description-data-item
                label="Categorie"
                value="Kinderen en jongeren"
                data-cy="description-data-item-4"
            ></vl-description-data-item
        ></vl-description-data>
    `;m.storyName="vl-description-data - default",m.args={size:2,mediumSize:3,smallSize:6,extraSmallSize:12},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({\n  bordered,\n  size,\n  mediumSize,\n  smallSize,\n  extraSmallSize\n}: typeof descriptionDataArgs) => html`\n        <vl-description-data\n            ?bordered=${bordered}\n            items-size=${size}\n            items-medium-size=${mediumSize}\n            items-small-size=${smallSize}\n            items-extra-small-size=${extraSmallSize}\n            data-cy="description-data"\n        >\n            <vl-description-data-item\n                label="Uitgever"\n                value="Kind en Gezin"\n                data-cy="description-data-item-1"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                label="Publicatiedatum"\n                value="Augustus 2018"\n                data-cy="description-data-item-2"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                label="Publicatietype"\n                value="Brochure"\n                data-cy="description-data-item-3"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                label="Categorie"\n                value="Kinderen en jongeren"\n                data-cy="description-data-item-4"\n            ></vl-description-data-item\n        ></vl-description-data>\n    `',...m.parameters?.docs?.source}}};let o=["descriptionDataDefault"]}}]);