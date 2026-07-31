import{Z as m,_ as i,W as p,X as y,u as n,j as e,C as d,b8 as c,s as g,x as v}from"./iframe-BAEsER5t.js";import"./vl-map-base-layer-Ba3ZBrry.js";import"./vl-map-base-layer-grb-gray-Bm2BVNHa.js";import"./vl-map-tiled-wms-layer-D-_OMfSc.js";import"./vl-map-wms-layer-DTEklOSs.js";import"./preload-helper-D9Z9MdNV.js";const s={...y,sld:""},u={...p,sld:{name:"sld",description:"Bepaalt de Styled Layer Descriptor body van een WMS kaartlaag.<br>Deze XML kan gebruikt worden om de WMS kaartlaag server side te stijlen.<br>Zie http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd<br>Dit attribuut is niet reactief.",table:{type:{summary:i.XML},category:m.ATTRIBUTES,defaultValue:{summary:s.sld}}}};function l(r){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...r.components},{FluxComponentMetaData:o}=a;return o||b("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-wms-style",children:"Map WMS Style"}),`
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
`,e.jsx(c,{of:t})]})}function w(r={}){const{wrapper:a}={...n(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(l,{...r})}):l(r)}function b(r,a){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const M={id:"map-layer-wms-layer-wms-style",title:"map/layer/wms-layer/wms-style",tags:["autodocs"],args:s,argTypes:u,parameters:{docs:{page:w}}},t=g(s,({sld:r})=>v`
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
})`,...t.parameters?.docs?.source}}};const _=["MapWmsStyleDefault"];export{t as MapWmsStyleDefault,_ as __namedExportsOrder,M as default};
