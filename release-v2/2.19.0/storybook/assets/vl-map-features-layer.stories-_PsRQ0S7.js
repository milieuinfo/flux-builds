import{Z as o,_ as s,u,j as e,C as b,b8 as v,s as h,x as E}from"./iframe-CY-ZM549.js";import"./vl-map-base-layer-BdyzNi5-.js";import"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import"./vl-map-features-layer-Bw14ba3R.js";import{m as F,a as T}from"./vl-map-layer.stories-arg-hwAfVFR7.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-vector-layer-C3_HId6n.js";const r={...T,autoExtent:!1,autoExtentMaxZoom:"",cluster:!1,clusterDistance:null,features:"",featuresProp:null,projectionCode:""},S={...F,autoExtent:{name:"auto-extent",description:"Automatisch zoomen op de kaartlaag zodat al de features zichtbaar zijn.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(r.autoExtent)}}},autoExtentMaxZoom:{name:"auto-extent-max-zoom",description:"Het maximum niveau tot waar er automatisch gezoomd wordt bij een extent.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:r.autoExtentMaxZoom}}},cluster:{name:"cluster",description:"Geeft aan of de features geclusterd moeten worden of niet.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.BOOLEAN},category:o.ATTRIBUTES,defaultValue:{summary:String(r.cluster)}}},clusterDistance:{name:"cluster-distance",description:"De afstand vanaf er tussen features geclusterd mag worden.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:String(r.clusterDistance)}}},features:{name:"features",description:"Attribuut dat de kaartlaag bevat.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:r.features}}},projectionCode:{name:"projection-code",description:"Indien je Lambert 72 coördinaten gebruikt op een Lambert 2008 kaart, moet je de projectie code EPSG:31370 meegeven als projection-code. Geef je dit niet mee, dan zal de kaartlaag de projectie code van de kaart overnemen.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.STRING},category:o.ATTRIBUTES,defaultValue:{summary:r.projectionCode}}},featuresProp:{name:"features",description:"Property die de kaartlaag bevat.",table:{type:{summary:s.STRING},category:o.PROPERTIES,defaultValue:{summary:r.featuresProp}}}};function i(t){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...u(),...t.components},{FluxComponentMetaData:l}=a;return l||$("FluxComponentMetaData"),e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-features-layer",children:"Map Features Layer"}),`
`,e.jsx(l,{id:"map-components-layer-vector-features-layer"}),`
`,e.jsx(a.h2,{id:"doel",children:"Doel"}),`
`,e.jsxs(a.p,{children:["Gebruik de ",e.jsx(a.code,{children:"map-features-layer"}),` component om een kaartlaag af te beelden waarbij je een set van te tonen features kan
stellen.`,e.jsx("br",{}),`
Deze component erft over van de `,e.jsx(a.code,{children:"VlMapVectorLayer"})," klasse, die op zijn beurt overerft van de ",e.jsx(a.code,{children:"VlMapLayer"})," klasse."]}),`
`,e.jsx(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import { VlMapFeaturesLayer } from '@domg-wc/map';
`})}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<vl-map-features-layer></vl-map-features-layer>
`})}),`
`,e.jsx(b,{of:n}),`
`,e.jsx(a.h2,{id:"openlayers-feature-objecten-rechtstreeks-toevoegen",children:"OpenLayers Feature-objecten rechtstreeks toevoegen"}),`
`,e.jsxs(a.p,{children:["Naast de GeoJSON-flows (",e.jsx(a.code,{children:"features"}),"-attribuut, ",e.jsx(a.code,{children:"addFeature"}),", ",e.jsx(a.code,{children:"addFeatureCollection"}),`) kan je ook OpenLayers
`,e.jsx(a.code,{children:"Feature"}),"-objecten rechtstreeks op de laag zetten met ",e.jsx(a.code,{children:"addFeatures(features)"})," (toevoegen) en ",e.jsx(a.code,{children:"setFeatures(features)"}),`
(alles vervangen). Properties gezet via `,e.jsx(a.code,{children:"feature.set(...)"})," en ",e.jsx(a.code,{children:"feature.setId(...)"}),` blijven daarbij behouden - er
gebeurt geen GeoJSON-serialisatie.`]}),`
`,e.jsxs(a.p,{children:[`Let op: anders dan de GeoJSON-flows transformeren deze methodes de geometrie niet. De features moeten dus al in de
kaartprojectie staan. Net als `,e.jsx(a.code,{children:"addFeature"})," falen ze stil wanneer ze vóór ",e.jsx(a.code,{children:"connectedCallback"})," worden aangeroepen."]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-js",children:`import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

const feature = new Feature({ geometry: new Point([x, y]) });
feature.setId(1);
feature.set('emissiebron', emissiebron);

layer.setFeatures([feature]);
`})}),`
`,e.jsx(a.h2,{id:"configuratie",children:"Configuratie"}),`
`,e.jsx(v,{of:n})]})}function z(t={}){const{wrapper:a}={...u(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(i,{...t})}):i(t)}function $(t,a){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const P=JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",id:10,geometry:{type:"Polygon",coordinates:[[[8e4,18e4],[12e4,18e4],[12e4,21e4],[8e4,21e4],[8e4,18e4]]]}}]}),G={id:"map-layer-vector-layer-features-layer",title:"map/layer/vector-layer/features-layer",tags:["autodocs"],args:r,argTypes:S,parameters:{docs:{page:z}}},n=h(r,({autoExtent:t,autoExtentMaxZoom:a,cluster:l,clusterDistance:c,features:d,hidden:m,maxResolution:p,minResolution:y,name:f,opacity:g,featuresProp:x,zIndex:j})=>E`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer
                ?auto-extent=${t}
                auto-extent-max-zoom=${a}
                ?cluster=${l}
                cluster-distance=${c}
                features=${d}
                .features=${x}
                ?hidden=${m}
                max-resolution=${p}
                min-resolution=${y}
                name=${f}
                opacity=${g}
                projection-code="EPSG:31370"
                z-index=${j}
            >
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                name="rode laag"
                features=${P}
                projection-code="EPSG:31370"
                z-index="1"
            >
                <vl-map-layer-style
                    color="rgba(204, 40, 40, 0.6)"
                    border-color="rgba(204, 40, 40, 1)"
                    border-size="2"
                ></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);n.storyName="vl-map-features-layer - default";n.args={featuresProp:{type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[21e4,19e4]}},{type:"Feature",id:2,geometry:{type:"LineString",coordinates:[[17e4,17e4],[15e4,206e3]]}},{type:"Feature",id:3,geometry:{type:"Polygon",coordinates:[[[44e3,171e3],[1e5,171e3],[1e5,205e3],[44e3,205e3],[44e3,171e3]]]}}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`story(mapFeaturesLayerArgs, ({
  autoExtent,
  autoExtentMaxZoom,
  cluster,
  clusterDistance,
  features,
  hidden,
  maxResolution,
  minResolution,
  name,
  opacity,
  featuresProp,
  zIndex
}) => html\`
        <vl-map lambert2008>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer
                ?auto-extent=\${autoExtent}
                auto-extent-max-zoom=\${autoExtentMaxZoom}
                ?cluster=\${cluster}
                cluster-distance=\${clusterDistance}
                features=\${features}
                .features=\${featuresProp}
                ?hidden=\${hidden}
                max-resolution=\${maxResolution}
                min-resolution=\${minResolution}
                name=\${name}
                opacity=\${opacity}
                projection-code="EPSG:31370"
                z-index=\${zIndex}
            >
                <vl-map-layer-style border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                name="rode laag"
                features=\${redPolygonFeatures}
                projection-code="EPSG:31370"
                z-index="1"
            >
                <vl-map-layer-style
                    color="rgba(204, 40, 40, 0.6)"
                    border-color="rgba(204, 40, 40, 1)"
                    border-size="2"
                ></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    \`)`,...n.parameters?.docs?.source}}};const N=["MapFeaturesLayerDefault"];export{n as MapFeaturesLayerDefault,N as __namedExportsOrder,G as default};
