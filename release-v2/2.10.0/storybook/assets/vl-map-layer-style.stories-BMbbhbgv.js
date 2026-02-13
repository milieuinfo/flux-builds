import{u as S,j as e,C as b,bh as z,s as C,x as j}from"./iframe-FlvNZLqI.js";import"./vl-map-base-layer-CnkWBJRC.js";import"./vl-map-base-layer-grb-gray-CrvS-DXx.js";import"./vl-map-features-layer-D0V-0ESd.js";import{m as L,a as g}from"./vl-map-layer-style.stories-arg-tsf-Y4vd.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-B_tYA0Mo.js";function h(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...S(),...r.components},{FluxComponentMetaData:l}=t;return l||F("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"map-layer-style",children:"Map Layer Style"}),`
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
`,e.jsx(z,{of:a}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"met-tekst",children:"Met tekst"}),`
`,e.jsx(b,{of:o}),`
`,e.jsx(t.h3,{id:"met-legende",children:"Met legende"}),`
`,e.jsx(b,{of:n}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-layer-style--default",rel:"nofollow",children:"Legacy Storybook - Map Layer Style"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapLayerStyle.html",rel:"nofollow",children:"Legacy Documentatie - Map Layer Style"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-layer-style.html",rel:"nofollow",children:"Legacy Demo - Map Layer Style"})})]})}function B(r={}){const{wrapper:t}={...S(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(h,{...r})}):h(r)}function F(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const D={id:"map-layer-style",title:"map/layer-style",tags:["autodocs"],args:g,argTypes:L,parameters:{docs:{page:B}}},v=C(g,({borderColor:r,borderSize:t,color:l,name:d,invalid:y,textBackgroundColor:i,textBorderColor:m,textBorderSize:p,textColor:c,textFeatureAttributeName:x,textOffsetX:u,textOffsetY:f,textSize:$})=>j` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{label:"Text"}}]}} projection-code="EPSG:31370">
                <vl-map-layer-style
                    border-color=${r}
                    border-size=${t}
                    color=${l}
                    name=${d}
                    invalid=${y}
                    text-background-color=${i}
                    text-border-color=${m}
                    text-border-size=${p}
                    text-color=${c}
                    text-feature-attribute-name=${x}
                    text-offset-x=${u}
                    text-offset-y=${f}
                    text-size=${$}
                >
                </vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>`),a=v.bind({});a.storyName="vl-map-layer-style - default";const o=v.bind({});o.storyName="vl-map-layer-style - text";o.args={textColor:"rgba(255, 255, 255, 1)",textFeatureAttributeName:"label",textSize:"12px"};const s=v.bind({});s.storyName="vl-map-layer-style - invalid";s.args={invalid:!0};const n=C(g,({borderColor:r,borderSize:t,color:l,name:d,textBackgroundColor:y,textBorderColor:i,textBorderSize:m,textColor:p,textFeatureAttributeName:c,textOffsetX:x,textOffsetY:u,textSize:f})=>j` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{label:"Text"}}]}} projection-code="EPSG:31370">
                <vl-map-layer-style
                    border-color=${r}
                    border-size=${t}
                    color=${l}
                    name=${d}
                    text-background-color=${y}
                    text-border-color=${i}
                    text-border-size=${m}
                    text-color=${p}
                    text-feature-attribute-name=${c}
                    text-offset-x=${x}
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
})`,...n.parameters?.docs?.source}}};const X=["MapLayerStyleDefault","MapLayerStyleText","MapLayerStyleInvalid","MapLayerStyleLegend"];export{a as MapLayerStyleDefault,s as MapLayerStyleInvalid,n as MapLayerStyleLegend,o as MapLayerStyleText,X as __namedExportsOrder,D as default};
