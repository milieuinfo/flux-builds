import"./vl-map-base-layer-DdS66t0g.js";import"./vl-map-base-layer-grb-gray-DlB85uo0.js";import"./vl-map-layer-circle-style-D6lcMikC.js";import"./vl-map-features-layer-CjjaBi1V.js";import{L as z}from"./vl-map-legend-gAInGgTh.js";import{Z as c,_ as y,a2 as C,a1 as j,W as I,X as P,s as m,x as i,u as w,j as t,bc as E,C as p,S as k}from"./iframe-D9dm7PbY.js";import"./vl-map-measure-control-BJcRCXwT.js";import"./vl-map-action-controls-8Be-NVqB.js";import"./vl-map-wfs-layer-QEPpHWcr.js";import"./vl-map-tiled-wms-layer-CRzgWARe.js";import"./vl-map-vector-layer-D9Lz4fnH.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-draw-action-79Miwb8u.js";import"./vl-map-layer-action-r_4xgSuA.js";import"./composite-vector-layer-x4I8esiy.js";import"./vl-map-control.mixin-BDkQyE22.js";import"./vl-map-wms-layer-Ba7EiQO8.js";const o={...P,bottom:"",left:"",placement:z.BOTTOM_RIGHT,right:"",top:"",layoutVertical:!1,hideTitle:!1,version:null},O={...I,bottom:{name:"bottom",description:'Bepaalt de "bottom" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:y.STRING},category:c.ATTRIBUTES,defaultValue:{summary:o.bottom}}},left:{name:"left",description:'Bepaalt de "left" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:y.STRING},category:c.ATTRIBUTES,defaultValue:{summary:o.left}}},placement:{name:"placement",description:"Bepaalt de plaats van de legende op de kaart.",control:{type:j.SELECT},options:Object.values(z),table:{type:{summary:C(Object.values(z))},category:c.ATTRIBUTES,defaultValue:{summary:o.placement}}},right:{name:"right",description:'Bepaalt de "right" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:y.STRING},category:c.ATTRIBUTES,defaultValue:{summary:o.right}}},top:{name:"top",description:'Bepaalt de "top" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met placement.',table:{type:{summary:y.STRING},category:c.ATTRIBUTES,defaultValue:{summary:o.top}}},layoutVertical:{name:"layout-vertical",description:"Zet de layout van de legende in verticale positie.",table:{type:{summary:y.BOOLEAN},category:c.ATTRIBUTES,defaultValue:{summary:String(o.layoutVertical)}}},hideTitle:{name:"hide-title",description:'Laat de "Legende" titel weg.',table:{type:{summary:y.BOOLEAN},category:c.ATTRIBUTES,defaultValue:{summary:String(o.hideTitle)}}},version:{name:"version",description:'Voeg een "version" parameter toe aan de legende url.',table:{type:{summary:y.STRING},category:c.ATTRIBUTES,defaultValue:{summary:o.version}}}},F=()=>{document.addEventListener("DOMContentLoaded",async()=>{await document.getElementById("map")?.ready,document.querySelector("#style-1").appliesTo=e=>e.get("styleId")==="style-1",document.querySelector("#style-2").appliesTo=e=>e.get("styleId")==="style-2",document.querySelector("#style-3").appliesTo=e=>e.get("styleId")==="style-3"})},B=m(o,({bottom:r,left:e,placement:a,right:l,top:s,layoutVertical:n})=>{const d={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{styleId:"style-1"}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{styleId:"style-2"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{styleId:"style-3"}}]};return F(),i` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${d} name="Shapes">
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
            placement=${a}
            layout-vertical=${n}
            bottom=${r}
            top=${s}
            right=${l}
            left=${e}
        ></vl-map-legend>
    </vl-map>`}),W=m(o,({bottom:r,left:e,placement:a,right:l,top:s,layoutVertical:n,hideTitle:d})=>i` <vl-map id="map">
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
            placement=${a}
            layout-vertical=${n}
            hide-title=${d}
            bottom=${r}
            top=${s}
            right=${l}
            left=${e}
        ></vl-map-legend>
    </vl-map>`),G=m(o,({bottom:r,left:e,placement:a,right:l,top:s,layoutVertical:n})=>i` <vl-map lambert2008>
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
            placement=${a}
            layout-vertical=${n}
            bottom=${r}
            top=${s}
            right=${l}
            left=${e}
        ></vl-map-legend>
    </vl-map>`),N=m(o,({bottom:r,left:e,placement:a,right:l,top:s,layoutVertical:n})=>i`
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
                placement=${a}
                layout-vertical=${n}
                bottom=${r}
                top=${s}
                right=${l}
                left=${e}
            ></vl-map-legend>
        </vl-map>
    `),V=m(o,({bottom:r,left:e,placement:a,right:l,top:s,layoutVertical:n})=>i`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                layers="grondwater:beschermingszones_2014"
                name="Beschermingszones"
                url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-legend
                placement=${a}
                layout-vertical=${n}
                bottom=${r}
                top=${s}
                right=${l}
                left=${e}
            ></vl-map-legend>
        </vl-map>
    `),R=m(o,({bottom:r,left:e,placement:a,right:l,top:s,layoutVertical:n})=>i`
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
                placement=${a}
                layout-vertical=${n}
                bottom=${r}
                top=${s}
                right=${l}
                left=${e}
            ></vl-map-legend>
        </vl-map>
    `),A=m(o,({bottom:r,left:e,placement:a,right:l,top:s,layoutVertical:n})=>i` <vl-map lambert2008>
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
            placement=${a}
            layout-vertical=${n}
            bottom=${r}
            top=${s}
            right=${l}
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
    </vl-map>`),_=m(o,({bottom:r,left:e,placement:a,right:l,top:s})=>{const n={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[153055,203908]},properties:{styleId:"style-1"}},{type:"Feature",geometry:{type:"Point",coordinates:[141e3,200908]},properties:{styleId:"style-2"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147055,197908],[157055,197908],[157055,187908],[147055,187908],[147055,197908]]]},properties:{styleId:"style-3"}}]};return F(),i`
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
                placement=${a}
                layout-vertical
                bottom=${r}
                top=${s}
                right=${l}
                left=${e}
            ></vl-map-legend>
        </vl-map>
    `}),D="data:image/svg+xml;base64,"+btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
  <line x1="0" y1="10" x2="10" y2="0" stroke="red" stroke-width="2"/>
</svg>`),q="data:image/svg+xml;base64,"+btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
  <circle cx="5" cy="5" r="2" fill="blue"/>
</svg>`),U=()=>{document.addEventListener("DOMContentLoaded",async()=>{await document.getElementById("map")?.ready,document.querySelector("#pattern-diagonal").appliesTo=e=>e.get("styleId")==="pattern-diagonal",document.querySelector("#pattern-dotted").appliesTo=e=>e.get("styleId")==="pattern-dotted",document.querySelector("#no-pattern").appliesTo=e=>e.get("styleId")==="no-pattern"})},K=m(o,({bottom:r,left:e,placement:a,right:l,top:s,layoutVertical:n})=>{const d={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[135e3,205e3],[145e3,205e3],[145e3,195e3],[135e3,195e3],[135e3,205e3]]]},properties:{styleId:"pattern-diagonal"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[147e3,205e3],[157e3,205e3],[157e3,195e3],[147e3,195e3],[147e3,205e3]]]},properties:{styleId:"pattern-dotted"}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[159e3,205e3],[169e3,205e3],[169e3,195e3],[159e3,195e3],[159e3,205e3]]]},properties:{styleId:"no-pattern"}}]};return U(),i` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${d} name="Patronen" projection-code="EPSG:31370">
            <vl-map-layer-style
                id="pattern-diagonal"
                name="Diagonale arcering"
                pattern="${D}"
                color="rgba(255,0,0,0.3)"
                border-color="#c00"
                border-size="2"
            ></vl-map-layer-style>
            <vl-map-layer-style
                id="pattern-dotted"
                name="Gestippeld"
                pattern="${q}"
                color="rgba(0,0,255,0.3)"
                border-color="#009"
                border-size="2"
            ></vl-map-layer-style>
            <vl-map-layer-style
                id="no-pattern"
                name="Zonder patroon"
                color="rgba(0,128,0,0.5)"
                border-color="#060"
                border-size="2"
            ></vl-map-layer-style>
        </vl-map-features-layer>
        <vl-map-legend
            placement=${a}
            layout-vertical=${n}
            bottom=${r}
            top=${s}
            right=${l}
            left=${e}
        ></vl-map-legend>
    </vl-map>`}),X=`export const linkStylesToFeatures = () => {
    document.addEventListener('DOMContentLoaded', async () => {
        const map: any = document.getElementById('map');
        await map?.ready;
        (document.querySelector('#style-1') as any).appliesTo = (feature) => feature.get('styleId') === 'style-1';
        (document.querySelector('#style-2') as any).appliesTo = (feature) => feature.get('styleId') === 'style-2';
        (document.querySelector('#style-3') as any).appliesTo = (feature) => feature.get('styleId') === 'style-3';
    });
};
`;function $(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...w(),...r.components},{FluxComponentMetaData:a}=e;return a||H("FluxComponentMetaData"),t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"map-legend",children:"Map Legend"}),`
`,t.jsx(a,{id:"map-components-legend"}),`
`,t.jsx(e.h2,{id:"doel",children:"Doel"}),`
`,t.jsxs(e.p,{children:["Gebruik de ",t.jsx(e.code,{children:"map-legend"})," component om een legende af te beelden op de kaart."]}),`
`,t.jsx(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { VlMapLegend } from '@domg-wc/map';
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<vl-map-legend></vl-map-legend>
`})}),`
`,t.jsx(e.h2,{id:"configuratie",children:"Configuratie"}),`
`,t.jsx(E,{of:u}),`
`,t.jsx(e.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,t.jsx(e.h3,{id:"features-layer-multiple-styles",children:"Features Layer Multiple Styles"}),`
`,t.jsx(e.p,{children:"Zie onder de story voor de TypeScript code."}),`
`,t.jsx(p,{of:u}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"TypeScript code"}),t.jsx(k,{code:X,language:"ts",dark:!0})]}),`
`,t.jsx(e.h3,{id:"features-layer",children:"Features Layer"}),`
`,t.jsx(p,{of:g}),`
`,t.jsx(e.h3,{id:"multiple-features-layers",children:"Multiple Features Layers"}),`
`,t.jsx(p,{of:v}),`
`,t.jsx(e.h3,{id:"wfs-layer",children:"WFS Layer"}),`
`,t.jsx(p,{of:b}),`
`,t.jsx(e.h3,{id:"wms-layer",children:"WMS Layer"}),`
`,t.jsx(p,{of:f}),`
`,t.jsx(e.h3,{id:"wms-wfs-layer-combination",children:"WMS WFS Layer Combination"}),`
`,t.jsx(p,{of:h}),`
`,t.jsx(e.h3,{id:"custom-legend-items",children:"Custom legend items"}),`
`,t.jsx(p,{of:x}),`
`,t.jsx(e.h3,{id:"custom-legend-layout-vertical",children:"Custom legend layout vertical"}),`
`,t.jsx(p,{of:L}),`
`,t.jsx(e.h3,{id:"pattern",children:"Pattern"}),`
`,t.jsx(p,{of:S})]})}function Z(r={}){const{wrapper:e}={...w(),...r.components};return e?t.jsx(e,{...r,children:t.jsx($,{...r})}):$(r)}function H(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const ue={id:"map-legend",title:"map/legend",tags:["autodocs"],args:o,argTypes:O,parameters:{docs:{page:Z}}},g=W;g.storyName="vl-map-legend - features-layer";const u=B;u.storyName="vl-map-legend - features-layer multiple styles";const v=G;v.storyName="vl-map-legend - multiple features-layers";const b=N;b.storyName="vl-map-legend - wfs-layer";const f=V;f.storyName="vl-map-legend - wms-layer";const h=R;h.storyName="vl-map-legend - wms - wfs -layer";const x=A;x.storyName="vl-map-legend - custom items";const L=_;L.storyName="vl-map-legend - layout vertical";const S=K;S.storyName="vl-map-legend - pattern";g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"MLFL",...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"MLFLMS",...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"MLMFL",...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"MLWFSL",...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"MLWMSL",...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"MLWMSWFSL",...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"MLCI",...x.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"MLLV",...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"MLP",...S.parameters?.docs?.source}}};const ge=["MapLegendFeaturesLayer","MapLegendFeaturesLayerMultipleStyles","MapLegendMultipleFeaturesLayers","MapLegendWfsLayer","MapLegendWmsLayer","MapLegendWmsWfsLayer","MapLegendCustomItems","MapLegendLayoutVertical","MapLegendPattern"];export{x as MapLegendCustomItems,g as MapLegendFeaturesLayer,u as MapLegendFeaturesLayerMultipleStyles,L as MapLegendLayoutVertical,v as MapLegendMultipleFeaturesLayers,S as MapLegendPattern,b as MapLegendWfsLayer,f as MapLegendWmsLayer,h as MapLegendWmsWfsLayer,ge as __namedExportsOrder,ue as default};
