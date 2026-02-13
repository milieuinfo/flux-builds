import"./vl-map-base-layer-CnkWBJRC.js";import"./vl-map-base-layer-grb-gray-CrvS-DXx.js";import"./vl-map-layer-circle-style-C46VzGwS.js";import"./vl-map-features-layer-D0V-0ESd.js";import{L as S}from"./vl-map-legend-B94LlyC6.js";import{R as p,U as d,Z as j,Y as T,O as C,P as I,s as i,x as c,u as $,j as r,bh as E,C as m,S as O}from"./iframe-FlvNZLqI.js";import"./vl-map-measure-control-Cv8Urq5f.js";import"./vl-map-action-controls-Bpo5gMVP.js";import"./vl-map-wfs-layer-Gl0Cfku4.js";import"./vl-map-tiled-wms-layer-CLzhFEHd.js";import"./vl-map-vector-layer-B_tYA0Mo.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-draw-action-DRi7vSsY.js";import"./vl-map-layer-action-CXKV-Uy3.js";import"./composite-vector-layer-DIl1Iz9E.js";import"./vl-map-control.mixin-BYPa20Oh.js";import"./vl-map-wms-layer-CBkx5RX1.js";const l={...I,bottom:"",left:"",placement:S.BOTTOM_RIGHT,right:"",top:"",layoutVertical:!1,hideTitle:!1,version:null},k={...C,bottom:{name:"bottom",description:'Bepaalt de "bottom" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:d.STRING},category:p.ATTRIBUTES,defaultValue:{summary:l.bottom}}},left:{name:"left",description:'Bepaalt de "left" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:d.STRING},category:p.ATTRIBUTES,defaultValue:{summary:l.left}}},placement:{name:"placement",description:"Bepaalt de plaats van de legende op de kaart.",control:{type:T.SELECT},options:Object.values(S),table:{type:{summary:j(Object.values(S))},category:p.ATTRIBUTES,defaultValue:{summary:l.placement}}},right:{name:"right",description:'Bepaalt de "right" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:d.STRING},category:p.ATTRIBUTES,defaultValue:{summary:l.right}}},top:{name:"top",description:'Bepaalt de "top" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:d.STRING},category:p.ATTRIBUTES,defaultValue:{summary:l.top}}},layoutVertical:{name:"layout-vertical",description:"Zet de layout van de legende in verticale positie.",table:{type:{summary:d.BOOLEAN},category:p.ATTRIBUTES,defaultValue:{summary:String(l.layoutVertical)}}},hideTitle:{name:"hide-title",description:'Laat de "Legende" titel weg.',table:{type:{summary:d.BOOLEAN},category:p.ATTRIBUTES,defaultValue:{summary:String(l.hideTitle)}}},version:{name:"version",description:'Voeg een "version" parameter toe aan de legende url.',table:{type:{summary:d.STRING},category:p.ATTRIBUTES,defaultValue:{summary:l.version}}}},F=()=>{document.addEventListener("DOMContentLoaded",async()=>{await document.getElementById("map")?.ready,document.querySelector("#style-1").appliesTo=e=>e.get("styleId")==="style-1",document.querySelector("#style-2").appliesTo=e=>e.get("styleId")==="style-2",document.querySelector("#style-3").appliesTo=e=>e.get("styleId")==="style-3"})},P=i(l,({bottom:a,left:e,placement:t,right:o,top:s,layoutVertical:n})=>{const L={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{styleId:"style-1"}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{styleId:"style-2"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{styleId:"style-3"}}]};return F(),c` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${L} name="Shapes">
            <vl-map-layer-circle-style
                id="style-1"
                name="Openbaar onderzoek"
                color="#ffe615"
                size="5"
                border-color="#000"
                border-size="1"
            ></vl-map-layer-circle-style>
            <vl-map-layer-circle-style
                id="style-2"
                name="Beslissing"
                color="red"
                size="5"
                border-color="#000"
                border-size="1"
            ></vl-map-layer-circle-style>
            <vl-map-layer-style
                id="style-3"
                name="Wateroppervlaktes"
                color="rgba(255,0,0,0.5)"
                border-color="rgba(255,255,100,1)"
                border-size="2"
                text-feature-attribute-name="label"
                text-background-color="rgba(0,0,255,0.2)"
                text-border-color="rgba(0,255,0,1)"
                text-border-size="3"
                text-color="rgba(255,0,0,1)"
                text-offset-x="10"
                text-offset-y="-10"
                text-size="13px"
            ></vl-map-layer-style>
        </vl-map-features-layer>
        <vl-map-legend
            placement=${t}
            layout-vertical=${n}
            bottom=${a}
            top=${s}
            right=${o}
            left=${e}
        ></vl-map-legend>
    </vl-map>`}),B=i(l,({bottom:a,left:e,placement:t,right:o,top:s,layoutVertical:n,hideTitle:L})=>c` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]}}]}} name="Laag 1">
            <vl-map-layer-circle-style
                name="Openbaar onderzoek"
                color="#ffe615"
                size="5"
                border-color="#000"
                border-size="1"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-legend
            placement=${t}
            layout-vertical=${n}
            hide-title=${L}
            bottom=${a}
            top=${s}
            right=${o}
            left=${e}
        ></vl-map-legend>
    </vl-map>`),W=i(l,({bottom:a,left:e,placement:t,right:o,top:s,layoutVertical:n})=>c` <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-features-layer name="Measurements" projection-code="EPSG:31370">
            <vl-map-layer-style border-size="2"></vl-map-layer-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{featureCharacter:"O",zIndex:"1"}},{type:"Feature",geometry:{type:"Point",coordinates:[147075,197908]},properties:{featureCharacter:"O",zIndex:"2"}},{type:"Feature",geometry:{type:"Point",coordinates:[147095,197908]},properties:{featureCharacter:"O",zIndex:"3"}},{type:"Feature",geometry:{type:"Point",coordinates:[147105,197908]},properties:{featureCharacter:"O",zIndex:"4"}},{type:"Feature",geometry:{type:"Point",coordinates:[147106,197908]},properties:{featureCharacter:"O",zIndex:"5"}}]}} name="Openbare onderzoeken" projection-code="EPSG:31370">
            <vl-map-layer-circle-style
                color="#ffe615"
                size="10"
                border-color="#000"
                border-size="1"
                text-feature-attribute-name="featureCharacter"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{featureCharacter:"B",zIndex:"5"}}]}} name="Beslissingen" projection-code="EPSG:31370">
            <vl-map-layer-circle-style
                color="red"
                size="10"
                border-color="#000"
                text-feature-attribute-name="featureCharacter"
                border-size="1"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{featureCharacter:"W",zIndex:"5"}}]}} name="Wateroppervlaktes" projection-code="EPSG:31370">
            <vl-map-layer-circle-style
                color="green"
                size="10"
                border-color="#000"
                text-feature-attribute-name="featureCharacter"
                border-size="1"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-legend
            placement=${t}
            layout-vertical=${n}
            bottom=${a}
            top=${s}
            right=${o}
            left=${e}
        ></vl-map-legend>
    </vl-map>`),N=i(l,({bottom:a,left:e,placement:t,right:o,top:s,layoutVertical:n})=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-wfs-layer
                name="Oppervlaktewaterlichamen"
                url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                layers="owl_l"
                max-resolution="8"
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style
                    color="#ffe615"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
            </vl-map-wfs-layer>
            <vl-map-legend
                placement=${t}
                layout-vertical=${n}
                bottom=${a}
                top=${s}
                right=${o}
                left=${e}
            ></vl-map-legend>
        </vl-map>
    `),R=i(l,({bottom:a,left:e,placement:t,right:o,top:s,layoutVertical:n})=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                layers="grondwater:beschermingszones_2014"
                name="Beschermingszones"
                url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-legend
                placement=${t}
                layout-vertical=${n}
                bottom=${a}
                top=${s}
                right=${o}
                left=${e}
            ></vl-map-legend>
        </vl-map>
    `),G=i(l,({bottom:a,left:e,placement:t,right:o,top:s,layoutVertical:n})=>c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                layers="grondwater:beschermingszones_2014"
                name="Beschermingszones"
                url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-wfs-layer
                name="Oppervlaktewaterlichamen"
                url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                layers="owl_l"
                max-resolution="8"
            >
                <vl-map-layer-circle-style
                    color="#ffe615"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
            </vl-map-wfs-layer>
            <vl-map-legend
                placement=${t}
                layout-vertical=${n}
                bottom=${a}
                top=${s}
                right=${o}
                left=${e}
            ></vl-map-legend>
        </vl-map>
    `),V=i(l,({bottom:a,left:e,placement:t,right:o,top:s,layoutVertical:n})=>c` <vl-map lambert2008>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-features-layer name="Measurements" projection-code="EPSG:31370">
            <vl-map-layer-style border-size="2"></vl-map-layer-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{featureCharacter:"O",zIndex:"1"}},{type:"Feature",geometry:{type:"Point",coordinates:[147075,197908]},properties:{featureCharacter:"O",zIndex:"2"}},{type:"Feature",geometry:{type:"Point",coordinates:[147095,197908]},properties:{featureCharacter:"O",zIndex:"3"}},{type:"Feature",geometry:{type:"Point",coordinates:[147105,197908]},properties:{featureCharacter:"O",zIndex:"4"}},{type:"Feature",geometry:{type:"Point",coordinates:[147106,197908]},properties:{featureCharacter:"O",zIndex:"5"}}]}} name="Openbare onderzoeken" projection-code="EPSG:31370">
            <vl-map-layer-circle-style
                color="#ffe615"
                size="10"
                border-color="#000"
                border-size="1"
                text-feature-attribute-name="featureCharacter"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{featureCharacter:"B",zIndex:"5"}}]}} name="Beslissingen" projection-code="EPSG:31370">
            <vl-map-layer-circle-style
                color="red"
                size="10"
                border-color="#000"
                text-feature-attribute-name="featureCharacter"
                border-size="1"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{featureCharacter:"W",zIndex:"5"}}]}} name="Wateroppervlaktes" projection-code="EPSG:31370">
            <vl-map-layer-circle-style
                color="green"
                size="10"
                border-color="#000"
                text-feature-attribute-name="featureCharacter"
                border-size="1"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-legend
            placement=${t}
            layout-vertical=${n}
            bottom=${a}
            top=${s}
            right=${o}
            left=${e}
        >
            <vl-map-legend-item layer="Openbare onderzoeken">
                <span slot="label">Custom Openbare onderzoeken 1</span>
                <span slot="icon"
                    ><div
                        style=${`
                        height: 0.8em;
                        width: 0.8em;
                        border: 1px solid #000;
                        background-color:yellow;
                        border-radius: 50%;`}
                    ></div>
                </span>
            </vl-map-legend-item>
            <vl-map-legend-item layer="Measurements"> </vl-map-legend-item>
            <vl-map-legend-item layer="Openbare onderzoeken">
                <span slot="label">Custom Openbare onderzoeken 2</span>
                <span slot="icon"
                    ><div
                        style=${`
                        height: 0.8em;
                        width: 0.8em;
                        border: 1px solid #000;
                        background-color:purple;`}
                    ></div>
                </span>
            </vl-map-legend-item>
        </vl-map-legend>
    </vl-map>`),A=i(l,({bottom:a,left:e,placement:t,right:o,top:s})=>{const n={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{styleId:"style-1"}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{styleId:"style-2"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{styleId:"style-3"}}]};return F(),c`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                layers="grondwater:beschermingszones_2014"
                name="Beschermingszones"
                url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-features-layer .features=${n} name="Shapes" projection-code="EPSG:31370">
                <vl-map-layer-circle-style
                    id="style-1"
                    name="Openbaar onderzoek"
                    color="#ffe615"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-circle-style
                    id="style-2"
                    name="Beslissing"
                    color="red"
                    size="5"
                    border-color="#000"
                    border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-style
                    id="style-3"
                    name="Wateroppervlaktes"
                    color="rgba(255,0,0,0.5)"
                    border-color="rgba(255,255,100,1)"
                    border-size="2"
                    text-feature-attribute-name="label"
                    text-background-color="rgba(0,0,255,0.2)"
                    text-border-color="rgba(0,255,0,1)"
                    text-border-size="3"
                    text-color="rgba(255,0,0,1)"
                    text-offset-x="10"
                    text-offset-y="-10"
                    text-size="13px"
                ></vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend
                placement=${t}
                layout-vertical
                bottom=${a}
                top=${s}
                right=${o}
                left=${e}
            ></vl-map-legend>
        </vl-map>
    `}),_=`export const linkStylesToFeatures = () => {
    document.addEventListener('DOMContentLoaded', async () => {
        const map: any = document.getElementById('map');
        await map?.ready;
        (document.querySelector('#style-1') as any).appliesTo = (feature) => feature.get('styleId') === 'style-1';
        (document.querySelector('#style-2') as any).appliesTo = (feature) => feature.get('styleId') === 'style-2';
        (document.querySelector('#style-3') as any).appliesTo = (feature) => feature.get('styleId') === 'style-3';
    });
};
`;function M(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...$(),...a.components},{FluxComponentMetaData:t}=e;return t||U("FluxComponentMetaData"),r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"map-legend",children:"Map Legend"}),`
`,r.jsx(t,{id:"map-components-legend"}),`
`,r.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,r.jsxs(e.p,{children:["Gebruik de ",r.jsx(e.code,{children:"map-legend"})," component om een legende af te beelden op de kaart."]}),`
`,r.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-js",children:`import { VlMapLegend } from '@domg-wc/map';
`})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<vl-map-legend></vl-map-legend>
`})}),`
`,r.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,r.jsx(E,{of:y}),`
`,r.jsx(e.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,r.jsx(e.h3,{id:"features-layer-multiple-styles",children:"Features Layer Multiple Styles"}),`
`,r.jsx(e.p,{children:"Zie onder de story voor de TypeScript code."}),`
`,r.jsx(m,{of:y}),`
`,r.jsxs("details",{children:[r.jsx("summary",{children:"TypeScript code"}),r.jsx(O,{code:_,language:"ts",dark:!0})]}),`
`,r.jsx(e.h3,{id:"features-layer",children:"Features Layer"}),`
`,r.jsx(m,{of:u}),`
`,r.jsx(e.h3,{id:"multiple-features-layers",children:"Multiple Features Layers"}),`
`,r.jsx(m,{of:g}),`
`,r.jsx(e.h3,{id:"wfs-layer",children:"WFS Layer"}),`
`,r.jsx(m,{of:v}),`
`,r.jsx(e.h3,{id:"wms-layer",children:"WMS Layer"}),`
`,r.jsx(m,{of:f}),`
`,r.jsx(e.h3,{id:"wms-wfs-layer-combination",children:"WMS WFS Layer Combination"}),`
`,r.jsx(m,{of:b}),`
`,r.jsx(e.h3,{id:"custom-legend-items",children:"Custom legend items"}),`
`,r.jsx(m,{of:h}),`
`,r.jsx(e.h3,{id:"custom-legend-layout-vertical",children:"Custom legend layout vertical"}),`
`,r.jsx(m,{of:x}),`
`,r.jsx(e.h2,{id:"referenties",children:"Referenties"}),`
`,r.jsx(e.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),`
`,r.jsx(e.p,{children:r.jsx(e.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-legend-vl-map-legend-wfs-layer--default",rel:"nofollow",children:"Legacy Storybook - Map Legend Wfs Layer"})})]})}function D(a={}){const{wrapper:e}={...$(),...a.components};return e?r.jsx(e,{...a,children:r.jsx(M,{...a})}):M(a)}function U(a,e){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}const me={id:"map-legend",title:"map/legend",tags:["autodocs"],args:l,argTypes:k,parameters:{docs:{page:D}}},u=B;u.storyName="vl-map-legend - features-layer";const y=P;y.storyName="vl-map-legend - features-layer multiple styles";const g=W;g.storyName="vl-map-legend - multiple features-layers";const v=N;v.storyName="vl-map-legend - wfs-layer";const f=R;f.storyName="vl-map-legend - wms-layer";const b=G;b.storyName="vl-map-legend - wms - wfs -layer";const h=V;h.storyName="vl-map-legend - custom items";const x=A;x.storyName="vl-map-legend - layout vertical";u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"MLFL",...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"MLFLMS",...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"MLMFL",...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"MLWFSL",...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"MLWMSL",...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"MLWMSWFSL",...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"MLCI",...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"MLLV",...x.parameters?.docs?.source}}};const ie=["MapLegendFeaturesLayer","MapLegendFeaturesLayerMultipleStyles","MapLegendMultipleFeaturesLayers","MapLegendWfsLayer","MapLegendWmsLayer","MapLegendWmsWfsLayer","MapLegendCustomItems","MapLegendLayoutVertical"];export{h as MapLegendCustomItems,u as MapLegendFeaturesLayer,y as MapLegendFeaturesLayerMultipleStyles,x as MapLegendLayoutVertical,g as MapLegendMultipleFeaturesLayers,v as MapLegendWfsLayer,f as MapLegendWmsLayer,b as MapLegendWmsWfsLayer,ie as __namedExportsOrder,me as default};
