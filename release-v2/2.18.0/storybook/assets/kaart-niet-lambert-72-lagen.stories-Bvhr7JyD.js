import{r as p,aR as b,x as n,w as g}from"./iframe-COmpMQdF.js";import{e as d}from"./vl-map-base-layer-0uYY7Sp1.js";import"./vl-map-click-action-BNdsyfDH.js";import"./vl-map-draw-action-DGjwjylW.js";import"./vl-map-draw-line-action-Be3vLESN.js";import"./vl-map-draw-point-action-DhvOngxT.js";import"./vl-map-draw-polygon-action-CLfTtfrX.js";import"./vl-map-measure-control-LC2vNL8G.js";import"./vl-map-delete-action-BhXkTr9E.js";import"./vl-map-modify-action-CJjr7Mw5.js";import"./vl-map-select-actions-BV1SVHpW.js";import"./vl-map-select-action-C-BxFslN.js";import"./vl-map-layer-action-Dmzzxu-A.js";import{V as c}from"./vl-map-base-layer-grb-gray-BrRL2nbW.js";import"./vl-map-base-layer-grb-ortho-Dcaj4eCV.js";import"./vl-map-base-layer-grb-B-dzak7N.js";import"./vl-map-action-control-fKyiFmGF.js";import"./vl-map-action-controls-DrByiQns.js";import"./vl-map-current-location-ByKaIfi9.js";import"./vl-map-layer-circle-style-DXoMMLIy.js";import"./vl-map-layer-switcher-C3pylJqu.js";import"./vl-map-features-layer-FSFqeN_s.js";import"./vl-map-wfs-layer-C324PLya.js";import"./vl-map-image-wms-layer-CzNhj3OX.js";import{V as u}from"./vl-map-tiled-wms-layer-DU0q-KLJ.js";import"./vl-map-wms-layer-Ckesye3r.js";import"./vl-map-xyz-wms-layer-BM5pIXlL.js";import"./vl-map-wmts-layer-D3p5ABYc.js";import"./vl-map-legend-CPNUAaZf.js";import"./vl-map-loading-indicator-CB9p49Ev.js";import"./vl-select-location-vGRrnIG-.js";import"./vl-map-overview-map-sYTC-t8t.js";import"./vl-map-search-BjWvhLNy.js";import"./vl-map-side-sheet-BgnwMqmC.js";import"./vl-map-side-sheet-menu-item-CJ8qqZTL.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
