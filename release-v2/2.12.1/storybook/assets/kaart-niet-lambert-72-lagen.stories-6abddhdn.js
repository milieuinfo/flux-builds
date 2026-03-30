import{r as p,aQ as b,x as n,w as g}from"./iframe-B6HStWZE.js";import{e as d}from"./vl-map-base-layer-DGZE_dim.js";import"./vl-map-click-action-CSiD1I7I.js";import"./vl-map-draw-action-rTZOO8QL.js";import"./vl-map-draw-line-action-86epsaAO.js";import"./vl-map-draw-point-action-orEdIVbS.js";import"./vl-map-draw-polygon-action-_f-BbzoJ.js";import"./vl-map-measure-control-r5E7-o-x.js";import"./vl-map-delete-action-Bwytkdlg.js";import"./vl-map-modify-action-ChQaRHN1.js";import"./vl-map-select-actions-BC5C68SV.js";import"./vl-map-select-action-BuDmZen7.js";import"./vl-map-layer-action-CT76jI4l.js";import{V as c}from"./vl-map-base-layer-grb-gray-BRjzCKoS.js";import"./vl-map-base-layer-grb-ortho-D3mUDd0g.js";import"./vl-map-base-layer-grb-z00N6B9M.js";import"./vl-map-action-control-Bj83loxP.js";import"./vl-map-action-controls-hSk1I3TC.js";import"./vl-map-current-location-Cs0RWUCx.js";import"./vl-map-layer-circle-style-Coqe8fXI.js";import"./vl-map-layer-switcher-BB6WYB_2.js";import"./vl-map-features-layer-DH5hL79O.js";import"./vl-map-wfs-layer-B8FinQQt.js";import"./vl-map-image-wms-layer-Rhih67Ve.js";import{V as u}from"./vl-map-tiled-wms-layer-C9kP5QlP.js";import"./vl-map-wms-layer-C40bVVPb.js";import"./vl-map-xyz-wms-layer-1kn95sle.js";import"./vl-map-wmts-layer-3fHe4hpU.js";import"./vl-map-legend-C57uYdC_.js";import"./vl-map-loading-indicator-BHnQTh70.js";import"./vl-select-location-CDmh8X4p.js";import"./vl-map-overview-map-B5pmmXY6.js";import"./vl-map-search-gYpaKOSM.js";import"./vl-map-side-sheet-Bj-mqcvc.js";import"./vl-map-side-sheet-menu-item-DdAeeLcS.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
