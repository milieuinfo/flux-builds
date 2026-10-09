import{r as p,aR as b,b as n,w as g}from"./iframe-CsVpDM3d.js";import{e as d}from"./vl-map-base-layer-C5yxllno.js";import"./vl-map-click-action-CKqGST_R.js";import"./vl-map-draw-action-DkIMZNB8.js";import"./vl-map-draw-line-action-DfJNeYVS.js";import"./vl-map-draw-point-action-tRZwCGre.js";import"./vl-map-draw-polygon-action-D4Ij_px2.js";import"./vl-map-measure-control-Ce8tp7Fb.js";import"./vl-map-delete-action-7ftFz2f5.js";import"./vl-map-modify-action-B9nqd_9W.js";import"./vl-map-select-actions-CTEehY7B.js";import"./vl-map-select-action-OYZUSk6P.js";import"./vl-map-layer-action-DB2N1ug3.js";import{V as c}from"./vl-map-base-layer-grb-gray-SIPLRsqN.js";import"./vl-map-base-layer-grb-ortho-CAlS43gt.js";import"./vl-map-base-layer-grb-Dle7La6P.js";import"./vl-map-action-control-oUXIm44Q.js";import"./vl-map-action-controls-arw8MOIp.js";import"./vl-map-current-location-BBr9wKNr.js";import"./vl-map-layer-circle-style-DQBHFiZF.js";import"./vl-map-layer-switcher-DtukVvZz.js";import"./vl-map-features-layer-V53MVswX.js";import"./vl-map-wfs-layer-mchZUiXW.js";import"./vl-map-image-wms-layer-BlJW-4DH.js";import{V as u}from"./vl-map-tiled-wms-layer-Cq7ifLmX.js";import"./vl-map-wms-layer-DhzBd3yY.js";import"./vl-map-xyz-wms-layer-Cu1_ZY3N.js";import"./vl-map-wmts-layer-NsyNnr2I.js";import"./vl-map-legend-C-Z-uErR.js";import"./vl-map-loading-indicator-CUVLT815.js";import"./vl-select-location-OHCtIySG.js";import"./vl-map-overview-map-CP0P1AUm.js";import"./vl-map-search-B8QJdBs7.js";import"./vl-map-side-sheet-BPXBRK4Z.js";import"./vl-map-side-sheet-menu-item-BTebbgVu.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
