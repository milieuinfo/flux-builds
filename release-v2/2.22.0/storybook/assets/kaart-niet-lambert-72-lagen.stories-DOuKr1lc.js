import{r as p,aR as b,b as n,w as g}from"./iframe-ylVHDfb1.js";import{e as d}from"./vl-map-base-layer-CLYIwId3.js";import"./vl-map-click-action-BLuH-KwQ.js";import"./vl-map-draw-action-4SGek5RA.js";import"./vl-map-draw-line-action-Bw2tYSlU.js";import"./vl-map-draw-point-action-DXod_8Z9.js";import"./vl-map-draw-polygon-action-BfUylNre.js";import"./vl-map-measure-control-B3PEGduZ.js";import"./vl-map-delete-action-xmJIdwsi.js";import"./vl-map-modify-action-Ckfykabk.js";import"./vl-map-select-actions-DryCg55H.js";import"./vl-map-select-action-CWB8KgeP.js";import"./vl-map-layer-action-y4XOo-sQ.js";import{V as c}from"./vl-map-base-layer-grb-gray-BIw39Kmk.js";import"./vl-map-base-layer-grb-ortho-BpsdDirX.js";import"./vl-map-base-layer-grb-B8IvcxKk.js";import"./vl-map-action-control-BXDI9RUT.js";import"./vl-map-action-controls-0rmAQjmn.js";import"./vl-map-current-location-hkhWTMYn.js";import"./vl-map-layer-circle-style-DY3daoG3.js";import"./vl-map-layer-switcher-HmUl9VGn.js";import"./vl-map-features-layer-llTbRGtW.js";import"./vl-map-wfs-layer-BOAQF7XF.js";import"./vl-map-image-wms-layer-CDoqsAUO.js";import{V as u}from"./vl-map-tiled-wms-layer-BQr9GN-b.js";import"./vl-map-wms-layer-BdQr2olZ.js";import"./vl-map-xyz-wms-layer-DFZbZplB.js";import"./vl-map-wmts-layer-C6xjhUsu.js";import"./vl-map-legend-DcKJ3Ezy.js";import"./vl-map-loading-indicator-DidNeO4U.js";import"./vl-select-location-BmQrmv_2.js";import"./vl-map-overview-map-DiMBT8zU.js";import"./vl-map-search-BucwD1Yj.js";import"./vl-map-side-sheet-DAG4zSR_.js";import"./vl-map-side-sheet-menu-item-tH2bkHXM.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
