import{Z as i,_ as e,W as c,X as p,x as d}from"./iframe-BgD7f6Cn.js";import"./preload-helper-D9Z9MdNV.js";const s={...p,bordered:!1,size:void 0,mediumSize:void 0,smallSize:void 0,extraSmallSize:void 0},u={...c,bordered:{name:"bordered",description:"Voegt een rand toe aan de description-data.",table:{type:{summary:e.BOOLEAN},category:i.ATTRIBUTES,defaultValue:{summary:String(s.bordered)}}},size:{name:"items-size",type:{name:e.NUMBER},description:"Kolombreedte (teller van het 12-kolomsysteem) voor elk item op grote schermen, typisch desktop.",table:{type:{summary:e.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:"12 / aantal items"}}},mediumSize:{name:"items-medium-size",type:{name:e.NUMBER},description:"Kolombreedte (teller van het 12-kolomsysteem) voor elk item op middelgrote schermen, typisch tablet.",table:{type:{summary:e.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:void 0}}},smallSize:{name:"items-small-size",type:{name:e.NUMBER},description:"Kolombreedte (teller van het 12-kolomsysteem) voor elk item op kleine schermen, typisch mobiel.",table:{type:{summary:e.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:void 0}}},extraSmallSize:{name:"items-extra-small-size",type:{name:e.NUMBER},description:"Kolombreedte (teller van het 12-kolomsysteem) voor elk item op zeer kleine schermen.",table:{type:{summary:e.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:void 0}}}},y={id:"components-block-description-data-description-data",title:"Components - Block/description-data/description-data",tags:["autodocs"],args:s,argTypes:u},t=({bordered:l,size:r,mediumSize:n,smallSize:m,extraSmallSize:o})=>d`
        <vl-description-data
            ?bordered=${l}
            items-size=${r}
            items-medium-size=${n}
            items-small-size=${m}
            items-extra-small-size=${o}
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
    `;t.storyName="vl-description-data - default";t.args={size:2,mediumSize:3,smallSize:6,extraSmallSize:12};const a=()=>d`
    <vl-description-data items-size="3" items-small-size="6" items-extra-small-size="12">
        <vl-description-data-item label="Uitgever" value="Kind en Gezin"></vl-description-data-item>
        <vl-description-data-item label="Publicatiedatum" value="Augustus 2018"></vl-description-data-item>
        <vl-description-data-item label="Publicatietype" value="Brochure"></vl-description-data-item>
        <vl-description-data-item label="Categorie" value="Kinderen en jongeren"></vl-description-data-item>
        <vl-description-data-item
            items-size="12"
            label="Omschrijving"
            value="Een uitgebreide beschrijving van de publicatie die de volledige breedte inneemt."
        ></vl-description-data-item>
    </vl-description-data>
`;a.storyName="vl-description-data - with full-width item";t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
    \``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => html\`
    <vl-description-data items-size="3" items-small-size="6" items-extra-small-size="12">
        <vl-description-data-item label="Uitgever" value="Kind en Gezin"></vl-description-data-item>
        <vl-description-data-item label="Publicatiedatum" value="Augustus 2018"></vl-description-data-item>
        <vl-description-data-item label="Publicatietype" value="Brochure"></vl-description-data-item>
        <vl-description-data-item label="Categorie" value="Kinderen en jongeren"></vl-description-data-item>
        <vl-description-data-item
            items-size="12"
            label="Omschrijving"
            value="Een uitgebreide beschrijving van de publicatie die de volledige breedte inneemt."
        ></vl-description-data-item>
    </vl-description-data>
\``,...a.parameters?.docs?.source}}};const z=["descriptionDataDefault","descriptionDataWithSpanner"];export{z as __namedExportsOrder,y as default,t as descriptionDataDefault,a as descriptionDataWithSpanner};
