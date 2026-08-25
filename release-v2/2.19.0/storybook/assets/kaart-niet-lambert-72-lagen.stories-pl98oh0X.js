import{r as p,aR as b,x as n,w as g}from"./iframe-CY-ZM549.js";import{e as d}from"./vl-map-base-layer-BdyzNi5-.js";import"./vl-map-click-action-D-nJJsBN.js";import"./vl-map-draw-action-Bzh_ambS.js";import"./vl-map-draw-line-action-B9Hp0UYQ.js";import"./vl-map-draw-point-action-KgB-cVUx.js";import"./vl-map-draw-polygon-action-Damrt1fi.js";import"./vl-map-measure-control-1B_P7rr7.js";import"./vl-map-delete-action-Cl08sItc.js";import"./vl-map-modify-action-BbQ_O8xJ.js";import"./vl-map-select-actions-DioWmkeq.js";import"./vl-map-select-action-BC_js2YJ.js";import"./vl-map-layer-action-q8mfqCFR.js";import{V as c}from"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import"./vl-map-base-layer-grb-ortho-DUBVRqAJ.js";import"./vl-map-base-layer-grb-DIoMzSV5.js";import"./vl-map-action-control-BOXrZuBz.js";import"./vl-map-action-controls-BHDa8nI8.js";import"./vl-map-current-location-eclXaESl.js";import"./vl-map-layer-circle-style-DKf_JOHg.js";import"./vl-map-layer-switcher-Bx_ZGdUW.js";import"./vl-map-features-layer-Bw14ba3R.js";import"./vl-map-wfs-layer-FaBKjmvQ.js";import"./vl-map-image-wms-layer-CTa4-E2r.js";import{V as u}from"./vl-map-tiled-wms-layer-XGZT-ZK_.js";import"./vl-map-wms-layer-BHHd5qQL.js";import"./vl-map-xyz-wms-layer-Bo_OgcA-.js";import"./vl-map-wmts-layer-Cfkq4F-O.js";import"./vl-map-legend-BtMvGXxN.js";import"./vl-map-loading-indicator-DBCgknxB.js";import"./vl-select-location-C2Mo5VP5.js";import"./vl-map-overview-map-Dw1aKoxr.js";import"./vl-map-search-DFrX-8NE.js";import"./vl-map-side-sheet-BD6Wjck2.js";import"./vl-map-side-sheet-menu-item-DYrY08H3.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
            <vl-map lambert2008>
                <!--
                    Test andere niet-lambert 72 laag met volledig zoombare wereldkaart (EPSG:3857)
                    Custom background layer met OpenStreetMap tiles
                -->
                <vl-map-baselayer-grb-gray
                    background-layer
                    background-type="xyz"
                    background-options="${JSON.stringify({url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",attributions:"Tiles © OpenStreetMap contributors"})}"
                ></vl-map-baselayer-grb-gray>

                <!--
                    Test andere niet-lambert 72 laag
                    Catalogus: https://www.vlaanderen.be/datavindplaats/catalogus/overstromingsgevoelige-gebieden-vanuit-de-zee
                    Referentiesysteem: WGS 84 / Pseudo-Mercator (EPSG:3857)
                -->
                <vl-map-tiled-wms-layer
                    url="https://inspirepub.waterinfo.be/arcgis/services/informatieplicht/overstromingsgevoelige_gebieden_vanuit_de_zee/MapServer/WMSServer?"
                    layers="0"
                    name="Overstromingsgevoelige gebieden vanuit de zee"
                ></vl-map-tiled-wms-layer>

                <!--
                    Test andere niet-lambert 72 laag
                    Lambert 2008 test data uit: https://www.vlaanderen.be/datavindplaats/catalogus/testdata-transformatie-lambert-72-naar-lambert-2008-coordinaten
                -->
                <vl-map-tiled-wms-layer
                    url="https://www.mercator.vlaanderen.be/raadpleegdienstenmercatorpubliek/ows?"
                    layers="rs:rs_testdata_lamb08"
                    opacity="0.3"
                    name="Test Data Lambert 2008"
                ></vl-map-tiled-wms-layer>
            </vl-map>
        `}};p([d,u,c]);a=y([g("vl-map-non-lambert-72-sources")],a);p([a]);const w={title:"Patronen/Kaart/niet Lambert-72 lagen"},e=()=>n`<vl-map-non-lambert-72-sources></vl-map-non-lambert-72-sources>`;e.storyName="kaart - niet Lambert-72 lagen";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => html`<vl-map-non-lambert-72-sources></vl-map-non-lambert-72-sources>`",...e.parameters?.docs?.source}}};const _=["KaartNietLambert72Lagen"],re=Object.freeze(Object.defineProperty({__proto__:null,KaartNietLambert72Lagen:e,__namedExportsOrder:_,default:w},Symbol.toStringTag,{value:"Module"}));export{e as K,re as m};
