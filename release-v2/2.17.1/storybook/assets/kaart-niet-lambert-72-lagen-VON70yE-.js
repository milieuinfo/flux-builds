import{u as o,j as e,M as m,C as i,S as n}from"./iframe-DynOw9qF.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-DHUlfowT.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-C-Ui_DPh.js";import"./vl-map-click-action-qwb-jvj5.js";import"./vl-map-draw-action-C5_qkUUt.js";import"./vl-map-layer-action-CiQAHtMr.js";import"./composite-vector-layer-mYza3Km8.js";import"./vl-map-vector-layer-C9gH2IcN.js";import"./vl-map-draw-line-action-CGHXRuUw.js";import"./vl-map-draw-point-action-CsXG6p3H.js";import"./vl-map-draw-polygon-action-T-xybUkY.js";import"./vl-map-measure-control-DEglAxqs.js";import"./vl-map-control.mixin-BzbtEad7.js";import"./vl-map-delete-action-0DRfi_Pw.js";import"./select-action-dAzhBILC.js";import"./vl-map-modify-action-DcXk7X3W.js";import"./vl-map-select-actions-Bz1jkkd7.js";import"./vl-map-select-action-CWp9rZHQ.js";import"./vl-map-base-layer-grb-gray-C5sP2Bls.js";import"./vl-map-base-layer-grb-ortho-CnW-vkVB.js";import"./vl-map-base-layer-grb-HEQZuG50.js";import"./vl-map-action-control-DTl6PFN6.js";import"./vl-map-action-controls-D4qXSsXx.js";import"./vl-map-current-location-DA1zYyn3.js";import"./vl-map-layer-circle-style-DDKlHhd7.js";import"./vl-map-layer-switcher-BztisHxP.js";import"./vl-checkbox.component-BFWyhwF-.js";import"./vl-datepicker.component-CDbT1ywF.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-Cn1m5Esg.js";import"./vl-input-field-masked.component-DdXfAdAC.js";import"./vl-radio.component-V9fz9CTI.js";import"./vl-radio-group.component-CiIaRUE-.js";import"./vl-select.component-DladKYQf.js";import"./vl-select-rich.component-CaoTbphr.js";import"./vl-textarea.component-DgY8k7Uy.js";import"./vl-textarea-rich.component-CdstHoUA.js";import"./vl-upload.component-CxW_ou6b.js";import"./vl-upload-progress.component--K8eu_mT.js";import"./vl-map-features-layer-v5om4n5p.js";import"./vl-map-wfs-layer-C7_3C5Jd.js";import"./vl-map-image-wms-layer-BjCeJuay.js";import"./vl-map-wms-layer-DzZ35q4y.js";import"./vl-map-tiled-wms-layer-BVz_TOwI.js";import"./vl-map-xyz-wms-layer-BFLCEKXU.js";import"./vl-map-wmts-layer-iYjtn0MS.js";import"./vl-map-legend-BaAFIxeW.js";import"./vl-map-loading-indicator-U6yR85R8.js";import"./vl-select-location-V7nnnj8q.js";import"./vl-map-overview-map-d8l5zJGn.js";import"./vl-map-search-C7inPmpN.js";import"./vl-map-side-sheet-BvpDZOsZ.js";import"./vl-map-side-sheet-menu-item-JmdjymKo.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
