import{u as o,j as e,M as m,C as i,S as n}from"./iframe-ylVHDfb1.js";import{m as s,K as l}from"./kaart-niet-lambert-72-lagen.stories-DOuKr1lc.js";import"./preload-helper-PPVm8Dsz.js";import"./vl-map-base-layer-CLYIwId3.js";import"./vl-map-click-action-BLuH-KwQ.js";import"./vl-map-draw-action-4SGek5RA.js";import"./vl-map-layer-action-y4XOo-sQ.js";import"./composite-vector-layer-GcD34Qjx.js";import"./vl-map-vector-layer-Dn4_C3V3.js";import"./vl-map-draw-line-action-Bw2tYSlU.js";import"./vl-map-draw-point-action-DXod_8Z9.js";import"./vl-map-draw-polygon-action-BfUylNre.js";import"./vl-map-measure-control-B3PEGduZ.js";import"./vl-map-control.mixin-DlX3MB5-.js";import"./vl-map-delete-action-xmJIdwsi.js";import"./select-action-C0sPfvHH.js";import"./vl-map-modify-action-Ckfykabk.js";import"./vl-map-select-actions-DryCg55H.js";import"./vl-map-select-action-CWB8KgeP.js";import"./vl-map-base-layer-grb-gray-BIw39Kmk.js";import"./vl-map-base-layer-grb-ortho-BpsdDirX.js";import"./vl-map-base-layer-grb-B8IvcxKk.js";import"./vl-map-action-control-BXDI9RUT.js";import"./vl-map-action-controls-0rmAQjmn.js";import"./vl-map-current-location-hkhWTMYn.js";import"./vl-map-layer-circle-style-DY3daoG3.js";import"./vl-map-layer-switcher-HmUl9VGn.js";import"./vl-checkbox.component-JIaDIK8d.js";import"./vl-datepicker.component-bkPzXCz5.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-gnnClTNg.js";import"./vl-input-field-masked.component-CjwXFy6D.js";import"./vl-radio.component-bG225eeY.js";import"./vl-radio-group.component-Bg2Yqg1x.js";import"./vl-select.component-HC-RNt77.js";import"./vl-select-rich.component-Bv02-TZn.js";import"./vl-textarea.component-Plygnhn2.js";import"./vl-textarea-rich.component-B4o79-OP.js";import"./vl-upload.component-VXUupjXw.js";import"./vl-upload-progress.component-C-7N_DLZ.js";import"./vl-map-features-layer-llTbRGtW.js";import"./vl-map-wfs-layer-BOAQF7XF.js";import"./vl-map-image-wms-layer-CDoqsAUO.js";import"./vl-map-wms-layer-BdQr2olZ.js";import"./vl-map-tiled-wms-layer-BQr9GN-b.js";import"./vl-map-xyz-wms-layer-DFZbZplB.js";import"./vl-map-wmts-layer-C6xjhUsu.js";import"./vl-map-legend-DcKJ3Ezy.js";import"./vl-map-loading-indicator-DidNeO4U.js";import"./vl-select-location-BmQrmv_2.js";import"./vl-map-overview-map-DiMBT8zU.js";import"./vl-map-search-BucwD1Yj.js";import"./vl-map-side-sheet-DAG4zSR_.js";import"./vl-map-side-sheet-menu-item-tH2bkHXM.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
