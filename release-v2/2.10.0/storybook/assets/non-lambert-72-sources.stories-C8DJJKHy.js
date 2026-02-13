import{r as p,aV as b,x as l,H as d}from"./iframe-FlvNZLqI.js";import{e as c}from"./vl-map-base-layer-CnkWBJRC.js";import"./vl-map-click-action-Dtllzxf4.js";import"./vl-map-draw-action-DRi7vSsY.js";import"./vl-map-draw-line-action-Bjb9N7kR.js";import"./vl-map-draw-point-action-vgaS6wy6.js";import"./vl-map-draw-polygon-action-uCc-vYbc.js";import"./vl-map-measure-control-Cv8Urq5f.js";import"./vl-map-delete-action-BHgzdXmI.js";import"./vl-map-modify-action-D3qFF2N2.js";import"./vl-map-select-actions-ClufwTBV.js";import"./vl-map-select-action-BYIZFLpK.js";import"./vl-map-layer-action-CXKV-Uy3.js";import{V as g}from"./vl-map-base-layer-grb-gray-CrvS-DXx.js";import"./vl-map-base-layer-grb-ortho-ix654k9x.js";import"./vl-map-base-layer-grb-BupPf_Zn.js";import"./vl-map-action-control-FKFyKHMi.js";import"./vl-map-action-controls-Bpo5gMVP.js";import"./vl-map-current-location-D4W9dtHe.js";import"./vl-map-layer-circle-style-C46VzGwS.js";import"./vl-map-layer-switcher-vD8yBNrV.js";import"./vl-map-features-layer-D0V-0ESd.js";import"./vl-map-wfs-layer-Gl0Cfku4.js";import"./vl-map-image-wms-layer-ELx6dO9O.js";import{V as u}from"./vl-map-tiled-wms-layer-CLzhFEHd.js";import"./vl-map-wms-layer-CBkx5RX1.js";import"./vl-map-xyz-wms-layer-BgnE16HV.js";import"./vl-map-wmts-layer-DhVi1LJX.js";import"./vl-map-legend-B94LlyC6.js";import"./vl-map-loading-indicator-B0p4vlFE.js";import"./vl-select-location-SI1xOUzC.js";import"./vl-map-overview-map-BZzjP1IM.js";import"./vl-map-search-Cls3f7cq.js";import"./vl-map-side-sheet-IHGtpf7f.js";import"./vl-map-side-sheet-menu-item-Bp_4-YZI.js";var v=Object.getOwnPropertyDescriptor,y=(o,s,n,m)=>{for(var r=m>1?void 0:m?v(s,n):s,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return l`
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
        `}};p([c,u,g]);a=y([d("vl-map-non-lambert-72-sources")],a);p([a]);const w={title:"Ontwerp/Map/Niet-Lambert-72-lagen"},e=()=>l`<vl-map-non-lambert-72-sources></vl-map-non-lambert-72-sources>`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => html`<vl-map-non-lambert-72-sources></vl-map-non-lambert-72-sources>`",...e.parameters?.docs?.source}}};const _=["Demo"],re=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:_,default:w},Symbol.toStringTag,{value:"Module"}));export{e as D,re as m};
