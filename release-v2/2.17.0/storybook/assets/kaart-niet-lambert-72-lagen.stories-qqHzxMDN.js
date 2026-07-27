import{r as p,aR as b,x as n,w as g}from"./iframe-BgD7f6Cn.js";import{e as d}from"./vl-map-base-layer-CJ9Hplnc.js";import"./vl-map-click-action-BX01qtjm.js";import"./vl-map-draw-action-RmDkONxU.js";import"./vl-map-draw-line-action-BKQdWqBR.js";import"./vl-map-draw-point-action-C6bL_Vhu.js";import"./vl-map-draw-polygon-action-DAd6MDmo.js";import"./vl-map-measure-control-6pYCr8p5.js";import"./vl-map-delete-action-BQIrtgFi.js";import"./vl-map-modify-action-DAplWhZR.js";import"./vl-map-select-actions-DIPSa_WM.js";import"./vl-map-select-action-DYOF0hPH.js";import"./vl-map-layer-action-BX3Ddssc.js";import{V as c}from"./vl-map-base-layer-grb-gray--tROFEyH.js";import"./vl-map-base-layer-grb-ortho-D3ce20jK.js";import"./vl-map-base-layer-grb-CV9Ia_XC.js";import"./vl-map-action-control-B4R1obum.js";import"./vl-map-action-controls-CC1_1wv9.js";import"./vl-map-current-location-CySW1-sz.js";import"./vl-map-layer-circle-style-cxhA_2Al.js";import"./vl-map-layer-switcher-Qv5J9TSI.js";import"./vl-map-features-layer-DuBfgdcT.js";import"./vl-map-wfs-layer-DHaXO9Ho.js";import"./vl-map-image-wms-layer-Cyq5hL_A.js";import{V as u}from"./vl-map-tiled-wms-layer-mRy6TWlI.js";import"./vl-map-wms-layer-Grbr-tFG.js";import"./vl-map-xyz-wms-layer-B2KP0qmj.js";import"./vl-map-wmts-layer-DA694tzU.js";import"./vl-map-legend-CQ_Zp3lt.js";import"./vl-map-loading-indicator-CcOAeLZG.js";import"./vl-select-location-DSPOZaW4.js";import"./vl-map-overview-map-wUCPR_OT.js";import"./vl-map-search-CWW3OY9L.js";import"./vl-map-side-sheet-ENHjjdkK.js";import"./vl-map-side-sheet-menu-item-ClZsTznf.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
