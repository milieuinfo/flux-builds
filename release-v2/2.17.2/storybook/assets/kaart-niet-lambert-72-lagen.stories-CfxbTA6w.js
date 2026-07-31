import{r as p,aR as b,x as n,w as g}from"./iframe-BAEsER5t.js";import{e as d}from"./vl-map-base-layer-Ba3ZBrry.js";import"./vl-map-click-action-vkwKGRCQ.js";import"./vl-map-draw-action-CxpL5Jhs.js";import"./vl-map-draw-line-action-CraxYTTz.js";import"./vl-map-draw-point-action-D5Oqq9Wo.js";import"./vl-map-draw-polygon-action-C6oAwgBI.js";import"./vl-map-measure-control-DBYzqliQ.js";import"./vl-map-delete-action-PwtWOF4B.js";import"./vl-map-modify-action-B6F9da3_.js";import"./vl-map-select-actions-qvc0KdGn.js";import"./vl-map-select-action-T_a5b1DS.js";import"./vl-map-layer-action-CnXyRgLs.js";import{V as c}from"./vl-map-base-layer-grb-gray-Bm2BVNHa.js";import"./vl-map-base-layer-grb-ortho-BOKqHZ7Q.js";import"./vl-map-base-layer-grb-3gvtX6F0.js";import"./vl-map-action-control-wL7R9Znd.js";import"./vl-map-action-controls-Ch2WcyLJ.js";import"./vl-map-current-location-CQxavDt0.js";import"./vl-map-layer-circle-style-Bp7B_iJQ.js";import"./vl-map-layer-switcher-CLXvJ3pD.js";import"./vl-map-features-layer-CzxM-Fvc.js";import"./vl-map-wfs-layer-C8hbBSiK.js";import"./vl-map-image-wms-layer-C69gAhlE.js";import{V as u}from"./vl-map-tiled-wms-layer-D-_OMfSc.js";import"./vl-map-wms-layer-DTEklOSs.js";import"./vl-map-xyz-wms-layer-D7AZePPx.js";import"./vl-map-wmts-layer-BeOsDFtx.js";import"./vl-map-legend-BeEoG_ju.js";import"./vl-map-loading-indicator-CfNvFKwk.js";import"./vl-select-location-D86HUSiW.js";import"./vl-map-overview-map-hC9_WSL5.js";import"./vl-map-search-odpAGVk4.js";import"./vl-map-side-sheet-NrNCT40Q.js";import"./vl-map-side-sheet-menu-item-BE_E5dLo.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
