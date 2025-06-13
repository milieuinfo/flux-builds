"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9867],{"./libs/map/src/components/legend/stories/vl-map-legend.stories.ts":(e,a,t)=>{t.r(a),t.d(a,{MapLegendCustomItems:()=>$,MapLegendFeaturesLayer:()=>z,MapLegendFeaturesLayerMultipleStyles:()=>L,MapLegendMultipleFeaturesLayers:()=>_,MapLegendWfsLayer:()=>F,MapLegendWmsLayer:()=>j,MapLegendWmsWfsLayer:()=>T,__namedExportsOrder:()=>M,default:()=>w}),t("./libs/map/src/vl-map.ts"),t("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),t("./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),t("./libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts");var r=t("./libs/map/src/components/legend/vl-map-legend.ts"),l=t("./libs/common/storybook/src/index.ts"),s=t("./node_modules/lit/index.js");t("./libs/map/src/components/layer-style/vl-map-layer-style.ts");let o={...l._O,bottom:"",left:"",placement:r.q.BOTTOM_RIGHT,right:"",top:""},n={...(0,l.Wp)(),bottom:{name:"bottom",description:'Bepaalt de "bottom" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:l.vK.STRING},category:l.aA.ATTRIBUTES,defaultValue:{summary:o.bottom}}},left:{name:"left",description:'Bepaalt de "left" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:l.vK.STRING},category:l.aA.ATTRIBUTES,defaultValue:{summary:o.left}}},placement:{name:"data-vl-placement",description:"Bepaalt de plaats van de legende op de kaart.",control:{type:"select",options:[r.q.TOP_LEFT,r.q.TOP_RIGHT,r.q.BOTTOM_LEFT,r.q.BOTTOM_RIGHT]},table:{type:{summary:`"${r.q.TOP_LEFT}" |
                "${r.q.TOP_RIGHT}" |
                "${r.q.BOTTOM_LEFT}" |
                "${r.q.BOTTOM_RIGHT}"`},category:l.aA.ATTRIBUTES,defaultValue:{summary:o.placement}}},right:{name:"right",description:'Bepaalt de "right" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:l.vK.STRING},category:l.aA.ATTRIBUTES,defaultValue:{summary:o.right}}},top:{name:"top",description:'Bepaalt de "top" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',table:{type:{summary:l.vK.STRING},category:l.aA.ATTRIBUTES,defaultValue:{summary:o.top}}}},d=()=>{document.addEventListener("DOMContentLoaded",async()=>{let e=document.getElementById("map");await e.ready,document.querySelector("#style-1").appliesTo=e=>"style-1"===e.get("styleId"),document.querySelector("#style-2").appliesTo=e=>"style-2"===e.get("styleId"),document.querySelector("#style-3").appliesTo=e=>"style-3"===e.get("styleId")})},p=(0,l.yg)(o,({bottom:e,left:a,placement:t,right:r,top:l})=>(d(),(0,s.dy)` <vl-map id="map">
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
            data-vl-placement=${t}
            bottom=${e}
            top=${l}
            right=${r}
            left=${a}
        ></vl-map-legend>
    </vl-map>`));var m=t("./node_modules/lit-html/lit-html.js");let i=(0,l.yg)(o,({bottom:e,left:a,placement:t,right:r,top:l})=>(0,m.dy)` <vl-map id="map">
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
            data-vl-placement=${t}
            bottom=${e}
            top=${l}
            right=${r}
            left=${a}
        ></vl-map-legend>
    </vl-map>`);t("./libs/map/src/components/action/draw-action/measure-action/vl-map-measure-action.ts"),t("./libs/map/src/components/controls/measure-control/vl-map-measure-control.ts"),t("./libs/map/src/components/controls/vl-map-action-controls.ts");let c=(0,l.yg)(o,({bottom:e,left:a,placement:t,right:r,top:l})=>(0,m.dy)` <vl-map>
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
            data-vl-placement=${t}
            bottom=${e}
            top=${l}
            right=${r}
            left=${a}
        ></vl-map-legend>
    </vl-map>`);t("./libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts");let y=(0,l.yg)(o,({bottom:e,left:a,placement:t,right:r,top:l})=>(0,s.dy)`
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
                data-vl-placement=${t}
                bottom=${e}
                top=${l}
                right=${r}
                left=${a}
            ></vl-map-legend>
        </vl-map>
    `),v=(0,l.yg)(o,({bottom:e,left:a,placement:t,right:r,top:l})=>(0,s.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                data-vl-layers="grondwater:beschermingszones_2014"
                data-vl-name="Beschermingszones"
                data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-legend
                data-vl-placement=${t}
                bottom=${e}
                top=${l}
                right=${r}
                left=${a}
            ></vl-map-legend>
        </vl-map>
    `),u=(0,l.yg)(o,({bottom:e,left:a,placement:t,right:r,top:l})=>(0,s.dy)`
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
                data-vl-placement=${t}
                bottom=${e}
                top=${l}
                right=${r}
                left=${a}
            ></vl-map-legend>
        </vl-map>
    `);t("./libs/map/src/components/legend-item/vl-map-legend-item.ts");let g=(0,l.yg)(o,({bottom:e,left:a,placement:t,right:r,top:l})=>(0,m.dy)` <vl-map>
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
        <vl-map-legend data-vl-placement=${t} bottom=${e} top=${l} right=${r} left=${a}>
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
    </vl-map>`);t("./node_modules/react/index.js");var b=t("./node_modules/react/jsx-runtime.js"),f=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),h=t("./node_modules/@storybook/blocks/dist/index.mjs");function x(e){let a=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,f.ah)(),e.components);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.h1,{id:"map-legend",children:"Map Legend"}),"\n",(0,b.jsxs)(a.p,{children:["Gebruik de ",(0,b.jsx)(a.code,{children:"map-legend"})," component om een legende af te beelden op de kaart."]}),"\n",(0,b.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:"language-js",children:"import { VlMapLegend } from '@domg-wc/map';\n"})}),"\n",(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:"language-html",children:"<vl-map-legend></vl-map-legend>\n"})}),"\n",(0,b.jsx)(a.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,b.jsx)(h.Ed,{of:L}),"\n",(0,b.jsx)(a.h2,{id:"voorbeelden",children:"Voorbeelden"}),"\n",(0,b.jsx)(a.h3,{id:"features-layer-multiple-styles",children:"Features Layer Multiple Styles"}),"\n",(0,b.jsx)(a.p,{children:"Zie onder de story voor de TypeScript code."}),"\n",(0,b.jsx)(h.Xz,{of:L}),"\n",(0,b.jsxs)("details",{children:[(0,b.jsx)("summary",{children:"TypeScript code"}),(0,b.jsx)(h.Hw,{code:"export const linkStylesToFeatures = ()=>{\n    document.addEventListener('DOMContentLoaded', async ()=>{\n        const map = document.getElementById('map');\n        await map.ready;\n        document.querySelector('#style-1').appliesTo = (feature)=>feature.get('styleId') === 'style-1';\n        document.querySelector('#style-2').appliesTo = (feature)=>feature.get('styleId') === 'style-2';\n        document.querySelector('#style-3').appliesTo = (feature)=>feature.get('styleId') === 'style-3';\n    });\n};\n",language:"ts",dark:!0})]}),"\n",(0,b.jsx)(a.h3,{id:"features-layer",children:"Features Layer"}),"\n",(0,b.jsx)(h.Xz,{of:z}),"\n",(0,b.jsx)(a.h3,{id:"multiple-features-layers",children:"Multiple Features Layers"}),"\n",(0,b.jsx)(h.Xz,{of:_}),"\n",(0,b.jsx)(a.h3,{id:"wfs-layer",children:"WFS Layer"}),"\n",(0,b.jsx)(h.Xz,{of:F}),"\n",(0,b.jsx)(a.h3,{id:"wms-layer",children:"WMS Layer"}),"\n",(0,b.jsx)(h.Xz,{of:j}),"\n",(0,b.jsx)(a.h3,{id:"wms-wfs-layer-combination",children:"WMS WFS Layer Combination"}),"\n",(0,b.jsx)(h.Xz,{of:T}),"\n",(0,b.jsx)(a.h3,{id:"custom-legend-items",children:"Custom legend items"}),"\n",(0,b.jsx)(h.Xz,{of:$}),"\n",(0,b.jsx)(a.h2,{id:"referenties",children:"Referenties"}),"\n",(0,b.jsx)(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,b.jsx)(a.p,{children:(0,b.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-legend-vl-map-legend-wfs-layer--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Legend Wfs Layer"})})]})}let w={title:"map/legend",tags:["autodocs"],args:o,argTypes:n,parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,f.ah)(),e.components);return a?(0,b.jsx)(a,Object.assign({},e,{children:(0,b.jsx)(x,e)})):x(e)}}}},z=i;z.storyName="vl-map-legend - features-layer";let L=p;L.storyName="vl-map-legend - features-layer multiple styles";let _=c;_.storyName="vl-map-legend - multiple features-layers";let F=y;F.storyName="vl-map-legend - wfs-layer";let j=v;j.storyName="vl-map-legend - wms-layer";let T=u;T.storyName="vl-map-legend - wms - wfs -layer";let $=g;$.storyName="vl-map-legend - custom items",z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"MLFL",...z.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"MLFLMS",...L.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"MLMFL",..._.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"MLWFSL",...F.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"MLWMSL",...j.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"MLWMSWFSL",...T.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"MLCI",...$.parameters?.docs?.source}}};let M=["MapLegendFeaturesLayer","MapLegendFeaturesLayerMultipleStyles","MapLegendMultipleFeaturesLayers","MapLegendWfsLayer","MapLegendWmsLayer","MapLegendWmsWfsLayer","MapLegendCustomItems"]},"./libs/map/src/components/layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer.ts":(e,a,t)=>{var r=t("./libs/common/utilities/src/index.ts"),l=t("./node_modules/ol/format/GML2.js"),s=t("./node_modules/ol/loadingstrategy.js"),o=t("./node_modules/ol/source/Vector.js"),n=t("./libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts");class d extends n.b{connectedCallback(){return this._source=this.__createSource(),this._layer=this._createLayer(),super.connectedCallback()}get _url(){let e=this.getAttribute("url");if(!e)throw Error("URL not defined");return new URL(e)}get _layers(){let e=this.getAttribute("layers");if(!e)throw Error("Layers not defined");return e}__createSource(){return new o.Z({format:this.__sourceFormat,strategy:this.__loadingStrategy,url:this.__getWfsUrl.bind(this)})}__getWfsUrl(e,a,t){let r=this._url,{searchParams:l}=r;return l.set("service","WFS"),l.set("request","GetFeature"),l.set("typename",this._layers),l.set("bbox",e.join(",")),l.set("srsname",t.getCode()),l.set("outputFormat",this.__wfsOutputFormat),l.set("version",this.__wfsVersion),r}get __loadingStrategy(){return s.VW}get __sourceFormat(){return new l.Z}get __wfsOutputFormat(){return"GML2"}get __wfsVersion(){return"2.0.0"}}d=function(e,a,t,r){var l,s=arguments.length,o=s<3?a:null===r?r=Object.getOwnPropertyDescriptor(a,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,a,t,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(s<3?l(o):s>3?l(a,t,o):l(a,t))||o);return s>3&&o&&Object.defineProperty(a,t,o),o}([(0,r.a6)("vl-map-wfs-layer")],d)}}]);