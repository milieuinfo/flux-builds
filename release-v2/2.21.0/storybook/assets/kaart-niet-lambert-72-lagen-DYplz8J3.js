import{u as o,j as e,M as m,C as i,S as n}from"./iframe-CsVpDM3d.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-DNinY_E-.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-base-layer-C5yxllno.js";import"./vl-map-click-action-CKqGST_R.js";import"./vl-map-draw-action-DkIMZNB8.js";import"./vl-map-layer-action-DB2N1ug3.js";import"./composite-vector-layer-SlnhqSu0.js";import"./vl-map-vector-layer-DvuOF5hP.js";import"./vl-map-draw-line-action-DfJNeYVS.js";import"./vl-map-draw-point-action-tRZwCGre.js";import"./vl-map-draw-polygon-action-D4Ij_px2.js";import"./vl-map-measure-control-Ce8tp7Fb.js";import"./vl-map-control.mixin-Go2iyBG7.js";import"./vl-map-delete-action-7ftFz2f5.js";import"./select-action-WAQ_xvZN.js";import"./vl-map-modify-action-B9nqd_9W.js";import"./vl-map-select-actions-CTEehY7B.js";import"./vl-map-select-action-OYZUSk6P.js";import"./vl-map-base-layer-grb-gray-SIPLRsqN.js";import"./vl-map-base-layer-grb-ortho-CAlS43gt.js";import"./vl-map-base-layer-grb-Dle7La6P.js";import"./vl-map-action-control-oUXIm44Q.js";import"./vl-map-action-controls-arw8MOIp.js";import"./vl-map-current-location-BBr9wKNr.js";import"./vl-map-layer-circle-style-DQBHFiZF.js";import"./vl-map-layer-switcher-DtukVvZz.js";import"./vl-checkbox.component-dwTM-Wy8.js";import"./vl-datepicker.component-C2EPt_Iw.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D3SniA08.js";import"./vl-input-field-masked.component-Bp81wQF6.js";import"./vl-radio.component-Dq4icxGt.js";import"./vl-radio-group.component-zNwhQE1k.js";import"./vl-select.component-13WHQuOs.js";import"./vl-select-rich.component-CEJRQQv1.js";import"./vl-textarea.component-DW_fGO92.js";import"./vl-textarea-rich.component-CXyX5T1n.js";import"./vl-upload.component-CJwCXL7V.js";import"./vl-upload-progress.component-cmZSzeBu.js";import"./vl-map-features-layer-V53MVswX.js";import"./vl-map-wfs-layer-mchZUiXW.js";import"./vl-map-image-wms-layer-BlJW-4DH.js";import"./vl-map-wms-layer-DhzBd3yY.js";import"./vl-map-tiled-wms-layer-Cq7ifLmX.js";import"./vl-map-xyz-wms-layer-Cu1_ZY3N.js";import"./vl-map-wmts-layer-NsyNnr2I.js";import"./vl-map-legend-C-Z-uErR.js";import"./vl-map-loading-indicator-CUVLT815.js";import"./vl-select-location-OHCtIySG.js";import"./vl-map-overview-map-CP0P1AUm.js";import"./vl-map-search-B8QJdBs7.js";import"./vl-map-side-sheet-BPXBRK4Z.js";import"./vl-map-side-sheet-menu-item-BTebbgVu.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
