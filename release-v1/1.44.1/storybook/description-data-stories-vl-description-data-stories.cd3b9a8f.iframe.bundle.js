"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7519],{"../../libs/components/src/description-data/stories/vl-description-data.stories.ts":(a,e,t)=>{t.r(e),t.d(e,{__namedExportsOrder:()=>r,default:()=>s,descriptionDataDefault:()=>n});var i=t("../../node_modules/lit-html/lit-html.js");t("../../libs/components/src/description-data/vl-description-data-item.component.ts"),t("../../libs/components/src/description-data/vl-description-data.component.ts");var m=t("../../libs/common/storybook/src/index.ts");let d={...m.D8,bordered:!1,size:void 0,maxSize:void 0,mediumSize:void 0,mediumMaxSize:void 0,smallSize:void 0,smallMaxSize:void 0,extraSmallSize:void 0,extraSmallMaxSize:void 0},l={...(0,m.RN)(),bordered:{name:"data-vl-bordered",description:"Adds a border.",table:{type:{summary:m.QE.BOOLEAN},category:m.R6.ATTRIBUTES,defaultValue:{summary:d.bordered}}},size:{name:"data-vl-items-size",type:{name:m.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on large screens, typically desktop.",table:{type:{summary:m.QE.NUMBER},category:m.R6.ATTRIBUTES,defaultValue:{summary:"12 / number of data items"}}},maxSize:{name:"data-vl-items-max-size",type:{name:m.QE.NUMBER},description:"The maximum (denominator) that will be evaluated against on large screens, typically desktop, for each data item.",table:{type:{summary:m.QE.NUMBER},category:m.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},mediumSize:{name:"data-vl-items-medium-size",type:{name:m.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet.",table:{type:{summary:m.QE.NUMBER},category:m.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},mediumMaxSize:{name:"data-vl-items-medium-max-size",type:{name:m.QE.NUMBER},description:"The maximum (denominator) that will be evaluated against on medium screens, typically tablet, for each data item.",table:{type:{summary:m.QE.NUMBER},category:m.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},smallSize:{name:"data-vl-items-small-size",type:{name:m.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.",table:{type:{summary:m.QE.NUMBER},category:m.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},smallMaxSize:{name:"data-vl-items-small-max-size",type:{name:m.QE.NUMBER},description:"The maximum (denominator) that will be evaluated against on small screens, typically mobile, for each data item.",table:{type:{summary:m.QE.NUMBER},category:m.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},extraSmallSize:{name:"data-vl-items-extra-small-size",type:{name:m.QE.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.",table:{type:{summary:m.QE.NUMBER},category:m.R6.ATTRIBUTES,defaultValue:{summary:void 0}}},extraSmallMaxSize:{name:"data-vl-items-extra-small-max-size",type:{name:m.QE.NUMBER},description:"The maximum (denominator) against which to evaluate for very small screens, for each data item.",table:{type:{summary:m.QE.NUMBER},category:m.R6.ATTRIBUTES,defaultValue:{summary:void 0}}}},s={id:"components-description-data-description-data",title:"Components/description-data/description-data",tags:["autodocs"],args:d,argTypes:l},n=({bordered:a,size:e,maxSize:t,mediumSize:m,mediumMaxSize:d,smallSize:l,smallMaxSize:s,extraSmallSize:n,extraSmallMaxSize:r})=>(0,i.qy)`
        <vl-description-data
            ?data-vl-bordered=${a}
            data-vl-items-size=${e}
            data-vl-items-max-size=${t}
            data-vl-items-medium-size=${m}
            data-vl-items-medium-max-size=${d}
            data-vl-items-small-size=${l}
            data-vl-items-small-max-size=${s}
            data-vl-items-extra-small-size=${n}
            data-vl-items-extra-small-max-size=${r}
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
            ></vl-description-data-item>
        </vl-description-data>
    `;n.storyName="vl-description-data - default",n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'({\n  bordered,\n  size,\n  maxSize,\n  mediumSize,\n  mediumMaxSize,\n  smallSize,\n  smallMaxSize,\n  extraSmallSize,\n  extraSmallMaxSize\n}: typeof descriptionDataArgs) => html`\n        <vl-description-data\n            ?data-vl-bordered=${bordered}\n            data-vl-items-size=${size}\n            data-vl-items-max-size=${maxSize}\n            data-vl-items-medium-size=${mediumSize}\n            data-vl-items-medium-max-size=${mediumMaxSize}\n            data-vl-items-small-size=${smallSize}\n            data-vl-items-small-max-size=${smallMaxSize}\n            data-vl-items-extra-small-size=${extraSmallSize}\n            data-vl-items-extra-small-max-size=${extraSmallMaxSize}\n            data-cy="description-data"\n        >\n            <vl-description-data-item\n                data-vl-label="Uitgever"\n                data-vl-value="Kind en Gezin"\n                data-cy="description-data-item-1"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                data-vl-label="Publicatiedatum"\n                data-vl-value="Augustus 2018"\n                data-cy="description-data-item-2"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                data-vl-label="Publicatietype"\n                data-vl-value="Brochure"\n                data-cy="description-data-item-3"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                data-vl-label="Categorie"\n                data-vl-value="Kinderen en jongeren"\n                data-cy="description-data-item-4"\n            ></vl-description-data-item>\n        </vl-description-data>\n    `',...n.parameters?.docs?.source}}};let r=["descriptionDataDefault"]}}]);