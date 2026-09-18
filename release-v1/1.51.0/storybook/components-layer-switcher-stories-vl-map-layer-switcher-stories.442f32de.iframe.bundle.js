"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5419],{"../../libs/map/src/components/layer-switcher/stories/vl-map-layer-switcher.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{MapLayerSwitcherDefault:()=>f,MapLayerSwitcherDynamic:()=>k,MapLayerSwitcherResolutions:()=>x,MapLayerSwitcherSubselection:()=>_,__namedExportsOrder:()=>w,default:()=>y});var a=r("../../libs/common/storybook/src/index.ts"),l=r("../../node_modules/lit-html/lit-html.js");r("../../libs/map/src/vl-map.ts"),r("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),r("../../libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts"),r("../../libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts"),r("../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts"),r("../../libs/map/src/components/layer-switcher/vl-map-layer-switcher.ts");let s={...a.D8,title:"Kaartlagen",layers:null},o={...(0,a.RN)(),title:{name:"data-vl-title",description:"De titel bovenaan de layer-switcher.",table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:s.title}}},layers:{name:"layers",description:"Kan gebruikt worden om een subselectie van kaartlagen te tonen.<br>Geef hier de data-vl-name attributen van de kaartlagen mee.<br>Kaartlagen worden niet langer automatisch toegevoegd of verwijderd in de layer-switcher.",table:{type:{summary:`${a.QE.STRING}[]`},category:a.R6.PROPERTIES,defaultValue:{summary:s.layers}}}};r("../../node_modules/react/index.js");var i=r("../../node_modules/react/jsx-runtime.js"),n=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=r("../../node_modules/@storybook/blocks/dist/index.mjs");function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",a:"a",h3:"h3"},(0,n.RP)(),e.components),{VluxMetaData:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"map-layer-switcher",children:"Map Layer Switcher"}),"\n",(0,i.jsx)(r,{id:"map-layer-switcher"}),"\n",(0,i.jsxs)(t.p,{children:["Gebruik de ",(0,i.jsx)(t.code,{children:"map-layer-switcher"})," component om kaartlagen zichtbaar of onzichtbaar te maken."]}),"\n",(0,i.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { VlMapLayerSwitcher } from '@domg-wc/map';\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<vl-map-layer-switcher></vl-map-layer-switcher>\n"})}),"\n",(0,i.jsx)(c.Hl,{of:f}),"\n",(0,i.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,i.jsx)(c.ov,{of:f}),"\n",(0,i.jsx)(t.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["het is belangrijk dat de kaartlagen zich binnen de ",(0,i.jsx)(t.a,{href:"?path=/docs/map-map--map-default",children:"vl-map"})," bevinden"]}),"\n",(0,i.jsxs)(t.li,{children:["het is belangrijk dat de ",(0,i.jsx)(t.code,{children:"vl-map-layer-switcher"})," zich binnen de ",(0,i.jsx)(t.a,{href:"?path=/docs/map-map--map-default",children:"vl-map"})," bevindt"]}),"\n",(0,i.jsxs)(t.li,{children:["het ",(0,i.jsx)(t.code,{children:"data-vl-name"})," attribuut van de kaartlaag wordt gebruikt als label voor de checkbox"]}),"\n",(0,i.jsxs)(t.li,{children:["deze component wordt typisch in de ",(0,i.jsx)(t.a,{href:"?path=/docs/map-side-sheet--map-side-sheet-default",children:"vl-map-side-sheet"})," gebruikt"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,i.jsx)(t.h3,{id:"subselectie-van-kaartlagen",children:"Subselectie van kaartlagen"}),"\n",(0,i.jsxs)(t.p,{children:["Kan gebruikt worden om een subselectie van kaartlagen te tonen.",(0,i.jsx)("br",{}),"\nKaartlagen worden niet langer automatisch toegevoegd of verwijderd in de layer-switcher."]}),"\n",(0,i.jsx)(c.Hl,{of:_}),"\n",(0,i.jsx)(t.h3,{id:"kaartlagen-met-resoluties",children:"Kaartlagen met resoluties"}),"\n",(0,i.jsx)(t.p,{children:"Gebruik de zoom controls om de verschillende kaartlagen te laten verschijnen."}),"\n",(0,i.jsx)(c.Hl,{of:x}),"\n",(0,i.jsx)(t.h3,{id:"dynamische-kaartlagen",children:"Dynamische kaartlagen"}),"\n",(0,i.jsxs)(t.p,{children:["Voorbeeld hoe dynamisch lagen toegevoegd en verwijderd kunnen worden.",(0,i.jsx)("br",{}),"\nZie onder de story voor het volledige code voorbeeld."]}),"\n",(0,i.jsx)(c.Hl,{of:k}),"\n",(0,i.jsxs)("details",{children:[(0,i.jsx)("summary",{children:"volledig code voorbeeld van bovenstaande implementatie"}),(0,i.jsx)(c.kL,{code:"export const dynamicLayerSwitcherImplementation = ()=>{\n    const vlMapSelector = 'vl-map#map-dynamic-layers';\n    const handleAddLayerForId = (id)=>{\n        const newLayer = document.querySelector(`vl-map-features-layer#${id}`);\n        const vlMap = document.querySelector(vlMapSelector);\n        vlMap.appendChild(newLayer);\n        const addButton = document.querySelector(`#add-${id}`);\n        const toggleButton = document.querySelector(`#toggle-${id}`);\n        const removeButton = document.querySelector(`#remove-${id}`);\n        toggleButton.hidden = false;\n        removeButton.hidden = false;\n        addButton.hidden = true;\n    };\n    const handleToggleLayerForId = (id)=>{\n        const layerToToggle = document.querySelector(`vl-map-features-layer#${id}`);\n        const layer = layerToToggle.layer;\n        layer.setVisible(!layer.getVisible());\n    };\n    const handleRemoveLayerForId = (id)=>{\n        const layerToRemove = document.querySelector(`vl-map-features-layer#${id}`);\n        const vlMap = document.querySelector(vlMapSelector);\n        vlMap.removeChild(layerToRemove);\n        const removeButton = document.querySelector(`#remove-${id}`);\n        removeButton.parentElement.remove();\n    };\n    // exporteren functies die gebruikt worden in template\n    return {\n        handleAddLayerForId,\n        handleToggleLayerForId,\n        handleRemoveLayerForId\n    };\n};\nexport default dynamicLayerSwitcherImplementation;\n",language:"ts",dark:!0})]}),"\n",(0,i.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,i.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-layer-switcher--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Layer Switcher"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapLayerSwitcher.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Layer Switcher"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-layer-switcher.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Map Layer Switcher"})})]})}let u=()=>(0,l.qy)`
        <vl-map-features-layer data-vl-name="Kaartlaag zwart" .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[149055,199908]}}]}} id="zwart">
            <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer data-vl-name="Kaartlaag geel" .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[154055,199908]}}]}} id="geel">
            <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer data-vl-name="Kaartlaag rood" .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[159055,199908]}}]}} id="rood">
            <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>
        </vl-map-features-layer>
    `,h=(e,t,r,a)=>e.map(e=>(0,l.qy)`
                <section class="vl-group-next vl-margin-next--small" id=${e}>
                    <vl-button-next id=${`add-${e}`} @click=${()=>t(e)} icon="add">
                        Voeg laag ${e} toe
                    </vl-button-next>
                    <vl-button-next
                        toggle
                        data-layer=${`Kaartlaag ${e}`}
                        on
                        id=${`toggle-${e}`}
                        @click=${()=>r(e)}
                        icon="view-add"
                        hidden
                    >
                        Toggle laag ${e} zichtbaarheid
                    </vl-button-next>
                    <vl-button-next id=${`remove-${e}`} @click=${()=>a(e)} error icon="bin" hidden>
                        Verwijder laag ${e}
                    </vl-button-next>
                </section>
            `),m=()=>{let e="vl-map#map-dynamic-layers";return{handleAddLayerForId:t=>{let r=document.querySelector(`vl-map-features-layer#${t}`);document.querySelector(e).appendChild(r);let a=document.querySelector(`#add-${t}`),l=document.querySelector(`#toggle-${t}`),s=document.querySelector(`#remove-${t}`);l.hidden=!1,s.hidden=!1,a.hidden=!0},handleToggleLayerForId:e=>{let t=document.querySelector(`vl-map-features-layer#${e}`).layer;t.setVisible(!t.getVisible())},handleRemoveLayerForId:t=>{let r=document.querySelector(`vl-map-features-layer#${t}`);document.querySelector(e).removeChild(r),document.querySelector(`#remove-${t}`).parentElement.remove()}}},y={id:"map-layer-switcher",title:"map/layer-switcher",tags:["autodocs"],args:s,argTypes:o,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,n.RP)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}},p={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[149055,199908]}}]},v={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[154055,199908]}}]},b={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[159055,199908]}}]},g=(0,a._7)(s,({title:e,layers:t})=>(0,l.qy)`
        <vl-map lambert2008>
            <vl-map-side-sheet>
                <vl-map-layer-switcher data-vl-title=${e} .layers=${t}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer data-vl-name="Kaartlaag 1" .features=${p} projection-code="EPSG:31370">
                <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer data-vl-name="Kaartlaag 2" .features=${v} projection-code="EPSG:31370">
                <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer data-vl-name="Kaartlaag 3" .features=${b} projection-code="EPSG:31370">
                <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            </vl-map-wmts-layer>
            </vl-map-wfs-layer>
        </vl-map>
    `),f=g.bind({});f.storyName="vl-map-layer-switcher - default";let _=g.bind({});_.storyName="vl-map-layer-switcher - subselection",_.args={layers:["Kaartlaag 1","Kaartlaag 2"]};let x=(0,a._7)(s,({title:e,layers:t})=>(0,l.qy)`
        <vl-map lambert2008>
            <vl-map-side-sheet>
                <vl-map-layer-switcher data-vl-title=${e} .layers=${t}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer
                data-vl-name="Kaartlaag met resolutie 1"
                data-vl-min-resolution="0"
                data-vl-max-resolution="90"
                .features=${p}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                data-vl-name="Kaartlaag met resolutie 2"
                data-vl-min-resolution="90"
                data-vl-max-resolution="180"
                .features=${v}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                data-vl-name="Kaartlaag met resolutie 3"
                data-vl-min-resolution="180"
                data-vl-max-resolution="270"
                .features=${b}
                projection-code="EPSG:31370"
            >
                <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);x.storyName="vl-map-layer-switcher - resolutions";let k=(0,a._7)(s,({title:e,layers:t})=>{let{handleAddLayerForId:r,handleToggleLayerForId:a,handleRemoveLayerForId:s}=m();return(0,l.qy)`
        ${h(["zwart","geel","rood"],r,a,s)}
        ${u()}
        <vl-map
            id="map-dynamic-layers"
            @vl-change=${e=>{let t=document.querySelector(`vl-button-next[data-layer="${e.detail?.currentTarget?.label}"]`);t&&(t.on=e.detail.checked)}}
        >
            <vl-map-side-sheet>
                <vl-map-layer-switcher data-vl-title=${e} .layers=${t}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `});k.storyName="vl-map-layer-switcher - dynamic layers",f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'story(mapLayerSwitcherArgs, ({\n  title,\n  layers\n}) => html`\n        <vl-map lambert2008>\n            <vl-map-side-sheet>\n                <vl-map-layer-switcher data-vl-title=${title} .layers=${layers}></vl-map-layer-switcher>\n            </vl-map-side-sheet>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer data-vl-name="Kaartlaag 1" .features=${features1} projection-code="EPSG:31370">\n                <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n            <vl-map-features-layer data-vl-name="Kaartlaag 2" .features=${features2} projection-code="EPSG:31370">\n                <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n            <vl-map-features-layer data-vl-name="Kaartlaag 3" .features=${features3} projection-code="EPSG:31370">\n                <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n            </vl-map-wmts-layer>\n            </vl-map-wfs-layer>\n        </vl-map>\n    `)',...f.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:'story(mapLayerSwitcherArgs, ({\n  title,\n  layers\n}) => html`\n        <vl-map lambert2008>\n            <vl-map-side-sheet>\n                <vl-map-layer-switcher data-vl-title=${title} .layers=${layers}></vl-map-layer-switcher>\n            </vl-map-side-sheet>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer data-vl-name="Kaartlaag 1" .features=${features1} projection-code="EPSG:31370">\n                <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n            <vl-map-features-layer data-vl-name="Kaartlaag 2" .features=${features2} projection-code="EPSG:31370">\n                <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n            <vl-map-features-layer data-vl-name="Kaartlaag 3" .features=${features3} projection-code="EPSG:31370">\n                <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n            </vl-map-wmts-layer>\n            </vl-map-wfs-layer>\n        </vl-map>\n    `)',..._.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'story(mapLayerSwitcherArgs, ({\n  title,\n  layers\n}) => html`\n        <vl-map lambert2008>\n            <vl-map-side-sheet>\n                <vl-map-layer-switcher data-vl-title=${title} .layers=${layers}></vl-map-layer-switcher>\n            </vl-map-side-sheet>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer\n                data-vl-name="Kaartlaag met resolutie 1"\n                data-vl-min-resolution="0"\n                data-vl-max-resolution="90"\n                .features=${features1}\n                projection-code="EPSG:31370"\n            >\n                <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n            <vl-map-features-layer\n                data-vl-name="Kaartlaag met resolutie 2"\n                data-vl-min-resolution="90"\n                data-vl-max-resolution="180"\n                .features=${features2}\n                projection-code="EPSG:31370"\n            >\n                <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n            <vl-map-features-layer\n                data-vl-name="Kaartlaag met resolutie 3"\n                data-vl-min-resolution="180"\n                data-vl-max-resolution="270"\n                .features=${features3}\n                projection-code="EPSG:31370"\n            >\n                <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n        </vl-map>\n    `)',...x.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(mapLayerSwitcherArgs, ({\n  title,\n  layers\n}) => {\n  const layerIds = ['zwart', 'geel', 'rood'];\n  const {\n    handleAddLayerForId,\n    handleToggleLayerForId,\n    handleRemoveLayerForId\n  } = dynamicLayerSwitcherImplementation();\n  return html`\n        ${storyControlTemplates(layerIds, handleAddLayerForId, handleToggleLayerForId, handleRemoveLayerForId)}\n        ${mapLayersToAddOrRemove()}\n        <vl-map\n            id=\"map-dynamic-layers\"\n            @vl-change=${e => {\n    const toggleButton = document.querySelector<VlButtonComponent>(`vl-button-next[data-layer=\"${e.detail?.currentTarget?.label}\"]`);\n    if (toggleButton) {\n      toggleButton.on = e.detail.checked;\n    }\n  }}\n        >\n            <vl-map-side-sheet>\n                <vl-map-layer-switcher data-vl-title=${title} .layers=${layers}></vl-map-layer-switcher>\n            </vl-map-side-sheet>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n        </vl-map>\n    `;\n})",...k.parameters?.docs?.source}}};let w=["MapLayerSwitcherDefault","MapLayerSwitcherSubselection","MapLayerSwitcherResolutions","MapLayerSwitcherDynamic"]},"../../node_modules/ol/source/Cluster.js":(e,t,r)=>{r.d(t,{A:()=>h});var a=r("../../node_modules/ol/events/EventType.js"),l=r("../../node_modules/ol/Feature.js"),s=r("../../node_modules/ol/geom/Point.js"),o=r("../../node_modules/ol/source/Vector.js"),i=r("../../node_modules/ol/coordinate.js"),n=r("../../node_modules/ol/asserts.js"),c=r("../../node_modules/ol/extent.js"),d=r("../../node_modules/ol/util.js");class u extends o.A{constructor(e){super({attributions:e.attributions,wrapX:e.wrapX}),this.resolution=void 0,this.distance=void 0!==e.distance?e.distance:20,this.minDistance=e.minDistance||0,this.interpolationRatio=0,this.features=[],this.geometryFunction=e.geometryFunction||function(e){let t=e.getGeometry();return(0,n.v)(!t||"Point"===t.getType(),"The default `geometryFunction` can only handle `Point` or null geometries"),t},this.createCustomCluster_=e.createCluster,this.source=null,this.boundRefresh_=this.refresh.bind(this),this.updateDistance(this.distance,this.minDistance),this.setSource(e.source||null)}clear(e){this.features.length=0,super.clear(e)}getDistance(){return this.distance}getSource(){return this.source}loadFeatures(e,t,r){this.source.loadFeatures(e,t,r),t!==this.resolution&&(this.resolution=t,this.refresh())}setDistance(e){this.updateDistance(e,this.minDistance)}setMinDistance(e){this.updateDistance(this.distance,e)}getMinDistance(){return this.minDistance}setSource(e){this.source&&this.source.removeEventListener(a.A.CHANGE,this.boundRefresh_),this.source=e,e&&e.addEventListener(a.A.CHANGE,this.boundRefresh_),this.refresh()}refresh(){this.clear(),this.cluster(),this.addFeatures(this.features)}updateDistance(e,t){let r=0===e?0:Math.min(t,e)/e,a=e!==this.distance||this.interpolationRatio!==r;this.distance=e,this.minDistance=t,this.interpolationRatio=r,a&&this.refresh()}cluster(){if(void 0===this.resolution||!this.source)return;let e=(0,c.S5)(),t=this.distance*this.resolution,r=this.source.getFeatures(),a={};for(let l=0,s=r.length;l<s;l++){let s=r[l];if(!((0,d.v6)(s) in a)){let r=this.geometryFunction(s);if(r){let l=r.getCoordinates();(0,c.dP)(l,e),(0,c.r)(e,t,e);let s=this.source.getFeaturesInExtent(e).filter(function(e){let t=(0,d.v6)(e);return!(t in a)&&(a[t]=!0,!0)});this.features.push(this.createCluster(s,e))}}}}createCluster(e,t){let r=[0,0];for(let t=e.length-1;t>=0;--t){let a=this.geometryFunction(e[t]);a?(0,i.WQ)(r,a.getCoordinates()):e.splice(t,1)}(0,i.hs)(r,1/e.length);let a=(0,c.q1)(t),o=this.interpolationRatio,n=new s.A([r[0]*(1-o)+a[0]*o,r[1]*(1-o)+a[1]*o]);return this.createCustomCluster_?this.createCustomCluster_(n,e):new l.A({geometry:n,features:e})}}let h=u},"../../libs/form/src/next/checkbox/index.ts":(e,t,r)=>{r.d(t,{v:()=>a.v});var a=r("../../libs/form/src/next/checkbox/vl-checkbox.component.ts")},"../../libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,r)=>{r.d(t,{v:()=>h});var a=r("../../libs/common/utilities/src/index.ts"),l=r("../../libs/elements/src/index.ts"),s=r("../../node_modules/@domg/govflanders-style/common/index.js"),o=r("../../node_modules/@domg/govflanders-style/component/index.js"),i=r("../../node_modules/lit/index.js"),n=r("../../node_modules/lit/directives/class-map.js"),c=r("../../libs/form/src/next/form-control/form-control.ts");let d=(0,i.AH)`
    :host {
        --vl-checkbox--switch__error-color: #d2373c;
        --vl-checkbox--switch__error-background-color: #fbebec;
        --vl-checkbox--switch__success-color: #009e47;
        --vl-checkbox--switch__success-background-color: #e6f5ed;
    }

    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__error-color) !important;
    }

    .vl-checkbox--error .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__error-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--error .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__error-background-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__success-color) !important;
    }

    .vl-checkbox--success .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__success-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }

    .vl-checkbox--success .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__success-background-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }
`;var u=r("../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts");class h extends c.M{static get styles(){return[s.h8,s.BI,l.hF,o.Bc,d]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":null,t={checked:this.checked,currentTarget:this};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){return(0,i.qy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,i.qy)`
            <label class=${(0,n.H)(e)}>
                <input
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    aria-invalid=${this.isInvalid||i.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}renderCheckboxSwitch(){let e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,i.qy)`
            <div class=${(0,n.H)(e)}>
                <input
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    role="switch"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <label for=${this.id} class="vl-checkbox__label">
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked,this.dispatchInput=!0}constructor(...e){super(...e),this.block=u.o.block,this.value=u.o.value,this.checked=u.o.checked,this.isSwitch=u.o.isSwitch,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}}h=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-checkbox-next")],h)},"../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts":(e,t,r)=>{r.d(t,{o:()=>a});let a={...r("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,value:null,checked:!1,isSwitch:!1}},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,r)=>{r.d(t,{L:()=>s});var a=r("../../libs/common/utilities/src/index.ts"),l=r("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class s extends l.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}s=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-map-baselayer-grb-gray")],s)},"../../libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts":(e,t,r)=>{r.d(t,{t:()=>c});var a=r("../../libs/common/utilities/src/index.ts"),l=r("../../node_modules/ol/style/Circle.js"),s=r("../../node_modules/ol/style/Fill.js"),o=r("../../node_modules/ol/style/Stroke.js"),i=r("../../node_modules/ol/style/Style.js"),n=r("../../libs/map/src/components/layer-style/vl-map-layer-style.ts");class c extends n.t{get size(){return Number(this.getAttribute("size"))||5}get borderColor(){return this.getAttribute("border-color")||"rgba(0, 0, 0, 0)"}get borderSize(){return this.getAttribute("border-size")||1}get clusterTextColor(){return this.getAttribute("cluster-text-color")||"#FFF"}get clusterColor(){return this.getAttribute("cluster-color")||"rgba(2, 85, 204, 1)"}get clusterMultiplier(){let e=Number(this.getAttribute("cluster-multiplier"));return isNaN(e)||0===e?1:e}get _styleFunction(){return e=>{let t=e&&e.get&&e.get("features")||[],{textColor:r,color:a,borderColor:n,borderSize:c}=this,d=t.length||1,u=Math.max(1.5,d.toString().length),h=1===d?1:this.clusterMultiplier*u,m=this.size*h;if(this.parentElement&&this.parentElement.cluster){if(this._hasUniqueStyles(t)){let e=t[0].getStyle();e instanceof Function&&(e=e());let r=e.getImage();a=r.getFill().getColor(),n=r.getStroke().getColor(),c=r.getStroke().getWidth(),m=d>1?r.getRadius()*h:r.getRadius()}else this._containsStyle(t)&&(a=this.clusterColor,r=this.clusterTextColor)}return new i.Ay({image:new l.A({fill:new s.A({color:a}),stroke:new o.A({color:n,width:Number(c)}),radius:m}),text:this._getTextStyle(e,r),zIndex:this._featureZIndex(e)})}}get featureLabelFunction(){return e=>{let t=e&&e.get&&e.get("features")||[];if(Array.isArray(t)&&t.length>0){let e=t.length||1;return e>1?e.toString():this.__getFeatureText(t[0])}return this.__getFeatureText(e)}}__getFeatureText(e){return this.textFeatureAttributeName&&this.textFeatureAttributeName?e.get(this.textFeatureAttributeName):""}}c=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-map-layer-circle-style")],c)},"../../libs/map/src/components/layer-switcher/vl-map-layer-switcher.ts":(e,t,r)=>{var a=r("../../libs/common/utilities/src/index.ts"),l=r("../../libs/elements/src/index.ts"),s=r("../../libs/form/src/next/checkbox/index.ts"),o=r("../../libs/form/src/next/form-label/vl-form-label.css.ts"),i=r("../../node_modules/lit/index.js"),n=r("../../node_modules/lit/decorators.js");let c=(0,i.AH)`
    :host {
        display: block;
    }

    :host label {
        display: block;
    }

    :host [data-vl-layer] {
        display: block;
    }
`;class d extends a.jW{static{(0,a.gy)([s.v])}static get styles(){return[l.hF,c,o.B]}static get properties(){return{componentTitle:{type:String,attribute:"data-vl-title",reflect:!0},layers:{type:Array,attribute:"layers"},vlMapLayers:{attribute:!1}}}constructor(){super(),this.componentTitle="Kaartlagen",this.layers=null,this.vlMapLayers=[],this.mapElement=null,this.layerObserver=null,this.computeCheckboxAttributes=()=>{let e=this.mapElement?.resolution;this.vlMapLayers.forEach(t=>{let r=this.shadowRoot?.querySelector(`vl-checkbox-next[data-vl-layer="${t.title}"]`);t.isVisibleAtResolution(e)?r?.removeAttribute("disabled"):r?.setAttribute("disabled",""),t.visible?r?.setAttribute("checked",""):r?.removeAttribute("checked")})}}async connectedCallback(){super.connectedCallback(),this.mapElement=this.closest("vl-map"),await this.layersReady(),this.vlMapLayers=this.getVlMapLayers(),this.mapElement?.on("moveend",this.computeCheckboxAttributes),this.layers||this.observeMapLayers()}async willUpdate(e){e.has("layers")&&(await this.layersReady(),this.vlMapLayers=this.getVlMapLayers()),e.has("vlMapLayers")&&this.vlMapLayers&&this.vlMapLayers?.forEach(({layer:e})=>{e.on("change:visible",()=>{this.computeCheckboxAttributes()})})}updated(){this.computeCheckboxAttributes()}disconnectedCallback(){super.disconnectedCallback(),this.layerObserver?.disconnect(),this.mapElement?.un("moveend",this.computeCheckboxAttributes)}render(){return(0,i.qy)`
            <div>
                <label class="vl-form__label">${this.componentTitle}</label>
                ${this.vlMapLayers.map(e=>(0,i.qy)`
                        <vl-checkbox-next
                            label=${e.title}
                            data-vl-layer=${e.title}
                            checked=${e.visible}
                            @vl-input=${()=>e.visible=!e.visible}
                            >${e.title}</vl-checkbox-next
                        >
                    `)}
            </div>
        `}async layersReady(){return this.mapElement?Promise.all(this.mapElement?.nonBaseLayers.map(e=>a.t7(()=>e.ready))):new Promise((e,t)=>t())}getVlMapLayers(){return this.layers&&Array.isArray(this.layers)?this.mapElement?.nonBaseLayers.filter(e=>this.layers?.includes(e.name))||[]:this.mapElement?.nonBaseLayers||[]}observeMapLayers(){this.layerObserver=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{e instanceof HTMLElement&&e.hasAttribute("data-vl-is-layer")&&(this.vlMapLayers=[...this.vlMapLayers,e])}),e.removedNodes.forEach(e=>{e instanceof HTMLElement&&e.hasAttribute("data-vl-is-layer")&&(this.vlMapLayers=this.vlMapLayers.filter(t=>e!==t))})})}),this.layerObserver.observe(this.mapElement,{subtree:!0,childList:!0})}}d=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,n.EM)("vl-map-layer-switcher")],d)},"../../libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts":(e,t,r)=>{var a=r("../../libs/common/utilities/src/index.ts"),l=r("../../node_modules/ol/format/GeoJSON.js"),s=r("../../node_modules/ol/geom/Point.js"),o=r("../../node_modules/ol/source/Cluster.js"),i=r("../../node_modules/ol/source/Vector.js"),n=r("../../libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts");class c extends n.P{static get _observedAttributes(){return n.P._observedAttributes.concat(["auto-extent","features"])}constructor(){super()}init(){this._geoJSON=new l.A,this._source=this.__createSource(),this._layer=this._createLayer()}async connectedCallback(){this.init(),await super.connectedCallback(),this._autoZoomToExtent()}get features(){return this.__featuresSource?this.__featuresSource.getFeatures():this._featuresFromAttribute}get _featuresFromAttribute(){let e=this.getAttribute("features");return e?this.__readGeoJsonFeatures(e):[]}set features(e){this.setAttribute("features",JSON.stringify(e))}get _autoExtent(){return void 0!=this.getAttribute("auto-extent")}get _autoExtentMaxZoom(){return this.getAttribute("auto-extent-max-zoom")}get cluster(){return void 0!=this.getAttribute("cluster")}get _clusterDistance(){return this.getAttribute("cluster-distance")}removeFeaturesStyle(){this.__featuresSource&&this.__featuresSource.getFeatures()&&this.__featuresSource.getFeatures().forEach(e=>{e.setStyle(null)})}getFeature(e){if(this.__featuresSource&&this.__featuresSource.getFeatures())return this.__featuresSource.getFeatures().filter(t=>t.getId()===e)[0]}getCluster(e){if(this._layer)return this._layer.getSource().getFeatures().filter(t=>{let r=t.get("features");return!!r&&r.some(t=>t.getId()===e)})[0]}async zoomToExtent(e){this.mapElement&&this.boundingBox&&this.mapElement.zoomTo(this.boundingBox,e)}clearFeatures(){this.__featuresSource&&(this.__featuresSource.clear(),this._featuresChanged())}addFeature(e){this.__featuresSource&&(this.__featuresSource.addFeatures([this._geoJSON.readFeature(e,this.__readOptions)]),this._featuresChanged())}addFeatureCollection(e){this.__featuresSource&&(this.__featuresSource.addFeatures(this._geoJSON.readFeatures(e,this.__readOptions)),this._featuresChanged())}_autoExtentChangedCallback(){this._autoZoomToExtent()}_featuresChangedCallback(e,t){t&&this._layer&&(this.__featuresSource.clear(),this.__featuresSource.addFeatures(this.__readGeoJsonFeatures(t)),this._featuresChanged())}_featuresChanged(){this._autoZoomToExtent(),this.rerender()}_autoZoomToExtent(){this._autoExtent&&this.zoomToExtent(this._autoExtentMaxZoom)}get boundingBox(){if(this.__featuresSource&&this.__featuresSource.getFeatures().length>0)return this.__featuresSource.getExtent()}__createSource(){let e=new i.A({features:this.features});return this.cluster?this.__createClusterSource(e):e}__createClusterSource(e){return new o.A({distance:this._clusterDistance,source:e,geometryFunction:e=>{let t=e.getGeometry();return t instanceof s.A?t:this.__ignoreClustering()}})}get __featuresSource(){return this.cluster&&this.source?this.source.getSource():this.source}__ignoreClustering(){return null}__readGeoJsonFeatures(e){return this._geoJSON.readFeatures(e,this.__readOptions)}get __readOptions(){return{dataProjection:this.__layerProjectionCode,featureProjection:this.__mapProjectionCode}}}c=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-map-features-layer")],c)},"../../libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts":(e,t,r)=>{r.d(t,{P:()=>i});var a=r("../../node_modules/ol/layer/Vector.js"),l=r("../../libs/map/src/utils/capabilities.ts"),s=r("../../libs/map/src/components/layer-style/vl-map-layer-style.ts"),o=r("../../libs/map/src/components/layer/vl-map-layer.ts");class i extends o.M{static get _observedAttributes(){return o.M._observedAttributes.concat(["projection-code"])}static get EVENTS(){return{styleChanged:"style-changed"}}constructor(){super(),this.pendingLayerStyles=[],this._styles=[]}get __layerProjectionCode(){return this.hasAttribute("projection-code")?this.getAttribute("projection-code"):this.__mapProjectionCode}get __mapProjectionCode(){return this.mapElement?._projection?.getCode()||(0,l.Wc)()}async connectedCallback(){await super.connectedCallback(),this.applyPendingStyles()}get style(){return this.layer?.getStyle()||null}set style(e){this._layer?this.applyStyle(e):this.pendingLayerStyles=[...this.pendingLayerStyles,e]}applyStyle(e){e instanceof s.t?(this._styles.push(e),this._layer.setStyle(e=>this._styles.map(t=>t.style(e)).filter(e=>null!=e))):(this._styles=[],this._layer.setStyle(e)),this.dispatchEvent(new CustomEvent(i.EVENTS.styleChanged,{bubbles:!0,composed:!0,detail:{style:e}}))}_createLayer(){let e=new a.A({title:this._name,source:this._source,updateWhileAnimating:!0,updateWhileInteracting:!0,minResolution:this._minResolution,maxResolution:this._maxResolution,visible:this._visible,opacity:this._opacity});return e.set("id",o.M._counter),e}applyPendingStyles(){this._layer&&(this.pendingLayerStyles?.forEach(e=>this.applyStyle(e)),this.pendingLayerStyles=[])}}},"../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts":(e,t,r)=>{var a=r("../../libs/common/utilities/src/index.ts"),l=r("../../libs/components/src/index.ts");class s extends l.VH{constructor(){super(`
      :host {
        width: 3.5rem;
        transition: width 0.1s;
      }

      :host([data-vl-open]) {
        width: var(--vl-side-sheet-width,calc(100%/3));
      }

      .vl-side-sheet__toggle {
        margin: 10px;
      }

      :host([data-vl-open]) .vl-side-sheet__toggle {
        margin-left: 0px;
      }

      ::slotted(*) {
        margin-bottom: 20px;
      }
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("data-vl-absolute",""),this.hasAttribute("data-vl-right")||this.setAttribute("data-vl-left",""),this._openChangedCallback()}_rightChangedCallback(e,t){void 0!=t?this.removeAttribute("data-vl-left"):this.setAttribute("data-vl-left","")}}s=function(e,t,r,a){var l,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(o=(s<3?l(o):s>3?l(t,r,o):l(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([(0,a.M1)("vl-map-side-sheet")],s)}}]);