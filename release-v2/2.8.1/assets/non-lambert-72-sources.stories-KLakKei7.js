import{r as p,aQ as b,x as l,y as d}from"./iframe-C7eocPW2.js";import{e as c}from"./vl-map-base-layer-cTWRwMZ1.js";import"./vl-map-click-action-Bh_ZC6NN.js";import"./vl-map-draw-action-DrwAWnLO.js";import"./vl-map-draw-line-action-BVWS65XM.js";import"./vl-map-draw-point-action-Cdwe-szy.js";import"./vl-map-draw-polygon-action-BHDuw9qk.js";import"./vl-map-measure-control-yaGeELpa.js";import"./vl-map-delete-action-Bd7-q-YX.js";import"./vl-map-modify-action-DZiLUyq1.js";import"./vl-map-select-actions-CRd_-UGa.js";import"./vl-map-select-action-BdGG49t2.js";import"./vl-map-layer-action-IsN3uIYB.js";import{V as g}from"./vl-map-base-layer-grb-gray-FUd93zzz.js";import"./vl-map-base-layer-grb-ortho-BvubvyWx.js";import"./vl-map-base-layer-grb-C8PHeAJn.js";import"./vl-map-action-control-BLjpsmqm.js";import"./vl-map-action-controls-BYy09BG2.js";import"./vl-map-current-location-CGZldEWJ.js";import"./vl-map-layer-circle-style-hYOEPOwN.js";import"./vl-map-layer-switcher-BGMg07i7.js";import"./vl-map-features-layer-NSOc5KZr.js";import"./vl-map-wfs-layer-B5lEJXEo.js";import"./vl-map-image-wms-layer-BnVlyL2v.js";import{V as u}from"./vl-map-tiled-wms-layer-_roAeVZ-.js";import"./vl-map-wms-layer-CAGkqb3e.js";import"./vl-map-xyz-wms-layer-bUUT6U96.js";import"./vl-map-wmts-layer-DKJpmoGI.js";import"./vl-map-legend-DwiUkDZO.js";import"./vl-map-loading-indicator-PHZnxJdS.js";import"./vl-select-location-4_Sv7osc.js";import"./vl-map-overview-map-CV8UojEw.js";import"./vl-map-search-BiwgMuzG.js";import"./vl-map-side-sheet-Bji-8-BJ.js";import"./vl-map-side-sheet-menu-item-B-AzLaUr.js";var v=Object.getOwnPropertyDescriptor,y=(o,s,n,m)=>{for(var r=m>1?void 0:m?v(s,n):s,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return l`
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
