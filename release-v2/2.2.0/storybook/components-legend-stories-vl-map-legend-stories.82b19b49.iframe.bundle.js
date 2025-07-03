"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3383],{"../../libs/map/src/components/legend/stories/vl-map-legend.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{MapLegendCustomItems:()=>E,MapLegendFeaturesLayer:()=>C,MapLegendFeaturesLayerMultipleStyles:()=>L,MapLegendLayoutVertical:()=>T,MapLegendMultipleFeaturesLayers:()=>j,MapLegendWfsLayer:()=>M,MapLegendWmsLayer:()=>S,MapLegendWmsWfsLayer:()=>F,__namedExportsOrder:()=>k,default:()=>w}),r("../../libs/map/src/vl-map.ts"),r("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),r("../../libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),r("../../libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts"),r("../../libs/map/src/components/legend/vl-map-legend.ts");var a=r("../../resources/utils-storybook/index.ts"),l=r("../../node_modules/lit/index.js");r("../../libs/map/src/components/layer-style/vl-map-layer-style.ts");var s=r("../../libs/map/src/components/legend/vl-map-legend.defaults.ts");let o={...a.D8,bottom:"",left:"",placement:s.s.BOTTOM_RIGHT,right:"",top:"",layoutVertical:!1,hideTitle:!1,version:null},n={...a.RN,bottom:{name:"bottom",description:'Bepaalt de "bottom" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.bottom}}},left:{name:"left",description:'Bepaalt de "left" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.left}}},placement:{name:"placement",description:"Bepaalt de plaats van de legende op de kaart.",control:{type:a.VH.SELECT},options:Object.values(s.s),table:{type:{summary:(0,a.uf)(Object.values(s.s))},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.placement}}},right:{name:"right",description:'Bepaalt de "right" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.right}}},top:{name:"top",description:'Bepaalt de "top" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.top}}},layoutVertical:{name:"layout-vertical",description:"Zet de layout van de legende in verticale positie.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.layoutVertical}}},hideTitle:{name:"hide-title",description:'Laat de "Legende" titel weg.',table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.hideTitle}}},version:{name:"version",description:'Voeg een "version" parameter toe aan de legende url.',table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.version}}}},i=()=>{document.addEventListener("DOMContentLoaded",async()=>{let e=document.getElementById("map");await e?.ready,document.querySelector("#style-1").appliesTo=e=>"style-1"===e.get("styleId"),document.querySelector("#style-2").appliesTo=e=>"style-2"===e.get("styleId"),document.querySelector("#style-3").appliesTo=e=>"style-3"===e.get("styleId")})},c=(0,a._7)(o,({bottom:e,left:t,placement:r,right:a,top:s,layoutVertical:o})=>(i(),(0,l.qy)` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{styleId:"style-1"}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{styleId:"style-2"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{styleId:"style-3"}}]}} name="Shapes">
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
            placement=${r}
            layout-vertical=${o}
            bottom=${e}
            top=${s}
            right=${a}
            left=${t}
        ></vl-map-legend>
    </vl-map>`));var m=r("../../node_modules/lit-html/lit-html.js");let p=(0,a._7)(o,({bottom:e,left:t,placement:r,right:a,top:l,layoutVertical:s,hideTitle:o})=>(0,m.qy)` <vl-map id="map">
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
            placement=${r}
            layout-vertical=${s}
            hide-title=${o}
            bottom=${e}
            top=${l}
            right=${a}
            left=${t}
        ></vl-map-legend>
    </vl-map>`);r("../../libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts"),r("../../libs/map/src/components/controls/measure-control/vl-map-measure-control.ts"),r("../../libs/map/src/components/controls/vl-map-action-controls.ts");let d=(0,a._7)(o,({bottom:e,left:t,placement:r,right:a,top:l,layoutVertical:s})=>(0,m.qy)` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-features-layer name="Measurements">
            <vl-map-layer-style border-size="2"></vl-map-layer-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{featureCharacter:"O",zIndex:"1"}},{type:"Feature",geometry:{type:"Point",coordinates:[147075,197908]},properties:{featureCharacter:"O",zIndex:"2"}},{type:"Feature",geometry:{type:"Point",coordinates:[147095,197908]},properties:{featureCharacter:"O",zIndex:"3"}},{type:"Feature",geometry:{type:"Point",coordinates:[147105,197908]},properties:{featureCharacter:"O",zIndex:"4"}},{type:"Feature",geometry:{type:"Point",coordinates:[147106,197908]},properties:{featureCharacter:"O",zIndex:"5"}}]}} name="Openbare onderzoeken">
            <vl-map-layer-circle-style
                color="#ffe615"
                size="10"
                border-color="#000"
                border-size="1"
                text-feature-attribute-name="featureCharacter"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{featureCharacter:"B",zIndex:"5"}}]}} name="Beslissingen">
            <vl-map-layer-circle-style
                color="red"
                size="10"
                border-color="#000"
                text-feature-attribute-name="featureCharacter"
                border-size="1"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{featureCharacter:"W",zIndex:"5"}}]}} name="Wateroppervlaktes">
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
            placement=${r}
            layout-vertical=${s}
            bottom=${e}
            top=${l}
            right=${a}
            left=${t}
        ></vl-map-legend>
    </vl-map>`);r("../../libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts");let u=(0,a._7)(o,({bottom:e,left:t,placement:r,right:a,top:s,layoutVertical:o})=>(0,l.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
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
                placement=${r}
                layout-vertical=${o}
                bottom=${e}
                top=${s}
                right=${a}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `),y=(0,a._7)(o,({bottom:e,left:t,placement:r,right:a,top:s,layoutVertical:o})=>(0,l.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                layers="grondwater:beschermingszones_2014"
                name="Beschermingszones"
                url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-legend
                placement=${r}
                layout-vertical=${o}
                bottom=${e}
                top=${s}
                right=${a}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `),g=(0,a._7)(o,({bottom:e,left:t,placement:r,right:a,top:s,layoutVertical:o})=>(0,l.qy)`
        <vl-map>
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
                placement=${r}
                layout-vertical=${o}
                bottom=${e}
                top=${s}
                right=${a}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `);r("../../libs/map/src/components/legend-item/vl-map-legend-item.ts");let v=(0,a._7)(o,({bottom:e,left:t,placement:r,right:a,top:l,layoutVertical:s})=>(0,m.qy)` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-features-layer name="Measurements">
            <vl-map-layer-style border-size="2"></vl-map-layer-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{featureCharacter:"O",zIndex:"1"}},{type:"Feature",geometry:{type:"Point",coordinates:[147075,197908]},properties:{featureCharacter:"O",zIndex:"2"}},{type:"Feature",geometry:{type:"Point",coordinates:[147095,197908]},properties:{featureCharacter:"O",zIndex:"3"}},{type:"Feature",geometry:{type:"Point",coordinates:[147105,197908]},properties:{featureCharacter:"O",zIndex:"4"}},{type:"Feature",geometry:{type:"Point",coordinates:[147106,197908]},properties:{featureCharacter:"O",zIndex:"5"}}]}} name="Openbare onderzoeken">
            <vl-map-layer-circle-style
                color="#ffe615"
                size="10"
                border-color="#000"
                border-size="1"
                text-feature-attribute-name="featureCharacter"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{featureCharacter:"B",zIndex:"5"}}]}} name="Beslissingen">
            <vl-map-layer-circle-style
                color="red"
                size="10"
                border-color="#000"
                text-feature-attribute-name="featureCharacter"
                border-size="1"
                text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{featureCharacter:"W",zIndex:"5"}}]}} name="Wateroppervlaktes">
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
            placement=${r}
            layout-vertical=${s}
            bottom=${e}
            top=${l}
            right=${a}
            left=${t}
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
    </vl-map>`);r("../../libs/map/src/components/layer/wms-layer/vl-map-tiled-wms-layer/vl-map-tiled-wms-layer.ts");let h=(0,a._7)(o,({bottom:e,left:t,placement:r,right:a,top:s})=>(i(),(0,l.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                layers="grondwater:beschermingszones_2014"
                name="Beschermingszones"
                url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{styleId:"style-1"}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{styleId:"style-2"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{styleId:"style-3"}}]}} name="Shapes">
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
                placement=${r}
                layout-vertical
                bottom=${e}
                top=${s}
                right=${a}
                left=${t}
            ></vl-map-legend>
        </vl-map>
    `));r("../../node_modules/react/index.js");var b=r("../../node_modules/react/jsx-runtime.js"),f=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_=r("../../node_modules/@storybook/blocks/dist/index.mjs");function x(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,f.RP)(),e.components),{FluxMetaData:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.h1,{id:"map-legend",children:"Map Legend"}),"\n",(0,b.jsx)(r,{id:"map-legend"}),"\n",(0,b.jsxs)(t.p,{children:["Gebruik de ",(0,b.jsx)(t.code,{children:"map-legend"})," component om een legende af te beelden op de kaart."]}),"\n",(0,b.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:"language-js",children:"import { VlMapLegend } from '@domg-wc/map';\n"})}),"\n",(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:"language-html",children:"<vl-map-legend></vl-map-legend>\n"})}),"\n",(0,b.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,b.jsx)(_.ov,{of:L}),"\n",(0,b.jsx)(t.h2,{id:"voorbeelden",children:"Voorbeelden"}),"\n",(0,b.jsx)(t.h3,{id:"features-layer-multiple-styles",children:"Features Layer Multiple Styles"}),"\n",(0,b.jsx)(t.p,{children:"Zie onder de story voor de TypeScript code."}),"\n",(0,b.jsx)(_.Hl,{of:L}),"\n",(0,b.jsxs)("details",{children:[(0,b.jsx)("summary",{children:"TypeScript code"}),(0,b.jsx)(_.kL,{code:"export const linkStylesToFeatures = ()=>{\n    document.addEventListener('DOMContentLoaded', async ()=>{\n        const map = document.getElementById('map');\n        await map?.ready;\n        document.querySelector('#style-1').appliesTo = (feature)=>feature.get('styleId') === 'style-1';\n        document.querySelector('#style-2').appliesTo = (feature)=>feature.get('styleId') === 'style-2';\n        document.querySelector('#style-3').appliesTo = (feature)=>feature.get('styleId') === 'style-3';\n    });\n};\n",language:"ts",dark:!0})]}),"\n",(0,b.jsx)(t.h3,{id:"features-layer",children:"Features Layer"}),"\n",(0,b.jsx)(_.Hl,{of:C}),"\n",(0,b.jsx)(t.h3,{id:"multiple-features-layers",children:"Multiple Features Layers"}),"\n",(0,b.jsx)(_.Hl,{of:j}),"\n",(0,b.jsx)(t.h3,{id:"wfs-layer",children:"WFS Layer"}),"\n",(0,b.jsx)(_.Hl,{of:M}),"\n",(0,b.jsx)(t.h3,{id:"wms-layer",children:"WMS Layer"}),"\n",(0,b.jsx)(_.Hl,{of:S}),"\n",(0,b.jsx)(t.h3,{id:"wms-wfs-layer-combination",children:"WMS WFS Layer Combination"}),"\n",(0,b.jsx)(_.Hl,{of:F}),"\n",(0,b.jsx)(t.h3,{id:"custom-legend-items",children:"Custom legend items"}),"\n",(0,b.jsx)(_.Hl,{of:E}),"\n",(0,b.jsx)(t.h3,{id:"custom-legend-layout-vertical",children:"Custom legend layout vertical"}),"\n",(0,b.jsx)(_.Hl,{of:T}),"\n",(0,b.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,b.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,b.jsx)(t.p,{children:(0,b.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-legend-vl-map-legend-wfs-layer--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Legend Wfs Layer"})})]})}let w={id:"map-legend",title:"map/legend",tags:["autodocs"],args:o,argTypes:n,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,f.RP)(),e.components);return t?(0,b.jsx)(t,Object.assign({},e,{children:(0,b.jsx)(x,e)})):x(e)}}}},C=p;C.storyName="vl-map-legend - features-layer";let L=c;L.storyName="vl-map-legend - features-layer multiple styles";let j=d;j.storyName="vl-map-legend - multiple features-layers";let M=u;M.storyName="vl-map-legend - wfs-layer";let S=y;S.storyName="vl-map-legend - wms-layer";let F=g;F.storyName="vl-map-legend - wms - wfs -layer";let E=v;E.storyName="vl-map-legend - custom items";let T=h;T.storyName="vl-map-legend - layout vertical",C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"MLFL",...C.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"MLFLMS",...L.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"MLMFL",...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"MLWFSL",...M.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"MLWMSL",...S.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"MLWMSWFSL",...F.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"MLCI",...E.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"MLLV",...T.parameters?.docs?.source}}};let k=["MapLegendFeaturesLayer","MapLegendFeaturesLayerMultipleStyles","MapLegendMultipleFeaturesLayers","MapLegendWfsLayer","MapLegendWmsLayer","MapLegendWmsWfsLayer","MapLegendCustomItems","MapLegendLayoutVertical"]},"../../libs/map/src/actions/measure/measure-action.ts":(e,t,r)=>{r.d(t,{V:()=>o});var a=r("../../node_modules/ol/Overlay.js"),l=r("../../node_modules/ol/Observable.js"),s=r("../../libs/map/src/actions/draw/draw-action.ts");class o extends s.r{constructor(e,t){super(e,"LineString",()=>{(0,l.e)(this.measurePointermoveHandler)},{...t,maxPoints:2,geometryName:"measurement"}),this.featureCounter=0,this.measurementTooltips=[]}activate(){this.drawStartHandler=this.drawInteraction.on("drawstart",e=>{this._handleDrawStart(e)}),this.drawEndHandler=this.drawInteraction.on("drawend",()=>{this._setMeasurementTooltipsClosable(!0)}),this.removeFeatureHandler=this.layer?.getSource()?.on("removefeature",e=>{this._handleRemoveFeature(e)}),super.activate()}_setMeasurementTooltipsClosable(e){this.measurementTooltips.forEach(t=>{let r="closable",a=t.getElement();t&&a&&(e?a.setAttribute(r,e):a.removeAttribute(r))})}_setMeasurementTooltipsVisible(e){this.measurementTooltips.forEach(t=>{let r="hidden",a=t.getElement();t&&a&&(e?a.removeAttribute(r):a.setAttribute(r,!0))})}_showMeasurementTooltip(e,t,r){let a=e.getGeometry().getLength().toFixed(2);r.textContent=`${a} m`,t.setElement(r),t.setPosition(e.getGeometry().getLastCoordinate())}_handleDrawStart({feature:e}){let t=this.featureCounter;this.featureCounter+=1,this._setMeasurementTooltipsClosable(!1),e.setId(t);let r=document.createElement("vl-pill");r.isInMap=!0,r.addEventListener("close",t=>{this._handleRemoveMeasurement(t,e)},{once:!0});let l=new a.A({offset:[0,40],positioning:"bottom-center",stopEvent:!0,insertFirst:!0});l.set("featureId",t),this.map.addOverlay(l),this.measurementTooltips=[...this.measurementTooltips,l],this.measurePointermoveHandler=this.map.on("pointermove",()=>{this._showMeasurementTooltip(e,l,r)})}_removeMeasureFeature(e){let t=this.layer.getSource();e&&(null==e.getId()||t.getFeatureById(e.getId())===e)&&(t.removeFeature(e),this.map.render())}_removeMeasurementTooltip(e){let t=this.getTooltipFor(e);this.map.removeOverlay(t),this.measurementTooltips=this.measurementTooltips.filter(t=>this._getFeatureIdFor(t)!==e)}_handleRemoveMeasurement(e,t){e.stopPropagation(),this._removeMeasurementTooltip(t.getId()),this._removeMeasureFeature(t)}_handleRemoveFeature(e){this._removeMeasurementTooltip(e.feature.getId())}_cleanUp(e){(0,l.e)(this.measurePointermoveHandler),e&&this.measurementTooltips.forEach(e=>{let t=this._getFeatureIdFor(e);null==this.layer.getSource().getFeatureById(t)&&this._removeMeasurementTooltip(t)})}getTooltipFor(e){return this.measurementTooltips.find(t=>this._getFeatureIdFor(t)===e)}_getFeatureIdFor(e){return e.get("featureId")}handleLayerVisibilityChange(){this._setMeasurementTooltipsVisible(this.layer.getVisible())}deactivate(){this._setMeasurementTooltipsClosable(!0),this._cleanUp(!0),(0,l.e)(this.drawStartHandler),(0,l.e)(this.drawEndHandler),(0,l.e)(this.removeFeatureHandler),super.deactivate()}stop(){super.stop(),this._setMeasurementTooltipsClosable(!0),this._cleanUp(!0)}}},"../../libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts":(e,t,r)=>{var a=r("../../libs/common/src/index.ts"),l=r("../../libs/map/src/actions/measure/measure-action.ts"),s=r("../../libs/map/src/vl-map.model.ts"),o=r("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class n extends o.H{constructor(){super(),this.identifier=s.cS.MEASURE}_createAction(e){return new l.V(e,this.__drawOptions)}}n=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-map-measure-action")],n)},"../../libs/map/src/components/controls/measure-control/vl-map-measure-control.ts":(e,t,r)=>{var a=r("../../libs/common/src/index.ts"),l=r("../../libs/components/src/atom/index.ts"),s=r("../../node_modules/ol/Observable.js"),o=r("../../libs/map/src/vl-map.model.ts"),n=r("../../libs/map/src/components/controls/vl-map-control.mixin.ts");class i extends(0,n.i)(a.jW){static{(0,a.gy)([l.Yk])}constructor(){super(),this.controlElement=null,this.controlElement=document.createElement("vl-button"),this.controlElement.setAttribute("tertiary",""),this.controlElement.setAttribute("toggle",""),this.controlElement.innerText="Meten",this.identifier=o.cS.MEASURE,this.type=o.$c.ACTION}connectedCallback(){super.connectedCallback(),this.clickListener=this.controlElement.addEventListener("click",()=>this.handleMeasureControlClick())}getAction(){return this.map.getActionWithIdentifier(this.identifier)}handleMeasureControlClick(){let e=this.getAction();e&&(this.controlElement.on?(e.element.activate(),this.controlElement.removeAttribute("tertiary")):(e.element.deactivate(),this.controlElement.setAttribute("tertiary","")))}setActive(e){e?(this.controlElement.on=!0,this.controlElement.removeAttribute("tertiary")):(this.controlElement.on=!1,this.controlElement.setAttribute("tertiary",""))}setDisabled(e){this.controlElement.disabled=e}disconnectedCallback(){super.disconnectedCallback(),(0,s.e)(this.clickListener)}}i=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-map-measure-control")],i)},"../../libs/map/src/components/controls/vl-map-action-controls.ts":(e,t,r)=>{var a=r("../../node_modules/lit/index.js"),l=r("../../node_modules/lit/decorators.js");let s=(0,a.AH)`
    div {
        position: absolute;
        right: 0px;
        z-index: 1;
        display: flex;
        column-gap: 10px;
        padding: 10px;
    }
`;var o=r("../../libs/common/src/index.ts");class n extends o.jW{static get styles(){return[s]}connectedCallback(){super.connectedCallback(),this.actionControls.forEach(e=>{e.addEventListener("change-control",t=>{let r=e.getAttribute("action-id");this.handleActionControlChange(r,t)})})}render(){return(0,a.qy)`
            <div>
                <slot></slot>
            </div>
        `}get actionControls(){return this.querySelectorAll("vl-map-action-control")}handleActionControlChange(e,t){t.detail?.isActive&&[...this.actionControls].filter(t=>t.getAttribute("action-id")!==e).filter(e=>e.active).forEach(e=>e.deactivate())}}n=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,l.EM)("vl-map-action-controls")],n)},"../../libs/map/src/components/controls/vl-map-control.mixin.ts":(e,t,r)=>{r.d(t,{i:()=>l});var a=r("../../node_modules/ol/control/Control.js");let l=e=>{class t extends e{connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map"),this.map=this._mapElement.map,this.controlElement.isInMap=!0,this.control=new a.A({element:this.controlElement,target:this}),this.control.set("element",this),this.map.addControl(this.control)}disconnectedCallback(){super.disconnectedCallback(),this.map.removeControl(this.control)}createRenderRoot(){return this}}return t}},"../../libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts":(e,t,r)=>{var a=r("../../libs/common/src/index.ts"),l=r("../../node_modules/ol/format/GML2.js"),s=r("../../node_modules/ol/loadingstrategy.js"),o=r("../../node_modules/ol/source/Vector.js"),n=r("../../libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts");class i extends n.P{connectedCallback(){return this._source=this.__createSource(),this._layer=this._createLayer(),super.connectedCallback()}get _url(){let e=this.getAttribute("url");if(!e)throw Error("URL not defined");return new URL(e)}get _layers(){let e=this.getAttribute("layers");if(!e)throw Error("Layers not defined");return e}__createSource(){return new o.A({format:this.__sourceFormat,strategy:this.__loadingStrategy,url:this.__getWfsUrl.bind(this)})}__getWfsUrl(e,t,r){let a=this._url,{searchParams:l}=a;return l.set("service","WFS"),l.set("request","GetFeature"),l.set("typename",this._layers),l.set("bbox",e.join(",")),l.set("srsname",r.getCode()),l.set("outputFormat",this.__wfsOutputFormat),l.set("version",this.__wfsVersion),a}get __loadingStrategy(){return s.Qk}get __sourceFormat(){return new l.A}get __wfsOutputFormat(){return"GML2"}get __wfsVersion(){return"2.0.0"}}i=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-map-wfs-layer")],i)},"../../libs/map/src/components/layer/wms-layer/vl-map-tiled-wms-layer/vl-map-tiled-wms-layer.ts":(e,t,r)=>{r.d(t,{B:()=>i});var a=r("../../libs/common/src/index.ts"),l=r("../../node_modules/ol/layer/Tile.js"),s=r("../../node_modules/ol/source/TileWMS.js"),o=r("../../libs/map/src/components/layer/wms-layer/vl-map-wms-layer.ts");class n extends s.A{constructor(e){super({...e._sourceConfig}),this.layer=e}tileUrlFunction(e,t,r){let a=this.layer.mapElement.map.getView().calculateExtent(this.layer.mapElement.map.getSize());return this.updateParams({...this.layer._sourceConfig.params,tilesorigin:`${a[0]},${a[3]}`}),super.tileUrlFunction(e,t,r)}}class i extends o.v{constructor(){super(l.A,s.A)}get _sourceConfig(){return{...super._sourceConfig,params:{...super._sourceConfig.params,TILED:!0}}}__createSource(){return new n(this)}}i=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-map-tiled-wms-layer")],i)},"../../libs/map/src/components/layer/wms-layer/vl-map-wms-layer.ts":(e,t,r)=>{r.d(t,{v:()=>l});var a=r("../../libs/map/src/components/layer/vl-map-layer.ts");r("../../libs/map/src/components/layer/wms-layer/vl-map-wms-style/vl-map-wms-style.ts");class l extends a.M{static get _observedAttributes(){return a.M._observedAttributes.concat(["url","layers","styles","version"])}constructor(e,t){super(),this.__layerClass=e,this.__sourceClass=t}connectedCallback(){return customElements.whenDefined("vl-map-wms-style").then(()=>(this._source=this.__createSource(this.__sourceClass),this._layer=this.__createLayer(this.__layerClass),super.connectedCallback()))}get _url(){let e=this.getAttribute("url");if(!e)throw Error("URL not defined");return e}get _layers(){let e=this.getAttribute("layers");if(!e)throw Error("Layers not defined");return e}get _styles(){return this.getAttribute("styles")||""}get _sldBody(){let e=this.querySelector(":scope > vl-map-wms-style");if(e)return e.sld}get _version(){return this.getAttribute("version")||"1.3.0"}_createLayerConfig(e){return{title:this._name,source:e,minResolution:this._minResolution,maxResolution:this._maxResolution,visible:this._visible,opacity:this._opacity}}get _sourceConfig(){return{url:this._url,params:{LAYERS:this._layers,STYLES:this._styles,VERSION:this._version,SLD_BODY:this._sldBody}}}__createLayer(e){let t=new e(this._createLayerConfig(this._source));return t.set("id",a.M._counter),t}__createSource(e){return new e(this._sourceConfig)}_layersChangedCallback(){this.updateOlLayerSource()}_urlChangedCallback(){this.updateOlLayerSource()}_stylesChangedCallback(){this.updateOlLayerSource()}_versionChangedCallback(){this.updateOlLayerSource()}updateOlLayerSource(){if(!this._layer)return;let e=this.__createSource(this.__sourceClass);this._layer.setSource(e)}}},"../../libs/map/src/components/layer/wms-layer/vl-map-wms-style/vl-map-wms-style.ts":(e,t,r)=>{var a=r("../../libs/common/src/index.ts");class l extends a.F9{get sld(){return this.getAttribute("sld")}}l=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-map-wms-style")],l)}}]);