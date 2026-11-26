import{r as p,aS as b,b as n,w as g}from"./iframe-Cv28D2NX.js";import{e as d}from"./vl-map-base-layer-CmFLB2kf.js";import"./vl-map-click-action-D_Ho6S5O.js";import"./vl-map-draw-action-enDB39H3.js";import"./vl-map-draw-line-action-u_czBKY-.js";import"./vl-map-draw-point-action-BnpkuV-b.js";import"./vl-map-draw-polygon-action-DdgA_1zp.js";import"./vl-map-measure-control-BUb8zmwh.js";import"./vl-map-delete-action-BFA4TYKV.js";import"./vl-map-modify-action-zqDLl8V4.js";import"./vl-map-select-actions-BFc5xdAy.js";import"./vl-map-select-action-CLqLfyMS.js";import"./vl-map-layer-action-BuSnoCGf.js";import{V as c}from"./vl-map-base-layer-grb-gray-B3yI26-B.js";import"./vl-map-base-layer-grb-ortho-Bi6K5MjX.js";import"./vl-map-base-layer-grb-BaWaZvxE.js";import"./vl-map-action-control-Bnl13FTA.js";import"./vl-map-action-controls-DrWCaOKJ.js";import"./vl-map-current-location-Cl0kDltj.js";import"./vl-map-layer-circle-style-BBoDWqcR.js";import"./vl-map-layer-switcher-B4FcsOjx.js";import"./vl-map-features-layer-CEF7bfWd.js";import"./vl-map-wfs-layer-ZncIm8XG.js";import"./vl-map-image-wms-layer-D7zT7t5q.js";import{V as u}from"./vl-map-tiled-wms-layer-Cd1jgyYt.js";import"./vl-map-wms-layer-CVjCwDx7.js";import"./vl-map-xyz-wms-layer-C9m9hyEM.js";import"./vl-map-wmts-layer-UPCKuYcb.js";import"./vl-map-legend-CilSZeqq.js";import"./vl-map-loading-indicator-BWok-pNf.js";import"./vl-select-location-CzP7pUKw.js";import"./vl-map-overview-map-DM94IL0U.js";import"./vl-map-search-CXL0GTqw.js";import"./vl-map-side-sheet-NRj0PdiO.js";import"./vl-map-side-sheet-menu-item-B713JcqH.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
        `}};p([d,u,c]);a=y([g("vl-map-non-lambert-72-sources")],a);p([a]);const w={title:"Patronen/Kaart/niet Lambert-72 lagen"},e=()=>n`<vl-map-non-lambert-72-sources></vl-map-non-lambert-72-sources>`;e.storyName="kaart - niet Lambert-72 lagen";const _=["KaartNietLambert72Lagen"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => html`<vl-map-non-lambert-72-sources></vl-map-non-lambert-72-sources>`",...e.parameters?.docs?.source}}};const re=Object.freeze(Object.defineProperty({__proto__:null,KaartNietLambert72Lagen:e,__namedExportsOrder:_,default:w},Symbol.toStringTag,{value:"Module"}));export{e as K,re as m};
