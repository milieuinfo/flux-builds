import{J as t,K as e,G as o,H as l,x as c}from"./iframe-CflcmDUD.js";import{M as p}from"./vl-document.stories-doc-BK__dpKg.js";import"./preload-helper-D9Z9MdNV.js";const i={...l,bordered:!1,size:void 0,mediumSize:void 0,smallSize:void 0,extraSmallSize:void 0},u={...o,bordered:{name:"bordered",description:"Adds a border.",table:{type:{summary:e.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(i.bordered)}}},size:{name:"items-size",type:{name:e.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on large screens, typically desktop.",table:{type:{summary:e.NUMBER},category:t.ATTRIBUTES,defaultValue:{summary:"12 / number of data items"}}},mediumSize:{name:"items-medium-size",type:{name:e.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet.",table:{type:{summary:e.NUMBER},category:t.ATTRIBUTES,defaultValue:{summary:void 0}}},smallSize:{name:"items-small-size",type:{name:e.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.",table:{type:{summary:e.NUMBER},category:t.ATTRIBUTES,defaultValue:{summary:void 0}}},extraSmallSize:{name:"items-extra-small-size",type:{name:e.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.",table:{type:{summary:e.NUMBER},category:t.ATTRIBUTES,defaultValue:{summary:void 0}}}},z={id:"components-block-description-data-description-data",title:"Components - Block/description-data/description-data",tags:["autodocs"],args:i,argTypes:u,parameters:{docs:{page:p}}},a=({bordered:r,size:d,mediumSize:s,smallSize:n,extraSmallSize:m})=>c`
        <vl-description-data
            ?bordered=${r}
            items-size=${d}
            items-medium-size=${s}
            items-small-size=${n}
            items-extra-small-size=${m}
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
    `;a.storyName="vl-description-data - default";a.args={size:2,mediumSize:3,smallSize:6,extraSmallSize:12};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  bordered,
  size,
  mediumSize,
  smallSize,
  extraSmallSize
}: typeof descriptionDataArgs) => html\`
        <vl-description-data
            ?bordered=\${bordered}
            items-size=\${size}
            items-medium-size=\${mediumSize}
            items-small-size=\${smallSize}
            items-extra-small-size=\${extraSmallSize}
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
    \``,...a.parameters?.docs?.source}}};const S=["descriptionDataDefault"];export{S as __namedExportsOrder,z as default,a as descriptionDataDefault};
