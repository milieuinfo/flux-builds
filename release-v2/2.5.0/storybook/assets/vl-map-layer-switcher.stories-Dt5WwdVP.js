import{J as u,K as h,G as x,H as L,u as f,j as a,C as y,bd as M,S as $,x as p,s as v}from"./iframe-CflcmDUD.js";import"./vl-map-base-layer-BvMalALX.js";import"./vl-map-base-layer-grb-gray-Cuxf_f6a.js";import"./vl-map-layer-circle-style-BLRSLB0w.js";import"./vl-map-features-layer-D9owGkac.js";import"./vl-map-side-sheet-jaKdd5na.js";import"./vl-map-layer-switcher-BsO687C9.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-flPUvAVN.js";import"./vl-checkbox.component-D4zgMdoi.js";import"./vl-datepicker.component-CgELEzZR.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-DfsuPfBk.js";import"./vl-radio.component-Ra8Rh6YT.js";import"./vl-radio-group.component-BGDxo2T5.js";import"./vl-select.component-BMMIEVaD.js";import"./vl-select-rich.component-BsFMqeXH.js";import"./vl-textarea.component-C8hensF9.js";import"./vl-textarea-rich.component-Cwmhv0os.js";import"./vl-upload.component-Blk6WjMY.js";const m={...L,title:"Kaartlagen",layers:null},k={...x,title:{name:"title",description:"De titel bovenaan de layer-switcher.",table:{type:{summary:h.STRING},category:u.ATTRIBUTES,defaultValue:{summary:m.title}}},layers:{name:"layers",description:"Kan gebruikt worden om een subselectie van kaartlagen te tonen.<br>Geef hier de name attributen van de kaartlagen mee.<br>Kaartlagen worden niet langer automatisch toegevoegd of verwijderd in de layer-switcher.",table:{type:{summary:`${h.STRING}[]`},category:u.PROPERTIES,defaultValue:{summary:m.layers}}}},E=`import { VlMap } from '../../../vl-map';
import { VlMapLayer } from '../../layer/vl-map-layer';

/**
 * voegt een nieuwe map layer to aan de \`vl-map\`
 * @param layerSelector - geef de huidige selector mee voor de nieuwe layer die toegevoegd moet worden
 * @param vlMapSelector - geef de selector mee om het element te kunnen bepalen waarop de layer moet toegevoegd worden
 */
const addMapLayer = (layerSelector: string, vlMapSelector: string): void => {
    const newLayer = document.querySelector(layerSelector) as unknown as VlMapLayer;
    const vlMap = document.querySelector(vlMapSelector) as unknown as VlMap;
    vlMap.appendChild(newLayer);
};

/**
 * verwijdert een bestaande map layer uit zijn \`vl-map\`
 * @param layerSelector - geef de selector mee om de layer te kunnen bepalen die verwijderd moet worden
 */
const removeMapLayer = (layerSelector: string, vlMapSelector: string): void => {
    const layerToRemove = document.querySelector(layerSelector) as unknown as VlMapLayer;
    const vlMap = document.querySelector(vlMapSelector) as unknown as VlMap;
    vlMap.removeChild(layerToRemove);
};

export const dynamicLayerSwitcherImplementation = () => {
    const vlMapSelector = 'vl-map#map-dynamic-layers';

    const handleAddLayerForId = (id: string, event: Event) => {
        // voeg kaartlaag dynamisch toe
        addMapLayer(\`vl-map-features-layer#\${id}\`, vlMapSelector);

        const addButton = <HTMLButtonElement>event.target;
        // enable remove button nadat laag is toegevoegd
        (<HTMLButtonElement>addButton.nextElementSibling).disabled = false;
        // add button verwijderen
        addButton.remove();
    };

    const handleRemoveLayerForId = (id: string, event: Event) => {
        // verwijder kaartlaag uit vl-map component & uit de OpenLayers Overlay
        removeMapLayer(\`vl-map-features-layer#\${id}\`, vlMapSelector);

        // remove button verwijderen
        const removeButton = <HTMLButtonElement>event.target;
        removeButton.remove();
    };

    // exporteren functies die gebruikt worden in template
    return { handleAddLayerForId, handleRemoveLayerForId };
};

export default dynamicLayerSwitcherImplementation;
`;function g(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...f(),...r.components},{FluxMetaData:l}=e;return l||I("FluxMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-layer-switcher",children:"Map Layer Switcher"}),`
`,a.jsx(l,{id:"map-layer-switcher"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map-layer-switcher"})," component om kaartlagen zichtbaar of onzichtbaar te maken."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapLayerSwitcher } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-layer-switcher></vl-map-layer-switcher>
`})}),`
`,a.jsx(y,{of:o}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(M,{of:o}),`
`,a.jsx(e.h2,{id:"gebruik",children:"Gebruik"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:["het is belangrijk dat de kaartlagen zich binnen de ",a.jsx(e.a,{href:"?path=/docs/map-map--map-default",children:"vl-map"})," bevinden"]}),`
`,a.jsxs(e.li,{children:["het is belangrijk dat de ",a.jsx(e.code,{children:"vl-map-layer-switcher"})," zich binnen de ",a.jsx(e.a,{href:"?path=/docs/map-map--map-default",children:"vl-map"})," bevindt"]}),`
`,a.jsxs(e.li,{children:["het ",a.jsx(e.code,{children:"name"})," attribuut van de kaartlaag wordt gebruikt als label voor de checkbox"]}),`
`,a.jsxs(e.li,{children:["deze component wordt typisch in de ",a.jsx(e.a,{href:"?path=/docs/map-side-sheet--map-side-sheet-default",children:"vl-map-side-sheet"})," gebruikt"]}),`
`]}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"subselectie-van-kaartlagen",children:"Subselectie van kaartlagen"}),`
`,a.jsxs(e.p,{children:["Kan gebruikt worden om een subselectie van kaartlagen te tonen.",a.jsx("br",{}),`
Kaartlagen worden niet langer automatisch toegevoegd of verwijderd in de layer-switcher.`]}),`
`,a.jsx(y,{of:s}),`
`,a.jsx(e.h3,{id:"kaartlagen-met-resoluties",children:"Kaartlagen met resoluties"}),`
`,a.jsx(y,{of:c}),`
`,a.jsx(e.h3,{id:"dynamische-kaartlagen",children:"Dynamische kaartlagen"}),`
`,a.jsxs(e.p,{children:["Voorbeeld hoe dynamisch lagen toegevoegd en verwijderd kunnen worden.",a.jsx("br",{}),`
Zie onder de story voor het volledige code voorbeeld.`]}),`
`,a.jsx(y,{of:i}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"volledig code voorbeeld van bovenstaande implementatie"}),a.jsx($,{code:E,language:"ts",dark:!0})]}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-layer-switcher--default",rel:"nofollow",children:"Legacy Storybook - Map Layer Switcher"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapLayerSwitcher.html",rel:"nofollow",children:"Legacy Documentatie - Map Layer Switcher"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-layer-switcher.html",rel:"nofollow",children:"Legacy Demo - Map Layer Switcher"})})]})}function F(r={}){const{wrapper:e}={...f(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(g,{...r})}):g(r)}function I(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const K=()=>p`
        <vl-map-features-layer name="Kaartlaag zwart" .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[149055,199908]}}]}} id="zwart">
            <vl-map-layer-circle-style color="black"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer name="Kaartlaag geel" .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[154055,199908]}}]}} id="geel">
            <vl-map-layer-circle-style color="yellow"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer name="Kaartlaag rood" .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[159055,199908]}}]}} id="rood">
            <vl-map-layer-circle-style color="red"></vl-map-layer-circle-style>
        </vl-map-features-layer>
    `,P=(r,e,l)=>r.map(t=>p`
                <section id=${t}>
                    <button
                        id=${`add-${t}`}
                        @click=${n=>{e(t,n)}}
                    >
                        toevoegen ${t} laag
                    </button>
                    <button
                        id=${`remove-${t}`}
                        disabled
                        @click=${n=>{l(t,n)}}
                    >
                        verwijderen ${t} laag
                    </button>
                </section>
            `),R=(r,e)=>{const l=document.querySelector(r);document.querySelector(e).appendChild(l)},T=(r,e)=>{const l=document.querySelector(r);document.querySelector(e).removeChild(l)},G=()=>{const r="vl-map#map-dynamic-layers";return{handleAddLayerForId:(t,n)=>{R(`vl-map-features-layer#${t}`,r);const d=n.target;d.nextElementSibling.disabled=!1,d.remove()},handleRemoveLayerForId:(t,n)=>{T(`vl-map-features-layer#${t}`,r),n.target.remove()}}},re={id:"map-layer-switcher",title:"map/layer-switcher",tags:["autodocs"],args:m,argTypes:k,parameters:{docs:{page:F}}},w={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[149055,199908]}}]},b={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[154055,199908]}}]},S={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[159055,199908]}}]},j=v(m,({title:r,layers:e})=>p`
        <vl-map lambert2008>
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=${r} .layers=${e}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer name="Kaartlaag 1" .features=${w} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer name="Kaartlaag 2" .features=${b} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer name="Kaartlaag 3" .features=${S} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            </vl-map-wmts-layer>
            </vl-map-wfs-layer>
        </vl-map>
    `),o=j.bind({});o.storyName="vl-map-layer-switcher - default";const s=j.bind({});s.storyName="vl-map-layer-switcher - subselection";s.args={layers:["Kaartlaag 1","Kaartlaag 2"]};const c=v(m,({title:r,layers:e})=>p`
        <vl-map lambert2008>
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=${r} .layers=${e}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer
                name="Kaartlaag met resolutie 1"
                min-resolution="0"
                max-resolution="90"
                .features=${w}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                name="Kaartlaag met resolutie 2"
                min-resolution="90"
                max-resolution="180"
                .features=${b}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                name="Kaartlaag met resolutie 3"
                min-resolution="180"
                max-resolution="270"
                .features=${S}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);c.storyName="vl-map-layer-switcher - resolutions";const i=v(m,({title:r,layers:e})=>{const l=["zwart","geel","rood"],{handleAddLayerForId:t,handleRemoveLayerForId:n}=G();return p`
        ${P(l,t,n)} ${K()}
        <vl-map id="map-dynamic-layers">
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=${r} .layers=${e}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `});i.storyName="vl-map-layer-switcher - dynamic layers";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(mapLayerSwitcherArgs, ({
  title,
  layers
}) => html\`
        <vl-map lambert2008>
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=\${title} .layers=\${layers}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer name="Kaartlaag 1" .features=\${features1} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer name="Kaartlaag 2" .features=\${features2} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer name="Kaartlaag 3" .features=\${features3} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            </vl-map-wmts-layer>
            </vl-map-wfs-layer>
        </vl-map>
    \`)`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(mapLayerSwitcherArgs, ({
  title,
  layers
}) => html\`
        <vl-map lambert2008>
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=\${title} .layers=\${layers}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer name="Kaartlaag 1" .features=\${features1} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer name="Kaartlaag 2" .features=\${features2} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer name="Kaartlaag 3" .features=\${features3} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            </vl-map-wmts-layer>
            </vl-map-wfs-layer>
        </vl-map>
    \`)`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`story(mapLayerSwitcherArgs, ({
  title,
  layers
}) => html\`
        <vl-map lambert2008>
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=\${title} .layers=\${layers}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer
                name="Kaartlaag met resolutie 1"
                min-resolution="0"
                max-resolution="90"
                .features=\${features1}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                name="Kaartlaag met resolutie 2"
                min-resolution="90"
                max-resolution="180"
                .features=\${features2}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                name="Kaartlaag met resolutie 3"
                min-resolution="180"
                max-resolution="270"
                .features=\${features3}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(mapLayerSwitcherArgs, ({
  title,
  layers
}) => {
  const layerIds = ['zwart', 'geel', 'rood'];
  const {
    handleAddLayerForId,
    handleRemoveLayerForId
  } = dynamicLayerSwitcherImplementation();
  return html\`
        \${storyControlTemplates(layerIds, handleAddLayerForId, handleRemoveLayerForId)} \${mapLayersToAddOrRemove()}
        <vl-map id="map-dynamic-layers">
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=\${title} .layers=\${layers}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    \`;
})`,...i.parameters?.docs?.source}}};const te=["MapLayerSwitcherDefault","MapLayerSwitcherSubselection","MapLayerSwitcherResolutions","MapLayerSwitcherDynamic"];export{o as MapLayerSwitcherDefault,i as MapLayerSwitcherDynamic,c as MapLayerSwitcherResolutions,s as MapLayerSwitcherSubselection,te as __namedExportsOrder,re as default};
