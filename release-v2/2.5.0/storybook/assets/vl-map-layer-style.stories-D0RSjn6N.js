import{u as v,j as e,C as f,bd as C,s as $,x as h}from"./iframe-CflcmDUD.js";import"./vl-map-base-layer-BvMalALX.js";import"./vl-map-base-layer-grb-gray-Cuxf_f6a.js";import"./vl-map-features-layer-D9owGkac.js";import{m as z,a as b}from"./vl-map-layer-style.stories-arg-D9gz0pQK.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-flPUvAVN.js";function g(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...v(),...r.components},{FluxMetaData:l}=t;return l||M("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"map-layer-style",children:"Map Layer Style"}),`
`,e.jsx(l,{id:"map-layer-style"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"map-layer-style"}),` component om een
`,e.jsx(t.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"features-layer"}),` of een
`,e.jsx(t.a,{href:"/docs/map-layer-vector-layer-wfs-layer--map-wfs-layer-default",children:"wfs-layer"})," te stylen.",e.jsx("br",{}),`
`,e.jsx(t.strong,{children:"Let op"}),": Bij gebruik van de ",e.jsx(t.a,{href:"/docs/map-legend--map-legend-features-layer-multiple-styles",children:"map-legend"}),` worden de
attributen niet reactief toegepast op de legende.`]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlMapLayerStyle } from '@domg-wc/map';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-map-layer-style></vl-map-layer-style>
`})}),`
`,e.jsx(f,{of:a}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(C,{of:a}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"met-tekst",children:"Met tekst"}),`
`,e.jsx(f,{of:o}),`
`,e.jsx(t.h3,{id:"met-legende",children:"Met legende"}),`
`,e.jsx(f,{of:n}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-layer-style--default",rel:"nofollow",children:"Legacy Storybook - Map Layer Style"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapLayerStyle.html",rel:"nofollow",children:"Legacy Documentatie - Map Layer Style"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-layer-style.html",rel:"nofollow",children:"Legacy Demo - Map Layer Style"})})]})}function L(r={}){const{wrapper:t}={...v(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(g,{...r})}):g(r)}function M(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const T={id:"map-layer-style",title:"map/layer-style",tags:["autodocs"],args:b,argTypes:z,parameters:{docs:{page:L}}},S=$(b,({borderColor:r,borderSize:t,color:l,name:s,textBackgroundColor:y,textBorderColor:m,textBorderSize:p,textColor:d,textFeatureAttributeName:c,textOffsetX:i,textOffsetY:x,textSize:u})=>h` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{label:"Text"}}]}} projection-code="EPSG:31370">
                <vl-map-layer-style
                    border-color=${r}
                    border-size=${t}
                    color=${l}
                    name=${s}
                    text-background-color=${y}
                    text-border-color=${m}
                    text-border-size=${p}
                    text-color=${d}
                    text-feature-attribute-name=${c}
                    text-offset-x=${i}
                    text-offset-y=${x}
                    text-size=${u}
                >
                </vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>`),a=S.bind({});a.storyName="vl-map-layer-style - default";const o=S.bind({});o.storyName="vl-map-layer-style - text";o.args={textColor:"rgba(255, 255, 255, 1)",textFeatureAttributeName:"label",textSize:"12px"};const n=$(b,({borderColor:r,borderSize:t,color:l,name:s,textBackgroundColor:y,textBorderColor:m,textBorderSize:p,textColor:d,textFeatureAttributeName:c,textOffsetX:i,textOffsetY:x,textSize:u})=>h` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{label:"Text"}}]}} projection-code="EPSG:31370">
                <vl-map-layer-style
                    border-color=${r}
                    border-size=${t}
                    color=${l}
                    name=${s}
                    text-background-color=${y}
                    text-border-color=${m}
                    text-border-size=${p}
                    text-color=${d}
                    text-feature-attribute-name=${c}
                    text-offset-x=${i}
                    text-offset-y=${x}
                    text-size=${u}
                >
                </vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend></vl-map-legend>
        </vl-map>`);n.storyName="vl-map-layer-style - legend";n.args={name:"Laag 1"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(mapLayerStyleArg, ({
  borderColor,
  borderSize,
  color,
  name,
  textBackgroundColor,
  textBorderColor,
  textBorderSize,
  textColor,
  textFeatureAttributeName,
  textOffsetX,
  textOffsetY,
  textSize
}) => {
  const features = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[[147055.0, 197908.0], [157055.0, 197908.0], [157055.0, 187908.0], [147055.0, 187908.0], [147055.0, 197908.0]]]
      },
      properties: {
        label: 'Text'
      }
    }]
  };
  return html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-layer-style
                    border-color=\${borderColor}
                    border-size=\${borderSize}
                    color=\${color}
                    name=\${name}
                    text-background-color=\${textBackgroundColor}
                    text-border-color=\${textBorderColor}
                    text-border-size=\${textBorderSize}
                    text-color=\${textColor}
                    text-feature-attribute-name=\${textFeatureAttributeName}
                    text-offset-x=\${textOffsetX}
                    text-offset-y=\${textOffsetY}
                    text-size=\${textSize}
                >
                </vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>\`;
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`story(mapLayerStyleArg, ({
  borderColor,
  borderSize,
  color,
  name,
  textBackgroundColor,
  textBorderColor,
  textBorderSize,
  textColor,
  textFeatureAttributeName,
  textOffsetX,
  textOffsetY,
  textSize
}) => {
  const features = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[[147055.0, 197908.0], [157055.0, 197908.0], [157055.0, 187908.0], [147055.0, 187908.0], [147055.0, 197908.0]]]
      },
      properties: {
        label: 'Text'
      }
    }]
  };
  return html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-layer-style
                    border-color=\${borderColor}
                    border-size=\${borderSize}
                    color=\${color}
                    name=\${name}
                    text-background-color=\${textBackgroundColor}
                    text-border-color=\${textBorderColor}
                    text-border-size=\${textBorderSize}
                    text-color=\${textColor}
                    text-feature-attribute-name=\${textFeatureAttributeName}
                    text-offset-x=\${textOffsetX}
                    text-offset-y=\${textOffsetY}
                    text-size=\${textSize}
                >
                </vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>\`;
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapLayerStyleArg, ({
  borderColor,
  borderSize,
  color,
  name,
  textBackgroundColor,
  textBorderColor,
  textBorderSize,
  textColor,
  textFeatureAttributeName,
  textOffsetX,
  textOffsetY,
  textSize
}) => {
  const features = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[[147055.0, 197908.0], [157055.0, 197908.0], [157055.0, 187908.0], [147055.0, 187908.0], [147055.0, 197908.0]]]
      },
      properties: {
        label: 'Text'
      }
    }]
  };
  return html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-layer-style
                    border-color=\${borderColor}
                    border-size=\${borderSize}
                    color=\${color}
                    name=\${name}
                    text-background-color=\${textBackgroundColor}
                    text-border-color=\${textBorderColor}
                    text-border-size=\${textBorderSize}
                    text-color=\${textColor}
                    text-feature-attribute-name=\${textFeatureAttributeName}
                    text-offset-x=\${textOffsetX}
                    text-offset-y=\${textOffsetY}
                    text-size=\${textSize}
                >
                </vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend></vl-map-legend>
        </vl-map>\`;
})`,...n.parameters?.docs?.source}}};const D=["MapLayerStyleDefault","MapLayerStyleText","MapLayerStyleLegend"];export{a as MapLayerStyleDefault,n as MapLayerStyleLegend,o as MapLayerStyleText,D as __namedExportsOrder,T as default};
