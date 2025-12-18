import{r as p,aQ as b,x as l,y as d}from"./iframe-BQb9mjVp.js";import{e as c}from"./vl-map-base-layer-BdAzFV8b.js";import"./vl-map-click-action-BDa6BrEp.js";import"./vl-map-draw-action-CqyNILdv.js";import"./vl-map-draw-line-action-DZhojuJL.js";import"./vl-map-draw-point-action-CR7ddRkX.js";import"./vl-map-draw-polygon-action-CqjX-jcV.js";import"./vl-map-measure-control-C1Tq1kC8.js";import"./vl-map-delete-action-BBWXc5FR.js";import"./vl-map-modify-action-yO-hY2gK.js";import"./vl-map-select-actions-D0dOlCa7.js";import"./vl-map-select-action-DXLaA25z.js";import"./vl-map-layer-action-BSO4v7MM.js";import{V as g}from"./vl-map-base-layer-grb-gray-DZZs_CZf.js";import"./vl-map-base-layer-grb-ortho-BZOvz_8L.js";import"./vl-map-base-layer-grb-BQddeTw-.js";import"./vl-map-action-control-DneuXg4s.js";import"./vl-map-action-controls-DcJGcngw.js";import"./vl-map-current-location-CYlq4gRi.js";import"./vl-map-layer-circle-style-CR8UDc62.js";import"./vl-map-layer-switcher-BYi95WWp.js";import"./vl-map-features-layer-naQh5VhU.js";import"./vl-map-wfs-layer-BXqXQMzf.js";import"./vl-map-image-wms-layer-D7F4awFb.js";import{V as u}from"./vl-map-tiled-wms-layer-CBrc2nHP.js";import"./vl-map-wms-layer-4KJs2H1c.js";import"./vl-map-xyz-wms-layer-BHRgQGsL.js";import"./vl-map-wmts-layer-BEeYehhO.js";import"./vl-map-legend-CZXgmM10.js";import"./vl-map-loading-indicator-C12p7uC5.js";import"./vl-select-location-Bq5mOnKR.js";import"./vl-map-overview-map-DGg4VIZc.js";import"./vl-map-search-OAyLIhbe.js";import"./vl-map-side-sheet-DyZSQRmO.js";import"./vl-map-side-sheet-menu-item-DsVu6cGj.js";var v=Object.getOwnPropertyDescriptor,y=(o,s,n,m)=>{for(var r=m>1?void 0:m?v(s,n):s,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return l`
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
