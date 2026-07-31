import{u as o,j as e,M as m,C as i,S as n}from"./iframe-BAEsER5t.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-CfxbTA6w.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-Ba3ZBrry.js";import"./vl-map-click-action-vkwKGRCQ.js";import"./vl-map-draw-action-CxpL5Jhs.js";import"./vl-map-layer-action-CnXyRgLs.js";import"./composite-vector-layer-Ceqsls_-.js";import"./vl-map-vector-layer-C21YKvSS.js";import"./vl-map-draw-line-action-CraxYTTz.js";import"./vl-map-draw-point-action-D5Oqq9Wo.js";import"./vl-map-draw-polygon-action-C6oAwgBI.js";import"./vl-map-measure-control-DBYzqliQ.js";import"./vl-map-control.mixin-CgzqtY-o.js";import"./vl-map-delete-action-PwtWOF4B.js";import"./select-action-ZZ8rFmky.js";import"./vl-map-modify-action-B6F9da3_.js";import"./vl-map-select-actions-qvc0KdGn.js";import"./vl-map-select-action-T_a5b1DS.js";import"./vl-map-base-layer-grb-gray-Bm2BVNHa.js";import"./vl-map-base-layer-grb-ortho-BOKqHZ7Q.js";import"./vl-map-base-layer-grb-3gvtX6F0.js";import"./vl-map-action-control-wL7R9Znd.js";import"./vl-map-action-controls-Ch2WcyLJ.js";import"./vl-map-current-location-CQxavDt0.js";import"./vl-map-layer-circle-style-Bp7B_iJQ.js";import"./vl-map-layer-switcher-CLXvJ3pD.js";import"./vl-checkbox.component-37MCbxxg.js";import"./vl-datepicker.component-UC8l26UU.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BtKmawMQ.js";import"./vl-input-field-masked.component-B-8jjNyv.js";import"./vl-radio.component-DA7oHNWn.js";import"./vl-radio-group.component-iutw-yHu.js";import"./vl-select.component-C03IO6jd.js";import"./vl-select-rich.component-C7ZJIU_b.js";import"./vl-textarea.component-Ccg7Zw3E.js";import"./vl-textarea-rich.component-DjoW2JKC.js";import"./vl-upload.component-DeTYF_Sd.js";import"./vl-upload-progress.component-_iALaYaK.js";import"./vl-map-features-layer-CzxM-Fvc.js";import"./vl-map-wfs-layer-C8hbBSiK.js";import"./vl-map-image-wms-layer-C69gAhlE.js";import"./vl-map-wms-layer-DTEklOSs.js";import"./vl-map-tiled-wms-layer-D-_OMfSc.js";import"./vl-map-xyz-wms-layer-D7AZePPx.js";import"./vl-map-wmts-layer-BeOsDFtx.js";import"./vl-map-legend-BeEoG_ju.js";import"./vl-map-loading-indicator-CfNvFKwk.js";import"./vl-select-location-D86HUSiW.js";import"./vl-map-overview-map-hC9_WSL5.js";import"./vl-map-search-odpAGVk4.js";import"./vl-map-side-sheet-NrNCT40Q.js";import"./vl-map-side-sheet-menu-item-BE_E5dLo.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
