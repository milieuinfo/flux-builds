import{w as b,x as f,u as g,j as t,C as m,S as y,b8 as j,s as h}from"./iframe-BgD7f6Cn.js";import"./vl-map-base-layer-CJ9Hplnc.js";import"./vl-map-base-layer-grb-gray--tROFEyH.js";import"./vl-map-layer-circle-style-cxhA_2Al.js";import"./vl-map-layer-switcher-Qv5J9TSI.js";import"./vl-map-features-layer-DuBfgdcT.js";import"./vl-map-side-sheet-ENHjjdkK.js";import{V as x,a as A}from"./vl-map-select-actions-DIPSa_WM.js";import{m as M,a as S}from"./vl-map-select-actions.stories-arg-dxNzO_G2.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-checkbox.component-BI-8WbFC.js";import"./vl-datepicker.component-BH6hFvSl.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D3CXkpKa.js";import"./vl-input-field-masked.component-D5ECsW97.js";import"./vl-radio.component-DxXjedGG.js";import"./vl-radio-group.component-CSjbPTDR.js";import"./vl-select.component-DD168V7z.js";import"./vl-select-rich.component-Bxf89huo.js";import"./vl-textarea.component-gjn4lrXx.js";import"./vl-textarea-rich.component-Cr5hLJgB.js";import"./vl-upload.component-ZyZbl5Gk.js";import"./vl-upload-progress.component-Btk497js.js";import"./vl-map-vector-layer-8pTtAovA.js";import"./select-action-C985HNAa.js";import"./vl-map-layer-action-BX3Ddssc.js";import"./vl-map-select-action-DYOF0hPH.js";import"./vl-map-select-action.stories-arg-Cm9diI6B.js";import"./vl-map-action.stories-arg-BZqnRudh.js";class $ extends x{constructor(e,o,c){super(e,o,c),this._onSelectHandler=r=>{this.onSelect&&(this.getSelectedFeatures().getLength()>0?this.onSelect(this.getSelectedFeatures().getArray().slice(),r,this.getLayers()):this.onSelect([]))},this.getLayers=()=>{const r=[];return this.getSelectedFeatures()?.forEach(i=>{r.push(this.getLayerByFeature(this.layers,i))}),r}}_fixClusterBehavior(){}}var F=Object.getOwnPropertyDescriptor,P=(a,e,o,c)=>{for(var r=c>1?void 0:c?F(e,o):e,i=a.length-1,p;i>=0;i--)(p=a[i])&&(r=p(r)||r);return r};let u=class extends A{_createAction(a){const e={style:this.style,cluster:this._cluster!==void 0,filter:this.appliesTo.bind(this)};return new $(a,this._callback,e)}};u=P([b("vl-map-multiselect-actions")],u);const n={...S},C={...M},k={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[175e3,184e3]}}]},L={type:"FeatureCollection",features:[{type:"Feature",id:2,geometry:{type:"Point",coordinates:[175e3,185e3]}}]},w={type:"Feature",id:3,geometry:{type:"Polygon",coordinates:[[[144e3,171e3],[2e5,171e3],[2e5,205e3],[144e3,205e3],[144e3,171e3]]]}},E=["layer-1","layer-2","layer-3"],_=(a,e)=>f`
    <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer name="layer-3" .features=${w} projection-code="EPSG:31370">
            <vl-map-layer-style border-size="2"></vl-map-layer-style>
            <vl-map-layer-circle-style></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${k} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(0, 255, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${L} name="layer-2" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(255, 230, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-multiselect-actions .active=${a} .layers=${E} ?default-active=${e}>
        </vl-map-multiselect-actions>
    </vl-map>
`,D={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[146055,196908]}}]},V={type:"FeatureCollection",features:[{type:"Feature",id:2,geometry:{type:"Point",coordinates:[149055,199908]}}]},d=["layer-1","layer-2"],G=(a,e)=>f`
    <vl-map lambert2008>
        <vl-map-side-sheet>
            <vl-map-layer-switcher title="Kaartlagen" .layers=${d}></vl-map-layer-switcher>
        </vl-map-side-sheet>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${D} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(0, 255, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${V} name="layer-2" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(255, 230, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-multiselect-actions .active=${a} .layers=${d} ?default-active=${e}>
        </vl-map-multiselect-actions>
    </vl-map>
`,z=`import { html } from 'lit';

const featuresLayer1 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            geometry: {
                type: 'Point',
                coordinates: [175000, 184000],
            },
        },
    ],
};

const featuresLayer2 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 2,
            geometry: {
                type: 'Point',
                coordinates: [175000, 185000],
            },
        },
    ],
};

const featuresLayer3 = {
    type: 'Feature',
    id: 3,
    geometry: {
        type: 'Polygon',
        coordinates: [
            [
                [144000, 171000],
                [200000, 171000],
                [200000, 205000],
                [144000, 205000],
                [144000, 171000],
            ],
        ],
    },
};

const layers = ['layer-1', 'layer-2', 'layer-3'];

export const component = (active: boolean, defaultActive: boolean) => html\`
    <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer name="layer-3" .features=\${featuresLayer3} projection-code="EPSG:31370">
            <vl-map-layer-style border-size="2"></vl-map-layer-style>
            <vl-map-layer-circle-style></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=\${featuresLayer1} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(0, 255, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=\${featuresLayer2} name="layer-2" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(255, 230, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-multiselect-actions .active=\${active} .layers=\${layers} ?default-active=\${defaultActive}>
        </vl-map-multiselect-actions>
    </vl-map>
\`;
`,T=`import { html } from 'lit';

const featuresLayer1 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            geometry: {
                type: 'Point',
                coordinates: [146055.0, 196908.0],
            },
        },
    ],
};

const featuresLayer2 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 2,
            geometry: {
                type: 'Point',
                coordinates: [149055.0, 199908.0],
            },
        },
    ],
};

// De select-action is aan beide layers gekoppeld.
const layers = ['layer-1', 'layer-2'];

export const component = (active: boolean, defaultActive: boolean) => html\`
    <vl-map lambert2008>
        <vl-map-side-sheet>
            <vl-map-layer-switcher title="Kaartlagen" .layers=\${layers}></vl-map-layer-switcher>
        </vl-map-side-sheet>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=\${featuresLayer1} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(0, 255, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=\${featuresLayer2} name="layer-2" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(255, 230, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-multiselect-actions .active=\${active} .layers=\${layers} ?default-active=\${defaultActive}>
        </vl-map-multiselect-actions>
    </vl-map>
\`;
`;function v(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...g(),...a.components},{FluxComponentMetaData:o}=e;return o||O("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"map-multiselect-actions",children:"Map Multiselect Actions"}),`
`,t.jsx(o,{id:"map-components-action-layer-multiselect-actions"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"map-multiselect-actions"})," component om meerdere overlappende features samen te selecteren.",t.jsx("br",{}),`
Deze component erft over van de
`,t.jsx(e.a,{href:"/docs/map-action-layer-action-select-action--map-select-actions-default",children:"map-select-actions"})," component."]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlMapMultiselectActions } from '@domg-wc/map';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-map-multiselect-actions></vl-map-multiselect-actions>
`})}),`
`,t.jsx(m,{of:l}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Toon code"}),t.jsx(y,{code:z,language:"ts",dark:!0})]}),`
`,t.jsx(e.h2,{id:"zichtbaarheid-bij-meerdere-kaartlagen",children:"Zichtbaarheid bij meerdere kaartlagen"}),`
`,t.jsxs(e.p,{children:["Een ",t.jsx(e.code,{children:"map-multiselect-actions"}),` die aan meerdere kaartlagen gekoppeld is, blijft bruikbaar zolang minstens één
gekoppelde kaartlaag zichtbaar is. De actie deactiveert pas wanneer álle gekoppelde kaartlagen verborgen zijn.`,t.jsx("br",{}),`
Gebruik de layer-switcher in de side-sheet om `,t.jsx(e.code,{children:"layer-1"})," en ",t.jsx(e.code,{children:"layer-2"})," te tonen of te verbergen en het gedrag te testen:"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Verberg één kaartlaag → de selectie-actie blijft actief (selecteren in de zichtbare laag werkt nog)."}),`
`,t.jsx(e.li,{children:"Verberg beide kaartlagen → de selectie-actie deactiveert."}),`
`,t.jsx(e.li,{children:"Maak opnieuw één kaartlaag zichtbaar → de selectie-actie wordt terug actief."}),`
`]}),`
`,t.jsx(m,{of:s}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Toon code"}),t.jsx(y,{code:T,language:"ts",dark:!0})]}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(j,{of:l})]})}function N(a={}){const{wrapper:e}={...g(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(v,{...a})}):v(a)}function O(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const fe={id:"map-action-layer-action-select-action-multiselect-actions",title:"map/action/layer-action/select-action/multiselect-actions",tags:["autodocs"],args:n,argTypes:C,parameters:{docs:{page:N}}},l=h(n,({active:a,defaultActive:e})=>_(a,e));l.storyName="vl-map-multiselect-actions - default";l.args={active:!0};const s=h(n,({active:a,defaultActive:e})=>G(a,e));s.storyName="vl-map-multiselect-actions - multilayer visibility";s.args={active:!0,defaultActive:!0};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapMultiselectActionsArgs, ({
  active,
  defaultActive
}) => {
  return defaultComponent(active, defaultActive);
})`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(mapMultiselectActionsArgs, ({
  active,
  defaultActive
}) => {
  return multilayerVisibilityComponent(active, defaultActive);
})`,...s.parameters?.docs?.source}}};const ge=["MapMultiselectActionsDefault","MapMultiselectActionsMultilayerVisibility"];export{l as MapMultiselectActionsDefault,s as MapMultiselectActionsMultilayerVisibility,ge as __namedExportsOrder,fe as default};
