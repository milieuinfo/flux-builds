import{Z as r,_ as n,W as g,X as b,u as p,j as e,C as o,b8 as j,x as v}from"./iframe-CY-ZM549.js";import"./preload-helper-D9Z9MdNV.js";const u={...b,bordered:!1,size:void 0,mediumSize:void 0,smallSize:void 0,extraSmallSize:void 0},x={...g,bordered:{name:"bordered",description:"Voegt een rand toe aan de description-data.",table:{type:{summary:n.BOOLEAN},category:r.ATTRIBUTES,defaultValue:{summary:String(u.bordered)}}},size:{name:"items-size",type:{name:n.NUMBER},description:"Kolombreedte (teller van het 12-kolomsysteem) voor elk item op grote schermen, typisch desktop.",table:{type:{summary:n.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:"12 / aantal items"}}},mediumSize:{name:"items-medium-size",type:{name:n.NUMBER},description:"Kolombreedte (teller van het 12-kolomsysteem) voor elk item op middelgrote schermen, typisch tablet.",table:{type:{summary:n.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:void 0}}},smallSize:{name:"items-small-size",type:{name:n.NUMBER},description:"Kolombreedte (teller van het 12-kolomsysteem) voor elk item op kleine schermen, typisch mobiel.",table:{type:{summary:n.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:void 0}}},extraSmallSize:{name:"items-extra-small-size",type:{name:n.NUMBER},description:"Kolombreedte (teller van het 12-kolomsysteem) voor elk item op zeer kleine schermen.",table:{type:{summary:n.NUMBER},category:r.ATTRIBUTES,defaultValue:{summary:void 0}}}};function c(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...t.components},{FluxAlert:l,FluxComponentMetaData:s}=i;return l||m("FluxAlert"),s||m("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"description-data",children:"Description Data"}),`
`,e.jsx(s,{id:"components-block-description-data-description-data"}),`
`,e.jsx(i.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(i.p,{children:["Gebruik de ",e.jsx(i.code,{children:"description-data"}),` component om label / waarde-paren als een samenhangende lijst weer te geven, bijvoorbeeld
de metadata van een publicatie. De paren worden als een `,e.jsx(i.code,{children:"<dl>"})," met ",e.jsx(i.code,{children:"<dt>"})," en ",e.jsx(i.code,{children:"<dd>"}),` gerenderd, zodat een schermlezer
elk paar als term en definitie aankondigt.`]}),`
`,e.jsx(i.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`import { VlDescriptionData, VlDescriptionDataItem } from '@domg-wc/components/block';
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<vl-description-data>
    <vl-description-data-item label="Uitgever" value="Kind en Gezin"></vl-description-data-item>
</vl-description-data>
`})}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(i.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(j,{of:a}),`
`,e.jsx(i.h2,{id:"enkel-description-data-item-als-kind",children:"Enkel description-data-item als kind"}),`
`,e.jsxs(i.p,{children:["De ",e.jsx(i.code,{children:"vl-description-data"})," mag als directe kinderen ",e.jsx(i.strong,{children:"uitsluitend"})," ",e.jsx(i.code,{children:"vl-description-data-item"})," componenten bevatten."]}),`
`,e.jsx(l,{type:"warning",children:`
  Elk ander element tussen de items wordt genegeerd: het wordt niet in de beschrijvingslijst opgenomen en is ook
  niet zichtbaar op de pagina. Tijdens ontwikkeling verschijnt hiervoor een waarschuwing in de console.
`}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"correct-gebruik",children:"Correct gebruik"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<vl-description-data>
    <vl-description-data-item label="Uitgever" value="Kind en Gezin"></vl-description-data-item>
    <vl-description-data-item label="Publicatiedatum" value="Augustus 2018"></vl-description-data-item>
</vl-description-data>
`})}),`
`,e.jsx(i.h3,{id:"foutief-gebruik",children:"Foutief gebruik"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<vl-description-data>
    <vl-description-data-item label="Uitgever" value="Kind en Gezin"></vl-description-data-item>
    <!-- wordt genegeerd: niet gerenderd en niet zichtbaar -->
    <div>Extra informatie</div>
    <!-- wordt genegeerd: enkel directe kinderen tellen mee -->
    <div>
        <vl-description-data-item label="Publicatiedatum" value="Augustus 2018"></vl-description-data-item>
    </div>
</vl-description-data>
`})}),`
`,e.jsx(i.h2,{id:"waarom-deze-beperking",children:"Waarom deze beperking"}),`
`,e.jsxs(i.p,{children:["Een ",e.jsx(i.code,{children:"<dl>"})," is enkel een geldige beschrijvingslijst als de ",e.jsx(i.code,{children:"<dt>"})," en ",e.jsx(i.code,{children:"<dd>"})," er rechtstreeks (of via een wrapper-",e.jsx(i.code,{children:"div"}),`)
onder hangen. Als elk item zijn eigen `,e.jsx(i.code,{children:"<dt>"}),"/",e.jsx(i.code,{children:"<dd>"}),` rendert, dan staat de item-host er in de flattened-tree tussen en
valt de term / definitie-relatie voor schermlezers weg. Daarom leest de `,e.jsx(i.code,{children:"vl-description-data"})," het ",e.jsx(i.code,{children:"label"})," en ",e.jsx(i.code,{children:"value"}),` van
elk item en rendert ze zelf in 1 `,e.jsx(i.code,{children:"<dl>"}),". Alles wat geen ",e.jsx(i.code,{children:"vl-description-data-item"}),` is, past niet in dat model en
wordt overgeslagen.`]}),`
`,e.jsx(i.p,{children:"Gevolgen om rekening mee te houden:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["De inhoud van de ",e.jsx(i.code,{children:"label"}),"- en ",e.jsx(i.code,{children:"value"}),"-slots wordt ",e.jsx(i.strong,{children:"gekloond"})," naar de shadow DOM van de ",e.jsx(i.code,{children:"vl-description-data"}),`.
Statische opmaak (bv. een `,e.jsx(i.code,{children:'<a href="...">'}),`) werkt daardoor gewoon, maar event-listeners op die inhoud niet: ze
overleven het klonen niet.`]}),`
`,e.jsxs(i.li,{children:["Een ",e.jsx(i.code,{children:"vl-description-data-item"})," dat je los gebruikt (buiten een ",e.jsx(i.code,{children:"vl-description-data"}),`) rendert wel zijn eigen
label en waarde, maar dan zonder de `,e.jsx(i.code,{children:"<dl>"}),"-structuur."]}),`
`,e.jsxs(i.li,{children:["Wijzigingen in de light DOM (items toevoegen, verwijderen, of een ",e.jsx(i.code,{children:"label"}),"/",e.jsx(i.code,{children:"value"}),` aanpassen) worden
automatisch doorgevoerd.`]}),`
`]}),`
`,e.jsx(i.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(i.h3,{id:"item-over-de-volledige-breedte",children:"Item over de volledige breedte"}),`
`,e.jsxs(i.p,{children:["Met het ",e.jsx(i.code,{children:"items-size"})," attribuut op een individueel item overschrijf je de kolombreedte die de ",e.jsx(i.code,{children:"vl-description-data"}),`
oplegt. Zo laat je bijvoorbeeld 1 item de volledige breedte innemen.`]}),`
`,e.jsx(o,{of:d})]})}function z(t={}){const{wrapper:i}={...p(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(c,{...t})}):c(t)}function m(t,i){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={id:"components-block-description-data-description-data",title:"Components - Block/description-data/description-data",tags:["autodocs"],args:u,argTypes:x,parameters:{docs:{page:z}}},a=({bordered:t,size:i,mediumSize:l,smallSize:s,extraSmallSize:h})=>v`
        <vl-description-data
            ?bordered=${t}
            items-size=${i}
            items-medium-size=${l}
            items-small-size=${s}
            items-extra-small-size=${h}
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
    `;a.storyName="vl-description-data - default";a.args={size:2,mediumSize:3,smallSize:6,extraSmallSize:12};const d=()=>v`
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
`;d.storyName="vl-description-data - with full-width item";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
    \``,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...d.parameters?.docs?.source}}};const S=["descriptionDataDefault","descriptionDataWithSpanner"];export{S as __namedExportsOrder,f as default,a as descriptionDataDefault,d as descriptionDataWithSpanner};
