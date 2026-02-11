import{r as p,aQ as b,x as l,y as d}from"./iframe-CYuKbPIU.js";import{e as c}from"./vl-map-base-layer-LVSVMNMu.js";import"./vl-map-click-action-qzgLDNCY.js";import"./vl-map-draw-action-Dgd3Glgg.js";import"./vl-map-draw-line-action-BbAa1W7C.js";import"./vl-map-draw-point-action-DbwXZMcr.js";import"./vl-map-draw-polygon-action-BFXCacc0.js";import"./vl-map-measure-control-DhrZjO_A.js";import"./vl-map-delete-action-DgwE4ZMY.js";import"./vl-map-modify-action-Cl9TbQ2D.js";import"./vl-map-select-actions-ZSiVMIg5.js";import"./vl-map-select-action-DupxeA5Y.js";import"./vl-map-layer-action-BwkAx8VH.js";import{V as g}from"./vl-map-base-layer-grb-gray-DfQGTfFu.js";import"./vl-map-base-layer-grb-ortho-BSy0vxh6.js";import"./vl-map-base-layer-grb-DQtF2QwZ.js";import"./vl-map-action-control-Cfo7es_q.js";import"./vl-map-action-controls-lsJVCPHF.js";import"./vl-map-current-location-hajA9gzx.js";import"./vl-map-layer-circle-style-DWIFxyl7.js";import"./vl-map-layer-switcher-B3JmLGbS.js";import"./vl-map-features-layer-yy_LUlFQ.js";import"./vl-map-wfs-layer-yGdFUX8s.js";import"./vl-map-image-wms-layer-MS4S6xQ9.js";import{V as u}from"./vl-map-tiled-wms-layer-a5bMlAif.js";import"./vl-map-wms-layer-CiYoJ4Mv.js";import"./vl-map-xyz-wms-layer-C57yF_4g.js";import"./vl-map-wmts-layer-p1J6AvGU.js";import"./vl-map-legend-jZyL7jTw.js";import"./vl-map-loading-indicator-Bh05IgSB.js";import"./vl-select-location-jODQZ-5G.js";import"./vl-map-overview-map-DroiHk44.js";import"./vl-map-search-CRiJlB_2.js";import"./vl-map-side-sheet-mEzDRYJ0.js";import"./vl-map-side-sheet-menu-item-BO3xLw0m.js";var v=Object.getOwnPropertyDescriptor,y=(o,s,n,m)=>{for(var r=m>1?void 0:m?v(s,n):s,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return l`
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
        `}};p([c,u,g]);a=y([d("vl-map-non-lambert-72-sources")],a);p([a]);const w={title:"Ontwerp/Map/Niet-Lambert-72-lagen"},e=()=>l`<vl-map-non-lambert-72-sources></vl-map-non-lambert-72-sources>`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => html`<vl-map-non-lambert-72-sources></vl-map-non-lambert-72-sources>`",...e.parameters?.docs?.source}}};const _=["Demo"],re=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:_,default:w},Symbol.toStringTag,{value:"Module"}));export{e as D,re as m};
