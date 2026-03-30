import{Y as m,Z as i,U as p,W as y,u as l,j as e,C as d,bb as c,s as g,x as v}from"./iframe-B6HStWZE.js";import"./vl-map-base-layer-DGZE_dim.js";import"./vl-map-base-layer-grb-gray-BRjzCKoS.js";import"./vl-map-tiled-wms-layer-C9kP5QlP.js";import"./vl-map-wms-layer-C40bVVPb.js";import"./preload-helper-D9Z9MdNV.js";const s={...y,sld:""},u={...p,sld:{name:"sld",description:"Bepaalt de Styled Layer Descriptor body van een WMS kaartlaag.<br>Deze XML kan gebruikt worden om de WMS kaartlaag server side te stijlen.<br>Zie http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd<br>Dit attribuut is niet reactief.",table:{type:{summary:i.XML},category:m.ATTRIBUTES,defaultValue:{summary:s.sld}}}};function n(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...r.components},{FluxComponentMetaData:o}=a;return o||w("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-wms-style",children:"Map WMS Style"}),`
`,e.jsx(o,{id:"map-components-layer-wms-wms-style"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
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
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapWmsStyle.html",rel:"nofollow",children:"Legacy Documentatie - Map Wms Style"})})]})}function h(r={}){const{wrapper:a}={...l(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(n,{...r})}):n(r)}function w(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const C={id:"map-layer-wms-layer-wms-style",title:"map/layer/wms-layer/wms-style",tags:["autodocs"],args:s,argTypes:u,parameters:{docs:{page:h}}},t=g(s,({sld:r})=>v`
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
})`,...t.parameters?.docs?.source}}};const f=["MapWmsStyleDefault"];export{t as MapWmsStyleDefault,f as __namedExportsOrder,C as default};
