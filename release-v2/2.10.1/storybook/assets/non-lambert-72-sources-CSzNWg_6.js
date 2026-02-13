import{u as o,j as e,M as m,C as i,S as n}from"./iframe-iHJvAyUB.js";import{m as s,D as l}from"./non-lambert-72-sources.stories-D64r58jJ.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-Ds3vxb_U.js";import"./vl-map-click-action-Vx4_XfiK.js";import"./vl-map-draw-action-XBTrtibF.js";import"./vl-map-layer-action-DwQtFJbn.js";import"./composite-vector-layer-CaXONNJE.js";import"./vl-map-vector-layer-CSngL2Zd.js";import"./vl-map-draw-line-action-B5kNeCoc.js";import"./vl-map-draw-point-action-DWWo52O_.js";import"./vl-map-draw-polygon-action-CQ7BlFQ5.js";import"./vl-map-measure-control-CIBajr_k.js";import"./vl-map-control.mixin-DdOaeXct.js";import"./vl-map-delete-action-DSS0ERK9.js";import"./select-action-1FZKXXYz.js";import"./vl-map-modify-action-DP09kytH.js";import"./vl-map-select-actions-BoHnlSce.js";import"./vl-map-select-action-BGaWXPUG.js";import"./vl-map-base-layer-grb-gray-CGABEvMh.js";import"./vl-map-base-layer-grb-ortho-Cucv-pCj.js";import"./vl-map-base-layer-grb-u7irM0Un.js";import"./vl-map-action-control-CSGEyMZ5.js";import"./vl-map-action-controls-Bnj83GyO.js";import"./vl-map-current-location-B53gHBBE.js";import"./vl-map-layer-circle-style-D2Cy4zz2.js";import"./vl-map-layer-switcher-CJKiTM0N.js";import"./vl-checkbox.component-BmiX-BFL.js";import"./vl-datepicker.component-D7ETKlXw.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-CZtvC4qc.js";import"./vl-input-field-masked.component-S71SoeVK.js";import"./vl-radio.component-F9w_UREQ.js";import"./vl-radio-group.component-BldzBbdS.js";import"./vl-select.component-Bhmn4O5w.js";import"./vl-select-rich.component-D6ImiD-g.js";import"./vl-textarea.component-BX4aRyKc.js";import"./vl-textarea-rich.component-CQUKlrCc.js";import"./vl-upload.component-DQn4riBv.js";import"./vl-upload-progress.component-CWGKtAnp.js";import"./vl-map-features-layer-922S3FZt.js";import"./vl-map-wfs-layer-DQK2RXpW.js";import"./vl-map-image-wms-layer-DRXG2hJb.js";import"./vl-map-wms-layer-CB5_hHHh.js";import"./vl-map-tiled-wms-layer-B2pZCK_B.js";import"./vl-map-xyz-wms-layer-BlV1TwDl.js";import"./vl-map-wmts-layer-DG76LaH8.js";import"./vl-map-legend-VDhesT9a.js";import"./vl-map-loading-indicator-D-gca0Hz.js";import"./vl-select-location-UAtB_7Kn.js";import"./vl-map-overview-map-qm3gAkpF.js";import"./vl-map-search-ghmzKhvU.js";import"./vl-map-side-sheet-BRPmgO7U.js";import"./vl-map-side-sheet-menu-item-DR3w8DFl.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(n,{code:p,language:"ts",dark:!0})]})]})}function de(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{de as default};
