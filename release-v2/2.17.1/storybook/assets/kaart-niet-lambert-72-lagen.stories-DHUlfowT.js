import{r as p,aR as b,x as n,w as g}from"./iframe-DynOw9qF.js";import{e as d}from"./vl-map-base-layer-C-Ui_DPh.js";import"./vl-map-click-action-qwb-jvj5.js";import"./vl-map-draw-action-C5_qkUUt.js";import"./vl-map-draw-line-action-CGHXRuUw.js";import"./vl-map-draw-point-action-CsXG6p3H.js";import"./vl-map-draw-polygon-action-T-xybUkY.js";import"./vl-map-measure-control-DEglAxqs.js";import"./vl-map-delete-action-0DRfi_Pw.js";import"./vl-map-modify-action-DcXk7X3W.js";import"./vl-map-select-actions-Bz1jkkd7.js";import"./vl-map-select-action-CWp9rZHQ.js";import"./vl-map-layer-action-CiQAHtMr.js";import{V as c}from"./vl-map-base-layer-grb-gray-C5sP2Bls.js";import"./vl-map-base-layer-grb-ortho-CnW-vkVB.js";import"./vl-map-base-layer-grb-HEQZuG50.js";import"./vl-map-action-control-DTl6PFN6.js";import"./vl-map-action-controls-D4qXSsXx.js";import"./vl-map-current-location-DA1zYyn3.js";import"./vl-map-layer-circle-style-DDKlHhd7.js";import"./vl-map-layer-switcher-BztisHxP.js";import"./vl-map-features-layer-v5om4n5p.js";import"./vl-map-wfs-layer-C7_3C5Jd.js";import"./vl-map-image-wms-layer-BjCeJuay.js";import{V as u}from"./vl-map-tiled-wms-layer-BVz_TOwI.js";import"./vl-map-wms-layer-DzZ35q4y.js";import"./vl-map-xyz-wms-layer-BFLCEKXU.js";import"./vl-map-wmts-layer-iYjtn0MS.js";import"./vl-map-legend-BaAFIxeW.js";import"./vl-map-loading-indicator-U6yR85R8.js";import"./vl-select-location-V7nnnj8q.js";import"./vl-map-overview-map-d8l5zJGn.js";import"./vl-map-search-C7inPmpN.js";import"./vl-map-side-sheet-BvpDZOsZ.js";import"./vl-map-side-sheet-menu-item-JmdjymKo.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
