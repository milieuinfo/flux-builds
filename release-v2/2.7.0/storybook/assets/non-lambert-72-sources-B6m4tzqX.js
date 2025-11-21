import{u as o,j as e,M as m,C as i,S as n}from"./iframe-BRJWU34U.js";import{m as s,D as l}from"./non-lambert-72-sources.stories-QHTyAf5K.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-mxB9Jgb1.js";import"./vl-map-click-action-BKYA1fBU.js";import"./vl-map-draw-action-DKMqKN8Y.js";import"./vl-map-layer-action-2JAAiOGD.js";import"./composite-vector-layer-BuQYujkN.js";import"./vl-map-vector-layer-BFohRpWd.js";import"./vl-map-draw-line-action-CcYIuiN2.js";import"./vl-map-draw-point-action-C4gpWcG4.js";import"./vl-map-draw-polygon-action-uHPrsMc9.js";import"./vl-map-measure-control-Cc4FvdRn.js";import"./vl-map-control.mixin-BVplJShe.js";import"./vl-map-delete-action-CzPS5WCd.js";import"./select-action-BvgTSUoJ.js";import"./vl-map-modify-action-ZHcO0FOc.js";import"./vl-map-select-actions-3RPg6nh_.js";import"./vl-map-select-action-DEZ1S2AT.js";import"./vl-map-base-layer-grb-gray-Di19ej0R.js";import"./vl-map-base-layer-grb-ortho-D0WjPjGE.js";import"./vl-map-base-layer-grb-BV3LtGVs.js";import"./vl-map-action-control-BpFx6JYW.js";import"./vl-map-action-controls-MTkIn2Lt.js";import"./vl-map-current-location-ordnqffI.js";import"./vl-map-layer-circle-style-BYHuRewh.js";import"./vl-map-layer-switcher-B-luGprY.js";import"./vl-checkbox.component-hEBJWAHV.js";import"./vl-datepicker.component-BaFRo2zZ.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-input-field-masked.component-BxETAt31.js";import"./vl-radio.component-OOpp9DdI.js";import"./vl-radio-group.component-B-OVdapL.js";import"./vl-select.component-CH2R68DQ.js";import"./vl-select-rich.component-BMxQbxL4.js";import"./vl-textarea.component-s96ZCi9E.js";import"./vl-textarea-rich.component-DNWjl1dl.js";import"./vl-upload.component-DzlL03XT.js";import"./vl-map-features-layer-B_ClZkbk.js";import"./vl-map-wfs-layer-DkWiFLJM.js";import"./vl-map-image-wms-layer-B1aaUYbh.js";import"./vl-map-wms-layer-D-8YWlSQ.js";import"./vl-map-tiled-wms-layer-DwBMivdU.js";import"./vl-map-xyz-wms-layer-BiVI7XK0.js";import"./vl-map-wmts-layer-D3tVYUI_.js";import"./vl-map-legend-BL1i3oFb.js";import"./vl-map-loading-indicator-DIz3UnAJ.js";import"./vl-select-location-4fwWjJj7.js";import"./vl-map-overview-map-PwpeScrl.js";import"./vl-map-search-Dk0qWCl8.js";import"./vl-map-side-sheet-CKxlNfP2.js";import"./vl-map-side-sheet-menu-item-Da8X0N_M.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
import { VlMap, VlMapBaseLayerGRBGray, VlMapTiledWmsLayer } from '@domg-wc/map';
import { CSSResult, LitElement, html } from 'lit';

@webComponent('vl-map-non-lambert-72-sources')
export class VlMapNonLambert72Sources extends LitElement {
    static {
        registerWebComponents([VlMap, VlMapTiledWmsLayer, VlMapBaseLayerGRBGray]);
    }

    static override get styles(): (CSSResult | CSSResult[])[] {
        return [];
    }

    render() {
        return html\`
            <vl-map lambert2008>
                <!--
                    Test andere niet-lambert 72 laag met volledig zoombare wereldkaart (EPSG:3857)
                    Custom background layer met OpenStreetMap tiles
                -->
                <vl-map-baselayer-grb-gray
                    background-layer
                    background-type="xyz"
                    background-options="\${JSON.stringify({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        attributions: 'Tiles © OpenStreetMap contributors',
                    })}"
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
        \`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-non-lambert-72-sources': VlMapNonLambert72Sources;
    }
}
`;function a(r){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:s}),`
`,e.jsx(t.h1,{id:"map---niet-lambert-72-lagen",children:"Map - niet-Lambert-72 lagen"}),`
`,e.jsx(t.p,{children:"Dit is een voorbeeld van hoe je niet-lambert-72 lagen kan toevoegen aan een kaart."}),`
`,e.jsx(t.h2,{id:"componenten",children:"Componenten"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-map--documentatie",children:"vl-map"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-baselayer-baselayer-grb-gray--documentatie",children:"vl-map-baselayer-grb-gray"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-layer-wms-layer-tiled-wms-layer--documentatie",children:"vl-map-tiled-wms-layer"})}),`
`]}),`
`,e.jsx(i,{of:l,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(n,{code:p,language:"ts",dark:!0})]})]})}function le(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{le as default};
