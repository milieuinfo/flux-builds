import{r as p,aR as b,x as n,w as g}from"./iframe-D9dm7PbY.js";import{e as d}from"./vl-map-base-layer-DdS66t0g.js";import"./vl-map-click-action-DbMZhpF0.js";import"./vl-map-draw-action-79Miwb8u.js";import"./vl-map-draw-line-action-Bpf71Xzn.js";import"./vl-map-draw-point-action-Dm57k6Ab.js";import"./vl-map-draw-polygon-action-D3yxiCd_.js";import"./vl-map-measure-control-BJcRCXwT.js";import"./vl-map-delete-action-C77-GwvO.js";import"./vl-map-modify-action-BWPq8Ke-.js";import"./vl-map-select-actions-DOWV1qa3.js";import"./vl-map-select-action-C3dwQD65.js";import"./vl-map-layer-action-r_4xgSuA.js";import{V as c}from"./vl-map-base-layer-grb-gray-DlB85uo0.js";import"./vl-map-base-layer-grb-ortho-TTMcp5Kx.js";import"./vl-map-base-layer-grb-DOmN7tfs.js";import"./vl-map-action-control--iOOvikx.js";import"./vl-map-action-controls-8Be-NVqB.js";import"./vl-map-current-location-QsB17zbn.js";import"./vl-map-layer-circle-style-D6lcMikC.js";import"./vl-map-layer-switcher-D6HmnoI6.js";import"./vl-map-features-layer-CjjaBi1V.js";import"./vl-map-wfs-layer-QEPpHWcr.js";import"./vl-map-image-wms-layer-Dc0aPApK.js";import{V as u}from"./vl-map-tiled-wms-layer-CRzgWARe.js";import"./vl-map-wms-layer-Ba7EiQO8.js";import"./vl-map-xyz-wms-layer-DeC6HHro.js";import"./vl-map-wmts-layer-BCleBF15.js";import"./vl-map-legend-gAInGgTh.js";import"./vl-map-loading-indicator-DjfUYI26.js";import"./vl-select-location-CjX68LwP.js";import"./vl-map-overview-map-DvYZAxi2.js";import"./vl-map-search-DPJCs4g5.js";import"./vl-map-side-sheet-BTYsSRzw.js";import"./vl-map-side-sheet-menu-item-Bk03jLfA.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
