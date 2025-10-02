import{J as l,K as s,u as m,j as a,C as p,bd as u,s as y,x as d}from"./iframe-CflcmDUD.js";import"./vl-map-base-layer-BvMalALX.js";import"./vl-map-base-layer-grb-gray-Cuxf_f6a.js";import"./vl-map-layer-circle-style-BLRSLB0w.js";import"./vl-map-features-layer-D9owGkac.js";import"./vl-map-wfs-layer-Bprmt369.js";import"./vl-map-modify-action-DfnBaLg0.js";import{m as g,a as v}from"./vl-map-action.stories-arg-Bh_3DQ4z.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-flPUvAVN.js";import"./composite-vector-layer-CvVvypp2.js";import"./select-action-D7TIVeMp.js";import"./vl-map-layer-action-C8bXaFii.js";const i={...v,snapping:!1,snappingPixelTolerance:10},h={...g,snapping:{name:"snapping",description:"Geeft aan dat er bij het tekenen snapping mag gebeuren, hetzij op de laag waarop getekend wordt (indien geen vl-map-wfs-layer(s) als child elementen), hetzij op de meegegeven vl-map-wfs-layers.<br>Dit attribuut is niet reactief.",control:!1,table:{type:{summary:s.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(i.snapping)}}},snappingPixelTolerance:{name:"snapping-pixel-tolerance",description:"Binnen de hoeveel pixel van een feature er gesnapt mag worden.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.NUMBER},category:l.ATTRIBUTES,defaultValue:{summary:String(i.snappingPixelTolerance)}}}};function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...t.components},{FluxMetaData:o}=e;return o||x("FluxMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-modify-action",children:"Map Modify Action"}),`
`,a.jsx(o,{id:"map-action-layer-action-modify-action"}),`
`,a.jsxs(e.p,{children:["Gebruik het ",a.jsx(e.code,{children:"map-modify-action"})," component om een feature op een ",a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"})," aan te passen.",a.jsx("br",{}),`
Dit component erft over van de `,a.jsx(e.code,{children:"VlMapLayerAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapModifyAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-modify-action></vl-map-modify-action>
`})}),`
`,a.jsx(p,{of:r}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(u,{of:r}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"snapping",children:"Snapping"}),`
`,a.jsx(p,{of:n}),`
`,a.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,a.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-modify-action--default",rel:"nofollow",children:"Legacy Storybook - Map Modify Action"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapModifyAction.html",rel:"nofollow",children:"Legacy Documentatie - Map Modify Action"})}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-modify-actions.html",rel:"nofollow",children:"Legacy Demo - Map Modify Action"})})]})}function b(t={}){const{wrapper:e}={...m(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(c,{...t})}):c(t)}function x(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const k={id:"map-action-layer-action-modify-action",title:"map/action/layer-action/modify-action",tags:["autodocs"],args:i,argTypes:h,parameters:{docs:{page:b}}},r=y(i,({active:t,defaultActive:e})=>d`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[127836.54,200879.51]}},{type:"Feature",id:2,geometry:{type:"Point",coordinates:[122161.53,185358.26]}},{type:"Feature",id:3,geometry:{type:"LineString",coordinates:[[107836.54,170879.51],[102161.53,192358.26]]}},{type:"Feature",id:4,geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]}}]}} projection-code="EPSG:31370">
                <vl-map-modify-action .active=${t} ?default-active=${e}></vl-map-modify-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-modify-action - default";r.args={active:!0};const n=y(i,({active:t,defaultActive:e,snapping:o,snappingPixelTolerance:f})=>d`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[151285.5138477709,211586.43498009123]}}]}} projection-code="EPSG:31370">
                    <vl-map-modify-action
                        .active=${t}
                        ?default-active=${e}
                        ?snapping=${o}
                        snapping-pixel-tolerance=${f}
                    >
                        <vl-map-wfs-layer
                            name="Stromend waterlichamen"
                            url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                            layers="owl_l"
                            max-resolution="4"
                        ></vl-map-wfs-layer>
                    </vl-map-modify-action>
                    <vl-map-layer-style border-size="2"></vl-map-layer-style>
                    <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
                </vl-map-features-layer>
            </vl-map>
        `);n.storyName="vl-map-modify-action - snapping";n.args={active:!0,snapping:!0,snappingPixelTolerance:1e3};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`story(mapModifyActionArgs, ({
  active,
  defaultActive
}) => {
  const features = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      id: 1,
      geometry: {
        type: 'Point',
        coordinates: [127836.54, 200879.51]
      }
    }, {
      type: 'Feature',
      id: 2,
      geometry: {
        type: 'Point',
        coordinates: [122161.53, 185358.26]
      }
    }, {
      type: 'Feature',
      id: 3,
      geometry: {
        type: 'LineString',
        coordinates: [[107836.54, 170879.51], [102161.53, 192358.26]]
      }
    }, {
      type: 'Feature',
      id: 4,
      geometry: {
        type: 'Polygon',
        coordinates: [[[147055.0, 197908.0], [157055.0, 197908.0], [157055.0, 187908.0], [147055.0, 187908.0], [147055.0, 197908.0]]]
      }
    }]
  };
  return html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-modify-action .active=\${active} ?default-active=\${defaultActive}></vl-map-modify-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    \`;
})`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapModifyActionArgs, ({
  active,
  defaultActive,
  snapping,
  snappingPixelTolerance
}) => {
  const features = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      id: 1,
      geometry: {
        type: 'Point',
        coordinates: [151285.5138477709, 211586.43498009123]
      }
    }]
  };
  return html\`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                    <vl-map-modify-action
                        .active=\${active}
                        ?default-active=\${defaultActive}
                        ?snapping=\${snapping}
                        snapping-pixel-tolerance=\${snappingPixelTolerance}
                    >
                        <vl-map-wfs-layer
                            name="Stromend waterlichamen"
                            url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                            layers="owl_l"
                            max-resolution="4"
                        ></vl-map-wfs-layer>
                    </vl-map-modify-action>
                    <vl-map-layer-style border-size="2"></vl-map-layer-style>
                    <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
                </vl-map-features-layer>
            </vl-map>
        \`;
})`,...n.parameters?.docs?.source}}};const V=["MapModifyActionDefault","MapModifyActionSnapping"];export{r as MapModifyActionDefault,n as MapModifyActionSnapping,V as __namedExportsOrder,k as default};
