import{r as p,aQ as b,x as l,y as d}from"./iframe-Ds54rb_7.js";import{e as c}from"./vl-map-base-layer-CUICGl8E.js";import"./vl-map-click-action-ZOfwqeh5.js";import"./vl-map-draw-action-C9YPkWBK.js";import"./vl-map-draw-line-action-iR3tNL4B.js";import"./vl-map-draw-point-action-B3nkpYmS.js";import"./vl-map-draw-polygon-action-D8sFqZD4.js";import"./vl-map-measure-control-Bc52JtDk.js";import"./vl-map-delete-action-CGKoS7VL.js";import"./vl-map-modify-action-Cwu8NUYC.js";import"./vl-map-select-actions-BPQDnoMR.js";import"./vl-map-select-action-DhUMG_so.js";import"./vl-map-layer-action-CylOCJtd.js";import{V as g}from"./vl-map-base-layer-grb-gray-DTa8N6xA.js";import"./vl-map-base-layer-grb-ortho-DwEFo3lQ.js";import"./vl-map-base-layer-grb-BChMOl_z.js";import"./vl-map-action-control-CIzCQvMJ.js";import"./vl-map-action-controls-CqJmaHSo.js";import"./vl-map-current-location-ChN_iSbF.js";import"./vl-map-layer-circle-style-_ZLJ3psH.js";import"./vl-map-layer-switcher-hGHmh9A5.js";import"./vl-map-features-layer-fk9fuqbW.js";import"./vl-map-wfs-layer-BEot46CM.js";import"./vl-map-image-wms-layer-DbgnFc3a.js";import{V as u}from"./vl-map-tiled-wms-layer-DwYMo5wD.js";import"./vl-map-wms-layer-DtzeUj1c.js";import"./vl-map-xyz-wms-layer-Df0lVG4K.js";import"./vl-map-wmts-layer-BStpMfx1.js";import"./vl-map-legend-CHoY-PG5.js";import"./vl-map-loading-indicator-DG0JO4tH.js";import"./vl-select-location-7GUlAj2V.js";import"./vl-map-overview-map-2ScwIZ6V.js";import"./vl-map-search-BlRaM5zQ.js";import"./vl-map-side-sheet-B_ODQzxE.js";import"./vl-map-side-sheet-menu-item-V7nYE_mq.js";var v=Object.getOwnPropertyDescriptor,y=(o,s,n,m)=>{for(var r=m>1?void 0:m?v(s,n):s,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return l`
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
