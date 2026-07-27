import{u as o,j as e,M as m,C as i,S as n}from"./iframe-BgD7f6Cn.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-qqHzxMDN.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-CJ9Hplnc.js";import"./vl-map-click-action-BX01qtjm.js";import"./vl-map-draw-action-RmDkONxU.js";import"./vl-map-layer-action-BX3Ddssc.js";import"./composite-vector-layer-DxtYikiH.js";import"./vl-map-vector-layer-8pTtAovA.js";import"./vl-map-draw-line-action-BKQdWqBR.js";import"./vl-map-draw-point-action-C6bL_Vhu.js";import"./vl-map-draw-polygon-action-DAd6MDmo.js";import"./vl-map-measure-control-6pYCr8p5.js";import"./vl-map-control.mixin--bR9-jNe.js";import"./vl-map-delete-action-BQIrtgFi.js";import"./select-action-C985HNAa.js";import"./vl-map-modify-action-DAplWhZR.js";import"./vl-map-select-actions-DIPSa_WM.js";import"./vl-map-select-action-DYOF0hPH.js";import"./vl-map-base-layer-grb-gray--tROFEyH.js";import"./vl-map-base-layer-grb-ortho-D3ce20jK.js";import"./vl-map-base-layer-grb-CV9Ia_XC.js";import"./vl-map-action-control-B4R1obum.js";import"./vl-map-action-controls-CC1_1wv9.js";import"./vl-map-current-location-CySW1-sz.js";import"./vl-map-layer-circle-style-cxhA_2Al.js";import"./vl-map-layer-switcher-Qv5J9TSI.js";import"./vl-checkbox.component-BI-8WbFC.js";import"./vl-datepicker.component-BH6hFvSl.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-D3CXkpKa.js";import"./vl-input-field-masked.component-D5ECsW97.js";import"./vl-radio.component-DxXjedGG.js";import"./vl-radio-group.component-CSjbPTDR.js";import"./vl-select.component-DD168V7z.js";import"./vl-select-rich.component-Bxf89huo.js";import"./vl-textarea.component-gjn4lrXx.js";import"./vl-textarea-rich.component-Cr5hLJgB.js";import"./vl-upload.component-ZyZbl5Gk.js";import"./vl-upload-progress.component-Btk497js.js";import"./vl-map-features-layer-DuBfgdcT.js";import"./vl-map-wfs-layer-DHaXO9Ho.js";import"./vl-map-image-wms-layer-Cyq5hL_A.js";import"./vl-map-wms-layer-Grbr-tFG.js";import"./vl-map-tiled-wms-layer-mRy6TWlI.js";import"./vl-map-xyz-wms-layer-B2KP0qmj.js";import"./vl-map-wmts-layer-DA694tzU.js";import"./vl-map-legend-CQ_Zp3lt.js";import"./vl-map-loading-indicator-CcOAeLZG.js";import"./vl-select-location-DSPOZaW4.js";import"./vl-map-overview-map-wUCPR_OT.js";import"./vl-map-search-CWW3OY9L.js";import"./vl-map-side-sheet-ENHjjdkK.js";import"./vl-map-side-sheet-menu-item-ClZsTznf.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
