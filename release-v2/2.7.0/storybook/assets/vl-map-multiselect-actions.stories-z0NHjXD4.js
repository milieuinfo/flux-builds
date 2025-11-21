import{y as u,x as d,u as m,j as t,C as v,S as f,bd as g,s as h}from"./iframe-BRJWU34U.js";import"./vl-map-base-layer-mxB9Jgb1.js";import"./vl-map-base-layer-grb-gray-Di19ej0R.js";import"./vl-map-layer-circle-style-BYHuRewh.js";import"./vl-map-features-layer-B_ClZkbk.js";import{V as x,a as b}from"./vl-map-select-actions-3RPg6nh_.js";import{m as j,a as A}from"./vl-map-select-actions.stories-arg-Ij3SsR1g.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-BFohRpWd.js";import"./select-action-BvgTSUoJ.js";import"./vl-map-layer-action-2JAAiOGD.js";import"./vl-map-select-action-DEZ1S2AT.js";import"./vl-map-select-action.stories-arg-B7EM12DY.js";import"./vl-map-action.stories-arg-CeHGMlwy.js";class M extends x{constructor(e,s,c){super(e,s,c),this._onSelectHandler=r=>{this.onSelect&&(this.getSelectedFeatures().getLength()>0?this.onSelect(this.getSelectedFeatures().getArray().slice(),r,this.getLayers()):this.onSelect([]))},this.getLayers=()=>{const r=[];return this.getSelectedFeatures()?.forEach(o=>{r.push(this.getLayerByFeature(this.layers,o))}),r}}_fixClusterBehavior(){}}var S=Object.getOwnPropertyDescriptor,F=(a,e,s,c)=>{for(var r=c>1?void 0:c?S(e,s):e,o=a.length-1,i;o>=0;o--)(i=a[o])&&(r=i(r)||r);return r};let n=class extends b{_createAction(a){const e={style:this.style,cluster:this._cluster!==void 0,filter:this.appliesTo.bind(this)};return new M(a,this._callback,e)}};n=F([u("vl-map-multiselect-actions")],n);const y={...A},_={...j},C={type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[175e3,184e3]}}]},L={type:"FeatureCollection",features:[{type:"Feature",id:2,geometry:{type:"Point",coordinates:[175e3,185e3]}}]},P={type:"Feature",id:3,geometry:{type:"Polygon",coordinates:[[[144e3,171e3],[2e5,171e3],[2e5,205e3],[144e3,205e3],[144e3,171e3]]]}},$=["layer-1","layer-2","layer-3"],E=(a,e)=>d`
    <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer name="layer-3" .features=${P} projection-code="EPSG:31370">
            <vl-map-layer-style border-size="2"></vl-map-layer-style>
            <vl-map-layer-circle-style></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${C} name="layer-1" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(0, 255, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${L} name="layer-2" projection-code="EPSG:31370">
            <vl-map-layer-circle-style color="rgba(255, 230, 21, 1)" border-color="#000000"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-multiselect-actions .active=${a} .layers=${$} ?default-active=${e}>
        </vl-map-multiselect-actions>
    </vl-map>
`,D=`import { html } from 'lit';

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
`;function p(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...a.components},{FluxMetaData:s}=e;return s||G("FluxMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"map-multiselect-actions",children:"Map Multiselect Actions"}),`
`,t.jsx(s,{id:"map-action-layer-action-select-action-multiselect-actions"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"map-multiselect-actions"})," component om meerdere overlappende features samen te selecteren.",t.jsx("br",{}),`
Deze component erft over van de
`,t.jsx(e.a,{href:"/docs/map-action-layer-action-select-action--map-select-actions-default",children:"map-select-actions"})," component."]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlMapMultiselectActions } from '@domg-wc/map';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-map-multiselect-actions></vl-map-multiselect-actions>
`})}),`
`,t.jsx(v,{of:l}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Toon code"}),t.jsx(f,{code:D,language:"ts",dark:!0})]}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(g,{of:l})]})}function w(a={}){const{wrapper:e}={...m(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(p,{...a})}):p(a)}function G(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const Q={id:"map-action-layer-action-select-action-multiselect-actions",title:"map/action/layer-action/select-action/multiselect-actions",tags:["autodocs"],args:y,argTypes:_,parameters:{docs:{page:w}}},l=h(y,({active:a,defaultActive:e})=>E(a,e));l.storyName="vl-map-multiselect-actions - default";l.args={active:!0};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapMultiselectActionsArgs, ({
  active,
  defaultActive
}) => {
  return defaultComponent(active, defaultActive);
})`,...l.parameters?.docs?.source}}};const U=["MapMultiselectActionsDefault"];export{l as MapMultiselectActionsDefault,U as __namedExportsOrder,Q as default};
