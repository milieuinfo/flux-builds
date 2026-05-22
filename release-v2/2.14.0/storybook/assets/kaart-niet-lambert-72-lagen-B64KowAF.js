import{u as o,j as e,M as m,C as i,S as n}from"./iframe-D9dm7PbY.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-53SuCoBG.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-DdS66t0g.js";import"./vl-map-click-action-DbMZhpF0.js";import"./vl-map-draw-action-79Miwb8u.js";import"./vl-map-layer-action-r_4xgSuA.js";import"./composite-vector-layer-x4I8esiy.js";import"./vl-map-vector-layer-D9Lz4fnH.js";import"./vl-map-draw-line-action-Bpf71Xzn.js";import"./vl-map-draw-point-action-Dm57k6Ab.js";import"./vl-map-draw-polygon-action-D3yxiCd_.js";import"./vl-map-measure-control-BJcRCXwT.js";import"./vl-map-control.mixin-BDkQyE22.js";import"./vl-map-delete-action-C77-GwvO.js";import"./select-action-FGFUwVmF.js";import"./vl-map-modify-action-BWPq8Ke-.js";import"./vl-map-select-actions-DOWV1qa3.js";import"./vl-map-select-action-C3dwQD65.js";import"./vl-map-base-layer-grb-gray-DlB85uo0.js";import"./vl-map-base-layer-grb-ortho-TTMcp5Kx.js";import"./vl-map-base-layer-grb-DOmN7tfs.js";import"./vl-map-action-control--iOOvikx.js";import"./vl-map-action-controls-8Be-NVqB.js";import"./vl-map-current-location-QsB17zbn.js";import"./vl-map-layer-circle-style-D6lcMikC.js";import"./vl-map-layer-switcher-D6HmnoI6.js";import"./vl-checkbox.component-CTssVSja.js";import"./vl-datepicker.component-BdyOMgdW.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-BtuuUfav.js";import"./vl-input-field-masked.component-B41Wbgbh.js";import"./vl-radio.component-BJRVPCas.js";import"./vl-radio-group.component-BOLoNZwp.js";import"./vl-select.component-CVn7Sb7E.js";import"./vl-select-rich.component-BEDJuxRx.js";import"./vl-textarea.component-DoL2u81l.js";import"./vl-textarea-rich.component-CiD6zwd0.js";import"./vl-upload.component-anH3-fcY.js";import"./vl-upload-progress.component-BSxlhh7Y.js";import"./vl-map-features-layer-CjjaBi1V.js";import"./vl-map-wfs-layer-QEPpHWcr.js";import"./vl-map-image-wms-layer-Dc0aPApK.js";import"./vl-map-wms-layer-Ba7EiQO8.js";import"./vl-map-tiled-wms-layer-CRzgWARe.js";import"./vl-map-xyz-wms-layer-DeC6HHro.js";import"./vl-map-wmts-layer-BCleBF15.js";import"./vl-map-legend-gAInGgTh.js";import"./vl-map-loading-indicator-DjfUYI26.js";import"./vl-select-location-CjX68LwP.js";import"./vl-map-overview-map-DvYZAxi2.js";import"./vl-map-search-DPJCs4g5.js";import"./vl-map-side-sheet-BTYsSRzw.js";import"./vl-map-side-sheet-menu-item-Bk03jLfA.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
