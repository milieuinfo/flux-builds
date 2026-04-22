import{r as p,aQ as b,x as n,w as g}from"./iframe-aAtdr__L.js";import{e as d}from"./vl-map-base-layer--WplTurS.js";import"./vl-map-click-action--h-a6fRY.js";import"./vl-map-draw-action-CWEQFH_U.js";import"./vl-map-draw-line-action-CWFydi0p.js";import"./vl-map-draw-point-action-CqiEY9pW.js";import"./vl-map-draw-polygon-action-BGEEp4vh.js";import"./vl-map-measure-control-BrWeSFGM.js";import"./vl-map-delete-action-C2PjABNE.js";import"./vl-map-modify-action-BlCNiUfY.js";import"./vl-map-select-actions-Bo66RDXi.js";import"./vl-map-select-action-B4CYIJmE.js";import"./vl-map-layer-action-Dcswm32r.js";import{V as c}from"./vl-map-base-layer-grb-gray-Cc4JenHq.js";import"./vl-map-base-layer-grb-ortho-CYgZTO6o.js";import"./vl-map-base-layer-grb-D4QbcDhP.js";import"./vl-map-action-control-DL7Ilsqs.js";import"./vl-map-action-controls-CIjH1wdO.js";import"./vl-map-current-location-CGjQFiOB.js";import"./vl-map-layer-circle-style-CEaiCq5i.js";import"./vl-map-layer-switcher-BLuyu-Cm.js";import"./vl-map-features-layer-DjO3748L.js";import"./vl-map-wfs-layer-Do_Ir5rM.js";import"./vl-map-image-wms-layer-DG1xVJAP.js";import{V as u}from"./vl-map-tiled-wms-layer-DRVopc8u.js";import"./vl-map-wms-layer-C0CYRwSs.js";import"./vl-map-xyz-wms-layer-DwtT5UG1.js";import"./vl-map-wmts-layer-DXvuuXye.js";import"./vl-map-legend-HEeg2brO.js";import"./vl-map-loading-indicator-Ciaf3iIk.js";import"./vl-select-location-zA4X1tux.js";import"./vl-map-overview-map-CsxGuQNP.js";import"./vl-map-search-FhG54zjN.js";import"./vl-map-side-sheet-DjB1PXGl.js";import"./vl-map-side-sheet-menu-item-BS9TWXMK.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
