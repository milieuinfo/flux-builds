import{u as C,j as e,C as b,b8 as j,s as z,x as h}from"./iframe-COmpMQdF.js";import"./vl-map-base-layer-0uYY7Sp1.js";import"./vl-map-base-layer-grb-gray-BrRL2nbW.js";import"./vl-map-features-layer-FSFqeN_s.js";import{m as B,a as g}from"./vl-map-layer-style.stories-arg-LC4gnUtj.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-CcIOv0_Q.js";function S(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...C(),...r.components},{FluxComponentMetaData:l}=t;return l||L("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"map-layer-style",children:"Map Layer Style"}),`
`,e.jsx(l,{id:"map-components-layer-style-layer-style"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
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
`,e.jsx(b,{of:a}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(j,{of:a}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"met-tekst",children:"Met tekst"}),`
`,e.jsx(b,{of:o}),`
`,e.jsx(t.h3,{id:"met-legende",children:"Met legende"}),`
`,e.jsx(b,{of:n})]})}function F(r={}){const{wrapper:t}={...C(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(S,{...r})}):S(r)}function L(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const E={id:"map-layer-style",title:"map/layer-style",tags:["autodocs"],args:g,argTypes:B,parameters:{docs:{page:F}}},$=z(g,({borderColor:r,borderSize:t,color:l,name:d,invalid:i,textBackgroundColor:y,textBorderColor:m,textBorderSize:p,textColor:x,textFeatureAttributeName:c,textOffsetX:u,textOffsetY:f,textSize:v})=>h` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{label:"Text"}}]}} projection-code="EPSG:31370">
                <vl-map-layer-style
                    border-color=${r}
                    border-size=${t}
                    color=${l}
                    name=${d}
                    invalid=${i}
                    text-background-color=${y}
                    text-border-color=${m}
                    text-border-size=${p}
                    text-color=${x}
                    text-feature-attribute-name=${c}
                    text-offset-x=${u}
                    text-offset-y=${f}
                    text-size=${v}
                >
                </vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>`),a=$.bind({});a.storyName="vl-map-layer-style - default";const o=$.bind({});o.storyName="vl-map-layer-style - text";o.args={textColor:"rgba(255, 255, 255, 1)",textFeatureAttributeName:"label",textSize:"12px"};const s=$.bind({});s.storyName="vl-map-layer-style - invalid";s.args={invalid:!0};const n=z(g,({borderColor:r,borderSize:t,color:l,name:d,textBackgroundColor:i,textBorderColor:y,textBorderSize:m,textColor:p,textFeatureAttributeName:x,textOffsetX:c,textOffsetY:u,textSize:f})=>h` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{label:"Text"}}]}} projection-code="EPSG:31370">
                <vl-map-layer-style
                    border-color=${r}
                    border-size=${t}
                    color=${l}
                    name=${d}
                    text-background-color=${i}
                    text-border-color=${y}
                    text-border-size=${m}
                    text-color=${p}
                    text-feature-attribute-name=${x}
                    text-offset-x=${c}
                    text-offset-y=${u}
                    text-size=${f}
                >
                </vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend></vl-map-legend>
        </vl-map>`);n.storyName="vl-map-layer-style - legend";n.args={name:"Laag 1"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(mapLayerStyleArg, ({
  borderColor,
  borderSize,
  color,
  name,
  invalid,
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
                    invalid=\${invalid}
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
  invalid,
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
                    invalid=\${invalid}
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
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`story(mapLayerStyleArg, ({
  borderColor,
  borderSize,
  color,
  name,
  invalid,
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
                    invalid=\${invalid}
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
})`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapLayerStyleArg, ({
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
})`,...n.parameters?.docs?.source}}};const w=["MapLayerStyleDefault","MapLayerStyleText","MapLayerStyleInvalid","MapLayerStyleLegend"];export{a as MapLayerStyleDefault,s as MapLayerStyleInvalid,n as MapLayerStyleLegend,o as MapLayerStyleText,w as __namedExportsOrder,E as default};
