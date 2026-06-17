import{r as p,aR as b,x as n,w as g}from"./iframe-nqJ0ju39.js";import{e as d}from"./vl-map-base-layer-BtxNVW9G.js";import"./vl-map-click-action-CxUdw_Se.js";import"./vl-map-draw-action-BWq5sEze.js";import"./vl-map-draw-line-action-2qZaG7qz.js";import"./vl-map-draw-point-action-DCQviMBT.js";import"./vl-map-draw-polygon-action-CXJDgqGV.js";import"./vl-map-measure-control-Dv9WF-Jn.js";import"./vl-map-delete-action-CnJdOHdP.js";import"./vl-map-modify-action-yxTnE93x.js";import"./vl-map-select-actions-CDdgcvDl.js";import"./vl-map-select-action-CRgeNZzR.js";import"./vl-map-layer-action-CnxJeK5J.js";import{V as c}from"./vl-map-base-layer-grb-gray-BXTId9yW.js";import"./vl-map-base-layer-grb-ortho-sBrSTjHB.js";import"./vl-map-base-layer-grb-DztzqVRI.js";import"./vl-map-action-control-DmnmT7R2.js";import"./vl-map-action-controls-Bo5MCopD.js";import"./vl-map-current-location-BsQc9IYB.js";import"./vl-map-layer-circle-style-hvMbLfoC.js";import"./vl-map-layer-switcher-DAfMAhD9.js";import"./vl-map-features-layer-CD-FR9qL.js";import"./vl-map-wfs-layer-B8YU49wa.js";import"./vl-map-image-wms-layer-B3hEDpY2.js";import{V as u}from"./vl-map-tiled-wms-layer-DsQZRTSK.js";import"./vl-map-wms-layer-DyHwiaLL.js";import"./vl-map-xyz-wms-layer-4FxF2b4u.js";import"./vl-map-wmts-layer-DOTq8DGR.js";import"./vl-map-legend-CVLYp7ap.js";import"./vl-map-loading-indicator-Cl2VR2jt.js";import"./vl-select-location-CCFx3Ter.js";import"./vl-map-overview-map-CiHSRi4b.js";import"./vl-map-search-3-ZsZBuq.js";import"./vl-map-side-sheet-m80TBTyG.js";import"./vl-map-side-sheet-menu-item-DQ94Hb0j.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
