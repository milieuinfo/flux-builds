"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3383],{"../../libs/map/src/components/legend/stories/vl-map-legend.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{MapLegendCustomItems:()=>T,MapLegendFeaturesLayer:()=>C,MapLegendFeaturesLayerMultipleStyles:()=>L,MapLegendLayoutVertical:()=>k,MapLegendMultipleFeaturesLayers:()=>j,MapLegendWfsLayer:()=>M,MapLegendWmsLayer:()=>S,MapLegendWmsWfsLayer:()=>F,__namedExportsOrder:()=>z,default:()=>w}),a("../../libs/map/src/vl-map.ts"),a("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),a("../../libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),a("../../libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts"),a("../../libs/map/src/components/legend/vl-map-legend.ts");var r=a("../../libs/common/storybook/src/index.ts"),l=a("../../node_modules/lit/index.js");a("../../libs/map/src/components/layer-style/vl-map-layer-style.ts");var s=a("../../libs/map/src/components/legend/vl-map-legend.defaults.ts");let o={...r.D8,bottom:"",left:"",placement:s.s.BOTTOM_RIGHT,right:"",top:"",layoutVertical:!1,hideTitle:!1,version:null},n={...(0,r.RN)(),bottom:{name:"bottom",description:'Bepaalt de "bottom" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:o.bottom}}},left:{name:"left",description:'Bepaalt de "left" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:o.left}}},placement:{name:"data-vl-placement",description:"Bepaalt de plaats van de legende op de kaart.",control:{type:r.VH.SELECT},options:Object.values(s.s),table:{type:{summary:(0,r.uf)(Object.values(s.s))},category:r.R6.ATTRIBUTES,defaultValue:{summary:o.placement}}},right:{name:"right",description:'Bepaalt de "right" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:o.right}}},top:{name:"top",description:'Bepaalt de "top" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:o.top}}},layoutVertical:{name:"data-vl-layout-vertical",description:"Zet de layout van de legende in verticale positie.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:o.layoutVertical}}},hideTitle:{name:"data-vl-hide-title",description:'Laat de "Legende" titel weg.',table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:o.hideTitle}}},version:{name:"data-vl-version",description:'Voeg een "version" parameter toe aan de legende url.',table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:o.version}}}},i=()=>{document.addEventListener("DOMContentLoaded",async()=>{let e=document.getElementById("map");await e?.ready,document.querySelector("#style-1").appliesTo=e=>"style-1"===e.get("styleId"),document.querySelector("#style-2").appliesTo=e=>"style-2"===e.get("styleId"),document.querySelector("#style-3").appliesTo=e=>"style-3"===e.get("styleId")})},d=(0,r._7)(o,({bottom:e,left:t,placement:a,right:r,top:s,layoutVertical:o})=>(i(),(0,l.qy)` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{styleId:"style-1"}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{styleId:"style-2"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{styleId:"style-3"}}]}} data-vl-name="Shapes">
            <vl-map-layer-circle-style
                id="style-1"
                data-vl-name="Openbaar onderzoek"
                data-vl-color="#ffe615"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
            <vl-map-layer-circle-style
                id="style-2"
                data-vl-name="Beslissing"
                data-vl-color="red"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
            <vl-map-layer-style
                id="style-3"
                data-vl-name="Wateroppervlaktes"
                data-vl-color="rgba(255,0,0,0.5)"
                data-vl-border-color="rgba(255,255,100,1)"
                data-vl-border-size="2"
                data-vl-text-feature-attribute-name="label"
                data-vl-text-background-color="rgba(0,0,255,0.2)"
                data-vl-text-border-color="rgba(0,255,0,1)"
                data-vl-text-border-size="3"
                data-vl-text-color="rgba(255,0,0,1)"
                data-vl-text-offset-x="10"
                data-vl-text-offset-y="-10"
                data-vl-text-size="13px"
            ></vl-map-layer-style>
        </vl-map-features-layer>
        <vl-map-legend
            data-vl-placement=${a}
            data-vl-layout-vertical=${o}
            bottom=${e}
            top=${s}
            right=${r}
            left=${t}
        ></vl-map-legend>
    </vl-map>`));var c=a("../../node_modules/lit-html/lit-html.js");let m=(0,r._7)(o,({bottom:e,left:t,placement:a,right:r,top:l,layoutVertical:s,hideTitle:o})=>(0,c.qy)` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]}}]}} data-vl-name="Laag 1">
            <vl-map-layer-circle-style
                data-vl-name="Openbaar onderzoek"
                data-vl-color="#ffe615"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-legend
            data-vl-placement=${a}
            data-vl-layout-vertical=${s}
            data-vl-hide-title=${o}
            bottom=${e}
            top=${l}
            right=${r}
            left=${t}
        ></vl-map-legend>
    </vl-map>`);a("../../libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts"),a("../../libs/map/src/components/controls/measure-control/vl-map-measure-control.ts"),a("../../libs/map/src/components/controls/vl-map-action-controls.ts");let p=(0,r._7)(o,({bottom:e,left:t,placement:a,right:r,top:l,layoutVertical:s})=>(0,c.qy)` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-features-layer data-vl-name="Measurements">
            <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{featureCharacter:"O",zIndex:"1"}},{type:"Feature",geometry:{type:"Point",coordinates:[147075,197908]},properties:{featureCharacter:"O",zIndex:"2"}},{type:"Feature",geometry:{type:"Point",coordinates:[147095,197908]},properties:{featureCharacter:"O",zIndex:"3"}},{type:"Feature",geometry:{type:"Point",coordinates:[147105,197908]},properties:{featureCharacter:"O",zIndex:"4"}},{type:"Feature",geometry:{type:"Point",coordinates:[147106,197908]},properties:{featureCharacter:"O",zIndex:"5"}}]}} data-vl-name="Openbare onderzoeken">
            <vl-map-layer-circle-style
                data-vl-color="#ffe615"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-border-size="1"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{featureCharacter:"B",zIndex:"5"}}]}} data-vl-name="Beslissingen">
            <vl-map-layer-circle-style
                data-vl-color="red"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{featureCharacter:"W",zIndex:"5"}}]}} data-vl-name="Wateroppervlaktes">
            <vl-map-layer-circle-style
                data-vl-color="green"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-legend
            data-vl-placement=${a}
            data-vl-layout-vertical=${s}
            bottom=${e}
            top=${l}
            right=${r}
            left=${t}
        ></vl-map-legend>
    </vl-map>`);a("../../libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts");let u=(0,r._7)(o,({bottom:e,left:t,placement:a,right:r,top:s,layoutVertical:o})=>(0,l.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-wfs-layer
                data-vl-name="Oppervlaktewaterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="8"
            >
                <vl-map-layer-circle-style
                    data-vl-color="#ffe615"
                    data-vl-size="5"
                    data-vl-border-color="#000"
                    data-vl-border-size="1"
                ></vl-map-layer-circle-style>
            </vl-map-wfs-layer>
            <vl-map-legend
                data-vl-placement=${a}
                data-vl-layout-vertical=${o}
                bottom=${e}
                top=${s}
                right=${r}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `),y=(0,r._7)(o,({bottom:e,left:t,placement:a,right:r,top:s,layoutVertical:o})=>(0,l.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                data-vl-layers="grondwater:beschermingszones_2014"
                data-vl-name="Beschermingszones"
                data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-legend
                data-vl-placement=${a}
                data-vl-layout-vertical=${o}
                bottom=${e}
                top=${s}
                right=${r}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `),v=(0,r._7)(o,({bottom:e,left:t,placement:a,right:r,top:s,layoutVertical:o})=>(0,l.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                data-vl-layers="grondwater:beschermingszones_2014"
                data-vl-name="Beschermingszones"
                data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-wfs-layer
                data-vl-name="Oppervlaktewaterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="8"
            >
                <vl-map-layer-circle-style
                    data-vl-color="#ffe615"
                    data-vl-size="5"
                    data-vl-border-color="#000"
                    data-vl-border-size="1"
                ></vl-map-layer-circle-style>
            </vl-map-wfs-layer>
            <vl-map-legend
                data-vl-placement=${a}
                data-vl-layout-vertical=${o}
                bottom=${e}
                top=${s}
                right=${r}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `);a("../../libs/map/src/components/legend-item/vl-map-legend-item.ts");let g=(0,r._7)(o,({bottom:e,left:t,placement:a,right:r,top:l,layoutVertical:s})=>(0,c.qy)` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-features-layer data-vl-name="Measurements">
            <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{featureCharacter:"O",zIndex:"1"}},{type:"Feature",geometry:{type:"Point",coordinates:[147075,197908]},properties:{featureCharacter:"O",zIndex:"2"}},{type:"Feature",geometry:{type:"Point",coordinates:[147095,197908]},properties:{featureCharacter:"O",zIndex:"3"}},{type:"Feature",geometry:{type:"Point",coordinates:[147105,197908]},properties:{featureCharacter:"O",zIndex:"4"}},{type:"Feature",geometry:{type:"Point",coordinates:[147106,197908]},properties:{featureCharacter:"O",zIndex:"5"}}]}} data-vl-name="Openbare onderzoeken">
            <vl-map-layer-circle-style
                data-vl-color="#ffe615"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-border-size="1"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{featureCharacter:"B",zIndex:"5"}}]}} data-vl-name="Beslissingen">
            <vl-map-layer-circle-style
                data-vl-color="red"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{featureCharacter:"W",zIndex:"5"}}]}} data-vl-name="Wateroppervlaktes">
            <vl-map-layer-circle-style
                data-vl-color="green"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-legend
            data-vl-placement=${a}
            data-vl-layout-vertical=${s}
            bottom=${e}
            top=${l}
            right=${r}
            left=${t}
        >
            <vl-map-legend-item data-vl-layer="Openbare onderzoeken">
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
            <vl-map-legend-item data-vl-layer="Measurements"> </vl-map-legend-item>
            <vl-map-legend-item data-vl-layer="Openbare onderzoeken">
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
    </vl-map>`);a("../../libs/map/src/components/layer/wms-layer/vl-map-tiled-wms-layer/vl-map-tiled-wms-layer.ts");let h=(0,r._7)(o,({bottom:e,left:t,placement:a,right:r,top:s})=>(i(),(0,l.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                data-vl-layers="grondwater:beschermingszones_2014"
                data-vl-name="Beschermingszones"
                data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{styleId:"style-1"}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{styleId:"style-2"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{styleId:"style-3"}}]}} data-vl-name="Shapes">
                <vl-map-layer-circle-style
                    id="style-1"
                    data-vl-name="Openbaar onderzoek"
                    data-vl-color="#ffe615"
                    data-vl-size="5"
                    data-vl-border-color="#000"
                    data-vl-border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-circle-style
                    id="style-2"
                    data-vl-name="Beslissing"
                    data-vl-color="red"
                    data-vl-size="5"
                    data-vl-border-color="#000"
                    data-vl-border-size="1"
                ></vl-map-layer-circle-style>
                <vl-map-layer-style
                    id="style-3"
                    data-vl-name="Wateroppervlaktes"
                    data-vl-color="rgba(255,0,0,0.5)"
                    data-vl-border-color="rgba(255,255,100,1)"
                    data-vl-border-size="2"
                    data-vl-text-feature-attribute-name="label"
                    data-vl-text-background-color="rgba(0,0,255,0.2)"
                    data-vl-text-border-color="rgba(0,255,0,1)"
                    data-vl-text-border-size="3"
                    data-vl-text-color="rgba(255,0,0,1)"
                    data-vl-text-offset-x="10"
                    data-vl-text-offset-y="-10"
                    data-vl-text-size="13px"
                ></vl-map-layer-style>
            </vl-map-features-layer>
            <vl-map-legend
                data-vl-placement=${a}
                data-vl-layout-vertical
                bottom=${e}
                top=${s}
                right=${r}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `));a("../../node_modules/react/index.js");var b=a("../../node_modules/react/jsx-runtime.js"),f=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_=a("../../node_modules/@storybook/blocks/dist/index.mjs");function x(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,f.RP)(),e.components),{VluxMetaData:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.h1,{id:"map-legend",children:"Map Legend"}),"\n",(0,b.jsx)(a,{id:"map-legend"}),"\n",(0,b.jsxs)(t.p,{children:["Gebruik de ",(0,b.jsx)(t.code,{children:"map-legend"})," component om een legende af te beelden op de kaart."]}),"\n",(0,b.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:"language-js",children:"import { VlMapLegend } from '@domg-wc/map';\n"})}),"\n",(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:"language-html",children:"<vl-map-legend></vl-map-legend>\n"})}),"\n",(0,b.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,b.jsx)(_.ov,{of:L}),"\n",(0,b.jsx)(t.h2,{id:"voorbeelden",children:"Voorbeelden"}),"\n",(0,b.jsx)(t.h3,{id:"features-layer-multiple-styles",children:"Features Layer Multiple Styles"}),"\n",(0,b.jsx)(t.p,{children:"Zie onder de story voor de TypeScript code."}),"\n",(0,b.jsx)(_.Hl,{of:L}),"\n",(0,b.jsxs)("details",{children:[(0,b.jsx)("summary",{children:"TypeScript code"}),(0,b.jsx)(_.kL,{code:"export const linkStylesToFeatures = ()=>{\n    document.addEventListener('DOMContentLoaded', async ()=>{\n        const map = document.getElementById('map');\n        await map?.ready;\n        document.querySelector('#style-1').appliesTo = (feature)=>feature.get('styleId') === 'style-1';\n        document.querySelector('#style-2').appliesTo = (feature)=>feature.get('styleId') === 'style-2';\n        document.querySelector('#style-3').appliesTo = (feature)=>feature.get('styleId') === 'style-3';\n    });\n};\n",language:"ts",dark:!0})]}),"\n",(0,b.jsx)(t.h3,{id:"features-layer",children:"Features Layer"}),"\n",(0,b.jsx)(_.Hl,{of:C}),"\n",(0,b.jsx)(t.h3,{id:"multiple-features-layers",children:"Multiple Features Layers"}),"\n",(0,b.jsx)(_.Hl,{of:j}),"\n",(0,b.jsx)(t.h3,{id:"wfs-layer",children:"WFS Layer"}),"\n",(0,b.jsx)(_.Hl,{of:M}),"\n",(0,b.jsx)(t.h3,{id:"wms-layer",children:"WMS Layer"}),"\n",(0,b.jsx)(_.Hl,{of:S}),"\n",(0,b.jsx)(t.h3,{id:"wms-wfs-layer-combination",children:"WMS WFS Layer Combination"}),"\n",(0,b.jsx)(_.Hl,{of:F}),"\n",(0,b.jsx)(t.h3,{id:"custom-legend-items",children:"Custom legend items"}),"\n",(0,b.jsx)(_.Hl,{of:T}),"\n",(0,b.jsx)(t.h3,{id:"custom-legend-layout-vertical",children:"Custom legend layout vertical"}),"\n",(0,b.jsx)(_.Hl,{of:k}),"\n",(0,b.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,b.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,b.jsx)(t.p,{children:(0,b.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-legend-vl-map-legend-wfs-layer--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Legend Wfs Layer"})})]})}let w={id:"map-legend",title:"map/legend",tags:["autodocs"],args:o,argTypes:n,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,f.RP)(),e.components);return t?(0,b.jsx)(t,Object.assign({},e,{children:(0,b.jsx)(x,e)})):x(e)}}}},C=m;C.storyName="vl-map-legend - features-layer";let L=d;L.storyName="vl-map-legend - features-layer multiple styles";let j=p;j.storyName="vl-map-legend - multiple features-layers";let M=u;M.storyName="vl-map-legend - wfs-layer";let S=y;S.storyName="vl-map-legend - wms-layer";let F=v;F.storyName="vl-map-legend - wms - wfs -layer";let T=g;T.storyName="vl-map-legend - custom items";let k=h;k.storyName="vl-map-legend - layout vertical",C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"MLFL",...C.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"MLFLMS",...L.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"MLMFL",...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"MLWFSL",...M.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"MLWMSL",...S.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"MLWMSWFSL",...F.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"MLCI",...T.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"MLLV",...k.parameters?.docs?.source}}};let z=["MapLegendFeaturesLayer","MapLegendFeaturesLayerMultipleStyles","MapLegendMultipleFeaturesLayers","MapLegendWfsLayer","MapLegendWmsLayer","MapLegendWmsWfsLayer","MapLegendCustomItems","MapLegendLayoutVertical"]},"../../libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts":(e,t,a)=>{var r=a("../../libs/common/utilities/src/index.ts"),l=a("../../node_modules/ol/Overlay.js"),s=a("../../node_modules/ol/Observable.js"),o=a("../../libs/map/src/actions/draw/draw-action.ts");class n extends o.r{constructor(e,t){super(e,"LineString",()=>{(0,s.e)(this.measurePointermoveHandler)},{...t,maxPoints:2,geometryName:"measurement"}),this.featureCounter=0,this.measurementTooltips=[]}activate(){this.drawStartHandler=this.drawInteraction.on("drawstart",e=>{this._handleDrawStart(e)}),this.drawEndHandler=this.drawInteraction.on("drawend",()=>{this._setMeasurementTooltipsClosable(!0)}),this.removeFeatureHandler=this.layer.getSource().on("removefeature",e=>{this._handleRemoveFeature(e)}),super.activate()}_setMeasurementTooltipsClosable(e){this.measurementTooltips.forEach(t=>{let a="data-vl-closable",r=t.getElement();t&&r&&(e?r.setAttribute(a,e):r.removeAttribute(a))})}_setMeasurementTooltipsVisible(e){this.measurementTooltips.forEach(t=>{let a="hidden",r=t.getElement();t&&r&&(e?r.removeAttribute(a):r.setAttribute(a,!0))})}_showMeasurementTooltip(e,t,a){let r=e.getGeometry().getLength().toFixed(2);a.textContent=`${r} m`,t.setElement(a),t.setPosition(e.getGeometry().getLastCoordinate())}_handleDrawStart({feature:e}){let t=this.featureCounter;this.featureCounter+=1,this._setMeasurementTooltipsClosable(!1),e.setId(t);let a=document.createElement("vl-pill");a.isInMap=!0,a.addEventListener("close",t=>{this._handleRemoveMeasurement(t,e)},{once:!0});let r=new l.A({offset:[0,40],positioning:"bottom-center",stopEvent:!0,insertFirst:!0});r.set("featureId",t),this.map.addOverlay(r),this.measurementTooltips=[...this.measurementTooltips,r],this.measurePointermoveHandler=this.map.on("pointermove",()=>{this._showMeasurementTooltip(e,r,a)})}_removeMeasureFeature(e){let t=this.layer.getSource();e&&(null==e.getId()||t.getFeatureById(e.getId())===e)&&(t.removeFeature(e),this.map.render())}_removeMeasurementTooltip(e){let t=this.getTooltipFor(e);this.map.removeOverlay(t),this.measurementTooltips=this.measurementTooltips.filter(t=>this._getFeatureIdFor(t)!==e)}_handleRemoveMeasurement(e,t){e.stopPropagation(),this._removeMeasurementTooltip(t.getId()),this._removeMeasureFeature(t)}_handleRemoveFeature(e){this._removeMeasurementTooltip(e.feature.getId())}_cleanUp(e){(0,s.e)(this.measurePointermoveHandler),e&&this.measurementTooltips.forEach(e=>{let t=this._getFeatureIdFor(e);null==this.layer.getSource().getFeatureById(t)&&this._removeMeasurementTooltip(t)})}getTooltipFor(e){return this.measurementTooltips.find(t=>this._getFeatureIdFor(t)===e)}_getFeatureIdFor(e){return e.get("featureId")}handleLayerVisibilityChange(){this._setMeasurementTooltipsVisible(this.layer.getVisible())}deactivate(){this._setMeasurementTooltipsClosable(!0),this._cleanUp(!0),(0,s.e)(this.drawStartHandler),(0,s.e)(this.drawEndHandler),(0,s.e)(this.removeFeatureHandler),super.deactivate()}stop(){super.stop(),this._setMeasurementTooltipsClosable(!0),this._cleanUp(!0)}}var i=a("../../libs/map/src/vl-map.model.ts"),d=a("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class c extends d.H{constructor(){super(),this.identifier=i.cS.MEASURE}_createAction(e){return new n(e,this.__drawOptions)}}c=function(e,t,a,r){var l,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,a,o):l(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o}([(0,r.M1)("vl-map-measure-action")],c)},"../../libs/map/src/components/controls/measure-control/vl-map-measure-control.ts":(e,t,a)=>{var r=a("../../libs/common/utilities/src/index.ts"),l=a("../../libs/components/src/index.ts"),s=a("../../node_modules/ol/Observable.js"),o=a("../../libs/map/src/vl-map.model.ts"),n=a("../../libs/map/src/components/controls/vl-map-control.mixin.ts");class i extends(0,n.i)(r.jW){static{(0,r.gy)([l.Ug])}constructor(){super(),this.controlElement=document.createElement("vl-toggle-button"),this.controlElement.innerText="Meten",this.identifier=o.cS.MEASURE,this.type=o.$c.ACTION}connectedCallback(){super.connectedCallback(),this.clickListener=this.controlElement.addEventListener("click",()=>this.handleMeasureControlClick())}getAction(){return this.map.getActionWithIdentifier(this.identifier)}handleMeasureControlClick(){let e=this.getAction();e&&(this.controlElement.active?e.element.deactivate():e.element.activate())}setActive(e){this.controlElement.active=e}setDisabled(e){this.controlElement.disabled=e}disconnectedCallback(){super.disconnectedCallback(),(0,s.e)(this.clickListener)}}i=function(e,t,a,r){var l,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,a,o):l(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o}([(0,r.M1)("vl-map-measure-control")],i)},"../../libs/map/src/components/controls/vl-map-action-controls.ts":(e,t,a)=>{var r=a("../../node_modules/lit/index.js"),l=a("../../node_modules/lit/decorators.js");let s=(0,r.AH)`
    div {
        position: absolute;
        right: 0px;
        z-index: 1;
        display: flex;
        column-gap: 10px;
        padding: 10px;
    }
`;var o=a("../../libs/common/utilities/src/index.ts");class n extends o.jW{static get styles(){return[s]}connectedCallback(){super.connectedCallback(),this.actionControls.forEach(e=>{e.addEventListener("change-control",t=>{let a=e.getAttribute("data-vl-action-id");this.handleActionControlChange(a,t)})})}render(){return(0,r.qy)`
            <div>
                <slot></slot>
            </div>
        `}get actionControls(){return this.querySelectorAll("vl-map-action-control")}handleActionControlChange(e,t){t.detail?.isActive&&[...this.actionControls].filter(t=>t.getAttribute("data-vl-action-id")!==e).filter(e=>e.active).forEach(e=>e.deactivate())}}n=function(e,t,a,r){var l,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,a,o):l(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o}([(0,l.EM)("vl-map-action-controls")],n)},"../../libs/map/src/components/controls/vl-map-control.mixin.ts":(e,t,a)=>{a.d(t,{i:()=>l});var r=a("../../node_modules/ol/control/Control.js");let l=e=>{class t extends e{connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map"),this.map=this._mapElement.map,this.controlElement.isInMap=!0,this.control=new r.A({element:this.controlElement,target:this}),this.control.set("element",this),this.map.addControl(this.control)}disconnectedCallback(){super.disconnectedCallback(),this.map.removeControl(this.control)}createRenderRoot(){return this}}return t}},"../../libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts":(e,t,a)=>{var r=a("../../libs/common/utilities/src/index.ts"),l=a("../../node_modules/ol/format/GML2.js"),s=a("../../node_modules/ol/loadingstrategy.js"),o=a("../../node_modules/ol/source/Vector.js"),n=a("../../libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts");class i extends n.P{connectedCallback(){return this._source=this.__createSource(),this._layer=this._createLayer(),super.connectedCallback()}get _url(){let e=this.getAttribute("url");if(!e)throw Error("URL not defined");return new URL(e)}get _layers(){let e=this.getAttribute("layers");if(!e)throw Error("Layers not defined");return e}__createSource(){return new o.A({format:this.__sourceFormat,strategy:this.__loadingStrategy,url:this.__getWfsUrl.bind(this)})}__getWfsUrl(e,t,a){let r=this._url,{searchParams:l}=r;return l.set("service","WFS"),l.set("request","GetFeature"),l.set("typename",this._layers),l.set("bbox",e.join(",")),l.set("srsname",a.getCode()),l.set("outputFormat",this.__wfsOutputFormat),l.set("version",this.__wfsVersion),r}get __loadingStrategy(){return s.Qk}get __sourceFormat(){return new l.A}get __wfsOutputFormat(){return"GML2"}get __wfsVersion(){return"2.0.0"}}i=function(e,t,a,r){var l,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,a,o):l(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o}([(0,r.M1)("vl-map-wfs-layer")],i)},"../../libs/map/src/components/layer/wms-layer/vl-map-tiled-wms-layer/vl-map-tiled-wms-layer.ts":(e,t,a)=>{var r=a("../../libs/common/utilities/src/index.ts"),l=a("../../node_modules/ol/layer/Tile.js"),s=a("../../node_modules/ol/source/TileWMS.js"),o=a("../../libs/map/src/components/layer/wms-layer/vl-map-wms-layer.ts");class n extends s.A{constructor(e){super({...e._sourceConfig}),this.layer=e}tileUrlFunction(e,t,a){let r=this.layer.mapElement.map.getView().calculateExtent(this.layer.mapElement.map.getSize());return this.updateParams({...this.layer._sourceConfig.params,tilesorigin:`${r[0]},${r[3]}`}),super.tileUrlFunction(e,t,a)}}class i extends o.v{constructor(){super(l.A,s.A)}get _sourceConfig(){return{...super._sourceConfig,params:{...super._sourceConfig.params,TILED:!0}}}__createSource(){return new n(this)}}i=function(e,t,a,r){var l,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,a,o):l(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o}([(0,r.M1)("vl-map-tiled-wms-layer")],i)},"../../libs/map/src/components/layer/wms-layer/vl-map-wms-layer.ts":(e,t,a)=>{a.d(t,{v:()=>l});var r=a("../../libs/map/src/components/layer/vl-map-layer.ts");a("../../libs/map/src/components/layer/wms-layer/vl-map-wms-style/vl-map-wms-style.ts");class l extends r.M{static get _observedAttributes(){return r.M._observedAttributes.concat(["url","layers","styles","version"])}constructor(e,t){super(),this.__layerClass=e,this.__sourceClass=t}connectedCallback(){return customElements.whenDefined("vl-map-wms-style").then(()=>(this._source=this.__createSource(this.__sourceClass),this._layer=this.__createLayer(this.__layerClass),super.connectedCallback()))}get _url(){let e=this.getAttribute("data-vl-url");if(!e)throw Error("URL not defined");return e}get _layers(){let e=this.getAttribute("data-vl-layers");if(!e)throw Error("Layers not defined");return e}get _styles(){return this.getAttribute("data-vl-styles")||""}get _sldBody(){let e=this.querySelector(":scope > vl-map-wms-style");if(e)return e.sld}get _version(){return this.getAttribute("data-vl-version")||"1.3.0"}_createLayerConfig(e){return{title:this._name,source:e,minResolution:this._minResolution,maxResolution:this._maxResolution,visible:this._visible,opacity:this._opacity}}get _sourceConfig(){return{url:this._url,params:{LAYERS:this._layers,STYLES:this._styles,VERSION:this._version,SLD_BODY:this._sldBody}}}__createLayer(e){let t=new e(this._createLayerConfig(this._source));return t.set("id",r.M._counter),t}__createSource(e){return new e(this._sourceConfig)}_layersChangedCallback(){this.updateOlLayerSource()}_urlChangedCallback(){this.updateOlLayerSource()}_stylesChangedCallback(){this.updateOlLayerSource()}_versionChangedCallback(){this.updateOlLayerSource()}updateOlLayerSource(){if(!this._layer)return;let e=this.__createSource(this.__sourceClass);this._layer.setSource(e)}}},"../../libs/map/src/components/layer/wms-layer/vl-map-wms-style/vl-map-wms-style.ts":(e,t,a)=>{var r=a("../../libs/common/utilities/src/index.ts");class l extends(0,r.H3)(HTMLElement){get sld(){return this.getAttribute("data-vl-sld")}}l=function(e,t,a,r){var l,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,a,o):l(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o}([(0,r.M1)("vl-map-wms-style")],l)}}]);