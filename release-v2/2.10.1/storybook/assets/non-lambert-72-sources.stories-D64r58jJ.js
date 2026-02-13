import{r as p,aV as b,x as l,H as d}from"./iframe-iHJvAyUB.js";import{e as c}from"./vl-map-base-layer-Ds3vxb_U.js";import"./vl-map-click-action-Vx4_XfiK.js";import"./vl-map-draw-action-XBTrtibF.js";import"./vl-map-draw-line-action-B5kNeCoc.js";import"./vl-map-draw-point-action-DWWo52O_.js";import"./vl-map-draw-polygon-action-CQ7BlFQ5.js";import"./vl-map-measure-control-CIBajr_k.js";import"./vl-map-delete-action-DSS0ERK9.js";import"./vl-map-modify-action-DP09kytH.js";import"./vl-map-select-actions-BoHnlSce.js";import"./vl-map-select-action-BGaWXPUG.js";import"./vl-map-layer-action-DwQtFJbn.js";import{V as g}from"./vl-map-base-layer-grb-gray-CGABEvMh.js";import"./vl-map-base-layer-grb-ortho-Cucv-pCj.js";import"./vl-map-base-layer-grb-u7irM0Un.js";import"./vl-map-action-control-CSGEyMZ5.js";import"./vl-map-action-controls-Bnj83GyO.js";import"./vl-map-current-location-B53gHBBE.js";import"./vl-map-layer-circle-style-D2Cy4zz2.js";import"./vl-map-layer-switcher-CJKiTM0N.js";import"./vl-map-features-layer-922S3FZt.js";import"./vl-map-wfs-layer-DQK2RXpW.js";import"./vl-map-image-wms-layer-DRXG2hJb.js";import{V as u}from"./vl-map-tiled-wms-layer-B2pZCK_B.js";import"./vl-map-wms-layer-CB5_hHHh.js";import"./vl-map-xyz-wms-layer-BlV1TwDl.js";import"./vl-map-wmts-layer-DG76LaH8.js";import"./vl-map-legend-VDhesT9a.js";import"./vl-map-loading-indicator-D-gca0Hz.js";import"./vl-select-location-UAtB_7Kn.js";import"./vl-map-overview-map-qm3gAkpF.js";import"./vl-map-search-ghmzKhvU.js";import"./vl-map-side-sheet-BRPmgO7U.js";import"./vl-map-side-sheet-menu-item-DR3w8DFl.js";var v=Object.getOwnPropertyDescriptor,y=(o,s,n,m)=>{for(var r=m>1?void 0:m?v(s,n):s,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return l`
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
