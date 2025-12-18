import{K as t,L as e,H as l,I as o,x as c}from"./iframe-BQb9mjVp.js";import"./preload-helper-D9Z9MdNV.js";const i={...o,bordered:!1,size:void 0,mediumSize:void 0,smallSize:void 0,extraSmallSize:void 0},p={...l,bordered:{name:"bordered",description:"Adds a border.",table:{type:{summary:e.BOOLEAN},category:t.ATTRIBUTES,defaultValue:{summary:String(i.bordered)}}},size:{name:"items-size",type:{name:e.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on large screens, typically desktop.",table:{type:{summary:e.NUMBER},category:t.ATTRIBUTES,defaultValue:{summary:"12 / number of data items"}}},mediumSize:{name:"items-medium-size",type:{name:e.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet.",table:{type:{summary:e.NUMBER},category:t.ATTRIBUTES,defaultValue:{summary:void 0}}},smallSize:{name:"items-small-size",type:{name:e.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.",table:{type:{summary:e.NUMBER},category:t.ATTRIBUTES,defaultValue:{summary:void 0}}},extraSmallSize:{name:"items-extra-small-size",type:{name:e.NUMBER},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.",table:{type:{summary:e.NUMBER},category:t.ATTRIBUTES,defaultValue:{summary:void 0}}}},v={id:"components-block-description-data-description-data",title:"Components - Block/description-data/description-data",tags:["autodocs"],args:i,argTypes:p},a=({bordered:d,size:r,mediumSize:s,smallSize:n,extraSmallSize:m})=>c`
        <vl-description-data
            ?bordered=${d}
            items-size=${r}
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
    \``,...a.parameters?.docs?.source}}};const b=["descriptionDataDefault"];export{b as __namedExportsOrder,v as default,a as descriptionDataDefault};
