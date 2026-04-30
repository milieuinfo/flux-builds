import{r as p,aS as b,x as n,w as g}from"./iframe-69xRVzLO.js";import{e as d}from"./vl-map-base-layer-klRzOZNV.js";import"./vl-map-click-action-BIC0sls_.js";import"./vl-map-draw-action-C17RHQCq.js";import"./vl-map-draw-line-action-D61UqBjz.js";import"./vl-map-draw-point-action-EtsioDEv.js";import"./vl-map-draw-polygon-action-k9dNpGj6.js";import"./vl-map-measure-control-DNh74CaB.js";import"./vl-map-delete-action-DsmOm579.js";import"./vl-map-modify-action-8H05a96G.js";import"./vl-map-select-actions-BDsFKuDt.js";import"./vl-map-select-action-CpPwTzQZ.js";import"./vl-map-layer-action-CuE0TrZj.js";import{V as c}from"./vl-map-base-layer-grb-gray-DlkCF-Sm.js";import"./vl-map-base-layer-grb-ortho-DPYHu5b4.js";import"./vl-map-base-layer-grb-BU2CzuFb.js";import"./vl-map-action-control-DVbKBd40.js";import"./vl-map-action-controls-CQzBjKDi.js";import"./vl-map-current-location-CB9Y0_gX.js";import"./vl-map-layer-circle-style-Dev8nCSp.js";import"./vl-map-layer-switcher-DCoQ0sg9.js";import"./vl-map-features-layer-B63ykq_T.js";import"./vl-map-wfs-layer-BJYv0WGk.js";import"./vl-map-image-wms-layer-DDQe_msE.js";import{V as u}from"./vl-map-tiled-wms-layer-BIfEFmcC.js";import"./vl-map-wms-layer-DEFtimel.js";import"./vl-map-xyz-wms-layer-BW1u_6V4.js";import"./vl-map-wmts-layer-IHolzANZ.js";import"./vl-map-legend-DcPgMi9p.js";import"./vl-map-loading-indicator-B8If-YsO.js";import"./vl-select-location-2T19hJKR.js";import"./vl-map-overview-map-5zocCJes.js";import"./vl-map-search-CqOqN0GQ.js";import"./vl-map-side-sheet-BXQA05Hm.js";import"./vl-map-side-sheet-menu-item-7YpKRF11.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
