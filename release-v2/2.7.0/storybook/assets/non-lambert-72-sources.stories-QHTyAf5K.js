import{r as p,aQ as b,x as l,y as d}from"./iframe-BRJWU34U.js";import{e as c}from"./vl-map-base-layer-mxB9Jgb1.js";import"./vl-map-click-action-BKYA1fBU.js";import"./vl-map-draw-action-DKMqKN8Y.js";import"./vl-map-draw-line-action-CcYIuiN2.js";import"./vl-map-draw-point-action-C4gpWcG4.js";import"./vl-map-draw-polygon-action-uHPrsMc9.js";import"./vl-map-measure-control-Cc4FvdRn.js";import"./vl-map-delete-action-CzPS5WCd.js";import"./vl-map-modify-action-ZHcO0FOc.js";import"./vl-map-select-actions-3RPg6nh_.js";import"./vl-map-select-action-DEZ1S2AT.js";import"./vl-map-layer-action-2JAAiOGD.js";import{V as g}from"./vl-map-base-layer-grb-gray-Di19ej0R.js";import"./vl-map-base-layer-grb-ortho-D0WjPjGE.js";import"./vl-map-base-layer-grb-BV3LtGVs.js";import"./vl-map-action-control-BpFx6JYW.js";import"./vl-map-action-controls-MTkIn2Lt.js";import"./vl-map-current-location-ordnqffI.js";import"./vl-map-layer-circle-style-BYHuRewh.js";import"./vl-map-layer-switcher-B-luGprY.js";import"./vl-map-features-layer-B_ClZkbk.js";import"./vl-map-wfs-layer-DkWiFLJM.js";import"./vl-map-image-wms-layer-B1aaUYbh.js";import{V as u}from"./vl-map-tiled-wms-layer-DwBMivdU.js";import"./vl-map-wms-layer-D-8YWlSQ.js";import"./vl-map-xyz-wms-layer-BiVI7XK0.js";import"./vl-map-wmts-layer-D3tVYUI_.js";import"./vl-map-legend-BL1i3oFb.js";import"./vl-map-loading-indicator-DIz3UnAJ.js";import"./vl-select-location-4fwWjJj7.js";import"./vl-map-overview-map-PwpeScrl.js";import"./vl-map-search-Dk0qWCl8.js";import"./vl-map-side-sheet-CKxlNfP2.js";import"./vl-map-side-sheet-menu-item-Da8X0N_M.js";var v=Object.getOwnPropertyDescriptor,y=(o,s,n,m)=>{for(var r=m>1?void 0:m?v(s,n):s,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return l`
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
