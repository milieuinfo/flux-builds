import{r as p,aP as b,x as l,m as d}from"./iframe-CflcmDUD.js";import{e as c}from"./vl-map-base-layer-BvMalALX.js";import"./vl-map-click-action-Dyzje_xt.js";import"./vl-map-draw-action-2_7SBsl1.js";import"./vl-map-draw-line-action-BcWm77_d.js";import"./vl-map-draw-point-action-Cpw_mgn8.js";import"./vl-map-draw-polygon-action-BvyEdN-L.js";import"./vl-map-measure-control-CItxBT_I.js";import"./vl-map-delete-action-CT1uNGhw.js";import"./vl-map-modify-action-DfnBaLg0.js";import"./vl-map-select-actions-DQX1MlF-.js";import"./vl-map-select-action-B-dxTRbG.js";import"./vl-map-layer-action-C8bXaFii.js";import{V as g}from"./vl-map-base-layer-grb-gray-Cuxf_f6a.js";import"./vl-map-base-layer-grb-ortho-CNYn_Zu3.js";import"./vl-map-base-layer-grb-CyfDYDfm.js";import"./vl-map-action-control-RCwjkhzF.js";import"./vl-map-action-controls-BhC5iX5i.js";import"./vl-map-current-location-BuqoZcl7.js";import"./vl-map-layer-circle-style-BLRSLB0w.js";import"./vl-map-layer-switcher-BsO687C9.js";import"./vl-map-features-layer-D9owGkac.js";import"./vl-map-wfs-layer-Bprmt369.js";import"./vl-map-image-wms-layer-DlguOpwH.js";import{V as u}from"./vl-map-tiled-wms-layer-DM-ghduw.js";import"./vl-map-wms-layer-CBOUQbGF.js";import"./vl-map-xyz-wms-layer-CdTfNhvk.js";import"./vl-map-wmts-layer-CDKnbrGz.js";import"./vl-map-legend-hAGzbnEx.js";import"./vl-map-loading-indicator-Bx8dSXpm.js";import"./vl-select-location-DRwMe55W.js";import"./vl-map-overview-map-Bf0SBPQp.js";import"./vl-map-search-BX3PvXtL.js";import"./vl-map-side-sheet-jaKdd5na.js";import"./vl-map-side-sheet-menu-item-CoatbSFM.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,n,s)=>{for(var r=s>1?void 0:s?v(m,n):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return l`
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
