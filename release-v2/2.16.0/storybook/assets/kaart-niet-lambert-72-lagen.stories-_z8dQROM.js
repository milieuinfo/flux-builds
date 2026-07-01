import{r as p,aR as b,x as n,w as g}from"./iframe-B0laZkYe.js";import{e as d}from"./vl-map-base-layer-BcyU3_Yv.js";import"./vl-map-click-action-ChZ2BYNP.js";import"./vl-map-draw-action-BUAlej4l.js";import"./vl-map-draw-line-action-ZBoppaOX.js";import"./vl-map-draw-point-action-BKsLgg3T.js";import"./vl-map-draw-polygon-action-BI3s_hb_.js";import"./vl-map-measure-control-C5SuwuDB.js";import"./vl-map-delete-action-BtzAKBG2.js";import"./vl-map-modify-action-BbMzPTJL.js";import"./vl-map-select-actions-DcPqSdHK.js";import"./vl-map-select-action-FDAZsagL.js";import"./vl-map-layer-action-bcfn5gcP.js";import{V as c}from"./vl-map-base-layer-grb-gray-Qhg6lr35.js";import"./vl-map-base-layer-grb-ortho-CimBmPLp.js";import"./vl-map-base-layer-grb-CYyY_yJ5.js";import"./vl-map-action-control-DjJPtDJV.js";import"./vl-map-action-controls-isruLONW.js";import"./vl-map-current-location--tmvpe0E.js";import"./vl-map-layer-circle-style-DTg37Z3_.js";import"./vl-map-layer-switcher-M2NoLzCd.js";import"./vl-map-features-layer-DcUVTltx.js";import"./vl-map-wfs-layer-LyXoHrCf.js";import"./vl-map-image-wms-layer-CAZa2Rqq.js";import{V as u}from"./vl-map-tiled-wms-layer-DsjigTR-.js";import"./vl-map-wms-layer-YACAybc-.js";import"./vl-map-xyz-wms-layer-BSh50JSM.js";import"./vl-map-wmts-layer-uIof2bLG.js";import"./vl-map-legend-t6UUMedp.js";import"./vl-map-loading-indicator-pqzHIgm7.js";import"./vl-select-location-BN0TsEE2.js";import"./vl-map-overview-map-gDpAkbxx.js";import"./vl-map-search-DKsq4knc.js";import"./vl-map-side-sheet-PWTWXFYa.js";import"./vl-map-side-sheet-menu-item-NEBtinP7.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
