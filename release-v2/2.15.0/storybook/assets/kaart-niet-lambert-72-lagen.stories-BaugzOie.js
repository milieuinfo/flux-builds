import{r as p,aR as b,x as n,w as g}from"./iframe-CsDE-vVI.js";import{e as d}from"./vl-map-base-layer-CgI99i60.js";import"./vl-map-click-action-BNjKIMGU.js";import"./vl-map-draw-action-BQiuTTyV.js";import"./vl-map-draw-line-action-CH5Funez.js";import"./vl-map-draw-point-action-padjFhHm.js";import"./vl-map-draw-polygon-action-DuVosHE8.js";import"./vl-map-measure-control-WFOVjKVm.js";import"./vl-map-delete-action-DQR82NMW.js";import"./vl-map-modify-action-Bzq-NALm.js";import"./vl-map-select-actions-C1sqn-Cp.js";import"./vl-map-select-action-D7KtcGNE.js";import"./vl-map-layer-action-OgcuTYDR.js";import{V as c}from"./vl-map-base-layer-grb-gray-BEd-NMxn.js";import"./vl-map-base-layer-grb-ortho-DMUN25x2.js";import"./vl-map-base-layer-grb-wEYCmMuY.js";import"./vl-map-action-control-CpQ-dRws.js";import"./vl-map-action-controls-CSZMrACR.js";import"./vl-map-current-location-Bqk_448-.js";import"./vl-map-layer-circle-style-B2Z5dFH3.js";import"./vl-map-layer-switcher-DOdvcrrZ.js";import"./vl-map-features-layer-C-OVASUA.js";import"./vl-map-wfs-layer-BH0THUDP.js";import"./vl-map-image-wms-layer-Dup8btDH.js";import{V as u}from"./vl-map-tiled-wms-layer-Ca5FSngm.js";import"./vl-map-wms-layer-1f6tt5Ai.js";import"./vl-map-xyz-wms-layer-DkvfICkF.js";import"./vl-map-wmts-layer-BsecCf2r.js";import"./vl-map-legend-DgYDcVks.js";import"./vl-map-loading-indicator-DdFk-Cye.js";import"./vl-select-location-A9To6Wq_.js";import"./vl-map-overview-map-K8smGPET.js";import"./vl-map-search-CatGr08s.js";import"./vl-map-side-sheet-omb3tSEG.js";import"./vl-map-side-sheet-menu-item-CisgDops.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
