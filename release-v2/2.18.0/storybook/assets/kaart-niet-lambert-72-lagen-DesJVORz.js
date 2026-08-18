import{u as o,j as e,M as m,C as i,S as n}from"./iframe-COmpMQdF.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-Bvhr7JyD.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-0uYY7Sp1.js";import"./vl-map-click-action-BNdsyfDH.js";import"./vl-map-draw-action-DGjwjylW.js";import"./vl-map-layer-action-Dmzzxu-A.js";import"./composite-vector-layer-DUXzj8Pl.js";import"./vl-map-vector-layer-CcIOv0_Q.js";import"./vl-map-draw-line-action-Be3vLESN.js";import"./vl-map-draw-point-action-DhvOngxT.js";import"./vl-map-draw-polygon-action-CLfTtfrX.js";import"./vl-map-measure-control-LC2vNL8G.js";import"./vl-map-control.mixin-BB3wtnFf.js";import"./vl-map-delete-action-BhXkTr9E.js";import"./select-action-CNO2fMad.js";import"./vl-map-modify-action-CJjr7Mw5.js";import"./vl-map-select-actions-BV1SVHpW.js";import"./vl-map-select-action-C-BxFslN.js";import"./vl-map-base-layer-grb-gray-BrRL2nbW.js";import"./vl-map-base-layer-grb-ortho-Dcaj4eCV.js";import"./vl-map-base-layer-grb-B-dzak7N.js";import"./vl-map-action-control-fKyiFmGF.js";import"./vl-map-action-controls-DrByiQns.js";import"./vl-map-current-location-ByKaIfi9.js";import"./vl-map-layer-circle-style-DXoMMLIy.js";import"./vl-map-layer-switcher-C3pylJqu.js";import"./vl-checkbox.component-EJPFA4bC.js";import"./vl-datepicker.component-DmfscCVL.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-NffaKHwy.js";import"./vl-input-field-masked.component-BFws6Fm5.js";import"./vl-radio.component-D4p3hrpQ.js";import"./vl-radio-group.component-B6hXQMjs.js";import"./vl-select.component-CthavkMC.js";import"./vl-select-rich.component-C2BLc7Ky.js";import"./vl-textarea.component-UkWwb0Sl.js";import"./vl-textarea-rich.component-BbPr5WyQ.js";import"./vl-upload.component-BEPyxouF.js";import"./vl-upload-progress.component-QcCuM0ah.js";import"./vl-map-features-layer-FSFqeN_s.js";import"./vl-map-wfs-layer-C324PLya.js";import"./vl-map-image-wms-layer-CzNhj3OX.js";import"./vl-map-wms-layer-Ckesye3r.js";import"./vl-map-tiled-wms-layer-DU0q-KLJ.js";import"./vl-map-xyz-wms-layer-BM5pIXlL.js";import"./vl-map-wmts-layer-D3p5ABYc.js";import"./vl-map-legend-CPNUAaZf.js";import"./vl-map-loading-indicator-CB9p49Ev.js";import"./vl-select-location-vGRrnIG-.js";import"./vl-map-overview-map-sYTC-t8t.js";import"./vl-map-search-BjWvhLNy.js";import"./vl-map-side-sheet-BgnwMqmC.js";import"./vl-map-side-sheet-menu-item-CJ8qqZTL.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
