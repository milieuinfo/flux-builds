import{Y as g,Z as f,U as M,W as T,u as w,j as a,C as v,bb as F,S as I,x as d,s as h}from"./iframe-BJy2lIHs.js";import"./vl-map-base-layer-Bhd069p5.js";import"./vl-map-base-layer-grb-gray-CiePMeON.js";import"./vl-map-layer-circle-style-DwQxOcyQ.js";import"./vl-map-features-layer-D_GVez3n.js";import"./vl-map-side-sheet-Clm7bsKh.js";import"./vl-map-layer-switcher-BYnW4BCg.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-BlWh4n98.js";import"./vl-checkbox.component-CaqQ6QEH.js";import"./vl-datepicker.component-CWL1bX9Y.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D0auMTxx.js";import"./vl-input-field-masked.component-CtLiafSG.js";import"./vl-radio.component-DybCu6Ag.js";import"./vl-radio-group.component-BFwurkS5.js";import"./vl-select.component-Dh8HWgqz.js";import"./vl-select-rich.component-h5mxQ5Uo.js";import"./vl-textarea.component-DlAkTIGX.js";import"./vl-textarea-rich.component-DzLPkTaW.js";import"./vl-upload.component-Mpazn3jo.js";import"./vl-upload-progress.component-BshNTd-7.js";const y={...T,title:"Kaartlagen",layers:null},C={...M,title:{name:"title",description:"De titel bovenaan de layer-switcher.",table:{type:{summary:f.STRING},category:g.ATTRIBUTES,defaultValue:{summary:y.title}}},layers:{name:"layers",description:"Kan gebruikt worden om een subselectie van kaartlagen te tonen.<br>Geef hier de name attributen van de kaartlagen mee.<br>Kaartlagen worden niet langer automatisch toegevoegd of verwijderd in de layer-switcher.",table:{type:{summary:`${f.STRING}[]`},category:g.PROPERTIES,defaultValue:{summary:y.layers}}}},E=`import { VlButtonComponent } from '@domg-wc/components/atom';
import { Layer } from 'ol/layer';
import { VlMap } from '../../../vl-map';
import { VlMapLayer } from '../../layer/vl-map-layer';

export const dynamicLayerSwitcherImplementation = () => {
    const vlMapSelector = 'vl-map#map-dynamic-layers';

    const handleAddLayerForId = (id: string) => {
        const newLayer = document.querySelector<VlMapLayer>(\`vl-map-features-layer#\${id}\`);
        const vlMap = document.querySelector<VlMap>(vlMapSelector);
        vlMap.appendChild(newLayer);

        const addButton = document.querySelector<VlButtonComponent>(\`#add-\${id}\`);
        const toggleButton = document.querySelector<VlButtonComponent>(\`#toggle-\${id}\`);
        const removeButton = document.querySelector<VlButtonComponent>(\`#remove-\${id}\`);

        toggleButton.hidden = false;
        removeButton.hidden = false;
        addButton.hidden = true;
    };

    const handleToggleLayerForId = (id: string) => {
        const layerToToggle = document.querySelector<VlMapLayer>(\`vl-map-features-layer#\${id}\`);
        const layer: Layer = layerToToggle.layer;
        layer.setVisible(!layer.getVisible());
    };

    const handleRemoveLayerForId = (id: string) => {
        const layerToRemove = document.querySelector<VlMapLayer>(\`vl-map-features-layer#\${id}\`);
        const vlMap = document.querySelector<VlMap>(vlMapSelector);
        vlMap.removeChild(layerToRemove);

        const removeButton = document.querySelector<VlButtonComponent>(\`#remove-\${id}\`);
        removeButton.parentElement.remove();
    };

    // exporteren functies die gebruikt worden in template
    return { handleAddLayerForId, handleToggleLayerForId, handleRemoveLayerForId };
};

export default dynamicLayerSwitcherImplementation;
`;function b(l){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...w(),...l.components},{FluxComponentMetaData:t}=e;return t||V("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-layer-switcher",children:"Map Layer Switcher"}),`
`,a.jsx(t,{id:"map-components-layer-switcher"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik de ",a.jsx(e.code,{children:"map-layer-switcher"})," component om kaartlagen zichtbaar of onzichtbaar te maken."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapLayerSwitcher } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-layer-switcher></vl-map-layer-switcher>
`})}),`
`,a.jsx(v,{of:o}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(F,{of:o}),`
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
`,a.jsx(v,{of:s}),`
`,a.jsx(e.h3,{id:"kaartlagen-met-resoluties",children:"Kaartlagen met resoluties"}),`
`,a.jsx(e.p,{children:"Gebruik de zoom controls om de verschillende kaartlagen te laten verschijnen."}),`
`,a.jsx(v,{of:m}),`
`,a.jsx(e.h3,{id:"dynamische-kaartlagen",children:"Dynamische kaartlagen"}),`
`,a.jsxs(e.p,{children:["Voorbeeld hoe dynamisch lagen toegevoegd en verwijderd kunnen worden.",a.jsx("br",{}),`
Zie onder de story voor het volledige code voorbeeld.`]}),`
`,a.jsx(v,{of:i}),`
`,a.jsxs("details",{children:[a.jsx("summary",{children:"volledig code voorbeeld van bovenstaande implementatie"}),a.jsx(I,{code:E,language:"ts",dark:!0})]}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-layer-switcher--default",rel:"nofollow",children:"Legacy Storybook - Map Layer Switcher"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapLayerSwitcher.html",rel:"nofollow",children:"Legacy Documentatie - Map Layer Switcher"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-layer-switcher.html",rel:"nofollow",children:"Legacy Demo - Map Layer Switcher"})})]})}function K(l={}){const{wrapper:e}={...w(),...l.components};return e?a.jsx(e,{...l,children:a.jsx(b,{...l})}):b(l)}function V(l,e){throw new Error("Expected component `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}const B=()=>d`
        <vl-map-features-layer name="Kaartlaag zwart" .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[149055,199908]}}]}} id="zwart">
            <vl-map-layer-circle-style color="black"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer name="Kaartlaag geel" .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[154055,199908]}}]}} id="geel">
            <vl-map-layer-circle-style color="yellow"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer name="Kaartlaag rood" .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[159055,199908]}}]}} id="rood">
            <vl-map-layer-circle-style color="red"></vl-map-layer-circle-style>
        </vl-map-features-layer>
    `,P=(l,e,t,u)=>l.map(r=>d`
                <section class="vl-group vl-margin--small" id=${r}>
                    <vl-button id=${`add-${r}`} @click=${()=>e(r)} icon="add"> Voeg laag ${r} toe </vl-button>
                    <vl-button
                        toggle
                        data-layer=${`Kaartlaag ${r}`}
                        on
                        id=${`toggle-${r}`}
                        @click=${()=>t(r)}
                        icon="view-add"
                        hidden
                    >
                        Toggle laag ${r} zichtbaarheid
                    </vl-button>
                    <vl-button id=${`remove-${r}`} @click=${()=>u(r)} error icon="bin" hidden>
                        Verwijder laag ${r}
                    </vl-button>
                </section>
            `),R=()=>{const l="vl-map#map-dynamic-layers";return{handleAddLayerForId:r=>{const c=document.querySelector(`vl-map-features-layer#${r}`);document.querySelector(l).appendChild(c);const p=document.querySelector(`#add-${r}`),L=document.querySelector(`#toggle-${r}`),k=document.querySelector(`#remove-${r}`);L.hidden=!1,k.hidden=!1,p.hidden=!0},handleToggleLayerForId:r=>{const n=document.querySelector(`vl-map-features-layer#${r}`).layer;n.setVisible(!n.getVisible())},handleRemoveLayerForId:r=>{const c=document.querySelector(`vl-map-features-layer#${r}`);document.querySelector(l).removeChild(c),document.querySelector(`#remove-${r}`).parentElement.remove()}}},oe={id:"map-layer-switcher",title:"map/layer-switcher",tags:["autodocs"],args:y,argTypes:C,parameters:{docs:{page:K}}},S={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[149055,199908]}}]},j={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[154055,199908]}}]},$={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[159055,199908]}}]},x=h(y,({title:l,layers:e})=>d`
        <vl-map lambert2008>
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=${l} .layers=${e}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer name="Kaartlaag 1" .features=${S} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer name="Kaartlaag 2" .features=${j} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer name="Kaartlaag 3" .features=${$} projection-code="EPSG:31370">
                <vl-map-layer-circle-style color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            </vl-map-wmts-layer>
            </vl-map-wfs-layer>
        </vl-map>
    `),o=x.bind({});o.storyName="vl-map-layer-switcher - default";const s=x.bind({});s.storyName="vl-map-layer-switcher - subselection";s.args={layers:["Kaartlaag 1","Kaartlaag 2"]};const m=h(y,({title:l,layers:e})=>d`
        <vl-map lambert2008>
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=${l} .layers=${e}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer
                name="Kaartlaag met resolutie 1"
                min-resolution="0"
                max-resolution="90"
                .features=${S}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                name="Kaartlaag met resolutie 2"
                min-resolution="90"
                max-resolution="180"
                .features=${j}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                name="Kaartlaag met resolutie 3"
                min-resolution="180"
                max-resolution="270"
                .features=${$}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);m.storyName="vl-map-layer-switcher - resolutions";const i=h(y,({title:l,layers:e})=>{const t=["zwart","geel","rood"],{handleAddLayerForId:u,handleToggleLayerForId:r,handleRemoveLayerForId:c}=R();return d`
        ${P(t,u,r,c)}
        ${B()}
        <vl-map
            id="map-dynamic-layers"
            @vl-change=${n=>{const p=document.querySelector(`vl-button[data-layer="${n.detail?.currentTarget?.label}"]`);p&&(p.on=n.detail.checked)}}
        >
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=${l} .layers=${e}></vl-map-layer-switcher>
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
    \`)`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`story(mapLayerSwitcherArgs, ({
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
    \`)`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`story(mapLayerSwitcherArgs, ({
  title,
  layers
}) => {
  const layerIds = ['zwart', 'geel', 'rood'];
  const {
    handleAddLayerForId,
    handleToggleLayerForId,
    handleRemoveLayerForId
  } = dynamicLayerSwitcherImplementation();
  return html\`
        \${storyControlTemplates(layerIds, handleAddLayerForId, handleToggleLayerForId, handleRemoveLayerForId)}
        \${mapLayersToAddOrRemove()}
        <vl-map
            id="map-dynamic-layers"
            @vl-change=\${e => {
    const toggleButton = document.querySelector<VlButtonComponent>(\`vl-button[data-layer="\${e.detail?.currentTarget?.label}"]\`);
    if (toggleButton) {
      toggleButton.on = e.detail.checked;
    }
  }}
        >
            <vl-map-side-sheet>
                <vl-map-layer-switcher title=\${title} .layers=\${layers}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    \`;
})`,...i.parameters?.docs?.source}}};const se=["MapLayerSwitcherDefault","MapLayerSwitcherSubselection","MapLayerSwitcherResolutions","MapLayerSwitcherDynamic"];export{o as MapLayerSwitcherDefault,i as MapLayerSwitcherDynamic,m as MapLayerSwitcherResolutions,s as MapLayerSwitcherSubselection,se as __namedExportsOrder,oe as default};
