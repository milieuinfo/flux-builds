import{R as i,U as c,Y as M,u as S,j as e,C as j,bh as B,s as F,x as P}from"./iframe-iHJvAyUB.js";import"./vl-map-base-layer-Ds3vxb_U.js";import"./vl-map-base-layer-grb-gray-CGABEvMh.js";import"./vl-map-features-layer-922S3FZt.js";import"./vl-map-layer-circle-style-D2Cy4zz2.js";import{m as A,a as k}from"./vl-map-layer-style.stories-arg-PWCHNzNk.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-CSngL2Zd.js";const o={...k,borderColor:"rgba(0, 0, 0, 0)",clusterColor:"rgba(2, 85, 204, 1)",clusterTextColor:"#FFF",clusterMultiplier:1,size:5},E={...A,borderColor:{name:"border-color",description:"De kleur van de rand van de kaartlaagstijl.",table:{type:{summary:c.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.borderColor}}},clusterColor:{name:"cluster-color",description:"De kleur bij het clusteren van features.",table:{type:{summary:c.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.clusterColor}}},clusterMultiplier:{name:"cluster-multiplier",description:"Bepaalt de verhouding van de vergroting voor clusters tegenover ingestelde `size`.",control:{type:M.NUMBER,step:.1},table:{type:{summary:c.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(o.clusterMultiplier)}}},clusterTextColor:{name:"cluster-text-color",description:"De kleur van de tekst bij het clusteren van features.",table:{type:{summary:c.STRING},category:i.ATTRIBUTES,defaultValue:{summary:o.clusterTextColor}}},size:{name:"size",description:"De grootte van de cirkels.",table:{type:{summary:c.NUMBER},category:i.ATTRIBUTES,defaultValue:{summary:String(o.size)}}}};function z(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...S(),...r.components},{FluxComponentMetaData:s}=t;return s||N("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"map-layer-circle-style",children:"Map Layer Circle Style"}),`
`,e.jsx(s,{id:"map-components-layer-style-layer-circle-style"}),`
`,e.jsx(t.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(t.p,{children:["Gebruik de ",e.jsx(t.code,{children:"map-layer-circle-style"}),` component om een
`,e.jsx(t.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"features-layer"})," te stylen.",e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(t.a,{href:"/docs/map-layer-style--map-layer-style-default",children:"map-layer-style"})," component."]}),`
`,e.jsx(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { VlMapLayerCircleStyle } from '@domg-wc/map';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<vl-map-layer-circle-style></vl-map-layer-circle-style>
`})}),`
`,e.jsx(j,{of:n}),`
`,e.jsx(t.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(B,{of:n}),`
`,e.jsx(t.h2,{id:"varianten",children:"Varianten"}),`
`,e.jsx(t.h3,{id:"met-tekst",children:"Met tekst"}),`
`,e.jsx(j,{of:l}),`
`,e.jsx(t.h3,{id:"clustered",children:"Clustered"}),`
`,e.jsx(j,{of:a}),`
`,e.jsx(t.h3,{id:"cluster-coëfficiënt",children:"Cluster coëfficiënt"}),`
`,e.jsxs(t.p,{children:["Standaard zal een cluster de grootte overnemen van de ingestelde ",e.jsx(t.code,{children:"size"})," * 1.5."]}),`
`,e.jsx(t.p,{children:`Als de cluster 10 of meer features bevat, zal de grootte verhoogd worden met een coëfficiënt van 2.
Per verhoogde machtsverheffing wordt dat coëfficiënt verhoogd met 1.`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["meer dan 10 features: ",e.jsx(t.code,{children:"size"})," x 2"]}),`
`,e.jsxs(t.li,{children:["meer dan 100 features: ",e.jsx(t.code,{children:"size"})," x 3"]}),`
`,e.jsxs(t.li,{children:["meer dan 1000 features: ",e.jsx(t.code,{children:"size"})," x 4"]}),`
`,e.jsx(t.li,{children:"enzovoort.."}),`
`]}),`
`,e.jsxs(t.p,{children:["Het is ook mogelijk te kiezen de verhouding van het coëfficiënt aan te passen door de ",e.jsx(t.code,{children:"cluster-multiplier"}),` in
te stellen.`]}),`
`,e.jsx(t.p,{children:"Dan zal de uiteindelijke grootte van een cluster op volgende manier bepaald worden:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"size"})," x ",e.jsx(t.code,{children:"coëfficiënt"})," x ",e.jsx(t.code,{children:"cluster-multiplier"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-layer-circle-style--default",rel:"nofollow",children:"Legacy Storybook - Map Layer Circle Style"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapLayerCircleStyle.html",rel:"nofollow",children:"Legacy Documentatie - Map Layer Circle Style"})}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-circle-style.html",rel:"nofollow",children:"Legacy Demo - Map Layer Circle Style"})})]})}function L(r={}){const{wrapper:t}={...S(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(z,{...r})}):z(r)}function N(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const Y={id:"map-layer-style-layer-circle-style",title:"map/layer-style/layer-circle-style",tags:["autodocs"],args:o,argTypes:E,parameters:{docs:{page:L}}},T=F(o,({borderColor:r,borderSize:t,clusterColor:s,clusterTextColor:p,clusterMultiplier:y,color:u,name:d,size:m,textBackgroundColor:x,textBorderColor:b,textBorderSize:f,textColor:g,textFeatureAttributeName:C,textOffsetX:h,textOffsetY:v,textSize:$})=>P` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{label:"A"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,197208]},properties:{label:"B"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,187208]},properties:{label:"C"}}]}} projection-code="EPSG:31370">
                <vl-map-layer-circle-style
                    border-color=${r}
                    border-size=${t}
                    cluster-color=${s}
                    cluster-multiplier=${y}
                    cluster-text-color=${p}
                    color=${u}
                    name=${d}
                    size=${m}
                    text-background-color=${x}
                    text-border-color=${b}
                    text-border-size=${f}
                    text-color=${g}
                    text-feature-attribute-name=${C}
                    text-offset-x=${h}
                    text-offset-y=${v}
                    text-size=${$}
                ></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>`),n=T.bind({});n.storyName="vl-map-layer-circle-style - default";n.args={borderColor:"rgba(0, 0, 0, 1)",color:"rgba(255, 230, 21, 1)"};const l=T.bind({});l.storyName="vl-map-layer-circle-style - text";l.args={borderColor:"rgba(0, 0, 0, 1)",color:"rgba(255, 230, 21, 1)",size:12,textFeatureAttributeName:"label",textColor:"#000",textSize:"18px"};const a=F(o,({borderColor:r,borderSize:t,clusterColor:s,clusterTextColor:p,clusterMultiplier:y,color:u,name:d,size:m,textBackgroundColor:x,textBorderColor:b,textBorderSize:f,textColor:g,textFeatureAttributeName:C,textOffsetX:h,textOffsetY:v,textSize:$})=>P` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{label:"A"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,197208]},properties:{label:"B"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,187208]},properties:{label:"C"}},{type:"Feature",geometry:{type:"Point",coordinates:[159755,187208]},properties:{label:"D"}},{type:"Feature",geometry:{type:"Point",coordinates:[158955,187208]},properties:{label:"D1"}},{type:"Feature",geometry:{type:"Point",coordinates:[160855,187208]},properties:{label:"D2"}},{type:"Feature",geometry:{type:"Point",coordinates:[161855,187208]},properties:{label:"D3"}},{type:"Feature",geometry:{type:"Point",coordinates:[158955,188208]},properties:{label:"D4"}},{type:"Feature",geometry:{type:"Point",coordinates:[160855,188208]},properties:{label:"D5"}},{type:"Feature",geometry:{type:"Point",coordinates:[161855,188208]},properties:{label:"D6"}},{type:"Feature",geometry:{type:"Point",coordinates:[162855,188208]},properties:{label:"D6"}},{type:"Feature",geometry:{type:"Point",coordinates:[159755,177208]},properties:{label:"E3"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,177208]},properties:{label:"E2"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,186208]},properties:{label:"E1"}}]}} cluster cluster-distance="100" projection-code="EPSG:31370">
                <vl-map-layer-circle-style
                    border-color=${r}
                    border-size=${t}
                    cluster-color=${s}
                    cluster-text-color=${p}
                    cluster-multiplier=${y}
                    color=${u}
                    name=${d}
                    size=${m}
                    text-background-color=${x}
                    text-border-color=${b}
                    text-border-size=${f}
                    text-color=${g}
                    text-feature-attribute-name=${C}
                    text-offset-x=${h}
                    text-offset-y=${v}
                    text-size=${$}
                ></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>`);a.storyName="vl-map-layer-circle-style - clustered";a.args={borderColor:"rgba(0, 0,0,1)",color:"rgba(255, 230, 21, 1)",size:12,textFeatureAttributeName:"label",textColor:"#000",textSize:"18px"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapLayerCircleStyleArg, ({
  borderColor,
  borderSize,
  clusterColor,
  clusterTextColor,
  clusterMultiplier,
  color,
  name,
  size,
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
        type: 'Point',
        coordinates: [147055.0, 197908.0]
      },
      properties: {
        label: 'A'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158755.0, 197208.0]
      },
      properties: {
        label: 'B'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158755.0, 187208.0]
      },
      properties: {
        label: 'C'
      }
    }]
  };
  return html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-layer-circle-style
                    border-color=\${borderColor}
                    border-size=\${borderSize}
                    cluster-color=\${clusterColor}
                    cluster-multiplier=\${clusterMultiplier}
                    cluster-text-color=\${clusterTextColor}
                    color=\${color}
                    name=\${name}
                    size=\${size}
                    text-background-color=\${textBackgroundColor}
                    text-border-color=\${textBorderColor}
                    text-border-size=\${textBorderSize}
                    text-color=\${textColor}
                    text-feature-attribute-name=\${textFeatureAttributeName}
                    text-offset-x=\${textOffsetX}
                    text-offset-y=\${textOffsetY}
                    text-size=\${textSize}
                ></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>\`;
})`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`story(mapLayerCircleStyleArg, ({
  borderColor,
  borderSize,
  clusterColor,
  clusterTextColor,
  clusterMultiplier,
  color,
  name,
  size,
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
        type: 'Point',
        coordinates: [147055.0, 197908.0]
      },
      properties: {
        label: 'A'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158755.0, 197208.0]
      },
      properties: {
        label: 'B'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158755.0, 187208.0]
      },
      properties: {
        label: 'C'
      }
    }]
  };
  return html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} projection-code="EPSG:31370">
                <vl-map-layer-circle-style
                    border-color=\${borderColor}
                    border-size=\${borderSize}
                    cluster-color=\${clusterColor}
                    cluster-multiplier=\${clusterMultiplier}
                    cluster-text-color=\${clusterTextColor}
                    color=\${color}
                    name=\${name}
                    size=\${size}
                    text-background-color=\${textBackgroundColor}
                    text-border-color=\${textBorderColor}
                    text-border-size=\${textBorderSize}
                    text-color=\${textColor}
                    text-feature-attribute-name=\${textFeatureAttributeName}
                    text-offset-x=\${textOffsetX}
                    text-offset-y=\${textOffsetY}
                    text-size=\${textSize}
                ></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>\`;
})`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`story(mapLayerCircleStyleArg, ({
  borderColor,
  borderSize,
  clusterColor,
  clusterTextColor,
  clusterMultiplier,
  color,
  name,
  size,
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
        type: 'Point',
        coordinates: [147055.0, 197908.0]
      },
      properties: {
        label: 'A'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158755.0, 197208.0]
      },
      properties: {
        label: 'B'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158755.0, 187208.0]
      },
      properties: {
        label: 'C'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [159755.0, 187208.0]
      },
      properties: {
        label: 'D'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158955.0, 187208.0]
      },
      properties: {
        label: 'D1'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [160855.0, 187208.0]
      },
      properties: {
        label: 'D2'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [161855.0, 187208.0]
      },
      properties: {
        label: 'D3'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158955.0, 188208.0]
      },
      properties: {
        label: 'D4'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [160855.0, 188208.0]
      },
      properties: {
        label: 'D5'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [161855.0, 188208.0]
      },
      properties: {
        label: 'D6'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [162855.0, 188208.0]
      },
      properties: {
        label: 'D6'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [159755.0, 177208.0]
      },
      properties: {
        label: 'E3'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158755.0, 177208.0]
      },
      properties: {
        label: 'E2'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [158755.0, 186208.0]
      },
      properties: {
        label: 'E1'
      }
    }]
  };
  return html\` <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=\${features} cluster cluster-distance="100" projection-code="EPSG:31370">
                <vl-map-layer-circle-style
                    border-color=\${borderColor}
                    border-size=\${borderSize}
                    cluster-color=\${clusterColor}
                    cluster-text-color=\${clusterTextColor}
                    cluster-multiplier=\${clusterMultiplier}
                    color=\${color}
                    name=\${name}
                    size=\${size}
                    text-background-color=\${textBackgroundColor}
                    text-border-color=\${textBorderColor}
                    text-border-size=\${textBorderSize}
                    text-color=\${textColor}
                    text-feature-attribute-name=\${textFeatureAttributeName}
                    text-offset-x=\${textOffsetX}
                    text-offset-y=\${textOffsetY}
                    text-size=\${textSize}
                ></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>\`;
})`,...a.parameters?.docs?.source}}};const _=["MapLayerCircleStyleDefault","MapLayerCircleStyleText","MapLayerCircleStyleClustered"];export{a as MapLayerCircleStyleClustered,n as MapLayerCircleStyleDefault,l as MapLayerCircleStyleText,_ as __namedExportsOrder,Y as default};
