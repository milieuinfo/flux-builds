import{r as p,aZ as b,x as n,w as g}from"./iframe-BWsn3Pr7.js";import{e as d}from"./vl-map-base-layer-GzsTO7HG.js";import"./vl-map-click-action-DMe2HhxC.js";import"./vl-map-draw-action-B14SSJ_U.js";import"./vl-map-draw-line-action-CizfzRCC.js";import"./vl-map-draw-point-action-Bi64jStX.js";import"./vl-map-draw-polygon-action-C4ZOemUM.js";import"./vl-map-measure-control-DDz-lOKz.js";import"./vl-map-delete-action-CKaiWbAZ.js";import"./vl-map-modify-action-TYDyT2RE.js";import"./vl-map-select-actions-BURUqwCr.js";import"./vl-map-select-action-VKgOSDJP.js";import"./vl-map-layer-action-CD-Gkycv.js";import{V as c}from"./vl-map-base-layer-grb-gray-DkR4pSJA.js";import"./vl-map-base-layer-grb-ortho--jg4cpGm.js";import"./vl-map-base-layer-grb-B6xfyXCn.js";import"./vl-map-action-control-CChaQMyr.js";import"./vl-map-action-controls-BhrJQ_wO.js";import"./vl-map-current-location-Dbe2oz5o.js";import"./vl-map-layer-circle-style-Tr5dao-V.js";import"./vl-map-layer-switcher-DZTSv7v7.js";import"./vl-map-features-layer-DbA6_kY7.js";import"./vl-map-wfs-layer-CBY8nOTK.js";import"./vl-map-image-wms-layer-DQYMBHno.js";import{V as u}from"./vl-map-tiled-wms-layer-BDIn_s-X.js";import"./vl-map-wms-layer-CUmdLDwC.js";import"./vl-map-xyz-wms-layer-DdO-PS0T.js";import"./vl-map-wmts-layer-cHLO6sxl.js";import"./vl-map-legend-D5oYtTnF.js";import"./vl-map-loading-indicator-B1WNAVBi.js";import"./vl-select-location-D4l-89J5.js";import"./vl-map-overview-map-BIxJAWmI.js";import"./vl-map-search-trI4XUn2.js";import"./vl-map-side-sheet-rG3r5cet.js";import"./vl-map-side-sheet-menu-item-BJhBW6Ly.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
