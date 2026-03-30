import{r as p,aQ as b,x as n,w as g}from"./iframe-BJy2lIHs.js";import{e as d}from"./vl-map-base-layer-Bhd069p5.js";import"./vl-map-click-action-C_riH_Wl.js";import"./vl-map-draw-action-DDKtBkq5.js";import"./vl-map-draw-line-action-DcQjRMtf.js";import"./vl-map-draw-point-action-BFZov_sj.js";import"./vl-map-draw-polygon-action-D5yr5cgd.js";import"./vl-map-measure-control-Cz_kofO0.js";import"./vl-map-delete-action-BXJcwC0G.js";import"./vl-map-modify-action-BwUs5Sds.js";import"./vl-map-select-actions-C41-pFCc.js";import"./vl-map-select-action-D288tA7K.js";import"./vl-map-layer-action-JwobYCBa.js";import{V as c}from"./vl-map-base-layer-grb-gray-CiePMeON.js";import"./vl-map-base-layer-grb-ortho-B-ur4EjY.js";import"./vl-map-base-layer-grb-C_FYObJa.js";import"./vl-map-action-control-BHfUlbZT.js";import"./vl-map-action-controls-C6RUcD32.js";import"./vl-map-current-location-C1mlLYUt.js";import"./vl-map-layer-circle-style-DwQxOcyQ.js";import"./vl-map-layer-switcher-BYnW4BCg.js";import"./vl-map-features-layer-D_GVez3n.js";import"./vl-map-wfs-layer-D9f5f8q0.js";import"./vl-map-image-wms-layer-C93LKK2G.js";import{V as u}from"./vl-map-tiled-wms-layer-BwBrMs3X.js";import"./vl-map-wms-layer-CVGDM6nM.js";import"./vl-map-xyz-wms-layer-CvHL38ly.js";import"./vl-map-wmts-layer-B9vFcxVF.js";import"./vl-map-legend-DT5KDPWK.js";import"./vl-map-loading-indicator-WNt0i02e.js";import"./vl-select-location-DYZWXnZ1.js";import"./vl-map-overview-map-DT0bYw4x.js";import"./vl-map-search-cQBjfms0.js";import"./vl-map-side-sheet-Clm7bsKh.js";import"./vl-map-side-sheet-menu-item-DB72H1ek.js";var v=Object.getOwnPropertyDescriptor,y=(o,m,l,s)=>{for(var r=s>1?void 0:s?v(m,l):m,t=o.length-1,i;t>=0;t--)(i=o[t])&&(r=i(r)||r);return r};let a=class extends b{static get styles(){return[]}render(){return n`
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
