"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7519],{"../../libs/components/src/description-data/stories/vl-description-data.stories.ts":(e,a,t)=>{t.r(a),t.d(a,{__namedExportsOrder:()=>m,default:()=>r,descriptionDataDefault:()=>n});var i=t("../../node_modules/lit-html/lit-html.js");t("../../libs/components/src/description-data/vl-description-data-item.component.ts"),t("../../libs/components/src/description-data/vl-description-data.component.ts");var d=t("../../libs/common/storybook/src/index.ts");let l={...d.D8,bordered:!1,size:void 0,mediumSize:void 0,smallSize:void 0,extraSmallSize:void 0},s={...(0,d.RN)(),bordered:{name:"data-vl-bordered",description:"Adds a border.",table:{type:{summary:d.QE.BOOLEAN},category:d.R6.ATTRIBUTES,defaultValue:{summary:l.bordered}}},size:{name:"data-vl-items-size",type:{name:d.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on large screens, typically desktop.",table:{type:{summary:d.QE.NUMBER},category:d.R6.ATTRIBUTES,defaultValue:{summary:"12 / number of data items"}}},mediumSize:{name:"data-vl-items-medium-size",type:{name:d.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet.",table:{type:{summary:d.QE.NUMBER},category:d.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},smallSize:{name:"data-vl-items-small-size",type:{name:d.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.",table:{type:{summary:d.QE.NUMBER},category:d.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},extraSmallSize:{name:"data-vl-items-extra-small-size",type:{name:d.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.",table:{type:{summary:d.QE.NUMBER},category:d.R6.ATTRIBUTES,defaultValue:{summary:void 0}}}},r={id:"components-description-data-description-data",title:"Components/description-data/description-data",tags:["autodocs"],args:l,argTypes:s},n=({bordered:e,size:a,mediumSize:t,smallSize:d,extraSmallSize:l})=>(0,i.qy)`
        <vl-description-data
            ?data-vl-bordered=${e}
            data-vl-items-size=${a}
            data-vl-items-medium-size=${t}
            data-vl-items-small-size=${d}
            data-vl-items-extra-small-size=${l}
            data-cy="description-data"
        >
            <vl-description-data-item
                data-vl-label="Uitgever"
                data-vl-value="Kind en Gezin"
                data-cy="description-data-item-1"
            ></vl-description-data-item>
            <vl-description-data-item
                data-vl-label="Publicatiedatum"
                data-vl-value="Augustus 2018"
                data-cy="description-data-item-2"
            ></vl-description-data-item>
            <vl-description-data-item
                data-vl-label="Publicatietype"
                data-vl-value="Brochure"
                data-cy="description-data-item-3"
            ></vl-description-data-item>
            <vl-description-data-item
                data-vl-label="Categorie"
                data-vl-value="Kinderen en jongeren"
                data-cy="description-data-item-4"
            ></vl-description-data-item
        ></vl-description-data>
    `;n.storyName="vl-description-data - default",n.args={size:2,mediumSize:3,smallSize:6,extraSmallSize:12},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'({\n  bordered,\n  size,\n  mediumSize,\n  smallSize,\n  extraSmallSize\n}: typeof descriptionDataArgs) => html`\n        <vl-description-data\n            ?data-vl-bordered=${bordered}\n            data-vl-items-size=${size}\n            data-vl-items-medium-size=${mediumSize}\n            data-vl-items-small-size=${smallSize}\n            data-vl-items-extra-small-size=${extraSmallSize}\n            data-cy="description-data"\n        >\n            <vl-description-data-item\n                data-vl-label="Uitgever"\n                data-vl-value="Kind en Gezin"\n                data-cy="description-data-item-1"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                data-vl-label="Publicatiedatum"\n                data-vl-value="Augustus 2018"\n                data-cy="description-data-item-2"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                data-vl-label="Publicatietype"\n                data-vl-value="Brochure"\n                data-cy="description-data-item-3"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                data-vl-label="Categorie"\n                data-vl-value="Kinderen en jongeren"\n                data-cy="description-data-item-4"\n            ></vl-description-data-item\n        ></vl-description-data>\n    `',...n.parameters?.docs?.source}}};let m=["descriptionDataDefault"]}}]);