import{u as o,j as e,M as m,C as i,S as n}from"./iframe-CY-ZM549.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-pl98oh0X.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-BdyzNi5-.js";import"./vl-map-click-action-D-nJJsBN.js";import"./vl-map-draw-action-Bzh_ambS.js";import"./vl-map-layer-action-q8mfqCFR.js";import"./composite-vector-layer-fFVJWLGh.js";import"./vl-map-vector-layer-C3_HId6n.js";import"./vl-map-draw-line-action-B9Hp0UYQ.js";import"./vl-map-draw-point-action-KgB-cVUx.js";import"./vl-map-draw-polygon-action-Damrt1fi.js";import"./vl-map-measure-control-1B_P7rr7.js";import"./vl-map-control.mixin-aGd0eWF0.js";import"./vl-map-delete-action-Cl08sItc.js";import"./select-action-C0qTuwez.js";import"./vl-map-modify-action-BbQ_O8xJ.js";import"./vl-map-select-actions-DioWmkeq.js";import"./vl-map-select-action-BC_js2YJ.js";import"./vl-map-base-layer-grb-gray-D0d8kmNt.js";import"./vl-map-base-layer-grb-ortho-DUBVRqAJ.js";import"./vl-map-base-layer-grb-DIoMzSV5.js";import"./vl-map-action-control-BOXrZuBz.js";import"./vl-map-action-controls-BHDa8nI8.js";import"./vl-map-current-location-eclXaESl.js";import"./vl-map-layer-circle-style-DKf_JOHg.js";import"./vl-map-layer-switcher-Bx_ZGdUW.js";import"./vl-checkbox.component-BDn7ePcW.js";import"./vl-datepicker.component-YU9BW_0B.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-Bc3AJnIk.js";import"./vl-input-field-masked.component-CpP3801C.js";import"./vl-radio.component-D19T2Xu3.js";import"./vl-radio-group.component-DrOqLcWw.js";import"./vl-select.component-BFzkdhOR.js";import"./vl-select-rich.component-Ce4rMkaH.js";import"./vl-textarea.component-C2i5Nva7.js";import"./vl-textarea-rich.component-C1bved6Z.js";import"./vl-upload.component-CRjn2qhr.js";import"./vl-upload-progress.component-DXqNp2pu.js";import"./vl-map-features-layer-Bw14ba3R.js";import"./vl-map-wfs-layer-FaBKjmvQ.js";import"./vl-map-image-wms-layer-CTa4-E2r.js";import"./vl-map-wms-layer-BHHd5qQL.js";import"./vl-map-tiled-wms-layer-XGZT-ZK_.js";import"./vl-map-xyz-wms-layer-Bo_OgcA-.js";import"./vl-map-wmts-layer-Cfkq4F-O.js";import"./vl-map-legend-BtMvGXxN.js";import"./vl-map-loading-indicator-DBCgknxB.js";import"./vl-select-location-C2Mo5VP5.js";import"./vl-map-overview-map-Dw1aKoxr.js";import"./vl-map-search-DFrX-8NE.js";import"./vl-map-side-sheet-BD6Wjck2.js";import"./vl-map-side-sheet-menu-item-DYrY08H3.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
`,e.jsx(t.h1,{id:"kaart---niet-lambert-72-lagen",children:"Kaart - niet Lambert-72 lagen"}),`
`,e.jsx(t.p,{children:"Dit is een voorbeeld van hoe je niet Lambert-72 lagen kan toevoegen aan een kaart."}),`
`,e.jsx(t.h2,{id:"componenten",children:"Componenten"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-map--documentatie",children:"vl-map"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-baselayer-baselayer-grb-gray--documentatie",children:"vl-map-baselayer-grb-gray"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/map-layer-wms-layer-tiled-wms-layer--documentatie",children:"vl-map-tiled-wms-layer"})}),`
`]}),`
`,e.jsx(i,{of:l,sourceState:"none"}),`
`,e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Code"}),e.jsx(n,{code:p,language:"ts",dark:!0})]})]})}function de(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{de as default};
