import{r as p,aR as b,b as n,w as g}from"./iframe-BoAZAq4i.js";import{e as d}from"./vl-map-base-layer-CSzd67mT.js";import"./vl-map-click-action-UysFIxXg.js";import"./vl-map-draw-action-B4JB-4vu.js";import"./vl-map-draw-line-action-DAWD8Q0L.js";import"./vl-map-draw-point-action-CAhyBtNG.js";import"./vl-map-draw-polygon-action-BxXDtTcR.js";import"./vl-map-measure-control-CzwQko-l.js";import"./vl-map-delete-action-BLvt5ktm.js";import"./vl-map-modify-action-BvGy5CUW.js";import"./vl-map-select-actions-4RSHVsz_.js";import"./vl-map-select-action-DsY50L1K.js";import"./vl-map-layer-action-Ox9VO8Qq.js";import{V as c}from"./vl-map-base-layer-grb-gray-BzQOV22N.js";import"./vl-map-base-layer-grb-ortho-D7lE0rJA.js";import"./vl-map-base-layer-grb-yvC5f4t9.js";import"./vl-map-action-control-2ulqjheY.js";import"./vl-map-action-controls-fb_kSefZ.js";import"./vl-map-current-location-BYkl6Bf2.js";import"./vl-map-layer-circle-style-CXC49XkD.js";import"./vl-map-layer-switcher-CSF-bxZv.js";import"./vl-map-features-layer-DP0u00NZ.js";import"./vl-map-wfs-layer-CHYCTYcK.js";import"./vl-map-image-wms-layer-Cm_wQ72c.js";import{V as u}from"./vl-map-tiled-wms-layer-CkD-P6uq.js";import"./vl-map-wms-layer-C6F2Cryj.js";import"./vl-map-xyz-wms-layer-BcnLcXyU.js";import"./vl-map-wmts-layer-o-aqNTcM.js";import"./vl-map-legend-CfWnvqoh.js";import"./vl-map-loading-indicator-QW7LK6ON.js";import"./vl-select-location-BHbZhbxt.js";import"./vl-map-overview-map-C7r8VT_W.js";import"./vl-map-search-1fAwCBlv.js";import"./vl-map-side-sheet-Bt6WIvL3.js";import"./vl-map-side-sheet-menu-item-C9nSP2D_.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
