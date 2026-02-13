import{u as o,j as e,M as m,C as i,S as n}from"./iframe-FlvNZLqI.js";import{m as s,D as l}from"./non-lambert-72-sources.stories-C8DJJKHy.js";import"./preload-helper-D9Z9MdNV.js";import"./vl-map-base-layer-CnkWBJRC.js";import"./vl-map-click-action-Dtllzxf4.js";import"./vl-map-draw-action-DRi7vSsY.js";import"./vl-map-layer-action-CXKV-Uy3.js";import"./composite-vector-layer-DIl1Iz9E.js";import"./vl-map-vector-layer-B_tYA0Mo.js";import"./vl-map-draw-line-action-Bjb9N7kR.js";import"./vl-map-draw-point-action-vgaS6wy6.js";import"./vl-map-draw-polygon-action-uCc-vYbc.js";import"./vl-map-measure-control-Cv8Urq5f.js";import"./vl-map-control.mixin-BYPa20Oh.js";import"./vl-map-delete-action-BHgzdXmI.js";import"./select-action-DI9xsXaU.js";import"./vl-map-modify-action-D3qFF2N2.js";import"./vl-map-select-actions-ClufwTBV.js";import"./vl-map-select-action-BYIZFLpK.js";import"./vl-map-base-layer-grb-gray-CrvS-DXx.js";import"./vl-map-base-layer-grb-ortho-ix654k9x.js";import"./vl-map-base-layer-grb-BupPf_Zn.js";import"./vl-map-action-control-FKFyKHMi.js";import"./vl-map-action-controls-Bpo5gMVP.js";import"./vl-map-current-location-D4W9dtHe.js";import"./vl-map-layer-circle-style-C46VzGwS.js";import"./vl-map-layer-switcher-vD8yBNrV.js";import"./vl-checkbox.component-O-6c3-uw.js";import"./vl-datepicker.component-DI-MKEnX.js";import"./cleave-esm-DfUhcNrv.js";import"./vl-fieldset.component-DeeFbOFG.js";import"./vl-input-field-masked.component-D8PAcClr.js";import"./vl-radio.component-BnTiVhkS.js";import"./vl-radio-group.component-DtZQv1s3.js";import"./vl-select.component-BzFfrDA1.js";import"./vl-select-rich.component-C8ulU5S-.js";import"./vl-textarea.component-CyGK04gO.js";import"./vl-textarea-rich.component-DleGgzbo.js";import"./vl-upload.component-BjH8U9s-.js";import"./vl-upload-progress.component-Cito6jKU.js";import"./vl-map-features-layer-D0V-0ESd.js";import"./vl-map-wfs-layer-Gl0Cfku4.js";import"./vl-map-image-wms-layer-ELx6dO9O.js";import"./vl-map-wms-layer-CBkx5RX1.js";import"./vl-map-tiled-wms-layer-CLzhFEHd.js";import"./vl-map-xyz-wms-layer-BgnE16HV.js";import"./vl-map-wmts-layer-DhVi1LJX.js";import"./vl-map-legend-B94LlyC6.js";import"./vl-map-loading-indicator-B0p4vlFE.js";import"./vl-select-location-SI1xOUzC.js";import"./vl-map-overview-map-BZzjP1IM.js";import"./vl-map-search-Cls3f7cq.js";import"./vl-map-side-sheet-IHGtpf7f.js";import"./vl-map-side-sheet-menu-item-Bp_4-YZI.js";const p=`import { registerWebComponents, webComponent } from '@domg-wc/common';
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
