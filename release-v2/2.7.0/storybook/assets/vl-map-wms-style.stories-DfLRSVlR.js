import{K as m,L as i,H as p,I as y,u as n,j as e,C as d,bd as c,s as g,x as v}from"./iframe-BRJWU34U.js";import"./vl-map-base-layer-mxB9Jgb1.js";import"./vl-map-base-layer-grb-gray-Di19ej0R.js";import"./vl-map-tiled-wms-layer-DwBMivdU.js";import"./vl-map-wms-layer-D-8YWlSQ.js";import"./preload-helper-D9Z9MdNV.js";const s={...y,sld:""},u={...p,sld:{name:"sld",description:"Bepaalt de Styled Layer Descriptor body van een WMS kaartlaag.<br>Deze XML kan gebruikt worden om de WMS kaartlaag server side te stijlen.<br>Zie http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd<br>Dit attribuut is niet reactief.",table:{type:{summary:i.XML},category:m.ATTRIBUTES,defaultValue:{summary:s.sld}}}};function l(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...n(),...r.components},{FluxMetaData:o}=a;return o||h("FluxMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-wms-style",children:"Map WMS Style"}),`
`,e.jsx(o,{id:"map-layer-wms-layer-wms-style"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-wms-style"})," component om een WMS kaartlaag server side te stijlen.",e.jsx("br",{})]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapWmsStyle } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-wms-style></vl-map-wms-style>
`})}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(a.h2,{id:"referenties",children:"Referenties"}),`
`,e.jsx(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-wms-style--default",rel:"nofollow",children:"Legacy Storybook - Map Wms Style"})}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapWmsStyle.html",rel:"nofollow",children:"Legacy Documentatie - Map Wms Style"})})]})}function w(r={}){const{wrapper:a}={...n(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(l,{...r})}):l(r)}function h(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={id:"map-layer-wms-layer-wms-style",title:"map/layer/wms-layer/wms-style",tags:["autodocs"],args:s,argTypes:u,parameters:{docs:{page:w}}},t=g(s,({sld:r})=>v`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                name="Overstromingsgevaarkaarten"
                version="1.1.0"
                url="https://geoservice.waterinfo.be/wms"
                layers="Overstromingsgevaarkaarten-PLUVIAAL:overstroombaar_gebied_PLU_noCC,Overstromingsgevaarkaarten-FLUVIAAL:overstroombaar_gebied_FLU_noCC"
            >
                <vl-map-wms-style sld=${r}></vl-map-wms-style>
            </vl-map-tiled-wms-layer>
        </vl-map>
    `);t.storyName="vl-map-wms-style - default";t.args={sld:`<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd">
    <NamedLayer>
        <Name>Overstromingsgevaarkaarten-PLUVIAAL:overstroombaar_gebied_PLU_noCC</Name>
        <UserStyle>
            <FeatureTypeStyle>
                <Rule>
                    <RasterSymbolizer>
                        <Opacity>1</Opacity>
                        <ColorMap type="values">
                            <ColorMapEntry color="#800080" quantity="10.0"/>
                            <ColorMapEntry color="#FFFFFF" quantity="100.0" opacity="0"/>
                            <ColorMapEntry color="#FFFFFF" quantity="1000.0" opacity="0"/>
                        </ColorMap>
                    </RasterSymbolizer>
                </Rule>
            </FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
    <NamedLayer>
        <Name>Overstromingsgevaarkaarten-FLUVIAAL:overstroombaar_gebied_FLU_noCC</Name>
        <UserStyle>
            <FeatureTypeStyle>
                <Rule>
                    <RasterSymbolizer>
                        <Opacity>1</Opacity>
                        <ColorMap type="values">
                            <ColorMapEntry color="#800080" quantity="10.0"/>
                            <ColorMapEntry color="#FFFFFF" quantity="100.0" opacity="0"/>
                            <ColorMapEntry color="#FFFFFF" quantity="1000.0" opacity="0"/>
                        </ColorMap>
                    </RasterSymbolizer>
                </Rule>
            </FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
  </StyledLayerDescriptor>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`story(mapWmsStyleArgs, ({
  sld
}) => {
  return html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                name="Overstromingsgevaarkaarten"
                version="1.1.0"
                url="https://geoservice.waterinfo.be/wms"
                layers="Overstromingsgevaarkaarten-PLUVIAAL:overstroombaar_gebied_PLU_noCC,Overstromingsgevaarkaarten-FLUVIAAL:overstroombaar_gebied_FLU_noCC"
            >
                <vl-map-wms-style sld=\${sld}></vl-map-wms-style>
            </vl-map-tiled-wms-layer>
        </vl-map>
    \`;
})`,...t.parameters?.docs?.source}}};const C=["MapWmsStyleDefault"];export{t as MapWmsStyleDefault,C as __namedExportsOrder,f as default};
