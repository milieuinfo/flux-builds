import{Z as l,_ as s,u as c,j as a,C as p,b8 as f,s as y,x as d}from"./iframe-BAEsER5t.js";import"./vl-map-base-layer-Ba3ZBrry.js";import"./vl-map-base-layer-grb-gray-Bm2BVNHa.js";import"./vl-map-layer-circle-style-Bp7B_iJQ.js";import"./vl-map-features-layer-CzxM-Fvc.js";import"./vl-map-wfs-layer-C8hbBSiK.js";import"./vl-map-modify-action-B6F9da3_.js";import{m as v,a as g}from"./vl-map-action.stories-arg-3MfFgA8-.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-C21YKvSS.js";import"./composite-vector-layer-Ceqsls_-.js";import"./select-action-ZZ8rFmky.js";import"./vl-map-layer-action-CnXyRgLs.js";const i={...g,snapping:!1,snappingPixelTolerance:10},b={...v,snapping:{name:"snapping",description:"Geeft aan dat er bij het tekenen snapping mag gebeuren, hetzij op de laag waarop getekend wordt (indien geen vl-map-wfs-layer(s) als child elementen), hetzij op de meegegeven vl-map-wfs-layers.<br>Dit attribuut is niet reactief.",control:!1,table:{type:{summary:s.BOOLEAN},category:l.ATTRIBUTES,defaultValue:{summary:String(i.snapping)}}},snappingPixelTolerance:{name:"snapping-pixel-tolerance",description:"Binnen de hoeveel pixel van een feature er gesnapt mag worden.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.NUMBER},category:l.ATTRIBUTES,defaultValue:{summary:String(i.snappingPixelTolerance)}}}};function m(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...t.components},{FluxComponentMetaData:o}=e;return o||h("FluxComponentMetaData"),a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-modify-action",children:"Map Modify Action"}),`
`,a.jsx(o,{id:"map-components-action-layer-modify-action"}),`
`,a.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,a.jsxs(e.p,{children:["Gebruik het ",a.jsx(e.code,{children:"map-modify-action"})," component om een feature op een ",a.jsx(e.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"map-features-layer"})," aan te passen.",a.jsx("br",{}),`
Dit component erft over van de `,a.jsx(e.code,{children:"VlMapLayerAction"})," klasse, die op zijn beurt overerft van de ",a.jsx(e.code,{children:"VlMapAction"})," klasse."]}),`
`,a.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-js",children:`import { VlMapModifyAction } from '@domg-wc/map';
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<vl-map-modify-action></vl-map-modify-action>
`})}),`
`,a.jsx(p,{of:r}),`
`,a.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,a.jsx(f,{of:r}),`
`,a.jsx(e.h2,{id:"varianten",children:"Varianten"}),`
`,a.jsx(e.h3,{id:"snapping",children:"Snapping"}),`
`,a.jsx(p,{of:n})]})}function x(t={}){const{wrapper:e}={...c(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(m,{...t})}):m(t)}function h(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const G={id:"map-action-layer-action-modify-action",title:"map/action/layer-action/modify-action",tags:["autodocs"],args:i,argTypes:b,parameters:{docs:{page:x}}},r=y(i,({active:t,defaultActive:e})=>d`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[127836.54,200879.51]}},{type:"Feature",id:2,geometry:{type:"Point",coordinates:[122161.53,185358.26]}},{type:"Feature",id:3,geometry:{type:"LineString",coordinates:[[107836.54,170879.51],[102161.53,192358.26]]}},{type:"Feature",id:4,geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]}}]}} projection-code="EPSG:31370">
                <vl-map-modify-action .active=${t} ?default-active=${e}></vl-map-modify-action>
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);r.storyName="vl-map-modify-action - default";r.args={active:!0};const n=y(i,({active:t,defaultActive:e,snapping:o,snappingPixelTolerance:u})=>d`
            <vl-map lambert2008>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[151285.5138477709,211586.43498009123]}}]}} projection-code="EPSG:31370">
                    <vl-map-modify-action
                        .active=${t}
                        ?default-active=${e}
                        ?snapping=${o}
                        snapping-pixel-tolerance=${u}
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
})`,...n.parameters?.docs?.source}}};const V=["MapModifyActionDefault","MapModifyActionSnapping"];export{r as MapModifyActionDefault,n as MapModifyActionSnapping,V as __namedExportsOrder,G as default};
